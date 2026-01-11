import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext.jsx";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="themeToggle" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
