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
    _v10 = _v0.i(0);
  let _v11 = () => void 0;
  _v0.s(["MergeLibrariesModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    userId: _v2,
    apiConfig: _v3,
    onMerged: _v4
  }) => {
    let [_v5, _v6] = (0, _v2.useState)(!1),
      [_v7, _v8] = (0, _v2.useState)(""),
      _v9 = (0, _v10.useSuppressNowOneAnnouncement)(),
      _v10 = () => {
        _v6(!1), _v8(""), _v1();
      },
      _v11 = async () => {
        _v6(!0), _v8("");
        try {
          await (0, _v6.dropTeam)(_v3);
          try {
            await _v9(_v2);
          } catch {}
          _v4?.(), _v10();
        } catch {
          _v8(_v6.defaultError);
        } finally {
          _v6(!1);
        }
      };
    return (0, _v1.jsx)(_v8.LibraryMergeModal, {
      isOpen: _v0,
      onClose: _v10,
      testId: "merge-libraries-modal",
      title: (0, _v7.translate)({
        singular: "Merge your two libraries into one",
        dictionary: {
          es: {
            singular: "Fusiona tus dos bibliotecas en una"
          },
          "de-DE": {
            singular: "Führe deine beiden Bibliotheken zu einer zusammen"
          },
          "fr-FR": {
            singular: "Fusionnez vos deux bibliothèques en une seule"
          },
          "ja-JP": {
            singular: "あなたの2つのライブラリを1つに統合する"
          },
          "ko-KR": {
            singular: "두 개의 라이브러리를 하나로 합치기"
          },
          "pt-BR": {
            singular: "Mescle suas duas bibliotecas em uma só"
          },
          "zh-CN": {
            singular: "将你的两个资料库合并为一个"
          }
        }
      }),
      showBadge: !1,
      footer: (0, _v1.jsxs)(_v5.VStack, {
        gap: "sm",
        align: "center",
        w: "100%",
        children: [_v7 && (0, _v1.jsx)(_v4.Text, {
          fontSize: "0.75rem",
          color: "status-destructive-primary",
          textAlign: "center",
          children: _v7
        }), (0, _v1.jsx)(_v3.Button, {
          variant: "primary",
          size: "md",
          w: "100%",
          onClick: _v11,
          isLoading: _v5,
          isDisabled: _v5,
          "data-testid": "merge-libraries-confirm-button",
          children: (0, _v7.translate)({
            singular: "Merge libraries",
            dictionary: {
              es: {
                singular: "Fusionar bibliotecas"
              },
              "de-DE": {
                singular: "Bibliotheken zusammenführen"
              },
              "fr-FR": {
                singular: "Fusionner les bibliothèques"
              },
              "ja-JP": {
                singular: "ライブラリを統合"
              },
              "ko-KR": {
                singular: "라이브러리 병합"
              },
              "pt-BR": {
                singular: "Mesclar bibliotecas"
              },
              "zh-CN": {
                singular: "合并资料库"
              }
            }
          })
        }), (0, _v1.jsx)(_v3.Button, {
          variant: "tertiary",
          size: "md",
          w: "100%",
          onClick: _v11,
          isDisabled: _v5,
          children: (0, _v7.translate)({
            singular: "What happens when I merge?",
            dictionary: {
              es: {
                singular: "¿Qué sucede cuando fusiono?"
              },
              "de-DE": {
                singular: "Was passiert, wenn ich sie zusammenführe?"
              },
              "fr-FR": {
                singular: "Que se passe-t-il lorsque je fusionne\x0f?"
              },
              "ja-JP": {
                singular: "統合するとどうなりますか？"
              },
              "ko-KR": {
                singular: "병합하면 어떤 일이 발생하나요?"
              },
              "pt-BR": {
                singular: "O que acontece quando eu mesclo?"
              },
              "zh-CN": {
                singular: "合并后会发生什么？"
              }
            }
          })
        })]
      }),
      children: (0, _v1.jsx)(_v9.LibraryMergeVisualization, {
        userId: _v2,
        enabled: _v0
      })
    });
  }]);
}