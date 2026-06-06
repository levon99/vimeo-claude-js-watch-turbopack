{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["EmptyStatePlaceholder", 0, function ({
    id: _v0 = (0, _v6.createDomName)("empty-tab-placeholder"),
    className: _v1 = (0, _v6.createDomName)("empty-tab-placeholder"),
    isWithScroll: _v2 = !1,
    isWithPadding: _v3 = !1,
    icon: _v4,
    control: _v5,
    buttonLabel: _v6,
    buttonLeftIcon: _v7,
    description: _v8,
    onButtonClick: _v9,
    flexGrow: _v10 = 1,
    height: _v11 = "100%"
  }) {
    let _v12 = "0";
    return _v3 && _v2 ? _v12 = `${(0, _v2.rem)(24)} ${(0, _v2.rem)(48)} ${(0, _v2.rem)(24)} ${(0, _v2.rem)(24)}` : _v3 ? _v12 = (0, _v2.rem)(24) : _v2 && (_v12 = `0 ${(0, _v2.rem)(20)} 0 0`), (0, _v1.jsxs)(_v3.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flexGrow: _v10,
      height: _v11,
      gap: (0, _v2.rem)(16),
      padding: _v12,
      children: [(0, _v1.jsx)(_v3.Flex, {
        id: (0, _v6.createDomName)(_v0, "icon"),
        className: (0, _v6.createDomName)(_v1, "icon"),
        alignItems: "flex-end",
        justifyContent: "center",
        children: _v4
      }), _v8 ? (0, _v1.jsx)(_v4.Box, {
        id: (0, _v6.createDomName)(_v0, "description"),
        className: (0, _v6.createDomName)(_v1, "description"),
        fontSize: "body-md",
        color: "text-secondary",
        textAlign: "center",
        children: _v8
      }) : null, !0 !== _v5 && (_v5 || null === _v5 || !1 === _v5) ? _v5 : (0, _v1.jsx)(_v5.Button, {
        id: (0, _v6.createDomName)(_v0, "button"),
        className: (0, _v6.createDomName)(_v0, "button"),
        size: "sm",
        variant: "primary",
        leftIcon: _v7,
        onClick: _v9,
        children: _v6
      })]
    });
  }]);
}