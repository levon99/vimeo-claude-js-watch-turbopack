{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getBadgeLabel", 0, ({
    isLive: _v0,
    status: _v1
  }) => {
    let _v2 = (0, _v1.translate)({
      singular: "Upcoming",
      dictionary: {
        es: {
          singular: "PRÓXIMAMENTE"
        },
        "de-DE": {
          singular: "IN KÜRZE"
        },
        "fr-FR": {
          singular: "À VENIR"
        },
        "ja-JP": {
          singular: "近日配信"
        },
        "ko-KR": {
          singular: "예정"
        },
        "pt-BR": {
          singular: "EM BREVE"
        },
        "zh-CN": {
          singular: "即将上线"
        }
      }
    });
    return "ended" === _v1 ? _v2 = (0, _v1.translate)({
      singular: "Completed",
      dictionary: {
        es: {
          singular: "COMPLETADO"
        },
        "de-DE": {
          singular: "ABGESCHLOSSEN"
        },
        "fr-FR": {
          singular: "TERMINÉ"
        },
        "ja-JP": {
          singular: "完了"
        },
        "ko-KR": {
          singular: "종료됨"
        },
        "pt-BR": {
          singular: "CONCLUÍDO"
        },
        "zh-CN": {
          singular: "已完成"
        }
      }
    }) : _v0 && (_v2 = (0, _v1.translate)({
      singular: "Live",
      dictionary: {
        es: {
          singular: "En vivo"
        },
        "fr-FR": {
          singular: "Direct"
        },
        "ja-JP": {
          singular: "ライブ"
        },
        "ko-KR": {
          singular: "라이브"
        },
        "pt-BR": {
          singular: "Ao vivo"
        },
        "zh-CN": {
          singular: "直播"
        }
      }
    })), {
      labelFormat: _v0 ? "live" : "live-inactive",
      badgeText: _v2
    };
  }]);
}