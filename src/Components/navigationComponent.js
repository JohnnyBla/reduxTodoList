import { React } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

const Navigation = () => {
  return (
    <div>
    <MDBNavbar dark bgColor="dark">
      <MDBContainer fluid className="justify-content-center">
        <MDBNavbarBrand href="#">
          Redux To Do List
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
};

export default Navigation;
