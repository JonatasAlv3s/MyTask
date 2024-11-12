import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "../img/Logo.png";  // Certifique-se de que o caminho está correto
import "../layout/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/" className="logo">
          <img src={Logo} alt="My Task" className="logo-img" />
        </Link>
        <ul className="list">
            <li className="item"> <Link to="/sobre" className="nav-link">Sobre</Link></li>
            <li className="item"> <Link to="/" className="nav-link">Home</Link></li>
            <li className="item"> <Link to="/tarefa" className="nav-link">Tarefa</Link></li>
            <li className="item"> <Link to="/livro" className="nav-link">Livro</Link></li>
            <li className="item"><Link to="/contato" className="nav-link">Contato</Link></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;

/*function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src= {Logo} alt="My Task" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/tarefa">Tarefa</Link>
        <Link to="/livro">Livro</Link>
        <Link to="/contato">Contato</Link>
      </Container>
    </nav>
  );
}
export default Navbar*/
