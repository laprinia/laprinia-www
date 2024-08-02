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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n// ColorBoxes.tsx\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: space-between;\\n  height: 100%; /* Inherit height from the parent */\\n  width: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: \",\n        \";\\n  flex: 1; /* Allow flex-grow to take up available space */\\n  aspect-ratio: 1; /* Maintain square aspect ratio */\\n  margin: 0 0.5rem; /* Add some margin for spacing */\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1(), function(param) {\n    var bgColor = param.bgColor;\n    return bgColor;\n});\n_c1 = Box;\nvar ColorSwatches = function(param) {\n    var colors = param.colors;\n    // Function to calculate color intensity\n    var getColorIntensity = function(color) {\n        var rgb = parseInt(color.slice(1), 16); // Convert hex to integer\n        var r = rgb >> 16 & 0xff;\n        var g = rgb >> 8 & 0xff;\n        var b = rgb >> 0 & 0xff;\n        return r + g + b; // Simple sum of RGB values\n    };\n    // Sort colors by intensity\n    var sortedColors = colors.sort(function(a, b) {\n        return getColorIntensity(a) - getColorIntensity(b);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: sortedColors.map(function(color, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n                bgColor: color\n            }, index, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ColorSwatches/ColorSwatches.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ColorSwatches/ColorSwatches.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = ColorSwatches;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSwatches);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Box\");\n$RefreshReg$(_c2, \"ColorSwatches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL0NvbG9yU3dhdGNoZXMvQ29sb3JTd2F0Y2hlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDUztBQUNhO0FBTXZDLElBQU1FLFlBQVlELDZEQUFVO0tBQXRCQztBQU9OLElBQU1FLE1BQU1ILDZEQUFVLHFCQUNBO1FBQUdJLGdCQUFBQTtXQUFjQTs7TUFEakNEO0FBT04sSUFBTUUsZ0JBQTJDO1FBQUdDLGVBQUFBO0lBQ2xELHdDQUF3QztJQUN4QyxJQUFNQyxvQkFBb0IsU0FBQ0M7UUFDekIsSUFBTUMsTUFBTUMsU0FBU0YsTUFBTUcsS0FBSyxDQUFDLElBQUksS0FBSyx5QkFBeUI7UUFDbkUsSUFBTUMsSUFBSSxPQUFRLEtBQU07UUFDeEIsSUFBTUMsSUFBSSxPQUFRLElBQUs7UUFDdkIsSUFBTUMsSUFBSSxPQUFRLElBQUs7UUFDdkIsT0FBT0YsSUFBSUMsSUFBSUMsR0FBRywyQkFBMkI7SUFDL0M7SUFFQSwyQkFBMkI7SUFDM0IsSUFBTUMsZUFBZVQsT0FBT1UsSUFBSSxDQUM5QixTQUFDQyxHQUFHSDtlQUFNUCxrQkFBa0JVLEtBQUtWLGtCQUFrQk87O0lBR3JELHFCQUNFLDhEQUFDYjtrQkFDRWMsYUFBYUcsR0FBRyxDQUFDLFNBQUNWLE9BQU9XO2lDQUN4Qiw4REFBQ2hCO2dCQUFnQkMsU0FBU0k7ZUFBaEJXOzs7Ozs7Ozs7OztBQUlsQjtNQXRCTWQ7QUF3Qk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vbGVjdWxlcy9Db2xvclN3YXRjaGVzL0NvbG9yU3dhdGNoZXMudHN4PzFkODMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JCb3hlcy50c3hcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBDb2xvckJveGVzUHJvcHMge1xuICBjb2xvcnM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTsgLyogSW5oZXJpdCBoZWlnaHQgZnJvbSB0aGUgcGFyZW50ICovXG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdjx7IGJnQ29sb3I6IHN0cmluZyB9PmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBiZ0NvbG9yIH0pID0+IGJnQ29sb3J9O1xuICBmbGV4OiAxOyAvKiBBbGxvdyBmbGV4LWdyb3cgdG8gdGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cbiAgYXNwZWN0LXJhdGlvOiAxOyAvKiBNYWludGFpbiBzcXVhcmUgYXNwZWN0IHJhdGlvICovXG4gIG1hcmdpbjogMCAwLjVyZW07IC8qIEFkZCBzb21lIG1hcmdpbiBmb3Igc3BhY2luZyAqL1xuYDtcblxuY29uc3QgQ29sb3JTd2F0Y2hlczogUmVhY3QuRkM8Q29sb3JCb3hlc1Byb3BzPiA9ICh7IGNvbG9ycyB9KSA9PiB7XG4gIC8vIEZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBjb2xvciBpbnRlbnNpdHlcbiAgY29uc3QgZ2V0Q29sb3JJbnRlbnNpdHkgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJnYiA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDEpLCAxNik7IC8vIENvbnZlcnQgaGV4IHRvIGludGVnZXJcbiAgICBjb25zdCByID0gKHJnYiA+PiAxNikgJiAweGZmO1xuICAgIGNvbnN0IGcgPSAocmdiID4+IDgpICYgMHhmZjtcbiAgICBjb25zdCBiID0gKHJnYiA+PiAwKSAmIDB4ZmY7XG4gICAgcmV0dXJuIHIgKyBnICsgYjsgLy8gU2ltcGxlIHN1bSBvZiBSR0IgdmFsdWVzXG4gIH07XG5cbiAgLy8gU29ydCBjb2xvcnMgYnkgaW50ZW5zaXR5XG4gIGNvbnN0IHNvcnRlZENvbG9ycyA9IGNvbG9ycy5zb3J0KFxuICAgIChhLCBiKSA9PiBnZXRDb2xvckludGVuc2l0eShhKSAtIGdldENvbG9ySW50ZW5zaXR5KGIpLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHtzb3J0ZWRDb2xvcnMubWFwKChjb2xvciwgaW5kZXgpID0+IChcbiAgICAgICAgPEJveCBrZXk9e2luZGV4fSBiZ0NvbG9yPXtjb2xvcn0gLz5cbiAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JTd2F0Y2hlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkJveCIsImJnQ29sb3IiLCJDb2xvclN3YXRjaGVzIiwiY29sb3JzIiwiZ2V0Q29sb3JJbnRlbnNpdHkiLCJjb2xvciIsInJnYiIsInBhcnNlSW50Iiwic2xpY2UiLCJyIiwiZyIsImIiLCJzb3J0ZWRDb2xvcnMiLCJzb3J0IiwiYSIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/molecules/ColorSwatches/ColorSwatches.tsx\n"));

/***/ })

});