{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    if (!_v1.safeDocument || !_v1.safeWindow) return !1;
    let _v1 = _v1.safeDocument.createElement("textarea");
    _v1.value = _v0, _v1.setAttribute("readonly", ""), _v1.setAttribute("aria-hidden", "true"), _v1.setAttribute("style", "position: fixed; top: 0; left: -9999px; opacity: 0"), (_v1.safeDocument.fullscreenElement ?? _v1.safeDocument.body).appendChild(_v1), _v1.focus({
      preventScroll: !0
    }), _v1.select(), _v1.setSelectionRange(0, _v0.length);
    try {
      return _v1.safeDocument.execCommand("copy");
    } catch {
      return !1;
    } finally {
      _v1.remove();
    }
  }
  _v0.s(["default", 0, function (_v0) {
    return !!_v1.safeDocument && !!_v1.safeWindow && (_v1.safeNavigator?.clipboard?.writeText ? (_v1.safeNavigator.clipboard.writeText(_v0).catch(() => {
      _v2(_v0);
    }), !0) : _v2(_v0));
  }]);
}