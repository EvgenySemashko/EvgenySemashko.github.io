import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../atoms/Loader";
import row from "../../../assets/icons/rowToLeft.svg";
import style from "./style.module.scss";

const ObjectInfo = ({ img, name, text, rate, isError, isLoader, id }) => {
  let [error, changeError] = useState(false);

  let temp = [];
  if (rate) {
    for (let i = 0; i < rate; i++) {
      temp.push(i);
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {isError ? (
          <div className={style.error}>TOURISM OBJECTS NOT FAUND</div>
        ) : isLoader ? (
          <Loader />
        ) : (
          <div>
            <div className={style.object}>
              <div className={style.image}>
                <img src={img} />
              </div>
              <div className={style.info}>
                <div className={style.title}>{name}</div>
                <div className={style.rate}>
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
                          fill="#678e6b"
                          stroke="#678e6b"
                        />
                      </svg>
                    );
                  })}
                </div>
                <p className={style.text}>{text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ObjectInfo;
