{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = (0, _v4.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.InteractionDebugContent
  })));
  function _v13() {
    let [_v0, _v1] = (0, _v4.useState)(!1),
      _v2 = (0, _v4.useCallback)(() => {
        _v1(_v0 => !_v0);
      }, []);
    return (0, _v1.jsxs)(_v4.Suspense, {
      fallback: null,
      children: [(0, _v1.jsx)(_v11.BokehTooltip, {
        label: _v10.translations.debug,
        shouldWrapChildren: !1,
        placement: "left",
        children: (0, _v1.jsx)(_v8.IconButton, {
          "aria-label": "debug",
          size: "xs",
          variant: "tertiary",
          icon: (0, _v1.jsx)(_v9.SettingsGear, {}),
          position: "absolute",
          bottom: (0, _v5.rem)(16),
          right: (0, _v5.rem)(16),
          onClick: _v2
        })
      }), (0, _v1.jsx)(_v6.Drawer, {
        isOpen: _v0,
        placement: "right",
        onClose: _v2,
        children: (0, _v1.jsx)(_v7.DrawerContent, {
          padding: (0, _v5.rem)(16),
          children: (0, _v1.jsx)(_v12, {
            onDismiss: _v2
          })
        })
      })]
    });
  }
  _v0.s(["InteractionToolsFooter", 0, function () {
    let _v0 = (0, _v3.useCanSeeDebugTools)();
    return (0, _v1.jsx)(_v2.Flex, {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 0,
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 0,
      children: _v0 ? (0, _v1.jsx)(_v13, {}) : null
    });
  }], 0);
}