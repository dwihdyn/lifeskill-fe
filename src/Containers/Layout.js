import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Applybutton from './Applybutton';
import ClubChart from './ClubChart';
import ClubImage from './ClubImage';


const Layout = () => {
  // make axios call to get data

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="8"><ClubChart /></MDBCol>
        <MDBCol size="4"><ClubImage number="5" /></MDBCol>
        {/* <MDBCol size="1"><Applybutton /></MDBCol> */}

      </MDBRow>
    </MDBContainer>
  );
}

export default Layout;




