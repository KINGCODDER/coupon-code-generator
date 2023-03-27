// import React, { useContext } from "react";
// import Lottie from "react-lottie";
// import CouponContext from "../Context/CouponContext";
// import ErrorAnimation from "../Resources/error.json";
// import SuccessAnimation from "../Resources/success.json";

// function PopupStatus({ success, error }) {
//   const defaultOptions1 = {
//     loop: false,
//     autoplay: true,
//     animationData: ErrorAnimation,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   const defaultOptions2 = {
//     loop: false,
//     autoplay: true,
//     animationData: SuccessAnimation,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   console.log(success);

//   success === true ? (
//     <div>
//       <div className="loading-full-screen show" id="loading">
//         <Lottie options={defaultOptions2} width={400} />
//       </div>
//     </div>
//   ) : (
//     <></>
//   );

//   // success || error ? (
//   //   <div>
//   //     <div className="loading-full-screen show" id="loading">
//   //       {error === true ? <Lottie options={defaultOptions1} width={400} /> : ""}
//   //       {success === true ? (
//   //         <Lottie options={defaultOptions2} width={400} />
//   //       ) : (
//   //         ""
//   //       )}
//   //     </div>
//   //   </div>
//   // ) : (
//   //   <div></div>
//   // );
// }

// export default PopupStatus;
