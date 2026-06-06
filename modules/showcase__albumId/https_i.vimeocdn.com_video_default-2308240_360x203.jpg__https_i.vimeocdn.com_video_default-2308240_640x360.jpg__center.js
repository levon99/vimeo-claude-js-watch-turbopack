{
  "use strict";

  _v0.i(0);
  var _v1 = _v0.i(0);
  let _v2 = {
      showByline: !0,
      showCard: !0,
      showProfile: !0,
      showFollow: !1,
      showProfileLink: !1
    },
    _v3 = "https://i.vimeocdn.com/video/default-2308240_360x203.jpg",
    _v4 = "https://i.vimeocdn.com/video/default-2308240_640x360.jpg",
    _v5 = {
      center: "center",
      right: "flex-end",
      left: "flex-start"
    },
    _v6 = "/manage/showcases/",
    _v7 = {
      navigation: {
        title: (0, _v1.translate)({
          singular: "Navigation",
          dictionary: {
            es: {
              singular: "Navegación"
            },
            "ja-JP": {
              singular: "ナビゲーション"
            },
            "ko-KR": {
              singular: "탐색"
            },
            "pt-BR": {
              singular: "Navegação"
            },
            "zh-CN": {
              singular: "导航"
            }
          }
        }),
        items: [{
          label: (0, _v1.translate)({
            singular: "Customize",
            dictionary: {
              es: {
                singular: "Personalizar"
              },
              "de-DE": {
                singular: "Personalisieren"
              },
              "fr-FR": {
                singular: "Personnaliser"
              },
              "ja-JP": {
                singular: "カスタマイズ"
              },
              "ko-KR": {
                singular: "맞춤설정"
              },
              "pt-BR": {
                singular: "Customizar"
              },
              "zh-CN": {
                singular: "自定义"
              }
            }
          }),
          route: "/layout/navigation"
        }]
      },
      banner: {
        title: (0, _v1.translate)({
          singular: "Banner",
          dictionary: {
            "fr-FR": {
              singular: "Bannière"
            },
            "ja-JP": {
              singular: "バナー"
            },
            "ko-KR": {
              singular: "배너"
            },
            "zh-CN": {
              singular: "横幅"
            }
          }
        }),
        items: [{
          label: (0, _v1.translate)({
            singular: "Customize",
            dictionary: {
              es: {
                singular: "Personalizar"
              },
              "de-DE": {
                singular: "Personalisieren"
              },
              "fr-FR": {
                singular: "Personnaliser"
              },
              "ja-JP": {
                singular: "カスタマイズ"
              },
              "ko-KR": {
                singular: "맞춤설정"
              },
              "pt-BR": {
                singular: "Customizar"
              },
              "zh-CN": {
                singular: "自定义"
              }
            }
          }),
          route: "/layout/featured"
        }]
      },
      playlist: {
        title: (0, _v1.translate)({
          singular: "Video grid",
          dictionary: {
            es: {
              singular: "Cuadrícula de video"
            },
            "de-DE": {
              singular: "Videoraster"
            },
            "fr-FR": {
              singular: "Grille vidéo"
            },
            "ja-JP": {
              singular: "動画グリッド"
            },
            "ko-KR": {
              singular: "동영상 그리드"
            },
            "pt-BR": {
              singular: "Grade de vídeo"
            },
            "zh-CN": {
              singular: "视频网格"
            }
          }
        }),
        items: [{
          label: (0, _v1.translate)({
            singular: "Manage videos",
            dictionary: {
              es: {
                singular: "Gestionar videos"
              },
              "de-DE": {
                singular: "Videos verwalten"
              },
              "fr-FR": {
                singular: "Gérer les vidéos"
              },
              "ja-JP": {
                singular: "動画の管理"
              },
              "ko-KR": {
                singular: "동영상 관리"
              },
              "pt-BR": {
                singular: "Gerenciar vídeos"
              },
              "zh-CN": {
                singular: "管理视频"
              }
            }
          }),
          route: "/layout/video-grid"
        }, {
          label: (0, _v1.translate)({
            singular: "Customize",
            dictionary: {
              es: {
                singular: "Personalizar"
              },
              "de-DE": {
                singular: "Personalisieren"
              },
              "fr-FR": {
                singular: "Personnaliser"
              },
              "ja-JP": {
                singular: "カスタマイズ"
              },
              "ko-KR": {
                singular: "맞춤설정"
              },
              "pt-BR": {
                singular: "Customizar"
              },
              "zh-CN": {
                singular: "自定义"
              }
            }
          }),
          route: "/layout/video-grid?tab=customization"
        }]
      }
    };
  _v0.s(["ALIGNMENT_VALUES", 0, _v5, "DEFAULT_SHOWCASE_PLAYER_EMBED_OVERRIDE_QUERY", 0, {
    like: 0,
    watch_later: 0,
    share: 0,
    ask_ai: 0,
    title: 0,
    byline: 0,
    portrait: 0,
    badge: 0,
    play_button_position: "bottom",
    progress_bar: 1,
    volume: 1,
    quality_selector: 1,
    speed: 1,
    fullscreen: 1,
    vimeo_logo: 0,
    force_embed: 1
  }, "FALLBACK_THUMBNAIL_URL", 0, _v3, "FALLBACK_THUMBNAIL_URL_2X", 0, _v4, "SHOWCASE_BASE_URL", 0, _v6, "getHoverStateItems", 0, (_v0, _v1) => {
    if ("playlist" === _v0 && _v1) {
      let _v0 = {
        ..._v7[_v0]
      };
      return _v0.items = [_v0.items[0]], _v0;
    }
    return _v7[_v0];
  }, "getUploaderDetailsDisplayConfig", 0, _v0 => ({
    ..._v2,
    ..._v0
  }), "playerGridSizeMap", 0, {
    s: {
      base: 1,
      lg: 2,
      xl: 3,
      "2xl": 4
    },
    m: {
      base: 1,
      lg: 2,
      xl: 3,
      "2xl": 4
    },
    l: {
      base: 1,
      xl: 2,
      "2xl": 3
    },
    xl: {
      base: 1,
      "2xl": 2
    }
  }, "thumbnailGridSizeMap", 0, {
    s: {
      base: 1,
      md: 2,
      lg: 3,
      xl: 4,
      "2xl": 5
    },
    m: {
      base: 1,
      lg: 2,
      xl: 3,
      "2xl": 4
    },
    l: {
      base: 1,
      xl: 2,
      "2xl": 3
    },
    xl: {
      base: 1,
      "2xl": 2
    }
  }], 0);
  let _v8 = _v0 => _v9(_v0?.live),
    _v9 = _v0 => ["streaming_error", "done"].includes(_v0?.status) ? void 0 : _v0?.recurringEvent?.link?.split?.("/")?.pop(),
    _v10 = ["language", "drugs", "nudity", "violence"],
    _v11 = _v0 => _v10.includes(_v0);
  _v0.s(["clipBadgeParser", 0, _v0 => ({
    isRatedMature: !!_v0?.contentRating && _v0.contentRating.some(_v11),
    isAdvert: !!_v0?.contentRating && _v0.contentRating.includes("advertisement"),
    is360Video: !!_v0?.spatial?.stereoFormat,
    isDolbyVision: !!_v0?.embed?.badges?.dolbyVision,
    isHdr10: !!_v0?.embed?.badges?.hdr_10,
    isHdr10Plus: !!_v0?.embed?.badges?.hdr_10Plus,
    aiContent: _v0?.metadata?.aiContent
  }), "contextUrlParser", 0, (_v0, _v1, _v2) => {
    let _v3 = _v2?.baseUrl || "",
      _v4 = _v0?.split?.("/videos/")?.[1] || "",
      _v5 = _v1.match(/(?:.*\/)(\d+(?::\d+)?)(?:\/?|$)/),
      _v6 = _v5?.[2] ? `${_v4}:${_v5?.[2]}` : _v4,
      _v7 = _v2?.eventId ? `event=${_v2.eventId}&video=${_v4}` : `video=${_v4}`,
      _v8 = _v4 ? `${_v3}?${_v7}` : _v3;
    return {
      clipId: _v4,
      clipRequestId: _v6,
      link: _v8
    };
  }, "extractClipData", 0, _v0 => {
    let _v1 = _v0?.clip;
    if (_v1) return _v1;
  }, "getAlignmentValue", 0, _v0 => {
    switch (_v0) {
      case "center":
        return _v5.center;
      case "right":
        return _v5.right;
      default:
        return _v5.left;
    }
  }, "getClipIdFromUri", 0, _v0 => {
    if (_v0) return _v0?.split?.("/videos/")?.[1]?.split(":")?.[0];
  }, "getClipThumbnails", 0, (_v0, _v1) => {
    let _v2 = ["l", "xl"].includes(_v1),
      _v3 = _v2 ? _v4 : _v3;
    return {
      thumbnail: _v0.pictures?.sizes?.[+!!_v2]?.link || _v3,
      thumbnail2x: _v0.pictures?.sizes?.[1]?.link ? `${_v0.pictures.sizes[1].link} 2x` : `${_v4} 2x`
    };
  }, "getConfigProperty", 0, (_v0, _v1 = "value") => null !== _v0 && "object" == typeof _v0 && "value" in _v0 && !Array.isArray(_v0) ? _v0?.[_v1] : _v0, "getEventEmbedUrl", 0, _v0 => {
    let _v1 = _v8(_v0);
    if (!_v1) return _v0?.playerEmbedUrl ?? "";
    let _v2 = (_v0 => {
        try {
          if (_v0?.link) return new URL(_v0.link).origin;
        } catch {}
        return window.location?.origin ? window.location.origin : "https://vimeo.com";
      })(_v0),
      _v3 = _v0?.live?.recurringEvent?.streamPrivacy?.unlistedHash,
      _v4 = _v0?.live?.recurringEvent?.streamPrivacy?.view === "unlisted" && _v3 ? `/event/${_v1}/embed/${_v3}` : `/event/${_v1}/embed`;
    return `${_v2}${_v4}`;
  }, "getEventIdFromClip", 0, _v8, "getIsActiveState", 0, (_v0, _v1) => !!_v0 && (_v0?.split("/").pop() || "") === _v1, "getSearchParams", 0, () => new URLSearchParams(window.location.search), "getVideoDetailsDisplayConfig", 0, ({
    showLike: _v0,
    showDescription: _v1,
    showDateAdded: _v2,
    showTitle: _v3,
    showViews: _v4
  }) => ({
    showTitle: !!_v3,
    showDescription: !!_v1,
    showCategories: !0,
    showUploadedBy: !1,
    showViews: !!_v4,
    showCreativeCommons: !0,
    showCredits: !0,
    showDateAdded: !!_v2,
    showTags: !0,
    showManageButton: !1,
    showLike: !!_v0
  }), "getViewsString", 0, _v0 => "number" == typeof _v0 ? (0, _v1.translate)({
    singular: "{COUNT} view",
    plural: "{COUNT} views",
    count: _v0,
    replacements: {
      COUNT: (0, _v1.humanize)(_v0 ?? 0)
    },
    dictionary: {
      es: {
        singular: "{COUNT} vista",
        plural: "{COUNT} vistas"
      },
      "de-DE": {
        singular: "{COUNT} Ansicht",
        plural: "{COUNT} Ansichten"
      },
      "fr-FR": {
        singular: "{COUNT} vue",
        plural: "{COUNT} vues"
      },
      "ja-JP": {
        singular: "視聴回数: {COUNT}",
        plural: "視聴回数: {COUNT}"
      },
      "ko-KR": {
        singular: "{COUNT}회",
        plural: "{COUNT}회"
      },
      "pt-BR": {
        singular: "{COUNT} visualização",
        plural: "{COUNT} visualizações"
      },
      "zh-CN": {
        singular: "{COUNT} 观看",
        plural: "{COUNT} 次观看"
      }
    }
  }) : null, "isArchivedOrNonLive", 0, _v0 => _v0.live && _v0.live?.status === "done" || !_v0.live, "isCI", 0, () => window.location.host.endsWith(".ci.vimeows.com"), "isModifierOrMiddleClick", 0, _v0 => 1 === _v0.button || _v0.ctrlKey || _v0.metaKey || _v0.shiftKey || _v0.altKey, "mapToClipFields", 0, _v0 => _v0.map(_v0 => `clip.${_v0}`), "openClipView", 0, (_v0, _v1, _v2, _v3, _v4) => {
    if (!_v4) return;
    let _v5 = _v4?.split?.("/videos/")?.[1]?.split(":")?.[0] || "",
      _v6 = _v3 && _v9(_v3),
      _v7 = _v6 ? `event=${_v6}&video=${_v5}` : `video=${_v5}`;
    if (!_v7) return;
    let _v8 = `${_v6}${_v2}/playback`;
    _v0.replace({
      pathname: _v8,
      search: _v7
    }), _v1.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }], 0);
}