import axios from "axios";
import { envBook } from "../lib/urls";

export const generateChatbotResponse = async ({ data }: { data: any }) => {
  try {
    const res = await axios.post(`${envBook.chat}`, data);
    return res.data;
  } catch (error) {
    console.log("error while getting data", error);
    throw error;
  }
};
