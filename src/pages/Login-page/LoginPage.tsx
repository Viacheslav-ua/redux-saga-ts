// import React from "react";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import TextField from '@mui/material/TextField';

// import toast, { Toaster } from "react-hot-toast";
// import sprite from "../../Images/sprite.svg";
// import style from "./AuthForm.module.css";
// import {
//   useLoginUserMutation,
//   useRegistrationUserMutation,
// } from "../../redux/services/authAPI";
// import * as actions from "../../redux/auth/auth-actions";
// import { API_URL } from '../../config'

import { ErrorMsg } from "../../enums/exceptions.enum";
import Login from "../../components/Login";

  
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

return (<Login />)

};

export default LoginPage