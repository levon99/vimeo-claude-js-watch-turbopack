{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    HTML_LIMITED_BOT_UA_RE: function () {
      return _v5.HTML_LIMITED_BOT_UA_RE;
    },
    HTML_LIMITED_BOT_UA_RE_STRING: function () {
      return _v7;
    },
    getBotType: function () {
      return _v10;
    },
    isBot: function () {
      return _v9;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = /Googlebot(?!-)|Googlebot$/i,
    _v7 = _v5.HTML_LIMITED_BOT_UA_RE.source;
  function _v8(_v0) {
    return _v5.HTML_LIMITED_BOT_UA_RE.test(_v0);
  }
  function _v9(_v0) {
    return _v6.test(_v0) || _v8(_v0);
  }
  function _v10(_v0) {
    return _v6.test(_v0) ? "dom" : _v8(_v0) ? "html" : void 0;
  }
}