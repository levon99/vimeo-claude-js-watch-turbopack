{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["PanelEmptyState", 0, function ({
    id: _v0 = (0, _v6.createDomName)("panel-empty-state"),
    className: _v1 = (0, _v6.createDomName)("panel-empty-state"),
    title: _v2,
    description: _v3,
    icon: _v4,
    isWithScroll: _v5 = !1,
    isWithPadding: _v6 = !1,
    flexGrow: _v7 = 1,
    height: _v8 = "100%",
    control: _v9,
    buttonLeftIcon: _v10,
    buttonLabel: _v11,
    onButtonClick: _v12
  }) {
    let _v13 = "0";
    return _v6 && _v5 ? _v13 = `${(0, _v2.rem)(24)} ${(0, _v2.rem)(48)} ${(0, _v2.rem)(24)} ${(0, _v2.rem)(24)}` : _v6 ? _v13 = (0, _v2.rem)(24) : _v5 && (_v13 = `0 ${(0, _v2.rem)(20)} 0 0`), (0, _v1.jsxs)(_v3.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      alignItems: "center",
      width: "100%",
      flexGrow: _v7,
      height: _v8,
      minHeight: 0,
      padding: _v13,
      children: [(0, _v1.jsxs)(_v3.Flex, {
        alignItems: "center",
        justifyContent: "center",
        direction: "column",
        flexGrow: 1,
        width: "100%",
        gap: (0, _v2.rem)(8),
        children: [_v4 ? (0, _v1.jsx)(_v3.Flex, {
          id: (0, _v6.createDomName)(_v0, "icon"),
          className: (0, _v6.createDomName)(_v1, "icon"),
          alignItems: "center",
          justifyContent: "center",
          children: _v4
        }) : null, _v2 || _v3 ? (0, _v1.jsxs)(_v3.Flex, {
          direction: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          children: [_v2 ? (0, _v1.jsx)(_v5.Text, {
            variant: "body-xl",
            fontFamily: "heading",
            children: _v2
          }) : null, _v3 ? (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: _v3
          }) : null]
        }) : null]
      }), (0, _v1.jsx)(_v3.Flex, {
        direction: "column",
        width: "100%",
        children: !0 !== _v9 && (_v9 || null === _v9 || !1 === _v9) ? _v9 : (0, _v1.jsx)(_v4.Button, {
          id: (0, _v6.createDomName)(_v0, "button"),
          className: (0, _v6.createDomName)(_v0, "button"),
          variant: "primary",
          width: "100%",
          leftIcon: _v10,
          onClick: _v12,
          children: _v11
        })
      })]
    });
  }]);
}