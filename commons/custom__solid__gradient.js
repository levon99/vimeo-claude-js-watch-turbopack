{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
    CUSTOM: "custom",
    SOLID: "solid",
    GRADIENT: "gradient",
    BRAND: "brand"
  };
  _v0.s(["ColorPickerMode", 0, {
    SWATCHES: "swatches",
    BRANDKIT: "brandkit",
    STANDARD: "standard"
  }, "ColorType", 0, _v2], 0);
  let _v3 = "#000000",
    _v4 = [{
      color: "#0E1216",
      name: (0, _v1.translate)({
        singular: "Black",
        dictionary: {
          es: {
            singular: "Negro"
          },
          "de-DE": {
            singular: "Schwarz"
          },
          "fr-FR": {
            singular: "Noir"
          },
          "ko-KR": {
            singular: "검은색"
          },
          "pt-BR": {
            singular: "Preto"
          },
          "zh-CN": {
            singular: "黑色"
          }
        }
      })
    }, {
      color: "#252D35",
      name: (0, _v1.translate)({
        singular: "Dark gray",
        dictionary: {
          es: {
            singular: "Gris oscuro"
          },
          "de-DE": {
            singular: "Dunkelgrau"
          },
          "fr-FR": {
            singular: "Gris foncé"
          },
          "ja-JP": {
            singular: "ダークグレー"
          },
          "ko-KR": {
            singular: "다크 그레이"
          },
          "pt-BR": {
            singular: "Cinza escuro"
          },
          "zh-CN": {
            singular: "深灰色"
          }
        }
      })
    }, {
      color: "#68727C",
      name: (0, _v1.translate)({
        singular: "Gray",
        dictionary: {
          es: {
            singular: "Gris"
          },
          "de-DE": {
            singular: "Grau"
          },
          "fr-FR": {
            singular: "Gris"
          },
          "ja-JP": {
            singular: "グレー"
          },
          "ko-KR": {
            singular: "그레이"
          },
          "pt-BR": {
            singular: "Cinza"
          },
          "zh-CN": {
            singular: "灰色"
          }
        }
      })
    }, {
      color: "#CBD5E0",
      name: (0, _v1.translate)({
        singular: "Light gray",
        dictionary: {
          es: {
            singular: "Gris claro"
          },
          "de-DE": {
            singular: "Hellgrau"
          },
          "fr-FR": {
            singular: "Gris clair"
          },
          "ja-JP": {
            singular: "ライトグレー"
          },
          "ko-KR": {
            singular: "라이트 그레이"
          },
          "pt-BR": {
            singular: "Cinza claro"
          },
          "zh-CN": {
            singular: "浅灰色"
          }
        }
      })
    }, {
      color: "#F4F6F8",
      name: (0, _v1.translate)({
        singular: "White",
        dictionary: {
          es: {
            singular: "Blanco"
          },
          "de-DE": {
            singular: "Weiß"
          },
          "fr-FR": {
            singular: "Blanc"
          },
          "ko-KR": {
            singular: "흰색"
          },
          "pt-BR": {
            singular: "Branco"
          },
          "zh-CN": {
            singular: "白色"
          }
        }
      })
    }, {
      color: "#17D5FF",
      name: (0, _v1.translate)({
        singular: "Blue",
        dictionary: {
          es: {
            singular: "Azul"
          },
          "de-DE": {
            singular: "Blau"
          },
          "fr-FR": {
            singular: "Bleu"
          },
          "ja-JP": {
            singular: "ブルー"
          },
          "ko-KR": {
            singular: "파란색"
          },
          "pt-BR": {
            singular: "Azul"
          },
          "zh-CN": {
            singular: "蓝色"
          }
        }
      })
    }, {
      color: "#8A5EE8",
      name: (0, _v1.translate)({
        singular: "Purple",
        dictionary: {
          es: {
            singular: "Púrpura"
          },
          "de-DE": {
            singular: "Violett"
          },
          "fr-FR": {
            singular: "Violet"
          },
          "ja-JP": {
            singular: "パープル"
          },
          "ko-KR": {
            singular: "퍼플"
          },
          "pt-BR": {
            singular: "Roxo"
          },
          "zh-CN": {
            singular: "紫色"
          }
        }
      })
    }, {
      color: "#F56565",
      name: (0, _v1.translate)({
        singular: "Red",
        dictionary: {
          es: {
            singular: "RED"
          },
          "de-DE": {
            singular: "RED"
          },
          "fr-FR": {
            singular: "Rouge"
          },
          "ja-JP": {
            singular: "赤"
          },
          "ko-KR": {
            singular: "빨강"
          },
          "pt-BR": {
            singular: "Vermelho"
          },
          "zh-CN": {
            singular: "红色"
          }
        }
      })
    }, {
      color: "#ECC94B",
      name: (0, _v1.translate)({
        singular: "Yellow",
        dictionary: {
          es: {
            singular: "Amarillo"
          },
          "de-DE": {
            singular: "Gelb"
          },
          "fr-FR": {
            singular: "Jaune"
          },
          "ja-JP": {
            singular: "黄色"
          },
          "ko-KR": {
            singular: "노랑"
          },
          "pt-BR": {
            singular: "Amarelo"
          },
          "zh-CN": {
            singular: "黄色"
          }
        }
      })
    }, {
      color: "#48BB78",
      name: (0, _v1.translate)({
        singular: "Green",
        dictionary: {
          es: {
            singular: "Verde"
          },
          "de-DE": {
            singular: "Grün"
          },
          "fr-FR": {
            singular: "Vert"
          },
          "ja-JP": {
            singular: "緑"
          },
          "ko-KR": {
            singular: "녹색"
          },
          "pt-BR": {
            singular: "Verde"
          },
          "zh-CN": {
            singular: "绿色"
          }
        }
      })
    }],
    _v5 = [{
      color: ["#181E24", "#3D4751"],
      name: (0, _v1.translate)({
        singular: "Midnight black",
        dictionary: {
          es: {
            singular: "Negro medianoche"
          },
          "de-DE": {
            singular: "Mitternachtsschwarz"
          },
          "fr-FR": {
            singular: "Noir minuit"
          },
          "ja-JP": {
            singular: "ミッドナイトブラック"
          },
          "ko-KR": {
            singular: "미드나잇 블랙"
          },
          "pt-BR": {
            singular: "Preto meia-noite"
          },
          "zh-CN": {
            singular: "午夜黑"
          }
        }
      })
    }, {
      color: ["#68727C", "#97A1AD"],
      name: (0, _v1.translate)({
        singular: "Spaceship gray",
        dictionary: {
          es: {
            singular: "Gris nave espacial"
          },
          "de-DE": {
            singular: "Spaceship Gray"
          },
          "fr-FR": {
            singular: "Gris vaisseau spatial"
          },
          "ja-JP": {
            singular: "スペースシップグレー"
          },
          "ko-KR": {
            singular: "스페이스쉽 그레이"
          },
          "pt-BR": {
            singular: "Cinza espaçonave"
          },
          "zh-CN": {
            singular: "太空船灰"
          }
        }
      })
    }, {
      color: ["#CBD5E0", "#E4E9EF"],
      name: (0, _v1.translate)({
        singular: "Moonlight silver",
        dictionary: {
          es: {
            singular: "Plata de luz de luna"
          },
          "de-DE": {
            singular: "Moonlight Silver"
          },
          "fr-FR": {
            singular: "Moonlight Silver"
          },
          "ja-JP": {
            singular: "ムーンライトシルバー"
          },
          "ko-KR": {
            singular: "문라이트 실버"
          },
          "pt-BR": {
            singular: "Prata luar"
          },
          "zh-CN": {
            singular: "月光银"
          }
        }
      })
    }, {
      color: ["#FFC2A3", "#C4F4FF"],
      name: (0, _v1.translate)({
        singular: "Dandelion white",
        dictionary: {
          es: {
            singular: "Diente de león blanco"
          },
          "de-DE": {
            singular: "Dandelion White"
          },
          "fr-FR": {
            singular: "Pissenlit blanc"
          },
          "ja-JP": {
            singular: "ダンデライオンホワイト"
          },
          "ko-KR": {
            singular: "댄델리온 화이트"
          },
          "pt-BR": {
            singular: "Branco dente-de-leão"
          },
          "zh-CN": {
            singular: "蒲公英白"
          }
        }
      })
    }, {
      color: ["#4299E1", "#FEEBCB"],
      name: (0, _v1.translate)({
        singular: "Sky blue",
        dictionary: {
          es: {
            singular: "Azul cielo"
          },
          "de-DE": {
            singular: "Himmelblau"
          },
          "fr-FR": {
            singular: "Bleu ciel"
          },
          "ja-JP": {
            singular: "スカイブルー"
          },
          "ko-KR": {
            singular: "스카이 블루"
          },
          "pt-BR": {
            singular: "Azul céu"
          },
          "zh-CN": {
            singular: "天空蓝"
          }
        }
      })
    }, {
      color: ["#0088A6", "#743ED9"],
      name: (0, _v1.translate)({
        singular: "Ocean blue",
        dictionary: {
          es: {
            singular: "Azul océano"
          },
          "de-DE": {
            singular: "Ozeanblau"
          },
          "fr-FR": {
            singular: "Bleu océan"
          },
          "ja-JP": {
            singular: "オーシャンブルー"
          },
          "ko-KR": {
            singular: "오션 블루"
          },
          "pt-BR": {
            singular: "Azul oceano"
          },
          "zh-CN": {
            singular: "海洋蓝"
          }
        }
      })
    }, {
      color: ["#8A5EE8", "#FEB2B2"],
      name: (0, _v1.translate)({
        singular: "Twilight pink",
        dictionary: {
          es: {
            singular: "Rosa crepuscular"
          },
          "de-DE": {
            singular: "Twilight Pink"
          },
          "fr-FR": {
            singular: "Rose crépuscule"
          },
          "ja-JP": {
            singular: "トワイライトピンク"
          },
          "ko-KR": {
            singular: "트와일라잇 핑크"
          },
          "pt-BR": {
            singular: "Rosa crepuscular"
          },
          "zh-CN": {
            singular: "暮光粉"
          }
        }
      })
    }, {
      color: ["#68D391", "#66E3FF"],
      name: (0, _v1.translate)({
        singular: "Turquoise blue",
        dictionary: {
          es: {
            singular: "Azul turquesa"
          },
          "de-DE": {
            singular: "Türkisblau"
          },
          "fr-FR": {
            singular: "Bleu turquoise"
          },
          "ja-JP": {
            singular: "ターコイズブルー"
          },
          "ko-KR": {
            singular: "터콰이즈 블루"
          },
          "pt-BR": {
            singular: "Azul turquesa"
          },
          "zh-CN": {
            singular: "绿松石蓝"
          }
        }
      })
    }, {
      color: ["#17D5FF", "#F6AD55"],
      name: (0, _v1.translate)({
        singular: "Dawn blue",
        dictionary: {
          es: {
            singular: "Azul amanecer"
          },
          "de-DE": {
            singular: "Dawn Blue"
          },
          "fr-FR": {
            singular: "Bleu aube"
          },
          "ja-JP": {
            singular: "ドーンブルー"
          },
          "ko-KR": {
            singular: "던 블루"
          },
          "pt-BR": {
            singular: "Azul alvorecer"
          },
          "zh-CN": {
            singular: "黎明蓝"
          }
        }
      })
    }, {
      color: ["#F56565", "#FFA575"],
      name: (0, _v1.translate)({
        singular: "Sunset orange",
        dictionary: {
          es: {
            singular: "Naranja atardecer"
          },
          "de-DE": {
            singular: "Sunset Orange"
          },
          "fr-FR": {
            singular: "Orange soleil couchant"
          },
          "ja-JP": {
            singular: "サンセットオレンジ"
          },
          "ko-KR": {
            singular: "선셋 오렌지"
          },
          "pt-BR": {
            singular: "Laranja pôr-do-sol"
          },
          "zh-CN": {
            singular: "落日橙"
          }
        }
      })
    }].map(({
      color: [_v0, _v1],
      name: _v2
    }) => ({
      color: `linear-gradient(to left bottom, ${_v0} 0%, ${_v1} 100%)`,
      name: _v2
    }));
  (0, _v1.translate)({
    singular: "Custom",
    dictionary: {
      es: {
        singular: "Personalizar"
      },
      "de-DE": {
        singular: "Benutzerdefiniert"
      },
      "fr-FR": {
        singular: "Personnalisé"
      },
      "ja-JP": {
        singular: "カスタム"
      },
      "ko-KR": {
        singular: "커스텀"
      },
      "pt-BR": {
        singular: "Customizado"
      },
      "zh-CN": {
        singular: "自定义"
      }
    }
  });
  let _v6 = [{
    name: "Solids",
    colors: _v4.map(_v0 => ({
      colorName: _v0.name,
      colorValue: _v0.color
    })),
    type: _v2.SOLID
  }, {
    name: "Gradients",
    colors: _v5.map(_v0 => ({
      colorName: _v0.name,
      colorValue: _v0.color
    })),
    type: _v2.GRADIENT
  }];
  _v0.s(["ADDITIONAL_COLORS_LIST", 0, _v6, "BRAND_KIT_MODAL_LOCATION", 0, "brand_kit_modal", "DEFAULT_BRANDING_COLOR", 0, _v3, "DEFAULT_PICKER_PLACEMENT", 0, "right-start", "GRADIENTS_CSS", 0, _v5, "SOLID_COLORS", 0, _v4], 0);
  let _v7 = _v0 => /^#([0-9A-F]{3}){1,2}$/i.test(_v0);
  _v0.s(["determineColor", 0, (_v0, _v1, _v2) => {
    if ("string" == typeof _v0 && _v0) return _v0;
    if (void 0 !== _v1 && _v2 && (_v2 === _v2.SOLID || _v2 === _v2.GRADIENT)) {
      let _v0 = ((_v0, _v1) => {
        if (_v1 === _v2.SOLID) {
          if (_v0 >= 0 && _v0 < _v4.length) return _v4[_v0].color;
        } else if (_v1 === _v2.GRADIENT && _v0 >= 0 && _v0 < _v5.length) return _v5[_v0].color;
      })(_v1, _v2);
      if (_v0) return _v0;
    }
    return _v3;
  }, "determineColorType", 0, (_v0, _v1, _v2, _v3, _v4) => {
    if (_v0) return _v0;
    if (_v1 === _v2.SOLID || _v1 === _v2.GRADIENT) return _v1;
    if (_v3 && _v2) {
      let _v0 = _v2.toLowerCase();
      if (_v4.some(_v0 => _v0.color.toLowerCase() === _v0)) return _v2.SOLID;
      if (_v5.some(_v0 => _v0.color.toLowerCase() === _v0)) return _v2.GRADIENT;
    }
    return _v4?.some(_v0 => _v0?.colors?.some(_v0 => _v0?.hex === _v2)) ? _v2.BRAND : _v2.CUSTOM;
  }, "findBrandkitForColor", 0, (_v0, _v1) => {
    if (_v0 && _v1?.length) {
      let _v0 = _v0.replace(/^#/, "").toLowerCase(),
        _v1 = _v1.find(_v0 => _v0?.colors?.some(_v0 => _v0?.hex?.replace(/^#/, "").toLowerCase() === _v0));
      return _v1 ? _v1.uri.split("/").pop() || "" : null;
    }
    return null;
  }, "isHexColor", 0, _v7, "withHashPrefix", 0, _v0 => {
    if ("string" != typeof _v0 || "" === _v0 || _v0.startsWith("#")) return _v0;
    let _v1 = `#${_v0}`;
    return _v7(_v1) ? _v1 : _v0;
  }], 0);
}