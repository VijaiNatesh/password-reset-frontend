import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import styles from "../../src/myStyles.module.css"

function Navigation() {
    return (
        <div>
           <Navbar className = {styles.navibg}>
               <Container>
                   <Nav className = {styles.navi}>
                       <Nav.Link href = "/user">Register</Nav.Link>
                       <Nav.Link href = "/token">Forgot Password</Nav.Link>
                       </Nav>
                   </Container>
               </Navbar>
        </div>
    )
}

export default Navigation
