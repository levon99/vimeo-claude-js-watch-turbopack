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
    _v10 = _v0.i(0);
  function _v11({
    id: _v0,
    className: _v1,
    variant: _v2,
    onClick: _v3,
    ..._v4
  }) {
    return (0, _v1.jsx)(_v8.MenuButton, {
      id: _v0,
      className: _v1,
      as: _v9.IconButton,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      variant: _v2 || "secondary",
      size: "xs",
      width: (0, _v3.rem)(24),
      height: (0, _v3.rem)(24),
      icon: (0, _v1.jsx)(_v10.EllipsisV, {}),
      onClick: _v3,
      ..._v4
    });
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.s(["BokehMenu", 0, function ({
    isOpen: _v0,
    isDisabled: _v1,
    onClick: _v2,
    id: _v3 = "",
    className: _v4 = "",
    onClose: _v5,
    menuList: _v6,
    placement: _v7 = "right-start",
    isInPortal: _v8 = !0,
    variant: _v9
  }) {
    let [_v10, _v11] = (0, _v2.useState)(!1),
      _v12 = (0, _v2.useCallback)(_v0 => {
        (0, _v13.stopEventPropagation)(_v0), _v11(!1), _v2();
      }, [_v2]);
    return (0, _v1.jsxs)(_v4.Menu, {
      isOpen: _v0,
      onClose: _v5,
      placement: _v7,
      gutter: 16,
      closeOnSelect: !1,
      children: [(0, _v1.jsx)(_v7.BokehTooltip, {
        isOpen: _v10,
        label: _v12.T_MORE,
        children: (0, _v1.jsx)(_v11, {
          id: (0, _v14.createDomName)(_v3, "button"),
          className: _v4,
          variant: _v9,
          isDisabled: _v1,
          onMouseEnter: () => _v11(!0),
          onMouseLeave: () => _v11(!1),
          onClick: _v12
        })
      }), _v8 ? (0, _v1.jsx)(_v5.Portal, {
        children: (0, _v1.jsx)(_v6.MenuList, {
          id: (0, _v14.createDomName)(_v3, "popover"),
          overflow: "hidden",
          minWidth: (0, _v3.rem)(142),
          children: _v6
        })
      }) : (0, _v1.jsx)(_v6.MenuList, {
        id: (0, _v14.createDomName)(_v3, "popover"),
        overflow: "hidden",
        minWidth: (0, _v3.rem)(142),
        children: _v6
      })]
    });
  }], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  _v0.s(["BokehMenuItem", 0, function ({
    children: _v0,
    icon: _v1,
    dataId: _v2,
    ..._v3
  }) {
    return (0, _v1.jsx)(_v15.MenuItem, {
      padding: `${(0, _v3.rem)(8)} ${(0, _v3.rem)(16)} ${(0, _v3.rem)(8)} ${_v1 ? (0, _v3.rem)(8) : (0, _v3.rem)(16)}`,
      ...(_v1 ? {
        icon: (0, _v1.jsx)(_v16.Flex, {
          justifyContent: "center",
          alignItems: "center",
          children: _v1
        })
      } : {}),
      "data-id": _v2,
      fontSize: "text-sm",
      sx: {
        svg: {
          width: (0, _v3.rem)(20),
          height: (0, _v3.rem)(20),
          path: {
            fill: "text-primary"
          }
        }
      },
      ..._v3,
      children: _v0
    });
  }], 0);
}