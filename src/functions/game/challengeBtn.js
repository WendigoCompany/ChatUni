import ChallegeBtn from "../../components/ChallengesButtons";
import { challengeTable } from "./prices";

export const challBTNmob = (page) => {
  const components = [];
  for (let i = 0; i < challengeTable.length; ) {
    if (Math.floor(i / 4) === page) {
      const newBtn = [];
      newBtn.push(challengeTable[i]);
      if (challengeTable[i + 1] !== undefined) {
        newBtn.push(challengeTable[i + 1]);
      }
      components.push(
        <ChallegeBtn
          action={newBtn}
        ></ChallegeBtn>
      );
    }
    i += 2;
  }
  return components;
};

export const challBTNdesk = () => {};
