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
  let _v12 = () => {
    let _v0 = (0, _v11.useViewer)(),
      {
        trackHeaderNotificationBellClicked: _v1
      } = (0, _v10.useHeaderTracking)();
    return _v0 && _v0.user && _v0.xsrft ? (0, _v1.jsx)(_v9.ActivityDropdown, {
      user: _v0.user,
      onClick: () => {
        _v1();
      }
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = (_v0, _v1) => void 0 === _v1 ? _v0 : {
      ..._v0,
      panel_page: _v1
    },
    _v22 = () => {
      let _v0 = (0, _v20.usePico)(),
        _v1 = (0, _v3.useCallback)(() => {
          null !== _v0 && _v0.track("support_panel_opened", {});
        }, [_v0]),
        _v2 = (0, _v3.useCallback)(_v0 => {
          null !== _v0 && _v0.track("support_panel_search", _v21({
            language: _v0.language,
            suggested: _v0.suggested,
            search_term: _v0.search_term,
            search_id: _v0.search_id
          }, _v0.panel_page));
        }, [_v0]),
        _v3 = (0, _v3.useCallback)(_v0 => {
          null !== _v0 && _v0.track("support_panel_popular_search_clicked", _v21({
            search_term: _v0.search_term
          }, _v0.panel_page));
        }, [_v0]),
        _v4 = (0, _v3.useCallback)(_v0 => {
          null !== _v0 && _v0.track("support_panel_source_clicked", _v21({
            title: _v0.title,
            url: _v0.url
          }, _v0.panel_page));
        }, [_v0]);
      return {
        trackSupportPanelOpened: _v1,
        trackSupportPanelSearch: _v2,
        trackSupportPanelPopularSearchClicked: _v3,
        trackSupportPanelSourceClicked: _v4,
        trackSupportPanelHelpCenterClicked: (0, _v3.useCallback)(_v0 => {
          null !== _v0 && _v0.track("support_panel_help_center_clicked", _v21({}, _v0?.panel_page));
        }, [_v0]),
        trackSupportPanelYourRequestsClicked: (0, _v3.useCallback)(_v0 => {
          null !== _v0 && _v0.track("support_panel_your_requests_clicked", _v21({}, _v0?.panel_page));
        }, [_v0])
      };
    };
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = "https://help.vimeo.com",
    _v30 = new Map([["en", "en-us"], ["de-DE", "de"], ["es", "es"], ["fr-FR", "fr"], ["ja-JP", "ja"], ["ko-KR", "ko"], ["pt-BR", "pt-br"], ["zh-CN", "zh-cn"]]),
    _v31 = _v0 => _v30.get(_v0) ?? "en-us",
    _v32 = {
      isPanelOpen: !1,
      currentPage: "home",
      history: [],
      currentHCUrl: `${_v29}/hc`,
      searchQuery: "",
      hc_base_url: _v29
    },
    _v33 = (0, _v3.createContext)(void 0),
    _v34 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v27.ViewerContext),
        _v2 = _v1?.locale ?? "en",
        [_v3, _v4] = (0, _v3.useState)(_v31(_v2)),
        {
          trackSupportPanelSearch: _v5
        } = _v22(),
        [_v6, _v7] = ((_v0, _v1, _v2) => {
          let [_v3, _v4] = (0, _v3.useState)(() => {
            try {
              let _v0 = window.localStorage.getItem(_v0);
              return _v0 ? JSON.parse(_v0) : _v1;
            } catch (_v0) {
              return console.error(_v0), _v1;
            }
          });
          return (0, _v3.useEffect)(() => {
            {
              let _v0 = _v3;
              _v2?.storageKeys && (_v0 = {}, _v2.storageKeys.forEach(_v0 => {
                _v0[_v0] = _v3[_v0];
              }));
              try {
                window.localStorage.setItem(_v0, JSON.stringify(_v0));
              } catch (_v0) {}
            }
          }, [_v0, _v3, _v2?.storageKeys]), [_v3, _v4];
        })("vimeo-help-panel", _v32, {
          storageKeys: ["currentPage", "history"]
        }),
        _v8 = (0, _v3.useRef)(0),
        {
          agenticHelp: _v9,
          isAgenticHelpLoading: _v10,
          fetchAgenticHelp: _v11,
          cancelAgenticHelp: _v12
        } = (() => {
          let {
              baseUrl: _v0,
              jwt: _v1
            } = (0, _v28.useGctlConfig)(),
            _v2 = (0, _v3.useContext)(_v27.ViewerContext),
            _v3 = _v2?.user,
            [_v4, _v5] = (0, _v3.useState)(null),
            [_v6, _v7] = (0, _v3.useState)(!1),
            _v8 = (0, _v3.useRef)(null),
            _v9 = (0, _v3.useCallback)(async _v0 => {
              if (_v8.current?.abort(), _v8.current = null, null == _v3 || null == _v0 || null == _v1 || _v0.length > 500) return _v5(null), _v7(!1), null;
              let _v1 = new AbortController();
              _v8.current = _v1;
              let _v2 = setTimeout(() => _v1.abort(), 0);
              _v7(!0), _v5(null);
              try {
                let _v0 = await fetch(`${_v0}/search/agentic/help`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `jwt ${_v1}`
                  },
                  body: JSON.stringify({
                    query: _v0
                  }),
                  signal: _v1.signal
                });
                if (!_v0.ok) throw Error(`Agentic help failed with status: ${_v0.status}`);
                let _v1 = await _v0.json();
                if (_v8.current !== _v1) return null;
                let _v2 = "object" == typeof _v1 && null !== _v1 && "capability" in _v1 && "help" === _v1.capability && "answer" in _v1 && "string" == typeof _v1.answer ? _v1 : null;
                return _v5(_v2), _v2;
              } catch {
                return _v8.current === _v1 && _v5(null), null;
              } finally {
                clearTimeout(_v2), _v8.current === _v1 && _v7(!1);
              }
            }, [_v0, _v1, _v3]),
            _v10 = (0, _v3.useCallback)(() => {
              _v8.current?.abort(), _v8.current = null, _v7(!1);
            }, []);
          return (0, _v3.useEffect)(() => () => {
            _v8.current?.abort(), _v8.current = null;
          }, []), {
            agenticHelp: _v4,
            isAgenticHelpLoading: _v6,
            fetchAgenticHelp: _v9,
            cancelAgenticHelp: _v10
          };
        })();
      (0, _v3.useEffect)(() => {
        let _v0 = _v31(_v2);
        _v3 !== _v0 && _v4(_v0);
      }, [_v2, _v3]);
      let _v13 = (_v0, _v1) => {
          _v7(_v0 => _v0.currentPage === _v0 || _v1?.replace === !0 ? {
            ..._v0,
            currentPage: _v0
          } : {
            ..._v0,
            currentPage: _v0,
            history: [..._v0.history, {
              page: _v0.currentPage,
              hcUrl: _v0.currentHCUrl
            }]
          });
        },
        _v14 = async (_v0, _v1 = !1) => {
          _v7(_v0 => ({
            ..._v0,
            searchQuery: _v0
          })), _v5({
            language: _v3,
            suggested: _v1,
            search_term: _v0,
            search_id: crypto.randomUUID(),
            panel_page: _v6.currentPage
          });
          let _v2 = ++_v8.current;
          _v13("search", {
            replace: "search" === _v6.currentPage || "search_error" === _v6.currentPage
          });
          let _v3 = await _v11(_v0);
          _v2 !== _v8.current || (null == _v3 || "" === _v3.answer.trim()) && _v13("search_error", {
            replace: !0
          });
        },
        _v15 = {
          ..._v6,
          hc_base_url: _v29,
          locale: _v3,
          agenticHelp: _v9,
          isAgenticHelpLoading: _v10,
          openPanel: () => {
            _v7(_v0 => ({
              ..._v0,
              isPanelOpen: !0,
              currentPage: "home",
              history: [],
              currentHCUrl: `${_v29}/hc/${_v3}`
            }));
          },
          closePanel: () => {
            _v8.current += 1, _v12(), _v7(_v0 => ({
              ..._v0,
              isPanelOpen: !1,
              currentPage: "home"
            }));
          },
          goBack: () => {
            _v8.current += 1, _v12(), _v7(_v0 => {
              let _v1 = [..._v0.history],
                _v2 = _v1.pop();
              return _v2 ? {
                ..._v0,
                history: _v1,
                searchQuery: "",
                currentPage: _v2.page,
                currentHCUrl: _v2.hcUrl
              } : _v0;
            });
          },
          goToPage: _v13,
          handleSearch: _v14
        };
      return (0, _v1.jsx)(_v33.Provider, {
        value: _v15,
        children: _v0
      });
    },
    _v35 = () => {
      let _v0 = (0, _v3.useContext)(_v33);
      if (void 0 === _v0) throw Error("useHelpPanel must be used within a HelpPanelProvider");
      return _v0;
    },
    _v36 = () => {
      let {
          handleSearch: _v0
        } = _v35(),
        {
          trackSupportPanelPopularSearchClicked: _v1
        } = _v22(),
        _v2 = [(0, _v19.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }), (0, _v19.translate)({
          singular: "Player customization",
          dictionary: {
            es: {
              singular: "Reproductor personalizable"
            },
            "de-DE": {
              singular: "Individuelle Anpassung des Players"
            },
            "fr-FR": {
              singular: "Personnalisation du player"
            },
            "ja-JP": {
              singular: "プレーヤー カスタマイズ"
            },
            "ko-KR": {
              singular: "커스텀 플레이어"
            },
            "pt-BR": {
              singular: "Customização do player"
            },
            "zh-CN": {
              singular: "播放器定制"
            }
          }
        }), (0, _v19.translate)({
          singular: "Restore a video",
          dictionary: {
            es: {
              singular: "Restaurar un video"
            },
            "de-DE": {
              singular: "Ein Video wiederherstellen"
            },
            "fr-FR": {
              singular: "Restaurer une vidéo"
            },
            "ja-JP": {
              singular: "動画を復元する"
            },
            "ko-KR": {
              singular: "동영상 복원"
            },
            "pt-BR": {
              singular: "Restaurar um vídeo"
            },
            "zh-CN": {
              singular: "恢复视频"
            }
          }
        }), (0, _v19.translate)({
          singular: "Privacy and sharing",
          dictionary: {
            es: {
              singular: "Privacidad y uso compartido"
            },
            "de-DE": {
              singular: "Datenschutz und Freigabe"
            },
            "fr-FR": {
              singular: "Confidentialité et partage"
            },
            "ja-JP": {
              singular: "プライバシーと共有"
            },
            "ko-KR": {
              singular: "개인정보 및 공유"
            },
            "pt-BR": {
              singular: "Privacidade e compartilhamento"
            },
            "zh-CN": {
              singular: "隐私与分享"
            }
          }
        }), (0, _v19.translate)({
          singular: "Embed a video",
          dictionary: {
            es: {
              singular: "Insertar un video"
            },
            "de-DE": {
              singular: "Ein Video einbetten"
            },
            "fr-FR": {
              singular: "Intégrer une vidéo"
            },
            "ja-JP": {
              singular: "動画を埋め込む"
            },
            "ko-KR": {
              singular: "동영상 삽입"
            },
            "pt-BR": {
              singular: "Incorporar um vídeo"
            },
            "zh-CN": {
              singular: "嵌入视频"
            }
          }
        })];
      return (0, _v1.jsxs)(_v13.Box, {
        children: [(0, _v1.jsx)(_v26.Text, {
          variant: "heading-2xs",
          color: "text-secondary",
          marginBottom: (0, _v5.rem)(9),
          children: (0, _v19.translate)({
            singular: "Popular searches",
            dictionary: {
              es: {
                singular: "Búsquedas populares"
              },
              "de-DE": {
                singular: "Beliebte Suchanfragen"
              },
              "fr-FR": {
                singular: "Recherches populaires"
              },
              "ja-JP": {
                singular: "人気の検索"
              },
              "ko-KR": {
                singular: "인기 검색어"
              },
              "pt-BR": {
                singular: "Pesquisas populares"
              },
              "zh-CN": {
                singular: "热门搜索"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.Flex, {
          flexWrap: "wrap",
          gap: (0, _v5.rem)(5),
          children: _v2.map(_v0 => (0, _v1.jsx)(_v25.Button, {
            type: "button",
            height: (0, _v5.rem)(34),
            px: (0, _v5.rem)(14),
            borderRadius: "full",
            border: "1px solid",
            borderColor: "stroke",
            bg: "surface",
            color: "text-primary",
            _hover: {
              bg: "fill-component-hover"
            },
            onClick: () => {
              _v1({
                search_term: _v0,
                panel_page: "home"
              }), _v0(_v0, !0);
            },
            children: (0, _v1.jsx)(_v26.Text, {
              as: "span",
              variant: "body-md",
              whiteSpace: "nowrap",
              children: _v0
            })
          }, _v0))
        })]
      });
    };
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = _v0 => (0, _v1.jsx)(_v41.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 8a5 5 0 0 1 5-5h1a1 1 0 0 1 0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1a1 1 0 1 1 2 0v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm12-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L17.586 5H16a1 1 0 0 1-1-1Z",
      fill: "currentColor"
    })
  });
  _v0.s(["PopOutFilled", 0, _v42], 0);
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = new Date("2026-09-04T00:00:00Z");
  function _v49() {
    let _v0 = (0, _v11.useViewer)(),
      {
        data: _v1,
        mutate: _v2
      } = (0, _v47.useGetMePreferences)(() => _v0?.user ? {
        select: ["iasp"]
      } : null),
      [_v3] = (0, _v47.usePatchMePreferences)(),
      _v4 = _v0?.user?.createdTime,
      _v5 = !_v4 || new Date(_v4) < _v48,
      _v6 = _v1?.iasp;
    return {
      showDot: _v5 && void 0 !== _v1 && !_v6,
      dismissDot: (0, _v3.useCallback)(() => {
        _v6 || (_v2({
          iasp: !0
        }, {
          revalidate: !1
        }), _v3({
          select: ["iasp"],
          variables: {
            iasp: !0
          }
        }).then(() => _v2()));
      }, [_v6, _v3, _v2])
    };
  }
  let _v50 = () => {
    let {
        currentHCUrl: _v0,
        currentPage: _v1
      } = _v35(),
      {
        showDot: _v2,
        dismissDot: _v3
      } = _v49(),
      {
        trackSupportPanelYourRequestsClicked: _v4
      } = _v22();
    return (0, _v1.jsxs)(_v13.Box, {
      position: "relative",
      display: "inline-flex",
      children: [(0, _v1.jsxs)(_v25.Button, {
        as: "a",
        href: `https://vimeo.com/help/sso?redirect_to=${_v0}/requests`,
        target: "_blank",
        rel: "noopener noreferrer",
        variant: "primary",
        size: "sm",
        onClick: () => {
          _v4({
            panel_page: _v1
          }), _v3();
        },
        display: "flex",
        "flex-direction": "horizontal",
        gap: "xs",
        children: [(0, _v19.translate)({
          singular: "Requests",
          dictionary: {
            es: {
              singular: "Solicitudes"
            },
            "de-DE": {
              singular: "Anfragen"
            },
            "fr-FR": {
              singular: "Requêtes"
            },
            "ja-JP": {
              singular: "リクエスト"
            },
            "ko-KR": {
              singular: "요청"
            },
            "pt-BR": {
              singular: "Solicitações"
            },
            "zh-CN": {
              singular: "请求"
            }
          }
        }), (0, _v1.jsx)(_v46.ChevronRightSmall, {
          mr: "-1"
        })]
      }), _v2 && (0, _v1.jsx)(_v17.NewFeatureDot, {
        position: "absolute",
        top: -1,
        right: -1
      })]
    });
  };
  var _v51 = _v0.i(0);
  let _v52 = ({
      title: _v0,
      showBackButton: _v1,
      showSearchButton: _v2,
      showContactUsMenu: _v3
    }) => {
      let {
          goBack: _v4,
          currentHCUrl: _v5,
          currentPage: _v6,
          handleSearch: _v7,
          isAgenticHelpLoading: _v8,
          closePanel: _v9,
          searchQuery: _v10
        } = _v35(),
        {
          trackSupportPanelHelpCenterClicked: _v11
        } = _v22(),
        [_v12, _v13] = (0, _v3.useState)(""),
        [_v14, _v15] = (0, _v3.useState)(_v10),
        [_v16, _v17] = (0, _v3.useState)(!1),
        _v18 = _v0.length <= 20 ? _v0 : `${_v0.substring(0, 20)}...`,
        _v19 = (0, _v3.useRef)(null);
      _v10 !== _v14 && (_v15(_v10), _v13(_v10));
      let _v20 = () => {
        _v12.trim() && _v7(_v12);
      };
      return (0, _v1.jsxs)(_v13.Box, {
        children: [(0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            flex: "1",
            children: [_v1 && (0, _v1.jsx)(_v14.IconButton, {
              icon: (0, _v1.jsx)(_v40.ChevronLeft, {}),
              "aria-label": (0, _v19.translate)({
                singular: "Back",
                dictionary: {
                  es: {
                    singular: "Atrás"
                  },
                  "de-DE": {
                    singular: "Zurück"
                  },
                  "fr-FR": {
                    singular: "Retour"
                  },
                  "ja-JP": {
                    singular: "戻る"
                  },
                  "ko-KR": {
                    singular: "뒤로"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              }),
              onClick: _v4,
              variant: "tertiary",
              size: "sm",
              mr: (0, _v5.rem)(3)
            }), (0, _v1.jsx)(_v26.Text, {
              variant: "heading-md",
              children: _v18
            }), (0, _v1.jsx)(_v15.Tooltip, {
              label: (0, _v19.translate)({
                singular: "View in Help Center",
                dictionary: {
                  es: {
                    singular: "Ver en el Centro de ayuda"
                  },
                  "de-DE": {
                    singular: "Im Hilfe-Center anzeigen"
                  },
                  "fr-FR": {
                    singular: "Voir dans le Centre d’aide"
                  },
                  "ja-JP": {
                    singular: "ヘルプセンターで表示"
                  },
                  "ko-KR": {
                    singular: "도움말 센터에서 보기"
                  },
                  "pt-BR": {
                    singular: "Ver no Centro de Ajuda"
                  },
                  "zh-CN": {
                    singular: "在帮助中心查看"
                  }
                }
              }),
              placement: "bottom",
              children: (0, _v1.jsx)(_v14.IconButton, {
                as: "a",
                href: `https://vimeo.com/help/sso?redirect_to=${_v5}`,
                target: "_blank",
                rel: "noopener noreferrer",
                icon: (0, _v1.jsx)(_v42, {}),
                "aria-label": (0, _v19.translate)({
                  singular: "Go to Help Center",
                  dictionary: {
                    es: {
                      singular: "Ir al Centro de ayuda"
                    },
                    "de-DE": {
                      singular: "Zum Hilfe-Center"
                    },
                    "fr-FR": {
                      singular: "Aller au Centre d’aide"
                    },
                    "ja-JP": {
                      singular: "ヘルプセンターに移動"
                    },
                    "ko-KR": {
                      singular: "도움말 센터로 이동"
                    },
                    "pt-BR": {
                      singular: "Ir para o Centro de Ajuda"
                    },
                    "zh-CN": {
                      singular: "前往帮助中心"
                    }
                  }
                }),
                variant: "tertiary",
                ml: 2,
                size: "sm",
                onClick: () => _v11({
                  panel_page: _v6
                })
              })
            })]
          }), _v3 && (0, _v1.jsxs)(_v4.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v13.Box, {
              w: "md"
            }), (0, _v1.jsx)(_v50, {})]
          }), (0, _v1.jsx)(_v14.IconButton, {
            icon: (0, _v1.jsx)(_v45.CloseXSmall, {}),
            "aria-label": (0, _v19.translate)({
              singular: "Close help panel",
              dictionary: {
                es: {
                  singular: "Cerrar el panel de ayuda"
                },
                "de-DE": {
                  singular: "Hilfebereich schließen"
                },
                "fr-FR": {
                  singular: "Fermer le panneau d’aide"
                },
                "ja-JP": {
                  singular: "ヘルプパネルを閉じる"
                },
                "ko-KR": {
                  singular: "도움말 패널 닫기"
                },
                "pt-BR": {
                  singular: "Fechar painel de ajuda"
                },
                "zh-CN": {
                  singular: "关闭帮助面板"
                }
              }
            }),
            variant: "tertiary",
            size: "sm",
            onClick: _v9,
            ml: 2,
            display: {
              base: "inline-flex",
              sm: "none"
            }
          })]
        }), _v2 && (0, _v1.jsx)(_v13.Box, {
          mt: 4,
          children: (0, _v1.jsxs)(_v13.Box, {
            position: "relative",
            padding: "2px",
            borderRadius: "md",
            bg: _v8 ? _v51.FLOW_GRADIENT_MUTED : "stroke",
            boxShadow: _v16 && !_v8 ? "0 0 0 3px rgba(110, 220, 245, 0.14)" : "0 2px 10px rgba(78, 205, 234, 0.13)",
            sx: _v8 ? {
              ..._v51.FLOW_GRADIENT_KEYFRAMES
            } : {
              ..._v51.FLOW_GRADIENT_KEYFRAMES,
              ..._v51.FLOW_GRADIENT_EDGE_PULSE_SX
            },
            children: [!_v8 && (0, _v1.jsx)(_v13.Box, {
              "aria-hidden": !0,
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: 0,
              sx: {
                ..._v51.FLOW_INNER_GLOW_SX
              }
            }), (0, _v1.jsxs)(_v38.InputGroup, {
              position: "relative",
              zIndex: 1,
              children: [(0, _v1.jsx)(_v37.Input, {
                placeholder: (0, _v19.translate)({
                  singular: "Search for help or ask a question",
                  dictionary: {
                    es: {
                      singular: "Buscar ayuda o hacer una pregunta"
                    },
                    "de-DE": {
                      singular: "Nach Hilfe suchen oder eine Frage stellen"
                    },
                    "fr-FR": {
                      singular: "Recherchez de l'aide ou posez une question"
                    },
                    "ja-JP": {
                      singular: "ヘルプを検索するか、質問する"
                    },
                    "ko-KR": {
                      singular: "도움말 검색 또는 질문하기"
                    },
                    "pt-BR": {
                      singular: "Pesquisar ajuda ou fazer uma pergunta"
                    },
                    "zh-CN": {
                      singular: "搜索帮助或提问"
                    }
                  }
                }),
                value: _v12,
                onChange: _v0 => _v13(_v0.target.value),
                onKeyDown: _v0 => {
                  "Enter" === _v0.key && (_v20(), _v0.preventDefault());
                },
                isDisabled: _v8,
                onFocus: () => _v17(!0),
                onBlur: () => _v17(!1),
                maxLength: 500,
                height: (0, _v5.rem)(38),
                borderRadius: "sm",
                border: "none",
                bg: "surface",
                pr: "76px",
                _focus: {
                  boxShadow: "none"
                },
                ref: _v19
              }), (0, _v1.jsxs)(_v39.InputRightElement, {
                width: "auto",
                height: "var(--vimeo-sizes-sm)",
                margin: "xs",
                gap: "xs",
                children: [_v12 && (0, _v1.jsx)(_v14.IconButton, {
                  icon: (0, _v1.jsx)(_v44.CloseXCircleFilled, {}),
                  "aria-label": (0, _v19.translate)({
                    singular: "Clear search",
                    dictionary: {
                      es: {
                        singular: "Borrar búsqueda"
                      },
                      "de-DE": {
                        singular: "Suche löschen"
                      },
                      "fr-FR": {
                        singular: "Effacer la recherche"
                      },
                      "ja-JP": {
                        singular: "検索をクリア"
                      },
                      "ko-KR": {
                        singular: "검색 지우기"
                      },
                      "pt-BR": {
                        singular: "Limpar pesquisa"
                      },
                      "zh-CN": {
                        singular: "清除搜索"
                      }
                    }
                  }),
                  variant: "tertiary",
                  size: "sm",
                  borderRadius: "md",
                  isDisabled: _v8,
                  onClick: () => {
                    _v13(""), _v19.current?.focus();
                  }
                }), (0, _v1.jsx)(_v14.IconButton, {
                  icon: (0, _v1.jsx)(_v43.SearchMagnifierAi, {}),
                  "aria-label": (0, _v19.translate)({
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
                  variant: "tertiary",
                  size: "sm",
                  borderRadius: "md",
                  isDisabled: _v8,
                  onClick: _v20
                })]
              })]
            })]
          })
        })]
      });
    },
    _v53 = _v0 => _v0.filter(_v0 => (_v0 => {
      try {
        let _v0 = new URL(_v0);
        return "https:" === _v0.protocol && "help.vimeo.com" === _v0.hostname;
      } catch {
        return !1;
      }
    })(_v0.url));
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = ({
      sources: _v0,
      panelPage: _v1,
      gap: _v2 = 2
    }) => {
      let {
        trackSupportPanelSourceClicked: _v3
      } = _v22();
      return (0, _v1.jsxs)(_v13.Box, {
        children: [(0, _v1.jsx)(_v26.Text, {
          variant: "heading-2xs",
          color: "text-secondary",
          marginBottom: (0, _v5.rem)(9),
          children: (0, _v19.translate)({
            singular: "Related articles",
            dictionary: {
              es: {
                singular: "Artículos relacionados"
              },
              "de-DE": {
                singular: "Verwandte Artikel"
              },
              "fr-FR": {
                singular: "Articles associés"
              },
              "ja-JP": {
                singular: "関連記事"
              },
              "ko-KR": {
                singular: "관련 문서"
              },
              "pt-BR": {
                singular: "Artigos relacionados"
              },
              "zh-CN": {
                singular: "相关文章"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.Flex, {
          direction: "column",
          gap: (0, _v5.rem)(_v2),
          children: _v0.slice(0, 3).map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
            as: "a",
            href: _v0.url,
            target: "_blank",
            rel: "noopener noreferrer",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "sm",
            minHeight: "48px",
            transitionProperty: "common",
            transitionDuration: "fast",
            transitionTimingFunction: "ease-out",
            _hover: {
              textDecoration: "underline"
            },
            _focusVisible: {
              boxShadow: "outline"
            },
            onClick: () => _v3({
              title: _v0.title,
              url: _v0.url,
              panel_page: _v1
            }),
            children: [(0, _v1.jsx)(_v26.Text, {
              variant: "body-md",
              children: _v0.title
            }), (0, _v1.jsx)(_v55.PopOut, {
              boxSize: 16
            })]
          }, _v0.url))
        })]
      });
    },
    _v57 = () => {
      let {
          agenticHelp: _v0,
          handleSearch: _v1,
          searchQuery: _v2
        } = _v35(),
        _v3 = (0, _v3.useMemo)(() => _v53(_v0?.sources ?? []), [_v0]),
        _v4 = _v3.length > 0;
      return (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "34px 20px 30px",
          children: [(0, _v1.jsx)(_v4.Flex, {
            alignItems: "center",
            justifyContent: "center",
            width: (0, _v5.rem)(40),
            height: (0, _v5.rem)(40),
            marginBottom: (0, _v5.rem)(13),
            children: (0, _v1.jsx)(_v54.AiSparkles, {
              boxSize: (0, _v5.rem)(22)
            })
          }), (0, _v1.jsx)(_v26.Text, {
            variant: "heading-sm",
            children: (0, _v19.translate)({
              singular: "Smart overview is unavailable",
              dictionary: {
                es: {
                  singular: "Resumen inteligente no está disponible"
                },
                "de-DE": {
                  singular: "Smart-Übersicht ist nicht verfügbar"
                },
                "fr-FR": {
                  singular: "L’aperçu intelligent est indisponible"
                },
                "ja-JP": {
                  singular: "スマート概要は利用できません"
                },
                "ko-KR": {
                  singular: "스마트 개요를 사용할 수 없습니다"
                },
                "pt-BR": {
                  singular: "Visão geral inteligente indisponível"
                },
                "zh-CN": {
                  singular: "智能概览不可用"
                }
              }
            })
          }), (0, _v1.jsx)(_v26.Text, {
            variant: "body-md",
            color: "text-secondary",
            maxWidth: "290px",
            marginTop: (0, _v5.rem)(10),
            children: _v4 ? (0, _v19.translate)({
              singular: "We couldn't create an overview right now. These Help Center articles can still help.",
              dictionary: {
                es: {
                  singular: "No pudimos crear un resumen en este momento. Estos artículos del Centro de ayuda aún pueden ayudar."
                },
                "de-DE": {
                  singular: "Wir konnten gerade keine Übersicht erstellen. Diese Help Center-Artikel können Ihnen trotzdem helfen."
                },
                "fr-FR": {
                  singular: "Nous n’avons pas pu créer un aperçu pour le moment. Ces articles du Centre d’aide peuvent néanmoins vous aider."
                },
                "ja-JP": {
                  singular: "現在、概要を作成できませんでした。これらのヘルプセンターの記事がお役に立つ場合があります。"
                },
                "ko-KR": {
                  singular: "지금은 개요를 생성할 수 없습니다. 이 도움말 센터 문서들이 여전히 도움이 될 수 있습니다."
                },
                "pt-BR": {
                  singular: "Não conseguimos criar uma visão geral neste momento. Estes artigos da Central de Ajuda ainda podem ajudar."
                },
                "zh-CN": {
                  singular: "我们暂时无法生成概览。这些帮助中心文章仍然可以提供帮助。"
                }
              }
            }) : (0, _v19.translate)({
              singular: "We couldn't create an overview right now. Please try again.",
              dictionary: {
                es: {
                  singular: "No pudimos crear un resumen en este momento. Por favor, inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Wir konnten derzeit keine Übersicht erstellen. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Nous n'avons pas pu créer un aperçu pour le moment. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "現在、概要を作成できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "지금 개요를 생성할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível criar uma visão geral agora. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "我们目前无法创建概览。请再试一次。"
                }
              }
            })
          })]
        }), "" !== _v2 && (0, _v1.jsx)(_v25.Button, {
          variant: "secondary",
          size: "sm",
          alignSelf: "center",
          onClick: () => {
            _v1(_v2);
          },
          children: (0, _v19.translate)({
            singular: "Try again",
            dictionary: {
              es: {
                singular: "Intentar de nuevo"
              },
              "de-DE": {
                singular: "Nochmal versuchen"
              },
              "fr-FR": {
                singular: "Veuillez réessayer"
              },
              "ja-JP": {
                singular: "再試行してください"
              },
              "ko-KR": {
                singular: "다시 시도하세요"
              },
              "pt-BR": {
                singular: "Tente de novo"
              },
              "zh-CN": {
                singular: "再试一次"
              }
            }
          })
        }), _v4 && (0, _v1.jsx)(_v13.Box, {
          marginTop: (0, _v5.rem)(18),
          children: (0, _v1.jsx)(_v56, {
            sources: _v3,
            panelPage: "search_error",
            gap: 12
          })
        })]
      });
    };
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = () => {
      let {
          agenticHelp: _v0,
          isAgenticHelpLoading: _v1
        } = _v35(),
        _v2 = (0, _v3.useMemo)(() => _v53(_v0?.sources ?? []), [_v0]),
        _v3 = _v1 || null == _v0;
      return (0, _v1.jsxs)(_v13.Box, {
        children: [(0, _v1.jsx)(_v59.CardShell, {
          variant: "panel",
          title: _v3 ? (0, _v19.translate)({
            singular: "Preparing your smart overview",
            dictionary: {
              es: {
                singular: "Preparando tu resumen inteligente"
              },
              "de-DE": {
                singular: "Vorbereitung Ihrer Smart-Übersicht"
              },
              "fr-FR": {
                singular: "Préparation de votre aperçu intelligent"
              },
              "ja-JP": {
                singular: "スマート概要を準備しています"
              },
              "ko-KR": {
                singular: "스마트 개요 준비 중"
              },
              "pt-BR": {
                singular: "Preparando seu resumo inteligente"
              },
              "zh-CN": {
                singular: "正在准备您的智能概览"
              }
            }
          }) : (0, _v19.translate)({
            singular: "Smart overview",
            dictionary: {
              es: {
                singular: "Resumen inteligente"
              },
              "de-DE": {
                singular: "Smart-Übersicht"
              },
              "fr-FR": {
                singular: "Aperçu intelligent"
              },
              "ja-JP": {
                singular: "スマート概要"
              },
              "ko-KR": {
                singular: "스마트 개요"
              },
              "pt-BR": {
                singular: "Resumo inteligente"
              },
              "zh-CN": {
                singular: "智能概览"
              }
            }
          }),
          isLoading: _v3,
          children: null == _v0 || _v1 ? (0, _v1.jsx)(_v58.CardLoading, {
            caption: (0, _v19.translate)({
              singular: "Finding the most useful help for your question…",
              dictionary: {
                es: {
                  singular: "Buscando la ayuda más útil para tu pregunta…"
                },
                "de-DE": {
                  singular: "Die nützlichste Hilfe für Ihre Frage wird gesucht…"
                },
                "fr-FR": {
                  singular: "Recherche de l'aide la plus utile pour votre question…"
                },
                "ja-JP": {
                  singular: "質問に最も役立つヘルプを探しています…"
                },
                "ko-KR": {
                  singular: "질문에 가장 유용한 도움을 찾는 중…"
                },
                "pt-BR": {
                  singular: "Encontrando a ajuda mais útil para sua pergunta…"
                },
                "zh-CN": {
                  singular: "为您的问题查找最有用的帮助…"
                }
              }
            })
          }) : (0, _v1.jsx)(_v60.HelpBody, {
            result: _v0,
            sourceCaption: (0, _v19.translate)({
              singular: "Based on Help Center articles",
              dictionary: {
                es: {
                  singular: "Basado en artículos del Centro de ayuda"
                },
                "de-DE": {
                  singular: "Basierend auf Artikeln des Help Centers"
                },
                "fr-FR": {
                  singular: "Basé sur des articles du Centre d'aide"
                },
                "ja-JP": {
                  singular: "ヘルプセンターの記事に基づく"
                },
                "ko-KR": {
                  singular: "도움말 센터 문서를 기반으로 함"
                },
                "pt-BR": {
                  singular: "Com base em artigos do Centro de Ajuda"
                },
                "zh-CN": {
                  singular: "根据帮助中心文章"
                }
              }
            }),
            hideContactSupport: !0
          })
        }), !_v3 && _v2.length > 0 && (0, _v1.jsx)(_v13.Box, {
          mt: "xl",
          children: (0, _v1.jsx)(_v56, {
            sources: _v2,
            panelPage: "search"
          })
        })]
      });
    },
    _v62 = _v3.useLayoutEffect,
    _v63 = (0, _v3.forwardRef)((_v0, _v1) => {
      let {
          isPanelOpen: _v2,
          currentPage: _v3,
          history: _v4
        } = _v35(),
        _v5 = (0, _v3.useMemo)(() => {
          let _v0 = _v4.length > 0 && "home" !== _v3,
            _v1 = "home" === _v3 || "search" === _v3 || "search_error" === _v3;
          return {
            title: (0, _v19.translate)({
              singular: "Help center",
              dictionary: {
                es: {
                  singular: "Centro de ayuda"
                },
                "de-DE": {
                  singular: "Hilfecenter"
                },
                "fr-FR": {
                  singular: "Centre d'aide "
                },
                "ja-JP": {
                  singular: "ヘルプセンター"
                },
                "ko-KR": {
                  singular: "도움말 센터"
                },
                "pt-BR": {
                  singular: "Central de Ajuda"
                },
                "zh-CN": {
                  singular: "帮助中心"
                }
              }
            }),
            showBackButton: _v0,
            showSearchButton: _v1,
            showContactUsMenu: _v1
          };
        }, [_v3, _v4]),
        _v6 = (0, _v3.useRef)(null),
        [_v7, _v8] = (0, _v3.useState)("auto"),
        _v9 = !0 === (0, _v24.useReducedMotion)();
      return (_v62(() => {
        if (!_v2) return void _v8("auto");
        let _v0 = _v6.current;
        if (!_v0) return;
        let _v1 = _v0.offsetHeight;
        _v8(_v0 => _v0 === _v1 ? _v0 : _v1);
      }), _v2) ? (0, _v1.jsxs)(_v13.Box, {
        ref: _v1,
        position: "absolute",
        top: "100%",
        right: "lg",
        left: {
          base: "lg",
          sm: "auto"
        },
        width: {
          base: "auto",
          sm: "440px"
        },
        maxHeight: "calc(100vh - 84px)",
        minHeight: "home" === _v3 ? "250px" : void 0,
        display: "flex",
        flexDirection: "column",
        bg: "var(--vimeo-colors-surface)",
        boxShadow: "0px 0px 24px -5px rgba(0, 0, 0, 0.16), 0px 0px 4px 0px rgba(0, 0, 0, 0.08)",
        borderRadius: "xl",
        padding: "lg",
        gap: "md",
        isolation: "isolate",
        fontFamily: "body",
        backdropFilter: "blur(12px)",
        children: [(0, _v1.jsx)(_v52, {
          ..._v5
        }), (0, _v1.jsx)(_v13.Box, {
          flex: "1",
          overflowY: "auto",
          sx: {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          },
          children: (0, _v1.jsx)(_v23.motion.div, {
            initial: !1,
            animate: {
              height: _v7
            },
            transition: {
              duration: .24 * !_v9,
              ease: [.4, 0, .2, 1]
            },
            style: {
              overflow: "hidden"
            },
            children: (0, _v1.jsx)("div", {
              ref: _v6,
              children: (_v0 => {
                switch (_v0) {
                  case "home":
                  default:
                    return (0, _v1.jsx)(_v36, {});
                  case "search":
                    return (0, _v1.jsx)(_v61, {});
                  case "search_error":
                    return (0, _v1.jsx)(_v57, {});
                }
              })(_v3)
            })
          })
        })]
      }) : null;
    });
  var _v64 = _v0.i(0);
  let _v65 = (_v0, _v1, _v2, _v3) => {
      setTimeout(() => {
        let _v0 = document.getElementById(_v0);
        _v0 && _v0.addEventListener("click", function () {
          let _v0;
          (_v0 = document.getElementById(_v1)) && (_v0.style.display = "none"), _v65(_v2, _v3, _v0, _v1);
        });
      }, 0);
    },
    _v66 = "/help/sso?redirect_to=https://help.vimeo.com/",
    _v67 = () => {
      let _v0 = (0, _v11.useViewer)(),
        {
          openPanel: _v1,
          closePanel: _v2,
          isPanelOpen: _v3
        } = _v35(),
        {
          trackHeaderHelpButtonClicked: _v4
        } = (0, _v10.useHeaderTracking)(),
        {
          trackSupportPanelOpened: _v5
        } = _v22(),
        _v6 = (0, _v3.useRef)(null),
        _v7 = (0, _v3.useRef)(null),
        _v8 = (0, _v3.useMemo)(() => _v0?.teamUser?.ownerId ?? _v0?.user?.id, [_v0?.teamUser?.ownerId, _v0?.user?.id]),
        {
          capabilities: _v9
        } = (0, _v18.useCapability)(["hasEnterprise"], _v8),
        _v10 = _v9.hasEnterprise,
        _v11 = _v0?.isSimplifiedSite,
        _v12 = !!_v0 && !_v0?.user,
        _v13 = (0, _v64.useOrionSetting)("in_product_support_panel") && !_v11 && !_v12,
        {
          showDot: _v14
        } = _v49(),
        _v15 = (0, _v3.useMemo)(() => _v12 ? {
          "data-id": "help_link",
          as: "a",
          href: _v66,
          target: "_blank"
        } : _v13 ? {
          "data-id": "help_link",
          as: "button"
        } : _v10 ? {
          "data-id": "enterprise_help_button",
          as: "button"
        } : {
          "data-id": "help_link",
          as: "a",
          href: _v66,
          target: "_blank"
        }, [_v12, _v13, _v10]),
        _v16 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0.target;
          _v7.current?.contains(_v1) || _v6.current?.contains(_v1) || _v2();
        }, [_v2]);
      return (0, _v3.useEffect)(() => (document.addEventListener("click", _v16, !0), () => {
        document.removeEventListener("click", _v16, !0);
      }), [_v16]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v15.Tooltip, {
          isDisabled: _v3,
          label: (0, _v19.translate)({
            singular: "Help",
            dictionary: {
              es: {
                singular: "Ayuda"
              },
              "de-DE": {
                singular: "Hilfe"
              },
              "fr-FR": {
                singular: "Aide "
              },
              "ja-JP": {
                singular: "ヘルプ"
              },
              "ko-KR": {
                singular: "도움말"
              },
              "pt-BR": {
                singular: "Ajuda"
              },
              "zh-CN": {
                singular: "帮助"
              }
            }
          }),
          children: (0, _v1.jsxs)(_v13.Box, {
            position: "relative",
            display: "inline-flex",
            children: [(0, _v1.jsx)(_v14.IconButton, {
              ref: _v6,
              "aria-label": "help_button",
              icon: (0, _v1.jsx)(_v16.QuestionCircle, {}),
              variant: "tertiary",
              onClick: () => {
                _v4(), _v13 ? _v3 ? _v2() : (_v1(), _v5()) : _v65("pendo-link-9e2e9ac7-1", "pendo-g-gGIq9Pjwp5KjK6P-yRQzNQ_Zy-g", "pendo-left-caret-229848f1", "pendo-g-0VqsBgo3lrYNn-v0y0Mj3DYh46k");
              },
              size: {
                base: "sm",
                sm: "md"
              },
              isActive: _v3,
              ..._v15
            }), _v13 && _v14 && (0, _v1.jsx)(_v17.NewFeatureDot, {
              position: "absolute",
              top: 1,
              right: 1
            })]
          })
        }), _v13 && (0, _v1.jsx)(_v63, {
          ref: _v7
        })]
      });
    },
    _v68 = () => (0, _v1.jsx)(_v34, {
      children: (0, _v1.jsx)(_v67, {})
    });
  _v0.s(["HelpCTA", 0, _v68], 0);
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = (0, _v19.translate)({
      singular: "Untitled showcase",
      dictionary: {
        es: {
          singular: "Presentación sin título"
        },
        "de-DE": {
          singular: "Unbetitelte Präsentation"
        },
        "fr-FR": {
          singular: "Présentation sans titre"
        },
        "ja-JP": {
          singular: "無題のショーケース"
        },
        "ko-KR": {
          singular: "제목 없는 쇼케이스"
        },
        "pt-BR": {
          singular: "Vitrine sem título"
        },
        "zh-CN": {
          singular: "无标题展示"
        }
      }
    }),
    _v90 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v91 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v92 = (0, _v2.default)(async () => {
      let {
        EventCreationWizardModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v93 = (0, _v2.default)(async () => {
      let {
        MobileContentMenu: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    });
  function _v94({
    hasUploader: _v0
  }) {
    let _v1 = (0, _v11.useViewer)();
    return !_v1 || _v1.teamUser?.plainTextPermissionLevel === "Viewer" || _v1.isSimplifiedSite ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v95, {
      viewer: _v1,
      hasUploader: _v0
    });
  }
  function _v95({
    viewer: _v0,
    hasUploader: _v1
  }) {
    let _v2 = (0, _v6.useBreakpointValue)({
        base: !0,
        sm: !1
      }),
      _v3 = (0, _v82.useEmailVerificationGateRequest)(),
      _v4 = (0, _v83.useUniversalHostingEnabled)(),
      _v5 = _v0.teamUser?.ownerId ?? _v0.user?.id,
      {
        capabilities: _v6,
        loading: _v7,
        error: _v8
      } = (0, _v18.useCapability)(["hasCreation", "canManageTeamCollections"]),
      _v9 = _v6.hasCreation && !_v7 && !_v8,
      _v10 = _v6.canManageTeamCollections && !_v7 && !_v8,
      [_v11, _v12] = (0, _v3.useState)(!1),
      [_v13, _v14] = (0, _v3.useState)(!1),
      {
        capabilities: _v15,
        loading: _v16,
        error: _v17
      } = (0, _v18.useCapability)(["canCreateLiveEvents"], _v5),
      _v18 = _v15.canCreateLiveEvents && !_v16 && !_v17,
      _v19 = window.location.pathname.match(/\/folders?\/(\d+)/),
      _v20 = _v19?.[1],
      _v21 = _v20 ? `folder_id=${_v20}` : "",
      _v22 = _v20 ? `/upload/videos?${_v21}` : "/upload/videos",
      _v23 = `/create/edit?blank=true${_v20 ? `&${_v21}` : ""}`,
      _v24 = "/library" === window.location.pathname,
      _v25 = _v0?.user?.id === _v5,
      _v26 = _v0?.teamUser?.plainTextPermissionLevel === "Admin",
      _v27 = _v0.isRecordToolSupported ? `/record/start-recording${_v20 ? `?${_v21}` : _v24 && (_v25 || _v26) ? "?folder_id=root" : ""}` : "/features/screen-recorder",
      _v28 = _v2 ? "https://vimeo.page.link/createvideo" : _v23,
      {
        isOpen: _v29,
        onOpen: _v30,
        onClose: _v31
      } = (0, _v73.useDisclosure)(),
      {
        canCreateShowcase: _v32,
        isCreatingShowcase: _v33,
        isShowcaseUpsellModalActive: _v34,
        onCreateShowcaseClick: _v35,
        setIsShowcaseUpsellModalActive: _v36
      } = (({
        canManageTeamCollections: _v0,
        viewer: _v1
      }) => {
        let _v2 = (0, _v86.useToast)(),
          [_v3, _v4] = (0, _v3.useState)(!1),
          _v5 = _v1?.teamUser?.ownerId || _v1?.user?.id,
          {
            capabilities: _v6
          } = (0, _v18.useCapability)(["canCreateAlbums"], _v5),
          _v7 = _v6?.canCreateAlbums === !1,
          _v8 = (0, _v3.useCallback)(({
            uri: _v0
          }) => {
            let _v1, _v2, _v3;
            window.location.href = (_v3 = ((_v2 = _v0.match(/albums\/\d+/g)) && (_v1 = _v2[0].split("/").pop()), _v1)) ? `/manage/showcases/${_v3}` : "/library/showcases";
          }, []),
          [_v9, {
            loading: _v10
          }] = (({
            onFailure: _v0,
            onSuccess: _v1,
            teamOwnerId: _v2
          }) => {
            let [_v3, {
              called: _v4,
              data: _v5,
              error: _v6,
              loading: _v7
            }] = (0, _v88.usePostUserAlbums)();
            return (0, _v3.useEffect)(() => {
              _v4 && !_v7 && (_v5 && _v1?.({
                uri: _v5.uri
              }), _v6 && _v0?.());
            }, [_v4, _v5, _v6, _v7, _v0, _v1]), [() => {
              _v2 && _v3({
                where: {
                  userId: _v2
                },
                select: ["uri"],
                variables: {
                  name: _v89
                }
              });
            }, {
              loading: _v7
            }];
          })({
            onFailure: (0, _v3.useCallback)(() => {
              _v2({
                title: (0, _v19.translate)({
                  singular: "Sorry, something weird happened. Please try again.",
                  dictionary: {
                    es: {
                      singular: "Lo sentimos, algo salió mal. Inténtalo de nuevo."
                    },
                    "de-DE": {
                      singular: "Hier ist leider etwas schief gegangen. Bitte erneut versuchen."
                    },
                    "fr-FR": {
                      singular: "Désolé, quelque chose de bizarre s'est produit. Veuillez essayer à nouveau."
                    },
                    "ja-JP": {
                      singular: "申し訳ありません、問題が発生しました。再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "죄송합니다, 알 수 없는 오류가 발생했습니다. 다시 시도해주세요."
                    },
                    "pt-BR": {
                      singular: "Desculpe, algo estranho aconteceu. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "对不起，出现异常问题。请重试。"
                    }
                  }
                }),
                variant: "warning",
                icon: (0, _v1.jsx)(_v87.CircleExclamationFilled, {
                  color: "status-destructive-primary"
                }),
                isClosable: !1
              });
            }, []),
            onSuccess: _v8,
            teamOwnerId: _v5
          }),
          _v11 = (0, _v3.useMemo)(() => _v7 ? () => _v4(!0) : _v9, [_v7, _v4, _v9]);
        return {
          canCreateShowcase: !!_v0,
          isCreatingShowcase: _v10,
          isShowcaseUpsellModalActive: _v3,
          onCreateShowcaseClick: (0, _v3.useCallback)(() => {
            _v11();
          }, [_v11]),
          setIsShowcaseUpsellModalActive: _v4
        };
      })({
        canManageTeamCollections: _v10,
        viewer: _v0
      }),
      {
        trackHeaderCreateButtonClicked: _v37,
        trackHeaderCreateMenuItemClicked: _v38
      } = (0, _v10.useHeaderTracking)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v74.NestedMenu, {
        positioning: {
          placement: "bottom-end"
        },
        children: [(0, _v1.jsx)(_v74.NestedMenuTrigger, {
          onClick: _v0 => {
            _v2 && (_v0.preventDefault(), _v30()), _v37();
          },
          as: _v25.Button,
          variant: "primary",
          size: {
            base: "sm",
            sm: "md"
          },
          "data-id": "new_content_menu_button",
          leftIcon: (0, _v1.jsx)(_v81.PlusSmall, {}),
          children: (0, _v19.translate)({
            singular: "Create",
            dictionary: {
              es: {
                singular: "Crear"
              },
              "de-DE": {
                singular: "Erstellen"
              },
              "fr-FR": {
                singular: "Créer"
              },
              "ja-JP": {
                singular: "作成"
              },
              "ko-KR": {
                singular: "만들기"
              },
              "pt-BR": {
                singular: "Criar"
              },
              "zh-CN": {
                singular: "创建"
              }
            }
          })
        }), (0, _v1.jsx)(_v74.NestedMenuPositioner, {
          children: (0, _v1.jsxs)(_v74.NestedMenuContent, {
            minWidth: (0, _v5.rem)(202),
            children: [(0, _v1.jsx)(_v74.NestedMenuItem, {
              id: "upload",
              value: "upload",
              as: _v72.default,
              href: _v22,
              prefetch: !1,
              onClick: () => {
                _v38({
                  createMenuItem: "upload"
                });
              },
              children: _v4 ? (0, _v1.jsxs)(_v4.Flex, {
                alignItems: "flex-start",
                gap: "sm",
                children: [(0, _v1.jsx)(_v76.Upload, {}), (0, _v1.jsxs)(_v4.Flex, {
                  flexDirection: "column",
                  gap: "2xs",
                  children: [(0, _v1.jsxs)(_v4.Flex, {
                    alignItems: "center",
                    gap: "xs",
                    children: [(0, _v1.jsx)(_v13.Box, {
                      as: "span",
                      children: (0, _v19.translate)({
                        singular: "Upload files",
                        dictionary: {
                          es: {
                            singular: "Subir archivos"
                          },
                          "de-DE": {
                            singular: "Dateien hochladen"
                          },
                          "fr-FR": {
                            singular: "Téléverser des fichiers"
                          },
                          "ja-JP": {
                            singular: "ファイルをアップロード"
                          },
                          "ko-KR": {
                            singular: "파일 업로드"
                          },
                          "pt-BR": {
                            singular: "Enviar arquivos"
                          },
                          "zh-CN": {
                            singular: "上传文件"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v85.NewBadge, {})]
                  }), (0, _v1.jsx)(_v26.Text, {
                    variant: "body-xs",
                    color: "text-secondary",
                    children: (0, _v19.translate)({
                      singular: "Videos, images, docs, etc",
                      dictionary: {
                        es: {
                          singular: "Vídeos, imágenes, documentos, etc"
                        },
                        "de-DE": {
                          singular: "Videos, Bilder, Dokumente usw."
                        },
                        "fr-FR": {
                          singular: "Vidéos, images, documents, etc"
                        },
                        "ja-JP": {
                          singular: "動画、画像、ドキュメントなど"
                        },
                        "ko-KR": {
                          singular: "동영상, 이미지, 문서 등"
                        },
                        "pt-BR": {
                          singular: "Vídeos, imagens, documentos, etc"
                        },
                        "zh-CN": {
                          singular: "视频、图片、文档等"
                        }
                      }
                    })
                  })]
                })]
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v76.Upload, {}), " ", (0, _v19.translate)({
                  singular: "Upload",
                  dictionary: {
                    es: {
                      singular: "Subir"
                    },
                    "de-DE": {
                      singular: "Hochladen"
                    },
                    "fr-FR": {
                      singular: "Importer"
                    },
                    "ja-JP": {
                      singular: "アップロード"
                    },
                    "ko-KR": {
                      singular: "업로드"
                    },
                    "pt-BR": {
                      singular: "Carregar"
                    },
                    "zh-CN": {
                      singular: "上传"
                    }
                  }
                })]
              })
            }), _v1 ? (0, _v1.jsxs)(_v74.NestedMenuItem, {
              id: "import",
              value: "import",
              onClick: () => {
                _v3("import") && (_v14(!0), _v38({
                  createMenuItem: "import"
                }));
              },
              children: [(0, _v1.jsx)(_v80.DownloadImport, {}), " ", (0, _v19.translate)({
                singular: "Import",
                dictionary: {
                  es: {
                    singular: "IMPORTAR"
                  },
                  "de-DE": {
                    singular: "Importieren"
                  },
                  "fr-FR": {
                    singular: "Importer"
                  },
                  "ja-JP": {
                    singular: "インポート"
                  },
                  "ko-KR": {
                    singular: "가져오기"
                  },
                  "pt-BR": {
                    singular: "Importar"
                  },
                  "zh-CN": {
                    singular: "导入"
                  }
                }
              })]
            }) : null, (0, _v1.jsx)(_v74.NestedMenuDivider, {}), _v9 && (0, _v1.jsxs)(_v74.NestedMenuItem, {
              id: "create",
              value: "create",
              as: _v72.default,
              href: _v28,
              prefetch: !1,
              onClick: () => {
                _v38({
                  createMenuItem: "video_project"
                });
              },
              children: [(0, _v1.jsx)(_v79.ClapperBoard, {}), " ", (0, _v19.translate)({
                singular: "Video project",
                dictionary: {
                  es: {
                    singular: "Proyecto de video"
                  },
                  "de-DE": {
                    singular: "Videoprojekt"
                  },
                  "fr-FR": {
                    singular: "Projet vidéo"
                  },
                  "ja-JP": {
                    singular: "動画プロジェクト"
                  },
                  "ko-KR": {
                    singular: "동영상 프로젝트"
                  },
                  "pt-BR": {
                    singular: "Projeto de vídeo"
                  },
                  "zh-CN": {
                    singular: "视频项目"
                  }
                }
              })]
            }), (0, _v1.jsxs)(_v74.NestedMenuItem, {
              id: "record",
              value: "record",
              as: _v72.default,
              href: _v27,
              prefetch: !1,
              onClick: () => {
                _v38({
                  createMenuItem: "recording"
                });
              },
              children: [(0, _v1.jsx)(_v77.Record, {}), " ", (0, _v19.translate)({
                singular: "Recording",
                dictionary: {
                  es: {
                    singular: "Grabación"
                  },
                  "de-DE": {
                    singular: "Aufnehmen"
                  },
                  "fr-FR": {
                    singular: "Enregistrement"
                  },
                  "ja-JP": {
                    singular: "録画"
                  },
                  "ko-KR": {
                    singular: "녹화"
                  },
                  "pt-BR": {
                    singular: "Gravação"
                  },
                  "zh-CN": {
                    singular: "录像"
                  }
                }
              })]
            }), _v18 && (0, _v1.jsxs)(_v74.NestedMenuItem, {
              id: "host",
              value: "host",
              onClick: () => {
                _v38({
                  createMenuItem: "event"
                }), _v12(!0);
              },
              children: [(0, _v1.jsx)(_v78.CameraOn, {}), " ", (0, _v19.translate)({
                singular: "Event",
                dictionary: {
                  es: {
                    singular: "Evento"
                  },
                  "fr-FR": {
                    singular: "Événement"
                  },
                  "ja-JP": {
                    singular: "イベント"
                  },
                  "ko-KR": {
                    singular: "이벤트"
                  },
                  "pt-BR": {
                    singular: "Evento"
                  },
                  "zh-CN": {
                    singular: "活动"
                  }
                }
              })]
            }), _v32 && (0, _v1.jsxs)(_v74.NestedMenuItem, {
              id: "showcase",
              value: "showcase",
              disabled: _v33,
              onClick: () => {
                _v38({
                  createMenuItem: "showcase"
                }), _v35();
              },
              children: [(0, _v1.jsx)(_v75._3GridLeftLayout, {}), " ", (0, _v19.translate)({
                singular: "Showcase",
                dictionary: {
                  es: {
                    singular: "Presentaciones"
                  },
                  "de-DE": {
                    singular: "Präsentation"
                  },
                  "fr-FR": {
                    singular: "Présentation"
                  },
                  "ja-JP": {
                    singular: "作品集"
                  },
                  "ko-KR": {
                    singular: "쇼케이스"
                  },
                  "pt-BR": {
                    singular: "Vitrine"
                  },
                  "zh-CN": {
                    singular: "橱窗"
                  }
                }
              })]
            })]
          })
        }), (0, _v1.jsx)(_v92, {
          active: _v11,
          activeSet: _v12
        })]
      }), (0, _v1.jsx)(_v93, {
        isOpen: _v29,
        onClose: _v31,
        canCreateLiveEvents: !0,
        uploadLink: _v22,
        recordLink: _v27,
        createShowcaseProps: {
          canCreateShowcase: _v32,
          isCreatingShowcase: _v33,
          onCreateShowcaseClick: _v35
        },
        ...(_v9 && {
          creationLink: _v28
        })
      }), _v34 && (0, _v1.jsx)(_v90, {
        apiUrl: _v0?.apiUrl,
        onClose: () => _v36(!1),
        templateType: "default",
        tracking: {
          params: {
            feature: "showcases",
            location: "top_navigation_bar",
            page: (0, _v84.getPageNameFromPath)(window.location.pathname, _v0?.user) || "ss_lihp",
            upsell_name: "showcase_limit"
          },
          paywallTracking: {
            paywallTrigger: "top_navigation_new_menu_showcase_limit_button",
            paywallLocation: "top_navigation",
            paywallType: "popup",
            paywallFeature: "showcases"
          }
        },
        userConfig: {
          jwt: _v0?.jwt,
          userId: _v0?.user?.id
        },
        modalConfig: {
          mkcCode: "unified-top-nav-legacy"
        }
      }), _v13 ? (0, _v1.jsx)(_v91, {
        isOpen: _v13,
        setIsOpen: _v14,
        referrerPage: "create_menu",
        isAutomatic: !1
      }) : null]
    });
  }
  var _v96 = _v0.i(0);
  let _v97 = () => {
    let _v0 = (0, _v96.buildUpgradePlanUrl)({
      paywallTrigger: "top_nav_bar_pricing_button",
      paywallLocation: "top_navigation",
      paywallFeature: "general"
    });
    return (0, _v1.jsx)(_v25.Button, {
      variant: "tertiary",
      as: "a",
      href: _v0,
      size: {
        base: "sm",
        sm: "md"
      },
      children: (0, _v19.translate)({
        singular: "Pricing",
        dictionary: {
          es: {
            singular: "Precio"
          },
          "de-DE": {
            singular: "Preise"
          },
          "fr-FR": {
            singular: "Tarifs"
          },
          "ja-JP": {
            singular: "料金"
          },
          "ko-KR": {
            singular: "가격 책정"
          },
          "pt-BR": {
            singular: "Preços"
          },
          "zh-CN": {
            singular: "定价"
          }
        }
      })
    });
  };
  _v0.s(["PricingCTA", 0, _v97], 0);
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0);
  let _v100 = ({
    isSideNavActive: _v0,
    setIsSideNavActive: _v1
  }) => (0, _v1.jsx)(_v14.IconButton, {
    "aria-label": "open-sidenav",
    icon: (0, _v1.jsx)(_v99.Menu, {}),
    variant: "tertiary",
    display: _v0 ? "none" : "flex",
    onClick: () => {
      _v1();
    },
    size: {
      base: "xs",
      sm: "sm",
      md: "md"
    },
    "data-testid": "open-sidenav"
  });
  _v0.s(["SideNavToggle", 0, _v100], 0);
  let _v101 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).LoginJoinModal
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v102 = (0, _v5.rem)(24);
  _v0.s(["DefaultNavigation", 0, ({
    fixed: _v0 = !0,
    hasSearch: _v1 = !0,
    hasThemeSupport: _v2 = !0,
    isSideNavActive: _v3,
    setIsSideNavActive: _v4,
    hasUploader: _v5 = !1,
    alwaysMinimiseSearch: _v6 = !1,
    hasSideNavLayout: _v7 = !1,
    searchContentAlignment: _v8
  }) => {
    let _v9 = (0, _v3.useContext)(_v27.ViewerContext),
      _v10 = _v9?.user,
      [_v11, _v12] = (0, _v3.useState)(!1),
      _v13 = (0, _v6.useBreakpointValue)({
        base: !1,
        lg: !0
      }),
      _v14 = (0, _v6.useBreakpointValue)({
        base: !0,
        md: !1
      }),
      _v15 = (0, _v6.useBreakpointValue)({
        base: !0,
        sm: !1
      }),
      _v16 = _v11 && _v14,
      _v17 = _v13;
    _v6 && (_v17 = !1);
    let _v18 = !_v17 && _v11 || _v15,
      _v19 = (0, _v71.useLoginJoinModalState)(),
      _v20 = _v9?.isSimplifiedSite,
      _v21 = _v9?.isEnterpriseSite,
      _v22 = _v7 && !_v3,
      _v23 = _v7 && _v8 ? `calc(max(0px, calc((100cqw - var(--search-content-max-width)) / 2)) + var(--search-content-inline-start) - ${_v102})` : _v22 ? (0, _v5.rem)(24) : void 0;
    return (0, _v1.jsxs)(_v7.Navigation, {
      position: _v0 ? "sticky" : "unset",
      top: "0",
      gap: {
        base: "sm",
        md: "md",
        lg: "5"
      },
      px: {
        base: "3",
        md: "lg"
      },
      zIndex: "1001",
      sx: _v8 ? {
        "--search-content-max-width": _v8.contentMaxWidth,
        "--search-content-inline-start": _v8.contentInlineStart
      } : void 0,
      children: [(0, _v1.jsxs)(_v7.Navigation.LeftContent, {
        width: _v17 ? "100%" : "unset",
        gap: {
          base: "sm",
          md: "md"
        },
        flexShrink: _v17 ? void 0 : 0,
        zIndex: 1,
        children: [_v4 && (0, _v1.jsx)(_v100, {
          isSideNavActive: !!_v3,
          setIsSideNavActive: _v4
        }), (0, _v1.jsx)(_v7.Navigation.VimeoLogo, {
          display: _v3 || _v7 ? "none" : "flex",
          marginLeft: _v7 ? (0, _v5.rem)(-24) : void 0
        }), _v1 && _v17 && (0, _v1.jsx)(_v4.Flex, {
          flexGrow: 1,
          minWidth: 0,
          marginLeft: _v23,
          children: (0, _v1.jsx)(_v98.Search, {})
        })]
      }), (0, _v1.jsx)(_v7.Navigation.RightContent, {
        justifyContent: "end",
        width: _v17 ? "unset" : "100%",
        gap: {
          base: "sm",
          md: "md"
        },
        children: (0, _v1.jsx)(_v70.LoginJoinModalContext.Provider, {
          value: _v19,
          children: (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            gap: {
              base: "xs",
              md: (0, _v5.rem)(12)
            },
            flexGrow: "1",
            justifyContent: "end",
            children: [!_v18 && (0, _v1.jsx)(_v7.Navigation.Upgrade, {
              viewer: _v9
            }), _v1 && !_v17 && (0, _v1.jsx)(_v98.Search, {
              withToggle: !0,
              updateGlobalNavSearchState: _v12
            }), !_v16 && !_v20 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v68, {}), (0, _v1.jsx)(_v12, {})]
            }), _v9 && !_v10 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [!_v18 && !_v21 && (0, _v1.jsx)(_v97, {}), !(_v15 && _v11) && (0, _v1.jsx)(_v69.Login, {})]
            }), !_v16 && (_v10 ? (0, _v1.jsx)(_v94, {
              hasUploader: _v5
            }) : _v9 && !_v21 && (0, _v1.jsx)(_v69.Join, {})), !(_v15 && _v11) && (0, _v1.jsx)(_v8.AccountMenu, {
              hasThemeSupport: _v2
            }), _v9 && !_v10 && _v19.modal && (0, _v1.jsx)(_v101, {})]
          })
        })
      })]
    });
  }], 0);
}