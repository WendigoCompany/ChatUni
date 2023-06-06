import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.css";
import "./style/fonts.css";
import MainProvider from "./context/MainContext";
import Disclaim from "./components/Disclaim";
import ReziseProvider from "./context/Resize";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";

//name / money  / level
export default function App() {
  const validateUserdata = () => {
    if (sessionStorage.getItem("name") === null) {
      return "";
    } else {
      return "game";
    }
  };
  const [ui, setMain] = useState(validateUserdata());

  const showUi = () => {
    switch (ui) {
      case "main-menu":
        return <MainMenu> </MainMenu>;

      case "game":
        return <Game> </Game>;

      default:
        return <Disclaim> </Disclaim>;
    }
  };
  return (
    <div>
      <MainProvider setMain={setMain}>
        <ReziseProvider>{showUi()}</ReziseProvider>
      </MainProvider>
    </div>
  );
}
