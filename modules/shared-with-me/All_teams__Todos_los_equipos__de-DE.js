{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.translate)({
      singular: "All teams",
      dictionary: {
        es: {
          singular: "Todos los equipos"
        },
        "de-DE": {
          singular: "Alle Teams"
        },
        "fr-FR": {
          singular: "Toutes vos équipes"
        },
        "ja-JP": {
          singular: "すべてのチーム"
        },
        "ko-KR": {
          singular: "모든 팀"
        },
        "pt-BR": {
          singular: "Todas as equipes"
        },
        "zh-CN": {
          singular: "所有团队"
        }
      }
    }),
    _v3 = (0, _v1.translate)({
      singular: "All workspaces",
      dictionary: {
        es: {
          singular: "Todos los espacios de trabajo"
        },
        "de-DE": {
          singular: "Alle Workspaces"
        },
        "fr-FR": {
          singular: "Tous les espaces de travail"
        },
        "ja-JP": {
          singular: "すべてのワークスペース"
        },
        "ko-KR": {
          singular: "모든 워크스페이스"
        },
        "pt-BR": {
          singular: "Todos os espaços de trabalho"
        },
        "zh-CN": {
          singular: "所有工作区"
        }
      }
    });
  _v0.s(["API_SHARED_ITEMS_FIELDS", 0, ["type", "sharedDate", "folder.link", "folder.manageLink", "folder.name", "folder.settings.color", "folder.metadata.connections.items.total", "folder.uri", "folder.user.uri", "showcase.embed", "showcase.hasChosenThumbnail", "showcase.link", "showcase.metadata.interactions.edit", "showcase.name", "showcase.pictures", "showcase.uri", "showcase.user.uri", "video.duration", "video.link", "video.manageLink", "video.metadata.interactions.edit", "video.metadata.interactions.canComment", "video.name", "video.pictures.sizes.link", "video.uri", "video.user.uri", "metadata.connections.sharedTeam.name", "metadata.connections.sharedUser.name", "metadata.connections.sharedUser.pictures"], "API_SHARED_TEAM_MEMBERS_FIELDS", 0, ["name", "pictures", "uri"], "DEFAULT_SORT", 0, {
    type: "shared_date",
    direction: "desc"
  }, "ITEMS_PER_PAGE", 0, 20, "ListColumnConfig", 0, {
    DateShared: {
      HideAtWidth: "64rem",
      MinWitdh: "15rem"
    },
    SharedBy: {
      HideAtWidth: "80rem",
      MinWitdh: "15rem"
    }
  }, "MEMBER_ITEMS_PER_PAGE", 0, 10, "TEAM_FILTER_ALL_OPTION_VALUE", 0, "all", "TEAM_FILTER_ALL_TEAMS_OPTION_LABEL", 0, _v2, "TEAM_FILTER_ALL_WORKSPACES_OPTION_LABEL", 0, _v3]);
}