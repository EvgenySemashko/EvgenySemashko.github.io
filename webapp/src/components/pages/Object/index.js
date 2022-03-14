import ObjectInfo from '../../organisms/ObjectInfo';
import Header from '../../organisms/Header';
import History from "../../organisms/History";
import FAQ from "../../organisms/FAQ";

const ObjectItem = () => {
  return (
    <div>
      <Header/>
      
      <ObjectInfo />
      <History />
      <FAQ />
    </div>
  );
};

export default ObjectItem;
