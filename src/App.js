import './App.css';
// Importamos las funciones de React-Router-Dom:
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Importamos los componentes creados:
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route index element={<h1>Esto es el home</h1>} /> */}
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/category/:name/item/:id" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;