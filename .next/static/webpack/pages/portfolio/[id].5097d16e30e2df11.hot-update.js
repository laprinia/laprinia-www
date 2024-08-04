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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Divider/MDivider */ \"./src/molecules/Divider/MDivider.tsx\");\n/* harmony import */ var _molecules_ContentCarousel_ContentCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/ContentCarousel/ContentCarousel */ \"./src/molecules/ContentCarousel/ContentCarousel.tsx\");\n/* harmony import */ var _molecules_ColorSwatches_ColorSwatches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/ColorSwatches/ColorSwatches */ \"./src/molecules/ColorSwatches/ColorSwatches.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex-direction: column;\\n  margin: 0;\\n  padding: 0rem 1rem;\\n\\n  border: 2px solid var(--accent-color);\\n  display: flex;\\n  flex: 1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex: 1;\\n  margin: 0;\\n\\n  @media (max-width: 900px) {\\n    flex-direction: column;\\n    overflow-y: auto;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 60%;\\n  background-color: #999999;\\n\\n  border: 2px solid var(--accent-color);\\n  @media (max-width: 900px) {\\n    flex: 0 0 60rem;\\n    width: 100%;\\n    margin-right: 0;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  @media (max-width: 900px) {\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 92%;\\n  background-color: #7a4b4b;\\n\\n  border: 2px solid var(--accent-color);\\n  @media (max-width: 900px) {\\n    flex: 0 0 30rem;\\n    width: 100%;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 8%;\\n  border: 2px solid var(--accent-color);\\n  @media (max-width: 768px) {\\n    flex: 0 0 10rem;\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = ContainerWrapper;\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = ContentContainer;\nvar CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].article(_templateObject2());\n_c2 = CarouselContainer;\nvar ProjectMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section(_templateObject3());\n_c3 = ProjectMediaContainer;\nvar MediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside(_templateObject4());\n_c4 = MediaContainer;\nvar ColorComponent = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside(_templateObject5());\n_c5 = ColorComponent;\nvar ProjectContainer = function() {\n    var items = [\n        {\n            type: \"image\",\n            src: \"/1.1/1.png\"\n        },\n        {\n            type: \"image\",\n            src: \"/insta-template.png\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CarouselContainer, {\n                        \"aria-labelledby\": \"media-carousel\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                hidden: true,\n                                id: \"media-carousel\",\n                                children: \"Media Carousel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ContentCarousel_ContentCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                items: items\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectMediaContainer, {\n                        \"aria-labelledby\": \"project-media\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MediaContainer, {\n                                \"aria-labelledby\": \"project-descriptio\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    hidden: true,\n                                    id: \"project-description\",\n                                    children: \"Project Container\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ColorComponent, {\n                                \"aria-labelledby\": \"color-swatches\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        hidden: true,\n                                        id: \"color-swatches\",\n                                        children: \"Color Swatches\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ColorSwatches_ColorSwatches__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        colors: [\n                                            \"#ECE3E1\",\n                                            \"#FB6008\",\n                                            \"#FAC205\",\n                                            \"#040406\",\n                                            \"#040406\"\n                                        ]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this);\n};\n_c6 = ProjectContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectContainer);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"ContainerWrapper\");\n$RefreshReg$(_c1, \"ContentContainer\");\n$RefreshReg$(_c2, \"CarouselContainer\");\n$RefreshReg$(_c3, \"ProjectMediaContainer\");\n$RefreshReg$(_c4, \"MediaContainer\");\n$RefreshReg$(_c5, \"ColorComponent\");\n$RefreshReg$(_c6, \"ProjectContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JnYW5pc21zL1Byb2plY3RDb250YWluZXIvUHJvamVjdENvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ2lCO0FBQ3NCO0FBQ047QUFFeEUsSUFBTUssbUJBQW1CSiw2REFBVTtLQUE3Qkk7QUFVTixJQUFNRSxtQkFBbUJOLDZEQUFVO01BQTdCTTtBQVdOLElBQU1DLG9CQUFvQlAsaUVBQWM7TUFBbENPO0FBYU4sSUFBTUUsd0JBQXdCVCxpRUFBYztNQUF0Q1M7QUFRTixJQUFNRSxpQkFBaUJYLCtEQUFZO01BQTdCVztBQVlOLElBQU1FLGlCQUFpQmIsK0RBQVk7TUFBN0JhO0FBU04sSUFBTUMsbUJBQW1CO0lBQ3ZCLElBQU1DLFFBQVE7UUFDWjtZQUFFQyxNQUFNO1lBQVNDLEtBQUs7UUFBYTtRQUNuQztZQUFFRCxNQUFNO1lBQVNDLEtBQUs7UUFBc0I7S0FDN0M7SUFDRCxxQkFDRSw4REFBQ2I7OzBCQUNDLDhEQUFDSCxtRUFBUUE7Ozs7OzBCQUNULDhEQUFDSzs7a0NBQ0MsOERBQUNDO3dCQUFrQlcsbUJBQWdCOzswQ0FDakMsOERBQUNDO2dDQUFHQyxNQUFNO2dDQUFDQyxJQUFHOzBDQUFpQjs7Ozs7OzBDQUcvQiw4REFBQ25CLGtGQUFlQTtnQ0FBQ2EsT0FBT0E7Ozs7Ozs7Ozs7OztrQ0FFMUIsOERBQUNOO3dCQUFzQlMsbUJBQWdCOzswQ0FDckMsOERBQUNQO2dDQUFlTyxtQkFBZ0I7MENBQzlCLDRFQUFDSTtvQ0FBR0YsTUFBTTtvQ0FBQ0MsSUFBRzs4Q0FBc0I7Ozs7Ozs7Ozs7OzBDQUl0Qyw4REFBQ1I7Z0NBQWVLLG1CQUFnQjs7a0RBQzlCLDhEQUFDSTt3Q0FBR0YsTUFBTTt3Q0FBQ0MsSUFBRztrREFBaUI7Ozs7OztrREFHL0IsOERBQUNsQiw4RUFBYUE7d0NBQ1pvQixRQUFROzRDQUFDOzRDQUFXOzRDQUFXOzRDQUFXOzRDQUFXO3lDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0U7TUFqQ01UO0FBbUNOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL29yZ2FuaXNtcy9Qcm9qZWN0Q29udGFpbmVyL1Byb2plY3RDb250YWluZXIudHN4PzE1MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBNRGl2aWRlciBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL0RpdmlkZXIvTURpdmlkZXJcIjtcbmltcG9ydCBDb250ZW50Q2Fyb3VzZWwgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9Db250ZW50Q2Fyb3VzZWwvQ29udGVudENhcm91c2VsXCI7XG5pbXBvcnQgQ29sb3JTd2F0Y2hlcyBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL0NvbG9yU3dhdGNoZXMvQ29sb3JTd2F0Y2hlc1wiO1xuXG5jb25zdCBDb250YWluZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG5cbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbmA7XG5cbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYFxuICBmbGV4OiAwIDAgNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGZsZXg6IDAgMCA2MHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgUHJvamVjdE1lZGlhQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICB9XG5gO1xuXG5jb25zdCBNZWRpYUNvbnRhaW5lciA9IHN0eWxlZC5hc2lkZWBcbiAgZmxleDogMCAwIDkyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNGI0YjtcblxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBmbGV4OiAwIDAgMzByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgQ29sb3JDb21wb25lbnQgPSBzdHlsZWQuYXNpZGVgXG4gIGZsZXg6IDAgMCA4JTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleDogMCAwIDEwcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IFtcbiAgICB7IHR5cGU6IFwiaW1hZ2VcIiwgc3JjOiBcIi8xLjEvMS5wbmdcIiB9LFxuICAgIHsgdHlwZTogXCJpbWFnZVwiLCBzcmM6IFwiL2luc3RhLXRlbXBsYXRlLnBuZ1wiIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcldyYXBwZXI+XG4gICAgICA8TURpdmlkZXIgLz5cbiAgICAgIDxDb250ZW50Q29udGFpbmVyPlxuICAgICAgICA8Q2Fyb3VzZWxDb250YWluZXIgYXJpYS1sYWJlbGxlZGJ5PVwibWVkaWEtY2Fyb3VzZWxcIj5cbiAgICAgICAgICA8aDEgaGlkZGVuIGlkPVwibWVkaWEtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgIE1lZGlhIENhcm91c2VsXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8Q29udGVudENhcm91c2VsIGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgICAgPFByb2plY3RNZWRpYUNvbnRhaW5lciBhcmlhLWxhYmVsbGVkYnk9XCJwcm9qZWN0LW1lZGlhXCI+XG4gICAgICAgICAgPE1lZGlhQ29udGFpbmVyIGFyaWEtbGFiZWxsZWRieT1cInByb2plY3QtZGVzY3JpcHRpb1wiPlxuICAgICAgICAgICAgPGgyIGhpZGRlbiBpZD1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgUHJvamVjdCBDb250YWluZXJcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9NZWRpYUNvbnRhaW5lcj5cbiAgICAgICAgICA8Q29sb3JDb21wb25lbnQgYXJpYS1sYWJlbGxlZGJ5PVwiY29sb3Itc3dhdGNoZXNcIj5cbiAgICAgICAgICAgIDxoMiBoaWRkZW4gaWQ9XCJjb2xvci1zd2F0Y2hlc1wiPlxuICAgICAgICAgICAgICBDb2xvciBTd2F0Y2hlc1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxDb2xvclN3YXRjaGVzXG4gICAgICAgICAgICAgIGNvbG9ycz17W1wiI0VDRTNFMVwiLCBcIiNGQjYwMDhcIiwgXCIjRkFDMjA1XCIsIFwiIzA0MDQwNlwiLCBcIiMwNDA0MDZcIl19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sb3JDb21wb25lbnQ+XG4gICAgICAgIDwvUHJvamVjdE1lZGlhQ29udGFpbmVyPlxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb250YWluZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJNRGl2aWRlciIsIkNvbnRlbnRDYXJvdXNlbCIsIkNvbG9yU3dhdGNoZXMiLCJDb250YWluZXJXcmFwcGVyIiwiZGl2IiwiQ29udGVudENvbnRhaW5lciIsIkNhcm91c2VsQ29udGFpbmVyIiwiYXJ0aWNsZSIsIlByb2plY3RNZWRpYUNvbnRhaW5lciIsInNlY3Rpb24iLCJNZWRpYUNvbnRhaW5lciIsImFzaWRlIiwiQ29sb3JDb21wb25lbnQiLCJQcm9qZWN0Q29udGFpbmVyIiwiaXRlbXMiLCJ0eXBlIiwic3JjIiwiYXJpYS1sYWJlbGxlZGJ5IiwiaDEiLCJoaWRkZW4iLCJpZCIsImgyIiwiY29sb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/organisms/ProjectContainer/ProjectContainer.tsx\n"));

/***/ })

});