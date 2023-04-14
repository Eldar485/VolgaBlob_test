import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import classes from './Comment.module.scss'
import CommentsService from "../../API/CommentsService";

const Comment = () => {
    const {id} = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        fetchComment();
    }, [])

    async function fetchComment() {
        const response = await CommentsService.getComment(id);
        setComment(response);
    }

    return (
        <div className={classes.comment}>
            <div className={classes.comment__name}>
                <div>{comment.id}. {comment.name}</div>
            </div>
            <div className={classes.comment__body}>{comment.body}</div>
            <div className={classes.comment__email}>
                <span>Email:</span>
                {comment.email}
            </div>
        </div>
    );
};

export default Comment;