{
  "use strict";

  _v0.s(["parseThumbnailIdFromUrl", 0, function (_v0) {
    let _v1 = _v0 ? _v0.match(/pictures\/(\d+)/) : null;
    return _v1 && _v1.length > 1 ? parseInt(_v1[1]) : -1;
  }]);
}