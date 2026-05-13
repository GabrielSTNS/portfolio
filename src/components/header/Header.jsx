import { useState } from "react";
import s from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => (isActive ? s.linkAtivo : "");

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => setMenuAberto((prev) => !prev);
  const fecharMenu = () => setMenuAberto(false);
  return (
    <header className={s.header}>
      <div className={s.boxTexto}>
        <Link to="/">
          <h1>Gabriel Santana</h1>
        </Link>
        <p>Desenvolvedor Full Stack</p>
      </div>

      <button
        className={s.hamburguer}
        onClick={abrirMenu}
        aria-label="Abrir menu"
      >
        <span className="material-icons">{menuAberto ? "close" : "menu"}</span>
      </button>

      <nav className={`${s.navbar} ${menuAberto ? s.navAberta : ""}`}>
        <NavLink to="/" className={linkClass}>
          Sobre mim
        </NavLink>
        <NavLink to="/projetos" className={linkClass} onClick={fecharMenu}>
          Meus projetos
        </NavLink>
        <NavLink to="/contato" className={linkClass} onClick={fecharMenu}>
          Entre em contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
