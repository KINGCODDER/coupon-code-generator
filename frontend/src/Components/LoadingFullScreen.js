import React from "react";
import "../Style/LodingFullScreen.css";
import Lottie from "react-lottie";
import animationData from "../Resources/loading.json";

function LoadingFullScreen() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading-full-screen show" id="loading">
      <Lottie options={defaultOptions} width={400} />
    </div>
  );
}

export default LoadingFullScreen;
