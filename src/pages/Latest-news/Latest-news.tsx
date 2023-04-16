import { useSelector, useDispatch } from "react-redux";

import { getErrors, getNewsSelector } from "../../store/news/news.selectors";
import { fetchNewsRequest } from "../../store/news/news.actions";
import News from "../../components/News";
import BackgroundNews from "../../components/BackgroundNews/BackgroundNews";
import { useEffect } from "react";

const LatestNews: React.FC = () => { 
      const latestNews = useSelector(getNewsSelector)
      const  { newsError } = useSelector(getErrors)
      
      const dispatch = useDispatch()
    
      useEffect(() => {
        dispatch(fetchNewsRequest());
      }, [dispatch]);

      return (
        <BackgroundNews>
          <News news={latestNews} error={newsError} title="Latest News" />
        </BackgroundNews>
      );
}

export default LatestNews