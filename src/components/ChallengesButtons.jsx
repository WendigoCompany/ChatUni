import { useGD } from "../context/DataManger";
import { useRezise } from "../context/Resize";

export default function ChallegeBtn({ action }) {
  const device = useRezise();
  const { gamedata } = useGD();


  return (
    <div>
      <div>
        <button className={`btn-chall btn-chall-${device} t-shadow-blacked`}>
          {action[0].level > gamedata.level ? "???" : action[0].name}
          <br />
          <img
            src="https://img.icons8.com/?size=512&id=sPBQkuep9vDA&format=png"
            className={` gmm-money-${device}`}
          />{" "}
          - {action[0].level > gamedata.level ? "???" : action[0].price}
        </button>
        {action[1] !== undefined ? (
          <button className={`btn-chall btn-chall-${device} t-shadow-blacked`}>
            {action[1].level > gamedata.level ? "???" : action[1].name}
            <br />
            <img
              src="https://img.icons8.com/?size=512&id=sPBQkuep9vDA&format=png"
              className={` gmm-money-${device} `}
            />{" "}
          - {action[1].level > gamedata.level ? "???" : action[1].price}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
