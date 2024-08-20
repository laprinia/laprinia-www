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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar CursorWaveTexture = function(param) {\n    var texturePath = param.texturePath, _param_isAutoAnimated = param.isAutoAnimated, isAutoAnimated = _param_isAutoAnimated === void 0 ? false : _param_isAutoAnimated;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var targetIntensityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var canvasCenterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    texture.encoding = sRGBEncoding;\n    var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)(), size = _useThree.size, viewport = _useThree.viewport;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState[0], setPlaneSize = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //handle texture size\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(texture1) {\n            var aspectRatio = texture1.image.width / texture1.image.height;\n            var canvasWidth = viewport.width;\n            var canvasHeight = viewport.height;\n            var width = canvasWidth;\n            var height = width / aspectRatio;\n            if (height > canvasHeight) {\n                height = canvasHeight;\n                width = height * aspectRatio;\n            }\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove;\n        //handle mouse position\n        if (!isAutoAnimated) {\n            handleMouseMove = function(event) {\n                var clientX = event.clientX, clientY = event.clientY;\n                canvasCenterRef.current = {\n                    x: size.width / 2,\n                    y: size.height / 2\n                };\n                var distance = Math.sqrt(Math.pow(clientX - canvasCenterRef.current.x, 2) + Math.pow(clientY - canvasCenterRef.current.y, 2));\n                var maxDistance = Math.sqrt(Math.pow(viewport.width / 2, 2) + Math.pow(viewport.height / 2, 2));\n                var newTargetIntensity = distance * 0.5 / maxDistance / 100;\n                targetIntensityRef.current = Math.max(0.01, newTargetIntensity);\n                window.addEventListener(\"mousemove\", handleMouseMove);\n            };\n        } else {\n            targetIntensityRef.current = 0.8;\n        }\n        return function() {\n            if (!isAutoAnimated) {\n                window.removeEventListener(\"mousemove\", handleMouseMove);\n            }\n        };\n    }, [\n        texturePath,\n        size,\n        viewport,\n        isAutoAnimated\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x + time * 2);\n            var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time * 1);\n            var waveY1 = 0.5 * Math.sin(vertex.y * 2.5 + time * 2);\n            vertex.z = targetIntensityRef.current * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        position: [\n            viewport.width / 2 - planeSize[0] / 2,\n            -viewport.height / 2 + planeSize[1] / 2,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/Texture/CursorWaveTexture.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/Texture/CursorWaveTexture.tsx\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/Texture/CursorWaveTexture.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, _this);\n};\n_s(CursorWaveTexture, \"kuBOF4kAaPYe9q/rFTas0+fVNTo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = CursorWaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CursorWaveTexture);\nvar _c;\n$RefreshReg$(_c, \"CursorWaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9sZWN1bGVzL1RleHR1cmUvQ3Vyc29yV2F2ZVRleHR1cmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDSDtBQUNkO0FBQ1g7QUFFL0IsSUFBTVEsb0JBQW9CO1FBQ3hCQyxvQkFBQUEsMkNBQ0FDLGdCQUFBQSxvREFBaUI7O0lBS2pCLElBQU1DLFVBQVVULDZDQUFNQSxDQUFhO0lBQ25DLElBQU1VLHFCQUFxQlYsNkNBQU1BLENBQUM7SUFDbEMsSUFBTVcsa0JBQWtCWCw2Q0FBTUEsQ0FBMkI7UUFBRVksR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDdEVDLFFBQVFDLFFBQVEsR0FBR0M7SUFDbkIsSUFBMkJiLFlBQUFBLDREQUFRQSxJQUEzQmMsT0FBbUJkLFVBQW5CYyxNQUFNQyxXQUFhZixVQUFiZTtJQUNkLElBQWtDakIsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFtQjtRQUFDO1FBQUc7S0FBRSxPQUE1RGtCLFlBQTJCbEIsY0FBaEJtQixlQUFnQm5CO0lBRWxDRixnREFBU0EsQ0FBQztRQUNSLHFCQUFxQjtRQUNyQixJQUFNc0IsZ0JBQWdCLElBQUloQixnREFBbUI7UUFDN0NnQixjQUFjRSxJQUFJLENBQUNoQixhQUFhLFNBQUNPO1lBQy9CLElBQU1VLGNBQWNWLFNBQVFXLEtBQUssQ0FBQ0MsS0FBSyxHQUFHWixTQUFRVyxLQUFLLENBQUNFLE1BQU07WUFDOUQsSUFBTUMsY0FBY1YsU0FBU1EsS0FBSztZQUNsQyxJQUFNRyxlQUFlWCxTQUFTUyxNQUFNO1lBRXBDLElBQUlELFFBQVFFO1lBQ1osSUFBSUQsU0FBU0QsUUFBUUY7WUFFckIsSUFBSUcsU0FBU0UsY0FBYztnQkFDekJGLFNBQVNFO2dCQUNUSCxRQUFRQyxTQUFTSDtZQUNuQjtZQUNBSixhQUFhO2dCQUFDTTtnQkFBT0M7YUFBTztRQUM5QjtRQUVBLElBQUlHO1FBQ0osdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQ3RCLGdCQUFnQjtZQUNuQnNCLGtCQUFr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cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2xlY3VsZXMvVGV4dHVyZS9DdXJzb3JXYXZlVGV4dHVyZS50c3g/NTMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGcmFtZSwgdXNlVGhyZWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBQbGFuZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IEN1cnNvcldhdmVUZXh0dXJlID0gKHtcbiAgdGV4dHVyZVBhdGgsXG4gIGlzQXV0b0FuaW1hdGVkID0gZmFsc2UsXG59OiB7XG4gIHRleHR1cmVQYXRoOiBzdHJpbmc7XG4gIGlzQXV0b0FuaW1hdGVkPzogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgbWVzaFJlZiA9IHVzZVJlZjxUSFJFRS5NZXNoPihudWxsISk7XG4gIGNvbnN0IHRhcmdldEludGVuc2l0eVJlZiA9IHVzZVJlZigwKTtcbiAgY29uc3QgY2FudmFzQ2VudGVyUmVmID0gdXNlUmVmPHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oeyB4OiAwLCB5OiAwIH0pO1xuICB0ZXh0dXJlLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuICBjb25zdCB7IHNpemUsIHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpO1xuICBjb25zdCBbcGxhbmVTaXplLCBzZXRQbGFuZVNpemVdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyXT4oWzEsIDFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vaGFuZGxlIHRleHR1cmUgc2l6ZVxuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCwgKHRleHR1cmUpID0+IHtcbiAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGV4dHVyZS5pbWFnZS53aWR0aCAvIHRleHR1cmUuaW1hZ2UuaGVpZ2h0O1xuICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgbGV0IHdpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcblxuICAgICAgaWYgKGhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgICBzZXRQbGFuZVNpemUoW3dpZHRoLCBoZWlnaHRdKTtcbiAgICB9KTtcblxuICAgIGxldCBoYW5kbGVNb3VzZU1vdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICAvL2hhbmRsZSBtb3VzZSBwb3NpdGlvblxuICAgIGlmICghaXNBdXRvQW5pbWF0ZWQpIHtcbiAgICAgIGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50O1xuICAgICAgICBjYW52YXNDZW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICB4OiBzaXplLndpZHRoIC8gMixcbiAgICAgICAgICB5OiBzaXplLmhlaWdodCAvIDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgTWF0aC5wb3coY2xpZW50WCAtIGNhbnZhc0NlbnRlclJlZi5jdXJyZW50LngsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KGNsaWVudFkgLSBjYW52YXNDZW50ZXJSZWYuY3VycmVudC55LCAyKSxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBtYXhEaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICBNYXRoLnBvdyh2aWV3cG9ydC53aWR0aCAvIDIsIDIpICsgTWF0aC5wb3codmlld3BvcnQuaGVpZ2h0IC8gMiwgMiksXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbmV3VGFyZ2V0SW50ZW5zaXR5ID0gKGRpc3RhbmNlICogMC41KSAvIG1heERpc3RhbmNlIC8gMTAwO1xuICAgICAgICB0YXJnZXRJbnRlbnNpdHlSZWYuY3VycmVudCA9IE1hdGgubWF4KDAuMDEsIG5ld1RhcmdldEludGVuc2l0eSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEludGVuc2l0eVJlZi5jdXJyZW50ID0gMC44O1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIWlzQXV0b0FuaW1hdGVkKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3RleHR1cmVQYXRoLCBzaXplLCB2aWV3cG9ydCwgaXNBdXRvQW5pbWF0ZWRdKTtcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgY29uc3QgbWVzaCA9IG1lc2hSZWYuY3VycmVudCE7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpICogMC4wMDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCBpKTtcblxuICAgICAgY29uc3Qgd2F2ZVgxID0gMC41ICogTWF0aC5zaW4odmVydGV4LnggKyB0aW1lICogMik7XG4gICAgICBjb25zdCB3YXZlWDIgPSAwLjI1ICogTWF0aC5zaW4odmVydGV4LnggKiAxLjUgKyB0aW1lICogMSk7XG4gICAgICBjb25zdCB3YXZlWTEgPSAwLjUgKiBNYXRoLnNpbih2ZXJ0ZXgueSAqIDIuNSArIHRpbWUgKiAyKTtcblxuICAgICAgdmVydGV4LnogPSB0YXJnZXRJbnRlbnNpdHlSZWYuY3VycmVudCAqICh3YXZlWDEgKyB3YXZlWDIgKyB3YXZlWTEpO1xuXG4gICAgICBwb3NpdGlvbnMuc2V0WFlaKGksIHZlcnRleC54LCB2ZXJ0ZXgueSwgdmVydGV4LnopO1xuICAgIH1cblxuICAgIHBvc2l0aW9ucy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBsYW5lXG4gICAgICByZWY9e21lc2hSZWZ9XG4gICAgICBhcmdzPXtbcGxhbmVTaXplWzBdLCBwbGFuZVNpemVbMV0sIDMyLCAzMl19XG4gICAgICBwb3NpdGlvbj17W1xuICAgICAgICB2aWV3cG9ydC53aWR0aCAvIDIgLSBwbGFuZVNpemVbMF0gLyAyLFxuICAgICAgICAtdmlld3BvcnQuaGVpZ2h0IC8gMiArIHBsYW5lU2l6ZVsxXSAvIDIsXG4gICAgICAgIDAsXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBhdHRhY2g9XCJtYXRlcmlhbFwiIHRyYW5zcGFyZW50PlxuICAgICAgICA8cHJpbWl0aXZlXG4gICAgICAgICAgYXR0YWNoPVwibWFwXCJcbiAgICAgICAgICBvYmplY3Q9e25ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0ZXh0dXJlUGF0aCl9XG4gICAgICAgIC8+XG4gICAgICA8L21lc2hTdGFuZGFyZE1hdGVyaWFsPlxuICAgIDwvUGxhbmU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXJzb3JXYXZlVGV4dHVyZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsIlBsYW5lIiwiVEhSRUUiLCJDdXJzb3JXYXZlVGV4dHVyZSIsInRleHR1cmVQYXRoIiwiaXNBdXRvQW5pbWF0ZWQiLCJtZXNoUmVmIiwidGFyZ2V0SW50ZW5zaXR5UmVmIiwiY2FudmFzQ2VudGVyUmVmIiwieCIsInkiLCJ0ZXh0dXJlIiwiZW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJzaXplIiwidmlld3BvcnQiLCJwbGFuZVNpemUiLCJzZXRQbGFuZVNpemUiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJhc3BlY3RSYXRpbyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJjdXJyZW50IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsIm1heERpc3RhbmNlIiwibmV3VGFyZ2V0SW50ZW5zaXR5IiwibWF4Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZXNoIiwicG9zaXRpb25zIiwiZ2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImkiLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwid2F2ZVgxIiwic2luIiwid2F2ZVgyIiwid2F2ZVkxIiwieiIsInNldFhZWiIsIm5lZWRzVXBkYXRlIiwicmVmIiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiYXR0YWNoIiwidHJhbnNwYXJlbnQiLCJwcmltaXRpdmUiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/Texture/CursorWaveTexture.tsx\n"));

/***/ })

});