import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getContact, viewArticle } from '../actions/ArticleActions';
import { ListGroup, Modal } from 'react-bootstrap';
import ViewArticleDetails from './ViewArticleDetails';
class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        this.props.getContact();

    }
    handleClose = () => {
        this.setState({ show: false })
    }
    handleClick = (event) => {
        this.props.viewArticle(this.props.contactDataList, event);
        console.log(event.target.id);
        this.setState({ show: true })
    }
    render() {
        console.log(this.props.contactDataList)
        return (
            this.props.contactDataList.length !== 0 ?

                <div>
                    {
                        this.props.contactDataList.map((item) => {
                            return (
                                <div >
                                    <ListGroup.Item action variant="light" class="list-item" id={item.id} onClick={this.handleClick} >
                                        {/* <input type="checkbox" style={{ height: "20px", width: "20px" }} /> */}
                                        <span style={{ marginLeft: "5px" }}>
                                            <img src="https://mk0analyticsindf35n9.kinstacdn.com/wp-content/uploads/2018/12/image.jpg"
                                                alt="image1"
                                                style={{ borderRadius: "100%", height: "30px", width: "30px" }}
                                            />&nbsp;
                                        {item.fullName}</span><span style={{ float: "right" }}>{item.company}</span>
                                    </ListGroup.Item>
                                </div>
                            )
                        })
                    }
                    <Modal show={this.state.show} onHide={this.handleClose}
                        // dialogClassName="100%"
                        size="lg"
                        aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Article Details
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ViewArticleDetails />
                        </Modal.Body>
                    </Modal>

                </div> : <div className="text-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => ({
    contactDataList: state.articletItem.articleList,
    viewContactData: state.articletItem.viewContact

});

export default connect(mapStateToProps, { getContact, viewArticle })(ArticleList);
