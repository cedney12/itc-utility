import { UseQueryResult } from "@tanstack/react-query"

/**
 * Custom Hook that uses React-Query to fetch and cache data, using
 * the URL as the query key.
 *
 * @param endpoint The API endpoint to fetch data from.
 * @param options Optional configuration for stale time and retry behavior.
 * @returns The result from useQuery and a function to update the URL.
 */
export function useQueryData<T = unknown>(
    endpoint: string,
    options?: {
        staleTime?: number,
        retry?: boolean | number
    }
): UseQueryResult<T> & { setUrl: (url: string) => void }