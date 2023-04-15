import { Outlet } from "react-router-dom"
import style from "./Layout.module.css"

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => { 
  return (
    <div className={style.gridContainer}>
      <div className={style.header}>
        <Header />
      </div>
      
      <main className={style.main}>
        <Outlet />
      </main>

      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout