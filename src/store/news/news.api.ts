import axios from "axios";
import { ServerUrl } from "../../enums";

export const getLatestNews = async () => {
  const request = await axios.get(
    ServerUrl.LatestNews
  )
  return request?.data
}

export const getPopularNews = async () => {
  const request = await axios.get(
    ServerUrl.PopularNews
  )
  return request?.data
}