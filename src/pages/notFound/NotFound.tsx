import React from 'react';
import classes from './NotFound.module.scss'

const NotFound = () => {
    return (
        <div className={classes.warning}>
            <p>Страница не найдена</p>
        </div>
    );
};

export default NotFound;