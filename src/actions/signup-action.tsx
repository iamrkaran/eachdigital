"use server";
import axiosInstance from "@/config/axiosConfig";

export default async function signup(
  formData: SignupFormData
): Promise<SignupResponse | ErrorResponse> {
  try {
    const response = await axiosInstance.post("/auth/signup", formData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}


