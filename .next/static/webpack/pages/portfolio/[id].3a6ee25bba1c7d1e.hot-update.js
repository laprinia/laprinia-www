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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  justify-content: space-around;\\n  height: 100%;\\n  width: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: \",\n        \";\\n  aspect-ratio: 1;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1(), function(param) {\n    var bgColor = param.bgColor;\n    return bgColor;\n});\n_c1 = Box;\nvar ColorSwatches = function(param) {\n    var colors = param.colors;\n    var getColorIntensity = function(color) {\n        var rgb = parseInt(color.slice(1), 16);\n        var r = rgb >> 16 & 0xff;\n        var g = rgb >> 8 & 0xff;\n        var b = rgb >> 0 & 0xff;\n        return r + g + b; // Simple sum of RGB values\n    };\n    var sortedColors = colors.sort(function(a, b) {\n        return getColorIntensity(a) - getColorIntensity(b);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: sortedColors.map(function(color, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n                bgColor: color\n            }, index, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ColorSwatches/ColorSwatches.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/ColorSwatches/ColorSwatches.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = ColorSwatches;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSwatches);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Box\");\n$RefreshReg$(_c2, \"ColorSwatches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL0NvbG9yU3dhdGNoZXMvQ29sb3JTd2F0Y2hlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQU12QyxJQUFNRSxZQUFZRCw2REFBVTtLQUF0QkM7QUFNTixJQUFNRSxNQUFNSCw2REFBVSxxQkFDQTtRQUFHSSxnQkFBQUE7V0FBY0E7O01BRGpDRDtBQUtOLElBQU1FLGdCQUEyQztRQUFHQyxlQUFBQTtJQUNsRCxJQUFNQyxvQkFBb0IsU0FBQ0M7UUFDekIsSUFBTUMsTUFBTUMsU0FBU0YsTUFBTUcsS0FBSyxDQUFDLElBQUk7UUFDckMsSUFBTUMsSUFBSSxPQUFRLEtBQU07UUFDeEIsSUFBTUMsSUFBSSxPQUFRLElBQUs7UUFDdkIsSUFBTUMsSUFBSSxPQUFRLElBQUs7UUFDdkIsT0FBT0YsSUFBSUMsSUFBSUMsR0FBRywyQkFBMkI7SUFDL0M7SUFFQSxJQUFNQyxlQUFlVCxPQUFPVSxJQUFJLENBQzlCLFNBQUNDLEdBQUdIO2VBQU1QLGtCQUFrQlUsS0FBS1Ysa0JBQWtCTzs7SUFHckQscUJBQ0UsOERBQUNiO2tCQUNFYyxhQUFhRyxHQUFHLENBQUMsU0FBQ1YsT0FBT1c7aUNBQ3hCLDhEQUFDaEI7Z0JBQWdCQyxTQUFTSTtlQUFoQlc7Ozs7Ozs7Ozs7O0FBSWxCO01BcEJNZDtBQXNCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9sZWN1bGVzL0NvbG9yU3dhdGNoZXMvQ29sb3JTd2F0Y2hlcy50c3g/MWQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgQ29sb3JCb3hlc1Byb3BzIHtcbiAgY29sb3JzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2PHsgYmdDb2xvcjogc3RyaW5nIH0+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGJnQ29sb3IgfSkgPT4gYmdDb2xvcn07XG4gIGFzcGVjdC1yYXRpbzogMTtcbmA7XG5cbmNvbnN0IENvbG9yU3dhdGNoZXM6IFJlYWN0LkZDPENvbG9yQm94ZXNQcm9wcz4gPSAoeyBjb2xvcnMgfSkgPT4ge1xuICBjb25zdCBnZXRDb2xvckludGVuc2l0eSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmdiID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMSksIDE2KTtcbiAgICBjb25zdCByID0gKHJnYiA+PiAxNikgJiAweGZmO1xuICAgIGNvbnN0IGcgPSAocmdiID4+IDgpICYgMHhmZjtcbiAgICBjb25zdCBiID0gKHJnYiA+PiAwKSAmIDB4ZmY7XG4gICAgcmV0dXJuIHIgKyBnICsgYjsgLy8gU2ltcGxlIHN1bSBvZiBSR0IgdmFsdWVzXG4gIH07XG5cbiAgY29uc3Qgc29ydGVkQ29sb3JzID0gY29sb3JzLnNvcnQoXG4gICAgKGEsIGIpID0+IGdldENvbG9ySW50ZW5zaXR5KGEpIC0gZ2V0Q29sb3JJbnRlbnNpdHkoYiksXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge3NvcnRlZENvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICA8Qm94IGtleT17aW5kZXh9IGJnQ29sb3I9e2NvbG9yfSAvPlxuICAgICAgKSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclN3YXRjaGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiQm94IiwiYmdDb2xvciIsIkNvbG9yU3dhdGNoZXMiLCJjb2xvcnMiLCJnZXRDb2xvckludGVuc2l0eSIsImNvbG9yIiwicmdiIiwicGFyc2VJbnQiLCJzbGljZSIsInIiLCJnIiwiYiIsInNvcnRlZENvbG9ycyIsInNvcnQiLCJhIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/ColorSwatches/ColorSwatches.tsx\n"));

/***/ })

});