import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white d-flex flex-column mt-auto">
      <div className="text-center p-3">
        <a
          className="text-uppercase btn btn-outline-light btn-floating m-1"
          role="button"
          href="https://github.com/JohnnyBla"
        >
          <MDBIcon fab icon="github" /> &ensp;
        </a>
        <a
          className="text-uppercase btn btn-outline-light btn-floating m-1"
          role="button"
          href="https://www.linkedin.com/in/johnny-blakley-18499015a/"
        >
          <MDBIcon fab icon="linkedin-in" />
        </a>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} CopyRight:&ensp;
        <a className="text-white" href="https://github.com/JohnnyBla">
          Github.com/JohnnyBla
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
