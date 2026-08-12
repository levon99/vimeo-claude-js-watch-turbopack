{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.htmlToDOM = _v2.domToReact = _v2.attributesToProps = _v2.Text = _v2.ProcessingInstruction = _v2.Element = _v2.Comment = void 0, _v2.default = function (_v0, _v1) {
    var _v2;
    if ("string" != typeof _v0) throw TypeError("First argument must be a string");
    return _v0 ? (0, _v5.default)((0, _v4.default)(_v0, null != (_v2 = null == _v1 ? void 0 : _v1.htmlparser2) ? _v2 : _v7), _v1) : [];
  };
  var _v4 = _v3(_v0.r(0));
  _v2.htmlToDOM = _v4.default, _v2.attributesToProps = _v3(_v0.r(0)).default;
  var _v5 = _v3(_v0.r(0));
  _v2.domToReact = _v5.default;
  var _v6 = _v0.r(0);
  Object.defineProperty(_v2, "Comment", {
    enumerable: !0,
    get: function () {
      return _v6.Comment;
    }
  }), Object.defineProperty(_v2, "Element", {
    enumerable: !0,
    get: function () {
      return _v6.Element;
    }
  }), Object.defineProperty(_v2, "ProcessingInstruction", {
    enumerable: !0,
    get: function () {
      return _v6.ProcessingInstruction;
    }
  }), Object.defineProperty(_v2, "Text", {
    enumerable: !0,
    get: function () {
      return _v6.Text;
    }
  });
  var _v7 = {
    lowerCaseAttributeNames: !1
  };
}