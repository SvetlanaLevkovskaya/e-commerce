"use strict";
(self["webpackChunkproduction_project_code_course"] = self["webpackChunkproduction_project_code_course"] || []).push([["src_features_product-list_ui_product-list_tsx"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX3Byb2R1Y3QtbGlzdF91aV9wcm9kdWN0LWxpc3RfdHN4LjA1YjBlZGVmY2YzOWJjMjY0MjVjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ3BEO0FBQ3FCO0FBQ2lDO0FBQ0Y7QUFDdEY7QUFDQSxtQkFBbUIsd0RBQVc7QUFDOUIsYUFBYSx3REFBVyxDQUFDLGtHQUFjO0FBQ3ZDLElBQUksZ0RBQVM7QUFDYixpQkFBaUIsb0dBQWtCO0FBQ25DLEtBQUs7QUFDTDtBQUNBLGVBQWUsdURBQUssUUFBUSw4QkFBOEI7QUFDMUQ7QUFDQSxZQUFZLHVEQUFLLFVBQVUsV0FBVyxzREFBSSxTQUFTLHNCQUFzQixXQUFXLHNEQUFJLFNBQVMsNENBQTRDLFFBQVEsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksU0FBUyx5QkFBeUIsZUFBZSxzREFBSSxVQUFVLDZDQUE2Qyx3Q0FBd0MsWUFBWSxhQUFhLEdBQUcsWUFBWTtBQUNuWDtBQUNBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Rpb25fcHJvamVjdF9jb2RlX2NvdXJzZS8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0LWxpc3QvbW9kZWwvc2VsZWN0b3JzL2dldC1wcm9kdWN0LWxpc3QudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbl9wcm9qZWN0X2NvZGVfY291cnNlLy4vc3JjL2ZlYXR1cmVzL3Byb2R1Y3QtbGlzdC91aS9wcm9kdWN0LWxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgZ2V0UHJvZHVjdExpc3QgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLnByb2R1Y3RzOyB9O1xyXG4iLCJpbXBvcnQgeyBqc3hzIGFzIF9qc3hzLCBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0TGlzdCB9IGZyb20gJ2ZlYXR1cmVzL3Byb2R1Y3QtbGlzdC9tb2RlbC9zZWxlY3RvcnMvZ2V0LXByb2R1Y3QtbGlzdCc7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHNTdGFydCB9IGZyb20gJ2ZlYXR1cmVzL3Byb2R1Y3QtbGlzdC9tb2RlbC9zbGljZS9wcm9wZHVjdC1zbGljZSc7XHJcbnZhciBQcm9kdWN0TGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICB2YXIgX2EgPSB1c2VTZWxlY3RvcihnZXRQcm9kdWN0TGlzdCksIHByb2R1Y3RzID0gX2EucHJvZHVjdHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBlcnJvciA9IF9hLmVycm9yO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzU3RhcnQoKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiRXJyb3I6IFwiLCBlcnJvcl0gfSwgdm9pZCAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIk1haW5QYWdlXCIgfSwgdm9pZCAwKSwgX2pzeChcInVsXCIsIHsgY2hpbGRyZW46IHByb2R1Y3RzLm1hcChmdW5jdGlvbiAocHJvZHVjdCkgeyByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBwcm9kdWN0LnRpdGxlIH0sIHByb2R1Y3QuaWQpLCBfanN4KFwiaW1nXCIsIHsgc3JjOiBwcm9kdWN0LmltYWdlLCBhbHQ6ICdwcm9kdWN0Jywgc3R5bGU6IHsgd2lkdGg6IFwiMTAlXCIsIG1hcmdpbkJvdHRvbTogJzAuNXJlbScgfSB9LCB2b2lkIDApXSB9LCB2b2lkIDApKTsgfSkgfSwgdm9pZCAwKV0gfSwgdm9pZCAwKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=