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
    _v13 = _v0.i(0);
  _v0.s(["SideNavHeader", 0, ({
    onClose: _v0,
    isMobile: _v1,
    bg: _v2,
    collapsed: _v3 = !1,
    paddingRight: _v4
  }) => {
    let _v5 = (0, _v2.useContext)(_v12.ViewerContext),
      _v6 = _v4 ?? (0, _v6.rem)(16),
      _v7 = _v5?.isSimplifiedSite ?? !1,
      _v8 = (0, _v5.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
      _v9 = (0, _v13.useTrackSidebarToggled)(),
      _v10 = !_v1,
      _v11 = _v10 ? _v3 ? (0, _v1.jsx)(_v9.ExpandDrawer, {}) : (0, _v1.jsx)(_v8.CollapseDrawer, {}) : (0, _v1.jsx)(_v7.ChevronLeft, {}),
      _v12 = _v10 ? _v3 ? (0, _v10.translate)({
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
      }) : (0, _v10.translate)({
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
      }) : (0, _v10.translate)({
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
      _v13 = "text-secondary",
      _v14 = _v1 || _v3 ? _v13 : "transparent",
      _v15 = (0, _v1.jsx)(_v4.IconButton, {
        "aria-label": _v12,
        icon: _v11,
        variant: "tertiary",
        size: _v10 ? "md" : "sm",
        onClick: () => {
          _v9(_v3 ? "open" : "close", _v1), _v0();
        },
        backgroundColor: "transparent",
        color: _v13,
        sx: {
          "& svg, & svg *": {
            fill: _v14
          }
        },
        _hover: {
          backgroundColor: _v8
        },
        _groupHover: {
          "& svg, & svg *": {
            fill: _v13
          }
        },
        _focus: {
          "& svg, & svg *": {
            fill: _v13
          }
        }
      });
    return _v3 ? (0, _v1.jsx)(_v3.Box, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${(0, _v6.rem)(16)} ${(0, _v6.rem)(8)} ${(0, _v6.rem)(8)}`,
      bg: _v2,
      children: _v15
    }) : (0, _v1.jsxs)(_v3.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${(0, _v6.rem)(16)} ${_v6} ${(0, _v6.rem)(8)} ${(0, _v6.rem)(28)}`,
      bg: _v2,
      children: [(0, _v1.jsx)(_v11.default, {
        href: _v5?.user ? "/home" : "/",
        width: (0, _v6.rem)(78),
        height: (0, _v6.rem)(27),
        title: _v7 ? (0, _v10.translate)({
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
        }) : (0, _v10.translate)({
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
      }), _v15]
    });
  }]);
}