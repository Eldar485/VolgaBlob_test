import {COMMENT_ROUTE, COMMENTS_ROUTE} from "./utils/consts.tsx";
import allComments from "./pages/allComments/AllComments.tsx";
import comment from "./pages/comment/Comment.tsx";

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