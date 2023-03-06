import React from "react";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <figure>
            <img
              src="./hero-section-img.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
              width="700"
              height="500"
            />
          </figure>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Welcome to JKode store</h1>
          <p class="lead">
            Donec pulvinar elit in nisi pretium, ac facilisis velit vulputate.
            Ut aliquam, diam id vestibulum scelerisque, nisi magna convallis
            leo, id ullamcorper metus massa sed orci. Quisque placerat sapien a
            diam aliquam tristique. Sed magna ex, pulvinar ut massa sit amet,
            vulputate pulvinar nunc. Fusce bibendum nulla mauris, sit amet
            porttitor dui laoreet consectetur.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <NavLink to="/products">
              <button type="button" class="btn btn-primary">
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
