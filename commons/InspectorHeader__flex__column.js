{
  "use strict";

  _v0.s(["InspectorHeader", () => _v16]);
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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = ({
    title: _v0,
    quickActions: _v1,
    info: _v2,
    hasBackButton: _v3,
    children: _v4
  }) => {
    let _v5 = (0, _v15.useAppDispatch)();
    return (0, _v1.jsxs)(_v5.PanelHeader, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      children: [(0, _v1.jsx)(_v2.Box, {
        children: (0, _v1.jsxs)(_v3.Flex, {
          gap: "xs",
          alignItems: "center",
          flex: 1,
          children: [_v3 && (0, _v1.jsx)(_v4.IconButton, {
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v9.ChevronLeft, {}),
            "aria-label": "inspector-panel-back-btn",
            "data-testid": _v13.testIds.inspector.backButton,
            onClick: () => _v5((0, _v12.openLastApplicableInspectorAction)({
              skipCurrentInspector: !0
            })),
            pointerEvents: "auto"
          }), (0, _v1.jsxs)(_v3.Flex, {
            flex: "1",
            children: [(0, _v1.jsx)(_v7.Text, {
              as: "h1",
              variant: "heading-sm",
              lineHeight: (0, _v6.rem)(32),
              "data-testid": _v13.testIds.inspector.title,
              children: _v0
            }), _v2 && (0, _v1.jsx)(_v8.Tooltip, {
              label: (0, _v1.jsx)(_v2.Box, {
                maxWidth: "250px",
                children: _v2
              }),
              children: (0, _v1.jsx)(_v3.Flex, {
                height: "min-content",
                alignSelf: "center",
                alignItems: "center",
                marginLeft: "4px",
                children: (0, _v1.jsx)(_v11.InfoCircle, {
                  color: "text-secondary",
                  boxSize: "2xs"
                })
              })
            })]
          }), _v1, (0, _v1.jsx)(_v4.IconButton, {
            "data-testid": "inspector-close-button",
            onClick: () => _v5((0, _v14.closeInspectorAction)()),
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v10.CloseX, {}),
            "aria-label": "inspector-close-button"
          })]
        })
      }), (0, _v1.jsx)(_v3.Flex, {
        flexDirection: "column",
        children: _v4
      })]
    });
  };
}