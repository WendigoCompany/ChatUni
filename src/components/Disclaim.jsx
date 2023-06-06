import { useMainCTXT } from "../context/MainContext";
import { useRezise } from "../context/Resize";
import "../style/disclaim/disclaim-manifiest.css";

export default function Disclaim() {
  const device = useRezise();

  const setMain = useMainCTXT();
  return (
    <div>
      <div className={` title`}>
        <h1 className={`title-${device}  t-shadow-blacked`}>CHAT WITH UNI!</h1>
      </div>
      <div className={`alert-img-cont`}>
        <img
          className={`alert-img-${device} alert-img`}
          src="https://cdn-icons-png.flaticon.com/512/2299/2299283.png"
          alt=""
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h3 className={`disclaim-${device} disclaim t-shadow-blacked`}>
          THIS SITE CONTAINS +18 CONTENT
        </h3>
        <button
          onClick={() => {setMain("main-menu")}}
          className={`button outline disc-accept disc-accept-${device} t-shadow-blacked`}
        >
          I AM +18 YEARS OLD
        </button>
        <br />
        <button
          onClick={() => {
            window.location.href = "https://www.google.com";
          }}
          className={`button outline disc-cancel disc-cancel-${device} t-shadow-blacked`}
        >
          I AM NOT +18 YEARS OLD
        </button>
      </div>
    </div>
  );
}
