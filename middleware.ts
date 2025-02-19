import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "@/auth/config";
import NextAuth from "next-auth";


// export function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname === "/") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

export const { auth } = NextAuth(authConfig);

export default auth((req) => {

    if (req.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/login", req.url));
      }

})