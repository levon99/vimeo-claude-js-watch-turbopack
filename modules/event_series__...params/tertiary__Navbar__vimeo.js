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
    _v19 = _v0.i(0);
  let _v20 = ({
    menuItems: _v0
  }) => (0, _v1.jsx)(_v1.Fragment, {
    children: _v0.map(_v0 => void 0 === _v0.href ? (0, _v1.jsx)(_v5.Button, {
      size: "md",
      variant: "tertiary",
      children: _v0.label
    }, _v0.id) : (0, _v1.jsx)(_v5.Button, {
      as: _v2.default,
      href: _v0.href,
      size: "md",
      variant: "tertiary",
      children: _v0.label
    }, _v0.id))
  });
  _v0.s(["Navbar", 0, ({
    name: _v0,
    logo: _v1,
    menuItems: _v2,
    isMobilePreview: _v3,
    parentRef: _v4,
    ..._v5
  }) => {
    let [_v6, _v7] = (0, _v3.useState)(!1),
      _v8 = "vimeo" === _v1.type || "custom" === _v1.type && !!_v1.url,
      _v9 = (0, _v15.useColorModeValue)("rgba(244, 246, 248, 0.64)", "rgba(20, 24, 28, 0.64)"),
      _v10 = (0, _v16.useBreakpointValue)({
        base: !0,
        md: !1
      }) ?? !1,
      _v11 = _v3 ?? _v10;
    return (0, _v1.jsxs)(_v4.Box, {
      backdropFilter: "blur(50px)",
      backgroundColor: _v9,
      position: "sticky",
      top: 0,
      width: "100%",
      zIndex: 2,
      ..._v5,
      children: [(0, _v1.jsxs)(_v11.Flex, {
        align: "center",
        gap: "md",
        justify: "space-between",
        px: "lg",
        py: (0, _v14.rem)(12),
        children: [(0, _v1.jsxs)(_v11.Flex, {
          align: "center",
          gap: "md",
          minWidth: 0,
          children: [(0, _v1.jsx)(_v19.Navigation.Logo, {
            customLogoUrl: _v1.url,
            type: _v1.type
          }), _v8 ? (0, _v1.jsx)(_v6.Divider, {
            height: (0, _v14.rem)(16),
            orientation: "vertical"
          }) : null, (0, _v1.jsx)(_v13.Text, {
            color: "text-primary",
            noOfLines: 1,
            variant: "heading-md",
            children: _v0 || (0, _v18.translate)({
              singular: "Untitled event series",
              dictionary: {
                es: {
                  singular: "Serie de eventos sin título"
                },
                "de-DE": {
                  singular: "Unbenannte Veranstaltungsreihe"
                },
                "fr-FR": {
                  singular: "Série d'événements sans titre"
                },
                "ja-JP": {
                  singular: "無題のイベントシリーズ"
                },
                "ko-KR": {
                  singular: "제목 없는 이벤트 시리즈"
                },
                "pt-BR": {
                  singular: "Série de eventos sem título"
                },
                "zh-CN": {
                  singular: "未命名的活动系列"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v11.Flex, {
          align: "center",
          display: "flex",
          gap: "sm",
          children: _v11 ? (0, _v1.jsx)(_v12.IconButton, {
            "aria-label": (0, _v18.translate)({
              singular: "Navigation",
              dictionary: {
                es: {
                  singular: "Navegación"
                },
                "ja-JP": {
                  singular: "ナビゲーション"
                },
                "ko-KR": {
                  singular: "탐색"
                },
                "pt-BR": {
                  singular: "Navegação"
                },
                "zh-CN": {
                  singular: "导航"
                }
              }
            }),
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v17.AlignJustify, {}),
            size: "lg",
            ...(!_v3 && {
              onClick: () => _v7(!0)
            })
          }) : (0, _v1.jsx)(_v20, {
            menuItems: _v2
          })
        })]
      }), _v11 && (0, _v1.jsx)(_v7.Drawer, {
        isOpen: _v6,
        onClose: () => _v7(!1),
        size: "full",
        portalProps: {
          containerRef: _v4
        },
        children: (0, _v1.jsxs)(_v8.DrawerContent, {
          maxWidth: "unset",
          borderRadius: "unset",
          margin: "0 !important",
          children: [(0, _v1.jsxs)(_v9.DrawerHeader, {
            children: [(0, _v1.jsx)(_v19.Navigation.Logo, {
              customLogoUrl: _v1.url,
              type: _v1.type
            }), (0, _v1.jsx)(_v8.DrawerCloseButton, {})]
          }), (0, _v1.jsx)(_v10.DrawerBody, {
            display: "flex",
            flexDirection: "column",
            gap: "md",
            children: (0, _v1.jsx)(_v20, {
              menuItems: _v2
            })
          })]
        })
      })]
    });
  }]);
}