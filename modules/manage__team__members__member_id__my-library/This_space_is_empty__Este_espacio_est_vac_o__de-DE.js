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
    _v14 = _v4;
  let _v15 = ({
    title: _v0 = (0, _v14.translate)({
      singular: "This space is empty",
      dictionary: {
        es: {
          singular: "Este espacio está vacío"
        },
        "de-DE": {
          singular: "Dieser Bereich ist leer"
        },
        "fr-FR": {
          singular: "Cet espace est vide"
        },
        "ja-JP": {
          singular: "このスペースは空です"
        },
        "ko-KR": {
          singular: "이 공간은 비어 있습니다."
        },
        "pt-BR": {
          singular: "Este espaço está vazio"
        },
        "zh-CN": {
          singular: "这个空间是空的"
        }
      }
    }),
    description: _v1
  }) => (0, _v1.jsxs)(_v10.VStack, {
    py: (0, _v11.rem)(200),
    children: [(0, _v1.jsx)(_v13.MyLibrary, {
      boxSize: "lg"
    }), _v0 && (0, _v1.jsx)(_v9.Header, {
      fontWeight: "medium",
      py: "md",
      size: "md",
      children: _v0
    }), _v1 && (0, _v1.jsx)(_v12.Paragraph, {
      paddingBottom: "lg",
      size: "md",
      color: "text-secondary",
      textAlign: "center",
      children: _v1
    })]
  });
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = () => (0, _v1.jsx)(_v16.Center, {
    h: (0, _v11.rem)(400),
    children: (0, _v1.jsx)(_v17.Spinner, {})
  });
  function _v19({
    memberId: _v0
  }) {
    let _v1 = (0, _v2.useContext)(_v8.ViewerContext),
      {
        personalTeamFolderUri: _v2,
        isLoaded: _v3,
        permissionLevel: _v4
      } = (0, _v2.useContext)(_v7.TeamUserInfoState),
      _v5 = _v1?.teamUser?.ownerId ?? _v1?.user?.id;
    if (!_v3) return (0, _v1.jsx)(_v18, {});
    if (!_v2) return (0, _v1.jsx)(_v15, {});
    let _v6 = ((_v0 = "") => Number(_v0?.match(/(\d)+/g)?.[1]))(_v2);
    return (0, _v1.jsx)(_v5.FolderPermissionsList, {
      teamUserId: _v0,
      ownerId: _v5,
      folderId: _v6,
      excludePersonalTeamFolder: !1,
      emptyState: "Viewer" === _v4 ? (0, _v1.jsx)(_v15, {
        description: (0, _v4.translate)({
          singular: "To let this team member add videos, upgrade their role to Contributor or higher",
          dictionary: {
            es: {
              singular: "Para permitir que este miembro del equipo agregue videos, actualice su rol a colaborador o superior"
            },
            "de-DE": {
              singular: "Um diesem Teammitglied das Hinzufügen von Videos zu ermöglichen, aktualisieren Sie seine Rolle auf „Beitragender“ oder höher."
            },
            "fr-FR": {
              singular: "Pour permettre à ce collaborateur d'ajouter des vidéos, faites passer son rôle à Contributeur ou à un niveau supérieur"
            },
            "ja-JP": {
              singular: "このチームメンバーに動画の追加を許可するには、メンバーの役割を投稿者以上にアップグレードしてください"
            },
            "ko-KR": {
              singular: "이 팀원이 동영상을 추가할 수 있도록 하려면 해당 팀원의 역할을 기여자 이상으로 업그레이드하세요."
            },
            "pt-BR": {
              singular: "Para permitir que este integrante da equipe adicione vídeos, faça o upgrade da função dele para Colaborador ou superior"
            },
            "zh-CN": {
              singular: "要允许此团队成员添加视频，请将其角色升级为贡献者或更高级别"
            }
          }
        })
      }) : (0, _v1.jsx)(_v15, {
        description: (0, _v4.translate)({
          singular: "This team member hasn't added any videos yet",
          dictionary: {
            es: {
              singular: "Este miembro del equipo aún no ha agregado ningún video"
            },
            "de-DE": {
              singular: "Dieses Teammitglied hat noch keine Videos hinzugefügt"
            },
            "fr-FR": {
              singular: "Ce collaborateur n'a pas encore ajouté de vidéos"
            },
            "ja-JP": {
              singular: "このチームメンバーはまだ動画を追加していません"
            },
            "ko-KR": {
              singular: "이 팀원은 아직 동영상을 추가하지 않았습니다."
            },
            "pt-BR": {
              singular: "Este integrante da equipe ainda não adicionou nenhum vídeo"
            },
            "zh-CN": {
              singular: "此团队成员尚未添加任何视频"
            }
          }
        })
      })
    });
  }
  _v19.getLayout = _v6.getSharedContentLayoutWithTabs, (0, _v3.withPageSetup)(({
    params: _v0
  }) => {
    let _v1 = Number(_v0?.member_id);
    return _v1 ? {
      props: {
        memberId: _v1,
        hasThemeSupport: !0
      }
    } : {
      notFound: !0
    };
  }, {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v19], 0);
}