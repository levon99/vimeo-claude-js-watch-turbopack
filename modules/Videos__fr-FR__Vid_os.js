{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => (0, _v1.jsxs)(_v5.Page, {
    children: [(0, _v1.jsx)("h1", {
      children: (0, _v4.translate)({
        singular: "Videos",
        dictionary: {
          "fr-FR": {
            singular: "Vidéos"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeos"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      })
    }), (0, _v1.jsxs)("ul", {
      children: [(0, _v1.jsx)("li", {
        children: (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/videos/1",
          children: "Video 1"
        })
      }), (0, _v1.jsx)("li", {
        children: (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/videos/2",
          children: "Video 2"
        })
      })]
    })]
  });
  _v7.getLayout = _v6.getLayout, (0, _v3.withPageSetup)({
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}