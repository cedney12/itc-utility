function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* eslint-disable react-hooks/exhaustive-deps */
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';

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
export var useSelectRow = function useSelectRow(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var field = options.field,
    debug = options.debug;
  if (!field) field = "id";
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    selectedRow = _useState2[0],
    setSelectedRow = _useState2[1];

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
  var handleSelectRow = function handleSelectRow(params) {
    var api = params.api;
    var selectedRows = api.getSelectedRows();
    setSelectedRow(selectedRows.length > 0 ? selectedRows[0] : {});
  };
  useEffect(function () {
    if (debug) console.log(selectedRow);
  }, [selectedRow]);
  useEffect(function () {
    if (!isEmpty(selectedRow) && !isEmpty(data)) {
      var _ref;
      setSelectedRow((_ref = data && data.find(function (item) {
        return item[field] === selectedRow[field];
      })) !== null && _ref !== void 0 ? _ref : {});
    }
  }, [data]);
  return {
    selectedRow: selectedRow,
    setSelectedRow: setSelectedRow,
    handleSelectRow: handleSelectRow
  };
};