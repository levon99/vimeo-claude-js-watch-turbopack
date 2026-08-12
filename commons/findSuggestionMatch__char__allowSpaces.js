{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["findSuggestionMatch", 0, function (_v0) {
    let {
        char: _v1,
        allowSpaces: _v2,
        allowedPrefixes: _v3,
        startOfLine: _v4,
        $position: _v5
      } = _v0,
      _v6 = (0, _v1.escapeForRegEx)(_v1),
      _v7 = RegExp(`\\s${_v6}$`),
      _v8 = _v4 ? "^" : "",
      _v9 = _v2 ? RegExp(`${_v8}${_v6}[^\\s].*?(?=\\s${_v6}|$)`, "gm") : RegExp(`${_v8}(?:^)?\\B${_v6}(\\S+)*`, "gm"),
      _v10 = _v5.nodeBefore?.isText && _v5.nodeBefore.text;
    if (!_v10) return null;
    let _v11 = _v5.pos - _v10.length,
      _v12 = Array.from(_v10.matchAll(_v9)).pop();
    if (!_v12 || void 0 === _v12.input || void 0 === _v12.index) return null;
    let _v13 = _v12.input.slice(Math.max(0, _v12.index - 1), _v12.index),
      _v14 = RegExp(`^[${_v3?.join("")}\0]?$`).test(_v13);
    if (null !== _v3 && !_v14) return null;
    let _v15 = _v11 + _v12.index,
      _v16 = _v15 + _v12[0].length;
    return _v12[0].length < 2 ? null : (_v2 && _v7.test(_v10.slice(_v16 - 1, _v16 + 1)) && (_v12[0] += " ", _v16 += 1), _v15 < _v5.pos && _v16 >= _v5.pos) ? {
      range: {
        from: _v15,
        to: _v16
      },
      query: _v12[0].slice(_v1.length),
      text: _v12[0]
    } : null;
  }]);
}