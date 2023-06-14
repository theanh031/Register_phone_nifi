import axios from "axios";
import { phoneNumberState } from "../types";

const instance = axios.create({
    baseURL: "http://localhost:4444/api",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export async function addPhoneNumber(formData: phoneNumberState) {
    return await instance.post('', JSON.stringify(formData))
}


