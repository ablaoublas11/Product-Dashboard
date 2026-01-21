import styles from "../Styles/Filter.module.css";
import { useAuth } from "../Context/AuthContext";

export default function Filter({
  products,
  selectedCategory,
  handleSelectedCategory,
}) {
  const { isLoggedIn } = useAuth();
  const tempCategory = products.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.category === value.category),
  );

  const changeTempCategory = (value) => {
    setTempCategory(value);
    // Implement category filtering logic here
  };
  return (
    <div className={styles.filterContainer}>
      {isLoggedIn ? (
        <>
          <h2 className={styles.filterTitle}>Filter Products</h2>
          <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Category</label>
            <select
              className={styles.filterSelect}
              name="category"
              id="categories"
              onChange={(e) => handleSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="all">All</option>
              {tempCategory.map((categoryObj) => (
                <option key={categoryObj.id} value={categoryObj.category}>
                  {categoryObj.category}
                </option>
              ))}
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
