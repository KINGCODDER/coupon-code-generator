import React, { useState, useContext } from "react";
import "../Style/Form.css";
import CouponContext from "../Context/CouponContext";

function Form({ id, title, data }) {
  const contex = useContext(CouponContext);
  const { updateCoupon, getAllCoupon } = contex;
  const [inputValue, setInputValue] = useState({
    coupon_id: data.coupon_id,
    expiration: data.expiration,
    discount: data.discount,
  });
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div
        class="modal fade"
        id={`exampleModal-${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header update">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              class="row g-3 needs-validation"
              noValidate
              onSubmit={() => {
                updateCoupon(data._id, inputValue);
              }}
            >
              <div class="modal-body">
                <div class="mb-3">
                  <label htmlFor="coupon_id" class="form-label">
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="coupon_id"
                    value={inputValue.coupon_id}
                    name="coupon_id"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div class="mb-3">
                  <label htmlFor="discount" class="form-label">
                    Discount(in %)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="discount"
                    value={inputValue.discount}
                    name="discount"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div class="mb-3">
                  <label htmlFor="expiration" class="form-label">
                    Expiration
                  </label>
                  {/* <DatePicker
                    value={inputValue.expiration}
                    onChange={(e) => {
                      console.log(Date(e.value));
                      console.log({ ...inputValue, expiration: Date(e) });
                      setInputValue({ ...inputValue, expiration: Date(e) });
                    }}
                    name="expiration"
                  /> */}
                  <input
                    type="date"
                    class="form-control"
                    id="expiration"
                    value={inputValue.expiration}
                    name="expiration"
                    onChange={(e) => {
                      setInputValue({
                        ...inputValue,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
