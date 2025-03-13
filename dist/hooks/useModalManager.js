"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * Custom hook that manages the state of modals on a page.
 * @param {Object.<string, JSX.Element>} modalConfig 
 * @category Hooks
 * @module useModalManager
 * @example
 * import Modal1 from './Modal1'
 * import Modal2 from './Modal2'
 * 
 * const Page = () => {
 *     const { openModal, renderModal } = useModalManager({
 *         "modal1": Modal1
 *         "modal2": Modal2
 *     })
 * 
 *     const modal1Props = {
 *         data: { id: 1, name: "John Doe"},
 *         otherData: { id: 1, name: "Jane Doe"}
 *     }
 * 
 *     return (
 *         <div>
 *             <button 
 *                 // Pass in the props for the component when you open the modal
 *                 onClick={() => openModal("modal1", {
 *                     data: modal1Props["data"]
 *                     otherData: modal1Props["otherData"]
 *                 })}
 *             >
 *                 Open Modal 1
 *             </button>
 *             <button
 *                 // If no props are necessary for the component, don't pass in anything
 *                 onClick={() => openModal("modal2")}
 *             >
 *                 Open Modal 2
 *             </button>
 *             {renderModal()} // Then use the `renderModal` function to render
 *         </div>
 *     )
 * }
 */
var useModalManager = function useModalManager(modalConfig) {
  var _useState = (0, _react.useState)({
      type: null,
      props: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modalState = _useState2[0],
    setModalState = _useState2[1];

  /**
   * Method to open a modal of a specific type with optional props
   * 
   * NOTE: Ensure the modal being opened is present in `modalConfig`
   * 
   * @param {string} type Type of modal to open
   * @param {object} props Props to be passed to the modal component
   */
  var openModal = function openModal(type) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!modalConfig[type]) {
      console.warn("Modal type \"".concat(type, "\" is not defined in the configuration"));
      return;
    }
    setModalState({
      type: type,
      props: props
    });
  };
  var closeModal = function closeModal() {
    return setModalState({
      type: null,
      props: {}
    });
  };

  /**
   * Renders the modal dictated by the current state
   * 
   * @returns JSX.Element
   */
  var renderModal = function renderModal() {
    var type = modalState.type,
      props = modalState.props;
    if (!type || !modalConfig[type]) return null;
    var ModalComponent = modalConfig[type];
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ModalComponent, _objectSpread({
      open: true,
      onClose: closeModal
    }, props));
  };
  var isModalOpen = function isModalOpen(type) {
    return modalState.type === type;
  };
  return {
    openModal: openModal,
    closeModal: closeModal,
    renderModal: renderModal,
    isModalOpen: isModalOpen
  };
};
var _default = exports["default"] = useModalManager;