import { useMainCTXT } from "../context/MainContext";
import { useRezise } from "../context/Resize";
import "../style/main-menu/main-menu-manifiest.css";

export default function MainMenu() {
  const device = useRezise();
  const setMain = useMainCTXT();
  return (
    <div>
      <div className={` title`}>
        <h1 className={`title-${device}  t-shadow-blacked`}>CHAT WITH UNI!</h1>
      </div>

      <div style={{ textAlign: "center" }}>
        <p className={`main-msj main-msj-${device} t-shadow-blacked`}>
          CONGRATULATIONS!!! <br></br>
          FOR OUR FIRST TRANSMISSION <br></br>
          YOU HAVE BEEN SELECTED <br></br>
          TO HAVE A PRIVATE <br></br>
          CHAT WITH UNI <br></br>
          WHAT DO YOU LIKE TO BE CALLED: <br></br>
        </p>
        <input
          type="text"
          className={`input-name input-name-${device} t-shadow-blacked`}
          id="username"
          placeholder="NAME"
        />
        <div>
          <button
            onClick={() => {

              sessionStorage.setItem("name", document.getElementById("username").value)
              setMain("game")
            }}
            className={`button outline main-menu-accept main-menu-accept-${device} t-shadow-blacked`}
          >
            ENTER!
          </button>
          <br />
          <button
            onClick={() => {setMain("")}}
            className={`button outline main-menu-cancel main-menu-cancel-${device} t-shadow-blacked`}
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
}
