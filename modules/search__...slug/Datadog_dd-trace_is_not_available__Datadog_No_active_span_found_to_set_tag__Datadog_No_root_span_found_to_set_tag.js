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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = new class {
    teamUser;
    contexts = {};
    init(_v0) {
      return this.teamUser = _v0, this;
    }
    withTeamCtx() {
      return this.addContext((0, _v18.buildTeamBpContextFromTeamUser)(this.teamUser)), this;
    }
    withViewCtx(_v0 = {}) {
      let _v1 = {
        view_type: "impression",
        feature: null,
        ..._v0
      };
      return this.addContext((0, _v20.buildViewBpContext)(_v1)), this;
    }
    withActionCtx(_v0 = {}) {
      let _v1 = {
        action_type: "click",
        feature: null,
        ..._v0
      };
      return this.addContext((0, _v16.buildActionBpContext)(_v1)), this;
    }
    withWebCtx(_v0 = {}) {
      let _v1 = {
        page_name: "search_result_page",
        referrer_page_name: null,
        referrer: document.referrer,
        path: window.location.pathname,
        copy: null,
        location: null,
        target: null,
        target_path: null,
        ..._v0
      };
      return this.addContext((0, _v21.buildWebBpContext)(_v1)), this;
    }
    withProductAnalyticsCtx(_v0 = {}) {
      let _v1 = {
        feature: "public_search",
        product: "search",
        location: "body",
        device_type: (0, _v15.default)(),
        is_user_facing_data: !1,
        entity_type: null,
        element: null,
        flow: null,
        modal_name: null,
        copy: null,
        scrolling_percentage: null,
        cta_location_id: null,
        ..._v0
      };
      return this.addContext((0, _v17.buildProductAnalyticsBpContext)(_v1)), this;
    }
    withThirdPartyIntegrationCtx(_v0 = {}) {
      let _v1 = {
        is_integration: !1,
        is_partner: !1,
        integration_id: null,
        integration_name: null,
        integration_type: null,
        managed_user_id: null,
        app_id: null,
        partner_bucket: null,
        ..._v0
      };
      return this.addContext((0, _v19.buildThirdPartyIntegrationBpContext)(_v1)), this;
    }
    withVideoCtx(_v0) {
      return this.addContext((0, _v22.buildVideoBpContext)({
        video_id: _v0
      })), this;
    }
    send({
      eventName: _v0,
      additionalFields: _v1,
      version: _v2
    }) {
      (0, _v23.sendBpEventWithContexts)(_v0, this.contexts, _v2, _v1), this.contexts = {};
    }
    addContext(_v0) {
      _v0 && (this.contexts = {
        ...this.contexts,
        ..._v0
      });
    }
  }();
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = (0, _v26.v4)(),
    _v29 = "Unable to load results",
    _v30 = "Reset",
    _v31 = "filters",
    _v32 = "moments",
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
    _v41 = "date",
    _v42 = (0, _v27.keyframes)({
      "0%": {
        opacity: "0"
      },
      "75%": {
        opacity: "0"
      },
      "100%": {
        opacity: "100%"
      }
    }),
    _v43 = `${_v42} 2s linear`,
    _v44 = (0, _v9.rem)(272),
    _v45 = {
      moments: void 0,
      currentIdx: void 0,
      currentVidId: void 0,
      momentEmbedUrl: void 0,
      currentVidLink: void 0,
      currentReviewLink: void 0
    },
    _v46 = {
      ask_ai: 0,
      like: 0,
      share: 0,
      watch_later: 0,
      badge: 0,
      byline: 0,
      portrait: 0,
      title: 0,
      airplay: 0,
      audio_tracks: 0,
      cc: 1,
      chapters: 0,
      chromecast: 0,
      fullscreen: 1,
      pip: 0,
      progress_bar: 1,
      quality_selector: 0,
      speed: 0,
      transcript: 0,
      volume: 1,
      vimeo_logo: 0,
      play_button_position: "bottom",
      force_embed: 1,
      autoplay: 1
    },
    _v47 = "(max-width: 768px)",
    _v48 = ["clip.name", "clip.pictures", "clip.user.name", "clip.user.pictures.sizes", "clip.metadata.connections", "clip.metadata.interactions.watchlater.added", "clip.uri", "clip.stats.plays", "clip.duration", "clip.createdTime", "clip.link", "clip.badge.type", "facet.type"],
    _v49 = ["ondemand.link", "ondemand.name", "ondemand.pictures.sizes", "ondemand.metadata.interactions.buy", "ondemand.metadata.interactions.rent", "ondemand.uri"],
    _v50 = ["people.name", "people.locationDetails.formattedAddress", "people.metadata.publicVideos.total", "people.pictures.sizes", "people.link", "people.metadata.connections.followers.total", "people.skills.name", "people.skills.uri", "people.backgroundVideo", "people.uri"],
    _v51 = ["channel.name", "channel.metadata.connections.users.total", "channel.metadata.connections.videos.total", "channel.pictures.sizes", "channel.link", "channel.uri"],
    _v52 = ["group.name", "group.metadata.connections.users.total", "group.metadata.connections.videos.total", "group.pictures.sizes", "group.link", "group.uri"],
    _v53 = ["folder.name", "folder.uri", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.createdTime", "folder.modifiedTime", "folder.settings", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.metadata.connections.ancestorPath", "folder.metadata.connections.parentFolder", "folder.metadata.connections.videos", "folder.metadata.interactions.invite", "folder.metadata.interactions.delete", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.edit", "video.name", "video.uri", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "video.user.metadata.connections.projects.options", "video.createdTime", "video.customMetadata", "video.lastUserActionEventDate", "video.modifiedTime", "video.link", "video.privacy", "video.type", "video.download", "video.pictures", "video.description", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.parentProject.isPrivateToUser", "video.parentProject.metadata.connections.ancestorPath", "video.parentProject.metadata.interactions.edit", "video.parentProject.metadata.interactions.moveVideo", "video.parentProject.name", "video.parentProject.uri", "video.manageLink", "video.canMoveToProject", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.metadata.interactions.invite.uri", "video.duration", "video.allowedPrivacies", "video.reviewPage", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.embed", "video.playerEmbedUrl", "showcase.createdTime", "showcase.name", "showcase.link", "showcase.privacy", "showcase.uri", "showcase.embed", "showcase.pictures", "showcase.metadata.connections.videos.total", "showcase.hasChosenThumbnail", "showcase.privacy", "showcase.modifiedTime", "showcase.metadata.interactions.delete", "liveEvent.createdTime", "liveEvent.hasRegistration", "liveEvent.metadata.connections.liveVideo.status", "liveEvent.metadata.interactions.delete", "liveEvent.metadata.interactions.edit", "liveEvent.nextOccurrenceTime", "liveEvent.link", "liveEvent.pictures.uri", "liveEvent.pictures.sizes", "liveEvent.title", "liveEvent.uri", "liveEvent.user.uri", "liveEvent.status", "liveEvent.streamPrivacy", "liveEvent.viewLink", "liveEvent.settingsLink", "liveEvent.parentFolder.uri", "liveEvent.parentFolder.name", "liveEvent.parentFolder.isPrivateToUser", "liveEvent.embed.html", "liveEvent.eventType", "meta", "type"],
    _v54 = ["contents", "contentsHighlight", "id", "startTime", "endTime", "thumbnail", "type", "url", "metadata", "attributes"],
    _v55 = ["folder.name", "folder.uri", "folder.metadata.connections.ancestorPath"],
    _v56 = "filters",
    _v57 = "sort",
    _v58 = "moments",
    _v59,
    _v60 = (0, _v3.createContext)({}),
    _v61 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v25.useBreakpointValue)({
          base: _v59,
          lg: _v56
        }),
        [_v2, _v3] = (0, _v3.useState)(_v1),
        [_v4, _v5] = (0, _v3.useState)(_v45),
        [_v6, _v7] = (0, _v3.useState)(),
        [_v8, _v9] = (0, _v3.useState)(Array(10).fill(null).map(() => ({
          loading: !1,
          hasMoments: !1
        }))),
        _v10 = (0, _v25.useBreakpointValue)({
          base: !0,
          md: !1
        }) ?? !1,
        _v11 = _v10 && !!_v2;
      return (0, _v3.useEffect)(() => {
        _v3(_v1);
      }, [_v1]), (0, _v3.useEffect)(() => {
        _v2 !== _v58 && _v4.momentEmbedUrl && _v5(_v45);
      }, [_v4.momentEmbedUrl, _v2]), (0, _v3.useEffect)(() => {
        for (let _v0 = 0; _v0 < _v8.length; _v0++) {
          if (_v8[_v0].loading) return;
          if (_v8[_v0].hasMoments) return void _v7(_v0);
        }
      }, [_v8]), (0, _v1.jsx)(_v60.Provider, {
        value: {
          panelStatus: _v2,
          togglePanel: _v0 => {
            _v2 === _v59 || _v0 !== _v2 ? _v3(_v0) : _v3(_v59);
          },
          panelMoments: _v4,
          setPanelMoments: _v0 => {
            _v5(_v0), _v3(_v58);
          },
          hasDrawer: _v10,
          isDrawerOpen: _v11,
          onMomentsRequest: _v0 => {
            _v9(_v0 => {
              let _v1 = [..._v0];
              return _v1[_v0] = {
                loading: !0,
                hasMoments: !1
              }, _v1;
            });
          },
          onMomentsResponse: (_v0, _v1) => {
            _v9(_v0 => {
              let _v1 = [..._v0];
              return _v1[_v0] = {
                loading: !1,
                hasMoments: _v1
              }, _v1;
            });
          },
          resetMomentsStatus: () => {
            _v9(() => Array(10).fill(null).map(() => ({
              loading: !1,
              hasMoments: !1
            })));
          },
          firstVideoWithMoments: _v6
        },
        children: _v0
      });
    };
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = () => {
    let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
      {
        settings: _v1
      } = (0, _v64.useOrionSettings)(),
      _v2 = (0, _v65.shouldShowInDevelopmentFeature)("show_ask_library", !0),
      _v3 = (0, _v65.shouldShowInDevelopmentFeature)("show_new_moments", !0),
      _v4 = (0, _v65.shouldShowInDevelopmentFeature)("show_agentic_search", !0),
      _v5 = (0, _v65.shouldShowInDevelopmentFeature)("reframe_override", !0),
      _v6 = (0, _v65.shouldShowInDevelopmentFeature)("dedupe", !0),
      _v7 = (0, _v65.shouldShowInDevelopmentFeature)("chapter_fallback", !0),
      {
        loading: _v8,
        capabilities: {
          hasPaid: _v9
        }
      } = (0, _v63.useCapability)(["hasPaid"]),
      {
        loading: _v10,
        ready: _v11,
        capabilities: {
          hasPublicSearchDisabled: _v12 = !0,
          hasEnterprise: _v13,
          hasAutoClosedCaptions: _v14,
          canManageTeamCollections: _v15,
          hasLiveSubscription: _v16,
          hasVideoReviewPageDemo: _v17,
          canSeeUpsellModalOnShare: _v18,
          hasMultipleReviewLinks: _v19,
          hasTeamPrivacy: _v20
        }
      } = (0, _v63.useCapability)(["hasPublicSearchDisabled", "hasEnterprise", "hasAutoClosedCaptions", "canManageTeamCollections", "hasLiveSubscription", "hasVideoReviewPageDemo", "canSeeUpsellModalOnShare", "hasMultipleReviewLinks", "hasTeamPrivacy"], _v0?.teamUser?.ownerId),
      {
        loading: _v21,
        contentSpaceEnabled: _v22
      } = (0, _v62.useContentSpaceEnabled)(_v0?.teamUser?.ownerId);
    return {
      hasEnterprise: _v13,
      hasPublicSearchDisabled: !(!_v12 && !_v0?.isFromCopyrightRestrictedRegion && !_v0?.isEnterpriseSite && !_v0?.isSimplifiedSite),
      hasAutoClosedCaptions: _v14,
      hasAiSearch: _v1.ask_your_library_enabled || _v2,
      hasNewMoments: _v1.new_moments_enabled || _v3,
      hasAgenticSearch: _v1.agentic_search_enabled || _v4,
      hasReframeOverride: _v5,
      isLoading: _v8 || _v10 || _v21,
      hasPaid: _v9,
      canManageTeamCollections: _v15,
      hasLiveSubscription: _v16,
      hasContentSpaceEnabled: _v22,
      hasVideoReviewPageDemo: _v17,
      hasTeamPrivacy: _v20,
      canSeeUpsellModalOnShare: _v18,
      hasMultipleReviewLinks: _v19,
      dedupeMoments: _v6 || void 0,
      chapterFallback: _v7 || void 0,
      ready: _v11
    };
  };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = _v0 => (0, _v1.jsx)(_v69.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17 9a1.8 1.8 0 0 0-1.8 1.8v3a1.8 1.8 0 1 0 3.6 0v-3A1.8 1.8 0 0 0 17 9Zm-3 5a1 1 0 1 0-2 0 5.002 5.002 0 0 0 4 4.9V21a1 1 0 1 0 2 0v-2.1a5.002 5.002 0 0 0 4-4.9 1 1 0 1 0-2 0 3 3 0 0 1-2.998 3H17a3 3 0 0 1-3-3Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 9v9a4 4 0 0 0 4 4h7.17c-.11-.313-.17-.65-.17-1v-.674A6.998 6.998 0 0 1 10 14a3 3 0 0 1 3.2-2.993V10.8A3.8 3.8 0 0 1 17 7c.832 0 1.476.006 2 .013V6a4 4 0 0 0-4-4h-5v4a3 3 0 0 1-3 3H3Zm3 3a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      }), (0, _v1.jsx)("path", {
        d: "M19 16.236c-.53.475-1.23.764-1.998.764H17a2.996 2.996 0 0 1-3-3 1.001 1.001 0 0 0-2 0 5.002 5.002 0 0 0 3.992 4.898L16 18.9V21a1 1 0 1 0 2 0v-2.1c.348-.07.683-.177 1-.316v-2.348ZM3.043 7a2 2 0 0 1 .543-1L7 2.586a2 2 0 0 1 1-.543V6a1 1 0 0 1-1 1H3.043Z"
      }), (0, _v1.jsx)("path", {
        d: "M17 9a1.8 1.8 0 0 1 1.8 1.8v3a1.801 1.801 0 0 1-1.799 1.8H17a1.8 1.8 0 0 1-1.8-1.8v-3A1.8 1.8 0 0 1 17 9Z"
      })]
    })
  });
  var _v71 = _v0.i(0);
  let _v72 = _v0 => (0, _v1.jsx)(_v69.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5h-1.723l-4.762 2.858A1 1 0 0 1 9 21v-2H7a5 5 0 0 1-5-5V8Zm5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7Zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z",
      fill: "currentColor"
    })
  });
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  let _v79 = {
      get ANY() {
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
          singular: "Mature content",
          dictionary: {
            es: {
              singular: "Contenido para adultos"
            },
            "de-DE": {
              singular: "Inhalte mit Jugendfilter"
            },
            "fr-FR": {
              singular: "Contenu pour adultes"
            },
            "ja-JP": {
              singular: "成人向けコンテンツ"
            },
            "ko-KR": {
              singular: "성인 콘텐츠"
            },
            "pt-BR": {
              singular: "Conteúdo adulto"
            },
            "zh-CN": {
              singular: "成人内容"
            }
          }
        });
      },
      get SHOW_MORE() {
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        });
      },
      get LAST_ACTIVE() {
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)("Vimeo");
      },
      get LIBRARY() {
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
          singular: "AI overview",
          dictionary: {
            es: {
              singular: "Resumen de la IA"
            },
            "de-DE": {
              singular: "KI-Übersicht"
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
              singular: "AI 概述"
            }
          }
        });
      },
      get GO_TO_VIDEO() {
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return [(0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return [(0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
      deletedShowcase: _v0 => (0, _v77.translate)({
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
      filtersCount: _v0 => (0, _v77.translate)({
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
      videoCount: _v0 => (0, _v77.translate)({
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
      userCount: (_v0, _v1) => _v0 === _v85.options.channel.value ? (0, _v77.translate)({
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
      }) : (0, _v77.translate)({
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
      resultsCount: (_v0, _v1) => (0, _v77.translate)({
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
      libraryResultsCount: (_v0, _v1) => (0, _v77.translate)({
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
      momentsInVideo: (_v0, _v1) => (0, _v77.translate)({
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
      momentsResultCount: _v0 => (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
      get AI_SEARCH_TRY() {
        return (0, _v77.translate)({
          singular: "Try Smart Search",
          dictionary: {
            es: {
              singular: "Probar Smart Search"
            },
            "de-DE": {
              singular: "Smart Search testen"
            },
            "fr-FR": {
              singular: "Essayez Smart Search"
            },
            "ja-JP": {
              singular: "スマート検索を試す"
            },
            "ko-KR": {
              singular: "스마트 검색 사용해 보기"
            },
            "pt-BR": {
              singular: "Experimente o Smart Search"
            },
            "zh-CN": {
              singular: "试用智能搜索"
            }
          }
        });
      },
      get AI_SEARCH_BACK() {
        return (0, _v77.translate)({
          singular: "Classic search",
          dictionary: {
            es: {
              singular: "Búsqueda clásica"
            },
            "de-DE": {
              singular: "Klassische Suche"
            },
            "fr-FR": {
              singular: "Recherche classique"
            },
            "ja-JP": {
              singular: "クラシック検索"
            },
            "ko-KR": {
              singular: "클래식 검색"
            },
            "pt-BR": {
              singular: "Pesquisa clássica"
            },
            "zh-CN": {
              singular: "经典搜索"
            }
          }
        });
      },
      get AI_SEARCH_PLACEHOLDER() {
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return [(0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        }), (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
        return (0, _v77.translate)({
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
      get AI_FEEDBACK_PROMPT() {
        return (0, _v77.translate)({
          singular: "Was this helpful?",
          dictionary: {
            es: {
              singular: "¿Le resultó útil?"
            },
            "de-DE": {
              singular: "War das hilfreich?"
            },
            "fr-FR": {
              singular: "Cela vous a-t-il été utile ?"
            },
            "ja-JP": {
              singular: "役に立ちましたか？"
            },
            "ko-KR": {
              singular: "도움이 되었나요?"
            },
            "pt-BR": {
              singular: "Isso foi útil?"
            },
            "zh-CN": {
              singular: "这有帮助吗？"
            }
          }
        });
      },
      get AI_FEEDBACK_THUMBS_UP() {
        return (0, _v77.translate)({
          singular: "Good response",
          dictionary: {
            es: {
              singular: "Buena respuesta"
            },
            "de-DE": {
              singular: "Gute Antwort"
            },
            "fr-FR": {
              singular: "Bonne réponse"
            },
            "ja-JP": {
              singular: "良い回答"
            },
            "ko-KR": {
              singular: "도움이 됨"
            },
            "pt-BR": {
              singular: "Resposta satisfatória"
            },
            "zh-CN": {
              singular: "有帮助的回答"
            }
          }
        });
      },
      get AI_FEEDBACK_THUMBS_DOWN() {
        return (0, _v77.translate)({
          singular: "Bad response",
          dictionary: {
            es: {
              singular: "Mala respuesta"
            },
            "de-DE": {
              singular: "Schlechte Antwort"
            },
            "fr-FR": {
              singular: "Mauvaise réponse"
            },
            "ja-JP": {
              singular: "不適切な回答"
            },
            "ko-KR": {
              singular: "도움이 되지 않음"
            },
            "pt-BR": {
              singular: "Resposta insatisfatória"
            },
            "zh-CN": {
              singular: "无帮助的回答"
            }
          }
        });
      },
      get AI_FEEDBACK_MODAL_HEADER() {
        return (0, _v77.translate)({
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
              singular: "フィードバックをお寄せください"
            },
            "ko-KR": {
              singular: "피드백 공유"
            },
            "pt-BR": {
              singular: "Compartilhe seu feedback"
            },
            "zh-CN": {
              singular: "分享您的反馈"
            }
          }
        });
      },
      get AI_FEEDBACK_MODAL_PLACEHOLDER() {
        return (0, _v77.translate)({
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
              singular: "これらの結果について、良かった点や悪かった点を教えてください（任意）"
            },
            "ko-KR": {
              singular: "이 결과에서 좋았거나 싫었던 점을 알려주세요 (선택 사항)"
            },
            "pt-BR": {
              singular: "O que você gostou ou não gostou sobre esses resultados? (opcional)"
            },
            "zh-CN": {
              singular: "您对这些结果喜欢或不喜欢什么？（可选）"
            }
          }
        });
      },
      get AI_FEEDBACK_SUBMIT() {
        return (0, _v77.translate)({
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
        });
      },
      videoFallbackTitle: _v0 => (0, _v77.translate)({
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
      otherResultsCount: _v0 => (0, _v77.translate)({
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
    _v80 = {
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
    _v81 = {
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
      customMetadata: void 0
    },
    _v82 = "filter_custom_metadata",
    _v83 = {
      name: "uploaded",
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        thisYear: {
          value: "this-year",
          get text() {
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
    _v84 = {
      name: "updated",
      get nameCopy() {
        return (0, _v77.translate)({
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
      options: _v83.options
    },
    _v85 = {
      name: "type",
      get nameCopy() {
        return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
    _v86 = {
      name: "live",
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        now: {
          value: "now",
          get text() {
            return (0, _v77.translate)({
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
    _v87 = {
      name: "hdr",
      nameCopy: "HDR",
      options: {
        default: {
          value: "default",
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        hdr: {
          value: "hdr",
          get text() {
            return (0, _v77.translate)({
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
    _v88 = {
      name: "vimeo360",
      nameCopy: "Vimeo 360°",
      options: {
        default: {
          value: "default",
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        spatial: {
          value: "spatial",
          get text() {
            return (0, _v77.translate)({
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
    _v89 = {
      name: "price",
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        free: {
          value: "free",
          get text() {
            return (0, _v77.translate)({
              singular: "Free",
              dictionary: {
                es: {
                  singular: "Gratis"
                },
                "de-DE": {
                  singular: "Kostenlos"
                },
                "fr-FR": {
                  singular: "Gratuit"
                },
                "ja-JP": {
                  singular: "無料"
                },
                "ko-KR": {
                  singular: "무료"
                },
                "pt-BR": {
                  singular: "Grátis"
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
            return (0, _v77.translate)({
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
    _v90 = {
      name: "license",
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ANY,
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
    _v91 = {
      name: "resolution",
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        "4k": {
          value: "4k",
          text: "4K"
        }
      }
    },
    _v92 = {
      name: "duration",
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        short: {
          value: "short",
          get text() {
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
    _v93 = {
      name: "collection",
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ANY,
          untranslatedText: "Any"
        },
        staffpick: {
          value: "staffpick",
          get text() {
            return (0, _v77.translate)({
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
    _v94 = {
      name: "follow",
      get nameCopy() {
        return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
    _v95 = {
      default: {
        value: "default",
        text: _v79.ANY,
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
    _v96 = "live_event",
    _v97 = {
      name: _v85.name,
      get nameCopy() {
        return (0, _v77.translate)({
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
          text: _v79.ALL,
          untranslatedText: "All"
        },
        video: {
          value: "video",
          get text() {
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
          value: _v96,
          get text() {
            return (0, _v77.translate)({
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
  _v85.name, _v79.ALL;
  let _v98 = {
      name: "query_fields",
      get nameCopy() {
        return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            });
          },
          untranslatedText: "Description"
        },
        tags: {
          value: "tags",
          get text() {
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
    _v99 = "1.25rem",
    _v100 = _v0 => ({
      name: "filter_privacy",
      get nameCopy() {
        return (0, _v77.translate)({
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
      options: Object.fromEntries(_v78.DEFAULT_PRIVACY_OPTIONS.filter(_v0 => "team" !== _v0.privacy).map(_v0 => [_v0.privacy, {
        value: "disable" === _v0.privacy ? "hide-from-vimeo" : _v0.title.toLowerCase(),
        text: _v0 && "disable" === _v0.privacy ? (0, _v77.translate)({
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
        icon: _v0 && "disable" === _v0.privacy ? (0, _v1.jsx)(_v76.Code, {
          boxSize: _v99
        }) : (0, _v78.videoPrivacyIcons)(_v99)[_v0.privacy].icon
      }]))
    }),
    _v101 = {
      name: "filter_uploader",
      get nameCopy() {
        return (0, _v77.translate)({
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
    _v102 = {
      folderIncludedName: "filter_folder_include",
      folderExcludedName: "filter_folder_exclude",
      get nameCopy() {
        return (0, _v77.translate)({
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
    _v103 = {
      name: "filter_date",
      get nameCopy() {
        return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
            return (0, _v77.translate)({
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
    _v104 = {
      relevance: {
        value: "relevance",
        get text() {
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
            singular: "Most popular",
            dictionary: {
              es: {
                singular: "Más popular"
              },
              "de-DE": {
                singular: "Am beliebtesten"
              },
              "fr-FR": {
                singular: "Le plus populaire"
              },
              "ja-JP": {
                singular: "一番人気"
              },
              "ko-KR": {
                singular: "가장 인기 있는"
              },
              "pt-BR": {
                singular: "Mais popular"
              },
              "zh-CN": {
                singular: "最受欢迎"
              }
            }
          });
        },
        untranslatedText: "Most popular"
      },
      titleAsc: {
        value: "alphabetical_asc",
        get text() {
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          });
        },
        untranslatedText: "Last modified"
      },
      firstModified: {
        value: "last_user_action_event_date_asc",
        get text() {
          return (0, _v77.translate)({
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
          return (0, _v77.translate)({
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
          });
        },
        untranslatedText: "Last added"
      },
      firstAdded: {
        value: "date_asc",
        get text() {
          return (0, _v77.translate)({
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
      relevance: _v105,
      uploaded: _v106,
      updated: _v107,
      popularity: _v108,
      titleAsc: _v109,
      titleDesc: _v110,
      nameAsc: _v111,
      nameDesc: _v112,
      longest: _v113,
      shortest: _v114,
      lastModified: _v115,
      firstModified: _v116,
      lastAdded: _v117,
      firstAdded: _v118
    } = _v104,
    _v119 = {
      clip: {
        relevance: _v105,
        uploaded: _v106,
        popularity: _v108,
        titleAsc: _v109,
        titleDesc: _v110,
        longest: _v113,
        shortest: _v114
      },
      ondemand: {
        relevance: _v105,
        uploaded: _v106,
        popularity: _v108,
        titleAsc: _v109,
        titleDesc: _v110
      },
      people: {
        relevance: _v105,
        popularity: _v108,
        nameAsc: _v111,
        nameDesc: _v112
      },
      channel: {
        relevance: _v105,
        updated: _v107,
        popularity: _v108,
        nameAsc: _v111,
        nameDesc: _v112
      },
      group: {
        relevance: _v105,
        updated: _v107,
        popularity: _v108,
        nameAsc: _v111,
        nameDesc: _v112
      }
    },
    _v120 = {
      relevance: _v105,
      titleAsc: _v109,
      titleDesc: _v110,
      lastModified: _v115,
      firstModified: _v116,
      lastAdded: _v117,
      firstAdded: _v118,
      longest: _v113,
      shortest: _v114
    },
    _v121 = {
      relevance: _v105,
      uploaded: _v106,
      updated: _v107,
      popularity: _v108,
      titleAsc: _v109,
      titleDesc: _v110,
      nameAsc: _v111,
      nameDesc: _v112,
      longest: _v113,
      shortest: _v114
    },
    _v122 = "video",
    _v123 = {
      clip: "video",
      ondemand: "ondemand",
      people: "user",
      group: "group",
      channel: "channel"
    },
    _v124 = {
      transcript: "transcript-single-index",
      chapter: "chapters",
      comment: "private-comments",
      commentReply: "private-comment-replies",
      vis: "ai-vis-prod"
    },
    _v125 = _v0 => _v0 ? parseInt(_v0.split("/").slice(-1)[0]) : 0,
    _v126 = (_v0, _v1) => "string" == typeof _v0 && Object.values(_v1).map(_v0 => _v0.value).includes(_v0),
    _v127 = (_v0, _v1) => {
      if ("string" != typeof _v0) return !1;
      let _v2 = _v0.split(","),
        _v3 = Object.values(_v1).map(_v0 => _v0.value);
      return _v2.every(_v0 => _v3.includes(_v0));
    },
    _v128 = _v0 => !!_v0 && /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(_v0),
    _v129 = (_v0, _v1) => {
      _v0.push({
        query: _v1
      }, void 0, {
        shallow: !0
      });
    },
    _v130 = ({
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
    }, _v16) => {
      let _v17 = {},
        _v18 = [];
      if (_v0 && (_v17.type = _v0), _v1 && (_v17.q = _v1), _v2 > 1 && (_v17.page = _v2), _v3) {
        let _v0 = _v83.options[_v3].value;
        _v17.uploaded = _v0, _v18.push(`Uploaded=${_v0}`);
      }
      if (_v4) {
        let _v0 = _v86.options[_v4].value;
        _v17.live = _v0, _v18.push(`Live=${_v0}`);
      }
      if (_v5) {
        let _v0 = _v87.options[_v5].value;
        _v17.hdr = _v0, _v18.push(`Hdr=${_v0}`);
      }
      if (_v6) {
        let _v0 = _v88.options[_v6].value;
        _v17.vimeo360 = _v0, _v18.push(`Vimeo-360=${_v0}`);
      }
      if (_v7) {
        let _v0 = _v89.options[_v7].value;
        _v17.price = _v0, _v18.push(`Price=${_v0}`);
      }
      if (_v8) {
        let _v0 = _v90.options[_v8].value;
        _v17.license = _v0, _v18.push(`License=${_v0}`);
      }
      if (_v9) {
        let _v0 = _v91.options[_v9].value;
        _v17.resolution = _v0, _v18.push(`Resolution=${_v0}`);
      }
      if (_v10) {
        let _v0 = _v92.options[_v10].value;
        _v17.duration = _v0, _v18.push(`Duration=${_v0}`);
      }
      if (_v11 && (_v17.collection = _v93.options[_v11].value, _v18.push("Staffpicked=true")), _v12 && (_v17.category = _v12, _v18.push(`Category=${_v12}`)), _v13 && (_v17.follow = _v13, _v16 && _v18.push(`Follows=${_v16}`)), _v14) {
        let _v0 = _v83.options[_v14].value;
        _v17.updated = _v0, _v18.push(`Last-updated=${_v0}`);
      }
      return _v15 && (_v17.sort = _v15), {
        url: _v17,
        bpFilters: _v18
      };
    },
    _v131 = ({
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
      customMetadata: _v10
    }) => {
      let _v11 = {
        slug: [_v35]
      };
      return _v0 && (_v11.q = _v0), _v1 > 1 && (_v11.page = _v1), _v2 && (_v11.type = _v97.options[_v2].value), _v3 && (_v11.query_fields = _v3), _v4 && (_v11.filter_privacy = _v4), _v5 && (_v11.sort = _v5), _v6 && (_v11.filter_uploader = _v6), _v7 && (_v11.filter_folder_include = _v7), _v8 && (_v11.filter_folder_exclude = _v8), _v9 && (_v11.filter_date = _v9), _v10 && (_v11.filter_custom_metadata = _v10), {
        url: _v11
      };
    },
    _v132 = (_v0, _v1 = "en-US") => new Date(_v0).toLocaleDateString(_v1, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }),
    _v133 = _v0 => {
      let _v1 = Object.assign({}, _v0);
      return delete _v1.page, delete _v1.query, delete _v1.type, delete _v1.sort, _v1;
    },
    _v134 = _v0 => "video" === _v0.type && _v0?.video?.parentProject ? {
      name: _v0.video.parentProject?.name,
      href: _v135(_v0.video.parentProject?.uri)
    } : "live_event" === _v0.type && _v0?.liveEvent?.parentFolder ? {
      name: _v0.liveEvent.parentFolder?.name,
      href: _v135(_v0.liveEvent.parentFolder?.uri)
    } : "folder" === _v0.type && _v0?.folder?.metadata?.connections?.ancestorPath?.[0] ? {
      name: _v0?.folder?.metadata?.connections?.ancestorPath?.[0]?.name,
      href: _v135(_v0?.folder?.metadata?.connections?.ancestorPath?.[0]?.uri)
    } : {
      name: "-"
    },
    _v135 = _v0 => _v0.replace("users", "user").replace("projects", "folder"),
    _v136 = _v0 => {
      if (!_v0) return [];
      let _v1 = _v0.lastIndexOf("_");
      return -1 === _v1 ? [_v0] : [_v0.substring(0, _v1), _v0.substring(_v1 + 1)];
    },
    _v137 = (_v0, _v1, _v2, _v3, _v4) => {
      if (_v3) {
        let _v0 = `${_v0}?tq=${_v2}#t=${Math.floor(_v1 / 0)}`;
        return _v4 && (_v0 += `&end=${Math.floor(_v4 / 0)}`), _v0;
      }
      return `${_v0}/transcript?ts=${_v1}`;
    },
    _v138 = _v0 => _v0.match("<b>(.*?)</b>")?.[1],
    _v139 = (_v0, _v1, _v2 = 20, _v3 = 50) => {
      let _v4 = _v0.length,
        _v5 = _v0.toLowerCase(),
        _v6 = _v1.toLowerCase();
      if (_v4 <= _v2 + _v3 || "" === _v1.trim() || !_v5.includes(_v6)) return _v0;
      {
        let _v0 = _v0.replace(/\s+/g, " "),
          _v1 = _v140(_v1),
          _v2 = RegExp(`(^|\\s).{0,${_v2}}${_v1}.{0,${_v3}}(\\s|$)`, "i"),
          _v3 = _v0.match(_v2),
          _v4 = _v3 ? _v3[0].trim() : "",
          _v5 = _v0.indexOf(_v4),
          _v6 = _v5 + _v4.length < _v0.length ? "..." : "";
        return `${0 === _v5 ? "" : "..."}${_v4}${_v6}`;
      }
    },
    _v140 = (_v0 = "") => _v0.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").trim(),
    _v141 = (_v0, _v1) => {
      for (let _v0 of Object.values(_v0)) if (_v0.value === _v1) return _v0.untranslatedText ?? _v0.text;
      return null;
    },
    _v142 = (_v0, _v1) => _v0.hasOwnProperty(_v1) ? _v0[_v1]?.split(",") : [],
    _v143 = _v0 => _v0 ? "title,captions,description,tags,chapters" : "title,description,tags,chapters",
    _v144 = _v0 => {
      if (!_v0) return !1;
      let _v1 = _v0.match(/(\w+)/g);
      return (!_v1 || !(_v1.length < 3)) && !!_v0.match(/^(what|when|who|where|how|why)|\?$/i);
    },
    _v145 = _v0 => {
      if (!(_v0 instanceof Array)) return {};
      let _v1 = {};
      for (let {
        type: _v0,
        count: _v1
      } of _v0) _v1[_v0] = _v1;
      return _v1;
    },
    _v146 = _v0 => {
      let _v1 = _v0 ? new Date(`${_v0}T00:00:00`) : new Date();
      return new _v68.BokehDate.CalendarDate(_v1.getFullYear(), _v1.getMonth() + 1, _v1.getDate());
    },
    _v147 = (_v0, _v1) => {
      switch (_v0) {
        case _v124.transcript:
          return {
            get label() {
              return _v79.TRANSCRIPT;
            },
            Icon: _v70
          };
        case _v124.chapter:
          return {
            get label() {
              return _v79.CHAPTER;
            },
            Icon: _v71.ListUlFilled
          };
        case _v124.comment:
          return {
            get label() {
              return _v79.COMMENT;
            },
            Icon: _v72
          };
        case _v124.commentReply:
          return {
            get label() {
              return _v79.COMMENT;
            },
            Icon: _v72
          };
        case _v124.vis:
          return {
            get label() {
              if (_v1.includes("chapters")) return _v79.SEGMENT;
              if (_v1.includes("is_slide")) return _v79.SLIDE;
              if (_v1.includes("shots")) return _v79.SHOT;
              if (_v1.includes("scenes")) return _v79.SCENE;
              if (_v1.includes("is_visual")) return _v79.VISUAL_MOMENT;
              return _v79.MOMENT;
            },
            Icon: _v73.AiSparklesFilled
          };
      }
    },
    _v148 = "library",
    _v149 = "public",
    _v150 = {
      [_v148]: "library_search",
      [_v149]: "public_search"
    },
    _v151 = (0, _v3.createContext)({}),
    _v152 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        {
          hasPublicSearchDisabled: _v2,
          isLoading: _v3,
          ready: _v4
        } = _v67(),
        [_v5] = (0, _v3.useState)(() => new URLSearchParams(window.location.search).get("agentic_user_id"));
      (0, _v3.useEffect)(() => {
        if (_v5) try {
          window.sessionStorage.setItem("agentic_user_id", _v5);
        } catch {}
      }, [_v5]);
      let [_v6, _v7] = (0, _v3.useState)(() => _v1.query.slug?.[0] === _v35 ? _v148 : _v149),
        [_v8, _v9] = (0, _v3.useState)(!0),
        [_v10, _v11] = (0, _v3.useState)(() => "1" === new URLSearchParams(window.location.search).get("ai")),
        [_v12] = (0, _v3.useState)(() => (0, _v26.v4)());
      return (0, _v3.useEffect)(() => {
        if (!_v1.isReady || "1" === _v1.query.ai === _v10) return;
        let _v0 = {
          ..._v1.query
        };
        _v10 ? _v0.ai = "1" : delete _v0.ai, _v1.replace({
          query: _v0
        }, void 0, {
          shallow: !0
        });
      }, [_v10, _v1.isReady, _v1.query.ai]), (0, _v3.useEffect)(() => {
        _v4 && !_v3 && _v2 && _v1.query.slug?.[0] !== _v35 && (_v7(_v148), _v129(_v1, {
          q: _v1.query.q,
          slug: [_v35]
        }));
      }, [_v4, _v3, _v2, _v1]), (0, _v3.useEffect)(() => {
        _v7(() => _v1.query.slug?.[0] === _v35 ? _v148 : _v149);
      }, [_v1.query?.slug]), (0, _v1.jsx)(_v151.Provider, {
        value: {
          searchType: _v6,
          toggleSearchType: _v0 => {
            let _v1 = _v0?.detail.query?.trim(),
              _v2 = _v0?.detail.filter,
              _v3 = {},
              _v4 = null;
            if (_v6 === _v149 ? (_v4 = _v37, _v7(_v148), _v3.slug = [_v35], _v2 && (_v3[_v2.name] = _v2.value)) : (_v7(_v149), _v4 = _v38), (_v1 ?? _v1.query.q) && (_v3.q = _v1 ?? _v1.query.q), _v129(_v1, _v3), !_v1) {
              let _v0 = new CustomEvent("SearchTypeChange", {
                detail: {
                  searchType: _v4
                }
              });
              document.dispatchEvent(_v0);
            }
          },
          feature: _v150[_v6],
          showAiAnimation: _v8,
          setShowAiAnimation: _v9,
          isAgenticSearch: _v10,
          setIsAgenticSearch: _v11,
          searchId: _v12
        },
        children: _v0
      });
    },
    _v153 = (0, _v3.createContext)({}),
    _v154 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!0);
      return (0, _v1.jsx)(_v153.Provider, {
        value: {
          showAnimation: _v1,
          setShowAnimation: _v2
        },
        children: _v0
      });
    };
  var _v155 = _v0.i(0),
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
    _v179 = _v0.i(0),
    _v180 = _v0.i(0),
    _v181 = _v0.i(0),
    _v182 = _v0.i(0),
    _v183 = _v0.i(0),
    _v184 = _v0.i(0);
  let _v185 = ({
      searchId: _v0,
      searchRequestId: _v1
    }) => {
      let {
          trackAgenticSearchRated: _v2,
          trackAgenticSearchFeedback: _v3,
          trackAgenticSearchFeedbackDismissed: _v4
        } = (0, _v12.useSearchTracking)(),
        _v5 = (0, _v180.useToast)(),
        [_v6, _v7] = (0, _v3.useState)(null),
        [_v8, _v9] = (0, _v3.useState)(!1),
        [_v10, _v11] = (0, _v3.useState)(""),
        _v12 = _v0 => {
          if (_v1) {
            if (_v6 === _v0) return void _v7(null);
            _v7(_v0), _v2({
              searchId: _v0,
              searchRequestId: _v1,
              isPositive: "up" === _v0
            }), _v11(""), _v9(!0);
          }
        },
        _v13 = () => {
          _v9(!1), _v5({
            title: _v79.THANKS_FOR_FEEDBACK,
            variant: "neutral",
            isClosable: !1
          });
        };
      return (0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        gap: "xs",
        paddingTop: "sm",
        children: [(0, _v1.jsx)(_v157.Text, {
          variant: "body-sm",
          color: "text-secondary",
          marginRight: "xs",
          children: _v79.AI_FEEDBACK_PROMPT
        }), (0, _v1.jsx)(_v171.IconButton, {
          size: "sm",
          variant: "tertiary",
          icon: "up" === _v6 ? (0, _v1.jsx)(_v184.ThumbUpFilled, {}) : (0, _v1.jsx)(_v183.ThumbUp, {}),
          onClick: () => _v12("up"),
          "aria-label": _v79.AI_FEEDBACK_THUMBS_UP,
          "aria-pressed": "up" === _v6
        }), (0, _v1.jsx)(_v171.IconButton, {
          size: "sm",
          variant: "tertiary",
          icon: "down" === _v6 ? (0, _v1.jsx)(_v182.ThumbDownFilled, {}) : (0, _v1.jsx)(_v181.ThumbDown, {}),
          onClick: () => _v12("down"),
          "aria-label": _v79.AI_FEEDBACK_THUMBS_DOWN,
          "aria-pressed": "down" === _v6
        }), _v8 && (0, _v1.jsxs)(_v172.Modal, {
          isOpen: !0,
          onClose: () => {
            _v1 && _v4({
              searchId: _v0,
              searchRequestId: _v1,
              isPositive: "up" === _v6
            }), _v13();
          },
          children: [(0, _v1.jsx)(_v178.ModalOverlay, {}), (0, _v1.jsxs)(_v175.ModalContent, {
            maxWidth: (0, _v9.rem)(600),
            children: [(0, _v1.jsx)(_v174.ModalCloseButton, {}), (0, _v1.jsx)(_v177.ModalHeader, {
              children: (0, _v1.jsx)(_v170.Header, {
                size: "md",
                children: _v79.AI_FEEDBACK_MODAL_HEADER
              })
            }), (0, _v1.jsx)(_v173.ModalBody, {
              children: (0, _v1.jsx)(_v179.Textarea, {
                value: _v10,
                onChange: _v0 => _v11(_v0.target.value),
                placeholder: _v79.AI_FEEDBACK_MODAL_PLACEHOLDER,
                "aria-label": _v79.AI_FEEDBACK_MODAL_PLACEHOLDER,
                minHeight: (0, _v9.rem)(150),
                width: "100%",
                resize: "none"
              })
            }), (0, _v1.jsx)(_v176.ModalFooter, {
              children: (0, _v1.jsx)(_v159.Button, {
                onClick: () => {
                  let _v0 = _v10.trim();
                  _v1 && (_v0 ? _v3({
                    searchId: _v0,
                    searchRequestId: _v1,
                    isPositive: "up" === _v6,
                    comment: _v0
                  }) : _v4({
                    searchId: _v0,
                    searchRequestId: _v1,
                    isPositive: "up" === _v6
                  })), _v13();
                },
                children: _v79.AI_FEEDBACK_SUBMIT
              })
            })]
          })]
        })]
      });
    },
    _v186 = () => {
      let _v0,
        _v1,
        _v2 = (0, _v2.useRouter)(),
        _v3 = (_v0 => {
          let _v1 = {
            ..._v81
          };
          if ("string" == typeof _v0.q && (_v1.query = _v0.q), Number(_v0.page) && (_v1.page = Number(_v0.page)), _v126(_v0.filter_type, _v97.options) && (_v1.type = _v0.filter_type), _v126(_v0.type, _v97.options) && (_v1.type = _v0.type), _v127(_v0.query_fields, _v98.options) && (_v1.queryFields = _v0.query_fields), _v127(_v0.filter_privacy, _v100().options) && (_v1.privacy = _v0.filter_privacy), _v126(_v0.sort, _v120) && (_v1.sort = _v0.sort), "string" == typeof _v0.filter_uploader && (_v1.uploader = _v0.filter_uploader), "string" == typeof _v0.filter_folder_include && (_v1.folderIncluded = _v0.filter_folder_include), _v1.folderIncluded && "string" == typeof _v0.filter_folder_exclude && (_v1.folderExcluded = _v0.filter_folder_exclude), _v0.filter_date) {
            let [_v0, _v1] = _v0.filter_date.split(",");
            _v128(_v0) && _v128(_v1) && (_v1.date = _v0.filter_date);
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
        } = (0, _v3.useContext)(_v60),
        _v5 = (0, _v3.useRef)(null),
        _v6 = _v5?.current?.href === _v2.asPath;
      return _v4 || (_v5.current = {
        ..._v131(_v3),
        href: _v2.asPath
      }), {
        ..._v3,
        filters: _v3,
        onLibraryFilterChange: (_v0, _v1) => {
          if (_v0 === _v97.name) {
            let _v0 = {
              slug: [_v35],
              q: _v3.query
            };
            _v1 !== _v97.options.default.value && (_v0.type = _v1), _v129(_v2, _v0);
            return;
          }
          let {
            url: _v2
          } = _v131({
            ..._v3,
            page: 1
          });
          "default" === _v1 || _v0 === _v36 && _v1 === _v120.relevance.value ? delete _v2[_v0] : _v2[_v0] = _v1, _v129(_v2, _v2);
        },
        onCheckboxChange: _v0 => {
          let {
            url: _v1
          } = _v131({
            ..._v3,
            page: 1
          });
          return (Array.isArray(_v0) ? _v0 : [_v0]).forEach(({
            name: _v0,
            value: _v1,
            isChecked: _v2
          }) => {
            let _v3 = _v142(_v1, _v0);
            _v1.hasOwnProperty(_v0) && _v1[_v0]?.split(",");
            let _v4 = 1 === _v3.length;
            _v2 ? _v4 ? (delete _v1[_v0], _v0 === _v102.folderIncludedName && delete _v1[_v102.folderExcludedName]) : _v1[_v0] = _v3.filter(_v0 => _v0 !== _v1).join(",") : (_v3.push(_v1), _v1[_v0] = _v3.join(","));
          }), _v129(_v2, _v1), _v1;
        },
        onClearFilter: _v0 => {
          let {
            url: _v1
          } = _v131({
            ..._v3,
            page: 1
          });
          (Array.isArray(_v0) ? _v0 : [_v0]).forEach(_v0 => {
            delete _v1[_v0];
          }), _v129(_v2, _v1);
        },
        updatePage: _v0 => {
          let {
            url: _v1
          } = _v131({
            ..._v3,
            page: _v0
          });
          _v129(_v2, _v1);
        },
        clearLibraryFilters: () => {
          let {
            url: _v0
          } = _v131({
            ..._v81,
            query: _v3.query,
            sort: _v3.sort
          });
          _v129(_v2, _v0);
        },
        onOmnisearchChange: _v0 => {
          let {
              query: _v1,
              filter: _v2
            } = _v0.detail,
            {
              url: _v3
            } = _v131({
              ..._v3,
              page: 1
            }),
            _v4 = {
              ..._v3,
              slug: [_v35]
            };
          _v1?.trim() ? _v4.q = _v1 : _v4.sort = _v120.lastModified.value, _v2 && (_v4[_v2.name] = _v2.value), _v129(_v2, _v4);
        },
        appliedFiltersCount: (_v0 = _v133(_v3), _v1 = 0, Object.keys(_v0).map(_v0 => {
          let _v1 = _v0[_v0];
          _v1 && ("folderIncluded" !== _v0 && "privacy" !== _v0 && "uploader" !== _v0 && "queryFields" !== _v0 ? _v1 += 1 : _v1 += _v1.split(",").length);
        }), _v1),
        keepPreviousLibraryUrl: () => {
          _v5.current && _v129(_v2, _v5.current.url);
        },
        isLibraryApplyButtonDisabled: _v6
      };
    };
  var _v187 = _v0.i(0);
  let _v188 = () => {
    let {
        isSideNavOpen: _v0
      } = (0, _v3.useContext)(_v187.VideoLibraryLayoutContext),
      {
        panelStatus: _v1
      } = (0, _v3.useContext)(_v60),
      _v2 = (0, _v25.useBreakpointValue)(_v33, {
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
  };
  var _v189 = _v0.i(0);
  let _v190 = "agentic_result_cache",
    _v191 = () => {
      try {
        return window.sessionStorage.getItem("agentic_user_id") || void 0;
      } catch {
        return;
      }
    },
    _v192 = () => {
      let {
          query: _v0
        } = _v186(),
        {
          data: _v1,
          error: _v2,
          isLoading: _v3,
          search: _v4,
          searchRequestId: _v5,
          restoreFromCache: _v6
        } = (() => {
          let [_v0, _v1] = (0, _v3.useState)(null),
            [_v2, _v3] = (0, _v3.useState)(null),
            [_v4, _v5] = (0, _v3.useState)(!1),
            [_v6, _v7] = (0, _v3.useState)(null),
            _v8 = (0, _v3.useRef)(null),
            {
              baseUrl: _v9,
              jwt: _v10
            } = (0, _v189.useGctlConfig)(),
            {
              searchId: _v11
            } = (0, _v3.useContext)(_v151),
            {
              trackAgenticSearchSubmitted: _v12,
              trackAgenticSearchResponse: _v13
            } = (0, _v12.useSearchTracking)(),
            _v14 = (0, _v3.useCallback)(async _v0 => {
              if (!_v0.query) return void _v1(null);
              _v8.current?.abort();
              let _v1 = new AbortController();
              _v8.current = _v1;
              let _v2 = (0, _v26.v4)(),
                _v3 = _v0.maxResults ?? 5,
                _v4 = Date.now();
              _v7(_v2), _v12({
                searchId: _v11,
                searchRequestId: _v2,
                searchText: _v0.query,
                maxResults: _v3
              }), _v5(!0), _v3(null);
              try {
                let _v0 = {
                    query: _v0.query,
                    max_results: _v3
                  },
                  _v1 = _v0.impersonateUserId ?? _v191();
                _v1 && (_v0.user_id = _v1), _v0.capability && (_v0.capability = _v0.capability);
                let _v2 = await fetch(`${_v9}/search/agentic`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v10 ? `jwt ${_v10}` : ""
                  },
                  body: JSON.stringify(_v0),
                  signal: _v1.signal
                });
                if (!_v2.ok) throw Error(`Search failed: ${_v2.status}`);
                let _v3 = await _v2.json();
                if (!_v1.signal.aborted) {
                  _v1(_v3);
                  var _v5 = _v0.query,
                    _v6 = _v1 ?? null;
                  try {
                    window.sessionStorage.setItem(_v190, JSON.stringify({
                      query: _v5,
                      impersonateUserId: _v6,
                      searchRequestId: _v2,
                      result: _v3
                    }));
                  } catch {}
                  let _v0 = "help" === _v3.capability,
                    _v1 = "clips" in _v3 ? _v3.clips?.length ?? 0 : 0,
                    _v2 = "other_clips" in _v3 ? _v3.other_clips?.length ?? 0 : 0;
                  _v13({
                    searchId: _v11,
                    searchRequestId: _v2,
                    searchText: _v0.query,
                    status: _v0 || _v1 + _v2 > 0 ? "success" : "empty",
                    resultsQty: _v1,
                    otherResultsQty: _v2,
                    strategiesUsed: _v0 ? ["help"] : "strategies_used" in _v3 ? _v3.strategies_used ?? null : null,
                    partial: _v3.partial ?? null,
                    citedQty: "cited_titles" in _v3 ? Object.keys(_v3.cited_titles ?? {}).length : null,
                    latencyMs: Date.now() - _v4,
                    errorMessage: null,
                    summary: "answer" in _v3 ? _v3.answer : _v3.summary ?? null
                  });
                }
              } catch (_v0) {
                if (_v0 instanceof DOMException && "AbortError" === _v0.name) return;
                if (!_v1.signal.aborted) {
                  _v1(null);
                  let _v0 = _v0 instanceof Error ? _v0 : Error("Unknown error");
                  _v3(_v0), _v13({
                    searchId: _v11,
                    searchRequestId: _v2,
                    searchText: _v0.query,
                    status: "error",
                    resultsQty: null,
                    otherResultsQty: null,
                    strategiesUsed: null,
                    partial: null,
                    citedQty: null,
                    latencyMs: Date.now() - _v4,
                    errorMessage: _v0.message,
                    summary: null
                  });
                }
              } finally {
                _v1.signal.aborted || _v5(!1);
              }
            }, [_v9, _v10, _v11, _v12, _v13]),
            _v15 = (0, _v3.useCallback)(_v0 => {
              try {
                let _v0 = window.sessionStorage.getItem(_v190);
                if (!_v0) return !1;
                let _v1 = JSON.parse(_v0);
                if (_v1.query !== _v0 || _v1.impersonateUserId !== (_v191() ?? null)) return !1;
                return _v1(_v1.result), _v7(_v1.searchRequestId), _v3(null), _v5(!1), !0;
              } catch {
                return !1;
              }
            }, []);
          return (0, _v3.useEffect)(() => () => _v8.current?.abort(), []), {
            data: _v0,
            error: _v2,
            isLoading: _v4,
            search: _v14,
            searchRequestId: _v6,
            restoreFromCache: _v15
          };
        })(),
        {
          searchId: _v7
        } = (0, _v3.useContext)(_v151),
        _v8 = {
          searchId: _v7,
          searchRequestId: _v5
        },
        _v9 = (0, _v2.useRouter)(),
        _v10 = (0, _v163.useColorModeValue)("var(--vimeo-colors-lightBlueAlpha-200)", "var(--vimeo-colors-darkBlueAlpha-200)"),
        _v11 = (0, _v3.useRef)(_v4);
      (0, _v3.useEffect)(() => {
        _v11.current = _v4;
      }, [_v4]);
      let _v12 = (0, _v3.useRef)(null),
        [_v13, _v14] = (0, _v3.useState)("auto"),
        _v15 = (0, _v3.useRef)(_v13);
      (0, _v3.useEffect)(() => {
        _v15.current = _v13;
      }, [_v13]);
      let _v16 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0.trim();
          _v1 && (_v12.current = _v1, _v11.current({
            query: _v1,
            capability: "auto" === _v15.current ? void 0 : _v15.current
          }));
        }, []),
        [_v17, _v18] = (0, _v3.useState)(_v0 || ""),
        _v19 = _v0 || "";
      (0, _v3.useEffect)(() => {
        _v19 && _v19 !== _v12.current && (_v18(_v19), _v6(_v19) ? _v12.current = _v19 : _v16(_v19));
      }, [_v19, _v16, _v6]);
      let _v20 = (0, _v3.useCallback)(_v0 => {
          let _v1 = _v0.trim();
          _v1 && (_v18(_v1), _v16(_v1), _v1 !== _v9.query.q && _v129(_v9, {
            ..._v9.query,
            q: _v1
          }));
        }, [_v16, _v9]),
        _v21 = (0, _v3.useCallback)(() => _v20(_v17), [_v20, _v17]),
        _v22 = (0, _v3.useCallback)(_v0 => {
          _v14(_v0);
          let _v1 = _v17.trim();
          _v1 && (_v12.current = _v1, _v11.current({
            query: _v1,
            capability: "auto" === _v0 ? void 0 : _v0
          }));
        }, [_v17]);
      return (0, _v1.jsxs)(_v155.Box, {
        width: "100%",
        paddingX: "sm",
        children: [(0, _v1.jsx)(_v195, {
          value: _v17,
          onChange: _v18,
          onSubmit: _v21,
          isLoading: _v3
        }), (0, _v1.jsx)(_v193, {
          mode: _v13,
          onChange: _v22
        }), _v3 && (0, _v1.jsx)(_v197, {}), !_v1 && !_v3 && !_v2 && (0, _v1.jsx)(_v196, {
          onSelect: _v20
        }), _v2 && (0, _v1.jsx)(_v155.Box, {
          padding: "md",
          color: "text-danger",
          children: (0, _v1.jsx)(_v157.Text, {
            variant: "body-md",
            children: _v79.AI_SEARCH_FAILED
          })
        }), _v1 && !_v3 && "help" === _v1.capability && (0, _v1.jsx)(_v8.Flex, {
          flexDir: "column",
          gap: "md",
          paddingTop: "md",
          children: (0, _v1.jsx)(_v194, {
            result: _v1,
            borderColor: _v10,
            ids: _v8
          })
        }), _v1 && !_v3 && "help" !== _v1.capability && (0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          gap: "md",
          paddingTop: "md",
          children: [_v1.partial && (0, _v1.jsx)(_v155.Box, {
            padding: "sm",
            borderRadius: "md",
            backgroundColor: "fill-component",
            children: (0, _v1.jsx)(_v157.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v79.AI_PARTIAL_RESULTS
            })
          }), (0, _v1.jsx)(_v199, {
            summary: _v1.summary,
            clips: [..._v1.clips, ..._v1.other_clips],
            citedTitles: _v1.cited_titles,
            borderColor: _v10,
            ids: _v8
          }), _v1.clips.length > 0 && (0, _v1.jsx)(_v201, {
            clips: _v1.clips,
            ids: _v8
          }), _v1.other_clips.length > 0 && (0, _v1.jsx)(_v202, {
            clips: _v1.other_clips,
            ids: _v8
          }), 0 === _v1.clips.length && 0 === _v1.other_clips.length && (0, _v1.jsx)(_v157.Text, {
            variant: "body-md",
            color: "text-secondary",
            paddingY: "lg",
            textAlign: "center",
            children: _v79.AI_NO_RESULTS
          })]
        })]
      });
    },
    _v193 = ({
      mode: _v0,
      onChange: _v1
    }) => {
      let _v2 = [{
        value: "auto",
        label: _v79.AI_MODE_AUTO
      }, {
        value: "search",
        label: _v79.AI_MODE_LIBRARY
      }, {
        value: "help",
        label: _v79.AI_MODE_SUPPORT
      }];
      return (0, _v1.jsx)(_v8.Flex, {
        justifyContent: "center",
        gap: "xs",
        paddingBottom: "sm",
        children: _v2.map(({
          value: _v0,
          label: _v1
        }) => (0, _v1.jsx)(_v159.Button, {
          size: "sm",
          variant: _v0 === _v0 ? "primary" : "secondary",
          onClick: () => _v1(_v0),
          "aria-pressed": _v0 === _v0,
          borderRadius: "md",
          children: _v1
        }, _v0))
      });
    },
    _v194 = ({
      result: _v0,
      borderColor: _v1,
      ids: _v2
    }) => (0, _v1.jsxs)(_v160.Panel, {
      isVisible: !0,
      sx: {
        width: "100%",
        "--panel-border-width": "1px",
        "--panel-border-style": "solid",
        "--panel-border-color": _v1
      },
      children: [(0, _v1.jsx)(_v160.PanelHeader, {
        paddingX: "lg",
        children: _v79.AI_SUPPORT_ANSWER
      }), (0, _v1.jsxs)(_v160.PanelBody, {
        paddingX: "lg",
        paddingBottom: "md",
        paddingTop: "0",
        children: [(0, _v1.jsx)(_v157.Text, {
          variant: "body-md",
          lineHeight: "1.5",
          whiteSpace: "pre-wrap",
          children: _v0.answer
        }), _v0.sources.length > 0 && (0, _v1.jsxs)(_v155.Box, {
          marginTop: "md",
          children: [(0, _v1.jsx)(_v157.Text, {
            variant: "heading-xs",
            color: "text-secondary",
            marginBottom: "xs",
            children: _v79.AI_SOURCES
          }), (0, _v1.jsx)(_v8.Flex, {
            flexDir: "column",
            gap: "xs",
            children: _v0.sources.map(_v0 => (0, _v1.jsx)(_v155.Box, {
              as: "a",
              href: _v0.url,
              target: "_blank",
              rel: "noopener noreferrer",
              color: "text-link",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              _hover: {
                textDecorationColor: "text-primary"
              },
              children: (0, _v1.jsx)(_v157.Text, {
                variant: "body-sm",
                children: _v0.title
              })
            }, _v0.url))
          })]
        }), (0, _v1.jsx)(_v185, {
          searchId: _v2.searchId,
          searchRequestId: _v2.searchRequestId
        }, _v2.searchRequestId ?? "none")]
      })]
    }),
    _v195 = ({
      value: _v0,
      onChange: _v1,
      onSubmit: _v2,
      isLoading: _v3
    }) => (0, _v1.jsx)(_v8.Flex, {
      justifyContent: "center",
      width: "100%",
      paddingY: "lg",
      children: (0, _v1.jsxs)(_v8.Flex, {
        gap: "sm",
        alignItems: "center",
        width: "100%",
        maxWidth: (0, _v9.rem)(720),
        children: [(0, _v1.jsxs)(_v155.Box, {
          position: "relative",
          flexGrow: 1,
          children: [(0, _v1.jsx)(_v155.Box, {
            position: "absolute",
            left: (0, _v9.rem)(14),
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            color: "text-secondary",
            pointerEvents: "none",
            children: (0, _v1.jsx)(_v167.SearchMagnifier, {
              boxSize: (0, _v9.rem)(22)
            })
          }), (0, _v1.jsx)(_v158.Input, {
            size: "lg",
            value: _v0,
            onChange: _v0 => _v1(_v0.target.value),
            onKeyDown: _v0 => {
              "Enter" === _v0.key && _v2();
            },
            placeholder: _v79.AI_SEARCH_PLACEHOLDER,
            "aria-label": _v79.AI_SEARCH_PLACEHOLDER,
            paddingLeft: (0, _v9.rem)(46),
            width: "100%"
          })]
        }), (0, _v1.jsx)(_v159.Button, {
          size: "lg",
          variant: "primary",
          onClick: _v2,
          isLoading: _v3,
          isDisabled: !_v0.trim(),
          children: _v79.SEARCH
        })]
      })
    }),
    _v196 = ({
      onSelect: _v0
    }) => (0, _v1.jsxs)(_v8.Flex, {
      flexDir: "column",
      alignItems: "center",
      gap: "md",
      paddingX: "md",
      paddingTop: "xl",
      children: [(0, _v1.jsx)(_v157.Text, {
        variant: "body-md",
        color: "text-secondary",
        textAlign: "center",
        children: _v79.AI_SUGGESTIONS_TITLE
      }), (0, _v1.jsx)(_v156.Grid, {
        width: "100%",
        maxWidth: (0, _v9.rem)(720),
        gap: "sm",
        gridTemplateColumns: {
          base: "1fr",
          sm: "repeat(2, minmax(0, 1fr))"
        },
        children: _v79.AI_SUGGESTIONS.map(_v0 => (0, _v1.jsx)(_v159.Button, {
          variant: "secondary",
          onClick: () => _v0(_v0),
          width: "100%",
          height: "auto",
          minHeight: (0, _v9.rem)(56),
          paddingX: "md",
          paddingY: "sm",
          justifyContent: "flex-start",
          textAlign: "left",
          whiteSpace: "normal",
          fontWeight: "normal",
          borderRadius: "md",
          children: _v0
        }, _v0))
      })]
    }),
    _v197 = () => {
      let _v0 = _v188(),
        {
          showCheckboxColumn: _v1,
          showLocationColumn: _v2,
          showModifiedColumn: _v3,
          gridColumns: _v4,
          thumbnailColumnWidth: _v5
        } = _v0;
      return (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        width: "100%",
        gap: "sm",
        paddingTop: "md",
        children: [(0, _v1.jsx)(_v161.Skeleton, {
          height: (0, _v9.rem)(80),
          width: "100%",
          borderRadius: "md"
        }), (0, _v1.jsx)(_v200, {
          ..._v0
        }), [,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v168.ContentRow, {
          listGridColumns: _v4,
          isSelected: !1,
          disableHover: !0,
          width: "100%",
          padding: "sm",
          gap: ".5rem",
          children: [_v1 && (0, _v1.jsx)(_v168.ContentRow.Column, {
            children: (0, _v1.jsx)(_v1.Fragment, {})
          }), (0, _v1.jsx)(_v168.ContentRow.Column, {
            children: (0, _v1.jsx)(_v155.Box, {
              aspectRatio: 16 / 9,
              width: _v5,
              children: (0, _v1.jsx)(_v161.Skeleton, {
                height: "100%",
                width: "100%"
              })
            })
          }), (0, _v1.jsx)(_v168.ContentRow.Column, {
            width: "100%",
            children: (0, _v1.jsxs)(_v8.Flex, {
              direction: "column",
              gap: "1rem",
              paddingLeft: "0.5rem",
              width: "100%",
              children: [(0, _v1.jsx)(_v161.Skeleton, {
                variant: "text",
                width: "85%"
              }), (0, _v1.jsx)(_v161.Skeleton, {
                variant: "text",
                maxWidth: "40%"
              })]
            })
          }), _v2 && (0, _v1.jsx)(_v168.ContentRow.Column, {
            children: (0, _v1.jsx)(_v8.Flex, {
              margin: `0 0 0 ${(0, _v9.rem)(24)}`,
              children: (0, _v1.jsx)(_v161.Skeleton, {
                variant: "text",
                width: "4rem"
              })
            })
          }), _v3 && (0, _v1.jsx)(_v168.ContentRow.Column, {
            children: (0, _v1.jsx)(_v161.Skeleton, {
              variant: "text",
              w: "5rem"
            })
          }), (0, _v1.jsx)(_v168.ContentRow.Column, {
            children: (0, _v1.jsx)(_v1.Fragment, {})
          })]
        }, `agentic-skeleton-${_v1}`))]
      });
    },
    _v198 = /<<(\d+)>>/g,
    _v199 = ({
      summary: _v0,
      clips: _v1,
      citedTitles: _v2,
      borderColor: _v3,
      ids: _v4
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(!1),
        [_v7, _v8] = (0, _v3.useState)(!1),
        _v9 = (0, _v3.useRef)(null),
        {
          trackAgenticSearchResultClick: _v10,
          trackAgenticSearchInteraction: _v11
        } = (0, _v12.useSearchTracking)();
      (0, _v3.useEffect)(() => {
        let _v0 = _v9.current;
        _v0 && !_v5 && _v8(_v0.scrollHeight > _v0.clientHeight + 1);
      }, [_v0, _v5]);
      let _v12 = {},
        _v13 = {
          ..._v2
        };
      for (let _v0 of _v1) _v12[_v0.clip_id] = _v0.link, !_v13[_v0.clip_id] && _v0.title && (_v13[_v0.clip_id] = _v0.title);
      return (0, _v1.jsxs)(_v160.Panel, {
        isVisible: !0,
        sx: {
          width: "100%",
          "--panel-border-width": "1px",
          "--panel-border-style": "solid",
          "--panel-border-color": _v3
        },
        children: [(0, _v1.jsx)(_v160.PanelHeader, {
          paddingX: "lg",
          children: _v79.AI_ANSWER
        }), (0, _v1.jsxs)(_v160.PanelBody, {
          paddingX: "lg",
          paddingBottom: "md",
          paddingTop: "0",
          children: [(0, _v1.jsx)(_v157.Text, {
            ref: _v9,
            variant: "body-md",
            lineHeight: "1.5",
            noOfLines: _v5 ? void 0 : 3,
            children: ((_v0, _v1, _v2, _v3) => {
              let _v4,
                _v5 = [],
                _v6 = 0,
                _v7 = new RegExp(_v198);
              for (; null !== (_v4 = _v7.exec(_v0));) {
                _v4.index > _v6 && _v5.push(_v0.slice(_v6, _v4.index));
                let _v0 = _v4[1],
                  _v1 = _v2[_v0] || _v79.videoFallbackTitle(_v0),
                  _v2 = _v1[_v0];
                _v2 ? _v5.push((0, _v1.jsx)(_v155.Box, {
                  as: "a",
                  href: _v2,
                  onClick: () => _v3(_v0),
                  color: "text-link",
                  textDecoration: "underline",
                  textDecorationColor: "text-link",
                  textUnderlineOffset: "2px",
                  _hover: {
                    textDecorationColor: "text-primary"
                  },
                  fontWeight: "semibold",
                  fontStyle: "italic",
                  children: _v1
                }, `ref-${_v0}-${_v4.index}`)) : _v5.push((0, _v1.jsx)("i", {
                  children: _v1
                }, `ref-${_v0}-${_v4.index}`)), _v6 = _v7.lastIndex;
              }
              return _v6 < _v0.length && _v5.push(_v0.slice(_v6)), _v5.length > 0 ? _v5 : [_v0];
            })(_v0, _v12, _v13, _v0 => {
              _v4.searchRequestId && _v10({
                searchId: _v4.searchId,
                searchRequestId: _v4.searchRequestId,
                clipId: Number(_v0) || null,
                clickedItem: "citation",
                clickedItemId: Number(_v0) || null,
                resultPosition: null,
                startTimeSeconds: null
              });
            })
          }), (_v7 || _v5) && (0, _v1.jsx)(_v159.Button, {
            size: "xs",
            variant: "tertiary",
            onClick: () => {
              _v4.searchRequestId && _v11({
                searchId: _v4.searchId,
                searchRequestId: _v4.searchRequestId,
                valueName: _v5 ? "summary_collapse" : "summary_expand",
                entityId: null
              }), _v6(!_v5);
            },
            "aria-expanded": _v5,
            marginTop: "xs",
            padding: "0",
            height: "auto",
            _hover: {
              textDecoration: "underline"
            },
            children: _v5 ? _v79.SHOW_LESS : _v79.SHOW_MORE
          }), (0, _v1.jsx)(_v185, {
            searchId: _v4.searchId,
            searchRequestId: _v4.searchRequestId
          }, _v4.searchRequestId ?? "none")]
        })]
      });
    },
    _v200 = ({
      showCheckboxColumn: _v0,
      showLocationColumn: _v1,
      showModifiedColumn: _v2,
      gridColumns: _v3
    }) => (0, _v1.jsxs)(_v168.ContentRow, {
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
      padding: "sm",
      gap: ".5rem",
      children: [_v0 && (0, _v1.jsx)(_v168.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v168.ContentRow.Column, {
        children: (0, _v1.jsx)(_v157.Text, {
          variant: "heading-xs",
          children: _v79.TITLE
        })
      }), (0, _v1.jsx)(_v168.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), _v1 && (0, _v1.jsx)(_v168.ContentRow.Column, {
        margin: `0 0 0 ${(0, _v9.rem)(24)}`,
        children: (0, _v1.jsx)(_v157.Text, {
          variant: "heading-xs",
          children: _v79.LOCATION
        })
      }), _v2 && (0, _v1.jsx)(_v168.ContentRow.Column, {
        children: (0, _v1.jsx)(_v157.Text, {
          variant: "heading-xs",
          children: _v79.MODIFIED
        })
      }), (0, _v1.jsx)(_v168.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      })]
    }),
    _v201 = ({
      clips: _v0,
      ids: _v1
    }) => {
      let _v2 = _v188(),
        [_v3] = (0, _v164.useMediaQuery)(_v47),
        _v4 = _v3 ? "114" : "142";
      return (0, _v1.jsxs)(_v155.Box, {
        children: [(0, _v1.jsx)(_v200, {
          ..._v2
        }), (0, _v1.jsx)(_v8.Flex, {
          flexDir: "column",
          gap: (0, _v9.rem)(4),
          marginBottom: "lg",
          children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v203, {
            clip: _v0,
            position: _v1,
            ids: _v1,
            thumbnailWidth: _v4,
            ..._v2
          }, _v0.clip_id))
        })]
      });
    },
    _v202 = ({
      clips: _v0,
      ids: _v1
    }) => {
      let [_v2, _v3] = (0, _v3.useState)(!1),
        _v4 = _v188(),
        [_v5] = (0, _v164.useMediaQuery)(_v47),
        _v6 = _v5 ? "114" : "142",
        {
          trackAgenticSearchInteraction: _v7
        } = (0, _v12.useSearchTracking)();
      return (0, _v1.jsxs)(_v155.Box, {
        children: [(0, _v1.jsx)(_v159.Button, {
          size: "sm",
          variant: "tertiary",
          onClick: () => {
            _v1.searchRequestId && _v7({
              searchId: _v1.searchId,
              searchRequestId: _v1.searchRequestId,
              valueName: _v2 ? "other_results_collapse" : "other_results_expand",
              entityId: null
            }), _v3(!_v2);
          },
          "aria-expanded": _v2,
          rightIcon: _v2 ? (0, _v1.jsx)(_v166.ChevronUp, {
            boxSize: `${(0, _v9.rem)(20)} !important`
          }) : (0, _v1.jsx)(_v165.ChevronDown, {
            boxSize: `${(0, _v9.rem)(20)} !important`
          }),
          marginBottom: "sm",
          children: (0, _v1.jsx)(_v157.Text, {
            variant: "body-md",
            children: _v79.otherResultsCount(_v0.length)
          })
        }), _v2 && (0, _v1.jsx)(_v8.Flex, {
          flexDir: "column",
          gap: (0, _v9.rem)(4),
          marginBottom: "lg",
          children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v203, {
            clip: _v0,
            position: _v1,
            ids: _v1,
            thumbnailWidth: _v6,
            ..._v4
          }, _v0.clip_id))
        })]
      });
    },
    _v203 = ({
      clip: _v0,
      position: _v1,
      ids: _v2,
      thumbnailWidth: _v3,
      showCheckboxColumn: _v4,
      showLocationColumn: _v5,
      showModifiedColumn: _v6,
      gridColumns: _v7
    }) => {
      let {
          trackAgenticSearchResultClick: _v8
        } = (0, _v12.useSearchTracking)(),
        _v9 = _v0.duration_seconds ? (0, _v169.secondsToDisplay)(_v0.duration_seconds) : "",
        _v10 = _v0.modified_on ? _v132(_v0.modified_on) : _v0.uploaded_on ? _v132(_v0.uploaded_on) : "",
        _v11 = _v0 => {
          if (!_v2.searchRequestId) return;
          let _v1 = "folder" === _v0 ? _v0.folder_id : _v0.clip_id;
          _v8({
            searchId: _v2.searchId,
            searchRequestId: _v2.searchRequestId,
            clipId: Number(_v0.clip_id) || null,
            clickedItem: _v0,
            clickedItemId: Number(_v1) || null,
            resultPosition: _v1,
            startTimeSeconds: null
          });
        };
      return (0, _v1.jsxs)(_v155.Box, {
        children: [(0, _v1.jsx)(_v168.ContentRow, {
          listGridColumns: "auto",
          isSelected: !1,
          cursor: "pointer",
          padding: "0",
          children: (0, _v1.jsxs)(_v155.Box, {
            as: "a",
            href: _v0.link,
            onClick: () => _v11("clip"),
            display: "grid",
            w: "100%",
            gridTemplateColumns: _v7,
            alignItems: "center",
            padding: "sm",
            gap: ".5rem",
            textDecoration: "none",
            color: "inherit",
            children: [_v4 && (0, _v1.jsx)(_v168.ContentRow.Column, {
              children: (0, _v1.jsx)(_v1.Fragment, {})
            }), (0, _v1.jsx)(_v168.ContentRow.Column, {
              children: _v0.thumbnail ? (0, _v1.jsx)(_v168.ContentRow.Thumbnail, {
                alt: _v0.title || "",
                src: _v0.thumbnail,
                badgeText: _v9,
                minWidth: (0, _v9.rem)(Number(_v3))
              }) : (0, _v1.jsx)(_v155.Box, {
                minWidth: (0, _v9.rem)(Number(_v3)),
                aspectRatio: "16/9",
                backgroundColor: "fill-component",
                borderRadius: "sm"
              })
            }), (0, _v1.jsx)(_v168.ContentRow.Column, {
              overflow: "hidden",
              margin: `0 0 0 ${(0, _v9.rem)(4)}`,
              children: (0, _v1.jsxs)(_v8.Flex, {
                flexDir: "column",
                gap: "sm",
                width: "100%",
                children: [(0, _v1.jsx)(_v157.Text, {
                  variant: "body-lg",
                  noOfLines: 1,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  display: "block",
                  children: _v0.title || _v79.videoFallbackTitle(_v0.clip_id)
                }), _v0.clip_summary && (0, _v1.jsx)(_v162.Tooltip, {
                  label: _v0.clip_summary,
                  placement: "bottom-start",
                  openDelay: 400,
                  maxW: (0, _v9.rem)(400),
                  hasArrow: !0,
                  children: (0, _v1.jsx)(_v157.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    noOfLines: 2,
                    whiteSpace: "normal",
                    children: _v0.clip_summary
                  })
                })]
              })
            }), _v5 && (0, _v1.jsx)(_v168.ContentRow.Column, {
              href: _v0.folder_uri ? _v135(_v0.folder_uri) : void 0,
              overflow: "auto",
              margin: `0 0 0 ${(0, _v9.rem)(24)}`,
              onClick: _v0 => {
                _v0.stopPropagation(), _v0.folder_uri && _v11("folder");
              },
              children: (0, _v1.jsx)(_v157.Text, {
                variant: "body-md",
                color: "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                _hover: _v0.folder_uri ? {
                  textDecoration: "underline",
                  color: "text-primary"
                } : void 0,
                children: _v0.folder_name || "—"
              })
            }), _v6 && (0, _v1.jsx)(_v168.ContentRow.Column, {
              overflow: "hidden",
              children: (0, _v1.jsx)(_v157.Text, {
                variant: "body-md",
                color: "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: _v10
              })
            }), (0, _v1.jsx)(_v168.ContentRow.Column, {
              justifyColumn: "flex-end",
              children: (0, _v1.jsx)(_v155.Box, {
                width: (0, _v9.rem)(28)
              })
            })]
          })
        }), _v0.moments.length > 0 && (0, _v1.jsx)(_v204, {
          moments: _v0.moments,
          videoLink: _v0.link,
          clipId: _v0.clip_id,
          position: _v1,
          ids: _v2
        })]
      });
    },
    _v204 = ({
      moments: _v0,
      videoLink: _v1,
      clipId: _v2,
      position: _v3,
      ids: _v4
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(!1),
        {
          trackAgenticSearchInteraction: _v7
        } = (0, _v12.useSearchTracking)();
      return (0, _v1.jsxs)(_v8.Flex, {
        flexDir: "column",
        gap: "0",
        w: "100%",
        overflow: "auto",
        children: [(0, _v1.jsx)(_v159.Button, {
          onClick: _v0 => {
            _v0.preventDefault(), _v0.stopPropagation(), _v4.searchRequestId && _v7({
              searchId: _v4.searchId,
              searchRequestId: _v4.searchRequestId,
              valueName: _v5 ? "moments_collapse" : "moments_expand",
              entityId: Number(_v2) || null
            }), _v6(!_v5);
          },
          "aria-expanded": _v5,
          rightIcon: _v5 ? (0, _v1.jsx)(_v166.ChevronUp, {
            boxSize: `${(0, _v9.rem)(20)} !important`
          }) : (0, _v1.jsx)(_v165.ChevronDown, {
            boxSize: `${(0, _v9.rem)(20)} !important`
          }),
          size: "sm",
          paddingY: "xs",
          paddingRight: "sm",
          paddingLeft: {
            base: "xs",
            md: (0, _v9.rem)(12)
          },
          mb: "sm",
          marginLeft: {
            base: "xs",
            md: (0, _v9.rem)(44)
          },
          color: "text-primary",
          width: "min-content",
          borderRadius: "sm",
          gap: "xs",
          variant: "tertiary",
          _active: {},
          _dark: {
            _active: {}
          },
          _hover: {
            background: "fill-component-hover"
          },
          children: (0, _v1.jsx)(_v157.Text, {
            variant: "body-md",
            whiteSpace: "nowrap",
            children: _v79.momentsResultCount(_v0.length)
          })
        }), _v5 && (0, _v1.jsx)(_v8.Flex, {
          overflowX: "scroll",
          marginBottom: "sm",
          gap: (0, _v9.rem)(2),
          paddingLeft: {
            base: "0",
            md: (0, _v9.rem)(44)
          },
          paddingRight: "sm",
          sx: {
            scrollbarWidth: "thin"
          },
          children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v205, {
            moment: _v0,
            videoLink: _v1,
            clipId: _v2,
            position: _v3,
            ids: _v4
          }, `moment-${_v1}`))
        })]
      });
    },
    _v205 = ({
      moment: _v0,
      videoLink: _v1,
      clipId: _v2,
      position: _v3,
      ids: _v4
    }) => {
      let {
          trackAgenticSearchResultClick: _v5
        } = (0, _v12.useSearchTracking)(),
        _v6 = (0, _v14.useViewer)(),
        _v7 = _v0.snippet || _v0.relevance_reason || "",
        _v8 = Math.round(_v0.start_time_seconds),
        _v9 = _v0.snippet.split(/\s+/).filter(Boolean).slice(0, 6).join(" "),
        _v10 = _v137(_v1, 0 * _v0.start_time_seconds, encodeURIComponent(_v9), !_v6?.isSimplifiedSite, 0 * _v0.end_time_seconds);
      return (0, _v1.jsxs)(_v155.Box, {
        as: "a",
        href: _v10,
        onClick: () => {
          _v4.searchRequestId && _v5({
            searchId: _v4.searchId,
            searchRequestId: _v4.searchRequestId,
            clipId: Number(_v2) || null,
            clickedItem: "moment",
            clickedItemId: null,
            resultPosition: _v3,
            startTimeSeconds: _v8
          });
        },
        display: "flex",
        flexDir: "column",
        alignItems: "flex-start",
        gap: (0, _v9.rem)(4),
        borderRadius: "md",
        textDecoration: "none",
        cursor: "pointer",
        padding: "sm",
        minWidth: (0, _v9.rem)(220),
        maxWidth: (0, _v9.rem)(300),
        flexShrink: 0,
        backgroundColor: "fill-component",
        border: "1px solid",
        borderColor: "stroke",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        color: "inherit",
        children: [(0, _v1.jsxs)(_v157.Text, {
          variant: "body-xs",
          color: "text-secondary",
          whiteSpace: "nowrap",
          fontWeight: "semibold",
          children: [(0, _v169.secondsToDisplay)(_v0.start_time_seconds), " - ", (0, _v169.secondsToDisplay)(_v0.end_time_seconds)]
        }), _v7 && (0, _v1.jsx)(_v162.Tooltip, {
          label: _v7,
          placement: "bottom",
          openDelay: 300,
          maxW: (0, _v9.rem)(400),
          hasArrow: !0,
          children: (0, _v1.jsx)(_v157.Text, {
            variant: "body-sm",
            w: "100%",
            noOfLines: 3,
            whiteSpace: "normal",
            overflow: "hidden",
            textAlign: "start",
            lineHeight: "1.4",
            children: _v7
          })
        }), _v0.snippet && _v0.relevance_reason && (0, _v1.jsx)(_v162.Tooltip, {
          label: _v0.relevance_reason,
          placement: "bottom",
          openDelay: 300,
          maxW: (0, _v9.rem)(400),
          hasArrow: !0,
          children: (0, _v1.jsx)(_v157.Text, {
            variant: "body-xs",
            color: "text-tertiary",
            w: "100%",
            noOfLines: 1,
            textAlign: "start",
            fontStyle: "italic",
            children: _v0.relevance_reason
          })
        })]
      });
    };
  var _v206 = _v0.i(0);
  let _v207 = () => {
    let {
        setIsAgenticSearch: _v0
      } = (0, _v3.useContext)(_v151),
      {
        trackAgenticSearchEntryClicked: _v1
      } = (0, _v12.useSearchTracking)();
    return (0, _v1.jsx)(_v159.Button, {
      variant: "secondary",
      size: "lg",
      width: "100%",
      display: {
        base: "none",
        sm: "inline-flex"
      },
      minHeight: (0, _v9.rem)(56),
      justifyContent: "space-between",
      fontWeight: "normal",
      onClick: () => {
        _v1({
          location: "search_results"
        }), _v0(!0);
      },
      leftIcon: (0, _v1.jsx)(_v167.SearchMagnifier, {
        boxSize: "sm"
      }),
      rightIcon: (0, _v1.jsx)(_v206.ChevronRight, {
        boxSize: "sm"
      }),
      sx: {
        "& svg": {
          color: "#8B5CF6"
        }
      },
      children: _v79.AI_SEARCH_RESULTS_CTA
    });
  };
  var _v208 = _v0.i(0);
  let _v209 = "thumbs_up",
    _v210 = "thumbs_down",
    _v211 = {
      thumbsUp: !1,
      thumbsDown: !1,
      providedFeedback: !1
    };
  function _v212(_v0, _v1) {
    switch (_v1.type) {
      case _v209:
        return {
          thumbsUp: !_v0.thumbsUp,
          thumbsDown: !1,
          providedFeedback: !0
        };
      case _v210:
        return {
          thumbsDown: !_v0.thumbsDown,
          thumbsUp: !1,
          providedFeedback: !0
        };
      default:
        return _v0;
    }
  }
  var _v213 = _v0.i(0),
    _v213 = _v213,
    _v214 = _v0.i(0),
    _v215 = _v0.i(0);
  let _v216 = () => {
    var _v0;
    let _v1,
      _v2 = (0, _v2.useRouter)(),
      _v3 = (_v0 = _v2.query, _v1 = {
        ..._v80
      }, "string" == typeof _v0.q && (_v1.query = _v0.q), Number(_v0.page) && (_v1.page = Number(_v0.page)), _v126(_v0.uploaded, _v83.options) && (_v1.uploaded = (0, _v74.camelizeString)(_v0.uploaded)), _v126(_v0.updated, _v84.options) && (_v1.updated = (0, _v74.camelizeString)(_v0.updated)), _v126(_v0.type, _v85.options) ? _v1.type = _v0.type : _v1.type = _v85.options.clip.value, _v126(_v0.live, _v86.options) && (_v1.live = _v0.live), _v126(_v0.hdr, _v87.options) && (_v1.hdr = (0, _v74.camelizeString)(_v0.hdr)), _v126(_v0.vimeo360, _v88.options) && (_v1.vimeo360 = "360" === _v0.vimeo360 ? "vimeo360" : _v0.vimeo360), _v126(_v0.price, _v89.options) && (_v1.price = _v0.price), _v126(_v0.license, _v90.options) && (_v1.license = (0, _v74.camelizeString)(_v0.license)), _v126(_v0.resolution, _v91.options) && (_v1.resolution = _v0.resolution), _v126(_v0.duration, _v92.options) && (_v1.duration = _v0.duration), _v126(_v0.collection, _v93.options) && (_v1.collection = _v0.collection), _v126(_v0.category, _v95) && (_v1.category = _v0.category), "true" === _v0.follow && (_v1.follow = _v0.follow), _v126(_v0.sort, _v121) && (_v1.sort = _v0.sort), _v1),
      {
        isDrawerOpen: _v4
      } = (0, _v3.useContext)(_v60),
      _v5 = (0, _v3.useRef)(null),
      _v6 = _v5?.current?.href === _v2.asPath;
    return _v4 || (_v5.current = {
      ..._v130(_v3),
      href: _v2.asPath
    }), {
      ..._v3,
      filters: _v3,
      onFilterChange: (_v0, _v1) => {
        if (_v0 === _v85.name) {
          let _v0 = {
            q: _v3.query
          };
          _v85.options.clip.value !== _v1 && (_v0.type = _v1), _v129(_v2, _v0);
        } else {
          let {
            url: _v0
          } = _v130({
            ..._v3,
            page: 1
          });
          "default" === _v1 || _v0 === _v36 && _v1 === _v119.clip.relevance.value ? delete _v0[_v0] : _v0[_v0] = _v1, _v129(_v2, _v0);
        }
      },
      appliedFiltersCount: Object.keys(_v133(_v3)).filter(_v0 => void 0 !== _v3[_v0]).length,
      clearFilters: () => {
        let {
          url: _v0
        } = _v130({
          ..._v80,
          page: _v3.page,
          query: _v3.query,
          sort: _v3.sort,
          type: _v5.current?.url.type ?? _v3.type
        });
        _v129(_v2, _v0);
      },
      updatePage: _v0 => {
        let {
          url: _v1
        } = _v130({
          ..._v3,
          page: _v0
        });
        _v129(_v2, _v1);
      },
      appliedFiltersSortAndQuery: JSON.stringify(_v2.query),
      keepPreviousUrl: () => {
        _v5.current && _v129(_v2, _v5.current.url);
      },
      isApplyButtonDisabled: _v6
    };
  };
  var _v217 = _v0.i(0),
    _v218 = _v0.i(0),
    _v219 = _v0.i(0);
  async function _v220({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v218.measureLatency)("getSearch", "GET", async () => {
      let _v0 = await fetch(`${_v0}/search?${(0, _v219.searchQueryString)(_v2)}&fields=${_v1.map(_v219.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v219.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v219.deepCamelCase)(_v1);
    });
  }
  var _v221 = _v0.i(0),
    _v222 = _v0.i(0),
    _v223 = _v0.i(0);
  function _v224(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v189.useGctlConfig)();
    return (0, _v221.default)(_v2 ? `/search${(0, _v223.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v220({
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
  "true" === _v217.default.env.STORYBOOK && (0, _v223.assignMswData)(_v224, {
    endpoint: "/search",
    method: "GET"
  }), "true" === _v217.default.env.STORYBOOK && (0, _v223.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v222.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v189.useGctlConfig)(),
      [_v5, _v6] = (0, _v223.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/search${(0, _v223.serializeQuery)(_v0)}`, _v220({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/search",
    method: "GET"
  });
  var _v225 = _v0.i(0);
  let _v226 = () => {
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
    _v227 = () => {
      let _v0 = (0, _v2.useRouter)(),
        _v1 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          searchType: _v2
        } = (0, _v3.useContext)(_v151),
        {
          isDrawerOpen: _v3
        } = (0, _v3.useContext)(_v60),
        _v4 = _v226(),
        _v5 = (0, _v225.useOrion)().identity.settings.enable_fuzzy_public_search,
        {
          query: _v6,
          page: _v7,
          uploaded: _v8,
          type: _v9,
          live: _v10,
          hdr: _v11,
          vimeo360: _v12,
          price: _v13,
          license: _v14,
          resolution: _v15,
          duration: _v16,
          collection: _v17,
          category: _v18,
          follow: _v19,
          updated: _v20,
          sort: _v21
        } = _v216(),
        _v22 = _v1?.user?.id,
        _v23 = _v2 === _v149,
        {
          data: _v24,
          isLoading: _v25,
          mutate: _v26,
          error: _v27
        } = _v224(() => {
          if (!_v0.isReady || !_v1?.apiUrl || !_v23 || _v3 || _v4) return null;
          let [_v0, _v1] = _v136(_v21);
          return {
            select: (_v0 => {
              switch (_v0) {
                case _v85.options.ondemand.value:
                  return _v49;
                case _v85.options.people.value:
                  return _v50;
                case _v85.options.channel.value:
                  return _v51;
                case _v85.options.group.value:
                  return _v52;
                default:
                  return _v48;
              }
            })(_v9),
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.3"
            },
            query: {
              filterType: _v9 ? _v85.options[_v9].value : _v85.options.clip.value,
              query: _v6,
              page: _v7,
              perPage: 24,
              filterUploaded: _v8 && _v83.options[_v8].value,
              filterLive: _v10 && _v86.options[_v10].value,
              filterHdr: _v11 && _v87.options[_v11].value,
              filterVimeo_360: _v12 && _v88.options[_v12].value,
              filterPrice: _v13 && _v89.options[_v13].value,
              filterLicense: _v14 && _v90.options[_v14].value,
              filterResolution: _v15 && _v91.options[_v15].value,
              filterStaffpicked: _v17 && !0,
              filterDuration: _v16 && _v92.options[_v16].value,
              filterCategory: _v18,
              filterFollows: _v19 && _v22,
              filterLastUpdated: _v20 && _v84.options[_v20].value,
              sizes: _v9 === _v85.options.ondemand.value ? ["296x744"] : void 0,
              sort: _v0,
              direction: _v1,
              facets: "type",
              fetchUserProfile: _v9 === _v85.options.people.value ? "1" : void 0,
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
        data: _v24,
        isLoading: _v25,
        mutate: _v26,
        error: _v27,
        publicResultCount: (_v0 => {
          if (!(_v0 instanceof Array)) return;
          let _v1 = {};
          for (let {
            name: _v0,
            total: _v1
          } of _v0) _v0 && (_v1[_v0] = _v1);
          return _v1;
        })(_v24?.facets?.type?.options)
      };
    };
  var _v228 = _v0.i(0);
  let _v229 = () => {
      let _v0 = (0, _v2.useRouter)(),
        {
          cache: _v1,
          mutate: _v2
        } = (0, _v222.useSWRConfig)(),
        _v3 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          searchType: _v4
        } = (0, _v3.useContext)(_v151),
        {
          isDrawerOpen: _v5
        } = (0, _v3.useContext)(_v60),
        _v6 = _v226(),
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
          customMetadata: _v17
        } = _v186(),
        {
          hasAutoClosedCaptions: _v18,
          hasNewMoments: _v19
        } = _v67(),
        {
          settings: _v20
        } = (0, _v64.useOrionSettings)(),
        _v21 = _v20.show_custom_metadata ? _v17 : void 0,
        _v22 = _v21 ? _v143(!1) : _v10 || _v143(_v18),
        _v23 = _v4 === _v148,
        _v24 = _v19 ? _v46 : {},
        {
          data: _v25,
          error: _v26,
          isLoading: _v27,
          mutate: _v28
        } = (0, _v228.useGetUserItems)(() => {
          if (!_v0.isReady || !_v3?.user || !_v23 || _v5 || _v6) return null;
          let [_v0, _v1] = _v136(_v12),
            [_v2, _v3] = _v14?.split(",") ?? [void 0, void 0];
          return {
            query: {
              perPage: 10,
              page: _v8,
              filter: _v21 ? "video" : _v9 || "folder,video,showcase,live_event",
              sort: _v0,
              direction: _v1,
              query: _v7,
              queryFields: _v22,
              excludeFolderIds: _v16,
              includeFolderIds: _v15,
              filterUploader: _v13,
              filterPrivacy: _v11,
              filterLivePlaceholder: !1,
              forceUpgrade: void 0,
              precision: 3,
              modifiedStartDate: _v2,
              modifiedEndDate: _v3,
              filterCustomMetadata: _v21,
              facetType: !0,
              ..._v24
            },
            select: _v53,
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
          keepPreviousData: !0
        });
      return {
        data: _v25,
        error: _v26,
        isLoading: _v27,
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
        mutate: _v28
      };
    },
    _v230 = {
      search_text: null,
      default_search_type: null,
      suggestions_qty: null,
      recent_suggestions_qty: null,
      recently_modified_suggestions_qty: null,
      suggestion_position: null,
      suggestion_type_chosen: null,
      search_id: null,
      is_ai_request: null,
      results_qty: null,
      results_page_number: null,
      result_position: null,
      invalid_request: null,
      entity_id: null,
      previous_value: null,
      value: null,
      value_name: null,
      order_by: null
    },
    _v231 = {
      search_text: null,
      search_id: null,
      order_by: null,
      suggestions_qty: null,
      recent_suggestions_qty: null,
      recently_modified_suggestions_qty: null,
      results_qty: null,
      results_page_number: null,
      filters: null
    },
    _v232 = {
      notification_name: null,
      error_id: null,
      error_name: null,
      checkbox_copy: null,
      notification_copy: null
    },
    _v233 = {
      ..._v232,
      is_marked_checkbox: null
    },
    _v234 = () => {
      let {
          defaultSearchType: _v0,
          feature: _v1,
          query: _v2,
          sort: _v3,
          page: _v4,
          total: _v5,
          uuidStr: _v6,
          isAiRequest: _v7,
          filters: _v8,
          searchType: _v9
        } = _v235(),
        _v10 = (0, _v214.useAnalyticsEvent)(),
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
          trackViewSuggestedAiSearch: _v21,
          trackSelectSuggestedAiSearch: _v22,
          trackAiSearchWidgetActions: _v23,
          trackThumbsRate: _v24,
          trackMomentsTimelineClick: _v25,
          trackMomentsPanelClick: _v26,
          trackMomentsResultsImpressions: _v27,
          trackMomentsTimelineImpressions: _v28,
          trackMomentsPanelImpressions: _v29
        } = (0, _v12.useSearchTracking)();
      return {
        sendHoverEvent: ({
          entityType: _v0,
          position: _v1,
          uri: _v2
        }) => {
          let _v3 = (0, _v213.default)(_v6, _v28),
            _v4 = _v125(_v2);
          _v24.withTeamCtx().withActionCtx({
            action_type: "hover"
          }).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: _v0,
            element: "card",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_result_hover",
            version: 4,
            additionalFields: {
              ..._v230,
              search_text: _v2,
              default_search_type: _v0,
              search_id: _v3,
              results_page_number: _v4,
              result_position: _v1,
              entity_id: _v4,
              order_by: _v3,
              results_qty: _v5,
              is_ai_request: _v7
            }
          }), _v12({
            searchId: _v3,
            searchText: _v2,
            defaultSearchType: _v0,
            resultsPageNumber: _v4,
            resultPosition: _v1,
            entityId: _v4,
            entityType: _v0,
            orderBy: _v3,
            resultsQty: _v5,
            isAiRequest: _v7
          });
        },
        sendClickEvent: ({
          entityType: _v0,
          position: _v1,
          uri: _v2
        }) => {
          let _v3 = (0, _v213.default)(_v6, _v28),
            _v4 = _v125(_v2);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: _v0,
            element: "card",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_result_click",
            version: 4,
            additionalFields: {
              ..._v230,
              search_text: _v2,
              default_search_type: _v0,
              search_id: _v3,
              results_page_number: _v4,
              result_position: _v1,
              entity_id: _v4,
              order_by: _v3,
              results_qty: _v5,
              is_ai_request: _v7
            }
          }), _v13({
            searchId: _v3,
            searchText: _v2,
            defaultSearchType: _v0,
            resultsPageNumber: _v4,
            resultPosition: _v1,
            entityId: _v4,
            entityType: _v0,
            orderBy: _v3,
            resultsQty: _v5,
            isAiRequest: _v7
          });
        },
        sendMomentClickEvent: ({
          position: _v0,
          entityId: _v1
        }) => {
          let _v2 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            flow: "search_moments",
            entity_type: _v122,
            element: "button",
            location: "modal",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_result_click",
            version: 4,
            additionalFields: {
              ..._v230,
              search_text: _v2,
              default_search_type: _v0,
              search_id: _v2,
              result_position: _v0,
              entity_id: _v1,
              order_by: _v3,
              results_qty: _v5,
              is_ai_request: _v7
            }
          }), _v13({
            searchId: _v2,
            searchText: _v2,
            defaultSearchType: _v0,
            resultPosition: _v0,
            entityId: _v1,
            entityType: _v122,
            orderBy: _v3,
            resultsQty: _v5,
            isAiRequest: _v7
          });
        },
        sendWatchLaterEvent: ({
          entityType: _v0,
          position: _v1,
          uri: _v2
        }) => {
          let _v3 = (0, _v213.default)(_v6, _v28),
            _v4 = _v125(_v2);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: _v0,
            element: "icon"
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_watch_later",
            version: 4,
            additionalFields: {
              ..._v230,
              search_text: _v2,
              default_search_type: _v0,
              search_id: _v3,
              results_page_number: _v4,
              result_position: _v1,
              entity_id: _v4,
              order_by: _v3,
              results_qty: _v5
            }
          }), _v14({
            searchId: _v3,
            searchText: _v2,
            defaultSearchType: _v0,
            resultsPageNumber: _v4,
            resultPosition: _v1,
            entityId: _v4,
            entityType: _v0,
            orderBy: _v3,
            resultsQty: _v5
          });
        },
        sendFilterEvent: ({
          copy: _v0,
          value: _v1,
          valueName: _v2,
          previousValue: _v3
        }) => {
          let _v4 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            copy: _v0,
            element: "button",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_filter",
            version: 4,
            additionalFields: {
              ..._v230,
              search_text: _v2,
              default_search_type: _v0,
              search_id: _v4,
              results_page_number: _v4,
              previous_value: _v3,
              value: _v1,
              value_name: _v2,
              order_by: _v3,
              results_qty: _v5,
              is_ai_request: _v7
            }
          }), _v15({
            searchId: _v4,
            searchText: _v2,
            defaultSearchType: _v0,
            resultsPageNumber: _v4,
            previousValue: _v3,
            value: _v1,
            valueName: _v2,
            orderBy: _v3,
            resultsQty: _v5,
            isAiRequest: _v7
          });
        },
        sendSortEvent: ({
          copy: _v0,
          value: _v1,
          previousValue: _v2
        }) => {
          let _v3 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            copy: _v0,
            element: "button",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_sorting",
            version: 4,
            additionalFields: {
              ..._v230,
              search_text: _v2,
              default_search_type: _v0,
              search_id: _v3,
              results_page_number: _v4,
              previous_value: [_v2],
              value: [_v1],
              value_name: "sorting",
              order_by: _v1,
              results_qty: _v5,
              is_ai_request: _v7
            }
          }), _v16({
            searchId: _v3,
            searchText: _v2,
            defaultSearchType: _v0,
            resultsPageNumber: _v4,
            previousValue: [_v2],
            value: [_v1],
            valueName: "sorting",
            orderBy: _v1,
            resultsQty: _v5,
            isAiRequest: _v7
          });
        },
        sendSearchResultsPage: _v0 => {
          let _v1 = Object.keys(_v8).filter(_v0 => void 0 !== _v8[_v0]),
            _v2 = _v1.map(_v0 => _v8[_v0]),
            _v3 = (0, _v213.default)(_v6, _v28),
            _v4 = _v0 ? null : _v4,
            _v5 = _v1.length && !_v0 ? _v1 : null,
            _v6 = _v2.length && !_v0 ? _v2 : null;
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_results_page",
            version: 5,
            additionalFields: {
              ..._v231,
              search_text: _v2,
              search_id: _v3,
              results_page_number: _v4,
              order_by: _v3,
              results_qty: _v5,
              filters: _v5
            }
          }), _v11({
            searchId: _v3,
            searchText: _v2,
            resultsPageNumber: _v4,
            orderBy: _v3,
            resultsQty: _v5,
            filters: _v5,
            filterValues: _v6,
            searchType: _v9
          });
        },
        sendModeSwitchEvent: ({
          copy: _v0
        }) => {
          let _v1 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            flow: "search",
            copy: _v0,
            element: "button",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_mode_switch",
            version: 4,
            additionalFields: {
              ..._v230,
              search_text: _v2,
              default_search_type: _v0,
              search_id: _v1,
              results_qty: _v5
            }
          }), _v17({
            searchId: _v1,
            searchText: _v2,
            defaultSearchType: _v0,
            resultsQty: _v5,
            copy: _v0
          });
        },
        sendNotificationView: () => {
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.notification_view",
            version: 3,
            additionalFields: {
              ..._v232,
              notification_name: "search_load_error",
              notification_copy: _v29
            }
          }), _v18({
            notificationName: "search_load_error",
            notificationCopy: _v29
          });
        },
        sendNotificationAction: () => {
          _v24.withTeamCtx().withActionCtx().withWebCtx().withProductAnalyticsCtx({
            copy: "contact support",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.notification_action",
            version: 3,
            additionalFields: {
              ..._v233,
              notification_name: "search_load_error",
              notification_copy: _v29
            }
          }), _v19({
            notificationName: "search_load_error",
            notificationCopy: _v29
          });
        },
        sendGenerateAiSearch: () => {
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            flow: "ai",
            element: "widget",
            location: "body",
            product: "search",
            feature: _v1
          }).withTeamCtx().withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.view_generate_ai_search",
            version: 3,
            additionalFields: {
              value: null,
              error_value: null,
              service_version: null
            }
          }), _v20();
        },
        sendViewAiSearch: (_v0, _v1) => {
          let _v2 = _v125(_v0 || "");
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            flow: "ai",
            element: "widget",
            location: "body",
            product: "search",
            feature: _v1
          }).withTeamCtx().withThirdPartyIntegrationCtx().withVideoCtx(_v2).send({
            eventName: "vimeo.view_suggested_ai_search",
            version: 3,
            additionalFields: {
              value: null,
              error_value: _v1 ?? null,
              service_version: null
            }
          }), _v21({
            videoId: _v2,
            errorValue: _v1 ?? null
          });
        },
        sendSelectAiSearch: (_v0, _v1) => {
          let _v2 = _v125(_v1);
          _v24.withTeamCtx().withActionCtx().withWebCtx().withProductAnalyticsCtx({
            flow: "ai",
            element: "link",
            entity_type: _v0,
            location: "ai_search_widget",
            product: "search",
            feature: _v1
          }).withTeamCtx().withThirdPartyIntegrationCtx().withVideoCtx(_v2).send({
            eventName: "vimeo.select_suggested_ai_search",
            version: 4
          }), _v22({
            entityType: _v0,
            videoId: _v2
          });
        },
        sendAiSearchAction: (_v0, _v1) => {
          let _v2 = _v125(_v1);
          _v24.withTeamCtx().withActionCtx().withWebCtx().withProductAnalyticsCtx({
            flow: "ai",
            copy: _v0,
            element: "button",
            location: "ai_search_widget",
            product: "search",
            feature: _v1
          }).withTeamCtx().withThirdPartyIntegrationCtx().withVideoCtx(_v2).send({
            eventName: "vimeo.ai_search_widget_actions",
            version: 4
          }), _v23({
            copy: _v0,
            videoId: _v2
          });
        },
        sendThumbsRate: (_v0, _v1) => {
          let _v2 = _v125(_v1);
          _v24.withTeamCtx().withActionCtx().withWebCtx().withProductAnalyticsCtx({
            flow: "ai",
            element: "icon",
            location: "widget",
            product: "search",
            feature: _v1
          }).withVideoCtx(_v2).send({
            eventName: "vimeo.thumbs_rate",
            version: 2,
            additionalFields: {
              rated_feature: "ai_search",
              thumbs_up_state: _v0.thumbsUp,
              thumbs_down_state: _v0.thumbsDown,
              rated_language: null
            }
          }), (_v0.thumbsUp || _v0.thumbsDown) && _v24({
            ratedFeature: "ai_search",
            isPositive: _v0.thumbsUp,
            videoId: _v2
          });
        },
        sendMomentsThumbsRate: _v0 => {
          _v24.withTeamCtx().withActionCtx().withWebCtx().withProductAnalyticsCtx({
            flow: "ai",
            element: "icon",
            location: "ai_search_widget",
            product: "search",
            feature: _v1
          }).send({
            eventName: "vimeo.thumbs_rate",
            version: 2,
            additionalFields: {
              rated_feature: "ai_generated_moments",
              thumbs_up_state: _v0.thumbsUp,
              thumbs_down_state: _v0.thumbsDown,
              rated_language: null
            }
          }), (_v0.thumbsUp || _v0.thumbsDown) && _v24({
            ratedFeature: "ai_generated_moments",
            isPositive: _v0.thumbsUp
          });
        },
        sendMomentsTimelineClick: ({
          position: _v0,
          entityId: _v1 = null
        }) => {
          let _v2 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: "moment",
            element: "card",
            location: "timeline",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_timeline_clicks",
            version: 4,
            additionalFields: {
              ..._v230,
              search_id: _v2,
              results_page_number: _v4,
              result_position: _v0,
              entity_id: _v1
            }
          }), _v25({
            searchId: _v2,
            resultsPageNumber: _v4,
            resultPosition: _v0,
            entityId: _v1
          });
        },
        sendMomentsPanelClick: ({
          copy: _v0,
          entityId: _v1 = null
        }) => {
          let _v2 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: "moment",
            copy: _v0,
            element: "button",
            location: "moment_panel",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_panel_clicks_interactions",
            version: 4,
            additionalFields: {
              ..._v230,
              search_id: _v2,
              results_page_number: _v4,
              entity_id: _v1,
              value_name: _v0
            }
          }), _v26({
            searchId: _v2,
            resultsPageNumber: _v4,
            entityId: _v1,
            valueName: _v0
          });
        },
        sendMomentsResultsImpressions: () => {
          let _v0 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_results_impressions",
            version: 5,
            additionalFields: {
              ..._v231,
              search_id: _v0,
              results_page_number: _v4
            }
          }), _v27({
            searchId: _v0,
            resultsPageNumber: _v4
          });
        },
        sendMomentsTimelineImpressions: () => {
          let _v0 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_timeline_impressions",
            version: 5,
            additionalFields: {
              ..._v231,
              search_id: _v0,
              results_page_number: _v4
            }
          }), _v28({
            searchId: _v0,
            resultsPageNumber: _v4
          });
        },
        sendMomentsPanelImpressions: () => {
          let _v0 = (0, _v213.default)(_v6, _v28);
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_panel_impressions",
            version: 5,
            additionalFields: {
              ..._v231,
              search_id: _v0,
              results_page_number: _v4
            }
          }), _v29({
            searchId: _v0,
            resultsPageNumber: _v4
          });
        },
        sendDeleteVideo: () => {
          _v10(_v215.VideoActionAnalytics.clickDeleteVideo({
            live_event_id: null,
            origin_folder_id: null,
            origin_type: null,
            location: "result_list",
            product: "search"
          }));
        }
      };
    },
    _v235 = () => {
      let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          searchType: _v1,
          feature: _v2
        } = (0, _v3.useContext)(_v151),
        {
          hasEnterprise: _v3,
          hasPublicSearchDisabled: _v4
        } = _v67(),
        {
          filters: {
            query: _v5 = null,
            sort: _v6 = null,
            page: _v7,
            ..._v8
          }
        } = _v216(),
        {
          data: _v9
        } = _v227(),
        {
          filters: {
            query: _v10 = null,
            sort: _v11 = null,
            page: _v12,
            ..._v13
          }
        } = _v186(),
        {
          data: _v14
        } = _v229(),
        _v15 = () => {
          if (!_v0?.user) return _v149;
          if (!_v4) return _v148;
          let _v0 = _v0.user.account.toLowerCase();
          return "free" !== _v0 && "basic" !== _v0 || _v3 || _v0?.teamUser?.ownerId ? _v148 : _v149;
        };
      return _v1 === _v148 ? {
        query: _v10,
        sort: _v11 ?? _v104.relevance.value,
        page: _v12,
        total: _v14?.total ?? null,
        uuidStr: _v10 || "",
        feature: _v2,
        defaultSearchType: _v15(),
        isAiRequest: !1,
        filters: _v13,
        searchType: _v1
      } : {
        query: _v5,
        sort: _v6 ?? _v104.relevance.value,
        page: _v7,
        total: _v9?.total ?? null,
        uuidStr: _v5 || "",
        feature: _v2,
        defaultSearchType: _v15(),
        isAiRequest: null,
        filters: _v8,
        searchType: _v1
      };
    },
    _v236 = ({
      isExpanded: _v0,
      handleToggle: _v1,
      displayShowMore: _v2,
      videoLink: _v3
    }) => {
      let [_v4, _v5] = (0, _v3.useReducer)(_v212, _v211),
        _v6 = (0, _v180.useToast)(),
        {
          sendThumbsRate: _v7,
          sendAiSearchAction: _v8
        } = _v234();
      return (0, _v3.useEffect)(() => {
        _v4.providedFeedback && (_v7(_v4, _v3), _v6({
          title: _v79.THANKS_FOR_FEEDBACK,
          variant: "neutral",
          isClosable: !1
        }));
      }, [_v4]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v2 && (0, _v1.jsx)(_v159.Button, {
          variant: "secondary",
          size: {
            base: "md",
            md: "sm"
          },
          onClick: () => {
            _v8(_v0 ? "Show less" : "Show more", _v3), _v1();
          },
          children: _v0 ? _v79.SHOW_LESS : _v79.SHOW_MORE
        }), (0, _v1.jsx)(_v171.IconButton, {
          size: {
            base: "md",
            md: "sm"
          },
          variant: "tertiary",
          icon: _v4.thumbsUp ? (0, _v1.jsx)(_v184.ThumbUpFilled, {}) : (0, _v1.jsx)(_v183.ThumbUp, {}),
          onClick: () => _v5({
            type: _v209
          }),
          "aria-label": "thumbs up"
        }), (0, _v1.jsx)(_v171.IconButton, {
          size: {
            base: "md",
            md: "sm"
          },
          variant: "tertiary",
          icon: _v4.thumbsDown ? (0, _v1.jsx)(_v182.ThumbDownFilled, {}) : (0, _v1.jsx)(_v181.ThumbDown, {}),
          onClick: () => _v5({
            type: _v210
          }),
          "aria-label": "thumbs down"
        })]
      });
    },
    _v237 = ({
      showAnimation: _v0,
      ..._v1
    }) => {
      let _v2 = (0, _v163.useColorModeValue)("linear-gradient(360deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0.82) 96%, rgba(255, 255, 255, 0.4) 100%)", "linear-gradient(360deg,rgba(24, 30, 35, 1) 0%, rgba(24, 30, 35, 1) 90%, rgba(24, 30, 35, 0.82) 96%, rgba(24, 30, 35, 0.4) 100%)"),
        _v3 = (0, _v27.keyframes)({
          "0%": {
            transform: `translateY(${(0, _v9.rem)(-80)})`,
            background: _v2,
            height: "150%"
          },
          "90%": {
            transform: `translateY(${(0, _v9.rem)(120)})`,
            background: _v2
          },
          "100%": {
            transform: `translateY(${(0, _v9.rem)(130)})`,
            background: "transparent",
            height: "100%"
          }
        }),
        _v4 = {
          content: '""',
          position: "absolute ",
          width: "100%",
          height: "100%",
          borderRadius: "sm",
          animation: `${_v3} 3s ease-in`,
          overflow: "hidden"
        };
      return (0, _v1.jsx)(_v208.GridItem, {
        paddingTop: (0, _v9.rem)(4),
        gridColumn: {
          base: "1/5",
          md: "1/4"
        },
        position: "relative",
        _after: _v0 ? _v4 : {},
        paddingRight: {
          base: "0",
          md: (0, _v9.rem)(22)
        },
        ..._v1
      });
    };
  var _v238 = _v0.i(0),
    _v239 = _v0.i(0),
    _v240 = _v0.i(0),
    _v241 = _v0.i(0),
    _v242 = _v0.i(0),
    _v243 = _v0.i(0),
    _v244 = _v0.i(0);
  let _v245 = ({
      onClick: _v0,
      copy: _v1,
      paddingY: _v2 = "md",
      variant: _v3 = "heading-sm"
    }) => {
      let {
        hasReframeOverride: _v4
      } = _v67();
      return (0, _v1.jsxs)(_v160.PanelHeader, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "sm",
        py: _v2,
        pr: "md",
        pl: {
          base: (0, _v9.rem)(12),
          md: (0, _v9.rem)(20)
        },
        children: [(0, _v1.jsx)(_v244.AiSparkles, {
          boxSize: "xs"
        }), (0, _v1.jsxs)(_v157.Text, {
          variant: _v3,
          as: "h1",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "sm",
          children: [_v1, !_v4 && (0, _v1.jsx)(_v243.Badge, {
            variant: "warning",
            size: "xs",
            height: (0, _v9.rem)(14),
            borderWidth: "0",
            pt: "1px",
            children: _v79.BETA
          })]
        }), (0, _v1.jsx)(_v242.CloseButton, {
          size: "sm",
          variant: "tertiary",
          "aria-label": "close ask your library button",
          onClick: _v0
        })]
      });
    },
    _v246 = ({
      children: _v0,
      videoLink: _v1 = "",
      ..._v2
    }) => {
      let {
          panelStatus: _v3
        } = (0, _v3.useContext)(_v60),
        [_v4, _v5] = (0, _v3.useState)(!0),
        {
          sendAiSearchAction: _v6
        } = _v234(),
        _v7 = (0, _v163.useColorModeValue)("var(--vimeo-colors-lightBlueAlpha-200)", "var(--vimeo-colors-darkBlueAlpha-200)");
      return (0, _v1.jsx)(_v155.Box, {
        marginLeft: "sm",
        marginRight: _v3 ? 0 : "sm",
        marginBottom: _v4 ? {
          base: "md",
          sm: "lg"
        } : 0,
        children: (0, _v1.jsxs)(_v160.Panel, {
          isVisible: _v4,
          sx: {
            width: "100%",
            "--panel-border-width": "1px",
            "--panel-border-style": "solid",
            "--panel-border-color": _v7
          },
          children: [(0, _v1.jsx)(_v245, {
            onClick: () => {
              _v6("close", _v1), _v5(!1);
            },
            ..._v2
          }), _v0]
        })
      });
    },
    _v247 = () => {
      let _v0 = (0, _v25.useBreakpointValue)({
          base: !0,
          md: !1
        }) || !1,
        {
          gridColumns: _v1
        } = _v188(),
        {
          sendGenerateAiSearch: _v2
        } = _v234();
      return (0, _v3.useEffect)(() => {
        _v2();
      }, []), (0, _v1.jsx)(_v246, {
        copy: _v79.SEARCHING_AI,
        children: (0, _v1.jsxs)(_v239.VStack, {
          paddingX: {
            base: "md",
            md: "lg"
          },
          paddingY: "sm",
          children: [(0, _v1.jsxs)(_v156.Grid, {
            width: "100%",
            gridTemplateColumns: _v1,
            gap: (0, _v9.rem)(12),
            paddingBottom: (0, _v9.rem)(12),
            children: [(0, _v1.jsx)(_v248, {
              gridColumn: {
                base: "1/4",
                sm: "1/5",
                md: "1/4"
              }
            }), (0, _v1.jsx)(_v248, {
              gridColumn: {
                base: "1/4",
                sm: "1/5",
                md: "1/4"
              }
            }), (0, _v1.jsx)(_v248, {
              gridColumn: {
                base: "1/4",
                sm: "1/5",
                md: "1/4"
              },
              width: "82%"
            }), _v0 && (0, _v1.jsx)(_v248, {
              w: (0, _v9.rem)(100),
              marginTop: "lg",
              gridColumn: "1"
            })]
          }), (0, _v1.jsxs)(_v238.HStack, {
            w: "100%",
            marginY: "lg",
            children: [(0, _v1.jsx)(_v248, {
              w: (0, _v9.rem)(100)
            }), (0, _v1.jsx)(_v248, {
              w: (0, _v9.rem)(32)
            }), (0, _v1.jsx)(_v248, {
              w: (0, _v9.rem)(32)
            }), (0, _v1.jsx)(_v248, {
              w: (0, _v9.rem)(32)
            })]
          })]
        })
      });
    },
    _v248 = _v0 => {
      let _v1 = (0, _v240.useStyleConfig)("Skeleton", {
        variant: "text"
      });
      return _v1.background = "linear-gradient(282.43deg, rgba(23, 213, 255, 0.733333) 0%, #17D5FF 25%, #9E00FF 50%, #743ED9 75%, rgba(23, 213, 255, 0.733333) 100%);", _v1.animationDuration = "5s", (0, _v1.jsx)(_v241.LightMode, {
        children: (0, _v1.jsx)(_v161.Skeleton, {
          __css: _v1,
          ..._v0
        })
      });
    },
    _v249 = ({
      tooltipLabel: _v0,
      showHover: _v1 = !0,
      ..._v2
    }) => (0, _v1.jsx)(_v162.Tooltip, {
      label: _v0,
      placement: "top",
      isDisabled: !_v1,
      children: (0, _v1.jsx)(_v159.Button, {
        as: "a",
        variant: "tertiary",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: "sm",
        pr: "md",
        gap: (0, _v9.rem)(12),
        borderRadius: "md",
        textDecoration: "none",
        cursor: "pointer",
        height: "unset",
        whiteSpace: "unset",
        ..._v2
      })
    });
  var _v250 = _v0.i(0);
  let _v251 = ({
      quotes: _v0,
      videoUrl: _v1,
      isExpanded: _v2,
      showAnimation: _v3,
      handleExpand: _v4
    }) => {
      let _v5 = (0, _v25.useBreakpointValue)({
          base: !0,
          md: !1
        }, {
          fallback: "md"
        }),
        {
          sendSelectAiSearch: _v6
        } = _v234();
      if (!_v0) return null;
      let _v7 = Array.isArray(_v0) ? _v0 : [_v0],
        _v8 = _v7[1]?.thumbnailUrl ?? "",
        _v9 = _v7.length,
        _v10 = _v7[0];
      return (0, _v1.jsx)(_v155.Box, {
        children: _v2 || 1 === _v9 ? (0, _v1.jsx)(_v155.Box, {
          children: _v7.map(({
            quote: _v0,
            timecode: _v1,
            thumbnailUrl: _v2
          }, _v3) => (0, _v1.jsxs)(_v249, {
            href: `${_v1}?tq=#t=${_v1}`,
            tooltipLabel: _v79.GO_TO_MOMENT,
            animation: 1 === _v3 ? `${_v257} .5s ease-in` : void 0,
            paddingX: _v5 ? "0" : "sm",
            showHover: !_v5,
            onClick: () => _v6("moment", _v1),
            onContextMenu: () => _v6("moment", _v1),
            children: [(0, _v1.jsxs)(_v8.Flex, {
              alignItems: "center",
              gap: (0, _v9.rem)(12),
              children: [(0, _v1.jsx)(_v252, {
                src: _v2 ?? ""
              }), (0, _v1.jsx)(_v250.Paragraph, {
                variant: "body-md",
                noOfLines: 2,
                height: "fit-content",
                children: _v0
              })]
            }), (0, _v1.jsx)(_v254, {
              children: (0, _v169.secondsToDisplay)(_v1)
            })]
          }, _v1))
        }) : (0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          justifyContent: "start",
          p: "sm",
          pr: "md",
          gap: "md",
          onClick: _v4,
          cursor: "pointer",
          children: [(0, _v1.jsxs)(_v253, {
            secondThumbnail: _v8,
            showAnimation: _v3,
            children: [(0, _v1.jsx)(_v255, {
              children: _v9
            }), (0, _v1.jsx)(_v252, {
              src: _v10.thumbnailUrl ?? ""
            })]
          }), (0, _v1.jsx)(_v250.Paragraph, {
            variant: "body-md",
            noOfLines: 2,
            width: "100%",
            children: _v10.quote
          })]
        })
      });
    },
    _v252 = _v0 => (0, _v1.jsx)(_v155.Box, {
      as: "img",
      width: (0, _v9.rem)(100),
      position: "relative",
      aspectRatio: "16/9",
      flexShrink: "0",
      borderRadius: "sm",
      border: "0.7px solid",
      borderColor: "stroke",
      ..._v0
    }),
    _v253 = _v0 => (0, _v1.jsx)(_v155.Box, {
      position: "relative",
      _before: {
        content: '""',
        position: "absolute ",
        width: (0, _v9.rem)(100),
        height: "100%",
        border: "1px solid",
        borderColor: "stroke",
        opacity: "60%",
        top: "-5%",
        transform: "rotate(4deg)",
        borderRadius: "sm",
        bgImage: `url(${_v0.secondThumbnail})`,
        animation: _v0.showAnimation ? `${_v256} 300ms ease-in 0s` : void 0
      },
      ..._v0
    }),
    _v254 = _v0 => (0, _v1.jsx)(_v155.Box, {
      backgroundColor: "fill-component",
      display: "flex",
      height: (0, _v9.rem)(24),
      blur: "md",
      padding: "xs",
      alignItems: "center",
      borderRadius: "xs",
      ..._v0
    }),
    _v255 = _v0 => (0, _v1.jsx)(_v243.Badge, {
      position: "absolute",
      size: "xs",
      variant: "neutral",
      right: (0, _v9.rem)(4),
      top: (0, _v9.rem)(4),
      height: (0, _v9.rem)(14),
      width: (0, _v9.rem)(14),
      background: "rgba(61, 71, 81, 0.64)",
      border: "none",
      ..._v0
    }),
    _v256 = (0, _v27.keyframes)({
      "0%": {
        opacity: "0"
      },
      "75%": {
        opacity: "0"
      },
      "100%": {
        opacity: "60%"
      }
    }),
    _v257 = (0, _v27.keyframes)({
      "0%": {
        opacity: "0"
      },
      "50%": {
        opacity: "50%"
      },
      "100%": {
        opacity: "100%"
      }
    });
  async function _v258({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v218.measureLatency)("getUserQuestions", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/questions?${(0, _v219.searchQueryString)(_v3)}&fields=${_v1.map(_v219.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v219.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v219.deepCamelCase)(_v1);
    });
  }
  function _v259(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v189.useGctlConfig)();
    return (0, _v221.default)(_v2 ? `/users/${_v2.where.userId}/questions${(0, _v223.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v258({
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
  "true" === _v217.default.env.STORYBOOK && (0, _v223.assignMswData)(_v259, {
    endpoint: "/users/:userId/questions",
    method: "GET"
  }), "true" === _v217.default.env.STORYBOOK && (0, _v223.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v222.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v189.useGctlConfig)(),
      [_v5, _v6] = (0, _v223.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/questions${(0, _v223.serializeQuery)(_v0)}`, _v258({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/questions",
    method: "GET"
  });
  let _v260 = () => {
      let [_v0, _v1] = (0, _v3.useState)(!1),
        [_v2, _v3] = (0, _v3.useState)(!1),
        {
          showAnimation: _v4,
          setShowAnimation: _v5
        } = (0, _v3.useContext)(_v153),
        {
          gridColumns: _v6
        } = _v188(),
        _v7 = (0, _v25.useBreakpointValue)({
          base: !0,
          md: !1
        }, {
          fallback: "md"
        }),
        {
          query: _v8
        } = _v186(),
        {
          sendViewAiSearch: _v9,
          sendSelectAiSearch: _v10
        } = _v234(),
        {
          data: _v11,
          error: _v12,
          isLoading: _v13,
          isValidating: _v14
        } = (_v0 => {
          let _v1 = (0, _v14.useViewer)(),
            {
              data: _v2,
              error: _v3,
              isLoading: _v4,
              isValidating: _v5
            } = _v259(() => _v1?.user ? {
              select: ["question.question", "question.answer", "question.relevantQuotes", "question.relatedQuestions", "metadata.connections.video.name", "metadata.connections.video.link", "metadata.connections.video.pictures"],
              where: {
                userId: _v1?.teamUser?.ownerId || _v1?.user.id
              },
              query: {
                query: _v0
              }
            } : null, {
              revalidateOnFocus: !1,
              revalidateIfStale: !1
            });
          return {
            data: _v2?.data?.[0],
            error: _v3,
            isLoading: _v4,
            isValidating: _v5
          };
        })(_v8),
        _v15 = _v11?.question?.relevantQuotes?.length || 0,
        _v16 = _v7 && !_v0,
        _v17 = _v11?.metadata.connections.video.link || "";
      (0, _v3.useEffect)(() => {
        _v14 && _v5(!0);
      }, [_v14, _v5]), (0, _v3.useEffect)(() => _v1(!1), [_v8]), (0, _v3.useEffect)(() => {
        _v13 || _v9(_v17, _v12?.message);
      }, [_v13]);
      let _v18 = (0, _v3.useCallback)(_v0 => {
        _v0 && _v3(_v0?.scrollHeight > _v0.offsetHeight);
      }, []);
      return _v13 ? (0, _v1.jsx)(_v247, {}) : _v11 ? (0, _v1.jsx)(_v246, {
        copy: _v79.AI_OVERVIEW,
        videoLink: _v17,
        children: (0, _v1.jsx)(_v160.PanelBody, {
          paddingX: {
            base: "md",
            md: "lg"
          },
          pb: {
            base: "md",
            md: "lg"
          },
          pt: "0",
          children: (0, _v1.jsxs)(_v156.Grid, {
            gridTemplateColumns: _v6,
            rowGap: "sm",
            children: [(0, _v1.jsx)(_v237, {
              onAnimationEnd: () => _v5(!1),
              showAnimation: _v4,
              children: (0, _v1.jsx)(_v157.Text, {
                ref: _v18,
                variant: "body-md",
                lineHeight: "1.4",
                maxHeight: _v0 ? "100%" : (0, _v9.rem)(60),
                noOfLines: _v0 ? void 0 : 3,
                whiteSpace: "normal",
                textOverflow: "ellipses",
                position: "relative",
                children: _v11?.question?.answer || ""
              })
            }), !_v16 && (0, _v1.jsx)(_v208.GridItem, {
              animation: _v4 ? _v43 : void 0,
              gridColumn: {
                base: "1/5",
                md: "4/7"
              },
              paddingLeft: {
                base: "0",
                md: "md"
              },
              children: (0, _v1.jsx)(_v251, {
                quotes: _v11.question.relevantQuotes,
                videoUrl: _v17,
                isExpanded: _v0,
                showAnimation: _v4,
                handleExpand: () => _v1(!0)
              })
            }), (0, _v1.jsx)(_v208.GridItem, {
              display: "flex",
              gap: "sm",
              animation: _v4 ? _v43 : void 0,
              opacity: "1",
              gridColumn: {
                base: "1/3",
                md: "1/1"
              },
              paddingTop: "sm",
              children: (0, _v1.jsx)(_v236, {
                isExpanded: _v0,
                displayShowMore: _v2 || _v15 > 1,
                handleToggle: () => _v1(!_v0),
                videoLink: _v17
              })
            }), _v11?.question.relevantQuotes?.length && (0, _v1.jsx)(_v208.GridItem, {
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              color: "text-secondary",
              fontSize: "body-md",
              pl: {
                base: "0",
                md: (0, _v9.rem)(24)
              },
              gap: "sm",
              animation: _v4 ? _v43 : void 0,
              gridColumn: {
                base: "1/4",
                md: "4/7"
              },
              gridRow: "2",
              children: _v79.momentsInVideo(_v11?.question.relevantQuotes?.length, (0, _v1.jsxs)(_v249, {
                href: _v17,
                tooltipLabel: _v79.GO_TO_VIDEO,
                pr: "sm",
                pl: "xs",
                height: {
                  base: (0, _v9.rem)(40),
                  md: (0, _v9.rem)(32)
                },
                gap: (0, _v9.rem)(6),
                borderRadius: "sm",
                whiteSpace: "nowrap",
                overflow: "hidden",
                showHover: !_v7,
                onClick: () => _v10("video", _v17),
                onContextMenu: () => _v10("video", _v17),
                children: [(0, _v1.jsx)(_v261, {
                  src: _v11?.metadata.connections.video?.pictures?.sizes[1].link ?? "",
                  alt: "video thumbnail"
                }), (0, _v1.jsx)(_v155.Box, {
                  fontSize: "heading-xs",
                  color: "text-primary",
                  fontWeight: "medium",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  children: _v11?.metadata.connections.video.name
                })]
              }))
            })]
          })
        })
      }) : (0, _v1.jsx)(_v246, {
        copy: _v79.NO_AI_RESULTS,
        paddingY: "md",
        variant: "body-md"
      });
    },
    _v261 = _v0 => (0, _v1.jsx)(_v155.Box, {
      as: "img",
      width: (0, _v9.rem)(30),
      height: (0, _v9.rem)(20),
      border: "1px solid",
      borderColor: "stroke",
      flexShrink: "0",
      borderRadius: "xs",
      ..._v0
    }),
    _v262 = () => {
      let {
          query: _v0
        } = _v186(),
        {
          hasAiSearch: _v1
        } = _v67();
      return _v1 && _v144(_v0) ? (0, _v1.jsx)(_v260, {}) : (0, _v1.jsx)(_v1.Fragment, {});
    };
  var _v263 = _v0.i(0),
    _v264 = _v0.i(0),
    _v265 = _v0.i(0),
    _v266 = _v0.i(0),
    _v267 = _v0.i(0),
    _v268 = _v0.i(0),
    _v269 = _v0.i(0),
    _v270 = _v0.i(0),
    _v271 = _v0.i(0),
    _v272 = _v0.i(0);
  let _v273 = ({
      onClose: _v0,
      redirectUrl: _v1
    }) => (0, _v1.jsxs)(_v172.Modal, {
      isOpen: !0,
      onClose: _v0,
      children: [(0, _v1.jsx)(_v178.ModalOverlay, {}), (0, _v1.jsxs)(_v175.ModalContent, {
        width: (0, _v9.rem)(592),
        maxW: "unset",
        children: [(0, _v1.jsx)(_v174.ModalCloseButton, {}), (0, _v1.jsx)(_v272.AuthModal, {
          authType: "login",
          redirectUrl: _v1,
          minH: "unset",
          background: "unset",
          disableDismiss: !0
        })]
      })]
    }),
    _v274 = (0, _v3.createContext)({}),
    _v275 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        [_v2, _v3] = (0, _v3.useState)(!1),
        [_v4, _v5] = (0, _v3.useState)(),
        [_v6, _v7] = (0, _v3.useState)();
      return (0, _v1.jsxs)(_v274.Provider, {
        value: {
          isOpen: _v2,
          openAuthModal: (_v0, _v1) => {
            _v0 && _v5(_v0), _v1 && _v7(_v1), _v3(!0);
          }
        },
        children: [_v2 && (0, _v1.jsx)(_v273, {
          onClose: () => {
            _v3(!1), _v6 && _v129(_v1, _v6);
          },
          redirectUrl: _v4
        }), _v0]
      });
    },
    _v276 = [{
      text: _v79.PUBLIC,
      untranslatedText: "Vimeo"
    }, {
      text: _v79.LIBRARY,
      untranslatedText: "Library"
    }],
    _v277 = () => {
      let {
          searchType: _v0,
          toggleSearchType: _v1
        } = (0, _v3.useContext)(_v151),
        _v2 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          openAuthModal: _v3
        } = (0, _v3.useContext)(_v274),
        {
          panelStatus: _v4,
          togglePanel: _v5
        } = (0, _v3.useContext)(_v60),
        {
          sendModeSwitchEvent: _v6
        } = _v234();
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
        children: (0, _v1.jsx)(_v269.Tabs, {
          index: +(_v0 !== _v149),
          onChange: _v0 => {
            _v6({
              copy: _v276[_v0].untranslatedText
            }), _v2?.user ? (_v4 === _v32 && _v5(), _v1()) : _v3();
          },
          width: "100%",
          size: "sm",
          children: (0, _v1.jsxs)(_v267.TabList, {
            children: [(0, _v1.jsxs)(_v268.Tab, {
              "data-testId": "vimeo-tab",
              children: [(0, _v1.jsx)(_v270.Globe, {
                boxSize: (0, _v9.rem)(20)
              }), (0, _v1.jsx)(_v157.Text, {
                variant: "heading-xs",
                marginLeft: (0, _v9.rem)(6),
                children: _v276[0].text
              })]
            }, _v276[0].text), (0, _v1.jsxs)(_v268.Tab, {
              "data-testId": "library-tab",
              children: [(0, _v1.jsx)(_v271.MyLibrary, {
                boxSize: (0, _v9.rem)(20)
              }), (0, _v1.jsx)(_v157.Text, {
                variant: "heading-xs",
                marginLeft: (0, _v9.rem)(6),
                children: _v276[1].text
              })]
            }, _v276[1].text), (0, _v1.jsx)(_v269.TabIndicator, {})]
          })
        })
      });
    };
  var _v278 = _v0.i(0),
    _v279 = _v0.i(0);
  let _v280 = _v0 => {
    let {
      isActive: _v1,
      sortDirection: _v2
    } = _v0;
    return _v1 && _v2 ? "asc" === _v2 ? (0, _v1.jsx)(_v279.ArrowUp, {}) : (0, _v1.jsx)(_v278.ArrowDown, {}) : null;
  };
  var _v281 = _v0.i(0),
    _v282 = _v0.i(0),
    _v283 = _v0.i(0);
  let _v284 = _v0 => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        _v3 = (0, _v3.useRef)(null);
      return (0, _v3.useEffect)(() => {
        let _v0 = new IntersectionObserver(([_v0]) => {
            _v2(_v0.isIntersecting);
          }, _v0),
          _v1 = _v3.current;
        return _v1 && _v0.observe(_v1), () => {
          _v1 && _v0.unobserve(_v1);
        };
      }, [_v3, _v0]), [_v3, _v1];
    },
    _v285 = ({
      showLoader: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)("none"),
        _v3 = (0, _v3.useRef)(null),
        {
          sendFilterEvent: _v4
        } = _v234(),
        {
          trackAgenticSearchButtonClicked: _v5
        } = (0, _v12.useSearchTracking)(),
        {
          type: _v6,
          onLibraryFilterChange: _v7,
          query: _v8
        } = _v186(),
        {
          type: _v9,
          onFilterChange: _v10
        } = _v216(),
        {
          hasReframeOverride: _v11,
          hasAgenticSearch: _v12
        } = _v67(),
        {
          libraryResultCount: _v13
        } = (() => {
          let _v0 = (0, _v2.useRouter)(),
            _v1 = (0, _v3.useContext)(_v66.ViewerContext),
            {
              searchType: _v2
            } = (0, _v3.useContext)(_v151),
            [_v3, _v4] = (0, _v3.useState)({
              default: 0,
              video: 0,
              folder: 0,
              showcase: 0,
              live_event: 0
            }),
            {
              query: _v5,
              type: _v6
            } = _v186(),
            {
              data: _v7,
              isLoading: _v8
            } = _v229(),
            {
              hasAutoClosedCaptions: _v9
            } = _v67(),
            _v10 = _v2 === _v148,
            {
              data: _v11,
              error: _v12,
              isLoading: _v13
            } = (0, _v228.useGetUserItems)(() => _v0.isReady && _v1?.user && _v10 ? {
              query: {
                perPage: 1,
                filter: "folder,video,showcase,live_event",
                query: _v5,
                queryFields: _v143(_v9),
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
            });
          return (0, _v3.useEffect)(() => {
            let _v0,
              _v1 = _v145(_v11?.meta?.facets?.facetType),
              _v2 = _v145(_v7?.meta?.facets?.facetType);
            (_v0 = _v6 ? {
              ..._v1,
              ..._v2
            } : {
              ...Object.fromEntries(Object.keys(_v1).map(_v0 => [_v0, 0])),
              ..._v2
            }).default = Object.entries(_v0).filter(([_v0]) => "default" !== _v0).reduce((_v0, [, _v1]) => _v0 + _v1, 0), _v4(_v0);
          }, [_v11, _v7]), {
            libraryResultCount: _v3,
            error: _v12,
            isLoading: _v8 && _v13
          };
        })(),
        {
          publicResultCount: _v14
        } = _v227(),
        {
          data: _v15
        } = _v229(),
        {
          searchType: _v16,
          isAgenticSearch: _v17,
          setIsAgenticSearch: _v18,
          searchId: _v19
        } = (0, _v3.useContext)(_v151),
        _v20 = (0, _v14.useViewer)(),
        _v21 = (0, _v25.useBreakpointValue)({
          base: !0,
          sm: !1
        }),
        _v22 = _v16 === _v148,
        [_v23, _v24] = _v284({
          threshold: 1
        }),
        [_v25, _v26] = _v284({
          threshold: 1
        }),
        {
          options: _v27,
          nameCopy: _v28,
          untranslatedCopy: _v29
        } = _v22 ? _v97 : _v85,
        _v30 = Object.keys(_v27),
        _v31 = _v22 ? _v7 : _v10,
        _v32 = _v22 ? _v6 : _v9,
        _v33 = _v22 ? _v13 : _v14,
        _v34 = !_v15?.data || _v15?.data.length === 0,
        _v35 = _v11 && _v144(_v8) && _v34,
        _v36 = _v32 ? _v27[_v32].value : _v27?.default?.value,
        _v37 = _v0 => {
          _v3.current && (_v3.current.scrollLeft += _v0);
        };
      return (0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        gap: "sm",
        children: [(0, _v1.jsx)(_v155.Box, {
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
            children: [!_v24 && !_v21 && (0, _v1.jsx)(_v286, {
              onClick: () => _v37(-150),
              icon: (0, _v1.jsx)(_v283.ChevronLeftSmall, {}),
              display: _v1,
              "aria-label": "left-scroll-button"
            }), (0, _v1.jsx)(_v287, {
              background: _v288.leftLight,
              _dark: {
                background: _v288.leftDark
              },
              display: _v24 ? "none" : "block"
            }), _v30.map((_v0, _v1) => {
              let _v2 = _v27[_v0].value,
                _v3 = _v33?.[_v2] || 0,
                _v4 = !_v17 && _v2 === _v36;
              return (0, _v1.jsxs)(_v159.Button, {
                ref: 0 === _v1 ? _v23 : _v1 === _v30.length - 1 ? _v25 : void 0,
                onClick: () => {
                  _v17 && _v18(!1), _v4({
                    copy: _v27[_v0].untranslatedText ?? _v27[_v0].text,
                    value: [_v2],
                    valueName: _v29 ?? _v28,
                    previousValue: [_v36]
                  }), _v31("type", _v27[_v0].value);
                },
                size: "sm",
                variant: "secondary",
                isActive: _v4,
                children: [_v27[_v0].text, (0, _v1.jsx)(_v157.Text, {
                  variant: "body-md",
                  color: _v4 ? "text-primary" : "text-secondary",
                  children: _v0 || _v35 || _v17 ? "" : ` ${((_v0, _v1 = "en-US") => _v0 <= 0 ? (0, _v75.formatNumber)({
                    value: _v0,
                    locale: _v1
                  }) : (0, _v75.formatNumber)({
                    value: _v0,
                    locale: _v1,
                    notation: "compact",
                    maximumSignificantDigits: 3,
                    minimumSignificantDigits: 3
                  }))(_v3, _v20?.locale)}`
                })]
              }, _v1);
            }), (0, _v1.jsx)(_v287, {
              background: _v288.rightLight,
              right: "0",
              _dark: {
                background: _v288.rightDark
              },
              display: _v26 ? "none" : "block"
            }), !_v26 && !_v21 && (0, _v1.jsx)(_v286, {
              right: "0",
              onClick: () => _v37(150),
              icon: (0, _v1.jsx)(_v282.ChevronRightSmall, {}),
              display: _v1,
              "aria-label": "right-scroll-button"
            })]
          })
        }), _v22 && _v12 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v155.Box, {
            height: (0, _v9.rem)(24),
            width: "1px",
            backgroundColor: "stroke",
            flexShrink: 0
          }), (0, _v1.jsx)(_v159.Button, {
            size: "sm",
            flexShrink: 0,
            onClick: () => {
              _v5({
                searchId: _v19,
                newState: !_v17
              }), _v18(!_v17);
            },
            "data-testid": "agentic-search-button",
            "aria-pressed": _v17,
            variant: _v17 ? "secondary" : void 0,
            leftIcon: _v17 ? (0, _v1.jsx)(_v281.ArrowLeft, {
              boxSize: "xs"
            }) : (0, _v1.jsx)(_v167.SearchMagnifier, {
              boxSize: "xs"
            }),
            color: _v17 ? void 0 : "white",
            border: _v17 ? void 0 : "none",
            sx: _v17 ? void 0 : {
              background: "linear-gradient(90deg, #3B86FF 0%, #A77BFF 100%)",
              boxShadow: "0 0 0 2px var(--vimeo-colors-lightBlueAlpha-500), 0 2px 14px rgba(124, 92, 246, 0.45)",
              "& svg": {
                color: "white"
              },
              _hover: {
                background: "linear-gradient(90deg, #4E92FF 0%, #B488FF 100%)"
              }
            },
            children: _v17 ? _v79.AI_SEARCH_BACK : _v79.AI_SEARCH_TRY
          })]
        })]
      });
    },
    _v286 = _v0 => {
      let {
        onClick: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v171.IconButton, {
        position: "absolute",
        size: "sm",
        onClick: _v1,
        variant: "primary",
        ..._v2
      });
    },
    _v287 = _v0 => {
      let {
        display: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v155.Box, {
        height: (0, _v9.rem)(32),
        width: (0, _v9.rem)(60),
        position: "absolute",
        pointerEvents: "none",
        display: _v1,
        ..._v2
      });
    },
    _v288 = {
      leftLight: "linear-gradient(90deg, #F4F6F8 0%, rgba(244, 246, 248, 0) 100%)",
      leftDark: "linear-gradient(90deg, #0E1216 0%, rgba(14, 18, 22, 0) 100%)",
      rightLight: "linear-gradient(90deg, rgba(244, 246, 248, 0) 0%, #F4F6F8 100%)",
      rightDark: "linear-gradient(90deg, rgba(14, 18, 22, 0) 0%, #0E1216 100%)"
    },
    _v289 = () => {
      (0, _v3.useContext)(_v66.ViewerContext);
      let {
          hasPublicSearchDisabled: _v0
        } = _v67(),
        {
          type: _v1 = _v85.options.clip.value,
          sort: _v2,
          appliedFiltersCount: _v3
        } = _v216(),
        {
          sort: _v4,
          appliedFiltersCount: _v5
        } = _v186(),
        {
          data: _v6,
          isLoading: _v7
        } = _v227(),
        {
          data: _v8,
          isLoading: _v9
        } = _v229(),
        {
          panelStatus: _v10,
          togglePanel: _v11
        } = (0, _v3.useContext)(_v60),
        {
          searchType: _v12,
          isAgenticSearch: _v13
        } = (0, _v3.useContext)(_v151),
        _v14 = _v12 === _v148,
        _v15 = _v14 ? _v5 : _v3,
        _v16 = _v15 > 0,
        _v17 = !_v0,
        [_v18, _v19] = _v136(_v4),
        [_v20, _v21] = _v136(_v2);
      _v14 ? _v8?.total : _v6?.total;
      let _v22 = _v14 ? _v9 || !_v8 : _v7 || !_v6;
      return (0, _v1.jsxs)(_v156.Grid, {
        templateColumns: "repeat(3, minmax(auto, max-content))",
        templateRows: {
          base: "repeat(2, max-content)",
          lg: "initial"
        },
        rowGap: _v17 ? {
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
        children: [_v17 && (0, _v1.jsx)(_v277, {}), (0, _v1.jsx)(_v155.Box, {
          gridArea: {
            base: _v17 ? "2/1" : "1/2",
            md: "2/1",
            lg: "1/2"
          },
          children: (0, _v1.jsx)(_v285, {
            showLoader: _v22
          })
        }), (0, _v1.jsxs)(_v8.Flex, {
          gap: "sm",
          width: "100%",
          justifyContent: {
            base: "space-between",
            sm: "flex-end"
          },
          alignItems: "center",
          gridArea: {
            base: "3/1/3/5",
            sm: "2/4",
            lg: "1/4"
          },
          children: [(0, _v1.jsx)(_v159.Button, {
            size: "sm",
            variant: "tertiary",
            display: {
              base: "inherit",
              sm: "none"
            },
            marginLeft: (0, _v9.rem)(-8),
            _hover: {
              background: "transparent !important"
            },
            rightIcon: (0, _v1.jsx)(_v280, {
              isActive: _v18 === _v39 || _v20 === _v39,
              sortDirection: _v19 || _v21
            }),
            children: _v79.TITLE
          }), (0, _v1.jsx)(_v8.Flex, {
            marginLeft: {
              base: "0",
              sm: "md"
            },
            alignItems: "center",
            children: !_v13 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v290, {
                onClick: () => _v11(_v57),
                rightIcon: (0, _v1.jsx)(_v266.SortSmall, {}),
                isActive: _v10 === _v57,
                dataTestId: "sort-button",
                children: (() => {
                  let _v0 = _v14 ? _v4 : _v2;
                  if (!_v0) return _v104.relevance.text;
                  {
                    let _v0 = _v14 ? _v120 : _v119[_v1],
                      _v1 = Object.keys(_v0).find(_v0 => _v0[_v0].value === _v0);
                    return _v0[_v1].text;
                  }
                })()
              }), (0, _v1.jsx)(_v290, {
                onClick: () => _v11(_v56),
                rightIcon: (0, _v1.jsx)(_v265.Filter, {}),
                isActive: _v10 === _v56,
                isApplied: _v16,
                dataTestId: "filter-button",
                children: _v16 ? _v79.filtersCount(_v15) : _v79.FILTERS
              })]
            })
          })]
        })]
      });
    },
    _v290 = _v0 => {
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
      return (0, _v1.jsx)(_v264.Menu, {
        isLazy: !0,
        children: (0, _v1.jsx)(_v263.MenuButton, {
          as: _v159.Button,
          size: "sm",
          rightIcon: _v3,
          "data-testid": _v5,
          ..._v7,
          children: _v2
        })
      });
    };
  var _v291 = _v0.i(0),
    _v292 = _v0.i(0),
    _v293 = _v0.i(0),
    _v294 = _v0.i(0),
    _v295 = _v0.i(0);
  let _v296 = () => {
      let {
        sendNotificationView: _v0
      } = _v234();
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
        children: [(0, _v1.jsx)(_v295.CircleExclamation, {
          boxSize: {
            base: "xl",
            sm: "2xl"
          }
        }), (0, _v1.jsx)(_v157.Text, {
          variant: {
            base: "heading-lg",
            sm: "heading-xl"
          },
          children: _v79.UNABLE_LOAD_RESULTS
        }), (0, _v1.jsx)(_v157.Text, {
          variant: "body-lg",
          children: (0, _v1.jsx)(_v297, {})
        })]
      });
    },
    _v297 = () => {
      let {
        sendNotificationAction: _v0
      } = _v234();
      return (0, _v77.translate)({
        singular: "Refresh to try again or {STYLE}contact support{/STYLE}",
        replacements: {
          STYLE: _v0 => (0, _v1.jsx)(_v294.Link, {
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
  var _v298 = _v0.i(0);
  let _v299 = ({
    scrollContainer: _v0,
    page: _v1,
    pageSize: _v2,
    updatePage: _v3,
    data: _v4
  }) => {
    let [_v5, _v6] = (0, _v3.useState)(void 0),
      _v7 = (0, _v25.useBreakpointValue)({
        base: "sm",
        md: "md"
      });
    return ((0, _v3.useEffect)(() => {
      _v4?.total ? _v6(_v4.total) : 1 === _v1 && _v6(void 0);
    }, [_v4, _v1]), !_v5 || _v5 <= _v2) ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v8.Flex, {
      w: "100%",
      justifyContent: "center",
      children: (0, _v1.jsx)(_v298.PaginationRoot, {
        page: _v1,
        count: _v5,
        pageSize: _v2,
        siblingCount: 2,
        onPageChange: _v0 => {
          _v3(_v0.page), _v0?.scrollTo(0, 0);
        },
        size: _v7,
        children: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v298.PaginationPrevTrigger, {}), _v0.pages.map((_v0, _v1) => {
            let _v2 = Math.min(_v0.totalPages - 2, _v1) - 3,
              _v3 = Math.max(_v1, 3) + 3;
            return "page" === _v0.type && (_v0.value === _v1 || _v0.value > _v2 && _v0.value < _v3) ? (0, _v1.jsx)(_v298.PaginationItem, {
              ..._v0
            }, _v1) : null;
          }), (0, _v1.jsx)(_v298.PaginationNextTrigger, {})]
        })
      })
    });
  };
  var _v300 = _v0.i(0),
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
    _v314 = _v0.i(0),
    _v315 = _v0.i(0),
    _v316 = _v0.i(0),
    _v317 = _v0.i(0);
  let _v318 = "vimeo.click",
    _v319 = "general",
    _v320 = "click",
    _v321 = "showcases",
    _v322 = "search_result_page",
    _v323 = "showcase_list",
    _v324 = () => _v293.BigPictureClient.sendEvent(new _v293.Event("vimeo.click", 129, {
      name: "start_free_live_demo",
      feature: "search",
      location: "empty_state",
      page: "search_result_page",
      type: "upsell",
      target: null,
      copy: "Start free demo",
      click_type: null,
      device_type: null,
      path: window.location.pathname,
      target_path: null,
      third_party_integration: null
    }));
  var _v325 = _v0.i(0),
    _v326 = _v0.i(0),
    _v327 = _v0.i(0),
    _v328 = _v0.i(0),
    _v329 = _v0.i(0);
  async function _v330({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v218.measureLatency)("getVideoMoments", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/moments?${(0, _v219.searchQueryString)(_v3)}&fields=${_v1.map(_v219.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v219.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v219.deepCamelCase)(_v1);
    });
  }
  var _v331 = _v0.i(0);
  function _v332(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v189.useGctlConfig)();
    return (0, _v221.default)(_v2 ? `/videos/${_v2.where.videoId}/moments${(0, _v223.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v330({
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
  "true" === _v217.default.env.STORYBOOK && (0, _v223.assignMswData)(_v332, {
    endpoint: "/videos/:videoId/moments",
    method: "GET"
  }), "true" === _v217.default.env.STORYBOOK && (0, _v223.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v222.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v189.useGctlConfig)(),
      [_v5, _v6] = (0, _v223.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/moments${(0, _v223.serializeQuery)(_v0)}`, _v330({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/videos/:videoId/moments",
    method: "GET"
  }), "true" === _v217.default.env.STORYBOOK && (0, _v223.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v189.useGctlConfig)();
    return (0, _v331.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/videos/${_v2.where.videoId}/moments?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v330({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/videos/:videoId/moments",
    method: "GET"
  });
  var _v333 = _v0.i(0),
    _v334 = _v0.i(0);
  let _v335 = (0, _v3.forwardRef)(({
      onClose: _v0,
      moments: _v1,
      videoLink: _v2,
      videoId: _v3,
      position: _v4
    }, _v5) => {
      let {
          query: _v6 = ""
        } = _v186(),
        {
          sendMomentClickEvent: _v7
        } = _v234(),
        _v8 = (0, _v3.useContext)(_v66.ViewerContext),
        _v9 = (0, _v316.useTheme)(),
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
      return (0, _v1.jsxs)(_v336, {
        ref: _v5,
        children: [(0, _v1.jsxs)(_v337, {
          children: [(0, _v1.jsx)("span", {
            children: _v14 > 100 ? (0, _v77.translate)({
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
            }) : (0, _v77.translate)({
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
          }), (0, _v1.jsx)(_v171.IconButton, {
            "aria-label": "close moments popover",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v333.ChevronUpSmall, {
              boxSize: "xs"
            }),
            size: "sm",
            onClick: _v0
          })]
        }), (0, _v1.jsx)(_v338, {
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
            let _v5 = _v138(_v3) || _v6;
            return (0, _v1.jsxs)(_v339, {
              "data-id": _v0,
              href: _v137(_v2, _v4, _v5, _v11),
              onClick: _v15,
              children: [(0, _v1.jsx)(_v340, {
                src: _v1?.url,
                alt: "moment thumbnail"
              }), (0, _v1.jsx)(_v341, {
                children: (0, _v169.secondsToDisplay)(Math.floor(_v4 / 0))
              }), (0, _v1.jsx)(_v250.Paragraph, {
                size: "sm",
                margin: "0",
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                sx: {
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": "2"
                },
                children: (0, _v1.jsx)(_v315.Highlight, {
                  query: _v5,
                  styles: {
                    fontFamily: _v10,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v139(_v2, _v5)
                })
              })]
            }, _v0);
          })
        }), _v14 > 4 && (0, _v1.jsx)(_v155.Box, {
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "lg",
          paddingY: "md",
          children: (0, _v1.jsx)(_v159.Button, {
            variant: "secondary",
            rightIcon: (0, _v1.jsx)(_v334.ArrowRight, {
              boxSize: "2xs"
            }),
            size: "md",
            as: "a",
            href: _v137(_v2, _v13[0].startTime, _v6, _v11),
            onClick: _v15,
            children: _v14 > 10 ? (0, _v77.translate)({
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
            }) : (0, _v77.translate)({
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
    _v336 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      flexDirection: "column",
      width: (0, _v9.rem)(432),
      padding: `${(0, _v9.rem)(8)} 0 0 ${(0, _v9.rem)(16)}`,
      ..._v0
    }),
    _v337 = _v0 => (0, _v1.jsx)(_v8.Flex, {
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
    _v338 = (0, _v3.forwardRef)(({
      hasOverflow: _v0,
      isWindowHeightSmall: _v1,
      ..._v2
    }, _v3) => (0, _v1.jsx)(_v155.Box, {
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
    _v339 = _v0 => (0, _v1.jsx)(_v159.Button, {
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
    _v340 = _v0 => (0, _v1.jsx)(_v155.Box, {
      as: "img",
      width: (0, _v9.rem)(80),
      height: (0, _v9.rem)(49.6),
      flexShrink: "0",
      borderRadius: "sm",
      ..._v0
    }),
    _v341 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      color: "text-primary",
      backgroundColor: "fill-component",
      height: (0, _v9.rem)(24),
      blur: "md",
      padding: "xs",
      alignItems: "center",
      borderRadius: "xs",
      ..._v0
    });
  function _v342({
    videoId: _v0,
    videoLink: _v1,
    position: _v2,
    handleNoMoments: _v3
  }) {
    let {
        query: _v4
      } = _v186(),
      [_v5, _v6] = (0, _v3.useState)(!1),
      [_v7, _v8] = _v284({
        threshold: 1
      }),
      _v9 = (0, _v3.useRef)(null),
      {
        data: _v10,
        isLoading: _v11,
        error: _v12
      } = _v332({
        select: _v54,
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
    (0, _v328.useOutsideClick)({
      ref: _v9,
      handler: () => _v6(!1)
    });
    let _v15 = _v10?.data?.slice(0, 1)[0]?.thumbnail?.url;
    if (_v11 || !_v10 || 0 === _v10.data.length) return null;
    let _v16 = _v10.data.length < 3 ? _v10?.data.length - 1 : 2;
    return (0, _v1.jsxs)(_v325.Popover, {
      placement: _v14,
      isOpen: _v5,
      offset: [0, -25],
      flip: !1,
      strategy: "fixed",
      children: [(0, _v1.jsx)(_v327.PopoverTrigger, {
        children: (0, _v1.jsx)(_v159.Button, {
          ref: _v7,
          onClick: _v0 => {
            _v13(_v0), _v6(!_v5);
          },
          rightIcon: (0, _v1.jsx)(_v329.ChevronDownSmall, {}),
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
            children: [(0, _v1.jsxs)(_v345, {
              children: [(0, _v1.jsx)(_v155.Box, {
                ..._v343
              }), [...Array(_v16)].map((_v0, _v1) => (0, _v1.jsx)(_v346, {}, _v1)), _v15 && (0, _v1.jsx)(_v344, {
                src: _v15,
                alt: "moment thumbnail"
              })]
            }), (0, _v1.jsx)("div", {
              children: _v10 && _v10?.total > 100 ? (0, _v77.translate)({
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
              }) : (0, _v77.translate)({
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
      }), (0, _v1.jsx)(_v326.PopoverContent, {
        borderRadius: "xl",
        backgroundColor: "fill-blur",
        padding: "0",
        onClick: _v0 => _v0.stopPropagation(),
        children: _v10 && (0, _v1.jsx)(_v335, {
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
  let _v343 = {
      width: (0, _v9.rem)(22),
      height: (0, _v9.rem)(16),
      borderRadius: "3px",
      background: "blackAlpha.300"
    },
    _v344 = _v0 => (0, _v1.jsx)(_v155.Box, {
      ..._v343,
      as: "img",
      position: "absolute",
      "z-index": "100",
      "border-width": "0.5px",
      ..._v0
    }),
    _v345 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ..._v0
    }),
    _v346 = () => (0, _v1.jsx)(_v69.Icon, {
      color: "blackAlpha.300",
      width: "4px !important",
      height: "16px",
      viewBox: "0 0 4 16",
      children: (0, _v1.jsx)("path", {
        d: "M0.666687 16H1.50975C2.88509 16 4.00002 14.5673 4.00002 12.8V3.2C4.00002 1.43269 2.88509 0 1.50975 0H0.666687C1.18368 0.586356 1.50975 1.44425 1.50975 2.4V13.6C1.50975 14.5558 1.18368 15.4136 0.666687 16Z",
        fill: "currentColor"
      })
    }),
    _v347 = ({
      children: _v0,
      query: _v1,
      ..._v2
    }) => {
      let _v3 = (0, _v316.useTheme)(),
        _v4 = _v3?.fonts?.heading;
      return (0, _v1.jsx)(_v315.Highlight, {
        ..._v2,
        query: _v1,
        styles: {
          fontFamily: _v4,
          color: "text-primary",
          bgColor: "transparent !important",
          padding: "0"
        },
        children: _v0
      });
    };
  function _v348({
    moments: _v0,
    videoId: _v1,
    position: _v2,
    embedUrl: _v3,
    videoLink: _v4,
    reviewLink: _v5
  }) {
    let {
        query: _v6 = ""
      } = _v186(),
      {
        sendMomentClickEvent: _v7,
        sendMomentsTimelineClick: _v8
      } = _v234(),
      {
        setPanelMoments: _v9,
        panelMoments: _v10
      } = (0, _v3.useContext)(_v60),
      {
        currentIdx: _v11,
        currentVidId: _v12
      } = _v10,
      _v13 = _v1 === _v12,
      [_v14, _v15] = _v284({
        threshold: 1
      }),
      [_v16, _v17] = _v284({
        threshold: 1
      });
    return (0, _v1.jsxs)(_v155.Box, {
      position: "relative",
      children: [(0, _v1.jsx)(_v353, {
        background: _v354.leftLight,
        _dark: {
          background: _v354.leftDark
        },
        _groupHover: {
          background: _v354.leftLightHover,
          _dark: {
            background: _v354.leftDarkHover
          }
        },
        display: _v17 ? "none" : "block"
      }), (0, _v1.jsx)(_v8.Flex, {
        overflowX: "scroll",
        marginBottom: "sm",
        gap: (0, _v9.rem)(2),
        paddingLeft: {
          base: "0",
          md: (0, _v9.rem)(44)
        },
        paddingRight: "sm",
        sx: {
          scrollbarWidth: "thin",
          scrollbarColor: `${_v34} transparent`
        },
        children: _v0.data.map(({
          id: _v0,
          thumbnail: _v1,
          contents: _v2,
          contentsHighlight: _v3,
          startTime: _v4,
          endTime: _v5,
          type: _v6,
          attributes: _v7
        }, _v8) => {
          let _v9 = _v138(_v3) || _v6,
            _v10 = _v13 && _v11 !== _v8,
            _v11 = _v13 && _v8 === _v11,
            _v12 = 0 === _v8 ? _v16 : _v8 === _v0.data.length - 1 ? _v14 : void 0,
            _v13 = _v6 === _v124.comment || _v6 === _v124.commentReply;
          return (0, _v1.jsxs)(_v349, {
            "data-id": _v0,
            ref: _v12,
            onClick: () => {
              _v7({
                position: _v2,
                entityId: _v1
              }), _v9({
                moments: _v0.data,
                currentIdx: _v8,
                currentVidId: _v1,
                currentVidLink: _v4,
                momentEmbedUrl: _v3,
                currentReviewLink: _v5
              }), _v8({
                position: _v8,
                entityId: _v1
              });
            },
            variant: "tertiary",
            background: _v11 ? "fill-component-hover !important" : void 0,
            _active: {},
            _dark: {
              _active: {}
            },
            opacity: _v10 ? "70%" : "100%",
            maxW: {
              base: (0, _v9.rem)(116),
              md: (0, _v9.rem)(144)
            },
            children: [(0, _v1.jsx)(_v351, {
              width: {
                base: (0, _v9.rem)(100),
                md: (0, _v9.rem)(128)
              },
              children: (0, _v1.jsxs)(_v157.Text, {
                variant: "body-sm",
                color: _v11 ? "text-primary" : "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: [(0, _v169.secondsToDisplay)(Math.floor(_v4 / 0)), !_v13 && "- " + (0, _v169.secondsToDisplay)(Math.floor(_v5 / 0))]
              })
            }), (0, _v1.jsx)(_v350, {
              src: _v1?.url,
              alt: "moment thumbnail"
            }), (0, _v1.jsx)(_v250.Paragraph, {
              size: "sm",
              margin: "0",
              w: "100%",
              noOfLines: 2,
              whiteSpace: "normal",
              overflow: "hidden",
              textAlign: "start",
              paddingX: "xs",
              variant: "body-md",
              height: (0, _v9.rem)(36),
              color: _v10 ? "text-secondary" : "text-primary",
              children: (0, _v1.jsx)(_v347, {
                query: _v9,
                children: _v139(_v2, _v9, 10, 20)
              })
            }), (0, _v1.jsx)(_v352, {
              type: _v6,
              attributes: _v7
            })]
          }, _v0);
        })
      }), (0, _v1.jsx)(_v353, {
        background: _v354.rightLight,
        right: "0",
        _dark: {
          background: _v354.rightDark
        },
        _groupHover: {
          background: _v354.rightLightHover,
          _dark: {
            background: _v354.rightDarkHover
          }
        },
        display: _v15 ? "none" : "block"
      })]
    });
  }
  let _v349 = (0, _v3.forwardRef)((_v0, _v1) => (0, _v1.jsx)(_v159.Button, {
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      gap: (0, _v9.rem)(6),
      borderRadius: "lg",
      textDecoration: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      height: "unset",
      color: "text-secondary",
      fontSize: "body-sm",
      maxW: (0, _v9.rem)(144),
      padding: "sm",
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      ref: _v1,
      ..._v0
    })),
    _v350 = _v0 => (0, _v1.jsx)(_v155.Box, {
      as: _v0.src ? "img" : "div",
      width: {
        base: (0, _v9.rem)(100),
        md: (0, _v9.rem)(128)
      },
      boxSizing: "border-box",
      marginBottom: (0, _v9.rem)(2),
      borderRadius: "md",
      aspectRatio: 16 / 9,
      borderWidth: ".5px",
      borderColor: "stroke",
      ..._v0
    }),
    _v351 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      color: "text-secondary",
      height: (0, _v9.rem)(20),
      paddingX: "xs",
      alignItems: "center",
      variant: "timestamp",
      alignSelf: "flex-start",
      ..._v0
    }),
    _v352 = ({
      type: _v0,
      attributes: _v1
    }) => {
      let {
        label: _v2,
        Icon: _v3
      } = _v147(_v0, _v1);
      return (0, _v1.jsxs)(_v238.HStack, {
        gap: "xs",
        paddingX: "xs",
        w: "100%",
        height: (0, _v9.rem)(20),
        children: [(0, _v1.jsx)(_v3, {
          boxSize: `${(0, _v9.rem)(12)} !important`,
          color: "text-secondary"
        }), (0, _v1.jsx)(_v157.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v2
        })]
      });
    },
    _v353 = _v0 => {
      let {
        display: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v155.Box, {
        height: "100%",
        width: {
          base: (0, _v9.rem)(48),
          md: (0, _v9.rem)(64)
        },
        position: "absolute",
        top: "0",
        pointerEvents: "none",
        display: _v1,
        ..._v2
      });
    },
    _v354 = {
      leftLight: "linear-gradient(270deg, rgba(244, 246, 248, 0.00) 0%, rgba(244, 246, 248, 0.30) 50%, #F4F6F8 100%)",
      leftDark: "linear-gradient(270deg, rgba(14, 18, 22, 0.00) 0%, rgba(14, 18, 22, 0.30) 50%, #0E1216 100%)",
      leftLightHover: "linear-gradient(270deg, rgba(232, 235, 239, 0.00) 0%, rgba(232, 235, 239, 0.30) 50%, #E8EBEF 100%)",
      leftDarkHover: "linear-gradient(270deg, rgba(28, 35, 40, 0.00) 0%, rgba(28, 35, 40, 0.30) 50%, #1C2328 100%)",
      rightLight: "linear-gradient(90deg, rgba(244, 246, 248, 0.00) 0%, rgba(244, 246, 248, 0.30) 50%, #F4F6F8 100%)",
      rightDark: "linear-gradient(90deg, rgba(14, 18, 22, 0.00) 0%, rgba(14, 18, 22, 0.30) 50%, #0E1216 100%)",
      rightLightHover: "linear-gradient(90deg, rgba(232, 235, 239, 0.00) 0%, rgba(232, 235, 239, 0.30) 50%, #E8EBEF 100%)",
      rightDarkHover: "linear-gradient(90deg, rgba(28, 35, 40, 0.00) 0%, rgba(28, 35, 40, 0.30) 50%, #1C2328 100%)"
    };
  function _v355({
    videoId: _v0,
    videoLink: _v1,
    position: _v2,
    handleNoMoments: _v3,
    embedUrl: _v4,
    reviewLink: _v5
  }) {
    let {
        query: _v6,
        page: _v7
      } = _v186(),
      [_v8, _v9] = (0, _v3.useState)(!1),
      _v10 = (0, _v3.useRef)(!1),
      {
        firstVideoWithMoments: _v11,
        onMomentsRequest: _v12,
        onMomentsResponse: _v13
      } = (0, _v3.useContext)(_v60),
      {
        sendMomentsTimelineImpressions: _v14,
        sendMomentsResultsImpressions: _v15
      } = _v234(),
      {
        dedupeMoments: _v16,
        chapterFallback: _v17
      } = _v67(),
      {
        data: _v18,
        isLoading: _v19,
        error: _v20
      } = _v332({
        select: _v54,
        where: {
          videoId: _v0
        },
        query: {
          perPage: 10,
          filterType: Object.values(_v124).join(","),
          filterAttributes: "chapter,comment,reply,transcript,visual",
          query: _v6,
          sort: "chronological",
          dedupe: _v16,
          chapterFallback: _v17
        }
      }, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      });
    (0, _v3.useEffect)(() => {
      1 === _v7 && (_v19 ? _v12(_v2) : _v13(_v2, !!_v18?.data?.length));
    }, [_v19, _v18, _v2, _v7]), (0, _v3.useEffect)(() => {
      1 === _v7 && _v11 === _v2 && _v18?.data?.length && _v9(!0);
    }, [_v11, _v2]), (0, _v3.useEffect)(() => {
      _v8 && _v14();
    }, [_v8]), (_v18?.data.length === 0 || _v20) && _v3();
    let _v21 = _v18?.data?.slice(0, 1)[0]?.thumbnail?.url;
    if (_v19 || !_v18 || 0 === _v18.data.length) return null;
    _v10.current || (_v15(), _v10.current = !0);
    let _v22 = _v18.data.length < 3 ? _v18?.data.length - 1 : 2,
      _v23 = _v18 && _v18?.total > 100;
    return (0, _v1.jsxs)(_v8.Flex, {
      flexDir: "column",
      gap: "0",
      w: "100%",
      overflow: "auto",
      children: [(0, _v1.jsx)(_v159.Button, {
        onClick: _v0 => {
          _v0.preventDefault(), _v0.stopPropagation(), _v9(!_v8);
        },
        rightIcon: _v8 ? (0, _v1.jsx)(_v166.ChevronUp, {
          boxSize: `${(0, _v9.rem)(20)} !important`
        }) : (0, _v1.jsx)(_v165.ChevronDown, {
          boxSize: `${(0, _v9.rem)(20)} !important`
        }),
        size: "sm",
        paddingY: "xs",
        paddingRight: "sm",
        paddingLeft: {
          base: "xs",
          md: _v8 ? (0, _v9.rem)(12) : "xs"
        },
        mb: "sm",
        marginLeft: {
          base: "xs",
          md: (0, _v9.rem)(44)
        },
        color: "text-primary",
        width: "min-content",
        borderRadius: "sm",
        gap: "xs",
        variant: "tertiary",
        _active: {},
        _dark: {
          _active: {}
        },
        _hover: {
          background: "fill-component-hover"
        },
        children: (0, _v1.jsxs)(_v8.Flex, {
          gap: "sm",
          alignItems: "center",
          children: [!_v8 && (0, _v1.jsxs)(_v358, {
            children: [(0, _v1.jsx)(_v155.Box, {
              ..._v356,
              borderWidth: ".5px",
              borderColor: "stroke"
            }), [...Array(_v22)].map((_v0, _v1) => (0, _v1.jsx)(_v359, {}, _v1)), _v21 && (0, _v1.jsx)(_v357, {
              src: _v21,
              alt: "moment thumbnail"
            })]
          }), (0, _v1.jsx)(_v157.Text, {
            variant: "body-md",
            children: _v23 ? _v79.HIGH_RESULT_COUNT_MOMENTS : _v79.momentsResultCount(_v18?.total)
          }), (0, _v1.jsx)(_v243.Badge, {
            variant: "warning",
            size: "xs",
            height: (0, _v9.rem)(14),
            borderWidth: "0",
            pt: "1px",
            children: _v79.BETA
          })]
        })
      }), _v18 && _v8 && (0, _v1.jsx)(_v348, {
        moments: _v18,
        position: _v2,
        videoId: _v0,
        videoLink: _v1,
        embedUrl: _v4,
        reviewLink: _v5
      })]
    });
  }
  let _v356 = {
      width: (0, _v9.rem)(40),
      height: (0, _v9.rem)(24),
      borderRadius: (0, _v9.rem)(6),
      background: "blackAlpha.300",
      _dark: {
        background: "whiteAlpha.300"
      }
    },
    _v357 = _v0 => (0, _v1.jsx)(_v155.Box, {
      ..._v356,
      as: "img",
      position: "absolute",
      "z-index": "100",
      ..._v0
    }),
    _v358 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      marginRight: "xs",
      ..._v0
    }),
    _v359 = () => (0, _v1.jsx)(_v69.Icon, {
      color: "blackAlpha.300",
      width: "5px !important",
      height: "24px !important",
      viewBox: "0 0 5 24",
      _dark: {
        color: "whiteAlpha.300"
      },
      marginLeft: "1px",
      children: (0, _v1.jsx)("path", {
        d: "M0 24H1.2646C3.3276 24 5 21.851 5 19.2V4.8C5 2.14903 3.3276 0 1.2646 0H0C0.775489 0.879533 1.2646 2.16637 1.2646 3.6V20.4C1.2646 21.8336 0.775489 23.1205 0 24Z",
        fill: "currentColor"
      })
    }),
    _v360 = ({
      title: _v0,
      subTitle: _v1,
      timestamp: _v2,
      thumbnail: _v3,
      location: _v4,
      href: _v5,
      isSelectable: _v6,
      isSelected: _v7 = !1,
      position: _v8,
      uri: _v9,
      onToggleSelected: _v10,
      hoverActions: _v11,
      menuButton: _v12,
      showCheckboxColumn: _v13,
      showLocationColumn: _v14,
      showModifiedColumn: _v15,
      gridColumns: _v16,
      type: _v17,
      showNewMoments: _v18,
      embedUrl: _v19,
      reviewLink: _v20
    }) => {
      let {
          sendHoverEvent: _v21,
          sendClickEvent: _v22
        } = _v234(),
        _v23 = (0, _v3.useRef)(void 0),
        _v24 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          capabilities: {
            hasInVideoSearch: _v25
          }
        } = (0, _v63.useCapability)(["hasInVideoSearch"], _v24?.teamUser?.ownerId),
        {
          query: _v26 = ""
        } = _v186(),
        _v27 = (0, _v316.useTheme)(),
        _v28 = _v27?.fonts?.heading,
        _v29 = "video" === _v17,
        _v30 = _v29 ? _v125(_v9) : void 0,
        [_v31, _v32] = (0, _v3.useState)(!!_v30 && _v25 && !!_v26),
        _v33 = _v17 === _v96 ? "events" : _v17,
        _v34 = () => {
          _v22({
            entityType: _v33,
            position: _v8,
            uri: _v9
          });
        };
      return (0, _v1.jsxs)(_v168.ContentRow, {
        listGridColumns: "auto",
        isSelected: _v7,
        onToggleSelected: _v10,
        cursor: "pointer",
        onClick: _v34,
        onContextMenu: _v34,
        padding: "0",
        onMouseEnter: () => {
          _v23.current = setTimeout(() => {
            _v21({
              entityType: _v33,
              position: _v8,
              uri: _v9
            });
          }, 500);
        },
        onMouseLeave: () => clearTimeout(_v23.current),
        children: [(0, _v1.jsxs)(_v156.Grid, {
          w: "100%",
          gridTemplateColumns: _v16,
          alignItems: "center",
          padding: "sm",
          gap: ".5rem",
          children: [_v13 && (0, _v1.jsx)(_v168.ContentRow.Column, {
            children: (_v29 || _v17 === _v96) && (0, _v1.jsx)(_v168.ContentRow.SelectCheckbox, {
              size: "md",
              isDisabled: !_v6
            })
          }), (0, _v1.jsx)(_v168.ContentRow.Column, {
            href: _v5,
            children: _v3
          }), (0, _v1.jsx)(_v168.ContentRow.Column, {
            href: _v5,
            overflow: "hidden",
            margin: `0 0 0 ${(0, _v9.rem)(4)}`,
            children: (0, _v1.jsxs)(_v8.Flex, {
              flexDir: "column",
              gap: "sm",
              width: "100%",
              children: [(0, _v1.jsx)(_v157.Text, {
                variant: "body-lg",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: (0, _v1.jsx)(_v315.Highlight, {
                  query: _v26,
                  styles: {
                    fontFamily: _v28,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v0
                })
              }), _v1 && (0, _v1.jsx)(_v157.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: (0, _v1.jsx)(_v315.Highlight, {
                  query: _v26,
                  styles: {
                    fontFamily: _v28,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v1
                })
              }), _v31 && !_v18 && (0, _v1.jsx)(_v342, {
                videoId: _v30,
                videoLink: _v5,
                position: _v8,
                handleNoMoments: () => _v32(!1)
              })]
            })
          }), _v14 && (0, _v1.jsx)(_v168.ContentRow.Column, {
            href: _v4?.href || _v5,
            overflow: "auto",
            margin: `0 0 0 ${(0, _v9.rem)(24)}`,
            onClick: _v0 => {
              _v0.stopPropagation(), (({
                position: _v0
              }) => {
                _v293.BigPictureClient.sendEvent(new _v293.Event("vimeo.click_folder_card", 3, {
                  path: window.location.pathname,
                  page: "search_result_page",
                  product: "search",
                  position_row: _v0,
                  entry_page: null,
                  layout: null,
                  location: null,
                  actor_resource_role: null,
                  actor_team_role: null,
                  position_column: null,
                  team_owner_id: null,
                  team_size: null,
                  team_subscription_type: null,
                  customizations: null,
                  folder_id: null,
                  folder_share_status: null,
                  is_private_to_me: null,
                  is_subfolder: null,
                  parent_folder_id: null
                }));
              })({
                position: _v8
              });
            },
            children: (0, _v1.jsx)(_v8.Flex, {
              alignItems: "center",
              width: "100%",
              children: (0, _v1.jsx)(_v157.Text, {
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
          }), _v15 && (0, _v1.jsx)(_v168.ContentRow.Column, {
            href: _v5,
            overflow: "hidden",
            children: (0, _v1.jsx)(_v157.Text, {
              width: "100%",
              variant: "body-md",
              color: "text-secondary",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              children: _v2
            })
          }), (0, _v1.jsxs)(_v168.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: [(0, _v1.jsx)(_v155.Box, {
              children: _v12
            }), _v15 && _v11]
          })]
        }), _v31 && _v18 && (0, _v1.jsx)(_v355, {
          videoId: _v30,
          videoLink: _v5,
          position: _v8,
          handleNoMoments: () => _v32(!1),
          embedUrl: _v19,
          reviewLink: _v20
        })]
      });
    },
    _v361 = ({
      liveEventItem: _v0,
      index: _v1,
      onToggleSelected: _v2
    }) => {
      let _v3 = _v188(),
        _v4 = (0, _v14.useViewer)(),
        [_v5] = (0, _v164.useMediaQuery)(_v47),
        {
          getEventShareLoopTrackingParams: _v6
        } = (0, _v314.useShareLoopTrackingParams)(),
        {
          revalidateAll: _v7
        } = _v229(),
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
        _v23 = !!_v11 && (0, _v311.getHasDatePassed)(_v11),
        _v24 = (0, _v313.useEventScheduledAt)(_v8, _v4?.locale ?? "en-US"),
        _v25 = (0, _v312.idFromUri)(_v16.uri),
        _v26 = _v6(_v308.PAGE.SEARCH),
        _v27 = `${_v4?.vimeoHttpsUrl ?? ""}${_v18}${_v26}`;
      return (0, _v1.jsx)(_v360, {
        type: _v96,
        href: _v21 ? _v19 : _v12,
        title: _v14,
        position: _v1,
        uri: _v15,
        isSelectable: _v0.isSelectable,
        isSelected: _v0.isSelected,
        onToggleSelected: () => _v2(_v15),
        thumbnail: (0, _v1.jsx)(_v309.EventThumbnail, {
          thumbnail: _v22 ? _v13.sizes[3].link : "",
          nextOccurrenceTime: _v11,
          isLive: _v10?.connections?.liveVideo?.status === "streaming",
          isUpcoming: !!_v11,
          hasScheduledDatePassed: _v23,
          status: _v17,
          minWidth: (0, _v9.rem)(_v5 ? "114" : "142")
        }),
        subTitle: _v24,
        timestamp: _v132(_v9, _v4?.locale),
        location: _v134(_v0),
        ..._v3,
        menuButton: (0, _v1.jsx)(_v310.EventMenu, {
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
    },
    _v362 = ({
      showCheckboxColumn: _v0,
      showLocationColumn: _v1,
      showModifiedColumn: _v2,
      gridColumns: _v3
    }) => {
      let {
          sendSortEvent: _v4
        } = _v234(),
        {
          sort: _v5,
          onLibraryFilterChange: _v6,
          type: _v7
        } = _v186(),
        [_v8, _v9] = _v136(_v5),
        _v10 = _v8 === _v41,
        _v11 = _v7 === _v97.options.showcase.value,
        _v12 = _v5 || _v120.relevance.value,
        _v13 = _v0 => {
          let _v1 = _v8 === _v0 ? `${_v0}_${"asc" === _v9 ? "desc" : "asc"}` : (_v0 => {
            switch (_v0) {
              case _v39:
                return _v104.titleAsc.value;
              case _v40:
                return _v104.lastModified.value;
              case _v41:
                return _v104.lastAdded.value;
              default:
                return _v104.relevance.value;
            }
          })(_v0);
          _v6(_v36, _v1);
          let _v2 = null;
          for (let _v0 of Object.values(_v120)) if (_v0.value === _v1) {
            _v2 = _v0.untranslatedText;
            break;
          }
          _v4({
            copy: _v2,
            value: _v1,
            previousValue: _v12
          });
        },
        _v14 = _v10 ? _v79.ADDED : _v79.MODIFIED;
      return (0, _v1.jsxs)(_v168.ContentRow, {
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
        children: [_v0 && (0, _v1.jsx)(_v168.ContentRow.Column, {
          children: (0, _v1.jsx)(_v159.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-14),
            onClick: () => _v13(_v39),
            rightIcon: (0, _v1.jsx)(_v280, {
              isActive: _v8 === _v39,
              sortDirection: _v9
            }),
            children: _v79.TITLE
          })
        }), (0, _v1.jsx)(_v168.ContentRow.Column, {
          margin: "10px",
          children: !_v0 && (0, _v1.jsx)(_v159.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-32),
            onClick: () => _v13(_v39),
            rightIcon: (0, _v1.jsx)(_v280, {
              isActive: _v8 === _v39,
              sortDirection: _v9
            }),
            children: _v79.TITLE
          })
        }), (0, _v1.jsx)(_v168.ContentRow.Column, {
          overflow: "hidden",
          children: "--"
        }), _v1 && (0, _v1.jsx)(_v168.ContentRow.Column, {
          overflow: "hidden",
          margin: `0 0 0 ${(0, _v9.rem)(24)}`,
          children: (0, _v1.jsx)(_v157.Text, {
            variant: "heading-xs",
            children: _v11 ? (0, _v77.translate)({
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
            }) : _v79.LOCATION
          })
        }), _v2 && (0, _v1.jsx)(_v168.ContentRow.Column, {
          children: (0, _v1.jsx)(_v159.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-12),
            rightIcon: (0, _v1.jsx)(_v280, {
              isActive: _v8 === _v41 || _v8 === _v40,
              sortDirection: _v9
            }),
            onClick: () => _v10 ? _v13(_v41) : _v13(_v40),
            children: _v14
          })
        }), (0, _v1.jsx)(_v168.ContentRow.Column, {
          children: "--"
        })]
      });
    };
  var _v363 = _v0.i(0),
    _v364 = _v0.i(0),
    _v365 = _v0.i(0),
    _v366 = _v0.i(0),
    _v367 = _v0.i(0);
  let _v368 = ({
      thumbnails: _v0
    }) => {
      let [_v1] = (0, _v164.useMediaQuery)(_v47),
        _v2 = _v1 ? "114" : "142";
      return _v0?.[0] ? (0, _v1.jsx)(_v168.ContentRow.Thumbnail, {
        src: _v0[0],
        alt: "showcase thumbnail",
        minWidth: (0, _v9.rem)(_v2)
      }) : (0, _v1.jsx)(_v168.ContentRow.DefaultThumbnail, {
        minWidth: (0, _v9.rem)(_v2),
        children: (0, _v1.jsx)(_v367.VideosStackFilled, {
          color: "text-tertiary",
          boxSize: "sm",
          opacity: "60%"
        })
      });
    },
    _v369 = ({
      showcase: _v0,
      index: _v1
    }) => {
      var _v2, _v3;
      let _v4,
        _v5,
        _v6,
        _v7 = _v188(),
        _v8 = (0, _v14.useViewer)(),
        _v9 = (0, _v214.useAnalyticsEvent)(),
        {
          type: _v10,
          sort: _v11
        } = _v186(),
        {
          revalidateAll: _v12
        } = _v229(),
        _v13 = (0, _v307.useNotification)(),
        _v14 = (0, _v366.useShowcaseDeleteModal)(),
        {
          getShowcaseShareLoopTrackingParams: _v15
        } = (0, _v314.useShareLoopTrackingParams)(),
        {
          createdTime: _v16,
          embed: _v17,
          metadata: _v18,
          name: _v19,
          pictures: _v20,
          uri: _v21,
          link: _v22,
          privacy: _v23,
          modifiedTime: _v24
        } = _v0,
        _v25 = _v10 === _v97.options.showcase.value,
        _v26 = (_v2 = _v21, _v3 = !!_v17, (_v6 = ((_v5 = _v2.match(/albums\/\d+/g)) && (_v4 = _v5[0].split("/").pop()), _v4)) ? _v3 ? `/manage/showcases/${_v6}` : `/showcase/${_v6}` : "/library/showcases"),
        _v27 = _v20.slice(0, 3).map(_v0 => {
          let _v1 = _v0?.sizes?.[1]?.link;
          if (_v1) {
            let _v0;
            return (_v0 = new URL(_v1)).searchParams.delete("r"), _v0.toString();
          }
          return "";
        }),
        _v28 = (0, _v365.useDeleteShowcase)({
          onFailure: () => {
            _v14.setIsLoading(!1), _v13({
              content: _v79.GENERIC_ERROR,
              status: "error"
            });
          },
          onSuccess: ({
            name: _v0,
            uri: _v1
          }) => {
            _v13({
              content: _v79.deletedShowcase(_v0)
            }), _v12(new Set(_v1)), _v14.setIsLoading(!1), _v14.close();
          }
        });
      return (0, _v1.jsx)(_v360, {
        type: "showcase",
        href: _v26,
        title: _v19,
        position: _v1,
        uri: _v21,
        thumbnail: (0, _v1.jsx)(_v368, {
          thumbnails: _v27
        }),
        subTitle: (0, _v77.translate)({
          singular: "{NUM} video",
          plural: "{NUM} videos",
          count: _v18.connections.videos.total,
          replacements: {
            NUM: _v18.connections.videos.total
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
        timestamp: _v132(_v11 === _v41 ? _v16 : _v24, _v8?.locale),
        location: {
          name: _v25 ? _v370[_v23.view] ?? _v23.view : _v79.SHOWCASES
        },
        ..._v7,
        menuButton: (0, _v1.jsx)(_v363.ShowcaseMenu, {
          canDelete: !!_v0?.metadata?.interactions?.delete,
          hasEmbedCode: !!_v0?.embed?.html,
          hasEmbedOnlyPrivacy: _v0?.privacy?.view === "embed_only",
          onClick: () => {
            _v9({
              eventName: _v318,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v320,
                copy: null,
                device_type: (0, _v317.getDeviceType)(),
                feature: _v321,
                location: _v323,
                name: "showcase_menu",
                page: _v322,
                path: window.location.pathname,
                target: "overflow menu",
                target_path: null,
                third_party_integration: null,
                type: _v319
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          },
          onCopyLink: () => {
            let _v0;
            _v0 = _v15(_v308.PAGE.SEARCH), (0, _v364.default)(`${_v22}${_v0}`) ? _v13({
              content: _v79.LINK_COPIED
            }) : _v13({
              content: _v79.GENERIC_ERROR,
              status: "error"
            }), _v9({
              eventName: _v318,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v320,
                copy: "copy link",
                device_type: (0, _v317.getDeviceType)(),
                feature: _v321,
                location: _v323,
                name: "showcase_copy_link",
                page: _v322,
                path: window.location.pathname,
                target: "copy link",
                target_path: null,
                third_party_integration: null,
                type: _v319
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          },
          onCopyEmbed: () => {
            if (_v17?.html) {
              var _v0;
              _v0 = _v17?.html, (0, _v364.default)(_v0) ? _v13({
                content: _v79.EMBED_CODE_COPIED
              }) : _v13({
                content: _v79.GENERIC_ERROR,
                status: "error"
              }), _v9({
                eventName: _v318,
                version: 110,
                fields: {},
                defaultEventFields: {
                  click_type: _v320,
                  copy: "copy embed code",
                  device_type: (0, _v317.getDeviceType)(),
                  feature: _v321,
                  location: _v323,
                  name: "showcase_copy_embed_code",
                  page: _v322,
                  path: window.location.pathname,
                  target: "copy embed code",
                  target_path: null,
                  third_party_integration: null,
                  type: _v319
                },
                globalAnalyticsToInclude: ["page", "path"]
              });
            }
          },
          onClickViewShowcase: () => {
            window.open(_v22, "_blank"), _v9({
              eventName: _v318,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v320,
                copy: "view showcase",
                device_type: (0, _v317.getDeviceType)(),
                feature: _v321,
                location: _v323,
                name: "view_showcase",
                page: _v322,
                path: window.location.pathname,
                target: "view showcase",
                target_path: "/showcase/id",
                third_party_integration: null,
                type: _v319
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          },
          onDelete: () => {
            _v14.open({
              onConfirm: () => {
                _v14.setIsLoading(!0), _v28(_v0), _v9({
                  eventName: _v318,
                  version: 110,
                  fields: {},
                  defaultEventFields: {
                    click_type: _v320,
                    copy: "delete",
                    device_type: (0, _v317.getDeviceType)(),
                    feature: _v321,
                    location: "delete_modal",
                    name: "confirm_delete_showcase",
                    page: _v322,
                    path: window.location.pathname,
                    target: "delete",
                    target_path: null,
                    third_party_integration: null,
                    type: _v319
                  },
                  globalAnalyticsToInclude: ["page", "path"]
                });
              },
              onDismiss: () => {
                _v14.close();
              },
              name: _v0.name
            }), _v9({
              eventName: _v318,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v320,
                copy: "delete showcase",
                device_type: (0, _v317.getDeviceType)(),
                feature: _v321,
                location: _v323,
                name: "delete_showcase",
                page: _v322,
                path: window.location.pathname,
                target: "delete showcase",
                target_path: null,
                third_party_integration: null,
                type: _v319
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          }
        })
      }, _v21);
    },
    _v370 = {
      anybody: _v79.PRIVACY_PUBLIC,
      embed_only: _v79.PRIVACY_EMBED,
      nobody: _v79.PRIVACY_NOBODY,
      password: _v79.PRIVACY_PASSWORD,
      team: _v79.PRIVACY_TEAM,
      unlisted: _v79.PRIVACY_UNLISTED
    },
    _v371 = ({
      items: _v0,
      onToggleSelected: _v1,
      showNewMoments: _v2
    }) => {
      let _v3 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          revalidateAll: _v4,
          mutate: _v5
        } = _v229(),
        {
          openCopyVideoModal: _v6,
          copyVideoModal: _v7
        } = (0, _v306.useCopyVideoFlow)({
          onAfterCopySuccess: () => _v4()
        }),
        {
          sort: _v8
        } = _v186(),
        {
          sendDeleteVideo: _v9
        } = _v234(),
        {
          notifyItemMoveSuccess: _v10
        } = (0, _v307.useNotifications)(),
        {
          hasVideoReviewPageDemo: _v11,
          canSeeUpsellModalOnShare: _v12,
          hasContentSpaceEnabled: _v13,
          hasMultipleReviewLinks: _v14
        } = _v67(),
        _v15 = _v13 ? (0, _v77.translate)({
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
        }) : (0, _v77.translate)({
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
        _v16 = _v188(),
        [_v17] = (0, _v164.useMediaQuery)(_v47),
        _v18 = _v17 ? "114" : "142",
        [_v19] = _v136(_v8),
        _v20 = _v19 === _v41,
        _v21 = ({
          selectedDestination: _v0,
          video: _v1
        }) => {
          _v4(), _v10(_v1.name, {
            label: "root" === _v0 ? _v15 : _v0.name,
            link: "root" === _v0 ? "/library" : _v135(_v0.uri)
          });
        },
        _v22 = ({
          uri: _v0,
          settings: {
            color: _v1
          },
          name: _v2
        }) => {
          _v5(_v0 => ({
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
        children: [!_v17 && (0, _v1.jsx)(_v362, {
          ..._v16
        }), (0, _v1.jsx)(_v155.Box, {
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
                  name: _v3,
                  pictures: _v4,
                  uri: _v5,
                  description: _v6,
                  playerEmbedUrl: _v7,
                  reviewPage: _v8
                } = _v0,
                _v9 = _v20 ? _v0.createdTime : _v0.lastUserActionEventDate || "";
              return (0, _v1.jsx)(_v360, {
                type: _v0.type,
                title: _v3,
                subTitle: _v6 || "",
                position: _v1,
                uri: _v5,
                thumbnail: (0, _v1.jsx)(_v168.ContentRow.Thumbnail, {
                  alt: "",
                  src: _v4?.sizes[3].link,
                  badgeText: (0, _v169.secondsToDisplay)(_v1),
                  minWidth: (0, _v9.rem)(_v18)
                }),
                timestamp: _v132(_v9, _v3?.locale),
                location: _v134(_v0),
                href: _v2,
                embedUrl: _v7,
                isSelectable: _v0.isSelectable,
                isSelected: _v0.isSelected,
                reviewLink: _v8?.link,
                ..._v16,
                onToggleSelected: () => _v1(_v5),
                showNewMoments: _v2,
                hoverActions: (0, _v1.jsx)(_v302.ListViewHoverActionsContainer, {
                  children: (0, _v1.jsx)(_v300.TopRightDecoration, {
                    video: _v0,
                    buttonVariant: "minimal",
                    flexDirection: "row",
                    location: "video_list",
                    pageName: _v308.PAGE.SEARCH
                  })
                }),
                menuButton: (0, _v1.jsx)(_v304.VideoMenu, {
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
                    _v4(new Set(_v0.uri)), _v9();
                  },
                  onMoveSuccess: _v21,
                  hasReviewPageLinkUpsell: _v11,
                  hasUpsellInShareModal: _v12,
                  hasMultipleReviewLinks: _v14,
                  onCopyVideo: () => _v6(_v0)
                })
              }, _v5);
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
                _v6 = _v20 ? _v1.createdTime : _v1.lastUserActionEventDate || "";
              return (0, _v1.jsx)(_v360, {
                type: _v0.type,
                href: _v135(_v2),
                title: _v3,
                position: _v1,
                uri: _v2,
                thumbnail: (0, _v1.jsx)(_v305.FolderRowThumbnail, {
                  backgroundColor: _v4?.color,
                  minWidth: (0, _v9.rem)(_v18)
                }),
                subTitle: (_v0 = _v5?.connections?.items?.total, (0, _v77.translate)({
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
                timestamp: _v132(_v6, _v3?.locale),
                location: _v134(_v0),
                ..._v16,
                hoverActions: (0, _v1.jsx)(_v302.ListViewHoverActionsContainer, {
                  children: (0, _v1.jsx)(_v301.FolderTopRightDecoration, {
                    folder: _v1,
                    buttonVariant: "minimal",
                    flexDirection: "row",
                    location: "video_list"
                  })
                }),
                menuButton: (0, _v1.jsx)(_v303.FolderMenu, {
                  folder: _v1,
                  analytics: {
                    product: "Workflow",
                    feature: "search",
                    location: "folder_card"
                  },
                  onMoveSuccess: () => _v4(),
                  onDelete: () => _v4(new Set(_v2)),
                  onSettingsChange: _v22
                })
              }, _v2);
            }
            return _v0?.showcase?.uri ? (0, _v1.jsx)(_v369, {
              showcase: _v0.showcase,
              index: _v1
            }, _v0.showcase.uri) : _v0?.liveEvent?.uri ? (0, _v1.jsx)(_v361, {
              liveEventItem: _v0,
              index: _v1,
              onToggleSelected: _v1
            }, _v0.liveEvent.uri) : (0, _v1.jsx)(_v1.Fragment, {});
          })
        }), _v7]
      });
    };
  var _v372 = _v0.i(0),
    _v373 = _v0.i(0),
    _v374 = _v0.i(0);
  let _v375 = () => {
      let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
        _v1 = (0, _v373.useUpsellModal)(),
        _v2 = _v0?.teamUser ? "enterprise" === _v0.teamUser.accountType : _v0?.user?.account === "enterprise";
      return (0, _v1.jsx)(_v8.Flex, {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v374.EmptyState, {
          cta: (0, _v1.jsxs)(_v8.Flex, {
            gap: "lg",
            children: [(0, _v1.jsx)(_v159.Button, {
              variant: "secondary",
              as: "a",
              href: "/live/select",
              onClick: _v324,
              children: _v79.START_FREE_DEMO
            }), (0, _v1.jsx)(_v159.Button, {
              variant: "upsell",
              as: "a",
              href: _v2 ? "/enterprise/contact?mkc=%230920" : void 0,
              cursor: "pointer",
              onClick: () => {
                _v2 || (_v293.BigPictureClient.sendEvent(new _v293.Event("vimeo.upgrade_action", 21, {
                  action_type: "click",
                  page: "search_result_page",
                  location: "empty_state",
                  target: "event_upgrade_modal",
                  upsell_name: "events_generic",
                  copy: "video_usage",
                  feature: "search",
                  currency: null,
                  device_type: null,
                  discount_offer: null,
                  duration: null,
                  is_discount: null,
                  is_new_pricing: null,
                  loading_time: null,
                  path: window.location.pathname,
                  plan_selected: null,
                  price: null,
                  promo_code_id: null,
                  purchase_type: null,
                  upgrade_flags: null,
                  target_path: null
                })), _v1.open({
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
                    headerText: _v79.UPSELL_HEADER,
                    subHeaderText: _v79.UPSELL_MODAL_SUBHEADER,
                    excludePlans: ["starter", "standard", "creator"],
                    planOverrides: {
                      ADVANCE: {
                        subHeading: _v79.ADVANCED_PLAN_SUBHEADER,
                        featuresList: _v79.ADVANCED_PLAN_FEATURES_LIST
                      },
                      ENTERPRISE: {
                        subHeading: _v79.ENTERPRISE_PLAN_SUBHEADER,
                        featuresList: _v79.ENTERPRISE_PLAN_FEATURES_LIST
                      }
                    }
                  },
                  templateType: "default"
                }));
              },
              children: _v2 ? _v79.CONTACT_US : _v79.UPGRADE
            })]
          }),
          header: _v79.UPSELL_HEADER,
          subheader: _v79.UPSELL_SUBHEADER,
          icon: (0, _v1.jsx)(_v372.CameraOn, {
            boxSize: "2xl"
          })
        })
      });
    },
    _v376 = () => {
      let _v0 = _v188(),
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
        children: (0, _v1.jsxs)(_v155.Box, {
          children: [(0, _v1.jsx)(_v362, {
            ..._v0
          }), [,,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v168.ContentRow, {
            listGridColumns: _v4,
            isSelected: !1,
            role: "group",
            disableHover: !0,
            width: "100%",
            padding: "sm",
            gap: ".5rem",
            children: [_v1 && (0, _v1.jsx)(_v168.ContentRow.Column, {
              children: (0, _v1.jsx)(_v1.Fragment, {})
            }), (0, _v1.jsx)(_v168.ContentRow.Column, {
              children: (0, _v1.jsx)(_v155.Box, {
                aspectRatio: 16 / 9,
                width: _v5,
                children: (0, _v1.jsx)(_v161.Skeleton, {
                  height: "100%",
                  width: "100%"
                })
              })
            }), (0, _v1.jsx)(_v168.ContentRow.Column, {
              width: "100%",
              children: (0, _v1.jsxs)(_v8.Flex, {
                direction: "column",
                gap: "1rem",
                justifyContent: "left",
                paddingLeft: "0.5rem",
                width: "100%",
                children: [(0, _v1.jsx)(_v161.Skeleton, {
                  variant: "text",
                  width: "85%"
                }), (0, _v1.jsx)(_v161.Skeleton, {
                  variant: "text",
                  maxWidth: "20%"
                })]
              })
            }), _v2 && (0, _v1.jsx)(_v168.ContentRow.Column, {
              children: (0, _v1.jsx)(_v8.Flex, {
                margin: `0 0 0 ${(0, _v9.rem)(24)}`,
                children: (0, _v1.jsx)(_v161.Skeleton, {
                  variant: "text",
                  width: "4rem"
                })
              })
            }), _v3 && (0, _v1.jsx)(_v168.ContentRow.Column, {
              children: (0, _v1.jsx)(_v8.Flex, {
                children: (0, _v1.jsx)(_v161.Skeleton, {
                  variant: "text",
                  w: "5rem",
                  alignItems: "flex-end"
                })
              })
            }), (0, _v1.jsx)(_v168.ContentRow.Column, {
              children: (0, _v1.jsx)(_v1.Fragment, {})
            })]
          }, `loading-state-skeleton-card-list-${_v1}`))]
        })
      });
    },
    _v377 = () => {
      let _v0,
        _v1 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          searchType: _v2,
          toggleSearchType: _v3
        } = (0, _v3.useContext)(_v151),
        {
          capabilities: {
            hasEnterprise: _v4,
            hasPublicSearchDisabled: _v5
          }
        } = (0, _v63.useCapability)(["hasEnterprise", "hasPublicSearchDisabled"], _v1?.teamUser?.ownerId),
        _v6 = _v2 === _v148,
        _v7 = !1 === _v4 && !1 === _v5,
        _v8 = _v6 ? _v79.NO_LIBRARY_RESULTS : _v79.NO_PUBLIC_RESULTS,
        _v9 = _v6 && _v7 ? _v79.TRY_AGAIN_OR_SEARCH_VIMEO : _v79.TRY_ANOTHER_SEARCH;
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
        children: [(0, _v1.jsx)(_v167.SearchMagnifier, {
          boxSize: {
            base: "xl",
            sm: "2xl"
          }
        }), (0, _v1.jsx)(_v157.Text, {
          variant: {
            base: "heading-lg",
            sm: "heading-xl"
          },
          children: _v8
        }), (0, _v1.jsx)(_v157.Text, {
          variant: "body-lg",
          color: "text-secondary",
          children: _v9
        }), _v6 && _v7 && (0, _v1.jsx)(_v159.Button, {
          size: "md",
          variant: "primary",
          onClick: () => _v3(),
          children: (0, _v77.translate)({
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
        }), (0, _v1.jsx)(_v157.Text, {
          variant: "body-lg",
          color: "text-secondary",
          position: "absolute",
          bottom: "0",
          children: (_v0 = _v1?.locale, (0, _v77.translate)({
            singular: "Looking for {STYLE}account or billing help{/STYLE}?",
            replacements: {
              STYLE: _v0 => (0, _v1.jsx)(_v294.Link, {
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
    _v378 = () => {
      let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
        _v1 = (0, _v3.useRef)(null),
        {
          canManageTeamCollections: _v2,
          hasLiveSubscription: _v3,
          hasNewMoments: _v4,
          hasReframeOverride: _v5
        } = _v67(),
        [_v6, _v7] = (0, _v3.useState)(new Set()),
        _v8 = (0, _v214.useAnalyticsEvent)(),
        {
          data: _v9,
          error: _v10,
          isLoading: _v11,
          revalidateAll: _v12
        } = _v229(),
        {
          sort: _v13,
          page: _v14,
          updatePage: _v15,
          onOmnisearchChange: _v16,
          filters: _v17,
          type: _v18,
          query: _v19
        } = _v186(),
        _v20 = (0, _v3.useRef)(_v13),
        {
          sendSearchResultsPage: _v21
        } = _v234(),
        {
          toggleSearchType: _v22
        } = (0, _v3.useContext)(_v151),
        {
          resetMomentsStatus: _v23
        } = (0, _v3.useContext)(_v60),
        _v24 = _v5 && _v144(_v19),
        {
          allItems: _v25,
          canMoveSelection: _v26,
          canDeleteSelection: _v27,
          selectedItems: _v28,
          canChangePrivacySelection: _v29,
          canAddToShowcasesSelection: _v30,
          hasColdStorageSelection: _v31,
          hasReachedMaxSelectionForMove: _v32,
          hasReachedMaxSelectionForPrivacy: _v33,
          hasReachedMaxSelectionForSentimentWidget: _v34,
          hasReachedMaxSelectionForShowcases: _v35
        } = (0, _v292.useBulkItems)({
          canDeleteItem: _v0 => !!_v0?.video?.metadata?.interactions?.delete || !!_v0?.liveEvent?.metadata?.interactions?.delete,
          canMoveItem: _v0 => !!_v0?.video?.canMoveToProject || !!_v0?.liveEvent?.metadata?.interactions?.edit,
          canChangeItemPrivacy: _v0 => !!_v0?.video?.metadata?.interactions?.edit,
          canAddToShowcases: _v0 => !!_v0?.video?.metadata?.interactions?.edit,
          items: _v9?.data,
          selectedURIs: _v6,
          allowColdStorageDeletion: !0
        }),
        {
          capabilities: _v36
        } = (0, _v63.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v0?.teamUser?.ownerId),
        _v37 = !!_v36.canGenerateClipTextTranslation,
        _v38 = (!!_v36.canGenerateClipTranslation || _v37) && !!_v36.canPerformBulkTranslations;
      return ((0, _v3.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.detail.searchType === _v38 ? _v22(_v0) : _v16(_v0);
        };
        return document.addEventListener("omnisearchQueryChange", _v0), () => document.removeEventListener("omnisearchQueryChange", _v0);
      }, [_v17]), (0, _v3.useEffect)(() => {
        _v9?.data && _v20.current === _v13 ? _v21() : _v20.current = _v13;
      }, [_v9?.data]), (0, _v3.useEffect)(() => {
        _v23();
      }, [_v14]), _v10) ? (0, _v1.jsx)(_v296, {}) : _v11 || !_v9 ? (0, _v1.jsx)(_v155.Box, {
        width: "100%",
        minHeight: (0, _v9.rem)(450),
        children: (0, _v1.jsx)(_v376, {})
      }) : _v9?.data && _v9?.data.length !== 0 ? (0, _v1.jsxs)(_v155.Box, {
        width: "100%",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          height: "100%",
          pb: {
            base: "3xl",
            sm: "lg"
          },
          children: [(0, _v1.jsx)(_v371, {
            items: _v25,
            onToggleSelected: _v0 => {
              let _v1 = new Set(_v6),
                _v2 = _v6.has(_v0);
              _v2 ? _v1.delete(_v0) : _v1.add(_v0), _v8({
                eventName: "vimeo.click",
                version: 91,
                fields: {
                  copy: `${_v6.size}`,
                  feature: "search",
                  location: "video_list",
                  name: "select_item",
                  page: "SEARCH_RESULT_PAGE",
                  target: _v2 ? "de-selected" : "selected",
                  type: "general"
                },
                defaultEventFields: {
                  target_path: null,
                  click_type: null,
                  device_type: null,
                  third_party_integration: null
                },
                globalAnalyticsToInclude: ["path"]
              }), _v7(_v1);
            },
            showNewMoments: _v4
          }), (0, _v1.jsx)(_v299, {
            scrollContainer: _v1.current,
            updatePage: _v15,
            page: _v14,
            pageSize: 10,
            data: _v9
          })]
        }), (0, _v1.jsx)(_v291.BulkActions, {
          canUseBulkTranslation: _v38,
          canAddToShowcases: _v2,
          canMoveSelection: _v26,
          canDeleteSelection: _v27,
          canChangePrivacySelection: _v29,
          canAddToShowcasesSelection: _v30,
          hasColdStorageSelection: _v31,
          deselectAllItems: () => _v7(new Set()),
          hasReachedMaxSelectionForMove: _v32,
          hasReachedMaxSelectionForPrivacy: _v33,
          hasReachedMaxSelectionForSentimentWidget: _v34,
          hasReachedMaxSelectionForShowcases: _v35,
          removeItems: () => _v12(_v6),
          revalidateItems: _v12,
          selectedItems: _v28,
          selectedItemURIs: _v6,
          teamOwnerId: _v0?.teamUser?.ownerId || _v0?.user?.id
        })]
      }) : _v24 ? (0, _v1.jsx)(_v155.Box, {}) : _v3 || _v18 !== _v97.options.live_event.value ? (0, _v1.jsx)(_v377, {}) : (0, _v1.jsx)(_v375, {});
    };
  var _v213 = _v213;
  let _v379 = {
      [_v85.options.ondemand.value]: "200px",
      [_v85.options.people.value]: "180px"
    },
    _v380 = () => (0, _v1.jsxs)(_v8.Flex, {
      width: "100%",
      padding: "sm",
      flexDir: "column",
      height: "min-content",
      children: [(0, _v1.jsx)(_v161.Skeleton, {
        h: "100%",
        borderRadius: "md",
        aspectRatio: 16 / 9
      }), (0, _v1.jsxs)(_v8.Flex, {
        flexDir: "column",
        gap: "3",
        marginTop: "md",
        children: [(0, _v1.jsx)(_v161.Skeleton, {
          variant: "text",
          w: "60%"
        }), (0, _v1.jsx)(_v161.Skeleton, {
          variant: "text",
          w: "45%"
        })]
      })]
    }),
    _v381 = {
      clip: _v380,
      people: () => (0, _v25.useBreakpointValue)({
        base: !0,
        sm: !1
      }) ? (0, _v1.jsxs)(_v238.HStack, {
        width: "100%",
        children: [(0, _v1.jsx)(_v161.Skeleton, {
          variant: "circle",
          w: (0, _v9.rem)(64),
          h: (0, _v9.rem)(64)
        }), (0, _v1.jsxs)(_v239.VStack, {
          justifyContent: "center",
          alignItems: "start",
          gap: "4",
          flexGrow: "1",
          children: [(0, _v1.jsx)(_v161.Skeleton, {
            variant: "text",
            w: "45%"
          }), (0, _v1.jsx)(_v161.Skeleton, {
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
        children: [(0, _v1.jsx)(_v161.Skeleton, {
          variant: "circle",
          w: (0, _v9.rem)(96),
          h: (0, _v9.rem)(96)
        }), (0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          gap: "lg",
          marginTop: "md",
          w: "100%",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v161.Skeleton, {
            variant: "text",
            w: "45%"
          }), (0, _v1.jsx)(_v161.Skeleton, {
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
        children: [(0, _v1.jsx)(_v161.Skeleton, {
          h: "100%",
          borderRadius: "md",
          aspectRatio: 2 / 3
        }), (0, _v1.jsx)(_v161.Skeleton, {
          marginTop: "md",
          marginBottom: "sm",
          variant: "text"
        })]
      }),
      channel: _v380,
      group: _v380
    },
    _v382 = () => {
      let {
          type: _v0 = _v85.options.clip.value
        } = _v216(),
        _v1 = _v381[_v0];
      return (0, _v1.jsx)(_v1.Fragment, {
        children: [1, 2, 3].map((_v0, _v1) => (0, _v1.jsx)(_v1, {}, _v1))
      });
    };
  var _v383 = _v0.i(0),
    _v384 = _v0.i(0),
    _v385 = _v0.i(0),
    _v386 = _v0.i(0);
  let _v387 = ({
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
        [_v9, _v10] = (0, _v386.getAvatarImages)(_v6?.sizes);
      return (0, _v1.jsxs)(_v239.VStack, {
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
        children: [(0, _v1.jsx)(_v155.Box, {
          h: (0, _v9.rem)(96),
          w: (0, _v9.rem)(96),
          borderRadius: "100%",
          border: "1px solid",
          borderColor: "stroke",
          children: (0, _v1.jsx)(_v384.Avatar, {
            size: "auto",
            alt: _v5,
            src: _v9,
            srcSet: _v10,
            nameProps: {
              name: _v5
            }
          })
        }), (0, _v1.jsx)(_v157.Text, {
          variant: "heading-sm",
          isTruncated: !0,
          maxWidth: "85%",
          children: _v5
        }), (0, _v1.jsx)(_v238.HStack, {
          height: (0, _v9.rem)(24),
          gap: "1",
          textAlign: "center",
          isTruncated: !0,
          maxWidth: "85%",
          children: _v8?.formattedAddress && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v385.UserLocation, {
              boxSize: "xs",
              color: "text-secondary"
            }), (0, _v1.jsx)(_v157.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v8?.formattedAddress
            })]
          })
        })]
      });
    },
    _v388 = ({
      item: _v0,
      onClick: _v1
    }) => {
      let {
          name: _v2,
          pictures: _v3,
          link: _v4,
          locationDetails: _v5
        } = _v0,
        [_v6, _v7] = (0, _v386.getAvatarImages)(_v3?.sizes);
      return (0, _v1.jsxs)(_v238.HStack, {
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
        children: ["+", (0, _v1.jsx)(_v155.Box, {
          h: (0, _v9.rem)(64),
          w: (0, _v9.rem)(64),
          borderRadius: "100%",
          border: "1px solid",
          borderColor: "stroke",
          children: (0, _v1.jsx)(_v384.Avatar, {
            size: "auto",
            alt: _v2,
            src: _v6,
            srcSet: _v7,
            nameProps: {
              name: _v2
            }
          })
        }), (0, _v1.jsxs)(_v239.VStack, {
          justifyContent: "center",
          alignItems: "start",
          children: [(0, _v1.jsx)(_v157.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            isTruncated: !0,
            children: _v2
          }), _v5?.formattedAddress && (0, _v1.jsx)(_v157.Text, {
            variant: "body-sm",
            color: "text-secondary",
            isTruncated: !0,
            children: _v5?.formattedAddress
          })]
        }), (0, _v1.jsx)(_v159.Button, {
          as: "a",
          href: _v4,
          variant: "secondary",
          size: "sm",
          borderRadius: "sm",
          paddingX: "3",
          marginLeft: "auto",
          onClick: _v1,
          children: _v79.VIEW_PROFILE
        })]
      });
    };
  var _v389 = _v0.i(0),
    _v390 = _v0.i(0),
    _v391 = _v0.i(0);
  let _v392 = _v0 => (0, _v1.jsx)(_v391.Card, {
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
    _v393 = ({
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
      return (0, _v1.jsxs)(_v392, {
        href: _v8,
        borderRadius: "lg",
        onClick: _v2,
        onContextMenu: _v2,
        onMouseEnter: _v3,
        onMouseLeave: _v4,
        "data-testid": "channel-group-result",
        children: [(0, _v1.jsx)(_v389.AspectRatio, {
          ratio: 16 / 9,
          children: _v7?.sizes[3].link ? (0, _v1.jsx)(_v155.Box, {
            as: "img",
            src: _v7?.sizes[3].link,
            alt: "thumbnail",
            borderRadius: "md"
          }) : (0, _v1.jsx)(_v155.Box, {
            bgColor: "slate.100",
            borderRadius: "md"
          })
        }), (0, _v1.jsxs)(_v390.Stack, {
          gap: "xs",
          paddingX: "xs",
          children: [(0, _v1.jsx)(_v157.Text, {
            variant: "heading-sm",
            children: _v5
          }), (0, _v1.jsxs)(_v157.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: [_v79.videoCount(_v6?.connections?.videos?.total), " ·", " ", _v79.userCount(_v1, _v6?.connections?.users?.total)]
          })]
        })]
      });
    };
  var _v394 = _v0.i(0),
    _v395 = _v0.i(0),
    _v396 = _v0.i(0),
    _v397 = _v0.i(0),
    _v398 = _v0.i(0);
  let _v399 = () => (0, _v1.jsx)("svg", {
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
  var _v400 = _v0.i(0);
  let _v401 = {
      clip: ({
        item: _v0,
        onClick: _v1,
        onMouseEnter: _v2,
        onMouseLeave: _v3,
        position: _v4
      }) => {
        let _v5 = (0, _v3.useContext)(_v66.ViewerContext),
          {
            openAuthModal: _v6
          } = (0, _v3.useContext)(_v274),
          {
            sendWatchLaterEvent: _v7
          } = _v234(),
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
          _v19 = _v18 ? _v79.REMOVE_WATCH_LATER : _v79.ADD_WATCH_LATER,
          _v20 = _v125(_v15),
          {
            updateWatchLater: _v21
          } = function (_v0) {
            let {
                mutate: _v1
              } = _v227(),
              [_v2] = (0, _v400.usePutMeWatchlater)(),
              [_v3] = (0, _v400.useDeleteMeWatchlater)();
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
        return (0, _v1.jsx)(_v392, {
          as: "div",
          borderRadius: "lg",
          onClick: _v1,
          onContextMenu: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3,
          children: (0, _v1.jsx)(_v398.VideoCard, {
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
            topLeftDecoration: _v17?.type?.includes("staffpick") ? (0, _v1.jsx)(_v399, {}) : void 0,
            topRightDecoration: (0, _v1.jsx)(_v162.Tooltip, {
              label: _v19,
              placement: "top",
              children: (0, _v1.jsx)(_v171.IconButton, {
                onClick: _v0 => {
                  _v0.stopPropagation(), _v0.preventDefault(), _v5?.user ? _v21(_v18) : _v6(), _v7({
                    entityType: _v123.clip,
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
                icon: _v18 ? (0, _v1.jsx)(_v397.ClockFilled, {}) : (0, _v1.jsx)(_v394.Clock, {}),
                opacity: 0,
                transition: "opacity 200ms ease-in-out",
                _groupHover: {
                  opacity: 1
                }
              })
            }),
            bottomLeftDecoration: (0, _v1.jsxs)(_v8.Flex, {
              children: [(0, _v1.jsx)(_v159.Button, {
                "aria-label": "likes",
                variant: "tertiary",
                size: "xs",
                color: "gray.50",
                leftIcon: (0, _v1.jsx)(_v396.Heart, {}),
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
              }), (0, _v1.jsx)(_v159.Button, {
                "aria-label": "comments",
                variant: "tertiary",
                size: "xs",
                color: "gray.50",
                leftIcon: (0, _v1.jsx)(_v395.CommentList, {}),
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
        let _v16 = (0, _v25.useBreakpointValue)({
          base: !1,
          lg: !0
        });
        return (0, _v1.jsxs)(_v392, {
          href: _v13,
          borderRadius: "xl",
          onClick: _v1,
          onContextMenu: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3,
          "data-testid": "ondemand-result",
          children: [(0, _v1.jsxs)(_v155.Box, {
            position: "relative",
            children: [(0, _v1.jsx)(_v389.AspectRatio, {
              ratio: 2 / 3,
              children: (0, _v1.jsx)(_v155.Box, {
                as: "img",
                src: _v12?.sizes[0].link,
                alt: _v11,
                borderRadius: "md"
              })
            }), _v15 && (0, _v1.jsx)(_v241.DarkMode, {
              children: (0, _v1.jsx)(_v157.Text, {
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
          }), (0, _v1.jsx)(_v162.Tooltip, {
            label: (0, _v1.jsx)(_v155.Box, {
              maxW: (0, _v9.rem)(600),
              children: _v11
            }),
            placement: "top",
            isDisabled: !(_v8 && _v16),
            children: (0, _v1.jsx)(_v157.Text, {
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
        let _v4 = (0, _v25.useBreakpointValue)({
            base: !0,
            sm: !1
          }, {
            fallback: "md"
          }) || !1,
          _v5 = (0, _v25.useBreakpointValue)({
            sm: !0,
            lg: !1
          }) || !1;
        return _v4 ? (0, _v1.jsx)(_v388, {
          item: _v0,
          onClick: _v1
        }) : _v5 ? (0, _v1.jsx)(_v387, {
          item: _v0,
          isSmallScreen: !0,
          onClick: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3
        }) : (0, _v1.jsx)(_v383.UserCard, {
          user: _v0,
          profileUrl: _v0.link,
          offset: [0, -210],
          placement: "bottom",
          flip: !1,
          onProfileClick: _v1,
          children: (0, _v1.jsx)(_v155.Box, {
            height: "min-content",
            children: (0, _v1.jsx)(_v387, {
              item: _v0,
              onMouseEnter: _v2,
              onMouseLeave: _v3
            })
          })
        });
      },
      channel: _v393,
      group: _v393
    },
    _v402 = () => {
      let _v0 = (0, _v3.useRef)(null),
        _v1 = (0, _v3.useRef)(void 0),
        {
          appliedFiltersSortAndQuery: _v2,
          query: _v3,
          sort: _v4,
          page: _v5,
          filters: _v6,
          onFilterChange: _v7,
          updatePage: _v8
        } = _v216(),
        {
          isLoading: _v9,
          data: _v10,
          error: _v11
        } = _v227(),
        _v12 = (0, _v3.useRef)(_v4),
        _v13 = (() => {
          let {
              type: _v0 = _v85.options.clip.value
            } = _v216(),
            _v1 = _v379[_v0] ?? "280px";
          return (0, _v3.useMemo)(() => ({
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: `repeat(auto-fill, minmax(${_v1}, 1fr))`
          }), [_v1]);
        })(),
        _v14 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          sendHoverEvent: _v15,
          sendClickEvent: _v16,
          sendSearchResultsPage: _v17
        } = _v234(),
        {
          toggleSearchType: _v18
        } = (0, _v3.useContext)(_v151),
        _v19 = _v10?.parameters?.filters?.type?.values[0] || _v85.options.clip.value,
        _v20 = _v401[_v19],
        _v21 = _v19 === _v85.options.people.value;
      return ((0, _v3.useEffect)(() => {
        let _v0 = _v0 => {
          let _v1 = _v0.detail;
          _v1.searchType === _v37 ? _v18(_v0) : _v7("q", _v1.query);
        };
        return document.addEventListener("omnisearchQueryChange", _v0), () => document.removeEventListener("omnisearchQueryChange", _v0);
      }, [_v6]), (0, _v3.useEffect)(() => {
        if (_v10?.data) {
          let _v0 = (0, _v213.default)(_v2, _v28),
            {
              bpFilters: _v1
            } = _v130(_v6, _v14?.user?.id);
          (({
            searchId: _v0,
            data: _v1,
            filters: _v2,
            sort: _v3,
            query: _v4,
            type: _v5,
            ownerId: _v6
          }) => {
            let _v7 = (_v1?.page - 1) * 24;
            (({
              totalResults: _v0,
              searchId: _v1,
              sort: _v2,
              filters: _v3,
              offset: _v4,
              ownerId: _v5,
              query: _v6,
              type: _v7
            }) => _v293.BigPictureClient.sendEvent(new _v293.Event("search_request", 16, {
              ip: null,
              search_type: `search.${_v7}`,
              hits: _v0,
              query: _v6 || null,
              search_id: _v1,
              request_time: new Date().getTime(),
              offset: _v4,
              limit: 24,
              sort: _v2,
              path: window.location.pathname,
              headers: [],
              filters: _v3,
              params: "",
              user_preference_disabled: !1,
              source: {
                source_name: "public",
                component: null,
                variation: null
              },
              type: {
                entities: "people" === _v7 ? ["user"] : [_v7],
                method: "search"
              },
              owner_id: _v5 || null,
              precision: null
            })))({
              totalResults: _v1?.total,
              searchId: _v0,
              sort: _v3,
              filters: _v2,
              offset: _v7,
              ownerId: _v6,
              query: _v4,
              type: _v5
            }), _v1?.data?.forEach((_v0, _v1) => {
              (({
                index: _v0,
                type: _v1,
                searchId: _v2,
                ownerId: _v3,
                resultUri: _v4
              }) => _v293.BigPictureClient.sendEvent(new _v293.Event("search_result", 14, {
                position: _v0 + 1,
                score: 0,
                result_id: _v125(_v4).toString() ?? null,
                result_type: _v1,
                search_id: _v2,
                params: null,
                owner_id: _v3 || null,
                uri: _v4,
                search_result_timestamp: null,
                result_attributes: null,
                path: window.location.pathname,
                moments_count: null,
                source: "public"
              })))({
                index: _v1,
                type: _v5,
                searchId: _v0,
                ownerId: _v6,
                resultUri: _v0[_v5].uri
              });
            });
          })({
            searchId: _v0,
            data: _v10,
            filters: _v1,
            sort: _v4 ?? null,
            query: _v3,
            type: _v19,
            ownerId: _v14?.teamUser?.ownerId
          }), _v12.current === _v4 ? _v17() : _v12.current = _v4;
        }
      }, [_v10]), _v11) ? (0, _v1.jsx)(_v296, {}) : !_v10 || _v9 || _v10.data && _v10.data?.length !== 0 ? (0, _v1.jsxs)(_v8.Flex, {
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
        children: [(0, _v1.jsx)(_v156.Grid, {
          templateColumns: _v13,
          gap: "sm",
          marginBottom: {
            base: void 0,
            lg: _v21 ? (0, _v9.rem)(112) : void 0
          },
          position: "relative",
          children: _v9 || !_v10 ? (0, _v1.jsx)(_v382, {}) : (0, _v1.jsx)(_v1.Fragment, {
            children: _v10?.data?.map((_v0, _v1) => (0, _v1.jsx)(_v20, {
              item: _v0[_v19],
              type: _v19,
              position: _v1,
              onClick: () => {
                (({
                  searchId: _v0,
                  ownerId: _v1,
                  type: _v2,
                  resultUri: _v3
                }) => {
                  _v293.BigPictureClient.sendEvent(new _v293.Event("search_result_interaction", 8, {
                    result_id: _v125(_v3).toString() ?? null,
                    result_type: _v2,
                    action: "click",
                    search_id: _v0,
                    params: null,
                    owner_id: _v1 || null,
                    path: window.location.pathname,
                    moments_count: null,
                    source: "public"
                  }));
                })({
                  searchId: (0, _v213.default)(_v2, _v28),
                  ownerId: _v14?.teamUser?.ownerId,
                  type: _v19,
                  resultUri: _v0[_v19].uri
                }), _v16({
                  entityType: _v123[_v19],
                  position: _v1,
                  uri: _v0[_v19].uri
                });
              },
              onMouseEnter: () => {
                _v1.current = setTimeout(() => {
                  _v15({
                    entityType: _v123[_v19],
                    position: _v1,
                    uri: _v0[_v19].uri
                  });
                }, 500);
              },
              onMouseLeave: () => clearTimeout(_v1.current)
            }, _v1))
          })
        }), (0, _v1.jsx)(_v299, {
          scrollContainer: _v0.current,
          updatePage: _v8,
          page: _v5,
          pageSize: 24,
          data: _v10
        })]
      }) : (0, _v1.jsx)(_v377, {});
    };
  var _v403 = _v0.i(0),
    _v404 = _v0.i(0),
    _v405 = _v0.i(0),
    _v406 = _v0.i(0);
  let _v407 = () => {
      let [_v0, _v1] = (0, _v3.useState)(""),
        {
          onFilterChange: _v2
        } = _v216(),
        {
          sendSearchResultsPage: _v3
        } = _v234(),
        {
          data: _v4
        } = (0, _v406.useGetVideo)({
          where: {
            videoId: _v410
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
      return (0, _v1.jsx)(_v241.DarkMode, {
        children: (0, _v1.jsxs)(_v156.Grid, {
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
            children: (0, _v1.jsxs)(_v403.InputGroup, {
              borderRadius: "md",
              size: "lg",
              width: {
                base: (0, _v9.rem)(312),
                sm: (0, _v9.rem)(334),
                md: (0, _v9.rem)(480)
              },
              children: [(0, _v1.jsx)(_v158.Input, {
                onChange: _v0 => _v1(_v0.target.value),
                value: _v0,
                placeholder: _v79.SEARCH_ALL_VIMEO,
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
              }), (0, _v1.jsxs)(_v404.InputRightElement, {
                width: "fit-content",
                children: [_v0 && (0, _v1.jsx)(_v405.CloseXCircleFilled, {
                  color: "text-primary",
                  boxSize: "xs",
                  marginRight: (0, _v9.rem)(8),
                  onClick: () => _v1("")
                }), (0, _v1.jsx)(_v167.SearchMagnifier, {
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
            children: [(0, _v1.jsx)(_v384.Avatar, {
              size: "xs",
              alt: _v4?.user?.name,
              src: _v4?.user?.pictures?.sizes[0].link,
              nameProps: {
                name: _v4?.user?.name ?? ""
              }
            }), (0, _v1.jsxs)(_v239.VStack, {
              marginLeft: "sm",
              marginRight: "xs",
              gap: "0",
              alignItems: "flex-start",
              children: [_v4.name && (0, _v1.jsx)(_v157.Text, {
                variant: "heading-sm",
                isTruncated: !0,
                maxWidth: {
                  base: (0, _v9.rem)(292),
                  md: (0, _v9.rem)(428)
                },
                children: _v4.name
              }), _v4.user.name && (0, _v1.jsx)(_v157.Text, {
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
    _v408 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    _v409 = Math.floor(Math.random() * _v408.length),
    _v410 = _v408[_v409];
  var _v411 = _v0.i(0),
    _v412 = _v0.i(0),
    _v413 = _v0.i(0),
    _v414 = _v0.i(0);
  let _v415 = _v0 => (0, _v1.jsx)(_v414.AccordionItem, {
    ..._v0
  });
  var _v416 = _v0.i(0);
  let _v417 = ({
    isExpanded: _v0,
    nameCopy: _v1
  }) => (0, _v1.jsxs)(_v416.AccordionButton, {
    height: {
      base: (0, _v9.rem)(44),
      md: "unset"
    },
    children: [(0, _v1.jsx)(_v157.Text, {
      variant: {
        base: "heading-sm",
        md: "heading-xs"
      },
      isTruncated: !0,
      children: _v1
    }), (0, _v1.jsx)(_v238.HStack, {
      children: _v0 ? (0, _v1.jsx)(_v333.ChevronUpSmall, {
        boxSize: "xs"
      }) : (0, _v1.jsx)(_v329.ChevronDownSmall, {
        boxSize: "xs"
      })
    })]
  });
  var _v418 = _v0.i(0);
  let _v419 = _v0 => (0, _v1.jsx)(_v418.AccordionPanel, {
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
    _v420 = ({
      filterDetails: _v0,
      selectedValues: _v1
    }) => {
      let {
          sendFilterEvent: _v2
        } = _v234(),
        _v3 = (0, _v25.useBreakpointValue)({
          base: "md",
          md: "sm"
        }),
        {
          onCheckboxChange: _v4,
          onClearFilter: _v5
        } = _v186(),
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
      return (0, _v1.jsx)(_v415, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v417, {
            isExpanded: _v0,
            nameCopy: _v8,
            showResetButton: _v11,
            onResetClick: () => {
              _v5(_v7), _v12(_v30, null);
            }
          }), (0, _v1.jsx)(_v419, {
            children: (0, _v1.jsx)(_v390.Stack, {
              direction: "column",
              gap: "0",
              children: _v10.map((_v0, _v1) => {
                let _v2 = !!_v1?.[_v6[_v0].value],
                  _v3 = _v6[_v0]?.icon;
                return (0, _v1.jsx)(_v413.Checkbox, {
                  value: _v6[_v0].value,
                  isChecked: _v2,
                  onChange: () => {
                    var _v0;
                    let _v1;
                    return _v1 = _v142(_v4({
                      name: _v7,
                      value: _v0 = _v6[_v0].value,
                      isChecked: _v2
                    }), _v7), void _v12(_v141(_v6, _v0), _v1);
                  },
                  paddingY: "sm",
                  size: _v3,
                  children: (0, _v1.jsxs)(_v157.Text, {
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
  var _v421 = _v0.i(0),
    _v422 = _v0.i(0),
    _v423 = _v0.i(0);
  let _v424 = () => {
    let {
        onLibraryFilterChange: _v0,
        onClearFilter: _v1,
        customMetadata: _v2
      } = _v186(),
      {
        trackFilterByCustomMetadata: _v3
      } = (0, _v423.useLibraryTracking)();
    return (0, _v1.jsx)(_v421.CustomMetadataFilterAccordion, {
      serializedFilter: _v2,
      onChange: _v0 => {
        null === _v0 ? _v1(_v82) : (_v0(_v82, _v0), _v3({
          appliedFilters: (0, _v422.countCustomMetadataClauses)(_v0)
        }));
      }
    });
  };
  var _v425 = _v0.i(0);
  let _v426 = () => {
    let {
        sendFilterEvent: _v0
      } = _v234(),
      _v1 = (0, _v3.useContext)(_v66.ViewerContext),
      [_v2, _v3] = (0, _v3.useState)("custom"),
      {
        onLibraryFilterChange: _v4,
        onClearFilter: _v5,
        date: _v6
      } = _v186(),
      [_v7, _v8] = _v6?.split(",") ?? [],
      _v9 = _v7 && _v8 ? [_v146(_v7), _v146(_v8)] : void 0,
      [_v10, _v11] = (0, _v3.useState)(_v9),
      {
        options: _v12,
        name: _v13,
        nameCopy: _v14,
        untranslatedCopy: _v15
      } = _v103,
      _v16 = () => {
        _v5(_v13), _v0({
          copy: _v30,
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
    return (0, _v1.jsx)(_v415, {
      children: ({
        isExpanded: _v0
      }) => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v417, {
          isExpanded: _v0,
          nameCopy: _v14,
          showResetButton: !!_v6,
          onResetClick: _v16
        }), (0, _v1.jsx)(_v419, {
          pb: {
            base: "md",
            md: "3"
          },
          children: (0, _v1.jsx)(_v425.DateRangePicker, {
            value: _v10,
            locale: _v1?.locale ?? "en-US",
            maxDate: _v146(),
            minDate: _v146("1980-01-01"),
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
  var _v427 = _v0.i(0);
  let _v428 = ({
    searchTerm: _v0,
    onInputChange: _v1,
    onClearClick: _v2,
    placeholder: _v3 = _v79.SEARCH
  }) => (0, _v1.jsxs)(_v403.InputGroup, {
    size: {
      base: "md",
      md: "sm"
    },
    marginBottom: "sm",
    children: [(0, _v1.jsx)(_v158.Input, {
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
    }), (0, _v1.jsx)(_v404.InputLeftElement, {
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
      children: (0, _v1.jsx)(_v167.SearchMagnifier, {
        boxSize: {
          base: (0, _v9.rem)(20),
          md: (0, _v9.rem)(14)
        }
      })
    }), !!_v0 && (0, _v1.jsx)(_v404.InputRightElement, {
      width: "max-content",
      height: "100%",
      paddingLeft: (0, _v9.rem)(8),
      paddingRight: {
        base: (0, _v9.rem)(16),
        md: (0, _v9.rem)(12)
      },
      children: (0, _v1.jsx)(_v405.CloseXCircleFilled, {
        boxSize: {
          base: (0, _v9.rem)(20),
          md: (0, _v9.rem)(14)
        },
        "aria-label": _v79.CLEAR,
        onClick: _v2
      })
    })]
  });
  var _v429 = _v0.i(0);
  let _v430 = ({
      height: _v0
    }) => (0, _v1.jsx)(_v239.VStack, {
      width: "100%",
      height: _v0,
      justifyContent: "center",
      alignItems: "center",
      children: (0, _v1.jsx)(_v429.Spinner, {
        "data-testid": "loader-icon",
        size: "md"
      })
    }),
    _v431 = ({
      selectedLength: _v0,
      headerCopy: _v1,
      onSelectedCountClick: _v2
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: _v0 > 0 ? (0, _v1.jsx)(_v159.Button, {
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
        children: (0, _v1.jsx)(_v157.Text, {
          variant: "heading-xs",
          height: (0, _v9.rem)(40),
          lineHeight: (0, _v9.rem)(40),
          color: "text-primary",
          _hover: {
            color: "text-secondary"
          },
          children: (0, _v77.translate)({
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
      }) : (0, _v1.jsx)(_v157.Text, {
        variant: "heading-xs",
        height: (0, _v9.rem)(40),
        lineHeight: (0, _v9.rem)(40),
        color: "text-secondary",
        children: _v1
      })
    }),
    _v432 = () => (0, _v1.jsxs)(_v239.VStack, {
      width: "100%",
      height: (0, _v9.rem)(136),
      justifyContent: "center",
      alignItems: "center",
      children: [(0, _v1.jsx)(_v157.Text, {
        "aria-live": "polite",
        variant: "heading-sm",
        children: _v79.NO_FILTER_RESULTS
      }), (0, _v1.jsx)(_v157.Text, {
        "aria-live": "polite",
        variant: "body-sm",
        color: "text-secondary",
        children: _v79.TRY_ANOTHER_SEARCH
      })]
    }),
    _v433 = _v0 => (0, _v1.jsx)(_v159.Button, {
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
    _v434 = () => {
      let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          sendFilterEvent: _v1
        } = _v234(),
        {
          onCheckboxChange: _v2,
          onClearFilter: _v3,
          folderIncluded: _v4,
          folderExcluded: _v5
        } = _v186(),
        [_v6, {
          data: _v7
        }] = (0, _v228.useGetUserItemsLazy)(),
        [_v8, _v9] = (0, _v3.useState)(""),
        [_v10, _v11] = (0, _v3.useState)({}),
        [_v12, _v13] = (0, _v3.useState)(!!_v4),
        [_v14, _v15] = (0, _v3.useState)(!1),
        [_v16, _v17] = (0, _v3.useState)({}),
        _v18 = (0, _v3.useRef)(!1),
        _v19 = (0, _v427.useDebouncedValue)(_v8, 500),
        {
          data: _v20,
          isLoading: _v21
        } = (0, _v228.useGetUserItems)(() => _v0?.user ? {
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
          select: _v55
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
            select: _v55
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
        } = _v102,
        _v33 = _v19 && _v24 ? _v79.SELECT_FOLDERS : _v79.LAST_MODIFIED,
        _v34 = () => {
          _v9(""), _v25 > 0 && _v13(!0);
        },
        _v35 = _v0 => {
          _v0.target.value ? (_v9(_v0.target.value), _v13(!1)) : _v34();
        },
        _v36 = (_v0, _v1) => _v0 ? [..._v0.split(",").map(_v0 => `in:${_v0}`), ...(_v1 ? _v1.split(",").map(_v0 => `excluded:${_v0}`) : [])] : null,
        _v37 = () => {
          _v3([_v29, _v30]), _v11({}), _v17({}), _v13(!1), _v1({
            copy: _v30,
            value: null,
            valueName: _v32,
            previousValue: _v36(_v4, _v5)
          });
        };
      return (0, _v1.jsx)(_v415, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v417, {
            isExpanded: _v0,
            nameCopy: _v31,
            showResetButton: _v28,
            onResetClick: _v37
          }), (0, _v1.jsxs)(_v419, {
            children: [(0, _v1.jsx)(_v428, {
              searchTerm: _v8,
              onInputChange: _v35,
              onClearClick: _v34,
              placeholder: _v79.SEARCH_FOLDERS
            }), (0, _v1.jsx)(_v1.Fragment, {
              children: _v21 || !_v20 ? (0, _v1.jsx)(_v430, {
                height: (0, _v9.rem)(136)
              }) : (0, _v1.jsx)(_v1.Fragment, {
                children: _v20?.data?.length === 0 ? (0, _v1.jsx)(_v432, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v431, {
                    selectedLength: _v25,
                    headerCopy: _v33,
                    onSelectedCountClick: () => _v13(!0)
                  }), (0, _v1.jsx)(_v239.VStack, {
                    gap: "0",
                    alignItems: "flex-start",
                    children: _v27?.map((_v0, _v1) => {
                      let {
                        folder: _v2
                      } = _v0;
                      if (!_v2) return;
                      let _v3 = _v2?.uri.split("/")[4],
                        _v4 = !!_v22?.[_v3] || !!_v16[_v3];
                      return (0, _v1.jsx)(_v435, {
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
            }), _v26 && (0, _v1.jsx)(_v433, {
              onClick: () => _v15(!_v14),
              children: _v14 ? _v79.SHOW_LESS : _v79.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v435 = ({
      folderName: _v0,
      isChecked: _v1,
      onChange: _v2
    }) => {
      let _v3 = (0, _v25.useBreakpointValue)({
        base: "md",
        md: "sm"
      });
      return (0, _v1.jsx)(_v413.Checkbox, {
        isChecked: _v1,
        onChange: _v2,
        paddingY: "sm",
        size: _v3,
        children: (0, _v1.jsx)(_v239.VStack, {
          justifyContent: "space-between",
          alignItems: "start",
          gap: "xs",
          children: (0, _v1.jsx)(_v157.Text, {
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
  var _v436 = _v0.i(0);
  let _v437 = ["active", "user.name", "user.pictures.sizes", "user.uri"],
    _v438 = () => {
      let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          sendFilterEvent: _v1
        } = _v234(),
        {
          onCheckboxChange: _v2,
          onClearFilter: _v3,
          uploader: _v4
        } = _v186(),
        [_v5, _v6] = (0, _v3.useState)(""),
        [_v7, _v8] = (0, _v3.useState)({}),
        [_v9, _v10] = (0, _v3.useState)(!!_v4),
        [_v11, _v12] = (0, _v3.useState)(!1),
        _v13 = (0, _v3.useRef)(!1),
        _v14 = (0, _v427.useDebouncedValue)(_v5, 500),
        {
          data: _v15,
          isLoading: _v16
        } = (0, _v436.useGetUserTeammembers)(() => _v0?.user ? {
          where: {
            userId: _v0?.teamUser?.ownerId || _v0?.user?.id
          },
          query: {
            excludeInvisible: !1,
            perPage: 10,
            query: _v14,
            users: _v13.current ? void 0 : _v4
          },
          select: _v437
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
        _v22 = _v14 && _v18 ? _v79.SELECT_USERS : _v79.LAST_ACTIVE,
        _v23 = !!_v17,
        {
          name: _v24,
          nameCopy: _v25,
          untranslatedCopy: _v26
        } = _v101,
        _v27 = () => {
          _v6(""), _v19 > 0 && _v10(!0);
        },
        _v28 = _v0 => {
          _v0.target.value ? (_v6(_v0.target.value), _v10(!1)) : _v27();
        },
        _v29 = () => {
          _v3(_v24), _v8({}), _v10(!1), _v1({
            copy: _v30,
            value: null,
            valueName: _v26 ?? _v25,
            previousValue: Object.keys(_v7)
          });
        };
      return (0, _v1.jsx)(_v415, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v417, {
            isExpanded: _v0,
            nameCopy: _v25,
            showResetButton: _v23,
            onResetClick: _v29
          }), (0, _v1.jsxs)(_v419, {
            children: [(0, _v1.jsx)(_v428, {
              searchTerm: _v5,
              onInputChange: _v28,
              onClearClick: _v27
            }), (0, _v1.jsx)(_v1.Fragment, {
              children: _v16 ? (0, _v1.jsx)(_v430, {
                height: (0, _v9.rem)(136)
              }) : (0, _v1.jsx)(_v1.Fragment, {
                children: _v15?.data?.length === 0 ? (0, _v1.jsx)(_v432, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v431, {
                    selectedLength: _v19,
                    headerCopy: _v22,
                    onSelectedCountClick: () => _v10(!0)
                  }), (0, _v1.jsx)(_v239.VStack, {
                    gap: "0",
                    alignItems: "flex-start",
                    children: _v21?.map((_v0, _v1) => {
                      let {
                        user: _v2
                      } = _v0;
                      if (!_v2) return;
                      let _v3 = _v2?.uri.split("/")[2],
                        _v4 = !!_v17?.[_v3];
                      return (0, _v1.jsx)(_v439, {
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
            }), _v20 && (0, _v1.jsx)(_v433, {
              onClick: () => _v12(!_v11),
              children: _v11 ? _v79.SHOW_LESS : _v79.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v439 = ({
      userInfo: _v0,
      isChecked: _v1,
      onChange: _v2
    }) => {
      let _v3 = (0, _v25.useBreakpointValue)({
          base: "md",
          md: "sm"
        }),
        {
          active: _v4,
          user: _v5
        } = _v0;
      return (0, _v1.jsx)(_v413.Checkbox, {
        isChecked: _v1,
        onChange: _v2,
        paddingY: "sm",
        size: _v3,
        children: (0, _v1.jsxs)(_v238.HStack, {
          gap: "0",
          children: [(0, _v1.jsx)(_v384.Avatar, {
            size: "sm",
            alt: _v79.PROFILE_PICTURE,
            src: _v5?.pictures?.sizes?.[0]?.link,
            nameProps: {
              name: _v5?.name ?? ""
            }
          }), (0, _v1.jsxs)(_v238.HStack, {
            justifyContent: "space-between",
            children: [(0, _v1.jsx)(_v157.Text, {
              variant: {
                base: "body-lg",
                md: "body-md"
              },
              isTruncated: !0,
              width: _v4 ? (0, _v9.rem)(120) : (0, _v9.rem)(50),
              marginLeft: "sm",
              children: _v5?.name
            }), !_v4 && (0, _v1.jsx)(_v243.Badge, {
              color: "text-secondary",
              backgroundColor: "stroke",
              size: "sm",
              children: _v79.DEACTIVATED
            })]
          })]
        })
      });
    },
    _v440 = () => {
      let {
          type: _v0,
          queryFields: _v1,
          privacy: _v2
        } = _v186(),
        {
          hasAutoClosedCaptions: _v3,
          hasTeamPrivacy: _v4
        } = _v67(),
        {
          settings: _v5
        } = (0, _v64.useOrionSettings)(),
        {
          fields: _v6,
          isLoading: _v7
        } = (0, _v412.useTeamCustomMetadataFields)({
          enabled: _v5.show_custom_metadata
        }),
        _v8 = _v6.length > 0,
        _v9 = _v5.show_custom_metadata && !_v7 && _v8,
        _v10 = ((_v0, _v1 = _v97.options.default.value) => {
          let _v2 = structuredClone(_v98);
          switch (_v1) {
            case _v97.options.default.value:
            case _v97.options.folder.value:
              _v2.options = {
                title: _v2.options.title
              };
              break;
            case _v97.options.showcase.value:
            case _v97.options.live_event.value:
              _v2.options = {
                title: _v2.options.title,
                description: _v2.options.description,
                tags: _v2.options.tags
              };
              break;
            case _v97.options.video.value:
              _v0 || delete _v2.options.transcript;
          }
          return _v2;
        })(_v3, _v0),
        _v11 = _v0 => _v0?.split(",")?.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1]: !0
        }), {}),
        _v12 = _v0 !== _v97.options.folder.value,
        _v13 = _v0 !== _v97.options.showcase.value,
        _v14 = _v100();
      return _v4 || (_v14.options = Object.fromEntries(Object.entries(_v14.options).filter(([_v0]) => _v0 !== _v78.DEFAULT_PRIVACY_VALUES.TEAM))), (0, _v1.jsxs)(_v411.Accordion, {
        allowMultiple: !0,
        allowToggle: !0,
        defaultIndex: [...Array(_v9 ? 12 : 11).keys()],
        marginBottom: "sm",
        gap: {
          base: "md",
          md: "sm"
        },
        children: [(0, _v1.jsx)(_v420, {
          selectedValues: _v11(_v1),
          filterDetails: _v10
        }), _v13 && (0, _v1.jsx)(_v434, {}), (0, _v1.jsx)(_v426, {}), _v12 && (0, _v1.jsx)(_v420, {
          selectedValues: _v11(_v2),
          filterDetails: _v14
        }), (0, _v1.jsx)(_v438, {}), _v9 && (0, _v1.jsx)(_v424, {})]
      });
    };
  var _v441 = _v0.i(0),
    _v442 = _v0.i(0);
  let _v443 = () => {
    let {
        sendSortEvent: _v0
      } = _v234(),
      {
        sort: _v1,
        onLibraryFilterChange: _v2
      } = _v186(),
      _v3 = _v1 || _v120.relevance.value;
    return (0, _v1.jsx)(_v264.Menu, {
      children: (0, _v1.jsx)(_v441.MenuOptionGroup, {
        defaultValue: _v3,
        type: "radio",
        onChange: _v0 => {
          let _v1 = null;
          for (let _v0 of Object.values(_v120)) if (_v0.value === _v0) {
            _v1 = _v0.untranslatedText;
            break;
          }
          _v0({
            copy: _v1,
            value: _v0,
            previousValue: _v3
          }), _v2(_v36, _v0);
        },
        children: Object.keys(_v120).map((_v0, _v1) => (0, _v1.jsx)(_v442.MenuItemOption, {
          value: _v120[_v0].value,
          children: _v120[_v0].text
        }, _v1))
      })
    });
  };
  var _v444 = _v0.i(0),
    _v445 = _v0.i(0);
  let _v446 = () => {
    let _v0,
      _v1 = (0, _v2.useRouter)(),
      _v2 = (0, _v3.useContext)(_v66.ViewerContext),
      {
        searchType: _v3
      } = (0, _v3.useContext)(_v151),
      {
        query: _v4,
        type: _v5
      } = _v216(),
      _v6 = _v85.options.people.value,
      _v7 = _v85.options.clip.value,
      _v8 = _v5 !== _v6,
      _v9 = _v3 === _v149,
      {
        data: _v10,
        isLoading: _v11
      } = _v224(() => _v1.isReady && _v2?.apiUrl && _v8 && _v9 ? {
        select: ["clip.name"],
        query: {
          filterType: _v5 ? _v85.options[_v5].value : _v7,
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
          text: _v79.ANY
        }
      }, _v12.options.forEach(_v0 => {
        _v0.total > 0 && (_v0[_v0.name] = {
          value: _v0.name,
          text: _v0.text
        });
      }), {
        nameCopy: _v5 === _v85.options.ondemand.value ? _v79.GENRES : _v79.CATEGORIES,
        name: _v12.name,
        options: _v0
      })
    };
  };
  var _v447 = _v0.i(0),
    _v448 = _v0.i(0);
  let _v449 = ({
      value: _v0,
      filterDetails: _v1,
      onChange: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(!1),
        _v5 = (0, _v25.useBreakpointValue)({
          base: "md",
          md: "sm"
        }),
        {
          onFilterChange: _v6
        } = _v216(),
        {
          sendFilterEvent: _v7
        } = _v234(),
        {
          options: _v8,
          name: _v9,
          nameCopy: _v10,
          untranslatedCopy: _v11
        } = _v1,
        _v12 = _v8.default?.value,
        _v13 = _v0 && _v8[_v0] ? _v8[_v0].value : _v12,
        _v14 = _v9 === _v85.name,
        _v15 = Object.keys(_v8),
        _v16 = _v15.length > 8,
        _v17 = _v3 ? _v15 : _v15.slice(0, 8),
        _v18 = !_v14 && void 0 !== _v0;
      return (0, _v1.jsx)(_v415, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v417, {
            isExpanded: _v0,
            nameCopy: _v10,
            showResetButton: _v18,
            onResetClick: () => {
              _v6(_v9, "default"), _v7({
                copy: _v30,
                value: [_v12],
                valueName: _v11 ?? _v10,
                previousValue: [_v13]
              });
            }
          }), (0, _v1.jsxs)(_v419, {
            children: [(0, _v1.jsx)(_v447.RadioGroup, {
              onChange: _v0 => {
                _v7({
                  copy: _v141(_v8, _v0),
                  value: [_v0],
                  valueName: _v11 ?? _v10,
                  previousValue: [_v13]
                }), _v2 ? _v2(_v9, _v0) : _v6(_v9, _v0);
              },
              value: _v13,
              defaultValue: _v12,
              children: (0, _v1.jsx)(_v390.Stack, {
                direction: "column",
                gap: "0",
                children: _v17.map(_v0 => (0, _v1.jsx)(_v448.Radio, {
                  size: _v5,
                  value: _v8[_v0].value,
                  paddingY: (0, _v9.rem)(8),
                  children: (0, _v1.jsx)(_v157.Text, {
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
            }), _v16 && (0, _v1.jsx)(_v433, {
              onClick: () => _v4(!_v3),
              children: _v3 ? _v79.SHOW_LESS : _v79.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v450 = () => {
      let {
          updated: _v0,
          category: _v1
        } = _v216(),
        {
          categoryFilter: _v2
        } = _v446();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v449, {
          value: _v0,
          filterDetails: _v84
        }), _v2 && (0, _v1.jsx)(_v449, {
          value: _v1,
          filterDetails: _v2
        })]
      });
    },
    _v451 = () => {
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
        } = _v216(),
        {
          categoryFilter: _v10
        } = _v446();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v10 && (0, _v1.jsx)(_v449, {
          value: _v9,
          filterDetails: _v10
        }), (0, _v1.jsx)(_v449, {
          value: _v0,
          filterDetails: _v86
        }), (0, _v1.jsx)(_v449, {
          value: _v1,
          filterDetails: _v87
        }), (0, _v1.jsx)(_v449, {
          value: _v2,
          filterDetails: _v88
        }), (0, _v1.jsx)(_v449, {
          value: _v3,
          filterDetails: _v89
        }), (0, _v1.jsx)(_v449, {
          value: _v4,
          filterDetails: _v90
        }), (0, _v1.jsx)(_v449, {
          value: _v5,
          filterDetails: _v91
        }), (0, _v1.jsx)(_v449, {
          value: _v6,
          filterDetails: _v92
        }), (0, _v1.jsx)(_v449, {
          value: _v7,
          filterDetails: _v93
        }), (0, _v1.jsx)(_v449, {
          value: _v8,
          filterDetails: _v83
        })]
      });
    },
    _v452 = () => {
      let {
          category: _v0
        } = _v216(),
        {
          categoryFilter: _v1
        } = _v446();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v449, {
          value: _v0,
          filterDetails: _v1
        })
      });
    },
    _v453 = () => {
      let {
          category: _v0
        } = _v216(),
        {
          categoryFilter: _v1
        } = _v446();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v449, {
          value: _v0,
          filterDetails: _v1
        })
      });
    },
    _v454 = () => {
      let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
        {
          follow: _v1,
          onFilterChange: _v2
        } = _v216(),
        {
          sendFilterEvent: _v3
        } = _v234(),
        _v4 = (0, _v25.useBreakpointValue)({
          base: "md",
          md: "sm"
        });
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v0?.user && (0, _v1.jsx)(_v415, {
          children: ({
            isExpanded: _v0
          }) => (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v417, {
              isExpanded: _v0,
              nameCopy: _v94.nameCopy,
              showResetButton: !!_v1,
              onResetClick: () => {
                _v2(_v94.name, _v94.options.default.value), _v3({
                  copy: _v30,
                  value: [_v94.options.default.value],
                  valueName: _v94.untranslatedCopy ?? _v94.nameCopy,
                  previousValue: [_v1]
                });
              }
            }), (0, _v1.jsx)(_v419, {
              children: (0, _v1.jsx)(_v413.Checkbox, {
                isChecked: !!_v1,
                paddingY: "sm",
                size: _v4,
                onChange: () => {
                  let _v0 = !0 == !!_v1 ? _v94.options.default.value : _v94.options.follow.value;
                  _v2("follow", _v0), _v3({
                    copy: _v94.options.follow.untranslatedText,
                    value: [_v0],
                    valueName: _v94.untranslatedCopy ?? _v94.nameCopy,
                    previousValue: [_v1 ?? _v94.options.default.value]
                  });
                },
                children: _v94.options.follow.text
              })
            })]
          })
        })
      });
    },
    _v455 = () => {
      let {
          type: _v0
        } = _v216(),
        _v1 = (0, _v3.useContext)(_v66.ViewerContext),
        [_v2, _v3] = (0, _v3.useState)(!1),
        _v4 = _v85.options.clip.value,
        _v5 = _v85.options.channel.value,
        _v6 = _v85.options.people.value,
        _v7 = _v85.options.group.value,
        _v8 = _v85.options.ondemand.value;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v411.Accordion, {
          allowMultiple: !0,
          allowToggle: !0,
          defaultIndex: [...Array(11).keys()],
          children: (_v0 => {
            switch (_v0) {
              case _v6:
                return (0, _v1.jsx)(_v454, {});
              case _v5:
                return (0, _v1.jsx)(_v450, {});
              case _v7:
                return (0, _v1.jsx)(_v452, {});
              case _v4:
                return (0, _v1.jsx)(_v451, {});
              case _v8:
                return (0, _v1.jsx)(_v453, {});
              default:
                return;
            }
          })(_v0)
        }), (0, _v1.jsx)(_v159.Button, {
          size: "md",
          variant: "tertiary",
          backgroundColor: "fill-component",
          onClick: () => _v3(!0),
          width: "100%",
          leftIcon: (0, _v1.jsx)(_v444.SettingsGear, {}),
          marginY: "sm",
          justifyContent: "flex-start",
          children: _v79.CONTENT_FILTER
        }), _v1 && (0, _v1.jsx)(_v445.MatureContentModal, {
          open: _v2,
          onClose: () => _v3(!1),
          token: _v1.xsrft,
          ..._v1.contentViewingPrefs
        })]
      });
    },
    _v456 = () => {
      let {
          type: _v0 = _v85.options.clip.value,
          onFilterChange: _v1,
          sort: _v2
        } = _v216(),
        {
          sendSortEvent: _v3
        } = _v234(),
        _v4 = _v119[_v0],
        _v5 = _v2 ?? _v119.clip.relevance.value;
      return (0, _v1.jsx)(_v264.Menu, {
        children: (0, _v1.jsx)(_v441.MenuOptionGroup, {
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
          children: Object.keys(_v4).map((_v0, _v1) => (0, _v1.jsx)(_v442.MenuItemOption, {
            value: _v4[_v0].value,
            children: _v4[_v0].text
          }, _v1))
        })
      });
    };
  var _v457 = _v0.i(0),
    _v458 = _v0.i(0),
    _v459 = _v0.i(0),
    _v460 = _v0.i(0),
    _v461 = _v0.i(0),
    _v462 = _v0.i(0),
    _v463 = _v0.i(0),
    _v464 = _v0.i(0);
  let _v465 = () => {
      let {
          clearFilters: _v0,
          keepPreviousUrl: _v1
        } = _v216(),
        {
          clearLibraryFilters: _v2,
          keepPreviousLibraryUrl: _v3
        } = _v186(),
        {
          panelStatus: _v4,
          togglePanel: _v5,
          isDrawerOpen: _v6
        } = (0, _v3.useContext)(_v60),
        {
          searchType: _v7
        } = (0, _v3.useContext)(_v151),
        _v8 = _v4 === _v31,
        _v9 = _v7 === _v148,
        _v10 = () => {
          if (_v8) return _v9 ? _v3() : _v1();
        };
      return (0, _v1.jsxs)(_v459.Drawer, {
        placement: "bottom",
        isOpen: _v6,
        onClose: () => {
          _v10(), _v5();
        },
        children: [(0, _v1.jsx)(_v464.DrawerOverlay, {}), (0, _v1.jsx)(_v457.motion.div, {
          drag: "y",
          dragConstraints: {
            top: 0,
            bottom: 100
          },
          onDragEnd: (_v0, _v1) => {
            _v1.offset.y < 0 || (_v10(), _v5());
          },
          children: (0, _v1.jsxs)(_v460.DrawerContent, {
            maxHeight: `calc(100vh - ${(0, _v9.rem)(64)})`,
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            sx: {
              '&[data-placement="bottom"]': {
                maxW: "100vw"
              }
            },
            children: [(0, _v1.jsx)(_v458.bokeh.hr, {
              backgroundColor: "text-tertiary",
              alignSelf: "center",
              paddingY: (0, _v9.rem)(2),
              width: (0, _v9.rem)(70),
              border: "none",
              borderRadius: (0, _v9.rem)(10),
              my: "sm"
            }), (0, _v1.jsxs)(_v461.DrawerHeader, {
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              pt: (0, _v9.rem)(4),
              pr: (0, _v9.rem)(28),
              pb: "md",
              pl: (0, _v9.rem)(32),
              children: [(0, _v1.jsx)(_v157.Text, {
                variant: "heading-sm",
                children: _v8 ? _v79.FILTERS : _v79.SORT
              }), (0, _v1.jsx)(_v242.CloseButton, {
                "aria-label": "close button",
                size: "sm",
                variant: "tertiary",
                onClick: () => {
                  _v10(), _v5();
                }
              })]
            }), (0, _v1.jsx)(_v462.DrawerBody, {
              sx: {
                "&&": {
                  pt: "0"
                }
              },
              children: _v8 ? _v9 ? (0, _v1.jsx)(_v440, {}) : (0, _v1.jsx)(_v455, {}) : _v9 ? (0, _v1.jsx)(_v443, {}) : (0, _v1.jsx)(_v456, {})
            }), _v8 && (0, _v1.jsx)(_v463.DrawerFooter, {
              boxSizing: "border-box",
              padding: "0",
              children: (0, _v1.jsxs)(_v156.Grid, {
                templateColumns: "repeat(2, 1fr)",
                gridGap: "md",
                width: "100%",
                height: (0, _v9.rem)(72),
                alignItems: "center",
                paddingX: "md",
                children: [(0, _v1.jsx)(_v159.Button, {
                  size: "md",
                  width: "100%",
                  variant: "tertiary",
                  marginRight: "xs",
                  onClick: () => {
                    _v9 ? _v2() : _v0(), _v5();
                  },
                  children: _v79.RESET_ALL
                }), (0, _v1.jsx)(_v159.Button, {
                  size: "md",
                  variant: "primary",
                  width: "100%",
                  marginRight: "xs",
                  onClick: () => {
                    _v293.BigPictureClient.sendEvent(new _v293.Event("vimeo.click", 151, {
                      name: "apply_search_filters_mobile",
                      feature: "search",
                      location: "filter_bar",
                      page: "search_result_page",
                      type: "general",
                      copy: "Apply",
                      path: window.location.pathname,
                      target: null,
                      click_type: null,
                      device_type: null,
                      target_path: null,
                      third_party_integration: null
                    })), _v5();
                  },
                  children: _v79.APPLY
                })]
              })
            })]
          })
        })]
      });
    },
    _v466 = () => {
      let {
          clearFilters: _v0,
          appliedFiltersCount: _v1
        } = _v216(),
        {
          clearLibraryFilters: _v2,
          appliedFiltersCount: _v3
        } = _v186(),
        {
          panelStatus: _v4,
          hasDrawer: _v5,
          togglePanel: _v6
        } = (0, _v3.useContext)(_v60),
        {
          searchType: _v7
        } = (0, _v3.useContext)(_v151),
        _v8 = (0, _v25.useBreakpointValue)(_v33),
        _v9 = _v7 === _v148,
        _v10 = _v4 === _v31,
        _v11 = _v8 === _v33.sm ? 10 : 40;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v5 ? (0, _v1.jsx)(_v465, {}) : (0, _v1.jsxs)(_v160.Panel, {
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
            maxWidth: _v44
          },
          children: [(0, _v1.jsxs)(_v160.PanelHeader, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "sm",
            pr: "md",
            children: [(0, _v1.jsx)(_v157.Text, {
              variant: "heading-sm",
              children: _v10 ? _v79.FILTERS : _v79.SORT
            }), (0, _v1.jsx)(_v155.Box, {
              children: (0, _v1.jsx)(_v242.CloseButton, {
                "aria-label": "close button",
                size: "sm",
                variant: "tertiary",
                onClick: () => _v6()
              })
            })]
          }), (0, _v1.jsx)(_v160.PanelBody, {
            overflowY: "auto",
            padding: "0",
            pt: "sm",
            pr: "sm",
            sx: {
              scrollbarWidth: "thin",
              scrollbarColor: `${_v34} transparent`
            },
            children: (0, _v1.jsx)(_v155.Box, {
              width: 256,
              children: _v10 ? _v9 ? (0, _v1.jsx)(_v440, {}) : (0, _v1.jsx)(_v455, {}) : _v9 ? (0, _v1.jsx)(_v443, {}) : (0, _v1.jsx)(_v456, {})
            })
          }), (_v9 ? _v3 > 0 : _v1 > 0) && _v10 && (0, _v1.jsx)(_v239.VStack, {
            py: "sm",
            pr: "sm",
            alignSelf: "stretch",
            children: (0, _v1.jsx)(_v159.Button, {
              size: "sm",
              variant: "tertiary",
              width: "100%",
              onClick: () => _v9 ? _v2() : _v0(),
              children: _v79.RESET_ALL
            })
          })]
        })
      });
    };
  var _v467 = _v0.i(0);
  let _v468 = "thumbs_up",
    _v469 = "thumbs_down",
    _v470 = {
      thumbsUp: !1,
      thumbsDown: !1,
      providedFeedback: !1
    };
  function _v471(_v0, _v1) {
    switch (_v1.type) {
      case _v468:
        return {
          thumbsUp: !_v0.thumbsUp,
          thumbsDown: !1,
          providedFeedback: !0
        };
      case _v469:
        return {
          thumbsDown: !_v0.thumbsDown,
          thumbsUp: !1,
          providedFeedback: !0
        };
      default:
        return _v0;
    }
  }
  let _v472 = ({
      onThumbsRate: _v0,
      ..._v1
    }) => {
      let [_v2, _v3] = (0, _v3.useReducer)(_v471, _v470);
      return (0, _v3.useEffect)(() => {
        _v2.providedFeedback && _v0?.(_v2);
      }, [_v2]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v171.IconButton, {
          variant: "tertiary",
          icon: _v2.thumbsUp ? (0, _v1.jsx)(_v184.ThumbUpFilled, {}) : (0, _v1.jsx)(_v183.ThumbUp, {}),
          onClick: () => _v3({
            type: _v468
          }),
          ..._v1,
          "aria-label": "thumbs up"
        }), (0, _v1.jsx)(_v171.IconButton, {
          variant: "tertiary",
          icon: _v2.thumbsDown ? (0, _v1.jsx)(_v182.ThumbDownFilled, {}) : (0, _v1.jsx)(_v181.ThumbDown, {}),
          onClick: () => _v3({
            type: _v469
          }),
          ..._v1,
          "aria-label": "thumbs down"
        })]
      });
    },
    _v473 = () => {
      let {
          panelMoments: _v0
        } = (0, _v3.useContext)(_v60),
        {
          moments: _v1,
          currentIdx: _v2 = 0,
          currentReviewLink: _v3
        } = _v0,
        {
          query: _v4 = ""
        } = _v186();
      if (!_v1) return (0, _v1.jsx)(_v1.Fragment, {});
      let _v5 = _v1[_v2],
        {
          startTime: _v6,
          endTime: _v7,
          contentsHighlight: _v8,
          contents: _v9,
          type: _v10
        } = _v5,
        _v11 = `${(0, _v169.secondsToDisplay)(Math.floor(_v6 / 0))} - ${(0, _v169.secondsToDisplay)(Math.floor(_v7 / 0))}`,
        _v12 = _v138(_v8) || _v4;
      return _v10 === _v124.vis ? (0, _v1.jsx)(_v476, {
        content: _v9,
        timestamp: _v11,
        query: _v12
      }) : _v10 === _v124.comment || _v10 === _v124.commentReply ? (0, _v1.jsx)(_v474, {
        currentMoment: _v5,
        type: _v10,
        query: _v4,
        link: _v3
      }) : (0, _v1.jsxs)(_v155.Box, {
        mx: "sm",
        children: [(0, _v1.jsx)(_v475, {
          mr: "sm",
          children: _v11
        }), (0, _v1.jsx)(_v250.Paragraph, {
          variant: "body-lg",
          display: "inline",
          children: (0, _v1.jsx)(_v347, {
            query: _v12,
            children: _v139(_v9, _v12, 30, 80)
          })
        })]
      });
    },
    _v474 = ({
      currentMoment: _v0,
      query: _v1,
      type: _v2,
      link: _v3 = ""
    }) => {
      let _v4 = (0, _v307.useNotification)(),
        {
          contents: _v5,
          contentsHighlight: _v6,
          metadata: _v7,
          startTime: _v8
        } = _v0,
        _v9 = _v138(_v6) || _v1,
        _v10 = `${(0, _v169.secondsToDisplay)(Math.floor(_v8 / 0))}`,
        _v11 = _v2 === _v124.comment ? _v7.connections.privateComment : _v7.connections.privateCommentReply;
      return (0, _v1.jsxs)(_v238.HStack, {
        borderRadius: "md",
        padding: "sm",
        role: "group",
        cursor: "pointer",
        _hover: {
          background: "fill-component-hover"
        },
        children: [(0, _v1.jsx)(_v155.Box, {
          alignSelf: "flex-start",
          children: (0, _v1.jsx)(_v384.Avatar, {
            size: "sm",
            alt: "user avatar",
            src: _v11.user?.pictures?.sizes[1]?.link,
            nameProps: {
              name: String(_v11.user?.name ?? "")
            }
          })
        }), (0, _v1.jsxs)(_v239.VStack, {
          w: "100%",
          gap: "0",
          children: [(0, _v1.jsxs)(_v238.HStack, {
            justifyContent: "space-between",
            w: "100%",
            children: [(0, _v1.jsxs)(_v238.HStack, {
              children: [(0, _v1.jsx)(_v157.Text, {
                variant: "heading-xs",
                children: _v11.user?.name || 0
              }), (0, _v1.jsx)(_v157.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v169.fromNow)(new Date(_v11.createdOn), {
                  shorten: !0
                })
              })]
            }), (0, _v1.jsx)(_v162.Tooltip, {
              placement: "top",
              label: _v79.COPY_LINK_TO_COMMENT,
              children: (0, _v1.jsx)(_v171.IconButton, {
                size: "xs",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v467.Link, {}),
                opacity: "0",
                "aria-label": _v79.COPY_LINK_TO_COMMENT,
                _hover: {
                  color: "text-primary",
                  background: "button-secondary-default"
                },
                _groupHover: {
                  opacity: "100%"
                },
                onClick: () => {
                  _v4({
                    content: _v79.COMMENT_LINK_COPIED
                  }), (0, _v364.default)(_v3);
                }
              })
            })]
          }), (0, _v1.jsxs)(_v155.Box, {
            alignSelf: "flex-start",
            children: [(0, _v1.jsx)(_v475, {
              mr: "sm",
              children: _v10
            }), (0, _v1.jsx)(_v250.Paragraph, {
              variant: "body-lg",
              display: "inline",
              children: (0, _v1.jsx)(_v347, {
                query: _v9,
                children: _v5
              })
            })]
          })]
        })]
      });
    },
    _v475 = _v0 => (0, _v1.jsx)(_v157.Text, {
      variant: "heading-2xs",
      background: "fill-component",
      width: "fit-content",
      borderRadius: "xs",
      paddingX: "xs",
      height: (0, _v9.rem)(20),
      display: "inline-flex",
      alignItems: "center",
      ..._v0
    }),
    _v476 = ({
      timestamp: _v0,
      content: _v1,
      query: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(!1),
        [_v5, _v6] = (0, _v3.useState)(!1),
        {
          sendMomentsThumbsRate: _v7
        } = _v234(),
        _v8 = (0, _v307.useNotification)(),
        _v9 = (0, _v3.useCallback)(_v0 => {
          _v0 && _v6(_v0?.scrollHeight > _v0.clientHeight + 2);
        }, []);
      return (0, _v1.jsxs)(_v239.VStack, {
        gap: "sm",
        alignItems: "flex-start",
        h: "100%",
        mx: "sm",
        children: [(0, _v1.jsx)(_v475, {
          mr: "sm",
          children: _v0
        }), (0, _v1.jsx)(_v157.Text, {
          ref: _v9,
          variant: "body-lg",
          maxHeight: _v3 ? "max-content" : (0, _v9.rem)(178),
          noOfLines: _v3 ? void 0 : 8,
          overflow: _v3 ? "visible" : "hidden",
          children: (0, _v1.jsx)(_v347, {
            query: _v2,
            children: _v1
          })
        }), _v5 && (0, _v1.jsx)(_v159.Button, {
          variant: "secondary",
          size: {
            base: "md",
            md: "xs"
          },
          onClick: () => _v4(!_v3),
          flex: "0 0 auto",
          children: _v3 ? _v79.SHOW_LESS : _v79.SHOW_MORE
        }), (0, _v1.jsxs)(_v238.HStack, {
          h: (0, _v9.rem)(24),
          w: "100%",
          marginTop: _v3 ? "md" : (0, _v9.rem)(36),
          alignSelf: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v157.Text, {
            variant: "heading-2xs",
            color: "text-secondary",
            children: _v79.DESCRIPTION_AI_GENERATED
          }), (0, _v1.jsx)(_v238.HStack, {
            children: (0, _v1.jsx)(_v472, {
              size: "xs",
              color: "text-secondary",
              onThumbsRate: _v0 => {
                _v7(_v0), _v8({
                  content: _v79.THANKS_FOR_FEEDBACK
                });
              }
            })
          })]
        })]
      });
    },
    _v477 = ({
      isOpen: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v160.Panel, {
      isVisible: _v0,
      display: "flex",
      alignItems: "center",
      flexDir: "column",
      "data-testid": "side-panel",
      padding: "0",
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
        position: {
          base: "absolute",
          lg: "initial"
        },
        right: "md",
        flex: "1 0 auto",
        width: (0, _v9.rem)(480),
        maxWidth: (0, _v9.rem)(480),
        background: "fill-surface"
      },
      children: (0, _v1.jsx)(_v160.PanelBody, {
        padding: "0",
        height: "calc(100vh - 215px)",
        position: "relative",
        boxSizing: "border-box",
        display: "flex",
        flexDir: "column",
        width: "100%",
        ..._v1
      })
    }),
    _v478 = ({
      isOpen: _v0,
      ..._v1
    }) => {
      let {
        togglePanel: _v2
      } = (0, _v3.useContext)(_v60);
      return (0, _v1.jsxs)(_v459.Drawer, {
        placement: "bottom",
        isOpen: _v0,
        onClose: () => {
          _v2();
        },
        children: [(0, _v1.jsx)(_v464.DrawerOverlay, {}), (0, _v1.jsx)(_v457.motion.div, {
          drag: "y",
          dragConstraints: {
            top: 0,
            bottom: 100
          },
          onDragEnd: (_v0, _v1) => {
            _v1.offset.y < 0 || _v2();
          },
          children: (0, _v1.jsxs)(_v460.DrawerContent, {
            height: `calc(100vh - ${(0, _v9.rem)(64)})`,
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            backgroundColor: "fill-blur",
            backdropFilter: "blur(var(--vimeo-blur-lg))",
            sx: {
              '&[data-placement="bottom"]': {
                maxW: "100vw"
              }
            },
            children: [(0, _v1.jsx)(_v458.bokeh.hr, {
              backgroundColor: "text-tertiary",
              alignSelf: "center",
              paddingY: (0, _v9.rem)(2),
              width: (0, _v9.rem)(70),
              border: "none",
              borderRadius: (0, _v9.rem)(10),
              my: "sm"
            }), (0, _v1.jsx)(_v462.DrawerBody, {
              sx: {
                "&&": {
                  pt: "0"
                }
              },
              display: "flex",
              flexDir: "column",
              px: "0",
              ..._v1
            })]
          })
        })]
      });
    };
  var _v479 = _v0.i(0),
    _v480 = _v0.i(0),
    _v481 = _v0.i(0);
  let _v482 = () => {
      let {
          panelMoments: _v0,
          togglePanel: _v1,
          setPanelMoments: _v2
        } = (0, _v3.useContext)(_v60),
        {
          sendMomentsPanelClick: _v3
        } = _v234(),
        {
          moments: _v4,
          currentIdx: _v5 = 0,
          momentEmbedUrl: _v6,
          currentVidId: _v7
        } = _v0;
      if (!_v4) return (0, _v1.jsx)(_v1.Fragment, {});
      let {
          startTime: _v8,
          endTime: _v9,
          type: _v10
        } = _v4[_v5],
        _v11 = _v10 === _v124.comment || _v10 === _v124.commentReply,
        _v12 = `${_v6}&watch_full_video=0#start=${Math.floor(_v8 / 0)}&end=${Math.floor((_v11 ? _v9 + 0 : _v9) / 0)}`,
        _v13 = _v0 => {
          _v2({
            ..._v0,
            currentIdx: _v5 + _v0
          }), _v3({
            entityId: _v7,
            copy: 1 === _v0 ? "Next moment" : "Previous moment"
          });
        };
      return (0, _v1.jsxs)(_v8.Flex, {
        aspectRatio: "16/9",
        borderRadius: "xl",
        marginBottom: {
          base: "md",
          md: 3
        },
        mx: {
          base: "md",
          md: "0"
        },
        flexShrink: "0",
        overflow: "hidden",
        position: "relative",
        role: "group",
        children: [(0, _v1.jsx)(_v161.Skeleton, {
          height: "100%",
          width: "100%"
        }), (0, _v1.jsx)(_v155.Box, {
          background: "fill-surface",
          height: "100%",
          width: "100%",
          position: "absolute",
          children: (0, _v1.jsx)(_v481.EmbedPlayer, {
            title: "side-panel-player",
            src: _v12
          }, _v12)
        }), (0, _v1.jsxs)(_v8.Flex, {
          position: "absolute",
          paddingX: "sm",
          top: "sm",
          zIndex: "10",
          w: "100%",
          justifyContent: "space-between",
          opacity: {
            base: 1,
            md: 0
          },
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          children: [(0, _v1.jsx)(_v238.HStack, {
            children: _v4.length > 1 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v483, {
                tooltipLabel: _v79.PREVIOUS_MOMENT,
                "aria-label": _v79.PREVIOUS_MOMENT,
                icon: (0, _v1.jsx)(_v480.ChevronLeft, {}),
                isDisabled: 0 === _v5,
                onClick: () => _v13(-1)
              }), (0, _v1.jsx)(_v483, {
                tooltipLabel: _v79.NEXT_MOMENT,
                "aria-label": _v79.NEXT_MOMENT,
                icon: (0, _v1.jsx)(_v206.ChevronRight, {}),
                isDisabled: _v5 === _v4.length - 1,
                onClick: () => _v13(1)
              })]
            })
          }), (0, _v1.jsx)(_v483, {
            "aria-label": "Close panel",
            icon: (0, _v1.jsx)(_v479.CloseXSmall, {}),
            onClick: () => {
              _v3({
                entityId: _v7,
                copy: "Close"
              }), _v1();
            }
          })]
        })]
      });
    },
    _v483 = ({
      tooltipLabel: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v162.Tooltip, {
      label: _v0,
      isDisabled: !_v0,
      placement: "top",
      children: (0, _v1.jsx)(_v171.IconButton, {
        blur: "md",
        color: "white",
        background: "rgba(0, 0, 0, 0.9)",
        id: "close-moments-panel-button",
        size: "sm",
        _hover: {
          background: "rgba(0, 0, 0, 0.50)"
        },
        _disabled: {
          background: "rgba(0, 0, 0, 0.9)",
          opacity: "50%"
        },
        ..._v1
      })
    }),
    _v484 = () => {
      let {
          panelStatus: _v0,
          hasDrawer: _v1,
          panelMoments: _v2
        } = (0, _v3.useContext)(_v60),
        {
          moments: _v3,
          currentIdx: _v4 = 0,
          currentVidLink: _v5,
          currentVidId: _v6
        } = _v2,
        {
          query: _v7 = ""
        } = _v186(),
        {
          sendMomentsPanelImpressions: _v8
        } = _v234(),
        _v9 = !!_v0;
      if ((0, _v3.useEffect)(() => {
        _v9 && _v8();
      }, [_v9]), !_v3) return (0, _v1.jsx)(_v1.Fragment, {});
      let {
          startTime: _v10,
          endTime: _v11,
          type: _v12,
          attributes: _v13
        } = _v3[_v4],
        _v14 = _v137(_v5, _v10, _v7, !0, _v11);
      return (0, _v1.jsxs)(_v1 ? _v478 : _v477, {
        isOpen: _v9,
        children: [(0, _v1.jsx)(_v482, {}), (0, _v1.jsx)(_v239.VStack, {
          justifyContent: "space-between",
          flexGrow: "1",
          overflowY: "auto",
          children: (0, _v1.jsxs)(_v8.Flex, {
            pb: "3",
            pt: {
              base: "sm",
              md: 3
            },
            px: {
              base: "sm",
              md: "md"
            },
            gap: "sm",
            flexDir: "column",
            width: "100%",
            height: "100%",
            children: [(0, _v1.jsx)(_v485, {
              type: _v12,
              attributes: _v13,
              marginBottom: "sm",
              momentLink: _v14,
              videoId: _v6
            }), (0, _v1.jsx)(_v473, {}, _v14)]
          })
        }), (0, _v1.jsx)(_v486, {
          momentLink: _v14,
          videoLink: _v5,
          videoId: _v6
        })]
      });
    },
    _v485 = ({
      type: _v0,
      attributes: _v1,
      momentLink: _v2,
      videoId: _v3,
      ..._v4
    }) => {
      let _v5 = (0, _v307.useNotification)(),
        {
          sendMomentsPanelClick: _v6
        } = _v234(),
        {
          label: _v7,
          Icon: _v8
        } = _v147(_v0, _v1);
      return (0, _v1.jsxs)(_v238.HStack, {
        gap: "xs",
        w: "100%",
        height: (0, _v9.rem)(20),
        ..._v4,
        role: "group",
        cursor: "pointer",
        mx: "sm",
        children: [(0, _v1.jsx)(_v8, {
          boxSize: `${(0, _v9.rem)(16)} !important`
        }), (0, _v1.jsx)(_v157.Text, {
          variant: "heading-sm",
          lineHeight: "inherit",
          children: _v7
        }), (0, _v1.jsx)(_v243.Badge, {
          variant: "warning",
          size: "xs",
          height: (0, _v9.rem)(14),
          borderWidth: "0",
          pt: "1px",
          ml: "xs",
          children: _v79.BETA
        }), (0, _v1.jsx)(_v162.Tooltip, {
          placement: "top",
          label: _v79.COPY_LINK_TO_CLIP,
          children: (0, _v1.jsx)(_v171.IconButton, {
            size: "xs",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v467.Link, {}),
            color: "text-secondary",
            display: "none",
            "aria-label": "copy link",
            _hover: {
              color: "text-primary",
              background: "button-secondary-default"
            },
            _groupHover: {
              display: "block"
            },
            onClick: () => {
              _v5({
                content: _v79.CLIP_LINK_COPIED
              }), (0, _v364.default)(_v2), _v6({
                entityId: _v3,
                copy: "Clip link copied"
              });
            }
          })
        })]
      });
    },
    _v486 = ({
      videoLink: _v0,
      momentLink: _v1,
      videoId: _v2
    }) => {
      let _v3 = (0, _v307.useNotification)(),
        {
          sendMomentsPanelClick: _v4
        } = _v234();
      return (0, _v1.jsxs)(_v8.Flex, {
        flexDir: {
          base: "column",
          md: "row"
        },
        py: {
          base: "sm",
          md: "md"
        },
        px: {
          base: "md",
          md: "lg"
        },
        mb: {
          base: "0",
          md: "sm"
        },
        gap: (0, _v9.rem)(12),
        w: "100%",
        children: [(0, _v1.jsx)(_v159.Button, {
          size: "md",
          variant: "secondary",
          as: "a",
          href: _v0,
          cursor: "pointer",
          onClick: () => _v4({
            entityId: _v2,
            copy: "View full video"
          }),
          flexBasis: {
            base: "auto",
            md: "50%"
          },
          children: _v79.VIEW_FULL_VIDEO
        }), (0, _v1.jsx)(_v159.Button, {
          size: "md",
          leftIcon: (0, _v1.jsx)(_v467.Link, {}),
          variant: "primary",
          onClick: () => {
            _v3({
              content: _v79.CLIP_LINK_COPIED
            }), (0, _v364.default)(_v1), _v4({
              entityId: _v2,
              copy: "Copy link to clip"
            });
          },
          flexBasis: {
            base: "auto",
            md: "50%"
          },
          children: _v79.COPY_LINK_TO_CLIP
        })]
      });
    },
    _v487 = () => {
      let {
          panelStatus: _v0,
          togglePanel: _v1
        } = (0, _v3.useContext)(_v60),
        {
          query: _v2 = "",
          type: _v3
        } = _v186(),
        _v4 = _v0 === _v32;
      return ((0, _v3.useEffect)(() => {
        _v4 && _v1();
      }, [_v2, _v3]), _v0) ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(_v0 === _v31 || "sort" === _v0) && (0, _v1.jsx)(_v466, {}), _v4 && (0, _v1.jsx)(_v484, {})]
      }) : (0, _v1.jsx)(_v1.Fragment, {});
    },
    _v488 = () => {
      let {
          searchType: _v0,
          isAgenticSearch: _v1
        } = (0, _v3.useContext)(_v151),
        {
          hasAgenticSearch: _v2
        } = _v67(),
        _v3 = (0, _v2.useRouter)(),
        _v4 = _v1 && _v2,
        _v5 = (0, _v14.useViewer)(),
        {
          trackSearchPageDisplayed: _v6
        } = (0, _v12.useSearchTracking)(),
        _v7 = (0, _v3.useRef)(null);
      (0, _v3.useEffect)(() => {
        _v24.init(_v5?.teamUser);
      }, [_v5?.teamUser]), (0, _v3.useEffect)(() => {
        if (!_v4) return;
        let _v0 = document.createElement("style");
        return _v0.setAttribute("data-agentic-hide-omnisearch", ""), _v0.textContent = "[data-global-nav-search]{display:none !important;}", document.head.appendChild(_v0), () => {
          _v0.remove();
        };
      }, [_v4]);
      let _v8 = _v0 === _v149;
      return ((0, _v11.usePicoEffect)(() => {
        if (!_v3.isReady || !_v3.query.q || !_v5) return;
        let _v0 = _v3.query.q;
        if (_v7.current === _v0) return;
        _v7.current = _v0;
        let _v1 = _v3.query.type;
        _v6({
          searchQuery: _v0,
          searchActiveTab: _v8 ? "vimeo" : "library",
          searchResultType: _v1 && "default" !== _v1 ? _v1 : "all",
          searchPageViewerAuthStatus: (0, _v10.deriveViewerAuthStatus)(_v5)
        });
      }, [_v3.isReady, _v3.query.q, _v8, _v5]), (_v5?.isFromCopyrightRestrictedRegion || _v5?.isSimplifiedSite) && _v8) ? (0, _v1.jsx)(_v13.PageNotAvailablePage, {}) : _v3.isReady ? !_v3.query.q && _v8 ? (0, _v1.jsx)(_v407, {}) : (0, _v1.jsx)(_v8.Flex, {
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
        children: (0, _v1.jsx)(_v61, {
          children: (0, _v1.jsxs)(_v154, {
            children: [(0, _v1.jsx)(_v289, {}), (0, _v1.jsxs)(_v8.Flex, {
              justifyContent: "space-between",
              flexGrow: "1",
              overflow: "hidden",
              gap: {
                base: "md",
                md: "lg"
              },
              children: [_v8 ? (0, _v1.jsx)(_v402, {}) : (0, _v1.jsx)(_v8.Flex, {
                flexDir: "column",
                height: "100%",
                overflow: "scroll",
                position: "relative",
                flexGrow: "1",
                sx: {
                  scrollbarWidth: "thin",
                  scrollbarColor: `${_v34} transparent`
                },
                children: _v4 ? (0, _v1.jsx)(_v192, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v2 && !!_v3.query.q && (0, _v1.jsx)(_v207, {}), (0, _v1.jsx)(_v262, {}), (0, _v1.jsx)(_v378, {})]
                })
              }), !_v4 && (0, _v1.jsx)(_v487, {})]
            })]
          })
        })
      }) : null;
    },
    _v489 = () => (0, _v1.jsx)(_v275, {
      children: (0, _v1.jsx)(_v152, {
        children: (0, _v1.jsx)(_v488, {})
      })
    });
  var _v490 = _v0.i(0),
    _v491 = _v0.i(0),
    _v492 = _v0.i(0);
  let _v493 = () => {
    let _v0 = (0, _v3.useContext)(_v66.ViewerContext),
      _v1 = (0, _v2.useRouter)();
    return (0, _v3.useEffect)(() => {
      let {
        slug: _v0,
        ..._v1
      } = _v1.query;
      _v1.isReady && _v0?.[0] === _v148 && !_v1.q && _v1.push({
        query: {
          sort: "last_user_action_event_date_desc",
          ..._v1,
          slug: _v0
        }
      }, void 0, {
        shallow: !0
      });
    }, [_v1.isReady]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v489, {}), _v0 && (0, _v1.jsx)(_v490.EssentialFooter, {
        ..._v0,
        enableQuotaMenu: !1
      })]
    });
  };
  (0, _v7.withPageSetup)(async _v0 => {
    let _v1 = _v0.req?.url?.split("?")[0],
      _v2 = _v1?.split("/").pop() || "";
    return ["search", "ondemand", "people", "channel", "group", "library"].includes(_v2) ? _v2 === _v148 && _v0.req && (0, _v6.isLoggedOut)(_v0.req) ? {
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
  }), _v493.getLayout = _v0 => {
    let _v1;
    {
      let _v0 = new URLSearchParams(window.location.search).get("q"),
        _v1 = window.location.pathname.includes(`/${_v148}`);
      _v1 = !!_v0 || _v1;
    }
    return (0, _v1.jsx)(_v492.VideoLibraryLayout, {
      hasSideNav: !0,
      hasGlobalSearch: _v1,
      sideNavContent: (0, _v1.jsx)(_v491.SideNavContent, {
        surface: "home"
      }),
      children: _v0
    });
  }, _v0.s(["__N_SSP", 0, !0, "default", 0, _v493], 0);
}