import { createContext, useContext } from "react";

export const MainContext = createContext();
export const useMainCTXT = () => useContext(MainContext);

const MainProvider = ({ children, setMain }) => {
  return (
    <MainContext.Provider value={setMain}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
