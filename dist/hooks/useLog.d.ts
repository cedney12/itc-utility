declare module "itc-utility/dist/hooks/useLog" {
    /**
     * Custom hook that logs a value to the console whenever it changes.
     * 
     * @param value - The value to log on change.
     * @param label - An optional label for the value (default: "Value").
     */
    export function useLog(value: any, label?: string): void
}