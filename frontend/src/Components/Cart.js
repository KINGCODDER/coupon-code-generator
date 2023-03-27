import React, { useState, useContext } from "react";
import CouponContext from "../Context/CouponContext";
import Product from "../Resources/lamborghini.png";
import LoadingComponent from "./LoadingComponent";
import Popup from "./Popup";
import "../Style/Cart.css";

function Cart() {
  const context = useContext(CouponContext);
  const { discount, validateCoupon, loading } = context;
  const [price, setPrice] = useState(40000000);
  const [totalPrice, setTotalPrice] = useState(price + 2000000);

  const calculateValue = () => {
    const tax = 2000000;
    const shippingCost = document.getElementById("shipping")?.value || 0;
    const item = document.getElementById("item")?.value || 0;
    console.log(item * price);
    let discountCost = 0;
    if (discount.status === "Success") {
      discountCost = (price * discount.data.coupon.discount) / 100;
    }
    const ans = price * Number(item) + Number(shippingCost) + tax;

    setTotalPrice(ans - discountCost);
  };

  return (
    <div>
      <div className="nav-bar d-flex justify-content-center align-items-center  ">
        <a href="/" className="text-1 text-styling">
          <i class="bi bi-caret-left-fill"></i>
        </a>
        <h1 className="text-center m-5 text-1">Your Cart 🛒</h1>
      </div>

      <div className="checkout-page container my-5 d-flex align-items-center justify-content-around">
        <div className="image-container w-50 float-start">
          <img className=" w-100" src={Product} alt="Product" />
        </div>

        <div className="product-checkout d-flex flex-column">
          <span className="product-name mx-2 float-start text-styling">
            Lamborghini Aventedor
          </span>
          <span className="product-price mx-2 float-start text-styling">
            Rs. 4,00,00,000
          </span>
        </div>
      </div>

      <div className="cart m-full w-50">
        <h2 className="text-center text-styling">Summary</h2>
        <div className="calculations my-3 d-flex flex-column">
          <div className="field my-1">
            <span className="float-start">Ex showroom Price:</span>
            <span className="float-end">4,00,00,000</span>
          </div>

          <div className="field my-1">
            <span className="float-start">Items:</span>
            <span className="float-end">
              <select
                className="form-select"
                aria-label="Default select example"
                id="item"
                onChange={calculateValue}
              >
                <option value="0">Select Items</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </span>
          </div>
          <div className="field my-1">
            <span className="float-start">Shipping Cost:</span>
            <span className="float-end">
              <select
                className="form-select"
                aria-label="Default select example"
                id="shipping"
                onChange={calculateValue}
                required
              >
                <option value="0">Select Shipping</option>
                <option value="500">Normal Rs.500</option>
                <option value="5000">Expensive Rs. 5000</option>
                <option value="50000">Royal Rs. 50000</option>
              </select>
            </span>
          </div>

          <div className="field my-1">
            <span className="float-start">Tax:</span>
            <span className="float-end">Rs. 20 Lakh (Cap Limit)</span>
          </div>

          <div className="field my-1 border-bottom-light">
            <span className="float-start">Discount:</span>
            <span className="float-end d-flex" value="0">
              {discount.status !== "Success" ? (
                <>
                  <input
                    type="text"
                    className={`form-control d-inline-block `}
                    placeholder="Coupon Code"
                    id="code"
                    required
                  />
                  <button
                    className={`btn-custom w-50 ms-2 d-inline-block `}
                    onClick={() => {
                      const code = document
                        .getElementById("code")
                        .value.toUpperCase();
                      validateCoupon(code);
                    }}
                    id="button"
                  >
                    {loading ? <LoadingComponent /> : "Apply"}
                  </button>
                </>
              ) : (
                ""
              )}
            </span>
            {loading === false ? (
              <span className={`float-end`}>
                {discount.status === "Success" ? (
                  -(price * discount.data.coupon.discount) / 100
                ) : (
                  <span className="error-message me-2">
                    <i class="bi bi-exclamation-triangle-fill me-1"></i>
                    {discount.message}
                  </span>
                )}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="field my-1">
            <span className="float-start">Total:</span>
            <span className="float-end">
              {discount.status !== "Success"
                ? totalPrice
                : totalPrice - (price * discount.data.coupon.discount) / 100}
            </span>
          </div>
        </div>
        <div className="btn-container m-4">
          <button
            className="btn-custom w-100"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Place Order
          </button>
        </div>
      </div>

      <Popup
        total={
          discount.status !== "Success"
            ? totalPrice
            : totalPrice - (price * discount.data.coupon.discount) / 100
        }
      />
    </div>
  );
}

export default Cart;
