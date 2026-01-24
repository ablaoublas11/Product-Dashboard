import { use, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Preferences from "./Components/Preferences";
import Filter from "./Components/Filter";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import { PrefProvider } from "./Context/PrefContext";
import { AuthProvider } from "./Context/AuthContext";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop Pro 15",
      category: "Electronics",
      price: 1200,
      status: "active",
    },
    {
      id: 2,
      name: "Office Chair",
      category: "Furniture",
      price: 180,
      status: "active",
    },
    {
      id: 3,
      name: "Smartphone X",
      category: "Electronics",
      price: 850,
      status: "inactive",
    },
    {
      id: 4,
      name: "Wooden Desk",
      category: "Furniture",
      price: 350,
      status: "active",
    },
    {
      id: 5,
      name: "Headphones",
      category: "Electronics",
      price: 220,
      status: "active",
    },
    {
      id: 6,
      name: 'LED Monitor 27"',
      category: "Electronics",
      price: 400,
      status: "inactive",
    },
    {
      id: 7,
      name: "Bookshelf",
      category: "Furniture",
      price: 150,
      status: "active",
    },
    {
      id: 8,
      name: "Coffee Machine",
      category: "Appliances",
      price: 300,
      status: "active",
    },
    {
      id: 9,
      name: "Air Purifier",
      category: "Appliances",
      price: 270,
      status: "inactive",
    },
    {
      id: 10,
      name: "Table Lamp",
      category: "Furniture",
      price: 60,
      status: "active",
    },
  ]);
  // μέθοδος για την διαχείρηση της επιλογή του category από το dropdown
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
    filterProducts(category, selectedStatus);
    handleFlagClearFilter();
    //console.log(category);
    // εδώ πρέπει να καλέσουμε και την μέθοδο φιλτραρίσματος των προϊόντων
  };
  // μέθοδος για την διαχείρηση της επιλογή του status από το dropdown
  const handleSelectedStatus = (status) => {
    setSelectedStatus(status);
    filterProducts(selectedCategory, status);
    handleFlagClearFilter();
  };
  // μεταβλητή για την αποθήκευση των επιλεγμένων προϊόντων
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const filterProducts = (sCategory, sStatus) => {
    const categoryLower = (sCategory || "").toLowerCase().trim();
    const statusLower = (sStatus || "").toLowerCase().trim();

    const filtered = products.filter((product) => {
      // εάν είναι κενή η επιλογή category τότε πάρε όλα τα προϊόντα, αλλιώς δες εάν συμπεριλαμβάνονται στην λίστα
      const passesCategory =
        !categoryLower ||
        categoryLower === "all" ||
        product.category.toLowerCase() === categoryLower;
      // εάν είναι κενή η επιλογή status τότε πάρε όλα τα προϊόντα, αλλιώς δες εάν συμπεριλαμβάνονται στην λίστα
      const passesStatus =
        !statusLower ||
        statusLower === "all" ||
        product.status.toLowerCase() === statusLower;

      return passesCategory && passesStatus;
    });
    setFilteredProducts(filtered);
  };

  const [flagClearFilter, setFlagClearFilter] = useState(false);
  const handleFlagClearFilter = () => {
    setFlagClearFilter(true);
  };
  const clearFilter = () => {
    setFilteredProducts(products);
    setSelectedCategory("");
    setFlagClearFilter(false);
    setSelectedProducts([]);
  };

  return (
    <AuthProvider>
      <div className="mainContainer">
        <Header />
        <PrefProvider>
          <div className="sideBar">
            <div className="preferencesBar">
              <Preferences />
            </div>
            <div className="filterBar">
              <Filter
                products={products}
                selectedCategory={selectedCategory}
                handleSelectedCategory={handleSelectedCategory}
                selectedStatus={selectedStatus}
                handleSelectedStatus={handleSelectedStatus}
              />
            </div>
            <div className="clearButtonContainer">
              <button
                className={`clearFilterButton ${flagClearFilter ? "active" : "inactive"}`}
                onClick={clearFilter}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </PrefProvider>
        <div className="dataContainer">
          <ProductList
            products={filteredProducts}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
          <ProductDetails selectedProducts={selectedProducts} />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
