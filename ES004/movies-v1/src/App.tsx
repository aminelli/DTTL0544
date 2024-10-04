import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Trending from './pages/Trending';
import Error from './pages/Error';


const App : React.FC = () => {
  return(
      <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )
};

export default App;
