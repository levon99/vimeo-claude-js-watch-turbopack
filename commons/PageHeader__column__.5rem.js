{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["PageHeader", 0, ({
    actions: _v0,
    bottomBar: _v1,
    breadcrumbs: _v2,
    editableTitle: _v3,
    isEditingTitle: _v4,
    isTitleLoading: _v5 = !1,
    title: _v6
  }) => {
    let {
      settings: _v7
    } = (0, _v8.useOrionSettings)();
    return (0, _v1.jsxs)(_v3.Flex, {
      flexDirection: "column",
      gap: ".5rem",
      width: "100%",
      children: [(0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        gap: ".75rem",
        width: "100%",
        children: [_v2, (0, _v1.jsxs)(_v3.Flex, {
          alignItems: "flex-start",
          justifyContent: "space-between",
          children: [_v5 ? (0, _v1.jsx)(_v7.Skeleton, {
            height: (0, _v6.rem)(43),
            width: (0, _v6.rem)(180),
            borderRadius: "sm"
          }) : _v7.enable_rename_folder && _v3 && _v4 ? (0, _v1.jsx)(_v2.Box, {
            width: "50%",
            children: _v3
          }) : (0, _v1.jsx)(_v4.Header, {
            noOfLines: 2,
            variant: {
              base: "heading-lg",
              md: "heading-xl"
            },
            size: "xl",
            children: _v6
          }), (0, _v1.jsx)(_v5.HStack, {
            gap: ".5rem",
            children: _v0
          })]
        })]
      }), _v1]
    });
  }]);
}