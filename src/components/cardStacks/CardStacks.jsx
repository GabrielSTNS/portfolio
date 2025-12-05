import S from "./CardStacks.module.scss";

const CardStacks = (props) => {
  return (
    <>
      <article className={S.article}>
        <img src={props.src} alt={props.alt} />
      </article>
    </>
  );
};

export default CardStacks;
