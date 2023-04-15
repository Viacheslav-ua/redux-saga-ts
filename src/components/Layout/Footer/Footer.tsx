import style from './Footer.module.css'

const Footer: React.FC = () => { 
  return (
    <footer className={style.content}>
      <a href="mailto:poprotskyi.v@gmail.com" target="_blank" rel="noreferrer noopener" 
        className={style.link}>E-mail</a>
      
      <a href="https://github.com/Viacheslav-ua" target="_blank" rel="noreferrer noopener"
        className={style.link}>GitHub</a>

      <a href="https://t.me/via_slav" target="_blank" rel="noreferrer noopener"
        className={style.link}>Telegram</a>
    </footer>
  )
}
  
export default Footer