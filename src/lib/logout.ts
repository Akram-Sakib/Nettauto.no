import { ACCESS_TOKEN_KEY } from "@/data/constants";
import { removeFromCookie } from "@/services/actions";
import { signOut } from "next-auth/react";

export const logoutAsync = async (redirect: boolean = true) => {
    removeFromCookie(ACCESS_TOKEN_KEY)
    await signOut({ redirect });
}

export const logout = () => {
    logoutAsync()
    removeFromCookie(ACCESS_TOKEN_KEY)
}