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
              <a className="nav-link fw-bold" href="pages/cart.html">
              <div className="cart__a">
                <span className="cart-count position-absolute text-center rounded-circle">0</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              </div>
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