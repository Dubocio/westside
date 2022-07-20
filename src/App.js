import './App.css';
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
  <>
    <Navbar />
    <ItemListContainer />
    <ItemDetailContainer />
    
  </>
  )
}

export default App;
