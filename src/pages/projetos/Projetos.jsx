import CardProjetos from "../../components/cardProjetos/CardProjetos";
import s from "./Projetos.module.scss";
import connect from "../../assets/images/capaConnect.png";
import medicos from "../../assets/images/capaMedicos.png";
import api from "../../assets/images/capaApi.png";

const Projetos = () => {
  return (
    <main>
      <section className={s.projetos}>
        <div className={s.boxTexto}>
          <h1>Meus Projetos</h1>
          <p>
            Abaixo deixo alguns projetos para visualização. Deixarei tanto o
            link do repositório quanto do deploy!
          </p>
        </div>
        <div className={s.cardsProjetos}>
          <CardProjetos
            titulo="Projeto Connect"
            bg={connect}
            deploy="https://projeto-social-connect.vercel.app/"
            repo="https://github.com/GabrielSTNS/projeto-connect"
          />
          <CardProjetos
            titulo="Projeto Médicos e Dentistas"
            bg={medicos}
            deploy="https://medicos-e-dentistas.vercel.app/"
            repo="https://github.com/GabrielSTNS/medicos-e-dentistas"
          />
          <CardProjetos
            titulo="Projeto API Rede Social Orkut"
            bg={api}
            deploy="https://api-orkut-2cut.onrender.com/usuarios"
            repo="https://github.com/GabrielSTNS/api-orkut"
          />
        </div>
      </section>
    </main>
  );
};

export default Projetos;
