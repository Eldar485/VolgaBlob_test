export interface IComment {
    id?: number,
    name?: string,
    body?: string,
    email?: string,
    postId?: number
}

export interface IResponse {
    results: IComment[],
    totalCount: number
}