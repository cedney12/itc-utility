import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

/**
 * Custom Hook that uses React-Query to fetch and cache data, using
 * the URL as the query key.
 *
 * @param {string} endpoint
 * @param {object} [options]
 * @param {number} [options.staleTime] Time by which the data goes stale and must be recalled, in ms
 * @param {number} [options.retry] If `true`, retries infinitely. If `false`, never retries. If a number, retries that many times
 * @param {number} [options.fetchTimeout] Time to pause for fetching (and refetching). This is mostly used
 * to stop flashing loading screens. Default `0`
 * @param {"array" | "object"} [options.dataShape] Whether the data should be an array or an object
 * 
 * @returns The result from useQuery and a function to update the URL.
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

    const shapeNormalizer = (data) => {
        switch (options.dataShape) {
            case "array":
                return Array.isArray(data) ? data : []
            case "object":
                return typeof data === "object" && !Array.isArray(data) ? data : {}
            default:
                return data
        }
    }

    const queryKey = ["data", trimUrlForKey(url)]

    const queryFn = async () => {
        const { data } = await axios.get(url, { timeout: options.fetchTimeout ?? 0 })
        return data
    }

    return {
        ...useQuery({
            queryKey,
            queryFn,
            staleTime: options.staleTime ?? 60000,
            enabled: !!url, // disables call if URL is falsy
            retry: options.retry ?? 1,
            select: shapeNormalizer
        }),
        setUrl,
        url
    }
}