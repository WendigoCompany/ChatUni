import "../../style/chat-menu/chat-menu-manifiest.css";

import { useGD } from "../../context/DataManger";

import { useRezise } from "../../context/Resize";
import { useChangeGM } from "../../context/GameMenu";
import duplicateOBJ from "../../functions/game/duplicateOBJ";
import { getText } from "../../database/text";

export default function ChatMenu() {
  const device = useRezise();
  const setMenu = useChangeGM();
  const { gamedata, setGD } = useGD();
  return (
    <div>
      <div className="divider">
        <h3
          className={`gmm-waifu-text gmm-waifu-text-${device} t-shadow-blacked`}
        >
          {getText()}
        </h3>
      </div>
      <div className="divider">
        <h3
          className={`gmm-waifu-text gmm-waifu-text-${device} gmm-money-text t-shadow-blacked`}
        >
          <img
            src="https://img.icons8.com/?size=512&id=sPBQkuep9vDA&format=png"
            className={` gmm-money-${device}`}
          />
          {gamedata.money}
        </h3>
      </div>
      <img
        src="https://img.icons8.com/?size=512&id=39815&format=png"
        alt=""
        className={`back-img back-img-${device}`}
        onClick={() => {
          setMenu("");
        }}
      />

      <div
        className={`btn-chat-cont-${device}`}
        style={{
          textAlign: "center",
        }}
      >
        <button
          className={`btn-chat-${device} btn-chat-normal btn-chat-${device} btn-chat`}
          onClick={() => {
            sessionStorage.setItem("text", "normal")
            const data = duplicateOBJ(gamedata);
            data.money = parseInt(data.money) +  10;
             setGD(data);
            // setMenu("");
          }}
        >
          NORMAL QUESTION
          <img
            src="https://img.icons8.com/?size=512&id=sPBQkuep9vDA&format=png"
            className={` gmm-money-${device}`}
          />
          +10
        </button>
        <br />
        <button
          className={`btn-chat-${device} btn-chat-cheer btn-chat-${device} btn-chat`}
        >
          CHEER UP
          <img
            src="https://img.icons8.com/?size=512&id=sPBQkuep9vDA&format=png"
            className={` gmm-money-${device}`}
          />
          +20
        </button>
      </div>
    </div>
  );
}
