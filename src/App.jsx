import { useState } from "react";
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

  return (
    <AuthProvider>
      <div className="mainContainer">
        <Header />
        <PrefProvider>
          <div className="sideBar">
            <Preferences />
            <Filter />
          </div>
        </PrefProvider>
        <div className="dataContainer">
          <ProductList products={products} />
          <ProductDetails />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
