{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7 = _v8.exec(_v0 = (0, _v4.escapeSpecialCharacters)(_v0)),
      _v8 = null == (_v1 = null == _v7 ? void 0 : _v7[1]) ? void 0 : _v1.toLowerCase();
    switch (_v8) {
      case _v5:
        var _v9 = _v10(_v0);
        if (!(0, _v4.hasOpenTag)(_v0, _v6)) {
          var _v10 = _v9.querySelector(_v6);
          null == (_v2 = null == _v10 ? void 0 : _v10.parentNode) || _v2.removeChild(_v10);
        }
        if (!(0, _v4.hasOpenTag)(_v0, _v7)) {
          var _v10 = _v9.querySelector(_v7);
          null == (_v3 = null == _v10 ? void 0 : _v10.parentNode) || _v3.removeChild(_v10);
        }
        return _v9.querySelectorAll(_v5);
      case _v6:
      case _v7:
        var _v11 = _v9(_v0).querySelectorAll(_v8);
        if ((0, _v4.hasOpenTag)(_v0, _v7) && (0, _v4.hasOpenTag)(_v0, _v6)) return null != (_v5 = null == (_v4 = _v11[0].parentNode) ? void 0 : _v4.childNodes) ? _v5 : _v15();
        return _v11;
      default:
        if (_v3) return _v3(_v0);
        var _v10 = _v9(_v0, _v7).querySelector(_v7);
        return null != (_v6 = null == _v10 ? void 0 : _v10.childNodes) ? _v6 : _v15();
    }
  };
  var _v3,
    _v4 = _v0.r(0),
    _v5 = "html",
    _v6 = "head",
    _v7 = "body",
    _v8 = /<([a-zA-Z]+[0-9]?)/,
    _v9 = function (_v0, _v1) {
      throw Error("This browser does not support `document.implementation.createHTMLDocument`");
    },
    _v10 = function (_v0, _v1) {
      throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
    },
    _v11 = "object" == typeof window && window.DOMParser;
  if ("function" == typeof _v11) {
    var _v12 = new _v11();
    _v9 = _v10 = function (_v0, _v1) {
      return _v1 && (_v0 = "<".concat(_v1, ">").concat(_v0, "</").concat(_v1, ">")), _v12.parseFromString(_v0, "text/html");
    };
  }
  if ("object" == typeof document && document.implementation) {
    var _v13 = document.implementation.createHTMLDocument();
    _v9 = function (_v0, _v1) {
      if (_v1) {
        var _v2 = _v13.documentElement.querySelector(_v1);
        return _v2 && (_v2.innerHTML = _v0), _v13;
      }
      return _v13.documentElement.innerHTML = _v0, _v13;
    };
  }
  var _v14 = "object" == typeof document && document.createElement("template");
  _v14 && _v14.content && (_v3 = function (_v0) {
    return _v14.innerHTML = _v0, _v14.content.childNodes;
  });
  var _v15 = function () {
    return document.createDocumentFragment().childNodes;
  };
}