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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = ({
      usePortal: _v0,
      children: _v1
    }) => _v0 ? (0, _v1.jsx)(_v12.Portal, {
      children: _v1
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v1
    }),
    _v23 = ({
      children: _v0,
      disabled: _v1,
      isV2: _v2,
      onClick: _v3,
      size: _v4,
      title: _v5
    }) => {
      let [_v6, _v7] = (0, _v2.useState)(!1);
      return (0, _v1.jsxs)(_v13.Box, {
        onClick: _v0 => {
          _v0.preventDefault(), _v0.stopPropagation();
        },
        children: [(0, _v1.jsx)(_v11.IconButton, {
          "data-testid": "mobile-action-menu-button",
          isDisabled: _v1,
          "aria-label": (0, _v19.translate)({
            singular: "Menu",
            dictionary: {
              es: {
                singular: "Menú"
              },
              "de-DE": {
                singular: "Menü"
              },
              "ja-JP": {
                singular: "メニュー"
              },
              "ko-KR": {
                singular: "메뉴"
              },
              "zh-CN": {
                singular: "菜单"
              }
            }
          }),
          size: _v4,
          icon: (0, _v1.jsx)(_v17.EllipsisV, {}),
          variant: "tertiary",
          onClick: () => {
            _v3?.(), _v7(!0);
          }
        }), (0, _v1.jsxs)(_v3.Drawer, {
          isOpen: _v6,
          onClose: () => _v7(!1),
          placement: "bottom",
          children: [(0, _v1.jsx)(_v7.DrawerOverlay, {}), (0, _v1.jsxs)(_v5.DrawerContent, {
            "data-testid": "action-drawer",
            margin: "unset !important",
            borderBottomRadius: "0",
            sx: {
              '&[data-placement="bottom"]': {
                maxWidth: "100vw !important"
              }
            },
            children: [_v2 && (0, _v1.jsxs)(_v6.DrawerHeader, {
              children: [(0, _v1.jsx)(_v16.Text, {
                variant: "heading-md",
                paddingLeft: "1rem",
                children: _v5
              }), (0, _v1.jsx)(_v5.DrawerCloseButton, {
                size: "sm",
                position: "unset"
              })]
            }), (0, _v1.jsx)(_v4.DrawerBody, {
              children: (0, _v1.jsx)(_v21.ActionMenuContext.Provider, {
                value: {
                  closeDrawer: () => _v7(!1),
                  isMobile: !0,
                  isV2: _v2
                },
                children: _v2 ? (0, _v1.jsx)(_v15.NestedMenu, {
                  children: _v0
                }) : (0, _v1.jsx)(_v8.Menu, {
                  children: _v0
                })
              })
            })]
          })]
        })]
      });
    };
  _v0.s(["ActionsMenu", 0, ({
    disabled: _v0,
    children: _v1,
    onClick: _v2,
    onOpenChange: _v3,
    renderContent: _v4 = _v0 => _v0,
    isV2: _v5 = !1,
    placement: _v6 = "bottom-end",
    size: _v7 = "md",
    strategy: _v8 = "fixed",
    title: _v9,
    usePortal: _v10 = !0,
    zIndex: _v11
  }) => {
    let _v12 = (0, _v18.useIsMobile)(),
      [_v13, _v14] = (0, _v2.useState)({
        openSubmenuId: null,
        generations: {}
      }),
      _v15 = (0, _v2.useCallback)(() => {
        _v14({
          openSubmenuId: null,
          generations: {}
        });
      }, []),
      _v16 = (0, _v2.useCallback)((_v0, _v1) => {
        _v14(_v0 => _v1 ? _v0.openSubmenuId === _v0 ? _v0 : null === _v0.openSubmenuId ? {
          ..._v0,
          openSubmenuId: _v0
        } : {
          openSubmenuId: _v0,
          generations: {
            ..._v0.generations,
            [_v0.openSubmenuId]: (_v0.generations[_v0.openSubmenuId] ?? 0) + 1
          }
        } : _v0.openSubmenuId === _v0 ? {
          ..._v0,
          openSubmenuId: null
        } : _v0);
      }, []);
    return _v12 ? (0, _v1.jsx)(_v23, {
      disabled: _v0,
      isV2: _v5,
      onClick: _v2,
      size: _v7,
      title: _v9,
      children: _v1
    }) : (0, _v1.jsxs)(_v13.Box, {
      onClick: _v0 => {
        _v0.preventDefault(), _v0.stopPropagation();
      },
      children: [_v5 && (0, _v1.jsx)(_v21.ActionMenuContext.Provider, {
        value: {
          closeDrawer: null,
          isMobile: !1,
          isV2: _v5,
          submenuGenerations: _v13.generations,
          reportSubmenuOpenChange: _v16
        },
        children: (0, _v1.jsxs)(_v15.NestedMenu, {
          positioning: {
            strategy: "fixed"
          },
          onOpenChange: _v0 => {
            _v0.open || _v15(), _v3?.(_v0.open);
          },
          children: [(0, _v1.jsx)(_v15.NestedMenuTrigger, {
            "aria-label": "menu",
            variant: "tertiary",
            boxSize: _v7,
            "data-testid": "action-menu-button-v2",
            onClick: _v2,
            children: (0, _v1.jsx)(_v17.EllipsisV, {
              boxSize: "md"
            })
          }), (0, _v1.jsx)(_v22, {
            usePortal: _v10,
            children: (0, _v1.jsx)(_v15.NestedMenuPositioner, {
              children: _v4((0, _v1.jsx)(_v15.NestedMenuContent, {
                "data-testid": "action-menu-v2",
                zIndex: _v11,
                py: "sm",
                px: "0",
                minWidth: _v20.MENU_MIN_WIDTH,
                maxWidth: `calc(2 * ${_v20.MENU_MIN_WIDTH})`,
                children: _v1
              }))
            })
          })]
        })
      }), !_v5 && (0, _v1.jsxs)(_v8.Menu, {
        strategy: _v8,
        placement: _v6,
        onOpen: () => _v3?.(!0),
        onClose: () => {
          _v15(), _v3?.(!1);
        },
        children: [(0, _v1.jsx)(_v9.MenuButton, {
          "data-testid": "action-menu-button",
          className: "action-menu-button",
          as: _v11.IconButton,
          isDisabled: _v0,
          "aria-label": (0, _v19.translate)({
            singular: "Menu",
            dictionary: {
              es: {
                singular: "Menú"
              },
              "de-DE": {
                singular: "Menü"
              },
              "ja-JP": {
                singular: "メニュー"
              },
              "ko-KR": {
                singular: "메뉴"
              },
              "zh-CN": {
                singular: "菜单"
              }
            }
          }),
          size: _v7,
          icon: (0, _v1.jsx)(_v17.EllipsisV, {}),
          variant: "tertiary",
          onClick: _v2
        }), (0, _v1.jsx)(_v22, {
          usePortal: _v10,
          children: _v4((0, _v1.jsx)(_v10.MenuList, {
            "data-testid": "action-menu",
            py: "sm",
            px: "0",
            zIndex: _v11,
            color: "text-primary",
            minWidth: _v20.MENU_MIN_WIDTH,
            maxWidth: `calc(2 * ${_v20.MENU_MIN_WIDTH})`,
            maxHeight: (0, _v14.rem)(430),
            children: (0, _v1.jsx)(_v21.ActionMenuContext.Provider, {
              value: {
                closeDrawer: null,
                isMobile: !1,
                submenuGenerations: _v13.generations,
                reportSubmenuOpenChange: _v16
              },
              children: (0, _v1.jsx)(_v15.NestedMenu, {
                children: _v1
              })
            })
          }))
        })]
      })]
    });
  }], 0);
  var _v24 = _v0.i(0);
  _v0.s(["SectionRenderer", 0, ({
    section: _v0,
    index: _v1,
    ..._v2
  }) => {
    let {
      isV2: _v3
    } = (0, _v21.useActionMenuContext)();
    return 0 === _v0.length ? null : (0, _v1.jsxs)(_v2.default.Fragment, {
      children: [_v1 > 0 && (_v3 ? (0, _v1.jsx)(_v15.NestedMenuDivider, {}) : (0, _v1.jsx)(_v24.MenuDivider, {
        mt: "sm",
        mb: "sm"
      })), _v0.map((_v0, _v1) => (0, _v1.jsx)(_v13.Box, {
        px: "sm",
        ..._v2,
        children: _v0
      }, `component=${_v1}-${_v1}`))]
    }, `section-${_v1}`);
  }, "createSection", 0, _v0 => _v0.filter(Boolean)], 0);
}