{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["VideoThumbnail", 0, ({
    alt: _v0,
    badgeText: _v1,
    isDefaultPicture: _v2,
    thumbnailSrc: _v3,
    isLocked: _v4
  }) => !_v2 && _v3 ? (0, _v1.jsx)(_v3.ContentRow.Thumbnail, {
    alt: _v0,
    src: _v3,
    badgeText: _v1,
    isLocked: _v4
  }) : (0, _v1.jsx)(_v3.ContentRow.DefaultThumbnail, {
    children: (0, _v1.jsx)(_v2.PlayerFilled, {
      color: "text-tertiary",
      boxSize: "sm",
      opacity: "60%"
    })
  })]);
}