{
  "use strict";

  var _v3 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    _v4 = /\n/g,
    _v5 = /^\s*/,
    _v6 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    _v7 = /^:\s*/,
    _v8 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    _v9 = /^[;\s]*/,
    _v10 = /^\s+|\s+$/g;
  function _v11(_v0) {
    return _v0 ? _v0.replace(_v10, "") : "";
  }
  _v1.exports = function (_v0, _v1) {
    if ("string" != typeof _v0) throw TypeError("First argument must be a string");
    if (!_v0) return [];
    _v1 = _v1 || {};
    var _v2 = 1,
      _v3 = 1;
    function _v4(_v0) {
      var _v1 = _v0.match(_v4);
      _v1 && (_v2 += _v1.length);
      var _v2 = _v0.lastIndexOf("\n");
      _v3 = ~_v2 ? _v0.length - _v2 : _v3 + _v0.length;
    }
    function _v5() {
      var _v0 = {
        line: _v2,
        column: _v3
      };
      return function (_v0) {
        return _v0.position = new _v6(_v0), _v8(_v5), _v0;
      };
    }
    function _v6(_v0) {
      this.start = _v0, this.end = {
        line: _v2,
        column: _v3
      }, this.source = _v1.source;
    }
    function _v7(_v0) {
      var _v1 = Error(_v1.source + ":" + _v2 + ":" + _v3 + ": " + _v0);
      if (_v1.reason = _v0, _v1.filename = _v1.source, _v1.line = _v2, _v1.column = _v3, _v1.source = _v0, _v1.silent) ;else throw _v1;
    }
    function _v8(_v0) {
      var _v1 = _v0.exec(_v0);
      if (_v1) {
        var _v2 = _v1[0];
        return _v4(_v2), _v0 = _v0.slice(_v2.length), _v1;
      }
    }
    function _v9(_v0) {
      var _v1;
      for (_v0 = _v0 || []; _v1 = _v10();) !1 !== _v1 && _v0.push(_v1);
      return _v0;
    }
    function _v10() {
      var _v0 = _v5();
      if ("/" == _v0.charAt(0) && "*" == _v0.charAt(1)) {
        for (var _v1 = 2; "" != _v0.charAt(_v1) && ("*" != _v0.charAt(_v1) || "/" != _v0.charAt(_v1 + 1));) ++_v1;
        if (_v1 += 2, "" === _v0.charAt(_v1 - 1)) return _v7("End of comment missing");
        var _v2 = _v0.slice(2, _v1 - 2);
        return _v3 += 2, _v4(_v2), _v0 = _v0.slice(_v1), _v3 += 2, _v0({
          type: "comment",
          comment: _v2
        });
      }
    }
    _v6.prototype.content = _v0, _v8(_v5);
    var _v11,
      _v12 = [];
    for (_v9(_v12); _v11 = function () {
      var _v0 = _v5(),
        _v1 = _v8(_v6);
      if (_v1) {
        if (_v10(), !_v8(_v7)) return _v7("property missing ':'");
        var _v2 = _v8(_v8),
          _v3 = _v0({
            type: "declaration",
            property: _v11(_v1[0].replace(_v3, "")),
            value: _v2 ? _v11(_v2[0].replace(_v3, "")) : ""
          });
        return _v8(_v9), _v3;
      }
    }();) !1 !== _v11 && (_v12.push(_v11), _v9(_v12));
    return _v12;
  };
}