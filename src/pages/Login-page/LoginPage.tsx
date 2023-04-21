
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Button } from '@mui/material';

import CoPresentIcon from '@mui/icons-material/CoPresent';
import TextField from '@mui/material/TextField';

import toast, { Toaster } from "react-hot-toast";

import { ErrorMsg } from "../../enums/exceptions.enum";

import style from "./LoginPage.module.css";
import Auth from "../../components/auth";


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


const LoginPage: React.FC = () => {

  const handleSubmit = () => {

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
      </div>

      <Auth />

    </form>
  )


};

export default LoginPage