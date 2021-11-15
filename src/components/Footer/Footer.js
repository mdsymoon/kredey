import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <main className="container-fluid mt-4 mb-2">
      <div className="row">
        <div className="col-md-8 mb-3">
          <div className="row">
            <div className="col-6 col-sm-4 mb-3">
              <p className="mb-0 text-primary">About Us</p>
              <p className="mb-0 text-primary">Contact</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <p className="mb-0 text-primary">Terms Of Service</p>
              <p className="mb-0 text-primary">Privacy Policy</p>
            </div>
            <div className=" col-sm-4 ">
              <p className="mb-0 text-primary">FAQ's</p>
              <p className="mb-0 text-primary">Attribution</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <FacebookIcon sx={{fontSize: 40}}/>
          <InstagramIcon sx={{fontSize: 40}}/>
          <LinkedInIcon sx={{fontSize: 40}}/>
          <TwitterIcon sx={{fontSize: 40}}/>
          <PinterestIcon sx={{fontSize: 40}}/>
        </div>
      </div>
      <p className="text-center mb-0 ">Copyright ©2021 Kredey</p>
    </main>
  );
};

export default Footer;
