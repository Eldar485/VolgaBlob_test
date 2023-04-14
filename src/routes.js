import allComments from "./pages/allComments/AllComments";
import comment from "./pages/comment/Comment";
import {COMMENT_ROUTE, COMMENTS_ROUTE} from "./utils/consts";

export const routes = [
    {
        path: COMMENTS_ROUTE,
        Component: allComments,
        exact: true
    },
    {
        path: COMMENT_ROUTE + '/:id',
        Component: comment,
        exact: true
    }
]