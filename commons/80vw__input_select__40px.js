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
  let _v13 = _v11.keyframes`
  from {
    width: ${(0, _v5.rem)(35)};
    opacity: 0;
  }

  to {
    max-width: ${(0, _v5.rem)(_v12.EXPANDED_SEARCH_WIDTH)};
    width: 100%;
    opacity: 1;
  }
`,
    _v14 = (0, _v10.bokeh)("div", {
      baseStyle: {
        top: "50%",
        maxW: "80vw",
        zIndex: 3,
        animation: `${_v13} 250ms ease forwards`,
        "input, select": {
          height: "40px"
        },
        "[aria-busy=true]": {
          animation: `${_v13} 250ms ease forwards`,
          right: 0
        },
        ".search-menu": {
          bgColor: "fill-surface !important"
        }
      }
    });
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18({
    ..._v0
  }) {
    return (0, _v1.jsx)(_v15.IconButton, {
      "aria-label": (0, _v17.translate)({
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
      id: "searchToggle",
      icon: (0, _v1.jsx)(_v16.SearchMagnifier, {}),
      variant: "tertiary",
      size: {
        base: "sm",
        sm: "md"
      },
      ..._v0
    });
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = () => {
    let _v0 = (0, _v2.useContext)(_v21.ViewerContext),
      {
        capabilities: {
          hasPaid: _v1
        }
      } = (0, _v20.useCapability)(["hasPaid"]),
      {
        capabilities: {
          hasPublicSearchDisabled: _v2,
          hasEnterprise: _v3,
          hasAutoClosedCaptions: _v4,
          hasOcrSearch: _v5,
          hasPrecisionSearch: _v6,
          hasInVideoSearch: _v7,
          hasContentSpaceEnabled: _v8
        }
      } = (0, _v20.useCapability)(["hasPublicSearchDisabled", "hasEnterprise", "hasAutoClosedCaptions", "hasOcrSearch", "hasPrecisionSearch", "hasInVideoSearch", "hasContentSpaceEnabled"], _v0?.teamUser?.ownerId),
      _v9 = _v0?.isFromCopyrightRestrictedRegion,
      _v10 = (0, _v22.isPublicSearchAvailable)(_v2, _v0),
      _v11 = !!_v0?.user && _v10;
    return {
      hasEnterprise: _v3,
      hasPublicSearchDisabled: !_v10,
      hasCaptionsSearch: _v4,
      hasOcrSearch: _v5,
      hasSearchTypesDropdown: _v11,
      hasPrecisionSearch: _v6,
      hasInVideoSearch: _v7,
      canSeeViewerHome: !_v0?.isSimplifiedSite,
      hasTemplates: !_v0?.isSimplifiedSite,
      hasOmnisearch: !(!_v0?.user && _v9),
      hasContentSpaceEnabled: _v8,
      hasPaid: _v1
    };
  };
  _v0.s(["useSearchCapabilities", 0, _v23], 0);
  let _v24 = _v2.default.lazy(() => _v0.A(0)),
    _v25 = _v2.default.lazy(() => _v0.A(0)),
    _v26 = ({
      children: _v0
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.BokehOnly, {
        children: (0, _v1.jsx)(_v4.Skeleton, {
          maxW: "500px",
          w: "100%",
          h: "40px",
          borderRadius: "12px"
        })
      }), (0, _v1.jsx)(_v7.IrisOnly, {
        children: _v0
      })]
    });
  _v0.s(["SearchField", 0, function (_v0) {
    let [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(),
      {
        hasOmnisearch: _v5,
        hasPaid: _v6,
        ..._v7
      } = _v23(),
      {
        withToggle: _v8,
        updateGlobalNavSearchState: _v9,
        ..._v10
      } = _v0,
      {
        folderName: _v11
      } = (0, _v2.useContext)(_v19.OmnisearchContext),
      {
        settings: _v12
      } = (0, _v8.useOrionSettings)(),
      _v13 = (0, _v9.shouldShowInDevelopmentFeature)("has_new_omnisearch", !0),
      _v14 = _v12.enable_omnisearch_folder_scoped_request_fix,
      _v15 = _v7.hasSearchTypesDropdown ? _v12.PADDING_FOR_MODE_SWITCHER : 0;
    (0, _v2.useEffect)(() => {
      (() => {
        let _v0 = _v0.leftNavbarRef?.current;
        if (_v0 && _v1) {
          let _v0 = _v0.getClientRects();
          if (_v0.length > 0) {
            let _v0,
              _v1,
              _v2 = _v0[0].right,
              _v3 = (_v0 = document.getElementById("search-wrapper"), (_v1 = _v0?.getClientRects()) && _v1.length > 0 ? _v1[0].left : 0);
            _v3 > 0 && _v2 > _v3 - _v12.EXPANDED_SEARCH_WIDTH && (_v0.style.cssText = _v0.fadeOutLeftNav ? "transition: opacity 250ms ease; opacity: 0;" : "filter: blur(1.5px);");
          }
        } else _v0 && _v0.removeAttribute("style");
      })();
    }, [_v0.leftNavbarRef, _v1, _v7.hasSearchTypesDropdown, _v0.fadeOutLeftNav]), (0, _v2.useEffect)(() => {
      _v9?.(_v1);
    }, [_v1, _v9]);
    let _v16 = (0, _v2.useCallback)(_v0 => {
      (/mac/i.test(navigator.platform) ? _v0.metaKey : _v0.ctrlKey) && "k" === _v0.key && (_v0.preventDefault(), _v8 && _v2(_v0 => !_v0));
    }, [_v8]);
    return ((0, _v2.useEffect)(() => {
      if (!_v13) return document.addEventListener("keydown", _v16), () => {
        document.removeEventListener("keydown", _v16);
      };
    }, [_v16, _v13]), _v5) ? _v13 ? (0, _v1.jsx)(_v1.Fragment, {}) : _v8 ? (0, _v1.jsx)(_v3.Flex, {
      justifyContent: "flex-end",
      marginLeft: _v0.showRefreshedLihpChanges ? (0, _v5.rem)(14) : "unset",
      grow: _v1 ? 1 : "unset",
      children: _v1 ? (0, _v1.jsx)(_v14, {
        id: "search-wrapper",
        sx: _v0.inputStyle,
        children: (0, _v1.jsx)(_v2.Suspense, {
          fallback: (0, _v1.jsx)(_v26, {
            children: (0, _v1.jsx)(_v25, {
              paddingLeft: _v15,
              onChange: _v4,
              isFallBack: !0
            })
          }),
          children: (0, _v1.jsx)(_v24, {
            ..._v10,
            ..._v7,
            enableFolderScopedSearchRequestFix: _v14,
            setShowSearchInput: () => (0, _v2.startTransition)(() => _v2(!1)),
            autoFocus: !0,
            "data-testid": _v0["data-testid"],
            folderName: _v11
          })
        })
      }) : (0, _v1.jsx)(_v18, {
        "data-testid": _v0["data-testid"] ? `${_v0["data-testid"]}-toggle` : void 0,
        onClick: () => (0, _v2.startTransition)(() => _v2(!0))
      })
    }) : (0, _v1.jsx)(_v2.Suspense, {
      fallback: (0, _v1.jsx)(_v26, {
        children: (0, _v1.jsx)(_v25, {
          paddingLeft: _v15,
          onChange: _v4,
          isFallBack: !0
        })
      }),
      children: (0, _v1.jsx)(_v24, {
        ..._v10,
        ..._v7,
        enableFolderScopedSearchRequestFix: _v14,
        "data-testid": _v0["data-testid"],
        folderName: _v11,
        changeEvent: _v3,
        width: _v0.width,
        maxWidth: _v0.maxWidth
      })
    }) : null;
  }], 0);
}