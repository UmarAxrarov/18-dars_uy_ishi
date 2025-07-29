import { useQuery } from "@tanstack/react-query";
import type { StrOrNum } from "../../types/strOrNum";
import { findOne } from "../../api/products";

export function useFindOne(id: StrOrNum) {
    return useQuery({
        queryFn: () => findOne(id),
        queryKey: ["product", id],
        enabled: !!id,
    });
}