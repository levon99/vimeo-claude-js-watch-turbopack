{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["EventThumbnail", 0, ({
    thumbnail: _v0,
    isLive: _v1,
    isUpcoming: _v2,
    status: _v3,
    hasScheduledDatePassed: _v4,
    minWidth: _v5
  }) => {
    let {
        badgeText: _v6
      } = (0, _v5.getBadgeLabel)({
        isLive: _v1,
        status: _v3
      }),
      _v7 = _v1 || _v2 && !_v4 || "ended" === _v3,
      _v8 = _v1 ? "mature" : "default";
    return (0, _v1.jsx)(_v2.Box, {
      children: _v0 ? (0, _v1.jsx)(_v4.ContentRow.Thumbnail, {
        src: _v0,
        alt: "Thumbnail",
        badgeText: _v7 ? _v6 : "",
        variant: _v8,
        minWidth: _v5
      }) : (0, _v1.jsx)(_v4.ContentRow.DefaultThumbnail, {
        badgeText: _v7 ? _v6 : "",
        variant: _v8,
        minWidth: _v5,
        children: (0, _v1.jsx)(_v3.CameraOnFilled, {
          color: "text-tertiary",
          boxSize: "sm"
        })
      })
    });
  }]);
}