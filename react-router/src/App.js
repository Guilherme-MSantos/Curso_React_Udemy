import './App.css';

// config  react router 
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// pages 
import Home from './pages/Home';
import About from './pages/About';

// components  
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

//pages 
import Product from './pages/Product';
import Info from './pages/Info';
import Search from "./pages/Search";

import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <h1> React Router </h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* 6 - nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 rota dinâmica  */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9- search  */}
          <Route path = "/search" element={<Search />} />

         {/* 10 - redirect */}
         <Route path="/company" element = {<Navigate to = "/About"/>} />
          {/* 7- Rota não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
