{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["EventsSection", 0, ({
    id: _v0,
    title: _v1,
    titleAccessory: _v2,
    action: _v3,
    emptyState: _v4,
    children: _v5,
    ..._v6
  }) => (0, _v1.jsxs)(_v3.Flex, {
    direction: "column",
    id: _v0,
    width: "100%",
    children: [(0, _v1.jsxs)(_v5.SectionOneColumnWrapper, {
      children: [(0, _v1.jsx)(_v5.SectionHeader, {
        accessory: _v2,
        inline: !0,
        children: _v1
      }), _v3]
    }), (0, _v1.jsx)(_v2.Box, {
      ..._v6,
      children: _v4 ?? (0, _v1.jsx)(_v4.EventsGrid, {
        isHorizontalScroll: !0,
        children: _v5
      })
    })]
  })]);
}