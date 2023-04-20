export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil<number>(totalCount / limit);
}

export const getPagesArray = (totalPages: number) => {
    let result: number[] = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
}