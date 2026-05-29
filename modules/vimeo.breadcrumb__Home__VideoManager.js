{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = _v2.Page = void 0;
  var _v3,
    _v4,
    _v5 = "vimeo.breadcrumb";
  _v2.Page = _v4, (_v3 = _v4 || (_v2.Page = _v4 = {}))[_v3.Home = 0] = "Home", _v3[_v3.VideoManager = 1] = "VideoManager", _v3[_v3.Video = 2] = "Video", _v3[_v3.Settings = 3] = "Settings", _v3[_v3.Review = 4] = "Review", _v3[_v3.Upload = 5] = "Upload", _v2.default = {
    set: function (_v0) {
      var _v1 = {
        url: window.location.href,
        page: _v0
      };
      window.localStorage.setItem(_v5, JSON.stringify(_v1));
    },
    get: function () {
      var _v0 = window.localStorage.getItem(_v5);
      if (!_v0) return null;
      var _v1 = JSON.parse(_v0);
      return document.referrer !== _v1.url ? null : _v1.page && _v1.page in _v4 ? _v1 : null;
    }
  };
}