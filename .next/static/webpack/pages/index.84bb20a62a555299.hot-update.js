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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WaveTexture = function(param) {\n    var texturePath = param.texturePath;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)(), size = _useThree.size, viewport = _useThree.viewport;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState[0], setPlaneSize = _useState[1];\n    var targetIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var currentIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var canvasCenterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(texture) {\n            var aspectRatio = texture.image.width / texture.image.height;\n            var canvasWidth = viewport.width;\n            var canvasHeight = viewport.height;\n            var width = canvasWidth;\n            var height = width / aspectRatio;\n            if (height > canvasHeight) {\n                height = canvasHeight;\n                width = height * aspectRatio;\n            }\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            canvasCenterRef.current = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenterRef.current.x, 2) + Math.pow(clientY - canvasCenterRef.current.y, 2));\n            console.log(distance, \"distance\");\n            var maxDistance = Math.sqrt(Math.pow(viewport.width / 2, 2) + Math.pow(viewport.height / 2, 2));\n            console.log(maxDistance, \"max`distance\");\n            var newTargetIntensity = distance * 2.5 / maxDistance;\n            console.log(newTargetIntensity, \"newTargetIntensity\");\n            targetIntensityRef.current = Math.max(0, Math.min(0.1, newTargetIntensity));\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, [\n        texturePath,\n        size,\n        viewport\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        // Smooth intensity transition using lerp\n        currentIntensityRef.current = three__WEBPACK_IMPORTED_MODULE_4__.MathUtils.lerp(currentIntensityRef.current, targetIntensityRef.current, 0.1);\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\n            var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time * 2);\n            var waveY1 = 0.1 * Math.sin(vertex.y * 2.5 + time * 2);\n            vertex.z = currentIntensityRef.current * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        position: [\n            viewport.width / 2 - planeSize[0] / 2,\n            -viewport.height / 2 + planeSize[1] / 2,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, _this);\n};\n_s(WaveTexture, \"bzNrsVCzGwUUcJ2qWa7i9zhDgR0=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = WaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveTexture);\nvar _c;\n$RefreshReg$(_c, \"WaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTFESkk7QUEwR04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vbGVjdWxlcy9XYXZlVGV4dHVyZS50c3g/NDk3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGcmFtZSwgdXNlVGhyZWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBQbGFuZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFdhdmVUZXh0dXJlID0gKHsgdGV4dHVyZVBhdGggfTogeyB0ZXh0dXJlUGF0aDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgbWVzaFJlZiA9IHVzZVJlZjxUSFJFRS5NZXNoPihudWxsISk7XG4gIGNvbnN0IHsgc2l6ZSwgdmlld3BvcnQgfSA9IHVzZVRocmVlKCk7XG4gIGNvbnN0IFtwbGFuZVNpemUsIHNldFBsYW5lU2l6ZV0gPSB1c2VTdGF0ZTxbbnVtYmVyLCBudW1iZXJdPihbMSwgMV0pO1xuICBjb25zdCB0YXJnZXRJbnRlbnNpdHlSZWYgPSB1c2VSZWYoMCk7XG4gIGNvbnN0IGN1cnJlbnRJbnRlbnNpdHlSZWYgPSB1c2VSZWYoMCk7XG4gIGNvbnN0IGNhbnZhc0NlbnRlclJlZiA9IHVzZVJlZjx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KHsgeDogMCwgeTogMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCwgKHRleHR1cmUpID0+IHtcbiAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGV4dHVyZS5pbWFnZS53aWR0aCAvIHRleHR1cmUuaW1hZ2UuaGVpZ2h0O1xuICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgbGV0IHdpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcblxuICAgICAgaWYgKGhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgICBzZXRQbGFuZVNpemUoW3dpZHRoLCBoZWlnaHRdKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICAgIGNhbnZhc0NlbnRlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICB4OiBzaXplLndpZHRoIC8gMixcbiAgICAgICAgeTogc2l6ZS5oZWlnaHQgLyAyLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgIE1hdGgucG93KGNsaWVudFggLSBjYW52YXNDZW50ZXJSZWYuY3VycmVudC54LCAyKSArXG4gICAgICAgICAgTWF0aC5wb3coY2xpZW50WSAtIGNhbnZhc0NlbnRlclJlZi5jdXJyZW50LnksIDIpLFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlLCBcImRpc3RhbmNlXCIpO1xuXG4gICAgICBjb25zdCBtYXhEaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3codmlld3BvcnQud2lkdGggLyAyLCAyKSArIE1hdGgucG93KHZpZXdwb3J0LmhlaWdodCAvIDIsIDIpLFxuICAgICAgKTtcblxuICAgICAgY29uc29sZS5sb2cobWF4RGlzdGFuY2UsIFwibWF4YGRpc3RhbmNlXCIpO1xuICAgICAgY29uc3QgbmV3VGFyZ2V0SW50ZW5zaXR5ID0gKGRpc3RhbmNlICogMi41KSAvIG1heERpc3RhbmNlO1xuICAgICAgY29uc29sZS5sb2cobmV3VGFyZ2V0SW50ZW5zaXR5LCBcIm5ld1RhcmdldEludGVuc2l0eVwiKTtcbiAgICAgIHRhcmdldEludGVuc2l0eVJlZi5jdXJyZW50ID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIE1hdGgubWluKDAuMSwgbmV3VGFyZ2V0SW50ZW5zaXR5KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICB9O1xuICB9LCBbdGV4dHVyZVBhdGgsIHNpemUsIHZpZXdwb3J0XSk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGNvbnN0IG1lc2ggPSBtZXNoUmVmLmN1cnJlbnQhO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAqIDAuMDAxO1xuXG4gICAgLy8gU21vb3RoIGludGVuc2l0eSB0cmFuc2l0aW9uIHVzaW5nIGxlcnBcbiAgICBjdXJyZW50SW50ZW5zaXR5UmVmLmN1cnJlbnQgPSBUSFJFRS5NYXRoVXRpbHMubGVycChcbiAgICAgIGN1cnJlbnRJbnRlbnNpdHlSZWYuY3VycmVudCxcbiAgICAgIHRhcmdldEludGVuc2l0eVJlZi5jdXJyZW50LFxuICAgICAgMC4xLFxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCBpKTtcblxuICAgICAgY29uc3Qgd2F2ZVgxID0gMC41ICogTWF0aC5zaW4odmVydGV4LnggKyB0aW1lICogMik7XG4gICAgICBjb25zdCB3YXZlWDIgPSAwLjI1ICogTWF0aC5zaW4odmVydGV4LnggKiAxLjUgKyB0aW1lICogMik7XG4gICAgICBjb25zdCB3YXZlWTEgPSAwLjEgKiBNYXRoLnNpbih2ZXJ0ZXgueSAqIDIuNSArIHRpbWUgKiAyKTtcblxuICAgICAgdmVydGV4LnogPSBjdXJyZW50SW50ZW5zaXR5UmVmLmN1cnJlbnQgKiAod2F2ZVgxICsgd2F2ZVgyICsgd2F2ZVkxKTtcblxuICAgICAgcG9zaXRpb25zLnNldFhZWihpLCB2ZXJ0ZXgueCwgdmVydGV4LnksIHZlcnRleC56KTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbnMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQbGFuZVxuICAgICAgcmVmPXttZXNoUmVmfVxuICAgICAgYXJncz17W3BsYW5lU2l6ZVswXSwgcGxhbmVTaXplWzFdLCAzMiwgMzJdfVxuICAgICAgcG9zaXRpb249e1tcbiAgICAgICAgdmlld3BvcnQud2lkdGggLyAyIC0gcGxhbmVTaXplWzBdIC8gMixcbiAgICAgICAgLXZpZXdwb3J0LmhlaWdodCAvIDIgKyBwbGFuZVNpemVbMV0gLyAyLFxuICAgICAgICAwLFxuICAgICAgXX1cbiAgICA+XG4gICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgYXR0YWNoPVwibWF0ZXJpYWxcIiB0cmFuc3BhcmVudD5cbiAgICAgICAgPHByaW1pdGl2ZVxuICAgICAgICAgIGF0dGFjaD1cIm1hcFwiXG4gICAgICAgICAgb2JqZWN0PXtuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQodGV4dHVyZVBhdGgpfVxuICAgICAgICAvPlxuICAgICAgPC9tZXNoU3RhbmRhcmRNYXRlcmlhbD5cbiAgICA8L1BsYW5lPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F2ZVRleHR1cmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJQbGFuZSIsIlRIUkVFIiwiV2F2ZVRleHR1cmUiLCJ0ZXh0dXJlUGF0aCIsIm1lc2hSZWYiLCJzaXplIiwidmlld3BvcnQiLCJwbGFuZVNpemUiLCJzZXRQbGFuZVNpemUiLCJ0YXJnZXRJbnRlbnNpdHlSZWYiLCJjdXJyZW50SW50ZW5zaXR5UmVmIiwiY2FudmFzQ2VudGVyUmVmIiwieCIsInkiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJ0ZXh0dXJlIiwiYXNwZWN0UmF0aW8iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiY3VycmVudCIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJwb3ciLCJjb25zb2xlIiwibG9nIiwibWF4RGlzdGFuY2UiLCJuZXdUYXJnZXRJbnRlbnNpdHkiLCJtYXgiLCJtaW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1lc2giLCJwb3NpdGlvbnMiLCJnZW9tZXRyeSIsImF0dHJpYnV0ZXMiLCJwb3NpdGlvbiIsInRpbWUiLCJEYXRlIiwibm93IiwiTWF0aFV0aWxzIiwibGVycCIsImkiLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwid2F2ZVgxIiwic2luIiwid2F2ZVgyIiwid2F2ZVkxIiwieiIsInNldFhZWiIsIm5lZWRzVXBkYXRlIiwicmVmIiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiYXR0YWNoIiwidHJhbnNwYXJlbnQiLCJwcmltaXRpdmUiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/WaveTexture.tsx\n"));

/***/ })

});