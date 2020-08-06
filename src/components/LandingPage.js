import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import CreateArticle from './CreateArticle';
import ArticleList from './ArticleList';
export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }
        this.state = {
            show: false,
            loggedIn
            // close: true

        }
    }
    handleShow = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <Container>
                <div style={{ textAlign: "center", margin: "20px" }}>
                    <Button onClick={this.handleShow} size="sm" variant="success" >
                        <span style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faPlusSquare} />
                            &nbsp;<span >Create Article</span></span>
                    </Button>
                    <span style={{ float: "right"}}><Link to="/logOut"><Button size="sm" variant="danger" style={{fontSize:"15px"}} >Logout</Button></Link></span>
                </div>
                <Row>
                    <Col md={12}>
                        <div style={{ backgroundColor: "lightgrey", alignItems: "center", height: "40px", padding: "5px 10px 5px 20px" }}>
                            <FontAwesomeIcon icon={faPlusSquare} /><span style={{ marginLeft: "25px" }}>Basic Info of Article</span><span style={{ float: "right", marginRight: "20px" }}>Company</span>
                        </div>
                        <ArticleList />
                    </Col>
                </Row>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><CreateArticle /></Modal.Body>
                </Modal>
            </Container>
        )
    }
}
