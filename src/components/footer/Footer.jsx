import { Link } from "react-router-dom";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.conteudo}>
        <p>&copy; 2026 Gabriel Santana. Todos os direitos reservados.</p>

        <div className={s.links}>
          <Link
            to="https://www.linkedin.com/in/gabrielsnt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            to="https://github.com/GabrielSTNS"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
