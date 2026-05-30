{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = function (_v0, _v1) {
    var _v2 = arguments;
    if (null == _v1 || !_v3.h.call(_v1, "css")) return _v4.createElement.apply(void 0, _v2);
    var _v3 = _v2.length,
      _v4 = Array(_v3);
    _v4[0] = _v3.E, _v4[1] = (0, _v3.c)(_v0, _v1);
    for (var _v5 = 2; _v5 < _v3; _v5++) _v4[_v5] = _v2[_v5];
    return _v4.createElement.apply(null, _v4);
  };
  _v1 = _v8 || (_v8 = {}), _v2 || (_v2 = _v1.JSX || (_v1.JSX = {}));
  var _v9 = (0, _v3.w)(function (_v0, _v1) {
    var _v2 = _v0.styles,
      _v3 = (0, _v7.serializeStyles)([_v2], void 0, _v4.useContext(_v3.T)),
      _v4 = _v4.useRef();
    return (0, _v6.useInsertionEffectWithLayoutFallback)(function () {
      var _v0 = _v1.key + "-global",
        _v1 = new _v1.sheet.constructor({
          key: _v0,
          nonce: _v1.sheet.nonce,
          container: _v1.sheet.container,
          speedy: _v1.sheet.isSpeedy
        }),
        _v2 = !1,
        _v3 = document.querySelector('style[data-emotion="' + _v0 + " " + _v3.name + '"]');
      return _v1.sheet.tags.length && (_v1.before = _v1.sheet.tags[0]), null !== _v3 && (_v2 = !0, _v3.setAttribute("data-emotion", _v0), _v1.hydrate([_v3])), _v4.current = [_v1, _v2], function () {
        _v1.flush();
      };
    }, [_v1]), (0, _v6.useInsertionEffectWithLayoutFallback)(function () {
      var _v0 = _v4.current,
        _v1 = _v0[0];
      if (_v0[1]) {
        _v0[1] = !1;
        return;
      }
      if (void 0 !== _v3.next && (0, _v5.insertStyles)(_v1, _v3.next, !0), _v1.tags.length) {
        var _v2 = _v1.tags[_v1.tags.length - 1].nextElementSibling;
        _v1.before = _v2, _v1.flush();
      }
      _v1.insert("", _v3, _v1, !1);
    }, [_v1, _v3.name]), null;
  });
  function _v10() {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return (0, _v7.serializeStyles)(_v1);
  }
  _v0.s(["Global", 0, _v9, "keyframes", 0, function () {
    var _v0 = _v10.apply(void 0, arguments),
      _v1 = "animation-" + _v0.name;
    return {
      name: _v1,
      styles: "@keyframes " + _v1 + "{" + _v0.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }]);
}