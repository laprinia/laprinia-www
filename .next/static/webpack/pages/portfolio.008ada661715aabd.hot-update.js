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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: #ababab;\\n  overflow: hidden;\\n  width: 100%; /* Ensure it uses the full width of the grid item */\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 8px; /* Optional: adds rounded corners */\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: adds shadow for better visual appeal */\\n  transition: transform 0.3s ease; /* Optional: adds a smooth transition effect */\\n\\n  &:hover {\\n    transform: scale(1.05); /* Optional: slightly enlarges the card on hover */\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  padding-top: 75%; /* Maintains aspect ratio of 4:3 */\\n  position: relative;\\n  background-size: cover;\\n  background-position: center;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  text-align: left; /* Align text to the left margin */\\n  margin: 1rem 0;\\n  width: 100%; /* Ensure it spans the full width of the card */\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-weight: bold;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-weight: bold;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject5 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-weight: lighter;\\n  font-style: italic;\\n  margin: 0.5rem 0;\\n\"\n    ]);\n    _templateObject6 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nvar CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].article(_templateObject());\n_c = CardContainer;\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure(_templateObject1());\n_c1 = ImageContainer;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figcaption(_templateObject2());\n_c2 = TextContainer;\nvar HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = HeaderContainer;\nvar ProjectName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h2(_templateObject4());\n_c4 = ProjectName;\nvar Year = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3(_templateObject5());\n_c5 = Year;\nvar TechText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject6());\n_c6 = TechText;\nvar ProjectCard = function(param) {\n    var projectName = param.projectName, year = param.year, imagePath = param.imagePath, gifPath = param.gifPath, techText = param.techText;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), isHovered = _useState[0], setIsHovered = _useState[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardContainer, {\n        \"aria-labelledby\": \"project-\".concat(projectName),\n        onMouseEnter: function() {\n            return setIsHovered(true);\n        },\n        onMouseLeave: function() {\n            return setIsHovered(false);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageContainer, {\n                style: {\n                    backgroundImage: \"url(\".concat(isHovered ? gifPath : imagePath, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextContainer, {\n                id: \"project-\".concat(projectName),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectName, {\n                                children: projectName\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Year, {\n                                children: year\n                            }, void 0, false, {\n                                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TechText, {\n                        children: [\n                            \"/*\",\n                            techText,\n                            \"*/\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ProjectCard/ProjectCard.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProjectCard, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c7 = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c1, \"ImageContainer\");\n$RefreshReg$(_c2, \"TextContainer\");\n$RefreshReg$(_c3, \"HeaderContainer\");\n$RefreshReg$(_c4, \"ProjectName\");\n$RefreshReg$(_c5, \"Year\");\n$RefreshReg$(_c6, \"TechText\");\n$RefreshReg$(_c7, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL1Byb2plY3RDYXJkL1Byb2plY3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7QUFFdkMsSUFBTUcsZ0JBQWdCRCxpRUFBYztLQUE5QkM7QUFpQk4sSUFBTUUsaUJBQWlCSCxnRUFBYTtNQUE5Qkc7QUFTTixJQUFNRSxnQkFBZ0JMLG9FQUFpQjtNQUFqQ0s7QUFNTixJQUFNRSxrQkFBa0JQLDZEQUFVO01BQTVCTztBQU1OLElBQU1FLGNBQWNULDREQUFTO01BQXZCUztBQUtOLElBQU1FLE9BQU9YLDREQUFTO01BQWhCVztBQUtOLElBQU1FLFdBQVdiLDJEQUFRO01BQW5CYTtBQU1OLElBQU1FLGNBQWM7UUFDbEJDLG9CQUFBQSxhQUNBQyxhQUFBQSxNQUNBQyxrQkFBQUEsV0FDQUMsZ0JBQUFBLFNBQ0FDLGlCQUFBQTs7SUFRQSxJQUFrQ3JCLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUFwQ3NCLFlBQTJCdEIsY0FBaEJ1QixlQUFnQnZCO0lBRWxDLHFCQUNFLDhEQUFDRTtRQUNDc0IsbUJBQWlCLFdBQXVCLE9BQVpQO1FBQzVCUSxjQUFjO21CQUFNRixhQUFhOztRQUNqQ0csY0FBYzttQkFBTUgsYUFBYTs7OzBCQUVqQyw4REFBQ25CO2dCQUNDdUIsT0FBTztvQkFBRUMsaUJBQWlCLE9BQXVDLE9BQWhDTixZQUFZRixVQUFVRCxXQUFVO2dCQUFHOzs7Ozs7MEJBRXRFLDhEQUFDYjtnQkFBY3VCLElBQUksV0FBdUIsT0FBWlo7O2tDQUM1Qiw4REFBQ1Q7OzBDQUNDLDhEQUFDRTswQ0FBYU87Ozs7OzswQ0FDZCw4REFBQ0w7MENBQU1NOzs7Ozs7Ozs7Ozs7a0NBRVQsOERBQUNKOzs0QkFBUzs0QkFBR087NEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0FqQ01MO01BQUFBO0FBbUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2xlY3VsZXMvUHJvamVjdENhcmQvUHJvamVjdENhcmQudHN4Pzc0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgaXQgdXNlcyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgZ3JpZCBpdGVtICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIE9wdGlvbmFsOiBhZGRzIHJvdW5kZWQgY29ybmVycyAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBPcHRpb25hbDogYWRkcyBzaGFkb3cgZm9yIGJldHRlciB2aXN1YWwgYXBwZWFsICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7IC8qIE9wdGlvbmFsOiBhZGRzIGEgc21vb3RoIHRyYW5zaXRpb24gZWZmZWN0ICovXG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogT3B0aW9uYWw6IHNsaWdodGx5IGVubGFyZ2VzIHRoZSBjYXJkIG9uIGhvdmVyICovXG4gIH1cbmA7XG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmZpZ3VyZWBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA3NSU7IC8qIE1haW50YWlucyBhc3BlY3QgcmF0aW8gb2YgNDozICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmZpZ2NhcHRpb25gXG4gIHRleHQtYWxpZ246IGxlZnQ7IC8qIEFsaWduIHRleHQgdG8gdGhlIGxlZnQgbWFyZ2luICovXG4gIG1hcmdpbjogMXJlbSAwO1xuICB3aWR0aDogMTAwJTsgLyogRW5zdXJlIGl0IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBjYXJkICovXG5gO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBQcm9qZWN0TmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IFllYXIgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBUZWNoVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuYDtcblxuY29uc3QgUHJvamVjdENhcmQgPSAoe1xuICBwcm9qZWN0TmFtZSxcbiAgeWVhcixcbiAgaW1hZ2VQYXRoLFxuICBnaWZQYXRoLFxuICB0ZWNoVGV4dCxcbn06IHtcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbiAgeWVhcjogc3RyaW5nO1xuICBpbWFnZVBhdGg6IHN0cmluZztcbiAgZ2lmUGF0aDogc3RyaW5nO1xuICB0ZWNoVGV4dDogc3RyaW5nO1xufSkgPT4ge1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRDb250YWluZXJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT17YHByb2plY3QtJHtwcm9qZWN0TmFtZX1gfVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgPlxuICAgICAgPEltYWdlQ29udGFpbmVyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2lzSG92ZXJlZCA/IGdpZlBhdGggOiBpbWFnZVBhdGh9KWAgfX1cbiAgICAgIC8+XG4gICAgICA8VGV4dENvbnRhaW5lciBpZD17YHByb2plY3QtJHtwcm9qZWN0TmFtZX1gfT5cbiAgICAgICAgPEhlYWRlckNvbnRhaW5lcj5cbiAgICAgICAgICA8UHJvamVjdE5hbWU+e3Byb2plY3ROYW1lfTwvUHJvamVjdE5hbWU+XG4gICAgICAgICAgPFllYXI+e3llYXJ9PC9ZZWFyPlxuICAgICAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgICAgICAgPFRlY2hUZXh0Pi8qe3RlY2hUZXh0fSovPC9UZWNoVGV4dD5cbiAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICA8L0NhcmRDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ2FyZENvbnRhaW5lciIsImFydGljbGUiLCJJbWFnZUNvbnRhaW5lciIsImZpZ3VyZSIsIlRleHRDb250YWluZXIiLCJmaWdjYXB0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwiZGl2IiwiUHJvamVjdE5hbWUiLCJoMiIsIlllYXIiLCJoMyIsIlRlY2hUZXh0IiwicCIsIlByb2plY3RDYXJkIiwicHJvamVjdE5hbWUiLCJ5ZWFyIiwiaW1hZ2VQYXRoIiwiZ2lmUGF0aCIsInRlY2hUZXh0IiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiYXJpYS1sYWJlbGxlZGJ5Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/molecules/ProjectCard/ProjectCard.tsx\n"));

/***/ })

});