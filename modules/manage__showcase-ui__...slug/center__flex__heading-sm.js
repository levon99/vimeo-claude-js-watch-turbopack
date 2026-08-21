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
    _v15 = _v0.i(0);
  let _v16 = ({
    to: _v0,
    text: _v1
  }) => {
    let {
      sendDrawerOpenCloseEvent: _v2
    } = (0, _v14.useBpEventService)();
    return (0, _v1.jsxs)(_v4.Flex, {
      align: "center",
      gap: "sm",
      children: [(0, _v1.jsx)(_v4.Flex, {
        align: "center",
        children: (0, _v1.jsx)(_v15.CustomNavLink, {
          to: _v0,
          style: {
            width: "xs",
            height: "xs",
            display: "flex",
            alignItems: "center"
          },
          children: (0, _v1.jsx)(_v13.ArrowLeft, {
            boxSize: "xs",
            onClick: () => _v2(!1, _v1.toLowerCase())
          })
        })
      }), (0, _v1.jsx)(_v4.Flex, {
        align: "center",
        children: (0, _v1.jsx)(_v12.Text, {
          variant: "heading-sm",
          color: "text-primary",
          children: _v1
        })
      })]
    });
  };
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = ({
      to: _v0,
      text: _v1
    }) => {
      let {
        sendSidebarDrawerOpenCloseEvent: _v2
      } = (0, _v14.useBpEventService)();
      return (0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        justify: "space-between",
        children: [(0, _v1.jsx)(_v12.Text, {
          variant: "heading-sm",
          color: "text-primary",
          children: _v1
        }), (0, _v1.jsx)(_v15.CustomNavLink, {
          to: _v0,
          children: (0, _v1.jsx)(_v17.IconButton, {
            "aria-label": (0, _v19.translate)({
              singular: "side drawer close",
              dictionary: {
                es: {
                  singular: "cierre del recuadro lateral"
                },
                "de-DE": {
                  singular: "Seitenleiste schließen"
                },
                "fr-FR": {
                  singular: "fermer le tiroir latéral"
                },
                "ja-JP": {
                  singular: "サイドドロワーを閉じる"
                },
                "ko-KR": {
                  singular: "사이드바 닫기"
                },
                "pt-BR": {
                  singular: "fechar a barra lateral"
                },
                "zh-CN": {
                  singular: "关闭侧滑菜单"
                }
              }
            }),
            variant: "tertiary",
            size: "sm",
            icon: (0, _v1.jsx)(_v18.CloseX, {}),
            onClick: () => _v2(_v0, "x"),
            tabIndex: -1
          })
        })]
      });
    },
    _v21 = {
      [_v11.SideDrawerHeaderKeyEnum.INFO]: (0, _v1.jsx)(_v20, {
        to: _v11.ShowcaseRouteMap.WEB_LAYOUT,
        text: _v10.SideDrawerHeaderEnum.SETTINGS
      }),
      [_v11.SideDrawerHeaderKeyEnum.SEO]: (0, _v1.jsx)(_v16, {
        to: _v11.ShowcaseRouteMap.INFO,
        text: _v10.SideDrawerHeaderEnum.SEO
      }),
      [_v11.SideDrawerHeaderKeyEnum.TV_APPS]: (0, _v1.jsx)(_v16, {
        to: _v11.ShowcaseRouteMap.INFO,
        text: _v10.SideDrawerHeaderEnum.TV_APPS
      }),
      [_v11.SideDrawerHeaderKeyEnum.REGISTRATION]: (0, _v1.jsx)(_v16, {
        to: _v11.ShowcaseRouteMap.INFO,
        text: _v10.SideDrawerHeaderEnum.REGISTRATION
      }),
      [_v11.SideDrawerHeaderKeyEnum.CUSTOMIZATION]: (0, _v1.jsx)(_v20, {
        to: _v11.ShowcaseRouteMap.WEB_LAYOUT,
        text: _v10.SideDrawerHeaderEnum.APPEARANCE
      }),
      [_v11.SideDrawerHeaderKeyEnum.ANALYTICS]: (0, _v1.jsx)(_v20, {
        to: _v11.ShowcaseRouteMap.INFO,
        text: _v10.SideDrawerHeaderEnum.ANALYTICS
      }),
      [_v11.SideDrawerHeaderKeyEnum.LAYOUT]: (0, _v1.jsx)(_v20, {
        to: _v11.ShowcaseRouteMap.WEB_LAYOUT,
        text: _v10.SideDrawerHeaderEnum.LAYOUT
      }),
      [_v11.SideDrawerHeaderKeyEnum.PLAYBACK]: (0, _v1.jsx)(_v20, {
        to: _v11.ShowcaseRouteMap.WEB_LAYOUT,
        text: _v10.SideDrawerHeaderEnum.PLAYBACK
      }),
      [_v11.SideDrawerHeaderNestedKeyEnum.LAYOUT_NAVIGATION]: (0, _v1.jsx)(_v16, {
        to: _v11.ShowcaseRouteMap.LAYOUT,
        text: _v10.SideDrawerHeaderEnum.NAVIGATION
      }),
      [_v11.SideDrawerHeaderNestedKeyEnum.LAYOUT_FEATURED]: (0, _v1.jsx)(_v16, {
        to: _v11.ShowcaseRouteMap.LAYOUT,
        text: _v10.SideDrawerHeaderEnum.FEATURED
      }),
      [_v11.SideDrawerHeaderNestedKeyEnum.LAYOUT_VIDEO_GRID]: (0, _v1.jsx)(_v16, {
        to: _v11.ShowcaseRouteMap.LAYOUT,
        text: _v10.SideDrawerHeaderEnum.VIDEO_GRID
      })
    },
    _v22 = ({
      headerText: _v0
    }) => _v21[_v0 ?? ""] || (0, _v1.jsx)(_v1.Fragment, {});
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v10,
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = {
      left: "calc(100% - 4px)",
      width: "10px",
      height: "100%"
    },
    _v29 = {
      position: "relative",
      height: "48px",
      width: "4px",
      left: "6px",
      cursor: "ew-resize"
    },
    _v30 = ({
      isDragging: _v0,
      isVisible: _v1,
      onPointerDown: _v2,
      onKeyDown: _v3,
      dataTestId: _v4,
      ariaLabel: _v5,
      ariaValueNow: _v6,
      ariaValueMin: _v7,
      ariaValueMax: _v8
    }) => (0, _v1.jsx)(_v27.Center, {
      position: "absolute",
      display: _v1 ? "flex" : "none",
      zIndex: 10,
      sx: _v28,
      children: (0, _v1.jsx)(_v26.Box, {
        sx: _v29,
        background: _v0 ? "input-stroke-hover" : "stroke",
        borderRadius: "sm",
        onPointerDown: _v2,
        onKeyDown: _v3,
        _hover: {
          background: "input-stroke-hover"
        },
        _focus: {
          background: "input-stroke-hover",
          outline: "2px solid",
          outlineColor: "focus",
          outlineOffset: "1px"
        },
        "data-testid": _v4,
        tabIndex: 0,
        role: "slider",
        "aria-label": _v5,
        "aria-valuenow": _v6,
        "aria-valuemin": _v7,
        "aria-valuemax": _v8,
        "aria-orientation": "horizontal"
      })
    }),
    _v31 = ({
      sidebarLeft: _v0,
      onWidthChange: _v1,
      initialWidth: _v2 = _v25.SIDEBAR_CONSTRAINTS.DEFAULT_WIDTH,
      minWidth: _v3 = _v25.SIDEBAR_CONSTRAINTS.MIN_WIDTH,
      maxWidth: _v4 = _v25.SIDEBAR_CONSTRAINTS.MAX_WIDTH
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(!1),
        [_v7, _v8] = (0, _v3.useState)(_v2),
        _v9 = (0, _v3.useRef)(null),
        _v10 = (0, _v24.useBreakpointValue)({
          base: !1,
          lg: !0
        }),
        _v11 = (0, _v3.useCallback)(_v0 => {
          let _v1 = (0, _v2.default)(_v0, _v3, _v4);
          _v8(_v1), _v1 && _v1(_v1);
        }, [_v1, _v3, _v4]),
        _v12 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0();
          null === _v1 || _v11(_v0 - _v1);
        }, [_v11, _v0]),
        _v13 = (0, _v3.useCallback)(_v0 => {
          let {
              key: _v1,
              shiftKey: _v2
            } = _v0,
            _v3 = _v2 ? 50 : 10;
          switch (_v1) {
            case "ArrowLeft":
              _v0.preventDefault(), _v11(_v7 - _v3);
              break;
            case "ArrowRight":
              _v0.preventDefault(), _v11(_v7 + _v3);
              break;
            case "Home":
              _v0.preventDefault(), _v11(_v3);
              break;
            case "End":
              _v0.preventDefault(), _v11(_v4);
          }
        }, [_v7, _v11, _v3, _v4]),
        _v14 = (0, _v3.useCallback)(_v0 => {
          _v0.preventDefault(), null === _v0() || (_v0.currentTarget.setPointerCapture(_v0.pointerId), _v9.current = _v0.pointerId, _v6(!0));
        }, [_v0]);
      return (0, _v3.useEffect)(() => {
        let _v0 = (0, _v23.default)(_v0 => {
            _v5 && _v9.current === _v0.pointerId && _v12(_v0.clientX);
          }, 16),
          _v1 = () => {
            _v5 && (_v6(!1), _v9.current = null);
          };
        return _v5 && (document.addEventListener("pointermove", _v0), document.addEventListener("pointerup", _v1), document.addEventListener("pointercancel", _v1)), () => {
          document.removeEventListener("pointermove", _v0), document.removeEventListener("pointerup", _v1), document.removeEventListener("pointercancel", _v1);
        };
      }, [_v5, _v12]), (0, _v1.jsx)(_v30, {
        isVisible: !!_v10,
        isDragging: _v5,
        onPointerDown: _v14,
        onKeyDown: _v13,
        dataTestId: "sidebar-resize-handle",
        ariaLabel: (0, _v19.translate)({
          singular: "Resize sidebar width",
          dictionary: {
            es: {
              singular: "Ajustar el ancho de la barra lateral"
            },
            "de-DE": {
              singular: "Seitenleistenbreite anpassen"
            },
            "fr-FR": {
              singular: "Redimensionner la largeur de la barre latérale"
            },
            "ja-JP": {
              singular: "サイドバーの幅を変更"
            },
            "ko-KR": {
              singular: "사이드바 너비 조정"
            },
            "pt-BR": {
              singular: "Redimensionar largura da barra lateral"
            },
            "zh-CN": {
              singular: "调整侧边栏宽度"
            }
          }
        }),
        ariaValueNow: Math.round(_v7),
        ariaValueMin: _v3,
        ariaValueMax: _v4
      });
    };
  _v0.s(["DrawerContainer", 0, ({
    children: _v0,
    isLoading: _v1 = !1,
    location: _v2 = "left",
    panelWidth: _v3,
    drawerAlert: _v4 = null,
    overflowY: _v5
  }) => {
    let _v6 = (0, _v3.useRef)(null),
      _v7 = (0, _v9.useStore)(_v0 => _v0.commonStore.sidebarWidth),
      _v8 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setSidebarWidth),
      _v9 = (0, _v8.useSideDrawerMaxWidth)(),
      {
        enableTransition: _v10,
        getHeaderText: _v11,
        containerConfig: _v12,
        panelBodyMaxHeight: _v13
      } = (0, _v7.useSidebarDrawer)(_v2),
      _v14 = (0, _v3.useMemo)(() => (0, _v2.default)(_v7, _v10.SIDEBAR_CONSTRAINTS.MIN_WIDTH, _v10.SIDEBAR_CONSTRAINTS.MAX_WIDTH), [_v7]),
      {
        Container: _v15,
        height: _v16,
        mr: _v17
      } = _v12,
      _v18 = (0, _v3.useCallback)(() => _v6.current ? _v6.current.getBoundingClientRect().left : null, []),
      _v19 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]);
    (0, _v3.useEffect)(() => {
      _v7 > _v9 && _v8(_v9);
    }, [_v9, _v8, _v7]);
    let _v20 = (0, _v1.jsx)(_v15, {
      hideBelow: "md",
      py: "md",
      mr: _v17,
      children: (0, _v1.jsxs)(_v6.SlideFade, {
        in: _v10,
        enterEase: "expressive-entrance",
        exitEase: "expressive-exit",
        unmountOnExit: !0,
        children: [_v4, (0, _v1.jsx)(_v5.Panel, {
          isVisible: !0,
          id: "sidebar-drawer-template",
          w: _v3 || _v14,
          children: _v1 ? _v0 : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v5.PanelHeader, {
              children: (0, _v1.jsx)(_v22, {
                headerText: _v11()
              })
            }), (0, _v1.jsx)(_v5.PanelBody, {
              display: "flex",
              flexDirection: "column",
              color: "text-primary",
              maxH: _v13,
              height: _v16,
              overflowY: _v5 || "auto",
              pt: "0",
              children: _v0
            })]
          })
        })]
      })
    });
    return (0, _v1.jsxs)(_v4.Flex, {
      ref: _v6,
      position: "relative",
      height: "100%",
      children: [_v20, (0, _v1.jsx)(_v31, {
        sidebarLeft: _v18,
        onWidthChange: _v19,
        initialWidth: _v14,
        minWidth: _v10.SIDEBAR_CONSTRAINTS.MIN_WIDTH,
        maxWidth: _v9
      })]
    });
  }], 0);
}