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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WaveTexture = function(param) {\n    var texturePath = param.texturePath;\n    _s();\n    var meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)().size; // To get the size of the viewport\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), intensity = _useState[0], setIntensity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        1\n    ]), 2), planeSize = _useState1[0], setPlaneSize = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\n        textureLoader.load(texturePath, function(texture) {\n            var aspectRatio = texture.image.width / texture.image.height;\n            var maxWidth = size.width * 0.013;\n            var maxHeight = size.height * 0.013;\n            console.log(texture.image.width, texture.image.height, aspectRatio);\n            console.log(size.width, size.height, aspectRatio);\n            var width = maxWidth;\n            var height = maxWidth / aspectRatio;\n            if (height > maxHeight) {\n                height = maxHeight;\n                width = maxHeight * aspectRatio;\n            }\n            console.log(width, height, aspectRatio);\n            setPlaneSize([\n                width,\n                height\n            ]);\n        });\n        var handleMouseMove = function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            var canvasCenter = {\n                x: size.width / 2,\n                y: size.height / 2\n            };\n            // Calculate distance between mouse and canvas center\n            var distance = Math.sqrt(Math.pow(clientX - canvasCenter.x, 2) + Math.pow(clientY - canvasCenter.y, 2));\n            console.log(\"distance\", distance);\n            // Map distance to intensity range (0 to 1.5)\n            var newIntensity = (distance - 300) * 1.5 / (1300 - 300);\n            console.log(\"new Intensit\", newIntensity);\n            // Update intensity only if it has changed significantly\n            if (Math.abs(newIntensity - intensity) > 0.4) {\n                console.log(\"updating value\");\n                setIntensity(newIntensity);\n            }\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, [\n        texturePath,\n        size\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        var mesh = meshRef.current;\n        var positions = mesh.geometry.attributes.position;\n        var time = Date.now() * 0.001;\n        for(var i = 0; i < positions.count; i++){\n            var vertex = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            vertex.fromBufferAttribute(positions, i);\n            var waveX1 = 0.5 * Math.sin(vertex.x * 1 + time * 2); // Decreased frequency from 2 to 1\n            var waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time * 2); // Decreased frequency from 3 to 1.5\n            var waveY1 = 0.1 * Math.sin(vertex.y * 2.5 + time * 2); // Decreased frequency from 5 to 2.5\n            vertex.z = intensity * (waveX1 + waveX2 + waveY1);\n            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);\n        }\n        positions.needsUpdate = true;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Plane, {\n        ref: meshRef,\n        args: [\n            planeSize[0],\n            planeSize[1],\n            32,\n            32\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            attach: \"material\",\n            transparent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                attach: \"map\",\n                object: new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader().load(texturePath)\n            }, void 0, false, {\n                fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laprinia/Desktop/projects/laprinia-web/src/molecules/WaveTexture.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(WaveTexture, \"F8TeVdqfABVB+OKuo3p/vJK05nw=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = WaveTexture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveTexture);\nvar _c;\n$RefreshReg$(_c, \"WaveTexture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLdUIsR0FBRyxDQUFDSixPQUFPdEIsQ0FBQyxHQUFHLElBQUlpQixPQUFPLElBQUksa0NBQWtDO1lBQzFGLElBQU1VLFNBQVMsT0FBT3hCLEtBQUt1QixHQUFHLENBQUNKLE9BQU90QixDQUFDLEdBQUcsTUFBTWlCLE9BQU8sSUFBSSxvQ0FBb0M7WUFDL0YsSUFBTVcsU0FBUyxNQUFNekIsS0FBS3VCLEdBQUcsQ0FBQ0osT0FBT3JCLENBQUMsR0FBRyxNQUFNZ0IsT0FBTyxJQUFJLG9DQUFvQztZQUU5RkssT0FBT08sQ0FBQyxHQUFHbEQsWUFBYThDLENBQUFBLFNBQVNFLFNBQVNDLE1BQUs7WUFFL0NmLFVBQVVpQixNQUFNLENBQUNWLEdBQUdFLE9BQU90QixDQUFDLEVBQUVzQixPQUFPckIsQ0FBQyxFQUFFcUIsT0FBT08sQ0FBQztRQUNsRDtRQUVBaEIsVUFBVWtCLFdBQVcsR0FBRztJQUMxQjtJQUVBLHFCQUNFLDhEQUFDMUQsb0RBQUtBO1FBQUMyRCxLQUFLdkQ7UUFBU3dELE1BQU07WUFBQ3BELFNBQVMsQ0FBQyxFQUFFO1lBQUVBLFNBQVMsQ0FBQyxFQUFFO1lBQUU7WUFBSTtTQUFHO2tCQUM3RCw0RUFBQ3FEO1lBQXFCQyxRQUFPO1lBQVdDLFdBQVc7c0JBQ2pELDRFQUFDQztnQkFDQ0YsUUFBTztnQkFDUEcsUUFBUSxJQUFJaEUsZ0RBQW1CLEdBQUdXLElBQUksQ0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakQ7R0F6Rk1EOztRQUVhSCx3REFBUUE7UUF3RHpCRCx3REFBUUE7OztLQTFESkk7QUEwRk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vbGVjdWxlcy9XYXZlVGV4dHVyZS50c3g/NDk3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGcmFtZSwgdXNlVGhyZWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBQbGFuZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFdhdmVUZXh0dXJlID0gKHsgdGV4dHVyZVBhdGggfTogeyB0ZXh0dXJlUGF0aDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgbWVzaFJlZiA9IHVzZVJlZjxUSFJFRS5NZXNoPihudWxsISk7XG4gIGNvbnN0IHsgc2l6ZSB9ID0gdXNlVGhyZWUoKTsgLy8gVG8gZ2V0IHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydFxuICBjb25zdCBbaW50ZW5zaXR5LCBzZXRJbnRlbnNpdHldID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwbGFuZVNpemUsIHNldFBsYW5lU2l6ZV0gPSB1c2VTdGF0ZTxbbnVtYmVyLCBudW1iZXJdPihbMSwgMV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoLCAodGV4dHVyZSkgPT4ge1xuICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0ZXh0dXJlLmltYWdlLndpZHRoIC8gdGV4dHVyZS5pbWFnZS5oZWlnaHQ7XG4gICAgICBjb25zdCBtYXhXaWR0aCA9IHNpemUud2lkdGggKiAwLjAxMztcbiAgICAgIGNvbnN0IG1heEhlaWdodCA9IHNpemUuaGVpZ2h0ICogMC4wMTM7XG5cbiAgICAgIGNvbnNvbGUubG9nKHRleHR1cmUuaW1hZ2Uud2lkdGgsIHRleHR1cmUuaW1hZ2UuaGVpZ2h0LCBhc3BlY3RSYXRpbyk7XG4gICAgICBjb25zb2xlLmxvZyhzaXplLndpZHRoLCBzaXplLmhlaWdodCwgYXNwZWN0UmF0aW8pO1xuXG4gICAgICBsZXQgd2lkdGggPSBtYXhXaWR0aDtcbiAgICAgIGxldCBoZWlnaHQgPSBtYXhXaWR0aCAvIGFzcGVjdFJhdGlvO1xuXG4gICAgICBpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIGhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgd2lkdGggPSBtYXhIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQsIGFzcGVjdFJhdGlvKTtcbiAgICAgIHNldFBsYW5lU2l6ZShbd2lkdGgsIGhlaWdodF0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgY2FudmFzQ2VudGVyID0ge1xuICAgICAgICB4OiBzaXplLndpZHRoIC8gMixcbiAgICAgICAgeTogc2l6ZS5oZWlnaHQgLyAyLFxuICAgICAgfTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIGRpc3RhbmNlIGJldHdlZW4gbW91c2UgYW5kIGNhbnZhcyBjZW50ZXJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhjbGllbnRYIC0gY2FudmFzQ2VudGVyLngsIDIpICtcbiAgICAgICAgICBNYXRoLnBvdyhjbGllbnRZIC0gY2FudmFzQ2VudGVyLnksIDIpLFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGlzdGFuY2VcIiwgZGlzdGFuY2UpO1xuICAgICAgLy8gTWFwIGRpc3RhbmNlIHRvIGludGVuc2l0eSByYW5nZSAoMCB0byAxLjUpXG4gICAgICBjb25zdCBuZXdJbnRlbnNpdHkgPSAoKGRpc3RhbmNlIC0gMzAwKSAqIDEuNSkgLyAoMTMwMCAtIDMwMCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IEludGVuc2l0XCIsIG5ld0ludGVuc2l0eSk7XG4gICAgICAvLyBVcGRhdGUgaW50ZW5zaXR5IG9ubHkgaWYgaXQgaGFzIGNoYW5nZWQgc2lnbmlmaWNhbnRseVxuICAgICAgaWYgKE1hdGguYWJzKG5ld0ludGVuc2l0eSAtIGludGVuc2l0eSkgPiAwLjQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGluZyB2YWx1ZVwiKTtcbiAgICAgICAgc2V0SW50ZW5zaXR5KG5ld0ludGVuc2l0eSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICB9O1xuICB9LCBbdGV4dHVyZVBhdGgsIHNpemVdKTtcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgY29uc3QgbWVzaCA9IG1lc2hSZWYuY3VycmVudCE7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpICogMC4wMDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCBpKTtcblxuICAgICAgY29uc3Qgd2F2ZVgxID0gMC41ICogTWF0aC5zaW4odmVydGV4LnggKiAxICsgdGltZSAqIDIpOyAvLyBEZWNyZWFzZWQgZnJlcXVlbmN5IGZyb20gMiB0byAxXG4gICAgICBjb25zdCB3YXZlWDIgPSAwLjI1ICogTWF0aC5zaW4odmVydGV4LnggKiAxLjUgKyB0aW1lICogMik7IC8vIERlY3JlYXNlZCBmcmVxdWVuY3kgZnJvbSAzIHRvIDEuNVxuICAgICAgY29uc3Qgd2F2ZVkxID0gMC4xICogTWF0aC5zaW4odmVydGV4LnkgKiAyLjUgKyB0aW1lICogMik7IC8vIERlY3JlYXNlZCBmcmVxdWVuY3kgZnJvbSA1IHRvIDIuNVxuXG4gICAgICB2ZXJ0ZXgueiA9IGludGVuc2l0eSAqICh3YXZlWDEgKyB3YXZlWDIgKyB3YXZlWTEpO1xuXG4gICAgICBwb3NpdGlvbnMuc2V0WFlaKGksIHZlcnRleC54LCB2ZXJ0ZXgueSwgdmVydGV4LnopO1xuICAgIH1cblxuICAgIHBvc2l0aW9ucy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBsYW5lIHJlZj17bWVzaFJlZn0gYXJncz17W3BsYW5lU2l6ZVswXSwgcGxhbmVTaXplWzFdLCAzMiwgMzJdfT5cbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBhdHRhY2g9XCJtYXRlcmlhbFwiIHRyYW5zcGFyZW50PlxuICAgICAgICA8cHJpbWl0aXZlXG4gICAgICAgICAgYXR0YWNoPVwibWFwXCJcbiAgICAgICAgICBvYmplY3Q9e25ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0ZXh0dXJlUGF0aCl9XG4gICAgICAgIC8+XG4gICAgICA8L21lc2hTdGFuZGFyZE1hdGVyaWFsPlxuICAgIDwvUGxhbmU+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV2F2ZVRleHR1cmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJQbGFuZSIsIlRIUkVFIiwiV2F2ZVRleHR1cmUiLCJ0ZXh0dXJlUGF0aCIsIm1lc2hSZWYiLCJzaXplIiwiaW50ZW5zaXR5Iiwic2V0SW50ZW5zaXR5IiwicGxhbmVTaXplIiwic2V0UGxhbmVTaXplIiwidGV4dHVyZUxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwidGV4dHVyZSIsImFzcGVjdFJhdGlvIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJjYW52YXNDZW50ZXIiLCJ4IiwieSIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJwb3ciLCJuZXdJbnRlbnNpdHkiLCJhYnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1lc2giLCJjdXJyZW50IiwicG9zaXRpb25zIiwiZ2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImkiLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwid2F2ZVgxIiwic2luIiwid2F2ZVgyIiwid2F2ZVkxIiwieiIsInNldFhZWiIsIm5lZWRzVXBkYXRlIiwicmVmIiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiYXR0YWNoIiwidHJhbnNwYXJlbnQiLCJwcmltaXRpdmUiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/molecules/WaveTexture.tsx\n"));

/***/ })

});