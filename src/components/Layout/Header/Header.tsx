import { NavLink } from "react-router-dom"
import style from './Header.module.css'
import { RoutePath } from "../../../enums"

const Header: React.FC = () => { 
    return (
    <header className={style.header}>
      <div className={style.navigate}>
        <NavLink 
        style={({ isActive }) => isActive ? {color: 'red'} : {}}
        className={style.link} 
        to={RoutePath.Todo}>Tasks</NavLink>

        <NavLink 
        style={({ isActive }) => isActive ? {color: 'red'} : {}}
        className={style.link} 
        to={RoutePath.LatestNews}>Latest news</NavLink>


        <NavLink 
        style={({ isActive }) => isActive ? {color: 'red'} : {}}
        className={style.link} 
        to={RoutePath.PopularNews}>Popular news</NavLink>
      </div>

    </header>
  )
}
  
export default Header