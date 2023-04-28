
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import style from "./Auth.module.css"
import { validationLogin, validationPassword } from "./service"

export interface AuthValues {
  login: string;
  password: string
}

interface Props {
  handleAuthSubmit: any
  submitButtonName?: string
  linkButtonName?: string
  linkPath: string

}

const Auth: React.FC<Props> = ({ 
  handleAuthSubmit,
  submitButtonName,
  linkButtonName,
  linkPath,
 }) => {

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginError, setLoginError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case 'login': 
        setLogin(e.currentTarget.value)
        setLoginError(false)
          break;

      case 'password':
        setPassword(e.currentTarget.value)
        setPasswordError(false)
          break;
    
      default:
        break;
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const invalidLogin = validationLogin(login)
    const invalidPassword = validationPassword(password)
    if(invalidLogin) {
      toast.error(invalidLogin)
      setLoginError(true)
      return
    }
        
    if(invalidPassword) {
      toast.error(invalidPassword)
      setPasswordError(true)
      return
    }

    handleAuthSubmit({ login, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">

        <TextField
          className={style.input}
          error={loginError}
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
          onChange={handleChangeInput}
          error={passwordError}
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
        <Stack className={style.buttons}
          spacing={2}
          direction="row"
          divider={<Divider flexItem />}
        >
          <Button type="submit" 
            variant="outlined"
            disabled={loginError || passwordError}
          ><b>{submitButtonName || 'submit'}</b></Button>
          <Button type="button"
            variant="outlined"
            onClick={() => navigate(linkPath)}
          ><b>{linkButtonName || 'link'}</b></Button>
        </Stack>

      </FormControl>
    </form>
  )
}

export default Auth