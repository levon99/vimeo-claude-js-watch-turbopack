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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(633),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = _v6.keyframes`
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--vimeo-colors-fill-brand) 60%, transparent); }
  50% { box-shadow: 0 0 0 5px color-mix(in srgb, var(--vimeo-colors-fill-brand) 0%, transparent); }
`;
  _v0.s(["useHomePrimaryNavItems", 0, () => {
    let {
        setIsSideNavOpen: _v0
      } = (0, _v3.useContext)(_v50.VideoLibraryLayoutContext),
      [_v1] = (0, _v9.useToken)("breakpoints", ["lg"]),
      [_v2] = (0, _v8.useMediaQuery)([`(max-width: ${_v1})`]),
      _v3 = (0, _v2.useRouter)(),
      _v4 = (0, _v48.useViewer)(),
      {
        settings: _v5,
        isLoadingResponse: _v6
      } = (0, _v42.useOrionSettings)(),
      _v7 = _v4?.user?.id ?? 0,
      _v8 = _v4?.teamUser?.ownerId ?? _v7,
      {
        trackSidebarNavClicked: _v9
      } = (0, _v46.useWatchTracking)(),
      {
        starredItemsData: _v10,
        isLoading: _v11,
        starredListError: _v12
      } = (0, _v55.useStarredItemDataContext)(),
      _v13 = !_v11 && !_v12 && _v10.length > 0,
      {
        capabilities: _v14,
        loading: _v15
      } = (0, _v35.useCapability)(["canContributorAccessShowcase", "hasSharedWithMe", "hasVideoLibraryShowcases", "hasVideoManagerLiveEventsMenu", "hasWatchButton", "hasUseVimeoStreaming"], _v8),
      {
        capabilities: _v16,
        loading: _v17
      } = (0, _v35.useCapability)(["hasSimplifiedEnterpriseAccount"]),
      _v18 = _v4?.teamUser?.plainTextPermissionLevel === "Viewer",
      {
        contentSpaceEnabled: _v19
      } = (0, _v34.useContentSpaceEnabled)(_v8),
      _v20 = _v19 ? (0, _v40.translate)({
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
      }) : (0, _v40.translate)({
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
      {
        data: _v21,
        isLoading: _v22
      } = (0, _v37.useGetUserFoldersPrivateToMe)(() => _v8 && _v19 ? {
        where: {
          ownerId: _v8
        },
        select: ["uri"]
      } : null),
      {
        data: _v23,
        isLoading: _v24
      } = (0, _v38.useGetUserOttSites)(() => _v8 && _v14.hasUseVimeoStreaming ? {
        where: {
          userId: _v8
        },
        select: ["externalAdminUrl"],
        query: {
          direction: "desc",
          sort: "date"
        }
      } : null),
      _v25 = _v23?.data[0]?.externalAdminUrl,
      {
        data: _v26,
        isLoading: _v27
      } = (0, _v39.useGetUserTeamsSharedItems)(() => _v14.hasSharedWithMe && _v4?.user?.id ? {
        select: ["type"],
        where: {
          userId: _v4.user.id
        },
        query: {
          perPage: 1
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      _v28 = !!_v26?.data?.length,
      {
        data: _v29,
        isLoading: _v30
      } = (0, _v36.useGetMePreferences)({
        select: ["rdtim"]
      }),
      {
        maximizeVideoFileTransferAdoption: _v31,
        maximizeReviewAdoption: _v32
      } = (0, _v41.useAdoptionSettings)(),
      {
        openReviewModal: _v33
      } = (0, _v51.useReviewModal)(),
      {
        openTransferFileModal: _v34
      } = (0, _v52.useTransferFileModal)(),
      {
        trackTransferEntryPointClicked: _v35
      } = (0, _v44.useFileTransferAdoptionTracking)(),
      {
        trackReviewEntryPointClicked: _v36
      } = (0, _v45.useMaximizeReviewAdoptionTracking)();
    return {
      appSections: (0, _v3.useMemo)(() => {
        let _v0,
          _v1,
          _v2,
          _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10,
          _v11,
          _v12,
          _v13,
          _v14,
          _v15 = () => {
            _v2 && _v0(!1);
          },
          _v16 = _v0 => _v9({
            sidebarNavDestination: _v0,
            sidebarNavContext: (0, _v43.deriveCanonicalPage)(new URL(window.location.href), {
              is_team_user: _v4?.user?.isTeamUser ?? !1
            }),
            version: "2"
          }),
          _v17 = _v4?.isSimplifiedSite ?? !1,
          _v18 = _v4?.isFromCopyrightRestrictedRegion ?? !1,
          _v19 = !_v17 && !_v4?.isEnterpriseSite && !_v17 && !_v16?.hasSimplifiedEnterpriseAccount && _v14.hasWatchButton && !_v18,
          _v20 = {
            key: "home",
            label: (0, _v40.translate)({
              singular: "Home",
              dictionary: {
                es: {
                  singular: "Inicio"
                },
                "de-DE": {
                  singular: "Startseite"
                },
                "fr-FR": {
                  singular: "Accueil"
                },
                "ja-JP": {
                  singular: "ホーム"
                },
                "ko-KR": {
                  singular: "홈"
                },
                "pt-BR": {
                  singular: "Página Inicial"
                },
                "zh-CN": {
                  singular: "主页"
                }
              }
            }),
            icon: (_v0 = _v53.Path.Home, _v3.pathname === _v0) ? (0, _v1.jsx)(_v19.HomeFilled, {}) : (0, _v1.jsx)(_v18.Home, {}),
            href: _v53.Path.Home,
            active: (_v1 = _v53.Path.Home, _v3.pathname === _v1),
            onClick: () => {
              _v16("home"), _v15();
            }
          },
          _v21 = null != _v21 && (_v2 = _v53.Path.MVV, _v3.pathname === _v2) && "true" === _v3.query.isPrivate,
          _v22 = _v21 ? {
            key: "my_library",
            label: (0, _v40.translate)({
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
            }),
            icon: _v21 ? (0, _v1.jsx)(_v21.MyLibraryFilled, {}) : (0, _v1.jsx)(_v20.MyLibrary, {}),
            href: (0, _v54.getFolderPageUriFromApiUri)(_v21.uri),
            prefetch: !1,
            active: _v21,
            onClick: () => {
              _v16("my_library"), _v15();
            }
          } : null,
          _v23 = (_v3 = _v53.Path.TeamLibrary, _v3.pathname === _v3 || (_v4 = _v53.Path.MVV, _v3.pathname === _v4 && !_v21)),
          _v24 = {
            key: "library",
            label: _v20,
            icon: _v23 ? _v19 ? (0, _v1.jsx)(_v27.TeamLibraryFilled, {}) : (0, _v1.jsx)(_v33.VideosStackFilled, {}) : _v19 ? (0, _v1.jsx)(_v26.TeamLibrary, {}) : (0, _v1.jsx)(_v32.VideosStack, {}),
            href: `${_v53.Path.TeamLibrary}?library_referrer=sidebar`,
            active: _v23,
            dataId: "home_side_nav_libary_menu_item",
            onClick: () => {
              _v16(_v19 ? "team_library" : "my_library"), _v15();
            }
          },
          _v25 = _v14.hasSharedWithMe && _v28 ? {
            key: "shared_with_me",
            label: (0, _v40.translate)({
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
            }),
            icon: (_v5 = _v53.Path.SharedWithMe, _v3.pathname === _v5) ? (0, _v1.jsx)(_v31.UsersFilled, {}) : (0, _v1.jsx)(_v30.Users, {}),
            href: _v53.Path.SharedWithMe,
            prefetch: !1,
            active: (_v6 = _v53.Path.SharedWithMe, _v3.pathname === _v6),
            dataId: "side_nav_shared_with_me",
            onClick: () => {
              _v16("shared_with_me"), _v15();
            }
          } : null,
          _v26 = _v14.hasVideoManagerLiveEventsMenu ? {
            key: "live_events",
            label: (0, _v40.translate)({
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
            icon: (_v7 = _v53.Path.LiveEvents, _v3.pathname === _v7) ? (0, _v1.jsx)(_v15.CameraOnFilled, {}) : (0, _v1.jsx)(_v14.CameraOn, {}),
            href: _v53.Path.LiveEvents,
            prefetch: !1,
            active: (_v8 = _v53.Path.LiveEvents, _v3.pathname === _v8),
            dataId: "home_side_nav_live_events_menu_item",
            onClick: () => {
              _v16("live_events"), _v15();
            }
          } : null,
          _v27 = !_v6 && _v5.enable_event_series ? {
            key: "event_series",
            label: (0, _v40.translate)({
              singular: "Event series",
              dictionary: {
                es: {
                  singular: "Serie de eventos"
                },
                "de-DE": {
                  singular: "Veranstaltungsreihe"
                },
                "fr-FR": {
                  singular: "Série d'événements"
                },
                "ja-JP": {
                  singular: "イベントシリーズ"
                },
                "ko-KR": {
                  singular: "이벤트 시리즈"
                },
                "pt-BR": {
                  singular: "Série de eventos"
                },
                "zh-CN": {
                  singular: "系列活动"
                }
              }
            }),
            icon: (_v9 = _v53.Path.EventSeries, _v3.pathname === _v9) ? (0, _v1.jsx)(_v13.BrowserWindowFilled, {}) : (0, _v1.jsx)(_v12.BrowserWindow, {}),
            href: _v53.Path.EventSeries,
            prefetch: !1,
            active: (_v10 = _v53.Path.EventSeries, _v3.pathname === _v10),
            dataId: "home_side_nav_event_series_menu_item",
            onClick: () => {
              _v16("event_series"), _v15();
            }
          } : null,
          _v28 = _v14.hasVideoLibraryShowcases ? {
            key: "showcases",
            label: (0, _v40.translate)({
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
            icon: (_v11 = _v53.Path.Showcases, _v3.pathname === _v11) ? (0, _v1.jsx)(_v25._3GridTopLayoutFilled, {}) : (0, _v1.jsx)(_v24._3GridTopLayout, {}),
            href: _v53.Path.Showcases,
            prefetch: !1,
            active: (_v12 = _v53.Path.Showcases, _v3.pathname === _v12),
            onClick: () => {
              _v16("showcases"), _v15();
            }
          } : null,
          _v29 = () => {
            _v15();
          },
          _v30 = _v25 ? {
            key: "streaming_site",
            label: (0, _v40.translate)({
              singular: "Streaming site",
              dictionary: {
                es: {
                  singular: "sitio de transmisión"
                },
                "de-DE": {
                  singular: "Streaming-Website"
                },
                "fr-FR": {
                  singular: "Site de streaming"
                },
                "ja-JP": {
                  singular: "ストリーミングサイト"
                },
                "ko-KR": {
                  singular: "스트리밍 사이트"
                },
                "pt-BR": {
                  singular: "Site de streaming"
                },
                "zh-CN": {
                  singular: "流媒体网站"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v23.PurchaseVideo, {}),
            href: _v25,
            dataId: "home_side_nav_streaming_site_menu_item",
            showActionOnHover: !0,
            action: (0, _v1.jsx)(_v5.Link, {
              href: _v25,
              onClick: _v0 => {
                _v29(), _v0.stopPropagation();
              },
              variant: "secondary",
              children: (0, _v1.jsx)(_v22.PopOut, {})
            }),
            onClick: _v29
          } : null,
          _v31 = _v3.pathname.startsWith(_v53.Path.Analytics),
          _v32 = [_v26, _v27, _v28, _v30, _v18 ? null : {
            key: "analytics",
            label: (0, _v40.translate)({
              singular: "Analytics",
              dictionary: {
                es: {
                  singular: "Análisis"
                },
                "de-DE": {
                  singular: "Analytik"
                },
                "fr-FR": {
                  singular: "Analyses"
                },
                "ja-JP": {
                  singular: "分析"
                },
                "ko-KR": {
                  singular: "애널리틱스"
                },
                "pt-BR": {
                  singular: "Análises"
                },
                "zh-CN": {
                  singular: "分析"
                }
              }
            }),
            icon: _v31 ? (0, _v1.jsx)(_v11.AnalyticsFilled, {}) : (0, _v1.jsx)(_v10.Analytics, {}),
            active: _v31,
            href: `${_v53.Path.Analytics}?ref=sidebar`,
            prefetch: !1,
            onClick: () => {
              _v16("analytics"), _v15();
            }
          }, !_v18 && _v8 && _v31 ? {
            key: "transfer",
            label: (0, _v40.translate)({
              singular: "Transfer file",
              dictionary: {
                es: {
                  singular: "Transferir archivo"
                },
                "de-DE": {
                  singular: "Datei übertragen"
                },
                "fr-FR": {
                  singular: "Transférer un fichier"
                },
                "ja-JP": {
                  singular: "Transferでファイルを送信"
                },
                "ko-KR": {
                  singular: "파일 전송"
                },
                "pt-BR": {
                  singular: "Transferir arquivo"
                },
                "zh-CN": {
                  singular: "传输文件"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v17.FileUpload, {}),
            action: (0, _v1.jsx)(_v47.NewBadge, {}),
            onClick: () => {
              _v35({
                entryPoint: "side_bar"
              }), _v34("side_bar"), _v15();
            }
          } : null, !_v18 && _v8 && _v32 ? {
            key: "review",
            label: (0, _v40.translate)({
              singular: "Review",
              dictionary: {
                es: {
                  singular: "Revisar"
                },
                "de-DE": {
                  singular: "Überprüfung"
                },
                "fr-FR": {
                  singular: "Révision"
                },
                "ja-JP": {
                  singular: "レビュー"
                },
                "ko-KR": {
                  singular: "리뷰"
                },
                "pt-BR": {
                  singular: "Revisar"
                },
                "zh-CN": {
                  singular: "审阅"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v16.Chats, {}),
            action: (0, _v1.jsx)(_v47.NewBadge, {}),
            onClick: () => {
              _v36({
                entryPoint: "side_bar"
              }), _v33("side_bar"), _v15();
            }
          } : null, _v5.has_recently_deleted && (!_v4?.user?.capabilities.hasEnterprise || !_v4?.teamUser || _v4.teamUser.permissionLevel <= 2) ? {
            key: "recently_deleted",
            label: (0, _v40.translate)({
              singular: "Recently deleted",
              dictionary: {
                es: {
                  singular: "Eliminados recientemente"
                },
                "de-DE": {
                  singular: "Kürzlich gelöscht"
                },
                "fr-FR": {
                  singular: "Récemment supprimés"
                },
                "ja-JP": {
                  singular: "最近削除された項目"
                },
                "ko-KR": {
                  singular: "최근 삭제됨"
                },
                "pt-BR": {
                  singular: "Excluído recentemente"
                },
                "zh-CN": {
                  singular: "最近删除"
                }
              }
            }),
            icon: (_v13 = _v53.Path.RecentlyDeleted, _v3.pathname === _v13) ? (0, _v1.jsx)(_v29.TrashBinFilled, {}) : (0, _v1.jsx)(_v28.TrashBin, {}),
            href: _v53.Path.RecentlyDeleted,
            prefetch: !1,
            active: (_v14 = _v53.Path.RecentlyDeleted, _v3.pathname === _v14),
            action: void 0 === _v29 || _v29.rdtim ? void 0 : (0, _v1.jsx)(_v4.Box, {
              w: (0, _v7.rem)(8),
              h: (0, _v7.rem)(8),
              borderRadius: "full",
              bg: "fill-brand",
              flexShrink: 0,
              animation: `${_v56} 1.5s ease-in-out infinite`
            }),
            onClick: () => {
              _v16("recently_deleted"), _v15();
            }
          } : null].filter(Boolean),
          _v33 = _v19 ? (0, _v49.getWatchSectionItems)().map(_v0 => ({
            key: _v0.key,
            label: _v0.label,
            icon: _v0.isActive(_v3.pathname) ? _v0.iconActive : _v0.icon,
            href: _v0.href,
            prefetch: !1,
            active: _v0.isActive(_v3.pathname),
            onClick: () => {
              _v16(_v0.destination), _v15();
            }
          })) : [],
          _v34 = _v19 ? [_v24, ...(_v22 ? [_v22] : []), ...(_v25 ? [_v25] : [])] : [_v24, ...(_v25 ? [_v25] : []), ..._v32];
        return [_v33.length > 0 ? [_v20, ..._v33] : [_v20, ..._v34], ...(_v33.length > 0 ? [_v34] : []), ...(_v19 ? [_v32] : [])].filter(_v0 => _v0.length > 0);
      }, [_v2, _v0, _v3, _v9, _v4, _v18, _v8, _v17, _v16, _v14, _v21, _v19, _v20, _v5, _v6, _v25, _v28, _v31, _v32, _v33, _v34, _v35, _v36, _v29]),
      hasStarredItems: _v13,
      isInitialLoading: _v15 || _v17 || _v22 || _v24 || _v30 || _v27
    };
  }]);
}