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
    _v12 = _v0.i(0);
  let _v13 = {
      ASC: "asc",
      DESC: "desc"
    },
    _v14 = {
      LIST: "LIST_LAYOUT",
      GRID: "GRID_LAYOUT"
    },
    _v15 = {
      ALPHABETICAL: "alphabetical",
      COMMENTS: "comments",
      DATE: "date",
      DEFAULT: "default",
      DURATION: "duration",
      LAST_USER_ACTION_EVENT_DATE: "last_user_action_event_date",
      LIKES: "likes",
      MODIFIED_TIME: "modified_time",
      PLAYS: "plays"
    },
    _v16 = {
      MANUAL: "manual",
      DATE: "date",
      NEWEST: "date_new",
      OLDEST: "date_oldest",
      PLAYS: "plays",
      COMMENTS: "comments",
      LIKES: "likes",
      ADDED_FIRST: "added_first",
      ADDED_LAST: "added_last",
      ALPHABETICAL: "alphabetical",
      ALPHABETICAL_ASC: "alphabetical_asc",
      ALPHABETICAL_DESC: "alphabetical_desc",
      MODIFIED: "modified_time",
      MODIFIED_ASC: "modified_time_asc",
      MODIFIED_DESC: "modified_time_desc"
    };
  _v0.s(["AddVideoSortOption", 0, _v15, "FeaturedContentSortOption", 0, _v16, "LAYOUT", 0, _v14, "SortDirection", 0, _v13, "VideoListModalType", 0, {
    ADD_VIDEO_TO_FOLDER: "add_video_to_folder",
    ADD_VIDEO_TO_SHOWCASE: "add_video_to_showcase",
    SET_SHOWCASE_FEATURED_CONTENT: "set_showcase_featured_content",
    VIDEO_FILE_TRANSFER: "video_file_transfer"
  }], 0);
  let _v17 = {
    closeVideoModal: () => void 0,
    destinationFolder: void 0,
    isSubmitting: !1,
    showVideoFilter: () => !0,
    layout: _v14.LIST,
    loadMoreErrorVisibility: void 0,
    modalConfig: {},
    patchErrorVisibility: void 0,
    patchFailureReason: void 0,
    privateItemURIs: new Set(),
    resourceId: 0,
    resourceOwnerId: 0,
    searchQuery: "",
    searchFilterFields: [],
    selectableURIList: new Set(),
    selectedItemURIs: new Set(),
    videoItems: [],
    videoLimitErrorVisibility: void 0,
    additionalProps: void 0,
    sortValues: {
      sortDirection: void 0,
      sortBy: void 0,
      sortKey: void 0
    },
    featuredContentSortValues: {
      sortDirection: void 0,
      sortBy: void 0,
      sortKey: void 0
    }
  };
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = (0, _v8.rem)(640),
    _v22 = (0, _v8.rem)(300),
    _v23 = {
      unlisted: {
        title: (0, _v20.translate)({
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
        })
      },
      password: {
        title: (0, _v20.translate)({
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
        description: (0, _v20.translate)({
          singular: "Not available on embeds",
          dictionary: {
            es: {
              singular: "No disponible en inserciones"
            },
            "de-DE": {
              singular: "Nicht verfügbar für Einbettungen"
            },
            "fr-FR": {
              singular: "Non disponible sur les intégrations"
            },
            "ja-JP": {
              singular: "埋め込みでは利用できません"
            },
            "ko-KR": {
              singular: "임베드에서는 사용할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não disponível em incorporações"
            },
            "zh-CN": {
              singular: "无法用于嵌入"
            }
          }
        })
      },
      disable: {
        title: (0, _v20.translate)({
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
        description: (0, _v20.translate)({
          singular: "Only available on embeds",
          dictionary: {
            es: {
              singular: "Solo disponible en inserciones"
            },
            "de-DE": {
              singular: "Nur in einbetten verfügbar"
            },
            "fr-FR": {
              singular: "Disponible uniquement sur les intégrations"
            },
            "ja-JP": {
              singular: "埋め込みでのみ利用可能"
            },
            "ko-KR": {
              singular: "임베드에서만 사용 가능합니다."
            },
            "pt-BR": {
              singular: "Disponível apenas em incorporações"
            },
            "zh-CN": {
              singular: "仅在嵌入中可用"
            }
          }
        })
      },
      nobody: {
        title: (0, _v20.translate)({
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
        })
      },
      anybody: {
        title: (0, _v20.translate)({
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
        })
      },
      purgatory: {
        title: (0, _v20.translate)({
          singular: "Restricted",
          dictionary: {
            es: {
              singular: "Restringido"
            },
            "de-DE": {
              singular: "Eingeschränkt"
            },
            "fr-FR": {
              singular: "Restreint"
            },
            "ja-JP": {
              singular: "制限付き"
            },
            "ko-KR": {
              singular: "제한됨"
            },
            "pt-BR": {
              singular: "Restrito"
            },
            "zh-CN": {
              singular: "受限"
            }
          }
        })
      },
      cold_storage: {
        title: (0, _v20.translate)({
          singular: "Restricted",
          dictionary: {
            es: {
              singular: "Restringido"
            },
            "de-DE": {
              singular: "Eingeschränkt"
            },
            "fr-FR": {
              singular: "Restreint"
            },
            "ja-JP": {
              singular: "制限付き"
            },
            "ko-KR": {
              singular: "제한됨"
            },
            "pt-BR": {
              singular: "Restrito"
            },
            "zh-CN": {
              singular: "受限"
            }
          }
        })
      },
      embed_only: {
        title: (0, _v20.translate)({
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
        description: (0, _v20.translate)({
          singular: "Only available on embeds",
          dictionary: {
            es: {
              singular: "Solo disponible en inserciones"
            },
            "de-DE": {
              singular: "Nur in einbetten verfügbar"
            },
            "fr-FR": {
              singular: "Disponible uniquement sur les intégrations"
            },
            "ja-JP": {
              singular: "埋め込みでのみ利用可能"
            },
            "ko-KR": {
              singular: "임베드에서만 사용 가능합니다."
            },
            "pt-BR": {
              singular: "Disponível apenas em incorporações"
            },
            "zh-CN": {
              singular: "仅在嵌入中可用"
            }
          }
        })
      }
    },
    _v24 = {
      RADIO: "radio",
      CHECKBOX: "checkbox"
    },
    _v25 = {
      LIVE: "live",
      VIDEO: "video"
    },
    _v26 = {
      [_v14.LIST]: {
        name: "list",
        Icon: _v19.ListUl,
        tooltipText: (0, _v20.translate)({
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
        Icon: _v18.GridView,
        tooltipText: (0, _v20.translate)({
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
    _v27 = ["title", "description", "tags"],
    _v28 = {
      title: {
        label: (0, _v20.translate)({
          singular: "Title",
          dictionary: {
            es: {
              singular: "Título"
            },
            "de-DE": {
              singular: "Titel"
            },
            "fr-FR": {
              singular: "Titre"
            },
            "ja-JP": {
              singular: "タイトル"
            },
            "ko-KR": {
              singular: "제목"
            },
            "pt-BR": {
              singular: "Título"
            },
            "zh-CN": {
              singular: "标题"
            }
          }
        }),
        value: "title"
      },
      description: {
        label: (0, _v20.translate)({
          singular: "Description",
          dictionary: {
            es: {
              singular: "Descripción"
            },
            "de-DE": {
              singular: "Beschreibung"
            },
            "ja-JP": {
              singular: "説明"
            },
            "ko-KR": {
              singular: "설명"
            },
            "pt-BR": {
              singular: "Descrição"
            },
            "zh-CN": {
              singular: "描述"
            }
          }
        }),
        value: "description"
      },
      tags: {
        label: (0, _v20.translate)({
          singular: "Tag",
          dictionary: {
            es: {
              singular: "Etiquetar"
            },
            "de-DE": {
              singular: "Markierung"
            },
            "fr-FR": {
              singular: "Étiquette"
            },
            "ja-JP": {
              singular: "タグ"
            },
            "ko-KR": {
              singular: "태그"
            },
            "pt-BR": {
              singular: "Etiqueta"
            },
            "zh-CN": {
              singular: "标签"
            }
          }
        }),
        value: "tags"
      }
    },
    _v29 = {
      titleAsc: {
        sortDirection: _v13.ASC,
        sortBy: _v15.ALPHABETICAL,
        text: (0, _v20.translate)({
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
      titleDesc: {
        sortDirection: _v13.DESC,
        sortBy: _v15.ALPHABETICAL,
        text: (0, _v20.translate)({
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
      addedDesc: {
        sortDirection: _v13.DESC,
        sortBy: _v15.DATE,
        text: (0, _v20.translate)({
          singular: "Last added",
          dictionary: {
            es: {
              singular: "Más recientemente añadidos"
            },
            "de-DE": {
              singular: "Zuletzt hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajout le plus récent"
            },
            "ja-JP": {
              singular: "最新追加"
            },
            "ko-KR": {
              singular: "최근 추가"
            },
            "pt-BR": {
              singular: "Últimos adicionados"
            },
            "zh-CN": {
              singular: "最近添加"
            }
          }
        })
      },
      addedAsc: {
        sortDirection: _v13.ASC,
        sortBy: _v15.DATE,
        text: (0, _v20.translate)({
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
      modifiedDesc: {
        sortDirection: _v13.DESC,
        sortBy: _v15.LAST_USER_ACTION_EVENT_DATE,
        text: (0, _v20.translate)({
          singular: "Last modified",
          dictionary: {
            es: {
              singular: "Última modificación"
            },
            "de-DE": {
              singular: "Zuletzt geändert"
            },
            "fr-FR": {
              singular: "Dernière modification"
            },
            "ja-JP": {
              singular: "最終更新日"
            },
            "ko-KR": {
              singular: "최근 수정"
            },
            "pt-BR": {
              singular: "Última modificação"
            },
            "zh-CN": {
              singular: "最近修改"
            }
          }
        })
      },
      modifiedAsc: {
        sortDirection: _v13.ASC,
        sortBy: _v15.LAST_USER_ACTION_EVENT_DATE,
        text: (0, _v20.translate)({
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
      }
    },
    _v30 = {
      titleAsc: {
        sortDirection: _v13.ASC,
        sortBy: _v15.ALPHABETICAL,
        text: (0, _v20.translate)({
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
      titleDesc: {
        sortDirection: _v13.DESC,
        sortBy: _v15.ALPHABETICAL,
        text: (0, _v20.translate)({
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
      addedDesc: {
        sortDirection: _v13.DESC,
        sortBy: _v15.DATE,
        text: (0, _v20.translate)({
          singular: "Last added",
          dictionary: {
            es: {
              singular: "Más recientemente añadidos"
            },
            "de-DE": {
              singular: "Zuletzt hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajout le plus récent"
            },
            "ja-JP": {
              singular: "最新追加"
            },
            "ko-KR": {
              singular: "최근 추가"
            },
            "pt-BR": {
              singular: "Últimos adicionados"
            },
            "zh-CN": {
              singular: "最近添加"
            }
          }
        })
      },
      addedAsc: {
        sortDirection: _v13.ASC,
        sortBy: _v15.DATE,
        text: (0, _v20.translate)({
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
    };
  _v13.ASC, _v15.ALPHABETICAL, (0, _v20.translate)({
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
  }), _v13.DESC, _v15.ALPHABETICAL, (0, _v20.translate)({
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
  }), _v13.DESC, _v15.DATE, (0, _v20.translate)({
    singular: "Last added",
    dictionary: {
      es: {
        singular: "Más recientemente añadidos"
      },
      "de-DE": {
        singular: "Zuletzt hinzugefügt"
      },
      "fr-FR": {
        singular: "Ajout le plus récent"
      },
      "ja-JP": {
        singular: "最新追加"
      },
      "ko-KR": {
        singular: "최근 추가"
      },
      "pt-BR": {
        singular: "Últimos adicionados"
      },
      "zh-CN": {
        singular: "最近添加"
      }
    }
  }), _v13.ASC, _v15.DATE, (0, _v20.translate)({
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
  }), _v13.DESC, _v15.COMMENTS, (0, _v20.translate)({
    singular: "Most comments",
    dictionary: {
      es: {
        singular: "Videos con más comentarios"
      },
      "de-DE": {
        singular: "Meiste Kommentare"
      },
      "fr-FR": {
        singular: "Le plus de commentaires"
      },
      "ja-JP": {
        singular: "最もコメントの多い動画"
      },
      "ko-KR": {
        singular: "소감이 가장 많은 동영상"
      },
      "pt-BR": {
        singular: "Mais comentados"
      },
      "zh-CN": {
        singular: "最多评论"
      }
    }
  }), _v13.DESC, _v15.LIKES, (0, _v20.translate)({
    singular: "Most likes",
    dictionary: {
      es: {
        singular: "Videos que más han gustado"
      },
      "de-DE": {
        singular: "Die meisten Likes"
      },
      "fr-FR": {
        singular: "Le plus de mentions J'aime"
      },
      "ja-JP": {
        singular: "いいね数最多の動画"
      },
      "ko-KR": {
        singular: "좋아하기가 가장 많은 동영상"
      },
      "pt-BR": {
        singular: "Mais curtidos"
      },
      "zh-CN": {
        singular: "最多点赞"
      }
    }
  });
  let _v31 = "vlm_sort_avm",
    _v32 = {
      [_v16.ALPHABETICAL_ASC]: {
        sortDirection: _v13.ASC,
        sortBy: _v16.ALPHABETICAL,
        text: (0, _v20.translate)({
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
      [_v16.ALPHABETICAL_DESC]: {
        sortDirection: _v13.DESC,
        sortBy: _v16.ALPHABETICAL,
        text: (0, _v20.translate)({
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
      [_v16.NEWEST]: {
        sortDirection: _v13.DESC,
        sortBy: _v16.DATE,
        text: (0, _v20.translate)({
          singular: "Last added",
          dictionary: {
            es: {
              singular: "Más recientemente añadidos"
            },
            "de-DE": {
              singular: "Zuletzt hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajout le plus récent"
            },
            "ja-JP": {
              singular: "最新追加"
            },
            "ko-KR": {
              singular: "최근 추가"
            },
            "pt-BR": {
              singular: "Últimos adicionados"
            },
            "zh-CN": {
              singular: "最近添加"
            }
          }
        })
      },
      [_v16.OLDEST]: {
        sortDirection: _v13.ASC,
        sortBy: _v16.DATE,
        text: (0, _v20.translate)({
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
      [_v16.LIKES]: {
        sortDirection: void 0,
        sortBy: _v16.LIKES,
        text: (0, _v20.translate)({
          singular: "Most likes",
          dictionary: {
            es: {
              singular: "Videos que más han gustado"
            },
            "de-DE": {
              singular: "Die meisten Likes"
            },
            "fr-FR": {
              singular: "Le plus de mentions J'aime"
            },
            "ja-JP": {
              singular: "いいね数最多の動画"
            },
            "ko-KR": {
              singular: "좋아하기가 가장 많은 동영상"
            },
            "pt-BR": {
              singular: "Mais curtidos"
            },
            "zh-CN": {
              singular: "最多点赞"
            }
          }
        })
      },
      [_v16.PLAYS]: {
        sortDirection: void 0,
        sortBy: _v16.PLAYS,
        text: (0, _v20.translate)({
          singular: "Most plays",
          dictionary: {
            es: {
              singular: "Videos con más reproducciones"
            },
            "de-DE": {
              singular: "Am häufigsten gesehen"
            },
            "fr-FR": {
              singular: "Le plus de lectures"
            },
            "ja-JP": {
              singular: "最も再生された動画"
            },
            "ko-KR": {
              singular: "가장 많이 재생된 동영상"
            },
            "pt-BR": {
              singular: "Mais reproduzidos"
            },
            "zh-CN": {
              singular: "播放次数最多"
            }
          }
        })
      },
      [_v16.COMMENTS]: {
        sortDirection: void 0,
        sortBy: _v16.COMMENTS,
        text: (0, _v20.translate)({
          singular: "Most comments",
          dictionary: {
            es: {
              singular: "Videos con más comentarios"
            },
            "de-DE": {
              singular: "Meiste Kommentare"
            },
            "fr-FR": {
              singular: "Le plus de commentaires"
            },
            "ja-JP": {
              singular: "最もコメントの多い動画"
            },
            "ko-KR": {
              singular: "소감이 가장 많은 동영상"
            },
            "pt-BR": {
              singular: "Mais comentados"
            },
            "zh-CN": {
              singular: "最多评论"
            }
          }
        })
      },
      [_v16.MANUAL]: {
        sortDirection: void 0,
        sortBy: _v16.MANUAL,
        text: (0, _v20.translate)({
          singular: "Custom",
          dictionary: {
            es: {
              singular: "Personalizar"
            },
            "de-DE": {
              singular: "Benutzerdefiniert"
            },
            "fr-FR": {
              singular: "Personnalisé"
            },
            "ja-JP": {
              singular: "カスタム"
            },
            "ko-KR": {
              singular: "커스텀"
            },
            "pt-BR": {
              singular: "Customizado"
            },
            "zh-CN": {
              singular: "自定义"
            }
          }
        })
      },
      [_v16.MODIFIED_ASC]: {
        sortDirection: _v13.ASC,
        sortBy: _v16.MODIFIED,
        text: (0, _v20.translate)({
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
      [_v16.MODIFIED_DESC]: {
        sortDirection: _v13.DESC,
        sortBy: _v16.MODIFIED,
        text: (0, _v20.translate)({
          singular: "Last modified",
          dictionary: {
            es: {
              singular: "Última modificación"
            },
            "de-DE": {
              singular: "Zuletzt geändert"
            },
            "fr-FR": {
              singular: "Dernière modification"
            },
            "ja-JP": {
              singular: "最終更新日"
            },
            "ko-KR": {
              singular: "최근 수정"
            },
            "pt-BR": {
              singular: "Última modificação"
            },
            "zh-CN": {
              singular: "最近修改"
            }
          }
        })
      }
    },
    _v33 = "root",
    _v34 = "team_library",
    _v35 = "live_events",
    _v36 = (0, _v20.translate)({
      singular: "Location",
      dictionary: {
        es: {
          singular: "Ubicación"
        },
        "de-DE": {
          singular: "Ort"
        },
        "fr-FR": {
          singular: "Localisation"
        },
        "ja-JP": {
          singular: "位置情報"
        },
        "ko-KR": {
          singular: "위치"
        },
        "pt-BR": {
          singular: "Local"
        },
        "zh-CN": {
          singular: "位置"
        }
      }
    }),
    _v37 = (0, _v20.translate)({
      singular: "Team library",
      dictionary: {
        es: {
          singular: "Biblioteca del equipo"
        },
        "de-DE": {
          singular: "Teambibliothek"
        },
        "fr-FR": {
          singular: "Bibliothèque de l'équipe"
        },
        "ja-JP": {
          singular: "チームライブラリ"
        },
        "ko-KR": {
          singular: "팀 라이브러리"
        },
        "pt-BR": {
          singular: "Biblioteca da equipe"
        },
        "zh-CN": {
          singular: "团队视频库"
        }
      }
    }),
    _v38 = (0, _v20.translate)({
      singular: "Live events",
      dictionary: {
        es: {
          singular: "Eventos en vivo"
        },
        "de-DE": {
          singular: "Live-Events"
        },
        "fr-FR": {
          singular: "Évènements en direct"
        },
        "ja-JP": {
          singular: "ライブイベント"
        },
        "ko-KR": {
          singular: "라이브 이벤트"
        },
        "pt-BR": {
          singular: "Eventos ao vivo"
        },
        "zh-CN": {
          singular: "直播活动"
        }
      }
    }),
    _v39 = (0, _v20.translate)({
      singular: "Library",
      dictionary: {
        es: {
          singular: "Biblioteca"
        },
        "de-DE": {
          singular: "Bibliothek"
        },
        "fr-FR": {
          singular: "Bibliothèque"
        },
        "ja-JP": {
          singular: "ライブラリ"
        },
        "ko-KR": {
          singular: "라이브러리"
        },
        "pt-BR": {
          singular: "Biblioteca"
        },
        "zh-CN": {
          singular: "视频库"
        }
      }
    });
  _v0.s(["CONTROL_TYPE", 0, _v24, "GRID_THUMBNAIL_SIZE_INDEX", 0, 3, "ITEMS_PER_PAGE", 0, 25, "LAYOUT_CONFIG", 0, _v26, "LIBRARY_TAG", 0, _v39, "LIVE_EVENTS", 0, _v35, "LIVE_EVENTS_TAG", 0, _v38, "LIVE_EVENT_API_VERSION", 0, "3.4.1", "MODAL_MAX_WIDTH", 0, _v21, "MODAL_MIN_HEIGHT", 0, _v22, "PrivacyMap", 0, _v23, "ROOT", 0, _v33, "ROOT_ITEMS", 0, _v36, "SEARCH_FILTER_FIELDS", 0, _v27, "SELECTION_LIMIT", 0, 100, "SMALL_DEVICE_WIDTH", 0, 375, "SORT_STORAGE_KEY", 0, _v31, "TEAM_LIBRARY", 0, _v34, "TEAM_LIBRARY_TAG", 0, _v37, "THUMBNAIL_SIZE_INDEX", 0, 1, "VIDEOS_API_VERSION", 0, "3.4.12", "VIDEO_TYPE", 0, _v25, "VL_LAYOUT_LOCAL_STORAGE_KEY", 0, "vlm_lay", "addItemSortoptions", 0, _v29, "featuredContentSortOptions", 0, _v32, "liveEventSortOptions", 0, _v30, "searchFilterOptions", 0, _v28], 0);
  let _v40 = {
      itemListData: [],
      navigationStack: ["root"],
      showFolderView: !1,
      isAtRoot: !0,
      isLiveEventView: !1
    },
    _v41 = (0, _v10.create)()((0, _v12.immer)((0, _v11.devtools)(_v0 => ({
      commonStore: {
        ..._v17,
        actions: {
          resetStore: () => _v0(_v0 => {
            Object.keys(_v17).forEach(_v0 => {
              _v0.commonStore[_v0] = _v17[_v0];
            });
          }),
          setCloseVideoModal: _v0 => _v0(_v0 => {
            _v0.commonStore.closeVideoModal = _v0;
          }),
          setDestinationFolder: _v0 => _v0(_v0 => {
            _v0.commonStore.destinationFolder = _v0;
          }),
          setIsSubmitting: _v0 => _v0(_v0 => {
            _v0.commonStore.isSubmitting = _v0;
          }),
          setLoadMoreErrorVisibility: _v0 => _v0(_v0 => {
            _v0.commonStore.loadMoreErrorVisibility = _v0;
          }),
          setPatchErrorVisibility: _v0 => _v0(_v0 => {
            _v0.commonStore.patchErrorVisibility = _v0;
          }),
          setPatchFailureReason: _v0 => _v0(_v0 => {
            _v0.commonStore.patchFailureReason = _v0;
          }),
          setPrivateItemURIs: _v0 => _v0(_v0 => {
            _v0.commonStore.privateItemURIs = _v0;
          }),
          setShowVideoFilter: _v0 => _v0(_v0 => {
            _v0.commonStore.showVideoFilter = _v0;
          }),
          setModalConfig: _v0 => _v0(_v0 => {
            _v0.commonStore.modalConfig = _v0;
          }),
          setResourceId: _v0 => {
            _v0(_v0 => {
              _v0.commonStore.resourceId = _v0;
            });
          },
          setResourceOwnerId: _v0 => {
            _v0(_v0 => {
              _v0.commonStore.resourceOwnerId = _v0;
            });
          },
          setSearchQuery: _v0 => {
            _v0(_v0 => {
              _v0.commonStore.searchQuery = _v0;
            });
          },
          setSearchFilterFields: _v0 => _v0(_v0 => {
            _v0.commonStore.searchFilterFields = _v0;
          }),
          setSelectableURIList: _v0 => _v0(_v0 => {
            _v0.commonStore.selectableURIList = _v0;
          }),
          setSelectedItemURIs: _v0 => _v0(_v0 => {
            _v0.commonStore.selectedItemURIs = _v0;
          }),
          setVideoItems: _v0 => _v0(_v0 => {
            _v0.commonStore.videoItems = _v0;
          }),
          setVideoLimitErrorVisibility: _v0 => _v0(_v0 => {
            _v0.commonStore.videoLimitErrorVisibility = _v0;
          }),
          setLayout: _v0 => _v0(_v0 => {
            _v0.commonStore.layout = _v0;
          }),
          setAdditionalProps: _v0 => _v0(_v0 => {
            _v0.commonStore.additionalProps = _v0;
          }),
          setSort: (_v0, _v1, _v2) => _v0(_v0 => {
            _v0.commonStore.sortValues = {
              sortKey: _v0,
              sortBy: _v1,
              sortDirection: _v2
            };
          }),
          setFeaturedContentSort: (_v0, _v1, _v2) => _v0(_v0 => {
            _v0.commonStore.featuredContentSortValues = {
              sortKey: _v0,
              sortBy: _v1,
              sortDirection: _v2
            };
          })
        }
      },
      itemListStore: {
        ..._v40,
        actions: {
          resetItemListStore: () => _v0(_v0 => {
            Object.keys(_v40).forEach(_v0 => {
              _v0.itemListStore[_v0] = _v40[_v0];
            });
          }),
          setItemListData: _v0 => _v0(_v0 => {
            _v0.itemListStore.itemListData = _v0;
          }),
          pushNavigation: _v0 => _v0(_v0 => {
            _v0 === _v35 ? _v0.itemListStore.isLiveEventView = !0 : _v0.itemListStore.isLiveEventView = !1, _v0.itemListStore.navigationStack.push(_v0), _v0.itemListStore.isAtRoot = !1;
          }),
          popNavigation: _v0 => _v0(_v0 => {
            let _v1 = _v0.itemListStore.navigationStack.slice(0, _v0 + 1);
            _v0.itemListStore.navigationStack = _v1, _v0.itemListStore.isAtRoot = 1 === _v1.length, _v0.itemListStore.isLiveEventView = !1;
          }),
          resetNavigation: () => _v0(_v0 => {
            _v0.itemListStore.navigationStack = ["root"];
          }),
          setShowFolderView: _v0 => _v0(_v0 => {
            _v0.itemListStore.showFolderView = _v0;
          })
        }
      }
    }), {
      enabled: !0
    })));
  _v0.s(["useStore", 0, _v41], 0);
  let _v42 = () => {
    let {
        closeVideoModal: _v0,
        actions: {
          resetStore: _v1
        }
      } = _v41(_v0 => _v0.commonStore),
      _v2 = _v41(_v0 => _v0.itemListStore.actions.resetItemListStore),
      _v3 = () => {
        _v1(), _v2();
      };
    return {
      handleModalClose: () => {
        _v0(), _v3();
      },
      resetStores: _v3
    };
  };
  _v0.s(["useCloseModal", 0, _v42], 0);
  var _v43 = _v0.i(0);
  let _v44 = {
    outline: "2px solid",
    outlineColor: "vimeoBlue.400"
  };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(474);
  let _v47 = () => {
      let _v0 = `screen and (min-width: ${_v45.bokehTheme.breakpoints.md})`;
      return (0, _v46.useMediaQueryVisibility)(_v0);
    },
    _v48 = () => ({
      footer: {
        closeButtonProps: {
          variant: "secondary"
        },
        commonButtonProps: {
          w: "100%"
        },
        containerProps: {
          borderTop: `${(0, _v8.rem)(1)} solid`,
          borderColor: "stroke",
          flexDirection: "column-reverse"
        }
      }
    }),
    _v49 = () => ({
      footer: {
        closeButtonProps: {
          variant: "tertiary"
        }
      }
    }),
    _v50 = {
      borderRadius: (0, _v8.rem)(6),
      minWidth: (0, _v8.rem)(72)
    },
    _v51 = {
      bottom: (0, _v8.rem)(3),
      right: (0, _v8.rem)(3),
      fontSize: (0, _v8.rem)(10),
      padding: "xs",
      borderRadius: "xs"
    };
  _v0.s(["getDesktopStyles", 0, _v49, "getMobileStyles", 0, _v48, "thumbnailBadgeSx", 0, _v51, "thumbnailStyles", 0, _v50], 0);
  let _v52 = () => ({
    responsiveDesign: _v47() ? _v49() : _v48()
  });
  _v0.s(["useResponsiveDesign", 0, _v52], 0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = ({
    setVisibility: _v0,
    text: _v1,
    visibility: _v2
  }) => _v2 ? (0, _v1.jsx)(_v55.Box, {
    px: "lg",
    py: "sm",
    children: (0, _v1.jsx)(_v53.Alert, {
      status: "error",
      size: "sm",
      onClose: () => _v0(!1),
      children: (0, _v1.jsx)(_v54.AlertDescription, {
        children: (0, _v1.jsx)(_v56.Text, {
          variant: "heading-xs",
          children: _v1
        })
      })
    })
  }) : null;
  _v0.s(["ErrorAlert", 0, _v57], 0);
  let _v58 = () => {
      let _v0 = _v41(_v0 => _v0.commonStore.loadMoreErrorVisibility),
        _v1 = _v41(_v0 => _v0.commonStore.actions.setLoadMoreErrorVisibility);
      return (0, _v1.jsx)(_v57, {
        setVisibility: _v1,
        text: (0, _v20.translate)({
          singular: "There was an issue loading additional videos. To see more, try reloading the page.",
          dictionary: {
            es: {
              singular: "Hubo un problema al cargar más videos. Para ver más, intente volver a cargar la página."
            },
            "de-DE": {
              singular: "Beim Laden zusätzlicher Videos ist ein Problem aufgetreten. Um weitere Informationen zu erhalten, versuchen Sie, die Seite neu zu laden."
            },
            "fr-FR": {
              singular: "Un problème est survenu lors du chargement de vidéos supplémentaires. Pour en voir davantage, veuillez essayer d'actualiser la page."
            },
            "ja-JP": {
              singular: "追加の動画の読み込み中に問題が発生しました。詳細を表示するには、ページを再読み込みしてください。"
            },
            "ko-KR": {
              singular: "추가 동영상을 로드하는 데 문제가 발생했습니다. 더 보려면 페이지를 새로 고침하세요."
            },
            "pt-BR": {
              singular: "Ocorreu um problema ao carregar mais vídeos. Para ver mais, tente recarregar a página."
            },
            "zh-CN": {
              singular: "加载附加视频时出现问题。要查看更多内容，请尝试重新加载页面。"
            }
          }
        }),
        visibility: _v0
      });
    },
    _v59 = () => {
      let _v0 = _v41(_v0 => _v0.commonStore.modalConfig.components.PatchErrorAlert),
        _v1 = _v41(_v0 => _v0.commonStore.modalConfig.components.VideoLimitErrorAlert);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v58, {}), (0, _v1.jsx)(_v0, {}), _v1 && (0, _v1.jsx)(_v1, {})]
      });
    };
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v61.Flex, {
    gap: "xs",
    direction: "column",
    justify: "center",
    align: "center",
    h: "100%",
    ..._v1,
    children: _v0
  });
  _v0.s(["NoVideosContainer", 0, _v63], 0);
  let _v64 = ({
    showCTA: _v0
  }) => {
    let {
      handleModalClose: _v1
    } = _v42();
    return (0, _v1.jsxs)(_v63, {
      children: [(0, _v1.jsx)(_v62.CircleExclamation, {
        boxSize: "xs"
      }), (0, _v1.jsx)(_v56.Text, {
        variant: "heading-xs",
        children: (0, _v20.translate)({
          singular: "Couldn’t load videos",
          dictionary: {
            es: {
              singular: "No se pudieron cargar los videos."
            },
            "de-DE": {
              singular: "Die Videos konnten nicht geladen werden"
            },
            "fr-FR": {
              singular: "Impossible de charger les vidéos"
            },
            "ja-JP": {
              singular: "動画を読み込めませんでした"
            },
            "ko-KR": {
              singular: "동영상을 로드할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível carregar os vídeos"
            },
            "zh-CN": {
              singular: "无法加载视频"
            }
          }
        })
      }), (0, _v1.jsx)(_v56.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: (0, _v20.translate)({
          singular: "Try reloading the page",
          dictionary: {
            es: {
              singular: "Intente volviendo a cargar la página"
            },
            "de-DE": {
              singular: "Versuchen Sie, die Seite neu zu laden."
            },
            "fr-FR": {
              singular: "Essayez de recharger la page"
            },
            "ja-JP": {
              singular: "ページを再度読み込んでください"
            },
            "ko-KR": {
              singular: "페이지를 다시 로드해 보세요."
            },
            "pt-BR": {
              singular: "Tente recarregar a página"
            },
            "zh-CN": {
              singular: "请尝试重新加载页面"
            }
          }
        })
      }), _v0 && (0, _v1.jsxs)(_v61.Flex, {
        direction: "column",
        gap: "xs",
        children: [(0, _v1.jsx)(_v60.Button, {
          size: "sm",
          variant: "secondary",
          onClick: () => window.location.reload(),
          children: (0, _v20.translate)({
            singular: "Reload",
            dictionary: {
              es: {
                singular: "Volver a cargar"
              },
              "de-DE": {
                singular: "Erneut laden"
              },
              "fr-FR": {
                singular: "Charger à nouveau"
              },
              "ja-JP": {
                singular: "再ロード"
              },
              "ko-KR": {
                singular: "새로 고침"
              },
              "pt-BR": {
                singular: "Recarregar"
              }
            }
          })
        }), (0, _v1.jsx)(_v60.Button, {
          size: "sm",
          variant: "tertiary",
          onClick: _v1,
          children: (0, _v20.translate)({
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
          })
        })]
      })]
    });
  };
  _v0.s(["LoadErrorState", 0, _v64], 0);
  let _v65 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v61.Flex, {
      direction: "column",
      h: (0, _v8.rem)(416),
      gap: "sm",
      ..._v1,
      children: _v0
    }),
    _v66 = () => (0, _v1.jsx)(_v3.ModalBody, {
      children: (0, _v1.jsx)(_v65, {
        h: (0, _v8.rem)(644),
        children: (0, _v1.jsx)(_v64, {
          showCTA: !0
        })
      })
    });
  _v0.s(["Modal", 0, ({
    isVideoListModalOpen: _v0,
    onSuccess: _v1,
    onCancel: _v2
  }) => {
    let {
        responsiveDesign: {
          footer: {
            containerProps: _v3
          }
        }
      } = _v52(),
      {
        handleModalClose: _v4
      } = _v42(),
      _v5 = _v41(_v0 => _v0.commonStore.isSubmitting),
      {
        modalConfig: {
          components: {
            Footer: _v6,
            Header: _v7,
            VideoList: _v8
          }
        }
      } = _v41(_v0 => _v0.commonStore),
      {
        handleModalContentKeyDown: _v9,
        ..._v10
      } = (() => {
        let _v0 = (0, _v43.useRef)(null),
          [_v1, _v2] = (0, _v43.useState)(!1),
          _v3 = (0, _v43.useCallback)(_v0 => {
            _v0.ctrlKey && "END" === _v0.key.toUpperCase() && _v0.current && _v0.current !== document.activeElement && (_v0.preventDefault(), _v0.current.focus(), _v2(!0));
          }, []);
        return {
          getFooterFocusStyles: (0, _v43.useCallback)(() => _v1 ? _v44 : {}, [_v1]),
          handleModalContentKeyDown: _v3,
          cancelButtonRef: _v0
        };
      })();
    return (0, _v1.jsxs)(_v2.Modal, {
      isOpen: _v0,
      onClose: _v5 ? () => void 0 : _v4,
      closeOnEsc: !_v5,
      closeOnOverlayClick: !1,
      children: [(0, _v1.jsx)(_v7.ModalOverlay, {}), (0, _v1.jsx)(_v4.ModalContent, {
        minH: _v22,
        maxW: _v21,
        onKeyDown: _v9,
        children: (0, _v1.jsxs)(_v9.ErrorBoundary, {
          errorPage: _v66,
          children: [(0, _v1.jsx)(_v6.ModalHeader, {
            borderBottom: `${(0, _v8.rem)(1)} solid`,
            borderColor: "stroke",
            pb: "md",
            gap: "md",
            children: (0, _v1.jsx)(_v7, {})
          }), (0, _v1.jsx)(_v59, {}), (0, _v1.jsx)(_v3.ModalBody, {
            children: (0, _v1.jsx)(_v65, {
              children: (0, _v1.jsx)(_v8, {})
            })
          }), (0, _v1.jsx)(_v5.ModalFooter, {
            ..._v3,
            children: (0, _v1.jsx)(_v6, {
              onSuccess: _v1,
              onCancel: _v2,
              ..._v10
            })
          })]
        })
      })]
    });
  }], 0);
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = {
      video_card_locked_video_button: "locked_video",
      video_list_locked_video_button: "locked_video"
    },
    _v71 = (0, _v43.createContext)(null),
    _v72 = () => {
      let _v0 = (0, _v43.useContext)(_v71);
      if (!_v0) throw Error("useOpenLockedVideoStoragePaywall must be used within StorageLimitPaywallProvider");
      return _v0;
    };
  _v0.s(["StorageLimitPaywallProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v69.useViewer)(),
      {
        trackColdStorageUxClicked: _v2
      } = (0, _v67.useColdStorageTracking)(),
      [_v3, _v4] = (0, _v43.useState)(!1),
      [_v5, _v6] = (0, _v43.useState)("list"),
      _v7 = "list" === _v5 ? "video_list_locked_video_button" : "video_card_locked_video_button",
      _v8 = "list" === _v5 ? "video_list" : "video_card",
      _v9 = (0, _v43.useCallback)(_v0 => {
        let _v1 = _v70["list" === _v0 ? "video_list_locked_video_button" : "video_card_locked_video_button"];
        _v1 && _v2({
          element: _v1
        }), _v6(_v0), _v4(!0);
      }, [_v2]),
      _v10 = (0, _v43.useCallback)(() => {
        _v4(!1);
      }, []),
      _v11 = (0, _v43.useMemo)(() => _v3 && _v1?.apiUrl ? (0, _v1.jsx)(_v68.default, {
        apiUrl: _v1.apiUrl,
        userConfig: {
          jwt: _v1.jwt,
          userId: _v1.user?.id
        },
        templateType: "default",
        onClose: _v10,
        tracking: {
          params: {
            feature: "storage",
            location: _v8,
            page: "video_list_modal",
            upsell_name: "locked_video"
          },
          paywallTracking: {
            paywallTrigger: _v7,
            paywallLocation: _v8,
            paywallType: "popup",
            paywallFeature: "storage_limit"
          }
        }
      }) : null, [_v10, _v3, _v8, _v7, _v1]);
    return (0, _v1.jsxs)(_v71.Provider, {
      value: _v9,
      children: [_v0, _v11]
    });
  }, "useOpenLockedVideoStoragePaywall", 0, _v72], 0), _v0.s(["useInitializeModalData", 0, ({
    closeVideoModal: _v0,
    destinationFolder: _v1,
    resourceId: _v2,
    resourceOwnerId: _v3,
    showVideoFilter: _v4,
    selectedVideo: _v5,
    additionalProps: _v6
  }) => {
    let _v7 = _v41(_v0 => _v0.commonStore.actions.setCloseVideoModal),
      _v8 = _v41(_v0 => _v0.commonStore.actions.setDestinationFolder),
      _v9 = _v41(_v0 => _v0.commonStore.actions.setResourceId),
      _v10 = _v41(_v0 => _v0.commonStore.actions.setResourceOwnerId),
      _v11 = _v41(_v0 => _v0.commonStore.actions.setShowVideoFilter),
      _v12 = _v41(_v0 => _v0.commonStore.actions.setSelectedItemURIs),
      _v13 = _v41(_v0 => _v0.commonStore.actions.setAdditionalProps),
      _v14 = _v41(_v0 => _v0.commonStore.actions.setIsSubmitting);
    (0, _v43.useEffect)(() => {
      _v14(!1);
    }, [_v14]), (0, _v43.useEffect)(() => {
      _v4 && _v11(_v4);
    }, [_v4, _v11]), (0, _v43.useEffect)(() => {
      _v7(_v0);
    }, [_v0, _v7]), (0, _v43.useEffect)(() => {
      _v8(_v1);
    }, [_v1, _v8]), (0, _v43.useEffect)(() => {
      _v9(_v2);
    }, [_v2, _v9]), (0, _v43.useEffect)(() => {
      _v3 && _v10(_v3);
    }, [_v3, _v10]), (0, _v43.useEffect)(() => {
      _v12(_v5 ? new Set([_v5.uri]) : new Set());
    }, [_v5, _v12]), (0, _v43.useEffect)(() => {
      _v6 && _v13(_v6);
    }, [_v6, _v13]);
  }], 0);
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0);
  let _v75 = ({
      isLoading: _v0,
      isOpen: _v1,
      onClose: _v2,
      onConfirm: _v3
    }) => (0, _v1.jsxs)(_v2.Modal, {
      isOpen: _v1,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v7.ModalOverlay, {}), (0, _v1.jsxs)(_v4.ModalContent, {
        children: [(0, _v1.jsx)(_v6.ModalHeader, {
          children: (0, _v1.jsx)(_v73.Header, {
            size: "sm",
            children: (0, _v20.translate)({
              singular: "Are you sure?",
              dictionary: {
                es: {
                  singular: "¿Estás seguro?"
                },
                "de-DE": {
                  singular: "Sind Sie sicher?"
                },
                "fr-FR": {
                  singular: "Êtes-vous sûr ?"
                },
                "ja-JP": {
                  singular: "よろしいですか？"
                },
                "ko-KR": {
                  singular: "정말로 하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Tem certeza?"
                },
                "zh-CN": {
                  singular: "您确定吗？"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v3.ModalBody, {
          children: (0, _v1.jsx)(_v74.Paragraph, {
            children: (0, _v20.translate)({
              singular: "Moving videos to a shared folder will make them available to your team. You won't be able to make them private again.",
              dictionary: {
                es: {
                  singular: "Mover videos a una carpeta compartida los pondrá a disposición de tu equipo. No podrás volver a hacerlos privados."
                },
                "de-DE": {
                  singular: "Wenn Sie Videos in einen geteilten Ordner verschieben, sind sie für Ihr Team verfügbar. Sie können sie anschließend nicht wieder privat stellen."
                },
                "fr-FR": {
                  singular: "Le déplacement de vidéos vers un dossier partagé les rendra accessibles à votre équipe. Vous ne pourrez plus les rendre privées."
                },
                "ja-JP": {
                  singular: "動画を共有フォルダに移動すると、チームが利用できるようになります。再び非公開に戻すことはできません。"
                },
                "ko-KR": {
                  singular: "동영상을 공유 폴더로 이동하면 팀에서 해당 동영상을 볼 수 있게 됩니다. 다시 비공개로 설정할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Mover vídeos para uma pasta compartilhada os tornará disponíveis para sua equipe. Você não poderá torná-los privados novamente."
                },
                "zh-CN": {
                  singular: "将视频移到共享文件夹后，团队成员将可以访问它们。您将无法再将它们设为私有。"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v5.ModalFooter, {
          children: (0, _v1.jsxs)(_v61.Flex, {
            gap: "sm",
            justify: "flex-end",
            children: [(0, _v1.jsx)(_v60.Button, {
              variant: "secondary",
              onClick: _v2,
              isDisabled: _v0,
              children: (0, _v20.translate)({
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
              })
            }), (0, _v1.jsx)(_v60.Button, {
              variant: "primary",
              isLoading: _v0,
              onClick: _v3,
              children: (0, _v20.translate)({
                singular: "Move",
                dictionary: {
                  es: {
                    singular: "Mover"
                  },
                  "de-DE": {
                    singular: "Verschieben"
                  },
                  "fr-FR": {
                    singular: "Déplacer"
                  },
                  "ja-JP": {
                    singular: "移動"
                  },
                  "ko-KR": {
                    singular: "이동"
                  },
                  "pt-BR": {
                    singular: "Mover"
                  },
                  "zh-CN": {
                    singular: "移动"
                  }
                }
              })
            })]
          })
        })]
      })]
    }),
    _v76 = (0, _v43.forwardRef)((_v0, _v1) => {
      let {
          responsiveDesign: {
            footer: {
              commonButtonProps: _v2
            }
          }
        } = _v52(),
        _v3 = {
          ..._v2,
          ..._v0
        };
      return (0, _v1.jsx)(_v60.Button, {
        ..._v3,
        ref: _v1,
        children: _v0.children
      });
    });
  _v0.s(["FooterButton", 0, _v76], 0);
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  _v0.s(["Footer", 0, ({
    cancelButtonRef: _v0,
    getFooterFocusStyles: _v1,
    onSuccess: _v2
  }) => {
    let {
        handleModalClose: _v3
      } = _v42(),
      {
        responsiveDesign: {
          footer: {
            closeButtonProps: _v4
          }
        }
      } = _v52(),
      {
        addToFolder: _v5,
        confirmMove: _v6,
        isButtonDisabled: _v7,
        isLoading: _v8,
        isConfirmationOpen: _v9,
        setIsConfirmationOpen: _v10
      } = (({
        onSuccess: _v0
      }) => {
        let {
            handleModalClose: _v1
          } = _v42(),
          _v2 = (0, _v77.useToast)(),
          {
            actions: {
              setIsSubmitting: _v3,
              setPatchErrorVisibility: _v4
            },
            destinationFolder: _v5,
            patchErrorVisibility: _v6,
            privateItemURIs: _v7,
            resourceOwnerId: _v8,
            selectedItemURIs: _v9
          } = _v41(_v0 => _v0.commonStore),
          [_v10, {
            called: _v11,
            callCount: _v12,
            error: _v13,
            loading: _v14
          }] = (0, _v78.usePostUserProjectItems)(),
          [_v15, _v16] = (0, _v43.useState)(!1),
          _v17 = (0, _v43.useRef)(null),
          _v18 = (0, _v43.useRef)(0),
          _v19 = (0, _v43.useMemo)(() => Array.from(_v9), [_v9]),
          _v20 = (0, _v43.useMemo)(() => !!_v5 && !_v5.isPrivateToUser && _v19.some(_v0 => _v7.has(_v0)), [_v5, _v7, _v19]),
          _v21 = (0, _v43.useEffectEvent)(_v0 => {
            _v0?.(void 0, _v0), _v2({
              isClosable: !1,
              title: (0, _v20.translate)({
                singular: "{count} video moved",
                plural: "{count} videos moved",
                count: _v0,
                replacements: {
                  count: _v0
                },
                dictionary: {
                  es: {
                    singular: "{count} video movido",
                    plural: "{count} videos movidos"
                  },
                  "de-DE": {
                    singular: "{count} Video verschoben",
                    plural: "{count} Videos verschoben"
                  },
                  "fr-FR": {
                    singular: "{count} vidéo déplacée",
                    plural: "{count} vidéos déplacées"
                  },
                  "ja-JP": {
                    singular: "{count} 件の動画を移動しました",
                    plural: "{count} 件の動画を移動しました"
                  },
                  "ko-KR": {
                    singular: "{count}개의 동영상을 이동했습니다",
                    plural: "{count}개의 동영상을 이동했습니다"
                  },
                  "pt-BR": {
                    singular: "{count} vídeo movido",
                    plural: "{count} vídeos movidos"
                  },
                  "zh-CN": {
                    singular: "{count} 个视频已移动",
                    plural: "{count} 个视频已移动"
                  }
                }
              })
            }), _v1();
          }),
          _v22 = () => {
            _v5 && _v8 && _v19.length && (!1 === _v6 && _v4(), _v17.current = null, _v18.current = _v19.length, _v3(!0), _v10({
              where: {
                userId: _v8,
                projectId: _v5.id
              },
              variables: {
                items: _v19.map(_v0 => ({
                  uri: _v0
                }))
              }
            }));
          };
        return (0, _v43.useEffect)(() => {
          if (_v11 && !_v14 && _v17.current !== _v12) {
            if (_v17.current = _v12, null !== _v13) {
              _v3(!1), _v4(!0);
              return;
            }
            _v21(_v18.current);
          }
        }, [_v11, _v12, _v13, _v14, _v3, _v4]), {
          addToFolder: () => {
            _v20 ? _v16(!0) : _v22();
          },
          confirmMove: () => {
            _v16(!1), _v22();
          },
          isButtonDisabled: () => !_v19.length || _v19.length > 100,
          isLoading: _v14,
          isConfirmationOpen: _v15,
          setIsConfirmationOpen: _v16
        };
      })({
        onSuccess: _v2
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v76, {
        ref: _v0,
        _focus: _v1(),
        onClick: _v3,
        isDisabled: _v8,
        ..._v4,
        children: (0, _v20.translate)({
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
        })
      }), (0, _v1.jsx)(_v76, {
        isLoading: _v8,
        onClick: _v5,
        variant: "primary",
        isDisabled: _v7(),
        children: (0, _v20.translate)({
          singular: "Add to folder",
          dictionary: {
            es: {
              singular: "Añadir a la carpeta"
            },
            "de-DE": {
              singular: "Zum Ordner hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter au dossier"
            },
            "ja-JP": {
              singular: "フォルダに追加"
            },
            "ko-KR": {
              singular: "폴더에 추가"
            },
            "pt-BR": {
              singular: "Adicionar à pasta"
            },
            "zh-CN": {
              singular: "添加到文件夹"
            }
          }
        })
      }), (0, _v1.jsx)(_v75, {
        isLoading: _v8,
        isOpen: _v9,
        onClose: () => _v10(!1),
        onConfirm: _v6
      })]
    });
  }], 0);
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = _v0 => (0, _v1.jsx)(_v88.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.444 3.685a10 10 0 1 1 11.112 16.63A10 10 0 0 1 6.444 3.685ZM8 8h8a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2Zm3 7h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm3.5-3.5h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Z",
        fill: "currentColor"
      })
    }),
    _v90 = (0, _v43.memo)(({
      fieldKey: _v0,
      label: _v1,
      value: _v2,
      isChecked: _v3,
      onToggle: _v4
    }) => (0, _v1.jsx)(_v55.Box, {
      _hover: {
        backgroundColor: "fill-component-hover",
        borderRadius: "menuList"
      },
      px: "xs",
      children: (0, _v1.jsx)(_v80.Checkbox, {
        width: "100%",
        px: "sm",
        borderRadius: "sm",
        size: "md",
        py: "sm",
        isChecked: _v3,
        onChange: () => _v4(_v0),
        value: _v2,
        children: (0, _v1.jsx)(_v81.HStack, {
          spacing: "sm",
          children: (0, _v1.jsx)(_v56.Text, {
            variant: "body-md",
            children: _v1
          })
        })
      })
    })),
    _v91 = () => {
      let _v0,
        _v1,
        _v2,
        {
          filterOptions: _v3,
          selectedFilters: _v4,
          handleFilterChange: _v5
        } = (_v0 = _v41(_v0 => _v0.commonStore.searchFilterFields), _v1 = _v41(_v0 => _v0.commonStore.actions.setSearchFilterFields), _v2 = (0, _v43.useCallback)(_v0 => {
          let _v1 = new Set(new Set(_v0).has(_v0) ? _v0.filter(_v0 => _v0 !== _v0) : [..._v0, _v0]);
          _v1(_v27.filter(_v0 => _v1.has(_v0)));
        }, [_v0, _v1]), {
          filterOptions: (0, _v43.useMemo)(() => _v27.map(_v0 => [_v0, _v28[_v0]]), []),
          selectedFilters: _v0,
          handleFilterChange: _v2
        }),
        _v6 = (0, _v43.useCallback)(_v0 => _v5(_v0), [_v5]),
        _v7 = _v4.length ? _v89 : _v87.Filter;
      return (0, _v1.jsxs)(_v83.Menu, {
        placement: "bottom-end",
        closeOnSelect: !1,
        children: [(0, _v1.jsx)(_v84.MenuButton, {
          as: _v82.IconButton,
          icon: (0, _v1.jsx)(_v7, {
            boxSize: "2xs"
          }),
          "aria-label": (0, _v20.translate)({
            singular: "Filter videos",
            dictionary: {
              es: {
                singular: "Filtrar videos"
              },
              "de-DE": {
                singular: "Videos filtern"
              },
              "fr-FR": {
                singular: "Filtrer les vidéos"
              },
              "ja-JP": {
                singular: "動画をフィルターする"
              },
              "ko-KR": {
                singular: "동영상 필터"
              },
              "pt-BR": {
                singular: "Filtrar vídeos"
              },
              "zh-CN": {
                singular: "筛选视频"
              }
            }
          }),
          variant: "tertiary",
          size: "sm"
        }), (0, _v1.jsx)(_v86.MenuList, {
          children: (0, _v1.jsx)(_v85.MenuGroup, {
            title: (0, _v20.translate)({
              singular: "Filter by",
              dictionary: {
                es: {
                  singular: "Filtrar por"
                },
                "de-DE": {
                  singular: "Filtern nach"
                },
                "fr-FR": {
                  singular: "Filtrer par"
                },
                "ja-JP": {
                  singular: "フィルター条件:"
                },
                "ko-KR": {
                  singular: "필터 기준"
                },
                "pt-BR": {
                  singular: "Filtrar por"
                },
                "zh-CN": {
                  singular: "按以下条件筛选"
                }
              }
            }),
            as: _v56.Text,
            variant: "heading-xs",
            borderTopRadius: "menuList",
            children: _v3.map(([_v0, _v1]) => (0, _v1.jsx)(_v90, {
              fieldKey: _v0,
              label: _v1.label,
              value: _v1.value,
              isChecked: _v4.includes(_v0),
              onToggle: _v6
            }, _v0))
          })
        })]
      });
    },
    _v92 = () => {
      let _v0 = _v41(_v0 => _v0.itemListStore.itemListData),
        _v1 = _v41(_v0 => _v0.itemListStore.isAtRoot),
        _v2 = _v41(_v0 => _v0.commonStore.searchQuery);
      return !_v0?.length || _v1 && !_v2;
    },
    _v93 = () => {
      let _v0 = _v41(_v0 => _v0.commonStore.selectedItemURIs),
        _v1 = _v41(_v0 => _v0.commonStore.actions.setSelectedItemURIs),
        _v2 = _v41(_v0 => _v0.commonStore.actions.setVideoLimitErrorVisibility),
        _v3 = _v41(_v0 => _v0.commonStore.modalConfig.additionalConfig.singleSelect),
        _v4 = (0, _v43.useCallback)(() => _v1(new Set()), [_v1]),
        _v5 = (0, _v43.useCallback)(_v0 => {
          if (_v3) return;
          let _v1 = new Set(_v0);
          _v1.delete(_v0), _v1(_v1);
        }, [_v0, _v1, _v3]),
        _v6 = (0, _v43.useCallback)(_v0 => {
          if (_v3) {
            let _v0 = [..._v0][0];
            _v1(_v0 ? new Set([_v0]) : new Set());
          } else _v1(new Set([..._v0, ..._v0]));
        }, [_v0, _v1, _v3]),
        _v7 = (0, _v43.useCallback)(_v0 => {
          _v3 ? _v1(new Set([_v0])) : _v1(new Set([..._v0, _v0]));
        }, [_v0, _v1, _v3]);
      return (0, _v43.useEffect)(() => {
        _v3 || _v2(_v0.size > 100);
      }, [_v0, _v2, _v3]), {
        deselectAllItems: _v4,
        deselectItem: _v5,
        selectItem: _v7,
        selectItems: _v6
      };
    },
    _v94 = () => {
      let _v0 = _v41(_v0 => _v0.commonStore.selectedItemURIs),
        {
          allItemsAreSelected: _v1,
          anyItemsAreSelected: _v2,
          isBulkSelectDisabled: _v3,
          onBulkSelectChange: _v4
        } = (() => {
          let {
              selectableURIList: _v0,
              selectedItemURIs: _v1,
              videoItems: _v2
            } = _v41(_v0 => _v0.commonStore),
            _v3 = _v41(_v0 => _v0.itemListStore.showFolderView),
            _v4 = _v92(),
            {
              deselectAllItems: _v5,
              selectItems: _v6
            } = _v93(),
            _v7 = (0, _v43.useCallback)(() => _v6(_v0), [_v0, _v6]),
            _v8 = !!_v1.size,
            _v9 = _v0.size > 0 && [..._v0].every(_v0 => _v1.has(_v0)),
            _v10 = (0, _v43.useCallback)(() => {
              _v9 ? _v5() : _v7();
            }, [_v9, _v5, _v7]);
          return {
            allItemsAreSelected: _v9,
            anyItemsAreSelected: _v8,
            isBulkSelectDisabled: () => _v3 ? _v4 && !_v1.size : !_v2.length && !_v1.size,
            onBulkSelectChange: _v10
          };
        })();
      return (0, _v1.jsx)(_v80.Checkbox, {
        isDisabled: _v3(),
        size: "md",
        w: "fit-content",
        isChecked: _v2,
        id: "bulk-select-checkbox",
        "aria-label": (0, _v20.translate)({
          singular: "Checkbox",
          dictionary: {
            es: {
              singular: "Casilla de verificación"
            },
            "fr-FR": {
              singular: "Case à cocher"
            },
            "ja-JP": {
              singular: "チェックボックス"
            },
            "ko-KR": {
              singular: "체크박스"
            },
            "pt-BR": {
              singular: "Caixa de seleção"
            },
            "zh-CN": {
              singular: "复选框"
            }
          }
        }),
        isIndeterminate: _v2 && !_v1,
        onChange: _v4,
        children: (0, _v20.translate)({
          singular: "{COUNT} selected",
          replacements: {
            COUNT: _v0.size
          },
          dictionary: {
            es: {
              singular: "{COUNT} seleccionado(s)"
            },
            "de-DE": {
              singular: "{COUNT} ausgewählt"
            },
            "fr-FR": {
              singular: "{COUNT} sélectionné(s)"
            },
            "ja-JP": {
              singular: "{COUNT} 選択済み"
            },
            "ko-KR": {
              singular: "{COUNT}개 선택됨"
            },
            "pt-BR": {
              singular: "{COUNT} selecionado(s)"
            },
            "zh-CN": {
              singular: "{COUNT} 个已选择"
            }
          }
        })
      });
    };
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = ["isPrivateToUser", "metadata.connections.ancestorPath.canUpload", "metadata.connections.ancestorPath.name", "metadata.connections.ancestorPath.uri", "metadata.connections.folders.total", "metadata.connections.parentFolder.uri", "metadata.interactions.addSubfolder.canAddSubfolders", "metadata.interactions.edit.uri", "name", "privacy.view", "uri"],
    _v105 = ["type", "video.uri", "video.name", "video.manageLink", "video.createdTime", "video.modifiedTime", "video.lastUserActionEventDate", "video.pictures", "video.link", "video.duration", "video.disabledProperties", "video.isColdStorage", "video.privacy.view", "video.privacy.originalView", "video.user.name", "video.user.pictures", "video.configUrl", "folder.uri", "folder.name", "folder.isPrivateToUser", "folder.link", "folder.createdTime", "folder.modifiedTime", "folder.lastUserActionEventDate", "folder.useParentSlackSettings", "folder.metadata.connections.items.total", "folder.settings.color", "liveEvent.status", "liveEvent.metadata.connections.liveVideo.status", "liveEvent.eventType", "liveEvent.nextOccurrenceTime", "liveEvent.title", "liveEvent.uri", "liveEvent.createdTime", "liveEvent.pictures", "liveEvent.streamPrivacy", "liveEvent.metadata.connections.preLiveVideo.uri", "liveEvent.metadata.connections.liveVideo.uri", "liveEvent.hasRegistration"];
  _v0.s(["FOLDER_FIELDS", 0, _v104, "ITEMS_PER_PAGE", 0, 25, "LIVE_EVENT_FIELDS", 0, ["status", "metadata.connections.liveVideo.status", "eventType", "nextOccurrenceTime", "title", "uri", "createdTime", "pictures", "streamPrivacy", "metadata.connections.preLiveVideo.uri", "metadata.connections.liveVideo.uri", "hasRegistration"], "ROOT_ITEMS_FIELDS", 0, _v105], 0);
  let _v106 = () => {
    let _v0 = _v41(_v0 => _v0.commonStore.resourceOwnerId),
      _v1 = _v41(_v0 => _v0.commonStore.destinationFolder),
      {
        capabilities: _v2
      } = (0, _v102.useCapability)(["hasVideoLibraryLiveEvents"], _v0),
      {
        contentSpaceEnabled: _v3,
        notTeamGatedContentSpaceEnabled: _v4
      } = (0, _v101.useContentSpaceEnabled)(_v0),
      {
        data: _v5,
        error: _v6
      } = (0, _v103.useGetUserFoldersPrivateToMe)(() => _v0 && (_v4 || _v1?.isPersonalFolder === !0) ? {
        where: {
          ownerId: _v0
        },
        select: _v104
      } : null, {
        shouldRetryOnError: !1
      });
    return {
      data: _v5,
      error: _v6,
      capabilities: _v2,
      contentSpaceEnabled: _v3
    };
  };
  _v0.s(["useFetchPrivateFolders", 0, _v106], 0);
  let _v107 = ({
    destinationFolder: _v0
  }) => _v0?.isPersonalFolder !== !0;
  _v0.s(["canBrowseTeamLibrary", 0, _v107], 0);
  let _v108 = () => {
    let {
      rootCrumb: _v0,
      condensedCrumbs: _v1,
      currentCrumb: _v2,
      popNavigation: _v3,
      crumbs: _v4,
      showBreadcrumbs: _v5
    } = (() => {
      let _v0 = _v41(_v0 => _v0.itemListStore.navigationStack),
        _v1 = _v41(_v0 => _v0.itemListStore.actions.popNavigation),
        _v2 = _v41(_v0 => _v0.commonStore.destinationFolder),
        _v3 = _v41(_v0 => _v0.commonStore.resourceOwnerId),
        {
          data: _v4,
          contentSpaceEnabled: _v5
        } = _v106(),
        {
          listingParams: _v6,
          loading: _v7
        } = (0, _v100.usePrivateToMeFolderListingParams)(_v3),
        _v8 = _v5 ? _v37 : _v39,
        _v9 = !_v2 || !_v7 && _v6.excludePrivateToMeFolder && _v107({
          destinationFolder: _v2
        }) && !!_v4,
        _v10 = _v0.map((_v0, _v1) => _v0 === _v33 ? {
          label: _v36,
          index: _v1
        } : _v0 === _v34 ? {
          label: _v8,
          index: _v1
        } : _v0 === _v35 ? {
          label: (0, _v20.translate)({
            singular: "Live events",
            dictionary: {
              es: {
                singular: "Eventos en vivo"
              },
              "de-DE": {
                singular: "Live-Events"
              },
              "fr-FR": {
                singular: "Évènements en direct"
              },
              "ja-JP": {
                singular: "ライブイベント"
              },
              "ko-KR": {
                singular: "라이브 이벤트"
              },
              "pt-BR": {
                singular: "Eventos ao vivo"
              },
              "zh-CN": {
                singular: "直播活动"
              }
            }
          }),
          index: _v1
        } : {
          label: _v0.name,
          index: _v1
        }),
        _v11 = _v9 ? _v10 : _v10.slice(1),
        _v12 = _v11[0],
        _v13 = _v11.slice(1);
      return {
        rootCrumb: _v12,
        condensedCrumbs: _v13.slice(0, _v13.length - 1),
        currentCrumb: _v13.slice(-1)[0],
        popNavigation: _v1,
        crumbs: _v13,
        showBreadcrumbs: _v9 || _v13.length > 0
      };
    })();
    return _v5 ? (0, _v1.jsxs)(_v95.Breadcrumb, {
      separator: (0, _v1.jsx)(_v98.ChevronRightSmall, {}),
      children: [_v0 && (0, _v1.jsx)(_v95.BreadcrumbItem, {
        h: (0, _v8.rem)(28),
        children: (0, _v1.jsx)(_v96.BreadcrumbLink, {
          color: _v4.length ? "text-secondary" : "text-primary",
          cursor: "pointer",
          onClick: () => _v3(_v0?.index),
          mt: (0, _v8.rem)(3),
          tabIndex: 0,
          onKeyDown: _v0 => {
            _v0?.key === "Enter" && _v3(_v0?.index);
          },
          children: _v0.label
        })
      }), !!_v1.length && (0, _v1.jsx)(_v95.BreadcrumbItem, {
        children: (0, _v1.jsxs)(_v83.Menu, {
          children: [(0, _v1.jsx)(_v84.MenuButton, {
            as: _v82.IconButton,
            "aria-label": "more folders",
            icon: (0, _v1.jsx)(_v99.EllipsisH, {}),
            size: "xs",
            variant: "tertiary",
            mt: (0, _v8.rem)(3)
          }), (0, _v1.jsx)(_v86.MenuList, {
            children: _v1.map(_v0 => (0, _v1.jsx)(_v97.MenuItem, {
              onClick: () => _v3(_v0?.index),
              children: _v0?.label || ""
            }, `${_v0?.label}-${_v0?.index}`))
          })]
        })
      }), _v2 && (0, _v1.jsx)(_v95.BreadcrumbItem, {
        children: (0, _v1.jsx)(_v96.BreadcrumbLink, {
          color: "text-primary",
          cursor: "default",
          mt: (0, _v8.rem)(3),
          children: _v2?.label
        })
      })]
    }) : null;
  };
  _v0.s(["Breadcrumbs", 0, _v108], 0);
  var _v109 = _v0.i(0),
    _v110 = _v0.i(0);
  let _v111 = () => {
    let {
      isDisabled: _v0,
      onLayoutToggleClick: _v1,
      targetLayoutConfig: {
        Icon: _v2,
        tooltipText: _v3
      }
    } = (() => {
      let _v0 = _v41(_v0 => _v0.commonStore.videoItems),
        _v1 = _v41(_v0 => _v0.commonStore.layout),
        {
          setLayout: _v2
        } = (() => {
          let {
              layoutLSKey: _v0,
              defaultLayout: _v1
            } = _v41(_v0 => _v0.commonStore.modalConfig.additionalConfig),
            [_v2, _v3] = (0, _v110.default)(_v0, _v1 ?? _v14.LIST),
            _v4 = _v41(_v0 => _v0.commonStore.actions.setLayout);
          return (0, _v43.useEffect)(() => _v4(_v2), []), {
            setLayout: (0, _v43.useCallback)(_v0 => {
              _v4(_v0), _v3(_v0);
            }, [_v4, _v3])
          };
        })(),
        _v3 = _v1 === _v14.LIST ? _v14.GRID : _v14.LIST,
        _v4 = _v41(_v0 => _v0.itemListStore.showFolderView),
        _v5 = _v92();
      return {
        isDisabled: _v4 ? _v5 : !_v0?.length,
        onLayoutToggleClick: () => _v2(_v3),
        targetLayoutConfig: _v26[_v3]
      };
    })();
    return (0, _v1.jsx)(_v109.Tooltip, {
      label: _v3,
      placement: "top-end",
      isDisabled: _v0,
      children: (0, _v1.jsx)(_v82.IconButton, {
        isDisabled: _v0,
        "aria-label": _v3,
        icon: (0, _v1.jsx)(_v2, {}),
        id: "layout-toggle-button",
        size: "sm",
        onClick: _v1,
        variant: "tertiary"
      })
    });
  };
  _v0.s(["LayoutToggle", 0, _v111], 0);
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0);
  let _v114 = ({
    sortOptions: _v0,
    selectedOptionText: _v1,
    isDisabled: _v2,
    onSortChange: _v3,
    currentSortKey: _v4,
    placement: _v5 = "bottom-end"
  }) => (0, _v1.jsxs)(_v83.Menu, {
    placement: _v5,
    children: [(0, _v1.jsx)(_v84.MenuButton, {
      as: _v60.Button,
      variant: "tertiary",
      rightIcon: (0, _v1.jsx)(_v113.SortSmall, {
        boxSize: "2xs"
      }),
      isDisabled: _v2,
      size: "sm",
      children: _v1
    }), (0, _v1.jsx)(_v86.MenuList, {
      children: (0, _v1.jsx)(_v85.MenuGroup, {
        title: (0, _v20.translate)({
          singular: "Sort by",
          dictionary: {
            es: {
              singular: "Ordenar por"
            },
            "de-DE": {
              singular: "Sortieren nach"
            },
            "fr-FR": {
              singular: "Trier par"
            },
            "ja-JP": {
              singular: "次で並べ替え:"
            },
            "ko-KR": {
              singular: "정렬 기준"
            },
            "pt-BR": {
              singular: "Classificar por"
            },
            "zh-CN": {
              singular: "排序方式"
            }
          }
        }),
        as: _v56.Text,
        variant: "heading-xs",
        borderTopRadius: "menuList",
        children: Object.entries(_v0).map(([_v0, _v1]) => (0, _v1.jsx)(_v112.MenuItemOption, {
          onClick: () => _v3(_v0, _v1.sortBy, _v1.sortDirection),
          isChecked: _v4 === _v0,
          children: _v1.text
        }, _v0))
      })
    })]
  });
  _v0.s(["SortSelect", 0, _v114], 0);
  let _v115 = () => {
    let _v0,
      _v1 = _v41(_v0 => _v0.commonStore.sortValues),
      {
        isLiveEventView: _v2
      } = _v41(_v0 => _v0.itemListStore),
      _v3 = _v92(),
      {
        handleSortChange: _v4
      } = (() => {
        let _v0 = _v41(_v0 => _v0.commonStore.actions.setSort),
          [_v1, _v2] = (0, _v110.default)(_v31, "addedDesc");
        return (0, _v43.useEffect)(() => {
          let _v0 = _v1;
          _v29?.[_v0] || _v2(_v0 = "addedDesc");
          let {
            sortDirection: _v1,
            sortBy: _v2
          } = _v29[_v0];
          _v0(_v0, _v2, _v1);
        }, [_v1, _v2, _v0]), {
          handleSortChange: (_v0, _v1, _v2) => {
            _v2 && (_v0(_v0, _v1, _v2), _v2(_v0));
          }
        };
      })();
    _v0 = _v2 ? _v30 : _v29;
    let _v5 = _v1.sortKey ? _v0[_v1.sortKey] : void 0,
      _v6 = _v5?.text || _v0?.addedDesc?.text;
    return {
      sortOptions: _v0,
      selectedOptionText: _v6,
      isDisabled: _v3,
      handleSortChange: _v4,
      sortValues: _v1
    };
  };
  _v0.s(["useSortSelect", 0, _v115], 0);
  let _v116 = () => {
      let {
        sortOptions: _v0,
        selectedOptionText: _v1,
        isDisabled: _v2,
        handleSortChange: _v3,
        sortValues: _v4
      } = _v115();
      return (0, _v1.jsx)(_v114, {
        sortOptions: _v0,
        selectedOptionText: _v1,
        isDisabled: _v2,
        onSortChange: _v3,
        currentSortKey: _v4?.sortKey
      });
    },
    _v117 = () => {
      let _v0 = _v41(_v0 => _v0.itemListStore.showFolderView),
        _v1 = (0, _v79.useIsStaff)();
      return (0, _v1.jsxs)(_v61.Flex, {
        direction: "column",
        gap: "sm",
        children: [_v0 && (0, _v1.jsx)(_v108, {}), (0, _v1.jsxs)(_v61.Flex, {
          justify: "space-between",
          children: [(0, _v1.jsx)(_v94, {}), (0, _v1.jsxs)(_v61.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v116, {}), _v1 && (0, _v1.jsx)(_v91, {}), (0, _v1.jsx)(_v111, {})]
          })]
        })]
      });
    };
  var _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0);
  let _v124 = () => {
    let {
      searchQuery: _v0,
      placeholder: _v1,
      setSearchQuery: _v2,
      isSearchDisabled: _v3,
      currentFolderName: _v4,
      showFolderTag: _v5,
      leftElementRef: _v6,
      leftElementWidth: _v7
    } = (() => {
      let _v0 = _v41(_v0 => _v0.commonStore.actions.setSearchQuery),
        _v1 = _v41(_v0 => _v0.commonStore.searchQuery),
        _v2 = _v41(_v0 => _v0.itemListStore.navigationStack),
        _v3 = _v41(_v0 => _v0.itemListStore.isAtRoot),
        _v4 = _v41(_v0 => _v0.commonStore.videoItems),
        _v5 = _v41(_v0 => _v0.itemListStore.showFolderView),
        _v6 = _v41(_v0 => _v0.itemListStore.itemListData),
        {
          contentSpaceEnabled: _v7
        } = _v106(),
        _v8 = (0, _v43.useRef)(null),
        [_v9, _v10] = (0, _v43.useState)(40),
        _v11 = !_v3 && !_v6.length && !_v1,
        _v12 = _v5 ? _v11 : !_v4.length && !_v1,
        _v13 = !_v3 && _v5 ? (0, _v20.translate)({
          singular: "Search in this folder",
          dictionary: {
            es: {
              singular: "Buscar en esta carpeta"
            },
            "de-DE": {
              singular: "In diesem Ordner suchen"
            },
            "fr-FR": {
              singular: "Recherchez dans ce dossier"
            },
            "ja-JP": {
              singular: "このフォルダー内を検索"
            },
            "ko-KR": {
              singular: "이 폴더에서 검색"
            },
            "pt-BR": {
              singular: "Pesquisar nesta pasta"
            },
            "zh-CN": {
              singular: "在此文件夹中搜索"
            }
          }
        }) : (0, _v20.translate)({
          singular: "Search videos",
          dictionary: {
            es: {
              singular: "Buscar videos"
            },
            "de-DE": {
              singular: "Nach Videos suchen"
            },
            "fr-FR": {
              singular: "Rechercher des vidéos"
            },
            "ja-JP": {
              singular: "動画を検索"
            },
            "ko-KR": {
              singular: "동영상 검색"
            },
            "pt-BR": {
              singular: "Pesquisar vídeos"
            },
            "zh-CN": {
              singular: "搜索视频"
            }
          }
        }),
        _v14 = _v5 && !_v3,
        _v15 = _v2[_v2.length - 1],
        _v16 = _v14 ? "object" == typeof _v15 && _v15?.name ? _v15.name : _v15 === _v34 ? _v7 ? _v37 : _v39 : _v15 === _v35 ? _v38 : void 0 : void 0;
      return (0, _v43.useEffect)(() => {
        _v8.current && _v10((_v8?.current?.offsetWidth || 0) + 8), _v14 || _v10(40);
      }, [_v14, _v16]), {
        placeholder: _v13,
        isSearchDisabled: _v12,
        currentFolderName: _v16,
        showFolderTag: _v14,
        searchQuery: _v1,
        setSearchQuery: _v0,
        leftElementWidth: _v9,
        leftElementRef: _v8
      };
    })();
    return (0, _v1.jsxs)(_v119.InputGroup, {
      children: [!_v5 && (0, _v1.jsx)(_v120.InputLeftElement, {
        pointerEvents: "none",
        opacity: _v3 ? .4 : 1,
        children: (0, _v1.jsx)(_v123.SearchMagnifier, {
          boxSize: (0, _v8.rem)(20)
        })
      }), _v5 && (0, _v1.jsx)(_v120.InputLeftElement, {
        ref: _v6,
        pointerEvents: "none",
        width: "auto",
        ml: "1",
        children: (0, _v1.jsx)(_v121.Tag, {
          size: "lg",
          borderRadius: (0, _v8.rem)(9),
          children: (0, _v1.jsx)(_v121.TagLabel, {
            isTruncated: !0,
            fontSize: "body-md",
            maxW: (0, _v8.rem)(150),
            children: `${(0, _v20.translate)({
              singular: "in",
              dictionary: {
                es: {
                  singular: "en"
                },
                "fr-FR": {
                  singular: "dans"
                },
                "ja-JP": {
                  singular: "検索先："
                },
                "ko-KR": {
                  singular: "다음 폴더 내:"
                },
                "pt-BR": {
                  singular: "em"
                },
                "zh-CN": {
                  singular: "位置"
                }
              }
            })}: ${_v4}`
          })
        })
      }), (0, _v1.jsx)(_v118.Input, {
        onChange: _v0 => _v2(_v0?.target?.value),
        placeholder: _v1,
        value: _v0,
        disabled: _v3,
        pl: _v7
      }), !!_v0 && (0, _v1.jsx)(_v120.InputRightElement, {
        children: (0, _v1.jsx)(_v122.CloseXCircleFilled, {
          "aria-label": (0, _v20.translate)({
            singular: "Clear",
            dictionary: {
              es: {
                singular: "Borrar"
              },
              "de-DE": {
                singular: "Löschen"
              },
              "fr-FR": {
                singular: "Effacer"
              },
              "ja-JP": {
                singular: "クリア"
              },
              "ko-KR": {
                singular: "비우기"
              },
              "pt-BR": {
                singular: "Limpar"
              },
              "zh-CN": {
                singular: "清除"
              }
            }
          }),
          boxSize: "xs",
          cursor: "pointer",
          onClick: () => _v2("")
        })
      })]
    });
  };
  _v0.s(["Search", 0, _v124], 0);
  let _v125 = ({
    subtitle: _v0
  }) => (0, _v1.jsxs)(_v61.Flex, {
    direction: "column",
    gap: "md",
    children: [(0, _v1.jsxs)(_v61.Flex, {
      direction: "column",
      gap: "xs",
      children: [(0, _v20.translate)({
        singular: "Select videos",
        dictionary: {
          es: {
            singular: "Selecciona los videos"
          },
          "de-DE": {
            singular: "Videos auswählen"
          },
          "fr-FR": {
            singular: "Sélectionner des vidéos"
          },
          "ja-JP": {
            singular: "動画を選択"
          },
          "ko-KR": {
            singular: "동영상 선택"
          },
          "pt-BR": {
            singular: "Selecionar vídeos"
          },
          "zh-CN": {
            singular: "选择视频"
          }
        }
      }), _v0]
    }), (0, _v1.jsx)(_v124, {}), (0, _v1.jsx)(_v117, {})]
  });
  _v0.s(["Header", 0, _v125], 0), _v0.s(["Header", 0, () => {
    let _v0 = _v41(_v0 => _v0.commonStore.destinationFolder);
    return (0, _v1.jsx)(_v125, {
      subtitle: _v0 && (0, _v1.jsx)(_v56.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: (0, _v20.translate)({
          singular: "Videos will move from their current folders into {FOLDER_NAME}.",
          replacements: {
            FOLDER_NAME: _v0.name
          },
          dictionary: {
            es: {
              singular: "Los vídeos se moverán de sus carpetas actuales a {FOLDER_NAME}."
            },
            "de-DE": {
              singular: "Videos werden aus ihren aktuellen Ordnern in {FOLDER_NAME} verschoben."
            },
            "fr-FR": {
              singular: "Les vidéos seront déplacées de leurs dossiers actuels vers {FOLDER_NAME}."
            },
            "ja-JP": {
              singular: "動画は現在のフォルダから{FOLDER_NAME}に移動します。"
            },
            "ko-KR": {
              singular: "동영상은 현재 폴더에서 {FOLDER_NAME}로 이동합니다."
            },
            "pt-BR": {
              singular: "Os vídeos serão movidos de suas pastas atuais para {FOLDER_NAME}."
            },
            "zh-CN": {
              singular: "视频将从当前所在的文件夹移动到 {FOLDER_NAME}。"
            }
          }
        })
      })
    });
  }], 0);
  var _v126 = _v0.i(0);
  let _v127 = ({
      reason: _v0
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v126.getShowcaseFailureReasonCopy)(_v0) ?? (0, _v20.translate)({
        singular: "Couldn’t add to showcase. Try refreshing the page.",
        dictionary: {
          es: {
            singular: "Error al agregar a la presentación. Intente actualizando la página."
          },
          "de-DE": {
            singular: "Konnte nicht zur Präsentation hinzugefügt werden. Versuchen Sie, die Seite zu aktualisieren."
          },
          "fr-FR": {
            singular: "Impossible d'ajouter à la présentation. Essayez d'actualiser la page."
          },
          "ja-JP": {
            singular: "ショーケースに追加できませんでした。ページを更新してみてください。"
          },
          "ko-KR": {
            singular: "쇼케이스에 추가할 수 없습니다. 페이지를 새로 고침해 보세요."
          },
          "pt-BR": {
            singular: "Não foi possível adicionar à vitrine. Tente atualizar a página."
          },
          "zh-CN": {
            singular: "无法添加到展示栏。请尝试刷新页面。"
          }
        }
      })
    }),
    _v128 = ({
      text: _v0
    }) => {
      let _v1 = _v41(_v0 => _v0.commonStore.patchErrorVisibility),
        _v2 = _v41(_v0 => _v0.commonStore.patchFailureReason),
        _v3 = _v41(_v0 => _v0.commonStore.actions.setPatchErrorVisibility),
        _v4 = _v41(_v0 => _v0.commonStore.actions.setPatchFailureReason);
      return (0, _v1.jsx)(_v57, {
        setVisibility: _v0 => {
          _v3(_v0), _v0 || _v4();
        },
        text: _v2 ? (0, _v1.jsx)(_v127, {
          reason: _v2
        }) : _v0,
        visibility: _v1
      });
    };
  _v0.s(["PatchErrorAlert", 0, _v128], 0), _v0.s(["PatchErrorAlert", 0, () => (0, _v1.jsx)(_v128, {
    text: (0, _v20.translate)({
      singular: "Couldn’t add to folder. Try refreshing the page.",
      dictionary: {
        es: {
          singular: "No se pudo añadir a la carpeta. Intenta actualizar la página."
        },
        "de-DE": {
          singular: "Konnte nicht zum Ordner hinzugefügt werden. Bitte laden Sie die Seite neu."
        },
        "fr-FR": {
          singular: "Impossible d'ajouter au dossier. Essayez d'actualiser la page."
        },
        "ja-JP": {
          singular: "フォルダに追加できませんでした。ページを更新してみてください。"
        },
        "ko-KR": {
          singular: "폴더에 추가할 수 없습니다. 페이지를 새로고침해 보세요."
        },
        "pt-BR": {
          singular: "Não foi possível adicionar à pasta. Tente atualizar a página."
        },
        "zh-CN": {
          singular: "无法添加到文件夹。请尝试刷新页面。"
        }
      }
    })
  })], 0);
  var _v129 = _v0.i(0);
  _v0.s(["EmptyState", 0, () => (0, _v1.jsxs)(_v63, {
    gap: "3",
    children: [(0, _v1.jsx)(_v129.Upload, {
      boxSize: "xs"
    }), (0, _v1.jsx)(_v56.Text, {
      variant: "heading-xs",
      children: (0, _v20.translate)({
        singular: "Nothing to add here",
        dictionary: {
          es: {
            singular: "Nada que añadir aquí"
          },
          "de-DE": {
            singular: "Hier gibt es nichts hinzuzufügen"
          },
          "fr-FR": {
            singular: "Rien à ajouter ici"
          },
          "ja-JP": {
            singular: "ここに追加するものはありません"
          },
          "ko-KR": {
            singular: "추가할 항목이 없습니다"
          },
          "pt-BR": {
            singular: "Nada para adicionar aqui"
          },
          "zh-CN": {
            singular: "这里没有可添加的内容"
          }
        }
      })
    }), (0, _v1.jsx)(_v56.Text, {
      variant: "body-md",
      color: "text-secondary",
      children: (0, _v20.translate)({
        singular: "This location has no videos you can add. Try another folder or search.",
        dictionary: {
          es: {
            singular: "Esta ubicación no tiene videos que puedas añadir. Prueba con otra carpeta o realiza una búsqueda."
          },
          "de-DE": {
            singular: "An diesem Speicherort gibt es keine Videos, die Sie hinzufügen können. Versuchen Sie es in einem anderen Ordner oder mit der Suche."
          },
          "fr-FR": {
            singular: "Cet emplacement ne contient aucune vidéo que vous pouvez ajouter. Essayez un autre dossier ou effectuez une recherche."
          },
          "ja-JP": {
            singular: "この場所には追加できる動画がありません。別のフォルダを選択するか検索してください。"
          },
          "ko-KR": {
            singular: "이 위치에는 추가할 수 있는 동영상이 없습니다. 다른 폴더를 시도하거나 검색해 보세요."
          },
          "pt-BR": {
            singular: "Este local não tem vídeos que você possa adicionar. Tente outra pasta ou pesquise."
          },
          "zh-CN": {
            singular: "该位置没有可添加的视频。请尝试另一个文件夹或搜索。"
          }
        }
      })
    })]
  })], 0);
  var _v130 = _v0.i(0),
    _v131 = _v0.i(0);
  let _v132 = ({
      badge: _v0,
      duration: _v1,
      pictures: _v2,
      isLiveVideo: _v3,
      isLocked: _v4 = !1,
      lockedTooltipLabel: _v5,
      hasPlayOnHover: _v6 = !0,
      ..._v7
    }) => {
      let _v8 = _v47();
      return _v3 ? (0, _v1.jsx)(_v130.EventCard, {
        actionsMenu: null,
        isLive: "live" === _v0.variant,
        tabIndex: _v8 ? -1 : 0,
        tagText: _v0.text,
        thumbnailSrc: _v2?.uri ? _v2.sizes[3].link : "",
        ..._v7
      }) : (0, _v1.jsx)(_v131.VideoCard, {
        avatarSrc: "",
        isDefaultPicture: _v2?.defaultPicture,
        isSelectable: !_v4,
        isColdStorage: _v4,
        lockedTooltipLabel: _v5,
        hasPlayOnHover: _v6,
        showAvatar: !1,
        spinnerSize: "sm",
        tabIndex: _v8 ? -1 : 0,
        tagText: _v1,
        thumbnailSrc: _v2?.sizes?.[3]?.link ?? "",
        ..._v7
      });
    },
    _v133 = () => _v41(_v0 => _v0.commonStore.modalConfig.additionalConfig.singleSelect) ? _v24.RADIO : _v24.CHECKBOX;
  var _v134 = _v0.i(0);
  let _v135 = (_v0, _v1) => {
      if (!_v0) return "";
      let _v2 = new Date(_v0);
      return new Intl.DateTimeFormat(_v1 ?? "en", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(_v2);
    },
    _v136 = (_v0, _v1) => {
      if (!_v1) return (0, _v134.secondsToDisplay)(_v0);
    },
    _v137 = ({
      isLiveVideo: _v0,
      live: _v1
    }) => {
      let _v2 = _v1?.recurringEvent?.metadata?.connections?.liveVideo?.status === "streaming",
        _v3 = _v1?.recurringEvent?.status,
        _v4 = "";
      return _v0 && (_v4 = (0, _v20.translate)({
        singular: "Upcoming",
        dictionary: {
          es: {
            singular: "PRÓXIMAMENTE"
          },
          "de-DE": {
            singular: "IN KÜRZE"
          },
          "fr-FR": {
            singular: "À VENIR"
          },
          "ja-JP": {
            singular: "近日配信"
          },
          "ko-KR": {
            singular: "예정"
          },
          "pt-BR": {
            singular: "EM BREVE"
          },
          "zh-CN": {
            singular: "即将上线"
          }
        }
      }), "ended" === _v3 ? _v4 = (0, _v20.translate)({
        singular: "Completed",
        dictionary: {
          es: {
            singular: "COMPLETADO"
          },
          "de-DE": {
            singular: "ABGESCHLOSSEN"
          },
          "fr-FR": {
            singular: "TERMINÉ"
          },
          "ja-JP": {
            singular: "完了"
          },
          "ko-KR": {
            singular: "종료됨"
          },
          "pt-BR": {
            singular: "CONCLUÍDO"
          },
          "zh-CN": {
            singular: "已完成"
          }
        }
      }) : _v2 && (_v4 = (0, _v20.translate)({
        singular: "Live",
        dictionary: {
          es: {
            singular: "En vivo"
          },
          "fr-FR": {
            singular: "Direct"
          },
          "ja-JP": {
            singular: "ライブ"
          },
          "ko-KR": {
            singular: "라이브"
          },
          "pt-BR": {
            singular: "Ao vivo"
          },
          "zh-CN": {
            singular: "直播"
          }
        }
      }))), {
        badgeText: _v4,
        variant: _v2 ? "live" : "default"
      };
    },
    _v138 = ({
      recurringEvent: _v0
    }) => {
      let _v1 = _v0?.metadata?.connections?.liveVideo?.status === "streaming",
        _v2 = "";
      return _v2 = (0, _v20.translate)({
        singular: "Upcoming",
        dictionary: {
          es: {
            singular: "PRÓXIMAMENTE"
          },
          "de-DE": {
            singular: "IN KÜRZE"
          },
          "fr-FR": {
            singular: "À VENIR"
          },
          "ja-JP": {
            singular: "近日配信"
          },
          "ko-KR": {
            singular: "예정"
          },
          "pt-BR": {
            singular: "EM BREVE"
          },
          "zh-CN": {
            singular: "即将上线"
          }
        }
      }), _v1 && (_v2 = (0, _v20.translate)({
        singular: "Live",
        dictionary: {
          es: {
            singular: "En vivo"
          },
          "fr-FR": {
            singular: "Direct"
          },
          "ja-JP": {
            singular: "ライブ"
          },
          "ko-KR": {
            singular: "라이브"
          },
          "pt-BR": {
            singular: "Ao vivo"
          },
          "zh-CN": {
            singular: "直播"
          }
        }
      })), {
        badgeText: _v2,
        variant: _v1 ? "live" : "default"
      };
    },
    _v139 = _v0 => {
      let _v1 = _v0?.view ?? "",
        _v2 = _v0?.originalView,
        _v3 = ("cold_storage" === _v1 || "purgatory" === _v1) && _v2 ? _v2 : _v1;
      return _v23[_v3] ?? {
        title: _v3
      };
    },
    _v140 = _v0 => _v23[_v0] ?? {
      title: _v0 ?? ""
    },
    _v141 = _v0 => {
      try {
        return parseInt(_v0?.split("/")[2] ?? "", 10) || 0;
      } catch {
        return 0;
      }
    },
    _v142 = _v0 => (0, _v20.translate)({
      singular: "{NUM_ITEMS} item",
      plural: "{NUM_ITEMS} items",
      count: _v0,
      replacements: {
        NUM_ITEMS: _v0
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} elemento",
          plural: "{NUM_ITEMS} elementos"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} Element",
          plural: "{NUM_ITEMS} Elemente"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} élément",
          plural: "{NUM_ITEMS} éléments"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS} 件のアイテム",
          plural: "{NUM_ITEMS} 件のアイテム"
        },
        "ko-KR": {
          singular: "{NUM_ITEMS}개 항목",
          plural: "{NUM_ITEMS}개 항목"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} iten",
          plural: "{NUM_ITEMS} itens"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 项",
          plural: "{NUM_ITEMS} 项"
        }
      }
    }),
    _v143 = (_v0, _v1) => _v0 === _v25.LIVE && !!_v1 && "done" !== _v1.status;
  _v0.s(["formatDateTime", 0, _v135, "getBadgeLabel", 0, _v137, "getClipIdFromUri", 0, _v141, "getDuration", 0, _v136, "getEventBadgeLabel", 0, _v138, "getEventPrivacy", 0, _v140, "getPrivacy", 0, _v139, "isLiveEvent", 0, _v143, "numItemsText", 0, _v142], 0);
  let _v144 = ({
    liveEvent: _v0,
    isSelected: _v1,
    liveEventVideoUri: _v2
  }) => {
    let {
        title: _v3,
        pictures: _v4,
        badgeText: _v5,
        variant: _v6,
        uri: _v7,
        onGridCardClick: _v8,
        onToggleSelected: _v9
      } = (({
        liveEvent: _v0,
        isSelected: _v1,
        liveEventVideoUri: _v2
      }) => {
        let {
            deselectItem: _v3,
            selectItem: _v4
          } = _v93(),
          {
            title: _v5,
            pictures: _v6
          } = _v0,
          {
            badgeText: _v7,
            variant: _v8
          } = (0, _v43.useMemo)(() => _v138({
            recurringEvent: _v0
          }), [_v0]),
          _v9 = (0, _v43.useCallback)(() => {
            _v1 ? _v3(_v2) : _v4(_v2);
          }, [_v1, _v4, _v3, _v2]);
        return {
          title: _v5,
          pictures: _v6,
          badgeText: _v7,
          variant: _v8,
          onGridCardClick: (0, _v43.useCallback)(_v0 => {
            _v0.preventDefault(), _v9();
          }, [_v9]),
          onToggleSelected: _v9,
          uri: _v2
        };
      })({
        liveEvent: _v0,
        isSelected: _v1,
        liveEventVideoUri: _v2
      }),
      _v10 = _v133();
    return (0, _v1.jsx)(_v132, {
      duration: "",
      badge: {
        text: _v5,
        variant: _v6
      },
      defaultIconProps: {
        boxSize: "xs"
      },
      href: "javascript:void(0)",
      isLiveVideo: !0,
      isSelected: _v1,
      selectionType: _v10,
      onClick: _v8,
      onToggleSelected: _v9,
      pictures: _v4,
      subtitle: "",
      title: _v3,
      titleStyles: {
        fontSize: (0, _v8.rem)(12)
      }
    }, _v7);
  };
  var _v145 = _v0.i(0);
  let _v146 = ({
    folder: _v0
  }) => {
    let _v1 = _v41(_v0 => _v0.commonStore.actions.setSearchQuery),
      _v2 = _v41(_v0 => _v0.itemListStore.actions.pushNavigation),
      _v3 = (0, _v43.useCallback)(() => {
        _v1(""), _v2(_v0);
      }, [_v1, _v2, _v0]);
    return (0, _v1.jsx)(_v145.FolderCard, {
      backgroundColor: _v0?.settings?.color,
      title: _v0.name,
      subtitle: "",
      tagText: _v142(_v0?.metadata?.connections?.items?.total),
      href: "javascript:void(0)",
      onClick: _v3
    }, _v0.uri);
  };
  var _v147 = _v0.i(0),
    _v148 = _v0.i(0);
  let _v149 = () => (0, _v1.jsx)(_v61.Flex, {
    "aria-busy": !0,
    "aria-live": "polite",
    display: "contents",
    wrap: "wrap",
    children: (0, _v1.jsx)(_v1.Fragment, {
      children: [,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v148.ContentCard, {
        href: "javascript:void(0)",
        width: "100%",
        isHoverDisabled: !0,
        children: [(0, _v1.jsx)(_v148.ContentCard.Body, {
          children: (0, _v1.jsx)(_v147.Skeleton, {
            h: "100%",
            borderRadius: "sm"
          })
        }), (0, _v1.jsx)(_v147.Skeleton, {
          variant: "text",
          mt: "xs"
        })]
      }, `loading-state-skeleton-card-grid-${_v1}`))
    })
  });
  _v0.s(["LoadingStateGrid", 0, _v149], 0);
  let _v150 = (0, _v20.translate)({
      singular: "This video has been restricted because you are exceeding the managed storage limit. Click to restore.",
      dictionary: {
        es: {
          singular: "Este vídeo ha sido restringido porque está excediendo el límite de almacenamiento gestionado. Haga clic para restaurar."
        },
        "de-DE": {
          singular: "Dieses Video wurde eingeschränkt, da Sie das verwaltete Speicherkontingent überschreiten. Klicken Sie, um es wiederherzustellen."
        },
        "fr-FR": {
          singular: "Cette vidéo a été restreinte parce que vous dépassez la limite de stockage géré. Cliquez pour restaurer."
        },
        "ja-JP": {
          singular: "管理対象ストレージの上限を超過しているため、この動画へのアクセスが制限されています. 復元するにはクリックしてください."
        },
        "ko-KR": {
          singular: "관리되는 저장 용량 한도를 초과하여 이 동영상이 제한되었습니다. 복원하려면 클릭하세요."
        },
        "pt-BR": {
          singular: "Este vídeo foi restringido porque você está excedendo o limite de armazenamento gerenciado. Clique para restaurar."
        },
        "zh-CN": {
          singular: "由于您已超过托管存储限制，此视频已被限制。点击恢复。"
        }
      }
    }),
    _v151 = ({
      video: _v0,
      isSelected: _v1
    }) => {
      let _v2 = _v72(),
        {
          configUrl: _v3,
          duration: _v4,
          name: _v5,
          pictures: _v6,
          badgeText: _v7,
          variant: _v8,
          uri: _v9,
          isLiveVideo: _v10,
          onGridCardClick: _v11,
          onToggleSelected: _v12
        } = (({
          video: _v0,
          isSelected: _v1
        }) => {
          let {
              deselectItem: _v2,
              selectItem: _v3
            } = _v93(),
            {
              configUrl: _v4,
              duration: _v5,
              live: _v6,
              name: _v7,
              pictures: _v8,
              type: _v9,
              uri: _v10
            } = _v0,
            _v11 = _v143(_v9, _v6),
            {
              badgeText: _v12,
              variant: _v13
            } = (0, _v43.useMemo)(() => _v137({
              isLiveVideo: _v11,
              live: _v6
            }), [_v11, _v6]),
            _v14 = (0, _v43.useCallback)(() => {
              _v1 ? _v2(_v10) : _v3(_v10);
            }, [_v1, _v3, _v2, _v10]);
          return {
            configUrl: _v4,
            duration: _v5,
            name: _v7,
            pictures: _v8,
            badgeText: _v12,
            variant: _v13,
            onGridCardClick: (0, _v43.useCallback)(_v0 => {
              _v0.preventDefault(), _v14();
            }, [_v14]),
            onToggleSelected: _v14,
            uri: _v10,
            isLiveVideo: _v11
          };
        })({
          video: _v0,
          isSelected: _v1
        }),
        _v13 = _v133(),
        _v14 = !!_v0.isColdStorage;
      return (0, _v1.jsx)(_v132, {
        badge: {
          text: _v7,
          variant: _v8
        },
        clipId: _v141(_v9),
        configUrl: _v3 ?? "",
        defaultIconProps: {
          boxSize: "xs"
        },
        duration: (0, _v134.secondsToDisplay)(_v4),
        href: "javascript:void(0)",
        isLiveVideo: _v10,
        isLocked: _v14,
        isSelected: _v1,
        lockedTooltipLabel: _v14 ? _v150 : void 0,
        hasPlayOnHover: !_v14,
        selectionType: _v13,
        onClick: _v0 => {
          if (_v14) {
            _v0.preventDefault(), _v0.stopPropagation(), _v2("grid");
            return;
          }
          _v11(_v0);
        },
        onToggleSelected: () => {
          _v14 || _v12();
        },
        pictures: _v6,
        subtitle: "",
        title: _v5,
        titleStyles: {
          fontSize: (0, _v8.rem)(12)
        }
      }, _v9);
    };
  _v0.s(["VideoListGrid", 0, _v151], 0);
  let _v152 = {
      [`@media screen and (min-width: ${_v45.bokehTheme.breakpoints.sm})`]: {
        gridTemplateColumns: `${(0, _v8.rem)(16)} ${(0, _v8.rem)(72)} 7fr 4fr`
      },
      [`@media screen and (min-width: ${_v45.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: `${(0, _v8.rem)(18)} ${(0, _v8.rem)(72)} ${(0, _v8.rem)(210)} ${(0, _v8.rem)(136)} ${(0, _v8.rem)(90)}`
      }
    },
    _v153 = {
      "@media screen and (min-width: 375px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
      },
      [`@media screen and (min-width: ${_v45.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      }
    };
  _v0.s(["responsiveGridSx", 0, _v153, "responsiveRowSx", 0, _v152], 0);
  let _v154 = ({
    isLoading: _v0
  }) => {
    let _v1 = _v41(_v0 => _v0.itemListStore.itemListData),
      _v2 = (0, _v43.useMemo)(() => _v1.map(_v0 => _v0?.video && _v0.video?.uri ? (0, _v1.jsx)(_v151, {
        video: _v0.video,
        isSelected: _v0.isSelected
      }, _v0.video.uri) : _v0?.folder && _v0.folder?.uri ? (0, _v1.jsx)(_v146, {
        folder: _v0.folder
      }, _v0.folder.uri) : _v0?.liveEvent?.uri ? (0, _v1.jsx)(_v144, {
        liveEvent: _v0?.liveEvent,
        isSelected: _v0.isSelected,
        liveEventVideoUri: _v0?.liveEventVideoUri ?? ""
      }, _v0.liveEvent.uri) : null), [_v1]);
    return (0, _v1.jsxs)(_v55.Box, {
      w: "100%",
      display: "grid",
      gap: "3",
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      sx: _v153,
      children: [_v2, _v0 && (0, _v1.jsx)(_v149, {})]
    });
  };
  function _v155(_v0, _v1) {
    return (0, _v43.useMemo)(() => {
      if (_v0) if ("venue" === _v0.eventType) return _v0.nextOccurrenceTime ? _v135(_v0.nextOccurrenceTime, _v1) : (0, _v20.translate)({
        singular: "Unscheduled venue",
        dictionary: {
          es: {
            singular: "Sede no programada"
          },
          "de-DE": {
            singular: "Veranstaltungsort noch nicht festgelegt"
          },
          "fr-FR": {
            singular: "Site non programmé"
          },
          "ja-JP": {
            singular: "スケジュール予約されていないベニュー"
          },
          "ko-KR": {
            singular: "예정되지 않은 광장"
          },
          "pt-BR": {
            singular: "Venue não agendado"
          },
          "zh-CN": {
            singular: "未预定场地"
          }
        }
      });else return _v0.nextOccurrenceTime ? _v135(_v0.nextOccurrenceTime, _v1) : (0, _v20.translate)({
        singular: "Unscheduled event",
        dictionary: {
          es: {
            singular: "Evento no programado"
          },
          "de-DE": {
            singular: "Außerplanmäßiges Event"
          },
          "fr-FR": {
            singular: "Événement non programmé"
          },
          "ja-JP": {
            singular: "スケジュール予約されていないイベント"
          },
          "ko-KR": {
            singular: "예정되지 않은 이벤트"
          },
          "pt-BR": {
            singular: "Evento não agendado"
          },
          "zh-CN": {
            singular: "未预定活动"
          }
        }
      });
      return "";
    }, [_v0, _v1]);
  }
  let _v156 = ({
    liveEvent: _v0,
    locale: _v1
  }) => {
    let _v2 = _v155(_v0, _v1 ?? "en");
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v61.Flex, {
        align: "center",
        children: (0, _v1.jsx)(_v56.Text, {
          variant: "body-sm",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          children: _v2 ?? ""
        })
      })
    });
  };
  var _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0);
  let _v160 = ({
    text: _v0,
    color: _v1
  }) => {
    let _v2 = (0, _v43.useRef)(null),
      [_v3, _v4] = (0, _v43.useState)(!1);
    return (0, _v43.useEffect)(() => {
      let {
        current: _v0
      } = _v2;
      _v0 && _v4(_v0.scrollWidth > _v0.clientWidth);
    }, [_v0]), (0, _v1.jsx)(_v109.Tooltip, {
      label: _v0,
      hasArrow: !0,
      isDisabled: !_v3,
      placement: "bottom-start",
      maxW: (0, _v8.rem)(240),
      children: (0, _v1.jsx)(_v56.Text, {
        ref: _v2,
        variant: "heading-xs",
        noOfLines: 1,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: "block",
        ...(_v1 && {
          color: _v1
        }),
        children: _v0
      })
    });
  };
  var _v161 = _v0.i(0);
  let _v162 = ({
      recurringEvent: _v0
    }) => {
      let {
        badgeText: _v1,
        variant: _v2
      } = _v138({
        recurringEvent: _v0
      });
      return _v1 ? (0, _v1.jsx)(_v161.Badge, {
        h: (0, _v8.rem)(14),
        marginY: "auto",
        borderRadius: (0, _v8.rem)(6),
        size: "xs",
        variant: _v2,
        children: _v1
      }) : null;
    },
    _v163 = ({
      isLiveVideo: _v0,
      live: _v1
    }) => {
      let {
        badgeText: _v2,
        variant: _v3
      } = _v137({
        isLiveVideo: _v0,
        live: _v1
      });
      return _v2 ? (0, _v1.jsx)(_v161.Badge, {
        h: (0, _v8.rem)(14),
        marginY: "auto",
        borderRadius: (0, _v8.rem)(6),
        size: "xs",
        variant: _v3,
        children: _v2
      }) : null;
    };
  var _v164 = _v0.i(0),
    _v165 = _v0.i(0);
  let _v166 = ({
      duration: _v0,
      isDefaultPicture: _v1,
      thumbnail: _v2,
      isLocked: _v3
    }) => {
      if (!_v2 || _v1) {
        let _v0 = _v0 ? _v165.PlayerFilled : _v164.CameraOnFilled;
        return (0, _v1.jsx)(_v159.ContentRow.DefaultThumbnail, {
          badgeText: _v0,
          badgeSx: _v51,
          ..._v50,
          children: (0, _v1.jsx)(_v0, {
            color: "text-tertiary",
            boxSize: "xs"
          })
        });
      }
      return (0, _v1.jsx)(_v55.Box, {
        fontSize: "body-xs",
        children: (0, _v1.jsx)(_v159.ContentRow.Thumbnail, {
          alt: (0, _v20.translate)({
            singular: "Thumbnail",
            dictionary: {
              es: {
                singular: "Miniatura"
              },
              "de-DE": {
                singular: "Vorschaubild"
              },
              "fr-FR": {
                singular: "Vignette"
              },
              "ja-JP": {
                singular: "サムネイル"
              },
              "ko-KR": {
                singular: "썸네일"
              },
              "pt-BR": {
                singular: "Miniatura"
              },
              "zh-CN": {
                singular: "缩略图"
              }
            }
          }),
          src: _v2,
          badgeText: _v0,
          badgeSx: _v51,
          isLocked: _v3,
          lockIconSize: (0, _v8.rem)(18),
          ..._v50
        })
      });
    },
    _v167 = ({
      isSelected: _v0,
      isLiveVideo: _v1 = !1,
      isLocked: _v2 = !1,
      live: _v3,
      onLockedClick: _v4,
      onToggleSelected: _v5,
      privacy: _v6,
      subTitle: _v7,
      timestamp: _v8,
      title: _v9,
      controlType: _v10 = _v24.CHECKBOX,
      recurringEvent: _v11,
      ..._v12
    }) => {
      let _v13 = (0, _v157.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
        _v14 = (0, _v1.jsxs)(_v159.ContentRow, {
          listGridColumns: `${(0, _v8.rem)(16)} ${(0, _v8.rem)(72)} 1fr 1fr`,
          sx: _v152,
          isSelected: _v0,
          onClick: _v0 => {
            (_v0.preventDefault(), _v2) ? _v4?.() : _v5();
          },
          cursor: _v2 ? _v4 ? "pointer" : "not-allowed" : "pointer",
          tabIndex: -1,
          userSelect: "none",
          children: [(0, _v1.jsx)(_v159.ContentRow.Column, {
            children: _v10 === _v24.RADIO ? (0, _v1.jsx)(_v159.ContentRow.SelectRadio, {
              size: "md",
              isDisabled: _v2
            }) : (0, _v1.jsx)(_v159.ContentRow.SelectCheckbox, {
              size: "md",
              isDisabled: _v2
            })
          }), (0, _v1.jsx)(_v159.ContentRow.Column, {
            children: (0, _v1.jsx)(_v166, {
              isLocked: _v2,
              ..._v12
            })
          }), (0, _v1.jsx)(_v159.ContentRow.Column, {
            overflow: "auto",
            justifyColumn: "auto",
            children: (0, _v1.jsxs)(_v61.Flex, {
              w: "100%",
              gap: "3",
              children: [(0, _v1.jsxs)(_v61.Flex, {
                direction: "column",
                overflow: "auto",
                children: [(0, _v1.jsx)(_v160, {
                  text: _v9,
                  color: _v2 ? _v13 : void 0
                }), _v7]
              }), _v11?.uri ? (0, _v1.jsx)(_v162, {
                recurringEvent: _v11
              }) : (0, _v1.jsx)(_v163, {
                isLiveVideo: _v1,
                live: _v3
              })]
            })
          }), (0, _v1.jsx)(_v159.ContentRow.Column, {
            margin: `0 0 0 ${(0, _v8.rem)(16)}`,
            children: (0, _v1.jsxs)(_v61.Flex, {
              alignItems: "center",
              children: [(0, _v1.jsx)(_v56.Text, {
                variant: "body-sm",
                mr: "xs",
                color: _v2 ? _v13 : "text-secondary",
                wordBreak: "break-word",
                children: _v6.title
              }), _v6.description && (0, _v1.jsx)(_v109.Tooltip, {
                label: (0, _v1.jsx)(_v56.Text, {
                  variant: "body-md",
                  children: _v6.description
                }),
                maxW: (0, _v8.rem)(220),
                children: (0, _v1.jsx)(_v61.Flex, {
                  align: "center",
                  hideBelow: "md",
                  tabIndex: 0,
                  children: (0, _v1.jsx)(_v158.InfoCircle, {
                    color: "text-secondary",
                    boxSize: "2xs"
                  })
                })
              })]
            })
          }), (0, _v1.jsx)(_v159.ContentRow.Column, {
            hideAtWidth: _v45.bokehTheme.breakpoints.md,
            children: (0, _v1.jsx)(_v56.Text, {
              variant: "body-sm",
              color: _v2 ? _v13 : "text-secondary",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              overflow: "hidden",
              children: _v8
            })
          })]
        });
      return _v2 ? (0, _v1.jsxs)(_v55.Box, {
        position: "relative",
        sx: {
          "&:hover .locked-row-tooltip, &:focus-within .locked-row-tooltip": {
            opacity: 1
          }
        },
        children: [_v14, (0, _v1.jsx)(_v55.Box, {
          className: "locked-row-tooltip",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.2s ease",
          zIndex: 2,
          children: (0, _v1.jsx)(_v55.Box, {
            width: "max-content",
            maxWidth: (0, _v8.rem)(280),
            backgroundColor: "rgba(12, 18, 31, 0.92)",
            borderRadius: "md",
            paddingX: (0, _v8.rem)(12),
            paddingY: (0, _v8.rem)(8),
            boxShadow: "lg",
            children: (0, _v1.jsx)(_v56.Text, {
              color: "white",
              textAlign: "center",
              variant: "body-sm",
              children: _v150
            })
          })
        })]
      }) : _v14;
    },
    _v168 = ({
      liveEvent: _v0,
      isSelected: _v1,
      liveEventVideoUri: _v2
    }) => {
      let _v3 = (0, _v69.useViewer)(),
        _v4 = _v3?.locale,
        {
          deselectItem: _v5,
          selectItem: _v6
        } = _v93(),
        _v7 = _v133(),
        {
          createdTime: _v8,
          title: _v9,
          pictures: _v10,
          streamPrivacy: _v11,
          uri: _v12
        } = _v0;
      return (0, _v1.jsx)(_v167, {
        recurringEvent: _v0,
        isDefaultPicture: _v10?.defaultPicture,
        isLiveVideo: !0,
        title: _v9,
        thumbnail: _v10?.sizes?.[1]?.link ?? "",
        privacy: _v140(_v11?.view),
        timestamp: _v135(_v8, _v4),
        isSelected: _v1,
        controlType: _v7,
        subTitle: (0, _v1.jsx)(_v156, {
          liveEvent: {
            ..._v0
          },
          locale: _v4
        }),
        onToggleSelected: () => {
          _v1 ? _v5(_v2) : _v6(_v2);
        }
      }, _v12);
    },
    _v169 = ({
      title: _v0,
      subTitle: _v1,
      timestamp: _v2,
      thumbnail: _v3,
      isSelectable: _v4,
      isSelected: _v5,
      onClick: _v6,
      onToggleSelected: _v7
    }) => (0, _v1.jsxs)(_v159.ContentRow, {
      listGridColumns: `${(0, _v8.rem)(16)} ${(0, _v8.rem)(72)} 1fr 1fr`,
      sx: _v152,
      isSelected: _v5,
      onToggleSelected: _v7,
      cursor: "pointer",
      onClick: _v6,
      tabIndex: 0,
      onKeyDown: _v0 => {
        _v0?.key === "Enter" && _v6?.();
      },
      children: [(0, _v1.jsx)(_v159.ContentRow.Column, {
        children: _v4 && (0, _v1.jsx)(_v159.ContentRow.SelectCheckbox, {
          size: "md"
        })
      }), (0, _v1.jsx)(_v159.ContentRow.Column, {
        width: "100%",
        children: _v3
      }), (0, _v1.jsx)(_v159.ContentRow.Column, {
        overflow: "auto",
        justifyColumn: "auto",
        children: (0, _v1.jsx)(_v61.Flex, {
          w: "100%",
          gap: "3",
          children: (0, _v1.jsxs)(_v61.Flex, {
            direction: "column",
            overflow: "auto",
            children: [(0, _v1.jsx)(_v160, {
              text: _v0
            }), (0, _v1.jsx)(_v61.Flex, {
              align: "center",
              children: (0, _v1.jsx)(_v56.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: _v1
              })
            })]
          })
        })
      }), (0, _v1.jsx)(_v159.ContentRow.Column, {
        margin: `0 0 0 ${(0, _v8.rem)(16)}`,
        children: (0, _v1.jsx)(_v61.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v56.Text, {
            variant: "body-sm",
            mr: "xs",
            color: "text-secondary",
            wordBreak: "break-word",
            children: "-"
          })
        })
      }), (0, _v1.jsx)(_v159.ContentRow.Column, {
        hideAtWidth: _v45.bokehTheme.breakpoints.md,
        children: (0, _v1.jsx)(_v56.Text, {
          variant: "body-sm",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          overflow: "hidden",
          children: _v2
        })
      })]
    });
  var _v170 = _v0.i(0),
    _v171 = _v0.i(0);
  let _v172 = ({
      backgroundColor: _v0
    }) => (0, _v1.jsx)(_v159.ContentRow.DefaultThumbnail, {
      background: _v0,
      badgeSx: _v51,
      ..._v50,
      children: (0, _v1.jsx)(_v171.FolderFilled, {
        color: _v0 ? (0, _v170.readableColor)(_v0) : "text-secondary",
        opacity: "0.4",
        boxSize: "xs"
      })
    }),
    _v173 = ({
      folder: _v0
    }) => {
      let _v1 = _v0?.lastUserActionEventDate || "",
        _v2 = (0, _v69.useViewer)(),
        _v3 = _v2?.locale,
        _v4 = _v41(_v0 => _v0.commonStore.actions.setSearchQuery),
        _v5 = _v41(_v0 => _v0.itemListStore.actions.pushNavigation);
      return (0, _v1.jsx)(_v169, {
        title: _v0.name,
        thumbnail: (0, _v1.jsx)(_v172, {
          backgroundColor: _v0?.settings?.color
        }),
        subTitle: _v142(_v0?.metadata?.connections?.items?.total),
        timestamp: _v135(_v1, _v3),
        onClick: () => {
          _v4(""), _v5(_v0);
        }
      }, _v0.uri);
    };
  var _v174 = _v0.i(0);
  let _v175 = ({
      isLiveVideo: _v0,
      isLocked: _v1 = !1,
      item: _v2,
      locale: _v3
    }) => {
      let {
          live: _v4,
          user: _v5
        } = _v2,
        _v6 = _v155(_v4?.recurringEvent, _v3 ?? "en"),
        _v7 = _v5?.pictures?.sizes?.[3]?.link ?? "",
        _v8 = _v0 ? _v6 : _v5?.name ?? "",
        _v9 = (0, _v157.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500");
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v61.Flex, {
          align: "center",
          children: [!_v0 && (0, _v1.jsx)(_v55.Box, {
            mr: "xs",
            boxSize: (0, _v8.rem)(12),
            fontSize: (0, _v8.rem)(8),
            overflow: "clip",
            flexShrink: 0,
            sx: {
              "*": {
                boxSize: (0, _v8.rem)(12)
              }
            },
            children: (0, _v1.jsx)(_v174.Avatar, {
              alt: (0, _v20.translate)({
                singular: "Profile picture",
                dictionary: {
                  es: {
                    singular: "Foto del perfil"
                  },
                  "de-DE": {
                    singular: "Profilbild"
                  },
                  "fr-FR": {
                    singular: "Photo de profil"
                  },
                  "ja-JP": {
                    singular: "プロフィール画像"
                  },
                  "ko-KR": {
                    singular: "프로필 이미지"
                  },
                  "pt-BR": {
                    singular: "Foto do perfil"
                  },
                  "zh-CN": {
                    singular: "个人资料图片"
                  }
                }
              }),
              src: _v7,
              size: "auto",
              nameProps: {
                name: _v8
              }
            })
          }), (0, _v1.jsx)(_v56.Text, {
            variant: "body-sm",
            color: _v1 ? _v9 : "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v8
          })]
        })
      });
    },
    _v176 = ({
      video: _v0,
      isSelected: _v1,
      timestamp: _v2
    }) => {
      let _v3 = (0, _v69.useViewer)(),
        _v4 = _v3?.locale,
        {
          deselectItem: _v5,
          selectItem: _v6
        } = _v93(),
        _v7 = _v133(),
        _v8 = _v72(),
        {
          createdTime: _v9,
          duration: _v10,
          live: _v11,
          name: _v12,
          pictures: _v13,
          privacy: _v14,
          type: _v15,
          uri: _v16,
          isColdStorage: _v17
        } = _v0,
        _v18 = _v143(_v15, _v11),
        _v19 = !!_v17;
      return (0, _v1.jsx)(_v167, {
        live: _v11,
        duration: _v136(_v10, _v18),
        isDefaultPicture: _v13?.defaultPicture,
        isLiveVideo: _v18,
        isLocked: _v19,
        title: _v12,
        thumbnail: _v13?.sizes?.[1]?.link ?? "",
        privacy: _v139(_v14),
        timestamp: _v2 ?? _v135(_v9, _v4),
        isSelected: _v1,
        controlType: _v7,
        subTitle: (0, _v1.jsx)(_v175, {
          isLiveVideo: _v18,
          isLocked: _v19,
          item: {
            ..._v0,
            isSelected: _v1
          },
          locale: _v4
        }),
        onToggleSelected: () => {
          _v19 || (_v1 ? _v5(_v16) : _v6(_v16));
        },
        onLockedClick: () => _v8("list")
      }, _v16);
    };
  _v0.s(["VideoListRow", 0, _v176], 0);
  let _v177 = () => {
    let _v0 = _v41(_v0 => _v0.itemListStore.itemListData),
      _v1 = (0, _v43.useMemo)(() => _v0.map(_v0 => _v0?.video?.uri ? (0, _v1.jsx)(_v176, {
        video: _v0.video,
        isSelected: _v0.isSelected
      }, _v0.video.uri) : _v0?.folder?.uri ? (0, _v1.jsx)(_v173, {
        folder: _v0.folder
      }, _v0.folder.uri) : _v0?.liveEvent?.uri ? (0, _v1.jsx)(_v168, {
        liveEvent: _v0?.liveEvent,
        isSelected: _v0.isSelected,
        liveEventVideoUri: _v0?.liveEventVideoUri ?? ""
      }, _v0.liveEvent.uri) : null), [_v0]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v1
    });
  };
  _v0.s(["ItemListRoot", 0, ({
    isLoading: _v0
  }) => _v41(_v0 => _v0.commonStore.layout) === _v14.LIST ? (0, _v1.jsx)(_v177, {}) : (0, _v1.jsx)(_v154, {
    isLoading: _v0
  })], 0);
  let _v178 = _v0 => {
    if (!(_v0 !== _v33 && _v0 !== _v34 && _v0 !== _v35 && "object" == typeof _v0 && _v0?.uri)) return null;
    try {
      let _v0 = parseInt(_v0.uri.split("/")[4], 10);
      return isNaN(_v0) ? null : _v0;
    } catch (_v0) {
      return null;
    }
  };
  _v0.s(["getFolderId", 0, _v178], 0), _v0.s(["useFetchFolderItems", 0, ({
    fields: _v0 = _v105,
    filter: _v1
  } = {}) => {
    let _v2 = _v41(_v0 => _v0.commonStore.resourceOwnerId),
      _v3 = _v41(_v0 => _v0.itemListStore.navigationStack),
      _v4 = _v41(_v0 => _v0.commonStore.sortValues),
      _v5 = _v41(_v0 => _v0.commonStore.searchQuery),
      _v6 = _v178(_v3[_v3.length - 1]),
      {
        data: _v7,
        error: _v8,
        isLoading: _v9,
        mutate: _v10,
        setSize: _v11,
        size: _v12
      } = (0, _v78.useGetUserProjectItemsInfinite)(() => _v2 && _v6 && !_v5 ? {
        where: {
          userId: _v2,
          projectId: _v6
        },
        select: _v0,
        query: {
          direction: _v4?.sortDirection,
          filter: _v1,
          sort: _v4?.sortBy,
          perPage: 25,
          liveEventType: "all",
          noPadding: !0,
          responsive: !0,
          includeColdStorageClips: !0
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateAll: !1,
        revalidateFirstPage: !1
      });
    return {
      data: _v7,
      error: _v8,
      isLoading: _v9,
      mutate: _v10,
      setSize: _v11,
      size: _v12
    };
  }], 0);
  var _v179 = _v0.i(0),
    _v180 = _v0.i(0);
  _v0.s(["useFetchFolderSearchItems", 0, ({
    fields: _v0 = _v105,
    filter: _v1 = "folder,video,live_event"
  } = {}) => {
    let _v2 = _v41(_v0 => _v0.commonStore.resourceOwnerId),
      {
        contentSpaceEnabled: _v3,
        notTeamGatedContentSpaceEnabled: _v4,
        loading: _v5
      } = (0, _v101.useContentSpaceEnabled)(_v2),
      _v6 = !_v5 && _v4 && !_v3,
      _v7 = _v41(_v0 => _v0.itemListStore.navigationStack),
      _v8 = _v41(_v0 => _v0.commonStore.searchQuery),
      _v9 = _v41(_v0 => _v0.commonStore.searchFilterFields),
      _v10 = _v41(_v0 => _v0.commonStore.sortValues),
      _v11 = (0, _v179.useDebouncedValue)(_v8, 500),
      _v12 = _v9?.length ? _v9.join(",") : void 0,
      _v13 = _v178(_v7[_v7.length - 1]),
      {
        data: _v14,
        error: _v15,
        isLoading: _v16,
        setSize: _v17,
        size: _v18
      } = (0, _v180.useGetUserItemsInfinite)(() => _v2 && _v11.trim() ? {
        where: {
          userId: _v2
        },
        select: _v0,
        query: {
          direction: _v10?.sortDirection,
          sort: _v10?.sortBy,
          filter: _v1,
          perPage: 25,
          liveEventType: "all",
          noPadding: !0,
          responsive: !0,
          includeFolderIds: _v13 ?? void 0,
          query: _v11.trim() ? _v11 : void 0,
          queryFields: _v12,
          precision: 3
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateAll: !1,
        revalidateFirstPage: !1
      });
    return {
      data: (0, _v43.useMemo)(() => _v6 && _v14 ? _v14.map(_v0 => _v0 ? {
        ..._v0,
        data: _v0.data.filter(_v0 => !("folder" === _v0.type && _v0.folder?.isPrivateToUser))
      } : _v0) : _v14, [_v14, _v6]),
      error: _v15,
      isLoading: _v16 || _v5,
      setSize: _v17,
      size: _v18
    };
  }], 0);
  var _v181 = _v0.i(0);
  _v0.s(["useFetchItems", 0, ({
    fields: _v0 = _v105,
    filter: _v1,
    matchLibraryRoot: _v2 = !1
  } = {}) => {
    let _v3 = _v41(_v0 => _v0.commonStore.resourceOwnerId),
      _v4 = _v41(_v0 => _v0.commonStore.sortValues),
      _v5 = _v41(_v0 => _v0.itemListStore.navigationStack),
      _v6 = _v5?.[1] === _v34,
      {
        contentSpaceEnabled: _v7
      } = (0, _v101.useContentSpaceEnabled)(_v3),
      {
        listingParams: _v8,
        loading: _v9
      } = (0, _v100.usePrivateToMeFolderListingParams)(_v3),
      {
        data: _v10,
        error: _v11,
        isLoading: _v12,
        setSize: _v13,
        size: _v14
      } = (0, _v181.useGetUserFoldersRootInfinite)((0, _v43.useCallback)(() => _v3 && _v6 && _v4?.sortBy && (!_v2 || !_v9) ? {
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        },
        where: {
          userId: _v3
        },
        select: _v0,
        query: {
          direction: _v4?.sortDirection,
          excludePersonalTeamFolder: !_v2 || _v7,
          filter: _v1,
          flattenPrivateToMe: _v2 ? _v8.flattenPrivateToMe : void 0,
          includeColdStorageClips: !0,
          perPage: 25,
          sort: _v4?.sortBy
        }
      } : null, [_v3, _v4, _v6, _v2, _v9, _v7, _v1, _v8.flattenPrivateToMe, _v0]), {
        revalidateOnFocus: !1,
        revalidateFirstPage: !1,
        errorRetryCount: 0
      });
    return {
      data: _v10,
      error: _v11,
      isLoading: _v12,
      setSize: _v13,
      size: _v14
    };
  }], 0);
}