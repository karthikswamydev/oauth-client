import React from "react";

// import style from "../App.css";
import Facebook, { FacebookIcon } from "@mui/icons-material/Facebook";
// import { Google } from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import Google from "@mui/icons-material/Google";
import Twitter from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button/Button";
import { fontSize } from "@mui/system";

const Login = () => {
  const googleHandler = () => {
    window.open("http://localhost:5000/auth/google");
  };
  const facebookHandler = () => {
    window.open("http://localhost:5000/auth/facebook");
  };

  return (
    <div className="login-wrapper">
      <div className="card p-0">
        <div className="card-title text-center">
          <h2 className="mt-5">LOGIN</h2>{" "}
          {/* <small className="para">Login to your cool account below.</small> */}
        </div>
        <form className="signup">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>{" "}
          <button type="button" className="btn btn-primary">
            Login
          </button>
          <div className="row">
            <div className="col-6 col-sm-6">
              {/* <a href="#">
                <p className="text-left pt-2 ml-1">Forgot password?</p>
              </a> */}
            </div>
            <div className="col-6 col-sm-6">
              {/* <a href="#">
                {" "}
                <p className="text-right pt-2 mr-1">Sign Up Now</p>
              </a> */}
            </div>
          </div>{" "}
          <span className="text-center">Or</span>{" "}
          <span className="text-center pt-3">Login Using</span>
          <div>
            {/* <Google
              sx={{
                width: "50%",
                marginTop: "5%",
                fontSize: "50px",
                marginRight: "5%",
              }}
            /> */}
            <button type="button" className="button" onClick={googleHandler}>
              Login with Google
            </button>
            <button type="button" className="button" onClick={facebookHandler}>
              Login with Facebook
            </button>
            <button type="button" className="button">
              Login with Twitter
            </button>

            {/* <Facebook
              sx={{ width: "50%", marginTop: "5%", fontSize: "50px" }}
            />
            <Twitter sx={{ width: "50%", marginTop: "5%", fontSize: "50px" }} />
            <LinkedInIcon
              sx={{ width: "50%", marginTop: "5%", fontSize: "50px" }}
            /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
