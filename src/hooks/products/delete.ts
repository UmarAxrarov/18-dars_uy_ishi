import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteP } from "../../api/products";
import type { StrOrNum } from "../../types/strOrNum";

export function useDelete() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: StrOrNum) => deleteP(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
}