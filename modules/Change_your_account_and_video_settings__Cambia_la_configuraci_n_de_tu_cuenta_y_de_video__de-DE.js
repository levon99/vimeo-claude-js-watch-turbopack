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
    return (0, _v1.jsxs)(_v5.Page, {
      children: [(0, _v1.jsx)("h2", {
        children: (0, _v4.translate)({
          singular: "Change your account and video settings",
          dictionary: {
            es: {
              singular: "Cambia la configuración de tu cuenta y de video"
            },
            "de-DE": {
              singular: "Konto- und Video-Einstellungen ändern"
            },
            "fr-FR": {
              singular: "Modifiez les paramètres de votre compte et de vos vidéos."
            },
            "ja-JP": {
              singular: "アカウントと動画の設定を変更する"
            },
            "ko-KR": {
              singular: "계정 및 동영상 설정 변경"
            },
            "pt-BR": {
              singular: "Alterar suas configurações de conta e de vídeo"
            },
            "zh-CN": {
              singular: "更改帐户和视频设置"
            }
          }
        })
      }), "Video settings for ", _v0.id]
    });
  };
  _v7.getLayout = _v6.getLayout, (0, _v3.withPageSetup)({
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}