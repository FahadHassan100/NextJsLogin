"use client";
import React, { useState } from "react";
import { getUserByEmail } from "@/services/user";
import { useEffect } from "react";

const CheckScreen = () => {
  const [nameHai, setNameHai] = useState();

  useEffect(() => {
    const getUsr = async () => {
      const abc: any = await getUserByEmail("test@live.com");
      setNameHai(abc.Client_Name);
      console.log(abc);
    };

    getUsr();
  }, []);

  return <div>This is username from database: {nameHai && nameHai} </div>;
};

export default CheckScreen;
