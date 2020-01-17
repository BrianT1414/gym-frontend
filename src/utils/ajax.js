export default function ajax(config) {
	// Set the  type with passed in value or default to GET
	const method = config.method ? config.method.toUpperCase() : 'GET';

	let url;
	let additionalConfig = {};

	if (method === 'GET') {
    url = (0, _formatGetUrl2.default)(config.url, config.data);
	} else {
		url = config.url;
		additionalConfig.body = JSON.stringify(config.data);
	}

	// These values are formatted by _extends, don't include them twice
	delete config.url;
	delete config.data;
	delete config.method;

	return fetch(url, _extends({
		method: method,
		credentials: "same-origin",
		headers: new Headers({
				"Content-Type": "application/json",
				"Accept": "application/json",
				"X-Requested-With": "XMLHttpRequest"
		})
  }, additionalConfig, config))
}

var _formatGetUrl2 = _interopRequireDefault(_formatGetUrl)

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

const _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key] } } } return target }



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj }

function _formatGetUrl(url, data) {
    if (data && Object.keys(data).length > 0) {
        var params = Object.keys(data).map(function (key) {
            return encodeURIData(data, key)
        }).join("&").replace(/%20/g, "+")
        return url + "?" + params
    } else {
        return url
    }
}

function encodeURIData(data, key) {
    if (Array.isArray(data[key]) && _typeof(data[key][0]) !== "object") {
        var array = data[key].map(function (element) {
            return encodeURIComponent(key) + "[]=" + encodeURIComponent(element)
        })
        return array.join("&")
    }

    if (_typeof(data[key]) === "object" || Array.isArray(data[key]) && _typeof(data[key][0]) === "object") {
        return encodeURIComponent(key) + "=" + JSON.stringify(data[key])
    }

    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
}
