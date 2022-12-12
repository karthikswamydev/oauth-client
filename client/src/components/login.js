import React from "react";

import style from "../App.css";
import Facebook, { FacebookIcon } from "@mui/icons-material/Facebook";
// import Instagram from  "@mui/icons-material/Instagram"
// // import { Google } from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "bootstrap/dist/css/bootstrap.min.css";
import Google from "@mui/icons-material/Google";
import Twitter from "@mui/icons-material/Twitter";
// import Button from "@mui/material/Button/Button";
// import { fontSize } from "@mui/system";
import { TextField, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Login = () => {
  const googleHandler = () => {
    window.open("http://localhost:5000/auth/google");
  };
  const facebookHandler = () => {
    window.open("http://localhost:5000/auth/facebook");
  };
  const GithubHandler = () => {
    window.open("http://localhost:5000/auth/github");
  };
  return (
    <div className="login-wrapper">
      <div className="card p-0">
        <div className="card-title text-center"></div>
        <form className="signup">
          <div className="header-style">
            <h2>LOGIN FORM </h2>
          </div>
          <div className="input-style">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{
                width: "100%",
                margin: "50 px",
                color: "success.main",
                "& .MuiSlider-thumb": {
                  borderRadius: "1px",
                },
              }}
            />
          </div>
          <div className="input-style">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{
                width: "100%",
                color: "success.main",
                "& .MuiSlider-thumb": {
                  borderRadius: "1px",
                },
              }}
            />
          </div>
          <div className="btn-style">
            <button type="button" className="login-button">
              Login
            </button>
          </div>
          <span className="text-center">Or</span>
          <span className="text-center pt-3">Login Using</span>
          <div className="social-align">
            <div className="btn-style">
              <button
                type="button"
                className="login-btn fb"
                onClick={googleHandler}
              >
                <div>
                  <Google />
                </div>
                Google
              </button>
            </div>
            <div className="btn-style">
              <button
                type="button"
                className="login-btn login-btn-fb"
                onClick={facebookHandler}
              >
                <div>
                  <Facebook />
                </div>
                Facebook
              </button>
            </div>
            <div className="btn-style">
              <button type="button" className="login-btn login-btn-insta">
                <div>
                  <InstagramIcon />
                </div>
                Instagram
              </button>
            </div>
            <div className="btn-style">
              <button type="button" className="login-btn  login-btn-twitter">
                <div>
                  <TwitterIcon />
                </div>
                Twitter
              </button>
            </div>
            <div className="btn-style">
              <button type="button" className="login-btn git" onClick={GithubHandler}>
                <div>
                  <GitHubIcon />
                </div>
                Github
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
