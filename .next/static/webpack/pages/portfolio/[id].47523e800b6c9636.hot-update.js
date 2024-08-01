"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio/[id]",{

/***/ "./src/organisms/ProjectContainer/ProjectContainer.tsx":
/*!*************************************************************!*\
  !*** ./src/organisms/ProjectContainer/ProjectContainer.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Divider/MDivider */ \"./src/molecules/Divider/MDivider.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex-direction: column;\\n  margin: 0;\\n  padding: 0rem 1rem;\\n  display: flex;\\n  flex: 1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex: 1;\\n  margin: 0;\\n\\n  @media (max-width: 768px) {\\n    flex-direction: column;\\n    overflow-y: auto;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 60%;\\n  background-color: #999999;\\n  margin-right: 1rem;\\n\\n  @media (max-width: 768px) {\\n    flex: 0 0 auto; /* Allow it to be flexible */\\n    width: 100%;\\n    margin-right: 0;\\n    margin-bottom: 1rem; /* Ensure margin bottom on mobile */\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n\\n  @media (max-width: 768px) {\\n    /* No additional margin needed here */\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 92%;\\n  background-color: #7a4b4b;\\n  margin-bottom: 1rem;\\n\\n  @media (max-width: 768px) {\\n    flex: 0 0 auto; /* Allow it to be flexible */\\n    width: 100%;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 8%;\\n  background-color: #fb6008;\\n\\n  @media (max-width: 768px) {\\n    flex: 0 0 auto; /* Allow it to be flexible */\\n    width: 100%;\\n    margin-bottom: 1rem; /* Ensure margin bottom on mobile */\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n// Wrapper for the entire layout\nvar ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = ContainerWrapper;\n// Main content container that takes remaining space\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = ContentContainer;\n// Description container (fixed width, height changes on mobile)\nvar ProjectDescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = ProjectDescriptionContainer;\n// Media container (flex column, height changes on mobile)\nvar ProjectMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c3 = ProjectMediaContainer;\n// Media component (fixed height, adjusts on mobile)\nvar MediaComponent = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject4());\n_c4 = MediaComponent;\n// Color component (fixed height, adjusts on mobile)\nvar ColorComponent = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject5());\n_c5 = ColorComponent;\nvar ProjectContainer = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectDescriptionContainer, {\n                        role: \"main\"\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectMediaContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MediaComponent, {\n                                role: \"complementary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ColorComponent, {\n                                role: \"complementary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this);\n};\n_c6 = ProjectContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectContainer);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"ContainerWrapper\");\n$RefreshReg$(_c1, \"ContentContainer\");\n$RefreshReg$(_c2, \"ProjectDescriptionContainer\");\n$RefreshReg$(_c3, \"ProjectMediaContainer\");\n$RefreshReg$(_c4, \"MediaComponent\");\n$RefreshReg$(_c5, \"ColorComponent\");\n$RefreshReg$(_c6, \"ProjectContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JnYW5pc21zL1Byb2plY3RDb250YWluZXIvUHJvamVjdENvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNpQjtBQUV4RCxnQ0FBZ0M7QUFDaEMsSUFBTUcsbUJBQW1CRiw2REFBVTtLQUE3QkU7QUFRTixvREFBb0Q7QUFDcEQsSUFBTUUsbUJBQW1CSiw2REFBVTtNQUE3Qkk7QUFXTixnRUFBZ0U7QUFDaEUsSUFBTUMsOEJBQThCTCw2REFBVTtNQUF4Q0s7QUFhTiwwREFBMEQ7QUFDMUQsSUFBTUMsd0JBQXdCTiw2REFBVTtNQUFsQ007QUFVTixvREFBb0Q7QUFDcEQsSUFBTUMsaUJBQWlCUCw2REFBVTtNQUEzQk87QUFZTixvREFBb0Q7QUFDcEQsSUFBTUMsaUJBQWlCUiw2REFBVTtNQUEzQlE7QUFXTixJQUFNQyxtQkFBbUI7SUFDdkIscUJBQ0UsOERBQUNQOzswQkFDQyw4REFBQ0QsbUVBQVFBOzs7OzswQkFDVCw4REFBQ0c7O2tDQUNDLDhEQUFDQzt3QkFBNEJLLE1BQUs7Ozs7OztrQ0FDbEMsOERBQUNKOzswQ0FDQyw4REFBQ0M7Z0NBQWVHLE1BQUs7Ozs7OzswQ0FDckIsOERBQUNGO2dDQUFlRSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7TUFiTUQ7QUFlTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9vcmdhbmlzbXMvUHJvamVjdENvbnRhaW5lci9Qcm9qZWN0Q29udGFpbmVyLnRzeD8xNTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTURpdmlkZXIgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9EaXZpZGVyL01EaXZpZGVyXCI7XG5cbi8vIFdyYXBwZXIgZm9yIHRoZSBlbnRpcmUgbGF5b3V0XG5jb25zdCBDb250YWluZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG5gO1xuXG4vLyBNYWluIGNvbnRlbnQgY29udGFpbmVyIHRoYXQgdGFrZXMgcmVtYWluaW5nIHNwYWNlXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuYDtcblxuLy8gRGVzY3JpcHRpb24gY29udGFpbmVyIChmaXhlZCB3aWR0aCwgaGVpZ2h0IGNoYW5nZXMgb24gbW9iaWxlKVxuY29uc3QgUHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMCAwIDYwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXg6IDAgMCBhdXRvOyAvKiBBbGxvdyBpdCB0byBiZSBmbGV4aWJsZSAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyAvKiBFbnN1cmUgbWFyZ2luIGJvdHRvbSBvbiBtb2JpbGUgKi9cbiAgfVxuYDtcblxuLy8gTWVkaWEgY29udGFpbmVyIChmbGV4IGNvbHVtbiwgaGVpZ2h0IGNoYW5nZXMgb24gbW9iaWxlKVxuY29uc3QgUHJvamVjdE1lZGlhQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBObyBhZGRpdGlvbmFsIG1hcmdpbiBuZWVkZWQgaGVyZSAqL1xuICB9XG5gO1xuXG4vLyBNZWRpYSBjb21wb25lbnQgKGZpeGVkIGhlaWdodCwgYWRqdXN0cyBvbiBtb2JpbGUpXG5jb25zdCBNZWRpYUNvbXBvbmVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCA5MiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTRiNGI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleDogMCAwIGF1dG87IC8qIEFsbG93IGl0IHRvIGJlIGZsZXhpYmxlICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuYDtcblxuLy8gQ29sb3IgY29tcG9uZW50IChmaXhlZCBoZWlnaHQsIGFkanVzdHMgb24gbW9iaWxlKVxuY29uc3QgQ29sb3JDb21wb25lbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAwIDAgOCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjYwMDg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleDogMCAwIGF1dG87IC8qIEFsbG93IGl0IHRvIGJlIGZsZXhpYmxlICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgLyogRW5zdXJlIG1hcmdpbiBib3R0b20gb24gbW9iaWxlICovXG4gIH1cbmA7XG5cbmNvbnN0IFByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcldyYXBwZXI+XG4gICAgICA8TURpdmlkZXIgLz5cbiAgICAgIDxDb250ZW50Q29udGFpbmVyPlxuICAgICAgICA8UHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyIHJvbGU9XCJtYWluXCI+PC9Qcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICAgIDxQcm9qZWN0TWVkaWFDb250YWluZXI+XG4gICAgICAgICAgPE1lZGlhQ29tcG9uZW50IHJvbGU9XCJjb21wbGVtZW50YXJ5XCI+PC9NZWRpYUNvbXBvbmVudD5cbiAgICAgICAgICA8Q29sb3JDb21wb25lbnQgcm9sZT1cImNvbXBsZW1lbnRhcnlcIj48L0NvbG9yQ29tcG9uZW50PlxuICAgICAgICA8L1Byb2plY3RNZWRpYUNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiTURpdmlkZXIiLCJDb250YWluZXJXcmFwcGVyIiwiZGl2IiwiQ29udGVudENvbnRhaW5lciIsIlByb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lciIsIlByb2plY3RNZWRpYUNvbnRhaW5lciIsIk1lZGlhQ29tcG9uZW50IiwiQ29sb3JDb21wb25lbnQiLCJQcm9qZWN0Q29udGFpbmVyIiwicm9sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/organisms/ProjectContainer/ProjectContainer.tsx\n"));

/***/ })

});