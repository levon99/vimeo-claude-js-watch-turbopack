{
  "use strict";

  _v0.s(["getThumbnail", 0, function (_v0, _v1 = {
    maximalAllowedWidth: 960
  }) {
    return _v0?.filter(_v0 => _v0.width <= _v1.maximalAllowedWidth).sort((_v0, _v1) => _v1.width - _v0.width)[0] || null;
  }, "getThumbnailFromUrl", 0, function (_v0, _v1 = {
    width: 640
  }) {
    return _v0 ? {
      width: _v1.width,
      height: _v1.width / (16 / 9),
      link: _v0,
      linkWithPlayButton: ""
    } : null;
  }]);
}