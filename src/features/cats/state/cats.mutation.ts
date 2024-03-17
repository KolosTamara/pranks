import { useMutation } from "@tanstack/react-query";
import { CatsApi } from "../api/cats.api";

export function useCatFactsMutation() {
  return useMutation({
    mutationFn: async () => {
      const { data } = await CatsApi.getCatFact();
      return data;
    }
  })
}