import axios from "axios";
import {IComment, IResponse} from "../types/types";

export default class CommentsService {
    static async getAll(limit: number = 10, page: number = 1, search: string = '') {
        const response = await axios.get('http://localhost:7000/api/comments', {
            params: {
                _limit: limit,
                _page: page,
                _search: search
            }
        });
        let result: IResponse = response.data;
        return result;
    }

    static async getComment(id: number) {
        const response = await axios.get<IComment>(`http://localhost:7000/api/comments/${id}`);
        return response.data;
    }
}