{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ResponsiveWrapper", 0, ({
    children: _v0,
    isLoading: _v1,
    isMobile: _v2,
    numOfColumns: _v3,
    numOfRows: _v4,
    coverCard: _v5
  }) => _v2 ? (0, _v1.jsx)(_v2.Flex, {
    overflowX: "auto",
    overscrollBehavior: "contain auto",
    sx: {
      "-webkit-overflow-scrolling": "touch",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      },
      "a:first-of-type": {
        marginLeft: (0, _v3.rem)(6)
      }
    },
    marginLeft: "-md",
    marginRight: "-md",
    gap: "0",
    paddingRight: "xs",
    children: _v1 ? Array.from({
      length: 3
    }).map((_v0, _v1) => (0, _v1.jsx)(_v4.LoadingCard, {
      flex: "auto"
    }, _v1)) : _v0
  }) : (0, _v1.jsxs)(_v5.PlaylistGrid, {
    maxRows: _v4,
    numColumns: _v3 + +!!_v5,
    paddingBottom: {
      base: "md",
      xl: 0
    },
    pl: 0,
    pr: 0,
    marginRight: "-0.625rem",
    marginLeft: "-sm",
    width: _v1 ? "100%" : "unset",
    gap: {
      base: 0,
      lg: "xs"
    },
    children: [_v5 && (0, _v1.jsx)(_v2.Flex, {
      borderRadius: "xl",
      padding: "0.5rem",
      _hover: {
        background: "fill-component-hover"
      },
      gridRow: "1 / span 2",
      display: "grid",
      children: _v5
    }), _v1 ? Array.from({
      length: _v4 * _v3
    }, (_v0, _v1) => (0, _v1.jsx)(_v6.VideoCardSkeleton, {
      numOfLines: 3,
      p: "sm"
    }, _v1)) : _v0]
  })], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["WatchPlaylistHoverActions", 0, ({
    video: _v0
  }) => {
    let _v1 = _v0?.uri ? parseInt(_v0.uri.split("/").pop() || "0", 10) : 0,
      _v2 = _v0?.metadata?.interactions?.watchlater?.added || !1;
    return (0, _v1.jsxs)(_v7.ContentCard.HoverActions, {
      children: [(0, _v1.jsx)(_v7.ContentCard.HoverAction, {
        children: (0, _v1.jsx)(_v8.WatchLaterAction, {
          videoId: _v1,
          isOnWatchList: _v2
        })
      }), (0, _v1.jsx)(_v7.ContentCard.HoverAction, {
        children: (0, _v1.jsx)(_v9.CopyLinkAction, {
          video: _v0
        })
      })]
    });
  }], 0);
}