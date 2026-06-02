{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["PreviewWatchersCount", 0, function ({
    id: _v0 = (0, _v6.createDomName)("preview-watchers-count"),
    className: _v1 = (0, _v6.createDomName)("preview-watchers-count"),
    stats: _v2
  }) {
    let _v3 = _v2?.viewers?.current ?? 0,
      _v4 = (0, _v2.useMemo)(() => String(_v3 >= 0 ? (_v3 / 0).toFixed(1) + "k" : _v3), [_v3]);
    return (0, _v1.jsxs)(_v4.Center, {
      id: _v0,
      className: _v1,
      gap: (0, _v3.rem)(4),
      paddingX: (0, _v3.rem)(5),
      background: "rgba(18,18,18,0.9)",
      color: "white",
      borderRadius: "subtle",
      fontSize: "text-sm",
      sx: {
        "font-variant-numeric": "tabular-nums slashed-zero"
      },
      children: [(0, _v1.jsx)(_v5.PersonUserFilled, {
        width: 12,
        fill: "white"
      }), _v4]
    });
  }]);
}