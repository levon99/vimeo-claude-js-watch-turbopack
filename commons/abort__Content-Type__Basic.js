{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0);
  _v1.exports = function (_v0) {
    return new Promise(function (_v0, _v1) {
      var _v2,
        _v3 = _v0.data,
        _v4 = _v0.headers,
        _v5 = _v0.responseType;
      function _v6() {
        _v0.cancelToken && _v0.cancelToken.unsubscribe(_v2), _v0.signal && _v0.signal.removeEventListener("abort", _v2);
      }
      _v3.isFormData(_v3) && delete _v4["Content-Type"];
      var _v7 = new XMLHttpRequest();
      _v0.auth && (_v4.Authorization = "Basic " + btoa((_v0.auth.username || "") + ":" + (_v0.auth.password ? unescape(encodeURIComponent(_v0.auth.password)) : "")));
      var _v8 = _v7(_v0.baseURL, _v0.url);
      function _v9() {
        if (_v7) {
          var _v0 = "getAllResponseHeaders" in _v7 ? _v8(_v7.getAllResponseHeaders()) : null;
          _v4(function (_v0) {
            _v0(_v0), _v6();
          }, function (_v0) {
            _v1(_v0), _v6();
          }, {
            data: _v5 && "text" !== _v5 && "json" !== _v5 ? _v7.response : _v7.responseText,
            status: _v7.status,
            statusText: _v7.statusText,
            headers: _v0,
            config: _v0,
            request: _v7
          }), _v7 = null;
        }
      }
      if (_v7.open(_v0.method.toUpperCase(), _v6(_v8, _v0.params, _v0.paramsSerializer), !0), _v7.timeout = _v0.timeout, "onloadend" in _v7 ? _v7.onloadend = _v9 : _v7.onreadystatechange = function () {
        !_v7 || 4 !== _v7.readyState || (0 !== _v7.status || _v7.responseURL && 0 === _v7.responseURL.indexOf("file:")) && setTimeout(_v9);
      }, _v7.onabort = function () {
        _v7 && (_v1(_v10("Request aborted", _v0, "ECONNABORTED", _v7)), _v7 = null);
      }, _v7.onerror = function () {
        _v1(_v10("Network Error", _v0, null, _v7)), _v7 = null;
      }, _v7.ontimeout = function () {
        var _v0 = _v0.timeout ? "timeout of " + _v0.timeout + "ms exceeded" : "timeout exceeded",
          _v1 = _v0.transitional || _v11.transitional;
        _v0.timeoutErrorMessage && (_v0 = _v0.timeoutErrorMessage), _v1(_v10(_v0, _v0, _v1.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", _v7)), _v7 = null;
      }, _v3.isStandardBrowserEnv()) {
        var _v10 = (_v0.withCredentials || _v9(_v8)) && _v0.xsrfCookieName ? _v5.read(_v0.xsrfCookieName) : void 0;
        _v10 && (_v4[_v0.xsrfHeaderName] = _v10);
      }
      "setRequestHeader" in _v7 && _v3.forEach(_v4, function (_v0, _v1) {
        void 0 === _v3 && "content-type" === _v1.toLowerCase() ? delete _v4[_v1] : _v7.setRequestHeader(_v1, _v0);
      }), _v3.isUndefined(_v0.withCredentials) || (_v7.withCredentials = !!_v0.withCredentials), _v5 && "json" !== _v5 && (_v7.responseType = _v0.responseType), "function" == typeof _v0.onDownloadProgress && _v7.addEventListener("progress", _v0.onDownloadProgress), "function" == typeof _v0.onUploadProgress && _v7.upload && _v7.upload.addEventListener("progress", _v0.onUploadProgress), (_v0.cancelToken || _v0.signal) && (_v2 = function (_v0) {
        _v7 && (_v1(!_v0 || _v0 && _v0.type ? new _v12("canceled") : _v0), _v7.abort(), _v7 = null);
      }, _v0.cancelToken && _v0.cancelToken.subscribe(_v2), _v0.signal && (_v0.signal.aborted ? _v2() : _v0.signal.addEventListener("abort", _v2))), _v3 || (_v3 = null), _v7.send(_v3);
    });
  };
}