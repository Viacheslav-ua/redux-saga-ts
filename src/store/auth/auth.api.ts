import axios from "axios"
import jwt_decode from "jwt-decode"

import { ServerUrl } from "../../enums"
import { Endpoints } from "./auth.enum"
import { AuthValues } from "../../components/Auth"

interface LoginResponse {
  accessToken: string
}

export const login = async (body: AuthValues) => {
  const request = await axios.post<any, LoginResponse>(
    ServerUrl.TodoBaseDomain + Endpoints.Login,
    body,
  )
  console.log(jwt_decode(request?.accessToken));
  
  return {
    ...request,
  
  }
}
  
