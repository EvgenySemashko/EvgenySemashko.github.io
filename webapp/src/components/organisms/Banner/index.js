import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Banner = ({ title, text, img }) => {
  return (
    <section className={style.banner}>
      <div className={style.container}>
        <div className={style.info}>
          <header className={style.header}>
            <div className={style.headerContainer}>
              <div className={style.links}>
                <Link to={"/"}>Главная</Link>
                <a href="#history">История</a>
                <a href="#regions">Путешествия</a>
                <Link to={"/liked"}>Избранное</Link>
                <a href="#faq">FAQ</a>
              </div>
            </div>
          </header>
          <h1 className={style.title}>{title}</h1>
          <h2 className={style.subtitle}>{text}</h2>
        </div>
   
        <div className={style.image}>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
