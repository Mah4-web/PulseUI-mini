import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

const lightTheme = "light";
const darkTheme = "dark";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === lightTheme ? darkTheme : lightTheme;
    default:
      return state;
  }
}

export default function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(reducer, lightTheme);

  // Set data-theme attribute on html
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
