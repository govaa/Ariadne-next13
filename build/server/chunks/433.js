exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 4060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendPost = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(3348);
const store_1 = __webpack_require__(5938);
const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(target));
        });
        xhr.open('POST', store_1.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};
exports.sendPost = sendPost;


/***/ }),

/***/ 5699:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
const init_1 = __webpack_require__(9596);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return init_1.init; } });
const send_1 = __webpack_require__(931);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return send_1.send; } });
const sendForm_1 = __webpack_require__(7422);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return sendForm_1.sendForm; } });
exports.ZP = {
    init: init_1.init,
    send: send_1.send,
    sendForm: sendForm_1.sendForm,
};


/***/ }),

/***/ 9596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const store_1 = __webpack_require__(5938);
/**
 * Initiation
 * @param {string} publicKey - set the EmailJS public key
 * @param {string} origin - set the EmailJS origin
 */
const init = (publicKey, origin = 'https://api.emailjs.com') => {
    store_1.store._userID = publicKey;
    store_1.store._origin = origin;
};
exports.init = init;


/***/ }),

/***/ 931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.send = void 0;
const store_1 = __webpack_require__(5938);
const validateParams_1 = __webpack_require__(7637);
const sendPost_1 = __webpack_require__(4060);
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, publicKey) => {
    const uID = publicKey || store_1.store._userID;
    (0, validateParams_1.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.11.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};
exports.send = send;


/***/ }),

/***/ 7422:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendForm = void 0;
const store_1 = __webpack_require__(5938);
const validateParams_1 = __webpack_require__(7637);
const sendPost_1 = __webpack_require__(4060);
const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, publicKey) => {
    const uID = publicKey || store_1.store._userID;
    const currentForm = findHTMLForm(form);
    (0, validateParams_1.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.11.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send-form', formData);
};
exports.sendForm = sendForm;


/***/ }),

/***/ 3348:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = void 0;
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse ? httpResponse.status : 0;
        this.text = httpResponse ? httpResponse.responseText : 'Network Error';
    }
}
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ 5938:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
exports.store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ 7637:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateParams = void 0;
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey) {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};
exports.validateParams = validateParams;


/***/ }),

/***/ 3561:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.G = function(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}

/***/ }),

/***/ 1528:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NoopHead;
    }
}));
function NoopHead() {
    return null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-head.js.map


/***/ }),

/***/ 4669:
/***/ (() => {



/***/ })

};
;