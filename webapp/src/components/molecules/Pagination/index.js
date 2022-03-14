import style from "./style.module.scss";
import Button from "../../atoms/Button";
import { createPages } from "../../../useCases/actions/paginationCreate";

const Pagination = ({ currentPage, onChangePage }) => {
  let objectsLength = 12;
  const buttons = [];
  if (objectsLength > 0)
    createPages(buttons, Math.ceil(objectsLength / 10), currentPage);
  return (
    <div className={style.paginator} data-pagination-component>
      <Button
        value={
          <svg
            width="36"
            height="42"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 4L10 21L26 38"
              stroke="#678E6B"
              stroke-linecap="round"
            />
          </svg>
        }
        transparent={true}
        onClick={() => onChangePage(false, "prev")}
      />
      <div className={style.block}>
        <div className={style.blockButtons}>
          {buttons.length &&
            buttons.map((button) => (
              <Button
                data-test-page={button + 1}
                value={button + 1}
                key={button}
                color={button + 1 === +currentPage ? true : false}
                onClick={(event) => onChangePage(+event.target.innerText)}
              />
            ))}
        </div>
        {/*<Button
          data-test-end
          value={"..."}
          onClick={() => onChangePage(false, "end")}
        />*/}
      </div>
      <Button
        value={
          <svg
            width="36"
            height="42"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4L26 21L10 38"
              stroke="#678E6B"
              stroke-linecap="round"
            />
          </svg>
        }
        transparent={true}
        onClick={() => onChangePage(false, "next")}
      />
    </div>
  );
};

export default Pagination;
