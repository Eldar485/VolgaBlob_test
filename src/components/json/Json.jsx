import React from 'react';
import classes from "./Json.module.scss";

const Json = ({comments}) => {
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