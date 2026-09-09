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
    _v12 = _v0.i(0);
  let _v13 = () => {
    let _v0 = (0, _v11.useViewer)(),
      {
        trackHeaderNotificationBellClicked: _v1
      } = (0, _v10.useHeaderTracking)();
    return _v0 && _v0.user && _v0.xsrft ? (0, _v1.jsx)(_v9.ActivityDropdown, {
      user: _v0.user,
      onClick: () => {
        (0, _v12.trackNavigationActionEvent)({
          copy: "activity",
          element: "dropdown_header",
          feature: "activity",
          viewer: _v0
        }), _v1();
      }
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = () => {
    let _v0 = (0, _v21.usePico)(),
      _v1 = (0, _v3.useCallback)(() => {
        null !== _v0 && _v0.track("support_panel_opened", {});
      }, [_v0]),
      _v2 = (0, _v3.useCallback)(_v0 => {
        null !== _v0 && _v0.track("support_panel_search", {
          language: _v0.language,
          suggested: _v0.suggested,
          search_term: _v0.search_term
        });
      }, [_v0]);
    return {
      trackSupportPanelOpened: _v1,
      trackSupportPanelSearch: _v2,
      trackSupportPanelHelpCenterClicked: (0, _v3.useCallback)(() => {
        null !== _v0 && _v0.track("support_panel_help_center_clicked", {});
      }, [_v0]),
      trackSupportPanelYourRequestsClicked: (0, _v3.useCallback)(() => {
        null !== _v0 && _v0.track("support_panel_your_requests_clicked", {});
      }, [_v0])
    };
  };
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = async (_v0, _v1) => {
      let {
        signal: _v2,
        params: _v3
      } = _v1;
      if (_v3) {
        let _v0 = new URLSearchParams(Object.entries(_v3).map(([_v0, _v1]) => [_v0, String(_v1)]));
        _v0 += `?${_v0}`;
      }
      try {
        let _v0 = await fetch(_v0, {
          signal: _v2
        });
        if (!_v0.ok) throw Error(`API call failed with status: ${_v0.status}`);
        return await _v0.json();
      } catch (_v0) {
        if ("AbortError" === _v0.name) throw _v0;
        throw console.error(`Error fetching from endpoint "${_v0}":`, _v0), Error(`Failed to fetch data for endpoint "${_v0}"`);
      }
    },
    _v28 = async (_v0, _v1) => {
      let _v2 = [],
        _v3 = null,
        _v4 = await _v27(_v0, _v1);
      for (_v2 = [..._v2, ...(_v4.results || _v4.articles || [])], _v3 = _v4.next_page; _v3;) try {
        let _v0 = await fetch(_v3, {
          signal: _v1.signal
        });
        if (!_v0.ok) throw Error(`API call failed with status: ${_v0.status}`);
        let _v1 = await _v0.json();
        _v2 = [..._v2, ...(_v1.results || _v1.articles || [])], _v3 = _v1.next_page;
      } catch (_v0) {
        if ("AbortError" === _v0.name) throw _v0;
        throw console.error(`Error fetching paginated data from "${_v3}":`, _v0), Error("Failed to fetch paginated data");
      }
      return _v2;
    },
    _v29 = _v0 => ({
      id: String(_v0.id),
      title: _v0.title,
      url: _v0.html_url,
      content: _v0.body || ""
    }),
    _v30 = _v0 => ({
      id: String(_v0.id),
      title: _v0.name,
      url: _v0.html_url,
      parentSectionId: _v0.parent_section_id ? String(_v0.parent_section_id) : void 0
    }),
    _v31 = async (_v0, _v1, _v2, _v3) => _v29((await _v27(`${_v0}/api/v2/help_center/${_v1}/articles/${_v2}.json`, {
      locale: _v1,
      signal: _v3
    })).article),
    _v32 = async (_v0, _v1, _v2, _v3) => {
      let _v4 = await _v27(`${_v0}/api/v2/help_center/${_v1}/sections/${_v2}/articles.json`, {
        locale: _v1,
        signal: _v3
      });
      return _v4.articles?.map(_v29);
    },
    _v33 = async (_v0, _v1, _v2, _v3) => (await _v27(`${_v0}/api/v2/help_center/${_v1}/categories/${_v2}/sections.json`, {
      locale: _v1,
      signal: _v3
    })).sections.map(_v30),
    _v34 = async (_v0, _v1, _v2, _v3) => (await _v28(`${_v0}/api/v2/help_center/articles/search.json`, {
      signal: _v3,
      params: {
        query: _v2,
        per_page: 100,
        locale: _v1
      }
    })).map(_v29);
  var _v35 = _v0.i(0);
  let _v36 = "https://help.vimeo.com",
    _v37 = new Map([["en", "en-us"], ["de-DE", "de"], ["es", "es"], ["fr-FR", "fr"], ["ja-JP", "ja"], ["ko-KR", "ko"], ["pt-BR", "pt-br"], ["zh-CN", "zh-cn"]]),
    _v38 = _v0 => _v37.get(_v0) ?? "en-us",
    _v39 = {
      isPanelOpen: !1,
      currentPage: "home",
      history: [],
      currentHCUrl: `${_v36}/hc`,
      hasEnterprise: !1,
      searchQuery: "",
      hc_base_url: _v36,
      data: {}
    },
    _v40 = (0, _v3.createContext)(void 0),
    _v41 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v35.ViewerContext),
        _v2 = _v1?.locale ?? "en",
        [_v3, _v4] = (0, _v3.useState)(_v38(_v2)),
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
        })("vimeo-help-panel", _v39, {
          storageKeys: ["currentPage", "history"]
        }),
        [_v8, _v9] = (0, _v3.useState)(!1),
        [_v10, _v11] = (0, _v3.useState)(!1),
        _v12 = (0, _v3.useRef)(0);
      (0, _v3.useEffect)(() => {
        let _v0 = _v38(_v2);
        _v3 !== _v0 && _v4(_v0);
      }, [_v2, _v3]);
      let _v13 = (_v0, _v1, _v2) => {
          _v7(_v0 => _v0.currentPage === _v0 ? {
            ..._v0,
            data: {
              ..._v0.data,
              [_v0]: _v1
            },
            currentHCUrl: _v2 || _v0.currentHCUrl
          } : {
            ..._v0,
            currentPage: _v0,
            history: [..._v0.history, {
              page: _v0.currentPage,
              hcUrl: _v0.currentHCUrl
            }],
            data: {
              ..._v0.data,
              [_v0]: _v1
            },
            currentHCUrl: _v2 || _v0.currentHCUrl
          });
        },
        _v14 = async (_v0, _v1 = !1) => {
          _v7(_v0 => ({
            ..._v0,
            searchQuery: _v0
          })), _v5({
            language: _v3,
            suggested: _v1,
            search_term: _v0
          });
          let _v2 = ++_v12.current;
          _v13("search", []), _v9(!0), _v11(!1);
          try {
            let _v0 = await _v34(_v36, _v3, _v0);
            if (_v2 !== _v12.current) return;
            _v13("search", _v0);
          } catch (_v0) {
            console.error(_v0), _v2 === _v12.current && _v11(!0);
          } finally {
            _v2 === _v12.current && _v9(!1);
          }
        },
        _v15 = {
          ..._v6,
          hc_base_url: _v36,
          locale: _v3,
          isSearching: _v8,
          isSearchError: _v10,
          openPanel: _v0 => {
            _v7(_v0 => ({
              ..._v0,
              isPanelOpen: !0,
              hasEnterprise: _v0 || !1,
              currentPage: "home",
              history: [],
              currentHCUrl: `${_v36}/hc/${_v3}`,
              data: {}
            }));
          },
          closePanel: () => {
            _v7(_v0 => ({
              ..._v0,
              isPanelOpen: !1
            }));
          },
          goBack: () => {
            _v7(_v0 => {
              let _v1 = [..._v0.history],
                _v2 = _v1.pop();
              return _v2 ? {
                ..._v0,
                history: _v1,
                currentPage: _v2.page,
                currentHCUrl: _v2.hcUrl
              } : _v0;
            });
          },
          goToPage: _v13,
          goToSection: _v0 => {
            _v13("section", _v0, _v0.url);
          },
          goToArticleList: _v0 => {
            _v13("article_list", _v0, _v0.url);
          },
          goToArticle: _v0 => {
            _v13("article", _v0, _v0.url);
          },
          handleSearch: _v14
        };
      return (0, _v1.jsx)(_v40.Provider, {
        value: _v15,
        children: _v0
      });
    },
    _v42 = () => {
      let _v0 = (0, _v3.useContext)(_v40);
      if (void 0 === _v0) throw Error("useHelpPanel must be used within a HelpPanelProvider");
      return _v0;
    },
    _v43 = _v0 => {
      let [_v1, _v2] = (0, _v3.useState)(null),
        [_v3, _v4] = (0, _v3.useState)(!1),
        [_v5, _v6] = (0, _v3.useState)(null),
        {
          locale: _v7,
          hc_base_url: _v8
        } = _v42();
      return {
        data: _v1,
        loading: _v3,
        error: _v5,
        execute: (0, _v3.useCallback)(async (..._v0) => {
          _v4(!0), _v6(null);
          try {
            let _v0 = await _v0(_v8, _v7, ..._v0);
            return _v2(_v0), _v0;
          } catch (_v0) {
            if ("AbortError" === _v0.name) return null;
            return _v6(_v0), null;
          } finally {
            _v4(!1);
          }
        }, [_v0, _v7, _v8])
      };
    },
    _v44 = () => {
      let {
          goToArticle: _v0,
          data: _v1
        } = _v42(),
        _v2 = _v1.article_list || {
          id: "",
          url: "",
          title: "",
          parentSectionId: ""
        },
        {
          loading: _v3,
          error: _v4,
          execute: _v5
        } = _v43(_v32),
        [_v6, _v7] = (0, _v3.useState)(null);
      return ((0, _v3.useEffect)(() => {
        if (_v2.id) {
          let _v0 = new AbortController();
          return _v5(_v2.id, _v0.signal).then(_v0 => {
            _v0 && _v7(_v0);
          }), () => _v0.abort();
        }
      }, [_v2.id, _v5]), _v3 || null === _v6) ? (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        children: (0, _v1.jsx)(_v24.Spinner, {
          size: "lg"
        })
      }) : _v4 ? (0, _v1.jsx)(_v14.Box, {
        p: 4,
        color: "status-destructive-primary",
        children: (0, _v20.translate)({
          singular: "Failed to load section content. Please try again.",
          dictionary: {
            es: {
              singular: "No se pudo cargar el contenido de la sección. Por favor, inténtelo de nuevo."
            },
            "de-DE": {
              singular: "Der Abschnittsinhalt konnte nicht geladen werden. Bitte versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "Échec du chargement du contenu de la section. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "セクションの内容の読み込みに失敗しました。もう一度お試しください。"
            },
            "ko-KR": {
              singular: "섹션 내용을 불러오지 못했습니다. 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Falha ao carregar o conteúdo da seção. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "无法加载章节内容。请重试。"
            }
          }
        })
      }) : 0 === _v6.length ? (0, _v1.jsx)(_v14.Box, {
        p: 4,
        children: (0, _v20.translate)({
          singular: "No articles found.",
          dictionary: {
            es: {
              singular: "No se encontraron artículos."
            },
            "de-DE": {
              singular: "Keine Artikel gefunden."
            },
            "fr-FR": {
              singular: "Aucun article trouvé."
            },
            "ja-JP": {
              singular: "記事が見つかりませんでした。"
            },
            "ko-KR": {
              singular: "문서를 찾을 수 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum artigo encontrado."
            },
            "zh-CN": {
              singular: "未找到文章。"
            }
          }
        })
      }) : (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        gap: "sm",
        children: _v6.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
          as: _v25.Button,
          variant: "tertiary",
          borderRadius: "md",
          p: "sm",
          height: "100%",
          alignItems: "flex-start",
          onClick: () => {
            _v0(_v0);
          },
          children: [(0, _v1.jsx)(_v23.Text, {
            flex: "1",
            variant: "body-md",
            textAlign: "left",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: "0",
            children: _v0.title
          }), (0, _v1.jsx)(_v26.ChevronRightSmall, {})]
        }, _v0.id))
      });
    };
  var _v45 = _v0.i(0);
  let _v46 = () => {
      let {
          data: _v0
        } = _v42(),
        _v1 = _v0.article || {
          id: "",
          title: "",
          url: "",
          content: ""
        },
        {
          loading: _v2,
          error: _v3,
          execute: _v4
        } = _v43(_v31),
        [_v5, _v6] = (0, _v3.useState)(_v1),
        {
          colorMode: _v7
        } = (0, _v45.useColorMode)();
      if ((0, _v3.useEffect)(() => {
        if (_v1.id) {
          let _v0 = new AbortController();
          return _v4(_v1.id, _v0.signal).then(_v0 => {
            _v0 && _v6(_v0);
          }), () => _v0.abort();
        }
      }, [_v1.id, _v4]), _v2) return (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        children: (0, _v1.jsx)(_v24.Spinner, {
          size: "lg"
        })
      });
      if (_v3) return (0, _v1.jsx)(_v14.Box, {
        p: 4,
        color: "status-destructive-primary",
        children: (0, _v1.jsx)(_v23.Text, {
          children: (0, _v20.translate)({
            singular: "Failed to load article content. Please try again.",
            dictionary: {
              es: {
                singular: "No se pudo cargar el contenido del artículo. Por favor, inténtelo de nuevo."
              },
              "de-DE": {
                singular: "Der Artikelinhalt konnte nicht geladen werden. Bitte versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Échec du chargement du contenu de l’article. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "記事の内容の読み込みに失敗しました。もう一度お試しください。"
              },
              "ko-KR": {
                singular: "문서 내용을 불러오지 못했습니다. 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Falha ao carregar o conteúdo do artigo. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "无法加载文章内容。请重试。"
              }
            }
          })
        })
      });
      let _v8 = "dark" === _v7;
      return (0, _v1.jsx)(_v14.Box, {
        sx: {
          p: {
            fontSize: "var(--vimeo-fontSizes-heading-xs)",
            lineHeight: 1.5,
            marginBottom: "md",
            color: _v8 ? "var(--vimeo-colors-gray-100)" : void 0
          },
          span: {
            color: _v8 ? "var(--vimeo-colors-gray-100) !important" : void 0
          },
          "h1, h2, h3, h4, h5, h6": {
            marginTop: "xl",
            marginBottom: "md",
            fontWeight: "bold",
            color: _v8 ? "var(--vimeo-colors-gray-100)" : void 0
          },
          h1: {
            fontSize: "24px"
          },
          h2: {
            fontSize: "md"
          },
          "ul, ol": {
            marginLeft: "lg",
            marginBottom: "md",
            color: _v8 ? "var(--vimeo-colors-gray-100)" : void 0
          },
          a: {
            color: _v8 ? "var(--vimeo-colors-blue-300)" : "var(--vimeo-colors-vimeoBlue-600)",
            textDecoration: "none",
            fontSize: "var(--vimeo-fontSizes-heading-xs)",
            "&:hover": {
              textDecoration: "underline"
            }
          },
          img: {
            maxWidth: "100%",
            height: "auto"
          },
          table: {
            maxWidth: "100%",
            height: "auto"
          },
          iframe: {
            maxWidth: "100%"
          }
        },
        children: (0, _v1.jsx)("div", {
          "data-testid": "article-content",
          dangerouslySetInnerHTML: {
            __html: _v5.content
          }
        })
      });
    },
    _v47 = {
      "en-us": ["Renew my subscription", "Embed a video", "Add team members", "Video optimization", "Share a file in Library"],
      de: ["Mein Abonnement verlängern", "Ein Video einbetten", "Teammitglieder hinzufügen", "Videooptimierung", "Eine Datei in der Bibliothek teilen"],
      es: ["Renovar mi suscripción", "Insertar un video", "Añadir miembros del equipo", "Optimización de video", "Compartir un archivo en la biblioteca"],
      fr: ["Renouveler mon abonnement", "Intégrer une vidéo", "Ajouter des membres à l’équipe", "Optimisation de la vidéo", "Partager un fichier dans la bibliothèque"],
      ja: ["サブスクリプションの更新", "動画を埋め込む", "チームメンバーを追加する", "動画の最適化", "ライブラリでファイルを共有する"],
      ko: ["구독 갱신", "동영상 삽입", "팀원 추가", "동영상 최적화", "라이브러리에서 파일 공유"],
      "pt-br": ["Renovar minha assinatura", "Incorporar um vídeo", "Adicionar membros da equipe", "Otimização de vídeo", "Compartilhar um arquivo na biblioteca"],
      "zh-cn": ["续订我的订阅", "嵌入视频", "添加团队成员", "视频优化", "在资料库中共享文件"]
    },
    _v48 = () => {
      let {
          handleSearch: _v0,
          locale: _v1
        } = _v42(),
        _v2 = _v47[_v1] ?? _v47["en-us"];
      return (0, _v1.jsx)(_v14.Box, {
        children: (0, _v1.jsxs)(_v14.Box, {
          children: [(0, _v1.jsx)(_v23.Text, {
            variant: "body-sm",
            fontFamily: "heading",
            color: "text-secondary",
            mb: 2,
            children: (0, _v20.translate)({
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
            gap: "xs",
            children: _v2.map(_v0 => (0, _v1.jsx)(_v25.Button, {
              type: "button",
              justifyContent: "flex-start",
              alignItems: "center",
              px: "md",
              py: "sm",
              height: "auto",
              borderRadius: "full",
              border: "1px solid",
              borderColor: "stroke",
              bg: "surface",
              color: "text-primary",
              _hover: {
                bg: "fill-component-hover"
              },
              onClick: () => {
                _v0(_v0, !0);
              },
              children: (0, _v1.jsx)(_v23.Text, {
                as: "span",
                variant: "body-md",
                whiteSpace: "nowrap",
                children: _v0
              })
            }, _v0))
          })]
        })
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
    _v58 = _v0.i(0);
  let _v59 = _v0 => (0, _v1.jsx)(_v58.Icon, {
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
  _v0.s(["PopOutFilled", 0, _v59], 0);
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = new Date("2026-09-04T00:00:00Z");
  function _v65() {
    let _v0 = (0, _v11.useViewer)(),
      {
        data: _v1,
        mutate: _v2
      } = (0, _v63.useGetMePreferences)(() => _v0?.user ? {
        select: ["iasp"]
      } : null),
      [_v3] = (0, _v63.usePatchMePreferences)(),
      _v4 = _v0?.user?.createdTime,
      _v5 = !_v4 || new Date(_v4) < _v64,
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
  let _v66 = () => {
      let {
          currentHCUrl: _v0
        } = _v42(),
        {
          showDot: _v1,
          dismissDot: _v2
        } = _v65(),
        {
          trackSupportPanelYourRequestsClicked: _v3
        } = _v22();
      return (0, _v1.jsxs)(_v14.Box, {
        position: "relative",
        display: "inline-flex",
        mr: "2",
        children: [(0, _v1.jsx)(_v25.Button, {
          as: "a",
          href: `https://vimeo.com/help/sso?redirect_to=${_v0}/requests`,
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
          size: "sm",
          onClick: () => {
            _v3(), _v2();
          },
          children: (0, _v20.translate)({
            singular: "Your requests",
            dictionary: {
              es: {
                singular: "Sus solicitudes"
              },
              "de-DE": {
                singular: "Ihre Anfragen"
              },
              "fr-FR": {
                singular: "Vos demandes"
              },
              "ja-JP": {
                singular: "あなたのリクエスト"
              },
              "ko-KR": {
                singular: "요청 내역"
              },
              "pt-BR": {
                singular: "Suas solicitações"
              },
              "zh-CN": {
                singular: "您的请求"
              }
            }
          })
        }), _v1 && (0, _v1.jsx)(_v18.NewFeatureDot, {
          position: "absolute",
          top: -1,
          right: -1
        })]
      });
    },
    _v67 = (_v0, _v1) => _v0.length <= _v1 ? _v0 : `${_v0.substring(0, _v1)}...`,
    _v68 = ({
      title: _v0,
      showBackButton: _v1,
      showSearchButton: _v2,
      showContactUsMenu: _v3
    }) => {
      let {
          goBack: _v4,
          goToPage: _v5,
          currentHCUrl: _v6,
          handleSearch: _v7,
          isSearching: _v8,
          hasEnterprise: _v9,
          closePanel: _v10,
          searchQuery: _v11
        } = _v42(),
        {
          trackSupportPanelHelpCenterClicked: _v12
        } = _v22(),
        [_v13, _v14] = (0, _v3.useState)(""),
        [_v15, _v16] = (0, _v3.useState)(_v11),
        _v17 = _v67(_v0, 20),
        _v18 = (0, _v3.useRef)(null);
      _v11 !== _v15 && (_v16(_v11), _v14(_v11));
      let _v19 = _v13 ? (0, _v1.jsx)(_v61.CloseXCircleFilled, {
          onClick: () => {
            _v14(""), _v18.current?.focus();
          },
          tabIndex: 0,
          "aria-label": (0, _v20.translate)({
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
          role: "button",
          boxSize: 20,
          mr: "sm"
        }) : void 0,
        _v20 = () => {
          _v13.trim() && (_v5("search", []), _v7(_v13));
        },
        _v21 = (0, _v1.jsxs)(_v52.Menu, {
          placement: "bottom-end",
          children: [(0, _v1.jsx)(_v53.MenuButton, {
            as: _v15.IconButton,
            "aria-label": (0, _v20.translate)({
              singular: "Resources",
              dictionary: {
                es: {
                  singular: "Recursos"
                },
                "de-DE": {
                  singular: "Ressourcen"
                },
                "fr-FR": {
                  singular: "Ressources"
                },
                "ja-JP": {
                  singular: "リソース"
                },
                "ko-KR": {
                  singular: "리소스"
                },
                "pt-BR": {
                  singular: "Recursos"
                },
                "zh-CN": {
                  singular: "资源"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v57.EllipsisV, {}),
            variant: "tertiary",
            size: "sm"
          }), (0, _v1.jsxs)(_v54.MenuList, {
            width: 285,
            height: 205,
            children: [(0, _v1.jsx)(_v55.MenuItem, {
              as: "a",
              href: "https://vimeo.com/product-updates?wpsrc=In+Product+Support+Panel",
              target: "_blank",
              height: 62,
              width: 260,
              children: (0, _v1.jsxs)(_v14.Box, {
                children: [(0, _v1.jsx)(_v23.Text, {
                  variant: "heading-xs",
                  children: (0, _v20.translate)({
                    singular: "Product updates",
                    dictionary: {
                      es: {
                        singular: "Actualizaciones del producto"
                      },
                      "de-DE": {
                        singular: "Produkt-Updates"
                      },
                      "fr-FR": {
                        singular: "Mises à jour du produit"
                      },
                      "ja-JP": {
                        singular: "製品アップデート"
                      },
                      "ko-KR": {
                        singular: "제품 업데이트"
                      },
                      "pt-BR": {
                        singular: "Atualizações do produto"
                      },
                      "zh-CN": {
                        singular: "产品更新"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v23.Text, {
                  variant: "body-sm",
                  children: (0, _v20.translate)({
                    singular: "Explore the latest releases",
                    dictionary: {
                      es: {
                        singular: "Explora los últimos lanzamientos"
                      },
                      "de-DE": {
                        singular: "Entdecken Sie die neuesten Veröffentlichungen"
                      },
                      "fr-FR": {
                        singular: "Découvrez les dernières nouveautés"
                      },
                      "ja-JP": {
                        singular: "最新リリースをチェックする"
                      },
                      "ko-KR": {
                        singular: "최신 릴리스 살펴보기"
                      },
                      "pt-BR": {
                        singular: "Explore os lançamentos mais recentes"
                      },
                      "zh-CN": {
                        singular: "查看最新发布"
                      }
                    }
                  })
                })]
              })
            }), (0, _v1.jsx)(_v55.MenuItem, {
              as: "a",
              href: "https://vimeo.com/integrations",
              target: "_blank",
              height: 62,
              width: 260,
              children: (0, _v1.jsxs)(_v14.Box, {
                children: [(0, _v1.jsx)(_v23.Text, {
                  variant: "heading-xs",
                  children: (0, _v20.translate)({
                    singular: "Integrations hub",
                    dictionary: {
                      es: {
                        singular: "Centro de integraciones"
                      },
                      "de-DE": {
                        singular: "Integrations-Hub"
                      },
                      "fr-FR": {
                        singular: "Hub d’intégrations"
                      },
                      "ja-JP": {
                        singular: "統合ハブ"
                      },
                      "ko-KR": {
                        singular: "통합 허브"
                      },
                      "pt-BR": {
                        singular: "Central de Integrações"
                      },
                      "zh-CN": {
                        singular: "集成中心"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v23.Text, {
                  variant: "body-sm",
                  children: (0, _v20.translate)({
                    singular: "Browse apps and integrations",
                    dictionary: {
                      es: {
                        singular: "Explorar aplicaciones e integraciones"
                      },
                      "de-DE": {
                        singular: "Apps und Integrationen durchsuchen"
                      },
                      "fr-FR": {
                        singular: "Parcourir les applications et intégrations"
                      },
                      "ja-JP": {
                        singular: "アプリと統合を閲覧"
                      },
                      "ko-KR": {
                        singular: "앱 및 통합 둘러보기"
                      },
                      "pt-BR": {
                        singular: "Procurar aplicativos e integrações"
                      },
                      "zh-CN": {
                        singular: "浏览应用和集成"
                      }
                    }
                  })
                })]
              })
            }), (0, _v1.jsx)(_v55.MenuItem, {
              as: "a",
              href: "https://vimeo.com/events",
              target: "_blank",
              height: 62,
              width: 260,
              children: (0, _v1.jsxs)(_v14.Box, {
                children: [(0, _v1.jsx)(_v23.Text, {
                  variant: "heading-xs",
                  children: (0, _v20.translate)({
                    singular: "Live and on-demand events",
                    dictionary: {
                      es: {
                        singular: "Eventos en directo y bajo demanda"
                      },
                      "de-DE": {
                        singular: "Live- und On-Demand-Veranstaltungen"
                      },
                      "fr-FR": {
                        singular: "Événements en direct et à la demande"
                      },
                      "ja-JP": {
                        singular: "ライブおよびオンデマンドイベント"
                      },
                      "ko-KR": {
                        singular: "라이브 및 주문형 이벤트"
                      },
                      "pt-BR": {
                        singular: "Eventos ao vivo e sob demanda"
                      },
                      "zh-CN": {
                        singular: "直播与点播活动"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v23.Text, {
                  variant: "body-sm",
                  children: (0, _v20.translate)({
                    singular: "Search talks and trainings",
                    dictionary: {
                      es: {
                        singular: "Buscar charlas y formaciones"
                      },
                      "de-DE": {
                        singular: "Vorträge und Schulungen durchsuchen"
                      },
                      "fr-FR": {
                        singular: "Rechercher des conférences et des formations"
                      },
                      "ja-JP": {
                        singular: "トークとトレーニングを検索"
                      },
                      "ko-KR": {
                        singular: "강연 및 교육 검색"
                      },
                      "pt-BR": {
                        singular: "Pesquisar palestras e treinamentos"
                      },
                      "zh-CN": {
                        singular: "搜索讲座与培训"
                      }
                    }
                  })
                })]
              })
            })]
          })]
        });
      return (0, _v1.jsxs)(_v14.Box, {
        children: [(0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          children: [_v1 && (0, _v1.jsx)(_v15.IconButton, {
            icon: (0, _v1.jsx)(_v56.ChevronLeft, {}),
            "aria-label": (0, _v20.translate)({
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
            mr: 2
          }), (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            flex: "1",
            children: [(0, _v1.jsx)(_v23.Text, {
              variant: "heading-md",
              children: _v17
            }), (0, _v1.jsx)(_v16.Tooltip, {
              label: (0, _v20.translate)({
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
              children: (0, _v1.jsx)(_v15.IconButton, {
                as: "a",
                href: `https://vimeo.com/help/sso?redirect_to=${_v6}`,
                target: "_blank",
                rel: "noopener noreferrer",
                icon: (0, _v1.jsx)(_v59, {}),
                "aria-label": (0, _v20.translate)({
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
                onClick: () => _v12()
              })
            })]
          }), _v3 && (0, _v1.jsxs)(_v4.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v14.Box, {
              w: "md"
            }), (0, _v1.jsx)(_v66, {})]
          }), _v9 && (0, _v1.jsx)(_v16.Tooltip, {
            label: (0, _v20.translate)({
              singular: "Resources",
              dictionary: {
                es: {
                  singular: "Recursos"
                },
                "de-DE": {
                  singular: "Ressourcen"
                },
                "fr-FR": {
                  singular: "Ressources"
                },
                "ja-JP": {
                  singular: "リソース"
                },
                "ko-KR": {
                  singular: "리소스"
                },
                "pt-BR": {
                  singular: "Recursos"
                },
                "zh-CN": {
                  singular: "资源"
                }
              }
            }),
            placement: "bottom",
            children: _v21
          }), (0, _v1.jsx)(_v15.IconButton, {
            icon: (0, _v1.jsx)(_v62.CloseXSmall, {}),
            "aria-label": (0, _v20.translate)({
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
            onClick: _v10,
            ml: 2,
            display: {
              base: "inline-flex",
              sm: "none"
            }
          })]
        }), _v2 && (0, _v1.jsx)(_v14.Box, {
          mt: 4,
          children: (0, _v1.jsxs)(_v50.InputGroup, {
            children: [(0, _v1.jsx)(_v49.Input, {
              placeholder: (0, _v20.translate)({
                singular: "Search for help",
                dictionary: {
                  es: {
                    singular: "Buscar ayuda"
                  },
                  "de-DE": {
                    singular: "Nach Hilfe suchen"
                  },
                  "fr-FR": {
                    singular: "Rechercher de l’aide"
                  },
                  "ja-JP": {
                    singular: "ヘルプを検索"
                  },
                  "ko-KR": {
                    singular: "도움말 검색"
                  },
                  "pt-BR": {
                    singular: "Pesquisar por ajuda"
                  },
                  "zh-CN": {
                    singular: "搜索帮助"
                  }
                }
              }),
              value: _v13,
              onChange: _v0 => _v14(_v0.target.value),
              onKeyDown: _v0 => {
                "Enter" === _v0.key && (_v20(), _v0.preventDefault());
              },
              isDisabled: _v8,
              pr: "60px",
              ref: _v18
            }), (0, _v1.jsxs)(_v51.InputRightElement, {
              _hover: {
                backgroundColor: "var(--vimeo-colors-darkBlueAlpha-200)"
              },
              borderRadius: "md",
              margin: "xs",
              width: "var(--vimeo-sizes-sm)",
              height: "var(--vimeo-sizes-sm)",
              children: [_v19, (0, _v1.jsx)(_v60.SearchMagnifier, {
                mr: 6 * !!_v19,
                boxSize: 20,
                tabIndex: 0,
                "aria-label": (0, _v20.translate)({
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
                role: "button",
                onClick: _v20
              })]
            })]
          })
        })]
      });
    };
  var _v69 = _v0.i(0);
  let _v70 = () => {
      let {
          data: _v0,
          goToArticle: _v1,
          isSearching: _v2,
          isSearchError: _v3,
          searchQuery: _v4
        } = _v42(),
        _v5 = _v0.search || [];
      return _v3 && !_v2 ? (0, _v1.jsx)(_v14.Box, {
        p: 4,
        color: "status-destructive-primary",
        children: (0, _v1.jsx)(_v23.Text, {
          children: (0, _v20.translate)({
            singular: "Failed to load search results. Please try again.",
            dictionary: {
              es: {
                singular: "No se pudieron cargar los resultados de búsqueda. Por favor, inténtelo de nuevo."
              },
              "de-DE": {
                singular: "Fehler beim Laden der Suchergebnisse. Bitte versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Échec du chargement des résultats de recherche. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "検索結果の読み込みに失敗しました。もう一度お試しください。"
              },
              "ko-KR": {
                singular: "검색 결과를 불러오지 못했습니다. 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Falha ao carregar os resultados da pesquisa. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "无法加载搜索结果。请重试。"
              }
            }
          })
        })
      }) : _v2 ? (0, _v1.jsx)(_v14.Box, {
        gap: 4,
        width: "320px",
        children: [...Array(10)].map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "sm",
          mt: "lg",
          children: [[void 0, void 0].map((_v0, _v1) => (0, _v1.jsx)(_v69.Skeleton, {
            height: "sm",
            borderRadius: "sm",
            width: "100%"
          }, _v1)), (0, _v1.jsx)(_v69.Skeleton, {
            height: "sm",
            borderRadius: "sm",
            width: "223px"
          })]
        }, _v1))
      }) : 0 !== _v5.length || _v2 ? (0, _v1.jsxs)(_v14.Box, {
        children: [(0, _v1.jsx)(_v23.Text, {
          variant: "heading-md",
          children: (0, _v20.translate)({
            singular: "{count} result",
            plural: "{count} results",
            count: _v5.length,
            replacements: {
              count: _v5.length
            },
            dictionary: {
              es: {
                singular: "{count} resultado",
                plural: "{count} resultados"
              },
              "de-DE": {
                singular: "{count} Ergebnis",
                plural: "{count} Ergebnisse"
              },
              "fr-FR": {
                singular: "{count} résultat",
                plural: "{count} résultats"
              },
              "ja-JP": {
                singular: "{count}件の結果",
                plural: "{count}件の結果"
              },
              "ko-KR": {
                singular: "{count}개의 결과",
                plural: "{count}개의 결과"
              },
              "pt-BR": {
                singular: "{count} resultado",
                plural: "{count} resultados"
              },
              "zh-CN": {
                singular: "{count} 个结果",
                plural: "{count} 个结果"
              }
            }
          })
        }), (0, _v1.jsx)(_v23.Text, {
          as: "p",
          variant: "body-md",
          color: "text/secondary",
          mb: "md",
          children: (0, _v20.translate)({
            singular: "for {query} in All Categories",
            replacements: {
              query: _v4
            },
            dictionary: {
              es: {
                singular: "para {query} en Todas las categorías"
              },
              "de-DE": {
                singular: "für {query} in allen Kategorien"
              },
              "fr-FR": {
                singular: "pour {query} dans Toutes les catégories"
              },
              "ja-JP": {
                singular: "全カテゴリで「{query}」"
              },
              "ko-KR": {
                singular: "전체 카테고리에서 {query} 검색"
              },
              "pt-BR": {
                singular: "para {query} em Todas as Categorias"
              },
              "zh-CN": {
                singular: "在所有类别中搜索 {query}"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.Flex, {
          direction: "column",
          children: _v5.map(_v0 => {
            var _v1;
            let _v2;
            return (0, _v1.jsx)(_v4.Flex, {
              as: _v25.Button,
              variant: "tertiary",
              direction: "column",
              width: "100%",
              height: "100%",
              p: "lg",
              borderRadius: "lg",
              alignItems: "flex-start",
              onClick: () => _v1(_v0),
              children: (0, _v1.jsxs)(_v4.Flex, {
                flex: 1,
                direction: "column",
                textAlign: "left",
                children: [(0, _v1.jsx)(_v23.Text, {
                  variant: "heading-xs",
                  children: _v67(_v0.title, 30)
                }), (0, _v1.jsx)(_v23.Text, {
                  variant: "body-md",
                  whiteSpace: "normal",
                  children: (_v1 = _v0.content, (_v2 = new DOMParser().parseFromString(_v1, "text/html").body.textContent || "").length <= 85 ? _v2 : _v2.substring(0, 85) + "...")
                })]
              })
            }, _v0.id);
          })
        })]
      }) : (0, _v1.jsx)(_v14.Box, {
        p: 4,
        children: (0, _v20.translate)({
          singular: "No results found.",
          dictionary: {
            es: {
              singular: "No se encontraron resultados."
            },
            "de-DE": {
              singular: "Keine Ergebnisse gefunden."
            },
            "fr-FR": {
              singular: "Aucun résultat trouvé."
            },
            "ja-JP": {
              singular: "結果が見つかりませんでした。"
            },
            "ko-KR": {
              singular: "결과가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum resultado encontrado."
            },
            "zh-CN": {
              singular: "未找到结果。"
            }
          }
        })
      });
    },
    _v71 = () => {
      let {
          goToArticleList: _v0,
          data: _v1
        } = _v42(),
        _v2 = _v1.section || {
          id: "",
          url: "",
          title: "",
          parentSectionId: ""
        },
        {
          loading: _v3,
          error: _v4,
          execute: _v5
        } = _v43(_v33),
        [_v6, _v7] = (0, _v3.useState)(null);
      return ((0, _v3.useEffect)(() => {
        if (_v2.id) {
          let _v0 = new AbortController();
          return _v5(_v2.id, _v0.signal).then(_v0 => {
            _v0 && _v7(_v0);
          }), () => _v0.abort();
        }
      }, [_v2.id, _v5]), _v3 || null === _v6) ? (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        children: (0, _v1.jsx)(_v24.Spinner, {
          size: "lg"
        })
      }) : _v4 ? (0, _v1.jsx)(_v14.Box, {
        p: 4,
        color: "status-destructive-primary",
        children: (0, _v20.translate)({
          singular: "Failed to load section content. Please try again.",
          dictionary: {
            es: {
              singular: "No se pudo cargar el contenido de la sección. Por favor, inténtelo de nuevo."
            },
            "de-DE": {
              singular: "Der Abschnittsinhalt konnte nicht geladen werden. Bitte versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "Échec du chargement du contenu de la section. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "セクションの内容の読み込みに失敗しました。もう一度お試しください。"
            },
            "ko-KR": {
              singular: "섹션 내용을 불러오지 못했습니다. 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Falha ao carregar o conteúdo da seção. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "无法加载章节内容。请重试。"
            }
          }
        })
      }) : (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        gap: "sm",
        children: _v6.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
          as: _v25.Button,
          variant: "tertiary",
          borderRadius: "md",
          p: "sm",
          height: "100%",
          alignItems: "flex-start",
          onClick: () => _v0(_v0),
          children: [(0, _v1.jsx)(_v23.Text, {
            flex: "1",
            variant: "body-md",
            textAlign: "left",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: "0",
            children: _v0.title
          }), (0, _v1.jsx)(_v26.ChevronRightSmall, {})]
        }, _v0.id))
      });
    },
    _v72 = (0, _v3.forwardRef)((_v0, _v1) => {
      let {
          isPanelOpen: _v2,
          currentPage: _v3,
          history: _v4,
          data: _v5
        } = _v42(),
        _v6 = (0, _v3.useMemo)(() => {
          let _v0 = _v4.length > 0 && "home" !== _v3,
            _v1 = "home" === _v3 || "search" === _v3,
            _v2 = "";
          switch (_v3) {
            case "home":
            case "search":
            default:
              _v2 = (0, _v20.translate)({
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
              });
              break;
            case "section":
              _v2 = _v5?.section?.title || (0, _v20.translate)({
                singular: "Section",
                dictionary: {
                  es: {
                    singular: "Sección"
                  },
                  "de-DE": {
                    singular: "Abschnitt"
                  },
                  "ja-JP": {
                    singular: "セクション"
                  },
                  "ko-KR": {
                    singular: "섹션"
                  },
                  "pt-BR": {
                    singular: "Seção"
                  },
                  "zh-CN": {
                    singular: "章节"
                  }
                }
              });
              break;
            case "article":
              _v2 = _v5?.article?.title || (0, _v20.translate)({
                singular: "Article",
                dictionary: {
                  es: {
                    singular: "Artículo"
                  },
                  "de-DE": {
                    singular: "Artikel"
                  },
                  "ja-JP": {
                    singular: "記事"
                  },
                  "ko-KR": {
                    singular: "문서"
                  },
                  "pt-BR": {
                    singular: "Artigo"
                  },
                  "zh-CN": {
                    singular: "文章"
                  }
                }
              });
              break;
            case "article_list":
              _v2 = _v5?.article_list?.title || (0, _v20.translate)({
                singular: "Article List",
                dictionary: {
                  es: {
                    singular: "Lista de artículos"
                  },
                  "de-DE": {
                    singular: "Artikelliste"
                  },
                  "fr-FR": {
                    singular: "Liste d’articles"
                  },
                  "ja-JP": {
                    singular: "記事一覧"
                  },
                  "ko-KR": {
                    singular: "문서 목록"
                  },
                  "pt-BR": {
                    singular: "Lista de artigos"
                  },
                  "zh-CN": {
                    singular: "文章列表"
                  }
                }
              });
          }
          return {
            title: _v2,
            showBackButton: _v0,
            showSearchButton: _v1,
            showContactUsMenu: _v1
          };
        }, [_v3, _v4, _v5]);
      return _v2 ? (0, _v1.jsxs)(_v14.Box, {
        ref: _v1,
        position: "absolute",
        top: "100%",
        right: "lg",
        width: "440px",
        maxHeight: "calc(100vh - 84px)",
        display: "flex",
        flexDirection: "column",
        bg: "var(--vimeo-colors-surface)",
        boxShadow: "0px 0px 24px -5px rgba(0, 0, 0, 0.16), 0px 0px 4px 0px rgba(0, 0, 0, 0.08)",
        borderRadius: "lg",
        padding: "lg",
        gap: "lg",
        isolation: "isolate",
        fontFamily: "body",
        backdropFilter: "blur(12px)",
        children: [(0, _v1.jsx)(_v68, {
          ..._v6
        }), (0, _v1.jsx)(_v14.Box, {
          flex: "1",
          overflowY: "auto",
          sx: {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          },
          children: (_v0 => {
            switch (_v0) {
              case "home":
              default:
                return (0, _v1.jsx)(_v48, {});
              case "section":
                return (0, _v1.jsx)(_v71, {});
              case "article_list":
                return (0, _v1.jsx)(_v44, {});
              case "article":
                return (0, _v1.jsx)(_v46, {});
              case "search":
                return (0, _v1.jsx)(_v70, {});
            }
          })(_v3)
        })]
      }) : null;
    });
  var _v73 = _v0.i(0);
  let _v74 = (_v0, _v1, _v2, _v3) => {
      setTimeout(() => {
        let _v0 = document.getElementById(_v0);
        _v0 && _v0.addEventListener("click", function () {
          let _v0;
          (_v0 = document.getElementById(_v1)) && (_v0.style.display = "none"), _v74(_v2, _v3, _v0, _v1);
        });
      }, 0);
    },
    _v75 = () => {
      let _v0 = (0, _v11.useViewer)(),
        {
          openPanel: _v1,
          closePanel: _v2,
          isPanelOpen: _v3
        } = _v42(),
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
        } = (0, _v19.useCapability)(["hasEnterprise"], _v8),
        _v10 = _v9.hasEnterprise,
        _v11 = _v0?.isSimplifiedSite,
        _v12 = (() => {
          let {
            settings: _v0
          } = (0, _v73.useOrionSettings)();
          return _v0.in_product_support_panel;
        })() && !_v11,
        {
          showDot: _v13
        } = _v65(),
        _v14 = (0, _v3.useMemo)(() => _v12 ? {
          "data-id": "help_link",
          as: "button"
        } : _v10 ? {
          "data-id": "enterprise_help_button",
          as: "button"
        } : {
          "data-id": "help_link",
          as: "a",
          href: "/help/sso?redirect_to=https://help.vimeo.com/",
          target: "_blank"
        }, [_v12, _v10]),
        _v15 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0.target;
          _v7.current?.contains(_v1) || _v6.current?.contains(_v1) || _v2();
        }, [_v2]);
      return (0, _v3.useEffect)(() => (document.addEventListener("click", _v15, !0), () => {
        document.removeEventListener("click", _v15, !0);
      }), [_v15]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.Tooltip, {
          isDisabled: _v3,
          label: (0, _v20.translate)({
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
          children: (0, _v1.jsxs)(_v14.Box, {
            position: "relative",
            display: "inline-flex",
            children: [(0, _v1.jsx)(_v15.IconButton, {
              ref: _v6,
              "aria-label": "help_button",
              icon: (0, _v1.jsx)(_v17.QuestionCircle, {}),
              variant: "tertiary",
              onClick: () => {
                _v4(), _v12 ? _v3 ? _v2() : (_v1(_v10), _v5()) : (_v74("pendo-link-9e2e9ac7-1", "pendo-g-gGIq9Pjwp5KjK6P-yRQzNQ_Zy-g", "pendo-left-caret-229848f1", "pendo-g-0VqsBgo3lrYNn-v0y0Mj3DYh46k"), (0, _v12.trackNavigationActionEvent)({
                  copy: "help",
                  element: "button",
                  feature: "help_center",
                  viewer: _v0
                }));
              },
              size: {
                base: "sm",
                sm: "md"
              },
              isActive: _v3,
              ..._v14
            }), _v12 && _v13 && (0, _v1.jsx)(_v18.NewFeatureDot, {
              position: "absolute",
              top: 1,
              right: 1
            })]
          })
        }), _v12 && (0, _v1.jsx)(_v72, {
          ref: _v7
        })]
      });
    },
    _v76 = () => (0, _v1.jsx)(_v41, {
      children: (0, _v1.jsx)(_v75, {})
    });
  _v0.s(["HelpCTA", 0, _v76], 0);
  var _v77 = _v0.i(0),
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
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  let _v93 = (0, _v20.translate)({
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
    _v94 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v95 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v96 = (0, _v2.default)(async () => {
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
    _v97 = (0, _v2.default)(async () => {
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
  function _v98({
    hasUploader: _v0
  }) {
    let _v1 = (0, _v11.useViewer)();
    return !_v1 || _v1.teamUser?.plainTextPermissionLevel === "Viewer" || _v1.isSimplifiedSite ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v99, {
      viewer: _v1,
      hasUploader: _v0
    });
  }
  function _v99({
    viewer: _v0,
    hasUploader: _v1
  }) {
    let _v2 = (0, _v6.useBreakpointValue)({
        base: !0,
        sm: !1
      }),
      _v3 = _v0.teamUser?.ownerId ?? _v0.user?.id,
      {
        capabilities: _v4,
        loading: _v5,
        error: _v6
      } = (0, _v19.useCapability)(["hasCreation", "canManageTeamCollections"]),
      _v7 = _v4.hasCreation && !_v5 && !_v6,
      _v8 = _v4.canManageTeamCollections && !_v5 && !_v6,
      [_v9, _v10] = (0, _v3.useState)(!1),
      [_v11, _v12] = (0, _v3.useState)(!1),
      {
        capabilities: _v13,
        loading: _v14,
        error: _v15
      } = (0, _v19.useCapability)(["canCreateLiveEvents"], _v3),
      _v16 = _v13.canCreateLiveEvents && !_v14 && !_v15,
      _v17 = window.location.pathname.match(/\/folders?\/(\d+)/),
      _v18 = _v17?.[1],
      _v19 = _v18 ? `folder_id=${_v18}` : "",
      _v20 = _v18 ? `/upload/videos?${_v19}` : "/upload/videos",
      _v21 = `/create/edit?blank=true${_v18 ? `&${_v19}` : ""}`,
      _v22 = "/library" === window.location.pathname,
      _v23 = _v0?.user?.id === _v3,
      _v24 = _v0?.teamUser?.plainTextPermissionLevel === "Admin",
      _v25 = _v0.isRecordToolSupported ? `/record/start-recording${_v18 ? `?${_v19}` : _v22 && (_v23 || _v24) ? "?folder_id=root" : ""}` : "/features/screen-recorder",
      _v26 = _v2 ? "https://vimeo.page.link/createvideo" : _v21,
      {
        isOpen: _v27,
        onOpen: _v28,
        onClose: _v29
      } = (0, _v80.useDisclosure)(),
      {
        canCreateShowcase: _v30,
        isCreatingShowcase: _v31,
        isShowcaseUpsellModalActive: _v32,
        onCreateShowcaseClick: _v33,
        setIsShowcaseUpsellModalActive: _v34
      } = (({
        canManageTeamCollections: _v0,
        viewer: _v1
      }) => {
        let _v2 = (0, _v90.useToast)(),
          [_v3, _v4] = (0, _v3.useState)(!1),
          _v5 = _v1?.teamUser?.ownerId || _v1?.user?.id,
          {
            capabilities: _v6
          } = (0, _v19.useCapability)(["canCreateAlbums"], _v5),
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
            }] = (0, _v92.usePostUserAlbums)();
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
                  name: _v93
                }
              });
            }, {
              loading: _v7
            }];
          })({
            onFailure: (0, _v3.useCallback)(() => {
              _v2({
                title: (0, _v20.translate)({
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
                icon: (0, _v1.jsx)(_v91.CircleExclamationFilled, {
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
            (0, _v12.trackNavigationActionEvent)({
              additionalFields: {
                collection_type: "showcase"
              },
              copy: "create_showcase",
              element: "dropdown",
              entityType: "showcase",
              eventName: "vimeo.create_collection",
              feature: "showcases",
              product: "collections",
              target: "showcase_manage",
              version: 4,
              viewer: _v1
            }), _v11();
          }, [_v11, _v1]),
          setIsShowcaseUpsellModalActive: _v4
        };
      })({
        canManageTeamCollections: _v8,
        viewer: _v0
      }),
      {
        trackHeaderCreateButtonClicked: _v35,
        trackHeaderCreateMenuItemClicked: _v36
      } = (0, _v10.useHeaderTracking)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v81.NestedMenu, {
        positioning: {
          placement: "bottom-end"
        },
        children: [(0, _v1.jsx)(_v81.NestedMenuTrigger, {
          onClick: _v0 => {
            _v2 && (_v0.preventDefault(), _v28()), (0, _v12.trackNavigationActionEvent)({
              copy: "new",
              element: "dropdown_header",
              viewer: _v0
            }), _v35();
          },
          as: _v25.Button,
          variant: "primary",
          size: {
            base: "sm",
            sm: "md"
          },
          "data-id": "new_content_menu_button",
          leftIcon: (0, _v1.jsx)(_v88.PlusSmall, {}),
          children: (0, _v20.translate)({
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
        }), (0, _v1.jsx)(_v81.NestedMenuPositioner, {
          children: (0, _v1.jsxs)(_v81.NestedMenuContent, {
            minWidth: (0, _v5.rem)(202),
            children: [(0, _v1.jsxs)(_v81.NestedMenuItem, {
              id: "upload",
              value: "upload",
              as: _v79.default,
              href: _v20,
              prefetch: !1,
              onClick: () => {
                (0, _v12.trackNavigationActionEvent)({
                  copy: "upload",
                  eventName: "vimeo.start_new_video_flow",
                  feature: "upload",
                  element: "dropdown",
                  entityType: "video",
                  targetPath: "/upload",
                  target: "upload_page",
                  viewer: _v0
                }), _v36({
                  createMenuItem: "upload"
                });
              },
              children: [(0, _v1.jsx)(_v83.Upload, {}), " ", (0, _v20.translate)({
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
            }), _v1 ? (0, _v1.jsxs)(_v81.NestedMenuItem, {
              id: "import",
              value: "import",
              onClick: () => {
                _v12(!0), _v36({
                  createMenuItem: "import"
                });
              },
              children: [(0, _v1.jsx)(_v87.DownloadImport, {}), " ", (0, _v20.translate)({
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
            }) : null, (0, _v1.jsx)(_v81.NestedMenuDivider, {}), _v7 && (0, _v1.jsxs)(_v81.NestedMenuItem, {
              id: "create",
              value: "create",
              as: _v79.default,
              href: _v26,
              prefetch: !1,
              onClick: () => {
                (0, _v12.trackNavigationActionEvent)({
                  copy: "create_video",
                  eventName: "vimeo.start_new_video_flow",
                  feature: "create",
                  element: "dropdown",
                  targetPath: "/create/edit?blank=true",
                  target: "vimeo_create",
                  viewer: _v0
                }), _v36({
                  createMenuItem: "video_project"
                });
              },
              children: [(0, _v1.jsx)(_v86.ClapperBoard, {}), " ", (0, _v20.translate)({
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
            }), (0, _v1.jsxs)(_v81.NestedMenuItem, {
              id: "record",
              value: "record",
              as: _v79.default,
              href: _v25,
              prefetch: !1,
              onClick: () => {
                (0, _v12.trackNavigationActionEvent)({
                  copy: "record_screen",
                  eventName: "vimeo.start_new_video_flow",
                  feature: "record",
                  element: "dropdown",
                  targetPath: "/features/screen-recorder",
                  target: "vimeo_record",
                  viewer: _v0
                }), _v36({
                  createMenuItem: "recording"
                });
              },
              children: [(0, _v1.jsx)(_v84.Record, {}), " ", (0, _v20.translate)({
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
            }), _v16 && (0, _v1.jsxs)(_v81.NestedMenuItem, {
              id: "host",
              value: "host",
              onClick: () => {
                (0, _v12.trackNavigationActionEvent)({
                  copy: "host_event",
                  eventName: "vimeo.start_new_video_flow",
                  feature: "live_event",
                  element: "dropdown",
                  target: "live_unified_event_entry",
                  viewer: _v0
                }), _v36({
                  createMenuItem: "event"
                }), _v10(!0);
              },
              children: [(0, _v1.jsx)(_v85.CameraOn, {}), " ", (0, _v20.translate)({
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
            }), _v30 && (0, _v1.jsxs)(_v81.NestedMenuItem, {
              id: "showcase",
              value: "showcase",
              disabled: _v31,
              onClick: () => {
                _v36({
                  createMenuItem: "showcase"
                }), _v33();
              },
              children: [(0, _v1.jsx)(_v82._3GridLeftLayout, {}), " ", (0, _v20.translate)({
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
        }), (0, _v1.jsx)(_v96, {
          active: _v9,
          activeSet: _v10
        })]
      }), (0, _v1.jsx)(_v97, {
        isOpen: _v27,
        onClose: _v29,
        canCreateLiveEvents: !0,
        uploadLink: _v20,
        recordLink: _v25,
        createShowcaseProps: {
          canCreateShowcase: _v30,
          isCreatingShowcase: _v31,
          onCreateShowcaseClick: _v33
        },
        ...(_v7 && {
          creationLink: _v26
        })
      }), _v32 && (0, _v1.jsx)(_v94, {
        apiUrl: _v0?.apiUrl,
        onClose: () => _v34(!1),
        templateType: "default",
        tracking: {
          params: {
            feature: "showcases",
            location: "top_navigation_bar",
            page: (0, _v89.getPageNameFromPath)(window.location.pathname, _v0?.user) || "ss_lihp",
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
      }), _v11 ? (0, _v1.jsx)(_v95, {
        isOpen: _v11,
        setIsOpen: _v12,
        referrerPage: "create_menu",
        isAutomatic: !1
      }) : null]
    });
  }
  let _v100 = (0, _v0.i(0).buildUpgradePlanUrl)({
      paywallTrigger: "top_nav_bar_pricing_button",
      paywallLocation: "top_navigation",
      paywallFeature: "general"
    }),
    _v101 = () => {
      let _v0 = (0, _v3.useRef)(!1),
        _v1 = (0, _v12.useTrackNavigationEvent)();
      return (0, _v3.useEffect)(() => {
        _v0.current || _v1({
          viewType: "impression",
          copy: "pricing",
          additionalFields: {
            upsell_name: "top_nav_bar_upgrade"
          },
          feature: "general",
          element: "button",
          eventName: "vimeo.upsell_trigger_impression",
          version: 5
        });
      }, [_v1]), (0, _v1.jsx)(_v25.Button, {
        variant: "tertiary",
        as: "a",
        href: _v100,
        onClick: () => {
          _v1({
            actionType: "click",
            feature: "general",
            element: "button",
            copy: "pricing",
            eventName: "vimeo.trigger_upsell",
            additionalFields: {
              upsell_name: "top_nav_bar_upgrade"
            },
            version: 7
          }), _v1({
            copy: "pricing",
            element: "button",
            feature: "pricing"
          });
        },
        size: {
          base: "sm",
          sm: "md"
        },
        children: (0, _v20.translate)({
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
  _v0.s(["PricingCTA", 0, _v101], 0);
  var _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = ({
    isSideNavActive: _v0,
    setIsSideNavActive: _v1
  }) => {
    let _v2 = (0, _v11.useViewer)();
    return (0, _v1.jsx)(_v15.IconButton, {
      "aria-label": "open-sidenav",
      icon: (0, _v1.jsx)(_v103.Menu, {}),
      variant: "tertiary",
      display: _v0 ? "none" : "flex",
      onClick: () => {
        _v1(), (0, _v12.trackNavigationActionEvent)({
          copy: "hamburger_menu",
          element: "button",
          viewer: _v2
        });
      },
      size: {
        base: "xs",
        sm: "sm",
        md: "md"
      },
      "data-testid": "open-sidenav"
    });
  };
  _v0.s(["SideNavToggle", 0, _v104], 0);
  let _v105 = _v0 => (0, _v1.jsx)(_v58.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M8.5 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM19 16H7a1 1 0 0 1 0-2h8.491a3.014 3.014 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74A3.007 3.007 0 0 0 3.92 3H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9-1.22 4.274a1.004 1.004 0 0 1-.963.726H8.754l-.255-.892L7.326 7h10.348ZM16.5 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
        fill: "currentColor"
      })
    }),
    _v106 = ({
      itemsCount: _v0
    }) => {
      let _v1 = (0, _v12.useTrackNavigationEvent)();
      return _v0 && 0 !== _v0 ? (0, _v1.jsx)(_v16.Tooltip, {
        label: (0, _v20.translate)({
          singular: "Cart",
          dictionary: {
            es: {
              singular: "Carrito"
            },
            "de-DE": {
              singular: "Warenkorb"
            },
            "fr-FR": {
              singular: "Panier"
            },
            "ja-JP": {
              singular: "カート"
            },
            "ko-KR": {
              singular: "장바구니"
            },
            "pt-BR": {
              singular: "Carrinho"
            },
            "zh-CN": {
              singular: "购物车"
            }
          }
        }),
        children: (0, _v1.jsx)(_v15.IconButton, {
          "aria-label": "cart_link",
          icon: (0, _v1.jsx)(_v105, {}),
          as: "a",
          href: "/store/stock",
          variant: "tertiary",
          onClick: () => _v1({
            copy: "cart",
            element: "button",
            feature: "cart"
          })
        })
      }) : (0, _v1.jsx)(_v1.Fragment, {});
    },
    _v107 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).LoginJoinModal
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v108 = (0, _v5.rem)(24);
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
    let _v9 = (0, _v3.useContext)(_v35.ViewerContext),
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
      [_v19, _v20] = (0, _v3.useState)(),
      _v21 = _v9?.isSimplifiedSite,
      _v22 = _v9?.isEnterpriseSite,
      _v23 = _v7 && !_v3,
      _v24 = _v7 && _v8 ? `calc(max(0px, calc((100cqw - var(--search-content-max-width)) / 2)) + var(--search-content-inline-start) - ${_v108})` : _v23 ? (0, _v5.rem)(24) : void 0;
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
        children: [_v4 && (0, _v1.jsx)(_v104, {
          isSideNavActive: !!_v3,
          setIsSideNavActive: _v4
        }), (0, _v1.jsx)(_v7.Navigation.VimeoLogo, {
          display: _v3 || _v7 ? "none" : "flex",
          marginLeft: _v7 ? (0, _v5.rem)(-24) : void 0
        }), _v1 && _v17 && (0, _v1.jsx)(_v4.Flex, {
          flexGrow: 1,
          minWidth: 0,
          marginLeft: _v24,
          children: (0, _v1.jsx)(_v102.Search, {})
        })]
      }), (0, _v1.jsx)(_v7.Navigation.RightContent, {
        justifyContent: "end",
        width: _v17 ? "unset" : "100%",
        gap: {
          base: "sm",
          md: "md"
        },
        children: (0, _v1.jsx)(_v78.LoginJoinModalContext.Provider, {
          value: {
            modal: _v19,
            setModal: _v20
          },
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
            }), _v1 && !_v17 && (0, _v1.jsx)(_v102.Search, {
              withToggle: !0,
              updateGlobalNavSearchState: _v12
            }), !_v16 && !_v21 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v76, {}), (0, _v1.jsx)(_v13, {}), (0, _v1.jsx)(_v106, {
                itemsCount: _v9?.cart?.itemsCount
              })]
            }), _v9 && !_v10 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [!_v18 && !_v22 && (0, _v1.jsx)(_v101, {}), !(_v15 && _v11) && (0, _v1.jsx)(_v77.Login, {})]
            }), !_v16 && (_v10 ? (0, _v1.jsx)(_v98, {
              hasUploader: _v5
            }) : _v9 && !_v22 && (0, _v1.jsx)(_v77.Join, {})), !(_v15 && _v11) && (0, _v1.jsx)(_v8.AccountMenu, {
              hasThemeSupport: _v2
            }), _v9 && !_v10 && _v19 && (0, _v1.jsx)(_v107, {})]
          })
        })
      })]
    });
  }], 0);
}