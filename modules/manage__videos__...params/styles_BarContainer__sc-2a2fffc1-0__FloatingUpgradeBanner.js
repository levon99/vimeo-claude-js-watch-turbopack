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
  let _v9 = _v6.default.div.withConfig({
    displayName: "styles__BarContainer",
    componentId: "sc-2a2fffc1-0"
  })`
  background: ${_v8.UPGRADE_VIOLET_BG};
  border-radius: ${(0, _v5.rem)(12)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(0, _v5.rem)(12)} ${(0, _v5.rem)(14)};
  color: ${(0, _v7.violet)(800)};

  ${({
    isFixed: _v0
  }) => _v0 ? _v6.css`
          position: fixed !important;
          bottom: ${(0, _v5.rem)(30)};
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
        ` : _v6.css`
          position: absolute;
          left: 0;
          width: 100%;
          bottom: ${(0, _v5.rem)(-80)};
        `}
`;
  var _v10 = _v0.i(0);
  _v0.s(["FloatingUpgradeBanner", 0, ({
    button: _v0,
    cta: _v1,
    id: _v2,
    fixed: _v3 = !1,
    onView: _v4,
    onClose: _v5,
    style: _v6,
    tracking: _v7,
    modalConfig: _v8
  }) => ((0, _v2.useEffect)(() => (_v4 && _v4(), () => {
    _v5 && _v5();
  }), []), (0, _v1.jsxs)(_v9, {
    id: _v2,
    isFixed: _v3,
    style: _v6,
    children: [(0, _v1.jsx)(_v3.Paragraph, {
      size: "md",
      color: "purple.800",
      fontWeight: 500,
      marginRight: (0, _v4.rem)(20),
      children: _v1
    }), _v0 && (0, _v1.jsx)(_v10.UpgradeButton, {
      tracking: _v7,
      modalConfig: _v8,
      size: "sm",
      href: _v0?.href,
      onClick: _v0?.onClick,
      noMargin: !0,
      children: _v0.label
    })]
  }))], 0);
}