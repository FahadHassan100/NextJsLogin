// 'use server';
// import { db } from "@/lib/db";


// export const getBookletId = async (email:string) => {

//     try {
        

//         const getClientID = await getClientByEmail(email);
//         const clientID = getClientID?.ID


//         const getBooklet = db.clients_Orders.findMany({
//             where:{
//                 Client_ID: clientID,
//             }
//         });

        

//         return getBooklet;


//     } catch (error) {
//         throw error;

//     }


// }


// export const getClientByEmail = async (email:string) => {

//     try {
        
//         const getClientId = db.clients.findUnique({
//             where:{
//                 Email_Adress: email,
//             }
//         });

//         return getClientId;


//     } catch (error) {
//         throw error;

//     }


// }