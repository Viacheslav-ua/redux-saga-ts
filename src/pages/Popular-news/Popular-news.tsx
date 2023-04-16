import { useSelector, useDispatch } from "react-redux";

import { getErrors, getPopularNewsSelector  } from "../../store/news/news.selectors";
import { fetchPopularNewsRequest } from "../../store/news/news.actions";
import News from "../../components/News";
import BackgroundNews from "../../components/BackgroundNews/BackgroundNews";
import { useEffect } from "react";

const PopularNews: React.FC = () => { 
      const popularNews = useSelector(getPopularNewsSelector)
      const  { popularNewsError } = useSelector(getErrors)
      
      const dispatch = useDispatch()
    
      useEffect(() => {
        dispatch(fetchPopularNewsRequest());
      }, [dispatch]);

      return (
        <BackgroundNews>
          <News news={popularNews} error={popularNewsError} title="Popular News" />
        </BackgroundNews>
      );
}

export default PopularNews