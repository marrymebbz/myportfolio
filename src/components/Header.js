import logo from '../images/logo.png';
import '../App.css';

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg py-3 bg-blue d-flex flex-column">
            <div className="container d-flex justify-content-center fw-bold border-whitebottom">
                <a className="navbar-brand text-white pb-3" href="#home">
                  <img src={logo} alt="Logo" style={{ height: '50px' }} />
                </a>
            </div>
            <div className="container d-flex justify-content-center fw-bold mt-3">
                <ul class="nav gap-nav-custom">
                  <li class="nav-item"><a class="nav-link" href="#about" className="text-white text-decoration-none text-uppercase fw-bolder">About</a></li>
                  <li class="nav-item"><a class="nav-link" href="#services" className="text-white text-decoration-none text-uppercase fw-bolder">Services</a></li>
                  <li class="nav-item"><a class="nav-link" href="#tools" className="text-white text-decoration-none text-uppercase fw-bolder">Tools</a></li>
                  <li class="nav-item"><a class="nav-link" href="#projects" className="text-white text-decoration-none text-uppercase fw-bolder">Projects</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact" className="text-white text-decoration-none text-uppercase fw-bolder">Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Header;
