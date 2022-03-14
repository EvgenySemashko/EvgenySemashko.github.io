import style from "./style.module.scss";
import content from "./faq.json";

const FAQ = () => {
  return (
    <div className={style.container} id="faq">
      <h2 className={style.title}>
        Основные вопросы
        <br /> приезжающих
      </h2>
      {content.map((i) => (
        <details className={style.faq}>
          <summary>
            {i.title} <span></span>
          </summary>
          <p>{i.text}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
