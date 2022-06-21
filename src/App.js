import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import User from './comonents/User';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './comonents/Navbar';
import Product from './page/Product';
import Demo from './comonents/Demo';
import AutoComlite from './comonents/AutoComlite';
import Data from './page/Data';
import Form from './comonents/Form';
import NotFound from './comonents/NotFound';

require('bootstrap')

function App() {
  return (
    <>
  {/* <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path={"/Demo"} element={<Demo/>} />
    <Route path={"/Prodcut"} element={<Form/>} />
    <Route path={"/Sales"} element={<Test/>} />
    <Route path={"/Purchase"} element={<Product/>} />
    <Route path={"/*"} element={<NotFound/>} />
  </Routes>
  </BrowserRouter>     */}
  <Home/>
    </>
  );
}

export default App;
