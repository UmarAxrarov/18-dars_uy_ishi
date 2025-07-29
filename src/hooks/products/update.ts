import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { StrOrNum } from "../../types/strOrNum";
import type { IProduct } from "../../interfaces/products.interface";
import { update } from "../../api/products";

export function useUpdate() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: StrOrNum; data: Partial<IProduct> }) =>
            update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: ["products", ""] });
            queryClient.invalidateQueries({ queryKey: ["product", id] });
        },
    });
}