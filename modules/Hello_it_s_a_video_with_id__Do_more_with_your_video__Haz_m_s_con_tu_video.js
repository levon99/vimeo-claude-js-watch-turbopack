{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => {
    let {
      query: _v0
    } = (0, _v2.useRouter)();
    return (0, _v1.jsxs)(_v6.Page, {
      children: [(0, _v1.jsxs)("h1", {
        children: ["Hello, it's a video with id ", _v0.id]
      }), (0, _v1.jsx)("h2", {
        children: (0, _v4.translate)({
          singular: "Do more with your video",
          dictionary: {
            es: {
              singular: "Haz más con tu video"
            },
            "de-DE": {
              singular: "Dein Video kann noch mehr"
            },
            "fr-FR": {
              singular: "Un monde de possibilités s'offre à vous"
            },
            "ja-JP": {
              singular: "動画をさらに活用しましょう"
            },
            "ko-KR": {
              singular: "동영상을 더 다양히 활용하세요"
            },
            "pt-BR": {
              singular: "Faça mais com o seu vídeo"
            },
            "zh-CN": {
              singular: "利用视频做更多事情"
            }
          }
        })
      })]
    });
  };
  _v7.getLayout = _v5.getLayout, (0, _v3.withPageSetup)({
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}