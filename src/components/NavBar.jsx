import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const [loginState, setloginState] = useState("Login", "Logout")
    return (
      <Navbar>
        <h1>Assignment 1</h1>
        <Button onClick={ (evt) => {
          loginState === "Login" ? setloginState("Logout") : setloginState("Login");
        }} variant="dark">{loginState}</Button>{' '}
      </Navbar>
    )
}

export default NavBar;