import styles from "../Styles/ProductDetails.module.css";

export default function ProductDetails({ selectedProducts }) {
  return (
    <div className={styles.detailsContainer}>
      <h2>Product Details</h2>
      <div className={styles.detailsContent}>
        {selectedProducts && Object.keys(selectedProducts).length > 0 ? (
          <>
            <div className={styles.informations}>
              <p>Name: {selectedProducts.name}</p>
              <p>Price: {selectedProducts.price}$</p>
            </div>
            <div className={styles.actions}>
              <button>Edit</button>
              <button>Toogle Status</button>
            </div>
          </>
        ) : (
          <p>No product selected</p>
        )}
      </div>
    </div>
  );
}
