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
    _v15 = _v5;
  let _v16 = ({
    title: _v0 = (0, _v15.translate)({
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
  }) => (0, _v1.jsxs)(_v11.VStack, {
    py: (0, _v12.rem)(200),
    children: [(0, _v1.jsx)(_v14.MyLibrary, {
      boxSize: (0, _v12.rem)(48)
    }), _v0 && (0, _v1.jsx)(_v10.Header, {
      size: "md",
      children: _v0
    }), _v1 && (0, _v1.jsx)(_v13.Paragraph, {
      size: "md",
      color: "text-secondary",
      children: _v1
    })]
  });
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = () => (0, _v1.jsx)(_v17.Center, {
    h: (0, _v12.rem)(400),
    children: (0, _v1.jsx)(_v18.Spinner, {})
  });
  function _v20() {
    let {
        personalTeamFolderUri: _v0,
        isLoaded: _v1,
        permissionLevel: _v2
      } = (0, _v3.useContext)(_v8.TeamUserInfoState),
      _v3 = (0, _v9.useViewer)(),
      _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
      {
        member_id: _v5
      } = (0, _v2.useRouter)().query;
    if (!_v1) return (0, _v1.jsx)(_v19, {});
    if (!_v0) return (0, _v1.jsx)(_v16, {});
    let _v6 = ((_v0 = "") => Number(_v0?.match(/(\d)+/g)?.[1]))(_v0);
    return (0, _v1.jsx)(_v6.FolderPermissionsList, {
      teamUserId: Number(_v5),
      ownerId: _v4,
      folderId: _v6,
      excludePersonalTeamFolder: !1,
      emptyState: "Viewer" === _v2 ? (0, _v1.jsx)(_v16, {
        description: (0, _v5.translate)({
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
      }) : (0, _v1.jsx)(_v16, {
        description: (0, _v5.translate)({
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
  _v20.getLayout = _v7.getSharedContentLayoutWithTabs, (0, _v4.withPageSetup)({
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v20], 0);
}