import styles from "../Styles/Filter.module.css";
import { useAuth } from "../Context/AuthContext";

export default function Filter({ products, ...props }) {
  const { isLoggedIn } = useAuth();
  // Δημιουργία μοναδικών κατηγοριών και καταστάσεων από τα προϊόντα
  const tempCategory = products.filter(
    //το value είναι το τρέχον αντικείμενο, το index η τρέχουσα θέση και το self ολόκληρος ο πίνακας
    (value, index, self) =>
      //ελέγχει εάν η τρέχουσα θέση είναι η πρώτη εμφάνιση της συγκεκριμένης κατηγορίας
      index === self.findIndex((t) => t.category === value.category),
  );

  const tempStatus = products.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.status === value.status),
  );

  //μέθοδος για την εμφάνιση των options των φίλτρων κατηγορίας και κατάστασης
  //επαναχρησιμοποίηση και για τα δύο φίλτρα
  const renderOptions = (data, valueKey, labelKey) => {
    //data είναι ο πίνακας με τα αντικείμενα που θέλουμε να εμφανίσουμε ως επιλογές
    //valueKey είναι το κλειδί που θα χρησιμοποιηθεί για την τιμή της επιλογής
    //labelKey είναι το κλειδί που θα χρησιμοποιηθεί για την ετικέτα της επιλογής
    return (
      <>
        <option value="all">All</option>
        {data.map((item) => (
          <option key={item.id} value={item[valueKey]}>
            {item[labelKey]}
          </option>
        ))}
      </>
    );
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
              onChange={(e) => props.handleSelectedCategory(e.target.value)}
              value={props.selectedCategory}
            >
              {renderOptions(tempCategory, "category", "category")}
            </select>
          </div>
          <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Status</label>
            <select
              className={styles.filterSelect}
              name="sttus"
              id="status"
              value={props.selectedSatus}
              onChange={(e) => props.handleSelectedStatus(e.target.value)}
            >
              {renderOptions(tempStatus, "status", "status")}
            </select>
          </div>
        </>
      ) : (
        <p>Please log in to filter products.</p>
      )}
    </div>
  );
}
