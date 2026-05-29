{
  !function () {
    "use strict";

    var _v0 = {
        815: function (_v0) {
          _v0.exports = function (_v0, _v1, _v2, _v3) {
            _v1 = _v1 || "&", _v2 = _v2 || "=";
            var _v4 = {};
            if ("string" != typeof _v0 || 0 === _v0.length) return _v4;
            var _v5 = /\+/g;
            _v0 = _v0.split(_v1);
            var _v6 = 0;
            _v3 && "number" == typeof _v3.maxKeys && (_v6 = _v3.maxKeys);
            var _v7 = _v0.length;
            _v6 > 0 && _v7 > _v6 && (_v7 = _v6);
            for (var _v8 = 0; _v8 < _v7; ++_v8) {
              var _v9,
                _v10,
                _v11,
                _v12,
                _v13 = _v0[_v8].replace(_v5, "%20"),
                _v14 = _v13.indexOf(_v2);
              (_v14 >= 0 ? (_v9 = _v13.substr(0, _v14), _v10 = _v13.substr(_v14 + 1)) : (_v9 = _v13, _v10 = ""), _v11 = decodeURIComponent(_v9), _v12 = decodeURIComponent(_v10), Object.prototype.hasOwnProperty.call(_v4, _v11)) ? _v1(_v4[_v11]) ? _v4[_v11].push(_v12) : _v4[_v11] = [_v4[_v11], _v12] : _v4[_v11] = _v12;
            }
            return _v4;
          };
          var _v1 = Array.isArray || function (_v0) {
            return "[object Array]" === Object.prototype.toString.call(_v0);
          };
        },
        577: function (_v0) {
          var _v1 = function (_v0) {
            switch (typeof _v0) {
              case "string":
                return _v0;
              case "boolean":
                return _v0 ? "true" : "false";
              case "number":
                return isFinite(_v0) ? _v0 : "";
              default:
                return "";
            }
          };
          _v0.exports = function (_v0, _v1, _v2, _v3) {
            return (_v1 = _v1 || "&", _v2 = _v2 || "=", null === _v0 && (_v0 = void 0), "object" == typeof _v0) ? _v3(_v4(_v0), function (_v0) {
              var _v1 = encodeURIComponent(_v1(_v0)) + _v2;
              return _v2(_v0[_v0]) ? _v3(_v0[_v0], function (_v0) {
                return _v1 + encodeURIComponent(_v1(_v0));
              }).join(_v1) : _v1 + encodeURIComponent(_v1(_v0[_v0]));
            }).join(_v1) : _v3 ? encodeURIComponent(_v1(_v3)) + _v2 + encodeURIComponent(_v1(_v0)) : "";
          };
          var _v2 = Array.isArray || function (_v0) {
            return "[object Array]" === Object.prototype.toString.call(_v0);
          };
          function _v3(_v0, _v1) {
            if (_v0.map) return _v0.map(_v1);
            for (var _v2 = [], _v3 = 0; _v3 < _v0.length; _v3++) _v2.push(_v1(_v0[_v3], _v3));
            return _v2;
          }
          var _v4 = Object.keys || function (_v0) {
            var _v1 = [];
            for (var _v2 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v2) && _v1.push(_v2);
            return _v1;
          };
        }
      },
      _v1 = {};
    function _v2(_v0) {
      var _v1 = _v1[_v0];
      if (void 0 !== _v1) return _v1.exports;
      var _v2 = _v1[_v0] = {
          exports: {}
        },
        _v3 = !0;
      try {
        _v0[_v0](_v2, _v2.exports, _v2), _v3 = !1;
      } finally {
        _v3 && delete _v1[_v0];
      }
      return _v2.exports;
    }
    _v2.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_patch_hash=azmwsfw62nldxl7c4qn2ybcrje_@babel+core@7.29.0_@opentelemetry+api@1.9.1_bqhbchi3mg4jxn645j7xepdoua/node_modules/next/dist/compiled/querystring-es3/";
    var _v3 = {};
    _v3.decode = _v3.parse = _v2(815), _v3.encode = _v3.stringify = _v2(577), _v1.exports = _v3;
  }();
}