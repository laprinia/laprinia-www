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

/***/ "./src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx":
/*!***********************************************************************************!*\
  !*** ./src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx ***!
  \***********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ButtonContainer_ButtonContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ButtonContainer/ButtonContainer */ \"./src/molecules/ButtonContainer/ButtonContainer.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1;\\n  padding: 1rem;\\n  padding-top: 2rem;\\n  border-bottom: 0.25rem solid var(--accent-color);\\n  display: flex;\\n  flex-direction: column;\\n  overflow: hidden;\\n  box-sizing: border-box;\\n\\n  @media (max-width: 900px) {\\n    padding-top: 0rem;\\n    border: none;\\n    flex: 0 0 40rem;\\n    width: 100%;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: var(--font-size-L);\\n  font-weight: var(--font-weight-bold);\\n  color: var(--accent-color);\\n  margin-bottom: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  overflow: hidden;\\n  margin-bottom: 1rem;\\n  flex-shrink: 0;\\n  position: relative;\\n  height: 1.5rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: inline-block;\\n  white-space: nowrap;\\n  animation: scroll 30s linear infinite;\\n  font-size: var(--font-size-M);\\n  font-weight: var(--font-weight-bold);\\n  color: var(--accent-color);\\n  position: absolute;\\n  will-change: transform;\\n\\n  span {\\n    display: inline-flex;\\n    align-items: end;\\n  }\\n\\n  .asterisk {\\n    margin: 0 0.5rem;\\n    transform: translateY(35%);\\n    font-size: var(--font-size-L);\\n  }\\n\\n  @keyframes scroll {\\n    0% {\\n      transform: translateX(0%);\\n    }\\n    100% {\\n      transform: translateX(-100%);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  overflow-y: auto;\\n  flex-grow: 1;\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-bottom: 2rem;\\n\\n  h2 {\\n    font-size: var(--font-size-M);\\n    font-weight: bold;\\n    margin-bottom: 1rem;\\n  }\\n\\n  p {\\n    font-size: var(--font-size-M);\\n    text-align: justify;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aside(_templateObject());\n_c = TextContainer;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = Header;\nvar LoopingTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = LoopingTextContainer;\nvar LoopingText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c3 = LoopingText;\nvar ScrollArea = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject4());\n_c4 = ScrollArea;\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject5());\n_c5 = Section;\nvar ProjectDescriptionContainer = function(param) {\n    var projectName = param.projectName, tags = param.tags, buttons = param.buttons, content = param.content;\n    var loopingTextContent = tags.map(function(tag, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            children: [\n                tag,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"asterisk\",\n                    children: \"*\"\n                }, void 0, false, {\n                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, index, true, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n            lineNumber: 102,\n            columnNumber: 5\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextContainer, {\n        \"aria-labelledby\": \"project-description\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                hidden: true,\n                id: \"project-description\",\n                children: \"Project Description\"\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {\n                children: projectName\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoopingTextContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        hidden: true,\n                        id: \"project-description\",\n                        children: \"Technologies Used\"\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoopingText, {\n                        children: loopingTextContent\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ButtonContainer_ButtonContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                buttons: buttons\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ScrollArea, {\n                children: content.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Section, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: item.header\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, _this);\n};\n_c6 = ProjectDescriptionContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDescriptionContainer);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"TextContainer\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"LoopingTextContainer\");\n$RefreshReg$(_c3, \"LoopingText\");\n$RefreshReg$(_c4, \"ScrollArea\");\n$RefreshReg$(_c5, \"Section\");\n$RefreshReg$(_c6, \"ProjectDescriptionContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL1Byb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lci9Qcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ3ZDO0FBQ2E7QUFFdkMsSUFBTUcsZ0JBQWdCRCwrREFBWTtLQUE1QkM7QUFtQk4sSUFBTUUsU0FBU0gsNkRBQVU7TUFBbkJHO0FBT04sSUFBTUUsdUJBQXVCTCw2REFBVTtNQUFqQ0s7QUFRTixJQUFNQyxjQUFjTiw2REFBVTtNQUF4Qk07QUErQk4sSUFBTUMsYUFBYVAsNkRBQVU7TUFBdkJPO0FBS04sSUFBTUMsVUFBVVIsaUVBQWM7TUFBeEJRO0FBZU4sSUFBTUUsOEJBQThCO1FBQ2xDQyxvQkFBQUEsYUFDQUMsYUFBQUEsTUFDQUMsZ0JBQUFBLFNBQ0FDLGdCQUFBQTtJQU9BLElBQU1DLHFCQUFxQkgsS0FBS0ksR0FBRyxDQUFDLFNBQUNDLEtBQUtDOzZCQUN4Qyw4REFBQ0M7O2dCQUNFRjs4QkFDRCw4REFBQ0U7b0JBQUtDLFdBQVU7OEJBQVc7Ozs7Ozs7V0FGbEJGOzs7Ozs7SUFNYixxQkFDRSw4REFBQ2pCO1FBQWNvQixtQkFBZ0I7OzBCQUM3Qiw4REFBQ0M7Z0JBQUdDLE1BQU07Z0JBQUNDLElBQUc7MEJBQXNCOzs7Ozs7MEJBR3BDLDhEQUFDckI7MEJBQVFROzs7Ozs7MEJBQ1QsOERBQUNOOztrQ0FDQyw4REFBQ2lCO3dCQUFHQyxNQUFNO3dCQUFDQyxJQUFHO2tDQUFzQjs7Ozs7O2tDQUdwQyw4REFBQ2xCO2tDQUFhUzs7Ozs7Ozs7Ozs7OzBCQUVoQiw4REFBQ2pCLHdFQUFlQTtnQkFBQ2UsU0FBU0E7Ozs7OzswQkFDMUIsOERBQUNOOzBCQUNFTyxRQUFRRSxHQUFHLENBQUMsU0FBQ1MsTUFBTVA7eUNBQ2xCLDhEQUFDVjs7MENBQ0MsOERBQUNjOzBDQUFJRyxLQUFLQyxNQUFNOzs7Ozs7MENBQ2hCLDhEQUFDQzswQ0FBR0YsS0FBS0csSUFBSTs7Ozs7Ozt1QkFGRFY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhCO01BekNNUjtBQTJDTiwrREFBZUEsMkJBQTJCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2xlY3VsZXMvUHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyL1Byb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lci50c3g/ZjZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uQ29udGFpbmVyIGZyb20gXCIuLi9CdXR0b25Db250YWluZXIvQnV0dG9uQ29udGFpbmVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmbGV4OiAwIDAgNDByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtTCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5jb25zdCBMb29waW5nVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMS41cmVtO1xuYDtcblxuY29uc3QgTG9vcGluZ1RleHQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGFuaW1hdGlvbjogc2Nyb2xsIDMwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLU0pO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgfVxuXG4gIC5hc3RlcmlzayB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzUlKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1MKTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTY3JvbGxBcmVhID0gc3R5bGVkLmRpdmBcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZmxleC1ncm93OiAxO1xuYDtcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1NKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtTSk7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuYDtcblxuY29uc3QgUHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyID0gKHtcbiAgcHJvamVjdE5hbWUsXG4gIHRhZ3MsXG4gIGJ1dHRvbnMsXG4gIGNvbnRlbnQsXG59OiB7XG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICBidXR0b25zOiB7IGltYWdlU3JjOiBzdHJpbmc7IGFsdDogc3RyaW5nOyBsaW5rOiBzdHJpbmcgfVtdO1xuICBjb250ZW50OiB7IGhlYWRlcjogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfVtdO1xufSkgPT4ge1xuICBjb25zdCBsb29waW5nVGV4dENvbnRlbnQgPSB0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxuICAgIDxzcGFuIGtleT17aW5kZXh9PlxuICAgICAge3RhZ31cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzdGVyaXNrXCI+Kjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPFRleHRDb250YWluZXIgYXJpYS1sYWJlbGxlZGJ5PVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgPGgyIGhpZGRlbiBpZD1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgUHJvamVjdCBEZXNjcmlwdGlvblxuICAgICAgPC9oMj5cbiAgICAgIDxIZWFkZXI+e3Byb2plY3ROYW1lfTwvSGVhZGVyPlxuICAgICAgPExvb3BpbmdUZXh0Q29udGFpbmVyPlxuICAgICAgICA8aDIgaGlkZGVuIGlkPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIFRlY2hub2xvZ2llcyBVc2VkXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxMb29waW5nVGV4dD57bG9vcGluZ1RleHRDb250ZW50fTwvTG9vcGluZ1RleHQ+XG4gICAgICA8L0xvb3BpbmdUZXh0Q29udGFpbmVyPlxuICAgICAgPEJ1dHRvbkNvbnRhaW5lciBidXR0b25zPXtidXR0b25zfSAvPlxuICAgICAgPFNjcm9sbEFyZWE+XG4gICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2VjdGlvbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxoMj57aXRlbS5oZWFkZXJ9PC9oMj5cbiAgICAgICAgICAgIDxwPntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L1Njcm9sbEFyZWE+XG4gICAgPC9UZXh0Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbkNvbnRhaW5lciIsIlJlYWN0Iiwic3R5bGVkIiwiVGV4dENvbnRhaW5lciIsImFzaWRlIiwiSGVhZGVyIiwiZGl2IiwiTG9vcGluZ1RleHRDb250YWluZXIiLCJMb29waW5nVGV4dCIsIlNjcm9sbEFyZWEiLCJTZWN0aW9uIiwic2VjdGlvbiIsIlByb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lciIsInByb2plY3ROYW1lIiwidGFncyIsImJ1dHRvbnMiLCJjb250ZW50IiwibG9vcGluZ1RleHRDb250ZW50IiwibWFwIiwidGFnIiwiaW5kZXgiLCJzcGFuIiwiY2xhc3NOYW1lIiwiYXJpYS1sYWJlbGxlZGJ5IiwiaDIiLCJoaWRkZW4iLCJpZCIsIml0ZW0iLCJoZWFkZXIiLCJwIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/molecules/ProjectDescriptionContainer/ProjectDescriptionContainer.tsx\n"));

/***/ })

});