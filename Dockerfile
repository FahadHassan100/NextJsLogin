# Use official Node.js runtime as the base image
FROM node:18-alpine AS base

# Set working directory
FROM base AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json package-lock.json* ./
RUN \
    ls -la && \
    if [ -f package-lock.json ]; then echo "Using npm" && npm ci; \
    else echo "Lockfile not found: yarn.lock, package-lock.json, or pnpm-lock.yaml missing" && exit 1; \
    fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


# Generate Prisma client
RUN npx prisma generate


# Build the Next.js app
RUN \
    if [ -f package-lock.json ]; then npm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Expose the port Next.js will run on
EXPOSE 3009
ENV PORT 3009
ENV HOSTNAME "0.0.0.0"

# Start the Next.js app
CMD ["node", "server.js"]