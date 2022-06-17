import axios from "axios";
import { ResponseType } from "../types/api";

const API = "9331ad064e525f15191b64b3b9bd00db";
const instanceAxios = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?appid=${API}&lang=ru&units=metric&`,
});

export const weatherApi = {
  getWeather(name: string) {
    return instanceAxios.get<ResponseType>(`&q=${name}`).then(res => res.data);
  },
};
