import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IProduct } from "../../interfaces/products.interface";
import { create } from "../../api/products";

export function useCreate() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (payload: Partial<IProduct>) => create(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        }
    })
}