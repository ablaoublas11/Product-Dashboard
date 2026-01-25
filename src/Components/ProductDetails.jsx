import styles from "../Styles/ProductDetails.module.css";
import { useState } from "react";
export default function ProductDetails({
  selectedProducts,
  handleEditProducts,
  handleSaveProducts,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className={styles.detailsContainer}>
      <h2>Product Details</h2>
      <div className={styles.detailsContent}>
        {selectedProducts && Object.keys(selectedProducts).length > 0 ? (
          <>
            <div className={styles.informations}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    id="name-text"
                    value={selectedProducts.name}
                    placeholder="Enter Name"
                    className={styles.productDetails}
                    onChange={(e) =>
                      handleEditProducts(
                        selectedProducts.id,
                        "name",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    type="text"
                    id="price-text"
                    value={selectedProducts.price}
                    placeholder="Enter Price"
                    className={styles.productDetails}
                    onChange={(e) =>
                      handleEditProducts(
                        selectedProducts.id,
                        "price",
                        e.target.value,
                      )
                    }
                  />
                </>
              ) : (
                <>
                  <p className={styles.productDetails}>
                    Name: {selectedProducts.name}
                  </p>
                  <p className={styles.productDetails}>
                    Price: {selectedProducts.price}$
                  </p>
                </>
              )}
            </div>
            <div className={styles.actions}>
              {!isEditing ? (
                <button onClick={toggleIsEditing}>Edit</button>
              ) : (
                <button onClick={toggleIsEditing}>Save</button>
              )}
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
