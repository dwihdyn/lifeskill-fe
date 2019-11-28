import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const PointsNavBar = props => {
  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="#" onClick={e => this.props.toggleView(e)}>Weekly</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" onClick={e => this.props.toggleView(e)}>Yearly</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default PointsNavBar;

{/* <Button name="bar" onClick={e => this.props.toggleView(e)}>
Bar
</Button>
<Button name="line" onClick={e => this.props.toggleView(e)}>
Line
</Button> */}
