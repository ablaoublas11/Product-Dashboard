import styles from "../Styles/Preferences.module.css";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { usePref } from "../Context/PrefContext";

export default function Preferences({ flagClearFilter }) {
  const { isLoggedIn } = useAuth();
  const { theme, toggleTheme, language, changeLanguage } = usePref();

  const [tempTheme, setTempTheme] = useState(theme);
  const changeTempTheme = (value) => {
    setTempTheme(value);
    toggleTheme(value);
  };
  const [tempLanguage, setTempLanguage] = useState(language);
  const changeTempLanguage = (value) => {
    setTempLanguage(value);
    changeLanguage(value);
  };

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <>
          <h2 className={styles.title}>Preferences</h2>
          <div className={styles.themeSection}>
            <label className={styles.label}>Theme</label>
            <select
              name="theme"
              id="theme"
              className={styles.select}
              onChange={(e) => changeTempTheme(e.target.value)}
              value={tempTheme}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className={styles.languageSection}>
            <label className={styles.label}>Language</label>
            <select
              className={styles.select}
              name="language"
              id="language"
              onChange={(e) => changeTempLanguage(e.target.value)}
              value={tempLanguage}
            >
              <option value="en">English</option>
              <option value="gr">Greek</option>
            </select>
          </div>
        </>
      ) : (
        <p>Please log in to set your preferences.</p>
      )}
    </div>
  );
}
