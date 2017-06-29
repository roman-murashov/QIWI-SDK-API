(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("url"), require("https"));
	else if(typeof define === 'function' && define.amd)
		define("QiwiBillsApi", ["url", "https"], factory);
	else if(typeof exports === 'object')
		exports["QiwiBillsApi"] = factory(require("url"), require("https"));
	else
		root["QiwiBillsApi"] = factory(root["url"], root["https"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_https__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_https__);


const request = (options) => {

    return new Promise((resolve, reject) => {

        const request = __WEBPACK_IMPORTED_MODULE_0_https___default.a.request(options, (response) => {

            const body = [];

            response.setEncoding('utf8');

            response.on('data', (chunk) => body.push(chunk));

            response.on('end', () => resolve(body.join('')));
        });

        request.on('error', (err) => reject(err));

        request.write(options.body.toString());
        request.end();
    })
};

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QiwiBillsApi_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oldQiwiBillsApi_js__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["default"] = ({QiwiBillsApi: __WEBPACK_IMPORTED_MODULE_0__QiwiBillsApi_js__["a" /* default */], oldQiwiBillsApi: __WEBPACK_IMPORTED_MODULE_1__oldQiwiBillsApi_js__["a" /* default */]});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url__);


/**
 * Class for rest v 3.
 *
 * @class
 */
class QiwiBillsApi {
    /**
     * Constructs the object.
     *
     * @param      {string}  key     The key
     */
    constructor(key) {
        this._key = key;
    }
    /**
     * Key setter
     *
     * @param      {string}  key     The key
     */
    set key(key) {
        this._key = key;
    }
    /**
     * Build request
     *
     * @param      {Object}  arg1         The argument 1
     * @param      {string}  arg1.url     The url
     * @param      {string}  arg1.method  The method
     * @param      {?string}  arg1.body    The body
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    async _requestBuilder({ url, method, body = null }) {

        const key = new Buffer(this._key).toString('base64');

        const headers = {
            'Accept': 'text/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${key}`
        };

        const options = {
            hostname: 'api.qiwi.com',
            path: `/api/v3/prv/bills/${url}`,
            method,
            headers,
            body: new __WEBPACK_IMPORTED_MODULE_1_url__["URLSearchParams"](body)
        };

        try {

            const data = await __WEBPACK_IMPORTED_MODULE_0__request_js__["a" /* default */](options);

            return JSON.parse(data);

        } catch (e) {
            console.error(e.message);
        }
    }
    /**
     * Creating checkout link
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    createPaymentForm(bill_id) {

        const options = {
            url: bill_id,
            method: 'PUT'
        };

        return this._requestBuilder(options);
    }
    /**
     * Getting bill status
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    getStatus(bill_id) {

        const options = {
            url: bill_id,
            method: 'GET'
        };

        return this._requestBuilder(options);
    }
    /**
     * Cancelling unpaid bill
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    cancel(bill_id) {
        const options = {
            url: bill_id,
            method: 'PATCH',
            body: {
                status: 'rejected'
            }
        };

        return this._requestBuilder(options);
    }
    /**
     * Refund by paid bill
     *
     * @param      {(string|number)}  bill_id    The bill identifier
     * @param      {(string|number)}  refund_id  The refund identifier
     * @param      {?(string|number)}  amount     The amount
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    refund(bill_id, refund_id, amount = '') {
        const options = {
            url: `${bill_id}/refund/${refund_id}`,
            method: 'PUT',
            body: {
                amount
            }
        };

        return this._requestBuilder(options);
    }
    /**
     * Get status of refund
     *
     * @param      {(string|number)}  bill_id    The bill identifier
     * @param      {(string|number)}  refund_id  The refund identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    getRefundStatus(bill_id, refund_id) {
        const options = {
            url: `${bill_id}/refund/${refund_id}`,
            method: 'GET'
        };

        return this._requestBuilder(options);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = QiwiBillsApi;



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_js__ = __webpack_require__(0);


/**
 * Class for rest v 2.
 *
 * @class
 */
class oldQiwiBillsApi {
    /**
     * Constructs the object.
     *
     * @param      {(string|number)}  api_id        The api identifier
     * @param      {(string|number)}  api_password  The api password
     * @param      {(string|number)}  prv_id        The prv identifier
     */
    constructor(api_id, api_password, prv_id) {
        this._apiId = api_id;
        this._apiPassword = api_password;
        this._prvId =  prv_id
    }
    /**
     * Api id setter
     *
     * @param      {(string|number)}  api_id        The api
     */
    set apiId(api_id) {
        this._apiId = api_id;
    }
    /**
     * Api password setter
     *
     * @param      {(string|number)}  api_password  The api password
     */
    set apiPassword(api_password) {
        this._apiPassword = api_password;
    }
    /**
     * Provider id setter
     *
     * @param      {(string|number)}  prv_id        The prv
     */
    set prvId(prv_id) {
        this._prvId = prv_id
    }

    /**
     * Build request
     *
     * @param      {Object}  arg1         The argument 1
     * @param      {string}  arg1.url     The url
     * @param      {string}  arg1.method  The method
     * @param      {?string}  arg1.body    The body
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    async _requestBuilder({ url, method, body = null }) {

        const key = new Buffer(`${this._apiId}:${this._apiPassword}`).toString('base64');

        const headers = {
            'Accept': 'text/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${key}`
        };

        const options = {
            hostname: 'api.qiwi.com',
            path: `/api/v2/prv/${this._prvId}/bills/${url}`,
            method,
            headers,
            body: new __WEBPACK_IMPORTED_MODULE_0_url__["URLSearchParams"](body)
        };

        try {

            const data = await __WEBPACK_IMPORTED_MODULE_1__request_js__["a" /* default */](options);

            return JSON.parse(data);

        } catch (e) {
            console.error(e.message);
        }
    }
    /**
     * Creating checkout link
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    createPaymentForm(bill_id, fields) {

        const options = {
            url: bill_id,
            method: 'PUT',
            body: fields
        };

        return this._requestBuilder(options);
    }
    /**
     * Getting bill status
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    getStatus(bill_id) {

        const options = {
            url: bill_id,
            method: 'GET'
        };

        return this._requestBuilder(options);
    }
    /**
     * Cancelling unpaid bill
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    cancel(bill_id) {
        const options = {
            url: bill_id,
            method: 'PATCH',
            body: {
                status: 'rejected'
            }
        };

        return this._requestBuilder(options);
    }
    /**
     * Refund by paid bill
     *
     * @param      {(string|number)}  bill_id    The bill identifier
     * @param      {(string|number)}  refund_id  The refund identifier
     * @param      {?(string|number)}  amount     The amount
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    refund(bill_id, refund_id, amount = '') {
        const options = {
            url: `${bill_id}/refund/${refund_id}`,
            method: 'PUT',
            body: {
                amount
            }
        };

        return this._requestBuilder(options);
    }
    /**
     * Get status of refund
     *
     * @param      {(string|number)}  bill_id    The bill identifier
     * @param      {(string|number)}  refund_id  The refund identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    getRefundStatus(bill_id, refund_id) {
        const options = {
            url: `${bill_id}/refund/${refund_id}`,
            method: 'GET'
        };

        return this._requestBuilder(options);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = oldQiwiBillsApi;



/***/ })
/******/ ]);
});