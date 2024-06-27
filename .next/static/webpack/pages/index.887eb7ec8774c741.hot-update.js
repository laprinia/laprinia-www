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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WaveTexture = function(param) {\n    var texturePath = param.texturePath;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)(), size = _useThree.size, viewport = _useThree.viewport;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState[0], setPlaneSize = _useState[1];\n    var targetIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var currentIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var canvasCenterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(texture) {\n            var aspectRatio = texture.image.width / texture.image.height;\n            var canvasWidth = viewport.width;\n            var canvasHeight = viewport.height;\n            var width = canvasWidth;\n            var height = width / aspectRatio;\n            if (height > canvasHeight) {\n                height = canvasHeight;\n                width = height * aspectRatio;\n            }\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            canvasCenterRef.current = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenterRef.current.x, 2) + Math.pow(clientY - canvasCenterRef.current.y, 2));\n            console.log(distance, \"distance\");\n            var maxDistance = Math.sqrt(Math.pow(viewport.width / 2, 2) + Math.pow(viewport.height / 2, 2));\n            console.log(size.height, size.width, \"center of canvas\");\n            console.log(clientY, clientX, \"center of mous\");\n            console.log(maxDistance);\n            var newTargetIntensity = distance * 2.5 / maxDistance / 100;\n            console.log(newTargetIntensity, \"newTargetIntensity\");\n            targetIntensityRef.current = Math.max(0.3, newTargetIntensity);\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, [\n        texturePath,\n        size,\n        viewport\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\n            var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time * 2);\n            var waveY1 = 0.1 * Math.sin(vertex.y * 2.5 + time * 2);\n            vertex.z = currentIntensityRef.current * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        position: [\n            viewport.width / 2 - planeSize[0] / 2,\n            -viewport.height / 2 + planeSize[1] / 2,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, _this);\n};\n_s(WaveTexture, \"bzNrsVCzGwUUcJ2qWa7i9zhDgR0=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = WaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveTexture);\nvar _c;\n$RefreshReg$(_c, \"WaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2xlY3VsZXMvV2F2ZVRleHR1cmUudHN4PzQ5NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgUGxhbmUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5jb25zdCBXYXZlVGV4dHVyZSA9ICh7IHRleHR1cmVQYXRoIH06IHsgdGV4dHVyZVBhdGg6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IG1lc2hSZWYgPSB1c2VSZWY8VEhSRUUuTWVzaD4obnVsbCEpO1xuICBjb25zdCB7IHNpemUsIHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpO1xuICBjb25zdCBbcGxhbmVTaXplLCBzZXRQbGFuZVNpemVdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyXT4oWzEsIDFdKTtcbiAgY29uc3QgdGFyZ2V0SW50ZW5zaXR5UmVmID0gdXNlUmVmKDApO1xuICBjb25zdCBjdXJyZW50SW50ZW5zaXR5UmVmID0gdXNlUmVmKDApO1xuICBjb25zdCBjYW52YXNDZW50ZXJSZWYgPSB1c2VSZWY8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9Pih7IHg6IDAsIHk6IDAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgsICh0ZXh0dXJlKSA9PiB7XG4gICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRleHR1cmUuaW1hZ2Uud2lkdGggLyB0ZXh0dXJlLmltYWdlLmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgIGxldCB3aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgbGV0IGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG5cbiAgICAgIGlmIChoZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgc2V0UGxhbmVTaXplKFt3aWR0aCwgaGVpZ2h0XSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgICBjYW52YXNDZW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgeDogc2l6ZS53aWR0aCAvIDIsXG4gICAgICAgIHk6IHNpemUuaGVpZ2h0IC8gMixcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhjbGllbnRYIC0gY2FudmFzQ2VudGVyUmVmLmN1cnJlbnQueCwgMikgK1xuICAgICAgICAgIE1hdGgucG93KGNsaWVudFkgLSBjYW52YXNDZW50ZXJSZWYuY3VycmVudC55LCAyKSxcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhkaXN0YW5jZSwgXCJkaXN0YW5jZVwiKTtcblxuICAgICAgY29uc3QgbWF4RGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgIE1hdGgucG93KHZpZXdwb3J0LndpZHRoIC8gMiwgMikgKyBNYXRoLnBvdyh2aWV3cG9ydC5oZWlnaHQgLyAyLCAyKSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHNpemUuaGVpZ2h0LCBzaXplLndpZHRoLCBcImNlbnRlciBvZiBjYW52YXNcIik7XG4gICAgICBjb25zb2xlLmxvZyhjbGllbnRZLCBjbGllbnRYLCBcImNlbnRlciBvZiBtb3VzXCIpO1xuICAgICAgY29uc29sZS5sb2cobWF4RGlzdGFuY2UpO1xuICAgICAgY29uc3QgbmV3VGFyZ2V0SW50ZW5zaXR5ID0gKGRpc3RhbmNlICogMi41KSAvIG1heERpc3RhbmNlIC8gMTAwO1xuICAgICAgY29uc29sZS5sb2cobmV3VGFyZ2V0SW50ZW5zaXR5LCBcIm5ld1RhcmdldEludGVuc2l0eVwiKTtcbiAgICAgIHRhcmdldEludGVuc2l0eVJlZi5jdXJyZW50ID0gTWF0aC5tYXgoMC4zLCBuZXdUYXJnZXRJbnRlbnNpdHkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgfTtcbiAgfSwgW3RleHR1cmVQYXRoLCBzaXplLCB2aWV3cG9ydF0pO1xuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBjb25zdCBtZXNoID0gbWVzaFJlZi5jdXJyZW50ITtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG4gICAgY29uc3QgdGltZSA9IERhdGUubm93KCkgKiAwLjAwMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIGkpO1xuXG4gICAgICBjb25zdCB3YXZlWDEgPSAwLjUgKiBNYXRoLnNpbih2ZXJ0ZXgueCArIHRpbWUgKiAyKTtcbiAgICAgIGNvbnN0IHdhdmVYMiA9IDAuMjUgKiBNYXRoLnNpbih2ZXJ0ZXgueCAqIDEuNSArIHRpbWUgKiAyKTtcbiAgICAgIGNvbnN0IHdhdmVZMSA9IDAuMSAqIE1hdGguc2luKHZlcnRleC55ICogMi41ICsgdGltZSAqIDIpO1xuXG4gICAgICB2ZXJ0ZXgueiA9IGN1cnJlbnRJbnRlbnNpdHlSZWYuY3VycmVudCAqICh3YXZlWDEgKyB3YXZlWDIgKyB3YXZlWTEpO1xuXG4gICAgICBwb3NpdGlvbnMuc2V0WFlaKGksIHZlcnRleC54LCB2ZXJ0ZXgueSwgdmVydGV4LnopO1xuICAgIH1cblxuICAgIHBvc2l0aW9ucy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBsYW5lXG4gICAgICByZWY9e21lc2hSZWZ9XG4gICAgICBhcmdzPXtbcGxhbmVTaXplWzBdLCBwbGFuZVNpemVbMV0sIDMyLCAzMl19XG4gICAgICBwb3NpdGlvbj17W1xuICAgICAgICB2aWV3cG9ydC53aWR0aCAvIDIgLSBwbGFuZVNpemVbMF0gLyAyLFxuICAgICAgICAtdmlld3BvcnQuaGVpZ2h0IC8gMiArIHBsYW5lU2l6ZVsxXSAvIDIsXG4gICAgICAgIDAsXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBhdHRhY2g9XCJtYXRlcmlhbFwiIHRyYW5zcGFyZW50PlxuICAgICAgICA8cHJpbWl0aXZlXG4gICAgICAgICAgYXR0YWNoPVwibWFwXCJcbiAgICAgICAgICBvYmplY3Q9e25ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0ZXh0dXJlUGF0aCl9XG4gICAgICAgIC8+XG4gICAgICA8L21lc2hTdGFuZGFyZE1hdGVyaWFsPlxuICAgIDwvUGxhbmU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlVGV4dHVyZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsIlBsYW5lIiwiVEhSRUUiLCJXYXZlVGV4dHVyZSIsInRleHR1cmVQYXRoIiwibWVzaFJlZiIsInNpemUiLCJ2aWV3cG9ydCIsInBsYW5lU2l6ZSIsInNldFBsYW5lU2l6ZSIsInRhcmdldEludGVuc2l0eVJlZiIsImN1cnJlbnRJbnRlbnNpdHlSZWYiLCJjYW52YXNDZW50ZXJSZWYiLCJ4IiwieSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibG9hZCIsInRleHR1cmUiLCJhc3BlY3RSYXRpbyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJjdXJyZW50IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsImNvbnNvbGUiLCJsb2ciLCJtYXhEaXN0YW5jZSIsIm5ld1RhcmdldEludGVuc2l0eSIsIm1heCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWVzaCIsInBvc2l0aW9ucyIsImdlb21ldHJ5IiwiYXR0cmlidXRlcyIsInBvc2l0aW9uIiwidGltZSIsIkRhdGUiLCJub3ciLCJpIiwiY291bnQiLCJ2ZXJ0ZXgiLCJWZWN0b3IzIiwiZnJvbUJ1ZmZlckF0dHJpYnV0ZSIsIndhdmVYMSIsInNpbiIsIndhdmVYMiIsIndhdmVZMSIsInoiLCJzZXRYWVoiLCJuZWVkc1VwZGF0ZSIsInJlZiIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImF0dGFjaCIsInRyYW5zcGFyZW50IiwicHJpbWl0aXZlIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/molecules/WaveTexture.tsx\n"));

/***/ })

});