import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "@/auth/config";
import NextAuth from "next-auth";
import { authRoutes, publicRoutes } from "./routes";


// export function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname === "/") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

export const { auth } = NextAuth(authConfig);

export default auth((req) => {

    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const pathname = nextUrl.pathname;

    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

    if (req.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/login", req.url));
    }


    if (!isLoggedIn && !isPublicRoutes) {
        return Response.redirect(new URL("/login", nextUrl));
    }

    console.log(isLoggedIn);

});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };