{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4() {
    return null;
  }
  let _v5 = async _v0 => {
    let {
        key: _v1,
        value: _v2,
        tagRootSpan: _v3 = !1
      } = _v0,
      _v4 = await _v4();
    if (!_v4) return void console.warn("[Datadog] dd-trace is not available");
    let _v5 = _v4.scope().active();
    if (!_v5) return void console.warn("[Datadog] No active span found to set tag");
    if (_v5.setTag(_v1, _v2), !_v3) return;
    let _v6 = _v5.context()._trace?.started?.[0];
    _v6 ? _v6.setTag(_v1, _v2) : console.warn("[Datadog] No root span found to set tag");
  };
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = "filters",
    _v17 = "sort",
    _v18,
    _v19 = (0, _v3.createContext)({}),
    _v20 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(_v18),
        _v3 = (0, _v15.useBreakpointValue)({
          base: !0,
          md: !1
        }) ?? !1,
        _v4 = _v3 && !!_v1;
      return (0, _v1.jsx)(_v19.Provider, {
        value: {
          panelStatus: _v1,
          togglePanel: _v0 => {
            _v1 === _v18 || _v0 !== _v1 ? _v2(_v0) : _v2(_v18);
          },
          hasDrawer: _v3,
          isDrawerOpen: _v4
        },
        children: _v0
      });
    };
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => {
    let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
      _v1 = (0, _v25.shouldShowInDevelopmentFeature)("reframe_override", !0),
      {
        loading: _v2,
        capabilities: {
          hasPaid: _v3
        }
      } = (0, _v24.useCapability)(["hasPaid"]),
      {
        loading: _v4,
        ready: _v5,
        capabilities: {
          hasPublicSearchDisabled: _v6 = !0,
          hasAgenticSearch: _v7 = !1,
          hasEnterprise: _v8,
          hasAutoClosedCaptions: _v9,
          canManageTeamCollections: _v10,
          hasLiveSubscription: _v11,
          hasVideoReviewPageDemo: _v12,
          canSeeUpsellModalOnShare: _v13,
          hasMultipleReviewLinks: _v14,
          hasTeamPrivacy: _v15
        }
      } = (0, _v24.useCapability)(["hasPublicSearchDisabled", "hasAgenticSearch", "hasEnterprise", "hasAutoClosedCaptions", "canManageTeamCollections", "hasLiveSubscription", "hasVideoReviewPageDemo", "canSeeUpsellModalOnShare", "hasMultipleReviewLinks", "hasTeamPrivacy"], _v0?.teamUser?.ownerId),
      {
        loading: _v16,
        contentSpaceEnabled: _v17
      } = (0, _v23.useContentSpaceEnabled)(_v0?.teamUser?.ownerId);
    return {
      hasEnterprise: _v8,
      hasPublicSearchDisabled: !(0, _v22.isPublicSearchAvailable)(_v6, _v0),
      hasAutoClosedCaptions: _v9,
      hasAgenticSearch: _v7,
      hasReframeOverride: _v1,
      isLoading: _v2 || _v4 || _v16,
      hasPaid: _v3,
      canManageTeamCollections: _v10,
      hasLiveSubscription: _v11,
      hasContentSpaceEnabled: _v17,
      hasVideoReviewPageDemo: _v12,
      hasTeamPrivacy: _v15,
      canSeeUpsellModalOnShare: _v13,
      hasMultipleReviewLinks: _v14,
      ready: _v5
    };
  };
  var _v28 = _v0.i(0);
  let _v29 = (0, _v21.v4)(),
    _v30 = "Unable to load results",
    _v31 = "Reset",
    _v32 = "filters",
    _v33 = {
      base: "base",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl"
    },
    _v34 = "#bdc1c4",
    _v35 = "library",
    _v36 = "sort",
    _v37 = "MyLibrary",
    _v38 = "Vimeo",
    _v39 = "alphabetical",
    _v40 = "last_user_action_event_date",
    _v41 = "date";
  (0, _v28.keyframes)({
    "0%": {
      opacity: "0"
    },
    "75%": {
      opacity: "0"
    },
    "100%": {
      opacity: "100%"
    }
  });
  let _v42 = (0, _v9.rem)(272),
    _v43 = "(max-width: 768px)";
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = {
      get ANY() {
        return (0, _v48.translate)({
          singular: "Any",
          dictionary: {
            es: {
              singular: "Cualquiera"
            },
            "de-DE": {
              singular: "Beliebig einstellbar"
            },
            "fr-FR": {
              singular: "Tous"
            },
            "ja-JP": {
              singular: "すべての"
            },
            "ko-KR": {
              singular: "모두"
            },
            "pt-BR": {
              singular: "Qualquer"
            },
            "zh-CN": {
              singular: "任何"
            }
          }
        });
      },
      get ALL() {
        return (0, _v48.translate)({
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
        });
      },
      get GENRES() {
        return (0, _v48.translate)({
          singular: "Genres",
          dictionary: {
            es: {
              singular: "Géneros"
            },
            "de-DE": {
              singular: "Genre"
            },
            "ja-JP": {
              singular: "ジャンル"
            },
            "ko-KR": {
              singular: "장르"
            },
            "pt-BR": {
              singular: "Gêneros"
            },
            "zh-CN": {
              singular: "类型"
            }
          }
        });
      },
      get CATEGORIES() {
        return (0, _v48.translate)({
          singular: "Categories",
          dictionary: {
            es: {
              singular: "Categorías"
            },
            "de-DE": {
              singular: "Kategorien"
            },
            "fr-FR": {
              singular: "Catégories"
            },
            "ja-JP": {
              singular: "カテゴリー"
            },
            "ko-KR": {
              singular: "카테고리"
            },
            "pt-BR": {
              singular: "Categorias"
            },
            "zh-CN": {
              singular: "类别"
            }
          }
        });
      },
      get CONTENT_FILTER() {
        return (0, _v48.translate)({
          singular: "Mature content",
          dictionary: {
            es: {
              singular: "Contenido para adultos"
            },
            "de-DE": {
              singular: "Inhalte für Erwachsene"
            },
            "fr-FR": {
              singular: "Contenu réservé aux adultes"
            },
            "ja-JP": {
              singular: "成人向けコンテンツ"
            },
            "ko-KR": {
              singular: "성인용 콘텐츠"
            },
            "pt-BR": {
              singular: "Conteúdo maduro"
            },
            "zh-CN": {
              singular: "成人内容"
            }
          }
        });
      },
      get SHOW_MORE() {
        return (0, _v48.translate)({
          singular: "Show more",
          dictionary: {
            es: {
              singular: "Mostrar más"
            },
            "de-DE": {
              singular: "Mehr anzeigen"
            },
            "fr-FR": {
              singular: "Afficher plus"
            },
            "ja-JP": {
              singular: "その他を表示する"
            },
            "ko-KR": {
              singular: "더 보기"
            },
            "pt-BR": {
              singular: "Mostar mais"
            },
            "zh-CN": {
              singular: "显示更多"
            }
          }
        });
      },
      get SHOW_LESS() {
        return (0, _v48.translate)({
          singular: "Show less",
          dictionary: {
            es: {
              singular: "Mostrar menos"
            },
            "de-DE": {
              singular: "Weniger anzeigen"
            },
            "fr-FR": {
              singular: "Afficher moins"
            },
            "ja-JP": {
              singular: "表示件数を減らす"
            },
            "ko-KR": {
              singular: "줄이기"
            },
            "pt-BR": {
              singular: "Mostrar menos"
            },
            "zh-CN": {
              singular: "收起"
            }
          }
        });
      },
      get REMOVE_WATCH_LATER() {
        return (0, _v48.translate)({
          singular: "Remove from Watch Later",
          dictionary: {
            es: {
              singular: 'Eliminar de "Ver después"'
            },
            "de-DE": {
              singular: "Aus „Später anschauen“ entfernen"
            },
            "fr-FR": {
              singular: "Enlever de la liste Regarder plus tard"
            },
            "ja-JP": {
              singular: "後で見るから削除"
            },
            "ko-KR": {
              singular: "나중에 보기 대기열에서 제거"
            },
            "pt-BR": {
              singular: "Remover do Assistir Depois"
            },
            "zh-CN": {
              singular: "从稍后观看中移除"
            }
          }
        });
      },
      get ADD_WATCH_LATER() {
        return (0, _v48.translate)({
          singular: "Add to Watch Later",
          dictionary: {
            es: {
              singular: 'Agregar a "Ver después"'
            },
            "de-DE": {
              singular: 'Zu „Später anschauen" hinzufügen'
            },
            "fr-FR": {
              singular: "Ajouter à la liste Regarder plus tard"
            },
            "ja-JP": {
              singular: "「後で見る」に追加"
            },
            "ko-KR": {
              singular: "나중에 보기"
            },
            "pt-BR": {
              singular: "Adicionar ao Assistir Depois"
            },
            "zh-CN": {
              singular: "添加到稍后观看"
            }
          }
        });
      },
      get FILTERS() {
        return (0, _v48.translate)({
          singular: "Filters",
          dictionary: {
            es: {
              singular: "Filtros"
            },
            "de-DE": {
              singular: "Filter"
            },
            "fr-FR": {
              singular: "Filtres"
            },
            "ja-JP": {
              singular: "フィルター"
            },
            "ko-KR": {
              singular: "필터"
            },
            "pt-BR": {
              singular: "Filtros"
            },
            "zh-CN": {
              singular: "过滤器"
            }
          }
        });
      },
      get SORT() {
        return (0, _v48.translate)({
          singular: "Sort",
          dictionary: {
            es: {
              singular: "Organizar por"
            },
            "de-DE": {
              singular: "Sortieren"
            },
            "fr-FR": {
              singular: "Trier"
            },
            "ja-JP": {
              singular: "並べ替え："
            },
            "ko-KR": {
              singular: "정렬"
            },
            "pt-BR": {
              singular: "Classificar por:"
            },
            "zh-CN": {
              singular: "排序"
            }
          }
        });
      },
      get VIEW_PROFILE() {
        return (0, _v48.translate)({
          singular: "View profile",
          dictionary: {
            es: {
              singular: "Ver perfil"
            },
            "de-DE": {
              singular: "Profil anzeigen"
            },
            "fr-FR": {
              singular: "Voir le profil"
            },
            "ja-JP": {
              singular: "プロフィールを見る"
            },
            "ko-KR": {
              singular: "프로필 보기"
            },
            "pt-BR": {
              singular: "Ver perfil"
            },
            "zh-CN": {
              singular: "查看个人资料"
            }
          }
        });
      },
      get NO_FILTER_RESULTS() {
        return (0, _v48.translate)({
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
        });
      },
      get NO_PUBLIC_RESULTS() {
        return (0, _v48.translate)({
          singular: "No matching results on Vimeo",
          dictionary: {
            es: {
              singular: "No hay resultados coincidentes en Vimeo"
            },
            "de-DE": {
              singular: "Keine übereinstimmenden Ergebnisse auf Vimeo"
            },
            "fr-FR": {
              singular: "Aucun résultat correspondant sur Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoで一致する結果がありません"
            },
            "ko-KR": {
              singular: "Vimeo에 일치하는 결과가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum resultado correspondente no Vimeo"
            },
            "zh-CN": {
              singular: "在 Vimeo 上暂无匹配结果"
            }
          }
        });
      },
      get NO_LIBRARY_RESULTS() {
        return (0, _v48.translate)({
          singular: "No matching results in Library",
          dictionary: {
            es: {
              singular: "No hay resultados coincidentes en la biblioteca"
            },
            "de-DE": {
              singular: "Keine übereinstimmenden Ergebnisse in der Bibliothek"
            },
            "fr-FR": {
              singular: "Aucun résultat correspondant dans la bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリに一致する結果がありません"
            },
            "ko-KR": {
              singular: "라이브러리에 일치하는 결과가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum resultado correspondente na Biblioteca"
            },
            "zh-CN": {
              singular: "库中没有匹配结果"
            }
          }
        });
      },
      get HIGH_RESULT_COUNT_MOMENTS() {
        return (0, _v48.translate)({
          singular: "100+ results in this video",
          dictionary: {
            es: {
              singular: "Más de 100 resultados en este video"
            },
            "de-DE": {
              singular: "100+ Ergebnisse in diesem Video"
            },
            "fr-FR": {
              singular: "Plus de 100 résultats dans cette vidéo"
            },
            "ja-JP": {
              singular: "この動画の100件以上の結果"
            },
            "ko-KR": {
              singular: "이 동영상 내 결과 100개 이상"
            },
            "pt-BR": {
              singular: "Mais de 100 resultados neste vídeo"
            },
            "zh-CN": {
              singular: "此视频中有 100 多个结果"
            }
          }
        });
      },
      get TRY_ANOTHER_SEARCH() {
        return (0, _v48.translate)({
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
        });
      },
      get TRY_AGAIN_OR_SEARCH_VIMEO() {
        return (0, _v48.translate)({
          singular: "Try another search or search all of Vimeo",
          dictionary: {
            es: {
              singular: "Pruebe con otra búsqueda o busque en todo Vimeo"
            },
            "de-DE": {
              singular: "Versuchen Sie eine andere Suche oder durchsuchen Sie ganz Vimeo"
            },
            "fr-FR": {
              singular: "Essayez une autre recherche ou recherchez dans tous les contenus Vimeo"
            },
            "ja-JP": {
              singular: "別の検索を試すか、 Vimeo全体を検索してください"
            },
            "ko-KR": {
              singular: "다른 검색을 시도하거나 Vimeo 전체를 검색해 보세요."
            },
            "pt-BR": {
              singular: "Tente outra pesquisa ou pesquise tudo no Vimeo"
            },
            "zh-CN": {
              singular: "尝试其他搜索或搜索整个 Vimeo"
            }
          }
        });
      },
      get RESET() {
        return (0, _v48.translate)({
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
        });
      },
      get RESET_ALL() {
        return (0, _v48.translate)({
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
        });
      },
      get UNABLE_LOAD_RESULTS() {
        return (0, _v48.translate)({
          singular: "Unable to load results",
          dictionary: {
            es: {
              singular: "No se pueden cargar los resultados"
            },
            "de-DE": {
              singular: "Ergebnisse können nicht geladen werden"
            },
            "fr-FR": {
              singular: "Impossible de charger les résultats"
            },
            "ja-JP": {
              singular: "結果を読み込めません"
            },
            "ko-KR": {
              singular: "결과를 불러올 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível carregar os resultados"
            },
            "zh-CN": {
              singular: "无法加载结果"
            }
          }
        });
      },
      get SEARCH_ALL_VIMEO() {
        return (0, _v48.translate)({
          singular: "Search all of Vimeo",
          dictionary: {
            es: {
              singular: "Buscar en todo Vimeo"
            },
            "de-DE": {
              singular: "Ganz Vimeo durchsuchen"
            },
            "fr-FR": {
              singular: "Rechercher dans tout Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoのすべてを検索"
            },
            "ko-KR": {
              singular: "Vimeo 전체 검색"
            },
            "pt-BR": {
              singular: "Pesquisar tudo no Vimeo"
            },
            "zh-CN": {
              singular: "搜索 Vimeo 的所有内容"
            }
          }
        });
      },
      get SELECT_USERS() {
        return (0, _v48.translate)({
          singular: "Select users",
          dictionary: {
            es: {
              singular: "Seleccionar usuarios"
            },
            "de-DE": {
              singular: "Benutzer auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner des utilisateurs"
            },
            "ja-JP": {
              singular: "ユーザーを選択"
            },
            "ko-KR": {
              singular: "사용자 선택"
            },
            "pt-BR": {
              singular: "Selecionar usuários"
            },
            "zh-CN": {
              singular: "选择用户"
            }
          }
        });
      },
      get SELECT_FOLDERS() {
        return (0, _v48.translate)({
          singular: "Select folders",
          dictionary: {
            es: {
              singular: "Seleccionar carpetas"
            },
            "de-DE": {
              singular: "Ordner auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner des dossiers"
            },
            "ja-JP": {
              singular: "フォルダーを選択"
            },
            "ko-KR": {
              singular: "폴더 선택"
            },
            "pt-BR": {
              singular: "Selecionar pastas"
            },
            "zh-CN": {
              singular: "选择文件夹"
            }
          }
        });
      },
      get LAST_MODIFIED() {
        return (0, _v48.translate)({
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
        });
      },
      get LAST_ACTIVE() {
        return (0, _v48.translate)({
          singular: "Last active",
          dictionary: {
            es: {
              singular: "Activo por última vez"
            },
            "de-DE": {
              singular: "Zuletzt aktiv"
            },
            "fr-FR": {
              singular: "Dernière activité"
            },
            "ja-JP": {
              singular: "最後のアクティブ時間"
            },
            "ko-KR": {
              singular: "최근 활동"
            },
            "pt-BR": {
              singular: "Ativo pela última vez"
            }
          }
        });
      },
      get PROFILE_PICTURE() {
        return (0, _v48.translate)({
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
        });
      },
      get DEACTIVATED() {
        return (0, _v48.translate)({
          singular: "Deactivated",
          dictionary: {
            es: {
              singular: "Desactivado"
            },
            "de-DE": {
              singular: "Deaktiviert"
            },
            "fr-FR": {
              singular: "Désactivé"
            },
            "ja-JP": {
              singular: "無効"
            },
            "ko-KR": {
              singular: "비활성화됨"
            },
            "pt-BR": {
              singular: "Desativado"
            },
            "zh-CN": {
              singular: "已停用"
            }
          }
        });
      },
      get SEARCH() {
        return (0, _v48.translate)({
          singular: "Search",
          dictionary: {
            es: {
              singular: "Buscar"
            },
            "de-DE": {
              singular: "Suchen"
            },
            "fr-FR": {
              singular: "Chercher"
            },
            "ja-JP": {
              singular: "検索"
            },
            "ko-KR": {
              singular: "검색"
            },
            "pt-BR": {
              singular: "Pesquisar"
            },
            "zh-CN": {
              singular: "搜索"
            }
          }
        });
      },
      get CLEAR() {
        return (0, _v48.translate)({
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
        });
      },
      get TITLE() {
        return (0, _v48.translate)({
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
        });
      },
      get LOCATION() {
        return (0, _v48.translate)({
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
        });
      },
      get MODIFIED() {
        return (0, _v48.translate)({
          singular: "Modified",
          dictionary: {
            es: {
              singular: "Modificado"
            },
            "de-DE": {
              singular: "Modifiziert"
            },
            "fr-FR": {
              singular: "Modifiée"
            },
            "ja-JP": {
              singular: "変更日"
            },
            "ko-KR": {
              singular: "수정됨"
            },
            "pt-BR": {
              singular: "Modificado"
            },
            "zh-CN": {
              singular: "修改于"
            }
          }
        });
      },
      get ADDED() {
        return (0, _v48.translate)({
          singular: "Added",
          dictionary: {
            es: {
              singular: "Añadido"
            },
            "de-DE": {
              singular: "Hinzugefügt"
            },
            "fr-FR": {
              singular: "Ajouté"
            },
            "ja-JP": {
              singular: "追加した日"
            },
            "ko-KR": {
              singular: "추가됨"
            },
            "pt-BR": {
              singular: "Adicionado(a)"
            },
            "zh-CN": {
              singular: "已添加"
            }
          }
        });
      },
      get SEARCH_FOLDERS() {
        return (0, _v48.translate)({
          singular: "Search folders",
          dictionary: {
            es: {
              singular: "Buscar en carpetas"
            },
            "de-DE": {
              singular: "Ordner durchsuchen"
            },
            "fr-FR": {
              singular: "Recherche dans les dossiers"
            },
            "ja-JP": {
              singular: "検索フォルダー"
            },
            "ko-KR": {
              singular: "폴더 검색"
            },
            "pt-BR": {
              singular: "Pesquisar Pastas"
            },
            "zh-CN": {
              singular: "搜索文件夹"
            }
          }
        });
      },
      get APPLY() {
        return (0, _v48.translate)({
          singular: "Apply",
          dictionary: {
            es: {
              singular: "Aplicar"
            },
            "de-DE": {
              singular: "Anwenden"
            },
            "fr-FR": {
              singular: "Appliquer"
            },
            "ja-JP": {
              singular: "適用する"
            },
            "ko-KR": {
              singular: "적용"
            },
            "pt-BR": {
              singular: "Aplicar"
            },
            "zh-CN": {
              singular: "应用"
            }
          }
        });
      },
      get PUBLIC() {
        return (0, _v48.translate)("Vimeo");
      },
      get LIBRARY() {
        return (0, _v48.translate)({
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
      },
      get LINK_COPIED() {
        return (0, _v48.translate)({
          singular: "Link copied",
          dictionary: {
            es: {
              singular: "Vínculo copiado"
            },
            "de-DE": {
              singular: "Link kopiert"
            },
            "fr-FR": {
              singular: "Lien copié"
            },
            "ja-JP": {
              singular: "リンクがコピーされました"
            },
            "ko-KR": {
              singular: "링크가 복사됐습니다"
            },
            "pt-BR": {
              singular: "Link copiado"
            },
            "zh-CN": {
              singular: "链接已复制"
            }
          }
        });
      },
      get COMMENT_LINK_COPIED() {
        return (0, _v48.translate)({
          singular: "Comment link copied",
          dictionary: {
            es: {
              singular: "Enlace del comentario copiado"
            },
            "de-DE": {
              singular: "Kommentarlink kopiert"
            },
            "fr-FR": {
              singular: "Lien du commentaire copié"
            },
            "ja-JP": {
              singular: "コメントリンクをコピーしました"
            },
            "ko-KR": {
              singular: "댓글 링크가 복사되었습니다."
            },
            "pt-BR": {
              singular: "Link do comentário copiado"
            },
            "zh-CN": {
              singular: "评论链接已复制"
            }
          }
        });
      },
      get EMBED_CODE_COPIED() {
        return (0, _v48.translate)({
          singular: "Embed code copied",
          dictionary: {
            es: {
              singular: "Se copió el código de inserción"
            },
            "de-DE": {
              singular: "Einbettungscode kopiert"
            },
            "fr-FR": {
              singular: "Code d'intégration copié"
            },
            "ja-JP": {
              singular: "埋め込みコードがコピーされました"
            },
            "ko-KR": {
              singular: "임베드 코드를 복사했습니다"
            },
            "pt-BR": {
              singular: "Código de incorporação copiado"
            },
            "zh-CN": {
              singular: "嵌入代码已复制"
            }
          }
        });
      },
      get GENERIC_ERROR() {
        return (0, _v48.translate)({
          singular: "Sorry, something weird happened. Please try again.",
          dictionary: {
            es: {
              singular: "Lo sentimos, algo salió mal. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Hier ist leider etwas schief gegangen. Bitte erneut versuchen."
            },
            "fr-FR": {
              singular: "Désolé, quelque chose de bizarre s'est produit. Veuillez essayer à nouveau."
            },
            "ja-JP": {
              singular: "申し訳ありません、問題が発生しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "죄송합니다, 알 수 없는 오류가 발생했습니다. 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Desculpe, algo estranho aconteceu. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "对不起，出现异常问题。请重试。"
            }
          }
        });
      },
      get PRIVACY_EMBED() {
        return (0, _v48.translate)({
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
        });
      },
      get PRIVACY_NOBODY() {
        return (0, _v48.translate)({
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
        });
      },
      get PRIVACY_PASSWORD() {
        return (0, _v48.translate)({
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
        });
      },
      get PRIVACY_PUBLIC() {
        return (0, _v48.translate)({
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
        });
      },
      get PRIVACY_TEAM() {
        return (0, _v48.translate)({
          singular: "Team",
          dictionary: {
            es: {
              singular: "Equipo"
            },
            "fr-FR": {
              singular: "Équipe"
            },
            "ja-JP": {
              singular: "チーム"
            },
            "ko-KR": {
              singular: "팀"
            },
            "pt-BR": {
              singular: "Equipe"
            },
            "zh-CN": {
              singular: "团队"
            }
          }
        });
      },
      get PRIVACY_UNLISTED() {
        return (0, _v48.translate)({
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
        });
      },
      get SHOWCASES() {
        return (0, _v48.translate)({
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
        });
      },
      get AI_OVERVIEW() {
        return (0, _v48.translate)({
          singular: "AI overview",
          dictionary: {
            es: {
              singular: "Descripción general de la IA"
            },
            "de-DE": {
              singular: "KI-Überblick"
            },
            "fr-FR": {
              singular: "Aperçu de l'IA"
            },
            "ja-JP": {
              singular: "AIの概要"
            },
            "ko-KR": {
              singular: "AI 개요"
            },
            "pt-BR": {
              singular: "Visão geral da IA"
            },
            "zh-CN": {
              singular: "AI 概览"
            }
          }
        });
      },
      get GO_TO_VIDEO() {
        return (0, _v48.translate)({
          singular: "Go to video",
          dictionary: {
            es: {
              singular: "Ir al video"
            },
            "de-DE": {
              singular: "Geh zum Video"
            },
            "fr-FR": {
              singular: "Aller à la vidéo "
            },
            "ja-JP": {
              singular: "動画へ移動"
            },
            "ko-KR": {
              singular: "동영상으로 이동"
            },
            "pt-BR": {
              singular: "Ir para o vídeo"
            },
            "zh-CN": {
              singular: "转到视频"
            }
          }
        });
      },
      get GO_TO_MOMENT() {
        return (0, _v48.translate)({
          singular: "Go to moment",
          dictionary: {
            es: {
              singular: "Vaya al momento"
            },
            "de-DE": {
              singular: "Gehen Sie zu Moment"
            },
            "fr-FR": {
              singular: "Accéder au moment"
            },
            "ja-JP": {
              singular: "モーメントに移動"
            },
            "ko-KR": {
              singular: "해당 장면으로 이동"
            },
            "pt-BR": {
              singular: "Ir para o trecho"
            },
            "zh-CN": {
              singular: "转到该时刻"
            }
          }
        });
      },
      get COPY_LINK_TO_CLIP() {
        return (0, _v48.translate)({
          singular: "Copy link to clip",
          dictionary: {
            es: {
              singular: "Copiar enlace al clip"
            },
            "de-DE": {
              singular: "Link zum Clip kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien vers le clip"
            },
            "ja-JP": {
              singular: "リンクをクリップにコピー"
            },
            "ko-KR": {
              singular: "클립으로 링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link do clipe"
            },
            "zh-CN": {
              singular: "复制链接到剪辑"
            }
          }
        });
      },
      get COPY_LINK_TO_COMMENT() {
        return (0, _v48.translate)({
          singular: "Copy link to comment",
          dictionary: {
            es: {
              singular: "Copia el enlace para comentar"
            },
            "de-DE": {
              singular: "Link in Kommentar kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien vers le commentaire"
            },
            "ja-JP": {
              singular: "コメントへのリンクをコピー"
            },
            "ko-KR": {
              singular: "소감에 링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link para comentar"
            },
            "zh-CN": {
              singular: "复制评论链接"
            }
          }
        });
      },
      get VIEW_FULL_VIDEO() {
        return (0, _v48.translate)({
          singular: "View full video",
          dictionary: {
            es: {
              singular: "Ver video completo"
            },
            "de-DE": {
              singular: "Vollständiges Video ansehen"
            },
            "fr-FR": {
              singular: "Voir la vidéo entière"
            },
            "ja-JP": {
              singular: "動画全編を見る"
            },
            "ko-KR": {
              singular: "전체 동영상 보기"
            },
            "pt-BR": {
              singular: "Ver vídeo completo"
            },
            "zh-CN": {
              singular: "观看完整视频"
            }
          }
        });
      },
      get CLIP_LINK_COPIED() {
        return (0, _v48.translate)({
          singular: "Clip link copied",
          dictionary: {
            es: {
              singular: "Enlace del clip copiado"
            },
            "de-DE": {
              singular: "Clip-Link kopiert"
            },
            "fr-FR": {
              singular: "Lien du clip copié"
            },
            "ja-JP": {
              singular: "リンクがコピーされました"
            },
            "ko-KR": {
              singular: "클립 링크가 복사되었습니다."
            },
            "pt-BR": {
              singular: "Link do clipe copiado"
            },
            "zh-CN": {
              singular: "已复制剪辑链接"
            }
          }
        });
      },
      get SEARCHING_AI() {
        return (0, _v48.translate)({
          singular: "Searching...",
          dictionary: {
            es: {
              singular: "Buscando..."
            },
            "de-DE": {
              singular: "Suchvorgang läuft ..."
            },
            "fr-FR": {
              singular: "Recherche en cours…"
            },
            "ja-JP": {
              singular: "検索中..."
            },
            "ko-KR": {
              singular: "검색 중..."
            },
            "pt-BR": {
              singular: "Pesquisando..."
            },
            "zh-CN": {
              singular: "搜索中..."
            }
          }
        });
      },
      get NO_AI_RESULTS() {
        return (0, _v48.translate)({
          singular: "An AI overview isn't available. Try rephrasing your question or asking a different one.",
          dictionary: {
            es: {
              singular: "No hay disponible un resumen de la IA. Intente reformular su pregunta o hacer otra diferente."
            },
            "de-DE": {
              singular: "Eine KI-Übersicht ist nicht verfügbar. Versuchen Sie, Ihre Frage umzuformulieren oder eine andere zu stellen."
            },
            "fr-FR": {
              singular: "Un aperçu de l'IA n'est pas disponible. Essayez de reformuler votre question ou d'en poser une autre."
            },
            "ja-JP": {
              singular: "AIの概要は使用できません。質問を言い換えるか、別の質問をしてみてください。"
            },
            "ko-KR": {
              singular: "AI 개요를 이용할 수 없습니다. 질문을 조금 다르게 해보거나 질문 내용을 바꿔보세요."
            },
            "pt-BR": {
              singular: "Uma visão geral da IA não está disponível. Tente reformular sua pergunta ou fazer uma pergunta diferente."
            },
            "zh-CN": {
              singular: "AI 概览不可用。请尝试重新措辞您的问题或提出另一个问题。"
            }
          }
        });
      },
      get THANKS_FOR_FEEDBACK() {
        return (0, _v48.translate)({
          singular: "Thank you for your feedback",
          dictionary: {
            es: {
              singular: "Gracias por sus comentarios"
            },
            "de-DE": {
              singular: "Vielen Dank für Ihr Feedback"
            },
            "fr-FR": {
              singular: "Nous vous remercions pour vos commentaires."
            },
            "ja-JP": {
              singular: "フィードバックをありがとうございます"
            },
            "ko-KR": {
              singular: "피드백을 보내주셔서 감사합니다."
            },
            "pt-BR": {
              singular: "Agradecemos seu feedback"
            },
            "zh-CN": {
              singular: "感谢您的反馈"
            }
          }
        });
      },
      get DESCRIPTION_AI_GENERATED() {
        return (0, _v48.translate)({
          singular: "Description generated by Vimeo AI",
          dictionary: {
            es: {
              singular: "Descripción generada por Vimeo AI"
            },
            "de-DE": {
              singular: "Von Vimeo AI generierte Beschreibung"
            },
            "fr-FR": {
              singular: "Description générée par l'IA Vimeo"
            },
            "ja-JP": {
              singular: "Vimeo AIによって生成された説明"
            },
            "ko-KR": {
              singular: "Vimeo AI가 생성한 설명"
            },
            "pt-BR": {
              singular: "Descrição gerada pelo Vimeo AI"
            },
            "zh-CN": {
              singular: "Vimeo AI 生成的描述"
            }
          }
        });
      },
      get TRANSCRIPT() {
        return (0, _v48.translate)({
          singular: "Transcript",
          dictionary: {
            es: {
              singular: "Transcripción"
            },
            "de-DE": {
              singular: "Transkript"
            },
            "fr-FR": {
              singular: "Transcription"
            },
            "ja-JP": {
              singular: "トランスクリプト"
            },
            "ko-KR": {
              singular: "스크립트"
            },
            "pt-BR": {
              singular: "Transcrição"
            },
            "zh-CN": {
              singular: "文字稿"
            }
          }
        });
      },
      get MOMENT() {
        return (0, _v48.translate)({
          singular: "Moment",
          dictionary: {
            es: {
              singular: "Momento"
            },
            "ja-JP": {
              singular: "モーメント"
            },
            "ko-KR": {
              singular: "순간"
            },
            "pt-BR": {
              singular: "Momento"
            },
            "zh-CN": {
              singular: "精彩瞬间"
            }
          }
        });
      },
      get CHAPTER() {
        return (0, _v48.translate)({
          singular: "Chapter",
          dictionary: {
            es: {
              singular: "Capítulo"
            },
            "de-DE": {
              singular: "Kapitel"
            },
            "fr-FR": {
              singular: "Chapitre"
            },
            "ja-JP": {
              singular: "チャプター"
            },
            "ko-KR": {
              singular: "챕터"
            },
            "pt-BR": {
              singular: "Capítulo"
            },
            "zh-CN": {
              singular: "章节"
            }
          }
        });
      },
      get COMMENT() {
        return (0, _v48.translate)({
          singular: "Comment",
          dictionary: {
            es: {
              singular: "Comentar"
            },
            "de-DE": {
              singular: "Kommentar"
            },
            "fr-FR": {
              singular: "Commenter"
            },
            "ja-JP": {
              singular: "コメント"
            },
            "ko-KR": {
              singular: "소감"
            },
            "pt-BR": {
              singular: "Comentário"
            },
            "zh-CN": {
              singular: "评论"
            }
          }
        });
      },
      get SEGMENT() {
        return (0, _v48.translate)({
          singular: "Segment",
          dictionary: {
            es: {
              singular: "Segmento"
            },
            "fr-FR": {
              singular: "Segmentation"
            },
            "ja-JP": {
              singular: "セグメント"
            },
            "ko-KR": {
              singular: "세그먼트"
            },
            "pt-BR": {
              singular: "Segmento"
            },
            "zh-CN": {
              singular: "分段"
            }
          }
        });
      },
      get SHOT() {
        return (0, _v48.translate)({
          singular: "Shot",
          dictionary: {
            es: {
              singular: "Toma"
            },
            "fr-FR": {
              singular: "Plan"
            },
            "ja-JP": {
              singular: "ショット"
            },
            "ko-KR": {
              singular: "샷"
            },
            "pt-BR": {
              singular: "Tomada"
            },
            "zh-CN": {
              singular: "镜头"
            }
          }
        });
      },
      get SLIDE() {
        return (0, _v48.translate)({
          singular: "Slide",
          dictionary: {
            es: {
              singular: "Diapositiva"
            },
            "de-DE": {
              singular: "Folie"
            },
            "fr-FR": {
              singular: "Diapositive"
            },
            "ja-JP": {
              singular: "スライド"
            },
            "ko-KR": {
              singular: "슬라이드"
            },
            "zh-CN": {
              singular: "滑动"
            }
          }
        });
      },
      get SCENE() {
        return (0, _v48.translate)({
          singular: "Scene",
          dictionary: {
            es: {
              singular: "Escena"
            },
            "de-DE": {
              singular: "Szene"
            },
            "fr-FR": {
              singular: "Scène"
            },
            "ja-JP": {
              singular: "シーン"
            },
            "ko-KR": {
              singular: "장면"
            },
            "pt-BR": {
              singular: "Cena"
            },
            "zh-CN": {
              singular: "场景"
            }
          }
        });
      },
      get VISUAL_MOMENT() {
        return (0, _v48.translate)({
          singular: "Visual moment",
          dictionary: {
            es: {
              singular: "Momento visual"
            },
            "de-DE": {
              singular: "Visueller Moment"
            },
            "fr-FR": {
              singular: "Moment visuel"
            },
            "ja-JP": {
              singular: "ビジュアルモーメント"
            },
            "ko-KR": {
              singular: "비주얼 모멘트"
            },
            "pt-BR": {
              singular: "Momento visual"
            },
            "zh-CN": {
              singular: "视觉时刻"
            }
          }
        });
      },
      get PREVIOUS_MOMENT() {
        return (0, _v48.translate)({
          singular: "Previous moment",
          dictionary: {
            es: {
              singular: "Momento anterior"
            },
            "de-DE": {
              singular: "Vorheriger Moment"
            },
            "fr-FR": {
              singular: "Moment précédent"
            },
            "ja-JP": {
              singular: "前のモーメント"
            },
            "ko-KR": {
              singular: "이전 장면"
            },
            "pt-BR": {
              singular: "Momento anterior"
            },
            "zh-CN": {
              singular: "上一个时刻"
            }
          }
        });
      },
      get NEXT_MOMENT() {
        return (0, _v48.translate)({
          singular: "Next moment",
          dictionary: {
            es: {
              singular: "Próximo momento"
            },
            "de-DE": {
              singular: "Nächster Moment"
            },
            "fr-FR": {
              singular: "Moment suivant"
            },
            "ja-JP": {
              singular: "次のモーメント"
            },
            "ko-KR": {
              singular: "다음 장면"
            },
            "pt-BR": {
              singular: "Próximo momento"
            },
            "zh-CN": {
              singular: "下一个时刻"
            }
          }
        });
      },
      get CONTACT_US() {
        return (0, _v48.translate)({
          singular: "Contact us",
          dictionary: {
            es: {
              singular: "Contáctenos"
            },
            "de-DE": {
              singular: "Kontaktieren Sie uns"
            },
            "fr-FR": {
              singular: "Contactez-nous"
            },
            "ja-JP": {
              singular: "お問い合わせ"
            },
            "ko-KR": {
              singular: "문의하기"
            },
            "pt-BR": {
              singular: "Entre em contato conosco"
            },
            "zh-CN": {
              singular: "联系我们"
            }
          }
        });
      },
      get UPGRADE() {
        return (0, _v48.translate)({
          singular: "Upgrade",
          dictionary: {
            es: {
              singular: "Actualizar"
            },
            "de-DE": {
              singular: "Upgraden"
            },
            "fr-FR": {
              singular: "Mettre à niveau"
            },
            "ja-JP": {
              singular: "アップグレード"
            },
            "ko-KR": {
              singular: "업그레이드"
            },
            "zh-CN": {
              singular: "升级"
            }
          }
        });
      },
      get START_FREE_DEMO() {
        return (0, _v48.translate)({
          singular: "Start free demo",
          dictionary: {
            es: {
              singular: "Iniciar la demo gratuita"
            },
            "de-DE": {
              singular: "Starte deine kostenlose Demo"
            },
            "fr-FR": {
              singular: "Lancer votre démo gratuite"
            },
            "ja-JP": {
              singular: "無料デモを開始"
            },
            "ko-KR": {
              singular: "무료 데모 시작하기"
            },
            "pt-BR": {
              singular: "Iniciar demo gratuita"
            },
            "zh-CN": {
              singular: "开始免费演示"
            }
          }
        });
      },
      get UPSELL_HEADER() {
        return (0, _v48.translate)({
          singular: "Create engaging events with ease",
          dictionary: {
            es: {
              singular: "Crea eventos atractivos con facilidad"
            },
            "de-DE": {
              singular: "Erstellen Sie mühelos ansprechende Veranstaltungen"
            },
            "fr-FR": {
              singular: "Créez des événements engageants facilement"
            },
            "ja-JP": {
              singular: "魅力的なイベントを簡単に作成"
            },
            "ko-KR": {
              singular: "손쉽게 참여도 높은 이벤트를 제작하세요"
            },
            "pt-BR": {
              singular: "Crie eventos envolventes com facilidade"
            },
            "zh-CN": {
              singular: "轻松创建引人参与的活动"
            }
          }
        });
      },
      get UPSELL_MODAL_SUBHEADER() {
        return (0, _v48.translate)({
          singular: "Host any event type, from webinars to town halls, team trainings, and more.",
          dictionary: {
            es: {
              singular: "Organice cualquier tipo de evento, desde seminarios web reuniones generales, capacitación para equipos y mucho más."
            },
            "de-DE": {
              singular: "Hosten Sie Events aller Art, von Webinaren bis zu Mitarbeiterversammlungen, Teamschulungen und mehr."
            },
            "fr-FR": {
              singular: "Animez n'importe quel type d'événement, qu'il s'agisse de webinaires, d'assemblées, de formations d'équipe, etc."
            },
            "ja-JP": {
              singular: "ウェビナー、全社会議、チームトレーニングなど、あらゆる種類のイベントをホスティング。"
            },
            "ko-KR": {
              singular: "웨비나부터 타운홀, 팀 교육 등 모든 유형의 이벤트를 주최할 수 있습니다."
            },
            "pt-BR": {
              singular: "Organize qualquer tipo de evento, como webinars, reuniões, treinamentos em equipe e muito mais."
            },
            "zh-CN": {
              singular: "举办任何类型的活动，从网络研讨会到员工大会、团队培训等。"
            }
          }
        });
      },
      get UPSELL_SUBHEADER() {
        return (0, _v48.translate)({
          singular: "Host events of all kinds, from webinars to live broadcasts, team events, and more.",
          dictionary: {
            es: {
              singular: "Organice eventos de todo tipo, desde seminarios web hasta transmisiones en vivo, eventos de equipo y mucho más."
            },
            "de-DE": {
              singular: "Hosten Sie Events aller Art, von Webinaren bis hin zu Live-Übertragungen, Team-Events und mehr."
            },
            "fr-FR": {
              singular: "Animez des événements de toutes sortes, qu'il s'agisse de webinaires, de diffusions en direct, d'événements d'équipe, etc."
            },
            "ja-JP": {
              singular: "ウェビナー、ライブ配信、チームイベントなど、あらゆる種類のイベントをホスティング。"
            },
            "ko-KR": {
              singular: "웨비나부터 라이브 방송, 팀 이벤트 등 모든 종류의 이벤트를 주최할 수 있습니다."
            },
            "pt-BR": {
              singular: "Organize eventos de todos os tipos, como webinars, transmissões ao vivo, eventos de equipe e muito mais."
            },
            "zh-CN": {
              singular: "举办各种活动，从网络研讨会到直播、团队活动等。"
            }
          }
        });
      },
      get ADVANCED_PLAN_SUBHEADER() {
        return (0, _v48.translate)({
          singular: "Stream high-quality events and webinars",
          dictionary: {
            es: {
              singular: "Transmitir eventos y webinars de alta calidad"
            },
            "de-DE": {
              singular: "Hochwertige Veranstaltungen und Webinare streamen"
            },
            "fr-FR": {
              singular: "Diffusez des événements et webinaires de haute qualité"
            },
            "ja-JP": {
              singular: "高品質のイベントやウェビナーを配信"
            },
            "ko-KR": {
              singular: "고품질 이벤트 및 웨비나 스트리밍"
            },
            "pt-BR": {
              singular: "Transmitir eventos e webinars de alta qualidade"
            },
            "zh-CN": {
              singular: "推流高质量活动与网络研讨会"
            }
          }
        });
      },
      get ADVANCED_PLAN_FEATURES_LIST() {
        return [(0, _v48.translate)({
          singular: "Virtual events and webinars",
          dictionary: {
            es: {
              singular: "Eventos virtuales y webinars"
            },
            "de-DE": {
              singular: "Virtuelle Veranstaltungen und Webinare"
            },
            "fr-FR": {
              singular: "Événements virtuels et webinaires"
            },
            "ja-JP": {
              singular: "バーチャルイベントとウェビナー"
            },
            "ko-KR": {
              singular: "가상 이벤트 및 웨비나"
            },
            "pt-BR": {
              singular: "Eventos virtuais e webinars"
            },
            "zh-CN": {
              singular: "虚拟活动与网络研讨会"
            }
          }
        }), (0, _v48.translate)({
          singular: "Streaming to multiple destinations",
          dictionary: {
            es: {
              singular: "Transmisión a varios destinos"
            },
            "de-DE": {
              singular: "Streaming an mehrere Ziele"
            },
            "fr-FR": {
              singular: "Diffusion vers plusieurs destinations"
            },
            "ja-JP": {
              singular: "複数の配信先にストリーミング"
            },
            "ko-KR": {
              singular: "여러 목적지로 라이브 스트리밍"
            },
            "pt-BR": {
              singular: "Transmissão para vários destinos"
            },
            "zh-CN": {
              singular: "串流至多个目的地"
            }
          }
        }), (0, _v48.translate)({
          singular: "Live chat, Q&A, and polls",
          dictionary: {
            es: {
              singular: "Chat en vivo, sesión de preguntas y respuestas, y encuestas"
            },
            "de-DE": {
              singular: "Live-Chat, Fragerunden und Umfragen"
            },
            "fr-FR": {
              singular: "Discussion en direct, séance de questions-réponses et sondages"
            },
            "ja-JP": {
              singular: "ライブチャット、Q&A、アンケート"
            },
            "ko-KR": {
              singular: "실시간 채팅, Q&A 및 투표"
            },
            "pt-BR": {
              singular: "Chat ao vivo, perguntas frequentes e enquetes"
            },
            "zh-CN": {
              singular: "在线聊天、问答和投票"
            }
          }
        }), (0, _v48.translate)({
          singular: "Registration (100 attendees per event)",
          dictionary: {
            es: {
              singular: "Registro (100 asistentes por evento)"
            },
            "de-DE": {
              singular: "Registrierung (100 Teilnehmende pro Event)"
            },
            "fr-FR": {
              singular: "Inscription (100 participants par événement)"
            },
            "ja-JP": {
              singular: "登録（イベントごとの参加者枠は100人）"
            },
            "ko-KR": {
              singular: "등록(이벤트당 100명 참석)"
            },
            "pt-BR": {
              singular: "Inscrição (100 participantes por evento)"
            },
            "zh-CN": {
              singular: "注册（每场活动可注册 100 名出席者）"
            }
          }
        }), (0, _v48.translate)({
          singular: "CRM integrations with viewer-level analytics",
          dictionary: {
            es: {
              singular: "Integraciones de CRM con análisis a nivel del espectador"
            },
            "de-DE": {
              singular: "CRM-Integrationen mit Analysen auf Zuschauerebene"
            },
            "fr-FR": {
              singular: "Intégrations CRM avec statistiques spectateur"
            },
            "ja-JP": {
              singular: "CRMと視聴者レベルの分析との統合"
            },
            "ko-KR": {
              singular: "CRM과 시청자 수준 분석의 통합"
            },
            "pt-BR": {
              singular: "Integrações de CRM com análise do público"
            },
            "zh-CN": {
              singular: "CRM 与观众级分析集成"
            }
          }
        })];
      },
      get ENTERPRISE_PLAN_SUBHEADER() {
        return (0, _v48.translate)({
          singular: "Advanced event capabilities, superior quality, and support",
          dictionary: {
            es: {
              singular: "Funciones avanzadas para eventos, calidad superior y asistencia"
            },
            "de-DE": {
              singular: "Erweiterte Eventfunktionen, hervorragende Qualität und Support"
            },
            "fr-FR": {
              singular: "Fonctionnalités avancées pour les événements, qualité supérieure et assistance"
            },
            "ja-JP": {
              singular: "高度なイベント機能、優れた品質、サポート"
            },
            "ko-KR": {
              singular: "고급 이벤트 기능, 우수한 품질 및 지원"
            },
            "pt-BR": {
              singular: "Recursos avançados de eventos, qualidade superior e suporte"
            },
            "zh-CN": {
              singular: "高级活动功能、卓越的质量和支持"
            }
          }
        });
      },
      get ENTERPRISE_PLAN_FEATURES_LIST() {
        return [(0, _v48.translate)({
          singular: "Breakout rooms and visible audience participation",
          dictionary: {
            es: {
              singular: "Salas de trabajo en grupo y participación visible de la audiencia"
            },
            "de-DE": {
              singular: "Breakout-Räume und sichtbare Publikumsbeteiligung"
            },
            "fr-FR": {
              singular: "Salles de répartition et participation visible du public"
            },
            "ja-JP": {
              singular: "小会議室と視聴者参加の可視化"
            },
            "ko-KR": {
              singular: "소규모 회의실 및 눈에 보이는 청중 참여"
            },
            "pt-BR": {
              singular: "Salas temáticas e participação do público visível"
            },
            "zh-CN": {
              singular: "分组讨论室和可见的观众参与"
            }
          }
        }), (0, _v48.translate)({
          singular: "Backup streams, fail-safe streaming, and eCDN",
          dictionary: {
            es: {
              singular: "Transmisiones de respaldo, a prueba de fallas y eCDN"
            },
            "de-DE": {
              singular: "Back-up-Streams, ausfallsicheres Streaming und eCDN"
            },
            "fr-FR": {
              singular: "Stream de secours, streaming à sécurité intégrée et eCDN"
            },
            "ja-JP": {
              singular: "バックアップストリーム、フェイルセーフストリーミング、eCDN"
            },
            "ko-KR": {
              singular: "백업 스트림, 오류 방지 스트리밍, eCDN"
            },
            "pt-BR": {
              singular: "Cópia de segurança da transmissão ao vivo, streaming à prova de falhas e eCDN"
            },
            "zh-CN": {
              singular: "备份流、自动防故障的直播和 eCDN"
            }
          }
        }), (0, _v48.translate)({
          singular: "Moderated live Q&A",
          dictionary: {
            es: {
              singular: "Q&A en vivo moderada"
            },
            "de-DE": {
              singular: "Moderierte Live-Fragerunden"
            },
            "fr-FR": {
              singular: "Modération des séances de questions-réponses en direct"
            },
            "ja-JP": {
              singular: "管理されたライブ質問セッション"
            },
            "ko-KR": {
              singular: "실시간 Q/A 관리"
            },
            "pt-BR": {
              singular: "Moderação das sessões de perguntas e respostas ao vivo"
            },
            "zh-CN": {
              singular: "经审核的在线问答"
            }
          }
        }), (0, _v48.translate)({
          singular: "Advanced viewer-level analytics",
          dictionary: {
            es: {
              singular: "Análisis a nivel del espectador avanzado"
            },
            "de-DE": {
              singular: "Erweiterte Analysen auf Zuschauerebene"
            },
            "fr-FR": {
              singular: "Statistiques spectateur avancées"
            },
            "ja-JP": {
              singular: "高度な視聴者レベルの分析"
            },
            "ko-KR": {
              singular: "고급 시청자 수준 분석"
            },
            "pt-BR": {
              singular: "Análise do público avançada"
            },
            "zh-CN": {
              singular: "高级观众级分析"
            }
          }
        }), (0, _v48.translate)({
          singular: "Production support",
          dictionary: {
            es: {
              singular: "Asistencia de producción"
            },
            "de-DE": {
              singular: "Support für die Produktion"
            },
            "fr-FR": {
              singular: "Assistance à la production"
            },
            "ja-JP": {
              singular: "制作サポート"
            },
            "ko-KR": {
              singular: "프로덕션 지원"
            },
            "pt-BR": {
              singular: "Suporte à produção"
            },
            "zh-CN": {
              singular: "制作支持"
            }
          }
        }), (0, _v48.translate)({
          singular: "Additional security, control, and dedicated support",
          dictionary: {
            es: {
              singular: "Más seguridad, control y asistencia especializada"
            },
            "de-DE": {
              singular: "Zusätzliche Sicherheit, Kontrolle und dedizierter Support"
            },
            "fr-FR": {
              singular: "Sécurité, contrôle et assistance spécialisée supplémentaires"
            },
            "ja-JP": {
              singular: "追加のセキュリティ、コントロール、専用サポート"
            },
            "ko-KR": {
              singular: "추가 보안, 제어 및 전담 지원"
            },
            "pt-BR": {
              singular: "Segurança, controle e suporte técnico dedicado adicionais"
            },
            "zh-CN": {
              singular: "额外的安全、控制和支持"
            }
          }
        })];
      },
      get BETA() {
        return (0, _v48.translate)({
          singular: "BETA",
          dictionary: {
            "ja-JP": {
              singular: "ベータ"
            },
            "ko-KR": {
              singular: "베타"
            },
            "zh-CN": {
              singular: "测试版"
            }
          }
        });
      },
      deletedShowcase: _v0 => (0, _v48.translate)({
        singular: "Deleted {SHOWCASE_NAME}",
        replacements: {
          SHOWCASE_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Eliminó {SHOWCASE_NAME}"
          },
          "de-DE": {
            singular: "Gelöscht {SHOWCASE_NAME}"
          },
          "fr-FR": {
            singular: "Dossier supprimé {SHOWCASE_NAME}"
          },
          "ja-JP": {
            singular: "{SHOWCASE_NAME} を削除しました"
          },
          "ko-KR": {
            singular: "{SHOWCASE_NAME} 폴더 삭제 완료"
          },
          "pt-BR": {
            singular: "Pasta {SHOWCASE_NAME} excluída"
          },
          "zh-CN": {
            singular: "删除 {SHOWCASE_NAME}"
          }
        }
      }),
      filtersCount: _v0 => (0, _v48.translate)({
        singular: "Filters ({COUNT})",
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "Filtros ({COUNT})"
          },
          "de-DE": {
            singular: "Filter ({COUNT})"
          },
          "fr-FR": {
            singular: "Filtres ({COUNT})"
          },
          "ja-JP": {
            singular: "フィルター（{COUNT}件）"
          },
          "ko-KR": {
            singular: "필터({COUNT})"
          },
          "pt-BR": {
            singular: "Filtros ({COUNT})"
          },
          "zh-CN": {
            singular: "筛选 ({COUNT})"
          }
        }
      }),
      videoCount: _v0 => (0, _v48.translate)({
        singular: "{COUNT} video",
        plural: "{COUNT} videos",
        count: _v0 ?? 0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          "de-DE": {
            singular: "{COUNT} Video",
            plural: "{COUNT} Videos"
          },
          "fr-FR": {
            singular: "{COUNT} vidéo",
            plural: "{COUNT} vidéos"
          },
          "ja-JP": {
            singular: "{COUNT} 件の動画",
            plural: "{COUNT}件の動画"
          },
          "ko-KR": {
            singular: "동영상 {COUNT}개",
            plural: "동영상 {COUNT}개"
          },
          "pt-BR": {
            singular: "{COUNT} vídeo",
            plural: "{COUNT} vídeos"
          },
          "zh-CN": {
            singular: "{COUNT} 个视频",
            plural: "{COUNT} 个视频"
          }
        }
      }),
      userCount: (_v0, _v1) => _v0 === _v58.options.channel.value ? (0, _v48.translate)({
        singular: "{COUNT} follower",
        plural: "{COUNT} followers",
        count: _v1 ?? 0,
        replacements: {
          COUNT: _v1
        },
        dictionary: {
          es: {
            singular: "{COUNT} seguidor",
            plural: "{COUNT} seguidores"
          },
          "de-DE": {
            singular: "{COUNT} Follower",
            plural: "{COUNT} Follower"
          },
          "fr-FR": {
            singular: "{COUNT} abonné",
            plural: "{COUNT} abonnés"
          },
          "ja-JP": {
            singular: "{COUNT} 人のフォロワー",
            plural: "{COUNT} 人のフォロワー"
          },
          "ko-KR": {
            singular: "팔로워 {COUNT}명",
            plural: "팔로워 {COUNT}명"
          },
          "pt-BR": {
            singular: "{COUNT} seguidor",
            plural: "{COUNT} seguidores"
          },
          "zh-CN": {
            singular: "{COUNT} 名粉丝",
            plural: "{COUNT} 名粉丝"
          }
        }
      }) : (0, _v48.translate)({
        singular: "{COUNT} member",
        plural: "{COUNT} members",
        count: _v1 ?? 0,
        replacements: {
          COUNT: _v1
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
      resultsCount: (_v0, _v1) => (0, _v48.translate)({
        singular: "{COUNT} result on Vimeo",
        plural: "{COUNT} results on Vimeo",
        count: _v0 ?? 0,
        replacements: {
          COUNT: _v1
        },
        dictionary: {
          es: {
            singular: "{COUNT} resultado en Vimeo",
            plural: "{COUNT} resultados en Vimeo"
          },
          "de-DE": {
            singular: "{COUNT} Ergebnis auf Vimeo",
            plural: "{COUNT} Ergebnisse auf Vimeo"
          },
          "fr-FR": {
            singular: "{COUNT} résultat sur Vimeo",
            plural: "{COUNT} résultats sur Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoでの{COUNT}件の結果",
            plural: "Vimeoでの{COUNT}件の結果"
          },
          "ko-KR": {
            singular: "Vimeo에서 {COUNT}개의 결과",
            plural: "Vimeo에서 {COUNT}개의 결과"
          },
          "pt-BR": {
            singular: "{COUNT} resultado no Vimeo",
            plural: "{COUNT} resultados no Vimeo"
          },
          "zh-CN": {
            singular: "Vimeo 上有 {COUNT} 个结果",
            plural: "Vimeo 上有 {COUNT} 个结果"
          }
        }
      }),
      libraryResultsCount: (_v0, _v1) => (0, _v48.translate)({
        singular: "{COUNT} result in Library",
        plural: "{COUNT} results in Library",
        count: _v0 ?? 0,
        replacements: {
          COUNT: _v1
        },
        dictionary: {
          es: {
            singular: "{COUNT} resultado en la biblioteca",
            plural: "{COUNT} resultados en la biblioteca"
          },
          "de-DE": {
            singular: "{COUNT} Ergebnis in der Bibliothek",
            plural: "{COUNT} Ergebnisse in der Bibliothek"
          },
          "fr-FR": {
            singular: "{COUNT} résultat dans la bibliothèque",
            plural: "{COUNT} résultats dans la bibliothèque"
          },
          "ja-JP": {
            singular: "ライブラリ内の{COUNT}件の結果",
            plural: "ライブラリ内の{COUNT}件の結果"
          },
          "ko-KR": {
            singular: "라이브러리 내 결과 {COUNT}개",
            plural: "라이브러리 내 결과 {COUNT}개"
          },
          "pt-BR": {
            singular: "{COUNT} resultado na Biblioteca",
            plural: "{COUNT} resultados na Biblioteca"
          },
          "zh-CN": {
            singular: "库中有 {COUNT} 个结果",
            plural: "库中有 {COUNT} 个结果"
          }
        }
      }),
      momentsInVideo: (_v0, _v1) => (0, _v48.translate)({
        singular: "{COUNT} moment from {VIDEO_TITLE}",
        plural: "{COUNT} moments from {VIDEO_TITLE}",
        count: _v0 ?? 0,
        replacements: {
          COUNT: _v0,
          VIDEO_TITLE: () => _v1
        },
        dictionary: {
          es: {
            singular: "{COUNT} momento de {VIDEO_TITLE}",
            plural: "{COUNT} momentos de {VIDEO_TITLE}"
          },
          "de-DE": {
            singular: "{COUNT} Moment von {VIDEO_TITLE}",
            plural: "{COUNT} Momente von {VIDEO_TITLE}"
          },
          "fr-FR": {
            singular: "{COUNT} moment de {VIDEO_TITLE}",
            plural: "{COUNT} moments de {VIDEO_TITLE}"
          },
          "ja-JP": {
            singular: "{VIDEO_TITLE}からの{COUNT}件のモーメント",
            plural: "{VIDEO_TITLE}からの{COUNT}件のモーメント"
          },
          "ko-KR": {
            singular: "{VIDEO_TITLE} 동영상의 장면 {COUNT}개",
            plural: "{VIDEO_TITLE} 동영상의 장면 {COUNT}개"
          },
          "pt-BR": {
            singular: "{COUNT} trecho de {VIDEO_TITLE}",
            plural: "{COUNT} trechos de {VIDEO_TITLE}"
          },
          "zh-CN": {
            singular: "来自{VIDEO_TITLE} 的 {COUNT} 个精彩瞬间",
            plural: "来自 {VIDEO_TITLE} 的 {COUNT} 个精彩瞬间"
          }
        }
      }),
      momentsResultCount: _v0 => (0, _v48.translate)({
        singular: "1 result in this video",
        plural: "{COUNT} results in this video",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "1 resultado en este video",
            plural: "{COUNT} resultados en este video"
          },
          "de-DE": {
            singular: "1 Ergebnis in diesem Video",
            plural: "{COUNT} Ergebnisse in diesem Video"
          },
          "fr-FR": {
            singular: "1 résultat dans cette vidéo",
            plural: "{COUNT} résultats dans cette vidéo"
          },
          "ja-JP": {
            singular: "この動画の1件の結果",
            plural: "この動画の{COUNT}件の結果"
          },
          "ko-KR": {
            singular: "이 동영상 내 결과 1개",
            plural: "이 동영상 내 결과 {COUNT}개"
          },
          "pt-BR": {
            singular: "1 resultado neste vídeo",
            plural: "{COUNT} resultados neste vídeo"
          },
          "zh-CN": {
            singular: "此视频中有 1 个结果",
            plural: "此视频中有 {COUNT} 个结果"
          }
        }
      }),
      get AI_SEARCH() {
        return (0, _v48.translate)({
          singular: "Smart Search",
          dictionary: {
            es: {
              singular: "Búsqueda inteligente"
            },
            "de-DE": {
              singular: "Intelligente Suche"
            },
            "fr-FR": {
              singular: "Recherche intelligente"
            },
            "ja-JP": {
              singular: "スマート検索"
            },
            "ko-KR": {
              singular: "스마트 검색"
            },
            "pt-BR": {
              singular: "Pesquisa Inteligente"
            },
            "zh-CN": {
              singular: "智能搜索"
            }
          }
        });
      },
      get AI_SEARCH_PLACEHOLDER() {
        return (0, _v48.translate)({
          singular: "Ask anything about your library…",
          dictionary: {
            es: {
              singular: "Pregunta cualquier cosa sobre tu biblioteca…"
            },
            "de-DE": {
              singular: "Stellen Sie eine beliebige Frage zu Ihrer Bibliothek…"
            },
            "fr-FR": {
              singular: "Demandez n'importe quoi au sujet de votre bibliothèque…"
            },
            "ja-JP": {
              singular: "ライブラリについて何でもお尋ねください…"
            },
            "ko-KR": {
              singular: "라이브러리에 대해 무엇이든 물어보세요…"
            },
            "pt-BR": {
              singular: "Pergunte qualquer coisa sobre sua biblioteca…"
            },
            "zh-CN": {
              singular: "询问有关您的库的任何内容…"
            }
          }
        });
      },
      get AI_ANSWER() {
        return (0, _v48.translate)({
          singular: "Smart Answer",
          dictionary: {
            es: {
              singular: "Respuesta inteligente"
            },
            "de-DE": {
              singular: "Intelligente Antwort"
            },
            "fr-FR": {
              singular: "Réponse intelligente"
            },
            "ja-JP": {
              singular: "スマート回答"
            },
            "ko-KR": {
              singular: "스마트 답변"
            },
            "pt-BR": {
              singular: "Resposta Inteligente"
            },
            "zh-CN": {
              singular: "智能回答"
            }
          }
        });
      },
      get AI_PARTIAL_RESULTS() {
        return (0, _v48.translate)({
          singular: "Some sources were unavailable, so these results may be incomplete.",
          dictionary: {
            es: {
              singular: "Algunas fuentes no estuvieron disponibles, por lo que estos resultados pueden estar incompletos."
            },
            "de-DE": {
              singular: "Einige Quellen waren nicht verfügbar, daher können diese Ergebnisse unvollständig sein."
            },
            "fr-FR": {
              singular: "Certaines sources n'étaient pas disponibles, ces résultats peuvent donc être incomplets."
            },
            "ja-JP": {
              singular: "一部のソースにアクセスできなかったため、これらの結果は不完全な場合があります。"
            },
            "ko-KR": {
              singular: "일부 소스에 접근할 수 없어 결과가 불완전할 수 있습니다."
            },
            "pt-BR": {
              singular: "Algumas fontes estavam indisponíveis, então estes resultados podem estar incompletos."
            },
            "zh-CN": {
              singular: "某些来源不可用，结果可能不完整。"
            }
          }
        });
      },
      get AI_NO_RESULTS() {
        return (0, _v48.translate)({
          singular: "No results found.",
          dictionary: {
            es: {
              singular: "No se encontraron resultados."
            },
            "de-DE": {
              singular: "Keine Ergebnisse gefunden."
            },
            "fr-FR": {
              singular: "Aucun résultat trouvé."
            },
            "ja-JP": {
              singular: "結果が見つかりませんでした。"
            },
            "ko-KR": {
              singular: "결과가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum resultado encontrado."
            },
            "zh-CN": {
              singular: "未找到结果。"
            }
          }
        });
      },
      get AI_SEARCH_RESULTS_CTA() {
        return (0, _v48.translate)({
          singular: "Can't find a result? Try the new Smart Search!",
          dictionary: {
            es: {
              singular: "¿No encuentras un resultado? Prueba la nueva Smart Search!"
            },
            "de-DE": {
              singular: "Kein Ergebnis gefunden? Probieren Sie die neue Smart Search!"
            },
            "fr-FR": {
              singular: "Vous ne trouvez pas de résultat ? Essayez la nouvelle Recherche intelligente !"
            },
            "ja-JP": {
              singular: "結果が見つかりませんか？新しい Smart Search をお試しください！"
            },
            "ko-KR": {
              singular: "검색 결과를 찾을 수 없으신가요? 새로운 스마트 검색을 사용해 보세요!"
            },
            "pt-BR": {
              singular: "Não consegue encontrar um resultado? Experimente a nova Busca Inteligente!"
            },
            "zh-CN": {
              singular: "找不到结果？ 试试新的 Smart Search！"
            }
          }
        });
      },
      get AI_SUGGESTIONS_TITLE() {
        return (0, _v48.translate)({
          singular: "Not sure where to start? Try one of these:",
          dictionary: {
            es: {
              singular: "¿No sabes por dónde empezar? Prueba una de estas:"
            },
            "de-DE": {
              singular: "Nicht sicher, wo Sie anfangen sollen? Probieren Sie eines davon:"
            },
            "fr-FR": {
              singular: "Vous ne savez pas par où commencer ? Essayez l’une de ces options :"
            },
            "ja-JP": {
              singular: "どこから始めればよいかわかりませんか? 次のいずれかをお試しください:"
            },
            "ko-KR": {
              singular: "어디서 시작해야 할지 모르시나요? 다음 중 하나를 시도해 보세요:"
            },
            "pt-BR": {
              singular: "Não tem certeza por onde começar? Experimente uma destas:"
            },
            "zh-CN": {
              singular: "不确定从何处开始? 试试以下任一项:"
            }
          }
        });
      },
      get AI_SUGGESTIONS() {
        return [(0, _v48.translate)({
          singular: "Show the most recent video longer than 30 seconds",
          dictionary: {
            es: {
              singular: "Mostrar el vídeo más reciente que dure más de 30 segundos"
            },
            "de-DE": {
              singular: "Zeigen Sie das neueste Video, das länger als 30 Sekunden ist"
            },
            "fr-FR": {
              singular: "Afficher la vidéo la plus récente de plus de 30 secondes"
            },
            "ja-JP": {
              singular: "30秒を超える最新のビデオを表示する"
            },
            "ko-KR": {
              singular: "가장 최근의 30초 이상 동영상을 보여 주세요"
            },
            "pt-BR": {
              singular: "Mostrar o vídeo mais recente com mais de 30 segundos"
            },
            "zh-CN": {
              singular: "显示最近一部时长超过30秒的视频"
            }
          }
        }), (0, _v48.translate)({
          singular: "Videos in which marketing is discussed",
          dictionary: {
            es: {
              singular: "Vídeos en los que se habla de marketing"
            },
            "de-DE": {
              singular: "Videos, in denen über Marketing gesprochen wird"
            },
            "fr-FR": {
              singular: "Vidéos dans lesquelles le marketing est abordé"
            },
            "ja-JP": {
              singular: "マーケティングに関するビデオ"
            },
            "ko-KR": {
              singular: "마케팅을 다루는 동영상"
            },
            "pt-BR": {
              singular: "Vídeos em que marketing é discutido"
            },
            "zh-CN": {
              singular: "讨论营销的视频"
            }
          }
        }), (0, _v48.translate)({
          singular: "Something funny in my library",
          dictionary: {
            es: {
              singular: "Algo divertido en mi biblioteca"
            },
            "de-DE": {
              singular: "Etwas Lustiges in meiner Bibliothek"
            },
            "fr-FR": {
              singular: "Quelque chose de drôle dans ma bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリにある面白いもの"
            },
            "ko-KR": {
              singular: "내 라이브러리에서 웃긴 동영상"
            },
            "pt-BR": {
              singular: "Algo engraçado na minha biblioteca"
            },
            "zh-CN": {
              singular: "我的资料库中有趣的内容"
            }
          }
        }), (0, _v48.translate)({
          singular: "Interview",
          dictionary: {
            es: {
              singular: "Entrevista"
            },
            "ja-JP": {
              singular: "インタビュー"
            },
            "ko-KR": {
              singular: "인터뷰"
            },
            "pt-BR": {
              singular: "Entrevista"
            },
            "zh-CN": {
              singular: "访谈"
            }
          }
        })];
      },
      get AI_SEARCH_FAILED() {
        return (0, _v48.translate)({
          singular: "Search failed. Please try again.",
          dictionary: {
            es: {
              singular: "La búsqueda falló. Por favor, inténtelo de nuevo."
            },
            "de-DE": {
              singular: "Suche fehlgeschlagen. Bitte versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "La recherche a échoué. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "検索に失敗しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "검색에 실패했습니다. 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "A pesquisa falhou. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "搜索失败。请重试。"
            }
          }
        });
      },
      get AI_SUPPORT_ANSWER() {
        return (0, _v48.translate)({
          singular: "Support answer",
          dictionary: {
            es: {
              singular: "Respuesta de soporte"
            },
            "de-DE": {
              singular: "Support-Antwort"
            },
            "fr-FR": {
              singular: "Réponse de l'assistance"
            },
            "ja-JP": {
              singular: "サポートの回答"
            },
            "ko-KR": {
              singular: "지원 답변"
            },
            "pt-BR": {
              singular: "Resposta de suporte"
            },
            "zh-CN": {
              singular: "支持答复"
            }
          }
        });
      },
      get AI_SOURCES() {
        return (0, _v48.translate)({
          singular: "Sources",
          dictionary: {
            es: {
              singular: "Fuentes"
            },
            "de-DE": {
              singular: "Quellen"
            },
            "ja-JP": {
              singular: "ソース"
            },
            "ko-KR": {
              singular: "소스"
            },
            "pt-BR": {
              singular: "Fontes"
            },
            "zh-CN": {
              singular: "来源"
            }
          }
        });
      },
      get AI_MODE_AUTO() {
        return (0, _v48.translate)({
          singular: "Auto",
          dictionary: {
            es: {
              singular: "Automático"
            },
            "de-DE": {
              singular: "Automatisch"
            },
            "ja-JP": {
              singular: "自動"
            },
            "ko-KR": {
              singular: "자동"
            },
            "pt-BR": {
              singular: "Automático"
            },
            "zh-CN": {
              singular: "自动"
            }
          }
        });
      },
      get AI_MODE_LIBRARY() {
        return (0, _v48.translate)({
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
      },
      get AI_MODE_SUPPORT() {
        return (0, _v48.translate)({
          singular: "Support",
          dictionary: {
            es: {
              singular: "Asistencia"
            },
            "fr-FR": {
              singular: "Assistance"
            },
            "ja-JP": {
              singular: "サポート"
            },
            "ko-KR": {
              singular: "지원"
            },
            "pt-BR": {
              singular: "Suporte"
            },
            "zh-CN": {
              singular: "支持"
            }
          }
        });
      },
      get AI_RELEVANT_MOMENTS() {
        return (0, _v48.translate)({
          singular: "Relevant moments",
          dictionary: {
            es: {
              singular: "Momentos relevantes"
            },
            "de-DE": {
              singular: "Relevante Momente"
            },
            "fr-FR": {
              singular: "Moments pertinents"
            },
            "ja-JP": {
              singular: "関連する瞬間"
            },
            "ko-KR": {
              singular: "관련 순간"
            },
            "pt-BR": {
              singular: "Momentos relevantes"
            },
            "zh-CN": {
              singular: "相关片段"
            }
          }
        });
      },
      get AI_OVERVIEW_DISCLAIMER() {
        return (0, _v48.translate)({
          singular: "AI responses may include mistakes.",
          dictionary: {
            es: {
              singular: "Las respuestas de la IA pueden contener errores."
            },
            "de-DE": {
              singular: "AI-Antworten können Fehler enthalten."
            },
            "fr-FR": {
              singular: "Les réponses de l'IA peuvent comporter des erreurs."
            },
            "ja-JP": {
              singular: "AI の応答には誤りが含まれる場合があります。"
            },
            "ko-KR": {
              singular: "AI 응답에는 오류가 포함될 수 있습니다."
            },
            "pt-BR": {
              singular: "As respostas da IA podem conter erros."
            },
            "zh-CN": {
              singular: "AI 的回答可能包含错误。"
            }
          }
        });
      },
      get AI_LEARN_MORE() {
        return (0, _v48.translate)({
          singular: "Learn more",
          dictionary: {
            es: {
              singular: "Ver más"
            },
            "de-DE": {
              singular: "Mehr dazu"
            },
            "fr-FR": {
              singular: "En savoir plus "
            },
            "ja-JP": {
              singular: "詳細を見る"
            },
            "ko-KR": {
              singular: "자세히 보기"
            },
            "pt-BR": {
              singular: "Saiba mais"
            },
            "zh-CN": {
              singular: "了解更多"
            }
          }
        });
      },
      get AI_REGENERATE() {
        return (0, _v48.translate)({
          singular: "Regenerate",
          dictionary: {
            es: {
              singular: "Regenerar"
            },
            "de-DE": {
              singular: "Erneut generieren"
            },
            "fr-FR": {
              singular: "Régénérer"
            },
            "ja-JP": {
              singular: "再生成"
            },
            "ko-KR": {
              singular: "재생성"
            },
            "pt-BR": {
              singular: "Regenerar"
            },
            "zh-CN": {
              singular: "重新生成"
            }
          }
        });
      },
      get AI_RELATED_SEARCHES() {
        return (0, _v48.translate)({
          singular: "Related to this",
          dictionary: {
            es: {
              singular: "Relacionado con esto"
            },
            "de-DE": {
              singular: "Dazu passend"
            },
            "fr-FR": {
              singular: "Lié à ceci"
            },
            "ja-JP": {
              singular: "これに関連する"
            },
            "ko-KR": {
              singular: "이와 관련된 항목"
            },
            "pt-BR": {
              singular: "Relacionado a isso"
            },
            "zh-CN": {
              singular: "与此相关"
            }
          }
        });
      },
      get CONTACT_SALES() {
        return (0, _v48.translate)({
          singular: "Contact sales",
          dictionary: {
            es: {
              singular: "Comunicarse con Ventas"
            },
            "de-DE": {
              singular: "Sales-Team kontaktieren"
            },
            "fr-FR": {
              singular: "Service commercial"
            },
            "ja-JP": {
              singular: "営業チームへ問い合わせる"
            },
            "ko-KR": {
              singular: "영업팀에 문의"
            },
            "pt-BR": {
              singular: "Falar com vendas"
            },
            "zh-CN": {
              singular: "联系销售"
            }
          }
        });
      },
      complimentaryAccessUntil: _v0 => (0, _v48.translate)({
        singular: "Complimentary access until {DATE}",
        replacements: {
          DATE: _v0
        },
        dictionary: {
          es: {
            singular: "Acceso de cortesía hasta {DATE}"
          },
          "de-DE": {
            singular: "Kostenfreier Zugang bis {DATE}"
          },
          "fr-FR": {
            singular: "Accès gratuit jusqu'au {DATE}"
          },
          "ja-JP": {
            singular: "無料でご利用いただけます {DATE}まで"
          },
          "ko-KR": {
            singular: "무료 이용 가능: {DATE}까지"
          },
          "pt-BR": {
            singular: "Acesso gratuito até {DATE}"
          },
          "zh-CN": {
            singular: "免费访问至 {DATE}"
          }
        }
      }),
      smartSearchFreeUntil: _v0 => (0, _v48.translate)({
        singular: "Smart Search is free until {DATE}. Contact Sales to keep access.",
        replacements: {
          DATE: _v0
        },
        dictionary: {
          es: {
            singular: "Smart Search es gratuito hasta {DATE}. Póngase en contacto con el equipo de ventas para mantener el acceso."
          },
          "de-DE": {
            singular: "Smart Search ist bis {DATE} kostenlos. Kontaktieren Sie den Vertrieb, um den Zugriff zu behalten."
          },
          "fr-FR": {
            singular: "Smart Search est gratuit jusqu'au {DATE}. Contactez le service commercial pour conserver l'accès."
          },
          "ja-JP": {
            singular: "Smart Search は {DATE} まで無料でご利用いただけます。アクセスを継続するには営業までお問い合わせください。"
          },
          "ko-KR": {
            singular: "Smart Search는 {DATE}까지 무료입니다. 계속 이용하려면 영업팀에 문의하세요."
          },
          "pt-BR": {
            singular: "Smart Search é gratuito até {DATE}. Entre em contato com o time de vendas para manter o acesso."
          },
          "zh-CN": {
            singular: "Smart Search 在 {DATE} 之前免费。欲继续访问，请联系销售。"
          }
        }
      }),
      get SMART_SEARCH_INFO() {
        return (0, _v48.translate)({
          singular: "Smart Search finds the exact moment you need by analyzing visuals, transcripts, titles, and details.",
          dictionary: {
            es: {
              singular: "Smart Search encuentra el momento exacto que necesitas analizando los elementos visuales, las transcripciones, los títulos y los detalles."
            },
            "de-DE": {
              singular: "Smart Search findet den genauen Moment, den Sie benötigen, indem es visuelle Inhalte, Transkripte, Titel und Details analysiert."
            },
            "fr-FR": {
              singular: "Smart Search trouve le moment précis dont vous avez besoin en analysant les visuels, les transcriptions, les titres et les détails."
            },
            "ja-JP": {
              singular: "Smart Searchは映像、書き起こし、タイトル、および詳細を解析して、必要な瞬間を正確に見つけます。"
            },
            "ko-KR": {
              singular: "Smart Search는 영상, 대본, 제목 및 세부 정보를 분석하여 필요한 정확한 순간을 찾아줍니다."
            },
            "pt-BR": {
              singular: "O Smart Search encontra o momento exato de que você precisa analisando imagens, transcrições, títulos e detalhes."
            },
            "zh-CN": {
              singular: "Smart Search 通过分析画面、转录文本、标题和详情，找到你需要的精确时刻。"
            }
          }
        });
      },
      get SMART_SEARCH_INFO_TRIAL() {
        return (0, _v48.translate)({
          singular: "Smart Search finds the exact moment you need by analyzing visuals, transcripts, titles, and details. Full analysis covers videos from the last 12 months, and older videos are searched by transcript and details only. Contact sales to extend it to your whole library",
          dictionary: {
            es: {
              singular: "Smart Search encuentra el momento exacto que necesitas analizando los elementos visuales, las transcripciones, los títulos y los detalles. El análisis completo cubre los vídeos de los últimos 12 meses y, para los vídeos más antiguos, la búsqueda se realiza únicamente por transcripción y detalles. Contacte con el equipo de ventas para ampliarlo a toda su biblioteca"
            },
            "de-DE": {
              singular: "Smart Search findet den genauen Moment, den Sie benötigen, indem es visuelle Inhalte, Transkripte, Titel und Details analysiert. Die vollständige Analyse umfasst Videos der letzten 12 Monate; ältere Videos werden jedoch nur anhand von Transkripten und Details durchsucht. Kontaktieren Sie den Vertrieb, um dies auf Ihre gesamte Bibliothek auszuweiten."
            },
            "fr-FR": {
              singular: "Smart Search trouve le moment précis dont vous avez besoin en analysant les visuels, les transcriptions, les titres et les détails. L'analyse complète couvre les vidéos des 12 derniers mois, et les vidéos plus anciennes sont recherchées uniquement par leur transcription et leurs détails. Contactez le service commercial pour l'étendre à l'ensemble de votre bibliothèque"
            },
            "ja-JP": {
              singular: "Smart Searchは映像、書き起こし、タイトル、および詳細を解析して、必要な瞬間を正確に見つけます。完全な解析は過去12か月のビデオを対象としており、それより前のビデオは書き起こしと詳細のみで検索されます。ライブラリ全体への拡張については営業までお問い合わせください。"
            },
            "ko-KR": {
              singular: "Smart Search는 영상, 대본, 제목 및 세부 정보를 분석하여 필요한 정확한 순간을 찾아줍니다. 전체 분석은 지난 12개월 동안의 비디오를 대상으로 하며, 그보다 오래된 비디오는 대본과 세부 정보로만 검색됩니다. 전체 라이브러리로 확장하려면 영업팀에 문의하세요"
            },
            "pt-BR": {
              singular: "O Smart Search encontra o momento exato de que você precisa analisando imagens, transcrições, títulos e detalhes. A análise completa abrange vídeos dos últimos 12 meses, e vídeos mais antigos são pesquisados apenas por transcrição e detalhes. Entre em contato com o time de vendas para estendê-la a toda a sua biblioteca"
            },
            "zh-CN": {
              singular: "Smart Search 通过分析画面、转录文本、标题和详情，找到你需要的精确时刻。完整分析覆盖最近 12 个月的视频，较早的视频仅通过转录文本和详情进行搜索。如需将其扩展到整个视频库，请联系销售。"
            }
          }
        });
      },
      relevantMomentsCount: _v0 => (0, _v48.translate)({
        singular: "{COUNT} relevant moment",
        plural: "{COUNT} relevant moments",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "{COUNT} momento relevante",
            plural: "{COUNT} momentos relevantes"
          },
          "de-DE": {
            singular: "{COUNT} relevanter Moment",
            plural: "{COUNT} relevante Momente"
          },
          "fr-FR": {
            singular: "{COUNT} moment pertinent",
            plural: "{COUNT} moments pertinents"
          },
          "ja-JP": {
            singular: "{COUNT}件の関連シーン",
            plural: "{COUNT}件の関連シーン"
          },
          "ko-KR": {
            singular: "{COUNT}개의 관련 순간",
            plural: "{COUNT}개의 관련 순간"
          },
          "pt-BR": {
            singular: "{COUNT} momento relevante",
            plural: "{COUNT} momentos relevantes"
          },
          "zh-CN": {
            singular: "有 {COUNT} 个相关片段",
            plural: "有 {COUNT} 个相关片段"
          }
        }
      }),
      showMoreSourcesCount: _v0 => (0, _v48.translate)({
        singular: "Show {COUNT} more source",
        plural: "Show {COUNT} more sources",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "Mostrar {COUNT} fuente más",
            plural: "Mostrar {COUNT} fuentes más"
          },
          "de-DE": {
            singular: "{COUNT} weitere Quelle anzeigen",
            plural: "{COUNT} weitere Quellen anzeigen"
          },
          "fr-FR": {
            singular: "Afficher {COUNT} source de plus",
            plural: "Afficher {COUNT} sources de plus"
          },
          "ja-JP": {
            singular: "さらに{COUNT}件のソースを表示",
            plural: "さらに{COUNT}件のソースを表示"
          },
          "ko-KR": {
            singular: "{COUNT}개의 출처 더 보기",
            plural: "{COUNT}개의 출처 더 보기"
          },
          "pt-BR": {
            singular: "Mostrar mais {COUNT} fonte",
            plural: "Mostrar mais {COUNT} fontes"
          },
          "zh-CN": {
            singular: "显示另外 {COUNT} 个来源",
            plural: "显示另外 {COUNT} 个来源"
          }
        }
      }),
      aiSourcesOf: (_v0, _v1) => (0, _v48.translate)({
        singular: "{SHOWN} of {TOTAL}",
        replacements: {
          SHOWN: _v0,
          TOTAL: _v1
        },
        dictionary: {
          es: {
            singular: "{SHOWN} de {TOTAL}"
          },
          "de-DE": {
            singular: "{SHOWN} von {TOTAL}"
          },
          "fr-FR": {
            singular: "{SHOWN} sur {TOTAL}"
          },
          "ja-JP": {
            singular: "{TOTAL}中の{SHOWN}"
          },
          "ko-KR": {
            singular: "{TOTAL}개 중 {SHOWN}개"
          },
          "pt-BR": {
            singular: "{SHOWN} de {TOTAL}"
          },
          "zh-CN": {
            singular: "{SHOWN} / {TOTAL}"
          }
        }
      }),
      sortLabel: _v0 => (0, _v48.translate)({
        singular: "Sort: {SORT}",
        replacements: {
          SORT: _v0
        },
        dictionary: {
          es: {
            singular: "Orden: {SORT}"
          },
          "de-DE": {
            singular: "Sortierung: {SORT}"
          },
          "fr-FR": {
            singular: "Tri : {SORT}"
          },
          "ja-JP": {
            singular: "並べ替え: {SORT}"
          },
          "ko-KR": {
            singular: "정렬: {SORT}"
          },
          "pt-BR": {
            singular: "Ordenar: {SORT}"
          },
          "zh-CN": {
            singular: "排序: {SORT}"
          }
        }
      }),
      publishedAt: (_v0, _v1) => (0, _v48.translate)({
        singular: "{DATE} at {TIME}",
        replacements: {
          DATE: _v0,
          TIME: _v1
        },
        dictionary: {
          es: {
            singular: "{DATE} a las {TIME}"
          },
          "de-DE": {
            singular: "{DATE} am {TIME}"
          },
          "fr-FR": {
            singular: "Le {DATE} à {TIME}"
          },
          "ja-JP": {
            singular: "{DATE} {TIME}"
          },
          "ko-KR": {
            singular: "{DATE} {TIME}"
          },
          "pt-BR": {
            singular: "Em {DATE} às {TIME}"
          },
          "zh-CN": {
            singular: "{DATE} {TIME}"
          }
        }
      }),
      videoFallbackTitle: _v0 => (0, _v48.translate)({
        singular: "Video {ID}",
        replacements: {
          ID: _v0
        },
        dictionary: {
          "fr-FR": {
            singular: "Vidéo {ID}"
          },
          "ja-JP": {
            singular: "ビデオ {ID}"
          },
          "ko-KR": {
            singular: "비디오 {ID}"
          },
          "pt-BR": {
            singular: "Vídeo {ID}"
          },
          "zh-CN": {
            singular: "视频 {ID}"
          }
        }
      }),
      otherResultsCount: _v0 => (0, _v48.translate)({
        singular: "{COUNT} other result",
        plural: "{COUNT} other results",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "{COUNT} otro resultado",
            plural: "{COUNT} otros resultados"
          },
          "de-DE": {
            singular: "{COUNT} weiteres Ergebnis",
            plural: "{COUNT} weitere Ergebnisse"
          },
          "fr-FR": {
            singular: "{COUNT} autre résultat",
            plural: "{COUNT} autres résultats"
          },
          "ja-JP": {
            singular: "{COUNT}件のその他の結果",
            plural: "{COUNT}件のその他の結果"
          },
          "ko-KR": {
            singular: "{COUNT}개의 다른 결과",
            plural: "{COUNT}개의 다른 결과"
          },
          "pt-BR": {
            singular: "{COUNT} outro resultado",
            plural: "{COUNT} outros resultados"
          },
          "zh-CN": {
            singular: "{COUNT} 个其他结果",
            plural: "{COUNT} 个其他结果"
          }
        }
      })
    },
    _v51 = () => (0, _v48.translate)({
      singular: "Your search didn’t match any videos, so we searched for its key terms instead.",
      dictionary: {
        es: {
          singular: "Tu búsqueda no coincidió con ningún vídeo, así que buscamos sus términos clave en su lugar."
        },
        "de-DE": {
          singular: "Ihre Suche ergab keine Treffer für Videos, daher haben wir stattdessen nach den Schlüsselbegriffen gesucht."
        },
        "fr-FR": {
          singular: "Votre recherche n’a trouvé aucune vidéo ; nous avons donc recherché ses mots-clés à la place."
        },
        "ja-JP": {
          singular: "検索は該当する動画と一致しませんでした。代わりに主要なキーワードで検索しました。"
        },
        "ko-KR": {
          singular: "검색어와 일치하는 동영상을 찾지 못해 대신 주요 키워드로 검색했습니다."
        },
        "pt-BR": {
          singular: "Sua pesquisa não correspondeu a nenhum vídeo, então pesquisamos pelos seus termos-chave."
        },
        "zh-CN": {
          singular: "您的搜索未匹配到任何视频，因此我们改为搜索其关键术语。"
        }
      }
    }),
    _v52 = {
      page: 1,
      query: void 0,
      uploaded: void 0,
      type: void 0,
      live: void 0,
      hdr: void 0,
      vimeo360: void 0,
      price: void 0,
      license: void 0,
      resolution: void 0,
      collection: void 0,
      duration: void 0,
      category: void 0,
      follow: void 0,
      updated: void 0,
      sort: void 0
    },
    _v53 = {
      query: void 0,
      page: 1,
      type: void 0,
      queryFields: void 0,
      privacy: void 0,
      sort: void 0,
      uploader: void 0,
      folderIncluded: void 0,
      folderExcluded: void 0,
      date: void 0,
      customMetadata: void 0,
      delegated: void 0
    },
    _v54 = "filter_custom_metadata",
    _v55 = "ai_delegate",
    _v56 = {
      name: "uploaded",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Date uploaded",
          dictionary: {
            es: {
              singular: "Fecha de la subida"
            },
            "de-DE": {
              singular: "Datum des Hochladens"
            },
            "fr-FR": {
              singular: "Date de mise en ligne"
            },
            "ja-JP": {
              singular: "アップロード日"
            },
            "ko-KR": {
              singular: "업로드 날짜"
            },
            "pt-BR": {
              singular: "Data do carregamento"
            },
            "zh-CN": {
              singular: "上传日期"
            }
          }
        });
      },
      untranslatedCopy: "Date uploaded",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        thisYear: {
          value: "this-year",
          get text() {
            return (0, _v48.translate)({
              singular: "Last 365 days",
              dictionary: {
                es: {
                  singular: "En los últimos 365 días"
                },
                "de-DE": {
                  singular: "Letzte 365 Tage"
                },
                "fr-FR": {
                  singular: "365 derniers jours"
                },
                "ja-JP": {
                  singular: "過去 365 日間"
                },
                "ko-KR": {
                  singular: "최근 365일"
                },
                "pt-BR": {
                  singular: "Últimos 365 dias"
                },
                "zh-CN": {
                  singular: "过去 365 天"
                }
              }
            });
          },
          untranslatedText: "Last 365 days"
        },
        thisMonth: {
          value: "this-month",
          get text() {
            return (0, _v48.translate)({
              singular: "Last 30 days",
              dictionary: {
                es: {
                  singular: "En los últimos 30 días"
                },
                "de-DE": {
                  singular: "Letze 30 Tage"
                },
                "fr-FR": {
                  singular: " 30 derniers jours"
                },
                "ja-JP": {
                  singular: "過去 30 日間"
                },
                "ko-KR": {
                  singular: "최근 30일"
                },
                "pt-BR": {
                  singular: "Últimos 30 dias"
                },
                "zh-CN": {
                  singular: "过去 30 天"
                }
              }
            });
          },
          untranslatedText: "Last 30 days"
        },
        thisWeek: {
          value: "this-week",
          get text() {
            return (0, _v48.translate)({
              singular: "Last 7 days",
              dictionary: {
                es: {
                  singular: "En los últimos 7 días"
                },
                "de-DE": {
                  singular: "Letzte 7 Tage"
                },
                "fr-FR": {
                  singular: "7 derniers jours"
                },
                "ja-JP": {
                  singular: "過去 7 日間"
                },
                "ko-KR": {
                  singular: "최근 7일"
                },
                "pt-BR": {
                  singular: "Últimos 7 dias"
                },
                "zh-CN": {
                  singular: "过去 7 天"
                }
              }
            });
          },
          untranslatedText: "Last 7 days"
        },
        today: {
          value: "today",
          get text() {
            return (0, _v48.translate)({
              singular: "Last 24 hours",
              dictionary: {
                es: {
                  singular: "En las últimas 24 horas"
                },
                "de-DE": {
                  singular: "Letzte 24 Stunden"
                },
                "fr-FR": {
                  singular: "Dernières 24 heures"
                },
                "ja-JP": {
                  singular: "過去 24 時間"
                },
                "ko-KR": {
                  singular: "최근 24시간"
                },
                "pt-BR": {
                  singular: "Últimas 24 horas"
                },
                "zh-CN": {
                  singular: "过去 24 小时"
                }
              }
            });
          },
          untranslatedText: "Last 24 hours"
        }
      }
    },
    _v57 = {
      name: "updated",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Last updated",
          dictionary: {
            es: {
              singular: "Fecha de la última actualización"
            },
            "de-DE": {
              singular: "Letztes Update"
            },
            "fr-FR": {
              singular: "Dernière mise à jour"
            },
            "ja-JP": {
              singular: "最終更新"
            },
            "ko-KR": {
              singular: "마지막 업데이트"
            },
            "pt-BR": {
              singular: "Última atualização"
            },
            "zh-CN": {
              singular: "最后更新"
            }
          }
        });
      },
      untranslatedCopy: "Last updated",
      options: _v56.options
    },
    _v58 = {
      name: "type",
      get nameCopy() {
        return (0, _v48.translate)({
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
        });
      },
      untranslatedCopy: "Type",
      options: {
        clip: {
          value: "clip",
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Videos"
        },
        ondemand: {
          value: "ondemand",
          get text() {
            return (0, _v48.translate)({
              singular: "On Demand",
              dictionary: {
                "ja-JP": {
                  singular: "オンデマンド"
                },
                "ko-KR": {
                  singular: "온디맨드"
                }
              }
            });
          },
          untranslatedText: "On Demand"
        },
        people: {
          value: "people",
          get text() {
            return (0, _v48.translate)({
              singular: "People",
              dictionary: {
                es: {
                  singular: "Gente"
                },
                "de-DE": {
                  singular: "Personen"
                },
                "fr-FR": {
                  singular: "Personnes"
                },
                "ja-JP": {
                  singular: "メンバー"
                },
                "ko-KR": {
                  singular: "멤버"
                },
                "pt-BR": {
                  singular: "Pessoas"
                },
                "zh-CN": {
                  singular: "人"
                }
              }
            });
          },
          untranslatedText: "People"
        },
        channel: {
          value: "channel",
          get text() {
            return (0, _v48.translate)({
              singular: "Channels",
              dictionary: {
                es: {
                  singular: "Canales"
                },
                "de-DE": {
                  singular: "Kanäle"
                },
                "fr-FR": {
                  singular: "Chaînes"
                },
                "ja-JP": {
                  singular: "チャンネル"
                },
                "ko-KR": {
                  singular: "채널"
                },
                "pt-BR": {
                  singular: "Canais"
                },
                "zh-CN": {
                  singular: "频道"
                }
              }
            });
          },
          untranslatedText: "Channels"
        },
        group: {
          value: "group",
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Groups"
        }
      }
    },
    _v59 = {
      name: "live",
      get nameCopy() {
        return (0, _v48.translate)({
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
        });
      },
      untranslatedCopy: "Live events",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        now: {
          value: "now",
          get text() {
            return (0, _v48.translate)({
              singular: "Live now",
              dictionary: {
                es: {
                  singular: "En vivo ahora"
                },
                "de-DE": {
                  singular: "Jetzt live"
                },
                "fr-FR": {
                  singular: "En direct maintenant"
                },
                "ja-JP": {
                  singular: "ライブ配信中"
                },
                "ko-KR": {
                  singular: "지금 라이브하세요"
                },
                "pt-BR": {
                  singular: "Ao vivo agora"
                },
                "zh-CN": {
                  singular: "立即直播"
                }
              }
            });
          },
          untranslatedText: "Live now"
        }
      }
    },
    _v60 = {
      name: "hdr",
      nameCopy: "HDR",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        hdr: {
          value: "hdr",
          get text() {
            return (0, _v48.translate)({
              singular: "Any HDR",
              dictionary: {
                es: {
                  singular: "Cualquier HDR"
                },
                "de-DE": {
                  singular: "Alle HDR-Inhalte"
                },
                "fr-FR": {
                  singular: "N'importe quelle HDR"
                },
                "ja-JP": {
                  singular: "あらゆるHDR"
                },
                "ko-KR": {
                  singular: "모든 HDR"
                },
                "pt-BR": {
                  singular: "Qualquer HDR"
                },
                "zh-CN": {
                  singular: "任何 HDR"
                }
              }
            });
          },
          untranslatedText: "Any HDR"
        },
        dolbyVision: {
          value: "dolby_vision",
          text: "Dolby Vision"
        },
        hdr10: {
          value: "hdr10",
          text: "HDR10"
        },
        "hdr10+": {
          value: "hdr10+",
          text: "HDR10+"
        }
      }
    },
    _v61 = {
      name: "vimeo360",
      nameCopy: "Vimeo 360°",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        spatial: {
          value: "spatial",
          get text() {
            return (0, _v48.translate)({
              singular: "Spatial",
              dictionary: {
                es: {
                  singular: "Espacial"
                },
                "de-DE": {
                  singular: "Räumlich"
                },
                "ja-JP": {
                  singular: "スペーシャル"
                },
                "ko-KR": {
                  singular: "입체"
                },
                "pt-BR": {
                  singular: "Espacial"
                },
                "zh-CN": {
                  singular: "空间"
                }
              }
            });
          },
          untranslatedText: "Spatial"
        },
        vimeo360: {
          value: "360",
          text: "360°"
        }
      }
    },
    _v62 = {
      name: "price",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Price",
          dictionary: {
            es: {
              singular: "Precio"
            },
            "de-DE": {
              singular: "Preis"
            },
            "fr-FR": {
              singular: "Prix"
            },
            "ja-JP": {
              singular: "価格"
            },
            "ko-KR": {
              singular: "가격"
            },
            "pt-BR": {
              singular: "Preço"
            },
            "zh-CN": {
              singular: "价格"
            }
          }
        });
      },
      untranslatedCopy: "Price",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        free: {
          value: "free",
          get text() {
            return (0, _v48.translate)({
              singular: "Free",
              dictionary: {
                es: {
                  singular: "Gratis"
                },
                "de-DE": {
                  singular: "Kostenlos"
                },
                "fr-FR": {
                  singular: "Gratuit "
                },
                "ja-JP": {
                  singular: "無料"
                },
                "ko-KR": {
                  singular: "무료"
                },
                "zh-CN": {
                  singular: "免费"
                }
              }
            });
          },
          untranslatedText: "Free"
        },
        paid: {
          value: "paid",
          get text() {
            return (0, _v48.translate)({
              singular: "Paid",
              dictionary: {
                es: {
                  singular: "Pagado"
                },
                "de-DE": {
                  singular: "Bezahlung bereits erledigt"
                },
                "fr-FR": {
                  singular: "Payé"
                },
                "ja-JP": {
                  singular: "有料"
                },
                "ko-KR": {
                  singular: "유료"
                },
                "pt-BR": {
                  singular: "Pago"
                },
                "zh-CN": {
                  singular: "付费"
                }
              }
            });
          },
          untranslatedText: "Paid"
        }
      }
    },
    _v63 = {
      name: "license",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "License",
          dictionary: {
            es: {
              singular: "Licencia"
            },
            "de-DE": {
              singular: "Lizenz"
            },
            "fr-FR": {
              singular: "Licence"
            },
            "ja-JP": {
              singular: "ライセンス"
            },
            "ko-KR": {
              singular: "라이센스"
            },
            "pt-BR": {
              singular: "Licença"
            },
            "zh-CN": {
              singular: "许可"
            }
          }
        });
      },
      untranslatedCopy: "License",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        byNcNd: {
          value: "by-nc-nd",
          text: "CC BY-NC-ND"
        },
        by: {
          value: "by",
          text: "CC BY"
        },
        byNc: {
          value: "by-nc",
          text: "CC BY-NC"
        },
        byNcSa: {
          value: "by-nc-sa",
          text: "CC BY-NC-SA"
        },
        byNd: {
          value: "by-nd",
          text: "CC BY-ND"
        },
        bySa: {
          value: "by-sa",
          text: "CC BY-SA"
        },
        cc0: {
          value: "cc0",
          text: "CC0"
        }
      }
    },
    _v64 = {
      name: "resolution",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Resolution",
          dictionary: {
            es: {
              singular: "Resolución"
            },
            "de-DE": {
              singular: "Auflösung"
            },
            "fr-FR": {
              singular: "Résolution"
            },
            "ja-JP": {
              singular: "解像度"
            },
            "ko-KR": {
              singular: "해상도"
            },
            "pt-BR": {
              singular: "Resolução"
            },
            "zh-CN": {
              singular: "分辨率"
            }
          }
        });
      },
      untranslatedCopy: "Resolution",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        "4k": {
          value: "4k",
          text: "4K"
        }
      }
    },
    _v65 = {
      name: "duration",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Duration",
          dictionary: {
            es: {
              singular: "Duración"
            },
            "de-DE": {
              singular: "Dauer"
            },
            "fr-FR": {
              singular: "Durée "
            },
            "ja-JP": {
              singular: "期間"
            },
            "ko-KR": {
              singular: "길이"
            },
            "pt-BR": {
              singular: "Duração"
            },
            "zh-CN": {
              singular: "时长"
            }
          }
        });
      },
      untranslatedCopy: "Duration",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        short: {
          value: "short",
          get text() {
            return (0, _v48.translate)({
              singular: "Short (less than 4 minutes)",
              dictionary: {
                es: {
                  singular: "Corto (menos de 4 minutos)"
                },
                "de-DE": {
                  singular: "Kurz (weniger als 4 Minuten)"
                },
                "fr-FR": {
                  singular: "Court (moins de 4 minutes)"
                },
                "ja-JP": {
                  singular: "短編（4分未満）"
                },
                "ko-KR": {
                  singular: "단편(4분 이내)"
                },
                "pt-BR": {
                  singular: "Curto (menos de 4 minutos)"
                },
                "zh-CN": {
                  singular: "短（少于 4 分钟）"
                }
              }
            });
          },
          untranslatedText: "Short (less than 4 minutes)"
        },
        medium: {
          value: "medium",
          get text() {
            return (0, _v48.translate)({
              singular: "Medium (4-10 minutes)",
              dictionary: {
                es: {
                  singular: "Mediana (4-10 minutos)"
                },
                "de-DE": {
                  singular: "Mittel (4-10 Minuten)"
                },
                "fr-FR": {
                  singular: "Moyen (4 à 10 minutes)"
                },
                "ja-JP": {
                  singular: "中編（4〜10分）"
                },
                "ko-KR": {
                  singular: "중편(4~10분)"
                },
                "pt-BR": {
                  singular: "Médio (4 a 10 minutos)"
                },
                "zh-CN": {
                  singular: "中（4-10 分钟）"
                }
              }
            });
          },
          untranslatedText: "Medium (4-10 minutes)"
        },
        long: {
          value: "long",
          get text() {
            return (0, _v48.translate)({
              singular: "Long (over 10 minutes)",
              dictionary: {
                es: {
                  singular: "Largo (más de 10 minutos)"
                },
                "de-DE": {
                  singular: "Lang (über 10 Minuten)"
                },
                "fr-FR": {
                  singular: "Long (plus de 10 minutes)"
                },
                "ja-JP": {
                  singular: "長編（10分超）"
                },
                "ko-KR": {
                  singular: "장편(10분 이상)"
                },
                "pt-BR": {
                  singular: "Duração (mais de 10 minutos)"
                },
                "zh-CN": {
                  singular: "长（超过 10 分钟）"
                }
              }
            });
          },
          untranslatedText: "Long (over 10 minutes)"
        }
      }
    },
    _v66 = {
      name: "collection",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Vimeo collections",
          dictionary: {
            es: {
              singular: "Colecciones de Vimeo"
            },
            "de-DE": {
              singular: "Vimeo-Sammlungen"
            },
            "fr-FR": {
              singular: "Collections Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoコレクション"
            },
            "ko-KR": {
              singular: "Vimeo 컬렉션"
            },
            "pt-BR": {
              singular: "Coleções do Vimeo"
            },
            "zh-CN": {
              singular: "Vimeo 合集"
            }
          }
        });
      },
      untranslatedCopy: "Vimeo collections",
      options: {
        default: {
          value: "default",
          text: _v50.ANY,
          untranslatedText: "Any"
        },
        staffpick: {
          value: "staffpick",
          get text() {
            return (0, _v48.translate)({
              singular: "Staff Picks",
              dictionary: {
                es: {
                  singular: "Selecciones del equipo"
                },
                "de-DE": {
                  singular: "Empfehlungen des Teams"
                },
                "fr-FR": {
                  singular: "Sélections de l'équipe"
                },
                "ja-JP": {
                  singular: "スタッフのおすすめ"
                },
                "ko-KR": {
                  singular: "스태프 픽"
                },
                "pt-BR": {
                  singular: "Escolhas da Equipe"
                },
                "zh-CN": {
                  singular: "编辑精选"
                }
              }
            });
          },
          untranslatedText: "Staff Picks"
        }
      }
    },
    _v67 = {
      name: "follow",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Followers",
          dictionary: {
            es: {
              singular: "Seguidores"
            },
            "fr-FR": {
              singular: "Abonnés"
            },
            "ja-JP": {
              singular: "フォロワー"
            },
            "ko-KR": {
              singular: "팔로워"
            },
            "pt-BR": {
              singular: "Seguidores"
            },
            "zh-CN": {
              singular: "粉丝"
            }
          }
        });
      },
      untranslatedCopy: "Followers",
      options: {
        default: {
          value: "default"
        },
        follow: {
          value: "true",
          get text() {
            return (0, _v48.translate)({
              singular: "Only people I follow",
              dictionary: {
                es: {
                  singular: "Solo la gente que sigo"
                },
                "de-DE": {
                  singular: "Nur Leute, denen ich folge"
                },
                "fr-FR": {
                  singular: "Seulement les personnes que je suis"
                },
                "ja-JP": {
                  singular: "フォローしている人のみ"
                },
                "ko-KR": {
                  singular: "내가 팔로우한 사람만"
                },
                "pt-BR": {
                  singular: "Somente pessoas que eu seguir"
                },
                "zh-CN": {
                  singular: "仅限我关注的人"
                }
              }
            });
          },
          untranslatedText: "Only people I follow"
        }
      }
    },
    _v68 = {
      default: {
        value: "default",
        text: _v50.ANY,
        untranslatedText: "Any"
      },
      instructional: {
        value: "instructional",
        text: "Instructional"
      },
      documentary: {
        value: "documentary",
        text: "Documentary"
      },
      sports: {
        value: "sports",
        text: "Sports"
      },
      drama: {
        value: "drama",
        text: "Drama"
      },
      art: {
        value: "art",
        text: "Art"
      },
      comedy: {
        value: "comedy",
        text: "Comedy"
      },
      kidsFamily: {
        value: "kids+family",
        text: "Kids + Family"
      },
      actionAdventure: {
        value: "action+adventure",
        text: "Action + Adventure"
      },
      shortFilms: {
        value: "short_films",
        text: "Short Films"
      },
      romance: {
        value: "romance",
        text: "Romance"
      },
      music: {
        value: "music",
        text: "Music"
      },
      travel: {
        value: "travel",
        text: "Travel"
      },
      animation: {
        value: "animation",
        text: "Animation"
      },
      horror: {
        value: "horror",
        text: "Horror"
      },
      sciFiFantasy: {
        value: "sci_fi+fantasy",
        text: "Sci Fi + Fantasy"
      },
      thriller: {
        value: "thriller",
        text: "Thriller"
      },
      tvSeries: {
        value: "tv+series",
        text: "TV + Series"
      },
      fashion: {
        value: "fashion",
        text: "Fashion"
      },
      actionAdventure2: {
        value: "action-adventure",
        text: "Action & Adventure"
      },
      kidsFamily2: {
        value: "kids-family",
        text: "Kids & Family"
      },
      scifiFantasy: {
        value: "scifi-fantasy",
        text: "SciFi & Fantasy"
      },
      shortFilms2: {
        value: "short-films",
        text: "Short Films"
      },
      tvseries: {
        value: "tv-series",
        text: "TV Series"
      },
      narrative: {
        value: "narrative",
        text: "Narrative"
      },
      experimental: {
        value: "experimental",
        text: "Experimental"
      },
      educational: {
        value: "educational",
        text: "Educational"
      },
      instructionals: {
        value: "instructionals",
        text: "Instructionals"
      },
      adsandcommercials: {
        value: "adsandcommercials",
        text: "Ads and Commercials"
      },
      cameratechniques: {
        value: "cameratechniques",
        text: "Cameras & Techniques"
      },
      industry: {
        value: "industry",
        text: "Industry"
      },
      product: {
        value: "product",
        text: "Product"
      },
      brandedcontent: {
        value: "brandedcontent",
        text: "Branded Content"
      },
      personal: {
        value: "personal",
        text: "Personal"
      },
      journalism: {
        value: "journalism",
        text: "Reporting & Journalism"
      },
      events: {
        value: "events",
        text: "Events"
      },
      talks: {
        value: "talks",
        text: "Talks"
      },
      trailers: {
        value: "trailers",
        text: "Trailers"
      },
      identsandanimatedlogos: {
        value: "identsandanimatedlogos",
        text: "Idents and Animated Logos"
      },
      food: {
        value: "food",
        text: "Food"
      },
      titlesandcredits: {
        value: "titlesandcredits",
        text: "Titles & Credits"
      },
      wedding: {
        value: "wedding",
        text: "Wedding"
      },
      videoschool: {
        value: "videoschool",
        text: "Video School"
      }
    },
    _v69 = "live_event",
    _v70 = {
      name: _v58.name,
      get nameCopy() {
        return (0, _v48.translate)({
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
        });
      },
      untranslatedCopy: "Type",
      options: {
        default: {
          value: "default",
          text: _v50.ALL,
          untranslatedText: "All"
        },
        video: {
          value: "video",
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Videos"
        },
        folder: {
          value: "folder",
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Folders"
        },
        showcase: {
          value: "showcase",
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Showcases"
        },
        live_event: {
          value: _v69,
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Live events"
        }
      }
    };
  _v58.name, _v50.ALL;
  let _v71 = {
      name: "query_fields",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Appears in",
          dictionary: {
            es: {
              singular: "Aparece en"
            },
            "de-DE": {
              singular: "Erscheint in"
            },
            "fr-FR": {
              singular: "Apparaît dans"
            },
            "ja-JP": {
              singular: "カテゴリー"
            },
            "ko-KR": {
              singular: "표시"
            },
            "pt-BR": {
              singular: "Aparece em"
            },
            "zh-CN": {
              singular: "类型"
            }
          }
        });
      },
      untranslatedCopy: "Appears in",
      options: {
        title: {
          value: "title",
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Title"
        },
        transcript: {
          value: "captions",
          get text() {
            return (0, _v48.translate)({
              singular: "Audio transcript",
              dictionary: {
                es: {
                  singular: "Transcripción de audio"
                },
                "de-DE": {
                  singular: "Audio-Transkript"
                },
                "fr-FR": {
                  singular: "Transcription audio"
                },
                "ja-JP": {
                  singular: "音声トランスクリプト"
                },
                "ko-KR": {
                  singular: "오디오 스크립트"
                },
                "pt-BR": {
                  singular: "Transcrição de áudio"
                },
                "zh-CN": {
                  singular: "音频文字稿"
                }
              }
            });
          },
          untranslatedText: "Audio transcript"
        },
        description: {
          value: "description",
          get text() {
            return (0, _v48.translate)({
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
            });
          },
          untranslatedText: "Description"
        },
        tags: {
          value: "tags",
          get text() {
            return (0, _v48.translate)({
              singular: "Tags",
              dictionary: {
                es: {
                  singular: "Etiquetas"
                },
                "fr-FR": {
                  singular: "Étiquettes"
                },
                "ja-JP": {
                  singular: "タグ"
                },
                "ko-KR": {
                  singular: "태그"
                },
                "pt-BR": {
                  singular: "Etiquetas"
                },
                "zh-CN": {
                  singular: "标签"
                }
              }
            });
          },
          untranslatedText: "Tags"
        },
        chapter: {
          value: "chapters",
          get text() {
            return (0, _v48.translate)({
              singular: "Chapters",
              dictionary: {
                es: {
                  singular: "Capítulos"
                },
                "de-DE": {
                  singular: "Kapitel"
                },
                "fr-FR": {
                  singular: "Chapitres"
                },
                "ja-JP": {
                  singular: "チャプター"
                },
                "ko-KR": {
                  singular: "챕터"
                },
                "pt-BR": {
                  singular: "Capítulos"
                },
                "zh-CN": {
                  singular: "章节"
                }
              }
            });
          },
          untranslatedText: "Chapters"
        }
      }
    },
    _v72 = "1.25rem",
    _v73 = _v0 => ({
      name: "filter_privacy",
      get nameCopy() {
        return (0, _v48.translate)({
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
        });
      },
      untranslatedCopy: "Privacy",
      options: Object.fromEntries(_v49.DEFAULT_PRIVACY_OPTIONS.filter(_v0 => "team" !== _v0.privacy).map(_v0 => [_v0.privacy, {
        value: "disable" === _v0.privacy ? "hide-from-vimeo" : _v0.title.toLowerCase(),
        text: _v0 && "disable" === _v0.privacy ? (0, _v48.translate)({
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
        }) : _v0.title,
        untranslatedText: _v0.title,
        icon: _v0 && "disable" === _v0.privacy ? (0, _v1.jsx)(_v47.Code, {
          boxSize: _v72
        }) : (0, _v49.videoPrivacyIcons)(_v72)[_v0.privacy].icon
      }]))
    }),
    _v74 = {
      name: "filter_uploader",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Created by",
          dictionary: {
            es: {
              singular: "Creado por"
            },
            "de-DE": {
              singular: "Erstellt von"
            },
            "fr-FR": {
              singular: "Créé par"
            },
            "ja-JP": {
              singular: "作成者"
            },
            "ko-KR": {
              singular: "제작:"
            },
            "pt-BR": {
              singular: "Criado por"
            },
            "zh-CN": {
              singular: "创建者"
            }
          }
        });
      },
      untranslatedCopy: "Created by"
    },
    _v75 = {
      folderIncludedName: "filter_folder_include",
      folderExcludedName: "filter_folder_exclude",
      get nameCopy() {
        return (0, _v48.translate)({
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
        });
      },
      untranslatedCopy: "Folders"
    },
    _v76 = {
      name: "filter_date",
      get nameCopy() {
        return (0, _v48.translate)({
          singular: "Date modified",
          dictionary: {
            es: {
              singular: "Fecha de modificación"
            },
            "de-DE": {
              singular: "Datum der Änderung"
            },
            "fr-FR": {
              singular: "Date modifié"
            },
            "ja-JP": {
              singular: "変更された日付"
            },
            "ko-KR": {
              singular: "수정 날짜"
            },
            "pt-BR": {
              singular: "Data de modificação"
            },
            "zh-CN": {
              singular: "日期已修改"
            }
          }
        });
      },
      untranslatedCopy: "Date modified",
      options: {
        today: {
          get label() {
            return (0, _v48.translate)({
              singular: "Today",
              dictionary: {
                es: {
                  singular: "Hoy"
                },
                "de-DE": {
                  singular: "Heute"
                },
                "fr-FR": {
                  singular: "Aujourd'hui"
                },
                "ja-JP": {
                  singular: "今日"
                },
                "ko-KR": {
                  singular: "오늘"
                },
                "pt-BR": {
                  singular: "Hoje"
                },
                "zh-CN": {
                  singular: "今天"
                }
              }
            });
          },
          untranslatedText: "Today",
          value: "today"
        },
        yesterday: {
          get label() {
            return (0, _v48.translate)({
              singular: "Yesterday",
              dictionary: {
                es: {
                  singular: "Ayer"
                },
                "de-DE": {
                  singular: "Gestern"
                },
                "fr-FR": {
                  singular: "Hier"
                },
                "ja-JP": {
                  singular: "昨日"
                },
                "ko-KR": {
                  singular: "어제"
                },
                "pt-BR": {
                  singular: "Ontem"
                },
                "zh-CN": {
                  singular: "昨天"
                }
              }
            });
          },
          untranslatedText: "Yesterday",
          value: "yesterday"
        },
        lastWeek: {
          get label() {
            return (0, _v48.translate)({
              singular: "Last 7 days",
              dictionary: {
                es: {
                  singular: "En los últimos 7 días"
                },
                "de-DE": {
                  singular: "Letzte 7 Tage"
                },
                "fr-FR": {
                  singular: "7 derniers jours"
                },
                "ja-JP": {
                  singular: "過去 7 日間"
                },
                "ko-KR": {
                  singular: "최근 7일"
                },
                "pt-BR": {
                  singular: "Últimos 7 dias"
                },
                "zh-CN": {
                  singular: "过去 7 天"
                }
              }
            });
          },
          untranslatedText: "Last 7 days",
          value: {
            division: "past",
            group: "days",
            count: 7
          }
        },
        lastMonth: {
          get label() {
            return (0, _v48.translate)({
              singular: "Last 30 days",
              dictionary: {
                es: {
                  singular: "En los últimos 30 días"
                },
                "de-DE": {
                  singular: "Letze 30 Tage"
                },
                "fr-FR": {
                  singular: " 30 derniers jours"
                },
                "ja-JP": {
                  singular: "過去 30 日間"
                },
                "ko-KR": {
                  singular: "최근 30일"
                },
                "pt-BR": {
                  singular: "Últimos 30 dias"
                },
                "zh-CN": {
                  singular: "过去 30 天"
                }
              }
            });
          },
          untranslatedText: "Last 30 days",
          value: {
            division: "past",
            group: "days",
            count: 30
          }
        },
        lastYear: {
          get label() {
            return (0, _v48.translate)({
              singular: "Last 365 days",
              dictionary: {
                es: {
                  singular: "En los últimos 365 días"
                },
                "de-DE": {
                  singular: "Letzte 365 Tage"
                },
                "fr-FR": {
                  singular: "365 derniers jours"
                },
                "ja-JP": {
                  singular: "過去 365 日間"
                },
                "ko-KR": {
                  singular: "최근 365일"
                },
                "pt-BR": {
                  singular: "Últimos 365 dias"
                },
                "zh-CN": {
                  singular: "过去 365 天"
                }
              }
            });
          },
          untranslatedText: "Last 365 days",
          value: {
            division: "past",
            group: "days",
            count: 365
          }
        }
      }
    },
    _v77 = {
      relevance: {
        value: "relevance",
        get text() {
          return (0, _v48.translate)({
            singular: "Relevance",
            dictionary: {
              es: {
                singular: "Relevancia"
              },
              "de-DE": {
                singular: "Relevanz"
              },
              "fr-FR": {
                singular: "Pertinence"
              },
              "ja-JP": {
                singular: "関連性"
              },
              "ko-KR": {
                singular: "관련도"
              },
              "pt-BR": {
                singular: "Relevância"
              },
              "zh-CN": {
                singular: "相关性"
              }
            }
          });
        },
        untranslatedText: "Relevance"
      },
      uploaded: {
        value: "latest_desc",
        get text() {
          return (0, _v48.translate)({
            singular: "Recently uploaded",
            dictionary: {
              es: {
                singular: "Subidos recientemente"
              },
              "de-DE": {
                singular: "Kürzlich hochgeladen"
              },
              "fr-FR": {
                singular: "Mises en ligne récemment"
              },
              "ja-JP": {
                singular: "最近アップロードした動画"
              },
              "ko-KR": {
                singular: "최신 업로드"
              },
              "pt-BR": {
                singular: "Carregado recentemente"
              },
              "zh-CN": {
                singular: "最近上传"
              }
            }
          });
        },
        untranslatedText: "Recently uploaded"
      },
      updated: {
        value: "update_date_desc",
        get text() {
          return (0, _v48.translate)({
            singular: "Recently updated",
            dictionary: {
              es: {
                singular: "Se actualizó hace poco"
              },
              "de-DE": {
                singular: "Kürzlich aktualisiert"
              },
              "fr-FR": {
                singular: "Mis à jour récemment"
              },
              "ja-JP": {
                singular: "更新日時"
              },
              "ko-KR": {
                singular: "최근 업데이트"
              },
              "pt-BR": {
                singular: "Atualizados recentemente"
              },
              "zh-CN": {
                singular: "最近更新"
              }
            }
          });
        },
        untranslatedText: "Recently updated"
      },
      popularity: {
        value: "popularity_desc",
        get text() {
          return (0, _v48.translate)({
            singular: "Most popular",
            dictionary: {
              es: {
                singular: "Más popular"
              },
              "de-DE": {
                singular: "Besonders beliebt"
              },
              "fr-FR": {
                singular: "Plus populaire"
              },
              "ja-JP": {
                singular: "最も人気なプラン"
              },
              "ko-KR": {
                singular: "인기"
              },
              "pt-BR": {
                singular: "Mais Popular"
              },
              "zh-CN": {
                singular: "最热门"
              }
            }
          });
        },
        untranslatedText: "Most popular"
      },
      titleAsc: {
        value: "alphabetical_asc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "Title, A to Z"
      },
      titleDesc: {
        value: "alphabetical_desc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "Title, Z to A"
      },
      nameAsc: {
        value: "alphabetical_asc",
        get text() {
          return (0, _v48.translate)({
            singular: "Name, A to Z",
            dictionary: {
              es: {
                singular: "Nombre, de la A a la Z"
              },
              "de-DE": {
                singular: "Name von A bis Z"
              },
              "fr-FR": {
                singular: "Nom A-Z"
              },
              "ja-JP": {
                singular: "名前、AからZ"
              },
              "ko-KR": {
                singular: "이름(오름차순, A~Z)"
              },
              "pt-BR": {
                singular: "Nome, de A a Z"
              },
              "zh-CN": {
                singular: "名称，A 到 Z"
              }
            }
          });
        },
        untranslatedText: "Name, A to Z"
      },
      nameDesc: {
        value: "alphabetical_desc",
        get text() {
          return (0, _v48.translate)({
            singular: "Name, Z to A",
            dictionary: {
              es: {
                singular: "Nombre, de la Z a la A"
              },
              "de-DE": {
                singular: "Name von Z bis A"
              },
              "fr-FR": {
                singular: "Nom, Z-A"
              },
              "ja-JP": {
                singular: "名前、ZからA"
              },
              "ko-KR": {
                singular: "이름(내림차순, Z~A)"
              },
              "pt-BR": {
                singular: "Nome, Z a A"
              },
              "zh-CN": {
                singular: "名称，Z 到 A"
              }
            }
          });
        },
        untranslatedText: "Name, Z to A"
      },
      longest: {
        value: "duration_desc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "Longest"
      },
      shortest: {
        value: "duration_asc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "Shortest"
      },
      lastModified: {
        value: "last_user_action_event_date_desc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "Last modified"
      },
      firstModified: {
        value: "last_user_action_event_date_asc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "First modified"
      },
      lastAdded: {
        value: "date_desc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "Last added"
      },
      firstAdded: {
        value: "date_asc",
        get text() {
          return (0, _v48.translate)({
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
          });
        },
        untranslatedText: "First added"
      }
    },
    {
      relevance: _v78,
      uploaded: _v79,
      updated: _v80,
      popularity: _v81,
      titleAsc: _v82,
      titleDesc: _v83,
      nameAsc: _v84,
      nameDesc: _v85,
      longest: _v86,
      shortest: _v87,
      lastModified: _v88,
      firstModified: _v89,
      lastAdded: _v90,
      firstAdded: _v91
    } = _v77,
    _v92 = {
      clip: {
        relevance: _v78,
        uploaded: _v79,
        popularity: _v81,
        titleAsc: _v82,
        titleDesc: _v83,
        longest: _v86,
        shortest: _v87
      },
      ondemand: {
        relevance: _v78,
        uploaded: _v79,
        popularity: _v81,
        titleAsc: _v82,
        titleDesc: _v83
      },
      people: {
        relevance: _v78,
        popularity: _v81,
        nameAsc: _v84,
        nameDesc: _v85
      },
      channel: {
        relevance: _v78,
        updated: _v80,
        popularity: _v81,
        nameAsc: _v84,
        nameDesc: _v85
      },
      group: {
        relevance: _v78,
        updated: _v80,
        popularity: _v81,
        nameAsc: _v84,
        nameDesc: _v85
      }
    },
    _v93 = {
      relevance: _v78,
      titleAsc: _v82,
      titleDesc: _v83,
      lastModified: _v88,
      firstModified: _v89,
      lastAdded: _v90,
      firstAdded: _v91,
      longest: _v86,
      shortest: _v87
    },
    _v94 = {
      relevance: _v78,
      uploaded: _v79,
      updated: _v80,
      popularity: _v81,
      titleAsc: _v82,
      titleDesc: _v83,
      nameAsc: _v84,
      nameDesc: _v85,
      longest: _v86,
      shortest: _v87
    },
    _v95 = ["clip.name", "clip.pictures", "clip.user.name", "clip.user.pictures.sizes", "clip.metadata.connections", "clip.metadata.interactions.watchlater.added", "clip.uri", "clip.stats.plays", "clip.duration", "clip.createdTime", "clip.link", "clip.badge.type", "facet.type"],
    _v96 = ["ondemand.link", "ondemand.name", "ondemand.pictures.sizes", "ondemand.metadata.interactions.buy", "ondemand.metadata.interactions.rent", "ondemand.uri"],
    _v97 = ["people.name", "people.locationDetails.formattedAddress", "people.metadata.publicVideos.total", "people.pictures.sizes", "people.link", "people.metadata.connections.followers.total", "people.skills.name", "people.skills.uri", "people.backgroundVideo", "people.uri"],
    _v98 = ["channel.name", "channel.metadata.connections.users.total", "channel.metadata.connections.videos.total", "channel.pictures.sizes", "channel.link", "channel.uri"],
    _v99 = ["group.name", "group.metadata.connections.users.total", "group.metadata.connections.videos.total", "group.pictures.sizes", "group.link", "group.uri"],
    _v100 = ["folder.name", "folder.uri", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.createdTime", "folder.modifiedTime", "folder.settings", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.metadata.connections.ancestorPath", "folder.metadata.connections.parentFolder", "folder.metadata.connections.videos", "folder.metadata.interactions.invite", "folder.metadata.interactions.delete", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.edit", "video.name", "video.uri", "video.user.uri", "video.user.name", "video.user.pictures", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "video.user.metadata.connections.projects.options", "video.createdTime", "video.customMetadata", "video.lastUserActionEventDate", "video.modifiedTime", "video.link", "video.privacy", "video.privacy.originalView", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.filesSize", "video.password", "video.type", "video.download", "video.pictures", "video.description", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.parentProject.isPrivateToUser", "video.parentProject.metadata.connections.ancestorPath", "video.parentProject.metadata.interactions.edit", "video.parentProject.metadata.interactions.moveVideo", "video.parentProject.name", "video.parentProject.uri", "video.manageLink", "video.canMoveToProject", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.metadata.interactions.invite.uri", "video.duration", "video.allowedPrivacies", "video.reviewPage", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.embed", "video.playerEmbedUrl", "showcase.createdTime", "showcase.name", "showcase.link", "showcase.privacy", "showcase.uri", "showcase.embed", "showcase.pictures", "showcase.metadata.connections.videos.total", "showcase.hasChosenThumbnail", "showcase.privacy", "showcase.modifiedTime", "showcase.metadata.interactions.delete", "liveEvent.createdTime", "liveEvent.hasRegistration", "liveEvent.metadata.connections.liveVideo.status", "liveEvent.metadata.interactions.delete", "liveEvent.metadata.interactions.edit", "liveEvent.nextOccurrenceTime", "liveEvent.link", "liveEvent.pictures.uri", "liveEvent.pictures.sizes", "liveEvent.title", "liveEvent.uri", "liveEvent.user.uri", "liveEvent.status", "liveEvent.streamPrivacy", "liveEvent.viewLink", "liveEvent.settingsLink", "liveEvent.parentFolder.uri", "liveEvent.parentFolder.name", "liveEvent.parentFolder.isPrivateToUser", "liveEvent.embed.html", "liveEvent.eventType", "meta", "type"],
    _v101 = ["contents", "contentsHighlight", "id", "startTime", "endTime", "thumbnail", "type", "url", "metadata", "attributes"],
    _v102 = ["folder.name", "folder.uri", "folder.metadata.connections.ancestorPath"],
    _v103 = _v0 => _v0 ? parseInt(_v0.split("/").slice(-1)[0]) : 0,
    _v104 = (_v0, _v1) => "string" == typeof _v0 && Object.values(_v1).map(_v0 => _v0.value).includes(_v0),
    _v105 = (_v0, _v1) => {
      if ("string" != typeof _v0) return !1;
      let _v2 = _v0.split(","),
        _v3 = Object.values(_v1).map(_v0 => _v0.value);
      return _v2.every(_v0 => _v3.includes(_v0));
    },
    _v106 = _v0 => !!_v0 && /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(_v0),
    _v107 = (_v0, _v1) => {
      _v0.push({
        query: _v1
      }, void 0, {
        shallow: !0
      });
    },
    _v108 = ({
      type: _v0,
      query: _v1,
      page: _v2,
      uploaded: _v3,
      live: _v4,
      hdr: _v5,
      vimeo360: _v6,
      price: _v7,
      license: _v8,
      resolution: _v9,
      duration: _v10,
      collection: _v11,
      category: _v12,
      follow: _v13,
      updated: _v14,
      sort: _v15
    }) => {
      let _v16 = {};
      return _v0 && (_v16.type = _v0), _v1 && (_v16.q = _v1), _v2 > 1 && (_v16.page = _v2), _v3 && (_v16.uploaded = _v56.options[_v3].value), _v4 && (_v16.live = _v59.options[_v4].value), _v5 && (_v16.hdr = _v60.options[_v5].value), _v6 && (_v16.vimeo360 = _v61.options[_v6].value), _v7 && (_v16.price = _v62.options[_v7].value), _v8 && (_v16.license = _v63.options[_v8].value), _v9 && (_v16.resolution = _v64.options[_v9].value), _v10 && (_v16.duration = _v65.options[_v10].value), _v11 && (_v16.collection = _v66.options[_v11].value), _v12 && (_v16.category = _v12), _v13 && (_v16.follow = _v13), _v14 && (_v16.updated = _v56.options[_v14].value), _v15 && (_v16.sort = _v15), {
        url: _v16
      };
    },
    _v109 = ({
      query: _v0,
      page: _v1,
      type: _v2,
      queryFields: _v3,
      privacy: _v4,
      sort: _v5,
      uploader: _v6,
      folderIncluded: _v7,
      folderExcluded: _v8,
      date: _v9,
      customMetadata: _v10,
      delegated: _v11
    }) => {
      let _v12 = {
        slug: [_v35]
      };
      return _v0 && (_v12.q = _v0), _v11 && (_v12[_v55] = "1"), _v1 > 1 && (_v12.page = _v1), _v2 && (_v12.type = _v70.options[_v2].value), _v3 && (_v12.query_fields = _v3), _v4 && (_v12.filter_privacy = _v4), _v5 && (_v12.sort = _v5), _v6 && (_v12.filter_uploader = _v6), _v7 && (_v12.filter_folder_include = _v7), _v8 && (_v12.filter_folder_exclude = _v8), _v9 && (_v12.filter_date = _v9), _v10 && (_v12.filter_custom_metadata = _v10), {
        url: _v12
      };
    },
    _v110 = (_v0, _v1 = "en-US") => new Date(_v0).toLocaleDateString(_v1, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }),
    _v111 = (_v0, _v1 = "en-US") => {
      let _v2 = new Date(_v0);
      if (Number.isNaN(_v2.getTime())) return "";
      let _v3 = _v2.toLocaleDateString(_v1, {
          month: "short",
          day: "numeric",
          year: "numeric"
        }),
        _v4 = _v2.toLocaleTimeString(_v1, {
          hour: "numeric",
          minute: "2-digit"
        }).replace(/\s(?=[AP]M$)/i, "");
      return _v50.publishedAt(_v3, _v4);
    },
    _v112 = _v0 => Array.isArray(_v0) ? _v0[0] ?? "" : _v0 ?? "",
    _v113 = _v0 => {
      let _v1 = Object.assign({}, _v0);
      return delete _v1.page, delete _v1.query, delete _v1.type, delete _v1.sort, delete _v1.delegated, _v1;
    },
    _v114 = _v0 => "video" === _v0.type && _v0?.video?.parentProject ? {
      name: _v0.video.parentProject?.name,
      href: _v115(_v0.video.parentProject?.uri)
    } : "live_event" === _v0.type && _v0?.liveEvent?.parentFolder ? {
      name: _v0.liveEvent.parentFolder?.name,
      href: _v115(_v0.liveEvent.parentFolder?.uri)
    } : "folder" === _v0.type && _v0?.folder?.metadata?.connections?.ancestorPath?.[0] ? {
      name: _v0?.folder?.metadata?.connections?.ancestorPath?.[0]?.name,
      href: _v115(_v0?.folder?.metadata?.connections?.ancestorPath?.[0]?.uri)
    } : {
      name: "-"
    },
    _v115 = _v0 => _v0.replace("users", "user").replace("projects", "folder"),
    _v116 = _v0 => {
      if (!_v0) return [];
      let _v1 = _v0.lastIndexOf("_");
      return -1 === _v1 ? [_v0] : [_v0.substring(0, _v1), _v0.substring(_v1 + 1)];
    },
    _v117 = (_v0, _v1, _v2, _v3, _v4) => {
      if (_v3) {
        let _v0 = `${_v0}?tq=${_v2}#t=${Math.floor(_v1 / 0)}`;
        return _v4 && (_v0 += `&end=${Math.floor(_v4 / 0)}`), _v0;
      }
      return `${_v0}/transcript?ts=${_v1}`;
    },
    _v118 = (_v0, _v1) => {
      for (let _v0 of Object.values(_v0)) if (_v0.value === _v1) return _v0.untranslatedText ?? _v0.text;
      return null;
    },
    _v119 = (_v0, _v1) => _v0.hasOwnProperty(_v1) ? _v0[_v1]?.split(",") : [],
    _v120 = _v0 => _v0 ? "title,captions,description,tags,chapters" : "title,description,tags,chapters",
    _v121 = _v0 => {
      if (!(_v0 instanceof Array)) return {};
      let _v1 = {};
      for (let {
        type: _v0,
        count: _v1
      } of _v0) _v1[_v0] = _v1;
      return _v1;
    },
    _v122 = _v0 => {
      let _v1 = _v0 ? new Date(`${_v0}T00:00:00`) : new Date();
      return new _v44.BokehDate.CalendarDate(_v1.getFullYear(), _v1.getMonth() + 1, _v1.getDate());
    },
    _v123 = _v0 => (_v0 ?? []).map(_v0 => _v0.replace(/[+|"*()~\\-]/g, " ").replace(/\s+/g, " ").trim()).filter(Boolean).slice(0, 5),
    _v124 = "library",
    _v125 = "public",
    _v126 = {
      [_v124]: "library_search",
      [_v125]: "public_search"
    },
    _v127 = (0, _v3.createContext)({}),
    _v128 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        {
          hasPublicSearchDisabled: _v2,
          isLoading: _v3,
          ready: _v4
        } = _v27(),
        [_v5] = (0, _v3.useState)(() => new URLSearchParams(window.location.search).get("agentic_user_id"));
      (0, _v3.useEffect)(() => {
        if (_v5) try {
          window.sessionStorage.setItem("agentic_user_id", _v5);
        } catch {}
      }, [_v5]);
      let _v6 = "library" === (0, _v22.slugSearchScope)(_v1.query.slug) ? _v124 : _v125,
        [_v7, _v8] = (0, _v3.useState)(!0),
        [_v9] = (0, _v3.useState)(() => (0, _v21.v4)());
      return (0, _v3.useEffect)(() => {
        _v4 && !_v3 && _v2 && _v1.query.slug?.[0] !== _v35 && _v107(_v1, {
          q: _v1.query.q,
          slug: [_v35]
        });
      }, [_v4, _v3, _v2, _v1]), (0, _v1.jsx)(_v127.Provider, {
        value: {
          searchType: _v6,
          toggleSearchType: _v0 => {
            let _v1 = _v0?.detail.query?.trim(),
              _v2 = _v0?.detail.filter,
              _v3 = {},
              _v4 = null;
            if (_v6 === _v125 ? (_v4 = _v37, _v3.slug = [_v35], _v2 && (_v3[_v2.name] = _v2.value)) : _v4 = _v38, (_v1 ?? _v1.query.q) && (_v3.q = _v1 ?? _v1.query.q), _v107(_v1, _v3), !_v1) {
              let _v0 = new CustomEvent("SearchTypeChange", {
                detail: {
                  searchType: _v4
                }
              });
              document.dispatchEvent(_v0);
            }
          },
          feature: _v126[_v6],
          showAiAnimation: _v7,
          setShowAiAnimation: _v8,
          searchId: _v9
        },
        children: _v0
      });
    };
  var _v129 = _v0.i(0),
    _v130 = _v0.i(0);
  let _v131 = "agentic_result_cache",
    _v132 = () => {
      try {
        return window.sessionStorage.getItem("agentic_user_id") || void 0;
      } catch {
        return;
      }
    },
    _v133 = _v0 => JSON.stringify(_v0, (_v0, _v1) => !_v1 || "object" != typeof _v1 || Array.isArray(_v1) ? _v1 : Object.keys(_v1).sort().reduce((_v0, _v1) => (_v0[_v1] = _v1[_v1], _v0), {})),
    _v134 = _v0 => _v0 && Object.keys(_v0).length ? _v133(_v0) : "",
    _v135 = (_v0, _v1, _v2) => `${_v2 ?? ""}|${_v0}|${_v133(_v1 ?? {})}`,
    _v136 = () => {
      let _v0,
        _v1,
        _v2 = (0, _v2.useRouter)(),
        _v3 = (_v0 => {
          let _v1 = {
            ..._v53
          };
          if ("string" == typeof _v0.q && (_v1.query = _v0.q), "1" === _v0[_v55] && _v1.query && (_v1.delegated = !0), Number(_v0.page) && (_v1.page = Number(_v0.page)), _v104(_v0.filter_type, _v70.options) && (_v1.type = _v0.filter_type), _v104(_v0.type, _v70.options) && (_v1.type = _v0.type), _v105(_v0.query_fields, _v71.options) && (_v1.queryFields = _v0.query_fields), _v105(_v0.filter_privacy, _v73().options) && (_v1.privacy = _v0.filter_privacy), _v104(_v0.sort, _v93) && (_v1.sort = _v0.sort), "string" == typeof _v0.filter_uploader && (_v1.uploader = _v0.filter_uploader), "string" == typeof _v0.filter_folder_include && (_v1.folderIncluded = _v0.filter_folder_include), _v1.folderIncluded && "string" == typeof _v0.filter_folder_exclude && (_v1.folderExcluded = _v0.filter_folder_exclude), _v0.filter_date) {
            let [_v0, _v1] = _v0.filter_date.split(",");
            _v106(_v0) && _v106(_v1) && (_v1.date = _v0.filter_date);
          }
          return "string" == typeof _v0.filter_custom_metadata && _v0.filter_custom_metadata && (_v0 => {
            try {
              let _v0 = JSON.parse(_v0);
              if (Array.isArray(_v0)) return _v0.length > 0;
              if (_v0 && "object" == typeof _v0) {
                let _v0 = _v0.clauses;
                return Array.isArray(_v0) && _v0.length > 0;
              }
              return !1;
            } catch {
              return !1;
            }
          })(_v0.filter_custom_metadata) && (_v1.customMetadata = _v0.filter_custom_metadata), _v1;
        })(_v2.query),
        {
          isDrawerOpen: _v4
        } = (0, _v3.useContext)(_v19),
        _v5 = (0, _v3.useRef)(null),
        _v6 = _v5?.current?.href === _v2.asPath;
      return _v4 || (_v5.current = {
        ..._v109(_v3),
        href: _v2.asPath
      }), {
        ..._v3,
        filters: _v3,
        onLibraryFilterChange: (_v0, _v1) => {
          if (_v0 === _v70.name) {
            let _v0 = {
              slug: [_v35],
              q: _v3.query
            };
            _v3.delegated && (_v0[_v55] = "1"), _v1 !== _v70.options.default.value && (_v0.type = _v1), _v107(_v2, _v0);
            return;
          }
          let {
            url: _v2
          } = _v109({
            ..._v3,
            page: 1
          });
          "default" === _v1 || _v0 === _v36 && _v1 === _v93.relevance.value ? delete _v2[_v0] : _v2[_v0] = _v1, _v107(_v2, _v2);
        },
        onCheckboxChange: _v0 => {
          let {
            url: _v1
          } = _v109({
            ..._v3,
            page: 1
          });
          return (Array.isArray(_v0) ? _v0 : [_v0]).forEach(({
            name: _v0,
            value: _v1,
            isChecked: _v2
          }) => {
            let _v3 = _v119(_v1, _v0);
            _v1.hasOwnProperty(_v0) && _v1[_v0]?.split(",");
            let _v4 = 1 === _v3.length;
            _v2 ? _v4 ? (delete _v1[_v0], _v0 === _v75.folderIncludedName && delete _v1[_v75.folderExcludedName]) : _v1[_v0] = _v3.filter(_v0 => _v0 !== _v1).join(",") : (_v3.push(_v1), _v1[_v0] = _v3.join(","));
          }), _v107(_v2, _v1), _v1;
        },
        onClearFilter: _v0 => {
          let {
            url: _v1
          } = _v109({
            ..._v3,
            page: 1
          });
          (Array.isArray(_v0) ? _v0 : [_v0]).forEach(_v0 => {
            delete _v1[_v0];
          }), _v107(_v2, _v1);
        },
        updatePage: _v0 => {
          let {
            url: _v1
          } = _v109({
            ..._v3,
            page: _v0
          });
          _v107(_v2, _v1);
        },
        clearLibraryFilters: () => {
          let {
            url: _v0
          } = _v109({
            ..._v53,
            query: _v3.query,
            sort: _v3.sort,
            delegated: _v3.delegated
          });
          _v107(_v2, _v0);
        },
        onOmnisearchChange: _v0 => {
          let {
              query: _v1,
              filter: _v2
            } = _v0.detail,
            {
              url: _v3
            } = _v109({
              ..._v3,
              page: 1
            }),
            _v4 = {
              ..._v3,
              slug: [_v35]
            };
          _v1?.trim() ? _v4.q = _v1 : _v4.sort = _v93.lastModified.value, Reflect.deleteProperty(_v4, _v55), _v2 && (_v4[_v2.name] = _v2.value), _v107(_v2, _v4);
        },
        appliedFiltersCount: (_v0 = _v113(_v3), _v1 = 0, Object.keys(_v0).map(_v0 => {
          let _v1 = _v0[_v0];
          _v1 && ("folderIncluded" !== _v0 && "privacy" !== _v0 && "uploader" !== _v0 && "queryFields" !== _v0 ? _v1 += 1 : _v1 += _v1.split(",").length);
        }), _v1),
        keepPreviousLibraryUrl: () => {
          _v5.current && _v107(_v2, _v5.current.url);
        },
        isLibraryApplyButtonDisabled: _v6
      };
    },
    _v137 = {
      nobody: "private",
      anybody: "public",
      unlisted: "unlisted",
      password: "password",
      disable: "hide-from-vimeo"
    },
    _v138 = _v0 => {
      let _v1 = _v73().options,
        _v2 = Object.keys(_v1).find(_v0 => _v1[_v0]?.value?.toLowerCase() === _v0.toLowerCase());
      return _v2 ? _v137[_v2] ?? null : null;
    },
    _v139 = _v0 => (_v0 ?? "").split(",").map(_v0 => _v0.trim()).filter(Boolean),
    _v140 = ["filter_privacy", "filter_uploader", "filter_folder_include", "filter_folder_exclude", "filter_date", "query_fields", "filter_custom_metadata", "sort", "filter_type"],
    _v141 = Object.fromEntries(Object.entries(_v137).map(([_v0, _v1]) => [_v1, _v0])),
    _v142 = _v0 => JSON.stringify(Object.entries(_v0).filter(([_v0]) => "page" !== _v0).sort(([_v0], [_v1]) => _v0.localeCompare(_v1))),
    _v143 = () => void 0,
    _v144 = (0, _v3.createContext)({
      data: null,
      error: null,
      isLoading: !1,
      isAwaitingQuery: !1,
      searchRequestId: null,
      delegation: null,
      delegationPending: !1,
      regenerate: _v143
    }),
    _v145 = (0, _v3.createContext)({
      query: null,
      terms: [],
      primaryIsEmpty: !1,
      searchStateKey: null,
      reportPrimaryTotal: _v143
    }),
    _v146 = ({
      enabled: _v0,
      children: _v1
    }) => {
      let _v2,
        {
          query: _v3,
          filters: _v4
        } = _v136(),
        _v5 = (0, _v3.useContext)(_v26.ViewerContext),
        _v6 = (0, _v129.useOrionSettingsFields)(["show_custom_metadata"]),
        {
          hasAutoClosedCaptions: _v7
        } = _v27(),
        _v8 = (0, _v2.useRouter)(),
        _v9 = String(_v5?.teamUser?.ownerId || _v5?.user?.id || "") || null,
        _v10 = _v3 || "",
        _v11 = JSON.stringify((_v0 => {
          let _v1 = {};
          _v0.sort && (_v1.sort = _v0.sort);
          let _v2 = _v139(_v0.privacy).map(_v138).filter(_v0 => !!_v0);
          _v2.length && (_v1.privacy = _v2);
          let _v3 = _v139(_v0.uploader);
          _v3.length && (_v1.uploader_ids = _v3);
          let _v4 = _v139(_v0.folderIncluded);
          _v4.length && (_v1.folder_include_ids = _v4);
          let _v5 = _v139(_v0.folderExcluded);
          if (_v5.length && (_v1.folder_exclude_ids = _v5), _v0.date) {
            let [_v0, _v1] = _v0.date.split(",");
            _v0 && (_v1.modified_after = _v0), _v1 && (_v1.modified_before = _v1);
          }
          let _v6 = _v139(_v0.queryFields);
          _v6.length && (_v1.appears_in = _v6);
          let _v7 = (_v0 => {
            let _v1;
            if (!_v0) return;
            try {
              _v1 = JSON.parse(_v0);
            } catch {
              return;
            }
            let _v2 = Array.isArray(_v1) ? {
                clauses: _v1
              } : _v1,
              _v3 = (Array.isArray(_v2?.clauses) ? _v2.clauses : []).flatMap(_v0 => {
                if ("object" != typeof _v0 || null === _v0) return [];
                let {
                  field_id: _v1,
                  operator: _v2,
                  value: _v3
                } = _v0;
                return null == _v1 || "string" != typeof _v2 ? [] : [{
                  field_id: String(_v1),
                  operator: _v2,
                  ...(null == _v3 ? {} : {
                    value: String(_v3)
                  })
                }];
              });
            if (_v3.length) return "string" == typeof _v2?.logic ? {
              logic: _v2.logic,
              clauses: _v3
            } : {
              clauses: _v3
            };
          })(_v0.customMetadata);
          return _v7 && (_v1.custom_metadata = _v7), Object.keys(_v1).length ? _v1 : void 0;
        })(_v4) ?? {}),
        _v12 = _v10 ? _v135(_v10, "{}" === _v11 ? void 0 : JSON.parse(_v11), _v9) : null,
        _v13 = _v142(_v8.query),
        _v14 = "1" === _v112(_v8.query[_v55]),
        _v15 = (0, _v3.useRef)({
          key: _v12,
          enabled: _v0
        });
      (0, _v3.useLayoutEffect)(() => {
        _v15.current = {
          key: _v12,
          enabled: _v0
        };
      }, [_v12, _v0]);
      let [_v16, _v17] = (0, _v3.useState)(null),
        _v18 = (0, _v3.useRef)(null),
        {
          data: _v19,
          dataKey: _v20,
          error: _v21,
          isLoading: _v22,
          pendingQuery: _v23,
          search: _v24,
          searchRequestId: _v25,
          restoreFromCache: _v26,
          cancel: _v27
        } = (_v0 => {
          let [_v1, _v2] = (0, _v3.useState)(null),
            [_v3, _v4] = (0, _v3.useState)(null),
            [_v5, _v6] = (0, _v3.useState)(null),
            [_v7, _v8] = (0, _v3.useState)(!1),
            [_v9, _v10] = (0, _v3.useState)(null),
            [_v11, _v12] = (0, _v3.useState)(null),
            _v13 = (0, _v3.useRef)(null),
            {
              baseUrl: _v14,
              jwt: _v15
            } = (0, _v130.useGctlConfig)(),
            _v16 = (0, _v3.useContext)(_v26.ViewerContext),
            _v17 = String(_v16?.teamUser?.ownerId || _v16?.user?.id || "") || null,
            {
              searchId: _v18
            } = (0, _v3.useContext)(_v127),
            {
              trackAgenticSearchSubmitted: _v19,
              trackAgenticSearchResponse: _v20
            } = (0, _v12.useSearchTracking)(),
            _v21 = (0, _v3.useCallback)(async _v0 => {
              if (!_v0.query) {
                _v2(null), _v4(null), _v10(null);
                return;
              }
              _v13.current?.abort();
              let _v1 = new AbortController();
              _v13.current = _v1;
              let _v2 = (0, _v21.v4)(),
                _v3 = _v0.maxResults ?? 5,
                _v4 = Date.now();
              _v10(_v0.holdResults ? _v0.query : null), _v12(_v2), _v19({
                searchId: _v18,
                searchRequestId: _v2,
                maxResults: _v3
              }), _v8(!0), _v6(null);
              try {
                let _v0 = {
                    query: _v0.query,
                    supports_delegation: !0
                  },
                  _v1 = _v0.impersonateUserId ?? _v132();
                _v1 && (_v0.user_id = _v1), _v0.capability && (_v0.capability = _v0.capability), _v0.filters && Object.keys(_v0.filters).length > 0 && (_v0.filters = _v0.filters);
                let _v2 = await fetch(`${_v14}/search/agentic`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v15 ? `jwt ${_v15}` : ""
                  },
                  body: JSON.stringify(_v0),
                  signal: _v1.signal
                });
                if (!_v2.ok) throw Error(`Search failed: ${_v2.status}`);
                let _v3 = await _v2.json();
                if (!_v1.signal.aborted) {
                  let _v0 = _v135(_v0.query, _v0.filters, _v17);
                  _v2(_v3), _v4(_v0), _v0?.(_v3, _v2, _v0), ((_v0, _v1, _v2, _v3, _v4, _v5) => {
                    try {
                      window.sessionStorage.setItem(_v131, JSON.stringify({
                        version: 5,
                        query: _v0,
                        filtersKey: _v1,
                        ownerId: _v2,
                        impersonateUserId: _v3,
                        searchRequestId: _v4,
                        result: _v5
                      }));
                    } catch {}
                  })(_v0.query, _v134(_v0.filters), _v17, _v1 ?? null, _v2, _v3);
                  let _v1 = "help" === _v3.capability,
                    _v2 = "delegate" in _v3 && !!_v3.delegate,
                    _v3 = "clips" in _v3 ? _v3.clips?.length ?? 0 : 0,
                    _v4 = "other_clips" in _v3 ? _v3.other_clips?.length ?? 0 : 0;
                  _v20({
                    searchId: _v18,
                    searchRequestId: _v2,
                    status: _v2 ? "delegated" : _v1 || _v3 + _v4 > 0 ? "success" : "empty",
                    resultsQty: _v3,
                    otherResultsQty: _v4,
                    strategiesUsed: _v2 ? [] : _v1 ? ["help"] : "strategies_used" in _v3 ? _v3.strategies_used ?? null : null,
                    partial: _v3.partial ?? null,
                    citedQty: "cited_titles" in _v3 ? Object.keys(_v3.cited_titles ?? {}).length : null,
                    latencyMs: Date.now() - _v4,
                    errorMessage: null
                  });
                }
              } catch (_v0) {
                if (_v0 instanceof DOMException && "AbortError" === _v0.name) return;
                if (!_v1.signal.aborted) {
                  _v2(null), _v4(null);
                  let _v0 = _v0 instanceof Error ? _v0 : Error("Unknown error");
                  _v6(_v0), _v20({
                    searchId: _v18,
                    searchRequestId: _v2,
                    status: "error",
                    resultsQty: null,
                    otherResultsQty: null,
                    strategiesUsed: null,
                    partial: null,
                    citedQty: null,
                    latencyMs: Date.now() - _v4,
                    errorMessage: _v0.message
                  });
                }
              } finally {
                _v13.current === _v1 && (_v8(!1), _v10(null));
              }
            }, [_v14, _v15, _v17, _v18, _v19, _v20, _v0]),
            _v22 = (0, _v3.useCallback)(() => {
              _v13.current?.abort(), _v13.current = null, _v8(!1), _v10(null);
            }, []),
            _v23 = (0, _v3.useCallback)((_v0, _v1) => {
              try {
                var _v2;
                let _v0 = window.sessionStorage.getItem(_v131);
                if (!_v0) return !1;
                let _v1 = JSON.parse(_v0);
                if (5 !== _v1.version || _v1.query !== _v0 || _v1.filtersKey !== _v134(_v1) || _v1.ownerId !== _v17 || _v1.impersonateUserId !== (_v132() ?? null) || !((_v2 = _v1.result) && "object" == typeof _v2 && ("help" === _v2.capability ? "string" == typeof _v2.answer : "string" == typeof _v2.summary && Array.isArray(_v2.clips))) || "delegate" in _v1.result && _v1.result.delegate) return !1;
                return _v2(_v1.result), _v4(_v135(_v0, _v1, _v17)), _v12(_v1.searchRequestId), _v6(null), _v8(!1), _v0?.(_v1.result, _v1.searchRequestId, _v135(_v0, _v1, _v17)), !0;
              } catch {
                return !1;
              }
            }, [_v17, _v0]);
          return (0, _v3.useEffect)(() => () => _v13.current?.abort(), []), {
            data: _v1,
            dataKey: _v3,
            error: _v5,
            isLoading: _v7,
            pendingQuery: _v9,
            search: _v21,
            searchRequestId: _v11,
            restoreFromCache: _v23,
            cancel: _v22
          };
        })((0, _v3.useCallback)((_v0, _v1, _v2) => {
          if (!_v15.current.enabled || _v15.current.key !== _v2) return;
          if (!("delegate" in _v0) || !_v0.delegate) {
            if (_v18.current = null, _v17(null), "1" === _v112(_v8.query[_v55])) {
              let _v0 = {
                ..._v8.query
              };
              Reflect.deleteProperty(_v0, _v55), _v8.replace({
                query: _v0
              }, void 0, {
                shallow: !0
              });
            }
            return;
          }
          if (_v18.current === _v1) return;
          _v18.current = _v1;
          let _v3 = _v0.delegate,
            _v4 = Object.fromEntries(Object.entries(_v8.query).filter(([_v0]) => !_v140.includes(_v0)));
          Object.assign(_v4, (_v0 => {
            let _v1 = {};
            if (_v0.privacy?.length) {
              let _v0 = _v73().options,
                _v1 = _v0.privacy.map(_v0 => _v141[_v0]).map(_v0 => _v0 ? _v0[_v0]?.value : void 0).filter(_v0 => !!_v0);
              _v1.length && (_v1.filter_privacy = _v1.join(","));
            }
            _v0.sort && (_v1.sort = _v0.sort), _v0.uploader_ids?.length && (_v1.filter_uploader = _v0.uploader_ids.join(",")), _v0.folder_include_ids?.length && (_v1.filter_folder_include = _v0.folder_include_ids.join(",")), _v0.folder_exclude_ids?.length && (_v1.filter_folder_exclude = _v0.folder_exclude_ids.join(",")), _v0.modified_after && _v0.modified_before && (_v1.filter_date = `${_v0.modified_after},${_v0.modified_before}`), _v0.appears_in?.length && (_v1.query_fields = _v0.appears_in.join(","));
            let _v2 = _v0.custom_metadata;
            return _v2?.clauses?.length && (_v1.filter_custom_metadata = JSON.stringify({
              ...(_v2.logic ? {
                logic: _v2.logic
              } : {}),
              clauses: _v2.clauses.map(_v0 => ({
                ..._v0,
                field_id: Number.isNaN(Number(_v0.field_id)) ? _v0.field_id : Number(_v0.field_id)
              }))
            })), _v1;
          })({
            ..._v3.filters,
            sort: _v3.filters.sort ?? _v3.preview.sort
          })), _v4.type = "video", _v10 ? (_v4.q = _v10, _v4[_v55] = "1") : (delete _v4.q, Reflect.deleteProperty(_v4, _v55)), delete _v4.page, _v17({
            summary: _v3.summary,
            relatedSearches: _v0.related_searches ?? [],
            requestId: _v1,
            ownerId: _v9,
            sourceQuery: _v10,
            sourceSignature: _v142(_v8.query),
            sourceKey: _v2,
            querySignature: _v142(_v4),
            navigation: "pending"
          });
          let _v5 = _v0 => {
            _v17(_v0 => _v0?.requestId === _v1 ? {
              ..._v0,
              navigation: _v0 ? "complete" : "failed"
            } : _v0);
          };
          _v8.replace({
            query: _v4
          }, void 0, {
            shallow: !0
          }).then(_v5, () => _v5(!1));
        }, [_v8, _v9, _v10])),
        _v28 = (0, _v3.useRef)(_v24);
      (0, _v3.useEffect)(() => {
        _v28.current = _v24;
      }, [_v24]);
      let _v29 = (0, _v3.useRef)(null),
        _v30 = (0, _v3.useRef)(null);
      (0, _v3.useEffect)(() => {
        if (!_v0) {
          _v29.current = null, _v30.current = null, _v27();
          return;
        }
        let _v0 = `${_v9 ?? ""}|${_v10}|${_v11}`;
        if (_v10 && _v0 !== _v29.current) {
          _v29.current = _v0;
          let _v0 = _v10 !== _v30.current;
          if (_v30.current = _v10, _v14 && _v16?.ownerId === _v9 && _v16.sourceQuery === _v10) return;
          let _v1 = "{}" === _v11 ? void 0 : JSON.parse(_v11);
          _v26(_v10, _v1) || _v28.current({
            query: _v10,
            filters: _v1,
            holdResults: _v0
          });
        }
      }, [_v0, _v10, _v11, _v9, _v26, _v27, _v14, _v16]);
      let _v31 = (0, _v3.useCallback)(() => {
          let _v0 = _v10.trim();
          _v0 && (_v29.current = `${_v9 ?? ""}|${_v0}|${_v11}`, _v28.current({
            query: _v0,
            filters: "{}" === _v11 ? void 0 : JSON.parse(_v11)
          }));
        }, [_v10, _v11, _v9]),
        _v32 = _v0 && null !== _v20 && _v20 === _v12 && _v19 && !("delegate" in _v19 && _v19.delegate) ? _v19 : null,
        _v33 = _v6.show_custom_metadata ? _v4.customMetadata : void 0,
        _v34 = _v33 ? _v120(!1) : _v4.queryFields || _v120(_v7),
        _v35 = `${(({
          query: _v0,
          type: _v1,
          queryFields: _v2,
          privacy: _v3,
          sort: _v4,
          uploader: _v5,
          folderIncluded: _v6,
          folderExcluded: _v7,
          date: _v8,
          customMetadata: _v9,
          delegated: _v10
        }) => JSON.stringify([_v0 ?? null, _v1 ?? null, _v2 ?? null, _v3 ?? null, _v4 ?? null, _v5 ?? null, _v6 ?? null, _v7 ?? null, _v8 ?? null, _v9 ?? null, _v10 ?? !1]))(_v4)}|${JSON.stringify([_v9, _v34, !!_v33])}`,
        [_v36, _v37] = (0, _v3.useState)(null),
        _v38 = (0, _v3.useCallback)((_v0, _v1) => {
          _v37(_v0 => _v0?.key === _v0 && _v0.total === _v1 ? _v0 : {
            key: _v0,
            total: _v1
          });
        }, []),
        _v39 = _v36?.key === _v35 && 0 === _v36.total,
        _v40 = _v32 && "search_terms" in _v32 ? _v32.search_terms : void 0,
        _v41 = _v123(_v40),
        _v42 = 0 === (_v2 = _v123(_v40)).length ? null : 1 === _v2.length ? _v2[0] : _v2.map(_v0 => _v0.includes(" ") ? `"${_v0}"` : _v0).join(" | "),
        _v43 = _v39 && !!_v10 && null !== _v42 && _v42.toLowerCase() !== _v10.toLowerCase(),
        _v44 = _v0 && _v16?.ownerId === _v9 && "failed" !== _v16.navigation ? _v16 : null,
        _v45 = _v44?.querySignature === _v13 ? _v44 : null,
        _v46 = _v44?.navigation === "pending" && _v44.sourceSignature === _v13 && _v44.sourceKey === _v12,
        _v47 = _v0 && !!_v10 && _v23 === _v10,
        _v48 = (0, _v3.useMemo)(() => ({
          data: _v32,
          error: _v0 ? _v21 : null,
          isLoading: _v0 && _v22,
          isAwaitingQuery: _v47,
          searchRequestId: _v25,
          delegation: _v45,
          delegationPending: _v46,
          regenerate: _v31
        }), [_v32, _v0, _v21, _v22, _v47, _v25, _v45, _v46, _v31]),
        _v49 = (0, _v3.useMemo)(() => ({
          query: _v43 ? _v42 : null,
          terms: _v43 ? _v41 : [],
          primaryIsEmpty: _v39,
          searchStateKey: _v35,
          reportPrimaryTotal: _v38
        }), [_v43, _v42, _v41, _v39, _v35, _v38]);
      return (0, _v1.jsx)(_v144.Provider, {
        value: _v48,
        children: (0, _v1.jsx)(_v145.Provider, {
          value: _v49,
          children: _v1
        })
      });
    },
    _v147 = () => (0, _v3.useContext)(_v144),
    _v148 = () => (0, _v3.useContext)(_v145),
    _v149 = (0, _v3.createContext)({
      items: [],
      isLoading: !1,
      publish: () => void 0
    }),
    _v150 = _v0 => {
      let _v1,
        _v2,
        _v3 = _v0.video,
        _v4 = _v3?.uri;
      if (!_v3 || !_v4) return null;
      let _v5 = _v4.split("/").filter(Boolean).pop();
      if (!_v5) return null;
      let _v6 = _v3.user?.uri?.split("/").filter(Boolean).pop() ?? null,
        _v7 = _v3.user?.name ?? null,
        _v8 = _v3.user?.pictures?.sizes ?? [],
        _v9 = _v8.find(_v0 => (_v0.width ?? 0) >= 64)?.link ?? _v8[0]?.link ?? null;
      return {
        clip_id: _v5,
        clip_summary: "",
        moments: [],
        title: _v3.name ?? null,
        description: _v3.description ?? null,
        duration_seconds: _v3.duration ?? null,
        uploaded_on: _v3.createdTime ?? null,
        modified_on: _v3.modifiedTime ?? null,
        thumbnail: (_v2 = (_v1 = _v0.video?.pictures?.sizes ?? []).find(_v0 => (_v0.width ?? 0) >= 295) ?? _v1[_v1.length - 1], _v2?.link ?? null),
        user_id: _v6,
        user_name: _v7,
        uploader_id: _v6,
        uploader_name: _v7,
        uploader_picture: _v9,
        folder_id: _v3.parentProject?.uri?.split("/").filter(Boolean).pop() ?? null,
        folder_name: _v3.parentProject?.name ?? null,
        folder_uri: _v3.parentProject?.uri ?? null,
        uri: _v4,
        link: _v3.link ?? `https://vimeo.com/${_v5}`
      };
    },
    _v151 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)({
          items: [],
          isLoading: !0
        }),
        _v3 = (0, _v3.useMemo)(() => ({
          ..._v1,
          publish: _v2
        }), [_v1]);
      return (0, _v1.jsx)(_v149.Provider, {
        value: _v3,
        children: _v0
      });
    },
    _v152 = () => (0, _v3.useContext)(_v149);
  var _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v0.i(0);
  let _v180 = ({
      isDisabled: _v0 = !1,
      onRate: _v1,
      onComment: _v2,
      onDismiss: _v3
    }) => {
      let _v4 = (0, _v175.useToast)(),
        [_v5, _v6] = (0, _v3.useState)(null),
        [_v7, _v8] = (0, _v3.useState)(!1),
        [_v9, _v10] = (0, _v3.useState)(""),
        _v11 = () => {
          _v8(!1), _v4({
            title: (0, _v48.translate)({
              singular: "Thank you for your feedback",
              dictionary: {
                es: {
                  singular: "Gracias por sus comentarios"
                },
                "de-DE": {
                  singular: "Vielen Dank für Ihr Feedback"
                },
                "fr-FR": {
                  singular: "Nous vous remercions pour vos commentaires."
                },
                "ja-JP": {
                  singular: "フィードバックをありがとうございます"
                },
                "ko-KR": {
                  singular: "피드백을 보내주셔서 감사합니다."
                },
                "pt-BR": {
                  singular: "Agradecemos seu feedback"
                },
                "zh-CN": {
                  singular: "感谢您的反馈"
                }
              }
            }),
            variant: "neutral",
            isClosable: !1
          });
        },
        _v12 = _v0 => {
          if (!_v0) {
            if (_v5 === _v0) return void _v6(null);
            _v6(_v0), _v1("up" === _v0), _v10(""), _v8(!0);
          }
        };
      return (0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        gap: "xs",
        children: [(0, _v1.jsx)(_v160.Tooltip, {
          label: (0, _v48.translate)({
            singular: "Good response",
            dictionary: {
              es: {
                singular: "Respuesta satisfactoria"
              },
              "de-DE": {
                singular: "Gute Antwort"
              },
              "fr-FR": {
                singular: "Bonne réponse"
              },
              "ja-JP": {
                singular: "適切な応答"
              },
              "ko-KR": {
                singular: "좋은 응답"
              },
              "pt-BR": {
                singular: "Boa resposta"
              },
              "zh-CN": {
                singular: "满意的回应"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v158.IconButton, {
            size: "sm",
            variant: "tertiary",
            icon: "up" === _v5 ? (0, _v1.jsx)(_v179.ThumbUpFilled, {}) : (0, _v1.jsx)(_v178.ThumbUp, {}),
            onClick: () => _v12("up"),
            "aria-label": (0, _v48.translate)({
              singular: "Good response",
              dictionary: {
                es: {
                  singular: "Respuesta satisfactoria"
                },
                "de-DE": {
                  singular: "Gute Antwort"
                },
                "fr-FR": {
                  singular: "Bonne réponse"
                },
                "ja-JP": {
                  singular: "適切な応答"
                },
                "ko-KR": {
                  singular: "좋은 응답"
                },
                "pt-BR": {
                  singular: "Boa resposta"
                },
                "zh-CN": {
                  singular: "满意的回应"
                }
              }
            }),
            "aria-pressed": "up" === _v5,
            isDisabled: _v0
          })
        }), (0, _v1.jsx)(_v160.Tooltip, {
          label: (0, _v48.translate)({
            singular: "Bad response",
            dictionary: {
              es: {
                singular: "Respuesta insatisfactoria"
              },
              "de-DE": {
                singular: "Schlechte Antwort"
              },
              "fr-FR": {
                singular: "Mauvaise réponse"
              },
              "ja-JP": {
                singular: "不適切な応答"
              },
              "ko-KR": {
                singular: "나쁜 응답"
              },
              "pt-BR": {
                singular: "Resposta ruim"
              },
              "zh-CN": {
                singular: "不满意的回应"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v158.IconButton, {
            size: "sm",
            variant: "tertiary",
            icon: "down" === _v5 ? (0, _v1.jsx)(_v177.ThumbDownFilled, {}) : (0, _v1.jsx)(_v176.ThumbDown, {}),
            onClick: () => _v12("down"),
            "aria-label": (0, _v48.translate)({
              singular: "Bad response",
              dictionary: {
                es: {
                  singular: "Respuesta insatisfactoria"
                },
                "de-DE": {
                  singular: "Schlechte Antwort"
                },
                "fr-FR": {
                  singular: "Mauvaise réponse"
                },
                "ja-JP": {
                  singular: "不適切な応答"
                },
                "ko-KR": {
                  singular: "나쁜 응답"
                },
                "pt-BR": {
                  singular: "Resposta ruim"
                },
                "zh-CN": {
                  singular: "不满意的回应"
                }
              }
            }),
            "aria-pressed": "down" === _v5,
            isDisabled: _v0
          })
        }), _v7 && (0, _v1.jsxs)(_v167.Modal, {
          isOpen: !0,
          onClose: () => {
            _v0 || _v3("up" === _v5), _v11();
          },
          children: [(0, _v1.jsx)(_v173.ModalOverlay, {}), (0, _v1.jsxs)(_v170.ModalContent, {
            maxWidth: (0, _v9.rem)(600),
            children: [(0, _v1.jsx)(_v169.ModalCloseButton, {}), (0, _v1.jsx)(_v172.ModalHeader, {
              children: (0, _v1.jsx)(_v166.Header, {
                size: "md",
                children: (0, _v48.translate)({
                  singular: "Share your feedback",
                  dictionary: {
                    es: {
                      singular: "Comparta sus comentarios"
                    },
                    "de-DE": {
                      singular: "Teilen Sie Ihr Feedback"
                    },
                    "fr-FR": {
                      singular: "Partagez votre avis"
                    },
                    "ja-JP": {
                      singular: "ご意見をお聞かせください"
                    },
                    "ko-KR": {
                      singular: "피드백을 공유해 주세요"
                    },
                    "pt-BR": {
                      singular: "Compartilhe seu feedback"
                    },
                    "zh-CN": {
                      singular: "分享您的反馈"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v168.ModalBody, {
              children: (0, _v1.jsx)(_v174.Textarea, {
                value: _v9,
                onChange: _v0 => _v10(_v0.target.value),
                placeholder: (0, _v48.translate)({
                  singular: "What did you like or dislike about these results? (optional)",
                  dictionary: {
                    es: {
                      singular: "¿Qué le gustó o no le gustó de estos resultados? (opcional)"
                    },
                    "de-DE": {
                      singular: "Was hat Ihnen an diesen Ergebnissen gefallen oder nicht gefallen? (optional)"
                    },
                    "fr-FR": {
                      singular: "Qu'avez-vous aimé ou pas aimé dans ces résultats ? (facultatif)"
                    },
                    "ja-JP": {
                      singular: "これらの結果について、気に入った点や気に入らなかった点は何ですか? (任意)"
                    },
                    "ko-KR": {
                      singular: "이 결과에서 좋았던 점과 좋지 않았던 점은 무엇인가요? (선택 사항)"
                    },
                    "pt-BR": {
                      singular: "O que você gostou ou não gostou nesses resultados? (opcional)"
                    },
                    "zh-CN": {
                      singular: "您对这些结果的哪些方面感到满意或不满意？（可选）"
                    }
                  }
                }),
                "aria-label": (0, _v48.translate)({
                  singular: "What did you like or dislike about these results? (optional)",
                  dictionary: {
                    es: {
                      singular: "¿Qué le gustó o no le gustó de estos resultados? (opcional)"
                    },
                    "de-DE": {
                      singular: "Was hat Ihnen an diesen Ergebnissen gefallen oder nicht gefallen? (optional)"
                    },
                    "fr-FR": {
                      singular: "Qu'avez-vous aimé ou pas aimé dans ces résultats ? (facultatif)"
                    },
                    "ja-JP": {
                      singular: "これらの結果について、気に入った点や気に入らなかった点は何ですか? (任意)"
                    },
                    "ko-KR": {
                      singular: "이 결과에서 좋았던 점과 좋지 않았던 점은 무엇인가요? (선택 사항)"
                    },
                    "pt-BR": {
                      singular: "O que você gostou ou não gostou nesses resultados? (opcional)"
                    },
                    "zh-CN": {
                      singular: "您对这些结果的哪些方面感到满意或不满意？（可选）"
                    }
                  }
                }),
                minHeight: (0, _v9.rem)(150),
                width: "100%",
                resize: "none"
              })
            }), (0, _v1.jsx)(_v171.ModalFooter, {
              children: (0, _v1.jsx)(_v157.Button, {
                onClick: () => {
                  if (_v0) return void _v11();
                  let _v0 = _v9.trim();
                  _v0 ? _v2("up" === _v5, _v0) : _v3("up" === _v5), _v11();
                },
                children: (0, _v48.translate)({
                  singular: "Submit",
                  dictionary: {
                    es: {
                      singular: "Enviar"
                    },
                    "de-DE": {
                      singular: "Senden"
                    },
                    "fr-FR": {
                      singular: "Envoyer"
                    },
                    "ja-JP": {
                      singular: "送信"
                    },
                    "ko-KR": {
                      singular: "제출"
                    },
                    "pt-BR": {
                      singular: "Enviar"
                    },
                    "zh-CN": {
                      singular: "提交"
                    }
                  }
                })
              })
            })]
          })]
        })]
      });
    },
    _v181 = ({
      searchId: _v0,
      searchRequestId: _v1
    }) => {
      let {
        trackAgenticSearchRated: _v2,
        trackAgenticSearchFeedback: _v3,
        trackAgenticSearchFeedbackDismissed: _v4
      } = (0, _v12.useSearchTracking)();
      return (0, _v1.jsx)(_v180, {
        isDisabled: null === _v1,
        onRate: _v0 => {
          null !== _v1 && _v2({
            searchId: _v0,
            searchRequestId: _v1,
            isPositive: _v0
          });
        },
        onComment: (_v0, _v1) => {
          null !== _v1 && _v3({
            searchId: _v0,
            searchRequestId: _v1,
            isPositive: _v0,
            comment: _v1
          });
        },
        onDismiss: _v0 => {
          null !== _v1 && _v4({
            searchId: _v0,
            searchRequestId: _v1,
            isPositive: _v0
          });
        }
      });
    },
    _v182 = _v0 => `agentic_ai_overview_collapsed:${_v0}`;
  var _v183 = _v3;
  class _v184 extends _v183.default.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        error: null
      };
    }
    static getDerivedStateFromError(_v0) {
      return {
        error: _v0
      };
    }
    componentDidUpdate(_v0) {
      this.state.error && _v0.resetKey !== this.props.resetKey && this.setState({
        error: null
      });
    }
    componentDidCatch(_v0, _v1) {
      console.error("[AiOverviewCard] render error:", _v0, _v1.componentStack);
    }
    render() {
      return this.state.error ? (0, _v1.jsx)(_v156.Box, {
        width: "100%",
        border: "1px solid",
        borderColor: "stroke",
        borderRadius: "lg",
        padding: "md",
        marginBottom: "md",
        children: (0, _v1.jsx)(_v159.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v50.AI_SEARCH_FAILED
        })
      }) : this.props.children;
    }
  }
  var _v185 = _v0.i(0),
    _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0),
    _v194 = _v0.i(0),
    _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0),
    _v204 = _v0.i(0);
  let _v205 = _v0 => (0, _v1.jsx)(_v157.Button, {
      size: "xs",
      variant: "tertiary",
      color: "text-secondary",
      padding: "0",
      marginTop: "sm",
      textDecoration: "underline",
      _hover: {},
      _active: {},
      _dark: {
        _hover: {},
        _active: {}
      },
      ..._v0
    }),
    _v206 = {
      autoplay: 0,
      controls: 1,
      byline: 0,
      title: 0,
      portrait: 0,
      pip: 0,
      force_embed: 1
    },
    _v207 = ({
      clip: _v0
    }) => (0, _v1.jsxs)(_v156.Box, {
      as: "a",
      href: _v0.link,
      "aria-label": _v50.VIEW_FULL_VIDEO,
      position: "absolute",
      inset: 0,
      display: "block",
      backgroundColor: "fill-component",
      children: [_v0.thumbnail && (0, _v1.jsx)(_v156.Box, {
        as: "img",
        src: _v0.thumbnail,
        alt: "",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }), (0, _v1.jsx)(_v8.Flex, {
        position: "absolute",
        inset: 0,
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v8.Flex, {
          alignItems: "center",
          justifyContent: "center",
          boxSize: (0, _v9.rem)(48),
          borderRadius: "full",
          backgroundColor: "rgba(14, 18, 22, 0.6)",
          color: "white",
          children: (0, _v1.jsx)(_v202.PlayFilled, {
            boxSize: "sm"
          })
        })
      })]
    }),
    _v208 = ({
      clip: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        _v3 = _v0.clip_id,
        _v4 = _v0.player_embed_url ?? _v204.EmbedPlayerUtility.createEmbedUrl(`https://player.vimeo.com/video/${_v3}`, _v206);
      return (0, _v1.jsx)(_v156.Box, {
        position: "relative",
        width: "100%",
        borderRadius: "sm",
        overflow: "hidden",
        backgroundColor: "fill-component",
        flexShrink: 0,
        sx: {
          aspectRatio: "16 / 9"
        },
        children: _v1 ? (0, _v1.jsx)(_v207, {
          clip: _v0
        }) : (0, _v1.jsx)(_v203.EmbedPlayer, {
          title: _v0.title || "Vimeo player",
          src: _v4,
          onError: () => _v2(!0)
        })
      });
    },
    _v209 = _v0 => {
      let _v1 = (0, _v3.useRef)(null),
        [_v2, _v3] = (0, _v3.useState)(!1),
        [_v4, _v5] = (0, _v3.useState)(!1);
      return (0, _v3.useEffect)(() => {
        let _v0 = _v1.current;
        if (!_v0) return;
        let _v1 = () => {
          _v2 || _v5(_v0.scrollHeight > _v0.clientHeight + 2);
        };
        _v1();
        let _v2 = new ResizeObserver(_v1);
        return _v2.observe(_v0), () => _v2.disconnect();
      }, [_v2, _v0]), {
        textRef: _v1,
        isExpanded: _v2,
        setIsExpanded: _v3,
        isOverflowing: _v4
      };
    },
    _v210 = ({
      isExpanded: _v0,
      onToggle: _v1
    }) => (0, _v1.jsxs)(_v8.Flex, {
      position: "absolute",
      right: "0",
      bottom: "0",
      alignItems: "baseline",
      backgroundColor: "fill-surface",
      paddingLeft: "2xs",
      children: [!_v0 && (0, _v1.jsx)(_v159.Text, {
        variant: "body-md",
        color: "text-secondary",
        lineHeight: "1.4",
        children: "..."
      }), (0, _v1.jsx)(_v205, {
        "aria-expanded": _v0,
        onClick: _v1,
        marginTop: "0",
        paddingLeft: "2xs",
        lineHeight: "1.4",
        children: _v0 ? _v50.SHOW_LESS : _v50.SHOW_MORE
      })]
    }),
    _v211 = ({
      text: _v0
    }) => {
      let {
        textRef: _v1,
        isExpanded: _v2,
        setIsExpanded: _v3,
        isOverflowing: _v4
      } = _v209(_v0);
      return (0, _v1.jsxs)(_v156.Box, {
        position: "relative",
        width: "100%",
        children: [(0, _v1.jsx)(_v159.Text, {
          ref: _v1,
          variant: "body-md",
          color: "text-secondary",
          noOfLines: _v2 ? void 0 : 3,
          overflow: _v2 ? "visible" : "hidden",
          lineHeight: "1.4",
          children: _v0
        }), _v4 && (0, _v1.jsx)(_v210, {
          isExpanded: _v2,
          onToggle: () => _v3(_v0 => !_v0)
        })]
      });
    },
    _v212 = ({
      clip: _v0,
      moment: _v1,
      index: _v2,
      onMomentClick: _v3
    }) => {
      let _v4,
        _v5,
        _v6 = (_v4 = (0, _v14.useViewer)(), _v5 = _v1.snippet.split(/\s+/).filter(Boolean).slice(0, 6).join(" "), _v117(_v0.link, 0 * _v1.start_time_seconds, encodeURIComponent(_v5), !_v4?.isSimplifiedSite, 0 * _v1.end_time_seconds)),
        _v7 = _v1.snippet || _v1.relevance_reason || "",
        {
          textRef: _v8,
          isExpanded: _v9,
          setIsExpanded: _v10,
          isOverflowing: _v11
        } = _v209(_v7);
      return (0, _v1.jsxs)(_v156.Box, {
        position: "relative",
        display: "flex",
        flexDir: "column",
        alignItems: "flex-start",
        padding: "xs",
        borderRadius: "md",
        children: [(0, _v1.jsxs)(_v156.Box, {
          as: "a",
          href: _v6,
          onClick: () => _v3?.(_v1, _v2),
          display: "flex",
          gap: "md",
          alignItems: "flex-start",
          width: "100%",
          textDecoration: "none",
          color: "inherit",
          _hover: {
            backgroundColor: "fill-component"
          },
          children: [(0, _v1.jsx)(_v156.Box, {
            flexShrink: 0,
            width: (0, _v9.rem)(88),
            borderRadius: "sm",
            overflow: "hidden",
            backgroundColor: "fill-component",
            sx: {
              aspectRatio: "16 / 9"
            },
            children: _v0.thumbnail && (0, _v1.jsx)(_v156.Box, {
              as: "img",
              src: _v0.thumbnail,
              alt: "",
              width: "100%",
              height: "100%",
              objectFit: "cover"
            })
          }), (0, _v1.jsxs)(_v8.Flex, {
            flexDir: "column",
            gap: "xs",
            minWidth: 0,
            flexGrow: 1,
            children: [(0, _v1.jsxs)(_v159.Text, {
              variant: "heading-2xs",
              color: "text-primary",
              whiteSpace: "nowrap",
              children: [(0, _v187.secondsToDisplay)(_v1.start_time_seconds), " →", " ", (0, _v187.secondsToDisplay)(_v1.end_time_seconds)]
            }), _v7 && (0, _v1.jsx)(_v156.Box, {
              position: "relative",
              width: "100%",
              children: (0, _v1.jsx)(_v159.Text, {
                ref: _v8,
                variant: "body-md",
                color: "text-secondary",
                lineHeight: "1.2",
                noOfLines: _v9 ? void 0 : 3,
                overflow: _v9 ? "visible" : "hidden",
                children: `“${_v7}”`
              })
            })]
          })]
        }), _v11 && (0, _v1.jsx)(_v210, {
          isExpanded: _v9,
          onToggle: () => _v10(_v0 => !_v0)
        })]
      });
    },
    _v213 = ({
      clip: _v0,
      children: _v1,
      onMomentClick: _v2,
      onOpen: _v3,
      isMobile: _v4 = !1
    }) => {
      let _v5 = (0, _v200.useColorModeValue)("var(--vimeo-colors-lightBlueAlpha-200)", "var(--vimeo-colors-darkBlueAlpha-200)"),
        _v6 = _v0.modified_on ? _v111(_v0.modified_on) : _v0.uploaded_on ? _v111(_v0.uploaded_on) : "",
        _v7 = _v0.description || _v0.clip_summary || "",
        {
          isOpen: _v8,
          onOpen: _v9,
          onClose: _v10
        } = (0, _v201.useDisclosure)(),
        _v11 = (0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          gap: "md",
          children: [(0, _v1.jsx)(_v208, {
            clip: _v0
          }, _v0.clip_id), (0, _v1.jsxs)(_v8.Flex, {
            flexDir: "column",
            gap: "md",
            children: [(0, _v1.jsxs)(_v8.Flex, {
              flexDir: "column",
              gap: "sm",
              children: [(0, _v1.jsxs)(_v8.Flex, {
                flexDir: "column",
                gap: "2xs",
                children: [(0, _v1.jsx)(_v159.Text, {
                  variant: "heading-sm",
                  color: "text-primary",
                  noOfLines: 1,
                  children: _v0.title || _v50.videoFallbackTitle(_v0.clip_id)
                }), _v7 && (0, _v1.jsx)(_v211, {
                  text: _v7
                })]
              }), (0, _v1.jsxs)(_v8.Flex, {
                alignItems: "center",
                gap: "xs",
                minWidth: 0,
                children: [_v0.uploader_name && (0, _v1.jsx)(_v160.Tooltip, {
                  label: _v0.uploader_name,
                  placement: "top",
                  children: (0, _v1.jsx)(_v156.Box, {
                    flexShrink: 0,
                    display: "inline-flex",
                    children: (0, _v1.jsx)(_v185.Avatar, {
                      size: "xs",
                      src: _v0.uploader_picture ?? void 0,
                      alt: _v0.uploader_name,
                      nameProps: {
                        name: _v0.uploader_name
                      }
                    })
                  })
                }), _v6 && (0, _v1.jsx)(_v159.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  noOfLines: 1,
                  children: _v6
                })]
              })]
            }), _v0.moments.length > 0 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v190.Divider, {
                borderColor: "stroke"
              }), (0, _v1.jsxs)(_v8.Flex, {
                flexDir: "column",
                gap: "sm",
                children: [(0, _v1.jsx)(_v159.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: _v50.AI_RELEVANT_MOMENTS
                }), (0, _v1.jsx)(_v8.Flex, {
                  flexDir: "column",
                  gap: "sm",
                  children: _v0.moments.map((_v0, _v1) => (0, _v1.jsx)(_v212, {
                    clip: _v0,
                    moment: _v0,
                    index: _v1,
                    onMomentClick: _v2
                  }, `${_v0.clip_id}-moment-${_v1}`))
                })]
              })]
            })]
          })]
        });
      if (_v4) {
        let _v0 = _v3.default.cloneElement(_v1, {
          onClick: () => {
            _v3?.(), _v9();
          }
        });
        return (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v0, (0, _v1.jsxs)(_v191.Drawer, {
            isOpen: _v8,
            onClose: _v10,
            placement: "bottom",
            autoFocus: !1,
            children: [(0, _v1.jsx)(_v194.DrawerOverlay, {}), (0, _v1.jsx)(_v188.motion.div, {
              drag: "y",
              dragConstraints: {
                top: 0,
                bottom: 100
              },
              onDragEnd: (_v0, _v1) => {
                _v1.offset.y < 0 || _v10();
              },
              style: {
                position: "relative",
                zIndex: 0
              },
              children: (0, _v1.jsxs)(_v193.DrawerContent, {
                borderTopRadius: "xl",
                maxHeight: "88vh",
                sx: {
                  '&[data-placement="bottom"]': {
                    maxW: "100vw"
                  }
                },
                _focusVisible: {
                  outline: "none"
                },
                children: [(0, _v1.jsx)(_v189.bokeh.hr, {
                  backgroundColor: "text-tertiary",
                  alignSelf: "center",
                  paddingY: (0, _v9.rem)(2),
                  width: (0, _v9.rem)(70),
                  border: "none",
                  borderRadius: (0, _v9.rem)(10),
                  my: "sm"
                }), (0, _v1.jsx)(_v192.DrawerBody, {
                  px: "md",
                  py: "md",
                  children: _v11
                })]
              })
            })]
          })]
        });
      }
      return (0, _v1.jsxs)(_v195.Popover, {
        trigger: "hover",
        openDelay: 150,
        closeDelay: 200,
        placement: "left-start",
        isLazy: !0,
        gutter: 12,
        onOpen: _v3,
        children: [(0, _v1.jsx)(_v196.PopoverTrigger, {
          children: _v1
        }), (0, _v1.jsx)(_v199.Portal, {
          children: (0, _v1.jsx)(_v197.PopoverContent, {
            rootProps: {
              zIndex: "popover"
            },
            zIndex: "popover",
            width: (0, _v9.rem)(360),
            maxWidth: "90vw",
            padding: "md",
            boxShadow: "lg",
            border: "1px solid",
            borderColor: _v5,
            borderRadius: "xl",
            overflow: "hidden",
            _focusVisible: {
              outline: "none"
            },
            children: (0, _v1.jsx)(_v198.PopoverBody, {
              padding: 0,
              children: _v11
            })
          })
        })]
      });
    },
    _v214 = Math.round(135.11111111111111),
    _v215 = ({
      clip: _v0
    }) => (0, _v1.jsxs)(_v156.Box, {
      flexShrink: 0,
      height: (0, _v9.rem)(76),
      width: (0, _v9.rem)(_v214),
      position: "relative",
      overflow: "hidden",
      borderRadius: "sm",
      backgroundColor: "fill-component",
      children: [_v0.thumbnail && (0, _v1.jsx)(_v156.Box, {
        as: "img",
        src: _v0.thumbnail,
        alt: "",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }), _v0.duration_seconds ? (0, _v1.jsx)(_v186.Badge, {
        position: "absolute",
        bottom: (0, _v9.rem)(8),
        right: (0, _v9.rem)(8),
        size: "sm",
        border: "none",
        children: (0, _v187.secondsToDisplay)(_v0.duration_seconds)
      }) : null]
    }),
    _v216 = ({
      clip: _v0
    }) => (0, _v1.jsxs)(_v156.Box, {
      position: "relative",
      width: (0, _v9.rem)(32),
      height: (0, _v9.rem)(16),
      flexShrink: 0,
      children: [(0, _v1.jsx)(_v156.Box, {
        position: "absolute",
        top: (0, _v9.rem)(2),
        left: (0, _v9.rem)(9),
        width: (0, _v9.rem)(22),
        height: (0, _v9.rem)(12),
        borderRadius: "2xs",
        backgroundColor: "fill-skeleton"
      }), (0, _v1.jsx)(_v156.Box, {
        position: "absolute",
        top: 0,
        left: 0,
        width: (0, _v9.rem)(28),
        height: (0, _v9.rem)(16),
        borderRadius: "2xs",
        overflow: "hidden",
        backgroundColor: "fill-component",
        children: _v0.thumbnail && (0, _v1.jsx)(_v156.Box, {
          as: "img",
          src: _v0.thumbnail,
          alt: "",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        })
      })]
    }),
    _v217 = ({
      count: _v0,
      clip: _v1
    }) => (0, _v1.jsxs)(_v8.Flex, {
      alignItems: "center",
      gap: "xs",
      alignSelf: "flex-start",
      color: "text-secondary",
      paddingTop: (0, _v9.rem)(4),
      paddingBottom: (0, _v9.rem)(4),
      paddingLeft: (0, _v9.rem)(4),
      paddingRight: (0, _v9.rem)(10),
      borderRadius: "sm",
      backgroundColor: "fill-component",
      children: [(0, _v1.jsx)(_v216, {
        clip: _v1
      }), (0, _v1.jsx)(_v159.Text, {
        variant: "body-sm",
        children: _v50.relevantMomentsCount(_v0)
      })]
    }),
    _v218 = ({
      clip: _v0,
      position: _v1,
      ids: _v2
    }) => {
      let {
          trackAgenticSearchResultClick: _v3
        } = (0, _v12.useSearchTracking)(),
        _v4 = _v0.modified_on ? _v111(_v0.modified_on) : _v0.uploaded_on ? _v111(_v0.uploaded_on) : "",
        _v5 = (_v0, _v1) => {
          _v2.searchRequestId && _v3({
            searchId: _v2.searchId,
            searchRequestId: _v2.searchRequestId,
            clipId: Number(_v0.clip_id) || null,
            clickedItem: _v0,
            clickedItemId: "clip" === _v0 && Number(_v0.clip_id) || null,
            resultPosition: _v1,
            startTimeSeconds: _v1 ? Math.round(_v1.start_time_seconds) : null
          });
        },
        _v6 = (0, _v15.useBreakpointValue)({
          base: !0,
          md: !1
        }) ?? !1,
        _v7 = _v6 ? {
          as: "button",
          type: "button",
          border: "none",
          width: "100%",
          textAlign: "left",
          cursor: "pointer",
          backgroundColor: "fill-component"
        } : {
          as: "a",
          href: _v0.link,
          onClick: () => _v5("clip"),
          _hover: {
            backgroundColor: "fill-component"
          }
        };
      return (0, _v1.jsx)(_v213, {
        clip: _v0,
        isMobile: _v6,
        onMomentClick: _v0 => _v5("moment", _v0),
        children: (0, _v1.jsxs)(_v156.Box, {
          ..._v7,
          display: "flex",
          gap: "md",
          alignItems: "center",
          padding: "sm",
          borderRadius: "md",
          textDecoration: "none",
          color: "inherit",
          children: [(0, _v1.jsx)(_v215, {
            clip: _v0
          }), (0, _v1.jsxs)(_v8.Flex, {
            flexDir: "column",
            gap: "sm",
            minWidth: 0,
            flexGrow: 1,
            children: [(0, _v1.jsxs)(_v8.Flex, {
              flexDir: "column",
              gap: "2xs",
              minWidth: 0,
              children: [(0, _v1.jsx)(_v159.Text, {
                variant: "heading-xs",
                color: "text-primary",
                noOfLines: 1,
                children: _v0.title || _v50.videoFallbackTitle(_v0.clip_id)
              }), (0, _v1.jsxs)(_v8.Flex, {
                alignItems: "center",
                gap: "xs",
                minWidth: 0,
                children: [_v0.uploader_name && (0, _v1.jsx)(_v160.Tooltip, {
                  label: _v0.uploader_name,
                  placement: "top",
                  children: (0, _v1.jsx)(_v156.Box, {
                    flexShrink: 0,
                    display: "inline-flex",
                    children: (0, _v1.jsx)(_v185.Avatar, {
                      size: "xs",
                      src: _v0.uploader_picture ?? void 0,
                      alt: _v0.uploader_name,
                      nameProps: {
                        name: _v0.uploader_name
                      }
                    })
                  })
                }), _v4 && (0, _v1.jsx)(_v159.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  noOfLines: 1,
                  children: _v4
                })]
              })]
            }), _v0.moments.length > 0 && (0, _v1.jsx)(_v217, {
              count: _v0.moments.length,
              clip: _v0
            })]
          })]
        })
      });
    };
  var _v219 = _v0.i(0);
  let _v220 = ({
      title: _v0,
      href: _v1,
      onClick: _v2
    }) => (0, _v1.jsxs)(_v156.Box, {
      as: _v1 ? "a" : "span",
      ...(_v1 ? {
        href: _v1,
        rel: "noopener",
        onClick: _v0 => {
          _v0.metaKey || _v0.ctrlKey || _v0.shiftKey || _v0.altKey || 0 !== _v0.button ? _v2?.() : (_v0.preventDefault(), _v2?.(), window.location.assign(_v1));
        }
      } : {}),
      display: "inline-flex",
      alignItems: "center",
      gap: (0, _v9.rem)(4),
      verticalAlign: "middle",
      paddingLeft: (0, _v9.rem)(4),
      paddingRight: (0, _v9.rem)(8),
      borderRadius: "xs",
      border: "1px solid",
      borderColor: "stroke",
      backgroundColor: "fill-surface",
      color: "text-primary",
      textDecoration: "none",
      whiteSpace: "nowrap",
      cursor: _v1 ? "pointer" : "default",
      _hover: _v1 ? {
        backgroundColor: "fill-component"
      } : void 0,
      children: [(0, _v1.jsx)(_v219.Video, {
        boxSize: (0, _v9.rem)(16),
        color: "text-secondary",
        style: {
          flexShrink: 0
        }
      }), (0, _v1.jsx)(_v159.Text, {
        as: "span",
        variant: "body-lg",
        children: _v0
      })]
    }),
    _v221 = /<<(\d+)>>/g;
  var _v222 = _v0.i(0);
  let _v223 = ["agenticSearchTrialExpiresOn"];
  function _v224() {
    let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
      _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        data: _v2
      } = (0, _v222.useGetUser)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: _v223
      } : null);
    return _v2?.agenticSearchTrialExpiresOn ?? void 0;
  }
  let _v225 = ({
      clips: _v0,
      ids: _v1
    }) => {
      let [_v2, _v3] = (0, _v3.useState)(!1),
        {
          trackAgenticSearchInteraction: _v4
        } = (0, _v12.useSearchTracking)(),
        _v5 = Math.max(0, _v0.length - 2),
        _v6 = _v2 ? _v0 : _v0.slice(0, 2);
      return (0, _v1.jsxs)(_v8.Flex, {
        flexDir: "column",
        gap: "md",
        width: "100%",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          alignItems: "baseline",
          gap: "sm",
          paddingLeft: {
            base: 0,
            md: "sm"
          },
          children: [(0, _v1.jsx)(_v159.Text, {
            variant: "heading-sm",
            color: "text-primary",
            children: _v50.AI_SOURCES
          }), (0, _v1.jsx)(_v159.Text, {
            variant: "body-md",
            color: "text-tertiary",
            children: _v50.aiSourcesOf(_v6.length, _v0.length)
          })]
        }), (0, _v1.jsx)(_v8.Flex, {
          flexDir: "column",
          gap: "sm",
          children: _v6.map((_v0, _v1) => (0, _v1.jsx)(_v218, {
            clip: _v0,
            position: _v1,
            ids: _v1
          }, _v0.clip_id))
        }), _v5 > 0 && (0, _v1.jsx)(_v157.Button, {
          size: "sm",
          variant: "tertiary",
          onClick: () => {
            _v1.searchRequestId && _v4({
              searchId: _v1.searchId,
              searchRequestId: _v1.searchRequestId,
              valueName: _v2 ? "other_results_collapse" : "other_results_expand",
              interactionType: _v2 ? "sources_collapse" : "sources_expand",
              entityId: null
            }), _v3(_v0 => !_v0);
          },
          "aria-expanded": _v2,
          alignSelf: "flex-start",
          rightIcon: _v2 ? (0, _v1.jsx)(_v162.ChevronUp, {
            boxSize: (0, _v9.rem)(16)
          }) : (0, _v1.jsx)(_v161.ChevronDown, {
            boxSize: (0, _v9.rem)(16)
          }),
          children: _v2 ? _v50.SHOW_LESS : _v50.showMoreSourcesCount(_v5)
        })]
      });
    },
    _v226 = ({
      summary: _v0,
      clips: _v1,
      citedTitles: _v2,
      ids: _v3
    }) => {
      let {
          trackAgenticSearchResultClick: _v4
        } = (0, _v12.useSearchTracking)(),
        _v5 = {},
        _v6 = {
          ..._v2
        };
      for (let _v0 of _v1) _v5[_v0.clip_id] = _v0.link, !_v6[_v0.clip_id] && _v0.title && (_v6[_v0.clip_id] = _v0.title);
      let _v7 = _v0 => {
          _v3.searchRequestId && _v4({
            searchId: _v3.searchId,
            searchRequestId: _v3.searchRequestId,
            clipId: Number(_v0) || null,
            clickedItem: "citation",
            clickedItemId: Number(_v0) || null,
            resultPosition: null,
            startTimeSeconds: null
          });
        },
        _v8 = _v0.split(/\n{2,}/).map(_v0 => _v0.trim()).filter(Boolean);
      return (0, _v1.jsx)(_v8.Flex, {
        flexDir: "column",
        gap: (0, _v9.rem)(12),
        minWidth: 0,
        children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v159.Text, {
          variant: "body-lg",
          lineHeight: "1.5",
          children: ((_v0, _v1, _v2, _v3) => {
            let _v4,
              _v5 = [],
              _v6 = 0,
              _v7 = new RegExp(_v221);
            for (; null !== (_v4 = _v7.exec(_v0));) {
              _v4.index > _v6 && _v5.push(_v0.slice(_v6, _v4.index));
              let _v0 = _v4[1],
                _v1 = _v2[_v0] || _v50.videoFallbackTitle(_v0),
                _v2 = _v1[_v0];
              _v5.push((0, _v1.jsx)(_v220, {
                title: _v1,
                href: _v2 || void 0,
                onClick: _v2 ? () => _v3(_v0) : void 0
              }, `ref-${_v0}-${_v4.index}`)), _v6 = _v7.lastIndex;
            }
            return _v6 < _v0.length && _v5.push(_v0.slice(_v6)), _v5.length > 0 ? _v5 : [_v0];
          })(_v0, _v5, _v6, _v7)
        }, _v1))
      });
    },
    _v227 = () => (0, _v1.jsxs)(_v159.Text, {
      variant: "body-sm",
      color: "text-tertiary",
      width: "100%",
      children: [_v50.AI_OVERVIEW_DISCLAIMER, " ", (0, _v1.jsx)(_v156.Box, {
        as: "a",
        href: "https://help.vimeo.com/hc/en-us/articles/49996124376849-About-Smart-Library-Search-AI-overview",
        target: "_blank",
        rel: "noopener noreferrer",
        textDecoration: "underline",
        children: _v50.AI_LEARN_MORE
      })]
    }),
    _v228 = ({
      searches: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)();
      return (0, _v1.jsxs)(_v8.Flex, {
        flexDir: "column",
        gap: "sm",
        minWidth: 0,
        children: [(0, _v1.jsx)(_v159.Text, {
          variant: "heading-xs",
          color: "text-tertiary",
          children: _v50.AI_RELATED_SEARCHES
        }), (0, _v1.jsx)(_v8.Flex, {
          flexWrap: "wrap",
          gap: (0, _v9.rem)(12),
          minWidth: 0,
          children: _v0.map(_v0 => (0, _v1.jsx)(_v157.Button, {
            size: "sm",
            variant: "tertiary",
            border: "1px solid",
            borderColor: "stroke",
            backgroundColor: "transparent",
            borderRadius: "sm",
            paddingX: (0, _v9.rem)(12),
            leftIcon: (0, _v1.jsx)(_v165.SearchMagnifier, {
              boxSize: (0, _v9.rem)(16)
            }),
            onClick: () => {
              let _v0;
              Reflect.deleteProperty(_v0 = {
                ..._v1.query,
                q: _v0
              }, _v55), _v107(_v1, _v0);
            },
            children: _v0
          }, _v0))
        })]
      });
    },
    _v229 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v159.Text, {
      variant: "body-md",
      color: "text-secondary",
      paddingTop: "md",
      children: _v0
    }),
    _v230 = () => (0, _v1.jsxs)(_v8.Flex, {
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "sm",
      minHeight: (0, _v9.rem)(240),
      textAlign: "center",
      children: [(0, _v1.jsx)(_v163.CloseXCircle, {
        boxSize: (0, _v9.rem)(32),
        color: "text-tertiary"
      }), (0, _v1.jsx)(_v159.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: _v50.AI_SEARCH_FAILED
      })]
    }),
    _v231 = new Set(["default", "video"]),
    _v232 = _v0 => !_v0 || _v231.has(_v0),
    _v233 = ({
      delegation: _v0,
      searchId: _v1,
      isCollapsed: _v2
    }) => {
      let {
        items: _v3,
        isLoading: _v4
      } = _v152();
      if (_v4) return (0, _v1.jsx)(_v153.CardLoading, {});
      let _v5 = _v3.length,
        _v6 = _v5 >= 2 ? _v0.summary.preview_many?.split("{n}").join(String(_v5)) : 1 === _v5 ? _v0.summary.preview_one : void 0,
        _v7 = [_v2 ? void 0 : _v6, _v0.summary.all].filter(Boolean).join(" "),
        _v8 = {
          searchId: _v1,
          searchRequestId: _v0.requestId
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v8.Flex, {
          flexDir: {
            base: "column",
            md: "row"
          },
          gap: {
            base: "lg",
            md: (0, _v9.rem)(40)
          },
          alignItems: "stretch",
          children: [(0, _v1.jsxs)(_v8.Flex, {
            flexDir: "column",
            gap: {
              base: "xl",
              md: "lg"
            },
            flex: {
              md: "1 1 0",
              xl: "3 1 0"
            },
            minWidth: 0,
            alignSelf: "stretch",
            paddingTop: "xs",
            children: [(0, _v1.jsx)(_v159.Text, {
              variant: "body-lg",
              lineHeight: "1.5",
              color: "text-primary",
              children: _v7
            }), _v0.relatedSearches.length > 0 && (0, _v1.jsx)(_v228, {
              searches: _v0.relatedSearches
            }), (0, _v1.jsx)(_v156.Box, {
              display: {
                base: "none",
                md: "block"
              },
              marginTop: "auto",
              children: (0, _v1.jsx)(_v227, {})
            })]
          }), !_v2 && (_v4 || _v3.length > 0) && (0, _v1.jsx)(_v156.Box, {
            flex: {
              md: "1 1 0",
              xl: "2 1 0"
            },
            minWidth: {
              base: 0,
              md: (0, _v9.rem)(300)
            },
            children: _v4 ? (0, _v1.jsx)(_v8.Flex, {
              flexDir: "column",
              gap: "sm",
              children: [0, 1, 2].map(_v0 => (0, _v1.jsx)(_v156.Box, {
                height: (0, _v9.rem)(76),
                borderRadius: "md",
                backgroundColor: "fill-skeleton"
              }, _v0))
            }) : (0, _v1.jsx)(_v225, {
              clips: _v3,
              ids: _v8
            })
          })]
        }), (0, _v1.jsx)(_v156.Box, {
          display: {
            base: "block",
            md: "none"
          },
          width: "100%",
          marginTop: "lg",
          children: (0, _v1.jsx)(_v227, {})
        })]
      });
    },
    _v234 = ({
      accountOwnerId: _v0
    }) => {
      let {
          query: _v1,
          type: _v2
        } = _v136(),
        {
          data: _v3,
          error: _v4,
          isLoading: _v5,
          searchRequestId: _v6,
          delegation: _v7,
          delegationPending: _v8,
          regenerate: _v9
        } = _v147(),
        {
          searchId: _v10
        } = (0, _v3.useContext)(_v127),
        _v11 = {
          searchId: _v10,
          searchRequestId: _v6
        },
        {
          trackAgenticSearchInteraction: _v12,
          trackAgenticSearchPageViewed: _v13
        } = (0, _v12.useSearchTracking)(),
        _v14 = _v224(),
        [_v15, _v16] = (0, _v3.useState)(() => (_v0 => {
          if (void 0 === _v0) return !1;
          try {
            return "true" === window.localStorage.getItem(_v182(_v0));
          } catch {
            return !1;
          }
        })(_v0)),
        _v17 = (0, _v3.useRef)(_v15);
      (0, _v3.useEffect)(() => {
        _v17.current = _v15;
      }, [_v15]);
      let _v18 = _v1 || "",
        _v19 = (0, _v3.useCallback)(() => {
          _v18.trim() && (_v11.searchRequestId && _v12({
            searchId: _v11.searchId,
            searchRequestId: _v11.searchRequestId,
            valueName: "regenerate",
            interactionType: "regenerate",
            entityId: null
          }), _v9());
        }, [_v18, _v9, _v11.searchId, _v11.searchRequestId, _v12]),
        _v20 = (0, _v3.useRef)(_v2),
        _v21 = (0, _v3.useRef)(null),
        _v22 = (0, _v3.useCallback)(() => {
          let _v0 = !_v17.current;
          _v17.current = _v0, _v16(_v0);
          if (void 0 !== _v0) try {
            _v0 ? window.localStorage.setItem(_v182(_v0), "true") : window.localStorage.removeItem(_v182(_v0));
          } catch {}
          _v11.searchRequestId && _v12({
            searchId: _v11.searchId,
            searchRequestId: _v11.searchRequestId,
            valueName: _v0 ? "overview_collapse" : "overview_expand",
            interactionType: _v0 ? "overview_collapse" : "overview_expand",
            entityId: null
          });
        }, [_v0, _v11.searchId, _v11.searchRequestId, _v12]);
      (0, _v3.useEffect)(() => {
        let _v0 = _v232(_v20.current),
          _v1 = !_v232(_v2);
        _v20.current = _v2, _v0 && _v1 && (_v17.current = !0, _v16(!0));
      }, [_v2]);
      let _v23 = !!(_v3 && "help" !== _v3.capability && !_v3.summary && _v3.clips.length > 0),
        _v24 = !!_v18 && (_v5 || !!_v4 || !!(_v3 && !_v23));
      if ((0, _v3.useEffect)(() => {
        let _v0 = _v18.trim();
        if (!_v0) {
          _v21.current = null;
          return;
        }
        if (!_v24) return;
        let _v1 = `${_v0 ?? "self"}|${_v0}`;
        if (_v21.current === _v1) return;
        _v21.current = _v1;
        let _v2 = _v17.current ? "collapsed" : "expanded";
        _v13({
          searchId: _v11.searchId,
          libraryOwnerId: _v0 ?? null,
          contentType: _v2 ?? null,
          overviewState: _v2
        });
      }, [_v0, _v11.searchId, _v2, _v24, _v18, _v13]), !_v18 && !_v5 && !_v8 && !_v3 && !_v4 && !_v7) return null;
      let _v25 = {
        isCollapsed: _v15,
        onToggleCollapse: _v22,
        infoLabel: _v14 ? _v50.SMART_SEARCH_INFO_TRIAL : _v50.SMART_SEARCH_INFO
      };
      if (_v5 || _v8) return (0, _v1.jsx)(_v154.CardShell, {
        ..._v25,
        isLoading: !0,
        children: (0, _v1.jsx)(_v153.CardLoading, {})
      });
      if (_v4) return (0, _v1.jsx)(_v154.CardShell, {
        ..._v25,
        children: (0, _v1.jsx)(_v230, {})
      });
      if (_v7) return (0, _v1.jsx)(_v154.CardShell, {
        ..._v25,
        actions: (0, _v1.jsx)(_v181, {
          searchId: _v10,
          searchRequestId: _v7.requestId
        }, _v7.requestId),
        children: (0, _v1.jsx)(_v233, {
          delegation: _v7,
          searchId: _v10,
          isCollapsed: _v15
        })
      });
      if (!_v3) return null;
      if ("help" === _v3.capability) return (0, _v1.jsx)(_v154.CardShell, {
        ..._v25,
        children: (0, _v1.jsx)(_v155.HelpBody, {
          result: _v3,
          footer: (0, _v1.jsx)(_v181, {
            searchId: _v11.searchId,
            searchRequestId: _v11.searchRequestId
          }, _v11.searchRequestId ?? "none")
        })
      });
      let _v26 = _v3.clips.length > 0;
      if (_v23) return null;
      if (!_v3.summary && !_v26) return (0, _v1.jsx)(_v154.CardShell, {
        ..._v25,
        children: (0, _v1.jsx)(_v229, {
          children: _v50.NO_AI_RESULTS
        })
      });
      let _v27 = _v3.related_searches ?? [];
      return (0, _v1.jsxs)(_v154.CardShell, {
        ..._v25,
        actions: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v181, {
            searchId: _v11.searchId,
            searchRequestId: _v11.searchRequestId
          }, _v11.searchRequestId ?? "none"), (0, _v1.jsx)(_v160.Tooltip, {
            label: _v50.AI_REGENERATE,
            placement: "top",
            children: (0, _v1.jsx)(_v158.IconButton, {
              size: "sm",
              variant: "tertiary",
              "aria-label": _v50.AI_REGENERATE,
              onClick: _v19,
              icon: (0, _v1.jsx)(_v164.Reset, {
                boxSize: "xs"
              })
            })
          })]
        }),
        children: [_v3.partial && (0, _v1.jsx)(_v156.Box, {
          marginTop: "sm",
          padding: "sm",
          borderRadius: "md",
          backgroundColor: "fill-component",
          role: "status",
          children: (0, _v1.jsx)(_v159.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v50.AI_PARTIAL_RESULTS
          })
        }), (0, _v1.jsxs)(_v8.Flex, {
          flexDir: {
            base: "column",
            md: "row"
          },
          gap: {
            base: "lg",
            md: (0, _v9.rem)(40)
          },
          alignItems: "stretch",
          children: [(0, _v1.jsxs)(_v8.Flex, {
            flexDir: "column",
            gap: {
              base: "xl",
              md: "lg"
            },
            flex: {
              md: "1 1 0",
              xl: "3 1 0"
            },
            minWidth: 0,
            alignSelf: "stretch",
            paddingTop: "xs",
            children: [(0, _v1.jsx)(_v226, {
              summary: _v3.summary,
              clips: _v3.clips,
              citedTitles: _v3.cited_titles,
              ids: _v11
            }), _v27.length > 0 && (0, _v1.jsx)(_v228, {
              searches: _v27
            }), (0, _v1.jsx)(_v156.Box, {
              display: {
                base: "none",
                md: "block"
              },
              marginTop: "auto",
              children: (0, _v1.jsx)(_v227, {})
            })]
          }), _v26 && (0, _v1.jsx)(_v156.Box, {
            flex: {
              md: "1 1 0",
              xl: "2 1 0"
            },
            minWidth: {
              base: 0,
              md: (0, _v9.rem)(300)
            },
            children: (0, _v1.jsx)(_v225, {
              clips: _v3.clips,
              ids: _v11
            })
          })]
        }), (0, _v1.jsx)(_v156.Box, {
          display: {
            base: "block",
            md: "none"
          },
          width: "100%",
          marginTop: "lg",
          children: (0, _v1.jsx)(_v227, {})
        })]
      });
    },
    _v235 = () => {
      let {
          query: _v0
        } = _v136(),
        _v1 = (0, _v14.useViewer)(),
        _v2 = _v1?.teamUser?.ownerId || _v1?.user?.id;
      return (0, _v1.jsx)(_v184, {
        resetKey: _v0 || "",
        children: (0, _v1.jsx)(_v234, {
          accountOwnerId: _v2
        }, _v2 ?? "unavailable")
      });
    },
    _v236 = () => {
      let _v0 = _v224(),
        _v1 = (0, _v14.useViewer)();
      if (!_v0) return null;
      let {
        headerDate: _v2,
        bodyDate: _v3
      } = (0, _v187.formatTrialExpiryDates)(_v0, _v1?.locale);
      return (0, _v1.jsx)(_v156.Box, {
        width: "100%",
        borderBottomRadius: "lg",
        background: "upsell-secondary",
        paddingTop: "lg",
        paddingRight: (0, _v9.rem)(12),
        paddingBottom: {
          base: (0, _v9.rem)(12),
          md: "sm"
        },
        paddingLeft: {
          base: (0, _v9.rem)(12),
          md: "md"
        },
        position: "relative",
        zIndex: 0,
        marginTop: (0, _v9.rem)(-16),
        children: (0, _v1.jsxs)(_v8.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          justifyContent: "space-between",
          alignItems: {
            base: "flex-start",
            md: "center"
          },
          gap: (0, _v9.rem)(12),
          children: [(0, _v1.jsxs)(_v8.Flex, {
            direction: "column",
            gap: {
              base: "xs",
              md: 0
            },
            width: {
              base: "100%",
              md: "auto"
            },
            paddingLeft: {
              base: "sm",
              md: 0
            },
            paddingRight: "sm",
            paddingTop: (0, _v9.rem)(2),
            paddingBottom: (0, _v9.rem)(2),
            children: [(0, _v1.jsx)(_v159.Text, {
              variant: "heading-xs",
              color: "text-primary",
              children: _v50.complimentaryAccessUntil(_v2)
            }), (0, _v1.jsx)(_v159.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v50.smartSearchFreeUntil(_v3)
            })]
          }), (0, _v1.jsx)(_v157.Button, {
            as: "a",
            href: "https://vimeo.com/enterprise/contact-us",
            variant: "upsell",
            size: "sm",
            flexShrink: 0,
            width: {
              base: "100%",
              md: "auto"
            },
            children: _v50.CONTACT_SALES
          })]
        })
      });
    };
  var _v237 = _v0.i(0),
    _v238 = _v0.i(0),
    _v239 = _v0.i(0),
    _v240 = _v0.i(0),
    _v241 = _v0.i(0);
  let _v242 = _v0 => {
      let {
          isActive: _v1,
          children: _v2,
          rightIcon: _v3,
          isApplied: _v4,
          dataTestId: _v5,
          ..._v6
        } = _v0,
        _v7 = {
          variant: "tertiary",
          marginRight: "sm",
          background: _v4 ? "darkBlueAlpha.200" : _v1 ? "darkBlueAlpha.400" : "transparent",
          _hover: {
            background: "darkBlueAlpha.200"
          },
          _dark: {
            background: _v4 ? "lightBlueAlpha.300" : _v1 ? "lightBlueAlpha.500" : "transparent",
            _hover: {
              background: "lightBlueAlpha.300"
            }
          },
          ..._v6
        };
      return (0, _v1.jsx)(_v240.Menu, {
        isLazy: !0,
        children: (0, _v1.jsx)(_v241.MenuButton, {
          as: _v157.Button,
          size: "sm",
          rightIcon: _v3,
          "data-testid": _v5,
          ..._v7,
          children: _v2
        })
      });
    },
    _v243 = () => {
      var _v0;
      let _v1,
        _v2 = (0, _v2.useRouter)(),
        _v3 = (_v0 = _v2.query, _v1 = {
          ..._v52
        }, "string" == typeof _v0.q && (_v1.query = _v0.q), Number(_v0.page) && (_v1.page = Number(_v0.page)), _v104(_v0.uploaded, _v56.options) && (_v1.uploaded = (0, _v45.camelizeString)(_v0.uploaded)), _v104(_v0.updated, _v57.options) && (_v1.updated = (0, _v45.camelizeString)(_v0.updated)), _v104(_v0.type, _v58.options) ? _v1.type = _v0.type : _v1.type = _v58.options.clip.value, _v104(_v0.live, _v59.options) && (_v1.live = _v0.live), _v104(_v0.hdr, _v60.options) && (_v1.hdr = (0, _v45.camelizeString)(_v0.hdr)), _v104(_v0.vimeo360, _v61.options) && (_v1.vimeo360 = "360" === _v0.vimeo360 ? "vimeo360" : _v0.vimeo360), _v104(_v0.price, _v62.options) && (_v1.price = _v0.price), _v104(_v0.license, _v63.options) && (_v1.license = (0, _v45.camelizeString)(_v0.license)), _v104(_v0.resolution, _v64.options) && (_v1.resolution = _v0.resolution), _v104(_v0.duration, _v65.options) && (_v1.duration = _v0.duration), _v104(_v0.collection, _v66.options) && (_v1.collection = _v0.collection), _v104(_v0.category, _v68) && (_v1.category = _v0.category), "true" === _v0.follow && (_v1.follow = _v0.follow), _v104(_v0.sort, _v94) && (_v1.sort = _v0.sort), _v1),
        {
          isDrawerOpen: _v4
        } = (0, _v3.useContext)(_v19),
        _v5 = (0, _v3.useRef)(null),
        _v6 = _v5?.current?.href === _v2.asPath;
      return _v4 || (_v5.current = {
        ..._v108(_v3),
        href: _v2.asPath
      }), {
        ..._v3,
        filters: _v3,
        onFilterChange: (_v0, _v1) => {
          if (_v0 === _v58.name) {
            let _v0 = {
              q: _v3.query
            };
            _v58.options.clip.value !== _v1 && (_v0.type = _v1), _v107(_v2, _v0);
          } else {
            let {
              url: _v0
            } = _v108({
              ..._v3,
              page: 1
            });
            "default" === _v1 || _v0 === _v36 && _v1 === _v92.clip.relevance.value ? delete _v0[_v0] : _v0[_v0] = _v1, _v107(_v2, _v0);
          }
        },
        appliedFiltersCount: Object.keys(_v113(_v3)).filter(_v0 => void 0 !== _v3[_v0]).length,
        clearFilters: () => {
          let {
            url: _v0
          } = _v108({
            ..._v52,
            page: _v3.page,
            query: _v3.query,
            sort: _v3.sort,
            type: _v5.current?.url.type ?? _v3.type
          });
          _v107(_v2, _v0);
        },
        updatePage: _v0 => {
          let {
            url: _v1
          } = _v108({
            ..._v3,
            page: _v0
          });
          _v107(_v2, _v1);
        },
        appliedFiltersSortAndQuery: JSON.stringify(_v2.query),
        keepPreviousUrl: () => {
          _v5.current && _v107(_v2, _v5.current.url);
        },
        isApplyButtonDisabled: _v6
      };
    },
    _v244 = () => {
      let {
          panelStatus: _v0,
          togglePanel: _v1
        } = (0, _v3.useContext)(_v19),
        {
          searchType: _v2
        } = (0, _v3.useContext)(_v127),
        {
          appliedFiltersCount: _v3
        } = _v136(),
        {
          appliedFiltersCount: _v4
        } = _v243(),
        _v5 = _v2 === _v124 ? _v3 : _v4,
        _v6 = _v5 > 0;
      return (0, _v1.jsx)(_v242, {
        onClick: () => _v1(_v16),
        rightIcon: (0, _v1.jsx)(_v239.Filter, {}),
        isActive: _v0 === _v16,
        isApplied: _v6,
        dataTestId: "filter-button",
        children: _v6 ? _v50.filtersCount(_v5) : _v50.FILTERS
      });
    };
  var _v245 = _v0.i(0),
    _v246 = _v0.i(0),
    _v247 = _v0.i(0),
    _v248 = _v0.i(0),
    _v249 = _v0.i(0),
    _v250 = _v0.i(0),
    _v250 = _v250,
    _v251 = _v0.i(0),
    _v252 = _v0.i(0);
  async function _v253({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v251.measureLatency)("getSearch", "GET", async () => {
      let _v0 = await fetch(`${_v0}/search?${(0, _v252.searchQueryString)(_v2)}&fields=${_v1.map(_v252.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v252.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v252.deepCamelCase)(_v1);
    });
  }
  var _v254 = _v0.i(0),
    _v255 = _v0.i(0),
    _v256 = _v0.i(0);
  function _v257(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v130.useGctlConfig)();
    return (0, _v254.default)(_v2 ? `/search${(0, _v256.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v253({
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
  }
  var _v258 = _v0.i(0),
    _v259 = _v0.i(0);
  let _v260 = () => {
      let _v0 = (0, _v2.useRouter)(),
        [_v1, _v2] = (0, _v3.useState)(!1);
      return (0, _v3.useEffect)(() => {
        let _v0 = () => {
            _v2(!0);
          },
          _v1 = () => {
            _v2(!1);
          };
        return _v0.events.on("routeChangeStart", _v0), _v0.events.on("routeChangeComplete", _v1), _v0.events.on("routeChangeError", _v1), () => {
          _v0.events.off("routeChangeStart", _v0), _v0.events.off("routeChangeComplete", _v1), _v0.events.off("routeChangeError", _v1);
        };
      }, [_v0]), _v1;
    },
    _v261 = () => {
      let _v0 = (0, _v2.useRouter)(),
        _v1 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          searchType: _v2
        } = (0, _v3.useContext)(_v127),
        {
          isDrawerOpen: _v3
        } = (0, _v3.useContext)(_v19),
        _v4 = _v260(),
        _v5 = (0, _v259.useOrionSetting)("enable_fuzzy_public_search"),
        _v6 = _v243(),
        _v7 = _v1?.user?.id,
        _v8 = _v7?.toString() ?? null,
        _v9 = _v1?.teamUser?.ownerId?.toString() ?? null,
        _v10 = _v1?.user?.preferences?.enablePublicSmartSearch === !0,
        _v11 = _v10 && (!_v6.type || _v6.type === _v58.options.clip.value),
        _v12 = (0, _v258.useOrionLoading)(),
        _v13 = _v1?.apiUrl ? _v8 : "__viewer_pending__",
        [_v14, _v15] = (0, _v3.useState)(() => ({
          userId: _v13,
          teamOwnerId: _v9,
          finished: !_v12
        }));
      _v14.userId !== _v13 || _v14.teamOwnerId !== _v9 ? _v15({
        userId: _v13,
        teamOwnerId: _v9,
        finished: !_v12
      }) : _v14.finished || _v12 || _v15({
        userId: _v13,
        teamOwnerId: _v9,
        finished: !0
      });
      let _v16 = _v11 && !_v14.finished;
      (0, _v3.useEffect)(() => {
        if (!_v11 || _v14.finished) return;
        let _v0 = _v14.userId,
          _v1 = _v14.teamOwnerId,
          _v2 = setTimeout(() => {
            _v15(_v0 => _v0.userId === _v0 && _v0.teamOwnerId === _v1 ? {
              ..._v0,
              finished: !0
            } : _v0);
          }, 500);
        return () => clearTimeout(_v2);
      }, [_v11, _v14.finished, _v14.teamOwnerId, _v14.userId]);
      let _v17 = _v10 ? 15 : 24,
        {
          query: _v18,
          page: _v19,
          uploaded: _v20,
          type: _v21,
          live: _v22,
          hdr: _v23,
          vimeo360: _v24,
          price: _v25,
          license: _v26,
          resolution: _v27,
          duration: _v28,
          collection: _v29,
          category: _v30,
          follow: _v31,
          updated: _v32,
          sort: _v33
        } = _v6,
        _v34 = _v2 === _v125,
        {
          data: _v35,
          isLoading: _v36,
          mutate: _v37,
          error: _v38
        } = _v257(() => {
          if (!_v0.isReady || !_v1?.apiUrl || !_v34 || _v3 || _v4 || _v16) return null;
          let [_v0, _v1] = _v116(_v33);
          return {
            select: (_v0 => {
              switch (_v0) {
                case _v58.options.ondemand.value:
                  return _v96;
                case _v58.options.people.value:
                  return _v97;
                case _v58.options.channel.value:
                  return _v98;
                case _v58.options.group.value:
                  return _v99;
                default:
                  return _v95;
              }
            })(_v21),
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.3"
            },
            query: {
              filterType: _v21 ? _v58.options[_v21].value : _v58.options.clip.value,
              query: _v18,
              page: _v19,
              perPage: _v17,
              filterUploaded: _v20 && _v56.options[_v20].value,
              filterLive: _v22 && _v59.options[_v22].value,
              filterHdr: _v23 && _v60.options[_v23].value,
              filterVimeo_360: _v24 && _v61.options[_v24].value,
              filterPrice: _v25 && _v62.options[_v25].value,
              filterLicense: _v26 && _v63.options[_v26].value,
              filterResolution: _v27 && _v64.options[_v27].value,
              filterStaffpicked: _v29 && !0,
              filterDuration: _v28 && _v65.options[_v28].value,
              filterCategory: _v30,
              filterFollows: _v31 && _v7,
              filterLastUpdated: _v32 && _v57.options[_v32].value,
              sizes: _v21 === _v58.options.ondemand.value ? ["296x744"] : void 0,
              sort: _v0,
              direction: _v1,
              facets: _v11 ? void 0 : "type",
              fetchUserProfile: _v21 === _v58.options.people.value ? "1" : void 0,
              precision: 0,
              fuzzy: _v5
            }
          };
        }, {
          revalidateOnFocus: !1,
          revalidateAll: !1,
          revalidateFirstPage: !1,
          revalidateIfStale: !1,
          keepPreviousData: !0
        });
      return {
        data: _v35,
        isLoading: _v36,
        mutate: _v37,
        error: _v38,
        perPage: _v17,
        publicResultCount: (_v0 => {
          if (!(_v0 instanceof Array)) return;
          let _v1 = {};
          for (let {
            name: _v0,
            total: _v1
          } of _v0) _v0 && (_v1[_v0] = _v1);
          return _v1;
        })(_v35?.facets?.type?.options)
      };
    };
  var _v262 = _v0.i(0);
  let _v263 = () => {
      let _v0 = (0, _v2.useRouter)(),
        {
          cache: _v1,
          mutate: _v2
        } = (0, _v255.useSWRConfig)(),
        _v3 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          searchType: _v4
        } = (0, _v3.useContext)(_v127),
        {
          isDrawerOpen: _v5
        } = (0, _v3.useContext)(_v19),
        _v6 = _v260(),
        {
          query: _v7,
          page: _v8,
          type: _v9,
          queryFields: _v10,
          privacy: _v11,
          sort: _v12,
          uploader: _v13,
          date: _v14,
          folderIncluded: _v15,
          folderExcluded: _v16,
          customMetadata: _v17,
          delegated: _v18
        } = _v136(),
        {
          hasAutoClosedCaptions: _v19
        } = _v27(),
        _v20 = (0, _v129.useOrionSettingsFields)(["show_custom_metadata"]),
        {
          query: _v21,
          searchStateKey: _v22,
          reportPrimaryTotal: _v23
        } = _v148(),
        _v24 = _v20.show_custom_metadata ? _v17 : void 0,
        _v25 = _v24 ? _v120(!1) : _v10 || _v120(_v19),
        _v26 = _v4 === _v124,
        _v27 = _v18 ? void 0 : _v7,
        {
          data: _v28,
          error: _v29,
          isLoading: _v30,
          isValidating: _v31,
          mutate: _v32
        } = (0, _v262.useGetUserItems)(() => {
          if (!_v0.isReady || !_v3?.user || !_v26 || _v5 || _v6) return null;
          let [_v0, _v1] = _v116(_v12),
            [_v2, _v3] = _v14?.split(",") ?? [void 0, void 0];
          return {
            query: {
              perPage: 10,
              page: _v8,
              filter: _v24 ? "video" : _v9 || "folder,video,showcase,live_event,file",
              sort: _v0,
              direction: _v1,
              query: _v21 || _v27,
              queryFields: _v25,
              excludeFolderIds: _v16,
              includeFolderIds: _v15,
              filterUploader: _v13,
              filterPrivacy: _v11,
              filterLivePlaceholder: !1,
              forceUpgrade: void 0,
              precision: 3,
              modifiedStartDate: _v2,
              modifiedEndDate: _v3,
              filterCustomMetadata: _v24,
              facetType: !0
            },
            select: _v100,
            where: {
              userId: _v3?.teamUser?.ownerId || _v3?.user.id
            },
            headers: {
              Accept: "application/vnd.vimeo.*; version=3.4.2"
            }
          };
        }, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1,
          revalidateOnReconnect: !1,
          revalidateFirstPage: !1,
          keepPreviousData: !1
        });
      return (0, _v3.useEffect)(() => {
        !_v21 && _v22 && _v0.isReady && _v3?.user && _v26 && !_v5 && !_v6 && !_v30 && !_v31 && !_v29 && "number" == typeof _v28?.total && _v23(_v22, _v28.total);
      }, [_v21, _v22, _v0.isReady, _v3?.user, _v26, _v5, _v6, _v30, _v31, _v29, _v28?.total, _v23]), {
        data: _v28,
        error: _v29,
        isLoading: _v30,
        isValidating: _v31,
        revalidateAll: _v0 => {
          let _v1 = _v3?.teamUser?.ownerId || _v3?.user?.id,
            _v2 = [];
          for (let _v0 of _v1.keys()) _v0.startsWith(`/users/${_v1}/items`) && _v2.push(_v0);
          _v0 ? _v2.forEach(_v0 => {
            _v2(_v0, _v0 => {
              if (_v0) return {
                ..._v0,
                total: _v0.total - _v0.size,
                data: _v0.data.filter(_v0 => {
                  let _v1 = _v0.video?.uri || _v0.folder?.uri || _v0.showcase?.uri;
                  return !!_v1 && !_v0.has(_v1);
                })
              };
            });
          }) : _v2.forEach(_v0 => {
            _v2(_v0);
          });
        },
        mutate: _v32
      };
    },
    _v264 = {
      clip: "video",
      ondemand: "ondemand",
      people: "user",
      group: "group",
      channel: "channel"
    },
    _v265 = () => {
      let {
          defaultSearchType: _v0,
          query: _v1,
          sort: _v2,
          page: _v3,
          total: _v4,
          uuidStr: _v5,
          isAiRequest: _v6,
          hasAgenticSearch: _v7,
          filters: _v8,
          searchType: _v9
        } = _v266(),
        _v10 = _v7 ? null : _v1,
        {
          trackSearchResultsPage: _v11,
          trackSearchResultHover: _v12,
          trackSearchResultClick: _v13,
          trackSearchWatchLater: _v14,
          trackSearchFilter: _v15,
          trackSearchSorting: _v16,
          trackSearchModeSwitch: _v17,
          trackNotificationView: _v18,
          trackNotificationAction: _v19,
          trackViewGenerateAiSearch: _v20,
          trackAiSearchWidgetActions: _v21,
          trackThumbsRate: _v22
        } = (0, _v12.useSearchTracking)();
      return {
        sendHoverEvent: ({
          entityType: _v0,
          position: _v1,
          uri: _v2
        }) => {
          _v12({
            searchId: (0, _v250.default)(_v5, _v29),
            searchText: _v10,
            defaultSearchType: _v0,
            resultsPageNumber: _v3,
            resultPosition: _v1,
            entityId: _v103(_v2),
            entityType: _v0,
            orderBy: _v2,
            resultsQty: _v4,
            isAiRequest: _v6
          });
        },
        sendClickEvent: ({
          entityType: _v0,
          position: _v1,
          uri: _v2
        }) => {
          _v13({
            searchId: (0, _v250.default)(_v5, _v29),
            searchText: _v10,
            defaultSearchType: _v0,
            resultsPageNumber: _v3,
            resultPosition: _v1,
            entityId: _v103(_v2),
            entityType: _v0,
            orderBy: _v2,
            resultsQty: _v4,
            isAiRequest: _v6
          });
        },
        sendMomentClickEvent: ({
          position: _v0,
          entityId: _v1
        }) => {
          _v13({
            searchId: (0, _v250.default)(_v5, _v29),
            searchText: _v10,
            defaultSearchType: _v0,
            resultPosition: _v0,
            entityId: _v1,
            entityType: "video",
            orderBy: _v2,
            resultsQty: _v4,
            isAiRequest: _v6
          });
        },
        sendWatchLaterEvent: ({
          entityType: _v0,
          position: _v1,
          uri: _v2
        }) => {
          _v14({
            searchId: (0, _v250.default)(_v5, _v29),
            searchText: _v10,
            defaultSearchType: _v0,
            resultsPageNumber: _v3,
            resultPosition: _v1,
            entityId: _v103(_v2),
            entityType: _v0,
            orderBy: _v2,
            resultsQty: _v4
          });
        },
        sendFilterEvent: ({
          value: _v0,
          valueName: _v1,
          previousValue: _v2
        }) => {
          _v15({
            searchId: (0, _v250.default)(_v5, _v29),
            searchText: _v10,
            defaultSearchType: _v0,
            resultsPageNumber: _v3,
            previousValue: _v2,
            value: _v0,
            valueName: _v1,
            orderBy: _v2,
            resultsQty: _v4,
            isAiRequest: _v6
          });
        },
        sendSortEvent: ({
          value: _v0,
          previousValue: _v1
        }) => {
          _v16({
            searchId: (0, _v250.default)(_v5, _v29),
            searchText: _v10,
            defaultSearchType: _v0,
            resultsPageNumber: _v3,
            previousValue: [_v1],
            value: [_v0],
            valueName: "sorting",
            orderBy: _v0,
            resultsQty: _v4,
            isAiRequest: _v6
          });
        },
        sendSearchResultsPage: _v0 => {
          let _v1 = Object.keys(_v8).filter(_v0 => void 0 !== _v8[_v0]),
            _v2 = _v1.map(_v0 => _v8[_v0]),
            _v3 = (0, _v250.default)(_v5, _v29),
            _v4 = _v1.length && !_v0 ? _v1 : null,
            _v5 = _v2.length && !_v0 ? _v2 : null;
          _v11({
            searchId: _v3,
            searchText: _v10,
            resultsPageNumber: _v0 ? null : _v3,
            orderBy: _v2,
            resultsQty: _v4,
            filters: _v4,
            filterValues: _v5,
            searchType: _v9
          });
        },
        sendModeSwitchEvent: ({
          copy: _v0
        }) => {
          _v17({
            searchId: (0, _v250.default)(_v5, _v29),
            searchText: _v10,
            defaultSearchType: _v0,
            resultsQty: _v4,
            copy: _v0
          });
        },
        sendNotificationView: () => {
          _v18({
            notificationName: "search_load_error",
            notificationCopy: _v30
          });
        },
        sendNotificationAction: () => {
          _v19({
            notificationName: "search_load_error",
            notificationCopy: _v30
          });
        },
        sendGenerateAiSearch: () => {
          _v20();
        },
        sendAiSearchAction: (_v0, _v1) => {
          _v21({
            copy: _v0,
            videoId: _v103(_v1)
          });
        },
        sendThumbsRate: (_v0, _v1) => {
          let _v2 = _v103(_v1);
          (_v0.thumbsUp || _v0.thumbsDown) && _v22({
            ratedFeature: "ai_search",
            isPositive: _v0.thumbsUp,
            videoId: _v2
          });
        }
      };
    },
    _v266 = () => {
      let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          searchType: _v1,
          feature: _v2
        } = (0, _v3.useContext)(_v127),
        {
          hasEnterprise: _v3,
          hasPublicSearchDisabled: _v4,
          hasAgenticSearch: _v5
        } = _v27(),
        {
          filters: {
            query: _v6 = null,
            sort: _v7 = null,
            page: _v8,
            ..._v9
          }
        } = _v243(),
        {
          data: _v10
        } = _v261(),
        {
          filters: {
            query: _v11 = null,
            sort: _v12 = null,
            page: _v13,
            ..._v14
          }
        } = _v136(),
        {
          data: _v15
        } = _v263(),
        _v16 = () => {
          if (!_v0?.user) return _v125;
          if (!_v4) return _v124;
          let _v0 = _v0.user.account.toLowerCase();
          return "free" !== _v0 && "basic" !== _v0 || _v3 || _v0?.teamUser?.ownerId ? _v124 : _v125;
        };
      return _v1 === _v124 ? {
        query: _v11,
        sort: _v12 ?? _v77.relevance.value,
        page: _v13,
        total: _v15?.total ?? null,
        uuidStr: _v11 || "",
        feature: _v2,
        defaultSearchType: _v16(),
        isAiRequest: !1,
        hasAgenticSearch: _v5,
        filters: _v14,
        searchType: _v1
      } : {
        query: _v6,
        sort: _v7 ?? _v77.relevance.value,
        page: _v8,
        total: _v10?.total ?? null,
        uuidStr: _v6 || "",
        feature: _v2,
        defaultSearchType: _v16(),
        isAiRequest: null,
        hasAgenticSearch: !1,
        filters: _v9,
        searchType: _v1
      };
    };
  var _v267 = _v0.i(0),
    _v268 = _v0.i(0);
  let _v269 = ({
      onClose: _v0,
      redirectUrl: _v1,
      originUrl: _v2,
      attribution: _v3
    }) => (0, _v1.jsxs)(_v167.Modal, {
      isOpen: !0,
      onClose: _v0,
      children: [(0, _v1.jsx)(_v173.ModalOverlay, {}), (0, _v1.jsxs)(_v170.ModalContent, {
        width: (0, _v9.rem)(592),
        maxW: "unset",
        children: [(0, _v1.jsx)(_v169.ModalCloseButton, {}), (0, _v1.jsx)(_v268.AuthModal, {
          authType: "login",
          redirectUrl: _v1,
          originUrl: _v2,
          attribution: _v3,
          minH: "unset",
          background: "unset",
          disableDismiss: !0
        })]
      })]
    }),
    _v270 = (0, _v3.createContext)({}),
    _v271 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        [_v2, _v3] = (0, _v3.useState)(),
        [_v4, _v5] = (0, _v3.useState)(),
        {
          modalState: _v6,
          open: _v7,
          close: _v8
        } = (0, _v267.useAttributedLoginModal)();
      return (0, _v1.jsxs)(_v270.Provider, {
        value: {
          isOpen: _v6.isShowing,
          openAuthModal: (_v0, _v1, _v2) => {
            _v0 && _v3(_v0), _v1 && _v5(_v1), _v7({
              entry: _v2,
              type: "login"
            });
          }
        },
        children: [_v6.isShowing && (0, _v1.jsx)(_v269, {
          onClose: () => {
            _v8(), _v4 && _v107(_v1, _v4);
          },
          redirectUrl: _v2,
          attribution: _v6.attribution,
          originUrl: _v6.originUrl
        }), _v0]
      });
    },
    _v272 = [{
      text: _v50.PUBLIC,
      untranslatedText: "Vimeo"
    }, {
      text: _v50.LIBRARY,
      untranslatedText: "Library"
    }],
    _v273 = () => {
      let {
          searchType: _v0,
          toggleSearchType: _v1
        } = (0, _v3.useContext)(_v127),
        _v2 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          openAuthModal: _v3
        } = (0, _v3.useContext)(_v270),
        {
          sendModeSwitchEvent: _v4
        } = _v265();
      return (0, _v1.jsx)(_v8.Flex, {
        alignItems: "center",
        gridColumn: {
          base: "1/5",
          sm: "1/1"
        },
        marginRight: {
          base: "0",
          md: "md"
        },
        width: {
          base: "100%",
          sm: "fit-content"
        },
        children: (0, _v1.jsx)(_v247.Tabs, {
          index: +(_v0 !== _v125),
          onChange: _v0 => {
            _v4({
              copy: _v272[_v0].untranslatedText
            }), _v2?.user ? _v1() : _v3(void 0, void 0, "search_public_library");
          },
          width: "100%",
          size: "sm",
          children: (0, _v1.jsxs)(_v245.TabList, {
            children: [(0, _v1.jsxs)(_v246.Tab, {
              "data-testId": "vimeo-tab",
              children: [(0, _v1.jsx)(_v248.Globe, {
                boxSize: (0, _v9.rem)(20)
              }), (0, _v1.jsx)(_v159.Text, {
                variant: "heading-xs",
                marginLeft: (0, _v9.rem)(6),
                children: _v272[0].text
              })]
            }, _v272[0].text), (0, _v1.jsxs)(_v246.Tab, {
              "data-testId": "library-tab",
              children: [(0, _v1.jsx)(_v249.MyLibrary, {
                boxSize: (0, _v9.rem)(20)
              }), (0, _v1.jsx)(_v159.Text, {
                variant: "heading-xs",
                marginLeft: (0, _v9.rem)(6),
                children: _v272[1].text
              })]
            }, _v272[1].text), (0, _v1.jsx)(_v247.TabIndicator, {})]
          })
        })
      });
    };
  var _v274 = _v0.i(0),
    _v275 = _v0.i(0),
    _v276 = _v0.i(0);
  let _v277 = () => {
      let _v0 = (0, _v2.useRouter)(),
        _v1 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          searchType: _v2
        } = (0, _v3.useContext)(_v127),
        {
          query: _v3,
          type: _v4,
          delegated: _v5
        } = _v136(),
        {
          query: _v6
        } = _v148(),
        _v7 = _v5 ? void 0 : _v6 || _v3,
        {
          data: _v8,
          isLoading: _v9
        } = _v263(),
        {
          hasAutoClosedCaptions: _v10
        } = _v27(),
        _v11 = _v2 === _v124,
        {
          data: _v12,
          error: _v13,
          isLoading: _v14
        } = (0, _v262.useGetUserItems)(() => _v0.isReady && _v1?.user && _v11 ? {
          query: {
            perPage: 1,
            filter: "folder,video,showcase,live_event,file",
            query: _v7,
            queryFields: _v120(_v10),
            filterLivePlaceholder: !1,
            precision: 3,
            facetType: !0
          },
          select: ["type"],
          where: {
            userId: _v1?.teamUser?.ownerId || _v1?.user.id
          },
          headers: {
            Accept: "application/vnd.vimeo.*; version=3.4.2"
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1,
          revalidateOnReconnect: !1
        }),
        _v15 = (0, _v3.useMemo)(() => {
          let _v0,
            _v1 = _v121(_v12?.meta?.facets?.facetType),
            _v2 = _v121(_v8?.meta?.facets?.facetType);
          return (_v0 = _v4 ? {
            ..._v1,
            ..._v2
          } : {
            ...Object.fromEntries(Object.keys(_v1).map(_v0 => [_v0, 0])),
            ..._v2
          }).default = Object.entries(_v0).filter(([_v0]) => "default" !== _v0).reduce((_v0, [, _v1]) => _v0 + _v1, 0), _v0;
        }, [_v12, _v8, _v4]),
        _v16 = _v9 || !!_v4 && _v14;
      return {
        libraryResultCount: _v15,
        error: _v4 ? _v13 : void 0,
        isLoading: _v16
      };
    },
    _v278 = ({
      showLoader: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)("none"),
        _v3 = (0, _v3.useRef)(null),
        {
          sendFilterEvent: _v4
        } = _v265(),
        {
          type: _v5,
          onLibraryFilterChange: _v6
        } = _v136(),
        {
          type: _v7,
          onFilterChange: _v8
        } = _v243(),
        {
          libraryResultCount: _v9,
          error: _v10,
          isLoading: _v11
        } = _v277(),
        {
          publicResultCount: _v12
        } = _v261(),
        {
          isLoading: _v13
        } = _v147(),
        {
          query: _v14,
          primaryIsEmpty: _v15
        } = _v148(),
        {
          searchType: _v16
        } = (0, _v3.useContext)(_v127),
        _v17 = (0, _v14.useViewer)(),
        _v18 = (0, _v15.useBreakpointValue)({
          base: !0,
          sm: !1
        }),
        _v19 = _v16 === _v124,
        [_v20, _v21] = (0, _v276.useIsVisible)({
          threshold: 1
        }),
        [_v22, _v23] = (0, _v276.useIsVisible)({
          threshold: 1
        }),
        {
          options: _v24,
          nameCopy: _v25,
          untranslatedCopy: _v26
        } = _v19 ? _v70 : _v58,
        _v27 = Object.keys(_v24),
        _v28 = _v19 ? _v6 : _v8,
        _v29 = _v19 ? _v5 : _v7,
        _v30 = _v19 ? _v9 : _v12,
        _v31 = void 0 === _v30,
        _v32 = _v15 && _v13 && !_v14,
        _v33 = _v29 ? _v24[_v29].value : _v24?.default?.value,
        _v34 = _v0 => {
          _v3.current && (_v3.current.scrollLeft += _v0);
        };
      return (0, _v1.jsx)(_v8.Flex, {
        alignItems: "center",
        gap: "sm",
        children: (0, _v1.jsx)(_v156.Box, {
          position: "relative",
          flexGrow: 1,
          minWidth: 0,
          children: (0, _v1.jsxs)(_v8.Flex, {
            gap: "sm",
            ref: _v3,
            overflowX: "scroll",
            scrollBehavior: "smooth",
            onMouseEnter: () => {
              _v2("block");
            },
            onMouseLeave: () => {
              _v2("none");
            },
            sx: {
              scrollbarWidth: "none"
            },
            children: [!_v21 && !_v18 && (0, _v1.jsx)(_v279, {
              onClick: () => _v34(-150),
              icon: (0, _v1.jsx)(_v275.ChevronLeftSmall, {}),
              display: _v1,
              "aria-label": "left-scroll-button"
            }), (0, _v1.jsx)(_v280, {
              background: _v281.leftLight,
              _dark: {
                background: _v281.leftDark
              },
              display: _v21 ? "none" : "block"
            }), _v27.map((_v0, _v1) => {
              let _v2 = _v24[_v0].value,
                _v3 = _v30?.[_v2] || 0,
                _v4 = _v2 === _v33;
              return (0, _v1.jsxs)(_v157.Button, {
                ref: 0 === _v1 ? _v20 : _v1 === _v27.length - 1 ? _v22 : void 0,
                onClick: () => {
                  _v4({
                    copy: _v24[_v0].untranslatedText ?? _v24[_v0].text,
                    value: [_v2],
                    valueName: _v26 ?? _v25,
                    previousValue: [_v33]
                  }), _v28("type", _v24[_v0].value);
                },
                size: "sm",
                variant: "secondary",
                isActive: _v4,
                children: [_v24[_v0].text, (0, _v1.jsx)(_v159.Text, {
                  variant: "body-md",
                  color: _v4 ? "text-primary" : "text-secondary",
                  children: _v31 || _v0 || _v32 || _v11 || _v14 && _v10 ? "" : ` ${((_v0, _v1 = "en-US") => _v0 <= 0 ? (0, _v46.formatNumber)({
                    value: _v0,
                    locale: _v1
                  }) : (0, _v46.formatNumber)({
                    value: _v0,
                    locale: _v1,
                    notation: "compact",
                    maximumSignificantDigits: 3,
                    minimumSignificantDigits: 3
                  }))(_v3, _v17?.locale)}`
                })]
              }, _v1);
            }), (0, _v1.jsx)(_v280, {
              background: _v281.rightLight,
              right: "0",
              _dark: {
                background: _v281.rightDark
              },
              display: _v23 ? "none" : "block"
            }), !_v23 && !_v18 && (0, _v1.jsx)(_v279, {
              right: "0",
              onClick: () => _v34(150),
              icon: (0, _v1.jsx)(_v274.ChevronRightSmall, {}),
              display: _v1,
              "aria-label": "right-scroll-button"
            })]
          })
        })
      });
    },
    _v279 = _v0 => {
      let {
        onClick: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v158.IconButton, {
        position: "absolute",
        size: "sm",
        onClick: _v1,
        variant: "primary",
        ..._v2
      });
    },
    _v280 = _v0 => {
      let {
        display: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v156.Box, {
        height: (0, _v9.rem)(32),
        width: (0, _v9.rem)(60),
        position: "absolute",
        pointerEvents: "none",
        display: _v1,
        ..._v2
      });
    },
    _v281 = {
      leftLight: "linear-gradient(90deg, #F4F6F8 0%, rgba(244, 246, 248, 0) 100%)",
      leftDark: "linear-gradient(90deg, #0E1216 0%, rgba(14, 18, 22, 0) 100%)",
      rightLight: "linear-gradient(90deg, rgba(244, 246, 248, 0) 0%, #F4F6F8 100%)",
      rightDark: "linear-gradient(90deg, rgba(14, 18, 22, 0) 0%, #0E1216 100%)"
    },
    _v282 = ({
      showLibraryToggle: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        {
          type: _v2 = _v58.options.clip.value,
          sort: _v3
        } = _v243(),
        {
          sort: _v4
        } = _v136(),
        {
          data: _v5,
          isLoading: _v6
        } = _v261(),
        {
          data: _v7,
          isLoading: _v8
        } = _v263(),
        {
          panelStatus: _v9,
          togglePanel: _v10
        } = (0, _v3.useContext)(_v19),
        {
          searchType: _v11
        } = (0, _v3.useContext)(_v127),
        {
          hasAgenticSearch: _v12
        } = _v27(),
        _v13 = _v11 === _v124,
        _v14 = _v13 && _v12,
        _v15 = _v112(_v1.query.q);
      if (_v14 && ("" === _v15 || !_v0)) return null;
      let _v16 = !_v14;
      return (0, _v1.jsxs)(_v237.Grid, {
        templateColumns: "repeat(3, minmax(auto, max-content))",
        templateRows: {
          base: "repeat(2, max-content)",
          lg: "initial"
        },
        rowGap: _v0 ? {
          base: (0, _v9.rem)(18),
          sm: (0, _v9.rem)(12),
          lg: "0"
        } : "0",
        alignItems: "center",
        sx: {
          "& > *": {
            minWidth: "0px"
          }
        },
        paddingLeft: {
          base: 0,
          sm: "sm"
        },
        children: [_v0 ? (0, _v1.jsx)(_v273, {}) : null, _v16 && (0, _v1.jsx)(_v156.Box, {
          gridArea: {
            base: _v0 ? "2/1" : "1/2",
            md: "2/1",
            lg: "1/2"
          },
          children: (0, _v1.jsx)(_v278, {
            showLoader: _v13 ? _v8 || !_v7 : _v6 || !_v5
          })
        }), (0, _v1.jsx)(_v8.Flex, {
          gap: "sm",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          gridArea: _v16 ? {
            base: "3/1/3/5",
            sm: "2/4",
            lg: "1/4"
          } : {
            base: "2/1/2/5",
            sm: "1/4"
          },
          children: (0, _v1.jsxs)(_v8.Flex, {
            marginLeft: {
              base: "0",
              sm: "md"
            },
            alignItems: "center",
            children: [_v16 && (0, _v1.jsx)(_v242, {
              onClick: () => _v10(_v17),
              rightIcon: (0, _v1.jsx)(_v238.SortSmall, {}),
              isActive: _v9 === _v17,
              dataTestId: "sort-button",
              children: (() => {
                let _v0 = _v13 ? _v4 : _v3;
                if (!_v0) return _v77.relevance.text;
                {
                  let _v0 = _v13 ? _v93 : _v92[_v2],
                    _v1 = Object.keys(_v0).find(_v0 => _v0[_v0].value === _v0);
                  return _v0[_v1].text;
                }
              })()
            }), (0, _v1.jsx)(_v244, {})]
          })
        })]
      });
    };
  var _v283 = _v0.i(0),
    _v284 = _v0.i(0),
    _v285 = _v0.i(0),
    _v286 = _v0.i(0);
  let _v287 = () => {
      let {
        sendNotificationView: _v0
      } = _v265();
      return (0, _v3.useEffect)(() => {
        _v0();
      }, []), (0, _v1.jsxs)(_v8.Flex, {
        width: "100%",
        height: "100%",
        minHeight: "30vh",
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "text-secondary",
        textAlign: "center",
        gap: "md",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v286.CircleExclamation, {
          boxSize: {
            base: "xl",
            sm: "2xl"
          }
        }), (0, _v1.jsx)(_v159.Text, {
          variant: {
            base: "heading-lg",
            sm: "heading-xl"
          },
          children: _v50.UNABLE_LOAD_RESULTS
        }), (0, _v1.jsx)(_v159.Text, {
          variant: "body-lg",
          children: (0, _v1.jsx)(_v288, {})
        })]
      });
    },
    _v288 = () => {
      let {
        sendNotificationAction: _v0
      } = _v265();
      return (0, _v48.translate)({
        singular: "Refresh to try again or {STYLE}contact support{/STYLE}",
        replacements: {
          STYLE: _v0 => (0, _v1.jsx)(_v285.Link, {
            href: "/help/contact",
            variant: "inline-secondary",
            onClick: () => _v0(),
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Actualice para volver a intentarlo o {STYLE}póngase en contacto con el servicio de asistencia.{/STYLE}"
          },
          "de-DE": {
            singular: "Aktualisieren Sie, um es erneut zu versuchen, oder {STYLE}wenden Sie sich an den Support{/STYLE}."
          },
          "fr-FR": {
            singular: "Actualisez la page pour réessayer ou {STYLE}contactez l'assistance{/STYLE}."
          },
          "ja-JP": {
            singular: "ページを更新して再試行するか、{STYLE}サポートにお問い合わせください{/STYLE}"
          },
          "ko-KR": {
            singular: "새로고침하여 다시 시도하거나 {STYLE}지원팀에 문의하세요{/STYLE}"
          },
          "pt-BR": {
            singular: "Atualize para tentar novamente ou {STYLE}entre em contato com a equipe de suporte{/STYLE}"
          },
          "zh-CN": {
            singular: "刷新重试，或{STYLE}联系支持人员{/STYLE}。"
          }
        }
      });
    };
  var _v289 = _v0.i(0);
  let _v290 = ({
    scrollContainer: _v0,
    page: _v1,
    pageSize: _v2,
    updatePage: _v3,
    data: _v4
  }) => {
    let _v5 = (0, _v15.useBreakpointValue)({
        base: "sm",
        md: "md"
      }),
      _v6 = _v4?.total;
    return !_v6 || _v6 <= _v2 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v8.Flex, {
      w: "100%",
      justifyContent: "center",
      children: (0, _v1.jsx)(_v289.PaginationRoot, {
        page: _v1,
        count: _v6,
        pageSize: _v2,
        siblingCount: 2,
        onPageChange: _v0 => {
          _v3(_v0.page), _v0?.scrollTo(0, 0);
        },
        size: _v5,
        children: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v289.PaginationPrevTrigger, {}), _v0.pages.map((_v0, _v1) => {
            let _v2 = Math.min(_v0.totalPages - 2, _v1) - 3,
              _v3 = Math.max(_v1, 3) + 3;
            return "page" === _v0.type && (_v0.value === _v1 || _v0.value > _v2 && _v0.value < _v3) ? (0, _v1.jsx)(_v289.PaginationItem, {
              ..._v0
            }, _v1) : null;
          }), (0, _v1.jsx)(_v289.PaginationNextTrigger, {})]
        })
      })
    });
  };
  var _v291 = _v0.i(0);
  let _v292 = ({
    terms: _v0
  }) => {
    let _v1,
      _v2 = (0, _v14.useViewer)(),
      _v3 = ((_v0, _v1) => {
        let _v2 = _v0.map(_v0 => `“${_v0}”`);
        if (_v2.length <= 1) return _v2[0] ?? "";
        try {
          return new Intl.ListFormat(_v1 || "en", {
            style: "long",
            type: "disjunction"
          }).format(_v2);
        } catch {
          return _v2.join(", ");
        }
      })(_v0, _v2?.locale);
    return (0, _v1.jsxs)(_v8.Flex, {
      alignItems: "center",
      gap: "2xs",
      pb: "sm",
      minWidth: 0,
      children: [(0, _v1.jsx)(_v159.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: (_v1 = (0, _v1.jsx)(_v159.Text, {
          as: "span",
          fontWeight: "bold",
          children: _v3
        }), (0, _v48.translate)({
          singular: "Showing results for {TERMS}",
          replacements: {
            TERMS: () => _v1
          },
          dictionary: {
            es: {
              singular: "Mostrando resultados para {TERMS}"
            },
            "de-DE": {
              singular: "Ergebnisse für {TERMS}"
            },
            "fr-FR": {
              singular: "Affichage des résultats pour {TERMS}"
            },
            "ja-JP": {
              singular: "「{TERMS}」の検索結果を表示しています"
            },
            "ko-KR": {
              singular: "{TERMS}에 대한 결과를 표시합니다"
            },
            "pt-BR": {
              singular: "Exibindo resultados para {TERMS}"
            },
            "zh-CN": {
              singular: "显示与 {TERMS} 相关的结果"
            }
          }
        }))
      }), (0, _v1.jsx)(_v160.Tooltip, {
        label: _v51(),
        placement: "top",
        children: (0, _v1.jsx)(_v156.Box, {
          as: "span",
          tabIndex: 0,
          display: "inline-flex",
          flexShrink: 0,
          color: "text-tertiary",
          "aria-label": _v51(),
          alignItems: "center",
          children: (0, _v1.jsx)(_v291.CircleInfoSmall, {
            boxSize: "xs"
          })
        })
      })]
    });
  };
  var _v293 = _v0.i(0),
    _v294 = _v0.i(0),
    _v295 = _v0.i(0),
    _v296 = _v0.i(0),
    _v297 = _v0.i(0),
    _v298 = _v0.i(0),
    _v299 = _v0.i(0),
    _v300 = _v0.i(0),
    _v301 = _v0.i(0),
    _v302 = _v0.i(0),
    _v303 = _v0.i(0),
    _v304 = _v0.i(0),
    _v305 = _v0.i(0),
    _v306 = _v0.i(0),
    _v307 = _v0.i(0),
    _v308 = _v0.i(0),
    _v309 = _v0.i(0),
    _v310 = _v0.i(0),
    _v311 = _v0.i(0),
    _v312 = _v0.i(0),
    _v313 = _v0.i(0),
    _v314 = _v0.i(0);
  async function _v315({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v251.measureLatency)("getVideoMoments", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/moments?${(0, _v252.searchQueryString)(_v3)}&fields=${_v1.map(_v252.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v252.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v252.deepCamelCase)(_v1);
    });
  }
  _v0.i(0);
  var _v316 = _v0.i(0),
    _v317 = _v0.i(0),
    _v318 = _v0.i(0);
  let _v319 = (0, _v3.forwardRef)(({
      onClose: _v0,
      moments: _v1,
      videoLink: _v2,
      videoId: _v3,
      position: _v4
    }, _v5) => {
      let {
          query: _v6 = ""
        } = _v136(),
        {
          sendMomentClickEvent: _v7
        } = _v265(),
        _v8 = (0, _v3.useContext)(_v26.ViewerContext),
        _v9 = (0, _v311.useTheme)(),
        _v10 = _v9?.fonts?.heading,
        _v11 = !_v8?.isSimplifiedSite,
        _v12 = (0, _v3.useRef)(null),
        {
          data: _v13,
          total: _v14
        } = _v1,
        _v15 = () => {
          _v7({
            position: _v4,
            entityId: _v3
          });
        },
        _v16 = window.innerHeight < 765;
      return (0, _v1.jsxs)(_v320, {
        ref: _v5,
        children: [(0, _v1.jsxs)(_v321, {
          children: [(0, _v1.jsx)("span", {
            children: _v14 > 100 ? (0, _v48.translate)({
              singular: "Showing {COUNT} of 100+ results",
              count: _v13.length,
              replacements: {
                COUNT: _v13.length
              },
              dictionary: {
                es: {
                  singular: "Mostrando {COUNT} de más de 100 resultados"
                },
                "de-DE": {
                  singular: "Zeigt {COUNT} von 100+ Ergebnissen"
                },
                "fr-FR": {
                  singular: "Affichage de {COUNT} résultats sur plus de 100"
                },
                "ja-JP": {
                  singular: "結果100件以上のうち{COUNT}件を表示しています"
                },
                "ko-KR": {
                  singular: "100개 이상의 결과 중 {COUNT}개 표시"
                },
                "pt-BR": {
                  singular: "Mostrando {COUNT} de mais de 100 resultados"
                },
                "zh-CN": {
                  singular: "正在显示 {COUNT}/100+ 个结果"
                }
              }
            }) : (0, _v48.translate)({
              singular: "Showing 1 of 1 result",
              plural: "Showing {COUNT} of {TOTAL} results",
              count: _v14,
              replacements: {
                COUNT: _v13.length,
                TOTAL: _v14
              },
              dictionary: {
                es: {
                  singular: "Mostrando 1 de 1 resultado",
                  plural: "Mostrando {COUNT} de {TOTAL} resultados"
                },
                "de-DE": {
                  singular: "Zeigt 1 von 1 Ergebnissen",
                  plural: "Zeigt {COUNT} von {TOTAL} Ergebnissen"
                },
                "fr-FR": {
                  singular: "Affichage du seul résultat",
                  plural: "Affichage de {COUNT} résultats sur {TOTAL}"
                },
                "ja-JP": {
                  singular: "結果1件のうち1件を表示しています",
                  plural: "結果{TOTAL}件のうち{COUNT}件を表示しています"
                },
                "ko-KR": {
                  singular: "결과 1개 중 1개 표시",
                  plural: "결과 {TOTAL}개 중 {COUNT}개 표시"
                },
                "pt-BR": {
                  singular: "Mostrando 1 de 1 resultado",
                  plural: "Mostrando {COUNT} de {TOTAL} resultados"
                },
                "zh-CN": {
                  singular: "正在显示 1/1 个结果",
                  plural: "正在显示 {COUNT}/{TOTAL} 个结果"
                }
              }
            })
          }), (0, _v1.jsx)(_v158.IconButton, {
            "aria-label": "close moments popover",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v317.ChevronUpSmall, {
              boxSize: "xs"
            }),
            size: "sm",
            onClick: _v0
          })]
        }), (0, _v1.jsx)(_v322, {
          ref: _v12,
          hasOverflow: (_v0 => {
            if (_v0) return _v0.scrollHeight > _v0.clientHeight;
          })(_v12.current),
          isWindowHeightSmall: _v16,
          children: _v13.map(({
            id: _v0,
            thumbnail: _v1,
            contents: _v2,
            contentsHighlight: _v3,
            startTime: _v4
          }) => {
            let _v5 = _v3.match("<b>(.*?)</b>")?.[1] || _v6;
            return (0, _v1.jsxs)(_v323, {
              "data-id": _v0,
              href: _v117(_v2, _v4, _v5, _v11),
              onClick: _v15,
              children: [(0, _v1.jsx)(_v324, {
                src: _v1?.url,
                alt: "moment thumbnail"
              }), (0, _v1.jsx)(_v325, {
                children: (0, _v187.secondsToDisplay)(Math.floor(_v4 / 0))
              }), (0, _v1.jsx)(_v316.Paragraph, {
                size: "sm",
                margin: "0",
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                sx: {
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": "2"
                },
                children: (0, _v1.jsx)(_v310.Highlight, {
                  query: _v5,
                  styles: {
                    fontFamily: _v10,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: ((_v0, _v1, _v2 = 20, _v3 = 50) => {
                    let _v4 = _v0.length,
                      _v5 = _v0.toLowerCase(),
                      _v6 = _v1.toLowerCase();
                    if (_v4 <= _v2 + _v3 || "" === _v1.trim() || !_v5.includes(_v6)) return _v0;
                    {
                      let _v0 = _v0.replace(/\s+/g, " "),
                        _v1 = ((_v0 = "") => _v0.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").trim())(_v1),
                        _v2 = RegExp(`(^|\\s).{0,${_v2}}${_v1}.{0,${_v3}}(\\s|$)`, "i"),
                        _v3 = _v0.match(_v2),
                        _v4 = _v3 ? _v3[0].trim() : "",
                        _v5 = _v0.indexOf(_v4),
                        _v6 = _v5 + _v4.length < _v0.length ? "..." : "";
                      return `${0 === _v5 ? "" : "..."}${_v4}${_v6}`;
                    }
                  })(_v2, _v5)
                })
              })]
            }, _v0);
          })
        }), _v14 > 4 && (0, _v1.jsx)(_v156.Box, {
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "lg",
          paddingY: "md",
          children: (0, _v1.jsx)(_v157.Button, {
            variant: "secondary",
            rightIcon: (0, _v1.jsx)(_v318.ArrowRight, {
              boxSize: "2xs"
            }),
            size: "md",
            as: "a",
            href: _v117(_v2, _v13[0].startTime, _v6, _v11),
            onClick: _v15,
            children: _v14 > 10 ? (0, _v48.translate)({
              singular: "See video for all results",
              dictionary: {
                es: {
                  singular: "Ver video con todos los resultados"
                },
                "de-DE": {
                  singular: "Siehe Video für alle Ergebnisse"
                },
                "fr-FR": {
                  singular: "Voir la vidéo pour tous les résultats"
                },
                "ja-JP": {
                  singular: "すべての結果について動画を見る"
                },
                "ko-KR": {
                  singular: "동영상 내 모든 결과 보기"
                },
                "pt-BR": {
                  singular: "Veja o vídeo para conferir todos os resultados"
                },
                "zh-CN": {
                  singular: "查看所有结果的视频"
                }
              }
            }) : (0, _v48.translate)({
              singular: "See video",
              dictionary: {
                es: {
                  singular: "Ver el video"
                },
                "de-DE": {
                  singular: "Siehe Video"
                },
                "fr-FR": {
                  singular: "Voir la vidéo"
                },
                "ja-JP": {
                  singular: "動画を見る"
                },
                "ko-KR": {
                  singular: "동영상 보기"
                },
                "pt-BR": {
                  singular: "Ver o vídeo"
                },
                "zh-CN": {
                  singular: "查看视频"
                }
              }
            })
          })
        })]
      });
    }),
    _v320 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      flexDirection: "column",
      width: (0, _v9.rem)(432),
      padding: `${(0, _v9.rem)(8)} 0 0 ${(0, _v9.rem)(16)}`,
      ..._v0
    }),
    _v321 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      padding: `0 ${(0, _v9.rem)(16)} 0 ${(0, _v9.rem)(6)}`,
      marginBottom: "sm",
      fontSize: "header-sm",
      fontWeight: "medium",
      lineHeight: (0, _v9.rem)(20),
      color: "text-primary",
      ..._v0
    }),
    _v322 = (0, _v3.forwardRef)(({
      hasOverflow: _v0,
      isWindowHeightSmall: _v1,
      ..._v2
    }, _v3) => (0, _v1.jsx)(_v156.Box, {
      ref: _v3,
      maxHeight: _v1 ? (0, _v9.rem)(182) : (0, _v9.rem)(260),
      overflowY: "scroll",
      marginRight: _v0 ? (0, _v9.rem)(6) : (0, _v9.rem)(16),
      paddingRight: _v0 ? (0, _v9.rem)(4) : void 0,
      paddingBottom: "sm",
      sx: {
        "::-webkit-scrollbar": {
          width: (0, _v9.rem)(6),
          backgroundColor: "transparent"
        },
        "::-webkit-scrollbar-thumb": {
          borderRadius: (0, _v9.rem)(50),
          background: _v34,
          filter: "opacity(30%)"
        }
      },
      ..._v2
    })),
    _v323 = _v0 => (0, _v1.jsx)(_v157.Button, {
      as: "a",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      padding: "sm",
      gap: "sm",
      borderRadius: "sm",
      textDecoration: "none",
      cursor: "pointer",
      height: "unset",
      whiteSpace: "unset",
      fontSize: "body-sm",
      variant: "tertiary",
      ..._v0
    }),
    _v324 = _v0 => (0, _v1.jsx)(_v156.Box, {
      as: "img",
      width: (0, _v9.rem)(80),
      height: (0, _v9.rem)(49.6),
      flexShrink: "0",
      borderRadius: "sm",
      ..._v0
    }),
    _v325 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      color: "text-primary",
      backgroundColor: "fill-component",
      height: (0, _v9.rem)(24),
      blur: "md",
      padding: "xs",
      alignItems: "center",
      borderRadius: "xs",
      ..._v0
    });
  function _v326({
    videoId: _v0,
    videoLink: _v1,
    position: _v2,
    handleNoMoments: _v3
  }) {
    let {
        query: _v4
      } = _v136(),
      [_v5, _v6] = (0, _v3.useState)(!1),
      [_v7, _v8] = (0, _v276.useIsVisible)({
        threshold: 1
      }),
      _v9 = (0, _v3.useRef)(null),
      {
        data: _v10,
        isLoading: _v11,
        error: _v12
      } = function (_v0, _v1) {
        let _v2 = "function" == typeof _v0 ? _v0() : _v0,
          {
            baseUrl: _v3,
            jwt: _v4,
            xVimeoPage: _v5,
            locale: _v6
          } = (0, _v130.useGctlConfig)();
        return (0, _v254.default)(_v2 ? `/videos/${_v2.where.videoId}/moments${(0, _v256.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v315({
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
      }({
        select: _v101,
        where: {
          videoId: _v0
        },
        query: {
          perPage: 10,
          filterType: "transcript-single-index",
          query: _v4,
          sort: "chronological"
        }
      }, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      });
    (0, _v3.useEffect)(() => {
      _v8 || _v6(!1);
    }, [_v8]);
    let _v13 = _v0 => {
      _v0.preventDefault(), _v0.stopPropagation();
    };
    (_v10?.data.length === 0 || _v12) && _v3();
    let _v14 = (0, _v3.useMemo)(() => {
      let _v0 = _v7.current?.getClientRects()[0];
      if (_v0 && _v5) {
        let _v0 = window.innerHeight - _v0.bottom;
        if (_v0?.top > _v0) return "top-start";
      }
      return "bottom-start";
    }, [_v7, _v5]);
    (0, _v312.useOutsideClick)({
      ref: _v9,
      handler: () => _v6(!1)
    });
    let _v15 = _v10?.data?.slice(0, 1)[0]?.thumbnail?.url;
    if (_v11 || !_v10 || 0 === _v10.data.length) return null;
    let _v16 = _v10.data.length < 3 ? _v10?.data.length - 1 : 2;
    return (0, _v1.jsxs)(_v195.Popover, {
      placement: _v14,
      isOpen: _v5,
      offset: [0, -25],
      flip: !1,
      strategy: "fixed",
      children: [(0, _v1.jsx)(_v196.PopoverTrigger, {
        children: (0, _v1.jsx)(_v157.Button, {
          ref: _v7,
          onClick: _v0 => {
            _v13(_v0), _v6(!_v5);
          },
          rightIcon: (0, _v1.jsx)(_v313.ChevronDownSmall, {}),
          size: "xs",
          padding: "xs",
          "data-id": "moments-trigger-button",
          backgroundColor: "fill-component",
          color: "text-primary",
          width: "min-content",
          variant: "secondary",
          children: (0, _v1.jsxs)(_v8.Flex, {
            gap: "xs",
            alignItems: "center",
            children: [(0, _v1.jsxs)(_v329, {
              children: [(0, _v1.jsx)(_v156.Box, {
                ..._v327
              }), [...Array(_v16)].map((_v0, _v1) => (0, _v1.jsx)(_v330, {}, _v1)), _v15 && (0, _v1.jsx)(_v328, {
                src: _v15,
                alt: "moment thumbnail"
              })]
            }), (0, _v1.jsx)("div", {
              children: _v10 && _v10?.total > 100 ? (0, _v48.translate)({
                singular: "100+ results in this video",
                dictionary: {
                  es: {
                    singular: "Más de 100 resultados en este video"
                  },
                  "de-DE": {
                    singular: "100+ Ergebnisse in diesem Video"
                  },
                  "fr-FR": {
                    singular: "Plus de 100 résultats dans cette vidéo"
                  },
                  "ja-JP": {
                    singular: "この動画の100件以上の結果"
                  },
                  "ko-KR": {
                    singular: "이 동영상 내 결과 100개 이상"
                  },
                  "pt-BR": {
                    singular: "Mais de 100 resultados neste vídeo"
                  },
                  "zh-CN": {
                    singular: "此视频中有 100 多个结果"
                  }
                }
              }) : (0, _v48.translate)({
                singular: "1 result in this video",
                plural: "{COUNT} results in this video",
                count: _v10?.total,
                replacements: {
                  COUNT: _v10?.total
                },
                dictionary: {
                  es: {
                    singular: "1 resultado en este video",
                    plural: "{COUNT} resultados en este video"
                  },
                  "de-DE": {
                    singular: "1 Ergebnis in diesem Video",
                    plural: "{COUNT} Ergebnisse in diesem Video"
                  },
                  "fr-FR": {
                    singular: "1 résultat dans cette vidéo",
                    plural: "{COUNT} résultats dans cette vidéo"
                  },
                  "ja-JP": {
                    singular: "この動画の1件の結果",
                    plural: "この動画の{COUNT}件の結果"
                  },
                  "ko-KR": {
                    singular: "이 동영상 내 결과 1개",
                    plural: "이 동영상 내 결과 {COUNT}개"
                  },
                  "pt-BR": {
                    singular: "1 resultado neste vídeo",
                    plural: "{COUNT} resultados neste vídeo"
                  },
                  "zh-CN": {
                    singular: "此视频中有 1 个结果",
                    plural: "此视频中有 {COUNT} 个结果"
                  }
                }
              })
            })]
          })
        })
      }), (0, _v1.jsx)(_v197.PopoverContent, {
        borderRadius: "xl",
        backgroundColor: "fill-blur",
        padding: "0",
        onClick: _v0 => _v0.stopPropagation(),
        children: _v10 && (0, _v1.jsx)(_v319, {
          ref: _v9,
          onClose: _v0 => {
            _v13(_v0), _v6(!1);
          },
          moments: _v10,
          videoLink: _v1,
          position: _v2,
          videoId: _v0
        })
      })]
    });
  }
  let _v327 = {
      width: (0, _v9.rem)(22),
      height: (0, _v9.rem)(16),
      borderRadius: "3px",
      background: "blackAlpha.300"
    },
    _v328 = _v0 => (0, _v1.jsx)(_v156.Box, {
      ..._v327,
      as: "img",
      position: "absolute",
      "z-index": "100",
      "border-width": "0.5px",
      ..._v0
    }),
    _v329 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ..._v0
    }),
    _v330 = () => (0, _v1.jsx)(_v314.Icon, {
      color: "blackAlpha.300",
      width: "4px !important",
      height: "16px",
      viewBox: "0 0 4 16",
      children: (0, _v1.jsx)("path", {
        d: "M0.666687 16H1.50975C2.88509 16 4.00002 14.5673 4.00002 12.8V3.2C4.00002 1.43269 2.88509 0 1.50975 0H0.666687C1.18368 0.586356 1.50975 1.44425 1.50975 2.4V13.6C1.50975 14.5558 1.18368 15.4136 0.666687 16Z",
        fill: "currentColor"
      })
    }),
    _v331 = ({
      title: _v0,
      subTitle: _v1,
      timestamp: _v2,
      thumbnail: _v3,
      location: _v4,
      href: _v5,
      playerLink: _v6,
      isSelectable: _v7,
      isSelected: _v8 = !1,
      position: _v9,
      uri: _v10,
      onToggleSelected: _v11,
      hoverActions: _v12,
      menuButton: _v13,
      showCheckboxColumn: _v14,
      showLocationColumn: _v15,
      showModifiedColumn: _v16,
      gridColumns: _v17,
      type: _v18
    }) => {
      let {
          sendHoverEvent: _v19,
          sendClickEvent: _v20
        } = _v265(),
        _v21 = (0, _v3.useRef)(void 0),
        _v22 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          capabilities: {
            hasInVideoSearch: _v23
          }
        } = (0, _v24.useCapability)(["hasInVideoSearch"], _v22?.teamUser?.ownerId),
        {
          query: _v24 = ""
        } = _v136(),
        _v25 = (0, _v311.useTheme)(),
        _v26 = _v25?.fonts?.heading,
        _v27 = "video" === _v18,
        _v28 = _v27 ? _v103(_v10) : void 0,
        [_v29, _v30] = (0, _v3.useState)(!!_v28 && _v23 && !!_v24),
        _v31 = _v18 === _v69 ? "events" : _v18,
        _v32 = _v6 ?? _v5,
        _v33 = () => {
          _v20({
            entityType: _v31,
            position: _v9,
            uri: _v10
          });
        };
      return (0, _v1.jsx)(_v294.ContentRow, {
        listGridColumns: "auto",
        isSelected: _v8,
        onToggleSelected: _v11,
        cursor: "pointer",
        onClick: _v33,
        onContextMenu: _v33,
        padding: "0",
        onMouseEnter: () => {
          _v21.current = setTimeout(() => {
            _v19({
              entityType: _v31,
              position: _v9,
              uri: _v10
            });
          }, 500);
        },
        onMouseLeave: () => clearTimeout(_v21.current),
        children: (0, _v1.jsxs)(_v237.Grid, {
          w: "100%",
          gridTemplateColumns: _v17,
          alignItems: "center",
          padding: "sm",
          gap: ".5rem",
          children: [_v14 && (0, _v1.jsx)(_v294.ContentRow.Column, {
            children: (_v27 || _v18 === _v69) && (0, _v1.jsx)(_v294.ContentRow.SelectCheckbox, {
              size: "md",
              isDisabled: !_v7
            })
          }), (0, _v1.jsx)(_v294.ContentRow.Column, {
            href: _v5,
            children: _v3
          }), (0, _v1.jsx)(_v294.ContentRow.Column, {
            href: _v5,
            overflow: "hidden",
            margin: `0 0 0 ${(0, _v9.rem)(4)}`,
            children: (0, _v1.jsxs)(_v8.Flex, {
              flexDir: "column",
              gap: "sm",
              width: "100%",
              children: [(0, _v1.jsx)(_v159.Text, {
                variant: "body-lg",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: (0, _v1.jsx)(_v310.Highlight, {
                  query: _v24,
                  styles: {
                    fontFamily: _v26,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v0
                })
              }), _v1 && (0, _v1.jsx)(_v159.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: (0, _v1.jsx)(_v310.Highlight, {
                  query: _v24,
                  styles: {
                    fontFamily: _v26,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v1
                })
              }), _v29 && (0, _v1.jsx)(_v326, {
                videoId: _v28,
                videoLink: _v32,
                position: _v9,
                handleNoMoments: () => _v30(!1)
              })]
            })
          }), _v15 && (0, _v1.jsx)(_v294.ContentRow.Column, {
            href: _v4?.href || _v5,
            overflow: "auto",
            margin: `0 0 0 ${(0, _v9.rem)(24)}`,
            onClick: _v0 => {
              _v0.stopPropagation();
            },
            children: (0, _v1.jsx)(_v8.Flex, {
              alignItems: "center",
              width: "100%",
              children: (0, _v1.jsx)(_v159.Text, {
                variant: "body-md",
                color: "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                _hover: _v4?.href ? {
                  textDecoration: "underline",
                  color: "text-primary"
                } : void 0,
                children: _v4?.name
              })
            })
          }), _v16 && (0, _v1.jsx)(_v294.ContentRow.Column, {
            href: _v5,
            overflow: "hidden",
            children: (0, _v1.jsx)(_v159.Text, {
              width: "100%",
              variant: "body-md",
              color: "text-secondary",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              children: _v2
            })
          }), (0, _v1.jsxs)(_v294.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: [(0, _v1.jsx)(_v156.Box, {
              children: _v13
            }), _v16 && _v12]
          })]
        })
      });
    };
  var _v332 = _v0.i(0);
  let _v333 = () => {
      let {
          isSideNavOpen: _v0
        } = (0, _v3.useContext)(_v332.VideoLibraryLayoutContext),
        {
          panelStatus: _v1
        } = (0, _v3.useContext)(_v19),
        _v2 = (0, _v15.useBreakpointValue)(_v33, {
          ssr: !1
        }),
        _v3 = _v2 === _v33.base,
        _v4 = _v2 === _v33.sm,
        _v5 = !0,
        _v6 = !0,
        _v7 = !0,
        _v8 = _v3 || _v4 ? (0, _v9.rem)(114) : (0, _v9.rem)(142),
        _v9 = `${(0, _v9.rem)(32)} ${_v8} 3fr 2fr 1.5fr .5fr`;
      return _v3 && (_v5 = !1, _v6 = !1, _v7 = !1, _v9 = `${_v8} 4fr .5fr`), _v4 && (_v7 = !1, _v5 = !1, _v9 = `${_v8} 3fr 2fr .5fr`), _v2 === _v33.lg && _v0 && _v1 && (_v7 = !1, _v9 = `${(0, _v9.rem)(32)} ${_v8} 3fr 2fr .5fr`), {
        showCheckboxColumn: _v5,
        showLocationColumn: _v6,
        showModifiedColumn: _v7,
        gridColumns: _v9,
        thumbnailColumnWidth: _v8
      };
    },
    _v334 = ({
      liveEventItem: _v0,
      index: _v1,
      onToggleSelected: _v2
    }) => {
      let _v3 = _v333(),
        _v4 = (0, _v14.useViewer)(),
        [_v5] = (0, _v293.useMediaQuery)(_v43),
        {
          getEventShareLoopTrackingParams: _v6
        } = (0, _v309.useShareLoopTrackingParams)(),
        {
          revalidateAll: _v7
        } = _v263(),
        _v8 = _v0.liveEvent,
        {
          createdTime: _v9,
          metadata: _v10,
          nextOccurrenceTime: _v11,
          link: _v12,
          pictures: _v13,
          title: _v14,
          uri: _v15,
          user: _v16,
          status: _v17,
          viewLink: _v18,
          settingsLink: _v19,
          parentFolder: _v20
        } = _v8,
        _v21 = !!_v10?.interactions?.edit?.uri,
        _v22 = !!_v13?.uri,
        _v23 = !!_v11 && (0, _v306.getHasDatePassed)(_v11),
        _v24 = (0, _v308.useEventScheduledAt)(_v8, _v4?.locale ?? "en-US"),
        _v25 = (0, _v307.idFromUri)(_v16.uri),
        _v26 = _v6(_v303.PAGE.SEARCH),
        _v27 = `${_v4?.vimeoHttpsUrl ?? ""}${_v18}${_v26}`;
      return (0, _v1.jsx)(_v331, {
        type: _v69,
        href: _v21 ? _v19 : _v12,
        title: _v14,
        position: _v1,
        uri: _v15,
        isSelectable: _v0.isSelectable,
        isSelected: _v0.isSelected,
        onToggleSelected: () => _v2(_v15),
        thumbnail: (0, _v1.jsx)(_v304.EventThumbnail, {
          thumbnail: _v22 ? _v13.sizes[3].link : "",
          nextOccurrenceTime: _v11,
          isLive: _v10?.connections?.liveVideo?.status === "streaming",
          isUpcoming: !!_v11,
          hasScheduledDatePassed: _v23,
          status: _v17,
          minWidth: (0, _v9.rem)(_v5 ? "114" : "142")
        }),
        subTitle: _v24,
        timestamp: _v110(_v9, _v4?.locale),
        location: _v114(_v0),
        ..._v3,
        menuButton: (0, _v1.jsx)(_v305.EventMenu, {
          liveEvent: _v8,
          folder: {
            uri: _v20?.uri,
            name: _v20?.name,
            isPrivateToUser: _v20?.isPrivateToUser
          },
          onDelete: () => _v7(new Set(_v15)),
          onMoveSuccess: () => _v7(),
          eventLink: _v27,
          ownerId: _v25,
          analytics: {
            pageName: "search_result_page",
            target: "list",
            location: "event_list"
          }
        })
      }, _v15);
    };
  var _v335 = _v0.i(0),
    _v336 = _v0.i(0);
  let _v337 = _v0 => {
      let {
        isActive: _v1,
        sortDirection: _v2
      } = _v0;
      return _v1 && _v2 ? "asc" === _v2 ? (0, _v1.jsx)(_v336.ArrowUp, {}) : (0, _v1.jsx)(_v335.ArrowDown, {}) : null;
    },
    _v338 = ({
      showCheckboxColumn: _v0,
      showLocationColumn: _v1,
      showModifiedColumn: _v2,
      gridColumns: _v3
    }) => {
      let {
          sendSortEvent: _v4
        } = _v265(),
        {
          sort: _v5,
          onLibraryFilterChange: _v6,
          type: _v7
        } = _v136(),
        [_v8, _v9] = _v116(_v5),
        _v10 = _v8 === _v41,
        _v11 = _v7 === _v70.options.showcase.value,
        _v12 = _v5 || _v93.relevance.value,
        _v13 = _v0 => {
          let _v1 = _v8 === _v0 ? `${_v0}_${"asc" === _v9 ? "desc" : "asc"}` : (_v0 => {
            switch (_v0) {
              case _v39:
                return _v77.titleAsc.value;
              case _v40:
                return _v77.lastModified.value;
              case _v41:
                return _v77.lastAdded.value;
              default:
                return _v77.relevance.value;
            }
          })(_v0);
          _v6(_v36, _v1);
          let _v2 = null;
          for (let _v0 of Object.values(_v93)) if (_v0.value === _v1) {
            _v2 = _v0.untranslatedText;
            break;
          }
          _v4({
            copy: _v2,
            value: _v1,
            previousValue: _v12
          });
        },
        _v14 = _v10 ? _v50.ADDED : _v50.MODIFIED;
      return (0, _v1.jsxs)(_v294.ContentRow, {
        listGridColumns: _v3,
        disableHover: !0,
        position: "sticky",
        top: "0",
        width: "100%",
        background: "background",
        borderRadius: "0",
        zIndex: "10",
        height: (0, _v9.rem)("40"),
        alignContent: "center",
        children: [_v0 && (0, _v1.jsx)(_v294.ContentRow.Column, {
          children: (0, _v1.jsx)(_v157.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-14),
            onClick: () => _v13(_v39),
            rightIcon: (0, _v1.jsx)(_v337, {
              isActive: _v8 === _v39,
              sortDirection: _v9
            }),
            children: _v50.TITLE
          })
        }), (0, _v1.jsx)(_v294.ContentRow.Column, {
          margin: "10px",
          children: !_v0 && (0, _v1.jsx)(_v157.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-32),
            onClick: () => _v13(_v39),
            rightIcon: (0, _v1.jsx)(_v337, {
              isActive: _v8 === _v39,
              sortDirection: _v9
            }),
            children: _v50.TITLE
          })
        }), (0, _v1.jsx)(_v294.ContentRow.Column, {
          overflow: "hidden",
          children: "--"
        }), _v1 && (0, _v1.jsx)(_v294.ContentRow.Column, {
          overflow: "hidden",
          margin: `0 0 0 ${(0, _v9.rem)(24)}`,
          children: (0, _v1.jsx)(_v159.Text, {
            variant: "heading-xs",
            children: _v11 ? (0, _v48.translate)({
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
            }) : _v50.LOCATION
          })
        }), _v2 && (0, _v1.jsx)(_v294.ContentRow.Column, {
          children: (0, _v1.jsx)(_v157.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-12),
            rightIcon: (0, _v1.jsx)(_v337, {
              isActive: _v8 === _v41 || _v8 === _v40,
              sortDirection: _v9
            }),
            onClick: () => _v10 ? _v13(_v41) : _v13(_v40),
            children: _v14
          })
        }), (0, _v1.jsx)(_v294.ContentRow.Column, {
          children: "--"
        })]
      });
    };
  var _v339 = _v0.i(0),
    _v340 = _v0.i(0),
    _v341 = _v0.i(0),
    _v342 = _v0.i(0),
    _v343 = _v0.i(0);
  let _v344 = ({
      thumbnails: _v0
    }) => {
      let [_v1] = (0, _v293.useMediaQuery)(_v43),
        _v2 = _v1 ? "114" : "142";
      return _v0?.[0] ? (0, _v1.jsx)(_v294.ContentRow.Thumbnail, {
        src: _v0[0],
        alt: "showcase thumbnail",
        minWidth: (0, _v9.rem)(_v2)
      }) : (0, _v1.jsx)(_v294.ContentRow.DefaultThumbnail, {
        minWidth: (0, _v9.rem)(_v2),
        children: (0, _v1.jsx)(_v343.VideosStackFilled, {
          color: "text-tertiary",
          boxSize: "sm",
          opacity: "60%"
        })
      });
    },
    _v345 = ({
      showcase: _v0,
      index: _v1
    }) => {
      var _v2, _v3;
      let _v4,
        _v5,
        _v6,
        _v7 = _v333(),
        _v8 = (0, _v14.useViewer)(),
        {
          type: _v9,
          sort: _v10
        } = _v136(),
        {
          revalidateAll: _v11
        } = _v263(),
        _v12 = (0, _v302.useNotification)(),
        _v13 = (0, _v342.useShowcaseDeleteModal)(),
        {
          getShowcaseShareLoopTrackingParams: _v14
        } = (0, _v309.useShareLoopTrackingParams)(),
        {
          createdTime: _v15,
          embed: _v16,
          metadata: _v17,
          name: _v18,
          pictures: _v19,
          uri: _v20,
          link: _v21,
          privacy: _v22,
          modifiedTime: _v23
        } = _v0,
        _v24 = _v9 === _v70.options.showcase.value,
        _v25 = (_v2 = _v20, _v3 = !!_v16, (_v6 = ((_v5 = _v2.match(/albums\/\d+/g)) && (_v4 = _v5[0].split("/").pop()), _v4)) ? _v3 ? `/manage/showcases/${_v6}` : `/showcase/${_v6}` : "/library/showcases"),
        _v26 = _v19.slice(0, 3).map(_v0 => {
          let _v1 = _v0?.sizes?.[1]?.link;
          if (_v1) {
            let _v0;
            return (_v0 = new URL(_v1)).searchParams.delete("r"), _v0.toString();
          }
          return "";
        }),
        _v27 = (0, _v341.useDeleteShowcase)({
          onFailure: () => {
            _v13.setIsLoading(!1), _v12({
              content: _v50.GENERIC_ERROR,
              status: "error"
            });
          },
          onSuccess: ({
            name: _v0,
            uri: _v1
          }) => {
            _v12({
              content: _v50.deletedShowcase(_v0)
            }), _v11(new Set(_v1)), _v13.setIsLoading(!1), _v13.close();
          }
        });
      return (0, _v1.jsx)(_v331, {
        type: "showcase",
        href: _v25,
        title: _v18,
        position: _v1,
        uri: _v20,
        thumbnail: (0, _v1.jsx)(_v344, {
          thumbnails: _v26
        }),
        subTitle: (0, _v48.translate)({
          singular: "{NUM} video",
          plural: "{NUM} videos",
          count: _v17.connections.videos.total,
          replacements: {
            NUM: _v17.connections.videos.total
          },
          dictionary: {
            "de-DE": {
              singular: "{NUM} Video",
              plural: "{NUM} Videos"
            },
            "fr-FR": {
              singular: "{NUM} vidéo",
              plural: "{NUM} vidéos"
            },
            "ja-JP": {
              singular: "{NUM} 件の動画",
              plural: "{NUM}件の動画"
            },
            "ko-KR": {
              singular: "동영상 {NUM}개",
              plural: "동영상 {NUM}개"
            },
            "pt-BR": {
              singular: "{NUM} vídeo",
              plural: "{NUM} vídeos"
            },
            "zh-CN": {
              singular: "{NUM} 个视频",
              plural: "{NUM} 个视频"
            }
          }
        }),
        timestamp: _v110(_v10 === _v41 ? _v15 : _v23, _v8?.locale),
        location: {
          name: _v24 ? _v346[_v22.view] ?? _v22.view : _v50.SHOWCASES
        },
        ..._v7,
        menuButton: (0, _v1.jsx)(_v339.ShowcaseMenu, {
          canDelete: !!_v0?.metadata?.interactions?.delete,
          hasEmbedCode: !!_v0?.embed?.html,
          hasEmbedOnlyPrivacy: _v0?.privacy?.view === "embed_only",
          onCopyLink: () => {
            let _v0;
            _v0 = _v14(_v303.PAGE.SEARCH), (0, _v340.default)(`${_v21}${_v0}`) ? _v12({
              content: _v50.LINK_COPIED
            }) : _v12({
              content: _v50.GENERIC_ERROR,
              status: "error"
            });
          },
          onCopyEmbed: () => {
            var _v0;
            _v16?.html && (_v0 = _v16?.html, (0, _v340.default)(_v0) ? _v12({
              content: _v50.EMBED_CODE_COPIED
            }) : _v12({
              content: _v50.GENERIC_ERROR,
              status: "error"
            }));
          },
          onClickViewShowcase: () => {
            window.open(_v21, "_blank");
          },
          onDelete: () => {
            _v13.open({
              onConfirm: () => {
                _v13.setIsLoading(!0), _v27(_v0);
              },
              onDismiss: () => {
                _v13.close();
              },
              name: _v0.name
            });
          }
        })
      }, _v20);
    },
    _v346 = {
      anybody: _v50.PRIVACY_PUBLIC,
      embed_only: _v50.PRIVACY_EMBED,
      nobody: _v50.PRIVACY_NOBODY,
      password: _v50.PRIVACY_PASSWORD,
      team: _v50.PRIVACY_TEAM,
      unlisted: _v50.PRIVACY_UNLISTED
    },
    _v347 = ({
      items: _v0,
      onToggleSelected: _v1
    }) => {
      let _v2 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          revalidateAll: _v3,
          mutate: _v4
        } = _v263(),
        {
          openCopyVideoModal: _v5,
          copyVideoModal: _v6
        } = (0, _v301.useCopyVideoFlow)({
          onAfterCopySuccess: () => _v3()
        }),
        {
          sort: _v7
        } = _v136(),
        {
          notifyItemMoveSuccess: _v8
        } = (0, _v302.useNotifications)(),
        {
          hasVideoReviewPageDemo: _v9,
          canSeeUpsellModalOnShare: _v10,
          hasContentSpaceEnabled: _v11,
          hasMultipleReviewLinks: _v12
        } = _v27(),
        _v13 = _v11 ? (0, _v48.translate)({
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
        }) : (0, _v48.translate)({
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
        _v14 = _v333(),
        [_v15] = (0, _v293.useMediaQuery)(_v43),
        _v16 = _v15 ? "114" : "142",
        [_v17] = _v116(_v7),
        _v18 = _v17 === _v41,
        _v19 = ({
          selectedDestination: _v0,
          video: _v1
        }) => {
          _v3(), _v8(_v1.name, {
            label: "root" === _v0 ? _v13 : _v0.name,
            link: "root" === _v0 ? "/library" : _v115(_v0.uri)
          });
        },
        _v20 = ({
          uri: _v0,
          settings: {
            color: _v1
          },
          name: _v2
        }) => {
          _v4(_v0 => ({
            ..._v0,
            data: _v0?.data.map(_v0 => _v0.folder?.uri === _v0 ? {
              ..._v0,
              folder: {
                ..._v0.folder,
                name: _v2,
                settings: {
                  ..._v0?.folder?.settings,
                  color: _v1
                }
              }
            } : _v0)
          }));
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!_v15 && (0, _v1.jsx)(_v338, {
          ..._v14
        }), (0, _v1.jsx)(_v156.Box, {
          display: "flex",
          flexDir: "column",
          gap: (0, _v9.rem)(4),
          marginBottom: "lg",
          children: _v0?.map((_v0, _v1) => {
            if (_v0.video) {
              let {
                  video: _v0
                } = _v0,
                {
                  duration: _v1,
                  link: _v2,
                  manageLink: _v3,
                  name: _v4,
                  pictures: _v5,
                  uri: _v6,
                  description: _v7
                } = _v0,
                _v8 = _v18 ? _v0.createdTime : _v0.lastUserActionEventDate || "";
              return (0, _v1.jsx)(_v331, {
                type: _v0.type,
                title: _v4,
                subTitle: _v7 || "",
                position: _v1,
                uri: _v6,
                thumbnail: (0, _v1.jsx)(_v294.ContentRow.Thumbnail, {
                  alt: "",
                  src: _v5?.sizes[3].link,
                  badgeText: (0, _v187.secondsToDisplay)(_v1),
                  minWidth: (0, _v9.rem)(_v16)
                }),
                timestamp: _v110(_v8, _v2?.locale),
                location: _v114(_v0),
                href: _v3 ?? _v2,
                playerLink: _v2,
                isSelectable: _v0.isSelectable,
                isSelected: _v0.isSelected,
                ..._v14,
                onToggleSelected: () => _v1(_v6),
                hoverActions: (0, _v1.jsx)(_v297.ListViewHoverActionsContainer, {
                  children: (0, _v1.jsx)(_v296.VideoTopRightDecoration, {
                    video: _v0,
                    buttonVariant: "minimal",
                    flexDirection: "row",
                    location: "video_list",
                    pageName: _v303.PAGE.SEARCH
                  })
                }),
                menuButton: (0, _v1.jsx)(_v299.VideoMenu, {
                  video: _v0,
                  parentFolder: _v0.video.parentProject ?? void 0,
                  feature: "search",
                  analytics: {
                    location: "video_list",
                    element: "ellipses"
                  },
                  vimeoClickAnalytics: {
                    location: "video_list"
                  },
                  onDelete: () => {
                    _v3(new Set(_v0.uri));
                  },
                  onMoveSuccess: _v19,
                  hasReviewPageLinkUpsell: _v9,
                  hasUpsellInShareModal: _v10,
                  hasMultipleReviewLinks: _v12,
                  onCopyVideo: () => _v5(_v0)
                })
              }, _v6);
            }
            if (_v0.folder && _v0.folder.uri) {
              let _v0,
                {
                  folder: _v1
                } = _v0,
                {
                  uri: _v2,
                  name: _v3,
                  settings: _v4,
                  metadata: _v5
                } = _v1,
                _v6 = _v18 ? _v1.createdTime : _v1.lastUserActionEventDate || "";
              return (0, _v1.jsx)(_v331, {
                type: _v0.type,
                href: _v115(_v2),
                title: _v3,
                position: _v1,
                uri: _v2,
                thumbnail: (0, _v1.jsx)(_v300.FolderRowThumbnail, {
                  backgroundColor: _v4?.color,
                  minWidth: (0, _v9.rem)(_v16)
                }),
                subTitle: (_v0 = _v5?.connections?.items?.total, (0, _v48.translate)({
                  singular: "{ITEMS} item",
                  plural: "{ITEMS} items",
                  count: _v0,
                  replacements: {
                    ITEMS: _v0
                  },
                  dictionary: {
                    es: {
                      singular: "{ITEMS} elemento",
                      plural: "{ITEMS} elementos"
                    },
                    "de-DE": {
                      singular: "{ITEMS} Element",
                      plural: "{ITEMS} Elemente"
                    },
                    "fr-FR": {
                      singular: "{ITEMS} élément",
                      plural: "{ITEMS} éléments"
                    },
                    "ja-JP": {
                      singular: "{ITEMS} 件のアイテム",
                      plural: "{ITEMS} 件のアイテム"
                    },
                    "ko-KR": {
                      singular: "{ITEMS}개 항목",
                      plural: "{ITEMS}개 항목"
                    },
                    "pt-BR": {
                      singular: "{ITEMS} iten",
                      plural: "{ITEMS} itens"
                    },
                    "zh-CN": {
                      singular: "{ITEMS} 项",
                      plural: "{ITEMS} 项"
                    }
                  }
                })),
                timestamp: _v110(_v6, _v2?.locale),
                location: _v114(_v0),
                ..._v14,
                hoverActions: (0, _v1.jsx)(_v297.ListViewHoverActionsContainer, {
                  children: (0, _v1.jsx)(_v295.FolderTopRightDecoration, {
                    folder: _v1,
                    buttonVariant: "minimal",
                    flexDirection: "row",
                    location: "video_list"
                  })
                }),
                menuButton: (0, _v1.jsx)(_v298.FolderMenu, {
                  folder: _v1,
                  analytics: {
                    product: "Workflow",
                    feature: "search",
                    location: "folder_card"
                  },
                  onMoveSuccess: () => _v3(),
                  onDelete: () => _v3(new Set(_v2)),
                  onSettingsChange: _v20
                })
              }, _v2);
            }
            return _v0?.showcase?.uri ? (0, _v1.jsx)(_v345, {
              showcase: _v0.showcase,
              index: _v1
            }, _v0.showcase.uri) : _v0?.liveEvent?.uri ? (0, _v1.jsx)(_v334, {
              liveEventItem: _v0,
              index: _v1,
              onToggleSelected: _v1
            }, _v0.liveEvent.uri) : (0, _v1.jsx)(_v1.Fragment, {});
          })
        }), _v6]
      });
    };
  var _v348 = _v0.i(0),
    _v349 = _v0.i(0),
    _v350 = _v0.i(0);
  let _v351 = () => {
    let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
      _v1 = (0, _v349.useUpsellModal)(),
      _v2 = _v0?.teamUser ? "enterprise" === _v0.teamUser.accountType : _v0?.user?.account === "enterprise";
    return (0, _v1.jsx)(_v8.Flex, {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      children: (0, _v1.jsx)(_v350.EmptyState, {
        cta: (0, _v1.jsxs)(_v8.Flex, {
          gap: "lg",
          children: [(0, _v1.jsx)(_v157.Button, {
            variant: "secondary",
            as: "a",
            href: "/live/select",
            children: _v50.START_FREE_DEMO
          }), (0, _v1.jsx)(_v157.Button, {
            variant: "upsell",
            as: "a",
            href: _v2 ? "/enterprise/contact?mkc=%230920" : void 0,
            cursor: "pointer",
            onClick: () => {
              _v2 || _v1.open({
                tracking: {
                  params: {
                    feature: "live_events_setting",
                    location: "events_state",
                    page: "search_result_page",
                    upsell_name: "events_generic"
                  },
                  paywallTracking: {
                    paywallTrigger: "search_results_live_events_upgrade_button",
                    paywallLocation: "search_results",
                    paywallType: "popup",
                    paywallFeature: "live_events"
                  }
                },
                onClose: () => _v1.close(),
                modalConfig: {
                  mkcCode: "ent-upgrade-bottom",
                  headerText: _v50.UPSELL_HEADER,
                  subHeaderText: _v50.UPSELL_MODAL_SUBHEADER,
                  excludePlans: ["starter", "standard", "creator"],
                  planOverrides: {
                    ADVANCE: {
                      subHeading: _v50.ADVANCED_PLAN_SUBHEADER,
                      featuresList: _v50.ADVANCED_PLAN_FEATURES_LIST
                    },
                    ENTERPRISE: {
                      subHeading: _v50.ENTERPRISE_PLAN_SUBHEADER,
                      featuresList: _v50.ENTERPRISE_PLAN_FEATURES_LIST
                    }
                  }
                },
                templateType: "default"
              });
            },
            children: _v2 ? _v50.CONTACT_US : _v50.UPGRADE
          })]
        }),
        header: _v50.UPSELL_HEADER,
        subheader: _v50.UPSELL_SUBHEADER,
        icon: (0, _v1.jsx)(_v348.CameraOn, {
          boxSize: "2xl"
        })
      })
    });
  };
  var _v352 = _v0.i(0);
  let _v353 = () => {
      let _v0 = _v333(),
        {
          showCheckboxColumn: _v1,
          showLocationColumn: _v2,
          showModifiedColumn: _v3,
          gridColumns: _v4,
          thumbnailColumnWidth: _v5
        } = _v0;
      return (0, _v1.jsx)(_v8.Flex, {
        direction: "column",
        width: "100%",
        gap: "sm",
        children: (0, _v1.jsxs)(_v156.Box, {
          children: [(0, _v1.jsx)(_v338, {
            ..._v0
          }), [,,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v294.ContentRow, {
            listGridColumns: _v4,
            isSelected: !1,
            role: "group",
            disableHover: !0,
            width: "100%",
            padding: "sm",
            gap: ".5rem",
            children: [_v1 && (0, _v1.jsx)(_v294.ContentRow.Column, {
              children: (0, _v1.jsx)(_v1.Fragment, {})
            }), (0, _v1.jsx)(_v294.ContentRow.Column, {
              children: (0, _v1.jsx)(_v156.Box, {
                aspectRatio: 16 / 9,
                width: _v5,
                children: (0, _v1.jsx)(_v352.Skeleton, {
                  height: "100%",
                  width: "100%"
                })
              })
            }), (0, _v1.jsx)(_v294.ContentRow.Column, {
              width: "100%",
              children: (0, _v1.jsxs)(_v8.Flex, {
                direction: "column",
                gap: "1rem",
                justifyContent: "left",
                paddingLeft: "0.5rem",
                width: "100%",
                children: [(0, _v1.jsx)(_v352.Skeleton, {
                  variant: "text",
                  width: "85%"
                }), (0, _v1.jsx)(_v352.Skeleton, {
                  variant: "text",
                  maxWidth: "20%"
                })]
              })
            }), _v2 && (0, _v1.jsx)(_v294.ContentRow.Column, {
              children: (0, _v1.jsx)(_v8.Flex, {
                margin: `0 0 0 ${(0, _v9.rem)(24)}`,
                children: (0, _v1.jsx)(_v352.Skeleton, {
                  variant: "text",
                  width: "4rem"
                })
              })
            }), _v3 && (0, _v1.jsx)(_v294.ContentRow.Column, {
              children: (0, _v1.jsx)(_v8.Flex, {
                children: (0, _v1.jsx)(_v352.Skeleton, {
                  variant: "text",
                  w: "5rem",
                  alignItems: "flex-end"
                })
              })
            }), (0, _v1.jsx)(_v294.ContentRow.Column, {
              children: (0, _v1.jsx)(_v1.Fragment, {})
            })]
          }, `loading-state-skeleton-card-list-${_v1}`))]
        })
      });
    },
    _v354 = () => {
      let _v0,
        _v1 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          searchType: _v2,
          toggleSearchType: _v3
        } = (0, _v3.useContext)(_v127),
        {
          hasEnterprise: _v4,
          hasPublicSearchDisabled: _v5
        } = _v27(),
        _v6 = _v2 === _v124,
        _v7 = !1 === _v4 && !1 === _v5,
        _v8 = _v6 ? _v50.NO_LIBRARY_RESULTS : _v50.NO_PUBLIC_RESULTS,
        _v9 = _v6 && _v7 ? _v50.TRY_AGAIN_OR_SEARCH_VIMEO : _v50.TRY_ANOTHER_SEARCH;
      return (0, _v1.jsxs)(_v8.Flex, {
        width: "100%",
        height: "100%",
        minHeight: "30vh",
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        gap: "md",
        color: "text-primary",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v165.SearchMagnifier, {
          boxSize: {
            base: "xl",
            sm: "2xl"
          }
        }), (0, _v1.jsx)(_v159.Text, {
          variant: {
            base: "heading-lg",
            sm: "heading-xl"
          },
          children: _v8
        }), (0, _v1.jsx)(_v159.Text, {
          variant: "body-lg",
          color: "text-secondary",
          children: _v9
        }), _v6 && _v7 && (0, _v1.jsx)(_v157.Button, {
          size: "md",
          variant: "primary",
          onClick: () => _v3(),
          children: (0, _v48.translate)({
            singular: "Search all of Vimeo",
            dictionary: {
              es: {
                singular: "Buscar en todo Vimeo"
              },
              "de-DE": {
                singular: "Ganz Vimeo durchsuchen"
              },
              "fr-FR": {
                singular: "Rechercher dans tout Vimeo"
              },
              "ja-JP": {
                singular: "Vimeoのすべてを検索"
              },
              "ko-KR": {
                singular: "Vimeo 전체 검색"
              },
              "pt-BR": {
                singular: "Pesquisar tudo no Vimeo"
              },
              "zh-CN": {
                singular: "搜索 Vimeo 的所有内容"
              }
            }
          })
        }), (0, _v1.jsx)(_v159.Text, {
          variant: "body-lg",
          color: "text-secondary",
          position: "absolute",
          bottom: "0",
          children: (_v0 = _v1?.locale, (0, _v48.translate)({
            singular: "Looking for {STYLE}account or billing help{/STYLE}?",
            replacements: {
              STYLE: _v0 => (0, _v1.jsx)(_v285.Link, {
                href: `/help/sso?redirect_to=https://help.vimeo.com/hc/${(_v0 => {
                  switch (_v0) {
                    case "es":
                      return _v0;
                    case "de-DE":
                      return "de";
                    case "fr-FR":
                      return "fr";
                    case "ja-JP":
                      return "ja";
                    case "ko-KR":
                      return "ko";
                    case "pt-BR":
                      return "pt";
                    default:
                      return "en-us";
                  }
                })(_v0)}/sections/12397304993809-Vimeo-plans-account-and-billing-management`,
                variant: "inline-secondary",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "¿Busca {STYLE}ayuda con la cuenta o la facturación{/STYLE}?"
              },
              "de-DE": {
                singular: "Suchen Sie {STYLE}Hilfe bei Konten oder Rechnungsstellung{/STYLE}?"
              },
              "fr-FR": {
                singular: "Vous recherchez de l'aide concernant votre {STYLE}compte ou la facturation{/STYLE} ?"
              },
              "ja-JP": {
                singular: "{STYLE}アカウントまたは請求に関するヘルプ{/STYLE}をお探しですか？"
              },
              "ko-KR": {
                singular: "{STYLE}계정 또는 결제 관련 도움{/STYLE}이 필요하신가요?"
              },
              "pt-BR": {
                singular: "Procurando ajuda para {STYLE}conta ou cobrança{/STYLE}?"
              },
              "zh-CN": {
                singular: "正在寻找 {STYLE}账户或账单帮助{/STYLE}？"
              }
            }
          }))
        })]
      });
    },
    _v355 = () => {
      let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
        _v1 = (0, _v3.useRef)(null),
        {
          canManageTeamCollections: _v2,
          hasLiveSubscription: _v3
        } = _v27(),
        [_v4, _v5] = (0, _v3.useState)(new Set()),
        {
          sort: _v6,
          page: _v7,
          updatePage: _v8,
          onOmnisearchChange: _v9,
          filters: _v10,
          type: _v11
        } = _v136(),
        {
          isLoading: _v12,
          delegationPending: _v13,
          isAwaitingQuery: _v14
        } = _v147(),
        {
          query: _v15,
          terms: _v16,
          primaryIsEmpty: _v17
        } = _v148(),
        {
          data: _v18,
          error: _v19,
          isLoading: _v20,
          revalidateAll: _v21
        } = _v263(),
        _v22 = !_v18?.data || 0 === _v18.data.length,
        _v23 = !!_v20 || !_v18 && !_v19;
      ((_v0, _v1, _v2) => {
        let {
          publish: _v3
        } = _v152();
        (0, _v3.useEffect)(() => {
          if (_v2 > 1) return;
          let _v0 = (_v0 ?? []).map(_v150).filter(_v0 => null !== _v0).slice(0, 3);
          _v3(_v0 => _v0.isLoading === _v1 && _v0.items.length === _v0.length && _v0.items.every((_v0, _v1) => _v0.clip_id === _v0[_v1].clip_id) ? _v0 : {
            items: _v0,
            isLoading: _v1
          });
        }, [_v0, _v1, _v2, _v3]);
      })(_v18?.data, _v23, _v7);
      let _v24 = _v17 && _v12 && !_v15,
        _v25 = (0, _v3.useRef)(_v6),
        {
          sendSearchResultsPage: _v26
        } = _v265(),
        {
          toggleSearchType: _v27
        } = (0, _v3.useContext)(_v127),
        {
          allItems: _v28,
          canMoveSelection: _v29,
          canDeleteSelection: _v30,
          selectedItems: _v31,
          canChangePrivacySelection: _v32,
          canAddToShowcasesSelection: _v33,
          hasColdStorageSelection: _v34,
          hasReachedMaxSelectionForMove: _v35,
          hasReachedMaxSelectionForPrivacy: _v36,
          hasReachedMaxSelectionForSentimentWidget: _v37,
          hasReachedMaxSelectionForShowcases: _v38
        } = (0, _v284.useBulkItems)({
          canDeleteItem: _v0 => !!_v0?.video?.metadata?.interactions?.delete || !!_v0?.liveEvent?.metadata?.interactions?.delete,
          canMoveItem: _v0 => !!_v0?.video?.canMoveToProject || !!_v0?.liveEvent?.metadata?.interactions?.edit,
          canChangeItemPrivacy: _v0 => !!_v0?.video?.metadata?.interactions?.edit,
          canAddToShowcases: _v0 => !!_v0?.video?.metadata?.interactions?.edit,
          items: _v18?.data,
          selectedURIs: _v4,
          allowColdStorageDeletion: !0
        }),
        {
          capabilities: _v39
        } = (0, _v24.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v0?.teamUser?.ownerId),
        _v40 = !!_v39.canGenerateClipTextTranslation,
        _v41 = (!!_v39.canGenerateClipTranslation || _v40) && !!_v39.canPerformBulkTranslations;
      if ((0, _v3.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.detail.searchType === _v38 ? _v27(_v0) : _v9(_v0);
        };
        return document.addEventListener("omnisearchQueryChange", _v0), () => document.removeEventListener("omnisearchQueryChange", _v0);
      }, [_v10]), (0, _v3.useEffect)(() => {
        _v18?.data && _v25.current === _v6 ? _v26() : _v25.current = _v6;
      }, [_v18?.data]), _v19 && !_v13) return (0, _v1.jsx)(_v287, {});
      if (_v13 || _v14 || _v20 || !_v18) return (0, _v1.jsx)(_v156.Box, {
        width: "100%",
        minHeight: (0, _v9.rem)(450),
        children: (0, _v1.jsx)(_v353, {})
      });
      if (_v22) return _v24 ? (0, _v1.jsx)(_v156.Box, {
        width: "100%",
        minHeight: (0, _v9.rem)(450),
        children: (0, _v1.jsx)(_v353, {})
      }) : _v3 || _v11 !== _v70.options.live_event.value ? (0, _v1.jsx)(_v354, {}) : (0, _v1.jsx)(_v351, {});
      let _v42 = (0, _v1.jsxs)(_v156.Box, {
        width: "100%",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          height: "100%",
          pb: {
            base: "3xl",
            sm: "lg"
          },
          children: [_v15 && (0, _v1.jsx)(_v292, {
            terms: _v16
          }), (0, _v1.jsx)(_v347, {
            items: _v28,
            onToggleSelected: _v0 => {
              let _v1 = new Set(_v4);
              _v4.has(_v0) ? _v1.delete(_v0) : _v1.add(_v0), _v5(_v1);
            }
          }), (0, _v1.jsx)(_v290, {
            scrollContainer: _v1.current,
            updatePage: _v8,
            page: _v7,
            pageSize: 10,
            data: _v18
          })]
        }), (0, _v1.jsx)(_v283.BulkActions, {
          canUseBulkTranslation: _v41,
          canAddToShowcases: _v2,
          canMoveSelection: _v29,
          canDeleteSelection: _v30,
          canChangePrivacySelection: _v32,
          canAddToShowcasesSelection: _v33,
          hasColdStorageSelection: _v34,
          deselectAllItems: () => _v5(new Set()),
          hasReachedMaxSelectionForMove: _v35,
          hasReachedMaxSelectionForPrivacy: _v36,
          hasReachedMaxSelectionForSentimentWidget: _v37,
          hasReachedMaxSelectionForShowcases: _v38,
          removeItems: () => _v21(_v4),
          revalidateItems: _v21,
          selectedItems: _v31,
          selectedItemURIs: _v4,
          teamOwnerId: _v0?.teamUser?.ownerId ?? _v0?.user?.id
        })]
      });
      return _v15 ? (0, _v1.jsx)(_v356, {
        children: _v42
      }) : _v42;
    },
    _v356 = ({
      children: _v0
    }) => {
      let {
        error: _v1,
        isLoading: _v2
      } = _v277();
      return _v1 ? _v0 : _v2 ? (0, _v1.jsx)(_v156.Box, {
        width: "100%",
        minHeight: (0, _v9.rem)(450),
        children: (0, _v1.jsx)(_v353, {})
      }) : _v0;
    };
  var _v357 = _v0.i(0),
    _v358 = _v0.i(0),
    _v359 = _v0.i(0),
    _v360 = _v0.i(0);
  let _v361 = () => {
      let {
          sendSortEvent: _v0
        } = _v265(),
        {
          sort: _v1,
          onLibraryFilterChange: _v2
        } = _v136(),
        {
          hasDrawer: _v3
        } = (0, _v3.useContext)(_v19),
        [_v4, _v5] = (0, _v3.useState)(!1),
        _v6 = Object.values(_v93),
        _v7 = _v6.find(_v0 => _v0.value === _v1) ?? _v93.relevance,
        _v8 = _v0 => {
          if (_v0 === _v7.value) return;
          let _v1 = _v6.find(_v0 => _v0.value === _v0);
          _v0({
            copy: _v1?.untranslatedText ?? "",
            value: _v0,
            previousValue: _v7.value
          }), _v2(_v36, _v0);
        },
        _v9 = {
          _hover: {
            background: "darkBlueAlpha.200"
          },
          _dark: {
            _hover: {
              background: "lightBlueAlpha.300"
            }
          }
        };
      return _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v157.Button, {
          size: "sm",
          variant: "tertiary",
          rightIcon: (0, _v1.jsx)(_v238.SortSmall, {}),
          onClick: () => _v5(!0),
          ..._v9,
          children: _v50.sortLabel(_v7.text)
        }), (0, _v1.jsxs)(_v191.Drawer, {
          placement: "bottom",
          isOpen: _v4,
          onClose: () => _v5(!1),
          children: [(0, _v1.jsx)(_v194.DrawerOverlay, {}), (0, _v1.jsxs)(_v193.DrawerContent, {
            maxHeight: `calc(100vh - ${(0, _v9.rem)(64)})`,
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            sx: {
              '&[data-placement="bottom"]': {
                maxW: "100vw"
              }
            },
            children: [(0, _v1.jsx)(_v189.bokeh.hr, {
              backgroundColor: "text-tertiary",
              alignSelf: "center",
              paddingY: (0, _v9.rem)(2),
              width: (0, _v9.rem)(70),
              border: "none",
              borderRadius: (0, _v9.rem)(10),
              my: "sm"
            }), (0, _v1.jsx)(_v357.DrawerHeader, {
              pt: (0, _v9.rem)(4),
              pb: "md",
              pl: (0, _v9.rem)(32),
              pr: (0, _v9.rem)(28),
              children: (0, _v1.jsx)(_v159.Text, {
                variant: "heading-sm",
                children: _v50.SORT
              })
            }), (0, _v1.jsx)(_v192.DrawerBody, {
              pb: "lg",
              children: (0, _v1.jsx)(_v8.Flex, {
                flexDir: "column",
                gap: "2xs",
                children: _v6.map(_v0 => (0, _v1.jsx)(_v157.Button, {
                  variant: "tertiary",
                  justifyContent: "flex-start",
                  width: "100%",
                  background: _v0.value === _v7.value ? "darkBlueAlpha.200" : "transparent",
                  _dark: {
                    background: _v0.value === _v7.value ? "lightBlueAlpha.300" : "transparent"
                  },
                  onClick: () => {
                    _v8(_v0.value), _v5(!1);
                  },
                  children: _v0.text
                }, _v0.value))
              })
            })]
          })]
        })]
      }) : (0, _v1.jsxs)(_v240.Menu, {
        isLazy: !0,
        children: [(0, _v1.jsx)(_v241.MenuButton, {
          as: _v157.Button,
          size: "sm",
          variant: "tertiary",
          rightIcon: (0, _v1.jsx)(_v238.SortSmall, {}),
          ..._v9,
          children: _v50.sortLabel(_v7.text)
        }), (0, _v1.jsx)(_v359.MenuList, {
          children: (0, _v1.jsx)(_v360.MenuOptionGroup, {
            type: "radio",
            value: _v7.value,
            onChange: _v0 => _v8(_v0),
            children: _v6.map(_v0 => (0, _v1.jsx)(_v358.MenuItemOption, {
              value: _v0.value,
              children: _v0.text
            }, _v0.value))
          })
        })]
      });
    },
    _v362 = () => {
      let _v0 = (0, _v2.useRouter)(),
        {
          data: _v1,
          isLoading: _v2
        } = _v263(),
        {
          isAwaitingQuery: _v3
        } = _v147(),
        {
          hasPublicSearchDisabled: _v4
        } = _v27(),
        _v5 = "" !== _v112(_v0.query.q),
        _v6 = [_v2, !_v1, _v3].some(Boolean),
        _v7 = (0, _v200.useColorModeValue)("#F4F6F8", "#0E1216");
      return (0, _v1.jsx)(_v156.Box, {
        position: "sticky",
        top: 0,
        zIndex: 11,
        backgroundColor: _v7,
        marginTop: "lg",
        paddingBottom: "md",
        children: (0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          gap: "sm",
          flexWrap: "nowrap",
          paddingTop: "sm",
          paddingX: {
            base: 0,
            sm: "sm"
          },
          children: [!_v4 && !_v5 && (0, _v1.jsx)(_v156.Box, {
            flexShrink: 0,
            children: (0, _v1.jsx)(_v273, {})
          }), (0, _v1.jsx)(_v156.Box, {
            flexGrow: 1,
            minWidth: 0,
            children: (0, _v1.jsx)(_v278, {
              showLoader: _v6
            })
          }), (0, _v1.jsxs)(_v8.Flex, {
            alignItems: "center",
            gap: "sm",
            flexShrink: 0,
            children: [(0, _v1.jsx)(_v361, {}), (!_v5 || _v4) && (0, _v1.jsx)(_v244, {})]
          })]
        })
      });
    },
    _v363 = {
      [_v58.options.ondemand.value]: "200px",
      [_v58.options.people.value]: "180px"
    };
  var _v364 = _v0.i(0),
    _v365 = _v0.i(0);
  let _v366 = () => (0, _v1.jsxs)(_v8.Flex, {
      width: "100%",
      padding: "sm",
      flexDir: "column",
      height: "min-content",
      children: [(0, _v1.jsx)(_v352.Skeleton, {
        h: "100%",
        borderRadius: "md",
        aspectRatio: 16 / 9
      }), (0, _v1.jsxs)(_v8.Flex, {
        flexDir: "column",
        gap: "3",
        marginTop: "md",
        children: [(0, _v1.jsx)(_v352.Skeleton, {
          variant: "text",
          w: "60%"
        }), (0, _v1.jsx)(_v352.Skeleton, {
          variant: "text",
          w: "45%"
        })]
      })]
    }),
    _v367 = {
      clip: _v366,
      people: () => (0, _v15.useBreakpointValue)({
        base: !0,
        sm: !1
      }) ? (0, _v1.jsxs)(_v364.HStack, {
        width: "100%",
        children: [(0, _v1.jsx)(_v352.Skeleton, {
          variant: "circle",
          w: (0, _v9.rem)(64),
          h: (0, _v9.rem)(64)
        }), (0, _v1.jsxs)(_v365.VStack, {
          justifyContent: "center",
          alignItems: "start",
          gap: "4",
          flexGrow: "1",
          children: [(0, _v1.jsx)(_v352.Skeleton, {
            variant: "text",
            w: "45%"
          }), (0, _v1.jsx)(_v352.Skeleton, {
            variant: "text",
            w: "65%"
          })]
        })]
      }) : (0, _v1.jsxs)(_v8.Flex, {
        width: "100%",
        h: (0, _v9.rem)(190),
        padding: "sm",
        flexDir: "column",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v352.Skeleton, {
          variant: "circle",
          w: (0, _v9.rem)(96),
          h: (0, _v9.rem)(96)
        }), (0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          gap: "lg",
          marginTop: "md",
          w: "100%",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v352.Skeleton, {
            variant: "text",
            w: "45%"
          }), (0, _v1.jsx)(_v352.Skeleton, {
            variant: "text",
            w: "65%"
          })]
        })]
      }),
      ondemand: () => (0, _v1.jsxs)(_v8.Flex, {
        width: "100%",
        padding: "sm",
        flexDir: "column",
        height: "min-content",
        children: [(0, _v1.jsx)(_v352.Skeleton, {
          h: "100%",
          borderRadius: "md",
          aspectRatio: 2 / 3
        }), (0, _v1.jsx)(_v352.Skeleton, {
          marginTop: "md",
          marginBottom: "sm",
          variant: "text"
        })]
      }),
      channel: _v366,
      group: _v366
    },
    _v368 = () => {
      let {
          type: _v0 = _v58.options.clip.value
        } = _v243(),
        _v1 = _v367[_v0];
      return (0, _v1.jsx)(_v1.Fragment, {
        children: [1, 2, 3].map((_v0, _v1) => (0, _v1.jsx)(_v1, {}, _v1))
      });
    };
  var _v369 = _v0.i(0),
    _v370 = _v0.i(0),
    _v371 = _v0.i(0);
  let _v372 = ({
      item: _v0,
      onClick: _v1,
      isSmallScreen: _v2,
      onMouseEnter: _v3,
      onMouseLeave: _v4
    }) => {
      let {
          name: _v5,
          pictures: _v6,
          link: _v7,
          locationDetails: _v8
        } = _v0,
        [_v9, _v10] = (0, _v371.getAvatarImages)(_v6?.sizes),
        _v11 = (0, _v129.useOrionSettingsFields)(["enable_search_people_avatar_image_fix"]).enable_search_people_avatar_image_fix;
      return (0, _v1.jsxs)(_v365.VStack, {
        as: "a",
        justifyContent: "center",
        href: _v7,
        width: "100%",
        height: (0, _v9.rem)(190),
        borderRadius: "md",
        _hover: _v2 ? {
          backgroundColor: "fill-component-hover"
        } : void 0,
        onClick: _v1,
        onContextMenu: _v1,
        onMouseEnter: _v3,
        onMouseLeave: _v4,
        "data-testid": "people-result",
        children: [(0, _v1.jsx)(_v156.Box, {
          h: (0, _v9.rem)(96),
          w: (0, _v9.rem)(96),
          borderRadius: _v11 ? "50%" : "100%",
          border: "1px solid",
          borderColor: "stroke",
          overflow: _v11 ? "hidden" : void 0,
          display: _v11 ? "flex" : void 0,
          alignItems: _v11 ? "center" : void 0,
          justifyContent: _v11 ? "center" : void 0,
          children: (0, _v1.jsx)(_v185.Avatar, {
            size: "auto",
            alt: _v5,
            src: _v9,
            srcSet: _v10,
            nameProps: {
              name: _v5
            },
            sx: _v11 ? {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }
            } : void 0
          })
        }), (0, _v1.jsx)(_v159.Text, {
          variant: "heading-sm",
          isTruncated: !0,
          maxWidth: "85%",
          children: _v5
        }), (0, _v1.jsx)(_v364.HStack, {
          height: (0, _v9.rem)(24),
          gap: "1",
          textAlign: "center",
          isTruncated: !0,
          maxWidth: "85%",
          children: _v8?.formattedAddress && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v370.UserLocation, {
              boxSize: "xs",
              color: "text-secondary"
            }), (0, _v1.jsx)(_v159.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v8?.formattedAddress
            })]
          })
        })]
      });
    },
    _v373 = ({
      item: _v0,
      onClick: _v1
    }) => {
      let {
          name: _v2,
          pictures: _v3,
          link: _v4,
          locationDetails: _v5
        } = _v0,
        [_v6, _v7] = (0, _v371.getAvatarImages)(_v3?.sizes),
        _v8 = (0, _v129.useOrionSettingsFields)(["enable_search_people_avatar_image_fix"]).enable_search_people_avatar_image_fix;
      return (0, _v1.jsxs)(_v364.HStack, {
        as: "a",
        href: _v4,
        borderRadius: "sm",
        padding: "2",
        height: "min-content",
        width: "100%",
        cursor: "pointer",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        children: [(0, _v1.jsx)(_v156.Box, {
          h: (0, _v9.rem)(64),
          w: (0, _v9.rem)(64),
          borderRadius: _v8 ? "50%" : "100%",
          border: "1px solid",
          borderColor: "stroke",
          overflow: _v8 ? "hidden" : void 0,
          display: _v8 ? "flex" : void 0,
          alignItems: _v8 ? "center" : void 0,
          justifyContent: _v8 ? "center" : void 0,
          flexShrink: _v8 ? 0 : void 0,
          children: (0, _v1.jsx)(_v185.Avatar, {
            size: "auto",
            alt: _v2,
            src: _v6,
            srcSet: _v7,
            nameProps: {
              name: _v2
            },
            sx: _v8 ? {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }
            } : void 0
          })
        }), (0, _v1.jsxs)(_v365.VStack, {
          justifyContent: "center",
          alignItems: "start",
          children: [(0, _v1.jsx)(_v159.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            isTruncated: !0,
            children: _v2
          }), _v5?.formattedAddress && (0, _v1.jsx)(_v159.Text, {
            variant: "body-sm",
            color: "text-secondary",
            isTruncated: !0,
            children: _v5?.formattedAddress
          })]
        }), (0, _v1.jsx)(_v157.Button, {
          as: "a",
          href: _v4,
          variant: "secondary",
          size: "sm",
          borderRadius: "sm",
          paddingX: "3",
          marginLeft: "auto",
          onClick: _v1,
          children: _v50.VIEW_PROFILE
        })]
      });
    };
  var _v374 = _v0.i(0),
    _v375 = _v0.i(0),
    _v376 = _v0.i(0);
  let _v377 = _v0 => (0, _v1.jsx)(_v376.Card, {
      as: "a",
      overflow: "hidden",
      direction: "column",
      height: "min-content",
      cursor: "pointer",
      backgroundColor: "unset",
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      padding: "sm",
      gap: "sm",
      border: "none",
      width: "100%",
      ..._v0
    }),
    _v378 = ({
      item: _v0,
      type: _v1,
      onClick: _v2,
      onMouseEnter: _v3,
      onMouseLeave: _v4
    }) => {
      let {
        name: _v5,
        metadata: _v6,
        pictures: _v7,
        link: _v8
      } = _v0;
      return (0, _v1.jsxs)(_v377, {
        href: _v8,
        borderRadius: "lg",
        onClick: _v2,
        onContextMenu: _v2,
        onMouseEnter: _v3,
        onMouseLeave: _v4,
        "data-testid": "channel-group-result",
        children: [(0, _v1.jsx)(_v374.AspectRatio, {
          ratio: 16 / 9,
          children: _v7?.sizes[3].link ? (0, _v1.jsx)(_v156.Box, {
            as: "img",
            src: _v7?.sizes[3].link,
            alt: "thumbnail",
            borderRadius: "md"
          }) : (0, _v1.jsx)(_v156.Box, {
            bgColor: "slate.100",
            borderRadius: "md"
          })
        }), (0, _v1.jsxs)(_v375.Stack, {
          gap: "xs",
          paddingX: "xs",
          children: [(0, _v1.jsx)(_v159.Text, {
            variant: "heading-sm",
            children: _v5
          }), (0, _v1.jsxs)(_v159.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: [_v50.videoCount(_v6?.connections?.videos?.total), " ·", " ", _v50.userCount(_v1, _v6?.connections?.users?.total)]
          })]
        })]
      });
    };
  var _v379 = _v0.i(0),
    _v380 = _v0.i(0),
    _v381 = _v0.i(0),
    _v382 = _v0.i(0),
    _v383 = _v0.i(0);
  let _v384 = () => (0, _v1.jsx)("svg", {
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32",
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      children: [(0, _v1.jsx)("path", {
        d: "M0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16S24.837 0 16 0C7.164 0 0 7.163 0 16Z",
        fill: "#000"
      }), (0, _v1.jsx)("g", {
        fill: "#fff",
        children: (0, _v1.jsx)("path", {
          d: "M18.567 15.046h1.907v-3.814h-1.907v3.814Zm1.907-5.722H16.66v13.352h1.907v-5.722h1.907a1.906 1.906 0 0 0 1.908-1.908v-3.815a1.907 1.907 0 0 0-1.908-1.907ZM15.389 13.139v-1.907a1.907 1.907 0 0 0-1.907-1.907h-1.908a1.907 1.907 0 0 0-1.908 1.907v3.814c0 1.055.854 1.908 1.908 1.908h1.908v3.815h-1.908v-1.907H9.666v1.907c0 1.054.854 1.907 1.908 1.907h1.908a1.907 1.907 0 0 0 1.907-1.907v-3.815a1.908 1.908 0 0 0-1.907-1.908h-1.908v-3.814h1.908v1.907h1.907Z"
        })
      }), (0, _v1.jsxs)("g", {
        fill: "#fff",
        children: [(0, _v1.jsx)("path", {
          d: "M5.181 14.923s-.375.277-.709.6c-.35.318-.675.678-.675.678s-.342-.345-.656-.732c-.33-.384-.61-.807-.61-.807s.068-.78.241-1.544c.156-.768.42-1.508.42-1.508s.188.482.41.927c.211.448.472.864.472.864s.391-.28.81-.505c.412-.234.827-.42.827-.42s-.212.592-.335 1.208a10.704 10.704 0 0 0-.195 1.239Z"
        }), (0, _v1.jsx)("path", {
          d: "M5.4 18.42s-.267.382-.483.794c-.234.413-.424.856-.424.856s-.438-.216-.856-.485c-.433-.26-.835-.572-.835-.572s-.181-.763-.26-1.542c-.093-.778-.08-1.56-.08-1.56s.339.395.684.747c.346.357.722.669.722.669s.286-.388.608-.736c.323-.353.65-.662.65-.662s-.011.63.066 1.255c.062.626.208 1.237.208 1.237Z"
        }), (0, _v1.jsx)("path", {
          d: "M6.718 21.662s-.12.44-.203.906a9.007 9.007 0 0 0-.127.947s-.486-.065-.967-.187c-.484-.113-.974-.273-.974-.273s-.412-.667-.74-1.378c-.332-.71-.576-1.455-.576-1.455s.449.266.887.491c.452.223.897.403.897.403s.158-.464.342-.89c.195-.439.405-.835.405-.835s.197.596.462 1.166.594 1.105.594 1.105Z"
        }), (0, _v1.jsx)("path", {
          d: "M9.004 24.32s.028.451.093.925c.072.458.178.94.178.94s-.47.076-.975.127c-.49.04-1.01.047-1.01.047s-.6-.502-1.136-1.073c-.54-.567-1.004-1.196-1.004-1.196s.498.12.994.183c.498.07.978.098.978.098s.002-.489.041-.955c.035-.468.12-.922.12-.922s.374.507.808.963c.43.46.913.863.913.863ZM6.081 11.542s-.438.145-.864.341c-.426.191-.856.427-.856.427s-.207-.434-.388-.904c-.184-.467-.32-.96-.32-.96s.314-.718.724-1.385c.395-.676.88-1.292.88-1.292s.016.508.093 1.007c.058.494.17.969.17.969s.462-.136.93-.219c.456-.095.92-.134.92-.134s-.39.495-.707 1.038c-.33.535-.582 1.112-.582 1.112Z"
        }), (0, _v1.jsx)("path", {
          d: "M7.025 6.591s-.284.546-.5 1.102c-.23.548-.382 1.11-.382 1.11s.478-.328.984-.583a11.108 11.108 0 0 1 1.002-.472s.06-.123.152-.305c.089-.189.22-.434.367-.672.139-.248.298-.483.42-.659l.207-.298-.35.093a8.38 8.38 0 0 0-.775.24 7.91 7.91 0 0 0-.773.294l-.352.15ZM29.47 14.662s-.28.423-.612.807c-.315.386-.657.732-.657.732s-.325-.36-.674-.678c-.334-.323-.71-.6-.71-.6s-.055-.627-.194-1.24a10.099 10.099 0 0 0-.336-1.208s.414.187.828.42c.418.227.81.505.81.505s.261-.416.472-.863c.22-.445.41-.927.41-.927s.264.739.42 1.508c.173.764.242 1.544.242 1.544Z"
        }), (0, _v1.jsx)("path", {
          d: "M29.199 19.013s-.402.312-.836.572c-.418.269-.855.486-.855.486s-.19-.444-.424-.857c-.217-.412-.484-.793-.484-.793s.147-.611.208-1.237c.078-.624.067-1.255.067-1.255s.326.31.649.662c.32.348.609.736.609.736s.376-.312.722-.668c.344-.353.684-.748.684-.748s.014.783-.082 1.56c-.077.779-.258 1.542-.258 1.542Z"
        }), (0, _v1.jsx)("path", {
          d: "M27.553 23.054s-.49.16-.976.274c-.478.122-.965.187-.965.187s-.037-.48-.128-.946c-.082-.466-.203-.907-.203-.907s.33-.535.593-1.105c.267-.57.463-1.166.463-1.166s.21.396.405.834c.184.428.341.892.341.892s.446-.18.9-.404c.436-.224.885-.491.885-.491s-.244.745-.576 1.455a14.843 14.843 0 0 1-.739 1.377Z"
        }), (0, _v1.jsx)("path", {
          d: "M24.71 26.36s-.52-.008-1.011-.048c-.504-.05-.974-.127-.974-.127s.105-.482.176-.94c.066-.474.094-.925.094-.925s.484-.404.913-.863c.434-.456.808-.963.808-.963s.085.454.119.922c.04.465.04.955.04.955s.48-.029.98-.098c.498-.064.995-.184.995-.184s-.465.63-1.005 1.197c-.533.571-1.135 1.073-1.135 1.073ZM28.345 10.446s-.136.493-.32.96c-.182.47-.389.903-.389.903s-.43-.235-.855-.426c-.427-.197-.865-.34-.865-.34s-.252-.578-.582-1.114c-.316-.543-.707-1.038-.707-1.038s.463.04.92.135c.467.083.93.22.93.22s.112-.477.172-.969c.075-.5.092-1.009.092-1.009s.484.616.878 1.292c.412.667.726 1.386.726 1.386Z"
        }), (0, _v1.jsx)("path", {
          d: "M23.872 7.749s.506.204 1 .473c.506.254.984.582.984.582s-.152-.562-.382-1.111c-.215-.555-.5-1.101-.5-1.101l-.352-.151a8.318 8.318 0 0 0-.772-.295 8.775 8.775 0 0 0-.776-.238l-.35-.094.207.298c.123.177.28.411.42.659.148.239.279.484.369.672l.152.306Z"
        })]
      })]
    })
  });
  var _v385 = _v0.i(0),
    _v386 = _v0.i(0);
  let _v387 = {
      clip: ({
        item: _v0,
        onClick: _v1,
        onMouseEnter: _v2,
        onMouseLeave: _v3,
        position: _v4
      }) => {
        let _v5 = (0, _v3.useContext)(_v26.ViewerContext),
          {
            openAuthModal: _v6
          } = (0, _v3.useContext)(_v270),
          {
            sendWatchLaterEvent: _v7
          } = _v265(),
          {
            metadata: _v8,
            name: _v9,
            user: _v10,
            stats: _v11,
            duration: _v12,
            pictures: _v13,
            createdTime: _v14,
            uri: _v15,
            link: _v16,
            badge: _v17
          } = _v0,
          _v18 = _v8?.interactions?.watchlater?.added || !1,
          _v19 = _v18 ? _v50.REMOVE_WATCH_LATER : _v50.ADD_WATCH_LATER,
          _v20 = _v103(_v15),
          {
            updateWatchLater: _v21
          } = function (_v0) {
            let {
                mutate: _v1
              } = _v261(),
              [_v2] = (0, _v385.usePutMeWatchlater)(),
              [_v3] = (0, _v385.useDeleteMeWatchlater)();
            return {
              updateWatchLater: async _v0 => {
                await (_v0 ? _v3 : _v2)({
                  where: {
                    videoId: _v0
                  }
                }), _v1();
              }
            };
          }(_v20);
        return (0, _v1.jsx)(_v377, {
          as: "div",
          borderRadius: "lg",
          onClick: _v1,
          onContextMenu: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3,
          children: (0, _v1.jsx)(_v383.VideoCard, {
            as: "a",
            target: "_blank",
            _focusVisible: {
              outlineOffset: "2px",
              outlineColor: "fill-brand"
            },
            "data-testid": "clip-result",
            href: _v16,
            isReducedMotion: !0,
            name: _v9,
            alt: _v9,
            src: _v13?.sizes[3].link,
            width: "unset",
            flex: "none",
            cursor: "pointer",
            createdTime: _v14 ? ((_v0, _v1 = "en-US") => new Date(_v0).toLocaleDateString(_v1, {
              month: "long",
              day: "numeric",
              year: "numeric"
            }))(_v14, _v5?.locale) : void 0,
            duration: _v12,
            topLeftDecoration: _v17?.type?.includes("staffpick") ? (0, _v1.jsx)(_v384, {}) : void 0,
            topRightDecoration: (0, _v1.jsx)(_v160.Tooltip, {
              label: _v19,
              placement: "top",
              children: (0, _v1.jsx)(_v158.IconButton, {
                onClick: _v0 => {
                  _v0.stopPropagation(), _v0.preventDefault(), _v5?.user ? _v21(_v18) : _v6(void 0, void 0, "search_watchlater"), _v7({
                    entityType: _v264.clip,
                    position: _v4,
                    uri: _v15
                  });
                },
                "aria-label": "watch later",
                variant: "blur",
                size: "sm",
                color: "gray.50",
                background: "#3D4751A3",
                _dark: {
                  background: "#3D4751A3"
                },
                icon: _v18 ? (0, _v1.jsx)(_v382.ClockFilled, {}) : (0, _v1.jsx)(_v379.Clock, {}),
                opacity: 0,
                transition: "opacity 200ms ease-in-out",
                _groupHover: {
                  opacity: 1
                }
              })
            }),
            bottomLeftDecoration: (0, _v1.jsxs)(_v8.Flex, {
              children: [(0, _v1.jsx)(_v157.Button, {
                "aria-label": "likes",
                variant: "tertiary",
                size: "xs",
                color: "gray.50",
                leftIcon: (0, _v1.jsx)(_v381.Heart, {}),
                opacity: 0,
                transition: "opacity 200ms ease-in-out",
                _groupHover: {
                  opacity: 1
                },
                _hover: {},
                _dark: {
                  _hover: {}
                },
                children: _v8?.connections?.likes?.total
              }), (0, _v1.jsx)(_v157.Button, {
                "aria-label": "comments",
                variant: "tertiary",
                size: "xs",
                color: "gray.50",
                leftIcon: (0, _v1.jsx)(_v380.CommentList, {}),
                opacity: 0,
                transition: "opacity 200ms ease-in-out",
                _groupHover: {
                  opacity: 1
                },
                _hover: {},
                _dark: {
                  _hover: {}
                },
                children: _v8?.connections?.comments?.total
              })]
            }),
            user: {
              name: _v10?.name,
              link: _v10?.link,
              pictures: _v10?.pictures
            },
            views: _v11?.plays ?? void 0
          }, _v20)
        });
      },
      ondemand: ({
        item: _v0,
        onClick: _v1,
        onMouseEnter: _v2,
        onMouseLeave: _v3
      }) => {
        let _v4,
          _v5,
          _v6,
          _v7,
          [_v8, _v9] = (0, _v3.useState)(!1),
          _v10 = (0, _v3.useRef)(null),
          {
            name: _v11,
            pictures: _v12,
            link: _v13,
            metadata: {
              interactions: _v14
            }
          } = _v0,
          _v15 = (_v4 = _v14?.buy?.price, _v5 = _v14?.rent?.price, _v6 = _v14?.buy?.displayPrice, _v7 = _v14?.rent?.displayPrice, _v5 || _v4 ? _v5 ? _v4 && _v4 < _v5 ? _v6 : _v7 : _v6 : null);
        (0, _v3.useEffect)(() => {
          _v10.current && _v9(_v10.current?.scrollWidth > _v10.current?.offsetWidth);
        }, [_v10]);
        let _v16 = (0, _v15.useBreakpointValue)({
          base: !1,
          lg: !0
        });
        return (0, _v1.jsxs)(_v377, {
          href: _v13,
          borderRadius: "xl",
          onClick: _v1,
          onContextMenu: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3,
          "data-testid": "ondemand-result",
          children: [(0, _v1.jsxs)(_v156.Box, {
            position: "relative",
            children: [(0, _v1.jsx)(_v374.AspectRatio, {
              ratio: 2 / 3,
              children: (0, _v1.jsx)(_v156.Box, {
                as: "img",
                src: _v12?.sizes[0].link,
                alt: _v11,
                borderRadius: "md"
              })
            }), _v15 && (0, _v1.jsx)(_v386.DarkMode, {
              children: (0, _v1.jsx)(_v159.Text, {
                as: "span",
                variant: "body-sm",
                background: "blackAlpha.800",
                color: "text-primary",
                borderRadius: "6px",
                padding: `${(0, _v9.rem)(4)} ${(0, _v9.rem)(6)}`,
                position: "absolute",
                bottom: "sm",
                right: "sm",
                textAlign: "center",
                children: _v15
              })
            })]
          }), (0, _v1.jsx)(_v160.Tooltip, {
            label: (0, _v1.jsx)(_v156.Box, {
              maxW: (0, _v9.rem)(600),
              children: _v11
            }),
            placement: "top",
            isDisabled: !(_v8 && _v16),
            children: (0, _v1.jsx)(_v159.Text, {
              variant: "heading-sm",
              noOfLines: 1,
              whiteSpace: "nowrap",
              display: "inline-block",
              ref: _v10,
              paddingX: "xs",
              children: _v11
            })
          })]
        });
      },
      people: ({
        item: _v0,
        onClick: _v1,
        onMouseEnter: _v2,
        onMouseLeave: _v3
      }) => {
        let _v4 = (0, _v15.useBreakpointValue)({
            base: !0,
            sm: !1
          }, {
            fallback: "md"
          }) || !1,
          _v5 = (0, _v15.useBreakpointValue)({
            sm: !0,
            lg: !1
          }) || !1;
        return _v4 ? (0, _v1.jsx)(_v373, {
          item: _v0,
          onClick: _v1
        }) : _v5 ? (0, _v1.jsx)(_v372, {
          item: _v0,
          isSmallScreen: !0,
          onClick: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3
        }) : (0, _v1.jsx)(_v369.UserCard, {
          user: _v0,
          profileUrl: _v0.link,
          offset: [0, -210],
          placement: "bottom",
          flip: !1,
          onProfileClick: _v1,
          children: (0, _v1.jsx)(_v156.Box, {
            height: "min-content",
            children: (0, _v1.jsx)(_v372, {
              item: _v0,
              onMouseEnter: _v2,
              onMouseLeave: _v3
            })
          })
        });
      },
      channel: _v378,
      group: _v378
    },
    _v388 = () => {
      let _v0 = (0, _v3.useRef)(null),
        _v1 = (0, _v3.useRef)(void 0),
        {
          sort: _v2,
          page: _v3,
          filters: _v4,
          onFilterChange: _v5,
          updatePage: _v6
        } = _v243(),
        {
          isLoading: _v7,
          data: _v8,
          error: _v9,
          perPage: _v10
        } = _v261(),
        _v11 = (0, _v3.useRef)(_v2),
        _v12 = (() => {
          let {
              type: _v0 = _v58.options.clip.value
            } = _v243(),
            _v1 = _v363[_v0] ?? "280px";
          return (0, _v3.useMemo)(() => ({
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: `repeat(auto-fill, minmax(${_v1}, 1fr))`
          }), [_v1]);
        })(),
        {
          sendHoverEvent: _v13,
          sendClickEvent: _v14,
          sendSearchResultsPage: _v15
        } = _v265(),
        {
          toggleSearchType: _v16
        } = (0, _v3.useContext)(_v127),
        _v17 = _v8?.parameters?.filters?.type?.values[0] || _v58.options.clip.value,
        _v18 = _v387[_v17],
        _v19 = _v17 === _v58.options.people.value;
      return ((0, _v3.useEffect)(() => {
        let _v0 = _v0 => {
          let _v1 = _v0.detail;
          _v1.searchType === _v37 ? _v16(_v0) : _v5("q", _v1.query);
        };
        return document.addEventListener("omnisearchQueryChange", _v0), () => document.removeEventListener("omnisearchQueryChange", _v0);
      }, [_v4]), (0, _v3.useEffect)(() => {
        _v8?.data && (_v11.current === _v2 ? _v15() : _v11.current = _v2);
      }, [_v8]), _v9) ? (0, _v1.jsx)(_v287, {}) : !_v8 || _v7 || _v8.data && _v8.data?.length !== 0 ? (0, _v1.jsxs)(_v8.Flex, {
        justifyContent: "space-between",
        overflowY: "auto",
        flexDir: "column",
        width: "100%",
        ref: _v0,
        gap: "lg",
        pb: {
          base: "3xl",
          sm: "lg"
        },
        sx: {
          scrollbarWidth: "thin",
          scrollbarColor: `${_v34} transparent`
        },
        children: [(0, _v1.jsx)(_v237.Grid, {
          templateColumns: _v12,
          gap: "sm",
          marginBottom: {
            base: void 0,
            lg: _v19 ? (0, _v9.rem)(112) : void 0
          },
          position: "relative",
          children: _v7 || !_v8 ? (0, _v1.jsx)(_v368, {}) : (0, _v1.jsx)(_v1.Fragment, {
            children: _v8?.data?.map((_v0, _v1) => (0, _v1.jsx)(_v18, {
              item: _v0[_v17],
              type: _v17,
              position: _v1,
              onClick: () => {
                _v14({
                  entityType: _v264[_v17],
                  position: _v1,
                  uri: _v0[_v17].uri
                });
              },
              onMouseEnter: () => {
                _v1.current = setTimeout(() => {
                  _v13({
                    entityType: _v264[_v17],
                    position: _v1,
                    uri: _v0[_v17].uri
                  });
                }, 500);
              },
              onMouseLeave: () => clearTimeout(_v1.current)
            }, _v1))
          })
        }), (0, _v1.jsx)(_v290, {
          scrollContainer: _v0.current,
          updatePage: _v6,
          page: _v3,
          pageSize: _v10,
          data: _v8
        })]
      }) : (0, _v1.jsx)(_v354, {});
    };
  var _v389 = _v0.i(0),
    _v390 = _v0.i(0),
    _v391 = _v0.i(0),
    _v392 = _v0.i(0),
    _v393 = _v0.i(0);
  let _v394 = () => {
      let [_v0, _v1] = (0, _v3.useState)(""),
        {
          onFilterChange: _v2
        } = _v243(),
        {
          sendSearchResultsPage: _v3
        } = _v265(),
        {
          data: _v4
        } = (0, _v393.useGetVideo)({
          where: {
            videoId: _v397
          },
          query: {
            noPadding: !0,
            sizes: ["1920x1080"]
          },
          select: ["name", "pictures", "user.name", "user.pictures.sizes.link", "link"]
        });
      (0, _v3.useEffect)(() => {
        _v3(!0);
      }, []);
      let _v5 = _v4?.pictures?.sizes[0]?.link;
      return (0, _v1.jsx)(_v386.DarkMode, {
        children: (0, _v1.jsxs)(_v237.Grid, {
          flex: "1",
          placeItems: "center",
          borderRadius: "3xl",
          backgroundImage: _v5 ? `url(${_v5})` : "",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          margin: {
            base: `${(0, _v9.rem)(8)} ${(0, _v9.rem)(16)} ${(0, _v9.rem)(50)} ${(0, _v9.rem)(16)}`,
            sm: `${(0, _v9.rem)(8)} ${(0, _v9.rem)(24)} ${(0, _v9.rem)(50)} ${(0, _v9.rem)(24)}`
          },
          children: [(0, _v1.jsx)("form", {
            onSubmit: _v0 => {
              _v0.preventDefault(), _v0 && _v2("q", _v0);
            },
            children: (0, _v1.jsxs)(_v390.InputGroup, {
              borderRadius: "md",
              size: "lg",
              width: {
                base: (0, _v9.rem)(312),
                sm: (0, _v9.rem)(334),
                md: (0, _v9.rem)(480)
              },
              children: [(0, _v1.jsx)(_v389.Input, {
                onChange: _v0 => _v1(_v0.target.value),
                value: _v0,
                placeholder: _v50.SEARCH_ALL_VIMEO,
                role: "search",
                type: "search",
                autoComplete: "false",
                fontSize: (0, _v9.rem)(16),
                paddingRight: (0, _v9.rem)(76),
                background: "fill-blur",
                backdropFilter: "blur(var(--vimeo-blur-lg))",
                sx: {
                  "::-webkit-search-cancel-button": {
                    WebkitAppearance: "none"
                  }
                }
              }), (0, _v1.jsxs)(_v391.InputRightElement, {
                width: "fit-content",
                children: [_v0 && (0, _v1.jsx)(_v392.CloseXCircleFilled, {
                  color: "text-primary",
                  boxSize: "xs",
                  marginRight: (0, _v9.rem)(8),
                  onClick: () => _v1("")
                }), (0, _v1.jsx)(_v165.SearchMagnifier, {
                  color: "text-primary",
                  boxSize: "xs",
                  marginRight: (0, _v9.rem)(16)
                })]
              })]
            })
          }), _v4 && (0, _v1.jsxs)(_v8.Flex, {
            as: "a",
            href: _v4?.link,
            position: "fixed",
            bottom: (0, _v9.rem)(74),
            padding: "sm",
            borderRadius: "md",
            background: "fill-blur",
            backdropFilter: "blur(var(--vimeo-blur-md))",
            color: "text-primary",
            _hover: {
              background: "rgba(61,71,81, 0.40)"
            },
            children: [(0, _v1.jsx)(_v185.Avatar, {
              size: "xs",
              alt: _v4?.user?.name,
              src: _v4?.user?.pictures?.sizes[0].link,
              nameProps: {
                name: _v4?.user?.name ?? ""
              }
            }), (0, _v1.jsxs)(_v365.VStack, {
              marginLeft: "sm",
              marginRight: "xs",
              gap: "0",
              alignItems: "flex-start",
              children: [_v4.name && (0, _v1.jsx)(_v159.Text, {
                variant: "heading-sm",
                isTruncated: !0,
                maxWidth: {
                  base: (0, _v9.rem)(292),
                  md: (0, _v9.rem)(428)
                },
                children: _v4.name
              }), _v4.user.name && (0, _v1.jsx)(_v159.Text, {
                variant: "body-sm",
                isTruncated: !0,
                maxWidth: {
                  base: (0, _v9.rem)(292),
                  md: (0, _v9.rem)(428)
                },
                children: _v4.user.name
              })]
            })]
          })]
        })
      });
    },
    _v395 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    _v396 = Math.floor(Math.random() * _v395.length),
    _v397 = _v395[_v396];
  var _v398 = _v0.i(0),
    _v399 = _v0.i(0),
    _v400 = _v0.i(0),
    _v401 = _v0.i(0),
    _v402 = _v0.i(0),
    _v403 = _v0.i(0);
  let _v404 = _v0 => (0, _v1.jsx)(_v403.AccordionItem, {
    ..._v0
  });
  var _v405 = _v0.i(0);
  let _v406 = ({
    isExpanded: _v0,
    nameCopy: _v1,
    showResetButton: _v2,
    onResetClick: _v3
  }) => (0, _v1.jsxs)(_v8.Flex, {
    alignItems: "center",
    width: "100%",
    children: [(0, _v1.jsxs)(_v405.AccordionButton, {
      height: {
        base: (0, _v9.rem)(44),
        md: "unset"
      },
      flex: "1",
      minWidth: "0",
      children: [(0, _v1.jsx)(_v159.Text, {
        variant: {
          base: "heading-sm",
          md: "heading-xs"
        },
        isTruncated: !0,
        children: _v1
      }), (0, _v1.jsx)(_v364.HStack, {
        children: _v0 ? (0, _v1.jsx)(_v317.ChevronUpSmall, {
          boxSize: "xs"
        }) : (0, _v1.jsx)(_v313.ChevronDownSmall, {
          boxSize: "xs"
        })
      })]
    }), !!_v2 && (0, _v1.jsx)(_v157.Button, {
      size: "sm",
      variant: "tertiary",
      flexShrink: 0,
      onClick: _v3,
      children: _v50.RESET
    })]
  });
  var _v407 = _v0.i(0);
  let _v408 = _v0 => (0, _v1.jsx)(_v407.AccordionPanel, {
      pt: {
        base: 0,
        md: "sm"
      },
      pb: {
        base: "sm",
        md: "3"
      },
      paddingX: "md",
      ..._v0
    }),
    _v409 = ({
      filterDetails: _v0,
      selectedValues: _v1
    }) => {
      let {
          sendFilterEvent: _v2
        } = _v265(),
        _v3 = (0, _v15.useBreakpointValue)({
          base: "md",
          md: "sm"
        }),
        {
          onCheckboxChange: _v4,
          onClearFilter: _v5
        } = _v136(),
        {
          options: _v6,
          name: _v7,
          nameCopy: _v8,
          untranslatedCopy: _v9
        } = _v0,
        _v10 = Object.keys(_v6),
        _v11 = !!_v1,
        _v12 = (_v0, _v1 = null) => {
          let _v2 = _v1 ? Object.keys(_v1) : [];
          _v2({
            copy: _v0,
            value: _v1?.length ? _v1 : null,
            valueName: _v9 ?? _v8,
            previousValue: _v2.length ? _v2 : null
          });
        };
      return (0, _v1.jsx)(_v404, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v406, {
            isExpanded: _v0,
            nameCopy: _v8,
            showResetButton: _v11,
            onResetClick: () => {
              _v5(_v7), _v12(_v31, null);
            }
          }), (0, _v1.jsx)(_v408, {
            children: (0, _v1.jsx)(_v375.Stack, {
              direction: "column",
              gap: "0",
              children: _v10.map((_v0, _v1) => {
                let _v2 = !!_v1?.[_v6[_v0].value],
                  _v3 = _v6[_v0]?.icon;
                return (0, _v1.jsx)(_v402.Checkbox, {
                  value: _v6[_v0].value,
                  isChecked: _v2,
                  onChange: () => {
                    var _v0;
                    let _v1;
                    return _v1 = _v119(_v4({
                      name: _v7,
                      value: _v0 = _v6[_v0].value,
                      isChecked: _v2
                    }), _v7), void _v12(_v118(_v6, _v0), _v1);
                  },
                  paddingY: "sm",
                  size: _v3,
                  children: (0, _v1.jsxs)(_v159.Text, {
                    variant: {
                      base: "body-lg",
                      md: "body-md"
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: "75",
                    children: [_v3, _v6[_v0].text]
                  })
                }, _v1);
              })
            })
          })]
        })
      });
    };
  var _v410 = _v0.i(0),
    _v411 = _v0.i(0),
    _v412 = _v0.i(0);
  let _v413 = () => {
    let {
        onLibraryFilterChange: _v0,
        onClearFilter: _v1,
        customMetadata: _v2
      } = _v136(),
      {
        trackFilterByCustomMetadata: _v3
      } = (0, _v412.useLibraryTracking)();
    return (0, _v1.jsx)(_v410.CustomMetadataFilterAccordion, {
      serializedFilter: _v2,
      onChange: _v0 => {
        null === _v0 ? _v1(_v54) : (_v0(_v54, _v0), _v3({
          appliedFilters: (0, _v411.countCustomMetadataClauses)(_v0)
        }));
      }
    });
  };
  var _v414 = _v0.i(0);
  let _v415 = () => {
    let {
        sendFilterEvent: _v0
      } = _v265(),
      _v1 = (0, _v3.useContext)(_v26.ViewerContext),
      [_v2, _v3] = (0, _v3.useState)("custom"),
      {
        onLibraryFilterChange: _v4,
        onClearFilter: _v5,
        date: _v6
      } = _v136(),
      [_v7, _v8] = _v6?.split(",") ?? [],
      _v9 = _v7 && _v8 ? [_v122(_v7), _v122(_v8)] : void 0,
      [_v10, _v11] = (0, _v3.useState)(_v9),
      {
        options: _v12,
        name: _v13,
        nameCopy: _v14,
        untranslatedCopy: _v15
      } = _v76,
      _v16 = () => {
        _v5(_v13), _v0({
          copy: _v31,
          value: ["default"],
          valueName: _v15 ?? _v14,
          previousValue: [_v6 ?? "default"]
        });
      };
    (0, _v3.useEffect)(() => {
      _v6 || _v11([]);
    }, [_v6]), (0, _v3.useEffect)(() => {
      if (_v10 && _v10.length > 1) {
        let _v0 = _v10.map(({
          year: _v0,
          month: _v1,
          day: _v2
        }) => {
          let _v3 = String(_v1).padStart(2, "0"),
            _v4 = String(_v2).padStart(2, "0");
          return `${_v0}-${_v3}-${_v4}`;
        }).join(",");
        _v4(_v13, _v0), _v0({
          copy: _v2,
          value: [_v0],
          valueName: _v2 ?? _v14,
          previousValue: [_v6 ?? "default"]
        });
      } else _v10 && 0 === _v10.length && _v16();
    }, [_v10]);
    let _v17 = (0, _v3.useMemo)(() => Object.values(_v12).map(({
        label: _v0,
        value: _v1
      }) => ({
        label: _v0,
        value: _v1
      })), [_v12]),
      _v18 = (_v0, _v1) => {
        _v3(_v17?.find(({
          label: _v0
        }) => _v0 === _v1?.label)?.label || "custom"), _v11(_v0);
      };
    return (0, _v1.jsx)(_v404, {
      children: ({
        isExpanded: _v0
      }) => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v406, {
          isExpanded: _v0,
          nameCopy: _v14,
          showResetButton: !!_v6,
          onResetClick: _v16
        }), (0, _v1.jsx)(_v408, {
          pb: {
            base: "md",
            md: "3"
          },
          children: (0, _v1.jsx)(_v414.DateRangePicker, {
            value: _v10,
            locale: _v1?.locale ?? "en-US",
            maxDate: _v122(),
            minDate: _v122("1980-01-01"),
            isMobile: !0,
            presetValues: _v17,
            onValueChange: _v18,
            borderRadius: "none",
            bg: "none",
            backdropFilter: "none",
            boxShadow: "none",
            padding: "0"
          })
        })]
      })
    });
  };
  var _v416 = _v0.i(0);
  let _v417 = ({
    searchTerm: _v0,
    onInputChange: _v1,
    onClearClick: _v2,
    placeholder: _v3 = _v50.SEARCH
  }) => (0, _v1.jsxs)(_v390.InputGroup, {
    size: {
      base: "md",
      md: "sm"
    },
    marginBottom: "sm",
    children: [(0, _v1.jsx)(_v389.Input, {
      className: "peer",
      placeholder: _v3,
      onChange: _v1,
      role: "search",
      value: _v0 || "",
      borderColor: "stroke",
      _placeholder: {
        color: "text-secondary"
      },
      bgColor: "transparent",
      sx: {
        "&&": {
          paddingX: {
            base: (0, _v9.rem)(44),
            md: (0, _v9.rem)(34)
          },
          paddingY: 0
        }
      }
    }), (0, _v1.jsx)(_v391.InputLeftElement, {
      width: "max-content",
      paddingLeft: {
        base: (0, _v9.rem)(16),
        md: (0, _v9.rem)(12)
      },
      paddingRight: (0, _v9.rem)(8),
      height: "100%",
      color: "text-secondary",
      _peerFocus: {
        color: "text-primary"
      },
      children: (0, _v1.jsx)(_v165.SearchMagnifier, {
        boxSize: {
          base: (0, _v9.rem)(20),
          md: (0, _v9.rem)(14)
        }
      })
    }), !!_v0 && (0, _v1.jsx)(_v391.InputRightElement, {
      width: "max-content",
      height: "100%",
      paddingLeft: (0, _v9.rem)(8),
      paddingRight: {
        base: (0, _v9.rem)(16),
        md: (0, _v9.rem)(12)
      },
      children: (0, _v1.jsx)(_v392.CloseXCircleFilled, {
        boxSize: {
          base: (0, _v9.rem)(20),
          md: (0, _v9.rem)(14)
        },
        "aria-label": _v50.CLEAR,
        onClick: _v2
      })
    })]
  });
  var _v418 = _v0.i(0);
  let _v419 = ({
      height: _v0
    }) => (0, _v1.jsx)(_v365.VStack, {
      width: "100%",
      height: _v0,
      justifyContent: "center",
      alignItems: "center",
      children: (0, _v1.jsx)(_v418.Spinner, {
        "data-testid": "loader-icon",
        size: "md"
      })
    }),
    _v420 = ({
      selectedLength: _v0,
      headerCopy: _v1,
      onSelectedCountClick: _v2
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: _v0 > 0 ? (0, _v1.jsx)(_v157.Button, {
        onClick: _v2,
        size: "md",
        variant: "tertiary",
        paddingX: "0",
        _hover: {},
        _active: {},
        _dark: {
          _hover: {},
          _active: {}
        },
        children: (0, _v1.jsx)(_v159.Text, {
          variant: "heading-xs",
          height: (0, _v9.rem)(40),
          lineHeight: (0, _v9.rem)(40),
          color: "text-primary",
          _hover: {
            color: "text-secondary"
          },
          children: (0, _v48.translate)({
            singular: "1 selected",
            plural: "{COUNT} selected",
            count: _v0,
            replacements: {
              COUNT: _v0
            },
            dictionary: {
              es: {
                singular: "1 seleccionada",
                plural: "{COUNT} seleccionadas"
              },
              "de-DE": {
                singular: "1 ausgewählt",
                plural: "{COUNT} ausgewählt"
              },
              "fr-FR": {
                singular: "1 sélectionné",
                plural: "{COUNT} sélectionnés"
              },
              "ja-JP": {
                singular: "1 件選択ずみ",
                plural: "{COUNT} 個選択されています"
              },
              "ko-KR": {
                singular: "1개 선택됨",
                plural: "{COUNT}개 선택됨"
              },
              "pt-BR": {
                singular: "1 selecionada",
                plural: "{COUNT} selecionadas"
              },
              "zh-CN": {
                singular: "已选择 1 个",
                plural: "已选择 {COUNT} 个"
              }
            }
          })
        })
      }) : (0, _v1.jsx)(_v159.Text, {
        variant: "heading-xs",
        height: (0, _v9.rem)(40),
        lineHeight: (0, _v9.rem)(40),
        color: "text-secondary",
        children: _v1
      })
    }),
    _v421 = () => (0, _v1.jsxs)(_v365.VStack, {
      width: "100%",
      height: (0, _v9.rem)(136),
      justifyContent: "center",
      alignItems: "center",
      children: [(0, _v1.jsx)(_v159.Text, {
        "aria-live": "polite",
        variant: "heading-sm",
        children: _v50.NO_FILTER_RESULTS
      }), (0, _v1.jsx)(_v159.Text, {
        "aria-live": "polite",
        variant: "body-sm",
        color: "text-secondary",
        children: _v50.TRY_ANOTHER_SEARCH
      })]
    }),
    _v422 = () => {
      let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          sendFilterEvent: _v1
        } = _v265(),
        {
          onCheckboxChange: _v2,
          onClearFilter: _v3,
          folderIncluded: _v4,
          folderExcluded: _v5
        } = _v136(),
        [_v6, {
          data: _v7
        }] = (0, _v262.useGetUserItemsLazy)(),
        [_v8, _v9] = (0, _v3.useState)(""),
        [_v10, _v11] = (0, _v3.useState)({}),
        [_v12, _v13] = (0, _v3.useState)(!!_v4),
        [_v14, _v15] = (0, _v3.useState)(!1),
        [_v16, _v17] = (0, _v3.useState)({}),
        _v18 = (0, _v3.useRef)(!1),
        _v19 = (0, _v416.useDebouncedValue)(_v8, 500),
        {
          data: _v20,
          isLoading: _v21
        } = (0, _v262.useGetUserItems)(() => _v0?.user ? {
          where: {
            userId: _v0?.teamUser?.ownerId || _v0?.user?.id
          },
          query: {
            filter: "folder",
            page: 1,
            perPage: 10,
            query: _v19,
            includeFolderIds: _v18.current ? void 0 : _v4
          },
          select: _v102
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1,
          revalidateOnReconnect: !1
        });
      (0, _v3.useEffect)(() => {
        _v20?.data && (!1 === _v18.current && _v4 && _v11(_v20?.data.reduce((_v0, _v1) => {
          let _v2 = _v1.folder?.uri.split("/")[4];
          return _v2 && _v4?.includes(_v2) && (_v0[_v2] = _v1, _v23(_v2, !1)), _v0;
        }, {})), _v18.current = !0);
      }, [_v20]), (0, _v3.useEffect)(() => {
        let _v0 = _v7?.paging.first.match(/include_folder_ids=(\d+)/)?.[1];
        if (_v0) {
          let _v0 = {
            ..._v16
          };
          _v7?.data?.forEach(_v0 => {
            let _v1 = _v0.folder?.uri.split("/")[4];
            _v1 && _v1 !== _v0 && (_v0[_v1] = _v0);
          }), _v17(_v0);
        }
      }, [_v7]);
      let _v22 = _v4?.split(",")?.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1]: !0
        }), {}),
        _v23 = async (_v0, _v1) => {
          if (_v1) {
            let _v0 = {
              ..._v16
            };
            for (let [_v0, _v1] of Object.entries(_v0)) (_v1 === _v0 || _v0 === _v0) && delete _v0[_v0];
            _v17(_v0);
            return;
          }
          await _v6({
            where: {
              userId: _v0?.teamUser?.ownerId || _v0?.user?.id
            },
            query: {
              filter: "folder",
              page: 1,
              perPage: 10,
              includeFolderIds: _v0,
              sort: "last_user_action_event_date",
              direction: "desc"
            },
            select: _v102
          });
        },
        _v24 = _v12 ? Object.values(_v10) : _v20?.data,
        _v25 = _v4?.split(",")?.length || 0,
        _v26 = (_v24?.length ?? 0) > 5,
        _v27 = _v14 ? _v24 : _v24?.slice(0, 5),
        _v28 = !!_v22,
        {
          folderIncludedName: _v29,
          folderExcludedName: _v30,
          nameCopy: _v31,
          untranslatedCopy: _v32
        } = _v75,
        _v33 = _v19 && _v24 ? _v50.SELECT_FOLDERS : _v50.LAST_MODIFIED,
        _v34 = () => {
          _v9(""), _v25 > 0 && _v13(!0);
        },
        _v35 = _v0 => {
          _v0.target.value ? (_v9(_v0.target.value), _v13(!1)) : _v34();
        },
        _v36 = (_v0, _v1) => _v0 ? [..._v0.split(",").map(_v0 => `in:${_v0}`), ...(_v1 ? _v1.split(",").map(_v0 => `excluded:${_v0}`) : [])] : null,
        _v37 = () => {
          _v3([_v29, _v30]), _v11({}), _v17({}), _v13(!1), _v1({
            copy: _v31,
            value: null,
            valueName: _v32,
            previousValue: _v36(_v4, _v5)
          });
        };
      return (0, _v1.jsx)(_v404, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v406, {
            isExpanded: _v0,
            nameCopy: _v31,
            showResetButton: _v28,
            onResetClick: _v37
          }), (0, _v1.jsxs)(_v408, {
            children: [(0, _v1.jsx)(_v417, {
              searchTerm: _v8,
              onInputChange: _v35,
              onClearClick: _v34,
              placeholder: _v50.SEARCH_FOLDERS
            }), (0, _v1.jsx)(_v1.Fragment, {
              children: _v21 || !_v20 ? (0, _v1.jsx)(_v419, {
                height: (0, _v9.rem)(136)
              }) : (0, _v1.jsx)(_v1.Fragment, {
                children: _v20?.data?.length === 0 ? (0, _v1.jsx)(_v421, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v420, {
                    selectedLength: _v25,
                    headerCopy: _v33,
                    onSelectedCountClick: () => _v13(!0)
                  }), (0, _v1.jsx)(_v365.VStack, {
                    gap: "0",
                    alignItems: "flex-start",
                    children: _v27?.map((_v0, _v1) => {
                      let {
                        folder: _v2
                      } = _v0;
                      if (!_v2) return;
                      let _v3 = _v2?.uri.split("/")[4],
                        _v4 = !!_v22?.[_v3] || !!_v16[_v3];
                      return (0, _v1.jsx)(_v423, {
                        onChange: () => {
                          let _v0, _v1;
                          _v0 = {
                            ..._v10
                          }, _v1 = null, _v4 ? _v22?.[_v3] ? (delete _v0[_v3], 1 === _v25 && _v13(!1), _v1 = _v2([{
                            name: _v30,
                            value: _v3,
                            isChecked: !1
                          }, {
                            name: _v29,
                            value: _v3,
                            isChecked: _v4
                          }])) : _v1 = _v2({
                            name: _v30,
                            value: _v3,
                            isChecked: !1
                          }) : (_v1 = _v2({
                            name: _v29,
                            value: _v3,
                            isChecked: _v4
                          }), _v0 = {
                            ..._v10,
                            [_v3]: _v0
                          }), _v23(_v3, _v4), _v11(_v0), _v1({
                            copy: null,
                            value: _v36(_v1[_v29], _v1[_v30]),
                            valueName: _v32,
                            previousValue: _v36(_v4, _v5)
                          });
                        },
                        folderName: _v2.name,
                        isChecked: _v4
                      }, _v1);
                    })
                  })]
                })
              })
            }), _v26 && (0, _v1.jsx)(_v205, {
              onClick: () => _v15(!_v14),
              children: _v14 ? _v50.SHOW_LESS : _v50.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v423 = ({
      folderName: _v0,
      isChecked: _v1,
      onChange: _v2
    }) => {
      let _v3 = (0, _v15.useBreakpointValue)({
        base: "md",
        md: "sm"
      });
      return (0, _v1.jsx)(_v402.Checkbox, {
        isChecked: _v1,
        onChange: _v2,
        paddingY: "sm",
        size: _v3,
        children: (0, _v1.jsx)(_v365.VStack, {
          justifyContent: "space-between",
          alignItems: "start",
          gap: "xs",
          children: (0, _v1.jsx)(_v159.Text, {
            variant: {
              base: "body-lg",
              md: "body-md"
            },
            isTruncated: !0,
            width: (0, _v9.rem)(165),
            children: _v0
          })
        })
      });
    };
  var _v424 = _v0.i(0);
  let _v425 = ["active", "user.name", "user.pictures.sizes", "user.uri"],
    _v426 = () => {
      let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          sendFilterEvent: _v1
        } = _v265(),
        {
          onCheckboxChange: _v2,
          onClearFilter: _v3,
          uploader: _v4
        } = _v136(),
        [_v5, _v6] = (0, _v3.useState)(""),
        [_v7, _v8] = (0, _v3.useState)({}),
        [_v9, _v10] = (0, _v3.useState)(!!_v4),
        [_v11, _v12] = (0, _v3.useState)(!1),
        _v13 = (0, _v3.useRef)(!1),
        _v14 = (0, _v416.useDebouncedValue)(_v5, 500),
        {
          data: _v15,
          isLoading: _v16
        } = (0, _v424.useGetUserTeammembers)(() => _v0?.user ? {
          where: {
            userId: _v0?.teamUser?.ownerId || _v0?.user?.id
          },
          query: {
            excludeInvisible: !1,
            perPage: 10,
            query: _v14,
            users: _v13.current ? void 0 : _v4
          },
          select: _v425
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1,
          revalidateOnReconnect: !1
        });
      (0, _v3.useEffect)(() => {
        _v15?.data && (!1 === _v13.current && _v4 && _v8(_v15?.data.reduce((_v0, _v1) => (_v1.user && (_v0[_v1.user?.uri.split("/")[2]] = _v1), _v0), {})), _v13.current = !0);
      }, [_v15]);
      let _v17 = _v4?.split(",")?.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1]: !0
        }), {}),
        _v18 = _v9 ? Object.values(_v7) : _v15?.data,
        _v19 = _v4?.split(",")?.length || 0,
        _v20 = (_v18?.length ?? 0) > 5,
        _v21 = _v11 ? _v18 : _v18?.slice(0, 5),
        _v22 = _v14 && _v18 ? _v50.SELECT_USERS : _v50.LAST_ACTIVE,
        _v23 = !!_v17,
        {
          name: _v24,
          nameCopy: _v25,
          untranslatedCopy: _v26
        } = _v74,
        _v27 = () => {
          _v6(""), _v19 > 0 && _v10(!0);
        },
        _v28 = _v0 => {
          _v0.target.value ? (_v6(_v0.target.value), _v10(!1)) : _v27();
        },
        _v29 = () => {
          _v3(_v24), _v8({}), _v10(!1), _v1({
            copy: _v31,
            value: null,
            valueName: _v26 ?? _v25,
            previousValue: Object.keys(_v7)
          });
        };
      return (0, _v1.jsx)(_v404, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v406, {
            isExpanded: _v0,
            nameCopy: _v25,
            showResetButton: _v23,
            onResetClick: _v29
          }), (0, _v1.jsxs)(_v408, {
            children: [(0, _v1.jsx)(_v417, {
              searchTerm: _v5,
              onInputChange: _v28,
              onClearClick: _v27
            }), (0, _v1.jsx)(_v1.Fragment, {
              children: _v16 ? (0, _v1.jsx)(_v419, {
                height: (0, _v9.rem)(136)
              }) : (0, _v1.jsx)(_v1.Fragment, {
                children: _v15?.data?.length === 0 ? (0, _v1.jsx)(_v421, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v420, {
                    selectedLength: _v19,
                    headerCopy: _v22,
                    onSelectedCountClick: () => _v10(!0)
                  }), (0, _v1.jsx)(_v365.VStack, {
                    gap: "0",
                    alignItems: "flex-start",
                    children: _v21?.map((_v0, _v1) => {
                      let {
                        user: _v2
                      } = _v0;
                      if (!_v2) return;
                      let _v3 = _v2?.uri.split("/")[2],
                        _v4 = !!_v17?.[_v3];
                      return (0, _v1.jsx)(_v427, {
                        onChange: () => {
                          let _v0;
                          _v2({
                            name: _v24,
                            value: _v3,
                            isChecked: _v4
                          }), _v0 = {
                            ..._v7
                          }, _v4 ? (delete _v0[_v3], 1 === _v19 && _v10(!1)) : _v0 = {
                            ..._v7,
                            [_v3]: _v0
                          }, _v8(_v0), _v1({
                            copy: null,
                            value: Object.keys(_v0),
                            valueName: _v26 ?? _v25,
                            previousValue: Object.keys(_v7)
                          });
                        },
                        userInfo: _v0,
                        isChecked: _v4
                      }, _v1);
                    })
                  })]
                })
              })
            }), _v20 && (0, _v1.jsx)(_v205, {
              onClick: () => _v12(!_v11),
              children: _v11 ? _v50.SHOW_LESS : _v50.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v427 = ({
      userInfo: _v0,
      isChecked: _v1,
      onChange: _v2
    }) => {
      let _v3 = (0, _v15.useBreakpointValue)({
          base: "md",
          md: "sm"
        }),
        {
          active: _v4,
          user: _v5
        } = _v0;
      return (0, _v1.jsx)(_v402.Checkbox, {
        isChecked: _v1,
        onChange: _v2,
        paddingY: "sm",
        size: _v3,
        children: (0, _v1.jsxs)(_v364.HStack, {
          gap: "0",
          children: [(0, _v1.jsx)(_v185.Avatar, {
            size: "sm",
            alt: _v50.PROFILE_PICTURE,
            src: _v5?.pictures?.sizes?.[0]?.link,
            nameProps: {
              name: _v5?.name ?? ""
            }
          }), (0, _v1.jsxs)(_v364.HStack, {
            justifyContent: "space-between",
            children: [(0, _v1.jsx)(_v159.Text, {
              variant: {
                base: "body-lg",
                md: "body-md"
              },
              isTruncated: !0,
              width: _v4 ? (0, _v9.rem)(120) : (0, _v9.rem)(50),
              marginLeft: "sm",
              children: _v5?.name
            }), !_v4 && (0, _v1.jsx)(_v186.Badge, {
              color: "text-secondary",
              backgroundColor: "stroke",
              size: "sm",
              children: _v50.DEACTIVATED
            })]
          })]
        })
      });
    },
    _v428 = () => {
      let {
          type: _v0,
          queryFields: _v1,
          privacy: _v2
        } = _v136(),
        {
          hasAutoClosedCaptions: _v3,
          hasTeamPrivacy: _v4
        } = _v27(),
        _v5 = (0, _v129.useOrionSettingsFields)(["show_custom_metadata"]),
        {
          fields: _v6,
          isLoading: _v7
        } = (0, _v401.useTeamCustomMetadataFields)({
          enabled: _v5.show_custom_metadata
        }),
        _v8 = _v6.length > 0,
        _v9 = _v5.show_custom_metadata && !_v7 && _v8,
        _v10 = ((_v0, _v1 = _v70.options.default.value) => {
          let _v2 = structuredClone(_v71);
          switch (_v1) {
            case _v70.options.default.value:
            case _v70.options.folder.value:
              _v2.options = {
                title: _v2.options.title
              };
              break;
            case _v70.options.showcase.value:
            case _v70.options.live_event.value:
              _v2.options = {
                title: _v2.options.title,
                description: _v2.options.description,
                tags: _v2.options.tags
              };
              break;
            case _v70.options.video.value:
              _v0 || delete _v2.options.transcript;
          }
          return _v2;
        })(_v3, _v0),
        _v11 = _v0 => _v0?.split(",")?.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1]: !0
        }), {}),
        _v12 = _v0 !== _v70.options.folder.value,
        _v13 = _v0 !== _v70.options.showcase.value,
        _v14 = _v73();
      return _v4 || (_v14.options = Object.fromEntries(Object.entries(_v14.options).filter(([_v0]) => _v0 !== _v49.DEFAULT_PRIVACY_VALUES.TEAM))), (0, _v1.jsxs)(_v400.Accordion, {
        allowMultiple: !0,
        allowToggle: !0,
        defaultIndex: [...Array(_v9 ? 12 : 11).keys()],
        marginBottom: "sm",
        gap: {
          base: "md",
          md: "sm"
        },
        children: [(0, _v1.jsx)(_v409, {
          selectedValues: _v11(_v1),
          filterDetails: _v10
        }), _v13 && (0, _v1.jsx)(_v422, {}), (0, _v1.jsx)(_v415, {}), _v12 && (0, _v1.jsx)(_v409, {
          selectedValues: _v11(_v2),
          filterDetails: _v14
        }), (0, _v1.jsx)(_v426, {}), _v9 && (0, _v1.jsx)(_v413, {})]
      });
    },
    _v429 = () => {
      let {
          sendSortEvent: _v0
        } = _v265(),
        {
          sort: _v1,
          onLibraryFilterChange: _v2
        } = _v136(),
        _v3 = _v1 || _v93.relevance.value;
      return (0, _v1.jsx)(_v240.Menu, {
        children: (0, _v1.jsx)(_v360.MenuOptionGroup, {
          defaultValue: _v3,
          type: "radio",
          onChange: _v0 => {
            let _v1 = null;
            for (let _v0 of Object.values(_v93)) if (_v0.value === _v0) {
              _v1 = _v0.untranslatedText;
              break;
            }
            _v0({
              copy: _v1,
              value: _v0,
              previousValue: _v3
            }), _v2(_v36, _v0);
          },
          children: Object.keys(_v93).map((_v0, _v1) => (0, _v1.jsx)(_v358.MenuItemOption, {
            value: _v93[_v0].value,
            children: _v93[_v0].text
          }, _v1))
        })
      });
    };
  var _v430 = _v0.i(0),
    _v431 = _v0.i(0);
  let _v432 = () => {
    let _v0,
      _v1 = (0, _v2.useRouter)(),
      _v2 = (0, _v3.useContext)(_v26.ViewerContext),
      {
        searchType: _v3
      } = (0, _v3.useContext)(_v127),
      {
        query: _v4,
        type: _v5
      } = _v243(),
      _v6 = _v58.options.people.value,
      _v7 = _v58.options.clip.value,
      _v8 = _v5 !== _v6,
      _v9 = _v3 === _v125,
      {
        data: _v10,
        isLoading: _v11
      } = _v257(() => _v1.isReady && _v2?.apiUrl && _v8 && _v9 ? {
        select: ["clip.name"],
        query: {
          filterType: _v5 ? _v58.options[_v5].value : _v7,
          query: _v4,
          facets: !0
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v12 = _v10?.facets?.category;
    return {
      facetsAreLoading: _v11,
      categoryFilter: _v12 && (_v0 = {
        default: {
          value: "default",
          text: _v50.ANY
        }
      }, _v12.options.forEach(_v0 => {
        _v0.total > 0 && (_v0[_v0.name] = {
          value: _v0.name,
          text: _v0.text
        });
      }), {
        nameCopy: _v5 === _v58.options.ondemand.value ? _v50.GENRES : _v50.CATEGORIES,
        name: _v12.name,
        options: _v0
      })
    };
  };
  var _v433 = _v0.i(0),
    _v434 = _v0.i(0);
  let _v435 = ({
      value: _v0,
      filterDetails: _v1,
      onChange: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(!1),
        _v5 = (0, _v15.useBreakpointValue)({
          base: "md",
          md: "sm"
        }),
        {
          onFilterChange: _v6
        } = _v243(),
        {
          sendFilterEvent: _v7
        } = _v265(),
        {
          options: _v8,
          name: _v9,
          nameCopy: _v10,
          untranslatedCopy: _v11
        } = _v1,
        _v12 = _v8.default?.value,
        _v13 = _v0 && _v8[_v0] ? _v8[_v0].value : _v12,
        _v14 = _v9 === _v58.name,
        _v15 = Object.keys(_v8),
        _v16 = _v15.length > 8,
        _v17 = _v3 ? _v15 : _v15.slice(0, 8),
        _v18 = !_v14 && void 0 !== _v0;
      return (0, _v1.jsx)(_v404, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v406, {
            isExpanded: _v0,
            nameCopy: _v10,
            showResetButton: _v18,
            onResetClick: () => {
              _v6(_v9, "default"), _v7({
                copy: _v31,
                value: [_v12],
                valueName: _v11 ?? _v10,
                previousValue: [_v13]
              });
            }
          }), (0, _v1.jsxs)(_v408, {
            children: [(0, _v1.jsx)(_v433.RadioGroup, {
              onChange: _v0 => {
                _v7({
                  copy: _v118(_v8, _v0),
                  value: [_v0],
                  valueName: _v11 ?? _v10,
                  previousValue: [_v13]
                }), _v2 ? _v2(_v9, _v0) : _v6(_v9, _v0);
              },
              value: _v13,
              defaultValue: _v12,
              children: (0, _v1.jsx)(_v375.Stack, {
                direction: "column",
                gap: "0",
                children: _v17.map(_v0 => (0, _v1.jsx)(_v434.Radio, {
                  size: _v5,
                  value: _v8[_v0].value,
                  paddingY: (0, _v9.rem)(8),
                  children: (0, _v1.jsx)(_v159.Text, {
                    variant: {
                      base: "body-lg",
                      md: "body-md"
                    },
                    isTruncated: !0,
                    width: (0, _v9.rem)(168),
                    children: _v8[_v0].text
                  })
                }, _v0))
              })
            }), _v16 && (0, _v1.jsx)(_v205, {
              onClick: () => _v4(!_v3),
              children: _v3 ? _v50.SHOW_LESS : _v50.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v436 = () => {
      let {
          updated: _v0,
          category: _v1
        } = _v243(),
        {
          categoryFilter: _v2
        } = _v432();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v435, {
          value: _v0,
          filterDetails: _v57
        }), _v2 && (0, _v1.jsx)(_v435, {
          value: _v1,
          filterDetails: _v2
        })]
      });
    },
    _v437 = () => {
      let {
          live: _v0,
          hdr: _v1,
          vimeo360: _v2,
          price: _v3,
          license: _v4,
          resolution: _v5,
          duration: _v6,
          collection: _v7,
          uploaded: _v8,
          category: _v9
        } = _v243(),
        {
          categoryFilter: _v10
        } = _v432();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v10 && (0, _v1.jsx)(_v435, {
          value: _v9,
          filterDetails: _v10
        }), (0, _v1.jsx)(_v435, {
          value: _v0,
          filterDetails: _v59
        }), (0, _v1.jsx)(_v435, {
          value: _v1,
          filterDetails: _v60
        }), (0, _v1.jsx)(_v435, {
          value: _v2,
          filterDetails: _v61
        }), (0, _v1.jsx)(_v435, {
          value: _v3,
          filterDetails: _v62
        }), (0, _v1.jsx)(_v435, {
          value: _v4,
          filterDetails: _v63
        }), (0, _v1.jsx)(_v435, {
          value: _v5,
          filterDetails: _v64
        }), (0, _v1.jsx)(_v435, {
          value: _v6,
          filterDetails: _v65
        }), (0, _v1.jsx)(_v435, {
          value: _v7,
          filterDetails: _v66
        }), (0, _v1.jsx)(_v435, {
          value: _v8,
          filterDetails: _v56
        })]
      });
    },
    _v438 = () => {
      let {
          category: _v0
        } = _v243(),
        {
          categoryFilter: _v1
        } = _v432();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v435, {
          value: _v0,
          filterDetails: _v1
        })
      });
    },
    _v439 = () => {
      let {
          category: _v0
        } = _v243(),
        {
          categoryFilter: _v1
        } = _v432();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v435, {
          value: _v0,
          filterDetails: _v1
        })
      });
    },
    _v440 = () => {
      let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
        {
          follow: _v1,
          onFilterChange: _v2
        } = _v243(),
        {
          sendFilterEvent: _v3
        } = _v265(),
        _v4 = (0, _v15.useBreakpointValue)({
          base: "md",
          md: "sm"
        });
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v0?.user && (0, _v1.jsx)(_v404, {
          children: ({
            isExpanded: _v0
          }) => (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v406, {
              isExpanded: _v0,
              nameCopy: _v67.nameCopy,
              showResetButton: !!_v1,
              onResetClick: () => {
                _v2(_v67.name, _v67.options.default.value), _v3({
                  copy: _v31,
                  value: [_v67.options.default.value],
                  valueName: _v67.untranslatedCopy ?? _v67.nameCopy,
                  previousValue: [_v1]
                });
              }
            }), (0, _v1.jsx)(_v408, {
              children: (0, _v1.jsx)(_v402.Checkbox, {
                isChecked: !!_v1,
                paddingY: "sm",
                size: _v4,
                onChange: () => {
                  let _v0 = !0 == !!_v1 ? _v67.options.default.value : _v67.options.follow.value;
                  _v2("follow", _v0), _v3({
                    copy: _v67.options.follow.untranslatedText,
                    value: [_v0],
                    valueName: _v67.untranslatedCopy ?? _v67.nameCopy,
                    previousValue: [_v1 ?? _v67.options.default.value]
                  });
                },
                children: _v67.options.follow.text
              })
            })]
          })
        })
      });
    },
    _v441 = () => {
      let {
          type: _v0
        } = _v243(),
        _v1 = (0, _v3.useContext)(_v26.ViewerContext),
        [_v2, _v3] = (0, _v3.useState)(!1),
        _v4 = _v58.options.clip.value,
        _v5 = _v58.options.channel.value,
        _v6 = _v58.options.people.value,
        _v7 = _v58.options.group.value,
        _v8 = _v58.options.ondemand.value;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v400.Accordion, {
          allowMultiple: !0,
          allowToggle: !0,
          defaultIndex: [...Array(11).keys()],
          children: (_v0 => {
            switch (_v0) {
              case _v6:
                return (0, _v1.jsx)(_v440, {});
              case _v5:
                return (0, _v1.jsx)(_v436, {});
              case _v7:
                return (0, _v1.jsx)(_v438, {});
              case _v4:
                return (0, _v1.jsx)(_v437, {});
              case _v8:
                return (0, _v1.jsx)(_v439, {});
              default:
                return;
            }
          })(_v0)
        }), (0, _v1.jsx)(_v157.Button, {
          size: "md",
          variant: "tertiary",
          backgroundColor: "fill-component",
          onClick: () => _v3(!0),
          width: "100%",
          leftIcon: (0, _v1.jsx)(_v430.SettingsGear, {}),
          marginY: "sm",
          justifyContent: "flex-start",
          children: _v50.CONTENT_FILTER
        }), _v1 && (0, _v1.jsx)(_v431.MatureContentModal, {
          open: _v2,
          onClose: () => _v3(!1),
          token: _v1.xsrft,
          ..._v1.contentViewingPrefs
        })]
      });
    },
    _v442 = () => {
      let {
          type: _v0 = _v58.options.clip.value,
          onFilterChange: _v1,
          sort: _v2
        } = _v243(),
        {
          sendSortEvent: _v3
        } = _v265(),
        _v4 = _v92[_v0],
        _v5 = _v2 ?? _v92.clip.relevance.value;
      return (0, _v1.jsx)(_v240.Menu, {
        children: (0, _v1.jsx)(_v360.MenuOptionGroup, {
          defaultValue: _v5,
          type: "radio",
          onChange: _v0 => {
            _v1(_v36, _v0);
            let _v1 = null;
            for (let _v0 of Object.values(_v4)) if (_v0.value === _v0) {
              _v1 = _v0.untranslatedText;
              break;
            }
            _v3({
              copy: _v1,
              value: _v0,
              previousValue: _v5
            });
          },
          children: Object.keys(_v4).map((_v0, _v1) => (0, _v1.jsx)(_v358.MenuItemOption, {
            value: _v4[_v0].value,
            children: _v4[_v0].text
          }, _v1))
        })
      });
    };
  var _v443 = _v0.i(0);
  let _v444 = () => {
      let {
          clearFilters: _v0,
          keepPreviousUrl: _v1
        } = _v243(),
        {
          clearLibraryFilters: _v2,
          keepPreviousLibraryUrl: _v3
        } = _v136(),
        {
          panelStatus: _v4,
          togglePanel: _v5,
          isDrawerOpen: _v6
        } = (0, _v3.useContext)(_v19),
        {
          searchType: _v7
        } = (0, _v3.useContext)(_v127),
        _v8 = _v4 === _v32,
        _v9 = _v7 === _v124,
        _v10 = () => {
          if (_v8) return _v9 ? _v3() : _v1();
        };
      return (0, _v1.jsxs)(_v191.Drawer, {
        placement: "bottom",
        isOpen: _v6,
        onClose: () => {
          _v10(), _v5();
        },
        children: [(0, _v1.jsx)(_v194.DrawerOverlay, {}), (0, _v1.jsx)(_v188.motion.div, {
          drag: "y",
          dragConstraints: {
            top: 0,
            bottom: 100
          },
          onDragEnd: (_v0, _v1) => {
            _v1.offset.y < 0 || (_v10(), _v5());
          },
          children: (0, _v1.jsxs)(_v193.DrawerContent, {
            maxHeight: `calc(100vh - ${(0, _v9.rem)(64)})`,
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            sx: {
              '&[data-placement="bottom"]': {
                maxW: "100vw"
              }
            },
            children: [(0, _v1.jsx)(_v189.bokeh.hr, {
              backgroundColor: "text-tertiary",
              alignSelf: "center",
              paddingY: (0, _v9.rem)(2),
              width: (0, _v9.rem)(70),
              border: "none",
              borderRadius: (0, _v9.rem)(10),
              my: "sm"
            }), (0, _v1.jsxs)(_v357.DrawerHeader, {
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              pt: (0, _v9.rem)(4),
              pr: (0, _v9.rem)(28),
              pb: "md",
              pl: (0, _v9.rem)(32),
              children: [(0, _v1.jsx)(_v159.Text, {
                variant: "heading-sm",
                children: _v8 ? _v50.FILTERS : _v50.SORT
              }), (0, _v1.jsx)(_v399.CloseButton, {
                "aria-label": "close button",
                size: "sm",
                variant: "tertiary",
                onClick: () => {
                  _v10(), _v5();
                }
              })]
            }), (0, _v1.jsx)(_v192.DrawerBody, {
              sx: {
                "&&": {
                  pt: "0"
                }
              },
              children: _v8 ? _v9 ? (0, _v1.jsx)(_v428, {}) : (0, _v1.jsx)(_v441, {}) : _v9 ? (0, _v1.jsx)(_v429, {}) : (0, _v1.jsx)(_v442, {})
            }), _v8 && (0, _v1.jsx)(_v443.DrawerFooter, {
              boxSizing: "border-box",
              padding: "0",
              children: (0, _v1.jsxs)(_v237.Grid, {
                templateColumns: "repeat(2, 1fr)",
                gridGap: "md",
                width: "100%",
                height: (0, _v9.rem)(72),
                alignItems: "center",
                paddingX: "md",
                children: [(0, _v1.jsx)(_v157.Button, {
                  size: "md",
                  width: "100%",
                  variant: "tertiary",
                  marginRight: "xs",
                  onClick: () => {
                    _v9 ? _v2() : _v0(), _v5();
                  },
                  children: _v50.RESET_ALL
                }), (0, _v1.jsx)(_v157.Button, {
                  size: "md",
                  variant: "primary",
                  width: "100%",
                  marginRight: "xs",
                  onClick: () => {
                    _v5();
                  },
                  children: _v50.APPLY
                })]
              })
            })]
          })
        })]
      });
    },
    _v445 = () => {
      let {
          clearFilters: _v0,
          appliedFiltersCount: _v1
        } = _v243(),
        {
          clearLibraryFilters: _v2,
          appliedFiltersCount: _v3
        } = _v136(),
        {
          panelStatus: _v4,
          hasDrawer: _v5,
          togglePanel: _v6
        } = (0, _v3.useContext)(_v19),
        {
          searchType: _v7
        } = (0, _v3.useContext)(_v127),
        _v8 = (0, _v15.useBreakpointValue)(_v33),
        _v9 = _v7 === _v124,
        _v10 = _v4 === _v32,
        _v11 = _v8 === _v33.sm ? 10 : 40;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v5 ? (0, _v1.jsx)(_v444, {}) : (0, _v1.jsxs)(_v398.Panel, {
          isVisible: !!_v4,
          display: "flex",
          alignItems: "center",
          flexDir: "column",
          maxH: `calc(100vh - ${175 + _v11}px)`,
          paddingLeft: "sm",
          paddingTop: "sm",
          "data-testid": "side-panel",
          sx: {
            "--panel-bg": {
              base: "var(--vimeo-colors-fill-blur)",
              lg: "initial"
            },
            backdropFilter: {
              base: "blur(var(--vimeo-blur-lg))",
              lg: "initial"
            },
            boxShadow: {
              base: "md",
              lg: "initial"
            },
            marginBottom: {
              base: "md",
              lg: "0"
            },
            position: {
              base: "absolute",
              lg: "initial"
            },
            right: "0",
            flex: "1 0 auto",
            maxWidth: _v42
          },
          children: [(0, _v1.jsxs)(_v398.PanelHeader, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "sm",
            pr: "md",
            children: [(0, _v1.jsx)(_v159.Text, {
              variant: "heading-sm",
              children: _v10 ? _v50.FILTERS : _v50.SORT
            }), (0, _v1.jsx)(_v156.Box, {
              children: (0, _v1.jsx)(_v399.CloseButton, {
                "aria-label": "close button",
                size: "sm",
                variant: "tertiary",
                onClick: () => _v6()
              })
            })]
          }), (0, _v1.jsx)(_v398.PanelBody, {
            overflowY: "auto",
            padding: "0",
            pt: "sm",
            pr: "sm",
            sx: {
              scrollbarWidth: "thin",
              scrollbarColor: `${_v34} transparent`
            },
            children: (0, _v1.jsx)(_v156.Box, {
              width: 256,
              children: _v10 ? _v9 ? (0, _v1.jsx)(_v428, {}) : (0, _v1.jsx)(_v441, {}) : _v9 ? (0, _v1.jsx)(_v429, {}) : (0, _v1.jsx)(_v442, {})
            })
          }), (_v9 ? _v3 > 0 : _v1 > 0) && _v10 && (0, _v1.jsx)(_v365.VStack, {
            py: "sm",
            pr: "sm",
            alignSelf: "stretch",
            children: (0, _v1.jsx)(_v157.Button, {
              size: "sm",
              variant: "tertiary",
              width: "100%",
              onClick: () => _v9 ? _v2() : _v0(),
              children: _v50.RESET_ALL
            })
          })]
        })
      });
    },
    _v446 = () => {
      let {
        panelStatus: _v0
      } = (0, _v3.useContext)(_v19);
      return _v0 ? (0, _v1.jsx)(_v445, {}) : (0, _v1.jsx)(_v1.Fragment, {});
    },
    _v447 = {
      contentMaxWidth: (0, _v9.rem)(0),
      contentInlineStart: (0, _v9.rem)(16)
    },
    _v448 = () => {
      let {
          searchType: _v0
        } = (0, _v3.useContext)(_v127),
        {
          hasAgenticSearch: _v1,
          hasPublicSearchDisabled: _v2
        } = _v27(),
        _v3 = (0, _v2.useRouter)(),
        _v4 = _v224(),
        _v5 = (0, _v14.useViewer)(),
        {
          trackSearchPageDisplayed: _v6
        } = (0, _v12.useSearchTracking)(),
        _v7 = (0, _v3.useRef)(null),
        _v8 = _v0 === _v125,
        _v9 = _v112(_v3.query.q),
        _v10 = _v1 && ("" !== _v9 || void 0 !== _v4);
      return ((0, _v11.usePicoEffect)(() => {
        if (!_v3.isReady || !_v9 || !_v5 || _v7.current === _v9) return;
        _v7.current = _v9;
        let _v0 = _v112(_v3.query.type);
        _v6({
          searchQuery: _v1 && !_v8 ? null : _v9,
          searchActiveTab: _v8 ? "vimeo" : "library",
          searchResultType: _v0 && "default" !== _v0 ? _v0 : "all",
          searchPageViewerAuthStatus: (0, _v10.deriveViewerAuthStatus)(_v5)
        });
      }, [_v3.isReady, _v9, _v3.query.type, _v1, _v8, _v5]), (_v5?.isFromCopyrightRestrictedRegion || _v5?.isSimplifiedSite) && _v8) ? (0, _v1.jsx)(_v13.PageNotAvailablePage, {}) : _v3.isReady ? !_v9 && _v8 ? (0, _v1.jsx)(_v394, {}) : (0, _v1.jsx)(_v8.Flex, {
        flexDir: "column",
        paddingBottom: {
          base: "md",
          md: "lg"
        },
        paddingTop: {
          base: (0, _v9.rem)(12),
          md: "md"
        },
        paddingX: {
          base: "sm",
          md: "md"
        },
        gap: {
          base: "md",
          md: "md"
        },
        color: "text-primary",
        height: "calc(100vh - 64px)",
        maxWidth: (0, _v9.rem)(0),
        width: "100%",
        alignSelf: "center",
        children: (0, _v1.jsx)(_v20, {
          children: (0, _v1.jsx)(_v449, {
            enabled: _v1,
            isPublicSearch: _v8,
            children: (0, _v1.jsxs)(_v151, {
              children: [(0, _v1.jsx)(_v282, {
                showLibraryToggle: !_v2
              }), (0, _v1.jsxs)(_v8.Flex, {
                justifyContent: "space-between",
                flexGrow: "1",
                overflow: "hidden",
                gap: {
                  base: "md",
                  md: "lg"
                },
                children: [_v8 ? (0, _v1.jsx)(_v388, {}) : (0, _v1.jsxs)(_v8.Flex, {
                  flexDir: "column",
                  height: "100%",
                  overflow: "scroll",
                  position: "relative",
                  flexGrow: "1",
                  sx: {
                    scrollbarWidth: "thin",
                    scrollbarColor: `${_v34} transparent`
                  },
                  children: [_v1 && _v10 && (0, _v1.jsxs)(_v8.Flex, {
                    direction: "column",
                    marginBottom: "md",
                    children: [(0, _v1.jsx)(_v235, {}), (0, _v1.jsx)(_v236, {})]
                  }), _v1 && (0, _v1.jsx)(_v362, {}), (0, _v1.jsx)(_v355, {})]
                }), (0, _v1.jsx)(_v446, {})]
              })]
            })
          })
        })
      }) : null;
    },
    _v449 = ({
      children: _v0,
      enabled: _v1,
      isPublicSearch: _v2
    }) => _v2 ? _v0 : (0, _v1.jsx)(_v146, {
      enabled: _v1,
      children: _v0
    }),
    _v450 = () => (0, _v1.jsx)(_v271, {
      children: (0, _v1.jsx)(_v128, {
        children: (0, _v1.jsx)(_v448, {})
      })
    });
  var _v451 = _v0.i(0),
    _v452 = _v0.i(0),
    _v453 = _v0.i(0);
  let _v454 = () => {
    let _v0 = (0, _v3.useContext)(_v26.ViewerContext),
      _v1 = (0, _v2.useRouter)();
    return (0, _v3.useEffect)(() => {
      let {
        slug: _v0,
        ..._v1
      } = _v1.query;
      _v1.isReady && _v0?.[0] === _v124 && !_v1.q && _v1.push({
        query: {
          sort: "last_user_action_event_date_desc",
          ..._v1,
          slug: _v0
        }
      }, void 0, {
        shallow: !0
      });
    }, [_v1.isReady]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v450, {}), _v0 && (0, _v1.jsx)(_v451.EssentialFooter, {
        ..._v0,
        enableQuotaMenu: !1
      })]
    });
  };
  (0, _v7.withPageSetup)(async _v0 => {
    let _v1 = _v0.req?.url?.split("?")[0],
      _v2 = _v1?.split("/").pop() || "";
    return ["search", "ondemand", "people", "channel", "group", "library"].includes(_v2) ? _v2 === _v124 && _v0.req && (0, _v6.isLoggedOut)(_v0.req) ? {
      redirect: {
        destination: "/log_in",
        permanent: !1
      }
    } : {
      props: {
        hasThemeSupport: !0,
        hasUploader: !0
      }
    } : (_v1?.includes("sort:relevant/format:detail") && _v5({
      key: "custom.404_type",
      value: "ignorable_404",
      tagRootSpan: !0
    }), {
      notFound: !0
    });
  }, {
    inlineViewer: "all"
  }), _v454.getLayout = _v0 => {
    let _v1;
    {
      let _v0 = new URLSearchParams(window.location.search).get("q"),
        _v1 = window.location.pathname.includes(`/${_v124}`);
      _v1 = !!_v0 || _v1;
    }
    return (0, _v1.jsx)(_v453.VideoLibraryLayout, {
      hasSideNav: !0,
      hasGlobalSearch: _v1,
      searchContentAlignment: _v447,
      sideNavContent: (0, _v1.jsx)(_v452.SideNavContent, {
        surface: "home"
      }),
      sideNavSurface: "home",
      children: _v0
    });
  }, _v0.s(["__N_SSP", 0, !0, "default", 0, _v454], 0);
}