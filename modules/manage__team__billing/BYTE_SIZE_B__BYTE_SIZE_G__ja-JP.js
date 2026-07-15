{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1 = !0) => {
    let _v2 = 0,
      _v3 = 2 * !!_v1;
    for (_v2 = 0; _v0 >= 0 && _v2 < 4; _v2++) _v0 /= 0;
    return 0 === _v2 ? "0" : [(0, _v1.translate)({
      singular: "{BYTE_SIZE}B",
      replacements: {
        BYTE_SIZE: _v0.toFixed(_v3)
      },
      dictionary: {
        es: {
          singular: "{BYTE_SIZE} G"
        },
        "ja-JP": {
          singular: "{BYTE_SIZE}億"
        },
        "ko-KR": {
          singular: "{BYTE_SIZE}억"
        }
      }
    }), (0, _v1.translate)({
      singular: "{BYTE_SIZE}KB",
      replacements: {
        BYTE_SIZE: _v0.toFixed(_v3)
      },
      dictionary: {
        es: {
          singular: "{BYTE_SIZE} KB"
        },
        "de-DE": {
          singular: "{BYTE_SIZE} KB"
        },
        "fr-FR": {
          singular: "{BYTE_SIZE} Ko"
        },
        "pt-BR": {
          singular: "{BYTE_SIZE} KB"
        }
      }
    }), (0, _v1.translate)({
      singular: "{BYTE_SIZE}MB",
      replacements: {
        BYTE_SIZE: _v0.toFixed(_v3)
      },
      dictionary: {
        es: {
          singular: "{BYTE_SIZE} MB"
        },
        "de-DE": {
          singular: "{BYTE_SIZE} MB"
        },
        "fr-FR": {
          singular: "{BYTE_SIZE} Mo"
        },
        "pt-BR": {
          singular: "{BYTE_SIZE} MB"
        }
      }
    }), (0, _v1.translate)({
      singular: "{BYTE_SIZE}GB",
      replacements: {
        BYTE_SIZE: _v0.toFixed(_v3)
      },
      dictionary: {
        es: {
          singular: "{BYTE_SIZE} GB"
        },
        "de-DE": {
          singular: "{BYTE_SIZE} GB"
        },
        "fr-FR": {
          singular: "{BYTE_SIZE} Go"
        },
        "pt-BR": {
          singular: "{BYTE_SIZE} GB"
        }
      }
    }), (0, _v1.translate)({
      singular: "{BYTE_SIZE}TB",
      replacements: {
        BYTE_SIZE: _v0.toFixed(_v3)
      },
      dictionary: {
        es: {
          singular: "{BYTE_SIZE} TB"
        },
        "de-DE": {
          singular: "{BYTE_SIZE} TB"
        },
        "fr-FR": {
          singular: "{BYTE_SIZE} To"
        },
        "pt-BR": {
          singular: "{BYTE_SIZE} TB"
        }
      }
    })][_v2];
  };
  _v2(0), _v2(0), _v2(0), _v2(0), _v2(0), _v2(0), _v2(0), _v2(0), _v2(0), _v2(0), _v0.s(["formatBytes", 0, _v2]);
}