import Card from "../../molecules/Card";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import minsk from "../../../assets/img/minsk.png";
import grodno from "../../../assets/img/grodno.png";
import mogilev from "../../../assets/img/mogilev.png";
import brest from "../../../assets/img/brest.png";
import vitebsk from "../../../assets/img/vitebsk.png";
import gomel from "../../../assets/img/gomel.png";

const regions = [
  {
    name: "Минская область",
    img: minsk,
    to: "/minsk",
  },
  {
    name: "Гродненская область",
    img: grodno,
    to: "/grodno",
  },
  {
    name: "Могилевская область",
    img: mogilev,
    to: "/mogilev",
  },
  {
    name: "Брестская область",
    img: brest,
    to: "/brest",
  },
  {
    name: "Витебская область",
    img: vitebsk,
    to: "/vitebsk",
  },
  {
    name: "Гомельская область",
    img: gomel,
    to: "/gomel",
  },
];

const RegionList = () => {
  return (
    <section className={style.section} id="regions">
      <div className={style.container}>
        <h2 className={style.title}>Исследуйте места по всей Беларуси</h2>
        <p className={style.text}>
          В каждой стране есть места или целые города, которые стали её визитной
          карточкой и «обязательными к посещению». С этими местами вы можете
          ознакомиться просто выбрав область, которая Вас интересует.
        </p>
        <div className={style.cards}>
          {regions.map((i) => (
            <Link to={i.to}>
              <Card title={i.name} img={i.img} key={i.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionList;
