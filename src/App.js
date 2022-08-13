import './App.css';
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
  <>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
          
      </CartProvider>
      <Footer/>
    </BrowserRouter>
    
  </>
  )
}

export default App;
