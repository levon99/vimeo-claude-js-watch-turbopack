{
  "use strict";

  var _v3 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    var _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10 = !1;
    _v1 || (_v1 = {}), _v4 = _v1.debug || !1;
    try {
      if (_v6 = _v3(), _v7 = document.createRange(), _v8 = document.getSelection(), (_v9 = document.createElement("span")).textContent = _v0, _v9.style.all = "unset", _v9.style.position = "fixed", _v9.style.top = 0, _v9.style.clip = "rect(0, 0, 0, 0)", _v9.style.whiteSpace = "pre", _v9.style.webkitUserSelect = "text", _v9.style.MozUserSelect = "text", _v9.style.msUserSelect = "text", _v9.style.userSelect = "text", _v9.addEventListener("copy", function (_v0) {
        _v0.stopPropagation(), _v1.format && (_v0.preventDefault(), _v0.clipboardData.clearData(), _v0.clipboardData.setData(_v1.format, _v0));
      }), document.body.appendChild(_v9), _v7.selectNodeContents(_v9), _v8.addRange(_v7), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
      _v10 = !0;
    } catch (_v0) {
      _v4 && console.error("unable to copy using execCommand: ", _v0), _v4 && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(_v1.format || "text", _v0), _v10 = !0;
      } catch (_v0) {
        _v4 && console.error("unable to copy using clipboardData: ", _v0), _v4 && console.error("falling back to prompt"), _v2 = "message" in _v1 ? _v1.message : "Copy to clipboard: #{key}, Enter", _v3 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", _v5 = _v2.replace(/#{\s*key\s*}/g, _v3), window.prompt(_v5, _v0);
      }
    } finally {
      _v8 && ("function" == typeof _v8.removeRange ? _v8.removeRange(_v7) : _v8.removeAllRanges()), _v9 && document.body.removeChild(_v9), _v6();
    }
    return _v10;
  };
}