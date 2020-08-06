import { SUBMIT_ARTICLE, GET_ARTICLE, VIEW_ARTICLE, REMOVE_ARTICLE } from './Types';

export const getContact = () => (dispatch) => {
    const axios = require('axios');
    axios.get("http://localhost:3000/contacts")
        .then((response) => {
            console.log(response.data);
            dispatch({ type: GET_ARTICLE, payload: response.data });
        })
};
export const submitArticle = (state) => (dispatch) => {
    const axios = require('axios');
    const contact = {
        id: state.id,
        fullName: state.fullName,
        email: state.email,
        phoneNo: state.phoneNo,
        company: state.company,
        article: state.article
    };
    console.log(contact);
    axios.post("http://localhost:3000/contacts", contact)
        .then((response) => {
            console.log(response);
            dispatch({ type: SUBMIT_ARTICLE, payload: response.data });
        }, (error) => {
            console.log(error);
        });
}

export const viewArticle = (contactList, e) => (dispatch) => {
    const currentId = e.target.id;
    const currentContact = contactList.filter((item) => item.id === currentId);
    dispatch({ type: VIEW_ARTICLE, payload: currentContact });
}

export const removeArticle = (contactList, e) => (dispatch) => {
    const axios = require('axios');
    console.log(contactList);
    let id = e.target.id;
    console.log(id);
    const contactItems = contactList.filter((a) => a.id !== id);
    axios.delete(`http://localhost:3000/contacts/${e.target.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            dispatch({ type: REMOVE_ARTICLE, payload: contactItems });

        })
}

export const editArticle = (state, id) => (dispatch) => {
    const axios = require('axios');
    console.log(id);
    const editArticle = {
        id: state.id,
        fullName: state.fullName,
        email: state.email,
        phoneNo: state.phoneNo,
        company: state.company,
        article: state.article
    };
    console.log(editArticle);
    axios.put(`http://localhost:3000/contacts/${id}`, editArticle)
        .then((response) => {
            console.log(response.data);
            axios.get("http://localhost:3000/contacts")
                .then((response) => {
                    dispatch({ type: GET_ARTICLE, payload: response.data });
                })
            // dispatch({ type: EDIT_CONTACT, payload: response.data })
        })
}