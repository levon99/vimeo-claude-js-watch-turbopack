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
    _v9 = _v0.i(0);
  let _v10 = _v0 => (0, _v1.jsx)(_v9.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "m10.71 11.29-2.5-2.5a1.004 1.004 0 0 0-1.42 1.42l.8.79H4V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-4h3.59l-.8.79a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33ZM21 6a1 1 0 0 0-1 1v4h-3.59l.8-.79a1.005 1.005 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-.8-.79H20v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z",
      fill: "currentColor"
    })
  });
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = "manage_team_banner";
  _v0.s(["MergeLibrariesBanner", 0, ({
    userId: _v0,
    apiConfig: _v1,
    onMerged: _v2
  }) => {
    let [_v3, _v4] = (0, _v2.useState)(!1),
      {
        trackMergeLibrariesClicked: _v5,
        trackMergeLibrariesHelpClicked: _v6
      } = (0, _v12.useContentSpaceTracking)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v6.Flex, {
        direction: {
          base: "column",
          md: "row"
        },
        gap: "md",
        align: {
          base: "stretch",
          md: "start"
        },
        p: "lg",
        bgColor: "fill-surface",
        borderRadius: "lg",
        w: "100%",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          gap: "md",
          align: "start",
          flex: "1 1 auto",
          minW: 0,
          children: [(0, _v1.jsx)(_v6.Flex, {
            align: "center",
            justify: "center",
            alignSelf: "stretch",
            p: "sm",
            borderRadius: "sm",
            bgColor: "fill-component-hover",
            flexShrink: 0,
            w: "56px",
            children: (0, _v1.jsx)(_v4.Box, {
              display: "inline-flex",
              fontSize: "1.5rem",
              children: (0, _v1.jsx)(_v10, {})
            })
          }), (0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "sm",
            flex: "1 0 0",
            minW: 0,
            children: [(0, _v1.jsxs)(_v6.Flex, {
              gap: "md",
              align: "center",
              flexWrap: "wrap",
              children: [(0, _v1.jsx)(_v7.Header, {
                size: "sm",
                color: "text-primary",
                children: (0, _v11.translate)({
                  singular: "Merge your libraries",
                  dictionary: {
                    es: {
                      singular: "Fusiona tus bibliotecas"
                    },
                    "de-DE": {
                      singular: "Führe deine Bibliotheken zusammen"
                    },
                    "fr-FR": {
                      singular: "Fusionnez vos bibliothèques"
                    },
                    "ja-JP": {
                      singular: "あなたのライブラリを統合"
                    },
                    "ko-KR": {
                      singular: "라이브러리를 병합하세요"
                    },
                    "pt-BR": {
                      singular: "Mescle suas bibliotecas"
                    },
                    "zh-CN": {
                      singular: "合并你的资料库"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v3.Badge, {
                variant: "new",
                size: "sm",
                bgColor: "vimeoBlue.500",
                color: "gray.900",
                children: (0, _v11.translate)({
                  singular: "Recommended",
                  dictionary: {
                    es: {
                      singular: "Recomendado"
                    },
                    "de-DE": {
                      singular: "Empfohlen"
                    },
                    "fr-FR": {
                      singular: "Recommandé"
                    },
                    "ja-JP": {
                      singular: "おすすめ"
                    },
                    "ko-KR": {
                      singular: "추천"
                    },
                    "pt-BR": {
                      singular: "Recomendados"
                    },
                    "zh-CN": {
                      singular: "推荐"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v8.Paragraph, {
              size: "sm",
              color: "text-secondary",
              maxW: "682px",
              children: (0, _v11.translate)({
                singular: "You're working solo, but you still have two separate libraries: My Library and an orphaned Team Library shared with no one. Merge them into a single space to keep everything in one place.",
                dictionary: {
                  es: {
                    singular: "Estás trabajando en solitario, pero aun así tienes dos bibliotecas separadas: Mi biblioteca y una Biblioteca del equipo huérfana que no compartes con nadie. Únelas en un único espacio para mantener todo en un mismo lugar."
                  },
                  "de-DE": {
                    singular: "Du arbeitest alleine, hast aber trotzdem zwei getrennte Bibliotheken: Meine Bibliothek und eine verwaiste Team-Bibliothek, die mit niemandem geteilt wird. Führe sie zu einem einzigen Bereich zusammen, damit alles an einem Ort bleibt."
                  },
                  "fr-FR": {
                    singular: "Vous travaillez en solo, mais vous avez toujours deux bibliothèques distinctes\x0f: Ma bibliothèque et une Bibliothèque d’équipe orpheline qui n’est partagée avec personne. Fusionnez-les en un seul espace pour tout garder au même endroit."
                  },
                  "ja-JP": {
                    singular: "現在は一人で作業していますが、マイライブラリと誰とも共有されていない孤立したチームライブラリという別々の2つのライブラリがあります。すべてを一か所にまとめるために、それらを1つのスペースに統合してください。"
                  },
                  "ko-KR": {
                    singular: "혼자 작업하고 있지만 여전히 두 개의 별도 라이브러리가 있습니다: 내 라이브러리와 공유 대상이 없는 팀 라이브러리. 모든 항목을 한곳에 모아두려면 이들을 하나의 공간으로 병합하세요."
                  },
                  "pt-BR": {
                    singular: "Você está trabalhando sozinho, mas ainda tem duas bibliotecas separadas: Minha Biblioteca e uma Biblioteca da equipe órfã que não é compartilhada com ninguém. Mescle-as em um único espaço para manter tudo em um só lugar."
                  },
                  "zh-CN": {
                    singular: "你是独自工作，但仍然有两个独立的资料库：我的资料库以及一个未与任何人共享的孤立团队资料库。将它们合并成一个空间，以便将所有内容集中到一个地方。"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v6.Flex, {
          gap: "sm",
          align: "center",
          flexShrink: 0,
          direction: {
            base: "column",
            sm: "row"
          },
          w: {
            base: "100%",
            md: "auto"
          },
          children: [(0, _v1.jsx)(_v5.Button, {
            variant: "tertiary",
            size: "md",
            as: "a",
            href: _v14.LIBRARY_MERGE_HELP_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            w: {
              base: "100%",
              sm: "auto"
            },
            onClick: () => _v6({
              surface: _v15
            }),
            children: (0, _v11.translate)({
              singular: "See how it works",
              dictionary: {
                es: {
                  singular: "Ver cómo funciona"
                },
                "de-DE": {
                  singular: "Sieh dir an, wie es funktioniert"
                },
                "fr-FR": {
                  singular: "Voir comment cela fonctionne"
                },
                "ja-JP": {
                  singular: "仕組みを見る"
                },
                "ko-KR": {
                  singular: "작동 방식을 확인하세요"
                },
                "pt-BR": {
                  singular: "Veja como funciona"
                },
                "zh-CN": {
                  singular: "了解它如何工作"
                }
              }
            })
          }), (0, _v1.jsx)(_v5.Button, {
            variant: "primary",
            size: "md",
            onClick: () => {
              _v5({
                surface: _v15
              }), _v4(!0);
            },
            "data-testid": "merge-libraries-banner-cta",
            w: {
              base: "100%",
              sm: "auto"
            },
            children: (0, _v11.translate)({
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
          })]
        })]
      }), (0, _v1.jsx)(_v13.MergeLibrariesModal, {
        isOpen: _v3,
        onClose: () => _v4(!1),
        userId: _v0,
        apiConfig: _v1,
        onMerged: _v2,
        surface: _v15
      })]
    });
  }], 0);
}