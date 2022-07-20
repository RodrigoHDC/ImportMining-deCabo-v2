import './App.css';
// Importamos las funciones de React-Router-Dom:
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Importamos los componentes creados:
import Home from './components/home';
import Productos from './components/productos';
import Ofertas from './components/ofertas';
import Nosotros from './components/nosotros';
import Faq from './components/faq';
import Contacto from './components/contacto';
import NavBarExample from './layouts/navbar';
import ItemListContainer from './components/Desafio 5/ItemListContainer';
import ItemDetailContainer from './components/Desafio 5/ItemDetailContainer'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarExample />
        <Routes>
          {/* <Route index element={<h1>Esto es el home</h1>} /> */}
          <Route index element={<ItemListContainer />} />
          {/* <Route path="/category/:name" element={<ItemListContainer />} /> */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
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






// function App() {
//   return (
//     <div className="App">

//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={ <NavBarExample/> }>
//             <Route index element={ <Home/> } />
//             <Route path='productos' element={ <Productos/> } />
//             <Route path='ofertas' element={ <Ofertas/> } />
//             <Route path='nosotros' element={ <Nosotros/> } />
//             <Route path='faq' element={ <Faq/> } />
//             <Route path='contacto' element={ <Contacto/> } />            
//             <Route path='*' element={ <Navigate replace to="/" /> }/>

//           </Route>
//         </Routes>
//       </BrowserRouter>

//       <ItemListContainer greeting={"!Bienvenido a la tienda de Import Mining!"} />
//     </div>
//   );
// }

// export default App;
