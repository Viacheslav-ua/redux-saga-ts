import { useSelector, useDispatch } from "react-redux";

import { getErrors, getNewsSelector, getPopularNewsSelector  } from "./store/news/news.selectors";
import { fetchAllNewsRequest } from "./store/news/news.actions";
import News from "./components/news/news";

const App: React.FC = () => {

  const latestNews = useSelector(getNewsSelector)
  const popularNews = useSelector(getPopularNewsSelector)
  const  { newsError, popularNewsError } = useSelector(getErrors)
  
  const dispatch = useDispatch()



  const handleNews = () => {
    dispatch(fetchAllNewsRequest())
  }

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} error={newsError} title="Latest News" />
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
}

export default App;
