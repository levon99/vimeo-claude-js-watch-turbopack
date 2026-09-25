{
  var _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18;
  _v3 = _v0.e, _v4 = function (_v0, _v1, _v2) {
    if (!_v11(_v1) || _v13(_v1) || _v14(_v1) || _v15(_v1) || _v10(_v1)) return _v1;
    var _v3,
      _v4 = 0,
      _v5 = 0;
    if (_v12(_v1)) for (_v3 = [], _v5 = _v1.length; _v4 < _v5; _v4++) _v3.push(_v4(_v0, _v1[_v4], _v2));else for (var _v6 in _v3 = {}, _v1) Object.prototype.hasOwnProperty.call(_v1, _v6) && (_v3[_v0(_v6, _v2)] = _v4(_v0, _v1[_v6], _v2));
    return _v3;
  }, _v5 = function (_v0, _v1) {
    var _v2 = (_v1 = _v1 || {}).separator || "_",
      _v3 = _v1.split || /(?=[A-Z])/;
    return _v0.split(_v3).join(_v2);
  }, _v6 = function (_v0) {
    return _v16(_v0) ? _v0 : (_v0 = _v0.replace(/[\-_\s]+(.)?/g, function (_v0, _v1) {
      return _v1 ? _v1.toUpperCase() : "";
    })).substr(0, 1).toLowerCase() + _v0.substr(1);
  }, _v7 = function (_v0) {
    var _v1 = _v6(_v0);
    return _v1.substr(0, 1).toUpperCase() + _v1.substr(1);
  }, _v8 = function (_v0, _v1) {
    return _v5(_v0, _v1).toLowerCase();
  }, _v9 = Object.prototype.toString, _v10 = function (_v0) {
    return "function" == typeof _v0;
  }, _v11 = function (_v0) {
    return _v0 === Object(_v0);
  }, _v12 = function (_v0) {
    return "[object Array]" == _v9.call(_v0);
  }, _v13 = function (_v0) {
    return "[object Date]" == _v9.call(_v0);
  }, _v14 = function (_v0) {
    return "[object RegExp]" == _v9.call(_v0);
  }, _v15 = function (_v0) {
    return "[object Boolean]" == _v9.call(_v0);
  }, _v16 = function (_v0) {
    return (_v0 -= 0) == _v0;
  }, _v17 = function (_v0, _v1) {
    var _v2 = _v1 && "process" in _v1 ? _v1.process : _v1;
    return "function" != typeof _v2 ? _v0 : function (_v0, _v1) {
      return _v2(_v0, _v0, _v1);
    };
  }, _v18 = {
    camelize: _v6,
    decamelize: _v8,
    pascalize: _v7,
    depascalize: _v8,
    camelizeKeys: function (_v0, _v1) {
      return _v4(_v17(_v6, _v1), _v0);
    },
    decamelizeKeys: function (_v0, _v1) {
      return _v4(_v17(_v8, _v1), _v0, _v1);
    },
    pascalizeKeys: function (_v0, _v1) {
      return _v4(_v17(_v7, _v1), _v0);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  }, "function" == typeof define && define.amd ? _v0.v(_v18) : _v1.exports ? _v1.exports = _v18 : _v3.humps = _v18;
}