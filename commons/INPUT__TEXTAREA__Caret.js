{
  _v1.exports = function () {
    var _v0 = document.getSelection();
    if (!_v0.rangeCount) return function () {};
    for (var _v1 = document.activeElement, _v2 = [], _v3 = 0; _v3 < _v0.rangeCount; _v3++) _v2.push(_v0.getRangeAt(_v3));
    switch (_v1.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        _v1.blur();
        break;
      default:
        _v1 = null;
    }
    return _v0.removeAllRanges(), function () {
      "Caret" === _v0.type && _v0.removeAllRanges(), _v0.rangeCount || _v2.forEach(function (_v0) {
        _v0.addRange(_v0);
      }), _v1 && _v1.focus();
    };
  };
}