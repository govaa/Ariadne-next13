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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogoCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst slides = [\n    \"/images/partner-logos/partner-101.png\",\n    \"/images/partner-logos/partner-102.png\",\n    \"/images/partner-logos/partner-103.png\",\n    \"/images/partner-logos/partner-104.png\",\n    \"/images/partner-logos/partner-105.png\",\n    \"/images/partner-logos/partner-106.png\",\n    \"/images/partner-logos/partner-107.png\",\n    \"/images/partner-logos/partner-108.png\",\n    \"/images/partner-logos/partner-109.png\",\n    \"/images/partner-logos/partner-110.png\",\n    \"/images/partner-logos/partner-111.png\",\n    \"/images/partner-logos/partner-112.png\",\n    \"/images/partner-logos/partner-113.png\",\n    \"/images/partner-logos/partner-114.png\",\n    \"/images/partner-logos/partner-115.png\",\n    \"/images/partner-logos/partner-116.png\",\n    \"/images/partner-logos/partner-117.png\",\n    \"/images/partner-logos/partner-118.png\"\n];\nconst useClient = ()=>{\n    return true;\n};\nfunction LogoCarousel() {\n    _s();\n    const [currentSlides, setCurrentSlides] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(slides.slice(0, 5));\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const nextSlide = ()=>{\n        setCurrentIndex((currentIndex)=>(currentIndex + 1) % slides.length);\n    };\n    const prevSlide = ()=>{\n        setCurrentIndex((currentIndex)=>(currentIndex - 1 + slides.length) % slides.length);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCurrentSlides(slides.slice(currentIndex, currentIndex + 5));\n    }, [\n        currentIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const autoCarousel = setInterval(()=>{\n            nextSlide();\n        }, 3000);\n        return ()=>clearInterval(autoCarousel);\n    }, [\n        currentIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-flow-col gap-4 p-4 transition-all duration-500 ease-in-out items-center justify-items-center\",\n                children: currentSlides.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center h-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: slide,\n                            alt: \"Partner Logos\",\n                            width: 200,\n                            height: 100,\n                            layout: \"intrinsic\"\n                        }, void 0, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center gap-2 mt-2\",\n                children: slides.map((_, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-3 w-3 rounded-full \".concat(idx >= currentIndex && idx < currentIndex + 5 ? \"bg-blue-500\" : \"bg-gray-300\")\n                    }, idx, false, {\n                        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2\",\n                onClick: prevSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    size: 24\n                }, void 0, false, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2\",\n                onClick: nextSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    size: 24\n                }, void 0, false, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/homepage/logo-carousel/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(LogoCarousel, \"dty1D0j54i9Oz8Jp5Qi5xSvlGis=\");\n_c = LogoCarousel;\nvar _c;\n$RefreshReg$(_c, \"LogoCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvbG9nby1jYXJvdXNlbC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUM2QjtBQUNGO0FBRXpELE1BQU1NLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE1BQU1DLFlBQVk7SUFDaEIsT0FBTztBQUNUO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDRyxPQUFPSyxLQUFLLENBQUMsR0FBRztJQUNuRSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNVyxZQUFZO1FBQ2hCRCxnQkFBZ0IsQ0FBQ0QsZUFBaUIsQ0FBQ0EsZUFBZSxLQUFLTixPQUFPUyxNQUFNO0lBQ3RFO0lBRUEsTUFBTUMsWUFBWTtRQUNoQkgsZ0JBQWdCLENBQUNELGVBQWlCLENBQUNBLGVBQWUsSUFBSU4sT0FBT1MsTUFBTSxJQUFJVCxPQUFPUyxNQUFNO0lBQ3RGO0lBR0FiLGdEQUFTQSxDQUFDO1FBQ1JRLGlCQUFpQkosT0FBT0ssS0FBSyxDQUFDQyxjQUFjQSxlQUFlO0lBQzdELEdBQUc7UUFBQ0E7S0FBYTtJQUVqQlYsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxlQUFlQyxZQUFZO1lBQy9CSjtRQUNGLEdBQUc7UUFDSCxPQUFPLElBQU1LLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ0w7S0FBYTtJQUVqQixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaWixjQUFjYSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3pCLDhEQUFDSjt3QkFBZ0JDLFdBQVU7a0NBQ3pCLDRFQUFDckIsbURBQUtBOzRCQUNKeUIsS0FBS0Y7NEJBQ0xHLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFFBQU87Ozs7Ozt1QkFOREw7Ozs7Ozs7Ozs7MEJBV2QsOERBQUNKO2dCQUFJQyxXQUFVOzBCQUNaZixPQUFPZ0IsR0FBRyxDQUFDLENBQUNRLEdBQUdDLG9CQUNkLDhEQUFDWDt3QkFFQ0MsV0FBVyx3QkFBc0csT0FBOUVVLE9BQU9uQixnQkFBZ0JtQixNQUFNbkIsZUFBZSxJQUFJLGdCQUFnQjt1QkFEOUZtQjs7Ozs7Ozs7OzswQkFLWCw4REFBQ0M7Z0JBQ0NYLFdBQVU7Z0JBQ1ZZLFNBQVNqQjswQkFFVCw0RUFBQ1osb0RBQVdBO29CQUFDOEIsTUFBTTs7Ozs7Ozs7Ozs7MEJBRXJCLDhEQUFDRjtnQkFDQ1gsV0FBVTtnQkFDVlksU0FBU25COzBCQUVULDRFQUFDVCxvREFBWUE7b0JBQUM2QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QjtHQTdEd0IxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWVwYWdlL2xvZ28tY2Fyb3VzZWwvaW5kZXgudHN4P2EzZWIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmNvbnN0IHNsaWRlcyA9IFtcbiAgJy9pbWFnZXMvcGFydG5lci1sb2dvcy9wYXJ0bmVyLTEwMS5wbmcnLFxuICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTAyLnBuZycsXG4gICcvaW1hZ2VzL3BhcnRuZXItbG9nb3MvcGFydG5lci0xMDMucG5nJyxcbiAgJy9pbWFnZXMvcGFydG5lci1sb2dvcy9wYXJ0bmVyLTEwNC5wbmcnLFxuICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA1LnBuZycsXG4gICcvaW1hZ2VzL3BhcnRuZXItbG9nb3MvcGFydG5lci0xMDYucG5nJyxcbiAgJy9pbWFnZXMvcGFydG5lci1sb2dvcy9wYXJ0bmVyLTEwNy5wbmcnLFxuICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTA4LnBuZycsXG4gICcvaW1hZ2VzL3BhcnRuZXItbG9nb3MvcGFydG5lci0xMDkucG5nJyxcbiAgJy9pbWFnZXMvcGFydG5lci1sb2dvcy9wYXJ0bmVyLTExMC5wbmcnLFxuICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTExLnBuZycsXG4gICcvaW1hZ2VzL3BhcnRuZXItbG9nb3MvcGFydG5lci0xMTIucG5nJyxcbiAgJy9pbWFnZXMvcGFydG5lci1sb2dvcy9wYXJ0bmVyLTExMy5wbmcnLFxuICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTE0LnBuZycsXG4gICcvaW1hZ2VzL3BhcnRuZXItbG9nb3MvcGFydG5lci0xMTUucG5nJyxcbiAgJy9pbWFnZXMvcGFydG5lci1sb2dvcy9wYXJ0bmVyLTExNi5wbmcnLFxuICAnL2ltYWdlcy9wYXJ0bmVyLWxvZ29zL3BhcnRuZXItMTE3LnBuZycsXG4gICcvaW1hZ2VzL3BhcnRuZXItbG9nb3MvcGFydG5lci0xMTgucG5nJyxcbl1cblxuY29uc3QgdXNlQ2xpZW50ID0gKCkgPT4ge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ29DYXJvdXNlbCgpIHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZXMsIHNldEN1cnJlbnRTbGlkZXNdID0gdXNlU3RhdGUoc2xpZGVzLnNsaWNlKDAsIDUpKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKGN1cnJlbnRJbmRleCkgPT4gKGN1cnJlbnRJbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aCk7XG4gIH07XG4gIFxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChjdXJyZW50SW5kZXgpID0+IChjdXJyZW50SW5kZXggLSAxICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoKTtcbiAgfTtcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50U2xpZGVzKHNsaWRlcy5zbGljZShjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIDUpKTtcbiAgfSwgW2N1cnJlbnRJbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXV0b0Nhcm91c2VsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbmV4dFNsaWRlKCk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoYXV0b0Nhcm91c2VsKTtcbiAgfSwgW2N1cnJlbnRJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgb3ZlcmZsb3cteC1oaWRkZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctY29sIGdhcC00IHAtNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaXRlbXMtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtjdXJyZW50U2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTEwMFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17c2xpZGV9XG4gICAgICAgICAgICAgIGFsdD1cIlBhcnRuZXIgTG9nb3NcIlxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTIgbXQtMlwiPlxuICAgICAgICB7c2xpZGVzLm1hcCgoXywgaWR4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoLTMgdy0zIHJvdW5kZWQtZnVsbCAke2lkeCA+PSBjdXJyZW50SW5kZXggJiYgaWR4IDwgY3VycmVudEluZGV4ICsgNSA/ICdiZy1ibHVlLTUwMCcgOiAnYmctZ3JheS0zMDAnfWB9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbCBwLTJcIlxuICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XG4gICAgICA+XG4gICAgICAgIDxDaGV2cm9uTGVmdCBzaXplPXsyNH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHJpZ2h0LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctd2hpdGUgdGV4dC1ibGFjayByb3VuZGVkLWZ1bGwgcC0yXCJcbiAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxuICAgICAgPlxuICAgICAgICA8Q2hldnJvblJpZ2h0IHNpemU9ezI0fSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoZXZyb25MZWZ0IiwiQ2hldnJvblJpZ2h0Iiwic2xpZGVzIiwidXNlQ2xpZW50IiwiTG9nb0Nhcm91c2VsIiwiY3VycmVudFNsaWRlcyIsInNldEN1cnJlbnRTbGlkZXMiLCJzbGljZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIm5leHRTbGlkZSIsImxlbmd0aCIsInByZXZTbGlkZSIsImF1dG9DYXJvdXNlbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsIl8iLCJpZHgiLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/homepage/logo-carousel/index.tsx\n"));

/***/ })

});