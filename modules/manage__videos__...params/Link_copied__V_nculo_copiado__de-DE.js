{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.translate)({
      singular: "Link copied",
      dictionary: {
        es: {
          singular: "Vínculo copiado"
        },
        "de-DE": {
          singular: "Link kopiert"
        },
        "fr-FR": {
          singular: "Lien copié"
        },
        "ja-JP": {
          singular: "リンクがコピーされました"
        },
        "ko-KR": {
          singular: "링크가 복사됐습니다"
        },
        "pt-BR": {
          singular: "Link copiado"
        },
        "zh-CN": {
          singular: "链接已复制"
        }
      }
    }),
    _v3 = (0, _v1.translate)({
      singular: "Link failed to copy",
      dictionary: {
        es: {
          singular: "No se pudo copiar el enlace"
        },
        "de-DE": {
          singular: "Link wurde nicht kopiert"
        },
        "fr-FR": {
          singular: "Impossible de copier le lien"
        },
        "ja-JP": {
          singular: "リンクをコピーできませんでした"
        },
        "ko-KR": {
          singular: "링크 복사를 실패했습니다"
        },
        "pt-BR": {
          singular: "Falha ao copiar o link"
        },
        "zh-CN": {
          singular: "链接复制失败"
        }
      }
    }),
    _v4 = {
      upgradeToSave: (0, _v1.translate)({
        singular: "Upgrade to save",
        dictionary: {
          es: {
            singular: "Actualizar para guardar"
          },
          "de-DE": {
            singular: "Upgraden und speichern"
          },
          "fr-FR": {
            singular: "Mettre à niveau pour sauvegarder"
          },
          "ja-JP": {
            singular: "アップグレードして保存"
          },
          "ko-KR": {
            singular: "업그레이드하고 저장"
          },
          "pt-BR": {
            singular: "Atualizar para salvar"
          },
          "zh-CN": {
            singular: "升级以节省"
          }
        }
      })
    };
  _v0.s(["MAX_URL_LENGTH", 0, 64, "TimestampParameter", 0, {
    ClipPage: "#t",
    SingleVideo: "?ts"
  }, "customUrlTransations", 0, _v4, "shareText", 0, {
    linkCopySucceeded: _v2,
    linkCopyFailed: _v3
  }]);
}