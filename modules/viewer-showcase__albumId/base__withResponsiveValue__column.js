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
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = _v0 => _v0 => {
    let _v1 = (0, _v2.useCallback)(_v0 => _v0.isMobilePreview && _v0 && "object" == typeof _v0 && "base" in _v0 ? _v0.base : _v0, [_v0.isMobilePreview]);
    return (0, _v1.jsx)(_v0, {
      ..._v0,
      getResponsiveValue: _v1
    });
  };
  _v0.s(["withResponsiveValue", 0, _v26], 0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = ({
    gridSize: _v0,
    isMobilePreview: _v1,
    isShowcasePreview: _v2,
    onVideoCardClick: _v3,
    showVideoPlayerCards: _v4
  }) => {
    let {
      effectiveGridSize: _v5,
      gridGap: _v6,
      numColumns: _v7
    } = (({
      gridSize: _v0 = "s",
      isMobilePreview: _v1,
      showVideoPlayerCards: _v2
    }) => {
      let _v3 = _v2 && "s" === _v0 ? "m" : _v0,
        _v4 = (_v2 ? _v28.playerGridSizeMap : _v28.thumbnailGridSizeMap)[_v3],
        _v5 = _v4.base,
        _v6 = (0, _v27.useBreakpointValue)(_v4);
      return {
        effectiveGridSize: _v3,
        gridGap: "lg",
        numColumns: _v1 ? _v5 : _v6
      };
    })({
      gridSize: _v0,
      isMobilePreview: _v1,
      showVideoPlayerCards: _v4
    });
    return {
      direction: "column",
      effectiveGridSize: _v5,
      gridGap: _v6,
      handleVideoCardClick: (0, _v2.useCallback)((_v0, _v1) => {
        (0, _v29.isModifierOrMiddleClick)(_v0) || (_v0.preventDefault(), _v3?.(_v2 ? _v1.uri : _v1.link, _v1.clipId || "", _v1.privacy.view, _v1.user.uri, _v1.live));
      }, [_v2, _v3]),
      numColumns: _v7
    };
  };
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = 16 / 9,
    _v36 = {
      width: "100%",
      height: "100%"
    },
    _v37 = {
      ..._v36,
      position: "absolute",
      inset: "0"
    },
    _v38 = {
      ..._v36,
      objectFit: "cover",
      userSelect: "none",
      backgroundColor: "black"
    },
    _v39 = ({
      clip: _v0,
      clipId: _v1,
      embedPlayerConfigUrl: _v2,
      name: _v3,
      playerEmbedUrl: _v4,
      playOnHover: _v5 = !1,
      thumbnailSrc: _v6,
      thumbnailSrcSet: _v7,
      isScriptLoaded: _v8
    }) => {
      let [_v9, _v10] = (0, _v2.useState)(!1),
        [_v11, _v12] = (0, _v2.useState)(!1),
        [_v13, _v14] = (0, _v2.useState)(!1),
        {
          player: _v15,
          isInitialized: _v16,
          onPlayerInitialized: _v17
        } = (() => {
          let [_v0, _v1] = (0, _v2.useState)(null),
            [_v2, _v3] = (0, _v2.useState)(!1);
          return (0, _v2.useEffect)(() => {
            _v0 && _v0.ready().finally(() => _v3(!0));
          }, [_v0]), (0, _v2.useMemo)(() => ({
            player: _v0,
            onPlayerInitialized: _v1,
            isInitialized: _v2
          }), [_v0, _v2]);
        })(),
        _v18 = (0, _v29.getEventIdFromClip)(_v0),
        _v19 = _v5 && !_v18 && !!_v4,
        _v20 = (0, _v2.useMemo)(() => _v34.EmbedPlayerUtility.createEmbedUrl(_v4, {
          autoplay: 1,
          muted: 1,
          controls: 0,
          autopause: 0,
          quality: "240p",
          loop: 1,
          background: 1,
          force_embed: 1,
          title: 0,
          byline: 0,
          portrait: 0
        }), [_v4]),
        _v21 = (0, _v2.useMemo)(() => _v18 ? _v34.EmbedPlayerUtility.createEmbedUrl((0, _v29.getEventEmbedUrl)(_v0), {
          ..._v28.DEFAULT_SHOWCASE_PLAYER_EMBED_OVERRIDE_QUERY,
          autoplay: 0,
          muted: 1
        }) : "", [_v18, _v0?.link, _v0?.live?.recurringEvent?.streamPrivacy?.view, _v0?.live?.recurringEvent?.streamPrivacy?.unlistedHash]),
        _v22 = _v19 && _v9,
        _v23 = _v19 && _v13,
        _v24 = (0, _v2.useCallback)(() => {
          _v10(!0), _v14(!0), _v15 && (_v12(!1), _v15.setCurrentTime(0).catch(() => void 0).finally(() => {
            _v15.play().catch(() => void 0);
          }));
        }, [_v15]),
        _v25 = (0, _v2.useCallback)(() => {
          _v10(!1), _v15 && (_v12(!1), _v15.pause().catch(() => void 0));
        }, [_v15]),
        _v26 = (0, _v2.useMemo)(() => _v19 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v23 && _v8 && (0, _v1.jsx)(_v5.Box, {
            ..._v37,
            border: "0",
            zIndex: "0",
            opacity: _v16 && _v22 ? 1 : 0,
            children: (0, _v1.jsx)(_v33.EmbedPlayer, {
              title: _v3,
              src: _v20,
              style: {
                pointerEvents: "none"
              },
              onPlayerAPIReady: _v0 => _v17(_v0),
              onTimeupdate: () => _v12(!0)
            }, `${_v18}-embed`)
          }), _v22 && !_v11 && (0, _v1.jsx)(_v9.Flex, {
            ..._v37,
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            zIndex: "2",
            children: (0, _v1.jsx)(_v32.Spinner, {
              size: "md"
            })
          }), (0, _v1.jsx)(_v5.Box, {
            as: "img",
            ..._v38,
            ..._v37,
            src: _v6,
            srcSet: _v7,
            alt: "",
            pointerEvents: "none",
            opacity: _v22 && _v11 ? 0 : 1,
            zIndex: "1"
          })]
        }) : _v18 ? (0, _v1.jsx)(_v33.EmbedPlayer, {
          src: _v21,
          disableAPI: !0
        }, `${_v18}-embed`) : _v2 ? (0, _v1.jsx)(_v33.EmbedPlayer, {
          title: _v3,
          src: _v4,
          configUrl: _v2
        }) : (0, _v1.jsx)(_v33.EmbedPlayer, {
          src: _v4,
          disableAPI: !0
        }, "fallback-embed"), [_v19, _v22, _v23, _v11, _v6, _v7, _v20, _v3, _v4, _v2, _v21, _v18, _v16, _v8, _v17]);
      return _v1 ? (0, _v1.jsx)(_v5.Box, {
        position: "relative",
        minW: "8rem",
        aspectRatio: _v35,
        outline: "0",
        borderRadius: "md",
        overflow: "hidden",
        backgroundColor: "black",
        _focusWithin: {
          '[data-component-id="decoration-wrapper"]': {
            opacity: 1
          }
        },
        "data-group": !0,
        "data-component-id": "video-card-thumbnail",
        onMouseEnter: _v19 ? _v24 : void 0,
        onMouseLeave: _v19 ? _v25 : void 0,
        children: (0, _v1.jsx)(_v31.AspectRatio, {
          ratio: _v35,
          children: _v26
        })
      }) : null;
    },
    _v40 = (0, _v10.rem)(128),
    _v41 = _v26(({
      clips: _v0,
      gridSize: _v1,
      activeClipId: _v2,
      total: _v3,
      showVideoCount: _v4 = !0,
      isAutoplayDefaultChecked: _v5,
      isShowcasePreview: _v6,
      onAutoplayChange: _v7,
      onAutoplayClick: _v8,
      onVideoCardClick: _v9,
      allowDownloads: _v10,
      onDownloadClick: _v11,
      onLockedVideoClick: _v12,
      isMobilePreview: _v13,
      getResponsiveValue: _v14,
      showProfileImage: _v15,
      showProfileName: _v16,
      showVideoTitle: _v17,
      showVideoPlayerCards: _v18
    }) => {
      let {
          settings: _v19
        } = (0, _v18.useOrionSettings)(),
        _v20 = !!_v19.showcase_autoplay_video_preview && !_v18,
        _v21 = window?.playerAssetUrls?.player_api_js ?? null,
        [_v22, _v23] = (0, _v2.useState)(!!window?.Vimeo?.Player),
        {
          direction: _v24,
          effectiveGridSize: _v25,
          gridGap: _v26,
          handleVideoCardClick: _v27,
          numColumns: _v28
        } = _v30({
          gridSize: _v1,
          isMobilePreview: _v13,
          isShowcasePreview: _v6,
          onVideoCardClick: _v9,
          showVideoPlayerCards: _v18
        }),
        _v29 = (0, _v2.useCallback)(() => {
          _v23(!!window?.Vimeo?.Player);
        }, []),
        _v30 = (0, _v2.useMemo)(() => {
          if (!_v20) return [];
          let _v0 = new Set(),
            _v1 = _v0 => {
              _v0 && _v0.add(new URL(_v0, window.location.origin).origin);
            };
          return _v1(_v21), _v0?.forEach(_v0 => _v1(_v0.playerEmbedUrl)), Array.from(_v0);
        }, [_v0, _v21, _v20]);
      return _v0 && 0 !== _v0.length ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v30.length > 0 && (0, _v1.jsx)(_v3.default, {
          children: _v30.map(_v0 => (0, _v1.jsx)("link", {
            rel: "preconnect",
            href: _v0,
            crossOrigin: ""
          }, `preconnect-${_v0}`))
        }), _v21 && (0, _v1.jsx)(_v4.default, {
          src: _v21,
          onReady: _v29,
          onLoad: _v29
        }), (0, _v1.jsxs)(_v20.Playlist, {
          children: [(0, _v1.jsx)(_v21.PlaylistHeader, {
            header: _v4 ? {
              text: (0, _v17.translate)({
                singular: "{total} video",
                plural: "{total} videos",
                count: _v3,
                replacements: {
                  total: _v3
                },
                dictionary: {
                  "de-DE": {
                    singular: "{total} Video",
                    plural: "{total} Videos"
                  },
                  "fr-FR": {
                    singular: "{total} vidéo",
                    plural: "{total} vidéos"
                  },
                  "ja-JP": {
                    singular: "{total} 件の動画",
                    plural: "{total}件の動画"
                  },
                  "ko-KR": {
                    singular: "동영상 {total}개",
                    plural: "동영상 {total}개"
                  },
                  "pt-BR": {
                    singular: "{total} vídeo",
                    plural: "{total} vídeos"
                  },
                  "zh-CN": {
                    singular: "{total} 个视频",
                    plural: "{total} 个视频"
                  }
                }
              }),
              as: _v6 ? void 0 : "h2"
            } : void 0,
            px: _v14({
              base: "md",
              lg: "lg"
            }),
            children: (0, _v1.jsx)(_v19.AutoplayToggle, {
              id: "showcase_autoplay",
              ttl: 7,
              defaultChecked: _v5,
              onCheckedChange: _v7,
              onChange: _v8
            })
          }), (0, _v1.jsx)(_v22.PlaylistGrid, {
            numColumns: _v28,
            px: _v14({
              base: "sm",
              sm: "md",
              lg: "lg"
            }),
            gap: _v26,
            children: _v0.map(_v0 => {
              let {
                  thumbnail: _v1,
                  thumbnail2x: _v2
                } = (0, _v29.getClipThumbnails)(_v0, _v25),
                _v3 = !!_v0.isColdStorage,
                _v4 = !!(0, _v29.getEventIdFromClip)(_v0),
                _v5 = !_v3 && (_v18 || _v20 && !_v4),
                _v6 = _v3 ? (0, _v1.jsxs)(_v5.Box, {
                  position: "relative",
                  minW: _v40,
                  borderRadius: "md",
                  overflow: "hidden",
                  backgroundColor: "black",
                  children: [(0, _v1.jsx)("img", {
                    alt: _v0.name,
                    src: _v1,
                    srcSet: _v2,
                    loading: "lazy",
                    style: {
                      display: "block",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      objectFit: "cover"
                    }
                  }), (0, _v1.jsx)(_v16.ColdStorageThumbnailLockOverlay, {})]
                }) : void 0;
              return (0, _v2.createElement)(_v23.VideoCard, {
                ...(_v5 && {
                  thumbnail: (0, _v1.jsx)(_v39, {
                    clip: _v0,
                    clipId: _v0.clipId || (0, _v29.getClipIdFromUri)(_v0.uri),
                    embedPlayerConfigUrl: _v0.embedPlayerConfigUrl,
                    name: _v0.name,
                    playerEmbedUrl: _v0.playerEmbedUrl,
                    thumbnailSrc: _v20 ? _v1 : void 0,
                    thumbnailSrcSet: _v20 ? _v2 : void 0,
                    playOnHover: _v20,
                    isScriptLoaded: _v22
                  })
                }),
                ...(_v6 && {
                  thumbnail: _v6
                }),
                key: _v0.uri,
                alt: _v0.name,
                ...(_v17 && {
                  name: _v0.name
                }),
                showUserAvatar: _v15,
                showUserName: _v16,
                ...(!_v6 && {
                  src: _v1,
                  srcSet: _v2,
                  loading: "lazy"
                }),
                duration: _v0.duration,
                user: _v0.user,
                role: "link",
                as: "a",
                href: _v0.link,
                "data-href": _v0.link,
                direction: _v24,
                borderRadius: "lg",
                px: "sm",
                py: "sm",
                onClick: _v0 => {
                  if (_v3) {
                    _v0.preventDefault(), _v0.stopPropagation(), _v12?.();
                    return;
                  }
                  _v27(_v0, _v0);
                },
                onKeyUp: _v0 => {
                  if (_v3) {
                    "Enter" === _v0.key && _v12?.();
                    return;
                  }
                  "Enter" === _v0.key && _v9(_v6 ? _v0.uri : _v0.link, _v0.clipId || "", _v0.privacy.view, _v0.user.uri, _v0.live);
                },
                cardDetailsStylingProps: {
                  alignItems: !_v15 || _v16 && _v17 ? "flex-start" : "center"
                },
                ...(["staffpick", "staffpick-premiere", "staffpick-best-of-the-year", "staffpick-best-of-the-month"].includes(_v0?.badge?.type || "") && {
                  topLeftDecoration: (0, _v1.jsx)(_v24.SPIcon, {})
                }),
                ...(_v2 && _v0?.clipId === _v2 && {
                  trackStatus: "playing"
                }),
                ...(_v0?.live?.status === "streaming" && {
                  trackStatus: "live"
                })
              }, _v10 && _v0.privacy.download && (_v0.live && _v0.live?.status === "done" || !_v0.live) ? (0, _v1.jsx)(_v12.Tooltip, {
                label: (0, _v17.translate)({
                  singular: "Download",
                  dictionary: {
                    es: {
                      singular: "Descargar"
                    },
                    "de-DE": {
                      singular: "Herunterladen"
                    },
                    "fr-FR": {
                      singular: "Télécharger "
                    },
                    "ja-JP": {
                      singular: "ダウンロード"
                    },
                    "ko-KR": {
                      singular: "다운로드"
                    },
                    "pt-BR": {
                      singular: "Baixar"
                    },
                    "zh-CN": {
                      singular: "下载"
                    }
                  }
                }),
                children: (0, _v1.jsx)(_v11.IconButton, {
                  "aria-label": "Download button",
                  onClick: _v0 => {
                    _v0.stopPropagation(), _v0.preventDefault(), _v0.clipId && _v11?.(_v0.clipId);
                  },
                  variant: "tertiary",
                  size: "sm",
                  icon: (0, _v1.jsx)(_v15.DownloadImport, {}),
                  opacity: _v14({
                    base: 1,
                    md: 0
                  }),
                  _groupHover: {
                    opacity: 1
                  },
                  _groupFocusWithin: {
                    opacity: 1
                  },
                  children: (0, _v17.translate)({
                    singular: "Download",
                    dictionary: {
                      es: {
                        singular: "Descargar"
                      },
                      "de-DE": {
                        singular: "Herunterladen"
                      },
                      "fr-FR": {
                        singular: "Télécharger "
                      },
                      "ja-JP": {
                        singular: "ダウンロード"
                      },
                      "ko-KR": {
                        singular: "다운로드"
                      },
                      "pt-BR": {
                        singular: "Baixar"
                      },
                      "zh-CN": {
                        singular: "下载"
                      }
                    }
                  })
                })
              }) : null);
            })
          })]
        })]
      }) : null;
    }),
    _v42 = _v26(({
      total: _v0,
      gridSize: _v1,
      isAutoplayDefaultChecked: _v2,
      onAutoplayChange: _v3,
      length: _v4,
      getResponsiveValue: _v5,
      showVideoPlayerCards: _v6,
      ..._v7
    }) => {
      let {
        gridGap: _v8,
        numColumns: _v9
      } = _v30({
        gridSize: _v1,
        showVideoPlayerCards: _v6
      });
      return (0, _v1.jsx)(_v9.Flex, {
        maxW: (0, _v10.rem)(0),
        w: "100%",
        ..._v7,
        children: (0, _v1.jsxs)(_v8.VStack, {
          borderRadius: "md",
          width: "100%",
          align: "flex-start",
          gap: "lg",
          p: _v5({
            base: "md",
            lg: "lg"
          }),
          children: [_v0 ? (0, _v1.jsx)(_v21.PlaylistHeader, {
            width: "100%",
            header: {
              text: (0, _v17.translate)({
                singular: "{total} video",
                plural: "{total} videos",
                count: _v0,
                replacements: {
                  total: _v0
                },
                dictionary: {
                  "de-DE": {
                    singular: "{total} Video",
                    plural: "{total} Videos"
                  },
                  "fr-FR": {
                    singular: "{total} vidéo",
                    plural: "{total} vidéos"
                  },
                  "ja-JP": {
                    singular: "{total} 件の動画",
                    plural: "{total}件の動画"
                  },
                  "ko-KR": {
                    singular: "동영상 {total}개",
                    plural: "동영상 {total}개"
                  },
                  "pt-BR": {
                    singular: "{total} vídeo",
                    plural: "{total} vídeos"
                  },
                  "zh-CN": {
                    singular: "{total} 个视频",
                    plural: "{total} 个视频"
                  }
                }
              })
            },
            children: (0, _v1.jsx)(_v19.AutoplayToggle, {
              id: "showcase_autoplay",
              ttl: 7,
              defaultChecked: _v2,
              onCheckedChange: _v3
            })
          }) : (0, _v1.jsx)(_v25.Skeleton, {
            w: "150px",
            h: "1.875rem"
          }), (0, _v1.jsx)(_v22.PlaylistGrid, {
            numColumns: _v9,
            w: "100%",
            p: "0",
            gap: _v8,
            children: Array.from({
              length: _v4 || 8
            }).map((_v0, _v1) => (0, _v1.jsx)(_v2.Fragment, {
              children: (0, _v1.jsx)(_v25.VideoCardSkeleton, {
                numOfLines: 2
              })
            }, `playlist-loading-skeleton-${_v1}`))
          })]
        })
      });
    }),
    _v43 = _v26(({
      getResponsiveValue: _v0,
      addVideoBtn: _v1
    }) => (0, _v1.jsxs)(_v8.VStack, {
      alignItems: "center",
      justifyContent: "center",
      color: "text-primary",
      py: "lg",
      h: "100%",
      gap: "4",
      children: [(0, _v1.jsx)(_v13.VideosStack, {
        boxSize: _v0({
          base: "sm",
          md: "lg"
        })
      }), (0, _v1.jsx)(_v7.Text, {
        variant: _v0({
          base: "heading-sm",
          md: "heading-md"
        }),
        children: (0, _v17.translate)({
          singular: "This showcase is currently empty",
          dictionary: {
            es: {
              singular: "Esta presentación está vacía ahora"
            },
            "de-DE": {
              singular: "Diese Präsentation ist zurzeit leer"
            },
            "fr-FR": {
              singular: "Cette présentation est actuellement vide"
            },
            "ja-JP": {
              singular: "現在このショーケースは空です"
            },
            "ko-KR": {
              singular: "이 쇼케이스는 현재 비어 있습니다."
            },
            "pt-BR": {
              singular: "Esta vitrine está vazia"
            },
            "zh-CN": {
              singular: "此展示目前为空。"
            }
          }
        })
      }), _v1]
    }));
  _v0.s(["ShowcasePlaylist", 0, _v41, "ShowcasePlaylistEmptyView", 0, _v43, "ShowcasePlaylistErrorView", 0, ({
    onRetry: _v0
  }) => (0, _v1.jsxs)(_v8.VStack, {
    alignItems: "center",
    justifyContent: "center",
    h: {
      base: (0, _v10.rem)(412),
      md: (0, _v10.rem)(538)
    },
    gap: "4",
    children: [(0, _v1.jsx)(_v14.CircleExclamation, {
      boxSize: {
        base: "sm",
        md: "lg"
      }
    }), (0, _v1.jsx)(_v7.Text, {
      variant: {
        base: "heading-sm",
        md: "heading-md"
      },
      children: (0, _v17.translate)({
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
    }), (0, _v1.jsx)(_v6.Button, {
      variant: "primary",
      size: {
        base: "sm",
        md: "md"
      },
      onClick: _v0,
      children: (0, _v17.translate)({
        singular: "Try again",
        dictionary: {
          es: {
            singular: "Intentar de nuevo"
          },
          "de-DE": {
            singular: "Nochmal versuchen"
          },
          "fr-FR": {
            singular: "Veuillez réessayer"
          },
          "ja-JP": {
            singular: "再試行してください"
          },
          "ko-KR": {
            singular: "다시 시도하세요"
          },
          "pt-BR": {
            singular: "Tente de novo"
          },
          "zh-CN": {
            singular: "再试一次"
          }
        }
      })
    })]
  }), "ShowcasePlaylistSkeleton", 0, _v42], 0);
}