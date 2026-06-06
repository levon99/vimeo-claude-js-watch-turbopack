{
  "use strict";

  _v0.s(["default", 0, function (_v0) {
    if (!document) return !1;
    let _v1 = document.createElement("input");
    if (_v1.setAttribute("style", "position: absolute; left: -2000px"), _v1.setAttribute("value", _v0), document.body.appendChild(_v1), navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      _v1.contentEditable = !0, _v1.readOnly = !1;
      let _v0 = document.createRange();
      _v0.selectNodeContents(_v1);
      let _v1 = window.getSelection();
      _v1 && (_v1.removeAllRanges(), _v1.addRange(_v0)), _v1.setSelectionRange(0, 0);
    } else _v1.select();
    try {
      return document.execCommand("copy"), document.body.removeChild(_v1), !0;
    } catch (_v0) {
      return document.body.removeChild(_v1), !1;
    }
  }]);
}