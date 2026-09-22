{
  "use strict";

  var _v3 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    _v1 = _v1 || {};
    var _v2 = {};
    function _v3(_v0, _v1) {
      return _v3.isPlainObject(_v0) && _v3.isPlainObject(_v1) ? _v3.merge(_v0, _v1) : _v3.isPlainObject(_v1) ? _v3.merge({}, _v1) : _v3.isArray(_v1) ? _v1.slice() : _v1;
    }
    function _v4(_v0) {
      return _v3.isUndefined(_v1[_v0]) ? _v3.isUndefined(_v0[_v0]) ? void 0 : _v3(void 0, _v0[_v0]) : _v3(_v0[_v0], _v1[_v0]);
    }
    function _v5(_v0) {
      if (!_v3.isUndefined(_v1[_v0])) return _v3(void 0, _v1[_v0]);
    }
    function _v6(_v0) {
      return _v3.isUndefined(_v1[_v0]) ? _v3.isUndefined(_v0[_v0]) ? void 0 : _v3(void 0, _v0[_v0]) : _v3(void 0, _v1[_v0]);
    }
    function _v7(_v0) {
      return _v0 in _v1 ? _v3(_v0[_v0], _v1[_v0]) : _v0 in _v0 ? _v3(void 0, _v0[_v0]) : void 0;
    }
    var _v8 = {
      url: _v5,
      method: _v5,
      data: _v5,
      baseURL: _v6,
      transformRequest: _v6,
      transformResponse: _v6,
      paramsSerializer: _v6,
      timeout: _v6,
      timeoutMessage: _v6,
      withCredentials: _v6,
      adapter: _v6,
      responseType: _v6,
      xsrfCookieName: _v6,
      xsrfHeaderName: _v6,
      onUploadProgress: _v6,
      onDownloadProgress: _v6,
      decompress: _v6,
      maxContentLength: _v6,
      maxBodyLength: _v6,
      transport: _v6,
      httpAgent: _v6,
      httpsAgent: _v6,
      cancelToken: _v6,
      socketPath: _v6,
      responseEncoding: _v6,
      validateStatus: _v7
    };
    return _v3.forEach(Object.keys(_v0).concat(Object.keys(_v1)), function (_v0) {
      var _v1 = _v8[_v0] || _v4,
        _v2 = _v1(_v0);
      _v3.isUndefined(_v2) && _v1 !== _v7 || (_v2[_v0] = _v2);
    }), _v2;
  };
}