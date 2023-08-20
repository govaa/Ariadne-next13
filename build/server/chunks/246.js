"use strict";
exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 6246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3258);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const EmailSignUp = ()=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("IDLE");
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const subscribe = async ()=>{
        setState("LOADING");
        setErrorMessage(null);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post("/api/emailsignup", {
                email
            });
            setState("SUCCESS");
        } catch (e) {
            if (axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.isAxiosError(e)) {
                setErrorMessage(e.response?.data?.error);
            } else {
                setErrorMessage("An error occurred while trying to subscribe.");
            }
            setState("ERROR");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: "bg-white dark:bg-gray-900",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-screen-md sm:text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        className: "mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white",
                        children: "Sign up for our newsletter"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400",
                        children: "Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "#",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "email",
                                                className: "hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                children: "Email address"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    className: "w-5 h-5 text-gray-500 dark:text-gray-400",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                            d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                            d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                className: "block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 sm:rounded-full sm:rounded-l-full focus:ring-ariadbeblue focus:border-ariadneblue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-ariadneblue dark:focus:border-ariadneblue",
                                                placeholder: "Enter your business email",
                                                type: "email",
                                                id: "email",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                            type: "submit",
                                            className: "py-3 px-5 w-full text-sm font-medium-gothamlight text-center text-white rounded-full border cursor-pointer bg-ariadneblue border-primary-600 sm:rounded-full hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                                            children: "Subscribe"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300",
                                children: [
                                    "We care about the protection of your data. ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                        href: "#",
                                        className: "font-medium text-primary-600 dark:text-primary-500 hover:underline",
                                        children: "Read our Privacy Policy"
                                    }),
                                    "."
                                ]
                            })
                        ]
                    }),
                    state === "ERROR" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "domain-search-content text-danger",
                        children: errorMessage
                    }),
                    state === "SUCCESS" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "domain-search-content text-success",
                        children: "Thank you for signing up!"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSignUp);


/***/ })

};
;