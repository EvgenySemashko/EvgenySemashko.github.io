import Banner from "../../organisms/Banner";
import RegionList from "../../organisms/RegionList";
import History from "../../organisms/History";
import style from "./style.module.scss";
import image from "../../../assets/img/history.png";
import FAQ from "../../organisms/FAQ";
import img from "../../../assets/img/banner.png";

const Main = () => {
  return (
    <main className={style.main}>
      <Banner
        img={img}
        text={"Добро пожаловать в Беларусь!"}
        title={"WELCOME TO BELARUS!"}
      />
      <History />
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
      <RegionList />
      <FAQ />
    </main>
  );
};

export default Main;
