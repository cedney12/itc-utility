import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

/**
 * Custom Hook that uses React-Query to fetch and cache data, using
 * the URL as the query key.
 *
 * @param {string} endpoint
 * @param {object} [options]
 * @param {number} [options.staleTime] Time by which the data goes stale and must be recalled, in ms
 * @param {number} [options.retry] If `true`, retries infinitely. If `false`, never retries. If a number, retries that many times
 * @returns {object} { data, error, isLoading, refetch, setUrl }
 * 
 * @category Hooks
 * @module useQueryData
 */
export const useQueryData = (endpoint, options = {}) => {
    const [url, setUrl] = useState(endpoint)

    const trimUrlForKey = (url) => {
        if (!url) return ""
        const newUrl = new URL(url, import.meta.env.VITE_API_BASE_URL)
        return newUrl.pathname + newUrl.search
    }

    const queryKey = ["data", trimUrlForKey(url)]

    const queryFn = async () => {
        const { data } = await axios.get(url)
        return data
    }

    return {
        ...useQuery({
            queryKey,
            queryFn,
            staleTime: options.staleTime ?? 60000,
            enabled: !!url, // disables call if URL is falsy
            retry: options.retry ?? 1,
        }),
        setUrl,
    }
}