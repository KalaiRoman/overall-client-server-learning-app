import ThemeContext from "../contextapi/ThemeContext";

function ContextProvider({ children }) {
  return <ThemeContext>{children}</ThemeContext>;
}

export default ContextProvider;
