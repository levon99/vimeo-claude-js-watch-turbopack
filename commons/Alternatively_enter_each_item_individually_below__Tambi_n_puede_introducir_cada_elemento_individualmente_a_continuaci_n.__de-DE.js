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
  let _v12 = {
      AlternativelyAddEachOneManually: (0, _v11.translate)({
        singular: "Alternatively, enter each item individually below",
        dictionary: {
          es: {
            singular: "También puede introducir cada elemento individualmente a continuación."
          },
          "de-DE": {
            singular: "Alternativ können Sie unten jedes Element einzeln eingeben."
          },
          "fr-FR": {
            singular: "Vous pouvez également saisir chaque élément individuellement ci-dessous"
          },
          "ja-JP": {
            singular: "または、各項目を以下に個別に入力してください"
          },
          "ko-KR": {
            singular: "또는 아래에 각 항목을 개별적으로 입력하세요."
          },
          "pt-BR": {
            singular: "Você também pode digitar individualmente cada item abaixo"
          },
          "zh-CN": {
            singular: "或者，在下面逐项输入"
          }
        }
      }),
      Attributes: (0, _v11.translate)({
        singular: "Attributes",
        dictionary: {
          es: {
            singular: "Atributos"
          },
          "de-DE": {
            singular: "Attribute"
          },
          "fr-FR": {
            singular: "Attributs"
          },
          "ja-JP": {
            singular: "属性"
          },
          "ko-KR": {
            singular: "속성"
          },
          "pt-BR": {
            singular: "Atributos"
          },
          "zh-CN": {
            singular: "属性"
          }
        }
      }),
      AttributesDescription: () => (0, _v11.translate)({
        singular: "Set up {BOLD}email{/BOLD}, {BOLD}firstName{/BOLD}, and {BOLD}lastName{/BOLD} as user attributes in your IdP. Add a groups attribute if you’d like to pass a group membership. You can also map your fixed IdP attributes to Vimeo's required attributes below.",
        replacements: {
          BOLD: _v0 => (0, _v1.jsx)("b", {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Configure {BOLD}correo electrónico{/BOLD}, {BOLD}nombre{/BOLD} y {BOLD}apellido{/BOLD} como atributos de usuario en su IdP. Agregue un atributo de grupos si desea pasar una membresía de grupo. También puede asignar sus atributos de IdP fijos a los atributos obligatorios de Vimeo que aparecen a continuación."
          },
          "de-DE": {
            singular: "Richte {BOLD}E-Mail-Adresse{/BOLD}, {BOLD}Vorname{/BOLD} und {BOLD}Nachname{/BOLD} als Benutzerattribute in deinem IdP ein. Füge ein Gruppenattribut hinzu, wenn du eine Gruppenmitgliedschaft übergeben möchtest. Du kannst deine festen IdP-Attribute auch den untenstehenden erforderlichen Attributen von Vimeo zuordnen."
          },
          "fr-FR": {
            singular: "Configurez l'{BOLD}adresse e-mail{/BOLD}, le {BOLD}prénom{/BOLD} et le {BOLD}nom{/BOLD} comme des attributs d'utilisateur dans votre IdP. Ajoutez un attribut de groupes si vous souhaitez transmettre une adhésion à un groupe. Vous pouvez également faire correspondre vos attributs IdP fixes aux attributs requis par Vimeo ci-dessous."
          },
          "ja-JP": {
            singular: "{BOLD}メール{/BOLD}、{BOLD}名{/BOLD}、{BOLD}姓{/BOLD}をIdPのユーザー属性として設定します。グループメンバーシップを渡す場合は、グループ属性を追加します。 固定のIdP属性を以下のVimeoの必須属性にマッピングすることもできます。"
          },
          "ko-KR": {
            singular: "IdP에서 {BOLD}이메일{/BOLD}, {BOLD}이름{/BOLD}, {BOLD}성{/BOLD}을 사용자 속성으로 설정하세요. 그룹 멤버십을 전달하려면 그룹 속성을 추가합니다. 아래에서 고정된 IdP 속성을 Vimeo의 필수 속성에 매핑할 수도 있습니다."
          },
          "pt-BR": {
            singular: "Configure {BOLD}email{/BOLD}, {BOLD}firstName{/BOLD} e {BOLD}lastName{/BOLD} como atributos de usuário no seu IdP. Adicione o atributo groups se quiser aprovar a adesão ao grupo. Você também pode mapear os atributos fixos do IdP aos atributos exigidos pelo Vimeo abaixo."
          },
          "zh-CN": {
            singular: "将电子邮件{/BOLD}{BOLD}、{BOLD}姓{/BOLD}和{/BOLD}名{BOLD}设置为身份提供商 (IdP) 中的用户属性。如果想批准群组的会员资格，请添加群组属性。您也可以在下方将固定的 IdP 属性映射到 Vimeo 要求的属性。"
          }
        }
      }),
      Cancel: (0, _v11.translate)({
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
      CertificateExtensions: (0, _v11.translate)({
        singular: "Please select a file with one of the following extensions: ",
        dictionary: {
          es: {
            singular: "Seleccione un archivo con una de las siguientes extensiones: "
          },
          "de-DE": {
            singular: "Bitte wähle eine Datei mit einer der folgenden Erweiterungen: "
          },
          "fr-FR": {
            singular: "Veuillez sélectionner un fichier portant l'une des extensions suivantes : "
          },
          "ja-JP": {
            singular: "以下の拡張子のいずれかを持つファイルを選択してください。 "
          },
          "ko-KR": {
            singular: "확장자가 다음 중 하나인 파일을 선택하세요. "
          },
          "pt-BR": {
            singular: "Selecione um arquivo com uma das seguintes extensões: "
          },
          "zh-CN": {
            singular: "请选择具有以下扩展名的文件： "
          }
        }
      }),
      ClaimDomain: (0, _v11.translate)({
        singular: "Claim your domain",
        dictionary: {
          es: {
            singular: "Reclame su dominio"
          },
          "de-DE": {
            singular: "Beanspruche deine Domain"
          },
          "fr-FR": {
            singular: "Revendiquer votre domaine"
          },
          "ja-JP": {
            singular: "ドメインを申請"
          },
          "ko-KR": {
            singular: "도메인 인증하기"
          },
          "pt-BR": {
            singular: "Registre seu domínio"
          },
          "zh-CN": {
            singular: "认领域名"
          }
        }
      }),
      ClaimDomainDescription: (0, _v11.translate)({
        singular: "To claim your organization's domain, enter it here. Vimeo will review and verify it for you.",
        dictionary: {
          es: {
            singular: "Para reclamar el dominio de su organización, ingréselo aquí. Vimeo lo revisará y verificará por usted."
          },
          "de-DE": {
            singular: "Um die Domain deiner Organisation zu beanspruchen, gib sie hier ein. Vimeo wird sie für dich überprüfen und verifizieren."
          },
          "fr-FR": {
            singular: "Pour revendiquer le domaine de votre organisation, saisissez-le ici. Vimeo l'examinera et le vérifiera pour vous."
          },
          "ja-JP": {
            singular: "組織のドメインを申請するには、ここにドメインを入力してください。 Vimeoがレビューおよび検証します。"
          },
          "ko-KR": {
            singular: "조직의 도메인을 인증하려면 여기에 입력하세요. Vimeo에서 검토하고 확인해 드립니다."
          },
          "pt-BR": {
            singular: "Para registrar o domínio da sua organização, digite-o aqui. O Vimeo o revisará e verificará para você."
          },
          "zh-CN": {
            singular: "要申请贵组织的域，请在此处输入。Vimeo 将为您审核并验证。"
          }
        }
      }),
      Claimed: (0, _v11.translate)({
        singular: "Claimed",
        dictionary: {
          es: {
            singular: "Reclamado"
          },
          "de-DE": {
            singular: "Beansprucht"
          },
          "fr-FR": {
            singular: "Revendiqué"
          },
          "ja-JP": {
            singular: "申請済み"
          },
          "ko-KR": {
            singular: "인증됨"
          },
          "pt-BR": {
            singular: "Registrado"
          },
          "zh-CN": {
            singular: "已申索"
          }
        }
      }),
      ClaimedDomains: (0, _v11.translate)({
        singular: "Claimed domains",
        dictionary: {
          es: {
            singular: "Dominios reclamados"
          },
          "de-DE": {
            singular: "Beanspruchte Domains"
          },
          "fr-FR": {
            singular: "Domaines revendiqués"
          },
          "ja-JP": {
            singular: "申請済みドメイン"
          },
          "ko-KR": {
            singular: "인증된 도메인"
          },
          "pt-BR": {
            singular: "Domínios registrados"
          },
          "zh-CN": {
            singular: "已认领的域名"
          }
        }
      }),
      CloseMappings: (0, _v11.translate)({
        singular: "Close mappings",
        dictionary: {
          es: {
            singular: "Cerrar asignaciones"
          },
          "de-DE": {
            singular: "Zuordnungen schließen"
          },
          "fr-FR": {
            singular: "Fermer les mappages"
          },
          "ja-JP": {
            singular: "マッピングを閉じる"
          },
          "ko-KR": {
            singular: "매핑 닫기"
          },
          "pt-BR": {
            singular: "Fechar mapeamentos"
          },
          "zh-CN": {
            singular: "关闭映射"
          }
        }
      }),
      ConfirmDeleteConnection: (0, _v11.translate)({
        singular: "Are you sure you want to delete this connection?",
        dictionary: {
          es: {
            singular: "¿Está seguro de que desea eliminar esta conexión?"
          },
          "de-DE": {
            singular: "Möchtest du diese Verbindung wirklich löschen?"
          },
          "fr-FR": {
            singular: "Voulez-vous vraiment supprimer cette connexion ?"
          },
          "ja-JP": {
            singular: "本当にこの接続を削除しますか？"
          },
          "ko-KR": {
            singular: "이 연결을 삭제할까요?"
          },
          "pt-BR": {
            singular: "Quer mesmo excluir essa conexão?"
          },
          "zh-CN": {
            singular: "您确定要删除此连接吗？"
          }
        }
      }),
      ConnectionCreated: (0, _v11.translate)({
        singular: "Connection created!",
        dictionary: {
          es: {
            singular: "Conexión creada"
          },
          "de-DE": {
            singular: "Verbindung hergestellt!"
          },
          "fr-FR": {
            singular: "Connexion créée."
          },
          "ja-JP": {
            singular: "接続が作成されました！"
          },
          "ko-KR": {
            singular: "연결이 생성되었습니다!"
          },
          "pt-BR": {
            singular: "Conexão criada!"
          },
          "zh-CN": {
            singular: "连接已创建！"
          }
        }
      }),
      ConnectionDeleted: (0, _v11.translate)({
        singular: "Connection deleted!",
        dictionary: {
          es: {
            singular: "Conexión eliminada"
          },
          "de-DE": {
            singular: "Verbindung gelöscht!"
          },
          "fr-FR": {
            singular: "Connexion supprimée."
          },
          "ja-JP": {
            singular: "接続が削除されました！"
          },
          "ko-KR": {
            singular: "연결이 삭제되었습니다!"
          },
          "pt-BR": {
            singular: "Conexão excluída!"
          },
          "zh-CN": {
            singular: "连接已删除！"
          }
        }
      }),
      ConnectionNameLengthValidation: (0, _v11.translate)({
        singular: "Connection name cannot be more than 255 characters long",
        dictionary: {
          es: {
            singular: "El nombre de la conexión no puede tener más de 255 caracteres"
          },
          "de-DE": {
            singular: "Der Verbindungsname darf nicht mehr als 255 Zeichen lang sein"
          },
          "fr-FR": {
            singular: "Le nom de la connexion ne peut pas comporter plus de 255 caractères"
          },
          "ja-JP": {
            singular: "接続名は255文字以下でなければなりません"
          },
          "ko-KR": {
            singular: "연결 이름은 255자를 초과할 수 없습니다"
          },
          "pt-BR": {
            singular: "O nome da conexão não pode ter mais de 255 caracteres"
          },
          "zh-CN": {
            singular: "连接名称长度不能超过 255 个字符"
          }
        }
      }),
      ConnectionNameRequired: (0, _v11.translate)({
        singular: "Connection name is required",
        dictionary: {
          es: {
            singular: "El nombre de la conexión es obligatorio"
          },
          "de-DE": {
            singular: "Verbindungsname ist erforderlich"
          },
          "fr-FR": {
            singular: "Le nom de la connexion est requis"
          },
          "ja-JP": {
            singular: "接続名は必須です"
          },
          "ko-KR": {
            singular: "연결 이름은 필수 항목입니다"
          },
          "pt-BR": {
            singular: "O nome da conexão é obrigatório"
          },
          "zh-CN": {
            singular: "连接名称为必填项"
          }
        }
      }),
      ConnectionNameExists: (0, _v11.translate)({
        singular: "Please choose different connection name",
        dictionary: {
          es: {
            singular: "Elija otro nombre de conexión"
          },
          "de-DE": {
            singular: "Wähle einen SAML-Verbindungsnamen aus."
          },
          "fr-FR": {
            singular: "Veuillez choisir un autre nom de connexion."
          },
          "ja-JP": {
            singular: "別の接続名を選択してください"
          },
          "ko-KR": {
            singular: "SAML 연결 이름을 선택하세요."
          },
          "pt-BR": {
            singular: "Escolha um nome diferente para a conexão"
          },
          "zh-CN": {
            singular: "请选择不同的连接名称"
          }
        }
      }),
      InvalidCertificate: (0, _v11.translate)({
        singular: "Invalid certificate",
        dictionary: {
          es: {
            singular: "Certificado inválido"
          },
          "de-DE": {
            singular: "Ungültiges Zertifikat"
          },
          "fr-FR": {
            singular: "Certificat invalide"
          },
          "ja-JP": {
            singular: "無効な証明書"
          },
          "ko-KR": {
            singular: "유효하지 않은 인증서"
          },
          "pt-BR": {
            singular: "Certificado inválido"
          },
          "zh-CN": {
            singular: "证书无效"
          }
        }
      }),
      ConnectionUpdated: (0, _v11.translate)({
        singular: "Connection updated!",
        dictionary: {
          es: {
            singular: "Conexión actualizada"
          },
          "de-DE": {
            singular: "Verbindung aktualisiert!"
          },
          "fr-FR": {
            singular: "Connexion mise à jour."
          },
          "ja-JP": {
            singular: "接続が更新されました！"
          },
          "ko-KR": {
            singular: "연결이 업데이트되었습니다!"
          },
          "pt-BR": {
            singular: "Conexão atualizada!"
          },
          "zh-CN": {
            singular: "连接已更新！"
          }
        }
      }),
      ConnectSaml: (0, _v11.translate)({
        singular: "Connect your company’s SAML 2.0 identity provider to Vimeo and manage your user lifecycle",
        dictionary: {
          es: {
            singular: "Conecte el proveedor de identidad SAML 2.0 de su empresa a Vimeo y gestione el ciclo de vida de sus usuarios."
          },
          "de-DE": {
            singular: "Verbinden Sie den SAML 2.0-Identitätsanbieter Ihres Unternehmens mit Vimeo und verwalten Sie Ihren Benutzerlebenszyklus."
          },
          "fr-FR": {
            singular: "Connectez le fournisseur d'identité SAML 2.0 de votre entreprise à Vimeo et gérez le cycle de vie de vos utilisateurs"
          },
          "ja-JP": {
            singular: "企業のSAML 2.0 IDプロバイダーをVimeoに接続し、ユーザーのライフサイクルを管理します"
          },
          "ko-KR": {
            singular: "회사의 SAML 2.0 ID 공급자를 Vimeo에 연결하고 사용자 라이프사이클을 관리하세요."
          },
          "pt-BR": {
            singular: "Conecte o provedor de identidade SAML 2.0 da sua empresa ao Vimeo e gerencie o ciclo de vida do usuário"
          },
          "zh-CN": {
            singular: "将贵公司的 SAML 2.0 身份提供商与 Vimeo 关联，管理用户生命周期"
          }
        }
      }),
      Copied: (0, _v11.translate)({
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
      CreateSamlConnectionDescription: (0, _v11.translate)({
        singular: "Create the connection between Vimeo and your identity provider",
        dictionary: {
          es: {
            singular: "Cree la conexión entre Vimeo y su proveedor de identidad."
          },
          "de-DE": {
            singular: "Stellen Sie die Verbindung zwischen Vimeo und Ihrem Identitätsanbieter her."
          },
          "fr-FR": {
            singular: "Créez la connexion entre Vimeo et votre fournisseur d'identité"
          },
          "ja-JP": {
            singular: "VimeoとIDプロバイダー間の接続を作成します"
          },
          "ko-KR": {
            singular: "Vimeo와 ID 공급자 간의 연결을 만듭니다."
          },
          "pt-BR": {
            singular: "Faça a conexão entre o Vimeo e seu provedor de identidade"
          },
          "zh-CN": {
            singular: "创建 Vimeo 与您的身份提供商之间的连接"
          }
        }
      }),
      CreateConnection: (0, _v11.translate)({
        singular: "Create connection",
        dictionary: {
          "zh-CN": {
            singular: "创建连接"
          }
        }
      }),
      CreateSamlConnectionHeader: (0, _v11.translate)({
        singular: "Create SAML connection",
        dictionary: {
          es: {
            singular: "Crear una conexión SAML"
          },
          "de-DE": {
            singular: "SAML-Verbindung erstellen"
          },
          "fr-FR": {
            singular: "Créer une connexion SAML"
          },
          "ja-JP": {
            singular: "SAML接続を作成"
          },
          "ko-KR": {
            singular: "SAML 연결 만들기"
          },
          "pt-BR": {
            singular: "Criar conexão SAML"
          },
          "zh-CN": {
            singular: "创建 SAML 连接"
          }
        }
      }),
      Delete: (0, _v11.translate)({
        singular: "Delete",
        dictionary: {
          es: {
            singular: "Eliminar"
          },
          "de-DE": {
            singular: "Löschen"
          },
          "fr-FR": {
            singular: "Supprimer"
          },
          "ja-JP": {
            singular: "削除"
          },
          "ko-KR": {
            singular: "삭제"
          },
          "pt-BR": {
            singular: "Excluir"
          },
          "zh-CN": {
            singular: "删除"
          }
        }
      }),
      DefaultRole: (0, _v11.translate)({
        singular: "Default role",
        dictionary: {
          es: {
            singular: "Rol predeterminado"
          },
          "de-DE": {
            singular: "Standardrolle"
          },
          "fr-FR": {
            singular: "Rôle par défaut"
          },
          "ja-JP": {
            singular: "デフォルトの役割"
          },
          "ko-KR": {
            singular: "기본 역할"
          },
          "pt-BR": {
            singular: "Função-padrão"
          },
          "zh-CN": {
            singular: "默认角色"
          }
        }
      }),
      DefaultRoleDescription: (0, _v11.translate)({
        singular: "Set a role which will be given to all newly provisioned users",
        dictionary: {
          es: {
            singular: "Establezca un rol que se asignará a todos los usuarios recién aprovisionados."
          },
          "de-DE": {
            singular: "Legen Sie eine Rolle fest, die allen neu bereitgestellten Nutzern zugewiesen wird."
          },
          "fr-FR": {
            singular: "Définissez un rôle qui sera attribué à tous les utilisateurs nouvellement provisionnés"
          },
          "ja-JP": {
            singular: "新しくプロビジョニングされたすべてのユーザーに付与される役割を設定します"
          },
          "ko-KR": {
            singular: "새로 프로비저닝된 모든 사용자에게 부여될 역할을 설정합니다."
          },
          "pt-BR": {
            singular: "Defina uma função padrão para novos usuários provisionados"
          },
          "zh-CN": {
            singular: "设置一个将分配给所有新配置用户的角色"
          }
        }
      }),
      DomainAlreadyRequested: (0, _v11.translate)({
        singular: "This domain is already requested",
        dictionary: {
          es: {
            singular: "Este dominio ya se solicitó"
          },
          "de-DE": {
            singular: "Diese Domain wurde bereits angefordert"
          },
          "fr-FR": {
            singular: "Ce domaine est déjà demandé"
          },
          "ja-JP": {
            singular: "このドメインはすでにリクエストされています"
          },
          "ko-KR": {
            singular: "이 도메인은 이미 요청되었습니다."
          },
          "pt-BR": {
            singular: "Esse domínio já foi solicitado"
          },
          "zh-CN": {
            singular: "该域名已被申请"
          }
        }
      }),
      DomainRequestCreated: (0, _v11.translate)({
        singular: "Domain request created!",
        dictionary: {
          es: {
            singular: "Solicitud de dominio creada"
          },
          "de-DE": {
            singular: "Domain-Anfrage erstellt!"
          },
          "fr-FR": {
            singular: "Demande de domaine créée."
          },
          "ja-JP": {
            singular: "ドメインリクエストが作成されました！"
          },
          "ko-KR": {
            singular: "도메인 요청이 생성되었습니다!"
          },
          "pt-BR": {
            singular: "Solicitação de domínio criada!"
          },
          "zh-CN": {
            singular: "域名请求已创建！"
          }
        }
      }),
      DomainDeleted: (0, _v11.translate)({
        singular: "Domain deleted!",
        dictionary: {
          es: {
            singular: "Dominio eliminado"
          },
          "de-DE": {
            singular: "Domain gelöscht!"
          },
          "fr-FR": {
            singular: "Domaine supprimé."
          },
          "ja-JP": {
            singular: "ドメインを削除しました！"
          },
          "ko-KR": {
            singular: "도메인이 삭제되었습니다!"
          },
          "pt-BR": {
            singular: "Domínio excluído!"
          },
          "zh-CN": {
            singular: "域名已删除！"
          }
        }
      }),
      DomainDeleteConfirm: (0, _v11.translate)({
        singular: "Are you sure you want to delete this domain?",
        dictionary: {
          es: {
            singular: "¿Está seguro de que desea eliminar este dominio?"
          },
          "de-DE": {
            singular: "Möchtest du diese Domain wirklich löschen?"
          },
          "fr-FR": {
            singular: "Voulez-vous vraiment supprimer ce domaine ?"
          },
          "ja-JP": {
            singular: "本当にこのドメインを削除しますか？"
          },
          "ko-KR": {
            singular: "이 도메인을 삭제할까요?"
          },
          "pt-BR": {
            singular: "Quer mesmo excluir o domínio?"
          },
          "zh-CN": {
            singular: "您确定要删除此域吗？"
          }
        }
      }),
      Domains: (0, _v11.translate)({
        singular: "Domains",
        dictionary: {
          es: {
            singular: "Dominios"
          },
          "fr-FR": {
            singular: "Domaines"
          },
          "ja-JP": {
            singular: "ドメイン"
          },
          "ko-KR": {
            singular: "도메인"
          },
          "pt-BR": {
            singular: "Domínios"
          },
          "zh-CN": {
            singular: "域名"
          }
        }
      }),
      Edit: (0, _v11.translate)({
        singular: "Edit",
        dictionary: {
          es: {
            singular: "Editar"
          },
          "de-DE": {
            singular: "Bearbeiten"
          },
          "fr-FR": {
            singular: "Modifier"
          },
          "ja-JP": {
            singular: "編集"
          },
          "ko-KR": {
            singular: "편집"
          },
          "pt-BR": {
            singular: "Editar"
          },
          "zh-CN": {
            singular: "编辑"
          }
        }
      }),
      EditSamlConnectionDescription: (0, _v11.translate)({
        singular: "Edit the connection between Vimeo and your identity provider",
        dictionary: {
          es: {
            singular: "Edite la conexión entre Vimeo y su proveedor de identidad."
          },
          "de-DE": {
            singular: "Bearbeiten die Verbindung zwischen Vimeo und Ihrem Identitätsanbieter."
          },
          "fr-FR": {
            singular: "Modifiez la connexion entre Vimeo et votre fournisseur d'identité"
          },
          "ja-JP": {
            singular: "VimeoとIDプロバイダー間の接続を編集します"
          },
          "ko-KR": {
            singular: "Vimeo와 ID 공급자 간의 연결을 편집합니다."
          },
          "pt-BR": {
            singular: "Edite a conexão entre o Vimeo e seu provedor de identidade"
          },
          "zh-CN": {
            singular: "编辑 Vimeo 和您的身份提供商之间的连接"
          }
        }
      }),
      EditSamlConnectionHeader: (0, _v11.translate)({
        singular: "Edit SAML connection",
        dictionary: {
          es: {
            singular: "Editar conexión SAML"
          },
          "de-DE": {
            singular: "SAML-Verbindung bearbeiten"
          },
          "fr-FR": {
            singular: "Modifier la connexion SAML"
          },
          "ja-JP": {
            singular: "SAML接続を編集"
          },
          "ko-KR": {
            singular: "SAML 연결 편집"
          },
          "pt-BR": {
            singular: "Editar conexão SAML"
          },
          "zh-CN": {
            singular: "编辑 SAML 连接"
          }
        }
      }),
      EnableConnection: (0, _v11.translate)({
        singular: "Enable connection",
        dictionary: {
          es: {
            singular: "Habilitar la conexión"
          },
          "de-DE": {
            singular: "Verbindung aktivieren"
          },
          "fr-FR": {
            singular: "Activer la connexion"
          },
          "ja-JP": {
            singular: "接続を有効にする"
          },
          "ko-KR": {
            singular: "연결 활성화"
          },
          "pt-BR": {
            singular: "Ativar conexão"
          },
          "zh-CN": {
            singular: "启用连接"
          }
        }
      }),
      EnableConnectionDescription: (0, _v11.translate)({
        singular: "Turn connection on or off",
        dictionary: {
          es: {
            singular: "Activar o desactivar la conexión"
          },
          "de-DE": {
            singular: "Verbindung ein- oder ausschalten"
          },
          "fr-FR": {
            singular: "Activer ou désactiver la connexion"
          },
          "ja-JP": {
            singular: "接続をオンまたはオフにする"
          },
          "ko-KR": {
            singular: "연결 켜기/끄기"
          },
          "pt-BR": {
            singular: "Ativar ou desativar conexão"
          },
          "zh-CN": {
            singular: "启用或关闭连接"
          }
        }
      }),
      EnableForUsersInChina: (0, _v11.translate)({
        singular: "Enable for users in China",
        dictionary: {
          es: {
            singular: "Habilitar para usuarios en China"
          },
          "de-DE": {
            singular: "Für Benutzer in China aktivieren"
          },
          "fr-FR": {
            singular: "Activer pour les utilisateurs en Chine"
          },
          "ja-JP": {
            singular: "中国のユーザー向けに有効にする"
          },
          "ko-KR": {
            singular: "중국 사용자에 대해 활성화"
          },
          "pt-BR": {
            singular: "Ativar para usuários na China"
          },
          "zh-CN": {
            singular: "为中国用户启用"
          }
        }
      }),
      EnableForUsersToCustomDomain: (0, _v11.translate)({
        singular: "Enable for your custom subdomain",
        dictionary: {
          es: {
            singular: "Habilite para su subdominio personalizado"
          },
          "de-DE": {
            singular: "Für Ihre benutzerdefinierte Subdomain aktivieren"
          },
          "fr-FR": {
            singular: "Activez pour votre sous-domaine personnalisé"
          },
          "ja-JP": {
            singular: "カスタムサブドメインで有効化"
          },
          "ko-KR": {
            singular: "사용자 지정 서브도메인에서 사용 가능하도록 활성화하기"
          },
          "pt-BR": {
            singular: "Ativar no seu subdomínio customizado"
          },
          "zh-CN": {
            singular: "允许自定义子域"
          }
        }
      }),
      EnterCertificate: (0, _v11.translate)({
        singular: "Enter certificate...",
        dictionary: {
          es: {
            singular: "Ingrese un certificado..."
          },
          "de-DE": {
            singular: "Zertifikat eingeben ..."
          },
          "fr-FR": {
            singular: "Saisir le certificat..."
          },
          "ja-JP": {
            singular: "証明書を入力..."
          },
          "ko-KR": {
            singular: "인증서 입력..."
          },
          "pt-BR": {
            singular: "Digitar certificado..."
          },
          "zh-CN": {
            singular: "输入证书..."
          }
        }
      }),
      EnterDomainName: (0, _v11.translate)({
        singular: "Enter domain name...",
        dictionary: {
          es: {
            singular: "Ingrese el nombre del dominio..."
          },
          "de-DE": {
            singular: "Gib deinen Domainnamen ein ..."
          },
          "fr-FR": {
            singular: "Saisir le nom du domaine..."
          },
          "ja-JP": {
            singular: "ドメイン名を入力..."
          },
          "ko-KR": {
            singular: "도메인 이름 입력..."
          },
          "pt-BR": {
            singular: "Digitar nome de domínio..."
          },
          "zh-CN": {
            singular: "输入域名..."
          }
        }
      }),
      EnterEmail: (0, _v11.translate)({
        singular: "Enter email...",
        dictionary: {
          es: {
            singular: "Ingrese el correo electrónico..."
          },
          "de-DE": {
            singular: "E-Mail-Adresse eingeben ..."
          },
          "fr-FR": {
            singular: "Saisir votre adresse e-mail..."
          },
          "ja-JP": {
            singular: "メールアドレスを入力..."
          },
          "ko-KR": {
            singular: "이메일 입력..."
          },
          "pt-BR": {
            singular: "Digitar e-mail..."
          },
          "zh-CN": {
            singular: "输入电子邮件..."
          }
        }
      }),
      EnterFirstName: (0, _v11.translate)({
        singular: "Enter firstName...",
        dictionary: {
          es: {
            singular: "Ingrese el nombre..."
          },
          "de-DE": {
            singular: "Vorname eingeben ..."
          },
          "fr-FR": {
            singular: "Saisir le prénom..."
          },
          "ja-JP": {
            singular: "名を入力..."
          },
          "ko-KR": {
            singular: "이름 입력..."
          },
          "pt-BR": {
            singular: "Digitar firstName..."
          },
          "zh-CN": {
            singular: "输入名字..."
          }
        }
      }),
      EnterGroups: (0, _v11.translate)({
        singular: "Enter groups...",
        dictionary: {
          es: {
            singular: "Ingrese grupos..."
          },
          "de-DE": {
            singular: "Gruppen eingeben ..."
          },
          "fr-FR": {
            singular: "Saisir les groupes..."
          },
          "ja-JP": {
            singular: "グループを入力..."
          },
          "ko-KR": {
            singular: "그룹 입력..."
          },
          "pt-BR": {
            singular: "Digitar groups..."
          },
          "zh-CN": {
            singular: "输入群组..."
          }
        }
      }),
      EnterLastName: (0, _v11.translate)({
        singular: "Enter lastName...",
        dictionary: {
          es: {
            singular: "Ingrese el apellido..."
          },
          "de-DE": {
            singular: "Nachname eingeben ..."
          },
          "fr-FR": {
            singular: "Saisir le nom..."
          },
          "ja-JP": {
            singular: "姓を入力..."
          },
          "ko-KR": {
            singular: "성 입력..."
          },
          "pt-BR": {
            singular: "Digitar lastName..."
          },
          "zh-CN": {
            singular: "输入姓氏..."
          }
        }
      }),
      EnterName: (0, _v11.translate)({
        singular: "Enter name...",
        dictionary: {
          es: {
            singular: "Ingrese un nombre..."
          },
          "de-DE": {
            singular: "Namen eingeben ..."
          },
          "fr-FR": {
            singular: "Saisir le nom..."
          },
          "ja-JP": {
            singular: "名前を入力..."
          },
          "ko-KR": {
            singular: "이름 입력..."
          },
          "pt-BR": {
            singular: "Digitar nome..."
          },
          "zh-CN": {
            singular: "输入名称..."
          }
        }
      }),
      EnterUrl: (0, _v11.translate)({
        singular: "Enter URL...",
        dictionary: {
          es: {
            singular: "Ingrese la URL..."
          },
          "de-DE": {
            singular: "URL eingeben ..."
          },
          "fr-FR": {
            singular: "Saisir l'URL..."
          },
          "ja-JP": {
            singular: "URLを入力..."
          },
          "ko-KR": {
            singular: "URL 입력..."
          },
          "pt-BR": {
            singular: "Digitar URL..."
          },
          "zh-CN": {
            singular: "输入 URL..."
          }
        }
      }),
      Finish: (0, _v11.translate)({
        singular: "Finish",
        dictionary: {
          es: {
            singular: "Terminar"
          },
          "de-DE": {
            singular: "Beenden"
          },
          "fr-FR": {
            singular: "Terminer"
          },
          "ja-JP": {
            singular: "終了"
          },
          "ko-KR": {
            singular: "다음"
          },
          "pt-BR": {
            singular: "Terminar"
          },
          "zh-CN": {
            singular: "完成"
          }
        }
      }),
      FollowGuide: (0, _v11.translate)({
        singular: "Follow our step-by-step guide here",
        dictionary: {
          es: {
            singular: "Siga nuestra guía paso a paso aquí"
          },
          "de-DE": {
            singular: "Folge unserer Schritt-für-Schritt-Anleitung hier"
          },
          "fr-FR": {
            singular: "Suivez notre guide étape par étape ici"
          },
          "ja-JP": {
            singular: "こちらのステップバイステップガイドに従ってください"
          },
          "ko-KR": {
            singular: "여기에서 단계별 가이드를 확인하세요."
          },
          "pt-BR": {
            singular: "Siga nosso guia passo a passo aqui"
          },
          "zh-CN": {
            singular: "于此处查看我们的分步指南"
          }
        }
      }),
      FollowOurGuide: (0, _v11.translate)({
        singular: "Follow our step-by-step guide",
        dictionary: {
          es: {
            singular: "Siga nuestra guía paso a paso"
          },
          "de-DE": {
            singular: "Folge unserer Schritt-für-Schritt-Anleitung"
          },
          "fr-FR": {
            singular: "Suivez notre guide étape par étape"
          },
          "ja-JP": {
            singular: "ステップバイステップガイドに従ってください"
          },
          "ko-KR": {
            singular: "단계별 가이드 따르기"
          },
          "pt-BR": {
            singular: "Siga nosso guia passo a passo"
          },
          "zh-CN": {
            singular: "遵循我们的分步指南"
          }
        }
      }),
      ForceSSO: (0, _v11.translate)({
        singular: "Force SSO",
        dictionary: {
          es: {
            singular: "Forzar el SSO"
          },
          "de-DE": {
            singular: "SSO erzwingen"
          },
          "fr-FR": {
            singular: "Forcer l'authentification unique"
          },
          "ja-JP": {
            singular: "SSOを強制"
          },
          "ko-KR": {
            singular: "SSO 강제 적용"
          },
          "pt-BR": {
            singular: "Forçar SSO"
          },
          "zh-CN": {
            singular: "强制 SSO"
          }
        }
      }),
      ForceSSODescription: (0, _v11.translate)({
        singular: "Disable login by email & password for users with SSO",
        dictionary: {
          es: {
            singular: "Deshabilite el inicio de sesión con correo electrónico y contraseña para los usuarios con SSO."
          },
          "de-DE": {
            singular: "Deaktivieren Sie die Anmeldung per E-Mail und Kennwort für Benutzer mit SSO."
          },
          "fr-FR": {
            singular: "Désactivez la connexion par e-mail et mot de passe pour les utilisateurs avec SSO"
          },
          "ja-JP": {
            singular: "SSOを使用するユーザーのメールとパスワードによるログインを無効にします"
          },
          "ko-KR": {
            singular: "SSO 사용자의 경우 이메일 및 비밀번호로 로그인을 비활성화합니다."
          },
          "pt-BR": {
            singular: "Desative login por e-mail e senha para usuários com SSO"
          },
          "zh-CN": {
            singular: "禁用使用 SSO 的用户通过电子邮件和密码登录"
          }
        }
      }),
      IDPCertificate: (0, _v11.translate)({
        singular: "IdP certificate",
        dictionary: {
          es: {
            singular: "Certificado de IdP"
          },
          "de-DE": {
            singular: "IdP-Zertifikat"
          },
          "fr-FR": {
            singular: "Certificat IdP"
          },
          "ja-JP": {
            singular: "IdP証明書"
          },
          "ko-KR": {
            singular: "IdP 인증서"
          },
          "pt-BR": {
            singular: "Certificado do IdP"
          },
          "zh-CN": {
            singular: "IdP 证书"
          }
        }
      }),
      IdentityProviderMetadata: (0, _v11.translate)({
        singular: "Identity provider metadata",
        dictionary: {
          es: {
            singular: "Metadatos del proveedor de identidad"
          },
          "de-DE": {
            singular: "Metadaten des Identitätsanbieters"
          },
          "fr-FR": {
            singular: "Métadonnées du fournisseur d'identité"
          },
          "ja-JP": {
            singular: "IDプロバイダーのメタデータ"
          },
          "ko-KR": {
            singular: "ID 공급자 메타데이터"
          },
          "pt-BR": {
            singular: "Metadados do provedor de identidade"
          },
          "zh-CN": {
            singular: "身份提供商元数据"
          }
        }
      }),
      JITProvisioning: (0, _v11.translate)({
        singular: "JIT provisioning",
        dictionary: {
          es: {
            singular: "Aprovisionamiento JIT"
          },
          "de-DE": {
            singular: "JIT-Bereitstellung"
          },
          "fr-FR": {
            singular: "Provisionnement JIT"
          },
          "ja-JP": {
            singular: "JITプロビジョニング"
          },
          "ko-KR": {
            singular: "JIT 프로비저닝"
          },
          "pt-BR": {
            singular: "Provisionamento JIT"
          },
          "zh-CN": {
            singular: "JIT 预置"
          }
        }
      }),
      JITProvisioningDescription: (0, _v11.translate)({
        singular: "Automatically provision all users who have email addresses with your organization’s domain",
        dictionary: {
          es: {
            singular: "Aprovisione automáticamente a todos los usuarios que tengan direcciones de correo electrónico con el dominio de su organización."
          },
          "de-DE": {
            singular: "Stellen Sie automatisch alle Benutzer bereit, die über E-Mail-Adressen mit der Domain deines Unternehmens verfügen."
          },
          "fr-FR": {
            singular: "Provisionnez automatiquement tous les utilisateurs ayant une adresse e-mail avec le domaine de votre organisation"
          },
          "ja-JP": {
            singular: "組織のドメインのメールアドレスを持つすべてのユーザーを自動的にプロビジョニングします"
          },
          "ko-KR": {
            singular: "조직 도메인의 이메일 주소를 가진 모든 사용자를 자동으로 프로비저닝합니다."
          },
          "pt-BR": {
            singular: "Provisione automaticamente todos os usuários que tenham endereços de e-mail com o domínio da sua organização"
          },
          "zh-CN": {
            singular: "自动预置所有电子邮件地址属于贵组织域名的用户"
          }
        }
      }),
      JITReprovisioning: (0, _v11.translate)({
        singular: "Allow reprovisioning",
        dictionary: {
          es: {
            singular: "Permitir el reaprovisionamiento"
          },
          "de-DE": {
            singular: "Reprovisionierung erlauben"
          },
          "fr-FR": {
            singular: "Autoriser le reprovisionnement"
          },
          "ja-JP": {
            singular: "再プロビジョニングを許可する"
          },
          "ko-KR": {
            singular: "리프로비저닝 허용하기"
          },
          "pt-BR": {
            singular: "Permitir reprovisionamento"
          },
          "zh-CN": {
            singular: "允许重新配置"
          }
        }
      }),
      JITReprovisioningDescription: (0, _v11.translate)({
        singular: "Allow users who have been manually removed from the team to be reprovisioned automatically with JIT",
        dictionary: {
          es: {
            singular: "Permita que los usuarios que se eliminaron de forma manual del equipo sean reaprovisionados automáticamente con JIT."
          },
          "de-DE": {
            singular: "Erlauben Sie Benutzern, die manuell aus dem Team entfernt wurden, automatisch mit JIT wieder in das Team aufgenommen zu werden."
          },
          "fr-FR": {
            singular: "Autorisez le reprovisionnement des utilisateurs qui ont été retirés manuellement de l'équipe avec JIT"
          },
          "ja-JP": {
            singular: "チームから手動で削除されたユーザーが、JITを使用して自動的に再プロビジョニングされるのを許可します"
          },
          "ko-KR": {
            singular: "팀에서 수동으로 삭제된 사용자를 JIT로 자동 리프로비저닝할 수 있도록 허용합니다."
          },
          "pt-BR": {
            singular: "Permita que usuários removidos manualmente da equipe sejam provisionados novamente com JIT"
          },
          "zh-CN": {
            singular: "允许使用 JIT 自动重新配置已从团队中手动移除的用户"
          }
        }
      }),
      JITReprovisioningTooltip: (0, _v11.translate)({
        singular: "JIT provisioning must be enabled",
        dictionary: {
          es: {
            singular: "El aprovisionamiento JIT debe estar habilitado"
          },
          "de-DE": {
            singular: "Die JIT-Bereitstellung muss aktiviert werden"
          },
          "fr-FR": {
            singular: "Le provisionnement JIT doit être activé"
          },
          "ja-JP": {
            singular: "JITプロビジョニングを有効にする必要があります"
          },
          "ko-KR": {
            singular: "적시(JIT) 프로비저닝이 활성화되어 있어야 합니다."
          },
          "pt-BR": {
            singular: "O provisionamento JIT deve estar ativado"
          },
          "zh-CN": {
            singular: "必须启用 JIT 预置"
          }
        }
      }),
      LogoutURL: (0, _v11.translate)({
        singular: "Logout redirect URL",
        dictionary: {
          es: {
            singular: "URL de redireccionamiento para el cierre de sesión"
          },
          "de-DE": {
            singular: "Abmelde-Weiterleitungs-URL"
          },
          "fr-FR": {
            singular: "URL de redirection de déconnexion"
          },
          "ja-JP": {
            singular: "ログアウトリダイレクトURL"
          },
          "ko-KR": {
            singular: "로그아웃 리디렉션 URL"
          },
          "pt-BR": {
            singular: "URL de redirecionamento de saída"
          },
          "zh-CN": {
            singular: "退出登录重定向 URL"
          }
        }
      }),
      LogoutURLDescription: (0, _v11.translate)({
        singular: "Redirect users to a URL when they log out of your account",
        dictionary: {
          es: {
            singular: "Redirija a los usuarios a una URL cuando cierren sesión en su cuenta."
          },
          "de-DE": {
            singular: "Leiten Sie Benutzer zu einer URL um, wenn sie sich von Ihrem Konto abmelden."
          },
          "fr-FR": {
            singular: "Redirigez les utilisateurs vers une URL lorsqu'ils se déconnectent de votre compte"
          },
          "ja-JP": {
            singular: "ユーザーがアカウントからログアウトするときにURLにリダイレクトします"
          },
          "ko-KR": {
            singular: "사용자가 계정에서 로그아웃할 때 특정 URL로 리디렉션합니다."
          },
          "pt-BR": {
            singular: "Redirecione os usuários a um URL quando saírem da sua conta"
          },
          "zh-CN": {
            singular: "当用户退出您的账户时，将其重定向到指定 URL"
          }
        }
      }),
      Mappings: (0, _v11.translate)({
        singular: "Mappings (optional)",
        dictionary: {
          "zh-CN": {
            singular: "映射（可选）"
          }
        }
      }),
      MappingsDescription: (0, _v11.translate)({
        singular: "If you can’t set custom IdP attribute statements, you can map them to Vimeo’s required attributes below",
        dictionary: {
          es: {
            singular: "Si no puede configurar declaraciones de atributos de IdP personalizados, puede asignarlos a los atributos requeridos de Vimeo a continuación."
          },
          "de-DE": {
            singular: "Wenn Sie keine benutzerdefinierten IdP-Attribut-Anweisungen festlegen können, können Sie sie den erforderlichen Attributen von Vimeo unten zuordnen."
          },
          "fr-FR": {
            singular: "Si vous ne pouvez pas définir d'instructions d'attributs IdP personnalisées, vous pouvez les faire correspondre aux attributs requis par Vimeo ci-dessous"
          },
          "ja-JP": {
            singular: "カスタムIdP属性ステートメントを設定できない場合は、以下のVimeoの必須属性にマッピングできます"
          },
          "ko-KR": {
            singular: "커스텀 IdP 속성 구문을 설정할 수 없는 경우 아래에서 Vimeo의 필수 속성에 매핑할 수 있습니다."
          },
          "pt-BR": {
            singular: "Se não for possível definir instruções de atributos personalizados para o IdP, é possível mapear abaixo os atributos exigidos pelo Vimeo"
          },
          "zh-CN": {
            singular: "如果您无法设置自定义 IdP 属性语句，您可以将其映射到下面的 Vimeo 必需属性"
          }
        }
      }),
      Manage: (0, _v11.translate)({
        singular: "Manage",
        dictionary: {
          es: {
            singular: "Administrar"
          },
          "de-DE": {
            singular: "Verwalten"
          },
          "fr-FR": {
            singular: "Gérer"
          },
          "ja-JP": {
            singular: "管理"
          },
          "ko-KR": {
            singular: "관리"
          },
          "pt-BR": {
            singular: "Gerenciar"
          },
          "zh-CN": {
            singular: "管理"
          }
        }
      }),
      OnlyTheAccountOwnerCanSetUpApiApps: (0, _v11.translate)({
        singular: "Only the account owner can set up API apps",
        dictionary: {
          es: {
            singular: "Solo el propietario de la cuenta puede configurar aplicaciones API."
          },
          "de-DE": {
            singular: "Nur der Kontoinhaber kann API-Apps einrichten."
          },
          "fr-FR": {
            singular: "Seul le propriétaire du compte peut configurer des applications API."
          },
          "ja-JP": {
            singular: "APIアプリを設定できるのはアカウントの所有者のみです。"
          },
          "ko-KR": {
            singular: "계정 소유자만 API 앱을 설정할 수 있습니다."
          },
          "pt-BR": {
            singular: "Somente o proprietário da conta pode configurar aplicativos de API."
          },
          "zh-CN": {
            singular: "只有账户所有者可以设置 API 应用程序。"
          }
        }
      }),
      Pending: (0, _v11.translate)({
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
      ProvideValidMetadataFile: (0, _v11.translate)({
        singular: "Please provide valid metadata xml file",
        dictionary: {
          es: {
            singular: "Proporcione un archivo XML de metadatos válido."
          },
          "de-DE": {
            singular: "Bitte stellen Sie eine gültige Metadaten-XML-Datei zur Verfügung."
          },
          "fr-FR": {
            singular: "Veuillez fournir un fichier XML de métadonnées valide"
          },
          "ja-JP": {
            singular: "有効なメタデータXMLファイルを提供してください"
          },
          "ko-KR": {
            singular: "유효한 메타데이터 xml 파일을 제공하세요."
          },
          "pt-BR": {
            singular: "Forneça um arquivo XML de metadados válido"
          },
          "zh-CN": {
            singular: "请提供有效的元数据 xml 文件"
          }
        }
      }),
      ProvisioningOptions: (0, _v11.translate)({
        singular: "Provisioning options",
        dictionary: {
          es: {
            singular: "Opciones de aprovisionamiento"
          },
          "de-DE": {
            singular: "Bereitstellungsoptionen"
          },
          "fr-FR": {
            singular: "Options de provisionnement"
          },
          "ja-JP": {
            singular: "プロビジョニングのオプション"
          },
          "ko-KR": {
            singular: "프로비저닝 옵션"
          },
          "pt-BR": {
            singular: "Opções de provisionamento"
          },
          "zh-CN": {
            singular: "预置选项"
          }
        }
      }),
      ProvisioningOptionsDescription: (0, _v11.translate)({
        singular: "Set up automatic provisioning and user management preferences",
        dictionary: {
          es: {
            singular: "Configure las preferencias de aprovisionamiento automático y gestión de usuarios."
          },
          "de-DE": {
            singular: "Richten Sie Einstellungen für die automatische Bereitstellung und Benutzerverwaltung ein"
          },
          "fr-FR": {
            singular: "Configurez vos préférences de provisionnement automatique et de gestion des utilisateurs"
          },
          "ja-JP": {
            singular: "自動プロビジョニングとユーザー管理の詳細設定を行います"
          },
          "ko-KR": {
            singular: "자동 프로비저닝 및 사용자 관리 환경설정을 구성하세요."
          },
          "pt-BR": {
            singular: "Configure o provisionamento automático e as preferências de gerenciamento dos usuários"
          },
          "zh-CN": {
            singular: "设置自动预置和用户管理首选项"
          }
        }
      }),
      RequestVerification: (0, _v11.translate)({
        singular: "Request verification",
        dictionary: {
          es: {
            singular: "Solicitar verificación"
          },
          "de-DE": {
            singular: "Bestätigung anfordern"
          },
          "fr-FR": {
            singular: "Demander une vérification"
          },
          "ja-JP": {
            singular: "認証をリクエスト"
          },
          "ko-KR": {
            singular: "검증 요청"
          },
          "pt-BR": {
            singular: "Solicitar verificação"
          },
          "zh-CN": {
            singular: "请求验证"
          }
        }
      }),
      SAMLConnectionName: (0, _v11.translate)({
        singular: "SAML connection name",
        dictionary: {
          es: {
            singular: "Nombre de la conexión SAML"
          },
          "de-DE": {
            singular: "Name der SAML-Verbindung"
          },
          "fr-FR": {
            singular: "Nom de la connexion SAML"
          },
          "ja-JP": {
            singular: "SAML接続名"
          },
          "ko-KR": {
            singular: "SAML 연결 이름"
          },
          "pt-BR": {
            singular: "Nome da conexão SAML"
          },
          "zh-CN": {
            singular: "SAML 连接名称"
          }
        }
      }),
      SAMLConnectionNameDescription: (0, _v11.translate)({
        singular: "Choose a SAML connection name. This is simply an internal record and does not need to match the corresponding SAML app in your IdP.",
        dictionary: {
          es: {
            singular: "Elija un nombre de conexión SAML. Se trata simplemente de un registro interno, y no es necesario que coincida con la aplicación SAML correspondiente en su IdP."
          },
          "de-DE": {
            singular: "Wähle einen SAML-Verbindungsnamen aus. Dies ist lediglich eine interne Aufzeichnung und muss nicht mit der entsprechenden SAML-App in deinem IdP übereinstimmen."
          },
          "fr-FR": {
            singular: "Choisissez un nom de connexion SAML. Il s'agit simplement d'un enregistrement interne qui n'a pas besoin de correspondre à l'application SAML de votre IdP."
          },
          "ja-JP": {
            singular: "SAML接続名を選択します。 これは単なる内部記録であり、IdPの対応するSAMLアプリと一致する必要はありません。"
          },
          "ko-KR": {
            singular: "SAML 연결 이름을 선택하세요. 이는 단순히 내부 기록일 뿐이며 IdP의 해당 SAML 앱과 일치할 필요는 없습니다."
          },
          "pt-BR": {
            singular: "Escolha um nome para a conexão SAML. Ele será usado apenas para registro interno e não precisa corresponder ao aplicativo SAML do seu IdP."
          },
          "zh-CN": {
            singular: "选择 SAML 连接名称。这只是一个内部记录，不需要与 IdP 中相应的 SAML 应用程序匹配。"
          }
        }
      }),
      SAMLConnections: (0, _v11.translate)({
        singular: "SAML connections",
        dictionary: {
          es: {
            singular: "Conexiones SAML"
          },
          "de-DE": {
            singular: "SAML-Verbindungen"
          },
          "fr-FR": {
            singular: "Connexions SAML"
          },
          "ja-JP": {
            singular: "SAML接続"
          },
          "ko-KR": {
            singular: "SAML 연결"
          },
          "pt-BR": {
            singular: "Conexões SAML"
          },
          "zh-CN": {
            singular: "SAML 连接"
          }
        }
      }),
      SAMLConnectionsDescription: (0, _v11.translate)({
        singular: "Create and manage the SAML connection between Vimeo and your identity provider",
        dictionary: {
          es: {
            singular: "Cree y gestione la conexión SAML entre Vimeo y su proveedor de identidad."
          },
          "de-DE": {
            singular: "Erstellen und verwalten Sie die SAML-Verbindung zwischen Vimeo und Ihrem Identitätsanbieter."
          },
          "fr-FR": {
            singular: "Créez et gérez la connexion SAML entre Vimeo et votre fournisseur d'identité"
          },
          "ja-JP": {
            singular: "VimeoとIDプロバイダー間のSAML接続を作成および管理します"
          },
          "ko-KR": {
            singular: "Vimeo와 ID 공급자 간의 SAML 연결을 생성하고 관리하세요."
          },
          "pt-BR": {
            singular: "Crie e gerencie a conexão SAML entre o Vimeo e seu provedor de identidade"
          },
          "zh-CN": {
            singular: "创建和管理 Vimeo 与您的身份提供商之间的 SAML 连接"
          }
        }
      }),
      SamlConnectionInfoDescription: (0, _v11.translate)({
        singular: "To complete set up, test your URL and claim your domain",
        dictionary: {
          es: {
            singular: "Para completar la configuración, pruebe su URL y reclame su dominio."
          },
          "de-DE": {
            singular: "Um die Einrichtung abzuschließen, testen Sie Ihre URL und beanspruchen Sie Ihre Domain."
          },
          "fr-FR": {
            singular: "Pour terminer la configuration, testez votre URL et revendiquez votre domaine"
          },
          "ja-JP": {
            singular: "設定を完了するには、URLをテストしてドメインを申請します"
          },
          "ko-KR": {
            singular: "설정을 완료하려면 URL을 테스트하고 도메인을 인증하세요."
          },
          "pt-BR": {
            singular: "Para concluir a configuração, teste o URL e registre o domínio"
          },
          "zh-CN": {
            singular: "要完成设置，请测试您的 URL 并申请您的域名"
          }
        }
      }),
      SamlConnectionInfoHeader: (0, _v11.translate)({
        singular: "Your SAML connection has been created",
        dictionary: {
          es: {
            singular: "Se ha creado su conexión SAML"
          },
          "de-DE": {
            singular: "Deine SAML-Verbindung wurde erstellt"
          },
          "fr-FR": {
            singular: "Votre connexion SAML a été créée"
          },
          "ja-JP": {
            singular: "SAML接続が作成されました"
          },
          "ko-KR": {
            singular: "SAML 연결이 생성되었습니다."
          },
          "pt-BR": {
            singular: "Sua conexão SAML foi criada"
          },
          "zh-CN": {
            singular: "您的 SAML 连接已创建"
          }
        }
      }),
      Save: (0, _v11.translate)({
        singular: "Save",
        dictionary: {
          es: {
            singular: "Guardar"
          },
          "de-DE": {
            singular: "Speichern"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "保存"
          },
          "ko-KR": {
            singular: "저장"
          },
          "pt-BR": {
            singular: "Salvar"
          },
          "zh-CN": {
            singular: "保存"
          }
        }
      }),
      Saved: (0, _v11.translate)({
        singular: "Saved",
        dictionary: {
          es: {
            singular: "Guardado"
          },
          "de-DE": {
            singular: "Gespeichert"
          },
          "fr-FR": {
            singular: "Enregistrée"
          },
          "ja-JP": {
            singular: "保存しました"
          },
          "ko-KR": {
            singular: "저장됨"
          },
          "pt-BR": {
            singular: "Salvo"
          },
          "zh-CN": {
            singular: "已保存"
          }
        }
      }),
      SCIM: (0, _v11.translate)("SCIM"),
      SCIMDescription: (0, _v11.translate)({
        singular: "Add a SCIM app to automate user provisioning",
        dictionary: {
          es: {
            singular: "Agregue una aplicación de SCIM para automatizar el aprovisionamiento de usuarios."
          },
          "de-DE": {
            singular: "Füge eine SCIM-App hinzu, um die Benutzerbereitstellung zu automatisieren."
          },
          "fr-FR": {
            singular: "Ajoutez une application SCIM pour automatiser le provisionnement des utilisateurs"
          },
          "ja-JP": {
            singular: "SCIMアプリを追加してユーザープロビジョニングを自動化します"
          },
          "ko-KR": {
            singular: "사용자 프로비저닝을 자동화하려면 SCIM 앱을 추가하세요."
          },
          "pt-BR": {
            singular: "Adicione um aplicativo de SCIM para automatizar o provisionamento de usuários"
          },
          "zh-CN": {
            singular: "添加 SCIM 应用程序自动执行用户预置"
          }
        }
      }),
      SelectDefaultTeamRole: (0, _v11.translate)({
        singular: "Select default team role...",
        dictionary: {
          es: {
            singular: "Seleccione el rol de equipo predeterminado..."
          },
          "de-DE": {
            singular: "Standard-Teamrolle auswählen ..."
          },
          "fr-FR": {
            singular: "Sélectionner le rôle de l'équipe par défaut..."
          },
          "ja-JP": {
            singular: "デフォルトのチームの役割を選択..."
          },
          "ko-KR": {
            singular: "기본 팀 역할 선택..."
          },
          "pt-BR": {
            singular: "Selecionar função-padrão da equipe..."
          },
          "zh-CN": {
            singular: "选择默认团队角色..."
          }
        }
      }),
      ShouldBeValidDomainName: (0, _v11.translate)({
        singular: "Should be valid domain name",
        dictionary: {
          es: {
            singular: "Debe ser un nombre de dominio válido"
          },
          "de-DE": {
            singular: "Sollte ein gültiger Domainname sein"
          },
          "fr-FR": {
            singular: "Le nom de domaine doit être valide"
          },
          "ja-JP": {
            singular: "有効なドメイン名である必要があります"
          },
          "ko-KR": {
            singular: "유효한 도메인 이름이어야 합니다."
          },
          "pt-BR": {
            singular: "Precisa ser um nome de domínio válido"
          },
          "zh-CN": {
            singular: "应为有效域名"
          }
        }
      }),
      ShowMappings: (0, _v11.translate)({
        singular: "Show mappings",
        dictionary: {
          es: {
            singular: "Mostrar asignaciones"
          },
          "de-DE": {
            singular: "Zuordnungen anzeigen"
          },
          "fr-FR": {
            singular: "Afficher les mappages"
          },
          "ja-JP": {
            singular: "マッピングを表示"
          },
          "ko-KR": {
            singular: "매핑 보기"
          },
          "pt-BR": {
            singular: "Mostrar mapeamentos"
          },
          "zh-CN": {
            singular: "显示映射"
          }
        }
      }),
      SignInUrl: (0, _v11.translate)({
        singular: "Sign-in URL",
        dictionary: {
          es: {
            singular: "URL de inicio de sesión"
          },
          "de-DE": {
            singular: "Anmelde-URL"
          },
          "fr-FR": {
            singular: "URL de connexion"
          },
          "ja-JP": {
            singular: "サインインURL"
          },
          "ko-KR": {
            singular: "로그인 URL"
          },
          "pt-BR": {
            singular: "URL de login"
          },
          "zh-CN": {
            singular: "登录 URL"
          }
        }
      }),
      SingleLogoutUrl: (0, _v11.translate)({
        singular: "Single logout URL (optional)",
        dictionary: {
          es: {
            singular: "URL de cierre de sesión único (opcional)"
          },
          "de-DE": {
            singular: "Single-Logout-URL (optional)"
          },
          "fr-FR": {
            singular: "URL de déconnexion unique (facultatif)"
          },
          "ja-JP": {
            singular: "シングルログアウトURL（任意）"
          },
          "ko-KR": {
            singular: "단일 로그아웃 URL(선택 사항)"
          },
          "pt-BR": {
            singular: "URL de logout único (opcional)"
          },
          "zh-CN": {
            singular: "单点注销 URL（可选）"
          }
        }
      }),
      SignInUrlRequired: (0, _v11.translate)({
        singular: "Sign-in URL is required",
        dictionary: {
          es: {
            singular: "La URL de inicio de sesión es obligatoria"
          },
          "de-DE": {
            singular: "Anmelde-URL ist erforderlich"
          },
          "fr-FR": {
            singular: "L'URL de connexion est requise"
          },
          "ja-JP": {
            singular: "サインインURLは必須です"
          },
          "ko-KR": {
            singular: "로그인 URL은 필수 항목입니다."
          },
          "pt-BR": {
            singular: "O URL de login é obrigatório"
          },
          "zh-CN": {
            singular: "登录 URL 为必填项"
          }
        }
      }),
      SignInUrlValidation: (0, _v11.translate)({
        singular: "Sign-in URL must be a valid URL",
        dictionary: {
          es: {
            singular: "La URL de inicio de sesión debe ser una URL válida"
          },
          "de-DE": {
            singular: "Die Anmelde-URL muss eine gültige URL sein"
          },
          "fr-FR": {
            singular: "L'URL de connexion doit être une URL valide"
          },
          "ja-JP": {
            singular: "サインインURLは有効なURLでなければなりません"
          },
          "ko-KR": {
            singular: "로그인 URL은 유효한 URL이어야 합니다."
          },
          "pt-BR": {
            singular: "O URL de login deve ser um URL válido"
          },
          "zh-CN": {
            singular: "登录 URL 必须为有效 URL"
          }
        }
      }),
      SingleLogoutUrlValidation: (0, _v11.translate)({
        singular: "Single logout URL must be a valid URL",
        dictionary: {
          es: {
            singular: "La URL de cierre de sesión único debe ser una URL válida"
          },
          "de-DE": {
            singular: "Die Single-Logout-URL muss eine gültige URL sein"
          },
          "fr-FR": {
            singular: "L'URL de déconnexion unique doit être une URL valide"
          },
          "ja-JP": {
            singular: "シングルログアウトURLは有効なURLでなければなりません"
          },
          "ko-KR": {
            singular: "단일 로그아웃 URL은 유효한 URL이어야 합니다."
          },
          "pt-BR": {
            singular: "O URL de logout único deve ser um URL válido"
          },
          "zh-CN": {
            singular: "单点注销 URL 必须是有效的 URL"
          }
        }
      }),
      SomethingWentWrong: (0, _v11.translate)({
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
      SsoPageHeader: (0, _v11.translate)({
        singular: "Single sign-on (SSO)",
        dictionary: {
          es: {
            singular: "Inicio de sesión único (SSO)"
          },
          "de-DE": {
            singular: "Single-Sign-on (SSO)"
          },
          "fr-FR": {
            singular: "Authentification unique (SSO)"
          },
          "ja-JP": {
            singular: "シングルサインオン (SSO)"
          },
          "ko-KR": {
            singular: "싱글 사인온 (SSO)"
          },
          "pt-BR": {
            singular: "Autenticação Única (SSO)"
          },
          "zh-CN": {
            singular: "单点登录 (SSO)"
          }
        }
      }),
      SSOConfiguration: (0, _v11.translate)({
        singular: "SSO configuration",
        dictionary: {
          es: {
            singular: "Configuración de SSO"
          },
          "de-DE": {
            singular: "SSO-Konfiguration"
          },
          "fr-FR": {
            singular: "Configuration d'authentification unique"
          },
          "ja-JP": {
            singular: "SSOの設定"
          },
          "ko-KR": {
            singular: "SSO 구성"
          },
          "pt-BR": {
            singular: "Configuração de SSO"
          },
          "zh-CN": {
            singular: "SSO 配置"
          }
        }
      }),
      SSOConfigurationDescription: (0, _v11.translate)({
        singular: "Manage additional SSO preferences.",
        dictionary: {
          es: {
            singular: "Gestione preferencias adicionales de SSO."
          },
          "de-DE": {
            singular: "Zusätzliche SSO-Einstellungen verwalten."
          },
          "fr-FR": {
            singular: "Gérer des préférences d'authentification unique supplémentaires."
          },
          "ja-JP": {
            singular: "追加のSSO設定を管理します。"
          },
          "ko-KR": {
            singular: "추가 SSO 환경설정을 관리합니다."
          },
          "pt-BR": {
            singular: "Gerencie preferências adicionais de SSO."
          },
          "zh-CN": {
            singular: "管理其他 SSO 偏好设置。"
          }
        }
      }),
      Step: _v0 => (0, _v11.translate)({
        singular: "Step {STEP} of 2",
        replacements: {
          STEP: _v0
        },
        dictionary: {
          es: {
            singular: "Paso {STEP} de 2"
          },
          "de-DE": {
            singular: "Schritt {STEP} von 2"
          },
          "fr-FR": {
            singular: "Étape {STEP} sur 2"
          },
          "ja-JP": {
            singular: "ステップ{STEP}/2"
          },
          "ko-KR": {
            singular: "{STEP} / 2단계"
          },
          "pt-BR": {
            singular: "Passo {STEP} de 2"
          },
          "zh-CN": {
            singular: "步骤 {STEP}/2"
          }
        }
      }),
      SSOUrlOrCertMetadataNotFound: (0, _v11.translate)({
        singular: "Single Sign On URL and/or Certificate was not found. Please check you metadata file.",
        dictionary: {
          es: {
            singular: "No se encontró la URL de inicio de sesión único o el certificado. Revise su archivo de metadatos."
          },
          "de-DE": {
            singular: "Single-Sign-on-URL und/oder -Zertifikat wurden nicht gefunden. Bitte überprüfen Sie Ihre Metadatendatei."
          },
          "fr-FR": {
            singular: "L'URL et/ou le certificat d'authentification unique sont introuvables. Veuillez vérifier votre fichier de métadonnées."
          },
          "ja-JP": {
            singular: "シングルサインオンURLおよび/または証明書が見つかりません。メタデータファイルを確認してください。"
          },
          "ko-KR": {
            singular: "싱글 사인온 URL 및/또는 인증서를 찾을 수 없습니다. 메타데이터 파일을 확인해 주세요."
          },
          "pt-BR": {
            singular: "O URL e/ou certificado de login único (SSO) não foi encontrado. Verifique o arquivo de metadados."
          },
          "zh-CN": {
            singular: "未找到单点登录 URL 和/或证书。请检查您的元数据文件。"
          }
        }
      }),
      TeamOnlySso: (0, _v11.translate)({
        singular: "Team-only SSO",
        dictionary: {
          es: {
            singular: "SSO solo para el equipo"
          },
          "de-DE": {
            singular: "SSO nur für Teams"
          },
          "fr-FR": {
            singular: "Authentification unique réservée aux équipes"
          },
          "ja-JP": {
            singular: "チーム専用SSO"
          },
          "ko-KR": {
            singular: "팀 전용 SSO"
          },
          "pt-BR": {
            singular: "SSO somente para equipes"
          },
          "zh-CN": {
            singular: "团队专用 SSO"
          }
        }
      }),
      TeamOnlySsoDescription: (0, _v11.translate)({
        singular: "Only allow SSO for users already on your account. You can manually add new users and/or set up SCIM provisioning below.",
        dictionary: {
          es: {
            singular: "Permita el SSO solo para los usuarios que ya están en su cuenta. Puede agregar manualmente nuevos usuarios o configurar el aprovisionamiento de SCIM a continuación."
          },
          "de-DE": {
            singular: "Erlauben Sie SSO nur für Nutzer, die sich bereits in Ihrem Konto befinden. Sie können unten manuell neue Nutzer hinzufügen und/oder die SCIM-Bereitstellung einrichten."
          },
          "fr-FR": {
            singular: "Autorisez l'authentification unique seulement pour les utilisateurs déjà sur votre compte. Vous pouvez ajouter manuellement de nouveaux utilisateurs et/ou configurer le provisionnement SCIM ci-dessous."
          },
          "ja-JP": {
            singular: "すでにアカウントに登録されているユーザーに対してのみSSOを許可します。以下で新しいユーザーを手動で追加したり、SCIMプロビジョニングを設定したりできます。"
          },
          "ko-KR": {
            singular: "이미 계정에 있는 사용자만 SSO를 사용할 수 있습니다. 아래에서 수동으로 새 사용자를 추가하거나 SCIM 프로비저닝을 설정할 수 있습니다."
          },
          "pt-BR": {
            singular: "Permitir SSO somente aos usuários que já estejam na conta. Abaixo, você pode adicionar manualmente novos usuários e/ou configurar o provisionamento do SCIM."
          },
          "zh-CN": {
            singular: "只允许已在您帐户上的用户进行 SSO。您可以在下面手动添加新用户和/或设置 SCIM 配置。"
          }
        }
      }),
      TestUrl: (0, _v11.translate)({
        singular: "Test URL",
        dictionary: {
          es: {
            singular: "URL de prueba"
          },
          "de-DE": {
            singular: "Test-URL"
          },
          "ja-JP": {
            singular: "テストURL"
          },
          "ko-KR": {
            singular: "테스트 URL"
          },
          "pt-BR": {
            singular: "URL de teste"
          },
          "zh-CN": {
            singular: "测试 URL"
          }
        }
      }),
      TestUrlDescription: (0, _v11.translate)({
        singular: "Use this URL to test logging in with SSO. To use JIT provisioning with this URL, ensure that JIT provisioning is enabled from the SSO settings page.",
        dictionary: {
          es: {
            singular: "Utilice esta URL para probar el inicio de sesión con SSO. Para usar el aprovisionamiento JIT con esta URL, asegúrese de que el aprovisionamiento JIT esté habilitado en la página de configuración de SSO."
          },
          "de-DE": {
            singular: "Verwende diese URL, um die Anmeldung mit SSO zu testen. Um die JIT-Bereitstellung mit dieser URL zu verwenden, stelle sicher, dass die JIT-Bereitstellung auf der Seite SSO-Einstellungen aktiviert ist."
          },
          "fr-FR": {
            singular: "Utilisez cette URL pour tester la connexion avec authentification unique. Pour utiliser le provisionnement JIT avec cette URL, assurez-vous que le provisionnement JIT est activé dans la page des paramètres d'authentification unique."
          },
          "ja-JP": {
            singular: "このURLを使用してSSOでのログインをテストします。 このURLでJITプロビジョニングを使用するには、SSO設定ページでJITプロビジョニングが有効になっていることを確認してください。"
          },
          "ko-KR": {
            singular: "이 URL을 사용하여 SSO로 로그인을 테스트합니다. 이 URL로 JIT 프로비저닝을 사용하려면 SSO 설정 페이지에서 JIT 프로비저닝이 사용 설정되어 있는지 확인하세요."
          },
          "pt-BR": {
            singular: "Use esse URL para testar o login com SSO. Para usar o provisionamento JIT com esse URL, certifique-se de que ele esteja ativado na página de configurações de SSO."
          },
          "zh-CN": {
            singular: "使用此 URL 测试使用 SSO 登录。若要通过此 URL 使用 JIT 预置，请确保从 SSO 设置页启用 JIT 预置。"
          }
        }
      }),
      ToDisableSsoInChina: (0, _v11.translate)({
        singular: "To disable SSO in China, delete this connection",
        dictionary: {
          es: {
            singular: "Para deshabilitar el SSO en China, elimine esta conexión."
          },
          "de-DE": {
            singular: "Um SSO in China zu deaktivieren, löschen Sie diese Verbindung."
          },
          "fr-FR": {
            singular: "Pour désactiver le SSO en Chine, supprimez cette connexion"
          },
          "ja-JP": {
            singular: "中国でSSOを無効にするには、この接続を削除してください"
          },
          "ko-KR": {
            singular: "중국에서 SSO를 비활성화하려면 이 연결을 삭제하세요."
          },
          "pt-BR": {
            singular: "Para desativar o SSO na China, exclua essa conexão"
          },
          "zh-CN": {
            singular: "要在中国禁用 SSO，请删除此连接"
          }
        }
      }),
      UploadFile: (0, _v11.translate)({
        singular: "Upload file",
        dictionary: {
          es: {
            singular: "Subir archivo"
          },
          "de-DE": {
            singular: "Datei hochladen"
          },
          "fr-FR": {
            singular: "Mettre le fichier en ligne"
          },
          "ja-JP": {
            singular: "ファイルをアップロードする"
          },
          "ko-KR": {
            singular: "파일 업로드"
          },
          "pt-BR": {
            singular: "Carregar arquivo"
          },
          "zh-CN": {
            singular: "上传文件"
          }
        }
      }),
      UploadYouIDPMetadataFile: (0, _v11.translate)({
        singular: "Upload your IdP metadata file",
        dictionary: {
          es: {
            singular: "Suba su archivo IdP de metadatos."
          },
          "de-DE": {
            singular: "Laden Sie Ihre IdP-Metadatendatei hoch"
          },
          "fr-FR": {
            singular: "Mettez en ligne votre fichier de métadonnées IdP"
          },
          "ja-JP": {
            singular: "IdPメタデータファイルをアップロードしてください"
          },
          "ko-KR": {
            singular: "IdP 메타데이터 파일을 업로드하세요."
          },
          "pt-BR": {
            singular: "Carregue o arquivo de metadados do IdP"
          },
          "zh-CN": {
            singular: "上传您的 IdP 元数据文件"
          }
        }
      }),
      VimeoMetadata: (0, _v11.translate)({
        singular: "Vimeo metadata",
        dictionary: {
          es: {
            singular: "Metadatos de Vimeo"
          },
          "de-DE": {
            singular: "Vimeo-Metadaten"
          },
          "fr-FR": {
            singular: "Métadonnées Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoメタデータ"
          },
          "ko-KR": {
            singular: "Vimeo 메타데이터"
          },
          "pt-BR": {
            singular: "Metadados do Vimeo"
          },
          "zh-CN": {
            singular: "Vimeo 元数据"
          }
        }
      }),
      VimeoMetadataDescription: (0, _v11.translate)({
        singular: "Copy and paste these service provider values into the SAML app settings in your IdP",
        dictionary: {
          es: {
            singular: "Copie y pegue esos valores del proveedor de servicios en la configuración de la aplicación SAML en su IdP."
          },
          "de-DE": {
            singular: "Kopieren Sie diese Werte des Dienstanbieters und fügen Sie sie in die SAML-App-Einstellungen in Ihrem IdP ein."
          },
          "fr-FR": {
            singular: "Copiez et collez les valeurs de ces fournisseurs de services dans les paramètres de l'application SAML de votre IdP"
          },
          "ja-JP": {
            singular: "これらのサービスプロバイダーの値をコピーして、IdPのSAMLアプリ設定に貼り付けます"
          },
          "ko-KR": {
            singular: "IdP의 SAML 앱 설정에 이 서비스 공급자 값을 복사하여 붙여넣으세요."
          },
          "pt-BR": {
            singular: "Copie e cole os valores do provedor de serviços nas configurações do aplicativo SAML do seu IdP"
          },
          "zh-CN": {
            singular: "将这些服务提供商值复制并粘贴到 IdP 的 SAML 应用设置中"
          }
        }
      }),
      X509CertificateInvalidFormat: (0, _v11.translate)({
        singular: "Invalid X509 certificate format",
        dictionary: {
          es: {
            singular: "Formato de certificado X.509 no válido"
          },
          "de-DE": {
            singular: "Ungültiges X509-Zertifikatsformat"
          },
          "fr-FR": {
            singular: "Format de certificat X509 non valide"
          },
          "ja-JP": {
            singular: "無効なX509証明書形式"
          },
          "ko-KR": {
            singular: "유효하지 않은 X509 인증서 형식"
          },
          "pt-BR": {
            singular: "Formato de certificado X.509 inválido"
          },
          "zh-CN": {
            singular: "X509 证书格式无效"
          }
        }
      }),
      X509CertificateRequired: (0, _v11.translate)({
        singular: "X509Certificate is required",
        dictionary: {
          es: {
            singular: "El certificado X.509 es obligatorio"
          },
          "de-DE": {
            singular: "X509-Zertifikat erforderlich"
          },
          "fr-FR": {
            singular: "Le certificat X509 est requis"
          },
          "ja-JP": {
            singular: "X509証明書が必要です"
          },
          "ko-KR": {
            singular: "X509Certificate는 필수 항목입니다."
          },
          "pt-BR": {
            singular: "O certificado X.509 é obrigatório"
          },
          "zh-CN": {
            singular: "X509 证书为必填项"
          }
        }
      })
    },
    _v13 = "https://help.vimeo.com/hc/en-us/articles/24471051040913-Setting-up-SSO-on-Vimeo",
    _v14 = ["jitProvisioning", "jitReprovisioning", "defaultTeamRole", "chinaSiteEnabled", "chinaSiteDomain", "enterpriseSiteDomain", "enterpriseSiteEnabled", "forceSso", "logoutUrl", "scimBasedSso", "teamBasedSso"],
    _v15 = ["uri", "title", "connectionName", "entityId", "ssoUrl", "singleLogoutUrl", "x509Certificate", "x509CertificateExpiresOn", "attributesMap", "isActive", "connectionType", "metadata.interactions.connect.domains"],
    _v16 = ["uri", "domainName", "verified"],
    _v17 = {
      edit: {
        header: _v12.EditSamlConnectionHeader,
        description: _v12.EditSamlConnectionDescription
      },
      create: {
        header: _v12.CreateSamlConnectionHeader,
        description: _v12.CreateSamlConnectionDescription
      },
      info: {
        header: _v12.SamlConnectionInfoHeader,
        description: _v12.SamlConnectionInfoDescription
      }
    },
    _v18 = _v10.object().shape({
      title: _v10.string().max(255, _v12.ConnectionNameLengthValidation).required(_v12.ConnectionNameRequired),
      ssoUrl: _v10.string().url(_v12.SignInUrlValidation).required(_v12.SignInUrlRequired),
      singleLogoutUrl: _v10.string().url(_v12.SingleLogoutUrlValidation).nullable(!0),
      x509Certificate: _v10.string().required(_v12.X509CertificateRequired),
      attributesMap: _v10.object().nullable(!0).shape({
        email: _v10.string().nullable(!0),
        firstName: _v10.string().nullable(!0),
        lastName: _v10.string().nullable(!0),
        groups: _v10.string().nullable(!0)
      })
    }),
    _v19 = ["pem", "cer", "crt", "cert"],
    _v20 = "https://vimeo.com",
    _v21 = "vimeo",
    _v22 = "custom",
    _v23 = "china",
    _v24 = _v0 => {
      let _v1 = /((\w{4,12}-?)){5}/.exec(_v0 || "");
      return null !== _v1 ? _v1[0] : "";
    },
    _v25 = () => ({
      attributesMap: {
        email: "",
        firstName: "",
        lastName: "",
        groups: ""
      },
      isActive: !0,
      connectionType: _v21,
      uri: "",
      connectionName: "",
      title: "",
      ssoUrl: "",
      customDomain: "",
      singleLogoutUrl: "",
      entityId: "",
      x509Certificate: "",
      x509CertificateExpiresOn: "",
      metadata: {
        interactions: {
          connect: {
            domains: [],
            options: [],
            uri: ""
          }
        }
      }
    }),
    _v26 = _v0 => {
      if (_v0) try {
        let _v0 = new URL(_v0);
        return "https:" === _v0.protocol;
      } catch (_v0) {
        return !1;
      }
      return !0;
    },
    _v27 = _v0 => {
      let _v1 = _v0?.attributesMap;
      _v1 && (_v1.hasOwnProperty("firstname") && (_v1.firstName = _v1.firstname, delete _v1.firstname), _v1.hasOwnProperty("lastname") && (_v1.lastName = _v1.lastname, delete _v1.lastname));
    },
    _v28 = async (_v0, _v1) => {
      let _v2 = await _v0.res.clone().json();
      409 === _v0.res.status ? _v1(_v12.ConnectionNameExists) : 400 === _v0.res.status && _v2.invalid_parameters?.some(_v0 => 0 === _v0.error_code && "x509_certificate" === _v0.field) ? _v1(_v12.InvalidCertificate) : _v1(void 0);
    };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  async function _v33({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      connectionUuid: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v31.measureLatency)("getSsoConnectionDomains", "GET", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v2}/connection/${_v3}/domains?${(0, _v32.searchQueryString)(_v4)}&fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  async function _v34({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      connectionUuid: _v4
    },
    ..._v5
  }) {
    return (0, _v31.measureLatency)("postSsoConnectionDomains", "POST", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v3}/connection/${_v4}/domains?fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "POST",
        body: JSON.stringify((0, _v32.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  function _v39() {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/connection/${_v0.where.connectionUuid}/domains${(0, _v30.serializeQuery)(_v0)}`, _v33({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v40() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v38.useGctlConfig)(),
      [_v4, _v5] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v34({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }
  async function _v41({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v31.measureLatency)("getSsoSettings", "GET", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v2}/settings?fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  async function _v42({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v31.measureLatency)("putSsoSettings", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v3}/settings?fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PUT",
        body: JSON.stringify((0, _v32.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  async function _v43({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v31.measureLatency)("patchSsoSettings", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v3}/settings?fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v32.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  function _v44() {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/settings${(0, _v30.serializeQuery)(_v0)}`, _v41({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v45() {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/settings${(0, _v30.serializeQuery)(_v0)}`, _v43({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v38.useGctlConfig)();
    return (0, _v35.default)(_v2 ? `/sso/${_v2.where.userId}/connection/${_v2.where.connectionUuid}/domains${(0, _v30.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v33({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/sso/:userId/connection/:connectionUuid/domains",
    method: "GET"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v39, {
    endpoint: "/sso/:userId/connection/:connectionUuid/domains",
    method: "GET"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v38.useGctlConfig)();
    return (0, _v37.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/sso/${_v2.where.userId}/connection/${_v2.where.connectionUuid}/domains?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v33({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/sso/:userId/connection/:connectionUuid/domains",
    method: "GET"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v40, {
    endpoint: "/sso/:userId/connection/:connectionUuid/domains",
    method: "POST"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v38.useGctlConfig)();
    return (0, _v35.default)(_v2 ? `/sso/${_v2.where.userId}/settings${(0, _v30.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v41({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/sso/:userId/settings",
    method: "GET"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v44, {
    endpoint: "/sso/:userId/settings",
    method: "GET"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/settings${(0, _v30.serializeQuery)(_v0)}`, _v42({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/sso/:userId/settings",
    method: "PUT"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v45, {
    endpoint: "/sso/:userId/settings",
    method: "PATCH"
  });
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  async function _v58({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      connectionUuid: _v4
    },
    ..._v5
  }) {
    return (0, _v31.measureLatency)("putSsoConnection", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v3}/connections/${_v4}?fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PUT",
        body: JSON.stringify((0, _v32.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  async function _v59({
    baseUrl: _v0,
    where: {
      userId: _v1,
      connectionUuid: _v2
    },
    ..._v3
  }) {
    return (0, _v31.measureLatency)("deleteSsoConnection", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v1}/connections/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  async function _v60({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      connectionUuid: _v4
    },
    ..._v5
  }) {
    return (0, _v31.measureLatency)("patchSsoConnection", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v3}/connections/${_v4}?fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v32.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  function _v61() {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/connections/${_v0.where.connectionUuid}${(0, _v30.serializeQuery)(_v0)}`, _v59({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v62() {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/connections/${_v0.where.connectionUuid}${(0, _v30.serializeQuery)(_v0)}`, _v60({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/connections/${_v0.where.connectionUuid}${(0, _v30.serializeQuery)(_v0)}`, _v58({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/sso/:userId/connections/:connectionUuid",
    method: "PUT"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v61, {
    endpoint: "/sso/:userId/connections/:connectionUuid",
    method: "DELETE"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v62, {
    endpoint: "/sso/:userId/connections/:connectionUuid",
    method: "PATCH"
  });
  let _v63 = ({
    userId: _v0,
    onConnectionUpdateSuccess: _v1,
    onError: _v2,
    oldConnection: _v3,
    shouldCloseModal: _v4 = !0,
    toggleUpdate: _v5 = !1
  }) => {
    let _v6 = (0, _v2.useRef)(0),
      [_v7, {
        data: _v8,
        loading: _v9,
        error: _v10,
        callCount: _v11
      }] = _v62();
    return (0, _v2.useEffect)(() => {
      _v10 && _v6.current < _v11 && (_v28(_v10, _v2), _v6.current = _v11);
    }, [_v10, _v2, _v11]), (0, _v2.useEffect)(() => {
      _v8 && _v6.current < _v11 && !_v9 && !_v10 && (_v1(_v8, _v3, _v4, _v5), _v6.current = _v11);
    }, [_v11, _v9, _v10, _v8]), {
      onUpdateSsoConnection: _v0 => _v7({
        where: {
          userId: _v0,
          connectionUuid: _v24(_v0.uri)
        },
        variables: _v0,
        select: _v15
      }),
      updateLoading: _v9
    };
  };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = ({
      children: _v0,
      title: _v1,
      description: _v2,
      headerControl: _v3
    }) => (0, _v1.jsxs)(_v5.Box, {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "stroke",
      padding: "300",
      marginBottom: "200",
      borderRadius: "button",
      children: [(0, _v1.jsxs)(_v64.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v1.jsxs)(_v5.Box, {
          children: [(0, _v1.jsx)(_v65.Header, {
            size: "xs",
            as: "h6",
            marginBottom: "50",
            children: _v1
          }), (0, _v1.jsx)(_v56.Paragraph, {
            size: "md",
            color: "text-secondary",
            children: _v2
          })]
        }), _v3 && (0, _v1.jsx)(_v5.Box, {
          children: _v3
        })]
      }), _v0 && (0, _v1.jsx)(_v5.Box, {
        marginTop: "200",
        children: _v0
      })]
    }),
    _v70 = ({
      attributesMap: _v0,
      onFieldChange: _v1
    }) => {
      let [_v2, _v3] = (0, _v2.useState)(!1),
        [_v4, _v5] = (0, _v2.useState)(0),
        _v6 = (0, _v2.useRef)(null);
      return (0, _v2.useEffect)(() => {
        _v6.current && _v5(_v6.current.scrollHeight);
      }, [_v6.current?.scrollHeight]), (0, _v1.jsxs)(_v69, {
        title: _v12.Attributes,
        description: _v12.AttributesDescription(),
        children: [(0, _v1.jsxs)(_v64.Flex, {
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderTopWidth: "1px",
          borderColor: "stroke",
          borderStyle: "solid",
          paddingTop: "200",
          children: [(0, _v1.jsxs)(_v5.Box, {
            children: [(0, _v1.jsx)(_v65.Header, {
              size: "xs",
              as: "h6",
              marginBottom: "50",
              children: _v12.Mappings
            }), (0, _v1.jsx)(_v56.Paragraph, {
              size: "md",
              color: "text-secondary",
              children: _v12.MappingsDescription
            })]
          }), (0, _v1.jsx)(_v5.Box, {
            children: (0, _v1.jsx)(_v66.IconButton, {
              size: "md",
              variant: "tertiary",
              onClick: () => {
                _v3(!_v2);
              },
              icon: (0, _v1.jsx)(_v68.ChevronDownSmall, {
                transform: _v2 ? "rotate(180deg)" : void 0
              }),
              id: "toggleMappingsBtn",
              "aria-label": _v2 ? _v12.CloseMappings : _v12.ShowMappings
            })
          })]
        }), (0, _v1.jsxs)(_v5.Box, {
          maxHeight: _v2 ? _v4 : "0",
          transition: "max-height 0.5s ease-in-out",
          overflow: "hidden",
          ref: _v6,
          children: [(0, _v1.jsxs)(_v64.Flex, {
            alignItems: "center",
            marginTop: "200",
            children: [(0, _v1.jsx)(_v65.Header, {
              size: "2xs",
              as: "h6",
              flex: "1",
              children: "email"
            }), (0, _v1.jsx)(_v67.Input, {
              flex: "5",
              height: "md",
              placeholder: _v12.EnterEmail,
              value: _v0.email ?? "",
              onChange: _v0 => _v1("email", _v0.target.value),
              id: "attrEmailInput"
            })]
          }), (0, _v1.jsxs)(_v64.Flex, {
            alignItems: "center",
            marginTop: "200",
            children: [(0, _v1.jsx)(_v65.Header, {
              size: "2xs",
              as: "h6",
              flex: "1",
              children: "firstName"
            }), (0, _v1.jsx)(_v67.Input, {
              flex: "5",
              height: "md",
              placeholder: _v12.EnterFirstName,
              value: _v0.firstName ?? _v0.firstname ?? "",
              onChange: _v0 => _v1("firstName", _v0.target.value),
              id: "attrFirstNameInput"
            })]
          }), (0, _v1.jsxs)(_v64.Flex, {
            alignItems: "center",
            marginTop: "200",
            children: [(0, _v1.jsx)(_v65.Header, {
              size: "2xs",
              as: "h6",
              flex: "1",
              children: "lastName"
            }), (0, _v1.jsx)(_v67.Input, {
              flex: "5",
              height: "md",
              placeholder: _v12.EnterLastName,
              value: _v0.lastName ?? _v0.lastname ?? "",
              onChange: _v0 => _v1("lastName", _v0.target.value),
              id: "attrLastNameInput"
            })]
          }), (0, _v1.jsxs)(_v64.Flex, {
            alignItems: "center",
            marginTop: "200",
            children: [(0, _v1.jsx)(_v65.Header, {
              size: "2xs",
              as: "h6",
              flex: "1",
              children: "groups"
            }), (0, _v1.jsx)(_v67.Input, {
              flex: "5",
              height: "md",
              placeholder: _v12.EnterGroups,
              value: _v0.groups ?? "",
              onChange: _v0 => _v1("groups", _v0.target.value),
              id: "attrGroupsInput"
            })]
          })]
        })]
      });
    };
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  async function _v77({
    baseUrl: _v0,
    where: {
      userId: _v1,
      domainId: _v2
    },
    ..._v3
  }) {
    return (0, _v31.measureLatency)("deleteSsoDomain", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v1}/domains/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  function _v78() {
    let {
        mutate: _v0
      } = (0, _v36.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v38.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.userId}/domains/${_v0.where.domainId}${(0, _v30.serializeQuery)(_v0)}`, _v77({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v78, {
    endpoint: "/sso/:userId/domains/:domainId",
    method: "DELETE"
  });
  let _v79 = ({
    userId: _v0,
    connection: _v1,
    ssoDomains: _v2,
    ssoDomainsLoading: _v3,
    onDomainCreateSuccess: _v4,
    onDomainDeleteSuccess: _v5,
    onError: _v6
  }) => {
    let {
        domainState: _v7,
        onDomainChange: _v8,
        isDomainTouched: _v9,
        isDomainValid: _v10,
        resetDomainState: _v11
      } = (() => {
        let [_v0, _v1] = (0, _v2.useState)(""),
          [_v2, _v3] = (0, _v2.useState)(!1);
        return {
          domainState: _v0,
          isDomainTouched: _v2,
          isDomainValid: _v2 && /^(?!-)[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/.test(_v0),
          onDomainChange: _v0 => {
            _v2 || _v3(!0), _v1(_v0);
          },
          resetDomainState: () => {
            _v1(""), _v3(!1);
          }
        };
      })(),
      {
        createDomainLoading: _v12,
        onCreateSsoDomain: _v13
      } = (({
        userId: _v0,
        onDomainCreateSuccess: _v1,
        onError: _v2,
        resetDomainState: _v3
      }) => {
        let _v4 = (0, _v2.useRef)(0),
          [_v5, {
            loading: _v6,
            error: _v7,
            callCount: _v8,
            data: _v9
          }] = _v40();
        return (0, _v2.useEffect)(() => {
          if (_v7) {
            let _v0;
            _v7?.res?.status === 409 && (_v0 = _v12.DomainAlreadyRequested), _v2(_v0);
          }
        }, [_v7]), (0, _v2.useEffect)(() => {
          _v4.current < _v8 && !_v6 && !_v7 && _v9 && (_v1(_v9), _v3(), _v4.current = _v8);
        }, [_v8, _v6, _v7]), {
          createDomainLoading: _v6,
          onCreateSsoDomain: (_v0, _v1) => _v5({
            select: _v16,
            where: {
              userId: _v0,
              connectionUuid: _v1
            },
            variables: {
              domainName: _v0
            }
          })
        };
      })({
        userId: _v0,
        onDomainCreateSuccess: _v4,
        onError: _v6,
        resetDomainState: _v11
      }),
      {
        deleteDomainLoading: _v14,
        onDeleteSsoDomain: _v15
      } = (({
        userId: _v0,
        onDomainDeleteSuccess: _v1,
        onError: _v2,
        connection: _v3
      }) => {
        let _v4 = (0, _v2.useRef)(0),
          [_v5, {
            loading: _v6,
            error: _v7,
            callCount: _v8
          }] = _v78(),
          [_v9, _v10] = (0, _v2.useState)(null);
        return (0, _v2.useEffect)(() => {
          _v7 && _v2();
        }, [_v7]), (0, _v2.useEffect)(() => {
          _v9 && _v4.current < _v8 && !_v6 && !_v7 && (_v1(_v9, _v3), _v4.current = _v8);
        }, [_v8, _v6, _v7, _v3]), {
          deleteDomainLoading: _v6,
          onDeleteSsoDomain: _v0 => {
            let _v1;
            return _v10(_v0), _v5({
              where: {
                userId: _v0,
                domainId: parseInt((_v1 = _v0.uri).substring(_v1.lastIndexOf("/") + 1))
              }
            });
          }
        };
      })({
        userId: _v0,
        onDomainDeleteSuccess: _v5,
        onError: _v6,
        connection: _v1
      });
    return _v3 ? (0, _v1.jsx)(_v76.LoadSpinner, {
      heightPX: 100
    }) : (0, _v1.jsxs)(_v69, {
      title: _v12.ClaimDomain,
      description: _v12.ClaimDomainDescription,
      children: [(0, _v1.jsxs)(_v73.FormControl, {
        isInvalid: !!(_v7 && _v9 && !_v10),
        children: [(0, _v1.jsx)(_v67.Input, {
          height: "md",
          placeholder: _v12.EnterDomainName,
          value: _v7,
          onChange: _v0 => {
            _v8(_v0.target.value);
          },
          id: "claimDomainInput"
        }), (0, _v1.jsx)(_v74.FormErrorMessage, {
          children: _v12.ShouldBeValidDomainName
        })]
      }), (0, _v1.jsx)(_v72.Button, {
        isDisabled: !_v10 || _v14,
        isLoading: _v12,
        size: "sm",
        variant: "secondary",
        onClick: () => {
          _v10 && _v13(_v7, _v24(_v1.uri));
        },
        marginTop: "200",
        children: _v12.RequestVerification
      }), _v2 && _v2.length ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v65.Header, {
          size: "xs",
          as: "h6",
          marginTop: "200",
          children: _v12.Domains
        }), (0, _v1.jsx)(_v5.Box, {
          as: "li",
          listStyleType: "none",
          children: _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v64.Flex, {
            as: "li",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: "stroke",
            borderWidth: "1px",
            borderRadius: "menuList",
            marginTop: "75",
            paddingLeft: "100",
            paddingRight: "75",
            paddingY: "75",
            children: [(0, _v1.jsx)(_v71.Text, {
              variant: "heading-xs",
              children: _v0.domainName
            }), (0, _v1.jsx)(_v71.Text, {
              as: "i",
              color: _v0.verified ? "status-positive-primary" : "text-secondary",
              variant: "body-md",
              marginRight: "75",
              marginLeft: "auto",
              children: _v0.verified ? _v12.Claimed : _v12.Pending
            }), (0, _v1.jsx)(_v66.IconButton, {
              isLoading: _v14,
              onClick: () => {
                confirm(_v12.DomainDeleteConfirm) && _v15(_v0);
              },
              size: "xs",
              variant: "secondary",
              icon: (0, _v1.jsx)(_v75.TrashBin, {}),
              "aria-label": ""
            })]
          }, _v1))
        })]
      }) : null]
    });
  };
  var _v80 = _v0.i(0);
  let _v81 = ({
    value: _v0,
    onFieldChange: _v1,
    error: _v2,
    chinaSiteEnabled: _v3,
    chinaSiteDomain: _v4,
    enterpriseSiteEnabled: _v5,
    connectionType: _v6,
    enterpriseSiteDomain: _v7,
    lockEnterpriseSiteSwitch: _v8
  }) => {
    let _v9 = _v0 => {
        _v0.target.checked ? _v1("connectionType", _v0.target.value) : _v1("connectionType", _v21);
      },
      _v10 = !!(_v3 && _v4?.length),
      _v11 = !!(_v5 && _v7?.length);
    return (0, _v1.jsxs)(_v69, {
      title: _v12.SAMLConnectionName,
      description: _v12.SAMLConnectionNameDescription,
      children: [(0, _v1.jsxs)(_v73.FormControl, {
        isInvalid: !!_v2,
        children: [(0, _v1.jsx)(_v67.Input, {
          height: "md",
          placeholder: _v12.EnterName,
          variant: "default",
          value: _v0 ?? "",
          onChange: _v0 => {
            _v1("title", _v0.target.value);
          },
          id: "connectionNameInput"
        }), (0, _v1.jsx)(_v74.FormErrorMessage, {
          children: _v2
        })]
      }), _v10 && (0, _v1.jsxs)(_v64.Flex, {
        alignItems: "center",
        marginTop: "200",
        children: [(0, _v1.jsx)(_v80.Tooltip, {
          label: _v12.ToDisableSsoInChina,
          isDisabled: !_v8,
          children: (0, _v1.jsx)(_v64.Flex, {
            alignItems: "center",
            children: (0, _v1.jsx)(_v57.Switch, {
              size: "sm",
              value: _v23,
              onChange: _v9,
              isChecked: _v6 === _v23,
              isDisabled: _v8
            })
          })
        }), (0, _v1.jsx)(_v56.Paragraph, {
          marginLeft: "75",
          size: "md",
          children: _v12.EnableForUsersInChina
        })]
      }), _v11 && (0, _v1.jsxs)(_v64.Flex, {
        alignItems: "center",
        marginTop: "200",
        children: [(0, _v1.jsx)(_v64.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v57.Switch, {
            size: "sm",
            value: _v22,
            onChange: _v9,
            isChecked: _v6 === _v22,
            isDisabled: _v8
          })
        }), (0, _v1.jsx)(_v56.Paragraph, {
          marginLeft: "75",
          size: "md",
          children: _v12.EnableForUsersToCustomDomain
        })]
      })]
    });
  };
  var _v82 = _v0.i(0);
  let _v83 = ({
      onFieldChange: _v0,
      onError: _v1
    }) => (0, _v1.jsx)(_v64.Flex, {
      children: (0, _v1.jsx)(_v82.FileInput, {
        display: "flex",
        accept: ".xml",
        onChange: _v0 => {
          let _v1 = _v0.target.files ? _v0.target.files[0] : null;
          if (!_v1 || !_v1.name) return;
          let _v2 = _v1.name.split(".").pop();
          if ("xml" === (_v2 ? _v2.toLowerCase() : "")) {
            let _v0 = new FileReader();
            _v0.onload = _v0 => {
              if (_v0.target?.result) {
                let _v0 = _v0.target.result.toString().trim(),
                  _v1 = new DOMParser().parseFromString(_v0, "text/xml");
                if (null !== _v1) {
                  let _v0 = _v1.querySelector("SingleSignOnService")?.getAttribute("Location"),
                    _v1 = _v1.querySelector("X509Certificate")?.textContent,
                    _v2,
                    _v3 = !1;
                  _v0 ? _v0("ssoUrl", _v0) : _v2 = !0, _v1 ? _v0("x509Certificate", _v1.trim()) : _v3 = !0, (_v2 || _v3) && _v1(_v12.SSOUrlOrCertMetadataNotFound);
                }
              }
            }, _v0.readAsText(_v1);
          } else alert(_v12.ProvideValidMetadataFile);
          _v0?.target && (_v0.target.value = "");
        },
        size: "sm",
        variant: "secondary",
        label: _v12.UploadFile
      })
    }),
    _v84 = ({
      value: _v0,
      onFieldChange: _v1,
      error: _v2
    }) => (0, _v1.jsxs)(_v64.Flex, {
      marginTop: "200",
      alignItems: "center",
      gap: "75",
      children: [(0, _v1.jsx)(_v5.Box, {
        flex: "1",
        children: (0, _v1.jsx)(_v65.Header, {
          as: "h6",
          variant: "heading-2xs",
          size: "xl",
          children: _v12.SignInUrl
        })
      }), (0, _v1.jsxs)(_v73.FormControl, {
        flex: "5",
        isInvalid: !!_v2,
        children: [(0, _v1.jsx)(_v67.Input, {
          height: "md",
          placeholder: _v12.EnterUrl,
          value: _v0 ?? "",
          onChange: _v0 => {
            _v1("ssoUrl", _v0.target.value);
          },
          id: "signInUrlInput"
        }), (0, _v1.jsx)(_v74.FormErrorMessage, {
          children: _v2
        })]
      })]
    }),
    _v85 = ({
      value: _v0,
      onFieldChange: _v1,
      error: _v2
    }) => (0, _v1.jsxs)(_v64.Flex, {
      marginTop: "200",
      alignItems: "center",
      gap: "75",
      children: [(0, _v1.jsx)(_v5.Box, {
        flex: "1",
        children: (0, _v1.jsx)(_v65.Header, {
          as: "h6",
          variant: "heading-2xs",
          size: "xl",
          children: _v12.SingleLogoutUrl
        })
      }), (0, _v1.jsxs)(_v73.FormControl, {
        flex: "5",
        isInvalid: !!_v2,
        children: [(0, _v1.jsx)(_v67.Input, {
          height: "md",
          placeholder: _v12.EnterUrl,
          value: _v0 ?? "",
          onChange: _v0 => {
            _v1("singleLogoutUrl", _v0.target.value);
          },
          id: "SingleLogoutUrlInput"
        }), (0, _v1.jsx)(_v74.FormErrorMessage, {
          children: _v2
        })]
      })]
    });
  var _v86 = _v0.i(0);
  let _v87 = _v0 => (0, _v1.jsx)(_v86.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.83 4A3.001 3.001 0 0 0 13 2h-2a3.001 3.001 0 0 0-2.83 2H7a3 3 0 0 0-3 3v3a1 1 0 1 0 2 0V7a1 1 0 0 1 1-1h1.17A3.001 3.001 0 0 0 11 8h2a3.001 3.001 0 0 0 2.83-2H17a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a1 1 0 1 0-2 0v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.17ZM13 4a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Zm-2.707 6.293a1 1 0 0 0 0 1.414L11.586 13H5a1 1 0 1 0 0 2h6.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0Z",
        fill: "currentColor"
      })
    }),
    _v88 = ({
      uuid: _v0,
      onCopy: _v1,
      connectionType: _v2,
      enterpriseSiteDomain: _v3,
      chinaSiteDomain: _v4
    }) => {
      let _v5 = ({
        CONNECTION_TYPE_VIMEO: _v20,
        CONNECTION_TYPE_ENTERPRISE_SITE: _v3,
        CONNECTION_TYPE_CHINA_SITE: _v4
      }[_v2] || _v20) + "/sso/connect?connection=" + _v0;
      return (0, _v1.jsx)(_v69, {
        title: _v12.TestUrl,
        description: _v12.TestUrlDescription,
        children: (0, _v1.jsxs)(_v5.Box, {
          position: "relative",
          children: [(0, _v1.jsx)(_v67.Input, {
            readOnly: !0,
            value: _v5,
            paddingLeft: "400",
            size: "sm"
          }), (0, _v1.jsx)(_v66.IconButton, {
            size: "xs",
            "aria-label": "",
            id: "copyBtnTestUrl",
            onClick: () => {
              navigator.clipboard.writeText(_v5), _v1();
            },
            variant: "secondary",
            icon: (0, _v1.jsx)(_v87, {}),
            position: "absolute",
            left: "50",
            top: "50"
          })]
        })
      });
    };
  var _v89 = _v0.i(0);
  let _v90 = ({
    uuid: _v0,
    onCopy: _v1,
    connectionType: _v2,
    enterpriseSiteDomain: _v3,
    chinaSiteDomain: _v4
  }) => {
    let _v5 = {
        [_v21]: _v20,
        [_v22]: _v3,
        [_v23]: _v4
      },
      _v6 = (_v5[_v2] || _v20) + "/saml/auth/metadata/" + _v0,
      _v7 = (_v5[_v2] || _v20) + "/saml/auth/" + _v0,
      _v8 = (_v5[_v2] || _v20) + "/saml/auth/logout/" + _v0,
      _v9 = [{
        name: "Entity ID",
        url: _v6
      }, {
        name: "ACS URL",
        url: _v7
      }, {
        name: _v12.SingleLogoutUrl,
        url: _v8
      }];
    return (0, _v1.jsx)(_v69, {
      title: _v12.VimeoMetadata,
      description: _v12.VimeoMetadataDescription,
      children: _v9.map((_v0, _v1) => (0, _v1.jsxs)(_v64.Flex, {
        alignItems: "center",
        marginBottom: "75",
        gap: "75",
        sx: {
          "&:last-child": {
            marginBottom: 0
          }
        },
        children: [(0, _v1.jsx)(_v65.Header, {
          as: "h6",
          variant: "heading-2xs",
          flex: "1",
          size: "xl",
          children: _v0.name
        }), (0, _v1.jsxs)(_v5.Box, {
          position: "relative",
          flex: "5",
          children: [(0, _v1.jsx)(_v67.Input, {
            readOnly: !0,
            value: _v0.url,
            paddingLeft: "400",
            size: "sm"
          }), (0, _v1.jsx)(_v66.IconButton, {
            size: "xs",
            "aria-label": "",
            id: "copyBtn" + (0, _v89.default)(_v0.name),
            onClick: () => {
              var _v0;
              return _v0 = _v0.url, void (navigator.clipboard.writeText(_v0), _v1());
            },
            variant: "secondary",
            icon: (0, _v1.jsx)(_v87, {}),
            position: "absolute",
            left: "50",
            top: "50"
          })]
        })]
      }, _v1))
    });
  };
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = ({
      value: _v0,
      onFieldChange: _v1,
      error: _v2
    }) => (0, _v1.jsxs)(_v64.Flex, {
      marginTop: "200",
      gap: "75",
      children: [(0, _v1.jsx)(_v5.Box, {
        flex: "1",
        children: (0, _v1.jsx)(_v65.Header, {
          as: "h6",
          variant: "heading-2xs",
          marginTop: "100",
          size: "xl",
          children: _v12.IDPCertificate
        })
      }), (0, _v1.jsxs)(_v73.FormControl, {
        isInvalid: !!_v2,
        flex: "5",
        children: [(0, _v1.jsx)(_v91.Textarea, {
          display: "block",
          width: "100%",
          height: (0, _v92.rem)(150),
          resize: "none",
          placeholder: _v12.EnterCertificate,
          value: _v0 ?? "",
          onChange: _v0 => {
            _v1("x509Certificate", _v0.target.value);
          },
          isInvalid: !!_v2,
          id: "certificateInput"
        }), (0, _v1.jsxs)(_v5.Box, {
          position: "relative",
          children: [(0, _v1.jsx)(_v5.Box, {
            as: "input",
            type: "file",
            id: "x509CertFileUpload",
            onChange: _v0 => {
              let _v1 = _v0.target.files ? _v0.target.files[0] : null;
              if (!_v1 || !_v1.name) return;
              let _v2 = _v1.name.split(".").pop(),
                _v3 = _v2 ? _v2.toLowerCase() : "";
              if (_v19.includes(_v3)) {
                let _v0 = new FileReader();
                _v0.onload = _v0 => {
                  _v0.target?.result && _v1("x509Certificate", _v0.target.result.toString().trim());
                }, _v0.readAsText(_v1);
              } else alert(_v12.CertificateExtensions + _v19.join(", "));
              _v0?.target && (_v0.target.value = "");
            },
            accept: _v19.map(_v0 => "." + _v0).join(","),
            opacity: "0",
            position: "absolute",
            right: "75",
            bottom: "75",
            height: "md",
            width: "md"
          }), (0, _v1.jsx)(_v66.IconButton, {
            position: "absolute",
            right: "75",
            bottom: "75",
            id: "uploadCertBtn",
            "aria-label": "",
            variant: "secondary",
            onClick: () => {
              let _v0 = document.getElementById("x509CertFileUpload");
              _v0 && _v0.click();
            },
            icon: (0, _v1.jsx)(_v93.Upload, {})
          })]
        }), (0, _v1.jsx)(_v74.FormErrorMessage, {
          children: _v2
        })]
      })]
    }),
    _v95 = ({
      userId: _v0,
      modalView: _v1,
      connection: _v2,
      createdConnection: _v3,
      ssoDomains: _v4,
      ssoDomainsLoading: _v5,
      chinaSiteEnabled: _v6,
      chinaSiteDomain: _v7,
      enterpriseSiteEnabled: _v8,
      enterpriseSiteDomain: _v9,
      lockEnterpriseSiteSwitch: _v10,
      onConnectionUpdateSuccess: _v11,
      onDomainCreateSuccess: _v12,
      onDomainDeleteSuccess: _v13,
      onError: _v14,
      newUuid: _v15,
      onFieldChange: _v16,
      formErrors: _v17,
      touchedFields: _v18,
      onCopy: _v19
    }) => {
      let {
          updateLoading: _v20,
          onUpdateSsoConnection: _v21
        } = _v63({
          userId: _v0,
          onConnectionUpdateSuccess: _v11,
          onError: _v14,
          oldConnection: _v2,
          shouldCloseModal: !1,
          toggleUpdate: !0
        }),
        [_v22, _v23] = (0, _v2.useState)(!0);
      (0, _v2.useEffect)(() => {
        _v3 && _v23(_v3.isActive);
      }, [_v3]);
      let _v24 = () => {
          if (_v3) {
            let _v0 = !_v22;
            _v23(_v0), _v21({
              ..._v3,
              isActive: _v0
            });
          }
        },
        _v25 = "info" === _v1 && _v3 ? _v24(_v3.uri) : _v2.uri ? _v24(_v2.uri) : _v15,
        _v26 = () => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v81, {
            value: _v2.title,
            onFieldChange: _v16,
            error: _v18.title && _v17.title,
            chinaSiteEnabled: _v6,
            chinaSiteDomain: _v7,
            enterpriseSiteEnabled: _v8,
            enterpriseSiteDomain: _v9,
            connectionType: _v2.connectionType,
            lockEnterpriseSiteSwitch: _v10
          }), (0, _v1.jsx)(_v90, {
            onCopy: _v19,
            enterpriseSiteDomain: _v9,
            chinaSiteDomain: _v7,
            connectionType: _v2.connectionType,
            uuid: _v25
          }), (0, _v1.jsx)(_v70, {
            attributesMap: _v2.attributesMap,
            onFieldChange: _v16
          }), (0, _v1.jsxs)(_v69, {
            title: _v12.IdentityProviderMetadata,
            description: _v12.UploadYouIDPMetadataFile,
            children: [(0, _v1.jsx)(_v83, {
              onFieldChange: _v16,
              onError: _v14
            }), (0, _v1.jsx)(_v56.Paragraph, {
              color: "text-secondary",
              size: "md",
              marginTop: "200",
              children: _v12.AlternativelyAddEachOneManually
            }), (0, _v1.jsx)(_v84, {
              value: _v2.ssoUrl,
              onFieldChange: _v16,
              error: _v18.ssoUrl && _v17.ssoUrl
            }), (0, _v1.jsx)(_v94, {
              value: _v2.x509Certificate,
              onFieldChange: _v16,
              error: _v18.x509Certificate && _v17.x509Certificate
            }), (0, _v1.jsx)(_v85, {
              value: _v2.singleLogoutUrl,
              onFieldChange: _v16,
              error: _v18.singleLogoutUrl && _v17.singleLogoutUrl
            })]
          })]
        }),
        _v27 = () => (0, _v1.jsxs)(_v1.Fragment, {
          children: ["info" === _v1 && (0, _v1.jsx)(_v69, {
            title: _v12.EnableConnection,
            description: _v12.EnableConnectionDescription,
            headerControl: (0, _v1.jsx)(_v57.Switch, {
              size: "md",
              isDisabled: _v20,
              isChecked: _v22,
              onChange: _v24,
              id: "connectionToggle" + _v2.uri
            })
          }), (0, _v1.jsx)(_v88, {
            onCopy: _v19,
            uuid: _v25,
            enterpriseSiteDomain: _v9,
            connectionType: _v2.connectionType
          }), (0, _v1.jsx)(_v79, {
            userId: _v0,
            connection: _v3 ?? _v2,
            ssoDomains: _v4,
            ssoDomainsLoading: _v5,
            onDomainCreateSuccess: _v12,
            onDomainDeleteSuccess: _v13,
            onError: _v14
          })]
        });
      switch (_v1) {
        case "edit":
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v26(), _v27()]
          });
        case "create":
          return _v26();
        case "info":
          return _v27();
        default:
          return (0, _v1.jsx)(_v1.Fragment, {});
      }
    };
  var _v96 = _v0.i(0);
  let _v97 = ({
      stepNr: _v0
    }) => (0, _v1.jsxs)(_v5.Box, {
      children: [[1, 2].map(_v0 => (0, _v1.jsx)(_v5.Box, {
        backgroundColor: _v0 >= _v0 ? "text-secondary" : "stroke",
        width: "md",
        height: (0, _v92.rem)(4),
        display: "inline-block",
        borderRadius: (0, _v92.rem)(2),
        marginRight: "50"
      }, _v0)), (0, _v1.jsx)(_v71.Text, {
        color: "text-secondary",
        variant: "body-md",
        children: _v12.Step(_v0)
      })]
    }),
    _v98 = ({
      modalView: _v0,
      onModalClose: _v1,
      onEditSave: _v2,
      onDelete: _v3,
      onCreateSave: _v4,
      saveDisabled: _v5,
      saveLoading: _v6,
      deleteLoading: _v7
    }) => {
      let _v8 = _v1;
      return "edit" === _v0 ? _v8 = _v2 : "create" === _v0 && (_v8 = _v4), (0, _v1.jsx)(_v96.ModalFooter, {
        children: (0, _v1.jsxs)(_v64.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          children: ["edit" === _v0 && (0, _v1.jsx)(_v72.Button, {
            isLoading: _v7,
            variant: "secondary",
            onClick: () => {
              confirm(_v12.ConfirmDeleteConnection) && _v3();
            },
            children: _v12.Delete
          }), "edit" !== _v0 && (0, _v1.jsx)(_v97, {
            stepNr: "create" === _v0 ? 1 : 2
          }), (0, _v1.jsxs)(_v64.Flex, {
            gap: "75",
            children: ["info" === _v0 && (0, _v1.jsx)(_v72.Button, {
              isLoading: _v6,
              isDisabled: _v5,
              variant: "primary",
              onClick: _v1,
              id: "finishBtn",
              children: _v12.Finish
            }), "info" !== _v0 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v72.Button, {
                id: "cancelBtn",
                variant: "tertiary",
                onClick: _v1,
                children: _v12.Cancel
              }), (0, _v1.jsx)(_v72.Button, {
                isLoading: _v6,
                isDisabled: _v5,
                variant: "primary",
                onClick: _v8,
                id: "saveBtn",
                children: _v12.Save
              })]
            })]
          })]
        })
      });
    };
  var _v99 = _v0.i(0);
  let _v100 = ({
    modalView: _v0
  }) => (0, _v1.jsxs)(_v99.ModalHeader, {
    paddingBottom: "50",
    children: [(0, _v1.jsx)(_v65.Header, {
      size: "lg",
      as: "h3",
      children: _v17[_v0].header
    }), (0, _v1.jsxs)(_v56.Paragraph, {
      size: "md",
      children: [_v17[_v0].description, " ", (0, _v1.jsx)(_v4.Link, {
        href: _v13,
        target: "_blank",
        fontSize: "inherit",
        variant: "inline-primary",
        children: _v12.FollowOurGuide
      })]
    })]
  });
  var _v101 = _v0.i(0);
  let _v102 = ({
    userId: _v0,
    connection: _v1,
    createdConnection: _v2,
    ssoDomains: _v3,
    ssoDomainsLoading: _v4,
    newUuid: _v5,
    isOpen: _v6,
    onModalClose: _v7,
    modalView: _v8,
    enterpriseSiteDomain: _v9,
    enterpriseSiteEnabled: _v10,
    chinaSiteDomain: _v11,
    chinaSiteEnabled: _v12,
    lockEnterpriseSiteSwitch: _v13,
    onConnectionUpdateSuccess: _v14,
    onConnectionDeleteSuccess: _v15,
    onConnectionCreateSuccess: _v16,
    onDomainCreateSuccess: _v17,
    onDomainDeleteSuccess: _v18,
    onError: _v19,
    onCopy: _v20
  }) => {
    let {
        connectionState: _v21,
        onFieldChange: _v22,
        touchedFields: _v23
      } = (_v0 => {
        let [_v1, _v2] = (0, _v2.useState)(_v0),
          [_v3, _v4] = (0, _v2.useState)({});
        return (0, _v2.useEffect)(() => {
          (0, _v101.default)(_v0, _v1) && _v4({});
        }, [_v0, _v1]), (0, _v2.useEffect)(() => {
          _v2(_v0), _v4({});
        }, [_v0]), {
          connectionState: _v1,
          touchedFields: _v3,
          onFieldChange: (_v0, _v1) => {
            _v0 in _v1 ? (_v2(_v0 => ({
              ..._v0,
              [_v0]: _v1
            })), _v4({
              ..._v3,
              [_v0]: !0
            })) : (_v2(_v0 => ({
              ..._v0,
              attributesMap: {
                ..._v0.attributesMap,
                [_v0]: _v1
              }
            })), _v4({
              ..._v3,
              attributesMap: {
                ...(_v3.attributesMap || {}),
                [_v0]: _v1
              }
            }));
          }
        };
      })(_v1),
      _v24 = (_v0 => {
        let [_v1, _v2] = (0, _v2.useState)({});
        return (0, _v2.useEffect)(() => {
          _v18.validate(_v0, {
            abortEarly: !1
          }).then(() => {
            _v2({});
          }).catch(_v0 => {
            _v2(_v0.inner.reduce((_v0, _v1) => (_v0[_v1.path] = _v1.message, _v0), {}));
          });
        }, [_v0]), _v1;
      })(_v21),
      {
        updateLoading: _v25,
        onUpdateSsoConnection: _v26
      } = _v63({
        userId: _v0,
        onConnectionUpdateSuccess: _v14,
        onError: _v19,
        oldConnection: _v1
      }),
      {
        deleteLoading: _v27,
        onDeleteSsoConnection: _v28
      } = (({
        userId: _v0,
        onConnectionDeleteSuccess: _v1,
        onError: _v2
      }) => {
        let _v3 = (0, _v2.useRef)(0),
          [_v4, {
            loading: _v5,
            error: _v6,
            callCount: _v7
          }] = _v61(),
          [_v8, _v9] = (0, _v2.useState)(null);
        return (0, _v2.useEffect)(() => {
          _v6 && _v2();
        }, [_v6]), (0, _v2.useEffect)(() => {
          _v8 && _v3.current < _v7 && !_v5 && !_v6 && (_v1(_v8), _v3.current = _v7);
        }, [_v7, _v5, _v6]), {
          deleteLoading: _v5,
          onDeleteSsoConnection: _v0 => (_v9(_v0), _v4({
            where: {
              userId: _v0,
              connectionUuid: _v24(_v0.uri)
            }
          }))
        };
      })({
        userId: _v0,
        onConnectionDeleteSuccess: _v15,
        onError: _v19
      }),
      {
        createLoading: _v29,
        onCreateSsoConnection: _v30
      } = (({
        userId: _v0,
        onConnectionCreateSuccess: _v1,
        onError: _v2
      }) => {
        let _v3 = (0, _v2.useRef)(0),
          [_v4, {
            loading: _v5,
            error: _v6,
            callCount: _v7,
            data: _v8
          }] = (0, _v9.usePostSsoConnections)();
        return (0, _v2.useEffect)(() => {
          _v6 && _v3.current < _v7 && (_v28(_v6, _v2), _v3.current = _v7);
        }, [_v6, _v7, _v2]), (0, _v2.useEffect)(() => {
          _v3.current < _v7 && !_v5 && !_v6 && _v8 && (_v27(_v8), _v1(_v8), _v3.current = _v7);
        }, [_v7, _v5, _v6]), {
          createLoading: _v5,
          onCreateSsoConnection: (_v0, _v1) => _v4({
            select: _v15,
            where: {
              userId: _v0
            },
            variables: {
              ..._v0,
              uuid: _v1
            }
          })
        };
      })({
        userId: _v0,
        onConnectionCreateSuccess: _v16,
        onError: _v19
      }),
      _v31 = _v25 || _v27 || Object.keys(_v24).length > 0 || 0 === Object.keys(_v23).length;
    return (0, _v1.jsxs)(_v52.Modal, {
      size: "xl",
      isOpen: _v6,
      onClose: _v7,
      children: [(0, _v1.jsx)(_v55.ModalOverlay, {}), (0, _v1.jsxs)(_v54.ModalContent, {
        display: "flex",
        "flex-direction": "column",
        height: "calc(100% - 7.5rem)",
        width: "784px",
        children: [(0, _v1.jsx)(_v100, {
          modalView: _v8
        }), (0, _v1.jsx)(_v53.ModalBody, {
          flex: "1",
          overflowY: "auto",
          children: (0, _v1.jsx)(_v95, {
            userId: _v0,
            modalView: _v8,
            connection: _v21,
            chinaSiteEnabled: _v12,
            chinaSiteDomain: _v11,
            enterpriseSiteEnabled: _v10,
            enterpriseSiteDomain: _v9,
            ssoDomains: _v3,
            ssoDomainsLoading: _v4,
            createdConnection: _v2,
            lockEnterpriseSiteSwitch: _v13,
            onConnectionUpdateSuccess: _v14,
            onDomainCreateSuccess: _v17,
            onDomainDeleteSuccess: _v18,
            onError: _v19,
            newUuid: _v5,
            onFieldChange: _v22,
            formErrors: _v24,
            touchedFields: _v23,
            onCopy: _v20
          })
        }), (0, _v1.jsx)(_v98, {
          modalView: _v8,
          onModalClose: _v7,
          onEditSave: () => {
            Object.keys(_v24).length > 0 || _v26(_v21);
          },
          onDelete: () => {
            _v28(_v21);
          },
          onCreateSave: () => {
            Object.keys(_v24).length > 0 || _v30(_v21, _v5);
          },
          saveDisabled: _v31,
          saveLoading: _v25 || _v29,
          deleteLoading: _v27
        })]
      })]
    });
  };
  var _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0);
  let _v108 = ({
      name: _v0,
      description: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v65.Header, {
        variant: "heading-xs",
        as: "h6",
        size: "xl",
        children: _v0
      }), _v1 && (0, _v1.jsx)(_v56.Paragraph, {
        variant: "body-md",
        color: "text-secondary",
        marginTop: "50",
        children: _v1
      })]
    }),
    _v109 = ({
      children: _v0,
      name: _v1,
      description: _v2,
      key: _v3
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v107.Divider, {
        borderColor: "stroke",
        marginY: "200"
      }), (0, _v1.jsxs)(_v64.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [(0, _v1.jsx)(_v5.Box, {
          flex: "3",
          children: (0, _v1.jsx)(_v108, {
            name: _v1,
            description: _v2
          })
        }), (0, _v1.jsx)(_v64.Flex, {
          flex: "1",
          justifyContent: "flex-end",
          alignItems: "center",
          children: _v0
        })]
      }, _v3)]
    }),
    _v110 = ({
      header: _v0,
      description: _v1,
      isDisabled: _v2,
      rolesInfo: _v3,
      onChange: _v4,
      value: _v5,
      id: _v6
    }) => {
      let _v7 = _v3.map(_v0 => ({
        value: _v0.role?.toLowerCase(),
        label: _v0.displayName || ""
      }));
      return (0, _v1.jsx)(_v109, {
        name: _v0,
        description: _v1,
        children: (0, _v1.jsx)(_v106.Select, {
          style: {
            width: "100%"
          },
          placeholder: _v12.SelectDefaultTeamRole,
          disabled: _v2,
          onValueChange: _v0 => _v4(_v0.value[0].replace(" ", "_")),
          value: [_v5],
          id: _v6,
          items: _v7,
          size: "sm"
        })
      });
    },
    _v111 = ({
      header: _v0,
      description: _v1,
      isChecked: _v2,
      isDisabled: _v3,
      onChange: _v4,
      linkButton: _v5,
      hidden: _v6,
      id: _v7,
      tooltip: _v8
    }) => (0, _v1.jsxs)(_v109, {
      name: _v0,
      description: _v1,
      children: [_v5, !_v6 && (0, _v1.jsx)(_v80.Tooltip, {
        label: _v8,
        isDisabled: !_v8,
        shouldWrapChildren: !0,
        children: (0, _v1.jsx)(_v57.Switch, {
          isDisabled: _v3,
          isChecked: _v2,
          onChange: () => _v4(!_v2),
          id: _v7
        })
      })]
    }),
    _v112 = ({
      header: _v0,
      description: _v1,
      value: _v2,
      onChange: _v3,
      isDisabled: _v4,
      id: _v5
    }) => {
      let [_v6, _v7] = (0, _v2.useState)(_v2),
        [_v8, _v9] = (0, _v2.useState)(!0);
      return (0, _v2.useEffect)(() => {
        _v9(_v26(String(_v6)) || null === _v6);
      }, [_v6]), (0, _v2.useEffect)(() => {
        if (("" === _v6 || _v6 && _v8) && _v6 !== _v2) {
          let _v0 = setTimeout(() => _v3(String(_v6)), 500);
          return () => clearTimeout(_v0);
        }
      }, [_v8, _v3, _v6, _v2]), (0, _v1.jsx)(_v109, {
        name: _v0,
        description: _v1,
        children: (0, _v1.jsx)(_v67.Input, {
          disabled: _v4,
          value: _v6,
          isInvalid: !_v8,
          placeholder: _v12.EnterUrl,
          variant: "default",
          size: "sm",
          onChange: _v0 => {
            let _v1 = _v0.target.value;
            _v7(_v1), _v9(_v26(_v1));
          },
          id: _v5
        })
      });
    },
    _v113 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v5.Box, {
      borderRadius: "md",
      padding: "300",
      marginBottom: "300",
      backgroundColor: "fill-surface",
      children: _v0
    }),
    _v114 = ({
      name: _v0,
      description: _v1,
      dataId: _v2,
      controlElement: _v3 = null
    }) => (0, _v1.jsxs)(_v64.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      children: [(0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v65.Header, {
          variant: "heading-md",
          as: "h4",
          marginBottom: "50",
          "data-id": _v2,
          size: "xl",
          children: _v0
        }), (0, _v1.jsx)(_v56.Paragraph, {
          variant: "body-md",
          color: "text-secondary",
          children: _v1
        })]
      }), _v3 && (0, _v1.jsx)(_v5.Box, {
        children: _v3
      })]
    }),
    _v115 = ({
      ssoSettings: _v0,
      ssoLoading: _v1,
      userId: _v2,
      onError: _v3,
      isOwner: _v4,
      onSettingUpdateSuccess: _v5,
      rolesInfo: _v6,
      scimAppWarning: _v7
    }) => {
      let {
        ssoSettingsUpdateError: _v8,
        ssoSettingsUpdateLoading: _v9,
        onUpdateSetting: _v10
      } = (({
        userId: _v0,
        onSettingUpdateSuccess: _v1
      }) => {
        let _v2 = (0, _v2.useRef)(0),
          [_v3, _v4] = _v45(),
          {
            loading: _v5,
            error: _v6,
            callCount: _v7,
            data: _v8
          } = _v4;
        return (0, _v2.useEffect)(() => {
          _v2.current < _v7 && !_v5 && !_v6 && _v8 && (_v1(_v8), _v2.current = _v7);
        }, [_v7, _v5, _v6]), {
          ssoSettingsUpdateError: _v6,
          ssoSettingsUpdateLoading: _v5,
          onUpdateSetting: _v0 => {
            _v3({
              select: _v14,
              where: {
                userId: _v0
              },
              variables: _v0
            });
          }
        };
      })({
        userId: _v2,
        onSettingUpdateSuccess: _v5
      });
      return ((0, _v2.useEffect)(() => {
        _v8 && _v3();
      }, [_v3, _v8]), _v1 || !_v0) ? (0, _v1.jsx)(_v76.LoadSpinner, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v113, {
          children: [(0, _v1.jsx)(_v114, {
            dataId: "provisioning-options-section",
            name: _v12.ProvisioningOptions,
            description: _v12.ProvisioningOptionsDescription
          }), "jitProvisioning" in _v0 && (0, _v1.jsx)(_v111, {
            header: _v12.JITProvisioning,
            description: _v12.JITProvisioningDescription,
            isChecked: _v0.jitProvisioning,
            isDisabled: _v9,
            onChange: _v0 => {
              !_v0 && _v0.jitReprovisioning ? _v10({
                jitReprovisioning: _v0,
                jitProvisioning: _v0
              }) : _v10({
                jitProvisioning: _v0
              });
            },
            id: "jitProvisioning"
          }), "jitReprovisioning" in _v0 && (0, _v1.jsx)(_v111, {
            header: _v12.JITReprovisioning,
            description: _v12.JITReprovisioningDescription,
            isChecked: _v0.jitReprovisioning,
            isDisabled: _v9 || !_v0.jitProvisioning,
            onChange: _v0 => _v10({
              jitReprovisioning: _v0
            }),
            id: "jitReprovisioning",
            tooltip: _v0.jitProvisioning ? null : _v12.JITReprovisioningTooltip
          }), "teamBasedSso" in _v0 && (0, _v1.jsx)(_v111, {
            header: _v12.TeamOnlySso,
            description: _v12.TeamOnlySsoDescription,
            isChecked: _v0.teamBasedSso,
            isDisabled: _v9,
            onChange: _v0 => _v10({
              teamBasedSso: _v0
            }),
            id: "teamBasedSso"
          }), "scimBasedSso" in _v0 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v111, {
              header: _v12.SCIM,
              description: _v12.SCIMDescription,
              isChecked: _v0.scimBasedSso,
              isDisabled: _v9,
              onChange: _v0 => _v10({
                scimBasedSso: _v0
              }),
              hidden: !0,
              id: "scimBasedSso",
              linkButton: (0, _v1.jsx)(_v72.Button, {
                onClick: () => {
                  _v4 && window.open("https://developer.vimeo.com/apps", "_blank");
                },
                isDisabled: !_v4,
                variant: "secondary",
                size: "sm",
                leftIcon: (0, _v1.jsx)(_v105.PopOut, {}),
                id: "manageScimBtn",
                children: _v12.Manage
              })
            }), !_v4 && (0, _v1.jsx)(_v103.Alert, {
              size: "sm",
              marginTop: "200",
              children: (0, _v1.jsx)(_v104.AlertDescription, {
                marginTop: "50",
                children: _v7
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v113, {
          children: [(0, _v1.jsx)(_v114, {
            dataId: "sso-configuration-section",
            name: _v12.SSOConfiguration,
            description: _v12.SSOConfigurationDescription
          }), "forceSso" in _v0 && (0, _v1.jsx)(_v111, {
            header: _v12.ForceSSO,
            description: _v12.ForceSSODescription,
            isChecked: _v0.forceSso,
            isDisabled: _v9,
            onChange: _v0 => _v10({
              forceSso: _v0
            }),
            id: "forceSso"
          }), "defaultTeamRole" in _v0 && (0, _v1.jsx)(_v110, {
            header: _v12.DefaultRole,
            description: _v12.DefaultRoleDescription,
            isDisabled: _v9,
            rolesInfo: _v6,
            value: _v0.defaultTeamRole.toLowerCase(),
            onChange: _v0 => _v10({
              defaultTeamRole: _v0
            }),
            id: "defaultTeamRole"
          }), "logoutUrl" in _v0 && (0, _v1.jsx)(_v112, {
            isDisabled: _v9,
            header: _v12.LogoutURL,
            description: _v12.LogoutURLDescription,
            value: _v0.logoutUrl,
            onChange: _v0 => _v10({
              logoutUrl: _v0
            }),
            id: "logoutUrl"
          })]
        })]
      });
    },
    _v116 = ({
      ownerId: _v0,
      connections: _v1,
      loading: _v2,
      onEdit: _v3,
      onCreate: _v4,
      onConnectionUpdateSuccess: _v5,
      onError: _v6
    }) => {
      let {
          updateLoading: _v7,
          onUpdateSsoConnection: _v8
        } = _v63({
          userId: _v0,
          onConnectionUpdateSuccess: _v5,
          onError: _v6,
          toggleUpdate: !0
        }),
        _v9 = (0, _v1.jsx)(_v72.Button, {
          id: "createConnectionBtn",
          variant: "primary",
          onClick: _v4,
          size: "sm",
          "data-id": "create-connection-button",
          children: _v12.CreateConnection
        });
      return (0, _v1.jsxs)(_v113, {
        children: [(0, _v1.jsx)(_v114, {
          name: _v12.SAMLConnections,
          description: _v12.SAMLConnectionsDescription,
          controlElement: _v9
        }), _v2 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v107.Divider, {
            borderColor: "stroke",
            marginY: "200"
          }), (0, _v1.jsx)(_v76.LoadSpinner, {
            heightPX: 100
          })]
        }), !_v2 && _v1 && _v1.map(_v0 => (0, _v1.jsxs)(_v109, {
          name: _v0.title,
          description: (_v0 => {
            let _v1 = _v0.metadata.interactions.connect.domains;
            if (0 === _v1.length) return;
            let _v2 = _v1.map((_v0, _v1) => (0, _v1.jsxs)("span", {
              children: [(0, _v1.jsx)("b", {
                children: _v0
              }), _v1 < _v1.length - 1 && ", "]
            }, _v1));
            return (0, _v1.jsxs)("span", {
              children: [_v12.ClaimedDomains, ": ", _v2]
            });
          })(_v0),
          children: [(0, _v1.jsx)(_v72.Button, {
            marginRight: "200",
            id: "connectionEdit" + _v0.uri,
            variant: "secondary",
            size: "sm",
            onClick: () => _v3(_v0),
            children: _v12.Edit
          }), (0, _v1.jsx)(_v57.Switch, {
            isDisabled: _v7,
            isChecked: _v0.isActive,
            onChange: () => {
              _v0.isActive = !_v0.isActive, _v8({
                ..._v0
              });
            },
            id: "connectionToggle" + _v0.uri
          })]
        }, _v0.connectionName))]
      });
    };
  _v0.s(["SingleSignOnPage", 0, ({
    userId: _v0,
    rolesInfo: _v1 = [],
    scimAppWarning: _v2 = _v12.OnlyTheAccountOwnerCanSetUpApiApps
  }) => {
    let _v3 = (0, _v3.useToast)(),
      _v4 = (0, _v2.useContext)(_v8.ViewerContext),
      _v5 = (_v4?.teamUser?.ownerId ?? _v4?.user?.id) === _v4?.user?.id,
      _v6 = (0, _v2.useCallback)((_v0 = _v12.SomethingWentWrong) => {
        _v3({
          duration: _v6.NOTIFICATION_DURATION,
          title: _v0
        });
      }, [_v3]),
      _v7 = _v25(),
      [_v8, _v9] = (0, _v2.useState)(_v7),
      [_v10, _v11] = (0, _v2.useState)(crypto.randomUUID()),
      [_v12, _v13] = (0, _v2.useState)(null),
      [_v14, _v15] = (0, _v2.useState)(_v7),
      {
        isModalOpen: _v16,
        openModal: _v17,
        closeModal: _v18,
        modalViewState: _v19,
        setModalViewState: _v20
      } = (() => {
        let [_v0, _v1] = (0, _v2.useState)(!1),
          [_v2, _v3] = (0, _v2.useState)("create");
        return {
          isModalOpen: _v0,
          openModal: () => _v1(!0),
          closeModal: () => _v1(!1),
          modalViewState: _v2,
          setModalViewState: _v3
        };
      })(),
      [_v21, _v22] = (0, _v2.useState)(!1),
      {
        ssoConnections: _v23,
        ssoConnectionsLoading: _v24,
        ssoConnectionsError: _v25
      } = (({
        userId: _v0
      }) => {
        let [_v1, _v2] = (0, _v9.useGetSsoConnectionsLazy)(),
          _v3 = (0, _v2.useCallback)(() => {
            _v0 && _v1 && _v1({
              select: _v15,
              where: {
                userId: _v0
              }
            });
          }, [_v0]);
        return (0, _v2.useEffect)(_v3, [_v3]), {
          ssoConnections: (_v0 => {
            if (_v0?.data) for (let _v0 of _v0.data) _v27(_v0);
            return _v0;
          })(_v2.data),
          ssoConnectionsLoading: _v2.loading,
          ssoConnectionsError: _v2.error
        };
      })({
        userId: _v0
      }),
      {
        ssoDomains: _v26,
        ssoDomainsLoading: _v27,
        ssoDomainsError: _v28
      } = (({
        userId: _v0,
        connectionUri: _v1
      }) => {
        let [_v2, _v3] = _v39(),
          _v4 = (0, _v2.useCallback)(() => {
            _v0 && _v1 && _v2 && _v2({
              select: _v16,
              where: {
                userId: _v0,
                connectionUuid: _v24(_v1)
              }
            });
          }, [_v0, _v1]);
        return (0, _v2.useEffect)(_v4, [_v4]), {
          ssoDomains: _v3.data,
          ssoDomainsLoading: _v3.loading,
          ssoDomainsError: _v3.error
        };
      })({
        userId: _v0,
        connectionUri: _v14.uri
      }),
      {
        ssoSettings: _v29,
        ssoSettingsLoading: _v30,
        ssoSettingsError: _v31
      } = (({
        userId: _v0
      }) => {
        let [_v1, _v2] = _v44(),
          _v3 = (0, _v2.useCallback)(() => {
            _v0 && _v1 && _v1({
              select: _v14,
              where: {
                userId: _v0
              }
            });
          }, [_v0]);
        return (0, _v2.useEffect)(_v3, [_v3]), {
          ssoSettings: _v2.data,
          ssoSettingsLoading: _v2.loading,
          ssoSettingsError: _v2.error
        };
      })({
        userId: _v0
      }),
      {
        updateConnectionInState: _v32,
        deleteConnectionInState: _v33,
        addConnectionToState: _v34,
        ssoConnectionsState: _v35
      } = (_v0 => {
        let [_v1, _v2] = (0, _v2.useState)([]);
        return (0, _v2.useEffect)(() => {
          _v0 && _v2(_v0);
        }, [_v0]), {
          updateConnectionInState: _v0 => {
            _v2(_v0 => _v0.map(_v0 => _v0.uri === _v0.uri ? _v0 : _v0));
          },
          deleteConnectionInState: _v0 => {
            _v2(_v1.filter(_v0 => _v0.uri !== _v0.uri));
          },
          addConnectionToState: _v0 => {
            _v2([..._v1, _v0]);
          },
          ssoConnectionsState: _v1
        };
      })(_v23?.data),
      {
        ssoDomainsState: _v36,
        addDomainToState: _v37,
        removeDomainFromState: _v38,
        resetDomainsInState: _v39
      } = (_v0 => {
        let [_v1, _v2] = (0, _v2.useState)([]);
        return (0, _v2.useEffect)(() => {
          void 0 !== _v0 && JSON.stringify(_v0) !== JSON.stringify(_v1) && _v2(_v0);
        }, [_v0]), {
          ssoDomainsState: _v1,
          addDomainToState: _v0 => {
            _v2([..._v1, _v0]);
          },
          removeDomainFromState: _v0 => {
            _v2(_v1.filter(_v0 => _v0.uri !== _v0.uri));
          },
          resetDomainsInState: () => {
            _v2([]);
          }
        };
      })(_v26?.data),
      {
        updateSettingsInState: _v40,
        ssoSettingsState: _v41
      } = (_v0 => {
        let [_v1, _v2] = (0, _v2.useState)(_v0);
        return (0, _v2.useEffect)(() => {
          _v0 && _v2(_v0);
        }, [_v0]), {
          updateSettingsInState: _v0 => {
            _v2(_v0 => ({
              ..._v0,
              ..._v0
            }));
          },
          ssoSettingsState: _v1
        };
      })(_v29),
      {
        onEditConnection: _v42,
        onCreateConnection: _v43,
        onConnectionUpdateSuccess: _v44,
        onConnectionDeleteSuccess: _v45,
        onConnectionCreateSuccess: _v46,
        onDomainCreateSuccess: _v47,
        onDomainDeleteSuccess: _v48,
        onSettingUpdateSuccess: _v49,
        onError: _v50,
        onCopy: _v51
      } = (({
        newConnection: _v0,
        setNewConnection: _v1,
        setSelectedConnection: _v2,
        setCreatedConnection: _v3,
        showNotification: _v4,
        updateConnectionInState: _v5,
        deleteConnectionInState: _v6,
        addConnectionToState: _v7,
        addDomainToState: _v8,
        resetDomainsInState: _v9,
        removeDomainFromState: _v10,
        updateSettingsInState: _v11,
        setNewUuid: _v12,
        openModal: _v13,
        closeModal: _v14,
        setModalViewState: _v15
      }) => {
        let _v16,
          _v17,
          _v18,
          _v19,
          _v20,
          {
            sendSSOConnectionCreateAttempt: _v21,
            sendSSOConnectionSaved: _v22,
            sendSSOConnectionEnabled: _v23
          } = (_v16 = (0, _v51.useViewer)(), _v17 = (0, _v2.useMemo)(() => (0, _v46.buildActionBpContext)({
            action_type: "click",
            feature: null
          }), []), _v18 = (0, _v2.useCallback)((_v0, _v1) => (0, _v47.buildProductAnalyticsBpContext)({
            product: "collaboration",
            feature: "settings",
            location: "workspace",
            copy: _v1,
            element: _v0
          }), []), _v19 = (0, _v2.useMemo)(() => (0, _v48.buildTeamBpContextFromTeamUser)(_v16?.teamUser), [_v16?.teamUser]), _v20 = (0, _v2.useMemo)(() => (0, _v49.buildThirdPartyIntegrationBpContext)({
            integration_id: null,
            integration_name: null,
            is_partner: null
          }), []), {
            sendSSOConnectionCreateAttempt: () => {
              (0, _v50.sendBpEventWithContexts)("vimeo.sso_connection_create_attempt", {
                ..._v17,
                ..._v18("button", "Create connection"),
                ..._v19,
                ..._v20
              }, -1);
            },
            sendSSOConnectionSaved: (_v0, _v1) => {
              (0, _v50.sendBpEventWithContexts)("vimeo.sso_connection_saved", {
                ..._v17,
                ..._v18("button", "Save"),
                ..._v19,
                ..._v20
              }, 2, {
                single_logout_url: _v0,
                sso_uuid: _v1
              });
            },
            sendSSOConnectionEnabled: _v0 => {
              (0, _v50.sendBpEventWithContexts)("vimeo.sso_connection_enabled", {
                ..._v17,
                ..._v18("toggle", "Enable connection " + _v0),
                ..._v19,
                ..._v20
              }, -1);
            }
          });
        return {
          onEditConnection: _v0 => {
            _v15("edit"), _v2(_v0), _v13();
          },
          onCreateConnection: () => {
            _v15("create"), _v2(_v0), _v9(), _v13(), _v21();
          },
          onConnectionUpdateSuccess: (_v0, _v1, _v2 = !0, _v3 = !1) => {
            _v4(_v12.ConnectionUpdated), _v5(_v0), _v2 && _v14(), _v3 && _v0.isActive && _v23(_v0.title), _v1 && _v0.singleLogoutUrl != _v1.singleLogoutUrl && _v22(_v0.singleLogoutUrl, _v24(_v0.uri));
          },
          onConnectionDeleteSuccess: _v0 => {
            _v4(_v12.ConnectionDeleted), _v14(), _v6(_v0);
          },
          onConnectionCreateSuccess: _v0 => {
            _v4(_v12.ConnectionCreated), _v7(_v0), _v15("info"), _v1(_v25()), _v3(_v0), _v12(crypto.randomUUID()), _v22(_v0.singleLogoutUrl, _v24(_v0.uri));
          },
          onDomainCreateSuccess: _v0 => {
            _v4(_v12.DomainRequestCreated), _v8(_v0);
          },
          onDomainDeleteSuccess: (_v0, _v1) => {
            _v4(_v12.DomainDeleted), _v10(_v0), _v1.metadata.interactions.connect.domains = _v1.metadata.interactions.connect.domains.filter(_v0 => _v0 !== _v0.domainName), _v5(_v1);
          },
          onSettingUpdateSuccess: _v0 => {
            _v4(_v12.Saved), _v11(_v0);
          },
          onError: _v0 => {
            _v0 || (_v0 = _v12.SomethingWentWrong), void 0 !== _v0 && _v4(_v0);
          },
          onCopy: () => {
            _v4(_v12.Copied);
          }
        };
      })({
        newConnection: _v8,
        setNewConnection: _v9,
        setSelectedConnection: _v15,
        setCreatedConnection: _v13,
        showNotification: _v6,
        updateConnectionInState: _v32,
        deleteConnectionInState: _v33,
        addConnectionToState: _v34,
        addDomainToState: _v37,
        resetDomainsInState: _v39,
        removeDomainFromState: _v38,
        updateSettingsInState: _v40,
        setNewUuid: _v11,
        openModal: _v17,
        closeModal: _v18,
        setModalViewState: _v20
      });
    return (0, _v2.useEffect)(() => {
      (_v25 || _v28 || _v31) && _v6(_v12.SomethingWentWrong);
    }, [_v6, _v25, _v28, _v31]), (0, _v2.useEffect)(() => {
      if (_v16) {
        let _v0 = _v14.connectionType === _v23 && _v41?.chinaSiteEnabled,
          _v1 = _v14.connectionType === _v22 && _v41?.enterpriseSiteEnabled;
        "edit" === _v19 && (_v0 || _v1) && _v22(!0);
      } else _v22(!1);
    }, [_v16, _v19, _v14.connectionType, _v41?.chinaSiteEnabled, _v41?.enterpriseSiteEnabled]), (0, _v1.jsxs)(_v5.Box, {
      maxWidth: _v6.SETTING_PAGES_MAX_WIDTH,
      width: "100%",
      margin: "0 auto",
      paddingBottom: "500",
      children: [(0, _v1.jsx)(_v7.SettingsPageContentHeader, {
        title: _v12.SsoPageHeader,
        description: (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v12.ConnectSaml, " ", (0, _v1.jsx)(_v4.Link, {
            target: "_blank",
            fontSize: "inherit",
            href: _v13,
            variant: "inline-secondary",
            children: _v12.FollowGuide
          })]
        })
      }), (0, _v1.jsx)(_v116, {
        ownerId: _v0,
        connections: _v35,
        loading: _v24,
        onCreate: _v43,
        onEdit: _v0 => _v42(_v0),
        onConnectionUpdateSuccess: _v44,
        onError: _v50
      }), (0, _v1.jsx)(_v115, {
        ssoSettings: _v41,
        ssoLoading: _v30,
        userId: _v0,
        onError: () => _v6(),
        isOwner: _v5,
        onSettingUpdateSuccess: _v49,
        rolesInfo: _v1,
        scimAppWarning: _v2
      }), (0, _v1.jsx)(_v102, {
        userId: _v0,
        connection: _v14,
        createdConnection: _v12,
        ssoDomains: _v36,
        ssoDomainsLoading: _v27,
        chinaSiteEnabled: _v41?.chinaSiteEnabled,
        chinaSiteDomain: _v41?.chinaSiteDomain,
        enterpriseSiteEnabled: _v41?.enterpriseSiteEnabled,
        enterpriseSiteDomain: _v41?.enterpriseSiteDomain,
        lockEnterpriseSiteSwitch: _v21,
        newUuid: _v10,
        isOpen: _v16,
        onConnectionUpdateSuccess: _v44,
        onConnectionDeleteSuccess: _v45,
        onConnectionCreateSuccess: _v46,
        onDomainCreateSuccess: _v47,
        onDomainDeleteSuccess: _v48,
        onError: _v50,
        onCopy: _v51,
        onModalClose: _v18,
        modalView: _v19
      })]
    });
  }], 0);
}