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
  let _v26 = () => {
    let _v0 = (0, _v25.useSearchParams)().get("fl"),
      _v1 = _v0 && _v0.length > 0 ? _v0 : "wc";
    return `?fl=${_v1}`;
  };
  _v0.s(["useCommunityLoopParams", 0, _v26], 0);
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
    hasSingleRow: _v6 = !1,
    bpData: _v7
  }) => {
    let _v8 = (0, _v22.useViewer)(),
      {
        trackWatchChannelCardClicked: _v9,
        trackWatchVideoThumbnailClicked: _v10,
        trackWatchSectionHeaderClicked: _v11,
        trackWatchSectionFollowClicked: _v12
      } = (0, _v15.useWatchTracking)(),
      _v13 = _v27() && _v0.showCard,
      _v14 = ((0, _v6.useBreakpointValue)({
        base: 3,
        xl: 4,
        "2xl": 5,
        "3xl": 6
      }) || 3) - !!_v13,
      _v15 = (0, _v6.useBreakpointValue)({
        base: 1,
        md: 3,
        lg: 2
      }) || 2;
    _v15 = _v6 ? 1 : _v15;
    let [_v16, _v17] = (0, _v3.useState)(0),
      _v18 = (0, _v28.idFromUri)(_v0.uri),
      _v19 = (0, _v6.useBreakpointValue)({
        base: !0,
        md: !1
      }),
      [_v20, _v21] = (0, _v3.useState)(!1),
      _v22 = (0, _v3.useRef)(null),
      _v23 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      if (!window.IntersectionObserver) return;
      let _v0 = new IntersectionObserver(_v0 => {
        _v0.some(_v0 => _v0.isIntersecting) && !_v20 && (_v21(!0), _v5());
      }, {
        threshold: .01
      });
      return _v0 && _v22.current && _v0.observe(_v22.current), () => {
        _v0.disconnect();
      };
    }, [_v20, _v5]);
    let _v24 = "desktop" === (0, _v21.default)(),
      {
        data: _v25,
        size: _v26,
        setSize: _v27,
        isLoading: _v28
      } = (0, _v12.useGetCurationComponentVideosInfinite)(() => _v20 || _v4 ? {
        where: {
          componentId: _v18
        },
        select: ["name", "link", "pictures.sizes.link", "uri", "stats.plays", "user.link", "user.name", "user.pictures.sizes.link", "duration", "createdTime", "configUrl", "badge.type", ...(_v24 ? ["user.backgroundVideo.aspectRatio", "user.backgroundVideo.clipId", "user.backgroundVideo.configUrl", "user.backgroundVideo.endTime", "user.backgroundVideo.firstFrameUrl", "user.backgroundVideo.startTime", "user.backgroundVideo.yPosition", "user.locationDetails.formattedAddress", "user.membership", "user.skills.name", "user.metadata.connections.followers.total", "user.metadata.interactions.follow", "user.uri", "user.pictures.sizes.width"] : [])],
        query: {
          sizes: _v19 ? "270x152" : "640",
          perPage: _v19 ? 4 : _v14 * _v15
        }
      } : null, {
        initialSize: _v19 ? void 0 : 2,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateAll: !1,
        revalidateFirstPage: !1
      }),
      _v29 = !!(_v25 && void 0 === _v25[_v16]),
      _v30 = !_v25?.[_v25?.length - 1]?.paging?.next;
    (0, _v3.useEffect)(() => {
      _v16 > _v26 - 2 && !_v30 && _v27(_v26 + 1);
    }, [_v16, _v26, _v27, _v30]), (0, _v3.useEffect)(() => {
      !_v28 && !_v23.current && _v20 && _v25 && _v8 && (_v23.current = !0, (0, _v29.trackWidgetViewEvent)({
        viewer: _v8,
        widgetName: _v0.title,
        widgetPlacement: _v3,
        ..._v7
      }));
    }, [_v0.title, _v28, _v8, _v3, _v20, _v25, _v7]);
    let [_v31, _v32] = (0, _v13.usePutMeCurationComponent)(),
      [_v33, _v34] = (0, _v13.useDeleteMeCurationComponent)(),
      [_v35, _v36] = (0, _v11.useGetCurationComponentLazy)(),
      _v37 = _v0.metadata.interactions?.hasOwnProperty("follow"),
      _v38 = _v0.metadata.interactions?.follow,
      [_v39, _v40] = (0, _v3.useState)(_v38?.added),
      [_v41, _v42] = (0, _v3.useState)(!1),
      _v43 = _v0.flairUrl ? _v0.flairUrl : null;
    (0, _v3.useEffect)(() => {
      _v36.data?.metadata.interactions?.follow && _v40(_v36.data.metadata.interactions?.follow?.added);
    }, [_v36.data]);
    let _v44 = _v25?.[0].data[0],
      _v45 = _v26(),
      _v46 = (0, _v6.useBreakpointValue)({
        base: _v0.shortTitle,
        sm: _v0.title
      }) ?? _v0.title;
    return (0, _v1.jsxs)(_v17.Playlist, {
      w: "100%",
      gap: "sm",
      minHeight: "300px",
      children: [(0, _v1.jsx)(_v32, {
        data: _v25?.[_v16 + 1]?.data ?? [],
        rel: "prefetch"
      }), (0, _v1.jsx)(_v18.PlaylistHeader, {
        header: {
          text: _v46,
          to: _v0.link && `${_v0.link}${_v45}`
        },
        onClick: () => {
          _v0.link && _v8 && (0, _v29.trackPlaylistClick)({
            copy: _v0.title,
            source: _v0,
            element: "button",
            location: "header",
            target: _v0.link,
            widgetName: _v0.title,
            widgetPlacement: _v3,
            viewer: _v8,
            ..._v7
          }), _v11({
            watchSection: (0, _v29.toWatchSection)(_v0)
          });
        },
        pt: 0,
        children: (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          grow: {
            base: 0,
            md: +!!_v37
          },
          width: "fit-content",
          children: [_v37 && (0, _v1.jsx)(_v4.Button, {
            size: "xs",
            variant: "secondary",
            style: _v39 ? {
              minWidth: "100px"
            } : void 0,
            leftIcon: _v39 ? _v41 ? (0, _v1.jsx)(_v8.CloseXSmall, {}) : (0, _v1.jsx)(_v7.CheckSmall, {}) : void 0,
            onMouseEnter: () => _v42(!0),
            onMouseLeave: () => _v42(!1),
            onClick: async () => {
              _v8 && (0, _v29.trackFollowClick)({
                copy: _v39 ? "unfollow" : "follow",
                viewer: _v8,
                entityType: _v0.sourceType,
                channelId: "channel" === _v0.sourceType ? _v0.sourceId : void 0,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                ..._v7
              }), _v12({
                watchSection: (0, _v29.toWatchSection)(_v0),
                watchChannelName: _v0.sourceTitle ?? null,
                watchSectionFollowEffect: _v39 ? "unfollow" : "follow"
              }), _v8?.user ? (await (_v39 ? _v33 : _v31)({
                where: {
                  curationComponentId: _v18
                }
              }), await _v35({
                where: {
                  componentId: _v18
                },
                select: ["metadata.interactions.follow.added"]
              }), _v42(!1)) : ((0, _v29.trackTriggerAuthFlow)({
                flow: _v1,
                ..._v7
              }), _v2(!0));
            },
            isLoading: _v32.loading || _v34.loading || _v36.loading,
            isDisabled: _v32.loading || _v34.loading || _v36.loading,
            children: _v39 ? _v41 ? (0, _v14.translate)({
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
          }), !_v19 && (0, _v1.jsx)(_v19.NavigationButtons, {
            disableNextButton: _v30 && _v16 === (_v25?.length ?? 1) - 1,
            disablePrevButton: 0 === _v16,
            onNextClick: () => {
              _v8 && (0, _v29.trackPlaylistNavigation)({
                flow: "forward",
                viewer: _v8,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                ..._v7
              }), _v17(_v16 + 1);
            },
            onPrevClick: () => {
              _v8 && (0, _v29.trackPlaylistNavigation)({
                flow: "backward",
                viewer: _v8,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                ..._v7
              }), _v17(_v16 - 1);
            },
            marginLeft: "auto"
          })]
        })
      }), (0, _v1.jsx)(_v5.Flex, {
        dir: "row",
        ref: _v22,
        gap: "sm",
        children: (0, _v1.jsx)(_v23.ResponsiveWrapper, {
          isLoading: _v28 || _v29 && _v16 > 0,
          numOfRows: _v15,
          numOfColumns: _v14,
          isMobile: _v19,
          coverCard: _v13 ? (0, _v1.jsx)(_v30, {
            name: _v0.shortTitle,
            description: _v0.sourceDescription,
            src: _v0.artUrl,
            href: `${_v0.link}${_v45}`,
            as: "a",
            flairUrl: _v43,
            totalVideos: _v0.metadata?.connections?.videos?.total,
            totalFollowers: _v0.metadata?.connections?.users?.total,
            onClick: () => {
              _v0.link && _v8 && (0, _v29.trackPlaylistClick)({
                copy: _v0.shortTitle,
                element: "card",
                location: "watch_widgets",
                source: _v0,
                target: _v0.link,
                widgetName: _v0.title,
                widgetPlacement: _v3,
                viewer: _v8,
                ..._v7
              }), _v9({
                watchChannelName: _v0.title,
                watchChannelCardAction: "view_channel"
              });
            },
            children: (0, _v1.jsx)(_v31, {
              as: "a",
              href: `${_v44?.link}${_v45}`,
              isDisabled: _v28,
              onClick: _v0 => {
                _v0.stopPropagation(), _v44 && _v8 && (0, _v29.trackPlaylistWatchClick)({
                  target: _v44.link,
                  videoId: (0, _v28.idFromUri)(_v44.uri),
                  viewer: _v8,
                  widgetName: _v0.title,
                  widgetPlacement: _v3,
                  ..._v7
                }), _v9({
                  watchChannelName: _v0.title,
                  watchChannelCardAction: "start_watching"
                });
              }
            })
          }) : null,
          children: _v25?.[_v16]?.data?.map(_v0 => {
            let _v1 = (0, _v14.translate)({
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
              _v2 = _v0?.stats?.plays ? _v1 : "",
              _v3 = _v0.badge?.type && ["staffpick", "staffpick-premiere", "staffpick-best-of-the-year", "staffpick-best-of-the-month"].includes(_v0.badge.type);
            return (0, _v1.jsx)(_v9.VideoCard, {
              hoverActions: (0, _v1.jsx)(_v24.WatchPlaylistHoverActions, {
                video: _v0
              }),
              title: _v0.name,
              href: `${_v0.link}${_v45}`,
              thumbnailSrc: _v0.pictures?.sizes[0].link,
              subtitle: _v2,
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
                showCard: _v24,
                onClick: () => {
                  _v8 && (0, _v29.trackCreatorNameClick)({
                    target: _v0.user.link,
                    viewer: _v8,
                    widgetName: _v0.title,
                    widgetPlacement: _v3,
                    ..._v7
                  });
                }
              },
              shouldUseNextLink: !1,
              onClick: () => {
                _v8 && (0, _v29.trackPlaylistVideoClick)({
                  target: _v0.link,
                  videoId: (0, _v28.idFromUri)(_v0.uri),
                  viewer: _v8,
                  widgetName: _v0.title,
                  widgetPlacement: _v3,
                  ..._v7
                }), _v10({
                  clipId: String((0, _v28.idFromUri)(_v0.uri)),
                  watchSection: (0, _v29.toWatchSection)(_v0)
                });
              },
              titleStyles: {
                maxWidth: {
                  base: "15rem",
                  md: "calc(100% - 2.5rem)"
                },
                minWidth: "9rem"
              },
              hasPlayOnHover: _v24,
              ...(_v3 && {
                topLeftDecoration: (0, _v1.jsx)(_v20.StaffPickBadge, {})
              })
            }, _v0.uri);
          })
        })
      })]
    }, _v0.uri);
  }], 0);
}