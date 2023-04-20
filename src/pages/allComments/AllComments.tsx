import React, {useEffect, useState} from 'react';
import classes from './AllComments.module.scss'
import Table from "../../components/table/Table.tsx";
import CommentsService from "../../API/CommentsService.tsx";
import {getPageCount, getPagesArray} from "../../utils/pages.tsx";
import Loader from "../../components/UI/loader/Loader.tsx";
import {UseFetching} from "../../hooks/useFetching.tsx";
import MyButton from "../../components/UI/button/MyButton.tsx";
import MyInput from "../../components/UI/input/MyInput.tsx";
import Json from "../../components/json/Json.tsx";
import {IComment, IResponse} from "../../types/types";
import {EuiPagination, EuiFlexGroup, EuiFlexItem} from "@elastic/eui";

const AllComments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [json, setJson] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [limit] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const a = 1;

    let pagesArray: number[] = getPagesArray(totalPages);

    const [fetchComments, loading] = UseFetching(async (page, search) => {
        const response: IResponse = await CommentsService.getAll(limit, page, search);
        setTotalCount(response.totalCount);
        setComments([...response.results]);
    })

    useEffect((): void => {
        fetchComments(1, '');
    }, []);

    useEffect((): void => {
        setTotalPages(getPageCount(totalCount, limit));
        getPagesArray(totalPages);
    }, [totalCount]);

    const searching = (searchValue: string): void => {
        setPage(1)
        setSearch(searchValue);
        fetchComments(1, searchValue);
    }

    const selectPage = (page: number): void => {
        console.log(page)
        setPage(page)
        fetchComments(page, search);
    }

    return (
        <section className={classes.comments}>
            <div className={classes.comments__btns}>
                <MyButton
                    onClick={(): void => setJson(true)}
                >JSON</MyButton>
                <MyButton
                    onClick={(): void => setJson(false)}
                >TABLE</MyButton>
            </div>
            {!json && <MyInput type='text' value={search}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => searching(event.target.value)}/>}
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
                                <EuiFlexGroup justifyContent="spaceAround">
                                    <EuiFlexItem grow={false}>
                                        <EuiPagination
                                            className={classes.comments__pagination}
                                            pageCount={totalPages}
                                            activePage={page - 1}
                                            onPageClick={(activePage) => selectPage(activePage + 1)}
                                        />
                                    </EuiFlexItem>
                                </EuiFlexGroup>
                                {/*<Pagination pagesArray={pagesArray} page={page} selectPage={selectPage}/>*/}
                            </div>
                    }
                </div>
            }
        </section>
    );
};

export default AllComments;