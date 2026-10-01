{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7(_v0) {
    let {
      text: _v1,
      query: _v2
    } = _v0;
    return (0, _v5.useMemo)(() => function ({
      text: _v0,
      query: _v1
    }) {
      let _v2,
        _v3 = (_v2 = (Array.isArray(_v1) ? _v1 : [_v1]).filter(_v0 => 0 !== _v0.length).map(_v0 => _v0.trim().replace(/[|\\{}()[\]^$+*?.-]/g, _v0 => `\\${_v0}`))).length ? RegExp(`(${_v2.join("|")})`, "ig") : null;
      return _v3 ? _v0.split(_v3).filter(Boolean).map(_v0 => ({
        text: _v0,
        match: _v3.test(_v0)
      })) : [{
        text: _v0,
        match: !1
      }];
    }({
      text: _v1,
      query: _v2
    }), [_v1, _v2]);
  }
  var _v8 = (0, _v2.forwardRef)(function (_v0, _v1) {
    let _v2 = (0, _v4.useStyleConfig)("Mark", _v0),
      _v3 = (0, _v3.omitThemingProps)(_v0);
    return (0, _v6.jsx)(_v1.Box, {
      ref: _v1,
      ..._v3,
      as: "mark",
      __css: {
        bg: "transparent",
        whiteSpace: "nowrap",
        ..._v2
      }
    });
  });
  _v0.s(["Highlight", 0, function (_v0) {
    let {
      children: _v1,
      query: _v2,
      styles: _v3
    } = _v0;
    if ("string" != typeof _v1) throw Error("The children prop of Highlight must be a string");
    let _v4 = _v7({
      query: _v2,
      text: _v1
    });
    return (0, _v6.jsx)(_v6.Fragment, {
      children: _v4.map((_v0, _v1) => _v0.match ? (0, _v6.jsx)(_v8, {
        sx: _v3,
        children: _v0.text
      }, _v1) : (0, _v6.jsx)(_v5.Fragment, {
        children: _v0.text
      }, _v1))
    });
  }, "Mark", 0, _v8, "useHighlight", 0, _v7]);
}