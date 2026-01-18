import styles from "../Styles/Filter.module.css";

export default function Filter() {
  return (
    <div className={styles.filterContainer}>
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
    </div>
  );
}
