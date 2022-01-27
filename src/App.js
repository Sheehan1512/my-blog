import './App.css';

import {BrowserRouter,
        Routes,
        Route} from 'react-router-dom';

import NavBar from './CommonComponents/NavBar/NavBar';
import Footer from './CommonComponents/Footer/Footer';

import HomePage from './Pages/HomePage/HomePage';
import AboutMe from './Pages/AboutMe/AboutMe';
import Ajaira from './Pages/Ajaira/Ajaira';
import Articles from './Pages/Articles/Articles';


function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/ajaira" element={<Ajaira />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
