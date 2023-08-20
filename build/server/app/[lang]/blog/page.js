(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 2325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 2553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        '[lang]',
        {
        children: [
        'blog',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6567)), "/Users/govarthan/Documents/GitHub/Ariadne-next13/app/[lang]/blog/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3678)), "/Users/govarthan/Documents/GitHub/Ariadne-next13/app/[lang]/layout.tsx"],
        
      }
      ]
      },
        {
        'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/govarthan/Documents/GitHub/Ariadne-next13/app/[lang]/blog/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/[lang]/blog/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/[lang]/blog/page",
        pathname: "/[lang]/blog",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8127:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 6567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogIndex)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createReactComponent.js + 1 modules
var createReactComponent = __webpack_require__(7767);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
/**
 * lucide-react v0.105.0-alpha.4 - ISC
 */ 
const ChevronRight = (0,createReactComponent/* default */.Z)("ChevronRight", [
    [
        "polyline",
        {
            points: "9 18 15 12 9 6",
            key: "1rtp27"
        }
    ]
]);
 //# sourceMappingURL=chevron-right.js.map

;// CONCATENATED MODULE: ./app/[lang]/blog/page.tsx



const get = async ({ page = 1, pageSize = 20, sort = "id:desc" })=>{
    let params = {
        populate: [
            "image",
            "author"
        ].join(","),
        "pagination[pageSize]": String(pageSize),
        "pagination[page]": String(page),
        sort
    };
    // Convert the params object to a query string
    const queryString = new URLSearchParams(params).toString();
    const baseURL = "https://strapi.ariadne.inc/api/";
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"4fc1aa969a8a6bc493e04d1bffa993e9caca6a92550487fa640defab50a71e46260ff23fc2a9097415d3656b2e4bb0ad7d7cf4342b47e3ca6fd415131c39fb056d418fe0c45f403e7829be237e7e7ebbc6e872b65818053b953e65a24e49e04fa5d0c965699be2f62031a3e76b1c26dc6a06e24b2e2af50fd334c2ba2018d2cd"}`
    };
    const response = await fetch(`${baseURL}posts?${queryString}`, {
        headers
    });
    if (response.status === 200) {
        const data = await response.json(); // Provide an explicit type
        return data.data.map(({ attributes })=>attributes);
    } else {
        throw new Error(`Failed to fetch data: ${response.status}`);
    }
};
async function BlogIndex() {
    const posts = await get({}); // You can pass other parameters as required
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        className: "container mx-auto px-4 py-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-6 gap-8 p-4",
            children: posts.map((post, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: `${index === 0 ? "col-span-6" : index <= 2 ? "col-span-3" : "col-span-2"} bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-100`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: `/blog/${post.slug}`,
                        className: "text-grey-600 hover:text-grey-800 transition-colors duration-200",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                src: `${"https://strapi.ariadne.inc"}${post.image.data?.attributes?.formats?.small?.url}`,
                                alt: post.title,
                                className: `${index === 0 ? "w-full h-80" : "w-full h-60"} object-cover `
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "p-5 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                        className: "text-2xl font-semibold mb-3 truncate",
                                        children: post.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                        className: "text-gray-500 mb-4 line-clamp-2",
                                        children: post.excerpt
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "mt-auto flex justify-end",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "flex items-center text-grey-400 hover:text-grey-800 transition-colors duration-200",
                                            children: [
                                                "Read More",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(ChevronRight, {
                                                    className: "ml-2"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }, post.slug))
        })
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,875,858,306], () => (__webpack_exec__(2553)));
module.exports = __webpack_exports__;

})();