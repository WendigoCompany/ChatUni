import "../style/chat/chat-manifiest.css";
import { useRezise } from "../context/Resize";
import { useState } from "react";
import GameMenuProvider from "../context/GameMenu";
import GameMainM from "./Game Menus/GameMainMenu";
import { useMainCTXT } from "../context/MainContext";
import GameDataProvider from "../context/DataManger";
import ChatMenu from "./Game Menus/GameChatMenu";
import ChallengeMenu from "./Game Menus/GameChallengeMenu";
import { getImage } from "../database/image";

export const saveData = (gamedata) => {
  sessionStorage.setItem("level", gamedata.level);
  sessionStorage.setItem("name", gamedata.name);
  sessionStorage.setItem("money", gamedata.money);
};

export default function Game() {
  const getPlayData = () => {
    const gamedata = {
      name: sessionStorage.getItem("name"),
      level: sessionStorage.getItem("level"),
      money: sessionStorage.getItem("money"),
      spent: sessionStorage.getItem("spent"),
    };
    if (gamedata.name === null) {
      setMain("main-menu");
    }
    if (gamedata.level === null) {
      gamedata.level = 1;
    }
    if (gamedata.money === null) {
      gamedata.money = 0;
    }
    if (gamedata.spent === null) {
      gamedata.spent = 0;
    }

    return gamedata;
  };

  const device = useRezise();
  const setMain = useMainCTXT();
  const [menu, setMenu] = useState("");
  const [gamedata, setGD] = useState(getPlayData());

  saveData(gamedata);

  const showMenu = () => {
    switch (menu) {


      case "challenge":
        return <ChallengeMenu></ChallengeMenu>;

      case "chat":
        return <ChatMenu></ChatMenu>;

      default:
        return <GameMainM></GameMainM>;
    }
  };

  return (
    <div>
      <h3
        className={`chat-img chat-img-${device}`}
        style={{
          backgroundImage: `url(${getImage()})`,
        }}
      ></h3>

      <div className="divider">
        <h3
          className={`gmm-waifu-text gmm-waifu-text-${device} gmm-money-text t-shadow-blacked`}
        >
          YOUR LEVEL: {gamedata.level}
        </h3>
      </div>

      <GameDataProvider gamedata={gamedata} setGD={setGD}>
        <GameMenuProvider setMenu={setMenu}> {showMenu()}</GameMenuProvider>
      </GameDataProvider>
      {/* <h3 style={{ color: "red" }}>{username}</h3> */}
    </div>
  );
}
