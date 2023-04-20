import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import classes from './Comment.module.scss'
import CommentsService from "../../API/CommentsService.tsx";
import {UseFetching} from "../../hooks/useFetching.tsx";
import Loader from "../../components/UI/loader/Loader.tsx";
import {IComment} from "../../types/types";

interface CommentPage {
    id: number
}

const Comment = () => {
    const {id} = useParams<CommentPage>();
    const [comment, setComment] = useState<IComment>({});

    const [fetchComment, loading] = UseFetching(async () => {
        const response = await CommentsService.getComment(id);
        setComment(response)
    })

    useEffect(() => {
        fetchComment();
    }, [])

    return (
        <section>
            {loading
                ? <div className={classes.loader}>
                    <Loader/>
                  </div>
                : <div className={classes.comment}>
                    <div className={classes.comment__name}>
                        <div>{comment.id}. {comment.name}</div>
                    </div>
                    <div className={classes.comment__body}>{comment.body}</div>
                    <div className={classes.comment__email}>
                        <span>Email:</span>
                        {comment.email}
                    </div>
                  </div>
            }
        </section>
    );
};

export default Comment;