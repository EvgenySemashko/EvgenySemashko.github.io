import { Link } from "react-router-dom";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.links} >
          <Link to={"/"}>Главная</Link>
          <a href="#history">История</a>
          <a href="#regions">Путешествия</a>
          <Link to={"/liked"}>Избранное</Link>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
