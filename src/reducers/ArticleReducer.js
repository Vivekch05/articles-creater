import { SUBMIT_ARTICLE, GET_ARTICLE, VIEW_ARTICLE, REMOVE_ARTICLE, EDIT_CONTACT } from "../actions/Types";

const initState = {
    articleList: [],
    viewArticle: []
};
export default function (state = initState, action) {
    switch (action.type) {
        case GET_ARTICLE:
            return {
                ...state,
                articleList: action.payload,
            };
        case REMOVE_ARTICLE:
            return {
                ...state,
                articleList: action.payload,
                viewArticle: ""
            };
        case VIEW_ARTICLE:
            return {
                ...state,
                viewArticle: action.payload
            };
        case SUBMIT_ARTICLE:
            return {
                ...state,
                articleList: [...state.articleList, action.payload]
            };
        case EDIT_CONTACT:
            return {
                ...state,
                viewArticle: action.payload
            }


        default:
            return state;
    }
}