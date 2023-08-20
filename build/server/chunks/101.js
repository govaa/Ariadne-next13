"use strict";
exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 4094:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * lucide-react v0.105.0-alpha.4 - ISC
 */ 
var react = __webpack_require__(2947);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const createReactComponent = (iconName, iconNode)=>{
    const Component = react.forwardRef(({ color = "currentColor", size = 24, strokeWidth = 2, children, ...rest }, ref)=>react.createElement("svg", {
            ref,
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            strokeWidth,
            className: `lucide lucide-${toKebabCase(iconName)}`,
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>react.createElement(tag, attrs)),
            ...(Array.isArray(children) ? children : [
                children
            ]) || []
        ]));
    Component.displayName = `${iconName}`;
    return Component;
};
const Accessibility = createReactComponent("Accessibility", [
    [
        "circle",
        {
            cx: "16",
            cy: "4",
            r: "1",
            key: "1grugj"
        }
    ],
    [
        "path",
        {
            d: "m18 19 1-7-5.87.94",
            key: "16gztd"
        }
    ],
    [
        "path",
        {
            d: "m5 8 3-3 5.5 3-2.21 3.1",
            key: "133gd0"
        }
    ],
    [
        "path",
        {
            d: "M4.24 14.48c-.19.58-.27 1.2-.23 1.84a5 5 0 0 0 5.31 4.67c.65-.04 1.25-.2 1.8-.46",
            key: "12oo9p"
        }
    ],
    [
        "path",
        {
            d: "M13.76 17.52c.19-.58.27-1.2.23-1.84a5 5 0 0 0-5.31-4.67c-.65.04-1.25.2-1.8.46",
            key: "15si8q"
        }
    ]
]);
const Activity = createReactComponent("Activity", [
    [
        "polyline",
        {
            points: "22 12 18 12 15 21 9 3 6 12 2 12",
            key: "xez52g"
        }
    ]
]);
const AirVent = createReactComponent("AirVent", [
    [
        "path",
        {
            d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
            key: "larmp2"
        }
    ],
    [
        "path",
        {
            d: "M6 8h12",
            key: "6g4wlu"
        }
    ],
    [
        "path",
        {
            d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",
            key: "1bo8pg"
        }
    ],
    [
        "path",
        {
            d: "M6.6 15.6A2 2 0 1 0 10 17v-5",
            key: "t9h90c"
        }
    ]
]);
const Airplay = createReactComponent("Airplay", [
    [
        "path",
        {
            d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
            key: "ns4c3b"
        }
    ],
    [
        "polygon",
        {
            points: "12 15 17 21 7 21 12 15",
            key: "1sy95i"
        }
    ]
]);
const AlarmCheck = createReactComponent("AlarmCheck", [
    [
        "path",
        {
            d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
            key: "1dr9l2"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ],
    [
        "path",
        {
            d: "m9 13 2 2 4-4",
            key: "6343dt"
        }
    ]
]);
const AlarmClockOff = createReactComponent("AlarmClockOff", [
    [
        "path",
        {
            d: "M6.87 6.87a8 8 0 1 0 11.26 11.26",
            key: "3on8tj"
        }
    ],
    [
        "path",
        {
            d: "M19.9 14.25A7.44 7.44 0 0 0 20 13a8 8 0 0 0-8-8 7.44 7.44 0 0 0-1.25.1",
            key: "nxzvge"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M4 4 2 6",
            key: "1ycko6"
        }
    ]
]);
const AlarmClock = createReactComponent("AlarmClock", [
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "8",
            key: "3y4lt7"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4l2 2",
            key: "1c63tq"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ]
]);
const AlarmMinus = createReactComponent("AlarmMinus", [
    [
        "path",
        {
            d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
            key: "1dr9l2"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ],
    [
        "path",
        {
            d: "M9 13h6",
            key: "1uhe8q"
        }
    ]
]);
const AlarmPlus = createReactComponent("AlarmPlus", [
    [
        "path",
        {
            d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
            key: "1dr9l2"
        }
    ],
    [
        "path",
        {
            d: "M5 3 2 6",
            key: "18tl5t"
        }
    ],
    [
        "path",
        {
            d: "m22 6-3-3",
            key: "1opdir"
        }
    ],
    [
        "path",
        {
            d: "m6 19-2 2",
            key: "1ek6nb"
        }
    ],
    [
        "path",
        {
            d: "m18 19 2 2",
            key: "lw9i"
        }
    ],
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "M9 13h6",
            key: "1uhe8q"
        }
    ]
]);
const Album = createReactComponent("Album", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "polyline",
        {
            points: "11 3 11 11 14 8 17 11 17 3",
            key: "1wcwz3"
        }
    ]
]);
const AlertCircle = createReactComponent("AlertCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12",
            key: "1grbh0"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16",
            key: "1w440g"
        }
    ]
]);
const AlertOctagon = createReactComponent("AlertOctagon", [
    [
        "polygon",
        {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
            key: "h1p8hx"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12",
            key: "1grbh0"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16",
            key: "1w440g"
        }
    ]
]);
const AlertTriangle = createReactComponent("AlertTriangle", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
            key: "c3ski4"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "9",
            x2: "12",
            y2: "13",
            key: "mb7vjk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
            key: "kdstpg"
        }
    ]
]);
const AlignCenterHorizontal = createReactComponent("AlignCenterHorizontal", [
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ],
    [
        "path",
        {
            d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",
            key: "11f1s0"
        }
    ],
    [
        "path",
        {
            d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",
            key: "t14dx9"
        }
    ],
    [
        "path",
        {
            d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",
            key: "1w07xs"
        }
    ],
    [
        "path",
        {
            d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",
            key: "1apec2"
        }
    ]
]);
const AlignCenterVertical = createReactComponent("AlignCenterVertical", [
    [
        "path",
        {
            d: "M12 2v20",
            key: "t6zp3m"
        }
    ],
    [
        "path",
        {
            d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",
            key: "14d6g8"
        }
    ],
    [
        "path",
        {
            d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",
            key: "1e2lrw"
        }
    ],
    [
        "path",
        {
            d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",
            key: "1fkdwx"
        }
    ],
    [
        "path",
        {
            d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",
            key: "1euafb"
        }
    ]
]);
const AlignCenter = createReactComponent("AlignCenter", [
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
            key: "1e448z"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "12",
            x2: "7",
            y2: "12",
            key: "driibe"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "18",
            x2: "5",
            y2: "18",
            key: "1i3xdx"
        }
    ]
]);
const AlignEndHorizontal = createReactComponent("AlignEndHorizontal", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "6",
            height: "16",
            rx: "2",
            key: "xp5u6c"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "9",
            width: "6",
            height: "9",
            rx: "2",
            key: "1e039c"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ]
]);
const AlignEndVertical = createReactComponent("AlignEndVertical", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "16",
            height: "6",
            rx: "2",
            key: "1j7b8s"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "14",
            width: "9",
            height: "6",
            rx: "2",
            key: "b2t4yo"
        }
    ],
    [
        "path",
        {
            d: "M22 22V2",
            key: "12ipfv"
        }
    ]
]);
const AlignHorizontalDistributeCenter = createReactComponent("AlignHorizontalDistributeCenter", [
    [
        "rect",
        {
            x: "4",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "ric6yp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1mr5t1"
        }
    ],
    [
        "path",
        {
            d: "M17 22v-5",
            key: "4b6g73"
        }
    ],
    [
        "path",
        {
            d: "M17 7V2",
            key: "hnrr36"
        }
    ],
    [
        "path",
        {
            d: "M7 22v-3",
            key: "1r4jpn"
        }
    ],
    [
        "path",
        {
            d: "M7 5V2",
            key: "liy1u9"
        }
    ]
]);
const AlignHorizontalDistributeEnd = createReactComponent("AlignHorizontalDistributeEnd", [
    [
        "rect",
        {
            x: "4",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "ric6yp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1mr5t1"
        }
    ],
    [
        "path",
        {
            d: "M10 2v20",
            key: "uyc634"
        }
    ],
    [
        "path",
        {
            d: "M20 2v20",
            key: "1tx262"
        }
    ]
]);
const AlignHorizontalDistributeStart = createReactComponent("AlignHorizontalDistributeStart", [
    [
        "rect",
        {
            x: "4",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "ric6yp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1mr5t1"
        }
    ],
    [
        "path",
        {
            d: "M4 2v20",
            key: "gtpd5x"
        }
    ],
    [
        "path",
        {
            d: "M14 2v20",
            key: "tg6bpw"
        }
    ]
]);
const AlignHorizontalJustifyCenter = createReactComponent("AlignHorizontalJustifyCenter", [
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "15angl"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1di99g"
        }
    ],
    [
        "path",
        {
            d: "M12 2v20",
            key: "t6zp3m"
        }
    ]
]);
const AlignHorizontalJustifyEnd = createReactComponent("AlignHorizontalJustifyEnd", [
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "15angl"
        }
    ],
    [
        "rect",
        {
            x: "12",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "150rwc"
        }
    ],
    [
        "path",
        {
            d: "M22 2v20",
            key: "40qfg1"
        }
    ]
]);
const AlignHorizontalJustifyStart = createReactComponent("AlignHorizontalJustifyStart", [
    [
        "rect",
        {
            x: "6",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "1mezge"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "1di99g"
        }
    ],
    [
        "path",
        {
            d: "M2 2v20",
            key: "1ivd8o"
        }
    ]
]);
const AlignHorizontalSpaceAround = createReactComponent("AlignHorizontalSpaceAround", [
    [
        "rect",
        {
            x: "9",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "7k3bt6"
        }
    ],
    [
        "path",
        {
            d: "M4 22V2",
            key: "tsjzd3"
        }
    ],
    [
        "path",
        {
            d: "M20 22V2",
            key: "1bnhr8"
        }
    ]
]);
const AlignHorizontalSpaceBetween = createReactComponent("AlignHorizontalSpaceBetween", [
    [
        "rect",
        {
            x: "3",
            y: "5",
            width: "6",
            height: "14",
            rx: "2",
            key: "iybqme"
        }
    ],
    [
        "rect",
        {
            x: "15",
            y: "7",
            width: "6",
            height: "10",
            rx: "2",
            key: "11q98m"
        }
    ],
    [
        "path",
        {
            d: "M3 2v20",
            key: "1d2pfg"
        }
    ],
    [
        "path",
        {
            d: "M21 2v20",
            key: "p059bm"
        }
    ]
]);
const AlignJustify = createReactComponent("AlignJustify", [
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1tp2lp"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "1aui40"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1sxo76"
        }
    ]
]);
const AlignLeft = createReactComponent("AlignLeft", [
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
            key: "1e448z"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "3",
            y2: "12",
            key: "80e4vw"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "18",
            x2: "3",
            y2: "18",
            key: "1771gn"
        }
    ]
]);
const AlignRight = createReactComponent("AlignRight", [
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
            key: "1e448z"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "9",
            y2: "12",
            key: "1stwgr"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "18",
            x2: "7",
            y2: "18",
            key: "1hion3"
        }
    ]
]);
const AlignStartHorizontal = createReactComponent("AlignStartHorizontal", [
    [
        "rect",
        {
            x: "4",
            y: "6",
            width: "6",
            height: "16",
            rx: "2",
            key: "1l8oni"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "6",
            width: "6",
            height: "9",
            rx: "2",
            key: "16r6cq"
        }
    ],
    [
        "path",
        {
            d: "M22 2H2",
            key: "fhrpnj"
        }
    ]
]);
const AlignStartVertical = createReactComponent("AlignStartVertical", [
    [
        "rect",
        {
            x: "6",
            y: "14",
            width: "9",
            height: "6",
            rx: "2",
            key: "pvftf3"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "16",
            height: "6",
            rx: "2",
            key: "1aj6m8"
        }
    ],
    [
        "path",
        {
            d: "M2 2v20",
            key: "1ivd8o"
        }
    ]
]);
const AlignVerticalDistributeCenter = createReactComponent("AlignVerticalDistributeCenter", [
    [
        "rect",
        {
            x: "5",
            y: "14",
            width: "14",
            height: "6",
            rx: "2",
            key: "1qrzuf"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "4",
            width: "10",
            height: "6",
            rx: "2",
            key: "we8e9z"
        }
    ],
    [
        "path",
        {
            d: "M22 7h-5",
            key: "o2endc"
        }
    ],
    [
        "path",
        {
            d: "M7 7H1",
            key: "105l6j"
        }
    ],
    [
        "path",
        {
            d: "M22 17h-3",
            key: "1lwga1"
        }
    ],
    [
        "path",
        {
            d: "M5 17H2",
            key: "1gx9xc"
        }
    ]
]);
const AlignVerticalDistributeEnd = createReactComponent("AlignVerticalDistributeEnd", [
    [
        "rect",
        {
            x: "5",
            y: "14",
            width: "14",
            height: "6",
            rx: "2",
            key: "1qrzuf"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "4",
            width: "10",
            height: "6",
            rx: "2",
            key: "we8e9z"
        }
    ],
    [
        "path",
        {
            d: "M2 20h20",
            key: "owomy5"
        }
    ],
    [
        "path",
        {
            d: "M2 10h20",
            key: "1ir3d8"
        }
    ]
]);
const AlignVerticalDistributeStart = createReactComponent("AlignVerticalDistributeStart", [
    [
        "rect",
        {
            x: "5",
            y: "14",
            width: "14",
            height: "6",
            rx: "2",
            key: "1qrzuf"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "4",
            width: "10",
            height: "6",
            rx: "2",
            key: "we8e9z"
        }
    ],
    [
        "path",
        {
            d: "M2 14h20",
            key: "myj16y"
        }
    ],
    [
        "path",
        {
            d: "M2 4h20",
            key: "mda7wb"
        }
    ]
]);
const AlignVerticalJustifyCenter = createReactComponent("AlignVerticalJustifyCenter", [
    [
        "rect",
        {
            x: "5",
            y: "16",
            width: "14",
            height: "6",
            rx: "2",
            key: "1xmr5l"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "2",
            width: "10",
            height: "6",
            rx: "2",
            key: "1dm79a"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
]);
const AlignVerticalJustifyEnd = createReactComponent("AlignVerticalJustifyEnd", [
    [
        "rect",
        {
            x: "5",
            y: "12",
            width: "14",
            height: "6",
            rx: "2",
            key: "12nflp"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "2",
            width: "10",
            height: "6",
            rx: "2",
            key: "1dm79a"
        }
    ],
    [
        "path",
        {
            d: "M2 22h20",
            key: "272qi7"
        }
    ]
]);
const AlignVerticalJustifyStart = createReactComponent("AlignVerticalJustifyStart", [
    [
        "rect",
        {
            x: "5",
            y: "16",
            width: "14",
            height: "6",
            rx: "2",
            key: "1xmr5l"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "6",
            width: "10",
            height: "6",
            rx: "2",
            key: "q2ofyd"
        }
    ],
    [
        "path",
        {
            d: "M2 2h20",
            key: "1ennik"
        }
    ]
]);
const AlignVerticalSpaceAround = createReactComponent("AlignVerticalSpaceAround", [
    [
        "rect",
        {
            x: "7",
            y: "9",
            width: "10",
            height: "6",
            rx: "2",
            key: "1iy9tl"
        }
    ],
    [
        "path",
        {
            d: "M22 20H2",
            key: "1p1f7z"
        }
    ],
    [
        "path",
        {
            d: "M22 4H2",
            key: "1b7qnq"
        }
    ]
]);
const AlignVerticalSpaceBetween = createReactComponent("AlignVerticalSpaceBetween", [
    [
        "rect",
        {
            x: "5",
            y: "15",
            width: "14",
            height: "6",
            rx: "2",
            key: "hytrht"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "3",
            width: "10",
            height: "6",
            rx: "2",
            key: "y09b40"
        }
    ],
    [
        "path",
        {
            d: "M2 21h20",
            key: "1nyx9w"
        }
    ],
    [
        "path",
        {
            d: "M2 3h20",
            key: "91anmk"
        }
    ]
]);
const Anchor = createReactComponent("Anchor", [
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "3",
            key: "rqqgnr"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "8",
            key: "111jcv"
        }
    ],
    [
        "path",
        {
            d: "M5 12H2a10 10 0 0 0 20 0h-3",
            key: "1hv3nh"
        }
    ]
]);
const Angry = createReactComponent("Angry", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M16 16s-1.5-2-4-2-4 2-4 2",
            key: "epbg0q"
        }
    ],
    [
        "path",
        {
            d: "M7.5 8 10 9",
            key: "olxxln"
        }
    ],
    [
        "path",
        {
            d: "m14 9 2.5-1",
            key: "1j6cij"
        }
    ],
    [
        "path",
        {
            d: "M9 10h0",
            key: "1vxvly"
        }
    ],
    [
        "path",
        {
            d: "M15 10h0",
            key: "1j6oav"
        }
    ]
]);
const Annoyed = createReactComponent("Annoyed", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 15h8",
            key: "45n4r"
        }
    ],
    [
        "path",
        {
            d: "M8 9h2",
            key: "1g203m"
        }
    ],
    [
        "path",
        {
            d: "M14 9h2",
            key: "116p9w"
        }
    ]
]);
const Aperture = createReactComponent("Aperture", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "14.31",
            y1: "8",
            x2: "20.05",
            y2: "17.94",
            key: "1oqej7"
        }
    ],
    [
        "line",
        {
            x1: "9.69",
            y1: "8",
            x2: "21.17",
            y2: "8",
            key: "1cv19a"
        }
    ],
    [
        "line",
        {
            x1: "7.38",
            y1: "12",
            x2: "13.12",
            y2: "2.06",
            key: "1vh5oz"
        }
    ],
    [
        "line",
        {
            x1: "9.69",
            y1: "16",
            x2: "3.95",
            y2: "6.06",
            key: "saeeuz"
        }
    ],
    [
        "line",
        {
            x1: "14.31",
            y1: "16",
            x2: "2.83",
            y2: "16",
            key: "pq85rp"
        }
    ],
    [
        "line",
        {
            x1: "16.62",
            y1: "12",
            x2: "10.88",
            y2: "21.94",
            key: "wactqi"
        }
    ]
]);
const Apple = createReactComponent("Apple", [
    [
        "path",
        {
            d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
            key: "3s7exb"
        }
    ],
    [
        "path",
        {
            d: "M10 2c1 .5 2 2 2 5",
            key: "fcco2y"
        }
    ]
]);
const ArchiveRestore = createReactComponent("ArchiveRestore", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "5",
            rx: "2",
            key: "1h2p0l"
        }
    ],
    [
        "path",
        {
            d: "M12 13v7",
            key: "1arz7h"
        }
    ],
    [
        "path",
        {
            d: "m9 16 3-3 3 3",
            key: "1idcnm"
        }
    ],
    [
        "path",
        {
            d: "M4 9v9a2 2 0 0 0 2 2h2",
            key: "qxnby6"
        }
    ],
    [
        "path",
        {
            d: "M20 9v9a2 2 0 0 1-2 2h-2",
            key: "gz3jmx"
        }
    ]
]);
const Archive = createReactComponent("Archive", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "5",
            rx: "2",
            key: "1h2p0l"
        }
    ],
    [
        "path",
        {
            d: "M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9",
            key: "shkvi4"
        }
    ],
    [
        "path",
        {
            d: "M10 13h4",
            key: "ytezjc"
        }
    ]
]);
const Armchair = createReactComponent("Armchair", [
    [
        "path",
        {
            d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",
            key: "irtipd"
        }
    ],
    [
        "path",
        {
            d: "M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",
            key: "1ed1m0"
        }
    ],
    [
        "path",
        {
            d: "M5 18v2",
            key: "ppbyun"
        }
    ],
    [
        "path",
        {
            d: "M19 18v2",
            key: "gy7782"
        }
    ]
]);
const ArrowBigDown = createReactComponent("ArrowBigDown", [
    [
        "path",
        {
            d: "M9 3h6v11h4l-7 7-7-7h4z",
            key: "6dczpq"
        }
    ]
]);
const ArrowBigLeft = createReactComponent("ArrowBigLeft", [
    [
        "path",
        {
            d: "m3 12 7-7v4h11v6H10v4z",
            key: "1e8ocp"
        }
    ]
]);
const ArrowBigRight = createReactComponent("ArrowBigRight", [
    [
        "path",
        {
            d: "m21 12-7-7v4H3v6h11v4z",
            key: "58zwfy"
        }
    ]
]);
const ArrowBigUp = createReactComponent("ArrowBigUp", [
    [
        "path",
        {
            d: "M9 21V10H5l7-7 7 7h-4v11z",
            key: "8tfmm3"
        }
    ]
]);
const ArrowDownCircle = createReactComponent("ArrowDownCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "8 12 12 16 16 12",
            key: "14qdon"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
            key: "55jlg"
        }
    ]
]);
const ArrowDownLeft = createReactComponent("ArrowDownLeft", [
    [
        "line",
        {
            x1: "17",
            y1: "7",
            x2: "7",
            y2: "17",
            key: "1cuvd1"
        }
    ],
    [
        "polyline",
        {
            points: "17 17 7 17 7 7",
            key: "aq42rd"
        }
    ]
]);
const ArrowDownRight = createReactComponent("ArrowDownRight", [
    [
        "line",
        {
            x1: "7",
            y1: "7",
            x2: "17",
            y2: "17",
            key: "dtegzv"
        }
    ],
    [
        "polyline",
        {
            points: "17 7 17 17 7 17",
            key: "1gmiis"
        }
    ]
]);
const ArrowDown = createReactComponent("ArrowDown", [
    [
        "line",
        {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19",
            key: "myz83a"
        }
    ],
    [
        "polyline",
        {
            points: "19 12 12 19 5 12",
            key: "17kmxi"
        }
    ]
]);
const ArrowLeftCircle = createReactComponent("ArrowLeftCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 8 8 12 12 16",
            key: "bz1698"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "12",
            x2: "8",
            y2: "12",
            key: "i2qu8k"
        }
    ]
]);
const ArrowLeftRight = createReactComponent("ArrowLeftRight", [
    [
        "polyline",
        {
            points: "17 11 21 7 17 3",
            key: "l3l6r3"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "7",
            x2: "9",
            y2: "7",
            key: "17x2jj"
        }
    ],
    [
        "polyline",
        {
            points: "7 21 3 17 7 13",
            key: "lfumnw"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "17",
            x2: "3",
            y2: "17",
            key: "gusd5o"
        }
    ]
]);
const ArrowLeft = createReactComponent("ArrowLeft", [
    [
        "line",
        {
            x1: "19",
            y1: "12",
            x2: "5",
            y2: "12",
            key: "17g05t"
        }
    ],
    [
        "polyline",
        {
            points: "12 19 5 12 12 5",
            key: "1ksm0z"
        }
    ]
]);
const ArrowRightCircle = createReactComponent("ArrowRightCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 16 16 12 12 8",
            key: "1byh5s"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
const ArrowRight = createReactComponent("ArrowRight", [
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ],
    [
        "polyline",
        {
            points: "12 5 19 12 12 19",
            key: "sfr3i6"
        }
    ]
]);
const ArrowUpCircle = createReactComponent("ArrowUpCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "16 12 12 8 8 12",
            key: "1gpmhk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "8",
            key: "r2mfdg"
        }
    ]
]);
const ArrowUpDown = createReactComponent("ArrowUpDown", [
    [
        "polyline",
        {
            points: "11 17 7 21 3 17",
            key: "dv0ycv"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "21",
            x2: "7",
            y2: "9",
            key: "1cxv4h"
        }
    ],
    [
        "polyline",
        {
            points: "21 7 17 3 13 7",
            key: "1su31j"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "15",
            x2: "17",
            y2: "3",
            key: "r3527w"
        }
    ]
]);
const ArrowUpLeft = createReactComponent("ArrowUpLeft", [
    [
        "line",
        {
            x1: "17",
            y1: "17",
            x2: "7",
            y2: "7",
            key: "814yaz"
        }
    ],
    [
        "polyline",
        {
            points: "7 17 7 7 17 7",
            key: "1jae2c"
        }
    ]
]);
const ArrowUpRight = createReactComponent("ArrowUpRight", [
    [
        "line",
        {
            x1: "7",
            y1: "17",
            x2: "17",
            y2: "7",
            key: "16hgw2"
        }
    ],
    [
        "polyline",
        {
            points: "7 7 17 7 17 17",
            key: "blehsp"
        }
    ]
]);
const ArrowUp = createReactComponent("ArrowUp", [
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "5",
            key: "yrd7g6"
        }
    ],
    [
        "polyline",
        {
            points: "5 12 12 5 19 12",
            key: "1y7d7k"
        }
    ]
]);
const Asterisk = createReactComponent("Asterisk", [
    [
        "path",
        {
            d: "M12 6v12",
            key: "1vza4d"
        }
    ],
    [
        "path",
        {
            d: "M17.196 9 6.804 15",
            key: "1ah31z"
        }
    ],
    [
        "path",
        {
            d: "m6.804 9 10.392 6",
            key: "1b6pxd"
        }
    ]
]);
const AtSign = createReactComponent("AtSign", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94",
            key: "1m6qx5"
        }
    ]
]);
const Award = createReactComponent("Award", [
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }
    ],
    [
        "path",
        {
            d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
            key: "em7aur"
        }
    ]
]);
const Axe = createReactComponent("Axe", [
    [
        "path",
        {
            d: "m14 12-8.501 8.501a2.12 2.12 0 0 1-2.998 0h-.002a2.12 2.12 0 0 1 0-2.998L11 9.002",
            key: "ha6v2k"
        }
    ],
    [
        "path",
        {
            d: "m9 7 4-4 6 6h3l-.13.648a7.648 7.648 0 0 1-5.081 5.756L15 16v-3z",
            key: "1mosh2"
        }
    ]
]);
const Axis3d = createReactComponent("Axis3d", [
    [
        "path",
        {
            d: "M4 4v16h16",
            key: "1s015l"
        }
    ],
    [
        "path",
        {
            d: "m4 20 7-7",
            key: "17qe9y"
        }
    ]
]);
const Baby = createReactComponent("Baby", [
    [
        "path",
        {
            d: "M9 12h0.01",
            key: "u5n1lm"
        }
    ],
    [
        "path",
        {
            d: "M15 12h0.01",
            key: "10zk70"
        }
    ],
    [
        "path",
        {
            d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
            key: "1u7htd"
        }
    ],
    [
        "path",
        {
            d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
            key: "5yv0yz"
        }
    ]
]);
const Backpack = createReactComponent("Backpack", [
    [
        "path",
        {
            d: "M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
            key: "tunmdx"
        }
    ],
    [
        "path",
        {
            d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
            key: "donm21"
        }
    ],
    [
        "path",
        {
            d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",
            key: "xk3gvk"
        }
    ],
    [
        "path",
        {
            d: "M8 10h8",
            key: "c7uz4u"
        }
    ],
    [
        "path",
        {
            d: "M8 18h8",
            key: "1no2b1"
        }
    ]
]);
const BaggageClaim = createReactComponent("BaggageClaim", [
    [
        "path",
        {
            d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",
            key: "4irg2o"
        }
    ],
    [
        "path",
        {
            d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",
            key: "14fcyx"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "6",
            width: "13",
            height: "8",
            rx: "1",
            key: "1sfr2f"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "20",
            r: "2",
            key: "t9985n"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "20",
            r: "2",
            key: "e5v82j"
        }
    ]
]);
const Banana = createReactComponent("Banana", [
    [
        "path",
        {
            d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",
            key: "1cscit"
        }
    ],
    [
        "path",
        {
            d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
            key: "1y1nbv"
        }
    ]
]);
const Banknote = createReactComponent("Banknote", [
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ],
    [
        "path",
        {
            d: "M6 12h.01M18 12h.01",
            key: "113zkx"
        }
    ]
]);
const BarChart2 = createReactComponent("BarChart2", [
    [
        "line",
        {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "10",
            key: "1e8c49"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "4",
            key: "65j799"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "14",
            key: "4svqks"
        }
    ]
]);
const BarChart3 = createReactComponent("BarChart3", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
const BarChart4 = createReactComponent("BarChart4", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "M13 17V9",
            key: "1fwyjl"
        }
    ],
    [
        "path",
        {
            d: "M18 17V5",
            key: "sfb6ij"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
const BarChartHorizontal = createReactComponent("BarChartHorizontal", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "M7 16h8",
            key: "srdodz"
        }
    ],
    [
        "path",
        {
            d: "M7 11h12",
            key: "127s9w"
        }
    ],
    [
        "path",
        {
            d: "M7 6h3",
            key: "w9rmul"
        }
    ]
]);
const BarChart = createReactComponent("BarChart", [
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "10",
            key: "1wi7jb"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "4",
            key: "1mwru6"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "16",
            key: "zj13da"
        }
    ]
]);
const Baseline = createReactComponent("Baseline", [
    [
        "path",
        {
            d: "M4 20h16",
            key: "14thso"
        }
    ],
    [
        "path",
        {
            d: "m6 16 6-12 6 12",
            key: "1b4byz"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ]
]);
const Bath = createReactComponent("Bath", [
    [
        "path",
        {
            d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
            key: "1r8yf5"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "5",
            x2: "8",
            y2: "7",
            key: "d858pc"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "19",
            x2: "7",
            y2: "21",
            key: "cpl2n4"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "19",
            x2: "17",
            y2: "21",
            key: "ywtigw"
        }
    ]
]);
const BatteryCharging = createReactComponent("BatteryCharging", [
    [
        "path",
        {
            d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",
            key: "1sdynx"
        }
    ],
    [
        "path",
        {
            d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",
            key: "1gkd3k"
        }
    ],
    [
        "path",
        {
            d: "m11 7-3 5h4l-3 5",
            key: "b4a64w"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ]
]);
const BatteryFull = createReactComponent("BatteryFull", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13",
            key: "1wd6dw"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "13",
            key: "haxvl5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "13",
            key: "c6fn6x"
        }
    ]
]);
const BatteryLow = createReactComponent("BatteryLow", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13",
            key: "1wd6dw"
        }
    ]
]);
const BatteryMedium = createReactComponent("BatteryMedium", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13",
            key: "1wd6dw"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "13",
            key: "haxvl5"
        }
    ]
]);
const Battery = createReactComponent("Battery", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "16",
            height: "10",
            rx: "2",
            ry: "2",
            key: "5j9scf"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13",
            key: "4dh1rd"
        }
    ]
]);
const Beaker = createReactComponent("Beaker", [
    [
        "path",
        {
            d: "M4.5 3h15",
            key: "c7n0jr"
        }
    ],
    [
        "path",
        {
            d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",
            key: "m1uhx7"
        }
    ],
    [
        "path",
        {
            d: "M6 14h12",
            key: "4cwo0f"
        }
    ]
]);
const BeanOff = createReactComponent("BeanOff", [
    [
        "path",
        {
            d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
            key: "bq3udt"
        }
    ],
    [
        "path",
        {
            d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",
            key: "17ccse"
        }
    ],
    [
        "path",
        {
            d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
            key: "18zqgq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Bean = createReactComponent("Bean", [
    [
        "path",
        {
            d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
            key: "1tvzk7"
        }
    ],
    [
        "path",
        {
            d: "M5.341 10.62a4 4 0 1 0 5.279-5.28",
            key: "2cyri2"
        }
    ]
]);
const BedDouble = createReactComponent("BedDouble", [
    [
        "path",
        {
            d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",
            key: "1k78r4"
        }
    ],
    [
        "path",
        {
            d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
            key: "fb3tl2"
        }
    ],
    [
        "path",
        {
            d: "M12 4v6",
            key: "1dcgq2"
        }
    ],
    [
        "path",
        {
            d: "M2 18h20",
            key: "ajqnye"
        }
    ]
]);
const BedSingle = createReactComponent("BedSingle", [
    [
        "path",
        {
            d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",
            key: "1wm6mi"
        }
    ],
    [
        "path",
        {
            d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",
            key: "4k93s5"
        }
    ],
    [
        "path",
        {
            d: "M3 18h18",
            key: "1h113x"
        }
    ]
]);
const Bed = createReactComponent("Bed", [
    [
        "path",
        {
            d: "M2 4v16",
            key: "vw9hq8"
        }
    ],
    [
        "path",
        {
            d: "M2 8h18a2 2 0 0 1 2 2v10",
            key: "1dgv2r"
        }
    ],
    [
        "path",
        {
            d: "M2 17h20",
            key: "18nfp3"
        }
    ],
    [
        "path",
        {
            d: "M6 8v9",
            key: "1yriud"
        }
    ]
]);
const Beer = createReactComponent("Beer", [
    [
        "path",
        {
            d: "M17 11h1a3 3 0 0 1 0 6h-1",
            key: "1yp76v"
        }
    ],
    [
        "path",
        {
            d: "M9 12v6",
            key: "1u1cab"
        }
    ],
    [
        "path",
        {
            d: "M13 12v6",
            key: "1sugkk"
        }
    ],
    [
        "path",
        {
            d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
            key: "1510fo"
        }
    ],
    [
        "path",
        {
            d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",
            key: "19jb7n"
        }
    ]
]);
const BellMinus = createReactComponent("BellMinus", [
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M21 5h-6",
            key: "14nobq"
        }
    ],
    [
        "path",
        {
            d: "M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916",
            key: "1wldvb"
        }
    ]
]);
const BellOff = createReactComponent("BellOff", [
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M18.63 13A17.888 17.888 0 0 1 18 8",
            key: "d5seqe"
        }
    ],
    [
        "path",
        {
            d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14",
            key: "cae0gx"
        }
    ],
    [
        "path",
        {
            d: "M18 8a6 6 0 0 0-9.33-5",
            key: "4mngwl"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
const BellPlus = createReactComponent("BellPlus", [
    [
        "path",
        {
            d: "M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916",
            key: "1dhkt2"
        }
    ],
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M18 2v6",
            key: "163kbd"
        }
    ],
    [
        "path",
        {
            d: "M21 5h-6",
            key: "14nobq"
        }
    ]
]);
const BellRing = createReactComponent("BellRing", [
    [
        "path",
        {
            d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
            key: "oql5b8"
        }
    ],
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ],
    [
        "path",
        {
            d: "M2 8c0-2.2.7-4.3 2-6",
            key: "1c7u9x"
        }
    ],
    [
        "path",
        {
            d: "M22 8a10 10 0 0 0-2-6",
            key: "1vnyda"
        }
    ]
]);
const Bell = createReactComponent("Bell", [
    [
        "path",
        {
            d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
            key: "oql5b8"
        }
    ],
    [
        "path",
        {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
            key: "6o5tke"
        }
    ]
]);
const Bike = createReactComponent("Bike", [
    [
        "circle",
        {
            cx: "5.5",
            cy: "17.5",
            r: "3.5",
            key: "1noe27"
        }
    ],
    [
        "circle",
        {
            cx: "18.5",
            cy: "17.5",
            r: "3.5",
            key: "15x4ox"
        }
    ],
    [
        "path",
        {
            d: "M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2",
            key: "1932na"
        }
    ]
]);
const Binary = createReactComponent("Binary", [
    [
        "path",
        {
            d: "M6 20h4",
            key: "1i6q5t"
        }
    ],
    [
        "path",
        {
            d: "M14 10h4",
            key: "ru81e7"
        }
    ],
    [
        "path",
        {
            d: "M6 14h2v6",
            key: "16z9wg"
        }
    ],
    [
        "path",
        {
            d: "M14 4h2v6",
            key: "1idq9u"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "4",
            height: "6",
            key: "btwfzx"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "14",
            width: "4",
            height: "6",
            key: "1cym0j"
        }
    ]
]);
const Bitcoin = createReactComponent("Bitcoin", [
    [
        "path",
        {
            d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
            key: "yr8idg"
        }
    ]
]);
const BluetoothConnected = createReactComponent("BluetoothConnected", [
    [
        "path",
        {
            d: "m7 7 10 10-5 5V2l5 5L7 17",
            key: "1q5490"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "12",
            y2: "12",
            x2: "21",
            key: "17rheb"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            y2: "12",
            x2: "6",
            key: "1l5nc6"
        }
    ]
]);
const BluetoothOff = createReactComponent("BluetoothOff", [
    [
        "path",
        {
            d: "m17 17-5 5V12l-5 5",
            key: "v5aci6"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M14.5 9.5 17 7l-5-5v4.5",
            key: "1kddfz"
        }
    ]
]);
const BluetoothSearching = createReactComponent("BluetoothSearching", [
    [
        "path",
        {
            d: "m7 7 10 10-5 5V2l5 5L7 17",
            key: "1q5490"
        }
    ],
    [
        "path",
        {
            d: "M20.83 14.83a4 4 0 0 0 0-5.66",
            key: "k8tn1j"
        }
    ],
    [
        "path",
        {
            d: "M18 12h.01",
            key: "yjnet6"
        }
    ]
]);
const Bluetooth = createReactComponent("Bluetooth", [
    [
        "path",
        {
            d: "m7 7 10 10-5 5V2l5 5L7 17",
            key: "1q5490"
        }
    ]
]);
const Bold = createReactComponent("Bold", [
    [
        "path",
        {
            d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
            key: "shhoi5"
        }
    ],
    [
        "path",
        {
            d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
            key: "jaah4r"
        }
    ]
]);
const Bomb = createReactComponent("Bomb", [
    [
        "circle",
        {
            cx: "11",
            cy: "13",
            r: "9",
            key: "hd149"
        }
    ],
    [
        "path",
        {
            d: "m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8",
            key: "9owvxi"
        }
    ],
    [
        "path",
        {
            d: "m22 2-1.5 1.5",
            key: "ay92ug"
        }
    ]
]);
const Bone = createReactComponent("Bone", [
    [
        "path",
        {
            d: "M18.6 9.82c-.52-.21-1.15-.25-1.54.15l-7.07 7.06c-.39.39-.36 1.03-.15 1.54.12.3.16.6.16.93a2.5 2.5 0 0 1-5 0c0-.26-.24-.5-.5-.5a2.5 2.5 0 1 1 .96-4.82c.5.21 1.14.25 1.53-.15l7.07-7.06c.39-.39.36-1.03.15-1.54-.12-.3-.21-.6-.21-.93a2.5 2.5 0 0 1 5 0c.01.26.24.49.5.5a2.5 2.5 0 1 1-.9 4.82Z",
            key: "134x1i"
        }
    ]
]);
const BookOpenCheck = createReactComponent("BookOpenCheck", [
    [
        "path",
        {
            d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",
            key: "1i8u0n"
        }
    ],
    [
        "path",
        {
            d: "m16 12 2 2 4-4",
            key: "mdajum"
        }
    ],
    [
        "path",
        {
            d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",
            key: "jb5l51"
        }
    ]
]);
const BookOpen = createReactComponent("BookOpen", [
    [
        "path",
        {
            d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
            key: "vv98re"
        }
    ],
    [
        "path",
        {
            d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
            key: "1cyq3y"
        }
    ]
]);
const Book = createReactComponent("Book", [
    [
        "path",
        {
            d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
            key: "126fyg"
        }
    ],
    [
        "path",
        {
            d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
            key: "1msh16"
        }
    ]
]);
const BookmarkMinus = createReactComponent("BookmarkMinus", [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "9",
            y1: "10",
            y2: "10",
            key: "1gty7f"
        }
    ]
]);
const BookmarkPlus = createReactComponent("BookmarkPlus", [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "7",
            y2: "13",
            key: "1cppfj"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "9",
            y1: "10",
            y2: "10",
            key: "1gty7f"
        }
    ]
]);
const Bookmark = createReactComponent("Bookmark", [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ]
]);
const Bot = createReactComponent("Bot", [
    [
        "rect",
        {
            x: "3",
            y: "11",
            width: "18",
            height: "10",
            rx: "2",
            key: "qbqwso"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "2",
            key: "f1ur92"
        }
    ],
    [
        "path",
        {
            d: "M12 7v4",
            key: "xawao1"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "16",
            x2: "8",
            y2: "16",
            key: "717jkb"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "16",
            x2: "16",
            y2: "16",
            key: "19gr12"
        }
    ]
]);
const BoxSelect = createReactComponent("BoxSelect", [
    [
        "path",
        {
            d: "M5 3a2 2 0 0 0-2 2",
            key: "y57alp"
        }
    ],
    [
        "path",
        {
            d: "M19 3a2 2 0 0 1 2 2",
            key: "18rm91"
        }
    ],
    [
        "path",
        {
            d: "M21 19a2 2 0 0 1-2 2",
            key: "1j7049"
        }
    ],
    [
        "path",
        {
            d: "M5 21a2 2 0 0 1-2-2",
            key: "sbafld"
        }
    ],
    [
        "path",
        {
            d: "M9 3h1",
            key: "1yesri"
        }
    ],
    [
        "path",
        {
            d: "M9 21h1",
            key: "15o7lz"
        }
    ],
    [
        "path",
        {
            d: "M14 3h1",
            key: "1ec4yj"
        }
    ],
    [
        "path",
        {
            d: "M14 21h1",
            key: "v9vybs"
        }
    ],
    [
        "path",
        {
            d: "M3 9v1",
            key: "1r0deq"
        }
    ],
    [
        "path",
        {
            d: "M21 9v1",
            key: "mxsmne"
        }
    ],
    [
        "path",
        {
            d: "M3 14v1",
            key: "vnatye"
        }
    ],
    [
        "path",
        {
            d: "M21 14v1",
            key: "169vum"
        }
    ]
]);
const Box = createReactComponent("Box", [
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
const Boxes = createReactComponent("Boxes", [
    [
        "path",
        {
            d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
            key: "lc1i9w"
        }
    ],
    [
        "path",
        {
            d: "m7 16.5-4.74-2.85",
            key: "1o9zyk"
        }
    ],
    [
        "path",
        {
            d: "m7 16.5 5-3",
            key: "va8pkn"
        }
    ],
    [
        "path",
        {
            d: "M7 16.5v5.17",
            key: "jnp8gn"
        }
    ],
    [
        "path",
        {
            d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
            key: "8zsnat"
        }
    ],
    [
        "path",
        {
            d: "m17 16.5-5-3",
            key: "8arw3v"
        }
    ],
    [
        "path",
        {
            d: "m17 16.5 4.74-2.85",
            key: "8rfmw"
        }
    ],
    [
        "path",
        {
            d: "M17 16.5v5.17",
            key: "k6z78m"
        }
    ],
    [
        "path",
        {
            d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
            key: "1xygjf"
        }
    ],
    [
        "path",
        {
            d: "M12 8 7.26 5.15",
            key: "1vbdud"
        }
    ],
    [
        "path",
        {
            d: "m12 8 4.74-2.85",
            key: "3rx089"
        }
    ],
    [
        "path",
        {
            d: "M12 13.5V8",
            key: "1io7kd"
        }
    ]
]);
const Briefcase = createReactComponent("Briefcase", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "20",
            height: "14",
            rx: "2",
            ry: "2",
            key: "1fj28a"
        }
    ],
    [
        "path",
        {
            d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "zwj3tp"
        }
    ]
]);
const Brush = createReactComponent("Brush", [
    [
        "path",
        {
            d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
            key: "1styjt"
        }
    ],
    [
        "path",
        {
            d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
            key: "z0l1mu"
        }
    ]
]);
const Bug = createReactComponent("Bug", [
    [
        "rect",
        {
            width: "8",
            height: "14",
            x: "8",
            y: "6",
            rx: "4",
            key: "hq8nra"
        }
    ],
    [
        "path",
        {
            d: "m19 7-3 2",
            key: "fmg8ec"
        }
    ],
    [
        "path",
        {
            d: "m5 7 3 2",
            key: "dkxqes"
        }
    ],
    [
        "path",
        {
            d: "m19 19-3-2",
            key: "1hbhi4"
        }
    ],
    [
        "path",
        {
            d: "m5 19 3-2",
            key: "dvt2ee"
        }
    ],
    [
        "path",
        {
            d: "M20 13h-4",
            key: "1agfp2"
        }
    ],
    [
        "path",
        {
            d: "M4 13h4",
            key: "1bwh8b"
        }
    ],
    [
        "path",
        {
            d: "m10 4 1 2",
            key: "1pot59"
        }
    ],
    [
        "path",
        {
            d: "m14 4-1 2",
            key: "m8sn0o"
        }
    ]
]);
const Building2 = createReactComponent("Building2", [
    [
        "path",
        {
            d: "M6 22V4c0-.27 0-.55.07-.82a1.477 1.477 0 0 1 1.1-1.11C7.46 2 8.73 2 9 2h7c.27 0 .55 0 .82.07a1.477 1.477 0 0 1 1.11 1.1c.07.28.07.56.07.83v18H6Z",
            key: "1b1x9d"
        }
    ],
    [
        "path",
        {
            d: "M2 14v6c0 1.1.9 2 2 2h2V12H4c-.27 0-.55 0-.82.07-.27.07-.52.2-.72.4-.19.19-.32.44-.39.71A3.4 3.4 0 0 0 2 14Z",
            key: "12g3jd"
        }
    ],
    [
        "path",
        {
            d: "M20.82 9.07A3.4 3.4 0 0 0 20 9h-2v13h2a2 2 0 0 0 2-2v-9c0-.28 0-.55-.07-.82-.07-.27-.2-.52-.4-.72-.19-.19-.44-.32-.71-.39Z",
            key: "o1w3ll"
        }
    ],
    [
        "path",
        {
            d: "M10 6h4",
            key: "1itunk"
        }
    ],
    [
        "path",
        {
            d: "M10 10h4",
            key: "tcdvrf"
        }
    ],
    [
        "path",
        {
            d: "M10 14h4",
            key: "kelpxr"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
]);
const Building = createReactComponent("Building", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
            key: "152kg8"
        }
    ],
    [
        "path",
        {
            d: "M9 22v-4h6v4",
            key: "r93iot"
        }
    ],
    [
        "path",
        {
            d: "M8 6h.01",
            key: "1dz90k"
        }
    ],
    [
        "path",
        {
            d: "M16 6h.01",
            key: "1x0f13"
        }
    ],
    [
        "path",
        {
            d: "M12 6h.01",
            key: "1vi96p"
        }
    ],
    [
        "path",
        {
            d: "M12 10h.01",
            key: "1nrarc"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M16 10h.01",
            key: "1m94wz"
        }
    ],
    [
        "path",
        {
            d: "M16 14h.01",
            key: "1gbofw"
        }
    ],
    [
        "path",
        {
            d: "M8 10h.01",
            key: "19clt8"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ]
]);
const Bus = createReactComponent("Bus", [
    [
        "path",
        {
            d: "M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2",
            key: "wfsdqh"
        }
    ],
    [
        "path",
        {
            d: "M14 17H9",
            key: "o2noo5"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "17.5",
            r: "2.5",
            key: "gc8oob"
        }
    ],
    [
        "circle",
        {
            cx: "16.5",
            cy: "17.5",
            r: "2.5",
            key: "4btu0q"
        }
    ]
]);
const Cake = createReactComponent("Cake", [
    [
        "path",
        {
            d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",
            key: "1w3rig"
        }
    ],
    [
        "path",
        {
            d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
            key: "n2jgmb"
        }
    ],
    [
        "path",
        {
            d: "M2 21h20",
            key: "1nyx9w"
        }
    ],
    [
        "path",
        {
            d: "M7 8v2",
            key: "kqglng"
        }
    ],
    [
        "path",
        {
            d: "M12 8v2",
            key: "1woqiv"
        }
    ],
    [
        "path",
        {
            d: "M17 8v2",
            key: "teptal"
        }
    ],
    [
        "path",
        {
            d: "M7 4h.01",
            key: "1bh4kh"
        }
    ],
    [
        "path",
        {
            d: "M12 4h.01",
            key: "1ujb9j"
        }
    ],
    [
        "path",
        {
            d: "M17 4h.01",
            key: "1upcoc"
        }
    ]
]);
const Calculator = createReactComponent("Calculator", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            key: "1uxh74"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "6",
            y2: "6",
            key: "x4nwl0"
        }
    ],
    [
        "line",
        {
            x1: "16",
            x2: "16",
            y1: "14",
            y2: "18",
            key: "wjye3r"
        }
    ],
    [
        "path",
        {
            d: "M16 10h.01",
            key: "1m94wz"
        }
    ],
    [
        "path",
        {
            d: "M12 10h.01",
            key: "1nrarc"
        }
    ],
    [
        "path",
        {
            d: "M8 10h.01",
            key: "19clt8"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ],
    [
        "path",
        {
            d: "M8 18h.01",
            key: "lrp35t"
        }
    ]
]);
const CalendarCheck2 = createReactComponent("CalendarCheck2", [
    [
        "path",
        {
            d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "bce9hv"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "m16 20 2 2 4-4",
            key: "13tcca"
        }
    ]
]);
const CalendarCheck = createReactComponent("CalendarCheck", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "m9 16 2 2 4-4",
            key: "19s6y9"
        }
    ]
]);
const CalendarClock = createReactComponent("CalendarClock", [
    [
        "path",
        {
            d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
            key: "1osxxc"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M3 10h5",
            key: "r794hk"
        }
    ],
    [
        "path",
        {
            d: "M17.5 17.5 16 16.25V14",
            key: "re2vv1"
        }
    ],
    [
        "path",
        {
            d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
            key: "ame013"
        }
    ]
]);
const CalendarDays = createReactComponent("CalendarDays", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M16 14h.01",
            key: "1gbofw"
        }
    ],
    [
        "path",
        {
            d: "M8 18h.01",
            key: "lrp35t"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ],
    [
        "path",
        {
            d: "M16 18h.01",
            key: "kzsmim"
        }
    ]
]);
const CalendarHeart = createReactComponent("CalendarHeart", [
    [
        "path",
        {
            d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7",
            key: "1sfrvf"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
            key: "1t7hil"
        }
    ]
]);
const CalendarMinus = createReactComponent("CalendarMinus", [
    [
        "path",
        {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "3spt84"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "19",
            x2: "22",
            y2: "19",
            key: "qkgpxo"
        }
    ]
]);
const CalendarOff = createReactComponent("CalendarOff", [
    [
        "path",
        {
            d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",
            key: "1feomx"
        }
    ],
    [
        "path",
        {
            d: "M21 15.5V6a2 2 0 0 0-2-2H9.5",
            key: "yhw86o"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M3 10h7",
            key: "1wap6i"
        }
    ],
    [
        "path",
        {
            d: "M21 10h-5.5",
            key: "quycpq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const CalendarPlus = createReactComponent("CalendarPlus", [
    [
        "path",
        {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "3spt84"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "16",
            x2: "19",
            y2: "22",
            key: "537lsc"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "19",
            x2: "22",
            y2: "19",
            key: "qkgpxo"
        }
    ]
]);
const CalendarRange = createReactComponent("CalendarRange", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "path",
        {
            d: "M17 14h-6",
            key: "bkmgh3"
        }
    ],
    [
        "path",
        {
            d: "M13 18H7",
            key: "bb0bb7"
        }
    ],
    [
        "path",
        {
            d: "M7 14h.01",
            key: "1qa3f1"
        }
    ],
    [
        "path",
        {
            d: "M17 18h.01",
            key: "1bdyru"
        }
    ]
]);
const CalendarSearch = createReactComponent("CalendarSearch", [
    [
        "path",
        {
            d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5",
            key: "18ncp8"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",
            key: "mgbru4"
        }
    ],
    [
        "path",
        {
            d: "m22 22-1.5-1.5",
            key: "1x83k4"
        }
    ]
]);
const CalendarX2 = createReactComponent("CalendarX2", [
    [
        "path",
        {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
            key: "3spt84"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "17",
            x2: "22",
            y2: "22",
            key: "tvgkbv"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "22",
            x2: "22",
            y2: "17",
            key: "1l23f3"
        }
    ]
]);
const CalendarX = createReactComponent("CalendarX", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "14",
            x2: "14",
            y2: "18",
            key: "fs6roj"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "14",
            x2: "10",
            y2: "18",
            key: "1kdrv6"
        }
    ]
]);
const Calendar = createReactComponent("Calendar", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "1dtxiw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            key: "18saeg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            key: "1u51jw"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
            key: "6sq0yj"
        }
    ]
]);
const CameraOff = createReactComponent("CameraOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",
            key: "qmtpty"
        }
    ],
    [
        "path",
        {
            d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",
            key: "1ufyfc"
        }
    ],
    [
        "path",
        {
            d: "M14.121 15.121A3 3 0 1 1 9.88 10.88",
            key: "11zox6"
        }
    ]
]);
const Camera = createReactComponent("Camera", [
    [
        "path",
        {
            d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
            key: "1tc9qg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }
    ]
]);
const CandyOff = createReactComponent("CandyOff", [
    [
        "path",
        {
            d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",
            key: "1ff4ui"
        }
    ],
    [
        "path",
        {
            d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",
            key: "1sbrv4"
        }
    ],
    [
        "path",
        {
            d: "M14 16.5V14",
            key: "1maf8j"
        }
    ],
    [
        "path",
        {
            d: "M14 6.5v1.843",
            key: "1a6u6t"
        }
    ],
    [
        "path",
        {
            d: "M10 10v7.5",
            key: "80pj65"
        }
    ],
    [
        "path",
        {
            d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",
            key: "11a9mt"
        }
    ],
    [
        "path",
        {
            d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",
            key: "3mjmon"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Candy = createReactComponent("Candy", [
    [
        "path",
        {
            d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",
            key: "ue6khb"
        }
    ],
    [
        "path",
        {
            d: "M14 6.5v10",
            key: "5xnk7c"
        }
    ],
    [
        "path",
        {
            d: "M10 7.5v10",
            key: "1uew51"
        }
    ],
    [
        "path",
        {
            d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",
            key: "b9cp6k"
        }
    ],
    [
        "path",
        {
            d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",
            key: "5lney8"
        }
    ]
]);
const Car = createReactComponent("Car", [
    [
        "path",
        {
            d: "M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2",
            key: "l5np60"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "16.5",
            r: "2.5",
            key: "ae40ju"
        }
    ],
    [
        "circle",
        {
            cx: "16.5",
            cy: "16.5",
            r: "2.5",
            key: "1smtlt"
        }
    ]
]);
const Carrot = createReactComponent("Carrot", [
    [
        "path",
        {
            d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
            key: "rfqxbe"
        }
    ],
    [
        "path",
        {
            d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",
            key: "6b25w4"
        }
    ],
    [
        "path",
        {
            d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",
            key: "fn65lo"
        }
    ]
]);
const Cast = createReactComponent("Cast", [
    [
        "path",
        {
            d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
            key: "3zrzxg"
        }
    ],
    [
        "path",
        {
            d: "M2 12a9 9 0 0 1 8 8",
            key: "g6cvee"
        }
    ],
    [
        "path",
        {
            d: "M2 16a5 5 0 0 1 4 4",
            key: "1y1dii"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "20",
            x2: "2.01",
            y2: "20",
            key: "1cypae"
        }
    ]
]);
const Cat = createReactComponent("Cat", [
    [
        "path",
        {
            d: "M14 5.256A8.148 8.148 0 0 0 12 5a9.04 9.04 0 0 0-2 .227M20.098 10c.572 1.068.902 2.24.902 3.444C21 17.89 16.97 21 12 21s-9-3-9-7.556c0-1.251.288-2.41.792-3.444",
            key: "11yako"
        }
    ],
    [
        "path",
        {
            d: "M3.75 10S2.11 3.58 3.5 3C4.89 2.42 8 3 9.781 5",
            key: "h9cbyw"
        }
    ],
    [
        "path",
        {
            d: "M20.172 10.002s1.64-6.42.25-7c-1.39-.58-4.5 0-6.282 2",
            key: "12ilpl"
        }
    ],
    [
        "path",
        {
            d: "M8 14v.5",
            key: "1nzgdb"
        }
    ],
    [
        "path",
        {
            d: "M16 14v.5",
            key: "1lajdz"
        }
    ],
    [
        "path",
        {
            d: "M11.25 16.25h1.5L12 17l-.75-.75Z",
            key: "12kq1m"
        }
    ]
]);
const CheckCheck = createReactComponent("CheckCheck", [
    [
        "path",
        {
            d: "M18 6 7 17l-5-5",
            key: "116fxf"
        }
    ],
    [
        "path",
        {
            d: "m22 10-7.5 7.5L13 16",
            key: "ke71qq"
        }
    ]
]);
const CheckCircle2 = createReactComponent("CheckCircle2", [
    [
        "path",
        {
            d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
            key: "14v8dr"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
const CheckCircle = createReactComponent("CheckCircle", [
    [
        "path",
        {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
            key: "g774vq"
        }
    ],
    [
        "polyline",
        {
            points: "22 4 12 14.01 9 11.01",
            key: "6xbx8j"
        }
    ]
]);
const CheckSquare = createReactComponent("CheckSquare", [
    [
        "polyline",
        {
            points: "9 11 12 14 22 4",
            key: "19ybtz"
        }
    ],
    [
        "path",
        {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
            key: "1jnkn4"
        }
    ]
]);
const Check = createReactComponent("Check", [
    [
        "polyline",
        {
            points: "20 6 9 17 4 12",
            key: "10jjfj"
        }
    ]
]);
const ChefHat = createReactComponent("ChefHat", [
    [
        "path",
        {
            d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",
            key: "z3ra2g"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "17",
            x2: "18",
            y2: "17",
            key: "130uxj"
        }
    ]
]);
const Cherry = createReactComponent("Cherry", [
    [
        "path",
        {
            d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
            key: "cvxqlc"
        }
    ],
    [
        "path",
        {
            d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
            key: "1ostrc"
        }
    ],
    [
        "path",
        {
            d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",
            key: "hqx58h"
        }
    ],
    [
        "path",
        {
            d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",
            key: "eykp1o"
        }
    ]
]);
const ChevronDown = createReactComponent("ChevronDown", [
    [
        "polyline",
        {
            points: "6 9 12 15 18 9",
            key: "1do0m2"
        }
    ]
]);
const ChevronFirst = createReactComponent("ChevronFirst", [
    [
        "polyline",
        {
            points: "17 18 11 12 17 6",
            key: "11nco2"
        }
    ],
    [
        "path",
        {
            d: "M7 6v12",
            key: "1p53r6"
        }
    ]
]);
const ChevronLast = createReactComponent("ChevronLast", [
    [
        "polyline",
        {
            points: "7 18 13 12 7 6",
            key: "1minw5"
        }
    ],
    [
        "path",
        {
            d: "M17 6v12",
            key: "1o0aio"
        }
    ]
]);
const ChevronLeft = createReactComponent("ChevronLeft", [
    [
        "polyline",
        {
            points: "15 18 9 12 15 6",
            key: "kvxz59"
        }
    ]
]);
const ChevronRight = createReactComponent("ChevronRight", [
    [
        "polyline",
        {
            points: "9 18 15 12 9 6",
            key: "1rtp27"
        }
    ]
]);
const ChevronUp = createReactComponent("ChevronUp", [
    [
        "polyline",
        {
            points: "18 15 12 9 6 15",
            key: "1uugdp"
        }
    ]
]);
const ChevronsDownUp = createReactComponent("ChevronsDownUp", [
    [
        "path",
        {
            d: "m7 20 5-5 5 5",
            key: "13a0gw"
        }
    ],
    [
        "path",
        {
            d: "m7 4 5 5 5-5",
            key: "1kwcof"
        }
    ]
]);
const ChevronsDown = createReactComponent("ChevronsDown", [
    [
        "polyline",
        {
            points: "7 13 12 18 17 13",
            key: "am1j83"
        }
    ],
    [
        "polyline",
        {
            points: "7 6 12 11 17 6",
            key: "pjsmwq"
        }
    ]
]);
const ChevronsLeftRight = createReactComponent("ChevronsLeftRight", [
    [
        "path",
        {
            d: "m9 7-5 5 5 5",
            key: "j5w590"
        }
    ],
    [
        "path",
        {
            d: "m15 7 5 5-5 5",
            key: "1bl6da"
        }
    ]
]);
const ChevronsLeft = createReactComponent("ChevronsLeft", [
    [
        "polyline",
        {
            points: "11 17 6 12 11 7",
            key: "1ueymj"
        }
    ],
    [
        "polyline",
        {
            points: "18 17 13 12 18 7",
            key: "18fy0m"
        }
    ]
]);
const ChevronsRightLeft = createReactComponent("ChevronsRightLeft", [
    [
        "path",
        {
            d: "m20 17-5-5 5-5",
            key: "30x0n2"
        }
    ],
    [
        "path",
        {
            d: "m4 17 5-5-5-5",
            key: "16spf4"
        }
    ]
]);
const ChevronsRight = createReactComponent("ChevronsRight", [
    [
        "polyline",
        {
            points: "13 17 18 12 13 7",
            key: "oq0h83"
        }
    ],
    [
        "polyline",
        {
            points: "6 17 11 12 6 7",
            key: "3k300q"
        }
    ]
]);
const ChevronsUpDown = createReactComponent("ChevronsUpDown", [
    [
        "path",
        {
            d: "m7 15 5 5 5-5",
            key: "1hf1tw"
        }
    ],
    [
        "path",
        {
            d: "m7 9 5-5 5 5",
            key: "sgt6xg"
        }
    ]
]);
const ChevronsUp = createReactComponent("ChevronsUp", [
    [
        "polyline",
        {
            points: "17 11 12 6 7 11",
            key: "1u9xa9"
        }
    ],
    [
        "polyline",
        {
            points: "17 18 12 13 7 18",
            key: "1fl4au"
        }
    ]
]);
const Chrome = createReactComponent("Chrome", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "line",
        {
            x1: "21.17",
            y1: "8",
            x2: "12",
            y2: "8",
            key: "1a1nqa"
        }
    ],
    [
        "line",
        {
            x1: "3.95",
            y1: "6.06",
            x2: "8.54",
            y2: "14",
            key: "irv2k6"
        }
    ],
    [
        "line",
        {
            x1: "10.88",
            y1: "21.94",
            x2: "15.46",
            y2: "14",
            key: "fokf7t"
        }
    ]
]);
const CigaretteOff = createReactComponent("CigaretteOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M12 12H2v4h14",
            key: "91gsaq"
        }
    ],
    [
        "path",
        {
            d: "M22 12v4",
            key: "142cbu"
        }
    ],
    [
        "path",
        {
            d: "M18 12h-.5",
            key: "12ymji"
        }
    ],
    [
        "path",
        {
            d: "M7 12v4",
            key: "jqww69"
        }
    ],
    [
        "path",
        {
            d: "M18 8c0-2.5-2-2.5-2-5",
            key: "1il607"
        }
    ],
    [
        "path",
        {
            d: "M22 8c0-2.5-2-2.5-2-5",
            key: "1gah44"
        }
    ]
]);
const Cigarette = createReactComponent("Cigarette", [
    [
        "path",
        {
            d: "M18 12H2v4h16",
            key: "2rt1hm"
        }
    ],
    [
        "path",
        {
            d: "M22 12v4",
            key: "142cbu"
        }
    ],
    [
        "path",
        {
            d: "M7 12v4",
            key: "jqww69"
        }
    ],
    [
        "path",
        {
            d: "M18 8c0-2.5-2-2.5-2-5",
            key: "1il607"
        }
    ],
    [
        "path",
        {
            d: "M22 8c0-2.5-2-2.5-2-5",
            key: "1gah44"
        }
    ]
]);
const CircleDot = createReactComponent("CircleDot", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ]
]);
const CircleEllipsis = createReactComponent("CircleEllipsis", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M17 12h.01",
            key: "1m0b6t"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ],
    [
        "path",
        {
            d: "M7 12h.01",
            key: "eqddd0"
        }
    ]
]);
const CircleSlashed = createReactComponent("CircleSlashed", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M22 2 2 22",
            key: "y4kqgn"
        }
    ]
]);
const Circle = createReactComponent("Circle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
const Citrus = createReactComponent("Citrus", [
    [
        "path",
        {
            d: "M5.51 18.49a12 12 0 0 0 16.12.78c.49-.41.49-1.15.03-1.6L6.34 2.33a1.08 1.08 0 0 0-1.6.03A12 12 0 0 0 5.5 18.5Z",
            key: "cpj97m"
        }
    ],
    [
        "path",
        {
            d: "M8.34 15.66a8 8 0 0 0 10.4.78c.54-.4.54-1.16.06-1.64L9.2 5.2c-.48-.48-1.25-.48-1.64.06a8 8 0 0 0 .78 10.4Z",
            key: "vhgi9a"
        }
    ],
    [
        "path",
        {
            d: "m14 10-5.5 5.5",
            key: "92pfem"
        }
    ],
    [
        "path",
        {
            d: "M14 10v8",
            key: "3sxk0t"
        }
    ],
    [
        "path",
        {
            d: "M14 10H6",
            key: "1aai03"
        }
    ]
]);
const Clapperboard = createReactComponent("Clapperboard", [
    [
        "path",
        {
            d: "M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z",
            key: "1hxvyx"
        }
    ],
    [
        "path",
        {
            d: "m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z",
            key: "1vz1k2"
        }
    ],
    [
        "path",
        {
            d: "m6.6 4.99 3.38 4.2",
            key: "192ida"
        }
    ],
    [
        "path",
        {
            d: "m11.86 3.38 3.38 4.2",
            key: "hhucvz"
        }
    ]
]);
const ClipboardCheck = createReactComponent("ClipboardCheck", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "m9 14 2 2 4-4",
            key: "df797q"
        }
    ]
]);
const ClipboardCopy = createReactComponent("ClipboardCopy", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
            key: "4jdomd"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v4",
            key: "3hqy98"
        }
    ],
    [
        "path",
        {
            d: "M21 14H11",
            key: "1bme5i"
        }
    ],
    [
        "path",
        {
            d: "m15 10-4 4 4 4",
            key: "5dvupr"
        }
    ]
]);
const ClipboardEdit = createReactComponent("ClipboardEdit", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",
            key: "1rgxu8"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",
            key: "cereej"
        }
    ],
    [
        "path",
        {
            d: "M4 13.5V6a2 2 0 0 1 2-2h2",
            key: "5ua5vh"
        }
    ]
]);
const ClipboardList = createReactComponent("ClipboardList", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "M12 11h4",
            key: "1jrz19"
        }
    ],
    [
        "path",
        {
            d: "M12 16h4",
            key: "n85exb"
        }
    ],
    [
        "path",
        {
            d: "M8 11h.01",
            key: "1dfujw"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
]);
const ClipboardSignature = createReactComponent("ClipboardSignature", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",
            key: "1but9f"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 1.73 1",
            key: "1p8n7l"
        }
    ],
    [
        "path",
        {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",
            key: "johvi5"
        }
    ],
    [
        "path",
        {
            d: "M8 18h1",
            key: "13wk12"
        }
    ]
]);
const ClipboardType = createReactComponent("ClipboardType", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "M9 12v-1h6v1",
            key: "iehl6m"
        }
    ],
    [
        "path",
        {
            d: "M11 17h2",
            key: "12w5me"
        }
    ],
    [
        "path",
        {
            d: "M12 11v6",
            key: "1bwqyc"
        }
    ]
]);
const ClipboardX = createReactComponent("ClipboardX", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "m15 11-6 6",
            key: "1toa9n"
        }
    ],
    [
        "path",
        {
            d: "m9 11 6 6",
            key: "wlibny"
        }
    ]
]);
const Clipboard = createReactComponent("Clipboard", [
    [
        "rect",
        {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
            key: "wz2j3u"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ]
]);
const Clock1 = createReactComponent("Clock1", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 14.5 8",
            key: "12zbmj"
        }
    ]
]);
const Clock10 = createReactComponent("Clock10", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 8 10",
            key: "atfzqc"
        }
    ]
]);
const Clock11 = createReactComponent("Clock11", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 9.5 8",
            key: "l5bg6f"
        }
    ]
]);
const Clock12 = createReactComponent("Clock12", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12",
            key: "1fub01"
        }
    ]
]);
const Clock2 = createReactComponent("Clock2", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 10",
            key: "1g230d"
        }
    ]
]);
const Clock3 = createReactComponent("Clock3", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16.5 12",
            key: "1aq6pp"
        }
    ]
]);
const Clock4 = createReactComponent("Clock4", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
const Clock5 = createReactComponent("Clock5", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 14.5 16",
            key: "1pcbox"
        }
    ]
]);
const Clock6 = createReactComponent("Clock6", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 12 16.5",
            key: "hb2qv6"
        }
    ]
]);
const Clock7 = createReactComponent("Clock7", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 9.5 16",
            key: "ka3394"
        }
    ]
]);
const Clock8 = createReactComponent("Clock8", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 8 14",
            key: "tmc9b4"
        }
    ]
]);
const Clock9 = createReactComponent("Clock9", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 7.5 12",
            key: "1k60p0"
        }
    ]
]);
const Clock = createReactComponent("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
const CloudCog = createReactComponent("CloudCog", [
    [
        "path",
        {
            d: "M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9",
            key: "19hoja"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "17",
            r: "3",
            key: "1spfwm"
        }
    ],
    [
        "path",
        {
            d: "M12 13v1",
            key: "176q98"
        }
    ],
    [
        "path",
        {
            d: "M12 20v1",
            key: "1wcdkc"
        }
    ],
    [
        "path",
        {
            d: "M16 17h-1",
            key: "y560le"
        }
    ],
    [
        "path",
        {
            d: "M9 17H8",
            key: "1lfe9z"
        }
    ],
    [
        "path",
        {
            d: "m15 14-.88.88",
            key: "12ytk1"
        }
    ],
    [
        "path",
        {
            d: "M9.88 19.12 9 20",
            key: "1kmb4r"
        }
    ],
    [
        "path",
        {
            d: "m15 20-.88-.88",
            key: "1ipjcf"
        }
    ],
    [
        "path",
        {
            d: "M9.88 14.88 9 14",
            key: "c4uok7"
        }
    ]
]);
const CloudDrizzle = createReactComponent("CloudDrizzle", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M8 19v1",
            key: "1dk2by"
        }
    ],
    [
        "path",
        {
            d: "M8 14v1",
            key: "84yxot"
        }
    ],
    [
        "path",
        {
            d: "M16 19v1",
            key: "v220m7"
        }
    ],
    [
        "path",
        {
            d: "M16 14v1",
            key: "g12gj6"
        }
    ],
    [
        "path",
        {
            d: "M12 21v1",
            key: "q8vafk"
        }
    ],
    [
        "path",
        {
            d: "M12 16v1",
            key: "1mx6rx"
        }
    ]
]);
const CloudFog = createReactComponent("CloudFog", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M16 17H7",
            key: "pygtm1"
        }
    ],
    [
        "path",
        {
            d: "M17 21H9",
            key: "1u2q02"
        }
    ]
]);
const CloudHail = createReactComponent("CloudHail", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M16 14v2",
            key: "a1is7l"
        }
    ],
    [
        "path",
        {
            d: "M8 14v2",
            key: "1e9m6t"
        }
    ],
    [
        "path",
        {
            d: "M16 20h.01",
            key: "xwek51"
        }
    ],
    [
        "path",
        {
            d: "M8 20h.01",
            key: "1vjney"
        }
    ],
    [
        "path",
        {
            d: "M12 16v2",
            key: "z66u1j"
        }
    ],
    [
        "path",
        {
            d: "M12 22h.01",
            key: "1urd7a"
        }
    ]
]);
const CloudLightning = createReactComponent("CloudLightning", [
    [
        "path",
        {
            d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",
            key: "1cez44"
        }
    ],
    [
        "path",
        {
            d: "m13 12-3 5h4l-3 5",
            key: "1t22er"
        }
    ]
]);
const CloudMoonRain = createReactComponent("CloudMoonRain", [
    [
        "path",
        {
            d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
            key: "u82z8m"
        }
    ],
    [
        "path",
        {
            d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
            key: "1qmrp3"
        }
    ],
    [
        "path",
        {
            d: "M11 20v2",
            key: "174qtz"
        }
    ],
    [
        "path",
        {
            d: "M7 19v2",
            key: "12npes"
        }
    ]
]);
const CloudMoon = createReactComponent("CloudMoon", [
    [
        "path",
        {
            d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",
            key: "s09mg5"
        }
    ],
    [
        "path",
        {
            d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
            key: "u82z8m"
        }
    ]
]);
const CloudOff = createReactComponent("CloudOff", [
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
            key: "yfwify"
        }
    ],
    [
        "path",
        {
            d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
            key: "jlfiyv"
        }
    ]
]);
const CloudRainWind = createReactComponent("CloudRainWind", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "m9.2 22 3-7",
            key: "sb5f6j"
        }
    ],
    [
        "path",
        {
            d: "m9 13-3 7",
            key: "500co5"
        }
    ],
    [
        "path",
        {
            d: "m17 13-3 7",
            key: "8t2fiy"
        }
    ]
]);
const CloudRain = createReactComponent("CloudRain", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M16 14v6",
            key: "1j4efv"
        }
    ],
    [
        "path",
        {
            d: "M8 14v6",
            key: "17c4r9"
        }
    ],
    [
        "path",
        {
            d: "M12 16v6",
            key: "c8a4gj"
        }
    ]
]);
const CloudSnow = createReactComponent("CloudSnow", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M8 15h.01",
            key: "a7atzg"
        }
    ],
    [
        "path",
        {
            d: "M8 19h.01",
            key: "puxtts"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ],
    [
        "path",
        {
            d: "M12 21h.01",
            key: "h35vbk"
        }
    ],
    [
        "path",
        {
            d: "M16 15h.01",
            key: "rnfrdf"
        }
    ],
    [
        "path",
        {
            d: "M16 19h.01",
            key: "1vcnzz"
        }
    ]
]);
const CloudSunRain = createReactComponent("CloudSunRain", [
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ],
    [
        "path",
        {
            d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
            key: "dpwdj0"
        }
    ],
    [
        "path",
        {
            d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
            key: "1qmrp3"
        }
    ],
    [
        "path",
        {
            d: "M11 20v2",
            key: "174qtz"
        }
    ],
    [
        "path",
        {
            d: "M7 19v2",
            key: "12npes"
        }
    ]
]);
const CloudSun = createReactComponent("CloudSun", [
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ],
    [
        "path",
        {
            d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
            key: "dpwdj0"
        }
    ],
    [
        "path",
        {
            d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",
            key: "s09mg5"
        }
    ]
]);
const Cloud = createReactComponent("Cloud", [
    [
        "path",
        {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir"
        }
    ]
]);
const Cloudy = createReactComponent("Cloudy", [
    [
        "path",
        {
            d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "gqqjvc"
        }
    ],
    [
        "path",
        {
            d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",
            key: "1p2s76"
        }
    ]
]);
const Clover = createReactComponent("Clover", [
    [
        "path",
        {
            d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z",
            key: "1gxwox"
        }
    ],
    [
        "path",
        {
            d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16",
            key: "il7z7z"
        }
    ],
    [
        "path",
        {
            d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8",
            key: "15bpx2"
        }
    ],
    [
        "path",
        {
            d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z",
            key: "v9mug8"
        }
    ],
    [
        "path",
        {
            d: "m7 17-5 5",
            key: "1py3mz"
        }
    ]
]);
const Code2 = createReactComponent("Code2", [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
]);
const Code = createReactComponent("Code", [
    [
        "polyline",
        {
            points: "16 18 22 12 16 6",
            key: "z7tu5w"
        }
    ],
    [
        "polyline",
        {
            points: "8 6 2 12 8 18",
            key: "1eg1df"
        }
    ]
]);
const Codepen = createReactComponent("Codepen", [
    [
        "polygon",
        {
            points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
            key: "srzb37"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "15.5",
            key: "zsefro"
        }
    ],
    [
        "polyline",
        {
            points: "22 8.5 12 15.5 2 8.5",
            key: "ajlxae"
        }
    ],
    [
        "polyline",
        {
            points: "2 15.5 12 8.5 22 15.5",
            key: "susrui"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "8.5",
            key: "zll5ve"
        }
    ]
]);
const Codesandbox = createReactComponent("Codesandbox", [
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ],
    [
        "polyline",
        {
            points: "7.5 4.21 12 6.81 16.5 4.21",
            key: "fabo96"
        }
    ],
    [
        "polyline",
        {
            points: "7.5 19.79 7.5 14.6 3 12",
            key: "z377f1"
        }
    ],
    [
        "polyline",
        {
            points: "21 12 16.5 14.6 16.5 19.79",
            key: "9nrev1"
        }
    ],
    [
        "polyline",
        {
            points: "3.27 6.96 12 12.01 20.73 6.96",
            key: "1180pa"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22.08",
            x2: "12",
            y2: "12",
            key: "10a5a7"
        }
    ]
]);
const Coffee = createReactComponent("Coffee", [
    [
        "path",
        {
            d: "M17 8h1a4 4 0 1 1 0 8h-1",
            key: "jx4kbh"
        }
    ],
    [
        "path",
        {
            d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",
            key: "1bxrl0"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "2",
            x2: "6",
            y2: "4",
            key: "1p57d3"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "2",
            x2: "10",
            y2: "4",
            key: "xb2gh9"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "2",
            x2: "14",
            y2: "4",
            key: "gpi44t"
        }
    ]
]);
const Cog = createReactComponent("Cog", [
    [
        "path",
        {
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            key: "sobvz5"
        }
    ],
    [
        "path",
        {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            key: "11i496"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-2",
            key: "1osdcq"
        }
    ],
    [
        "path",
        {
            d: "m17 20.66-1-1.73",
            key: "eq3orb"
        }
    ],
    [
        "path",
        {
            d: "M11 10.27 7 3.34",
            key: "16pf9h"
        }
    ],
    [
        "path",
        {
            d: "m20.66 17-1.73-1",
            key: "sg0v6f"
        }
    ],
    [
        "path",
        {
            d: "m3.34 7 1.73 1",
            key: "1ulond"
        }
    ],
    [
        "path",
        {
            d: "M14 12h8",
            key: "4f43i9"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "m20.66 7-1.73 1",
            key: "1ow05n"
        }
    ],
    [
        "path",
        {
            d: "m3.34 17 1.73-1",
            key: "nuk764"
        }
    ],
    [
        "path",
        {
            d: "m17 3.34-1 1.73",
            key: "2wel8s"
        }
    ],
    [
        "path",
        {
            d: "m11 13.73-4 6.93",
            key: "794ttg"
        }
    ]
]);
const Coins = createReactComponent("Coins", [
    [
        "circle",
        {
            cx: "8",
            cy: "8",
            r: "6",
            key: "3yglwk"
        }
    ],
    [
        "path",
        {
            d: "M18.09 10.37A6 6 0 1 1 10.34 18",
            key: "t5s6rm"
        }
    ],
    [
        "path",
        {
            d: "M7 6h1v4",
            key: "1obek4"
        }
    ],
    [
        "path",
        {
            d: "m16.71 13.88.7.71-2.82 2.82",
            key: "1rbuyh"
        }
    ]
]);
const Columns = createReactComponent("Columns", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "21",
            key: "essbwb"
        }
    ]
]);
const Command = createReactComponent("Command", [
    [
        "path",
        {
            d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
            key: "uqkaba"
        }
    ]
]);
const Compass = createReactComponent("Compass", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polygon",
        {
            points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
            key: "m9r19z"
        }
    ]
]);
const Component = createReactComponent("Component", [
    [
        "path",
        {
            d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",
            key: "1kciei"
        }
    ],
    [
        "path",
        {
            d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",
            key: "1ome0g"
        }
    ],
    [
        "path",
        {
            d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",
            key: "vbupec"
        }
    ],
    [
        "path",
        {
            d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",
            key: "16csic"
        }
    ]
]);
const ConciergeBell = createReactComponent("ConciergeBell", [
    [
        "path",
        {
            d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z",
            key: "1co3i8"
        }
    ],
    [
        "path",
        {
            d: "M20 16a8 8 0 1 0-16 0",
            key: "1pa543"
        }
    ],
    [
        "path",
        {
            d: "M12 4v4",
            key: "1bq03y"
        }
    ],
    [
        "path",
        {
            d: "M10 4h4",
            key: "1xpv9s"
        }
    ]
]);
const Contact = createReactComponent("Contact", [
    [
        "path",
        {
            d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",
            key: "1mghuy"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            key: "12vinp"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "2",
            key: "1yojzk"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "4",
            key: "1r8a5u"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "4",
            key: "tp0trh"
        }
    ]
]);
const Contrast = createReactComponent("Contrast", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 18a6 6 0 0 0 0-12v12z",
            key: "j4l70d"
        }
    ]
]);
const Cookie = createReactComponent("Cookie", [
    [
        "path",
        {
            d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
            key: "laymnq"
        }
    ],
    [
        "path",
        {
            d: "M8.5 8.5v.01",
            key: "ue8clq"
        }
    ],
    [
        "path",
        {
            d: "M16 15.5v.01",
            key: "14dtrp"
        }
    ],
    [
        "path",
        {
            d: "M12 12v.01",
            key: "u5ubse"
        }
    ],
    [
        "path",
        {
            d: "M11 17v.01",
            key: "1hyl5a"
        }
    ],
    [
        "path",
        {
            d: "M7 14v.01",
            key: "uct60s"
        }
    ]
]);
const Copy = createReactComponent("Copy", [
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            ry: "2",
            key: "1ma1o8"
        }
    ],
    [
        "path",
        {
            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
            key: "pklvoz"
        }
    ]
]);
const Copyleft = createReactComponent("Copyleft", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M9 9.35a4 4 0 1 1 0 5.3",
            key: "p8fkhi"
        }
    ]
]);
const Copyright = createReactComponent("Copyright", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M15 9.354a4 4 0 1 0 0 5.292",
            key: "8xfhbo"
        }
    ]
]);
const CornerDownLeft = createReactComponent("CornerDownLeft", [
    [
        "polyline",
        {
            points: "9 10 4 15 9 20",
            key: "r3jprv"
        }
    ],
    [
        "path",
        {
            d: "M20 4v7a4 4 0 0 1-4 4H4",
            key: "6o5b7l"
        }
    ]
]);
const CornerDownRight = createReactComponent("CornerDownRight", [
    [
        "polyline",
        {
            points: "15 10 20 15 15 20",
            key: "1q7qjw"
        }
    ],
    [
        "path",
        {
            d: "M4 4v7a4 4 0 0 0 4 4h12",
            key: "z08zvw"
        }
    ]
]);
const CornerLeftDown = createReactComponent("CornerLeftDown", [
    [
        "polyline",
        {
            points: "14 15 9 20 4 15",
            key: "nkc4i"
        }
    ],
    [
        "path",
        {
            d: "M20 4h-7a4 4 0 0 0-4 4v12",
            key: "nbpdq2"
        }
    ]
]);
const CornerLeftUp = createReactComponent("CornerLeftUp", [
    [
        "polyline",
        {
            points: "14 9 9 4 4 9",
            key: "m9oyvo"
        }
    ],
    [
        "path",
        {
            d: "M20 20h-7a4 4 0 0 1-4-4V4",
            key: "1blwi3"
        }
    ]
]);
const CornerRightDown = createReactComponent("CornerRightDown", [
    [
        "polyline",
        {
            points: "10 15 15 20 20 15",
            key: "axus6l"
        }
    ],
    [
        "path",
        {
            d: "M4 4h7a4 4 0 0 1 4 4v12",
            key: "wcbgct"
        }
    ]
]);
const CornerRightUp = createReactComponent("CornerRightUp", [
    [
        "polyline",
        {
            points: "10 9 15 4 20 9",
            key: "1lr6px"
        }
    ],
    [
        "path",
        {
            d: "M4 20h7a4 4 0 0 0 4-4V4",
            key: "1plgdj"
        }
    ]
]);
const CornerUpLeft = createReactComponent("CornerUpLeft", [
    [
        "polyline",
        {
            points: "9 14 4 9 9 4",
            key: "881910"
        }
    ],
    [
        "path",
        {
            d: "M20 20v-7a4 4 0 0 0-4-4H4",
            key: "1nkjon"
        }
    ]
]);
const CornerUpRight = createReactComponent("CornerUpRight", [
    [
        "polyline",
        {
            points: "15 14 20 9 15 4",
            key: "1tbx3s"
        }
    ],
    [
        "path",
        {
            d: "M4 20v-7a4 4 0 0 1 4-4h12",
            key: "1lu4f8"
        }
    ]
]);
const Cpu = createReactComponent("Cpu", [
    [
        "rect",
        {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2",
            ry: "2",
            key: "19czt8"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
            key: "o3kz5p"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "2",
            x2: "9",
            y2: "4",
            key: "1tcqwn"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "2",
            x2: "15",
            y2: "4",
            key: "1yvlak"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "21",
            x2: "9",
            y2: "22",
            key: "tuhu08"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "20",
            x2: "15",
            y2: "22",
            key: "1o5cyu"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "9",
            x2: "22",
            y2: "9",
            key: "b8rlm1"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "14",
            x2: "22",
            y2: "14",
            key: "1mk8c1"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "9",
            x2: "4",
            y2: "9",
            key: "bt7uvh"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "14",
            x2: "4",
            y2: "14",
            key: "hp71sd"
        }
    ]
]);
const CreditCard = createReactComponent("CreditCard", [
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2",
            key: "qneu4z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "10",
            x2: "22",
            y2: "10",
            key: "1ytoly"
        }
    ]
]);
const Croissant = createReactComponent("Croissant", [
    [
        "path",
        {
            d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
            key: "1ozxlb"
        }
    ],
    [
        "path",
        {
            d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
            key: "ffuyb5"
        }
    ],
    [
        "path",
        {
            d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",
            key: "osnpzi"
        }
    ],
    [
        "path",
        {
            d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
            key: "1vubaw"
        }
    ],
    [
        "path",
        {
            d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",
            key: "wxr772"
        }
    ]
]);
const Crop = createReactComponent("Crop", [
    [
        "path",
        {
            d: "M6 2v14a2 2 0 0 0 2 2h14",
            key: "ron5a4"
        }
    ],
    [
        "path",
        {
            d: "M18 22V8a2 2 0 0 0-2-2H2",
            key: "7s9ehn"
        }
    ]
]);
const Cross = createReactComponent("Cross", [
    [
        "path",
        {
            d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
            key: "1t5g7j"
        }
    ]
]);
const Crosshair = createReactComponent("Crosshair", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "12",
            x2: "18",
            y2: "12",
            key: "yivkn6"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "12",
            x2: "2",
            y2: "12",
            key: "hlzxjj"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "6",
            x2: "12",
            y2: "2",
            key: "1s1957"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "18",
            key: "2x08zm"
        }
    ]
]);
const Crown = createReactComponent("Crown", [
    [
        "path",
        {
            d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
            key: "zkxr6b"
        }
    ]
]);
const CupSoda = createReactComponent("CupSoda", [
    [
        "path",
        {
            d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
            key: "8166m8"
        }
    ],
    [
        "path",
        {
            d: "M5 8h14",
            key: "pcz4l3"
        }
    ],
    [
        "path",
        {
            d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
            key: "yjz344"
        }
    ],
    [
        "path",
        {
            d: "m12 8 1-6h2",
            key: "3ybfa4"
        }
    ]
]);
const CurlyBraces = createReactComponent("CurlyBraces", [
    [
        "path",
        {
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
            key: "ezmyqa"
        }
    ],
    [
        "path",
        {
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
            key: "e1hn23"
        }
    ]
]);
const Currency = createReactComponent("Currency", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "8",
            key: "46899m"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "3",
            x2: "6",
            y2: "6",
            key: "zkqcdn"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "3",
            x2: "18",
            y2: "6",
            key: "n7spic"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "21",
            x2: "6",
            y2: "18",
            key: "7xq9ok"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "18",
            y2: "18",
            key: "mzvtez"
        }
    ]
]);
const Database = createReactComponent("Database", [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3",
            key: "pw5pse"
        }
    ],
    [
        "path",
        {
            d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5",
            key: "7dtpbs"
        }
    ]
]);
const Delete = createReactComponent("Delete", [
    [
        "path",
        {
            d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",
            key: "1oy587"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "9",
            x2: "12",
            y2: "15",
            key: "1328vg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "9",
            x2: "18",
            y2: "15",
            key: "6xbiik"
        }
    ]
]);
const Diamond = createReactComponent("Diamond", [
    [
        "rect",
        {
            x: "12",
            y: "1",
            width: "15.56",
            height: "15.56",
            rx: "2.41",
            transform: "rotate(45 12 1)",
            key: "dtb0qj"
        }
    ]
]);
const Dice1 = createReactComponent("Dice1", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ]
]);
const Dice2 = createReactComponent("Dice2", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M15 9h.01",
            key: "x1ddxp"
        }
    ],
    [
        "path",
        {
            d: "M9 15h.01",
            key: "fzyn71"
        }
    ]
]);
const Dice3 = createReactComponent("Dice3", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
]);
const Dice4 = createReactComponent("Dice4", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M8 8h.01",
            key: "1e4136"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ]
]);
const Dice5 = createReactComponent("Dice5", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M8 8h.01",
            key: "1e4136"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ]
]);
const Dice6 = createReactComponent("Dice6", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M16 8h.01",
            key: "cr5u4v"
        }
    ],
    [
        "path",
        {
            d: "M16 12h.01",
            key: "1l6xoz"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ],
    [
        "path",
        {
            d: "M8 8h.01",
            key: "1e4136"
        }
    ],
    [
        "path",
        {
            d: "M8 12h.01",
            key: "czm47f"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
]);
const Dices = createReactComponent("Dices", [
    [
        "rect",
        {
            x: "2",
            y: "10",
            width: "12",
            height: "12",
            rx: "2",
            ry: "2",
            key: "73wp2n"
        }
    ],
    [
        "path",
        {
            d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
            key: "1o487t"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "path",
        {
            d: "M10 14h.01",
            key: "ssrbsk"
        }
    ],
    [
        "path",
        {
            d: "M15 6h.01",
            key: "cblpky"
        }
    ],
    [
        "path",
        {
            d: "M18 9h.01",
            key: "2061c0"
        }
    ]
]);
const Diff = createReactComponent("Diff", [
    [
        "path",
        {
            d: "M12 3v14",
            key: "7cf3v8"
        }
    ],
    [
        "path",
        {
            d: "M5 10h14",
            key: "elsbfy"
        }
    ],
    [
        "path",
        {
            d: "M5 21h14",
            key: "11awu3"
        }
    ]
]);
const Disc = createReactComponent("Disc", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
const DivideCircle = createReactComponent("DivideCircle", [
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "16",
            key: "4v5xkb"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "8",
            key: "1vrb7x"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
const DivideSquare = createReactComponent("DivideSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "16",
            key: "4v5xkb"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "8",
            key: "1vrb7x"
        }
    ]
]);
const Divide = createReactComponent("Divide", [
    [
        "circle",
        {
            cx: "12",
            cy: "6",
            r: "1",
            key: "1bh7o1"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "18",
            r: "1",
            key: "lqb9t5"
        }
    ]
]);
const DnaOff = createReactComponent("DnaOff", [
    [
        "path",
        {
            d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",
            key: "sxiaad"
        }
    ],
    [
        "path",
        {
            d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",
            key: "yn4bs1"
        }
    ],
    [
        "path",
        {
            d: "m17 6-2.5-2.5",
            key: "5cdfhj"
        }
    ],
    [
        "path",
        {
            d: "m14 8-1.5-1.5",
            key: "1ohn8i"
        }
    ],
    [
        "path",
        {
            d: "m7 18 2.5 2.5",
            key: "16tu1a"
        }
    ],
    [
        "path",
        {
            d: "m3.5 14.5.5.5",
            key: "hapbhd"
        }
    ],
    [
        "path",
        {
            d: "m20 9 .5.5",
            key: "1n7z02"
        }
    ],
    [
        "path",
        {
            d: "m6.5 12.5 1 1",
            key: "cs35ky"
        }
    ],
    [
        "path",
        {
            d: "m16.5 10.5 1 1",
            key: "696xn5"
        }
    ],
    [
        "path",
        {
            d: "m10 16 1.5 1.5",
            key: "11lckj"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Dna = createReactComponent("Dna", [
    [
        "path",
        {
            d: "M2 15c6.667-6 13.333 0 20-6",
            key: "1pyr53"
        }
    ],
    [
        "path",
        {
            d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993",
            key: "q3hbxp"
        }
    ],
    [
        "path",
        {
            d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",
            key: "80uv8i"
        }
    ],
    [
        "path",
        {
            d: "m17 6-2.5-2.5",
            key: "5cdfhj"
        }
    ],
    [
        "path",
        {
            d: "m14 8-1-1",
            key: "15nbz5"
        }
    ],
    [
        "path",
        {
            d: "m7 18 2.5 2.5",
            key: "16tu1a"
        }
    ],
    [
        "path",
        {
            d: "m3.5 14.5.5.5",
            key: "hapbhd"
        }
    ],
    [
        "path",
        {
            d: "m20 9 .5.5",
            key: "1n7z02"
        }
    ],
    [
        "path",
        {
            d: "m6.5 12.5 1 1",
            key: "cs35ky"
        }
    ],
    [
        "path",
        {
            d: "m16.5 10.5 1 1",
            key: "696xn5"
        }
    ],
    [
        "path",
        {
            d: "m10 16 1.5 1.5",
            key: "11lckj"
        }
    ]
]);
const Dog = createReactComponent("Dog", [
    [
        "path",
        {
            d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",
            key: "19br0u"
        }
    ],
    [
        "path",
        {
            d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
            key: "11n1an"
        }
    ],
    [
        "path",
        {
            d: "M8 14v.5",
            key: "1nzgdb"
        }
    ],
    [
        "path",
        {
            d: "M16 14v.5",
            key: "1lajdz"
        }
    ],
    [
        "path",
        {
            d: "M11.25 16.25h1.5L12 17l-.75-.75Z",
            key: "12kq1m"
        }
    ],
    [
        "path",
        {
            d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",
            key: "wsu29d"
        }
    ]
]);
const DollarSign = createReactComponent("DollarSign", [
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ],
    [
        "path",
        {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }
    ]
]);
const DownloadCloud = createReactComponent("DownloadCloud", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M12 12v9",
            key: "192myk"
        }
    ],
    [
        "path",
        {
            d: "m8 17 4 4 4-4",
            key: "1ul180"
        }
    ]
]);
const Download = createReactComponent("Download", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "15",
            x2: "12",
            y2: "3",
            key: "nqo27w"
        }
    ]
]);
const Dribbble = createReactComponent("Dribbble", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",
            key: "hpej1"
        }
    ],
    [
        "path",
        {
            d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",
            key: "1tr44o"
        }
    ],
    [
        "path",
        {
            d: "M8.56 2.75c4.37 6 6 9.42 8 17.72",
            key: "kbh691"
        }
    ]
]);
const Droplet = createReactComponent("Droplet", [
    [
        "path",
        {
            d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
            key: "c7niix"
        }
    ]
]);
const Droplets = createReactComponent("Droplets", [
    [
        "path",
        {
            d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
            key: "1ptgy4"
        }
    ],
    [
        "path",
        {
            d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
            key: "1sl1rz"
        }
    ]
]);
const Drumstick = createReactComponent("Drumstick", [
    [
        "path",
        {
            d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",
            key: "1o96s0"
        }
    ],
    [
        "path",
        {
            d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",
            key: "14vv5h"
        }
    ]
]);
const Dumbbell = createReactComponent("Dumbbell", [
    [
        "path",
        {
            d: "m6.5 6.5 11 11",
            key: "f7oqzb"
        }
    ],
    [
        "path",
        {
            d: "m21 21-1-1",
            key: "cpc6if"
        }
    ],
    [
        "path",
        {
            d: "m3 3 1 1",
            key: "d3rpuf"
        }
    ],
    [
        "path",
        {
            d: "m18 22 4-4",
            key: "1e32o6"
        }
    ],
    [
        "path",
        {
            d: "m2 6 4-4",
            key: "189tqz"
        }
    ],
    [
        "path",
        {
            d: "m3 10 7-7",
            key: "1bxui2"
        }
    ],
    [
        "path",
        {
            d: "m14 21 7-7",
            key: "16x78n"
        }
    ]
]);
const EarOff = createReactComponent("EarOff", [
    [
        "path",
        {
            d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",
            key: "1qngmn"
        }
    ],
    [
        "path",
        {
            d: "M6 8.5c0-.75.13-1.47.36-2.14",
            key: "b06bma"
        }
    ],
    [
        "path",
        {
            d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",
            key: "g10hsz"
        }
    ],
    [
        "path",
        {
            d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",
            key: "ygzou7"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Ear = createReactComponent("Ear", [
    [
        "path",
        {
            d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",
            key: "1dfaln"
        }
    ],
    [
        "path",
        {
            d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",
            key: "1qnva7"
        }
    ]
]);
const Edit2 = createReactComponent("Edit2", [
    [
        "path",
        {
            d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
            key: "2s2c1q"
        }
    ]
]);
const Edit3 = createReactComponent("Edit3", [
    [
        "path",
        {
            d: "M12 20h9",
            key: "t2du7b"
        }
    ],
    [
        "path",
        {
            d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
            key: "18w55b"
        }
    ]
]);
const Edit = createReactComponent("Edit", [
    [
        "path",
        {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1qinfi"
        }
    ],
    [
        "path",
        {
            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
            key: "1cs3r3"
        }
    ]
]);
const EggFried = createReactComponent("EggFried", [
    [
        "circle",
        {
            cx: "11.5",
            cy: "12.5",
            r: "3.5",
            key: "1cl1mi"
        }
    ],
    [
        "path",
        {
            d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
            key: "165ef9"
        }
    ]
]);
const EggOff = createReactComponent("EggOff", [
    [
        "path",
        {
            d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",
            key: "6et380"
        }
    ],
    [
        "path",
        {
            d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",
            key: "gcdc3f"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Egg = createReactComponent("Egg", [
    [
        "path",
        {
            d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",
            key: "1c39pg"
        }
    ]
]);
const EqualNot = createReactComponent("EqualNot", [
    [
        "line",
        {
            x1: "5",
            y1: "9",
            x2: "19",
            y2: "9",
            key: "p612hi"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "15",
            x2: "19",
            y2: "15",
            key: "e39u1i"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "5",
            y2: "19",
            key: "t1677v"
        }
    ]
]);
const Equal = createReactComponent("Equal", [
    [
        "line",
        {
            x1: "5",
            y1: "9",
            x2: "19",
            y2: "9",
            key: "p612hi"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "15",
            x2: "19",
            y2: "15",
            key: "e39u1i"
        }
    ]
]);
const Eraser = createReactComponent("Eraser", [
    [
        "path",
        {
            d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
            key: "182aya"
        }
    ],
    [
        "path",
        {
            d: "M22 21H7",
            key: "t4ddhn"
        }
    ],
    [
        "path",
        {
            d: "m5 11 9 9",
            key: "1mo9qw"
        }
    ]
]);
const Euro = createReactComponent("Euro", [
    [
        "path",
        {
            d: "M4 10h12",
            key: "1y6xl8"
        }
    ],
    [
        "path",
        {
            d: "M4 14h9",
            key: "1loblj"
        }
    ],
    [
        "path",
        {
            d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
            key: "1j6lzo"
        }
    ]
]);
const Expand = createReactComponent("Expand", [
    [
        "path",
        {
            d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8",
            key: "1c15vz"
        }
    ],
    [
        "path",
        {
            d: "M3 16.2V21m0 0h4.8M3 21l6-6",
            key: "1fsnz2"
        }
    ],
    [
        "path",
        {
            d: "M21 7.8V3m0 0h-4.8M21 3l-6 6",
            key: "hawz9i"
        }
    ],
    [
        "path",
        {
            d: "M3 7.8V3m0 0h4.8M3 3l6 6",
            key: "u9ee12"
        }
    ]
]);
const ExternalLink = createReactComponent("ExternalLink", [
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ],
    [
        "polyline",
        {
            points: "15 3 21 3 21 9",
            key: "mznyad"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3",
            key: "19d9un"
        }
    ]
]);
const EyeOff = createReactComponent("EyeOff", [
    [
        "path",
        {
            d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
            key: "1jxqfv"
        }
    ],
    [
        "path",
        {
            d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
            key: "9wicm4"
        }
    ],
    [
        "path",
        {
            d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
            key: "1jreej"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Eye = createReactComponent("Eye", [
    [
        "path",
        {
            d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
            key: "rwhkz3"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
const Facebook = createReactComponent("Facebook", [
    [
        "path",
        {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }
    ]
]);
const Factory = createReactComponent("Factory", [
    [
        "path",
        {
            d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
            key: "159hny"
        }
    ],
    [
        "path",
        {
            d: "M17 18h1",
            key: "uldtlt"
        }
    ],
    [
        "path",
        {
            d: "M12 18h1",
            key: "s9uhes"
        }
    ],
    [
        "path",
        {
            d: "M7 18h1",
            key: "1neino"
        }
    ]
]);
const Fan = createReactComponent("Fan", [
    [
        "path",
        {
            d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
            key: "484a7f"
        }
    ],
    [
        "path",
        {
            d: "M12 12v.01",
            key: "u5ubse"
        }
    ]
]);
const FastForward = createReactComponent("FastForward", [
    [
        "polygon",
        {
            points: "13 19 22 12 13 5 13 19",
            key: "587y9g"
        }
    ],
    [
        "polygon",
        {
            points: "2 19 11 12 2 5 2 19",
            key: "3pweh0"
        }
    ]
]);
const Feather = createReactComponent("Feather", [
    [
        "path",
        {
            d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",
            key: "u4sw5n"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "8",
            x2: "2",
            y2: "22",
            key: "ay4g5i"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            y1: "15",
            x2: "9",
            y2: "15",
            key: "c4zw0f"
        }
    ]
]);
const Figma = createReactComponent("Figma", [
    [
        "path",
        {
            d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
            key: "1340ok"
        }
    ],
    [
        "path",
        {
            d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
            key: "1hz3m3"
        }
    ],
    [
        "path",
        {
            d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
            key: "1oz8n2"
        }
    ],
    [
        "path",
        {
            d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
            key: "1ff65i"
        }
    ],
    [
        "path",
        {
            d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
            key: "pdip6e"
        }
    ]
]);
const FileArchive = createReactComponent("FileArchive", [
    [
        "path",
        {
            d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2",
            key: "1u864v"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "20",
            r: "2",
            key: "1xzdoj"
        }
    ],
    [
        "path",
        {
            d: "M10 7V6",
            key: "dljcrl"
        }
    ],
    [
        "path",
        {
            d: "M10 12v-1",
            key: "v7bkov"
        }
    ],
    [
        "path",
        {
            d: "M10 18v-2",
            key: "1cjy8d"
        }
    ]
]);
const FileAudio2 = createReactComponent("FileAudio2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2",
            key: "fkyf72"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 17v-3a4 4 0 0 1 8 0v3",
            key: "1ggdre"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "17",
            r: "1",
            key: "bc1fq4"
        }
    ],
    [
        "circle",
        {
            cx: "3",
            cy: "17",
            r: "1",
            key: "vo6nti"
        }
    ]
]);
const FileAudio = createReactComponent("FileAudio", [
    [
        "path",
        {
            d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
            key: "1013sb"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z",
            key: "gqt63y"
        }
    ],
    [
        "path",
        {
            d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z",
            key: "cf7lqx"
        }
    ],
    [
        "path",
        {
            d: "M2 19v-3a6 6 0 0 1 12 0v3",
            key: "1acxgf"
        }
    ]
]);
const FileAxis3d = createReactComponent("FileAxis3d", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M8 10v8h8",
            key: "tlaukw"
        }
    ],
    [
        "path",
        {
            d: "m8 18 4-4",
            key: "12zab0"
        }
    ]
]);
const FileBadge2 = createReactComponent("FileBadge2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            key: "13rien"
        }
    ],
    [
        "path",
        {
            d: "m14 12.5 1 5.5-3-1-3 1 1-5.5",
            key: "14xlky"
        }
    ]
]);
const FileBadge = createReactComponent("FileBadge", [
    [
        "path",
        {
            d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6",
            key: "qtddq0"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            key: "u0c8gj"
        }
    ],
    [
        "path",
        {
            d: "M7 16.5 8 22l-3-1-3 1 1-5.5",
            key: "5gm2nr"
        }
    ]
]);
const FileBarChart2 = createReactComponent("FileBarChart2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-6",
            key: "17g6i2"
        }
    ],
    [
        "path",
        {
            d: "M8 18v-1",
            key: "zg0ygc"
        }
    ],
    [
        "path",
        {
            d: "M16 18v-3",
            key: "j5jt4h"
        }
    ]
]);
const FileBarChart = createReactComponent("FileBarChart", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-4",
            key: "q1q25u"
        }
    ],
    [
        "path",
        {
            d: "M8 18v-2",
            key: "qcmpov"
        }
    ],
    [
        "path",
        {
            d: "M16 18v-6",
            key: "15y0np"
        }
    ]
]);
const FileBox = createReactComponent("FileBox", [
    [
        "path",
        {
            d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "h7jej2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",
            key: "f4a3oc"
        }
    ],
    [
        "path",
        {
            d: "m7 17-4.74-2.85",
            key: "etm6su"
        }
    ],
    [
        "path",
        {
            d: "m7 17 4.74-2.85",
            key: "5xuooz"
        }
    ],
    [
        "path",
        {
            d: "M7 17v5",
            key: "1yj1jh"
        }
    ]
]);
const FileCheck2 = createReactComponent("FileCheck2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m3 15 2 2 4-4",
            key: "1lhrkk"
        }
    ]
]);
const FileCheck = createReactComponent("FileCheck", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m9 15 2 2 4-4",
            key: "1grp1n"
        }
    ]
]);
const FileClock = createReactComponent("FileClock", [
    [
        "path",
        {
            d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
            key: "9lo3o3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "8",
            cy: "16",
            r: "6",
            key: "10v15b"
        }
    ],
    [
        "path",
        {
            d: "M9.5 17.5 8 16.25V14",
            key: "1o80t2"
        }
    ]
]);
const FileCode = createReactComponent("FileCode", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m9 18 3-3-3-3",
            key: "112psh"
        }
    ],
    [
        "path",
        {
            d: "m5 12-3 3 3 3",
            key: "oke12k"
        }
    ]
]);
const FileCog2 = createReactComponent("FileCog2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "15",
            r: "2",
            key: "1vpstw"
        }
    ],
    [
        "path",
        {
            d: "M12 12v1",
            key: "1vuyxr"
        }
    ],
    [
        "path",
        {
            d: "M12 17v1",
            key: "y8y3f9"
        }
    ],
    [
        "path",
        {
            d: "m14.6 13.5-.87.5",
            key: "nomeg4"
        }
    ],
    [
        "path",
        {
            d: "m10.27 16-.87.5",
            key: "1o8v95"
        }
    ],
    [
        "path",
        {
            d: "m14.6 16.5-.87-.5",
            key: "gzu2jw"
        }
    ],
    [
        "path",
        {
            d: "m10.27 14-.87-.5",
            key: "1vlkk3"
        }
    ]
]);
const FileCog = createReactComponent("FileCog", [
    [
        "path",
        {
            d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "dba9qu"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "14",
            r: "3",
            key: "a1xfv6"
        }
    ],
    [
        "path",
        {
            d: "M6 10v1",
            key: "xs0f9j"
        }
    ],
    [
        "path",
        {
            d: "M6 17v1",
            key: "idyhc0"
        }
    ],
    [
        "path",
        {
            d: "M10 14H9",
            key: "m5fm2q"
        }
    ],
    [
        "path",
        {
            d: "M3 14H2",
            key: "19ot09"
        }
    ],
    [
        "path",
        {
            d: "m9 11-.88.88",
            key: "lhul2b"
        }
    ],
    [
        "path",
        {
            d: "M3.88 16.12 3 17",
            key: "169z9n"
        }
    ],
    [
        "path",
        {
            d: "m9 17-.88-.88",
            key: "5io96w"
        }
    ],
    [
        "path",
        {
            d: "M3.88 11.88 3 11",
            key: "1ynhy1"
        }
    ]
]);
const FileDiff = createReactComponent("FileDiff", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M12 13V7",
            key: "h0r20n"
        }
    ],
    [
        "path",
        {
            d: "M9 10h6",
            key: "9gxzsh"
        }
    ],
    [
        "path",
        {
            d: "M9 17h6",
            key: "r8uit2"
        }
    ]
]);
const FileDigit = createReactComponent("FileDigit", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10 12h2v6",
            key: "12zw74"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "12",
            width: "4",
            height: "6",
            key: "kg2lqm"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
]);
const FileDown = createReactComponent("FileDown", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-6",
            key: "17g6i2"
        }
    ],
    [
        "path",
        {
            d: "m9 15 3 3 3-3",
            key: "1npd3o"
        }
    ]
]);
const FileEdit = createReactComponent("FileEdit", [
    [
        "path",
        {
            d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",
            key: "1bg6eb"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",
            key: "1rgxu8"
        }
    ]
]);
const FileHeart = createReactComponent("FileHeart", [
    [
        "path",
        {
            d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "dba9qu"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
            key: "1c1fso"
        }
    ]
]);
const FileImage = createReactComponent("FileImage", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "13",
            r: "2",
            key: "6v46hv"
        }
    ],
    [
        "path",
        {
            d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22",
            key: "17vly1"
        }
    ]
]);
const FileInput = createReactComponent("FileInput", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 15h10",
            key: "jfw4w8"
        }
    ],
    [
        "path",
        {
            d: "m9 18 3-3-3-3",
            key: "112psh"
        }
    ]
]);
const FileJson2 = createReactComponent("FileJson2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
            key: "fq0c9t"
        }
    ],
    [
        "path",
        {
            d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
            key: "4gibmv"
        }
    ]
]);
const FileJson = createReactComponent("FileJson", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
            key: "1oajmo"
        }
    ],
    [
        "path",
        {
            d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
            key: "mpwhp6"
        }
    ]
]);
const FileKey2 = createReactComponent("FileKey2", [
    [
        "path",
        {
            d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "1nw5t3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "16",
            r: "2",
            key: "1ehqvc"
        }
    ],
    [
        "path",
        {
            d: "m10 10-4.5 4.5",
            key: "7fwrp6"
        }
    ],
    [
        "path",
        {
            d: "m9 11 1 1",
            key: "wa6s5q"
        }
    ]
]);
const FileKey = createReactComponent("FileKey", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "16",
            r: "2",
            key: "4ckbqe"
        }
    ],
    [
        "path",
        {
            d: "m16 10-4.5 4.5",
            key: "7p3ebg"
        }
    ],
    [
        "path",
        {
            d: "m15 11 1 1",
            key: "1bsyx3"
        }
    ]
]);
const FileLineChart = createReactComponent("FileLineChart", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m16 13-3.5 3.5-2-2L8 17",
            key: "zz7yod"
        }
    ]
]);
const FileLock2 = createReactComponent("FileLock2", [
    [
        "path",
        {
            d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "gwd2r9"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "13",
            width: "8",
            height: "5",
            rx: "1",
            key: "lkev2l"
        }
    ],
    [
        "path",
        {
            d: "M8 13v-2a2 2 0 1 0-4 0v2",
            key: "1pdxzg"
        }
    ]
]);
const FileLock = createReactComponent("FileLock", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "12",
            width: "8",
            height: "6",
            rx: "1",
            key: "hql291"
        }
    ],
    [
        "path",
        {
            d: "M15 12v-2a3 3 0 1 0-6 0v2",
            key: "1nqnhw"
        }
    ]
]);
const FileMinus2 = createReactComponent("FileMinus2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M3 15h6",
            key: "4e2qda"
        }
    ]
]);
const FileMinus = createReactComponent("FileMinus", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "15",
            x2: "15",
            y2: "15",
            key: "1hgpwl"
        }
    ]
]);
const FileOutput = createReactComponent("FileOutput", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 15h10",
            key: "jfw4w8"
        }
    ],
    [
        "path",
        {
            d: "m5 12-3 3 3 3",
            key: "oke12k"
        }
    ]
]);
const FilePieChart = createReactComponent("FilePieChart", [
    [
        "path",
        {
            d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",
            key: "zhyrez"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29",
            key: "f1t5jc"
        }
    ],
    [
        "path",
        {
            d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z",
            key: "7q54ec"
        }
    ]
]);
const FilePlus2 = createReactComponent("FilePlus2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M3 15h6",
            key: "4e2qda"
        }
    ],
    [
        "path",
        {
            d: "M6 12v6",
            key: "1u72j0"
        }
    ]
]);
const FilePlus = createReactComponent("FilePlus", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "18",
            x2: "12",
            y2: "12",
            key: "16t3gy"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "15",
            x2: "15",
            y2: "15",
            key: "1hgpwl"
        }
    ]
]);
const FileQuestion = createReactComponent("FileQuestion", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
            key: "1umxtm"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
const FileScan = createReactComponent("FileScan", [
    [
        "path",
        {
            d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5",
            key: "uvikde"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M16 22a2 2 0 0 1-2-2",
            key: "1wqh5n"
        }
    ],
    [
        "path",
        {
            d: "M20 22a2 2 0 0 0 2-2",
            key: "1l9q4k"
        }
    ],
    [
        "path",
        {
            d: "M20 14a2 2 0 0 1 2 2",
            key: "1ny6zw"
        }
    ],
    [
        "path",
        {
            d: "M16 14a2 2 0 0 0-2 2",
            key: "ceaadl"
        }
    ]
]);
const FileSearch2 = createReactComponent("FileSearch2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "circle",
        {
            cx: "11.5",
            cy: "14.5",
            r: "2.5",
            key: "1bq0ko"
        }
    ],
    [
        "path",
        {
            d: "M13.25 16.25 15 18",
            key: "9eh8bj"
        }
    ]
]);
const FileSearch = createReactComponent("FileSearch", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",
            key: "am10z3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            key: "ychnub"
        }
    ],
    [
        "path",
        {
            d: "m9 18-1.5-1.5",
            key: "1j6qii"
        }
    ]
]);
const FileSignature = createReactComponent("FileSignature", [
    [
        "path",
        {
            d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5",
            key: "kd5d3"
        }
    ],
    [
        "path",
        {
            d: "M8 18h1",
            key: "13wk12"
        }
    ],
    [
        "path",
        {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",
            key: "johvi5"
        }
    ]
]);
const FileSpreadsheet = createReactComponent("FileSpreadsheet", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M8 13h2",
            key: "yr2amv"
        }
    ],
    [
        "path",
        {
            d: "M8 17h2",
            key: "2yhykz"
        }
    ],
    [
        "path",
        {
            d: "M14 13h2",
            key: "un5t4a"
        }
    ],
    [
        "path",
        {
            d: "M14 17h2",
            key: "10kma7"
        }
    ]
]);
const FileSymlink = createReactComponent("FileSymlink", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7",
            key: "138uzh"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m10 18 3-3-3-3",
            key: "18f6ys"
        }
    ],
    [
        "path",
        {
            d: "M4 18v-1a2 2 0 0 1 2-2h6",
            key: "5uz2rn"
        }
    ]
]);
const FileTerminal = createReactComponent("FileTerminal", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m8 16 2-2-2-2",
            key: "10vzyd"
        }
    ],
    [
        "path",
        {
            d: "M12 18h4",
            key: "1wd2n7"
        }
    ]
]);
const FileText = createReactComponent("FileText", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "13",
            x2: "8",
            y2: "13",
            key: "7g4hpw"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "17",
            x2: "8",
            y2: "17",
            key: "1nzzn0"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "9",
            x2: "8",
            y2: "9",
            key: "13jkcr"
        }
    ]
]);
const FileType2 = createReactComponent("FileType2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M2 13v-1h6v1",
            key: "1dh9dg"
        }
    ],
    [
        "path",
        {
            d: "M4 18h2",
            key: "1xrofg"
        }
    ],
    [
        "path",
        {
            d: "M5 12v6",
            key: "150t9c"
        }
    ]
]);
const FileType = createReactComponent("FileType", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M9 13v-1h6v1",
            key: "1bb014"
        }
    ],
    [
        "path",
        {
            d: "M11 18h2",
            key: "12mj7e"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ]
]);
const FileUp = createReactComponent("FileUp", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ],
    [
        "path",
        {
            d: "m15 15-3-3-3 3",
            key: "15xj92"
        }
    ]
]);
const FileVideo2 = createReactComponent("FileVideo2", [
    [
        "path",
        {
            d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
            key: "1nti49"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m10 15.5 4 2.5v-6l-4 2.5",
            key: "t7cp39"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "12",
            width: "8",
            height: "6",
            rx: "1",
            key: "1fgd6b"
        }
    ]
]);
const FileVideo = createReactComponent("FileVideo", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m10 11 5 3-5 3v-6Z",
            key: "7ntvm4"
        }
    ]
]);
const FileVolume2 = createReactComponent("FileVolume2", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5",
            key: "joawwx"
        }
    ],
    [
        "path",
        {
            d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3",
            key: "1f2wyw"
        }
    ],
    [
        "path",
        {
            d: "M8 15h.01",
            key: "a7atzg"
        }
    ]
]);
const FileVolume = createReactComponent("FileVolume", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",
            key: "am10z3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m7 10-3 2H2v4h2l3 2v-8Z",
            key: "tazg57"
        }
    ],
    [
        "path",
        {
            d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3",
            key: "1yej3m"
        }
    ]
]);
const FileWarning = createReactComponent("FileWarning", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
const FileX2 = createReactComponent("FileX2", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",
            key: "702lig"
        }
    ],
    [
        "path",
        {
            d: "M14 2v6h6",
            key: "1kof46"
        }
    ],
    [
        "path",
        {
            d: "m3 12.5 5 5",
            key: "1qls4r"
        }
    ],
    [
        "path",
        {
            d: "m8 12.5-5 5",
            key: "b853mi"
        }
    ]
]);
const FileX = createReactComponent("FileX", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "line",
        {
            x1: "9.5",
            y1: "12.5",
            x2: "14.5",
            y2: "17.5",
            key: "bu76mq"
        }
    ],
    [
        "line",
        {
            x1: "14.5",
            y1: "12.5",
            x2: "9.5",
            y2: "17.5",
            key: "nmydn6"
        }
    ]
]);
const File = createReactComponent("File", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ]
]);
const Files = createReactComponent("Files", [
    [
        "path",
        {
            d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
            key: "cennsq"
        }
    ],
    [
        "path",
        {
            d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8",
            key: "ms809a"
        }
    ],
    [
        "path",
        {
            d: "M15 2v5h5",
            key: "qq6kwv"
        }
    ]
]);
const Film = createReactComponent("Film", [
    [
        "rect",
        {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "2.18",
            ry: "2.18",
            key: "15u6kw"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "2",
            x2: "7",
            y2: "22",
            key: "io8xnd"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "2",
            x2: "17",
            y2: "22",
            key: "1ewgih"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "7",
            x2: "7",
            y2: "7",
            key: "15jszs"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "17",
            x2: "7",
            y2: "17",
            key: "qjw6jy"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "17",
            x2: "22",
            y2: "17",
            key: "132yhf"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "7",
            x2: "22",
            y2: "7",
            key: "bl3oy5"
        }
    ]
]);
const Filter = createReactComponent("Filter", [
    [
        "polygon",
        {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }
    ]
]);
const Fingerprint = createReactComponent("Fingerprint", [
    [
        "path",
        {
            d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
            key: "1jc9o5"
        }
    ],
    [
        "path",
        {
            d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",
            key: "1mxgy1"
        }
    ],
    [
        "path",
        {
            d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
            key: "ptglia"
        }
    ],
    [
        "path",
        {
            d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
            key: "1nerag"
        }
    ],
    [
        "path",
        {
            d: "M8.65 22c.21-.66.45-1.32.57-2",
            key: "13wd9y"
        }
    ],
    [
        "path",
        {
            d: "M14 13.12c0 2.38 0 6.38-1 8.88",
            key: "o46ks0"
        }
    ],
    [
        "path",
        {
            d: "M2 16h.01",
            key: "1gqxmh"
        }
    ],
    [
        "path",
        {
            d: "M21.8 16c.2-2 .131-5.354 0-6",
            key: "drycrb"
        }
    ],
    [
        "path",
        {
            d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",
            key: "1fgabc"
        }
    ]
]);
const FlagOff = createReactComponent("FlagOff", [
    [
        "path",
        {
            d: "M8 2c3 0 5 2 8 2s4-1 4-1v11",
            key: "9rwyz9"
        }
    ],
    [
        "path",
        {
            d: "M4 22V4",
            key: "1plyxx"
        }
    ],
    [
        "path",
        {
            d: "M4 15s1-1 4-1 5 2 8 2",
            key: "1myooe"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const FlagTriangleLeft = createReactComponent("FlagTriangleLeft", [
    [
        "path",
        {
            d: "M17 22V2L7 7l10 5",
            key: "1rmf0r"
        }
    ]
]);
const FlagTriangleRight = createReactComponent("FlagTriangleRight", [
    [
        "path",
        {
            d: "M7 22V2l10 5-10 5",
            key: "17n18y"
        }
    ]
]);
const Flag = createReactComponent("Flag", [
    [
        "path",
        {
            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
            key: "i9b6wo"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "22",
            x2: "4",
            y2: "15",
            key: "1k23bw"
        }
    ]
]);
const Flame = createReactComponent("Flame", [
    [
        "path",
        {
            d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
            key: "96xj49"
        }
    ]
]);
const FlashlightOff = createReactComponent("FlashlightOff", [
    [
        "path",
        {
            d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",
            key: "1r120k"
        }
    ],
    [
        "path",
        {
            d: "M7 2h11v4c0 2-2 2-2 4v1",
            key: "dz1920"
        }
    ],
    [
        "line",
        {
            x1: "11",
            y1: "6",
            x2: "18",
            y2: "6",
            key: "q6oc82"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Flashlight = createReactComponent("Flashlight", [
    [
        "path",
        {
            d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
            key: "1orkel"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "6",
            key: "tmfr4k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "12",
            x2: "12",
            y2: "12",
            key: "jyrcx7"
        }
    ]
]);
const FlaskConicalOff = createReactComponent("FlaskConicalOff", [
    [
        "path",
        {
            d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",
            key: "59ek9y"
        }
    ],
    [
        "path",
        {
            d: "M10 2v2.343",
            key: "15t272"
        }
    ],
    [
        "path",
        {
            d: "M14 2v6.343",
            key: "sxr80q"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ],
    [
        "path",
        {
            d: "M7 16h9",
            key: "t5njau"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const FlaskConical = createReactComponent("FlaskConical", [
    [
        "path",
        {
            d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
            key: "pzvekw"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ],
    [
        "path",
        {
            d: "M7 16h10",
            key: "wp8him"
        }
    ]
]);
const FlaskRound = createReactComponent("FlaskRound", [
    [
        "path",
        {
            d: "M10 2v7.31",
            key: "5d1hyh"
        }
    ],
    [
        "path",
        {
            d: "M14 9.3V1.99",
            key: "14k4l0"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ],
    [
        "path",
        {
            d: "M14 9.3a6.5 6.5 0 1 1-4 0",
            key: "1r8fvy"
        }
    ],
    [
        "path",
        {
            d: "M5.58 16.5h12.85",
            key: "78w9cl"
        }
    ]
]);
const FlipHorizontal2 = createReactComponent("FlipHorizontal2", [
    [
        "path",
        {
            d: "m3 7 5 5-5 5V7",
            key: "couhi7"
        }
    ],
    [
        "path",
        {
            d: "m21 7-5 5 5 5V7",
            key: "6ouia7"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "M12 14v2",
            key: "8jcxud"
        }
    ],
    [
        "path",
        {
            d: "M12 8v2",
            key: "1woqiv"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ]
]);
const FlipHorizontal = createReactComponent("FlipHorizontal", [
    [
        "path",
        {
            d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",
            key: "1i73f7"
        }
    ],
    [
        "path",
        {
            d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",
            key: "saxlbk"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "M12 14v2",
            key: "8jcxud"
        }
    ],
    [
        "path",
        {
            d: "M12 8v2",
            key: "1woqiv"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ]
]);
const FlipVertical2 = createReactComponent("FlipVertical2", [
    [
        "path",
        {
            d: "m17 3-5 5-5-5h10",
            key: "1ftt6x"
        }
    ],
    [
        "path",
        {
            d: "m17 21-5-5-5 5h10",
            key: "1m0wmu"
        }
    ],
    [
        "path",
        {
            d: "M4 12H2",
            key: "rhcxmi"
        }
    ],
    [
        "path",
        {
            d: "M10 12H8",
            key: "s88cx1"
        }
    ],
    [
        "path",
        {
            d: "M16 12h-2",
            key: "10asgb"
        }
    ],
    [
        "path",
        {
            d: "M22 12h-2",
            key: "14jgyd"
        }
    ]
]);
const FlipVertical = createReactComponent("FlipVertical", [
    [
        "path",
        {
            d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",
            key: "14bfxa"
        }
    ],
    [
        "path",
        {
            d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",
            key: "14rx03"
        }
    ],
    [
        "path",
        {
            d: "M4 12H2",
            key: "rhcxmi"
        }
    ],
    [
        "path",
        {
            d: "M10 12H8",
            key: "s88cx1"
        }
    ],
    [
        "path",
        {
            d: "M16 12h-2",
            key: "10asgb"
        }
    ],
    [
        "path",
        {
            d: "M22 12h-2",
            key: "14jgyd"
        }
    ]
]);
const Flower2 = createReactComponent("Flower2", [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
            key: "3pnvol"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "2",
            key: "1822b1"
        }
    ],
    [
        "path",
        {
            d: "M12 10v12",
            key: "6ubwww"
        }
    ],
    [
        "path",
        {
            d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
            key: "9hd38g"
        }
    ],
    [
        "path",
        {
            d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
            key: "ufn41s"
        }
    ]
]);
const Flower = createReactComponent("Flower", [
    [
        "path",
        {
            d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",
            key: "51z86h"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "m8 16 1.5-1.5",
            key: "ce6zph"
        }
    ],
    [
        "path",
        {
            d: "M14.5 9.5 16 8",
            key: "1kzrzb"
        }
    ],
    [
        "path",
        {
            d: "m8 8 1.5 1.5",
            key: "1yv88w"
        }
    ],
    [
        "path",
        {
            d: "M14.5 14.5 16 16",
            key: "12xhjh"
        }
    ]
]);
const Focus = createReactComponent("Focus", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ]
]);
const FolderArchive = createReactComponent("FolderArchive", [
    [
        "path",
        {
            d: "M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6",
            key: "1l0vpk"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "19",
            r: "2",
            key: "1uwppb"
        }
    ],
    [
        "path",
        {
            d: "M16 11v-1",
            key: "eoyjtm"
        }
    ],
    [
        "path",
        {
            d: "M16 17v-2",
            key: "1xp69b"
        }
    ]
]);
const FolderCheck = createReactComponent("FolderCheck", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "m9 13 2 2 4-4",
            key: "6343dt"
        }
    ]
]);
const FolderClock = createReactComponent("FolderClock", [
    [
        "path",
        {
            d: "M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2",
            key: "1p0xo9"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "16",
            r: "6",
            key: "qoo3c4"
        }
    ],
    [
        "path",
        {
            d: "M16 14v2l1 1",
            key: "xth2jh"
        }
    ]
]);
const FolderClosed = createReactComponent("FolderClosed", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "M2 10h20",
            key: "1ir3d8"
        }
    ]
]);
const FolderCog2 = createReactComponent("FolderCog2", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "2",
            key: "1c1ljs"
        }
    ],
    [
        "path",
        {
            d: "M12 10v1",
            key: "ngorzm"
        }
    ],
    [
        "path",
        {
            d: "M12 15v1",
            key: "1ovrzm"
        }
    ],
    [
        "path",
        {
            d: "m14.6 11.5-.87.5",
            key: "zm6w6e"
        }
    ],
    [
        "path",
        {
            d: "m10.27 14-.87.5",
            key: "idea33"
        }
    ],
    [
        "path",
        {
            d: "m14.6 14.5-.87-.5",
            key: "1ii18h"
        }
    ],
    [
        "path",
        {
            d: "m10.27 12-.87-.5",
            key: "tf2vd0"
        }
    ]
]);
const FolderCog = createReactComponent("FolderCog", [
    [
        "path",
        {
            d: "M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3",
            key: "1g1zaq"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "path",
        {
            d: "M18 14v1",
            key: "1sx9hk"
        }
    ],
    [
        "path",
        {
            d: "M18 21v1",
            key: "pviwm2"
        }
    ],
    [
        "path",
        {
            d: "M22 18h-1",
            key: "phgwqy"
        }
    ],
    [
        "path",
        {
            d: "M15 18h-1",
            key: "1v9fvv"
        }
    ],
    [
        "path",
        {
            d: "m21 15-.88.88",
            key: "13nfy4"
        }
    ],
    [
        "path",
        {
            d: "M15.88 20.12 15 21",
            key: "qplfkl"
        }
    ],
    [
        "path",
        {
            d: "m21 21-.88-.88",
            key: "1ryrr1"
        }
    ],
    [
        "path",
        {
            d: "M15.88 15.88 15 15",
            key: "4terp3"
        }
    ]
]);
const FolderDown = createReactComponent("FolderDown", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "m15 13-3 3-3-3",
            key: "6j2sf0"
        }
    ]
]);
const FolderEdit = createReactComponent("FolderEdit", [
    [
        "path",
        {
            d: "M8.42 10.61a2.1 2.1 0 1 1 2.97 2.97L5.95 19 2 20l.99-3.95 5.43-5.44Z",
            key: "o1ah0z"
        }
    ],
    [
        "path",
        {
            d: "M2 11.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
            key: "bim890"
        }
    ]
]);
const FolderHeart = createReactComponent("FolderHeart", [
    [
        "path",
        {
            d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5",
            key: "zoglpu"
        }
    ],
    [
        "path",
        {
            d: "M21.29 13.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 21l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
            key: "2tfff6"
        }
    ]
]);
const FolderInput = createReactComponent("FolderInput", [
    [
        "path",
        {
            d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
            key: "1gu97c"
        }
    ],
    [
        "path",
        {
            d: "M2 13h10",
            key: "pgb2dq"
        }
    ],
    [
        "path",
        {
            d: "m9 16 3-3-3-3",
            key: "6m91ic"
        }
    ]
]);
const FolderKey = createReactComponent("FolderKey", [
    [
        "path",
        {
            d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2",
            key: "203odn"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "20",
            r: "2",
            key: "1vifvg"
        }
    ],
    [
        "path",
        {
            d: "m22 14-4.5 4.5",
            key: "1ef6z8"
        }
    ],
    [
        "path",
        {
            d: "m21 15 1 1",
            key: "1ejcpy"
        }
    ]
]);
const FolderLock = createReactComponent("FolderLock", [
    [
        "path",
        {
            d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5",
            key: "1ivsx8"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "17",
            width: "8",
            height: "5",
            rx: "1",
            key: "15pjcy"
        }
    ],
    [
        "path",
        {
            d: "M20 17v-2a2 2 0 1 0-4 0v2",
            key: "pwaxnr"
        }
    ]
]);
const FolderMinus = createReactComponent("FolderMinus", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "13",
            x2: "15",
            y2: "13",
            key: "1nzi25"
        }
    ]
]);
const FolderOpen = createReactComponent("FolderOpen", [
    [
        "path",
        {
            d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
            key: "1nmvlm"
        }
    ]
]);
const FolderOutput = createReactComponent("FolderOutput", [
    [
        "path",
        {
            d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
            key: "jm8npq"
        }
    ],
    [
        "path",
        {
            d: "M2 13h10",
            key: "pgb2dq"
        }
    ],
    [
        "path",
        {
            d: "m5 10-3 3 3 3",
            key: "1r8ie0"
        }
    ]
]);
const FolderPlus = createReactComponent("FolderPlus", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "10",
            x2: "12",
            y2: "16",
            key: "1fgwrs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "13",
            x2: "15",
            y2: "13",
            key: "1nzi25"
        }
    ]
]);
const FolderSearch2 = createReactComponent("FolderSearch2", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "circle",
        {
            cx: "11.5",
            cy: "12.5",
            r: "2.5",
            key: "1ea5ju"
        }
    ],
    [
        "path",
        {
            d: "M13.27 14.27 15 16",
            key: "5hsvtf"
        }
    ]
]);
const FolderSearch = createReactComponent("FolderSearch", [
    [
        "path",
        {
            d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v4",
            key: "1moo03"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "3",
            key: "18b49y"
        }
    ],
    [
        "path",
        {
            d: "m21 21-1.5-1.5",
            key: "3sg1j"
        }
    ]
]);
const FolderSymlink = createReactComponent("FolderSymlink", [
    [
        "path",
        {
            d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
            key: "1or2t8"
        }
    ],
    [
        "path",
        {
            d: "m8 16 3-3-3-3",
            key: "rlqrt1"
        }
    ],
    [
        "path",
        {
            d: "M2 16v-1a2 2 0 0 1 2-2h6",
            key: "pgw8ln"
        }
    ]
]);
const FolderTree = createReactComponent("FolderTree", [
    [
        "path",
        {
            d: "M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
            key: "10jzg2"
        }
    ],
    [
        "path",
        {
            d: "M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
            key: "1b9nqm"
        }
    ],
    [
        "path",
        {
            d: "M3 3v2c0 1.1.9 2 2 2h3",
            key: "1wqwis"
        }
    ],
    [
        "path",
        {
            d: "M3 3v13c0 1.1.9 2 2 2h3",
            key: "1bqeom"
        }
    ]
]);
const FolderUp = createReactComponent("FolderUp", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "m9 13 3-3 3 3",
            key: "1pxg3c"
        }
    ]
]);
const FolderX = createReactComponent("FolderX", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ],
    [
        "path",
        {
            d: "m9.5 10.5 5 5",
            key: "ra9qjz"
        }
    ],
    [
        "path",
        {
            d: "m14.5 10.5-5 5",
            key: "l2rkpq"
        }
    ]
]);
const Folder = createReactComponent("Folder", [
    [
        "path",
        {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }
    ]
]);
const Folders = createReactComponent("Folders", [
    [
        "path",
        {
            d: "M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z",
            key: "1aska4"
        }
    ],
    [
        "path",
        {
            d: "M2 8v11c0 1.1.9 2 2 2h14",
            key: "n13cji"
        }
    ]
]);
const FormInput = createReactComponent("FormInput", [
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ],
    [
        "path",
        {
            d: "M17 12h.01",
            key: "1m0b6t"
        }
    ],
    [
        "path",
        {
            d: "M7 12h.01",
            key: "eqddd0"
        }
    ]
]);
const Forward = createReactComponent("Forward", [
    [
        "polyline",
        {
            points: "15 17 20 12 15 7",
            key: "1w3sku"
        }
    ],
    [
        "path",
        {
            d: "M4 18v-2a4 4 0 0 1 4-4h12",
            key: "jmiej9"
        }
    ]
]);
const Frame = createReactComponent("Frame", [
    [
        "line",
        {
            x1: "22",
            y1: "6",
            x2: "2",
            y2: "6",
            key: "181agm"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "18",
            x2: "2",
            y2: "18",
            key: "12x4ne"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "2",
            x2: "6",
            y2: "22",
            key: "gjs6u1"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "2",
            x2: "18",
            y2: "22",
            key: "1hbgm0"
        }
    ]
]);
const Framer = createReactComponent("Framer", [
    [
        "path",
        {
            d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",
            key: "1a2nng"
        }
    ]
]);
const Frown = createReactComponent("Frown", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M16 16s-1.5-2-4-2-4 2-4 2",
            key: "epbg0q"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
const Fuel = createReactComponent("Fuel", [
    [
        "line",
        {
            x1: "3",
            y1: "22",
            x2: "15",
            y2: "22",
            key: "fc344c"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "9",
            x2: "14",
            y2: "9",
            key: "htzs8q"
        }
    ],
    [
        "path",
        {
            d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",
            key: "16j0yd"
        }
    ],
    [
        "path",
        {
            d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
            key: "8ur5zv"
        }
    ]
]);
const FunctionSquare = createReactComponent("FunctionSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",
            key: "m1af9g"
        }
    ],
    [
        "path",
        {
            d: "M9 11.2h5.7",
            key: "3zgcl2"
        }
    ]
]);
const Gamepad2 = createReactComponent("Gamepad2", [
    [
        "line",
        {
            x1: "6",
            y1: "11",
            x2: "10",
            y2: "11",
            key: "19tls9"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "9",
            x2: "8",
            y2: "13",
            key: "6w9cvk"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "15.01",
            y2: "12",
            key: "abmwhw"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "10",
            x2: "18.01",
            y2: "10",
            key: "19ehlv"
        }
    ],
    [
        "path",
        {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
            key: "mfqc10"
        }
    ]
]);
const Gamepad = createReactComponent("Gamepad", [
    [
        "line",
        {
            x1: "6",
            y1: "12",
            x2: "10",
            y2: "12",
            key: "xg250c"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "10",
            x2: "8",
            y2: "14",
            key: "1cn0zn"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "13",
            x2: "15.01",
            y2: "13",
            key: "1pybt0"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "11",
            x2: "18.01",
            y2: "11",
            key: "147dzq"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ]
]);
const Gauge = createReactComponent("Gauge", [
    [
        "path",
        {
            d: "m12 15 3.5-3.5",
            key: "1sfa3b"
        }
    ],
    [
        "path",
        {
            d: "M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4",
            key: "rcs43o"
        }
    ]
]);
const Gavel = createReactComponent("Gavel", [
    [
        "path",
        {
            d: "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10",
            key: "c9cbz0"
        }
    ],
    [
        "path",
        {
            d: "m16 16 6-6",
            key: "vzrcl6"
        }
    ],
    [
        "path",
        {
            d: "m8 8 6-6",
            key: "18bi4p"
        }
    ],
    [
        "path",
        {
            d: "m9 7 8 8",
            key: "5jnvq1"
        }
    ],
    [
        "path",
        {
            d: "m21 11-8-8",
            key: "z4y7zo"
        }
    ]
]);
const Gem = createReactComponent("Gem", [
    [
        "polygon",
        {
            points: "6 3 18 3 22 9 12 22 2 9",
            key: "1kbvml"
        }
    ],
    [
        "path",
        {
            d: "m12 22 4-13-3-6",
            key: "19hoeh"
        }
    ],
    [
        "path",
        {
            d: "M12 22 8 9l3-6",
            key: "1klo0r"
        }
    ],
    [
        "path",
        {
            d: "M2 9h20",
            key: "16fsjt"
        }
    ]
]);
const Ghost = createReactComponent("Ghost", [
    [
        "path",
        {
            d: "M9 10h.01",
            key: "qbtxuw"
        }
    ],
    [
        "path",
        {
            d: "M15 10h.01",
            key: "1qmjsl"
        }
    ],
    [
        "path",
        {
            d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
            key: "uwwb07"
        }
    ]
]);
const Gift = createReactComponent("Gift", [
    [
        "polyline",
        {
            points: "20 12 20 22 4 22 4 12",
            key: "nda8fc"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "20",
            height: "5",
            key: "1k9o8g"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "7",
            key: "1tigeq"
        }
    ],
    [
        "path",
        {
            d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",
            key: "zighg4"
        }
    ],
    [
        "path",
        {
            d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
            key: "1pa5tk"
        }
    ]
]);
const GitBranchPlus = createReactComponent("GitBranchPlus", [
    [
        "path",
        {
            d: "M6 3v12",
            key: "qpgusn"
        }
    ],
    [
        "path",
        {
            d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            key: "1d02ji"
        }
    ],
    [
        "path",
        {
            d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            key: "chk6ph"
        }
    ],
    [
        "path",
        {
            d: "M15 6a9 9 0 0 0-9 9",
            key: "or332x"
        }
    ],
    [
        "path",
        {
            d: "M18 15v6",
            key: "9wciyi"
        }
    ],
    [
        "path",
        {
            d: "M21 18h-6",
            key: "139f0c"
        }
    ]
]);
const GitBranch = createReactComponent("GitBranch", [
    [
        "line",
        {
            x1: "6",
            y1: "3",
            x2: "6",
            y2: "15",
            key: "1o40i7"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "6",
            r: "3",
            key: "1h7g24"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "path",
        {
            d: "M18 9a9 9 0 0 1-9 9",
            key: "n2h4wq"
        }
    ]
]);
const GitCommit = createReactComponent("GitCommit", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "9",
            y2: "12",
            key: "1vg2s9"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "fnrdho"
        }
    ]
]);
const GitCompare = createReactComponent("GitCompare", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M13 6h3a2 2 0 0 1 2 2v7",
            key: "1yeb86"
        }
    ],
    [
        "path",
        {
            d: "M11 18H8a2 2 0 0 1-2-2V9",
            key: "19pyzm"
        }
    ]
]);
const GitFork = createReactComponent("GitFork", [
    [
        "circle",
        {
            cx: "12",
            cy: "18",
            r: "3",
            key: "1mpf1b"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "6",
            r: "3",
            key: "1h7g24"
        }
    ],
    [
        "path",
        {
            d: "M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9",
            key: "c89w8i"
        }
    ],
    [
        "path",
        {
            d: "M12 12v3",
            key: "158kv8"
        }
    ]
]);
const GitMerge = createReactComponent("GitMerge", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M6 21V9a9 9 0 0 0 9 9",
            key: "7kw0sc"
        }
    ]
]);
const GitPullRequestClosed = createReactComponent("GitPullRequestClosed", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M18 11.5V15",
            key: "65xf6f"
        }
    ],
    [
        "path",
        {
            d: "m21 3-6 6",
            key: "16nqsk"
        }
    ],
    [
        "path",
        {
            d: "m21 9-6-6",
            key: "9j17rh"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "9",
            x2: "6",
            y2: "21",
            key: "79th4h"
        }
    ]
]);
const GitPullRequestDraft = createReactComponent("GitPullRequestDraft", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M18 6V5",
            key: "1oao2s"
        }
    ],
    [
        "path",
        {
            d: "M18 11v-1",
            key: "11c8tz"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "9",
            x2: "6",
            y2: "21",
            key: "79th4h"
        }
    ]
]);
const GitPullRequest = createReactComponent("GitPullRequest", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M13 6h3a2 2 0 0 1 2 2v7",
            key: "1yeb86"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "9",
            x2: "6",
            y2: "21",
            key: "79th4h"
        }
    ]
]);
const Github = createReactComponent("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
]);
const Gitlab = createReactComponent("Gitlab", [
    [
        "path",
        {
            d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
            key: "148pdi"
        }
    ]
]);
const GlassWater = createReactComponent("GlassWater", [
    [
        "path",
        {
            d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",
            key: "48rfw3"
        }
    ],
    [
        "path",
        {
            d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",
            key: "mjntcy"
        }
    ]
]);
const Glasses = createReactComponent("Glasses", [
    [
        "circle",
        {
            cx: "6",
            cy: "15",
            r: "4",
            key: "vux9w4"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "15",
            r: "4",
            key: "18o8ve"
        }
    ],
    [
        "path",
        {
            d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",
            key: "1ag4bs"
        }
    ],
    [
        "path",
        {
            d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2",
            key: "1hm1gs"
        }
    ],
    [
        "path",
        {
            d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2",
            key: "1r31ai"
        }
    ]
]);
const Globe2 = createReactComponent("Globe2", [
    [
        "path",
        {
            d: "M15 21v-4a2 2 0 0 1 2-2h4",
            key: "29t6hq"
        }
    ],
    [
        "path",
        {
            d: "M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3",
            key: "1q8o6e"
        }
    ],
    [
        "path",
        {
            d: "M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4",
            key: "10po7j"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
const Globe = createReactComponent("Globe", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "path",
        {
            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
            key: "nb9nel"
        }
    ]
]);
const Grab = createReactComponent("Grab", [
    [
        "path",
        {
            d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",
            key: "n5nng"
        }
    ],
    [
        "path",
        {
            d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",
            key: "185i9d"
        }
    ],
    [
        "path",
        {
            d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",
            key: "11pz95"
        }
    ],
    [
        "path",
        {
            d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",
            key: "16yk7l"
        }
    ],
    [
        "path",
        {
            d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",
            key: "nzvb1c"
        }
    ]
]);
const GraduationCap = createReactComponent("GraduationCap", [
    [
        "path",
        {
            d: "M22 10v6M2 10l10-5 10 5-10 5z",
            key: "1ef52a"
        }
    ],
    [
        "path",
        {
            d: "M6 12v5c3 3 9 3 12 0v-5",
            key: "1f75yj"
        }
    ]
]);
const Grape = createReactComponent("Grape", [
    [
        "path",
        {
            d: "M22 5V2l-5.89 5.89",
            key: "1eenpo"
        }
    ],
    [
        "circle",
        {
            cx: "16.6",
            cy: "15.89",
            r: "3",
            key: "xjtalx"
        }
    ],
    [
        "circle",
        {
            cx: "8.11",
            cy: "7.4",
            r: "3",
            key: "u2fv6i"
        }
    ],
    [
        "circle",
        {
            cx: "12.35",
            cy: "11.65",
            r: "3",
            key: "i6i8g7"
        }
    ],
    [
        "circle",
        {
            cx: "13.91",
            cy: "5.85",
            r: "3",
            key: "6ye0dv"
        }
    ],
    [
        "circle",
        {
            cx: "18.15",
            cy: "10.09",
            r: "3",
            key: "snx9no"
        }
    ],
    [
        "circle",
        {
            cx: "6.56",
            cy: "13.2",
            r: "3",
            key: "17x4xg"
        }
    ],
    [
        "circle",
        {
            cx: "10.8",
            cy: "17.44",
            r: "3",
            key: "1hogw9"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "19",
            r: "3",
            key: "1sn6vo"
        }
    ]
]);
const Grid = createReactComponent("Grid", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "1xojw2"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "3",
            x2: "9",
            y2: "21",
            key: "nvcl17"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "3",
            x2: "15",
            y2: "21",
            key: "jcv93v"
        }
    ]
]);
const GripHorizontal = createReactComponent("GripHorizontal", [
    [
        "circle",
        {
            cx: "12",
            cy: "9",
            r: "1",
            key: "124mty"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "9",
            r: "1",
            key: "1ruzo2"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "9",
            r: "1",
            key: "1a8b28"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "15",
            r: "1",
            key: "1e56xg"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "15",
            r: "1",
            key: "1a92ep"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "15",
            r: "1",
            key: "5r1jwy"
        }
    ]
]);
const GripVertical = createReactComponent("GripVertical", [
    [
        "circle",
        {
            cx: "9",
            cy: "12",
            r: "1",
            key: "1vctgf"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "5",
            r: "1",
            key: "hp0tcf"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "19",
            r: "1",
            key: "fkjjf6"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "12",
            r: "1",
            key: "1tmaij"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "5",
            r: "1",
            key: "19l28e"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "19",
            r: "1",
            key: "f4zoj3"
        }
    ]
]);
const Hammer = createReactComponent("Hammer", [
    [
        "path",
        {
            d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",
            key: "1afvon"
        }
    ],
    [
        "path",
        {
            d: "M17.64 15 22 10.64",
            key: "zsji6s"
        }
    ],
    [
        "path",
        {
            d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",
            key: "lehyy1"
        }
    ]
]);
const HandMetal = createReactComponent("HandMetal", [
    [
        "path",
        {
            d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",
            key: "7eki13"
        }
    ],
    [
        "path",
        {
            d: "M14 11V9a2 2 0 1 0-4 0v2",
            key: "94qvcw"
        }
    ],
    [
        "path",
        {
            d: "M10 10.5V5a2 2 0 1 0-4 0v9",
            key: "m1ah89"
        }
    ],
    [
        "path",
        {
            d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
            key: "t1skq1"
        }
    ]
]);
const Hand = createReactComponent("Hand", [
    [
        "path",
        {
            d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",
            key: "aigmz7"
        }
    ],
    [
        "path",
        {
            d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",
            key: "1n6bmn"
        }
    ],
    [
        "path",
        {
            d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",
            key: "a9iiix"
        }
    ],
    [
        "path",
        {
            d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
            key: "1s1gnw"
        }
    ]
]);
const HardDrive = createReactComponent("HardDrive", [
    [
        "line",
        {
            x1: "22",
            y1: "12",
            x2: "2",
            y2: "12",
            key: "3mrjqx"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "16",
            x2: "6.01",
            y2: "16",
            key: "17k2t0"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "16",
            x2: "10.01",
            y2: "16",
            key: "1oplzg"
        }
    ]
]);
const HardHat = createReactComponent("HardHat", [
    [
        "path",
        {
            d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
            key: "1dej2m"
        }
    ],
    [
        "path",
        {
            d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
            key: "1p9q5i"
        }
    ],
    [
        "path",
        {
            d: "M4 15v-3a6 6 0 0 1 6-6h0",
            key: "1uc279"
        }
    ],
    [
        "path",
        {
            d: "M14 6h0a6 6 0 0 1 6 6v3",
            key: "1j9mnm"
        }
    ]
]);
const Hash = createReactComponent("Hash", [
    [
        "line",
        {
            x1: "4",
            y1: "9",
            x2: "20",
            y2: "9",
            key: "vg9vz1"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "15",
            x2: "20",
            y2: "15",
            key: "12vs86"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "3",
            x2: "8",
            y2: "21",
            key: "18wc2u"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "3",
            x2: "14",
            y2: "21",
            key: "ohqwl5"
        }
    ]
]);
const Haze = createReactComponent("Haze", [
    [
        "path",
        {
            d: "m5.2 6.2 1.4 1.4",
            key: "17imol"
        }
    ],
    [
        "path",
        {
            d: "M2 13h2",
            key: "13gyu8"
        }
    ],
    [
        "path",
        {
            d: "M20 13h2",
            key: "16rner"
        }
    ],
    [
        "path",
        {
            d: "m17.4 7.6 1.4-1.4",
            key: "t4xlah"
        }
    ],
    [
        "path",
        {
            d: "M22 17H2",
            key: "1gtaj3"
        }
    ],
    [
        "path",
        {
            d: "M22 21H2",
            key: "1gy6en"
        }
    ],
    [
        "path",
        {
            d: "M16 13a4 4 0 0 0-8 0",
            key: "1dyczq"
        }
    ],
    [
        "path",
        {
            d: "M12 5V2.5",
            key: "1vytko"
        }
    ]
]);
const Heading1 = createReactComponent("Heading1", [
    [
        "path",
        {
            d: "M4 12h8",
            key: "17cfdx"
        }
    ],
    [
        "path",
        {
            d: "M4 18V6",
            key: "1rz3zl"
        }
    ],
    [
        "path",
        {
            d: "M12 18V6",
            key: "zqpxq5"
        }
    ],
    [
        "path",
        {
            d: "m17 12 3-2v8",
            key: "1hhhft"
        }
    ]
]);
const Heading2 = createReactComponent("Heading2", [
    [
        "path",
        {
            d: "M4 12h8",
            key: "17cfdx"
        }
    ],
    [
        "path",
        {
            d: "M4 18V6",
            key: "1rz3zl"
        }
    ],
    [
        "path",
        {
            d: "M12 18V6",
            key: "zqpxq5"
        }
    ],
    [
        "path",
        {
            d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",
            key: "9jr5yi"
        }
    ]
]);
const Heading3 = createReactComponent("Heading3", [
    [
        "path",
        {
            d: "M4 12h8",
            key: "17cfdx"
        }
    ],
    [
        "path",
        {
            d: "M4 18V6",
            key: "1rz3zl"
        }
    ],
    [
        "path",
        {
            d: "M12 18V6",
            key: "zqpxq5"
        }
    ],
    [
        "path",
        {
            d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",
            key: "68ncm8"
        }
    ],
    [
        "path",
        {
            d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",
            key: "1ejuhz"
        }
    ]
]);
const Heading4 = createReactComponent("Heading4", [
    [
        "path",
        {
            d: "M4 12h8",
            key: "17cfdx"
        }
    ],
    [
        "path",
        {
            d: "M4 18V6",
            key: "1rz3zl"
        }
    ],
    [
        "path",
        {
            d: "M12 18V6",
            key: "zqpxq5"
        }
    ],
    [
        "path",
        {
            d: "M17 10v4h4",
            key: "13sv97"
        }
    ],
    [
        "path",
        {
            d: "M21 10v8",
            key: "1kdml4"
        }
    ]
]);
const Heading5 = createReactComponent("Heading5", [
    [
        "path",
        {
            d: "M4 12h8",
            key: "17cfdx"
        }
    ],
    [
        "path",
        {
            d: "M4 18V6",
            key: "1rz3zl"
        }
    ],
    [
        "path",
        {
            d: "M12 18V6",
            key: "zqpxq5"
        }
    ],
    [
        "path",
        {
            d: "M17 13v-3h4",
            key: "1nvgqp"
        }
    ],
    [
        "path",
        {
            d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",
            key: "2nebdn"
        }
    ]
]);
const Heading6 = createReactComponent("Heading6", [
    [
        "path",
        {
            d: "M4 12h8",
            key: "17cfdx"
        }
    ],
    [
        "path",
        {
            d: "M4 18V6",
            key: "1rz3zl"
        }
    ],
    [
        "path",
        {
            d: "M12 18V6",
            key: "zqpxq5"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "16",
            r: "2",
            key: "15mx69"
        }
    ],
    [
        "path",
        {
            d: "M20 10c-2 2-3 3.5-3 6",
            key: "f35dl0"
        }
    ]
]);
const Heading = createReactComponent("Heading", [
    [
        "path",
        {
            d: "M6 12h12",
            key: "8npq4p"
        }
    ],
    [
        "path",
        {
            d: "M6 20V4",
            key: "1w1bmo"
        }
    ],
    [
        "path",
        {
            d: "M18 20V4",
            key: "o2hl4u"
        }
    ]
]);
const Headphones = createReactComponent("Headphones", [
    [
        "path",
        {
            d: "M3 18v-6a9 9 0 0 1 18 0v6",
            key: "e2ovd"
        }
    ],
    [
        "path",
        {
            d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
            key: "110y4r"
        }
    ]
]);
const HeartCrack = createReactComponent("HeartCrack", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ],
    [
        "path",
        {
            d: "m12 13-1-1 2-2-3-2.5 2.77-2.92",
            key: "5oba2v"
        }
    ]
]);
const HeartHandshake = createReactComponent("HeartHandshake", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ],
    [
        "path",
        {
            d: "M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a3 3 0 0 1 4.22 0l2.4 2.4",
            key: "t2xyyg"
        }
    ],
    [
        "path",
        {
            d: "m18 15-2-2",
            key: "60u0ii"
        }
    ],
    [
        "path",
        {
            d: "m15 18-2-2",
            key: "6p76be"
        }
    ]
]);
const HeartOff = createReactComponent("HeartOff", [
    [
        "path",
        {
            d: "M4.12 4.107a5.4 5.4 0 0 0-.538.473C1.46 6.7 1.33 10.28 4 13l8 8 4.5-4.5",
            key: "yskeks"
        }
    ],
    [
        "path",
        {
            d: "M19.328 13.672 20 13c2.67-2.72 2.54-6.3.42-8.42a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-2.386-1.393",
            key: "1340qr"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const HeartPulse = createReactComponent("HeartPulse", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ],
    [
        "path",
        {
            d: "M3.5 12h6l.5-1 2 4.5 2-7 1.5 3.5h5",
            key: "rc0z4z"
        }
    ]
]);
const Heart = createReactComponent("Heart", [
    [
        "path",
        {
            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
            key: "3q7jk9"
        }
    ]
]);
const HelpCircle = createReactComponent("HelpCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
            key: "kdstpg"
        }
    ]
]);
const Hexagon = createReactComponent("Hexagon", [
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ]
]);
const Highlighter = createReactComponent("Highlighter", [
    [
        "path",
        {
            d: "m9 11-6 6v3h9l3-3",
            key: "1a3l36"
        }
    ],
    [
        "path",
        {
            d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",
            key: "14a9rk"
        }
    ]
]);
const History = createReactComponent("History", [
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ],
    [
        "path",
        {
            d: "M3.05 13A9 9 0 1 0 6 5.3L3 8",
            key: "1xoms2"
        }
    ],
    [
        "path",
        {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }
    ]
]);
const Home = createReactComponent("Home", [
    [
        "path",
        {
            d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "y5dka4"
        }
    ],
    [
        "polyline",
        {
            points: "9 22 9 12 15 12 15 22",
            key: "e2us08"
        }
    ]
]);
const HopOff = createReactComponent("HopOff", [
    [
        "path",
        {
            d: "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226",
            key: "10j95a"
        }
    ],
    [
        "path",
        {
            d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5",
            key: "1mqyjd"
        }
    ],
    [
        "path",
        {
            d: "M17.5 17.5c-2.5 0-4 0-6-1",
            key: "11elt5"
        }
    ],
    [
        "path",
        {
            d: "M20 11.5c1 1.5 2 3.5 2 4.5",
            key: "13ezvz"
        }
    ],
    [
        "path",
        {
            d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5",
            key: "1ufrz1"
        }
    ],
    [
        "path",
        {
            d: "M22 22c-2 0-3.5-.5-5.5-1.5",
            key: "1n8vbj"
        }
    ],
    [
        "path",
        {
            d: "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618",
            key: "1h85u8"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Hop = createReactComponent("Hop", [
    [
        "path",
        {
            d: "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1",
            key: "l0z2za"
        }
    ],
    [
        "path",
        {
            d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5",
            key: "1mqyjd"
        }
    ],
    [
        "path",
        {
            d: "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1",
            key: "10xoad"
        }
    ],
    [
        "path",
        {
            d: "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5",
            key: "1a4gpx"
        }
    ],
    [
        "path",
        {
            d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5",
            key: "1ufrz1"
        }
    ],
    [
        "path",
        {
            d: "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5",
            key: "1ok5d2"
        }
    ],
    [
        "path",
        {
            d: "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z",
            key: "8hlroy"
        }
    ],
    [
        "path",
        {
            d: "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1",
            key: "q3aj97"
        }
    ]
]);
const Hourglass = createReactComponent("Hourglass", [
    [
        "path",
        {
            d: "M5 22h14",
            key: "ehvnwv"
        }
    ],
    [
        "path",
        {
            d: "M5 2h14",
            key: "pdyrp9"
        }
    ],
    [
        "path",
        {
            d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
            key: "1d314k"
        }
    ],
    [
        "path",
        {
            d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
            key: "1vvvr6"
        }
    ]
]);
const IceCream = createReactComponent("IceCream", [
    [
        "path",
        {
            d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",
            key: "1v6356"
        }
    ],
    [
        "path",
        {
            d: "M17 7A5 5 0 0 0 7 7",
            key: "151p3v"
        }
    ],
    [
        "path",
        {
            d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",
            key: "1sdaij"
        }
    ]
]);
const ImageMinus = createReactComponent("ImageMinus", [
    [
        "path",
        {
            d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
            key: "m87ecr"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "5",
            x2: "22",
            y2: "5",
            key: "c5ve4s"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
]);
const ImageOff = createReactComponent("ImageOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
            key: "1bzlo9"
        }
    ],
    [
        "line",
        {
            x1: "13.5",
            y1: "13.5",
            x2: "6",
            y2: "21",
            key: "1oc4ns"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "12",
            x2: "21",
            y2: "15",
            key: "1j50dh"
        }
    ],
    [
        "path",
        {
            d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
            key: "mmje98"
        }
    ],
    [
        "path",
        {
            d: "M21 15V5a2 2 0 0 0-2-2H9",
            key: "43el77"
        }
    ]
]);
const ImagePlus = createReactComponent("ImagePlus", [
    [
        "path",
        {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
            key: "31hg93"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "5",
            x2: "22",
            y2: "5",
            key: "c5ve4s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "2",
            x2: "19",
            y2: "8",
            key: "12oc9j"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
]);
const Image = createReactComponent("Image", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
]);
const Import = createReactComponent("Import", [
    [
        "path",
        {
            d: "M12 3v12",
            key: "1x0j5s"
        }
    ],
    [
        "path",
        {
            d: "m8 11 4 4 4-4",
            key: "1dohi6"
        }
    ],
    [
        "path",
        {
            d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
            key: "1ywtjm"
        }
    ]
]);
const Inbox = createReactComponent("Inbox", [
    [
        "polyline",
        {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            key: "o97t9d"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ]
]);
const Indent = createReactComponent("Indent", [
    [
        "polyline",
        {
            points: "3 8 7 12 3 16",
            key: "f3rxhf"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "11",
            y2: "12",
            key: "1xy73i"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "11",
            y2: "6",
            key: "97xvqg"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "18",
            x2: "11",
            y2: "18",
            key: "1r7j8g"
        }
    ]
]);
const IndianRupee = createReactComponent("IndianRupee", [
    [
        "path",
        {
            d: "M6 3h12",
            key: "ggurg9"
        }
    ],
    [
        "path",
        {
            d: "M6 8h12",
            key: "6g4wlu"
        }
    ],
    [
        "path",
        {
            d: "m6 13 8.5 8",
            key: "u1kupk"
        }
    ],
    [
        "path",
        {
            d: "M6 13h3",
            key: "wdp6ag"
        }
    ],
    [
        "path",
        {
            d: "M9 13c6.667 0 6.667-10 0-10",
            key: "1nkvk2"
        }
    ]
]);
const Infinity = createReactComponent("Infinity", [
    [
        "path",
        {
            d: "M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z",
            key: "13d65y"
        }
    ]
]);
const Info = createReactComponent("Info", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12",
            key: "dkqlv3"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8",
            key: "1kl4hv"
        }
    ]
]);
const Inspect = createReactComponent("Inspect", [
    [
        "path",
        {
            d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
            key: "14rsvq"
        }
    ],
    [
        "path",
        {
            d: "m12 12 4 10 1.7-4.3L22 16Z",
            key: "64ilsv"
        }
    ]
]);
const Instagram = createReactComponent("Instagram", [
    [
        "rect",
        {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5",
            ry: "5",
            key: "cdfzoc"
        }
    ],
    [
        "path",
        {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            y1: "6.5",
            x2: "17.51",
            y2: "6.5",
            key: "643fve"
        }
    ]
]);
const Italic = createReactComponent("Italic", [
    [
        "line",
        {
            x1: "19",
            y1: "4",
            x2: "10",
            y2: "4",
            key: "ohvhe"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "20",
            x2: "5",
            y2: "20",
            key: "pl6qj"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "4",
            x2: "9",
            y2: "20",
            key: "baf5vk"
        }
    ]
]);
const JapaneseYen = createReactComponent("JapaneseYen", [
    [
        "path",
        {
            d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3",
            key: "2ej80x"
        }
    ],
    [
        "path",
        {
            d: "M6 15h12",
            key: "1hwgt5"
        }
    ],
    [
        "path",
        {
            d: "M6 11h12",
            key: "wf4gp6"
        }
    ]
]);
const Joystick = createReactComponent("Joystick", [
    [
        "path",
        {
            d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
            key: "jg2n2t"
        }
    ],
    [
        "path",
        {
            d: "M6 15v-2",
            key: "gd6mvg"
        }
    ],
    [
        "path",
        {
            d: "M12 15V9",
            key: "8c7uyn"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "6",
            r: "3",
            key: "1gm2ql"
        }
    ]
]);
const Key = createReactComponent("Key", [
    [
        "path",
        {
            d: "m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4",
            key: "1b7wfm"
        }
    ]
]);
const Keyboard = createReactComponent("Keyboard", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            ry: "2",
            key: "xgg3gf"
        }
    ],
    [
        "path",
        {
            d: "M6 8h.001",
            key: "1ej0i3"
        }
    ],
    [
        "path",
        {
            d: "M10 8h.001",
            key: "1x2st2"
        }
    ],
    [
        "path",
        {
            d: "M14 8h.001",
            key: "1vkmyp"
        }
    ],
    [
        "path",
        {
            d: "M18 8h.001",
            key: "kfsenl"
        }
    ],
    [
        "path",
        {
            d: "M8 12h.001",
            key: "1sjpby"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.001",
            key: "al75ts"
        }
    ],
    [
        "path",
        {
            d: "M16 12h.001",
            key: "931bgk"
        }
    ],
    [
        "path",
        {
            d: "M7 16h10",
            key: "wp8him"
        }
    ]
]);
const LampCeiling = createReactComponent("LampCeiling", [
    [
        "path",
        {
            d: "M12 2v5",
            key: "nd4vlx"
        }
    ],
    [
        "path",
        {
            d: "M6 7h12l4 9H2l4-9Z",
            key: "123d64"
        }
    ],
    [
        "path",
        {
            d: "M9.17 16a3 3 0 1 0 5.66 0",
            key: "1061mw"
        }
    ]
]);
const LampDesk = createReactComponent("LampDesk", [
    [
        "path",
        {
            d: "m14 5-3 3 2 7 8-8-7-2Z",
            key: "1b0msb"
        }
    ],
    [
        "path",
        {
            d: "m14 5-3 3-3-3 3-3 3 3Z",
            key: "1uemms"
        }
    ],
    [
        "path",
        {
            d: "M9.5 6.5 4 12l3 6",
            key: "1bx08v"
        }
    ],
    [
        "path",
        {
            d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",
            key: "wap775"
        }
    ]
]);
const LampFloor = createReactComponent("LampFloor", [
    [
        "path",
        {
            d: "M9 2h6l3 7H6l3-7Z",
            key: "wcx6mj"
        }
    ],
    [
        "path",
        {
            d: "M12 9v13",
            key: "3n1su1"
        }
    ],
    [
        "path",
        {
            d: "M9 22h6",
            key: "1rlq3v"
        }
    ]
]);
const LampWallDown = createReactComponent("LampWallDown", [
    [
        "path",
        {
            d: "M11 13h6l3 7H8l3-7Z",
            key: "9n3qlo"
        }
    ],
    [
        "path",
        {
            d: "M14 13V8a2 2 0 0 0-2-2H8",
            key: "1hu4hb"
        }
    ],
    [
        "path",
        {
            d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",
            key: "s053bc"
        }
    ]
]);
const LampWallUp = createReactComponent("LampWallUp", [
    [
        "path",
        {
            d: "M11 4h6l3 7H8l3-7Z",
            key: "11x1ee"
        }
    ],
    [
        "path",
        {
            d: "M14 11v5a2 2 0 0 1-2 2H8",
            key: "eutp5o"
        }
    ],
    [
        "path",
        {
            d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",
            key: "1iuthr"
        }
    ]
]);
const Lamp = createReactComponent("Lamp", [
    [
        "path",
        {
            d: "M8 2h8l4 10H4L8 2Z",
            key: "9dma5w"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ],
    [
        "path",
        {
            d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",
            key: "mwf4oh"
        }
    ]
]);
const Landmark = createReactComponent("Landmark", [
    [
        "line",
        {
            x1: "3",
            y1: "22",
            x2: "21",
            y2: "22",
            key: "1mkv49"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "18",
            x2: "6",
            y2: "11",
            key: "shpxqa"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "18",
            x2: "10",
            y2: "11",
            key: "6quq76"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "18",
            x2: "14",
            y2: "11",
            key: "qxd7vm"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "18",
            x2: "18",
            y2: "11",
            key: "1m478d"
        }
    ],
    [
        "polygon",
        {
            points: "12 2 20 7 4 7",
            key: "jkujk7"
        }
    ]
]);
const Languages = createReactComponent("Languages", [
    [
        "path",
        {
            d: "m5 8 6 6",
            key: "1wu5hv"
        }
    ],
    [
        "path",
        {
            d: "m4 14 6-6 2-3",
            key: "1k1g8d"
        }
    ],
    [
        "path",
        {
            d: "M2 5h12",
            key: "or177f"
        }
    ],
    [
        "path",
        {
            d: "M7 2h1",
            key: "1t2jsx"
        }
    ],
    [
        "path",
        {
            d: "m22 22-5-10-5 10",
            key: "don7ne"
        }
    ],
    [
        "path",
        {
            d: "M14 18h6",
            key: "1m8k6r"
        }
    ]
]);
const Laptop2 = createReactComponent("Laptop2", [
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "12",
            rx: "2",
            ry: "2",
            key: "8tl1gx"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "20",
            x2: "22",
            y2: "20",
            key: "1pxzem"
        }
    ]
]);
const Laptop = createReactComponent("Laptop", [
    [
        "path",
        {
            d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
            key: "tarvll"
        }
    ]
]);
const LassoSelect = createReactComponent("LassoSelect", [
    [
        "path",
        {
            d: "M7 22a5 5 0 0 1-2-4",
            key: "umushi"
        }
    ],
    [
        "path",
        {
            d: "M7 16.93c.96.43 1.96.74 2.99.91",
            key: "ybbtv3"
        }
    ],
    [
        "path",
        {
            d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
            key: "gt5e1w"
        }
    ],
    [
        "path",
        {
            d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
            key: "bq3ynw"
        }
    ],
    [
        "path",
        {
            d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",
            key: "1bawls"
        }
    ]
]);
const Lasso = createReactComponent("Lasso", [
    [
        "path",
        {
            d: "M7 22a5 5 0 0 1-2-4",
            key: "umushi"
        }
    ],
    [
        "path",
        {
            d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
            key: "146dds"
        }
    ],
    [
        "path",
        {
            d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
            key: "bq3ynw"
        }
    ]
]);
const Laugh = createReactComponent("Laugh", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",
            key: "b2q4dd"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
const Layers = createReactComponent("Layers", [
    [
        "polygon",
        {
            points: "12 2 2 7 12 12 22 7 12 2",
            key: "1b0ttc"
        }
    ],
    [
        "polyline",
        {
            points: "2 17 12 22 22 17",
            key: "imjtdl"
        }
    ],
    [
        "polyline",
        {
            points: "2 12 12 17 22 12",
            key: "5dexcv"
        }
    ]
]);
const LayoutDashboard = createReactComponent("LayoutDashboard", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "7",
            height: "9",
            key: "1eurd7"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "3",
            width: "7",
            height: "5",
            key: "zff5ux"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "12",
            width: "7",
            height: "9",
            key: "1oiq0r"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "16",
            width: "7",
            height: "5",
            key: "1145ac"
        }
    ]
]);
const LayoutGrid = createReactComponent("LayoutGrid", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            key: "1q9d4d"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            key: "1kofyi"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
            key: "18jxcw"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            key: "1omegr"
        }
    ]
]);
const LayoutList = createReactComponent("LayoutList", [
    [
        "rect",
        {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            key: "1omegr"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            key: "1q9d4d"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "4",
            x2: "21",
            y2: "4",
            key: "1klf7b"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1kf9x0"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "s6i7v1"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "20",
            x2: "21",
            y2: "20",
            key: "yxpbil"
        }
    ]
]);
const LayoutTemplate = createReactComponent("LayoutTemplate", [
    [
        "path",
        {
            d: "M21 3H3v7h18V3z",
            key: "cq2tmr"
        }
    ],
    [
        "path",
        {
            d: "M21 14h-5v7h5v-7z",
            key: "1dv32i"
        }
    ],
    [
        "path",
        {
            d: "M12 14H3v7h9v-7z",
            key: "1k92lm"
        }
    ]
]);
const Layout = createReactComponent("Layout", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "21",
            x2: "9",
            y2: "9",
            key: "97zt75"
        }
    ]
]);
const Leaf = createReactComponent("Leaf", [
    [
        "path",
        {
            d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
            key: "nnexq3"
        }
    ],
    [
        "path",
        {
            d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
            key: "mt58a7"
        }
    ]
]);
const Library = createReactComponent("Library", [
    [
        "path",
        {
            d: "m16 6 4 14",
            key: "ji33uf"
        }
    ],
    [
        "path",
        {
            d: "M12 6v14",
            key: "1n7gus"
        }
    ],
    [
        "path",
        {
            d: "M8 8v12",
            key: "1gg7y9"
        }
    ],
    [
        "path",
        {
            d: "M4 4v16",
            key: "6qkkli"
        }
    ]
]);
const LifeBuoy = createReactComponent("LifeBuoy", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "4.93",
            x2: "9.17",
            y2: "9.17",
            key: "1akcti"
        }
    ],
    [
        "line",
        {
            x1: "14.83",
            y1: "14.83",
            x2: "19.07",
            y2: "19.07",
            key: "js56sr"
        }
    ],
    [
        "line",
        {
            x1: "14.83",
            y1: "9.17",
            x2: "19.07",
            y2: "4.93",
            key: "ca9a8b"
        }
    ],
    [
        "line",
        {
            x1: "14.83",
            y1: "9.17",
            x2: "18.36",
            y2: "5.64",
            key: "dsbuwx"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "19.07",
            x2: "9.17",
            y2: "14.83",
            key: "1lkv3n"
        }
    ]
]);
const LightbulbOff = createReactComponent("LightbulbOff", [
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M9 2.804A6 6 0 0 1 18 8a4.65 4.65 0 0 1-1.03 3",
            key: "1v6krz"
        }
    ],
    [
        "path",
        {
            d: "M8.91 14a4.61 4.61 0 0 0-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 0 1 .084-1",
            key: "1jxmct"
        }
    ]
]);
const Lightbulb = createReactComponent("Lightbulb", [
    [
        "line",
        {
            x1: "9",
            y1: "18",
            x2: "15",
            y2: "18",
            key: "poumom"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "22",
            x2: "14",
            y2: "22",
            key: "1oekqc"
        }
    ],
    [
        "path",
        {
            d: "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14",
            key: "a9yf0y"
        }
    ]
]);
const LineChart = createReactComponent("LineChart", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "m19 9-5 5-4-4-3 3",
            key: "2osh9i"
        }
    ]
]);
const Link2Off = createReactComponent("Link2Off", [
    [
        "path",
        {
            d: "M9 17H7A5 5 0 0 1 7 7",
            key: "10o201"
        }
    ],
    [
        "path",
        {
            d: "M15 7h2a5 5 0 0 1 4 8",
            key: "1d3206"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "12",
            y2: "12",
            key: "1drbw0"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Link2 = createReactComponent("Link2", [
    [
        "path",
        {
            d: "M9 17H7A5 5 0 0 1 7 7h2",
            key: "8i5ue5"
        }
    ],
    [
        "path",
        {
            d: "M15 7h2a5 5 0 1 1 0 10h-2",
            key: "1b9ql8"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
const Link = createReactComponent("Link", [
    [
        "path",
        {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }
    ],
    [
        "path",
        {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }
    ]
]);
const Linkedin = createReactComponent("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "9",
            width: "4",
            height: "12",
            key: "fu1a4h"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
]);
const ListChecks = createReactComponent("ListChecks", [
    [
        "line",
        {
            x1: "10",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "g7ikjt"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "xgqux5"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1q4fbe"
        }
    ],
    [
        "polyline",
        {
            points: "3 6 4 7 6 5",
            key: "ectua5"
        }
    ],
    [
        "polyline",
        {
            points: "3 12 4 13 6 11",
            key: "gtbhyw"
        }
    ],
    [
        "polyline",
        {
            points: "3 18 4 19 6 17",
            key: "qzp18e"
        }
    ]
]);
const ListEnd = createReactComponent("ListEnd", [
    [
        "path",
        {
            d: "M16 12H3",
            key: "1a2rj7"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M10 18H3",
            key: "13769t"
        }
    ],
    [
        "path",
        {
            d: "M21 6v10a2 2 0 0 1-2 2h-4",
            key: "1snekz"
        }
    ],
    [
        "path",
        {
            d: "m16 16-2 2 2 2",
            key: "kkc6pm"
        }
    ]
]);
const ListMinus = createReactComponent("ListMinus", [
    [
        "path",
        {
            d: "M11 12H3",
            key: "51ecnj"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "M21 12h-6",
            key: "bt1uis"
        }
    ]
]);
const ListMusic = createReactComponent("ListMusic", [
    [
        "path",
        {
            d: "M21 15V6",
            key: "h1cx4g"
        }
    ],
    [
        "path",
        {
            d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
            key: "8saifv"
        }
    ],
    [
        "path",
        {
            d: "M12 12H3",
            key: "18klou"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M12 18H3",
            key: "11ftsu"
        }
    ]
]);
const ListOrdered = createReactComponent("ListOrdered", [
    [
        "line",
        {
            x1: "10",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "g7ikjt"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "xgqux5"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1q4fbe"
        }
    ],
    [
        "path",
        {
            d: "M4 6h1v4",
            key: "cnovpq"
        }
    ],
    [
        "path",
        {
            d: "M4 10h2",
            key: "16xx2s"
        }
    ],
    [
        "path",
        {
            d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",
            key: "m9a95d"
        }
    ]
]);
const ListPlus = createReactComponent("ListPlus", [
    [
        "path",
        {
            d: "M11 12H3",
            key: "51ecnj"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "M18 9v6",
            key: "1twb98"
        }
    ],
    [
        "path",
        {
            d: "M21 12h-6",
            key: "bt1uis"
        }
    ]
]);
const ListStart = createReactComponent("ListStart", [
    [
        "path",
        {
            d: "M16 12H3",
            key: "1a2rj7"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "M10 6H3",
            key: "lf8lx7"
        }
    ],
    [
        "path",
        {
            d: "M21 18V8a2 2 0 0 0-2-2h-5",
            key: "1hghli"
        }
    ],
    [
        "path",
        {
            d: "m16 8-2-2 2-2",
            key: "160uvd"
        }
    ]
]);
const ListVideo = createReactComponent("ListVideo", [
    [
        "path",
        {
            d: "M12 12H3",
            key: "18klou"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M12 18H3",
            key: "11ftsu"
        }
    ],
    [
        "path",
        {
            d: "m16 12 5 3-5 3v-6Z",
            key: "zpskkp"
        }
    ]
]);
const ListX = createReactComponent("ListX", [
    [
        "path",
        {
            d: "M11 12H3",
            key: "51ecnj"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M16 18H3",
            key: "12xzn7"
        }
    ],
    [
        "path",
        {
            d: "m19 10-4 4",
            key: "1tz659"
        }
    ],
    [
        "path",
        {
            d: "m15 10 4 4",
            key: "1n7nei"
        }
    ]
]);
const List = createReactComponent("List", [
    [
        "line",
        {
            x1: "8",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1kveod"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "120u6p"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "18",
            x2: "21",
            y2: "18",
            key: "1k409v"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "3.01",
            y2: "6",
            key: "13co06"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "3.01",
            y2: "12",
            key: "11tec3"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "18",
            x2: "3.01",
            y2: "18",
            key: "14wug1"
        }
    ]
]);
const Loader2 = createReactComponent("Loader2", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
const Loader = createReactComponent("Loader", [
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "6",
            key: "1pduqs"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "18",
            x2: "12",
            y2: "22",
            key: "1b94uv"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "4.93",
            x2: "7.76",
            y2: "7.76",
            key: "1a736z"
        }
    ],
    [
        "line",
        {
            x1: "16.24",
            y1: "16.24",
            x2: "19.07",
            y2: "19.07",
            key: "gt096z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "6",
            y2: "12",
            key: "rkbu33"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "1vrbnu"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "19.07",
            x2: "7.76",
            y2: "16.24",
            key: "59c6el"
        }
    ],
    [
        "line",
        {
            x1: "16.24",
            y1: "7.76",
            x2: "19.07",
            y2: "4.93",
            key: "8m03gt"
        }
    ]
]);
const LocateFixed = createReactComponent("LocateFixed", [
    [
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "7",
            key: "fim9np"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
const LocateOff = createReactComponent("LocateOff", [
    [
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "path",
        {
            d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
            key: "1oh7ia"
        }
    ],
    [
        "path",
        {
            d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
            key: "3qdecy"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ]
]);
const Locate = createReactComponent("Locate", [
    [
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "7",
            key: "fim9np"
        }
    ]
]);
const Lock = createReactComponent("Lock", [
    [
        "rect",
        {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2",
            key: "biyj2e"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
const LogIn = createReactComponent("LogIn", [
    [
        "path",
        {
            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
            key: "u53s6r"
        }
    ],
    [
        "polyline",
        {
            points: "10 17 15 12 10 7",
            key: "1ail0h"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12",
            x2: "3",
            y2: "12",
            key: "80e4vw"
        }
    ]
]);
const LogOut = createReactComponent("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "9",
            y2: "12",
            key: "1stwgr"
        }
    ]
]);
const Luggage = createReactComponent("Luggage", [
    [
        "path",
        {
            d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",
            key: "1h5fkc"
        }
    ],
    [
        "path",
        {
            d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",
            key: "1l99gc"
        }
    ],
    [
        "path",
        {
            d: "M10 20h4",
            key: "ni2waw"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "20",
            r: "2",
            key: "1vifvg"
        }
    ],
    [
        "circle",
        {
            cx: "8",
            cy: "20",
            r: "2",
            key: "ckkr5m"
        }
    ]
]);
const Magnet = createReactComponent("Magnet", [
    [
        "path",
        {
            d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
            key: "1i3lhw"
        }
    ],
    [
        "path",
        {
            d: "m5 8 4 4",
            key: "j6kj7e"
        }
    ],
    [
        "path",
        {
            d: "m12 15 4 4",
            key: "lnac28"
        }
    ]
]);
const MailCheck = createReactComponent("MailCheck", [
    [
        "path",
        {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
            key: "12jkf8"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "m16 19 2 2 4-4",
            key: "1b14m6"
        }
    ]
]);
const MailMinus = createReactComponent("MailMinus", [
    [
        "path",
        {
            d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
            key: "fuxbkv"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M16 19h6",
            key: "xwg31i"
        }
    ]
]);
const MailOpen = createReactComponent("MailOpen", [
    [
        "path",
        {
            d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
            key: "1jhwl8"
        }
    ],
    [
        "path",
        {
            d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
            key: "1qfld7"
        }
    ]
]);
const MailPlus = createReactComponent("MailPlus", [
    [
        "path",
        {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
            key: "12jkf8"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M19 16v6",
            key: "tddt3s"
        }
    ],
    [
        "path",
        {
            d: "M16 19h6",
            key: "xwg31i"
        }
    ]
]);
const MailQuestion = createReactComponent("MailQuestion", [
    [
        "path",
        {
            d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
            key: "e61zoh"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
            key: "7z9rxb"
        }
    ],
    [
        "path",
        {
            d: "M20 22v.01",
            key: "12bgn6"
        }
    ]
]);
const MailSearch = createReactComponent("MailSearch", [
    [
        "path",
        {
            d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",
            key: "w80f2v"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",
            key: "mgbru4"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "path",
        {
            d: "m22 22-1.5-1.5",
            key: "1x83k4"
        }
    ]
]);
const MailWarning = createReactComponent("MailWarning", [
    [
        "path",
        {
            d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
            key: "e61zoh"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "M20 14v4",
            key: "1hm744"
        }
    ],
    [
        "path",
        {
            d: "M20 22v.01",
            key: "12bgn6"
        }
    ]
]);
const MailX = createReactComponent("MailX", [
    [
        "path",
        {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",
            key: "1j9vog"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ],
    [
        "path",
        {
            d: "m17 17 4 4",
            key: "1b3523"
        }
    ],
    [
        "path",
        {
            d: "m21 17-4 4",
            key: "uinynz"
        }
    ]
]);
const Mail = createReactComponent("Mail", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
const Mails = createReactComponent("Mails", [
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "16",
            height: "13",
            rx: "2",
            key: "q6n4z8"
        }
    ],
    [
        "path",
        {
            d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",
            key: "xn252p"
        }
    ],
    [
        "path",
        {
            d: "M2 8v11c0 1.1.9 2 2 2h14",
            key: "n13cji"
        }
    ]
]);
const MapPinOff = createReactComponent("MapPinOff", [
    [
        "path",
        {
            d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",
            key: "12a8pk"
        }
    ],
    [
        "path",
        {
            d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",
            key: "1r9f6y"
        }
    ],
    [
        "path",
        {
            d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",
            key: "erynq7"
        }
    ],
    [
        "path",
        {
            d: "M14.9 9.25a3 3 0 0 0-2.15-2.16",
            key: "1hwwmx"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const MapPin = createReactComponent("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
            key: "2oe9fu"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
const Map = createReactComponent("Map", [
    [
        "polygon",
        {
            points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",
            key: "ok2ie8"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "3",
            x2: "9",
            y2: "18",
            key: "3zqglt"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "6",
            x2: "15",
            y2: "21",
            key: "1c9xoo"
        }
    ]
]);
const Martini = createReactComponent("Martini", [
    [
        "path",
        {
            d: "M8 22h8",
            key: "rmew8v"
        }
    ],
    [
        "path",
        {
            d: "M12 11v11",
            key: "ur9y6a"
        }
    ],
    [
        "path",
        {
            d: "m19 3-7 8-7-8Z",
            key: "1sgpiw"
        }
    ]
]);
const Maximize2 = createReactComponent("Maximize2", [
    [
        "polyline",
        {
            points: "15 3 21 3 21 9",
            key: "mznyad"
        }
    ],
    [
        "polyline",
        {
            points: "9 21 3 21 3 15",
            key: "1avn1i"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "3",
            x2: "14",
            y2: "10",
            key: "8isubj"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "21",
            x2: "10",
            y2: "14",
            key: "c1a6xr"
        }
    ]
]);
const Maximize = createReactComponent("Maximize", [
    [
        "path",
        {
            d: "M8 3H5a2 2 0 0 0-2 2v3",
            key: "1dcmit"
        }
    ],
    [
        "path",
        {
            d: "M21 8V5a2 2 0 0 0-2-2h-3",
            key: "1e4gt3"
        }
    ],
    [
        "path",
        {
            d: "M3 16v3a2 2 0 0 0 2 2h3",
            key: "wsl5sc"
        }
    ],
    [
        "path",
        {
            d: "M16 21h3a2 2 0 0 0 2-2v-3",
            key: "18trek"
        }
    ]
]);
const Medal = createReactComponent("Medal", [
    [
        "path",
        {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
            key: "143lza"
        }
    ],
    [
        "path",
        {
            d: "M11 12 5.12 2.2",
            key: "qhuxz6"
        }
    ],
    [
        "path",
        {
            d: "m13 12 5.88-9.8",
            key: "hbye0f"
        }
    ],
    [
        "path",
        {
            d: "M8 7h8",
            key: "i86dvs"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "17",
            r: "5",
            key: "qbz8iq"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-2h-.5",
            key: "fawc4q"
        }
    ]
]);
const MegaphoneOff = createReactComponent("MegaphoneOff", [
    [
        "path",
        {
            d: "M9.26 9.26 3 11v3l14.14 3.14",
            key: "3429n"
        }
    ],
    [
        "path",
        {
            d: "M21 15.34V6l-7.31 2.03",
            key: "4o1dh8"
        }
    ],
    [
        "path",
        {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
            key: "1yl0tm"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ]
]);
const Megaphone = createReactComponent("Megaphone", [
    [
        "path",
        {
            d: "m3 11 18-5v12L3 14v-3z",
            key: "n962bs"
        }
    ],
    [
        "path",
        {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
            key: "1yl0tm"
        }
    ]
]);
const Meh = createReactComponent("Meh", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "15",
            x2: "16",
            y2: "15",
            key: "29ieok"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
const Menu = createReactComponent("Menu", [
    [
        "line",
        {
            x1: "4",
            y1: "12",
            x2: "20",
            y2: "12",
            key: "1q6rtp"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "6",
            x2: "20",
            y2: "6",
            key: "1jr6gt"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "18",
            x2: "20",
            y2: "18",
            key: "98tuvx"
        }
    ]
]);
const MessageCircle = createReactComponent("MessageCircle", [
    [
        "path",
        {
            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
            key: "5iho0c"
        }
    ]
]);
const MessageSquare = createReactComponent("MessageSquare", [
    [
        "path",
        {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz"
        }
    ]
]);
const Mic2 = createReactComponent("Mic2", [
    [
        "path",
        {
            d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",
            key: "zoua8r"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "7",
            r: "5",
            key: "1fomce"
        }
    ]
]);
const MicOff = createReactComponent("MicOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",
            key: "80xlxr"
        }
    ],
    [
        "path",
        {
            d: "M5 10v2a7 7 0 0 0 12 5",
            key: "p2k8kg"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
            key: "1gzdoj"
        }
    ],
    [
        "path",
        {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12",
            key: "r2i35w"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "22",
            key: "1l505v"
        }
    ]
]);
const Mic = createReactComponent("Mic", [
    [
        "path",
        {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "22",
            key: "1l505v"
        }
    ]
]);
const Microscope = createReactComponent("Microscope", [
    [
        "path",
        {
            d: "M6 18h8",
            key: "1borvv"
        }
    ],
    [
        "path",
        {
            d: "M3 22h18",
            key: "8prr45"
        }
    ],
    [
        "path",
        {
            d: "M14 22a7 7 0 1 0 0-14h-1",
            key: "1jwaiy"
        }
    ],
    [
        "path",
        {
            d: "M9 14h2",
            key: "197e7h"
        }
    ],
    [
        "path",
        {
            d: "M8 6h4",
            key: "i9thid"
        }
    ],
    [
        "path",
        {
            d: "M13 10V6.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V10c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2Z",
            key: "z62yqi"
        }
    ]
]);
const Microwave = createReactComponent("Microwave", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "15",
            rx: "2",
            key: "1rfv8z"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "8",
            width: "8",
            height: "7",
            rx: "1",
            key: "i43qc1"
        }
    ],
    [
        "path",
        {
            d: "M18 8v7",
            key: "o5zi4n"
        }
    ],
    [
        "path",
        {
            d: "M6 19v2",
            key: "1loha6"
        }
    ],
    [
        "path",
        {
            d: "M18 19v2",
            key: "1dawf0"
        }
    ]
]);
const Milestone = createReactComponent("Milestone", [
    [
        "path",
        {
            d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",
            key: "1mp5s7"
        }
    ],
    [
        "path",
        {
            d: "M12 13v9",
            key: "keea1l"
        }
    ],
    [
        "path",
        {
            d: "M12 2v4",
            key: "3427ic"
        }
    ]
]);
const MilkOff = createReactComponent("MilkOff", [
    [
        "path",
        {
            d: "M8 2h8",
            key: "1ssgc1"
        }
    ],
    [
        "path",
        {
            d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
            key: "y0ejgx"
        }
    ],
    [
        "path",
        {
            d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",
            key: "iaxqsy"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Milk = createReactComponent("Milk", [
    [
        "path",
        {
            d: "M8 2h8",
            key: "1ssgc1"
        }
    ],
    [
        "path",
        {
            d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
            key: "qtp12x"
        }
    ],
    [
        "path",
        {
            d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
            key: "ygeh44"
        }
    ]
]);
const Minimize2 = createReactComponent("Minimize2", [
    [
        "polyline",
        {
            points: "4 14 10 14 10 20",
            key: "11kfnr"
        }
    ],
    [
        "polyline",
        {
            points: "20 10 14 10 14 4",
            key: "rlmsce"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "10",
            x2: "21",
            y2: "3",
            key: "6dvi8v"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "21",
            x2: "10",
            y2: "14",
            key: "c1a6xr"
        }
    ]
]);
const Minimize = createReactComponent("Minimize", [
    [
        "path",
        {
            d: "M8 3v3a2 2 0 0 1-2 2H3",
            key: "hohbtr"
        }
    ],
    [
        "path",
        {
            d: "M21 8h-3a2 2 0 0 1-2-2V3",
            key: "5jw1f3"
        }
    ],
    [
        "path",
        {
            d: "M3 16h3a2 2 0 0 1 2 2v3",
            key: "198tvr"
        }
    ],
    [
        "path",
        {
            d: "M16 21v-3a2 2 0 0 1 2-2h3",
            key: "ph8mxp"
        }
    ]
]);
const MinusCircle = createReactComponent("MinusCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
const MinusSquare = createReactComponent("MinusSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
const Minus = createReactComponent("Minus", [
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ]
]);
const MonitorOff = createReactComponent("MonitorOff", [
    [
        "path",
        {
            d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",
            key: "k0q8oc"
        }
    ],
    [
        "path",
        {
            d: "M22 15V5a2 2 0 0 0-2-2H9",
            key: "cp1ac0"
        }
    ],
    [
        "path",
        {
            d: "M8 21h8",
            key: "1ev6f3"
        }
    ],
    [
        "path",
        {
            d: "M12 17v4",
            key: "1riwvh"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
const MonitorSmartphone = createReactComponent("MonitorSmartphone", [
    [
        "path",
        {
            d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
            key: "10dyio"
        }
    ],
    [
        "path",
        {
            d: "M10 19v-3.96 3.15",
            key: "1irgej"
        }
    ],
    [
        "path",
        {
            d: "M7 19h5",
            key: "qswx4l"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "12",
            width: "6",
            height: "10",
            rx: "2",
            key: "k4sdfk"
        }
    ]
]);
const MonitorSpeaker = createReactComponent("MonitorSpeaker", [
    [
        "path",
        {
            d: "M5.5 20H8",
            key: "1k40s5"
        }
    ],
    [
        "path",
        {
            d: "M17 9h.01",
            key: "1j24nn"
        }
    ],
    [
        "rect",
        {
            x: "12",
            y: "4",
            width: "10",
            height: "16",
            rx: "2",
            key: "1gi0i2"
        }
    ],
    [
        "path",
        {
            d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",
            key: "1mp6e1"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "15",
            r: "1",
            key: "tqvash"
        }
    ]
]);
const Monitor = createReactComponent("Monitor", [
    [
        "rect",
        {
            x: "2",
            y: "3",
            width: "20",
            height: "14",
            rx: "2",
            ry: "2",
            key: "1q87ek"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "21",
            x2: "16",
            y2: "21",
            key: "bcbiac"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12",
            y2: "21",
            key: "1v4d7v"
        }
    ]
]);
const Moon = createReactComponent("Moon", [
    [
        "path",
        {
            d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "1rit1i"
        }
    ]
]);
const MoreHorizontal = createReactComponent("MoreHorizontal", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
]);
const MoreVertical = createReactComponent("MoreVertical", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "1",
            key: "gxeob9"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "19",
            r: "1",
            key: "lyex9k"
        }
    ]
]);
const MountainSnow = createReactComponent("MountainSnow", [
    [
        "path",
        {
            d: "m8 3 4 8 5-5 5 15H2L8 3z",
            key: "otkl63"
        }
    ],
    [
        "path",
        {
            d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",
            key: "1pvmmp"
        }
    ]
]);
const Mountain = createReactComponent("Mountain", [
    [
        "path",
        {
            d: "m8 3 4 8 5-5 5 15H2L8 3z",
            key: "otkl63"
        }
    ]
]);
const MousePointer2 = createReactComponent("MousePointer2", [
    [
        "path",
        {
            d: "m4 4 7.07 17 2.51-7.39L21 11.07z",
            key: "1vqm48"
        }
    ]
]);
const MousePointerClick = createReactComponent("MousePointerClick", [
    [
        "path",
        {
            d: "m9 9 5 12 1.774-5.226L21 14 9 9z",
            key: "1qd44z"
        }
    ],
    [
        "path",
        {
            d: "m16.071 16.071 4.243 4.243",
            key: "wfhsjb"
        }
    ],
    [
        "path",
        {
            d: "m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122",
            key: "1bk8fz"
        }
    ]
]);
const MousePointer = createReactComponent("MousePointer", [
    [
        "path",
        {
            d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
            key: "y2ucgo"
        }
    ],
    [
        "path",
        {
            d: "m13 13 6 6",
            key: "1nhxnf"
        }
    ]
]);
const Mouse = createReactComponent("Mouse", [
    [
        "rect",
        {
            x: "6",
            y: "3",
            width: "12",
            height: "18",
            rx: "6",
            key: "wskjtk"
        }
    ],
    [
        "path",
        {
            d: "M12 7v4",
            key: "xawao1"
        }
    ]
]);
const Move3d = createReactComponent("Move3d", [
    [
        "path",
        {
            d: "M5 3v16h16",
            key: "1mqmf9"
        }
    ],
    [
        "path",
        {
            d: "m5 19 6-6",
            key: "jh6hbb"
        }
    ],
    [
        "path",
        {
            d: "m2 6 3-3 3 3",
            key: "tkyvxa"
        }
    ],
    [
        "path",
        {
            d: "m18 16 3 3-3 3",
            key: "1d4glt"
        }
    ]
]);
const MoveDiagonal2 = createReactComponent("MoveDiagonal2", [
    [
        "polyline",
        {
            points: "5 11 5 5 11 5",
            key: "ncfzxk"
        }
    ],
    [
        "polyline",
        {
            points: "19 13 19 19 13 19",
            key: "1mk7hk"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "5",
            x2: "19",
            y2: "19",
            key: "4tvgsr"
        }
    ]
]);
const MoveDiagonal = createReactComponent("MoveDiagonal", [
    [
        "polyline",
        {
            points: "13 5 19 5 19 11",
            key: "11219e"
        }
    ],
    [
        "polyline",
        {
            points: "11 19 5 19 5 13",
            key: "sfq3wq"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "5",
            y2: "19",
            key: "t1677v"
        }
    ]
]);
const MoveHorizontal = createReactComponent("MoveHorizontal", [
    [
        "polyline",
        {
            points: "18 8 22 12 18 16",
            key: "1hqrds"
        }
    ],
    [
        "polyline",
        {
            points: "6 8 2 12 6 16",
            key: "f0ernq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ]
]);
const MoveVertical = createReactComponent("MoveVertical", [
    [
        "polyline",
        {
            points: "8 18 12 22 16 18",
            key: "1uutw3"
        }
    ],
    [
        "polyline",
        {
            points: "8 6 12 2 16 6",
            key: "d60sxy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ]
]);
const Move = createReactComponent("Move", [
    [
        "polyline",
        {
            points: "5 9 2 12 5 15",
            key: "1r5uj5"
        }
    ],
    [
        "polyline",
        {
            points: "9 5 12 2 15 5",
            key: "5v383o"
        }
    ],
    [
        "polyline",
        {
            points: "15 19 12 22 9 19",
            key: "g7qi8m"
        }
    ],
    [
        "polyline",
        {
            points: "19 9 22 12 19 15",
            key: "tpp73q"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ]
]);
const Music2 = createReactComponent("Music2", [
    [
        "circle",
        {
            cx: "8",
            cy: "18",
            r: "4",
            key: "1fc0mg"
        }
    ],
    [
        "path",
        {
            d: "M12 18V2l7 4",
            key: "g04rme"
        }
    ]
]);
const Music3 = createReactComponent("Music3", [
    [
        "circle",
        {
            cx: "12",
            cy: "18",
            r: "4",
            key: "m3r9ws"
        }
    ],
    [
        "path",
        {
            d: "M16 18V2",
            key: "40x2m5"
        }
    ]
]);
const Music4 = createReactComponent("Music4", [
    [
        "path",
        {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }
    ],
    [
        "path",
        {
            d: "m9 9 12-2",
            key: "1e64n2"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }
    ]
]);
const Music = createReactComponent("Music", [
    [
        "path",
        {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }
    ]
]);
const Navigation2Off = createReactComponent("Navigation2Off", [
    [
        "path",
        {
            d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17",
            key: "qoq2o2"
        }
    ],
    [
        "path",
        {
            d: "M14.53 8.88 12 2l-1.17 3.17",
            key: "k3sjzy"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Navigation2 = createReactComponent("Navigation2", [
    [
        "polygon",
        {
            points: "12 2 19 21 12 17 5 21 12 2",
            key: "x8c0qg"
        }
    ]
]);
const NavigationOff = createReactComponent("NavigationOff", [
    [
        "path",
        {
            d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43",
            key: "1vdtb7"
        }
    ],
    [
        "path",
        {
            d: "M17.39 11.73 22 2l-9.73 4.61",
            key: "tya3r6"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Navigation = createReactComponent("Navigation", [
    [
        "polygon",
        {
            points: "3 11 22 2 13 21 11 13 3 11",
            key: "1ltx0t"
        }
    ]
]);
const Network = createReactComponent("Network", [
    [
        "rect",
        {
            x: "9",
            y: "2",
            width: "6",
            height: "6",
            key: "1iwon9"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "16",
            width: "6",
            height: "6",
            key: "gonbwd"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "16",
            width: "6",
            height: "6",
            key: "1q0lzr"
        }
    ],
    [
        "path",
        {
            d: "M5 16v-4h14v4",
            key: "8njgxx"
        }
    ],
    [
        "path",
        {
            d: "M12 12V8",
            key: "2874zd"
        }
    ]
]);
const Newspaper = createReactComponent("Newspaper", [
    [
        "path",
        {
            d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
            key: "7pis2x"
        }
    ],
    [
        "path",
        {
            d: "M18 14h-8",
            key: "sponae"
        }
    ],
    [
        "path",
        {
            d: "M15 18h-5",
            key: "95g1m2"
        }
    ],
    [
        "path",
        {
            d: "M10 6h8v4h-8V6Z",
            key: "smlsk5"
        }
    ]
]);
const NutOff = createReactComponent("NutOff", [
    [
        "path",
        {
            d: "M12 4V2",
            key: "1k5q1u"
        }
    ],
    [
        "path",
        {
            d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
            key: "1xcvy9"
        }
    ],
    [
        "path",
        {
            d: "M19 10v3.343",
            key: "163tfc"
        }
    ],
    [
        "path",
        {
            d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
            key: "17914v"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Nut = createReactComponent("Nut", [
    [
        "path",
        {
            d: "M12 4V2",
            key: "1k5q1u"
        }
    ],
    [
        "path",
        {
            d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
            key: "1tgyif"
        }
    ],
    [
        "path",
        {
            d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
            key: "tnsqj"
        }
    ]
]);
const Octagon = createReactComponent("Octagon", [
    [
        "polygon",
        {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
            key: "h1p8hx"
        }
    ]
]);
const Option = createReactComponent("Option", [
    [
        "path",
        {
            d: "M3 3h6l6 18h6",
            key: "ph9rgk"
        }
    ],
    [
        "path",
        {
            d: "M14 3h7",
            key: "16f0ms"
        }
    ]
]);
const Outdent = createReactComponent("Outdent", [
    [
        "polyline",
        {
            points: "7 8 3 12 7 16",
            key: "2j60jr"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "11",
            y2: "12",
            key: "1xy73i"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "6",
            x2: "11",
            y2: "6",
            key: "97xvqg"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "18",
            x2: "11",
            y2: "18",
            key: "1r7j8g"
        }
    ]
]);
const Package2 = createReactComponent("Package2", [
    [
        "path",
        {
            d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",
            key: "1ront0"
        }
    ],
    [
        "path",
        {
            d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",
            key: "19h2x1"
        }
    ],
    [
        "path",
        {
            d: "M12 3v6",
            key: "1holv5"
        }
    ]
]);
const PackageCheck = createReactComponent("PackageCheck", [
    [
        "path",
        {
            d: "m16 16 2 2 4-4",
            key: "gfu2re"
        }
    ],
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
const PackageMinus = createReactComponent("PackageMinus", [
    [
        "path",
        {
            d: "M16 16h6",
            key: "100bgy"
        }
    ],
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
const PackageOpen = createReactComponent("PackageOpen", [
    [
        "path",
        {
            d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z",
            key: "1vy178"
        }
    ],
    [
        "path",
        {
            d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z",
            key: "s3bv25"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "13",
            key: "15r0fr"
        }
    ],
    [
        "path",
        {
            d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5",
            key: "1na2nq"
        }
    ]
]);
const PackagePlus = createReactComponent("PackagePlus", [
    [
        "path",
        {
            d: "M16 16h6",
            key: "100bgy"
        }
    ],
    [
        "path",
        {
            d: "M19 13v6",
            key: "85cyf1"
        }
    ],
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
const PackageSearch = createReactComponent("PackageSearch", [
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ],
    [
        "circle",
        {
            cx: "18.5",
            cy: "15.5",
            r: "2.5",
            key: "b5zd12"
        }
    ],
    [
        "path",
        {
            d: "M20.27 17.27 22 19",
            key: "1l4muz"
        }
    ]
]);
const PackageX = createReactComponent("PackageX", [
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "M16.5 9.4 7.55 4.24",
            key: "10qotr"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ],
    [
        "path",
        {
            d: "m17 13 5 5m-5 0 5-5",
            key: "im3w4b"
        }
    ]
]);
const Package = createReactComponent("Package", [
    [
        "line",
        {
            x1: "16.5",
            y1: "9.4",
            x2: "7.5",
            y2: "4.21",
            key: "i6f8yp"
        }
    ],
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "12",
            key: "gdv6h4"
        }
    ]
]);
const PaintBucket = createReactComponent("PaintBucket", [
    [
        "path",
        {
            d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",
            key: "irua1i"
        }
    ],
    [
        "path",
        {
            d: "m5 2 5 5",
            key: "1lls2c"
        }
    ],
    [
        "path",
        {
            d: "M2 13h15",
            key: "1hkzvu"
        }
    ],
    [
        "path",
        {
            d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",
            key: "xk76lq"
        }
    ]
]);
const Paintbrush2 = createReactComponent("Paintbrush2", [
    [
        "path",
        {
            d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",
            key: "1c8kta"
        }
    ],
    [
        "path",
        {
            d: "M6 12V2h12v10",
            key: "1esbnf"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4",
            key: "qmzblu"
        }
    ],
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ]
]);
const Paintbrush = createReactComponent("Paintbrush", [
    [
        "path",
        {
            d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",
            key: "m6k5sh"
        }
    ],
    [
        "path",
        {
            d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",
            key: "arzq70"
        }
    ],
    [
        "path",
        {
            d: "M14.5 17.5 4.5 15",
            key: "s7fvrz"
        }
    ]
]);
const Palette = createReactComponent("Palette", [
    [
        "circle",
        {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            key: "1xcu5"
        }
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            key: "736e4u"
        }
    ],
    [
        "circle",
        {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            key: "clrty"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            key: "1s4xz9"
        }
    ],
    [
        "path",
        {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8"
        }
    ]
]);
const Palmtree = createReactComponent("Palmtree", [
    [
        "path",
        {
            d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",
            key: "foxbe7"
        }
    ],
    [
        "path",
        {
            d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",
            key: "18arnh"
        }
    ],
    [
        "path",
        {
            d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",
            key: "epoumf"
        }
    ],
    [
        "path",
        {
            d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",
            key: "ft0feo"
        }
    ]
]);
const Paperclip = createReactComponent("Paperclip", [
    [
        "path",
        {
            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
            key: "1u3ebp"
        }
    ]
]);
const PartyPopper = createReactComponent("PartyPopper", [
    [
        "path",
        {
            d: "M5.8 11.3 2 22l10.7-3.79",
            key: "gwxi1d"
        }
    ],
    [
        "path",
        {
            d: "M4 3h.01",
            key: "1vcuye"
        }
    ],
    [
        "path",
        {
            d: "M22 8h.01",
            key: "1mrtc2"
        }
    ],
    [
        "path",
        {
            d: "M15 2h.01",
            key: "1cjtqr"
        }
    ],
    [
        "path",
        {
            d: "M22 20h.01",
            key: "1mrys2"
        }
    ],
    [
        "path",
        {
            d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
            key: "bpx1uq"
        }
    ],
    [
        "path",
        {
            d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",
            key: "1pd0s7"
        }
    ],
    [
        "path",
        {
            d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",
            key: "zq5xbz"
        }
    ],
    [
        "path",
        {
            d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
            key: "4kbmks"
        }
    ]
]);
const PauseCircle = createReactComponent("PauseCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "15",
            x2: "10",
            y2: "9",
            key: "2cxng6"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "15",
            x2: "14",
            y2: "9",
            key: "wsglx2"
        }
    ]
]);
const PauseOctagon = createReactComponent("PauseOctagon", [
    [
        "path",
        {
            d: "M10 15V9",
            key: "1lckn7"
        }
    ],
    [
        "path",
        {
            d: "M14 15V9",
            key: "1muqhk"
        }
    ],
    [
        "path",
        {
            d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",
            key: "1m7qra"
        }
    ]
]);
const Pause = createReactComponent("Pause", [
    [
        "rect",
        {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
            key: "5yltu4"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
            key: "duxydb"
        }
    ]
]);
const PenTool = createReactComponent("PenTool", [
    [
        "path",
        {
            d: "m12 19 7-7 3 3-7 7-3-3z",
            key: "rklqx2"
        }
    ],
    [
        "path",
        {
            d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
            key: "1et58u"
        }
    ],
    [
        "path",
        {
            d: "m2 2 7.586 7.586",
            key: "etlp93"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "2",
            key: "xmgehs"
        }
    ]
]);
const Pencil = createReactComponent("Pencil", [
    [
        "line",
        {
            x1: "18",
            y1: "2",
            x2: "22",
            y2: "6",
            key: "1k5sg2"
        }
    ],
    [
        "path",
        {
            d: "M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z",
            key: "12iwkt"
        }
    ]
]);
const Percent = createReactComponent("Percent", [
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "5",
            y2: "19",
            key: "t1677v"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "6.5",
            r: "2.5",
            key: "4mh3h7"
        }
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "17.5",
            r: "2.5",
            key: "1mdrzq"
        }
    ]
]);
const PersonStanding = createReactComponent("PersonStanding", [
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "1",
            key: "gxeob9"
        }
    ],
    [
        "path",
        {
            d: "m9 20 3-6 3 6",
            key: "se2kox"
        }
    ],
    [
        "path",
        {
            d: "m6 8 6 2 6-2",
            key: "4o3us4"
        }
    ],
    [
        "path",
        {
            d: "M12 10v4",
            key: "1kjpxc"
        }
    ]
]);
const PhoneCall = createReactComponent("PhoneCall", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ],
    [
        "path",
        {
            d: "M14.05 2a9 9 0 0 1 8 7.94",
            key: "vmijpz"
        }
    ],
    [
        "path",
        {
            d: "M14.05 6A5 5 0 0 1 18 10",
            key: "13nbpp"
        }
    ]
]);
const PhoneForwarded = createReactComponent("PhoneForwarded", [
    [
        "polyline",
        {
            points: "18 2 22 6 18 10",
            key: "6vjanh"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "6",
            x2: "22",
            y2: "6",
            key: "1yuov7"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
const PhoneIncoming = createReactComponent("PhoneIncoming", [
    [
        "polyline",
        {
            points: "16 2 16 8 22 8",
            key: "1ygljm"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "16",
            y2: "8",
            key: "kb9lty"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
const PhoneMissed = createReactComponent("PhoneMissed", [
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "16",
            y2: "8",
            key: "kb9lty"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "2",
            x2: "22",
            y2: "8",
            key: "11291p"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
const PhoneOff = createReactComponent("PhoneOff", [
    [
        "path",
        {
            d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
            key: "z86iuo"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "2",
            y2: "22",
            key: "1sphze"
        }
    ]
]);
const PhoneOutgoing = createReactComponent("PhoneOutgoing", [
    [
        "polyline",
        {
            points: "22 8 22 2 16 2",
            key: "1g204g"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "8",
            x2: "22",
            y2: "2",
            key: "1hkegm"
        }
    ],
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
const Phone = createReactComponent("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
const PieChart = createReactComponent("PieChart", [
    [
        "path",
        {
            d: "M21.21 15.89A10 10 0 1 1 8 2.83",
            key: "k2fpak"
        }
    ],
    [
        "path",
        {
            d: "M22 12A10 10 0 0 0 12 2v10z",
            key: "1rfc4y"
        }
    ]
]);
const PiggyBank = createReactComponent("PiggyBank", [
    [
        "path",
        {
            d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",
            key: "uf6l00"
        }
    ],
    [
        "path",
        {
            d: "M2 9v1c0 1.1.9 2 2 2h1",
            key: "nm575m"
        }
    ],
    [
        "path",
        {
            d: "M16 11h0",
            key: "k2aug8"
        }
    ]
]);
const Pilcrow = createReactComponent("Pilcrow", [
    [
        "path",
        {
            d: "M13 4v16",
            key: "8vvj80"
        }
    ],
    [
        "path",
        {
            d: "M17 4v16",
            key: "7dpous"
        }
    ],
    [
        "path",
        {
            d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13",
            key: "sh4n9v"
        }
    ]
]);
const PinOff = createReactComponent("PinOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12",
            y2: "22",
            key: "fb3qrx"
        }
    ],
    [
        "path",
        {
            d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",
            key: "13x2n8"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89",
            key: "reo3ki"
        }
    ]
]);
const Pin = createReactComponent("Pin", [
    [
        "line",
        {
            x1: "12",
            y1: "17",
            x2: "12",
            y2: "22",
            key: "fb3qrx"
        }
    ],
    [
        "path",
        {
            d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
            key: "13yl11"
        }
    ]
]);
const Pipette = createReactComponent("Pipette", [
    [
        "path",
        {
            d: "m2 22 1-1h3l9-9",
            key: "1sre89"
        }
    ],
    [
        "path",
        {
            d: "M3 21v-3l9-9",
            key: "hpe2y6"
        }
    ],
    [
        "path",
        {
            d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
            key: "196du1"
        }
    ]
]);
const Pizza = createReactComponent("Pizza", [
    [
        "path",
        {
            d: "M15 11h.01",
            key: "rns66s"
        }
    ],
    [
        "path",
        {
            d: "M11 15h.01",
            key: "k85uqc"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ],
    [
        "path",
        {
            d: "m2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z",
            key: "1akyvp"
        }
    ],
    [
        "path",
        {
            d: "M17 6c-6.29 1.47-9.43 5.13-11 11",
            key: "1dsok0"
        }
    ]
]);
const Plane = createReactComponent("Plane", [
    [
        "path",
        {
            d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
            key: "1v9wt8"
        }
    ]
]);
const PlayCircle = createReactComponent("PlayCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polygon",
        {
            points: "10 8 16 12 10 16 10 8",
            key: "1cimsy"
        }
    ]
]);
const Play = createReactComponent("Play", [
    [
        "polygon",
        {
            points: "5 3 19 12 5 21 5 3",
            key: "191637"
        }
    ]
]);
const Plug2 = createReactComponent("Plug2", [
    [
        "path",
        {
            d: "M9 2v6",
            key: "17ngun"
        }
    ],
    [
        "path",
        {
            d: "M15 2v6",
            key: "s7yy2p"
        }
    ],
    [
        "path",
        {
            d: "M12 17v5",
            key: "bb1du9"
        }
    ],
    [
        "path",
        {
            d: "M5 8h14",
            key: "pcz4l3"
        }
    ],
    [
        "path",
        {
            d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z",
            key: "nd4hoy"
        }
    ]
]);
const PlugZap = createReactComponent("PlugZap", [
    [
        "path",
        {
            d: "m13 2-2 2.5h3L12 7",
            key: "1me98u"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-3",
            key: "kmzjlo"
        }
    ],
    [
        "path",
        {
            d: "M10 13v-2.5",
            key: "1g2mrq"
        }
    ],
    [
        "path",
        {
            d: "M10 12.5v-2",
            key: "pcvzbb"
        }
    ],
    [
        "path",
        {
            d: "M14 12.5v-2",
            key: "qv1toj"
        }
    ],
    [
        "path",
        {
            d: "M16 15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2z",
            key: "17xmdd"
        }
    ]
]);
const Plug = createReactComponent("Plug", [
    [
        "path",
        {
            d: "M12 22v-5",
            key: "1ega77"
        }
    ],
    [
        "path",
        {
            d: "M9 7V2",
            key: "1r97uf"
        }
    ],
    [
        "path",
        {
            d: "M15 7V2",
            key: "1uo4jc"
        }
    ],
    [
        "path",
        {
            d: "M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z",
            key: "1xki7n"
        }
    ]
]);
const PlusCircle = createReactComponent("PlusCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
            key: "55jlg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
const PlusSquare = createReactComponent("PlusSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
            key: "55jlg"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
            key: "1myapg"
        }
    ]
]);
const Plus = createReactComponent("Plus", [
    [
        "line",
        {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19",
            key: "myz83a"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
            key: "1smlys"
        }
    ]
]);
const Pocket = createReactComponent("Pocket", [
    [
        "path",
        {
            d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
            key: "1mz881"
        }
    ],
    [
        "polyline",
        {
            points: "8 10 12 14 16 10",
            key: "w4mbv5"
        }
    ]
]);
const Podcast = createReactComponent("Podcast", [
    [
        "circle",
        {
            cx: "12",
            cy: "11",
            r: "1",
            key: "1gvufo"
        }
    ],
    [
        "path",
        {
            d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",
            key: "1n5fvv"
        }
    ],
    [
        "path",
        {
            d: "M8 14a5 5 0 1 1 8 0",
            key: "fc81rn"
        }
    ],
    [
        "path",
        {
            d: "M17 18.5a9 9 0 1 0-10 0",
            key: "jqtxkf"
        }
    ]
]);
const Pointer = createReactComponent("Pointer", [
    [
        "path",
        {
            d: "M22 14a8 8 0 0 1-8 8",
            key: "56vcr3"
        }
    ],
    [
        "path",
        {
            d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",
            key: "1pp0yd"
        }
    ],
    [
        "path",
        {
            d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",
            key: "u654g"
        }
    ],
    [
        "path",
        {
            d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",
            key: "1e2dtv"
        }
    ],
    [
        "path",
        {
            d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
            key: "g6ys72"
        }
    ]
]);
const PoundSterling = createReactComponent("PoundSterling", [
    [
        "path",
        {
            d: "M18 7c0-5.333-8-5.333-8 0",
            key: "1prm2n"
        }
    ],
    [
        "path",
        {
            d: "M10 7v14",
            key: "18tmcs"
        }
    ],
    [
        "path",
        {
            d: "M6 21h12",
            key: "4dkmi1"
        }
    ],
    [
        "path",
        {
            d: "M6 13h10",
            key: "ybwr4a"
        }
    ]
]);
const PowerOff = createReactComponent("PowerOff", [
    [
        "path",
        {
            d: "M18.36 6.64A9 9 0 0 1 20.77 15",
            key: "dxknvb"
        }
    ],
    [
        "path",
        {
            d: "M6.16 6.16a9 9 0 1 0 12.68 12.68",
            key: "1x7qb5"
        }
    ],
    [
        "path",
        {
            d: "M12 2v4",
            key: "3427ic"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
const Power = createReactComponent("Power", [
    [
        "path",
        {
            d: "M18.36 6.64a9 9 0 1 1-12.73 0",
            key: "phirl6"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "12",
            key: "1d1p48"
        }
    ]
]);
const Printer = createReactComponent("Printer", [
    [
        "polyline",
        {
            points: "6 9 6 2 18 2 18 9",
            key: "1306q4"
        }
    ],
    [
        "path",
        {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
            key: "143wyd"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "14",
            width: "12",
            height: "8",
            key: "emw7yt"
        }
    ]
]);
const Puzzle = createReactComponent("Puzzle", [
    [
        "path",
        {
            d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
            key: "i0oyt7"
        }
    ]
]);
const QrCode = createReactComponent("QrCode", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "5",
            height: "5",
            rx: "1",
            key: "fue5ao"
        }
    ],
    [
        "rect",
        {
            x: "16",
            y: "3",
            width: "5",
            height: "5",
            rx: "1",
            key: "1narh3"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "16",
            width: "5",
            height: "5",
            rx: "1",
            key: "1ovwlo"
        }
    ],
    [
        "path",
        {
            d: "M21 16h-3a2 2 0 0 0-2 2v3",
            key: "177gqh"
        }
    ],
    [
        "path",
        {
            d: "M21 21v.01",
            key: "ents32"
        }
    ],
    [
        "path",
        {
            d: "M12 7v3a2 2 0 0 1-2 2H7",
            key: "8crl2c"
        }
    ],
    [
        "path",
        {
            d: "M3 12h.01",
            key: "nlz23k"
        }
    ],
    [
        "path",
        {
            d: "M12 3h.01",
            key: "n36tog"
        }
    ],
    [
        "path",
        {
            d: "M12 16v.01",
            key: "133mhm"
        }
    ],
    [
        "path",
        {
            d: "M16 12h1",
            key: "1slzba"
        }
    ],
    [
        "path",
        {
            d: "M21 12v.01",
            key: "1lwtk9"
        }
    ],
    [
        "path",
        {
            d: "M12 21v-1",
            key: "1880an"
        }
    ]
]);
const Quote = createReactComponent("Quote", [
    [
        "path",
        {
            d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
            key: "4rm80e"
        }
    ],
    [
        "path",
        {
            d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
            key: "10za9r"
        }
    ]
]);
const RadioReceiver = createReactComponent("RadioReceiver", [
    [
        "path",
        {
            d: "M5 16v2",
            key: "g5qcv5"
        }
    ],
    [
        "path",
        {
            d: "M19 16v2",
            key: "1gbaio"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "8",
            width: "20",
            height: "8",
            rx: "2",
            key: "1xflse"
        }
    ],
    [
        "path",
        {
            d: "M18 12h0",
            key: "1ucjzd"
        }
    ]
]);
const Radio = createReactComponent("Radio", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ],
    [
        "path",
        {
            d: "M4.93 19.07a10 10 0 0 1 0-14.14",
            key: "r41b39"
        }
    ],
    [
        "path",
        {
            d: "M7.76 16.24a6 6 0 0 1-1.3-1.95 6 6 0 0 1 0-4.59 6 6 0 0 1 1.3-1.95",
            key: "1pc8et"
        }
    ],
    [
        "path",
        {
            d: "M16.24 7.76a6 6 0 0 1 1.3 2 6 6 0 0 1 0 4.59 6 6 0 0 1-1.3 1.95",
            key: "8dzjga"
        }
    ],
    [
        "path",
        {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14",
            key: "1kegas"
        }
    ]
]);
const RectangleHorizontal = createReactComponent("RectangleHorizontal", [
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2",
            key: "1wpnh2"
        }
    ]
]);
const RectangleVertical = createReactComponent("RectangleVertical", [
    [
        "rect",
        {
            x: "6",
            y: "2",
            width: "12",
            height: "20",
            rx: "2",
            key: "749fme"
        }
    ]
]);
const Recycle = createReactComponent("Recycle", [
    [
        "path",
        {
            d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
            key: "x6z5xu"
        }
    ],
    [
        "path",
        {
            d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
            key: "1x4zh5"
        }
    ],
    [
        "path",
        {
            d: "m14 16-3 3 3 3",
            key: "f6jyew"
        }
    ],
    [
        "path",
        {
            d: "M8.293 13.596 7.196 9.5 3.1 10.598",
            key: "wf1obh"
        }
    ],
    [
        "path",
        {
            d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
            key: "9tzpgr"
        }
    ],
    [
        "path",
        {
            d: "m13.378 9.633 4.096 1.098 1.097-4.096",
            key: "1oe83g"
        }
    ]
]);
const Redo2 = createReactComponent("Redo2", [
    [
        "path",
        {
            d: "m15 14 5-5-5-5",
            key: "12vg1m"
        }
    ],
    [
        "path",
        {
            d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",
            key: "19mnr4"
        }
    ]
]);
const Redo = createReactComponent("Redo", [
    [
        "path",
        {
            d: "M21 7v6h-6",
            key: "3ptur4"
        }
    ],
    [
        "path",
        {
            d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",
            key: "1kgawr"
        }
    ]
]);
const RefreshCcw = createReactComponent("RefreshCcw", [
    [
        "path",
        {
            d: "M3 2v6h6",
            key: "18ldww"
        }
    ],
    [
        "path",
        {
            d: "M21 12A9 9 0 0 0 6 5.3L3 8",
            key: "1pbrqz"
        }
    ],
    [
        "path",
        {
            d: "M21 22v-6h-6",
            key: "usdfbe"
        }
    ],
    [
        "path",
        {
            d: "M3 12a9 9 0 0 0 15 6.7l3-2.7",
            key: "1hosoe"
        }
    ]
]);
const RefreshCw = createReactComponent("RefreshCw", [
    [
        "path",
        {
            d: "M21 2v6h-6",
            key: "1lwg0q"
        }
    ],
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 15-6.7L21 8",
            key: "vaktt2"
        }
    ],
    [
        "path",
        {
            d: "M3 22v-6h6",
            key: "6llvyv"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-15 6.7L3 16",
            key: "i52hsp"
        }
    ]
]);
const Refrigerator = createReactComponent("Refrigerator", [
    [
        "path",
        {
            d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
            key: "fpq118"
        }
    ],
    [
        "path",
        {
            d: "M5 10h14",
            key: "elsbfy"
        }
    ],
    [
        "path",
        {
            d: "M15 7v6",
            key: "1nx30x"
        }
    ]
]);
const Regex = createReactComponent("Regex", [
    [
        "path",
        {
            d: "M17 3v10",
            key: "15fgeh"
        }
    ],
    [
        "path",
        {
            d: "m12.67 5.5 8.66 5",
            key: "1gpheq"
        }
    ],
    [
        "path",
        {
            d: "m12.67 10.5 8.66-5",
            key: "1dkfa6"
        }
    ],
    [
        "path",
        {
            d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",
            key: "swwfx4"
        }
    ]
]);
const Repeat1 = createReactComponent("Repeat1", [
    [
        "path",
        {
            d: "m17 2 4 4-4 4",
            key: "nntrym"
        }
    ],
    [
        "path",
        {
            d: "M3 11v-1a4 4 0 0 1 4-4h14",
            key: "84bu3i"
        }
    ],
    [
        "path",
        {
            d: "m7 22-4-4 4-4",
            key: "1wqhfi"
        }
    ],
    [
        "path",
        {
            d: "M21 13v1a4 4 0 0 1-4 4H3",
            key: "1rx37r"
        }
    ],
    [
        "path",
        {
            d: "M11 10h1v4",
            key: "70cz1p"
        }
    ]
]);
const Repeat = createReactComponent("Repeat", [
    [
        "path",
        {
            d: "m17 2 4 4-4 4",
            key: "nntrym"
        }
    ],
    [
        "path",
        {
            d: "M3 11v-1a4 4 0 0 1 4-4h14",
            key: "84bu3i"
        }
    ],
    [
        "path",
        {
            d: "m7 22-4-4 4-4",
            key: "1wqhfi"
        }
    ],
    [
        "path",
        {
            d: "M21 13v1a4 4 0 0 1-4 4H3",
            key: "1rx37r"
        }
    ]
]);
const ReplyAll = createReactComponent("ReplyAll", [
    [
        "polyline",
        {
            points: "7 17 2 12 7 7",
            key: "t83bqg"
        }
    ],
    [
        "polyline",
        {
            points: "12 17 7 12 12 7",
            key: "1g4ajm"
        }
    ],
    [
        "path",
        {
            d: "M22 18v-2a4 4 0 0 0-4-4H7",
            key: "1fcyog"
        }
    ]
]);
const Reply = createReactComponent("Reply", [
    [
        "polyline",
        {
            points: "9 17 4 12 9 7",
            key: "hvgpf2"
        }
    ],
    [
        "path",
        {
            d: "M20 18v-2a4 4 0 0 0-4-4H4",
            key: "5vmcpk"
        }
    ]
]);
const Rewind = createReactComponent("Rewind", [
    [
        "polygon",
        {
            points: "11 19 2 12 11 5 11 19",
            key: "14yba5"
        }
    ],
    [
        "polygon",
        {
            points: "22 19 13 12 22 5 22 19",
            key: "1pi1cj"
        }
    ]
]);
const Rocket = createReactComponent("Rocket", [
    [
        "path",
        {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }
    ],
    [
        "path",
        {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }
    ]
]);
const RockingChair = createReactComponent("RockingChair", [
    [
        "polyline",
        {
            points: "3.5 2 6.5 12.5 18 12.5",
            key: "y3iy52"
        }
    ],
    [
        "line",
        {
            x1: "9.5",
            y1: "12.5",
            x2: "5.5",
            y2: "20",
            key: "ivgihp"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "12.5",
            x2: "18.5",
            y2: "20",
            key: "1palb4"
        }
    ],
    [
        "path",
        {
            d: "M2.75 18a13 13 0 0 0 18.5 0",
            key: "1nquas"
        }
    ]
]);
const Rotate3d = createReactComponent("Rotate3d", [
    [
        "path",
        {
            d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
            key: "10n0gc"
        }
    ],
    [
        "path",
        {
            d: "m15.194 13.707 3.814 1.86-1.86 3.814",
            key: "16shm9"
        }
    ],
    [
        "path",
        {
            d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
            key: "1lxi77"
        }
    ]
]);
const RotateCcw = createReactComponent("RotateCcw", [
    [
        "path",
        {
            d: "M3 2v6h6",
            key: "18ldww"
        }
    ],
    [
        "path",
        {
            d: "M3 13a9 9 0 1 0 3-7.7L3 8",
            key: "aahkch"
        }
    ]
]);
const RotateCw = createReactComponent("RotateCw", [
    [
        "path",
        {
            d: "M21 2v6h-6",
            key: "1lwg0q"
        }
    ],
    [
        "path",
        {
            d: "M21 13a9 9 0 1 1-3-7.7L21 8",
            key: "vix499"
        }
    ]
]);
const Rss = createReactComponent("Rss", [
    [
        "path",
        {
            d: "M4 11a9 9 0 0 1 9 9",
            key: "pv89mb"
        }
    ],
    [
        "path",
        {
            d: "M4 4a16 16 0 0 1 16 16",
            key: "k0647b"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "19",
            r: "1",
            key: "bfqh0e"
        }
    ]
]);
const Ruler = createReactComponent("Ruler", [
    [
        "path",
        {
            d: "M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z",
            key: "14xb44"
        }
    ],
    [
        "path",
        {
            d: "m7.5 10.5 2 2",
            key: "3h1c69"
        }
    ],
    [
        "path",
        {
            d: "m10.5 7.5 2 2",
            key: "1lvsmz"
        }
    ],
    [
        "path",
        {
            d: "m13.5 4.5 2 2",
            key: "1i616n"
        }
    ],
    [
        "path",
        {
            d: "m4.5 13.5 2 2",
            key: "16iojn"
        }
    ]
]);
const RussianRuble = createReactComponent("RussianRuble", [
    [
        "path",
        {
            d: "M14 11c5.333 0 5.333-8 0-8",
            key: "92e629"
        }
    ],
    [
        "path",
        {
            d: "M6 11h8",
            key: "1cr2u4"
        }
    ],
    [
        "path",
        {
            d: "M6 15h8",
            key: "1y8f6l"
        }
    ],
    [
        "path",
        {
            d: "M9 21V3",
            key: "1jd2g6"
        }
    ],
    [
        "path",
        {
            d: "M9 3h5",
            key: "8bgvcw"
        }
    ]
]);
const Sailboat = createReactComponent("Sailboat", [
    [
        "path",
        {
            d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",
            key: "1404fh"
        }
    ],
    [
        "path",
        {
            d: "M21 14 10 2 3 14h18Z",
            key: "1nzg7v"
        }
    ],
    [
        "path",
        {
            d: "M10 2v16",
            key: "1labyt"
        }
    ]
]);
const Save = createReactComponent("Save", [
    [
        "path",
        {
            d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
            key: "1owoqh"
        }
    ],
    [
        "polyline",
        {
            points: "17 21 17 13 7 13 7 21",
            key: "1md35c"
        }
    ],
    [
        "polyline",
        {
            points: "7 3 7 8 15 8",
            key: "8nz8an"
        }
    ]
]);
const Scale3d = createReactComponent("Scale3d", [
    [
        "path",
        {
            d: "M5 7v12h12",
            key: "vtaa4r"
        }
    ],
    [
        "path",
        {
            d: "m5 19 6-6",
            key: "jh6hbb"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "4",
            height: "4",
            rx: "1",
            key: "1qeirs"
        }
    ],
    [
        "rect",
        {
            x: "17",
            y: "17",
            width: "4",
            height: "4",
            rx: "1",
            key: "b22pg0"
        }
    ]
]);
const Scale = createReactComponent("Scale", [
    [
        "path",
        {
            d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "7g6ntu"
        }
    ],
    [
        "path",
        {
            d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "ijws7r"
        }
    ],
    [
        "path",
        {
            d: "M7 21h10",
            key: "1b0cd5"
        }
    ],
    [
        "path",
        {
            d: "M12 3v18",
            key: "108xh3"
        }
    ],
    [
        "path",
        {
            d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
            key: "3gwbw2"
        }
    ]
]);
const Scaling = createReactComponent("Scaling", [
    [
        "path",
        {
            d: "M21 3 9 15",
            key: "15kdhq"
        }
    ],
    [
        "path",
        {
            d: "M12 3H3v18h18v-9",
            key: "8suug0"
        }
    ],
    [
        "path",
        {
            d: "M16 3h5v5",
            key: "1806ms"
        }
    ],
    [
        "path",
        {
            d: "M14 15H9v-5",
            key: "pi4jk9"
        }
    ]
]);
const ScanFace = createReactComponent("ScanFace", [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ],
    [
        "path",
        {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "path",
        {
            d: "M9 9h.01",
            key: "1q5me6"
        }
    ],
    [
        "path",
        {
            d: "M15 9h.01",
            key: "x1ddxp"
        }
    ]
]);
const ScanLine = createReactComponent("ScanLine", [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "12",
            x2: "17",
            y2: "12",
            key: "bc9tui"
        }
    ]
]);
const Scan = createReactComponent("Scan", [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ]
]);
const Scissors = createReactComponent("Scissors", [
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "4",
            x2: "8.12",
            y2: "15.88",
            key: "3cwkde"
        }
    ],
    [
        "line",
        {
            x1: "14.47",
            y1: "14.48",
            x2: "20",
            y2: "20",
            key: "1keerz"
        }
    ],
    [
        "line",
        {
            x1: "8.12",
            y1: "8.12",
            x2: "12",
            y2: "12",
            key: "spxzcb"
        }
    ]
]);
const ScreenShareOff = createReactComponent("ScreenShareOff", [
    [
        "path",
        {
            d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
            key: "i8wdob"
        }
    ],
    [
        "path",
        {
            d: "M8 21h8",
            key: "1ev6f3"
        }
    ],
    [
        "path",
        {
            d: "M12 17v4",
            key: "1riwvh"
        }
    ],
    [
        "path",
        {
            d: "m22 3-5 5",
            key: "12jva0"
        }
    ],
    [
        "path",
        {
            d: "m17 3 5 5",
            key: "k36vhe"
        }
    ]
]);
const ScreenShare = createReactComponent("ScreenShare", [
    [
        "path",
        {
            d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
            key: "i8wdob"
        }
    ],
    [
        "path",
        {
            d: "M8 21h8",
            key: "1ev6f3"
        }
    ],
    [
        "path",
        {
            d: "M12 17v4",
            key: "1riwvh"
        }
    ],
    [
        "path",
        {
            d: "m17 8 5-5",
            key: "fqif7o"
        }
    ],
    [
        "path",
        {
            d: "M17 3h5v5",
            key: "1o3tu8"
        }
    ]
]);
const Scroll = createReactComponent("Scroll", [
    [
        "path",
        {
            d: "M10 17v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3h3",
            key: "1knuaj"
        }
    ],
    [
        "path",
        {
            d: "M22 17v2a2 2 0 0 1-2 2H8",
            key: "62edg8"
        }
    ],
    [
        "path",
        {
            d: "M19 17V5a2 2 0 0 0-2-2H4",
            key: "zz82l3"
        }
    ],
    [
        "path",
        {
            d: "M22 17H10",
            key: "1dr9mz"
        }
    ]
]);
const Search = createReactComponent("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
            key: "1p50m8"
        }
    ]
]);
const Send = createReactComponent("Send", [
    [
        "line",
        {
            x1: "22",
            y1: "2",
            x2: "11",
            y2: "13",
            key: "10auo0"
        }
    ],
    [
        "polygon",
        {
            points: "22 2 15 22 11 13 2 9 22 2",
            key: "12uapv"
        }
    ]
]);
const SeparatorHorizontal = createReactComponent("SeparatorHorizontal", [
    [
        "line",
        {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12",
            key: "1aui40"
        }
    ],
    [
        "polyline",
        {
            points: "8 8 12 4 16 8",
            key: "zo8t4w"
        }
    ],
    [
        "polyline",
        {
            points: "16 16 12 20 8 16",
            key: "1oyrid"
        }
    ]
]);
const SeparatorVertical = createReactComponent("SeparatorVertical", [
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "21",
            key: "essbwb"
        }
    ],
    [
        "polyline",
        {
            points: "8 8 4 12 8 16",
            key: "bnfmv4"
        }
    ],
    [
        "polyline",
        {
            points: "16 16 20 12 16 8",
            key: "u90052"
        }
    ]
]);
const ServerCog = createReactComponent("ServerCog", [
    [
        "path",
        {
            d: "M5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1",
            key: "1qm4no"
        }
    ],
    [
        "path",
        {
            d: "M5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1",
            key: "1lpaho"
        }
    ],
    [
        "path",
        {
            d: "M6 6h.01",
            key: "1utrut"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "M12 8v1",
            key: "1rj8u4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v1",
            key: "1ovrzm"
        }
    ],
    [
        "path",
        {
            d: "M16 12h-1",
            key: "1qpdyp"
        }
    ],
    [
        "path",
        {
            d: "M9 12H8",
            key: "1l15iv"
        }
    ],
    [
        "path",
        {
            d: "m15 9-.88.88",
            key: "3hwatj"
        }
    ],
    [
        "path",
        {
            d: "M9.88 14.12 9 15",
            key: "13ldc9"
        }
    ],
    [
        "path",
        {
            d: "m15 15-.88-.88",
            key: "45priv"
        }
    ],
    [
        "path",
        {
            d: "M9.88 9.88 9 9",
            key: "1ladhj"
        }
    ]
]);
const ServerCrash = createReactComponent("ServerCrash", [
    [
        "path",
        {
            d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
            key: "4b9dqc"
        }
    ],
    [
        "path",
        {
            d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
            key: "22nnkd"
        }
    ],
    [
        "path",
        {
            d: "M6 6h.01",
            key: "1utrut"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "path",
        {
            d: "m13 6-4 6h6l-4 6",
            key: "14hqih"
        }
    ]
]);
const ServerOff = createReactComponent("ServerOff", [
    [
        "path",
        {
            d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",
            key: "bt2siv"
        }
    ],
    [
        "path",
        {
            d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",
            key: "1hjrv1"
        }
    ],
    [
        "path",
        {
            d: "M22 17v-1a2 2 0 0 0-2-2h-1",
            key: "1iynyr"
        }
    ],
    [
        "path",
        {
            d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",
            key: "161ggg"
        }
    ],
    [
        "path",
        {
            d: "M6 18h.01",
            key: "uhywen"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
const Server = createReactComponent("Server", [
    [
        "rect",
        {
            x: "2",
            y: "2",
            width: "20",
            height: "8",
            rx: "2",
            ry: "2",
            key: "e1v5fq"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "14",
            width: "20",
            height: "8",
            rx: "2",
            ry: "2",
            key: "10c4lq"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "6",
            x2: "6.01",
            y2: "6",
            key: "1g0o6g"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "18",
            x2: "6.01",
            y2: "18",
            key: "y2j7fo"
        }
    ]
]);
const Settings2 = createReactComponent("Settings2", [
    [
        "path",
        {
            d: "M20 7h-9",
            key: "3s1dr2"
        }
    ],
    [
        "path",
        {
            d: "M14 17H5",
            key: "gfn3mx"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "3",
            key: "18b49y"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "7",
            r: "3",
            key: "dfmy0x"
        }
    ]
]);
const Settings = createReactComponent("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
const Share2 = createReactComponent("Share2", [
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }
    ],
    [
        "line",
        {
            x1: "8.59",
            y1: "13.51",
            x2: "15.42",
            y2: "17.49",
            key: "10dsx0"
        }
    ],
    [
        "line",
        {
            x1: "15.41",
            y1: "6.51",
            x2: "8.59",
            y2: "10.49",
            key: "1qn9hm"
        }
    ]
]);
const Share = createReactComponent("Share", [
    [
        "path",
        {
            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
            key: "1b2hhj"
        }
    ],
    [
        "polyline",
        {
            points: "16 6 12 2 8 6",
            key: "m901s6"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "15",
            key: "1sxkij"
        }
    ]
]);
const Sheet = createReactComponent("Sheet", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "1xojw2"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9",
            y2: "21",
            key: "x5ianl"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15",
            y2: "21",
            key: "13a17d"
        }
    ]
]);
const ShieldAlert = createReactComponent("ShieldAlert", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ],
    [
        "path",
        {
            d: "M12 8v4",
            key: "1got3b"
        }
    ],
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ]
]);
const ShieldCheck = createReactComponent("ShieldCheck", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
const ShieldClose = createReactComponent("ShieldClose", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ],
    [
        "line",
        {
            x1: "9.5",
            y1: "9",
            x2: "14.5",
            y2: "14",
            key: "154127"
        }
    ],
    [
        "line",
        {
            x1: "14.5",
            y1: "9",
            x2: "9.5",
            y2: "14",
            key: "1rm6h8"
        }
    ]
]);
const ShieldOff = createReactComponent("ShieldOff", [
    [
        "path",
        {
            d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18",
            key: "ungvgc"
        }
    ],
    [
        "path",
        {
            d: "M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38",
            key: "1qf5yw"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Shield = createReactComponent("Shield", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            key: "3xmgem"
        }
    ]
]);
const Shirt = createReactComponent("Shirt", [
    [
        "path",
        {
            d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
            key: "1wgbhj"
        }
    ]
]);
const ShoppingBag = createReactComponent("ShoppingBag", [
    [
        "path",
        {
            d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
            key: "14a4hr"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1tp2lp"
        }
    ],
    [
        "path",
        {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }
    ]
]);
const ShoppingCart = createReactComponent("ShoppingCart", [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
]);
const Shovel = createReactComponent("Shovel", [
    [
        "path",
        {
            d: "M2 22v-5l5-5 5 5-5 5z",
            key: "1fh25c"
        }
    ],
    [
        "path",
        {
            d: "M9.5 14.5 16 8",
            key: "1smz5x"
        }
    ],
    [
        "path",
        {
            d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",
            key: "1q8uv5"
        }
    ]
]);
const ShowerHead = createReactComponent("ShowerHead", [
    [
        "path",
        {
            d: "m4 4 2.5 2.5",
            key: "uv2vmf"
        }
    ],
    [
        "path",
        {
            d: "M13.5 6.5a4.95 4.95 0 0 0-7 7",
            key: "frdkwv"
        }
    ],
    [
        "path",
        {
            d: "M15 5 5 15",
            key: "1ag8rq"
        }
    ],
    [
        "path",
        {
            d: "M14 17v.01",
            key: "eokfpp"
        }
    ],
    [
        "path",
        {
            d: "M10 16v.01",
            key: "14uyyl"
        }
    ],
    [
        "path",
        {
            d: "M13 13v.01",
            key: "1v1k97"
        }
    ],
    [
        "path",
        {
            d: "M16 10v.01",
            key: "5169yg"
        }
    ],
    [
        "path",
        {
            d: "M11 20v.01",
            key: "cj92p8"
        }
    ],
    [
        "path",
        {
            d: "M17 14v.01",
            key: "11cswd"
        }
    ],
    [
        "path",
        {
            d: "M20 11v.01",
            key: "19e0od"
        }
    ]
]);
const Shrink = createReactComponent("Shrink", [
    [
        "path",
        {
            d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
            key: "17vawe"
        }
    ],
    [
        "path",
        {
            d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
            key: "chjx8e"
        }
    ],
    [
        "path",
        {
            d: "M15 4.2V9m0 0h4.8M15 9l6-6",
            key: "lav6yq"
        }
    ],
    [
        "path",
        {
            d: "M9 4.2V9m0 0H4.2M9 9 3 3",
            key: "1pxi2q"
        }
    ]
]);
const Shrub = createReactComponent("Shrub", [
    [
        "path",
        {
            d: "M12 22v-7l-2-2",
            key: "eqv9mc"
        }
    ],
    [
        "path",
        {
            d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",
            key: "12jcau"
        }
    ],
    [
        "path",
        {
            d: "m14 14-2 2",
            key: "847xa2"
        }
    ]
]);
const Shuffle = createReactComponent("Shuffle", [
    [
        "polyline",
        {
            points: "16 3 21 3 21 8",
            key: "11391h"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "20",
            x2: "21",
            y2: "3",
            key: "pnd031"
        }
    ],
    [
        "polyline",
        {
            points: "21 16 21 21 16 21",
            key: "1j0gwc"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "15",
            x2: "21",
            y2: "21",
            key: "ygtzor"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "4",
            x2: "9",
            y2: "9",
            key: "q17lez"
        }
    ]
]);
const SidebarClose = createReactComponent("SidebarClose", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m16 15-3-3 3-3",
            key: "14y99z"
        }
    ]
]);
const SidebarOpen = createReactComponent("SidebarOpen", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m14 9 3 3-3 3",
            key: "8010ee"
        }
    ]
]);
const Sidebar = createReactComponent("Sidebar", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "3",
            x2: "9",
            y2: "21",
            key: "nvcl17"
        }
    ]
]);
const Sigma = createReactComponent("Sigma", [
    [
        "path",
        {
            d: "M18 7V4H6l6 8-6 8h12v-3",
            key: "zis8ev"
        }
    ]
]);
const SignalHigh = createReactComponent("SignalHigh", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ],
    [
        "path",
        {
            d: "M12 20v-8",
            key: "i3yub9"
        }
    ],
    [
        "path",
        {
            d: "M17 20V8",
            key: "1tkaf5"
        }
    ]
]);
const SignalLow = createReactComponent("SignalLow", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ]
]);
const SignalMedium = createReactComponent("SignalMedium", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ],
    [
        "path",
        {
            d: "M12 20v-8",
            key: "i3yub9"
        }
    ]
]);
const SignalZero = createReactComponent("SignalZero", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ]
]);
const Signal = createReactComponent("Signal", [
    [
        "path",
        {
            d: "M2 20h.01",
            key: "4haj6o"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-4",
            key: "j294jx"
        }
    ],
    [
        "path",
        {
            d: "M12 20v-8",
            key: "i3yub9"
        }
    ],
    [
        "path",
        {
            d: "M17 20V8",
            key: "1tkaf5"
        }
    ],
    [
        "path",
        {
            d: "M22 4v16",
            key: "sih9yq"
        }
    ]
]);
const Siren = createReactComponent("Siren", [
    [
        "path",
        {
            d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z",
            key: "rmc51c"
        }
    ],
    [
        "path",
        {
            d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z",
            key: "yyvmjy"
        }
    ],
    [
        "path",
        {
            d: "M21 12h1",
            key: "jtio3y"
        }
    ],
    [
        "path",
        {
            d: "M18.5 4.5 18 5",
            key: "g5sp9y"
        }
    ],
    [
        "path",
        {
            d: "M2 12h1",
            key: "1uaihz"
        }
    ],
    [
        "path",
        {
            d: "M12 2v1",
            key: "11qlp1"
        }
    ],
    [
        "path",
        {
            d: "m4.929 4.929.707.707",
            key: "1i51kw"
        }
    ],
    [
        "path",
        {
            d: "M12 12v6",
            key: "3ahymv"
        }
    ]
]);
const SkipBack = createReactComponent("SkipBack", [
    [
        "polygon",
        {
            points: "19 20 9 12 19 4 19 20",
            key: "o2sva"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "19",
            x2: "5",
            y2: "5",
            key: "1qxvzh"
        }
    ]
]);
const SkipForward = createReactComponent("SkipForward", [
    [
        "polygon",
        {
            points: "5 4 15 12 5 20 5 4",
            key: "16p6eg"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "5",
            x2: "19",
            y2: "19",
            key: "5lndli"
        }
    ]
]);
const Skull = createReactComponent("Skull", [
    [
        "circle",
        {
            cx: "9",
            cy: "12",
            r: "1",
            key: "1vctgf"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "12",
            r: "1",
            key: "1tmaij"
        }
    ],
    [
        "path",
        {
            d: "M8 20v2h8v-2",
            key: "ded4og"
        }
    ],
    [
        "path",
        {
            d: "m12.5 17-.5-1-.5 1h1z",
            key: "3me087"
        }
    ],
    [
        "path",
        {
            d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",
            key: "xq9p5u"
        }
    ]
]);
const Slack = createReactComponent("Slack", [
    [
        "rect",
        {
            x: "13",
            y: "2",
            width: "3",
            height: "8",
            rx: "1.5",
            key: "134gbe"
        }
    ],
    [
        "path",
        {
            d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",
            key: "183iwg"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "14",
            width: "3",
            height: "8",
            rx: "1.5",
            key: "6p48jh"
        }
    ],
    [
        "path",
        {
            d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",
            key: "76g71w"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "13",
            width: "8",
            height: "3",
            rx: "1.5",
            key: "1gabf9"
        }
    ],
    [
        "path",
        {
            d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",
            key: "jc4sz0"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "8",
            width: "8",
            height: "3",
            rx: "1.5",
            key: "1bingn"
        }
    ],
    [
        "path",
        {
            d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",
            key: "16f3cl"
        }
    ]
]);
const Slash = createReactComponent("Slash", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "4.93",
            y1: "4.93",
            x2: "19.07",
            y2: "19.07",
            key: "bqqkff"
        }
    ]
]);
const Slice = createReactComponent("Slice", [
    [
        "path",
        {
            d: "m8 14-6 6h9v-3",
            key: "zo3j9a"
        }
    ],
    [
        "path",
        {
            d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",
            key: "1dzx0j"
        }
    ]
]);
const SlidersHorizontal = createReactComponent("SlidersHorizontal", [
    [
        "line",
        {
            x1: "21",
            y1: "4",
            x2: "14",
            y2: "4",
            key: "ujuyh9"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "4",
            x2: "3",
            y2: "4",
            key: "5ejmvt"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "12",
            x2: "12",
            y2: "12",
            key: "inadxn"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "12",
            x2: "3",
            y2: "12",
            key: "apa8u8"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "20",
            x2: "16",
            y2: "20",
            key: "w4k2j3"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "3",
            y2: "20",
            key: "15hqih"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "2",
            x2: "14",
            y2: "6",
            key: "19ksk4"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "10",
            x2: "8",
            y2: "14",
            key: "1cn0zn"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "18",
            x2: "16",
            y2: "22",
            key: "1vfncj"
        }
    ]
]);
const Sliders = createReactComponent("Sliders", [
    [
        "line",
        {
            x1: "4",
            y1: "21",
            x2: "4",
            y2: "14",
            key: "2cpl65"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "10",
            x2: "4",
            y2: "3",
            key: "1b26kg"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "21",
            x2: "12",
            y2: "12",
            key: "fxobwr"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "3",
            key: "bkspcw"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "21",
            x2: "20",
            y2: "16",
            key: "b7lt1r"
        }
    ],
    [
        "line",
        {
            x1: "20",
            y1: "12",
            x2: "20",
            y2: "3",
            key: "inamez"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "14",
            x2: "6",
            y2: "14",
            key: "tezuxb"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "8",
            x2: "14",
            y2: "8",
            key: "1w8tme"
        }
    ],
    [
        "line",
        {
            x1: "18",
            y1: "16",
            x2: "22",
            y2: "16",
            key: "1gnq8h"
        }
    ]
]);
const SmartphoneCharging = createReactComponent("SmartphoneCharging", [
    [
        "rect",
        {
            x: "5",
            y: "2",
            width: "14",
            height: "20",
            rx: "2",
            ry: "2",
            key: "1gcc4z"
        }
    ],
    [
        "path",
        {
            d: "M12.667 8 10 12h4l-2.667 4",
            key: "h9lk2d"
        }
    ]
]);
const Smartphone = createReactComponent("Smartphone", [
    [
        "rect",
        {
            x: "5",
            y: "2",
            width: "14",
            height: "20",
            rx: "2",
            ry: "2",
            key: "1gcc4z"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ]
]);
const SmilePlus = createReactComponent("SmilePlus", [
    [
        "path",
        {
            d: "M22 11v1a10 10 0 1 1-9-10",
            key: "ew0xw9"
        }
    ],
    [
        "path",
        {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ],
    [
        "path",
        {
            d: "M16 5h6",
            key: "1vod17"
        }
    ],
    [
        "path",
        {
            d: "M19 2v6",
            key: "4bpg5p"
        }
    ]
]);
const Smile = createReactComponent("Smile", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
            key: "141aaf"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
            key: "1cyg3o"
        }
    ]
]);
const Snowflake = createReactComponent("Snowflake", [
    [
        "line",
        {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
            key: "zvmn4p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
            key: "1k6o5o"
        }
    ],
    [
        "path",
        {
            d: "m20 16-4-4 4-4",
            key: "rquw4f"
        }
    ],
    [
        "path",
        {
            d: "m4 8 4 4-4 4",
            key: "12s3z9"
        }
    ],
    [
        "path",
        {
            d: "m16 4-4 4-4-4",
            key: "1tumq1"
        }
    ],
    [
        "path",
        {
            d: "m8 20 4-4 4 4",
            key: "9p200w"
        }
    ]
]);
const Sofa = createReactComponent("Sofa", [
    [
        "path",
        {
            d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",
            key: "1dgpiv"
        }
    ],
    [
        "path",
        {
            d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
            key: "u5qfb7"
        }
    ],
    [
        "path",
        {
            d: "M4 18v2",
            key: "jwo5n2"
        }
    ],
    [
        "path",
        {
            d: "M20 18v2",
            key: "1ar1qi"
        }
    ],
    [
        "path",
        {
            d: "M12 4v9",
            key: "oqhhn3"
        }
    ]
]);
const SortAsc = createReactComponent("SortAsc", [
    [
        "path",
        {
            d: "M11 11h4",
            key: "1iu023"
        }
    ],
    [
        "path",
        {
            d: "M11 15h7",
            key: "23lz64"
        }
    ],
    [
        "path",
        {
            d: "M11 19h10",
            key: "11t30w"
        }
    ],
    [
        "path",
        {
            d: "M9 7 6 4 3 7",
            key: "1s6vko"
        }
    ],
    [
        "path",
        {
            d: "M6 6v14",
            key: "1s15cj"
        }
    ]
]);
const SortDesc = createReactComponent("SortDesc", [
    [
        "path",
        {
            d: "M11 5h10",
            key: "1cz7ny"
        }
    ],
    [
        "path",
        {
            d: "M11 9h7",
            key: "13ra05"
        }
    ],
    [
        "path",
        {
            d: "M11 13h4",
            key: "1p7l4v"
        }
    ],
    [
        "path",
        {
            d: "m3 17 3 3 3-3",
            key: "d2bl7z"
        }
    ],
    [
        "path",
        {
            d: "M6 18V4",
            key: "20vmay"
        }
    ]
]);
const Speaker = createReactComponent("Speaker", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
            key: "152kg8"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "14",
            r: "4",
            key: "1jruaj"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "6",
            x2: "12.01",
            y2: "6",
            key: "fpk8as"
        }
    ]
]);
const Spline = createReactComponent("Spline", [
    [
        "path",
        {
            d: "M21 6V4c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z",
            key: "1alwvo"
        }
    ],
    [
        "path",
        {
            d: "M7 20v-2c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z",
            key: "f14zj6"
        }
    ],
    [
        "path",
        {
            d: "M5 17A12 12 0 0 1 17 5",
            key: "1okkup"
        }
    ]
]);
const Sprout = createReactComponent("Sprout", [
    [
        "path",
        {
            d: "M7 20h10",
            key: "e6iznv"
        }
    ],
    [
        "path",
        {
            d: "M10 20c5.5-2.5.8-6.4 3-10",
            key: "161w41"
        }
    ],
    [
        "path",
        {
            d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
            key: "9gtqwd"
        }
    ],
    [
        "path",
        {
            d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
            key: "bkxnd2"
        }
    ]
]);
const Square = createReactComponent("Square", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ]
]);
const StarHalf = createReactComponent("StarHalf", [
    [
        "path",
        {
            d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",
            key: "nare05"
        }
    ]
]);
const StarOff = createReactComponent("StarOff", [
    [
        "path",
        {
            d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",
            key: "16m0ql"
        }
    ],
    [
        "path",
        {
            d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",
            key: "1vt8nq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Star = createReactComponent("Star", [
    [
        "polygon",
        {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
            key: "8f66p6"
        }
    ]
]);
const Stethoscope = createReactComponent("Stethoscope", [
    [
        "path",
        {
            d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
            key: "1jd90r"
        }
    ],
    [
        "path",
        {
            d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",
            key: "126ukv"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "10",
            r: "2",
            key: "ts1r5v"
        }
    ]
]);
const Sticker = createReactComponent("Sticker", [
    [
        "path",
        {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",
            key: "1wis1t"
        }
    ],
    [
        "path",
        {
            d: "M15 3v6h6",
            key: "edgan2"
        }
    ],
    [
        "path",
        {
            d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1",
            key: "1vvgv3"
        }
    ],
    [
        "path",
        {
            d: "M8 13h0",
            key: "jdup5h"
        }
    ],
    [
        "path",
        {
            d: "M16 13h0",
            key: "l4i2ga"
        }
    ]
]);
const StickyNote = createReactComponent("StickyNote", [
    [
        "path",
        {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",
            key: "1wis1t"
        }
    ],
    [
        "path",
        {
            d: "M15 3v6h6",
            key: "edgan2"
        }
    ]
]);
const StopCircle = createReactComponent("StopCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
            key: "o3kz5p"
        }
    ]
]);
const StretchHorizontal = createReactComponent("StretchHorizontal", [
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "6",
            rx: "2",
            key: "12sjy4"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "14",
            width: "20",
            height: "6",
            rx: "2",
            key: "lnm6uo"
        }
    ]
]);
const StretchVertical = createReactComponent("StretchVertical", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "6",
            height: "20",
            rx: "2",
            key: "1lym67"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "2",
            width: "6",
            height: "20",
            rx: "2",
            key: "b7v5o0"
        }
    ]
]);
const Strikethrough = createReactComponent("Strikethrough", [
    [
        "path",
        {
            d: "M16 4H9a3 3 0 0 0-2.83 4",
            key: "43sutm"
        }
    ],
    [
        "path",
        {
            d: "M14 12a4 4 0 0 1 0 8H6",
            key: "nlfj13"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "12",
            x2: "20",
            y2: "12",
            key: "1q6rtp"
        }
    ]
]);
const Subscript = createReactComponent("Subscript", [
    [
        "path",
        {
            d: "m4 5 8 8",
            key: "1eunvl"
        }
    ],
    [
        "path",
        {
            d: "m12 5-8 8",
            key: "1ah0jp"
        }
    ],
    [
        "path",
        {
            d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
            key: "e8ta8j"
        }
    ]
]);
const Subtitles = createReactComponent("Subtitles", [
    [
        "path",
        {
            d: "M7 13h4",
            key: "1m1xj0"
        }
    ],
    [
        "path",
        {
            d: "M15 13h2",
            key: "vgjay3"
        }
    ],
    [
        "path",
        {
            d: "M7 9h2",
            key: "1q072n"
        }
    ],
    [
        "path",
        {
            d: "M13 9h4",
            key: "o7fxw0"
        }
    ],
    [
        "path",
        {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z",
            key: "12yqn6"
        }
    ]
]);
const SunDim = createReactComponent("SunDim", [
    [
        "path",
        {
            d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            key: "1r4kox"
        }
    ],
    [
        "path",
        {
            d: "M12 4h.01",
            key: "1ujb9j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h.01",
            key: "1ykeid"
        }
    ],
    [
        "path",
        {
            d: "M12 20h.01",
            key: "zekei9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h.01",
            key: "158zrr"
        }
    ],
    [
        "path",
        {
            d: "M17.657 6.343h.01",
            key: "31pqzk"
        }
    ],
    [
        "path",
        {
            d: "M17.657 17.657h.01",
            key: "jehnf4"
        }
    ],
    [
        "path",
        {
            d: "M6.343 17.657h.01",
            key: "gdk6ow"
        }
    ],
    [
        "path",
        {
            d: "M6.343 6.343h.01",
            key: "1uurf0"
        }
    ]
]);
const SunMedium = createReactComponent("SunMedium", [
    [
        "path",
        {
            d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            key: "1r4kox"
        }
    ],
    [
        "path",
        {
            d: "M12 3v1",
            key: "1asbbs"
        }
    ],
    [
        "path",
        {
            d: "M12 20v1",
            key: "1wcdkc"
        }
    ],
    [
        "path",
        {
            d: "M3 12h1",
            key: "lp3yf2"
        }
    ],
    [
        "path",
        {
            d: "M20 12h1",
            key: "1vloll"
        }
    ],
    [
        "path",
        {
            d: "m18.364 5.636-.707.707",
            key: "1hakh0"
        }
    ],
    [
        "path",
        {
            d: "m6.343 17.657-.707.707",
            key: "18m9nf"
        }
    ],
    [
        "path",
        {
            d: "m5.636 5.636.707.707",
            key: "1xv1c5"
        }
    ],
    [
        "path",
        {
            d: "m17.657 17.657.707.707",
            key: "vl76zb"
        }
    ]
]);
const SunMoon = createReactComponent("SunMoon", [
    [
        "path",
        {
            d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            key: "1r4kox"
        }
    ],
    [
        "path",
        {
            d: "M12 8a2.828 2.828 0 1 0 4 4",
            key: "16688u"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
const SunSnow = createReactComponent("SunSnow", [
    [
        "path",
        {
            d: "M10 9a3 3 0 1 0 0 6",
            key: "6zmtdl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h1",
            key: "1uaihz"
        }
    ],
    [
        "path",
        {
            d: "M14 21V3",
            key: "1llu3z"
        }
    ],
    [
        "path",
        {
            d: "M10 4V3",
            key: "pkzwkn"
        }
    ],
    [
        "path",
        {
            d: "M10 21v-1",
            key: "1u8rkd"
        }
    ],
    [
        "path",
        {
            d: "m3.64 18.36.7-.7",
            key: "105rm9"
        }
    ],
    [
        "path",
        {
            d: "m4.34 6.34-.7-.7",
            key: "d3unjp"
        }
    ],
    [
        "path",
        {
            d: "M14 12h8",
            key: "4f43i9"
        }
    ],
    [
        "path",
        {
            d: "m17 4-3 3",
            key: "15jcng"
        }
    ],
    [
        "path",
        {
            d: "m14 17 3 3",
            key: "6tlq38"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3-3 3-3",
            key: "1nlnje"
        }
    ]
]);
const Sun = createReactComponent("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
const Sunrise = createReactComponent("Sunrise", [
    [
        "path",
        {
            d: "M12 2v8",
            key: "1q4o3n"
        }
    ],
    [
        "path",
        {
            d: "m4.93 10.93 1.41 1.41",
            key: "2a7f42"
        }
    ],
    [
        "path",
        {
            d: "M2 18h2",
            key: "j10viu"
        }
    ],
    [
        "path",
        {
            d: "M20 18h2",
            key: "wocana"
        }
    ],
    [
        "path",
        {
            d: "m19.07 10.93-1.41 1.41",
            key: "15zs5n"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ],
    [
        "path",
        {
            d: "m8 6 4-4 4 4",
            key: "ybng9g"
        }
    ],
    [
        "path",
        {
            d: "M16 18a4 4 0 0 0-8 0",
            key: "1lzouq"
        }
    ]
]);
const Sunset = createReactComponent("Sunset", [
    [
        "path",
        {
            d: "M12 10V2",
            key: "16sf7g"
        }
    ],
    [
        "path",
        {
            d: "m4.93 10.93 1.41 1.41",
            key: "2a7f42"
        }
    ],
    [
        "path",
        {
            d: "M2 18h2",
            key: "j10viu"
        }
    ],
    [
        "path",
        {
            d: "M20 18h2",
            key: "wocana"
        }
    ],
    [
        "path",
        {
            d: "m19.07 10.93-1.41 1.41",
            key: "15zs5n"
        }
    ],
    [
        "path",
        {
            d: "M22 22H2",
            key: "19qnx5"
        }
    ],
    [
        "path",
        {
            d: "m16 6-4 4-4-4",
            key: "6wukr"
        }
    ],
    [
        "path",
        {
            d: "M16 18a4 4 0 0 0-8 0",
            key: "1lzouq"
        }
    ]
]);
const Superscript = createReactComponent("Superscript", [
    [
        "path",
        {
            d: "m4 19 8-8",
            key: "hr47gm"
        }
    ],
    [
        "path",
        {
            d: "m12 19-8-8",
            key: "1dhhmo"
        }
    ],
    [
        "path",
        {
            d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
            key: "1dfcux"
        }
    ]
]);
const SwissFranc = createReactComponent("SwissFranc", [
    [
        "path",
        {
            d: "M10 21V3h8",
            key: "br2l0g"
        }
    ],
    [
        "path",
        {
            d: "M6 16h9",
            key: "2py0wn"
        }
    ],
    [
        "path",
        {
            d: "M10 9.5h7",
            key: "13dmhz"
        }
    ]
]);
const SwitchCamera = createReactComponent("SwitchCamera", [
    [
        "path",
        {
            d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",
            key: "mtk2lu"
        }
    ],
    [
        "path",
        {
            d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",
            key: "120jsl"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ],
    [
        "path",
        {
            d: "m18 22-3-3 3-3",
            key: "kgdoj7"
        }
    ],
    [
        "path",
        {
            d: "m6 2 3 3-3 3",
            key: "1fnbkv"
        }
    ]
]);
const Sword = createReactComponent("Sword", [
    [
        "polyline",
        {
            points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
            key: "1hfsw2"
        }
    ],
    [
        "line",
        {
            x1: "13",
            y1: "19",
            x2: "19",
            y2: "13",
            key: "7h9f57"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "16",
            x2: "20",
            y2: "20",
            key: "1b4zco"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "21",
            x2: "21",
            y2: "19",
            key: "df24kr"
        }
    ]
]);
const Swords = createReactComponent("Swords", [
    [
        "polyline",
        {
            points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
            key: "1hfsw2"
        }
    ],
    [
        "line",
        {
            x1: "13",
            y1: "19",
            x2: "19",
            y2: "13",
            key: "7h9f57"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "16",
            x2: "20",
            y2: "20",
            key: "1b4zco"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "21",
            x2: "21",
            y2: "19",
            key: "df24kr"
        }
    ],
    [
        "polyline",
        {
            points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
            key: "hbey2j"
        }
    ],
    [
        "line",
        {
            x1: "5",
            y1: "14",
            x2: "9",
            y2: "18",
            key: "acydkb"
        }
    ],
    [
        "line",
        {
            x1: "7",
            y1: "17",
            x2: "4",
            y2: "20",
            key: "1vmq9v"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "19",
            x2: "5",
            y2: "21",
            key: "139kw4"
        }
    ]
]);
const Syringe = createReactComponent("Syringe", [
    [
        "path",
        {
            d: "m18 2 4 4",
            key: "22kx64"
        }
    ],
    [
        "path",
        {
            d: "m17 7 3-3",
            key: "1w1zoj"
        }
    ],
    [
        "path",
        {
            d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
            key: "1exhtz"
        }
    ],
    [
        "path",
        {
            d: "m9 11 4 4",
            key: "rovt3i"
        }
    ],
    [
        "path",
        {
            d: "m5 19-3 3",
            key: "59f2uf"
        }
    ],
    [
        "path",
        {
            d: "m14 4 6 6",
            key: "yqp9t2"
        }
    ]
]);
const Table2 = createReactComponent("Table2", [
    [
        "path",
        {
            d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
            key: "gugj83"
        }
    ]
]);
const Table = createReactComponent("Table", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
            key: "1uch6j"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "15",
            x2: "21",
            y2: "15",
            key: "1xojw2"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "21",
            key: "essbwb"
        }
    ]
]);
const Tablet = createReactComponent("Tablet", [
    [
        "rect",
        {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
            key: "152kg8"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "18",
            x2: "12.01",
            y2: "18",
            key: "73g4n8"
        }
    ]
]);
const Tag = createReactComponent("Tag", [
    [
        "path",
        {
            d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",
            key: "14b2ls"
        }
    ],
    [
        "path",
        {
            d: "M7 7h.01",
            key: "7u93v4"
        }
    ]
]);
const Tags = createReactComponent("Tags", [
    [
        "path",
        {
            d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",
            key: "gt587u"
        }
    ],
    [
        "path",
        {
            d: "M6 9.01V9",
            key: "1flxpt"
        }
    ],
    [
        "path",
        {
            d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",
            key: "1cbfv1"
        }
    ]
]);
const Target = createReactComponent("Target", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ]
]);
const Tent = createReactComponent("Tent", [
    [
        "path",
        {
            d: "M19 20 10 4",
            key: "1ak541"
        }
    ],
    [
        "path",
        {
            d: "m5 20 9-16",
            key: "11dtj9"
        }
    ],
    [
        "path",
        {
            d: "M3 20h18",
            key: "1l19wn"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3 5",
            key: "1c5kej"
        }
    ],
    [
        "path",
        {
            d: "m12 15 3 5",
            key: "odkmhi"
        }
    ]
]);
const TerminalSquare = createReactComponent("TerminalSquare", [
    [
        "path",
        {
            d: "m7 11 2-2-2-2",
            key: "1lz0vl"
        }
    ],
    [
        "path",
        {
            d: "M11 13h4",
            key: "1p7l4v"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ]
]);
const Terminal = createReactComponent("Terminal", [
    [
        "polyline",
        {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "19",
            x2: "20",
            y2: "19",
            key: "fyyrwq"
        }
    ]
]);
const TextCursorInput = createReactComponent("TextCursorInput", [
    [
        "path",
        {
            d: "M13 20h-1a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1",
            key: "19sqy7"
        }
    ],
    [
        "path",
        {
            d: "M5 4h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5",
            key: "1etnvu"
        }
    ],
    [
        "path",
        {
            d: "M13.1 7.9h6.8A2.18 2.18 0 0 1 22 10v4a2.11 2.11 0 0 1-2.1 2.1h-6.8",
            key: "ebxlah"
        }
    ],
    [
        "path",
        {
            d: "M4.8 16.1h-.7A2.18 2.18 0 0 1 2 14v-4a2.18 2.18 0 0 1 2.1-2.1h.7",
            key: "1l3v11"
        }
    ]
]);
const TextCursor = createReactComponent("TextCursor", [
    [
        "path",
        {
            d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",
            key: "uvaxm9"
        }
    ],
    [
        "path",
        {
            d: "M7 22h1a4 4 0 0 0 4-4v-1",
            key: "11xy8d"
        }
    ],
    [
        "path",
        {
            d: "M7 2h1a4 4 0 0 1 4 4v1",
            key: "1uw06m"
        }
    ]
]);
const ThermometerSnowflake = createReactComponent("ThermometerSnowflake", [
    [
        "path",
        {
            d: "M2 12h10",
            key: "19562f"
        }
    ],
    [
        "path",
        {
            d: "M9 4v16",
            key: "81ygyz"
        }
    ],
    [
        "path",
        {
            d: "m3 9 3 3-3 3",
            key: "1sas0l"
        }
    ],
    [
        "path",
        {
            d: "M12 6 9 9 6 6",
            key: "pfrgxu"
        }
    ],
    [
        "path",
        {
            d: "m6 18 3-3 1.5 1.5",
            key: "1e277p"
        }
    ],
    [
        "path",
        {
            d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
            key: "iof6y5"
        }
    ]
]);
const ThermometerSun = createReactComponent("ThermometerSun", [
    [
        "path",
        {
            d: "M12 9a4 4 0 0 0-2 7.5",
            key: "1jvsq6"
        }
    ],
    [
        "path",
        {
            d: "M12 3v2",
            key: "1w22ol"
        }
    ],
    [
        "path",
        {
            d: "m6.6 18.4-1.4 1.4",
            key: "w2yidj"
        }
    ],
    [
        "path",
        {
            d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
            key: "iof6y5"
        }
    ],
    [
        "path",
        {
            d: "M4 13H2",
            key: "118le4"
        }
    ],
    [
        "path",
        {
            d: "M6.34 7.34 4.93 5.93",
            key: "1brd51"
        }
    ]
]);
const Thermometer = createReactComponent("Thermometer", [
    [
        "path",
        {
            d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
            key: "17jzev"
        }
    ]
]);
const ThumbsDown = createReactComponent("ThumbsDown", [
    [
        "path",
        {
            d: "M17 14V2",
            key: "8ymqnk"
        }
    ],
    [
        "path",
        {
            d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
            key: "s6e0r"
        }
    ]
]);
const ThumbsUp = createReactComponent("ThumbsUp", [
    [
        "path",
        {
            d: "M7 10v12",
            key: "1qc93n"
        }
    ],
    [
        "path",
        {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
            key: "y3tblf"
        }
    ]
]);
const Ticket = createReactComponent("Ticket", [
    [
        "path",
        {
            d: "M3 7v2a3 3 0 1 1 0 6v2c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z",
            key: "nswdcl"
        }
    ],
    [
        "path",
        {
            d: "M13 5v2",
            key: "dyzc3o"
        }
    ],
    [
        "path",
        {
            d: "M13 17v2",
            key: "1ont0d"
        }
    ],
    [
        "path",
        {
            d: "M13 11v2",
            key: "1wjjxi"
        }
    ]
]);
const TimerOff = createReactComponent("TimerOff", [
    [
        "path",
        {
            d: "M10 2h4",
            key: "n1abiw"
        }
    ],
    [
        "path",
        {
            d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",
            key: "10he05"
        }
    ],
    [
        "path",
        {
            d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",
            key: "15f7sh"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M12 12v-2",
            key: "fwoke6"
        }
    ]
]);
const TimerReset = createReactComponent("TimerReset", [
    [
        "path",
        {
            d: "M10 2h4",
            key: "n1abiw"
        }
    ],
    [
        "path",
        {
            d: "M12 14v-4",
            key: "1evpnu"
        }
    ],
    [
        "path",
        {
            d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",
            key: "1ts96g"
        }
    ],
    [
        "path",
        {
            d: "M9 17H4v5",
            key: "8t5av"
        }
    ]
]);
const Timer = createReactComponent("Timer", [
    [
        "line",
        {
            x1: "10",
            x2: "14",
            y1: "2",
            y2: "2",
            key: "14vaq8"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "15",
            y1: "14",
            y2: "11",
            key: "17fdiu"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "14",
            r: "8",
            key: "1e1u0o"
        }
    ]
]);
const ToggleLeft = createReactComponent("ToggleLeft", [
    [
        "rect",
        {
            x: "1",
            y: "5",
            width: "22",
            height: "14",
            rx: "7",
            ry: "7",
            key: "rq2fx9"
        }
    ],
    [
        "circle",
        {
            cx: "8",
            cy: "12",
            r: "3",
            key: "nylqfu"
        }
    ]
]);
const ToggleRight = createReactComponent("ToggleRight", [
    [
        "rect",
        {
            x: "1",
            y: "5",
            width: "22",
            height: "14",
            rx: "7",
            ry: "7",
            key: "rq2fx9"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "12",
            r: "3",
            key: "nkkl0l"
        }
    ]
]);
const Tornado = createReactComponent("Tornado", [
    [
        "path",
        {
            d: "M21 4H3",
            key: "1hwok0"
        }
    ],
    [
        "path",
        {
            d: "M18 8H6",
            key: "41n648"
        }
    ],
    [
        "path",
        {
            d: "M19 12H9",
            key: "1g4lpz"
        }
    ],
    [
        "path",
        {
            d: "M16 16h-6",
            key: "1j5d54"
        }
    ],
    [
        "path",
        {
            d: "M11 20H9",
            key: "39obr8"
        }
    ]
]);
const ToyBrick = createReactComponent("ToyBrick", [
    [
        "rect",
        {
            x: "3",
            y: "8",
            width: "18",
            height: "12",
            rx: "1",
            key: "1yob91"
        }
    ],
    [
        "path",
        {
            d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",
            key: "s0042v"
        }
    ],
    [
        "path",
        {
            d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",
            key: "9wmeh2"
        }
    ]
]);
const Train = createReactComponent("Train", [
    [
        "rect",
        {
            x: "4",
            y: "3",
            width: "16",
            height: "16",
            rx: "2",
            key: "u93jis"
        }
    ],
    [
        "path",
        {
            d: "M4 11h16",
            key: "mpoxn0"
        }
    ],
    [
        "path",
        {
            d: "M12 3v8",
            key: "1h2ygw"
        }
    ],
    [
        "path",
        {
            d: "m8 19-2 3",
            key: "13i0xs"
        }
    ],
    [
        "path",
        {
            d: "m18 22-2-3",
            key: "1p0ohu"
        }
    ],
    [
        "path",
        {
            d: "M8 15h0",
            key: "q9eq1f"
        }
    ],
    [
        "path",
        {
            d: "M16 15h0",
            key: "pzrbjg"
        }
    ]
]);
const Trash2 = createReactComponent("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            y1: "11",
            x2: "10",
            y2: "17",
            key: "m9v7hp"
        }
    ],
    [
        "line",
        {
            x1: "14",
            y1: "11",
            x2: "14",
            y2: "17",
            key: "23cpt9"
        }
    ]
]);
const Trash = createReactComponent("Trash", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ]
]);
const TreeDeciduous = createReactComponent("TreeDeciduous", [
    [
        "path",
        {
            d: "M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z",
            key: "12ivfl"
        }
    ],
    [
        "path",
        {
            d: "M12 19v3",
            key: "npa21l"
        }
    ]
]);
const TreePine = createReactComponent("TreePine", [
    [
        "path",
        {
            d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
            key: "cpyugq"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-3",
            key: "kmzjlo"
        }
    ]
]);
const Trees = createReactComponent("Trees", [
    [
        "path",
        {
            d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
            key: "yh07w9"
        }
    ],
    [
        "path",
        {
            d: "M7 16v6",
            key: "1a82de"
        }
    ],
    [
        "path",
        {
            d: "M13 19v3",
            key: "13sx9i"
        }
    ],
    [
        "path",
        {
            d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
            key: "1sj9kv"
        }
    ]
]);
const Trello = createReactComponent("Trello", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "7",
            width: "3",
            height: "9",
            key: "1xk0xp"
        }
    ],
    [
        "rect",
        {
            x: "14",
            y: "7",
            width: "3",
            height: "5",
            key: "1otkhn"
        }
    ]
]);
const TrendingDown = createReactComponent("TrendingDown", [
    [
        "polyline",
        {
            points: "22 17 13.5 8.5 8.5 13.5 2 7",
            key: "1r2t7k"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 22 17 22 11",
            key: "11uiuu"
        }
    ]
]);
const TrendingUp = createReactComponent("TrendingUp", [
    [
        "polyline",
        {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }
    ],
    [
        "polyline",
        {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }
    ]
]);
const Triangle = createReactComponent("Triangle", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
            key: "c3ski4"
        }
    ]
]);
const Trophy = createReactComponent("Trophy", [
    [
        "path",
        {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }
    ],
    [
        "path",
        {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }
    ]
]);
const Truck = createReactComponent("Truck", [
    [
        "path",
        {
            d: "M10 17h4V5H2v12h3",
            key: "1jq12e"
        }
    ],
    [
        "path",
        {
            d: "M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5",
            key: "1xb3ft"
        }
    ],
    [
        "path",
        {
            d: "M14 17h1",
            key: "nufu4t"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "17.5",
            r: "2.5",
            key: "a7aife"
        }
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "17.5",
            r: "2.5",
            key: "1mdrzq"
        }
    ]
]);
const Tv2 = createReactComponent("Tv2", [
    [
        "path",
        {
            d: "M7 21h10",
            key: "1b0cd5"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "3",
            width: "20",
            height: "14",
            rx: "2",
            key: "x3v2xh"
        }
    ]
]);
const Tv = createReactComponent("Tv", [
    [
        "rect",
        {
            x: "2",
            y: "7",
            width: "20",
            height: "15",
            rx: "2",
            ry: "2",
            key: "f237mn"
        }
    ],
    [
        "polyline",
        {
            points: "17 2 12 7 7 2",
            key: "11pgbg"
        }
    ]
]);
const Twitch = createReactComponent("Twitch", [
    [
        "path",
        {
            d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",
            key: "c0yzno"
        }
    ]
]);
const Twitter = createReactComponent("Twitter", [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
]);
const Type = createReactComponent("Type", [
    [
        "polyline",
        {
            points: "4 7 4 4 20 4 20 7",
            key: "1nosan"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "20",
            x2: "15",
            y2: "20",
            key: "10hqwk"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "4",
            x2: "12",
            y2: "20",
            key: "8v58sd"
        }
    ]
]);
const Umbrella = createReactComponent("Umbrella", [
    [
        "path",
        {
            d: "M22 12a9.92 9.92 0 0 0-3.24-6.41 10.12 10.12 0 0 0-13.52 0A9.92 9.92 0 0 0 2 12Z",
            key: "gyh82n"
        }
    ],
    [
        "path",
        {
            d: "M12 12v8a2 2 0 0 0 4 0",
            key: "ulpmoc"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "3",
            key: "7v6ckq"
        }
    ]
]);
const Underline = createReactComponent("Underline", [
    [
        "path",
        {
            d: "M6 4v6a6 6 0 0 0 12 0V4",
            key: "9kb039"
        }
    ],
    [
        "line",
        {
            x1: "4",
            y1: "20",
            x2: "20",
            y2: "20",
            key: "klhyhp"
        }
    ]
]);
const Undo2 = createReactComponent("Undo2", [
    [
        "path",
        {
            d: "M9 14 4 9l5-5",
            key: "102s5s"
        }
    ],
    [
        "path",
        {
            d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",
            key: "llx8ln"
        }
    ]
]);
const Undo = createReactComponent("Undo", [
    [
        "path",
        {
            d: "M3 7v6h6",
            key: "1v2h90"
        }
    ],
    [
        "path",
        {
            d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",
            key: "1r6uu6"
        }
    ]
]);
const Unlink2 = createReactComponent("Unlink2", [
    [
        "path",
        {
            d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",
            key: "1re2ne"
        }
    ]
]);
const Unlink = createReactComponent("Unlink", [
    [
        "path",
        {
            d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
            key: "yqzxt4"
        }
    ],
    [
        "path",
        {
            d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
            key: "4qinb0"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "5",
            key: "187dr9"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "8",
            x2: "5",
            y2: "8",
            key: "peo5ws"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "19",
            x2: "16",
            y2: "22",
            key: "6aelkz"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "16",
            x2: "22",
            y2: "16",
            key: "ln8io3"
        }
    ]
]);
const Unlock = createReactComponent("Unlock", [
    [
        "rect",
        {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2",
            key: "biyj2e"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 9.9-1",
            key: "1mm8w8"
        }
    ]
]);
const UploadCloud = createReactComponent("UploadCloud", [
    [
        "path",
        {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
            key: "1pljnt"
        }
    ],
    [
        "path",
        {
            d: "M12 12v9",
            key: "192myk"
        }
    ],
    [
        "path",
        {
            d: "m16 16-4-4-4 4",
            key: "119tzi"
        }
    ]
]);
const Upload = createReactComponent("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "15",
            key: "wktxj0"
        }
    ]
]);
const Usb = createReactComponent("Usb", [
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "1",
            key: "22iqad"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "7",
            r: "1",
            key: "dypaad"
        }
    ],
    [
        "path",
        {
            d: "M4 20 19 5",
            key: "15hogs"
        }
    ],
    [
        "path",
        {
            d: "m21 3-3 1 2 2 1-3Z",
            key: "ew8vct"
        }
    ],
    [
        "path",
        {
            d: "m10 7-5 5 2 5",
            key: "148pqf"
        }
    ],
    [
        "path",
        {
            d: "m10 14 5 2 4-4",
            key: "1ivjwr"
        }
    ],
    [
        "path",
        {
            d: "m18 12 1-1 1 1-1 1-1-1Z",
            key: "tus6kn"
        }
    ]
]);
const UserCheck = createReactComponent("UserCheck", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "polyline",
        {
            points: "16 11 18 13 22 9",
            key: "1pwet4"
        }
    ]
]);
const UserCog = createReactComponent("UserCog", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "11",
            r: "2",
            key: "1rxg02"
        }
    ],
    [
        "path",
        {
            d: "M19 8v1",
            key: "1iffrw"
        }
    ],
    [
        "path",
        {
            d: "M19 13v1",
            key: "z4xc62"
        }
    ],
    [
        "path",
        {
            d: "m21.6 9.5-.87.5",
            key: "6lxupl"
        }
    ],
    [
        "path",
        {
            d: "m17.27 12-.87.5",
            key: "1rwhxx"
        }
    ],
    [
        "path",
        {
            d: "m21.6 12.5-.87-.5",
            key: "agvc9a"
        }
    ],
    [
        "path",
        {
            d: "m17.27 10-.87-.5",
            key: "12d57s"
        }
    ]
]);
const UserMinus = createReactComponent("UserMinus", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "11",
            x2: "16",
            y2: "11",
            key: "8bk570"
        }
    ]
]);
const UserPlus = createReactComponent("UserPlus", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "19",
            y1: "8",
            x2: "19",
            y2: "14",
            key: "9s353q"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "11",
            x2: "16",
            y2: "11",
            key: "8bk570"
        }
    ]
]);
const UserX = createReactComponent("UserX", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "17",
            y1: "8",
            x2: "22",
            y2: "13",
            key: "10apcb"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "8",
            x2: "17",
            y2: "13",
            key: "1l8di5"
        }
    ]
]);
const User = createReactComponent("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
const Users = createReactComponent("Users", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "path",
        {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }
    ]
]);
const UtensilsCrossed = createReactComponent("UtensilsCrossed", [
    [
        "path",
        {
            d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
            key: "n7qcjb"
        }
    ],
    [
        "path",
        {
            d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
            key: "d0u48b"
        }
    ],
    [
        "path",
        {
            d: "m2.1 21.8 6.4-6.3",
            key: "yn04lh"
        }
    ],
    [
        "path",
        {
            d: "m19 5-7 7",
            key: "194lzd"
        }
    ]
]);
const Utensils = createReactComponent("Utensils", [
    [
        "path",
        {
            d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
            key: "cjf0a3"
        }
    ],
    [
        "path",
        {
            d: "M7 2v20",
            key: "1473qp"
        }
    ],
    [
        "path",
        {
            d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
            key: "1ogz0v"
        }
    ]
]);
const Vegan = createReactComponent("Vegan", [
    [
        "path",
        {
            d: "M2 2c4.056 3.007 9.232 9.337 10 20 .897-6.818 1.5-9.5 4-14",
            key: "eao96d"
        }
    ],
    [
        "path",
        {
            d: "M20.375 6.533A9.953 9.953 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c2.003 0 3.869.589 5.433 1.603",
            key: "fbotu5"
        }
    ],
    [
        "path",
        {
            d: "M17.104 4c-1.002 1.274-1.146 2.586-1.1 4 1.9-.1 3.003-.201 4.3-1.4 1.406-1.3 1.6-2.3 1.7-4.6-2.7.1-3.623.375-4.9 2Z",
            key: "14agoq"
        }
    ]
]);
const VenetianMask = createReactComponent("VenetianMask", [
    [
        "path",
        {
            d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",
            key: "1g6z3j"
        }
    ],
    [
        "path",
        {
            d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",
            key: "c2lwnf"
        }
    ],
    [
        "path",
        {
            d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",
            key: "njd9zo"
        }
    ]
]);
const Verified = createReactComponent("Verified", [
    [
        "path",
        {
            d: "M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z",
            key: "7kujkm"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
const VibrateOff = createReactComponent("VibrateOff", [
    [
        "path",
        {
            d: "m2 8 2 2-2 2 2 2-2 2",
            key: "sv1b1"
        }
    ],
    [
        "path",
        {
            d: "m22 8-2 2 2 2-2 2 2 2",
            key: "101i4y"
        }
    ],
    [
        "path",
        {
            d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",
            key: "1hbad5"
        }
    ],
    [
        "path",
        {
            d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34",
            key: "1x5tf0"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Vibrate = createReactComponent("Vibrate", [
    [
        "path",
        {
            d: "m2 8 2 2-2 2 2 2-2 2",
            key: "sv1b1"
        }
    ],
    [
        "path",
        {
            d: "m22 8-2 2 2 2-2 2 2 2",
            key: "101i4y"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "5",
            width: "8",
            height: "14",
            rx: "1",
            key: "bi6xeo"
        }
    ]
]);
const VideoOff = createReactComponent("VideoOff", [
    [
        "path",
        {
            d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",
            key: "ubwiq0"
        }
    ],
    [
        "path",
        {
            d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",
            key: "1l10zd"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Video = createReactComponent("Video", [
    [
        "path",
        {
            d: "m22 8-6 4 6 4V8Z",
            key: "50v9me"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            ry: "2",
            key: "14il7g"
        }
    ]
]);
const View = createReactComponent("View", [
    [
        "path",
        {
            d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",
            key: "vptub8"
        }
    ],
    [
        "path",
        {
            d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
            key: "10lhjs"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",
            key: "mrq65r"
        }
    ],
    [
        "path",
        {
            d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",
            key: "be3xqs"
        }
    ]
]);
const Voicemail = createReactComponent("Voicemail", [
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "4",
            key: "1ehtga"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "12",
            r: "4",
            key: "4vafl8"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "16",
            x2: "18",
            y2: "16",
            key: "1xgyj1"
        }
    ]
]);
const Volume1 = createReactComponent("Volume1", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ],
    [
        "path",
        {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
            key: "ltjumu"
        }
    ]
]);
const Volume2 = createReactComponent("Volume2", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ],
    [
        "path",
        {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
            key: "ltjumu"
        }
    ],
    [
        "path",
        {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14",
            key: "1kegas"
        }
    ]
]);
const VolumeX = createReactComponent("VolumeX", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ],
    [
        "line",
        {
            x1: "22",
            y1: "9",
            x2: "16",
            y2: "15",
            key: "3gspht"
        }
    ],
    [
        "line",
        {
            x1: "16",
            y1: "9",
            x2: "22",
            y2: "15",
            key: "2tltpt"
        }
    ]
]);
const Volume = createReactComponent("Volume", [
    [
        "polygon",
        {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
            key: "16drj5"
        }
    ]
]);
const Wallet = createReactComponent("Wallet", [
    [
        "path",
        {
            d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4",
            key: "st805m"
        }
    ],
    [
        "path",
        {
            d: "M4 6v12c0 1.1.9 2 2 2h14v-4",
            key: "16cu1e"
        }
    ],
    [
        "path",
        {
            d: "M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z",
            key: "lwd56p"
        }
    ]
]);
const Wand2 = createReactComponent("Wand2", [
    [
        "path",
        {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
            key: "1bcowg"
        }
    ],
    [
        "path",
        {
            d: "m14 7 3 3",
            key: "1r5n42"
        }
    ],
    [
        "path",
        {
            d: "M5 6v4",
            key: "ilb8ba"
        }
    ],
    [
        "path",
        {
            d: "M19 14v4",
            key: "blhpug"
        }
    ],
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ],
    [
        "path",
        {
            d: "M7 8H3",
            key: "zfb6yr"
        }
    ],
    [
        "path",
        {
            d: "M21 16h-4",
            key: "1cnmox"
        }
    ],
    [
        "path",
        {
            d: "M11 3H9",
            key: "1obp7u"
        }
    ]
]);
const Wand = createReactComponent("Wand", [
    [
        "path",
        {
            d: "M15 4V2",
            key: "z1p9b7"
        }
    ],
    [
        "path",
        {
            d: "M15 16v-2",
            key: "px0unx"
        }
    ],
    [
        "path",
        {
            d: "M8 9h2",
            key: "1g203m"
        }
    ],
    [
        "path",
        {
            d: "M20 9h2",
            key: "19tzq7"
        }
    ],
    [
        "path",
        {
            d: "M17.8 11.8 19 13",
            key: "yihg8r"
        }
    ],
    [
        "path",
        {
            d: "M15 9h0",
            key: "kg5t1u"
        }
    ],
    [
        "path",
        {
            d: "M17.8 6.2 19 5",
            key: "fd4us0"
        }
    ],
    [
        "path",
        {
            d: "m3 21 9-9",
            key: "1jfql5"
        }
    ],
    [
        "path",
        {
            d: "M12.2 6.2 11 5",
            key: "i3da3b"
        }
    ]
]);
const Watch = createReactComponent("Watch", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "polyline",
        {
            points: "12 10 12 12 13 13",
            key: "19dquz"
        }
    ],
    [
        "path",
        {
            d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
            key: "18k57s"
        }
    ],
    [
        "path",
        {
            d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
            key: "16ny36"
        }
    ]
]);
const Waves = createReactComponent("Waves", [
    [
        "path",
        {
            d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "knzxuh"
        }
    ],
    [
        "path",
        {
            d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "2jd2cc"
        }
    ],
    [
        "path",
        {
            d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "rd2r6e"
        }
    ]
]);
const Webcam = createReactComponent("Webcam", [
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "8",
            key: "1gshiw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ],
    [
        "path",
        {
            d: "M7 22h10",
            key: "10w4w3"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-4",
            key: "1utk9m"
        }
    ]
]);
const Webhook = createReactComponent("Webhook", [
    [
        "path",
        {
            d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
            key: "q3hayz"
        }
    ],
    [
        "path",
        {
            d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
            key: "1go1hn"
        }
    ],
    [
        "path",
        {
            d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
            key: "qlwsc0"
        }
    ]
]);
const WheatOff = createReactComponent("WheatOff", [
    [
        "path",
        {
            d: "m2 22 10-10",
            key: "28ilpk"
        }
    ],
    [
        "path",
        {
            d: "m16 8-1.17 1.17",
            key: "1qqm82"
        }
    ],
    [
        "path",
        {
            d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
            key: "1rdhi6"
        }
    ],
    [
        "path",
        {
            d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",
            key: "4wz8re"
        }
    ],
    [
        "path",
        {
            d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",
            key: "rves66"
        }
    ],
    [
        "path",
        {
            d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",
            key: "19rau1"
        }
    ],
    [
        "path",
        {
            d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
            key: "tc8ph9"
        }
    ],
    [
        "path",
        {
            d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
            key: "ak46r"
        }
    ],
    [
        "path",
        {
            d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
            key: "1tw520"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Wheat = createReactComponent("Wheat", [
    [
        "path",
        {
            d: "M2 22 16 8",
            key: "60hf96"
        }
    ],
    [
        "path",
        {
            d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
            key: "1rdhi6"
        }
    ],
    [
        "path",
        {
            d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
            key: "1sdzmb"
        }
    ],
    [
        "path",
        {
            d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
            key: "eoatbi"
        }
    ],
    [
        "path",
        {
            d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",
            key: "19rau1"
        }
    ],
    [
        "path",
        {
            d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
            key: "tc8ph9"
        }
    ],
    [
        "path",
        {
            d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
            key: "2m8kc5"
        }
    ],
    [
        "path",
        {
            d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
            key: "vex3ng"
        }
    ]
]);
const WifiOff = createReactComponent("WifiOff", [
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ],
    [
        "path",
        {
            d: "M8.5 16.5a5 5 0 0 1 7 0",
            key: "sej527"
        }
    ],
    [
        "path",
        {
            d: "M2 8.82a15 15 0 0 1 4.17-2.65",
            key: "11utq1"
        }
    ],
    [
        "path",
        {
            d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76",
            key: "hxefdu"
        }
    ],
    [
        "path",
        {
            d: "M16.85 11.25a10 10 0 0 1 2.22 1.68",
            key: "q734kn"
        }
    ],
    [
        "path",
        {
            d: "M5 13a10 10 0 0 1 5.24-2.76",
            key: "piq4yl"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12.01",
            y2: "20",
            key: "wbu7xg"
        }
    ]
]);
const Wifi = createReactComponent("Wifi", [
    [
        "path",
        {
            d: "M5 13a10 10 0 0 1 14 0",
            key: "6v8j51"
        }
    ],
    [
        "path",
        {
            d: "M8.5 16.5a5 5 0 0 1 7 0",
            key: "sej527"
        }
    ],
    [
        "path",
        {
            d: "M2 8.82a15 15 0 0 1 20 0",
            key: "dnpr2z"
        }
    ],
    [
        "line",
        {
            x1: "12",
            y1: "20",
            x2: "12.01",
            y2: "20",
            key: "wbu7xg"
        }
    ]
]);
const Wind = createReactComponent("Wind", [
    [
        "path",
        {
            d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",
            key: "1k4u03"
        }
    ],
    [
        "path",
        {
            d: "M9.6 4.6A2 2 0 1 1 11 8H2",
            key: "b7d0fd"
        }
    ],
    [
        "path",
        {
            d: "M12.6 19.4A2 2 0 1 0 14 16H2",
            key: "1p5cb3"
        }
    ]
]);
const WineOff = createReactComponent("WineOff", [
    [
        "path",
        {
            d: "M8 22h8",
            key: "rmew8v"
        }
    ],
    [
        "path",
        {
            d: "M7 10h3m7 0h-1.343",
            key: "v48bem"
        }
    ],
    [
        "path",
        {
            d: "M12 15v7",
            key: "t2xh3l"
        }
    ],
    [
        "path",
        {
            d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
            key: "1ymjlu"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Wine = createReactComponent("Wine", [
    [
        "path",
        {
            d: "M8 22h8",
            key: "rmew8v"
        }
    ],
    [
        "path",
        {
            d: "M7 10h10",
            key: "1101jm"
        }
    ],
    [
        "path",
        {
            d: "M12 15v7",
            key: "t2xh3l"
        }
    ],
    [
        "path",
        {
            d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",
            key: "10ffi3"
        }
    ]
]);
const WrapText = createReactComponent("WrapText", [
    [
        "line",
        {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
            key: "1tp2lp"
        }
    ],
    [
        "path",
        {
            d: "M3 12h15a3 3 0 1 1 0 6h-4",
            key: "1cl7v7"
        }
    ],
    [
        "polyline",
        {
            points: "16 16 14 18 16 20",
            key: "1jznyi"
        }
    ],
    [
        "line",
        {
            x1: "3",
            y1: "18",
            x2: "10",
            y2: "18",
            key: "16bh46"
        }
    ]
]);
const Wrench = createReactComponent("Wrench", [
    [
        "path",
        {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi"
        }
    ]
]);
const XCircle = createReactComponent("XCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
            key: "19zs77"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
            key: "10u9bu"
        }
    ]
]);
const XOctagon = createReactComponent("XOctagon", [
    [
        "polygon",
        {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
            key: "h1p8hx"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
            key: "19zs77"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
            key: "10u9bu"
        }
    ]
]);
const XSquare = createReactComponent("XSquare", [
    [
        "rect",
        {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
            key: "maln0c"
        }
    ],
    [
        "line",
        {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
            key: "10u9bu"
        }
    ],
    [
        "line",
        {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
            key: "19zs77"
        }
    ]
]);
const X = createReactComponent("X", [
    [
        "line",
        {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18",
            key: "1o5bob"
        }
    ],
    [
        "line",
        {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18",
            key: "z4dcbv"
        }
    ]
]);
const Youtube = createReactComponent("Youtube", [
    [
        "path",
        {
            d: "M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z",
            key: "1nqccg"
        }
    ],
    [
        "polygon",
        {
            points: "10 15 15 12 10 9",
            key: "1c7afu"
        }
    ]
]);
const ZapOff = createReactComponent("ZapOff", [
    [
        "polyline",
        {
            points: "12.41 6.75 13 2 10.57 4.92",
            key: "122m05"
        }
    ],
    [
        "polyline",
        {
            points: "18.57 12.91 21 10 15.66 10",
            key: "16r43o"
        }
    ],
    [
        "polyline",
        {
            points: "8 8 3 14 12 14 11 22 16 16",
            key: "tmh4bc"
        }
    ],
    [
        "line",
        {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            key: "1w4vcy"
        }
    ]
]);
const Zap = createReactComponent("Zap", [
    [
        "polygon",
        {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }
    ]
]);
const ZoomIn = createReactComponent("ZoomIn", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
            key: "1p50m8"
        }
    ],
    [
        "line",
        {
            x1: "11",
            y1: "8",
            x2: "11",
            y2: "14",
            key: "jw7mvq"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "11",
            x2: "14",
            y2: "11",
            key: "1nivud"
        }
    ]
]);
const ZoomOut = createReactComponent("ZoomOut", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
            key: "1p50m8"
        }
    ],
    [
        "line",
        {
            x1: "8",
            y1: "11",
            x2: "14",
            y2: "11",
            key: "1nivud"
        }
    ]
]);
__webpack_unused_export__ = Accessibility;
__webpack_unused_export__ = Activity;
__webpack_unused_export__ = AirVent;
__webpack_unused_export__ = Airplay;
__webpack_unused_export__ = AlarmCheck;
__webpack_unused_export__ = AlarmClock;
__webpack_unused_export__ = AlarmClockOff;
__webpack_unused_export__ = AlarmMinus;
__webpack_unused_export__ = AlarmPlus;
__webpack_unused_export__ = Album;
__webpack_unused_export__ = AlertCircle;
__webpack_unused_export__ = AlertOctagon;
__webpack_unused_export__ = AlertTriangle;
__webpack_unused_export__ = AlignCenter;
__webpack_unused_export__ = AlignCenterHorizontal;
__webpack_unused_export__ = AlignCenterVertical;
__webpack_unused_export__ = AlignEndHorizontal;
__webpack_unused_export__ = AlignEndVertical;
__webpack_unused_export__ = AlignHorizontalDistributeCenter;
__webpack_unused_export__ = AlignHorizontalDistributeEnd;
__webpack_unused_export__ = AlignHorizontalDistributeStart;
__webpack_unused_export__ = AlignHorizontalJustifyCenter;
__webpack_unused_export__ = AlignHorizontalJustifyEnd;
__webpack_unused_export__ = AlignHorizontalJustifyStart;
__webpack_unused_export__ = AlignHorizontalSpaceAround;
__webpack_unused_export__ = AlignHorizontalSpaceBetween;
__webpack_unused_export__ = AlignJustify;
__webpack_unused_export__ = AlignLeft;
__webpack_unused_export__ = AlignRight;
__webpack_unused_export__ = AlignStartHorizontal;
__webpack_unused_export__ = AlignStartVertical;
__webpack_unused_export__ = AlignVerticalDistributeCenter;
__webpack_unused_export__ = AlignVerticalDistributeEnd;
__webpack_unused_export__ = AlignVerticalDistributeStart;
__webpack_unused_export__ = AlignVerticalJustifyCenter;
__webpack_unused_export__ = AlignVerticalJustifyEnd;
__webpack_unused_export__ = AlignVerticalJustifyStart;
__webpack_unused_export__ = AlignVerticalSpaceAround;
__webpack_unused_export__ = AlignVerticalSpaceBetween;
__webpack_unused_export__ = Anchor;
__webpack_unused_export__ = Angry;
__webpack_unused_export__ = Annoyed;
__webpack_unused_export__ = Aperture;
__webpack_unused_export__ = Apple;
__webpack_unused_export__ = Archive;
__webpack_unused_export__ = ArchiveRestore;
__webpack_unused_export__ = Armchair;
__webpack_unused_export__ = ArrowBigDown;
__webpack_unused_export__ = ArrowBigLeft;
__webpack_unused_export__ = ArrowBigRight;
__webpack_unused_export__ = ArrowBigUp;
__webpack_unused_export__ = ArrowDown;
__webpack_unused_export__ = ArrowDownCircle;
__webpack_unused_export__ = ArrowDownLeft;
__webpack_unused_export__ = ArrowDownRight;
__webpack_unused_export__ = ArrowLeft;
__webpack_unused_export__ = ArrowLeftCircle;
__webpack_unused_export__ = ArrowLeftRight;
__webpack_unused_export__ = ArrowRight;
__webpack_unused_export__ = ArrowRightCircle;
__webpack_unused_export__ = ArrowUp;
__webpack_unused_export__ = ArrowUpCircle;
__webpack_unused_export__ = ArrowUpDown;
__webpack_unused_export__ = ArrowUpLeft;
__webpack_unused_export__ = ArrowUpRight;
__webpack_unused_export__ = Asterisk;
__webpack_unused_export__ = AtSign;
__webpack_unused_export__ = Award;
__webpack_unused_export__ = Axe;
__webpack_unused_export__ = Axis3d;
__webpack_unused_export__ = Baby;
__webpack_unused_export__ = Backpack;
__webpack_unused_export__ = BaggageClaim;
__webpack_unused_export__ = Banana;
__webpack_unused_export__ = Banknote;
__webpack_unused_export__ = BarChart;
__webpack_unused_export__ = BarChart2;
__webpack_unused_export__ = BarChart3;
__webpack_unused_export__ = BarChart4;
__webpack_unused_export__ = BarChartHorizontal;
__webpack_unused_export__ = Baseline;
__webpack_unused_export__ = Bath;
__webpack_unused_export__ = Battery;
__webpack_unused_export__ = BatteryCharging;
__webpack_unused_export__ = BatteryFull;
__webpack_unused_export__ = BatteryLow;
__webpack_unused_export__ = BatteryMedium;
__webpack_unused_export__ = Beaker;
__webpack_unused_export__ = Bean;
__webpack_unused_export__ = BeanOff;
__webpack_unused_export__ = Bed;
__webpack_unused_export__ = BedDouble;
__webpack_unused_export__ = BedSingle;
__webpack_unused_export__ = Beer;
__webpack_unused_export__ = Bell;
__webpack_unused_export__ = BellMinus;
__webpack_unused_export__ = BellOff;
__webpack_unused_export__ = BellPlus;
__webpack_unused_export__ = BellRing;
__webpack_unused_export__ = Bike;
__webpack_unused_export__ = Binary;
__webpack_unused_export__ = Bitcoin;
__webpack_unused_export__ = Bluetooth;
__webpack_unused_export__ = BluetoothConnected;
__webpack_unused_export__ = BluetoothOff;
__webpack_unused_export__ = BluetoothSearching;
__webpack_unused_export__ = Bold;
__webpack_unused_export__ = Bomb;
__webpack_unused_export__ = Bone;
__webpack_unused_export__ = Book;
__webpack_unused_export__ = BookOpen;
__webpack_unused_export__ = BookOpenCheck;
__webpack_unused_export__ = Bookmark;
__webpack_unused_export__ = BookmarkMinus;
__webpack_unused_export__ = BookmarkPlus;
__webpack_unused_export__ = Bot;
__webpack_unused_export__ = Box;
__webpack_unused_export__ = BoxSelect;
__webpack_unused_export__ = Boxes;
__webpack_unused_export__ = Briefcase;
__webpack_unused_export__ = Brush;
__webpack_unused_export__ = Bug;
__webpack_unused_export__ = Building;
__webpack_unused_export__ = Building2;
__webpack_unused_export__ = Bus;
__webpack_unused_export__ = Cake;
__webpack_unused_export__ = Calculator;
__webpack_unused_export__ = Calendar;
__webpack_unused_export__ = CalendarCheck;
__webpack_unused_export__ = CalendarCheck2;
__webpack_unused_export__ = CalendarClock;
__webpack_unused_export__ = CalendarDays;
__webpack_unused_export__ = CalendarHeart;
__webpack_unused_export__ = CalendarMinus;
__webpack_unused_export__ = CalendarOff;
__webpack_unused_export__ = CalendarPlus;
__webpack_unused_export__ = CalendarRange;
__webpack_unused_export__ = CalendarSearch;
__webpack_unused_export__ = CalendarX;
__webpack_unused_export__ = CalendarX2;
__webpack_unused_export__ = Camera;
__webpack_unused_export__ = CameraOff;
__webpack_unused_export__ = Candy;
__webpack_unused_export__ = CandyOff;
__webpack_unused_export__ = Car;
__webpack_unused_export__ = Carrot;
__webpack_unused_export__ = Cast;
__webpack_unused_export__ = Cat;
__webpack_unused_export__ = Check;
__webpack_unused_export__ = CheckCheck;
__webpack_unused_export__ = CheckCircle;
__webpack_unused_export__ = CheckCircle2;
__webpack_unused_export__ = CheckSquare;
__webpack_unused_export__ = ChefHat;
__webpack_unused_export__ = Cherry;
__webpack_unused_export__ = ChevronDown;
__webpack_unused_export__ = ChevronFirst;
__webpack_unused_export__ = ChevronLast;
__webpack_unused_export__ = ChevronLeft;
exports._Qn = ChevronRight;
__webpack_unused_export__ = ChevronUp;
__webpack_unused_export__ = ChevronsDown;
__webpack_unused_export__ = ChevronsDownUp;
__webpack_unused_export__ = ChevronsLeft;
__webpack_unused_export__ = ChevronsLeftRight;
__webpack_unused_export__ = ChevronsRight;
__webpack_unused_export__ = ChevronsRightLeft;
__webpack_unused_export__ = ChevronsUp;
__webpack_unused_export__ = ChevronsUpDown;
__webpack_unused_export__ = Chrome;
__webpack_unused_export__ = Cigarette;
__webpack_unused_export__ = CigaretteOff;
__webpack_unused_export__ = Circle;
__webpack_unused_export__ = CircleDot;
__webpack_unused_export__ = CircleEllipsis;
__webpack_unused_export__ = CircleSlashed;
__webpack_unused_export__ = Citrus;
__webpack_unused_export__ = Clapperboard;
__webpack_unused_export__ = Clipboard;
__webpack_unused_export__ = ClipboardCheck;
__webpack_unused_export__ = ClipboardCopy;
__webpack_unused_export__ = ClipboardEdit;
__webpack_unused_export__ = ClipboardList;
__webpack_unused_export__ = ClipboardSignature;
__webpack_unused_export__ = ClipboardType;
__webpack_unused_export__ = ClipboardX;
__webpack_unused_export__ = Clock;
__webpack_unused_export__ = Clock1;
__webpack_unused_export__ = Clock10;
__webpack_unused_export__ = Clock11;
__webpack_unused_export__ = Clock12;
__webpack_unused_export__ = Clock2;
__webpack_unused_export__ = Clock3;
__webpack_unused_export__ = Clock4;
__webpack_unused_export__ = Clock5;
__webpack_unused_export__ = Clock6;
__webpack_unused_export__ = Clock7;
__webpack_unused_export__ = Clock8;
__webpack_unused_export__ = Clock9;
__webpack_unused_export__ = Cloud;
__webpack_unused_export__ = CloudCog;
__webpack_unused_export__ = CloudDrizzle;
__webpack_unused_export__ = CloudFog;
__webpack_unused_export__ = CloudHail;
__webpack_unused_export__ = CloudLightning;
__webpack_unused_export__ = CloudMoon;
__webpack_unused_export__ = CloudMoonRain;
__webpack_unused_export__ = CloudOff;
__webpack_unused_export__ = CloudRain;
__webpack_unused_export__ = CloudRainWind;
__webpack_unused_export__ = CloudSnow;
__webpack_unused_export__ = CloudSun;
__webpack_unused_export__ = CloudSunRain;
__webpack_unused_export__ = Cloudy;
__webpack_unused_export__ = Clover;
__webpack_unused_export__ = Code;
__webpack_unused_export__ = Code2;
__webpack_unused_export__ = Codepen;
__webpack_unused_export__ = Codesandbox;
__webpack_unused_export__ = Coffee;
__webpack_unused_export__ = Cog;
__webpack_unused_export__ = Coins;
__webpack_unused_export__ = Columns;
__webpack_unused_export__ = Command;
__webpack_unused_export__ = Compass;
__webpack_unused_export__ = Component;
__webpack_unused_export__ = ConciergeBell;
__webpack_unused_export__ = Contact;
__webpack_unused_export__ = Contrast;
__webpack_unused_export__ = Cookie;
__webpack_unused_export__ = Copy;
__webpack_unused_export__ = Copyleft;
__webpack_unused_export__ = Copyright;
__webpack_unused_export__ = CornerDownLeft;
__webpack_unused_export__ = CornerDownRight;
__webpack_unused_export__ = CornerLeftDown;
__webpack_unused_export__ = CornerLeftUp;
__webpack_unused_export__ = CornerRightDown;
__webpack_unused_export__ = CornerRightUp;
__webpack_unused_export__ = CornerUpLeft;
__webpack_unused_export__ = CornerUpRight;
__webpack_unused_export__ = Cpu;
__webpack_unused_export__ = CreditCard;
__webpack_unused_export__ = Croissant;
__webpack_unused_export__ = Crop;
__webpack_unused_export__ = Cross;
__webpack_unused_export__ = Crosshair;
__webpack_unused_export__ = Crown;
__webpack_unused_export__ = CupSoda;
__webpack_unused_export__ = CurlyBraces;
__webpack_unused_export__ = Currency;
__webpack_unused_export__ = Database;
__webpack_unused_export__ = Delete;
__webpack_unused_export__ = Diamond;
__webpack_unused_export__ = Dice1;
__webpack_unused_export__ = Dice2;
__webpack_unused_export__ = Dice3;
__webpack_unused_export__ = Dice4;
__webpack_unused_export__ = Dice5;
__webpack_unused_export__ = Dice6;
__webpack_unused_export__ = Dices;
__webpack_unused_export__ = Diff;
__webpack_unused_export__ = Disc;
__webpack_unused_export__ = Divide;
__webpack_unused_export__ = DivideCircle;
__webpack_unused_export__ = DivideSquare;
__webpack_unused_export__ = Dna;
__webpack_unused_export__ = DnaOff;
__webpack_unused_export__ = Dog;
__webpack_unused_export__ = DollarSign;
__webpack_unused_export__ = Download;
__webpack_unused_export__ = DownloadCloud;
__webpack_unused_export__ = Dribbble;
__webpack_unused_export__ = Droplet;
__webpack_unused_export__ = Droplets;
__webpack_unused_export__ = Drumstick;
__webpack_unused_export__ = Dumbbell;
__webpack_unused_export__ = Ear;
__webpack_unused_export__ = EarOff;
__webpack_unused_export__ = Edit;
__webpack_unused_export__ = Edit2;
__webpack_unused_export__ = Edit3;
__webpack_unused_export__ = Egg;
__webpack_unused_export__ = EggFried;
__webpack_unused_export__ = EggOff;
__webpack_unused_export__ = Equal;
__webpack_unused_export__ = EqualNot;
__webpack_unused_export__ = Eraser;
__webpack_unused_export__ = Euro;
__webpack_unused_export__ = Expand;
__webpack_unused_export__ = ExternalLink;
__webpack_unused_export__ = Eye;
__webpack_unused_export__ = EyeOff;
exports.s1S = Facebook;
__webpack_unused_export__ = Factory;
__webpack_unused_export__ = Fan;
__webpack_unused_export__ = FastForward;
__webpack_unused_export__ = Feather;
__webpack_unused_export__ = Figma;
__webpack_unused_export__ = File;
__webpack_unused_export__ = FileArchive;
__webpack_unused_export__ = FileAudio;
__webpack_unused_export__ = FileAudio2;
__webpack_unused_export__ = FileAxis3d;
__webpack_unused_export__ = FileBadge;
__webpack_unused_export__ = FileBadge2;
__webpack_unused_export__ = FileBarChart;
__webpack_unused_export__ = FileBarChart2;
__webpack_unused_export__ = FileBox;
__webpack_unused_export__ = FileCheck;
__webpack_unused_export__ = FileCheck2;
__webpack_unused_export__ = FileClock;
__webpack_unused_export__ = FileCode;
__webpack_unused_export__ = FileCog;
__webpack_unused_export__ = FileCog2;
__webpack_unused_export__ = FileDiff;
__webpack_unused_export__ = FileDigit;
__webpack_unused_export__ = FileDown;
__webpack_unused_export__ = FileEdit;
__webpack_unused_export__ = FileHeart;
__webpack_unused_export__ = FileImage;
__webpack_unused_export__ = FileInput;
__webpack_unused_export__ = FileJson;
__webpack_unused_export__ = FileJson2;
__webpack_unused_export__ = FileKey;
__webpack_unused_export__ = FileKey2;
__webpack_unused_export__ = FileLineChart;
__webpack_unused_export__ = FileLock;
__webpack_unused_export__ = FileLock2;
__webpack_unused_export__ = FileMinus;
__webpack_unused_export__ = FileMinus2;
__webpack_unused_export__ = FileOutput;
__webpack_unused_export__ = FilePieChart;
__webpack_unused_export__ = FilePlus;
__webpack_unused_export__ = FilePlus2;
__webpack_unused_export__ = FileQuestion;
__webpack_unused_export__ = FileScan;
__webpack_unused_export__ = FileSearch;
__webpack_unused_export__ = FileSearch2;
__webpack_unused_export__ = FileSignature;
__webpack_unused_export__ = FileSpreadsheet;
__webpack_unused_export__ = FileSymlink;
__webpack_unused_export__ = FileTerminal;
__webpack_unused_export__ = FileText;
__webpack_unused_export__ = FileType;
__webpack_unused_export__ = FileType2;
__webpack_unused_export__ = FileUp;
__webpack_unused_export__ = FileVideo;
__webpack_unused_export__ = FileVideo2;
__webpack_unused_export__ = FileVolume;
__webpack_unused_export__ = FileVolume2;
__webpack_unused_export__ = FileWarning;
__webpack_unused_export__ = FileX;
__webpack_unused_export__ = FileX2;
__webpack_unused_export__ = Files;
__webpack_unused_export__ = Film;
__webpack_unused_export__ = Filter;
__webpack_unused_export__ = Fingerprint;
__webpack_unused_export__ = Flag;
__webpack_unused_export__ = FlagOff;
__webpack_unused_export__ = FlagTriangleLeft;
__webpack_unused_export__ = FlagTriangleRight;
__webpack_unused_export__ = Flame;
__webpack_unused_export__ = Flashlight;
__webpack_unused_export__ = FlashlightOff;
__webpack_unused_export__ = FlaskConical;
__webpack_unused_export__ = FlaskConicalOff;
__webpack_unused_export__ = FlaskRound;
__webpack_unused_export__ = FlipHorizontal;
__webpack_unused_export__ = FlipHorizontal2;
__webpack_unused_export__ = FlipVertical;
__webpack_unused_export__ = FlipVertical2;
__webpack_unused_export__ = Flower;
__webpack_unused_export__ = Flower2;
__webpack_unused_export__ = Focus;
__webpack_unused_export__ = Folder;
__webpack_unused_export__ = FolderArchive;
__webpack_unused_export__ = FolderCheck;
__webpack_unused_export__ = FolderClock;
__webpack_unused_export__ = FolderClosed;
__webpack_unused_export__ = FolderCog;
__webpack_unused_export__ = FolderCog2;
__webpack_unused_export__ = FolderDown;
__webpack_unused_export__ = FolderEdit;
__webpack_unused_export__ = FolderHeart;
__webpack_unused_export__ = FolderInput;
__webpack_unused_export__ = FolderKey;
__webpack_unused_export__ = FolderLock;
__webpack_unused_export__ = FolderMinus;
__webpack_unused_export__ = FolderOpen;
__webpack_unused_export__ = FolderOutput;
__webpack_unused_export__ = FolderPlus;
__webpack_unused_export__ = FolderSearch;
__webpack_unused_export__ = FolderSearch2;
__webpack_unused_export__ = FolderSymlink;
__webpack_unused_export__ = FolderTree;
__webpack_unused_export__ = FolderUp;
__webpack_unused_export__ = FolderX;
__webpack_unused_export__ = Folders;
__webpack_unused_export__ = FormInput;
__webpack_unused_export__ = Forward;
__webpack_unused_export__ = Frame;
__webpack_unused_export__ = Framer;
__webpack_unused_export__ = Frown;
__webpack_unused_export__ = Fuel;
__webpack_unused_export__ = FunctionSquare;
__webpack_unused_export__ = Gamepad;
__webpack_unused_export__ = Gamepad2;
__webpack_unused_export__ = Gauge;
__webpack_unused_export__ = Gavel;
__webpack_unused_export__ = Gem;
__webpack_unused_export__ = Ghost;
__webpack_unused_export__ = Gift;
__webpack_unused_export__ = GitBranch;
__webpack_unused_export__ = GitBranchPlus;
__webpack_unused_export__ = GitCommit;
__webpack_unused_export__ = GitCompare;
__webpack_unused_export__ = GitFork;
__webpack_unused_export__ = GitMerge;
__webpack_unused_export__ = GitPullRequest;
__webpack_unused_export__ = GitPullRequestClosed;
__webpack_unused_export__ = GitPullRequestDraft;
__webpack_unused_export__ = Github;
__webpack_unused_export__ = Gitlab;
__webpack_unused_export__ = GlassWater;
__webpack_unused_export__ = Glasses;
__webpack_unused_export__ = Globe;
__webpack_unused_export__ = Globe2;
__webpack_unused_export__ = Grab;
__webpack_unused_export__ = GraduationCap;
__webpack_unused_export__ = Grape;
__webpack_unused_export__ = Grid;
__webpack_unused_export__ = GripHorizontal;
__webpack_unused_export__ = GripVertical;
__webpack_unused_export__ = Hammer;
__webpack_unused_export__ = Hand;
__webpack_unused_export__ = HandMetal;
__webpack_unused_export__ = HardDrive;
__webpack_unused_export__ = HardHat;
__webpack_unused_export__ = Hash;
__webpack_unused_export__ = Haze;
__webpack_unused_export__ = Heading;
__webpack_unused_export__ = Heading1;
__webpack_unused_export__ = Heading2;
__webpack_unused_export__ = Heading3;
__webpack_unused_export__ = Heading4;
__webpack_unused_export__ = Heading5;
__webpack_unused_export__ = Heading6;
__webpack_unused_export__ = Headphones;
__webpack_unused_export__ = Heart;
__webpack_unused_export__ = HeartCrack;
__webpack_unused_export__ = HeartHandshake;
__webpack_unused_export__ = HeartOff;
__webpack_unused_export__ = HeartPulse;
__webpack_unused_export__ = HelpCircle;
__webpack_unused_export__ = Hexagon;
__webpack_unused_export__ = Highlighter;
__webpack_unused_export__ = History;
__webpack_unused_export__ = Home;
__webpack_unused_export__ = Hop;
__webpack_unused_export__ = HopOff;
__webpack_unused_export__ = Hourglass;
__webpack_unused_export__ = IceCream;
__webpack_unused_export__ = Image;
__webpack_unused_export__ = ImageMinus;
__webpack_unused_export__ = ImageOff;
__webpack_unused_export__ = ImagePlus;
__webpack_unused_export__ = Import;
__webpack_unused_export__ = Inbox;
__webpack_unused_export__ = Indent;
__webpack_unused_export__ = IndianRupee;
__webpack_unused_export__ = Infinity;
__webpack_unused_export__ = Info;
__webpack_unused_export__ = Inspect;
__webpack_unused_export__ = Instagram;
__webpack_unused_export__ = Italic;
__webpack_unused_export__ = JapaneseYen;
__webpack_unused_export__ = Joystick;
__webpack_unused_export__ = Key;
__webpack_unused_export__ = Keyboard;
__webpack_unused_export__ = Lamp;
__webpack_unused_export__ = LampCeiling;
__webpack_unused_export__ = LampDesk;
__webpack_unused_export__ = LampFloor;
__webpack_unused_export__ = LampWallDown;
__webpack_unused_export__ = LampWallUp;
__webpack_unused_export__ = Landmark;
__webpack_unused_export__ = Languages;
__webpack_unused_export__ = Laptop;
__webpack_unused_export__ = Laptop2;
__webpack_unused_export__ = Lasso;
__webpack_unused_export__ = LassoSelect;
__webpack_unused_export__ = Laugh;
__webpack_unused_export__ = Layers;
__webpack_unused_export__ = Layout;
__webpack_unused_export__ = LayoutDashboard;
__webpack_unused_export__ = LayoutGrid;
__webpack_unused_export__ = LayoutList;
__webpack_unused_export__ = LayoutTemplate;
__webpack_unused_export__ = Leaf;
__webpack_unused_export__ = Library;
__webpack_unused_export__ = LifeBuoy;
__webpack_unused_export__ = Lightbulb;
__webpack_unused_export__ = LightbulbOff;
__webpack_unused_export__ = LineChart;
__webpack_unused_export__ = Link;
__webpack_unused_export__ = Link2;
__webpack_unused_export__ = Link2Off;
exports.n6B = Linkedin;
__webpack_unused_export__ = List;
__webpack_unused_export__ = ListChecks;
__webpack_unused_export__ = ListEnd;
__webpack_unused_export__ = ListMinus;
__webpack_unused_export__ = ListMusic;
__webpack_unused_export__ = ListOrdered;
__webpack_unused_export__ = ListPlus;
__webpack_unused_export__ = ListStart;
__webpack_unused_export__ = ListVideo;
__webpack_unused_export__ = ListX;
__webpack_unused_export__ = Loader;
__webpack_unused_export__ = Loader2;
__webpack_unused_export__ = Locate;
__webpack_unused_export__ = LocateFixed;
__webpack_unused_export__ = LocateOff;
__webpack_unused_export__ = Lock;
__webpack_unused_export__ = LogIn;
__webpack_unused_export__ = LogOut;
__webpack_unused_export__ = Luggage;
__webpack_unused_export__ = Magnet;
__webpack_unused_export__ = Mail;
__webpack_unused_export__ = MailCheck;
__webpack_unused_export__ = MailMinus;
__webpack_unused_export__ = MailOpen;
__webpack_unused_export__ = MailPlus;
__webpack_unused_export__ = MailQuestion;
__webpack_unused_export__ = MailSearch;
__webpack_unused_export__ = MailWarning;
__webpack_unused_export__ = MailX;
__webpack_unused_export__ = Mails;
__webpack_unused_export__ = Map;
__webpack_unused_export__ = MapPin;
__webpack_unused_export__ = MapPinOff;
__webpack_unused_export__ = Martini;
__webpack_unused_export__ = Maximize;
__webpack_unused_export__ = Maximize2;
__webpack_unused_export__ = Medal;
__webpack_unused_export__ = Megaphone;
__webpack_unused_export__ = MegaphoneOff;
__webpack_unused_export__ = Meh;
__webpack_unused_export__ = Menu;
__webpack_unused_export__ = MessageCircle;
__webpack_unused_export__ = MessageSquare;
__webpack_unused_export__ = Mic;
__webpack_unused_export__ = Mic2;
__webpack_unused_export__ = MicOff;
__webpack_unused_export__ = Microscope;
__webpack_unused_export__ = Microwave;
__webpack_unused_export__ = Milestone;
__webpack_unused_export__ = Milk;
__webpack_unused_export__ = MilkOff;
__webpack_unused_export__ = Minimize;
__webpack_unused_export__ = Minimize2;
__webpack_unused_export__ = Minus;
__webpack_unused_export__ = MinusCircle;
__webpack_unused_export__ = MinusSquare;
__webpack_unused_export__ = Monitor;
__webpack_unused_export__ = MonitorOff;
__webpack_unused_export__ = MonitorSmartphone;
__webpack_unused_export__ = MonitorSpeaker;
__webpack_unused_export__ = Moon;
__webpack_unused_export__ = MoreHorizontal;
__webpack_unused_export__ = MoreVertical;
__webpack_unused_export__ = Mountain;
__webpack_unused_export__ = MountainSnow;
__webpack_unused_export__ = Mouse;
__webpack_unused_export__ = MousePointer;
__webpack_unused_export__ = MousePointer2;
__webpack_unused_export__ = MousePointerClick;
__webpack_unused_export__ = Move;
__webpack_unused_export__ = Move3d;
__webpack_unused_export__ = MoveDiagonal;
__webpack_unused_export__ = MoveDiagonal2;
__webpack_unused_export__ = MoveHorizontal;
__webpack_unused_export__ = MoveVertical;
__webpack_unused_export__ = Music;
__webpack_unused_export__ = Music2;
__webpack_unused_export__ = Music3;
__webpack_unused_export__ = Music4;
__webpack_unused_export__ = Navigation;
__webpack_unused_export__ = Navigation2;
__webpack_unused_export__ = Navigation2Off;
__webpack_unused_export__ = NavigationOff;
__webpack_unused_export__ = Network;
__webpack_unused_export__ = Newspaper;
__webpack_unused_export__ = Nut;
__webpack_unused_export__ = NutOff;
__webpack_unused_export__ = Octagon;
__webpack_unused_export__ = Option;
__webpack_unused_export__ = Outdent;
__webpack_unused_export__ = Package;
__webpack_unused_export__ = Package2;
__webpack_unused_export__ = PackageCheck;
__webpack_unused_export__ = PackageMinus;
__webpack_unused_export__ = PackageOpen;
__webpack_unused_export__ = PackagePlus;
__webpack_unused_export__ = PackageSearch;
__webpack_unused_export__ = PackageX;
__webpack_unused_export__ = PaintBucket;
__webpack_unused_export__ = Paintbrush;
__webpack_unused_export__ = Paintbrush2;
__webpack_unused_export__ = Palette;
__webpack_unused_export__ = Palmtree;
__webpack_unused_export__ = Paperclip;
__webpack_unused_export__ = PartyPopper;
__webpack_unused_export__ = Pause;
__webpack_unused_export__ = PauseCircle;
__webpack_unused_export__ = PauseOctagon;
__webpack_unused_export__ = PenTool;
__webpack_unused_export__ = Pencil;
__webpack_unused_export__ = Percent;
__webpack_unused_export__ = PersonStanding;
__webpack_unused_export__ = Phone;
__webpack_unused_export__ = PhoneCall;
__webpack_unused_export__ = PhoneForwarded;
__webpack_unused_export__ = PhoneIncoming;
__webpack_unused_export__ = PhoneMissed;
__webpack_unused_export__ = PhoneOff;
__webpack_unused_export__ = PhoneOutgoing;
__webpack_unused_export__ = PieChart;
__webpack_unused_export__ = PiggyBank;
__webpack_unused_export__ = Pilcrow;
__webpack_unused_export__ = Pin;
__webpack_unused_export__ = PinOff;
__webpack_unused_export__ = Pipette;
__webpack_unused_export__ = Pizza;
__webpack_unused_export__ = Plane;
__webpack_unused_export__ = Play;
__webpack_unused_export__ = PlayCircle;
__webpack_unused_export__ = Plug;
__webpack_unused_export__ = Plug2;
__webpack_unused_export__ = PlugZap;
__webpack_unused_export__ = Plus;
__webpack_unused_export__ = PlusCircle;
__webpack_unused_export__ = PlusSquare;
__webpack_unused_export__ = Pocket;
__webpack_unused_export__ = Podcast;
__webpack_unused_export__ = Pointer;
__webpack_unused_export__ = PoundSterling;
__webpack_unused_export__ = Power;
__webpack_unused_export__ = PowerOff;
__webpack_unused_export__ = Printer;
__webpack_unused_export__ = Puzzle;
__webpack_unused_export__ = QrCode;
__webpack_unused_export__ = Quote;
__webpack_unused_export__ = Radio;
__webpack_unused_export__ = RadioReceiver;
__webpack_unused_export__ = RectangleHorizontal;
__webpack_unused_export__ = RectangleVertical;
__webpack_unused_export__ = Recycle;
__webpack_unused_export__ = Redo;
__webpack_unused_export__ = Redo2;
__webpack_unused_export__ = RefreshCcw;
__webpack_unused_export__ = RefreshCw;
__webpack_unused_export__ = Refrigerator;
__webpack_unused_export__ = Regex;
__webpack_unused_export__ = Repeat;
__webpack_unused_export__ = Repeat1;
__webpack_unused_export__ = Reply;
__webpack_unused_export__ = ReplyAll;
__webpack_unused_export__ = Rewind;
__webpack_unused_export__ = Rocket;
__webpack_unused_export__ = RockingChair;
__webpack_unused_export__ = Rotate3d;
__webpack_unused_export__ = RotateCcw;
__webpack_unused_export__ = RotateCw;
__webpack_unused_export__ = Rss;
__webpack_unused_export__ = Ruler;
__webpack_unused_export__ = RussianRuble;
__webpack_unused_export__ = Sailboat;
__webpack_unused_export__ = Save;
__webpack_unused_export__ = Scale;
__webpack_unused_export__ = Scale3d;
__webpack_unused_export__ = Scaling;
__webpack_unused_export__ = Scan;
__webpack_unused_export__ = ScanFace;
__webpack_unused_export__ = ScanLine;
__webpack_unused_export__ = Scissors;
__webpack_unused_export__ = ScreenShare;
__webpack_unused_export__ = ScreenShareOff;
__webpack_unused_export__ = Scroll;
__webpack_unused_export__ = Search;
__webpack_unused_export__ = Send;
__webpack_unused_export__ = SeparatorHorizontal;
__webpack_unused_export__ = SeparatorVertical;
__webpack_unused_export__ = Server;
__webpack_unused_export__ = ServerCog;
__webpack_unused_export__ = ServerCrash;
__webpack_unused_export__ = ServerOff;
__webpack_unused_export__ = Settings;
__webpack_unused_export__ = Settings2;
__webpack_unused_export__ = Share;
__webpack_unused_export__ = Share2;
__webpack_unused_export__ = Sheet;
__webpack_unused_export__ = Shield;
__webpack_unused_export__ = ShieldAlert;
__webpack_unused_export__ = ShieldCheck;
__webpack_unused_export__ = ShieldClose;
__webpack_unused_export__ = ShieldOff;
__webpack_unused_export__ = Shirt;
__webpack_unused_export__ = ShoppingBag;
__webpack_unused_export__ = ShoppingCart;
__webpack_unused_export__ = Shovel;
__webpack_unused_export__ = ShowerHead;
__webpack_unused_export__ = Shrink;
__webpack_unused_export__ = Shrub;
__webpack_unused_export__ = Shuffle;
__webpack_unused_export__ = Sidebar;
__webpack_unused_export__ = SidebarClose;
__webpack_unused_export__ = SidebarOpen;
__webpack_unused_export__ = Sigma;
__webpack_unused_export__ = Signal;
__webpack_unused_export__ = SignalHigh;
__webpack_unused_export__ = SignalLow;
__webpack_unused_export__ = SignalMedium;
__webpack_unused_export__ = SignalZero;
__webpack_unused_export__ = Siren;
__webpack_unused_export__ = SkipBack;
__webpack_unused_export__ = SkipForward;
__webpack_unused_export__ = Skull;
__webpack_unused_export__ = Slack;
__webpack_unused_export__ = Slash;
__webpack_unused_export__ = Slice;
__webpack_unused_export__ = Sliders;
__webpack_unused_export__ = SlidersHorizontal;
__webpack_unused_export__ = Smartphone;
__webpack_unused_export__ = SmartphoneCharging;
__webpack_unused_export__ = Smile;
__webpack_unused_export__ = SmilePlus;
__webpack_unused_export__ = Snowflake;
__webpack_unused_export__ = Sofa;
__webpack_unused_export__ = SortAsc;
__webpack_unused_export__ = SortDesc;
__webpack_unused_export__ = Speaker;
__webpack_unused_export__ = Spline;
__webpack_unused_export__ = Sprout;
__webpack_unused_export__ = Square;
__webpack_unused_export__ = Star;
__webpack_unused_export__ = StarHalf;
__webpack_unused_export__ = StarOff;
__webpack_unused_export__ = Stethoscope;
__webpack_unused_export__ = Sticker;
__webpack_unused_export__ = StickyNote;
__webpack_unused_export__ = StopCircle;
__webpack_unused_export__ = StretchHorizontal;
__webpack_unused_export__ = StretchVertical;
__webpack_unused_export__ = Strikethrough;
__webpack_unused_export__ = Subscript;
__webpack_unused_export__ = Subtitles;
__webpack_unused_export__ = Sun;
__webpack_unused_export__ = SunDim;
__webpack_unused_export__ = SunMedium;
__webpack_unused_export__ = SunMoon;
__webpack_unused_export__ = SunSnow;
__webpack_unused_export__ = Sunrise;
__webpack_unused_export__ = Sunset;
__webpack_unused_export__ = Superscript;
__webpack_unused_export__ = SwissFranc;
__webpack_unused_export__ = SwitchCamera;
__webpack_unused_export__ = Sword;
__webpack_unused_export__ = Swords;
__webpack_unused_export__ = Syringe;
__webpack_unused_export__ = Table;
__webpack_unused_export__ = Table2;
__webpack_unused_export__ = Tablet;
__webpack_unused_export__ = Tag;
__webpack_unused_export__ = Tags;
__webpack_unused_export__ = Target;
__webpack_unused_export__ = Tent;
__webpack_unused_export__ = Terminal;
__webpack_unused_export__ = TerminalSquare;
__webpack_unused_export__ = TextCursor;
__webpack_unused_export__ = TextCursorInput;
__webpack_unused_export__ = Thermometer;
__webpack_unused_export__ = ThermometerSnowflake;
__webpack_unused_export__ = ThermometerSun;
__webpack_unused_export__ = ThumbsDown;
__webpack_unused_export__ = ThumbsUp;
__webpack_unused_export__ = Ticket;
__webpack_unused_export__ = Timer;
__webpack_unused_export__ = TimerOff;
__webpack_unused_export__ = TimerReset;
__webpack_unused_export__ = ToggleLeft;
__webpack_unused_export__ = ToggleRight;
__webpack_unused_export__ = Tornado;
__webpack_unused_export__ = ToyBrick;
__webpack_unused_export__ = Train;
__webpack_unused_export__ = Trash;
__webpack_unused_export__ = Trash2;
__webpack_unused_export__ = TreeDeciduous;
__webpack_unused_export__ = TreePine;
__webpack_unused_export__ = Trees;
__webpack_unused_export__ = Trello;
__webpack_unused_export__ = TrendingDown;
__webpack_unused_export__ = TrendingUp;
__webpack_unused_export__ = Triangle;
__webpack_unused_export__ = Trophy;
__webpack_unused_export__ = Truck;
__webpack_unused_export__ = Tv;
__webpack_unused_export__ = Tv2;
__webpack_unused_export__ = Twitch;
exports.tLe = Twitter;
__webpack_unused_export__ = Type;
__webpack_unused_export__ = Umbrella;
__webpack_unused_export__ = Underline;
__webpack_unused_export__ = Undo;
__webpack_unused_export__ = Undo2;
__webpack_unused_export__ = Unlink;
__webpack_unused_export__ = Unlink2;
__webpack_unused_export__ = Unlock;
__webpack_unused_export__ = Upload;
__webpack_unused_export__ = UploadCloud;
__webpack_unused_export__ = Usb;
__webpack_unused_export__ = User;
__webpack_unused_export__ = UserCheck;
__webpack_unused_export__ = UserCog;
__webpack_unused_export__ = UserMinus;
__webpack_unused_export__ = UserPlus;
__webpack_unused_export__ = UserX;
__webpack_unused_export__ = Users;
__webpack_unused_export__ = Utensils;
__webpack_unused_export__ = UtensilsCrossed;
__webpack_unused_export__ = Vegan;
__webpack_unused_export__ = VenetianMask;
__webpack_unused_export__ = Verified;
__webpack_unused_export__ = Vibrate;
__webpack_unused_export__ = VibrateOff;
__webpack_unused_export__ = Video;
__webpack_unused_export__ = VideoOff;
__webpack_unused_export__ = View;
__webpack_unused_export__ = Voicemail;
__webpack_unused_export__ = Volume;
__webpack_unused_export__ = Volume1;
__webpack_unused_export__ = Volume2;
__webpack_unused_export__ = VolumeX;
__webpack_unused_export__ = Wallet;
__webpack_unused_export__ = Wand;
__webpack_unused_export__ = Wand2;
__webpack_unused_export__ = Watch;
__webpack_unused_export__ = Waves;
__webpack_unused_export__ = Webcam;
__webpack_unused_export__ = Webhook;
__webpack_unused_export__ = Wheat;
__webpack_unused_export__ = WheatOff;
__webpack_unused_export__ = Wifi;
__webpack_unused_export__ = WifiOff;
__webpack_unused_export__ = Wind;
__webpack_unused_export__ = Wine;
__webpack_unused_export__ = WineOff;
__webpack_unused_export__ = WrapText;
__webpack_unused_export__ = Wrench;
__webpack_unused_export__ = X;
__webpack_unused_export__ = XCircle;
__webpack_unused_export__ = XOctagon;
__webpack_unused_export__ = XSquare;
exports.hxd = Youtube;
__webpack_unused_export__ = Zap;
__webpack_unused_export__ = ZapOff;
__webpack_unused_export__ = ZoomIn;
__webpack_unused_export__ = ZoomOut;
__webpack_unused_export__ = createReactComponent; //# sourceMappingURL=lucide-react.js.map


/***/ }),

/***/ 3097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/govarthan/Documents/GitHub/Ariadne-next13/node_modules/next/dist/client/link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 5124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(3097);


/***/ })

};
;