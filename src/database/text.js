import { normalTxt } from "./texts/normal";

const basicTxt = "Hi!  My name is Uni...Nice {user}";

const parseNormalQ = (text) => {
  return (
    <div>
      <h3>{text[0]}</h3>
      <h3>{text[1]}</h3>
    </div>
  );
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const loadTxt = (id) => {
  let selected = [];
  switch (id) {
    case "normal":
      selected = parseNormalQ(normalTxt[random(0, normalTxt.length)]);
      break;
  } 
  return selected
};

export const getText = () => {
  const textType = sessionStorage.getItem("text");
  let txt = "";
  if (textType !== null) {
    return loadTxt(sessionStorage.getItem("text"));
  } else {
    txt = basicTxt;
    txt = txt.replace("{user}", sessionStorage.getItem("name"));
    sessionStorage.setItem("text", "none");
  }
  return txt;
};
