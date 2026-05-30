{
  var _v3 = function () {
    function _v0() {
      for (var _v0 = 0, _v1 = {}; _v0 < arguments.length; _v0++) {
        var _v2 = arguments[_v0];
        for (var _v3 in _v2) _v1[_v3] = _v2[_v3];
      }
      return _v1;
    }
    function _v1(_v0) {
      return _v0.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return function _v0(_v1) {
      function _v2() {}
      function _v3(_v0, _v1, _v2) {
        if ("u" > typeof document) {
          "number" == typeof (_v2 = _v0({
            path: "/"
          }, _v2.defaults, _v2)).expires && (_v2.expires = new Date(new Date() * 1 + 0 * _v2.expires)), _v2.expires = _v2.expires ? _v2.expires.toUTCString() : "";
          try {
            var _v3 = JSON.stringify(_v1);
            /^[\{\[]/.test(_v3) && (_v1 = _v3);
          } catch (_v0) {}
          _v1 = _v1.write ? _v1.write(_v1, _v0) : encodeURIComponent(String(_v1)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), _v0 = encodeURIComponent(String(_v0)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var _v4 = "";
          for (var _v5 in _v2) _v2[_v5] && (_v4 += "; " + _v5, !0 !== _v2[_v5] && (_v4 += "=" + _v2[_v5].split(";")[0]));
          return document.cookie = _v0 + "=" + _v1 + _v4;
        }
      }
      function _v4(_v0, _v1) {
        if ("u" > typeof document) {
          for (var _v2 = {}, _v3 = document.cookie ? document.cookie.split("; ") : [], _v4 = 0; _v4 < _v3.length; _v4++) {
            var _v5 = _v3[_v4].split("="),
              _v6 = _v5.slice(1).join("=");
            _v1 || '"' !== _v6.charAt(0) || (_v6 = _v6.slice(1, -1));
            try {
              var _v7 = _v1(_v5[0]);
              if (_v6 = (_v1.read || _v1)(_v6, _v7) || _v1(_v6), _v1) try {
                _v6 = JSON.parse(_v6);
              } catch (_v0) {}
              if (_v2[_v7] = _v6, _v0 === _v7) break;
            } catch (_v0) {}
          }
          return _v0 ? _v2[_v0] : _v2;
        }
      }
      return _v2.set = _v3, _v2.get = function (_v0) {
        return _v4(_v0, !1);
      }, _v2.getJSON = function (_v0) {
        return _v4(_v0, !0);
      }, _v2.remove = function (_v0, _v1) {
        _v3(_v0, "", _v0(_v1, {
          expires: -1
        }));
      }, _v2.defaults = {}, _v2.withConverter = _v0, _v2;
    }(function () {});
  };
  if ("function" == typeof define && define.amd) {
    let _v0;
    void 0 !== (_v0 = _v3(_v0.r, _v2, _v1)) && _v0.v(_v0);
  }
  _v1.exports = _v3();
}