import { createContext, useContext, useState } from "react";

const ModeContext = createContext({
  mode: "",
  toggleTheme: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ModeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
