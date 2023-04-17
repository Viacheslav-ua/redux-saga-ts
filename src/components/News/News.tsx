import style from './News.module.css';

type PropsType =  {
  news: any[];
  title: string;
  error: string | null;
}

const News: React.FC<PropsType> = ({ news, title, error }) => {
  if (!news || news.length === 0) {
    return error ? <h2>{ error }</h2> : null;
  }

  return (
    <div>
      <h2>{`${title}:`}</h2>
      <ul className={style.newsList}>
        {news.map(({ objectID, url, title, points, num_comments, created_at, author}) => (
          <li key={objectID} className={style.news}>
            <div className={style.description}>
              <a href={url} 
                className={style.newsTitle}
                target="_blank" rel="noreferrer" >{title || 'No title'}</a>
              <span className={style.text}>{`${points || 0} points`}</span>
              <span className={style.comments}>{`${num_comments || 0} comments`}</span>
              <span className={style.date}>{new Date(created_at).toLocaleDateString()}</span>
              <span className={style.author}>{author || 'no author'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;