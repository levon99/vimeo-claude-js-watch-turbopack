{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getColdPrivacyTooltipLabel", 0, _v0 => {
    let _v1 = _v0 && _v2.PRIVACY_TO_LABEL[_v0] || (0, _v1.translate)({
      singular: "its original privacy setting",
      dictionary: {
        es: {
          singular: "su configuración de privacidad original"
        },
        "de-DE": {
          singular: "seine ursprüngliche Datenschutzeinstellung"
        },
        "fr-FR": {
          singular: "son paramètre de confidentialité d'origine"
        },
        "ja-JP": {
          singular: "元の公開設定"
        },
        "ko-KR": {
          singular: "원래의 공개 설정"
        },
        "pt-BR": {
          singular: "sua configuração de privacidade original"
        },
        "zh-CN": {
          singular: "其原始隐私设置"
        }
      }
    });
    return (0, _v1.translate)({
      singular: "This video has been set to private because your plan doesn't support {premium_privacy_value}. Click to restore.",
      replacements: {
        premium_privacy_value: _v1
      },
      dictionary: {
        es: {
          singular: "Se ha establecido este vídeo como privado porque tu plan no admite {premium_privacy_value}. Haz clic para restaurarlo."
        },
        "de-DE": {
          singular: "Dieses Video wurde auf privat gesetzt, weil Ihr Tarif {premium_privacy_value} nicht unterstützt. Klicken Sie, um es wiederherzustellen."
        },
        "fr-FR": {
          singular: "Cette vidéo a été définie comme privée car votre offre ne prend pas en charge {premium_privacy_value}. Cliquez pour restaurer."
        },
        "ja-JP": {
          singular: "お使いのプランでは{premium_privacy_value}が利用できないため、この動画は非公開に設定されています。復元するにはクリックしてください。"
        },
        "ko-KR": {
          singular: "이 동영상은 귀하의 요금제에서 {premium_privacy_value}을(를) 지원하지 않아 비공개로 설정되었습니다. 복원하려면 클릭하세요."
        },
        "pt-BR": {
          singular: "Este vídeo foi definido como privado porque seu plano não oferece suporte a {premium_privacy_value}. Clique para restaurar."
        },
        "zh-CN": {
          singular: "因为您的订阅计划不支持 {premium_privacy_value}，此视频已被设为私密。点击以恢复。"
        }
      }
    });
  }]);
}