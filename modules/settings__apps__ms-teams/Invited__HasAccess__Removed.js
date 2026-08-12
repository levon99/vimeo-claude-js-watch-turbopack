{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.i(0);
  var _v7 = _v0.i(0),
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
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = {
      All: "All",
      Invited: "Invited",
      HasAccess: "HasAccess",
      Removed: "Removed",
      NotInvited: "NotInvited"
    },
    _v29 = {
      UNAUTHORIZED: "UNAUTHORIZED",
      FORBIDDEN: "FORBIDDEN",
      NOT_FOUND: "NOT_FOUND"
    };
  _v0.s(["AdminStatus", 0, {
    Completed: "Completed",
    Pending: "Pending",
    Disconnected: "Disconnected"
  }, "ErrorType", 0, _v29, "MAX_LOADER_LIST", 0, 8, "MAX_PAGE_SIZE", 0, 8, "MemberStatus", 0, _v28], 0);
  let _v30 = {
      AccessRemoved: (0, _v27.translate)({
        singular: "Access removed",
        dictionary: {
          es: {
            singular: "Se ha eliminado el acceso"
          },
          "de-DE": {
            singular: "Zugriff wurde entfernt."
          },
          "fr-FR": {
            singular: "Accès supprimé"
          },
          "ja-JP": {
            singular: "アクセスが削除されました"
          },
          "ko-KR": {
            singular: "접근 권한이 제거되었습니다."
          },
          "pt-BR": {
            singular: "Acesso removido"
          },
          "zh-CN": {
            singular: "访问权限已删除"
          }
        }
      }),
      Disconnected: (0, _v27.translate)({
        singular: "Disconnected",
        dictionary: {
          es: {
            singular: "Desconectado"
          },
          "de-DE": {
            singular: "Verbindung getrennt"
          },
          "fr-FR": {
            singular: "Déconnecté"
          },
          "ja-JP": {
            singular: "切断されました"
          },
          "ko-KR": {
            singular: "연결 해제됨"
          },
          "pt-BR": {
            singular: "Desconectado"
          },
          "zh-CN": {
            singular: "已断开连接"
          }
        }
      }),
      DisconnectAccount: (0, _v27.translate)({
        singular: "Disconnect account",
        dictionary: {
          es: {
            singular: "Desconectar la cuenta"
          },
          "de-DE": {
            singular: "Verbindung zum Konto trennen"
          },
          "fr-FR": {
            singular: "Déconnecter le compte"
          },
          "ja-JP": {
            singular: "アカウントの接続を解除"
          },
          "ko-KR": {
            singular: "계정 연결 해제"
          },
          "pt-BR": {
            singular: "Desconectar a conta"
          },
          "zh-CN": {
            singular: "断开账户连接"
          }
        }
      }),
      Self: (0, _v27.translate)({
        singular: "self",
        dictionary: {
          es: {
            singular: "usted"
          },
          "de-DE": {
            singular: "Selbst"
          },
          "fr-FR": {
            singular: "vous"
          },
          "ja-JP": {
            singular: "自分"
          },
          "ko-KR": {
            singular: "본인"
          },
          "pt-BR": {
            singular: "eu"
          },
          "zh-CN": {
            singular: "自己"
          }
        }
      }),
      HasAccessString: (0, _v27.translate)({
        singular: "Has access",
        dictionary: {
          es: {
            singular: "Tiene acceso"
          },
          "de-DE": {
            singular: "Hat Zugriff"
          },
          "fr-FR": {
            singular: "A accès"
          },
          "ja-JP": {
            singular: "アクセス権あり"
          },
          "ko-KR": {
            singular: "접근 권한이 있습니다."
          },
          "pt-BR": {
            singular: "Tem acesso"
          },
          "zh-CN": {
            singular: "有访问权限"
          }
        }
      }),
      ManageUploadDefaults: (0, _v27.translate)({
        singular: "Manage upload defaults",
        dictionary: {
          es: {
            singular: "Gestionar la configuración de las subidas"
          },
          "de-DE": {
            singular: "Hochladen-Standardeinstellungen verwalten"
          },
          "fr-FR": {
            singular: "Gérer les paramètres de mise en ligne par défaut"
          },
          "ja-JP": {
            singular: "アップロードのデフォルトを管理"
          },
          "ko-KR": {
            singular: "업로드 기본값 관리"
          },
          "pt-BR": {
            singular: "Gerenciar padrões de upload"
          },
          "zh-CN": {
            singular: "管理上传默认项"
          }
        }
      }),
      Disconnect: (0, _v27.translate)({
        singular: "Disconnect",
        dictionary: {
          es: {
            singular: "Desconectar"
          },
          "de-DE": {
            singular: "Verbindung unterbrechen"
          },
          "fr-FR": {
            singular: "Se déconnecter"
          },
          "ja-JP": {
            singular: "接続解除"
          },
          "ko-KR": {
            singular: "연결 해제"
          },
          "pt-BR": {
            singular: "Desconectar"
          },
          "zh-CN": {
            singular: "取消关联"
          }
        }
      }),
      DisconnectYourAccount: (0, _v27.translate)({
        singular: "Disconnect your account",
        dictionary: {
          es: {
            singular: "Desconecte su cuenta"
          },
          "de-DE": {
            singular: "Trennen Sie Ihr Konto."
          },
          "fr-FR": {
            singular: "Déconnectez votre compte"
          },
          "ja-JP": {
            singular: "自身のアカウントの接続を解除"
          },
          "ko-KR": {
            singular: "계정 연결 해제"
          },
          "pt-BR": {
            singular: "Desconectar sua conta"
          },
          "zh-CN": {
            singular: "断开您的账户连接"
          }
        }
      }),
      ManageTeamIntegrationLossWarning: (0, _v27.translate)({
        singular: "Your Vimeo account will lose access to the Microsoft Teams integration.",
        dictionary: {
          es: {
            singular: "Su cuenta de Vimeo perderá el acceso a la integración de Microsoft Teams."
          },
          "de-DE": {
            singular: "Ihr Vimeo-Konto wird den Zugriff auf die Microsoft Teams-Integration verlieren."
          },
          "fr-FR": {
            singular: "Votre compte Vimeo perdra l'accès à l'intégration Microsoft Teams."
          },
          "ja-JP": {
            singular: "お客様のVimeoアカウントは、Microsoft Teams連携にアクセスできなくなります。"
          },
          "ko-KR": {
            singular: "회원님의 Vimeo 계정은 Microsoft Teams 통합 기능에 대한 접근 권한을 잃게 됩니다."
          },
          "pt-BR": {
            singular: "Sua conta do Vimeo perderá o acesso à integração com o Microsoft Teams."
          },
          "zh-CN": {
            singular: "您的 Vimeo 帐户将失去对 Microsoft Teams 集成的访问权限。"
          }
        }
      }),
      Connected: (0, _v27.translate)({
        singular: "Connected",
        dictionary: {
          es: {
            singular: "Conectado"
          },
          "de-DE": {
            singular: "Verknüpft"
          },
          "fr-FR": {
            singular: "Connecté"
          },
          "ja-JP": {
            singular: "接続済み"
          },
          "ko-KR": {
            singular: "연결됨"
          },
          "pt-BR": {
            singular: "Conectado"
          },
          "zh-CN": {
            singular: "已关联"
          }
        }
      }),
      DisconnectMyself: (0, _v27.translate)({
        singular: "Disconnect myself",
        dictionary: {
          es: {
            singular: "Desconectarme"
          },
          "de-DE": {
            singular: "Verbindung selbst trennen"
          },
          "fr-FR": {
            singular: "Me déconnecter"
          },
          "ja-JP": {
            singular: "自分の接続を解除"
          },
          "ko-KR": {
            singular: "내 연결 해제"
          },
          "pt-BR": {
            singular: "Desconectar-me"
          },
          "zh-CN": {
            singular: "断开我自己的连接"
          }
        }
      }),
      ConnectAccount: (0, _v27.translate)({
        singular: "Connect account",
        dictionary: {
          es: {
            singular: "Conectar la cuenta"
          },
          "de-DE": {
            singular: "Konto verbinden"
          },
          "fr-FR": {
            singular: "Connecter un compte"
          },
          "ja-JP": {
            singular: "アカウントを接続"
          },
          "ko-KR": {
            singular: "계정 연결"
          },
          "pt-BR": {
            singular: "Conectar conta"
          },
          "zh-CN": {
            singular: "连接账户"
          }
        }
      }),
      AllMembersLoseAccess: (0, _v27.translate)({
        singular: "All members will lose access to the Microsoft Teams integration to their Vimeo account, including you.",
        dictionary: {
          es: {
            singular: "Todos los miembros perderán el acceso a la integración de Microsoft Teams en su cuenta de Vimeo, incluido usted."
          },
          "de-DE": {
            singular: "Alle Mitglieder werden den Zugriff auf die Microsoft Teams-Integration zu ihrem Vimeo-Konto verlieren, einschließlich Ihnen."
          },
          "fr-FR": {
            singular: "Tous les membres perdront l'accès à l'intégration de Microsoft Teams à leur compte Vimeo, y compris vous."
          },
          "ja-JP": {
            singular: "お客様を含むすべてのメンバーは、VimeoアカウントへのMicrosoft Teams連携にアクセスできなくなります。"
          },
          "ko-KR": {
            singular: "회원님을 포함한 모든 멤버가 Vimeo 계정의 Microsoft Teams 통합 기능을 이용할 수 없게 됩니다."
          },
          "pt-BR": {
            singular: "Todos os integrantes perderão o acesso à integração do Microsoft Teams com a conta do Vimeo, inclusive você."
          },
          "zh-CN": {
            singular: "所有成员（包括您）将失去对其 Vimeo 帐户中 Microsoft Teams 集成的访问权限。"
          }
        }
      }),
      Cancel: (0, _v27.translate)({
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
      }),
      SendInvite: (0, _v27.translate)({
        singular: "Send invite",
        dictionary: {
          es: {
            singular: "Enviar la invitación"
          },
          "de-DE": {
            singular: "Einladung versenden"
          },
          "fr-FR": {
            singular: "Envoyer une invitation"
          },
          "ja-JP": {
            singular: "招待状を送る"
          },
          "ko-KR": {
            singular: "초대장 보내기"
          },
          "pt-BR": {
            singular: "Enviar convite"
          },
          "zh-CN": {
            singular: "发送邀请"
          }
        }
      }),
      All: (0, _v27.translate)({
        singular: "All",
        dictionary: {
          es: {
            singular: "Todos"
          },
          "de-DE": {
            singular: "Alle"
          },
          "fr-FR": {
            singular: "Tout"
          },
          "ja-JP": {
            singular: "すべて"
          },
          "ko-KR": {
            singular: "모두"
          },
          "pt-BR": {
            singular: "Tudo"
          },
          "zh-CN": {
            singular: "全部"
          }
        }
      }),
      Invited: (0, _v27.translate)({
        singular: "Invited",
        dictionary: {
          es: {
            singular: "Invitado(a) el"
          },
          "de-DE": {
            singular: "Eingeladen"
          },
          "fr-FR": {
            singular: "Invité"
          },
          "ja-JP": {
            singular: "招待済み"
          },
          "ko-KR": {
            singular: "초대됨"
          },
          "pt-BR": {
            singular: "Convidado (a)"
          },
          "zh-CN": {
            singular: "已邀请"
          }
        }
      }),
      HasAccess: (0, _v27.translate)({
        singular: "HasAccess",
        dictionary: {
          es: {
            singular: "Tiene acceso"
          },
          "de-DE": {
            singular: "Zugriffsberechtigung"
          },
          "fr-FR": {
            singular: "A accès"
          },
          "ja-JP": {
            singular: "アクセス権あり"
          },
          "ko-KR": {
            singular: "접근 권한이 있습니다."
          },
          "pt-BR": {
            singular: "Tem acesso"
          }
        }
      }),
      Removed: (0, _v27.translate)({
        singular: "Removed",
        dictionary: {
          es: {
            singular: "Clips"
          },
          "de-DE": {
            singular: "entfernt"
          },
          "fr-FR": {
            singular: "Supprimé"
          },
          "ja-JP": {
            singular: "削除された"
          },
          "ko-KR": {
            singular: "제거됨"
          },
          "pt-BR": {
            singular: "removido"
          },
          "zh-CN": {
            singular: "已移除"
          }
        }
      }),
      NotInvited: (0, _v27.translate)({
        singular: "Not invited",
        dictionary: {
          es: {
            singular: "No invitado(a)"
          },
          "de-DE": {
            singular: "Nicht eingeladen"
          },
          "fr-FR": {
            singular: "Non invité"
          },
          "ja-JP": {
            singular: "招待されていません"
          },
          "ko-KR": {
            singular: "초대되지 않았습니다."
          },
          "pt-BR": {
            singular: "Não convidado(a)"
          },
          "zh-CN": {
            singular: "未被邀请"
          }
        }
      }),
      PermissionLevels: {
        Admin: (0, _v27.translate)({
          singular: "Admin",
          dictionary: {
            es: {
              singular: "Administrador(a)"
            },
            "fr-FR": {
              singular: "Administrateur"
            },
            "ja-JP": {
              singular: "管理者"
            },
            "ko-KR": {
              singular: "관리자"
            },
            "pt-BR": {
              singular: "Administrador"
            },
            "zh-CN": {
              singular: "管理员"
            }
          }
        }),
        Contributor: (0, _v27.translate)({
          singular: "Contributor",
          dictionary: {
            es: {
              singular: "Colaborador(a)"
            },
            "de-DE": {
              singular: "Beitragender"
            },
            "fr-FR": {
              singular: "Contributeur"
            },
            "ja-JP": {
              singular: "投稿者"
            },
            "ko-KR": {
              singular: "기여자"
            },
            "pt-BR": {
              singular: "Colaborador"
            },
            "zh-CN": {
              singular: "贡献者"
            }
          }
        }),
        ContributorPlus: (0, _v27.translate)({
          singular: "Contributor Plus",
          dictionary: {
            es: {
              singular: "Colaborador Plus"
            },
            "de-DE": {
              singular: "Beitragender Plus"
            },
            "fr-FR": {
              singular: "Contributeur Plus"
            },
            "ja-JP": {
              singular: "投稿者プラス"
            },
            "ko-KR": {
              singular: "기여자 플러스"
            },
            "pt-BR": {
              singular: "Colaborador Plus"
            }
          }
        }),
        Uploader: (0, _v27.translate)({
          singular: "Uploader",
          dictionary: {
            es: {
              singular: "Herramienta para subir videos"
            },
            "ja-JP": {
              singular: "アップローダー"
            },
            "ko-KR": {
              singular: "업로더"
            },
            "pt-BR": {
              singular: "Quem carrega os vídeos"
            },
            "zh-CN": {
              singular: "上传者"
            }
          }
        }),
        Viewer: (0, _v27.translate)({
          singular: "Viewer",
          dictionary: {
            es: {
              singular: "Espectador(a)"
            },
            "de-DE": {
              singular: "Zuschauende"
            },
            "fr-FR": {
              singular: "Spectateur"
            },
            "ja-JP": {
              singular: "閲覧者"
            },
            "ko-KR": {
              singular: "뷰어"
            },
            "pt-BR": {
              singular: "Espectador"
            },
            "zh-CN": {
              singular: "观众"
            }
          }
        }),
        Owner: (0, _v27.translate)({
          singular: "Owner",
          dictionary: {
            es: {
              singular: "Propietario(a)"
            },
            "de-DE": {
              singular: "Inhaber"
            },
            "fr-FR": {
              singular: "Propriétaire"
            },
            "ja-JP": {
              singular: "所有者"
            },
            "ko-KR": {
              singular: "계정 소유자"
            },
            "pt-BR": {
              singular: "Proprietário"
            },
            "zh-CN": {
              singular: "所有者"
            }
          }
        })
      },
      DisconnectTeam: (0, _v27.translate)({
        singular: "Disconnect team?",
        dictionary: {
          es: {
            singular: "¿Desconectar al equipo?"
          },
          "de-DE": {
            singular: "Teamverbindung trennen?"
          },
          "fr-FR": {
            singular: "Déconnecter l'équipe ?"
          },
          "ja-JP": {
            singular: "チームを接続解除しますか？"
          },
          "ko-KR": {
            singular: "팀 연결을 해제하시겠습니까?"
          },
          "pt-BR": {
            singular: "Desconectar equipe?"
          },
          "zh-CN": {
            singular: "断开团队吗？"
          }
        }
      }),
      DisconnectTeamNoQuestion: (0, _v27.translate)({
        singular: "Disconnect team",
        dictionary: {
          es: {
            singular: "Desconectar al equipo"
          },
          "de-DE": {
            singular: "Team trennen"
          },
          "fr-FR": {
            singular: "Déconnecter l'équipe"
          },
          "ja-JP": {
            singular: "チームの接続を解除"
          },
          "ko-KR": {
            singular: "팀 연결 해제"
          },
          "pt-BR": {
            singular: "Desconectar equipe"
          },
          "zh-CN": {
            singular: "断开团队连接"
          }
        }
      }),
      RemoveAccess: (0, _v27.translate)({
        singular: "Remove Access",
        dictionary: {
          es: {
            singular: "Quitar acceso"
          },
          "de-DE": {
            singular: "Zugriff entfernen"
          },
          "fr-FR": {
            singular: "Supprimer l'accès"
          },
          "ja-JP": {
            singular: "アクセスを削除"
          },
          "ko-KR": {
            singular: "액세스 권한 제거"
          },
          "pt-BR": {
            singular: "Remover acesso"
          },
          "zh-CN": {
            singular: "移除访问权限"
          }
        }
      }),
      You: (0, _v27.translate)({
        singular: "You",
        dictionary: {
          es: {
            singular: "Tú"
          },
          "de-DE": {
            singular: "Du"
          },
          "fr-FR": {
            singular: "Vous"
          },
          "ja-JP": {
            singular: "あなた"
          },
          "ko-KR": {
            singular: "회원님"
          },
          "pt-BR": {
            singular: "Você"
          },
          "zh-CN": {
            singular: "您"
          }
        }
      }),
      placeholder: (0, _v27.translate)({
        singular: "Search members",
        dictionary: {
          es: {
            singular: "Buscar miembros"
          },
          "de-DE": {
            singular: "Mitglieder durchsuchen"
          },
          "fr-FR": {
            singular: "Rechercher des membres"
          },
          "ja-JP": {
            singular: "メンバーを検索"
          },
          "ko-KR": {
            singular: "회원 검색"
          },
          "pt-BR": {
            singular: "Pesquisar membros"
          },
          "zh-CN": {
            singular: "搜索成员"
          }
        }
      }),
      Copied: (0, _v27.translate)({
        singular: "Copied!",
        dictionary: {
          es: {
            singular: "Copiado"
          },
          "de-DE": {
            singular: "Kopiert!"
          },
          "fr-FR": {
            singular: "Copié !"
          },
          "ja-JP": {
            singular: "コピー完了！"
          },
          "ko-KR": {
            singular: "복사 완료!"
          },
          "pt-BR": {
            singular: "Copiado!"
          },
          "zh-CN": {
            singular: "已复制！"
          }
        }
      }),
      CopyInviteLink: (0, _v27.translate)({
        singular: "Copy invite link",
        dictionary: {
          es: {
            singular: "Copia el vínculo de invitación"
          },
          "de-DE": {
            singular: "Invite-Link kopieren"
          },
          "fr-FR": {
            singular: "Copier le lien d'invitation"
          },
          "ja-JP": {
            singular: "招待リンクをコピー"
          },
          "ko-KR": {
            singular: "초대장 링크 복사"
          },
          "pt-BR": {
            singular: "Copiar link do convite"
          },
          "zh-CN": {
            singular: "复制邀请链接"
          }
        }
      }),
      HasAccessPending: (0, _v27.translate)({
        singular: "Pending",
        dictionary: {
          es: {
            singular: "Pendiente"
          },
          "de-DE": {
            singular: "ausstehend"
          },
          "fr-FR": {
            singular: "en attente"
          },
          "ja-JP": {
            singular: "保留中"
          },
          "ko-KR": {
            singular: "보류 중"
          },
          "pt-BR": {
            singular: "Pendente"
          },
          "zh-CN": {
            singular: "待定"
          }
        }
      }),
      Name: (0, _v27.translate)({
        singular: "Name",
        dictionary: {
          es: {
            singular: "Nombre"
          },
          "fr-FR": {
            singular: "Nom"
          },
          "ja-JP": {
            singular: "名前"
          },
          "ko-KR": {
            singular: "이름"
          },
          "pt-BR": {
            singular: "Nome"
          },
          "zh-CN": {
            singular: "姓名"
          }
        }
      }),
      Role: (0, _v27.translate)({
        singular: "Role",
        dictionary: {
          es: {
            singular: "Rol"
          },
          "de-DE": {
            singular: "Rolle"
          },
          "fr-FR": {
            singular: "Rôle"
          },
          "ja-JP": {
            singular: "肩書き"
          },
          "ko-KR": {
            singular: "역할"
          },
          "pt-BR": {
            singular: "Função"
          },
          "zh-CN": {
            singular: "职位"
          }
        }
      }),
      Owner: (0, _v27.translate)({
        singular: "Owner",
        dictionary: {
          es: {
            singular: "Propietario(a)"
          },
          "de-DE": {
            singular: "Inhaber"
          },
          "fr-FR": {
            singular: "Propriétaire"
          },
          "ja-JP": {
            singular: "所有者"
          },
          "ko-KR": {
            singular: "계정 소유자"
          },
          "pt-BR": {
            singular: "Proprietário"
          },
          "zh-CN": {
            singular: "所有者"
          }
        }
      }),
      ResendInvite: (0, _v27.translate)({
        singular: "Resend invite",
        dictionary: {
          es: {
            singular: "Reenviar invitación"
          },
          "de-DE": {
            singular: "Einladung erneut senden"
          },
          "fr-FR": {
            singular: "Renvoyer l'invitation"
          },
          "ja-JP": {
            singular: "招待を再送する"
          },
          "ko-KR": {
            singular: "초대장 다시 보내기"
          },
          "pt-BR": {
            singular: "Reenviar convite"
          },
          "zh-CN": {
            singular: "重新发送邀请"
          }
        }
      }),
      InviteSent: (0, _v27.translate)({
        singular: "Invite sent",
        dictionary: {
          es: {
            singular: "Invitación enviada"
          },
          "de-DE": {
            singular: "Einladung wurde abgeschickt"
          },
          "fr-FR": {
            singular: "Invitation envoyée"
          },
          "ja-JP": {
            singular: "招待を送信しました"
          },
          "ko-KR": {
            singular: "초대장 전송 완료"
          },
          "pt-BR": {
            singular: "Convite enviado!"
          },
          "zh-CN": {
            singular: "邀请已发送"
          }
        }
      }),
      Invite: (0, _v27.translate)({
        singular: "Invite",
        dictionary: {
          es: {
            singular: "Invitar"
          },
          "de-DE": {
            singular: "Einladen"
          },
          "fr-FR": {
            singular: "Inviter"
          },
          "ja-JP": {
            singular: "招待"
          },
          "ko-KR": {
            singular: "초대"
          },
          "pt-BR": {
            singular: "Convidar"
          },
          "zh-CN": {
            singular: "邀请"
          }
        }
      }),
      Done: (0, _v27.translate)({
        singular: "Done",
        dictionary: {
          es: {
            singular: "Hecho"
          },
          "de-DE": {
            singular: "Fertig"
          },
          "fr-FR": {
            singular: "Terminé"
          },
          "ja-JP": {
            singular: "完了"
          },
          "ko-KR": {
            singular: "완료"
          },
          "pt-BR": {
            singular: "Feito"
          },
          "zh-CN": {
            singular: "已存档"
          }
        }
      }),
      PleaseTryAgain: (0, _v27.translate)({
        singular: "Please try again",
        dictionary: {
          es: {
            singular: "Inténtalo de nuevo"
          },
          "de-DE": {
            singular: "Bitte versuche es erneut."
          },
          "fr-FR": {
            singular: "Veuillez réessayer."
          },
          "ja-JP": {
            singular: "再度お試しください"
          },
          "ko-KR": {
            singular: "다시 시도해주세요"
          },
          "pt-BR": {
            singular: "Por favor, tente novamente."
          },
          "zh-CN": {
            singular: "请重试"
          }
        }
      }),
      PermissionDenied: (0, _v27.translate)({
        singular: "Permission Denied",
        dictionary: {
          es: {
            singular: "Permiso denegado"
          },
          "de-DE": {
            singular: "Berechtigung verweigert"
          },
          "fr-FR": {
            singular: "Autorisation refusée"
          },
          "ja-JP": {
            singular: "拒否されました"
          },
          "ko-KR": {
            singular: "승인 거부"
          },
          "pt-BR": {
            singular: "Permissão Negada"
          },
          "zh-CN": {
            singular: "权限被拒绝"
          }
        }
      }),
      Errors: {
        MembershipInfoLoadError: (0, _v27.translate)({
          singular: "Sorry, we're having trouble loading your information.",
          dictionary: {
            es: {
              singular: "Lo sentimos, tenemos problemas para cargar tu información."
            },
            "de-DE": {
              singular: "Leider ist beim Laden deiner Informationen ein Problem aufgetreten."
            },
            "fr-FR": {
              singular: "Désolé, nous rencontrons des difficultés pour charger vos informations."
            },
            "ja-JP": {
              singular: "申し訳ありません、情報の読み込み中に問題が発生しました。"
            },
            "ko-KR": {
              singular: "죄송합니다. 정보를 불러오는 데 문제가 발생했습니다."
            },
            "pt-BR": {
              singular: "Estamos tendo problemas para carregar suas informações."
            },
            "zh-CN": {
              singular: "很抱歉，我们在加载您的信息时遇到问题。"
            }
          }
        }),
        RequestError: (0, _v27.translate)({
          singular: "There was an error completing your request. Please try again.",
          dictionary: {
            es: {
              singular: "Se ha producido un error al completar tu solicitud. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Deine Anfrage konnte nicht abgeschlossen werden. Bitte versuche es erneut."
            },
            "fr-FR": {
              singular: "Une erreur s'est produite lors du traitement de votre requête. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "リクエストのご対応中にエラーが発生しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "요청을 완료하는 중 오류가 발생했습니다. 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Houve um erro ao concluir sua solicitação. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "完成您的请求时出现错误。请重试。"
            }
          }
        }),
        UnauthorizedError: "Action not authorized"
      },
      EmptySeats: (0, _v27.translate)({
        singular: "It’s lonely in here. Use the invite button to add your team.",
        dictionary: {
          es: {
            singular: "Nos sentimos muy solos aquí. Usa el botón de invitación para agregar a tu equipo."
          },
          "de-DE": {
            singular: "Noch ist niemand hier. Klicke auf den „Einladen“-Button, um dein Team hinzuzufügen."
          },
          "fr-FR": {
            singular: "Il y a quelqu'un ? Utilisez le bouton Inviter pour ajouter les membres de votre équipe."
          },
          "ja-JP": {
            singular: "メンバーがどなたも登録されていません。招待ボタンを使用してチームに追加しましょう。"
          },
          "ko-KR": {
            singular: "팀원이 없습니다. 초대 버튼을 사용하여 팀원을 초대하세요."
          },
          "pt-BR": {
            singular: "Não tem ninguém aqui ainda. Use o botão de convidar para adicionar sua equipe."
          },
          "zh-CN": {
            singular: "这里荒无人烟。使用邀请按钮组建团队。"
          }
        }
      }),
      RemoveFromTeam: (0, _v27.translate)({
        singular: "Remove from team",
        dictionary: {
          es: {
            singular: "Quitar del equipo"
          },
          "de-DE": {
            singular: "Aus dem Team entfernen"
          },
          "fr-FR": {
            singular: "Supprimer de l'équipe"
          },
          "ja-JP": {
            singular: "チームから削除"
          },
          "ko-KR": {
            singular: "팀에서 제거"
          },
          "pt-BR": {
            singular: "Remover da equipe"
          },
          "zh-CN": {
            singular: "从团队中移除"
          }
        }
      }),
      NoResults: _v0 => (0, _v27.translate)({
        singular: "No results for {LINEBREAK}“{SEARCHQUERY}”",
        replacements: {
          SEARCHQUERY: _v0,
          LINEBREAK: _v31
        },
        dictionary: {
          es: {
            singular: 'No se encontraron resultados para {LINEBREAK}"{SEARCHQUERY}"'
          },
          "de-DE": {
            singular: "Keine Ergebnisse für {LINEBREAK}„{SEARCHQUERY}“"
          },
          "fr-FR": {
            singular: "Aucun résultat pour {LINEBREAK}« {SEARCHQUERY} »"
          },
          "ja-JP": {
            singular: "「{SEARCHQUERY}」{LINEBREAK}の検索結果がありません"
          },
          "ko-KR": {
            singular: '{LINEBREAK}"{SEARCHQUERY}"에 대한 검색 결과 없음'
          },
          "pt-BR": {
            singular: 'Nenhum resultado para {LINEBREAK}"{SEARCHQUERY}"'
          },
          "zh-CN": {
            singular: "没有{LINEBREAK}“{SEARCHQUERY}”的结果"
          }
        }
      }),
      TeamMemberEmail: _v0 => (0, _v27.translate)({
        singular: "{EMAIL} will lose access to the Microsoft Teams integration to their Vimeo account.",
        replacements: {
          EMAIL: _v0
        },
        dictionary: {
          es: {
            singular: "{EMAIL} perderá el acceso a la integración de Microsoft Teams en su cuenta de Vimeo."
          },
          "de-DE": {
            singular: "{EMAIL} werden den Zugriff auf die Microsoft Teams-Integration in ihrem Vimeo-Konto verlieren."
          },
          "fr-FR": {
            singular: "{EMAIL} perdra l'accès à l'intégration de Microsoft Teams à son compte Vimeo."
          },
          "ja-JP": {
            singular: "{EMAIL}は、VimeoアカウントへのMicrosoft Teams連携にアクセスできなくなります。"
          },
          "ko-KR": {
            singular: "{EMAIL} 님은 Microsoft Teams와의 Vimeo 계정 통합에 대한 접근 권한을 잃게 됩니다."
          },
          "pt-BR": {
            singular: "{EMAIL} perderá o acesso à integração do Microsoft Teams com sua conta do Vimeo."
          },
          "zh-CN": {
            singular: "{EMAIL} 将失去对其 Vimeo 账户的 Microsoft Teams 集成的访问权限。"
          }
        }
      })
    },
    _v31 = () => (0, _v1.jsx)("br", {}, "line-brk");
  _v0.s(["T", 0, _v30], 0);
  let _v32 = ({
    isTeamMemberLoggedInUser: _v0,
    teamMember: _v1,
    onDelete: _v2,
    resendInvite: _v3,
    allowAccess: _v4
  }) => {
    let [_v5, _v6] = (0, _v2.useState)(!1),
      [_v7, _v8] = (0, _v2.useState)(!1),
      _v9 = (0, _v2.useRef)(null);
    (0, _v17.useOutsideClick)({
      ref: _v9,
      handler: () => _v6(!1)
    });
    let _v10 = (_v0, _v1) => (0, _v1.jsx)(_v16.MenuItem, {
      height: (0, _v4.rem)(36),
      width: (0, _v4.rem)(190),
      onClick: _v0,
      children: (0, _v1.jsx)(_v7.Text, {
        variant: "body-xl",
        fontSize: "header-xs",
        children: _v1
      })
    });
    return (0, _v1.jsxs)(_v13.Menu, {
      placement: "bottom-end",
      size: "lg",
      isOpen: _v5,
      children: [(0, _v1.jsx)(_v14.MenuButton, {
        as: _v12.IconButton,
        icon: (0, _v1.jsx)(_v26.EllipsisV, {
          boxSize: "2xs"
        }),
        variant: "tertiary",
        onClick: () => _v6(_v0 => !_v0)
      }), (0, _v1.jsxs)(_v15.MenuList, {
        borderRadius: "md",
        p: "2",
        backgroundColor: "surface",
        ref: _v9,
        children: [(() => {
          switch (_v1.status) {
            case _v28.Removed:
              return _v0 ? null : _v10(_v4, _v30.SendInvite);
            case _v28.Invited:
              return _v0 ? null : _v10(_v3, _v30.ResendInvite);
            case _v28.NotInvited:
              return _v10(_v3, _v30.Invite);
            default:
              return null;
          }
        })(), _v1.status !== _v28.HasAccess && _v1.status !== _v28.NotInvited && _v0 && (0, _v1.jsx)(_v16.MenuItem, {
          height: (0, _v4.rem)(36),
          width: (0, _v4.rem)(190),
          as: "a",
          href: _v1.inviteUrl ?? "",
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            fontSize: "header-xs",
            children: _v30.ConnectAccount
          })
        }), _v1.status === _v28.HasAccess && _v0 && (0, _v1.jsx)(_v16.MenuItem, {
          height: (0, _v4.rem)(36),
          width: (0, _v4.rem)(190),
          as: "a",
          href: "/settings/videos/upload_defaults",
          mb: "2",
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            fontSize: "header-xs",
            children: _v30.ManageUploadDefaults
          })
        }), _v1.status === _v28.HasAccess && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v16.MenuItem, {
            onClick: () => _v8(!0),
            height: (0, _v4.rem)(36),
            width: (0, _v4.rem)(190),
            color: "status-destructive-primary",
            children: (0, _v1.jsx)(_v7.Text, {
              variant: "body-xl",
              color: "status-destructive-primary",
              fontSize: "header-xs",
              children: _v0 ? _v30.DisconnectAccount : _v30.RemoveAccess
            })
          }), (0, _v1.jsxs)(_v18.Modal, {
            size: "lg",
            isOpen: _v7,
            onClose: () => _v8(!1),
            closeOnOverlayClick: !1,
            children: [(0, _v1.jsx)(_v19.ModalOverlay, {}), (0, _v1.jsxs)(_v20.ModalContent, {
              borderRadius: "md",
              maxW: (0, _v4.rem)(480),
              children: [(0, _v1.jsx)(_v21.ModalHeader, {
                children: _v0 ? _v30.DisconnectAccount : _v30.RemoveAccess
              }), (0, _v1.jsx)(_v22.ModalBody, {
                children: (0, _v1.jsx)(_v25.Paragraph, {
                  size: "md",
                  children: _v0 ? (0, _v27.translate)({
                    singular: "Your Vimeo account will lose access to the Microsoft Teams integration.",
                    dictionary: {
                      es: {
                        singular: "Su cuenta de Vimeo perderá el acceso a la integración de Microsoft Teams."
                      },
                      "de-DE": {
                        singular: "Ihr Vimeo-Konto wird den Zugriff auf die Microsoft Teams-Integration verlieren."
                      },
                      "fr-FR": {
                        singular: "Votre compte Vimeo perdra l'accès à l'intégration Microsoft Teams."
                      },
                      "ja-JP": {
                        singular: "お客様のVimeoアカウントは、Microsoft Teams連携にアクセスできなくなります。"
                      },
                      "ko-KR": {
                        singular: "회원님의 Vimeo 계정은 Microsoft Teams 통합 기능에 대한 접근 권한을 잃게 됩니다."
                      },
                      "pt-BR": {
                        singular: "Sua conta do Vimeo perderá o acesso à integração com o Microsoft Teams."
                      },
                      "zh-CN": {
                        singular: "您的 Vimeo 帐户将失去对 Microsoft Teams 集成的访问权限。"
                      }
                    }
                  }) : (0, _v27.translate)({
                    singular: "Your team member will lose access to the Microsoft Teams integration.",
                    dictionary: {
                      es: {
                        singular: "Su miembro del equipo perderá el acceso a la integración de Microsoft Teams."
                      },
                      "de-DE": {
                        singular: "Ihr Teammitglied wird den Zugriff auf die Microsoft Teams-Integration verlieren."
                      },
                      "fr-FR": {
                        singular: "Votre collaborateur perdra l'accès à l'intégration Microsoft Teams."
                      },
                      "ja-JP": {
                        singular: "チームメンバーはMicrosoft Teams連携にアクセスできなくなります。"
                      },
                      "ko-KR": {
                        singular: "팀원은 Microsoft Teams 통합에 대한 접근 권한을 잃게 됩니다."
                      },
                      "pt-BR": {
                        singular: "O integrante da sua equipe perderá o acesso à integração do Microsoft Teams."
                      },
                      "zh-CN": {
                        singular: "您的团队成员将失去对 Microsoft Teams 集成的访问权限。"
                      }
                    }
                  })
                })
              }), (0, _v1.jsxs)(_v23.ModalFooter, {
                children: [(0, _v1.jsx)(_v24.Button, {
                  variant: "secondary",
                  onClick: () => _v8(!1),
                  children: _v30.Cancel
                }), (0, _v1.jsx)(_v24.Button, {
                  variant: "destructive",
                  onClick: () => {
                    _v8(!1), _v2();
                  },
                  children: _v0 ? _v30.Disconnect : _v30.RemoveAccess
                })]
              })]
            })]
          })]
        })]
      })]
    });
  };
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = (0, _v2.forwardRef)(({
      item: _v0,
      children: _v1
    }, _v2) => {
      let {
        avatarLink: _v3,
        primaryDisplay: _v4,
        secondaryDisplay: _v5,
        isPending: _v6,
        permission: _v7
      } = _v0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v34.Divider, {
          margin: "0",
          transform: `translateY(-${(0, _v4.rem)(2)})`,
          height: (0, _v4.rem)(1),
          borderColor: "stroke"
        }), (0, _v1.jsxs)(_v9.Flex, {
          p: `${(0, _v4.rem)(12)} ${(0, _v4.rem)(16)}`,
          justifyContent: "space-between",
          "data-id": "teamListItem",
          ref: _v2,
          children: [(0, _v1.jsxs)(_v9.Flex, {
            my: "auto",
            justifyContent: "center",
            pl: (0, _v4.rem)(5),
            opacity: _v6 ? "0.5" : void 0,
            children: [(0, _v1.jsx)(_v33.Avatar, {
              size: "md",
              src: _v3,
              alt: _v3,
              nameProps: {
                name: _v4
              }
            }), (0, _v1.jsxs)(_v9.Flex, {
              paddingLeft: (0, _v4.rem)(16),
              flexDirection: "column",
              children: [(0, _v1.jsxs)(_v9.Flex, {
                gap: "2",
                my: "auto",
                children: [(0, _v1.jsx)(_v7.Text, {
                  variant: "body-xl",
                  "data-id": "teamMemberNameOrEmail",
                  mb: "0",
                  fontWeight: "medium",
                  fontSize: "body-lg",
                  children: _v4
                }), (_v7 === _v36.TeamRole.Owner || _v7 === _v36.TeamRole.Admin) && (0, _v1.jsx)(_v35.Tag, {
                  size: "sm",
                  fontWeight: "500",
                  children: (0, _v1.jsx)(_v35.TagLabel, {
                    children: _v7 === _v36.TeamRole.Owner ? _v30.PermissionLevels.Owner : _v30.PermissionLevels.Admin
                  })
                })]
              }), _v5 && (0, _v1.jsx)(_v25.Paragraph, {
                "data-id": "teamMemberEmail",
                size: "md",
                mb: "0",
                color: "text-secondary",
                children: _v5
              })]
            })]
          }), _v1]
        })]
      });
    }),
    _v38 = ({
      teamMember: _v0
    }) => {
      let {
          status: _v1
        } = _v0,
        _v2 = {
          [_v28.Invited]: _v30.Invited,
          [_v28.NotInvited]: _v30.NotInvited,
          [_v28.Removed]: _v30.Removed,
          [_v28.HasAccess]: _v30.HasAccessString,
          [_v28.All]: _v30.All
        }[_v1];
      return (0, _v1.jsx)(_v9.Flex, {
        gap: "2",
        children: (0, _v1.jsx)(_v9.Flex, {
          my: "auto",
          height: "fit-content",
          children: _v1 === _v28.HasAccess ? (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
            fontSize: "body-md",
            fontWeight: "medium",
            color: "text-primary",
            px: "2",
            children: _v2
          }) : (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            fontSize: "body-md",
            fontWeight: "regular",
            display: "block",
            color: "text-secondary",
            px: "2",
            children: _v2
          })
        })
      });
    };
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = _v0 => (0, _v1.jsx)(_v44.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M11.29 11.46a1.002 1.002 0 0 0 1.42 0l3-3A1.018 1.018 0 1 0 14.29 7L12 9.34 9.71 7a1.018 1.018 0 0 0-1.42 1.46l3 3Zm3 1.08L12 14.84l-2.29-2.3A1.018 1.018 0 1 0 8.29 14l3 3a1.002 1.002 0 0 0 1.42 0l3-3a1.004 1.004 0 1 0-1.42-1.42v-.04Z",
      fill: "currentColor"
    })
  });
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = [{
      label: _v30.All,
      value: _v28.All,
      applied: !1
    }, {
      label: _v30.Invited,
      value: _v28.Invited,
      applied: !1
    }, {
      label: _v30.HasAccessString,
      value: _v28.HasAccess,
      applied: !1
    }, {
      label: _v30.Removed,
      value: _v28.Removed,
      applied: !1
    }, {
      label: _v30.NotInvited,
      value: _v28.NotInvited,
      applied: !1
    }],
    _v49 = () => Error("Not implemented"),
    _v50 = () => ({
      teamDetails: null,
      teamMembers: [],
      isTeamDetailsLoading: !1,
      totalTeamMembers: 0,
      currentPage: 1,
      previousSearchQuery: "",
      searchQuery: "",
      sort: {
        type: void 0,
        direction: void 0
      },
      isTeamMembersLoading: !1,
      hasFetchedTeamDetails: !1,
      hasFetchedTeamMembers: !1,
      showError: !1,
      enablePagination: !1,
      notification: null,
      statusFilter: _v28.All,
      paging: {
        first: null,
        last: null,
        next: null,
        previous: null
      },
      perPage: 8,
      fetchTeamDetails: _v49,
      fetchTeamMembers: _v49,
      updateSearchQuery: _v49,
      updateSort: _v49,
      updateDirection: _v49,
      updateStatusFilter: _v49,
      updateCurrentPage: _v49,
      removeTeamMemberAccess: _v49,
      setShowError: _v49,
      showToastMessage: _v49,
      resendTeamMemberInvite: _v49,
      allowAccess: _v49,
      disconnectTeam: _v49
    }),
    _v51 = (0, _v2.createContext)(_v50());
  _v0.s(["ManageTeamContext", 0, _v51, "STATUSES_FILTER_DEFAULT", 0, _v48, "initalContext", 0, _v50], 0);
  let _v52 = () => (0, _v1.jsxs)(_v9.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      paddingY: (0, _v4.rem)(8),
      paddingX: (0, _v4.rem)(4),
      fontWeight: "bold",
      "data-id": "teamListHeader",
      children: [(0, _v1.jsx)(_v53, {
        label: _v30.Name,
        sortField: "name"
      }), (0, _v1.jsx)(_v54, {})]
    }),
    _v53 = ({
      label: _v0,
      sortField: _v1
    }) => {
      let {
        sort: _v2,
        updateSort: _v3,
        updateDirection: _v4
      } = (0, _v2.useContext)(_v51);
      return (0, _v1.jsx)(_v24.Button, {
        "data-testid": "media-library-direction-filter-button",
        variant: "tertiary",
        onClick: () => {
          let _v0 = "asc" === _v2.direction ? "desc" : "asc";
          _v3(_v1), _v4(_v0);
        },
        rightIcon: _v2.type !== _v1 ? (0, _v1.jsx)(_v45, {}) : "asc" === _v2.direction ? (0, _v1.jsx)(_v47.ChevronUpSmall, {}) : (0, _v1.jsx)(_v46.ChevronDownSmall, {}),
        fontWeight: "medium",
        children: _v0
      });
    },
    _v54 = () => {
      let _v0 = (0, _v2.useRef)(null),
        [_v1, _v2] = (0, _v2.useState)(!1);
      (0, _v17.useOutsideClick)({
        ref: _v0,
        handler: () => {
          _v1 && _v2(!1);
        }
      });
      let {
          statusFilter: _v3,
          updateStatusFilter: _v4
        } = (0, _v2.useContext)(_v51),
        _v5 = _v48.reduce((_v0, _v1) => _v1.value === _v3 ? _v1.label : _v0, "");
      return (0, _v1.jsxs)(_v39.Popover, {
        placement: "bottom-end",
        size: "lg",
        isOpen: _v1,
        children: [(0, _v1.jsx)(_v41.PopoverTrigger, {
          children: (0, _v1.jsx)(_v24.Button, {
            variant: "tertiary",
            rightIcon: _v1 ? (0, _v1.jsx)(_v47.ChevronUpSmall, {}) : (0, _v1.jsx)(_v46.ChevronDownSmall, {}),
            borderRadius: "md",
            onClick: () => _v2(!_v1),
            fontWeight: "medium",
            children: _v5
          })
        }), (0, _v1.jsx)(_v40.PopoverContent, {
          py: "1",
          px: "2",
          borderRadius: "md",
          children: (0, _v1.jsx)(_v3.Box, {
            width: (0, _v4.rem)(172),
            children: (0, _v1.jsx)(_v42.VStack, {
              gap: (0, _v4.rem)(0),
              children: _v48.map(_v0 => {
                let _v1 = _v3 === _v0.value;
                return (0, _v1.jsx)(_v24.Button, {
                  variant: _v1 ? "secondary" : "tertiary",
                  rightIcon: _v1 ? (0, _v1.jsx)(_v43.CheckSmallFilled, {}) : void 0,
                  borderRadius: "md",
                  onClick: () => {
                    _v4(_v0.value), _v2(!_v1);
                  },
                  fontWeight: "medium",
                  width: "100%",
                  justifyContent: "space-between",
                  children: _v0.label
                }, _v0.value);
              })
            })
          })
        })]
      });
    },
    _v55 = ({
      children: _v0
    }) => (0, _v1.jsxs)(_v9.Flex, {
      padding: `${(0, _v4.rem)(15)} ${(0, _v4.rem)(20)}`,
      justifyContent: "space-between",
      children: [(0, _v1.jsxs)(_v9.Flex, {
        justifyContent: "center",
        pl: "1",
        children: [(0, _v1.jsx)(_v6.Skeleton, {
          height: (0, _v4.rem)(40),
          width: (0, _v4.rem)(40),
          position: "relative",
          borderRadius: "100%"
        }), (0, _v1.jsxs)(_v9.Flex, {
          pl: "4",
          justifyContent: "center",
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v6.Skeleton, {
            height: (0, _v4.rem)(19),
            width: (0, _v4.rem)(41),
            mb: "1"
          }), (0, _v1.jsx)(_v6.Skeleton, {
            height: (0, _v4.rem)(16),
            width: (0, _v4.rem)(174)
          })]
        })]
      }), _v0]
    }),
    _v56 = () => (0, _v1.jsx)("div", {
      children: [...Array(8)].map((_v0, _v1) => (0, _v1.jsx)(_v55, {
        children: (0, _v1.jsx)(_v6.Skeleton, {
          display: "flex",
          width: (0, _v4.rem)(150),
          height: (0, _v4.rem)(40)
        })
      }, _v1))
    });
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = ({
      copyInviteLink: _v0,
      hideDisconnectTeam: _v1
    }) => {
      let _v2 = (0, _v2.useContext)(_v11.ViewerContext),
        {
          currentPage: _v3,
          searchQuery: _v4,
          hasFetchedTeamMembers: _v5,
          totalTeamMembers: _v6,
          updateSearchQuery: _v7,
          fetchTeamMembers: _v8,
          disconnectTeam: _v9
        } = (0, _v2.useContext)(_v51),
        [_v10, _v11] = (0, _v2.useState)(!1);
      return (0, _v2.useEffect)(() => {
        1 !== _v4.length && (_v62.cancel(), _v62(_v4, _v8));
      }, [_v4, _v3]), (0, _v1.jsxs)(_v58.HStack, {
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `${(0, _v4.rem)(1)} solid`,
        borderColor: "stroke",
        p: `${(0, _v4.rem)(26)} ${(0, _v4.rem)(16)}`,
        children: [(0, _v1.jsx)(_v3.Box, {
          p: (0, _v4.rem)(0),
          maxWidth: (0, _v4.rem)(350),
          flex: "1",
          sx: {
            "svg path": {
              fill: "text-primary"
            }
          },
          children: (0, _v1.jsx)(_v59.Search, {
            variant: "minimal",
            p: "4",
            borderRadius: "md",
            backgroundColor: "input-fill",
            fontWeight: "400",
            "data-id": _v30.placeholder.replace(/\s+/g, ""),
            value: _v4,
            placeholder: _v30.placeholder,
            onChange: _v0 => {
              _v0.preventDefault(), _v7(_v0.currentTarget.value);
            },
            disabled: !1,
            _placeholder: {
              color: "text-secondary",
              opacity: "1",
              marginLeft: (0, _v4.rem)(20)
            }
          })
        }), (0, _v1.jsxs)(_v58.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v24.Button, {
            isDisabled: !_v5 || !_v6,
            leftIcon: (0, _v1.jsx)(_v60.Link, {
              boxSize: "2xs"
            }),
            onClick: _v0,
            variant: "secondary",
            fontWeight: "500",
            children: _v30.CopyInviteLink
          }), !_v1 && (0, _v1.jsx)(_v24.Button, {
            isDisabled: !_v5,
            variant: "destructive",
            onClick: () => _v11(!0),
            fontWeight: "500",
            children: _v30.DisconnectTeamNoQuestion
          })]
        }), (0, _v1.jsxs)(_v18.Modal, {
          size: "lg",
          isOpen: _v10,
          onClose: () => _v11(!1),
          closeOnOverlayClick: !1,
          children: [(0, _v1.jsx)(_v19.ModalOverlay, {}), (0, _v1.jsxs)(_v20.ModalContent, {
            borderRadius: "md",
            maxW: (0, _v4.rem)(480),
            children: [(0, _v1.jsx)(_v21.ModalHeader, {
              children: _v30.DisconnectTeam
            }), (0, _v1.jsx)(_v22.ModalBody, {
              children: (0, _v1.jsx)(_v25.Paragraph, {
                size: "md",
                children: _v30.AllMembersLoseAccess
              })
            }), (0, _v1.jsxs)(_v23.ModalFooter, {
              children: [(0, _v1.jsx)(_v24.Button, {
                variant: "secondary",
                onClick: () => _v11(!1),
                children: _v30.Cancel
              }), (0, _v1.jsx)(_v24.Button, {
                variant: "destructive",
                onClick: () => {
                  _v11(!1), _v9(_v2);
                },
                children: _v30.DisconnectTeamNoQuestion
              })]
            })]
          })]
        })]
      });
    },
    _v62 = (0, _v57.default)((_v0, _v1, _v2) => {
      !(_v0.length < 1) && (_v1(), _v2 && _v2());
    }, 500);
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = _v0 => ({
      field_value: _v0,
      integration_name: "Microsoft Teams",
      field_name: "user_id"
    }),
    _v71 = (0, _v64.buildViewBpContext)({
      feature: null,
      view_type: "impression"
    }),
    _v72 = (0, _v65.buildActionBpContext)({
      feature: null,
      action_type: "click"
    }),
    _v73 = (_v0, _v1) => {
      let _v2 = (0, _v66.buildThirdPartyIntegrationBpContext)({
          is_partner: !0,
          integration_name: "Microsoft Teams",
          is_integration: !0,
          integration_id: 58,
          app_id: 0,
          integration_type: "oauth",
          partner_bucket: "Autoarchive"
        }),
        _v3 = (0, _v68.buildProductAnalyticsBpContext)({
          product: "integrations",
          copy: _v1,
          element: "button",
          location: "body",
          feature: "integrations_settings",
          device_type: "desktop"
        }),
        _v4 = (0, _v69.buildTeamBpContext)({
          is_team_member: !0,
          team_owner_id: _v0
        }),
        _v5 = (0, _v67.buildWebBpContext)({
          page_name: "integration_settings_page",
          location: null,
          path: window.location.pathname,
          referrer_page_name: "integration_settings_page"
        });
      return {
        ..._v72,
        ..._v71,
        ..._v3,
        ..._v5,
        ..._v2,
        ..._v4
      };
    },
    _v74 = (_v0, _v1) => {
      let _v2 = _v73(_v1, "resend invite"),
        _v3 = _v70(_v0);
      (0, _v63.sendBpEventWithContexts)("vimeo.integration_resend_onboarding_invite", _v2, 2, {
        ..._v3
      });
    },
    _v75 = () => (0, _v1.jsx)(_v6.Skeleton, {
      display: "flex",
      width: (0, _v4.rem)(150),
      height: (0, _v4.rem)(40)
    });
  _v0.s(["ManageMsTeams", 0, ({
    hideDisconnectTeam: _v0
  }) => {
    let _v1 = (0, _v2.useContext)(_v11.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = _v1?.user?.id,
      {
        teamDetails: _v4,
        teamMembers: _v5,
        totalTeamMembers: _v6,
        currentPage: _v7,
        isTeamMembersLoading: _v8,
        hasFetchedTeamMembers: _v9,
        searchQuery: _v10,
        enablePagination: _v11,
        notification: _v12,
        isTeamDetailsLoading: _v13,
        hasFetchedTeamDetails: _v14,
        fetchTeamMembers: _v15,
        updateCurrentPage: _v16,
        setShowError: _v17,
        showToastMessage: _v18,
        removeTeamMemberAccess: _v19,
        allowAccess: _v20,
        resendTeamMemberInvite: _v21
      } = (0, _v2.useContext)(_v51),
      _v22 = (0, _v8.useToast)();
    return (0, _v2.useEffect)(() => {
      _v12 && !_v22.isActive(_v12) && _v22({
        id: _v12,
        title: _v12,
        status: "neutral"
      });
    }, [_v12, _v22]), (0, _v2.useEffect)(() => {
      _v1 && !_v9 && !_v13 && _v14 && _v15(_v1);
    }, [_v1?.user, _v7, _v9, _v13]), (0, _v1.jsxs)(_v9.Flex, {
      flexDirection: "column",
      gap: "5",
      children: [(0, _v1.jsxs)(_v3.Box, {
        borderRadius: "md",
        border: `${(0, _v4.rem)(1)} solid`,
        borderColor: "stroke",
        bgColor: "fill-surface",
        children: [(0, _v1.jsx)(_v61, {
          copyInviteLink: () => (() => {
            if (_v6) try {
              var _v0, _v1;
              let _v0,
                _v1,
                _v2 = _v4?.userInviteUrl ?? "";
              (0, _v10.default)(_v2), _v0 = String(_v3), _v1 = Number(_v2), _v0 = _v73(_v1, "copy invite link"), _v1 = _v70(_v0), (0, _v63.sendBpEventWithContexts)("vimeo.integration_copy_onboarding_link", _v0, 2, {
                ..._v1
              }), _v18(_v30.Copied);
            } catch (_v0) {
              _v17(!0);
            }
          })(),
          hideDisconnectTeam: _v0
        }), (0, _v1.jsx)(_v52, {}), _v10.length > 0 && 0 === _v6 && (0, _v1.jsx)(_v9.Flex, {
          alignItems: "center",
          justifyContent: "center",
          padding: `${(0, _v4.rem)(20)} ${(0, _v4.rem)(200)}`,
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            textAlign: "center",
            fontWeight: 400,
            fontSize: (0, _v4.rem)(26),
            color: "slate.500",
            wordBreak: "break-word",
            children: _v30.NoResults(_v10)
          })
        }), !(_v11 && _v8) && _v5.map(_v0 => {
          let _v1 = ((_v0, _v1) => {
              let {
                  profile: _v2,
                  userId: _v3,
                  name: _v4,
                  email: _v5
                } = _v0,
                _v6 = Number(_v1?.user?.id) === Number(_v3);
              return {
                avatarLink: _v2 || "https://i.vimeocdn.com/portrait/defaults-blue_72x72.png",
                primaryDisplay: `${_v4}${_v6 ? " (" + _v30.Self + ")" : ""}`,
                secondaryDisplay: _v5,
                isPending: _v0.status !== _v28.HasAccess,
                permission: _v0.permission
              };
            })(_v0, _v1),
            {
              userId: _v2
            } = _v0,
            _v3 = Number(_v1?.user?.id) === Number(_v2);
          return (0, _v1.jsx)(_v37, {
            item: _v1,
            children: (0, _v1.jsx)(_v9.Flex, {
              alignItems: "center",
              children: _v0.isLoading ? (0, _v1.jsx)(_v75, {}) : (0, _v1.jsxs)(_v9.Flex, {
                gap: "2",
                children: [(0, _v1.jsx)(_v38, {
                  teamMember: _v0
                }), (0, _v1.jsx)(_v32, {
                  teamMember: _v0,
                  onDelete: () => {
                    _v19(_v1, _v0);
                  },
                  isTeamMemberLoggedInUser: _v3,
                  resendInvite: () => (_v0 => {
                    if (_v0.status !== _v28.HasAccess && _v6) try {
                      _v21(_v1, _v0);
                    } catch (_v0) {
                      _v17(!0);
                    }
                  })(_v0),
                  allowAccess: () => (_v0 => {
                    if (_v6) try {
                      _v20(_v1, _v0);
                    } catch (_v0) {
                      _v17(!0);
                    }
                  })(_v0)
                })]
              })
            })
          }, _v0.userId);
        }), _v8 && (0, _v1.jsx)(_v56, {})]
      }), _v6 > 8 && (0, _v1.jsx)(_v3.Box, {
        py: "6",
        mx: "auto",
        children: (0, _v1.jsx)(_v5.Pagination, {
          size: "xs",
          page: _v7,
          pageSize: 8,
          count: _v6,
          onPageChange: ({
            page: _v0
          }) => {
            _v0 <= 0 || _v6 <= (_v0 - 1) * 8 || _v16(_v0);
          }
        })
      })]
    });
  }], 0);
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  async function _v80({
    baseUrl: _v0,
    where: {
      userId: _v1,
      teamUserId: _v2
    },
    ..._v3
  }) {
    return (0, _v78.measureLatency)("putUserAutoArchiveMsTeamsTeamUser", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/auto_archive/ms_teams/team_users/${_v2}/`, {
        ..._v3,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v79.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v79.deepCamelCase)(_v1);
    });
  }
  async function _v81({
    baseUrl: _v0,
    where: {
      userId: _v1,
      teamUserId: _v2
    },
    ..._v3
  }) {
    return (0, _v78.measureLatency)("deleteUserAutoArchiveMsTeamsTeamUser", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/auto_archive/ms_teams/team_users/${_v2}/`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v79.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v79.deepCamelCase)(_v1);
    });
  }
  let _v82 = {
      Remove: "remove",
      Allow: "allow",
      Resend: "resend",
      Disconnect: "disconnect",
      FetchTeamMembers: "fetch_team_members",
      FetchTeamDetails: "fetch_team_details"
    },
    _v83 = {
      UpdateTeamMemberCancel: "UpdateTeamMemberCancel",
      NotificationForOwnerAdmin: "NotificationForOwnerAdmin",
      UpdateSort: "UpdateSort",
      UpdateDirection: "UpdateDirection",
      UpdateStatusesFilter: "UpdateStatusesFilter",
      UpdateShowError: "UpdateShowError",
      UpdateCurrentPage: "UpdateCurrentPage",
      UpdateSearchQuery: "UpdateSearchQuery",
      FetchTeamMembersComplete: "FetchTeamMembersComplete",
      FetchTeamMembersInit: "FetchTeamMembersInit",
      RemoveTeamMemberAccessCompleteHandler: "RemoveTeamMemberAccessCompleteHandler",
      RemoveTeamMemberAccessInit: "RemoveTeamMemberAccessInit",
      TeamDisconnectComplete: "TeamDisconnectComplete",
      SetErrorType: "SetErrorType",
      FetchTeamDetailsComplete: "FetchTeamDetailsComplete",
      FetchTeamDetailsInit: "FetchTeamDetailsInit",
      FetchTeamDetailsFailure: "FetchTeamDetailsFailure"
    };
  _v0.s(["ActionErrorType", 0, _v82, "ManageTeamActionTypes", 0, _v83], 0);
  let _v84 = {
      NotificationForOwnerAdmin: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload!");
        let _v2 = _v1.payload.notification;
        return {
          ..._v0,
          notification: _v2
        };
      },
      RemoveTeamMemberAccessInit: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload provided");
        let _v2 = _v0.teamMembers.map(_v0 => _v0.userId === _v1.payload?.teamMember?.userId ? {
          ..._v0,
          isLoading: !0
        } : _v0);
        return {
          ..._v0,
          teamMembers: _v2,
          showError: !1
        };
      },
      RemoveTeamMemberAccessCompleteHandler: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.teamMember) throw Error("No payload provided");
        let _v2 = _v1.payload.teamMember,
          _v3 = _v0.teamMembers.map(_v0 => _v0.userId === _v2.userId ? {
            ..._v2,
            isLoading: !1
          } : _v0);
        return {
          ..._v0,
          teamMembers: _v3
        };
      },
      FetchTeamMembersInit: _v0 => ({
        ..._v0,
        isTeamMembersLoading: !0,
        hasFetchedTeamMembers: !1,
        showError: !1
      }),
      FetchTeamMembersComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.teamMembers) throw Error("No payload provided");
        let {
            data: _v2,
            total: _v3,
            page: _v4,
            paging: _v5
          } = _v1.payload.teamMembers,
          _v6 = _v2.map(_v0 => ({
            ..._v0,
            isLoading: !1
          }));
        return {
          ..._v0,
          teamMembers: _v6,
          totalTeamMembers: _v3,
          isTeamMembersLoading: !1,
          hasFetchedTeamMembers: !0,
          enablePagination: !!_v5?.next,
          paging: _v5,
          currentPage: _v4 || 1
        };
      },
      UpdateSearchQuery: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload provided");
        let _v2 = _v1.payload?.searchQuery.length === 0 && _v0.searchQuery.length > 0;
        return {
          ..._v0,
          previousSearchQuery: _v0.searchQuery,
          searchQuery: _v1.payload?.searchQuery || "",
          hasFetchedTeamMembers: !_v2 && _v0.hasFetchedTeamMembers,
          currentPage: 1,
          sort: _v1.payload?.searchQuery?.length === 0 ? _v0.sort : {
            type: void 0,
            direction: void 0
          },
          statusFilter: _v1.payload?.searchQuery?.length === 0 ? _v0.statusFilter : _v28.All
        };
      },
      UpdateSort: (_v0, _v1) => ({
        ..._v0,
        sort: {
          ..._v0.sort,
          type: _v1.payload?.sort || "default"
        },
        hasFetchedTeamMembers: !1,
        previousSearchQuery: _v0.searchQuery,
        searchQuery: "",
        teamMembers: [],
        currentPage: 1
      }),
      UpdateDirection: (_v0, _v1) => ({
        ..._v0,
        sort: {
          ..._v0.sort,
          direction: _v1.payload?.direction || "asc"
        },
        hasFetchedTeamMembers: !1,
        teamMembers: [],
        previousSearchQuery: _v0.searchQuery,
        searchQuery: "",
        currentPage: 1
      }),
      UpdateCurrentPage: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload provided");
        return {
          ..._v0,
          currentPage: _v1.payload?.currentPage || 1,
          hasFetchedTeamMembers: !1
        };
      },
      UpdateShowError: (_v0, _v1) => ({
        ..._v0,
        showError: _v1.payload?.showError || !1
      }),
      UpdateStatusesFilter: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload provided");
        return {
          ..._v0,
          previousSearchQuery: _v0.searchQuery,
          searchQuery: "",
          statusFilter: _v1.payload?.statusFilter,
          hasFetchedTeamMembers: !1,
          teamMembers: [],
          currentPage: 1
        };
      },
      UpdateTeamMemberCancel: (_v0, _v1) => {
        if (!_v1.payload) throw Error("No payload provided");
        let _v2 = _v0.teamMembers.map(_v0 => (_v0.userId === _v1.payload?.teamMember.userId && (_v0.isLoading = !1), _v0));
        return {
          ..._v0,
          teamMembers: _v2,
          showError: !0
        };
      },
      TeamDisconnectComplete: _v0 => ({
        ..._v0,
        teamMembers: [],
        hasFetchedTeamMembers: !1
      }),
      SetErrorType: (_v0, _v1) => ({
        ..._v0,
        errorType: _v1.payload?.errorType,
        actionError: _v1.payload?.actionErrorType
      }),
      FetchTeamDetailsComplete: (_v0, _v1) => {
        if (!_v1.payload || !_v1.payload?.teamDetails) throw Error("No payload provided");
        let _v2 = _v1.payload.teamDetails;
        return {
          ..._v0,
          isTeamDetailsLoading: !1,
          teamDetails: _v2,
          hasFetchedTeamDetails: !0
        };
      },
      FetchTeamDetailsInit: _v0 => ({
        ..._v0,
        isTeamDetailsLoading: !0,
        hasFetchedTeamDetails: !1,
        showError: !1
      }),
      FetchTeamDetailsFailure: (_v0, _v1) => ({
        ..._v0,
        isTeamDetailsLoading: !1,
        hasFetchedTeamDetails: !1
      })
    },
    _v85 = (_v0, _v1) => {
      let _v2 = _v84[_v1.type];
      return _v2 ? _v2(_v0, _v1) : _v0;
    };
  _v0.s(["ManageTeamProvider", 0, ({
    children: _v0
  }) => {
    let _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10,
      _v11 = (0, _v2.useContext)(_v11.ViewerContext),
      [_v12, _v13] = (0, _v2.useReducer)(_v85, _v50()),
      _v14 = (_v1 = (0, _v2.useCallback)(_v0 => {
        _v13({
          type: _v83.NotificationForOwnerAdmin,
          payload: {
            notification: _v0
          }
        }), setTimeout(() => _v13({
          type: _v83.NotificationForOwnerAdmin,
          payload: {
            notification: null
          }
        }), 0);
      }, [_v13]), _v2 = (0, _v2.useCallback)(_v0 => {
        _v13({
          type: _v83.UpdateShowError,
          payload: {
            showError: _v0
          }
        });
      }, [_v13]), _v3 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        let _v3 = _v0?.status === 401 ? _v29.UNAUTHORIZED : _v0?.status === 404 ? _v29.NOT_FOUND : null;
        _v1(_v1), _v13({
          type: _v83.SetErrorType,
          payload: {
            errorType: _v3,
            actionErrorType: _v2
          }
        }), _v2(!0);
      }, [_v13, _v2, _v1]), _v4 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = _v0 || _v11;
        if (!_v1) throw Error("No viewer");
        let {
            apiUrl: _v2,
            jwt: _v3
          } = _v1,
          _v4 = _v1.teamUser?.ownerId ?? _v1.user?.id;
        try {
          _v13({
            type: _v83.FetchTeamDetailsInit,
            payload: !0
          });
          let _v0 = await (0, _v77.getUserAutoArchiveMsTeams)({
            baseUrl: `//${_v2}`,
            headers: {
              Authorization: `jwt ${_v3}`,
              "Content-Type": "application/json"
            },
            where: {
              userId: Number(_v4)
            },
            select: ["status", "teamOwnerId", "msTeamsEncryptedTeamId", "userInviteUrl"]
          });
          _v13({
            type: _v83.FetchTeamDetailsComplete,
            payload: {
              teamDetails: _v0
            }
          });
        } catch (_v0) {
          _v3(_v0, _v30.PleaseTryAgain, _v82.FetchTeamDetails), _v13({
            type: _v83.FetchTeamDetailsFailure,
            payload: {
              error: _v0
            }
          });
        }
      }, [_v13, _v3, _v11]), _v5 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = _v0 || _v11;
        if (!_v1) throw Error("No viewer");
        let {
            apiUrl: _v2,
            jwt: _v3
          } = _v1,
          _v4 = _v1.teamUser?.ownerId ?? _v1.user?.id,
          {
            currentPage: _v5,
            searchQuery: _v6,
            sort: {
              type: _v7,
              direction: _v8
            },
            statusFilter: _v9,
            perPage: _v10
          } = _v12,
          _v11 = {
            page: _v5,
            query: _v6 ?? "",
            direction: _v8,
            filter: _v9 === _v28.All ? void 0 : _v9,
            perPage: _v10,
            sort: _v7
          };
        try {
          _v13({
            type: _v83.FetchTeamMembersInit,
            payload: !0
          });
          let _v0 = await (0, _v76.getTeamAutoArchive)({
            baseUrl: `//${_v2}`,
            headers: {
              Authorization: `jwt ${_v3}`,
              "Content-Type": "application/json"
            },
            where: {
              userId: Number(_v4)
            },
            select: ["email", "name", "permission", "permissionLevel", "profile", "status", "teamUserId", "userId", "inviteUrl"],
            query: _v11
          });
          _v13({
            type: _v83.FetchTeamMembersComplete,
            payload: {
              teamMembers: _v0
            }
          });
        } catch (_v0) {
          _v3(_v0, _v30.PleaseTryAgain, _v82.FetchTeamMembers);
        }
      }, [_v13, _v3, _v12, _v11]), _v6 = async _v0 => {
        let _v1 = _v0 || _v11;
        if (!_v1) throw Error("No viewer");
        let _v2 = _v1.teamUser?.ownerId ?? _v1.user?.id,
          {
            apiUrl: _v3,
            jwt: _v4
          } = _v1,
          {
            currentPage: _v5,
            searchQuery: _v6,
            sort: {
              type: _v7,
              direction: _v8
            },
            statusFilter: _v9,
            perPage: _v10
          } = _v12,
          _v11 = {
            page: _v5,
            query: _v6 ?? "",
            direction: _v8,
            filter: _v9 === _v28.All ? void 0 : _v9,
            perPage: _v10,
            sort: _v7
          },
          _v12 = await (0, _v76.getTeamAutoArchive)({
            baseUrl: `//${_v3}`,
            headers: {
              Authorization: `jwt ${_v4}`,
              "Content-Type": "application/json"
            },
            where: {
              userId: Number(_v2)
            },
            select: ["email", "name", "permission", "permissionLevel", "profile", "status", "teamUserId", "userId", "inviteUrl"],
            query: _v11
          });
        _v13({
          type: _v83.FetchTeamMembersComplete,
          payload: {
            teamMembers: _v12
          }
        });
      }, _v7 = async (_v0, _v1) => {
        let _v2 = _v12.teamMembers.find(_v0 => _v0.userId === _v1.userId),
          _v3 = _v0 || _v11;
        if (!_v3 || !_v3.user || !_v2) return;
        let _v4 = _v3.teamUser?.ownerId ?? _v3.user?.id;
        _v13({
          type: _v83.RemoveTeamMemberAccessInit,
          payload: !0
        });
        try {
          var _v5, _v6;
          let _v0, _v1;
          await _v81({
            baseUrl: `//${_v3.apiUrl}`,
            headers: {
              Authorization: `jwt ${_v3.jwt}`,
              "Content-Type": "application/json",
              "Vimeo-Page": window.location.pathname,
              "Accept-Language": _v3.locale ?? "en"
            },
            where: {
              userId: Number(_v4),
              teamUserId: _v1?.teamUserId
            }
          }), _v5 = String(_v1.userId), _v6 = Number(_v4), _v0 = _v73(_v6, "remove access"), _v1 = _v70(_v5), (0, _v63.sendBpEventWithContexts)("vimeo.integration_remove_access", _v0, 2, {
            ..._v1
          }), _v1(_v30.AccessRemoved), await _v6(_v3);
        } catch (_v0) {
          _v3(_v0, _v30.PleaseTryAgain, _v82.Remove), _v13({
            type: _v83.UpdateTeamMemberCancel,
            payload: {
              teamMember: _v1
            }
          });
        }
      }, _v8 = async (_v0, _v1) => {
        let _v2 = _v0 || _v11;
        if (!_v2) throw Error("No viewer");
        let _v3 = _v2.teamUser?.ownerId ?? _v2.user?.id;
        try {
          await _v80({
            baseUrl: `//${_v2.apiUrl}`,
            headers: {
              Authorization: `jwt ${_v2.jwt}`,
              "Content-Type": "application/json",
              "Vimeo-Page": window.location.pathname,
              "Accept-Language": _v2.locale ?? "en"
            },
            where: {
              userId: Number(_v3),
              teamUserId: _v1.teamUserId
            }
          }), _v74(String(_v1.userId), Number(_v3)), _v1(_v30.InviteSent), await _v6(_v2);
        } catch (_v0) {
          _v3(_v0, _v30.PleaseTryAgain, _v82.Resend), _v13({
            type: _v83.UpdateTeamMemberCancel,
            payload: {
              teamMember: _v1
            }
          });
        }
      }, _v9 = async (_v0, _v1) => {
        let _v2 = _v0 || _v11;
        if (!_v2) throw Error("No viewer");
        let _v3 = _v2.teamUser?.ownerId ?? _v2.user?.id;
        try {
          await _v80({
            baseUrl: `//${_v2.apiUrl}`,
            headers: {
              Authorization: `jwt ${_v2.jwt}`,
              "Content-Type": "application/json",
              "Vimeo-Page": window.location.pathname,
              "Accept-Language": _v2.locale ?? "en"
            },
            where: {
              userId: Number(_v3),
              teamUserId: _v1.teamUserId
            }
          }), _v74(String(_v1.userId), Number(_v3)), _v1(_v30.InviteSent), await _v6(_v2);
        } catch (_v0) {
          _v3(_v0, _v30.PleaseTryAgain, _v82.Allow), _v13({
            type: _v83.UpdateTeamMemberCancel,
            payload: {
              teamMember: _v1
            }
          });
        }
      }, _v10 = async _v0 => {
        let _v1 = _v0 || _v11;
        if (!_v1) throw Error("No viewer");
        try {
          let _v0 = _v1.teamUser?.ownerId ?? _v1.user?.id;
          await (0, _v76.deleteTeamAutoArchive)({
            baseUrl: `//${_v1.apiUrl}`,
            headers: {
              Authorization: `jwt ${_v1.jwt}`,
              "Content-Type": "application/json",
              "Vimeo-Page": window.location.pathname,
              "Accept-Language": _v1.locale ?? "en"
            },
            where: {
              userId: Number(_v0)
            }
          }), _v1(_v30.Disconnected), window.location.href = "/settings/apps";
        } catch (_v0) {
          _v3(_v0, _v30.PleaseTryAgain, _v82.Disconnect);
        }
      }, {
        fetchTeamMembers: _v5,
        updateSearchQuery: _v0 => {
          _v13({
            type: _v83.UpdateSearchQuery,
            payload: {
              searchQuery: _v0
            }
          });
        },
        updateSort: _v0 => {
          _v13({
            type: _v83.UpdateSort,
            payload: {
              sort: _v0
            }
          });
        },
        updateDirection: _v0 => {
          _v13({
            type: _v83.UpdateDirection,
            payload: {
              direction: _v0
            }
          });
        },
        updateStatusFilter: _v0 => {
          _v13({
            type: _v83.UpdateStatusesFilter,
            payload: {
              statusFilter: _v0
            }
          });
        },
        updateCurrentPage: _v0 => {
          _v13({
            type: _v83.UpdateCurrentPage,
            payload: {
              currentPage: _v0
            }
          });
        },
        setShowError: _v2,
        showToastMessage: _v1,
        removeTeamMemberAccess: _v7,
        resendTeamMemberInvite: _v8,
        allowAccess: _v9,
        disconnectTeam: _v10,
        fetchTeamDetails: _v4
      });
    return (0, _v1.jsx)(_v51.Provider, {
      value: {
        ..._v12,
        ..._v14
      },
      children: _v0
    });
  }], 0);
}