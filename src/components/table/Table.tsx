import React, {FC} from 'react';
import classes from './Table.module.scss'
import { useNavigate } from "react-router-dom";
import {IComment} from "../../types/types";

interface TableProps {
    comments: IComment[]
}

const Table: FC<TableProps> = ({comments}) => {
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
                    <td>link</td>
                </tr>
                </thead>
                <tbody>
                { comments.map(comment =>
                    <tr key={comment.id}>
                        <td>{ comment.id }</td>
                        <td>{ comment.name }</td>
                        <td>{ comment.body }</td>
                        <td>{ comment.email }</td>
                        <td className={classes.table__link} onClick={() => navigate(`/comment/${comment.id}`)}>/comment/{ comment.id }</td>
                    </tr>
                ) }
                </tbody>
            </table>
        </div>
    );
};

export default Table;