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

/***/ "./src/molecules/ColorSwatches/ColorSwatches.tsx":
/*!*******************************************************!*\
  !*** ./src/molecules/ColorSwatches/ColorSwatches.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: space-between;\\n  height: 100%;\\n  width: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: \",\n        \";\\n  width: 100px;\\n  height: 100px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1(), function(param) {\n    var bgColor = param.bgColor;\n    return bgColor;\n});\n_c1 = Box;\nvar ColorSwatches = function(param) {\n    var colors = param.colors;\n    var getColorIntensity = function(color) {\n        var rgb = parseInt(color.slice(1), 16);\n        var r = rgb >> 16 & 0xff;\n        var g = rgb >> 8 & 0xff;\n        var b = rgb >> 0 & 0xff;\n        return r + g + b;\n    };\n    var sortedColors = colors.sort(function(a, b) {\n        return getColorIntensity(a) - getColorIntensity(b);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: sortedColors.map(function(color, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n                bgColor: color\n            }, index, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ColorSwatches/ColorSwatches.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ColorSwatches/ColorSwatches.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = ColorSwatches;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSwatches);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Box\");\n$RefreshReg$(_c2, \"ColorSwatches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL0NvbG9yU3dhdGNoZXMvQ29sb3JTd2F0Y2hlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUV2QyxJQUFNRSxZQUFZRCw2REFBVTtLQUF0QkM7QUFPTixJQUFNRSxNQUFNSCw2REFBVSxxQkFDQTtRQUFHSSxnQkFBQUE7V0FBY0E7O01BRGpDRDtBQU1OLElBQU1FLGdCQUFnQjtRQUFHQyxlQUFBQTtJQUN2QixJQUFNQyxvQkFBb0IsU0FBQ0M7UUFDekIsSUFBTUMsTUFBTUMsU0FBU0YsTUFBTUcsS0FBSyxDQUFDLElBQUk7UUFDckMsSUFBTUMsSUFBSSxPQUFRLEtBQU07UUFDeEIsSUFBTUMsSUFBSSxPQUFRLElBQUs7UUFDdkIsSUFBTUMsSUFBSSxPQUFRLElBQUs7UUFDdkIsT0FBT0YsSUFBSUMsSUFBSUM7SUFDakI7SUFFQSxJQUFNQyxlQUFlVCxPQUFPVSxJQUFJLENBQzlCLFNBQUNDLEdBQUdIO2VBQU1QLGtCQUFrQlUsS0FBS1Ysa0JBQWtCTzs7SUFHckQscUJBQ0UsOERBQUNiO2tCQUNFYyxhQUFhRyxHQUFHLENBQUMsU0FBQ1YsT0FBT1c7aUNBQ3hCLDhEQUFDaEI7Z0JBQWdCQyxTQUFTSTtlQUFoQlc7Ozs7Ozs7Ozs7O0FBSWxCO01BcEJNZDtBQXNCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9sZWN1bGVzL0NvbG9yU3dhdGNoZXMvQ29sb3JTd2F0Y2hlcy50c3g/MWQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2PHsgYmdDb2xvcjogc3RyaW5nIH0+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGJnQ29sb3IgfSkgPT4gYmdDb2xvcn07XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbmA7XG5cbmNvbnN0IENvbG9yU3dhdGNoZXMgPSAoeyBjb2xvcnMgfTogeyBjb2xvcnM6IHN0cmluZ1tdIH0pID0+IHtcbiAgY29uc3QgZ2V0Q29sb3JJbnRlbnNpdHkgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJnYiA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDEpLCAxNik7XG4gICAgY29uc3QgciA9IChyZ2IgPj4gMTYpICYgMHhmZjtcbiAgICBjb25zdCBnID0gKHJnYiA+PiA4KSAmIDB4ZmY7XG4gICAgY29uc3QgYiA9IChyZ2IgPj4gMCkgJiAweGZmO1xuICAgIHJldHVybiByICsgZyArIGI7XG4gIH07XG5cbiAgY29uc3Qgc29ydGVkQ29sb3JzID0gY29sb3JzLnNvcnQoXG4gICAgKGEsIGIpID0+IGdldENvbG9ySW50ZW5zaXR5KGEpIC0gZ2V0Q29sb3JJbnRlbnNpdHkoYiksXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge3NvcnRlZENvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICA8Qm94IGtleT17aW5kZXh9IGJnQ29sb3I9e2NvbG9yfSAvPlxuICAgICAgKSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclN3YXRjaGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiQm94IiwiYmdDb2xvciIsIkNvbG9yU3dhdGNoZXMiLCJjb2xvcnMiLCJnZXRDb2xvckludGVuc2l0eSIsImNvbG9yIiwicmdiIiwicGFyc2VJbnQiLCJzbGljZSIsInIiLCJnIiwiYiIsInNvcnRlZENvbG9ycyIsInNvcnQiLCJhIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/ColorSwatches/ColorSwatches.tsx\n"));

/***/ }),

/***/ "./src/organisms/ProjectContainer/ProjectContainer.tsx":
/*!*************************************************************!*\
  !*** ./src/organisms/ProjectContainer/ProjectContainer.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Divider/MDivider */ \"./src/molecules/Divider/MDivider.tsx\");\n/* harmony import */ var _molecules_ContentCarousel_ContentCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/ContentCarousel/ContentCarousel */ \"./src/molecules/ContentCarousel/ContentCarousel.tsx\");\n/* harmony import */ var _molecules_ColorSwatches_ColorSwatches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/ColorSwatches/ColorSwatches */ \"./src/molecules/ColorSwatches/ColorSwatches.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex-direction: column;\\n  margin: 0;\\n  padding: 0rem 1rem;\\n  display: flex;\\n  flex: 1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex: 1;\\n  margin: 0;\\n\\n  @media (max-width: 900px) {\\n    flex-direction: column;\\n    overflow-y: auto;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 60%;\\n  background-color: #999999;\\n  margin-right: 1rem;\\n\\n  @media (max-width: 900px) {\\n    flex: 0 0 60rem;\\n    width: 100%;\\n    margin-right: 0;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n  @media (max-width: 900px) {\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 92%;\\n  background-color: #7a4b4b;\\n  margin-bottom: 1rem;\\n  @media (max-width: 900px) {\\n    flex: 0 0 30rem;\\n    width: 100%;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 8%;\\n  background-color: #fb6008;\\n  @media (max-width: 768px) {\\n    flex: 0 0 10rem;\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = ContainerWrapper;\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = ContentContainer;\nvar ProjectDescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].article(_templateObject2());\n_c2 = ProjectDescriptionContainer;\nvar ProjectMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section(_templateObject3());\n_c3 = ProjectMediaContainer;\nvar MediaComponent = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside(_templateObject4());\n_c4 = MediaComponent;\nvar ColorComponent = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside(_templateObject5());\n_c5 = ColorComponent;\nvar ProjectContainer = function() {\n    var items = [\n        {\n            type: \"image\",\n            src: \"/1.1/1.png\"\n        },\n        {\n            type: \"image\",\n            src: \"/insta-template.png\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectDescriptionContainer, {\n                        \"aria-labelledby\": \"project-description\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            hidden: true,\n                            id: \"project-description\",\n                            children: \"Project Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectMediaContainer, {\n                        \"aria-labelledby\": \"project-media\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MediaComponent, {\n                                \"aria-labelledby\": \"media-carousel\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        hidden: true,\n                                        id: \"media-carousel\",\n                                        children: \"Picture Carousel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ContentCarousel_ContentCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        items: items\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ColorComponent, {\n                                \"aria-labelledby\": \"color-swatches\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        hidden: true,\n                                        id: \"color-swatches\",\n                                        children: \"Color Swatches\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ColorSwatches_ColorSwatches__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        colors: \"#fffff\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this);\n};\n_c6 = ProjectContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectContainer);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"ContainerWrapper\");\n$RefreshReg$(_c1, \"ContentContainer\");\n$RefreshReg$(_c2, \"ProjectDescriptionContainer\");\n$RefreshReg$(_c3, \"ProjectMediaContainer\");\n$RefreshReg$(_c4, \"MediaComponent\");\n$RefreshReg$(_c5, \"ColorComponent\");\n$RefreshReg$(_c6, \"ProjectContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JnYW5pc21zL1Byb2plY3RDb250YWluZXIvUHJvamVjdENvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ2lCO0FBQ3NCO0FBQ047QUFFeEUsSUFBTUssbUJBQW1CSiw2REFBVTtLQUE3Qkk7QUFRTixJQUFNRSxtQkFBbUJOLDZEQUFVO01BQTdCTTtBQVdOLElBQU1DLDhCQUE4QlAsaUVBQWM7TUFBNUNPO0FBYU4sSUFBTUUsd0JBQXdCVCxpRUFBYztNQUF0Q1M7QUFTTixJQUFNRSxpQkFBaUJYLCtEQUFZO01BQTdCVztBQVdOLElBQU1FLGlCQUFpQmIsK0RBQVk7TUFBN0JhO0FBU04sSUFBTUMsbUJBQW1CO0lBQ3ZCLElBQU1DLFFBQVE7UUFDWjtZQUFFQyxNQUFNO1lBQVNDLEtBQUs7UUFBYTtRQUNuQztZQUFFRCxNQUFNO1lBQVNDLEtBQUs7UUFBc0I7S0FDN0M7SUFDRCxxQkFDRSw4REFBQ2I7OzBCQUNDLDhEQUFDSCxtRUFBUUE7Ozs7OzBCQUNULDhEQUFDSzs7a0NBQ0MsOERBQUNDO3dCQUE0QlcsbUJBQWdCO2tDQUMzQyw0RUFBQ0M7NEJBQUdDLE1BQU07NEJBQUNDLElBQUc7c0NBQXNCOzs7Ozs7Ozs7OztrQ0FJdEMsOERBQUNaO3dCQUFzQlMsbUJBQWdCOzswQ0FDckMsOERBQUNQO2dDQUFlTyxtQkFBZ0I7O2tEQUM5Qiw4REFBQ0k7d0NBQUdGLE1BQU07d0NBQUNDLElBQUc7a0RBQWlCOzs7Ozs7a0RBRy9CLDhEQUFDbkIsa0ZBQWVBO3dDQUFDYSxPQUFPQTs7Ozs7Ozs7Ozs7OzBDQUUxQiw4REFBQ0Y7Z0NBQWVLLG1CQUFnQjs7a0RBQzlCLDhEQUFDSTt3Q0FBR0YsTUFBTTt3Q0FBQ0MsSUFBRztrREFBaUI7Ozs7OztrREFHL0IsOERBQUNsQiw4RUFBYUE7d0NBQUNvQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7TUEvQk1UO0FBaUNOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL29yZ2FuaXNtcy9Qcm9qZWN0Q29udGFpbmVyL1Byb2plY3RDb250YWluZXIudHN4PzE1MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBNRGl2aWRlciBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL0RpdmlkZXIvTURpdmlkZXJcIjtcbmltcG9ydCBDb250ZW50Q2Fyb3VzZWwgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9Db250ZW50Q2Fyb3VzZWwvQ29udGVudENhcm91c2VsXCI7XG5pbXBvcnQgQ29sb3JTd2F0Y2hlcyBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL0NvbG9yU3dhdGNoZXMvQ29sb3JTd2F0Y2hlc1wiO1xuXG5jb25zdCBDb250YWluZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG5gO1xuXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuYDtcblxuY29uc3QgUHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIGZsZXg6IDAgMCA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBmbGV4OiAwIDAgNjByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IFByb2plY3RNZWRpYUNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgfVxuYDtcblxuY29uc3QgTWVkaWFDb21wb25lbnQgPSBzdHlsZWQuYXNpZGVgXG4gIGZsZXg6IDAgMCA5MiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTRiNGI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGZsZXg6IDAgMCAzMHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBDb2xvckNvbXBvbmVudCA9IHN0eWxlZC5hc2lkZWBcbiAgZmxleDogMCAwIDglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MDA4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4OiAwIDAgMTByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHsgdHlwZTogXCJpbWFnZVwiLCBzcmM6IFwiLzEuMS8xLnBuZ1wiIH0sXG4gICAgeyB0eXBlOiBcImltYWdlXCIsIHNyYzogXCIvaW5zdGEtdGVtcGxhdGUucG5nXCIgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyV3JhcHBlcj5cbiAgICAgIDxNRGl2aWRlciAvPlxuICAgICAgPENvbnRlbnRDb250YWluZXI+XG4gICAgICAgIDxQcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIgYXJpYS1sYWJlbGxlZGJ5PVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxoMSBoaWRkZW4gaWQ9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBQcm9qZWN0IERlc2NyaXB0aW9uXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9Qcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICAgIDxQcm9qZWN0TWVkaWFDb250YWluZXIgYXJpYS1sYWJlbGxlZGJ5PVwicHJvamVjdC1tZWRpYVwiPlxuICAgICAgICAgIDxNZWRpYUNvbXBvbmVudCBhcmlhLWxhYmVsbGVkYnk9XCJtZWRpYS1jYXJvdXNlbFwiPlxuICAgICAgICAgICAgPGgyIGhpZGRlbiBpZD1cIm1lZGlhLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgIFBpY3R1cmUgQ2Fyb3VzZWxcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8Q29udGVudENhcm91c2VsIGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgICA8L01lZGlhQ29tcG9uZW50PlxuICAgICAgICAgIDxDb2xvckNvbXBvbmVudCBhcmlhLWxhYmVsbGVkYnk9XCJjb2xvci1zd2F0Y2hlc1wiPlxuICAgICAgICAgICAgPGgyIGhpZGRlbiBpZD1cImNvbG9yLXN3YXRjaGVzXCI+XG4gICAgICAgICAgICAgIENvbG9yIFN3YXRjaGVzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPENvbG9yU3dhdGNoZXMgY29sb3JzPXtcIiNmZmZmZlwifSAvPlxuICAgICAgICAgIDwvQ29sb3JDb21wb25lbnQ+XG4gICAgICAgIDwvUHJvamVjdE1lZGlhQ29udGFpbmVyPlxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb250YWluZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJNRGl2aWRlciIsIkNvbnRlbnRDYXJvdXNlbCIsIkNvbG9yU3dhdGNoZXMiLCJDb250YWluZXJXcmFwcGVyIiwiZGl2IiwiQ29udGVudENvbnRhaW5lciIsIlByb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lciIsImFydGljbGUiLCJQcm9qZWN0TWVkaWFDb250YWluZXIiLCJzZWN0aW9uIiwiTWVkaWFDb21wb25lbnQiLCJhc2lkZSIsIkNvbG9yQ29tcG9uZW50IiwiUHJvamVjdENvbnRhaW5lciIsIml0ZW1zIiwidHlwZSIsInNyYyIsImFyaWEtbGFiZWxsZWRieSIsImgxIiwiaGlkZGVuIiwiaWQiLCJoMiIsImNvbG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/organisms/ProjectContainer/ProjectContainer.tsx\n"));

/***/ })

});