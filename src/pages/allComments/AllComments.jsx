import React, {useEffect, useState} from 'react';
import classes from './AllComments.module.scss'
import Table from "../../components/table/Table";
import CommentsService from "../../API/CommentsService";
import {getPageCount, getPagesArray} from "../../utils/pages";
import Loader from "../../components/loader/Loader";
import {UseFetching} from "../../hooks/useFetching";
import MyButton from "../../components/button/MyButton";
import MyInput from "../../components/input/MyInput";
import Json from "../../components/json/Json";
import Pagination from "../../components/pagination/Pagination";

const AllComments = () => {
    const [comments, setComments] = useState([]);
    const [json, setJson] = useState(false);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    let pagesArray = getPagesArray(totalPages);

    const [fetchComments, loading, postError] = UseFetching(async (page, search) => {
        const response = await CommentsService.getAll(limit, page, search);
        setTotalCount(response.totalCount);
        setComments([...response.results]);
    })

    useEffect(() => {
        fetchComments(1, '');
    }, []);

    useEffect(() => {
        setTotalPages(getPageCount(totalCount, limit));
        getPagesArray(totalPages);
    }, [totalCount]);

    const searching = (searchValue) => {
        setPage(1)
        setSearch(searchValue);
        const response = fetchComments(1, searchValue);
        return response.data;
    }

    const selectPage = (page) => {
        setPage(page)
        fetchComments(page, search);
    }

    return (
        <section className={classes.comments}>
            <div className={classes.comments__btns}>
                <MyButton onClick={() => setJson(true)}>JSON</MyButton>
                <MyButton onClick={() => setJson(false)}>TABLE</MyButton>
            </div>
            {!json && <MyInput type='text' value={search} onChange={event => searching(event.target.value)}/>}
            {loading
                ? <div className={classes.loader}>
                    <Loader/>
                </div>
                : <div className={classes.comments__results}>
                    {
                        json
                            ? <Json comments={comments}/>
                            : <div className={classes.content}>
                                <Table comments={comments} className={classes.comments__table}/>
                                <Pagination pagesArray={pagesArray} page={page} selectPage={selectPage}/>
                            </div>
                    }
                </div>
            }
        </section>
    );
};

export default AllComments;