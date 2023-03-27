import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import CouponState from "./Context/CouponState";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div className="App">
      <CouponState>
        <Router>
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route element={<Cart />} path={"/cart"} />
            <Route element={<Dashboard />} path={"/dashboard"} />
          </Routes>
        </Router>
      </CouponState>
    </div>
  );
}

export default App;
