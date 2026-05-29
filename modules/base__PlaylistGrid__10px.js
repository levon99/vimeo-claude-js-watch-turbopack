{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = 5,
    _v10 = ({
      numColumns: _v0 = _v9,
      maxRows: _v1,
      children: _v2,
      ..._v3
    }) => {
      let {
          outerSpacing: _v4,
          gap: _v5
        } = (0, _v8.usePlaylistStyles)(),
        _v6 = "object" == typeof _v0 ? {
          base: _v9,
          ..._v0
        } : {
          base: _v0
        },
        _v7 = (0, _v7.useBreakpointValue)(_v6, {
          fallback: "base",
          ssr: !1
        }) ?? _v9,
        _v8 = void 0 === _v1 ? _v2 : _v2.default.Children.toArray(_v2).slice(0, _v1 * _v7);
      return (0, _v1.jsx)(_v6.Grid, {
        gridTemplateColumns: `repeat(${_v7}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${_v1}, minmax(0, 1fr))`,
        gap: _v5,
        px: _v4,
        pb: _v4,
        ..._v3,
        children: _v8
      });
    };
  _v0.s(["PlaylistGrid", 0, _v10], 0);
  let _v11 = _v0 => (0, _v1.jsx)(_v5.Skeleton, {
      minH: "10px",
      w: "100%",
      borderRadius: "xs",
      ..._v0
    }),
    _v12 = ({
      isLeadingIcon: _v0 = !0,
      numOfLines: _v1 = 2,
      ..._v2
    }) => (0, _v1.jsxs)(_v3.VStack, {
      pb: "75",
      ..._v2,
      children: [(0, _v1.jsx)(_v11, {
        h: 0,
        paddingBottom: "56.25%",
        borderRadius: "md"
      }), (0, _v1.jsxs)(_v4.HStack, {
        w: "100%",
        alignItems: "flex-start",
        children: [_v0 ? (0, _v1.jsx)(_v11, {
          borderRadius: "round",
          w: "xs",
          h: "xs"
        }) : null, (0, _v1.jsxs)(_v3.VStack, {
          flex: "1",
          alignItems: "flex-start",
          children: [_v1 > 0 ? (0, _v1.jsx)(_v11, {
            h: "14px",
            w: "50%"
          }) : null, _v1 > 1 && Array.from({
            length: _v1 - 1
          }).map((_v0, _v1) => (0, _v1.jsx)(_v11, {
            h: "10px",
            w: "30%"
          }, _v1))]
        })]
      })]
    });
  _v0.s(["CarouselSkeleton", 0, ({
    cardWidth: _v0,
    isLeadingIcon: _v1,
    numOfLines: _v2,
    ..._v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(0),
      _v6 = (0, _v2.useRef)(null);
    return (0, _v2.useLayoutEffect)(() => {
      if (!_v6.current) return;
      let _v0 = Math.floor(_v6.current.offsetWidth / ("string" == typeof _v0 ? parseInt(_v0, 10) : _v0));
      _v0 > 0 && _v5(_v0);
    }, [_v0]), (0, _v1.jsxs)(_v3.VStack, {
      ref: _v6,
      align: "flex-start",
      gap: 300,
      py: 300,
      bgColor: "background",
      overflow: "hidden",
      borderRadius: "drawer",
      ..._v3,
      children: [(0, _v1.jsx)(_v11, {
        w: "150px",
        h: "1.875rem"
      }), (0, _v1.jsx)(_v4.HStack, {
        gap: 300,
        children: Array.from({
          length: _v4
        }, (_v0, _v1) => (0, _v1.jsx)(_v12, {
          w: _v0,
          isLeadingIcon: _v1,
          numOfLines: _v2
        }, _v1))
      })]
    });
  }, "GridSkeleton", 0, () => (0, _v1.jsxs)(_v3.VStack, {
    align: "flex-start",
    gap: "300",
    p: "300",
    children: [(0, _v1.jsx)(_v11, {
      w: "150px",
      h: "1.875rem"
    }), (0, _v1.jsx)(_v10, {
      numColumns: {
        base: 1,
        sm: 2,
        md: 3
      },
      w: "100%",
      p: "0",
      children: Array.from({
        length: 6
      }).map((_v0, _v1) => (0, _v1.jsx)(_v12, {
        numOfLines: 3
      }, `playlist-loading-skeleton-${_v1}`))
    })]
  }), "Skeleton", 0, _v11, "VideoCardSkeleton", 0, _v12, "WhatsNextSkeleton", 0, ({
    cardWidth: _v0,
    ..._v1
  }) => {
    let _v2 = "string" == typeof _v0 ? parseInt(_v0, 10) : _v0,
      _v3 = _v2 < 730;
    return (0, _v1.jsxs)(_v4.HStack, {
      align: "flex-start",
      gap: 300,
      p: 300,
      bgColor: "background",
      overflow: "hidden",
      borderRadius: "drawer",
      height: "350px",
      ..._v1,
      children: [!_v3 && (0, _v1.jsx)(_v3.VStack, {
        children: [1, 2, 3].map((_v0, _v1) => (0, _v1.jsx)(_v11, {
          w: _v2 / 2,
          h: "1.875rem"
        }, `whatsnext-skeleton-text-${_v1}`))
      }), (0, _v1.jsx)(_v12, {
        w: _v3 ? _v2 : _v2 / 2,
        h: "350px"
      })]
    });
  }], 0);
}