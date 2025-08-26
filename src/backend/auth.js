import { account } from "./appwrite";

export async function signup(email, password, name) {
  return await account.create("unique()", email, password, name);
}

export async function login(email, password) {
  return await account.createEmailPasswordSession(email, password);
}

export async function loginWithGoogle() {
  account.createOAuth2Session("google", "http://localhost:5173", "http://localhost:5173/login");
}

export async function logout() {
  return await account.deleteSession("current");
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}
