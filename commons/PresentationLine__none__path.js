{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["PresentationLine", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M21 14h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2Zm-3 0H6V4h12v10Zm-9-2a1 1 0 0 0 .83-.45l1.33-2 1.13 1.14a1 1 0 0 0 .81.29 1 1 0 0 0 .73-.45l2-3a1 1 0 0 0-1.66-1.1l-1.33 2-1.13-1.14A1 1 0 0 0 10.9 7a1 1 0 0 0-.73.45l-2 3a1 1 0 0 0 .28 1.38A.94.94 0 0 0 9 12Z",
      fill: "currentColor"
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["SlidesControlPanel", 0, function ({
    id: _v0 = (0, _v11.createDomName)("scene-control-panel"),
    className: _v1 = (0, _v11.createDomName)("scene-control-panel"),
    sceneId: _v2,
    descriptor: _v3,
    slides: _v4,
    onSetSceneSlideIndex: _v5
  }) {
    let {
        sourceId: _v6,
        slideIndex: _v7 = 0
      } = _v3?.data || {},
      _v8 = _v4[_v6],
      _v9 = _v8?.slides?.length || 0,
      _v10 = (0, _v3.useCallback)(() => _v2 ? _v5(_v2, _v8, _v7 - 1) : void 0, [_v5, _v2, _v8, _v7]),
      _v11 = (0, _v3.useCallback)(() => _v2 ? _v5(_v2, _v8, _v7 + 1) : void 0, [_v5, _v2, _v8, _v7]);
    return _v3 && _v8 ? (0, _v1.jsxs)(_v6.Flex, {
      alignItems: "center",
      justifyContent: "center",
      shrink: 0,
      fontWeight: "bold",
      gap: (0, _v4.rem)(8),
      children: [(0, _v1.jsx)(_v5.IconButton, {
        id: (0, _v11.createDomName)(_v0, "slide-backward"),
        className: (0, _v11.createDomName)(_v1, "slide-backward"),
        "aria-label": "back",
        isDisabled: _v7 <= 0,
        variant: "tertiary",
        icon: (0, _v1.jsx)(_v8.ChevronLeft, {}),
        size: "xs",
        onClick: _v10
      }), (0, _v1.jsxs)(_v7.Paragraph, {
        id: (0, _v11.createDomName)(_v0, "slide-count"),
        className: (0, _v11.createDomName)(_v1, "slide-count"),
        textAlign: "center",
        size: "md",
        minWidth: (0, _v4.rem)(36),
        children: [_v7 + 1, " ", _v10.T_OF, " ", _v9]
      }), (0, _v1.jsx)(_v5.IconButton, {
        id: (0, _v11.createDomName)(_v0, "slide-forward"),
        className: (0, _v11.createDomName)(_v1, "slide-forward"),
        "aria-label": "forward",
        isDisabled: _v7 >= _v9 - 1,
        variant: "tertiary",
        icon: (0, _v1.jsx)(_v9.ChevronRight, {}),
        size: "xs",
        onClick: _v11
      })]
    }) : null;
  }], 0), _v0.s(["useGraphicFromScene", 0, function (_v0, _v1) {
    return (0, _v3.useMemo)(() => Object.values(_v0?.graphics || {}).find(_v0 => _v0.type === _v1) ?? null, [_v1, _v0?.graphics]);
  }], 0);
}