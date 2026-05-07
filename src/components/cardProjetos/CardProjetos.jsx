import { Link } from "react-router-dom";
import s from "./CardProjetos.module.scss";

const CardProjetos = (props) => {
  return (
    <>
      <div className={s.cards}>
        <h2>{props.titulo}</h2>
        <article
          className={s.article}
          style={{ backgroundImage: `url(${props.bg})` }}
        ></article>
        <div className={s.links}>
          <Link to={props.deploy} target="_blank">
            Deploy
          </Link>
          <Link to={props.repo} target="_blank">
            Repositório
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardProjetos;
