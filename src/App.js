import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import ShopContextProvider from './context/shop-context';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Exhibition from './pages/exhibition/exhibition';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/exhibition' element={<Exhibition />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
