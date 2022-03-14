import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getObjectFromBD } from "../../../useCases/actions/objects";
import ObjectInfo from "./component";
import { useLocation } from "react-router-dom";

const ObjectInfoContainer = () => {
  const dispatch = useDispatch();
  const id = useLocation().pathname.slice(8);

  useEffect(() => {
    dispatch(getObjectFromBD(id));
  }, []);

  const currentObject = useSelector((state) => state.objects.currentObject);
  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);

  return (
    <ObjectInfo
      img={currentObject.img}
      name={currentObject.name}
      text={currentObject.text}
      rate={currentObject.rate}
      isError={isError}
      isLoader={isLoader}
      id={currentObject.id}
    />
  );
};

export const container = ObjectInfoContainer;
