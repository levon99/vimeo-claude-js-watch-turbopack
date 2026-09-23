{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["Annotation", 0, ({
    label: _v0,
    placement: _v1 = "top",
    offset: _v2 = _v6.DEFAULT_TOOLTIP_OFFSET,
    color: _v3,
    maxW: _v4 = 500,
    ml: _v5 = (0, _v3.rem)(8)
  }) => {
    let {
        modalRef: _v6
      } = (0, _v2.useContext)(_v7.RefsState),
      _v7 = (0, _v8.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.isMobileOrTab) ? (0, _v3.rem)(window.innerWidth / 1.5) : _v4;
    return (0, _v1.jsx)(_v4.Tooltip, {
      placement: _v1,
      label: _v0,
      portalProps: {
        containerRef: _v6
      },
      offset: _v2,
      maxW: _v7,
      children: (0, _v1.jsx)("span", {
        tabIndex: 0,
        style: {
          display: "flex"
        },
        children: (0, _v1.jsx)(_v5.InfoCircle, {
          "data-testid": "info-icon",
          boxSize: "2xs",
          ml: _v5,
          color: _v3
        })
      })
    });
  }]);
}