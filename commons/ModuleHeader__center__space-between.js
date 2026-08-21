{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["ModuleHeader", 0, ({
    onClose: _v0,
    text: _v1,
    count: _v2,
    children: _v3,
    searchInputRef: _v4,
    showCommentSearchBar: _v5,
    updateCommentSearchQuery: _v6,
    onCloseSearch: _v7
  }) => _v5 ? (0, _v1.jsx)(_v2.Flex, {
    align: "center",
    justify: "space-between",
    p: "lg",
    children: (0, _v1.jsx)(_v4.SearchComments, {
      updateCommentSearchQuery: _v6,
      onCloseSearch: _v7,
      searchInputRef: _v4
    })
  }) : (0, _v1.jsx)(_v3.ModuleHeader, {
    onClose: _v0,
    text: _v1,
    secondaryText: _v2,
    children: _v3
  })]);
}