import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
export default class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div className="container jumbotron">
                <div style={{ float: "right" }}><Link to="/"><Button size="sm" variant="success" style={{ fontSize: "15px" }} >LogIn</Button></Link></div>
                <h1 style={{color:"blue",textAlign:"center"}}>You have succesfully logOut !!!!</h1>
            </div>
        )
    }
}
