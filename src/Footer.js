import React from "react";
import Github from "./github.png";
import Linkedin from "./linkedin.png";
import Web from "./web.png";
import "./Navbar.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="copyright">
          <div className="copy-data">
            <p>Copyright &copy; Movie HD, Inc.</p>
          </div>
          <div className="myself">
            <p>Follow the developer!</p>
            <div className="social">
              <a className="social-img" href="https://github.com/shubho0908" target="_blank">
                <img title="Github Account" style={{ width: "35px", marginRight:"15px" }} src={Github} alt="" />
              </a>
              <a className="social-img" href="https://www.linkedin.com/in/shubho09/" target="_blank">
                <img title="LinkedIn Account" style={{ width: "40px", marginRight:"7.5px", marginLeft:"7.5px" }} src={Linkedin} alt=""  />
              </a>
              <a className="social-img" href="https://shubhojeetbera.tech/" target="_blank">
                <img title="Website" style={{ width: "35px" ,marginLeft:"7.5px" }} src={Web} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
