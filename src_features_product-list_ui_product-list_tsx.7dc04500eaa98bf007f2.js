"use strict";
(self["webpackChunke_commerce"] = self["webpackChunke_commerce"] || []).push([["src_features_product-list_ui_product-list_tsx"],{

/***/ "./src/features/product-list/model/selectors/get-product-list.ts":
/*!***********************************************************************!*\
  !*** ./src/features/product-list/model/selectors/get-product-list.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProductList: () => (/* binding */ getProductList)
/* harmony export */ });
var getProductList = function (state) { return state.products; };


/***/ }),

/***/ "./src/features/product-list/ui/product-list.tsx":
/*!*******************************************************!*\
  !*** ./src/features/product-list/ui/product-list.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var features_product_list_model_selectors_get_product_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/product-list/model/selectors/get-product-list */ "./src/features/product-list/model/selectors/get-product-list.ts");
/* harmony import */ var features_product_list_model_slice_propduct_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/product-list/model/slice/propduct-slice */ "./src/features/product-list/model/slice/propduct-slice.ts");





var ProductList = function () {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var _a = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(features_product_list_model_selectors_get_product_list__WEBPACK_IMPORTED_MODULE_3__.getProductList), products = _a.products, loading = _a.loading, error = _a.error;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        dispatch((0,features_product_list_model_slice_propduct_slice__WEBPACK_IMPORTED_MODULE_4__.fetchProductsStart)());
    }, [dispatch]);
    if (error) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Error: ", error] }, void 0);
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: "MainPage" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: products.map(function (product) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: product.title }, product.id), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: product.image, alt: 'product', style: { width: "10%", marginBottom: '0.5rem' } }, void 0)] }, void 0)); }) }, void 0)] }, void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX3Byb2R1Y3QtbGlzdF91aV9wcm9kdWN0LWxpc3RfdHN4LjdkYzA0NTAwZWFhOThiZjAwN2YyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ3BEO0FBQ3FCO0FBQ2lDO0FBQ0Y7QUFDdEY7QUFDQSxtQkFBbUIsd0RBQVc7QUFDOUIsYUFBYSx3REFBVyxDQUFDLGtHQUFjO0FBQ3ZDLElBQUksZ0RBQVM7QUFDYixpQkFBaUIsb0dBQWtCO0FBQ25DLEtBQUs7QUFDTDtBQUNBLGVBQWUsdURBQUssUUFBUSw4QkFBOEI7QUFDMUQ7QUFDQSxZQUFZLHVEQUFLLFVBQVUsV0FBVyxzREFBSSxTQUFTLHNCQUFzQixXQUFXLHNEQUFJLFNBQVMsNENBQTRDLFFBQVEsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksU0FBUyx5QkFBeUIsZUFBZSxzREFBSSxVQUFVLDZDQUE2Qyx3Q0FBd0MsWUFBWSxhQUFhLEdBQUcsWUFBWTtBQUNuWDtBQUNBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtY29tbWVyY2UvLi9zcmMvZmVhdHVyZXMvcHJvZHVjdC1saXN0L21vZGVsL3NlbGVjdG9ycy9nZXQtcHJvZHVjdC1saXN0LnRzIiwid2VicGFjazovL2UtY29tbWVyY2UvLi9zcmMvZmVhdHVyZXMvcHJvZHVjdC1saXN0L3VpL3Byb2R1Y3QtbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBnZXRQcm9kdWN0TGlzdCA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUucHJvZHVjdHM7IH07XHJcbiIsImltcG9ydCB7IGpzeHMgYXMgX2pzeHMsIGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RMaXN0IH0gZnJvbSAnZmVhdHVyZXMvcHJvZHVjdC1saXN0L21vZGVsL3NlbGVjdG9ycy9nZXQtcHJvZHVjdC1saXN0JztcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0c1N0YXJ0IH0gZnJvbSAnZmVhdHVyZXMvcHJvZHVjdC1saXN0L21vZGVsL3NsaWNlL3Byb3BkdWN0LXNsaWNlJztcclxudmFyIFByb2R1Y3RMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHZhciBfYSA9IHVzZVNlbGVjdG9yKGdldFByb2R1Y3RMaXN0KSwgcHJvZHVjdHMgPSBfYS5wcm9kdWN0cywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGVycm9yID0gX2EuZXJyb3I7XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdGFydCgpKTtcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbXCJFcnJvcjogXCIsIGVycm9yXSB9LCB2b2lkIDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImgxXCIsIHsgY2hpbGRyZW46IFwiTWFpblBhZ2VcIiB9LCB2b2lkIDApLCBfanN4KFwidWxcIiwgeyBjaGlsZHJlbjogcHJvZHVjdHMubWFwKGZ1bmN0aW9uIChwcm9kdWN0KSB7IHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IHByb2R1Y3QudGl0bGUgfSwgcHJvZHVjdC5pZCksIF9qc3goXCJpbWdcIiwgeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIGFsdDogJ3Byb2R1Y3QnLCBzdHlsZTogeyB3aWR0aDogXCIxMCVcIiwgbWFyZ2luQm90dG9tOiAnMC41cmVtJyB9IH0sIHZvaWQgMCldIH0sIHZvaWQgMCkpOyB9KSB9LCB2b2lkIDApXSB9LCB2b2lkIDApKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==