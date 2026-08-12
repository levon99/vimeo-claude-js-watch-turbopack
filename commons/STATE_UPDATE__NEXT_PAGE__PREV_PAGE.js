{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (_v0, _v1) => {
      switch (_v1.type) {
        case "STATE_UPDATE":
          return {
            ..._v0,
            ..._v1.payload
          };
        case "NEXT_PAGE":
          {
            let {
              activeIndex: _v0,
              pageSize: _v1,
              totalItems: _v2
            } = _v0;
            if (0 === _v2) return _v0;
            if (_v2 < _v1) return {
              ..._v0,
              activeIndex: 0,
              isFirstPage: !0,
              isLastPage: !1
            };
            let _v3 = _v2 - _v1,
              _v4 = _v0 + _v1 >= _v3;
            return {
              ..._v0,
              isFirstPage: !1,
              isLastPage: _v4,
              activeIndex: _v4 ? _v3 : _v0 + _v1,
              isScrolling: !0
            };
          }
        case "PREV_PAGE":
          {
            let {
                activeIndex: _v0,
                pageSize: _v1
              } = _v0,
              _v2 = _v0 - _v1 <= 0;
            return {
              ..._v0,
              isFirstPage: _v2,
              isLastPage: !1,
              activeIndex: _v2 ? 0 : _v0 - _v1,
              isScrolling: !0
            };
          }
        case "ACTIVE_ITEM_CHANGE":
          {
            let {
                totalItems: _v0,
                pageSize: _v1
              } = _v0,
              {
                activeIndex: _v2,
                isScrolling: _v3 = !1
              } = _v1.payload,
              _v4 = _v0 - _v1,
              _v5 = _v2 >= _v4;
            return {
              ..._v0,
              activeIndex: _v5 ? _v4 : _v2,
              isFirstPage: 0 === _v2,
              isLastPage: _v5,
              isScrolling: _v3
            };
          }
        case "SCROLLED_INTO_VIEW":
          return {
            ..._v0,
            isScrolling: !1
          };
        default:
          return _v0;
      }
    },
    _v5 = {
      activeIndex: 0,
      pageSize: 1,
      totalItems: 0,
      isFirstPage: !0,
      isLastPage: !1
    },
    _v6 = {
      outerSpacing: 400,
      gap: 300,
      isFullbleed: !1
    },
    _v7 = (0, _v3.createContext)({
      styles: _v6,
      state: _v5,
      dispatch: () => {
        throw Error("Not implemented");
      }
    }),
    _v8 = ({
      children: _v0,
      ..._v1
    }) => {
      let [_v2, _v3] = (0, _v3.useReducer)(_v4, _v5),
        _v4 = (0, _v3.useMemo)(() => ({
          styles: {
            ..._v6,
            ...JSON.parse(JSON.stringify(_v1))
          },
          state: _v2,
          dispatch: _v3
        }), [_v2]);
      return (0, _v1.jsx)(_v7.Provider, {
        value: _v4,
        children: _v0
      });
    },
    _v9 = () => {
      let _v0 = (0, _v3.useContext)(_v7);
      if (!_v0) throw Error("usePlaylist must be used within a PlaylistProvider");
      return _v0.styles;
    };
  _v0.s(["PlaylistProvider", 0, _v8, "usePlaylist", 0, () => {
    let _v0 = (0, _v3.useContext)(_v7);
    if (!_v0) throw Error("usePlaylist must be used within a PlaylistProvider");
    return _v0;
  }, "usePlaylistStyles", 0, _v9], 0), _v0.s(["Playlist", 0, function ({
    outerSpacing: _v0,
    isFullbleed: _v1,
    gap: _v2 = 300,
    ref: _v3,
    ..._v4
  }) {
    return (0, _v1.jsx)(_v8, {
      outerSpacing: _v0,
      gap: _v2,
      isFullbleed: _v1,
      children: (0, _v1.jsx)(_v2.Box, {
        "data-testid": "playlist",
        display: "flex",
        flexDirection: "column",
        borderRadius: "drawer",
        gap: _v2,
        ref: _v3,
        ..._v4
      })
    });
  }], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = ({
    text: _v0,
    to: _v1,
    headerLinkDataId: _v2,
    ..._v3
  }) => (0, _v1.jsxs)(_v10.Flex, {
    "data-group": !0,
    "data-id": _v2,
    noOfLines: 1,
    shrink: "1",
    display: "flex",
    ...(_v1 && {
      as: "a",
      href: _v1,
      _hover: {
        color: "text-secondary",
        transition: "all 0.1s ease-in-out",
        mr: "-0.25rem"
      },
      _focusVisible: {
        outlineColor: "focus"
      }
    }),
    ..._v3,
    children: [(0, _v1.jsx)(_v12.Header, {
      noOfLines: 1,
      size: "md",
      color: "text-primary",
      as: "h2",
      children: _v0
    }), _v1 ? (0, _v1.jsx)(_v13.ChevronRightSmall, {
      width: (0, _v11.rem)(24),
      height: (0, _v11.rem)(32),
      verticalAlign: "text-top",
      _groupHover: {
        ml: "0.25rem",
        transition: "margin 0.1s ease-in-out"
      }
    }) : null]
  });
  _v0.s(["PlaylistHeader", 0, ({
    header: _v0,
    children: _v1,
    onClick: _v2,
    ..._v3
  }) => {
    let {
      outerSpacing: _v4
    } = _v9();
    return (0, _v1.jsxs)(_v10.Flex, {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "200",
      pt: _v4,
      ..._v3,
      children: [_v0 ? (0, _v1.jsx)(_v14, {
        ..._v0,
        onClick: _v0.to ? _v2 : void 0
      }) : (0, _v1.jsx)(_v10.Flex, {
        flex: "1"
      }), _v1]
    });
  }], 0);
}