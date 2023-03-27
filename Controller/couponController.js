const Coupon = require("../Models/couponModel");

exports.getAllCoupon = async (req, res) => {
  const result = await Coupon.find({});

  res.json({
    status: "success",
    results: result.length,
    data: {
      result,
    },
  });
};

exports.postCoupon = async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);

    res.status(200).json({
      status: "Success",
      data: {
        coupon: newCoupon,
      },
    });
  } catch (err) {
    res.status(403).json({
      status: "Fail",
      message: err.message,
    });
    console.log(err.message);
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    const newCoupon = await Coupon.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.updateCoupon = async (req, res, next) => {
  try {
    const newCoupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!newCoupon) {
      throw new Error("Not Valid Id");
    }

    res.status(200).json({
      status: "Success",
      data: { coupon: newCoupon },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.validateCoupon = async (req, res) => {
  try {
    const newCoupon = await Coupon.findOne({ coupon_id: req.params.id });

    if (newCoupon && newCoupon.expiration > new Date()) {
      res.status(200).json({
        status: "Success",
        data: {
          coupon: newCoupon,
        },
      });
    } else {
      res.status(404).json({
        status: "Fail",
        message: "Not Valid Or Expired",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message,
    });
  }
};
