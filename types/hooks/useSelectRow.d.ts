import { RowSelectedEvent } from "ag-grid-community"

/**
 * Custom hook that handles row selection for an AG DataGrid.
 * @param data The dataset where rows are selected from.
 * @param options Configuration options.
 * @param options.field The field to use for row identification (default: "id").
 * @param options.debug Whether to log debug information.
 * @returns An object containing the selected row, setter, and selection handler.
 */
declare module "itc-utility/dist/useSelectRow" {
    export function useSelectRow<T>(
        data: T[],
        options?: { field?: keyof T; debug?: boolean }
    ): {
        /**
         * The currently selected row.
         */
        selectedRow: Partial<T>

        /**
         * Function to manually set the selected row.
         */
        setSelectedRow: (row: Partial<T>) => void

        /**
         * Handles row selection based on an AG Grid RowSelectedEvent.
         * @param params The event parameters from AG Grid.
         */
        handleSelectRow: (params: RowSelectedEvent) => void
    }
}