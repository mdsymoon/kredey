import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <main>
      <div className="">
        <div className="d-flex justify-content-evenly">
          <div>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div>
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>FAQ's</p>
            <p>Attribution</p>
          </div>
        </div>
        <div className="text-center">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
        <p className="text-center">Copyright ©2021 Kredey</p>
      </div>
    </main>
  );
};

export default Footer;
