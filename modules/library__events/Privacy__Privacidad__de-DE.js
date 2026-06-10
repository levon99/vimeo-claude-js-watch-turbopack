{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v5.translate)({
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
    _v8 = (0, _v5.translate)({
      singular: "Link privacy",
      dictionary: {
        es: {
          singular: "Privacidad de los enlaces"
        },
        "de-DE": {
          singular: "Link-Datenschutz"
        },
        "fr-FR": {
          singular: "Confidentialité du lien"
        },
        "ja-JP": {
          singular: "リンクのプライバシー"
        },
        "ko-KR": {
          singular: "링크 프라이버시"
        },
        "pt-BR": {
          singular: "Link de Privacidade"
        },
        "zh-CN": {
          singular: "链接隐私"
        }
      }
    }),
    _v9 = (0, _v5.translate)({
      singular: "Select link privacy",
      dictionary: {
        es: {
          singular: "Seleccionar privacidad de los enlaces"
        },
        "de-DE": {
          singular: "Datenschutz für Links auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner le niveau de confidentialité du lien"
        },
        "ja-JP": {
          singular: "リンクのプライバシーを選択"
        },
        "ko-KR": {
          singular: "링크 프라이버시 선택"
        },
        "pt-BR": {
          singular: "Selecione a privacidade do link"
        },
        "zh-CN": {
          singular: "选择链接隐私"
        }
      }
    }),
    _v10 = (0, _v5.translate)({
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
    _v11 = (0, _v5.translate)({
      singular: "Anyone on the internet can view",
      dictionary: {
        es: {
          singular: "Cualquier persona en internet puede ver"
        },
        "de-DE": {
          singular: "Jeder im Internet kann anschauen"
        },
        "fr-FR": {
          singular: "Visible par tous les internautes"
        },
        "ja-JP": {
          singular: "インターネット上の誰もが視聴可能"
        },
        "ko-KR": {
          singular: "인터넷 사용자는 누구나 볼 수 있습니다."
        },
        "pt-BR": {
          singular: "Qualquer pessoa na internet pode ver"
        },
        "zh-CN": {
          singular: "互联网上的任何人都可以查看"
        }
      }
    }),
    _v12 = (0, _v5.translate)({
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
    _v13 = (0, _v5.translate)({
      singular: "Only you and people with access can view",
      dictionary: {
        es: {
          singular: "Solo usted y quienes tengan acceso pueden ver"
        },
        "de-DE": {
          singular: "Nur Sie und Personen mit Zugriffsrechten können anschauen"
        },
        "fr-FR": {
          singular: "Seuls vous et les personnes autorisées pouvez voir ce contenu"
        },
        "ja-JP": {
          singular: "あなたとアクセス権を持つ人のみ視聴可能"
        },
        "ko-KR": {
          singular: "본인 및 액세스 권한이 있는 사람만 볼 수 있습니다."
        },
        "pt-BR": {
          singular: "Somente você e as pessoas com acesso podem ver"
        },
        "zh-CN": {
          singular: "只有您和具有访问权限的人员可以查看"
        }
      }
    }),
    _v14 = (0, _v5.translate)({
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
    _v15 = (0, _v5.translate)({
      singular: "Only people with the link can view",
      dictionary: {
        es: {
          singular: "Solo quienes tengan el enlace pueden ver"
        },
        "de-DE": {
          singular: "Nur Personen mit dem Link können anschauen"
        },
        "fr-FR": {
          singular: "Seules les personnes disposant du lien peuvent voir ce contenu"
        },
        "ja-JP": {
          singular: "リンクを持っている人のみ視聴可能"
        },
        "ko-KR": {
          singular: "링크가 있는 사람만 시청할 수 있습니다."
        },
        "pt-BR": {
          singular: "Somente pessoas com o link podem ver"
        },
        "zh-CN": {
          singular: "只有拥有链接的人才能查看"
        }
      }
    }),
    _v16 = (0, _v5.translate)({
      singular: "Hide from Vimeo",
      dictionary: {
        es: {
          singular: "Ocultar de Vimeo"
        },
        "de-DE": {
          singular: "Bei Vimeo ausblenden"
        },
        "fr-FR": {
          singular: "Masquer dans Vimeo"
        },
        "ja-JP": {
          singular: "Vimeoで非表示にする"
        },
        "ko-KR": {
          singular: "Vimeo에서 숨기기"
        },
        "pt-BR": {
          singular: "Ocultar do Vimeo"
        },
        "zh-CN": {
          singular: "从 Vimeo 隐藏"
        }
      }
    }),
    _v17 = (0, _v5.translate)({
      singular: "Private on your account, but embeddable anywhere",
      dictionary: {
        es: {
          singular: "Se establece como privado en su cuenta, pero se puede insertar en cualquier lugar"
        },
        "de-DE": {
          singular: "Privat in Ihrem Konto, aber überall einbettbar"
        },
        "fr-FR": {
          singular: "La vidéo est privée sur votre compte mais intégrable partout"
        },
        "ja-JP": {
          singular: "アカウント上では非公開ですが、どこにでも埋め込みは可能です"
        },
        "ko-KR": {
          singular: "동영상을 계정에서 비공개로 설정하더라도 원하는 모든 곳에 임베드할 수 있습니다."
        },
        "pt-BR": {
          singular: "Privado na sua conta, mas incorporável em qualquer lugar"
        },
        "zh-CN": {
          singular: "在您的帐户上是私密的，但可嵌入到任何位置"
        }
      }
    }),
    _v18 = (0, _v5.translate)({
      singular: "Password",
      dictionary: {
        es: {
          singular: "Contraseña"
        },
        "de-DE": {
          singular: "Kennwort"
        },
        "fr-FR": {
          singular: "Mot de passe "
        },
        "ja-JP": {
          singular: "パスワード"
        },
        "ko-KR": {
          singular: "비밀번호"
        },
        "pt-BR": {
          singular: "Senha"
        },
        "zh-CN": {
          singular: "密码"
        }
      }
    }),
    _v19 = (0, _v5.translate)({
      singular: "Only people with the password can view",
      dictionary: {
        es: {
          singular: "Solo quienes tengan la contraseña pueden ver"
        },
        "de-DE": {
          singular: "Nur Personen mit Kennwort können sehen."
        },
        "fr-FR": {
          singular: "Seules les personnes disposant du mot de passe peuvent voir ce contenu"
        },
        "ja-JP": {
          singular: "パスワードを持っている人のみ視聴可能"
        },
        "ko-KR": {
          singular: "비밀번호가 있는 사람만 볼 수 있습니다."
        },
        "pt-BR": {
          singular: "Somente pessoas com a senha podem ver"
        },
        "zh-CN": {
          singular: "只有知道密码的人才能查看"
        }
      }
    }),
    _v20 = (0, _v5.translate)({
      singular: "Password field cannot be empty",
      dictionary: {
        es: {
          singular: "El campo Contraseña no puede estar vacío"
        },
        "de-DE": {
          singular: "Das Feld „Kennwort“ darf nicht leer sein"
        },
        "fr-FR": {
          singular: "Le champ du mot de passe ne peut pas être vide"
        },
        "ja-JP": {
          singular: "パスワードフィールドは入力が必須です"
        },
        "ko-KR": {
          singular: "비밀번호 입력란은 비워둘 수 없습니다."
        },
        "pt-BR": {
          singular: 'O campo "Senha" não pode estar em branco'
        },
        "zh-CN": {
          singular: "密码字段不能为空"
        }
      }
    }),
    _v21 = (0, _v5.translate)({
      singular: "Password exceeds 32 characters",
      dictionary: {
        es: {
          singular: "La contraseña tiene más de 32 caracteres"
        },
        "de-DE": {
          singular: "Kennwort überschreitet 32 Zeichen"
        },
        "fr-FR": {
          singular: "Le mot de passe dépasse 32 caractères"
        },
        "ja-JP": {
          singular: "パスワードが32文字を超えています"
        },
        "ko-KR": {
          singular: "비밀번호가 32자를 초과합니다."
        },
        "pt-BR": {
          singular: "A senha excede 32 caracteres"
        },
        "zh-CN": {
          singular: "密码超过 32 个字符"
        }
      }
    }),
    _v22 = (0, _v5.translate)({
      singular: "Yes",
      dictionary: {
        es: {
          singular: "Sí"
        },
        "de-DE": {
          singular: "Ja"
        },
        "fr-FR": {
          singular: "Oui"
        },
        "ja-JP": {
          singular: "はい"
        },
        "ko-KR": {
          singular: "예"
        },
        "pt-BR": {
          singular: "Sim"
        },
        "zh-CN": {
          singular: "是"
        }
      }
    }),
    _v23 = (0, _v5.translate)({
      singular: "No",
      dictionary: {
        "de-DE": {
          singular: "Nein"
        },
        "fr-FR": {
          singular: "Non"
        },
        "ja-JP": {
          singular: "いいえ"
        },
        "ko-KR": {
          singular: "아니요"
        },
        "pt-BR": {
          singular: "Não"
        },
        "zh-CN": {
          singular: "否"
        }
      }
    }),
    _v24 = (0, _v5.translate)({
      singular: "Comments",
      dictionary: {
        es: {
          singular: "Comentarios"
        },
        "de-DE": {
          singular: "Kommentare"
        },
        "fr-FR": {
          singular: "Commentaires"
        },
        "ja-JP": {
          singular: "コメント"
        },
        "ko-KR": {
          singular: "소감"
        },
        "pt-BR": {
          singular: "Comentários"
        },
        "zh-CN": {
          singular: "评论"
        }
      }
    }),
    _v25 = (0, _v5.translate)({
      singular: "Allow viewer comments",
      dictionary: {
        es: {
          singular: "Permitir comentarios de los espectadores"
        },
        "de-DE": {
          singular: "Zuschauer-Kommentare erlauben"
        },
        "fr-FR": {
          singular: "Autoriser les commentaires des spectateurs"
        },
        "ja-JP": {
          singular: "視聴者のコメントを許可"
        },
        "ko-KR": {
          singular: "뷰어 댓글 허용"
        },
        "pt-BR": {
          singular: "Permitir comentários de espectadores"
        },
        "zh-CN": {
          singular: "允许观众评论"
        }
      }
    }),
    _v26 = (0, _v5.translate)({
      singular: "Select comments privacy",
      dictionary: {
        es: {
          singular: "Seleccionar privacidad de los comentarios"
        },
        "de-DE": {
          singular: "Datenschutz für Kommentare auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner le niveau de confidentialité des commentaires"
        },
        "ja-JP": {
          singular: "コメントのプライバシーを選択"
        },
        "ko-KR": {
          singular: "댓글 프라이버시 선택"
        },
        "pt-BR": {
          singular: "Selecione a privacidade dos comentários"
        },
        "zh-CN": {
          singular: "选择评论隐私"
        }
      }
    }),
    _v27 = (0, _v5.translate)({
      singular: "Embed",
      dictionary: {
        es: {
          singular: "Insertar"
        },
        "de-DE": {
          singular: "Einbetten"
        },
        "fr-FR": {
          singular: "Intégration"
        },
        "ja-JP": {
          singular: "埋め込み"
        },
        "ko-KR": {
          singular: "임베드"
        },
        "pt-BR": {
          singular: "Incorporação"
        },
        "zh-CN": {
          singular: "嵌入"
        }
      }
    }),
    _v28 = (0, _v5.translate)({
      singular: "Select embed privacy",
      dictionary: {
        es: {
          singular: "Seleccionar privacidad de las inserciones"
        },
        "de-DE": {
          singular: "Datenschutz für Einbettungen auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner le niveau de confidentialité de l'intégration"
        },
        "ja-JP": {
          singular: "埋め込みのプライバシーを選択"
        },
        "ko-KR": {
          singular: "임베드 프라이버시 선택"
        },
        "pt-BR": {
          singular: "Selecione incorporar privacidade"
        },
        "zh-CN": {
          singular: "选择嵌入隐私"
        }
      }
    }),
    _v29 = (0, _v5.translate)({
      singular: "Anyone in this team can view",
      dictionary: {
        es: {
          singular: "Cualquiera en este equipo puede ver"
        },
        "de-DE": {
          singular: "Jedes Teammitglied kann es ansehen"
        },
        "fr-FR": {
          singular: "Visible par tous les membres de cette equipe"
        },
        "ja-JP": {
          singular: "このチームのメンバーは誰でも閲覧できます"
        },
        "ko-KR": {
          singular: "이 팀의 누구나 볼 수 있습니다"
        },
        "pt-BR": {
          singular: "Qualquer pessoa nesta equipe pode visualizar"
        },
        "zh-CN": {
          singular: "团队中的任何人均可查看"
        }
      }
    }),
    _v30 = (0, _v5.translate)({
      singular: "Anywhere",
      dictionary: {
        es: {
          singular: "En cualquier sitio"
        },
        "de-DE": {
          singular: "Überall"
        },
        "fr-FR": {
          singular: "N'importe où"
        },
        "ja-JP": {
          singular: "すべてのサイト"
        },
        "ko-KR": {
          singular: "어디에나"
        },
        "pt-BR": {
          singular: "Em qualquer lugar"
        },
        "zh-CN": {
          singular: "任何位置"
        }
      }
    }),
    _v31 = (0, _v5.translate)({
      singular: "Nowhere",
      dictionary: {
        es: {
          singular: "En ningún sitio"
        },
        "de-DE": {
          singular: "Nirgendwo"
        },
        "fr-FR": {
          singular: "Nulle part"
        },
        "ja-JP": {
          singular: "いっさい許可しない"
        },
        "ko-KR": {
          singular: "불가"
        },
        "pt-BR": {
          singular: "Em nenhum lugar"
        },
        "zh-CN": {
          singular: "无处"
        }
      }
    }),
    _v32 = (0, _v5.translate)({
      singular: "Specific domains",
      dictionary: {
        es: {
          singular: "En dominios específicos"
        },
        "de-DE": {
          singular: "Bestimmte Domains"
        },
        "fr-FR": {
          singular: "Domaines spécifiques"
        },
        "ja-JP": {
          singular: "特定のドメイン"
        },
        "ko-KR": {
          singular: "특정 도메인"
        },
        "pt-BR": {
          singular: "Domínios específicos"
        },
        "zh-CN": {
          singular: "特定域"
        }
      }
    }),
    _v33 = (0, _v5.translate)({
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
    _v34 = (0, _v5.translate)({
      singular: "Add a domain",
      dictionary: {
        es: {
          singular: "Agregar un dominio"
        },
        "de-DE": {
          singular: "Eine Domäne hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter un domaine"
        },
        "ja-JP": {
          singular: "ドメインを追加"
        },
        "ko-KR": {
          singular: "도메인 추가"
        },
        "pt-BR": {
          singular: "Adicionar domínio"
        },
        "zh-CN": {
          singular: "添加域"
        }
      }
    }),
    _v35 = (0, _v5.translate)({
      singular: "Remove a domain to add another",
      dictionary: {
        es: {
          singular: "Elimine un dominio para agregar otro"
        },
        "de-DE": {
          singular: "Entfernen Sie eine Domain, um eine andere hinzuzufügen"
        },
        "fr-FR": {
          singular: "Supprimez un domaine pour en ajouter un autre"
        },
        "ja-JP": {
          singular: "ドメインを削除して別のドメインを追加"
        },
        "ko-KR": {
          singular: "다른 도메인을 추가하려면 기존 도메인을 제거하세요."
        },
        "pt-BR": {
          singular: "Remova um domínio para adicionar outro"
        },
        "zh-CN": {
          singular: "移除一个域以添加另一个"
        }
      }
    }),
    _v36 = (0, _v5.translate)({
      singular: "Clear all",
      dictionary: {
        es: {
          singular: "Borrar todo"
        },
        "de-DE": {
          singular: "Alle löschen"
        },
        "fr-FR": {
          singular: "Tout supprimer"
        },
        "ja-JP": {
          singular: "すべて削除"
        },
        "ko-KR": {
          singular: "모두 지우기"
        },
        "pt-BR": {
          singular: "Limpar tudo"
        },
        "zh-CN": {
          singular: "清除全部"
        }
      }
    }),
    _v37 = (0, _v5.translate)({
      singular: "Domains field cannot be empty",
      dictionary: {
        es: {
          singular: "El campo Dominios no puede estar vacío"
        },
        "de-DE": {
          singular: "Das Feld „Domains“ darf nicht leer sein"
        },
        "fr-FR": {
          singular: "Le champ Domaines ne peut pas être vide"
        },
        "ja-JP": {
          singular: "ドメインフィールドは入力が必須です"
        },
        "ko-KR": {
          singular: "도메인 입력란은 비워둘 수 없습니다."
        },
        "pt-BR": {
          singular: 'O campo "Domínios" não pode estar em branco'
        },
        "zh-CN": {
          singular: "域名字段不能为空"
        }
      }
    }),
    _v38 = (0, _v5.translate)({
      singular: "Overwrite existing domains with new",
      dictionary: {
        es: {
          singular: "Sobrescribir dominios existentes con nuevos"
        },
        "de-DE": {
          singular: "Bestehende Domains mit neuer Domain überschreiben"
        },
        "fr-FR": {
          singular: "Remplacer les domaines existants par de nouveaux"
        },
        "ja-JP": {
          singular: "既存のドメインを新しいドメインで上書きする"
        },
        "ko-KR": {
          singular: "기존 도메인을 새 도메인으로 덮어쓰기"
        },
        "pt-BR": {
          singular: "Substituir domínios existentes por novos domínios"
        },
        "zh-CN": {
          singular: "用新域名覆盖现有域名"
        }
      }
    }),
    _v39 = (0, _v5.translate)({
      singular: "Invalid domain URL entered",
      dictionary: {
        es: {
          singular: "URL de dominio ingresada no válida"
        },
        "de-DE": {
          singular: "Ungültige Domain-URL eingegeben"
        },
        "fr-FR": {
          singular: "URL de domaine saisie non valide"
        },
        "ja-JP": {
          singular: "無効なドメインURLが入力されました"
        },
        "ko-KR": {
          singular: "입력한 도메인 URL이 유효하지 않습니다."
        },
        "pt-BR": {
          singular: "URL de domínio inválido inserido"
        },
        "zh-CN": {
          singular: "输入的域 URL 无效"
        }
      }
    }),
    _v40 = (0, _v5.translate)({
      singular: "Allow downloads",
      dictionary: {
        es: {
          singular: "Permitir las descargas"
        },
        "de-DE": {
          singular: "Downloads zulassen"
        },
        "fr-FR": {
          singular: "Autoriser les téléchargements"
        },
        "ja-JP": {
          singular: "ダウンロードを許可"
        },
        "ko-KR": {
          singular: "다운로드 허용"
        },
        "pt-BR": {
          singular: "Permitir downloads"
        },
        "zh-CN": {
          singular: "允许下载"
        }
      }
    }),
    _v41 = (0, _v5.translate)({
      singular: "Allow video downloads",
      dictionary: {
        es: {
          singular: "Permitir descargas de video"
        },
        "de-DE": {
          singular: "Videoherunterladungen zulassen"
        },
        "fr-FR": {
          singular: "Autoriser les téléchargements vidéo"
        },
        "ja-JP": {
          singular: "動画のダウンロードを許可"
        },
        "ko-KR": {
          singular: "동영상 다운로드 허용"
        },
        "pt-BR": {
          singular: "Permitir download de vídeos"
        },
        "zh-CN": {
          singular: "允许视频下载"
        }
      }
    }),
    _v42 = (0, _v5.translate)({
      singular: "Select downloads privacy",
      dictionary: {
        es: {
          singular: "Seleccionar privacidad de las descargas"
        },
        "de-DE": {
          singular: "Datenschutz für Downloads auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner le niveau de confidentialité des téléchargements"
        },
        "ja-JP": {
          singular: "ダウンロードのプライバシーを選択"
        },
        "ko-KR": {
          singular: "다운로드 프라이버시 선택"
        },
        "pt-BR": {
          singular: "Selecione a privacidade dos downloads"
        },
        "zh-CN": {
          singular: "选择下载隐私"
        }
      }
    }),
    _v43 = (0, _v5.translate)({
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
    _v44 = (0, _v5.translate)({
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
    _v45 = (0, _v5.translate)({
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
    }),
    _v46 = {
      get Article17ModalMessage() {
        return (0, _v5.translate)({
          singular: "One or more of your videos may be restricted to {LINK}Private{/LINK} because they contain music that may belong to someone else. Deselect affected videos before making changes.",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/14798997442961-Why-was-my-video-set-to-private-",
              target: "_blank",
              variant: "minimal",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Uno o más de sus videos pueden estar restringidos a {LINK}Privado{/LINK} porque contienen música que puede pertenecer a otra persona. Anule la selección de los videos afectados antes de realizar los cambios."
            },
            "de-DE": {
              singular: "Ein oder mehrere deiner Videos wurden möglicherweise auf {LINK}privat{/LINK} gesetzt, weil sie Musik enthalten, die jemand anderem gehören könnte. Hebe die Auswahl der betroffenen Videos auf, bevor du Änderungen vornimmst."
            },
            "fr-FR": {
              singular: "Une ou plusieurs de vos vidéos peuvent être restreintes et définies sur {LINK}Privée{/LINK} car elles contiennent de la musique pouvant appartenir à quelqu'un d'autre. Désélectionnez les vidéos concernées avant d'apporter des modifications."
            },
            "ja-JP": {
              singular: "他の人が所有しているかもしれない音楽が含まれているため、1本以上の動画のプライバシー設定が「{LINK}プライベート{/LINK}」に制限されている可能性があります。変更を加える前に、影響のある動画の選択を解除してください。"
            },
            "ko-KR": {
              singular: "하나 이상의 동영상에 다른 사람이 소유한 음악이 포함되어 있어 {LINK}비공개{/LINK}로 제한될 수 있습니다. 변경하기 전에 해당 동영상의 선택을 취소하세요."
            },
            "pt-BR": {
              singular: "Um dos seus vídeos pode estar restrito ao modo {LINK}Privado{/LINK}, porque contêm música que pode pertencer a outra pessoa.  Desmarque os vídeos afetados antes de fazer qualquer alteração."
            },
            "zh-CN": {
              singular: "您的一个或多个视频可能被限制为{LINK}私人视频{/LINK}，因为其中包含可能属于他人的音乐。请取消选择受影响的视频，再进行更改。"
            }
          }
        });
      },
      Anywhere: _v30,
      AnyoneAtCompanyDescription: _v29,
      Cancel: _v44,
      ClearAll: _v36,
      Close: _v45,
      CommentsLabel: _v25,
      CommentsPlaceholder: _v26,
      CommentsTitle: _v24,
      DomainsCounterText: (_v0, _v1) => (0, _v5.translate)({
        singular: "{NUM_DOMAINS}/{MAX_NUM_DOMAINS} domains",
        replacements: {
          NUM_DOMAINS: _v0,
          MAX_NUM_DOMAINS: _v1
        },
        dictionary: {
          es: {
            singular: "{NUM_DOMAINS}/{MAX_NUM_DOMAINS} dominios"
          },
          "de-DE": {
            singular: "{NUM_DOMAINS}/{MAX_NUM_DOMAINS} Domains"
          },
          "fr-FR": {
            singular: "{NUM_DOMAINS}/{MAX_NUM_DOMAINS} domaines"
          },
          "ja-JP": {
            singular: "{NUM_DOMAINS}/{MAX_NUM_DOMAINS}ドメイン"
          },
          "ko-KR": {
            singular: "도메인 {NUM_DOMAINS}/{MAX_NUM_DOMAINS}개"
          },
          "pt-BR": {
            singular: "{NUM_DOMAINS}/{MAX_NUM_DOMAINS} domínios"
          },
          "zh-CN": {
            singular: "{NUM_DOMAINS}/{MAX_NUM_DOMAINS} 域"
          }
        }
      }),
      DomainsPlaceholder: _v34,
      DomainRequiredError: _v37,
      DomainsTitle: _v33,
      DomainsTooltipText: _v35,
      DownloadsLabel: _v41,
      DownloadsPlaceholder: _v42,
      DownloadsTitle: _v40,
      EmbedLabel: _v0 => (0, _v5.translate)({
        singular: "Where can this video be embedded?",
        plural: "Where can these videos be embedded?",
        count: _v0,
        dictionary: {
          es: {
            singular: "¿Dónde se puede insertar este video?"
          },
          "de-DE": {
            singular: "Wo kann dieses Video eingebettet werden?"
          },
          "fr-FR": {
            singular: "Où est-ce que cette vidéo peut être intégrée ?"
          },
          "ja-JP": {
            singular: "どのサイトに動画の埋め込みを許可しますか？"
          },
          "ko-KR": {
            singular: "이 동영상을 어디에 임베드할 수 있나요?"
          },
          "pt-BR": {
            singular: "Onde este vídeo pode ser incorporado?"
          },
          "zh-CN": {
            singular: "此视频可以嵌入哪里？"
          }
        }
      }),
      EmbedPlaceholder: _v28,
      EmbedTitle: _v27,
      HideFromVimeo: _v16,
      HideFromVimeoDescription: _v17,
      InvalidDomainError: _v39,
      LinkPlaceholder: _v9,
      LinkTitle: _v8,
      MakeAtLeastOneSelection: (0, _v5.translate)({
        singular: "Make at least one selection",
        dictionary: {
          es: {
            singular: "Haga al menos una selección"
          },
          "de-DE": {
            singular: "Wähle mindestens eine Option aus"
          },
          "fr-FR": {
            singular: "Faites au moins un choix"
          },
          "ja-JP": {
            singular: "少なくとも1つ選択してください"
          },
          "ko-KR": {
            singular: "하나 이상 선택"
          },
          "pt-BR": {
            singular: "Faça pelo menos uma seleção"
          },
          "zh-CN": {
            singular: "至少选择一个"
          }
        }
      }),
      No: _v23,
      Nowhere: _v31,
      OverwriteCheckboxLabel: _v38,
      Password: _v18,
      PasswordDescription: _v19,
      PasswordRequiredError: _v20,
      PasswordMaxLengthError: _v21,
      Privacy: _v7,
      Private: _v12,
      PrivateDescription: _v13,
      get PrivateModeMessage() {
        return (0, _v5.translate)({
          singular: "This account is in {LINK}private mode{/LINK}. Privacy settings may be restricted.",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426205757201-Private-Mode-for-your-account",
              target: "_blank",
              variant: "minimal",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Esta cuenta está en {LINK}modo privado{/LINK}. La configuración de privacidad puede estar restringida."
            },
            "de-DE": {
              singular: "Dieses Konto befindet sich im {LINK}Privatmodus{/LINK}. Die Datenschutzeinstellungen sind möglicherweise eingeschränkt."
            },
            "fr-FR": {
              singular: "Ce compte est en mode {LINK}privé{/LINK}. Les paramètres de confidentialité peuvent être restreints."
            },
            "ja-JP": {
              singular: "このアカウントは{LINK}プライベートモード{/LINK}です。プライバシー設定が制限される場合があります。"
            },
            "ko-KR": {
              singular: "이 계정은 {LINK}비공개 모드{/LINK}입니다. 프라이버시 설정이 제한될 수 있습니다."
            },
            "pt-BR": {
              singular: "Esta conta está em {LINK}modo privado{/LINK}. As configurações de privacidade podem estar restritas."
            },
            "zh-CN": {
              singular: "此帐户处于{LINK}私密模式{/LINK}。隐私设置可能受到限制。"
            }
          }
        });
      },
      Public: _v10,
      PublicDescription: _v11,
      Save: _v43,
      SpecificDomains: _v32,
      Unlisted: _v14,
      UnlistedDescription: _v15,
      Yes: _v22,
      PrivacyBulkUpdateAlertWarning: (0, _v5.translate)({
        singular: "Privacy can’t be updated on some videos because you don’t have permission",
        dictionary: {
          es: {
            singular: "No se puede actualizar la privacidad en algunos videos porque no tiene permiso"
          },
          "de-DE": {
            singular: "Die Datenschutzeinstellungen können bei einigen Videos nicht aktualisiert werden, da Sie keine Berechtigung dazu haben."
          },
          "fr-FR": {
            singular: "La confidentialité ne peut pas être modifiée sur certaines vidéos parce que vous n'en avez pas l'autorisation"
          },
          "ja-JP": {
            singular: "権限がないため、一部の動画のプライバシー設定を更新できません"
          },
          "ko-KR": {
            singular: "권한이 없어 일부 동영상의 프라이버시를 업데이트할 수 없습니다."
          },
          "pt-BR": {
            singular: "Não é possível atualizar a privacidade em alguns vídeos porque você não tem permissão"
          },
          "zh-CN": {
            singular: "无法更新某些视频的隐私设置，因为您没有权限"
          }
        }
      }),
      get StorageLimitExceeded() {
        return (0, _v5.translate)({
          singular: "You've reached the storage limit for private or embeddable videos. Go to {UPGRADE}vimeo.com/upgrade{/UPGRADE} to get more storage or change your {SETTINGS}upload defaults in the account settings page{/SETTINGS}.",
          replacements: {
            UPGRADE: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: "https://www.vimeo.com/upgrade",
              target: "_blank",
              variant: "minimal",
              children: _v0
            }),
            SETTINGS: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: "https://vimeo.com/settings/videos/upload_defaults",
              target: "_blank",
              variant: "minimal",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Has alcanzado el límite de almacenamiento para vídeos privados o incrustables. Ve a {UPGRADE}vimeo.com/upgrade{/UPGRADE} para obtener más espacio de almacenamiento o cambia tus {SETTINGS}valores predeterminados de subida en la página de configuración de la cuenta{/SETTINGS}."
            },
            "de-DE": {
              singular: "Sie haben das Speicherlimit für private oder einbettbare Videos erreicht. Gehen Sie zu {UPGRADE}vimeo.com/upgrade{/UPGRADE}, um mehr Speicher zu erhalten oder ändern Sie Ihre {SETTINGS}Upload-Voreinstellungen auf der Seite Kontoeinstellungen{/SETTINGS}."
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de stockage pour les vidéos privées ou intégrables. Rendez-vous sur {UPGRADE}vimeo.com/upgrade{/UPGRADE} pour obtenir plus d'espace de stockage ou modifier vos {SETTINGS}paramètres par défaut de téléversement dans la page des paramètres du compte{/SETTINGS}."
            },
            "ja-JP": {
              singular: "プライベートまたは埋め込み可能な動画のストレージ上限に達しました。{UPGRADE}vimeo.com/upgrade{/UPGRADE}にアクセスしてストレージを追加するか、{SETTINGS}アカウント設定ページのアップロードのデフォルト設定{/SETTINGS}を変更してください。"
            },
            "ko-KR": {
              singular: "비공개 또는 임베드 가능한 동영상의 저장 용량 한도에 도달했습니다. 저장 용량을 늘리려면 {UPGRADE}vimeo.com/upgrade{/UPGRADE}로 이동하거나 계정 설정 페이지에서 {SETTINGS}업로드 기본 설정을 변경하세요{/SETTINGS}."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de armazenamento para vídeos privados ou incorporáveis. Acesse {UPGRADE}vimeo.com/upgrade{/UPGRADE} para obter mais armazenamento ou altere seus {SETTINGS}padrões de envio na página de configurações da conta{/SETTINGS}."
            },
            "zh-CN": {
              singular: "您已达到私有或可嵌入视频的存储上限。前往 {UPGRADE}vimeo.com/upgrade{/UPGRADE} 获取更多存储空间，或更改您在{SETTINGS}帐户设置页面的上传默认设置{/SETTINGS}。"
            }
          }
        });
      }
    };
  _v0.s(["Translations", 0, _v46], 0);
  let _v47 = {
      privacy: "placeholder",
      title: _v46.LinkPlaceholder,
      description: "",
      icon: (0, _v1.jsx)(_v1.Fragment, {}),
      isDisabled: !0
    },
    _v48 = {
      name: "password",
      title: _v46.Password,
      label: _v46.Password,
      validation: {
        maxLength: {
          value: 32,
          message: _v46.PasswordMaxLengthError
        }
      }
    },
    _v49 = {
      name: "comments",
      title: _v46.CommentsTitle,
      label: _v46.CommentsLabel,
      placeholder: _v46.CommentsPlaceholder,
      options: [{
        value: "anybody",
        label: _v46.Yes
      }, {
        value: "nobody",
        label: _v46.No
      }]
    },
    _v50 = {
      name: "download",
      title: _v46.DownloadsTitle,
      label: _v46.DownloadsLabel,
      placeholder: _v46.DownloadsPlaceholder,
      options: [{
        value: "true",
        label: _v46.Yes
      }, {
        value: "false",
        label: _v46.No
      }]
    },
    _v51 = {
      name: "domains",
      title: _v46.DomainsTitle,
      label: _v46.DomainsPlaceholder
    };
  _v0.s(["COMMENTS_PRIVACY", 0, _v49, "DOMAINS", 0, _v51, "DOMAIN_REGEX", 0, /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, "DOWNLOAD_PRIVACY", 0, _v50, "LINK_PRIVACY_PLACEHOLDER", 0, _v47, "MAX_NUM_DOMAINS", 0, 50, "MAX_PASSWORD_LENGTH", 0, 32, "PRIVACY_PASSWORD", 0, _v48, "getLinkPrivacyOptionsMap", 0, (_v0, _v1, _v2) => _v2.DEFAULT_PRIVACY_OPTIONS.map(_v0 => _v2 ? (0, _v3.getNewPrivacyCopy)("xs", _v0, _v1)(_v0) : _v0).reduce((_v0, _v1) => (_v0[_v1.privacy] = {
    title: _v1.privacy !== _v2.DEFAULT_PRIVACY_VALUES.TEAM || _v2 ? _v1.title : (0, _v4.getTeamPrivacyTranslation)(_v0, _v1),
    description: _v1.description ?? "",
    icon: _v2 ? _v1.icon : _v2.VIDEO_PRIVACY_ICON_MAP[_v1.privacy]?.icon
  }, _v0), {})], 0);
}