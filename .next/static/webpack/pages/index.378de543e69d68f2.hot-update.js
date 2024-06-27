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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WaveTexture = function(param) {\n    var texturePath = param.texturePath;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)(), size = _useThree.size, viewport = _useThree.viewport;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState[0], setPlaneSize = _useState[1];\n    var targetIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var currentIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var canvasCenterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(texture) {\n            var aspectRatio = texture.image.width / texture.image.height;\n            var canvasWidth = viewport.width;\n            var canvasHeight = viewport.height;\n            var width = canvasWidth;\n            var height = width / aspectRatio;\n            if (height > canvasHeight) {\n                height = canvasHeight;\n                width = height * aspectRatio;\n            }\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            canvasCenterRef.current = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenterRef.current.x, 2) + Math.pow(clientY - canvasCenterRef.current.y, 2));\n            console.log(distance, \"distance\");\n            var maxDistance = Math.sqrt(Math.pow(viewport.width / 2, 2) + Math.pow(viewport.height / 2, 2));\n            var newTargetIntensity = distance * 0.5 / maxDistance / 100;\n            targetIntensityRef.current = Math.max(0.01, newTargetIntensity);\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, [\n        texturePath,\n        size,\n        viewport\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\n            var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time * 2);\n            var waveY1 = 0.1 * Math.sin(vertex.y * 2.5 + time * 2);\n            vertex.z = targetIntensityRef.current * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        position: [\n            viewport.width / 2 - planeSize[0] / 2 - viewport.width * 0.01,\n            -viewport.height / 2 + planeSize[1] / 2,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, _this);\n};\n_s(WaveTexture, \"bzNrsVCzGwUUcJ2qWa7i9zhDgR0=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = WaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveTexture);\nvar _c;\n$RefreshReg$(_c, \"WaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUIsS0FBS3lCLEdBQUcsQ0FBQ0osT0FBT3ZDLENBQUMsR0FBRyxNQUFNa0MsT0FBTztZQUN2RCxJQUFNVyxTQUFTLE1BQU0zQixLQUFLeUIsR0FBRyxDQUFDSixPQUFPdEMsQ0FBQyxHQUFHLE1BQU1pQyxPQUFPO1lBRXRESyxPQUFPTyxDQUFDLEdBQUdqRCxtQkFBbUJtQixPQUFPLEdBQUkwQixDQUFBQSxTQUFTRSxTQUFTQyxNQUFLO1lBRWhFZixVQUFVaUIsTUFBTSxDQUFDVixHQUFHRSxPQUFPdkMsQ0FBQyxFQUFFdUMsT0FBT3RDLENBQUMsRUFBRXNDLE9BQU9PLENBQUM7UUFDbEQ7UUFFQWhCLFVBQVVrQixXQUFXLEdBQUc7SUFDMUI7SUFFQSxxQkFDRSw4REFBQzVELG9EQUFLQTtRQUNKNkQsS0FBS3pEO1FBQ0wwRCxNQUFNO1lBQUN2RCxTQUFTLENBQUMsRUFBRTtZQUFFQSxTQUFTLENBQUMsRUFBRTtZQUFFO1lBQUk7U0FBRztRQUMxQ3NDLFVBQVU7WUFDUnZDLFNBQVNjLEtBQUssR0FBRyxJQUFJYixTQUFTLENBQUMsRUFBRSxHQUFHLElBQUlELFNBQVNjLEtBQUssR0FBRztZQUN6RCxDQUFDZCxTQUFTZSxNQUFNLEdBQUcsSUFBSWQsU0FBUyxDQUFDLEVBQUUsR0FBRztZQUN0QztTQUNEO2tCQUVELDRFQUFDd0Q7WUFBcUJDLFFBQU87WUFBV0MsV0FBVztzQkFDakQsNEVBQUNDO2dCQUNDRixRQUFPO2dCQUNQRyxRQUFRLElBQUlsRSxnREFBbUIsR0FBR2UsSUFBSSxDQUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRDtHQTVGTUQ7O1FBRXVCSCx3REFBUUE7UUFtRG5DRCx3REFBUUE7OztLQXJESkk7QUE4Rk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vbGVjdWxlcy9XYXZlVGV4dHVyZS50c3g/NDk3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGcmFtZSwgdXNlVGhyZWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBQbGFuZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFdhdmVUZXh0dXJlID0gKHsgdGV4dHVyZVBhdGggfTogeyB0ZXh0dXJlUGF0aDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgbWVzaFJlZiA9IHVzZVJlZjxUSFJFRS5NZXNoPihudWxsISk7XG4gIGNvbnN0IHsgc2l6ZSwgdmlld3BvcnQgfSA9IHVzZVRocmVlKCk7XG4gIGNvbnN0IFtwbGFuZVNpemUsIHNldFBsYW5lU2l6ZV0gPSB1c2VTdGF0ZTxbbnVtYmVyLCBudW1iZXJdPihbMSwgMV0pO1xuICBjb25zdCB0YXJnZXRJbnRlbnNpdHlSZWYgPSB1c2VSZWYoMCk7XG4gIGNvbnN0IGN1cnJlbnRJbnRlbnNpdHlSZWYgPSB1c2VSZWYoMCk7XG4gIGNvbnN0IGNhbnZhc0NlbnRlclJlZiA9IHVzZVJlZjx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KHsgeDogMCwgeTogMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCwgKHRleHR1cmUpID0+IHtcbiAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGV4dHVyZS5pbWFnZS53aWR0aCAvIHRleHR1cmUuaW1hZ2UuaGVpZ2h0O1xuICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgbGV0IHdpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcblxuICAgICAgaWYgKGhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgICBzZXRQbGFuZVNpemUoW3dpZHRoLCBoZWlnaHRdKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICAgIGNhbnZhc0NlbnRlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICB4OiBzaXplLndpZHRoIC8gMixcbiAgICAgICAgeTogc2l6ZS5oZWlnaHQgLyAyLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgIE1hdGgucG93KGNsaWVudFggLSBjYW52YXNDZW50ZXJSZWYuY3VycmVudC54LCAyKSArXG4gICAgICAgICAgTWF0aC5wb3coY2xpZW50WSAtIGNhbnZhc0NlbnRlclJlZi5jdXJyZW50LnksIDIpLFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlLCBcImRpc3RhbmNlXCIpO1xuXG4gICAgICBjb25zdCBtYXhEaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3codmlld3BvcnQud2lkdGggLyAyLCAyKSArIE1hdGgucG93KHZpZXdwb3J0LmhlaWdodCAvIDIsIDIpLFxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmV3VGFyZ2V0SW50ZW5zaXR5ID0gKGRpc3RhbmNlICogMC41KSAvIG1heERpc3RhbmNlIC8gMTAwO1xuICAgICAgdGFyZ2V0SW50ZW5zaXR5UmVmLmN1cnJlbnQgPSBNYXRoLm1heCgwLjAxLCBuZXdUYXJnZXRJbnRlbnNpdHkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgfTtcbiAgfSwgW3RleHR1cmVQYXRoLCBzaXplLCB2aWV3cG9ydF0pO1xuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBjb25zdCBtZXNoID0gbWVzaFJlZi5jdXJyZW50ITtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG4gICAgY29uc3QgdGltZSA9IERhdGUubm93KCkgKiAwLjAwMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIGkpO1xuXG4gICAgICBjb25zdCB3YXZlWDEgPSAwLjUgKiBNYXRoLnNpbih2ZXJ0ZXgueCArIHRpbWUgKiAyKTtcbiAgICAgIGNvbnN0IHdhdmVYMiA9IDAuMjUgKiBNYXRoLnNpbih2ZXJ0ZXgueCAqIDEuNSArIHRpbWUgKiAyKTtcbiAgICAgIGNvbnN0IHdhdmVZMSA9IDAuMSAqIE1hdGguc2luKHZlcnRleC55ICogMi41ICsgdGltZSAqIDIpO1xuXG4gICAgICB2ZXJ0ZXgueiA9IHRhcmdldEludGVuc2l0eVJlZi5jdXJyZW50ICogKHdhdmVYMSArIHdhdmVYMiArIHdhdmVZMSk7XG5cbiAgICAgIHBvc2l0aW9ucy5zZXRYWVooaSwgdmVydGV4LngsIHZlcnRleC55LCB2ZXJ0ZXgueik7XG4gICAgfVxuXG4gICAgcG9zaXRpb25zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGxhbmVcbiAgICAgIHJlZj17bWVzaFJlZn1cbiAgICAgIGFyZ3M9e1twbGFuZVNpemVbMF0sIHBsYW5lU2l6ZVsxXSwgMzIsIDMyXX1cbiAgICAgIHBvc2l0aW9uPXtbXG4gICAgICAgIHZpZXdwb3J0LndpZHRoIC8gMiAtIHBsYW5lU2l6ZVswXSAvIDIgLSB2aWV3cG9ydC53aWR0aCAqIDAuMDEsXG4gICAgICAgIC12aWV3cG9ydC5oZWlnaHQgLyAyICsgcGxhbmVTaXplWzFdIC8gMixcbiAgICAgICAgMCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGF0dGFjaD1cIm1hdGVyaWFsXCIgdHJhbnNwYXJlbnQ+XG4gICAgICAgIDxwcmltaXRpdmVcbiAgICAgICAgICBhdHRhY2g9XCJtYXBcIlxuICAgICAgICAgIG9iamVjdD17bmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHRleHR1cmVQYXRoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbWVzaFN0YW5kYXJkTWF0ZXJpYWw+XG4gICAgPC9QbGFuZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmVUZXh0dXJlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwiUGxhbmUiLCJUSFJFRSIsIldhdmVUZXh0dXJlIiwidGV4dHVyZVBhdGgiLCJtZXNoUmVmIiwic2l6ZSIsInZpZXdwb3J0IiwicGxhbmVTaXplIiwic2V0UGxhbmVTaXplIiwidGFyZ2V0SW50ZW5zaXR5UmVmIiwiY3VycmVudEludGVuc2l0eVJlZiIsImNhbnZhc0NlbnRlclJlZiIsIngiLCJ5IiwidGV4dHVyZUxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwidGV4dHVyZSIsImFzcGVjdFJhdGlvIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImN1cnJlbnQiLCJkaXN0YW5jZSIsIk1hdGgiLCJzcXJ0IiwicG93IiwiY29uc29sZSIsImxvZyIsIm1heERpc3RhbmNlIiwibmV3VGFyZ2V0SW50ZW5zaXR5IiwibWF4Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZXNoIiwicG9zaXRpb25zIiwiZ2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImkiLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwid2F2ZVgxIiwic2luIiwid2F2ZVgyIiwid2F2ZVkxIiwieiIsInNldFhZWiIsIm5lZWRzVXBkYXRlIiwicmVmIiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiYXR0YWNoIiwidHJhbnNwYXJlbnQiLCJwcmltaXRpdmUiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/WaveTexture.tsx\n"));

/***/ })

});