{
  "use strict";

  function _v1(_v0) {
    return null != _v0 && "object" == typeof _v0 && "nodeType" in _v0 && _v0.nodeType === Node.ELEMENT_NODE;
  }
  function _v2(_v0) {
    var _v1;
    if (!_v1(_v0)) return !1;
    let _v2 = null != (_v1 = _v0.ownerDocument.defaultView) ? _v1 : window;
    return _v0 instanceof _v2.HTMLElement;
  }
  function _v3(_v0) {
    return _v1(_v0) ? _v0.ownerDocument : document;
  }
  _v0.s(["contains", 0, function (_v0, _v1) {
    return !!_v0 && (_v0 === _v1 || _v0.contains(_v1));
  }, "getActiveElement", 0, function (_v0) {
    return _v3(_v0).activeElement;
  }, "getEventWindow", 0, function (_v0) {
    var _v1;
    return null != (_v1 = _v0.view) ? _v1 : window;
  }, "getOwnerDocument", 0, _v3, "getOwnerWindow", 0, function (_v0) {
    var _v1, _v2;
    return null != (_v2 = null == (_v1 = _v3(_v0)) ? void 0 : _v1.defaultView) ? _v2 : window;
  }, "isBrowser", 0, function () {
    return !!(null == globalThis ? void 0 : globalThis.document);
  }, "isElement", 0, _v1, "isHTMLElement", 0, _v2], 0), _v0.s(["getScrollParent", 0, function _v0(_v1) {
    return ["html", "body", "#document"].includes(_v1.localName) ? _v1.ownerDocument.body : _v2(_v1) && function (_v0) {
      let {
        overflow: _v1,
        overflowX: _v2,
        overflowY: _v3
      } = (_v0.ownerDocument.defaultView || window).getComputedStyle(_v0);
      return /auto|scroll|overlay|hidden/.test(_v1 + _v3 + _v2);
    }(_v1) ? _v1 : _v0("html" === _v1.localName ? _v1 : _v1.assignedSlot || _v1.parentElement || _v1.ownerDocument.documentElement);
  }], 0);
}