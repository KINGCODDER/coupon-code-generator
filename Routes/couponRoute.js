const express = require("express");
const couponController = require("../Controller/couponController");

const router = express.Router();

router
  .route("/")
  .get(couponController.getAllCoupon)
  .post(couponController.postCoupon);

router
  .route("/:id")
  .delete(couponController.deleteCoupon)
  .patch(couponController.updateCoupon);
  
router.route("/validate/:id").get(couponController.validateCoupon);
module.exports = router;
