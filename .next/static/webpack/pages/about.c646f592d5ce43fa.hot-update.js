"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/molecules/HobbiesArticle/HobbiesArticle.tsx":
/*!*********************************************************!*\
  !*** ./src/molecules/HobbiesArticle/HobbiesArticle.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SlabbedArticle_SlabbedArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SlabbedArticle/SlabbedArticle */ \"./src/molecules/SlabbedArticle/SlabbedArticle.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: var(--font-heading);\\n  font-size: var(--font-size-M);\\n\\n  h2 {\\n    font-size: var(--font-size-M);\\n  }\\n  section {\\n    margin-bottom: 1rem;\\n    margin-top: 0.5rem;\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 1rem;\\n    align-items: flex-start;\\n    height: 100%;\\n  }\\n  p {\\n    text-align: justify;\\n    margin: 0;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar Article = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].article(_templateObject());\nvar HobbiesArticle = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SlabbedArticle_SlabbedArticle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        \"aria-labelledby\": \"key-strenghts\",\n        heading: \"B) Key Strengths\",\n        slabs: [\n            \"CREATIVE\",\n            \"PROACTIVE\",\n            \"KNOWS MATH\",\n            \"WOW\"\n        ],\n        isActive: true\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/HobbiesArticle/HobbiesArticle.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_c = HobbiesArticle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HobbiesArticle);\nvar _c;\n$RefreshReg$(_c, \"HobbiesArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL0hvYmJpZXNBcnRpY2xlL0hvYmJpZXNBcnRpY2xlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdUI7QUFFOUQsSUFBTUUsVUFBVUYsaUVBQWM7QUFxQjlCLElBQU1JLGlCQUFpQjtJQUNyQixxQkFDRSw4REFBQ0gsc0VBQWNBO1FBQ2JJLG1CQUFnQjtRQUNoQkMsU0FBUztRQUNUQyxPQUFPO1lBQUM7WUFBWTtZQUFhO1lBQWM7U0FBTTtRQUNyREMsVUFBVTs7Ozs7O0FBR2hCO0tBVE1KO0FBVU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vbGVjdWxlcy9Ib2JiaWVzQXJ0aWNsZS9Ib2JiaWVzQXJ0aWNsZS50c3g/NWQzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFNsYWJiZWRBcnRpY2xlIGZyb20gXCIuLi9TbGFiYmVkQXJ0aWNsZS9TbGFiYmVkQXJ0aWNsZVwiO1xuXG5jb25zdCBBcnRpY2xlID0gc3R5bGVkLmFydGljbGVgXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWRpbmcpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1NKTtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtTSk7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcbmNvbnN0IEhvYmJpZXNBcnRpY2xlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTbGFiYmVkQXJ0aWNsZVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwia2V5LXN0cmVuZ2h0c1wiXG4gICAgICBoZWFkaW5nPXtcIkIpIEtleSBTdHJlbmd0aHNcIn1cbiAgICAgIHNsYWJzPXtbXCJDUkVBVElWRVwiLCBcIlBST0FDVElWRVwiLCBcIktOT1dTIE1BVEhcIiwgXCJXT1dcIl19XG4gICAgICBpc0FjdGl2ZT17dHJ1ZX1cbiAgICAvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvYmJpZXNBcnRpY2xlO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlNsYWJiZWRBcnRpY2xlIiwiQXJ0aWNsZSIsImFydGljbGUiLCJIb2JiaWVzQXJ0aWNsZSIsImFyaWEtbGFiZWxsZWRieSIsImhlYWRpbmciLCJzbGFicyIsImlzQWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/molecules/HobbiesArticle/HobbiesArticle.tsx\n"));

/***/ })

});