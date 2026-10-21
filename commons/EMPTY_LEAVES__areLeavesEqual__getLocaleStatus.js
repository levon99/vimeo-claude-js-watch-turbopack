{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {};
  _v0.s(["EMPTY_LEAVES", 0, _v2, "areLeavesEqual", 0, (_v0, _v1) => {
    let _v2 = Object.keys(_v0);
    return _v2.length === Object.keys(_v1).length && _v2.every(_v0 => _v0[_v0]?.value === _v1[_v0]?.value);
  }, "getLocaleStatus", 0, (_v0, _v1) => void 0 === _v0 ? "unsaved" : _v1 ? "inProgress" : _v0.hasDraft ? "savedDraft" : _v0.isPublished ? "published" : "unpublished", "getLocaleStatusLabel", 0, _v0 => {
    switch (_v0) {
      case "unsaved":
        return (0, _v1.translate)({
          singular: "Unsaved",
          dictionary: {
            es: {
              singular: "Sin guardar"
            },
            "de-DE": {
              singular: "Ungespeichert"
            },
            "fr-FR": {
              singular: "Non enregistré"
            },
            "ja-JP": {
              singular: "未保存"
            },
            "ko-KR": {
              singular: "저장되지 않음"
            },
            "pt-BR": {
              singular: "Não salvo"
            },
            "zh-CN": {
              singular: "未保存"
            }
          }
        });
      case "inProgress":
        return (0, _v1.translate)({
          singular: "In progress",
          dictionary: {
            es: {
              singular: "En curso"
            },
            "de-DE": {
              singular: "In Bearbeitung"
            },
            "fr-FR": {
              singular: "En cours"
            },
            "ja-JP": {
              singular: "処理中"
            },
            "ko-KR": {
              singular: "진행 중"
            },
            "pt-BR": {
              singular: "Em andamento"
            },
            "zh-CN": {
              singular: "进行中"
            }
          }
        });
      case "savedDraft":
        return (0, _v1.translate)({
          singular: "Saved draft",
          dictionary: {
            es: {
              singular: "Borrador guardado"
            },
            "de-DE": {
              singular: "Gespeicherter Entwurf"
            },
            "fr-FR": {
              singular: "Brouillon enregistré"
            },
            "ja-JP": {
              singular: "保存済みの下書き"
            },
            "ko-KR": {
              singular: "저장된 초안"
            },
            "pt-BR": {
              singular: "Rascunho salvo"
            },
            "zh-CN": {
              singular: "已保存的草稿"
            }
          }
        });
      case "published":
        return (0, _v1.translate)({
          singular: "Published",
          dictionary: {
            es: {
              singular: "Publicado"
            },
            "de-DE": {
              singular: "Veröffentlicht"
            },
            "fr-FR": {
              singular: "Publié"
            },
            "ja-JP": {
              singular: "公開済み"
            },
            "ko-KR": {
              singular: "게시됨"
            },
            "pt-BR": {
              singular: "Publicado"
            },
            "zh-CN": {
              singular: "已发布"
            }
          }
        });
      case "unpublished":
        return (0, _v1.translate)({
          singular: "Unpublished",
          dictionary: {
            es: {
              singular: "No publicado"
            },
            "de-DE": {
              singular: "Nicht veröffentlicht"
            },
            "fr-FR": {
              singular: "Non publié"
            },
            "ja-JP": {
              singular: "非公開"
            },
            "ko-KR": {
              singular: "게시 취소됨"
            },
            "pt-BR": {
              singular: "Não publicado"
            },
            "zh-CN": {
              singular: "未发布"
            }
          }
        });
      default:
        throw Error(`Unhandled locale status: ${String(_v0)}`);
    }
  }, "getWorkingLeaves", 0, (_v0, _v1) => Object.fromEntries(Object.entries({
    ..._v0,
    ..._v1
  }).filter(([, _v0]) => "" !== _v0.value)), "withTypedValue", 0, (_v0, _v1, _v2, _v3) => {
    let {
      [_v2]: _v4,
      ..._v5
    } = _v0 ?? _v2;
    return _v1?.[_v2]?.value === _v3 ? _v5 : {
      ..._v5,
      [_v2]: {
        value: _v3,
        provenance: "manual"
      }
    };
  }]);
}