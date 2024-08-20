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

/***/ "./src/molecules/Texture/CursorWaveTexture.tsx":
/*!*****************************************************!*\
  !*** ./src/molecules/Texture/CursorWaveTexture.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar CursorWaveTexture = function(param) {\n    var texturePath = param.texturePath, _param_isAutoAnimated = param.isAutoAnimated, isAutoAnimated = _param_isAutoAnimated === void 0 ? false : _param_isAutoAnimated;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var targetIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var canvasCenterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)(), size = _useThree.size, viewport = _useThree.viewport;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState[0], setPlaneSize = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), texture = _useState1[0], setTexture = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(loadedTexture) {\n            loadedTexture.colorSpace = three__WEBPACK_IMPORTED_MODULE_4__.SRGBColorSpace;\n            setTexture(loadedTexture);\n            var aspectRatio = loadedTexture.image.width / loadedTexture.image.height;\n            var canvasWidth = viewport.width;\n            var canvasHeight = viewport.height;\n            var width = canvasWidth;\n            var height = width / aspectRatio;\n            if (height > canvasHeight) {\n                height = canvasHeight;\n                width = height * aspectRatio;\n            }\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            canvasCenterRef.current = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenterRef.current.x, 2) + Math.pow(clientY - canvasCenterRef.current.y, 2));\n            var maxDistance = Math.sqrt(Math.pow(viewport.width / 2, 2) + Math.pow(viewport.height / 2, 2));\n            var newTargetIntensity = distance * 0.5 / maxDistance / 100;\n            targetIntensityRef.current = Math.max(0.01, newTargetIntensity);\n        };\n        if (!isAutoAnimated) {\n            window.addEventListener(\"mousemove\", handleMouseMove);\n        } else {\n            targetIntensityRef.current = 0.8;\n        }\n        return function() {\n            if (!isAutoAnimated) {\n                window.removeEventListener(\"mousemove\", handleMouseMove);\n            }\n        };\n    }, [\n        texturePath,\n        size,\n        viewport,\n        isAutoAnimated\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        if (mesh && mesh.geometry) {\n            var positions = mesh.geometry.attributes.position;\n            var time = Date.now() * 0.001;\n            for(var i = 0; i < positions.count; i++){\n                var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n                vertex.fromBufferAttribute(positions, i);\n                var waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\n                var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time);\n                var waveY1 = 0.5 * Math.sin(vertex.y * 2.5 + time * 2);\n                vertex.z = targetIntensityRef.current * (waveX1 + waveX2 + waveY1);\n                positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n            }\n            positions.needsUpdate = true;\n        }\n    });\n    if (!texture) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        position: [\n            viewport.width / 2 - planeSize[0] / 2,\n            -viewport.height / 2 + planeSize[1] / 2,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            map: texture,\n            transparent: true\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/Texture/CursorWaveTexture.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/Texture/CursorWaveTexture.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n};\n_s(CursorWaveTexture, \"86Uw325hz5kpHBupY3chmmiqYQc=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = CursorWaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CursorWaveTexture);\nvar _c;\n$RefreshReg$(_c, \"CursorWaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL1RleHR1cmUvQ3Vyc29yV2F2ZVRleHR1cmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDSDtBQUNkO0FBQ1g7QUFFL0IsSUFBTVEsb0JBQW9CO1FBQ3hCQyxvQkFBQUEsMkNBQ0FDLGdCQUFBQSxvREFBaUI7O0lBS2pCLElBQU1DLFVBQVVULDZDQUFNQSxDQUFhO0lBQ25DLElBQU1VLHFCQUFxQlYsNkNBQU1BLENBQUM7SUFDbEMsSUFBTVcsa0JBQWtCWCw2Q0FBTUEsQ0FBMkI7UUFBRVksR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFFdEUsSUFBMkJWLFlBQUFBLDREQUFRQSxJQUEzQlcsT0FBbUJYLFVBQW5CVyxNQUFNQyxXQUFhWixVQUFiWTtJQUNkLElBQWtDZCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQW1CO1FBQUM7UUFBRztLQUFFLE9BQTVEZSxZQUEyQmYsY0FBaEJnQixlQUFnQmhCO0lBQ2xDLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQXVCLFdBQXREaUIsVUFBdUJqQixlQUFka0IsYUFBY2xCO0lBRTlCRixnREFBU0EsQ0FBQztRQUNSLElBQU1xQixnQkFBZ0IsSUFBSWYsZ0RBQW1CO1FBQzdDZSxjQUFjRSxJQUFJLENBQUNmLGFBQWEsU0FBQ2dCO1lBQy9CQSxjQUFjQyxVQUFVLEdBQUduQixpREFBb0I7WUFDL0NjLFdBQVdJO1lBRVgsSUFBTUcsY0FDSkgsY0FBY0ksS0FBSyxDQUFDQyxLQUFLLEdBQUdMLGNBQWNJLEtBQUssQ0FBQ0UsTUFBTTtZQUN4RCxJQUFNQyxjQUFjZixTQUFTYSxLQUFLO1lBQ2xDLElBQU1HLGVBQWVoQixTQUFTYyxNQUFNO1lBRXBDLElBQUlELFFBQVFFO1lBQ1osSUFBSUQsU0FBU0QsUUFBUUY7WUFFckIsSUFBSUcsU0FBU0UsY0FBYztnQkFDekJGLFNBQVNFO2dCQUNUSCxRQUFRQyxTQUFTSDtZQUNuQjtZQUNBVCxhQUFhO2dCQUFDVztn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UUEwRG5DRCx3REFBUUE7OztLQXJFSkk7QUErR04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9sZWN1bGVzL1RleHR1cmUvQ3Vyc29yV2F2ZVRleHR1cmUudHN4PzUzMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgUGxhbmUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5jb25zdCBDdXJzb3JXYXZlVGV4dHVyZSA9ICh7XG4gIHRleHR1cmVQYXRoLFxuICBpc0F1dG9BbmltYXRlZCA9IGZhbHNlLFxufToge1xuICB0ZXh0dXJlUGF0aDogc3RyaW5nO1xuICBpc0F1dG9BbmltYXRlZD86IGJvb2xlYW47XG59KSA9PiB7XG4gIGNvbnN0IG1lc2hSZWYgPSB1c2VSZWY8VEhSRUUuTWVzaD4obnVsbCEpO1xuICBjb25zdCB0YXJnZXRJbnRlbnNpdHlSZWYgPSB1c2VSZWYoMCk7XG4gIGNvbnN0IGNhbnZhc0NlbnRlclJlZiA9IHVzZVJlZjx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KHsgeDogMCwgeTogMCB9KTtcblxuICBjb25zdCB7IHNpemUsIHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpO1xuICBjb25zdCBbcGxhbmVTaXplLCBzZXRQbGFuZVNpemVdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyXT4oWzEsIDFdKTtcbiAgY29uc3QgW3RleHR1cmUsIHNldFRleHR1cmVdID0gdXNlU3RhdGU8VEhSRUUuVGV4dHVyZSB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoLCAobG9hZGVkVGV4dHVyZSkgPT4ge1xuICAgICAgbG9hZGVkVGV4dHVyZS5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBzZXRUZXh0dXJlKGxvYWRlZFRleHR1cmUpO1xuXG4gICAgICBjb25zdCBhc3BlY3RSYXRpbyA9XG4gICAgICAgIGxvYWRlZFRleHR1cmUuaW1hZ2Uud2lkdGggLyBsb2FkZWRUZXh0dXJlLmltYWdlLmhlaWdodDtcbiAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgIGxldCB3aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgbGV0IGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG5cbiAgICAgIGlmIChoZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgc2V0UGxhbmVTaXplKFt3aWR0aCwgaGVpZ2h0XSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgICBjYW52YXNDZW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgeDogc2l6ZS53aWR0aCAvIDIsXG4gICAgICAgIHk6IHNpemUuaGVpZ2h0IC8gMixcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhjbGllbnRYIC0gY2FudmFzQ2VudGVyUmVmLmN1cnJlbnQueCwgMikgK1xuICAgICAgICAgIE1hdGgucG93KGNsaWVudFkgLSBjYW52YXNDZW50ZXJSZWYuY3VycmVudC55LCAyKSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG1heERpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyh2aWV3cG9ydC53aWR0aCAvIDIsIDIpICsgTWF0aC5wb3codmlld3BvcnQuaGVpZ2h0IC8gMiwgMiksXG4gICAgICApO1xuXG4gICAgICBjb25zdCBuZXdUYXJnZXRJbnRlbnNpdHkgPSAoZGlzdGFuY2UgKiAwLjUpIC8gbWF4RGlzdGFuY2UgLyAxMDA7XG4gICAgICB0YXJnZXRJbnRlbnNpdHlSZWYuY3VycmVudCA9IE1hdGgubWF4KDAuMDEsIG5ld1RhcmdldEludGVuc2l0eSk7XG4gICAgfTtcblxuICAgIGlmICghaXNBdXRvQW5pbWF0ZWQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEludGVuc2l0eVJlZi5jdXJyZW50ID0gMC44O1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIWlzQXV0b0FuaW1hdGVkKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3RleHR1cmVQYXRoLCBzaXplLCB2aWV3cG9ydCwgaXNBdXRvQW5pbWF0ZWRdKTtcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgY29uc3QgbWVzaCA9IG1lc2hSZWYuY3VycmVudDtcbiAgICBpZiAobWVzaCAmJiBtZXNoLmdlb21ldHJ5KSB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG4gICAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAqIDAuMDAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIHZlcnRleC5mcm9tQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgaSk7XG5cbiAgICAgICAgY29uc3Qgd2F2ZVgxID0gMC41ICogTWF0aC5zaW4odmVydGV4LnggKyB0aW1lICogMik7XG4gICAgICAgIGNvbnN0IHdhdmVYMiA9IDAuMjUgKiBNYXRoLnNpbih2ZXJ0ZXgueCAqIDEuNSArIHRpbWUpO1xuICAgICAgICBjb25zdCB3YXZlWTEgPSAwLjUgKiBNYXRoLnNpbih2ZXJ0ZXgueSAqIDIuNSArIHRpbWUgKiAyKTtcblxuICAgICAgICB2ZXJ0ZXgueiA9IHRhcmdldEludGVuc2l0eVJlZi5jdXJyZW50ICogKHdhdmVYMSArIHdhdmVYMiArIHdhdmVZMSk7XG5cbiAgICAgICAgcG9zaXRpb25zLnNldFhZWihpLCB2ZXJ0ZXgueCwgdmVydGV4LnksIHZlcnRleC56KTtcbiAgICAgIH1cblxuICAgICAgcG9zaXRpb25zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghdGV4dHVyZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGxhbmVcbiAgICAgIHJlZj17bWVzaFJlZn1cbiAgICAgIGFyZ3M9e1twbGFuZVNpemVbMF0sIHBsYW5lU2l6ZVsxXSwgMzIsIDMyXX1cbiAgICAgIHBvc2l0aW9uPXtbXG4gICAgICAgIHZpZXdwb3J0LndpZHRoIC8gMiAtIHBsYW5lU2l6ZVswXSAvIDIsXG4gICAgICAgIC12aWV3cG9ydC5oZWlnaHQgLyAyICsgcGxhbmVTaXplWzFdIC8gMixcbiAgICAgICAgMCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17dGV4dHVyZX0gdHJhbnNwYXJlbnQgLz5cbiAgICA8L1BsYW5lPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yV2F2ZVRleHR1cmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJQbGFuZSIsIlRIUkVFIiwiQ3Vyc29yV2F2ZVRleHR1cmUiLCJ0ZXh0dXJlUGF0aCIsImlzQXV0b0FuaW1hdGVkIiwibWVzaFJlZiIsInRhcmdldEludGVuc2l0eVJlZiIsImNhbnZhc0NlbnRlclJlZiIsIngiLCJ5Iiwic2l6ZSIsInZpZXdwb3J0IiwicGxhbmVTaXplIiwic2V0UGxhbmVTaXplIiwidGV4dHVyZSIsInNldFRleHR1cmUiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJsb2FkZWRUZXh0dXJlIiwiY29sb3JTcGFjZSIsIlNSR0JDb2xvclNwYWNlIiwiYXNwZWN0UmF0aW8iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiY3VycmVudCIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJwb3ciLCJtYXhEaXN0YW5jZSIsIm5ld1RhcmdldEludGVuc2l0eSIsIm1heCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWVzaCIsImdlb21ldHJ5IiwicG9zaXRpb25zIiwiYXR0cmlidXRlcyIsInBvc2l0aW9uIiwidGltZSIsIkRhdGUiLCJub3ciLCJpIiwiY291bnQiLCJ2ZXJ0ZXgiLCJWZWN0b3IzIiwiZnJvbUJ1ZmZlckF0dHJpYnV0ZSIsIndhdmVYMSIsInNpbiIsIndhdmVYMiIsIndhdmVZMSIsInoiLCJzZXRYWVoiLCJuZWVkc1VwZGF0ZSIsInJlZiIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsIm1hcCIsInRyYW5zcGFyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/molecules/Texture/CursorWaveTexture.tsx\n"));

/***/ })

});