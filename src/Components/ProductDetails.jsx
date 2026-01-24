import styles from "../Styles/ProductDetails.module.css";

export default function ProductDetails({ selectedProducts }) {
  return (
    <div className={styles.detailsContainer}>
      <h2>Product Details</h2>
      <div className={styles.detailsContent}>
        <div className={styles.informations}>
          <p>Name: Smartphone</p>
          <p>Price: 100$</p>
        </div>
        <div className={styles.actions}>
          <button>Edit</button>
          <button>Toogle Status</button>
        </div>
      </div>
    </div>
  );
}
