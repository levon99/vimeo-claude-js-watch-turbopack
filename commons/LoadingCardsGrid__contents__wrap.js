{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = 5;
  _v0.s(["LoadingCardsGrid", 0, ({
    count: _v0 = _v4
  }) => (0, _v1.jsx)(_v2.Flex, {
    display: "contents",
    flexWrap: "wrap",
    children: Array(_v0).fill(null).map((_v0, _v1) => (0, _v1.jsx)(_v2.Flex, {
      children: (0, _v1.jsx)(_v3.LoadingCard, {})
    }, `loading-state-skeleton-card-grid-${_v1}`))
  })]);
}