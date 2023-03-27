import React, { useState, useContext } from "react";
import voucher_codes from "voucher-code-generator";
import CouponContext from "../Context/CouponContext";

function AddCoupon() {
  const [inputValue, setInputValue] = useState({});
  const context = useContext(CouponContext);
  const { addCoupon } = context;
  const handleClick = () => {
    const coupon = voucher_codes.generate({
      length: 7,
      charset: voucher_codes.charset("alphanumeric"),
    });

    document.getElementById("code").value = coupon;
    setInputValue({ ...inputValue, coupon_id: coupon[0].toUpperCase() });
  };

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };
  return (
    <div className="my-5 w-75 m-auto">
      <form
        className="row g-3 needs-validation"
        onSubmit={() => addCoupon(inputValue)}
        novalidate
      >
        <div className="col-md-4 ">
          <label for="code" className="form-label">
            Code
          </label>
          <div className="d-flex">
            <input
              type="text "
              className="form-control d-inline-block "
              id="code"
              name="coupon_id"
              style={{ textTransform: "uppercase" }}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn-custom ms-2 btn-custom-font"
              onClick={handleClick}
            >
              Random
            </button>
          </div>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="discount" className="form-label">
            Discount(in %)
          </label>
          <input
            type="number"
            className="form-control"
            id="discount"
            name="discount"
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="expiration" className="form-label">
            Expiration Date
          </label>
          <div className="input-group has-validation">
            <input
              type="date"
              className="form-control"
              id="expiraton"
              name="expiration"
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please choose a expiration Date
            </div>
          </div>
        </div>
        <button type="submit" className="btn-custom">
          Add Coupon
        </button>
      </form>
    </div>
  );
}

export default AddCoupon;
