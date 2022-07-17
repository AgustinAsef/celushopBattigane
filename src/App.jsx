import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import CartContainer from './components/cart/CartContainer';
import TechnicalService from './components/servicioTecnico/TechnicalService';
import Contact from './components/contact/contact';
import { CartContextProvider } from './components/cart/CartContext';


function App() {
  return (
    <>
    <BrowserRouter>
      <CartContextProvider>

        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/productos/:categori' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/serviciotecnico' element={<TechnicalService/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/cart' element={<CartContainer/>}/>

          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      
      </CartContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
