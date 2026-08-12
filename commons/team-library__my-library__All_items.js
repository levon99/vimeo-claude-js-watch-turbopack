{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      TEAM_LIBRARY: "team-library",
      MY_LIBRARY: "my-library"
    },
    _v3 = {
      [_v2.TEAM_LIBRARY]: (0, _v1.translate)({
        singular: "All items",
        dictionary: {
          es: {
            singular: "Todos los artículos"
          },
          "de-DE": {
            singular: "Alle Elemente"
          },
          "fr-FR": {
            singular: "Tous les éléments"
          },
          "ja-JP": {
            singular: "すべてのアイテム"
          },
          "ko-KR": {
            singular: "모든 항목"
          },
          "pt-BR": {
            singular: "Todos os itens"
          },
          "zh-CN": {
            singular: "所有项目"
          }
        }
      }),
      [_v2.MY_LIBRARY]: (0, _v1.translate)({
        singular: "My library",
        dictionary: {
          es: {
            singular: "Mi biblioteca"
          },
          "de-DE": {
            singular: "Meine Bibliothek"
          },
          "fr-FR": {
            singular: "Ma bibliothèque"
          },
          "ja-JP": {
            singular: "マイ ライブラリ"
          },
          "ko-KR": {
            singular: "내 라이브러리"
          },
          "pt-BR": {
            singular: "Minha Biblioteca"
          },
          "zh-CN": {
            singular: "我的视频库"
          }
        }
      })
    };
  _v0.s(["FOLDER_FIELDS", 0, ["manageLink", "name", "metadata.connections.ancestorPath", "metadata.connections.parentFolder", "uri"], "HIDE_PERMISSION_COLUMN_BREAKPOINT", 0, 0, "ITEMS_PER_PAGE", 0, 25, "ITEM_FIELDS", 0, ["video.link", "video.manageLink", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.metadata.interactions.canComment", "video.name", "video.pictures.sizes.link", "video.uri", "folder.link", "folder.manageLink", "folder.metadata.interactions.edit", "folder.metadata.interactions.deleteVideo", "folder.metadata.interactions.canComment", "folder.metadata.connections.items.total", "folder.name", "folder.settings.color", "folder.uri", "liveEvent.link", "liveEvent.metadata.interactions.edit", "liveEvent.metadata.interactions.delete", "liveEvent.pictures.sizes.link", "liveEvent.title", "liveEvent.uri", "type"], "ROUTE_SEGMENT", 0, _v2, "TEAM_MEMBERS_ROUTE", 0, "/manage/team/members", "WORKSPACE_MEMBERS_ROUTE", 0, "/manage/workspace/members", "breadcrumbNameMap", 0, _v3]);
}