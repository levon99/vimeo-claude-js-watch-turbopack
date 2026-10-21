{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v3.memo)(({
    listItems: _v0,
    wrapperOverrides: _v1,
    canLoadMore: _v2,
    isFetchingMore: _v3,
    loadMore: _v4,
    virtualizerOptions: _v5
  }) => {
    let _v6 = (0, _v3.useRef)(null),
      _v7 = (0, _v2.useVirtualizer)({
        count: _v0.length,
        getScrollElement: () => _v6.current,
        estimateSize: () => 50,
        measureElement: _v0 => _v0.getBoundingClientRect().height,
        overscan: 5,
        gap: 16,
        ..._v5
      }),
      _v8 = _v7.getVirtualItems();
    return (0, _v3.useEffect)(() => {
      let _v0 = _v8.at(-1);
      _v0 && _v0.index >= _v0.length - 1 && _v2 && !_v3 && _v4 && _v4();
    }, [_v0.length, _v4, _v2, _v3, _v8]), (0, _v1.jsx)(_v6.Flex, {
      ref: _v6,
      overflowX: "hidden",
      overflowY: "auto",
      ..._v1,
      "data-testid": "virtualized-list-parent",
      children: (0, _v1.jsx)(_v5.VStack, {
        position: "relative",
        w: "100%",
        h: _v7.getTotalSize(),
        gap: 0,
        "data-testid": "virtualized-list",
        children: _v8.map(_v0 => {
          let _v1 = _v0[_v0.index];
          return _v1 ? (0, _v1.jsx)(_v4.Box, {
            ref: _v0 => _v7.measureElement(_v0),
            position: "absolute",
            top: 0,
            left: 0,
            w: "100%",
            "data-index": _v0.index,
            transform: _v0 ? `translateY(${_v0.start}px)` : void 0,
            "data-testid": `virtualized-list-item-${_v0.index}`,
            children: _v1
          }, _v0.key) : null;
        })
      })
    });
  });
  _v0.s(["VirtualizedList", 0, _v7]);
}