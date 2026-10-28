{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["MainLanguageSection", 0, ({
    locales: _v0,
    sourceLocale: _v1,
    onChange: _v2,
    isDisabled: _v3
  }) => {
    let _v4 = (0, _v9.useLocale)(),
      {
        trackLocalizationMainLanguageChanged: _v5
      } = (0, _v10.useLocalizationResourceTracking)(),
      _v6 = (0, _v2.useMemo)(() => _v0.map(_v0 => ({
        label: (0, _v11.getLocaleOptionLabel)(_v0, _v4),
        value: _v0
      })), [_v0, _v4]);
    return (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      gap: "xs",
      w: "100%",
      children: [(0, _v1.jsx)(_v6.Text, {
        color: "text-primary",
        variant: "heading-xs",
        children: (0, _v8.translate)({
          singular: "Main language",
          dictionary: {
            es: {
              singular: "Idioma principal"
            },
            "de-DE": {
              singular: "Hauptsprache"
            },
            "fr-FR": {
              singular: "Langue principale"
            },
            "ja-JP": {
              singular: "メイン言語"
            },
            "ko-KR": {
              singular: "기본 언어"
            },
            "pt-BR": {
              singular: "Idioma principal"
            },
            "zh-CN": {
              singular: "主要语言"
            }
          }
        })
      }), (0, _v1.jsx)(_v7.Tooltip, {
        isDisabled: !_v3,
        label: (0, _v8.translate)({
          singular: "You cannot change the main language once you have started translating. Remove all translations to change the main language.",
          dictionary: {
            es: {
              singular: "No puede cambiar el idioma principal una vez que haya comenzado a traducir. Elimine todas las traducciones para cambiar el idioma principal."
            },
            "de-DE": {
              singular: "Sie können die Hauptsprache nicht mehr ändern, sobald Sie mit der Übersetzung begonnen haben. Entfernen Sie alle Übersetzungen, um die Hauptsprache zu ändern."
            },
            "fr-FR": {
              singular: "Vous ne pouvez pas modifier la langue principale une fois que vous avez commencé à traduire. Supprimez toutes les traductions pour pouvoir changer la langue principale."
            },
            "ja-JP": {
              singular: "翻訳を開始した後はメイン言語を変更できません。メイン言語を変更するには、すべての翻訳を削除してください。"
            },
            "ko-KR": {
              singular: "번역을 시작한 후에는 기본 언어를 변경할 수 없습니다. 기본 언어를 변경하려면 모든 번역을 제거하세요."
            },
            "pt-BR": {
              singular: "Não é possível alterar o idioma principal depois de começar a traduzir. Remova todas as traduções para alterar o idioma principal."
            },
            "zh-CN": {
              singular: "一旦开始翻译，就无法更改主要语言。要更改主要语言，请先删除所有翻译。"
            }
          }
        }),
        children: (0, _v1.jsx)(_v3.Box, {
          as: "span",
          display: "block",
          w: "100%",
          children: (0, _v1.jsx)(_v5.Select, {
            "data-testid": "main-language-select",
            disabled: _v3,
            items: _v6,
            onValueChange: _v0 => {
              let _v1 = _v0.find(_v0 => _v0 === _v0.value[0]);
              void 0 !== _v1 && (_v1 !== _v1 && _v5({
                previousLocale: _v1,
                locale: _v1
              }), _v2(_v1));
            },
            placeholder: (0, _v8.translate)({
              singular: "Select language",
              dictionary: {
                es: {
                  singular: "Seleccionar el idioma"
                },
                "de-DE": {
                  singular: "Sprache aussuchen"
                },
                "fr-FR": {
                  singular: "Sélectionner la langue"
                },
                "ja-JP": {
                  singular: "言語を選択"
                },
                "ko-KR": {
                  singular: "언어 선택"
                },
                "pt-BR": {
                  singular: "Selecione o idioma"
                },
                "zh-CN": {
                  singular: "选择语言"
                }
              }
            }),
            value: null == _v1 ? [] : [_v1],
            variant: "withCheck",
            withPortal: !1
          })
        })
      })]
    });
  }]);
}