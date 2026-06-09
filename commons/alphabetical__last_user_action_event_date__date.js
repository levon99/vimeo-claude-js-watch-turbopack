{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = {
      TITLE: "alphabetical",
      MODIFIED: "last_user_action_event_date",
      CREATED: "date",
      DURATION: "duration"
    },
    _v10 = {
      TITLE: _v9.TITLE,
      SHARED_DATE: "shared_date",
      SHARED_USER_NAME: "shared_user_name"
    },
    _v11 = {
      TITLE: _v9.TITLE,
      LAST_MODIFIED: "last_modified",
      CREATED: _v9.CREATED
    },
    _v12 = {
      TITLE: _v9.TITLE,
      MODIFIED: _v9.MODIFIED,
      DURATION: _v9.DURATION
    },
    _v13 = {
      ASC: "asc",
      DESC: "desc"
    },
    _v14 = {
      LIST: "LIST_LAYOUT",
      GRID: "GRID_LAYOUT"
    },
    _v15 = {
      [_v14.LIST]: {
        name: "list",
        Icon: _v4.ListUl,
        tooltipText: (0, _v6.translate)({
          singular: "View list",
          dictionary: {
            es: {
              singular: "Ver la lista"
            },
            "de-DE": {
              singular: "Als Liste anzeigen"
            },
            "fr-FR": {
              singular: "Afficher liste"
            },
            "ja-JP": {
              singular: "リストを表示"
            },
            "ko-KR": {
              singular: "목록 보기"
            },
            "pt-BR": {
              singular: "Ver em lista"
            },
            "zh-CN": {
              singular: "查看列表"
            }
          }
        })
      },
      [_v14.GRID]: {
        name: "grid",
        Icon: _v3.GridView,
        tooltipText: (0, _v6.translate)({
          singular: "View grid",
          dictionary: {
            es: {
              singular: "Ver la cuadrícula"
            },
            "de-DE": {
              singular: "Als Gitter anzeigen"
            },
            "fr-FR": {
              singular: "Afficher table"
            },
            "ja-JP": {
              singular: "グリッドを表示"
            },
            "ko-KR": {
              singular: "그리드 보기"
            },
            "pt-BR": {
              singular: "Ver em grade"
            },
            "zh-CN": {
              singular: "查看网格"
            }
          }
        })
      }
    },
    _v16 = _v9.MODIFIED,
    _v17 = _v13.DESC,
    _v18 = _v9.CREATED,
    _v19 = _v9.CREATED,
    _v20 = _v12.MODIFIED,
    _v21 = _v9.CREATED,
    _v22 = [_v9.TITLE, _v9.MODIFIED, _v9.CREATED, _v9.DURATION],
    _v23 = [_v9.TITLE, _v9.CREATED],
    _v24 = [_v10.TITLE, _v10.SHARED_DATE, _v10.SHARED_USER_NAME],
    _v25 = [_v11.TITLE, _v11.LAST_MODIFIED, _v11.CREATED],
    _v26 = {
      alphabetical_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v9.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, A to Z",
          dictionary: {
            es: {
              singular: "Título, de A a Z"
            },
            "de-DE": {
              singular: "Titel, A bis Z"
            },
            "fr-FR": {
              singular: "Titre, de A à Z"
            },
            "ja-JP": {
              singular: "タイトル、A〜Z"
            },
            "ko-KR": {
              singular: "제목 (오름차순)"
            },
            "pt-BR": {
              singular: "Título, A a Z"
            },
            "zh-CN": {
              singular: "标题，A 到 Z"
            }
          }
        })
      },
      alphabetical_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v9.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, Z to A",
          dictionary: {
            es: {
              singular: "Título, de Z a A"
            },
            "de-DE": {
              singular: "Titel, Z bis A"
            },
            "fr-FR": {
              singular: "Titre, de Z à A"
            },
            "ja-JP": {
              singular: "タイトル、Z〜A"
            },
            "ko-KR": {
              singular: "제목 (내림차순)"
            },
            "pt-BR": {
              singular: "Título, Z a A"
            },
            "zh-CN": {
              singular: "标题，Z 到 A"
            }
          }
        })
      },
      last_user_action_event_date_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v9.MODIFIED,
        text: (0, _v6.translate)({
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
        })
      },
      last_user_action_event_date_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v9.MODIFIED,
        text: (0, _v6.translate)({
          singular: "First modified",
          dictionary: {
            es: {
              singular: "Primera modificación"
            },
            "de-DE": {
              singular: "Erstmals geändert"
            },
            "fr-FR": {
              singular: "Modifiées en premier"
            },
            "ja-JP": {
              singular: "初回変更日"
            },
            "ko-KR": {
              singular: "최초 수정"
            },
            "pt-BR": {
              singular: "Modificado primeiro"
            },
            "zh-CN": {
              singular: "首次修改"
            }
          }
        })
      },
      date_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v9.CREATED,
        text: (0, _v6.translate)({
          singular: "Last added",
          dictionary: {
            es: {
              singular: "Último agregado"
            },
            "de-DE": {
              singular: "Zuletzt hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajoutées en dernier"
            },
            "ja-JP": {
              singular: "最終追加日"
            },
            "ko-KR": {
              singular: "마지막 추가"
            },
            "pt-BR": {
              singular: "Adicionado por último"
            },
            "zh-CN": {
              singular: "最后添加"
            }
          }
        })
      },
      date_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v9.CREATED,
        text: (0, _v6.translate)({
          singular: "First added",
          dictionary: {
            es: {
              singular: "Primer agregado"
            },
            "de-DE": {
              singular: "Erstmals hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajoutées en premier"
            },
            "ja-JP": {
              singular: "初回追加日"
            },
            "ko-KR": {
              singular: "최초 추가"
            },
            "pt-BR": {
              singular: "Adicionado primeiro"
            },
            "zh-CN": {
              singular: "首次添加"
            }
          }
        })
      },
      duration_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v9.DURATION,
        text: (0, _v6.translate)({
          singular: "Longest",
          dictionary: {
            es: {
              singular: "Más largo"
            },
            "de-DE": {
              singular: "Am längsten"
            },
            "fr-FR": {
              singular: "Plus longues"
            },
            "ja-JP": {
              singular: "再生時間の長い順"
            },
            "ko-KR": {
              singular: "가장 긴 동영상"
            },
            "pt-BR": {
              singular: "Mais longo"
            },
            "zh-CN": {
              singular: "最长"
            }
          }
        })
      },
      duration_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v9.DURATION,
        text: (0, _v6.translate)({
          singular: "Shortest",
          dictionary: {
            es: {
              singular: "Más corto"
            },
            "de-DE": {
              singular: "Am kürzesten"
            },
            "fr-FR": {
              singular: "Plus courtes"
            },
            "ja-JP": {
              singular: "再生時間の短い順"
            },
            "ko-KR": {
              singular: "가장 짧은 동영상"
            },
            "pt-BR": {
              singular: "Mais curto"
            },
            "zh-CN": {
              singular: "最短"
            }
          }
        })
      }
    },
    _v27 = {
      alphabetical_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v9.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, A to Z",
          dictionary: {
            es: {
              singular: "Título, de A a Z"
            },
            "de-DE": {
              singular: "Titel, A bis Z"
            },
            "fr-FR": {
              singular: "Titre, de A à Z"
            },
            "ja-JP": {
              singular: "タイトル、A〜Z"
            },
            "ko-KR": {
              singular: "제목 (오름차순)"
            },
            "pt-BR": {
              singular: "Título, A a Z"
            },
            "zh-CN": {
              singular: "标题，A 到 Z"
            }
          }
        })
      },
      alphabetical_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v9.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, Z to A",
          dictionary: {
            es: {
              singular: "Título, de Z a A"
            },
            "de-DE": {
              singular: "Titel, Z bis A"
            },
            "fr-FR": {
              singular: "Titre, de Z à A"
            },
            "ja-JP": {
              singular: "タイトル、Z〜A"
            },
            "ko-KR": {
              singular: "제목 (내림차순)"
            },
            "pt-BR": {
              singular: "Título, Z a A"
            },
            "zh-CN": {
              singular: "标题，Z 到 A"
            }
          }
        })
      },
      date_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v9.CREATED,
        text: (0, _v6.translate)({
          singular: "Last added",
          dictionary: {
            es: {
              singular: "Último agregado"
            },
            "de-DE": {
              singular: "Zuletzt hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajoutées en dernier"
            },
            "ja-JP": {
              singular: "最終追加日"
            },
            "ko-KR": {
              singular: "마지막 추가"
            },
            "pt-BR": {
              singular: "Adicionado por último"
            },
            "zh-CN": {
              singular: "最后添加"
            }
          }
        })
      },
      date_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v9.CREATED,
        text: (0, _v6.translate)({
          singular: "First added",
          dictionary: {
            es: {
              singular: "Primer agregado"
            },
            "de-DE": {
              singular: "Erstmals hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajoutées en premier"
            },
            "ja-JP": {
              singular: "初回追加日"
            },
            "ko-KR": {
              singular: "최초 추가"
            },
            "pt-BR": {
              singular: "Adicionado primeiro"
            },
            "zh-CN": {
              singular: "首次添加"
            }
          }
        })
      }
    },
    _v28 = {
      alphabetical_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v9.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, A to Z",
          dictionary: {
            es: {
              singular: "Título, de A a Z"
            },
            "de-DE": {
              singular: "Titel, A bis Z"
            },
            "fr-FR": {
              singular: "Titre, de A à Z"
            },
            "ja-JP": {
              singular: "タイトル、A〜Z"
            },
            "ko-KR": {
              singular: "제목 (오름차순)"
            },
            "pt-BR": {
              singular: "Título, A a Z"
            },
            "zh-CN": {
              singular: "标题，A 到 Z"
            }
          }
        })
      },
      alphabetical_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v9.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, Z to A",
          dictionary: {
            es: {
              singular: "Título, de Z a A"
            },
            "de-DE": {
              singular: "Titel, Z bis A"
            },
            "fr-FR": {
              singular: "Titre, de Z à A"
            },
            "ja-JP": {
              singular: "タイトル、Z〜A"
            },
            "ko-KR": {
              singular: "제목 (내림차순)"
            },
            "pt-BR": {
              singular: "Título, Z a A"
            },
            "zh-CN": {
              singular: "标题，Z 到 A"
            }
          }
        })
      },
      shared_date_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v10.SHARED_DATE,
        text: (0, _v6.translate)({
          singular: "Last shared",
          dictionary: {
            es: {
              singular: "Última vez compartido"
            },
            "de-DE": {
              singular: "Zuletzt geteilt"
            },
            "fr-FR": {
              singular: "Dernier partage"
            },
            "ja-JP": {
              singular: "最終共有"
            },
            "ko-KR": {
              singular: "마지막으로 공유됨"
            },
            "pt-BR": {
              singular: "Último compartilhado"
            },
            "zh-CN": {
              singular: "最后分享"
            }
          }
        })
      },
      shared_date_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v10.SHARED_DATE,
        text: (0, _v6.translate)({
          singular: "First shared",
          dictionary: {
            es: {
              singular: "Primero compartido"
            },
            "de-DE": {
              singular: "Zuerst geteilt"
            },
            "fr-FR": {
              singular: "Premier partage"
            },
            "ja-JP": {
              singular: "初回共有"
            },
            "ko-KR": {
              singular: "처음 공유됨"
            },
            "pt-BR": {
              singular: "Primeiro compartilhado"
            },
            "zh-CN": {
              singular: "首个分享"
            }
          }
        })
      },
      shared_user_name_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v10.SHARED_USER_NAME,
        text: (0, _v6.translate)({
          singular: "Shared by, A to Z",
          dictionary: {
            es: {
              singular: "Compartido por, de la A a la Z"
            },
            "de-DE": {
              singular: "Geteilt von A bis Z"
            },
            "fr-FR": {
              singular: "Partagé par A-Z"
            },
            "ja-JP": {
              singular: "共有者、AからZ"
            },
            "ko-KR": {
              singular: "공유자(오름차순, A~Z)"
            },
            "pt-BR": {
              singular: "Compartilhado por, A a Z"
            },
            "zh-CN": {
              singular: "分享者，从 A 到 Z"
            }
          }
        })
      },
      shared_user_name_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v10.SHARED_USER_NAME,
        text: (0, _v6.translate)({
          singular: "Shared by, Z to A",
          dictionary: {
            es: {
              singular: "Compartido por, de la Z a la A"
            },
            "de-DE": {
              singular: "Geteilt von Z bis A"
            },
            "fr-FR": {
              singular: "Partagé par, Z-A"
            },
            "ja-JP": {
              singular: "共有者、ZからA"
            },
            "ko-KR": {
              singular: "공유자(내림차순, Z~A)"
            },
            "pt-BR": {
              singular: "Compartilhado por, Z a A"
            },
            "zh-CN": {
              singular: "分享者，从 Z 到 A"
            }
          }
        })
      }
    },
    _v29 = {
      alphabetical_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v11.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, A to Z",
          dictionary: {
            es: {
              singular: "Título, de A a Z"
            },
            "de-DE": {
              singular: "Titel, A bis Z"
            },
            "fr-FR": {
              singular: "Titre, de A à Z"
            },
            "ja-JP": {
              singular: "タイトル、A〜Z"
            },
            "ko-KR": {
              singular: "제목 (오름차순)"
            },
            "pt-BR": {
              singular: "Título, A a Z"
            },
            "zh-CN": {
              singular: "标题，A 到 Z"
            }
          }
        })
      },
      alphabetical_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v11.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, Z to A",
          dictionary: {
            es: {
              singular: "Título, de Z a A"
            },
            "de-DE": {
              singular: "Titel, Z bis A"
            },
            "fr-FR": {
              singular: "Titre, de Z à A"
            },
            "ja-JP": {
              singular: "タイトル、Z〜A"
            },
            "ko-KR": {
              singular: "제목 (내림차순)"
            },
            "pt-BR": {
              singular: "Título, Z a A"
            },
            "zh-CN": {
              singular: "标题，Z 到 A"
            }
          }
        })
      },
      last_modified_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v11.LAST_MODIFIED,
        text: (0, _v6.translate)({
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
        })
      },
      last_modified_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v11.LAST_MODIFIED,
        text: (0, _v6.translate)({
          singular: "First modified",
          dictionary: {
            es: {
              singular: "Primera modificación"
            },
            "de-DE": {
              singular: "Erstmals geändert"
            },
            "fr-FR": {
              singular: "Modifiées en premier"
            },
            "ja-JP": {
              singular: "初回変更日"
            },
            "ko-KR": {
              singular: "최초 수정"
            },
            "pt-BR": {
              singular: "Modificado primeiro"
            },
            "zh-CN": {
              singular: "首次修改"
            }
          }
        })
      },
      date_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v11.CREATED,
        text: (0, _v6.translate)({
          singular: "Last added",
          dictionary: {
            es: {
              singular: "Último agregado"
            },
            "de-DE": {
              singular: "Zuletzt hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajoutées en dernier"
            },
            "ja-JP": {
              singular: "最終追加日"
            },
            "ko-KR": {
              singular: "마지막 추가"
            },
            "pt-BR": {
              singular: "Adicionado por último"
            },
            "zh-CN": {
              singular: "最后添加"
            }
          }
        })
      },
      date_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v11.CREATED,
        text: (0, _v6.translate)({
          singular: "First added",
          dictionary: {
            es: {
              singular: "Primer agregado"
            },
            "de-DE": {
              singular: "Erstmals hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajoutées en premier"
            },
            "ja-JP": {
              singular: "初回追加日"
            },
            "ko-KR": {
              singular: "최초 추가"
            },
            "pt-BR": {
              singular: "Adicionado primeiro"
            },
            "zh-CN": {
              singular: "首次添加"
            }
          }
        })
      }
    },
    _v30 = {
      alphabetical_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v12.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, A to Z",
          dictionary: {
            es: {
              singular: "Título, de A a Z"
            },
            "de-DE": {
              singular: "Titel, A bis Z"
            },
            "fr-FR": {
              singular: "Titre, de A à Z"
            },
            "ja-JP": {
              singular: "タイトル、A〜Z"
            },
            "ko-KR": {
              singular: "제목 (오름차순)"
            },
            "pt-BR": {
              singular: "Título, A a Z"
            },
            "zh-CN": {
              singular: "标题，A 到 Z"
            }
          }
        })
      },
      alphabetical_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v12.TITLE,
        text: (0, _v6.translate)({
          singular: "Title, Z to A",
          dictionary: {
            es: {
              singular: "Título, de Z a A"
            },
            "de-DE": {
              singular: "Titel, Z bis A"
            },
            "fr-FR": {
              singular: "Titre, de Z à A"
            },
            "ja-JP": {
              singular: "タイトル、Z〜A"
            },
            "ko-KR": {
              singular: "제목 (내림차순)"
            },
            "pt-BR": {
              singular: "Título, Z a A"
            },
            "zh-CN": {
              singular: "标题，Z 到 A"
            }
          }
        })
      },
      last_user_action_event_date_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v12.MODIFIED,
        text: (0, _v6.translate)({
          singular: "Latest deleted",
          dictionary: {
            es: {
              singular: "Eliminado más reciente"
            },
            "de-DE": {
              singular: "Späteste Löschung"
            },
            "fr-FR": {
              singular: "Suppression la plus récente"
            },
            "ja-JP": {
              singular: "最も最近削除された日時"
            },
            "ko-KR": {
              singular: "가장 최근에 삭제됨"
            },
            "pt-BR": {
              singular: "Exclusão mais recente"
            },
            "zh-CN": {
              singular: "最近删除时间"
            }
          }
        })
      },
      last_user_action_event_date_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v12.MODIFIED,
        text: (0, _v6.translate)({
          singular: "Earliest deleted",
          dictionary: {
            es: {
              singular: "Eliminado más antiguo"
            },
            "de-DE": {
              singular: "Früheste Löschung"
            },
            "fr-FR": {
              singular: "Suppression la plus ancienne"
            },
            "ja-JP": {
              singular: "最も早く削除された日時"
            },
            "ko-KR": {
              singular: "가장 먼저 삭제됨"
            },
            "pt-BR": {
              singular: "Exclusão mais antiga"
            },
            "zh-CN": {
              singular: "最早删除时间"
            }
          }
        })
      },
      duration_desc: {
        sortDirection: _v13.DESC,
        sortBy: _v12.DURATION,
        text: (0, _v6.translate)({
          singular: "Longest",
          dictionary: {
            es: {
              singular: "Más largo"
            },
            "de-DE": {
              singular: "Am längsten"
            },
            "fr-FR": {
              singular: "Plus longues"
            },
            "ja-JP": {
              singular: "再生時間の長い順"
            },
            "ko-KR": {
              singular: "가장 긴 동영상"
            },
            "pt-BR": {
              singular: "Mais longo"
            },
            "zh-CN": {
              singular: "最长"
            }
          }
        })
      },
      duration_asc: {
        sortDirection: _v13.ASC,
        sortBy: _v12.DURATION,
        text: (0, _v6.translate)({
          singular: "Shortest",
          dictionary: {
            es: {
              singular: "Más corto"
            },
            "de-DE": {
              singular: "Am kürzesten"
            },
            "fr-FR": {
              singular: "Plus courtes"
            },
            "ja-JP": {
              singular: "再生時間の短い順"
            },
            "ko-KR": {
              singular: "가장 짧은 동영상"
            },
            "pt-BR": {
              singular: "Mais curto"
            },
            "zh-CN": {
              singular: "最短"
            }
          }
        })
      }
    },
    _v31 = {
      all: {
        label: (0, _v6.translate)({
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
        value: "all"
      },
      folder: {
        label: (0, _v6.translate)({
          singular: "Folders",
          dictionary: {
            es: {
              singular: "Carpetas"
            },
            "de-DE": {
              singular: "Ordner"
            },
            "fr-FR": {
              singular: "Dossiers"
            },
            "ja-JP": {
              singular: "フォルダー"
            },
            "ko-KR": {
              singular: "폴더"
            },
            "pt-BR": {
              singular: "Pastas"
            },
            "zh-CN": {
              singular: "文件夹"
            }
          }
        }),
        value: "folder"
      },
      showcase: {
        label: (0, _v6.translate)({
          singular: "Showcases",
          dictionary: {
            es: {
              singular: "Presentaciones"
            },
            "de-DE": {
              singular: "Präsentationen"
            },
            "fr-FR": {
              singular: "Présentations"
            },
            "ja-JP": {
              singular: "ショーケース"
            },
            "ko-KR": {
              singular: "쇼케이스"
            },
            "pt-BR": {
              singular: "Vitrines"
            },
            "zh-CN": {
              singular: "橱窗"
            }
          }
        }),
        value: "showcase"
      },
      video: {
        label: (0, _v6.translate)({
          singular: "Videos",
          dictionary: {
            "fr-FR": {
              singular: "Vidéos"
            },
            "ja-JP": {
              singular: "動画"
            },
            "ko-KR": {
              singular: "동영상"
            },
            "pt-BR": {
              singular: "Vídeos"
            },
            "zh-CN": {
              singular: "视频"
            }
          }
        }),
        value: "video"
      }
    },
    _v32 = (0, _v2.rem)(0),
    _v33 = (0, _v2.rem)(0),
    _v34 = (0, _v2.rem)(0),
    _v35 = (0, _v2.rem)(300),
    _v36 = (0, _v6.translate)({
      singular: "Shared with me",
      dictionary: {
        es: {
          singular: "Compartidos conmigo"
        },
        "de-DE": {
          singular: "Mit mir geteilt"
        },
        "fr-FR": {
          singular: "Partagée avec moi"
        },
        "ja-JP": {
          singular: "共有作品"
        },
        "ko-KR": {
          singular: "나와 공유된 파일"
        },
        "pt-BR": {
          singular: "Compartilhado comigo"
        },
        "zh-CN": {
          singular: "与我分享"
        }
      }
    });
  (0, _v6.translate)({
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
  }), (0, _v6.translate)({
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
  }), (0, _v6.translate)({
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
  }), (0, _v6.translate)({
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
  }), (0, _v6.translate)({
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
  }), (0, _v6.translate)({
    singular: "VOD",
    dictionary: {
      "zh-CN": {
        singular: "视频点播"
      }
    }
  }), (0, _v6.translate)({
    singular: "VOD",
    dictionary: {
      "zh-CN": {
        singular: "视频点播"
      }
    }
  }), (0, _v6.translate)({
    singular: "People I follow",
    dictionary: {
      es: {
        singular: "Las personas que sigo"
      },
      "de-DE": {
        singular: "Leute, denen ich folge"
      },
      "fr-FR": {
        singular: "Les personnes que je suis"
      },
      "ja-JP": {
        singular: "自分がフォローしている人"
      },
      "ko-KR": {
        singular: "내가 팔로우하는 사람"
      },
      "pt-BR": {
        singular: "Pessoas que eu sigo"
      },
      "zh-CN": {
        singular: "我关注的人"
      }
    }
  }), (0, _v6.translate)({
    singular: "People I choose",
    dictionary: {
      es: {
        singular: "Las personas que elijo"
      },
      "de-DE": {
        singular: "Von mir ausgewählte Leute"
      },
      "fr-FR": {
        singular: "Personnes de mon choix"
      },
      "ja-JP": {
        singular: "選択した人のみ"
      },
      "ko-KR": {
        singular: "내가 선택한 사람"
      },
      "pt-BR": {
        singular: "Pessoas que eu escolher"
      },
      "zh-CN": {
        singular: "我选择的人"
      }
    }
  }), (0, _v6.translate)({
    singular: "Locked",
    dictionary: {
      es: {
        singular: "Bloqueado"
      },
      "de-DE": {
        singular: "Gesperrt"
      },
      "fr-FR": {
        singular: "Verrouillé"
      },
      "ja-JP": {
        singular: "ロック済み"
      },
      "ko-KR": {
        singular: "잠김"
      },
      "pt-BR": {
        singular: "Bloqueado"
      },
      "zh-CN": {
        singular: "已锁定"
      }
    }
  }), _v0.s(["ACTIONS_MENU_Z_INDEX", 0, 0, "BP_EVENT_COPY", 0, {
    alphabetical_asc: "title, a to z",
    alphabetical_desc: "title, z to a",
    last_user_action_event_date_desc: "last modified",
    last_user_action_event_date_asc: "first modified",
    date_desc: "last added",
    date_asc: "first added",
    duration_desc: "longest",
    duration_asc: "shortest",
    shared_date_desc: "last shared",
    shared_date_asc: "first shared",
    shared_user_name_asc: "shared by, a to z",
    shared_user_name_desc: "shared by, z to a"
  }, "CONTENT_CARD_TITLE_MAX_WIDTH", 0, _v35, "CONTENT_TYPE", 0, {
    FOLDER: "folder",
    VIDEO: "video",
    LIVE_EVENT: "live_event",
    SHOWCASE: "showcase"
  }, "CONTENT_TYPE_FILTER_OPTIONS_BY_VALUE", 0, _v31, "DEFAULT_DATE_DISPLAY", 0, _v21, "DEFAULT_EVENTS_SORT", 0, {
    type: _v18,
    direction: _v17
  }, "DEFAULT_EVENTS_SORT_OPTION", 0, _v18, "DEFAULT_RECENTLY_DELETED_SORT", 0, {
    type: _v20,
    direction: _v17
  }, "DEFAULT_RECENTLY_DELETED_SORT_OPTION", 0, _v20, "DEFAULT_SHOWCASES_SORT", 0, {
    type: _v19,
    direction: _v17
  }, "DEFAULT_SHOWCASES_SORT_OPTION", 0, _v19, "DEFAULT_SORT", 0, {
    type: _v16,
    direction: _v17
  }, "DEFAULT_SORT_DIRECTION", 0, _v17, "DEFAULT_SORT_OPTION", 0, _v16, "EVENTS_SORT_OPTIONS", 0, _v27, "GET_USER_PROJECT_API_FIELDS", 0, ["metadata.connections.ancestorPath"], "HIDE_DATE_COLUMN_BREAKPOINT", 0, _v34, "HIDE_FILE_SIZE_COLUMN_BREAKPOINT", 0, _v33, "HIDE_PRIVACY_COLUMN_BREAKPOINT", 0, _v32, "LAYOUT", 0, _v14, "LAYOUT_CONFIG", 0, _v15, "MAX_SELECTION_FOR_BULK_ADD_TO_SHOWCASES", 0, 100, "MAX_SELECTION_FOR_BULK_MOVE", 0, 50, "MAX_SELECTION_FOR_BULK_PRIVACY", 0, 50, "PAGE", 0, {
    MVV: "mvv",
    ELIHP: "elihp",
    SHOWCASES: "library_showcases",
    VLS: "vls",
    SEARCH: "search_result_page",
    LIBRARY: "library",
    EVENTS: "events",
    SVV: "svv",
    UNKNOWN: "",
    SHARED_WITH_ME: "shared_with_me"
  }, "Path", 0, {
    AccountSettings: "/settings/account/general",
    Analytics: "/analytics",
    Home: "/home",
    LiveEvents: "/library/events",
    ManageTeam: "/settings/account/team_members",
    ManageVideos: "/manage/videos",
    MVV: "/user/[userId]/folder/[folderId]",
    SharedWithMe: "/shared-with-me",
    Showcases: "/library/showcases",
    EventSeries: "/library/event_series",
    TeamLibrary: "/library",
    Watch: "/watch",
    IntegrationsCenter: "/integrations-center/[[...slug]]",
    RecentlyDeleted: "/recently-deleted"
  }, "RECENTLY_DELETED_SORT_OPTIONS", 0, _v30, "SHARED_WITH_ME_DIR_NAME", 0, _v36, "SHARED_WITH_ME_SORT_OPTIONS", 0, _v28, "SHOWCASES_SORT_OPTION", 0, _v11, "SHOWCASES_SORT_OPTIONS", 0, _v29, "SORT_DIRECTION", 0, _v13, "SORT_OPTION", 0, _v9, "SORT_OPTIONS", 0, _v26, "USER_PREFERENCE_ID", 0, {
    PREF_ORGANIZATION_UUID: "orguid",
    PREF_WORKSPACE_UUID: "wspuid"
  }, "VL_DATE_LOCAL_STORAGE_KEY", 0, "vl_date", "VL_EVENTS_SORT_LOCAL_STORAGE_KEY", 0, "vl_events_sort", "VL_EVENTS_SORT_OPTIONS", 0, _v23, "VL_SHOWCASES_SORT_LOCAL_STORAGE_KEY", 0, "vl_showcases_sort", "VL_SHOWCASES_SORT_OPTIONS", 0, _v25, "VL_SORT_LOCAL_STORAGE_KEY", 0, "vl_sort", "VL_SORT_OPTIONS", 0, _v22, "VL_SWM_SORT_LOCAL_STORAGE_KEY", 0, "vl_swm_sort", "VL_SWM_SORT_OPTIONS", 0, _v24, "getPrivacyTypeFilterOptionsByValue", 0, (_v0, _v1) => {
    let _v2 = Object.fromEntries(Object.entries(_v7.DEFAULT_PRIVACY_VALUES).map(([_v0, _v1]) => [_v1, _v0.toLowerCase()]));
    return {
      ...Object.fromEntries(_v7.DEFAULT_PRIVACY_OPTIONS.flatMap(_v0 => {
        let _v1 = _v2[_v0.privacy];
        if (!_v1) return [];
        let _v2 = _v7.VIDEO_PRIVACY_ICON_MAP[_v0.privacy]?.icon;
        return [[_v1, {
          label: _v0.privacy === _v7.DEFAULT_PRIVACY_VALUES.TEAM ? (0, _v8.getTeamPrivacyTranslation)(_v0, _v1) : _v0.title,
          value: _v1,
          icon: _v1.default.isValidElement(_v2) ? _v2.type : void 0
        }]];
      })),
      locked: {
        label: (0, _v6.translate)({
          singular: "Locked",
          dictionary: {
            es: {
              singular: "Bloqueado"
            },
            "de-DE": {
              singular: "Gesperrt"
            },
            "fr-FR": {
              singular: "Verrouillé"
            },
            "ja-JP": {
              singular: "ロック済み"
            },
            "ko-KR": {
              singular: "잠김"
            },
            "pt-BR": {
              singular: "Bloqueado"
            },
            "zh-CN": {
              singular: "已锁定"
            }
          }
        }),
        value: "locked",
        icon: _v5.ColdStorageVideoLockedIcon
      }
    };
  }]);
}