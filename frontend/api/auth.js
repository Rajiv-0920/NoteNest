import { baseApi } from "./base";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../src/firebase/firebase.js";
export const login = async (data, signal) => {
  try {
    const res = await baseApi
      .post("/auth/login", data, signal)
      .then((res) => res.data);
    localStorage.setItem("jwtToken", res.data.token);
    return res;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (data, signal) => {
  return await baseApi
    .post("/auth/signup", data, signal)
    .then((res) => res.data);
};

export const logout = async () => {
  return await baseApi.post("/auth/logout");
};

export const googleLogin = async () => {
  try {
    const customProvider = new GoogleAuthProvider();
    customProvider.setCustomParameters({
      prompt: "select_account", // forces account selection
    });

    const result = await signInWithPopup(auth, customProvider);
    const user = result.user;
    const idToken = await user.getIdToken();

    localStorage.setItem("jwtToken", idToken);

    await baseApi.post("/auth/google-login", { idToken });
  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};

export const googleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign out error:", error);
  }
};
