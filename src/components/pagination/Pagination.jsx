import React from 'react';
import classes from './Pagination.module.scss'

const Pagination = ({pagesArray, selectPage, page}) => {
    return (
        <div className={classes.pages}>
            {pagesArray.map(p =>
                <div
                    key={p}
                    className={page === p ? classes.pages__current : classes.pages__page}
                    onClick={() => selectPage(p)}>
                    {p}
                </div>
            )}
        </div>
    );
};

export default Pagination;