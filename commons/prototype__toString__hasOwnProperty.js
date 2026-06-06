{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = /^\[object .+?Constructor\]$/,
    _v8 = Object.prototype,
    _v9 = Function.prototype.toString,
    _v10 = _v8.hasOwnProperty,
    _v11 = RegExp("^" + _v9.call(_v10).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  _v1.exports = function (_v0) {
    return !(!_v5(_v0) || _v4(_v0)) && (_v3(_v0) ? _v11 : _v7).test(_v6(_v0));
  };
}