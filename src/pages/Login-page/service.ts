import { ErrorMsg } from "../../enums/exceptions.enum";

export const validationLogin = (login: string): string | null => {
  let error = null

  if (!login) {
    error = ErrorMsg.LoginRequired
      return error

  } else if (login.length < 3) {
    error = ErrorMsg.LoginShort
      return error

  } else if (login.length > 64) {
    error = ErrorMsg.LoginLong
  }

  return error
}

export const validationPassword = (password: string): string | null => {
  let error = null

  if (!password) {
    error = ErrorMsg.PasswordRequired
      return error

  } else if (password.length < 3) {
    error = ErrorMsg.PasswordShort
      return error

  } else if (password.length > 64) {
    error = ErrorMsg.PasswordLong
  }

  return error
}