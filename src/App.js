import './App.css';
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='detalle' element={<ItemDetailContainer />} />
        <Route path='nosotros' element={""} />
      </Routes>
      
      
    </BrowserRouter>
  </>
  )
}

export default App;
