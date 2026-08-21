{
  "use strict";

  let _v1 = ["allowedPrivaciesContributor", "allowedPrivaciesAdmin", "publishToSocialAllowedAdmin", "publishToSocialAllowedContributor", "embedDomainEditEnabledAdmin", "embedDomainEditEnabledContributor", "videoFileLinkAccessEnabledAdmin", "videoFileLinkAccessEnabledContributor"],
    _v2 = _v1.concat(["orgAllowedPrivaciesAdmin", "orgPublishToSocialAllowedAdmin", "orgEmbedDomainEditEnabledAdmin", "orgVideoFileLinkAccessEnabledAdmin"]);
  _v0.s(["NOTIFICATION_DURATION", 0, 0, "PREF_EMBED_DOMAIN_EDIT_ENABLED_ADMIN", 0, "edeea", "PREF_EMBED_DOMAIN_EDIT_ENABLED_CONTRIBUTOR", 0, "edeec", "PREF_PUBLIC_PRIVACY_DISABLED", 0, "ecdppr", "PUBLIC_PRIVACY_CANT_BE_USED_AT_DOMAIN", 0, "vimeo.work", "PermissionLevel", 0, {
    Owner: 1,
    Admin: 2,
    ContributorPlus: 3,
    Contributor: 4,
    Viewer: 5,
    Uploader: 6
  }, "SETTINGS_FIELDS_ORG", 0, ["allowedPrivaciesAdmin", "publishToSocialAllowedAdmin", "embedDomainEditEnabledAdmin", "videoFileLinkAccessEnabledAdmin"], "SETTINGS_FIELDS_WS", 0, _v2, "SETTING_FIELDS", 0, _v1], 0);
  var _v3 = _v0.i(0);
  let _v4 = null;
  _v0.s(["getTranslations", 0, () => (null === _v4 && (_v4 = Object.freeze({
    AnyoneAtCompany: (0, _v3.translate)({
      singular: "All members",
      dictionary: {
        es: {
          singular: "Todos los miembros"
        },
        "de-DE": {
          singular: "Alle Mitglieder"
        },
        "fr-FR": {
          singular: "Tous les membres"
        },
        "ja-JP": {
          singular: "すべてのメンバー"
        },
        "ko-KR": {
          singular: "모든 멤버"
        },
        "pt-BR": {
          singular: "Todos os integrantes"
        },
        "zh-CN": {
          singular: "所有成员"
        }
      }
    }),
    AnyoneAtCompanyDescription: (0, _v3.translate)({
      singular: "Any member with the link can view",
      dictionary: {
        es: {
          singular: "Cualquier miembro con el enlace puede verlo"
        },
        "de-DE": {
          singular: "Jedes Mitglied mit dem Link kann die Inhalte ansehen."
        },
        "fr-FR": {
          singular: "Les membres disposant du lien peuvent voir ce contenu"
        },
        "ja-JP": {
          singular: "リンクを持っているすべてのメンバーが視聴可能"
        },
        "ko-KR": {
          singular: "링크가 있는 멤버는 누구나 시청 가능"
        },
        "pt-BR": {
          singular: "Qualquer integrante com o link pode ver"
        },
        "zh-CN": {
          singular: "任何拥有链接的成员都可以查看"
        }
      }
    }),
    AdminsAndOwner: (0, _v3.translate)({
      singular: "Admins and the Account Owner",
      dictionary: {
        es: {
          singular: "Administradores y el Propietario de la cuenta"
        },
        "de-DE": {
          singular: "Administratoren und der Kontoinhaber"
        },
        "fr-FR": {
          singular: "Les administrateurs et le propriétaire du compte"
        },
        "ja-JP": {
          singular: "管理者とアカウント所有者"
        },
        "ko-KR": {
          singular: "관리자 및 계정 소유자"
        },
        "pt-BR": {
          singular: "Administradores e o proprietário da conta"
        },
        "zh-CN": {
          singular: "管理员和帐户所有者"
        }
      }
    }),
    WorkspaceAdmins: (0, _v3.translate)({
      singular: "Workspace Admins",
      dictionary: {
        es: {
          singular: "Administradores del espacio de trabajo"
        },
        "de-DE": {
          singular: "Workspace-Administratoren"
        },
        "fr-FR": {
          singular: "Administrateurs de l'espace de travail"
        },
        "ja-JP": {
          singular: "ワークスペース管理者"
        },
        "ko-KR": {
          singular: "워크스페이스 관리자"
        },
        "pt-BR": {
          singular: "Administradores do espaço de trabalho"
        },
        "zh-CN": {
          singular: "工作区管理员"
        }
      }
    }),
    Contributors: (0, _v3.translate)({
      singular: "Contributors",
      dictionary: {
        es: {
          singular: "Colaboradores"
        },
        "de-DE": {
          singular: "Mitwirkende"
        },
        "fr-FR": {
          singular: "Contributeurs"
        },
        "ja-JP": {
          singular: "投稿者"
        },
        "ko-KR": {
          singular: "기여자"
        },
        "pt-BR": {
          singular: "Colaboradores"
        },
        "zh-CN": {
          singular: "贡献者"
        }
      }
    }),
    PrivacyRestrictionsByRole: (0, _v3.translate)({
      singular: "Privacy restrictions by role",
      dictionary: {
        es: {
          singular: "Restricciones de privacidad por rol"
        },
        "de-DE": {
          singular: "Datenschutzeinschränkungen nach Rolle"
        },
        "fr-FR": {
          singular: "Restrictions de confidentialité par rôle"
        },
        "ja-JP": {
          singular: "役割別のプライバシー制限"
        },
        "ko-KR": {
          singular: "역할별 프라이버시 제한"
        },
        "pt-BR": {
          singular: "Restrições de privacidade por função"
        },
        "zh-CN": {
          singular: "按角色划分的隐私限制"
        }
      }
    }),
    PrivacyRestrictions: (0, _v3.translate)({
      singular: "Privacy restrictions",
      dictionary: {
        es: {
          singular: "Restricciones de privacidad"
        },
        "de-DE": {
          singular: "Datenschutzeinschränkungen"
        },
        "fr-FR": {
          singular: "Restrictions de confidentialité"
        },
        "ja-JP": {
          singular: "プライバシー制限"
        },
        "ko-KR": {
          singular: "프라이버시 제한"
        },
        "pt-BR": {
          singular: "Restrições de privacidade"
        },
        "zh-CN": {
          singular: "隐私限制"
        }
      }
    }),
    DecideWhichPrivacySettingsWorkspacesCanUse: (0, _v3.translate)({
      singular: "Decide which privacy settings Workspaces can use ",
      dictionary: {
        es: {
          singular: "Decida qué configuraciones de privacidad pueden usar los espacios de trabajo "
        },
        "de-DE": {
          singular: "Entscheiden Sie, welche Datenschutzeinstellungen Workspaces verwenden dürfen. "
        },
        "fr-FR": {
          singular: "Déterminez les paramètres de confidentialité que les Espaces de travail peuvent utiliser "
        },
        "ja-JP": {
          singular: "ワークスペースで使用できるプライバシー設定を決定します "
        },
        "ko-KR": {
          singular: "워크스페이스에서 사용할 수 있는 프라이버시 설정을 결정합니다. "
        },
        "pt-BR": {
          singular: "Decida quais configurações de privacidade os espaços de trabalho podem usar "
        },
        "zh-CN": {
          singular: "决定哪些隐私设置可供工作区使用 "
        }
      }
    }),
    DecideWhichPrivacy: (0, _v3.translate)({
      singular: "Decide which privacy settings team members can use based on their role",
      dictionary: {
        es: {
          singular: "Decida qué configuraciones de privacidad pueden usar los miembros del equipo según su rol."
        },
        "de-DE": {
          singular: "Entscheiden Sie, welche Datenschutzeinstellungen Teammitglieder je nach ihrer Rolle verwenden können."
        },
        "fr-FR": {
          singular: "Déterminez les paramètres de confidentialité que les collaborateurs peuvent utiliser en fonction de leur rôle"
        },
        "ja-JP": {
          singular: "役割に基づいてチームメンバーが使用できるプライバシー設定を決定します"
        },
        "ko-KR": {
          singular: "팀원이 역할에 따라 사용할 수 있는 프라이버시 설정을 정합니다."
        },
        "pt-BR": {
          singular: "Decida quais configurações de privacidade os integrantes da equipe podem usar com base na função"
        },
        "zh-CN": {
          singular: "根据团队成员的角色决定他们可以使用哪些隐私设置"
        }
      }
    }),
    Privacy: (0, _v3.translate)({
      singular: "Privacy",
      dictionary: {
        es: {
          singular: "Privacidad"
        },
        "de-DE": {
          singular: "Datenschutz"
        },
        "fr-FR": {
          singular: "Confidentialité "
        },
        "ja-JP": {
          singular: "プライバシー"
        },
        "ko-KR": {
          singular: "프라이버시"
        },
        "pt-BR": {
          singular: "Privacidade"
        },
        "zh-CN": {
          singular: "隐私"
        }
      }
    }),
    VideoPrivacy: (0, _v3.translate)({
      singular: "Video privacy",
      dictionary: {
        es: {
          singular: "Privacidad de Vimeo"
        },
        "de-DE": {
          singular: "Video-Datenschutz"
        },
        "fr-FR": {
          singular: "Confidentialité de la vidéo"
        },
        "ja-JP": {
          singular: "動画プライバシー"
        },
        "ko-KR": {
          singular: "동영상 프라이버시"
        },
        "pt-BR": {
          singular: "Privacidade do vídeo"
        },
        "zh-CN": {
          singular: "视频隐私"
        }
      }
    }),
    Sharing: (0, _v3.translate)({
      singular: "Sharing",
      dictionary: {
        es: {
          singular: "Compartir"
        },
        "de-DE": {
          singular: "Freigabe und Teilen"
        },
        "fr-FR": {
          singular: "Partage"
        },
        "ja-JP": {
          singular: "共有する"
        },
        "ko-KR": {
          singular: "공유"
        },
        "pt-BR": {
          singular: "Compartilhando"
        },
        "zh-CN": {
          singular: "正在分享"
        }
      }
    }),
    PrivacyOptionIsDisabled: (0, _v3.translate)({
      singular: "Privacy option is disabled for Admins and the Account Owner. It can not be turned on for Contributors.",
      dictionary: {
        es: {
          singular: "La opción de privacidad está deshabilitada para los administradores y el propietario de la cuenta. No se puede habilitar para los colaboradores."
        },
        "de-DE": {
          singular: "Die Datenschutzoption ist für Admins und den Kontoinhaber deaktiviert. Sie kann nicht für Mitwirkende aktiviert werden."
        },
        "fr-FR": {
          singular: "L'option de confidentialité est désactivée pour les administrateurs et le propriétaire du compte. Elle ne peut pas être activée pour les contributeurs."
        },
        "ja-JP": {
          singular: "プライバシーオプションは、管理者とアカウント所有者に対して無効になっています。投稿者に対してこれを有効にすることはできません。"
        },
        "ko-KR": {
          singular: "관리자와 계정 소유자는 프라이버시 옵션을 사용할 수 없습니다. 기여자에게는 이 기능을 켤 수 없습니다."
        },
        "pt-BR": {
          singular: "A opção de privacidade está desativada para administradores e o proprietário da conta. Ela não pode ser ativada para colaboradores."
        },
        "zh-CN": {
          singular: "管理员和帐户所有者的隐私选项已被禁用。无法为贡献者启用此项。"
        }
      }
    }),
    PrivacyOptionIsDisabledForWorkspaceAdmins: (0, _v3.translate)({
      singular: "Privacy option is disabled for Workspace Admins. It can not be turned on for Contributors.",
      dictionary: {
        es: {
          singular: "La opción de privacidad está desactivada para los administradores del espacio de trabajo. No se puede activar para los colaboradores."
        },
        "de-DE": {
          singular: "Die Datenschutzoption ist für Workspace-Admins deaktiviert. Sie kann nicht für Mitwirkende aktiviert werden."
        },
        "fr-FR": {
          singular: "L'option de confidentialité est désactivée pour les administrateurs d'espace de travail. Elle ne peut pas être activée pour les contributeurs."
        },
        "ja-JP": {
          singular: "ワークスペース管理者に対するプライバシーオプションが無効になっています。投稿者に対してこれを有効にすることはできません。"
        },
        "ko-KR": {
          singular: "워크스페이스 관리자는 개인정보 보호 옵션을 사용할 수 없습니다. 기여자에게는 이 기능을 켤 수 없습니다."
        },
        "pt-BR": {
          singular: "A opção de privacidade está desativada para administradores do espaço de trabalho. Ela não pode ser ativada para colaboradores."
        },
        "zh-CN": {
          singular: "已为工作区管理员禁用隐私选项。无法为贡献者启用此项。"
        }
      }
    }),
    PublicPrivacyCantBeUsed: _v0 => (0, _v3.translate)({
      singular: "Public privacy can’t be used with {DOMAIN}",
      replacements: {
        DOMAIN: _v0
      },
      dictionary: {
        es: {
          singular: "La privacidad pública no puede usarse con {DOMAIN}"
        },
        "de-DE": {
          singular: "Öffentliche Datenschutzeinstellungen können nicht mit {DOMAIN} verwendet werden"
        },
        "fr-FR": {
          singular: "La confidentialité publique ne peut pas être utilisée avec {DOMAIN}"
        },
        "ja-JP": {
          singular: "{DOMAIN} では一般公開のプライバシー設定を使用できません"
        },
        "ko-KR": {
          singular: "공개 프라이버시는 {DOMAIN}와 함께 사용할 수 없습니다."
        },
        "pt-BR": {
          singular: "Não é possível usar a opção de privacidade “Público” em {DOMAIN}"
        },
        "zh-CN": {
          singular: "使用 {DOMAIN} 时不能使用公开隐私"
        }
      }
    }),
    SharingOptionIsDisabled: (0, _v3.translate)({
      singular: "Sharing option is disabled for Admins and the Account Owner. It can not be turned on for Contributors.",
      dictionary: {
        es: {
          singular: "La opción de compartir está deshabilitada para los administradores y el propietario de la cuenta. No se puede habilitar para los colaboradores."
        },
        "de-DE": {
          singular: "Die Option zum Teilen ist für Administratoren und den Kontoinhaber deaktiviert. Sie kann nicht für Mitwirkende aktiviert werden."
        },
        "fr-FR": {
          singular: "L'option de partage est désactivée pour les administrateurs et le propriétaire du compte. Elle ne peut pas être activée pour les contributeurs."
        },
        "ja-JP": {
          singular: "共有オプションは、管理者とアカウント所有者に対して無効になっています。投稿者に対してこれを有効にすることはできません。"
        },
        "ko-KR": {
          singular: "관리자와 계정 소유자는 공유 옵션을 사용할 수 없습니다. 기여자에게는 이 기능을 켤 수 없습니다."
        },
        "pt-BR": {
          singular: "A opção de compartilhamento está desativada para administradores e o proprietário da conta. Ela não pode ser ativada para colaboradores."
        },
        "zh-CN": {
          singular: "管理员和帐户所有者的共享选项已被禁用。无法为贡献者启用此项。"
        }
      }
    }),
    Private: (0, _v3.translate)({
      singular: "Private",
      dictionary: {
        es: {
          singular: "Privado"
        },
        "de-DE": {
          singular: "Privat"
        },
        "fr-FR": {
          singular: "Privé"
        },
        "ja-JP": {
          singular: "プライベート"
        },
        "ko-KR": {
          singular: "비공개"
        },
        "pt-BR": {
          singular: "Privado"
        },
        "zh-CN": {
          singular: "私密"
        }
      }
    }),
    PrivacyRestrictionsUpsellText: (0, _v3.translate)({
      singular: "Your plan is limited to basic permissions. Upgrade to Enterprise for more control over your video privacy.",
      dictionary: {
        es: {
          singular: "Su plan está limitado a permisos básicos. Suba de categoría a Enterprise para tener más control sobre la privacidad de Vimeo."
        },
        "de-DE": {
          singular: "Ihr Plan ist auf grundlegende Berechtigungen beschränkt. Führen Sie ein Upgrade auf Enterprise durch, um mehr Kontrolle über Ihren Videodatenschutz zu haben."
        },
        "fr-FR": {
          singular: "Votre abonnement est limité aux autorisations de base. Passez à l'abonnement Entreprise pour mieux contrôler la confidentialité de vos vidéos."
        },
        "ja-JP": {
          singular: "現在のプランは基本的なアクセス許可に制限されています。Enterpriseにアップグレードすると、動画のプライバシーをさらにコントロールできます。"
        },
        "ko-KR": {
          singular: "회원님의 요금제에서는 기본적인 권한만 사용할 수 있습니다. 동영상 프라이버시를 더욱 강력하게 제어하려면 Enterprise 요금제로 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Seu plano está limitado a permissões básicas. Faça upgrade para o Enterprise para controlar melhor a privacidade do seu vídeo."
        },
        "zh-CN": {
          singular: "您的套餐仅限于基本权限。升级到 Enterprise 套餐可以更好地控制您的视频隐私。"
        }
      }
    }),
    PrivacyRestrictionsUpsellButton: (0, _v3.translate)({
      singular: "Upgrade",
      dictionary: {
        es: {
          singular: "Actualizar"
        },
        "de-DE": {
          singular: "Upgraden"
        },
        "fr-FR": {
          singular: "Mettre à niveau"
        },
        "ja-JP": {
          singular: "アップグレード"
        },
        "ko-KR": {
          singular: "업그레이드"
        },
        "zh-CN": {
          singular: "升级"
        }
      }
    }),
    PrivateIsAlwaysAvailable: (0, _v3.translate)({
      singular: "Private is always available",
      dictionary: {
        es: {
          singular: "El modo privado siempre está disponible"
        },
        "de-DE": {
          singular: "Privat ist immer verfügbar"
        },
        "fr-FR": {
          singular: "Le mode privé est toujours disponible"
        },
        "ja-JP": {
          singular: "プライベートはいつでも利用可能"
        },
        "ko-KR": {
          singular: "비공개는 항상 사용 가능"
        },
        "pt-BR": {
          singular: "O modo privado está sempre disponível"
        },
        "zh-CN": {
          singular: "始终保护隐私"
        }
      }
    }),
    Unlisted: (0, _v3.translate)({
      singular: "Unlisted",
      dictionary: {
        es: {
          singular: "Sin listar"
        },
        "de-DE": {
          singular: "Nicht gelistet"
        },
        "fr-FR": {
          singular: "Non répertorié"
        },
        "ja-JP": {
          singular: "限定公開"
        },
        "ko-KR": {
          singular: "일부 공개"
        },
        "pt-BR": {
          singular: "Não listado"
        },
        "zh-CN": {
          singular: "未公开发布"
        }
      }
    }),
    UnlistedDescription: (0, _v3.translate)({
      singular: "Anyone with the link can view",
      dictionary: {
        es: {
          singular: "Cualquier persona con el enlace puede ver"
        },
        "de-DE": {
          singular: "Jeder mit dem Link kann es ansehen"
        },
        "fr-FR": {
          singular: "Toute personne disposant du lien peut visionner"
        },
        "ja-JP": {
          singular: "リンクを知っている人は誰でも視聴できます"
        },
        "ko-KR": {
          singular: "링크가 있는 사람은 누구나 볼 수 있음"
        },
        "pt-BR": {
          singular: "Qualquer pessoa com o link pode visualizar"
        },
        "zh-CN": {
          singular: "任何拥有链接的人都可以查看"
        }
      }
    }),
    PasswordProtected: (0, _v3.translate)({
      singular: "Password-protected",
      dictionary: {
        es: {
          singular: "Protegido por contraseña"
        },
        "de-DE": {
          singular: "Kennwortgeschützt"
        },
        "fr-FR": {
          singular: "Protégée par mot de passe"
        },
        "ja-JP": {
          singular: "パスワード保護"
        },
        "ko-KR": {
          singular: "비밀번호로 보호"
        },
        "pt-BR": {
          singular: "Protegido por senha"
        },
        "zh-CN": {
          singular: "密码保护"
        }
      }
    }),
    PasswordProtectedDescription: (0, _v3.translate)({
      singular: "Anyone with the link and password can view",
      dictionary: {
        es: {
          singular: "Cualquier persona con el enlace y la contraseña puede ver"
        },
        "de-DE": {
          singular: "Jeder mit Link und Passwort kann es ansehen"
        },
        "fr-FR": {
          singular: "Toute personne disposant du lien et du mot de passe peut visionner"
        },
        "ja-JP": {
          singular: "リンクとパスワードを知っている人は誰でも視聴できます"
        },
        "ko-KR": {
          singular: "링크와 비밀번호가 있는 사람은 누구나 볼 수 있음"
        },
        "pt-BR": {
          singular: "Qualquer pessoa com o link e a senha pode visualizar"
        },
        "zh-CN": {
          singular: "任何拥有链接和密码的人都可以查看"
        }
      }
    }),
    HideFromVimeo: (0, _v3.translate)({
      singular: "Embed only",
      dictionary: {
        es: {
          singular: "Solo incrustado"
        },
        "de-DE": {
          singular: "Nur Einbetten"
        },
        "fr-FR": {
          singular: "Intégration uniquement"
        },
        "ja-JP": {
          singular: "埋め込みのみ"
        },
        "ko-KR": {
          singular: "임베드 전용"
        },
        "pt-BR": {
          singular: "Somente incorporado"
        },
        "zh-CN": {
          singular: "仅限嵌入"
        }
      }
    }),
    HideFromVimeoDescription: (0, _v3.translate)({
      singular: "Embeddable anywhere, but private on Vimeo",
      dictionary: {
        es: {
          singular: "Incrustable en cualquier lugar, pero privado en Vimeo"
        },
        "de-DE": {
          singular: "Überall einbettbar, aber auf Vimeo privat"
        },
        "fr-FR": {
          singular: "Intégrable n'importe où, mais privé sur Vimeo"
        },
        "ja-JP": {
          singular: "どこにでも埋め込めますが、Vimeo上では非公開です"
        },
        "ko-KR": {
          singular: "어디에나 임베드 가능하나 Vimeo에서는 비공개"
        },
        "pt-BR": {
          singular: "Incorporável em qualquer lugar, mas privado no Vimeo"
        },
        "zh-CN": {
          singular: "可以嵌入到任何地方，但在 Vimeo 上保持私密"
        }
      }
    }),
    Public: (0, _v3.translate)({
      singular: "Public",
      dictionary: {
        es: {
          singular: "Público"
        },
        "de-DE": {
          singular: "Öffentlich"
        },
        "ja-JP": {
          singular: "一般公開"
        },
        "ko-KR": {
          singular: "공개"
        },
        "pt-BR": {
          singular: "Público"
        },
        "zh-CN": {
          singular: "公开"
        }
      }
    }),
    PublicDescription: (0, _v3.translate)({
      singular: "Anyone on the internet can find and view",
      dictionary: {
        es: {
          singular: "Cualquiera en internet puede encontrar y ver"
        },
        "de-DE": {
          singular: "Jeder im Internet kann es finden und ansehen"
        },
        "fr-FR": {
          singular: "Toute personne sur Internet peut trouver et visionner"
        },
        "ja-JP": {
          singular: "インターネット上の誰でも見つけて視聴できます"
        },
        "ko-KR": {
          singular: "인터넷에서 누구나 찾고 볼 수 있음"
        },
        "pt-BR": {
          singular: "Qualquer pessoa na internet pode encontrar e visualizar"
        },
        "zh-CN": {
          singular: "互联网上的任何人都可以找到并查看"
        }
      }
    }),
    PublishToThirdParty: (0, _v3.translate)({
      singular: "Publish to third-party websites",
      dictionary: {
        es: {
          singular: "Publicar en sitios web de terceros"
        },
        "de-DE": {
          singular: "Auf Websites von Drittanbietern veröffentlichen"
        },
        "fr-FR": {
          singular: "Publication sur des sites web tiers"
        },
        "ja-JP": {
          singular: "サードパーティのウェブサイトに公開"
        },
        "ko-KR": {
          singular: "타사 웹사이트에 게시"
        },
        "pt-BR": {
          singular: "Publicar em sites de terceiros"
        },
        "zh-CN": {
          singular: "发布到第三方网站"
        }
      }
    }),
    PublishToThirdPartyDescription: (0, _v3.translate)({
      singular: "Publish content to connected social accounts and simulcast live events to external destinations",
      dictionary: {
        es: {
          singular: "Publique contenido en cuentas de redes sociales conectadas y transmita eventos de transmisión simultánea en vivo a destinos externos."
        },
        "de-DE": {
          singular: "Veröffentlichen Sie Inhalte auf verknüpften sozialen Konten und übertragen Sie Live-Events an externe Ziele."
        },
        "fr-FR": {
          singular: "Publication de contenu sur les comptes sociaux connectés et diffusion simultanée des événements en direct vers des destinations externes"
        },
        "ja-JP": {
          singular: "接続されたソーシャルアカウントにコンテンツを公開し、外部の配信先にライブイベントを同時配信"
        },
        "ko-KR": {
          singular: "연결된 소셜 계정에 콘텐츠를 게시하고 외부 대상에게 라이브 이벤트를 동시 방송합니다."
        },
        "pt-BR": {
          singular: "Publique conteúdo nas contas sociais vinculadas e faça transmissão simultânea de eventos ao vivo para destinos externos"
        },
        "zh-CN": {
          singular: "将内容发布到已连接的社交帐户，并将直播活动联播到外部目的地"
        }
      }
    }),
    UpdateEmbedSettings: (0, _v3.translate)({
      singular: "Update embed settings",
      dictionary: {
        es: {
          singular: "Actualizar la configuración de inserciones"
        },
        "de-DE": {
          singular: "Einbettungseinstellungen aktualisieren"
        },
        "fr-FR": {
          singular: "Mettre à jour les paramètres d'intégration"
        },
        "ja-JP": {
          singular: "埋め込み設定を更新"
        },
        "ko-KR": {
          singular: "임베드 설정 업데이트"
        },
        "pt-BR": {
          singular: "Atualizar configurações de incorporação"
        },
        "zh-CN": {
          singular: "更新嵌入设置"
        }
      }
    }),
    UpdateEmbedSettingsDescription: (0, _v3.translate)({
      singular: "Update the places and domains where videos can be embedded",
      dictionary: {
        es: {
          singular: "Actualice los lugares y dominios donde se pueden insertar los videos."
        },
        "de-DE": {
          singular: "Aktualisieren Sie die Orte und Domains, an denen Videos eingebettet werden können"
        },
        "fr-FR": {
          singular: "Mettre à jour les lieux et les domaines où les vidéos peuvent être intégrées"
        },
        "ja-JP": {
          singular: "動画を埋め込める場所とドメインを更新"
        },
        "ko-KR": {
          singular: "동영상을 임베드할 수 있는 위치와 도메인을 업데이트하세요."
        },
        "pt-BR": {
          singular: "Atualize os locais e domínios em que os vídeos podem ser incorporados"
        },
        "zh-CN": {
          singular: "更新视频可嵌入的位置和域"
        }
      }
    }),
    VideoFileLink: (0, _v3.translate)({
      singular: "Video File Link",
      dictionary: {
        es: {
          singular: "Enlace al archivo de video"
        },
        "de-DE": {
          singular: "Link zur Videodatei"
        },
        "fr-FR": {
          singular: "Lien de fichier vidéo"
        },
        "ja-JP": {
          singular: "動画ファイルのリンク"
        },
        "ko-KR": {
          singular: "동영상 파일 링크"
        },
        "pt-BR": {
          singular: "Link do arquivo de vídeo"
        },
        "zh-CN": {
          singular: "视频文件链接"
        }
      }
    }),
    VideoFileLinkDescription: (0, _v3.translate)({
      singular: "Video file can be shared externally either as a link or as downloaded file",
      dictionary: {
        es: {
          singular: "El archivo de vídeo se puede compartir de forma externa, ya sea como enlace o como archivo descargado."
        },
        "de-DE": {
          singular: "Eine Videodatei kann extern entweder als Link oder als heruntergeladene Datei geteilt werden"
        },
        "fr-FR": {
          singular: "Vous pouvez partager le fichier vidéo en externe, soit sous forme de lien, soit en tant que fichier téléchargé."
        },
        "ja-JP": {
          singular: "動画ファイルは、リンクまたはダウンロードファイルとして外部に共有することができます"
        },
        "ko-KR": {
          singular: "동영상 파일은 링크 또는 다운로드한 파일로 외부와 공유할 수 있습니다."
        },
        "pt-BR": {
          singular: "O arquivo de vídeo pode ser compartilhado externamente como link ou arquivo baixado"
        },
        "zh-CN": {
          singular: "视频文件可作为链接或已下载文件与外部共享"
        }
      }
    }),
    PrivacyRestrictionsModalTitle: _v0 => (0, _v3.translate)({
      singular: "Turn off {PRIVACY_OPTION} privacy for all team members",
      replacements: {
        PRIVACY_OPTION: _v0
      },
      dictionary: {
        es: {
          singular: "Desactive la opción de privacidad {PRIVACY_OPTION} para todos los miembros del equipo"
        },
        "de-DE": {
          singular: "Schalten Sie die Datenschutzeinstellung {PRIVACY_OPTION} für alle Teammitglieder aus."
        },
        "fr-FR": {
          singular: "Désactiver la confidentialité {PRIVACY_OPTION} pour tous les collaborateurs"
        },
        "ja-JP": {
          singular: "すべてのチームメンバーの{PRIVACY_OPTION}プライバシーをオフにする"
        },
        "ko-KR": {
          singular: "모든 팀원의 {PRIVACY_OPTION} 프라이버시 끄기"
        },
        "pt-BR": {
          singular: "Desative a privacidade de {PRIVACY_OPTION} para todos os integrantes da equipe"
        },
        "zh-CN": {
          singular: "关闭所有团队成员的 {PRIVACY_OPTION} 隐私设置"
        }
      }
    }),
    PrivacyRestrictionsModalDescription: (_v0, _v1) => (0, _v3.translate)({
      singular: "Turning off {PRIVACY_ORIGINAL} privacy for Admins and the Account Owner will also turn it off for Contributors. Any content that is currently set to {PRIVACY_ORIGINAL} will be changed to {PRIVACY_NEW}.",
      replacements: {
        PRIVACY_ORIGINAL: _v0,
        PRIVACY_NEW: _v1
      },
      dictionary: {
        es: {
          singular: "Si desactiva la opción de privacidad {PRIVACY_ORIGINAL} para los administradores y el propietario de la cuenta, también se desactivará para los colaboradores. Todos los contenidos que estén configurados actualmente en {PRIVACY_ORIGINAL} se cambiarán a {PRIVACY_NEW}."
        },
        "de-DE": {
          singular: "Wenn Sie die Datenschutzeinstellung {PRIVACY_ORIGINAL} für Admins und den Kontoinhaber ausschalten, wird sie auch für Mitwirkende deaktiviert. Alle Inhalte, die derzeit auf {PRIVACY_ORIGINAL} eingestellt sind, werden in {PRIVACY_NEW} geändert."
        },
        "fr-FR": {
          singular: "Désactiver la confidentialité de {PRIVACY_ORIGINAL} pour les administrateurs et le propriétaire du compte la désactivera également pour les contributeurs. Tous les contenus actuellement définis sur {PRIVACY_ORIGINAL} seront changés en {PRIVACY_NEW}."
        },
        "ja-JP": {
          singular: "管理者とアカウント所有者の{PRIVACY_ORIGINAL}プライバシーをオフにすると、投稿者についてもオフになります。現在{PRIVACY_ORIGINAL}に設定されているコンテンツは、{PRIVACY_NEW}に変更されます。"
        },
        "ko-KR": {
          singular: "관리자와 계정 소유자의 {PRIVACY_ORIGINAL} 프라이버시를 끄면 기여자도 해당 기능이 꺼집니다. 현재 {PRIVACY_ORIGINAL}(으)로 설정된 모든 콘텐츠는 {PRIVACY_NEW}(으)로 변경됩니다."
        },
        "pt-BR": {
          singular: "Desativar a privacidade {PRIVACY_ORIGINAL} para administradores e o proprietário da conta também a desativará para colaboradores. Qualquer conteúdo definido como {PRIVACY_ORIGINAL} será alterado para {PRIVACY_NEW}."
        },
        "zh-CN": {
          singular: "关闭管理员和帐户所有者的 {PRIVACY_ORIGINAL} 隐私设置也将关闭贡献者的该隐私设置。当前设置为 {PRIVACY_ORIGINAL} 的所有内容都将更改为 {PRIVACY_NEW}。"
        }
      }
    }),
    PrivacyRestrictionsModalTitleOrg: _v0 => (0, _v3.translate)({
      singular: "Turn off {PRIVACY_OPTION} privacy for all members",
      replacements: {
        PRIVACY_OPTION: _v0
      },
      dictionary: {
        es: {
          singular: "Desactive la opción de privacidad {PRIVACY_OPTION} para todos los miembros"
        },
        "de-DE": {
          singular: "Schalten Sie die Datenschutzeinstellung {PRIVACY_OPTION} für alle Mitglieder aus."
        },
        "fr-FR": {
          singular: "Désactiver la confidentialité {PRIVACY_OPTION} pour tous les membres"
        },
        "ja-JP": {
          singular: "すべてのメンバーの{PRIVACY_OPTION}プライバシーをオフにする"
        },
        "ko-KR": {
          singular: "모든 회원의 {PRIVACY_OPTION} 프라이버시 끄기"
        },
        "pt-BR": {
          singular: "Desative a privacidade de {PRIVACY_OPTION} para todos os integrantes"
        },
        "zh-CN": {
          singular: "关闭所有成员的 {PRIVACY_OPTION} 隐私设置"
        }
      }
    }),
    PrivacyRestrictionsModalDescriptionOrg: (_v0, _v1) => (0, _v3.translate)({
      singular: "Turning off {PRIVACY_ORIGINAL} privacy for the organization will also turn it off for all users in all workspaces. Any content that is currently set to {PRIVACY_ORIGINAL} will be changed to {PRIVACY_NEW}.",
      replacements: {
        PRIVACY_ORIGINAL: _v0,
        PRIVACY_NEW: _v1
      },
      dictionary: {
        es: {
          singular: "Al desactivar la opción de privacidad {PRIVACY_ORIGINAL} para la organización, también se desactivará para todos los usuarios en todos los espacios de trabajo. Todos los contenidos que estén configurados actualmente en {PRIVACY_ORIGINAL} se cambiarán a {PRIVACY_NEW}."
        },
        "de-DE": {
          singular: "Wenn Sie die Datenschutzfunktion {PRIVACY_ORIGINAL} für die Organisation deaktivieren, wird sie auch für alle Benutzenden in allen Workspaces deaktiviert. Alle Inhalte, die derzeit auf {PRIVACY_ORIGINAL} eingestellt sind, werden in {PRIVACY_NEW} geändert."
        },
        "fr-FR": {
          singular: "Désactiver la confidentialité {PRIVACY_ORIGINAL} pour l'organisation désactivera également cette option pour tous les utilisateurs dans tous les espaces de travail. Tous les contenus actuellement définis sur {PRIVACY_ORIGINAL} seront changés en {PRIVACY_NEW}."
        },
        "ja-JP": {
          singular: "組織の{PRIVACY_ORIGINAL}プライバシーをオフにすると、すべてのワークスペースのユーザー全員に対してもオフになります。現在{PRIVACY_ORIGINAL}に設定されているコンテンツは、{PRIVACY_NEW}に変更されます。"
        },
        "ko-KR": {
          singular: "조직의 {PRIVACY_ORIGINAL} 프라이버시를 끄면 모든 워크스페이스의 모든 사용자에 대해 해당 기능이 꺼집니다. 현재 {PRIVACY_ORIGINAL}(으)로 설정된 모든 콘텐츠는 {PRIVACY_NEW}(으)로 변경됩니다."
        },
        "pt-BR": {
          singular: "Desativar a privacidade {PRIVACY_ORIGINAL} para a organização também a desativará para todos os usuários em todos os espaços de trabalho. Qualquer conteúdo definido como {PRIVACY_ORIGINAL} será alterado para {PRIVACY_NEW}."
        },
        "zh-CN": {
          singular: "关闭组织的 {PRIVACY_ORIGINAL} 隐私设置也会关闭所有工作区中所有用户的此隐私设置。当前设置为 {PRIVACY_ORIGINAL} 的所有内容都将更改为 {PRIVACY_NEW}。"
        }
      }
    }),
    SomethingWentWrong: (0, _v3.translate)({
      singular: "Something went wrong. Please try again.",
      dictionary: {
        es: {
          singular: "Algo salió mal. Inténtalo de nuevo."
        },
        "de-DE": {
          singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
        },
        "fr-FR": {
          singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
        },
        "ja-JP": {
          singular: "エラーが発生しました。 再度お試しください。"
        },
        "ko-KR": {
          singular: "문제가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Alguma coisa deu errado. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "出错了。请重试。"
        }
      }
    }),
    Cancel: (0, _v3.translate)({
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
    Confirm: (0, _v3.translate)({
      singular: "Confirm",
      dictionary: {
        es: {
          singular: "Confirmar"
        },
        "de-DE": {
          singular: "Bestätigen"
        },
        "fr-FR": {
          singular: "Confirmer"
        },
        "ja-JP": {
          singular: "確定"
        },
        "ko-KR": {
          singular: "확인"
        },
        "pt-BR": {
          singular: "Confirmar"
        },
        "zh-CN": {
          singular: "确认"
        }
      }
    }),
    ThisIsDisabledBy: (0, _v3.translate)({
      singular: "This is disabled by your Organization",
      dictionary: {
        es: {
          singular: "Esta opción está desactivada por su organización"
        },
        "de-DE": {
          singular: "Dies ist von Ihrer Organisation deaktiviert worden."
        },
        "fr-FR": {
          singular: "Cette option est désactivée par votre organisation."
        },
        "ja-JP": {
          singular: "これは組織によって無効にされています"
        },
        "ko-KR": {
          singular: "조직에서 이 기능을 비활성화했습니다."
        },
        "pt-BR": {
          singular: "Esta opção foi desativada pela sua organização"
        },
        "zh-CN": {
          singular: "此功能已被您的组织禁用"
        }
      }
    }),
    EditEmbedPrivacyDisableTooltip: (0, _v3.translate)({
      singular: "You need permission to change embed privacy",
      dictionary: {
        es: {
          singular: "Necesita permiso para cambiar la privacidad de la inserción"
        },
        "de-DE": {
          singular: "Sie benötigen eine Berechtigung, die Datenschutzeinstellungen für das Einbetten zu ändern."
        },
        "fr-FR": {
          singular: "Vous avez besoin d'une autorisation pour modifier les paramètres d'intégration"
        },
        "ja-JP": {
          singular: "埋め込みのプライバシーを変更するには、許可が必要です。"
        },
        "ko-KR": {
          singular: "임베드 공개 범위를 변경하려면 권한이 필요합니다."
        },
        "pt-BR": {
          singular: "Você precisa de permissão para alterar a privacidade de incorporação"
        },
        "zh-CN": {
          singular: "您需要获得权限才能更改嵌入隐私设置"
        }
      }
    }),
    ChangesSaved: (0, _v3.translate)({
      singular: "Changes saved",
      dictionary: {
        es: {
          singular: "Guardamos los cambios"
        },
        "de-DE": {
          singular: "Änderungen wurden gespeichert"
        },
        "fr-FR": {
          singular: "Changements sauvegardés"
        },
        "ja-JP": {
          singular: "変更内容が保存されました"
        },
        "ko-KR": {
          singular: "변경 사항 저장 완료"
        },
        "pt-BR": {
          singular: "Alterações salvas"
        },
        "zh-CN": {
          singular: "已保存更改"
        }
      }
    })
  })), _v4)], 0);
}