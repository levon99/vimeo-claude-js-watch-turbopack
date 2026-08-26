{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(474),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = ({
    fromUrl: _v0,
    toUrl: _v1,
    currentPath: _v2,
    routesNotToRedirect: _v3
  }) => _v3.includes(_v2) ? null : (0, _v1.jsx)(_v7.Redirect, {
    exact: !0,
    from: _v0,
    to: _v1
  });
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = () => {
    let {
      fromUrl: _v0,
      toUrl: _v1,
      changedSideDrawerRoutingMap: _v2,
      changedMainContentRoutingMap: _v3,
      changedRightDrawerRoutingMap: _v4,
      pathConfig: _v5
    } = (() => {
      let _v0 = (0, _v3.useStore)(_v0 => _v0.commonStore.isDesktopView),
        {
          id: _v1
        } = (0, _v7.useParams)(),
        _v2 = (0, _v7.useLocation)(),
        _v3 = `${_v14.ShowcaseRouteMap.BASE_URL}${_v1}${_v14.ShowcaseRouteMap.DEFAULT}`,
        _v4 = `${_v14.ShowcaseRouteMap.BASE_URL}${_v1}${_v14.ShowcaseRouteMap.INFO}`,
        _v5 = _v14.ShowcaseRouteMap.BASE_URL + _v1,
        _v6 = (0, _v2.useMemo)(() => (_v0 ? [..._v13.extendedRoutingSideDrawerMap, ..._v13.routingSideDrawerMap.filter(_v0 => _v0.path !== _v14.ShowcaseRouteMap.CUSTOMIZATION)] : _v13.allowedMobileRoutes).map(_v0 => ({
          ..._v0,
          path: _v5 + _v0.path
        })), [_v0, _v5]),
        _v7 = (0, _v2.useMemo)(() => _v0 ? _v13.routingMainContentMap.map(_v0 => ({
          ..._v0,
          path: _v5 + _v0.path
        })) : [], [_v0, _v5]);
      return {
        fromUrl: _v3,
        toUrl: _v4,
        changedSideDrawerRoutingMap: _v6,
        changedMainContentRoutingMap: _v7,
        changedRightDrawerRoutingMap: (0, _v2.useMemo)(() => !1 === _v0 ? [] : _v13.routingAnalyticsMap.map(_v0 => ({
          ..._v0,
          path: _v5 + _v0.path
        })), [_v0, _v5]),
        pathConfig: (0, _v2.useMemo)(() => ({
          currentPath: `/${_v2?.pathname?.split("/").pop() || ""}`,
          routesNotToRedirect: _v0 ? _v13.allowedDesktopRoutes.filter(_v0 => _v0 !== _v14.ShowcaseRouteMap.LIST) : _v13.allowedMobileRoutes.map(_v0 => _v0.path)
        }), [_v0, _v2?.pathname])
      };
    })();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.Suspense, {
        fallback: (0, _v1.jsx)(_v12.SidebarDrawerLoading, {
          location: "left"
        }),
        children: (0, _v1.jsxs)(_v7.Switch, {
          children: [_v2.map(({
            path: _v0,
            Component: _v1
          }) => (0, _v1.jsx)(_v7.Route, {
            path: _v0,
            component: _v1,
            exact: !0
          }, _v0)), (0, _v1.jsx)(_v10, {
            fromUrl: _v0,
            toUrl: _v1,
            currentPath: _v5?.currentPath,
            routesNotToRedirect: _v5?.routesNotToRedirect
          })]
        })
      }), _v3.length > 0 && (0, _v1.jsx)(_v2.Suspense, {
        fallback: (0, _v1.jsx)(_v11.MainContentLoading, {}),
        children: (0, _v1.jsx)(_v7.Switch, {
          children: _v3.map(({
            path: _v0,
            Component: _v1
          }) => (0, _v1.jsx)(_v7.Route, {
            path: _v0,
            component: _v1
          }, _v0))
        })
      }), _v4.length > 0 && (0, _v1.jsx)(_v2.Suspense, {
        fallback: (0, _v1.jsx)(_v12.SidebarDrawerLoading, {
          location: "right"
        }),
        children: (0, _v1.jsx)(_v7.Switch, {
          children: _v4.map(({
            path: _v0,
            Component: _v1
          }) => (0, _v1.jsx)(_v7.Route, {
            path: _v0,
            component: _v1
          }, _v0))
        })
      })]
    });
  };
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = () => {
    let {
      name: _v0
    } = (0, _v20.useSavedName)();
    return (0, _v6.isEmpty)(_v0) ? null : (0, _v1.jsx)(_v19.default, {
      children: (0, _v1.jsx)("title", {
        children: _v0
      })
    });
  };
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => {
      let _v0 = (0, _v26.useIsMobile)(),
        _v1 = (0, _v3.useStore)(_v0 => _v0.commonStore.showcaseConfig.userId),
        _v2 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setIsSideNavOpen),
        _v3 = (0, _v2.useCallback)(_v0 => {
          (0, _v6.isEmpty)(_v1) || _v2(_v0);
        }, [_v2, _v1]);
      return (0, _v2.useEffect)(() => {
        _v0 || _v2(!1);
      }, [_v0, _v2]), {
        toggleSideNavState: _v3
      };
    },
    _v28 = () => {
      let {
        toggleSideNavState: _v0
      } = _v27();
      return (0, _v1.jsx)(_v23.IconButton, {
        "aria-label": (0, _v25.translate)({
          singular: "Open sidenav",
          dictionary: {
            es: {
              singular: "Abrir la navegación lateral"
            },
            "de-DE": {
              singular: "Seitenleiste öffnen"
            },
            "fr-FR": {
              singular: "Ouvrir le menu de navigation latéral"
            },
            "ja-JP": {
              singular: "サイドメニューを開く"
            },
            "ko-KR": {
              singular: "사이드바 열기"
            },
            "pt-BR": {
              singular: "Abrir barra de navegação lateral"
            },
            "zh-CN": {
              singular: "打开侧边导航栏"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v24.Menu, {}),
        variant: "tertiary",
        onClick: () => _v0(!0),
        size: {
          base: "xs",
          sm: "sm"
        },
        "data-id": "open-sidenav",
        hideFrom: "md"
      });
    };
  var _v29 = _v0.i(0);
  let _v30 = `repeat(2, minmax(${(0, _v22.rem)(32)}, min-content))`,
    _v31 = () => (0, _v1.jsxs)(_v18.Navigation.LeftContent, {
      gap: {
        base: "sm",
        md: (0, _v22.rem)(23)
      },
      "data-id": "showcase-home-header-left",
      gridTemplateColumns: _v30,
      display: "grid",
      children: [(0, _v1.jsx)(_v28, {}), (0, _v1.jsx)(_v8.Flex, {
        position: "relative",
        top: {
          base: 0,
          md: (0, _v22.rem)(-3)
        },
        children: (0, _v1.jsx)(_v18.Navigation.VimeoLogo, {})
      }), (0, _v1.jsx)(_v29.ShowcaseBreadcrumbs, {})]
    });
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = _v0 => _v0.commonStore.metadataInteractionsAddVideosUri,
    _v42 = _v0 => _v0.commonStore.actions.setOpenModal,
    _v43 = _v0 => String(_v0.commonStore.showcaseConfig.showcaseId),
    _v44 = () => {
      let [_v0] = (0, _v33.useMediaQuery)(`(min-width: ${_v4.bokehTheme.breakpoints.md})`),
        _v1 = (0, _v3.useStore)(_v41),
        _v2 = (0, _v3.useStore)(_v42),
        _v3 = (0, _v3.useStore)(_v43),
        {
          sendVideoListTopActionBarEvents: _v4
        } = (0, _v40.useBpEventService)(),
        {
          trackShowcaseManageVideosAddVideosClicked: _v5
        } = (0, _v39.useShowcaseManageTracking)();
      return _v1 ? (0, _v1.jsx)(_v37.Button, {
        "data-id": "header-add-videos-button",
        variant: "secondary",
        hideBelow: "sm",
        size: _v0 ? "md" : "sm",
        leftIcon: (0, _v1.jsx)(_v38.VideosStack, {}),
        onClick: () => {
          _v5({
            showcaseId: _v3,
            location: "header"
          }), _v2(_v14.ModalType.ADD_VIDEO_TO_SHOWCASE), _v4("vimeo.showcase_add_video_modal_open", "add videos");
        },
        children: (0, _v25.translate)({
          singular: "Add videos",
          dictionary: {
            es: {
              singular: "Agregar videos"
            },
            "de-DE": {
              singular: "Video hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter des vidéos"
            },
            "ja-JP": {
              singular: "動画を追加"
            },
            "ko-KR": {
              singular: "동영상 추가"
            },
            "pt-BR": {
              singular: "Adicionar vídeos"
            },
            "zh-CN": {
              singular: "添加视频"
            }
          }
        })
      }) : null;
    };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = ({
      onClick: _v0
    }) => {
      let _v1 = (0, _v7.useHistory)().location.pathname.includes(_v14.ShowcaseRouteMap.ANALYTICS) ? "secondary" : "minimal",
        _v2 = (0, _v25.translate)({
          singular: "Showcase Analytics",
          dictionary: {
            es: {
              singular: "Análisis de presentaciones"
            },
            "de-DE": {
              singular: "Analytik für Präsentationen"
            },
            "fr-FR": {
              singular: "Statistiques des présentations"
            },
            "ja-JP": {
              singular: "ショーケース分析"
            },
            "ko-KR": {
              singular: "쇼케이스 분석"
            },
            "pt-BR": {
              singular: "Análises da vitrine"
            },
            "zh-CN": {
              singular: "展示分析"
            }
          }
        });
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v45.Box, {
          hideBelow: "lg",
          children: (0, _v1.jsx)(_v37.Button, {
            leftIcon: (0, _v1.jsx)(_v46.Analytics, {}),
            onClick: _v0,
            size: "md",
            variant: _v1,
            id: "desktop-showcase-analytics-cta-button",
            "data-id": "desktop-showcase-cta-analytics",
            "aria-label": _v2,
            children: (0, _v25.translate)({
              singular: "Analytics",
              dictionary: {
                es: {
                  singular: "Análisis"
                },
                "de-DE": {
                  singular: "Analytik"
                },
                "fr-FR": {
                  singular: "Analyses"
                },
                "ja-JP": {
                  singular: "分析"
                },
                "ko-KR": {
                  singular: "애널리틱스"
                },
                "pt-BR": {
                  singular: "Análises"
                },
                "zh-CN": {
                  singular: "分析"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v45.Box, {
          display: {
            base: "none",
            md: "block",
            lg: "none"
          },
          children: (0, _v1.jsx)(_v23.IconButton, {
            icon: (0, _v1.jsx)(_v46.Analytics, {}),
            onClick: _v0,
            size: "md",
            variant: _v1,
            id: "mobile-showcase-analytics-cta-button",
            "data-id": "mobile-showcase-cta-analytics",
            "aria-label": _v2
          })
        })]
      });
    },
    _v48 = () => {
      let _v0 = (() => {
        let _v0 = (0, _v7.useHistory)(),
          {
            sendShowcaseAnalyticsClickEvent: _v1
          } = (0, _v40.useBpEventService)(),
          {
            showcaseConfig: {
              showcaseId: _v2
            }
          } = (0, _v3.useStore)(_v0 => _v0.commonStore);
        return (0, _v2.useCallback)(() => {
          let _v0 = `${_v14.ShowcaseRouteMap.BASE_URL}${_v2}`,
            _v1 = _v0.location.pathname,
            _v2 = _v1.includes(_v14.ShowcaseRouteMap.ANALYTICS) ? `${_v0}${_v14.ShowcaseRouteMap.INFO}` : `${_v0}${_v14.ShowcaseRouteMap.ANALYTICS}`;
          _v1 !== _v2 && _v0.replace(_v2), _v1("vimeo.showcase_analytics_drawer_open", "top_navigation_bar", "analytics");
        }, [_v0, _v2]);
      })();
      return (0, _v1.jsx)(_v47, {
        onClick: _v0
      });
    };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useStore)(_v0 => _v0.commonStore.showcaseOwnerId),
        {
          handleMenuButtonClick: _v2,
          isDesktop: _v3,
          isMenuActive: _v4,
          isTooltipOpen: _v5,
          setIsMenuActive: _v6,
          setIsTooltipOpen: _v7
        } = (() => {
          let [_v0] = (0, _v33.useMediaQuery)(`(min-width: ${_v4.bokehTheme.breakpoints.md})`),
            [_v1, _v2] = (0, _v2.useState)(!1),
            [_v3, _v4] = (0, _v2.useState)(!1),
            {
              sendShowcaseDeleteEvents: _v5
            } = (0, _v40.useBpEventService)();
          return {
            handleMenuButtonClick: () => {
              _v2(!_v1), _v5("vimeo.showcase_options_open", "top_action_bar", null, null);
            },
            isDesktop: _v0,
            isMenuActive: _v1,
            isTooltipOpen: _v3,
            setIsMenuActive: _v2,
            setIsTooltipOpen: _v4
          };
        })();
      return (0, _v1.jsxs)(_v57.Menu, {
        isOpen: _v4,
        placement: "bottom",
        onClose: () => _v6(!1),
        onOpen: () => _v7(!1),
        children: [(0, _v1.jsx)(_v60.Tooltip, {
          isOpen: _v5,
          label: (0, _v25.translate)({
            singular: "File actions",
            dictionary: {
              es: {
                singular: "Acciones de archivo"
              },
              "de-DE": {
                singular: "Dateiaktionen"
              },
              "fr-FR": {
                singular: "Actions sur les fichiers"
              },
              "ja-JP": {
                singular: "ファイルアクション"
              },
              "ko-KR": {
                singular: "파일 작업"
              },
              "pt-BR": {
                singular: "Ações de arquivo"
              },
              "zh-CN": {
                singular: "文件操作"
              }
            }
          }),
          hideBelow: "md",
          children: (0, _v1.jsx)(_v58.MenuButton, {
            onMouseEnter: () => _v7(!0),
            onMouseLeave: () => _v7(!1),
            as: _v23.IconButton,
            isDisabled: !_v1,
            icon: (0, _v1.jsx)(_v61.EllipsisV, {}),
            onClick: _v2,
            "aria-label": (0, _v25.translate)({
              singular: "Delete showcase",
              dictionary: {
                es: {
                  singular: "Eliminar presentación"
                },
                "de-DE": {
                  singular: "Präsentation löschen"
                },
                "fr-FR": {
                  singular: "Supprimer la présentation"
                },
                "ja-JP": {
                  singular: "ショーケースを削除"
                },
                "ko-KR": {
                  singular: "쇼케이스 삭제"
                },
                "pt-BR": {
                  singular: "Excluir vitrine"
                },
                "zh-CN": {
                  singular: "删除橱窗"
                }
              }
            }),
            variant: "tertiary",
            size: _v3 ? "md" : "sm"
          })
        }), (0, _v1.jsx)(_v59.MenuList, {
          minW: (0, _v22.rem)(217),
          children: _v0
        })]
      });
    },
    _v63 = _v0 => _v0.commonStore.metadataInteractionsDeleteUri,
    _v64 = _v0 => _v0.commonStore.actions.setOpenModal,
    _v65 = _v0 => ({
      showcaseId: _v0.commonStore.showcaseConfig.showcaseId,
      userId: _v0.commonStore.showcaseConfig.userId,
      name: _v0.infoStore.name
    }),
    _v66 = () => {
      let [_v0, _v1] = (0, _v2.useState)(!1),
        [_v2, _v3] = (0, _v2.useState)(""),
        [_v4, _v5] = (0, _v2.useState)(void 0),
        _v6 = (0, _v56.useNotification)(),
        _v7 = (0, _v3.useStore)(_v63),
        _v8 = (0, _v3.useStore)(_v64),
        {
          showcaseId: _v9,
          userId: _v10,
          name: _v11
        } = (0, _v3.useStore)(_v65),
        {
          sendShowcaseDeleteEvents: _v12
        } = (0, _v40.useBpEventService)(),
        {
          trackShowcaseManageOverflowActionClicked: _v13
        } = (0, _v39.useShowcaseManageTracking)(),
        _v14 = String(_v9),
        _v15 = _v10 && _v9 ? `/users/${_v10}/albums/${_v9}` : "",
        _v16 = (0, _v2.useCallback)(_v0 => {
          "invalid_name" === _v0 ? _v5((0, _v25.translate)({
            singular: "Your title is invalid or longer than {LIMIT} characters.",
            replacements: {
              LIMIT: _v52.SHOWCASE_TITLE_MAX_LENGTH
            },
            dictionary: {
              es: {
                singular: "Su título no es válido o supera los {LIMIT} caracteres."
              },
              "de-DE": {
                singular: "Ihr Titel ist ungültig oder länger als {LIMIT} Zeichen."
              },
              "fr-FR": {
                singular: "Le titre est invalide ou dépasse {LIMIT} caractères."
              },
              "ja-JP": {
                singular: "タイトルが無効であるか、{LIMIT}文字を超えています。"
              },
              "ko-KR": {
                singular: "제목이 유효하지 않거나 {LIMIT}자보다 깁니다."
              },
              "pt-BR": {
                singular: "Seu título é inválido ou tem mais de {LIMIT} caracteres."
              },
              "zh-CN": {
                singular: "您的标题无效或长度超过 {LIMIT} 个字符。"
              }
            }
          })) : _v6({
            content: (0, _v25.translate)({
              singular: "Oops, something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "Ups, algo salió mal. Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Ops, algo deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            }),
            status: "error"
          });
        }, [_v6]),
        _v17 = (0, _v2.useCallback)(() => {
          _v1(!1), _v3(""), _v5(void 0);
        }, []),
        _v18 = (0, _v2.useCallback)(_v0 => {
          _v3(_v0), _v5(void 0);
        }, []),
        _v19 = (0, _v2.useCallback)(({
          name: _v0,
          uri: _v1
        }) => {
          let _v2 = _v0 ?? _v2,
            _v3 = (0, _v54.uriToShowcaseLink)(_v1, !0);
          _v17(), _v6({
            content: (0, _v25.translate)({
              singular: 'Created "{SHOWCASE_NAME}". {LINK}Open page{/LINK}',
              replacements: {
                SHOWCASE_NAME: _v2,
                LINK: _v0 => (0, _v1.jsx)(_v49.Link, {
                  href: _v3,
                  cursor: "pointer",
                  fontSize: (0, _v22.rem)(14),
                  color: "currentColor",
                  textDecoration: "underline",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: 'Se creó "{SHOWCASE_NAME}". {LINK}Abrir página{/LINK}'
                },
                "de-DE": {
                  singular: 'Erstellt "{SHOWCASE_NAME}". {LINK}Seite öffnen{/LINK}'
                },
                "fr-FR": {
                  singular: 'Créé "{SHOWCASE_NAME}". {LINK}Ouvrir la page{/LINK}'
                },
                "ja-JP": {
                  singular: '作成しました "{SHOWCASE_NAME}". {LINK}ページを開く{/LINK}'
                },
                "ko-KR": {
                  singular: '"{SHOWCASE_NAME}"을(를) 생성했습니다. {LINK}페이지 열기{/LINK}'
                },
                "pt-BR": {
                  singular: 'Criado "{SHOWCASE_NAME}". {LINK}Abrir página{/LINK}'
                },
                "zh-CN": {
                  singular: '已创建 "{SHOWCASE_NAME}". {LINK}打开页面{/LINK}'
                }
              }
            }),
            status: "success"
          });
        }, [_v2, _v17, _v6]),
        [_v20, {
          loading: _v21
        }] = (0, _v55.useCopyShowcase)({
          onFailure: _v16,
          onSuccess: _v19
        });
      return _v7 || _v15 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v62, {
          children: [_v15 && (0, _v1.jsx)(_v50.MenuItem, {
            "data-id": "copy-showcase-menu-item",
            onClick: () => {
              _v13({
                showcaseId: _v14,
                showcaseManageOverflowAction: "make_a_copy"
              }), _v3((0, _v53.buildCopyPrefilledTitle)(_v11 ?? "", _v52.SHOWCASE_TITLE_MAX_LENGTH)), _v5(void 0), _v1(!0);
            },
            children: (0, _v25.translate)({
              singular: "Make a copy",
              dictionary: {
                es: {
                  singular: "Hacer una copia"
                },
                "de-DE": {
                  singular: "Kopie erstellen"
                },
                "fr-FR": {
                  singular: "Faire une copie"
                },
                "ja-JP": {
                  singular: "コピーを作る"
                },
                "ko-KR": {
                  singular: "사본 만들기"
                },
                "pt-BR": {
                  singular: "Fazer uma cópia"
                },
                "zh-CN": {
                  singular: "复制"
                }
              }
            })
          }), _v7 && (0, _v1.jsx)(_v50.MenuItem, {
            "data-id": "delete-showcase-menu-item",
            onClick: () => {
              _v13({
                showcaseId: _v14,
                showcaseManageOverflowAction: "delete"
              }), _v8(_v14.ModalType.DELETE_SHOWCASE), _v12("vimeo.showcase_delete_modal_open", "sidebar", "delete showcase");
            },
            children: (0, _v25.translate)({
              singular: "Delete showcase",
              dictionary: {
                es: {
                  singular: "Eliminar presentación"
                },
                "de-DE": {
                  singular: "Präsentation löschen"
                },
                "fr-FR": {
                  singular: "Supprimer la présentation"
                },
                "ja-JP": {
                  singular: "ショーケースを削除"
                },
                "ko-KR": {
                  singular: "쇼케이스 삭제"
                },
                "pt-BR": {
                  singular: "Excluir vitrine"
                },
                "zh-CN": {
                  singular: "删除橱窗"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v51.NameInputModal, {
          isOpen: _v0,
          isLoading: _v21,
          title: (0, _v25.translate)({
            singular: "Make a copy",
            dictionary: {
              es: {
                singular: "Hacer una copia"
              },
              "de-DE": {
                singular: "Kopie erstellen"
              },
              "fr-FR": {
                singular: "Faire une copie"
              },
              "ja-JP": {
                singular: "コピーを作る"
              },
              "ko-KR": {
                singular: "사본 만들기"
              },
              "pt-BR": {
                singular: "Fazer uma cópia"
              },
              "zh-CN": {
                singular: "复制"
              }
            }
          }),
          name: _v2,
          error: _v4,
          maxLength: _v52.SHOWCASE_TITLE_MAX_LENGTH,
          onClose: _v17,
          onNameChange: _v18,
          onSubmit: _v0 => {
            _v15 ? _v20(_v15, _v0) : _v16();
          }
        })]
      }) : null;
    };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = () => {
    let {
        loading: _v0,
        handleCancel: _v1,
        handleSave: _v2
      } = (0, _v68.useFinalSaveHook)(),
      {
        isSaveDisabled: _v3
      } = (0, _v69.useForm)();
    return (0, _v1.jsxs)(_v67.ButtonGroup, {
      spacing: "md",
      hideBelow: "md",
      children: [(0, _v1.jsx)(_v37.Button, {
        variant: "secondary",
        "data-id": "desktop-view-cancel-btn",
        onClick: _v1,
        children: (0, _v25.translate)({
          singular: "Cancel",
          dictionary: {
            es: {
              singular: "Cancelar"
            },
            "de-DE": {
              singular: "Abbrechen"
            },
            "fr-FR": {
              singular: "Annuler"
            },
            "ja-JP": {
              singular: "キャンセル"
            },
            "ko-KR": {
              singular: "취소"
            },
            "pt-BR": {
              singular: "Cancelar"
            },
            "zh-CN": {
              singular: "取消"
            }
          }
        })
      }), (0, _v1.jsx)(_v37.Button, {
        isLoading: _v0,
        isDisabled: _v3(),
        "data-id": "desktop-view-save-btn",
        variant: "primary",
        onClick: _v2,
        children: (0, _v25.translate)({
          singular: "Save",
          dictionary: {
            es: {
              singular: "Guardar"
            },
            "de-DE": {
              singular: "Speichern"
            },
            "fr-FR": {
              singular: "Enregistrer"
            },
            "ja-JP": {
              singular: "保存"
            },
            "ko-KR": {
              singular: "저장"
            },
            "pt-BR": {
              singular: "Salvar"
            },
            "zh-CN": {
              singular: "保存"
            }
          }
        })
      })]
    });
  };
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = () => {
    let _v0 = (0, _v3.useStore)(_v0 => _v0.commonStore.isSearchOpen),
      _v1 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setIsSearchOpen);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v49.Link, {
        href: "/search",
        target: "_blank",
        hideFrom: "md",
        children: (0, _v1.jsx)(_v23.IconButton, {
          "aria-label": (0, _v25.translate)({
            singular: "Search",
            dictionary: {
              es: {
                singular: "Buscar"
              },
              "de-DE": {
                singular: "Suchen"
              },
              "fr-FR": {
                singular: "Chercher"
              },
              "ja-JP": {
                singular: "検索"
              },
              "ko-KR": {
                singular: "검색"
              },
              "pt-BR": {
                singular: "Pesquisar"
              },
              "zh-CN": {
                singular: "搜索"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v71.SearchMagnifier, {}),
          variant: "tertiary",
          size: "sm"
        })
      }), (0, _v1.jsx)(_v45.Box, {
        flexGrow: +!!_v0,
        maxW: (0, _v22.rem)(480),
        hideBelow: "md",
        children: (0, _v1.jsx)(_v72.SearchField, {
          withToggle: !0,
          updateGlobalNavSearchState: _v0 => {
            _v1(_v0);
          }
        })
      })]
    });
  };
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = () => {
    let _v0 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setOpenModal);
    return (0, _v1.jsx)(_v23.IconButton, {
      "aria-label": (0, _v25.translate)({
        singular: "Share button",
        dictionary: {
          es: {
            singular: "Botón Compartir"
          },
          "de-DE": {
            singular: "Teilen-Button"
          },
          "fr-FR": {
            singular: "Bouton Partager"
          },
          "ja-JP": {
            singular: "シェアボタン"
          },
          "ko-KR": {
            singular: "공유 버튼"
          },
          "pt-BR": {
            singular: "Botão Compartilhar"
          },
          "zh-CN": {
            singular: "分享按钮"
          }
        }
      }),
      "data-id": "share-button-mobile",
      icon: (0, _v1.jsx)(_v77.Share, {}),
      variant: "primary",
      onClick: () => _v0(_v14.ModalType.RESOURCE_SHARE_MODAL),
      size: "sm",
      hideFrom: "sm"
    });
  };
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = () => {
    let {
        isTooltipOpen: _v0,
        menuState: _v1,
        onMoreSharingOptionsClick: _v2,
        setIsTooltipOpen: _v3,
        shareMenu: _v4
      } = (0, _v80.useShareMenu)(),
      _v5 = (0, _v2.useMemo)(() => _v4.map((_v0, _v1) => {
        let {
          disabled: _v2,
          label: _v3,
          ..._v4
        } = _v0;
        return (0, _v1.jsx)(_v50.MenuItem, {
          "data-id": `share-menu-item-${_v1}`,
          isDisabled: !!_v2,
          ..._v4,
          children: (0, _v1.jsx)(_v79.Text, {
            variant: "body-md",
            children: _v3
          })
        }, `share-menu-item-${_v1}`);
      }), [_v4]);
    return (0, _v1.jsx)(_v45.Box, {
      hideBelow: "md",
      children: (0, _v1.jsxs)(_v57.Menu, {
        "data-id": "more-sharing-options-menu",
        placement: "bottom",
        ..._v1,
        children: [(0, _v1.jsx)(_v60.Tooltip, {
          label: (0, _v1.jsx)(_v79.Text, {
            variant: "body-md",
            children: (0, _v25.translate)({
              singular: "More sharing options",
              dictionary: {
                es: {
                  singular: "Más opciones para compartir"
                },
                "de-DE": {
                  singular: "Weitere Optionen zum Teilen"
                },
                "fr-FR": {
                  singular: "Plus d'options de partage"
                },
                "ja-JP": {
                  singular: "その他の共有オプション"
                },
                "ko-KR": {
                  singular: "공유 옵션 더 보기"
                },
                "pt-BR": {
                  singular: "Mais opções de compartilhamento"
                },
                "zh-CN": {
                  singular: "更多分享选项"
                }
              }
            })
          }),
          isOpen: _v0,
          children: (0, _v1.jsx)(_v76.SplitButtonSecondaryMenu, {
            "data-id": "more-sharing-split-menu",
            "aria-label": (0, _v25.translate)({
              singular: "More sharing options",
              dictionary: {
                es: {
                  singular: "Más opciones para compartir"
                },
                "de-DE": {
                  singular: "Weitere Optionen zum Teilen"
                },
                "fr-FR": {
                  singular: "Plus d'options de partage"
                },
                "ja-JP": {
                  singular: "その他の共有オプション"
                },
                "ko-KR": {
                  singular: "공유 옵션 더 보기"
                },
                "pt-BR": {
                  singular: "Mais opções de compartilhamento"
                },
                "zh-CN": {
                  singular: "更多分享选项"
                }
              }
            }),
            onClick: _v2,
            onMouseEnter: () => _v3(!0),
            onMouseLeave: () => _v3(!1)
          })
        }), (0, _v1.jsx)(_v59.MenuList, {
          w: (0, _v22.rem)(217),
          children: _v5
        })]
      })
    });
  };
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = () => {
      let [_v0, _v1] = (0, _v2.useState)(!1),
        {
          actions: {
            setOpenModal: _v2
          },
          privacy: _v3
        } = (0, _v3.useStore)(_v0 => _v0.commonStore),
        _v4 = _v3?.view === _v82.EVENT_PRIVACY_VALUES.TEAM ? _v82.EVENT_PRIVACY_VALUES.PRIVATE : _v3?.view,
        _v5 = (0, _v83.getEventShowcaseCopy)(_v82.DEFAULT_PRIVACY_OPTIONS).find(_v0 => _v0.privacy === _v4),
        _v6 = {
          description: _v5?.description ?? "",
          title: _v5?.title ?? "",
          icon: _v82.VIDEO_PRIVACY_ICON_MAP[_v5?.privacy]?.icon ?? null
        };
      return {
        isPrivacyTooltipOpen: _v0,
        onShareClick: (0, _v2.useCallback)(() => {
          _v1(!1), _v2(_v14.ModalType.RESOURCE_SHARE_MODAL);
        }, [_v2]),
        privacyTooltipFields: _v6,
        setIsPrivacyTooltipOpen: _v1
      };
    },
    _v85 = () => {
      let [_v0] = (0, _v33.useMediaQuery)(`(min-width: ${_v4.bokehTheme.breakpoints.md})`),
        {
          isPrivacyTooltipOpen: _v1,
          onShareClick: _v2,
          privacyTooltipFields: _v3,
          setIsPrivacyTooltipOpen: _v4
        } = _v84(),
        {
          description: _v5,
          icon: _v6,
          title: _v7
        } = _v3;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v78, {}), (0, _v1.jsxs)(_v76.SplitButton, {
          "aria-label": (0, _v25.translate)({
            singular: "Share button",
            dictionary: {
              es: {
                singular: "Botón Compartir"
              },
              "de-DE": {
                singular: "Teilen-Button"
              },
              "fr-FR": {
                singular: "Bouton Partager"
              },
              "ja-JP": {
                singular: "シェアボタン"
              },
              "ko-KR": {
                singular: "공유 버튼"
              },
              "pt-BR": {
                singular: "Botão Compartilhar"
              },
              "zh-CN": {
                singular: "分享按钮"
              }
            }
          }),
          "data-id": "share-button",
          variant: "primary",
          hideBelow: "sm",
          size: _v0 ? "md" : "sm",
          children: [(0, _v1.jsx)(_v60.Tooltip, {
            maxW: "fit-content",
            label: (0, _v1.jsxs)(_v8.Flex, {
              align: "flex-start",
              direction: "column",
              textAlign: "left",
              children: [(0, _v1.jsx)(_v75.Header, {
                size: "sm",
                children: _v7
              }), (0, _v1.jsx)(_v74.Paragraph, {
                size: "md",
                children: _v5
              })]
            }),
            isOpen: _v1,
            children: (0, _v1.jsx)(_v76.SplitButtonPrimary, {
              onClick: _v2,
              leftIcon: _v6,
              onMouseEnter: () => _v4(!0),
              onMouseLeave: () => _v4(!1),
              children: (0, _v25.translate)({
                singular: "Share",
                dictionary: {
                  es: {
                    singular: "Compartir"
                  },
                  "de-DE": {
                    singular: "Teilen"
                  },
                  "fr-FR": {
                    singular: "Partager"
                  },
                  "ja-JP": {
                    singular: "共有"
                  },
                  "ko-KR": {
                    singular: "공유"
                  },
                  "pt-BR": {
                    singular: "Compartilhar"
                  },
                  "zh-CN": {
                    singular: "分享"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v81, {})]
        })]
      });
    };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = () => {
      let {
        undoAction: _v0,
        redoAction: _v1,
        isUndoDisabled: _v2,
        isRedoDisabled: _v3
      } = (() => {
        let [_v0] = (0, _v33.useMediaQuery)(`(min-width: ${_v4.bokehTheme.breakpoints.md})`),
          _v1 = (0, _v7.useHistory)(),
          _v2 = (0, _v3.useStore)(_v0 => _v0.timelineStore.timeline),
          _v3 = (0, _v3.useStore)(_v0 => _v0.timelineStore.actions.timelineGoBack),
          _v4 = (0, _v3.useStore)(_v0 => _v0.timelineStore.actions.timelineGoForward),
          _v5 = (0, _v3.useStore)(_v0 => _v0.timelineStore.actions.timelineCurrent),
          _v6 = (0, _v3.useStore)(_v0 => _v0.commonStore.deltaKeys),
          _v7 = (0, _v3.useStore)(_v0 => _v0.commonStore.deltaValues),
          _v8 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setDeltaKeys),
          _v9 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setDeltaValues),
          _v10 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.updateStoreAttribute),
          _v11 = (_v0, _v1, _v2) => {
            _v8([..._v6, _v0]), _v9({
              ..._v7,
              [_v1]: _v2
            }), _v10(_v0, _v2?.[1]);
          },
          _v12 = (_v0, _v1) => {
            if (_v7[_v0][0] === _v1?.[1]) {
              let _v0 = (0, _v6.omit)(_v7, _v0);
              _v8(_v6.filter(_v0 => _v0 !== _v0)), _v9(_v0);
              return;
            }
            _v9({
              ..._v7,
              [_v0]: [_v7[_v0][0], _v1?.[1]]
            });
          };
        return {
          isUndoDisabled: () => null === _v2.pointerId,
          isRedoDisabled: () => _v2.pointerId === _v2.tailId,
          undoAction: () => {
            let _v0 = _v5();
            if ((0, _v6.isEmpty)(_v0)) return;
            let _v1 = _v0?.data.deltaValue,
              _v2 = _v0?.data.deltaKey;
            _v3();
            let _v3 = _v5();
            if ((0, _v6.isEmpty)(_v3)) return;
            let _v4 = _v3?.data.deltaValue,
              _v5 = _v3?.data.deltaKey,
              _v6 = _v3?.pointerId,
              _v7 = _v3?.data.url,
              _v8 = _v6[_v6.length - 1],
              _v9 = _v2 ? _v2.split(".")[1] : "";
            (0, _v6.isNullOrUndefined)(_v6) ? ((_v0, _v1, _v2) => {
              _v8([]), _v9({}), _v10(_v0, _v1?.[0]), _v2 && _v1.location.pathname !== _v2 && _v1.push(_v2);
            })(_v2, _v1, _v7) : (_v5 !== _v2 && _v2 === _v8 ? ((_v0, _v1, _v2, _v3) => {
              if (_v1 !== _v0) {
                let _v0 = (0, _v6.omit)(_v7, _v2);
                _v8(_v6.filter(_v0 => _v0 !== _v0)), _v9(_v0);
              }
              _v10(_v0, _v3?.[0]);
            })(_v2, _v5, _v9, _v1) : ((_v0, _v1, _v2, _v3) => {
              let [_v4, _v5] = _v0 ? _v0.split(".") : [],
                _v6 = {
                  ..._v7,
                  [_v1]: _v6.includes(_v0) ? [_v7[_v5][0], _v2?.[0]] : _v3
                };
              _v6.includes(_v0) || _v8([..._v6, _v0]), _v9(_v6), _v10(_v0, _v2?.[0]);
            })(_v2, _v9, _v1, _v4), _v7 && _v1.location.pathname !== _v7 && _v1.push(_v7));
          },
          redoAction: () => {
            var _v0, _v1, _v2;
            _v4();
            let _v3 = _v5(),
              _v4 = _v3?.data.deltaValue,
              _v5 = _v3?.data.deltaKey,
              _v6 = _v3?.data.url,
              _v7 = _v5 ? _v5.split(".")[1] : "";
            _v0 = _v5, _v1 = _v7, _v2 = _v4, _v7.hasOwnProperty(_v1) ? _v12(_v1, _v2) : _v11(_v0, _v1, _v2), _v10(_v0, _v2?.[1]), _v6 && _v1.location.pathname !== _v6 && _v1.push(_v6);
          },
          isTimelineEmpty: () => !_v0 || null === _v2.headId
        };
      })();
      return (0, _v1.jsxs)(_v67.ButtonGroup, {
        spacing: "sm",
        hideBelow: "md",
        children: [(0, _v1.jsx)(_v60.Tooltip, {
          variant: "speech-bubble",
          placement: "bottom",
          label: _v14.UndoRedoBtnEnum.UNDO,
          children: (0, _v1.jsx)(_v23.IconButton, {
            icon: (0, _v1.jsx)(_v87.Undo, {}),
            onClick: _v0,
            variant: "tertiary",
            isDisabled: _v2(),
            "data-id": "desktop-view-undo-btn",
            "aria-label": "Desktop view undo button"
          })
        }), (0, _v1.jsx)(_v60.Tooltip, {
          variant: "speech-bubble",
          placement: "bottom",
          label: _v14.UndoRedoBtnEnum.REDO,
          children: (0, _v1.jsx)(_v23.IconButton, {
            icon: (0, _v1.jsx)(_v86.Redo, {}),
            onClick: _v1,
            variant: "tertiary",
            isDisabled: _v3(),
            "data-id": "desktop-view-redo-btn",
            "aria-label": "Desktop view redo button"
          })
        })]
      });
    },
    _v89 = (0, _v32.default)(async () => {
      let {
        Facepile: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: _v34.FacepileLoader,
      ssr: !1
    }),
    _v90 = () => {
      let [_v0] = (0, _v33.useMediaQuery)(`(min-width: ${_v4.bokehTheme.breakpoints.md})`),
        _v1 = (0, _v36.useViewer)(),
        {
          isDeltaEmpty: _v2
        } = (0, _v69.useForm)(),
        {
          onShareClick: _v3
        } = _v84(),
        _v4 = (0, _v3.useStore)(_v0 => _v0.commonStore.showcaseConfig.showcaseId),
        _v5 = !!_v0 && !_v2();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v18.Navigation.RightContent, {
          "data-id": "showcase-home-header-right",
          display: _v5 ? "none" : "flex",
          gap: {
            base: "sm",
            md: "md"
          },
          flexGrow: 1,
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v18.Navigation.Upgrade, {
            viewer: _v1
          }), (0, _v1.jsx)(_v48, {}), (0, _v1.jsx)(_v89, {
            resourceUri: `showcases/${_v4}`,
            onAddPeopleClick: _v3
          }), (0, _v1.jsx)(_v44, {}), (0, _v1.jsx)(_v85, {}), (0, _v1.jsx)(_v66, {}), (0, _v1.jsx)(_v73, {}), (0, _v1.jsx)(_v35.AccountMenu, {})]
        }), (0, _v1.jsxs)(_v18.Navigation.RightContent, {
          "data-id": "showcase-home-header-right",
          display: _v5 ? "flex" : "none",
          gap: {
            base: "sm",
            md: "md"
          },
          flexGrow: 1,
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v88, {}), (0, _v1.jsx)(_v70, {})]
        })]
      });
    };
  var _v91 = _v0.i(0);
  let _v92 = _v0 => (0, _v1.jsx)(_v91.Skeleton, {
      borderRadius: "sm",
      ..._v0
    }),
    _v93 = () => (0, _v1.jsxs)(_v18.Navigation, {
      ..._v13.loaderAriaProperties,
      children: [(0, _v1.jsxs)(_v18.Navigation.LeftContent, {
        gap: {
          base: "sm",
          md: (0, _v22.rem)(23)
        },
        children: [(0, _v1.jsx)(_v92, {
          hideFrom: "md",
          boxSize: {
            base: "xs",
            sm: "sm"
          }
        }), (0, _v1.jsx)(_v92, {
          w: {
            base: "xs",
            md: (0, _v22.rem)(78)
          },
          h: "xs"
        }), (0, _v1.jsx)(_v92, {
          hideBelow: "md",
          w: (0, _v22.rem)(220),
          h: "xs"
        })]
      }), (0, _v1.jsxs)(_v18.Navigation.RightContent, {
        gap: {
          base: "sm",
          md: "md"
        },
        children: [(0, _v1.jsx)(_v34.FacepileLoader, {}), (0, _v1.jsx)(_v92, {
          w: {
            base: "sm",
            sm: (0, _v22.rem)(100),
            md: (0, _v22.rem)(130)
          },
          h: {
            base: "sm",
            md: "md"
          }
        }), (0, _v1.jsx)(_v92, {
          boxSize: {
            base: "sm",
            md: "md"
          }
        }), (0, _v1.jsx)(_v92, {
          borderRadius: "50%",
          boxSize: {
            base: "sm",
            sm: "md"
          }
        })]
      })]
    }),
    _v94 = () => {
      let {
        showcaseOwnerId: _v0
      } = (0, _v3.useStore)(_v0 => _v0.commonStore);
      return (0, _v6.isEmpty)(_v0) ? (0, _v1.jsx)(_v93, {}) : (0, _v1.jsxs)(_v17.ErrorBoundary, {
        errorPage: _v93,
        children: [(0, _v1.jsx)(_v21, {}), (0, _v1.jsxs)(_v18.Navigation, {
          id: "header",
          gap: {
            base: "md",
            md: "lg"
          },
          px: {
            base: "3",
            md: "lg"
          },
          children: [(0, _v1.jsx)(_v31, {}), (0, _v1.jsx)(_v90, {})]
        })]
      });
    };
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  let _v97 = ({
      dataId: _v0,
      ..._v1
    }) => (0, _v1.jsxs)(_v95.Center, {
      flexDirection: "column",
      children: [(0, _v1.jsx)(_v23.IconButton, {
        "data-id": _v0,
        variant: _v1.isActive ? "primary" : "secondary",
        size: "lg",
        borderRadius: "round",
        ..._v1
      }), (0, _v1.jsx)(_v96.FormLabel, {
        textAlign: "center",
        textStyle: "body-xs",
        color: "text-secondary",
        htmlFor: _v1.id,
        mt: "xs",
        mb: "0",
        children: _v1["aria-label"]
      })]
    }),
    _v98 = () => {
      let {
        handleSidebarItemClick: _v0,
        checkIfCurrentPath: _v1
      } = (() => {
        let _v0 = (0, _v7.useHistory)(),
          {
            showcaseConfig: {
              showcaseId: _v1
            }
          } = (0, _v3.useStore)(_v0 => _v0.commonStore),
          {
            sendSidebarDrawerOpenCloseEvent: _v2
          } = (0, _v40.useBpEventService)(),
          {
            trackShowcaseManageTabSwitched: _v3
          } = (0, _v39.useShowcaseManageTracking)(),
          _v4 = {
            [_v14.ShowcaseRouteMap.INFO]: "settings",
            [_v14.ShowcaseRouteMap.LAYOUT]: "layout",
            [_v14.ShowcaseRouteMap.PLAYBACK]: "playback"
          };
        return {
          handleSidebarItemClick: _v0 => () => {
            let _v0 = _v13.sidebarItemsRouteMapping[_v0](_v14.ShowcaseRouteMap.INDEX + (0, _v6.getCurrentPath)(_v0?.location?.pathname));
            _v0.replace(`${_v14.ShowcaseRouteMap.BASE_URL}${_v1}${_v0}`), _v2(_v0);
            let _v1 = _v4[_v0];
            _v1 && _v3({
              showcaseId: String(_v1),
              showcaseManageNewTab: _v1
            });
          },
          getCurrentPath: _v6.getCurrentPath.bind(null, _v0?.location?.pathname),
          checkIfCurrentPath: _v0 => {
            let _v1 = (0, _v6.getParentPath)(_v0?.location?.pathname),
              _v2 = (0, _v6.getCurrentPath)(_v0?.location?.pathname);
            return (0, _v6.isPathMatch)(_v0, _v1, _v2);
          }
        };
      })();
      return (0, _v1.jsx)(_v8.Flex, {
        hideBelow: "md",
        "data-id": "showcase-sidebar",
        justify: "center",
        align: "center",
        w: (0, _v22.rem)(80),
        direction: "column",
        gap: "md",
        position: "relative",
        ml: "sm",
        children: _v13.sidebarItems.filter(_v0 => _v0.visible).map(({
          ariaLabel: _v0,
          Icon: _v1,
          path: _v2,
          dataId: _v3,
          activePath: _v4
        }, _v5) => (0, _v1.jsx)(_v97, {
          dataId: _v3,
          "aria-label": _v0,
          id: `showcase-sidebar-item-${_v5}`,
          icon: (0, _v1.jsx)(_v1, {
            boxSize: "sm"
          }),
          isActive: _v1(_v4),
          onClick: _v0(_v2)
        }, _v5))
      });
    };
  var _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  let {
      HomePrimaryNavbar: _v102,
      WayfinderSideNav: _v103
    } = _v101.dynamicImportComponents,
    _v104 = () => {
      let _v0 = (0, _v3.useStore)(_v0 => _v0.commonStore.isDesktopView),
        {
          teamOwnerId: _v1
        } = (0, _v3.useStore)(_v0 => _v0.commonStore.showcaseConfig),
        _v2 = (0, _v3.useStore)(_v0 => _v0.commonStore.isSideNavOpen),
        {
          toggleSideNavState: _v3
        } = _v27(),
        _v4 = (0, _v2.useCallback)(_v0 => {
          _v3("function" == typeof _v0 ? _v0(_v2) : _v0);
        }, [_v2, _v3]),
        _v5 = (0, _v2.useMemo)(() => ({
          isPersonalTeamFolderAdminView: !1,
          setIsPersonalTeamFolderAdminView: () => void 0,
          isSideNavOpen: _v2,
          setIsSideNavOpen: _v4,
          loadingSideNavFolderURIs: new Set(),
          setLoadingSideNavFolderURIs: () => void 0,
          shouldShowSideNav: !0,
          isScrolling: !1,
          teamOwnerId: _v1
        }), [_v2, _v4, _v1]);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: !1 === _v0 && (0, _v1.jsx)(_v100.VideoLibraryLayoutContext.Provider, {
          value: _v5,
          children: (0, _v1.jsx)(_v99.StarredItemsProvider, {
            children: (0, _v1.jsx)(_v103, {
              isMobile: !_v0,
              isOpen: _v2,
              onClose: () => _v3(!1),
              teamOwnerId: _v1,
              children: (0, _v1.jsx)(_v102, {
                variant: "full"
              })
            })
          })
        })
      });
    };
  var _v105 = _v0.i(0);
  let _v106 = () => (0, _v1.jsx)(_v8.Flex, {
      hideBelow: "md",
      "data-id": "showcase-sidebar",
      justify: "center",
      align: "center",
      w: (0, _v22.rem)(80),
      direction: "column",
      gap: "md",
      position: "relative",
      ml: "sm",
      ..._v13.loaderAriaProperties,
      children: Array.from({
        length: 3
      }).map((_v0, _v1) => (0, _v1.jsx)(_v91.Skeleton, {
        boxSize: "lg",
        borderRadius: "round"
      }, _v1))
    }),
    _v107 = ({
      children: _v0,
      isLoading: _v1
    }) => (0, _v1.jsx)(_v8.Flex, {
      position: "relative",
      h: "100%",
      overflowX: "hidden",
      flexGrow: "1",
      children: !0 === _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v106, {}), (0, _v1.jsx)(_v105.LoadingState, {})]
      }) : _v0
    }),
    _v108 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v8.Flex, {
      position: "relative",
      h: "100%",
      flexGrow: "1",
      direction: "column",
      bg: "background",
      children: _v0
    }),
    _v109 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v8.Flex, {
      position: "relative",
      flexGrow: "1",
      direction: "column",
      "flex-flow": "column nowrap",
      h: "100vh",
      isolation: "isolate",
      children: _v0
    }),
    {
      VideoListModalWrapper: _v110,
      DeleteShowcaseModal: _v111,
      ResourceShareModalWrapper: _v112,
      UpsellModalWrapper: _v113,
      DeleteLiveEventModal: _v114,
      EventCreationModal: _v115,
      SaveWithoutPremiumModal: _v116,
      MobileViewSettings: _v117
    } = _v101.dynamicImportComponents,
    _v118 = () => {
      let _v0,
        _v1 = (0, _v3.useStore)(_v0 => _v0.commonStore.isModalOpen),
        _v2 = (0, _v3.useStore)(_v0 => _v0.commonStore.modalType),
        {
          handleSaveWithoutPremium: _v3,
          handleCancelWithoutPremium: _v4
        } = (0, _v68.useFinalSaveHook)();
      if (_v0 = (0, _v3.useStore)(_v0 => _v0.commonStore.isModalOpen), (0, _v2.useLayoutEffect)(() => {
        let _v0 = document.body.style.overflow;
        return _v0 && (document.body.style.overflow = "hidden"), () => {
          document.body.style.overflow = _v0;
        };
      }, [_v0]), !_v1) return null;
      switch (_v2) {
        case _v14.ModalType.ADD_VIDEO_TO_SHOWCASE:
        case _v14.ModalType.SET_SHOWCASE_FEATURED_CONTENT:
          return (0, _v1.jsx)(_v110, {
            modalType: _v2
          });
        case _v14.ModalType.DELETE_SHOWCASE:
          return (0, _v1.jsx)(_v111, {});
        case _v14.ModalType.RESOURCE_SHARE_MODAL:
          return (0, _v1.jsx)(_v112, {});
        case _v14.ModalType.EVENT_CREATION_MODAL_UPGRADE:
        case _v14.ModalType.UPGRADE_PLAN:
          return (0, _v1.jsx)(_v113, {});
        case _v14.ModalType.DELETE_EVENT:
          return (0, _v1.jsx)(_v114, {});
        case _v14.ModalType.EVENT_CREATION_MODAL:
          return (0, _v1.jsx)(_v115, {});
        case _v14.ModalType.SAVE_WITHOUT_PREMIUM:
          return (0, _v1.jsx)(_v116, {
            handleSaveWithoutPremium: _v3,
            handleCancelWithoutPremium: _v4
          });
        case _v14.ModalType.MOBILE_SETTINGS_VIEW:
          return (0, _v1.jsx)(_v117, {});
        default:
          return null;
      }
    };
  var _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0);
  let _v127 = (0, _v7.withRouter)(_v0 => {
    let _v1,
      _v2,
      _v3,
      _v4,
      _v5 = _v0.match.params.id;
    (() => {
      let {
        isDeltaEmpty: _v0
      } = (0, _v69.useForm)();
      (0, _v2.useEffect)(() => {
        let _v0 = _v0 => {
          if (!_v0()) return _v0.preventDefault(), _v0.returnValue = _v13.PreventWindowCloseMsg, _v13.PreventWindowCloseMsg;
        };
        return window.addEventListener("beforeunload", _v0), () => {
          window.removeEventListener("beforeunload", _v0);
        };
      }, [_v0]);
    })(), (({
      showcaseId: _v0,
      uri: _v1,
      userId: _v2,
      viewer: _v3
    }) => {
      let {
          setShowcaseConfig: _v4
        } = (0, _v3.useStore)(_v0 => _v0.commonStore.actions),
        {
          apiUrl: _v5,
          isEnterpriseSite: _v6,
          jwt: _v7,
          locale: _v8,
          recaptchaSiteKey: _v9,
          xsrft: _v10,
          user: _v11,
          team: _v12
        } = _v3,
        _v13 = (0, _v2.useMemo)(() => ({
          apiUrl: _v5,
          isEnterpriseSite: _v6,
          jwt: _v7,
          locale: _v8,
          recaptchaSiteKey: _v9,
          showcaseId: parseInt(_v0, 10) || 0,
          userId: parseInt(_v2, 10),
          userUri: _v1,
          xsrft: _v10,
          teamOwnerId: _v12?.ownerId || 0,
          user: {
            name: _v11?.name,
            badge: _v11?.badge
          }
        }), [_v5, _v6, _v7, _v8, _v9, _v0, _v12?.ownerId, _v1, _v11, _v2, _v10]);
      (0, _v2.useEffect)(() => {
        _v4(_v13);
      }, [_v4, _v13]);
    })({
      showcaseId: _v5,
      ..._v0
    });
    let {
      loading: _v6
    } = (() => {
      let [_v0, _v1] = (0, _v2.useState)(!0),
        _v2 = (0, _v36.useViewer)(),
        _v3 = Object.keys(_v13.initialCapabilitiesConfig),
        _v4 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setCapabilities),
        _v5 = (0, _v3.useStore)(_v0 => _v0.commonStore.showcaseOwnerId);
      return (0, _v2.useEffect)(() => {
        _v5 && (0, _v124.getUserCapabilities)({
          capabilities: _v3,
          userId: _v5,
          jwt: _v2?.jwt,
          apiUrl: _v2?.apiUrl
        }).then(_v0 => {
          _v4(_v0), _v1(!1);
        });
      }, [_v5, _v2?.jwt, _v2?.apiUrl]), {
        loading: _v0
      };
    })();
    (() => {
      let {
          showcaseConfig: _v0
        } = (0, _v3.useStore)(_v0 => _v0.commonStore),
        {
          setTeamConfig: _v1
        } = (0, _v3.useStore)(_v0 => _v0.commonStore.actions),
        [_v2, {
          loading: _v3,
          error: _v4,
          data: _v5
        }] = (0, _v126.useGetUserTeamLazy)();
      (0, _v2.useEffect)(() => {
        (0, _v6.isEmpty)(_v0?.userId) || _v2({
          select: ["id", "uri", "ownerId", "teamName", "logoUri", "pictures", "accentColor", "teamShowcaseId"],
          where: {
            userId: Number(_v0.userId)
          }
        });
      }, [_v0?.userId]), (0, _v2.useEffect)(() => {
        _v3 || _v4 || !_v5 || _v1(_v5);
      }, [_v3, _v4, _v5]);
    })();
    let {
      loading: _v7
    } = (() => {
      let {
          id: _v0
        } = (0, _v7.useParams)(),
        {
          setCommonData: _v1
        } = (0, _v3.useStore)(_v0 => _v0.commonStore.actions),
        {
          setInfoData: _v2
        } = (0, _v3.useStore)(_v0 => _v0.infoStore.actions),
        {
          setSeoData: _v3
        } = (0, _v3.useStore)(_v0 => _v0.seoStore.actions),
        {
          setTvAppsData: _v4
        } = (0, _v3.useStore)(_v0 => _v0.tvAppsStore.actions),
        {
          setAppearanceData: _v5
        } = (0, _v3.useStore)(_v0 => _v0.appearanceStore.actions),
        _v6 = (0, _v3.useStore)(_v0 => _v0.videoListStore.actions.setInitialSortParam),
        _v7 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setMutateShowcaseData);
      (() => {
        let {
            updateDeltaChanges: _v0
          } = (0, _v3.useStore)(_v0 => _v0.commonStore.actions),
          _v1 = (0, _v3.useStore)(_v0 => _v0.timelineStore.actions.timelinePush),
          _v2 = (0, _v7.useHistory)(),
          _v3 = (0, _v2.useCallback)((_v0, _v1) => {
            let [_v2, _v3] = _v0.commonStore.actionType.split(".");
            _v123.fieldsToTrack[_v2]?.forEach(_v0 => {
              _v3 !== _v0 || (0, _v6.isSame)(_v0[_v2][_v0], _v1[_v2][_v0]) || (_v0(_v0.commonStore.actionType, _v1[_v2][_v0], _v0[_v2][_v0]), _v1([_v1[_v2][_v0], _v0[_v2][_v0]], _v0.commonStore.actionType, _v2.location.pathname));
            });
          }, [_v0]);
        (0, _v2.useEffect)(() => _v3.useStore.subscribe(_v3), []);
      })();
      let {
        data: _v8,
        error: _v9,
        isLoading: _v10,
        mutate: _v11
      } = (0, _v122.useGetAlbum)(() => (0, _v6.isEmpty)(_v0) ? null : {
        where: {
          albumId: Number(_v0)
        },
        select: _v13.albumFields
      }, {
        revalidateOnFocus: !1,
        errorRetryCount: 0
      });
      return (0, _v2.useEffect)(() => {
        if (!_v10 && !_v9 && _v8) {
          if (!_v8.embed) throw new _v121.UnauthorizedError("You are unauthorized for this action.");
          _v1(_v8), _v2(_v8), _v3(_v8), _v4(_v8), _v5(_v8), _v6(_v8);
        }
        if (!_v10 && _v9) throw new _v121.UnauthorizedError("Unauthorized Action");
      }, [_v8, _v9, _v10]), (0, _v2.useEffect)(() => {
        _v7(_v11);
      }, [_v11, _v7]), {
        error: _v9,
        loading: _v10
      };
    })();
    return _v1 = (0, _v3.useStore)(_v0 => _v0.commonStore.deltaValues), _v2 = (0, _v3.useStore)(_v0 => _v0.timelineStore.timeline), _v3 = (0, _v3.useStore)(_v0 => _v0.timelineStore.actions.timelineReset), (0, _v2.useEffect)(() => {
      (0, _v6.isEmpty)(_v1) && null !== _v2.headId && _v3();
    }, [_v1, _v2.headId]), _v4 = (0, _v3.useStore)(_v0 => _v0.appearanceStore.layout), (0, _v2.useEffect)(() => {
      _v4 !== _v14.AppearanceLayoutEnum.PLAYLIST && sessionStorage.setItem(_v13.sessionStorageKeys.DEFAULT_LAYOUT, _v4);
    }, [_v4]), (() => {
      let {
          sendShowcaseManagePageImpressionEvent: _v0
        } = (0, _v40.useBpEventService)(),
        _v1 = (0, _v2.useRef)(!1),
        _v2 = (0, _v3.useStore)(_v0 => String(_v0.commonStore.showcaseConfig.showcaseId)),
        {
          trackShowcaseManagePageDisplayed: _v3
        } = (0, _v39.useShowcaseManageTracking)();
      (0, _v2.useEffect)(() => {
        _v1.current || (_v1.current = !0, _v0());
      }, [_v0]), (0, _v125.usePicoEffect)(() => {
        var _v0;
        _v3({
          showcaseId: _v2,
          showcaseManageTab: (_v0 = window.location.pathname, _v14.DRAWER_ROUTES.LAYOUT.some(_v0 => _v0.includes(_v0)) ? "layout" : _v14.DRAWER_ROUTES.PLAYBACK.some(_v0 => _v0.includes(_v0)) ? "playback" : "settings")
        });
      }, [_v2], {
        once: !0
      });
    })(), (() => {
      let _v0 = (0, _v119.useToast)(),
        _v1 = (0, _v3.useStore)(_v0 => _v0.appearanceStore.actions.setMutateFeaturedContent),
        _v2 = (0, _v3.useStore)(_v0 => _v0.appearanceStore.actions.setFeaturedContent),
        {
          showcaseId: _v3
        } = (0, _v3.useStore)(_v0 => _v0.commonStore.showcaseConfig),
        {
          data: _v4,
          isLoading: _v5,
          error: _v6,
          mutate: _v7
        } = (0, _v120.useGetAlbumVideos)(() => _v3 ? {
          select: _v13.videoFields,
          where: {
            albumId: _v3
          },
          query: {
            perPage: 1,
            page: 1,
            getFeatured: !0
          },
          headers: {
            Accept: `application/vnd.vimeo.*+json;version=${_v13.VIDEOS_API_VERSION}`
          }
        } : null, {
          revalidateOnFocus: !1,
          errorRetryCount: 0
        });
      (0, _v2.useEffect)(() => {
        _v1(_v7);
      }, [_v7, _v1]), (0, _v2.useEffect)(() => {
        try {
          !_v4 || _v6 || _v5 || _v2(_v4?.data?.[0] ?? null), _v6 && !_v5 && _v0({
            title: "Error",
            description: (0, _v25.translate)({
              singular: "Error fetching featured video",
              dictionary: {
                es: {
                  singular: "Error al obtener el video destacado"
                },
                "de-DE": {
                  singular: "Fehler beim Abrufen des hervorgehobenen Videos"
                },
                "fr-FR": {
                  singular: "Erreur lors de la récupération de la vidéo à la une"
                },
                "ja-JP": {
                  singular: "注目動画の取得エラー"
                },
                "ko-KR": {
                  singular: "추천 동영상을 가져오는 중 오류 발생"
                },
                "pt-BR": {
                  singular: "Erro ao buscar o vídeo em destaque"
                },
                "zh-CN": {
                  singular: "获取精选视频时出现错误"
                }
              }
            })
          });
        } catch (_v0) {
          _v2(null);
        }
      }, [_v4, _v5, _v6]);
    })(), (0, _v1.jsxs)(_v9.UpsellModalProvider, {
      children: [(0, _v1.jsxs)(_v108, {
        children: [(0, _v1.jsxs)(_v109, {
          children: [(0, _v1.jsx)(_v94, {}), (0, _v1.jsx)(_v104, {}), (0, _v1.jsxs)(_v107, {
            isLoading: _v6 || _v7,
            children: [(0, _v1.jsx)(_v98, {}), (0, _v1.jsx)(_v8.Flex, {
              direction: "column",
              flex: "1",
              minW: 0,
              overflow: "hidden",
              children: (0, _v1.jsx)(_v8.Flex, {
                flex: "1",
                minH: 0,
                overflow: "hidden",
                w: "100%",
                children: (0, _v1.jsx)(_v15, {})
              })
            })]
          })]
        }), (0, _v1.jsx)(_v16.Footer, {})]
      }), (0, _v1.jsx)(_v118, {})]
    });
  });
  _v0.s(["default", 0, function (_v0) {
    let _v1, _v2, _v3;
    _v1 = `screen and (min-width: ${_v4.bokehTheme.breakpoints.md})`, _v2 = (0, _v5.useMediaQueryVisibility)(_v1), _v3 = (0, _v3.useStore)(_v0 => _v0.commonStore.actions.setIsDesktopView), (0, _v2.useLayoutEffect)(() => {
      _v3(_v2);
    }, [_v2, _v3]);
    let _v4 = (({
      match: _v0,
      viewer: _v1
    }) => {
      if (!_v0) return null;
      if (!_v1.user) throw Error("Not logged in");
      let _v2 = _v1.user.uri;
      if (!_v2) throw Error("No URI provided");
      let _v3 = _v2.split("/").pop();
      if (!_v3) throw Error("No user id provided");
      if ((0, _v6.isEmpty)(_v0.params.id)) throw Error("No showcase id provided");
      return {
        uri: _v2,
        userId: _v3
      };
    })(_v0);
    if (!_v4) return null;
    let {
      uri: _v5,
      userId: _v6
    } = _v4;
    return (0, _v1.jsx)(_v127, {
      uri: _v5,
      userId: _v6,
      ..._v0
    });
  }], 0);
}