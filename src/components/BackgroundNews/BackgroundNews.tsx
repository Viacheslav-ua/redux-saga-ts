
import style from "./BackgroundNews.module.css"
 
const BackgroundNews: React.FC<any> = ({children}) => { 
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}

export default BackgroundNews