// import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


// import toast, { Toaster } from "react-hot-toast";
// import sprite from "../../Images/sprite.svg";
// import style from "./AuthForm.module.css";
// import {
//   useLoginUserMutation,
//   useRegistrationUserMutation,
// } from "../../redux/services/authAPI";
// import * as actions from "../../redux/auth/auth-actions";
// import { API_URL } from '../../config'

import style from "./Login.module.css"
import { ErrorMsg } from "../../enums/exceptions.enum";


interface FormValues {
  login: string;
  password: string
}

interface ErrorFormValues {
  login?: string;
  password?: string
}

const initialValues = {
  login: "",
  password: "",
};

const validate = (values: FormValues) => {
  let errors: ErrorFormValues = {};

  if (!values.login) {
    errors.login = "Login is required";
  } else if (values.login.length < 3) {
    errors.login = "Password too short";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }

  return errors;
};


const Login: React.FC = () => {

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
    <form
      className={style.formLogin}
    onSubmit={handleSubmit}
    >
      <h2 className={style.header}>Authorization</h2>

      <div className={style.container}>
        <p>You can come in to work with data for Test</p>
        <div className={style.btn}>
          <Button variant="outlined" startIcon={<CoPresentIcon />}>
            <b>Login with data Test</b>
          </Button>
        </div>

        <p>Or log in with your username and password, by pre-registering.</p>

        

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          
          <TextField
          className={style.input}
          error={!!loginError}
          id="standard-error-text"
          label="Login"
          name="login"
          onChange={handleChangeInput}
          // helperText={'errors.login'}
          variant="standard"
          />

          {/* <InputLabel color={passwordError ? 'error' : 'primary'} htmlFor="standard-error-adornment-password">Password</InputLabel> */}
          <Input
            className={style.input}
            id="standard-error-adornment-password"
            type={showPassword ? 'text' : 'password'}
            error={!!passwordError}
            placeholder="Password"
             // helperText={'errors.login'}
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

      </div>

    </form>
  );
};

export default Login