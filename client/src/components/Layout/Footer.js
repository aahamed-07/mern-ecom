import React from "react";
import { Link, link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Rights Reserved &copy; aahamed-07</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/privacy policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
