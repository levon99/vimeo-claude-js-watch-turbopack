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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  _v0.s(["BackOnYourOwnModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    apiConfig: _v2,
    onMerged: _v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)("merge"),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(""),
      _v10 = () => {
        _v5("merge"), _v7(!1), _v9(""), _v1();
      },
      _v11 = async () => {
        if ("keep" === _v4) return void _v10();
        _v7(!0), _v9("");
        try {
          await (0, _v17.dropTeam)(_v2), _v3?.(), _v10();
        } catch {
          _v9(_v17.defaultError);
        } finally {
          _v7(!1);
        }
      };
    return (0, _v1.jsxs)(_v9.Modal, {
      isOpen: _v0,
      onClose: _v10,
      isCentered: !0,
      closeOnOverlayClick: !1,
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        "data-testid": "back-on-your-own-modal",
        bg: "fill-surface",
        borderRadius: "xl",
        maxW: "488px",
        children: [(0, _v1.jsxs)(_v16.VStack, {
          gap: "sm",
          align: "start",
          pt: "lg",
          px: "lg",
          pb: "none",
          w: "100%",
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "md",
            color: "text-primary",
            children: (0, _v18.translate)({
              singular: "You're back on your own",
              dictionary: {
                es: {
                  singular: "Estás de nuevo por tu cuenta"
                },
                "de-DE": {
                  singular: "Du bist wieder auf dich allein gestellt"
                },
                "fr-FR": {
                  singular: "Vous êtes de nouveau seul"
                },
                "ja-JP": {
                  singular: "また個人用に戻りました"
                },
                "ko-KR": {
                  singular: "다시 혼자가 되었습니다"
                },
                "pt-BR": {
                  singular: "Você está por conta própria novamente"
                },
                "zh-CN": {
                  singular: "你又回到独自管理"
                }
              }
            })
          }), (0, _v1.jsx)(_v12.Paragraph, {
            size: "sm",
            color: "text-primary",
            children: (0, _v18.translate)({
              singular: "You now have two separate libraries. Choose how you'd like to keep them. How should your libraries be organised?",
              dictionary: {
                es: {
                  singular: "Ahora tienes dos bibliotecas separadas. Elige cómo te gustaría mantenerlas. ¿Cómo deberían organizarse tus bibliotecas?"
                },
                "de-DE": {
                  singular: "Du hast jetzt zwei getrennte Bibliotheken. Wähle, wie du sie behalten möchtest. Wie sollen deine Bibliotheken organisiert sein?"
                },
                "fr-FR": {
                  singular: "Vous avez maintenant deux bibliothèques séparées. Choisissez comment vous souhaitez les conserver. Comment vos bibliothèques doivent-elles être organisées ?"
                },
                "ja-JP": {
                  singular: "現在、2つの別々のライブラリがあります。どのように扱いたいですか。ライブラリの整理方法を選択してください。"
                },
                "ko-KR": {
                  singular: "지금 두 개의 별도 라이브러리가 있습니다. 유지 방식을 선택하세요. 라이브러리를 어떻게 구성하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Agora você tem duas bibliotecas separadas. Escolha como deseja mantê‑las. Como suas bibliotecas devem ser organizadas?"
                },
                "zh-CN": {
                  singular: "你现在有两个独立的库。请选择要如何保留它们。你的库应如何组织？"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v16.VStack, {
          gap: "lg",
          align: "start",
          pt: "lg",
          px: "lg",
          pb: "sm",
          w: "100%",
          children: (0, _v1.jsx)(_v14.RadioGroup, {
            value: _v4,
            onChange: _v0 => _v5(_v0),
            w: "100%",
            children: (0, _v1.jsxs)(_v16.VStack, {
              gap: "sm",
              align: "start",
              w: "100%",
              children: [(0, _v1.jsx)(_v4.Box, {
                onClick: () => _v5("merge"),
                w: "100%",
                p: "md",
                borderRadius: "lg",
                bg: "fill-component",
                border: "1px solid",
                borderColor: "merge" === _v4 ? "stroke-focus" : "transparent",
                cursor: "pointer",
                "data-testid": "back-on-your-own-merge-option",
                children: (0, _v1.jsxs)(_v16.VStack, {
                  gap: "sm",
                  align: "start",
                  w: "100%",
                  children: [(0, _v1.jsxs)(_v7.HStack, {
                    justify: "space-between",
                    align: "center",
                    w: "100%",
                    children: [(0, _v1.jsx)(_v13.Radio, {
                      value: "merge",
                      size: "md",
                      children: (0, _v18.translate)({
                        singular: "Merge into one Library",
                        dictionary: {
                          es: {
                            singular: "Fusionar en una sola Library"
                          },
                          "de-DE": {
                            singular: "Zu einer Bibliothek zusammenführen"
                          },
                          "fr-FR": {
                            singular: "Fusionner en une seule bibliothèque"
                          },
                          "ja-JP": {
                            singular: "1つのライブラリに統合する"
                          },
                          "ko-KR": {
                            singular: "하나의 라이브러리로 병합"
                          },
                          "pt-BR": {
                            singular: "Mesclar em uma Biblioteca"
                          },
                          "zh-CN": {
                            singular: "合并为一个库"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v3.Badge, {
                      variant: "new",
                      size: "sm",
                      children: (0, _v18.translate)({
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
                  }), (0, _v1.jsx)(_v4.Box, {
                    pl: "lg",
                    children: (0, _v1.jsxs)(_v12.Paragraph, {
                      size: "sm",
                      color: "text-secondary",
                      children: [(0, _v18.translate)({
                        singular: "Combine Team Library and My Library into a single Library. Nothing is deleted: folders, videos and comments all move across. Simplest to manage on your own.",
                        dictionary: {
                          es: {
                            singular: "Combina Team Library y My Library en una sola Library. No se elimina nada: las carpetas, los vídeos y los comentarios se trasladan. Es lo más sencillo de gestionar por tu cuenta."
                          },
                          "de-DE": {
                            singular: "Kombiniere Team-Bibliothek und Meine Bibliothek zu einer einzigen Bibliothek. Nichts wird gelöscht: Ordner, Videos und Kommentare werden alle übertragen. Am einfachsten verwaltest du sie selbst."
                          },
                          "fr-FR": {
                            singular: "Fusionnez la bibliothèque d'équipe et Ma bibliothèque en une seule bibliothèque. Rien n'est supprimé : les dossiers, les vidéos et les commentaires sont tous transférés. Plus simple à gérer par vous-même."
                          },
                          "ja-JP": {
                            singular: "チームライブラリとマイライブラリを1つのライブラリに統合します。何も削除されません：フォルダ、動画、コメントはすべて移行されます。自分だけで管理するのが最も簡単です。"
                          },
                          "ko-KR": {
                            singular: "팀 라이브러리와 내 라이브러리를 하나의 라이브러리로 통합합니다. 아무 것도 삭제되지 않습니다: 폴더, 동영상 및 댓글이 모두 옮겨집니다. 혼자 관리하기에 가장 간단합니다."
                          },
                          "pt-BR": {
                            singular: "Combine a Biblioteca da Equipe e a Minha Biblioteca em uma única Biblioteca. Nada é excluído: pastas, vídeos e comentários são todos transferidos. A forma mais simples de gerenciar por conta própria."
                          },
                          "zh-CN": {
                            singular: "将“团队库”和“我的库”合并为一个库。不会删除任何内容：文件夹、视频和评论都会一并迁移。自己管理最简单。"
                          }
                        }
                      }), " ", (0, _v1.jsx)(_v8.Link, {
                        href: _v19.LIBRARY_MERGE_HELP_URL,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        color: "text-primary",
                        sx: {
                          textDecoration: "underline"
                        },
                        children: (0, _v18.translate)({
                          singular: "See how it works.",
                          dictionary: {
                            es: {
                              singular: "Ver cómo funciona."
                            },
                            "de-DE": {
                              singular: "Sieh dir an, wie es funktioniert."
                            },
                            "fr-FR": {
                              singular: "Voir comment cela fonctionne."
                            },
                            "ja-JP": {
                              singular: "仕組みを見る。"
                            },
                            "ko-KR": {
                              singular: "작동 방식을 확인해 보세요."
                            },
                            "pt-BR": {
                              singular: "Veja como funciona."
                            },
                            "zh-CN": {
                              singular: "了解如何操作。"
                            }
                          }
                        })
                      })]
                    })
                  })]
                })
              }), (0, _v1.jsx)(_v4.Box, {
                onClick: () => _v5("keep"),
                w: "100%",
                p: "md",
                borderRadius: "lg",
                bg: "fill-component",
                border: "1px solid",
                borderColor: "keep" === _v4 ? "stroke-focus" : "transparent",
                cursor: "pointer",
                "data-testid": "back-on-your-own-keep-option",
                children: (0, _v1.jsxs)(_v16.VStack, {
                  gap: "sm",
                  align: "start",
                  w: "100%",
                  children: [(0, _v1.jsx)(_v13.Radio, {
                    value: "keep",
                    size: "md",
                    children: (0, _v18.translate)({
                      singular: "Keep them separate",
                      dictionary: {
                        es: {
                          singular: "Mantenerlos por separado"
                        },
                        "de-DE": {
                          singular: "Getrennt lassen"
                        },
                        "fr-FR": {
                          singular: "Les garder séparées"
                        },
                        "ja-JP": {
                          singular: "別々のままにする"
                        },
                        "ko-KR": {
                          singular: "별도로 유지"
                        },
                        "pt-BR": {
                          singular: "Manter separadas"
                        },
                        "zh-CN": {
                          singular: "保持分开"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v4.Box, {
                    pl: "lg",
                    children: (0, _v1.jsx)(_v12.Paragraph, {
                      size: "sm",
                      color: "text-secondary",
                      children: (0, _v18.translate)({
                        singular: "Keep My Library and Team Library as two separate spaces, just as they are today. Nothing changes, and you can merge them anytime later.",
                        dictionary: {
                          es: {
                            singular: "Mantén My Library y Team Library como dos espacios separados, tal como están hoy. Nada cambia, y puedes fusionarlos en cualquier momento."
                          },
                          "de-DE": {
                            singular: "Behalten Sie My Library und Team Library als zwei getrennte Bereiche, genau wie heute. Es ändert sich nichts, und Sie können sie jederzeit später zusammenführen."
                          },
                          "fr-FR": {
                            singular: "Conserver My Library et Team Library comme deux espaces séparés, tels qu'ils sont aujourd'hui. Rien ne change, et vous pouvez les fusionner à tout moment par la suite."
                          },
                          "ja-JP": {
                            singular: "My Library と Team Library を、現状のまま 2 つの別々のスペースとして維持してください。何も変わりませんし、後でいつでもマージできます。"
                          },
                          "ko-KR": {
                            singular: "My Library와 Team Library를 오늘과 같이 별도의 공간으로 유지합니다. 아무것도 변경되지 않으며 언제든 나중에 병합할 수 있습니다."
                          },
                          "pt-BR": {
                            singular: "Mantenha My Library e Team Library como dois espaços separados, exatamente como estão hoje. Nada muda, e você pode mesclá-los a qualquer momento."
                          },
                          "zh-CN": {
                            singular: "将 My Library 和 Team Library 保持为两个独立的空间，正如现在一样。没有任何改变，稍后你可以随时将它们合并。"
                          }
                        }
                      })
                    })
                  })]
                })
              })]
            })
          })
        }), (0, _v1.jsxs)(_v16.VStack, {
          gap: "sm",
          align: "center",
          px: "lg",
          py: "md",
          w: "100%",
          children: [_v8 && (0, _v1.jsx)(_v15.Text, {
            fontSize: "0.75rem",
            color: "status-destructive-primary",
            textAlign: "center",
            children: _v8
          }), (0, _v1.jsx)(_v5.Button, {
            variant: "primary",
            size: "md",
            onClick: _v11,
            isLoading: _v6,
            isDisabled: _v6,
            w: "100%",
            "data-testid": "back-on-your-own-merge-button",
            children: "keep" === _v4 ? (0, _v18.translate)({
              singular: "Keep them separate",
              dictionary: {
                es: {
                  singular: "Mantenerlos por separado"
                },
                "de-DE": {
                  singular: "Getrennt lassen"
                },
                "fr-FR": {
                  singular: "Les garder séparées"
                },
                "ja-JP": {
                  singular: "別々のままにする"
                },
                "ko-KR": {
                  singular: "별도로 유지"
                },
                "pt-BR": {
                  singular: "Manter separadas"
                },
                "zh-CN": {
                  singular: "保持分开"
                }
              }
            }) : (0, _v18.translate)({
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
      })]
    });
  }]);
}