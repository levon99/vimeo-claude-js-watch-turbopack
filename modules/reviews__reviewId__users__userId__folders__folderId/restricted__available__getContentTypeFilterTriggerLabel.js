{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => !!_v0 && _v0.has("restricted") && !_v0.has("available"),
    _v5 = _v0 => !!_v0 && _v0.has("available") && !_v0.has("restricted");
  _v0.s(["getContentTypeFilterTriggerLabel", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1.size,
      _v4 = _v0.length;
    if (0 === _v3) return (0, _v1.translate)({
      singular: "Type",
      dictionary: {
        es: {
          singular: "Tipo"
        },
        "de-DE": {
          singular: "Typ"
        },
        "ja-JP": {
          singular: "タイプ"
        },
        "ko-KR": {
          singular: "유형"
        },
        "pt-BR": {
          singular: "Tipo"
        },
        "zh-CN": {
          singular: "类型"
        }
      }
    });
    if (_v3 === _v4) {
      let _v0 = 2 === _v0.length && _v0.includes("folder") && _v0.includes("video");
      return _v1.has("folder") && _v1.has("video") && _v0 && (_v4(_v2) || _v5(_v2)) ? (0, _v1.translate)({
        singular: "Multiple types",
        dictionary: {
          es: {
            singular: "Múltiples tipos"
          },
          "de-DE": {
            singular: "Mehrere Typen"
          },
          "fr-FR": {
            singular: "Plusieurs types"
          },
          "ja-JP": {
            singular: "複数の種類"
          },
          "ko-KR": {
            singular: "여러 유형"
          },
          "pt-BR": {
            singular: "Vários tipos"
          },
          "zh-CN": {
            singular: "多种类型"
          }
        }
      }) : _v4(_v2) ? (0, _v1.translate)({
        singular: "Restricted videos",
        dictionary: {
          es: {
            singular: "Vídeos restringidos"
          },
          "de-DE": {
            singular: "Eingeschränkte Videos"
          },
          "fr-FR": {
            singular: "Vidéos restreintes"
          },
          "ja-JP": {
            singular: "閲覧制限のある動画"
          },
          "ko-KR": {
            singular: "제한된 동영상"
          },
          "pt-BR": {
            singular: "Vídeos restritos"
          },
          "zh-CN": {
            singular: "受限视频"
          }
        }
      }) : _v5(_v2) ? (0, _v1.translate)({
        singular: "Available videos",
        dictionary: {
          es: {
            singular: "Vídeos disponibles"
          },
          "de-DE": {
            singular: "Verfügbare Videos"
          },
          "fr-FR": {
            singular: "Vidéos disponibles"
          },
          "ja-JP": {
            singular: "利用可能な動画"
          },
          "ko-KR": {
            singular: "사용 가능한 동영상"
          },
          "pt-BR": {
            singular: "Vídeos disponíveis"
          },
          "zh-CN": {
            singular: "可用视频"
          }
        }
      }) : (0, _v1.translate)({
        singular: "All types",
        dictionary: {
          es: {
            singular: "Vocal e instrumental"
          },
          "de-DE": {
            singular: "Alle Typen"
          },
          "fr-FR": {
            singular: "Tous types"
          },
          "ja-JP": {
            singular: "すべてのタイプ"
          },
          "ko-KR": {
            singular: "모든 유형"
          },
          "pt-BR": {
            singular: "Todos os tipos"
          },
          "zh-CN": {
            singular: "所有类型"
          }
        }
      });
    }
    if (_v2 && _v2.has("restricted") && _v2.has("available") && (0, _v3.doesSelectionIncludeVideos)(_v0, _v1)) return (0, _v1.translate)({
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
    });
    if (_v3 > 1) return (0, _v1.translate)({
      singular: "Multiple types",
      dictionary: {
        es: {
          singular: "Múltiples tipos"
        },
        "de-DE": {
          singular: "Mehrere Typen"
        },
        "fr-FR": {
          singular: "Plusieurs types"
        },
        "ja-JP": {
          singular: "複数の種類"
        },
        "ko-KR": {
          singular: "여러 유형"
        },
        "pt-BR": {
          singular: "Vários tipos"
        },
        "zh-CN": {
          singular: "多种类型"
        }
      }
    });
    let _v5 = [..._v1][0];
    return "video" === _v5 && _v4(_v2) ? (0, _v1.translate)({
      singular: "Restricted videos",
      dictionary: {
        es: {
          singular: "Vídeos restringidos"
        },
        "de-DE": {
          singular: "Eingeschränkte Videos"
        },
        "fr-FR": {
          singular: "Vidéos restreintes"
        },
        "ja-JP": {
          singular: "閲覧制限のある動画"
        },
        "ko-KR": {
          singular: "제한된 동영상"
        },
        "pt-BR": {
          singular: "Vídeos restritos"
        },
        "zh-CN": {
          singular: "受限视频"
        }
      }
    }) : "video" === _v5 && _v5(_v2) ? (0, _v1.translate)({
      singular: "Available videos",
      dictionary: {
        es: {
          singular: "Vídeos disponibles"
        },
        "de-DE": {
          singular: "Verfügbare Videos"
        },
        "fr-FR": {
          singular: "Vidéos disponibles"
        },
        "ja-JP": {
          singular: "利用可能な動画"
        },
        "ko-KR": {
          singular: "사용 가능한 동영상"
        },
        "pt-BR": {
          singular: "Vídeos disponíveis"
        },
        "zh-CN": {
          singular: "可用视频"
        }
      }
    }) : _v2.CONTENT_TYPE_FILTER_OPTIONS_BY_VALUE[_v5].label;
  }]);
}