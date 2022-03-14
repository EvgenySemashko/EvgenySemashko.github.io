import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/styles/common.scss";
import Main from "./components/pages/Main";
import Object from "./components/pages/Object";
import Minsk from "./components/pages/Minsk";
import Brest from "./components/pages/Brest";
import Grodno from "./components/pages/Grodno";
import Vitebsk from "./components/pages/Vitebsk";
import Gomel from "./components/pages/Gomel";
import Mogilev from "./components/pages/Mogilev";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import Liked from "./components/pages/Liked";
import style from "./app.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        {/*<Header />*/}
        <Switch>
          <div className={style.content}>
            <Route exact path="/" component={Main} />
            <Route exact path="/minsk" component={Minsk} />
            <Route exact path="/brest" component={Brest} />
            <Route exact path="/grodno" component={Grodno} />
            <Route exact path="/vitebsk" component={Vitebsk} />
            <Route exact path="/gomel" component={Gomel} />
            <Route exact path="/mogilev" component={Mogilev} />
            <Route path="/object/:id" component={Object} />
            <Route path="/liked" component={Liked} />
          </div>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
