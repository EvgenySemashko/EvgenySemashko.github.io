import style from "./style.module.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Card = ({ id, img, title, rate, region, text, setLiked, likedData }) => {
  useEffect(() => {
    if (likedData) {
      likedData.forEach((i) => {
        if (i.id === id) {
          setIsLiked(true);
        }
      });
    }
  });
  let temp = [];
  if (rate) {
    for (let i = 0; i < rate; i++) {
      temp.push(i);
    }
  }
  let [isLiked, setIsLiked] = useState(false);

  const set = (e) => {
    e.preventDefault();
    if (isLiked) {
      setIsLiked(false);
      setLiked({ title, isLiked });
    } else {
      setLiked({ img, title, region, text, rate, id });
      setIsLiked(true);
    }
  };

  const isMainPage = useLocation().pathname === "/";

  return (
    <div className={style.card}>
      {!isMainPage && (
        <div className={style.liked} onClick={set}>
          {!isLiked ? (
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0629 1.10513C20.1084 0.280441 17.5757 4.51008 16.9286 6.72799C15.7454 3.12937 12.8615 1.60493 11.5674 1.29254C6.39105 0.242936 3.24818 3.41673 2.3238 5.13483C-0.708084 10.4578 2.16974 16.9741 3.98764 19.5668C8.11111 25.4479 13.262 28.7196 16.9286 31C22.9259 27.4 28.5755 21.7223 30.3318 19.0046C33.2158 14.4313 33.1973 10.1642 32.8275 8.60226C31.7922 2.82945 27.3738 1.48978 25.0629 1.10513Z"
                stroke="#678E6B"
              />
            </svg>
          ) : (
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0629 1.10513C20.1084 0.280441 17.5757 4.51008 16.9286 6.72799C15.7454 3.12937 12.8615 1.60493 11.5674 1.29254C6.39105 0.242936 3.24818 3.41673 2.3238 5.13483C-0.708084 10.4578 2.16974 16.9741 3.98764 19.5668C8.11111 25.4479 13.262 28.7196 16.9286 31C22.9259 27.4 28.5755 21.7223 30.3318 19.0046C33.2158 14.4313 33.1973 10.1642 32.8275 8.60226C31.7922 2.82945 27.3738 1.48978 25.0629 1.10513Z"
                stroke="#fff"
                fill="#fff"
              />
            </svg>
          )}
        </div>
      )}
      <div className={style.img}>
        <img src={img} alt="img" />
      </div>
      <div className={style.text}>
        <p className={style.title}>{title.toUpperCase()}</p>
        <p className={style.rate}>
          {" "}
          {temp.map((i) => {
            return (
              <svg
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.623 1.62399L19.9485 11.9007L20.0605 12.2467H20.4242L31.1916 12.2467L22.4789 18.6026L22.1863 18.816L22.2978 19.1605L25.6247 29.4413L16.9176 23.0895L16.623 22.8745L16.3283 23.0895L7.62122 29.4413L10.9481 19.1605L11.0596 18.816L10.7671 18.6026L2.05435 12.2467L12.8217 12.2467H13.1854L13.2974 11.9007L16.623 1.62399Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
