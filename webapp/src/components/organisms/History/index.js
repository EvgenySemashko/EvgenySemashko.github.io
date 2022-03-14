import style from "./style.module.scss";
import { useState } from "react";
import content from "./history.json";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.container} id="history">
      <h2 className={style.title}>История</h2>
      <p className={style.subtitle}>
        Республика Беларусь расположена в центре Европы. По её территории
        пролегают самые короткие транспортные коммуникации, связывающие страны
        СНГ с государствами Западной Европы. Беларусь имеет общую границу с
        Польшей, Литвой, Латвией, Россией и Украиной.{" "}
      </p>
      {isOpen && (
        <div className={style.history}>
          {content.map((i) => (
            <div className={style.historyBlock}>
              <div className={style.historyTitle}>{i.title}</div>
              <div className={style.historyText}>{i.text}</div>
            </div>
          ))}
        </div>
      )}

      <span className={style.more} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <span>ПОДРОБНЕЕ</span> : <span>СКРЫТЬ</span>}
        {isOpen ? (
          <span className={style.close}></span>
        ) : (
          <span className={style.open}></span>
        )}
      </span>
    </div>
  );
};

export default History;
