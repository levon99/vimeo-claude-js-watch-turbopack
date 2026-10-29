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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = _v16.default.form.withConfig({
      displayName: "Form",
      componentId: "sc-87a15327-0"
    })`
  display: flex;
  flex-direction: column;
`,
    _v20 = _v16.keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`,
    _v21 = _v16.default.div.withConfig({
      displayName: "Form__FormError",
      componentId: "sc-87a15327-1"
    })`
  width: 100%;
  margin: 0 auto 0.5rem;
  padding: ${(0, _v15.rem)(12)} ${(0, _v15.rem)(48)} ${(0, _v15.rem)(12)} ${(0, _v15.rem)(16)};
  background: ${_v18.bokehTheme.colors.red["50"]};
  border-radius: ${(0, _v15.rem)(3)};
  animation: ${_v20} 300ms ease-in-out both 150ms;
`,
    _v22 = (0, _v16.default)(_v17.Button).withConfig({
      displayName: "Form__SubmitButton",
      componentId: "sc-87a15327-2"
    })`
  align-self: flex-end;
`;
  var _v23 = _v0.i(0);
  let _v24 = function ({
    locale: _v0,
    locales: _v1,
    localeLabels: _v2,
    token: _v3
  }) {
    let [_v4, _v5] = (0, _v9.useState)(""),
      [_v6, _v7] = (0, _v9.useState)(!1),
      [_v8, _v9] = (0, _v9.useState)(_v0);
    return (0, _v1.jsxs)(_v19, {
      onSubmit: _v0 => {
        _v0.preventDefault(), _v7(!0), _v5(""), _v0.target, (0, _v23.setLanguage)({
          token: _v3,
          locale: _v8
        }).then(_v0 => {
          _v7(!1), _v0.ok ? (0, _v14.applyLanguageChange)(_v8) : _v5((0, _v8.translate)({
            singular: "Sorry, something weird happened. Please try again.",
            dictionary: {
              es: {
                singular: "Lo sentimos, algo salió mal. Inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Hier ist leider etwas schief gegangen. Bitte erneut versuchen."
              },
              "fr-FR": {
                singular: "Désolé, quelque chose de bizarre s'est produit. Veuillez essayer à nouveau."
              },
              "ja-JP": {
                singular: "申し訳ありません、問題が発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다, 알 수 없는 오류가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Desculpe, algo estranho aconteceu. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "对不起，出现异常问题。请重试。"
              }
            }
          }));
        });
      },
      children: [_v4 ? (0, _v1.jsx)(_v21, {
        children: (0, _v1.jsx)(_v10.Paragraph, {
          size: "md",
          style: {
            margin: 0
          },
          children: _v4
        })
      }) : null, (0, _v1.jsx)(_v12.RadioGroup, {
        value: _v8,
        onChange: _v9,
        children: (0, _v1.jsx)(_v13.Stack, {
          spacing: "sm",
          children: _v1.map((_v0, _v1) => (0, _v1.jsx)(_v11.Radio, {
            value: _v0,
            children: _v2[_v1]
          }, _v0))
        })
      }), (0, _v1.jsx)(_v22, {
        type: "submit",
        isLoading: _v6,
        children: (0, _v8.translate)({
          singular: "Confirm",
          dictionary: {
            es: {
              singular: "Confirmar"
            },
            "de-DE": {
              singular: "Bestätigen"
            },
            "fr-FR": {
              singular: "Confirmer"
            },
            "ja-JP": {
              singular: "確定"
            },
            "ko-KR": {
              singular: "확인"
            },
            "pt-BR": {
              singular: "Confirmar"
            },
            "zh-CN": {
              singular: "确认"
            }
          }
        })
      })]
    });
  };
  _v0.s(["LanguageSelectModal", 0, function ({
    active: _v0,
    activeSet: _v1,
    locale: _v2,
    localeLabels: _v3 = [],
    locales: _v4 = [],
    token: _v5
  }) {
    return (0, _v1.jsxs)(_v2.Modal, {
      isOpen: !!_v0,
      onClose: () => _v1(null),
      children: [(0, _v1.jsx)(_v6.ModalOverlay, {}), (0, _v1.jsxs)(_v4.ModalContent, {
        p: "lg",
        minW: {
          base: "90vw",
          sm: (0, _v7.rem)(448)
        },
        children: [(0, _v1.jsx)(_v5.ModalHeader, {
          p: 0,
          mb: "md",
          children: (0, _v8.translate)({
            singular: "Choose a different language",
            dictionary: {
              es: {
                singular: "Elegir otro idioma"
              },
              "de-DE": {
                singular: "Andere Sprache wählen"
              },
              "fr-FR": {
                singular: "Changer de langue"
              },
              "ja-JP": {
                singular: "別の言語を選択"
              },
              "ko-KR": {
                singular: "다른 언어 선택"
              },
              "pt-BR": {
                singular: "Escolha um Idioma Diferente"
              },
              "zh-CN": {
                singular: "选择其他语言"
              }
            }
          })
        }), (0, _v1.jsx)(_v3.ModalCloseButton, {}), (0, _v1.jsx)(_v24, {
          locale: _v2,
          locales: _v4,
          localeLabels: _v3,
          token: _v5
        })]
      })]
    });
  }], 0);
}