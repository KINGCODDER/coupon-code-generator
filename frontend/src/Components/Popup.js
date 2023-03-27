import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../Resources/animationPayment.json";

function Popup(prop) {
  useEffect(() => {}, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <i class="bi bi-check2-circle"></i> Order Successful
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
