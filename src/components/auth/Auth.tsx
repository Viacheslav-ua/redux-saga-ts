
import { useState } from "react"

import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import style from "./Auth.module.css"
 
const Auth: React.FC = () => {

const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginError, setLoginError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "login") setLogin(e.currentTarget.value)
    if (e.currentTarget.name === "password") setPassword(e.currentTarget.value)
  }

  const handleSubmit = () => {
    return null
  }


  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          
          <TextField
          className={style.input}
          error={!!loginError}
          id="standard-error-text"
          label="Login"
          name="login"
          onChange={handleChangeInput}
          variant="standard"
          />

          <Input
            className={style.input}
            id="standard-error-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            error={!!passwordError}
            placeholder="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

        </FormControl>
  )
}

export default Auth