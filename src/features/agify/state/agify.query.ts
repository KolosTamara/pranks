import { useQuery } from "@tanstack/react-query";
import { AgifyApi } from "../api/agify.api";
import { IAgify } from "../model/agify.model";

export const agifyQueryKey = ['agify']
export function useAgifyQuery() {
  return useQuery<IAgify>({
    queryKey: agifyQueryKey,
    queryFn: async () => {
      const { data } = await AgifyApi.getAgeByName("Tamara")
      return data
    }
  })
}