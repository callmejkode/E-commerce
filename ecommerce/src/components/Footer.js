import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid mt-5 p-0">
        <div
          className="text-center text-white"
          style={{ background: "rgb(244, 150, 50) " }}
        >
          <div className="container p-4 pb-0">
            <div className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>

                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                      />
                      <label className="form-label">Email address</label>
                    </div>
                  </div>

                  <div className="col-auto">
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a className="text-white" href="https://jkode.in/">
              JKode
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
