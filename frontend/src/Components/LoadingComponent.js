import React from "react";

function LoadingComponent() {
  return (
    <div>
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingComponent;
