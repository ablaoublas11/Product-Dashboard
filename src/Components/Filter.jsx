import styles from "../Styles/Filter.module.css";
import { useAuth } from "../Context/AuthContext";

export default function Filter() {
  const { isLoggedIn } = useAuth();
  return (
    <div className={styles.filterContainer}>
      {isLoggedIn ? (
        <>
          <h2 className={styles.filterTitle}>Filter Products</h2>
          <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Category</label>
            <select className={styles.filterSelect}>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
          <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Status</label>
            <select className={styles.filterSelect}>
              <option value="all">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </>
      ) : (
        <p>Please log in to filter products.</p>
      )}
    </div>
  );
}
