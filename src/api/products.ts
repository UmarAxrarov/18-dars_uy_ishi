import axios from "axios";
import type { IProduct } from "../interfaces/products.interface";
import type { StrOrNum } from "../types/strOrNum";

const BASE_URL: string = "https://fakestoreapi.com/products";

export async function findAll(): Promise<IProduct[]> {
    try {
        const response = await axios.get<IProduct[]>(BASE_URL);
        return response.data;

    } catch (error) {
        console.log("findAll Error: ", error);
        throw error;
    }
}

export async function findOne(id: StrOrNum): Promise<IProduct> {
    try {
        const response = await axios.get<IProduct>(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.log("GetOne Error: ", error);
        throw error
    }
}

export async function create(payload: Partial<IProduct>): Promise<IProduct> {
    try {
        const response = await axios.post<IProduct>(BASE_URL, payload);
        return response.data;
    } catch (error) {
        console.log("Create Error: ", error);
        throw error
    }
}

export async function update(
    id: StrOrNum,
    data: Partial<IProduct>
): Promise<IProduct> {
    try {
        const response = await axios.put<IProduct>(`${BASE_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Update error:", error);
        throw error;
    }
}

export async function deleteP(id: StrOrNum): Promise<void> {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error("Delete error:", error);
        throw error;
    }
}