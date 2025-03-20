"use server";
import { db } from "@/lib/db";

export const getAllBookletIds = async () => {
    try {
        const booklet_ids = await db.redeemed_booklet_ids.findMany();

        return booklet_ids;

    } catch (error) {
        return error;
    }
}