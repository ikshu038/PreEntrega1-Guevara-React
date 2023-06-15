import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <ul className="nav__ul container-fluid">
            <div className="nav-left">
              <li className="nav-left__ul__li list-unstyled">
                <a>
                  <img className="nav__ul__li__img" src="https://ikshu038.github.io/PF-Guevara-Desarrollo-web-Coderhouse-/images/logo.png" alt="Logo de Cafe Olavarria" />
                </a>
              </li>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-links mt-3 justify-content-end" id="navbarNavAltMarkup">
              <li className="nav-right__ul__li list-unstyled">
                <a className="nav-link">Inicio</a>
              </li>
              <li className="nav-right__ul__li list-unstyled">
                <a className="nav-link">Sobre nosotros</a>
              </li>
              <li className="nav-right__ul__li list-unstyled">
                <a className="nav-link">Materia prima</a>
              </li>
              <li className="nav-right__ul__li list-unstyled">
                <a className="nav-link">Elaboración</a>
              </li>
              <li className="nav-right__ul__li list-unstyled">
                <a className="nav-link">Contacto</a>
              </li>
              <li className="nav-right__ul__li list-unstyled">
              <a className="nav-link fw-bold">
                <CartWidget/>
              </a>            
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default NavBar