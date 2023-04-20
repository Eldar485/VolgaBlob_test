import {useState} from "react";

export const UseFetching = (callback) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetching = async (...args) => {
        try {
            setLoading(true)
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false)
        }
    }

    return [fetching, isLoading, error]
}