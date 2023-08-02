"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/page",{

/***/ "(app-pages-browser)/./components/carousel/index.tsx":
/*!***************************************!*\
  !*** ./components/carousel/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Carousel(param) {\n    let { children: slides, autoslides = false, autoSlideInterval = 3000 } = param;\n    _s();\n    const [curr, setCurr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const prev = ()=>setCurr((curr)=>curr === 0 ? slides.length - 1 : curr - 1);\n    const next = ()=>setCurr((curr)=>curr === slides.length - 1 ? 0 : curr + 1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!autoslides) return;\n        const slideInterval = setInterval(next, autoSlideInterval);\n        return ()=>clearInterval(slideInterval);\n    }, [\n        next,\n        autoSlideInterval,\n        autoslides\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-full overflow-hidden\",\n        children: [\n            slides.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 left-0 w-full h-full transition-opacity duration-500 \".concat(curr === index ? \"opacity-100\" : \"opacity-0\"),\n                    children: slide\n                }, index, false, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 flex items-center justify-between p-2 z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prev,\n                        className: \"p-1 rounded-full shadow bg-white text-gray-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: next,\n                        className: \"p-1 rounded-full shadow bg-white text-gray-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-4 right-0 left-0 z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-2\",\n                    children: slides.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-3 h-3 bg-white rounded-full transition-all \".concat(curr === i ? \"bg-opacity-100\" : \"bg-opacity-50\")\n                        }, i, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Carousel, \"gWXkG9yR6KANghhymC7ZEtLY3KY=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2Fyb3VzZWwvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ2I7QUFRN0IsU0FBU0ksU0FBUyxLQUlqQjtRQUppQixFQUMvQkMsVUFBVUMsTUFBTSxFQUNoQkMsYUFBYSxLQUFLLEVBQ2xCQyxvQkFBb0IsSUFBSSxFQUNWLEdBSmlCOztJQUsvQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakMsTUFBTVEsT0FBTyxJQUNYRCxRQUFRLENBQUNELE9BQVVBLFNBQVMsSUFBSUgsT0FBT00sTUFBTSxHQUFHLElBQUlILE9BQU87SUFDN0QsTUFBTUksT0FBTyxJQUNYSCxRQUFRLENBQUNELE9BQVVBLFNBQVNILE9BQU9NLE1BQU0sR0FBRyxJQUFJLElBQUlILE9BQU87SUFFN0RQLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDSyxZQUFZO1FBQ2pCLE1BQU1PLGdCQUFnQkMsWUFBWUYsTUFBTUw7UUFDeEMsT0FBTyxJQUFNUSxjQUFjRjtJQUM3QixHQUFHO1FBQUNEO1FBQU1MO1FBQW1CRDtLQUFXO0lBRXhDLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOztZQUNaWixPQUFPYSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDSjtvQkFFQ0MsV0FBVyx1RUFBb0gsT0FBN0NULFNBQVNZLFFBQVEsZ0JBQWdCOzhCQUVsSEQ7bUJBSElDOzs7OzswQkFNVCw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFBT0MsU0FBU1o7d0JBQU1PLFdBQVU7a0NBQy9CLDRFQUFDbEIsb0RBQVdBOzRCQUFDd0IsTUFBTTs7Ozs7Ozs7Ozs7a0NBRXJCLDhEQUFDRjt3QkFBT0MsU0FBU1Y7d0JBQU1LLFdBQVU7a0NBQy9CLDRFQUFDakIsb0RBQVlBOzRCQUFDdUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDUDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1paLE9BQU9hLEdBQUcsQ0FBQyxDQUFDTSxHQUFRQyxrQkFDbkIsOERBQUNUOzRCQUVDQyxXQUFXLGdEQUFnRyxPQUFoRFQsU0FBU2lCLElBQUksbUJBQW1COzJCQUR0RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQjtHQWhEd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nhcm91c2VsL2luZGV4LnRzeD81OWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBDYXJvdXNlbFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICBhdXRvc2xpZGVzPzogYm9vbGVhbjtcbiAgYXV0b1NsaWRlSW50ZXJ2YWw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHtcbiAgY2hpbGRyZW46IHNsaWRlcyxcbiAgYXV0b3NsaWRlcyA9IGZhbHNlLFxuICBhdXRvU2xpZGVJbnRlcnZhbCA9IDMwMDAsXG59OiBDYXJvdXNlbFByb3BzKSB7XG4gIGNvbnN0IFtjdXJyLCBzZXRDdXJyXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHByZXYgPSAoKSA9PlxuICAgIHNldEN1cnIoKGN1cnIpID0+IChjdXJyID09PSAwID8gc2xpZGVzLmxlbmd0aCAtIDEgOiBjdXJyIC0gMSkpO1xuICBjb25zdCBuZXh0ID0gKCkgPT5cbiAgICBzZXRDdXJyKChjdXJyKSA9PiAoY3VyciA9PT0gc2xpZGVzLmxlbmd0aCAtIDEgPyAwIDogY3VyciArIDEpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXV0b3NsaWRlcykgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0LCBhdXRvU2xpZGVJbnRlcnZhbCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoc2xpZGVJbnRlcnZhbCk7XG4gIH0sIFtuZXh0LCBhdXRvU2xpZGVJbnRlcnZhbCwgYXV0b3NsaWRlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwICR7Y3VyciA9PT0gaW5kZXggPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzbGlkZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yIHotMTBcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2fSBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1mdWxsIHNoYWRvdyBiZy13aGl0ZSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgPENoZXZyb25MZWZ0IHNpemU9ezQwfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1mdWxsIHNoYWRvdyBiZy13aGl0ZSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgPENoZXZyb25SaWdodCBzaXplPXs0MH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtMCBsZWZ0LTAgei0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAge3NsaWRlcy5tYXAoKF86IGFueSwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0zIGgtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgJHtjdXJyID09PSBpID8gXCJiZy1vcGFjaXR5LTEwMFwiIDogXCJiZy1vcGFjaXR5LTUwXCJ9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2hldnJvbkxlZnQiLCJDaGV2cm9uUmlnaHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwiY2hpbGRyZW4iLCJzbGlkZXMiLCJhdXRvc2xpZGVzIiwiYXV0b1NsaWRlSW50ZXJ2YWwiLCJjdXJyIiwic2V0Q3VyciIsInByZXYiLCJsZW5ndGgiLCJuZXh0Iiwic2xpZGVJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSIsIl8iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/carousel/index.tsx\n"));

/***/ })

});