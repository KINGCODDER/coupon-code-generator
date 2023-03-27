import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Resources/lamborghini.png";
import "../Style/Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav-bar d-flex align-items-center justify-content-center">
        <a href="/dashboard" className="text-1 text-styling">
          <i class="bi bi-caret-left-fill"></i>
        </a>
        <h1 className="text-center m-5 text-1">Your Car Dealers 🚗</h1>
        <a href="/cart" className="text-1 text-styling">
          <i class="bi bi-caret-right-fill"></i>
        </a>
      </div>

      <div className="image-container text-center">
        <img src={Product} alt="product" />
      </div>

      <div className="product-container container text-center ">
        <div className="product-details d-flex justify-content-between m-5">
          <span className="product-name text-styling">
            Lamborghini Aventador
          </span>
          <span className="product-price text-styling">Rs. 4,00,00,000</span>
        </div>

        <div className="product-description text-start m-5">
          <h3 className="text-start">Description</h3>
          <p>
            With a raucous 769-hp V-12 engine and an exotic exterior, the 2022
            Lamborghini Aventador is the definition of a hyper car. While
            competitors such as the Ferrari SF90 embrace an electrified future,
            the Lambo's 12-cylinder mill swills fuel like a frat bro chugs a
            beer. Its scissor doors, wide and low proportions, and heavily
            vented bodywork double as a theater on wheels that's perpetually
            playing the Fast and Furious movies. Inside, its highly customizable
            cabin has room for two riders, but there's very little space to
            store loose items. Behind the wheel, the driver can activate the
            Aventador's shrieking soundtrack with a stab of their right foot or
            experience the massive machine's surprising agility by twirling the
            tiller. While its obsolete automatic transmission is almost as
            frustrating as the roadster's cumbersome roof removal, those are but
            a small penance for the 2022 Aventador's otherwise awesome powers
            and unmistakable style.
          </p>
        </div>

        <div className="btn-container m-4">
          <button
            className="btn-custom w-100"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
