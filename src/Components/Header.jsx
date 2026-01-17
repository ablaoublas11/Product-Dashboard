import styles from "../Styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Product Dashboard</h1>
      <div className={styles.userProfile}>
        <p>Welcome, User</p>
        <button className={styles.loginButton}>Login</button>
      </div>
    </header>
  );
}
