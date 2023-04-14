import axios from "axios";

export default class CommentsService {
    static async getAll(limit = 10, page = 1, search = '') {
        const response = await axios.get('http://localhost:7000/api/comments', {
            params: {
                _limit: limit,
                _page: page,
                _search: search
            }
        });
        return response.data;
    }

    static async getComment(id) {
        const response = await axios.get(`http://localhost:7000/api/comments/${id}`);
        return response.data;
    }
}