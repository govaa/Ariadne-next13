"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/blog/page",{

/***/ "(app-pages-browser)/./components/blog/BlogCard.tsx":
/*!**************************************!*\
  !*** ./components/blog/BlogCard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst BlogCard = (param)=>{\n    let { post } = param;\n    var _author_data_attributes, _author_data, _author, _author_data_attributes1, _author_data1, _author1;\n    const { title, author, image, publishedAt, slug, excerpt } = post;\n    // Use optional chaining to avoid errors when image data isn't present\n    const imageUrl = image && image.data && image.data.attributes && image.data.attributes.formats && image.data.attributes.formats.small && image.data.attributes.formats.small.url ? \"\".concat(\"https://strapi.ariadne.inc\").concat(image.data.attributes.formats.small.url) : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"single-blog-post h-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"blog-image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog/\" + slug,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: imageUrl,\n                                    alt: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"date\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    color: \"black\",\n                                    size: 24\n                                }, void 0, false, {\n                                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, undefined),\n                                new Date(publishedAt).toLocaleDateString(\"en-us\", {\n                                    year: \"numeric\",\n                                    month: \"short\",\n                                    day: \"numeric\"\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"blog-post-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/blog/\" + slug,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"By \",\n                                (_author = author) === null || _author === void 0 ? void 0 : (_author_data = _author.data) === null || _author_data === void 0 ? void 0 : (_author_data_attributes = _author_data.attributes) === null || _author_data_attributes === void 0 ? void 0 : _author_data_attributes.firstname,\n                                \" \",\n                                (_author1 = author) === null || _author1 === void 0 ? void 0 : (_author_data1 = _author1.data) === null || _author_data1 === void 0 ? void 0 : (_author_data_attributes1 = _author_data1.attributes) === null || _author_data_attributes1 === void 0 ? void 0 : _author_data_attributes1.lastname\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: (excerpt || \"\").slice(0, 250) + \"...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog/\" + slug,\n                            className: \"read-more-btn\",\n                            children: [\n                                \"Read More \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/govarthan/Documents/GitHub/Ariadne-next13/components/blog/BlogCard.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BlogCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogCard);\nvar _c;\n$RefreshReg$(_c, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYmxvZy9CbG9nQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ2tDO0FBQy9CO0FBMEM3QixNQUFNSSxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFzQjtRQW9DOUJDLHlCQUFBQSxjQUFBQSxTQUNIQSwwQkFBQUEsZUFBQUE7SUFwQ1gsTUFBTSxFQUFFQyxLQUFLLEVBQUVELE1BQU0sRUFBRUUsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdOO0lBRTdELHNFQUFzRTtJQUN0RSxNQUFNTyxXQUFXSixTQUFTQSxNQUFNSyxJQUFJLElBQUlMLE1BQU1LLElBQUksQ0FBQ0MsVUFBVSxJQUFJTixNQUFNSyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxJQUFJUCxNQUFNSyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLElBQUlSLE1BQU1LLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxHQUM1SyxHQUE0QlQsT0FBekJVLDRCQUFzQixFQUEyQyxPQUF4Q1YsTUFBTUssSUFBSSxDQUFDQyxVQUFVLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLElBQ25FO0lBRUoscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNuQixrREFBSUE7NEJBQUNvQixNQUFNLFdBQVdiO3NDQUNyQiw0RUFBQ2M7MENBQ0MsNEVBQUNDO29DQUFJQyxLQUFLZDtvQ0FBVWUsS0FBS3BCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUk3Qiw4REFBQ2M7NEJBQUlDLFdBQVU7OzhDQUNmLDhEQUFDckIsb0RBQVFBO29DQUFDMkIsT0FBTTtvQ0FBUUMsTUFBTTs7Ozs7O2dDQUMzQixJQUFJQyxLQUFLckIsYUFBYXNCLGtCQUFrQixDQUFDLFNBQVM7b0NBQ2pEQyxNQUFNO29DQUNOQyxPQUFPO29DQUNQQyxLQUFLO2dDQUNQOzs7Ozs7Ozs7Ozs7OzhCQUlKLDhEQUFDYjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNhO3NDQUNDLDRFQUFDaEMsa0RBQUlBO2dDQUFDb0IsTUFBTSxXQUFXYjswQ0FDckIsNEVBQUNjOzhDQUFHakI7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSVIsOERBQUM2Qjs7Z0NBQUs7aUNBQ0E5QixVQUFBQSxvQkFBQUEsK0JBQUFBLGVBQUFBLFFBQVFPLElBQUksY0FBWlAsb0NBQUFBLDBCQUFBQSxhQUFjUSxVQUFVLGNBQXhCUiw4Q0FBQUEsd0JBQTBCK0IsU0FBUztnQ0FBRTtpQ0FDeEMvQixXQUFBQSxvQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFRTyxJQUFJLGNBQVpQLHFDQUFBQSwyQkFBQUEsY0FBY1EsVUFBVSxjQUF4QlIsK0NBQUFBLHlCQUEwQmdDLFFBQVE7Ozs7Ozs7c0NBR3JDLDhEQUFDQztzQ0FBRyxDQUFDNUIsV0FBVyxFQUFDLEVBQUc2QixLQUFLLENBQUMsR0FBRyxPQUFPOzs7Ozs7c0NBRXBDLDhEQUFDckMsa0RBQUlBOzRCQUFDb0IsTUFBTSxXQUFXYjs0QkFBTVksV0FBVTs7Z0NBQWdCOzhDQUN6Qyw4REFBQ3BCLG9EQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztLQWxETUU7QUFvRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL0Jsb2dDYXJkLnRzeD9jMjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb24sIENhbGVuZGFyLCBDaGV2cm9uUmlnaHQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxudHlwZSBBdXRob3JBdHRyaWJ1dGVzID0ge1xuICBmaXJzdG5hbWU6IHN0cmluZztcbiAgbGFzdG5hbWU6IHN0cmluZztcbn07XG5cbnR5cGUgQXV0aG9yRGF0YSA9IHtcbiAgYXR0cmlidXRlczogQXV0aG9yQXR0cmlidXRlcztcbn07XG5cbnR5cGUgQXV0aG9yID0ge1xuICBkYXRhOiBBdXRob3JEYXRhO1xufTtcblxudHlwZSBJbWFnZUZvcm1hdHMgPSB7XG4gIHNtYWxsOiB7XG4gICAgdXJsOiBzdHJpbmc7XG4gIH07XG59O1xuXG50eXBlIEltYWdlQXR0cmlidXRlcyA9IHtcbiAgZm9ybWF0czogSW1hZ2VGb3JtYXRzO1xufTtcblxudHlwZSBJbWFnZURhdGEgPSB7XG4gIGF0dHJpYnV0ZXM6IEltYWdlQXR0cmlidXRlcztcbn07XG5cbnR5cGUgSW1hZ2UgPSB7XG4gIGRhdGE6IEltYWdlRGF0YTtcbn07XG5cbnR5cGUgQmxvZ1Bvc3QgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjogQXV0aG9yO1xuICBpbWFnZTogSW1hZ2U7XG4gIHB1Ymxpc2hlZEF0OiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZXhjZXJwdDogc3RyaW5nO1xufTtcblxuY29uc3QgQmxvZ0NhcmQgPSAoeyBwb3N0IH06IHsgcG9zdDogQmxvZ1Bvc3QgfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBhdXRob3IsIGltYWdlLCBwdWJsaXNoZWRBdCwgc2x1ZywgZXhjZXJwdCB9ID0gcG9zdDtcbiAgXG4gIC8vIFVzZSBvcHRpb25hbCBjaGFpbmluZyB0byBhdm9pZCBlcnJvcnMgd2hlbiBpbWFnZSBkYXRhIGlzbid0IHByZXNlbnRcbiAgY29uc3QgaW1hZ2VVcmwgPSBpbWFnZSAmJiBpbWFnZS5kYXRhICYmIGltYWdlLmRhdGEuYXR0cmlidXRlcyAmJiBpbWFnZS5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0cyAmJiBpbWFnZS5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0cy5zbWFsbCAmJiBpbWFnZS5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0cy5zbWFsbC51cmwgXG4gICAgPyBgJHtwcm9jZXNzLmVudi5jbXNCYXNlVXJsfSR7aW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLmZvcm1hdHMuc21hbGwudXJsfWBcbiAgICA6ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtYmxvZy1wb3N0IGgtMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pbWFnZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2Jsb2cvXCIgKyBzbHVnfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPENhbGVuZGFyIGNvbG9yPVwiYmxhY2tcIiBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgIHtuZXcgRGF0ZShwdWJsaXNoZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tdXNcIiwge1xuICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvYmxvZy9cIiArIHNsdWd9PlxuICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIEJ5IHthdXRob3I/LmRhdGE/LmF0dHJpYnV0ZXM/LmZpcnN0bmFtZX17XCIgXCJ9XG4gICAgICAgICAgICB7YXV0aG9yPy5kYXRhPy5hdHRyaWJ1dGVzPy5sYXN0bmFtZX1cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8cD57KGV4Y2VycHQgfHwgXCJcIikuc2xpY2UoMCwgMjUwKSArIFwiLi4uXCJ9PC9wPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYmxvZy9cIiArIHNsdWd9IGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idG5cIj5cbiAgICAgICAgICAgICAgUmVhZCBNb3JlIDxDaGV2cm9uUmlnaHQgLz5cblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FsZW5kYXIiLCJDaGV2cm9uUmlnaHQiLCJMaW5rIiwiQmxvZ0NhcmQiLCJwb3N0IiwiYXV0aG9yIiwidGl0bGUiLCJpbWFnZSIsInB1Ymxpc2hlZEF0Iiwic2x1ZyIsImV4Y2VycHQiLCJpbWFnZVVybCIsImRhdGEiLCJhdHRyaWJ1dGVzIiwiZm9ybWF0cyIsInNtYWxsIiwidXJsIiwicHJvY2VzcyIsImVudiIsImNtc0Jhc2VVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsImltZyIsInNyYyIsImFsdCIsImNvbG9yIiwic2l6ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJoMyIsInNwYW4iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInAiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/blog/BlogCard.tsx\n"));

/***/ })

});