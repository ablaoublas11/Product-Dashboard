import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Preferences from "./Components/Preferences";
import Filter from "./Components/Filter";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import "./App.css";

function App() {
  // Αποθηκευω εδώ τους users για να τα περασω σαν props στο ProductList και όχι σε Context (γιατι δεν ειναι αναγκαιο να τα εχει ολη η εφαρμογη)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      isLoggedIn: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "user",
      isLoggedIn: false,
    },
  ]);
  // Εδώ κάνω την αλλαγή του isLoggedIn όταν πατιέται το κουμπί στο Header
  const toogleLoggedIn = () => {};

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
    <div className="mainContainer">
      <Header />
      <div className="sideBar">
        <Preferences />
        <Filter />
      </div>
      <div className="dataContainer">
        <ProductList products={products} />
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
