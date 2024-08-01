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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Divider/MDivider */ \"./src/molecules/Divider/MDivider.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex-direction: column;\\n  margin: 0;\\n  padding: 0rem 1rem;\\n  display: flex;\\n  flex: 1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex: 1;\\n  margin: 0;\\n\\n  @media (max-width: 768px) {\\n    /* Adjust breakpoint as needed */\\n    flex-direction: column;\\n    overflow-y: auto; /* Ensure it is scrollable on mobile */\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 60%;\\n  background-color: #999999;\\n  margin-right: 1rem;\\n\\n  @media (max-width: 768px) {\\n    flex: 0 0 60rem; /* Adjust height on mobile */\\n    width: 100%;\\n    margin-right: 0;\\n    margin-bottom: 1rem; /* Add margin bottom on mobile */\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n\\n  @media (max-width: 768px) {\\n    /* No margin-bottom here, as spacing is handled by child components */\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 92%;\\n  background-color: #7a4b4b;\\n  margin-bottom: 1rem;\\n\\n  @media (max-width: 768px) {\\n    flex: 0 0 30rem; /* Adjust height on mobile */\\n    width: 100%;\\n    margin-bottom: 1rem; /* Ensure spacing between MediaComponent and ColorComponent */\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 8%;\\n  background-color: #fb6008;\\n  margin-bottom: 1rem;\\n  @media (max-width: 768px) {\\n    flex: 0 0 10rem; /* Adjust height on mobile */\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n// Wrapper for the entire layout\nvar ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = ContainerWrapper;\n// Main content container that takes remaining space\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = ContentContainer;\n// Description container (fixed width, height changes on mobile)\nvar ProjectDescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = ProjectDescriptionContainer;\n// Media container (flex column, height changes on mobile)\nvar ProjectMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c3 = ProjectMediaContainer;\n// Media component (fixed height, adjusts on mobile)\nvar MediaComponent = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject4());\n_c4 = MediaComponent;\n// Color component (fixed height, adjusts on mobile)\nvar ColorComponent = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject5());\n_c5 = ColorComponent;\nvar ProjectContainer = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectDescriptionContainer, {\n                        role: \"main\"\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectMediaContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MediaComponent, {\n                                role: \"complementary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ColorComponent, {\n                                role: \"complementary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this);\n};\n_c6 = ProjectContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectContainer);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"ContainerWrapper\");\n$RefreshReg$(_c1, \"ContentContainer\");\n$RefreshReg$(_c2, \"ProjectDescriptionContainer\");\n$RefreshReg$(_c3, \"ProjectMediaContainer\");\n$RefreshReg$(_c4, \"MediaComponent\");\n$RefreshReg$(_c5, \"ColorComponent\");\n$RefreshReg$(_c6, \"ProjectContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JnYW5pc21zL1Byb2plY3RDb250YWluZXIvUHJvamVjdENvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNpQjtBQUV4RCxnQ0FBZ0M7QUFDaEMsSUFBTUcsbUJBQW1CRiw2REFBVTtLQUE3QkU7QUFRTixvREFBb0Q7QUFDcEQsSUFBTUUsbUJBQW1CSiw2REFBVTtNQUE3Qkk7QUFZTixnRUFBZ0U7QUFDaEUsSUFBTUMsOEJBQThCTCw2REFBVTtNQUF4Q0s7QUFhTiwwREFBMEQ7QUFDMUQsSUFBTUMsd0JBQXdCTiw2REFBVTtNQUFsQ007QUFVTixvREFBb0Q7QUFDcEQsSUFBTUMsaUJBQWlCUCw2REFBVTtNQUEzQk87QUFZTixvREFBb0Q7QUFDcEQsSUFBTUMsaUJBQWlCUiw2REFBVTtNQUEzQlE7QUFVTixJQUFNQyxtQkFBbUI7SUFDdkIscUJBQ0UsOERBQUNQOzswQkFDQyw4REFBQ0QsbUVBQVFBOzs7OzswQkFDVCw4REFBQ0c7O2tDQUNDLDhEQUFDQzt3QkFBNEJLLE1BQUs7Ozs7OztrQ0FDbEMsOERBQUNKOzswQ0FDQyw4REFBQ0M7Z0NBQWVHLE1BQUs7Ozs7OzswQ0FDckIsOERBQUNGO2dDQUFlRSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7TUFiTUQ7QUFlTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9vcmdhbmlzbXMvUHJvamVjdENvbnRhaW5lci9Qcm9qZWN0Q29udGFpbmVyLnRzeD8xNTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTURpdmlkZXIgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9EaXZpZGVyL01EaXZpZGVyXCI7XG5cbi8vIFdyYXBwZXIgZm9yIHRoZSBlbnRpcmUgbGF5b3V0XG5jb25zdCBDb250YWluZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG5gO1xuXG4vLyBNYWluIGNvbnRlbnQgY29udGFpbmVyIHRoYXQgdGFrZXMgcmVtYWluaW5nIHNwYWNlXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC8qIEFkanVzdCBicmVha3BvaW50IGFzIG5lZWRlZCAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogRW5zdXJlIGl0IGlzIHNjcm9sbGFibGUgb24gbW9iaWxlICovXG4gIH1cbmA7XG5cbi8vIERlc2NyaXB0aW9uIGNvbnRhaW5lciAoZml4ZWQgd2lkdGgsIGhlaWdodCBjaGFuZ2VzIG9uIG1vYmlsZSlcbmNvbnN0IFByb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4OiAwIDAgNjByZW07IC8qIEFkanVzdCBoZWlnaHQgb24gbW9iaWxlICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IC8qIEFkZCBtYXJnaW4gYm90dG9tIG9uIG1vYmlsZSAqL1xuICB9XG5gO1xuXG4vLyBNZWRpYSBjb250YWluZXIgKGZsZXggY29sdW1uLCBoZWlnaHQgY2hhbmdlcyBvbiBtb2JpbGUpXG5jb25zdCBQcm9qZWN0TWVkaWFDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC8qIE5vIG1hcmdpbi1ib3R0b20gaGVyZSwgYXMgc3BhY2luZyBpcyBoYW5kbGVkIGJ5IGNoaWxkIGNvbXBvbmVudHMgKi9cbiAgfVxuYDtcblxuLy8gTWVkaWEgY29tcG9uZW50IChmaXhlZCBoZWlnaHQsIGFkanVzdHMgb24gbW9iaWxlKVxuY29uc3QgTWVkaWFDb21wb25lbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAwIDAgOTIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E0YjRiO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXg6IDAgMCAzMHJlbTsgLyogQWRqdXN0IGhlaWdodCBvbiBtb2JpbGUgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyAvKiBFbnN1cmUgc3BhY2luZyBiZXR3ZWVuIE1lZGlhQ29tcG9uZW50IGFuZCBDb2xvckNvbXBvbmVudCAqL1xuICB9XG5gO1xuXG4vLyBDb2xvciBjb21wb25lbnQgKGZpeGVkIGhlaWdodCwgYWRqdXN0cyBvbiBtb2JpbGUpXG5jb25zdCBDb2xvckNvbXBvbmVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCA4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNjAwODtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleDogMCAwIDEwcmVtOyAvKiBBZGp1c3QgaGVpZ2h0IG9uIG1vYmlsZSAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0Q29udGFpbmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJXcmFwcGVyPlxuICAgICAgPE1EaXZpZGVyIC8+XG4gICAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgICAgPFByb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lciByb2xlPVwibWFpblwiPjwvUHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgICA8UHJvamVjdE1lZGlhQ29udGFpbmVyPlxuICAgICAgICAgIDxNZWRpYUNvbXBvbmVudCByb2xlPVwiY29tcGxlbWVudGFyeVwiPjwvTWVkaWFDb21wb25lbnQ+XG4gICAgICAgICAgPENvbG9yQ29tcG9uZW50IHJvbGU9XCJjb21wbGVtZW50YXJ5XCI+PC9Db2xvckNvbXBvbmVudD5cbiAgICAgICAgPC9Qcm9qZWN0TWVkaWFDb250YWluZXI+XG4gICAgICA8L0NvbnRlbnRDb250YWluZXI+XG4gICAgPC9Db250YWluZXJXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIk1EaXZpZGVyIiwiQ29udGFpbmVyV3JhcHBlciIsImRpdiIsIkNvbnRlbnRDb250YWluZXIiLCJQcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIiLCJQcm9qZWN0TWVkaWFDb250YWluZXIiLCJNZWRpYUNvbXBvbmVudCIsIkNvbG9yQ29tcG9uZW50IiwiUHJvamVjdENvbnRhaW5lciIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/organisms/ProjectContainer/ProjectContainer.tsx\n"));

/***/ })

});