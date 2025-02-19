import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import { authConfig } from "./config"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session:{
        strategy: "jwt",
        maxAge: 60 * 60 * 24,
    },
    pages:{
        signIn: "/tokensys/",
        error: "/tokensys/error,"
    },
    callbacks: {
        // Attach user data to the token
    async jwt({ token, user }:any) {
        if (user) {
          // Add user fields to the token (initial login)
          // token.id = user.ID;
          // token.email = user.Email_Adress;
          // token.firstName = user.First_Name;
          // token.lastName = user.Last_Name;
          // token.role = user.Client_Status; // Example field
          token.id = user.ID;
          token.email = user.Client_Email;
          token.ClientName = user.Client_Name;
          token.transferStatus = user.transfer_status;
        }
        return token;
      },
  
      // Make the token available in the session
      async session({ session, token }:any) {
        if (session.user) {
          session.user.id = token.id;
          session.user.Client_Email = token.email;
          session.user.Client_Name = token.ClientName;
          session.user.transfer_status = token.transferStatus;
          //session.user.lastName = token.lastName;
          //session.user.role = token.role; // Example field
        }
        return session;
      },
    },
    ...authConfig
})