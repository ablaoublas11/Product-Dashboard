import styles from "../Styles/ProductList.module.css";
import { useAuth } from "../Context/AuthContext";

export default function ProductList({ products }) {
  const { isLoggedIn } = useAuth();
  return (
    <div className={styles.productListContainer}>
      {isLoggedIn ? (
        <>
          <h2>Product List</h2>
          <div className={styles.productList}>
            <div className={styles.header}>Product</div>
            <div className={styles.header}>Category</div>
            <div className={styles.header}>Price</div>
            <div className={styles.header}>Status</div>
            {products.map((product) => (
              <div key={product.id} className={styles.productRow}>
                <div className={styles.cell} data-label="Product: ">
                  {product.name}
                </div>
                <div className={styles.cell} data-label="Category: ">
                  {product.category}
                </div>
                <div className={styles.cell} data-label="Price: ">
                  {product.price}$
                </div>
                <div className={styles.cell} data-label="Status: ">
                  {product.status}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Please log in to view products.</p>
      )}
    </div>
  );
}
