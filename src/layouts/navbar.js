// Importamos clases de React-Bootstrap:
import Nav from 'react-bootstrap/Nav';
// Importamos las funciones de React-Router-Dom:
import { Outlet, Link } from 'react-router-dom';
// Importamos el componente del CartWidget:
import CartWidget from '../components/CartWidget';


const NavBarExample = () => {
    return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-1" id="menu">
  <div className="container-fluid">
    <a className="navbar-brand" href="./index.html">
        <img className="logo mx-3 my-auto" src="./Logo-Nuevo.png" alt="Logo" width="200px" height="100px"/>
      </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </ul>
      

            <form className="d-flex">
              <input className="form-control mx-0" type="busqueda" placeholder="¿Qué estás buscando?" aria-label="busqueda"/>
              <button className="btn btn-primary-outline-success btn-primary" type="button">Buscar</button>
            </form>

          </div>
        </div>
        <CartWidget/>
      </nav>

      <section>
        <Outlet/>
      </section>
    </>
      );
}
 
export default NavBarExample;