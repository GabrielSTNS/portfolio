import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Sobre from "../pages/sobre/Sobre";
import Projetos from "../pages/projetos/Projetos";
import Contato from "../pages/contato/Contato";
import Footer from "../components/footer/Footer";
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Sobre />} Sobre mim />
          <Route path="/projetos" element={<Projetos />} Sobre mim />
          <Route path="/contato" element={<Contato />} Sobre mim />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
