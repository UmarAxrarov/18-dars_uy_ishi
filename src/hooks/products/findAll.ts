import { useQuery } from "@tanstack/react-query";
import { findAll } from "../../api/products";

export function useFindAll() {
    return useQuery({
        queryKey: ["products"],
        queryFn: findAll
    })
}