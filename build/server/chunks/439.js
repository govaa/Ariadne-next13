"use strict";
exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 3439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomeCarousel)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/carousel/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/govarthan/Documents/GitHub/Ariadne-next13/components/carousel/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const carousel = (__default__);
;// CONCATENATED MODULE: ./components/homepage/home-carousel/index.tsx


const slides = [
    {
        imgSrc: "/images/homepage-image-2.png",
        text: "Know every visitor journey With Ariadne's Solution"
    },
    {
        imgSrc: "/images/homepage-image-2.png",
        text: "Text for image 2"
    },
    {
        imgSrc: "/images/homepage-image-2.png",
        text: "Text for image 3"
    }
];
function HomeCarousel() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("main", {
        className: "App",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "carousel-container md:w-screen md:mx-auto",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(carousel, {
                children: slides.map((s, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative w-full h-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                className: "w-full h-full object-cover brightness-50",
                                src: s.imgSrc,
                                alt: "alt"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                    className: "text-white text-2xl font-bold",
                                    children: s.text
                                })
                            })
                        ]
                    }, index))
            })
        })
    });
}


/***/ })

};
;