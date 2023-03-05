import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import RegisterPage from './Pages/RegisterPage';
import "./index.css"
import LoginPage from './Pages/LoginPage';
import { useSelector } from 'react-redux';
import Favourite from './Pages/Favourite';
import Cart from './Pages/Cart';



function App() {

  
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/details/:pid" element={<ProductDetailsPage/>} />
        <Route path="/Products" element={<ProductPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='cart' element={<Cart/>}/>
        <Route path='favourite' element={<Favourite/>} />





        </Routes>

      </Router>
    </div>
  );
}

export default App;
