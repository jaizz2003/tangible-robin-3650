import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import { Main } from './Main/Main';
import Navbar from "./Navbar/Navbar"
import MenPage from './pages/MenPage';
import WomensPage from './pages/WomensPage';
import MensClothing from "../src/Productspage/MensClothing";
import {WomensClothing} from "../src/Productspage/WomensClothing";
import Shoes from "../src/Productspage/Shoes";
import {ProductPage}from "../src/ProductPage/ProductPage";
import Login from "./Login/Login"
import ProductDetails from "./productDetails/ProductDetails"




function App() {
  return (
    <div className="App">
       <Routes>
        <Route path ="/" element ={<Main />}/>
        <Route path ="/womenspage" element ={<WomensPage/>}/>
        <Route path ="/menspage" element ={<MenPage/>}/>
        <Route path ="/products/productpage" element ={<ProductPage/>}/>
        <Route path ="/products/shoes" element ={<Shoes/>}/>
        <Route path ="/products/mensclothing" element ={<MensClothing/>}/>
        <Route path ="/products/womensclothing" element ={<WomensClothing/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/product/:id" element ={<ProductDetails/>}/>
        {/* <Route path ="/cartitem" element ={<Cart_Items/>}/> */}
        {/* <Route path ="/Cart" element ={<Cart/>}/> */}
       </Routes>
    </div>
  );
}


export default App;

