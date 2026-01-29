import S from "./Header.module.scss";

const Header = () => {
  return (
    <header className={S.header}>
      <div className={S.info}>
        <h1>Gabriel Santana</h1>
        <p>Desenvolvedor Full-Stack</p>
      </div>

      <nav className={S.links}>
        <a href="#sobre">Sobre mim</a>
        <a href="#tech">Tecnologias</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
