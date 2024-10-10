"use server";

import { cookies } from "next/headers";
import { createAdminClient } from "../appwrite.config";
import { redirect } from "next/navigation";

export const logIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    redirect("/");
  } catch (error) {
    console.error("Error", error);
  }
};
