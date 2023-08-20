"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_components_homepage_home-carousel_index_tsx";
exports.ids = ["_rsc_components_homepage_home-carousel_index_tsx"];
exports.modules = {

/***/ "(rsc)/./components/carousel/index.tsx":
/*!***************************************!*\
  !*** ./components/carousel/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "(rsc)/./components/homepage/home-carousel/index.tsx":
/*!*****************************************************!*\
  !*** ./components/homepage/home-carousel/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomeCarousel)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/carousel */ \"(rsc)/./components/carousel/index.tsx\");\n\n\nconst slides = [\n    {\n        imgSrc: \"/images/homepage-image-2.png\",\n        text: \"Know every visitor journey With Ariadne's Solution\"\n    },\n    {\n        imgSrc: \"/images/homepage-image-2.png\",\n        text: \"Text for image 2\"\n    },\n    {\n        imgSrc: \"/images/homepage-image-2.png\",\n        text: \"Text for image 3\"\n    }\n];\nfunction HomeCarousel() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"carousel-container md:w-screen md:mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: slides.map((s, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-full h-full object-cover brightness-50\",\n                                src: s.imgSrc,\n                                alt: \"alt\"\n                            }, void 0, false, {\n                                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/home-carousel/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 27\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-0 flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white text-2xl font-bold\",\n                                    children: s.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/home-carousel/index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 31\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/home-carousel/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 27\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/home-carousel/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 23\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/home-carousel/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/home-carousel/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/home-carousel/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWUtY2Fyb3VzZWwvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLFNBQVE7SUFDWjtRQUNJQyxRQUFRO1FBQ1JDLE1BQU07SUFDVjtJQUNBO1FBQ0lELFFBQVE7UUFDUkMsTUFBTTtJQUNWO0lBQ0E7UUFDSUQsUUFBUTtRQUNSQyxNQUFNO0lBQ1Y7Q0FDRDtBQUNjLFNBQVNDO0lBQ3RCLHFCQUNJLDhEQUFDQztRQUFLQyxXQUFVO2tCQUNaLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNYLDRFQUFDTiw0REFBUUE7MEJBQ0pDLE9BQU9PLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDWiw4REFBQ0g7d0JBQWdCRCxXQUFVOzswQ0FDdkIsOERBQUNLO2dDQUFJTCxXQUFVO2dDQUEyQ00sS0FBS0gsRUFBRVAsTUFBTTtnQ0FBRVcsS0FBSTs7Ozs7OzBDQUM3RSw4REFBQ047Z0NBQUlELFdBQVU7MENBQ1gsNEVBQUNRO29DQUFFUixXQUFVOzhDQUFpQ0csRUFBRU4sSUFBSTs7Ozs7Ozs7Ozs7O3VCQUhsRE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZW1wbGF0ZS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZS1jYXJvdXNlbC9pbmRleC50c3g/MTFjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIkAvY29tcG9uZW50cy9jYXJvdXNlbFwiXG5cbmNvbnN0IHNsaWRlcyA9W1xuICB7XG4gICAgICBpbWdTcmM6ICcvaW1hZ2VzL2hvbWVwYWdlLWltYWdlLTIucG5nJyxcbiAgICAgIHRleHQ6ICdLbm93IGV2ZXJ5IHZpc2l0b3Igam91cm5leSBXaXRoIEFyaWFkbmVcXCdzIFNvbHV0aW9uJ1xuICB9LFxuICB7XG4gICAgICBpbWdTcmM6ICcvaW1hZ2VzL2hvbWVwYWdlLWltYWdlLTIucG5nJyxcbiAgICAgIHRleHQ6ICdUZXh0IGZvciBpbWFnZSAyJ1xuICB9LFxuICB7XG4gICAgICBpbWdTcmM6ICcvaW1hZ2VzL2hvbWVwYWdlLWltYWdlLTIucG5nJyxcbiAgICAgIHRleHQ6ICdUZXh0IGZvciBpbWFnZSAzJ1xuICB9LFxuXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZUNhcm91c2VsKCkgeyBcbiAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyIG1kOnctc2NyZWVuIG1kOm14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPENhcm91c2VsPlxuICAgICAgICAgICAgICAgICAge3NsaWRlcy5tYXAoKHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgYnJpZ2h0bmVzcy01MFwiIHNyYz17cy5pbWdTcmN9IGFsdD1cImFsdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGRcIj57cy50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJzbGlkZXMiLCJpbWdTcmMiLCJ0ZXh0IiwiSG9tZUNhcm91c2VsIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInMiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./components/homepage/home-carousel/index.tsx\n");

/***/ })

};
;