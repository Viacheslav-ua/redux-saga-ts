import axios from "axios";

export const getLatestNews = async () => {
  const request = await axios.get(
    'https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10&page=0'
  )
  return request?.data
}

export const getPopularNews = async () => {
  const request = await axios.get(
    'https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0'
  )
  return request?.data
}