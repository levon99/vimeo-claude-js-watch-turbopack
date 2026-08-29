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
    _v20 = _v0.i(633),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
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
    _v52 = _v0.i(0);
  let _v53 = ["Owner", "Admin", "Contributor Plus"],
    _v54 = () => {
      let _v0 = (0, _v45.useViewer)(),
        {
          settings: _v1,
          isLoadingResponse: _v2
        } = (0, _v52.useOrionSettings)(),
        _v3 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
        {
          capabilities: _v4,
          ready: _v5
        } = (0, _v33.useCapability)(["hasEventSeriesEnabled"], _v3),
        {
          data: _v6,
          isLoading: _v7
        } = (0, _v51.useGetUserTeamRole)(() => _v3 && !_v2 && _v1.enable_event_series ? {
          select: ["permissionLevel"],
          where: {
            userId: _v3
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        _v8 = _v2 || _v7 || !_v5,
        _v9 = _v1.enable_event_series && !!_v6?.permissionLevel && _v53.includes(_v6.permissionLevel),
        _v10 = _v4.hasEventSeriesEnabled;
      return {
        canAccessEventSeriesEditor: !_v8 && (_v9 || _v10),
        isLoading: _v8
      };
    };
  _v0.s(["useAccessEventSeriesEditor", 0, _v54], 0);
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  _v0.s(["useHomePrimaryNavItems", 0, () => {
    let {
        setIsSideNavOpen: _v0
      } = (0, _v3.useContext)(_v48.VideoLibraryLayoutContext),
      [_v1] = (0, _v6.useToken)("breakpoints", ["lg"]),
      [_v2] = (0, _v5.useMediaQuery)([`(max-width: ${_v1})`]),
      _v3 = (0, _v2.useRouter)(),
      _v4 = (0, _v45.useViewer)(),
      {
        canAccessEventSeriesEditor: _v5
      } = _v54(),
      _v6 = _v4?.user?.id ?? 0,
      _v7 = _v4?.teamUser?.ownerId ?? _v6,
      {
        trackSidebarNavClicked: _v8
      } = (0, _v43.useWatchTracking)(),
      {
        starredItemsData: _v9,
        isLoading: _v10,
        starredListError: _v11
      } = (0, _v57.useStarredItemDataContext)(),
      _v12 = !_v10 && !_v11 && _v9.length > 0,
      {
        capabilities: _v13,
        loading: _v14
      } = (0, _v33.useCapability)(["canContributorAccessShowcase", "hasSharedWithMe", "hasVideoLibraryShowcases", "hasVideoManagerLiveEventsMenu", "hasWatchButton", "hasUseVimeoStreaming"], _v7),
      {
        capabilities: _v15,
        loading: _v16
      } = (0, _v33.useCapability)(["hasSimplifiedEnterpriseAccount"]),
      _v17 = _v4?.teamUser?.plainTextPermissionLevel === "Viewer",
      {
        contentSpaceEnabled: _v18
      } = (0, _v32.useContentSpaceEnabled)(_v7),
      _v19 = _v18 ? (0, _v38.translate)({
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
      }) : (0, _v38.translate)({
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
        data: _v20,
        isLoading: _v21
      } = (0, _v35.useGetUserFoldersPrivateToMe)(() => _v7 && _v18 ? {
        where: {
          ownerId: _v7
        },
        select: ["uri"]
      } : null),
      {
        data: _v22,
        isLoading: _v23
      } = (0, _v36.useGetUserOttSites)(() => _v7 && _v13.hasUseVimeoStreaming ? {
        where: {
          userId: _v7
        },
        select: ["externalAdminUrl"],
        query: {
          direction: "desc",
          sort: "date"
        }
      } : null),
      _v24 = _v22?.data[0]?.externalAdminUrl,
      {
        data: _v25,
        isLoading: _v26
      } = (0, _v37.useGetUserTeamsSharedItems)(() => _v13.hasSharedWithMe && _v4?.user?.id ? {
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
      _v27 = !!_v25?.data?.length,
      {
        data: _v28,
        isLoading: _v29,
        mutate: _v30
      } = (0, _v34.useGetMePreferences)({
        select: ["rdtim", "spdot"]
      }),
      [_v31] = (0, _v34.usePatchMePreferences)(),
      _v32 = (0, _v46.useIsNewSidebarUser)(),
      {
        maximizeVideoFileTransferAdoption: _v33,
        maximizeReviewAdoption: _v34
      } = (0, _v39.useAdoptionSettings)(),
      {
        openReviewModal: _v35
      } = (0, _v49.useReviewModal)(),
      {
        openTransferFileModal: _v36
      } = (0, _v50.useTransferFileModal)(),
      {
        trackTransferEntryPointClicked: _v37
      } = (0, _v41.useFileTransferAdoptionTracking)(),
      {
        trackReviewEntryPointClicked: _v38
      } = (0, _v42.useMaximizeReviewAdoptionTracking)();
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
          _v16 = _v0 => _v8({
            sidebarNavDestination: _v0,
            sidebarNavContext: (0, _v40.deriveCanonicalPage)(new URL(window.location.href), {
              is_team_user: _v4?.user?.isTeamUser ?? !1
            }),
            version: "2"
          }),
          _v17 = _v4?.isSimplifiedSite ?? !1,
          _v18 = _v4?.isFromCopyrightRestrictedRegion ?? !1,
          _v19 = !_v16 && !_v4?.isEnterpriseSite && !_v17 && !_v15?.hasSimplifiedEnterpriseAccount && _v13.hasWatchButton && !_v18,
          _v20 = {
            key: "home",
            label: (0, _v38.translate)({
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
            icon: (_v0 = _v55.Path.Home, _v3.pathname === _v0) ? (0, _v1.jsx)(_v16.HomeFilled, {}) : (0, _v1.jsx)(_v15.Home, {}),
            href: _v55.Path.Home,
            active: (_v1 = _v55.Path.Home, _v3.pathname === _v1),
            onClick: () => {
              _v16("home"), _v15();
            }
          },
          _v21 = null != _v20 && (_v2 = _v55.Path.MVV, _v3.pathname === _v2) && "true" === _v3.query.isPrivate,
          _v22 = _v20 ? {
            key: "my_library",
            label: (0, _v38.translate)({
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
            icon: _v21 ? (0, _v1.jsx)(_v18.MyLibraryFilled, {}) : (0, _v1.jsx)(_v17.MyLibrary, {}),
            href: (0, _v56.getFolderPageUriFromApiUri)(_v20.uri),
            prefetch: !1,
            active: _v21,
            onClick: () => {
              _v16("my_library"), _v15();
            }
          } : null,
          _v23 = (_v3 = _v55.Path.TeamLibrary, _v3.pathname === _v3 || (_v4 = _v55.Path.MVV, _v3.pathname === _v4 && !_v21)),
          _v24 = {
            key: "library",
            label: _v19,
            icon: _v23 ? _v18 ? (0, _v1.jsx)(_v24.TeamLibraryFilled, {}) : (0, _v1.jsx)(_v30.VideosStackFilled, {}) : _v18 ? (0, _v1.jsx)(_v23.TeamLibrary, {}) : (0, _v1.jsx)(_v29.VideosStack, {}),
            href: `${_v55.Path.TeamLibrary}?library_referrer=sidebar`,
            active: _v23,
            dataId: "home_side_nav_libary_menu_item",
            onClick: () => {
              _v16(_v18 ? "team_library" : "my_library"), _v15();
            }
          },
          _v25 = _v13.hasSharedWithMe && _v27 ? {
            key: "shared_with_me",
            label: (0, _v38.translate)({
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
            icon: (_v5 = _v55.Path.SharedWithMe, _v3.pathname === _v5) ? (0, _v1.jsx)(_v28.UsersFilled, {}) : (0, _v1.jsx)(_v27.Users, {}),
            href: _v55.Path.SharedWithMe,
            prefetch: !1,
            active: (_v6 = _v55.Path.SharedWithMe, _v3.pathname === _v6),
            dataId: "side_nav_shared_with_me",
            onClick: () => {
              _v16("shared_with_me"), _v15();
            }
          } : null,
          _v26 = _v13.hasVideoManagerLiveEventsMenu ? {
            key: "live_events",
            label: (0, _v38.translate)({
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
            icon: (_v7 = _v55.Path.LiveEvents, _v3.pathname === _v7) ? (0, _v1.jsx)(_v12.CameraOnFilled, {}) : (0, _v1.jsx)(_v11.CameraOn, {}),
            href: _v55.Path.LiveEvents,
            prefetch: !1,
            active: (_v8 = _v55.Path.LiveEvents, _v3.pathname === _v8),
            dataId: "home_side_nav_live_events_menu_item",
            onClick: () => {
              _v16("live_events"), _v15();
            }
          } : null,
          _v27 = _v5 ? {
            key: "event_series",
            label: (0, _v38.translate)({
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
            icon: (_v9 = _v55.Path.EventSeries, _v3.pathname === _v9) ? (0, _v1.jsx)(_v10.BrowserWindowFilled, {}) : (0, _v1.jsx)(_v9.BrowserWindow, {}),
            href: _v55.Path.EventSeries,
            prefetch: !1,
            active: (_v10 = _v55.Path.EventSeries, _v3.pathname === _v10),
            dataId: "home_side_nav_event_series_menu_item",
            onClick: () => {
              _v16("event_series"), _v15();
            }
          } : null,
          _v28 = _v13.hasVideoLibraryShowcases ? {
            key: "showcases",
            label: (0, _v38.translate)({
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
            icon: (_v11 = _v55.Path.Showcases, _v3.pathname === _v11) ? (0, _v1.jsx)(_v22._3GridTopLayoutFilled, {}) : (0, _v1.jsx)(_v21._3GridTopLayout, {}),
            href: _v55.Path.Showcases,
            prefetch: !1,
            active: (_v12 = _v55.Path.Showcases, _v3.pathname === _v12),
            onClick: () => {
              _v16("showcases"), _v15();
            }
          } : null,
          _v29 = () => {
            _v15();
          },
          _v30 = _v24 ? {
            key: "streaming_site",
            label: (0, _v38.translate)({
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
            icon: (0, _v1.jsx)(_v20.PurchaseVideo, {}),
            href: _v24,
            dataId: "home_side_nav_streaming_site_menu_item",
            showActionOnHover: !0,
            action: (0, _v1.jsx)(_v4.Link, {
              href: _v24,
              onClick: _v0 => {
                _v29(), _v0.stopPropagation();
              },
              variant: "secondary",
              children: (0, _v1.jsx)(_v19.PopOut, {})
            }),
            onClick: _v29
          } : null,
          _v31 = _v3.pathname.startsWith(_v55.Path.Analytics),
          _v32 = [_v26, _v27, _v28, _v30, _v17 ? null : {
            key: "analytics",
            label: (0, _v38.translate)({
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
            icon: _v31 ? (0, _v1.jsx)(_v8.AnalyticsFilled, {}) : (0, _v1.jsx)(_v7.Analytics, {}),
            active: _v31,
            href: `${_v55.Path.Analytics}?ref=sidebar`,
            prefetch: !1,
            onClick: () => {
              _v16("analytics"), _v15();
            }
          }, !_v17 && _v7 && _v33 ? {
            key: "transfer",
            label: (0, _v38.translate)({
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
            icon: (0, _v1.jsx)(_v14.FileUpload, {}),
            action: (0, _v1.jsx)(_v44.NewBadge, {}),
            onClick: () => {
              _v37({
                entryPoint: "side_bar"
              }), _v36("side_bar"), _v15();
            }
          } : null, !_v17 && _v7 && _v34 ? {
            key: "review",
            label: (0, _v38.translate)({
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
            icon: (0, _v1.jsx)(_v13.Chats, {}),
            action: (0, _v1.jsx)(_v44.NewBadge, {}),
            onClick: () => {
              _v38({
                entryPoint: "side_bar"
              }), _v35("side_bar"), _v15();
            }
          } : null, !_v4?.teamUser || _v4.teamUser.permissionLevel <= _v55.RECENTLY_DELETED_MAX_PERMISSION_LEVEL ? {
            key: "recently_deleted",
            label: (0, _v38.translate)({
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
            icon: (_v13 = _v55.Path.RecentlyDeleted, _v3.pathname === _v13) ? (0, _v1.jsx)(_v26.TrashBinFilled, {}) : (0, _v1.jsx)(_v25.TrashBin, {}),
            href: _v55.Path.RecentlyDeleted,
            prefetch: !1,
            active: (_v14 = _v55.Path.RecentlyDeleted, _v3.pathname === _v14),
            action: void 0 === _v28 || _v28.rdtim ? void 0 : (0, _v1.jsx)(_v31.NewFeatureDot, {}),
            onClick: () => {
              _v16("recently_deleted"), _v15();
            }
          } : null].filter(Boolean),
          _v33 = _v19 ? (0, _v47.getWatchSectionItems)().map(_v0 => {
            let _v1 = "staff_picks" === _v0.key && void 0 !== _v28 && !_v28.spdot && !_v32;
            return {
              key: _v0.key,
              label: _v0.label,
              icon: _v0.isActive(_v3.pathname) ? _v0.iconActive : _v0.icon,
              href: _v0.href,
              prefetch: !1,
              active: _v0.isActive(_v3.pathname),
              action: _v1 ? (0, _v1.jsx)(_v31.NewFeatureDot, {}) : void 0,
              onClick: () => {
                _v16(_v0.destination), _v15(), _v1 && (_v30({
                  ..._v28,
                  spdot: !0
                }, {
                  revalidate: !1
                }), _v31({
                  select: ["spdot"],
                  variables: {
                    spdot: 1
                  }
                }));
              }
            };
          }) : [],
          _v34 = _v18 ? [_v24, ...(_v22 ? [_v22] : []), ...(_v25 ? [_v25] : [])] : [_v24, ...(_v25 ? [_v25] : []), ..._v32];
        return [_v33.length > 0 ? [_v20, ..._v33] : [_v20, ..._v34], ...(_v33.length > 0 ? [_v34] : []), ...(_v18 ? [_v32] : [])].filter(_v0 => _v0.length > 0);
      }, [_v2, _v0, _v3, _v8, _v4, _v17, _v7, _v16, _v15, _v13, _v20, _v18, _v19, _v5, _v24, _v27, _v33, _v34, _v35, _v36, _v37, _v38, _v28, _v30, _v31, _v32]),
      hasStarredItems: _v12,
      isInitialLoading: _v14 || _v16 || _v21 || _v23 || _v29 || _v26
    };
  }], 0);
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  _v0.s(["StarredExpandableMenuItem", 0, ({
    active: _v0,
    children: _v1,
    dropRef: _v2,
    hasActiveColor: _v3 = !1,
    hasToggle: _v4,
    hoverColor: _v5,
    iconSize: _v6 = "xs",
    id: _v7,
    indentation: _v8 = 8,
    isLoading: _v9 = !1,
    isFetching: _v10 = !1,
    isOpen: _v11,
    onClickToggle: _v12,
    toggleId: _v13,
    fontWeight: _v14,
    onKeyPress: _v15,
    tabIndex: _v16,
    hoverBackgroundColor: _v17,
    paddingTop: _v18,
    height: _v19,
    iconTopMargin: _v20,
    leadingIconSize: _v21,
    ..._v22
  }) => {
    let [_v23, _v24] = (0, _v3.useState)(!1),
      _v25 = void 0 !== _v11,
      _v26 = _v25 ? _v11 : _v23,
      _v27 = (0, _v62.useColorModeValue)("slate.200", "grayscale.600"),
      _v28 = (0, _v62.useColorModeValue)("slate.700", "text-secondary"),
      _v29 = _v3 ? _v0 || _v26 ? "text-primary" : _v28 : "text-primary";
    return (0, _v1.jsxs)(_v58.Box, {
      onDragStart: _v0 => _v0.dataTransfer.effectAllowed = "none",
      id: _v7,
      width: "100%",
      position: "relative",
      onKeyDown: _v15,
      overflow: "hidden",
      userSelect: "none",
      _hover: {
        "div > button": {
          "> svg": {
            path: {
              fill: _v5
            }
          }
        }
      },
      children: [(0, _v1.jsx)(_v66.IrisOnly, {
        children: (0, _v1.jsxs)(_v58.Box, {
          ref: _v2 ?? void 0,
          position: "relative",
          overflow: "hidden",
          paddingTop: _v18,
          paddingBottom: _v4 || _v1 ? "2px" : 0,
          _after: {
            content: '" "',
            position: "absolute",
            inset: 0,
            border: `${(0, _v63.rem)(2)} solid`,
            borderColor: _v9 && !_v10 ? "blue.500" : "transparent",
            borderRadius: (0, _v63.rem)(8),
            transition: "border 400ms ease",
            zIndex: 10,
            pointerEvents: "none"
          },
          children: [(_v4 || _v1) && (0, _v1.jsx)(_v60.IconButton, {
            tabIndex: _v16,
            icon: (0, _v1.jsx)(_v64.ChevronRightSmall, {}),
            "aria-label": "Toggle menu items list",
            "aria-expanded": _v26 ? "true" : "false",
            onClick: _v25 ? _v12 : () => _v24(!_v23),
            id: _v13,
            variant: "tertiary",
            position: "absolute",
            size: _v6,
            left: (0, _v63.rem)(_v8),
            border: 0,
            transition: "background 200ms",
            top: (0, _v63.rem)(_v20 || 8),
            color: _v29,
            _hover: {
              background: _v27
            },
            sx: {
              "> svg": {
                transition: "120ms ease-in-out",
                transform: _v26 ? "rotate(90deg)" : "rotate(0deg)",
                path: {
                  fill: _v29
                }
              }
            }
          }), (0, _v1.jsx)(_v67.MenuItem, {
            active: _v0,
            fontWeight: _v14,
            hoverColor: _v5,
            indentation: _v8,
            menuItemColor: _v29,
            hoverBackgroundColor: _v17,
            height: _v19,
            ..._v22
          }), (0, _v1.jsx)(_v58.Box, {
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            children: _v9 && (0, _v1.jsx)(_v61.Spinner, {
              size: "sm"
            })
          })]
        })
      }), (0, _v1.jsx)(_v66.BokehOnly, {
        children: (0, _v1.jsxs)(_v59.Flex, {
          ref: _v2 ?? void 0,
          position: "relative",
          alignItems: "center",
          overflow: "hidden",
          width: "100%",
          justifyContent: "space-between",
          _after: {
            content: '" "',
            position: "absolute",
            inset: 0,
            border: `${(0, _v63.rem)(2)} solid`,
            borderColor: _v9 && !_v10 ? "vimeoBlue.500" : "transparent",
            borderRadius: "sm",
            transition: "border 400ms ease",
            pointerEvents: "none"
          },
          children: [(0, _v1.jsx)(_v67.MenuItem, {
            active: _v0,
            fontWeight: _v14,
            hoverColor: _v5,
            menuItemColor: _v29,
            hoverBackgroundColor: _v17,
            height: _v19,
            ...(_v21 ? {
              iconSize: _v21
            } : {}),
            ..._v22
          }), (_v4 || _v1) && (0, _v1.jsx)(_v60.IconButton, {
            tabIndex: _v16,
            icon: (0, _v1.jsx)(_v65.ChevronDownSmall, {}),
            "aria-label": "Toggle menu items list",
            "aria-expanded": _v26 ? "true" : "false",
            onClick: _v25 ? _v12 : () => _v24(!_v23),
            id: _v13,
            variant: "tertiary",
            size: "s" === _v6 ? "sm" : _v6,
            color: _v29,
            sx: {
              "> svg": {
                transition: "120ms ease-in-out",
                transform: _v26 ? "rotate(-180deg)" : "rotate(0deg)",
                path: {
                  fill: _v29
                }
              }
            }
          }), (0, _v1.jsx)(_v58.Box, {
            position: "absolute",
            right: "0.5rem",
            children: _v9 && (0, _v1.jsx)(_v61.Spinner, {
              size: "sm"
            })
          })]
        })
      }), _v1 && _v26 && (0, _v1.jsx)(_v59.Flex, {
        flexDirection: "column",
        gap: (0, _v63.rem)(2),
        children: _v1.map(_v0 => _v0 ? (0, _v3.cloneElement)(_v0, {
          indentation: _v8 + 8
        }) : null)
      })]
    });
  }], 0);
}