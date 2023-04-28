import style from "./Registration.module.css"
import Auth, { AuthValues } from "../../components/Auth"
import { RoutePath } from "../../enums"

const RegistrationPage: React.FC = () => { 
  const handleAuthSubmit = (authValues: AuthValues) => {
    console.log(authValues);  
  }

  return (
    <div className={style.container}>
      <h2 className={style.header}>Registration</h2>

      <Auth 
        handleAuthSubmit={handleAuthSubmit} 
        submitButtonName={'registration'}
        linkButtonName={'login'}
        linkPath = {RoutePath.Login}     
      />
    </div>

  )
}

export default RegistrationPage