{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  function _v8(_v0) {
    if (_v0.cancelToken && _v0.cancelToken.throwIfRequested(), _v0.signal && _v0.signal.aborted) throw new _v7("canceled");
  }
  _v1.exports = function (_v0) {
    return _v8(_v0), _v0.headers = _v0.headers || {}, _v0.data = _v4.call(_v0, _v0.data, _v0.headers, _v0.transformRequest), _v0.headers = _v3.merge(_v0.headers.common || {}, _v0.headers[_v0.method] || {}, _v0.headers), _v3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (_v0) {
      delete _v0.headers[_v0];
    }), (_v0.adapter || _v6.adapter)(_v0).then(function (_v0) {
      return _v8(_v0), _v0.data = _v4.call(_v0, _v0.data, _v0.headers, _v0.transformResponse), _v0;
    }, function (_v0) {
      return !_v5(_v0) && (_v8(_v0), _v0 && _v0.response && (_v0.response.data = _v4.call(_v0, _v0.response.data, _v0.response.headers, _v0.transformResponse))), Promise.reject(_v0);
    });
  };
}