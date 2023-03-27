import React, { useState } from "react";
import CouponContext from "./CouponContext";
import axios from "axios";

const CouponState = (props) => {
  const [discount, setDiscount] = useState({ status: "Not Defined" });
  const [coupon, setCoupon] = useState();
  const [loading, setLoading] = useState();

  const [loadingAdmin, setLoadingAdmin] = useState(true);
  const host = "http://localhost:3405";

  const validateCoupon = async (code) => {
    try {
      setLoading(true);
      const url = `${host}/api/v1/coupon/validate/${code}`;
      console.log(url);
      const couponCode = await axios.get(url);
      setLoading(true);
      setDiscount(couponCode.data);

      setLoading(false);
    } catch (err) {
      setDiscount(err.response.data);
      setLoading(false);
    }
  };

  const getAllCoupon = async () => {
    try {
      setLoadingAdmin(true);
      const coup = await axios.get(`${host}/api/v1/coupon`);
      setCoupon(coup.data);
      setLoadingAdmin(false);
    } catch (err) {
      setCoupon(err.response.data);
      setLoadingAdmin(false);
    }
  };

  const updateCoupon = async (id, data) => {
    try {
      setLoadingAdmin(true);
      await axios.patch(`${host}/api/v1/coupon/${id}`, {
        coupon_id: data.coupon_id,
        expiration: data.expiration,
        discount: data.discount,
      });

      setLoadingAdmin(false);
    } catch (err) {
      console.error(err.message);
      setLoadingAdmin(false);
    }
  };

  const deleteCoupon = async (id) => {
    try {
      await axios.delete(`${host}/api/v1/coupon/${id}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  const addCoupon = async (data) => {
    try {
      setLoadingAdmin(true);
      await axios.post(`${host}/api/v1/coupon`, data);
      setLoadingAdmin(false);
    } catch (err) {
      console.error(err.message);
      setLoadingAdmin(false);
    }
  };
  return (
    <CouponContext.Provider
      value={{
        discount,
        validateCoupon,
        loading,
        getAllCoupon,
        coupon,
        loadingAdmin,
        updateCoupon,
        deleteCoupon,
        addCoupon,
      }}
    >
      {props.children}
    </CouponContext.Provider>
  );
};

export default CouponState;
