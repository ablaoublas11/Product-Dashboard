import styles from "../Styles/Header.module.css";
import { useAuth } from "../Context/AuthContext";

export default function Header() {
  const { user, isLoggedIn, toggleLogin } = useAuth();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Product Dashboard</h1>
      <div className={styles.userProfile}>
        <p>Welcome, {isLoggedIn ? user.username : "Guest"}</p>
        <button className={styles.loginButton} onClick={toggleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}
