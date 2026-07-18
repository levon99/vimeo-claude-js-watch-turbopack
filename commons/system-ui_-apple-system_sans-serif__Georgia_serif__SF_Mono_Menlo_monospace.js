{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      lineHeight: 1.2,
      sizeAdjust: 1
    },
    _v3 = {
      sans: "system-ui, -apple-system, sans-serif",
      serif: "Georgia, serif",
      mono: '"SF Mono", Menlo, monospace',
      display: "Impact, sans-serif",
      handwritten: "cursive"
    },
    _v4 = [300, 400, 500, 700],
    _v5 = [400, 500, 700],
    _v6 = [400],
    _v7 = [{
      id: "inter",
      label: "Inter",
      family: '"Inter"',
      category: "sans",
      weights: _v4
    }, {
      id: "dm_sans",
      label: "DM Sans",
      family: '"DM Sans"',
      category: "sans",
      weights: _v4
    }, {
      id: "outfit",
      label: "Outfit",
      family: '"Outfit"',
      category: "sans",
      weights: _v4
    }, {
      id: "space_grotesk",
      label: "Space Grotesk",
      family: '"Space Grotesk"',
      category: "sans",
      weights: _v4
    }, {
      id: "bricolage_grotesque",
      label: "Bricolage Grotesque",
      family: '"Bricolage Grotesque"',
      category: "sans",
      weights: _v4
    }, {
      id: "hanken_grotesk",
      label: "Hanken Grotesk",
      family: '"Hanken Grotesk"',
      category: "sans",
      weights: _v4
    }, {
      id: "roboto",
      label: "Roboto",
      family: '"Roboto"',
      category: "sans",
      weights: _v4
    }, {
      id: "montserrat",
      label: "Montserrat",
      family: '"Montserrat"',
      category: "sans",
      weights: _v4
    }, {
      id: "playfair_display",
      label: "Playfair Display",
      family: '"Playfair Display"',
      category: "serif",
      weights: _v5,
      metrics: {
        lineHeight: 1.15
      }
    }, {
      id: "fraunces",
      label: "Fraunces",
      family: '"Fraunces"',
      category: "serif",
      weights: [300, 400, 700]
    }, {
      id: "dm_serif_display",
      label: "DM Serif Display",
      family: '"DM Serif Display"',
      category: "serif",
      weights: _v6,
      metrics: {
        lineHeight: 1.15
      }
    }, {
      id: "lora",
      label: "Lora",
      family: '"Lora"',
      category: "serif",
      weights: _v5
    }, {
      id: "instrument_serif",
      label: "Instrument Serif",
      family: '"Instrument Serif"',
      category: "serif",
      weights: _v6
    }, {
      id: "ibm_plex_serif",
      label: "IBM Plex Serif",
      family: '"IBM Plex Serif"',
      category: "serif",
      weights: _v4
    }, {
      id: "bebas_neue",
      label: "Bebas Neue",
      family: '"Bebas Neue"',
      category: "display",
      weights: _v6,
      metrics: {
        lineHeight: 1,
        sizeAdjust: 1.15
      }
    }, {
      id: "archivo_black",
      label: "Archivo Black",
      family: '"Archivo Black"',
      category: "display",
      weights: _v6,
      metrics: {
        lineHeight: 1.15
      }
    }, {
      id: "anton",
      label: "Anton",
      family: '"Anton"',
      category: "display",
      weights: _v6,
      metrics: {
        lineHeight: 1,
        sizeAdjust: 1.1
      }
    }, {
      id: "jetbrains_mono",
      label: "JetBrains Mono",
      family: '"JetBrains Mono"',
      category: "mono",
      weights: _v4,
      metrics: {
        lineHeight: 1.3,
        sizeAdjust: .95
      }
    }, {
      id: "caveat",
      label: "Caveat",
      family: '"Caveat"',
      category: "handwritten",
      weights: [400, 700],
      metrics: {
        lineHeight: 1.3,
        sizeAdjust: .95
      }
    }, {
      id: "poppins",
      label: "Poppins",
      family: '"Poppins"',
      category: "sans",
      weights: _v4
    }],
    _v8 = _v7.reduce((_v0, _v1) => (_v0[_v1.id] = _v1, _v0), {}),
    _v9 = _v0 => "string" == typeof _v0 && _v0 in _v8,
    _v10 = [300, 400, 500, 700],
    _v11 = _v0 => _v0 ? _v8[_v0]?.weights ?? _v4 : _v4,
    _v12 = {
      300: [300, 400, 500, 700],
      400: [400, 500, 700, 300],
      500: [500, 400, 700, 300],
      700: [700, 500, 400, 300]
    };
  _v0.s(["TITLE_FONTS", 0, _v7, "TITLE_FONT_BY_ID", 0, _v8, "asTitleFontId", 0, _v0 => _v9(_v0) ? _v0 : null, "asTitleFontWeight", 0, _v0 => {
    if (null == _v0) return null;
    let _v1 = "string" == typeof _v0 ? Number(_v0) : _v0;
    return _v10.includes(_v1) ? _v1 : null;
  }, "closestWeightInFamily", 0, (_v0, _v1) => {
    let _v2 = _v11(_v0);
    return _v12[_v1].find(_v0 => _v2.includes(_v0)) ?? _v2[0] ?? 400;
  }, "isTitleFontId", 0, _v9, "titleFontHrefById", 0, _v0 => {
    if (!_v0) return;
    let _v1 = _v8[_v0];
    if (_v1) {
      let _v0, _v1;
      return _v0 = _v1.family.replace(/^"|"$/g, "").replace(/\s+/g, "+"), _v1 = _v1.weights.length > 1 ? `family=${_v0}:wght@${_v1.weights.join(";")}` : `family=${_v0}`, `https://fonts.googleapis.com/css2?${_v1}&display=swap`;
    }
  }, "titleFontMetricsById", 0, _v0 => {
    if (!_v0) return _v2;
    let _v1 = _v8[_v0];
    return _v1 ? {
      ..._v2,
      ...(_v1.metrics ?? {})
    } : _v2;
  }, "titleFontStackById", 0, _v0 => {
    if (!_v0) return;
    let _v1 = _v8[_v0];
    if (_v1) return `${_v1.family}, ${_v3[_v1.category]}`;
  }, "titleFontWeightsById", 0, _v11, "titleWeightOptions", 0, () => [{
    value: 300,
    label: (0, _v1.translate)({
      singular: "Light",
      dictionary: {
        es: {
          singular: "Claro"
        },
        "de-DE": {
          singular: "Hell"
        },
        "fr-FR": {
          singular: "Clair"
        },
        "ja-JP": {
          singular: "ライト"
        },
        "ko-KR": {
          singular: "밝음"
        },
        "pt-BR": {
          singular: "Claro"
        },
        "zh-CN": {
          singular: "浅色"
        }
      }
    })
  }, {
    value: 400,
    label: (0, _v1.translate)({
      singular: "Regular",
      dictionary: {
        "de-DE": {
          singular: "Normal"
        },
        "fr-FR": {
          singular: "Standard"
        },
        "ja-JP": {
          singular: "通常"
        },
        "ko-KR": {
          singular: "일반"
        },
        "pt-BR": {
          singular: "Normal"
        },
        "zh-CN": {
          singular: "常规"
        }
      }
    })
  }, {
    value: 500,
    label: (0, _v1.translate)({
      singular: "Medium",
      dictionary: {
        es: {
          singular: "Mediano"
        },
        "de-DE": {
          singular: "Mittel"
        },
        "fr-FR": {
          singular: "Mate"
        },
        "ja-JP": {
          singular: "ミディアム"
        },
        "ko-KR": {
          singular: "중간"
        },
        "pt-BR": {
          singular: "Médio"
        },
        "zh-CN": {
          singular: "中"
        }
      }
    })
  }, {
    value: 700,
    label: (0, _v1.translate)({
      singular: "Bold",
      dictionary: {
        es: {
          singular: "Negrita"
        },
        "de-DE": {
          singular: "Fett"
        },
        "fr-FR": {
          singular: "Gras"
        },
        "ja-JP": {
          singular: "太字"
        },
        "ko-KR": {
          singular: "굵게"
        },
        "pt-BR": {
          singular: "Negrito"
        },
        "zh-CN": {
          singular: "粗体"
        }
      }
    })
  }]]);
}