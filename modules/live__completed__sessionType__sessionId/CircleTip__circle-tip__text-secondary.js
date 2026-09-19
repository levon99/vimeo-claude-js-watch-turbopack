{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["CircleTip", 0, function ({
    id: _v0 = (0, _v5.createDomName)("circle-tip"),
    className: _v1 = (0, _v5.createDomName)("circle-tip"),
    placement: _v2,
    color: _v3 = "text-secondary",
    width: _v4 = (0, _v3.rem)(300),
    label: _v5,
    iconBoxSize: _v6 = 16,
    as: _v7
  }) {
    return _v5 ? (0, _v1.jsx)(_v6.BokehTooltip, {
      label: _v5,
      placement: _v2,
      width: _v4,
      maxWidth: _v4,
      children: (0, _v1.jsx)(_v2.Flex, {
        as: _v7,
        id: _v0,
        className: _v1,
        position: "relative",
        cursor: "pointer",
        children: (0, _v1.jsx)(_v4.InfoCircle, {
          boxSize: _v6,
          color: _v3
        })
      })
    }) : null;
  }]);
}