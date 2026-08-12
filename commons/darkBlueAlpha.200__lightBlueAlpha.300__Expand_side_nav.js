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
    _v20 = _v0.i(0);
  let _v21 = ({
    onClose: _v0,
    isMobile: _v1,
    bg: _v2,
    collapsed: _v3 = !1,
    paddingRight: _v4
  }) => {
    let _v5 = (0, _v2.useContext)(_v9.ViewerContext),
      {
        settings: _v6
      } = (0, _v18.useOrionSettings)(),
      _v7 = _v6.enable_new_sidebar,
      _v8 = _v4 ?? (_v7 ? (0, _v5.rem)(16) : (0, _v5.rem)(12)),
      _v9 = _v5?.isSimplifiedSite ?? !1,
      _v10 = (0, _v13.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
      _v11 = (0, _v20.useTrackSidebarToggled)(),
      _v12 = _v7 && !_v1,
      _v13 = _v12 ? _v3 ? (0, _v1.jsx)(_v16.ExpandDrawer, {}) : (0, _v1.jsx)(_v15.CollapseDrawer, {}) : (0, _v1.jsx)(_v14.ChevronLeft, {}),
      _v14 = _v12 ? _v3 ? (0, _v17.translate)({
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
      }) : (0, _v17.translate)({
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
      }) : (0, _v17.translate)({
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
      _v15 = _v7 ? "text-secondary" : "text-primary",
      _v16 = _v1 || _v3 ? _v15 : "transparent",
      _v17 = (0, _v1.jsx)(_v12.IconButton, {
        "aria-label": _v14,
        icon: _v13,
        variant: "tertiary",
        size: _v12 ? "md" : "sm",
        onClick: () => {
          _v11(_v3 ? "open" : "close", _v7, _v1), _v0();
        },
        backgroundColor: "transparent",
        color: _v15,
        sx: {
          "& svg, & svg *": {
            fill: _v16
          }
        },
        _hover: {
          backgroundColor: _v10
        },
        _groupHover: {
          "& svg, & svg *": {
            fill: _v15
          }
        },
        _focus: {
          "& svg, & svg *": {
            fill: _v15
          }
        }
      });
    return _v3 ? (0, _v1.jsx)(_v3.Box, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${(0, _v5.rem)(16)} ${(0, _v5.rem)(8)} ${(0, _v5.rem)(8)}`,
      bg: _v2,
      children: _v17
    }) : (0, _v1.jsxs)(_v3.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${(0, _v5.rem)(16)} ${_v8} ${(0, _v5.rem)(8)} ${(0, _v5.rem)(28)}`,
      bg: _v2,
      children: [(0, _v1.jsx)(_v19.default, {
        href: _v5?.user ? "/home" : "/",
        width: (0, _v5.rem)(78),
        height: (0, _v5.rem)(27),
        title: _v9 ? (0, _v17.translate)({
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
        }) : (0, _v17.translate)({
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
      }), _v17]
    });
  };
  _v0.s(["SideNavHeader", 0, _v21], 0);
  let _v22 = (0, _v4.keyframes)({
      "0%, 50%": {
        opacity: 0
      },
      "100%": {
        opacity: 1
      }
    }),
    _v23 = (0, _v4.keyframes)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    });
  _v0.s(["WayfinderSideNav", 0, ({
    children: _v0,
    dragConstraint: _v1,
    isOpen: _v2,
    isFixed: _v3,
    isMobile: _v4,
    onClose: _v5,
    onResize: _v6,
    onUpgradeClick: _v7,
    showWatchMenuItem: _v8 = !1,
    teamOwnerId: _v9,
    hideQuotaMeter: _v10 = !1,
    hideWhatsNew: _v11 = !1,
    footerVariant: _v12 = "full",
    collapsed: _v13 = !1
  }) => {
    let _v14 = (0, _v2.useContext)(_v9.ViewerContext),
      {
        capabilities: _v15
      } = (0, _v7.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v14?.teamUser?.ownerId),
      _v16 = _v9 || _v14?.teamUser?.ownerId || _v14?.user?.id,
      _v17 = _v14?.user?.id != null && _v14?.user?.id === _v16,
      _v18 = _v14?.teamUser?.plainTextPermissionLevel === "Admin",
      {
        uploadQuota: _v19,
        aiCreditsQuota: _v20,
        drmLicensesQuota: _v21,
        isLoading: _v22
      } = (0, _v8.useUserQuotaApi)(),
      _v23 = !!((_v17 || _v18) && _v19 && !_v10),
      [_v24, _v25] = (0, _v2.useState)(!1),
      _v26 = (0, _v2.useRef)(_v13);
    (0, _v2.useLayoutEffect)(() => {
      if (_v26.current === _v13) return;
      _v26.current = _v13, _v25(!0);
      let _v0 = setTimeout(() => _v25(!1), 360);
      return () => clearTimeout(_v0);
    }, [_v13]);
    let _v27 = _v14?.isSimplifiedSite ?? !1;
    return (0, _v1.jsx)(_v10.SideNavCollapsedContext.Provider, {
      value: _v13,
      children: (0, _v1.jsxs)(_v6.ResizableSideNav, {
        active: _v2 || _v13,
        collapsed: _v13,
        dragConstraint: _v1,
        isFixed: _v3,
        onResize: (_v0, {
          current: _v1
        }) => _v6?.(_v1),
        role: "group",
        children: [(0, _v1.jsx)(_v6.ResizableSideNav.Header, {
          children: (0, _v1.jsx)(_v21, {
            onClose: _v5,
            isMobile: _v4,
            collapsed: _v13
          })
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          flexGrow: 1,
          minHeight: _v13 ? 0 : void 0,
          alignItems: _v13 ? "center" : void 0,
          px: _v13 ? 0 : (0, _v5.rem)(16),
          sx: _v13 ? {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          } : void 0,
          children: _v0
        }), (0, _v1.jsx)(_v6.ResizableSideNav.Footer, {
          children: (0, _v1.jsx)(_v3.Box, {
            opacity: +!_v24,
            sx: _v24 ? {
              animation: _v13 ? `${_v22} 360ms ease-in-out forwards` : `${_v23} 180ms ease-in-out forwards`
            } : void 0,
            paddingBottom: _v13 ? (0, _v5.rem)(16) : void 0,
            children: (0, _v1.jsx)(_v11.SideNavFooter, {
              variant: _v13 ? "icons" : _v12,
              isMobile: _v4,
              showWatchMenuItem: _v8,
              showWhatsNew: !_v11 && !_v27,
              showQuota: _v23,
              isLoadingQuota: _v22,
              quota: {
                uploadQuota: _v19,
                aiCreditsQuota: _v20,
                drmLicensesQuota: _v21,
                showTotal: _v15.hasTotalStorageCap,
                showUpgrade: _v15.canUpgrade
              },
              onUpgradeClick: _v7
            })
          })
        })]
      })
    });
  }], 0);
}