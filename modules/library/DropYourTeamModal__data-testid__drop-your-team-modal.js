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
    _v13 = _v0.i(468),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  _v0.s(["DropYourTeamModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    apiConfig: _v2,
    onDropped: _v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(""),
      _v8 = () => {
        _v5(!1), _v7(""), _v1();
      },
      _v9 = async () => {
        _v5(!0), _v7("");
        try {
          await (0, _v16.dropTeam)(_v2), _v3?.(), _v8();
        } catch {
          _v7(_v16.defaultError);
        } finally {
          _v5(!1);
        }
      };
    return (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: _v8,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v9.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
        "data-testid": "drop-your-team-modal",
        bg: "fill-surface",
        borderRadius: "xl",
        maxW: "488px",
        children: [(0, _v1.jsx)(_v5.HStack, {
          gap: "sm",
          align: "start",
          pt: "lg",
          pr: "lg",
          pb: "sm",
          pl: "lg",
          w: "100%",
          children: (0, _v1.jsxs)(_v12.VStack, {
            gap: "xs",
            align: "start",
            justify: "center",
            flex: "1 0 0",
            minW: 0,
            children: [(0, _v1.jsx)(_v4.Header, {
              size: "md",
              color: "text-primary",
              children: (0, _v17.translate)({
                singular: "Remove your team library?",
                dictionary: {
                  es: {
                    singular: "¿Eliminar tu biblioteca del equipo?"
                  },
                  "de-DE": {
                    singular: "Ihre Team-Bibliothek entfernen?"
                  },
                  "fr-FR": {
                    singular: "Supprimer votre bibliothèque d'équipe ?"
                  },
                  "ja-JP": {
                    singular: "チームライブラリを削除しますか？"
                  },
                  "ko-KR": {
                    singular: "팀 라이브러리를 제거하시겠습니까?"
                  },
                  "pt-BR": {
                    singular: "Remover sua biblioteca da equipe?"
                  },
                  "zh-CN": {
                    singular: "要移除您的团队资料库吗？"
                  }
                }
              })
            }), (0, _v1.jsx)(_v10.Paragraph, {
              size: "sm",
              color: "text-secondary",
              children: (0, _v17.translate)({
                singular: "You're the only member, so you can switch back to a single library.",
                dictionary: {
                  es: {
                    singular: "Eres el único miembro, por lo que puedes volver a una sola biblioteca."
                  },
                  "de-DE": {
                    singular: "Sie sind das einzige Mitglied, daher können Sie wieder zu einer einzelnen Bibliothek wechseln."
                  },
                  "fr-FR": {
                    singular: "Vous êtes le seul membre, vous pouvez donc revenir à une seule bibliothèque."
                  },
                  "ja-JP": {
                    singular: "あなたは唯一のメンバーなので、単一のライブラリに戻すことができます。"
                  },
                  "ko-KR": {
                    singular: "현재 귀하만 구성원으로 있어 단일 라이브러리로 전환할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Você é o único membro, então pode voltar para uma única biblioteca."
                  },
                  "zh-CN": {
                    singular: "您是唯一的成员，因此可以切换回单一资料库。"
                  }
                }
              })
            })]
          })
        }), (0, _v1.jsx)(_v7.ModalCloseButton, {
          top: "20px",
          right: "20px"
        }), (0, _v1.jsx)(_v12.VStack, {
          gap: "lg",
          align: "center",
          justify: "center",
          px: "lg",
          py: "md",
          w: "100%",
          children: (0, _v1.jsxs)(_v12.VStack, {
            gap: "none",
            align: "start",
            w: "100%",
            children: [(0, _v1.jsx)(_v18.InfoRow, {
              icon: (0, _v1.jsx)(_v15.MyLibrary, {}),
              title: (0, _v17.translate)({
                singular: "Back to a single library",
                dictionary: {
                  es: {
                    singular: "Volver a una sola biblioteca"
                  },
                  "de-DE": {
                    singular: "Zurück zu einer einzelnen Bibliothek"
                  },
                  "fr-FR": {
                    singular: "Retour à une seule bibliothèque"
                  },
                  "ja-JP": {
                    singular: "単一のライブラリに戻す"
                  },
                  "ko-KR": {
                    singular: "단일 라이브러리로 되돌리기"
                  },
                  "pt-BR": {
                    singular: "Voltar para uma única biblioteca"
                  },
                  "zh-CN": {
                    singular: "返回到单一资料库"
                  }
                }
              }),
              description: (0, _v17.translate)({
                singular: "My Library and Team Library merge back into one unified library.",
                dictionary: {
                  es: {
                    singular: "Mi biblioteca y la biblioteca del equipo se fusionan nuevamente en una sola biblioteca unificada."
                  },
                  "de-DE": {
                    singular: "Meine Bibliothek und die Team-Bibliothek werden wieder zu einer einzigen, zusammengeführten Bibliothek."
                  },
                  "fr-FR": {
                    singular: "Ma bibliothèque et la bibliothèque d'équipe fusionnent de nouveau pour ne former qu'une seule bibliothèque."
                  },
                  "ja-JP": {
                    singular: "マイライブラリとチームライブラリは再び1つの統合ライブラリに戻ります。"
                  },
                  "ko-KR": {
                    singular: "내 라이브러리와 팀 라이브러리가 다시 하나의 통합 라이브러리로 병합됩니다."
                  },
                  "pt-BR": {
                    singular: "Minha Biblioteca e a Biblioteca da Equipe voltam a se unir em uma única biblioteca."
                  },
                  "zh-CN": {
                    singular: "我的资料库与团队资料库将合并为一个统一的资料库。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v18.InfoRow, {
              icon: (0, _v1.jsx)(_v13.FolderUpload, {}),
              title: (0, _v17.translate)({
                singular: "Nothing is deleted",
                dictionary: {
                  es: {
                    singular: "No se elimina nada"
                  },
                  "de-DE": {
                    singular: "Nichts wird gelöscht"
                  },
                  "fr-FR": {
                    singular: "Rien n'est supprimé."
                  },
                  "ja-JP": {
                    singular: "何も削除されません"
                  },
                  "ko-KR": {
                    singular: "삭제되는 항목은 없습니다."
                  },
                  "pt-BR": {
                    singular: "Nada é excluído"
                  },
                  "zh-CN": {
                    singular: "不会删除任何内容"
                  }
                }
              }),
              description: (0, _v17.translate)({
                singular: "All your videos and folders stay exactly where they are.",
                dictionary: {
                  es: {
                    singular: "Todos tus vídeos y carpetas permanecen exactamente donde están."
                  },
                  "de-DE": {
                    singular: "Alle Ihre Videos und Ordner bleiben genau dort, wo sie sind."
                  },
                  "fr-FR": {
                    singular: "Toutes vos vidéos et dossiers restent exactement là où ils sont."
                  },
                  "ja-JP": {
                    singular: "すべての動画とフォルダは元の場所にそのまま残ります。"
                  },
                  "ko-KR": {
                    singular: "모든 동영상 및 폴더는 원래 위치에 그대로 남아 있습니다."
                  },
                  "pt-BR": {
                    singular: "Todos os seus vídeos e pastas permanecem exatamente onde estão."
                  },
                  "zh-CN": {
                    singular: "您所有的视频和文件夹将保持原位。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v18.InfoRow, {
              icon: (0, _v1.jsx)(_v14.Lock, {}),
              title: (0, _v17.translate)({
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
              description: (0, _v17.translate)({
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
          })
        }), (0, _v1.jsxs)(_v12.VStack, {
          gap: "3",
          align: "center",
          pt: "md",
          px: "lg",
          pb: "lg",
          w: "100%",
          children: [_v6 && (0, _v1.jsx)(_v11.Text, {
            fontSize: "0.75rem",
            color: "status-destructive-primary",
            textAlign: "center",
            children: _v6
          }), (0, _v1.jsx)(_v3.Button, {
            variant: "destructive",
            size: "md",
            onClick: _v9,
            isLoading: _v4,
            isDisabled: _v4,
            w: "100%",
            "data-testid": "drop-your-team-confirm-button",
            children: (0, _v17.translate)({
              singular: "Remove team library",
              dictionary: {
                es: {
                  singular: "Eliminar biblioteca del equipo"
                },
                "de-DE": {
                  singular: "Team-Bibliothek entfernen"
                },
                "fr-FR": {
                  singular: "Supprimer la bibliothèque d'équipe"
                },
                "ja-JP": {
                  singular: "チームライブラリを削除"
                },
                "ko-KR": {
                  singular: "팀 라이브러리 제거"
                },
                "pt-BR": {
                  singular: "Remover biblioteca da equipe"
                },
                "zh-CN": {
                  singular: "移除团队资料库"
                }
              }
            })
          }), (0, _v1.jsx)(_v3.Button, {
            variant: "tertiary",
            size: "md",
            onClick: _v8,
            isDisabled: _v4,
            w: "100%",
            "data-testid": "drop-your-team-cancel-button",
            children: (0, _v17.translate)({
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
          })]
        })]
      })]
    });
  }]);
}