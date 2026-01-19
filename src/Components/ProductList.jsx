import styles from "../Styles/ProductList.module.css";

export default function ProductList({ products }) {
  return (
    <div className={styles.productListContainer}>
      <h2>Product List</h2>
      <div className={styles.productList}>
        <div className={styles.header}>Product</div>
        <div className={styles.header}>Category</div>
        <div className={styles.header}>Price</div>
        <div className={styles.header}>Status</div>
        {products.map((product) => (
          <div key={product.id} className={styles.productRow}>
            <div className={styles.cell}>{product.name}</div>
            <div className={styles.cell}>{product.category}</div>
            <div className={styles.cell}>${product.price}</div>
            <div className={styles.cell}>{product.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
