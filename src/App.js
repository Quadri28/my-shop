import "./App.css";
import NavbBar from "./Components/NavbBar";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { Routes, Route } from "react-router-dom";
import SingleProducts from "./Components/SingleProducts";
import ProductsPageContainer from "./Redux/Products/ProductsPageContainer";
import CartPage from "./Components/CartPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavbBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPageContainer/>}/>
          <Route path="/category/:name" element={<SingleProducts/>} />
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
