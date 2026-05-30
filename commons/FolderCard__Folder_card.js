{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["FolderCard", 0, ({
    title: _v0,
    subtitle: _v1,
    backgroundColor: _v2,
    tagText: _v3,
    href: _v4,
    actionsMenu: _v5,
    hoverActions: _v6,
    onClick: _v7,
    width: _v8,
    titleStyles: _v9
  }) => (0, _v1.jsxs)(_v3.ContentCard, {
    href: _v4,
    onClick: _v7,
    width: _v8,
    ariaLabel: "Folder card",
    children: [(0, _v1.jsxs)(_v3.ContentCard.Body, {
      children: [(0, _v1.jsx)(_v2.FolderCardThumbnail, {
        backgroundColor: _v2
      }), _v6, _v3 && (0, _v1.jsx)(_v3.ContentCard.Badge, {
        content: _v3,
        children: _v3
      })]
    }), (0, _v1.jsx)(_v3.ContentCard.Footer, {
      actions: _v5,
      title: _v0,
      subtitle: _v1,
      titleStyles: _v9
    })]
  })]);
}