import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./Screens/Home/Home";
import ProductDetail from "./Screens/ProductDetail/ProductDetail";
import Cart from "./Screens/Cart/Cart";
import ProductPage from "./Screens/ProductPage/ProductPage";
import store from "./Store/Store";
import Test from "./Components/Test";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
