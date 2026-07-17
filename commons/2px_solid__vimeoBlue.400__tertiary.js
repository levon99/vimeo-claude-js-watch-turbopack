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
    _v13 = _v0.i(0);
  let _v14 = {
    outline: "2px solid",
    outlineColor: "vimeoBlue.400"
  };
  var _v15 = _v0.i(0),
    _v16 = _v0.i(474);
  let _v17 = () => {
      let _v0 = `screen and (min-width: ${_v15.bokehTheme.breakpoints.md})`;
      return (0, _v16.useMediaQueryVisibility)(_v0);
    },
    _v18 = {
      borderRadius: (0, _v11.rem)(6),
      minWidth: (0, _v11.rem)(72)
    },
    _v19 = {
      bottom: (0, _v11.rem)(3),
      right: (0, _v11.rem)(3),
      fontSize: (0, _v11.rem)(10),
      padding: "xs",
      borderRadius: "xs"
    },
    _v20 = () => ({
      responsiveDesign: _v17() ? {
        footer: {
          closeButtonProps: {
            variant: "tertiary"
          }
        }
      } : {
        footer: {
          closeButtonProps: {
            variant: "secondary"
          },
          commonButtonProps: {
            w: "100%"
          },
          containerProps: {
            borderTop: `${(0, _v11.rem)(1)} solid`,
            borderColor: "stroke",
            flexDirection: "column-reverse"
          }
        }
      }
    });
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = {
      ADD_VIDEO_TO_SHOWCASE: "add_video_to_showcase",
      CREATE_REVIEW_LINK: "create_review_link",
      SET_SHOWCASE_FEATURED_CONTENT: "set_showcase_featured_content",
      VIDEO_FILE_TRANSFER: "video_file_transfer"
    },
    _v25 = {
      ASC: "asc",
      DESC: "desc"
    },
    _v26 = {
      LIST: "LIST_LAYOUT",
      GRID: "GRID_LAYOUT"
    },
    _v27 = {
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
    _v28 = {
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
  _v0.s(["AddVideoSortOption", 0, _v27, "FeaturedContentSortOption", 0, _v28, "LAYOUT", 0, _v26, "SortDirection", 0, _v25, "VideoListModalType", 0, _v24], 0);
  let _v29 = {
    closeVideoModal: () => void 0,
    showVideoFilter: () => !0,
    layout: _v26.LIST,
    loadMoreErrorVisibility: void 0,
    modalConfig: {},
    patchErrorVisibility: void 0,
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
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = (0, _v11.rem)(640),
    _v34 = (0, _v11.rem)(300),
    _v35 = {
      unlisted: {
        title: (0, _v32.translate)({
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
        title: (0, _v32.translate)({
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
        description: (0, _v32.translate)({
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
        title: (0, _v32.translate)({
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
        description: (0, _v32.translate)({
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
        title: (0, _v32.translate)({
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
        title: (0, _v32.translate)({
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
        title: (0, _v32.translate)({
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
        title: (0, _v32.translate)({
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
        title: (0, _v32.translate)({
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
        description: (0, _v32.translate)({
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
    _v36 = "3.4.12",
    _v37 = "radio",
    _v38 = "checkbox",
    _v39 = "vlm_lay",
    _v40 = {
      [_v26.LIST]: {
        name: "list",
        Icon: _v31.ListUl,
        tooltipText: (0, _v32.translate)({
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
      [_v26.GRID]: {
        name: "grid",
        Icon: _v30.GridView,
        tooltipText: (0, _v32.translate)({
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
    _v41 = ["title", "description", "tags"],
    _v42 = {
      title: {
        label: (0, _v32.translate)({
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
        label: (0, _v32.translate)({
          singular: "Description",
          dictionary: {
            es: {
              singular: "Descripción"
            },
            "de-DE": {
              singular: "Beschreibung"
            },
            "ja-JP": {
              singular: "概要"
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
        label: (0, _v32.translate)({
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
    _v43 = {
      titleAsc: {
        sortDirection: _v25.ASC,
        sortBy: _v27.ALPHABETICAL,
        text: (0, _v32.translate)({
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
        sortDirection: _v25.DESC,
        sortBy: _v27.ALPHABETICAL,
        text: (0, _v32.translate)({
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
        sortDirection: _v25.DESC,
        sortBy: _v27.DATE,
        text: (0, _v32.translate)({
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
      addedAsc: {
        sortDirection: _v25.ASC,
        sortBy: _v27.DATE,
        text: (0, _v32.translate)({
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
        sortDirection: _v25.DESC,
        sortBy: _v27.LAST_USER_ACTION_EVENT_DATE,
        text: (0, _v32.translate)({
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
      modifiedAsc: {
        sortDirection: _v25.ASC,
        sortBy: _v27.LAST_USER_ACTION_EVENT_DATE,
        text: (0, _v32.translate)({
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
    _v44 = {
      titleAsc: {
        sortDirection: _v25.ASC,
        sortBy: _v27.ALPHABETICAL,
        text: (0, _v32.translate)({
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
        sortDirection: _v25.DESC,
        sortBy: _v27.ALPHABETICAL,
        text: (0, _v32.translate)({
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
        sortDirection: _v25.DESC,
        sortBy: _v27.DATE,
        text: (0, _v32.translate)({
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
      addedAsc: {
        sortDirection: _v25.ASC,
        sortBy: _v27.DATE,
        text: (0, _v32.translate)({
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
  _v25.ASC, _v27.ALPHABETICAL, (0, _v32.translate)({
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
  }), _v25.DESC, _v27.ALPHABETICAL, (0, _v32.translate)({
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
  }), _v25.DESC, _v27.DATE, (0, _v32.translate)({
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
  }), _v25.ASC, _v27.DATE, (0, _v32.translate)({
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
  }), _v25.DESC, _v27.COMMENTS, (0, _v32.translate)({
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
  }), _v25.DESC, _v27.LIKES, (0, _v32.translate)({
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
  let _v45 = {
      [_v28.ALPHABETICAL_ASC]: {
        sortDirection: _v25.ASC,
        sortBy: _v28.ALPHABETICAL,
        text: (0, _v32.translate)({
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
      [_v28.ALPHABETICAL_DESC]: {
        sortDirection: _v25.DESC,
        sortBy: _v28.ALPHABETICAL,
        text: (0, _v32.translate)({
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
      [_v28.NEWEST]: {
        sortDirection: _v25.DESC,
        sortBy: _v28.DATE,
        text: (0, _v32.translate)({
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
      [_v28.OLDEST]: {
        sortDirection: _v25.ASC,
        sortBy: _v28.DATE,
        text: (0, _v32.translate)({
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
      [_v28.LIKES]: {
        sortDirection: void 0,
        sortBy: _v28.LIKES,
        text: (0, _v32.translate)({
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
      [_v28.PLAYS]: {
        sortDirection: void 0,
        sortBy: _v28.PLAYS,
        text: (0, _v32.translate)({
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
      [_v28.COMMENTS]: {
        sortDirection: void 0,
        sortBy: _v28.COMMENTS,
        text: (0, _v32.translate)({
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
      [_v28.MANUAL]: {
        sortDirection: void 0,
        sortBy: _v28.MANUAL,
        text: (0, _v32.translate)({
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
      [_v28.MODIFIED_ASC]: {
        sortDirection: _v25.ASC,
        sortBy: _v28.MODIFIED,
        text: (0, _v32.translate)({
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
      [_v28.MODIFIED_DESC]: {
        sortDirection: _v25.DESC,
        sortBy: _v28.MODIFIED,
        text: (0, _v32.translate)({
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
      }
    },
    _v46 = "root",
    _v47 = "team_library",
    _v48 = "live_events",
    _v49 = (0, _v32.translate)({
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
    _v50 = (0, _v32.translate)({
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
    _v51 = (0, _v32.translate)({
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
    _v52 = (0, _v32.translate)({
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
    }),
    _v53 = {
      itemListData: [],
      navigationStack: ["root"],
      showFolderView: !1,
      isAtRoot: !0,
      isLiveEventView: !1
    },
    _v54 = (0, _v21.create)()((0, _v23.immer)((0, _v22.devtools)(_v0 => ({
      commonStore: {
        ..._v29,
        actions: {
          resetStore: () => _v0(_v0 => {
            Object.keys(_v29).forEach(_v0 => {
              _v0.commonStore[_v0] = _v29[_v0];
            });
          }),
          setCloseVideoModal: _v0 => _v0(_v0 => {
            _v0.commonStore.closeVideoModal = _v0;
          }),
          setLoadMoreErrorVisibility: _v0 => _v0(_v0 => {
            _v0.commonStore.loadMoreErrorVisibility = _v0;
          }),
          setPatchErrorVisibility: _v0 => _v0(_v0 => {
            _v0.commonStore.patchErrorVisibility = _v0;
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
        ..._v53,
        actions: {
          resetItemListStore: () => _v0(_v0 => {
            Object.keys(_v53).forEach(_v0 => {
              _v0.itemListStore[_v0] = _v53[_v0];
            });
          }),
          setItemListData: _v0 => _v0(_v0 => {
            _v0.itemListStore.itemListData = _v0;
          }),
          pushNavigation: _v0 => _v0(_v0 => {
            _v0 === _v48 ? _v0.itemListStore.isLiveEventView = !0 : _v0.itemListStore.isLiveEventView = !1, _v0.itemListStore.navigationStack.push(_v0), _v0.itemListStore.isAtRoot = !1;
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
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ({
      setVisibility: _v0,
      text: _v1,
      visibility: _v2
    }) => _v2 ? (0, _v1.jsx)(_v57.Box, {
      px: "lg",
      py: "sm",
      children: (0, _v1.jsx)(_v55.Alert, {
        status: "error",
        size: "sm",
        onClose: () => _v0(!1),
        children: (0, _v1.jsx)(_v56.AlertDescription, {
          children: (0, _v1.jsx)(_v58.Text, {
            variant: "heading-xs",
            children: _v1
          })
        })
      })
    }) : null,
    _v60 = () => {
      let _v0 = _v54(_v0 => _v0.commonStore.loadMoreErrorVisibility),
        _v1 = _v54(_v0 => _v0.commonStore.actions.setLoadMoreErrorVisibility);
      return (0, _v1.jsx)(_v59, {
        setVisibility: _v1,
        text: (0, _v32.translate)({
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
    _v61 = () => {
      let _v0 = _v54(_v0 => _v0.commonStore.modalConfig.components.PatchErrorAlert),
        _v1 = _v54(_v0 => _v0.commonStore.modalConfig.components.VideoLimitErrorAlert);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v60, {}), (0, _v1.jsx)(_v0, {}), _v1 && (0, _v1.jsx)(_v1, {})]
      });
    };
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v63.Flex, {
      gap: "xs",
      direction: "column",
      justify: "center",
      align: "center",
      h: "100%",
      ..._v1,
      children: _v0
    }),
    _v66 = () => {
      let {
          closeVideoModal: _v0,
          actions: {
            resetStore: _v1
          }
        } = _v54(_v0 => _v0.commonStore),
        _v2 = _v54(_v0 => _v0.itemListStore.actions.resetItemListStore),
        _v3 = () => {
          _v1(), _v2();
        };
      return {
        handleModalClose: () => {
          _v0(), _v3();
        },
        resetStores: _v3
      };
    },
    _v67 = ({
      showCTA: _v0
    }) => {
      let {
        handleModalClose: _v1
      } = _v66();
      return (0, _v1.jsxs)(_v65, {
        children: [(0, _v1.jsx)(_v64.CircleExclamation, {
          boxSize: "xs"
        }), (0, _v1.jsx)(_v58.Text, {
          variant: "heading-xs",
          children: (0, _v32.translate)({
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
        }), (0, _v1.jsx)(_v58.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v32.translate)({
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
        }), _v0 && (0, _v1.jsxs)(_v63.Flex, {
          direction: "column",
          gap: "xs",
          children: [(0, _v1.jsx)(_v62.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => window.location.reload(),
            children: (0, _v32.translate)({
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
          }), (0, _v1.jsx)(_v62.Button, {
            size: "sm",
            variant: "tertiary",
            onClick: _v1,
            children: (0, _v32.translate)({
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
    },
    _v68 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v63.Flex, {
      direction: "column",
      h: (0, _v11.rem)(416),
      gap: "sm",
      ..._v1,
      children: _v0
    }),
    _v69 = () => (0, _v1.jsx)(_v6.ModalBody, {
      children: (0, _v1.jsx)(_v68, {
        h: (0, _v11.rem)(644),
        children: (0, _v1.jsx)(_v67, {
          showCTA: !0
        })
      })
    }),
    _v70 = ({
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
        } = _v20(),
        {
          closeVideoModal: _v4,
          modalConfig: {
            components: {
              Footer: _v5,
              Header: _v6,
              VideoList: _v7
            }
          }
        } = _v54(_v0 => _v0.commonStore),
        {
          handleModalContentKeyDown: _v8,
          ..._v9
        } = (() => {
          let _v0 = (0, _v13.useRef)(null),
            [_v1, _v2] = (0, _v13.useState)(!1),
            _v3 = (0, _v13.useCallback)(_v0 => {
              _v0.ctrlKey && "END" === _v0.key.toUpperCase() && _v0.current && _v0.current !== document.activeElement && (_v0.preventDefault(), _v0.current.focus(), _v2(!0));
            }, []);
          return {
            getFooterFocusStyles: (0, _v13.useCallback)(() => _v1 ? _v14 : {}, [_v1]),
            handleModalContentKeyDown: _v3,
            cancelButtonRef: _v0
          };
        })();
      return (0, _v1.jsxs)(_v5.Modal, {
        isOpen: _v0,
        onClose: _v4,
        closeOnOverlayClick: !1,
        children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v7.ModalContent, {
          minH: _v34,
          maxW: _v33,
          onKeyDown: _v8,
          children: (0, _v1.jsxs)(_v12.ErrorBoundary, {
            errorPage: _v69,
            children: [(0, _v1.jsx)(_v9.ModalHeader, {
              borderBottom: `${(0, _v11.rem)(1)} solid`,
              borderColor: "stroke",
              pb: "md",
              gap: "md",
              children: (0, _v1.jsx)(_v6, {})
            }), (0, _v1.jsx)(_v61, {}), (0, _v1.jsx)(_v6.ModalBody, {
              children: (0, _v1.jsx)(_v68, {
                children: (0, _v1.jsx)(_v7, {})
              })
            }), (0, _v1.jsx)(_v8.ModalFooter, {
              ..._v3,
              children: (0, _v1.jsx)(_v5, {
                onSuccess: _v1,
                onCancel: _v2,
                ..._v9
              })
            })]
          })
        })]
      });
    };
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = {
      video_card_locked_video_button: "locked_video",
      video_list_locked_video_button: "locked_video"
    },
    _v75 = (0, _v13.createContext)(null),
    _v76 = () => {
      let _v0 = (0, _v13.useContext)(_v75);
      if (!_v0) throw Error("useOpenLockedVideoStoragePaywall must be used within StorageLimitPaywallProvider");
      return _v0;
    },
    _v77 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v73.useViewer)(),
        {
          trackColdStorageUxClicked: _v2
        } = (0, _v71.useColdStorageTracking)(),
        [_v3, _v4] = (0, _v13.useState)(!1),
        [_v5, _v6] = (0, _v13.useState)("list"),
        _v7 = "list" === _v5 ? "video_list_locked_video_button" : "video_card_locked_video_button",
        _v8 = "list" === _v5 ? "video_list" : "video_card",
        _v9 = (0, _v13.useCallback)(_v0 => {
          let _v1 = _v74["list" === _v0 ? "video_list_locked_video_button" : "video_card_locked_video_button"];
          _v1 && _v2({
            element: _v1
          }), _v6(_v0), _v4(!0);
        }, [_v2]),
        _v10 = (0, _v13.useCallback)(() => {
          _v4(!1);
        }, []),
        _v11 = (0, _v13.useMemo)(() => _v3 && _v1?.apiUrl ? (0, _v1.jsx)(_v72.default, {
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
      return (0, _v1.jsxs)(_v75.Provider, {
        value: _v9,
        children: [_v0, _v11]
      });
    },
    _v78 = (0, _v13.forwardRef)((_v0, _v1) => {
      let {
          responsiveDesign: {
            footer: {
              commonButtonProps: _v2
            }
          }
        } = _v20(),
        _v3 = {
          ..._v2,
          ..._v0
        };
      return (0, _v1.jsx)(_v62.Button, {
        ..._v3,
        ref: _v1,
        children: _v0.children
      });
    });
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  let _v93 = new class {
      contexts = {};
      init() {
        return this;
      }
      withTeamCtx(_v0) {
        return this.addContext((0, _v87.buildTeamBpContextFromTeamUser)(_v0)), this;
      }
      withViewCtx(_v0) {
        return this.addContext((0, _v90.buildViewBpContext)(_v0 ?? {
          view_type: "impression",
          feature: null
        })), this;
      }
      withActionCtx(_v0) {
        return this.addContext((0, _v83.buildActionBpContext)(_v0 ?? {
          action_type: "click",
          feature: null
        })), this;
      }
      withCollectionCtx(_v0) {
        return this.addContext((0, _v84.buildCollectionBpContext)(_v0 ?? {
          entity_id: 0,
          collection_privacy: null,
          number_of_videos: null,
          collection_embed_privacy: null,
          is_seo_on: null
        })), this;
      }
      withWebCtx(_v0) {
        let _v1 = {
          referrer_page_name: null,
          referrer: document.referrer,
          path: window.location.pathname,
          copy: null,
          location: null,
          target: null,
          target_path: null,
          ..._v0
        };
        return this.addContext((0, _v91.buildWebBpContext)(_v1)), this;
      }
      withProductAnalyticsCtx(_v0) {
        let _v1 = {
          device_type: (0, _v82.default)(),
          entity_type: null,
          element: null,
          flow: null,
          modal_name: null,
          copy: null,
          is_user_facing_data: !1,
          scrolling_percentage: null,
          cta_location_id: null,
          ..._v0
        };
        return this.addContext((0, _v86.buildProductAnalyticsBpContext)(_v1)), this;
      }
      withThirdPartyIntegrationCtx(_v0) {
        return this.addContext((0, _v88.buildThirdPartyIntegrationBpContext)(_v0 ?? {
          is_integration: !1,
          integration_id: null,
          integration_name: null,
          managed_user_id: null,
          is_partner: null
        })), this;
      }
      withLiveEventCtx(_v0) {
        let _v1 = {
          recurring_live_event_id: "0",
          audience_type: null,
          encoder_type: null,
          event_privacy: null,
          is_guest_speaker: null,
          lead_source: null,
          live_feature: null,
          live_production_method: null,
          live_status: null,
          live_event_id: "0",
          live_event_type: "live_event",
          ..._v0
        };
        return this.addContext((0, _v85.buildLiveBpContext)(_v1)), this;
      }
      withVideoCtx(_v0) {
        let _v1 = {
          video_id: 0,
          content_rating: null,
          duration: null,
          is_auto_cc_enabled: null,
          is_demo: null,
          orientation: null,
          resolution: null,
          title: null,
          upload_method_api: null,
          upload_method_api_id: null,
          video_embed_privacy: null,
          video_height: null,
          video_owner_id: null,
          video_privacy: null,
          video_width: null,
          has_embed_available: null,
          video_categories: null,
          video_version_id: null,
          existing_like_counts: null,
          existing_comment_counts: null,
          existing_view_counts: null,
          listed_categories_counts: null,
          has_like_available: null,
          has_watch_later_available: null,
          has_share_available: null,
          viewer_home_session_id: null,
          ..._v0
        };
        return this.addContext((0, _v89.buildVideoBpContext)(_v1)), this;
      }
      send({
        eventName: _v0,
        version: _v1,
        additionalFields: _v2
      }) {
        (0, _v92.sendBpEventWithContexts)(_v0, this.contexts, _v1, _v2), this.contexts = {};
      }
      addResourceContext(_v0) {
        this.addContext(_v0);
      }
      addContext(_v0) {
        this.contexts = {
          ...this.contexts,
          ..._v0
        };
      }
    }(),
    _v94 = ({
      featureName: _v0,
      featureValue: _v1,
      newToggledOn: _v2,
      newToggledOff: _v3
    }) => ({
      collection_type: "showcase",
      feature_name: _v0 ?? null,
      feature_value: _v1 ?? null,
      new_toggled_on: _v2 ?? null,
      new_toggled_off: _v3 ?? null
    }),
    _v95 = () => {
      let _v0 = (0, _v13.useContext)(_v81.ViewerContext),
        {
          resourceId: _v1,
          selectedItemURIs: _v2
        } = _v54(_v0 => _v0.commonStore),
        _v3 = _v93.init(),
        _v4 = ({
          productAnalyticsCtxFields: _v0,
          eventName: _v1,
          additionalFields: _v2,
          videoCtxFields: _v3,
          liveCtxFields: _v4
        }) => {
          _v3 && (_v3.withActionCtx().withTeamCtx(_v0?.teamUser).withThirdPartyIntegrationCtx().withWebCtx({
            page_name: "showcase_manager"
          }).withCollectionCtx({
            is_seo_on: null,
            entity_id: _v1,
            collection_privacy: null,
            number_of_videos: null,
            collection_embed_privacy: null
          }), _v3.withProductAnalyticsCtx({
            feature: "showcases",
            location: "modal",
            product: "collections",
            entity_type: "showcase",
            element: "button",
            modal_name: "add_video_modal",
            ..._v0
          }), _v3 && _v3.withVideoCtx(_v3 ?? {}), _v4 && _v3.withLiveEventCtx(_v4 ?? {}), _v3.send({
            eventName: _v1,
            version: 2,
            additionalFields: _v2 ?? _v94({})
          }));
        };
      return {
        sendAddVideoModalClickEvents: (_v0, _v1, _v2) => {
          _v4({
            productAnalyticsCtxFields: {
              copy: _v1
            },
            eventName: _v0,
            additionalFields: _v94(_v2 ?? {})
          });
        },
        sendAddVideosOnSuccessEvent: () => {
          _v2.forEach(_v0 => {
            _v4({
              eventName: "vimeo.add_to_collection",
              productAnalyticsCtxFields: {
                flow: "showcase_manage",
                entity_type: "video"
              },
              videoCtxFields: {
                video_id: Number(_v0.split("/")[2]),
                video_privacy: null,
                video_embed_privacy: null
              }
            });
          });
        }
      };
    };
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0);
  let _v106 = _v0 => (0, _v1.jsx)(_v105.Icon, {
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
    _v107 = (0, _v13.memo)(({
      fieldKey: _v0,
      label: _v1,
      value: _v2,
      isChecked: _v3,
      onToggle: _v4
    }) => (0, _v1.jsx)(_v57.Box, {
      _hover: {
        backgroundColor: "fill-component-hover",
        borderRadius: "menuList"
      },
      px: "xs",
      children: (0, _v1.jsx)(_v97.Checkbox, {
        width: "100%",
        px: "sm",
        borderRadius: "sm",
        size: "md",
        py: "sm",
        isChecked: _v3,
        onChange: () => _v4(_v0),
        value: _v2,
        children: (0, _v1.jsx)(_v98.HStack, {
          spacing: "sm",
          children: (0, _v1.jsx)(_v58.Text, {
            variant: "body-md",
            children: _v1
          })
        })
      })
    })),
    _v108 = () => {
      let _v0,
        _v1,
        _v2,
        {
          filterOptions: _v3,
          selectedFilters: _v4,
          handleFilterChange: _v5
        } = (_v0 = _v54(_v0 => _v0.commonStore.searchFilterFields), _v1 = _v54(_v0 => _v0.commonStore.actions.setSearchFilterFields), _v2 = (0, _v13.useCallback)(_v0 => {
          let _v1 = new Set(new Set(_v0).has(_v0) ? _v0.filter(_v0 => _v0 !== _v0) : [..._v0, _v0]);
          _v1(_v41.filter(_v0 => _v1.has(_v0)));
        }, [_v0, _v1]), {
          filterOptions: (0, _v13.useMemo)(() => _v41.map(_v0 => [_v0, _v42[_v0]]), []),
          selectedFilters: _v0,
          handleFilterChange: _v2
        }),
        _v6 = (0, _v13.useCallback)(_v0 => _v5(_v0), [_v5]),
        _v7 = _v4.length ? _v106 : _v104.Filter;
      return (0, _v1.jsxs)(_v100.Menu, {
        placement: "bottom-end",
        closeOnSelect: !1,
        children: [(0, _v1.jsx)(_v101.MenuButton, {
          as: _v99.IconButton,
          icon: (0, _v1.jsx)(_v7, {
            boxSize: "2xs"
          }),
          "aria-label": (0, _v32.translate)({
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
        }), (0, _v1.jsx)(_v103.MenuList, {
          children: (0, _v1.jsx)(_v102.MenuGroup, {
            title: (0, _v32.translate)({
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
            as: _v58.Text,
            variant: "heading-xs",
            borderTopRadius: "menuList",
            children: _v3.map(([_v0, _v1]) => (0, _v1.jsx)(_v107, {
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
    _v109 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.itemListData),
        _v1 = _v54(_v0 => _v0.itemListStore.isAtRoot),
        _v2 = _v54(_v0 => _v0.commonStore.searchQuery);
      return !_v0?.length || _v1 && !_v2;
    },
    _v110 = () => {
      let _v0 = _v54(_v0 => _v0.commonStore.selectedItemURIs),
        _v1 = _v54(_v0 => _v0.commonStore.actions.setSelectedItemURIs),
        _v2 = _v54(_v0 => _v0.commonStore.actions.setVideoLimitErrorVisibility),
        _v3 = _v54(_v0 => _v0.commonStore.modalConfig.additionalConfig.singleSelect),
        _v4 = (0, _v13.useCallback)(() => _v1(new Set()), [_v1]),
        _v5 = (0, _v13.useCallback)(_v0 => {
          if (_v3) return;
          let _v1 = new Set(_v0);
          _v1.delete(_v0), _v1(_v1);
        }, [_v0, _v1, _v3]),
        _v6 = (0, _v13.useCallback)(_v0 => {
          if (_v3) {
            let _v0 = [..._v0][0];
            _v1(_v0 ? new Set([_v0]) : new Set());
          } else _v1(new Set([..._v0, ..._v0]));
        }, [_v0, _v1, _v3]),
        _v7 = (0, _v13.useCallback)(_v0 => {
          _v3 ? _v1(new Set([_v0])) : _v1(new Set([..._v0, _v0]));
        }, [_v0, _v1, _v3]);
      return (0, _v13.useEffect)(() => {
        _v3 || _v2(_v0.size > 100);
      }, [_v0, _v2, _v3]), {
        deselectAllItems: _v4,
        deselectItem: _v5,
        selectItem: _v7,
        selectItems: _v6
      };
    },
    _v111 = () => {
      let _v0 = _v54(_v0 => _v0.commonStore.selectedItemURIs),
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
            } = _v54(_v0 => _v0.commonStore),
            _v3 = _v54(_v0 => _v0.itemListStore.showFolderView),
            _v4 = _v109(),
            {
              deselectAllItems: _v5,
              selectItems: _v6
            } = _v110(),
            _v7 = (0, _v13.useCallback)(() => _v6(_v0), [_v0, _v6]),
            _v8 = !!_v1.size,
            _v9 = _v8 && _v2?.length === _v1.size,
            _v10 = (0, _v13.useCallback)(() => {
              _v8 ? _v5() : _v7();
            }, [_v8, _v5, _v7]);
          return {
            allItemsAreSelected: _v9,
            anyItemsAreSelected: _v8,
            isBulkSelectDisabled: () => _v3 ? _v4 && !_v1.size : !_v2.length && !_v1.size,
            onBulkSelectChange: _v10
          };
        })();
      return (0, _v1.jsx)(_v97.Checkbox, {
        isDisabled: _v3(),
        size: "md",
        w: "fit-content",
        isChecked: _v2,
        id: "bulk-select-checkbox",
        "aria-label": (0, _v32.translate)({
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
        children: (0, _v32.translate)({
          singular: "{COUNT} selected",
          replacements: {
            COUNT: _v0.size
          },
          dictionary: {
            es: {
              singular: "{COUNT} seleccionadas"
            },
            "de-DE": {
              singular: "{COUNT} ausgewählt"
            },
            "fr-FR": {
              singular: "{COUNT} sélectionnés"
            },
            "ja-JP": {
              singular: "{COUNT} 個選択されています"
            },
            "ko-KR": {
              singular: "{COUNT}개 선택됨"
            },
            "pt-BR": {
              singular: "{COUNT} selecionadas"
            },
            "zh-CN": {
              singular: "已选择 {COUNT} 个"
            }
          }
        })
      });
    };
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0);
  let _v120 = ["isPrivateToUser", "metadata.connections.ancestorPath.canUpload", "metadata.connections.ancestorPath.name", "metadata.connections.ancestorPath.uri", "metadata.connections.folders.total", "metadata.connections.parentFolder.uri", "metadata.interactions.addSubfolder.canAddSubfolders", "metadata.interactions.edit.uri", "name", "privacy.view", "uri"],
    _v121 = ["type", "video.uri", "video.name", "video.manageLink", "video.createdTime", "video.modifiedTime", "video.lastUserActionEventDate", "video.pictures", "video.link", "video.duration", "video.disabledProperties", "video.isColdStorage", "video.privacy.view", "video.privacy.originalView", "video.user.name", "video.user.pictures", "video.configUrl", "folder.uri", "folder.name", "folder.link", "folder.createdTime", "folder.modifiedTime", "folder.lastUserActionEventDate", "folder.useParentSlackSettings", "folder.metadata.connections.items.total", "folder.settings.color", "liveEvent.status", "liveEvent.metadata.connections.liveVideo.status", "liveEvent.eventType", "liveEvent.nextOccurrenceTime", "liveEvent.title", "liveEvent.uri", "liveEvent.createdTime", "liveEvent.pictures", "liveEvent.streamPrivacy", "liveEvent.metadata.connections.preLiveVideo.uri", "liveEvent.metadata.connections.liveVideo.uri", "liveEvent.hasRegistration"],
    _v122 = ["status", "metadata.connections.liveVideo.status", "eventType", "nextOccurrenceTime", "title", "uri", "createdTime", "pictures", "streamPrivacy", "metadata.connections.preLiveVideo.uri", "metadata.connections.liveVideo.uri", "hasRegistration"],
    _v123 = () => {
      let _v0 = _v54(_v0 => _v0.commonStore.resourceOwnerId),
        {
          capabilities: _v1
        } = (0, _v118.useCapability)(["hasVideoLibraryLiveEvents"], _v0),
        {
          contentSpaceEnabled: _v2
        } = (0, _v117.useContentSpaceEnabled)(_v0),
        {
          data: _v3
        } = (0, _v119.useGetUserFoldersPrivateToMe)(() => _v0 && _v2 ? {
          where: {
            userId: _v0,
            ownerId: _v0
          },
          select: _v120
        } : null);
      return {
        data: _v3,
        capabilities: _v1,
        contentSpaceEnabled: _v2
      };
    },
    _v124 = () => {
      let {
        rootCrumb: _v0,
        condensedCrumbs: _v1,
        currentCrumb: _v2,
        popNavigation: _v3,
        crumbs: _v4
      } = (() => {
        let _v0 = _v54(_v0 => _v0.itemListStore.navigationStack),
          _v1 = _v54(_v0 => _v0.itemListStore.actions.popNavigation),
          {
            contentSpaceEnabled: _v2
          } = _v123(),
          _v3 = _v2 ? _v50 : _v52,
          _v4 = _v0.map((_v0, _v1) => _v0 === _v46 ? {
            label: _v49,
            index: _v1
          } : _v0 === _v47 ? {
            label: _v3,
            index: _v1
          } : _v0 === _v48 ? {
            label: (0, _v32.translate)({
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
          _v5 = _v4.shift();
        return {
          rootCrumb: _v5,
          condensedCrumbs: _v4.slice(0, _v4.length - 1),
          currentCrumb: _v4.slice(-1)[0],
          popNavigation: _v1,
          crumbs: _v4
        };
      })();
      return (0, _v1.jsxs)(_v112.Breadcrumb, {
        separator: (0, _v1.jsx)(_v115.ChevronRightSmall, {}),
        children: [_v0 && (0, _v1.jsx)(_v112.BreadcrumbItem, {
          h: (0, _v11.rem)(28),
          children: (0, _v1.jsx)(_v113.BreadcrumbLink, {
            color: _v4.length ? "text-secondary" : "text-primary",
            cursor: "pointer",
            onClick: () => _v3(_v0?.index),
            mt: (0, _v11.rem)(3),
            tabIndex: 0,
            onKeyDown: _v0 => {
              _v0?.key === "Enter" && _v3(_v0?.index);
            },
            children: _v0.label
          })
        }), !!_v1.length && (0, _v1.jsx)(_v112.BreadcrumbItem, {
          children: (0, _v1.jsxs)(_v100.Menu, {
            children: [(0, _v1.jsx)(_v101.MenuButton, {
              as: _v99.IconButton,
              "aria-label": "more folders",
              icon: (0, _v1.jsx)(_v116.EllipsisH, {}),
              size: "xs",
              variant: "tertiary",
              mt: (0, _v11.rem)(3)
            }), (0, _v1.jsx)(_v103.MenuList, {
              children: _v1.map(_v0 => (0, _v1.jsx)(_v114.MenuItem, {
                onClick: () => _v3(_v0?.index),
                children: _v0?.label || ""
              }, `${_v0?.label}-${_v0?.index}`))
            })]
          })
        }), _v2 && (0, _v1.jsx)(_v112.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v113.BreadcrumbLink, {
            color: "text-primary",
            cursor: "default",
            mt: (0, _v11.rem)(3),
            children: _v2?.label
          })
        })]
      });
    };
  var _v125 = _v0.i(0),
    _v126 = _v0.i(0);
  let _v127 = () => {
    let {
      isDisabled: _v0,
      onLayoutToggleClick: _v1,
      targetLayoutConfig: {
        Icon: _v2,
        tooltipText: _v3
      }
    } = (() => {
      let _v0 = _v54(_v0 => _v0.commonStore.videoItems),
        _v1 = _v54(_v0 => _v0.commonStore.layout),
        {
          setLayout: _v2
        } = (() => {
          let {
              layoutLSKey: _v0,
              defaultLayout: _v1
            } = _v54(_v0 => _v0.commonStore.modalConfig.additionalConfig),
            [_v2, _v3] = (0, _v126.default)(_v0, _v1 ?? _v26.LIST),
            _v4 = _v54(_v0 => _v0.commonStore.actions.setLayout),
            _v5 = _v54(_v0 => _v0.commonStore.modalConfig.hooks?.useBpEventService),
            {
              sendAddVideoModalClickEvents: _v6
            } = _v5?.() ?? {};
          return (0, _v13.useEffect)(() => _v4(_v2), []), {
            setLayout: (0, _v13.useCallback)(_v0 => {
              _v4(_v0), _v6?.("vimeo.showcase_add_video_modal_layout", null, {
                featureName: "layout_update",
                featureValue: _v0
              }), _v3(_v0);
            }, [_v6, _v4, _v3])
          };
        })(),
        _v3 = _v1 === _v26.LIST ? _v26.GRID : _v26.LIST,
        _v4 = _v54(_v0 => _v0.itemListStore.showFolderView),
        _v5 = _v109();
      return {
        isDisabled: _v4 ? _v5 : !_v0?.length,
        onLayoutToggleClick: () => _v2(_v3),
        targetLayoutConfig: _v40[_v3]
      };
    })();
    return (0, _v1.jsx)(_v125.Tooltip, {
      label: _v3,
      placement: "top-end",
      isDisabled: _v0,
      children: (0, _v1.jsx)(_v99.IconButton, {
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
  var _v128 = _v0.i(0),
    _v129 = _v0.i(0);
  let _v130 = ({
      sortOptions: _v0,
      selectedOptionText: _v1,
      isDisabled: _v2,
      onSortChange: _v3,
      currentSortKey: _v4,
      placement: _v5 = "bottom-end"
    }) => (0, _v1.jsxs)(_v100.Menu, {
      placement: _v5,
      children: [(0, _v1.jsx)(_v101.MenuButton, {
        as: _v62.Button,
        variant: "tertiary",
        rightIcon: (0, _v1.jsx)(_v129.SortSmall, {
          boxSize: "2xs"
        }),
        isDisabled: _v2,
        size: "sm",
        children: _v1
      }), (0, _v1.jsx)(_v103.MenuList, {
        children: (0, _v1.jsx)(_v102.MenuGroup, {
          title: (0, _v32.translate)({
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
          as: _v58.Text,
          variant: "heading-xs",
          borderTopRadius: "menuList",
          children: Object.entries(_v0).map(([_v0, _v1]) => (0, _v1.jsx)(_v128.MenuItemOption, {
            onClick: () => _v3(_v0, _v1.sortBy, _v1.sortDirection),
            isChecked: _v4 === _v0,
            children: _v1.text
          }, _v0))
        })
      })]
    }),
    _v131 = () => {
      let _v0,
        _v1 = _v54(_v0 => _v0.commonStore.sortValues),
        {
          isLiveEventView: _v2
        } = _v54(_v0 => _v0.itemListStore),
        _v3 = _v109(),
        {
          handleSortChange: _v4
        } = (() => {
          let _v0 = _v54(_v0 => _v0.commonStore.actions.setSort),
            _v1 = _v54(_v0 => _v0.commonStore.modalConfig.hooks?.useBpEventService),
            {
              sendAddVideoModalClickEvents: _v2
            } = _v1?.() ?? {},
            [_v3, _v4] = (0, _v126.default)("vlm_sort_avm", "addedDesc");
          return (0, _v13.useEffect)(() => {
            let _v0 = _v3;
            _v43?.[_v0] || _v4(_v0 = "addedDesc");
            let {
              sortDirection: _v1,
              sortBy: _v2
            } = _v43[_v0];
            _v0(_v0, _v2, _v1);
          }, [_v3, _v4, _v0]), {
            handleSortChange: (_v0, _v1, _v2) => {
              _v2 && (_v0(_v0, _v1, _v2), _v2?.("vimeo.showcase_add_video_modal_sort", null, {
                featureName: "sorting_type_update",
                featureValue: _v0
              }), _v4(_v0));
            }
          };
        })();
      _v0 = _v2 ? _v44 : _v43;
      let _v5 = _v1.sortKey ? _v0[_v1.sortKey] : void 0,
        _v6 = _v5?.text || _v0?.addedDesc?.text;
      return {
        sortOptions: _v0,
        selectedOptionText: _v6,
        isDisabled: _v3,
        handleSortChange: _v4,
        sortValues: _v1
      };
    },
    _v132 = () => {
      let {
        sortOptions: _v0,
        selectedOptionText: _v1,
        isDisabled: _v2,
        handleSortChange: _v3,
        sortValues: _v4
      } = _v131();
      return (0, _v1.jsx)(_v130, {
        sortOptions: _v0,
        selectedOptionText: _v1,
        isDisabled: _v2,
        onSortChange: _v3,
        currentSortKey: _v4?.sortKey
      });
    },
    _v133 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.showFolderView),
        _v1 = (0, _v96.useIsStaff)();
      return (0, _v1.jsxs)(_v63.Flex, {
        direction: "column",
        gap: "sm",
        children: [_v0 && (0, _v1.jsx)(_v124, {}), (0, _v1.jsxs)(_v63.Flex, {
          justify: "space-between",
          children: [(0, _v1.jsx)(_v111, {}), (0, _v1.jsxs)(_v63.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v132, {}), _v1 && (0, _v1.jsx)(_v108, {}), (0, _v1.jsx)(_v127, {})]
          })]
        })]
      });
    };
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  let _v140 = () => {
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
        let _v0 = _v54(_v0 => _v0.commonStore.actions.setSearchQuery),
          _v1 = _v54(_v0 => _v0.commonStore.searchQuery),
          _v2 = _v54(_v0 => _v0.itemListStore.navigationStack),
          _v3 = _v54(_v0 => _v0.itemListStore.isAtRoot),
          _v4 = _v54(_v0 => _v0.commonStore.videoItems),
          _v5 = _v54(_v0 => _v0.itemListStore.showFolderView),
          _v6 = _v54(_v0 => _v0.itemListStore.itemListData),
          {
            contentSpaceEnabled: _v7
          } = _v123(),
          _v8 = (0, _v13.useRef)(null),
          [_v9, _v10] = (0, _v13.useState)(40),
          _v11 = !_v3 && !_v6.length && !_v1,
          _v12 = _v5 ? _v11 : !_v4.length && !_v1,
          _v13 = !_v3 && _v5 ? (0, _v32.translate)({
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
          }) : (0, _v32.translate)({
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
          _v16 = _v14 ? "object" == typeof _v15 && _v15?.name ? _v15.name : _v15 === _v47 ? _v7 ? _v50 : _v52 : _v15 === _v48 ? _v51 : void 0 : void 0;
        return (0, _v13.useEffect)(() => {
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
      return (0, _v1.jsxs)(_v135.InputGroup, {
        children: [!_v5 && (0, _v1.jsx)(_v136.InputLeftElement, {
          pointerEvents: "none",
          opacity: _v3 ? .4 : 1,
          children: (0, _v1.jsx)(_v139.SearchMagnifier, {
            boxSize: (0, _v11.rem)(20)
          })
        }), _v5 && (0, _v1.jsx)(_v136.InputLeftElement, {
          ref: _v6,
          pointerEvents: "none",
          width: "auto",
          ml: "1",
          children: (0, _v1.jsx)(_v137.Tag, {
            size: "lg",
            borderRadius: (0, _v11.rem)(9),
            children: (0, _v1.jsx)(_v137.TagLabel, {
              isTruncated: !0,
              fontSize: "body-md",
              maxW: (0, _v11.rem)(150),
              children: `${(0, _v32.translate)({
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
        }), (0, _v1.jsx)(_v134.Input, {
          onChange: _v0 => _v2(_v0?.target?.value),
          placeholder: _v1,
          value: _v0,
          disabled: _v3,
          pl: _v7
        }), !!_v0 && (0, _v1.jsx)(_v136.InputRightElement, {
          children: (0, _v1.jsx)(_v138.CloseXCircleFilled, {
            "aria-label": (0, _v32.translate)({
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
    },
    _v141 = ({
      text: _v0
    }) => {
      let _v1 = _v54(_v0 => _v0.commonStore.patchErrorVisibility),
        _v2 = _v54(_v0 => _v0.commonStore.actions.setPatchErrorVisibility);
      return (0, _v1.jsx)(_v59, {
        setVisibility: _v2,
        text: _v0,
        visibility: _v1
      });
    };
  var _v142 = _v0.i(0),
    _v143 = _v0.i(0);
  let _v144 = ({
      badge: _v0,
      duration: _v1,
      pictures: _v2,
      isLiveVideo: _v3,
      isLocked: _v4 = !1,
      lockedTooltipLabel: _v5,
      hasPlayOnHover: _v6 = !0,
      ..._v7
    }) => {
      let _v8 = _v17();
      return _v3 ? (0, _v1.jsx)(_v142.EventCard, {
        actionsMenu: null,
        isLive: "live" === _v0.variant,
        tabIndex: _v8 ? -1 : 0,
        tagText: _v0.text,
        thumbnailSrc: _v2?.uri ? _v2.sizes[3].link : "",
        ..._v7
      }) : (0, _v1.jsx)(_v143.VideoCard, {
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
    _v145 = () => _v54(_v0 => _v0.commonStore.modalConfig.additionalConfig.singleSelect) ? _v37 : _v38;
  var _v146 = _v0.i(0);
  let _v147 = (_v0, _v1) => {
      if (!_v0) return "";
      let _v2 = new Date(_v0);
      return new Intl.DateTimeFormat(_v1 ?? "en", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(_v2);
    },
    _v148 = ({
      isLiveVideo: _v0,
      live: _v1
    }) => {
      let _v2 = _v1?.recurringEvent?.metadata?.connections?.liveVideo?.status === "streaming",
        _v3 = _v1?.recurringEvent?.status,
        _v4 = "";
      return _v0 && (_v4 = (0, _v32.translate)({
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
      }), "ended" === _v3 ? _v4 = (0, _v32.translate)({
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
      }) : _v2 && (_v4 = (0, _v32.translate)({
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
    _v149 = ({
      recurringEvent: _v0
    }) => {
      let _v1 = _v0?.metadata?.connections?.liveVideo?.status === "streaming",
        _v2 = "";
      return _v2 = (0, _v32.translate)({
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
      }), _v1 && (_v2 = (0, _v32.translate)({
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
    _v150 = _v0 => (0, _v32.translate)({
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
    _v151 = (_v0, _v1) => "live" === _v0 && !!_v1 && "done" !== _v1.status,
    _v152 = ({
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
            } = _v110(),
            {
              title: _v5,
              pictures: _v6
            } = _v0,
            {
              badgeText: _v7,
              variant: _v8
            } = (0, _v13.useMemo)(() => _v149({
              recurringEvent: _v0
            }), [_v0]),
            _v9 = (0, _v13.useCallback)(() => {
              _v1 ? _v3(_v2) : _v4(_v2);
            }, [_v1, _v4, _v3, _v2]);
          return {
            title: _v5,
            pictures: _v6,
            badgeText: _v7,
            variant: _v8,
            onGridCardClick: (0, _v13.useCallback)(_v0 => {
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
        _v10 = _v145();
      return (0, _v1.jsx)(_v144, {
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
          fontSize: (0, _v11.rem)(12)
        }
      }, _v7);
    };
  var _v153 = _v0.i(0);
  let _v154 = ({
    folder: _v0
  }) => {
    let _v1 = _v54(_v0 => _v0.commonStore.actions.setSearchQuery),
      _v2 = _v54(_v0 => _v0.itemListStore.actions.pushNavigation),
      _v3 = (0, _v13.useCallback)(() => {
        _v1(""), _v2(_v0);
      }, [_v1, _v2, _v0]);
    return (0, _v1.jsx)(_v153.FolderCard, {
      backgroundColor: _v0?.settings?.color,
      title: _v0.name,
      subtitle: "",
      tagText: _v150(_v0?.metadata?.connections?.items?.total),
      href: "javascript:void(0)",
      onClick: _v3
    }, _v0.uri);
  };
  var _v155 = _v0.i(0),
    _v156 = _v0.i(0);
  let _v157 = () => (0, _v1.jsx)(_v63.Flex, {
      "aria-busy": !0,
      "aria-live": "polite",
      display: "contents",
      wrap: "wrap",
      children: (0, _v1.jsx)(_v1.Fragment, {
        children: [,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v156.ContentCard, {
          href: "javascript:void(0)",
          width: "100%",
          isHoverDisabled: !0,
          children: [(0, _v1.jsx)(_v156.ContentCard.Body, {
            children: (0, _v1.jsx)(_v155.Skeleton, {
              h: "100%",
              borderRadius: "sm"
            })
          }), (0, _v1.jsx)(_v155.Skeleton, {
            variant: "text",
            mt: "xs"
          })]
        }, `loading-state-skeleton-card-grid-${_v1}`))
      })
    }),
    _v158 = (0, _v32.translate)({
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
    _v159 = ({
      video: _v0,
      isSelected: _v1
    }) => {
      let _v2 = _v76(),
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
            } = _v110(),
            {
              configUrl: _v4,
              duration: _v5,
              live: _v6,
              name: _v7,
              pictures: _v8,
              type: _v9,
              uri: _v10
            } = _v0,
            _v11 = _v151(_v9, _v6),
            {
              badgeText: _v12,
              variant: _v13
            } = (0, _v13.useMemo)(() => _v148({
              isLiveVideo: _v11,
              live: _v6
            }), [_v11, _v6]),
            _v14 = (0, _v13.useCallback)(() => {
              _v1 ? _v2(_v10) : _v3(_v10);
            }, [_v1, _v3, _v2, _v10]);
          return {
            configUrl: _v4,
            duration: _v5,
            name: _v7,
            pictures: _v8,
            badgeText: _v12,
            variant: _v13,
            onGridCardClick: (0, _v13.useCallback)(_v0 => {
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
        _v13 = _v145(),
        _v14 = !!_v0.isColdStorage;
      return (0, _v1.jsx)(_v144, {
        badge: {
          text: _v7,
          variant: _v8
        },
        clipId: (_v0 => {
          try {
            return parseInt(_v0?.split("/")[2] ?? "", 10) || 0;
          } catch {
            return 0;
          }
        })(_v9),
        configUrl: _v3 ?? "",
        defaultIconProps: {
          boxSize: "xs"
        },
        duration: (0, _v146.secondsToDisplay)(_v4),
        href: "javascript:void(0)",
        isLiveVideo: _v10,
        isLocked: _v14,
        isSelected: _v1,
        lockedTooltipLabel: _v14 ? _v158 : void 0,
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
          fontSize: (0, _v11.rem)(12)
        }
      }, _v9);
    },
    _v160 = {
      [`@media screen and (min-width: ${_v15.bokehTheme.breakpoints.sm})`]: {
        gridTemplateColumns: `${(0, _v11.rem)(16)} ${(0, _v11.rem)(72)} 7fr 4fr`
      },
      [`@media screen and (min-width: ${_v15.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: `${(0, _v11.rem)(18)} ${(0, _v11.rem)(72)} ${(0, _v11.rem)(210)} ${(0, _v11.rem)(136)} ${(0, _v11.rem)(90)}`
      }
    },
    _v161 = {
      "@media screen and (min-width: 375px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
      },
      [`@media screen and (min-width: ${_v15.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      }
    },
    _v162 = ({
      isLoading: _v0
    }) => {
      let _v1 = _v54(_v0 => _v0.itemListStore.itemListData),
        _v2 = (0, _v13.useMemo)(() => _v1.map(_v0 => _v0?.video && _v0.video?.uri ? (0, _v1.jsx)(_v159, {
          video: _v0.video,
          isSelected: _v0.isSelected
        }, _v0.video.uri) : _v0?.folder && _v0.folder?.uri ? (0, _v1.jsx)(_v154, {
          folder: _v0.folder
        }, _v0.folder.uri) : _v0?.liveEvent?.uri ? (0, _v1.jsx)(_v152, {
          liveEvent: _v0?.liveEvent,
          isSelected: _v0.isSelected,
          liveEventVideoUri: _v0?.liveEventVideoUri ?? ""
        }, _v0.liveEvent.uri) : null), [_v1]);
      return (0, _v1.jsxs)(_v57.Box, {
        w: "100%",
        display: "grid",
        gap: "3",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        sx: _v161,
        children: [_v2, _v0 && (0, _v1.jsx)(_v157, {})]
      });
    };
  function _v163(_v0, _v1) {
    return (0, _v13.useMemo)(() => {
      if (_v0) if ("venue" === _v0.eventType) return _v0.nextOccurrenceTime ? _v147(_v0.nextOccurrenceTime, _v1) : (0, _v32.translate)({
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
      });else return _v0.nextOccurrenceTime ? _v147(_v0.nextOccurrenceTime, _v1) : (0, _v32.translate)({
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
  let _v164 = ({
    liveEvent: _v0,
    locale: _v1
  }) => {
    let _v2 = _v163(_v0, _v1 ?? "en");
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v63.Flex, {
        align: "center",
        children: (0, _v1.jsx)(_v58.Text, {
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
  var _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0);
  let _v168 = ({
    text: _v0,
    color: _v1
  }) => {
    let _v2 = (0, _v13.useRef)(null),
      [_v3, _v4] = (0, _v13.useState)(!1);
    return (0, _v13.useEffect)(() => {
      let {
        current: _v0
      } = _v2;
      _v0 && _v4(_v0.scrollWidth > _v0.clientWidth);
    }, [_v0]), (0, _v1.jsx)(_v125.Tooltip, {
      label: _v0,
      hasArrow: !0,
      isDisabled: !_v3,
      placement: "bottom-start",
      maxW: (0, _v11.rem)(240),
      children: (0, _v1.jsx)(_v58.Text, {
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
  var _v169 = _v0.i(0);
  let _v170 = ({
      recurringEvent: _v0
    }) => {
      let {
        badgeText: _v1,
        variant: _v2
      } = _v149({
        recurringEvent: _v0
      });
      return _v1 ? (0, _v1.jsx)(_v169.Badge, {
        h: (0, _v11.rem)(14),
        marginY: "auto",
        borderRadius: (0, _v11.rem)(6),
        size: "xs",
        variant: _v2,
        children: _v1
      }) : null;
    },
    _v171 = ({
      isLiveVideo: _v0,
      live: _v1
    }) => {
      let {
        badgeText: _v2,
        variant: _v3
      } = _v148({
        isLiveVideo: _v0,
        live: _v1
      });
      return _v2 ? (0, _v1.jsx)(_v169.Badge, {
        h: (0, _v11.rem)(14),
        marginY: "auto",
        borderRadius: (0, _v11.rem)(6),
        size: "xs",
        variant: _v3,
        children: _v2
      }) : null;
    };
  var _v172 = _v0.i(0),
    _v173 = _v0.i(0);
  let _v174 = ({
      duration: _v0,
      isDefaultPicture: _v1,
      thumbnail: _v2,
      isLocked: _v3
    }) => {
      if (!_v2 || _v1) {
        let _v0 = _v0 ? _v173.PlayerFilled : _v172.CameraOnFilled;
        return (0, _v1.jsx)(_v167.ContentRow.DefaultThumbnail, {
          badgeText: _v0,
          badgeSx: _v19,
          ..._v18,
          children: (0, _v1.jsx)(_v0, {
            color: "text-tertiary",
            boxSize: "xs"
          })
        });
      }
      return (0, _v1.jsx)(_v57.Box, {
        fontSize: "body-xs",
        children: (0, _v1.jsx)(_v167.ContentRow.Thumbnail, {
          alt: (0, _v32.translate)({
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
          badgeSx: _v19,
          isLocked: _v3,
          lockIconSize: (0, _v11.rem)(18),
          ..._v18
        })
      });
    },
    _v175 = ({
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
      controlType: _v10 = _v38,
      recurringEvent: _v11,
      ..._v12
    }) => {
      let _v13 = (0, _v165.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
        _v14 = (0, _v1.jsxs)(_v167.ContentRow, {
          listGridColumns: `${(0, _v11.rem)(16)} ${(0, _v11.rem)(72)} 1fr 1fr`,
          sx: _v160,
          isSelected: _v0,
          onClick: _v0 => {
            (_v0.preventDefault(), _v2) ? _v4?.() : _v5();
          },
          cursor: _v2 ? _v4 ? "pointer" : "not-allowed" : "pointer",
          tabIndex: -1,
          userSelect: "none",
          children: [(0, _v1.jsx)(_v167.ContentRow.Column, {
            children: _v10 === _v37 ? (0, _v1.jsx)(_v167.ContentRow.SelectRadio, {
              size: "md",
              isDisabled: _v2
            }) : (0, _v1.jsx)(_v167.ContentRow.SelectCheckbox, {
              size: "md",
              isDisabled: _v2
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            children: (0, _v1.jsx)(_v174, {
              isLocked: _v2,
              ..._v12
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            overflow: "auto",
            justifyColumn: "auto",
            children: (0, _v1.jsxs)(_v63.Flex, {
              w: "100%",
              gap: "3",
              children: [(0, _v1.jsxs)(_v63.Flex, {
                direction: "column",
                overflow: "auto",
                children: [(0, _v1.jsx)(_v168, {
                  text: _v9,
                  color: _v2 ? _v13 : void 0
                }), _v7]
              }), _v11?.uri ? (0, _v1.jsx)(_v170, {
                recurringEvent: _v11
              }) : (0, _v1.jsx)(_v171, {
                isLiveVideo: _v1,
                live: _v3
              })]
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            margin: `0 0 0 ${(0, _v11.rem)(16)}`,
            children: (0, _v1.jsxs)(_v63.Flex, {
              alignItems: "center",
              children: [(0, _v1.jsx)(_v58.Text, {
                variant: "body-sm",
                mr: "xs",
                color: _v2 ? _v13 : "text-secondary",
                wordBreak: "break-word",
                children: _v6.title
              }), _v6.description && (0, _v1.jsx)(_v125.Tooltip, {
                label: (0, _v1.jsx)(_v58.Text, {
                  variant: "body-md",
                  children: _v6.description
                }),
                maxW: (0, _v11.rem)(220),
                children: (0, _v1.jsx)(_v63.Flex, {
                  align: "center",
                  hideBelow: "md",
                  tabIndex: 0,
                  children: (0, _v1.jsx)(_v166.InfoCircle, {
                    color: "text-secondary",
                    boxSize: "2xs"
                  })
                })
              })]
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            hideAtWidth: _v15.bokehTheme.breakpoints.md,
            children: (0, _v1.jsx)(_v58.Text, {
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
      return _v2 ? (0, _v1.jsxs)(_v57.Box, {
        position: "relative",
        sx: {
          "&:hover .locked-row-tooltip, &:focus-within .locked-row-tooltip": {
            opacity: 1
          }
        },
        children: [_v14, (0, _v1.jsx)(_v57.Box, {
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
          children: (0, _v1.jsx)(_v57.Box, {
            width: "max-content",
            maxWidth: (0, _v11.rem)(280),
            backgroundColor: "rgba(12, 18, 31, 0.92)",
            borderRadius: "md",
            paddingX: (0, _v11.rem)(12),
            paddingY: (0, _v11.rem)(8),
            boxShadow: "lg",
            children: (0, _v1.jsx)(_v58.Text, {
              color: "white",
              textAlign: "center",
              variant: "body-sm",
              children: _v158
            })
          })
        })]
      }) : _v14;
    },
    _v176 = ({
      liveEvent: _v0,
      isSelected: _v1,
      liveEventVideoUri: _v2
    }) => {
      let _v3,
        _v4 = (0, _v73.useViewer)(),
        _v5 = _v4?.locale,
        {
          deselectItem: _v6,
          selectItem: _v7
        } = _v110(),
        _v8 = _v145(),
        {
          createdTime: _v9,
          title: _v10,
          pictures: _v11,
          streamPrivacy: _v12,
          uri: _v13
        } = _v0;
      return (0, _v1.jsx)(_v175, {
        recurringEvent: _v0,
        isDefaultPicture: _v11?.defaultPicture,
        isLiveVideo: !0,
        title: _v10,
        thumbnail: _v11?.sizes?.[1]?.link ?? "",
        privacy: _v35[_v3 = _v12?.view] ?? {
          title: _v3 ?? ""
        },
        timestamp: _v147(_v9, _v5),
        isSelected: _v1,
        controlType: _v8,
        subTitle: (0, _v1.jsx)(_v164, {
          liveEvent: {
            ..._v0
          },
          locale: _v5
        }),
        onToggleSelected: () => {
          _v1 ? _v6(_v2) : _v7(_v2);
        }
      }, _v13);
    },
    _v177 = ({
      title: _v0,
      subTitle: _v1,
      timestamp: _v2,
      thumbnail: _v3,
      isSelectable: _v4,
      isSelected: _v5,
      onClick: _v6,
      onToggleSelected: _v7
    }) => (0, _v1.jsxs)(_v167.ContentRow, {
      listGridColumns: `${(0, _v11.rem)(16)} ${(0, _v11.rem)(72)} 1fr 1fr`,
      sx: _v160,
      isSelected: _v5,
      onToggleSelected: _v7,
      cursor: "pointer",
      onClick: _v6,
      tabIndex: 0,
      onKeyDown: _v0 => {
        _v0?.key === "Enter" && _v6?.();
      },
      children: [(0, _v1.jsx)(_v167.ContentRow.Column, {
        children: _v4 && (0, _v1.jsx)(_v167.ContentRow.SelectCheckbox, {
          size: "md"
        })
      }), (0, _v1.jsx)(_v167.ContentRow.Column, {
        width: "100%",
        children: _v3
      }), (0, _v1.jsx)(_v167.ContentRow.Column, {
        overflow: "auto",
        justifyColumn: "auto",
        children: (0, _v1.jsx)(_v63.Flex, {
          w: "100%",
          gap: "3",
          children: (0, _v1.jsxs)(_v63.Flex, {
            direction: "column",
            overflow: "auto",
            children: [(0, _v1.jsx)(_v168, {
              text: _v0
            }), (0, _v1.jsx)(_v63.Flex, {
              align: "center",
              children: (0, _v1.jsx)(_v58.Text, {
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
      }), (0, _v1.jsx)(_v167.ContentRow.Column, {
        margin: `0 0 0 ${(0, _v11.rem)(16)}`,
        children: (0, _v1.jsx)(_v63.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v58.Text, {
            variant: "body-sm",
            mr: "xs",
            color: "text-secondary",
            wordBreak: "break-word",
            children: "-"
          })
        })
      }), (0, _v1.jsx)(_v167.ContentRow.Column, {
        hideAtWidth: _v15.bokehTheme.breakpoints.md,
        children: (0, _v1.jsx)(_v58.Text, {
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
  var _v178 = _v0.i(0),
    _v179 = _v0.i(0);
  let _v180 = ({
      backgroundColor: _v0
    }) => (0, _v1.jsx)(_v167.ContentRow.DefaultThumbnail, {
      background: _v0,
      badgeSx: _v19,
      ..._v18,
      children: (0, _v1.jsx)(_v179.FolderFilled, {
        color: _v0 ? (0, _v178.readableColor)(_v0) : "text-secondary",
        opacity: "0.4",
        boxSize: "xs"
      })
    }),
    _v181 = ({
      folder: _v0
    }) => {
      let _v1 = _v0?.lastUserActionEventDate || "",
        _v2 = (0, _v73.useViewer)(),
        _v3 = _v2?.locale,
        _v4 = _v54(_v0 => _v0.commonStore.actions.setSearchQuery),
        _v5 = _v54(_v0 => _v0.itemListStore.actions.pushNavigation),
        _v6 = _v54(_v0 => _v0.commonStore.modalConfig.hooks?.useBpEventService),
        {
          sendAddVideoModalClickEvents: _v7
        } = _v6?.() ?? {};
      return (0, _v1.jsx)(_v177, {
        title: _v0.name,
        thumbnail: (0, _v1.jsx)(_v180, {
          backgroundColor: _v0?.settings?.color
        }),
        subTitle: _v150(_v0?.metadata?.connections?.items?.total),
        timestamp: _v147(_v1, _v3),
        onClick: () => {
          _v4(""), _v5(_v0), _v7?.("vimeo.showcase_add_video_modal_action", null, {
            featureName: "action_type",
            featureValue: "choose_folder"
          });
        }
      }, _v0.uri);
    };
  var _v182 = _v0.i(0);
  let _v183 = ({
      isLiveVideo: _v0,
      isLocked: _v1 = !1,
      item: _v2,
      locale: _v3
    }) => {
      let {
          live: _v4,
          user: _v5
        } = _v2,
        _v6 = _v163(_v4?.recurringEvent, _v3 ?? "en"),
        _v7 = _v5?.pictures?.sizes?.[3]?.link ?? "",
        _v8 = _v0 ? _v6 : _v5?.name ?? "",
        _v9 = (0, _v165.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500");
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v63.Flex, {
          align: "center",
          children: [!_v0 && (0, _v1.jsx)(_v57.Box, {
            mr: "xs",
            boxSize: (0, _v11.rem)(12),
            fontSize: (0, _v11.rem)(8),
            overflow: "clip",
            flexShrink: 0,
            sx: {
              "*": {
                boxSize: (0, _v11.rem)(12)
              }
            },
            children: (0, _v1.jsx)(_v182.Avatar, {
              alt: (0, _v32.translate)({
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
          }), (0, _v1.jsx)(_v58.Text, {
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
    _v184 = ({
      video: _v0,
      isSelected: _v1,
      timestamp: _v2
    }) => {
      let _v3,
        _v4,
        _v5,
        _v6 = (0, _v73.useViewer)(),
        _v7 = _v6?.locale,
        {
          deselectItem: _v8,
          selectItem: _v9
        } = _v110(),
        _v10 = _v145(),
        _v11 = _v76(),
        {
          createdTime: _v12,
          duration: _v13,
          live: _v14,
          name: _v15,
          pictures: _v16,
          privacy: _v17,
          type: _v18,
          uri: _v19,
          isColdStorage: _v20
        } = _v0,
        _v21 = _v151(_v18, _v14),
        _v22 = !!_v20;
      return (0, _v1.jsx)(_v175, {
        live: _v14,
        duration: ((_v0, _v1) => {
          if (!_v1) return (0, _v146.secondsToDisplay)(_v0);
        })(_v13, _v21),
        isDefaultPicture: _v16?.defaultPicture,
        isLiveVideo: _v21,
        isLocked: _v22,
        title: _v15,
        thumbnail: _v16?.sizes?.[1]?.link ?? "",
        privacy: (_v3 = _v17?.view ?? "", _v4 = _v17?.originalView, _v35[_v5 = ("cold_storage" === _v3 || "purgatory" === _v3) && _v4 ? _v4 : _v3] ?? {
          title: _v5
        }),
        timestamp: _v2 ?? _v147(_v12, _v7),
        isSelected: _v1,
        controlType: _v10,
        subTitle: (0, _v1.jsx)(_v183, {
          isLiveVideo: _v21,
          isLocked: _v22,
          item: {
            ..._v0,
            isSelected: _v1
          },
          locale: _v7
        }),
        onToggleSelected: () => {
          _v22 || (_v1 ? _v8(_v19) : _v9(_v19));
        },
        onLockedClick: () => _v11("list")
      }, _v19);
    },
    _v185 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.itemListData),
        _v1 = (0, _v13.useMemo)(() => _v0.map(_v0 => _v0?.video?.uri ? (0, _v1.jsx)(_v184, {
          video: _v0.video,
          isSelected: _v0.isSelected
        }, _v0.video.uri) : _v0?.folder?.uri ? (0, _v1.jsx)(_v181, {
          folder: _v0.folder
        }, _v0.folder.uri) : _v0?.liveEvent?.uri ? (0, _v1.jsx)(_v176, {
          liveEvent: _v0?.liveEvent,
          isSelected: _v0.isSelected,
          liveEventVideoUri: _v0?.liveEventVideoUri ?? ""
        }, _v0.liveEvent.uri) : null), [_v0]);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1
      });
    },
    _v186 = ({
      isLoading: _v0
    }) => _v54(_v0 => _v0.commonStore.layout) === _v26.LIST ? (0, _v1.jsx)(_v185, {}) : (0, _v1.jsx)(_v162, {
      isLoading: _v0
    });
  var _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0);
  let _v190 = ({
      icon: _v0,
      heading: _v1,
      description: _v2,
      buttonText: _v3,
      buttonHref: _v4
    }) => (0, _v1.jsxs)(_v65, {
      gap: "3",
      children: [(0, _v1.jsxs)(_v63.Flex, {
        direction: "column",
        align: "center",
        justify: "center",
        gap: "xs",
        children: [_v0, (0, _v1.jsx)(_v58.Text, {
          variant: "heading-xs",
          children: _v1
        }), (0, _v1.jsx)(_v58.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v2
        })]
      }), (0, _v1.jsx)(_v62.Button, {
        as: "a",
        variant: "secondary",
        size: "sm",
        href: _v4,
        target: "_blank",
        rel: "noopener noreferrer",
        rightIcon: (0, _v1.jsx)(_v189.PopOut, {}),
        children: _v3
      })]
    }),
    _v191 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.navigationStack);
      return _v0?.[_v0.length - 1] === _v48 ? (0, _v1.jsx)(_v190, {
        icon: (0, _v1.jsx)(_v188.CameraOn, {
          boxSize: "xs"
        }),
        heading: (0, _v32.translate)({
          singular: "No events yet",
          dictionary: {
            es: {
              singular: "Aún no hay eventos"
            },
            "de-DE": {
              singular: "Noch keine Events"
            },
            "fr-FR": {
              singular: "Aucun événement pour l'instant"
            },
            "ja-JP": {
              singular: "まだイベントはありません"
            },
            "ko-KR": {
              singular: "아직 이벤트가 없습니다."
            },
            "pt-BR": {
              singular: "Ainda não há eventos"
            },
            "zh-CN": {
              singular: "暂无活动"
            }
          }
        }),
        description: (0, _v32.translate)({
          singular: "Create a new event to add to this showcase",
          dictionary: {
            es: {
              singular: "Cree un nuevo evento para agregar a esta presentación."
            },
            "de-DE": {
              singular: "Erstellen Sie ein neues Event, um es dieser Präsentation hinzuzufügen"
            },
            "fr-FR": {
              singular: "Créez un nouvel événement à ajouter à cette présentation"
            },
            "ja-JP": {
              singular: "このショーケースに追加するイベントを新規作成してください"
            },
            "ko-KR": {
              singular: "이 쇼케이스에 추가할 새 이벤트를 만드세요."
            },
            "pt-BR": {
              singular: "Crie um evento novo para adicionar a esta vitrine"
            },
            "zh-CN": {
              singular: "创建一个新活动以添加到此展示"
            }
          }
        }),
        buttonText: (0, _v32.translate)({
          singular: "New event",
          dictionary: {
            es: {
              singular: "Evento nuevo"
            },
            "de-DE": {
              singular: "Neues Event"
            },
            "fr-FR": {
              singular: "Nouvel événement"
            },
            "ja-JP": {
              singular: "新しいイベント"
            },
            "ko-KR": {
              singular: "새 이벤트"
            },
            "pt-BR": {
              singular: "Novo evento"
            },
            "zh-CN": {
              singular: "新活动"
            }
          }
        }),
        buttonHref: "/library/events"
      }) : (0, _v1.jsx)(_v190, {
        icon: (0, _v1.jsx)(_v187.Upload, {
          boxSize: "xs"
        }),
        heading: (0, _v32.translate)({
          singular: "Upload a video to select it here",
          dictionary: {
            es: {
              singular: "Suba un video para seleccionarlo aquí"
            },
            "de-DE": {
              singular: "Laden Sie ein Video hoch, um es hier auszuwählen"
            },
            "fr-FR": {
              singular: "Mettez en ligne une vidéo pour la sélectionner ici"
            },
            "ja-JP": {
              singular: "ここで選択するために動画をアップロード"
            },
            "ko-KR": {
              singular: "선택하려면 먼저 여기에 동영상을 업로드하세요."
            },
            "pt-BR": {
              singular: "Carregue um vídeo para selecioná-lo aqui"
            },
            "zh-CN": {
              singular: "上传一个视频以在此处选择"
            }
          }
        }),
        description: (0, _v32.translate)({
          singular: "Come back when you're done and refresh this page",
          dictionary: {
            es: {
              singular: "Regrese cuando haya terminado y actualice esta página."
            },
            "de-DE": {
              singular: "Kommen Sie zurück, wenn Sie fertig sind, und aktualisieren Sie diese Seite."
            },
            "fr-FR": {
              singular: "Revenez lorsque vous aurez terminé et actualisez cette page"
            },
            "ja-JP": {
              singular: "完了したらこの画面に戻り、ページを再度読み込んでください。"
            },
            "ko-KR": {
              singular: "작업이 완료되면 돌아와서 이 페이지를 새로 고침하세요."
            },
            "pt-BR": {
              singular: "Volte quando terminar e atualize esta página"
            },
            "zh-CN": {
              singular: "完成后请返回并刷新此页面"
            }
          }
        }),
        buttonText: (0, _v32.translate)({
          singular: "Upload",
          dictionary: {
            es: {
              singular: "Subir"
            },
            "de-DE": {
              singular: "Hochladen"
            },
            "fr-FR": {
              singular: "Importer"
            },
            "ja-JP": {
              singular: "アップロード"
            },
            "ko-KR": {
              singular: "업로드"
            },
            "pt-BR": {
              singular: "Carregar"
            },
            "zh-CN": {
              singular: "上传"
            }
          }
        }),
        buttonHref: "/upload"
      });
    };
  var _v192 = _v0.i(0);
  let _v193 = () => (0, _v1.jsx)(_v65, {
      children: (0, _v1.jsx)(_v192.Spinner, {})
    }),
    _v194 = () => (0, _v1.jsxs)(_v65, {
      children: [(0, _v1.jsx)(_v58.Text, {
        variant: "heading-xs",
        children: (0, _v32.translate)({
          singular: "No matching results",
          dictionary: {
            es: {
              singular: "No hay resultados coincidentes"
            },
            "de-DE": {
              singular: "Keine übereinstimmenden Ergebnisse"
            },
            "fr-FR": {
              singular: "Aucun résultat correspondant"
            },
            "ja-JP": {
              singular: "一致する結果がありません"
            },
            "ko-KR": {
              singular: "일치하는 결과가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum resultado correspondente"
            },
            "zh-CN": {
              singular: "无匹配结果"
            }
          }
        })
      }), (0, _v1.jsx)(_v58.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: (0, _v32.translate)({
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
        })
      })]
    });
  var _v195 = _v0.i(0);
  let _v196 = () => (0, _v1.jsx)(_v65, {
    gap: "3",
    children: (0, _v1.jsxs)(_v63.Flex, {
      direction: "column",
      align: "center",
      justify: "center",
      gap: "xs",
      children: [(0, _v1.jsx)(_v195.CircleCheck, {
        boxSize: "xs"
      }), (0, _v1.jsx)(_v58.Text, {
        variant: "heading-xs",
        children: (0, _v32.translate)({
          singular: "All items have been added",
          dictionary: {
            es: {
              singular: "Se agregaron todos los elementos"
            },
            "de-DE": {
              singular: "Alle Artikel wurden hinzugefügt"
            },
            "fr-FR": {
              singular: "Tous les éléments ont été ajoutés"
            },
            "ja-JP": {
              singular: "すべてのアイテムが追加されました"
            },
            "ko-KR": {
              singular: "모든 항목이 추가되었습니다."
            },
            "pt-BR": {
              singular: "Todos os itens foram adicionados"
            },
            "zh-CN": {
              singular: "所有项目均已添加"
            }
          }
        })
      }), (0, _v1.jsx)(_v58.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: (0, _v32.translate)({
          singular: "Check another location or {A}upload a video{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v58.Text, {
              as: "a",
              variant: "body-md",
              cursor: "pointer",
              textDecoration: "underline",
              onClick: () => window.open("/upload", "_blank"),
              children: _v0
            }, "upload-link")
          },
          dictionary: {
            es: {
              singular: "Verifique otra ubicación o {A}suba un video{/A}"
            },
            "de-DE": {
              singular: "Sehen Sie an einer anderen Stelle nach oder {A}laden Sie ein Video hoch{/A}."
            },
            "fr-FR": {
              singular: "Vérifiez un autre emplacement ou {A}mettez en ligne une vidéo{/A}"
            },
            "ja-JP": {
              singular: "別の場所を確認するか{A}動画をアップロード{/A}してください"
            },
            "ko-KR": {
              singular: "다른 위치를 확인하거나 {A}동영상을 업로드{/A}하세요."
            },
            "pt-BR": {
              singular: "Verifique outro local ou {A}carregue um vídeo{/A}"
            },
            "zh-CN": {
              singular: "检查其他位置或{A}上传视频{/A}"
            }
          }
        })
      })]
    })
  });
  var _v197 = _v0.i(0);
  let _v198 = () => (0, _v1.jsx)(_v63.Flex, {
      "aria-busy": !0,
      "aria-live": "polite",
      direction: "column",
      w: "100%",
      gap: "sm",
      children: (0, _v1.jsx)(_v1.Fragment, {
        children: [,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v167.ContentRow, {
          listGridColumns: `${(0, _v11.rem)(16)} ${(0, _v11.rem)(72)} 1fr 1fr`,
          sx: _v160,
          role: "group",
          disableHover: !0,
          tabIndex: -1,
          children: [(0, _v1.jsx)(_v167.ContentRow.Column, {
            children: (0, _v1.jsx)(_v97.Checkbox, {
              isDisabled: !0
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            children: (0, _v1.jsx)(_v155.Skeleton, {
              h: (0, _v11.rem)(39),
              ..._v18
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            overflow: "auto",
            justifyColumn: "auto",
            children: (0, _v1.jsx)(_v63.Flex, {
              w: "100%",
              gap: "3",
              children: (0, _v1.jsxs)(_v63.Flex, {
                direction: "column",
                overflow: "hidden",
                gap: "xs",
                children: [(0, _v1.jsx)(_v155.Skeleton, {
                  variant: "text",
                  width: (0, _v11.rem)(128)
                }), (0, _v1.jsxs)(_v63.Flex, {
                  align: "center",
                  gap: "xs",
                  children: [(0, _v1.jsx)(_v155.Skeleton, {
                    borderRadius: "50%",
                    boxSize: (0, _v11.rem)(12),
                    flexShrink: 0
                  }), (0, _v1.jsx)(_v155.Skeleton, {
                    variant: "text",
                    width: (0, _v11.rem)(96)
                  })]
                })]
              })
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v63.Flex, {
              ml: "md",
              children: (0, _v1.jsx)(_v155.Skeleton, {
                variant: "text",
                w: (0, _v11.rem)(64),
                alignItems: "flex-end"
              })
            })
          }), (0, _v1.jsx)(_v167.ContentRow.Column, {
            hideAtWidth: _v15.bokehTheme.breakpoints.md,
            children: (0, _v1.jsx)(_v63.Flex, {
              mr: "xl",
              children: (0, _v1.jsx)(_v155.Skeleton, {
                variant: "text",
                w: (0, _v11.rem)(80),
                alignItems: "flex-end"
              })
            })
          })]
        }, `loading-state-skeleton-card-list-${_v1}`))
      })
    }),
    _v199 = ({
      isLoading: _v0,
      onLoadMore: _v1
    }) => {
      let _v2 = (0, _v13.useRef)(null),
        _v3 = (0, _v197.useOnScreen)(_v2),
        _v4 = _v54(_v0 => _v0.commonStore.layout);
      return ((0, _v13.useEffect)(() => {
        _v3 && !_v0 && _v1();
      }, [_v0, _v3, _v1]), _v4 === _v26.LIST) ? (0, _v1.jsx)(_v57.Box, {
        h: (0, _v11.rem)(90),
        ref: _v2,
        children: (0, _v1.jsx)(_v198, {})
      }) : (0, _v1.jsx)(_v57.Box, {
        h: (0, _v11.rem)(90),
        pt: (0, _v11.rem)(1),
        ref: _v2
      });
    },
    _v200 = _v0 => {
      let {
        isLoadingMore: _v1,
        canLoadMore: _v2 = !1,
        onActivate: _v3
      } = _v0;
      return _v2 ? (0, _v1.jsx)(_v199, {
        isLoading: _v1,
        onLoadMore: _v3
      }) : null;
    };
  var _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0);
  let _v204 = _v0 => {
    if (!(_v0 !== _v46 && _v0 !== _v47 && _v0 !== _v48 && "object" == typeof _v0 && _v0?.uri)) return null;
    try {
      let _v0 = parseInt(_v0.uri.split("/")[4], 10);
      return isNaN(_v0) ? null : _v0;
    } catch (_v0) {
      return null;
    }
  };
  var _v205 = _v0.i(0),
    _v206 = _v0.i(0),
    _v207 = _v0.i(0),
    _v208 = _v0.i(0);
  let _v209 = () => {
    let _v0,
      _v1,
      _v2,
      _v3,
      _v4 = _v54(_v0 => _v0.itemListStore.navigationStack),
      _v5 = _v54(_v0 => _v0.commonStore.searchQuery),
      _v6 = _v54(_v0 => _v0.itemListStore.isLiveEventView),
      _v7 = _v4?.length == 2 && _v4?.[1] === _v47,
      _v8 = !!_v5.trim(),
      {
        data: _v9,
        isLoading: _v10,
        error: _v11,
        size: _v12,
        setSize: _v13
      } = (() => {
        let _v0 = _v54(_v0 => _v0.commonStore.resourceOwnerId),
          _v1 = _v54(_v0 => _v0.commonStore.sortValues),
          _v2 = _v54(_v0 => _v0.itemListStore.navigationStack),
          _v3 = _v2?.[1] === _v47,
          {
            data: _v4,
            error: _v5,
            isLoading: _v6,
            setSize: _v7,
            size: _v8
          } = (0, _v207.useGetUserFoldersRootInfinite)((0, _v13.useCallback)(() => _v0 && _v3 && _v1?.sortBy ? {
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4"
            },
            where: {
              userId: _v0
            },
            select: _v121,
            query: {
              direction: _v1?.sortDirection,
              excludePersonalTeamFolder: !0,
              includeColdStorageClips: !0,
              perPage: 25,
              sort: _v1?.sortBy
            }
          } : null, [_v0, _v1, _v3]), {
            revalidateOnFocus: !1,
            revalidateFirstPage: !1,
            errorRetryCount: 0
          });
        return {
          data: _v4,
          error: _v5,
          isLoading: _v6,
          setSize: _v7,
          size: _v8
        };
      })(),
      {
        data: _v14,
        error: _v15,
        isLoading: _v16,
        size: _v17,
        setSize: _v18
      } = (() => {
        let _v0 = _v54(_v0 => _v0.commonStore.resourceOwnerId),
          _v1 = _v54(_v0 => _v0.itemListStore.navigationStack),
          _v2 = _v54(_v0 => _v0.commonStore.sortValues),
          _v3 = _v54(_v0 => _v0.commonStore.searchQuery),
          _v4 = _v204(_v1[_v1.length - 1]),
          {
            data: _v5,
            error: _v6,
            isLoading: _v7,
            mutate: _v8,
            setSize: _v9,
            size: _v10
          } = (0, _v203.useGetUserProjectItemsInfinite)(() => _v0 && _v4 && !_v3 ? {
            where: {
              userId: _v0,
              projectId: _v4
            },
            select: _v121,
            query: {
              direction: _v2?.sortDirection,
              sort: _v2?.sortBy,
              perPage: 25,
              liveEventType: "all",
              noPadding: !0,
              responsive: !0,
              includeColdStorageClips: !0
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4"
            }
          } : null, {
            revalidateAll: !1,
            revalidateFirstPage: !1
          });
        return {
          data: _v5,
          error: _v6,
          isLoading: _v7,
          mutate: _v8,
          setSize: _v9,
          size: _v10
        };
      })(),
      {
        data: _v19,
        isLoading: _v20,
        error: _v21,
        size: _v22,
        setSize: _v23
      } = (() => {
        let _v0 = _v54(_v0 => _v0.commonStore.resourceOwnerId),
          _v1 = _v54(_v0 => _v0.itemListStore.navigationStack),
          _v2 = _v54(_v0 => _v0.commonStore.searchQuery),
          _v3 = _v54(_v0 => _v0.commonStore.searchFilterFields),
          _v4 = _v54(_v0 => _v0.commonStore.sortValues),
          _v5 = (0, _v206.useDebouncedValue)(_v2, 500),
          _v6 = _v3?.length ? _v3.join(",") : void 0,
          _v7 = _v204(_v1[_v1.length - 1]),
          {
            data: _v8,
            error: _v9,
            isLoading: _v10,
            setSize: _v11,
            size: _v12
          } = (0, _v205.useGetUserItemsInfinite)(() => _v0 && _v5.trim() ? {
            where: {
              userId: _v0
            },
            select: _v121,
            query: {
              direction: _v4?.sortDirection,
              sort: _v4?.sortBy,
              filter: "folder,video,live_event",
              perPage: 25,
              liveEventType: "all",
              noPadding: !0,
              responsive: !0,
              includeFolderIds: _v7 ?? void 0,
              query: _v5.trim() ? _v5 : void 0,
              queryFields: _v6,
              precision: 3
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4"
            }
          } : null, {
            revalidateAll: !1,
            revalidateFirstPage: !1
          });
        return {
          data: _v8,
          error: _v9,
          isLoading: _v10,
          setSize: _v11,
          size: _v12
        };
      })(),
      {
        data: _v24,
        isLoading: _v25,
        error: _v26,
        size: _v27,
        setSize: _v28
      } = (() => {
        let _v0 = _v54(_v0 => _v0.commonStore.resourceOwnerId),
          _v1 = _v54(_v0 => _v0.commonStore.sortValues),
          _v2 = _v54(_v0 => _v0.itemListStore.isLiveEventView),
          _v3 = _v54(_v0 => _v0.commonStore.searchQuery),
          {
            data: _v4,
            error: _v5,
            isLoading: _v6,
            setSize: _v7,
            size: _v8,
            mutate: _v9
          } = (0, _v208.useGetUserLiveEventsInfinite)(() => _v0 && _v2 && !_v3 ? {
            select: _v122,
            where: {
              userId: _v0
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.1"
            },
            query: {
              perPage: 25,
              sort: _v1?.sortBy,
              direction: _v1?.sortDirection,
              filter: "not_in_folder",
              type: "recurring",
              recurring_event_type: "all"
            }
          } : null, {
            revalidateAll: !0,
            revalidateFirstPage: !0
          });
        return {
          data: (0, _v13.useMemo)(() => {
            if (_v4) return _v4.map(_v0 => {
              if (!_v0 || !_v0.data) return _v0;
              let _v1 = _v0.data.map(_v0 => ({
                type: "live_event",
                liveEvent: _v0
              }));
              return {
                ..._v0,
                data: _v1
              };
            });
          }, [_v4]),
          error: _v5,
          isLoading: _v6,
          mutate: _v9,
          setSize: _v7,
          size: _v8
        };
      })(),
      _v29 = 0;
    _v6 ? (_v0 = _v24, _v1 = _v25, _v2 = _v26, _v29 = _v27, _v3 = _v28) : (_v0 = _v7 ? _v9 : _v14, _v1 = _v7 ? _v10 : _v16, _v2 = _v7 ? _v11 : _v15, _v29 = _v7 ? _v12 : _v17, _v3 = _v7 ? _v13 : _v18), _v8 && (_v0 = _v19, _v1 = _v20, _v2 = _v21, _v29 = _v22, _v3 = _v23);
    let {
      canLoadMore: _v30,
      isLoading: _v31,
      shouldShowEmptyState: _v32,
      shouldShowAllItemsAddedState: _v33
    } = (({
      data: _v0,
      size: _v1
    }) => {
      let _v2 = _v54(_v0 => _v0.itemListStore.actions.setItemListData),
        _v3 = _v54(_v0 => _v0.commonStore.selectedItemURIs),
        _v4 = _v54(_v0 => _v0.commonStore.actions.setSelectableURIList),
        _v5 = _v54(_v0 => _v0.commonStore.showVideoFilter),
        _v6 = _v54(_v0 => _v0.itemListStore.itemListData),
        _v7 = (0, _v13.useMemo)(() => _v0?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
          let _v1 = (0, _v201.camelizeString)(_v0.type);
          return _v0[_v1]?.uri;
        })), [_v0]),
        _v8 = (0, _v13.useCallback)((_v0, _v1) => _v0 || !_v5(_v1), [_v5]);
      (0, _v13.useEffect)(() => {
        if (!_v7) return;
        let _v0 = new Set();
        _v2(_v7.map(_v0 => {
          let _v1 = _v0.video?.uri || _v0.liveEvent?.uri || _v0.folder?.uri;
          if (!_v1 || _v0?.liveEvent?.hasRegistration || _v0?.liveEvent && !_v0?.liveEvent?.metadata?.connections?.preLiveVideo?.uri && !_v0?.liveEvent?.metadata?.connections?.liveVideo?.uri) return null;
          if (_v0?.liveEvent) {
            var _v2;
            let _v0;
            _v1 = (_v0 = (_v2 = _v0?.liveEvent?.metadata?.connections?.preLiveVideo?.uri || _v0?.liveEvent?.metadata?.connections?.liveVideo?.uri || "").match(/\/videos\/(\d+)/)) && _v0[1] ? `/videos/${_v0[1]}` : _v2;
          }
          let _v3 = !!_v0?.video?.disabledProperties?.embed?.minTierForCapability;
          if ((_v0?.video || _v0?.liveEvent) && _v8(_v3, _v1)) return;
          (_v0.video?.uri || _v0.liveEvent?.uri) && _v0.add(_v1);
          let _v4 = _v3.has(_v1);
          return {
            ..._v0,
            liveEventVideoUri: _v1,
            isSelectable: !1,
            isSelected: _v4
          };
        }).filter(Boolean)), _v4(_v0);
      }, [_v7, _v2, _v3, _v4]);
      let {
          isDone: _v9,
          isLoadingInitialData: _v10,
          isLoadingMore: _v11
        } = (0, _v202.getInfiniteRequestLoadingState)({
          data: _v0,
          size: _v1,
          itemsPerPage: 20
        }),
        _v12 = _v10 || !!_v11,
        _v13 = _v7?.length === 0 && _v9 && !_v12,
        _v14 = !!(_v7 && _v7?.length > 0 && _v6?.length === 0 && _v9 && !_v12);
      return {
        canLoadMore: !_v9,
        isLoading: _v12,
        shouldShowEmptyState: _v13,
        shouldShowAllItemsAddedState: _v14
      };
    })({
      data: _v0,
      size: _v29
    });
    if (_v2) return (0, _v1.jsx)(_v67, {});
    if (_v1) return (0, _v1.jsx)(_v193, {});
    if (_v32) if (_v5) return (0, _v1.jsx)(_v194, {});else return (0, _v1.jsx)(_v191, {});
    if (_v33) if (_v5) return (0, _v1.jsx)(_v194, {});else return (0, _v1.jsx)(_v196, {});
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v186, {
        isLoading: _v31
      }), (0, _v1.jsx)(_v200, {
        canLoadMore: _v30,
        isLoadingMore: _v31,
        onActivate: () => _v3(_v29 + 1)
      })]
    });
  };
  var _v210 = _v0.i(0),
    _v211 = _v0.i(0);
  let _v212 = ({
    children: _v0,
    onClick: _v1
  }) => {
    let _v2 = (0, _v165.useColorModeValue)("#1A365D0F", "#BEE3F814"),
      _v3 = (0, _v165.useColorModeValue)("#1A365D3D", "#BEE3F83D");
    return (0, _v1.jsx)(_v63.Flex, {
      as: "li",
      alignItems: "center",
      border: "1px solid transparent",
      borderRadius: "0.5rem",
      height: "2.75rem",
      gap: "1rem",
      onClick: _v1,
      padding: "0.75rem",
      role: "button",
      tabIndex: 0,
      onKeyDown: _v0 => {
        _v0?.key === "Enter" && _v1?.();
      },
      _hover: {
        backgroundColor: _v2
      },
      _focusVisible: {
        backgroundColor: "fill-component",
        borderColor: _v3,
        outline: "none"
      },
      children: _v0
    });
  };
  _v212.Label = ({
    children: _v0
  }) => (0, _v1.jsx)(_v57.Box, {
    flex: "1 1",
    children: (0, _v1.jsx)(_v58.Text, {
      variant: "heading-xs",
      children: _v0
    })
  });
  let _v213 = () => {
      let {
          data: _v0,
          capabilities: _v1,
          contentSpaceEnabled: _v2
        } = _v123(),
        _v3 = _v54(_v0 => _v0.itemListStore.actions.pushNavigation),
        _v4 = _v2 ? (0, _v32.translate)({
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
        }) : (0, _v32.translate)({
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
        }),
        _v5 = (0, _v13.useCallback)(() => {
          _v0 && _v3(_v0);
        }, [_v0, _v3]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!!_v0 && (0, _v1.jsxs)(_v212, {
          onClick: _v5,
          children: [(0, _v1.jsx)(_v210.MyLibrary, {
            boxSize: "1.25rem"
          }), (0, _v1.jsx)(_v212.Label, {
            children: (0, _v32.translate)({
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
          }), (0, _v1.jsx)(_v115.ChevronRightSmall, {})]
        }), (0, _v1.jsxs)(_v212, {
          onClick: () => _v3("team_library"),
          children: [(0, _v1.jsx)(_v211.TeamLibrary, {
            boxSize: "1.25rem"
          }), (0, _v1.jsx)(_v212.Label, {
            children: _v4
          }), (0, _v1.jsx)(_v115.ChevronRightSmall, {})]
        }), _v1?.hasVideoLibraryLiveEvents && (0, _v1.jsxs)(_v212, {
          onClick: () => _v3(_v48),
          children: [(0, _v1.jsx)(_v188.CameraOn, {
            boxSize: "1.25rem"
          }), (0, _v1.jsx)(_v212.Label, {
            children: (0, _v32.translate)({
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
            })
          }), (0, _v1.jsx)(_v115.ChevronRightSmall, {})]
        })]
      });
    },
    _v214 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.isAtRoot),
        _v1 = _v54(_v0 => _v0.commonStore.searchQuery);
      return _v0 && !_v1.trim() ? (0, _v1.jsx)(_v213, {}) : (0, _v1.jsx)(_v209, {});
    },
    _v215 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.actions.setShowFolderView);
      return (0, _v13.useEffect)(() => (_v0(!0), () => _v0(!1)), [_v0]), (0, _v1.jsx)(_v214, {});
    },
    _v216 = {
      additionalConfig: {
        layoutLSKey: `${_v39}_avtsm`
      },
      components: {
        Footer: ({
          cancelButtonRef: _v0,
          getFooterFocusStyles: _v1,
          onSuccess: _v2
        }) => {
          let {
              handleModalClose: _v3
            } = _v66(),
            {
              sendAddVideoModalClickEvents: _v4
            } = _v95(),
            {
              responsiveDesign: {
                footer: {
                  closeButtonProps: _v5
                }
              }
            } = _v20(),
            {
              addVideoToShowcase: _v6,
              isButtonDisabled: _v7,
              patchResponse: {
                loading: _v8
              }
            } = (({
              onSuccess: _v0
            }) => {
              let {
                  handleModalClose: _v1
                } = _v66(),
                _v2 = (0, _v79.useToast)(),
                {
                  actions: {
                    setPatchErrorVisibility: _v3
                  },
                  resourceId: _v4,
                  selectedItemURIs: _v5,
                  patchErrorVisibility: _v6
                } = _v54(_v0 => _v0.commonStore),
                [_v7, _v8] = (0, _v80.usePatchAlbumVideos)(),
                {
                  data: _v9,
                  error: _v10,
                  loading: _v11
                } = _v8,
                {
                  sendAddVideoModalClickEvents: _v12,
                  sendAddVideosOnSuccessEvent: _v13
                } = _v95(),
                _v14 = Array.from(_v5).map(_v0 => ({
                  video: {
                    uri: _v0
                  }
                }));
              return (0, _v13.useEffect)(() => {
                _v11 || _v10 || !_v9 ? !_v11 && _v10 && void 0 === _v6 && _v3(!0) : (_v0?.(void 0, _v5.size), _v1(), _v13(), _v2({
                  isClosable: !1,
                  title: (0, _v32.translate)({
                    singular: "{count} video added",
                    plural: "{count} videos added",
                    count: _v5.size ?? 0,
                    replacements: {
                      count: _v5.size ?? 0
                    },
                    dictionary: {
                      es: {
                        singular: "Se ha agregado {count} video",
                        plural: "Se han agregado {count} videos"
                      },
                      "de-DE": {
                        singular: "{count} Video hinzugefügt",
                        plural: "{count} Videos hinzugefügt"
                      },
                      "fr-FR": {
                        singular: "{count} vidéo ajoutée",
                        plural: "{count} vidéos ajoutées"
                      },
                      "ja-JP": {
                        singular: "{count}件の動画が追加されました",
                        plural: "{count}件の動画が追加されました"
                      },
                      "ko-KR": {
                        singular: "{count}개의 동영상이 추가되었습니다.",
                        plural: "{count}개의 동영상이 추가되었습니다."
                      },
                      "pt-BR": {
                        singular: "{count} vídeo adicionado",
                        plural: "{count} vídeos adicionados"
                      },
                      "zh-CN": {
                        singular: "已添加 {count} 个视频",
                        plural: "已添加 {count} 个视频"
                      }
                    }
                  })
                }));
              }, [_v9, _v10, _v1, _v11, _v0, _v6, _v5.size, _v3, _v2, _v13]), {
                addVideoToShowcase: () => {
                  !1 === _v6 && _v3(), _v12("vimeo.showcase_confirm_to_add", "add to showcase", {
                    featureName: "number_of_added",
                    featureValue: _v5.size.toString()
                  }), _v7({
                    headers: {
                      Accept: `application/vnd.vimeo.*+json;version=${_v36}`
                    },
                    where: {
                      albumId: _v4
                    },
                    select: ["uri"],
                    variables: {
                      set: _v14
                    }
                  });
                },
                isButtonDisabled: () => !_v5.size || _v5.size > 100,
                patchResponse: _v8
              };
            })({
              onSuccess: _v2
            });
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v78, {
              ref: _v0,
              _focus: _v1(),
              onClick: () => {
                _v3(), _v4("vimeo.showcase_add_video_modal_close", "cancel");
              },
              ..._v5,
              children: (0, _v32.translate)({
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
            }), (0, _v1.jsx)(_v78, {
              isLoading: _v8,
              onClick: _v6,
              variant: "primary",
              isDisabled: _v7(),
              children: (0, _v32.translate)({
                singular: "Add to showcase",
                dictionary: {
                  es: {
                    singular: "Agregar a presentación"
                  },
                  "de-DE": {
                    singular: "Zu Präsentation hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter à la présentation"
                  },
                  "ja-JP": {
                    singular: "ショーケースに追加"
                  },
                  "ko-KR": {
                    singular: "쇼케이스에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar à vitrine"
                  },
                  "zh-CN": {
                    singular: "添加到橱窗"
                  }
                }
              })
            })]
          });
        },
        Header: () => (0, _v1.jsxs)(_v63.Flex, {
          direction: "column",
          gap: "md",
          children: [(0, _v32.translate)({
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
          }), (0, _v1.jsx)(_v140, {}), (0, _v1.jsx)(_v133, {})]
        }),
        PatchErrorAlert: () => (0, _v1.jsx)(_v141, {
          text: (0, _v32.translate)({
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
        VideoLimitErrorAlert: () => {
          let _v0 = _v54(_v0 => _v0.commonStore.videoLimitErrorVisibility),
            _v1 = _v54(_v0 => _v0.commonStore.actions.setVideoLimitErrorVisibility);
          return (0, _v1.jsx)(_v59, {
            setVisibility: _v1,
            text: (0, _v32.translate)({
              singular: "Add up to 100 videos at a time",
              dictionary: {
                es: {
                  singular: "Agregue hasta 100 videos a la vez"
                },
                "de-DE": {
                  singular: "Fügen Sie bis zu 100 Videos auf einmal hinzu"
                },
                "fr-FR": {
                  singular: "Ajoutez jusqu'à 100 vidéos à la fois."
                },
                "ja-JP": {
                  singular: "一度に最大100本の動画を追加"
                },
                "ko-KR": {
                  singular: "한 번에 최대 100개의 동영상을 추가하세요."
                },
                "pt-BR": {
                  singular: "Adicione até 100 vídeos de cada vez"
                },
                "zh-CN": {
                  singular: "一次最多可以添加 100 个视频"
                }
              }
            }),
            visibility: _v0
          });
        },
        VideoList: _v215
      },
      hooks: {
        useBpEventService: _v95
      }
    },
    _v217 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.showFolderView),
        {
          sortOptions: _v1,
          selectedOptionText: _v2,
          isDisabled: _v3,
          handleSortChange: _v4,
          sortValues: _v5
        } = _v131();
      return (0, _v1.jsxs)(_v63.Flex, {
        direction: "column",
        gap: "sm",
        children: [_v0 && (0, _v1.jsx)(_v124, {}), (0, _v1.jsx)(_v63.Flex, {
          justify: "end",
          children: (0, _v1.jsxs)(_v63.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v130, {
              sortOptions: _v1,
              selectedOptionText: _v2,
              isDisabled: _v3,
              onSortChange: _v4,
              currentSortKey: _v5?.sortKey
            }), (0, _v1.jsx)(_v127, {})]
          })
        })]
      });
    },
    _v218 = {
      additionalConfig: {
        layoutLSKey: `${_v39}_crl`,
        singleSelect: !0,
        defaultLayout: _v26.GRID
      },
      components: {
        Footer: ({
          cancelButtonRef: _v0,
          getFooterFocusStyles: _v1,
          onSuccess: _v2
        }) => {
          let {
              handleModalClose: _v3,
              resetStores: _v4
            } = _v66(),
            [_v5, _v6] = (0, _v13.useState)(!1),
            {
              responsiveDesign: {
                footer: {
                  closeButtonProps: _v7
                }
              }
            } = _v20(),
            _v8 = _v54(_v0 => _v0.commonStore.selectedItemURIs),
            _v9 = 1 !== _v8.size,
            _v10 = async () => {
              let _v0 = [..._v8][0];
              _v6(!0);
              try {
                await _v2?.(_v0);
              } finally {
                _v6(!1);
              }
              _v4();
            };
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v78, {
              ref: _v0,
              _focus: _v1(),
              onClick: _v3,
              isDisabled: _v5,
              ..._v7,
              children: (0, _v32.translate)({
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
            }), (0, _v1.jsx)(_v78, {
              variant: "primary",
              isDisabled: _v9 || _v5,
              isLoading: _v5,
              onClick: _v10,
              children: (0, _v32.translate)({
                singular: "Select",
                dictionary: {
                  es: {
                    singular: "Seleccionar"
                  },
                  "de-DE": {
                    singular: "Auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner"
                  },
                  "ja-JP": {
                    singular: "選択"
                  },
                  "ko-KR": {
                    singular: "선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar"
                  },
                  "zh-CN": {
                    singular: "选择"
                  }
                }
              })
            })]
          });
        },
        Header: () => (0, _v1.jsxs)(_v63.Flex, {
          direction: "column",
          gap: "md",
          children: [(0, _v32.translate)({
            singular: "Select a video",
            dictionary: {
              es: {
                singular: "Seleccionar un video"
              },
              "de-DE": {
                singular: "Video auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner une vidéo"
              },
              "ja-JP": {
                singular: "動画を選択"
              },
              "ko-KR": {
                singular: "동영상 선택"
              },
              "pt-BR": {
                singular: "Selecione um vídeo"
              },
              "zh-CN": {
                singular: "选择视频"
              }
            }
          }), (0, _v1.jsx)(_v140, {}), (0, _v1.jsx)(_v217, {})]
        }),
        PatchErrorAlert: () => null,
        VideoList: _v215
      }
    };
  var _v219 = _v0.i(0),
    _v220 = _v0.i(0),
    _v221 = _v0.i(0),
    _v222 = _v0.i(0);
  async function _v223({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      albumId: _v4,
      videoId: _v5
    },
    ..._v6
  }) {
    return (0, _v221.measureLatency)("postUserAlbumVideoSetAlbumThumbnail", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/albums/${_v4}/videos/${_v5}/set_album_thumbnail?fields=${_v1.map(_v222.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "POST",
        body: JSON.stringify((0, _v222.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v222.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v222.deepCamelCase)(_v1);
    });
  }
  var _v224 = _v0.i(0),
    _v225 = _v0.i(0);
  function _v226() {
    let {
        mutate: _v0
      } = (0, _v224.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v225.useGctlConfig)(),
      [_v5, _v6] = (0, _v220.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/set_album_thumbnail${(0, _v220.serializeQuery)(_v0)}`, _v223({
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
  "true" === _v219.default.env.STORYBOOK && (0, _v220.assignMswData)(_v226, {
    endpoint: "/users/:userId/albums/:albumId/videos/:videoId/set_album_thumbnail",
    method: "POST"
  });
  let _v227 = () => {
      let _v0,
        _v1,
        _v2 = _v54(_v0 => _v0.commonStore.featuredContentSortValues),
        _v3 = _v54(_v0 => _v0.commonStore.videoItems),
        _v4 = _v2?.sortKey ? _v45[_v2.sortKey] : void 0,
        {
          handleSortChange: _v5
        } = (_v0 = _v54(_v0 => _v0.commonStore.additionalProps?.showcaseSort), _v1 = _v54(_v0 => _v0.commonStore.actions.setFeaturedContentSort), (0, _v13.useEffect)(() => {
          let _v0 = _v0 ?? _v28.MANUAL,
            {
              sortDirection: _v1,
              sortBy: _v2
            } = _v45[_v0];
          _v1(_v0, _v2, _v1);
        }, []), {
          handleSortChange: (_v0, _v1, _v2) => {
            _v1(_v0, _v1, _v2);
          }
        });
      return (0, _v1.jsx)(_v130, {
        sortOptions: _v45,
        selectedOptionText: _v4?.text || _v45[_v28.MANUAL]?.text,
        isDisabled: !_v3.length,
        onSortChange: _v5,
        currentSortKey: _v2?.sortKey,
        placement: "bottom-start"
      });
    },
    _v228 = () => (0, _v1.jsxs)(_v63.Flex, {
      justify: "space-between",
      children: [(0, _v1.jsx)(_v227, {}), (0, _v1.jsx)(_v127, {})]
    }),
    _v229 = ({
      isLoading: _v0,
      videoListData: _v1
    }) => {
      let _v2 = _v54(_v0 => _v0.commonStore.selectedItemURIs);
      return (0, _v1.jsxs)(_v57.Box, {
        w: "100%",
        display: "grid",
        gap: "3",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        sx: _v161,
        children: [_v1?.map(_v0 => (0, _v1.jsx)(_v159, {
          video: _v0,
          isSelected: _v2.has(_v0.uri)
        }, _v0.uri)), _v0 && (0, _v1.jsx)(_v157, {})]
      });
    },
    _v230 = ({
      isLoading: _v0,
      videoListData: _v1
    }) => (0, _v1.jsx)(_v229, {
      isLoading: _v0,
      videoListData: _v1
    }),
    _v231 = ({
      videoListData: _v0,
      getTimestamp: _v1
    }) => {
      let _v2 = _v54(_v0 => _v0.commonStore.selectedItemURIs);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v0?.map(_v0 => (0, _v1.jsx)(_v184, {
          video: _v0,
          isSelected: _v2.has(_v0.uri),
          timestamp: _v1?.(_v0)
        }, _v0.uri))
      });
    },
    _v232 = ({
      videoListData: _v0
    }) => {
      let _v1,
        _v2,
        _v3,
        _v4 = (_v1 = (0, _v73.useViewer)(), _v2 = _v1?.locale, _v3 = _v54(_v0 => _v0.commonStore.featuredContentSortValues), (0, _v13.useCallback)(_v0 => _v147(_v3?.sortBy === _v28.MODIFIED ? _v0?.modifiedTime : _v0.createdTime, _v2), [_v3, _v2]));
      return (0, _v1.jsx)(_v231, {
        videoListData: _v0,
        getTimestamp: _v4
      });
    },
    _v233 = ({
      videoListData: _v0,
      setSize: _v1,
      size: _v2,
      isDone: _v3,
      isLoadingInitialData: _v4,
      isLoadingMore: _v5
    }) => {
      let _v6 = _v54(_v0 => _v0.commonStore.layout),
        _v7 = _v4 || !!_v5;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v6 === _v26.LIST ? (0, _v1.jsx)(_v232, {
          videoListData: _v0
        }) : (0, _v1.jsx)(_v230, {
          isLoading: _v7,
          videoListData: _v0
        }), (0, _v1.jsx)(_v200, {
          canLoadMore: !_v3,
          isLoadingMore: _v7,
          onActivate: () => _v1(_v2 + 1)
        })]
      });
    },
    _v234 = ["configUrl", "createdTime", "modifiedTime", "description", "duration", "manageLink", "link", "live.archivedTime", "live.recurringEvent.album", "live.recurringEvent.link", "live.recurringEvent.preferredStreamMethod", "live.recurringEvent.metadata.connections.liveVideo.status", "live.recurringEvent.status", "live.recurringEvent.eventType", "live.recurringEvent.nextOccurrenceTime", "live.status", "name", "pictures.sizes.link", "pictures.sizes.width", "pictures.uri", "pictures.defaultPicture", "privacy.download", "privacy.embed", "privacy.view", "privacy.originalView", "resourceKey", "type", "uri", "user.link", "user.name", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.uri", "metadata.interactions.album"],
    _v235 = {
      additionalConfig: {
        layoutLSKey: `${_v39}_ssfcm`,
        singleSelect: !0
      },
      components: {
        Footer: ({
          cancelButtonRef: _v0,
          getFooterFocusStyles: _v1,
          onSuccess: _v2,
          onCancel: _v3
        }) => {
          let {
              handleModalClose: _v4
            } = _v66(),
            {
              responsiveDesign: {
                footer: {
                  closeButtonProps: _v5
                }
              }
            } = _v20(),
            {
              isLoading: _v6,
              saveVideoThumbnail: _v7,
              isButtonDisabled: _v8
            } = (({
              onSuccess: _v0
            }) => {
              let {
                  handleModalClose: _v1
                } = _v66(),
                _v2 = (0, _v79.useToast)(),
                _v3 = _v54(_v0 => _v0.commonStore.patchErrorVisibility),
                _v4 = _v54(_v0 => _v0.commonStore.selectedItemURIs),
                _v5 = _v54(_v0 => _v0.commonStore.videoItems),
                _v6 = _v54(_v0 => _v0.commonStore.resourceId),
                _v7 = _v54(_v0 => _v0.commonStore.resourceOwnerId),
                _v8 = _v54(_v0 => _v0.commonStore.actions.setPatchErrorVisibility),
                [_v9, {
                  data: _v10,
                  loading: _v11,
                  error: _v12
                }] = _v226(),
                _v13 = (0, _v13.useMemo)(() => [..._v4][0], [_v4]),
                _v14 = (0, _v13.useMemo)(() => _v5.find(_v0 => _v0.uri === _v13), [_v5, _v13]),
                _v15 = (0, _v13.useMemo)(() => ({
                  videoId: Number(_v14?.uri?.split("/").pop()),
                  userId: Number(_v14?.user?.uri.split("/").pop())
                }), [_v14]);
              return (0, _v13.useEffect)(function () {
                try {
                  if (!_v11 && _v12) throw Error("Error saving thumbnail");
                  if (!_v11 && _v10) if (_v10?.pictures?.[0]) _v0?.(_v13), _v1(), _v2({
                    title: (0, _v32.translate)({
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
                    }),
                    status: "success"
                  });else throw Error("Error saving thumbnail");
                } catch (_v0) {
                  void 0 === _v3 && _v8(!0);
                }
              }, [_v11, _v10, _v12]), {
                saveVideoThumbnail: () => {
                  !1 === _v3 && _v8(), _v9({
                    where: {
                      albumId: _v6,
                      videoId: _v15?.videoId,
                      userId: _v7 ?? _v15?.userId
                    },
                    select: ["pictures"],
                    headers: {
                      Accept: `application/vnd.vimeo.*+json;version=${_v36}`
                    }
                  });
                },
                isLoading: _v11,
                isButtonDisabled: () => !_v14
              };
            })({
              onSuccess: _v2
            });
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v78, {
              ref: _v0,
              _focus: _v1(),
              onClick: () => {
                _v4(), _v3?.();
              },
              ..._v5,
              children: (0, _v32.translate)({
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
            }), (0, _v1.jsx)(_v78, {
              onClick: _v7,
              variant: "primary",
              isLoading: _v6,
              isDisabled: _v8(),
              children: (0, _v32.translate)({
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
              })
            })]
          });
        },
        Header: () => (0, _v1.jsxs)(_v63.Flex, {
          direction: "column",
          gap: "md",
          children: [(0, _v32.translate)({
            singular: "Select a video",
            dictionary: {
              es: {
                singular: "Seleccionar un video"
              },
              "de-DE": {
                singular: "Video auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner une vidéo"
              },
              "ja-JP": {
                singular: "動画を選択"
              },
              "ko-KR": {
                singular: "동영상 선택"
              },
              "pt-BR": {
                singular: "Selecione um vídeo"
              },
              "zh-CN": {
                singular: "选择视频"
              }
            }
          }), (0, _v1.jsx)(_v140, {}), (0, _v1.jsx)(_v228, {})]
        }),
        PatchErrorAlert: () => (0, _v1.jsx)(_v141, {
          text: (0, _v32.translate)({
            singular: "Couldn’t save changes. Try reloading the page.",
            dictionary: {
              es: {
                singular: "No se pudieron guardar los cambios. Intente volver a cargar la página."
              },
              "de-DE": {
                singular: "Änderungen konnten nicht gespeichert werden. Versuchen Sie, die Seite neu zu laden."
              },
              "fr-FR": {
                singular: "Impossible d'enregistrer les modifications. Essayez d'actualiser la page."
              },
              "ja-JP": {
                singular: "変更を保存できませんでした。ページを再読み込みしてください。"
              },
              "ko-KR": {
                singular: "변경 사항을 저장하지 못했습니다. 페이지를 다시 로드해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível salvar as alterações. Tente recarregar a página."
              },
              "zh-CN": {
                singular: "无法保存更改。请尝试重新加载页面。"
              }
            }
          })
        }),
        VideoList: () => {
          let {
            isInitialLoadingFailed: _v0,
            videoListData: _v1,
            isLoading: _v2,
            setSize: _v3,
            size: _v4,
            isLoadingInitialData: _v5,
            isLoadingMore: _v6,
            isVideoItemsEmpty: _v7,
            isDone: _v8,
            query: _v9
          } = (() => {
            let _v0 = _v54(_v0 => _v0.commonStore.resourceId),
              _v1 = _v54(_v0 => _v0.commonStore.videoItems),
              _v2 = _v54(_v0 => _v0.commonStore.searchQuery),
              _v3 = _v54(_v0 => _v0.commonStore.featuredContentSortValues),
              _v4 = _v54(_v0 => _v0.commonStore.additionalProps),
              _v5 = _v54(_v0 => _v0.commonStore.actions.setLoadMoreErrorVisibility),
              _v6 = _v54(_v0 => _v0.commonStore.actions.setVideoItems),
              _v7 = (0, _v206.useDebouncedValue)(_v2, 500),
              {
                data: _v8,
                size: _v9,
                isLoading: _v10,
                error: _v11,
                setSize: _v12
              } = (0, _v80.useGetAlbumVideosInfinite)(() => ({
                select: _v234,
                where: {
                  albumId: _v0
                },
                query: {
                  perPage: 25,
                  query: _v7.trim() ? _v7 : void 0,
                  sort: _v3?.sortBy,
                  direction: _v3?.sortDirection
                },
                headers: {
                  Accept: `application/vnd.vimeo.*+json;version=${_v36}`
                }
              }), {
                revalidateOnFocus: !1,
                errorRetryCount: 0
              }),
              {
                isLoadingInitialData: _v13,
                isLoadingMore: _v14,
                isDone: _v15
              } = (0, _v13.useMemo)(() => (0, _v202.getInfiniteRequestLoadingState)({
                data: _v8,
                size: _v9,
                itemsPerPage: 25
              }), [_v8, _v9]);
            return (0, _v13.useEffect)(function () {
              try {
                if (_v11 && 1 !== _v9 || _v5(!1), !_v10 && _v11) throw Error("Error fetching data");
                if (!_v10 && _v8) {
                  let _v0 = _v8.flatMap(_v0 => _v0.data);
                  if (_v0) {
                    let _v0 = _v4?.hideUpcoming === !0 ? _v0.filter(_v0 => !(_v0?.live && !_v0.live.archivedTime && _v0.live.recurringEvent?.album?.id === _v0)) : _v0;
                    _v6(_v0);
                  } else throw Error("Data is empty");
                }
              } catch (_v0) {
                _v9 > 1 && _v5(!0);
              }
            }, [_v8, _v10, _v11]), {
              isInitialLoadingFailed: () => !!_v11 && 1 === _v9,
              videoListData: _v1,
              size: _v9,
              isLoading: _v10,
              setSize: _v12,
              isLoadingInitialData: _v13,
              isLoadingMore: _v14,
              isVideoItemsEmpty: () => 0 === _v1.length,
              query: _v7,
              isDone: _v15
            };
          })();
          return _v2 ? (0, _v1.jsx)(_v193, {}) : _v0() ? (0, _v1.jsx)(_v67, {}) : _v7() && _v8 && _v9 ? (0, _v1.jsx)(_v194, {}) : (0, _v1.jsx)(_v233, {
            size: _v4,
            videoListData: _v1,
            setSize: _v3,
            isLoadingInitialData: _v5,
            isLoadingMore: _v6,
            isDone: _v8
          });
        }
      }
    },
    _v236 = () => {
      let _v0 = _v54(_v0 => _v0.itemListStore.showFolderView),
        {
          sortOptions: _v1,
          selectedOptionText: _v2,
          isDisabled: _v3,
          handleSortChange: _v4,
          sortValues: _v5
        } = _v131();
      return (0, _v1.jsxs)(_v63.Flex, {
        direction: "column",
        gap: "sm",
        children: [_v0 && (0, _v1.jsx)(_v124, {}), (0, _v1.jsx)(_v63.Flex, {
          justify: "end",
          children: (0, _v1.jsxs)(_v63.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v130, {
              sortOptions: _v1,
              selectedOptionText: _v2,
              isDisabled: _v3,
              onSortChange: _v4,
              currentSortKey: _v5?.sortKey
            }), (0, _v1.jsx)(_v127, {})]
          })
        })]
      });
    },
    _v237 = {
      additionalConfig: {
        layoutLSKey: `${_v39}_vft`,
        singleSelect: !0,
        defaultLayout: _v26.GRID
      },
      components: {
        Footer: ({
          cancelButtonRef: _v0,
          getFooterFocusStyles: _v1,
          onSuccess: _v2
        }) => {
          let {
              handleModalClose: _v3,
              resetStores: _v4
            } = _v66(),
            {
              responsiveDesign: {
                footer: {
                  closeButtonProps: _v5
                }
              }
            } = _v20(),
            _v6 = _v54(_v0 => _v0.commonStore.selectedItemURIs),
            _v7 = 1 !== _v6.size;
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v78, {
              ref: _v0,
              _focus: _v1(),
              onClick: _v3,
              ..._v5,
              children: (0, _v32.translate)({
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
            }), (0, _v1.jsx)(_v78, {
              variant: "primary",
              isDisabled: _v7,
              onClick: () => {
                let _v0 = [..._v6][0];
                _v4(), _v2?.(_v0);
              },
              children: (0, _v32.translate)({
                singular: "Select",
                dictionary: {
                  es: {
                    singular: "Seleccionar"
                  },
                  "de-DE": {
                    singular: "Auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner"
                  },
                  "ja-JP": {
                    singular: "選択"
                  },
                  "ko-KR": {
                    singular: "선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar"
                  },
                  "zh-CN": {
                    singular: "选择"
                  }
                }
              })
            })]
          });
        },
        Header: () => (0, _v1.jsxs)(_v63.Flex, {
          direction: "column",
          gap: "md",
          children: [(0, _v32.translate)({
            singular: "Select a video",
            dictionary: {
              es: {
                singular: "Seleccionar un video"
              },
              "de-DE": {
                singular: "Video auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner une vidéo"
              },
              "ja-JP": {
                singular: "動画を選択"
              },
              "ko-KR": {
                singular: "동영상 선택"
              },
              "pt-BR": {
                singular: "Selecione um vídeo"
              },
              "zh-CN": {
                singular: "选择视频"
              }
            }
          }), (0, _v1.jsx)(_v140, {}), (0, _v1.jsx)(_v236, {})]
        }),
        PatchErrorAlert: () => null,
        VideoList: _v215
      }
    },
    _v238 = {
      [_v24.ADD_VIDEO_TO_SHOWCASE]: _v216,
      [_v24.CREATE_REVIEW_LINK]: _v218,
      [_v24.SET_SHOWCASE_FEATURED_CONTENT]: _v235,
      [_v24.VIDEO_FILE_TRANSFER]: _v237
    };
  _v0.s(["VideoListModal", 0, ({
    closeVideoModal: _v0,
    resourceId: _v1,
    resourceOwnerId: _v2,
    showVideoFilter: _v3,
    type: _v4,
    selectedVideo: _v5,
    additionalProps: _v6,
    ..._v7
  }) => {
    (({
      closeVideoModal: _v0,
      resourceId: _v1,
      resourceOwnerId: _v2,
      showVideoFilter: _v3,
      selectedVideo: _v4,
      additionalProps: _v5
    }) => {
      let _v6 = _v54(_v0 => _v0.commonStore.actions.setCloseVideoModal),
        _v7 = _v54(_v0 => _v0.commonStore.actions.setResourceId),
        _v8 = _v54(_v0 => _v0.commonStore.actions.setResourceOwnerId),
        _v9 = _v54(_v0 => _v0.commonStore.actions.setShowVideoFilter),
        _v10 = _v54(_v0 => _v0.commonStore.actions.setSelectedItemURIs),
        _v11 = _v54(_v0 => _v0.commonStore.actions.setAdditionalProps);
      (0, _v13.useEffect)(() => {
        _v3 && _v9(_v3);
      }, [_v3, _v9]), (0, _v13.useEffect)(() => {
        _v6(_v0);
      }, [_v0, _v6]), (0, _v13.useEffect)(() => {
        _v7(_v1);
      }, [_v1, _v7]), (0, _v13.useEffect)(() => {
        _v2 && _v8(_v2);
      }, [_v2, _v8]), (0, _v13.useEffect)(() => {
        _v10(_v4 ? new Set([_v4.uri]) : new Set());
      }, [_v4, _v10]), (0, _v13.useEffect)(() => {
        _v5 && _v11(_v5);
      }, [_v5, _v11]);
    })({
      closeVideoModal: _v0,
      resourceId: _v1,
      resourceOwnerId: _v2,
      showVideoFilter: _v3,
      selectedVideo: _v5,
      additionalProps: _v6
    });
    let {
      isModalConfigReady: _v8
    } = (({
      type: _v0
    }) => {
      let _v1 = _v238[_v0],
        {
          modalConfig: _v2,
          actions: {
            setModalConfig: _v3
          }
        } = _v54(_v0 => _v0.commonStore);
      return (0, _v13.useEffect)(() => {
        _v3(_v1);
      }, [_v1, _v3]), {
        isModalConfigReady: () => Object.keys(_v2).length > 0
      };
    })({
      type: _v4
    });
    return _v8() ? (0, _v1.jsx)(_v3.PlayerContextProvider, {
      assetUrls: (0, _v2.getPlayerAssetUrls)(),
      type: _v4.PlayerType.BarebonePlayer,
      children: (0, _v1.jsx)(_v77, {
        children: (0, _v1.jsx)(_v70, {
          ..._v7
        })
      })
    }) : null;
  }], 0);
}