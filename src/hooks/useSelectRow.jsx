/* eslint-disable react-hooks/exhaustive-deps */
import { isEmpty, find } from 'lodash'
import { useEffect, useState } from 'react'

/**
 * Custom hook that handles commonly used functions for selected rows with an AG DataGrid.
 * 
 * Specifically, this will handle selecting and unselecting rows, as well as updating
 * a row if it gets changed in the overall data. 
 * 
 * @param {Array.<*>} data 
 * @param {object} options
 * @param {string} options.field
 * @param {boolean} options.debug 
 * @module useSelectRow
 * @category Hooks
 */
export const useSelectRow = (data, options = {}) => {
    let { field, debug } = options
    if (!field) field = "id"
    const [selectedRow, setSelectedRow] = useState({})

    /**
     * Handles Row Selection based on RowSelectedEvent
     * 
     * There are a few cases in which a row can be selected:
     * 
     * 1. If there is no row selected, set selectedRow to be the data
     * 2. If there is a row selected and the user selects a different row
     *     - Two `RowSelectedEvent`s will trigger. The first is selecting the new row,
     *         the second is deselecting the old row. 
     *     - Set the data to be the stored selection event's data
     * 
     * @param {object} params 
     */
    const handleSelectRow = (params) => {
        const { api } = params
        const selectedRows = api.getSelectedRows()
        setSelectedRow(selectedRows.length > 0 ? selectedRows[0] : {})
    }

    useEffect(() => {
        if (debug) console.log(selectedRow)
    }, [selectedRow])

    useEffect(() => {
        if (!isEmpty(selectedRow) && !isEmpty(data)) {
            setSelectedRow(find(data, item => item[field] === selectedRow[field]) ?? {})
        }
    }, [data])

    return {
        selectedRow,
        setSelectedRow,
        handleSelectRow
    }
}