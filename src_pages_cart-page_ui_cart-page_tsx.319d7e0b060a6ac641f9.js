"use strict";
(self["webpackChunke_commerce"] = self["webpackChunke_commerce"] || []).push([["src_pages_cart-page_ui_cart-page_tsx"],{

/***/ "./src/features/add-to-cart/model/selectors/get-product-to-cart.ts":
/*!*************************************************************************!*\
  !*** ./src/features/add-to-cart/model/selectors/get-product-to-cart.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCreatedProduct: () => (/* binding */ getCreatedProduct)
/* harmony export */ });
var getCreatedProduct = function (state) { return state.cart; };


/***/ }),

/***/ "./src/features/add-to-cart/ui/cart.tsx":
/*!**********************************************!*\
  !*** ./src/features/add-to-cart/ui/cart.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var features_add_to_cart_model_selectors_get_product_to_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/add-to-cart/model/selectors/get-product-to-cart */ "./src/features/add-to-cart/model/selectors/get-product-to-cart.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var features_add_to_cart_model_slice_add_to_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/add-to-cart/model/slice/add-to-cart-slice */ "./src/features/add-to-cart/model/slice/add-to-cart-slice.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var Cart = function () {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(features_add_to_cart_model_selectors_get_product_to_cart__WEBPACK_IMPORTED_MODULE_2__.getCreatedProduct);
    var handleRemoveFromCart = function (productId) {
        dispatch((0,features_add_to_cart_model_slice_add_to_cart_slice__WEBPACK_IMPORTED_MODULE_4__.removeFromCart)(productId));
    };
    var totalAmount = cartItems.reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Cart" }, void 0), cartItems.length === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "No items in the cart" }, void 0)) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: cartItems.map(function (item) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [item.title, " - $", item.price, " (Quantity: ", item.quantity, ")", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ onClick: function () { return handleRemoveFromCart(item.id); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrash }, void 0) }), void 0)] }, item.id)); }) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Total Amount: $", totalAmount] }, void 0)] }, void 0))] }, void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ }),

/***/ "./src/pages/cart-page/ui/cart-page.tsx":
/*!**********************************************!*\
  !*** ./src/pages/cart-page/ui/cart-page.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var features_add_to_cart_ui_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/add-to-cart/ui/cart */ "./src/features/add-to-cart/ui/cart.tsx");


var CartPage = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_add_to_cart_ui_cart__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NhcnQtcGFnZV91aV9jYXJ0LXBhZ2VfdHN4LjMxOWQ3ZTBiMDYwYTZhYzY0MWY5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTywyQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsRCxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ1I7QUFDc0M7QUFDNUI7QUFDTDtBQUN3QjtBQUNwRjtBQUNBLG1CQUFtQix3REFBVztBQUM5QixvQkFBb0Isd0RBQVcsQ0FBQyx1R0FBaUI7QUFDakQ7QUFDQSxpQkFBaUIsa0dBQWM7QUFDL0I7QUFDQSxnRUFBZ0UsNENBQTRDO0FBQzVHLFlBQVksdURBQUssVUFBVSxXQUFXLHNEQUFJLFNBQVMsa0JBQWtCLHFDQUFxQyxzREFBSSxRQUFRLGtDQUFrQyxjQUFjLHVEQUFLLFVBQVUsV0FBVyxzREFBSSxTQUFTLDBDQUEwQyxRQUFRLHVEQUFLLFNBQVMsK0VBQStFLHNEQUFJLHNCQUFzQix1QkFBdUIseUNBQXlDLElBQUksVUFBVSxzREFBSSxDQUFDLDJFQUFlLElBQUksTUFBTSxzRUFBTyxFQUFFLFdBQVcsYUFBYSxjQUFjLEdBQUcsV0FBVyx1REFBSyxRQUFRLDRDQUE0QyxZQUFZLGFBQWE7QUFDam5CO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCNEI7QUFDQTtBQUNoRDtBQUNBLFlBQVksc0RBQUksQ0FBQyxvRUFBSSxJQUFJO0FBQ3pCO0FBQ0EsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3NyYy9mZWF0dXJlcy9hZGQtdG8tY2FydC9tb2RlbC9zZWxlY3RvcnMvZ2V0LXByb2R1Y3QtdG8tY2FydC50cyIsIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vc3JjL2ZlYXR1cmVzL2FkZC10by1jYXJ0L3VpL2NhcnQudHN4Iiwid2VicGFjazovL2UtY29tbWVyY2UvLi9zcmMvcGFnZXMvY2FydC1wYWdlL3VpL2NhcnQtcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBnZXRDcmVhdGVkUHJvZHVjdCA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuY2FydDsgfTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGdldENyZWF0ZWRQcm9kdWN0IH0gZnJvbSAnZmVhdHVyZXMvYWRkLXRvLWNhcnQvbW9kZWwvc2VsZWN0b3JzL2dldC1wcm9kdWN0LXRvLWNhcnQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYVRyYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgcmVtb3ZlRnJvbUNhcnQgfSBmcm9tICdmZWF0dXJlcy9hZGQtdG8tY2FydC9tb2RlbC9zbGljZS9hZGQtdG8tY2FydC1zbGljZSc7XHJcbnZhciBDYXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHZhciBjYXJ0SXRlbXMgPSB1c2VTZWxlY3RvcihnZXRDcmVhdGVkUHJvZHVjdCk7XHJcbiAgICB2YXIgaGFuZGxlUmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbiAocHJvZHVjdElkKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQocHJvZHVjdElkKSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvdGFsQW1vdW50ID0gY2FydEl0ZW1zLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIGl0ZW0pIHsgcmV0dXJuIHRvdGFsICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHk7IH0sIDApO1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImgyXCIsIHsgY2hpbGRyZW46IFwiQ2FydFwiIH0sIHZvaWQgMCksIGNhcnRJdGVtcy5sZW5ndGggPT09IDAgPyAoX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJObyBpdGVtcyBpbiB0aGUgY2FydFwiIH0sIHZvaWQgMCkpIDogKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwidWxcIiwgeyBjaGlsZHJlbjogY2FydEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKF9qc3hzKFwibGlcIiwgeyBjaGlsZHJlbjogW2l0ZW0udGl0bGUsIFwiIC0gJFwiLCBpdGVtLnByaWNlLCBcIiAoUXVhbnRpdHk6IFwiLCBpdGVtLnF1YW50aXR5LCBcIilcIiwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZVJlbW92ZUZyb21DYXJ0KGl0ZW0uaWQpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goRm9udEF3ZXNvbWVJY29uLCB7IGljb246IGZhVHJhc2ggfSwgdm9pZCAwKSB9KSwgdm9pZCAwKV0gfSwgaXRlbS5pZCkpOyB9KSB9LCB2b2lkIDApLCBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiVG90YWwgQW1vdW50OiAkXCIsIHRvdGFsQW1vdW50XSB9LCB2b2lkIDApXSB9LCB2b2lkIDApKV0gfSwgdm9pZCAwKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gJ2ZlYXR1cmVzL2FkZC10by1jYXJ0L3VpL2NhcnQnO1xyXG52YXIgQ2FydFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKF9qc3goQ2FydCwge30sIHZvaWQgMCkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9