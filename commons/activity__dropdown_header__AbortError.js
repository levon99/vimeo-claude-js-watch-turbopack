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
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = async (_v0, _v1) => {
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
    _v25 = async (_v0, _v1) => {
      let _v2 = [],
        _v3 = null,
        _v4 = await _v24(_v0, _v1);
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
    _v26 = _v0 => ({
      id: String(_v0.id),
      title: _v0.title,
      url: _v0.html_url,
      content: _v0.body || ""
    }),
    _v27 = _v0 => ({
      id: String(_v0.id),
      title: _v0.name,
      url: _v0.html_url
    }),
    _v28 = _v0 => ({
      id: String(_v0.id),
      title: _v0.name,
      url: _v0.html_url,
      parentSectionId: _v0.parent_section_id ? String(_v0.parent_section_id) : void 0
    }),
    _v29 = async (_v0, _v1, _v2) => {
      let [_v3, _v4] = await Promise.all([_v24(`${_v0}/api/v2/help_center/${_v1}/categories.json`, {
          locale: _v1,
          signal: _v2
        }), _v25(`${_v0}/api/v2/help_center/articles/search.json`, {
          signal: _v2,
          params: {
            per_page: 100,
            label_names: "featured",
            "filter[locales]": _v1
          }
        })]),
        _v5 = _v4.filter(_v0 => _v0.promoted).map(_v26);
      return {
        categories: _v3.categories.map(_v27),
        featured: _v5
      };
    },
    _v30 = async (_v0, _v1, _v2, _v3) => _v26((await _v24(`${_v0}/api/v2/help_center/${_v1}/articles/${_v2}.json`, {
      locale: _v1,
      signal: _v3
    })).article),
    _v31 = async (_v0, _v1, _v2, _v3) => {
      let _v4 = await _v24(`${_v0}/api/v2/help_center/${_v1}/sections/${_v2}/articles.json`, {
        locale: _v1,
        signal: _v3
      });
      return _v4.articles?.map(_v26);
    },
    _v32 = async (_v0, _v1, _v2, _v3) => (await _v24(`${_v0}/api/v2/help_center/${_v1}/categories/${_v2}/sections.json`, {
      locale: _v1,
      signal: _v3
    })).sections.map(_v28),
    _v33 = async (_v0, _v1, _v2, _v3) => (await _v25(`${_v0}/api/v2/help_center/articles/search.json`, {
      signal: _v3,
      params: {
        query: _v2,
        per_page: 100,
        "filter[locales]": _v1
      }
    })).map(_v26);
  var _v34 = _v0.i(0);
  let _v35 = "https://help.vimeo.com",
    _v36 = new Map([["en", "en-us"]]),
    _v37 = _v0 => _v36.get(_v0) ?? "en-us",
    _v38 = {
      isPanelOpen: !1,
      currentPage: "home",
      history: [],
      currentHCUrl: `${_v35}/hc`,
      hasEnterprise: !1,
      searchQuery: "",
      hc_base_url: _v35,
      data: {}
    },
    _v39 = (0, _v3.createContext)(void 0),
    _v40 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v34.ViewerContext),
        _v2 = _v1?.locale ?? "en",
        [_v3, _v4] = (0, _v3.useState)(_v37(_v2)),
        [_v5, _v6] = ((_v0, _v1, _v2) => {
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
        })("vimeo-help-panel", _v38, {
          storageKeys: ["currentPage", "history"]
        }),
        [_v7, _v8] = (0, _v3.useState)(!1);
      (0, _v3.useEffect)(() => {
        let _v0 = _v37(_v2);
        _v3 !== _v0 && _v4(_v0);
      }, [_v2, _v3]);
      let _v9 = (_v0, _v1, _v2) => {
          _v6(_v0 => _v0.currentPage === _v0 ? {
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
        _v10 = async _v0 => {
          _v6(_v0 => ({
            ..._v0,
            searchQuery: _v0
          })), _v8(!0);
          try {
            let _v0 = await _v33(_v35, _v3, _v0);
            _v9("search", _v0);
          } catch (_v0) {
            console.error(_v0);
          } finally {
            _v8(!1);
          }
        },
        _v11 = {
          ..._v5,
          hc_base_url: _v35,
          locale: _v3,
          isSearching: _v7,
          openPanel: _v0 => {
            _v6(_v0 => ({
              ..._v0,
              isPanelOpen: !0,
              hasEnterprise: _v0 || !1,
              currentPage: "home",
              history: [],
              currentHCUrl: `${_v35}/hc/${_v3}`,
              data: {}
            }));
          },
          closePanel: () => {
            _v6(_v0 => ({
              ..._v0,
              isPanelOpen: !1
            }));
          },
          goBack: () => {
            _v6(_v0 => {
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
          goToPage: _v9,
          goToSection: _v0 => {
            _v9("section", _v0, _v0.url);
          },
          goToArticleList: _v0 => {
            _v9("article_list", _v0, _v0.url);
          },
          goToArticle: _v0 => {
            _v9("article", _v0, _v0.url);
          },
          handleSearch: _v10
        };
      return (0, _v1.jsx)(_v39.Provider, {
        value: _v11,
        children: _v0
      });
    },
    _v41 = () => {
      let _v0 = (0, _v3.useContext)(_v39);
      if (void 0 === _v0) throw Error("useHelpPanel must be used within a HelpPanelProvider");
      return _v0;
    },
    _v42 = _v0 => {
      let [_v1, _v2] = (0, _v3.useState)(null),
        [_v3, _v4] = (0, _v3.useState)(!1),
        [_v5, _v6] = (0, _v3.useState)(null),
        {
          locale: _v7,
          hc_base_url: _v8
        } = _v41();
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
    };
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = () => {
      let _v0 = (0, _v11.useViewer)();
      return _v0 => _v50({
        ..._v0,
        viewer: _v0
      });
    },
    _v50 = ({
      actionType: _v0 = "click",
      copy: _v1 = null,
      element: _v2,
      eventName: _v3 = "vimeo.in_app_support_panel_launch_button",
      feature: _v4 = "support",
      flow: _v5 = null,
      product: _v6 = "in_app_support",
      target: _v7 = null,
      targetPath: _v8 = null,
      viewer: _v9
    }) => {
      let _v10 = _v9?.user;
      _v9?.teamUser;
      let _v11 = (0, _v43.getPageNameFromPath)(window.location.pathname, _v10),
        _v12 = document.referrer ? (0, _v43.getPageNameFromPath)(`/${document.referrer}`, _v10) : null,
        _v13 = {
          ...(0, _v45.buildActionBpContext)({
            action_type: _v0,
            feature: null
          }),
          ...(0, _v47.buildWebBpContext)({
            page_name: _v11,
            referrer_page_name: _v12,
            referrer: document.referrer,
            path: window.location.pathname,
            target: window.location.pathname,
            target_path: _v8,
            copy: _v1
          }),
          ...(0, _v46.buildProductAnalyticsBpContext)({
            product: _v6,
            feature: _v4,
            location: "panel",
            flow: _v5,
            element: _v2,
            device_type: (0, _v44.default)(),
            is_user_facing_data: null
          })
        };
      (0, _v48.sendBpEventWithContexts)(_v3, _v13);
    },
    _v51 = () => {
      let {
          goToArticle: _v0,
          data: _v1
        } = _v41(),
        _v2 = _v49(),
        _v3 = _v1.article_list || {
          id: "",
          url: "",
          title: "",
          parentSectionId: ""
        },
        {
          loading: _v4,
          error: _v5,
          execute: _v6
        } = _v42(_v31),
        [_v7, _v8] = (0, _v3.useState)(null);
      return ((0, _v3.useEffect)(() => {
        if (_v3.id) {
          let _v0 = new AbortController();
          return _v6(_v3.id, _v0.signal).then(_v0 => {
            _v0 && _v8(_v0);
          }), () => _v0.abort();
        }
      }, [_v3.id, _v6]), _v4 || null === _v7) ? (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        children: (0, _v1.jsx)(_v21.Spinner, {
          size: "lg"
        })
      }) : _v5 ? (0, _v1.jsx)(_v19.Box, {
        p: 4,
        color: "status-destructive-primary",
        children: "Failed to load section content. Please try again."
      }) : 0 === _v7.length ? (0, _v1.jsx)(_v19.Box, {
        p: 4,
        children: "No articles found."
      }) : (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        gap: "sm",
        children: _v7.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
          as: _v22.Button,
          variant: "tertiary",
          borderRadius: "md",
          p: "sm",
          height: "100%",
          alignItems: "flex-start",
          onClick: () => {
            _v0(_v0), _v2({
              eventName: "vimeo.in_app_support_article_click",
              element: "button",
              copy: _v0.title,
              flow: "tile_click"
            });
          },
          children: [(0, _v1.jsx)(_v20.Text, {
            flex: "1",
            variant: "body-md",
            textAlign: "left",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: "0",
            children: _v0.title
          }), (0, _v1.jsx)(_v23.ChevronRightSmall, {})]
        }, _v0.id))
      });
    };
  var _v52 = _v0.i(0);
  let _v53 = () => {
    let {
        data: _v0
      } = _v41(),
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
      } = _v42(_v30),
      [_v5, _v6] = (0, _v3.useState)(_v1),
      {
        colorMode: _v7
      } = (0, _v52.useColorMode)();
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
      children: (0, _v1.jsx)(_v21.Spinner, {
        size: "lg"
      })
    });
    if (_v3) return (0, _v1.jsx)(_v19.Box, {
      p: 4,
      color: "status-destructive-primary",
      children: (0, _v1.jsx)(_v20.Text, {
        children: "Failed to load article content. Please try again."
      })
    });
    let _v8 = "dark" === _v7;
    return (0, _v1.jsx)(_v19.Box, {
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
  };
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = _v0 => (0, _v1.jsx)(_v56.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.75 7.265a4.265 4.265 0 1 1 8.53 0 4.265 4.265 0 0 1-8.53 0ZM9.015 5a2.265 2.265 0 1 0 0 4.53 2.265 2.265 0 0 0 0-4.53ZM3.29 14.122C4.617 13.1 6.383 12.48 8.203 12.48h.035l.034.003c.173.012.655.006 1.059.001h.061c.16-.002.303-.004.405-.004 1.82 0 3.586.62 4.913 1.643 1.325 1.02 2.29 2.512 2.29 4.255 0 1.51-1.282 2.633-2.734 2.633H3.734C2.282 21.01 1 19.888 1 18.377c0-1.743.965-3.234 2.29-4.255Zm1.22 1.584C3.536 16.46 3 17.416 3 18.377c0 .294.271.633.734.633h10.532c.463 0 .734-.34.734-.633 0-.961-.535-1.918-1.51-2.67-.974-.75-2.31-1.228-3.693-1.228l-.286.003h-.008c-.398.005-1.043.012-1.328-.002-1.373.006-2.697.48-3.664 1.226ZM19.945 6a1 1 0 1 0-2 0v.85c-.32.118-.614.29-.87.506l-.667-.392a1 1 0 0 0-1.014 1.724l.688.405a2.921 2.921 0 0 0-.01.896l-.678.399a1 1 0 0 0 1.014 1.723l.614-.36c.268.236.58.425.922.55V13a1 1 0 1 0 2 0v-.699c.33-.12.631-.3.892-.524l.569.335a1 1 0 1 0 1.014-1.724l-.608-.358a2.922 2.922 0 0 0-.008-.957l.67-.373a1 1 0 1 0-.97-1.748l-.705.391a2.898 2.898 0 0 0-.854-.492V6ZM18.04 9.576a.902.902 0 1 1 1.805 0 .902.902 0 0 1-1.805 0Z",
      fill: "currentColor"
    })
  });
  var _v58 = _v0.i(0);
  let _v59 = _v0 => (0, _v1.jsx)(_v56.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M8.5 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM19 16H7a1 1 0 0 1 0-2h8.491a3.014 3.014 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74A3.007 3.007 0 0 0 3.92 3H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9-1.22 4.274a1.004 1.004 0 0 1-.963.726H8.754l-.255-.892L7.326 7h10.348ZM16.5 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
      fill: "currentColor"
    })
  });
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = {
      "account and billing": (0, _v1.jsx)(_v57, {}),
      "watching videos and events": (0, _v1.jsx)(_v60.WatchPlay, {}),
      "making, managing, and sharing videos": (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v56.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M21 18h-2v-3a1 1 0 0 0-1-1h-5v-2.71l1.13.59a1 1 0 0 0 1.45-1.05l-.4-2.37 1.72-1.69a1 1 0 0 0 .26-1 1 1 0 0 0-.81-.68L14 4.72l-1.1-2.16a1 1 0 0 0-1.8 0L10 4.72l-2.39.35a1 1 0 0 0-.81.68 1 1 0 0 0 .26 1l1.76 1.71-.4 2.37a1 1 0 0 0 1.45 1.05l1.13-.59V14H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1H7v-2h10v2h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-9-9.37a1 1 0 0 0-.47.12l-.8.42.15-.9a1 1 0 0 0-.29-.88l-.65-.64.9-.13a1 1 0 0 0 .76-.54l.4-.82.4.82a1 1 0 0 0 .76.54l.9.13-.65.64a1 1 0 0 0-.29.88l.15.9-.8-.42a1 1 0 0 0-.47-.12Z",
          fill: "currentColor"
        })
      }), {}),
      "virtual events and livestreaming": (0, _v1.jsx)(_v58.CameraOn, {}),
      "monetize content": (0, _v1.jsx)(_v59, {}),
      "integrations and third-party apps": (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v56.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.899 2.576a1.97 1.97 0 0 1 2.784 0l2.74 2.74c.77.768.77 2.015 0 2.784l-2.74 2.74a1.969 1.969 0 0 1-2.784 0l-2.74-2.74a1.968 1.968 0 0 1 0-2.784l2.74-2.74Zm1.392 1.437-2.696 2.695 2.696 2.695 2.696-2.695-2.696-2.695Zm-15.049.28c0-1.087.882-1.968 1.97-1.968h4.843c1.087 0 1.97.881 1.97 1.969v4.842a1.969 1.969 0 0 1-1.97 1.969H4.211a1.969 1.969 0 0 1-1.969-1.969V4.294Zm2 .032v4.78h4.782v-4.78H4.242Zm2.391 8.411a1 1 0 0 1 1 1v2.632h2.634a1 1 0 1 1 0 2H7.633V21a1 1 0 1 1-2 0v-2.632H3a1 1 0 1 1 0-2h2.633v-2.632a1 1 0 0 1 1-1Zm6.267 4.819a4.39 4.39 0 1 1 8.78 0 4.39 4.39 0 0 1-8.78 0Zm4.39-2.39a2.39 2.39 0 1 0 0 4.78 2.39 2.39 0 0 0 0-4.78Z",
          fill: "currentColor"
        })
      }), {}),
      "policy, safety, and copyright": (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v56.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M11 9h2a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 1 1 0 0 0-2 0 1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm1-7a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z",
          fill: "currentColor"
        })
      }), {}),
      developers: (0, _v1.jsx)(_v61.Code, {})
    },
    _v63 = () => {
      let {
          goToSection: _v0,
          goToArticle: _v1,
          goToPage: _v2,
          data: _v3
        } = _v41(),
        {
          loading: _v4,
          error: _v5,
          execute: _v6
        } = _v42(_v29),
        _v7 = _v49();
      if ((0, _v3.useEffect)(() => {
        _v3.home || _v6().then(_v0 => {
          _v0 && _v2("home", _v0);
        });
      }, [_v3.home, _v6, _v2]), _v4 || !_v3.home) return (0, _v1.jsxs)(_v19.Box, {
        gap: 4,
        width: "100%",
        children: [(0, _v1.jsx)(_v55.Skeleton, {
          height: "md",
          borderRadius: "md",
          width: "100%"
        }), (0, _v1.jsx)(_v4.Flex, {
          wrap: "wrap",
          gap: 4,
          mt: "xs",
          children: [...Array(6)].map((_v0, _v1) => (0, _v1.jsx)(_v55.Skeleton, {
            height: "112px",
            borderRadius: "md",
            width: "47.5%"
          }, _v1))
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "sm",
          mt: "xs",
          children: [[void 0, void 0].map((_v0, _v1) => (0, _v1.jsx)(_v55.Skeleton, {
            height: "8px",
            borderRadius: "sm",
            width: "100%"
          }, _v1)), (0, _v1.jsx)(_v55.Skeleton, {
            height: "8px",
            borderRadius: "sm",
            width: "68%"
          })]
        })]
      });
      if (_v5) return (0, _v1.jsx)(_v19.Box, {
        p: 4,
        color: "status-destructive-primary",
        children: "Failed to load help content. Please try again."
      });
      let {
        categories: _v8,
        featured: _v9
      } = _v3.home;
      return (0, _v1.jsxs)(_v19.Box, {
        children: [(0, _v1.jsx)(_v54.Grid, {
          templateColumns: "repeat(2, 1fr)",
          gap: 3,
          p: "3px",
          children: _v8.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
            as: _v22.Button,
            variant: "tertiary",
            direction: "column",
            justifyContent: "space-between",
            height: "112px",
            p: 4,
            alignItems: "flex-start",
            border: "1px solid",
            borderColor: "var(--vimeo-colors-stroke)",
            width: "100%",
            onClick: () => {
              _v0(_v0), _v7({
                eventName: "vimeo.in_app_support_panel_button_click",
                element: "button",
                copy: _v0.title
              });
            },
            children: [(_v0 => {
              let _v1 = _v0.toLowerCase();
              for (let _v0 in _v62) if (_v1.includes(_v0)) return _v62[_v0];
              return (0, _v1.jsx)(_v57, {});
            })(_v0.title), (0, _v1.jsx)(_v20.Text, {
              as: "p",
              variant: "body-md",
              whiteSpace: "normal",
              textAlign: "left",
              children: _v0.title
            })]
          }, _v0.id))
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: 1,
          mt: 5,
          children: [(0, _v1.jsx)(_v20.Text, {
            variant: "heading-xs",
            mb: 8,
            children: "Featured articles"
          }), _v9.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
            as: _v22.Button,
            variant: "tertiary",
            p: "sm",
            height: "100%",
            borderRadius: "md",
            alignItems: "flex-start",
            onClick: () => {
              _v1(_v0), _v7({
                eventName: "vimeo.in_app_support_panel_button_click",
                element: "button",
                copy: "featured articles"
              });
            },
            children: [(0, _v1.jsx)(_v20.Text, {
              flex: "1",
              variant: "body-md",
              textAlign: "left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: "0",
              children: _v0.title
            }), (0, _v1.jsx)(_v23.ChevronRightSmall, {})]
          }, _v0.id))]
        })]
      });
    };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = _v0 => (0, _v1.jsx)(_v56.Icon, {
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
  _v0.s(["PopOutFilled", 0, _v74], 0);
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = (_v0, _v1) => _v0.length <= _v1 ? _v0 : `${_v0.substring(0, _v1)}...`;
  async function _v79() {
    let _v0 = await fetch("/help/zendesk_messenger_jwt");
    if (!_v0.ok) throw Error("Failed to fetch Zendesk credentials.");
    return _v0.json();
  }
  async function _v80() {
    try {
      let {
        token: _v0,
        widget_key: _v1,
        messenger_detection_id: _v2
      } = await _v79();
      await new Promise((_v0, _v1) => {
        if (document.getElementById("ze-snippet")) return void _v0();
        let _v2 = document.createElement("script");
        _v2.id = "ze-snippet", _v2.src = `https://static.zdassets.com/ekr/snippet.js?key=${_v1}`, _v2.async = !0, _v2.onload = () => _v0(), _v2.onerror = () => _v1(Error("Zendesk script failed to load.")), document.body.appendChild(_v2);
      }), window.zE && window.zE(() => {
        window.zE && (window.zE ? (window.zE("messenger:set", "conversationTags", ["in_product_support"]), window.zE("messenger:set", "conversationFields", [{
          id: _v2,
          value: "in_product_support"
        }]), _v0 && window.zE("messenger", "loginUser", _v0 => {
          _v0(_v0);
        }), window.zE("messenger:on", "close", () => {
          window.zE && window.zE("messenger", "hide");
        }), window.zE("messenger", "hide")) : console.error("Zendesk Messenger is not available."));
      });
    } catch (_v0) {
      console.error("Error initializing Zendesk Messenger:", _v0);
    }
  }
  let _v81 = () => {
      let _v0 = (0, _v11.useViewer)(),
        _v1 = _v49();
      return (0, _v1.jsx)(_v22.Button, {
        variant: "primary",
        size: "sm",
        onClick: () => {
          !function (_v0) {
            if (!window.zE) return;
            let _v1 = (0, _v43.getPageNameFromPath)(window.location.pathname, _v0?.user),
              _v2 = ((_v0, _v1 = window.location.origin) => {
                if (RegExp("(.*/videos/[0-9]+.*|.*/[0-9]+.*|/clip)").test(_v0)) {
                  let _v0 = /(\/videos\/|^\/)(\d+)(.*)/;
                  if (_v0.test(_v0)) return _v1 + _v0.replace(_v0, "$1{video_id}$3");
                }
                return _v1 + _v0;
              })(window.location.pathname);
            window?.location?.host?.endsWith(".ci.vimeows.com") || window?.location?.host === "vimeo.dev" ? (window.zE("messenger:set", "conversationFields", [{
              id: "36670937261713",
              value: _v1
            }]), window.zE("messenger:set", "conversationFields", [{
              id: "36670971897489",
              value: _v2
            }])) : (window.zE("messenger:set", "conversationFields", [{
              id: "41039307846929",
              value: _v1
            }]), window.zE("messenger:set", "conversationFields", [{
              id: "41039366484753",
              value: _v2
            }])), window.zE("messenger", "open"), window.zE("messenger", "show");
          }(_v0), _v1({
            eventName: "vimeo.in_app_support_panel_button_click",
            element: "button",
            copy: "contact us"
          });
        },
        mr: "2",
        children: "Contact us"
      });
    },
    _v82 = ({
      title: _v0,
      showBackButton: _v1,
      showSearchButton: _v2,
      showContactUsMenu: _v3,
      showViewRequestsButton: _v4
    }) => {
      let {
          goBack: _v5,
          goToPage: _v6,
          currentHCUrl: _v7,
          handleSearch: _v8,
          isSearching: _v9,
          hasEnterprise: _v10,
          closePanel: _v11
        } = _v41(),
        _v12 = _v49(),
        [_v13, _v14] = (0, _v3.useState)(""),
        _v15 = _v78(_v0, 20),
        _v16 = (0, _v3.useRef)(null),
        _v17 = _v13 ? (0, _v1.jsx)(_v76.CloseXCircleFilled, {
          onClick: () => {
            _v14(""), _v16.current?.focus();
          },
          tabIndex: 0,
          "aria-label": "Clear search",
          role: "button",
          boxSize: 20,
          mr: "sm"
        }) : void 0,
        _v18 = () => {
          _v13.trim() && (_v6("search", []), _v8(_v13), _v12({
            eventName: "vimeo.in_app_support_search",
            element: "search_bar",
            copy: _v13,
            flow: "search"
          }));
        },
        _v19 = (0, _v1.jsxs)(_v67.Menu, {
          placement: "bottom-end",
          children: [(0, _v1.jsx)(_v68.MenuButton, {
            as: _v14.IconButton,
            "aria-label": "Resources",
            icon: (0, _v1.jsx)(_v73.EllipsisV, {}),
            variant: "tertiary",
            size: "sm"
          }), (0, _v1.jsxs)(_v69.MenuList, {
            width: 285,
            height: 205,
            children: [(0, _v1.jsx)(_v70.MenuItem, {
              as: "a",
              href: "https://vimeo.com/blog/post/spring-2025-release?utm_source=resource-center&utm_medium=pendo&utm_campaign=Spring-Release-2025",
              target: "_blank",
              height: 62,
              width: 260,
              onClick: () => _v12({
                eventName: "vimeo.in_app_support_panel_button_click",
                element: "button",
                copy: "spring 2025 release"
              }),
              children: (0, _v1.jsxs)(_v19.Box, {
                children: [(0, _v1.jsx)(_v20.Text, {
                  variant: "heading-xs",
                  children: "Spring 2025 release"
                }), (0, _v1.jsx)(_v20.Text, {
                  variant: "body-sm",
                  children: "Explore the latest product releases"
                })]
              })
            }), (0, _v1.jsx)(_v70.MenuItem, {
              as: "a",
              href: "https://vimeo.com/integrations",
              target: "_blank",
              height: 62,
              width: 260,
              onClick: () => _v12({
                eventName: "vimeo.in_app_support_panel_button_click",
                element: "button",
                copy: "integrations hub"
              }),
              children: (0, _v1.jsxs)(_v19.Box, {
                children: [(0, _v1.jsx)(_v20.Text, {
                  variant: "heading-xs",
                  children: "Integrations hub"
                }), (0, _v1.jsx)(_v20.Text, {
                  variant: "body-sm",
                  children: "Browse apps and integrations"
                })]
              })
            }), (0, _v1.jsx)(_v70.MenuItem, {
              as: "a",
              href: "https://vimeo.com/events",
              target: "_blank",
              height: 62,
              width: 260,
              onClick: () => _v12({
                eventName: "vimeo.in_app_support_panel_button_click",
                element: "button",
                copy: "live and on-demand events"
              }),
              children: (0, _v1.jsxs)(_v19.Box, {
                children: [(0, _v1.jsx)(_v20.Text, {
                  variant: "heading-xs",
                  children: "Live and on-demand events"
                }), (0, _v1.jsx)(_v20.Text, {
                  variant: "body-sm",
                  children: "Search talks and trainings"
                })]
              })
            })]
          })]
        });
      return (0, _v1.jsxs)(_v19.Box, {
        children: [(0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          children: [_v1 && (0, _v1.jsx)(_v14.IconButton, {
            icon: (0, _v1.jsx)(_v71.ChevronLeft, {}),
            "aria-label": "Back",
            onClick: _v5,
            variant: "tertiary",
            size: "sm",
            mr: 2
          }), (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            flex: "1",
            children: [(0, _v1.jsx)(_v20.Text, {
              variant: "heading-sm",
              children: _v15
            }), (0, _v1.jsx)(_v15.Tooltip, {
              label: "View in Help Center",
              placement: "bottom",
              children: (0, _v1.jsx)(_v14.IconButton, {
                as: "a",
                href: `https://vimeo.com/help/sso?redirect_to=${_v7}`,
                target: "_blank",
                rel: "noopener noreferrer",
                icon: (0, _v1.jsx)(_v74, {}),
                "aria-label": "Go to Help Center",
                variant: "tertiary",
                ml: 2,
                size: "sm",
                onClick: () => _v12({
                  eventName: "vimeo.in_app_support_panel_button_click",
                  element: "button",
                  copy: "view in Help Center"
                })
              })
            })]
          }), _v3 && (0, _v1.jsxs)(_v4.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v19.Box, {
              w: "md"
            }), (0, _v1.jsx)(_v81, {})]
          }), _v4 && (0, _v1.jsx)(_v15.Tooltip, {
            label: "View requests",
            placement: "bottom",
            children: (0, _v1.jsx)(_v14.IconButton, {
              as: "a",
              href: `https://vimeo.com/help/sso?redirect_to=${_v7}/requests`,
              target: "_blank",
              rel: "noopener noreferrer",
              icon: (0, _v1.jsx)(_v72.ListUlFilled, {}),
              "aria-label": "Requests",
              variant: "tertiary",
              size: "sm",
              onClick: () => _v12({
                eventName: "vimeo.in_app_support_panel_button_click",
                element: "button",
                copy: "view requests"
              })
            })
          }), _v10 && (0, _v1.jsx)(_v15.Tooltip, {
            label: "Resources",
            placement: "bottom",
            children: _v19
          }), (0, _v1.jsx)(_v14.IconButton, {
            icon: (0, _v1.jsx)(_v77.CloseXSmall, {}),
            "aria-label": "Close help panel",
            variant: "tertiary",
            size: "sm",
            onClick: _v11,
            ml: 2,
            display: {
              base: "inline-flex",
              sm: "none"
            }
          })]
        }), _v2 && (0, _v1.jsx)(_v19.Box, {
          mt: 4,
          children: (0, _v1.jsxs)(_v65.InputGroup, {
            children: [(0, _v1.jsx)(_v64.Input, {
              placeholder: "Search for help",
              value: _v13,
              onChange: _v0 => _v14(_v0.target.value),
              onKeyDown: _v0 => {
                "Enter" === _v0.key && (_v18(), _v0.preventDefault());
              },
              isDisabled: _v9,
              pr: "60px",
              ref: _v16
            }), (0, _v1.jsxs)(_v66.InputRightElement, {
              _hover: {
                backgroundColor: "var(--vimeo-colors-darkBlueAlpha-200)"
              },
              borderRadius: "md",
              margin: "xs",
              width: "var(--vimeo-sizes-sm)",
              height: "var(--vimeo-sizes-sm)",
              children: [_v17, (0, _v1.jsx)(_v75.SearchMagnifier, {
                mr: 6 * !!_v17,
                boxSize: 20,
                tabIndex: 0,
                "aria-label": "Search",
                role: "button",
                onClick: _v18
              })]
            })]
          })
        })]
      });
    },
    _v83 = () => {
      let {
          data: _v0,
          goToArticle: _v1,
          isSearching: _v2,
          searchQuery: _v3
        } = _v41(),
        _v4 = _v0.search || [];
      return _v2 ? (0, _v1.jsx)(_v19.Box, {
        gap: 4,
        width: "320px",
        children: [...Array(10)].map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "sm",
          mt: "lg",
          children: [[void 0, void 0].map((_v0, _v1) => (0, _v1.jsx)(_v55.Skeleton, {
            height: "sm",
            borderRadius: "sm",
            width: "100%"
          }, _v1)), (0, _v1.jsx)(_v55.Skeleton, {
            height: "sm",
            borderRadius: "sm",
            width: "223px"
          })]
        }, _v1))
      }) : 0 !== _v4.length || _v2 ? (0, _v1.jsxs)(_v19.Box, {
        children: [(0, _v1.jsxs)(_v20.Text, {
          variant: "heading-md",
          children: [_v4.length, " results"]
        }), (0, _v1.jsxs)(_v20.Text, {
          as: "p",
          variant: "body-md",
          color: "text/secondary",
          mb: "md",
          children: ["for ", (0, _v1.jsx)("b", {
            children: _v3
          }), " in All Categories"]
        }), (0, _v1.jsx)(_v4.Flex, {
          direction: "column",
          children: _v4.map(_v0 => {
            var _v1;
            let _v2;
            return (0, _v1.jsx)(_v4.Flex, {
              as: _v22.Button,
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
                children: [(0, _v1.jsx)(_v20.Text, {
                  variant: "heading-xs",
                  children: _v78(_v0.title, 30)
                }), (0, _v1.jsx)(_v20.Text, {
                  variant: "body-md",
                  whiteSpace: "normal",
                  children: (_v1 = _v0.content, (_v2 = new DOMParser().parseFromString(_v1, "text/html").body.textContent || "").length <= 85 ? _v2 : _v2.substring(0, 85) + "...")
                })]
              })
            }, _v0.id);
          })
        })]
      }) : (0, _v1.jsx)(_v19.Box, {
        p: 4,
        children: "No results found."
      });
    },
    _v84 = () => {
      let {
          goToArticleList: _v0,
          data: _v1
        } = _v41(),
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
        } = _v42(_v32),
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
        children: (0, _v1.jsx)(_v21.Spinner, {
          size: "lg"
        })
      }) : _v4 ? (0, _v1.jsx)(_v19.Box, {
        p: 4,
        color: "status-destructive-primary",
        children: "Failed to load section content. Please try again."
      }) : (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        gap: "sm",
        children: _v6.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
          as: _v22.Button,
          variant: "tertiary",
          borderRadius: "md",
          p: "sm",
          height: "100%",
          alignItems: "flex-start",
          onClick: () => _v0(_v0),
          children: [(0, _v1.jsx)(_v20.Text, {
            flex: "1",
            variant: "body-md",
            textAlign: "left",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: "0",
            children: _v0.title
          }), (0, _v1.jsx)(_v23.ChevronRightSmall, {})]
        }, _v0.id))
      });
    },
    _v85 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v11.useViewer)(),
        {
          isPanelOpen: _v3,
          currentPage: _v4,
          history: _v5,
          data: _v6
        } = _v41();
      (0, _v3.useEffect)(() => {
        (async () => {
          try {
            await _v80(), console.log("Zendesk widget initialized and hidden, ready for widgetOpen call.");
          } catch (_v0) {
            console.error("Failed to initialize Zendesk widget:", _v0);
          }
        })();
      }, []);
      let _v7 = (0, _v3.useMemo)(() => {
        let _v0 = _v5.length > 0 && "home" !== _v4,
          _v1 = "home" === _v4 || "search" === _v4,
          _v2 = "home" === _v4 && !!_v2?.user?.id,
          _v3 = "";
        switch (_v4) {
          case "home":
          case "search":
          default:
            _v3 = "Help";
            break;
          case "section":
            _v3 = _v6?.section?.title || "Section";
            break;
          case "article":
            _v3 = _v6?.article?.title || "Article";
            break;
          case "article_list":
            _v3 = _v6?.article_list?.title || "Article List";
        }
        return {
          title: _v3,
          showBackButton: _v0,
          showSearchButton: _v1,
          showContactUsMenu: _v1,
          showViewRequestsButton: _v2
        };
      }, [_v4, _v5, _v6, _v2?.user?.id]);
      return _v3 ? (0, _v1.jsxs)(_v19.Box, {
        ref: _v1,
        position: "absolute",
        top: "100%",
        right: "lg",
        width: "360px",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height: "calc(100vh - 84px)",
        bg: "var(--vimeo-colors-surface)",
        boxShadow: "0px 0px 24px -5px rgba(0, 0, 0, 0.16), 0px 0px 4px 0px rgba(0, 0, 0, 0.08)",
        borderRadius: "md",
        padding: "md",
        gap: "lg",
        isolation: "isolate",
        fontFamily: "body",
        backdropFilter: "blur(12px)",
        children: [(0, _v1.jsx)(_v82, {
          ..._v7
        }), (0, _v1.jsx)(_v19.Box, {
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
                return (0, _v1.jsx)(_v63, {});
              case "section":
                return (0, _v1.jsx)(_v84, {});
              case "article_list":
                return (0, _v1.jsx)(_v51, {});
              case "article":
                return (0, _v1.jsx)(_v53, {});
              case "search":
                return (0, _v1.jsx)(_v83, {});
            }
          })(_v4)
        })]
      }) : null;
    });
  var _v86 = _v0.i(0);
  let _v87 = (_v0, _v1, _v2, _v3) => {
      setTimeout(() => {
        let _v0 = document.getElementById(_v0);
        _v0 && _v0.addEventListener("click", function () {
          let _v0;
          (_v0 = document.getElementById(_v1)) && (_v0.style.display = "none"), _v87(_v2, _v3, _v0, _v1);
        });
      }, 0);
    },
    _v88 = () => {
      let _v0 = (0, _v11.useViewer)(),
        {
          openPanel: _v1,
          closePanel: _v2,
          isPanelOpen: _v3
        } = _v41(),
        {
          trackHeaderHelpButtonClicked: _v4
        } = (0, _v10.useHeaderTracking)(),
        _v5 = _v49(),
        _v6 = (0, _v3.useRef)(null),
        _v7 = (0, _v3.useRef)(null),
        _v8 = (0, _v3.useMemo)(() => _v0?.teamUser?.ownerId ?? _v0?.user?.id, [_v0?.teamUser?.ownerId, _v0?.user?.id]),
        {
          capabilities: _v9
        } = (0, _v17.useCapability)(["hasEnterprise"], _v8),
        _v10 = _v9.hasEnterprise,
        _v11 = _v0?.locale,
        _v12 = _v0?.isSimplifiedSite,
        _v13 = (0, _v3.useMemo)(() => "en" === _v11, [_v11]),
        _v14 = (() => {
          let {
            settings: _v0
          } = (0, _v86.useOrionSettings)();
          return _v0.in_product_support_panel;
        })() && _v13 && !_v12,
        _v15 = (0, _v3.useMemo)(() => _v14 ? {
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
        }, [_v14, _v10]),
        _v16 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0.target;
          _v7.current?.contains(_v1) || _v6.current?.contains(_v1) || _v2();
        }, [_v2]);
      return (0, _v3.useEffect)(() => (document.addEventListener("click", _v16, !0), () => {
        document.removeEventListener("click", _v16, !0);
      }), [_v16]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v15.Tooltip, {
          isDisabled: _v10 || _v3,
          label: (0, _v18.translate)({
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
          children: (0, _v1.jsx)(_v14.IconButton, {
            ref: _v6,
            "aria-label": "help_button",
            icon: (0, _v1.jsx)(_v16.QuestionCircle, {}),
            variant: "tertiary",
            onClick: () => {
              _v4(), _v14 ? _v3 ? _v2() : (_v1(_v10), _v5({
                eventName: "vimeo.in_app_support_panel_launch_button",
                element: "button"
              })) : (_v87("pendo-link-9e2e9ac7-1", "pendo-g-gGIq9Pjwp5KjK6P-yRQzNQ_Zy-g", "pendo-left-caret-229848f1", "pendo-g-0VqsBgo3lrYNn-v0y0Mj3DYh46k"), (0, _v12.trackNavigationActionEvent)({
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
            ..._v15
          })
        }), _v14 && (0, _v1.jsx)(_v85, {
          ref: _v7
        })]
      });
    },
    _v89 = () => (0, _v1.jsx)(_v40, {
      children: (0, _v1.jsx)(_v88, {})
    });
  _v0.s(["HelpCTA", 0, _v89], 0);
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = (0, _v18.translate)({
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
    _v105 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v106 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v107 = (0, _v2.default)(async () => {
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
    _v108 = (0, _v2.default)(async () => {
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
  function _v109({
    hasUploader: _v0
  }) {
    let _v1 = (0, _v11.useViewer)();
    return !_v1 || _v1.teamUser?.plainTextPermissionLevel === "Viewer" || _v1.isSimplifiedSite ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v110, {
      viewer: _v1,
      hasUploader: _v0
    });
  }
  function _v110({
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
      } = (0, _v17.useCapability)(["hasCreation", "canManageTeamCollections"]),
      _v7 = _v4.hasCreation && !_v5 && !_v6,
      _v8 = _v4.canManageTeamCollections && !_v5 && !_v6,
      [_v9, _v10] = (0, _v3.useState)(!1),
      [_v11, _v12] = (0, _v3.useState)(!1),
      {
        capabilities: _v13,
        loading: _v14,
        error: _v15
      } = (0, _v17.useCapability)(["canCreateLiveEvents"], _v3),
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
      } = (0, _v93.useDisclosure)(),
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
        let _v2 = (0, _v101.useToast)(),
          [_v3, _v4] = (0, _v3.useState)(!1),
          _v5 = _v1?.teamUser?.ownerId || _v1?.user?.id,
          {
            capabilities: _v6
          } = (0, _v17.useCapability)(["canCreateAlbums"], _v5),
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
            }] = (0, _v103.usePostUserAlbums)();
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
                  name: _v104
                }
              });
            }, {
              loading: _v7
            }];
          })({
            onFailure: (0, _v3.useCallback)(() => {
              _v2({
                title: (0, _v18.translate)({
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
                icon: (0, _v1.jsx)(_v102.CircleExclamationFilled, {
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
      children: [(0, _v1.jsxs)(_v94.NestedMenu, {
        positioning: {
          placement: "bottom-end"
        },
        children: [(0, _v1.jsx)(_v94.NestedMenuTrigger, {
          onClick: _v0 => {
            _v2 && (_v0.preventDefault(), _v28()), (0, _v12.trackNavigationActionEvent)({
              copy: "new",
              element: "dropdown_header",
              viewer: _v0
            }), _v35();
          },
          as: _v22.Button,
          variant: "primary",
          size: {
            base: "sm",
            sm: "md"
          },
          "data-id": "new_content_menu_button",
          leftIcon: (0, _v1.jsx)(_v100.PlusSmall, {}),
          children: (0, _v18.translate)({
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
        }), (0, _v1.jsx)(_v94.NestedMenuPositioner, {
          children: (0, _v1.jsxs)(_v94.NestedMenuContent, {
            minWidth: (0, _v5.rem)(202),
            children: [(0, _v1.jsxs)(_v94.NestedMenuItem, {
              id: "upload",
              value: "upload",
              as: _v92.default,
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
              children: [(0, _v1.jsx)(_v96.Upload, {}), " ", (0, _v18.translate)({
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
            }), _v1 ? (0, _v1.jsxs)(_v94.NestedMenuItem, {
              id: "import",
              value: "import",
              onClick: () => {
                _v12(!0), _v36({
                  createMenuItem: "import"
                });
              },
              children: [(0, _v1.jsx)(_v99.DownloadImport, {}), " ", (0, _v18.translate)({
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
            }) : null, (0, _v1.jsx)(_v94.NestedMenuDivider, {}), _v7 && (0, _v1.jsxs)(_v94.NestedMenuItem, {
              id: "create",
              value: "create",
              as: _v92.default,
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
              children: [(0, _v1.jsx)(_v98.ClapperBoard, {}), " ", (0, _v18.translate)({
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
            }), (0, _v1.jsxs)(_v94.NestedMenuItem, {
              id: "record",
              value: "record",
              as: _v92.default,
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
              children: [(0, _v1.jsx)(_v97.Record, {}), " ", (0, _v18.translate)({
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
            }), _v16 && (0, _v1.jsxs)(_v94.NestedMenuItem, {
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
              children: [(0, _v1.jsx)(_v58.CameraOn, {}), " ", (0, _v18.translate)({
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
            }), _v30 && (0, _v1.jsxs)(_v94.NestedMenuItem, {
              id: "showcase",
              value: "showcase",
              disabled: _v31,
              onClick: () => {
                _v36({
                  createMenuItem: "showcase"
                }), _v33();
              },
              children: [(0, _v1.jsx)(_v95._3GridLeftLayout, {}), " ", (0, _v18.translate)({
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
        }), (0, _v1.jsx)(_v107, {
          active: _v9,
          activeSet: _v10
        })]
      }), (0, _v1.jsx)(_v108, {
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
      }), _v32 && (0, _v1.jsx)(_v105, {
        apiUrl: _v0?.apiUrl,
        onClose: () => _v34(!1),
        templateType: "default",
        tracking: {
          params: {
            feature: "showcases",
            location: "top_navigation_bar",
            page: (0, _v43.getPageNameFromPath)(window.location.pathname, _v0?.user) || "ss_lihp",
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
      }), _v11 ? (0, _v1.jsx)(_v106, {
        isOpen: _v11,
        setIsOpen: _v12,
        referrerPage: "create_menu",
        isAutomatic: !1
      }) : null]
    });
  }
  let _v111 = (0, _v0.i(0).buildUpgradePlanUrl)({
      paywallTrigger: "top_nav_bar_pricing_button",
      paywallLocation: "top_navigation",
      paywallFeature: "general"
    }),
    _v112 = () => {
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
      }, [_v1]), (0, _v1.jsx)(_v22.Button, {
        variant: "tertiary",
        as: "a",
        href: _v111,
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
        children: (0, _v18.translate)({
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
  _v0.s(["PricingCTA", 0, _v112], 0);
  var _v113 = _v0.i(0),
    _v114 = _v0.i(0);
  let _v115 = ({
    isSideNavActive: _v0,
    setIsSideNavActive: _v1
  }) => {
    let _v2 = (0, _v11.useViewer)();
    return (0, _v1.jsx)(_v14.IconButton, {
      "aria-label": "open-sidenav",
      icon: (0, _v1.jsx)(_v114.Menu, {}),
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
  _v0.s(["SideNavToggle", 0, _v115], 0);
  let _v116 = ({
      itemsCount: _v0
    }) => {
      let _v1 = (0, _v12.useTrackNavigationEvent)();
      return _v0 && 0 !== _v0 ? (0, _v1.jsx)(_v15.Tooltip, {
        label: (0, _v18.translate)({
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
        children: (0, _v1.jsx)(_v14.IconButton, {
          "aria-label": "cart_link",
          icon: (0, _v1.jsx)(_v59, {}),
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
    _v117 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).LoginJoinModal
    }), {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["DefaultNavigation", 0, ({
    fixed: _v0 = !0,
    hasSearch: _v1 = !0,
    hasThemeSupport: _v2 = !0,
    isSideNavActive: _v3,
    setIsSideNavActive: _v4,
    hasUploader: _v5 = !1,
    alwaysMinimiseSearch: _v6 = !1,
    isNewSidebar: _v7 = !1
  }) => {
    let _v8 = (0, _v3.useContext)(_v34.ViewerContext),
      _v9 = _v8?.user,
      [_v10, _v11] = (0, _v3.useState)(!1),
      _v12 = (0, _v6.useBreakpointValue)({
        base: !1,
        lg: !0
      }),
      _v13 = (0, _v6.useBreakpointValue)({
        base: !0,
        md: !1
      }),
      _v14 = (0, _v6.useBreakpointValue)({
        base: !0,
        sm: !1
      }),
      _v15 = _v10 && _v13;
    _v6 && (_v12 = !1);
    let _v16 = !_v12 && _v10 || _v14,
      [_v17, _v18] = (0, _v3.useState)(),
      _v19 = _v8?.isSimplifiedSite,
      _v20 = _v8?.isEnterpriseSite;
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
      children: [(0, _v1.jsxs)(_v7.Navigation.LeftContent, {
        width: _v12 ? "100%" : "unset",
        gap: {
          base: "sm",
          md: "md"
        },
        flexShrink: _v12 ? void 0 : 0,
        zIndex: 1,
        children: [_v4 && (0, _v1.jsx)(_v115, {
          isSideNavActive: !!_v3,
          setIsSideNavActive: _v4
        }), (0, _v1.jsx)(_v7.Navigation.VimeoLogo, {
          display: _v3 ? "none" : "flex",
          marginLeft: _v7 ? (0, _v5.rem)(-24) : void 0
        }), _v1 && _v12 && (0, _v1.jsx)(_v4.Flex, {
          flexGrow: 1,
          minWidth: 0,
          marginLeft: _v7 && !_v3 ? (0, _v5.rem)(26) : void 0,
          children: (0, _v1.jsx)(_v113.Search, {})
        })]
      }), (0, _v1.jsx)(_v7.Navigation.RightContent, {
        justifyContent: "end",
        width: _v12 ? "unset" : "100%",
        gap: {
          base: "sm",
          md: "md"
        },
        children: (0, _v1.jsx)(_v91.LoginJoinModalContext.Provider, {
          value: {
            modal: _v17,
            setModal: _v18
          },
          children: (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            gap: {
              base: "xs",
              md: (0, _v5.rem)(12)
            },
            flexGrow: "1",
            justifyContent: "end",
            children: [!_v16 && (0, _v1.jsx)(_v7.Navigation.Upgrade, {
              viewer: _v8
            }), _v1 && !_v12 && (0, _v1.jsx)(_v113.Search, {
              withToggle: !0,
              updateGlobalNavSearchState: _v11
            }), !_v15 && !_v19 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v89, {}), (0, _v1.jsx)(_v13, {}), (0, _v1.jsx)(_v116, {
                itemsCount: _v8?.cart?.itemsCount
              })]
            }), _v8 && !_v9 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [!_v16 && !_v20 && (0, _v1.jsx)(_v112, {}), !(_v14 && _v10) && (0, _v1.jsx)(_v90.Login, {})]
            }), !_v15 && (_v9 ? (0, _v1.jsx)(_v109, {
              hasUploader: _v5
            }) : _v8 && !_v20 && (0, _v1.jsx)(_v90.Join, {})), !(_v14 && _v10) && (0, _v1.jsx)(_v8.AccountMenu, {
              hasThemeSupport: _v2
            }), _v8 && !_v9 && _v17 && (0, _v1.jsx)(_v117, {})]
          })
        })
      })]
    });
  }], 0);
}