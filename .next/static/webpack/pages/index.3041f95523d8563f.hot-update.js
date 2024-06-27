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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WaveTexture = function(param) {\n    var texturePath = param.texturePath;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)(), size = _useThree.size, viewport = _useThree.viewport;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), targetIntensity = _useState[0], setTargetIntensity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState1[0], setPlaneSize = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentIntensity = _useState2[0], setCurrentIntensity = _useState2[1];\n    var debounce = function(func, wait) {\n        var timeout;\n        return function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            clearTimeout(timeout);\n            timeout = setTimeout(function() {\n                return func.apply(void 0, (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(args));\n            }, wait);\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader();\n        textureLoader.load(texturePath, function(texture) {\n            var aspectRatio = texture.image.width / texture.image.height;\n            var canvasWidth = viewport.width;\n            var canvasHeight = viewport.height;\n            var width = canvasWidth;\n            var height = width / aspectRatio;\n            if (height > canvasHeight) {\n                height = canvasHeight;\n                width = height * aspectRatio;\n            }\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            var canvasCenter = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenter.x, 2) + Math.pow(clientY - canvasCenter.y, 2));\n            var maxDistance = Math.sqrt(Math.pow(viewport.width / 2, 2) + Math.pow(viewport.height / 2, 2));\n            var newTargetIntensity = distance * 2.5 / maxDistance;\n            setTargetIntensity(Math.max(0, Math.min(2.5, newTargetIntensity)));\n        };\n        var debouncedMouseMove = debounce(handleMouseMove, 9);\n        window.addEventListener(\"mousemove\", debouncedMouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", debouncedMouseMove);\n        };\n    }, [\n        texturePath,\n        size,\n        viewport\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        // Smooth intensity transition using lerp\n        setCurrentIntensity(three__WEBPACK_IMPORTED_MODULE_5__.MathUtils.lerp(currentIntensity, targetIntensity, 0.1));\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\n            var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time * 2);\n            var waveY1 = 0.1 * Math.sin(vertex.y * 2.5 + time * 2);\n            vertex.z = currentIntensity * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        position: [\n            viewport.width / 2 - planeSize[0] / 2,\n            -viewport.height / 2 + planeSize[1] / 2,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, _this);\n};\n_s(WaveTexture, \"JcIMFiJR8um3FTNpeHbBFXdydbg=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = WaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveTexture);\nvar _c;\n$RefreshReg$(_c, \"WaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qkgsd0RBQVFBO1FBeURuQ0Qsd0RBQVFBOzs7S0EzREpJO0FBeUdOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2xlY3VsZXMvV2F2ZVRleHR1cmUudHN4PzQ5NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgUGxhbmUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5jb25zdCBXYXZlVGV4dHVyZSA9ICh7IHRleHR1cmVQYXRoIH06IHsgdGV4dHVyZVBhdGg6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IG1lc2hSZWYgPSB1c2VSZWY8VEhSRUUuTWVzaD4obnVsbCEpO1xuICBjb25zdCB7IHNpemUsIHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpO1xuICBjb25zdCBbdGFyZ2V0SW50ZW5zaXR5LCBzZXRUYXJnZXRJbnRlbnNpdHldID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwbGFuZVNpemUsIHNldFBsYW5lU2l6ZV0gPSB1c2VTdGF0ZTxbbnVtYmVyLCBudW1iZXJdPihbMSwgMV0pO1xuICBjb25zdCBbY3VycmVudEludGVuc2l0eSwgc2V0Q3VycmVudEludGVuc2l0eV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBkZWJvdW5jZSA9IChmdW5jOiBGdW5jdGlvbiwgd2FpdDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xuICAgIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoLi4uYXJncyksIHdhaXQpO1xuICAgIH07XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgsICh0ZXh0dXJlKSA9PiB7XG4gICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRleHR1cmUuaW1hZ2Uud2lkdGggLyB0ZXh0dXJlLmltYWdlLmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgIGxldCB3aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgbGV0IGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG5cbiAgICAgIGlmIChoZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgc2V0UGxhbmVTaXplKFt3aWR0aCwgaGVpZ2h0XSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBjYW52YXNDZW50ZXIgPSB7XG4gICAgICAgIHg6IHNpemUud2lkdGggLyAyLFxuICAgICAgICB5OiBzaXplLmhlaWdodCAvIDIsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3coY2xpZW50WCAtIGNhbnZhc0NlbnRlci54LCAyKSArXG4gICAgICAgICAgTWF0aC5wb3coY2xpZW50WSAtIGNhbnZhc0NlbnRlci55LCAyKSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG1heERpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyh2aWV3cG9ydC53aWR0aCAvIDIsIDIpICsgTWF0aC5wb3codmlld3BvcnQuaGVpZ2h0IC8gMiwgMiksXG4gICAgICApO1xuICAgICAgY29uc3QgbmV3VGFyZ2V0SW50ZW5zaXR5ID0gKGRpc3RhbmNlICogMi41KSAvIG1heERpc3RhbmNlO1xuICAgICAgc2V0VGFyZ2V0SW50ZW5zaXR5KE1hdGgubWF4KDAsIE1hdGgubWluKDIuNSwgbmV3VGFyZ2V0SW50ZW5zaXR5KSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWJvdW5jZWRNb3VzZU1vdmUgPSBkZWJvdW5jZShoYW5kbGVNb3VzZU1vdmUsIDkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRlYm91bmNlZE1vdXNlTW92ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZGVib3VuY2VkTW91c2VNb3ZlKTtcbiAgICB9O1xuICB9LCBbdGV4dHVyZVBhdGgsIHNpemUsIHZpZXdwb3J0XSk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGNvbnN0IG1lc2ggPSBtZXNoUmVmLmN1cnJlbnQhO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAqIDAuMDAxO1xuXG4gICAgLy8gU21vb3RoIGludGVuc2l0eSB0cmFuc2l0aW9uIHVzaW5nIGxlcnBcbiAgICBzZXRDdXJyZW50SW50ZW5zaXR5KFxuICAgICAgVEhSRUUuTWF0aFV0aWxzLmxlcnAoY3VycmVudEludGVuc2l0eSwgdGFyZ2V0SW50ZW5zaXR5LCAwLjEpLFxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCBpKTtcblxuICAgICAgY29uc3Qgd2F2ZVgxID0gMC41ICogTWF0aC5zaW4odmVydGV4LnggKyB0aW1lICogMik7XG4gICAgICBjb25zdCB3YXZlWDIgPSAwLjI1ICogTWF0aC5zaW4odmVydGV4LnggKiAxLjUgKyB0aW1lICogMik7XG4gICAgICBjb25zdCB3YXZlWTEgPSAwLjEgKiBNYXRoLnNpbih2ZXJ0ZXgueSAqIDIuNSArIHRpbWUgKiAyKTtcblxuICAgICAgdmVydGV4LnogPSBjdXJyZW50SW50ZW5zaXR5ICogKHdhdmVYMSArIHdhdmVYMiArIHdhdmVZMSk7XG5cbiAgICAgIHBvc2l0aW9ucy5zZXRYWVooaSwgdmVydGV4LngsIHZlcnRleC55LCB2ZXJ0ZXgueik7XG4gICAgfVxuXG4gICAgcG9zaXRpb25zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGxhbmVcbiAgICAgIHJlZj17bWVzaFJlZn1cbiAgICAgIGFyZ3M9e1twbGFuZVNpemVbMF0sIHBsYW5lU2l6ZVsxXSwgMzIsIDMyXX1cbiAgICAgIHBvc2l0aW9uPXtbXG4gICAgICAgIHZpZXdwb3J0LndpZHRoIC8gMiAtIHBsYW5lU2l6ZVswXSAvIDIsXG4gICAgICAgIC12aWV3cG9ydC5oZWlnaHQgLyAyICsgcGxhbmVTaXplWzFdIC8gMixcbiAgICAgICAgMCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGF0dGFjaD1cIm1hdGVyaWFsXCIgdHJhbnNwYXJlbnQ+XG4gICAgICAgIDxwcmltaXRpdmVcbiAgICAgICAgICBhdHRhY2g9XCJtYXBcIlxuICAgICAgICAgIG9iamVjdD17bmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHRleHR1cmVQYXRoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbWVzaFN0YW5kYXJkTWF0ZXJpYWw+XG4gICAgPC9QbGFuZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmVUZXh0dXJlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwiUGxhbmUiLCJUSFJFRSIsIldhdmVUZXh0dXJlIiwidGV4dHVyZVBhdGgiLCJtZXNoUmVmIiwic2l6ZSIsInZpZXdwb3J0IiwidGFyZ2V0SW50ZW5zaXR5Iiwic2V0VGFyZ2V0SW50ZW5zaXR5IiwicGxhbmVTaXplIiwic2V0UGxhbmVTaXplIiwiY3VycmVudEludGVuc2l0eSIsInNldEN1cnJlbnRJbnRlbnNpdHkiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwidGltZW91dCIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGV4dHVyZUxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwidGV4dHVyZSIsImFzcGVjdFJhdGlvIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImNhbnZhc0NlbnRlciIsIngiLCJ5IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsIm1heERpc3RhbmNlIiwibmV3VGFyZ2V0SW50ZW5zaXR5IiwibWF4IiwibWluIiwiZGVib3VuY2VkTW91c2VNb3ZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZXNoIiwiY3VycmVudCIsInBvc2l0aW9ucyIsImdlb21ldHJ5IiwiYXR0cmlidXRlcyIsInBvc2l0aW9uIiwidGltZSIsIkRhdGUiLCJub3ciLCJNYXRoVXRpbHMiLCJsZXJwIiwiaSIsImNvdW50IiwidmVydGV4IiwiVmVjdG9yMyIsImZyb21CdWZmZXJBdHRyaWJ1dGUiLCJ3YXZlWDEiLCJzaW4iLCJ3YXZlWDIiLCJ3YXZlWTEiLCJ6Iiwic2V0WFlaIiwibmVlZHNVcGRhdGUiLCJyZWYiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImF0dGFjaCIsInRyYW5zcGFyZW50IiwicHJpbWl0aXZlIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/molecules/WaveTexture.tsx\n"));

/***/ })

});