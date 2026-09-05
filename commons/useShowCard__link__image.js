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
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => (0, _v6.useBreakpointValue)({
    base: !1,
    xl: !0
  }) ?? !1;
  _v0.s(["useShowCard", 0, _v27], 0);
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = _v16.CoverCard,
    _v31 = _v16.StartWatchingButton;
  function _v32({
    data: _v0,
    rel: _v1
  }) {
    return (0, _v1.jsx)(_v2.default, {
      children: _v0.map(_v0 => {
        let _v1 = _v0.pictures?.sizes[0]?.link;
        return _v1 && (0, _v1.jsx)("link", {
          as: "image",
          rel: _v1,
          href: _v1
        }, _v0?.uri);
      })
    });
  }
  _v0.s(["WatchPlaylist", 0, ({
    curationComponent: _v0,
    authModalType: _v1,
    setShowLoginJoinModal: _v2,
    widgetPlacement: _v3,
    shouldPreload: _v4,
    onIntersection: _v5,
    onVideosLoaded: _v6,
    hasSingleRow: _v7 = !1,
    bpData: _v8
  }) => {
    let _v9 = (0, _v22.useViewer)(),
      {
        trackWatchChannelCardClicked: _v10,
        trackWatchVideoThumbnailClicked: _v11,
        trackWatchSectionHeaderClicked: _v12,
        trackWatchSectionFollowClicked: _v13,
        trackWatchSectionImpression: _v14,
        trackWatchSectionFollowState: _v15,
        trackWatchVideoThumbnailImpression: _v16,
        trackWatchSectionCarouselNavigated: _v17
      } = (0, _v15.useWatchTracking)(),
      _v18 = _v27() && _v0.showCard,
      _v19 = ((0, _v6.useBreakpointValue)({
        base: 3,
        xl: 4,
        "2xl": 5,
        "3xl": 6
      }) || 3) - !!_v18,
      _v20 = (0, _v6.useBreakpointValue)({
        base: 1,
        md: 3,
        lg: 2
      }) || 2;
    _v20 = _v7 ? 1 : _v20;
    let [_v21, _v22] = (0, _v3.useState)(0),
      _v23 = (0, _v28.idFromUri)(_v0.uri),
      _v24 = (0, _v6.useBreakpointValue)({
        base: !0,
        md: !1
      }),
      [_v25, _v26] = (0, _v3.useState)(!1),
      _v27 = (0, _v3.useRef)(null),
      _v28 = (0, _v3.useRef)(!1),
      _v29 = (0, _v3.useRef)(!1),
      _v30 = (0, _v3.useRef)(new Set());
    (0, _v3.useEffect)(() => {
      if (!window.IntersectionObserver) return;
      let _v0 = new IntersectionObserver(_v0 => {
        _v0.some(_v0 => _v0.isIntersecting) && !_v25 && (_v26(!0), _v5());
      }, {
        threshold: .01
      });
      return _v0 && _v27.current && _v0.observe(_v27.current), () => {
        _v0.disconnect();
      };
    }, [_v25, _v5]);
    let _v31 = (0, _v29.toWatchSection)(_v0),
      _v32 = _v23 > 0 ? String(_v23) : null,
      _v33 = "channel" === _v0.sourceType ? _v0.sourceId : null,
      _v34 = _v24 ? 4 : _v19 * _v20,
      _v35 = _v0.metadata.interactions?.hasOwnProperty("follow"),
      _v36 = _v0.metadata.interactions?.follow;
    (0, _v3.useEffect)(() => {
      _v25 && !_v29.current && (_v29.current = !0, _v14({
        watchSection: _v31,
        watchSectionId: _v32,
        watchSectionPosition: _v3 - 1
      }), _v15({
        watchSection: _v31,
        watchSectionId: _v32,
        watchSectionFollowable: _v35,
        watchSectionIsFollowing: !!_v35 && !!_v36?.added
      }));
    }, [_v25, _v14, _v15, _v31, _v32, _v3, _v35, _v36]);
    let _v37 = "desktop" === (0, _v21.default)(),
      {
        data: _v38,
        size: _v39,
        setSize: _v40,
        isLoading: _v41
      } = (0, _v12.useGetCurationComponentVideosInfinite)(() => _v25 || _v4 ? {
        where: {
          componentId: _v23
        },
        select: ["name", "link", "pictures.sizes.link", "uri", "stats.plays", "user.link", "user.name", "user.pictures.sizes.link", "duration", "createdTime", "configUrl", "badge.type", ...(_v37 ? ["user.backgroundVideo.aspectRatio", "user.backgroundVideo.clipId", "user.backgroundVideo.configUrl", "user.backgroundVideo.endTime", "user.backgroundVideo.firstFrameUrl", "user.backgroundVideo.startTime", "user.backgroundVideo.yPosition", "user.locationDetails.formattedAddress", "user.membership", "user.skills.name", "user.metadata.connections.followers.total", "user.metadata.interactions.follow", "user.uri", "user.pictures.sizes.width"] : [])],
        query: {
          sizes: _v24 ? "270x152" : "640",
          perPage: _v24 ? 4 : _v19 * _v20
        }
      } : null, {
        initialSize: _v24 ? void 0 : 2,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateAll: !1,
        revalidateFirstPage: !1
      }),
      _v42 = !!(_v38 && void 0 === _v38[_v21]),
      _v43 = !_v38?.[_v38?.length - 1]?.paging?.next;
    (0, _v3.useEffect)(() => {
      _v21 > _v39 - 2 && !_v43 && _v40(_v39 + 1);
    }, [_v21, _v39, _v40, _v43]), (0, _v3.useEffect)(() => {
      !_v41 && !_v28.current && _v25 && _v38 && _v9 && (_v28.current = !0, (0, _v29.trackWidgetViewEvent)({
        viewer: _v9,
        widgetName: _v0.title,
        widgetPlacement: _v3,
        ..._v8
      }));
    }, [_v0.title, _v41, _v9, _v3, _v25, _v38, _v8]), (0, _v3.useEffect)(() => {
      if (!_v41 && _v38?.[0]?.data?.length) {
        let _v0 = _v38[0].data.map(_v0 => String((0, _v28.idFromUri)(_v0.uri)));
        _v6?.(_v31, _v0);
      }
    }, [_v41, _v38, _v31, _v6]);
    let [_v44, _v45] = (0, _v13.usePutMeCurationComponent)(),
      [_v46, _v47] = (0, _v13.useDeleteMeCurationComponent)(),
      [_v48, _v49] = (0, _v11.useGetCurationComponentLazy)(),
      [_v50, _v51] = (0, _v3.useState)(_v36?.added),
      [_v52, _v53] = (0, _v3.useState)(!1),
      _v54 = _v0.flairUrl ? _v0.flairUrl : null;
    (0, _v3.useEffect)(() => {
      _v49.data?.metadata.interactions?.follow && _v51(_v49.data.metadata.interactions?.follow?.added);
    }, [_v49.data]);
    let _v55 = _v38?.[0].data[0],
      _v56 = (0, _v26.useCommunityLoopParams)(),
      _v57 = (0, _v6.useBreakpointValue)({
        base: _v0.shortTitle,
        sm: _v0.title
      }) ?? _v0.title;
    return (0, _v1.jsxs)(_v17.Playlist, {
      w: "100%",
      gap: "sm",
      minHeight: "300px",
      children: [(0, _v1.jsx)(_v32, {
        data: _v38?.[_v21 + 1]?.data ?? [],
        rel: "prefetch"
      }), (0, _v1.jsx)(_v18.PlaylistHeader, {
        header: {
          text: _v57,
          to: _v0.link && `${_v0.link}${_v56}`
        },
        onClick: () => {
          _v0.link && _v9 && (0, _v29.trackPlaylistClick)({
            copy: _v0.title,
            source: _v0,
            element: "button",
            location: "header",
            target: _v0.link,
            widgetName: _v0.title,
            widgetPlacement: _v3,
            viewer: _v9,
            ..._v8
          }), _v12({
            watchSection: (0, _v29.toWatchSection)(_v0),
            watchSectionId: _v32
          });
        },
        pt: 0,
        children: (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          grow: {
            base: 0,
            md: +!!_v35
          },
          width: "fit-content",
          children: [_v35 && (0, _v1.jsx)(_v4.Button, {
            size: "xs",
            variant: "secondary",
            style: _v50 ? {
              minWidth: "100px"
            } : void 0,
            leftIcon: _v50 ? _v52 ? (0, _v1.jsx)(_v8.CloseXSmall, {}) : (0, _v1.jsx)(_v7.CheckSmall, {}) : void 0,
            onMouseEnter: () => _v53(!0),
            onMouseLeave: () => _v53(!1),
            onClick: async () => {
              _v9 && (0, _v29.trackFollowClick)({
                copy: _v50 ? "unfollow" : "follow",
                viewer: _v9,
                entityType: _v0.sourceType,
                channelId: "channel" === _v0.sourceType ? _v0.sourceId : void 0,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                ..._v8
              }), _v13({
                watchSection: (0, _v29.toWatchSection)(_v0),
                watchSectionId: _v32,
                watchChannelName: _v0.sourceTitle ?? null,
                watchChannelId: _v33,
                watchSectionFollowEffect: _v50 ? "unfollow" : "follow"
              }), _v9?.user ? (await (_v50 ? _v46 : _v44)({
                where: {
                  curationComponentId: _v23
                }
              }), await _v48({
                where: {
                  componentId: _v23
                },
                select: ["metadata.interactions.follow.added"]
              }), _v53(!1)) : ((0, _v29.trackTriggerAuthFlow)({
                flow: _v1,
                ..._v8
              }), _v2(!0));
            },
            isLoading: _v45.loading || _v47.loading || _v49.loading,
            isDisabled: _v45.loading || _v47.loading || _v49.loading,
            children: _v50 ? _v52 ? (0, _v14.translate)({
              singular: "Unfollow",
              dictionary: {
                es: {
                  singular: "Dejar de seguir"
                },
                "de-DE": {
                  singular: "Nicht mehr folgen"
                },
                "fr-FR": {
                  singular: "Ne plus suivre"
                },
                "ja-JP": {
                  singular: "フォロー解除"
                },
                "ko-KR": {
                  singular: "팔로우 취소"
                },
                "pt-BR": {
                  singular: "Parar de seguir"
                },
                "zh-CN": {
                  singular: "取消关注"
                }
              }
            }) : (0, _v14.translate)({
              singular: "Following",
              dictionary: {
                es: {
                  singular: "Siguiendo"
                },
                "de-DE": {
                  singular: "Folgt"
                },
                "fr-FR": {
                  singular: "Abonné"
                },
                "ja-JP": {
                  singular: "フォロー中"
                },
                "ko-KR": {
                  singular: "팔로잉"
                },
                "pt-BR": {
                  singular: "Seguindo"
                },
                "zh-CN": {
                  singular: "关注"
                }
              }
            }) : (0, _v14.translate)({
              singular: "Follow",
              dictionary: {
                es: {
                  singular: "Seguir"
                },
                "de-DE": {
                  singular: "Folgen"
                },
                "fr-FR": {
                  singular: "Suivre"
                },
                "ja-JP": {
                  singular: "フォロー"
                },
                "ko-KR": {
                  singular: "팔로우"
                },
                "pt-BR": {
                  singular: "Seguir"
                },
                "zh-CN": {
                  singular: "关注"
                }
              }
            })
          }), !_v24 && (0, _v1.jsx)(_v19.NavigationButtons, {
            disableNextButton: _v43 && _v21 === (_v38?.length ?? 1) - 1,
            disablePrevButton: 0 === _v21,
            onNextClick: () => {
              _v17({
                watchSection: _v31,
                watchSectionId: _v32,
                watchSectionDirection: "next",
                watchSectionPage: _v21 + 1
              }), _v9 && (0, _v29.trackPlaylistNavigation)({
                flow: "forward",
                viewer: _v9,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                ..._v8
              }), _v22(_v21 + 1);
            },
            onPrevClick: () => {
              _v17({
                watchSection: _v31,
                watchSectionId: _v32,
                watchSectionDirection: "previous",
                watchSectionPage: _v21 - 1
              }), _v9 && (0, _v29.trackPlaylistNavigation)({
                flow: "backward",
                viewer: _v9,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                ..._v8
              }), _v22(_v21 - 1);
            },
            marginLeft: "auto"
          })]
        })
      }), (0, _v1.jsx)(_v5.Flex, {
        dir: "row",
        ref: _v27,
        gap: "sm",
        children: (0, _v1.jsx)(_v23.ResponsiveWrapper, {
          isLoading: _v41 || _v42 && _v21 > 0,
          numOfRows: _v20,
          numOfColumns: _v19,
          isMobile: _v24,
          coverCard: _v18 ? (0, _v1.jsx)(_v30, {
            name: _v0.shortTitle,
            description: _v0.sourceDescription,
            src: _v0.artUrl,
            href: `${_v0.link}${_v56}`,
            as: "a",
            flairUrl: _v54,
            totalVideos: _v0.metadata?.connections?.videos?.total,
            totalFollowers: _v0.metadata?.connections?.users?.total,
            onClick: () => {
              _v0.link && _v9 && (0, _v29.trackPlaylistClick)({
                copy: _v0.shortTitle,
                element: "card",
                location: "watch_widgets",
                source: _v0,
                target: _v0.link,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                viewer: _v9,
                ..._v8
              }), _v10({
                watchChannelName: _v0.title,
                watchChannelId: _v33,
                watchChannelCardAction: "view_channel"
              });
            },
            children: (0, _v1.jsx)(_v31, {
              as: "a",
              href: _v32 ? (0, _v26.appendProvenanceParams)(`${_v55?.link}${_v56}`, _v32, 1) : `${_v55?.link}${_v56}`,
              isDisabled: _v41,
              onClick: _v0 => {
                _v0.stopPropagation(), _v55 && _v9 && (0, _v29.trackPlaylistWatchClick)({
                  target: _v55.link,
                  videoId: (0, _v28.idFromUri)(_v55.uri),
                  viewer: _v9,
                  widgetName: _v0.title,
                  widgetPlacement: _v3,
                  ..._v8
                }), _v10({
                  watchChannelName: _v0.title,
                  watchChannelId: _v33,
                  watchChannelCardAction: "start_watching"
                });
              }
            })
          }) : null,
          children: _v38?.[_v21]?.data?.map((_v0, _v1) => {
            let _v2 = (0, _v14.translate)({
                singular: "{COUNT} view",
                plural: "{COUNT} views",
                count: _v0?.stats?.plays ?? 0,
                replacements: {
                  COUNT: (0, _v14.humanize)(_v0?.stats?.plays ?? 0)
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
              }),
              _v3 = _v0?.stats?.plays ? _v2 : "",
              _v4 = _v0.badge?.type && ["staffpick", "staffpick-premiere", "staffpick-best-of-the-year", "staffpick-best-of-the-month"].includes(_v0.badge.type);
            return (0, _v1.jsx)(_v24.ThumbnailImpressionTracker, {
              onImpression: () => {
                let _v0 = String((0, _v28.idFromUri)(_v0.uri));
                _v30.current.has(_v0) || (_v30.current.add(_v0), _v16({
                  clipId: _v0,
                  watchSection: _v31,
                  watchSectionId: _v32,
                  watchVideoPosition: _v21 * _v34 + _v1 + 1
                }));
              },
              children: (0, _v1.jsx)(_v9.VideoCard, {
                hoverActions: (0, _v1.jsx)(_v25.WatchPlaylistHoverActions, {
                  video: _v0
                }),
                title: _v0.name,
                href: _v32 ? (0, _v26.appendProvenanceParams)(`${_v0.link}${_v56}`, _v32, _v21 * _v34 + _v1 + 1) : `${_v0.link}${_v56}`,
                thumbnailSrc: _v0.pictures?.sizes[0].link,
                subtitle: _v3,
                avatarSrc: _v0.user.pictures?.sizes[0].link || "",
                avatarName: _v0.user.name,
                hasFollow: !0,
                followSource: "Watch",
                tagText: (0, _v10.secondsToDisplay)(_v0.duration),
                tagTextStyles: {
                  opacity: 0,
                  _groupHover: {
                    opacity: 1
                  },
                  _groupFocusWithin: {
                    opacity: 1
                  },
                  transition: "opacity 0.2s ease"
                },
                configUrl: _v0.configUrl ?? "",
                clipId: (0, _v28.idFromUri)(_v0.uri),
                creator: {
                  name: _v0.user.name,
                  link: _v0.user.link,
                  user: _v0.user,
                  showCard: _v37,
                  onClick: () => {
                    _v9 && (0, _v29.trackCreatorNameClick)({
                      target: _v0.user.link,
                      viewer: _v9,
                      widgetName: _v0.title,
                      widgetPlacement: _v3,
                      ..._v8
                    });
                  }
                },
                shouldUseNextLink: !1,
                onClick: () => {
                  _v9 && (0, _v29.trackPlaylistVideoClick)({
                    target: _v0.link,
                    videoId: (0, _v28.idFromUri)(_v0.uri),
                    viewer: _v9,
                    widgetName: _v0.title,
                    widgetPlacement: _v3,
                    ..._v8
                  }), _v11({
                    clipId: String((0, _v28.idFromUri)(_v0.uri)),
                    watchSection: _v31,
                    watchSectionId: _v32,
                    watchVideoPosition: _v21 * _v34 + _v1 + 1
                  });
                },
                titleStyles: {
                  maxWidth: {
                    base: "15rem",
                    md: "calc(100% - 2.5rem)"
                  },
                  minWidth: "9rem"
                },
                hasPlayOnHover: _v37,
                ...(_v4 && {
                  topLeftDecoration: (0, _v1.jsx)(_v20.StaffPickBadge, {})
                })
              })
            }, _v0.uri);
          })
        })
      })]
    }, _v0.uri);
  }], 0);
}