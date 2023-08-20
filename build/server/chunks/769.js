"use strict";
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/email-newsletter/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/govarthan/Documents/GitHub/Ariadne-next13/components/email-newsletter/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const email_newsletter = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/footer/index.tsx





const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(email_newsletter, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "flex items-center justify-center border-b-1 border-neutral-200 p-6 dark:border-neutral-500",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "https://www.facebook.com/ariadnegmbh/",
                            className: "facebook mr-6 text-neutral-600 dark:text-neutral-200",
                            target: "_blank",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(lucide_react/* Facebook */.s1S, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "https://twitter.com/ariadne_maps",
                            className: "twitter mr-6 text-neutral-600 dark:text-neutral-200",
                            target: "_blank",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(lucide_react/* Twitter */.tLe, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "https://www.youtube.com/user/pipelidisg/",
                            className: "yputube mr-6 text-neutral-600 dark:text-neutral-200 ",
                            target: "_blank",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(lucide_react/* Youtube */.hxd, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "https://www.linkedin.com/company/ariadne-maps/",
                            className: "linkedin",
                            target: "_blank",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(lucide_react/* Linkedin */.n6B, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-ariadneblue text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "mx-6 py-10 text-center md:text-left",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            className: "mb-4 flex items-center justify-center font-semibold uppercase md:justify-start",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "mr-3 h-4 w-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                        d: "M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"
                                                    })
                                                }),
                                                "Tailwind ELEMENTS"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h6", {
                                            className: "mb-4 flex justify-center font-semibold uppercase md:justify-start text-white ",
                                            children: "Products"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white dark:text-neutral-200",
                                                children: "Angular"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white  dark:text-neutral-200",
                                                children: "React"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white dark:text-neutral-200",
                                                children: "Vue"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white dark:text-neutral-200",
                                                children: "Laravel"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h6", {
                                            className: "mb-4 flex justify-center font-semibold uppercase md:justify-start text-white ",
                                            children: "Useful links"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white dark:text-neutral-200",
                                                children: "Pricing"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white dark:text-neutral-200",
                                                children: "Settings"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white dark:text-neutral-200",
                                                children: "Orders"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#!",
                                                className: "text-white dark:text-neutral-200",
                                                children: "Help"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h6", {
                                            className: "mb-4 flex justify-center font-semibold uppercase md:justify-start text-white ",
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mb-4 flex items-center justify-center md:justify-start text-white ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "mr-3 h-5 w-5",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                                        })
                                                    ]
                                                }),
                                                "New York, NY 10012, US"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mb-4 flex items-center justify-center md:justify-start text-white ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "mr-3 h-5 w-5",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                                                        })
                                                    ]
                                                }),
                                                "info@example.com"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mb-4 flex items-center justify-center md:justify-start text-white ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "mr-3 h-5 w-5",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
                                                        clipRule: "evenodd"
                                                    })
                                                }),
                                                "+ 01 234 567 88"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "flex items-center justify-center md:justify-start text-white ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "mr-3 h-5 w-5",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z",
                                                        clipRule: "evenodd"
                                                    })
                                                }),
                                                "+ 01 234 567 89"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-ariadneblue p-6 text-center dark:bg-neutral-700",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                className: "text-white",
                                children: "\xa9 2023 Copyright: "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                className: "font-semibold text-white dark:text-neutral-400",
                                href: "https://www.ariadne.inc/",
                                children: "Ariadne Maps GmbH"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);


/***/ })

};
;