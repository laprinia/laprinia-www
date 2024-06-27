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

/***/ "./src/molecules/WaveTexture.tsx":
/*!***************************************!*\
  !*** ./src/molecules/WaveTexture.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WaveTexture = function(param) {\n    var texturePath = param.texturePath;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)().size; // To get the size of the viewport\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), intensity = _useState[0], setIntensity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), targetIntensity = _useState1[0], setTargetIntensity = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState2[0], setPlaneSize = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(texture) {\n            var aspectRatio = texture.image.width / texture.image.height;\n            var maxWidth = size.width * 0.013;\n            var maxHeight = size.height * 0.013;\n            console.log(texture.image.width, texture.image.height, aspectRatio);\n            console.log(size.width, size.height, aspectRatio);\n            var width = maxWidth;\n            var height = maxWidth / aspectRatio;\n            if (height > maxHeight) {\n                height = maxHeight;\n                width = maxHeight * aspectRatio;\n            }\n            console.log(width, height, aspectRatio);\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            var canvasCenter = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenter.x, 2) + Math.pow(clientY - canvasCenter.y, 2));\n            var newTargetIntensity = (distance - 300) * 1.5 / (1300 - 300);\n            setTargetIntensity(Math.max(0, Math.min(1.5, newTargetIntensity)));\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, [\n        texturePath,\n        size\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        setIntensity(function(prev) {\n            return prev + (targetIntensity - prev) * 0.05;\n        });\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x + time * 2); // Decreased frequency from 2 to 1\n            var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time * 2); // Decreased frequency from 3 to 1.5\n            var waveY1 = 0.1 * Math.sin(vertex.y * 2.5 + time * 2); // Decreased frequency from 5 to 2.5\n            vertex.z = intensity * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, _this);\n};\n_s(WaveTexture, \"r3B/ObQ5YdNuMntKRoh5yFN2RPY=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = WaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveTexture);\nvar _c;\n$RefreshReg$(_c, \"WaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxTQUFTLE1BQU14QixLQUFLeUIsR0FBRyxDQUFDSixPQUFPeEIsQ0FBQyxHQUFHa0IsT0FBTyxJQUFJLGtDQUFrQztZQUN0RixJQUFNVyxTQUFTLE9BQU8xQixLQUFLeUIsR0FBRyxDQUFDSixPQUFPeEIsQ0FBQyxHQUFHLE1BQU1rQixPQUFPLElBQUksb0NBQW9DO1lBQy9GLElBQU1ZLFNBQVMsTUFBTTNCLEtBQUt5QixHQUFHLENBQUNKLE9BQU92QixDQUFDLEdBQUcsTUFBTWlCLE9BQU8sSUFBSSxvQ0FBb0M7WUFFOUZNLE9BQU9PLENBQUMsR0FBR3RELFlBQWFrRCxDQUFBQSxTQUFTRSxTQUFTQyxNQUFLO1lBRS9DaEIsVUFBVWtCLE1BQU0sQ0FBQ1YsR0FBR0UsT0FBT3hCLENBQUMsRUFBRXdCLE9BQU92QixDQUFDLEVBQUV1QixPQUFPTyxDQUFDO1FBQ2xEO1FBRUFqQixVQUFVbUIsV0FBVyxHQUFHO0lBQzFCO0lBRUEscUJBQ0UsOERBQUM5RCxvREFBS0E7UUFBQytELEtBQUszRDtRQUFTNEQsTUFBTTtZQUFDdEQsU0FBUyxDQUFDLEVBQUU7WUFBRUEsU0FBUyxDQUFDLEVBQUU7WUFBRTtZQUFJO1NBQUc7a0JBQzdELDRFQUFDdUQ7WUFBcUJDLFFBQU87WUFBV0MsV0FBVztzQkFDakQsNEVBQUNDO2dCQUNDRixRQUFPO2dCQUNQRyxRQUFRLElBQUlwRSxnREFBbUIsR0FBR2EsSUFBSSxDQUFDWDs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRDtHQW5GTUQ7O1FBRWFILHdEQUFRQTtRQWlEekJELHdEQUFRQTs7O0tBbkRKSTtBQW9GTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9sZWN1bGVzL1dhdmVUZXh0dXJlLnRzeD80OTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IFBsYW5lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgV2F2ZVRleHR1cmUgPSAoeyB0ZXh0dXJlUGF0aCB9OiB7IHRleHR1cmVQYXRoOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBtZXNoUmVmID0gdXNlUmVmPFRIUkVFLk1lc2g+KG51bGwhKTtcbiAgY29uc3QgeyBzaXplIH0gPSB1c2VUaHJlZSgpOyAvLyBUbyBnZXQgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0XG4gIGNvbnN0IFtpbnRlbnNpdHksIHNldEludGVuc2l0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RhcmdldEludGVuc2l0eSwgc2V0VGFyZ2V0SW50ZW5zaXR5XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcGxhbmVTaXplLCBzZXRQbGFuZVNpemVdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyXT4oWzEsIDFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCwgKHRleHR1cmUpID0+IHtcbiAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGV4dHVyZS5pbWFnZS53aWR0aCAvIHRleHR1cmUuaW1hZ2UuaGVpZ2h0O1xuICAgICAgY29uc3QgbWF4V2lkdGggPSBzaXplLndpZHRoICogMC4wMTM7XG4gICAgICBjb25zdCBtYXhIZWlnaHQgPSBzaXplLmhlaWdodCAqIDAuMDEzO1xuXG4gICAgICBjb25zb2xlLmxvZyh0ZXh0dXJlLmltYWdlLndpZHRoLCB0ZXh0dXJlLmltYWdlLmhlaWdodCwgYXNwZWN0UmF0aW8pO1xuICAgICAgY29uc29sZS5sb2coc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIGFzcGVjdFJhdGlvKTtcblxuICAgICAgbGV0IHdpZHRoID0gbWF4V2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gbWF4V2lkdGggLyBhc3BlY3RSYXRpbztcblxuICAgICAgaWYgKGhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIHdpZHRoID0gbWF4SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0LCBhc3BlY3RSYXRpbyk7XG4gICAgICBzZXRQbGFuZVNpemUoW3dpZHRoLCBoZWlnaHRdKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICAgIGNvbnN0IGNhbnZhc0NlbnRlciA9IHtcbiAgICAgICAgeDogc2l6ZS53aWR0aCAvIDIsXG4gICAgICAgIHk6IHNpemUuaGVpZ2h0IC8gMixcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgIE1hdGgucG93KGNsaWVudFggLSBjYW52YXNDZW50ZXIueCwgMikgK1xuICAgICAgICAgIE1hdGgucG93KGNsaWVudFkgLSBjYW52YXNDZW50ZXIueSwgMilcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5ld1RhcmdldEludGVuc2l0eSA9ICgoZGlzdGFuY2UgLSAzMDApICogMS41KSAvICgxMzAwIC0gMzAwKTtcbiAgICAgIHNldFRhcmdldEludGVuc2l0eShNYXRoLm1heCgwLCBNYXRoLm1pbigxLjUsIG5ld1RhcmdldEludGVuc2l0eSkpKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIH07XG4gIH0sIFt0ZXh0dXJlUGF0aCwgc2l6ZV0pO1xuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBjb25zdCBtZXNoID0gbWVzaFJlZi5jdXJyZW50ITtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG4gICAgY29uc3QgdGltZSA9IERhdGUubm93KCkgKiAwLjAwMTtcbiAgICBzZXRJbnRlbnNpdHkoKHByZXYpID0+IHByZXYgKyAodGFyZ2V0SW50ZW5zaXR5IC0gcHJldikgKiAwLjA1KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIGkpO1xuXG4gICAgICBjb25zdCB3YXZlWDEgPSAwLjUgKiBNYXRoLnNpbih2ZXJ0ZXgueCArIHRpbWUgKiAyKTsgLy8gRGVjcmVhc2VkIGZyZXF1ZW5jeSBmcm9tIDIgdG8gMVxuICAgICAgY29uc3Qgd2F2ZVgyID0gMC4yNSAqIE1hdGguc2luKHZlcnRleC54ICogMS41ICsgdGltZSAqIDIpOyAvLyBEZWNyZWFzZWQgZnJlcXVlbmN5IGZyb20gMyB0byAxLjVcbiAgICAgIGNvbnN0IHdhdmVZMSA9IDAuMSAqIE1hdGguc2luKHZlcnRleC55ICogMi41ICsgdGltZSAqIDIpOyAvLyBEZWNyZWFzZWQgZnJlcXVlbmN5IGZyb20gNSB0byAyLjVcblxuICAgICAgdmVydGV4LnogPSBpbnRlbnNpdHkgKiAod2F2ZVgxICsgd2F2ZVgyICsgd2F2ZVkxKTtcblxuICAgICAgcG9zaXRpb25zLnNldFhZWihpLCB2ZXJ0ZXgueCwgdmVydGV4LnksIHZlcnRleC56KTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbnMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQbGFuZSByZWY9e21lc2hSZWZ9IGFyZ3M9e1twbGFuZVNpemVbMF0sIHBsYW5lU2l6ZVsxXSwgMzIsIDMyXX0+XG4gICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgYXR0YWNoPVwibWF0ZXJpYWxcIiB0cmFuc3BhcmVudD5cbiAgICAgICAgPHByaW1pdGl2ZVxuICAgICAgICAgIGF0dGFjaD1cIm1hcFwiXG4gICAgICAgICAgb2JqZWN0PXtuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQodGV4dHVyZVBhdGgpfVxuICAgICAgICAvPlxuICAgICAgPC9tZXNoU3RhbmRhcmRNYXRlcmlhbD5cbiAgICA8L1BsYW5lPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFdhdmVUZXh0dXJlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwiUGxhbmUiLCJUSFJFRSIsIldhdmVUZXh0dXJlIiwidGV4dHVyZVBhdGgiLCJtZXNoUmVmIiwic2l6ZSIsImludGVuc2l0eSIsInNldEludGVuc2l0eSIsInRhcmdldEludGVuc2l0eSIsInNldFRhcmdldEludGVuc2l0eSIsInBsYW5lU2l6ZSIsInNldFBsYW5lU2l6ZSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibG9hZCIsInRleHR1cmUiLCJhc3BlY3RSYXRpbyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiY2FudmFzQ2VudGVyIiwieCIsInkiLCJkaXN0YW5jZSIsIk1hdGgiLCJzcXJ0IiwicG93IiwibmV3VGFyZ2V0SW50ZW5zaXR5IiwibWF4IiwibWluIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZXNoIiwiY3VycmVudCIsInBvc2l0aW9ucyIsImdlb21ldHJ5IiwiYXR0cmlidXRlcyIsInBvc2l0aW9uIiwidGltZSIsIkRhdGUiLCJub3ciLCJwcmV2IiwiaSIsImNvdW50IiwidmVydGV4IiwiVmVjdG9yMyIsImZyb21CdWZmZXJBdHRyaWJ1dGUiLCJ3YXZlWDEiLCJzaW4iLCJ3YXZlWDIiLCJ3YXZlWTEiLCJ6Iiwic2V0WFlaIiwibmVlZHNVcGRhdGUiLCJyZWYiLCJhcmdzIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJhdHRhY2giLCJ0cmFuc3BhcmVudCIsInByaW1pdGl2ZSIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/molecules/WaveTexture.tsx\n"));

/***/ })

});