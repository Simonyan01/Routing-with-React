import Header from "./components/header/Header";
import Navigation from "./components/routes/Navigation";
import { Fragment } from "react";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
    </Fragment>
  );
};

export default App;
