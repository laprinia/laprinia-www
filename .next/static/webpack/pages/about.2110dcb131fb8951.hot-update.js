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

/***/ "./src/molecules/CurriculumComponent/CurriculumComponent.tsx":
/*!*******************************************************************!*\
  !*** ./src/molecules/CurriculumComponent/CurriculumComponent.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: var(--font-heading);\\n  background-color: aquamarine;\\n  width: 65%;\\n  padding: 1rem;\\n  box-sizing: border-box;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: var(--font-size-L);\\n  height: 20%;\\n  margin-bottom: 1rem;\\n  background: #e0e0e0;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 60%;\\n  display: flex;\\n  padding-bottom: 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: darkgreen;\\n  flex: 1;\\n  padding: 0 0.5rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding-bottom: 1rem;\\n  height: 20%;\\n  background: #e0e0e0;\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main(_templateObject());\n_c = Container;\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject1());\n_c1 = Description;\nvar CurriculumText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject2());\n_c2 = CurriculumText;\nvar Column = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].article(_templateObject3());\n_c3 = Column;\nvar TechnologiesComponent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject4());\n_c4 = TechnologiesComponent;\nvar CurriculumComponent = function(param) {\n    var articles = param.articles;\n    var midIndex = Math.ceil(articles.length / 2);\n    var leftColumn = articles.slice(0, midIndex);\n    var rightColumn = articles.slice(midIndex);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Description, {\n                \"aria-labelledby\": \"description\",\n                children: \"Description here\"\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/CurriculumComponent/CurriculumComponent.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CurriculumText, {\n                \"aria-labelledby\": \"curriculum\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Column, {\n                        children: leftColumn\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/CurriculumComponent/CurriculumComponent.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Column, {\n                        children: rightColumn\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/CurriculumComponent/CurriculumComponent.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/CurriculumComponent/CurriculumComponent.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TechnologiesComponent, {\n                \"aria-labelledby\": \"technologies\",\n                children: \"Technologies here\"\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/CurriculumComponent/CurriculumComponent.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/CurriculumComponent/CurriculumComponent.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_c5 = CurriculumComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurriculumComponent);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Description\");\n$RefreshReg$(_c2, \"CurriculumText\");\n$RefreshReg$(_c3, \"Column\");\n$RefreshReg$(_c4, \"TechnologiesComponent\");\n$RefreshReg$(_c5, \"CurriculumComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL0N1cnJpY3VsdW1Db21wb25lbnQvQ3VycmljdWx1bUNvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLElBQU1FLFlBQVlELDhEQUFXO0tBQXZCQztBQVFOLElBQU1FLGNBQWNILGlFQUFjO01BQTVCRztBQU9OLElBQU1FLGlCQUFpQkwsaUVBQWM7TUFBL0JLO0FBTU4sSUFBTUMsU0FBU04saUVBQWM7TUFBdkJNO0FBTU4sSUFBTUUsd0JBQXdCUixpRUFBYztNQUF0Q1E7QUFNTixJQUFNQyxzQkFBc0I7UUFBR0MsaUJBQUFBO0lBQzdCLElBQU1DLFdBQVdDLEtBQUtDLElBQUksQ0FBQ0gsU0FBU0ksTUFBTSxHQUFHO0lBQzdDLElBQU1DLGFBQWFMLFNBQVNNLEtBQUssQ0FBQyxHQUFHTDtJQUNyQyxJQUFNTSxjQUFjUCxTQUFTTSxLQUFLLENBQUNMO0lBRW5DLHFCQUNFLDhEQUFDVjs7MEJBQ0MsOERBQUNFO2dCQUFZZSxtQkFBZ0I7MEJBQWM7Ozs7OzswQkFDM0MsOERBQUNiO2dCQUFlYSxtQkFBZ0I7O2tDQUM5Qiw4REFBQ1o7a0NBQVFTOzs7Ozs7a0NBQ1QsOERBQUNUO2tDQUFRVzs7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDVDtnQkFBc0JVLG1CQUFnQjswQkFBZTs7Ozs7Ozs7Ozs7O0FBSzVEO01BakJNVDtBQW1CTiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2xlY3VsZXMvQ3VycmljdWx1bUNvbXBvbmVudC9DdXJyaWN1bHVtQ29tcG9uZW50LnRzeD9iMGY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1oZWFkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbmA7XG5cbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLUwpO1xuICBoZWlnaHQ6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbmA7XG5cbmNvbnN0IEN1cnJpY3VsdW1UZXh0ID0gc3R5bGVkLnNlY3Rpb25gXG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbmA7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5hcnRpY2xlYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuYDtcblxuY29uc3QgVGVjaG5vbG9naWVzQ29tcG9uZW50ID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBoZWlnaHQ6IDIwJTtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbmA7XG5cbmNvbnN0IEN1cnJpY3VsdW1Db21wb25lbnQgPSAoeyBhcnRpY2xlcyB9OiB7IGFydGljbGVzOiBSZWFjdC5SZWFjdE5vZGVbXSB9KSA9PiB7XG4gIGNvbnN0IG1pZEluZGV4ID0gTWF0aC5jZWlsKGFydGljbGVzLmxlbmd0aCAvIDIpO1xuICBjb25zdCBsZWZ0Q29sdW1uID0gYXJ0aWNsZXMuc2xpY2UoMCwgbWlkSW5kZXgpO1xuICBjb25zdCByaWdodENvbHVtbiA9IGFydGljbGVzLnNsaWNlKG1pZEluZGV4KTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8RGVzY3JpcHRpb24gYXJpYS1sYWJlbGxlZGJ5PVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbiBoZXJlPC9EZXNjcmlwdGlvbj5cbiAgICAgIDxDdXJyaWN1bHVtVGV4dCBhcmlhLWxhYmVsbGVkYnk9XCJjdXJyaWN1bHVtXCI+XG4gICAgICAgIDxDb2x1bW4+e2xlZnRDb2x1bW59PC9Db2x1bW4+XG4gICAgICAgIDxDb2x1bW4+e3JpZ2h0Q29sdW1ufTwvQ29sdW1uPlxuICAgICAgPC9DdXJyaWN1bHVtVGV4dD5cbiAgICAgIDxUZWNobm9sb2dpZXNDb21wb25lbnQgYXJpYS1sYWJlbGxlZGJ5PVwidGVjaG5vbG9naWVzXCI+XG4gICAgICAgIFRlY2hub2xvZ2llcyBoZXJlXG4gICAgICA8L1RlY2hub2xvZ2llc0NvbXBvbmVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJpY3VsdW1Db21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJDb250YWluZXIiLCJtYWluIiwiRGVzY3JpcHRpb24iLCJzZWN0aW9uIiwiQ3VycmljdWx1bVRleHQiLCJDb2x1bW4iLCJhcnRpY2xlIiwiVGVjaG5vbG9naWVzQ29tcG9uZW50IiwiQ3VycmljdWx1bUNvbXBvbmVudCIsImFydGljbGVzIiwibWlkSW5kZXgiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImxlZnRDb2x1bW4iLCJzbGljZSIsInJpZ2h0Q29sdW1uIiwiYXJpYS1sYWJlbGxlZGJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/molecules/CurriculumComponent/CurriculumComponent.tsx\n"));

/***/ })

});