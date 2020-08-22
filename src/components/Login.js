import React, { Component } from 'react'
import { Form, Button, Col, Card } from 'react-bootstrap';
import { faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';
export default class Login extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }
        this.state = {
            userName: "",
            password: "",
            loggedIn

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.userName === "Vivek" && this.state.password === "12345") {
            localStorage.setItem("token", "kjsdfgksdf")
            this.setState({ loggedIn: true })
        }
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/landingPage" />
        }
        const { userName, password } = this.state;
        return (
            <div className="container jumbotron">
                <Card>
                    <Card.Header style={{ background: "linear-gradient(to right, #ff0000 50%, #ff3399 91%)", color: "white" }}><FontAwesomeIcon icon={faPlusSquare} />&nbsp;Login Page</Card.Header>
                    <Form onReset={this.resetBook} onSubmit={this.handleSubmit}>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="userName"
                                        value={userName}
                                        onChange={this.handleChange}
                                        placeholder="Enter Your User Name"
                                        className="bg-white text-black"
                                    />
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="password" name="password"
                                        value={password}
                                        onChange={this.handleChange}
<<<<<<< HEAD
                                        placeholder="Enter Your password"
=======
                                        placeholder="Enter Your Password"
>>>>>>> ba8dee543700449c089d5b1c3b13ea6ace928717
                                        className="bg-white text-black"
                                    />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer>
                            <Button style={{ marginRight: "5px" }} size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave} />
                            &nbsp;Login
                        </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        )
    }
}
