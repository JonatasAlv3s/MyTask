import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Tarefa from "./components/pages/Tarefa";
import Livro from "./components/pages/Livro";
import Contato from "./components/pages/Contato";
import "./index.css";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/tarefa" element={<Tarefa />} />
            <Route path="/livro" element={<Livro />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
