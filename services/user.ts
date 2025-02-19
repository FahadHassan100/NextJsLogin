"use server";
import { db } from "@/lib/db";

export const getUserByEmail = async (email:string) => {
    try {
        const user = await db.tokenSysClients.findUnique({
            where: {
                Client_Email: email,
            }
        })

        return user;

    } catch (error) {
        return error;
    }
}

export const updateStatus = async () => {
    try {
        const userUpdate = await db.tokenSysClients.update({
            where: {
                Client_Email: "sarahdunn7430@gmail.com",
            },
            data:{
                transfer_status: 1
            }
        })
        return userUpdate;

    } catch (error) {
        return error;
    }
}

// export const getUserById = async (id: string) => {
//     try {
//       const user = await db.clients.findUnique({ where: { ID } });
  
//       return user;
//     } catch {
//       return null;
//     }
//   };


  