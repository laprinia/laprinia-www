"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/styles/globalStyle.ts":
/*!***********************************!*\
  !*** ./src/styles/globalStyle.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalStyle: function() { return /* binding */ GlobalStyle; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts */ \"./src/styles/fonts.ts\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    :root {\\n        --font-body: \",\n        \";\\n        --font-heading: \",\n        \";\\n        --font-weight-lighter: 200;\\n        --font-weight-light: 400;\\n        --font-weight-regular: 500;\\n        --font-weight-bold: 700;\\n        --font-size-XL: 5rem;\\n        --font-size-L: 1.25rem;\\n        --font-size-L-heading: 2rem;\\n        --font-size-M: 1.0rem;\\n        --font-size-M-heading: 1.5rem;\\n        --font-size-S: 0.875rem;\\n        --font-size-S-heading: 1.24rem;\\n        --background-color: #F6F6F6;\\n        --accent-color: #0141D5;\\n    }\\n\\n    * {\\n        margin: 0;\\n        padding: 0;\\n        box-sizing: border-box;\\n    }\\n\\n    body {\\n        background-color: var(--background-color);\\n        font-family: var(--font-body),sans-serif;\\n        //cursor: url('/cursor.png') 4 4, auto;  /* Hardcoded cursor size */\\n    }\\n\\n    *:hover, *:active, *:focus {\\n        //cursor: url('/cursor.png') 4 4, auto;  /* Hardcoded cursor size */\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(_templateObject(), _fonts__WEBPACK_IMPORTED_MODULE_1__.robotoFlex.style.fontFamily, _fonts__WEBPACK_IMPORTED_MODULE_1__.raleway.style.fontFamily);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbFN0eWxlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDUjtBQUV2QyxJQUFNRyxjQUFjSCxvRUFBaUJBLG9CQUVyQkUsOENBQVVBLENBQUNFLEtBQUssQ0FBQ0MsVUFBVSxFQUN4QkosMkNBQU9BLENBQUNHLEtBQUssQ0FBQ0MsVUFBVSxFQStCaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxTdHlsZS50cz8yY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyByYWxld2F5LCByb2JvdG9GbGV4IH0gZnJvbSBcIi4vZm9udHNcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgOnJvb3Qge1xuICAgICAgICAtLWZvbnQtYm9keTogJHtyb2JvdG9GbGV4LnN0eWxlLmZvbnRGYW1pbHl9O1xuICAgICAgICAtLWZvbnQtaGVhZGluZzogJHtyYWxld2F5LnN0eWxlLmZvbnRGYW1pbHl9O1xuICAgICAgICAtLWZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IDIwMDtcbiAgICAgICAgLS1mb250LXdlaWdodC1saWdodDogNDAwO1xuICAgICAgICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcbiAgICAgICAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gICAgICAgIC0tZm9udC1zaXplLVhMOiA1cmVtO1xuICAgICAgICAtLWZvbnQtc2l6ZS1MOiAxLjI1cmVtO1xuICAgICAgICAtLWZvbnQtc2l6ZS1MLWhlYWRpbmc6IDJyZW07XG4gICAgICAgIC0tZm9udC1zaXplLU06IDEuMHJlbTtcbiAgICAgICAgLS1mb250LXNpemUtTS1oZWFkaW5nOiAxLjVyZW07XG4gICAgICAgIC0tZm9udC1zaXplLVM6IDAuODc1cmVtO1xuICAgICAgICAtLWZvbnQtc2l6ZS1TLWhlYWRpbmc6IDEuMjRyZW07XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbiAgICAgICAgLS1hY2NlbnQtY29sb3I6ICMwMTQxRDU7XG4gICAgfVxuXG4gICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJvZHkpLHNhbnMtc2VyaWY7XG4gICAgICAgIC8vY3Vyc29yOiB1cmwoJy9jdXJzb3IucG5nJykgNCA0LCBhdXRvOyAgLyogSGFyZGNvZGVkIGN1cnNvciBzaXplICovXG4gICAgfVxuXG4gICAgKjpob3ZlciwgKjphY3RpdmUsICo6Zm9jdXMge1xuICAgICAgICAvL2N1cnNvcjogdXJsKCcvY3Vyc29yLnBuZycpIDQgNCwgYXV0bzsgIC8qIEhhcmRjb2RlZCBjdXJzb3Igc2l6ZSAqL1xuICAgIH1cbmA7XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJyYWxld2F5Iiwicm9ib3RvRmxleCIsIkdsb2JhbFN0eWxlIiwic3R5bGUiLCJmb250RmFtaWx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/globalStyle.ts\n"));

/***/ })

});