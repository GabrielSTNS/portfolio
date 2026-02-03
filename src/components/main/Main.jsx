import CardStacks from "../cardStacks/CardStacks";
import CardProjetos from "../cardProjetos/CardProjetos";
import S from "./Main.module.scss";
import fotoPerfil from "../../assets/images/fotoPerfil.png";
import js from "../../assets/images/icons/javascript.png";
import py from "../../assets/images/icons/python.png";
import react from "../../assets/images/icons/react.png";
import next from "../../assets/images/icons/nextjs.png";
import tw from "../../assets/images/icons/tailwind.png";
import html from "../../assets/images/icons/html.png";
import css from "../../assets/images/icons/css.png";
import scss from "../../assets/images/icons/scss.png";
import sql from "../../assets/images/icons/sql.png";
import git from "../../assets/images/icons/git.png";
import github from "../../assets/images/icons/github.png";

const Main = () => {
  return (
    <main className={S.main}>
      <section className={S.sobre} id="sobre">
        <div className={S.bio}>
          <h2>QUEM SOU EU</h2>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas e tenho como
            objetivo atuar na área de desenvolvimento Full Stack. Possuo
            conhecimentos em front-end utilizando JavaScript, HTML, CSS/SCSS e
            React. <br /> Além disso, tenho experiência com Python, bancos de
            dados SQL e versionamento de código com Git e GitHub. Busco
            oportunidades para aplicar meus conhecimentos e evoluir como
            desenvolvedor, contribuindo para a construção de soluções eficientes
            e de qualidade.
          </p>
        </div>
        <img src={fotoPerfil} alt="Gabriel Santana" />
      </section>
      <section className={S.tecnologias} id="tech">
        <h2>TECNOLOGIAS</h2>
        <div className={S.stacks}>
          <CardStacks src={html} alt="html-shield" />
          <CardStacks src={css} alt="css-shield" />
          <CardStacks src={scss} alt="scss-shield" />
          <CardStacks src={js} alt="javascript-shield" />
          <CardStacks src={react} alt="react-shield" />
          <CardStacks src={next} alt="nextjs-shield" />
          <CardStacks src={tw} alt="tailwind-shield" />
          <CardStacks src={py} alt="python-shield" />
          <CardStacks src={sql} alt="sql-shield" />
          <CardStacks src={git} alt="git-shield" />
          <CardStacks src={github} alt="github-shield" />
        </div>
      </section>
      <section className={S.projetos} id="projetos">
        <h2>MEUS PROJETOS</h2>
        <div className={S.cardProjeto}>
          <CardProjetos
            titulo="Cine VnW"
            bg="https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2018/10/Cinema.jpg"
            repo="https://github.com/GabrielSTNS/projeto-cinevnw"
            dp="https://projeto-cinevnw.vercel.app/"
          />
          <CardProjetos
            titulo="Pomodoro Web"
            bg="https://gabrielstns.github.io/projeto-pomodoro/img/fundo_tomate.png"
            repo="https://github.com/GabrielSTNS/projeto-pomodoro"
            dp="https://gabrielstns.github.io/projeto-pomodoro/"
          />
          <CardProjetos
            titulo="Verde Ação"
            bg="https://gabrielstns.github.io/verde-acao/img/Girassol.png"
            repo="https://github.com/GabrielSTNS/verde-acao"
            dp="https://gabrielstns.github.io/verde-acao/"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
