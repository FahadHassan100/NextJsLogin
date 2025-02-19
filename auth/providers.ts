import { loginSchema } from "@/schemas";
import bcrypt from "bcryptjs"
import { getUserByEmail } from "@/services/user";
import Credentials from "next-auth/providers/credentials";
const crypto = require("crypto");


export const CredentialProvider = Credentials({
    async authorize(credentials) {

        const validateFields = loginSchema.safeParse(credentials);

        if(validateFields.success){

            const { email, password } = validateFields.data;

            const user:any = await getUserByEmail(email);

            if(!user || !user.Password ) return null;

            const hash = crypto.createHash("sha1").update(password).digest("hex");

            if(hash === user.Password){

                return user;
            }

            // const passwordMatch = await bcrypt.compare(password, user.password);

            // if(passwordMatch) return user;

        }

        return null;

        
    }
})