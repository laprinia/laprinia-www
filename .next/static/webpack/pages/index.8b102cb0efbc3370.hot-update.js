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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WaveTexture = function(param) {\n    var texturePath = param.texturePath;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)().size; // To get the size of the viewport\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), intensity = _useState[0], setIntensity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState1[0], setPlaneSize = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Load texture and calculate aspect ratio\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(texture) {\n            var aspectRatio = texture.image.width / texture.image.height;\n            var maxWidth = size.width * 0.2; // Limit to 80% of viewport width\n            var maxHeight = size.height * 0.2; // Limit to 80% of viewport height\n            console.log(texture.image.width, texture.image.height, aspectRatio);\n            console.log(size.width, size.height, aspectRatio);\n            // Calculate sizes based on aspect ratio and limits\n            var width = maxWidth;\n            var height = maxWidth / aspectRatio;\n            if (height > maxHeight) {\n                height = maxHeight;\n                width = maxHeight * aspectRatio;\n            }\n            console.log(width, height, aspectRatio);\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            var canvasCenter = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            // Calculate distance between mouse and canvas center\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenter.x, 2) + Math.pow(clientY - canvasCenter.y, 2));\n            console.log(\"distance\", distance);\n            // Map distance to intensity range (0 to 4)\n            var newIntensity = (distance - 300) * 1.5 / (1300 - 300);\n            console.log(\"new Intensit\", newIntensity);\n            // Update intensity only if it has changed significantly\n            if (Math.abs(newIntensity - intensity) > 0.2) {\n                console.log(\"updating value\");\n                setIntensity(newIntensity);\n            }\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, [\n        texturePath,\n        size\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x * 2 + time * 2);\n            var waveX2 = 0.25 * Math.sin(vertex.x * 3 + time * 2);\n            var waveY1 = 0.1 * Math.sin(vertex.y * 5 + time * 2);\n            vertex.z = intensity * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, _this);\n};\n_s(WaveTexture, \"F8TeVdqfABVB+OKuo3p/vJK05nw=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = WaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveTexture);\nvar _c;\n$RefreshReg$(_c, \"WaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0QsT0FBT0UsbUJBQW1CLENBQUNYLFdBQVdPO1lBRXRDLElBQU1LLFNBQVMsTUFBTXRCLEtBQUt1QixHQUFHLENBQUNKLE9BQU90QixDQUFDLEdBQUcsSUFBSWlCLE9BQU87WUFDcEQsSUFBTVUsU0FBUyxPQUFPeEIsS0FBS3VCLEdBQUcsQ0FBQ0osT0FBT3RCLENBQUMsR0FBRyxJQUFJaUIsT0FBTztZQUNyRCxJQUFNVyxTQUFTLE1BQU16QixLQUFLdUIsR0FBRyxDQUFDSixPQUFPckIsQ0FBQyxHQUFHLElBQUlnQixPQUFPO1lBRXBESyxPQUFPTyxDQUFDLEdBQUdsRCxZQUFhOEMsQ0FBQUEsU0FBU0UsU0FBU0MsTUFBSztZQUUvQ2YsVUFBVWlCLE1BQU0sQ0FBQ1YsR0FBR0UsT0FBT3RCLENBQUMsRUFBRXNCLE9BQU9yQixDQUFDLEVBQUVxQixPQUFPTyxDQUFDO1FBQ2xEO1FBRUFoQixVQUFVa0IsV0FBVyxHQUFHO0lBQzFCO0lBRUEscUJBQ0UsOERBQUMxRCxvREFBS0E7UUFBQzJELEtBQUt2RDtRQUFTd0QsTUFBTTtZQUFDcEQsU0FBUyxDQUFDLEVBQUU7WUFBRUEsU0FBUyxDQUFDLEVBQUU7WUFBRTtZQUFJO1NBQUc7a0JBQzdELDRFQUFDcUQ7WUFBcUJDLFFBQU87WUFBV0MsV0FBVztzQkFDakQsNEVBQUNDO2dCQUNDRixRQUFPO2dCQUNQRyxRQUFRLElBQUloRSxnREFBbUIsR0FBR1csSUFBSSxDQUFDVDs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRDtHQTFGTUQ7O1FBRWFILHdEQUFRQTtRQXlEekJELHdEQUFRQTs7O0tBM0RKSTtBQTJGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9sZWN1bGVzL1dhdmVUZXh0dXJlLnRzeD80OTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IFBsYW5lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgV2F2ZVRleHR1cmUgPSAoeyB0ZXh0dXJlUGF0aCB9OiB7IHRleHR1cmVQYXRoOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBtZXNoUmVmID0gdXNlUmVmPFRIUkVFLk1lc2g+KG51bGwhKTtcbiAgY29uc3QgeyBzaXplIH0gPSB1c2VUaHJlZSgpOyAvLyBUbyBnZXQgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0XG4gIGNvbnN0IFtpbnRlbnNpdHksIHNldEludGVuc2l0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BsYW5lU2l6ZSwgc2V0UGxhbmVTaXplXSA9IHVzZVN0YXRlPFtudW1iZXIsIG51bWJlcl0+KFsxLCAxXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBMb2FkIHRleHR1cmUgYW5kIGNhbGN1bGF0ZSBhc3BlY3QgcmF0aW9cbiAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgsICh0ZXh0dXJlKSA9PiB7XG4gICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRleHR1cmUuaW1hZ2Uud2lkdGggLyB0ZXh0dXJlLmltYWdlLmhlaWdodDtcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gc2l6ZS53aWR0aCAqIDAuMjsgLy8gTGltaXQgdG8gODAlIG9mIHZpZXdwb3J0IHdpZHRoXG4gICAgICBjb25zdCBtYXhIZWlnaHQgPSBzaXplLmhlaWdodCAqIDAuMjsgLy8gTGltaXQgdG8gODAlIG9mIHZpZXdwb3J0IGhlaWdodFxuXG4gICAgICBjb25zb2xlLmxvZyh0ZXh0dXJlLmltYWdlLndpZHRoLCB0ZXh0dXJlLmltYWdlLmhlaWdodCwgYXNwZWN0UmF0aW8pO1xuICAgICAgY29uc29sZS5sb2coc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIGFzcGVjdFJhdGlvKTtcbiAgICAgIC8vIENhbGN1bGF0ZSBzaXplcyBiYXNlZCBvbiBhc3BlY3QgcmF0aW8gYW5kIGxpbWl0c1xuICAgICAgbGV0IHdpZHRoID0gbWF4V2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gbWF4V2lkdGggLyBhc3BlY3RSYXRpbztcblxuICAgICAgaWYgKGhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIHdpZHRoID0gbWF4SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0LCBhc3BlY3RSYXRpbyk7XG4gICAgICBzZXRQbGFuZVNpemUoW3dpZHRoLCBoZWlnaHRdKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICAgIGNvbnN0IGNhbnZhc0NlbnRlciA9IHtcbiAgICAgICAgeDogc2l6ZS53aWR0aCAvIDIsXG4gICAgICAgIHk6IHNpemUuaGVpZ2h0IC8gMixcbiAgICAgIH07XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBkaXN0YW5jZSBiZXR3ZWVuIG1vdXNlIGFuZCBjYW52YXMgY2VudGVyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3coY2xpZW50WCAtIGNhbnZhc0NlbnRlci54LCAyKSArXG4gICAgICAgICAgTWF0aC5wb3coY2xpZW50WSAtIGNhbnZhc0NlbnRlci55LCAyKSxcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcImRpc3RhbmNlXCIsIGRpc3RhbmNlKTtcbiAgICAgIC8vIE1hcCBkaXN0YW5jZSB0byBpbnRlbnNpdHkgcmFuZ2UgKDAgdG8gNClcbiAgICAgIGNvbnN0IG5ld0ludGVuc2l0eSA9ICgoZGlzdGFuY2UgLSAzMDApICogMS41KSAvICgxMzAwIC0gMzAwKTtcblxuICAgICAgY29uc29sZS5sb2coXCJuZXcgSW50ZW5zaXRcIiwgbmV3SW50ZW5zaXR5KTtcbiAgICAgIC8vIFVwZGF0ZSBpbnRlbnNpdHkgb25seSBpZiBpdCBoYXMgY2hhbmdlZCBzaWduaWZpY2FudGx5XG4gICAgICBpZiAoTWF0aC5hYnMobmV3SW50ZW5zaXR5IC0gaW50ZW5zaXR5KSA+IDAuMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0aW5nIHZhbHVlXCIpO1xuICAgICAgICBzZXRJbnRlbnNpdHkobmV3SW50ZW5zaXR5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIH07XG4gIH0sIFt0ZXh0dXJlUGF0aCwgc2l6ZV0pO1xuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBjb25zdCBtZXNoID0gbWVzaFJlZi5jdXJyZW50ITtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG4gICAgY29uc3QgdGltZSA9IERhdGUubm93KCkgKiAwLjAwMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIGkpO1xuXG4gICAgICBjb25zdCB3YXZlWDEgPSAwLjUgKiBNYXRoLnNpbih2ZXJ0ZXgueCAqIDIgKyB0aW1lICogMik7XG4gICAgICBjb25zdCB3YXZlWDIgPSAwLjI1ICogTWF0aC5zaW4odmVydGV4LnggKiAzICsgdGltZSAqIDIpO1xuICAgICAgY29uc3Qgd2F2ZVkxID0gMC4xICogTWF0aC5zaW4odmVydGV4LnkgKiA1ICsgdGltZSAqIDIpO1xuXG4gICAgICB2ZXJ0ZXgueiA9IGludGVuc2l0eSAqICh3YXZlWDEgKyB3YXZlWDIgKyB3YXZlWTEpO1xuXG4gICAgICBwb3NpdGlvbnMuc2V0WFlaKGksIHZlcnRleC54LCB2ZXJ0ZXgueSwgdmVydGV4LnopO1xuICAgIH1cblxuICAgIHBvc2l0aW9ucy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBsYW5lIHJlZj17bWVzaFJlZn0gYXJncz17W3BsYW5lU2l6ZVswXSwgcGxhbmVTaXplWzFdLCAzMiwgMzJdfT5cbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBhdHRhY2g9XCJtYXRlcmlhbFwiIHRyYW5zcGFyZW50PlxuICAgICAgICA8cHJpbWl0aXZlXG4gICAgICAgICAgYXR0YWNoPVwibWFwXCJcbiAgICAgICAgICBvYmplY3Q9e25ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0ZXh0dXJlUGF0aCl9XG4gICAgICAgIC8+XG4gICAgICA8L21lc2hTdGFuZGFyZE1hdGVyaWFsPlxuICAgIDwvUGxhbmU+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV2F2ZVRleHR1cmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJQbGFuZSIsIlRIUkVFIiwiV2F2ZVRleHR1cmUiLCJ0ZXh0dXJlUGF0aCIsIm1lc2hSZWYiLCJzaXplIiwiaW50ZW5zaXR5Iiwic2V0SW50ZW5zaXR5IiwicGxhbmVTaXplIiwic2V0UGxhbmVTaXplIiwidGV4dHVyZUxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwidGV4dHVyZSIsImFzcGVjdFJhdGlvIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJjYW52YXNDZW50ZXIiLCJ4IiwieSIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJwb3ciLCJuZXdJbnRlbnNpdHkiLCJhYnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1lc2giLCJjdXJyZW50IiwicG9zaXRpb25zIiwiZ2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImkiLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwid2F2ZVgxIiwic2luIiwid2F2ZVgyIiwid2F2ZVkxIiwieiIsInNldFhZWiIsIm5lZWRzVXBkYXRlIiwicmVmIiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiYXR0YWNoIiwidHJhbnNwYXJlbnQiLCJwcmltaXRpdmUiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/WaveTexture.tsx\n"));

/***/ })

});