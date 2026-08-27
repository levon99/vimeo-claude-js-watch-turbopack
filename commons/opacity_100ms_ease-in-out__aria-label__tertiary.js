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
    _v16 = _v0.i(0);
  let _v17 = (0, _v7.rem)(24),
    _v18 = "opacity 100ms ease-in-out",
    _v19 = (0, _v2.forwardRef)(({
      label: _v0,
      onToggle: _v1,
      hoverBackground: _v2,
      color: _v3,
      isMobile: _v4,
      ..._v5
    }, _v6) => (0, _v1.jsx)(_v4.IconButton, {
      ..._v5,
      ref: _v6,
      "aria-label": _v0,
      icon: _v4 ? (0, _v1.jsx)(_v8.ChevronLeft, {}) : (0, _v1.jsx)(_v9.CollapseDrawer, {}),
      variant: "tertiary",
      size: _v4 ? "sm" : "md",
      onClick: _v1,
      cursor: _v4 ? void 0 : "col-resize",
      backgroundColor: "transparent",
      color: _v3,
      sx: {
        "& svg, & svg *": {
          fill: _v4 ? _v3 : "transparent"
        }
      },
      _hover: {
        backgroundColor: _v2
      },
      _groupHover: _v4 ? void 0 : {
        "& svg, & svg *": {
          fill: _v3
        }
      },
      _focusVisible: {
        "& svg, & svg *": {
          fill: _v3
        }
      }
    }));
  _v19.displayName = "ExpandedSidebarToggle";
  let _v20 = (0, _v2.forwardRef)(({
    label: _v0,
    onToggle: _v1,
    hoverBackground: _v2,
    color: _v3,
    isChina: _v4,
    ..._v5
  }, _v6) => (0, _v1.jsx)(_v4.IconButton, {
    ..._v5,
    ref: _v6,
    "aria-label": _v0,
    icon: (0, _v1.jsxs)(_v3.Box, {
      "aria-hidden": "true",
      boxSize: _v17,
      position: "relative",
      children: [(0, _v1.jsx)(_v3.Box, {
        className: "sidebar-logo-rework-brand sidebar-logo-rework-icon",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        inset: 0,
        opacity: 1,
        position: "absolute",
        transition: _v18,
        children: _v4 ? (0, _v1.jsx)(_v14.default, {
          height: _v17,
          width: _v17
        }) : (0, _v1.jsx)(_v11.VimeoV, {
          boxSize: _v17,
          color: "text-primary"
        })
      }), (0, _v1.jsx)(_v3.Box, {
        className: "sidebar-logo-rework-expand sidebar-logo-rework-icon",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        inset: 0,
        opacity: 0,
        position: "absolute",
        transition: _v18,
        children: (0, _v1.jsx)(_v10.ExpandDrawer, {
          boxSize: _v17
        })
      })]
    }),
    variant: "tertiary",
    size: "md",
    onClick: _v1,
    cursor: "col-resize",
    backgroundColor: "transparent",
    color: _v3,
    sx: {
      "& .sidebar-logo-rework-expand svg, & .sidebar-logo-rework-expand svg *": {
        fill: "text-primary"
      },
      '[role="group"][data-collapsed-hover-enabled="true"]:hover & .sidebar-logo-rework-brand': {
        opacity: 0
      },
      '[role="group"][data-collapsed-hover-enabled="true"]:hover & .sidebar-logo-rework-expand': {
        opacity: 1
      },
      '[role="group"][data-collapsed-hover-enabled="true"] &:focus-visible .sidebar-logo-rework-brand': {
        opacity: 0
      },
      '[role="group"][data-collapsed-hover-enabled="true"] &:focus-visible .sidebar-logo-rework-expand': {
        opacity: 1
      },
      "@media (prefers-reduced-motion: reduce)": {
        "& .sidebar-logo-rework-icon": {
          transition: "none"
        }
      }
    },
    _hover: {
      backgroundColor: _v2
    }
  }));
  _v20.displayName = "CollapsedSidebarToggle", _v0.s(["SideNavHeader", 0, ({
    onClose: _v0,
    isMobile: _v1,
    bg: _v2,
    collapsed: _v3 = !1,
    paddingRight: _v4
  }) => {
    let _v5 = (0, _v2.useContext)(_v15.ViewerContext),
      _v6 = _v4 ?? (0, _v7.rem)(16),
      _v7 = _v5?.isSimplifiedSite ?? !1,
      _v8 = (0, _v6.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
      _v9 = (0, _v16.useTrackSidebarToggled)(),
      _v10 = !_v1,
      _v11 = _v10 ? (0, _v7.rem)(12) : (0, _v7.rem)(16),
      _v12 = _v10 ? (0, _v7.rem)(12) : (0, _v7.rem)(8),
      _v13 = () => {
        _v9(_v3 ? "open" : "close", _v1), _v0();
      },
      _v14 = _v10 ? _v3 ? (0, _v12.translate)({
        singular: "Expand side nav",
        dictionary: {
          es: {
            singular: "Expandir navegación lateral"
          },
          "de-DE": {
            singular: "Seitenleiste ausklappen"
          },
          "fr-FR": {
            singular: "Développer le menu latéral"
          },
          "ja-JP": {
            singular: "サイドナビを展開する"
          },
          "ko-KR": {
            singular: "사이드 네비게이션 펼치기"
          },
          "pt-BR": {
            singular: "Expandir navegação lateral"
          },
          "zh-CN": {
            singular: "展开侧边导航"
          }
        }
      }) : (0, _v12.translate)({
        singular: "Collapse side nav",
        dictionary: {
          es: {
            singular: "Contraer navegación lateral"
          },
          "de-DE": {
            singular: "Seitenleiste einklappen"
          },
          "fr-FR": {
            singular: "Réduire le menu latéral"
          },
          "ja-JP": {
            singular: "サイドナビを折りたたむ"
          },
          "ko-KR": {
            singular: "사이드 네비게이션 접기"
          },
          "pt-BR": {
            singular: "Recolher navegação lateral"
          },
          "zh-CN": {
            singular: "收起侧边导航"
          }
        }
      }) : (0, _v12.translate)({
        singular: "Close side nav",
        dictionary: {
          es: {
            singular: "Cerrar navegación lateral"
          },
          "de-DE": {
            singular: "Seitenleiste schließen"
          },
          "fr-FR": {
            singular: "Fermer le volet latéral"
          },
          "ja-JP": {
            singular: "サイドナビゲーションを閉じる"
          },
          "ko-KR": {
            singular: "사이드바 닫기"
          },
          "pt-BR": {
            singular: "Fechar navegação lateral"
          },
          "zh-CN": {
            singular: "关闭侧边导航"
          }
        }
      }),
      _v15 = _v3 ? (0, _v12.translate)({
        singular: "Open sidebar",
        dictionary: {
          es: {
            singular: "Abrir la barra lateral"
          },
          "de-DE": {
            singular: "Seitenleiste öffnen"
          },
          "fr-FR": {
            singular: "Ouvrir la barre latérale"
          },
          "ja-JP": {
            singular: "サイドバーを開く"
          },
          "ko-KR": {
            singular: "사이드바 열기"
          },
          "pt-BR": {
            singular: "Abrir barra lateral"
          },
          "zh-CN": {
            singular: "打开侧边栏"
          }
        }
      }) : (0, _v12.translate)({
        singular: "Close sidebar",
        dictionary: {
          es: {
            singular: "Cerrar la barra lateral"
          },
          "de-DE": {
            singular: "Seitenleiste schließen"
          },
          "fr-FR": {
            singular: "Fermer la barre latérale"
          },
          "ja-JP": {
            singular: "サイドバーを閉じる"
          },
          "ko-KR": {
            singular: "사이드바 닫기"
          },
          "pt-BR": {
            singular: "Fechar barra lateral"
          },
          "zh-CN": {
            singular: "关闭侧边栏"
          }
        }
      }),
      _v16 = _v10 ? "text-primary" : "text-secondary",
      _v17 = _v10 && _v3 ? (0, _v1.jsx)(_v20, {
        label: _v14,
        onToggle: _v13,
        hoverBackground: _v8,
        color: _v16,
        isChina: _v7
      }) : (0, _v1.jsx)(_v19, {
        label: _v14,
        onToggle: _v13,
        hoverBackground: _v8,
        color: _v16,
        isMobile: _v1
      }),
      _v18 = _v10 ? (0, _v1.jsx)(_v5.Tooltip, {
        label: _v15,
        placement: "right",
        children: _v17
      }) : _v17;
    return _v3 ? (0, _v1.jsx)(_v3.Box, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${_v11} ${(0, _v7.rem)(8)} ${_v12}`,
      bg: _v2,
      children: _v18
    }) : (0, _v1.jsxs)(_v3.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${_v11} ${_v6} ${_v12} ${(0, _v7.rem)(28)}`,
      bg: _v2,
      children: [(0, _v1.jsx)(_v13.default, {
        href: _v5?.user ? "/home" : "/",
        width: (0, _v7.rem)(78),
        height: (0, _v7.rem)(27),
        title: _v7 ? (0, _v12.translate)({
          singular: "Go to Videoji home page",
          dictionary: {
            es: {
              singular: "Ir a la página de inicio de Videoji"
            },
            "de-DE": {
              singular: "Zur Videoji-Startseite"
            },
            "fr-FR": {
              singular: "Accéder à la page d'accueil de Videoji"
            },
            "ja-JP": {
              singular: "Videojiホームページに移動"
            },
            "ko-KR": {
              singular: "Videoji 홈페이지로 이동"
            },
            "pt-BR": {
              singular: "Ir para a página inicial do Videoji"
            },
            "zh-CN": {
              singular: "前往 Videoji 主页"
            }
          }
        }) : (0, _v12.translate)({
          singular: "Go to Vimeo home page",
          dictionary: {
            es: {
              singular: "Ir a la página de inicio de Vimeo"
            },
            "de-DE": {
              singular: "Zur Startseite von Vimeo"
            },
            "fr-FR": {
              singular: "Aller à la page d'accueil Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoホームページに移動"
            },
            "ko-KR": {
              singular: "Vimeo 홈페이지로 이동"
            },
            "pt-BR": {
              singular: "Ir para a página inicial do Vimeo"
            },
            "zh-CN": {
              singular: "前往 Vimeo 主页"
            }
          }
        })
      }), _v18]
    });
  }]);
}