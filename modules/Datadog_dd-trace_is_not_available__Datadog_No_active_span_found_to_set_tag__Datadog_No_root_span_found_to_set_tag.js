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
    _v48 = {
      product_analytics_context: {
        product: "search",
        feature: "library_search"
      },
      web_context: {
        page_name: "search_result_page"
      }
    },
    _v49 = ["clip.name", "clip.pictures", "clip.user.name", "clip.user.pictures.sizes", "clip.metadata.connections", "clip.metadata.interactions.watchlater.added", "clip.uri", "clip.stats.plays", "clip.duration", "clip.createdTime", "clip.link", "clip.badge.type", "facet.type"],
    _v50 = ["ondemand.link", "ondemand.name", "ondemand.pictures.sizes", "ondemand.metadata.interactions.buy", "ondemand.metadata.interactions.rent", "ondemand.uri"],
    _v51 = ["people.name", "people.locationDetails.formattedAddress", "people.metadata.publicVideos.total", "people.pictures.sizes", "people.link", "people.metadata.connections.followers.total", "people.skills.name", "people.skills.uri", "people.backgroundVideo", "people.uri"],
    _v52 = ["channel.name", "channel.metadata.connections.users.total", "channel.metadata.connections.videos.total", "channel.pictures.sizes", "channel.link", "channel.uri"],
    _v53 = ["group.name", "group.metadata.connections.users.total", "group.metadata.connections.videos.total", "group.pictures.sizes", "group.link", "group.uri"],
    _v54 = ["folder.name", "folder.uri", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.createdTime", "folder.modifiedTime", "folder.settings", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.metadata.connections.ancestorPath", "folder.metadata.connections.parentFolder", "folder.metadata.connections.videos", "folder.metadata.interactions.invite", "folder.metadata.interactions.delete", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.edit", "video.name", "video.uri", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "video.user.metadata.connections.projects.options", "video.createdTime", "video.customMetadata", "video.lastUserActionEventDate", "video.modifiedTime", "video.link", "video.privacy", "video.type", "video.download", "video.pictures", "video.description", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.parentProject.isPrivateToUser", "video.parentProject.metadata.connections.ancestorPath", "video.parentProject.metadata.interactions.edit", "video.parentProject.metadata.interactions.moveVideo", "video.parentProject.name", "video.parentProject.uri", "video.manageLink", "video.canMoveToProject", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.metadata.interactions.invite.uri", "video.duration", "video.allowedPrivacies", "video.reviewPage", "video.reviewLinks.uri", "video.embed", "video.playerEmbedUrl", "showcase.createdTime", "showcase.name", "showcase.link", "showcase.privacy", "showcase.uri", "showcase.embed", "showcase.pictures", "showcase.metadata.connections.videos.total", "showcase.hasChosenThumbnail", "showcase.privacy", "showcase.modifiedTime", "showcase.metadata.interactions.delete", "liveEvent.createdTime", "liveEvent.hasRegistration", "liveEvent.metadata.connections.liveVideo.status", "liveEvent.metadata.interactions.delete", "liveEvent.metadata.interactions.edit", "liveEvent.nextOccurrenceTime", "liveEvent.link", "liveEvent.pictures.uri", "liveEvent.pictures.sizes", "liveEvent.title", "liveEvent.uri", "liveEvent.user.uri", "liveEvent.status", "liveEvent.streamPrivacy", "liveEvent.viewLink", "liveEvent.settingsLink", "liveEvent.parentFolder.uri", "liveEvent.parentFolder.name", "liveEvent.parentFolder.isPrivateToUser", "liveEvent.embed.html", "liveEvent.eventType", "meta", "type"],
    _v55 = ["contents", "contentsHighlight", "id", "startTime", "endTime", "thumbnail", "type", "url", "metadata", "attributes"],
    _v56 = ["folder.name", "folder.uri", "folder.metadata.connections.ancestorPath"],
    _v57 = "filters",
    _v58 = "sort",
    _v59 = "moments",
    _v60,
    _v61 = (0, _v3.createContext)({}),
    _v62 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v25.useBreakpointValue)({
          base: _v60,
          lg: _v57
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
        _v2 !== _v59 && _v4.momentEmbedUrl && _v5(_v45);
      }, [_v4.momentEmbedUrl, _v2]), (0, _v3.useEffect)(() => {
        for (let _v0 = 0; _v0 < _v8.length; _v0++) {
          if (_v8[_v0].loading) return;
          if (_v8[_v0].hasMoments) return void _v7(_v0);
        }
      }, [_v8]), (0, _v1.jsx)(_v61.Provider, {
        value: {
          panelStatus: _v2,
          togglePanel: _v0 => {
            _v2 === _v60 || _v0 !== _v2 ? _v3(_v0) : _v3(_v60);
          },
          panelMoments: _v4,
          setPanelMoments: _v0 => {
            _v5(_v0), _v3(_v59);
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
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  let _v68 = () => {
    let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
      _v1 = (0, _v66.shouldShowInDevelopmentFeature)("show_ask_library", !0),
      _v2 = (0, _v66.shouldShowInDevelopmentFeature)("show_new_moments", !0),
      _v3 = (0, _v66.shouldShowInDevelopmentFeature)("reframe_override", !0),
      _v4 = (0, _v66.shouldShowInDevelopmentFeature)("dedupe", !0),
      _v5 = (0, _v66.shouldShowInDevelopmentFeature)("chapter_fallback", !0),
      {
        assignment: _v6
      } = (0, _v64.useCuidEppoAssignment)({
        flagKey: "ask-your-library",
        assignmentType: _v65.VariationTypes.BOOLEAN,
        bigPictureOverrides: _v48,
        defaultAssignment: !1,
        additionalData: {
          ownerId: _v0?.teamUser?.ownerId ?? _v0?.user?.id ?? 0
        }
      }),
      {
        assignment: _v7
      } = (0, _v64.useCuidEppoAssignment)({
        flagKey: "new-moments",
        assignmentType: _v65.VariationTypes.BOOLEAN,
        bigPictureOverrides: _v48,
        defaultAssignment: !1,
        additionalData: {
          ownerId: _v0?.teamUser?.ownerId ?? _v0?.user?.id ?? 0
        }
      }),
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
          hasContentSpaceEnabled: _v17,
          hasVideoReviewPageDemo: _v18,
          canSeeUpsellModalOnShare: _v19,
          hasMultipleReviewLinks: _v20,
          hasTeamPrivacy: _v21
        }
      } = (0, _v63.useCapability)(["hasPublicSearchDisabled", "hasEnterprise", "hasAutoClosedCaptions", "canManageTeamCollections", "hasLiveSubscription", "hasContentSpaceEnabled", "hasVideoReviewPageDemo", "canSeeUpsellModalOnShare", "hasMultipleReviewLinks", "hasTeamPrivacy"], _v0?.teamUser?.ownerId);
    return {
      hasEnterprise: _v13,
      hasPublicSearchDisabled: !(!_v12 && !_v0?.isFromCopyrightRestrictedRegion && !_v0?.isEnterpriseSite && !_v0?.isSimplifiedSite),
      hasAutoClosedCaptions: _v14,
      hasAiSearch: _v6 || _v1,
      hasNewMoments: _v7 || _v2,
      hasReframeOverride: _v3,
      isLoading: _v8 || _v10,
      hasPaid: _v9,
      canManageTeamCollections: _v15,
      hasLiveSubscription: _v16,
      hasContentSpaceEnabled: _v17,
      hasVideoReviewPageDemo: _v18,
      hasTeamPrivacy: _v21,
      canSeeUpsellModalOnShare: _v19,
      hasMultipleReviewLinks: _v20,
      dedupeMoments: _v4 || void 0,
      chapterFallback: _v5 || void 0,
      ready: _v11
    };
  };
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = _v0 => (0, _v1.jsx)(_v70.Icon, {
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
  var _v72 = _v0.i(0);
  let _v73 = _v0 => (0, _v1.jsx)(_v70.Icon, {
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
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = {
      get ANY() {
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)("Vimeo");
      },
      get LIBRARY() {
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        });
      },
      get PRIVACY_NOBODY() {
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return [(0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
        return [(0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        }), (0, _v78.translate)({
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
        return (0, _v78.translate)({
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
      deletedShowcase: _v0 => (0, _v78.translate)({
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
      filtersCount: _v0 => (0, _v78.translate)({
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
      videoCount: _v0 => (0, _v78.translate)({
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
      userCount: (_v0, _v1) => _v0 === _v86.options.channel.value ? (0, _v78.translate)({
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
      }) : (0, _v78.translate)({
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
      resultsCount: (_v0, _v1) => (0, _v78.translate)({
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
      libraryResultsCount: (_v0, _v1) => (0, _v78.translate)({
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
      momentsInVideo: (_v0, _v1) => (0, _v78.translate)({
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
      momentsResultCount: _v0 => (0, _v78.translate)({
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
      })
    },
    _v81 = {
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
    _v82 = {
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
    _v83 = "filter_custom_metadata",
    _v84 = {
      name: "uploaded",
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        thisYear: {
          value: "this-year",
          get text() {
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
    _v85 = {
      name: "updated",
      get nameCopy() {
        return (0, _v78.translate)({
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
      options: _v84.options
    },
    _v86 = {
      name: "type",
      get nameCopy() {
        return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
    _v87 = {
      name: "live",
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        now: {
          value: "now",
          get text() {
            return (0, _v78.translate)({
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
    _v88 = {
      name: "hdr",
      nameCopy: "HDR",
      options: {
        default: {
          value: "default",
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        hdr: {
          value: "hdr",
          get text() {
            return (0, _v78.translate)({
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
    _v89 = {
      name: "vimeo360",
      nameCopy: "Vimeo 360°",
      options: {
        default: {
          value: "default",
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        spatial: {
          value: "spatial",
          get text() {
            return (0, _v78.translate)({
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
    _v90 = {
      name: "price",
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        free: {
          value: "free",
          get text() {
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
    _v91 = {
      name: "license",
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ANY,
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
    _v92 = {
      name: "resolution",
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        "4k": {
          value: "4k",
          text: "4K"
        }
      }
    },
    _v93 = {
      name: "duration",
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        short: {
          value: "short",
          get text() {
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
    _v94 = {
      name: "collection",
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ANY,
          untranslatedText: "Any"
        },
        staffpick: {
          value: "staffpick",
          get text() {
            return (0, _v78.translate)({
              singular: "Staff Picks",
              dictionary: {
                "ja-JP": {
                  singular: "スタッフピック"
                },
                "ko-KR": {
                  singular: "스태프 픽"
                }
              }
            });
          },
          untranslatedText: "Staff Picks"
        }
      }
    },
    _v95 = {
      name: "follow",
      get nameCopy() {
        return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
    _v96 = {
      default: {
        value: "default",
        text: _v80.ANY,
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
    _v97 = "live_event",
    _v98 = {
      name: _v86.name,
      get nameCopy() {
        return (0, _v78.translate)({
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
          text: _v80.ALL,
          untranslatedText: "All"
        },
        video: {
          value: "video",
          get text() {
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
          value: _v97,
          get text() {
            return (0, _v78.translate)({
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
  _v86.name, _v80.ALL;
  let _v99 = {
      name: "query_fields",
      get nameCopy() {
        return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
    _v100 = "1.25rem",
    _v101 = _v0 => ({
      name: "filter_privacy",
      get nameCopy() {
        return (0, _v78.translate)({
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
      options: Object.fromEntries(_v79.DEFAULT_PRIVACY_OPTIONS.filter(_v0 => "team" !== _v0.privacy).map(_v0 => [_v0.privacy, {
        value: "disable" === _v0.privacy ? "hide-from-vimeo" : _v0.title.toLowerCase(),
        text: _v0 && "disable" === _v0.privacy ? (0, _v78.translate)({
          singular: "Embed only",
          dictionary: {
            es: {
              singular: "Solo mediante inserción"
            },
            "de-DE": {
              singular: "Nur per Einbettung"
            },
            "fr-FR": {
              singular: "Uniquement intégrable"
            },
            "ja-JP": {
              singular: "埋め込みのみ"
            },
            "ko-KR": {
              singular: "임베드 전용"
            },
            "pt-BR": {
              singular: "Apenas incorporado"
            },
            "zh-CN": {
              singular: "仅可嵌入"
            }
          }
        }) : _v0.title,
        untranslatedText: _v0.title,
        icon: _v0 && "disable" === _v0.privacy ? (0, _v1.jsx)(_v77.Code, {
          boxSize: _v100
        }) : (0, _v79.videoPrivacyIcons)(_v100)[_v0.privacy].icon
      }]))
    }),
    _v102 = {
      name: "filter_uploader",
      get nameCopy() {
        return (0, _v78.translate)({
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
    _v103 = {
      folderIncludedName: "filter_folder_include",
      folderExcludedName: "filter_folder_exclude",
      get nameCopy() {
        return (0, _v78.translate)({
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
    _v104 = {
      name: "filter_date",
      get nameCopy() {
        return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
            return (0, _v78.translate)({
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
    _v105 = {
      relevance: {
        value: "relevance",
        get text() {
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
          return (0, _v78.translate)({
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
      relevance: _v106,
      uploaded: _v107,
      updated: _v108,
      popularity: _v109,
      titleAsc: _v110,
      titleDesc: _v111,
      nameAsc: _v112,
      nameDesc: _v113,
      longest: _v114,
      shortest: _v115,
      lastModified: _v116,
      firstModified: _v117,
      lastAdded: _v118,
      firstAdded: _v119
    } = _v105,
    _v120 = {
      clip: {
        relevance: _v106,
        uploaded: _v107,
        popularity: _v109,
        titleAsc: _v110,
        titleDesc: _v111,
        longest: _v114,
        shortest: _v115
      },
      ondemand: {
        relevance: _v106,
        uploaded: _v107,
        popularity: _v109,
        titleAsc: _v110,
        titleDesc: _v111
      },
      people: {
        relevance: _v106,
        popularity: _v109,
        nameAsc: _v112,
        nameDesc: _v113
      },
      channel: {
        relevance: _v106,
        updated: _v108,
        popularity: _v109,
        nameAsc: _v112,
        nameDesc: _v113
      },
      group: {
        relevance: _v106,
        updated: _v108,
        popularity: _v109,
        nameAsc: _v112,
        nameDesc: _v113
      }
    },
    _v121 = {
      relevance: _v106,
      titleAsc: _v110,
      titleDesc: _v111,
      lastModified: _v116,
      firstModified: _v117,
      lastAdded: _v118,
      firstAdded: _v119,
      longest: _v114,
      shortest: _v115
    },
    _v122 = {
      relevance: _v106,
      uploaded: _v107,
      updated: _v108,
      popularity: _v109,
      titleAsc: _v110,
      titleDesc: _v111,
      nameAsc: _v112,
      nameDesc: _v113,
      longest: _v114,
      shortest: _v115
    },
    _v123 = "video",
    _v124 = {
      clip: "video",
      ondemand: "ondemand",
      people: "user",
      group: "group",
      channel: "channel"
    },
    _v125 = {
      transcript: "transcript-single-index",
      chapter: "chapters",
      comment: "private-comments",
      commentReply: "private-comment-replies",
      vis: "ai-vis-prod"
    },
    _v126 = _v0 => _v0 ? parseInt(_v0.split("/").slice(-1)[0]) : 0,
    _v127 = (_v0, _v1) => "string" == typeof _v0 && Object.values(_v1).map(_v0 => _v0.value).includes(_v0),
    _v128 = (_v0, _v1) => {
      if ("string" != typeof _v0) return !1;
      let _v2 = _v0.split(","),
        _v3 = Object.values(_v1).map(_v0 => _v0.value);
      return _v2.every(_v0 => _v3.includes(_v0));
    },
    _v129 = _v0 => !!_v0 && /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(_v0),
    _v130 = (_v0, _v1) => {
      _v0.push({
        query: _v1
      }, void 0, {
        shallow: !0
      });
    },
    _v131 = ({
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
        let _v0 = _v84.options[_v3].value;
        _v17.uploaded = _v0, _v18.push(`Uploaded=${_v0}`);
      }
      if (_v4) {
        let _v0 = _v87.options[_v4].value;
        _v17.live = _v0, _v18.push(`Live=${_v0}`);
      }
      if (_v5) {
        let _v0 = _v88.options[_v5].value;
        _v17.hdr = _v0, _v18.push(`Hdr=${_v0}`);
      }
      if (_v6) {
        let _v0 = _v89.options[_v6].value;
        _v17.vimeo360 = _v0, _v18.push(`Vimeo-360=${_v0}`);
      }
      if (_v7) {
        let _v0 = _v90.options[_v7].value;
        _v17.price = _v0, _v18.push(`Price=${_v0}`);
      }
      if (_v8) {
        let _v0 = _v91.options[_v8].value;
        _v17.license = _v0, _v18.push(`License=${_v0}`);
      }
      if (_v9) {
        let _v0 = _v92.options[_v9].value;
        _v17.resolution = _v0, _v18.push(`Resolution=${_v0}`);
      }
      if (_v10) {
        let _v0 = _v93.options[_v10].value;
        _v17.duration = _v0, _v18.push(`Duration=${_v0}`);
      }
      if (_v11 && (_v17.collection = _v94.options[_v11].value, _v18.push("Staffpicked=true")), _v12 && (_v17.category = _v12, _v18.push(`Category=${_v12}`)), _v13 && (_v17.follow = _v13, _v16 && _v18.push(`Follows=${_v16}`)), _v14) {
        let _v0 = _v84.options[_v14].value;
        _v17.updated = _v0, _v18.push(`Last-updated=${_v0}`);
      }
      return _v15 && (_v17.sort = _v15), {
        url: _v17,
        bpFilters: _v18
      };
    },
    _v132 = ({
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
      return _v0 && (_v11.q = _v0), _v1 > 1 && (_v11.page = _v1), _v2 && (_v11.type = _v98.options[_v2].value), _v3 && (_v11.query_fields = _v3), _v4 && (_v11.filter_privacy = _v4), _v5 && (_v11.sort = _v5), _v6 && (_v11.filter_uploader = _v6), _v7 && (_v11.filter_folder_include = _v7), _v8 && (_v11.filter_folder_exclude = _v8), _v9 && (_v11.filter_date = _v9), _v10 && (_v11.filter_custom_metadata = _v10), {
        url: _v11
      };
    },
    _v133 = (_v0, _v1 = "en-US") => new Date(_v0).toLocaleDateString(_v1, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }),
    _v134 = _v0 => {
      let _v1 = Object.assign({}, _v0);
      return delete _v1.page, delete _v1.query, delete _v1.type, delete _v1.sort, _v1;
    },
    _v135 = _v0 => "video" === _v0.type && _v0?.video?.parentProject ? {
      name: _v0.video.parentProject?.name,
      href: _v136(_v0.video.parentProject?.uri)
    } : "live_event" === _v0.type && _v0?.liveEvent?.parentFolder ? {
      name: _v0.liveEvent.parentFolder?.name,
      href: _v136(_v0.liveEvent.parentFolder?.uri)
    } : "folder" === _v0.type && _v0?.folder?.metadata?.connections?.ancestorPath?.[0] ? {
      name: _v0?.folder?.metadata?.connections?.ancestorPath?.[0]?.name,
      href: _v136(_v0?.folder?.metadata?.connections?.ancestorPath?.[0]?.uri)
    } : {
      name: "-"
    },
    _v136 = _v0 => _v0.replace("users", "user").replace("projects", "folder"),
    _v137 = _v0 => {
      if (!_v0) return [];
      let _v1 = _v0.lastIndexOf("_");
      return -1 === _v1 ? [_v0] : [_v0.substring(0, _v1), _v0.substring(_v1 + 1)];
    },
    _v138 = (_v0, _v1, _v2, _v3, _v4) => {
      if (_v3) {
        let _v0 = `${_v0}?tq=${_v2}#t=${Math.floor(_v1 / 0)}`;
        return _v4 && (_v0 += `&end=${Math.floor(_v4 / 0)}`), _v0;
      }
      return `${_v0}/transcript?ts=${_v1}`;
    },
    _v139 = _v0 => _v0.match("<b>(.*?)</b>")?.[1],
    _v140 = (_v0, _v1, _v2 = 20, _v3 = 50) => {
      let _v4 = _v0.length,
        _v5 = _v0.toLowerCase(),
        _v6 = _v1.toLowerCase();
      if (_v4 <= _v2 + _v3 || "" === _v1.trim() || !_v5.includes(_v6)) return _v0;
      {
        let _v0 = _v0.replace(/\s+/g, " "),
          _v1 = _v141(_v1),
          _v2 = RegExp(`(^|\\s).{0,${_v2}}${_v1}.{0,${_v3}}(\\s|$)`, "i"),
          _v3 = _v0.match(_v2),
          _v4 = _v3 ? _v3[0].trim() : "",
          _v5 = _v0.indexOf(_v4),
          _v6 = _v5 + _v4.length < _v0.length ? "..." : "";
        return `${0 === _v5 ? "" : "..."}${_v4}${_v6}`;
      }
    },
    _v141 = (_v0 = "") => _v0.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").trim(),
    _v142 = (_v0, _v1) => {
      for (let _v0 of Object.values(_v0)) if (_v0.value === _v1) return _v0.untranslatedText ?? _v0.text;
      return null;
    },
    _v143 = (_v0, _v1) => _v0.hasOwnProperty(_v1) ? _v0[_v1]?.split(",") : [],
    _v144 = _v0 => _v0 ? "title,captions,description,tags,chapters" : "title,description,tags,chapters",
    _v145 = _v0 => {
      if (!_v0) return !1;
      let _v1 = _v0.match(/(\w+)/g);
      return (!_v1 || !(_v1.length < 3)) && !!_v0.match(/^(what|when|who|where|how|why)|\?$/i);
    },
    _v146 = _v0 => {
      if (!(_v0 instanceof Array)) return {};
      let _v1 = {};
      for (let {
        type: _v0,
        count: _v1
      } of _v0) _v1[_v0] = _v1;
      return _v1;
    },
    _v147 = _v0 => {
      let _v1 = _v0 ? new Date(`${_v0}T00:00:00`) : new Date();
      return new _v69.BokehDate.CalendarDate(_v1.getFullYear(), _v1.getMonth() + 1, _v1.getDate());
    },
    _v148 = (_v0, _v1) => {
      switch (_v0) {
        case _v125.transcript:
          return {
            get label() {
              return _v80.TRANSCRIPT;
            },
            Icon: _v71
          };
        case _v125.chapter:
          return {
            get label() {
              return _v80.CHAPTER;
            },
            Icon: _v72.ListUlFilled
          };
        case _v125.comment:
          return {
            get label() {
              return _v80.COMMENT;
            },
            Icon: _v73
          };
        case _v125.commentReply:
          return {
            get label() {
              return _v80.COMMENT;
            },
            Icon: _v73
          };
        case _v125.vis:
          return {
            get label() {
              if (_v1.includes("chapters")) return _v80.SEGMENT;
              if (_v1.includes("is_slide")) return _v80.SLIDE;
              if (_v1.includes("shots")) return _v80.SHOT;
              if (_v1.includes("scenes")) return _v80.SCENE;
              if (_v1.includes("is_visual")) return _v80.VISUAL_MOMENT;
              return _v80.MOMENT;
            },
            Icon: _v74.AiSparklesFilled
          };
      }
    },
    _v149 = "library",
    _v150 = "public",
    _v151 = {
      [_v149]: "library_search",
      [_v150]: "public_search"
    },
    _v152 = (0, _v3.createContext)({}),
    _v153 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        {
          hasPublicSearchDisabled: _v2,
          isLoading: _v3,
          ready: _v4
        } = _v68(),
        [_v5, _v6] = (0, _v3.useState)(() => _v1.query.slug?.[0] === _v35 ? _v149 : _v150),
        [_v7, _v8] = (0, _v3.useState)(!0);
      return (0, _v3.useEffect)(() => {
        _v4 && !_v3 && _v2 && _v1.query.slug?.[0] !== _v35 && (_v6(_v149), _v130(_v1, {
          q: _v1.query.q,
          slug: [_v35]
        }));
      }, [_v4, _v3, _v2, _v1]), (0, _v3.useEffect)(() => {
        _v6(() => _v1.query.slug?.[0] === _v35 ? _v149 : _v150);
      }, [_v1.query?.slug]), (0, _v1.jsx)(_v152.Provider, {
        value: {
          searchType: _v5,
          toggleSearchType: _v0 => {
            let _v1 = _v0?.detail.query?.trim(),
              _v2 = _v0?.detail.filter,
              _v3 = {},
              _v4 = null;
            if (_v5 === _v150 ? (_v4 = _v37, _v6(_v149), _v3.slug = [_v35], _v2 && (_v3[_v2.name] = _v2.value)) : (_v6(_v150), _v4 = _v38), (_v1 ?? _v1.query.q) && (_v3.q = _v1 ?? _v1.query.q), _v130(_v1, _v3), !_v1) {
              let _v0 = new CustomEvent("SearchTypeChange", {
                detail: {
                  searchType: _v4
                }
              });
              document.dispatchEvent(_v0);
            }
          },
          feature: _v151[_v5],
          showAiAnimation: _v7,
          setShowAiAnimation: _v8
        },
        children: _v0
      });
    },
    _v154 = (0, _v3.createContext)({}),
    _v155 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!0);
      return (0, _v1.jsx)(_v154.Provider, {
        value: {
          showAnimation: _v1,
          setShowAnimation: _v2
        },
        children: _v0
      });
    };
  var _v156 = _v0.i(0),
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
    _v167 = _v0.i(0);
  let _v168 = "thumbs_up",
    _v169 = "thumbs_down",
    _v170 = {
      thumbsUp: !1,
      thumbsDown: !1,
      providedFeedback: !1
    };
  function _v171(_v0, _v1) {
    switch (_v1.type) {
      case _v168:
        return {
          thumbsUp: !_v0.thumbsUp,
          thumbsDown: !1,
          providedFeedback: !0
        };
      case _v169:
        return {
          thumbsDown: !_v0.thumbsDown,
          thumbsUp: !1,
          providedFeedback: !0
        };
      default:
        return _v0;
    }
  }
  var _v172 = _v0.i(0),
    _v172 = _v172,
    _v173 = _v0.i(0),
    _v174 = _v0.i(0);
  let _v175 = () => {
    var _v0;
    let _v1,
      _v2 = (0, _v2.useRouter)(),
      _v3 = (_v0 = _v2.query, _v1 = {
        ..._v81
      }, "string" == typeof _v0.q && (_v1.query = _v0.q), Number(_v0.page) && (_v1.page = Number(_v0.page)), _v127(_v0.uploaded, _v84.options) && (_v1.uploaded = (0, _v75.camelizeString)(_v0.uploaded)), _v127(_v0.updated, _v85.options) && (_v1.updated = (0, _v75.camelizeString)(_v0.updated)), _v127(_v0.type, _v86.options) ? _v1.type = _v0.type : _v1.type = _v86.options.clip.value, _v127(_v0.live, _v87.options) && (_v1.live = _v0.live), _v127(_v0.hdr, _v88.options) && (_v1.hdr = (0, _v75.camelizeString)(_v0.hdr)), _v127(_v0.vimeo360, _v89.options) && (_v1.vimeo360 = "360" === _v0.vimeo360 ? "vimeo360" : _v0.vimeo360), _v127(_v0.price, _v90.options) && (_v1.price = _v0.price), _v127(_v0.license, _v91.options) && (_v1.license = (0, _v75.camelizeString)(_v0.license)), _v127(_v0.resolution, _v92.options) && (_v1.resolution = _v0.resolution), _v127(_v0.duration, _v93.options) && (_v1.duration = _v0.duration), _v127(_v0.collection, _v94.options) && (_v1.collection = _v0.collection), _v127(_v0.category, _v96) && (_v1.category = _v0.category), "true" === _v0.follow && (_v1.follow = _v0.follow), _v127(_v0.sort, _v122) && (_v1.sort = _v0.sort), _v1),
      {
        isDrawerOpen: _v4
      } = (0, _v3.useContext)(_v61),
      _v5 = (0, _v3.useRef)(null),
      _v6 = _v5?.current?.href === _v2.asPath;
    return _v4 || (_v5.current = {
      ..._v131(_v3),
      href: _v2.asPath
    }), {
      ..._v3,
      filters: _v3,
      onFilterChange: (_v0, _v1) => {
        if (_v0 === _v86.name) {
          let _v0 = {
            q: _v3.query
          };
          _v86.options.clip.value !== _v1 && (_v0.type = _v1), _v130(_v2, _v0);
        } else {
          let {
            url: _v0
          } = _v131({
            ..._v3,
            page: 1
          });
          "default" === _v1 || _v0 === _v36 && _v1 === _v120.clip.relevance.value ? delete _v0[_v0] : _v0[_v0] = _v1, _v130(_v2, _v0);
        }
      },
      appliedFiltersCount: Object.keys(_v134(_v3)).filter(_v0 => void 0 !== _v3[_v0]).length,
      clearFilters: () => {
        let {
          url: _v0
        } = _v131({
          ..._v81,
          page: _v3.page,
          query: _v3.query,
          sort: _v3.sort,
          type: _v5.current?.url.type ?? _v3.type
        });
        _v130(_v2, _v0);
      },
      updatePage: _v0 => {
        let {
          url: _v1
        } = _v131({
          ..._v3,
          page: _v0
        });
        _v130(_v2, _v1);
      },
      appliedFiltersSortAndQuery: JSON.stringify(_v2.query),
      keepPreviousUrl: () => {
        _v5.current && _v130(_v2, _v5.current.url);
      },
      isApplyButtonDisabled: _v6
    };
  };
  var _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0);
  async function _v179({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v177.measureLatency)("getSearch", "GET", async () => {
      let _v0 = await fetch(`${_v0}/search?${(0, _v178.searchQueryString)(_v2)}&fields=${_v1.map(_v178.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v178.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v178.deepCamelCase)(_v1);
    });
  }
  var _v180 = _v0.i(0),
    _v181 = _v0.i(0),
    _v182 = _v0.i(0),
    _v183 = _v0.i(0);
  function _v184(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v183.useGctlConfig)();
    return (0, _v180.default)(_v2 ? `/search${(0, _v182.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v179({
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
  "true" === _v176.default.env.STORYBOOK && (0, _v182.assignMswData)(_v184, {
    endpoint: "/search",
    method: "GET"
  }), "true" === _v176.default.env.STORYBOOK && (0, _v182.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v181.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v183.useGctlConfig)(),
      [_v5, _v6] = (0, _v182.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/search${(0, _v182.serializeQuery)(_v0)}`, _v179({
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
  var _v185 = _v0.i(0);
  let _v186 = () => {
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
    _v187 = () => {
      let _v0 = (0, _v2.useRouter)(),
        _v1 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          searchType: _v2
        } = (0, _v3.useContext)(_v152),
        {
          isDrawerOpen: _v3
        } = (0, _v3.useContext)(_v61),
        _v4 = _v186(),
        _v5 = (0, _v185.useOrion)().identity.settings.enable_fuzzy_public_search,
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
        } = _v175(),
        _v22 = _v1?.user?.id,
        _v23 = _v2 === _v150,
        {
          data: _v24,
          isLoading: _v25,
          mutate: _v26,
          error: _v27
        } = _v184(() => {
          if (!_v0.isReady || !_v1?.apiUrl || !_v23 || _v3 || _v4) return null;
          let [_v0, _v1] = _v137(_v21);
          return {
            select: (_v0 => {
              switch (_v0) {
                case _v86.options.ondemand.value:
                  return _v50;
                case _v86.options.people.value:
                  return _v51;
                case _v86.options.channel.value:
                  return _v52;
                case _v86.options.group.value:
                  return _v53;
                default:
                  return _v49;
              }
            })(_v9),
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.3"
            },
            query: {
              filterType: _v9 ? _v86.options[_v9].value : _v86.options.clip.value,
              query: _v6,
              page: _v7,
              perPage: 24,
              filterUploaded: _v8 && _v84.options[_v8].value,
              filterLive: _v10 && _v87.options[_v10].value,
              filterHdr: _v11 && _v88.options[_v11].value,
              filterVimeo_360: _v12 && _v89.options[_v12].value,
              filterPrice: _v13 && _v90.options[_v13].value,
              filterLicense: _v14 && _v91.options[_v14].value,
              filterResolution: _v15 && _v92.options[_v15].value,
              filterStaffpicked: _v17 && !0,
              filterDuration: _v16 && _v93.options[_v16].value,
              filterCategory: _v18,
              filterFollows: _v19 && _v22,
              filterLastUpdated: _v20 && _v85.options[_v20].value,
              sizes: _v9 === _v86.options.ondemand.value ? ["296x744"] : void 0,
              sort: _v0,
              direction: _v1,
              facets: "type",
              fetchUserProfile: _v9 === _v86.options.people.value ? "1" : void 0,
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
    },
    _v188 = () => {
      let _v0,
        _v1,
        _v2 = (0, _v2.useRouter)(),
        _v3 = (_v0 => {
          let _v1 = {
            ..._v82
          };
          if ("string" == typeof _v0.q && (_v1.query = _v0.q), Number(_v0.page) && (_v1.page = Number(_v0.page)), _v127(_v0.filter_type, _v98.options) && (_v1.type = _v0.filter_type), _v127(_v0.type, _v98.options) && (_v1.type = _v0.type), _v128(_v0.query_fields, _v99.options) && (_v1.queryFields = _v0.query_fields), _v128(_v0.filter_privacy, _v101().options) && (_v1.privacy = _v0.filter_privacy), _v127(_v0.sort, _v121) && (_v1.sort = _v0.sort), "string" == typeof _v0.filter_uploader && (_v1.uploader = _v0.filter_uploader), "string" == typeof _v0.filter_folder_include && (_v1.folderIncluded = _v0.filter_folder_include), _v1.folderIncluded && "string" == typeof _v0.filter_folder_exclude && (_v1.folderExcluded = _v0.filter_folder_exclude), _v0.filter_date) {
            let [_v0, _v1] = _v0.filter_date.split(",");
            _v129(_v0) && _v129(_v1) && (_v1.date = _v0.filter_date);
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
        } = (0, _v3.useContext)(_v61),
        _v5 = (0, _v3.useRef)(null),
        _v6 = _v5?.current?.href === _v2.asPath;
      return _v4 || (_v5.current = {
        ..._v132(_v3),
        href: _v2.asPath
      }), {
        ..._v3,
        filters: _v3,
        onLibraryFilterChange: (_v0, _v1) => {
          if (_v0 === _v98.name) {
            let _v0 = {
              slug: [_v35],
              q: _v3.query
            };
            _v1 !== _v98.options.default.value && (_v0.type = _v1), _v130(_v2, _v0);
            return;
          }
          let {
            url: _v2
          } = _v132({
            ..._v3,
            page: 1
          });
          "default" === _v1 || _v0 === _v36 && _v1 === _v121.relevance.value ? delete _v2[_v0] : _v2[_v0] = _v1, _v130(_v2, _v2);
        },
        onCheckboxChange: _v0 => {
          let {
            url: _v1
          } = _v132({
            ..._v3,
            page: 1
          });
          return (Array.isArray(_v0) ? _v0 : [_v0]).forEach(({
            name: _v0,
            value: _v1,
            isChecked: _v2
          }) => {
            let _v3 = _v143(_v1, _v0);
            _v1.hasOwnProperty(_v0) && _v1[_v0]?.split(",");
            let _v4 = 1 === _v3.length;
            _v2 ? _v4 ? (delete _v1[_v0], _v0 === _v103.folderIncludedName && delete _v1[_v103.folderExcludedName]) : _v1[_v0] = _v3.filter(_v0 => _v0 !== _v1).join(",") : (_v3.push(_v1), _v1[_v0] = _v3.join(","));
          }), _v130(_v2, _v1), _v1;
        },
        onClearFilter: _v0 => {
          let {
            url: _v1
          } = _v132({
            ..._v3,
            page: 1
          });
          (Array.isArray(_v0) ? _v0 : [_v0]).forEach(_v0 => {
            delete _v1[_v0];
          }), _v130(_v2, _v1);
        },
        updatePage: _v0 => {
          let {
            url: _v1
          } = _v132({
            ..._v3,
            page: _v0
          });
          _v130(_v2, _v1);
        },
        clearLibraryFilters: () => {
          let {
            url: _v0
          } = _v132({
            ..._v82,
            query: _v3.query,
            sort: _v3.sort
          });
          _v130(_v2, _v0);
        },
        onOmnisearchChange: _v0 => {
          let {
              query: _v1,
              filter: _v2
            } = _v0.detail,
            {
              url: _v3
            } = _v132({
              ..._v3,
              page: 1
            }),
            _v4 = {
              ..._v3,
              slug: [_v35]
            };
          _v1?.trim() ? _v4.q = _v1 : _v4.sort = _v121.lastModified.value, _v2 && (_v4[_v2.name] = _v2.value), _v130(_v2, _v4);
        },
        appliedFiltersCount: (_v0 = _v134(_v3), _v1 = 0, Object.keys(_v0).map(_v0 => {
          let _v1 = _v0[_v0];
          _v1 && ("folderIncluded" !== _v0 && "privacy" !== _v0 && "uploader" !== _v0 && "queryFields" !== _v0 ? _v1 += 1 : _v1 += _v1.split(",").length);
        }), _v1),
        keepPreviousLibraryUrl: () => {
          _v5.current && _v130(_v2, _v5.current.url);
        },
        isLibraryApplyButtonDisabled: _v6
      };
    };
  var _v189 = _v0.i(0),
    _v190 = _v0.i(0);
  let _v191 = () => {
      let _v0 = (0, _v2.useRouter)(),
        {
          cache: _v1,
          mutate: _v2
        } = (0, _v181.useSWRConfig)(),
        _v3 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          searchType: _v4
        } = (0, _v3.useContext)(_v152),
        {
          isDrawerOpen: _v5
        } = (0, _v3.useContext)(_v61),
        _v6 = _v186(),
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
        } = _v188(),
        {
          hasAutoClosedCaptions: _v18,
          hasNewMoments: _v19
        } = _v68(),
        {
          settings: _v20
        } = (0, _v190.useOrionSettings)(),
        _v21 = _v20.show_custom_metadata ? _v17 : void 0,
        _v22 = _v21 ? _v144(!1) : _v10 || _v144(_v18),
        _v23 = _v4 === _v149,
        _v24 = _v19 ? _v46 : {},
        {
          data: _v25,
          error: _v26,
          isLoading: _v27,
          mutate: _v28
        } = (0, _v189.useGetUserItems)(() => {
          if (!_v0.isReady || !_v3?.user || !_v23 || _v5 || _v6) return null;
          let [_v0, _v1] = _v137(_v12),
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
            select: _v54,
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
    _v192 = {
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
    _v193 = {
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
    _v194 = {
      notification_name: null,
      error_id: null,
      error_name: null,
      checkbox_copy: null,
      notification_copy: null
    },
    _v195 = {
      ..._v194,
      is_marked_checkbox: null
    },
    _v196 = () => {
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
        } = _v197(),
        _v10 = (0, _v173.useAnalyticsEvent)(),
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
          let _v3 = (0, _v172.default)(_v6, _v28),
            _v4 = _v126(_v2);
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
              ..._v192,
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
          let _v3 = (0, _v172.default)(_v6, _v28),
            _v4 = _v126(_v2);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: _v0,
            element: "card",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_result_click",
            version: 4,
            additionalFields: {
              ..._v192,
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
          let _v2 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            flow: "search_moments",
            entity_type: _v123,
            element: "button",
            location: "modal",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_result_click",
            version: 4,
            additionalFields: {
              ..._v192,
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
            entityType: _v123,
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
          let _v3 = (0, _v172.default)(_v6, _v28),
            _v4 = _v126(_v2);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: _v0,
            element: "icon"
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_watch_later",
            version: 4,
            additionalFields: {
              ..._v192,
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
          let _v4 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            copy: _v0,
            element: "button",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_filter",
            version: 4,
            additionalFields: {
              ..._v192,
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
          let _v3 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            copy: _v0,
            element: "button",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_sorting",
            version: 4,
            additionalFields: {
              ..._v192,
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
            _v3 = (0, _v172.default)(_v6, _v28),
            _v4 = _v0 ? null : _v4,
            _v5 = _v1.length && !_v0 ? _v1 : null,
            _v6 = _v2.length && !_v0 ? _v2 : null;
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_results_page",
            version: 5,
            additionalFields: {
              ..._v193,
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
          let _v1 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            flow: "search",
            copy: _v0,
            element: "button",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.search_mode_switch",
            version: 4,
            additionalFields: {
              ..._v192,
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
              ..._v194,
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
              ..._v195,
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
          let _v2 = _v126(_v0 || "");
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
          let _v2 = _v126(_v1);
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
          let _v2 = _v126(_v1);
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
          let _v2 = _v126(_v1);
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
          let _v2 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withActionCtx({}).withWebCtx({}).withProductAnalyticsCtx({
            entity_type: "moment",
            element: "card",
            location: "timeline",
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_timeline_clicks",
            version: 4,
            additionalFields: {
              ..._v192,
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
          let _v2 = (0, _v172.default)(_v6, _v28);
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
              ..._v192,
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
          let _v0 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_results_impressions",
            version: 5,
            additionalFields: {
              ..._v193,
              search_id: _v0,
              results_page_number: _v4
            }
          }), _v27({
            searchId: _v0,
            resultsPageNumber: _v4
          });
        },
        sendMomentsTimelineImpressions: () => {
          let _v0 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_timeline_impressions",
            version: 5,
            additionalFields: {
              ..._v193,
              search_id: _v0,
              results_page_number: _v4
            }
          }), _v28({
            searchId: _v0,
            resultsPageNumber: _v4
          });
        },
        sendMomentsPanelImpressions: () => {
          let _v0 = (0, _v172.default)(_v6, _v28);
          _v24.withTeamCtx().withViewCtx().withWebCtx().withProductAnalyticsCtx({
            feature: _v1
          }).withThirdPartyIntegrationCtx().send({
            eventName: "vimeo.moments_panel_impressions",
            version: 5,
            additionalFields: {
              ..._v193,
              search_id: _v0,
              results_page_number: _v4
            }
          }), _v29({
            searchId: _v0,
            resultsPageNumber: _v4
          });
        },
        sendDeleteVideo: () => {
          _v10(_v174.VideoActionAnalytics.clickDeleteVideo({
            live_event_id: null,
            origin_folder_id: null,
            origin_type: null,
            location: "result_list",
            product: "search"
          }));
        }
      };
    },
    _v197 = () => {
      let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          searchType: _v1,
          feature: _v2
        } = (0, _v3.useContext)(_v152),
        {
          hasEnterprise: _v3,
          hasPublicSearchDisabled: _v4
        } = _v68(),
        {
          filters: {
            query: _v5 = null,
            sort: _v6 = null,
            page: _v7,
            ..._v8
          }
        } = _v175(),
        {
          data: _v9
        } = _v187(),
        {
          filters: {
            query: _v10 = null,
            sort: _v11 = null,
            page: _v12,
            ..._v13
          }
        } = _v188(),
        {
          data: _v14
        } = _v191(),
        _v15 = () => {
          if (!_v0?.user) return _v150;
          if (!_v4) return _v149;
          let _v0 = _v0.user.account.toLowerCase();
          return "free" !== _v0 && "basic" !== _v0 || _v3 || _v0?.teamUser?.ownerId ? _v149 : _v150;
        };
      return _v1 === _v149 ? {
        query: _v10,
        sort: _v11 ?? _v105.relevance.value,
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
        sort: _v6 ?? _v105.relevance.value,
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
    _v198 = ({
      isExpanded: _v0,
      handleToggle: _v1,
      displayShowMore: _v2,
      videoLink: _v3
    }) => {
      let [_v4, _v5] = (0, _v3.useReducer)(_v171, _v170),
        _v6 = (0, _v163.useToast)(),
        {
          sendThumbsRate: _v7,
          sendAiSearchAction: _v8
        } = _v196();
      return (0, _v3.useEffect)(() => {
        _v4.providedFeedback && (_v7(_v4, _v3), _v6({
          title: _v80.THANKS_FOR_FEEDBACK,
          variant: "neutral",
          isClosable: !1
        }));
      }, [_v4]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v2 && (0, _v1.jsx)(_v161.Button, {
          variant: "secondary",
          size: {
            base: "md",
            md: "sm"
          },
          onClick: () => {
            _v8(_v0 ? "Show less" : "Show more", _v3), _v1();
          },
          children: _v0 ? _v80.SHOW_LESS : _v80.SHOW_MORE
        }), (0, _v1.jsx)(_v162.IconButton, {
          size: {
            base: "md",
            md: "sm"
          },
          variant: "tertiary",
          icon: _v4.thumbsUp ? (0, _v1.jsx)(_v165.ThumbUpFilled, {}) : (0, _v1.jsx)(_v164.ThumbUp, {}),
          onClick: () => _v5({
            type: _v168
          }),
          "aria-label": "thumbs up"
        }), (0, _v1.jsx)(_v162.IconButton, {
          size: {
            base: "md",
            md: "sm"
          },
          variant: "tertiary",
          icon: _v4.thumbsDown ? (0, _v1.jsx)(_v167.ThumbDownFilled, {}) : (0, _v1.jsx)(_v166.ThumbDown, {}),
          onClick: () => _v5({
            type: _v169
          }),
          "aria-label": "thumbs down"
        })]
      });
    };
  var _v199 = _v0.i(0);
  let _v200 = ({
    showAnimation: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v199.useColorModeValue)("linear-gradient(360deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0.82) 96%, rgba(255, 255, 255, 0.4) 100%)", "linear-gradient(360deg,rgba(24, 30, 35, 1) 0%, rgba(24, 30, 35, 1) 90%, rgba(24, 30, 35, 0.82) 96%, rgba(24, 30, 35, 0.4) 100%)"),
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
    return (0, _v1.jsx)(_v159.GridItem, {
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
  var _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0),
    _v204 = _v0.i(0),
    _v205 = _v0.i(0),
    _v206 = _v0.i(0),
    _v207 = _v0.i(0),
    _v208 = _v0.i(0);
  let _v209 = ({
      onClick: _v0,
      copy: _v1,
      paddingY: _v2 = "md",
      variant: _v3 = "heading-sm"
    }) => {
      let {
        hasReframeOverride: _v4
      } = _v68();
      return (0, _v1.jsxs)(_v157.PanelHeader, {
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
        children: [(0, _v1.jsx)(_v208.AiSparkles, {
          boxSize: "xs"
        }), (0, _v1.jsxs)(_v160.Text, {
          variant: _v3,
          as: "h1",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "sm",
          children: [_v1, !_v4 && (0, _v1.jsx)(_v207.Badge, {
            variant: "warning",
            size: "xs",
            height: (0, _v9.rem)(14),
            borderWidth: "0",
            pt: "1px",
            children: _v80.BETA
          })]
        }), (0, _v1.jsx)(_v206.CloseButton, {
          size: "sm",
          variant: "tertiary",
          "aria-label": "close ask your library button",
          onClick: _v0
        })]
      });
    },
    _v210 = ({
      children: _v0,
      videoLink: _v1 = "",
      ..._v2
    }) => {
      let {
          panelStatus: _v3
        } = (0, _v3.useContext)(_v61),
        [_v4, _v5] = (0, _v3.useState)(!0),
        {
          sendAiSearchAction: _v6
        } = _v196(),
        _v7 = (0, _v199.useColorModeValue)("var(--vimeo-colors-lightBlueAlpha-200)", "var(--vimeo-colors-darkBlueAlpha-200)");
      return (0, _v1.jsx)(_v156.Box, {
        marginLeft: "sm",
        marginRight: _v3 ? 0 : "sm",
        marginBottom: _v4 ? {
          base: "md",
          sm: "lg"
        } : 0,
        children: (0, _v1.jsxs)(_v157.Panel, {
          isVisible: _v4,
          sx: {
            width: "100%",
            "--panel-border-width": "1px",
            "--panel-border-style": "solid",
            "--panel-border-color": _v7
          },
          children: [(0, _v1.jsx)(_v209, {
            onClick: () => {
              _v6("close", _v1), _v5(!1);
            },
            ..._v2
          }), _v0]
        })
      });
    };
  var _v211 = _v0.i(0);
  let _v212 = () => {
      let {
          isSideNavOpen: _v0
        } = (0, _v3.useContext)(_v211.VideoLibraryLayoutContext),
        {
          panelStatus: _v1
        } = (0, _v3.useContext)(_v61),
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
    },
    _v213 = () => {
      let _v0 = (0, _v25.useBreakpointValue)({
          base: !0,
          md: !1
        }) || !1,
        {
          gridColumns: _v1
        } = _v212(),
        {
          sendGenerateAiSearch: _v2
        } = _v196();
      return (0, _v3.useEffect)(() => {
        _v2();
      }, []), (0, _v1.jsx)(_v210, {
        copy: _v80.SEARCHING_AI,
        children: (0, _v1.jsxs)(_v203.VStack, {
          paddingX: {
            base: "md",
            md: "lg"
          },
          paddingY: "sm",
          children: [(0, _v1.jsxs)(_v158.Grid, {
            width: "100%",
            gridTemplateColumns: _v1,
            gap: (0, _v9.rem)(12),
            paddingBottom: (0, _v9.rem)(12),
            children: [(0, _v1.jsx)(_v214, {
              gridColumn: {
                base: "1/4",
                sm: "1/5",
                md: "1/4"
              }
            }), (0, _v1.jsx)(_v214, {
              gridColumn: {
                base: "1/4",
                sm: "1/5",
                md: "1/4"
              }
            }), (0, _v1.jsx)(_v214, {
              gridColumn: {
                base: "1/4",
                sm: "1/5",
                md: "1/4"
              },
              width: "82%"
            }), _v0 && (0, _v1.jsx)(_v214, {
              w: (0, _v9.rem)(100),
              marginTop: "lg",
              gridColumn: "1"
            })]
          }), (0, _v1.jsxs)(_v202.HStack, {
            w: "100%",
            marginY: "lg",
            children: [(0, _v1.jsx)(_v214, {
              w: (0, _v9.rem)(100)
            }), (0, _v1.jsx)(_v214, {
              w: (0, _v9.rem)(32)
            }), (0, _v1.jsx)(_v214, {
              w: (0, _v9.rem)(32)
            }), (0, _v1.jsx)(_v214, {
              w: (0, _v9.rem)(32)
            })]
          })]
        })
      });
    },
    _v214 = _v0 => {
      let _v1 = (0, _v204.useStyleConfig)("Skeleton", {
        variant: "text"
      });
      return _v1.background = "linear-gradient(282.43deg, rgba(23, 213, 255, 0.733333) 0%, #17D5FF 25%, #9E00FF 50%, #743ED9 75%, rgba(23, 213, 255, 0.733333) 100%);", _v1.animationDuration = "5s", (0, _v1.jsx)(_v205.LightMode, {
        children: (0, _v1.jsx)(_v201.Skeleton, {
          __css: _v1,
          ..._v0
        })
      });
    };
  var _v215 = _v0.i(0);
  let _v216 = ({
    tooltipLabel: _v0,
    showHover: _v1 = !0,
    ..._v2
  }) => (0, _v1.jsx)(_v215.Tooltip, {
    label: _v0,
    placement: "top",
    isDisabled: !_v1,
    children: (0, _v1.jsx)(_v161.Button, {
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
  var _v217 = _v0.i(0),
    _v218 = _v0.i(0);
  let _v219 = ({
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
        } = _v196();
      if (!_v0) return null;
      let _v7 = Array.isArray(_v0) ? _v0 : [_v0],
        _v8 = _v7[1]?.thumbnailUrl ?? "",
        _v9 = _v7.length,
        _v10 = _v7[0];
      return (0, _v1.jsx)(_v156.Box, {
        children: _v2 || 1 === _v9 ? (0, _v1.jsx)(_v156.Box, {
          children: _v7.map(({
            quote: _v0,
            timecode: _v1,
            thumbnailUrl: _v2
          }, _v3) => (0, _v1.jsxs)(_v216, {
            href: `${_v1}?tq=#t=${_v1}`,
            tooltipLabel: _v80.GO_TO_MOMENT,
            animation: 1 === _v3 ? `${_v225} .5s ease-in` : void 0,
            paddingX: _v5 ? "0" : "sm",
            showHover: !_v5,
            onClick: () => _v6("moment", _v1),
            onContextMenu: () => _v6("moment", _v1),
            children: [(0, _v1.jsxs)(_v8.Flex, {
              alignItems: "center",
              gap: (0, _v9.rem)(12),
              children: [(0, _v1.jsx)(_v220, {
                src: _v2 ?? ""
              }), (0, _v1.jsx)(_v217.Paragraph, {
                variant: "body-md",
                noOfLines: 2,
                height: "fit-content",
                children: _v0
              })]
            }), (0, _v1.jsx)(_v222, {
              children: (0, _v218.secondsToDisplay)(_v1)
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
          children: [(0, _v1.jsxs)(_v221, {
            secondThumbnail: _v8,
            showAnimation: _v3,
            children: [(0, _v1.jsx)(_v223, {
              children: _v9
            }), (0, _v1.jsx)(_v220, {
              src: _v10.thumbnailUrl ?? ""
            })]
          }), (0, _v1.jsx)(_v217.Paragraph, {
            variant: "body-md",
            noOfLines: 2,
            width: "100%",
            children: _v10.quote
          })]
        })
      });
    },
    _v220 = _v0 => (0, _v1.jsx)(_v156.Box, {
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
    _v221 = _v0 => (0, _v1.jsx)(_v156.Box, {
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
        animation: _v0.showAnimation ? `${_v224} 300ms ease-in 0s` : void 0
      },
      ..._v0
    }),
    _v222 = _v0 => (0, _v1.jsx)(_v156.Box, {
      backgroundColor: "fill-component",
      display: "flex",
      height: (0, _v9.rem)(24),
      blur: "md",
      padding: "xs",
      alignItems: "center",
      borderRadius: "xs",
      ..._v0
    }),
    _v223 = _v0 => (0, _v1.jsx)(_v207.Badge, {
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
    _v224 = (0, _v27.keyframes)({
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
    _v225 = (0, _v27.keyframes)({
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
  async function _v226({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v177.measureLatency)("getUserQuestions", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/questions?${(0, _v178.searchQueryString)(_v3)}&fields=${_v1.map(_v178.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v178.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v178.deepCamelCase)(_v1);
    });
  }
  function _v227(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v183.useGctlConfig)();
    return (0, _v180.default)(_v2 ? `/users/${_v2.where.userId}/questions${(0, _v182.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v226({
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
  "true" === _v176.default.env.STORYBOOK && (0, _v182.assignMswData)(_v227, {
    endpoint: "/users/:userId/questions",
    method: "GET"
  }), "true" === _v176.default.env.STORYBOOK && (0, _v182.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v181.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v183.useGctlConfig)(),
      [_v5, _v6] = (0, _v182.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/questions${(0, _v182.serializeQuery)(_v0)}`, _v226({
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
  let _v228 = () => {
      let [_v0, _v1] = (0, _v3.useState)(!1),
        [_v2, _v3] = (0, _v3.useState)(!1),
        {
          showAnimation: _v4,
          setShowAnimation: _v5
        } = (0, _v3.useContext)(_v154),
        {
          gridColumns: _v6
        } = _v212(),
        _v7 = (0, _v25.useBreakpointValue)({
          base: !0,
          md: !1
        }, {
          fallback: "md"
        }),
        {
          query: _v8
        } = _v188(),
        {
          sendViewAiSearch: _v9,
          sendSelectAiSearch: _v10
        } = _v196(),
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
            } = _v227(() => _v1?.user ? {
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
      return _v13 ? (0, _v1.jsx)(_v213, {}) : _v11 ? (0, _v1.jsx)(_v210, {
        copy: _v80.AI_OVERVIEW,
        videoLink: _v17,
        children: (0, _v1.jsx)(_v157.PanelBody, {
          paddingX: {
            base: "md",
            md: "lg"
          },
          pb: {
            base: "md",
            md: "lg"
          },
          pt: "0",
          children: (0, _v1.jsxs)(_v158.Grid, {
            gridTemplateColumns: _v6,
            rowGap: "sm",
            children: [(0, _v1.jsx)(_v200, {
              onAnimationEnd: () => _v5(!1),
              showAnimation: _v4,
              children: (0, _v1.jsx)(_v160.Text, {
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
            }), !_v16 && (0, _v1.jsx)(_v159.GridItem, {
              animation: _v4 ? _v43 : void 0,
              gridColumn: {
                base: "1/5",
                md: "4/7"
              },
              paddingLeft: {
                base: "0",
                md: "md"
              },
              children: (0, _v1.jsx)(_v219, {
                quotes: _v11.question.relevantQuotes,
                videoUrl: _v17,
                isExpanded: _v0,
                showAnimation: _v4,
                handleExpand: () => _v1(!0)
              })
            }), (0, _v1.jsx)(_v159.GridItem, {
              display: "flex",
              gap: "sm",
              animation: _v4 ? _v43 : void 0,
              opacity: "1",
              gridColumn: {
                base: "1/3",
                md: "1/1"
              },
              paddingTop: "sm",
              children: (0, _v1.jsx)(_v198, {
                isExpanded: _v0,
                displayShowMore: _v2 || _v15 > 1,
                handleToggle: () => _v1(!_v0),
                videoLink: _v17
              })
            }), _v11?.question.relevantQuotes?.length && (0, _v1.jsx)(_v159.GridItem, {
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
              children: _v80.momentsInVideo(_v11?.question.relevantQuotes?.length, (0, _v1.jsxs)(_v216, {
                href: _v17,
                tooltipLabel: _v80.GO_TO_VIDEO,
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
                children: [(0, _v1.jsx)(_v229, {
                  src: _v11?.metadata.connections.video?.pictures?.sizes[1].link ?? "",
                  alt: "video thumbnail"
                }), (0, _v1.jsx)(_v156.Box, {
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
      }) : (0, _v1.jsx)(_v210, {
        copy: _v80.NO_AI_RESULTS,
        paddingY: "md",
        variant: "body-md"
      });
    },
    _v229 = _v0 => (0, _v1.jsx)(_v156.Box, {
      as: "img",
      width: (0, _v9.rem)(30),
      height: (0, _v9.rem)(20),
      border: "1px solid",
      borderColor: "stroke",
      flexShrink: "0",
      borderRadius: "xs",
      ..._v0
    }),
    _v230 = () => {
      let {
          query: _v0
        } = _v188(),
        {
          hasAiSearch: _v1
        } = _v68();
      return _v1 && _v145(_v0) ? (0, _v1.jsx)(_v228, {}) : (0, _v1.jsx)(_v1.Fragment, {});
    };
  var _v231 = _v0.i(0),
    _v232 = _v0.i(0),
    _v233 = _v0.i(0),
    _v234 = _v0.i(0),
    _v235 = _v0.i(0),
    _v236 = _v0.i(0),
    _v237 = _v0.i(0),
    _v238 = _v0.i(0),
    _v239 = _v0.i(0),
    _v240 = _v0.i(0),
    _v241 = _v0.i(0),
    _v242 = _v0.i(0),
    _v243 = _v0.i(0),
    _v244 = _v0.i(0);
  let _v245 = ({
      onClose: _v0,
      redirectUrl: _v1
    }) => (0, _v1.jsxs)(_v240.Modal, {
      isOpen: !0,
      onClose: _v0,
      children: [(0, _v1.jsx)(_v243.ModalOverlay, {}), (0, _v1.jsxs)(_v242.ModalContent, {
        width: (0, _v9.rem)(592),
        maxW: "unset",
        children: [(0, _v1.jsx)(_v241.ModalCloseButton, {}), (0, _v1.jsx)(_v244.AuthModal, {
          authType: "login",
          redirectUrl: _v1,
          minH: "unset",
          background: "unset",
          disableDismiss: !0
        })]
      })]
    }),
    _v246 = (0, _v3.createContext)({}),
    _v247 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        [_v2, _v3] = (0, _v3.useState)(!1),
        [_v4, _v5] = (0, _v3.useState)(),
        [_v6, _v7] = (0, _v3.useState)();
      return (0, _v1.jsxs)(_v246.Provider, {
        value: {
          isOpen: _v2,
          openAuthModal: (_v0, _v1) => {
            _v0 && _v5(_v0), _v1 && _v7(_v1), _v3(!0);
          }
        },
        children: [_v2 && (0, _v1.jsx)(_v245, {
          onClose: () => {
            _v3(!1), _v6 && _v130(_v1, _v6);
          },
          redirectUrl: _v4
        }), _v0]
      });
    },
    _v248 = [{
      text: _v80.PUBLIC,
      untranslatedText: "Vimeo"
    }, {
      text: _v80.LIBRARY,
      untranslatedText: "Library"
    }],
    _v249 = () => {
      let {
          searchType: _v0,
          toggleSearchType: _v1
        } = (0, _v3.useContext)(_v152),
        _v2 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          openAuthModal: _v3
        } = (0, _v3.useContext)(_v246),
        {
          panelStatus: _v4,
          togglePanel: _v5
        } = (0, _v3.useContext)(_v61),
        {
          sendModeSwitchEvent: _v6
        } = _v196();
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
        children: (0, _v1.jsx)(_v237.Tabs, {
          index: +(_v0 !== _v150),
          onChange: _v0 => {
            _v6({
              copy: _v248[_v0].untranslatedText
            }), _v2?.user ? (_v4 === _v32 && _v5(), _v1()) : _v3();
          },
          width: "100%",
          size: "sm",
          children: (0, _v1.jsxs)(_v235.TabList, {
            children: [(0, _v1.jsxs)(_v236.Tab, {
              "data-testId": "vimeo-tab",
              children: [(0, _v1.jsx)(_v238.Globe, {
                boxSize: (0, _v9.rem)(20)
              }), (0, _v1.jsx)(_v160.Text, {
                variant: "heading-xs",
                marginLeft: (0, _v9.rem)(6),
                children: _v248[0].text
              })]
            }, _v248[0].text), (0, _v1.jsxs)(_v236.Tab, {
              "data-testId": "library-tab",
              children: [(0, _v1.jsx)(_v239.MyLibrary, {
                boxSize: (0, _v9.rem)(20)
              }), (0, _v1.jsx)(_v160.Text, {
                variant: "heading-xs",
                marginLeft: (0, _v9.rem)(6),
                children: _v248[1].text
              })]
            }, _v248[1].text), (0, _v1.jsx)(_v237.TabIndicator, {})]
          })
        })
      });
    };
  var _v250 = _v0.i(0),
    _v251 = _v0.i(0);
  let _v252 = _v0 => {
    let {
      isActive: _v1,
      sortDirection: _v2
    } = _v0;
    return _v1 && _v2 ? "asc" === _v2 ? (0, _v1.jsx)(_v251.ArrowUp, {}) : (0, _v1.jsx)(_v250.ArrowDown, {}) : null;
  };
  var _v253 = _v0.i(0),
    _v254 = _v0.i(0);
  let _v255 = _v0 => {
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
    _v256 = ({
      showLoader: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)("none"),
        _v3 = (0, _v3.useRef)(null),
        {
          sendFilterEvent: _v4
        } = _v196(),
        {
          type: _v5,
          onLibraryFilterChange: _v6,
          query: _v7
        } = _v188(),
        {
          type: _v8,
          onFilterChange: _v9
        } = _v175(),
        {
          hasReframeOverride: _v10
        } = _v68(),
        {
          libraryResultCount: _v11
        } = (() => {
          let _v0 = (0, _v2.useRouter)(),
            _v1 = (0, _v3.useContext)(_v67.ViewerContext),
            {
              searchType: _v2
            } = (0, _v3.useContext)(_v152),
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
            } = _v188(),
            {
              data: _v7,
              isLoading: _v8
            } = _v191(),
            {
              hasAutoClosedCaptions: _v9
            } = _v68(),
            _v10 = _v2 === _v149,
            {
              data: _v11,
              error: _v12,
              isLoading: _v13
            } = (0, _v189.useGetUserItems)(() => _v0.isReady && _v1?.user && _v10 ? {
              query: {
                perPage: 1,
                filter: "folder,video,showcase,live_event",
                query: _v5,
                queryFields: _v144(_v9),
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
              _v1 = _v146(_v11?.meta?.facets?.facetType),
              _v2 = _v146(_v7?.meta?.facets?.facetType);
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
          publicResultCount: _v12
        } = _v187(),
        {
          data: _v13
        } = _v191(),
        {
          searchType: _v14
        } = (0, _v3.useContext)(_v152),
        _v15 = (0, _v14.useViewer)(),
        _v16 = (0, _v25.useBreakpointValue)({
          base: !0,
          sm: !1
        }),
        _v17 = _v14 === _v149,
        [_v18, _v19] = _v255({
          threshold: 1
        }),
        [_v20, _v21] = _v255({
          threshold: 1
        }),
        {
          options: _v22,
          nameCopy: _v23,
          untranslatedCopy: _v24
        } = _v17 ? _v98 : _v86,
        _v25 = Object.keys(_v22),
        _v26 = _v17 ? _v6 : _v9,
        _v27 = _v17 ? _v5 : _v8,
        _v28 = _v17 ? _v11 : _v12,
        _v29 = !_v13?.data || _v13?.data.length === 0,
        _v30 = _v10 && _v145(_v7) && _v29,
        _v31 = _v27 ? _v22[_v27].value : _v22?.default?.value,
        _v32 = _v0 => {
          _v3.current && (_v3.current.scrollLeft += _v0);
        };
      return (0, _v1.jsx)(_v156.Box, {
        position: "relative",
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
          children: [!_v19 && !_v16 && (0, _v1.jsx)(_v257, {
            onClick: () => _v32(-150),
            icon: (0, _v1.jsx)(_v254.ChevronLeftSmall, {}),
            display: _v1,
            "aria-label": "left-scroll-button"
          }), (0, _v1.jsx)(_v258, {
            background: _v259.leftLight,
            _dark: {
              background: _v259.leftDark
            },
            display: _v19 ? "none" : "block"
          }), _v25.map((_v0, _v1) => {
            let _v2 = _v22[_v0].value,
              _v3 = _v28?.[_v2] || 0,
              _v4 = _v2 === _v31;
            return (0, _v1.jsxs)(_v161.Button, {
              ref: 0 === _v1 ? _v18 : _v1 === _v25.length - 1 ? _v20 : void 0,
              onClick: () => {
                _v4({
                  copy: _v22[_v0].untranslatedText ?? _v22[_v0].text,
                  value: [_v2],
                  valueName: _v24 ?? _v23,
                  previousValue: [_v31]
                }), _v26("type", _v22[_v0].value);
              },
              size: "sm",
              variant: "secondary",
              isActive: _v4,
              children: [_v22[_v0].text, (0, _v1.jsx)(_v160.Text, {
                variant: "body-md",
                color: _v4 ? "text-primary" : "text-secondary",
                children: _v0 || _v30 ? "" : ` ${((_v0, _v1 = "en-US") => _v0 <= 0 ? (0, _v76.formatNumber)({
                  value: _v0,
                  locale: _v1
                }) : (0, _v76.formatNumber)({
                  value: _v0,
                  locale: _v1,
                  notation: "compact",
                  maximumSignificantDigits: 3,
                  minimumSignificantDigits: 3
                }))(_v3, _v15?.locale)}`
              })]
            }, _v1);
          }), (0, _v1.jsx)(_v258, {
            background: _v259.rightLight,
            right: "0",
            _dark: {
              background: _v259.rightDark
            },
            display: _v21 ? "none" : "block"
          }), !_v21 && !_v16 && (0, _v1.jsx)(_v257, {
            right: "0",
            onClick: () => _v32(150),
            icon: (0, _v1.jsx)(_v253.ChevronRightSmall, {}),
            display: _v1,
            "aria-label": "right-scroll-button"
          })]
        })
      });
    },
    _v257 = _v0 => {
      let {
        onClick: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v162.IconButton, {
        position: "absolute",
        size: "sm",
        onClick: _v1,
        variant: "primary",
        ..._v2
      });
    },
    _v258 = _v0 => {
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
    _v259 = {
      leftLight: "linear-gradient(90deg, #F4F6F8 0%, rgba(244, 246, 248, 0) 100%)",
      leftDark: "linear-gradient(90deg, #0E1216 0%, rgba(14, 18, 22, 0) 100%)",
      rightLight: "linear-gradient(90deg, rgba(244, 246, 248, 0) 0%, #F4F6F8 100%)",
      rightDark: "linear-gradient(90deg, rgba(14, 18, 22, 0) 0%, #0E1216 100%)"
    },
    _v260 = () => {
      (0, _v3.useContext)(_v67.ViewerContext);
      let {
          hasPublicSearchDisabled: _v0
        } = _v68(),
        {
          type: _v1 = _v86.options.clip.value,
          sort: _v2,
          appliedFiltersCount: _v3
        } = _v175(),
        {
          sort: _v4,
          appliedFiltersCount: _v5
        } = _v188(),
        {
          data: _v6,
          isLoading: _v7
        } = _v187(),
        {
          data: _v8,
          isLoading: _v9
        } = _v191(),
        {
          panelStatus: _v10,
          togglePanel: _v11
        } = (0, _v3.useContext)(_v61),
        {
          searchType: _v12
        } = (0, _v3.useContext)(_v152),
        _v13 = _v12 === _v149,
        _v14 = _v13 ? _v5 : _v3,
        _v15 = _v14 > 0,
        _v16 = !_v0,
        [_v17, _v18] = _v137(_v4),
        [_v19, _v20] = _v137(_v2);
      _v13 ? _v8?.total : _v6?.total;
      let _v21 = _v13 ? _v9 || !_v8 : _v7 || !_v6;
      return (0, _v1.jsxs)(_v158.Grid, {
        templateColumns: "repeat(3, minmax(auto, max-content))",
        templateRows: {
          base: "repeat(2, max-content)",
          lg: "initial"
        },
        rowGap: _v16 ? {
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
        children: [_v16 && (0, _v1.jsx)(_v249, {}), (0, _v1.jsx)(_v156.Box, {
          gridArea: {
            base: _v16 ? "2/1" : "1/2",
            md: "2/1",
            lg: "1/2"
          },
          children: (0, _v1.jsx)(_v256, {
            showLoader: _v21
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
          children: [(0, _v1.jsx)(_v161.Button, {
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
            rightIcon: (0, _v1.jsx)(_v252, {
              isActive: _v17 === _v39 || _v19 === _v39,
              sortDirection: _v18 || _v20
            }),
            children: _v80.TITLE
          }), (0, _v1.jsxs)(_v8.Flex, {
            marginLeft: {
              base: "0",
              sm: "md"
            },
            children: [(0, _v1.jsx)(_v261, {
              onClick: () => _v11(_v58),
              rightIcon: (0, _v1.jsx)(_v234.SortSmall, {}),
              isActive: _v10 === _v58,
              dataTestId: "sort-button",
              children: (() => {
                let _v0 = _v13 ? _v4 : _v2;
                if (!_v0) return _v105.relevance.text;
                {
                  let _v0 = _v13 ? _v121 : _v120[_v1],
                    _v1 = Object.keys(_v0).find(_v0 => _v0[_v0].value === _v0);
                  return _v0[_v1].text;
                }
              })()
            }), (0, _v1.jsx)(_v261, {
              onClick: () => _v11(_v57),
              rightIcon: (0, _v1.jsx)(_v233.Filter, {}),
              isActive: _v10 === _v57,
              isApplied: _v15,
              dataTestId: "filter-button",
              children: _v15 ? _v80.filtersCount(_v14) : _v80.FILTERS
            })]
          })]
        })]
      });
    },
    _v261 = _v0 => {
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
      return (0, _v1.jsx)(_v232.Menu, {
        isLazy: !0,
        children: (0, _v1.jsx)(_v231.MenuButton, {
          as: _v161.Button,
          size: "sm",
          rightIcon: _v3,
          "data-testid": _v5,
          ..._v7,
          children: _v2
        })
      });
    };
  var _v262 = _v0.i(0),
    _v263 = _v0.i(0),
    _v264 = _v0.i(0),
    _v265 = _v0.i(0),
    _v266 = _v0.i(0);
  let _v267 = () => {
      let {
        sendNotificationView: _v0
      } = _v196();
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
        children: [(0, _v1.jsx)(_v266.CircleExclamation, {
          boxSize: {
            base: "xl",
            sm: "2xl"
          }
        }), (0, _v1.jsx)(_v160.Text, {
          variant: {
            base: "heading-lg",
            sm: "heading-xl"
          },
          children: _v80.UNABLE_LOAD_RESULTS
        }), (0, _v1.jsx)(_v160.Text, {
          variant: "body-lg",
          children: (0, _v1.jsx)(_v268, {})
        })]
      });
    },
    _v268 = () => {
      let {
        sendNotificationAction: _v0
      } = _v196();
      return (0, _v78.translate)({
        singular: "Refresh to try again or {STYLE}contact support{/STYLE}",
        replacements: {
          STYLE: _v0 => (0, _v1.jsx)(_v265.Link, {
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
  var _v269 = _v0.i(0);
  let _v270 = ({
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
      children: (0, _v1.jsx)(_v269.PaginationRoot, {
        page: _v1,
        count: _v5,
        pageSize: _v2,
        siblingCount: 2,
        onPageChange: _v0 => {
          _v3(_v0.page), _v0?.scrollTo(0, 0);
        },
        size: _v7,
        children: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v269.PaginationPrevTrigger, {}), _v0.pages.map((_v0, _v1) => {
            let _v2 = Math.min(_v0.totalPages - 2, _v1) - 3,
              _v3 = Math.max(_v1, 3) + 3;
            return "page" === _v0.type && (_v0.value === _v1 || _v0.value > _v2 && _v0.value < _v3) ? (0, _v1.jsx)(_v269.PaginationItem, {
              ..._v0
            }, _v1) : null;
          }), (0, _v1.jsx)(_v269.PaginationNextTrigger, {})]
        })
      })
    });
  };
  var _v271 = _v0.i(0),
    _v272 = _v0.i(0),
    _v273 = _v0.i(0),
    _v274 = _v0.i(0),
    _v275 = _v0.i(0),
    _v276 = _v0.i(0),
    _v277 = _v0.i(0),
    _v278 = _v0.i(0),
    _v279 = _v0.i(0),
    _v280 = _v0.i(0),
    _v281 = _v0.i(0),
    _v282 = _v0.i(0),
    _v283 = _v0.i(0),
    _v284 = _v0.i(0),
    _v285 = _v0.i(0),
    _v286 = _v0.i(0),
    _v287 = _v0.i(0),
    _v288 = _v0.i(0),
    _v289 = _v0.i(0),
    _v290 = _v0.i(0);
  let _v291 = "vimeo.click",
    _v292 = "general",
    _v293 = "click",
    _v294 = "showcases",
    _v295 = "search_result_page",
    _v296 = "showcase_list",
    _v297 = () => _v264.BigPictureClient.sendEvent(new _v264.Event("vimeo.click", 129, {
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
  var _v298 = _v0.i(0),
    _v299 = _v0.i(0),
    _v300 = _v0.i(0),
    _v301 = _v0.i(0),
    _v302 = _v0.i(0);
  async function _v303({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v177.measureLatency)("getVideoMoments", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/moments?${(0, _v178.searchQueryString)(_v3)}&fields=${_v1.map(_v178.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v178.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v178.deepCamelCase)(_v1);
    });
  }
  var _v304 = _v0.i(0);
  function _v305(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v183.useGctlConfig)();
    return (0, _v180.default)(_v2 ? `/videos/${_v2.where.videoId}/moments${(0, _v182.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v303({
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
  "true" === _v176.default.env.STORYBOOK && (0, _v182.assignMswData)(_v305, {
    endpoint: "/videos/:videoId/moments",
    method: "GET"
  }), "true" === _v176.default.env.STORYBOOK && (0, _v182.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v181.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v183.useGctlConfig)(),
      [_v5, _v6] = (0, _v182.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/moments${(0, _v182.serializeQuery)(_v0)}`, _v303({
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
  }), "true" === _v176.default.env.STORYBOOK && (0, _v182.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v183.useGctlConfig)();
    return (0, _v304.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/videos/${_v2.where.videoId}/moments?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v303({
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
  var _v306 = _v0.i(0),
    _v307 = _v0.i(0);
  let _v308 = (0, _v3.forwardRef)(({
      onClose: _v0,
      moments: _v1,
      videoLink: _v2,
      videoId: _v3,
      position: _v4
    }, _v5) => {
      let {
          query: _v6 = ""
        } = _v188(),
        {
          sendMomentClickEvent: _v7
        } = _v196(),
        _v8 = (0, _v3.useContext)(_v67.ViewerContext),
        _v9 = (0, _v289.useTheme)(),
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
      return (0, _v1.jsxs)(_v309, {
        ref: _v5,
        children: [(0, _v1.jsxs)(_v310, {
          children: [(0, _v1.jsx)("span", {
            children: _v14 > 100 ? (0, _v78.translate)({
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
            }) : (0, _v78.translate)({
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
          }), (0, _v1.jsx)(_v162.IconButton, {
            "aria-label": "close moments popover",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v306.ChevronUpSmall, {
              boxSize: "xs"
            }),
            size: "sm",
            onClick: _v0
          })]
        }), (0, _v1.jsx)(_v311, {
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
            let _v5 = _v139(_v3) || _v6;
            return (0, _v1.jsxs)(_v312, {
              "data-id": _v0,
              href: _v138(_v2, _v4, _v5, _v11),
              onClick: _v15,
              children: [(0, _v1.jsx)(_v313, {
                src: _v1?.url,
                alt: "moment thumbnail"
              }), (0, _v1.jsx)(_v314, {
                children: (0, _v218.secondsToDisplay)(Math.floor(_v4 / 0))
              }), (0, _v1.jsx)(_v217.Paragraph, {
                size: "sm",
                margin: "0",
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                sx: {
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": "2"
                },
                children: (0, _v1.jsx)(_v288.Highlight, {
                  query: _v5,
                  styles: {
                    fontFamily: _v10,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v140(_v2, _v5)
                })
              })]
            }, _v0);
          })
        }), _v14 > 4 && (0, _v1.jsx)(_v156.Box, {
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "lg",
          paddingY: "md",
          children: (0, _v1.jsx)(_v161.Button, {
            variant: "secondary",
            rightIcon: (0, _v1.jsx)(_v307.ArrowRight, {
              boxSize: "2xs"
            }),
            size: "md",
            as: "a",
            href: _v138(_v2, _v13[0].startTime, _v6, _v11),
            onClick: _v15,
            children: _v14 > 10 ? (0, _v78.translate)({
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
            }) : (0, _v78.translate)({
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
    _v309 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      flexDirection: "column",
      width: (0, _v9.rem)(432),
      padding: `${(0, _v9.rem)(8)} 0 0 ${(0, _v9.rem)(16)}`,
      ..._v0
    }),
    _v310 = _v0 => (0, _v1.jsx)(_v8.Flex, {
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
    _v311 = (0, _v3.forwardRef)(({
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
    _v312 = _v0 => (0, _v1.jsx)(_v161.Button, {
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
    _v313 = _v0 => (0, _v1.jsx)(_v156.Box, {
      as: "img",
      width: (0, _v9.rem)(80),
      height: (0, _v9.rem)(49.6),
      flexShrink: "0",
      borderRadius: "sm",
      ..._v0
    }),
    _v314 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      color: "text-primary",
      backgroundColor: "fill-component",
      height: (0, _v9.rem)(24),
      blur: "md",
      padding: "xs",
      alignItems: "center",
      borderRadius: "xs",
      ..._v0
    });
  function _v315({
    videoId: _v0,
    videoLink: _v1,
    position: _v2,
    handleNoMoments: _v3
  }) {
    let {
        query: _v4
      } = _v188(),
      [_v5, _v6] = (0, _v3.useState)(!1),
      [_v7, _v8] = _v255({
        threshold: 1
      }),
      _v9 = (0, _v3.useRef)(null),
      {
        data: _v10,
        isLoading: _v11,
        error: _v12
      } = _v305({
        select: _v55,
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
    (0, _v301.useOutsideClick)({
      ref: _v9,
      handler: () => _v6(!1)
    });
    let _v15 = _v10?.data?.slice(0, 1)[0]?.thumbnail?.url;
    if (_v11 || !_v10 || 0 === _v10.data.length) return null;
    let _v16 = _v10.data.length < 3 ? _v10?.data.length - 1 : 2;
    return (0, _v1.jsxs)(_v298.Popover, {
      placement: _v14,
      isOpen: _v5,
      offset: [0, -25],
      flip: !1,
      strategy: "fixed",
      children: [(0, _v1.jsx)(_v300.PopoverTrigger, {
        children: (0, _v1.jsx)(_v161.Button, {
          ref: _v7,
          onClick: _v0 => {
            _v13(_v0), _v6(!_v5);
          },
          rightIcon: (0, _v1.jsx)(_v302.ChevronDownSmall, {}),
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
            children: [(0, _v1.jsxs)(_v318, {
              children: [(0, _v1.jsx)(_v156.Box, {
                ..._v316
              }), [...Array(_v16)].map((_v0, _v1) => (0, _v1.jsx)(_v319, {}, _v1)), _v15 && (0, _v1.jsx)(_v317, {
                src: _v15,
                alt: "moment thumbnail"
              })]
            }), (0, _v1.jsx)("div", {
              children: _v10 && _v10?.total > 100 ? (0, _v78.translate)({
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
              }) : (0, _v78.translate)({
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
      }), (0, _v1.jsx)(_v299.PopoverContent, {
        borderRadius: "xl",
        backgroundColor: "fill-blur",
        padding: "0",
        onClick: _v0 => _v0.stopPropagation(),
        children: _v10 && (0, _v1.jsx)(_v308, {
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
  let _v316 = {
      width: (0, _v9.rem)(22),
      height: (0, _v9.rem)(16),
      borderRadius: "3px",
      background: "blackAlpha.300"
    },
    _v317 = _v0 => (0, _v1.jsx)(_v156.Box, {
      ..._v316,
      as: "img",
      position: "absolute",
      "z-index": "100",
      "border-width": "0.5px",
      ..._v0
    }),
    _v318 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ..._v0
    }),
    _v319 = () => (0, _v1.jsx)(_v70.Icon, {
      color: "blackAlpha.300",
      width: "4px !important",
      height: "16px",
      viewBox: "0 0 4 16",
      children: (0, _v1.jsx)("path", {
        d: "M0.666687 16H1.50975C2.88509 16 4.00002 14.5673 4.00002 12.8V3.2C4.00002 1.43269 2.88509 0 1.50975 0H0.666687C1.18368 0.586356 1.50975 1.44425 1.50975 2.4V13.6C1.50975 14.5558 1.18368 15.4136 0.666687 16Z",
        fill: "currentColor"
      })
    });
  var _v320 = _v0.i(0),
    _v321 = _v0.i(0);
  let _v322 = ({
    children: _v0,
    query: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v289.useTheme)(),
      _v4 = _v3?.fonts?.heading;
    return (0, _v1.jsx)(_v288.Highlight, {
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
  function _v323({
    moments: _v0,
    videoId: _v1,
    position: _v2,
    embedUrl: _v3,
    videoLink: _v4,
    reviewLink: _v5
  }) {
    let {
        query: _v6 = ""
      } = _v188(),
      {
        sendMomentClickEvent: _v7,
        sendMomentsTimelineClick: _v8
      } = _v196(),
      {
        setPanelMoments: _v9,
        panelMoments: _v10
      } = (0, _v3.useContext)(_v61),
      {
        currentIdx: _v11,
        currentVidId: _v12
      } = _v10,
      _v13 = _v1 === _v12,
      [_v14, _v15] = _v255({
        threshold: 1
      }),
      [_v16, _v17] = _v255({
        threshold: 1
      });
    return (0, _v1.jsxs)(_v156.Box, {
      position: "relative",
      children: [(0, _v1.jsx)(_v328, {
        background: _v329.leftLight,
        _dark: {
          background: _v329.leftDark
        },
        _groupHover: {
          background: _v329.leftLightHover,
          _dark: {
            background: _v329.leftDarkHover
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
          let _v9 = _v139(_v3) || _v6,
            _v10 = _v13 && _v11 !== _v8,
            _v11 = _v13 && _v8 === _v11,
            _v12 = 0 === _v8 ? _v16 : _v8 === _v0.data.length - 1 ? _v14 : void 0,
            _v13 = _v6 === _v125.comment || _v6 === _v125.commentReply;
          return (0, _v1.jsxs)(_v324, {
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
            children: [(0, _v1.jsx)(_v326, {
              width: {
                base: (0, _v9.rem)(100),
                md: (0, _v9.rem)(128)
              },
              children: (0, _v1.jsxs)(_v160.Text, {
                variant: "body-sm",
                color: _v11 ? "text-primary" : "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: [(0, _v218.secondsToDisplay)(Math.floor(_v4 / 0)), !_v13 && "- " + (0, _v218.secondsToDisplay)(Math.floor(_v5 / 0))]
              })
            }), (0, _v1.jsx)(_v325, {
              src: _v1?.url,
              alt: "moment thumbnail"
            }), (0, _v1.jsx)(_v217.Paragraph, {
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
              children: (0, _v1.jsx)(_v322, {
                query: _v9,
                children: _v140(_v2, _v9, 10, 20)
              })
            }), (0, _v1.jsx)(_v327, {
              type: _v6,
              attributes: _v7
            })]
          }, _v0);
        })
      }), (0, _v1.jsx)(_v328, {
        background: _v329.rightLight,
        right: "0",
        _dark: {
          background: _v329.rightDark
        },
        _groupHover: {
          background: _v329.rightLightHover,
          _dark: {
            background: _v329.rightDarkHover
          }
        },
        display: _v15 ? "none" : "block"
      })]
    });
  }
  let _v324 = (0, _v3.forwardRef)((_v0, _v1) => (0, _v1.jsx)(_v161.Button, {
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
    _v325 = _v0 => (0, _v1.jsx)(_v156.Box, {
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
    _v326 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      color: "text-secondary",
      height: (0, _v9.rem)(20),
      paddingX: "xs",
      alignItems: "center",
      variant: "timestamp",
      alignSelf: "flex-start",
      ..._v0
    }),
    _v327 = ({
      type: _v0,
      attributes: _v1
    }) => {
      let {
        label: _v2,
        Icon: _v3
      } = _v148(_v0, _v1);
      return (0, _v1.jsxs)(_v202.HStack, {
        gap: "xs",
        paddingX: "xs",
        w: "100%",
        height: (0, _v9.rem)(20),
        children: [(0, _v1.jsx)(_v3, {
          boxSize: `${(0, _v9.rem)(12)} !important`,
          color: "text-secondary"
        }), (0, _v1.jsx)(_v160.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v2
        })]
      });
    },
    _v328 = _v0 => {
      let {
        display: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v156.Box, {
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
    _v329 = {
      leftLight: "linear-gradient(270deg, rgba(244, 246, 248, 0.00) 0%, rgba(244, 246, 248, 0.30) 50%, #F4F6F8 100%)",
      leftDark: "linear-gradient(270deg, rgba(14, 18, 22, 0.00) 0%, rgba(14, 18, 22, 0.30) 50%, #0E1216 100%)",
      leftLightHover: "linear-gradient(270deg, rgba(232, 235, 239, 0.00) 0%, rgba(232, 235, 239, 0.30) 50%, #E8EBEF 100%)",
      leftDarkHover: "linear-gradient(270deg, rgba(28, 35, 40, 0.00) 0%, rgba(28, 35, 40, 0.30) 50%, #1C2328 100%)",
      rightLight: "linear-gradient(90deg, rgba(244, 246, 248, 0.00) 0%, rgba(244, 246, 248, 0.30) 50%, #F4F6F8 100%)",
      rightDark: "linear-gradient(90deg, rgba(14, 18, 22, 0.00) 0%, rgba(14, 18, 22, 0.30) 50%, #0E1216 100%)",
      rightLightHover: "linear-gradient(90deg, rgba(232, 235, 239, 0.00) 0%, rgba(232, 235, 239, 0.30) 50%, #E8EBEF 100%)",
      rightDarkHover: "linear-gradient(90deg, rgba(28, 35, 40, 0.00) 0%, rgba(28, 35, 40, 0.30) 50%, #1C2328 100%)"
    };
  function _v330({
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
      } = _v188(),
      [_v8, _v9] = (0, _v3.useState)(!1),
      _v10 = (0, _v3.useRef)(!1),
      {
        firstVideoWithMoments: _v11,
        onMomentsRequest: _v12,
        onMomentsResponse: _v13
      } = (0, _v3.useContext)(_v61),
      {
        sendMomentsTimelineImpressions: _v14,
        sendMomentsResultsImpressions: _v15
      } = _v196(),
      {
        dedupeMoments: _v16,
        chapterFallback: _v17
      } = _v68(),
      {
        data: _v18,
        isLoading: _v19,
        error: _v20
      } = _v305({
        select: _v55,
        where: {
          videoId: _v0
        },
        query: {
          perPage: 10,
          filterType: Object.values(_v125).join(","),
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
      children: [(0, _v1.jsx)(_v161.Button, {
        onClick: _v0 => {
          _v0.preventDefault(), _v0.stopPropagation(), _v9(!_v8);
        },
        rightIcon: _v8 ? (0, _v1.jsx)(_v321.ChevronUp, {
          boxSize: `${(0, _v9.rem)(20)} !important`
        }) : (0, _v1.jsx)(_v320.ChevronDown, {
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
          children: [!_v8 && (0, _v1.jsxs)(_v333, {
            children: [(0, _v1.jsx)(_v156.Box, {
              ..._v331,
              borderWidth: ".5px",
              borderColor: "stroke"
            }), [...Array(_v22)].map((_v0, _v1) => (0, _v1.jsx)(_v334, {}, _v1)), _v21 && (0, _v1.jsx)(_v332, {
              src: _v21,
              alt: "moment thumbnail"
            })]
          }), (0, _v1.jsx)(_v160.Text, {
            variant: "body-md",
            children: _v23 ? _v80.HIGH_RESULT_COUNT_MOMENTS : _v80.momentsResultCount(_v18?.total)
          }), (0, _v1.jsx)(_v207.Badge, {
            variant: "warning",
            size: "xs",
            height: (0, _v9.rem)(14),
            borderWidth: "0",
            pt: "1px",
            children: _v80.BETA
          })]
        })
      }), _v18 && _v8 && (0, _v1.jsx)(_v323, {
        moments: _v18,
        position: _v2,
        videoId: _v0,
        videoLink: _v1,
        embedUrl: _v4,
        reviewLink: _v5
      })]
    });
  }
  let _v331 = {
      width: (0, _v9.rem)(40),
      height: (0, _v9.rem)(24),
      borderRadius: (0, _v9.rem)(6),
      background: "blackAlpha.300",
      _dark: {
        background: "whiteAlpha.300"
      }
    },
    _v332 = _v0 => (0, _v1.jsx)(_v156.Box, {
      ..._v331,
      as: "img",
      position: "absolute",
      "z-index": "100",
      ..._v0
    }),
    _v333 = _v0 => (0, _v1.jsx)(_v8.Flex, {
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      marginRight: "xs",
      ..._v0
    }),
    _v334 = () => (0, _v1.jsx)(_v70.Icon, {
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
    _v335 = ({
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
        } = _v196(),
        _v23 = (0, _v3.useRef)(void 0),
        _v24 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          capabilities: {
            hasInVideoSearch: _v25
          }
        } = (0, _v63.useCapability)(["hasInVideoSearch"], _v24?.teamUser?.ownerId),
        {
          query: _v26 = ""
        } = _v188(),
        _v27 = (0, _v289.useTheme)(),
        _v28 = _v27?.fonts?.heading,
        _v29 = "video" === _v17,
        _v30 = _v29 ? _v126(_v9) : void 0,
        [_v31, _v32] = (0, _v3.useState)(!!_v30 && _v25 && !!_v26),
        _v33 = _v17 === _v97 ? "events" : _v17,
        _v34 = () => {
          _v22({
            entityType: _v33,
            position: _v8,
            uri: _v9
          });
        };
      return (0, _v1.jsxs)(_v272.ContentRow, {
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
        children: [(0, _v1.jsxs)(_v158.Grid, {
          w: "100%",
          gridTemplateColumns: _v16,
          alignItems: "center",
          padding: "sm",
          gap: ".5rem",
          children: [_v13 && (0, _v1.jsx)(_v272.ContentRow.Column, {
            children: (_v29 || _v17 === _v97) && (0, _v1.jsx)(_v272.ContentRow.SelectCheckbox, {
              size: "md",
              isDisabled: !_v6
            })
          }), (0, _v1.jsx)(_v272.ContentRow.Column, {
            href: _v5,
            children: _v3
          }), (0, _v1.jsx)(_v272.ContentRow.Column, {
            href: _v5,
            overflow: "hidden",
            margin: `0 0 0 ${(0, _v9.rem)(4)}`,
            children: (0, _v1.jsxs)(_v8.Flex, {
              flexDir: "column",
              gap: "sm",
              width: "100%",
              children: [(0, _v1.jsx)(_v160.Text, {
                variant: "body-lg",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: (0, _v1.jsx)(_v288.Highlight, {
                  query: _v26,
                  styles: {
                    fontFamily: _v28,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v0
                })
              }), _v1 && (0, _v1.jsx)(_v160.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "block",
                children: (0, _v1.jsx)(_v288.Highlight, {
                  query: _v26,
                  styles: {
                    fontFamily: _v28,
                    color: "text-primary",
                    bgColor: "transparent !important",
                    padding: "0"
                  },
                  children: _v1
                })
              }), _v31 && !_v18 && (0, _v1.jsx)(_v315, {
                videoId: _v30,
                videoLink: _v5,
                position: _v8,
                handleNoMoments: () => _v32(!1)
              })]
            })
          }), _v14 && (0, _v1.jsx)(_v272.ContentRow.Column, {
            href: _v4?.href || _v5,
            overflow: "auto",
            margin: `0 0 0 ${(0, _v9.rem)(24)}`,
            onClick: _v0 => {
              _v0.stopPropagation(), (({
                position: _v0
              }) => {
                _v264.BigPictureClient.sendEvent(new _v264.Event("vimeo.click_folder_card", 3, {
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
              children: (0, _v1.jsx)(_v160.Text, {
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
          }), _v15 && (0, _v1.jsx)(_v272.ContentRow.Column, {
            href: _v5,
            overflow: "hidden",
            children: (0, _v1.jsx)(_v160.Text, {
              width: "100%",
              variant: "body-md",
              color: "text-secondary",
              noOfLines: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "block",
              children: _v2
            })
          }), (0, _v1.jsxs)(_v272.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: [(0, _v1.jsx)(_v156.Box, {
              children: _v12
            }), _v15 && _v11]
          })]
        }), _v31 && _v18 && (0, _v1.jsx)(_v330, {
          videoId: _v30,
          videoLink: _v5,
          position: _v8,
          handleNoMoments: () => _v32(!1),
          embedUrl: _v19,
          reviewLink: _v20
        })]
      });
    },
    _v336 = ({
      liveEventItem: _v0,
      index: _v1,
      onToggleSelected: _v2
    }) => {
      let _v3 = _v212(),
        _v4 = (0, _v14.useViewer)(),
        [_v5] = (0, _v271.useMediaQuery)(_v47),
        {
          getEventShareLoopTrackingParams: _v6
        } = (0, _v287.useShareLoopTrackingParams)(),
        {
          revalidateAll: _v7
        } = _v191(),
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
        _v23 = !!_v11 && (0, _v284.getHasDatePassed)(_v11),
        _v24 = (0, _v286.useEventScheduledAt)(_v8, _v4?.locale),
        _v25 = (0, _v285.idFromUri)(_v16.uri),
        _v26 = _v6(_v281.PAGE.SEARCH),
        _v27 = `${_v4?.vimeoHttpsUrl + _v18}${_v26}`;
      return (0, _v1.jsx)(_v335, {
        type: _v97,
        href: _v21 ? _v19 : _v12,
        title: _v14,
        position: _v1,
        uri: _v15,
        isSelectable: _v0.isSelectable,
        isSelected: _v0.isSelected,
        onToggleSelected: () => _v2(_v15),
        thumbnail: (0, _v1.jsx)(_v282.EventThumbnail, {
          thumbnail: _v22 ? _v13.sizes[3].link : "",
          nextOccurrenceTime: _v11,
          isLive: _v10?.connections?.liveVideo?.status === "streaming",
          isUpcoming: !!_v11,
          hasScheduledDatePassed: _v23,
          status: _v17,
          minWidth: (0, _v9.rem)(_v5 ? "114" : "142")
        }),
        subTitle: _v24,
        timestamp: _v133(_v9, _v4?.locale),
        location: _v135(_v0),
        ..._v3,
        menuButton: (0, _v1.jsx)(_v283.EventMenu, {
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
    _v337 = ({
      showCheckboxColumn: _v0,
      showLocationColumn: _v1,
      showModifiedColumn: _v2,
      gridColumns: _v3
    }) => {
      let {
          sendSortEvent: _v4
        } = _v196(),
        {
          sort: _v5,
          onLibraryFilterChange: _v6,
          type: _v7
        } = _v188(),
        [_v8, _v9] = _v137(_v5),
        _v10 = _v8 === _v41,
        _v11 = _v7 === _v98.options.showcase.value,
        _v12 = _v5 || _v121.relevance.value,
        _v13 = _v0 => {
          let _v1 = _v8 === _v0 ? `${_v0}_${"asc" === _v9 ? "desc" : "asc"}` : (_v0 => {
            switch (_v0) {
              case _v39:
                return _v105.titleAsc.value;
              case _v40:
                return _v105.lastModified.value;
              case _v41:
                return _v105.lastAdded.value;
              default:
                return _v105.relevance.value;
            }
          })(_v0);
          _v6(_v36, _v1);
          let _v2 = null;
          for (let _v0 of Object.values(_v121)) if (_v0.value === _v1) {
            _v2 = _v0.untranslatedText;
            break;
          }
          _v4({
            copy: _v2,
            value: _v1,
            previousValue: _v12
          });
        },
        _v14 = _v10 ? _v80.ADDED : _v80.MODIFIED;
      return (0, _v1.jsxs)(_v272.ContentRow, {
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
        children: [_v0 && (0, _v1.jsx)(_v272.ContentRow.Column, {
          children: (0, _v1.jsx)(_v161.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-14),
            onClick: () => _v13(_v39),
            rightIcon: (0, _v1.jsx)(_v252, {
              isActive: _v8 === _v39,
              sortDirection: _v9
            }),
            children: _v80.TITLE
          })
        }), (0, _v1.jsx)(_v272.ContentRow.Column, {
          margin: "10px",
          children: !_v0 && (0, _v1.jsx)(_v161.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-32),
            onClick: () => _v13(_v39),
            rightIcon: (0, _v1.jsx)(_v252, {
              isActive: _v8 === _v39,
              sortDirection: _v9
            }),
            children: _v80.TITLE
          })
        }), (0, _v1.jsx)(_v272.ContentRow.Column, {
          overflow: "hidden",
          children: "--"
        }), _v1 && (0, _v1.jsx)(_v272.ContentRow.Column, {
          overflow: "hidden",
          margin: `0 0 0 ${(0, _v9.rem)(24)}`,
          children: (0, _v1.jsx)(_v160.Text, {
            variant: "heading-xs",
            children: _v11 ? (0, _v78.translate)({
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
            }) : _v80.LOCATION
          })
        }), _v2 && (0, _v1.jsx)(_v272.ContentRow.Column, {
          children: (0, _v1.jsx)(_v161.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: (0, _v9.rem)(-12),
            rightIcon: (0, _v1.jsx)(_v252, {
              isActive: _v8 === _v41 || _v8 === _v40,
              sortDirection: _v9
            }),
            onClick: () => _v10 ? _v13(_v41) : _v13(_v40),
            children: _v14
          })
        }), (0, _v1.jsx)(_v272.ContentRow.Column, {
          children: "--"
        })]
      });
    };
  var _v338 = _v0.i(0),
    _v339 = _v0.i(0),
    _v340 = _v0.i(0),
    _v341 = _v0.i(0),
    _v342 = _v0.i(0);
  let _v343 = ({
      thumbnails: _v0
    }) => {
      let [_v1] = (0, _v271.useMediaQuery)(_v47),
        _v2 = _v1 ? "114" : "142";
      return _v0?.[0] ? (0, _v1.jsx)(_v272.ContentRow.Thumbnail, {
        src: _v0[0],
        alt: "showcase thumbnail",
        minWidth: (0, _v9.rem)(_v2)
      }) : (0, _v1.jsx)(_v272.ContentRow.DefaultThumbnail, {
        minWidth: (0, _v9.rem)(_v2),
        children: (0, _v1.jsx)(_v342.VideosStackFilled, {
          color: "text-tertiary",
          boxSize: "sm",
          opacity: "60%"
        })
      });
    },
    _v344 = ({
      showcase: _v0,
      index: _v1
    }) => {
      var _v2, _v3;
      let _v4,
        _v5,
        _v6,
        _v7 = _v212(),
        _v8 = (0, _v14.useViewer)(),
        _v9 = (0, _v173.useAnalyticsEvent)(),
        {
          type: _v10,
          sort: _v11
        } = _v188(),
        {
          revalidateAll: _v12
        } = _v191(),
        _v13 = (0, _v280.useNotification)(),
        _v14 = (0, _v341.useShowcaseDeleteModal)(),
        {
          getShowcaseShareLoopTrackingParams: _v15
        } = (0, _v287.useShareLoopTrackingParams)(),
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
        _v25 = _v10 === _v98.options.showcase.value,
        _v26 = (_v2 = _v21, _v3 = !!_v17, (_v6 = ((_v5 = _v2.match(/albums\/\d+/g)) && (_v4 = _v5[0].split("/").pop()), _v4)) ? _v3 ? `/manage/showcases/${_v6}` : `/showcase/${_v6}` : "/library/showcases"),
        _v27 = _v20.slice(0, 3).map(_v0 => {
          let _v1 = _v0?.sizes?.[1]?.link;
          if (_v1) {
            let _v0;
            return (_v0 = new URL(_v1)).searchParams.delete("r"), _v0.toString();
          }
          return "";
        }),
        _v28 = (0, _v340.useDeleteShowcase)({
          onFailure: () => {
            _v14.setIsLoading(!1), _v13({
              content: _v80.GENERIC_ERROR,
              status: "error"
            });
          },
          onSuccess: ({
            name: _v0,
            uri: _v1
          }) => {
            _v13({
              content: _v80.deletedShowcase(_v0)
            }), _v12(new Set(_v1)), _v14.setIsLoading(!1), _v14.close();
          }
        });
      return (0, _v1.jsx)(_v335, {
        type: "showcase",
        href: _v26,
        title: _v19,
        position: _v1,
        uri: _v21,
        thumbnail: (0, _v1.jsx)(_v343, {
          thumbnails: _v27
        }),
        subTitle: (0, _v78.translate)({
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
        timestamp: _v133(_v11 === _v41 ? _v16 : _v24, _v8?.locale),
        location: {
          name: _v25 ? _v345[_v23.view] ?? _v23.view : _v80.SHOWCASES
        },
        ..._v7,
        menuButton: (0, _v1.jsx)(_v338.ShowcaseMenu, {
          canDelete: !!_v0?.metadata?.interactions?.delete,
          hasEmbedCode: !!_v0?.embed?.html,
          hasEmbedOnlyPrivacy: _v0?.privacy?.view === "embed_only",
          onClick: () => {
            _v9({
              eventName: _v291,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v293,
                copy: null,
                device_type: (0, _v290.getDeviceType)(),
                feature: _v294,
                location: _v296,
                name: "showcase_menu",
                page: _v295,
                path: window.location.pathname,
                target: "overflow menu",
                target_path: null,
                third_party_integration: null,
                type: _v292
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          },
          onCopyLink: () => {
            let _v0;
            _v0 = _v15(_v281.PAGE.SEARCH), (0, _v339.default)(`${_v22}${_v0}`) ? _v13({
              content: _v80.LINK_COPIED
            }) : _v13({
              content: _v80.GENERIC_ERROR,
              status: "error"
            }), _v9({
              eventName: _v291,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v293,
                copy: "copy link",
                device_type: (0, _v290.getDeviceType)(),
                feature: _v294,
                location: _v296,
                name: "showcase_copy_link",
                page: _v295,
                path: window.location.pathname,
                target: "copy link",
                target_path: null,
                third_party_integration: null,
                type: _v292
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          },
          onCopyEmbed: () => {
            if (_v17?.html) {
              var _v0;
              _v0 = _v17?.html, (0, _v339.default)(_v0) ? _v13({
                content: _v80.EMBED_CODE_COPIED
              }) : _v13({
                content: _v80.GENERIC_ERROR,
                status: "error"
              }), _v9({
                eventName: _v291,
                version: 110,
                fields: {},
                defaultEventFields: {
                  click_type: _v293,
                  copy: "copy embed code",
                  device_type: (0, _v290.getDeviceType)(),
                  feature: _v294,
                  location: _v296,
                  name: "showcase_copy_embed_code",
                  page: _v295,
                  path: window.location.pathname,
                  target: "copy embed code",
                  target_path: null,
                  third_party_integration: null,
                  type: _v292
                },
                globalAnalyticsToInclude: ["page", "path"]
              });
            }
          },
          onClickViewShowcase: () => {
            window.open(_v22, "_blank"), _v9({
              eventName: _v291,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v293,
                copy: "view showcase",
                device_type: (0, _v290.getDeviceType)(),
                feature: _v294,
                location: _v296,
                name: "view_showcase",
                page: _v295,
                path: window.location.pathname,
                target: "view showcase",
                target_path: "/showcase/id",
                third_party_integration: null,
                type: _v292
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          },
          onDelete: () => {
            _v14.open({
              onConfirm: () => {
                _v14.setIsLoading(!0), _v28(_v0), _v9({
                  eventName: _v291,
                  version: 110,
                  fields: {},
                  defaultEventFields: {
                    click_type: _v293,
                    copy: "delete",
                    device_type: (0, _v290.getDeviceType)(),
                    feature: _v294,
                    location: "delete_modal",
                    name: "confirm_delete_showcase",
                    page: _v295,
                    path: window.location.pathname,
                    target: "delete",
                    target_path: null,
                    third_party_integration: null,
                    type: _v292
                  },
                  globalAnalyticsToInclude: ["page", "path"]
                });
              },
              onDismiss: () => {
                _v14.close();
              },
              name: _v0.name
            }), _v9({
              eventName: _v291,
              version: 110,
              fields: {},
              defaultEventFields: {
                click_type: _v293,
                copy: "delete showcase",
                device_type: (0, _v290.getDeviceType)(),
                feature: _v294,
                location: _v296,
                name: "delete_showcase",
                page: _v295,
                path: window.location.pathname,
                target: "delete showcase",
                target_path: null,
                third_party_integration: null,
                type: _v292
              },
              globalAnalyticsToInclude: ["page", "path"]
            });
          }
        })
      }, _v21);
    },
    _v345 = {
      anybody: _v80.PRIVACY_PUBLIC,
      embed_only: _v80.PRIVACY_EMBED,
      nobody: _v80.PRIVACY_NOBODY,
      password: _v80.PRIVACY_PASSWORD,
      team: _v80.PRIVACY_TEAM,
      unlisted: _v80.PRIVACY_UNLISTED
    },
    _v346 = ({
      items: _v0,
      onToggleSelected: _v1,
      showNewMoments: _v2
    }) => {
      let _v3 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          revalidateAll: _v4,
          mutate: _v5
        } = _v191(),
        {
          openCopyVideoModal: _v6,
          copyVideoModal: _v7
        } = (0, _v279.useCopyVideoFlow)({
          onAfterCopySuccess: () => _v4()
        }),
        {
          sort: _v8
        } = _v188(),
        {
          sendDeleteVideo: _v9
        } = _v196(),
        {
          notifyItemMoveSuccess: _v10
        } = (0, _v280.useNotifications)(),
        {
          hasVideoReviewPageDemo: _v11,
          canSeeUpsellModalOnShare: _v12,
          hasContentSpaceEnabled: _v13,
          hasMultipleReviewLinks: _v14
        } = _v68(),
        _v15 = _v13 ? (0, _v78.translate)({
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
        }) : (0, _v78.translate)({
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
        _v16 = _v212(),
        [_v17] = (0, _v271.useMediaQuery)(_v47),
        _v18 = _v17 ? "114" : "142",
        [_v19] = _v137(_v8),
        _v20 = _v19 === _v41,
        _v21 = ({
          selectedDestination: _v0,
          video: _v1
        }) => {
          _v4(), _v10(_v1.name, {
            label: "root" === _v0 ? _v15 : _v0.name,
            link: "root" === _v0 ? "/library" : _v136(_v0.uri)
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
        children: [!_v17 && (0, _v1.jsx)(_v337, {
          ..._v16
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
                  name: _v3,
                  pictures: _v4,
                  uri: _v5,
                  description: _v6,
                  playerEmbedUrl: _v7,
                  reviewPage: _v8
                } = _v0,
                _v9 = _v20 ? _v0.createdTime : _v0.lastUserActionEventDate || "";
              return (0, _v1.jsx)(_v335, {
                type: _v0.type,
                title: _v3,
                subTitle: _v6 || "",
                position: _v1,
                uri: _v5,
                thumbnail: (0, _v1.jsx)(_v272.ContentRow.Thumbnail, {
                  alt: "",
                  src: _v4?.sizes[3].link,
                  badgeText: (0, _v218.secondsToDisplay)(_v1),
                  minWidth: (0, _v9.rem)(_v18)
                }),
                timestamp: _v133(_v9, _v3?.locale),
                location: _v135(_v0),
                href: _v2,
                embedUrl: _v7,
                isSelectable: _v0.isSelectable,
                isSelected: _v0.isSelected,
                reviewLink: _v8?.link,
                ..._v16,
                onToggleSelected: () => _v1(_v5),
                showNewMoments: _v2,
                hoverActions: (0, _v1.jsx)(_v275.ListViewHoverActionsContainer, {
                  children: (0, _v1.jsx)(_v273.TopRightDecoration, {
                    video: _v0,
                    shouldUpdateSideNavStars: !0,
                    buttonVariant: "minimal",
                    flexDirection: "row",
                    location: "video_list",
                    pageName: _v281.PAGE.SEARCH
                  })
                }),
                menuButton: (0, _v1.jsx)(_v277.VideoMenu, {
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
              return (0, _v1.jsx)(_v335, {
                type: _v0.type,
                href: _v136(_v2),
                title: _v3,
                position: _v1,
                uri: _v2,
                thumbnail: (0, _v1.jsx)(_v278.FolderRowThumbnail, {
                  backgroundColor: _v4?.color,
                  minWidth: (0, _v9.rem)(_v18)
                }),
                subTitle: (_v0 = _v5?.connections?.items?.total, (0, _v78.translate)({
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
                timestamp: _v133(_v6, _v3?.locale),
                location: _v135(_v0),
                ..._v16,
                hoverActions: (0, _v1.jsx)(_v275.ListViewHoverActionsContainer, {
                  children: (0, _v1.jsx)(_v274.FolderTopRightDecoration, {
                    folder: _v1,
                    buttonVariant: "minimal",
                    flexDirection: "row",
                    location: "video_list"
                  })
                }),
                menuButton: (0, _v1.jsx)(_v276.FolderMenu, {
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
            return _v0?.showcase?.uri ? (0, _v1.jsx)(_v344, {
              showcase: _v0.showcase,
              index: _v1
            }, _v0.showcase.uri) : _v0?.liveEvent?.uri ? (0, _v1.jsx)(_v336, {
              liveEventItem: _v0,
              index: _v1,
              onToggleSelected: _v1
            }, _v0.liveEvent.uri) : (0, _v1.jsx)(_v1.Fragment, {});
          })
        }), _v7]
      });
    };
  var _v347 = _v0.i(0),
    _v348 = _v0.i(0),
    _v349 = _v0.i(0);
  let _v350 = () => {
      let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
        _v1 = (0, _v348.useUpsellModal)(),
        _v2 = _v0?.teamUser ? "enterprise" === _v0.teamUser.accountType : _v0?.user?.account === "enterprise";
      return (0, _v1.jsx)(_v8.Flex, {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v349.EmptyState, {
          cta: (0, _v1.jsxs)(_v8.Flex, {
            gap: "lg",
            children: [(0, _v1.jsx)(_v161.Button, {
              variant: "secondary",
              as: "a",
              href: "/live/select",
              onClick: _v297,
              children: _v80.START_FREE_DEMO
            }), (0, _v1.jsx)(_v161.Button, {
              variant: "upsell",
              as: "a",
              href: _v2 ? "/enterprise/contact?mkc=%230920" : void 0,
              cursor: "pointer",
              onClick: () => {
                _v2 || (_v264.BigPictureClient.sendEvent(new _v264.Event("vimeo.upgrade_action", 21, {
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
                    headerText: _v80.UPSELL_HEADER,
                    subHeaderText: _v80.UPSELL_MODAL_SUBHEADER,
                    excludePlans: ["starter", "standard", "creator"],
                    planOverrides: {
                      ADVANCE: {
                        subHeading: _v80.ADVANCED_PLAN_SUBHEADER,
                        featuresList: _v80.ADVANCED_PLAN_FEATURES_LIST
                      },
                      ENTERPRISE: {
                        subHeading: _v80.ENTERPRISE_PLAN_SUBHEADER,
                        featuresList: _v80.ENTERPRISE_PLAN_FEATURES_LIST
                      }
                    }
                  },
                  templateType: "default"
                }));
              },
              children: _v2 ? _v80.CONTACT_US : _v80.UPGRADE
            })]
          }),
          header: _v80.UPSELL_HEADER,
          subheader: _v80.UPSELL_SUBHEADER,
          icon: (0, _v1.jsx)(_v347.CameraOn, {
            boxSize: "2xl"
          })
        })
      });
    },
    _v351 = () => {
      let _v0 = _v212(),
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
          children: [(0, _v1.jsx)(_v337, {
            ..._v0
          }), [,,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v272.ContentRow, {
            listGridColumns: _v4,
            isSelected: !1,
            role: "group",
            disableHover: !0,
            width: "100%",
            padding: "sm",
            gap: ".5rem",
            children: [_v1 && (0, _v1.jsx)(_v272.ContentRow.Column, {
              children: (0, _v1.jsx)(_v1.Fragment, {})
            }), (0, _v1.jsx)(_v272.ContentRow.Column, {
              children: (0, _v1.jsx)(_v156.Box, {
                aspectRatio: 16 / 9,
                width: _v5,
                children: (0, _v1.jsx)(_v201.Skeleton, {
                  height: "100%",
                  width: "100%"
                })
              })
            }), (0, _v1.jsx)(_v272.ContentRow.Column, {
              width: "100%",
              children: (0, _v1.jsxs)(_v8.Flex, {
                direction: "column",
                gap: "1rem",
                justifyContent: "left",
                paddingLeft: "0.5rem",
                width: "100%",
                children: [(0, _v1.jsx)(_v201.Skeleton, {
                  variant: "text",
                  width: "85%"
                }), (0, _v1.jsx)(_v201.Skeleton, {
                  variant: "text",
                  maxWidth: "20%"
                })]
              })
            }), _v2 && (0, _v1.jsx)(_v272.ContentRow.Column, {
              children: (0, _v1.jsx)(_v8.Flex, {
                margin: `0 0 0 ${(0, _v9.rem)(24)}`,
                children: (0, _v1.jsx)(_v201.Skeleton, {
                  variant: "text",
                  width: "4rem"
                })
              })
            }), _v3 && (0, _v1.jsx)(_v272.ContentRow.Column, {
              children: (0, _v1.jsx)(_v8.Flex, {
                children: (0, _v1.jsx)(_v201.Skeleton, {
                  variant: "text",
                  w: "5rem",
                  alignItems: "flex-end"
                })
              })
            }), (0, _v1.jsx)(_v272.ContentRow.Column, {
              children: (0, _v1.jsx)(_v1.Fragment, {})
            })]
          }, `loading-state-skeleton-card-list-${_v1}`))]
        })
      });
    };
  var _v352 = _v0.i(0);
  let _v353 = () => {
      let _v0,
        _v1 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          searchType: _v2,
          toggleSearchType: _v3
        } = (0, _v3.useContext)(_v152),
        {
          capabilities: {
            hasEnterprise: _v4,
            hasPublicSearchDisabled: _v5
          }
        } = (0, _v63.useCapability)(["hasEnterprise", "hasPublicSearchDisabled"], _v1?.teamUser?.ownerId),
        _v6 = _v2 === _v149,
        _v7 = !1 === _v4 && !1 === _v5,
        _v8 = _v6 ? _v80.NO_LIBRARY_RESULTS : _v80.NO_PUBLIC_RESULTS,
        _v9 = _v6 && _v7 ? _v80.TRY_AGAIN_OR_SEARCH_VIMEO : _v80.TRY_ANOTHER_SEARCH;
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
        children: [(0, _v1.jsx)(_v352.SearchMagnifier, {
          boxSize: {
            base: "xl",
            sm: "2xl"
          }
        }), (0, _v1.jsx)(_v160.Text, {
          variant: {
            base: "heading-lg",
            sm: "heading-xl"
          },
          children: _v8
        }), (0, _v1.jsx)(_v160.Text, {
          variant: "body-lg",
          color: "text-secondary",
          children: _v9
        }), _v6 && _v7 && (0, _v1.jsx)(_v161.Button, {
          size: "md",
          variant: "primary",
          onClick: () => _v3(),
          children: (0, _v78.translate)({
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
        }), (0, _v1.jsx)(_v160.Text, {
          variant: "body-lg",
          color: "text-secondary",
          position: "absolute",
          bottom: "0",
          children: (_v0 = _v1?.locale, (0, _v78.translate)({
            singular: "Looking for {STYLE}account or billing help{/STYLE}?",
            replacements: {
              STYLE: _v0 => (0, _v1.jsx)(_v265.Link, {
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
    _v354 = () => {
      let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
        _v1 = (0, _v3.useRef)(null),
        {
          canManageTeamCollections: _v2,
          hasLiveSubscription: _v3,
          hasNewMoments: _v4,
          hasReframeOverride: _v5
        } = _v68(),
        [_v6, _v7] = (0, _v3.useState)(new Set()),
        _v8 = (0, _v173.useAnalyticsEvent)(),
        {
          data: _v9,
          error: _v10,
          isLoading: _v11,
          revalidateAll: _v12
        } = _v191(),
        {
          sort: _v13,
          page: _v14,
          updatePage: _v15,
          onOmnisearchChange: _v16,
          filters: _v17,
          type: _v18,
          query: _v19
        } = _v188(),
        _v20 = (0, _v3.useRef)(_v13),
        {
          sendSearchResultsPage: _v21
        } = _v196(),
        {
          toggleSearchType: _v22
        } = (0, _v3.useContext)(_v152),
        {
          resetMomentsStatus: _v23
        } = (0, _v3.useContext)(_v61),
        _v24 = _v5 && _v145(_v19),
        {
          allItems: _v25,
          canMoveSelection: _v26,
          canDeleteSelection: _v27,
          selectedItems: _v28,
          canChangePrivacySelection: _v29,
          canAddToShowcasesSelection: _v30,
          hasReachedMaxSelectionForMove: _v31,
          hasReachedMaxSelectionForPrivacy: _v32,
          hasReachedMaxSelectionForSentimentWidget: _v33,
          hasReachedMaxSelectionForShowcases: _v34
        } = (0, _v263.useBulkItems)({
          canDeleteItem: _v0 => !!_v0?.video?.metadata?.interactions?.delete || !!_v0?.liveEvent?.metadata?.interactions?.delete,
          canMoveItem: _v0 => !!_v0?.video?.canMoveToProject || !!_v0?.liveEvent?.metadata?.interactions?.edit,
          canChangeItemPrivacy: _v0 => !!_v0?.video?.metadata?.interactions?.edit,
          canAddToShowcases: _v0 => !!_v0?.video?.metadata?.interactions?.edit,
          items: _v9?.data,
          selectedURIs: _v6
        }),
        {
          capabilities: _v35
        } = (0, _v63.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v0?.teamUser?.ownerId),
        _v36 = !!_v35.canGenerateClipTextTranslation,
        _v37 = (!!_v35.canGenerateClipTranslation || _v36) && !!_v35.canPerformBulkTranslations;
      return ((0, _v3.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.detail.searchType === _v38 ? _v22(_v0) : _v16(_v0);
        };
        return document.addEventListener("omnisearchQueryChange", _v0), () => document.removeEventListener("omnisearchQueryChange", _v0);
      }, [_v17]), (0, _v3.useEffect)(() => {
        _v9?.data && _v20.current === _v13 ? _v21() : _v20.current = _v13;
      }, [_v9?.data]), (0, _v3.useEffect)(() => {
        _v23();
      }, [_v14]), _v10) ? (0, _v1.jsx)(_v267, {}) : _v11 || !_v9 ? (0, _v1.jsx)(_v156.Box, {
        width: "100%",
        minHeight: (0, _v9.rem)(450),
        children: (0, _v1.jsx)(_v351, {})
      }) : _v9?.data && _v9?.data.length !== 0 ? (0, _v1.jsxs)(_v156.Box, {
        width: "100%",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          height: "100%",
          pb: {
            base: "3xl",
            sm: "lg"
          },
          children: [(0, _v1.jsx)(_v346, {
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
          }), (0, _v1.jsx)(_v270, {
            scrollContainer: _v1.current,
            updatePage: _v15,
            page: _v14,
            pageSize: 10,
            data: _v9
          })]
        }), (0, _v1.jsx)(_v262.BulkActions, {
          canUseBulkTranslation: _v37,
          canAddToShowcases: _v2,
          canMoveSelection: _v26,
          canDeleteSelection: _v27,
          canChangePrivacySelection: _v29,
          canAddToShowcasesSelection: _v30,
          deselectAllItems: () => _v7(new Set()),
          hasReachedMaxSelectionForMove: _v31,
          hasReachedMaxSelectionForPrivacy: _v32,
          hasReachedMaxSelectionForSentimentWidget: _v33,
          hasReachedMaxSelectionForShowcases: _v34,
          removeItems: () => _v12(_v6),
          revalidateItems: _v12,
          selectedItems: _v28,
          selectedItemURIs: _v6,
          teamOwnerId: _v0?.teamUser?.ownerId || _v0?.user?.id
        })]
      }) : _v24 ? (0, _v1.jsx)(_v156.Box, {}) : _v3 || _v18 !== _v98.options.live_event.value ? (0, _v1.jsx)(_v353, {}) : (0, _v1.jsx)(_v350, {});
    };
  var _v172 = _v172;
  let _v355 = {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4,
      "2xl": 5
    },
    _v356 = () => (0, _v1.jsxs)(_v8.Flex, {
      width: "100%",
      padding: "sm",
      flexDir: "column",
      height: "min-content",
      children: [(0, _v1.jsx)(_v201.Skeleton, {
        h: "100%",
        borderRadius: "md",
        aspectRatio: 16 / 9
      }), (0, _v1.jsxs)(_v8.Flex, {
        flexDir: "column",
        gap: "3",
        marginTop: "md",
        children: [(0, _v1.jsx)(_v201.Skeleton, {
          variant: "text",
          w: "60%"
        }), (0, _v1.jsx)(_v201.Skeleton, {
          variant: "text",
          w: "45%"
        })]
      })]
    }),
    _v357 = {
      clip: _v356,
      people: () => (0, _v25.useBreakpointValue)({
        base: !0,
        sm: !1
      }) ? (0, _v1.jsxs)(_v202.HStack, {
        width: "100%",
        children: [(0, _v1.jsx)(_v201.Skeleton, {
          variant: "circle",
          w: (0, _v9.rem)(64),
          h: (0, _v9.rem)(64)
        }), (0, _v1.jsxs)(_v203.VStack, {
          justifyContent: "center",
          alignItems: "start",
          gap: "4",
          flexGrow: "1",
          children: [(0, _v1.jsx)(_v201.Skeleton, {
            variant: "text",
            w: "45%"
          }), (0, _v1.jsx)(_v201.Skeleton, {
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
        children: [(0, _v1.jsx)(_v201.Skeleton, {
          variant: "circle",
          w: (0, _v9.rem)(96),
          h: (0, _v9.rem)(96)
        }), (0, _v1.jsxs)(_v8.Flex, {
          flexDir: "column",
          gap: "lg",
          marginTop: "md",
          w: "100%",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v201.Skeleton, {
            variant: "text",
            w: "45%"
          }), (0, _v1.jsx)(_v201.Skeleton, {
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
        children: [(0, _v1.jsx)(_v201.Skeleton, {
          h: "100%",
          borderRadius: "md",
          aspectRatio: 2 / 3
        }), (0, _v1.jsx)(_v201.Skeleton, {
          marginTop: "md",
          marginBottom: "sm",
          variant: "text"
        })]
      }),
      channel: _v356,
      group: _v356
    },
    _v358 = () => {
      let {
          type: _v0 = _v86.options.clip.value
        } = _v175(),
        _v1 = _v357[_v0];
      return (0, _v1.jsx)(_v1.Fragment, {
        children: [1, 2, 3].map((_v0, _v1) => (0, _v1.jsx)(_v1, {}, _v1))
      });
    };
  var _v359 = _v0.i(0),
    _v360 = _v0.i(0),
    _v361 = _v0.i(0),
    _v362 = _v0.i(0);
  let _v363 = ({
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
        [_v9, _v10] = (0, _v362.getAvatarImages)(_v6?.sizes);
      return (0, _v1.jsxs)(_v203.VStack, {
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
          borderRadius: "100%",
          border: "1px solid",
          borderColor: "stroke",
          children: (0, _v1.jsx)(_v360.Avatar, {
            size: "auto",
            alt: _v5,
            src: _v9,
            srcSet: _v10,
            nameProps: {
              name: _v5
            }
          })
        }), (0, _v1.jsx)(_v160.Text, {
          variant: "heading-sm",
          isTruncated: !0,
          maxWidth: "85%",
          children: _v5
        }), (0, _v1.jsx)(_v202.HStack, {
          height: (0, _v9.rem)(24),
          gap: "1",
          textAlign: "center",
          isTruncated: !0,
          maxWidth: "85%",
          children: _v8?.formattedAddress && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v361.UserLocation, {
              boxSize: "xs",
              color: "text-secondary"
            }), (0, _v1.jsx)(_v160.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v8?.formattedAddress
            })]
          })
        })]
      });
    },
    _v364 = ({
      item: _v0,
      onClick: _v1
    }) => {
      let {
          name: _v2,
          pictures: _v3,
          link: _v4,
          locationDetails: _v5
        } = _v0,
        [_v6, _v7] = (0, _v362.getAvatarImages)(_v3?.sizes);
      return (0, _v1.jsxs)(_v202.HStack, {
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
        children: ["+", (0, _v1.jsx)(_v156.Box, {
          h: (0, _v9.rem)(64),
          w: (0, _v9.rem)(64),
          borderRadius: "100%",
          border: "1px solid",
          borderColor: "stroke",
          children: (0, _v1.jsx)(_v360.Avatar, {
            size: "auto",
            alt: _v2,
            src: _v6,
            srcSet: _v7,
            nameProps: {
              name: _v2
            }
          })
        }), (0, _v1.jsxs)(_v203.VStack, {
          justifyContent: "center",
          alignItems: "start",
          children: [(0, _v1.jsx)(_v160.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            isTruncated: !0,
            children: _v2
          }), _v5?.formattedAddress && (0, _v1.jsx)(_v160.Text, {
            variant: "body-sm",
            color: "text-secondary",
            isTruncated: !0,
            children: _v5?.formattedAddress
          })]
        }), (0, _v1.jsx)(_v161.Button, {
          as: "a",
          href: _v4,
          variant: "secondary",
          size: "sm",
          borderRadius: "sm",
          paddingX: "3",
          marginLeft: "auto",
          onClick: _v1,
          children: _v80.VIEW_PROFILE
        })]
      });
    };
  var _v365 = _v0.i(0),
    _v366 = _v0.i(0),
    _v367 = _v0.i(0);
  let _v368 = _v0 => (0, _v1.jsx)(_v367.Card, {
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
    _v369 = ({
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
      return (0, _v1.jsxs)(_v368, {
        href: _v8,
        borderRadius: "lg",
        onClick: _v2,
        onContextMenu: _v2,
        onMouseEnter: _v3,
        onMouseLeave: _v4,
        "data-testid": "channel-group-result",
        children: [(0, _v1.jsx)(_v365.AspectRatio, {
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
        }), (0, _v1.jsxs)(_v366.Stack, {
          gap: "xs",
          paddingX: "xs",
          children: [(0, _v1.jsx)(_v160.Text, {
            variant: "heading-sm",
            children: _v5
          }), (0, _v1.jsxs)(_v160.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: [_v80.videoCount(_v6?.connections?.videos?.total), " ·", " ", _v80.userCount(_v1, _v6?.connections?.users?.total)]
          })]
        })]
      });
    };
  var _v370 = _v0.i(0),
    _v371 = _v0.i(0),
    _v372 = _v0.i(0),
    _v373 = _v0.i(0),
    _v374 = _v0.i(0);
  let _v375 = () => (0, _v1.jsx)("svg", {
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
  var _v376 = _v0.i(0);
  let _v377 = {
      clip: ({
        item: _v0,
        onClick: _v1,
        onMouseEnter: _v2,
        onMouseLeave: _v3,
        position: _v4
      }) => {
        let _v5 = (0, _v3.useContext)(_v67.ViewerContext),
          {
            openAuthModal: _v6
          } = (0, _v3.useContext)(_v246),
          {
            sendWatchLaterEvent: _v7
          } = _v196(),
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
          _v19 = _v18 ? _v80.REMOVE_WATCH_LATER : _v80.ADD_WATCH_LATER,
          _v20 = _v126(_v15),
          {
            updateWatchLater: _v21
          } = function (_v0) {
            let {
                mutate: _v1
              } = _v187(),
              [_v2] = (0, _v376.usePutMeWatchlater)(),
              [_v3] = (0, _v376.useDeleteMeWatchlater)();
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
        return (0, _v1.jsx)(_v368, {
          as: "div",
          borderRadius: "lg",
          onClick: _v1,
          onContextMenu: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3,
          children: (0, _v1.jsx)(_v374.VideoCard, {
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
            topLeftDecoration: _v17?.type?.includes("staffpick") ? (0, _v1.jsx)(_v375, {}) : void 0,
            topRightDecoration: (0, _v1.jsx)(_v215.Tooltip, {
              label: _v19,
              placement: "top",
              children: (0, _v1.jsx)(_v162.IconButton, {
                onClick: _v0 => {
                  _v0.stopPropagation(), _v0.preventDefault(), _v5?.user ? _v21(_v18) : _v6(), _v7({
                    entityType: _v124.clip,
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
                icon: _v18 ? (0, _v1.jsx)(_v373.ClockFilled, {}) : (0, _v1.jsx)(_v370.Clock, {}),
                opacity: 0,
                transition: "opacity 200ms ease-in-out",
                _groupHover: {
                  opacity: 1
                }
              })
            }),
            bottomLeftDecoration: (0, _v1.jsxs)(_v8.Flex, {
              children: [(0, _v1.jsx)(_v161.Button, {
                "aria-label": "likes",
                variant: "tertiary",
                size: "xs",
                color: "gray.50",
                leftIcon: (0, _v1.jsx)(_v372.Heart, {}),
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
              }), (0, _v1.jsx)(_v161.Button, {
                "aria-label": "comments",
                variant: "tertiary",
                size: "xs",
                color: "gray.50",
                leftIcon: (0, _v1.jsx)(_v371.CommentList, {}),
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
        return (0, _v1.jsxs)(_v368, {
          href: _v13,
          borderRadius: "xl",
          onClick: _v1,
          onContextMenu: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3,
          "data-testid": "ondemand-result",
          children: [(0, _v1.jsxs)(_v156.Box, {
            position: "relative",
            children: [(0, _v1.jsx)(_v365.AspectRatio, {
              ratio: 2 / 3,
              children: (0, _v1.jsx)(_v156.Box, {
                as: "img",
                src: _v12?.sizes[0].link,
                alt: _v11,
                borderRadius: "md"
              })
            }), _v15 && (0, _v1.jsx)(_v205.DarkMode, {
              children: (0, _v1.jsx)(_v160.Text, {
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
          }), (0, _v1.jsx)(_v215.Tooltip, {
            label: (0, _v1.jsx)(_v156.Box, {
              maxW: (0, _v9.rem)(600),
              children: _v11
            }),
            placement: "top",
            isDisabled: !(_v8 && _v16),
            children: (0, _v1.jsx)(_v160.Text, {
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
        return _v4 ? (0, _v1.jsx)(_v364, {
          item: _v0,
          onClick: _v1
        }) : _v5 ? (0, _v1.jsx)(_v363, {
          item: _v0,
          isSmallScreen: !0,
          onClick: _v1,
          onMouseEnter: _v2,
          onMouseLeave: _v3
        }) : (0, _v1.jsx)(_v359.UserCard, {
          user: _v0,
          profileUrl: _v0.link,
          offset: [0, -210],
          placement: "bottom",
          flip: !1,
          onProfileClick: _v1,
          children: (0, _v1.jsx)(_v156.Box, {
            height: "min-content",
            children: (0, _v1.jsx)(_v363, {
              item: _v0,
              onMouseEnter: _v2,
              onMouseLeave: _v3
            })
          })
        });
      },
      channel: _v369,
      group: _v369
    },
    _v378 = () => {
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
        } = _v175(),
        {
          isLoading: _v9,
          data: _v10,
          error: _v11
        } = _v187(),
        _v12 = (0, _v3.useRef)(_v4),
        _v13 = (() => {
          let _v0 = (0, _v25.useBreakpointValue)(_v355, {
              ssr: !1
            }),
            {
              isSideNavOpen: _v1
            } = (0, _v3.useContext)(_v211.VideoLibraryLayoutContext),
            {
              panelStatus: _v2
            } = (0, _v3.useContext)(_v61),
            {
              type: _v3 = _v86.options.clip.value
            } = _v175(),
            _v4 = (0, _v25.useBreakpointValue)(_v33),
            _v5 = _v4 === _v33.lg,
            _v6 = _v4 === _v33.xl,
            _v7 = _v4 === _v33["2xl"],
            _v8 = !!_v2;
          if (!_v0) return {
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            "2xl": "repeat(5, 1fr)"
          };
          switch (_v4) {
            case _v33.lg:
              _v1 && _v0--, _v8 && _v0--;
              break;
            case _v33.xl:
            case _v33["2xl"]:
              (_v8 || _v1) && _v0--;
          }
          switch (_v3) {
            case _v86.options.ondemand.value:
              !(_v5 && _v1 && _v8) && _v0++, _v7 && _v1 !== _v8 && _v0++;
              break;
            case _v86.options.people.value:
              if (_v4 === _v33.base) return "1fr";
              (_v7 || _v6 && !(_v1 && _v8)) && _v0++;
          }
          return `repeat(${_v0}, minmax(0, 1fr))`;
        })(),
        _v14 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          sendHoverEvent: _v15,
          sendClickEvent: _v16,
          sendSearchResultsPage: _v17
        } = _v196(),
        {
          toggleSearchType: _v18
        } = (0, _v3.useContext)(_v152),
        _v19 = _v10?.parameters?.filters?.type?.values[0] || _v86.options.clip.value,
        _v20 = _v377[_v19],
        _v21 = _v19 === _v86.options.people.value;
      return ((0, _v3.useEffect)(() => {
        let _v0 = _v0 => {
          let _v1 = _v0.detail;
          _v1.searchType === _v37 ? _v18(_v0) : _v7("q", _v1.query);
        };
        return document.addEventListener("omnisearchQueryChange", _v0), () => document.removeEventListener("omnisearchQueryChange", _v0);
      }, [_v6]), (0, _v3.useEffect)(() => {
        if (_v10?.data) {
          let _v0 = (0, _v172.default)(_v2, _v28),
            {
              bpFilters: _v1
            } = _v131(_v6, _v14?.user?.id);
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
            }) => _v264.BigPictureClient.sendEvent(new _v264.Event("search_request", 16, {
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
              }) => _v264.BigPictureClient.sendEvent(new _v264.Event("search_result", 14, {
                position: _v0 + 1,
                score: 0,
                result_id: _v126(_v4).toString() ?? null,
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
      }, [_v10]), _v11) ? (0, _v1.jsx)(_v267, {}) : !_v10 || _v9 || _v10.data && _v10.data?.length !== 0 ? (0, _v1.jsxs)(_v8.Flex, {
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
        children: [(0, _v1.jsx)(_v158.Grid, {
          templateColumns: _v13,
          gap: "sm",
          marginBottom: {
            base: void 0,
            lg: _v21 ? (0, _v9.rem)(112) : void 0
          },
          position: "relative",
          children: _v9 || !_v10 ? (0, _v1.jsx)(_v358, {}) : (0, _v1.jsx)(_v1.Fragment, {
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
                  _v264.BigPictureClient.sendEvent(new _v264.Event("search_result_interaction", 8, {
                    result_id: _v126(_v3).toString() ?? null,
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
                  searchId: (0, _v172.default)(_v2, _v28),
                  ownerId: _v14?.teamUser?.ownerId,
                  type: _v19,
                  resultUri: _v0[_v19].uri
                }), _v16({
                  entityType: _v124[_v19],
                  position: _v1,
                  uri: _v0[_v19].uri
                });
              },
              onMouseEnter: () => {
                _v1.current = setTimeout(() => {
                  _v15({
                    entityType: _v124[_v19],
                    position: _v1,
                    uri: _v0[_v19].uri
                  });
                }, 500);
              },
              onMouseLeave: () => clearTimeout(_v1.current)
            }, _v1))
          })
        }), (0, _v1.jsx)(_v270, {
          scrollContainer: _v0.current,
          updatePage: _v8,
          page: _v5,
          pageSize: 24,
          data: _v10
        })]
      }) : (0, _v1.jsx)(_v353, {});
    };
  var _v379 = _v0.i(0),
    _v380 = _v0.i(0),
    _v381 = _v0.i(0),
    _v382 = _v0.i(0),
    _v383 = _v0.i(0);
  let _v384 = () => {
      let [_v0, _v1] = (0, _v3.useState)(""),
        {
          onFilterChange: _v2
        } = _v175(),
        {
          sendSearchResultsPage: _v3
        } = _v196(),
        {
          data: _v4
        } = (0, _v383.useGetVideo)({
          where: {
            videoId: _v387
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
      return (0, _v1.jsx)(_v205.DarkMode, {
        children: (0, _v1.jsxs)(_v158.Grid, {
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
            children: (0, _v1.jsxs)(_v380.InputGroup, {
              borderRadius: "md",
              size: "lg",
              width: {
                base: (0, _v9.rem)(312),
                sm: (0, _v9.rem)(334),
                md: (0, _v9.rem)(480)
              },
              children: [(0, _v1.jsx)(_v379.Input, {
                onChange: _v0 => _v1(_v0.target.value),
                value: _v0,
                placeholder: _v80.SEARCH_ALL_VIMEO,
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
              }), (0, _v1.jsxs)(_v381.InputRightElement, {
                width: "fit-content",
                children: [_v0 && (0, _v1.jsx)(_v382.CloseXCircleFilled, {
                  color: "text-primary",
                  boxSize: "xs",
                  marginRight: (0, _v9.rem)(8),
                  onClick: () => _v1("")
                }), (0, _v1.jsx)(_v352.SearchMagnifier, {
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
            children: [(0, _v1.jsx)(_v360.Avatar, {
              size: "xs",
              alt: _v4?.user?.name,
              src: _v4?.user?.pictures?.sizes[0].link,
              nameProps: {
                name: _v4?.user?.name ?? ""
              }
            }), (0, _v1.jsxs)(_v203.VStack, {
              marginLeft: "sm",
              marginRight: "xs",
              gap: "0",
              alignItems: "flex-start",
              children: [_v4.name && (0, _v1.jsx)(_v160.Text, {
                variant: "heading-sm",
                isTruncated: !0,
                maxWidth: {
                  base: (0, _v9.rem)(292),
                  md: (0, _v9.rem)(428)
                },
                children: _v4.name
              }), _v4.user.name && (0, _v1.jsx)(_v160.Text, {
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
    _v385 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    _v386 = Math.floor(Math.random() * _v385.length),
    _v387 = _v385[_v386];
  var _v388 = _v0.i(0),
    _v389 = _v0.i(0),
    _v390 = _v0.i(0);
  let _v391 = _v0 => (0, _v1.jsx)(_v390.AccordionItem, {
    ..._v0
  });
  var _v392 = _v0.i(0);
  let _v393 = ({
    isExpanded: _v0,
    nameCopy: _v1
  }) => (0, _v1.jsxs)(_v392.AccordionButton, {
    height: {
      base: (0, _v9.rem)(44),
      md: "unset"
    },
    children: [(0, _v1.jsx)(_v160.Text, {
      variant: {
        base: "heading-sm",
        md: "heading-xs"
      },
      isTruncated: !0,
      children: _v1
    }), (0, _v1.jsx)(_v202.HStack, {
      children: _v0 ? (0, _v1.jsx)(_v306.ChevronUpSmall, {
        boxSize: "xs"
      }) : (0, _v1.jsx)(_v302.ChevronDownSmall, {
        boxSize: "xs"
      })
    })]
  });
  var _v394 = _v0.i(0);
  let _v395 = _v0 => (0, _v1.jsx)(_v394.AccordionPanel, {
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
    _v396 = ({
      filterDetails: _v0,
      selectedValues: _v1
    }) => {
      let {
          sendFilterEvent: _v2
        } = _v196(),
        _v3 = (0, _v25.useBreakpointValue)({
          base: "md",
          md: "sm"
        }),
        {
          onCheckboxChange: _v4,
          onClearFilter: _v5
        } = _v188(),
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
      return (0, _v1.jsx)(_v391, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v393, {
            isExpanded: _v0,
            nameCopy: _v8,
            showResetButton: _v11,
            onResetClick: () => {
              _v5(_v7), _v12(_v30, null);
            }
          }), (0, _v1.jsx)(_v395, {
            children: (0, _v1.jsx)(_v366.Stack, {
              direction: "column",
              gap: "0",
              children: _v10.map((_v0, _v1) => {
                let _v2 = !!_v1?.[_v6[_v0].value],
                  _v3 = _v6[_v0]?.icon;
                return (0, _v1.jsx)(_v389.Checkbox, {
                  value: _v6[_v0].value,
                  isChecked: _v2,
                  onChange: () => {
                    var _v0;
                    let _v1;
                    return _v1 = _v143(_v4({
                      name: _v7,
                      value: _v0 = _v6[_v0].value,
                      isChecked: _v2
                    }), _v7), void _v12(_v142(_v6, _v0), _v1);
                  },
                  paddingY: "sm",
                  size: _v3,
                  children: (0, _v1.jsxs)(_v160.Text, {
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
  var _v397 = _v0.i(0),
    _v398 = _v0.i(0),
    _v399 = _v0.i(0),
    _v400 = _v0.i(0),
    _v401 = _v0.i(0),
    _v402 = _v0.i(0),
    _v403 = _v0.i(0),
    _v404 = _v0.i(0),
    _v405 = _v0.i(0),
    _v406 = _v0.i(0),
    _v407 = _v0.i(0),
    _v408 = _v0.i(0),
    _v409 = _v0.i(0),
    _v410 = _v0.i(0),
    _v411 = _v0.i(0),
    _v412 = _v0.i(0),
    _v413 = _v0.i(0),
    _v414 = _v0.i(0),
    _v415 = _v0.i(0),
    _v416 = _v0.i(0),
    _v417 = _v0.i(0),
    _v418 = _v0.i(0);
  let _v419 = ["id", "name", "type", "values"],
    _v420 = ({
      enabled: _v0 = !0
    } = {}) => {
      let _v1 = (0, _v14.useViewer)(),
        _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        {
          data: _v3,
          isLoading: _v4
        } = (0, _v418.useGetTeamCustomMetadata)(() => _v0 && _v2 ? {
          where: {
            userId: _v2
          },
          select: _v419
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1,
          revalidateOnReconnect: !1
        });
      return {
        fields: (0, _v3.useMemo)(() => {
          if (!_v3) return [];
          if (Array.isArray(_v3)) return _v3;
          let _v0 = _v3.data;
          return Array.isArray(_v0) ? _v0 : [];
        }, [_v3]),
        isLoading: _v4
      };
    },
    _v421 = {
      get TITLE() {
        return (0, _v78.translate)({
          singular: "Custom metadata",
          dictionary: {
            es: {
              singular: "Metadatos personalizados"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Metadaten"
            },
            "fr-FR": {
              singular: "Métadonnées personnalisées"
            },
            "ja-JP": {
              singular: "カスタムメタデータ"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터"
            },
            "pt-BR": {
              singular: "Metadados personalizados"
            },
            "zh-CN": {
              singular: "自定义元数据"
            }
          }
        });
      },
      get SELECT_METADATA() {
        return (0, _v78.translate)({
          singular: "Select Metadata",
          dictionary: {
            es: {
              singular: "Seleccionar metadatos"
            },
            "de-DE": {
              singular: "Metadaten auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner les métadonnées"
            },
            "ja-JP": {
              singular: "メタデータを選択"
            },
            "ko-KR": {
              singular: "메타데이터 선택"
            },
            "pt-BR": {
              singular: "Selecionar metadados"
            },
            "zh-CN": {
              singular: "选择元数据"
            }
          }
        });
      },
      get PLACEHOLDER() {
        return (0, _v78.translate)({
          singular: "Placeholder",
          dictionary: {
            "de-DE": {
              singular: "Platzhalter"
            },
            "fr-FR": {
              singular: "Texte indicatif"
            },
            "zh-CN": {
              singular: "占位符"
            }
          }
        });
      },
      get ADD_RULE() {
        return (0, _v78.translate)({
          singular: "Add Rule",
          dictionary: {
            es: {
              singular: "Agregar regla"
            },
            "de-DE": {
              singular: "Regel hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter une règle"
            },
            "ja-JP": {
              singular: "ルールを追加"
            },
            "ko-KR": {
              singular: "규칙 추가"
            },
            "pt-BR": {
              singular: "Adicionar regra"
            },
            "zh-CN": {
              singular: "添加规则"
            }
          }
        });
      },
      get CANCEL() {
        return (0, _v78.translate)({
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
        });
      },
      get APPLY() {
        return (0, _v78.translate)({
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
      get REMOVE_RULE() {
        return (0, _v78.translate)({
          singular: "Remove rule",
          dictionary: {
            es: {
              singular: "Eliminar regla"
            },
            "de-DE": {
              singular: "Regel entfernen"
            },
            "fr-FR": {
              singular: "Supprimer la règle"
            },
            "ja-JP": {
              singular: "ルールを削除"
            },
            "ko-KR": {
              singular: "규칙 제거"
            },
            "pt-BR": {
              singular: "Remover regra"
            },
            "zh-CN": {
              singular: "删除规则"
            }
          }
        });
      },
      get CONTAINS() {
        return (0, _v78.translate)({
          singular: "Contains",
          dictionary: {
            es: {
              singular: "Contiene"
            },
            "de-DE": {
              singular: "Enthält"
            },
            "fr-FR": {
              singular: "Contient"
            },
            "ja-JP": {
              singular: "を含む"
            },
            "ko-KR": {
              singular: "포함"
            },
            "pt-BR": {
              singular: "Contém"
            },
            "zh-CN": {
              singular: "包含"
            }
          }
        });
      },
      get DOES_NOT_CONTAIN() {
        return (0, _v78.translate)({
          singular: "Does not contain",
          dictionary: {
            es: {
              singular: "No contiene"
            },
            "de-DE": {
              singular: "Enthält nicht"
            },
            "fr-FR": {
              singular: "Ne contient pas"
            },
            "ja-JP": {
              singular: "を含まない"
            },
            "ko-KR": {
              singular: "포함하지 않음"
            },
            "pt-BR": {
              singular: "Não contém"
            },
            "zh-CN": {
              singular: "不包含"
            }
          }
        });
      },
      get IS() {
        return (0, _v78.translate)({
          singular: "Is",
          dictionary: {
            es: {
              singular: "Es"
            },
            "de-DE": {
              singular: "Ist"
            },
            "fr-FR": {
              singular: "Est"
            },
            "ja-JP": {
              singular: "である"
            },
            "ko-KR": {
              singular: "다음과 같음"
            },
            "pt-BR": {
              singular: "É"
            },
            "zh-CN": {
              singular: "是"
            }
          }
        });
      },
      get IS_NOT() {
        return (0, _v78.translate)({
          singular: "Is not",
          dictionary: {
            es: {
              singular: "No es"
            },
            "de-DE": {
              singular: "Ist nicht"
            },
            "fr-FR": {
              singular: "N'est pas"
            },
            "ja-JP": {
              singular: "ではない"
            },
            "ko-KR": {
              singular: "다음과 같지 않음"
            },
            "pt-BR": {
              singular: "Não é"
            },
            "zh-CN": {
              singular: "不是"
            }
          }
        });
      },
      get IS_ANY_OF() {
        return (0, _v78.translate)({
          singular: "Is any of",
          dictionary: {
            es: {
              singular: "Es cualquiera de"
            },
            "de-DE": {
              singular: "Ist einer von"
            },
            "fr-FR": {
              singular: "Est l'un de"
            },
            "ja-JP": {
              singular: "いずれかである"
            },
            "ko-KR": {
              singular: "다음 중 하나"
            },
            "pt-BR": {
              singular: "É um dos"
            },
            "zh-CN": {
              singular: "是以下任意一项"
            }
          }
        });
      },
      get IS_NONE_OF() {
        return (0, _v78.translate)({
          singular: "Is none of",
          dictionary: {
            es: {
              singular: "No es ninguno de"
            },
            "de-DE": {
              singular: "Ist keiner von"
            },
            "fr-FR": {
              singular: "N'est aucun de"
            },
            "ja-JP": {
              singular: "どれにも該当しない"
            },
            "ko-KR": {
              singular: "다음 중 어느 것도 아님"
            },
            "pt-BR": {
              singular: "Não é nenhum dos"
            },
            "zh-CN": {
              singular: "不属于任何一项"
            }
          }
        });
      },
      get IS_EMPTY() {
        return (0, _v78.translate)({
          singular: "Is empty",
          dictionary: {
            es: {
              singular: "Está vacío"
            },
            "de-DE": {
              singular: "Ist leer"
            },
            "fr-FR": {
              singular: "Est vide"
            },
            "ja-JP": {
              singular: "空である"
            },
            "ko-KR": {
              singular: "비어 있음"
            },
            "pt-BR": {
              singular: "Está vazio"
            },
            "zh-CN": {
              singular: "为空"
            }
          }
        });
      },
      get IS_NOT_EMPTY() {
        return (0, _v78.translate)({
          singular: "Is not empty",
          dictionary: {
            es: {
              singular: "No está vacío"
            },
            "de-DE": {
              singular: "Ist nicht leer"
            },
            "fr-FR": {
              singular: "N'est pas vide"
            },
            "ja-JP": {
              singular: "空ではない"
            },
            "ko-KR": {
              singular: "비어 있지 않음"
            },
            "pt-BR": {
              singular: "Não está vazio"
            },
            "zh-CN": {
              singular: "不为空"
            }
          }
        });
      },
      get EQUALS() {
        return (0, _v78.translate)({
          singular: "Equals",
          dictionary: {
            es: {
              singular: "Es igual a"
            },
            "de-DE": {
              singular: "Ist gleich"
            },
            "fr-FR": {
              singular: "Est égal à"
            },
            "ja-JP": {
              singular: "と等しい"
            },
            "ko-KR": {
              singular: "같음"
            },
            "pt-BR": {
              singular: "Igual a"
            },
            "zh-CN": {
              singular: "等于"
            }
          }
        });
      },
      get NOT_EQUAL() {
        return (0, _v78.translate)({
          singular: "Does not equal",
          dictionary: {
            es: {
              singular: "No es igual a"
            },
            "de-DE": {
              singular: "Ist nicht gleich"
            },
            "fr-FR": {
              singular: "N'est pas égal à"
            },
            "ja-JP": {
              singular: "と等しくない"
            },
            "ko-KR": {
              singular: "같지 않음"
            },
            "pt-BR": {
              singular: "Não é igual a"
            },
            "zh-CN": {
              singular: "不等于"
            }
          }
        });
      },
      get GREATER_THAN() {
        return (0, _v78.translate)({
          singular: "Greater than",
          dictionary: {
            es: {
              singular: "Mayor que"
            },
            "de-DE": {
              singular: "Größer als"
            },
            "fr-FR": {
              singular: "Supérieur à"
            },
            "ja-JP": {
              singular: "より大きい"
            },
            "ko-KR": {
              singular: "초과"
            },
            "pt-BR": {
              singular: "Maior que"
            },
            "zh-CN": {
              singular: "大于"
            }
          }
        });
      },
      get LESS_THAN() {
        return (0, _v78.translate)({
          singular: "Less than",
          dictionary: {
            es: {
              singular: "Menor que"
            },
            "de-DE": {
              singular: "Kleiner als"
            },
            "fr-FR": {
              singular: "Inférieur à"
            },
            "ja-JP": {
              singular: "未満"
            },
            "ko-KR": {
              singular: "미만"
            },
            "pt-BR": {
              singular: "Menor que"
            },
            "zh-CN": {
              singular: "小于"
            }
          }
        });
      },
      get BEFORE() {
        return (0, _v78.translate)({
          singular: "Before",
          dictionary: {
            es: {
              singular: "Antes de"
            },
            "de-DE": {
              singular: "Vor"
            },
            "fr-FR": {
              singular: "Avant"
            },
            "ja-JP": {
              singular: "以前"
            },
            "ko-KR": {
              singular: "이전"
            },
            "pt-BR": {
              singular: "Antes de"
            },
            "zh-CN": {
              singular: "之前"
            }
          }
        });
      },
      get AFTER() {
        return (0, _v78.translate)({
          singular: "After",
          dictionary: {
            es: {
              singular: "Después de"
            },
            "de-DE": {
              singular: "Nach"
            },
            "fr-FR": {
              singular: "Après"
            },
            "ja-JP": {
              singular: "以降"
            },
            "ko-KR": {
              singular: "이후"
            },
            "pt-BR": {
              singular: "Depois de"
            },
            "zh-CN": {
              singular: "之后"
            }
          }
        });
      },
      get IS_TRUE() {
        return (0, _v78.translate)({
          singular: "Is true",
          dictionary: {
            es: {
              singular: "Es verdadero"
            },
            "de-DE": {
              singular: "Ist wahr"
            },
            "fr-FR": {
              singular: "Est vrai"
            },
            "ja-JP": {
              singular: "真である"
            },
            "ko-KR": {
              singular: "참"
            },
            "pt-BR": {
              singular: "É verdadeiro"
            },
            "zh-CN": {
              singular: "为真"
            }
          }
        });
      },
      get IS_FALSE() {
        return (0, _v78.translate)({
          singular: "Is false",
          dictionary: {
            es: {
              singular: "Es falso"
            },
            "de-DE": {
              singular: "Ist falsch"
            },
            "fr-FR": {
              singular: "Est faux"
            },
            "ja-JP": {
              singular: "偽である"
            },
            "ko-KR": {
              singular: "거짓"
            },
            "pt-BR": {
              singular: "É falso"
            },
            "zh-CN": {
              singular: "为假"
            }
          }
        });
      },
      get AND() {
        return (0, _v78.translate)({
          singular: "And",
          dictionary: {
            es: {
              singular: "Y"
            },
            "de-DE": {
              singular: "Und"
            },
            "fr-FR": {
              singular: "Et"
            },
            "ja-JP": {
              singular: "かつ"
            },
            "ko-KR": {
              singular: "및"
            },
            "pt-BR": {
              singular: "E"
            },
            "zh-CN": {
              singular: "并且"
            }
          }
        });
      },
      get OR() {
        return (0, _v78.translate)({
          singular: "Or",
          dictionary: {
            es: {
              singular: "O"
            },
            "de-DE": {
              singular: "Oder"
            },
            "fr-FR": {
              singular: "Ou"
            },
            "ja-JP": {
              singular: "または"
            },
            "ko-KR": {
              singular: "또는"
            },
            "pt-BR": {
              singular: "Ou"
            },
            "zh-CN": {
              singular: "或"
            }
          }
        });
      },
      get AND_DESCRIPTION() {
        return (0, _v78.translate)({
          singular: "All filter rules must match",
          dictionary: {
            es: {
              singular: "Todas las reglas del filtro deben coincidir"
            },
            "de-DE": {
              singular: "Alle Filterregeln müssen erfüllt sein"
            },
            "fr-FR": {
              singular: "Toutes les règles de filtrage doivent être satisfaites"
            },
            "ja-JP": {
              singular: "すべてのフィルタルールが一致する必要があります"
            },
            "ko-KR": {
              singular: "모든 필터 규칙이 일치해야 합니다"
            },
            "pt-BR": {
              singular: "Todas as regras de filtro devem ser atendidas"
            },
            "zh-CN": {
              singular: "所有筛选规则必须全部匹配"
            }
          }
        });
      },
      get OR_DESCRIPTION() {
        return (0, _v78.translate)({
          singular: "At least one filter rule must match",
          dictionary: {
            es: {
              singular: "Al menos una regla del filtro debe coincidir"
            },
            "de-DE": {
              singular: "Mindestens eine Filterregel muss erfüllt sein"
            },
            "fr-FR": {
              singular: "Au moins une règle de filtrage doit être satisfaite"
            },
            "ja-JP": {
              singular: "少なくとも1つのフィルタルールが一致する必要があります"
            },
            "ko-KR": {
              singular: "최소 하나의 필터 규칙이 일치해야 합니다"
            },
            "pt-BR": {
              singular: "Pelo menos uma regra de filtro deve ser atendida"
            },
            "zh-CN": {
              singular: "至少有一条筛选规则必须匹配"
            }
          }
        });
      },
      get VIDEOS_ONLY_NOTE() {
        return (0, _v78.translate)({
          singular: "Custom metadata filtering only applies to videos.",
          dictionary: {
            es: {
              singular: "El filtrado personalizado de metadatos solo se aplica a los videos."
            },
            "de-DE": {
              singular: "Die Filterung benutzerdefinierter Metadaten gilt nur für Videos."
            },
            "fr-FR": {
              singular: "Le filtrage des métadonnées personnalisées s'applique uniquement aux vidéos."
            },
            "ja-JP": {
              singular: "カスタムメタデータのフィルタリングは動画にのみ適用されます。"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터 필터링은 동영상에만 적용됩니다."
            },
            "pt-BR": {
              singular: "A filtragem por metadados personalizados aplica-se apenas a vídeos."
            },
            "zh-CN": {
              singular: "自定义元数据过滤仅适用于视频."
            }
          }
        });
      }
    },
    _v422 = {
      and: () => _v421.AND,
      or: () => _v421.OR
    },
    _v423 = {
      and: () => _v421.AND_DESCRIPTION,
      or: () => _v421.OR_DESCRIPTION
    },
    _v424 = new Set(["eq", "ne", "gt", "lt", "contains", "not_contains", "empty", "not_empty"]),
    _v425 = {
      contains: "contains",
      not_contains: "not_contains",
      is: "eq",
      is_not: "ne",
      is_any_of: "eq",
      is_none_of: "ne",
      is_empty: "empty",
      is_not_empty: "not_empty",
      equals: "eq",
      not_equal: "ne",
      greater_than: "gt",
      less_than: "lt",
      before: "lt",
      after: "gt",
      is_true: "eq",
      is_false: "eq"
    },
    _v426 = _v0 => "is_true" === _v0.operator ? "true" : "is_false" === _v0.operator ? "false" : _v434(_v0.operator) ? void 0 : _v0.value,
    _v427 = _v0 => {
      if (!_v0) return null;
      try {
        let _v0 = JSON.parse(_v0),
          _v1 = "and",
          _v2 = [];
        Array.isArray(_v0) ? _v2 = _v0 : _v0 && "object" == typeof _v0 && ("or" === _v0.logic && (_v1 = "or"), Array.isArray(_v0.clauses) && (_v2 = _v0.clauses));
        let _v3 = [];
        for (let _v0 of _v2) {
          if (!_v0 || "object" != typeof _v0 || "number" != typeof _v0.field_id || "string" != typeof _v0.operator || !_v424.has(_v0.operator)) continue;
          let _v0 = _v0.operator,
            _v1 = {
              field_id: _v0.field_id,
              operator: _v0
            };
          "string" == typeof _v0.value && (_v1.value = _v0.value), _v3.push(_v1);
        }
        if (0 === _v3.length) return null;
        return {
          logic: _v1,
          clauses: _v3
        };
      } catch {
        return null;
      }
    },
    _v428 = _v0 => _v427(_v0)?.clauses.length ?? 0,
    _v429 = () => "u" > typeof crypto && "randomUUID" in crypto ? crypto.randomUUID() : `rule-${Math.random().toString(36).slice(2)}`,
    _v430 = (_v0, _v1) => {
      let _v2 = _v427(_v0);
      if (!_v2) return null;
      let _v3 = _v2.clauses.map(_v0 => {
        var _v1, _v2;
        let _v3 = _v1?.get(_v0.field_id) ?? void 0,
          _v4 = ((_v0, _v1, _v2) => {
            switch (_v0) {
              case "contains":
                return "contains";
              case "not_contains":
                return "not_contains";
              case "empty":
                return "is_empty";
              case "not_empty":
                return "is_not_empty";
              case "eq":
                if ("bool" === _v2) return "true" === _v1 || "1" === _v1 ? "is_true" : "is_false";
                if ("int" === _v2) return "equals";
                if ("select" === _v2) return "is_any_of";
                if ("multi-select" === _v2) return "contains";
                return "is";
              case "ne":
                if ("int" === _v2) return "not_equal";
                if ("select" === _v2) return "is_none_of";
                if ("multi-select" === _v2) return "not_contains";
                return "is_not";
              case "gt":
                return "date" === _v2 ? "after" : "greater_than";
              case "lt":
                return "date" === _v2 ? "before" : "less_than";
              default:
                return _v431;
            }
          })(_v0.operator, _v0.value, _v3?.type),
          _v5 = (_v1 = _v0.operator, _v2 = _v0.value, "empty" === _v1 || "not_empty" === _v1 || void 0 === _v2 ? "" : _v2);
        return {
          id: _v429(),
          fieldId: _v0.field_id,
          operator: _v4,
          value: _v5
        };
      });
      return 0 === _v3.length ? null : {
        rules: _v3,
        conjunction: _v2.logic
      };
    },
    _v431 = "contains",
    _v432 = {
      str: ["contains", "not_contains", "is", "is_not", "is_empty", "is_not_empty"],
      int: ["equals", "not_equal", "greater_than", "less_than", "is_empty", "is_not_empty"],
      date: ["is", "before", "after", "is_empty", "is_not_empty"],
      bool: ["is_true", "is_false"],
      select: ["is_any_of", "is_none_of", "is_empty", "is_not_empty"],
      "multi-select": ["contains", "not_contains", "is_empty", "is_not_empty"]
    },
    _v433 = {
      contains: () => _v421.CONTAINS,
      not_contains: () => _v421.DOES_NOT_CONTAIN,
      is: () => _v421.IS,
      is_not: () => _v421.IS_NOT,
      is_any_of: () => _v421.IS_ANY_OF,
      is_none_of: () => _v421.IS_NONE_OF,
      is_empty: () => _v421.IS_EMPTY,
      is_not_empty: () => _v421.IS_NOT_EMPTY,
      equals: () => _v421.EQUALS,
      not_equal: () => _v421.NOT_EQUAL,
      greater_than: () => _v421.GREATER_THAN,
      less_than: () => _v421.LESS_THAN,
      before: () => _v421.BEFORE,
      after: () => _v421.AFTER,
      is_true: () => _v421.IS_TRUE,
      is_false: () => _v421.IS_FALSE
    },
    _v434 = _v0 => "is_empty" === _v0 || "is_not_empty" === _v0 || "is_true" === _v0 || "is_false" === _v0,
    _v435 = () => ({
      id: _v429(),
      fieldId: null,
      operator: _v431,
      value: ""
    }),
    _v436 = _v0 => null !== _v0.fieldId && (!!_v434(_v0.operator) || "" !== _v0.value.trim()),
    _v437 = ({
      isOpen: _v0,
      onClose: _v1,
      onApply: _v2,
      onClear: _v3,
      initialFilter: _v4
    }) => {
      let {
          fields: _v5,
          isLoading: _v6
        } = _v420(),
        _v7 = (0, _v3.useMemo)(() => {
          let _v0 = new Map();
          for (let _v0 of _v5) _v0.set(_v0.id, _v0);
          return _v0;
        }, [_v5]);
      return (0, _v1.jsxs)(_v240.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: {
          base: "full",
          md: "lg"
        },
        scrollBehavior: "inside",
        children: [(0, _v1.jsx)(_v243.ModalOverlay, {}), (0, _v1.jsxs)(_v242.ModalContent, {
          width: {
            base: "100%",
            md: (0, _v9.rem)(720)
          },
          maxW: {
            base: "100%",
            md: "unset"
          },
          children: [(0, _v1.jsx)(_v416.ModalHeader, {
            children: _v421.TITLE
          }), (0, _v1.jsx)(_v241.ModalCloseButton, {}), _v6 ? (0, _v1.jsx)(_v414.ModalBody, {
            children: (0, _v1.jsx)(_v8.Flex, {
              justifyContent: "center",
              paddingY: "xl",
              children: (0, _v1.jsx)(_v405.Spinner, {})
            })
          }) : (0, _v1.jsx)(_v438, {
            initialFilter: _v4,
            fields: _v5,
            fieldsById: _v7,
            onApply: _v2,
            onClear: _v3,
            onClose: _v1
          })]
        })]
      });
    },
    _v438 = ({
      initialFilter: _v0,
      fields: _v1,
      fieldsById: _v2,
      onApply: _v3,
      onClear: _v4,
      onClose: _v5
    }) => {
      let _v6 = (0, _v3.useMemo)(() => _v430(_v0, _v2), [_v0, _v2]),
        [_v7, _v8] = (0, _v3.useState)(() => _v6?.rules ?? [_v435()]),
        [_v9, _v10] = (0, _v3.useState)(() => _v6?.conjunction ?? "and"),
        _v11 = (_v0, _v1) => {
          _v8(_v0 => _v0.map(_v0 => _v0.id !== _v0 ? _v0 : {
            ..._v0,
            ..._v1
          }));
        },
        _v12 = _v7.some(_v436),
        _v13 = (0, _v3.useMemo)(() => _v1.map(_v0 => ({
          label: _v0.name,
          value: String(_v0.id)
        })), [_v1]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v414.ModalBody, {
          children: (0, _v1.jsxs)(_v203.VStack, {
            alignItems: "stretch",
            gap: "md",
            children: [(0, _v1.jsx)(_v160.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v421.VIDEOS_ONLY_NOTE
            }), _v7.map((_v0, _v1) => (0, _v1.jsx)(_v440, {
              rule: _v0,
              index: _v1,
              totalRules: _v7.length,
              conjunction: _v9,
              onConjunctionChange: _v10,
              field: null !== _v0.fieldId ? _v2.get(_v0.fieldId) ?? null : null,
              fieldItems: _v13,
              onFieldChange: _v0 => {
                var _v1;
                let _v2, _v3;
                _v1 = _v0.id, _v3 = (_v2 = null !== _v0 ? _v2.get(_v0) ?? null : null) ? _v432[_v2.type] ?? [] : [], _v11(_v1, {
                  fieldId: _v0,
                  operator: _v2 ? _v3.includes(_v431) ? _v431 : _v3[0] ?? _v431 : _v431,
                  value: ""
                });
              },
              onOperatorChange: _v0 => {
                _v11(_v0.id, {
                  operator: _v0,
                  value: ""
                });
              },
              onValueChange: _v0 => {
                _v11(_v0.id, {
                  value: _v0
                });
              },
              onRemove: () => {
                var _v0;
                _v0 = _v0.id, _v8(_v0 => {
                  let _v1 = _v0.filter(_v0 => _v0.id !== _v0);
                  return 0 === _v1.length ? [_v435()] : _v1;
                });
              }
            }, _v0.id)), (0, _v1.jsx)(_v161.Button, {
              variant: "ghost",
              size: "sm",
              alignSelf: "center",
              bg: "surface",
              _hover: {
                bg: "fill-component-hover"
              },
              onClick: () => {
                _v8(_v0 => [..._v0, _v435()]);
              },
              children: (0, _v1.jsxs)(_v202.HStack, {
                spacing: "xs",
                children: [(0, _v1.jsx)(_v408.PlusCircle, {}), (0, _v1.jsx)("span", {
                  children: _v421.ADD_RULE
                })]
              })
            })]
          })
        }), (0, _v1.jsxs)(_v415.ModalFooter, {
          gap: "sm",
          justifyContent: "space-between",
          children: [_v0 && _v4 ? (0, _v1.jsx)(_v161.Button, {
            variant: "tertiary",
            onClick: () => {
              _v4(), _v5();
            },
            children: _v80.CLEAR
          }) : (0, _v1.jsx)("span", {}), (0, _v1.jsxs)(_v8.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v161.Button, {
              variant: "secondary",
              onClick: _v5,
              children: _v421.CANCEL
            }), (0, _v1.jsx)(_v161.Button, {
              variant: "primary",
              onClick: () => {
                _v3(_v7.filter(_v436), _v9), _v5();
              },
              isDisabled: !_v12,
              children: _v421.APPLY
            })]
          })]
        })]
      });
    },
    _v439 = (0, _v9.rem)(87),
    _v440 = ({
      rule: _v0,
      index: _v1,
      totalRules: _v2,
      conjunction: _v3,
      onConjunctionChange: _v4,
      field: _v5,
      fieldItems: _v6,
      onFieldChange: _v7,
      onOperatorChange: _v8,
      onValueChange: _v9,
      onRemove: _v10
    }) => {
      let _v11,
        _v12 = (0, _v3.useMemo)(() => _v5 ? (_v432[_v5.type] ?? [_v431]).map(_v0 => ({
          label: _v433[_v0](),
          value: _v0
        })) : [{
          label: _v421.CONTAINS,
          value: _v431
        }], [_v5]),
        _v13 = null !== _v5,
        _v14 = _v434(_v0.operator),
        _v15 = (0, _v3.useMemo)(() => _v5 && ("select" === _v5.type || "multi-select" === _v5.type) ? (_v5.values ?? []).map(_v0 => ({
          label: _v0,
          value: _v0
        })) : [], [_v5]),
        _v16 = (0, _v3.useMemo)(() => [{
          label: _v421.AND,
          value: "and"
        }, {
          label: _v421.OR,
          value: "or"
        }], []),
        [_v17, _v18] = (0, _v3.useState)(null),
        _v19 = _v0 => _v0 => {
          _v18(_v0 => _v0.open ? _v0 : _v0 === _v0 ? null : _v0);
        },
        _v20 = `calc(${_v439} + ${(0, _v9.rem)(8)})`;
      return (0, _v1.jsxs)(_v8.Flex, {
        direction: {
          base: "column",
          md: "row"
        },
        alignItems: {
          base: "stretch",
          md: "center"
        },
        gap: "sm",
        width: "100%",
        paddingLeft: {
          base: 0,
          md: 0 === _v1 && _v2 > 1 ? _v20 : 0
        },
        children: [1 === _v1 && (0, _v1.jsx)(_v8.Flex, {
          flexShrink: 0,
          display: {
            base: "none",
            md: "flex"
          },
          width: _v439,
          children: (0, _v1.jsxs)(_v232.Menu, {
            children: [(0, _v1.jsx)(_v231.MenuButton, {
              as: _v161.Button,
              variant: "outlined",
              size: "md",
              width: "100%",
              rightIcon: (0, _v1.jsx)(_v302.ChevronDownSmall, {}),
              fontWeight: "normal",
              justifyContent: "space-between",
              children: _v422[_v3]()
            }), (0, _v1.jsx)(_v413.MenuList, {
              minWidth: (0, _v9.rem)(280),
              children: _v16.map(_v0 => {
                let _v1 = _v0.value === _v3;
                return (0, _v1.jsx)(_v412.MenuItem, {
                  onClick: () => _v4(_v0.value),
                  paddingY: "sm",
                  children: (0, _v1.jsxs)(_v203.VStack, {
                    alignItems: "flex-start",
                    gap: "0",
                    width: "100%",
                    children: [(0, _v1.jsx)(_v160.Text, {
                      variant: "body-md",
                      fontWeight: _v1 ? "bold" : "normal",
                      children: _v0.label
                    }), (0, _v1.jsx)(_v160.Text, {
                      variant: "body-sm",
                      color: "text-secondary",
                      children: _v423[_v0.value]()
                    })]
                  })
                }, _v0.value);
              })
            })]
          })
        }), _v1 >= 2 && (0, _v1.jsx)(_v8.Flex, {
          flexShrink: 0,
          width: _v439,
          display: {
            base: "none",
            md: "flex"
          },
          justifyContent: "center",
          alignItems: "center",
          children: (0, _v1.jsx)(_v160.Text, {
            variant: "body-md",
            children: _v422[_v3]()
          })
        }), (0, _v1.jsxs)(_v8.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          gap: "sm",
          flex: {
            base: "unset",
            md: "1"
          },
          width: {
            base: "100%",
            md: "auto"
          },
          minW: "0",
          alignItems: {
            base: "stretch",
            md: "center"
          },
          children: [(0, _v1.jsx)(_v8.Flex, {
            flex: {
              base: "unset",
              md: "1"
            },
            minW: "0",
            direction: "column",
            children: (0, _v1.jsx)(_v404.Select, {
              size: "md",
              items: _v6,
              value: null !== _v0.fieldId ? [String(_v0.fieldId)] : [],
              placeholder: _v421.SELECT_METADATA,
              open: "field" === _v17,
              onOpenChange: _v19("field"),
              onValueChange: _v0 => {
                let _v1 = Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "";
                _v7("" === _v1 ? null : Number(_v1));
              }
            })
          }), (0, _v1.jsx)(_v8.Flex, {
            flex: {
              base: "unset",
              md: "1"
            },
            minW: "0",
            direction: "column",
            children: (0, _v1.jsx)(_v404.Select, {
              size: "md",
              items: _v12,
              value: [_v0.operator],
              disabled: !_v13,
              open: "operator" === _v17,
              onOpenChange: _v19("operator"),
              onValueChange: _v0 => {
                _v8(Array.isArray(_v0.value) ? _v0.value[0] ?? _v431 : _v0.value ?? _v431);
              }
            })
          }), _v13 && !_v14 && (0, _v1.jsx)(_v8.Flex, {
            flex: {
              base: "unset",
              md: "1"
            },
            minW: "0",
            direction: "column",
            children: _v15.length > 0 ? (0, _v1.jsx)(_v404.Select, {
              size: "md",
              items: _v15,
              value: _v0.value ? [_v0.value] : [],
              placeholder: _v421.PLACEHOLDER,
              open: "value" === _v17,
              onOpenChange: _v19("value"),
              onValueChange: _v0 => {
                _v9(Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "");
              }
            }) : _v5?.type === "date" ? (0, _v1.jsxs)(_v410.DatePicker, {
              width: "100%",
              value: _v0.value && (_v11 = _v0.value.match(/^(\d{4})-(\d{2})-(\d{2})/)) ? [new _v69.BokehDate.CalendarDate(Number(_v11[1]), Number(_v11[2]), Number(_v11[3]))] : [],
              onValueChange: _v0 => {
                let _v1 = _v0.value?.[0];
                _v9(_v1 ? `${_v1.year}-${String(_v1.month).padStart(2, "0")}-${String(_v1.day).padStart(2, "0")}` : "");
              },
              children: [(0, _v1.jsx)(_v410.DatePickerControl, {
                children: (0, _v1.jsxs)(_v380.InputGroup, {
                  children: [(0, _v1.jsx)(_v410.DatePickerInputBase, {
                    asChild: !0,
                    children: (0, _v1.jsx)(_v379.Input, {
                      size: "md",
                      placeholder: _v421.PLACEHOLDER,
                      pr: "40px"
                    })
                  }), (0, _v1.jsx)(_v381.InputRightElement, {
                    h: "100%",
                    children: (0, _v1.jsx)(_v410.DatePickerTrigger, {
                      asChild: !0,
                      children: (0, _v1.jsx)(_v162.IconButton, {
                        "aria-label": _v421.PLACEHOLDER,
                        variant: "unstyled",
                        size: "sm",
                        bg: "surface",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        icon: (0, _v1.jsx)(_v417.Calendar, {
                          color: "text-secondary",
                          boxSize: "18px"
                        })
                      })
                    })
                  })]
                })
              }), (0, _v1.jsx)(_v411.DatePickerPortal, {
                children: (0, _v1.jsx)(_v410.DatePickerPositioner, {
                  style: {
                    zIndex: 0
                  },
                  children: (0, _v1.jsx)(_v410.DatePickerContent, {
                    children: (0, _v1.jsx)(_v410.Calendar, {})
                  })
                })
              })]
            }) : (0, _v1.jsx)(_v379.Input, {
              size: "md",
              type: _v5?.type === "int" ? "number" : "text",
              placeholder: _v421.PLACEHOLDER,
              value: _v0.value,
              onChange: _v0 => {
                _v9(_v0.target.value);
              },
              width: "100%"
            })
          })]
        }), (0, _v1.jsx)(_v162.IconButton, {
          "aria-label": _v421.REMOVE_RULE,
          icon: (0, _v1.jsx)(_v409.TrashBin, {}),
          variant: "tertiary",
          onClick: _v10,
          alignSelf: {
            base: "flex-end",
            md: "center"
          },
          flexShrink: 0
        })]
      });
    },
    _v441 = {
      get TITLE() {
        return (0, _v78.translate)({
          singular: "Custom metadata",
          dictionary: {
            es: {
              singular: "Metadatos personalizados"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Metadaten"
            },
            "fr-FR": {
              singular: "Métadonnées personnalisées"
            },
            "ja-JP": {
              singular: "カスタムメタデータ"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터"
            },
            "pt-BR": {
              singular: "Metadados personalizados"
            },
            "zh-CN": {
              singular: "自定义元数据"
            }
          }
        });
      },
      get CLOSE() {
        return (0, _v78.translate)({
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
        });
      },
      get NO_FILTERS_APPLIED() {
        return (0, _v78.translate)({
          singular: "No filters applied",
          dictionary: {
            es: {
              singular: "No hay filtros aplicados"
            },
            "de-DE": {
              singular: "Keine Filter angewendet"
            },
            "fr-FR": {
              singular: "Aucun filtre appliqué"
            },
            "ja-JP": {
              singular: "フィルターは適用されていません"
            },
            "ko-KR": {
              singular: "적용된 필터 없음"
            },
            "pt-BR": {
              singular: "Nenhum filtro aplicado"
            },
            "zh-CN": {
              singular: "未应用任何筛选器"
            }
          }
        });
      },
      get VIDEOS_ONLY_NOTE() {
        return (0, _v78.translate)({
          singular: "Custom metadata filtering only applies to videos.",
          dictionary: {
            es: {
              singular: "El filtrado personalizado de metadatos solo se aplica a los videos."
            },
            "de-DE": {
              singular: "Die Filterung benutzerdefinierter Metadaten gilt nur für Videos."
            },
            "fr-FR": {
              singular: "Le filtrage des métadonnées personnalisées s'applique uniquement aux vidéos."
            },
            "ja-JP": {
              singular: "カスタムメタデータのフィルタリングは動画にのみ適用されます。"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터 필터링은 동영상에만 적용됩니다."
            },
            "pt-BR": {
              singular: "A filtragem por metadados personalizados aplica-se apenas a vídeos."
            },
            "zh-CN": {
              singular: "自定义元数据过滤仅适用于视频."
            }
          }
        });
      },
      get APPLY() {
        return (0, _v78.translate)({
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
      get DELETE_FILTER() {
        return (0, _v78.translate)({
          singular: "Delete filter",
          dictionary: {
            es: {
              singular: "Eliminar filtro"
            },
            "de-DE": {
              singular: "Filter löschen"
            },
            "fr-FR": {
              singular: "Supprimer le filtre"
            },
            "ja-JP": {
              singular: "フィルターを削除"
            },
            "ko-KR": {
              singular: "필터 삭제"
            },
            "pt-BR": {
              singular: "Excluir filtro"
            },
            "zh-CN": {
              singular: "删除筛选器"
            }
          }
        });
      },
      get SELECT_METADATA() {
        return (0, _v78.translate)({
          singular: "Select Metadata",
          dictionary: {
            es: {
              singular: "Seleccionar metadatos"
            },
            "de-DE": {
              singular: "Metadaten auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner les métadonnées"
            },
            "ja-JP": {
              singular: "メタデータを選択"
            },
            "ko-KR": {
              singular: "메타데이터 선택"
            },
            "pt-BR": {
              singular: "Selecionar metadados"
            },
            "zh-CN": {
              singular: "选择元数据"
            }
          }
        });
      },
      get PLACEHOLDER() {
        return (0, _v78.translate)({
          singular: "Placeholder",
          dictionary: {
            "de-DE": {
              singular: "Platzhalter"
            },
            "fr-FR": {
              singular: "Texte indicatif"
            },
            "zh-CN": {
              singular: "占位符"
            }
          }
        });
      },
      get COMBINE_RULES() {
        return (0, _v78.translate)({
          singular: "Combine rules with",
          dictionary: {
            es: {
              singular: "Combinar reglas con"
            },
            "de-DE": {
              singular: "Regeln kombinieren mit"
            },
            "fr-FR": {
              singular: "Combiner les règles avec"
            },
            "ja-JP": {
              singular: "ルールを結合"
            },
            "ko-KR": {
              singular: "규칙을 다음으로 결합"
            },
            "pt-BR": {
              singular: "Combinar regras com"
            },
            "zh-CN": {
              singular: "将规则组合为"
            }
          }
        });
      },
      get BACK() {
        return (0, _v78.translate)({
          singular: "Back",
          dictionary: {
            es: {
              singular: "Atrás"
            },
            "de-DE": {
              singular: "Zurück"
            },
            "fr-FR": {
              singular: "Retour"
            },
            "ja-JP": {
              singular: "戻る"
            },
            "ko-KR": {
              singular: "뒤로"
            },
            "pt-BR": {
              singular: "Voltar"
            },
            "zh-CN": {
              singular: "返回"
            }
          }
        });
      },
      get NEW_RULE() {
        return (0, _v78.translate)({
          singular: "New rule",
          dictionary: {
            es: {
              singular: "Nueva regla"
            },
            "de-DE": {
              singular: "Neue Regel"
            },
            "fr-FR": {
              singular: "Nouvelle règle"
            },
            "ja-JP": {
              singular: "新規ルール"
            },
            "ko-KR": {
              singular: "새 규칙"
            },
            "pt-BR": {
              singular: "Nova regra"
            },
            "zh-CN": {
              singular: "新规则"
            }
          }
        });
      },
      get EDIT_RULE() {
        return (0, _v78.translate)({
          singular: "Edit rule",
          dictionary: {
            es: {
              singular: "Editar regla"
            },
            "de-DE": {
              singular: "Regel bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier la règle"
            },
            "ja-JP": {
              singular: "ルールを編集"
            },
            "ko-KR": {
              singular: "규칙 편집"
            },
            "pt-BR": {
              singular: "Editar regra"
            },
            "zh-CN": {
              singular: "编辑规则"
            }
          }
        });
      }
    },
    _v442 = ({
      isOpen: _v0,
      onClose: _v1,
      onApply: _v2,
      onClear: _v3,
      initialFilter: _v4
    }) => {
      let {
          fields: _v5,
          isLoading: _v6
        } = _v420(),
        _v7 = (0, _v3.useMemo)(() => {
          let _v0 = new Map();
          for (let _v0 of _v5) _v0.set(_v0.id, _v0);
          return _v0;
        }, [_v5]);
      return (0, _v1.jsxs)(_v398.Drawer, {
        placement: "bottom",
        isOpen: _v0,
        onClose: _v1,
        children: [(0, _v1.jsx)(_v403.DrawerOverlay, {}), (0, _v1.jsx)(_v400.DrawerContent, {
          maxH: "90vh",
          borderTopRadius: (0, _v9.rem)(16),
          children: _v6 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v402.DrawerHeader, {
              paddingLeft: (0, _v9.rem)(8),
              children: (0, _v1.jsxs)(_v202.HStack, {
                alignItems: "center",
                gap: "xs",
                children: [(0, _v1.jsx)(_v162.IconButton, {
                  "aria-label": _v441.BACK,
                  icon: (0, _v1.jsx)(_v406.ChevronLeft, {}),
                  variant: "tertiary",
                  size: "md",
                  onClick: _v1
                }), (0, _v1.jsx)(_v160.Text, {
                  variant: "heading-sm",
                  children: _v441.TITLE
                })]
              })
            }), (0, _v1.jsx)(_v399.DrawerBody, {
              children: (0, _v1.jsx)(_v8.Flex, {
                justifyContent: "center",
                paddingY: "xl",
                children: (0, _v1.jsx)(_v405.Spinner, {})
              })
            })]
          }) : (0, _v1.jsx)(_v443, {
            initialFilter: _v4,
            fields: _v5,
            fieldsById: _v7,
            onApply: _v2,
            onClear: _v3,
            onClose: _v1
          })
        })]
      });
    },
    _v443 = ({
      initialFilter: _v0,
      fields: _v1,
      fieldsById: _v2,
      onApply: _v3,
      onClear: _v4,
      onClose: _v5
    }) => {
      let _v6 = (0, _v3.useMemo)(() => _v430(_v0, _v2), [_v0, _v2]),
        [_v7, _v8] = (0, _v3.useState)(() => _v6?.rules ?? []),
        [_v9, _v10] = (0, _v3.useState)(() => _v6?.conjunction ?? "and"),
        [_v11, _v12] = (0, _v3.useState)(null),
        _v13 = (0, _v3.useMemo)(() => _v1.map(_v0 => ({
          label: _v0.name,
          value: String(_v0.id)
        })), [_v1]);
      if (null === _v11) return (0, _v1.jsx)(_v444, {
        rules: _v7,
        conjunction: _v9,
        onConjunctionChange: _v10,
        fieldsById: _v2,
        onAdd: () => {
          _v12({
            kind: "create"
          });
        },
        onEdit: _v0 => {
          _v12({
            kind: "edit",
            ruleId: _v0
          });
        },
        onClose: () => {
          let _v0 = _v7.filter(_v436);
          0 === _v0.length && _v6 && _v4 ? _v4() : _v3(_v0, _v9), _v5();
        }
      });
      let _v14 = "edit" === _v11.kind ? _v7.find(_v0 => _v0.id === _v11.ruleId) ?? null : null;
      return (0, _v1.jsx)(_v446, {
        mode: _v11,
        initialRule: _v14,
        fieldsById: _v2,
        fieldItems: _v13,
        onCommit: _v0 => {
          _v8(_v0 => _v11?.kind === "edit" ? _v0.map(_v0 => _v0.id === _v11.ruleId ? _v0 : _v0) : [..._v0, _v0]), _v12(null);
        },
        onDelete: "edit" === _v11.kind ? () => {
          if (_v11?.kind === "edit") {
            let _v0 = _v11.ruleId;
            _v8(_v0 => _v0.filter(_v0 => _v0.id !== _v0));
          }
          _v12(null);
        } : void 0,
        onBack: () => {
          _v12(null);
        }
      });
    },
    _v444 = ({
      rules: _v0,
      conjunction: _v1,
      onConjunctionChange: _v2,
      fieldsById: _v3,
      onAdd: _v4,
      onEdit: _v5,
      onClose: _v6
    }) => {
      let _v7 = _v0.filter(_v436),
        _v8 = _v7.length > 0,
        _v9 = _v7.length > 1,
        _v10 = (0, _v3.useMemo)(() => [{
          label: _v422.and(),
          value: "and"
        }, {
          label: _v422.or(),
          value: "or"
        }], []);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v402.DrawerHeader, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "xs",
          paddingX: (0, _v9.rem)(8),
          children: [(0, _v1.jsxs)(_v202.HStack, {
            alignItems: "center",
            gap: "xs",
            minW: "0",
            children: [(0, _v1.jsx)(_v162.IconButton, {
              "aria-label": _v441.BACK,
              icon: (0, _v1.jsx)(_v406.ChevronLeft, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v6
            }), (0, _v1.jsx)(_v160.Text, {
              variant: "heading-sm",
              isTruncated: !0,
              children: _v441.TITLE
            })]
          }), (0, _v1.jsxs)(_v202.HStack, {
            alignItems: "center",
            gap: "xs",
            flexShrink: 0,
            children: [(0, _v1.jsx)(_v162.IconButton, {
              "aria-label": _v441.NEW_RULE,
              icon: (0, _v1.jsx)(_v408.PlusCircle, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v4
            }), (0, _v1.jsx)(_v162.IconButton, {
              "aria-label": _v441.CLOSE,
              icon: (0, _v1.jsx)(_v407.CloseX, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v6
            })]
          })]
        }), (0, _v1.jsx)(_v399.DrawerBody, {
          children: (0, _v1.jsxs)(_v203.VStack, {
            alignItems: "stretch",
            gap: "md",
            paddingBottom: "md",
            children: [(0, _v1.jsx)(_v160.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v441.VIDEOS_ONLY_NOTE
            }), _v8 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v9 && (0, _v1.jsxs)(_v203.VStack, {
                alignItems: "stretch",
                gap: "xs",
                children: [(0, _v1.jsx)(_v160.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: _v441.COMBINE_RULES
                }), (0, _v1.jsx)(_v404.Select, {
                  size: "md",
                  items: _v10,
                  value: [_v1],
                  onValueChange: _v0 => {
                    _v2(Array.isArray(_v0.value) ? _v0.value[0] ?? "and" : _v0.value ?? "and");
                  },
                  children: _v0 => (0, _v1.jsx)(_v404.SelectItem, {
                    alignItems: "flex-start",
                    paddingY: "sm",
                    children: (0, _v1.jsxs)(_v203.VStack, {
                      alignItems: "flex-start",
                      gap: "0",
                      children: [(0, _v1.jsx)(_v404.SelectItemText, {
                        children: _v0.label
                      }), (0, _v1.jsx)(_v160.Text, {
                        variant: "body-sm",
                        color: "text-secondary",
                        children: _v423[_v0.value]()
                      })]
                    })
                  })
                })]
              }), (0, _v1.jsx)(_v203.VStack, {
                alignItems: "stretch",
                gap: "0",
                children: _v7.map(_v0 => {
                  let _v1 = null !== _v0.fieldId ? _v3.get(_v0.fieldId) ?? null : null;
                  return (0, _v1.jsx)(_v445, {
                    rule: _v0,
                    field: _v1,
                    onTap: () => _v5(_v0.id)
                  }, _v0.id);
                })
              })]
            }) : (0, _v1.jsx)(_v156.Box, {
              paddingY: "xl",
              children: (0, _v1.jsx)(_v160.Text, {
                variant: "body-md",
                color: "text-secondary",
                textAlign: "center",
                children: _v441.NO_FILTERS_APPLIED
              })
            })]
          })
        })]
      });
    },
    _v445 = ({
      rule: _v0,
      field: _v1,
      onTap: _v2
    }) => {
      let _v3,
        _v4,
        _v5 = (_v3 = _v1?.name ?? _v441.SELECT_METADATA, _v4 = _v433[_v0.operator]().toLowerCase(), _v434(_v0.operator) ? `${_v3} ${_v4}` : `${_v3} ${_v4} "${_v0.value}"`);
      return (0, _v1.jsx)(_v156.Box, {
        as: "button",
        onClick: _v2,
        width: "100%",
        paddingY: "sm",
        paddingX: "sm",
        borderRadius: "md",
        bg: "transparent",
        _hover: {
          bg: "fill-component-hover"
        },
        children: (0, _v1.jsxs)(_v202.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          gap: "sm",
          children: [(0, _v1.jsx)(_v160.Text, {
            variant: "body-md",
            isTruncated: !0,
            minW: "0",
            flex: "1",
            textAlign: "start",
            children: _v5
          }), (0, _v1.jsx)(_v253.ChevronRightSmall, {})]
        })
      });
    },
    _v446 = ({
      mode: _v0,
      initialRule: _v1,
      fieldsById: _v2,
      fieldItems: _v3,
      onCommit: _v4,
      onDelete: _v5,
      onBack: _v6
    }) => {
      let [_v7, _v8] = (0, _v3.useState)(() => _v1 ?? _v435()),
        _v9 = null !== _v7.fieldId ? _v2.get(_v7.fieldId) ?? null : null,
        _v10 = null !== _v9,
        _v11 = _v434(_v7.operator),
        _v12 = (0, _v3.useMemo)(() => _v9 ? (_v432[_v9.type] ?? [_v431]).map(_v0 => ({
          label: _v433[_v0](),
          value: _v0
        })) : [{
          label: _v433.contains(),
          value: _v431
        }], [_v9]),
        _v13 = (0, _v3.useMemo)(() => _v9 && ("select" === _v9.type || "multi-select" === _v9.type) ? (_v9.values ?? []).map(_v0 => ({
          label: _v0,
          value: _v0
        })) : [], [_v9]),
        _v14 = _v436(_v7),
        [_v15, _v16] = (0, _v3.useState)(null),
        _v17 = _v0 => _v0 => {
          _v16(_v0 => _v0.open ? _v0 : _v0 === _v0 ? null : _v0);
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v402.DrawerHeader, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "xs",
          paddingX: (0, _v9.rem)(8),
          children: [(0, _v1.jsxs)(_v202.HStack, {
            alignItems: "center",
            gap: "xs",
            minW: "0",
            children: [(0, _v1.jsx)(_v162.IconButton, {
              "aria-label": _v441.BACK,
              icon: (0, _v1.jsx)(_v406.ChevronLeft, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v6
            }), (0, _v1.jsx)(_v160.Text, {
              variant: "heading-sm",
              isTruncated: !0,
              children: "edit" === _v0.kind ? _v441.EDIT_RULE : _v441.NEW_RULE
            })]
          }), _v5 && (0, _v1.jsx)(_v162.IconButton, {
            "aria-label": _v441.DELETE_FILTER,
            icon: (0, _v1.jsx)(_v409.TrashBin, {}),
            variant: "tertiary",
            size: "md",
            onClick: _v5,
            flexShrink: 0
          })]
        }), (0, _v1.jsx)(_v399.DrawerBody, {
          children: (0, _v1.jsxs)(_v203.VStack, {
            alignItems: "stretch",
            gap: "md",
            children: [(0, _v1.jsx)(_v404.Select, {
              size: "md",
              items: _v3,
              value: null !== _v7.fieldId ? [String(_v7.fieldId)] : [],
              placeholder: _v441.SELECT_METADATA,
              open: "field" === _v15,
              onOpenChange: _v17("field"),
              onValueChange: _v0 => {
                var _v1;
                let _v2,
                  _v3,
                  _v4,
                  _v5 = Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "";
                _v3 = (_v2 = null !== (_v1 = "" === _v5 ? null : Number(_v5)) ? _v2.get(_v1) ?? null : null) ? _v432[_v2.type] ?? [] : [], _v4 = _v2 ? _v3.includes(_v431) ? _v431 : _v3[0] ?? _v431 : _v431, _v8(_v0 => ({
                  ..._v0,
                  fieldId: _v1,
                  operator: _v4,
                  value: ""
                }));
              }
            }), (0, _v1.jsx)(_v404.Select, {
              size: "md",
              items: _v12,
              value: [_v7.operator],
              disabled: !_v10,
              open: "operator" === _v15,
              onOpenChange: _v17("operator"),
              onValueChange: _v0 => {
                let _v1 = Array.isArray(_v0.value) ? _v0.value[0] ?? _v431 : _v0.value ?? _v431;
                _v8(_v0 => ({
                  ..._v0,
                  operator: _v1,
                  value: ""
                }));
              }
            }), _v10 && !_v11 && (_v13.length > 0 ? (0, _v1.jsx)(_v404.Select, {
              size: "md",
              items: _v13,
              value: _v7.value ? [_v7.value] : [],
              placeholder: _v441.PLACEHOLDER,
              open: "value" === _v15,
              onOpenChange: _v17("value"),
              onValueChange: _v0 => {
                let _v1 = Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "";
                _v8(_v0 => ({
                  ..._v0,
                  value: _v1
                }));
              }
            }) : (0, _v1.jsx)(_v379.Input, {
              size: "md",
              type: _v9?.type === "int" ? "number" : _v9?.type === "date" ? "date" : "text",
              placeholder: _v441.PLACEHOLDER,
              value: _v7.value,
              onChange: _v0 => {
                let _v1 = _v0.target.value;
                _v8(_v0 => ({
                  ..._v0,
                  value: _v1
                }));
              },
              width: "100%",
              fontSize: (0, _v9.rem)(16)
            }))]
          })
        }), (0, _v1.jsx)(_v401.DrawerFooter, {
          gap: "sm",
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v161.Button, {
            variant: "primary",
            onClick: () => {
              _v4(_v7);
            },
            isDisabled: !_v14,
            children: _v441.APPLY
          })
        })]
      });
    },
    _v447 = {
      get TITLE() {
        return (0, _v78.translate)({
          singular: "Custom metadata",
          dictionary: {
            es: {
              singular: "Metadatos personalizados"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Metadaten"
            },
            "fr-FR": {
              singular: "Métadonnées personnalisées"
            },
            "ja-JP": {
              singular: "カスタムメタデータ"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터"
            },
            "pt-BR": {
              singular: "Metadados personalizados"
            },
            "zh-CN": {
              singular: "自定义元数据"
            }
          }
        });
      },
      get SUBTITLE() {
        return (0, _v78.translate)({
          singular: "Filter by metadata value.",
          dictionary: {
            es: {
              singular: "Filtrar por valor de metadatos."
            },
            "de-DE": {
              singular: "Nach Metadatenwert filtern."
            },
            "fr-FR": {
              singular: "Filtrer par valeur de métadonnée."
            },
            "ja-JP": {
              singular: "メタデータの値でフィルタリングします。"
            },
            "ko-KR": {
              singular: "메타데이터 값으로 필터링합니다."
            },
            "pt-BR": {
              singular: "Filtrar pelo valor do metadado."
            },
            "zh-CN": {
              singular: "按元数据值筛选。"
            }
          }
        });
      },
      get MANAGE_FILTERS() {
        return (0, _v78.translate)({
          singular: "Manage filters",
          dictionary: {
            es: {
              singular: "Gestionar filtros"
            },
            "de-DE": {
              singular: "Filter verwalten"
            },
            "fr-FR": {
              singular: "Gérer les filtres"
            },
            "ja-JP": {
              singular: "フィルターを管理"
            },
            "ko-KR": {
              singular: "필터 관리"
            },
            "pt-BR": {
              singular: "Gerenciar filtros"
            },
            "zh-CN": {
              singular: "管理筛选条件"
            }
          }
        });
      },
      get ADD_FILTERS() {
        return (0, _v78.translate)({
          singular: "Add filters",
          dictionary: {
            es: {
              singular: "Agregar filtros"
            },
            "de-DE": {
              singular: "Filter hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter des filtres"
            },
            "ja-JP": {
              singular: "フィルターを追加"
            },
            "ko-KR": {
              singular: "필터 추가"
            },
            "pt-BR": {
              singular: "Adicionar filtros"
            },
            "zh-CN": {
              singular: "添加筛选器"
            }
          }
        });
      },
      filtersAppliedCount: _v0 => (0, _v78.translate)({
        singular: "{COUNT} filter applied",
        plural: "{COUNT} filters applied",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "{COUNT} filtro aplicado",
            plural: "{COUNT} filtros aplicados"
          },
          "de-DE": {
            singular: "{COUNT} Filter angewendet",
            plural: "{COUNT} Filter angewendet"
          },
          "fr-FR": {
            singular: "{COUNT} filtre appliqué",
            plural: "{COUNT} filtres appliqués"
          },
          "ja-JP": {
            singular: "{COUNT}件のフィルターが適用されています",
            plural: "{COUNT}件のフィルターが適用されています"
          },
          "ko-KR": {
            singular: "{COUNT}개의 필터가 적용됨",
            plural: "{COUNT}개의 필터가 적용됨"
          },
          "pt-BR": {
            singular: "{COUNT} filtro aplicado",
            plural: "{COUNT} filtros aplicados"
          },
          "zh-CN": {
            singular: "{COUNT} 个筛选器已应用",
            plural: "{COUNT} 个筛选器已应用"
          }
        }
      })
    },
    _v448 = (_v0, _v1) => {
      let _v2 = _v1?.name ?? (0, _v78.translate)({
          singular: "Unknown field",
          dictionary: {
            es: {
              singular: "Campo desconocido"
            },
            "de-DE": {
              singular: "Unbekanntes Feld"
            },
            "fr-FR": {
              singular: "Champ inconnu"
            },
            "ja-JP": {
              singular: "不明なフィールド"
            },
            "ko-KR": {
              singular: "알 수 없는 필드"
            },
            "pt-BR": {
              singular: "Campo desconhecido"
            },
            "zh-CN": {
              singular: "未知字段"
            }
          }
        }),
        _v3 = _v433[_v0.operator]();
      return _v434(_v0.operator) ? `${_v2} ${_v3}` : _v0.value ? `${_v2} ${_v3} ${_v0.value}` : `${_v2} ${_v3}`;
    },
    _v449 = () => {
      let [_v0, _v1] = (0, _v3.useState)(!1),
        {
          onLibraryFilterChange: _v2,
          onClearFilter: _v3,
          customMetadata: _v4
        } = _v188(),
        {
          trackFilterByCustomMetadata: _v5
        } = (0, _v397.useLibraryTracking)(),
        {
          fields: _v6
        } = _v420(),
        _v7 = _v428(_v4),
        _v8 = _v7 > 0,
        _v9 = (0, _v3.useMemo)(() => {
          let _v0 = new Map();
          for (let _v0 of _v6) void 0 !== _v0.id && _v0.set(_v0.id, _v0);
          return _v0;
        }, [_v6]),
        _v10 = (0, _v3.useMemo)(() => _v8 ? _v430(_v4, _v9)?.rules ?? [] : [], [_v8, _v4, _v9]),
        _v11 = (0, _v25.useBreakpointValue)({
          base: !0,
          md: !1
        }, {
          ssr: !1
        }) ?? !1,
        _v12 = () => {
          _v1(!0);
        },
        _v13 = () => {
          _v1(!1);
        },
        _v14 = () => {
          _v3(_v83);
        },
        _v15 = (_v0, _v1) => {
          let _v2 = ((_v0, _v1) => {
            let _v2 = [];
            for (let _v0 of _v0) {
              if (null === _v0.fieldId) continue;
              let _v0 = _v425[_v0.operator],
                _v1 = _v426(_v0);
              if (!_v434(_v0.operator) && (void 0 === _v1 || "" === _v1.trim())) continue;
              let _v2 = {
                field_id: _v0.fieldId,
                operator: _v0
              };
              void 0 !== _v1 && (_v2.value = _v1), _v2.push(_v2);
            }
            return 0 === _v2.length ? null : JSON.stringify({
              logic: _v1,
              clauses: _v2
            });
          })(_v0, _v1);
          null === _v2 ? _v3(_v83) : (_v2(_v83, _v2), _v5({
            appliedFilters: _v428(_v2)
          }));
        };
      return (0, _v1.jsx)(_v391, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v393, {
            isExpanded: _v0,
            nameCopy: _v447.TITLE,
            onResetClick: _v14
          }), (0, _v1.jsx)(_v395, {
            pt: {
              base: "md",
              md: "lg"
            },
            pb: {
              base: "lg",
              md: "lg"
            },
            children: (0, _v1.jsxs)(_v203.VStack, {
              alignItems: "stretch",
              gap: "md",
              children: [_v8 ? (0, _v1.jsxs)(_v203.VStack, {
                alignItems: "stretch",
                gap: "xs",
                children: [(0, _v1.jsx)(_v160.Text, {
                  variant: {
                    base: "body-md",
                    md: "body-sm"
                  },
                  fontWeight: "bold",
                  children: _v447.filtersAppliedCount(_v7)
                }), _v10.map(_v0 => (0, _v1.jsx)(_v160.Text, {
                  variant: {
                    base: "body-md",
                    md: "body-sm"
                  },
                  color: "text-secondary",
                  noOfLines: 1,
                  title: _v448(_v0, _v9.get(_v0.fieldId ?? -1)),
                  children: _v448(_v0, _v9.get(_v0.fieldId ?? -1))
                }, _v0.id))]
              }) : (0, _v1.jsx)(_v160.Text, {
                variant: {
                  base: "body-md",
                  md: "body-sm"
                },
                color: "text-secondary",
                children: _v447.SUBTITLE
              }), (0, _v1.jsx)(_v161.Button, {
                size: "md",
                variant: "tertiary",
                backgroundColor: "fill-component",
                onClick: _v12,
                width: "100%",
                children: _v8 ? _v447.MANAGE_FILTERS : _v447.ADD_FILTERS
              })]
            })
          }), _v0 && (_v11 ? (0, _v1.jsx)(_v442, {
            isOpen: _v0,
            onClose: _v13,
            onApply: _v15,
            onClear: _v14,
            initialFilter: _v4
          }) : (0, _v1.jsx)(_v437, {
            isOpen: _v0,
            onClose: _v13,
            onApply: _v15,
            onClear: _v14,
            initialFilter: _v4
          }))]
        })
      });
    };
  var _v450 = _v0.i(0);
  let _v451 = () => {
    let {
        sendFilterEvent: _v0
      } = _v196(),
      _v1 = (0, _v3.useContext)(_v67.ViewerContext),
      [_v2, _v3] = (0, _v3.useState)("custom"),
      {
        onLibraryFilterChange: _v4,
        onClearFilter: _v5,
        date: _v6
      } = _v188(),
      [_v7, _v8] = _v6?.split(",") ?? [],
      _v9 = _v7 && _v8 ? [_v147(_v7), _v147(_v8)] : void 0,
      [_v10, _v11] = (0, _v3.useState)(_v9),
      {
        options: _v12,
        name: _v13,
        nameCopy: _v14,
        untranslatedCopy: _v15
      } = _v104,
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
    return (0, _v1.jsx)(_v391, {
      children: ({
        isExpanded: _v0
      }) => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v393, {
          isExpanded: _v0,
          nameCopy: _v14,
          showResetButton: !!_v6,
          onResetClick: _v16
        }), (0, _v1.jsx)(_v395, {
          pb: {
            base: "md",
            md: "3"
          },
          children: (0, _v1.jsx)(_v450.DateRangePicker, {
            value: _v10,
            locale: _v1?.locale ?? "en-US",
            maxDate: _v147(),
            minDate: _v147("1980-01-01"),
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
  var _v452 = _v0.i(0);
  let _v453 = ({
      searchTerm: _v0,
      onInputChange: _v1,
      onClearClick: _v2,
      placeholder: _v3 = _v80.SEARCH
    }) => (0, _v1.jsxs)(_v380.InputGroup, {
      size: {
        base: "md",
        md: "sm"
      },
      marginBottom: "sm",
      children: [(0, _v1.jsx)(_v379.Input, {
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
      }), (0, _v1.jsx)(_v381.InputLeftElement, {
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
        children: (0, _v1.jsx)(_v352.SearchMagnifier, {
          boxSize: {
            base: (0, _v9.rem)(20),
            md: (0, _v9.rem)(14)
          }
        })
      }), !!_v0 && (0, _v1.jsx)(_v381.InputRightElement, {
        width: "max-content",
        height: "100%",
        paddingLeft: (0, _v9.rem)(8),
        paddingRight: {
          base: (0, _v9.rem)(16),
          md: (0, _v9.rem)(12)
        },
        children: (0, _v1.jsx)(_v382.CloseXCircleFilled, {
          boxSize: {
            base: (0, _v9.rem)(20),
            md: (0, _v9.rem)(14)
          },
          "aria-label": _v80.CLEAR,
          onClick: _v2
        })
      })]
    }),
    _v454 = ({
      height: _v0
    }) => (0, _v1.jsx)(_v203.VStack, {
      width: "100%",
      height: _v0,
      justifyContent: "center",
      alignItems: "center",
      children: (0, _v1.jsx)(_v405.Spinner, {
        "data-testid": "loader-icon",
        size: "md"
      })
    }),
    _v455 = ({
      selectedLength: _v0,
      headerCopy: _v1,
      onSelectedCountClick: _v2
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: _v0 > 0 ? (0, _v1.jsx)(_v161.Button, {
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
        children: (0, _v1.jsx)(_v160.Text, {
          variant: "heading-xs",
          height: (0, _v9.rem)(40),
          lineHeight: (0, _v9.rem)(40),
          color: "text-primary",
          _hover: {
            color: "text-secondary"
          },
          children: (0, _v78.translate)({
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
      }) : (0, _v1.jsx)(_v160.Text, {
        variant: "heading-xs",
        height: (0, _v9.rem)(40),
        lineHeight: (0, _v9.rem)(40),
        color: "text-secondary",
        children: _v1
      })
    }),
    _v456 = () => (0, _v1.jsxs)(_v203.VStack, {
      width: "100%",
      height: (0, _v9.rem)(136),
      justifyContent: "center",
      alignItems: "center",
      children: [(0, _v1.jsx)(_v160.Text, {
        "aria-live": "polite",
        variant: "heading-sm",
        children: _v80.NO_FILTER_RESULTS
      }), (0, _v1.jsx)(_v160.Text, {
        "aria-live": "polite",
        variant: "body-sm",
        color: "text-secondary",
        children: _v80.TRY_ANOTHER_SEARCH
      })]
    }),
    _v457 = _v0 => (0, _v1.jsx)(_v161.Button, {
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
    _v458 = () => {
      let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          sendFilterEvent: _v1
        } = _v196(),
        {
          onCheckboxChange: _v2,
          onClearFilter: _v3,
          folderIncluded: _v4,
          folderExcluded: _v5
        } = _v188(),
        [_v6, {
          data: _v7
        }] = (0, _v189.useGetUserItemsLazy)(),
        [_v8, _v9] = (0, _v3.useState)(""),
        [_v10, _v11] = (0, _v3.useState)({}),
        [_v12, _v13] = (0, _v3.useState)(!!_v4),
        [_v14, _v15] = (0, _v3.useState)(!1),
        [_v16, _v17] = (0, _v3.useState)({}),
        _v18 = (0, _v3.useRef)(!1),
        _v19 = (0, _v452.useDebouncedValue)(_v8, 500),
        {
          data: _v20,
          isLoading: _v21
        } = (0, _v189.useGetUserItems)(() => _v0?.user ? {
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
          select: _v56
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
            select: _v56
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
        } = _v103,
        _v33 = _v19 && _v24 ? _v80.SELECT_FOLDERS : _v80.LAST_MODIFIED,
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
      return (0, _v1.jsx)(_v391, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v393, {
            isExpanded: _v0,
            nameCopy: _v31,
            showResetButton: _v28,
            onResetClick: _v37
          }), (0, _v1.jsxs)(_v395, {
            children: [(0, _v1.jsx)(_v453, {
              searchTerm: _v8,
              onInputChange: _v35,
              onClearClick: _v34,
              placeholder: _v80.SEARCH_FOLDERS
            }), (0, _v1.jsx)(_v1.Fragment, {
              children: _v21 || !_v20 ? (0, _v1.jsx)(_v454, {
                height: (0, _v9.rem)(136)
              }) : (0, _v1.jsx)(_v1.Fragment, {
                children: _v20?.data?.length === 0 ? (0, _v1.jsx)(_v456, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v455, {
                    selectedLength: _v25,
                    headerCopy: _v33,
                    onSelectedCountClick: () => _v13(!0)
                  }), (0, _v1.jsx)(_v203.VStack, {
                    gap: "0",
                    alignItems: "flex-start",
                    children: _v27?.map((_v0, _v1) => {
                      let {
                        folder: _v2
                      } = _v0;
                      if (!_v2) return;
                      let _v3 = _v2?.uri.split("/")[4],
                        _v4 = !!_v22?.[_v3] || !!_v16[_v3];
                      return (0, _v1.jsx)(_v459, {
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
            }), _v26 && (0, _v1.jsx)(_v457, {
              onClick: () => _v15(!_v14),
              children: _v14 ? _v80.SHOW_LESS : _v80.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v459 = ({
      folderName: _v0,
      isChecked: _v1,
      onChange: _v2
    }) => {
      let _v3 = (0, _v25.useBreakpointValue)({
        base: "md",
        md: "sm"
      });
      return (0, _v1.jsx)(_v389.Checkbox, {
        isChecked: _v1,
        onChange: _v2,
        paddingY: "sm",
        size: _v3,
        children: (0, _v1.jsx)(_v203.VStack, {
          justifyContent: "space-between",
          alignItems: "start",
          gap: "xs",
          children: (0, _v1.jsx)(_v160.Text, {
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
  var _v460 = _v0.i(0);
  let _v461 = ["active", "user.name", "user.pictures.sizes", "user.uri"],
    _v462 = () => {
      let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          sendFilterEvent: _v1
        } = _v196(),
        {
          onCheckboxChange: _v2,
          onClearFilter: _v3,
          uploader: _v4
        } = _v188(),
        [_v5, _v6] = (0, _v3.useState)(""),
        [_v7, _v8] = (0, _v3.useState)({}),
        [_v9, _v10] = (0, _v3.useState)(!!_v4),
        [_v11, _v12] = (0, _v3.useState)(!1),
        _v13 = (0, _v3.useRef)(!1),
        _v14 = (0, _v452.useDebouncedValue)(_v5, 500),
        {
          data: _v15,
          isLoading: _v16
        } = (0, _v460.useGetUserTeammembers)(() => _v0?.user ? {
          where: {
            userId: _v0?.teamUser?.ownerId || _v0?.user?.id
          },
          query: {
            excludeInvisible: !1,
            perPage: 10,
            query: _v14,
            users: _v13.current ? void 0 : _v4
          },
          select: _v461
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
        _v22 = _v14 && _v18 ? _v80.SELECT_USERS : _v80.LAST_ACTIVE,
        _v23 = !!_v17,
        {
          name: _v24,
          nameCopy: _v25,
          untranslatedCopy: _v26
        } = _v102,
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
      return (0, _v1.jsx)(_v391, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v393, {
            isExpanded: _v0,
            nameCopy: _v25,
            showResetButton: _v23,
            onResetClick: _v29
          }), (0, _v1.jsxs)(_v395, {
            children: [(0, _v1.jsx)(_v453, {
              searchTerm: _v5,
              onInputChange: _v28,
              onClearClick: _v27
            }), (0, _v1.jsx)(_v1.Fragment, {
              children: _v16 ? (0, _v1.jsx)(_v454, {
                height: (0, _v9.rem)(136)
              }) : (0, _v1.jsx)(_v1.Fragment, {
                children: _v15?.data?.length === 0 ? (0, _v1.jsx)(_v456, {}) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v455, {
                    selectedLength: _v19,
                    headerCopy: _v22,
                    onSelectedCountClick: () => _v10(!0)
                  }), (0, _v1.jsx)(_v203.VStack, {
                    gap: "0",
                    alignItems: "flex-start",
                    children: _v21?.map((_v0, _v1) => {
                      let {
                        user: _v2
                      } = _v0;
                      if (!_v2) return;
                      let _v3 = _v2?.uri.split("/")[2],
                        _v4 = !!_v17?.[_v3];
                      return (0, _v1.jsx)(_v463, {
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
            }), _v20 && (0, _v1.jsx)(_v457, {
              onClick: () => _v12(!_v11),
              children: _v11 ? _v80.SHOW_LESS : _v80.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v463 = ({
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
      return (0, _v1.jsx)(_v389.Checkbox, {
        isChecked: _v1,
        onChange: _v2,
        paddingY: "sm",
        size: _v3,
        children: (0, _v1.jsxs)(_v202.HStack, {
          gap: "0",
          children: [(0, _v1.jsx)(_v360.Avatar, {
            size: "sm",
            alt: _v80.PROFILE_PICTURE,
            src: _v5?.pictures?.sizes?.[0]?.link,
            nameProps: {
              name: _v5?.name ?? ""
            }
          }), (0, _v1.jsxs)(_v202.HStack, {
            justifyContent: "space-between",
            children: [(0, _v1.jsx)(_v160.Text, {
              variant: {
                base: "body-lg",
                md: "body-md"
              },
              isTruncated: !0,
              width: _v4 ? (0, _v9.rem)(120) : (0, _v9.rem)(50),
              marginLeft: "sm",
              children: _v5?.name
            }), !_v4 && (0, _v1.jsx)(_v207.Badge, {
              color: "text-secondary",
              backgroundColor: "stroke",
              size: "sm",
              children: _v80.DEACTIVATED
            })]
          })]
        })
      });
    },
    _v464 = () => {
      let {
          type: _v0,
          queryFields: _v1,
          privacy: _v2
        } = _v188(),
        {
          hasAutoClosedCaptions: _v3,
          hasTeamPrivacy: _v4
        } = _v68(),
        {
          settings: _v5
        } = (0, _v190.useOrionSettings)(),
        {
          fields: _v6,
          isLoading: _v7
        } = _v420({
          enabled: _v5.show_custom_metadata
        }),
        _v8 = _v6.length > 0,
        _v9 = _v5.show_custom_metadata && !_v7 && _v8,
        _v10 = ((_v0, _v1 = _v98.options.default.value) => {
          let _v2 = structuredClone(_v99);
          switch (_v1) {
            case _v98.options.default.value:
            case _v98.options.folder.value:
              _v2.options = {
                title: _v2.options.title
              };
              break;
            case _v98.options.showcase.value:
            case _v98.options.live_event.value:
              _v2.options = {
                title: _v2.options.title,
                description: _v2.options.description,
                tags: _v2.options.tags
              };
              break;
            case _v98.options.video.value:
              _v0 || delete _v2.options.transcript;
          }
          return _v2;
        })(_v3, _v0),
        _v11 = _v0 => _v0?.split(",")?.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1]: !0
        }), {}),
        _v12 = _v0 !== _v98.options.folder.value,
        _v13 = _v0 !== _v98.options.showcase.value,
        _v14 = _v101(_v5.privacy_settings_new_copy);
      return _v4 || (_v14.options = Object.fromEntries(Object.entries(_v14.options).filter(([_v0]) => _v0 !== _v79.DEFAULT_PRIVACY_VALUES.TEAM))), (0, _v1.jsxs)(_v388.Accordion, {
        allowMultiple: !0,
        allowToggle: !0,
        defaultIndex: [...Array(_v9 ? 12 : 11).keys()],
        marginBottom: "sm",
        gap: {
          base: "md",
          md: "sm"
        },
        children: [(0, _v1.jsx)(_v396, {
          selectedValues: _v11(_v1),
          filterDetails: _v10
        }), _v13 && (0, _v1.jsx)(_v458, {}), (0, _v1.jsx)(_v451, {}), _v12 && (0, _v1.jsx)(_v396, {
          selectedValues: _v11(_v2),
          filterDetails: _v14
        }), (0, _v1.jsx)(_v462, {}), _v9 && (0, _v1.jsx)(_v449, {})]
      });
    };
  var _v465 = _v0.i(0),
    _v466 = _v0.i(0);
  let _v467 = () => {
    let {
        sendSortEvent: _v0
      } = _v196(),
      {
        sort: _v1,
        onLibraryFilterChange: _v2
      } = _v188(),
      _v3 = _v1 || _v121.relevance.value;
    return (0, _v1.jsx)(_v232.Menu, {
      children: (0, _v1.jsx)(_v465.MenuOptionGroup, {
        defaultValue: _v3,
        type: "radio",
        onChange: _v0 => {
          let _v1 = null;
          for (let _v0 of Object.values(_v121)) if (_v0.value === _v0) {
            _v1 = _v0.untranslatedText;
            break;
          }
          _v0({
            copy: _v1,
            value: _v0,
            previousValue: _v3
          }), _v2(_v36, _v0);
        },
        children: Object.keys(_v121).map((_v0, _v1) => (0, _v1.jsx)(_v466.MenuItemOption, {
          value: _v121[_v0].value,
          children: _v121[_v0].text
        }, _v1))
      })
    });
  };
  var _v468 = _v0.i(0),
    _v469 = _v0.i(0);
  let _v470 = () => {
    let _v0,
      _v1 = (0, _v2.useRouter)(),
      _v2 = (0, _v3.useContext)(_v67.ViewerContext),
      {
        searchType: _v3
      } = (0, _v3.useContext)(_v152),
      {
        query: _v4,
        type: _v5
      } = _v175(),
      _v6 = _v86.options.people.value,
      _v7 = _v86.options.clip.value,
      _v8 = _v5 !== _v6,
      _v9 = _v3 === _v150,
      {
        data: _v10,
        isLoading: _v11
      } = _v184(() => _v1.isReady && _v2?.apiUrl && _v8 && _v9 ? {
        select: ["clip.name"],
        query: {
          filterType: _v5 ? _v86.options[_v5].value : _v7,
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
          text: _v80.ANY
        }
      }, _v12.options.forEach(_v0 => {
        _v0.total > 0 && (_v0[_v0.name] = {
          value: _v0.name,
          text: _v0.text
        });
      }), {
        nameCopy: _v5 === _v86.options.ondemand.value ? _v80.GENRES : _v80.CATEGORIES,
        name: _v12.name,
        options: _v0
      })
    };
  };
  var _v471 = _v0.i(0),
    _v472 = _v0.i(0);
  let _v473 = ({
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
        } = _v175(),
        {
          sendFilterEvent: _v7
        } = _v196(),
        {
          options: _v8,
          name: _v9,
          nameCopy: _v10,
          untranslatedCopy: _v11
        } = _v1,
        _v12 = _v8.default?.value,
        _v13 = _v0 && _v8[_v0] ? _v8[_v0].value : _v12,
        _v14 = _v9 === _v86.name,
        _v15 = Object.keys(_v8),
        _v16 = _v15.length > 8,
        _v17 = _v3 ? _v15 : _v15.slice(0, 8),
        _v18 = !_v14 && void 0 !== _v0;
      return (0, _v1.jsx)(_v391, {
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v393, {
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
          }), (0, _v1.jsxs)(_v395, {
            children: [(0, _v1.jsx)(_v471.RadioGroup, {
              onChange: _v0 => {
                _v7({
                  copy: _v142(_v8, _v0),
                  value: [_v0],
                  valueName: _v11 ?? _v10,
                  previousValue: [_v13]
                }), _v2 ? _v2(_v9, _v0) : _v6(_v9, _v0);
              },
              value: _v13,
              defaultValue: _v12,
              children: (0, _v1.jsx)(_v366.Stack, {
                direction: "column",
                gap: "0",
                children: _v17.map(_v0 => (0, _v1.jsx)(_v472.Radio, {
                  size: _v5,
                  value: _v8[_v0].value,
                  paddingY: (0, _v9.rem)(8),
                  children: (0, _v1.jsx)(_v160.Text, {
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
            }), _v16 && (0, _v1.jsx)(_v457, {
              onClick: () => _v4(!_v3),
              children: _v3 ? _v80.SHOW_LESS : _v80.SHOW_MORE
            })]
          })]
        })
      });
    },
    _v474 = () => {
      let {
          updated: _v0,
          category: _v1
        } = _v175(),
        {
          categoryFilter: _v2
        } = _v470();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v473, {
          value: _v0,
          filterDetails: _v85
        }), _v2 && (0, _v1.jsx)(_v473, {
          value: _v1,
          filterDetails: _v2
        })]
      });
    },
    _v475 = () => {
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
        } = _v175(),
        {
          categoryFilter: _v10
        } = _v470();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v10 && (0, _v1.jsx)(_v473, {
          value: _v9,
          filterDetails: _v10
        }), (0, _v1.jsx)(_v473, {
          value: _v0,
          filterDetails: _v87
        }), (0, _v1.jsx)(_v473, {
          value: _v1,
          filterDetails: _v88
        }), (0, _v1.jsx)(_v473, {
          value: _v2,
          filterDetails: _v89
        }), (0, _v1.jsx)(_v473, {
          value: _v3,
          filterDetails: _v90
        }), (0, _v1.jsx)(_v473, {
          value: _v4,
          filterDetails: _v91
        }), (0, _v1.jsx)(_v473, {
          value: _v5,
          filterDetails: _v92
        }), (0, _v1.jsx)(_v473, {
          value: _v6,
          filterDetails: _v93
        }), (0, _v1.jsx)(_v473, {
          value: _v7,
          filterDetails: _v94
        }), (0, _v1.jsx)(_v473, {
          value: _v8,
          filterDetails: _v84
        })]
      });
    },
    _v476 = () => {
      let {
          category: _v0
        } = _v175(),
        {
          categoryFilter: _v1
        } = _v470();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v473, {
          value: _v0,
          filterDetails: _v1
        })
      });
    },
    _v477 = () => {
      let {
          category: _v0
        } = _v175(),
        {
          categoryFilter: _v1
        } = _v470();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v473, {
          value: _v0,
          filterDetails: _v1
        })
      });
    },
    _v478 = () => {
      let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
        {
          follow: _v1,
          onFilterChange: _v2
        } = _v175(),
        {
          sendFilterEvent: _v3
        } = _v196(),
        _v4 = (0, _v25.useBreakpointValue)({
          base: "md",
          md: "sm"
        });
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v0?.user && (0, _v1.jsx)(_v391, {
          children: ({
            isExpanded: _v0
          }) => (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v393, {
              isExpanded: _v0,
              nameCopy: _v95.nameCopy,
              showResetButton: !!_v1,
              onResetClick: () => {
                _v2(_v95.name, _v95.options.default.value), _v3({
                  copy: _v30,
                  value: [_v95.options.default.value],
                  valueName: _v95.untranslatedCopy ?? _v95.nameCopy,
                  previousValue: [_v1]
                });
              }
            }), (0, _v1.jsx)(_v395, {
              children: (0, _v1.jsx)(_v389.Checkbox, {
                isChecked: !!_v1,
                paddingY: "sm",
                size: _v4,
                onChange: () => {
                  let _v0 = !0 == !!_v1 ? _v95.options.default.value : _v95.options.follow.value;
                  _v2("follow", _v0), _v3({
                    copy: _v95.options.follow.untranslatedText,
                    value: [_v0],
                    valueName: _v95.untranslatedCopy ?? _v95.nameCopy,
                    previousValue: [_v1 ?? _v95.options.default.value]
                  });
                },
                children: _v95.options.follow.text
              })
            })]
          })
        })
      });
    },
    _v479 = () => {
      let {
          type: _v0
        } = _v175(),
        _v1 = (0, _v3.useContext)(_v67.ViewerContext),
        [_v2, _v3] = (0, _v3.useState)(!1),
        _v4 = _v86.options.clip.value,
        _v5 = _v86.options.channel.value,
        _v6 = _v86.options.people.value,
        _v7 = _v86.options.group.value,
        _v8 = _v86.options.ondemand.value;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v388.Accordion, {
          allowMultiple: !0,
          allowToggle: !0,
          defaultIndex: [...Array(11).keys()],
          children: (_v0 => {
            switch (_v0) {
              case _v6:
                return (0, _v1.jsx)(_v478, {});
              case _v5:
                return (0, _v1.jsx)(_v474, {});
              case _v7:
                return (0, _v1.jsx)(_v476, {});
              case _v4:
                return (0, _v1.jsx)(_v475, {});
              case _v8:
                return (0, _v1.jsx)(_v477, {});
              default:
                return;
            }
          })(_v0)
        }), (0, _v1.jsx)(_v161.Button, {
          size: "md",
          variant: "tertiary",
          backgroundColor: "fill-component",
          onClick: () => _v3(!0),
          width: "100%",
          leftIcon: (0, _v1.jsx)(_v468.SettingsGear, {}),
          marginY: "sm",
          justifyContent: "flex-start",
          children: _v80.CONTENT_FILTER
        }), _v1 && (0, _v1.jsx)(_v469.MatureContentModal, {
          open: _v2,
          onClose: () => _v3(!1),
          token: _v1.xsrft,
          ..._v1.contentViewingPrefs
        })]
      });
    },
    _v480 = () => {
      let {
          type: _v0 = _v86.options.clip.value,
          onFilterChange: _v1,
          sort: _v2
        } = _v175(),
        {
          sendSortEvent: _v3
        } = _v196(),
        _v4 = _v120[_v0],
        _v5 = _v2 ?? _v120.clip.relevance.value;
      return (0, _v1.jsx)(_v232.Menu, {
        children: (0, _v1.jsx)(_v465.MenuOptionGroup, {
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
          children: Object.keys(_v4).map((_v0, _v1) => (0, _v1.jsx)(_v466.MenuItemOption, {
            value: _v4[_v0].value,
            children: _v4[_v0].text
          }, _v1))
        })
      });
    };
  var _v481 = _v0.i(0),
    _v482 = _v0.i(0);
  let _v483 = () => {
      let {
          clearFilters: _v0,
          keepPreviousUrl: _v1
        } = _v175(),
        {
          clearLibraryFilters: _v2,
          keepPreviousLibraryUrl: _v3
        } = _v188(),
        {
          panelStatus: _v4,
          togglePanel: _v5,
          isDrawerOpen: _v6
        } = (0, _v3.useContext)(_v61),
        {
          searchType: _v7
        } = (0, _v3.useContext)(_v152),
        _v8 = _v4 === _v31,
        _v9 = _v7 === _v149,
        _v10 = () => {
          if (_v8) return _v9 ? _v3() : _v1();
        };
      return (0, _v1.jsxs)(_v398.Drawer, {
        placement: "bottom",
        isOpen: _v6,
        onClose: () => {
          _v10(), _v5();
        },
        children: [(0, _v1.jsx)(_v403.DrawerOverlay, {}), (0, _v1.jsx)(_v481.motion.div, {
          drag: "y",
          dragConstraints: {
            top: 0,
            bottom: 100
          },
          onDragEnd: (_v0, _v1) => {
            _v1.offset.y < 0 || (_v10(), _v5());
          },
          children: (0, _v1.jsxs)(_v400.DrawerContent, {
            maxHeight: `calc(100vh - ${(0, _v9.rem)(64)})`,
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            sx: {
              '&[data-placement="bottom"]': {
                maxW: "100vw"
              }
            },
            children: [(0, _v1.jsx)(_v482.bokeh.hr, {
              backgroundColor: "text-tertiary",
              alignSelf: "center",
              paddingY: (0, _v9.rem)(2),
              width: (0, _v9.rem)(70),
              border: "none",
              borderRadius: (0, _v9.rem)(10),
              my: "sm"
            }), (0, _v1.jsxs)(_v402.DrawerHeader, {
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              pt: (0, _v9.rem)(4),
              pr: (0, _v9.rem)(28),
              pb: "md",
              pl: (0, _v9.rem)(32),
              children: [(0, _v1.jsx)(_v160.Text, {
                variant: "heading-sm",
                children: _v8 ? _v80.FILTERS : _v80.SORT
              }), (0, _v1.jsx)(_v206.CloseButton, {
                "aria-label": "close button",
                size: "sm",
                variant: "tertiary",
                onClick: () => {
                  _v10(), _v5();
                }
              })]
            }), (0, _v1.jsx)(_v399.DrawerBody, {
              sx: {
                "&&": {
                  pt: "0"
                }
              },
              children: _v8 ? _v9 ? (0, _v1.jsx)(_v464, {}) : (0, _v1.jsx)(_v479, {}) : _v9 ? (0, _v1.jsx)(_v467, {}) : (0, _v1.jsx)(_v480, {})
            }), _v8 && (0, _v1.jsx)(_v401.DrawerFooter, {
              boxSizing: "border-box",
              padding: "0",
              children: (0, _v1.jsxs)(_v158.Grid, {
                templateColumns: "repeat(2, 1fr)",
                gridGap: "md",
                width: "100%",
                height: (0, _v9.rem)(72),
                alignItems: "center",
                paddingX: "md",
                children: [(0, _v1.jsx)(_v161.Button, {
                  size: "md",
                  width: "100%",
                  variant: "tertiary",
                  marginRight: "xs",
                  onClick: () => {
                    _v9 ? _v2() : _v0(), _v5();
                  },
                  children: _v80.RESET_ALL
                }), (0, _v1.jsx)(_v161.Button, {
                  size: "md",
                  variant: "primary",
                  width: "100%",
                  marginRight: "xs",
                  onClick: () => {
                    _v264.BigPictureClient.sendEvent(new _v264.Event("vimeo.click", 151, {
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
                  children: _v80.APPLY
                })]
              })
            })]
          })
        })]
      });
    },
    _v484 = () => {
      let {
          clearFilters: _v0,
          appliedFiltersCount: _v1
        } = _v175(),
        {
          clearLibraryFilters: _v2,
          appliedFiltersCount: _v3
        } = _v188(),
        {
          panelStatus: _v4,
          hasDrawer: _v5,
          togglePanel: _v6
        } = (0, _v3.useContext)(_v61),
        {
          searchType: _v7
        } = (0, _v3.useContext)(_v152),
        _v8 = (0, _v25.useBreakpointValue)(_v33),
        _v9 = _v7 === _v149,
        _v10 = _v4 === _v31,
        _v11 = _v8 === _v33.sm ? 10 : 40;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v5 ? (0, _v1.jsx)(_v483, {}) : (0, _v1.jsxs)(_v157.Panel, {
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
          children: [(0, _v1.jsxs)(_v157.PanelHeader, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "sm",
            pr: "md",
            children: [(0, _v1.jsx)(_v160.Text, {
              variant: "heading-sm",
              children: _v10 ? _v80.FILTERS : _v80.SORT
            }), (0, _v1.jsx)(_v156.Box, {
              children: (0, _v1.jsx)(_v206.CloseButton, {
                "aria-label": "close button",
                size: "sm",
                variant: "tertiary",
                onClick: () => _v6()
              })
            })]
          }), (0, _v1.jsx)(_v157.PanelBody, {
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
              children: _v10 ? _v9 ? (0, _v1.jsx)(_v464, {}) : (0, _v1.jsx)(_v479, {}) : _v9 ? (0, _v1.jsx)(_v467, {}) : (0, _v1.jsx)(_v480, {})
            })
          }), (_v9 ? _v3 > 0 : _v1 > 0) && _v10 && (0, _v1.jsx)(_v203.VStack, {
            py: "sm",
            pr: "sm",
            alignSelf: "stretch",
            children: (0, _v1.jsx)(_v161.Button, {
              size: "sm",
              variant: "tertiary",
              width: "100%",
              onClick: () => _v9 ? _v2() : _v0(),
              children: _v80.RESET_ALL
            })
          })]
        })
      });
    };
  var _v485 = _v0.i(0);
  let _v486 = "thumbs_up",
    _v487 = "thumbs_down",
    _v488 = {
      thumbsUp: !1,
      thumbsDown: !1,
      providedFeedback: !1
    };
  function _v489(_v0, _v1) {
    switch (_v1.type) {
      case _v486:
        return {
          thumbsUp: !_v0.thumbsUp,
          thumbsDown: !1,
          providedFeedback: !0
        };
      case _v487:
        return {
          thumbsDown: !_v0.thumbsDown,
          thumbsUp: !1,
          providedFeedback: !0
        };
      default:
        return _v0;
    }
  }
  let _v490 = ({
      onThumbsRate: _v0,
      ..._v1
    }) => {
      let [_v2, _v3] = (0, _v3.useReducer)(_v489, _v488);
      return (0, _v3.useEffect)(() => {
        _v2.providedFeedback && _v0?.(_v2);
      }, [_v2]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v162.IconButton, {
          variant: "tertiary",
          icon: _v2.thumbsUp ? (0, _v1.jsx)(_v165.ThumbUpFilled, {}) : (0, _v1.jsx)(_v164.ThumbUp, {}),
          onClick: () => _v3({
            type: _v486
          }),
          ..._v1,
          "aria-label": "thumbs up"
        }), (0, _v1.jsx)(_v162.IconButton, {
          variant: "tertiary",
          icon: _v2.thumbsDown ? (0, _v1.jsx)(_v167.ThumbDownFilled, {}) : (0, _v1.jsx)(_v166.ThumbDown, {}),
          onClick: () => _v3({
            type: _v487
          }),
          ..._v1,
          "aria-label": "thumbs down"
        })]
      });
    },
    _v491 = () => {
      let {
          panelMoments: _v0
        } = (0, _v3.useContext)(_v61),
        {
          moments: _v1,
          currentIdx: _v2 = 0,
          currentReviewLink: _v3
        } = _v0,
        {
          query: _v4 = ""
        } = _v188();
      if (!_v1) return (0, _v1.jsx)(_v1.Fragment, {});
      let _v5 = _v1[_v2],
        {
          startTime: _v6,
          endTime: _v7,
          contentsHighlight: _v8,
          contents: _v9,
          type: _v10
        } = _v5,
        _v11 = `${(0, _v218.secondsToDisplay)(Math.floor(_v6 / 0))} - ${(0, _v218.secondsToDisplay)(Math.floor(_v7 / 0))}`,
        _v12 = _v139(_v8) || _v4;
      return _v10 === _v125.vis ? (0, _v1.jsx)(_v494, {
        content: _v9,
        timestamp: _v11,
        query: _v12
      }) : _v10 === _v125.comment || _v10 === _v125.commentReply ? (0, _v1.jsx)(_v492, {
        currentMoment: _v5,
        type: _v10,
        query: _v4,
        link: _v3
      }) : (0, _v1.jsxs)(_v156.Box, {
        mx: "sm",
        children: [(0, _v1.jsx)(_v493, {
          mr: "sm",
          children: _v11
        }), (0, _v1.jsx)(_v217.Paragraph, {
          variant: "body-lg",
          display: "inline",
          children: (0, _v1.jsx)(_v322, {
            query: _v12,
            children: _v140(_v9, _v12, 30, 80)
          })
        })]
      });
    },
    _v492 = ({
      currentMoment: _v0,
      query: _v1,
      type: _v2,
      link: _v3 = ""
    }) => {
      let _v4 = (0, _v280.useNotification)(),
        {
          contents: _v5,
          contentsHighlight: _v6,
          metadata: _v7,
          startTime: _v8
        } = _v0,
        _v9 = _v139(_v6) || _v1,
        _v10 = `${(0, _v218.secondsToDisplay)(Math.floor(_v8 / 0))}`,
        _v11 = _v2 === _v125.comment ? _v7.connections.privateComment : _v7.connections.privateCommentReply;
      return (0, _v1.jsxs)(_v202.HStack, {
        borderRadius: "md",
        padding: "sm",
        role: "group",
        cursor: "pointer",
        _hover: {
          background: "fill-component-hover"
        },
        children: [(0, _v1.jsx)(_v156.Box, {
          alignSelf: "flex-start",
          children: (0, _v1.jsx)(_v360.Avatar, {
            size: "sm",
            alt: "user avatar",
            src: _v11.user?.pictures?.sizes[1]?.link,
            nameProps: {
              name: String(_v11.user?.name ?? "")
            }
          })
        }), (0, _v1.jsxs)(_v203.VStack, {
          w: "100%",
          gap: "0",
          children: [(0, _v1.jsxs)(_v202.HStack, {
            justifyContent: "space-between",
            w: "100%",
            children: [(0, _v1.jsxs)(_v202.HStack, {
              children: [(0, _v1.jsx)(_v160.Text, {
                variant: "heading-xs",
                children: _v11.user?.name || 0
              }), (0, _v1.jsx)(_v160.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v218.fromNow)(new Date(_v11.createdOn), {
                  shorten: !0
                })
              })]
            }), (0, _v1.jsx)(_v215.Tooltip, {
              placement: "top",
              label: _v80.COPY_LINK_TO_COMMENT,
              children: (0, _v1.jsx)(_v162.IconButton, {
                size: "xs",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v485.Link, {}),
                opacity: "0",
                "aria-label": _v80.COPY_LINK_TO_COMMENT,
                _hover: {
                  color: "text-primary",
                  background: "button-secondary-default"
                },
                _groupHover: {
                  opacity: "100%"
                },
                onClick: () => {
                  _v4({
                    content: _v80.COMMENT_LINK_COPIED
                  }), (0, _v339.default)(_v3);
                }
              })
            })]
          }), (0, _v1.jsxs)(_v156.Box, {
            alignSelf: "flex-start",
            children: [(0, _v1.jsx)(_v493, {
              mr: "sm",
              children: _v10
            }), (0, _v1.jsx)(_v217.Paragraph, {
              variant: "body-lg",
              display: "inline",
              children: (0, _v1.jsx)(_v322, {
                query: _v9,
                children: _v5
              })
            })]
          })]
        })]
      });
    },
    _v493 = _v0 => (0, _v1.jsx)(_v160.Text, {
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
    _v494 = ({
      timestamp: _v0,
      content: _v1,
      query: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(!1),
        [_v5, _v6] = (0, _v3.useState)(!1),
        {
          sendMomentsThumbsRate: _v7
        } = _v196(),
        _v8 = (0, _v280.useNotification)(),
        _v9 = (0, _v3.useCallback)(_v0 => {
          _v0 && _v6(_v0?.scrollHeight > _v0.clientHeight + 2);
        }, []);
      return (0, _v1.jsxs)(_v203.VStack, {
        gap: "sm",
        alignItems: "flex-start",
        h: "100%",
        mx: "sm",
        children: [(0, _v1.jsx)(_v493, {
          mr: "sm",
          children: _v0
        }), (0, _v1.jsx)(_v160.Text, {
          ref: _v9,
          variant: "body-lg",
          maxHeight: _v3 ? "max-content" : (0, _v9.rem)(178),
          noOfLines: _v3 ? void 0 : 8,
          overflow: _v3 ? "visible" : "hidden",
          children: (0, _v1.jsx)(_v322, {
            query: _v2,
            children: _v1
          })
        }), _v5 && (0, _v1.jsx)(_v161.Button, {
          variant: "secondary",
          size: {
            base: "md",
            md: "xs"
          },
          onClick: () => _v4(!_v3),
          flex: "0 0 auto",
          children: _v3 ? _v80.SHOW_LESS : _v80.SHOW_MORE
        }), (0, _v1.jsxs)(_v202.HStack, {
          h: (0, _v9.rem)(24),
          w: "100%",
          marginTop: _v3 ? "md" : (0, _v9.rem)(36),
          alignSelf: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v160.Text, {
            variant: "heading-2xs",
            color: "text-secondary",
            children: _v80.DESCRIPTION_AI_GENERATED
          }), (0, _v1.jsx)(_v202.HStack, {
            children: (0, _v1.jsx)(_v490, {
              size: "xs",
              color: "text-secondary",
              onThumbsRate: _v0 => {
                _v7(_v0), _v8({
                  content: _v80.THANKS_FOR_FEEDBACK
                });
              }
            })
          })]
        })]
      });
    },
    _v495 = ({
      isOpen: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v157.Panel, {
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
      children: (0, _v1.jsx)(_v157.PanelBody, {
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
    _v496 = ({
      isOpen: _v0,
      ..._v1
    }) => {
      let {
        togglePanel: _v2
      } = (0, _v3.useContext)(_v61);
      return (0, _v1.jsxs)(_v398.Drawer, {
        placement: "bottom",
        isOpen: _v0,
        onClose: () => {
          _v2();
        },
        children: [(0, _v1.jsx)(_v403.DrawerOverlay, {}), (0, _v1.jsx)(_v481.motion.div, {
          drag: "y",
          dragConstraints: {
            top: 0,
            bottom: 100
          },
          onDragEnd: (_v0, _v1) => {
            _v1.offset.y < 0 || _v2();
          },
          children: (0, _v1.jsxs)(_v400.DrawerContent, {
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
            children: [(0, _v1.jsx)(_v482.bokeh.hr, {
              backgroundColor: "text-tertiary",
              alignSelf: "center",
              paddingY: (0, _v9.rem)(2),
              width: (0, _v9.rem)(70),
              border: "none",
              borderRadius: (0, _v9.rem)(10),
              my: "sm"
            }), (0, _v1.jsx)(_v399.DrawerBody, {
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
  var _v497 = _v0.i(0),
    _v498 = _v0.i(0),
    _v499 = _v0.i(0);
  let _v500 = () => {
      let {
          panelMoments: _v0,
          togglePanel: _v1,
          setPanelMoments: _v2
        } = (0, _v3.useContext)(_v61),
        {
          sendMomentsPanelClick: _v3
        } = _v196(),
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
        _v11 = _v10 === _v125.comment || _v10 === _v125.commentReply,
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
        children: [(0, _v1.jsx)(_v201.Skeleton, {
          height: "100%",
          width: "100%"
        }), (0, _v1.jsx)(_v156.Box, {
          background: "fill-surface",
          height: "100%",
          width: "100%",
          position: "absolute",
          children: (0, _v1.jsx)(_v499.EmbedPlayer, {
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
          children: [(0, _v1.jsx)(_v202.HStack, {
            children: _v4.length > 1 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v501, {
                tooltipLabel: _v80.PREVIOUS_MOMENT,
                "aria-label": _v80.PREVIOUS_MOMENT,
                icon: (0, _v1.jsx)(_v406.ChevronLeft, {}),
                isDisabled: 0 === _v5,
                onClick: () => _v13(-1)
              }), (0, _v1.jsx)(_v501, {
                tooltipLabel: _v80.NEXT_MOMENT,
                "aria-label": _v80.NEXT_MOMENT,
                icon: (0, _v1.jsx)(_v498.ChevronRight, {}),
                isDisabled: _v5 === _v4.length - 1,
                onClick: () => _v13(1)
              })]
            })
          }), (0, _v1.jsx)(_v501, {
            "aria-label": "Close panel",
            icon: (0, _v1.jsx)(_v497.CloseXSmall, {}),
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
    _v501 = ({
      tooltipLabel: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v215.Tooltip, {
      label: _v0,
      isDisabled: !_v0,
      placement: "top",
      children: (0, _v1.jsx)(_v162.IconButton, {
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
    _v502 = () => {
      let {
          panelStatus: _v0,
          hasDrawer: _v1,
          panelMoments: _v2
        } = (0, _v3.useContext)(_v61),
        {
          moments: _v3,
          currentIdx: _v4 = 0,
          currentVidLink: _v5,
          currentVidId: _v6
        } = _v2,
        {
          query: _v7 = ""
        } = _v188(),
        {
          sendMomentsPanelImpressions: _v8
        } = _v196(),
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
        _v14 = _v138(_v5, _v10, _v7, !0, _v11);
      return (0, _v1.jsxs)(_v1 ? _v496 : _v495, {
        isOpen: _v9,
        children: [(0, _v1.jsx)(_v500, {}), (0, _v1.jsx)(_v203.VStack, {
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
            children: [(0, _v1.jsx)(_v503, {
              type: _v12,
              attributes: _v13,
              marginBottom: "sm",
              momentLink: _v14,
              videoId: _v6
            }), (0, _v1.jsx)(_v491, {}, _v14)]
          })
        }), (0, _v1.jsx)(_v504, {
          momentLink: _v14,
          videoLink: _v5,
          videoId: _v6
        })]
      });
    },
    _v503 = ({
      type: _v0,
      attributes: _v1,
      momentLink: _v2,
      videoId: _v3,
      ..._v4
    }) => {
      let _v5 = (0, _v280.useNotification)(),
        {
          sendMomentsPanelClick: _v6
        } = _v196(),
        {
          label: _v7,
          Icon: _v8
        } = _v148(_v0, _v1);
      return (0, _v1.jsxs)(_v202.HStack, {
        gap: "xs",
        w: "100%",
        height: (0, _v9.rem)(20),
        ..._v4,
        role: "group",
        cursor: "pointer",
        mx: "sm",
        children: [(0, _v1.jsx)(_v8, {
          boxSize: `${(0, _v9.rem)(16)} !important`
        }), (0, _v1.jsx)(_v160.Text, {
          variant: "heading-sm",
          lineHeight: "inherit",
          children: _v7
        }), (0, _v1.jsx)(_v207.Badge, {
          variant: "warning",
          size: "xs",
          height: (0, _v9.rem)(14),
          borderWidth: "0",
          pt: "1px",
          ml: "xs",
          children: _v80.BETA
        }), (0, _v1.jsx)(_v215.Tooltip, {
          placement: "top",
          label: _v80.COPY_LINK_TO_CLIP,
          children: (0, _v1.jsx)(_v162.IconButton, {
            size: "xs",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v485.Link, {}),
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
                content: _v80.CLIP_LINK_COPIED
              }), (0, _v339.default)(_v2), _v6({
                entityId: _v3,
                copy: "Clip link copied"
              });
            }
          })
        })]
      });
    },
    _v504 = ({
      videoLink: _v0,
      momentLink: _v1,
      videoId: _v2
    }) => {
      let _v3 = (0, _v280.useNotification)(),
        {
          sendMomentsPanelClick: _v4
        } = _v196();
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
        children: [(0, _v1.jsx)(_v161.Button, {
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
          children: _v80.VIEW_FULL_VIDEO
        }), (0, _v1.jsx)(_v161.Button, {
          size: "md",
          leftIcon: (0, _v1.jsx)(_v485.Link, {}),
          variant: "primary",
          onClick: () => {
            _v3({
              content: _v80.CLIP_LINK_COPIED
            }), (0, _v339.default)(_v1), _v4({
              entityId: _v2,
              copy: "Copy link to clip"
            });
          },
          flexBasis: {
            base: "auto",
            md: "50%"
          },
          children: _v80.COPY_LINK_TO_CLIP
        })]
      });
    },
    _v505 = () => {
      let {
          panelStatus: _v0,
          togglePanel: _v1
        } = (0, _v3.useContext)(_v61),
        {
          query: _v2 = "",
          type: _v3
        } = _v188(),
        _v4 = _v0 === _v32;
      return ((0, _v3.useEffect)(() => {
        _v4 && _v1();
      }, [_v2, _v3]), _v0) ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(_v0 === _v31 || "sort" === _v0) && (0, _v1.jsx)(_v484, {}), _v4 && (0, _v1.jsx)(_v502, {})]
      }) : (0, _v1.jsx)(_v1.Fragment, {});
    },
    _v506 = () => {
      let {
          searchType: _v0
        } = (0, _v3.useContext)(_v152),
        _v1 = (0, _v2.useRouter)(),
        _v2 = (0, _v14.useViewer)(),
        {
          trackSearchPageDisplayed: _v3
        } = (0, _v12.useSearchTracking)(),
        _v4 = (0, _v3.useRef)(null);
      (0, _v3.useEffect)(() => {
        _v24.init(_v2?.teamUser);
      }, [_v2?.teamUser]);
      let _v5 = _v0 === _v150;
      return ((0, _v11.usePicoEffect)(() => {
        if (!_v1.isReady || !_v1.query.q || !_v2) return;
        let _v0 = _v1.query.q;
        if (_v4.current === _v0) return;
        _v4.current = _v0;
        let _v1 = _v1.query.type;
        _v3({
          searchQuery: _v0,
          searchActiveTab: _v5 ? "vimeo" : "library",
          searchResultType: _v1 && "default" !== _v1 ? _v1 : "all",
          searchPageViewerAuthStatus: (0, _v10.deriveViewerAuthStatus)(_v2)
        });
      }, [_v1.isReady, _v1.query.q, _v5, _v2]), (_v2?.isFromCopyrightRestrictedRegion || _v2?.isSimplifiedSite) && _v5) ? (0, _v1.jsx)(_v13.PageNotAvailablePage, {}) : _v1.isReady ? !_v1.query.q && _v5 ? (0, _v1.jsx)(_v384, {}) : (0, _v1.jsx)(_v8.Flex, {
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
        children: (0, _v1.jsx)(_v62, {
          children: (0, _v1.jsxs)(_v155, {
            children: [(0, _v1.jsx)(_v260, {}), (0, _v1.jsxs)(_v8.Flex, {
              justifyContent: "space-between",
              flexGrow: "1",
              overflow: "hidden",
              gap: {
                base: "md",
                md: "lg"
              },
              children: [_v5 ? (0, _v1.jsx)(_v378, {}) : (0, _v1.jsxs)(_v8.Flex, {
                flexDir: "column",
                height: "100%",
                overflow: "scroll",
                position: "relative",
                flexGrow: "1",
                sx: {
                  scrollbarWidth: "thin",
                  scrollbarColor: `${_v34} transparent`
                },
                children: [(0, _v1.jsx)(_v230, {}), (0, _v1.jsx)(_v354, {})]
              }), (0, _v1.jsx)(_v505, {})]
            })]
          })
        })
      }) : null;
    },
    _v507 = () => (0, _v1.jsx)(_v247, {
      children: (0, _v1.jsx)(_v153, {
        children: (0, _v1.jsx)(_v506, {})
      })
    });
  var _v508 = _v0.i(0),
    _v509 = _v0.i(0);
  let _v510 = () => {
    let _v0 = (0, _v3.useContext)(_v67.ViewerContext),
      _v1 = (0, _v2.useRouter)();
    return (0, _v3.useEffect)(() => {
      let {
        slug: _v0,
        ..._v1
      } = _v1.query;
      _v1.isReady && _v0?.[0] === _v149 && !_v1.q && _v1.push({
        query: {
          sort: "last_user_action_event_date_desc",
          ..._v1,
          slug: _v0
        }
      }, void 0, {
        shallow: !0
      });
    }, [_v1.isReady]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v507, {}), _v0 && (0, _v1.jsx)(_v508.EssentialFooter, {
        ..._v0,
        enableQuotaMenu: !1
      })]
    });
  };
  (0, _v7.withPageSetup)(async _v0 => {
    let _v1 = _v0.req?.url?.split("?")[0],
      _v2 = _v1?.split("/").pop() || "";
    return ["search", "ondemand", "people", "channel", "group", "library"].includes(_v2) ? _v2 === _v149 && _v0.req && (0, _v6.isLoggedOut)(_v0.req) ? {
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
  }), _v510.getLayout = _v0 => {
    let _v1;
    {
      let _v0 = new URLSearchParams(window.location.search).get("q"),
        _v1 = window.location.pathname.includes(`/${_v149}`);
      _v1 = !!_v0 || _v1;
    }
    return (0, _v1.jsx)(_v211.VideoLibraryLayout, {
      hasSideNav: !0,
      hasGlobalSearch: _v1,
      sideNavContent: (0, _v1.jsx)(_v509.HomeSideNavContent, {}),
      children: _v0
    });
  }, _v0.s(["__N_SSP", 0, !0, "default", 0, _v510], 0);
}