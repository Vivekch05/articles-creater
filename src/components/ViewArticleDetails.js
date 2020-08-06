import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeArticle } from '../actions/ArticleActions';
import CreateArticle from './CreateArticle';
class ViewArticleDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }

    }
    handleEdit = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }

    handleRemove = (e) => {
        this.props.removeArticle(this.props.contactListItem1, e);
    }
    render() {
        const contactView = this.props.contactViewItem
        return (
            contactView.length !== 0 ?
                <div>
                    {
                        contactView.map((item) => {
                            return (
                                <>
                                    <div>
                                        <h1 style={{textAlign:"center"}}>{item.fullName}</h1>
                                        <h3>Article:</h3>
                                        <div style={{ display: "flex", flexWrap: "nowrap" }}>
                                            <p align="justify">{item.article}</p>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <Button style={{ marginRight: "5px" }} size="sm" variant="success" id={item.id} onClick={this.handleEdit}  >
                                                <FontAwesomeIcon icon={faEdit} />&nbsp;Edit </Button>
                                            <Button size="sm" variant="danger" id={item.id} onClick={this.handleRemove}>
                                                <FontAwesomeIcon icon={faTrash} />&nbsp;Delete</Button>
                                        </div>

                                    </div>
                                    <Modal show={this.state.show} onHide={this.handleClose}

                                        aria-labelledby="contained-modal-title-vcenter"
                                        dialogClassName="modal-90w"
                                        centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Article Details</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <CreateArticle fullName={item.fullName} email={item.email} phoneNo={item.phoneNo}
                                                company={item.company} article={item.article} id={item.id} />
                                        </Modal.Body>
                                    </Modal>
                                </>
                            )
                        })
                    }
                </div > : ""
        )
    }
}
const mapStateToProps = (state) => ({
    contactViewItem: state.articletItem.viewArticle,
    contactListItem1: state.articletItem.articleList

});
export default connect(mapStateToProps, { removeArticle })(ViewArticleDetails);