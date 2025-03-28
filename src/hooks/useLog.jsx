import { useEffect } from "react"

/**
 * Custom hook that will log a value on change
 * 
 * @param {any} value Value to display on change
 * @param {string} [label] Label for the value
 */
export const useLog = (value, label = "Value") => {
    useEffect(() => {
        console.log(`${label}:`, value)
    }, [value])
}