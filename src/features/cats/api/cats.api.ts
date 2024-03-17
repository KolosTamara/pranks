import axios from "axios"

export const CatsApi = {
  async getCatFact() {
    return axios.get<ICatFact>("https://catfact.ninja/fact");
  }
}