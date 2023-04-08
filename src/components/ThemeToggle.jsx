import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button 
    onClick={handleClick} 
    style={{ 
      border: 'none', 
      backgroundColor: 'inherit', 
      fontSize: '1.5rem' }}
    >
      {theme === "light" ?  "🌞": "🌙"}
    </button>
  );
}