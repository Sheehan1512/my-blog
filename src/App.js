import './App.css';

import {BrowserRouter,
        Routes,
        Route} from 'react-router-dom';

import NavBar from './CommonComponents/NavBar/NavBar';
import Footer from './CommonComponents/Footer/Footer';

import HomePage from './Pages/HomePage/HomePage';
import AboutMe from './Pages/AboutMe/AboutMe';
import Ajaira from './Pages/Ajaira/Ajaira';
import Blog from './Pages/Blog/Blog';
import SingleArticle from './Pages/SingleArticle/SingleArticle';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar /> 
        {/* <section id="body-content"> */}
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:name" element={<SingleArticle />} />
            <Route path="/ajaira" element={<Ajaira />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        {/* </section> */}
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
