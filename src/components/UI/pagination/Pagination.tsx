import React, {FC} from 'react';
import classes from './Pagination.module.scss'

interface PaginationProps {
    pagesArray: number[],
    selectPage: (page: number) => void,
    page: number
}

const Pagination: FC<PaginationProps> = ({pagesArray, selectPage, page}) => {
    return (
        <div className={classes.pages}>
            {pagesArray.map((p: number) =>
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