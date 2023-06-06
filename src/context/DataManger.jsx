import { createContext, useContext } from "react";

export const GameDataContext = createContext();
export const useGD = () => useContext(GameDataContext);

const GameDataProvider = ({ children, setGD, gamedata }) => {
  return (
    <GameDataContext.Provider
      value={{
        setGD: setGD,
        gamedata: gamedata,
      }}
    >
      {children}
    </GameDataContext.Provider>
  );
};

export default GameDataProvider;
