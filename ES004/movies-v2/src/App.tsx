import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Trending from './pages/Trending';
import Error from './pages/Error';
import Movies from './pages/Movies';
import TV from './pages/Tv';


const App : React.FC = () => {
  return(
      <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )
};

export default App;
