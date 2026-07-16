{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v0 => (0, _v1.jsx)(_v4.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M15 11h-2V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2Zm-3-9a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z",
      fill: "currentColor"
    })
  });
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["LibrariesBecomingOneModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    userId: _v2,
    mergeDate: _v3
  }) => {
    let _v4 = (0, _v6.useIsMobile)(),
      {
        trackLibraryBecomingOneAnnouncementDisplayed: _v5,
        trackLibraryBecomingOneAnnouncementCtaClicked: _v6,
        trackLibraryBecomingOneAnnouncementDismissed: _v7
      } = (0, _v8.useContentSpaceTracking)();
    return (0, _v9.usePicoEffect)(() => {
      _v0 && _v5({
        mergeDate: _v3 || void 0
      });
    }, [_v0]), (0, _v1.jsx)(_v11.LibraryMergeModal, {
      isOpen: _v0,
      onClose: () => {
        _v7(), _v1();
      },
      testId: "libraries-becoming-one-modal",
      title: (0, _v7.translate)({
        singular: "Your two libraries are becoming one",
        dictionary: {
          es: {
            singular: "Tus dos bibliotecas se están convirtiendo en una sola"
          },
          "de-DE": {
            singular: "Deine beiden Bibliotheken werden zu einer einzigen Bibliothek."
          },
          "fr-FR": {
            singular: "Vos deux bibliothèques se réunissent en une seule."
          },
          "ja-JP": {
            singular: "あなたの2つのライブラリが1つになります"
          },
          "ko-KR": {
            singular: "두 라이브러리가 하나로 통합됩니다"
          },
          "pt-BR": {
            singular: "Suas duas bibliotecas estão se tornando uma só"
          },
          "zh-CN": {
            singular: "你的两个资料库正在合并为一个"
          }
        }
      }),
      extra: _v3 ? (0, _v1.jsx)(_v10.LibraryMergeAlert, {
        tone: "caution",
        icon: (0, _v1.jsx)(_v5, {}),
        linkLabel: (0, _v7.translate)({
          singular: "Learn more",
          dictionary: {
            es: {
              singular: "Ver más"
            },
            "de-DE": {
              singular: "Mehr dazu"
            },
            "fr-FR": {
              singular: "En savoir plus "
            },
            "ja-JP": {
              singular: "詳細を見る"
            },
            "ko-KR": {
              singular: "자세히 보기"
            },
            "pt-BR": {
              singular: "Saiba mais"
            },
            "zh-CN": {
              singular: "了解更多"
            }
          }
        }),
        onLinkClick: () => _v6({
          cta: "learn_more"
        }),
        children: (0, _v7.translate)({
          singular: "We'll combine them automatically on {DATE}.",
          replacements: {
            DATE: _v3
          },
          dictionary: {
            es: {
              singular: "Las combinaremos automáticamente el {DATE}."
            },
            "de-DE": {
              singular: "Wir werden sie am {DATE} automatisch zusammenführen."
            },
            "fr-FR": {
              singular: "Nous les fusionnerons automatiquement le {DATE}."
            },
            "ja-JP": {
              singular: "これらは{DATE}に自動的に統合されます。"
            },
            "ko-KR": {
              singular: "{DATE}에 자동으로 통합됩니다."
            },
            "pt-BR": {
              singular: "Nós as combinaremos automaticamente em {DATE}."
            },
            "zh-CN": {
              singular: "我们会在 {DATE} 自动合并它们。"
            }
          }
        })
      }) : null,
      footer: (0, _v1.jsx)(_v3.Button, {
        variant: "primary",
        size: "md",
        w: "100%",
        as: "a",
        href: _v13.LIBRARY_MERGE_HELP_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: () => _v6({
          cta: "see_whats_changing"
        }),
        children: (0, _v7.translate)({
          singular: "See exactly what's changing",
          dictionary: {
            es: {
              singular: "Ver exactamente qué está cambiando"
            },
            "de-DE": {
              singular: "Erfahre genau, was sich ändert"
            },
            "fr-FR": {
              singular: "Voir exactement ce qui change"
            },
            "ja-JP": {
              singular: "何がどのように変わるのかを正確に確認する"
            },
            "ko-KR": {
              singular: "정확히 어떤 점이 변경되는지 확인하세요"
            },
            "pt-BR": {
              singular: "Veja exatamente o que está mudando"
            },
            "zh-CN": {
              singular: "查看具体更改内容"
            }
          }
        })
      }),
      children: (0, _v1.jsx)(_v2.Box, {
        w: "100%",
        display: {
          base: "none",
          md: "block"
        },
        children: (0, _v1.jsx)(_v12.LibraryMergeVisualization, {
          userId: _v2,
          enabled: _v0 && !_v4
        })
      })
    });
  }], 0);
  var _v14 = _v0.i(0);
  _v0.s(["LibrariesNowOneModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onGoToLibrary: _v2
  }) => {
    let {
      trackLibraryNowOneAnnouncementDisplayed: _v3,
      trackLibraryNowOneAnnouncementCtaClicked: _v4,
      trackLibraryNowOneAnnouncementDismissed: _v5
    } = (0, _v8.useContentSpaceTracking)();
    return (0, _v9.usePicoEffect)(() => {
      _v0 && _v3();
    }, [_v0]), (0, _v1.jsx)(_v11.LibraryMergeModal, {
      isOpen: _v0,
      onClose: () => {
        _v5(), _v1();
      },
      testId: "libraries-now-one-modal",
      title: (0, _v7.translate)({
        singular: "Your two libraries are now one!",
        dictionary: {
          es: {
            singular: "¡Tus dos bibliotecas ahora son una sola!"
          },
          "de-DE": {
            singular: "Deine beiden Bibliotheken sind jetzt eine einzige Bibliothek!"
          },
          "fr-FR": {
            singular: "Vos deux bibliothèques ne forment désormais qu'une seule !"
          },
          "ja-JP": {
            singular: "あなたの2つのライブラリは、今や1つになりました！"
          },
          "ko-KR": {
            singular: "두 라이브러리가 이제 하나가 되었습니다!"
          },
          "pt-BR": {
            singular: "Suas duas bibliotecas agora são uma só!"
          },
          "zh-CN": {
            singular: "你的两个资料库现在已合并为一个！"
          }
        }
      }),
      subtitle: (0, _v7.translate)({
        singular: "My library and Team library have been combined into a single Library.",
        dictionary: {
          es: {
            singular: "Mi biblioteca y la biblioteca del equipo se han combinado en una sola biblioteca."
          },
          "de-DE": {
            singular: "Meine Bibliothek und die Team-Bibliothek wurden zu einer einzigen Bibliothek zusammengeführt."
          },
          "fr-FR": {
            singular: "Ma bibliothèque et la bibliothèque d’équipe ont été fusionnées en une seule bibliothèque."
          },
          "ja-JP": {
            singular: "マイライブラリとチームライブラリは1つのライブラリに統合されました。"
          },
          "ko-KR": {
            singular: "내 라이브러리와 팀 라이브러리가 하나의 라이브러리로 통합되었습니다."
          },
          "pt-BR": {
            singular: "Minha biblioteca e a biblioteca da equipe foram combinadas em uma única biblioteca."
          },
          "zh-CN": {
            singular: "我的资料库和团队资料库已合并为单一资料库。"
          }
        }
      }),
      footer: (0, _v1.jsxs)(_v14.VStack, {
        gap: "sm",
        align: "center",
        w: "100%",
        children: [(0, _v1.jsx)(_v3.Button, {
          variant: "primary",
          size: "md",
          w: "100%",
          onClick: () => {
            _v4({
              cta: "go_to_library"
            }), _v2();
          },
          children: (0, _v7.translate)({
            singular: "Go to your Library",
            dictionary: {
              es: {
                singular: "Ir a tu biblioteca"
              },
              "de-DE": {
                singular: "Gehe zu deiner Bibliothek"
              },
              "fr-FR": {
                singular: "Accéder à votre bibliothèque"
              },
              "ja-JP": {
                singular: "ライブラリへ移動"
              },
              "ko-KR": {
                singular: "라이브러리로 이동"
              },
              "pt-BR": {
                singular: "Ir para sua Biblioteca"
              },
              "zh-CN": {
                singular: "前往你的资料库"
              }
            }
          })
        }), (0, _v1.jsx)(_v3.Button, {
          variant: "tertiary",
          size: "md",
          as: "a",
          href: _v13.LIBRARY_MERGE_HELP_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => _v4({
            cta: "see_whats_changed"
          }),
          children: (0, _v7.translate)({
            singular: "See what's changed",
            dictionary: {
              es: {
                singular: "Ver qué ha cambiado"
              },
              "de-DE": {
                singular: "Sieh dir an, was sich geändert hat"
              },
              "fr-FR": {
                singular: "Voir ce qui a changé"
              },
              "ja-JP": {
                singular: "変更点を確認する"
              },
              "ko-KR": {
                singular: "변경된 내용을 확인하세요"
              },
              "pt-BR": {
                singular: "Veja o que mudou"
              },
              "zh-CN": {
                singular: "查看已更改的内容"
              }
            }
          })
        })]
      })
    });
  }], 0);
}