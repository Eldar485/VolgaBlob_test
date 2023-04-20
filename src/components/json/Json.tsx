import React, {FC} from 'react';
import classes from "./Json.module.scss";
import {IComment} from "../../types/types";

interface JsonProps {
    comments: IComment[];
}

const Json: FC<JsonProps> = ({comments}) => {
    return (
        <div className={classes.json}>
            <pre>
                <code>
                    {JSON.stringify(comments, null, 4)}
                </code>
            </pre>
        </div>
    );
};

export default Json;