
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getNewsSelector, getPopularNewsSelector  } from "./store/news/news.selectors";
import { fetchAllNewsRequest } from "./store/news/news.actions";
import News from "./components/news/news";

const App: React.FC = () => {

  const latestNews = useSelector(getNewsSelector)
  const popularNews = useSelector(getPopularNewsSelector)
  
  const dispatch = useDispatch()



  const handleNews = () => {
    dispatch(fetchAllNewsRequest())
  }

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} title="Latest News" />
      <News news={popularNews} title="Popular News" />
    </div>
  );
}

export default App;
