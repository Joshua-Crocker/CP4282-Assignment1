import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar() {
    const [loginState, setloginState] = useState("Login")
    return (
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
            <h1 style={{ color: "white" }}>Assignment 1</h1>
            <Button onClick={ () => {
            loginState === "Login" ? setloginState("Logout") : setloginState("Login");
            }} variant="outline-light">{loginState}</Button>
        </Container>
      </Navbar>
    )
}

export default NavBar;