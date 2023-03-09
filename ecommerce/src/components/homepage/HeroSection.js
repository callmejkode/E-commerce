import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/ProductContext";

function HeroSection() {
  const Myname = useContext(AppContext);
  // console.log("kkk", Myname);
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <figure>
            <img
              src="./hero-section-img.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
              width="700"
              height="500"
            />
          </figure>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Welcome to {Myname} store
          </h1>
          <p className="lead">
            Donec pulvinar elit in nisi pretium, ac facilisis velit vulputate.
            Ut aliquam, diam id vestibulum scelerisque, nisi magna convallis
            leo, id ullamcorper metus massa sed orci. Quisque placerat sapien a
            diam aliquam tristique. Sed magna ex, pulvinar ut massa sit amet,
            vulputate pulvinar nunc. Fusce bibendum nulla mauris, sit amet
            porttitor dui laoreet consectetur.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <NavLink to="/products">
              <button type="button" className="btn btn-primary">
                Shop now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
