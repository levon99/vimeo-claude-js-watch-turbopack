{
  "use strict";

  let _v1 = "show_group";
  _v0.s(["ACCEPT_HEADER_API_VERSION", 0, "application/vnd.vimeo.*+json;version=3.4.1", "INVALID_GROUP_NAME_CODE", 0, 0, "SHOW_GROUP_QUERY_PARAM", 0, _v1, "TEAM_ROLE_WEIGHT", 0, {
    admin: 0,
    contributor_plus: 500,
    contributor: 300,
    viewer: 100
  }, "WORKSPACE_GROUP_ROLE", 0, {
    ADMIN: "admin",
    CONTRIBUTOR: "contributor",
    CONTRIBUTOR_PLUS: "contributor_plus",
    VIEWER: "viewer"
  }], 0);
  let _v2 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  _v0.s(["deletePreselectedGroupFromQueryString", 0, () => {
    let _v0 = new URL(window.location.href);
    _v0.searchParams.delete(_v1), window.history.pushState(null, "", _v0.href);
  }, "getIdFromLink", 0, function (_v0, _v1) {
    let _v2 = _v0.length > 0 ? _v0.substring(_v0.lastIndexOf("/") + 1) : "-1";
    return _v1 ? _v2 : parseInt(_v2, 10);
  }, "getIdFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/\d+$/);
    return _v1 ? parseInt(_v1[0], 10) : -1;
  }, "getPreselectedGroupFromQueryString", 0, () => {
    let _v0,
      _v1,
      _v2 = new URLSearchParams(window.location.search).get(_v1) ?? "";
    if (_v2) {
      let _v0 = _v2.indexOf("_");
      _v0 > -1 && ([_v0, _v1] = [_v2.slice(0, _v0), _v2.slice(_v0 + 1)]);
    }
    return {
      showGroupId: _v0 ?? "",
      showGroupName: _v1 ?? ""
    };
  }, "getUuidFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(_v2);
    if (_v1?.length) return _v1[0];
    throw Error("ParseError: uri is incorrect");
  }, "isLastElement", 0, (_v0, _v1) => _v0 + 1 === _v1, "mapWsGroupToTeamGroup", 0, _v0 => ({
    ..._v0.teamGroup,
    role: _v0.role
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = null;
  _v0.s(["getTranslations", 0, () => (null === _v6 && (_v6 = Object.freeze({
    AddGroup: (0, _v5.translate)({
      singular: "Add group",
      dictionary: {
        es: {
          singular: "Añadir grupo"
        },
        "de-DE": {
          singular: "Gruppe hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter un groupe"
        },
        "ja-JP": {
          singular: "グループを追加"
        },
        "ko-KR": {
          singular: "그룹 추가"
        },
        "pt-BR": {
          singular: "Adicionar grupo"
        },
        "zh-CN": {
          singular: "添加组"
        }
      }
    }),
    CreateGroupNameGroup: _v0 => (0, _v5.translate)({
      singular: "Create “{GROUP_NAME}“ group",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: 'Crear el grupo "{GROUP_NAME}"'
        },
        "de-DE": {
          singular: "Gruppe „{GROUP_NAME}“ erstellen"
        },
        "fr-FR": {
          singular: "Créer le groupe « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」グループを作成"
        },
        "ko-KR": {
          singular: '"{GROUP_NAME}" 그룹 만들기'
        },
        "pt-BR": {
          singular: "Criar grupo “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "创建“{GROUP_NAME}”组"
        }
      }
    }),
    NoGroupsYet: (0, _v5.translate)({
      singular: "No groups yet",
      dictionary: {
        es: {
          singular: "Aún no hay grupos"
        },
        "de-DE": {
          singular: "Noch keine Gruppen"
        },
        "fr-FR": {
          singular: "Aucun groupe pour l'instant"
        },
        "ja-JP": {
          singular: "まだグループがありません"
        },
        "ko-KR": {
          singular: "아직 그룹이 없습니다."
        },
        "pt-BR": {
          singular: "Ainda não há grupos"
        },
        "zh-CN": {
          singular: "暂无群组"
        }
      }
    }),
    ThisGroupIsManagedBy: (0, _v5.translate)({
      singular: "This group is managed by your identity provider",
      dictionary: {
        es: {
          singular: "Este grupo lo gestiona su proveedor de identidad."
        },
        "de-DE": {
          singular: "Diese Gruppe wird von Ihrem Identitätsanbieter verwaltet"
        },
        "fr-FR": {
          singular: "Ce groupe est géré par votre fournisseur d'identité"
        },
        "ja-JP": {
          singular: "このグループはあなたのIDプロバイダーによって管理されています"
        },
        "ko-KR": {
          singular: "이 그룹은 ID 공급자가 관리합니다."
        },
        "pt-BR": {
          singular: "O grupo é gerenciado pelo seu provedor de identidade"
        },
        "zh-CN": {
          singular: "此组由您的身份提供程序管理"
        }
      }
    }),
    GroupsCount: _v0 => (0, _v5.translate)({
      singular: "{COUNT} group",
      plural: "{COUNT} groups",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "{COUNT} grupo",
          plural: "{COUNT} grupos"
        },
        "de-DE": {
          singular: "{COUNT} Gruppe",
          plural: "{COUNT} Gruppen"
        },
        "fr-FR": {
          singular: "Groupe {COUNT}",
          plural: "{COUNT} groupes"
        },
        "ja-JP": {
          singular: "グループ{COUNT}件",
          plural: "{COUNT} グループ"
        },
        "ko-KR": {
          singular: "그룹 {COUNT}개",
          plural: "그룹 {COUNT}개"
        },
        "pt-BR": {
          singular: "{COUNT} grupo",
          plural: "{COUNT} grupos"
        },
        "zh-CN": {
          singular: "{COUNT} 个群组",
          plural: "{COUNT} 个群组"
        }
      }
    }),
    RequestError: (0, _v5.translate)({
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
    GroupAdded: (0, _v5.translate)({
      singular: "Group added",
      dictionary: {
        es: {
          singular: "Grupo agregado"
        },
        "de-DE": {
          singular: "Gruppe hinzugefügt"
        },
        "fr-FR": {
          singular: "Groupe ajouté"
        },
        "ja-JP": {
          singular: "グループが追加されました"
        },
        "ko-KR": {
          singular: "그룹 추가됨"
        },
        "pt-BR": {
          singular: "Grupo adicionado"
        },
        "zh-CN": {
          singular: "已添加组"
        }
      }
    }),
    GroupRemoved: (0, _v5.translate)({
      singular: "Group removed",
      dictionary: {
        es: {
          singular: "Grupo eliminado"
        },
        "de-DE": {
          singular: "Gruppe wurde entfernt"
        },
        "fr-FR": {
          singular: "Groupe supprimé"
        },
        "ja-JP": {
          singular: "グループが削除されました"
        },
        "ko-KR": {
          singular: "그룹 삭제됨"
        },
        "pt-BR": {
          singular: "O grupo foi removido"
        },
        "zh-CN": {
          singular: "群组已移除"
        }
      }
    }),
    Confirm: (0, _v5.translate)({
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
    Remove: (0, _v5.translate)({
      singular: "Remove",
      dictionary: {
        es: {
          singular: "Eliminar"
        },
        "de-DE": {
          singular: "Entfernen"
        },
        "fr-FR": {
          singular: "Supprimer"
        },
        "ja-JP": {
          singular: "削除"
        },
        "ko-KR": {
          singular: "제거"
        },
        "pt-BR": {
          singular: "Remover"
        },
        "zh-CN": {
          singular: "移除"
        }
      }
    }),
    UploadCSV: (0, _v5.translate)({
      singular: "Upload CSV",
      dictionary: {
        es: {
          singular: "Subir archivo CSV"
        },
        "de-DE": {
          singular: "CSV-Datei hochladen"
        },
        "fr-FR": {
          singular: "Importer un fichier CSV"
        },
        "ja-JP": {
          singular: "CSVをアップロード"
        },
        "ko-KR": {
          singular: "CSV 업로드"
        },
        "pt-BR": {
          singular: "Carregar CSV"
        },
        "zh-CN": {
          singular: "上传 CSV"
        }
      }
    }),
    Cancel: (0, _v5.translate)({
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
    Invite: (0, _v5.translate)({
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
    Reset: (0, _v5.translate)({
      singular: "Reset",
      dictionary: {
        es: {
          singular: "Restablecer"
        },
        "de-DE": {
          singular: "Zurücksetzen"
        },
        "fr-FR": {
          singular: "Réinitialiser"
        },
        "ja-JP": {
          singular: "リセット"
        },
        "ko-KR": {
          singular: "재설정"
        },
        "pt-BR": {
          singular: "Redefinir"
        },
        "zh-CN": {
          singular: "重置"
        }
      }
    }),
    InviteGroup: (0, _v5.translate)({
      singular: "Invite group",
      dictionary: {
        es: {
          singular: "Invitar al grupo"
        },
        "de-DE": {
          singular: "Gruppe einladen"
        },
        "fr-FR": {
          singular: "Inviter le groupe"
        },
        "ja-JP": {
          singular: "グループを招待する"
        },
        "ko-KR": {
          singular: "그룹 초대"
        },
        "pt-BR": {
          singular: "Convidar grupo"
        },
        "zh-CN": {
          singular: "邀请群组"
        }
      }
    }),
    ImportGroupsError: (0, _v5.translate)({
      singular: "Your third party group data is currently unavailable. Please check your provider and try again.",
      dictionary: {
        es: {
          singular: "Actualmente, no hay datos de tu grupo de terceros. Verifica con tu proveedor y vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Deine Drittanbietergruppendaten sind derzeit nicht verfügbar. Bitte überprüfe deinen Anbieter und versuche es erneut."
        },
        "fr-FR": {
          singular: "Les données de votre groupe tiers sont actuellement indisponibles. Veuillez vous rapprocher de votre fournisseur et réessayer."
        },
        "ja-JP": {
          singular: "第三者サービスのグループデータは現在ご利用いただけません。プロバイダーをご確認いただき、再度お試しください。"
        },
        "ko-KR": {
          singular: "회원님의 타사 그룹 데이터를 현재 확인할 수 없습니다. 공급자를 확인하고 다시 시도하세요."
        },
        "pt-BR": {
          singular: "Os dados do seu grupo de terceiros não estão disponíveis no momento. Verifique seu provedor e tente novamente."
        },
        "zh-CN": {
          singular: "您的第三方群组数据目前不可用。请检查您的服务提供商，然后重试。"
        }
      }
    }),
    NoGroupMemberFound: (0, _v5.translate)({
      singular: "No members found",
      dictionary: {
        es: {
          singular: "No se han encontrado miembros"
        },
        "de-DE": {
          singular: "Keine Mitglieder gefunden"
        },
        "fr-FR": {
          singular: "Aucun membre trouvé"
        },
        "ja-JP": {
          singular: "メンバーが見つかりません"
        },
        "ko-KR": {
          singular: "회원을 찾을 수 없습니다."
        },
        "pt-BR": {
          singular: "Nenhum membro encontrado"
        },
        "zh-CN": {
          singular: "未找到任何成员"
        }
      }
    }),
    SomethingWentWrong: (0, _v5.translate)({
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
    InvalidCSVProvided: (0, _v5.translate)({
      singular: "Something went wrong. Invalid CSV provided.",
      dictionary: {
        es: {
          singular: "Se produjo un error. El archivo CSV proporcionado no es válido."
        },
        "de-DE": {
          singular: "Hier ist etwas schiefgelaufen. Die bereitgestellte CSV-Datei ist ungültig."
        },
        "fr-FR": {
          singular: "Une erreur s'est produite. Le fichier CSV fourni n'est pas valide."
        },
        "ja-JP": {
          singular: "エラーが発生しました。無効なCSVです。"
        },
        "ko-KR": {
          singular: "문제가 발생했습니다. 잘못된 CSV가 제공되었습니다."
        },
        "pt-BR": {
          singular: "Houve um erro. CSV fornecido inválido."
        },
        "zh-CN": {
          singular: "出了点问题。提供的 CSV 无效。"
        }
      }
    }),
    YourCSVIsBeingUploaded: (0, _v5.translate)({
      singular: "Your CSV is being uploaded. Please come back later.",
      dictionary: {
        es: {
          singular: "Su archivo CSV se está subiendo. Regrese más tarde."
        },
        "de-DE": {
          singular: "Ihre CSV wird hochgeladen. Bitte kommen Sie später wieder."
        },
        "fr-FR": {
          singular: "Votre fichier CSV est en cours d'importation. Veuillez revenir plus tard."
        },
        "ja-JP": {
          singular: "CSVファイルをアップロードしています。後ほどアクセスしてください。"
        },
        "ko-KR": {
          singular: "CSV가 업로드되고 있습니다. 나중에 다시 확인해 주세요."
        },
        "pt-BR": {
          singular: "Seus uploads CSV estão em processamento. Volte mais tarde."
        },
        "zh-CN": {
          singular: "您的 CSV 正在上传中。请稍后再来。"
        }
      }
    }),
    Members: (0, _v5.translate)({
      singular: "Members",
      dictionary: {
        es: {
          singular: "Miembros"
        },
        "de-DE": {
          singular: "Mitglieder"
        },
        "fr-FR": {
          singular: "Membres"
        },
        "ja-JP": {
          singular: "メンバー"
        },
        "ko-KR": {
          singular: "멤버"
        },
        "pt-BR": {
          singular: "Membros"
        },
        "zh-CN": {
          singular: "成员"
        }
      }
    }),
    MembersCount: _v0 => (0, _v5.translate)({
      singular: "{COUNT} member",
      plural: "{COUNT} members",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "{COUNT} miembro",
          plural: "{COUNT} miembros"
        },
        "de-DE": {
          singular: "{COUNT} Mitglied",
          plural: "{COUNT} Mitglieder"
        },
        "fr-FR": {
          singular: " {COUNT} membre",
          plural: "{COUNT} membres"
        },
        "ja-JP": {
          singular: "{COUNT} 人のメンバー",
          plural: "メンバー{COUNT}人"
        },
        "ko-KR": {
          singular: "회원 {COUNT}명",
          plural: "멤버 {COUNT}명"
        },
        "pt-BR": {
          singular: "{COUNT} membro",
          plural: "{COUNT} membros"
        },
        "zh-CN": {
          singular: "{COUNT} 名成员",
          plural: "{COUNT} 名成员"
        }
      }
    }),
    PermissionDenied: (0, _v5.translate)({
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
    Groups: (0, _v5.translate)({
      singular: "Groups",
      dictionary: {
        es: {
          singular: "Grupos"
        },
        "de-DE": {
          singular: "Gruppen"
        },
        "fr-FR": {
          singular: "Groupes"
        },
        "ja-JP": {
          singular: "グループ"
        },
        "ko-KR": {
          singular: "그룹"
        },
        "pt-BR": {
          singular: "Grupos"
        },
        "zh-CN": {
          singular: "群组"
        }
      }
    }),
    Name: (0, _v5.translate)({
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
    NoGroups: (0, _v5.translate)({
      singular: "No groups",
      dictionary: {
        es: {
          singular: "No hay grupos"
        },
        "de-DE": {
          singular: "Keine Gruppen"
        },
        "fr-FR": {
          singular: "Aucun groupe"
        },
        "ja-JP": {
          singular: "グループはありません"
        },
        "ko-KR": {
          singular: "그룹 없음"
        },
        "pt-BR": {
          singular: "Nenhum grupo"
        },
        "zh-CN": {
          singular: "无群组"
        }
      }
    }),
    NoGroupsFound: (0, _v5.translate)({
      singular: "No groups found",
      dictionary: {
        es: {
          singular: "No se han encontrado grupos"
        },
        "de-DE": {
          singular: "Keine Gruppen gefunden"
        },
        "fr-FR": {
          singular: "Aucun groupe trouvé"
        },
        "ja-JP": {
          singular: "グループが見つかりませんでした"
        },
        "ko-KR": {
          singular: "그룹을 찾을 수 없습니다."
        },
        "pt-BR": {
          singular: "Nenhum grupo encontrado"
        },
        "zh-CN": {
          singular: "未找到任何群组"
        }
      }
    }),
    AlreadyInvited: (0, _v5.translate)({
      singular: "Already invited",
      dictionary: {
        es: {
          singular: "Ya se invitó"
        },
        "de-DE": {
          singular: "Bereits eingeladen"
        },
        "fr-FR": {
          singular: "Déjà invité"
        },
        "ja-JP": {
          singular: "すでに招待済み"
        },
        "ko-KR": {
          singular: "이미 초대되었습니다."
        },
        "pt-BR": {
          singular: "Já convidado"
        },
        "zh-CN": {
          singular: "已邀请"
        }
      }
    }),
    TryAnotherSearch: (0, _v5.translate)({
      singular: "Try another search",
      dictionary: {
        es: {
          singular: "Pruebe con otra búsqueda"
        },
        "de-DE": {
          singular: "Versuchen Sie eine andere Suche"
        },
        "fr-FR": {
          singular: "Essayez une autre recherche"
        },
        "ja-JP": {
          singular: "別の検索をお試しください"
        },
        "ko-KR": {
          singular: "다르게 검색해 보세요"
        },
        "pt-BR": {
          singular: "Tente outra pesquisa"
        },
        "zh-CN": {
          singular: "尝试其他搜索"
        }
      }
    }),
    AddGroupsTo: (0, _v5.translate)({
      singular: "Add groups to more easily manage users, roles, and permissions. You can create a custom group, or import groups from your identity provider into Vimeo though single sign-on (SSO) or SCIM provisioning. {LINK}Learn more{/LINK}",
      replacements: {
        LINK: _v0 => (0, _v3.jsx)(_v4.Link, {
          href: "https://help.vimeo.com/hc/en-us/articles/12425725798801-SSO-Group-permissions-for-Enterprise-teams",
          target: "_blank",
          variant: "inline-primary",
          fontSize: "inherit",
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Agregue grupos para gestionar más fácilmente a los usuarios, las funciones y los permisos. Puede crear un grupo personalizado o importar grupos desde su proveedor de identidad a Vimeo mediante inicio de sesión único (SSO) o aprovisionamiento SCIM. {LINK}Más información{/LINK}"
        },
        "de-DE": {
          singular: "Fügen Sie Gruppen hinzu, um Benutzer, Rollen und Berechtigungen leichter zu verwalten. Sie können eine benutzerdefinierte Gruppe erstellen oder Gruppen von Ihrem Identitätsanbieter über Single Sign-on (SSO) oder SCIM-Bereitstellung in Vimeo importieren. {LINK}Mehr erfahren{/LINK}"
        },
        "fr-FR": {
          singular: "Ajoutez des groupes pour gérer plus facilement les utilisateurs, les rôles et les permissions. Vous pouvez créer un groupe personnalisé ou importer des groupes à partir de votre fournisseur d'identité dans Vimeo via l'authentification unique (SSO) ou le provisionnement SCIM. {LINK}En savoir plus{/LINK}"
        },
        "ja-JP": {
          singular: "グループを追加することで、ユーザー、役割、権限をより簡単に管理できます。カスタムグループを作成するか、シングルサインオン（SSO）またはSCIMプロビジョニングを通じてIDプロバイダーからVimeoにグループをインポートできます。{LINK}詳細はこちら{/LINK}"
        },
        "ko-KR": {
          singular: "그룹을 추가하여 사용자, 역할, 권한을 더 쉽게 관리하세요. 커스텀 그룹을 만들거나, 싱글 사인온(SSO) 또는 SCIM 프로비저닝을 통해 ID 공급자에서 Vimeo로 그룹을 가져올 수 있습니다. {LINK}자세히 보기{/LINK}"
        },
        "pt-BR": {
          singular: "Adicione grupos para gerenciar usuários, funções e permissões com mais facilidade. Você pode criar um grupo customizado ou importar grupos do seu provedor de identidade para o Vimeo por meio do login único (SSO) ou provisionamento SCIM. {LINK}Saiba mais{/LINK}"
        },
        "zh-CN": {
          singular: "添加群组以更轻松地管理用户、角色和权限。您可以创建自定义群组，或通过单点登录 (SSO) 或 SCIM 预置将身份提供商中的群组导入 Vimeo。{LINK}了解更多{/LINK}"
        }
      }
    }),
    SetUpSSO: (0, _v5.translate)({
      singular: "Set up SSO",
      dictionary: {
        es: {
          singular: "Configurar SSO"
        },
        "de-DE": {
          singular: "SSO einrichten."
        },
        "fr-FR": {
          singular: "Configurer le SSO"
        },
        "ja-JP": {
          singular: "SSOを設定"
        },
        "ko-KR": {
          singular: "SSO 설정"
        },
        "pt-BR": {
          singular: "Configurar o SSO"
        },
        "zh-CN": {
          singular: "配置 SSO"
        }
      }
    }),
    NewGroup: (0, _v5.translate)({
      singular: "New group",
      dictionary: {
        es: {
          singular: "Nuevo grupo"
        },
        "de-DE": {
          singular: "Neue Gruppe"
        },
        "fr-FR": {
          singular: "Nouveau groupe"
        },
        "ja-JP": {
          singular: "新しいグループ"
        },
        "ko-KR": {
          singular: "새 그룹"
        },
        "pt-BR": {
          singular: "Novo grupo"
        },
        "zh-CN": {
          singular: "新群组"
        }
      }
    }),
    DeleteGroup: (0, _v5.translate)({
      singular: "Delete group",
      dictionary: {
        es: {
          singular: "Eliminar grupo"
        },
        "de-DE": {
          singular: "Gruppe löschen"
        },
        "fr-FR": {
          singular: "Supprimer le groupe"
        },
        "ja-JP": {
          singular: "グループを削除"
        },
        "ko-KR": {
          singular: "그룹 삭제"
        },
        "pt-BR": {
          singular: "Excluir grupo"
        },
        "zh-CN": {
          singular: "删除群组"
        }
      }
    }),
    DuplicateSSOGroup: (0, _v5.translate)({
      singular: "Make a copy on Vimeo",
      dictionary: {
        es: {
          singular: "Haga una copia en Vimeo"
        },
        "de-DE": {
          singular: "Erstellen Sie eine Kopie auf Vimeo"
        },
        "fr-FR": {
          singular: "Faire une copie sur Vimeo"
        },
        "ja-JP": {
          singular: "Vimeoでコピーを作成"
        },
        "ko-KR": {
          singular: "Vimeo에 사본 만들기"
        },
        "pt-BR": {
          singular: "Faça uma cópia no Vimeo"
        },
        "zh-CN": {
          singular: "在 Vimeo 上创建副本"
        }
      }
    }),
    DuplicateVimeoGroup: (0, _v5.translate)({
      singular: "Make a copy",
      dictionary: {
        es: {
          singular: "Hacer una copia"
        },
        "de-DE": {
          singular: "Kopie erstellen"
        },
        "fr-FR": {
          singular: "Faire une copie"
        },
        "ja-JP": {
          singular: "コピーを作る"
        },
        "ko-KR": {
          singular: "사본 만들기"
        },
        "pt-BR": {
          singular: "Fazer uma cópia"
        },
        "zh-CN": {
          singular: "复制"
        }
      }
    }),
    RenameGroup: (0, _v5.translate)({
      singular: "Rename group",
      dictionary: {
        es: {
          singular: "Renombrar el grupo"
        },
        "de-DE": {
          singular: "Gruppe umbenennen"
        },
        "fr-FR": {
          singular: "Renommer le groupe"
        },
        "ja-JP": {
          singular: "グループ名を変更"
        },
        "ko-KR": {
          singular: "그룹 이름 변경"
        },
        "pt-BR": {
          singular: "Renomear grupo"
        },
        "zh-CN": {
          singular: "重命名群组"
        }
      }
    }),
    ViewMembers: (0, _v5.translate)({
      singular: "View members",
      dictionary: {
        es: {
          singular: "Ver miembros"
        },
        "de-DE": {
          singular: "Mitglieder anzeigen"
        },
        "fr-FR": {
          singular: "Voir les membres"
        },
        "ja-JP": {
          singular: "メンバーを表示"
        },
        "ko-KR": {
          singular: "회원 보기"
        },
        "pt-BR": {
          singular: "Ver membros"
        },
        "zh-CN": {
          singular: "查看成员"
        }
      }
    }),
    SelectRole: (0, _v5.translate)({
      singular: "Select role",
      dictionary: {
        es: {
          singular: "Seleccionar rol"
        },
        "de-DE": {
          singular: "Rolle auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner un rôle"
        },
        "ja-JP": {
          singular: "役割を選択"
        },
        "ko-KR": {
          singular: "역할 선택"
        },
        "pt-BR": {
          singular: "Selecionar função"
        },
        "zh-CN": {
          singular: "选择角色"
        }
      }
    }),
    SetDefaultRole: (0, _v5.translate)({
      singular: "Set default role",
      dictionary: {
        es: {
          singular: "Establecer rol predeterminado"
        },
        "de-DE": {
          singular: "Standardrolle festlegen"
        },
        "fr-FR": {
          singular: "Définir le rôle par défaut"
        },
        "ja-JP": {
          singular: "デフォルトの役割を設定"
        },
        "ko-KR": {
          singular: "기본 역할 설정"
        },
        "pt-BR": {
          singular: "Definir função padrão"
        },
        "zh-CN": {
          singular: "设置默认角色"
        }
      }
    }),
    RemoveDefaultRole: (0, _v5.translate)({
      singular: "Remove default role",
      dictionary: {
        es: {
          singular: "Eliminar el rol predeterminado"
        },
        "de-DE": {
          singular: "Standardrolle entfernen"
        },
        "fr-FR": {
          singular: "Supprimez le rôle par défaut"
        },
        "ja-JP": {
          singular: "デフォルトの役割を削除"
        },
        "ko-KR": {
          singular: "기본 역할 제거"
        },
        "pt-BR": {
          singular: "Remover função padrão"
        },
        "zh-CN": {
          singular: "删除默认角色"
        }
      }
    }),
    RoleRoleName: _v0 => (0, _v5.translate)({
      singular: "Role: {ROLE_NAME}",
      replacements: {
        ROLE_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Rol: {ROLE_NAME}"
        },
        "de-DE": {
          singular: "Rolle: {ROLE_NAME}"
        },
        "fr-FR": {
          singular: "Rôle : {ROLE_NAME}"
        },
        "ja-JP": {
          singular: "役割：{ROLE_NAME}"
        },
        "ko-KR": {
          singular: "역할: {ROLE_NAME}"
        },
        "pt-BR": {
          singular: "Função: {ROLE_NAME}"
        },
        "zh-CN": {
          singular: "角色：{ROLE_NAME}"
        }
      }
    }),
    ManageGroup: (0, _v5.translate)({
      singular: "Manage group",
      dictionary: {
        es: {
          singular: "Administrar grupo"
        },
        "de-DE": {
          singular: "Gruppe verwalten"
        },
        "fr-FR": {
          singular: "Gérer le groupe"
        },
        "ja-JP": {
          singular: "グループを管理する"
        },
        "ko-KR": {
          singular: "그룹 관리"
        },
        "pt-BR": {
          singular: "Gerenciar grupo"
        },
        "zh-CN": {
          singular: "管理群组"
        }
      }
    }),
    ManageMembers: (0, _v5.translate)({
      singular: "Manage members",
      dictionary: {
        es: {
          singular: "Gestionar a los miembros"
        },
        "de-DE": {
          singular: "Mitglieder verwalten"
        },
        "fr-FR": {
          singular: "Gérer les membres"
        },
        "ja-JP": {
          singular: "メンバーを管理"
        },
        "ko-KR": {
          singular: "회원 관리"
        },
        "pt-BR": {
          singular: "Gerenciar membros"
        },
        "zh-CN": {
          singular: "管理团队成员"
        }
      }
    }),
    ManageWorkspaces: (0, _v5.translate)({
      singular: "Manage workspaces",
      dictionary: {
        es: {
          singular: "Administrar espacios de trabajo"
        },
        "de-DE": {
          singular: "Workspaces verwalten"
        },
        "fr-FR": {
          singular: "Gérer les espaces de travail"
        },
        "ja-JP": {
          singular: "ワークスペースを管理"
        },
        "ko-KR": {
          singular: "워크스페이스 관리"
        },
        "pt-BR": {
          singular: "Gerenciar espaços de trabalho"
        },
        "zh-CN": {
          singular: "管理工作空间"
        }
      }
    }),
    SSO: "SSO",
    Vimeo: "Vimeo",
    Type: (0, _v5.translate)({
      singular: "Type",
      dictionary: {
        es: {
          singular: "Tipo"
        },
        "de-DE": {
          singular: "Typ"
        },
        "ja-JP": {
          singular: "タイプ"
        },
        "ko-KR": {
          singular: "유형"
        },
        "pt-BR": {
          singular: "Tipo"
        },
        "zh-CN": {
          singular: "类型"
        }
      }
    }),
    LastModified: (0, _v5.translate)({
      singular: "Last modified",
      dictionary: {
        es: {
          singular: "Última modificación"
        },
        "de-DE": {
          singular: "Zuletzt geändert"
        },
        "fr-FR": {
          singular: "Modifiées en dernier"
        },
        "ja-JP": {
          singular: "最終変更日"
        },
        "ko-KR": {
          singular: "마지막 수정"
        },
        "pt-BR": {
          singular: "Modificado por último"
        },
        "zh-CN": {
          singular: "最后修改"
        }
      }
    }),
    Next: (0, _v5.translate)({
      singular: "Next",
      dictionary: {
        es: {
          singular: "Siguiente"
        },
        "de-DE": {
          singular: "Weiter"
        },
        "fr-FR": {
          singular: "Suivant"
        },
        "ja-JP": {
          singular: "次へ"
        },
        "ko-KR": {
          singular: "다음"
        },
        "pt-BR": {
          singular: "Próxima"
        },
        "zh-CN": {
          singular: "下一步"
        }
      }
    }),
    Delete: (0, _v5.translate)({
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
    CreateGroup: (0, _v5.translate)({
      singular: "Create group",
      dictionary: {
        es: {
          singular: "Crear un grupo"
        },
        "de-DE": {
          singular: "Erstelle eine Gruppe"
        },
        "fr-FR": {
          singular: "Créer un groupe"
        },
        "ja-JP": {
          singular: "グループを作成"
        },
        "ko-KR": {
          singular: "그룹 만들기"
        },
        "pt-BR": {
          singular: "Criar grupo"
        },
        "zh-CN": {
          singular: "创建群组"
        }
      }
    }),
    RemoveDefault: (0, _v5.translate)({
      singular: "Remove default",
      dictionary: {
        es: {
          singular: "Eliminar el valor predeterminado"
        },
        "de-DE": {
          singular: "Standard entfernen"
        },
        "fr-FR": {
          singular: "Supprimer les valeurs par défaut"
        },
        "ja-JP": {
          singular: "デフォルトを削除"
        },
        "ko-KR": {
          singular: "기본 설정 제거"
        },
        "pt-BR": {
          singular: "Remova o padrão"
        },
        "zh-CN": {
          singular: "移除默认设置"
        }
      }
    }),
    ConfirmDefault: (0, _v5.translate)({
      singular: "Confirm default",
      dictionary: {
        es: {
          singular: "Confirmar el valor predeterminado"
        },
        "de-DE": {
          singular: "Standard bestätigen"
        },
        "fr-FR": {
          singular: "Confirmer le paramètre par défaut"
        },
        "ja-JP": {
          singular: "デフォルトを確認"
        },
        "ko-KR": {
          singular: "기본값 확인"
        },
        "pt-BR": {
          singular: "Confirmar padrão"
        },
        "zh-CN": {
          singular: "确认默认设置"
        }
      }
    }),
    Save: (0, _v5.translate)({
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
    ThisGroupIsManagedThrough: _v0 => (0, _v5.translate)({
      singular: "This group is managed through your identity provider. {LINK}Make a copy on Vimeo to make changes{/LINK}",
      replacements: {
        LINK: _v0 => (0, _v3.jsx)(_v4.Link, {
          variant: "inline-primary",
          fontSize: "inherit",
          cursor: "pointer",
          onClick: _v0 => {
            _v0.preventDefault(), _v0();
          },
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Este grupo se gestiona a través de su proveedor de identidad. {LINK}Haga una copia en Vimeo para hacer cambios{/LINK}"
        },
        "de-DE": {
          singular: "Diese Gruppe wird über Ihren Identitätsanbieter verwaltet. {LINK}Erstellen Sie eine Kopie auf Vimeo, um Änderungen vorzunehmen{/LINK}"
        },
        "fr-FR": {
          singular: "Ce groupe est géré par votre fournisseur d’identité. {LINK}Faites une copie sur Vimeo pour apporter des modifications{/LINK}"
        },
        "ja-JP": {
          singular: "このグループはあなたのIDプロバイダーを通じて管理されています。{LINK}Vimeoでコピーを作成して、編集{/LINK}"
        },
        "ko-KR": {
          singular: "본인의 ID 공급자를 통해 이 그룹을 관리합니다. {LINK}변경할 수 있도록 Vimeo에서 사본 만들기{/LINK}"
        },
        "pt-BR": {
          singular: "O grupo é gerenciado pelo seu provedor de identidade. {LINK}Faça uma cópia no Vimeo para realizar alterações{/LINK}"
        },
        "zh-CN": {
          singular: "此组通过您的身份提供程序进行管理。{LINK}在 Vimeo 上创建副本以进行更改{/LINK}"
        }
      }
    }),
    AddMembers: (0, _v5.translate)({
      singular: "Add members",
      dictionary: {
        es: {
          singular: "Agregar miembros"
        },
        "de-DE": {
          singular: "Mitglieder hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter des membres"
        },
        "ja-JP": {
          singular: "メンバーを追加"
        },
        "ko-KR": {
          singular: "멤버 추가하기"
        },
        "pt-BR": {
          singular: "Adicionar membros"
        },
        "zh-CN": {
          singular: "添加成员"
        }
      }
    }),
    CreateNewGroup: (0, _v5.translate)({
      singular: "Create new group",
      dictionary: {
        es: {
          singular: "Crear un nuevo grupo"
        },
        "de-DE": {
          singular: "Neue Gruppe erstellen"
        },
        "fr-FR": {
          singular: "Créer un nouveau groupe"
        },
        "ja-JP": {
          singular: "新しいグループを作成"
        },
        "ko-KR": {
          singular: "그룹 만들기"
        },
        "pt-BR": {
          singular: "Criar novo grupo"
        },
        "zh-CN": {
          singular: "创建新群组"
        }
      }
    }),
    ConfirmNewDefaultRole: (0, _v5.translate)({
      singular: "Confirm new default role",
      dictionary: {
        es: {
          singular: "Confirme la nueva función predeterminada"
        },
        "de-DE": {
          singular: "Neue Standardrolle bestätigen"
        },
        "fr-FR": {
          singular: "Confirmez le nouveau rôle par défaut"
        },
        "ja-JP": {
          singular: "新しいデフォルトの役割を確認してください"
        },
        "ko-KR": {
          singular: "새 기본 역할 확인"
        },
        "pt-BR": {
          singular: "Confirmar nova função padrão"
        },
        "zh-CN": {
          singular: "确认新的默认角色"
        }
      }
    }),
    RenameGroupName: _v0 => (0, _v5.translate)({
      singular: "Rename “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Renombrar “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "„{GROUP_NAME}“ umbenennen"
        },
        "fr-FR": {
          singular: "Renommer « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」の名前を変更"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}' 이름 변경하기"
        },
        "pt-BR": {
          singular: "Renomear “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "重命名“{GROUP_NAME}”"
        }
      }
    }),
    AddMembersToGroupName: _v0 => (0, _v5.translate)({
      singular: "Add members to “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Agregue miembros a “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "Mitglieder zu „{GROUP_NAME}“ hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter des membres à « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」にメンバーを追加"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}'에 멤버 추가하기"
        },
        "pt-BR": {
          singular: "Adicione membros ao “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "将成员添加到“{GROUP_NAME}”"
        }
      }
    }),
    MakeACopyOfGroupName: _v0 => (0, _v5.translate)({
      singular: "Make a copy of “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Haga una copia de “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "Eine Kopie von „{GROUP_NAME}“ erstellen"
        },
        "fr-FR": {
          singular: "Faire une copie de « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」のコピーを作成"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}'의 사본 만들기"
        },
        "pt-BR": {
          singular: "Faça uma cópia de “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "复制“{GROUP_NAME}”"
        }
      }
    }),
    DeleteGroupName: _v0 => (0, _v5.translate)({
      singular: "Delete “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Eliminar “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "„{GROUP_NAME}“ löschen"
        },
        "fr-FR": {
          singular: "Supprimer « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」を削除"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}' 삭제하기"
        },
        "pt-BR": {
          singular: "Excluir “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "删除“{GROUP_NAME}”"
        }
      }
    }),
    ManageGroupName: _v0 => (0, _v5.translate)({
      singular: "Manage “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Gestionar “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "Test „{GROUP_NAME}“ verwalten"
        },
        "fr-FR": {
          singular: "Gérer « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」を管理"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}' 관리하기"
        },
        "pt-BR": {
          singular: "Gerenciar “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "管理“{GROUP_NAME}”"
        }
      }
    }),
    SetDefaultRoleForGroupName: _v0 => (0, _v5.translate)({
      singular: "Set default role for “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: 'Establecer el rol predeterminado para "{GROUP_NAME}"'
        },
        "de-DE": {
          singular: "Standardrolle für „{GROUP_NAME}“ festlegen"
        },
        "fr-FR": {
          singular: "Définir le rôle par défaut pour « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」にデフォルトの役割を設定する"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}'의 기본 역할 설정"
        },
        "pt-BR": {
          singular: "Definir função padrão para “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "为“{GROUP_NAME}”设置默认角色"
        }
      }
    }),
    RemoveDefaultRoleForGroupName: _v0 => (0, _v5.translate)({
      singular: "Remove default role for “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Eliminar el rol predeterminado para “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "Standardrolle für „{GROUP_NAME}“ entfernen"
        },
        "fr-FR": {
          singular: "Supprimer le rôle par défaut pour « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」のデフォルトの役割を削除する"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}'의 기본 역할 해제"
        },
        "pt-BR": {
          singular: "Remover função-padrão de “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "移除“{GROUP_NAME}”的默认角色"
        }
      }
    }),
    ThisRoleWillBeAutomaticallyAssigned: () => (0, _v5.translate)({
      singular: "This role will be automatically assigned to current group members and any members you add in the future. {LINE_BREAK}Each team member is always assigned the highest role they’ve been granted across all groups and settings.",
      replacements: {
        LINE_BREAK: (0, _v3.jsxs)(_v3.Fragment, {
          children: [(0, _v3.jsx)("br", {}), (0, _v3.jsx)("br", {})]
        })
      },
      dictionary: {
        es: {
          singular: "Este rol se asignará automáticamente a los miembros actuales del grupo y a cualquier miembro que usted agregue más adelante. {LINE_BREAK}A cada miembro del equipo siempre se le asigna el rol más alto que se le haya otorgado en todos los grupos y configuraciones."
        },
        "de-DE": {
          singular: "Diese Rolle wird automatisch den aktuellen Gruppenmitgliedern und allen Mitgliedern zugewiesen, die Sie in Zukunft hinzufügen. {LINE_BREAK}Jedem Teammitglied wird immer die höchste Rolle zugewiesen, die ihm in allen Gruppen und Einstellungen gewährt wurde."
        },
        "fr-FR": {
          singular: "Ce rôle sera automatiquement attribué aux membres actuels du groupe et à tous les membres que vous ajouterez par la suite. {LINE_BREAK}Chaque collaborateur se voit toujours attribuer le rôle le plus élevé qui lui a été accordé, quels que soient les groupes et les paramètres."
        },
        "ja-JP": {
          singular: "この役割は、現在のグループメンバーと今後追加するメンバーに自動的に割り当てられます。{LINE_BREAK}各チームメンバーには常に、すべてのグループと設定で与えられた中で最も高い役割が割り当てられます。"
        },
        "ko-KR": {
          singular: "이 역할은 현재 그룹 멤버 및 향후 추가되는 모든 멤버에게 자동으로 할당됩니다. {LINE_BREAK}각 팀원에게는 모든 그룹 및 설정에서 부여받은 역할 중 가장 높은 등급의 역할이 항상 할당됩니다."
        },
        "pt-BR": {
          singular: "Essa função será atribuída automaticamente aos integrantes atuais do grupo e a todos os integrantes que você adicionar no futuro. {LINE_BREAK}Cada integrante da equipe sempre recebe a função mais alta à qual teve acesso em todos os grupos e configurações."
        },
        "zh-CN": {
          singular: "此角色将自动分配给当前组成员及您未来添加的成员。{LINE_BREAK} 每位团队成员始终会被授予其在所有群组和设置中所获得的最高角色。"
        }
      }
    }),
    NewMembersWillNoLonger: (0, _v5.translate)({
      singular: "New members will no longer be automatically assigned the Contributor role. Current members will keep their current roles.",
      dictionary: {
        es: {
          singular: "A los nuevos miembros ya no se les asignará el rol de Colaborador automáticamente. Los miembros actuales conservarán sus roles actuales."
        },
        "de-DE": {
          singular: "Neuen Mitgliedern wird nicht mehr automatisch die Rolle „Mitwirkender“ zugewiesen. Die aktuellen Mitglieder behalten ihre derzeitigen Rollen."
        },
        "fr-FR": {
          singular: "Les nouveaux membres ne se verront plus automatiquement attribuer le rôle de Contributeur. Les membres actuels conserveront leurs rôles actuels."
        },
        "ja-JP": {
          singular: "新しいメンバーには、投稿者の役割が自動的に割り当てられなくなります。現在のメンバーは現在の役割を維持します。"
        },
        "ko-KR": {
          singular: "새로운 멤버에게는 더 이상 기여자 역할이 자동으로 할당되지 않습니다. 기존 멤버는 현재 역할을 그대로 유지합니다."
        },
        "pt-BR": {
          singular: "Os novos integrantes não receberão mais a função de colaborador automaticamente. Os integrantes atuais manterão suas funções atuais."
        },
        "zh-CN": {
          singular: "系统将不再自动为新成员分配“贡献者”角色。当前成员将保留其原有角色。"
        }
      }
    }),
    ThisWillPermanentlyDelete: (0, _v5.translate)({
      singular: "This will permanently delete the group from this account. Members will no longer be associated with the group, but will remain on this account.",
      dictionary: {
        es: {
          singular: "Esta acción eliminará permanentemente el grupo de esta cuenta. Los miembros ya no estarán asociados con el grupo, pero permanecerán en esta cuenta."
        },
        "de-DE": {
          singular: "Dadurch wird die Gruppe dauerhaft von diesem Konto gelöscht. Die Mitglieder werden nicht mehr mit der Gruppe in Verbindung gebracht, bleiben aber in diesem Konto."
        },
        "fr-FR": {
          singular: "Cela supprimera définitivement le groupe de ce compte. Les membres ne seront plus associés au groupe, mais resteront sur ce compte."
        },
        "ja-JP": {
          singular: "これにより、グループはこのアカウントから完全に削除されます。メンバーは、グループとは関連付けられなくなりますが、このアカウントには残ります。"
        },
        "ko-KR": {
          singular: "이 작업을 수행하면 해당 그룹이 이 계정에서 영구적으로 삭제됩니다. 그룹에 속한 멤버들은 더 이상 이 그룹과 연결되지 않지만, 계정에는 그대로 남아 있게 됩니다."
        },
        "pt-BR": {
          singular: "Essa ação apaga permanentemente o grupo da conta. Os membros não estarão mais associados ao grupo, mas permanecerão na conta."
        },
        "zh-CN": {
          singular: "这将从此帐户中永久删除该组。成员将不再与该组相关联，但仍将保留在此帐户中。"
        }
      }
    }),
    MakingACopyOfThis: (0, _v5.translate)({
      singular: "Making a copy of this SSO group to make changes on Vimeo",
      dictionary: {
        es: {
          singular: "Hacer una copia de este grupo de SSO para realizar cambios en Vimeo"
        },
        "de-DE": {
          singular: "Eine Kopie dieser SSO-Gruppe wird erstellt, um Änderungen bei Vimeo vorzunehmen"
        },
        "fr-FR": {
          singular: "Faire une copie de ce groupe SSO pour effectuer des modifications sur Vimeo"
        },
        "ja-JP": {
          singular: "このSSOグループのコピーを作成して、Vimeoで編集する"
        },
        "ko-KR": {
          singular: "이 SSO 그룹의 사본을 만들어 Vimeo에서 변경할 수 있도록 합니다."
        },
        "pt-BR": {
          singular: "Fazer uma cópia deste grupo de SSO para realizar alterações no Vimeo"
        },
        "zh-CN": {
          singular: "复制此 SSO 组以在 Vimeo 上进行更改"
        }
      }
    }),
    GroupName: (0, _v5.translate)({
      singular: "Group name",
      dictionary: {
        es: {
          singular: "Nombre del grupo"
        },
        "de-DE": {
          singular: "Gruppenname"
        },
        "fr-FR": {
          singular: "Nom du groupe"
        },
        "ja-JP": {
          singular: "グループ名"
        },
        "ko-KR": {
          singular: "그룹 이름"
        },
        "pt-BR": {
          singular: "Nome do Grupo"
        },
        "zh-CN": {
          singular: "群组名称"
        }
      }
    }),
    GroupCreated: (0, _v5.translate)({
      singular: "Group created",
      dictionary: {
        es: {
          singular: "Grupo creado"
        },
        "de-DE": {
          singular: "Gruppe erstellt"
        },
        "fr-FR": {
          singular: "Groupe créé"
        },
        "ja-JP": {
          singular: "グループが作成されました"
        },
        "ko-KR": {
          singular: "그룹이 생성되었습니다."
        },
        "pt-BR": {
          singular: "Grupo criado"
        },
        "zh-CN": {
          singular: "已创建组"
        }
      }
    }),
    GroupInvited: (0, _v5.translate)({
      singular: "Group invited",
      dictionary: {
        es: {
          singular: "Grupo invitado"
        },
        "de-DE": {
          singular: "Gruppe eingeladen"
        },
        "fr-FR": {
          singular: "Groupe invité"
        },
        "ja-JP": {
          singular: "グループが招待されました"
        },
        "ko-KR": {
          singular: "그룹 초대되었습니다."
        },
        "pt-BR": {
          singular: "Grupo convidado"
        },
        "zh-CN": {
          singular: "群组已邀请"
        }
      }
    }),
    GroupRenamed: (0, _v5.translate)({
      singular: "Group renamed",
      dictionary: {
        es: {
          singular: "Se le cambió el nombre al grupo"
        },
        "de-DE": {
          singular: "Gruppe umbenannt"
        },
        "fr-FR": {
          singular: "Groupe renommé"
        },
        "ja-JP": {
          singular: "グループ名が変更されました"
        },
        "ko-KR": {
          singular: "그룹 이름이 변경되었습니다."
        },
        "pt-BR": {
          singular: "Grupo renomeado"
        },
        "zh-CN": {
          singular: "已重命名组"
        }
      }
    }),
    GroupDeleted: (0, _v5.translate)({
      singular: "Group deleted",
      dictionary: {
        es: {
          singular: "Grupo eliminado"
        },
        "de-DE": {
          singular: "Gruppe wurde gelöscht"
        },
        "fr-FR": {
          singular: "Groupe supprimé"
        },
        "ja-JP": {
          singular: "グループが削除されました"
        },
        "ko-KR": {
          singular: "그룹이 삭제되었습니다."
        },
        "pt-BR": {
          singular: "Grupo apagado"
        },
        "zh-CN": {
          singular: "已删除组"
        }
      }
    }),
    AddNameGroupOrEmail: (0, _v5.translate)({
      singular: "Add name, group or email",
      dictionary: {
        es: {
          singular: "Agregar nombre, grupo o correo electrónico"
        },
        "de-DE": {
          singular: "Name, Gruppe oder E-Mail-Adresse eingeben"
        },
        "fr-FR": {
          singular: "Ajouter un nom, un groupe ou une adresse e-mail"
        },
        "ja-JP": {
          singular: "名前、グループ、またはEメールを追加"
        },
        "ko-KR": {
          singular: "이름, 그룹 또는 이메일 추가"
        },
        "pt-BR": {
          singular: "Adicione nome, grupo ou e-mail"
        },
        "zh-CN": {
          singular: "添加名称、群组或电子邮件"
        }
      }
    }),
    GroupNameMustBeUnique: (0, _v5.translate)({
      singular: "Group name must be unique",
      dictionary: {
        es: {
          singular: "El nombre del grupo debe ser único"
        },
        "de-DE": {
          singular: "Der Gruppenname muss einzigartig sein"
        },
        "fr-FR": {
          singular: "Le nom du groupe doit être unique"
        },
        "ja-JP": {
          singular: "固有のグループ名を設定してください"
        },
        "ko-KR": {
          singular: "그룹 이름은 중복되지 않아야 합니다."
        },
        "pt-BR": {
          singular: "O nome do grupo deve ser único"
        },
        "zh-CN": {
          singular: "组名必须唯一"
        }
      }
    }),
    CopyOfGroupName: _v0 => (0, _v5.translate)({
      singular: "Copy of “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Copia de “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "Kopie von „{GROUP_NAME}“"
        },
        "fr-FR": {
          singular: "Copie de « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」のコピー"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}'의 사본"
        },
        "pt-BR": {
          singular: "Cópia de “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "“{GROUP_NAME}”的副本"
        }
      }
    }),
    MemberRemovedFromGroup: (0, _v5.translate)({
      singular: "Member removed from group",
      dictionary: {
        es: {
          singular: "Miembro eliminado del grupo"
        },
        "de-DE": {
          singular: "Mitglied wurde aus der Gruppe entfernt"
        },
        "fr-FR": {
          singular: "Membre retiré du groupe"
        },
        "ja-JP": {
          singular: "メンバーがグループから削除されました"
        },
        "ko-KR": {
          singular: "그룹에서 제거된 멤버"
        },
        "pt-BR": {
          singular: "Membro retirado do grupo"
        },
        "zh-CN": {
          singular: "成员已从组中移除"
        }
      }
    }),
    MembersAddedToGroup: _v0 => (0, _v5.translate)({
      singular: "{COUNT} member has been added to group",
      plural: "{COUNT} members have been added to group",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "Se agregó a {COUNT} miembro al grupo",
          plural: "Se han agregado {COUNT} miembros al grupo"
        },
        "de-DE": {
          singular: "{COUNT} Mitglied wurde zur Gruppe hinzugefügt",
          plural: "{COUNT} Mitglieder wurden zur Gruppe hinzugefügt"
        },
        "fr-FR": {
          singular: "{COUNT} membre a été ajouté au groupe",
          plural: "{COUNT} membres ont été ajoutés au groupe"
        },
        "ja-JP": {
          singular: "{COUNT}名のメンバーがグループに追加されました",
          plural: "{COUNT}名のメンバーがグループに追加されました"
        },
        "ko-KR": {
          singular: "멤버 {COUNT}명이 그룹에 추가되었습니다.",
          plural: "멤버 {COUNT}명이 그룹에 추가되었습니다."
        },
        "pt-BR": {
          singular: "{COUNT} membro foi adicionado ao grupo",
          plural: "{COUNT} membros foram adicionados ao grupo"
        },
        "zh-CN": {
          singular: "{COUNT} 名成员已添加到组中",
          plural: "{COUNT} 名成员已添加到组中"
        }
      }
    }),
    DefaultRoleSetForGroupName: _v0 => (0, _v5.translate)({
      singular: "Default role set for “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Rol predeterminado asignado para “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "Standardrolle für „{GROUP_NAME}“ festgelegt"
        },
        "fr-FR": {
          singular: "Rôle par défaut attribué à « {GROUP_NAME} »"
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」のデフォルトの役割が設定されました"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}'의 기본 역할이 설정되었습니다."
        },
        "pt-BR": {
          singular: "Função padrão definida para “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "默认角色设置为“{GROUP_NAME}”"
        }
      }
    }),
    DefaultRoleRemovedForGroupName: _v0 => (0, _v5.translate)({
      singular: "Default role removed for “{GROUP_NAME}”",
      replacements: {
        GROUP_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Rol predeterminado eliminado para “{GROUP_NAME}”"
        },
        "de-DE": {
          singular: "Standardrolle für „{GROUP_NAME}“ entfernt"
        },
        "fr-FR": {
          singular: "Rôle par défaut supprimé pour « {GROUP_NAME} »."
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」のデフォルトの役割が削除されました"
        },
        "ko-KR": {
          singular: "'{GROUP_NAME}'의 기본 역할이 제거되었습니다."
        },
        "pt-BR": {
          singular: "Função padrão removida para “{GROUP_NAME}”"
        },
        "zh-CN": {
          singular: "已移除“{GROUP_NAME}”的默认角色"
        }
      }
    }),
    SearchGroupMembers: (0, _v5.translate)({
      singular: "Search group members",
      dictionary: {
        es: {
          singular: "Buscar miembros del grupo"
        },
        "de-DE": {
          singular: "Gruppenmitglieder durchsuchen"
        },
        "fr-FR": {
          singular: "Rechercher les membres du groupe"
        },
        "ja-JP": {
          singular: "グループメンバーを検索"
        },
        "ko-KR": {
          singular: "그룹 회원 검색"
        },
        "pt-BR": {
          singular: "Pesquisar membros do grupo"
        },
        "zh-CN": {
          singular: "搜索群组成员"
        }
      }
    }),
    SearchOrgGroups: (0, _v5.translate)({
      singular: "Search organization groups",
      dictionary: {
        es: {
          singular: "Buscar grupos de la organización"
        },
        "de-DE": {
          singular: "Organisationsgruppen durchsuchen"
        },
        "fr-FR": {
          singular: "Rechercher des groupes d'organisations"
        },
        "ja-JP": {
          singular: "組織のグループを検索"
        },
        "ko-KR": {
          singular: "조직 그룹 검색"
        },
        "pt-BR": {
          singular: "Pesquisar grupos da organização"
        },
        "zh-CN": {
          singular: "搜索组织群组"
        }
      }
    }),
    SearchGroups: (0, _v5.translate)({
      singular: "Search groups",
      dictionary: {
        es: {
          singular: "Buscar grupos"
        },
        "de-DE": {
          singular: "Gruppen suchen"
        },
        "fr-FR": {
          singular: "Rechercher parmi les groupes"
        },
        "ja-JP": {
          singular: "グループを検索"
        },
        "ko-KR": {
          singular: "그룹 검색"
        },
        "pt-BR": {
          singular: "Pesquisar grupos"
        },
        "zh-CN": {
          singular: "搜索群组"
        }
      }
    }),
    CheckHowThisSettingWillAffect: (0, _v5.translate)({
      singular: "Check how this setting will affect members’ assigned roles. Once the default is confirmed, lower roles can only be assigned individually.",
      dictionary: {
        es: {
          singular: "Verifique cómo esta configuración afectará los roles asignados de los miembros. Una vez que se confirme la opción predeterminada, los roles inferiores solo podrán asignarse individualmente."
        },
        "de-DE": {
          singular: "Überprüfen Sie, wie sich diese Einstellung auf die zugewiesenen Rollen der Mitglieder auswirken wird. Sobald die Standardeinstellung bestätigt ist, können untergeordnete Rollen nur noch einzeln zugewiesen werden."
        },
        "fr-FR": {
          singular: "Vérifiez comment ce paramètre influencera les rôles attribués aux membres. Une fois la valeur par défaut confirmée, les rôles inférieurs ne pourront être attribués qu'individuellement."
        },
        "ja-JP": {
          singular: "この設定がメンバーに割り当てられた役割にどのような影響を与えるかを確認してください。デフォルトが確認されると、下位の役割は個別にのみ割り当てることができます。"
        },
        "ko-KR": {
          singular: "이 설정이 멤버에게 할당된 역할에 어떻게 영향을 미치는지 확인하세요. 기본 역할이 확정되면 더 낮은 등급의 역할은 개별적으로만 할당할 수 있습니다."
        },
        "pt-BR": {
          singular: "Verifique como essa configuração afetará as funções atribuídas aos integrantes. Uma vez que o padrão seja confirmado, funções inferiores só poderão ser atribuídas individualmente."
        },
        "zh-CN": {
          singular: "查看此设置将如何影响成员角色的分配。一旦确认了默认设置，较低的角色只能单独分配。"
        }
      }
    }),
    MemberHasAHigherRole: (0, _v5.translate)({
      singular: "Member has a higher role because of another group or setting",
      dictionary: {
        es: {
          singular: "El miembro tiene un rol superior debido a otro grupo o configuración"
        },
        "de-DE": {
          singular: "Das Mitglied hat aufgrund einer anderen Gruppe oder Einstellung eine höhere Rolle."
        },
        "fr-FR": {
          singular: "Le membre a un rôle plus élevé en raison d’un autre groupe ou d’un autre paramètre"
        },
        "ja-JP": {
          singular: "別のグループまたは設定により、メンバーにはより高い役割が割り当てられています"
        },
        "ko-KR": {
          singular: "다른 그룹 또는 설정으로 인해 더 높은 역할이 부여되었습니다."
        },
        "pt-BR": {
          singular: "O membro tem uma função superior devido a outro grupo ou configuração"
        },
        "zh-CN": {
          singular: "由于其他群组或设置，成员拥有更高的权限"
        }
      }
    }),
    XMembersAreAssigned: _v0 => (0, _v5.translate)({
      singular: "{COUNT} member are assigned a higher role individually or by another group",
      plural: "{COUNT} members are assigned a higher role individually or by another group",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "A {COUNT} miembro se le asigna un rol superior individualmente o por otro grupo",
          plural: "A {COUNT} miembros se les asigna un rol superior individualmente o por otro grupo"
        },
        "de-DE": {
          singular: "{COUNT} Mitglied wird einzeln oder von einer anderen Gruppe eine übergeordnetere Rolle zugewiesen.",
          plural: "{COUNT} Mitgliedern wird einzeln oder von einer anderen Gruppe eine übergeordnetere Rolle zugewiesen."
        },
        "fr-FR": {
          singular: "{COUNT} membre se voit attribuer un rôle supérieur individuellement ou par un autre groupe",
          plural: "{COUNT} membres se voient attribuer un rôle supérieur individuellement ou par un autre groupe"
        },
        "ja-JP": {
          singular: "{COUNT}人のメンバーには、個別にまたは別のグループによって、より高い役割が割り当てられます",
          plural: "{COUNT}人のメンバーには、個別にまたは他のグループによって、より高い役割が割り当てられます"
        },
        "ko-KR": {
          singular: "{COUNT}명의 멤버가 개별적으로 또는 다른 그룹을 통해 더 높은 등급의 역할을 할당받았습니다.",
          plural: "{COUNT}명의 멤버가 개별적으로 또는 다른 그룹을 통해 더 높은 등급의 역할을 할당받았습니다."
        },
        "pt-BR": {
          singular: "{COUNT} integrante recebeu uma função superior individualmente ou por outro grupo",
          plural: "{COUNT} integrantes receberam uma função superior individualmente ou por outro grupo"
        },
        "zh-CN": {
          singular: "{COUNT} 位成员已通过单独分配或其他群组获得了更高角色",
          plural: "{COUNT} 位成员已通过单独分配或其他群组获得了更高角色"
        }
      }
    }),
    XMembersWillBeAdded: _v0 => (0, _v5.translate)({
      singular: "{COUNT} member will be added from CSV",
      plural: "{COUNT} members will be added from CSV",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "{COUNT} miembro se agregará desde CSV",
          plural: "Se agregarán {COUNT} miembros desde un archivo CSV"
        },
        "de-DE": {
          singular: "{COUNT} Mitglied wird über CSV hinzugefügt",
          plural: "{COUNT} Mitglieder werden aus der CSV-Datei hinzugefügt"
        },
        "fr-FR": {
          singular: "{COUNT} membre sera ajouté à partir du fichier CSV",
          plural: "{COUNT} membres seront ajoutés à partir du fichier CSV"
        },
        "ja-JP": {
          singular: "{COUNT}名のメンバーがCSVから追加されます",
          plural: "{COUNT}名のメンバーがCSVから追加されます"
        },
        "ko-KR": {
          singular: "CSV에서 {COUNT}명의 회원이 추가됩니다.",
          plural: "CSV에서 {COUNT}명의 회원이 추가됩니다."
        },
        "pt-BR": {
          singular: "{COUNT} membro será adicionado a partir do arquivo CSV",
          plural: "{COUNT} membros serão adicionados a partir do arquivo CSV"
        },
        "zh-CN": {
          singular: "{COUNT} 名成员将从 CSV 添加",
          plural: "将从 CSV 添加 {COUNT} 名成员"
        }
      }
    }),
    Workspace: (0, _v5.translate)({
      singular: "Workspace",
      dictionary: {
        es: {
          singular: "Espacio de trabajo"
        },
        "fr-FR": {
          singular: "Espace de travail"
        },
        "ja-JP": {
          singular: "ワークスペース"
        },
        "ko-KR": {
          singular: "작업 공간"
        },
        "pt-BR": {
          singular: "Espaço de trabalho"
        },
        "zh-CN": {
          singular: "工作空间"
        }
      }
    }),
    AddGroupToWorkspace: (0, _v5.translate)({
      singular: "Add group to workspace",
      dictionary: {
        es: {
          singular: "Agregar grupo al espacio de trabajo"
        },
        "de-DE": {
          singular: "Gruppe zum Workspace hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter un groupe à l'espace de travail"
        },
        "ja-JP": {
          singular: "ワークスペースにグループを追加"
        },
        "ko-KR": {
          singular: "워크스페이스에 그룹 추가"
        },
        "pt-BR": {
          singular: "Adicionar grupo ao espaço de trabalho"
        },
        "zh-CN": {
          singular: "将群组添加到工作区"
        }
      }
    }),
    AddToWorkspace: (0, _v5.translate)({
      singular: "Add to workspace",
      dictionary: {
        es: {
          singular: "Añadir al espacio de trabajo"
        },
        "de-DE": {
          singular: "Zum Workspace hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter à l’espace de travail"
        },
        "ja-JP": {
          singular: "ワークスペースに追加"
        },
        "ko-KR": {
          singular: "워크스페이스에 추가"
        },
        "pt-BR": {
          singular: "Adicionar ao espaço de trabalho"
        },
        "zh-CN": {
          singular: "添加到工作区"
        }
      }
    }),
    SelectWorkspace: (0, _v5.translate)({
      singular: "Select workspace",
      dictionary: {
        es: {
          singular: "Seleccionar espacio de trabajo"
        },
        "de-DE": {
          singular: "Workspace auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner un espace de travail"
        },
        "ja-JP": {
          singular: "ワークスペースを選択"
        },
        "ko-KR": {
          singular: "워크스페이스 선택"
        },
        "pt-BR": {
          singular: "Selecionar espaço de trabalho"
        },
        "zh-CN": {
          singular: "选择工作空间"
        }
      }
    }),
    XGroupsSelected: _v0 => (0, _v5.translate)({
      singular: "{COUNT} group selected",
      plural: "{COUNT} groups selected",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "{COUNT} grupo seleccionado",
          plural: "{COUNT} grupos seleccionados"
        },
        "de-DE": {
          singular: "{COUNT} Gruppe ausgewählt",
          plural: "{COUNT} Gruppen ausgewählt"
        },
        "fr-FR": {
          singular: "{COUNT} groupe sélectionné",
          plural: "{COUNT} groupes sélectionnés"
        },
        "ja-JP": {
          singular: "{COUNT}件のグループが選択されました",
          plural: "{COUNT}件のグループが選択されました"
        },
        "ko-KR": {
          singular: "{COUNT}개 그룹이 선택되었습니다.",
          plural: "{COUNT}개 그룹이 선택되었습니다."
        },
        "pt-BR": {
          singular: "{COUNT} grupo selecionado",
          plural: "{COUNT} grupos selecionados"
        },
        "zh-CN": {
          singular: "已选择 {COUNT} 个群组",
          plural: "已选择 {COUNT} 个群组"
        }
      }
    }),
    XGroupsInvitedToWsName: (_v0, _v1) => (0, _v5.translate)({
      singular: "{COUNT} group invited to {WS_NAME}",
      plural: "{COUNT} groups invited to {WS_NAME}",
      count: _v0,
      replacements: {
        COUNT: _v0,
        WS_NAME: _v1
      },
      dictionary: {
        es: {
          singular: "{COUNT} grupo invitado a {WS_NAME}",
          plural: "{COUNT} grupos invitados a {WS_NAME}"
        },
        "de-DE": {
          singular: "{COUNT} Gruppe zu {WS_NAME} eingeladen",
          plural: "{COUNT} Gruppen zu {WS_NAME} eingeladen"
        },
        "fr-FR": {
          singular: "{COUNT} groupe invité à rejoindre {WS_NAME}",
          plural: "{COUNT} groupes invités à rejoindre {WS_NAME}"
        },
        "ja-JP": {
          singular: "{COUNT}件のグループが「{WS_NAME}」に招待されました",
          plural: "{COUNT}件のグループが「{WS_NAME}」に招待されました"
        },
        "ko-KR": {
          singular: "{COUNT}개 그룹이 {WS_NAME}에 초대되었습니다.",
          plural: "{COUNT}개 그룹이 {WS_NAME}에 초대되었습니다."
        },
        "pt-BR": {
          singular: "{COUNT} grupo convidado para {WS_NAME}",
          plural: "{COUNT} grupos convidados para {WS_NAME}"
        },
        "zh-CN": {
          singular: "{COUNT} 个群组受邀参加 {WS_NAME}",
          plural: "{COUNT} 个群组受邀参加 {WS_NAME}"
        }
      }
    }),
    InviteXGroups: _v0 => (0, _v5.translate)({
      singular: "Invite {COUNT} group",
      plural: "Invite {COUNT} groups",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "Invitar a {COUNT} grupo",
          plural: "Invitar a {COUNT} grupos"
        },
        "de-DE": {
          singular: "{COUNT} Gruppe einladen",
          plural: "{COUNT} Gruppen einladen"
        },
        "fr-FR": {
          singular: "Inviter {COUNT} groupe",
          plural: "Inviter {COUNT} groupes"
        },
        "ja-JP": {
          singular: "{COUNT}件のグループを招待",
          plural: "{COUNT}件のグループを招待"
        },
        "ko-KR": {
          singular: "{COUNT}개 그룹 초대",
          plural: "{COUNT}개 그룹 초대"
        },
        "pt-BR": {
          singular: "Convidar {COUNT} grupo",
          plural: "Convide {COUNT} grupos"
        },
        "zh-CN": {
          singular: "邀请 {COUNT} 个群组",
          plural: "邀请 {COUNT} 个群组"
        }
      }
    }),
    GroupNamesListAndName: (_v0, _v1) => (0, _v5.translate)({
      singular: "{NAMES} and {NAME}",
      plural: "{NAMES}, and {NAME}",
      count: _v0.length,
      replacements: {
        NAMES: _v0.join(", "),
        NAME: _v1
      },
      dictionary: {
        es: {
          singular: "{NAMES} y {NAME}",
          plural: "{NAMES} y {NAME}"
        },
        "de-DE": {
          singular: "{NAMES} und {NAME}",
          plural: "{NAMES} und {NAME}"
        },
        "fr-FR": {
          singular: "{NAMES} et {NAME}",
          plural: "{NAMES} et {NAME}"
        },
        "ja-JP": {
          singular: "{NAMES}と{NAME}",
          plural: "{NAMES}、および{NAME}"
        },
        "ko-KR": {
          singular: "{NAMES} 및 {NAME}",
          plural: "{NAMES} 및 {NAME}"
        },
        "pt-BR": {
          singular: "{NAMES} e {NAME}",
          plural: "{NAMES} e {NAME}"
        },
        "zh-CN": {
          singular: "{NAMES} 和 {NAME}",
          plural: "{NAMES} 和 {NAME}"
        }
      }
    }),
    WorkspaceAccess: (0, _v5.translate)({
      singular: "Workspace access",
      dictionary: {
        es: {
          singular: "Acceso al espacio de trabajo"
        },
        "de-DE": {
          singular: "Zugang zum Workspace"
        },
        "fr-FR": {
          singular: "Accès à l'espace de travail"
        },
        "ja-JP": {
          singular: "ワークスペースへのアクセス"
        },
        "ko-KR": {
          singular: "워크스페이스 액세스"
        },
        "pt-BR": {
          singular: "Acesso ao espaço de trabalho"
        },
        "zh-CN": {
          singular: "工作区访问权限"
        }
      }
    }),
    NoWorkspacesFound: (0, _v5.translate)({
      singular: "No workspaces found",
      dictionary: {
        es: {
          singular: "No se encontraron espacios de trabajo"
        },
        "de-DE": {
          singular: "Keine Workspaces gefunden"
        },
        "fr-FR": {
          singular: "Aucun espace de travail trouvé"
        },
        "ja-JP": {
          singular: "ワークスペースが見つかりませんでした"
        },
        "ko-KR": {
          singular: "워크스페이스를 찾을 수 없습니다."
        },
        "pt-BR": {
          singular: "Nenhum espaço de trabalho encontrado"
        },
        "zh-CN": {
          singular: "未找到工作区"
        }
      }
    }),
    RemoveGroupFromWs: (_v0, _v1) => (0, _v5.translate)({
      singular: "Remove {GROUP_NAME} from {WS_NAME}",
      replacements: {
        GROUP_NAME: _v0,
        WS_NAME: _v1
      },
      dictionary: {
        es: {
          singular: "Eliminar {GROUP_NAME} de {WS_NAME}"
        },
        "de-DE": {
          singular: "{GROUP_NAME} aus {WS_NAME} entfernen"
        },
        "fr-FR": {
          singular: "Retirer {GROUP_NAME} de {WS_NAME}"
        },
        "ja-JP": {
          singular: "「{WS_NAME}」から「{GROUP_NAME}」を削除"
        },
        "ko-KR": {
          singular: "{WS_NAME}에서 {GROUP_NAME} 제거"
        },
        "pt-BR": {
          singular: "Remover {GROUP_NAME} de {WS_NAME}"
        },
        "zh-CN": {
          singular: "从 {WS_NAME} 中删除 {GROUP_NAME}"
        }
      }
    }),
    AllMembersOfGroupWillLoseAccess: (_v0, _v1) => (0, _v5.translate)({
      singular: "All members of {GROUP_NAME} will lose access to all content in {WS_NAME}, including any content in My library. Any videos and comments added to shared folders by group members will remain in the workspace.",
      replacements: {
        GROUP_NAME: (0, _v3.jsx)("b", {
          children: _v0
        }),
        WS_NAME: (0, _v3.jsx)("b", {
          children: _v1
        })
      },
      dictionary: {
        es: {
          singular: "Todos los miembros de {GROUP_NAME} perderán el acceso a todo el contenido de {WS_NAME}, incluido el de su biblioteca personal. Todos los videos y comentarios que los miembros del grupo agreguen a las carpetas compartidas permanecerán en el espacio de trabajo."
        },
        "de-DE": {
          singular: "Alle Mitglieder von {GROUP_NAME} verlieren den Zugriff auf alle Inhalte in {WS_NAME}, einschließlich aller Inhalte in „Meine Bibliothek“. Alle Videos und Kommentare, die von Gruppenmitgliedern zu gemeinsamen Ordnern hinzugefügt wurden, verbleiben im Workspace."
        },
        "fr-FR": {
          singular: "Tous les membres de {GROUP_NAME} ne pourront plus accéder au contenu de {WS_NAME}, y compris au contenu de Ma bibliothèque. Les vidéos et commentaires ajoutés par les membres du groupe dans des dossiers partagés resteront dans l'espace de travail."
        },
        "ja-JP": {
          singular: "「{GROUP_NAME}」のすべてのメンバーが、マイライブラリのコンテンツを含め、「{WS_NAME}」のすべてのコンテンツにアクセスできなくなります。グループメンバーが共有フォルダーに追加した動画とコメントは、ワークスペースに残ります。"
        },
        "ko-KR": {
          singular: "{GROUP_NAME}의 모든 멤버가 내 라이브러리의 모든 콘텐츠를 포함하여 {WS_NAME}의 모든 콘텐츠에 액세스할 수 없게 됩니다. 그룹 멤버가 공유 폴더에 추가한 모든 동영상과 댓글은 워크스페이스에 그대로 유지됩니다."
        },
        "pt-BR": {
          singular: "Todos os membros de {GROUP_NAME} perderão o acesso a todo o conteúdo em {WS_NAME}, incluindo qualquer conteúdo na Minha biblioteca. Todos os vídeos e comentários adicionados às pastas compartilhadas por membros do grupo permanecerão no espaço de trabalho."
        },
        "zh-CN": {
          singular: "{GROUP_NAME} 的所有成员将失去对 {WS_NAME} 中所有内容的访问权限，包括“我的库”中的任何内容。小组成员添加到共享文件夹的任何视频和评论将保留在工作区中。"
        }
      }
    }),
    RoleWithName: _v0 => (0, _v5.translate)({
      singular: "Role: {ROLE_NAME}",
      replacements: {
        ROLE_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Rol: {ROLE_NAME}"
        },
        "de-DE": {
          singular: "Rolle: {ROLE_NAME}"
        },
        "fr-FR": {
          singular: "Rôle : {ROLE_NAME}"
        },
        "ja-JP": {
          singular: "役割：{ROLE_NAME}"
        },
        "ko-KR": {
          singular: "역할: {ROLE_NAME}"
        },
        "pt-BR": {
          singular: "Função: {ROLE_NAME}"
        },
        "zh-CN": {
          singular: "角色：{ROLE_NAME}"
        }
      }
    }),
    AdminRole: (0, _v5.translate)({
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
    ContributorRole: (0, _v5.translate)({
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
    ContributorPlusRole: (0, _v5.translate)({
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
    ViewerRole: (0, _v5.translate)({
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
    })
  })), _v6)], 0);
}