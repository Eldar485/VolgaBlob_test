import React from 'react';
import classes from './Table.module.scss'
import { useNavigate } from "react-router-dom";

const Table = ({comments}) => {
    const navigate = useNavigate()

    return (
        <div>
            <table className={classes.table}>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Comment</td>
                    <td>email</td>
                </tr>
                </thead>
                <tbody>
                { comments.map(comment =>
                    <tr onClick={() => navigate(`/comment/${comment.id}`)} key={comment.id}>
                        <td>{ comment.id }</td>
                        <td>{ comment.name }</td>
                        <td>{ comment.body }</td>
                        <td>{ comment.email }</td>
                    </tr>
                ) }
                </tbody>
            </table>
        </div>
    );
};

export default Table;