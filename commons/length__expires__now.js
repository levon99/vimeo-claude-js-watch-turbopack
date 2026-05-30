{
  "use strict";

  function _v1(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = arguments[_v1];
      for (var _v3 in _v2) _v0[_v3] = _v2[_v3];
    }
    return _v0;
  }
  var _v2 = function _v0(_v1, _v2) {
    function _v3(_v0, _v1, _v2) {
      if ("u" > typeof document) {
        "number" == typeof (_v2 = _v1({}, _v2, _v2)).expires && (_v2.expires = new Date(Date.now() + 0 * _v2.expires)), _v2.expires && (_v2.expires = _v2.expires.toUTCString()), _v0 = encodeURIComponent(_v0).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var _v3 = "";
        for (var _v4 in _v2) _v2[_v4] && (_v3 += "; " + _v4, !0 !== _v2[_v4] && (_v3 += "=" + _v2[_v4].split(";")[0]));
        return document.cookie = _v0 + "=" + _v1.write(_v1, _v0) + _v3;
      }
    }
    return Object.create({
      set: _v3,
      get: function (_v0) {
        if ("u" > typeof document && (!arguments.length || _v0)) {
          for (var _v1 = document.cookie ? document.cookie.split("; ") : [], _v2 = {}, _v3 = 0; _v3 < _v1.length; _v3++) {
            var _v4 = _v1[_v3].split("="),
              _v5 = _v4.slice(1).join("=");
            try {
              var _v6 = decodeURIComponent(_v4[0]);
              if (_v2[_v6] = _v1.read(_v5, _v6), _v0 === _v6) break;
            } catch (_v0) {}
          }
          return _v0 ? _v2[_v0] : _v2;
        }
      },
      remove: function (_v0, _v1) {
        _v3(_v0, "", _v1({}, _v1, {
          expires: -1
        }));
      },
      withAttributes: function (_v0) {
        return _v0(this.converter, _v1({}, this.attributes, _v0));
      },
      withConverter: function (_v0) {
        return _v0(_v1({}, this.converter, _v0), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(_v2)
      },
      converter: {
        value: Object.freeze(_v1)
      }
    });
  }({
    read: function (_v0) {
      return '"' === _v0[0] && (_v0 = _v0.slice(1, -1)), _v0.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (_v0) {
      return encodeURIComponent(_v0).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  }, {
    path: "/"
  });
  _v0.s(["default", 0, _v2]);
}