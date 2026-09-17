{
  "use strict";

  var _v1 = !1,
    _v2 = null,
    _v3 = !1,
    _v4 = !1,
    _v5 = new Set();
  function _v6(_v0, _v1) {
    _v5.forEach(_v0 => _v0(_v0, _v1));
  }
  var _v7 = "u" > typeof window && null != window.navigator && /^Mac/.test(window.navigator.platform);
  function _v8(_v0) {
    _v3 = !0, _v0.metaKey || !_v7 && _v0.altKey || _v0.ctrlKey || "Control" === _v0.key || "Shift" === _v0.key || "Meta" === _v0.key || (_v2 = "keyboard", _v6("keyboard", _v0));
  }
  function _v9(_v0) {
    if (_v2 = "pointer", "mousedown" === _v0.type || "pointerdown" === _v0.type) {
      _v3 = !0;
      let _v0 = _v0.composedPath ? _v0.composedPath()[0] : _v0.target,
        _v1 = !1;
      try {
        _v1 = _v0.matches(":focus-visible");
      } catch {}
      _v1 || _v6("pointer", _v0);
    }
  }
  function _v10(_v0) {
    (0 === _v0.mozInputSource && _v0.isTrusted || 0 === _v0.detail && !_v0.pointerType) && (_v3 = !0, _v2 = "virtual");
  }
  function _v11(_v0) {
    _v0.target !== window && _v0.target !== document && (_v3 || _v4 || (_v2 = "virtual", _v6("virtual", _v0)), _v3 = !1, _v4 = !1);
  }
  function _v12() {
    _v3 = !1, _v4 = !0;
  }
  function _v13() {
    return "pointer" !== _v2;
  }
  _v0.s(["trackFocusVisible", 0, function (_v0) {
    !function () {
      if (!("u" > typeof document) || _v1) return;
      let {
        focus: _v0
      } = HTMLElement.prototype;
      HTMLElement.prototype.focus = function (..._v0) {
        _v3 = !0, _v0.apply(this, _v0);
      }, document.addEventListener("keydown", _v8, !0), document.addEventListener("keyup", _v8, !0), document.addEventListener("click", _v10, !0), window.addEventListener("focus", _v11, !0), window.addEventListener("blur", _v12, !1), "u" > typeof PointerEvent ? (document.addEventListener("pointerdown", _v9, !0), document.addEventListener("pointermove", _v9, !0), document.addEventListener("pointerup", _v9, !0)) : (document.addEventListener("mousedown", _v9, !0), document.addEventListener("mousemove", _v9, !0), document.addEventListener("mouseup", _v9, !0)), _v1 = !0;
    }(), _v0(_v13());
    let _v1 = () => _v0(_v13());
    return _v5.add(_v1), () => {
      _v5.delete(_v1);
    };
  }], 0);
}