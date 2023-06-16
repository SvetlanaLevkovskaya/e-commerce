"use strict";
(self["webpackChunke_commerce"] = self["webpackChunke_commerce"] || []).push([["src_features_product-list_ui_product-list_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-list/ui/product-list.module.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-list/ui/product-list.module.scss ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-features-product-list-ui-product-list-module__productContainer--i3syD {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}

.src-features-product-list-ui-product-list-module__productSortContainer--mnW4K {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 50px;
}

.src-features-product-list-ui-product-list-module__productGrid--IZMDD {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
}

.src-features-product-list-ui-product-list-module__productItem--UNAif {
  width: 15%;
  padding: 0.8rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  margin-left: 10px;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.src-features-product-list-ui-product-list-module__productItem--UNAif:hover {
  transform: translateY(-5px);
}

.src-features-product-list-ui-product-list-module__productImage--gUp2B {
  width: 70%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.src-features-product-list-ui-product-list-module__productTitle--F2gGr {
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: bold;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.src-features-product-list-ui-product-list-module__productInfo--lg1I4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
}

.src-features-product-list-ui-product-list-module__productPrice--zY3ah {
  display: flex;
  color: #604c94;
  font-weight: bold;
}

.src-features-product-list-ui-product-list-module__addToCartButton--yeOWY {
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: #604c94;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.src-features-product-list-ui-product-list-module__addToCartButton--yeOWY:hover {
  background-color: #4d3a7f;
}`, "",{"version":3,"sources":["webpack://./src/features/product-list/ui/product-list.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,yBAAA;EACA,WAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,gBAAA;AACF;;AAEA;EACE,UAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,+BAAA;AACF;;AAEA;EACE,2BAAA;AACF;;AAEA;EACE,UAAA;EACA,aAAA;EACA,kBAAA;EACA,qBAAA;AACF;;AAEA;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,gBAAA;EACA,oBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,sCAAA;AACF;;AAEA;EACE,yBAAA;AACF","sourcesContent":[".productContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.productSortContainer {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n  padding: 0 50px;\r\n}\r\n\r\n.productGrid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.productItem {\r\n  width: 15%;\r\n  padding: 0.8rem;\r\n  box-sizing: border-box;\r\n  margin-bottom: 1rem;\r\n  margin-left: 10px;\r\n  text-align: center;\r\n  background-color: #f9f9f9;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.productItem:hover {\r\n  transform: translateY(-5px);\r\n}\r\n\r\n.productImage {\r\n  width: 70%;\r\n  height: 150px;\r\n  border-radius: 8px;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.productTitle {\r\n  margin-top: 0.5rem;\r\n  font-size: 0.7rem;\r\n  font-weight: bold;\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.productInfo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.productPrice {\r\n  display: flex;\r\n  color: #604c94;\r\n  font-weight: bold;\r\n}\r\n\r\n.addToCartButton {\r\n  margin: 0.5rem 0;\r\n  padding: 0.5rem 1rem;\r\n  background-color: #604c94;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.addToCartButton:hover {\r\n  background-color: #4d3a7f;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"productContainer": `src-features-product-list-ui-product-list-module__productContainer--i3syD`,
	"productSortContainer": `src-features-product-list-ui-product-list-module__productSortContainer--mnW4K`,
	"productGrid": `src-features-product-list-ui-product-list-module__productGrid--IZMDD`,
	"productItem": `src-features-product-list-ui-product-list-module__productItem--UNAif`,
	"productImage": `src-features-product-list-ui-product-list-module__productImage--gUp2B`,
	"productTitle": `src-features-product-list-ui-product-list-module__productTitle--F2gGr`,
	"productInfo": `src-features-product-list-ui-product-list-module__productInfo--lg1I4`,
	"productPrice": `src-features-product-list-ui-product-list-module__productPrice--zY3ah`,
	"addToCartButton": `src-features-product-list-ui-product-list-module__addToCartButton--yeOWY`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-sort/ui/product-sort.module.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-sort/ui/product-sort.module.scss ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-features-product-sort-ui-product-sort-module__select--AH3Pa {
  width: 200px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  padding-left: 15px;
  border: none;
}`, "",{"version":3,"sources":["webpack://./src/features/product-sort/ui/product-sort.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;AACF","sourcesContent":[".select {\r\n  width: 200px;\r\n  height: 30px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  padding-left: 15px;\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"select": `src-features-product-sort-ui-product-sort-module__select--AH3Pa`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/product-list/ui/product-list.module.scss":
/*!***************************************************************!*\
  !*** ./src/features/product-list/ui/product-list.module.scss ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./product-list.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-list/ui/product-list.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./product-list.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-list/ui/product-list.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./product-list.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-list/ui/product-list.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_list_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/product-sort/ui/product-sort.module.scss":
/*!***************************************************************!*\
  !*** ./src/features/product-sort/ui/product-sort.module.scss ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./product-sort.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-sort/ui/product-sort.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./product-sort.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-sort/ui/product-sort.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./product-sort.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/product-sort/ui/product-sort.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_product_sort_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

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
/* harmony import */ var _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list.module.scss */ "./src/features/product-list/ui/product-list.module.scss");
/* harmony import */ var features_product_sort_model_lib_get_sort_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/product-sort/model/lib/get-sort-products */ "./src/features/product-sort/model/lib/get-sort-products.ts");
/* harmony import */ var features_product_sort_ui_product_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! features/product-sort/ui/product-sort */ "./src/features/product-sort/ui/product-sort.tsx");
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








var ProductList = function () {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var _a = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(features_product_list_model_selectors_get_product_list__WEBPACK_IMPORTED_MODULE_3__.getProductList), products = _a.products, loading = _a.loading, error = _a.error;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('price-asc'), sortOption = _b[0], setSortOption = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        dispatch((0,features_product_list_model_slice_propduct_slice__WEBPACK_IMPORTED_MODULE_4__.fetchProductsStart)());
    }, [dispatch]);
    var handleSortOptionChange = function (e) {
        setSortOption(e.target.value);
    };
    var handleAddToCart = function (product) {
        //dispatch(addToCart(product));
        console.log(product);
    };
    if (error) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Error: ", error] }, void 0);
    }
    var _c = sortOption.split('-'), sortBy = _c[0], sortOrder = _c[1];
    var sortedProducts = (0,features_product_sort_model_lib_get_sort_products__WEBPACK_IMPORTED_MODULE_6__.sortProducts)(products, sortBy, sortOrder);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productContainer }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productSortContainer }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_product_sort_ui_product_sort__WEBPACK_IMPORTED_MODULE_7__.ProductSort, { sortBy: sortBy, sortOrder: sortOrder, onSortByChange: handleSortOptionChange }, void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productGrid }, { children: sortedProducts.map(function (product) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productItem }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: product.image, alt: "product", className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productImage }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productTitle }, { children: product.title }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productInfo }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productPrice }, { children: ["$", product.price] }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: _product_list_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].addToCartButton, onClick: function () { return handleAddToCart(product); } }, { children: "Add to Cart" }), void 0)] }), void 0)] }), product.id)); }) }), void 0)] }), void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);


/***/ }),

/***/ "./src/features/product-sort/model/lib/get-sort-products.ts":
/*!******************************************************************!*\
  !*** ./src/features/product-sort/model/lib/get-sort-products.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortProducts: () => (/* binding */ sortProducts)
/* harmony export */ });
var sortProducts = function (products, sortBy, sortOrder) {
    return products.slice().sort(function (a, b) {
        if (sortBy === 'price') {
            var priceDiff = a.price - b.price;
            return sortOrder === 'asc' ? priceDiff : -priceDiff;
        }
        else if (sortBy === 'name') {
            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();
            if (nameA < nameB) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (nameA > nameB) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        }
    });
};


/***/ }),

/***/ "./src/features/product-sort/ui/product-sort.tsx":
/*!*******************************************************!*\
  !*** ./src/features/product-sort/ui/product-sort.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSort: () => (/* binding */ ProductSort)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _product_sort_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-sort.module.scss */ "./src/features/product-sort/ui/product-sort.module.scss");
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



var ProductSort = function (_a) {
    var sortBy = _a.sortBy, sortOrder = _a.sortOrder, onSortByChange = _a.onSortByChange;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("".concat(sortBy, "-").concat(sortOrder)), selectedValue = _b[0], setSelectedValue = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var savedValue = localStorage.getItem('sortOption');
        if (savedValue) {
            setSelectedValue(savedValue);
        }
    }, []);
    var handleSortByChange = function (event) {
        var value = event.target.value;
        setSelectedValue(value);
        localStorage.setItem('sortOption', value);
        onSortByChange(event);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", __assign({ id: "sortOption", value: selectedValue, onChange: handleSortByChange, className: _product_sort_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].select }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", __assign({ disabled: true, hidden: true, value: "" }, { children: "Sort By" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", __assign({ value: "price-desc" }, { children: "Price High To Low" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", __assign({ value: "price-asc" }, { children: "Price Low To High" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", __assign({ value: "name-asc" }, { children: "A-Z" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", __assign({ value: "name-desc" }, { children: "Z-A" }), void 0)] }), void 0) }, void 0));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX3Byb2R1Y3QtbGlzdF91aV9wcm9kdWN0LWxpc3RfdHN4LmMwYTQ3MDVhNjExYjg2MDZlYjg5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0hBQXdILFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyw0Q0FBNEMs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VSxVQUFVLHVEQUFLLHNCQUFzQixpRkFBaUYsaUVBQU0sU0FBUyxJQUFJLFdBQVcsc0RBQUksc0JBQXNCLHlDQUF5QyxJQUFJLHFCQUFxQixZQUFZLHNEQUFJLHNCQUFzQixxQkFBcUIsSUFBSSwrQkFBK0IsWUFBWSxzREFBSSxzQkFBc0Isb0JBQW9CLElBQUksK0JBQStCLFlBQVksc0RBQUksc0JBQXNCLG1CQUFtQixJQUFJLGlCQUFpQixZQUFZLHNEQUFJLHNCQUFzQixvQkFBb0IsSUFBSSxpQkFBaUIsYUFBYSxZQUFZO0FBQzNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2UtY29tbWVyY2UvLi9zcmMvZmVhdHVyZXMvcHJvZHVjdC1saXN0L3VpL3Byb2R1Y3QtbGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vc3JjL2ZlYXR1cmVzL3Byb2R1Y3Qtc29ydC91aS9wcm9kdWN0LXNvcnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0LWxpc3QvdWkvcHJvZHVjdC1saXN0Lm1vZHVsZS5zY3NzPzNiYTQiLCJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0LXNvcnQvdWkvcHJvZHVjdC1zb3J0Lm1vZHVsZS5zY3NzPzJkOWYiLCJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0LWxpc3QvbW9kZWwvc2VsZWN0b3JzL2dldC1wcm9kdWN0LWxpc3QudHMiLCJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0LWxpc3QvdWkvcHJvZHVjdC1saXN0LnRzeCIsIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vc3JjL2ZlYXR1cmVzL3Byb2R1Y3Qtc29ydC9tb2RlbC9saWIvZ2V0LXNvcnQtcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0LXNvcnQvdWkvcHJvZHVjdC1zb3J0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1mZWF0dXJlcy1wcm9kdWN0LWxpc3QtdWktcHJvZHVjdC1saXN0LW1vZHVsZV9fcHJvZHVjdENvbnRhaW5lci0taTNzeUQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuXG4uc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0U29ydENvbnRhaW5lci0tbW5XNEsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xufVxuXG4uc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0R3JpZC0tSVpNREQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4uc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0SXRlbS0tVU5BaWYge1xuICB3aWR0aDogMTUlO1xuICBwYWRkaW5nOiAwLjhyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5zcmMtZmVhdHVyZXMtcHJvZHVjdC1saXN0LXVpLXByb2R1Y3QtbGlzdC1tb2R1bGVfX3Byb2R1Y3RJdGVtLS1VTkFpZjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cblxuLnNyYy1mZWF0dXJlcy1wcm9kdWN0LWxpc3QtdWktcHJvZHVjdC1saXN0LW1vZHVsZV9fcHJvZHVjdEltYWdlLS1nVXAyQiB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0VGl0bGUtLUYyZ0dyIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNyYy1mZWF0dXJlcy1wcm9kdWN0LWxpc3QtdWktcHJvZHVjdC1saXN0LW1vZHVsZV9fcHJvZHVjdEluZm8tLWxnMUk0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnNyYy1mZWF0dXJlcy1wcm9kdWN0LWxpc3QtdWktcHJvZHVjdC1saXN0LW1vZHVsZV9fcHJvZHVjdFByaWNlLS16WTNhaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjNjA0Yzk0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNyYy1mZWF0dXJlcy1wcm9kdWN0LWxpc3QtdWktcHJvZHVjdC1saXN0LW1vZHVsZV9fYWRkVG9DYXJ0QnV0dG9uLS15ZU9XWSB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA0Yzk0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19hZGRUb0NhcnRCdXR0b24tLXllT1dZOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkM2E3Zjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0LWxpc3QvdWkvcHJvZHVjdC1saXN0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2R1Y3RDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RTb3J0Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0R3JpZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdEl0ZW0ge1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RJdGVtOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RJbWFnZSB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RUaXRsZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdEluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0UHJpY2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbG9yOiAjNjA0Yzk0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb0NhcnRCdXR0b24ge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNGM5NDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb0NhcnRCdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkM2E3ZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicHJvZHVjdENvbnRhaW5lclwiOiBgc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0Q29udGFpbmVyLS1pM3N5RGAsXG5cdFwicHJvZHVjdFNvcnRDb250YWluZXJcIjogYHNyYy1mZWF0dXJlcy1wcm9kdWN0LWxpc3QtdWktcHJvZHVjdC1saXN0LW1vZHVsZV9fcHJvZHVjdFNvcnRDb250YWluZXItLW1uVzRLYCxcblx0XCJwcm9kdWN0R3JpZFwiOiBgc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0R3JpZC0tSVpNRERgLFxuXHRcInByb2R1Y3RJdGVtXCI6IGBzcmMtZmVhdHVyZXMtcHJvZHVjdC1saXN0LXVpLXByb2R1Y3QtbGlzdC1tb2R1bGVfX3Byb2R1Y3RJdGVtLS1VTkFpZmAsXG5cdFwicHJvZHVjdEltYWdlXCI6IGBzcmMtZmVhdHVyZXMtcHJvZHVjdC1saXN0LXVpLXByb2R1Y3QtbGlzdC1tb2R1bGVfX3Byb2R1Y3RJbWFnZS0tZ1VwMkJgLFxuXHRcInByb2R1Y3RUaXRsZVwiOiBgc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0VGl0bGUtLUYyZ0dyYCxcblx0XCJwcm9kdWN0SW5mb1wiOiBgc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0SW5mby0tbGcxSTRgLFxuXHRcInByb2R1Y3RQcmljZVwiOiBgc3JjLWZlYXR1cmVzLXByb2R1Y3QtbGlzdC11aS1wcm9kdWN0LWxpc3QtbW9kdWxlX19wcm9kdWN0UHJpY2UtLXpZM2FoYCxcblx0XCJhZGRUb0NhcnRCdXR0b25cIjogYHNyYy1mZWF0dXJlcy1wcm9kdWN0LWxpc3QtdWktcHJvZHVjdC1saXN0LW1vZHVsZV9fYWRkVG9DYXJ0QnV0dG9uLS15ZU9XWWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWZlYXR1cmVzLXByb2R1Y3Qtc29ydC11aS1wcm9kdWN0LXNvcnQtbW9kdWxlX19zZWxlY3QtLUFIM1BhIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYm9yZGVyOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZlYXR1cmVzL3Byb2R1Y3Qtc29ydC91aS9wcm9kdWN0LXNvcnQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNlbGVjdFwiOiBgc3JjLWZlYXR1cmVzLXByb2R1Y3Qtc29ydC11aS1wcm9kdWN0LXNvcnQtbW9kdWxlX19zZWxlY3QtLUFIM1BhYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZHVjdC1saXN0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZHVjdC1saXN0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3QtbGlzdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3Qtc29ydC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3Qtc29ydC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9kdWN0LXNvcnQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgdmFyIGdldFByb2R1Y3RMaXN0ID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5wcm9kdWN0czsgfTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3hzIGFzIF9qc3hzLCBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RMaXN0IH0gZnJvbSAnZmVhdHVyZXMvcHJvZHVjdC1saXN0L21vZGVsL3NlbGVjdG9ycy9nZXQtcHJvZHVjdC1saXN0JztcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0c1N0YXJ0IH0gZnJvbSAnZmVhdHVyZXMvcHJvZHVjdC1saXN0L21vZGVsL3NsaWNlL3Byb3BkdWN0LXNsaWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2R1Y3QtbGlzdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHNvcnRQcm9kdWN0cyB9IGZyb20gJ2ZlYXR1cmVzL3Byb2R1Y3Qtc29ydC9tb2RlbC9saWIvZ2V0LXNvcnQtcHJvZHVjdHMnO1xyXG5pbXBvcnQgeyBQcm9kdWN0U29ydCB9IGZyb20gJ2ZlYXR1cmVzL3Byb2R1Y3Qtc29ydC91aS9wcm9kdWN0LXNvcnQnO1xyXG52YXIgUHJvZHVjdExpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgdmFyIF9hID0gdXNlU2VsZWN0b3IoZ2V0UHJvZHVjdExpc3QpLCBwcm9kdWN0cyA9IF9hLnByb2R1Y3RzLCBsb2FkaW5nID0gX2EubG9hZGluZywgZXJyb3IgPSBfYS5lcnJvcjtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKCdwcmljZS1hc2MnKSwgc29ydE9wdGlvbiA9IF9iWzBdLCBzZXRTb3J0T3B0aW9uID0gX2JbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdGFydCgpKTtcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG4gICAgdmFyIGhhbmRsZVNvcnRPcHRpb25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNldFNvcnRPcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHZhciBoYW5kbGVBZGRUb0NhcnQgPSBmdW5jdGlvbiAocHJvZHVjdCkge1xyXG4gICAgICAgIC8vZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuICAgIH07XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcIkVycm9yOiBcIiwgZXJyb3JdIH0sIHZvaWQgMCk7XHJcbiAgICB9XHJcbiAgICB2YXIgX2MgPSBzb3J0T3B0aW9uLnNwbGl0KCctJyksIHNvcnRCeSA9IF9jWzBdLCBzb3J0T3JkZXIgPSBfY1sxXTtcclxuICAgIHZhciBzb3J0ZWRQcm9kdWN0cyA9IHNvcnRQcm9kdWN0cyhwcm9kdWN0cywgc29ydEJ5LCBzb3J0T3JkZXIpO1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogc3R5bGVzLnByb2R1Y3RDb250YWluZXIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IHN0eWxlcy5wcm9kdWN0U29ydENvbnRhaW5lciB9LCB7IGNoaWxkcmVuOiBfanN4KFByb2R1Y3RTb3J0LCB7IHNvcnRCeTogc29ydEJ5LCBzb3J0T3JkZXI6IHNvcnRPcmRlciwgb25Tb3J0QnlDaGFuZ2U6IGhhbmRsZVNvcnRPcHRpb25DaGFuZ2UgfSwgdm9pZCAwKSB9KSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogc3R5bGVzLnByb2R1Y3RHcmlkIH0sIHsgY2hpbGRyZW46IHNvcnRlZFByb2R1Y3RzLm1hcChmdW5jdGlvbiAocHJvZHVjdCkgeyByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBzdHlsZXMucHJvZHVjdEl0ZW0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIGFsdDogXCJwcm9kdWN0XCIsIGNsYXNzTmFtZTogc3R5bGVzLnByb2R1Y3RJbWFnZSB9LCB2b2lkIDApLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBzdHlsZXMucHJvZHVjdFRpdGxlIH0sIHsgY2hpbGRyZW46IHByb2R1Y3QudGl0bGUgfSksIHZvaWQgMCksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBzdHlsZXMucHJvZHVjdEluZm8gfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBzdHlsZXMucHJvZHVjdFByaWNlIH0sIHsgY2hpbGRyZW46IFtcIiRcIiwgcHJvZHVjdC5wcmljZV0gfSksIHZvaWQgMCksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IHN0eWxlcy5hZGRUb0NhcnRCdXR0b24sIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZUFkZFRvQ2FydChwcm9kdWN0KTsgfSB9LCB7IGNoaWxkcmVuOiBcIkFkZCB0byBDYXJ0XCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApXSB9KSwgcHJvZHVjdC5pZCkpOyB9KSB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIiwiZXhwb3J0IHZhciBzb3J0UHJvZHVjdHMgPSBmdW5jdGlvbiAocHJvZHVjdHMsIHNvcnRCeSwgc29ydE9yZGVyKSB7XHJcbiAgICByZXR1cm4gcHJvZHVjdHMuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKHNvcnRCeSA9PT0gJ3ByaWNlJykge1xyXG4gICAgICAgICAgICB2YXIgcHJpY2VEaWZmID0gYS5wcmljZSAtIGIucHJpY2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3J0T3JkZXIgPT09ICdhc2MnID8gcHJpY2VEaWZmIDogLXByaWNlRGlmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc29ydEJ5ID09PSAnbmFtZScpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVBID0gYS50aXRsZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YXIgbmFtZUIgPSBiLnRpdGxlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydE9yZGVyID09PSAnYXNjJyA/IC0xIDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRPcmRlciA9PT0gJ2FzYycgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2R1Y3Qtc29ydC5tb2R1bGUuc2Nzcyc7XHJcbmV4cG9ydCB2YXIgUHJvZHVjdFNvcnQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBzb3J0QnkgPSBfYS5zb3J0QnksIHNvcnRPcmRlciA9IF9hLnNvcnRPcmRlciwgb25Tb3J0QnlDaGFuZ2UgPSBfYS5vblNvcnRCeUNoYW5nZTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIuY29uY2F0KHNvcnRCeSwgXCItXCIpLmNvbmNhdChzb3J0T3JkZXIpKSwgc2VsZWN0ZWRWYWx1ZSA9IF9iWzBdLCBzZXRTZWxlY3RlZFZhbHVlID0gX2JbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzYXZlZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRPcHRpb24nKTtcclxuICAgICAgICBpZiAoc2F2ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhbHVlKHNhdmVkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHZhciBoYW5kbGVTb3J0QnlDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvcnRPcHRpb24nLCB2YWx1ZSk7XHJcbiAgICAgICAgb25Tb3J0QnlDaGFuZ2UoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4cyhcInNlbGVjdFwiLCBfX2Fzc2lnbih7IGlkOiBcInNvcnRPcHRpb25cIiwgdmFsdWU6IHNlbGVjdGVkVmFsdWUsIG9uQ2hhbmdlOiBoYW5kbGVTb3J0QnlDaGFuZ2UsIGNsYXNzTmFtZTogc3R5bGVzLnNlbGVjdCB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBfX2Fzc2lnbih7IGRpc2FibGVkOiB0cnVlLCBoaWRkZW46IHRydWUsIHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiU29ydCBCeVwiIH0pLCB2b2lkIDApLCBfanN4KFwib3B0aW9uXCIsIF9fYXNzaWduKHsgdmFsdWU6IFwicHJpY2UtZGVzY1wiIH0sIHsgY2hpbGRyZW46IFwiUHJpY2UgSGlnaCBUbyBMb3dcIiB9KSwgdm9pZCAwKSwgX2pzeChcIm9wdGlvblwiLCBfX2Fzc2lnbih7IHZhbHVlOiBcInByaWNlLWFzY1wiIH0sIHsgY2hpbGRyZW46IFwiUHJpY2UgTG93IFRvIEhpZ2hcIiB9KSwgdm9pZCAwKSwgX2pzeChcIm9wdGlvblwiLCBfX2Fzc2lnbih7IHZhbHVlOiBcIm5hbWUtYXNjXCIgfSwgeyBjaGlsZHJlbjogXCJBLVpcIiB9KSwgdm9pZCAwKSwgX2pzeChcIm9wdGlvblwiLCBfX2Fzc2lnbih7IHZhbHVlOiBcIm5hbWUtZGVzY1wiIH0sIHsgY2hpbGRyZW46IFwiWi1BXCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApIH0sIHZvaWQgMCkpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=