import { UseQueryResult } from "@tanstack/react-query"

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
 * 
 * @returns The result from useQuery and a function to update the URL.
 */
export function useQueryData<T = unknown>(
    endpoint: string,
    options?: {
        staleTime?: number,
        retry?: boolean | number,
        fetchTimeout?: number
    }
): UseQueryResult<T> & { setUrl: (url: string) => void }