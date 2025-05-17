import { useContext } from "react";
import ThemeContext from "./ThemeContext";
function ThemeProvider({ children }) {
  const datas = {
    name: "kalai",
    age: "20",
  };
  return (
    <ThemeContext.Provider value={datas}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const userTheme = useContext();
