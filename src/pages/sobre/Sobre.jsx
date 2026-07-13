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
            Desenvolvedor Full Stack graduado em Análise e Desenvolvimento de
            Sistemas. Possuo sólida experiência na criação de interfaces
            front-end modernas (HTML, CSS, JavaScript e React) e na construção
            de APIs RESTful no back-end utilizando Node.js e Express. Tenho
            proficiência em modelagem e gerenciamento de bancos de dados
            relacionais com PostgreSQL. Busco integrar uma equipe inovadora, em
            um ambiente que proporcione desafios contínuos e impulsione meu
            desenvolvimento profissional e pessoal.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
