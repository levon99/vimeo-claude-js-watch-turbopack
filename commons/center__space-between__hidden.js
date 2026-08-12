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
  let _v12 = ({
    badge: _v0,
    icon: _v1,
    label: _v2,
    onClick: _v3,
    isDisabled: _v4,
    href: _v5
  }) => {
    let {
      closeDrawer: _v6,
      isV2: _v7
    } = (0, _v11.useActionMenuContext)();
    if (_v7) {
      let _v0 = (0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        gap: "sm",
        justify: "space-between",
        width: "100%",
        minWidth: 0,
        children: [_v1, (0, _v1.jsx)(_v3.Text, {
          flex: "1 1",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          variant: "body-md",
          children: _v2
        }), _v0]
      });
      return (0, _v1.jsx)(_v6.NestedMenuItem, {
        disabled: _v4,
        value: _v2,
        onClick: _v0 => {
          _v6?.(), _v3?.(), _v5 || _v0.preventDefault(), _v0.stopPropagation();
        },
        children: _v5 ? (0, _v1.jsx)("a", {
          href: _v5,
          children: _v0
        }) : _v0
      });
    }
    return (0, _v1.jsx)(_v2.MenuItem, {
      onClick: _v0 => {
        _v6?.(), _v3?.(), _v5 || _v0.preventDefault(), _v0.stopPropagation();
      },
      as: _v5 ? "a" : "button",
      target: _v5 ? "_blank" : void 0,
      href: _v5,
      isDisabled: _v4,
      children: (0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        gap: "sm",
        justify: "space-between",
        width: "100%",
        minWidth: 0,
        children: [_v1, (0, _v1.jsx)(_v3.Text, {
          flex: "1 1",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          variant: "body-xl",
          fontSize: (0, _v5.rem)(14),
          lineHeight: (0, _v5.rem)(20),
          children: _v2
        }), _v0]
      })
    });
  };
  _v0.s(["Action", 0, _v0 => {
    let {
      tooltip: _v1,
      ..._v2
    } = _v0;
    return _v1 ? (0, _v1.jsx)(_v8.Tooltip, {
      placement: "left",
      label: _v1,
      children: (0, _v1.jsx)("div", {
        children: (0, _v1.jsx)(_v12, {
          ..._v2
        })
      })
    }) : (0, _v1.jsx)(_v12, {
      ..._v2
    });
  }, "MenuAction", 0, ({
    icon: _v0,
    label: _v1,
    children: _v2
  }) => {
    let {
      closeDrawer: _v3,
      isV2: _v4
    } = (0, _v11.useActionMenuContext)();
    return (0, _v1.jsxs)(_v6.NestedMenu, {
      positioning: {
        placement: "right-start"
      },
      children: [(0, _v1.jsx)(_v6.NestedMenuTriggerItem, {
        children: _v4 ? (0, _v1.jsxs)(_v4.Flex, {
          align: "center",
          gap: "sm",
          justify: "space-between",
          width: "100%",
          children: [_v0, (0, _v1.jsx)(_v3.Text, {
            flex: "1 1",
            variant: "body-md",
            children: _v1
          }), (0, _v1.jsx)(_v9.ChevronRightSmall, {})]
        }) : (0, _v1.jsxs)(_v4.Flex, {
          align: "center",
          gap: "sm",
          justify: "space-between",
          width: "100%",
          children: [_v0, (0, _v1.jsx)(_v3.Text, {
            flex: "1 1",
            variant: "body-xl",
            fontSize: (0, _v5.rem)(14),
            lineHeight: (0, _v5.rem)(20),
            children: _v1
          }), (0, _v1.jsx)(_v9.ChevronRightSmall, {})]
        })
      }), (0, _v1.jsx)(_v7.NestedMenuPortal, {
        children: (0, _v1.jsx)(_v6.NestedMenuPositioner, {
          style: {
            zIndex: 0
          },
          children: (0, _v1.jsx)(_v6.NestedMenuContent, {
            minWidth: _v10.MENU_MIN_WIDTH,
            maxWidth: `calc(2 * ${_v10.MENU_MIN_WIDTH})`,
            children: (0, _v1.jsx)(_v11.ActionMenuContext.Provider, {
              value: {
                closeDrawer: _v3,
                isV2: !0
              },
              children: _v2
            })
          })
        })
      })]
    });
  }]);
}