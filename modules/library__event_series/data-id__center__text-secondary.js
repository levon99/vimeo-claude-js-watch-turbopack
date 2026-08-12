{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6({
    actions: _v0,
    subtitle: _v1,
    title: _v2,
    titleDataId: _v3
  }) {
    return (0, _v1.jsxs)(_v6.Wrapper, {
      children: [(0, _v1.jsxs)(_v6.LeftContent, {
        children: [(0, _v1.jsx)(_v7, {
          dataId: _v3,
          children: _v2
        }), _v1 && (0, _v1.jsx)(_v6.Subtitle, {
          children: _v1
        })]
      }), (0, _v1.jsx)(_v6.Actions, {
        children: _v0
      })]
    });
  }
  let _v7 = ({
    dataId: _v0,
    children: _v1
  }) => (0, _v1.jsx)(_v4.Header, {
    "data-id": _v0,
    size: "2xl",
    children: _v1
  });
  _v6.Actions = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    alignItems: "center",
    columnGap: "md",
    children: _v0
  }), _v6.Title = _v7, _v6.Subtitle = ({
    children: _v0
  }) => (0, _v1.jsx)(_v5.Paragraph, {
    color: "text-secondary",
    size: "md",
    children: _v0
  }), _v6.Wrapper = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    zIndex: "12",
    background: "background",
    as: "header",
    width: "100%",
    top: (0, _v2.rem)(64),
    backgroundColor: "background",
    paddingTop: (0, _v2.rem)(30),
    paddingBottom: (0, _v2.rem)(16),
    children: _v0
  }), _v6.LeftContent = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    direction: "column",
    alignItems: "flex-start",
    gap: (0, _v2.rem)(4),
    minHeight: "2.5rem",
    children: _v0
  }), _v0.s(["PageHeader", 0, _v6]);
}