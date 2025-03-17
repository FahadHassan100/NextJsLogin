"use server";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

export const registerUser = async (formData:any) => {

    const {username,email,password} = Object.fromEntries(formData);

    console.log(username+" - "+email+" - "+password);


    // await db.user.create({
    //         data:{
    //             name: username,
    //             email:email,
    //             password: password,
    //         },
    // });

    //redirect("/");

}

export const authentication = async (formData:any) => {

    const {email,password} = Object.fromEntries(formData);

    console.log(email+"--"+password);

    return await signInCredentials(email, password);

}


// Sign in credentials from next-auth
export const signInCredentials = async (email: string, password: string) => {

    try {
        
        await signIn("credentials",{email,password, redirectTo: "/testt/dashboard"});


    } catch (error) {
        
        console.log(error);
        throw error;


    }

}