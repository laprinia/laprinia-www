"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./src/molecules/ProjectCard/ProjectCard.tsx":
/*!***************************************************!*\
  !*** ./src/molecules/ProjectCard/ProjectCard.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: #ababab;\\n  overflow: hidden;\\n  width: 100%;\\n  height: 240px; /* Set a fixed height for the card */\\n  padding: 0.5rem 1rem; /* Add padding inside the card */\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between; /* Space between the image and text */\\n  transition: transform 0.3s ease;\\n\\n  &:hover {\\n    transform: scale(1.15);\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: 70%; /* Set a fixed height for the image container */\\n  margin: 0;\\n  background-size: cover;\\n  background-position: center;\\n  position: relative;\\n  background-image: url(\",\n        \"); /* Default image */\\n\\n  img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover; /* Ensures the image covers the container without distortion */\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  text-align: left;\\n  margin: 0;\\n  width: 100%;\\n  height: 30%; /* Ensures it occupies the remaining space of the card */\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end; /* Align text to the bottom */\\n  overflow: hidden;\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: var(--font-heading);\\n  font-size: var(--font-size-M);\\n  font-weight: var(--font-weight-regular);\\n  margin: 0;\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: var(--font-heading);\\n  font-size: var(--font-size-M);\\n  font-weight: var(--font-weight-regular);\\n  margin: 0;\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: var(--font-heading);\\n  font-size: var(--font-size-M);\\n  font-weight: var(--font-weight-regular);\\n  margin: 0.5rem 0;\\n\"\n    ]);\n    _templateObject6 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nvar CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].article(_templateObject());\n_c = CardContainer;\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure(_templateObject1(), function(props) {\n    return props.imagePath;\n});\n_c1 = ImageContainer;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figcaption(_templateObject2());\n_c2 = TextContainer;\nvar HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = HeaderContainer;\nvar ProjectName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h2(_templateObject4());\n_c4 = ProjectName;\nvar Year = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3(_templateObject5());\n_c5 = Year;\nvar TechText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject6());\n_c6 = TechText;\nvar ProjectCard = function(param) {\n    var projectName = param.projectName, year = param.year, imagePath = param.imagePath, gifPath = param.gifPath, techText = param.techText;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), isHovered = _useState[0], setIsHovered = _useState[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardContainer, {\n        \"aria-labelledby\": \"project-\".concat(projectName),\n        onMouseEnter: function() {\n            return setIsHovered(true);\n        },\n        onMouseLeave: function() {\n            return setIsHovered(false);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageContainer, {\n                imagePath: isHovered ? gifPath : imagePath\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextContainer, {\n                id: \"project-\".concat(projectName),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectName, {\n                                children: projectName\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Year, {\n                                children: year\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TechText, {\n                        children: techText\n                    }, void 0, false, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProjectCard, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c7 = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c1, \"ImageContainer\");\n$RefreshReg$(_c2, \"TextContainer\");\n$RefreshReg$(_c3, \"HeaderContainer\");\n$RefreshReg$(_c4, \"ProjectName\");\n$RefreshReg$(_c5, \"Year\");\n$RefreshReg$(_c6, \"TechText\");\n$RefreshReg$(_c7, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL1Byb2plY3RDYXJkL1Byb2plY3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNEO0FBRXZDLElBQU1HLGdCQUFnQkQsaUVBQWM7S0FBOUJDO0FBZ0JOLElBQU1FLGlCQUFpQkgsZ0VBQWEscUJBT1YsU0FBQ0s7V0FBVUEsTUFBTUMsU0FBUzs7TUFQOUNIO0FBZ0JOLElBQU1JLGdCQUFnQlAsb0VBQWlCO01BQWpDTztBQVdOLElBQU1FLGtCQUFrQlQsNkRBQVU7TUFBNUJTO0FBTU4sSUFBTUUsY0FBY1gsNERBQVM7TUFBdkJXO0FBT04sSUFBTUUsT0FBT2IsNERBQVM7TUFBaEJhO0FBT04sSUFBTUUsV0FBV2YsMkRBQVE7TUFBbkJlO0FBT04sSUFBTUUsY0FBYztRQUNsQkMsb0JBQUFBLGFBQ0FDLGFBQUFBLE1BQ0FiLGtCQUFBQSxXQUNBYyxnQkFBQUEsU0FDQUMsaUJBQUFBOztJQVFBLElBQWtDdEIsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXBDdUIsWUFBMkJ2QixjQUFoQndCLGVBQWdCeEI7SUFFbEMscUJBQ0UsOERBQUNFO1FBQ0N1QixtQkFBaUIsV0FBdUIsT0FBWk47UUFDNUJPLGNBQWM7bUJBQU1GLGFBQWE7O1FBQ2pDRyxjQUFjO21CQUFNSCxhQUFhOzs7MEJBRWpDLDhEQUFDcEI7Z0JBQ0NHLFdBQVdnQixZQUFZRixVQUFVZDs7Ozs7OzBCQUVuQyw4REFBQ0M7Z0JBQWNvQixJQUFJLFdBQXVCLE9BQVpUOztrQ0FDNUIsOERBQUNUOzswQ0FDQyw4REFBQ0U7MENBQWFPOzs7Ozs7MENBQ2QsOERBQUNMOzBDQUFNTTs7Ozs7Ozs7Ozs7O2tDQUVULDhEQUFDSjtrQ0FBVU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtHQWpDTUo7TUFBQUE7QUFtQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vbGVjdWxlcy9Qcm9qZWN0Q2FyZC9Qcm9qZWN0Q2FyZC50c3g/NzQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjQwcHg7IC8qIFNldCBhIGZpeGVkIGhlaWdodCBmb3IgdGhlIGNhcmQgKi9cbiAgcGFkZGluZzogMC41cmVtIDFyZW07IC8qIEFkZCBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIGJldHdlZW4gdGhlIGltYWdlIGFuZCB0ZXh0ICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgfVxuYDtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZmlndXJlYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MCU7IC8qIFNldCBhIGZpeGVkIGhlaWdodCBmb3IgdGhlIGltYWdlIGNvbnRhaW5lciAqL1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmltYWdlUGF0aH0pOyAvKiBEZWZhdWx0IGltYWdlICovXG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgY29udGFpbmVyIHdpdGhvdXQgZGlzdG9ydGlvbiAqL1xuICB9XG5gO1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmZpZ2NhcHRpb25gXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlOyAvKiBFbnN1cmVzIGl0IG9jY3VwaWVzIHRoZSByZW1haW5pbmcgc3BhY2Ugb2YgdGhlIGNhcmQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLyogQWxpZ24gdGV4dCB0byB0aGUgYm90dG9tICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBQcm9qZWN0TmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLU0pO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IFllYXIgPSBzdHlsZWQuaDNgXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWRpbmcpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1NKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBUZWNoVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtTSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbmA7XG5cbmNvbnN0IFByb2plY3RDYXJkID0gKHtcbiAgcHJvamVjdE5hbWUsXG4gIHllYXIsXG4gIGltYWdlUGF0aCxcbiAgZ2lmUGF0aCxcbiAgdGVjaFRleHQsXG59OiB7XG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XG4gIHllYXI6IHN0cmluZztcbiAgaW1hZ2VQYXRoOiBzdHJpbmc7XG4gIGdpZlBhdGg6IHN0cmluZztcbiAgdGVjaFRleHQ6IHN0cmluZztcbn0pID0+IHtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkQ29udGFpbmVyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2Bwcm9qZWN0LSR7cHJvamVjdE5hbWV9YH1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgID5cbiAgICAgIDxJbWFnZUNvbnRhaW5lclxuICAgICAgICBpbWFnZVBhdGg9e2lzSG92ZXJlZCA/IGdpZlBhdGggOiBpbWFnZVBhdGh9XG4gICAgICA+PC9JbWFnZUNvbnRhaW5lcj5cbiAgICAgIDxUZXh0Q29udGFpbmVyIGlkPXtgcHJvamVjdC0ke3Byb2plY3ROYW1lfWB9PlxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICAgIDxQcm9qZWN0TmFtZT57cHJvamVjdE5hbWV9PC9Qcm9qZWN0TmFtZT5cbiAgICAgICAgICA8WWVhcj57eWVhcn08L1llYXI+XG4gICAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICAgICA8VGVjaFRleHQ+e3RlY2hUZXh0fTwvVGVjaFRleHQ+XG4gICAgICA8L1RleHRDb250YWluZXI+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkNhcmRDb250YWluZXIiLCJhcnRpY2xlIiwiSW1hZ2VDb250YWluZXIiLCJmaWd1cmUiLCJwcm9wcyIsImltYWdlUGF0aCIsIlRleHRDb250YWluZXIiLCJmaWdjYXB0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwiZGl2IiwiUHJvamVjdE5hbWUiLCJoMiIsIlllYXIiLCJoMyIsIlRlY2hUZXh0IiwicCIsIlByb2plY3RDYXJkIiwicHJvamVjdE5hbWUiLCJ5ZWFyIiwiZ2lmUGF0aCIsInRlY2hUZXh0IiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiYXJpYS1sYWJlbGxlZGJ5Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/ProjectCard/ProjectCard.tsx\n"));

/***/ }),

/***/ "./src/organisms/PortfolioContainer/PortfolioContainer.tsx":
/*!*****************************************************************!*\
  !*** ./src/organisms/PortfolioContainer/PortfolioContainer.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0;\\n  padding: 1rem 1rem;\\n  width: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  margin-top: 2rem;\\n  margin-bottom: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: var(--font-heading);\\n  font-size: var(--font-size-L);\\n  font-weight: var(--font-weight-bold);\\n  color: var(--accent-color);\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 0.25rem;\\n  background-color: var(--accent-color);\\n  border-radius: 1rem;\\n  margin: 1rem 0;\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n  gap: 5rem;\\n  width: 100%;\\n  box-sizing: border-box;\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\nvar ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = ContainerWrapper;\nvar CategoryHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = CategoryHeader;\nvar CategoryText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = CategoryText;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = Line;\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = GridContainer;\nvar PortfolioContainer = function(param) {\n    var category = param.category, no = param.no, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CategoryHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CategoryText, {\n                    children: \"\".concat(no, \") \").concat(category)\n                }, void 0, false, {\n                    fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/PortfolioContainer/PortfolioContainer.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/PortfolioContainer/PortfolioContainer.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Line, {}, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/PortfolioContainer/PortfolioContainer.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/PortfolioContainer/PortfolioContainer.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/organisms/PortfolioContainer/PortfolioContainer.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_c5 = PortfolioContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioContainer);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ContainerWrapper\");\n$RefreshReg$(_c1, \"CategoryHeader\");\n$RefreshReg$(_c2, \"CategoryText\");\n$RefreshReg$(_c3, \"Line\");\n$RefreshReg$(_c4, \"GridContainer\");\n$RefreshReg$(_c5, \"PortfolioContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JnYW5pc21zL1BvcnRmb2xpb0NvbnRhaW5lci9Qb3J0Zm9saW9Db250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRXZDLElBQU1DLG1CQUFtQkQsNkRBQVU7S0FBN0JDO0FBTU4sSUFBTUUsaUJBQWlCSCw2REFBVTtNQUEzQkc7QUFRTixJQUFNQyxlQUFlSiw2REFBVTtNQUF6Qkk7QUFPTixJQUFNQyxPQUFPTCw2REFBVTtNQUFqQks7QUFPTixJQUFNQyxnQkFBZ0JOLDZEQUFVO01BQTFCTTtBQVFOLElBQU1DLHFCQUFxQjtRQUN6QkMsaUJBQUFBLFVBQ0FDLFdBQUFBLElBQ0FDLGlCQUFBQTtJQU1BLHFCQUNFLDhEQUFDVDs7MEJBQ0MsOERBQUNFOzBCQUNDLDRFQUFDQzs4QkFBYyxHQUFVSSxPQUFQQyxJQUFHLE1BQWEsT0FBVEQ7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ0g7Ozs7OzBCQUNELDhEQUFDQzswQkFBZUk7Ozs7Ozs7Ozs7OztBQUd0QjtNQWxCTUg7QUFvQk4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvb3JnYW5pc21zL1BvcnRmb2xpb0NvbnRhaW5lci9Qb3J0Zm9saW9Db250YWluZXIudHN4P2MwYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29udGFpbmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENhdGVnb3J5SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmNvbnN0IENhdGVnb3J5VGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWRpbmcpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1MKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbmA7XG5cbmNvbnN0IExpbmUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuYDtcblxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBnYXA6IDVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuY29uc3QgUG9ydGZvbGlvQ29udGFpbmVyID0gKHtcbiAgY2F0ZWdvcnksXG4gIG5vLFxuICBjaGlsZHJlbixcbn06IHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgbm86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyV3JhcHBlcj5cbiAgICAgIDxDYXRlZ29yeUhlYWRlcj5cbiAgICAgICAgPENhdGVnb3J5VGV4dD57YCR7bm99KSAke2NhdGVnb3J5fWB9PC9DYXRlZ29yeVRleHQ+XG4gICAgICA8L0NhdGVnb3J5SGVhZGVyPlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxHcmlkQ29udGFpbmVyPntjaGlsZHJlbn08L0dyaWRDb250YWluZXI+XG4gICAgPC9Db250YWluZXJXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lcldyYXBwZXIiLCJkaXYiLCJDYXRlZ29yeUhlYWRlciIsIkNhdGVnb3J5VGV4dCIsIkxpbmUiLCJHcmlkQ29udGFpbmVyIiwiUG9ydGZvbGlvQ29udGFpbmVyIiwiY2F0ZWdvcnkiLCJubyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/organisms/PortfolioContainer/PortfolioContainer.tsx\n"));

/***/ })

});