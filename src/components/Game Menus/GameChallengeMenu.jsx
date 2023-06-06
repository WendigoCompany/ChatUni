import "../../style/challenge-menu/challenge-menu-manifiest.css";

import { useGD } from "../../context/DataManger";

import { useRezise } from "../../context/Resize";
import { useChangeGM } from "../../context/GameMenu";
import { useState } from "react";
import ChallegeBtn from "../ChallengesButtons";
import { challBTNmob } from "../../functions/game/challengeBtn";
import { challengeTable } from "../../functions/game/prices";

// HOT CHAT
// FLASH PANTIES
// FOCUS BREAST
// FOCUS ASS
// FOCUS PUSSY
// RANDOM POSE
// TOUCH YOUR PUSSY
// VIBRO CONTROL
// HJ DILDO
// BJ DILDO
// FUCK DIDLO

// challenges.map((challenge,i) => (
//   <ChallegeBtn action={[challenges[i], challenges[i+1]]}></ChallegeBtn>
// ))

export default function ChallengeMenu() {
  const device = useRezise();
  const setMenu = useChangeGM();
  const { gamedata, setGD } = useGD();
  const [challengePage, setCS] = useState(0);

  const calculateMax = () => {
    const fullPages = challengeTable.length % 4 === 0;
    if (device === "mob") {
      if (fullPages) {
        return Math.floor(challengeTable.length / 4) - 1;
      } else {
        return Math.floor(challengeTable.length / 4);
      }
    }
  };

  const maxChallPage = calculateMax();

  const showBtn = () => {
    if (device === "mob") {
      return challBTNmob(challengePage);
    }
  };

  return (
    <div>
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

      <div className={`btn-chall-cont-${device}`}>
        <div>
          <button className={`btn-chall btn-chall-${device}`}>
            <img
              src="https://img.icons8.com/?size=512&id=39789&format=png"
              className={` gmm-money-${device}`}
              onClick={() => {
                setCS(challengePage - 1 < 0 ? maxChallPage : challengePage - 1);
              }}
              style={{
                opacity: 1,
              }}
            />
          </button>

          <button className={`btn-chall btn-chall-${device}`}>
            <img
              src="https://img.icons8.com/?size=512&id=39790&format=png"
              className={` gmm-money-${device}`}
              onClick={() => {
                setCS(challengePage + 1 > maxChallPage ? 0 : challengePage + 1);
              }}
              style={{
                opacity: 1,
              }}
            />
          </button>
        </div>

        {showBtn()}
      </div>

      {/*             
            <ChallegeBtn action={[challenges[2], challenges[3]]}></ChallegeBtn>
            <ChallegeBtn action={[challenges[4], challenges[5]]}></ChallegeBtn> */}

      {/* <div className={`btn-chat-cont-${device}`} style={{
        textAlign : "center"
      }}>
        <button
        className={`btn-chat-${device} btn-chat-normal btn-chat-${device} btn-chat`}
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
      </div> */}
    </div>
  );
}
