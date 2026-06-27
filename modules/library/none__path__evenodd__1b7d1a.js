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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(468),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = _v0 => (0, _v1.jsx)(_v24.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM6 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H6Zm9-1a1 1 0 0 1 1-1h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2a1 1 0 0 1-1-1Z",
      fill: "currentColor"
    })
  });
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = _v0 => {
      _v0.preventDefault();
    },
    _v31 = ({
      isOpen: _v0,
      onClose: _v1,
      onBack: _v2,
      apiConfig: _v3,
      teamData: _v4,
      onCreated: _v5
    }) => {
      let [_v6, _v7] = (0, _v2.useState)(!1),
        [_v8, _v9] = (0, _v2.useState)(""),
        _v10 = () => {
          _v7(!1), _v9("");
        },
        _v11 = () => {
          _v10(), _v1();
        },
        _v12 = async () => {
          if (!_v4) return;
          _v7(!0), _v9("");
          let _v0 = JSON.stringify({
            team_name: _v4.teamName.trim(),
            accent_color: _v4.accentColor,
            logo_uri: (0, _v27.teamLogoUrlToUri)(_v4.logoUrl),
            explicitly_created_team: 1
          });
          try {
            await (0, _v27.updateTeamInfo)(_v3, null, _v0), _v5?.(), _v11();
          } catch {
            _v9(_v27.defaultError);
          } finally {
            _v7(!1);
          }
        };
      return (0, _v1.jsxs)(_v12.Modal, {
        isOpen: _v0,
        onClose: _v11,
        isCentered: !0,
        children: [(0, _v1.jsx)(_v15.ModalOverlay, {}), (0, _v1.jsxs)(_v14.ModalContent, {
          "data-testid": "create-team-library-modal",
          bg: "fill-surface",
          borderRadius: "xl",
          maxW: "488px",
          children: [(0, _v1.jsxs)(_v9.HStack, {
            gap: "sm",
            align: "start",
            pt: "lg",
            pr: "lg",
            pb: "sm",
            pl: "md",
            w: "100%",
            children: [(0, _v1.jsx)(_v10.IconButton, {
              "aria-label": (0, _v28.translate)({
                singular: "Go back",
                dictionary: {
                  es: {
                    singular: "Volver"
                  },
                  "de-DE": {
                    singular: "Zurück"
                  },
                  "fr-FR": {
                    singular: "Retour"
                  },
                  "ja-JP": {
                    singular: "戻る"
                  },
                  "ko-KR": {
                    singular: "돌아가기"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v19.ArrowLeft, {}),
              variant: "tertiary",
              size: "sm",
              onClick: () => {
                _v10(), (_v2 ?? (() => {}))();
              }
            }), (0, _v1.jsxs)(_v18.VStack, {
              gap: "xs",
              align: "start",
              justify: "center",
              flex: "1 0 0",
              minW: 0,
              children: [(0, _v1.jsx)(_v8.Header, {
                size: "md",
                color: "text-primary",
                children: (0, _v28.translate)({
                  singular: "Create your team library",
                  dictionary: {
                    es: {
                      singular: "Crea la biblioteca de tu equipo"
                    },
                    "de-DE": {
                      singular: "Erstellen Sie Ihre Team-Bibliothek"
                    },
                    "fr-FR": {
                      singular: "Créez votre bibliothèque d’équipe"
                    },
                    "ja-JP": {
                      singular: "チームライブラリを作成しましょう"
                    },
                    "ko-KR": {
                      singular: "팀 라이브러리를 만드세요"
                    },
                    "pt-BR": {
                      singular: "Crie sua biblioteca da equipe"
                    },
                    "zh-CN": {
                      singular: "创建你的团队资料库"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v16.Paragraph, {
                size: "sm",
                color: "text-secondary",
                children: (0, _v28.translate)({
                  singular: "Your new shared space for your team collaboration.",
                  dictionary: {
                    es: {
                      singular: "Tu nuevo espacio compartido para la colaboración de tu equipo."
                    },
                    "de-DE": {
                      singular: "Ihr neuer gemeinsamer Arbeitsbereich für die Zusammenarbeit im Team."
                    },
                    "fr-FR": {
                      singular: "Votre nouvel espace partagé pour la collaboration au sein de votre équipe."
                    },
                    "ja-JP": {
                      singular: "チームのコラボレーションのための新しい共有スペースです。"
                    },
                    "ko-KR": {
                      singular: "팀 협업을 위한 새로운 공유 공간입니다."
                    },
                    "pt-BR": {
                      singular: "Seu novo espaço compartilhado para a colaboração da equipe."
                    },
                    "zh-CN": {
                      singular: "为团队协作创建的全新共享空间。"
                    }
                  }
                })
              })]
            })]
          }), (0, _v1.jsx)(_v13.ModalCloseButton, {
            top: "20px",
            right: "20px"
          }), (0, _v1.jsxs)(_v18.VStack, {
            gap: "lg",
            align: "center",
            justify: "center",
            px: "lg",
            py: "md",
            w: "100%",
            children: [(0, _v1.jsxs)(_v7.Flex, {
              w: "100%",
              maxW: "440px",
              minH: "130px",
              align: "stretch",
              borderRadius: "md",
              overflow: "hidden",
              children: [(0, _v1.jsxs)(_v18.VStack, {
                flex: "1 0 0",
                minW: 0,
                gap: "3",
                align: "start",
                justify: "center",
                px: "5",
                py: "md",
                bg: "fill-component",
                children: [(0, _v1.jsx)(_v7.Flex, {
                  align: "center",
                  justify: "center",
                  bg: "button-secondary-default",
                  borderRadius: "sm",
                  p: "sm",
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v23.MyLibrary, {})
                }), (0, _v1.jsxs)(_v18.VStack, {
                  gap: "px",
                  align: "start",
                  justify: "center",
                  w: "100%",
                  children: [(0, _v1.jsx)(_v8.Header, {
                    size: "xs",
                    color: "text-primary",
                    children: (0, _v28.translate)({
                      singular: "My library",
                      dictionary: {
                        es: {
                          singular: "Mi biblioteca"
                        },
                        "de-DE": {
                          singular: "Meine Bibliothek"
                        },
                        "fr-FR": {
                          singular: "Ma bibliothèque"
                        },
                        "ja-JP": {
                          singular: "マイ ライブラリ"
                        },
                        "ko-KR": {
                          singular: "내 라이브러리"
                        },
                        "pt-BR": {
                          singular: "Minha Biblioteca"
                        },
                        "zh-CN": {
                          singular: "我的视频库"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v16.Paragraph, {
                    size: "sm",
                    color: "text-secondary",
                    children: (0, _v28.translate)({
                      singular: "Private • only you",
                      dictionary: {
                        es: {
                          singular: "Privado • solo tú"
                        },
                        "de-DE": {
                          singular: "Privat • nur Sie"
                        },
                        "fr-FR": {
                          singular: "Privé • uniquement vous"
                        },
                        "ja-JP": {
                          singular: "プライベート • あなただけ"
                        },
                        "ko-KR": {
                          singular: "비공개 • 나만"
                        },
                        "pt-BR": {
                          singular: "Privado • somente você"
                        },
                        "zh-CN": {
                          singular: "私有 • 仅你可见"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsxs)(_v18.VStack, {
                flex: "1 0 0",
                minW: 0,
                gap: "3",
                align: "start",
                justify: "center",
                px: "5",
                py: "md",
                bg: "status-info-secondary",
                children: [(0, _v1.jsxs)(_v9.HStack, {
                  justify: "space-between",
                  align: "start",
                  gap: "sm",
                  w: "100%",
                  flexWrap: "wrap",
                  children: [(0, _v1.jsx)(_v7.Flex, {
                    align: "center",
                    justify: "center",
                    bg: "button-secondary-default",
                    borderRadius: "sm",
                    p: "sm",
                    flexShrink: 0,
                    children: (0, _v1.jsx)(_v26.TeamLibrary, {})
                  }), (0, _v1.jsx)(_v4.Badge, {
                    variant: "new",
                    size: "sm",
                    bgColor: "input-fill",
                    borderColor: "input-fill",
                    color: "text-primary",
                    children: (0, _v28.translate)({
                      singular: "New",
                      dictionary: {
                        es: {
                          singular: "Nuevo"
                        },
                        "de-DE": {
                          singular: "Neu"
                        },
                        "fr-FR": {
                          singular: "Nouveau"
                        },
                        "ja-JP": {
                          singular: "新規作成"
                        },
                        "ko-KR": {
                          singular: "신규"
                        },
                        "pt-BR": {
                          singular: "Novo"
                        },
                        "zh-CN": {
                          singular: "新"
                        }
                      }
                    })
                  })]
                }), (0, _v1.jsxs)(_v18.VStack, {
                  gap: "px",
                  align: "start",
                  justify: "center",
                  w: "100%",
                  children: [(0, _v1.jsx)(_v8.Header, {
                    size: "xs",
                    color: "text-primary",
                    children: (0, _v28.translate)({
                      singular: "Team library",
                      dictionary: {
                        es: {
                          singular: "Biblioteca del equipo"
                        },
                        "de-DE": {
                          singular: "Teambibliothek"
                        },
                        "fr-FR": {
                          singular: "Bibliothèque de l'équipe"
                        },
                        "ja-JP": {
                          singular: "チームライブラリ"
                        },
                        "ko-KR": {
                          singular: "팀 라이브러리"
                        },
                        "pt-BR": {
                          singular: "Biblioteca da equipe"
                        },
                        "zh-CN": {
                          singular: "团队视频库"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v16.Paragraph, {
                    size: "sm",
                    color: "text-secondary",
                    children: (0, _v28.translate)({
                      singular: "Shared with your team",
                      dictionary: {
                        es: {
                          singular: "Compartido con tu equipo"
                        },
                        "de-DE": {
                          singular: "Mit Ihrem Team geteilt"
                        },
                        "fr-FR": {
                          singular: "Partagé avec votre équipe"
                        },
                        "ja-JP": {
                          singular: "チームと共有"
                        },
                        "ko-KR": {
                          singular: "팀과 공유됨"
                        },
                        "pt-BR": {
                          singular: "Compartilhado com sua equipe"
                        },
                        "zh-CN": {
                          singular: "与你的团队共享"
                        }
                      }
                    })
                  })]
                })]
              })]
            }), (0, _v1.jsxs)(_v18.VStack, {
              gap: "none",
              align: "start",
              w: "100%",
              children: [(0, _v1.jsx)(_v29.InfoRow, {
                icon: (0, _v1.jsx)(_v25, {}),
                title: (0, _v28.translate)({
                  singular: "Your space splits in two",
                  dictionary: {
                    es: {
                      singular: "Tu espacio se divide en dos"
                    },
                    "de-DE": {
                      singular: "Ihr Bereich teilt sich in zwei"
                    },
                    "fr-FR": {
                      singular: "Votre espace se divise en deux"
                    },
                    "ja-JP": {
                      singular: "スペースが二つに分かれます"
                    },
                    "ko-KR": {
                      singular: "공간이 두 부분으로 나뉩니다"
                    },
                    "pt-BR": {
                      singular: "Seu espaço se divide em duas partes"
                    },
                    "zh-CN": {
                      singular: "你的空间分为两部分"
                    }
                  }
                }),
                description: (0, _v28.translate)({
                  singular: "My Library stays private. Team Library is the shared side.",
                  dictionary: {
                    es: {
                      singular: "Mi biblioteca permanece privada. La Biblioteca del equipo es la parte compartida."
                    },
                    "de-DE": {
                      singular: "Meine Bibliothek bleibt privat. Die Team-Bibliothek ist der gemeinsam genutzte Bereich."
                    },
                    "fr-FR": {
                      singular: "Ma bibliothèque reste privée. La bibliothèque d’équipe correspond à l’espace partagé."
                    },
                    "ja-JP": {
                      singular: "マイライブラリは非公開のままです。チームライブラリは共有側です。"
                    },
                    "ko-KR": {
                      singular: "내 라이브러리는 비공개로 유지됩니다. 팀 라이브러리는 공유용입니다."
                    },
                    "pt-BR": {
                      singular: "Minha biblioteca permanece privada. A Biblioteca da equipe é o espaço compartilhado."
                    },
                    "zh-CN": {
                      singular: "我的资料库保持私有。团队资料库是共享部分。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v29.InfoRow, {
                icon: (0, _v1.jsx)(_v21.FolderUpload, {}),
                title: (0, _v28.translate)({
                  singular: "Nothing moves automatically",
                  dictionary: {
                    es: {
                      singular: "Nada se mueve automáticamente"
                    },
                    "de-DE": {
                      singular: "Nichts wird automatisch verschoben"
                    },
                    "fr-FR": {
                      singular: "Rien ne bouge automatiquement"
                    },
                    "ja-JP": {
                      singular: "何も自動で移動しません"
                    },
                    "ko-KR": {
                      singular: "아무 것도 자동으로 이동되지 않습니다"
                    },
                    "pt-BR": {
                      singular: "Nada é movido automaticamente"
                    },
                    "zh-CN": {
                      singular: "任何内容都不会自动移动"
                    }
                  }
                }),
                description: (0, _v28.translate)({
                  singular: "You choose what to share, one folder at a time.",
                  dictionary: {
                    es: {
                      singular: "Tú eliges qué compartir, una carpeta a la vez."
                    },
                    "de-DE": {
                      singular: "Sie wählen, was Sie teilen möchten, Ordner für Ordner."
                    },
                    "fr-FR": {
                      singular: "Vous choisissez ce que vous partagez, un dossier à la fois."
                    },
                    "ja-JP": {
                      singular: "共有する内容は、フォルダごとに選択できます。"
                    },
                    "ko-KR": {
                      singular: "공유할 항목을 폴더별로 하나씩 선택할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Você escolhe o que compartilhar, uma pasta por vez."
                    },
                    "zh-CN": {
                      singular: "你可以逐个文件夹选择共享内容。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v29.InfoRow, {
                icon: (0, _v1.jsx)(_v22.Lock, {}),
                title: (0, _v28.translate)({
                  singular: "Privacy never changes",
                  dictionary: {
                    es: {
                      singular: "La privacidad nunca cambia"
                    },
                    "de-DE": {
                      singular: "Die Privatsphäre bleibt unverändert"
                    },
                    "fr-FR": {
                      singular: "La confidentialité ne change jamais"
                    },
                    "ja-JP": {
                      singular: "プライバシーは変更されません"
                    },
                    "ko-KR": {
                      singular: "프라이버시는 변경되지 않습니다"
                    },
                    "pt-BR": {
                      singular: "A privacidade nunca muda"
                    },
                    "zh-CN": {
                      singular: "隐私设置保持不变"
                    }
                  }
                }),
                description: (0, _v28.translate)({
                  singular: "Public, password and only-me links stay exactly as you set them.",
                  dictionary: {
                    es: {
                      singular: "Los enlaces públicos, con contraseña y 'solo yo' permanecen exactamente como los configuras."
                    },
                    "de-DE": {
                      singular: "Öffentliche, passwortgeschützte und 'Nur-für-mich'-Links bleiben genau so, wie Sie sie eingestellt haben."
                    },
                    "fr-FR": {
                      singular: "Les liens publics, protégés par mot de passe et « uniquement moi » restent exactement tels que vous les avez définis."
                    },
                    "ja-JP": {
                      singular: "公開、パスワード、そして「自分のみ」リンクは、設定したとおりに維持されます。"
                    },
                    "ko-KR": {
                      singular: "공개, 비밀번호 및 나만 보기 링크는 설정한 그대로 유지됩니다."
                    },
                    "pt-BR": {
                      singular: "Links públicos, com senha e 'somente eu' permanecem exatamente como você os definiu."
                    },
                    "zh-CN": {
                      singular: "公开、密码保护和仅我可见的链接将完全按你的设置保留。"
                    }
                  }
                })
              })]
            })]
          }), (0, _v1.jsxs)(_v18.VStack, {
            gap: "3",
            align: "center",
            pt: "md",
            px: "lg",
            pb: "lg",
            w: "100%",
            children: [_v8 && (0, _v1.jsx)(_v17.Text, {
              fontSize: "0.75rem",
              color: "status-destructive-primary",
              textAlign: "center",
              children: _v8
            }), (0, _v1.jsx)(_v6.Button, {
              variant: "primary",
              size: "md",
              onClick: _v12,
              isLoading: _v6,
              isDisabled: _v6 || !_v4,
              w: "100%",
              "data-testid": "create-team-library-confirm-button",
              children: (0, _v28.translate)({
                singular: "Create Team Library",
                dictionary: {
                  es: {
                    singular: "Crear biblioteca del equipo"
                  },
                  "de-DE": {
                    singular: "Team-Bibliothek erstellen"
                  },
                  "fr-FR": {
                    singular: "Créer une bibliothèque d’équipe"
                  },
                  "ja-JP": {
                    singular: "チームライブラリを作成"
                  },
                  "ko-KR": {
                    singular: "팀 라이브러리 만들기"
                  },
                  "pt-BR": {
                    singular: "Criar biblioteca da equipe"
                  },
                  "zh-CN": {
                    singular: "创建团队资料库"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v9.HStack, {
              gap: "xs",
              align: "center",
              justify: "center",
              fontSize: "0.8125rem",
              children: [(0, _v1.jsx)(_v11.Link, {
                href: "#",
                onClick: _v30,
                color: "text-primary",
                sx: {
                  textDecoration: "underline"
                },
                children: (0, _v28.translate)({
                  singular: "Learn how Team Library works",
                  dictionary: {
                    es: {
                      singular: "Aprende cómo funciona la Biblioteca del equipo"
                    },
                    "de-DE": {
                      singular: "Erfahren Sie, wie die Team-Bibliothek funktioniert"
                    },
                    "fr-FR": {
                      singular: "Découvrez comment fonctionne la bibliothèque d’équipe"
                    },
                    "ja-JP": {
                      singular: "チームライブラリの仕組みを学ぶ"
                    },
                    "ko-KR": {
                      singular: "팀 라이브러리가 어떻게 작동하는지 알아보세요"
                    },
                    "pt-BR": {
                      singular: "Saiba como a Biblioteca da equipe funciona"
                    },
                    "zh-CN": {
                      singular: "了解团队资料库的工作方式"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v5.Box, {
                as: "span",
                color: "text-primary",
                display: "inline-flex",
                children: (0, _v1.jsx)(_v20.ArrowUpRightSmall, {})
              })]
            })]
          })]
        })]
      });
    };
  _v0.s(["CreateTeamLibraryModal", 0, _v31], 0);
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = ["image/png", "image/x-png", "image/jpeg"],
    _v46 = ["#63b3ed", "#a686eb", "#feb2b2", "#fefcbf", "#fbd38d", "#9ecd82"],
    _v47 = ({
      apiConfig: _v0,
      isOpen: _v1,
      onClose: _v2,
      onContinue: _v3,
      defaultTeamName: _v4 = ""
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(_v4),
        [_v7, _v8] = (0, _v2.useState)(""),
        [_v9, _v10] = (0, _v2.useState)(_v46[0]),
        [_v11, _v12] = (0, _v2.useState)(!1),
        [_v13, _v14] = (0, _v2.useState)(""),
        _v15 = (0, _v2.useRef)(null),
        _v16 = (0, _v2.useRef)(!1),
        _v17 = (0, _v2.useRef)(_v0),
        _v18 = (0, _v2.useRef)(_v4),
        _v19 = !_v46.includes(_v9);
      (0, _v2.useEffect)(() => {
        _v17.current = _v0, _v18.current = _v4;
      }, [_v0, _v4]), (0, _v2.useEffect)(() => {
        if (!_v1 || _v16.current) return;
        _v16.current = !0;
        let _v0 = !1;
        return (async () => {
          try {
            let _v0 = await (0, _v27.fetchTeamInfo)(_v17.current);
            if (_v0 || !_v0) return;
            let _v1 = _v0.pictures?.sizes,
              _v2 = _v1?.length ? _v1[_v1.length - 1].link : "";
            _v6(_v0 => _v0 === _v18.current && _v0.teamName ? _v0.teamName : _v0), _v10(_v0 => {
              let _v1;
              return _v0 === _v46[0] && _v0.accentColor && (_v1 = _v0.accentColor, /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(_v1)) ? _v0.accentColor : _v0;
            }), _v8(_v0 => !_v0 && _v2 ? _v2 : _v0);
          } catch {}
        })(), () => {
          _v0 = !0;
        };
      }, [_v1]);
      let _v20 = () => {
          _v6(_v4), _v8(""), _v10(_v46[0]), _v12(!1), _v14(""), _v2();
        },
        _v21 = async _v0 => {
          if (_v14(""), !_v0 || 0 === _v0.length) return;
          let _v1 = _v0[0];
          if (_v1.size > 0 || 0 > _v45.indexOf(_v1.type)) return void _v14((0, _v28.translate)({
            singular: "Please use a JPEG or PNG file under {size}MB.",
            replacements: {
              size: 2
            },
            dictionary: {
              es: {
                singular: "Por favor, usa un archivo JPEG o PNG de menos de {size}MB."
              },
              "de-DE": {
                singular: "Bitte verwenden Sie eine JPEG- oder PNG-Datei unter {size}MB."
              },
              "fr-FR": {
                singular: "Veuillez utiliser un fichier JPEG ou PNG de moins de {size} Mo."
              },
              "ja-JP": {
                singular: "JPEGまたはPNG形式で、{size}MB未満のファイルを使用してください。"
              },
              "ko-KR": {
                singular: "용량이 {size}MB 이하인 JPEG 또는 PNG 파일을 사용하세요."
              },
              "pt-BR": {
                singular: "Use um arquivo JPEG ou PNG com menos de {size}MB."
              },
              "zh-CN": {
                singular: "请使用小于 {size}MB 的 JPEG 或 PNG 文件。"
              }
            }
          }));
          _v12(!0);
          try {
            let _v0 = await (0, _v27.uploadLogo)(_v0, _v1);
            _v8(_v0);
          } catch {
            _v14(_v27.defaultError);
          }
          _v12(!1);
        },
        _v22 = !_v5.trim() || _v11;
      return (0, _v1.jsxs)(_v12.Modal, {
        isOpen: _v1,
        onClose: _v20,
        isCentered: !0,
        children: [(0, _v1.jsx)(_v15.ModalOverlay, {}), (0, _v1.jsxs)(_v14.ModalContent, {
          maxW: (0, _v41.rem)(540),
          borderRadius: (0, _v41.rem)(20),
          children: [(0, _v1.jsxs)(_v39.ModalHeader, {
            children: [(0, _v1.jsx)(_v17.Text, {
              fontSize: (0, _v41.rem)(20),
              fontWeight: "medium",
              color: "text-primary",
              children: (0, _v28.translate)({
                singular: "Start your team",
                dictionary: {
                  es: {
                    singular: "Comience su equipo"
                  },
                  "de-DE": {
                    singular: "Baue dein Team auf"
                  },
                  "fr-FR": {
                    singular: "Lancer votre équipe"
                  },
                  "ja-JP": {
                    singular: "チームを始める"
                  },
                  "ko-KR": {
                    singular: "팀 꾸리기"
                  },
                  "pt-BR": {
                    singular: "Crie sua equipe"
                  },
                  "zh-CN": {
                    singular: "组建团队"
                  }
                }
              })
            }), (0, _v1.jsx)(_v17.Text, {
              marginTop: 1,
              fontSize: (0, _v41.rem)(14),
              color: "text-secondary",
              children: (0, _v28.translate)({
                singular: "Give your team a name, logo and color. You can change these anytime.",
                dictionary: {
                  es: {
                    singular: "Asigna a tu equipo un nombre, un logotipo y un color. Puedes cambiarlos en cualquier momento."
                  },
                  "de-DE": {
                    singular: "Geben Sie Ihrem Team einen Namen, ein Logo und eine Farbe. Sie können diese jederzeit ändern."
                  },
                  "fr-FR": {
                    singular: "Donnez un nom, un logo et une couleur à votre équipe. Vous pouvez les modifier à tout moment."
                  },
                  "ja-JP": {
                    singular: "チームに名前、ロゴ、色を設定します。これらはいつでも変更できます。"
                  },
                  "ko-KR": {
                    singular: "팀의 이름, 로고 및 색상을 지정하세요. 언제든지 변경할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Dê à sua equipe um nome, logotipo e cor. Você pode alterá‑los a qualquer momento."
                  },
                  "zh-CN": {
                    singular: "为你的团队设置名称、徽标和颜色。你可以随时更改这些设置。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v13.ModalCloseButton, {
            "aria-label": (0, _v28.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            })
          }), (0, _v1.jsxs)(_v37.ModalBody, {
            children: [(0, _v1.jsxs)(_v33.FormControl, {
              isRequired: !0,
              children: [(0, _v1.jsx)(_v34.FormLabel, {
                children: (0, _v28.translate)({
                  singular: "Team name",
                  dictionary: {
                    es: {
                      singular: "Nombre del equipo"
                    },
                    "de-DE": {
                      singular: "Teamname"
                    },
                    "fr-FR": {
                      singular: "Nom de l’équipe"
                    },
                    "ja-JP": {
                      singular: "チーム名"
                    },
                    "ko-KR": {
                      singular: "팀 이름"
                    },
                    "pt-BR": {
                      singular: "Nome da equipe"
                    },
                    "zh-CN": {
                      singular: "团队名称"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v36.Input, {
                autoFocus: !0,
                maxLength: 50,
                placeholder: (0, _v28.translate)({
                  singular: "Enter a team name",
                  dictionary: {
                    es: {
                      singular: "Ingresa un nombre para el equipo"
                    },
                    "de-DE": {
                      singular: "Teamnamen eingeben"
                    },
                    "fr-FR": {
                      singular: "Saisissez un nom d'équipe"
                    },
                    "ja-JP": {
                      singular: "チーム名を入力してください"
                    },
                    "ko-KR": {
                      singular: "팀 이름 입력"
                    },
                    "pt-BR": {
                      singular: "Digite o nome da equipe"
                    },
                    "zh-CN": {
                      singular: "输入团队名称"
                    }
                  }
                }),
                value: _v5,
                onChange: _v0 => _v6(_v0.target.value),
                "data-testid": "start-your-team-name-input"
              }), (0, _v1.jsx)(_v17.Text, {
                marginTop: 1,
                fontSize: (0, _v41.rem)(12),
                color: "text-tertiary",
                textAlign: "right",
                children: (0, _v28.translate)({
                  singular: "{current}/{max}",
                  replacements: {
                    current: _v5.length,
                    max: 50
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v33.FormControl, {
              marginTop: 4,
              children: [(0, _v1.jsx)(_v34.FormLabel, {
                children: (0, _v28.translate)({
                  singular: "Team logo",
                  dictionary: {
                    es: {
                      singular: "Logo del equipo"
                    },
                    "de-DE": {
                      singular: "Team-Logo"
                    },
                    "fr-FR": {
                      singular: "Logo de l'équipe"
                    },
                    "ja-JP": {
                      singular: "チームのロゴ"
                    },
                    "ko-KR": {
                      singular: "팀 로고"
                    },
                    "pt-BR": {
                      singular: "Logotipo da equipe"
                    },
                    "zh-CN": {
                      singular: "团队徽标"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                as: "button",
                type: "button",
                onClick: () => _v15.current?.click(),
                alignItems: "center",
                gap: 4,
                padding: 4,
                width: "100%",
                bg: "fill-surface",
                border: "1px solid",
                borderColor: "input-stroke",
                borderRadius: (0, _v41.rem)(12),
                textAlign: "left",
                "data-testid": "start-your-team-logo-uploader",
                children: [(0, _v1.jsx)(_v7.Flex, {
                  flexShrink: 0,
                  width: (0, _v41.rem)(100),
                  height: (0, _v41.rem)(56),
                  borderRadius: (0, _v41.rem)(8),
                  bg: "fill-component",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  children: _v11 ? (0, _v1.jsx)(_v42.Spinner, {
                    size: "sm"
                  }) : _v7 ? (0, _v1.jsx)(_v35.Image, {
                    src: _v7,
                    alt: (0, _v28.translate)({
                      singular: "Team logo",
                      dictionary: {
                        es: {
                          singular: "Logo del equipo"
                        },
                        "de-DE": {
                          singular: "Team-Logo"
                        },
                        "fr-FR": {
                          singular: "Logo de l'équipe"
                        },
                        "ja-JP": {
                          singular: "チームのロゴ"
                        },
                        "ko-KR": {
                          singular: "팀 로고"
                        },
                        "pt-BR": {
                          singular: "Logotipo da equipe"
                        },
                        "zh-CN": {
                          singular: "团队徽标"
                        }
                      }
                    }),
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }) : (0, _v1.jsx)(_v44.Upload, {
                    color: "text-secondary",
                    boxSize: (0, _v41.rem)(24)
                  })
                }), (0, _v1.jsxs)(_v5.Box, {
                  children: [(0, _v1.jsx)(_v17.Text, {
                    fontSize: (0, _v41.rem)(14),
                    fontWeight: "medium",
                    color: "text-primary",
                    children: (0, _v28.translate)({
                      singular: "Upload picture",
                      dictionary: {
                        es: {
                          singular: "Subir imagen"
                        },
                        "de-DE": {
                          singular: "Bild hochladen"
                        },
                        "fr-FR": {
                          singular: "Téléverser une image"
                        },
                        "ja-JP": {
                          singular: "画像をアップロード"
                        },
                        "ko-KR": {
                          singular: "사진 업로드"
                        },
                        "pt-BR": {
                          singular: "Enviar imagem"
                        },
                        "zh-CN": {
                          singular: "上传图片"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v17.Text, {
                    fontSize: (0, _v41.rem)(12),
                    color: "text-secondary",
                    children: (0, _v28.translate)({
                      singular: "Max size {size}MB",
                      replacements: {
                        size: 2
                      },
                      dictionary: {
                        es: {
                          singular: "Tamaño máximo {size}MB"
                        },
                        "de-DE": {
                          singular: "Maximale Größe {size}MB"
                        },
                        "fr-FR": {
                          singular: "Taille max {size} Mo"
                        },
                        "ja-JP": {
                          singular: "最大サイズ {size}MB"
                        },
                        "ko-KR": {
                          singular: "최대 크기 {size}MB"
                        },
                        "pt-BR": {
                          singular: "Tamanho máximo {size}MB"
                        },
                        "zh-CN": {
                          singular: "最大大小 {size}MB"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsx)("input", {
                ref: _v15,
                type: "file",
                accept: _v45.join(","),
                hidden: !0,
                onChange: _v0 => _v21(_v0.target.files)
              })]
            }), (0, _v1.jsxs)(_v33.FormControl, {
              marginTop: 4,
              children: [(0, _v1.jsx)(_v34.FormLabel, {
                children: (0, _v28.translate)({
                  singular: "Accent color",
                  dictionary: {
                    es: {
                      singular: "Color de contraste"
                    },
                    "de-DE": {
                      singular: "Farbakzent"
                    },
                    "fr-FR": {
                      singular: "Accentuer la couleur"
                    },
                    "ja-JP": {
                      singular: "アクセントカラー"
                    },
                    "ko-KR": {
                      singular: "강조색"
                    },
                    "pt-BR": {
                      singular: "Tom de cor"
                    },
                    "zh-CN": {
                      singular: "强调色"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                gap: 2,
                alignItems: "center",
                children: [_v46.map(_v0 => {
                  let _v1 = _v0 === _v9;
                  return (0, _v1.jsx)(_v5.Box, {
                    as: "button",
                    type: "button",
                    "aria-label": _v0,
                    "aria-pressed": _v1,
                    onClick: () => _v10(_v0),
                    flexShrink: 0,
                    width: (0, _v41.rem)(32),
                    height: (0, _v41.rem)(32),
                    borderRadius: "full",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid",
                    borderColor: _v1 ? "text-primary" : "transparent",
                    "data-testid": `start-your-team-color-${_v0}`,
                    children: (0, _v1.jsx)(_v5.Box, {
                      flexShrink: 0,
                      width: (0, _v41.rem)(24),
                      height: (0, _v41.rem)(24),
                      borderRadius: "full",
                      bg: _v0,
                      border: "1px solid",
                      borderColor: "stroke"
                    })
                  }, _v0);
                }), (0, _v1.jsxs)(_v32.ColorPickerRoot, {
                  value: (0, _v40.parseColor)(/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(_v9) ? _v9 : _v46[0]),
                  onValueChange: _v0 => _v10(_v0.value.toString("hex")),
                  positioning: {
                    placement: "bottom-start"
                  },
                  children: [(0, _v1.jsx)(_v32.ColorPickerTrigger, {
                    children: (0, _v1.jsxs)(_v5.Box, {
                      as: "button",
                      type: "button",
                      "aria-label": (0, _v28.translate)({
                        singular: "Custom color",
                        dictionary: {
                          es: {
                            singular: "Color personalizado"
                          },
                          "de-DE": {
                            singular: "Benutzerdefinierte Farbe"
                          },
                          "fr-FR": {
                            singular: "Couleur personnalisée"
                          },
                          "ja-JP": {
                            singular: "カスタムカラー"
                          },
                          "ko-KR": {
                            singular: "사용자 지정 색상"
                          },
                          "pt-BR": {
                            singular: "Cor personalizada"
                          },
                          "zh-CN": {
                            singular: "自定义颜色"
                          }
                        }
                      }),
                      "aria-pressed": _v19,
                      flexShrink: 0,
                      height: (0, _v41.rem)(32),
                      display: "flex",
                      alignItems: "center",
                      gap: (0, _v41.rem)(2),
                      paddingX: (0, _v41.rem)(4),
                      bg: "transparent",
                      border: "1px solid",
                      borderColor: _v19 ? "text-primary" : "stroke",
                      borderRadius: (0, _v41.rem)(36),
                      "data-testid": "start-your-team-custom-color",
                      children: [(0, _v1.jsx)(_v5.Box, {
                        flexShrink: 0,
                        width: (0, _v41.rem)(24),
                        height: (0, _v41.rem)(24),
                        borderRadius: (0, _v41.rem)(16),
                        bg: _v19 ? _v9 : "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"
                      }), (0, _v1.jsx)(_v43.ChevronDownSmall, {})]
                    })
                  }), (0, _v1.jsx)(_v32.ColorPickerPositioner, {
                    children: (0, _v1.jsxs)(_v32.ColorPickerContent, {
                      children: [(0, _v1.jsx)(_v32.ColorPickerArea, {}), (0, _v1.jsxs)(_v9.HStack, {
                        children: [(0, _v1.jsxs)(_v32.ColorPickerChannelSlider, {
                          channel: "hue",
                          children: [(0, _v1.jsx)(_v32.ColorPickerChannelSliderTrack, {}), (0, _v1.jsx)(_v32.ColorPickerChannelSliderThumb, {})]
                        }), (0, _v1.jsx)(_v32.ColorPickerEyeDropperTrigger, {
                          size: "sm"
                        })]
                      }), (0, _v1.jsx)(_v7.Flex, {
                        height: "sm",
                        children: (0, _v1.jsx)(_v32.ColorPickerChannelInput, {
                          channel: "hex",
                          onKeyDown: _v0 => {
                            if ("Enter" === _v0.key) {
                              let _v0 = _v0.target.value;
                              /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(_v0) && _v10(_v0);
                            }
                          }
                        })
                      })]
                    })
                  })]
                })]
              })]
            }), _v13 && (0, _v1.jsx)(_v17.Text, {
              marginTop: 3,
              fontSize: (0, _v41.rem)(12),
              color: "status-destructive-primary",
              children: _v13
            })]
          }), (0, _v1.jsxs)(_v38.ModalFooter, {
            gap: 3,
            children: [(0, _v1.jsx)(_v6.Button, {
              variant: "tertiary",
              onClick: _v20,
              children: (0, _v28.translate)({
                singular: "Cancel",
                dictionary: {
                  es: {
                    singular: "Cancelar"
                  },
                  "de-DE": {
                    singular: "Abbrechen"
                  },
                  "fr-FR": {
                    singular: "Annuler"
                  },
                  "ja-JP": {
                    singular: "キャンセル"
                  },
                  "ko-KR": {
                    singular: "취소"
                  },
                  "pt-BR": {
                    singular: "Cancelar"
                  },
                  "zh-CN": {
                    singular: "取消"
                  }
                }
              })
            }), (0, _v1.jsx)(_v6.Button, {
              variant: "primary",
              onClick: () => {
                _v14(""), _v3({
                  teamName: _v5.trim(),
                  accentColor: _v9,
                  logoUrl: _v7
                });
              },
              isDisabled: _v22,
              "data-testid": "start-your-team-continue-button",
              children: (0, _v28.translate)({
                singular: "Continue",
                dictionary: {
                  es: {
                    singular: "Continuar"
                  },
                  "de-DE": {
                    singular: "Weiter"
                  },
                  "fr-FR": {
                    singular: "Continuer"
                  },
                  "ja-JP": {
                    singular: "次へ"
                  },
                  "ko-KR": {
                    singular: "계속"
                  },
                  "pt-BR": {
                    singular: "Continuar"
                  },
                  "zh-CN": {
                    singular: "继续"
                  }
                }
              })
            })]
          })]
        })]
      });
    };
  _v0.s(["StartYourTeamModal", 0, _v47], 0);
  var _v48 = _v0.i(0);
  _v0.s(["StartYourTeamFlow", 0, ({
    apiConfig: _v0,
    isOpen: _v1,
    onClose: _v2,
    defaultTeamName: _v3,
    onCreated: _v4,
    paywall: _v5
  }) => {
    let [_v6, _v7] = (0, _v2.useState)("form"),
      [_v8, _v9] = (0, _v2.useState)(null),
      [_v10, _v11] = (0, _v2.useState)(0),
      {
        notTeamGatedContentSpaceEnabled: _v12,
        loading: _v13
      } = (0, _v48.useContentSpaceEnabled)(_v0.ownerId),
      _v14 = !!_v5 && !_v13 && !_v12,
      _v15 = !!_v5 && _v13,
      _v16 = _v1 && !_v14 && !_v15,
      _v17 = () => {
        _v7("form"), _v9(null), _v11(_v0 => _v0 + 1), _v2();
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v47, {
        apiConfig: _v0,
        defaultTeamName: _v3,
        isOpen: _v16 && "form" === _v6,
        onClose: _v17,
        onContinue: _v0 => {
          _v9(_v0), _v7("create");
        }
      }, _v10), (0, _v1.jsx)(_v31, {
        apiConfig: _v0,
        teamData: _v8,
        isOpen: _v16 && "create" === _v6,
        onClose: _v17,
        onBack: () => _v7("form"),
        onCreated: _v4 ?? (() => window.location.reload())
      }), _v1 && _v14 && _v5 && (0, _v1.jsx)(_v3.default, {
        ..._v5,
        apiUrl: _v0.apiUrl,
        userConfig: {
          jwt: _v0.jwt,
          userId: _v0.ownerId
        },
        onClose: _v17
      })]
    });
  }], 0);
}