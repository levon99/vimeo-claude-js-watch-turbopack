{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function (_v0) {
    let {
      html: _v1,
      scripts: _v2,
      stylesheets: _v3
    } = (0, _v6.YouTubeEmbed)(_v0);
    return (0, _v4.jsx)(_v7.default, {
      height: _v0.height || null,
      width: _v0.width || null,
      html: _v1,
      dataNtpc: "YouTubeEmbed",
      children: null == _v2 ? void 0 : _v2.map(_v0 => (0, _v4.jsx)(_v5.default, {
        src: _v0.url,
        strategy: _v8[_v0.strategy],
        stylesheets: _v3
      }, _v0.url))
    });
  };
  let _v4 = _v0.r(0),
    _v5 = _v3(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v3(_v0.r(0)),
    _v8 = {
      server: "beforeInteractive",
      client: "afterInteractive",
      idle: "lazyOnload",
      worker: "worker"
    };
}