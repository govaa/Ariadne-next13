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

/***/ "(app-pages-browser)/./components/homepage/logo-carousel/index.tsx":
/*!*****************************************************!*\
  !*** ./components/homepage/logo-carousel/index.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogoCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst slides = [\n    \"/images/partner-logos/partner-101.png\",\n    \"/images/partner-logos/partner-102.png\",\n    \"/images/partner-logos/partner-103.png\",\n    \"/images/partner-logos/partner-104.png\",\n    \"/images/partner-logos/partner-105.png\",\n    \"/images/partner-logos/partner-106.png\",\n    \"/images/partner-logos/partner-107.png\",\n    \"/images/partner-logos/partner-108.png\",\n    \"/images/partner-logos/partner-109.png\",\n    \"/images/partner-logos/partner-110.png\",\n    \"/images/partner-logos/partner-111.png\",\n    \"/images/partner-logos/partner-112.png\",\n    \"/images/partner-logos/partner-113.png\",\n    \"/images/partner-logos/partner-114.png\",\n    \"/images/partner-logos/partner-115.png\",\n    \"/images/partner-logos/partner-116.png\",\n    \"/images/partner-logos/partner-117.png\",\n    \"/images/partner-logos/partner-118.png\"\n];\nfunction LogoCarousel() {\n    _s();\n    const [currentSlides, setCurrentSlides] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(slides.slice(0, 5));\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const nextSlide = ()=>{\n        if (currentIndex < slides.length - 1) {\n            setCurrentIndex((currentIndex)=>currentIndex + 1);\n        }\n    };\n    const prevSlide = ()=>{\n        if (currentIndex > 0) {\n            setCurrentIndex((currentIndex)=>currentIndex - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCurrentSlides(slides.slice(currentIndex, currentIndex + 5));\n    }, [\n        currentIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const autoCarousel = setInterval(()=>{\n            nextSlide();\n        }, 3000);\n        return ()=>clearInterval(autoCarousel);\n    }, [\n        currentIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-col gap-4 p-4 transition-all duration-500 ease-in-out \",\n                children: currentSlides.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: slide,\n                            alt: \"Partner Logos\",\n                            width: 200,\n                            height: 100,\n                            layout: \"intrinsic\"\n                        }, void 0, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 27\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2\",\n                onClick: prevSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    size: 24\n                }, void 0, false, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2\",\n                onClick: nextSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    size: 24\n                }, void 0, false, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 19\n    }, this);\n}\n_s(LogoCarousel, \"dty1D0j54i9Oz8Jp5Qi5xSvlGis=\");\n_c = LogoCarousel;\nvar _c;\n$RefreshReg$(_c, \"LogoCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvbG9nby1jYXJvdXNlbC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNzQztBQUM2QjtBQUNGO0FBRXpELE1BQU1NLFNBQVM7SUFDWDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDQztBQUNjLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTiwrQ0FBUUEsQ0FBQ0csT0FBT0ksS0FBSyxDQUFDLEdBQUc7SUFDbkUsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFFakQsTUFBTVUsWUFBWTtRQUNoQixJQUFJRixlQUFlTCxPQUFPUSxNQUFNLEdBQUcsR0FBRztZQUNwQ0YsZ0JBQWdCLENBQUNELGVBQWlCQSxlQUFlO1FBQ25EO0lBQ0Y7SUFFQSxNQUFNSSxZQUFZO1FBQ2hCLElBQUlKLGVBQWUsR0FBRztZQUNwQkMsZ0JBQWdCLENBQUNELGVBQWlCQSxlQUFlO1FBQ25EO0lBQ0Y7SUFFQVQsZ0RBQVNBLENBQUM7UUFDUk8saUJBQWlCSCxPQUFPSSxLQUFLLENBQUNDLGNBQWNBLGVBQWU7SUFDN0QsR0FBRztRQUFDQTtLQUFhO0lBRWpCVCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLGVBQWVDLFlBQVk7WUFDL0JKO1FBQ0YsR0FBRztRQUNILE9BQU8sSUFBTUssY0FBY0Y7SUFDN0IsR0FBRztRQUFDTDtLQUFhO0lBRWpCLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1paLGNBQWNhLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDekIsOERBQUNKO2tDQUNDLDRFQUFDbkIsbURBQUtBOzRCQUFDd0IsS0FBS0Y7NEJBQU9HLEtBQUk7NEJBQWdCQyxPQUFPOzRCQUFLQyxRQUFROzRCQUFLQyxRQUFPOzs7Ozs7dUJBRC9ETDs7Ozs7Ozs7OzswQkFLZCw4REFBQ007Z0JBQ0NULFdBQVU7Z0JBQ1ZVLFNBQVNmOzBCQUVULDRFQUFDWCxvREFBV0E7b0JBQUMyQixNQUFNOzs7Ozs7Ozs7OzswQkFFckIsOERBQUNGO2dCQUNDVCxXQUFVO2dCQUNWVSxTQUFTakI7MEJBRVQsNEVBQUNSLG9EQUFZQTtvQkFBQzBCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCO0dBbERzQnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvbG9nby1jYXJvdXNlbC9pbmRleC50c3g/YTNlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuICAgICAgICBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbiAgICAgICAgaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbiAgICAgICAgaW1wb3J0IHsgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzbGlkZXMgPSBbXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTAxLnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTAyLnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTAzLnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA0LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA1LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA2LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA3LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA4LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA5LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTEwLnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTExLnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTEyLnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTEzLnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTE0LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTE1LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTE2LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTE3LnBuZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTE4LnBuZycsXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvQ2Fyb3VzZWwoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2N1cnJlbnRTbGlkZXMsIHNldEN1cnJlbnRTbGlkZXNdID0gdXNlU3RhdGUoc2xpZGVzLnNsaWNlKDAsIDUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoKGN1cnJlbnRJbmRleCkgPT4gY3VycmVudEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KChjdXJyZW50SW5kZXgpID0+IGN1cnJlbnRJbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U2xpZGVzKHNsaWRlcy5zbGljZShjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIDUpKTtcbiAgICAgICAgICAgICAgICB9LCBbY3VycmVudEluZGV4XSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhdXRvQ2Fyb3VzZWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZSgpO1xuICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChhdXRvQ2Fyb3VzZWwpO1xuICAgICAgICAgICAgICAgIH0sIFtjdXJyZW50SW5kZXhdKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG92ZXJmbG93LXgtaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctY29sIGdhcC00IHAtNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NsaWRlfSBhbHQ9XCJQYXJ0bmVyIExvZ29zXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsxMDB9IGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbCBwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTbGlkZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHJpZ2h0LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctd2hpdGUgdGV4dC1ibGFjayByb3VuZGVkLWZ1bGwgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IHNpemU9ezI0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hldnJvbkxlZnQiLCJDaGV2cm9uUmlnaHQiLCJzbGlkZXMiLCJMb2dvQ2Fyb3VzZWwiLCJjdXJyZW50U2xpZGVzIiwic2V0Q3VycmVudFNsaWRlcyIsInNsaWNlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwibmV4dFNsaWRlIiwibGVuZ3RoIiwicHJldlNsaWRlIiwiYXV0b0Nhcm91c2VsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic2xpZGUiLCJpbmRleCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwiYnV0dG9uIiwib25DbGljayIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/homepage/logo-carousel/index.tsx\n"));

/***/ })

});