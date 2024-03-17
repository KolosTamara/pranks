import axios, { GenericAbortSignal } from "axios"
import { IAgify } from "../model/agify.model"

export const AgifyApi = {
  async getAgeByName(name: string, signal: GenericAbortSignal) {
    return axios.get<IAgify>(`https://api.agify.io?name=${name}`, { signal });
  }
}