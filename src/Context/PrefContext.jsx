import { createContext, useContext, useState, useEffect, use } from "react";

const PrefContext = createContext();

export function PrefProvider({ children }) {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = (value) => {
    setTheme(value);
  };
  const [language, setLanguage] = useState("English");
  const changeLanguage = (value) => {
    setLanguage(value);
    console.log("Language changed to:", value);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme.toLowerCase());
  }, [theme]);
  return (
    <PrefContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        changeLanguage,
      }}
    >
      {children}
    </PrefContext.Provider>
  );
}
export function usePref() {
  return useContext(PrefContext);
}
