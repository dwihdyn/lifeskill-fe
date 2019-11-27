import React from 'react';
import Nav from 'react-bootstrap/Nav';


class Dashboard extends React.Component {
  render() {
    return (

        
        
      <div className='header'>
        <div className='header-logo'>
            
        <Nav
  activeKey="/home"
  onSelect={selectedKey => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link to="/home">Student</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="MyProfile">My Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="Leaderboards">Leaderboards</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="GivePoints">Give Points</Nav.Link>
  </Nav.Item>
</Nav>


        </div>
      </div>
    );
  }
}

export default Dashboard;
