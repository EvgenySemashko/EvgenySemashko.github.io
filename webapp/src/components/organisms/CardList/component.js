import style from "./style.module.scss";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import Pagination from "../../molecules/Pagination";
import Search from "../Search/";
import Toggle from "../../molecules/Toggle";
import { Link } from "react-router-dom";
import row from "../../../assets/icons/next.svg";

const CardList = ({
  objects,
  isLoader,
  setLiked,
  sortUp,
  sortDown,
  isSearch,
  searchObject,
  backToCatalog,
  likedData,
  objectsLength,
  currentPage,
  onChangePage,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.sort}>
          <Toggle sortUp={sortUp} sortDown={sortDown} objects={objects} />
          <Search />
        </div>
        <>
          {!isSearch ? (
            objects.length ? (
              <>
                <div className={style.list}>
                  {objects
                    .slice((currentPage - 1) * 6, 6 * currentPage)
                    .map((card) => {
                      return (
                        <Link to={`/object/${card.id}`}>
                          <Card
                            key={card.name}
                            img={card.img}
                            id={card.id}
                            title={card.name}
                            region={card.region}
                            text={card.text}
                            rate={card.rate}
                            likedData={likedData}
                            setLiked={setLiked}
                          />
                        </Link>
                      );
                    })}
                </div>
              </>
            ) : null
          ) : searchObject.length ? (
            <>
              <button
                to={"/catalog"}
                className={style.link}
                onClick={() => backToCatalog()}
              >
                <div>
                  <div>Назад в каталог</div>
                </div>
              </button>
              <div className={style.list}>
                {searchObject.map((card) => {
                  return (
                    <Link to={`/object/${card.id}`}>
                      <Card
                        key={card.name}
                        img={card.img}
                        title={card.name}
                        rate={card.rate}
                        likedData={likedData}
                        region={card.region}
                        text={card.text}
                        id={card.id}
                        setLiked={setLiked}
                      />
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {!searchObject.length && isLoader ? (
                <Loader />
              ) : (
                <p data-failed-search-text>
                  Такой достопримечательности нет в нашем приложении. Проверьте
                  данные, которые вы ввели или попробуйте ещё раз.
                </p>
              )}
            </>
          )}
        </>
        <Pagination onChangePage={onChangePage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default CardList;
