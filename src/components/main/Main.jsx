import CardStacks from "../cardStacks/CardStacks";
import CardProjetos from "../cardProjetos/CardProjetos";
import S from "./Main.module.scss";
import fotoPerfil from "../../assets/fotoPerfil.png";

const Main = () => {
  return (
    <>
      <main className={S.main}>
        <section className={S.sobre} id="sobre">
          <div className={S.bio}>
            <h2>QUEM SOU EU</h2>
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e tenho
              como objetivo atuar na área de desenvolvimento Full Stack. Possuo
              conhecimentos em front-end utilizando JavaScript, HTML, CSS/SCSS e
              React. <br /> Além disso, tenho experiência com Python, bancos de
              dados SQL e versionamento de código com Git e GitHub. Busco
              oportunidades para aplicar meus conhecimentos e evoluir como
              desenvolvedor, contribuindo para a construção de soluções
              eficientes e de qualidade.
            </p>
          </div>
          <img src={fotoPerfil} alt="Gabriel Santana" />
        </section>
        <section className={S.tech} id="tech">
          <h2>TECNOLOGIAS EM APRENDIZADO</h2>
          <div className={S.stacks}>
            <CardStacks
              src="https://img.icons8.com/color/96/html-5--v1.png"
              alt="html-shield"
            />
            <CardStacks
              src="https://img.icons8.com/color/96/css3.png"
              alt="css-shield"
            />
            <CardStacks
              src="https://img.icons8.com/color/96/javascript--v1.png"
              alt="js-shield"
            />
            <CardStacks
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt="react-shield"
            />
            <CardStacks
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-python-an-interpreted-high-level-general-purpose-programming-language-logo-shadow-tal-revivo.png"
              alt="python-shield"
            />
            <CardStacks
              src="https://img.icons8.com/fluency/96/sql.png"
              alt="sql-shield"
            />
            <CardStacks
              src="https://img.icons8.com/color/96/git.png"
              alt="git-shield"
            />
            <CardStacks
              src="https://img.icons8.com/glyph-neue/64/github.png"
              alt="github-shield"
            />
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
    </>
  );
};

export default Main;
