{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["FileRowThumbnail", 0, ({
    name: _v0,
    contentType: _v1,
    thumbnailSrc: _v2,
    publicId: _v3,
    isPasswordLocked: _v4 = !1
  }) => {
    let _v5 = (0, _v4.useGetFileUploadThumbnail)(_v3) ?? _v2;
    return null != _v5 && "" !== _v5 ? (0, _v1.jsx)(_v3.ContentRow.Thumbnail, {
      alt: _v0,
      src: _v5,
      isPasswordLocked: _v4
    }) : (0, _v1.jsx)(_v3.ContentRow.DefaultThumbnail, {
      background: "fill-component-hover",
      isPasswordLocked: _v4,
      children: (0, _v1.jsx)(_v2.FileThumbnailContent, {
        name: _v0,
        contentType: _v1,
        size: "list"
      })
    });
  }]);
}