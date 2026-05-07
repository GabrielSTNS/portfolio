import s from "./Sobre.module.scss";
import gabriel from "../../assets/images/gabriel.png";

const Sobre = () => {
  return (
    <main>
      <section className={s.sobre}>
        <img src={gabriel} alt="Gabriel Santana" className={s.foto} />
        <div className={s.boxTexto}>
          <h1>Sobre mim</h1>
          <p>
            Olá, meu nome é Gabriel Santana. Sou estudante do último semestre de
            Análise e Desenvolvimento de Sistemas e Desenvolvedor Full Stack
            formado pela Escola Vai na Web. Tenho experiência com tecnologias
            front-end como HTML, CSS/SCSS, JavaScript e React.js, e no back-end
            trabalho com Node.js e Express para criação de APIs RESTful, além de
            PostgreSQL para modelagem e gerenciamento de banco de dados. Sou
            apaixonado por construir soluções completas, do design à lógica do
            servidor, e estou sempre em busca de novos desafios para evoluir
            como desenvolvedor.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
