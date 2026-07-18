{
  "use strict";

  _v0.i(0);
  var _v1 = _v0.i(0),
    _v2 = _v0 => _v0.hasAttribute("tabindex"),
    _v3 = _v0 => _v2(_v0) && -1 === _v0.tabIndex;
  function _v4(_v0) {
    return !0 == !!_v0.getAttribute("disabled") || !0 == !!_v0.getAttribute("aria-disabled");
  }
  function _v5(_v0) {
    return !!(_v0.parentElement && _v5(_v0.parentElement)) || _v0.hidden;
  }
  function _v6(_v0) {
    let _v1 = _v0.getAttribute("contenteditable");
    return "false" !== _v1 && null != _v1;
  }
  function _v7(_v0) {
    if (!(0, _v1.isHTMLElement)(_v0) || _v5(_v0) || _v4(_v0)) return !1;
    let {
      localName: _v1
    } = _v0;
    if (["input", "select", "textarea", "button"].indexOf(_v1) >= 0) return !0;
    let _v2 = {
      a: () => _v0.hasAttribute("href"),
      audio: () => _v0.hasAttribute("controls"),
      video: () => _v0.hasAttribute("controls")
    };
    return _v1 in _v2 ? _v2[_v1]() : !!_v6(_v0) || _v2(_v0);
  }
  _v0.s(["hasDisplayNone", 0, _v0 => "none" === window.getComputedStyle(_v0).display, "hasFocusWithin", 0, function (_v0) {
    return !!document.activeElement && _v0.contains(document.activeElement);
  }, "hasNegativeTabIndex", 0, _v3, "hasTabIndex", 0, _v2, "isActiveElement", 0, function (_v0) {
    return ((0, _v1.isHTMLElement)(_v0) ? (0, _v1.getOwnerDocument)(_v0) : document).activeElement === _v0;
  }, "isContentEditable", 0, _v6, "isDisabled", 0, _v4, "isFocusable", 0, _v7, "isHidden", 0, _v5, "isInputElement", 0, function (_v0) {
    return (0, _v1.isHTMLElement)(_v0) && "input" === _v0.localName && "select" in _v0;
  }, "isTabbable", 0, function (_v0) {
    return !!_v0 && (0, _v1.isHTMLElement)(_v0) && _v7(_v0) && !_v3(_v0);
  }], 0);
  _v0.s(["getAllFocusable", 0, function (_v0) {
    let _v1 = Array.from(_v0.querySelectorAll("input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"));
    return _v1.unshift(_v0), _v1.filter(_v0 => _v7(_v0) && _v0.offsetWidth > 0 && _v0.offsetHeight > 0);
  }], 0);
}