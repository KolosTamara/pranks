import { useQuery } from "@tanstack/react-query";
import { AgifyApi } from "../api/agify.api";
import { IAgify } from "../model/agify.model";

export function useAgifyQuery(name: string) {
  return useQuery<IAgify>({
    queryKey: ['agify', name],
    queryFn: async ({ signal }) => {
      const { data } = await AgifyApi.getAgeByName(name, signal)
      return data
    },
    enabled: !!name,
  })
}