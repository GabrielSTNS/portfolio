import S from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={S.footer} id="contato">
        <img
          src="https://img.icons8.com/pieces/64/code.png"
          alt="Gabriel Santana"
        />
        <p>&copy; 2025 Gabriel Santana. Todos os direitos reservados.</p>
        <div className={S.contato}>
          <a href="https://www.linkedin.com/in/gabrielsnt/" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:gabriel2000.santana@gmail.com">E-mail</a>
          <a
            href="https://wa.me/5511941843687?text=Ol%C3%A1!%0AEstou%20entrando%20em%20contato%20pois%20vi%20seu%20portf%C3%B3lio."
            target="_blank"
          >
            WhatsApp
          </a>
          <a href="https://github.com/GabrielSTNS" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
