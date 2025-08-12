import ProductList from "./features/products/productList";
import Login from "./features/auth/login";
import Cart from "./features/cart/cart";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ProductList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
