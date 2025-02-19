import { NextAuthConfig } from "next-auth";
import { CredentialProvider } from "@/auth/providers";

export const authConfig = {
    providers: [CredentialProvider],
} satisfies NextAuthConfig