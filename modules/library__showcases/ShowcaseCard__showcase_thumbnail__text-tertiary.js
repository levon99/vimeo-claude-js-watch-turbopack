{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["ShowcaseCard", 0, ({
    title: _v0,
    subtitle: _v1,
    showGrid: _v2 = !1,
    thumbnails: _v3,
    href: _v4,
    actionsMenu: _v5,
    editableTitle: _v6,
    isEditingContentTitle: _v7,
    onClick: _v8,
    titleStyles: _v9,
    onMouseEnter: _v10
  }) => (0, _v1.jsxs)(_v3.ContentCard, {
    href: _v4,
    onClick: _v8,
    onMouseEnter: _v10,
    isEditingContentTitle: _v7,
    children: [(0, _v1.jsx)(_v3.ContentCard.Body, {
      children: _v2 ? (0, _v1.jsx)(_v3.ContentCard.Thumbnail, {
        src: _v3[0],
        alt: "showcase thumbnail"
      }) : _v3[0] ? (0, _v1.jsx)(_v3.ContentCard.ThumbnailGrid, {
        thumbnails: _v3
      }) : (0, _v1.jsx)(_v3.ContentCard.DefaultThumbnail, {
        children: (0, _v1.jsx)(_v2.VideosStackFilled, {
          color: "text-tertiary",
          boxSize: "2xl",
          opacity: "60%"
        })
      })
    }), (0, _v1.jsx)(_v3.ContentCard.Footer, {
      actions: _v5,
      title: _v0,
      subtitle: _v1,
      titleStyles: _v9,
      editableTitle: _v6,
      isEditingContentTitle: _v7
    })]
  })]);
}