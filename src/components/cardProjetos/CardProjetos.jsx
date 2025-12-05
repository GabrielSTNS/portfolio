import S from "./CardProjetos.module.scss";

const CardProjetos = (props) => {
  return (
    <>
      <div className={S.cards}>
        <h2>{props.titulo}</h2>
        <article
          className={S.article}
          style={{ backgroundImage: `url(${props.bg})` }}
        ></article>
        <img src={props.src} alt={props.alt} />
        <div className={S.links}>
          <a href={props.repo} target="_blank">
            Repositório
          </a>
          <a href={props.dp} target="_blank">
            Deploy
          </a>
        </div>
      </div>
    </>
  );
};

export default CardProjetos;
