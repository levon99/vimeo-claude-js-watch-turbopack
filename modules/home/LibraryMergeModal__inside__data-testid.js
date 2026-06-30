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
  _v0.s(["LibraryMergeModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    testId: _v2,
    title: _v3,
    subtitle: _v4,
    showBadge: _v5 = !0,
    children: _v6,
    extra: _v7,
    footer: _v8
  }) => (0, _v1.jsxs)(_v4.Modal, {
    isOpen: _v0,
    onClose: _v1,
    isCentered: !0,
    scrollBehavior: "inside",
    children: [(0, _v1.jsx)(_v9.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
      "data-testid": _v2,
      maxW: {
        base: "calc(100vw - 32px)",
        md: "488px"
      },
      children: [(0, _v1.jsx)(_v6.ModalCloseButton, {
        top: "20px",
        right: "20px"
      }), (0, _v1.jsxs)(_v11.VStack, {
        gap: "3",
        align: "start",
        pt: "lg",
        px: "lg",
        w: "100%",
        children: [_v5 && (0, _v1.jsx)(_v2.Badge, {
          variant: "new",
          size: "sm",
          children: (0, _v16.translate)({
            singular: "Important update",
            dictionary: {
              es: {
                singular: "Actualización importante"
              },
              "de-DE": {
                singular: "Wichtige Aktualisierung"
              },
              "fr-FR": {
                singular: "Mise à jour importante"
              },
              "ja-JP": {
                singular: "重要なお知らせ"
              },
              "ko-KR": {
                singular: "중요 업데이트"
              },
              "pt-BR": {
                singular: "Atualização importante"
              },
              "zh-CN": {
                singular: "重要更新"
              }
            }
          })
        }), _v4 ? (0, _v1.jsxs)(_v11.VStack, {
          gap: "xs",
          align: "start",
          w: "100%",
          children: [(0, _v1.jsx)(_v3.Header, {
            size: "md",
            color: "text-primary",
            children: _v3
          }), (0, _v1.jsx)(_v10.Paragraph, {
            size: "md",
            color: "text-secondary",
            children: _v4
          })]
        }) : (0, _v1.jsx)(_v3.Header, {
          size: "md",
          color: "text-primary",
          children: _v3
        })]
      }), (0, _v1.jsx)(_v5.ModalBody, {
        px: "lg",
        pt: "lg",
        pb: "sm",
        children: (0, _v1.jsxs)(_v11.VStack, {
          gap: "lg",
          align: "center",
          w: "100%",
          children: [_v6, (0, _v1.jsxs)(_v11.VStack, {
            gap: "none",
            align: "start",
            w: "100%",
            children: [(0, _v1.jsx)(_v18.InfoRow, {
              icon: (0, _v1.jsx)(_v12.CircleCheck, {}),
              title: (0, _v16.translate)({
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
              description: (0, _v16.translate)({
                singular: "Every folder and video stays in one place instead of two.",
                dictionary: {
                  es: {
                    singular: "Cada carpeta y cada video permanece en un solo lugar en lugar de dos."
                  },
                  "de-DE": {
                    singular: "Jeder Ordner und jedes Video bleibt an einem Ort statt an zwei."
                  },
                  "fr-FR": {
                    singular: "Chaque dossier et chaque vidéo restent à un seul endroit au lieu de deux."
                  },
                  "ja-JP": {
                    singular: "すべてのフォルダとビデオは二か所ではなく一か所にまとめられます。"
                  },
                  "ko-KR": {
                    singular: "모든 폴더와 동영상이 두 곳이 아닌 한 곳에 보관됩니다."
                  },
                  "pt-BR": {
                    singular: "Todas as pastas e vídeos ficam em um só lugar em vez de dois."
                  },
                  "zh-CN": {
                    singular: "每个文件夹和视频只保留在一个位置，而不是两个。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v18.InfoRow, {
              icon: (0, _v1.jsx)(_v13.Lock, {}),
              title: (0, _v16.translate)({
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
              description: (0, _v16.translate)({
                singular: "Public, password and private links stay exactly as you set them.",
                dictionary: {
                  es: {
                    singular: "Los enlaces públicos, con contraseña y privados permanecen exactamente como los configuraste."
                  },
                  "de-DE": {
                    singular: "Öffentliche, passwortgeschützte und private Links bleiben genau so, wie du sie festgelegt hast."
                  },
                  "fr-FR": {
                    singular: "Les liens publics, protégés par mot de passe et privés restent exactement tels que vous les avez définis."
                  },
                  "ja-JP": {
                    singular: "公開、パスワード保護、非公開のリンクは設定どおりに維持されます。"
                  },
                  "ko-KR": {
                    singular: "공개, 비밀번호 및 비공개 링크는 설정한 그대로 유지됩니다."
                  },
                  "pt-BR": {
                    singular: "Links públicos, com senha e privados permanecem exatamente como você os definiu."
                  },
                  "zh-CN": {
                    singular: "公开、密码和私密链接将保持为你设置的状态。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v18.InfoRow, {
              icon: (0, _v1.jsx)(_v14.PersonUserAdd, {}),
              title: (0, _v16.translate)({
                singular: "Want a team later?",
                dictionary: {
                  es: {
                    singular: "¿Quieres un equipo más adelante?"
                  },
                  "de-DE": {
                    singular: "Willst du später ein Team?"
                  },
                  "fr-FR": {
                    singular: "Vous voulez une équipe plus tard\x0f?"
                  },
                  "ja-JP": {
                    singular: "後でチームが必要ですか？"
                  },
                  "ko-KR": {
                    singular: "나중에 팀이 필요하신가요?"
                  },
                  "pt-BR": {
                    singular: "Quer uma equipe mais tarde?"
                  },
                  "zh-CN": {
                    singular: "以后想要团队吗？"
                  }
                }
              }),
              description: (0, _v16.translate)({
                singular: "Invite someone and a Team Library comes back automatically.",
                dictionary: {
                  es: {
                    singular: "Invita a alguien y la Biblioteca del equipo vuelve automáticamente."
                  },
                  "de-DE": {
                    singular: "Wenn du jemanden einlädst, wird die Team-Bibliothek automatisch wiederhergestellt."
                  },
                  "fr-FR": {
                    singular: "Invitez quelqu'un et une Bibliothèque d’équipe réapparaît automatiquement."
                  },
                  "ja-JP": {
                    singular: "誰かを招待すると、チームライブラリが自動的に復活します。"
                  },
                  "ko-KR": {
                    singular: "누군가를 초대하면 팀 라이브러리가 자동으로 복원됩니다."
                  },
                  "pt-BR": {
                    singular: "Convide alguém e uma Biblioteca da equipe volta automaticamente."
                  },
                  "zh-CN": {
                    singular: "邀请某人后，团队资料库会自动恢复。"
                  }
                }
              })
            })]
          }), (0, _v1.jsxs)(_v11.VStack, {
            gap: "sm",
            align: "start",
            w: "100%",
            children: [(0, _v1.jsx)(_v17.LibraryMergeAlert, {
              tone: "info",
              icon: (0, _v1.jsx)(_v15.QuestionCircle, {}),
              lead: (0, _v16.translate)({
                singular: "Why?",
                dictionary: {
                  es: {
                    singular: "¿Por qué?"
                  },
                  "de-DE": {
                    singular: "Warum?"
                  },
                  "fr-FR": {
                    singular: "Pourquoi\x0f?"
                  },
                  "ja-JP": {
                    singular: "なぜ？"
                  },
                  "ko-KR": {
                    singular: "왜?"
                  },
                  "pt-BR": {
                    singular: "Por quê?"
                  },
                  "zh-CN": {
                    singular: "为什么？"
                  }
                }
              }),
              children: (0, _v16.translate)({
                singular: "Two libraries are made for teams. You have a Team Library, but you're not sharing with anyone.",
                dictionary: {
                  es: {
                    singular: "Se crean dos bibliotecas para equipos. Tienes una Biblioteca del equipo, pero no la compartes con nadie."
                  },
                  "de-DE": {
                    singular: "Zwei Bibliotheken sind für Teams vorgesehen. Du hast eine Team-Bibliothek, teilst sie aber mit niemandem."
                  },
                  "fr-FR": {
                    singular: "Deux bibliothèques sont prévues pour les équipes. Vous avez une Bibliothèque d’équipe, mais vous ne la partagez avec personne."
                  },
                  "ja-JP": {
                    singular: "2つのライブラリはチーム向けに用意されています。あなたはチームライブラリを持っていますが、誰とも共有していません。"
                  },
                  "ko-KR": {
                    singular: "팀용으로 두 개의 라이브러리가 생성됩니다. 팀 라이브러리가 있지만 아무와도 공유되어 있지 않습니다."
                  },
                  "pt-BR": {
                    singular: "Duas bibliotecas são feitas para equipes. Você tem uma Biblioteca da equipe, mas não está compartilhando com ninguém."
                  },
                  "zh-CN": {
                    singular: "两个资料库是为团队而设。你有一个团队资料库，但并未与任何人共享。"
                  }
                }
              })
            }), _v7]
          })]
        })
      }), (0, _v1.jsx)(_v8.ModalFooter, {
        px: "lg",
        pt: "md",
        pb: "lg",
        children: _v8
      })]
    })]
  })], 0);
  var _v19 = _v0.i(0);
  _v0.s(["ArrowDown", 0, _v0 => (0, _v1.jsx)(_v19.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.293 11.293a1 1 0 0 1 1.414 0L11 16.586V5a1 1 0 1 1 2 0v11.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z",
      fill: "currentColor"
    })
  })], 0);
}