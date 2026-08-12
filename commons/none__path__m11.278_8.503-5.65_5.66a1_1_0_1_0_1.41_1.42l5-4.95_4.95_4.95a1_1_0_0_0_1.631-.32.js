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
  let _v12 = _v0 => (0, _v1.jsx)(_v11.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "m11.278 8.503-5.65 5.66a1 1 0 1 0 1.41 1.42l5-4.95 4.95 4.95a1 1 0 0 0 1.631-.325 1 1 0 0 0 .08-.385 1 1 0 0 0-.3-.71l-5.65-5.66a1 1 0 0 0-1.47 0Z",
      fill: "currentColor"
    })
  });
  var _v13 = _v0.i(0);
  _v0.s(["MigrationProgressWidget", 0, ({
    phase: _v0,
    collapsed: _v1,
    onToggleCollapse: _v2,
    onRunInBackground: _v3,
    onDismiss: _v4,
    onOpenTeamLibrary: _v5
  }) => {
    let _v6 = "completed" === _v0,
      _v7 = !_v6 && _v1,
      _v8 = _v6 ? (0, _v13.translate)({
        singular: "Team Library created",
        dictionary: {
          es: {
            singular: "Biblioteca del equipo creada"
          },
          "de-DE": {
            singular: "Team-Bibliothek erstellt"
          },
          "fr-FR": {
            singular: "Bibliothèque d'équipe créée"
          },
          "ja-JP": {
            singular: "チームライブラリが作成されました"
          },
          "ko-KR": {
            singular: "팀 라이브러리 생성됨"
          },
          "pt-BR": {
            singular: "Biblioteca da equipe criada"
          },
          "zh-CN": {
            singular: "团队资料库已创建"
          }
        }
      }) : "finalizing" === _v0 ? (0, _v13.translate)({
        singular: "Finalizing your Team Library",
        dictionary: {
          es: {
            singular: "Finalizando la Biblioteca del equipo"
          },
          "de-DE": {
            singular: "Finalisierung Ihrer Team-Bibliothek"
          },
          "fr-FR": {
            singular: "Finalisation de votre bibliothèque d'équipe"
          },
          "ja-JP": {
            singular: "チームライブラリの最終処理を行っています"
          },
          "ko-KR": {
            singular: "팀 라이브러리 마무리 중"
          },
          "pt-BR": {
            singular: "Finalizando sua Biblioteca da equipe"
          },
          "zh-CN": {
            singular: "正在完成团队资料库设置"
          }
        }
      }) : (0, _v13.translate)({
        singular: "Setting up your Team Library",
        dictionary: {
          es: {
            singular: "Configurando la Biblioteca del equipo"
          },
          "de-DE": {
            singular: "Einrichten Ihrer Team-Bibliothek"
          },
          "fr-FR": {
            singular: "Configuration de votre bibliothèque d'équipe"
          },
          "ja-JP": {
            singular: "チームライブラリを設定しています"
          },
          "ko-KR": {
            singular: "팀 라이브러리 설정 중"
          },
          "pt-BR": {
            singular: "Configurando sua Biblioteca da equipe"
          },
          "zh-CN": {
            singular: "正在设置团队资料库"
          }
        }
      });
    return (0, _v1.jsxs)(_v4.Flex, {
      className: "library-migration-progress-toast",
      role: "status",
      "aria-live": "polite",
      position: "relative",
      zIndex: "10",
      flexDirection: "column",
      gap: _v7 ? "none" : "lg",
      padding: "md",
      background: "fill-blur",
      backdropFilter: "blur(var(--vimeo-blur-lg))",
      borderRadius: "md",
      boxShadow: "var(--vimeo-shadows-md)",
      width: {
        base: "calc(100vw - 2rem)",
        sm: (0, _v6.rem)(400)
      },
      children: [(0, _v1.jsxs)(_v4.Flex, {
        flexDirection: "column",
        gap: "xs",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          gap: "sm",
          minHeight: (0, _v6.rem)(44),
          children: [(0, _v1.jsxs)(_v4.Flex, {
            flex: "1",
            alignItems: "center",
            gap: "md",
            minWidth: 0,
            children: [_v6 ? (0, _v1.jsx)(_v9.Checkmark, {
              boxSize: (0, _v6.rem)(24),
              color: "text-primary",
              flexShrink: 0
            }) : (0, _v1.jsx)(_v7.Spinner, {
              size: "sm"
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "heading-sm",
              color: "text-primary",
              noOfLines: 1,
              children: _v8
            })]
          }), _v6 ? (0, _v1.jsx)(_v3.CloseButton, {
            size: "sm",
            variant: "tertiary",
            color: "text-primary",
            onClick: _v4,
            "aria-label": (0, _v13.translate)({
              singular: "Dismiss",
              dictionary: {
                es: {
                  singular: "Descartar"
                },
                "de-DE": {
                  singular: "Information verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer"
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Ignorar"
                },
                "zh-CN": {
                  singular: "拒绝"
                }
              }
            })
          }) : (0, _v1.jsx)(_v5.IconButton, {
            size: "sm",
            variant: "tertiary",
            color: "text-primary",
            onClick: _v2,
            "aria-label": _v7 ? (0, _v13.translate)({
              singular: "Expand",
              dictionary: {
                es: {
                  singular: "Expandir"
                },
                "de-DE": {
                  singular: "Vergrößern"
                },
                "fr-FR": {
                  singular: "Agrandir"
                },
                "ja-JP": {
                  singular: "拡大"
                },
                "ko-KR": {
                  singular: "펼치기"
                },
                "pt-BR": {
                  singular: "Expandir"
                },
                "zh-CN": {
                  singular: "展开"
                }
              }
            }) : (0, _v13.translate)({
              singular: "Collapse",
              dictionary: {
                es: {
                  singular: "Contraer"
                },
                "de-DE": {
                  singular: "Ausblenden"
                },
                "fr-FR": {
                  singular: "Réduire"
                },
                "ja-JP": {
                  singular: "折り畳む"
                },
                "ko-KR": {
                  singular: "접기"
                },
                "pt-BR": {
                  singular: "Minimizar"
                },
                "zh-CN": {
                  singular: "折叠"
                }
              }
            }),
            icon: _v7 ? (0, _v1.jsx)(_v12, {
              boxSize: (0, _v6.rem)(20)
            }) : (0, _v1.jsx)(_v10.ChevronDown, {
              boxSize: (0, _v6.rem)(20)
            })
          })]
        }), !_v7 && (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v6 ? (0, _v13.translate)({
            singular: "Your team new space is now created! Collaborate, share content, and keep everyone in one place.",
            dictionary: {
              es: {
                singular: "¡El nuevo espacio de su equipo ya está creado! Colabore, comparta contenido y mantenga a todos en un mismo lugar."
              },
              "de-DE": {
                singular: "Der neue Bereich Ihres Teams wurde jetzt erstellt! Arbeiten Sie zusammen, teilen Sie Inhalte und bringen Sie alle an einem Ort zusammen."
              },
              "fr-FR": {
                singular: "Le nouvel espace de votre équipe a été créé ! Collaborez, partagez du contenu et rassemblez tout le monde au même endroit."
              },
              "ja-JP": {
                singular: "チームの新しいスペースが作成されました！共同作業、コンテンツの共有、メンバーを一か所にまとめて管理できます。"
              },
              "ko-KR": {
                singular: "팀의 새 공간이 생성되었습니다! 협업하고, 콘텐츠를 공유하며 모두를 한곳에 모아두세요."
              },
              "pt-BR": {
                singular: "O novo espaço da sua equipe já foi criado! Colabore, compartilhe conteúdo e mantenha todos em um só lugar."
              },
              "zh-CN": {
                singular: "您的团队新空间现已创建！协作、共享内容，并将所有成员集中在同一位置。"
              }
            }
          }) : (0, _v13.translate)({
            singular: "This can take a few minutes for large libraries. You can keep working, we'll let you know when it's done.",
            dictionary: {
              es: {
                singular: "Esto puede tardar unos minutos en bibliotecas grandes. Puede seguir trabajando; le avisaremos cuando haya terminado."
              },
              "de-DE": {
                singular: "Bei großen Bibliotheken kann dies einige Minuten dauern. Sie können weiterarbeiten; wir informieren Sie, sobald es abgeschlossen ist."
              },
              "fr-FR": {
                singular: "Cela peut prendre quelques minutes pour les grandes bibliothèques. Vous pouvez continuer à travailler ; nous vous informerons lorsque ce sera terminé."
              },
              "ja-JP": {
                singular: "大きなライブラリの場合、完了まで数分かかることがあります。その間も作業を続けていただけます。完了したらお知らせします。"
              },
              "ko-KR": {
                singular: "라이브러리가 큰 경우 몇 분 정도 걸릴 수 있습니다. 작업을 계속하셔도 됩니다. 완료되면 알려드리겠습니다."
              },
              "pt-BR": {
                singular: "Isso pode levar alguns minutos para bibliotecas grandes. Você pode continuar trabalhando; avisaremos quando estiver pronta."
              },
              "zh-CN": {
                singular: "对于大型资料库，这可能需要几分钟。您可以继续工作，完成后我们会通知您。"
              }
            }
          })
        })]
      }), !_v7 && (_v6 ? (0, _v1.jsx)(_v2.Button, {
        variant: "primary",
        size: "md",
        w: "100%",
        onClick: _v5,
        children: (0, _v13.translate)({
          singular: "Open Team Library",
          dictionary: {
            es: {
              singular: "Abrir la Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Team-Bibliothek öffnen"
            },
            "fr-FR": {
              singular: "Ouvrir la bibliothèque d'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリを開く"
            },
            "ko-KR": {
              singular: "팀 라이브러리 열기"
            },
            "pt-BR": {
              singular: "Abrir Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "打开团队资料库"
            }
          }
        })
      }) : (0, _v1.jsx)(_v2.Button, {
        variant: "secondary",
        size: "md",
        w: "100%",
        onClick: _v3,
        children: (0, _v13.translate)({
          singular: "Run in background",
          dictionary: {
            es: {
              singular: "Ejecutar en segundo plano"
            },
            "de-DE": {
              singular: "Im Hintergrund ausführen"
            },
            "fr-FR": {
              singular: "Exécuter en arrière-plan"
            },
            "ja-JP": {
              singular: "バックグラウンドで実行"
            },
            "ko-KR": {
              singular: "백그라운드에서 실행"
            },
            "pt-BR": {
              singular: "Executar em segundo plano"
            },
            "zh-CN": {
              singular: "在后台运行"
            }
          }
        })
      }))]
    });
  }], 0);
}