{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["FileRowThumbnail", 0, ({
    name: _v0,
    contentType: _v1,
    thumbnailSrc: _v2
  }) => null != _v2 && "" !== _v2 ? (0, _v1.jsx)(_v3.ContentRow.Thumbnail, {
    alt: _v0,
    src: _v2
  }) : (0, _v1.jsx)(_v3.ContentRow.DefaultThumbnail, {
    background: "gray.200",
    children: (0, _v1.jsx)(_v2.FileThumbnailContent, {
      name: _v0,
      contentType: _v1,
      size: "list"
    })
  })]);
}