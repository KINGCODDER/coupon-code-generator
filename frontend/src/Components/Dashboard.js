import React, { useEffect, useContext } from "react";
import "../Style/Dashboard.css";
import CouponContext from "../Context/CouponContext";
import Form from "../Components/Form";
import LoadingFullScreen from "./LoadingFullScreen";
import AddCoupon from "./AddCoupon";

function Dashboard() {
  const context = useContext(CouponContext);
  const { getAllCoupon, coupon, loadingAdmin, deleteCoupon } = context;
  useEffect(() => {
    getAllCoupon();
  }, []);

  const dateConvertion = (date) => {
    let dateInput = date || "N/A";
    let dateFormated = dateInput.substring(0, 10);
    return dateFormated;
  };

  return (
    <div>
      <div className="nav-bar d-flex justify-content-center align-items-center  ">
        <h1 className="text-center m-5 text-1">Admin Pannel</h1>
        <a href="/" className="text-1 text-styling">
          <i class="bi bi-caret-right-fill"></i>
        </a>
      </div>

      <AddCoupon/>

      {loadingAdmin === true ? (
        <LoadingFullScreen />
      ) : (
        <>
          {console.log()}
          <div className="codegenerator">
            <div className="coupon-field">
              <table className="table w-75 m-auto">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Valid Upto</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {coupon?.data.result.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{item.coupon_id}</th>
                        <td>{item.discount}%</td>
                        <td>{dateConvertion(item.expiration)}</td>
                        <td>
                          <Form id={index} title="Update Coupon" data={item} />
                          <button
                            type="button"
                            class="btn btn-warning"
                            data-bs-toggle={`modal`}
                            data-bs-target={`#exampleModal-${index}`}
                          >
                            <i class="bi bi-pencil-square"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-danger ms-2"
                            onClick={() => {
                              deleteCoupon(item._id);

                              setTimeout(() => {
                                getAllCoupon();
                              }, 100);
                            }}
                          >
                            <i class="bi bi-trash3"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
