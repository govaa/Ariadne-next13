exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 5284:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8254));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1889));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3372))

/***/ }),

/***/ 4190:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 3372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var dist = __webpack_require__(1085);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(1971);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(9610);
;// CONCATENATED MODULE: ./lib/utils.ts


function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* clsx */.W)(inputs));
}

;// CONCATENATED MODULE: ./components/ui/button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary"
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react_.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(Comp, {
        className: cn(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs + 25 modules
var react_dropdown_menu_dist = __webpack_require__(500);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(1264);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(1922);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle.js
var circle = __webpack_require__(4151);
;// CONCATENATED MODULE: ./components/ui/dropdown-menu.tsx
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuCheckboxItem,DropdownMenuRadioItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuGroup,DropdownMenuPortal,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuRadioGroup auto */ 






const DropdownMenu = react_dropdown_menu_dist/* Root */.fC;
const DropdownMenuTrigger = react_dropdown_menu_dist/* Trigger */.xz;
const DropdownMenuGroup = react_dropdown_menu_dist/* Group */.ZA;
const DropdownMenuPortal = react_dropdown_menu_dist/* Portal */.Uv;
const DropdownMenuSub = react_dropdown_menu_dist/* Sub */.Tr;
const DropdownMenuRadioGroup = react_dropdown_menu_dist/* RadioGroup */.Ee;
const DropdownMenuSubTrigger = /*#__PURE__*/ react_.forwardRef(({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_dist/* SubTrigger */.fF, {
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(chevron_right/* default */.Z, {
                className: "ml-auto h-4 w-4"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = react_dropdown_menu_dist/* SubTrigger */.fF.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* SubContent */.tu, {
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", className),
        ...props
    }));
DropdownMenuSubContent.displayName = react_dropdown_menu_dist/* SubContent */.tu.displayName;
const DropdownMenuContent = /*#__PURE__*/ react_.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* Portal */.Uv, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* Content */.VY, {
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = react_dropdown_menu_dist/* Content */.VY.displayName;
const DropdownMenuItem = /*#__PURE__*/ react_.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* Item */.ck, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
        ...props
    }));
DropdownMenuItem.displayName = react_dropdown_menu_dist/* Item */.ck.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react_.forwardRef(({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_dist/* CheckboxItem */.oC, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* ItemIndicator */.wU, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(check/* default */.Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = react_dropdown_menu_dist/* CheckboxItem */.oC.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_dist/* RadioItem */.Rk, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* ItemIndicator */.wU, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(circle/* default */.Z, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = react_dropdown_menu_dist/* RadioItem */.Rk.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react_.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* Label */.__, {
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = react_dropdown_menu_dist/* Label */.__.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(react_dropdown_menu_dist/* Separator */.Z0, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
DropdownMenuSeparator.displayName = react_dropdown_menu_dist/* Separator */.Z0.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
        className: cn("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";


// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./i18n-config.ts
const i18n = {
    defaultLocale: "en",
    locales: [
        "en",
        "de"
    ]
};

;// CONCATENATED MODULE: ./components/site-header/locale-selector/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function LocaleSelector() {
    const pathName = (0,navigation.usePathname)();
    const redirectedPathName = (locale)=>{
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };
    const currentLocale = ()=>{
        const locale = i18n.locales.find((l)=>l === pathName.split("/")[1]);
        if (!locale) return i18n.defaultLocale;
        return locale;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenu, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(DropdownMenuTrigger, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Button, {
                    className: "uppercase bg-white text-black-gothamlight hover:bg-ariadnepurple hover:text-natural-500",
                    children: currentLocale()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(DropdownMenuContent, {
                className: "w-70",
                children: i18n.locales.map((locale)=>{
                    const isActive = locale === currentLocale();
                    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(DropdownMenuLabel, {
                        className: "uppercase",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: redirectedPathName(locale),
                            className: "flex items-center justify-between",
                            children: [
                                locale,
                                isActive ? /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                    className: "ml-2 text-blue-500",
                                    children: "✓"
                                }) : null
                            ]
                        })
                    }, locale);
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(9458);
;// CONCATENATED MODULE: ./components/main-nav/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function MainNav() {
    const [isTechDropdownVisible, setTechDropdownVisibility] = react_.useState(false);
    const [isIndustryDropdownVisible, setIndustryDropdownVisibility] = react_.useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
        className: "bg-white border-gray-200 ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                    href: "/",
                    className: "flex h-10",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                        src: "/images/logo/ariadne-long-logo.png",
                        width: 140,
                        height: 100,
                        alt: "Ariadne Logo Long"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "hidden w-full md:flex md:w-auto",
                    id: "navbar-dropdown",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex flex-col h-full font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                className: "p-2 rounded-full hover:bg-gray-100",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    href: "/",
                                    className: "block py-4 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "group relative p-2 rounded-md hover:bg-gray-100",
                                onMouseEnter: ()=>setTechDropdownVisibility(true),
                                onMouseLeave: ()=>setTechDropdownVisibility(false),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-between w-full py-4 px-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto cursor-pointer",
                                        children: [
                                            "Technology  ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(chevron_down/* default */.Z, {
                                                size: 16
                                            })
                                        ]
                                    }),
                                    isTechDropdownVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "z-10 absolute left-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "py-4 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "#",
                                                            className: "block px-4 py-2 hover:bg-gray-100",
                                                            children: "Ariadne Analytics"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "#",
                                                            className: "block px-4 py-2 hover:bg-gray-100",
                                                            children: "Ariadne Navigation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "#",
                                                            className: "block px-4 py-2 hover:bg-gray-100",
                                                            children: "Ariadne Engagement"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "py-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "#",
                                                    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                    children: "Sign out"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "group relative p-2 rounded-md hover:bg-gray-100",
                                onMouseEnter: ()=>setIndustryDropdownVisibility(true),
                                onMouseLeave: ()=>setIndustryDropdownVisibility(false),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-between w-full py-4 px-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto cursor-pointer",
                                        children: [
                                            "Industry ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(chevron_down/* default */.Z, {
                                                size: 16
                                            })
                                        ]
                                    }),
                                    isIndustryDropdownVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "z-10 absolute left-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "py-4 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "#",
                                                            className: "block px-4 py-2 hover:bg-gray-100",
                                                            children: "Airports"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "/industry/retail",
                                                            className: "block px-4 py-2 hover:bg-gray-100",
                                                            children: "Retail"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "#",
                                                            className: "block px-4 py-2 hover:bg-gray-100",
                                                            children: "Shopping Malls"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "#",
                                                            className: "block px-4 py-2 hover:bg-gray-100",
                                                            children: "Smart Cities"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "py-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    href: "#",
                                                    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                    children: "Sign out"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                className: "p-2 rounded-full hover:bg-gray-100",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    href: "/blog",
                                    className: "block py-4 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                className: "p-2 rounded-md hover:bg-gray-100",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    href: "#",
                                    className: "block py-4 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0",
                                    children: "Pricing"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                className: "p-2 rounded-md hover:bg-gray-100",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    href: "/contact",
                                    className: "block py-4 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(LocaleSelector, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "/get-started",
                            className: "inline-block bg-ariadnepurple hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-full",
                            children: "Get Started"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1072);
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 8254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2496);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(212);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(423);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5570);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ReactQueryProvider({ children }) {
    const [client] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .QueryClient */ .S({
        defaultOptions: {
            queries: {
                staleTime: 5000
            }
        }
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .QueryClientProvider */ .aH, {
        client: client,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .Hydrate */ .p, {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_5__/* .ReactQueryDevtools */ .t, {
                initialIsOpen: false
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactQueryProvider);


/***/ }),

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  generateStaticParams: () => (/* binding */ generateStaticParams),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(7633);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./context/react-query-provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/govarthan/Documents/GitHub/Ariadne-next13/context/react-query-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const react_query_provider = (__default__);
;// CONCATENATED MODULE: ./i18n-config.ts
const i18n = {
    defaultLocale: "en",
    locales: [
        "en",
        "de"
    ]
};

;// CONCATENATED MODULE: ./config/site.ts
const siteConfig = {
    name: "Ariadne",
    description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    mainNav: [
        {
            title: "Home",
            href: "/"
        }
    ],
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/shadcn/ui",
        docs: "https://ui.shadcn.com"
    }
};

// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"lib/fonts.ts","import":"","arguments":[{"src":"./fonts/Gotham-Book.woff2","weight":"400","style":"normal","variable":"--font-gothambook"}],"variableName":"gothambook"}
var Gotham_Book_woff2_weight_400_style_normal_variable_font_gothambook_variableName_gothambook_ = __webpack_require__(1374);
var Gotham_Book_woff2_weight_400_style_normal_variable_font_gothambook_variableName_gothambook_default = /*#__PURE__*/__webpack_require__.n(Gotham_Book_woff2_weight_400_style_normal_variable_font_gothambook_variableName_gothambook_);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(5182);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(2794);
;// CONCATENATED MODULE: ./lib/utils.ts


function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* clsx */.W)(inputs));
}

// EXTERNAL MODULE: ./components/main-nav/index.tsx
var main_nav = __webpack_require__(20);
;// CONCATENATED MODULE: ./components/tailwind-indicator.tsx

function TailwindIndicator() {
    if (true) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "block sm:hidden",
                children: "xs"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "hidden sm:block md:hidden",
                children: "sm"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "hidden md:block lg:hidden",
                children: "md"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "hidden lg:block xl:hidden",
                children: "lg"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "hidden xl:block 2xl:hidden",
                children: "xl"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "hidden 2xl:block",
                children: "2xl"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/theme-provider.tsx

const theme_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/govarthan/Documents/GitHub/Ariadne-next13/components/theme-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_provider_esModule, $$typeof: theme_provider_$$typeof } = theme_provider_proxy;
const theme_provider_default_ = theme_provider_proxy.default;

const e0 = theme_provider_proxy["ThemeProvider"];

;// CONCATENATED MODULE: ./app/[lang]/layout.tsx










async function generateStaticParams() {
    return i18n.locales.map((locale)=>({
            lang: locale
        }));
}
const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "white"
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "black"
        }
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    }
};
function RootLayout({ children, params }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
            lang: params.lang,
            suppressHydrationWarning: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("head", {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("body", {
                    className: cn("min-h-screen bg-background font-gothambook antialiased", (Gotham_Book_woff2_weight_400_style_normal_variable_font_gothambook_variableName_gothambook_default()).variable),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_query_provider, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                            attribute: "class",
                            defaultTheme: "light",
                            enableSystem: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative flex min-h-screen flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(main_nav/* default */.ZP, {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "flex-1",
                                            children: children
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(TailwindIndicator, {})
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 20:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/govarthan/Documents/GitHub/Ariadne-next13/components/main-nav/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7633:
/***/ (() => {



/***/ })

};
;