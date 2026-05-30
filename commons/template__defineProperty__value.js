{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.formatAttributes = _v5, _v2.hasOpenTag = function (_v0, _v1) {
    var _v2 = "<" + _v1,
      _v3 = _v0.toLowerCase().indexOf(_v2);
    if (-1 === _v3) return !1;
    var _v4 = _v0[_v3 + _v2.length];
    return ">" === _v4 || " " === _v4 || "	" === _v4 || "\n" === _v4 || "\r" === _v4 || "/" === _v4;
  }, _v2.escapeSpecialCharacters = function (_v0) {
    return _v0.replace(_v4.CARRIAGE_RETURN_REGEX, _v4.CARRIAGE_RETURN_PLACEHOLDER);
  }, _v2.revertEscapedCharacters = _v6, _v2.formatDOM = function _v0(_v1, _v2, _v3) {
    void 0 === _v2 && (_v2 = null);
    for (var _v4, _v5, _v6, _v7, _v8, _v9 = [], _v10 = 0, _v11 = _v1.length; _v10 < _v11; _v10++) {
      var _v12 = _v1[_v10];
      switch (_v12.nodeType) {
        case 1:
          var _v13 = function (_v0) {
            var _v1,
              _v2 = (_v1 = _v0 = _v0.toLowerCase(), _v4.CASE_SENSITIVE_TAG_NAMES_MAP[_v1]);
            return _v2 || _v0;
          }(_v12.nodeName);
          (_v8 = new _v3.Element(_v13, _v5(_v12.attributes))).children = _v0("template" === _v13 ? _v12.content.childNodes : _v12.childNodes, _v8);
          break;
        case 3:
          _v8 = new _v3.Text(_v6(null != (_v4 = _v12.nodeValue) ? _v4 : ""));
          break;
        case 8:
          _v8 = new _v3.Comment(null != (_v5 = _v12.nodeValue) ? _v5 : "");
          break;
        default:
          continue;
      }
      var _v14 = null != (_v6 = _v9[_v10 - 1]) ? _v6 : null;
      _v14 && (_v14.next = _v8), _v8.parent = _v2, _v8.prev = _v14, _v8.next = null, _v9.push(_v8);
    }
    return _v3 && ((_v8 = new _v3.ProcessingInstruction(_v3.substring(0, _v3.indexOf(" ")).toLowerCase(), _v3)).next = null != (_v7 = _v9[0]) ? _v7 : null, _v8.parent = _v2, _v9.unshift(_v8), _v9[1] && (_v9[1].prev = _v9[0])), _v9;
  };
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0) {
    for (var _v1 = {}, _v2 = 0, _v3 = _v0.length; _v2 < _v3; _v2++) {
      var _v4 = _v0[_v2];
      _v1[_v4.name] = _v4.value;
    }
    return _v1;
  }
  function _v6(_v0) {
    return _v0.replace(_v4.CARRIAGE_RETURN_PLACEHOLDER_REGEX, _v4.CARRIAGE_RETURN);
  }
}