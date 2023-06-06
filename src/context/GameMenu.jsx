import { createContext, useContext } from "react";

export const GameMenuContext = createContext();
export const useChangeGM = () => useContext(GameMenuContext);

const GameMenuProvider = ({ children, setMenu }) => {
 return <GameMenuContext.Provider value={setMenu}>
    {children}
  </GameMenuContext.Provider>;
};

export default GameMenuProvider;
