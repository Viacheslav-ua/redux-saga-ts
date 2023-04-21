import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast";

import Layout from './components/Layout'
import { RoutePath } from "./enums"
import LatestNews from "./pages/Latest-news"
import LoginPage from "./pages/Login-page"
import PopularNews from "./pages/Popular-news"
import RegistrationPage from "./pages/Registration-page"
import Resume from "./pages/Resume"
import Todo from "./pages/Todo"
// import ArchiveNotes from './pages/Archive'

const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path={RoutePath.LatestNews} element={<Layout />}>
        <Route index element={<LatestNews />} />
        <Route path={RoutePath.PopularNews} element={<PopularNews />} />
        <Route path={RoutePath.Login} element={<LoginPage />} />
        <Route path={RoutePath.Registration} element={<RegistrationPage />} />
        <Route path={RoutePath.Resume} element={<Resume />} />
        <Route path={RoutePath.Todo} element={<Todo />} />
        <Route path="*" element={<Navigate to={RoutePath.LatestNews} replace />} />
      </Route>
      </Routes>
      <Toaster />
   </> 
  )
}

export default App;


// import { useSelector, useDispatch } from "react-redux";

// import { getErrors, getNewsSelector, getPopularNewsSelector  } from "./store/news/news.selectors";
// import { fetchAllNewsRequest } from "./store/news/news.actions";
// import News from "./components/news/news";

// const App: React.FC = () => {

//   const latestNews = useSelector(getNewsSelector)
//   const popularNews = useSelector(getPopularNewsSelector)
//   const  { newsError, popularNewsError } = useSelector(getErrors)
  
//   const dispatch = useDispatch()



//   const handleNews = () => {
//     dispatch(fetchAllNewsRequest())
//   }

//   return (
//     <div>
//       <button onClick={handleNews}>Get News</button>
//       <News news={latestNews} error={newsError} title="Latest News" />
//       <News news={popularNews} error={popularNewsError} title="Popular News" />
//     </div>
//   );
// }

// export default App;
