import styles from "../Styles/Preferences.module.css";

export default function Preferences() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Preferences</h2>
      <div className={styles.themeSection}>
        <label className={styles.label}>Theme</label>
        <select className={styles.select}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className={styles.languageSection}>
        <label className={styles.label}>Language</label>
        <select className={styles.select}>
          <option value="en">English</option>
          <option value="es">Greek</option>
        </select>
      </div>
    </div>
  );
}
