const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  coupon_id: {
    type: String,
    require: [true, "Coupon Id is required"],
    unique: [true, "Coupon id is declared before"],
  },
  expiration: {
    type: Date,
    require: [true, "Expiration Date is Required"],
  },
  discount: {
    type: Number,
    require: [true, "The discount is requried"],
    max: [100, "The discount should be between 1 to 100"],
    min: [1, "The discount should be greater than 1"],
  },
});

const coupon = mongoose.model("Coupon", couponSchema);
module.exports = coupon;
