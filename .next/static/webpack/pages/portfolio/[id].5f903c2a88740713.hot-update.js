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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Divider/MDivider */ \"./src/molecules/Divider/MDivider.tsx\");\n/* harmony import */ var _molecules_ContentCarousel_ContentCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/ContentCarousel/ContentCarousel */ \"./src/molecules/ContentCarousel/ContentCarousel.tsx\");\n/* harmony import */ var _molecules_ColorSwatches_ColorSwatches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/ColorSwatches/ColorSwatches */ \"./src/molecules/ColorSwatches/ColorSwatches.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex-direction: column;\\n  margin: 0;\\n  padding: 0 1rem;\\n  display: flex;\\n  flex: 1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex: 1;\\n  margin: 0;\\n\\n  @media (max-width: 900px) {\\n    flex-direction: column;\\n    overflow-y: auto;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 60%;\\n  margin-right: 1rem;\\n\\n  border: 2px solid var(--accent-color);\\n  @media (max-width: 900px) {\\n    flex: 0 0 60rem;\\n    width: 100%;\\n    margin-right: 0;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n  @media (max-width: 900px) {\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: blue;\\n  flex: 0 0 92%;\\n  margin-bottom: 1rem;\\n  padding: 0.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  overflow: hidden;\\n  border: 2px solid var(--accent-color);\\n\\n  @media (max-width: 900px) {\\n    flex: 0 0 30rem;\\n    width: 100%;\\n    margin-bottom: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 8%;\\n  border: 2px solid var(--accent-color);\\n  @media (max-width: 768px) {\\n    flex: 0 0 10rem;\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: var(--font-size-L);\\n  color: var(--accent-color);\\n  margin-bottom: 0.5rem;\\n\"\n    ]);\n    _templateObject6 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  overflow: hidden;\\n  margin-bottom: 0.5rem;\\n  flex-shrink: 0;\\n\"\n    ]);\n    _templateObject7 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  display: inline-block;\\n  white-space: nowrap;\\n  background-color: #129f54;\\n  overflow: hidden;\\n  font-size: var(--font-size-M);\\n  animation: scroll 10s linear infinite;\\n  margin-bottom: 0.5rem;\\n\\n  @keyframes scroll {\\n    0% {\\n      transform: translateX(100%);\\n    }\\n    100% {\\n      transform: translateX(-100%);\\n    }\\n  }\\n\\n  &::after {\\n    content: \"*\";\\n    display: inline-block;\\n    align-self: center;\\n    margin: 0 1rem;\\n  }\\n'\n    ]);\n    _templateObject8 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  gap: 0.5rem;\\n  margin-bottom: 0.5rem;\\n\\n  button {\\n    width: 1rem;\\n    height: 1rem;\\n    padding: 0;\\n    border: none;\\n    background: none;\\n\\n    img {\\n      width: 100%;\\n      height: 100%;\\n      object-fit: contain;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject9 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  overflow-y: auto;\\n  flex: 1;\\n\"\n    ]);\n    _templateObject10 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-bottom: 0.5rem;\\n\\n  h2 {\\n    font-size: var(--font-size-M);\\n    font-weight: bold;\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  p {\\n    font-size: var(--font-size-M);\\n  }\\n\"\n    ]);\n    _templateObject11 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = ContainerWrapper;\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = ContentContainer;\nvar CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].article(_templateObject2());\n_c2 = CarouselContainer;\nvar DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section(_templateObject3());\n_c3 = DetailsContainer;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside(_templateObject4());\n_c4 = TextContainer;\nvar ColorComponent = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside(_templateObject5());\n_c5 = ColorComponent;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject6());\n_c6 = Header;\nvar LoopingTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject7());\nvar LoopingText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject8());\n_c7 = LoopingText;\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject9());\n_c8 = ButtonContainer;\nvar ScrollArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject10());\n_c9 = ScrollArea;\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section(_templateObject11());\n_c10 = Section;\nvar ProjectContainer = function() {\n    var projectName = \"1.1. frontend project\";\n    var tags = [\n        \"React\",\n        \"Tailwind\",\n        \"Node.js\",\n        \"React\",\n        \"Tailwind\",\n        \"Node.js\",\n        \"React\",\n        \"Tailwind\",\n        \"Node.js\",\n        \"React\",\n        \"Tailwind\",\n        \"Node.js\",\n        \"React\",\n        \"Tailwind\",\n        \"Node.js\"\n    ];\n    var items = [\n        {\n            type: \"image\",\n            src: \"/1.1/1.png\"\n        },\n        {\n            type: \"image\",\n            src: \"/insta-template.png\"\n        }\n    ];\n    var buttons = [\n        {\n            imageSrc: \"/behance.png\",\n            alt: \"Behance\"\n        },\n        {\n            imageSrc: \"/github.png\",\n            alt: \"GitHub\"\n        }\n    ];\n    var content = [\n        {\n            header: \"A) About\",\n            text: \"This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.\"\n        },\n        {\n            header: \"B) Process\",\n            text: \"This project is a demonstration of a modern minimalist UI implemented in React. The primary focus was on creating a user-friendly, visually appealing interface that prioritizes efficiency and clarity. The development process involved addressing numerous challenges, including optimizing performance and ensuring cross-browser compatibility.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_Divider_MDivider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 193,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CarouselContainer, {\n                        \"aria-labelledby\": \"media-carousel\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                hidden: true,\n                                id: \"media-carousel\",\n                                children: \"Media Carousel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 196,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ContentCarousel_ContentCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                items: items\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 199,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 195,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DetailsContainer, {\n                        \"aria-labelledby\": \"project-media\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextContainer, {\n                                \"aria-labelledby\": \"project-description\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        hidden: true,\n                                        id: \"project-description\",\n                                        children: \"Project Container\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 203,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {\n                                        children: projectName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 206,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoopingText, {\n                                        children: tags.join(\"\t\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 207,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonContainer, {\n                                        children: buttons.map(function(button, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: button.imageSrc,\n                                                    alt: button.alt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                                    lineNumber: 211,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, index, false, {\n                                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                                lineNumber: 210,\n                                                columnNumber: 17\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 208,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ScrollArea, {\n                                        children: content.map(function(item, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Section, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                        children: item.header\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                                        lineNumber: 218,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                        children: item.text\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                                        lineNumber: 219,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                                lineNumber: 217,\n                                                columnNumber: 17\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 215,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 202,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ColorComponent, {\n                                \"aria-labelledby\": \"color-swatches\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        hidden: true,\n                                        id: \"color-swatches\",\n                                        children: \"Color Swatches\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 225,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_molecules_ColorSwatches_ColorSwatches__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        colors: [\n                                            \"#ECE3E1\",\n                                            \"#FB6008\",\n                                            \"#FAC205\",\n                                            \"#040406\",\n                                            \"#040406\"\n                                        ]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                        lineNumber: 228,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                                lineNumber: 224,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                        lineNumber: 201,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n                lineNumber: 194,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/ProjectContainer/ProjectContainer.tsx\",\n        lineNumber: 192,\n        columnNumber: 5\n    }, _this);\n};\n_c11 = ProjectContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectContainer);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n$RefreshReg$(_c, \"ContainerWrapper\");\n$RefreshReg$(_c1, \"ContentContainer\");\n$RefreshReg$(_c2, \"CarouselContainer\");\n$RefreshReg$(_c3, \"DetailsContainer\");\n$RefreshReg$(_c4, \"TextContainer\");\n$RefreshReg$(_c5, \"ColorComponent\");\n$RefreshReg$(_c6, \"Header\");\n$RefreshReg$(_c7, \"LoopingText\");\n$RefreshReg$(_c8, \"ButtonContainer\");\n$RefreshReg$(_c9, \"ScrollArea\");\n$RefreshReg$(_c10, \"Section\");\n$RefreshReg$(_c11, \"ProjectContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JnYW5pc21zL1Byb2plY3RDb250YWluZXIvUHJvamVjdENvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ2lCO0FBQ3NCO0FBQ047QUFFeEUsSUFBTUssbUJBQW1CSiw2REFBVTtLQUE3Qkk7QUFRTixJQUFNRSxtQkFBbUJOLDZEQUFVO01BQTdCTTtBQVdOLElBQU1DLG9CQUFvQlAsaUVBQWM7TUFBbENPO0FBYU4sSUFBTUUsbUJBQW1CVCxpRUFBYztNQUFqQ1M7QUFTTixJQUFNRSxnQkFBZ0JYLCtEQUFZO01BQTVCVztBQWtCTixJQUFNRSxpQkFBaUJiLCtEQUFZO01BQTdCYTtBQVNOLElBQU1DLFNBQVNkLDZEQUFVO01BQW5CYztBQU1OLElBQU1DLHVCQUF1QmYsNkRBQVU7QUFNdkMsSUFBTWdCLGNBQWNoQiw2REFBVTtNQUF4QmdCO0FBMEJOLElBQU1DLGtCQUFrQmpCLDZEQUFVO01BQTVCaUI7QUFvQk4sSUFBTUMsYUFBYWxCLDZEQUFVO01BQXZCa0I7QUFLTixJQUFNQyxVQUFVbkIsaUVBQWM7T0FBeEJtQjtBQWNOLElBQU1DLG1CQUFtQjtJQUN2QixJQUFNQyxjQUFjO0lBQ3BCLElBQU1DLE9BQU87UUFDWDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNELElBQU1DLFFBQVE7UUFDWjtZQUFFQyxNQUFNO1lBQVNDLEtBQUs7UUFBYTtRQUNuQztZQUFFRCxNQUFNO1lBQVNDLEtBQUs7UUFBc0I7S0FDN0M7SUFDRCxJQUFNQyxVQUFVO1FBQ2Q7WUFBRUMsVUFBVTtZQUFnQkMsS0FBSztRQUFVO1FBQzNDO1lBQUVELFVBQVU7WUFBZUMsS0FBSztRQUFTO0tBQzFDO0lBRUQsSUFBTUMsVUFBVTtRQUNkO1lBQ0VDLFFBQVE7WUFDUkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsUUFBUTtZQUNSQyxNQUFNO1FBQ1I7S0FDRDtJQUVELHFCQUNFLDhEQUFDM0I7OzBCQUNDLDhEQUFDSCxtRUFBUUE7Ozs7OzBCQUNULDhEQUFDSzs7a0NBQ0MsOERBQUNDO3dCQUFrQnlCLG1CQUFnQjs7MENBQ2pDLDhEQUFDQztnQ0FBR0MsTUFBTTtnQ0FBQ0MsSUFBRzswQ0FBaUI7Ozs7OzswQ0FHL0IsOERBQUNqQyxrRkFBZUE7Z0NBQUNxQixPQUFPQTs7Ozs7Ozs7Ozs7O2tDQUUxQiw4REFBQ2Q7d0JBQWlCdUIsbUJBQWdCOzswQ0FDaEMsOERBQUNyQjtnQ0FBY3FCLG1CQUFnQjs7a0RBQzdCLDhEQUFDSTt3Q0FBR0YsTUFBTTt3Q0FBQ0MsSUFBRztrREFBc0I7Ozs7OztrREFHcEMsOERBQUNyQjtrREFBUU87Ozs7OztrREFDVCw4REFBQ0w7a0RBQWFNLEtBQUtlLElBQUksQ0FBQzs7Ozs7O2tEQUN4Qiw4REFBQ3BCO2tEQUNFUyxRQUFRWSxHQUFHLENBQUMsU0FBQ0MsUUFBUUM7aUVBQ3BCLDhEQUFDRDswREFDQyw0RUFBQ0U7b0RBQUloQixLQUFLYyxPQUFPWixRQUFRO29EQUFFQyxLQUFLVyxPQUFPWCxHQUFHOzs7Ozs7K0NBRC9CWTs7Ozs7Ozs7Ozs7a0RBS2pCLDhEQUFDdEI7a0RBQ0VXLFFBQVFTLEdBQUcsQ0FBQyxTQUFDSSxNQUFNRjtpRUFDbEIsOERBQUNyQjs7a0VBQ0MsOERBQUNpQjtrRUFBSU0sS0FBS1osTUFBTTs7Ozs7O2tFQUNoQiw4REFBQ2E7a0VBQUdELEtBQUtYLElBQUk7Ozs7Ozs7K0NBRkRTOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FPcEIsOERBQUMzQjtnQ0FBZW1CLG1CQUFnQjs7a0RBQzlCLDhEQUFDSTt3Q0FBR0YsTUFBTTt3Q0FBQ0MsSUFBRztrREFBaUI7Ozs7OztrREFHL0IsOERBQUNoQyw4RUFBYUE7d0NBQ1p5QyxRQUFROzRDQUFDOzRDQUFXOzRDQUFXOzRDQUFXOzRDQUFXO3lDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0U7T0FwRk14QjtBQXNGTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9vcmdhbmlzbXMvUHJvamVjdENvbnRhaW5lci9Qcm9qZWN0Q29udGFpbmVyLnRzeD8xNTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTURpdmlkZXIgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9EaXZpZGVyL01EaXZpZGVyXCI7XG5pbXBvcnQgQ29udGVudENhcm91c2VsIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvQ29udGVudENhcm91c2VsL0NvbnRlbnRDYXJvdXNlbFwiO1xuaW1wb3J0IENvbG9yU3dhdGNoZXMgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9Db2xvclN3YXRjaGVzL0NvbG9yU3dhdGNoZXNcIjtcblxuY29uc3QgQ29udGFpbmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuYDtcblxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbmA7XG5cbmNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIGZsZXg6IDAgMCA2MCU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcblxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBmbGV4OiAwIDAgNjByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IERldGFpbHNDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuYXNpZGVgXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGZsZXg6IDAgMCA5MiU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGZsZXg6IDAgMCAzMHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBDb2xvckNvbXBvbmVudCA9IHN0eWxlZC5hc2lkZWBcbiAgZmxleDogMCAwIDglO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4OiAwIDAgMTByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLUwpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuYDtcblxuY29uc3QgTG9vcGluZ1RleHRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuYDtcblxuY29uc3QgTG9vcGluZ1RleHQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjlmNTQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLU0pO1xuICBhbmltYXRpb246IHNjcm9sbCAxMHMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgQGtleWZyYW1lcyBzY3JvbGwge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIipcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU2Nyb2xsQXJlYSA9IHN0eWxlZC5kaXZgXG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZsZXg6IDE7XG5gO1xuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtTSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtTSk7XG4gIH1cbmA7XG5cbmNvbnN0IFByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gXCIxLjEuIGZyb250ZW5kIHByb2plY3RcIjtcbiAgY29uc3QgdGFncyA9IFtcbiAgICBcIlJlYWN0XCIsXG4gICAgXCJUYWlsd2luZFwiLFxuICAgIFwiTm9kZS5qc1wiLFxuICAgIFwiUmVhY3RcIixcbiAgICBcIlRhaWx3aW5kXCIsXG4gICAgXCJOb2RlLmpzXCIsXG4gICAgXCJSZWFjdFwiLFxuICAgIFwiVGFpbHdpbmRcIixcbiAgICBcIk5vZGUuanNcIixcbiAgICBcIlJlYWN0XCIsXG4gICAgXCJUYWlsd2luZFwiLFxuICAgIFwiTm9kZS5qc1wiLFxuICAgIFwiUmVhY3RcIixcbiAgICBcIlRhaWx3aW5kXCIsXG4gICAgXCJOb2RlLmpzXCIsXG4gIF07XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHsgdHlwZTogXCJpbWFnZVwiLCBzcmM6IFwiLzEuMS8xLnBuZ1wiIH0sXG4gICAgeyB0eXBlOiBcImltYWdlXCIsIHNyYzogXCIvaW5zdGEtdGVtcGxhdGUucG5nXCIgfSxcbiAgXTtcbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7IGltYWdlU3JjOiBcIi9iZWhhbmNlLnBuZ1wiLCBhbHQ6IFwiQmVoYW5jZVwiIH0sXG4gICAgeyBpbWFnZVNyYzogXCIvZ2l0aHViLnBuZ1wiLCBhbHQ6IFwiR2l0SHViXCIgfSxcbiAgXTtcblxuICBjb25zdCBjb250ZW50ID0gW1xuICAgIHtcbiAgICAgIGhlYWRlcjogXCJBKSBBYm91dFwiLFxuICAgICAgdGV4dDogXCJUaGlzIHByb2plY3QgaXMgYSBkZW1vbnN0cmF0aW9uIG9mIGEgbW9kZXJuIG1pbmltYWxpc3QgVUkgaW1wbGVtZW50ZWQgaW4gUmVhY3QuIFRoZSBwcmltYXJ5IGZvY3VzIHdhcyBvbiBjcmVhdGluZyBhIHVzZXItZnJpZW5kbHksIHZpc3VhbGx5IGFwcGVhbGluZyBpbnRlcmZhY2UgdGhhdCBwcmlvcml0aXplcyBlZmZpY2llbmN5IGFuZCBjbGFyaXR5LiBUaGUgZGV2ZWxvcG1lbnQgcHJvY2VzcyBpbnZvbHZlZCBhZGRyZXNzaW5nIG51bWVyb3VzIGNoYWxsZW5nZXMsIGluY2x1ZGluZyBvcHRpbWl6aW5nIHBlcmZvcm1hbmNlIGFuZCBlbnN1cmluZyBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXI6IFwiQikgUHJvY2Vzc1wiLFxuICAgICAgdGV4dDogXCJUaGlzIHByb2plY3QgaXMgYSBkZW1vbnN0cmF0aW9uIG9mIGEgbW9kZXJuIG1pbmltYWxpc3QgVUkgaW1wbGVtZW50ZWQgaW4gUmVhY3QuIFRoZSBwcmltYXJ5IGZvY3VzIHdhcyBvbiBjcmVhdGluZyBhIHVzZXItZnJpZW5kbHksIHZpc3VhbGx5IGFwcGVhbGluZyBpbnRlcmZhY2UgdGhhdCBwcmlvcml0aXplcyBlZmZpY2llbmN5IGFuZCBjbGFyaXR5LiBUaGUgZGV2ZWxvcG1lbnQgcHJvY2VzcyBpbnZvbHZlZCBhZGRyZXNzaW5nIG51bWVyb3VzIGNoYWxsZW5nZXMsIGluY2x1ZGluZyBvcHRpbWl6aW5nIHBlcmZvcm1hbmNlIGFuZCBlbnN1cmluZyBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJXcmFwcGVyPlxuICAgICAgPE1EaXZpZGVyIC8+XG4gICAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgICAgPENhcm91c2VsQ29udGFpbmVyIGFyaWEtbGFiZWxsZWRieT1cIm1lZGlhLWNhcm91c2VsXCI+XG4gICAgICAgICAgPGgxIGhpZGRlbiBpZD1cIm1lZGlhLWNhcm91c2VsXCI+XG4gICAgICAgICAgICBNZWRpYSBDYXJvdXNlbFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPENvbnRlbnRDYXJvdXNlbCBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgIDxEZXRhaWxzQ29udGFpbmVyIGFyaWEtbGFiZWxsZWRieT1cInByb2plY3QtbWVkaWFcIj5cbiAgICAgICAgICA8VGV4dENvbnRhaW5lciBhcmlhLWxhYmVsbGVkYnk9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8aDIgaGlkZGVuIGlkPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBQcm9qZWN0IENvbnRhaW5lclxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxIZWFkZXI+e3Byb2plY3ROYW1lfTwvSGVhZGVyPlxuICAgICAgICAgICAgPExvb3BpbmdUZXh0Pnt0YWdzLmpvaW4oXCJcXHRcIil9PC9Mb29waW5nVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICAgIHtidXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YnV0dG9uLmltYWdlU3JjfSBhbHQ9e2J1dHRvbi5hbHR9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9CdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICA8U2Nyb2xsQXJlYT5cbiAgICAgICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLmhlYWRlcn08L2gyPlxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsQXJlYT5cbiAgICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgICAgPENvbG9yQ29tcG9uZW50IGFyaWEtbGFiZWxsZWRieT1cImNvbG9yLXN3YXRjaGVzXCI+XG4gICAgICAgICAgICA8aDIgaGlkZGVuIGlkPVwiY29sb3Itc3dhdGNoZXNcIj5cbiAgICAgICAgICAgICAgQ29sb3IgU3dhdGNoZXNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8Q29sb3JTd2F0Y2hlc1xuICAgICAgICAgICAgICBjb2xvcnM9e1tcIiNFQ0UzRTFcIiwgXCIjRkI2MDA4XCIsIFwiI0ZBQzIwNVwiLCBcIiMwNDA0MDZcIiwgXCIjMDQwNDA2XCJdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbG9yQ29tcG9uZW50PlxuICAgICAgICA8L0RldGFpbHNDb250YWluZXI+XG4gICAgICA8L0NvbnRlbnRDb250YWluZXI+XG4gICAgPC9Db250YWluZXJXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIk1EaXZpZGVyIiwiQ29udGVudENhcm91c2VsIiwiQ29sb3JTd2F0Y2hlcyIsIkNvbnRhaW5lcldyYXBwZXIiLCJkaXYiLCJDb250ZW50Q29udGFpbmVyIiwiQ2Fyb3VzZWxDb250YWluZXIiLCJhcnRpY2xlIiwiRGV0YWlsc0NvbnRhaW5lciIsInNlY3Rpb24iLCJUZXh0Q29udGFpbmVyIiwiYXNpZGUiLCJDb2xvckNvbXBvbmVudCIsIkhlYWRlciIsIkxvb3BpbmdUZXh0Q29udGFpbmVyIiwiTG9vcGluZ1RleHQiLCJCdXR0b25Db250YWluZXIiLCJTY3JvbGxBcmVhIiwiU2VjdGlvbiIsIlByb2plY3RDb250YWluZXIiLCJwcm9qZWN0TmFtZSIsInRhZ3MiLCJpdGVtcyIsInR5cGUiLCJzcmMiLCJidXR0b25zIiwiaW1hZ2VTcmMiLCJhbHQiLCJjb250ZW50IiwiaGVhZGVyIiwidGV4dCIsImFyaWEtbGFiZWxsZWRieSIsImgxIiwiaGlkZGVuIiwiaWQiLCJoMiIsImpvaW4iLCJtYXAiLCJidXR0b24iLCJpbmRleCIsImltZyIsIml0ZW0iLCJwIiwiY29sb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/organisms/ProjectContainer/ProjectContainer.tsx\n"));

/***/ })

});