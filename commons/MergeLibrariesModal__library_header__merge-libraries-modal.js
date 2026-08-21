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
    _v14 = _v0.i(0);
  _v0.s(["MergeLibrariesModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    userId: _v2,
    apiConfig: _v3,
    onMerged: _v4,
    surface: _v5 = "library_header"
  }) => {
    let [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(""),
      _v10 = (0, _v13.useSuppressNowOneAnnouncement)(),
      {
        trackMergeLibrariesConfirmed: _v11,
        trackMergeLibrariesSucceeded: _v12,
        trackMergeLibrariesFailed: _v13,
        trackMergeLibrariesDismissed: _v14,
        trackMergeLibrariesHelpClicked: _v15
      } = (0, _v10.useContentSpaceTracking)(),
      _v16 = (0, _v2.useRef)(!1),
      _v17 = (0, _v2.useRef)(!1),
      _v18 = (0, _v7.useIsMobile)(),
      _v19 = () => {
        _v16.current || _v14({
          surface: _v5
        }), _v16.current = !1, _v7(!1), _v9(""), _v1();
      },
      _v20 = async () => {
        if (!_v17.current) {
          _v17.current = !0, _v16.current = !0, _v7(!0), _v9(""), _v11({
            surface: _v5
          });
          try {
            await (0, _v8.dropTeam)(_v3), _v12({
              surface: _v5
            });
            try {
              await _v10(_v2);
            } catch {}
            _v4?.(), _v19();
          } catch {
            _v13({
              surface: _v5
            }), _v9(_v8.defaultError);
          } finally {
            _v7(!1), _v17.current = !1;
          }
        }
      };
    return (0, _v1.jsx)(_v11.LibraryMergeModal, {
      isOpen: _v0,
      onClose: _v19,
      testId: "merge-libraries-modal",
      title: (0, _v9.translate)({
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
      footer: (0, _v1.jsxs)(_v6.VStack, {
        gap: "sm",
        align: "center",
        w: "100%",
        children: [_v8 && (0, _v1.jsx)(_v5.Text, {
          fontSize: "0.75rem",
          color: "status-destructive-primary",
          textAlign: "center",
          children: _v8
        }), (0, _v1.jsx)(_v4.Button, {
          variant: "primary",
          size: "md",
          w: "100%",
          onClick: _v20,
          isLoading: _v6,
          isDisabled: _v6,
          "data-testid": "merge-libraries-confirm-button",
          children: (0, _v9.translate)({
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
        }), (0, _v1.jsx)(_v4.Button, {
          variant: "tertiary",
          size: "md",
          w: "100%",
          as: "a",
          href: _v14.LIBRARY_MERGE_HELP_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          isDisabled: _v6,
          onClick: () => _v15({
            surface: _v5
          }),
          children: (0, _v9.translate)({
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
      children: (0, _v1.jsx)(_v3.Box, {
        w: "100%",
        display: {
          base: "none",
          md: "block"
        },
        children: (0, _v1.jsx)(_v12.LibraryMergeVisualization, {
          userId: _v2,
          enabled: _v0 && !_v18
        })
      })
    });
  }]);
}