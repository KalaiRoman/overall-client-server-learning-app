import ThemeProvider from "../contextapi/ThemeProvider";

function ContextProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default ContextProvider;
