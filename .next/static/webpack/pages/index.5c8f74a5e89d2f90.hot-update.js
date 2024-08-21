"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/templates/DesktopHome/DesktopHome.tsx":
/*!***************************************************!*\
  !*** ./src/templates/DesktopHome/DesktopHome.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _molecules_Texture_StillTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/Texture/StillTexture */ \"./src/molecules/Texture/StillTexture.tsx\");\n/* harmony import */ var _organisms_HomeNavBar_HomeNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisms/HomeNavBar/HomeNavBar */ \"./src/organisms/HomeNavBar/HomeNavBar.tsx\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts */ \"./src/consts.ts\");\n/* harmony import */ var _molecules_Texture_CursorWaveTexture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/Texture/CursorWaveTexture */ \"./src/molecules/Texture/CursorWaveTexture.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 70% 30%;\\n  width: calc(100vw - 5rem);\\n  height: calc(100vh - 5rem);\\n  margin: 2.5rem;\\n  gap: 1rem;\\n\\n  @media (max-width: 1023px) {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: repeat(4, 1fr);\\n  }\\n\\n  @media (max-width: 767px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: 100%;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n\\n  p {\\n    margin-bottom: 1rem;\\n  }\\n  font-size: var(--font-size-L);\\n  \\n  @media (max-width: 1023px) {\\n    font-size: var(--font-size-M);\\n  }\\n  \\n  @media (max-width: 767px) {\\n    font-size: var(--font-size-S);\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n  gap: 1rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: \",\n        ';\\n  justify-content: \"flex-start\";\\n  font-size: var(--font-size-L);\\n  font-weight: var(--font-weight-light);\\n  padding: 0 1rem;\\n\\n  p {\\n    margin: 0;\\n    padding: 0;\\n    font-size: \"1rem\";\\n  }\\n\\n  nav {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n\\n    a {\\n      font-weight: var(--font-weight-light);\\n      margin-bottom: 0.5rem;\\n      text-decoration: none;\\n      color: black;\\n    }\\n  }\\n\\n  @media (max-width: 1023px) {\\n    font-size: var(--font-size-L);\\n  }\\n\\n  @media (max-width: 767px) {\\n    display: none;\\n  }\\n'\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\nvar DesktopContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = DesktopContainer;\nvar CanvasSection = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c1 = CanvasSection;\nvar BottomAllignedBox = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].section(_templateObject2());\n_c2 = BottomAllignedBox;\nvar AvailabilityBox = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].article(_templateObject3());\n_c3 = AvailabilityBox;\nvar TopAllignedBox = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].section(_templateObject4(), function(param) {\n    var align = param.align;\n    return align === \"left\" ? \"flex-start\" : \"flex-end\";\n});\n_c4 = TopAllignedBox;\nvar DesktopHome = function(param) {\n    var headerHeroPath = param.headerHeroPath, footerHeroPath = param.footerHeroPath;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DesktopContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TopAllignedBox, {\n                align: \"left\",\n                \"aria-labelledby\": \"name\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                    \"aria-labelledby\": \"name\",\n                    style: {\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CanvasSection, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ambientLight\", {\n                                    intensity: 1\n                                }, void 0, false, {\n                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pointLight\", {\n                                    position: [\n                                        10,\n                                        10,\n                                        10\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_Texture_StillTexture__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    texturePath: headerHeroPath\n                                }, void 0, false, {\n                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TopAllignedBox, {\n                align: \"right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_organisms_HomeNavBar_HomeNavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BottomAllignedBox, {\n                style: {\n                    marginTop: \"4rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n                        \"aria-labelledby\": \"introduction\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                id: \"introduction\",\n                                hidden: true,\n                                children: \"Introduction\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: _consts__WEBPACK_IMPORTED_MODULE_4__.introductionItems[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvailabilityBox, {\n                        \"aria-labelledby\": \"availability\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: _consts__WEBPACK_IMPORTED_MODULE_4__.introductionItems[1]\n                        }, void 0, false, {\n                            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TopAllignedBox, {\n                align: \"right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                    \"aria-labelledby\": \"job-title\",\n                    style: {\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CanvasSection, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ambientLight\", {\n                                    intensity: 1\n                                }, void 0, false, {\n                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pointLight\", {\n                                    position: [\n                                        10,\n                                        10,\n                                        10\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_Texture_CursorWaveTexture__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    texturePath: footerHeroPath\n                                }, void 0, false, {\n                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/templates/DesktopHome/DesktopHome.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n};\n_c5 = DesktopHome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesktopHome);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"DesktopContainer\");\n$RefreshReg$(_c1, \"CanvasSection\");\n$RefreshReg$(_c2, \"BottomAllignedBox\");\n$RefreshReg$(_c3, \"AvailabilityBox\");\n$RefreshReg$(_c4, \"TopAllignedBox\");\n$RefreshReg$(_c5, \"DesktopHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGVzL0Rlc2t0b3BIb21lL0Rlc2t0b3BIb21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ29CO0FBQ0Q7QUFDZDtBQUN5QjtBQUNoRDtBQUNhO0FBRXZDLElBQU1PLG1CQUFtQkQsNkRBQVU7S0FBN0JDO0FBbUJOLElBQU1FLGdCQUFnQkgsNkRBQVU7TUFBMUJHO0FBS04sSUFBTUMsb0JBQW9CSixpRUFBYztNQUFsQ0k7QUFtQk4sSUFBTUUsa0JBQWtCTixpRUFBYztNQUFoQ007QUFNTixJQUFNRSxpQkFBaUJSLGlFQUFjLHFCQUdwQjtRQUFHUyxjQUFBQTtXQUFhQSxVQUFVLFNBQVMsZUFBZTs7TUFIN0REO0FBcUNOLElBQU1FLGNBQWM7UUFDbEJDLHVCQUFBQSxnQkFDQUMsdUJBQUFBO0lBS0EscUJBQ0UsOERBQUNYOzswQkFDQyw4REFBQ087Z0JBQWVDLE9BQU07Z0JBQU9JLG1CQUFnQjswQkFDM0MsNEVBQUNDO29CQUNDRCxtQkFBZ0I7b0JBQ2hCRSxPQUFPO3dCQUFFQyxPQUFPO3dCQUFRQyxRQUFRO29CQUFPOzhCQUV2Qyw0RUFBQ2Q7a0NBQ0MsNEVBQUNULHNEQUFNQTs7OENBQ0wsOERBQUN3QjtvQ0FBYUMsV0FBVzs7Ozs7OzhDQUN6Qiw4REFBQ0M7b0NBQVdDLFVBQVU7d0NBQUM7d0NBQUk7d0NBQUk7cUNBQUc7Ozs7Ozs4Q0FDbEMsOERBQUMxQix1RUFBWUE7b0NBQUMyQixhQUFhWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtuQyw4REFBQ0g7Z0JBQWVDLE9BQU07MEJBQ3BCLDRFQUFDYix3RUFBVUE7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNRO2dCQUFrQlcsT0FBTztvQkFBRVEsV0FBVztnQkFBTzs7a0NBQzVDLDhEQUFDaEI7d0JBQVFNLG1CQUFnQjs7MENBQ3ZCLDhEQUFDVztnQ0FBRUMsSUFBRztnQ0FBZUMsTUFBTTswQ0FBQzs7Ozs7OzBDQUc1Qiw4REFBQ0Y7MENBQUczQixzREFBaUIsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7a0NBRTFCLDhEQUFDUzt3QkFBZ0JPLG1CQUFnQjtrQ0FDL0IsNEVBQUNXO3NDQUFHM0Isc0RBQWlCLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzVCLDhEQUFDVztnQkFBZUMsT0FBTTswQkFDcEIsNEVBQUNrQjtvQkFDQ2QsbUJBQWdCO29CQUNoQkUsT0FBTzt3QkFBRUMsT0FBTzt3QkFBUUMsUUFBUTtvQkFBTzs4QkFFdkMsNEVBQUNkO2tDQUNDLDRFQUFDVCxzREFBTUE7OzhDQUNMLDhEQUFDd0I7b0NBQWFDLFdBQVc7Ozs7Ozs4Q0FDekIsOERBQUNDO29DQUFXQyxVQUFVO3dDQUFDO3dDQUFJO3dDQUFJO3FDQUFHOzs7Ozs7OENBQ2xDLDhEQUFDdkIsNEVBQWlCQTtvQ0FBQ3dCLGFBQWFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUM7TUFyRE1GO0FBdUROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90ZW1wbGF0ZXMvRGVza3RvcEhvbWUvRGVza3RvcEhvbWUudHN4PzAxZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IFN0aWxsVGV4dHVyZSBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL1RleHR1cmUvU3RpbGxUZXh0dXJlXCI7XG5pbXBvcnQgSG9tZU5hdkJhciBmcm9tIFwiLi4vLi4vb3JnYW5pc21zL0hvbWVOYXZCYXIvSG9tZU5hdkJhclwiO1xuaW1wb3J0IHsgaW50cm9kdWN0aW9uSXRlbXMgfSBmcm9tIFwiLi4vLi4vY29uc3RzXCI7XG5pbXBvcnQgQ3Vyc29yV2F2ZVRleHR1cmUgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9UZXh0dXJlL0N1cnNvcldhdmVUZXh0dXJlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBEZXNrdG9wQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwJSAzMCU7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNXJlbSk7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xuICBtYXJnaW46IDIuNXJlbTtcbiAgZ2FwOiAxcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgQ2FudmFzU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5jb25zdCBCb3R0b21BbGxpZ25lZEJveCA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLUwpO1xuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLU0pO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1TKTtcbiAgfVxuYDtcblxuY29uc3QgQXZhaWxhYmlsaXR5Qm94ID0gc3R5bGVkLmFydGljbGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMXJlbTtcbmA7XG5cbmNvbnN0IFRvcEFsbGlnbmVkQm94ID0gc3R5bGVkLnNlY3Rpb248eyBhbGlnbjogc3RyaW5nIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogJHsoeyBhbGlnbiB9KSA9PiAoYWxpZ24gPT09IFwibGVmdFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCIpfTtcbiAganVzdGlmeS1jb250ZW50OiBcImZsZXgtc3RhcnRcIjtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtTCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XG4gIHBhZGRpbmc6IDAgMXJlbTtcblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IFwiMXJlbVwiO1xuICB9XG5cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgYSB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1MKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IERlc2t0b3BIb21lID0gKHtcbiAgaGVhZGVySGVyb1BhdGgsXG4gIGZvb3Rlckhlcm9QYXRoLFxufToge1xuICBoZWFkZXJIZXJvUGF0aDogc3RyaW5nO1xuICBmb290ZXJIZXJvUGF0aDogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEZXNrdG9wQ29udGFpbmVyPlxuICAgICAgPFRvcEFsbGlnbmVkQm94IGFsaWduPVwibGVmdFwiIGFyaWEtbGFiZWxsZWRieT1cIm5hbWVcIj5cbiAgICAgICAgPGhlYWRlclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hbWVcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhbnZhc1NlY3Rpb24+XG4gICAgICAgICAgICA8Q2FudmFzPlxuICAgICAgICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MX0gLz5cbiAgICAgICAgICAgICAgPHBvaW50TGlnaHQgcG9zaXRpb249e1sxMCwgMTAsIDEwXX0gLz5cbiAgICAgICAgICAgICAgPFN0aWxsVGV4dHVyZSB0ZXh0dXJlUGF0aD17aGVhZGVySGVyb1BhdGh9IC8+XG4gICAgICAgICAgICA8L0NhbnZhcz5cbiAgICAgICAgICA8L0NhbnZhc1NlY3Rpb24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9Ub3BBbGxpZ25lZEJveD5cbiAgICAgIDxUb3BBbGxpZ25lZEJveCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgIDxIb21lTmF2QmFyIC8+XG4gICAgICA8L1RvcEFsbGlnbmVkQm94PlxuICAgICAgPEJvdHRvbUFsbGlnbmVkQm94IHN0eWxlPXt7IG1hcmdpblRvcDogXCI0cmVtXCIgfX0+XG4gICAgICAgIDxhcnRpY2xlIGFyaWEtbGFiZWxsZWRieT1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgIDxwIGlkPVwiaW50cm9kdWN0aW9uXCIgaGlkZGVuPlxuICAgICAgICAgICAgSW50cm9kdWN0aW9uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPntpbnRyb2R1Y3Rpb25JdGVtc1swXX08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPEF2YWlsYWJpbGl0eUJveCBhcmlhLWxhYmVsbGVkYnk9XCJhdmFpbGFiaWxpdHlcIj5cbiAgICAgICAgICA8cD57aW50cm9kdWN0aW9uSXRlbXNbMV19PC9wPlxuICAgICAgICA8L0F2YWlsYWJpbGl0eUJveD5cbiAgICAgIDwvQm90dG9tQWxsaWduZWRCb3g+XG4gICAgICA8VG9wQWxsaWduZWRCb3ggYWxpZ249XCJyaWdodFwiPlxuICAgICAgICA8Zm9vdGVyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiam9iLXRpdGxlXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYW52YXNTZWN0aW9uPlxuICAgICAgICAgICAgPENhbnZhcz5cbiAgICAgICAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezF9IC8+XG4gICAgICAgICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCAxMF19IC8+XG4gICAgICAgICAgICAgIDxDdXJzb3JXYXZlVGV4dHVyZSB0ZXh0dXJlUGF0aD17Zm9vdGVySGVyb1BhdGh9IC8+XG4gICAgICAgICAgICA8L0NhbnZhcz5cbiAgICAgICAgICA8L0NhbnZhc1NlY3Rpb24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9Ub3BBbGxpZ25lZEJveD5cbiAgICA8L0Rlc2t0b3BDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wSG9tZTtcbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJTdGlsbFRleHR1cmUiLCJIb21lTmF2QmFyIiwiaW50cm9kdWN0aW9uSXRlbXMiLCJDdXJzb3JXYXZlVGV4dHVyZSIsIlJlYWN0Iiwic3R5bGVkIiwiRGVza3RvcENvbnRhaW5lciIsImRpdiIsIkNhbnZhc1NlY3Rpb24iLCJCb3R0b21BbGxpZ25lZEJveCIsInNlY3Rpb24iLCJBdmFpbGFiaWxpdHlCb3giLCJhcnRpY2xlIiwiVG9wQWxsaWduZWRCb3giLCJhbGlnbiIsIkRlc2t0b3BIb21lIiwiaGVhZGVySGVyb1BhdGgiLCJmb290ZXJIZXJvUGF0aCIsImFyaWEtbGFiZWxsZWRieSIsImhlYWRlciIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhbWJpZW50TGlnaHQiLCJpbnRlbnNpdHkiLCJwb2ludExpZ2h0IiwicG9zaXRpb24iLCJ0ZXh0dXJlUGF0aCIsIm1hcmdpblRvcCIsInAiLCJpZCIsImhpZGRlbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/templates/DesktopHome/DesktopHome.tsx\n"));

/***/ })

});