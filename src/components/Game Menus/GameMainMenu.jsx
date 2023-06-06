import { useGD } from "../../context/DataManger";
import { useChangeGM } from "../../context/GameMenu";
import { useRezise } from "../../context/Resize";
import { getText } from "../../database/text";
import { levelUp } from "../../functions/game/prices";
import "../../style/game-main-menu/game-main-menu-manifiest.css";


export default function GameMainM() {
  const device = useRezise();
  const { gamedata, setGD } = useGD();
  const setMenu = useChangeGM();

 
  
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

      <div>
        <button
          onClick={() => {
            const userConfirm = confirm(
              `GO UP TO LEVEL ${gamedata.level + 1}? \n IT WILL COST ${levelUp(
                gamedata.level
              )} COINS`
            );
            if (userConfirm) {
              if (levelUp(gamedata.level) <= gamedata.money) {
                const auxObj = JSON.parse(JSON.stringify(gamedata));
                auxObj.money -= levelUp(gamedata.level);
                auxObj.level += 1;
                setGD(auxObj);
              } else {
                alert("NO ENOUGH COINS");
              }
            }
          }}
          className={`gmm-actbtn gmm-actbtn-${device}`}
        >
          LEVEL UP!
        </button>
        <br />
        <button
          className={` gmm-actbtn gmm-actbtn-${device}`}
          onClick={() => {
            setMenu("chat");
          }}
        >
          SEND A MESSAJE
        </button>
        <br />
        <button 
        onClick={()=>{
          setMenu("challenge")
        }}
        className={` gmm-actbtn gmm-actbtn-${device}`}>
          ASK A CHALLENGE
        </button>
      </div>
    </div>
  );
}
