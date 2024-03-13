import { useQuery } from "@tanstack/react-query";
import { AgifyApi } from "../api/agify.api";
import { IAgify } from "../model/agify.model";

export function useAgifyQuery(name: string) {
  return useQuery<IAgify>({
    queryKey: ['agify', name],
    queryFn: async () => {
      const { data } = await AgifyApi.getAgeByName(name)
      return data
    },
    enabled: !!name,
  })
}