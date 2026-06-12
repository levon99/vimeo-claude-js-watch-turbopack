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
    _v45 = _v0.i(0);
  _v0.i(0);
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  (0, _v47.translate)({
    singular: "Video on Vimeo",
    dictionary: {
      es: {
        singular: "Video en Vimeo"
      },
      "de-DE": {
        singular: "Video auf Vimeo"
      },
      "fr-FR": {
        singular: "Vidéo sur Vimeo"
      },
      "ja-JP": {
        singular: "Vimeoの動画"
      },
      "ko-KR": {
        singular: "Vimeo 동영상"
      },
      "pt-BR": {
        singular: "Vídeos no Vimeo"
      },
      "zh-CN": {
        singular: "Vimeo 上的视频"
      }
    }
  });
  let _v48 = _v0 => _v0 ? parseInt(_v0.substring(_v0.lastIndexOf("/") + 1), 10) : 0,
    _v49 = (_v0, _v1) => {
      let _v2 = _v1?.baseUrl || _v0.split("/video/")[0],
        _v3 = _v0.match(/\/video\/(\d+)(\/\w+)?/),
        _v4 = _v3?.[1] ?? "",
        _v5 = `${_v4}${_v3?.[2] ?? ""}`.replace("/", ":"),
        _v6 = _v1?.eventId ? `event=${_v1.eventId}&video=${_v4}` : `video=${_v4}`,
        _v7 = _v4 ? `${_v2}?${_v6}` : _v2;
      return {
        clipId: _v4,
        clipRequestId: _v5,
        link: _v7
      };
    },
    _v50 = (_v0, _v1) => {
      let _v2 = _v0.findIndex(_v1);
      if (-1 === _v2) return {
        selected: void 0,
        prev: void 0,
        next: void 0
      };
      let _v3 = 0 === _v2 ? void 0 : _v0[_v2 - 1],
        _v4 = _v2 === _v0.length - 1 ? void 0 : _v0[_v2 + 1];
      return {
        selected: _v0[_v2],
        prev: _v3,
        next: _v4
      };
    },
    _v51 = (_v0, _v1) => {
      let _v2 = _v1 ? _v50(_v1, _v0 => _v0.clipId === _v0)?.next : void 0;
      return _v2?.eventId ? _v51(_v2.clipId, _v1) : _v2;
    },
    _v52 = () => {
      let {
          clips: _v0
        } = _v55(),
        _v1 = (0, _v5.getSearchParams)(),
        _v2 = _v1.get("video"),
        _v3 = _v1.get("event"),
        {
          selected: _v4,
          prev: _v5,
          next: _v6
        } = _v50(_v0 || [], _v0 => _v0.clipId === _v2);
      return {
        selectedId: _v2,
        selectedClipData: _v4,
        prevClipData: _v5,
        nextClipData: _v6,
        isLiveEvent: !!_v2 && !!_v3,
        isVideoClip: !!_v2 && !_v3
      };
    };
  var _v53 = _v0.i(0);
  let _v54 = {
      forceCollectionUri: !0,
      sizes: ["640x360", "360x203"]
    },
    _v55 = () => {
      let _v0 = (0, _v37.useViewer)(),
        _v1 = _v0?.user?.id ?? null,
        {
          lockedVideoUris: _v2
        } = (0, _v42.useStorageLimitLocking)({
          userId: _v1
        }),
        _v3 = (0, _v44.useBaseUrl)(),
        {
          albumId: _v4,
          password: _v5,
          isShowcaseEmbedded: _v6,
          referrer: _v7
        } = (0, _v16.useAlbumStore)(_v0 => ({
          albumId: _v0.albumId,
          password: _v0.hashedPass,
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          referrer: _v0.referrer
        })),
        _v8 = {
          isEmbed: _v6,
          referrer: _v7
        },
        {
          sortConfig: _v9,
          hideUpcoming: _v10
        } = (0, _v23.useGetShowcase)(),
        _v11 = (0, _v40.useBreakpointValue)({
          base: _v53.ITEMS_PER_PAGE_MOBILE,
          lg: _v53.ITEMS_PER_PAGE
        }, {
          ssr: !1
        }),
        {
          data: _v12,
          size: _v13,
          setSize: _v14,
          isLoading: _v15,
          ..._v16
        } = (0, _v41.useGetAlbumVideosInfinite)(() => _v0 ? {
          where: {
            albumId: _v4
          },
          select: _v53.SELECT_ALBUM_FIELDS,
          query: {
            perPage: _v11,
            ..._v54,
            ..._v45.DEFAULT_SHOWCASE_PLAYER_EMBED_OVERRIDE_QUERY,
            ..._v53.DEFAULT_SHOWCASE_PLAYER_RESPONSIVE_QUERY,
            ..._v8,
            ..._v9,
            ...(_v5 && {
              password: _v5
            }),
            ...(_v10 && {
              filter: "playable"
            })
          },
          headers: {
            Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        {
          isLoadingInitialData: _v17,
          isLoadingMore: _v18,
          isDone: _v19
        } = (0, _v43.getInfiniteRequestLoadingState)({
          data: _v12,
          size: _v13,
          itemsPerPage: _v53.ITEMS_PER_PAGE
        });
      return {
        clips: (0, _v3.useMemo)(() => _v12?.filter(Boolean)?.flatMap(_v0 => _v0.data)?.map(_v0 => {
          let _v1 = (0, _v5.getEventIdFromClip)(_v0);
          return {
            ..._v0,
            isColdStorage: !!(_v0.isColdStorage || _v0.uri && _v2.has(_v0.uri)),
            ..._v49(_v0.link, {
              baseUrl: _v3,
              eventId: _v1
            }),
            ...(_v1 && {
              eventId: _v1
            })
          };
        }), [_v12, _v3, _v2]),
        total: _v12?.[0]?.total ?? 0,
        loadMoreClips: () => {
          _v14(_v13 + 1);
        },
        isLoadingMoreClips: _v18,
        canLoadMoreClips: !_v19 && !_v15,
        isLoading: _v15 || _v17,
        isShowcaseEmpty: 1 === _v13 && _v12?.[0]?.data?.length === 0,
        ..._v16
      };
    },
    _v56 = () => {
      let [_v0, _v1] = (0, _v3.useState)(0),
        _v2 = (0, _v37.useViewer)(),
        _v3 = _v2?.user?.id ?? null,
        {
          lockedVideoUris: _v4
        } = (0, _v42.useStorageLimitLocking)({
          userId: _v3
        });
      (() => {
        let {
            selectedId: _v0
          } = _v52(),
          _v1 = (0, _v40.useBreakpointValue)({
            base: _v53.ITEMS_PER_PAGE_MOBILE,
            lg: _v53.ITEMS_PER_PAGE
          }, {
            ssr: !1
          }),
          {
            albumId: _v2,
            password: _v3,
            isShowcaseEmbedded: _v4,
            clipPlaylistPage: _v5,
            setClipPlaylistPage: _v6,
            referrer: _v7
          } = (0, _v16.useAlbumStore)(_v0 => ({
            albumId: _v0.albumId,
            password: _v0.hashedPass,
            isShowcaseEmbedded: _v0.isShowcaseEmbedded,
            clipPlaylistPage: _v0.clipPlaylistPage,
            setClipPlaylistPage: _v0.setClipPlaylistPage,
            referrer: _v0.referrer
          })),
          _v8 = {
            isEmbed: _v4,
            referrer: _v7
          },
          {
            sortConfig: _v9
          } = (0, _v23.useGetShowcase)(),
          {
            data: _v10,
            error: _v11,
            ..._v12
          } = (0, _v41.useGetAlbumVideos)(() => !_v0 || _v5 ? null : {
            where: {
              albumId: _v2
            },
            select: ["uri"],
            query: {
              perPage: _v1,
              containingUri: `/videos/${_v0}`,
              forceCollectionUri: !0,
              ..._v8,
              ..._v9,
              ...(_v3 && {
                password: _v3
              })
            },
            headers: {
              Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
            }
          }, {
            revalidateOnFocus: !1,
            onSuccess: _v0 => {
              _v6(_v0.page);
            }
          });
      })();
      let _v5 = (0, _v44.useBaseUrl)(),
        {
          albumId: _v6,
          password: _v7,
          isShowcaseEmbedded: _v8,
          clipPlaylistPage: _v9,
          setClipPlaylistPage: _v10,
          referrer: _v11
        } = (0, _v16.useAlbumStore)(_v0 => ({
          albumId: _v0.albumId,
          password: _v0.hashedPass,
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          clipPlaylistPage: _v0.clipPlaylistPage,
          setClipPlaylistPage: _v0.setClipPlaylistPage,
          referrer: _v0.referrer
        })),
        _v12 = {
          isEmbed: _v8,
          referrer: _v11
        },
        {
          sortConfig: _v13,
          hideUpcoming: _v14
        } = (0, _v23.useGetShowcase)(),
        _v15 = (0, _v40.useBreakpointValue)({
          base: _v53.ITEMS_PER_PAGE_MOBILE,
          lg: _v53.ITEMS_PER_PAGE
        }, {
          ssr: !1
        }),
        {
          data: _v16,
          isLoading: _v17,
          ..._v18
        } = (0, _v41.useGetAlbumVideos)(() => _v2 && _v9 ? {
          where: {
            albumId: _v6
          },
          select: _v53.SELECT_ALBUM_FIELDS,
          query: {
            perPage: _v15,
            page: _v9,
            ..._v54,
            ..._v45.DEFAULT_SHOWCASE_PLAYER_EMBED_OVERRIDE_QUERY,
            ..._v53.DEFAULT_SHOWCASE_PLAYER_RESPONSIVE_QUERY,
            ..._v12,
            ..._v13,
            ...(_v7 && {
              password: _v7
            }),
            ...(_v14 && {
              filter: "playable"
            })
          },
          headers: {
            Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        _v19 = _v16?.data?.map(_v0 => {
          let _v1 = (0, _v5.getEventIdFromClip)(_v0);
          return {
            ..._v0,
            isColdStorage: !!(_v0.isColdStorage || _v0.uri && _v4.has(_v0.uri)),
            ..._v49(_v0.link, {
              baseUrl: _v5,
              eventId: _v1
            }),
            ...(_v1 && {
              eventId: _v1
            })
          };
        });
      return (0, _v3.useEffect)(() => {
        _v16?.total && _v1(_v16?.total);
      }, [_v16?.total]), {
        clips: _v19,
        total: _v0,
        page: _v9,
        perPage: _v16?.perPage,
        setPage: _v10,
        isLoading: _v17,
        ..._v18
      };
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = {
      forceCollectionUri: !0
    },
    _v60 = ["createdTime", "privacy", "status", "type", "page.comments", "descriptionHtml", "contentRating", "language", "link", "live", "name", "playerEmbedUrl", "embedPlayerConfigUrl", "user.link", "user.name", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.uri", "user.backgroundVideo.aspectRatio", "user.backgroundVideo.clipId", "user.backgroundVideo.configUrl", "user.backgroundVideo.endTime", "user.backgroundVideo.firstFrameUrl", "user.backgroundVideo.startTime", "user.backgroundVideo.yPosition", "user.isStaffPicked", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.locationDetails.formattedAddress", "user.skills.name", "user.metadata.connections.followers.total", "categories.name", "categories.link", "embed.badges.dolbyVision", "embed.badges.hdr_10", "embed.badges.hdr_10Plus", "metadata.aiContent", "metadata.interactions.interact", "metadata.connections.comments", "page", "metadata.interactions.like", "metadata.interactions.askAiViewer", "stats.plays"],
    _v61 = _v0 => {
      let _v1 = (0, _v37.useViewer)(),
        _v2 = (0, _v57.useRouter)(),
        _v3 = (0, _v44.useBaseUrl)(),
        {
          albumId: _v4,
          albumSignature: _v5,
          password: _v6,
          isShowcaseEmbedded: _v7,
          referrer: _v8,
          continuousPlay: _v9
        } = (0, _v16.useAlbumStore)(_v0 => ({
          albumId: _v0.albumId,
          albumSignature: _v0.albumSignature,
          password: _v0.hashedPass,
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          referrer: _v0.referrer,
          continuousPlay: _v0.continuousPlay
        })),
        _v10 = {
          isEmbed: _v7,
          referrer: _v8
        },
        {
          playerAccentColor: _v11,
          hideUpcoming: _v12
        } = (0, _v23.useGetShowcase)(),
        _v13 = {
          colors: ["000000e6", _v11 || "00adef", "ffffff", "000000"]
        },
        _v14 = "1" === _v2.query.autoplay ? {
          autoplay: 1
        } : {},
        {
          data: _v15,
          ..._v16
        } = (0, _v58.useGetAlbumVideo)(() => _v1 && _v0 && null !== _v5 ? {
          where: {
            albumId: _v4,
            videoId: Number(_v0)
          },
          select: _v60,
          query: {
            ..._v59,
            ..._v45.DEFAULT_SHOWCASE_PLAYER_EMBED_OVERRIDE_QUERY,
            ..._v10,
            ..._v13,
            ..._v14,
            ...(_v6 && {
              password: _v6
            }),
            ...(_v5 && {
              albumSignature: _v5,
              albumUri: `albums/${_v4}`
            }),
            ...(_v12 && {
              filter: "playable"
            }),
            ...(_v9 && {
              outro: "nothing"
            })
          },
          headers: {
            Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
          }
        } : null, {
          revalidateOnFocus: !1,
          onError: _v0 => {
            404 === _v0.status && _v2.push(_v3 || `/showcase/${_v4}`);
          }
        }),
        _v17 = (0, _v3.useRef)(void 0);
      (0, _v3.useEffect)(() => {
        _v15 && (_v17.current = _v15);
      }, [_v15]);
      let _v18 = _v15 && (0, _v5.getEventIdFromClip)(_v15) || _v17.current && (0, _v5.getEventIdFromClip)(_v17.current),
        _v19 = _v15 || _v17.current;
      return {
        clip: _v19 ? {
          ..._v19,
          ..._v49(_v19.link, {
            baseUrl: _v3,
            eventId: _v18
          }),
          ...(_v18 && {
            eventId: _v18
          }),
          ...(0, _v5.clipBadgeParser)(_v19)
        } : null,
        ..._v16
      };
    };
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = (0, _v63.default)(async () => {
      let {
        LoginJoinModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v67 = {
      type: "login",
      isShowing: !1,
      xsrft: "",
      onDismiss: () => console.warn("Without dismiss function, LoginJoinModal isShowing props might be out of sync"),
      onSuccess: () => console.warn("LoginJoinModal: onSuccess callback is not initialized")
    },
    _v68 = (0, _v3.createContext)({
      modalState: _v67,
      setModalState: () => {
        throw Error("Setter function is not initialized");
      },
      toggleLoginModal: () => {
        throw Error("Toggle function is not initialized");
      }
    }),
    _v69 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(_v67),
        _v3 = (0, _v3.useCallback)(_v0 => _v2(_v0 => ({
          ..._v0,
          ..._v0
        })), []),
        _v4 = (0, _v3.useCallback)((_v0, _v1) => {
          _v3({
            isShowing: _v0,
            type: _v1 || "login"
          });
        }, [_v3]);
      return (0, _v1.jsx)(_v68.Provider, {
        value: {
          modalState: _v1,
          setModalState: _v3,
          toggleLoginModal: _v4
        },
        children: _v0
      });
    },
    _v70 = () => {
      let {
        modalState: _v0
      } = (0, _v3.useContext)(_v68);
      return (0, _v1.jsx)(_v64.ThemeProvider, {
        theme: _v65.themes.light,
        children: (0, _v1.jsx)(_v66, {
          ..._v0
        })
      });
    };
  function _v71() {
    let _v0 = (0, _v37.useViewer)(),
      {
        modalState: _v1,
        setModalState: _v2,
        toggleLoginModal: _v3
      } = (0, _v3.useContext)(_v68),
      _v4 = _v1.redirectUrl;
    return (0, _v3.useEffect)(() => {
      _v0 && _v2({
        xsrft: _v0.xsrft,
        onDismiss: () => _v3(!1),
        onSuccess: () => {
          _v4 ? window.location.assign(_v4) : window.location.reload();
        }
      });
    }, [_v0, _v2, _v3, _v4]), {
      toggleLoginModal: _v3,
      setRedirectUrl: _v0 => _v2({
        redirectUrl: _v0
      })
    };
  }
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = {
      forceCollectionUri: !0,
      sizes: ["640x360", "360x203"]
    },
    _v75 = _v0 => {
      let _v1,
        {
          albumId: _v2,
          password: _v3,
          isShowcaseEmbedded: _v4,
          referrer: _v5
        } = (0, _v16.useAlbumStore)(_v0 => ({
          albumId: _v0.albumId,
          password: _v0.hashedPass,
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          referrer: _v0.referrer
        })),
        _v6 = (0, _v37.useViewer)(),
        _v7 = {
          isEmbed: _v4,
          referrer: _v5
        },
        {
          sortConfig: _v8,
          hideUpcoming: _v9
        } = (0, _v23.useGetShowcase)(),
        _v10 = (0, _v44.useBaseUrl)(),
        {
          data: _v11,
          ..._v12
        } = (0, _v41.useGetAlbumVideos)(() => _v6 && _v0 ? {
          where: {
            albumId: _v2
          },
          select: _v53.SELECT_ALBUM_FIELDS,
          query: {
            perPage: 2,
            ..._v74,
            ..._v7,
            ..._v8,
            ...(_v3 && {
              password: _v3
            }),
            ...(_v9 && {
              filter: "playable"
            })
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.12"
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        _v13 = _v11?.data?.[0];
      _v13?.live?.status && (_v1 = (0, _v5.getEventIdFromClip)(_v13));
      let {
        link: _v14 = ""
      } = _v13?.link ? _v49(_v13.link, {
        baseUrl: _v10,
        eventId: _v1
      }) : {};
      return {
        firstClip: _v11?.data?.[0],
        firstClipLink: _v14,
        ..._v12
      };
    },
    _v76 = {
      page: 1,
      perPage: 1,
      getFeatured: !0,
      forceCollectionUri: !0,
      sizes: ["1280x720"]
    },
    _v77 = () => {
      let _v0,
        {
          albumId: _v1,
          password: _v2,
          isShowcaseEmbedded: _v3,
          referrer: _v4
        } = (0, _v16.useAlbumStore)(_v0 => ({
          albumId: _v0.albumId,
          password: _v0.hashedPass,
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          referrer: _v0.referrer
        })),
        {
          layout: _v5,
          hideUpcoming: _v6,
          hasFeaturedContent: _v7
        } = (0, _v23.useGetShowcase)(),
        _v8 = (0, _v37.useViewer)(),
        _v9 = (0, _v44.useBaseUrl)(),
        _v10 = {
          isEmbed: _v3,
          referrer: _v4
        },
        _v11 = "live" === _v5 || "featured" === _v5,
        {
          data: _v12,
          isLoading: _v13,
          ..._v14
        } = (0, _v41.useGetAlbumVideos)(() => _v8 && _v7 && _v11 ? {
          where: {
            albumId: _v1
          },
          select: ["badge.type", "description", "descriptionHtml", "link", "live", "name", "pictures.sizes.link", "pictures.sizes.width", "pictures.uri", "privacy.download", "privacy.view", "uri"],
          query: {
            ..._v76,
            ..._v10,
            ...(_v2 && {
              password: _v2
            }),
            ...(_v6 && {
              filter: "playable"
            })
          },
          headers: {
            Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        {
          firstClip: _v15,
          isLoading: _v16
        } = _v75(_v11 && !_v13 && !_v12?.data?.[0]),
        _v17 = _v12?.data?.[0] ?? _v15;
      return _v17?.live?.status && (_v0 = (0, _v5.getEventIdFromClip)(_v17)), {
        featuredVideo: _v17 ? {
          ..._v17,
          thumbnailUrl: _v17?.pictures?.sizes?.[_v17?.pictures?.sizes.length - 1]?.link,
          ...(_v17?.link && _v49(_v17.link, {
            baseUrl: _v9,
            eventId: _v0
          })),
          ...(_v0 && {
            eventId: _v0
          }),
          isLiveClip: !!_v17?.live
        } : null,
        ..._v14,
        isFeaturedOrFirstVideoLoading: _v13 || _v16
      };
    },
    _v78 = ({
      isShowcaseEmpty: _v0,
      showVideoDetails: _v1
    }) => {
      let {
          title: _v2,
          thumbnailUrl: _v3,
          description: _v4,
          layout: _v5,
          isLoading: _v6
        } = (0, _v23.useGetShowcase)(),
        {
          featuredVideo: _v7,
          isFeaturedOrFirstVideoLoading: _v8
        } = _v77(),
        _v9 = {
          topTitle: "",
          mainTitle: _v2,
          description: _v4 || "",
          thumbnailUrl: "default" === _v5 ? _v3 : "",
          isLive: !1,
          showLinksInDescription: !0
        };
      if (_v6 || _v8) return null;
      if (_v0 || !_v7) return _v9;
      let _v10 = {
          topTitle: _v2,
          mainTitle: _v7.name,
          description: _v7.description || "",
          showLinksInDescription: !1
        },
        _v11 = {
          ...(_v1 ? _v10 : {
            topTitle: "",
            mainTitle: _v2,
            description: _v4 || "",
            showLinksInDescription: !0
          }),
          thumbnailUrl: _v7.thumbnailUrl
        };
      switch (_v5) {
        case "featured":
          return {
            ..._v11,
            isLive: !1
          };
        case "live":
          return {
            ..._v11,
            isLive: _v7.isLiveClip
          };
        default:
          return _v9;
      }
    },
    _v79 = ["unavailable", "pending", "ready"],
    _v80 = ["streaming", ..._v79],
    _v81 = ({
      isShowcaseEmpty: _v0,
      showVideoDetails: _v1,
      bannerHeight: _v2 = "50vh"
    }) => {
      let _v3 = (0, _v57.useRouter)(),
        {
          trackShowcaseStartWatchingClicked: _v4
        } = (0, _v36.useShowcaseTracking)(),
        {
          featuredVideo: _v5
        } = _v77(),
        {
          thumbnailUrl: _v6,
          showBannerDescription: _v7,
          showBannerTitle: _v8,
          showBannerHeader: _v9,
          showStartWatchingButton: _v10,
          textCtaAlignment: _v11
        } = (0, _v23.useGetShowcase)(),
        _v12 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
        _v13 = _v78({
          isShowcaseEmpty: _v0,
          showVideoDetails: _v1
        }),
        {
          startTime: _v14,
          archivedTime: _v15,
          isStreaming: _v16,
          isUpcoming: _v17
        } = (_v0 => {
          let _v1 = (0, _v37.useViewer)(),
            {
              albumId: _v2,
              password: _v3
            } = (0, _v16.useAlbumStore)(_v0 => ({
              albumId: _v0.albumId,
              password: _v0.hashedPass
            })),
            {
              data: _v4
            } = (0, _v58.useGetAlbumVideo)(() => _v0 && _v1 ? {
              where: {
                albumId: _v2,
                videoId: _v0
              },
              select: ["live.archivedTime", "live.scheduledStartTime", "live.status"],
              query: {
                ...(_v3 && {
                  password: _v3
                })
              },
              headers: {
                Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
              }
            } : null, {
              refreshInterval: _v0 => {
                var _v1;
                return _v80.some(_v0 => _v0 === _v0?.live?.status) ? (_v1 = _v0?.live?.scheduledStartTime) ? ((_v0 = "") => {
                  let _v1 = navigator.language || "en-US";
                  return _v46.DateTime.fromISO(_v0, {
                    locale: _v1
                  });
                })(_v1).diffNow("hours").hours > 12 ? 0 : 0 : 0 : 0;
              },
              refreshWhenHidden: !1,
              revalidateOnFocus: !1
            }),
            _v5 = _v4?.live,
            _v6 = _v5?.status,
            _v7 = _v5?.scheduledStartTime,
            _v8 = _v5?.archivedTime;
          return {
            isArchived: "done" === _v6 && _v5?.archivedTime,
            isStreaming: "streaming" === _v6,
            isUpcoming: _v79.some(_v0 => _v6 === _v0),
            startTime: _v7,
            archivedTime: _v8
          };
        })(_v5?.clipId),
        {
          firstClipLink: _v18
        } = _v75(!_v5);
      if (!_v13) {
        let _v0 = _v0 && !_v6 ? {
          base: "220px",
          sm: "294px"
        } : {
          base: "352px",
          sm: "480px"
        };
        return (0, _v1.jsx)(_v28.Center, {
          minH: _v0,
          height: _v0 && !_v6 ? _v0 : _v2,
          children: (0, _v1.jsx)(_v72.Spinner, {
            size: "md",
            color: "text-primary"
          })
        });
      }
      return (0, _v1.jsx)(_v73.ShowcaseBanner, {
        onWatchClick: () => {
          let _v0 = _v5?.link || _v18;
          _v0 && (_v4({
            showcaseId: _v12.toString()
          }), _v3.push(_v0));
        },
        mainTitle: _v8 ? _v13.mainTitle : "",
        topTitle: _v13.topTitle,
        description: _v7 ? _v13.description : "",
        thumbnailUrl: _v13.thumbnailUrl,
        isLive: _v13.isLive,
        startTime: _v14,
        archivedTime: _v15,
        isStreaming: _v16,
        isUpcoming: _v17,
        isShowcaseEmpty: _v0,
        showVideoDetails: _v1,
        bannerHeight: _v2,
        showLinksInDescription: _v13.showLinksInDescription,
        showBannerDescription: _v7,
        showBannerTitle: _v8,
        showBannerHeader: _v9,
        showcaseId: _v12,
        showStartWatchingButton: _v10,
        textCtaAlignment: _v11
      });
    };
  var _v82 = _v0.i(0);
  let _v83 = ({
    isInteractionToolsEnabled: _v0
  }) => {
    let {
      actionBarDisplayConfig: _v1,
      actionBarHandlers: _v2,
      shouldShowActionBar: _v3
    } = (({
      isInteractionToolsEnabled: _v0
    }) => {
      let {
          activeSideModule: _v1,
          onActiveDrawerModuleChange: _v2
        } = (0, _v20.useLayout)(),
        _v3 = (0, _v3.useCallback)(_v0 => {
          _v2(_v1 === _v0 ? "" : _v0);
        }, [_v1, _v2]),
        _v4 = (0, _v3.useCallback)(() => {
          _v3("LIVE_TOOLS");
        }, [_v3]),
        _v5 = {
          showLiveTools: _v0
        },
        _v6 = Object.values(_v5).some(_v0 => !!_v0);
      return {
        actionBarDisplayConfig: _v5,
        actionBarHandlers: {
          onJoinConversationClick: _v4
        },
        shouldShowActionBar: _v6
      };
    })({
      isInteractionToolsEnabled: _v0
    });
    return _v3 ? (0, _v1.jsx)(_v82.EventActionBar, {
      ..._v2,
      ..._v1
    }) : null;
  };
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = ({
    onClose: _v0,
    isDownloadModalOpen: _v1,
    clipId: _v2
  }) => {
    let {
      videoFiles: _v3,
      isLoading: _v4
    } = function (_v0) {
      let {
          albumId: _v1,
          albumSignature: _v2,
          password: _v3,
          isShowcaseEmbedded: _v4,
          referer: _v5
        } = (0, _v16.useAlbumStore)(_v0 => ({
          albumId: _v0.albumId,
          albumSignature: _v0.albumSignature,
          password: _v0.hashedPass,
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          referer: _v0.referrer
        })),
        _v6 = (0, _v37.useViewer)(),
        {
          data: _v7,
          isLoading: _v8
        } = (0, _v58.useGetAlbumVideo)(() => _v6 && _v0 && null !== _v2 ? {
          where: {
            albumId: _v1,
            videoId: Number(_v0)
          },
          select: ["download.height", "download.link", "download.publicName", "download.quality", "download.sizeShort", "download.type", "download.width", "download.videoFileId", "download.size"],
          query: {
            isEmbed: _v4,
            referrer: _v5,
            ...(_v3 && {
              password: _v3
            }),
            ...(_v2 && {
              albumSignature: _v2,
              albumUri: `albums/${_v1}`
            })
          }
        } : null, {
          revalidateOnFocus: !1
        });
      return {
        videoFiles: (_v7?.download ?? []).sort((_v0, _v1) => "source" === _v0.quality ? 0 : _v1.height - _v0.height),
        isLoading: _v8
      };
    }(_v2 ?? null);
    return (0, _v1.jsx)(_v87.DownloadList, {
      showAsModal: !0,
      isOpen: _v1,
      isLoadingVideoFiles: _v4,
      videoFiles: _v3,
      texttracks: [],
      onClose: _v0,
      videoId: _v2 ?? void 0
    });
  };
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0);
  let _v100 = _v0 => {
      let _v1 = _v102(),
        _v2 = _v101(),
        _v3 = (0, _v93.buildTeamBpContextFromTeamUser)(_v0?.teamUser);
      return {
        ..._v1,
        ..._v2,
        ..._v3
      };
    },
    _v101 = _v0 => (0, _v98.buildWebBpContext)({
      page_name: "showcase_gallery",
      referrer_page_name: null,
      path: window.location.pathname,
      ...(!!document.referrer && {
        referrer: document.referrer
      }),
      ..._v0
    }),
    _v102 = () => (0, _v90.buildActionBpContext)({
      action_type: "click",
      feature: null
    }),
    _v103 = () => (0, _v94.buildThirdPartyIntegrationBpContext)({
      is_integration: !1,
      integration_id: null,
      integration_name: null,
      managed_user_id: null,
      app_id: null,
      integration_type: null,
      partner_bucket: null,
      is_partner: null
    }),
    _v104 = _v0 => (0, _v96.buildVideoViewBpContext)({
      viewer_home_session_id: _v0
    }),
    _v105 = _v0 => (0, _v92.buildProductAnalyticsBpContext)({
      product: "showcase",
      feature: "watch",
      flow: "view_showcase",
      location: "not_applicable_pageview",
      device_type: (0, _v89.default)(),
      ..._v0
    }),
    _v106 = (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = _v48(_v0).toString(),
        _v6 = _v48(_v3),
        _v7 = _v102(),
        _v8 = (0, _v95.buildVideoBpContext)({
          video_id: parseFloat(_v1),
          video_owner_id: _v6,
          video_privacy: _v2
        }),
        _v9 = _v101(),
        _v10 = (0, _v93.buildTeamBpContextFromTeamUser)(_v4?.teamUser),
        _v11 = _v105({
          element: "thumbnail"
        }),
        _v12 = _v103(),
        _v13 = {
          ..._v7,
          ..._v8,
          ..._v9,
          ..._v10,
          ..._v11,
          ..._v12
        };
      (0, _v99.sendBpEventWithContexts)("vimeo.select_showcase_video", _v13, 3, {
        showcase_owner_id: _v5
      });
    },
    _v107 = (_v0, _v1, _v2, _v3) => {
      let _v4 = (0, _v93.buildTeamBpContextFromTeamUser)(_v2?.teamUser),
        _v5 = (0, _v90.buildActionBpContext)({
          action_type: "click",
          feature: null
        }),
        _v6 = (0, _v95.buildVideoBpContext)({
          video_id: parseFloat(_v0) ?? "",
          video_privacy: _v3
        }),
        _v7 = (0, _v92.buildProductAnalyticsBpContext)({
          product: "showcase",
          feature: "playlist",
          location: "bottom_panel",
          modal_name: "playlist_modal",
          element: "toggle",
          copy: "autoplay",
          device_type: (0, _v89.default)(),
          flow: null
        }),
        _v8 = (0, _v98.buildWebBpContext)({
          page_name: "showcase_recipient",
          path: window.location.pathname,
          target: null,
          target_path: null,
          ...(!!document.referrer && {
            referrer: document.referrer
          })
        }),
        _v9 = {
          ..._v4,
          ..._v5,
          ..._v6,
          ..._v7,
          ..._v8
        };
      _v1 ? (0, _v99.sendBpEventWithContexts)("vimeo.select_turn_on_autoplay", _v9, 2, {
        profile_element_type: ""
      }) : (0, _v99.sendBpEventWithContexts)("vimeo.select_turn_off_autoplay", _v9, 2, {
        profile_element_type: ""
      });
    },
    _v108 = ({
      playerContainerRef: _v0,
      bannerHeight: _v1
    }) => {
      let _v2 = (0, _v57.useRouter)(),
        {
          clips: _v3,
          total: _v4,
          isLoading: _v5,
          error: _v6,
          mutate: _v7,
          loadMoreClips: _v8,
          canLoadMoreClips: _v9,
          isLoadingMoreClips: _v10
        } = _v55(),
        {
          allowContinuousPlay: _v11,
          allowDownloads: _v12,
          gridSize: _v13,
          showGridProfileImage: _v14,
          showGridProfileName: _v15,
          showGridVideoTitle: _v16,
          showGridVideoCard: _v17,
          showVideoCount: _v18,
          user: _v19
        } = (0, _v23.useGetShowcase)(),
        {
          selectedId: _v20,
          selectedClipData: _v21
        } = _v52(),
        {
          setContinuousPlay: _v22,
          isShowcaseEmbedded: _v23
        } = (0, _v16.useAlbumStore)(_v0 => ({
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          setContinuousPlay: _v0.setContinuousPlay
        })),
        [_v24, _v25] = (0, _v3.useState)(null),
        _v26 = (0, _v37.useViewer)(),
        {
          trackShowcaseVideoClicked: _v27
        } = (0, _v36.useShowcaseTracking)(),
        _v28 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
        _v29 = (0, _v84.useStorageLimitLockedVideoPaywall)();
      return _v5 || !_v3 ? (0, _v1.jsx)(_v86.ShowcasePlaylistSkeleton, {
        gridSize: _v13,
        showVideoPlayerCards: _v17
      }) : _v6 ? (0, _v1.jsx)(_v86.ShowcasePlaylistErrorView, {
        onRetry: () => _v7()
      }) : 0 === _v3.length ? (0, _v1.jsx)(_v86.ShowcasePlaylistEmptyView, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v86.ShowcasePlaylist, {
          showVideoCount: _v18,
          clips: _v3,
          activeClipId: _v20,
          gridSize: _v13,
          total: _v4,
          isAutoplayDefaultChecked: _v11,
          onVideoCardClick: (_v0, _v1, _v2, _v3) => {
            _v106(_v19?.uri || "", _v1, _v2, _v3, _v26);
            let _v4 = _v3 ? _v3.findIndex(_v0 => _v0.clipId === _v1) + 1 : 0;
            _v4 > 0 && _v27({
              showcaseId: _v28.toString(),
              clipId: _v1,
              showcaseVideoPosition: _v4,
              showcasePageNumber: 1
            }), _v2.push(_v0), _v0.current && _v23 && _v1 && _v0.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          },
          onAutoplayChange: _v0 => {
            _v22(_v0);
          },
          onAutoplayClick: _v0 => {
            let _v1 = _v0.target.checked;
            _v22(_v1), _v107(_v20 ?? "", _v1, _v26, _v21?.privacy?.view || "");
          },
          onLockedVideoClick: () => _v29({
            location: "showcase_viewer_video_card",
            paywallTrigger: "showcase_viewer_locked_video"
          }),
          allowDownloads: _v12,
          onDownloadClick: _v0 => {
            _v25(_v0);
          },
          showVideoPlayerCards: _v17,
          showProfileImage: _v14,
          showProfileName: _v15,
          showVideoTitle: _v16
        }), _v9 && (0, _v1.jsx)(_v85.LoadMoreClips, {
          isLoadingMoreClips: _v10,
          loadMoreClips: _v8
        }), _v12 ? (0, _v1.jsx)(_v88, {
          isDownloadModalOpen: !!_v24,
          onClose: () => {
            _v25(null);
          },
          clipId: _v24
        }) : null]
      });
    };
  var _v109 = _v0.i(0),
    _v110 = _v0.i(0);
  let _v111 = {
      sizes: ["640x360", "360x203"],
      forceCollectionUri: !0
    },
    _v112 = ({
      bannerHeight: _v0
    }) => {
      let _v1 = (0, _v37.useViewer)(),
        _v2 = (0, _v57.useRouter)(),
        {
          isSideBySideActive: _v3
        } = (0, _v20.useLayout)(),
        {
          nextClipData: _v4,
          prevClipData: _v5,
          selectedId: _v6,
          clipIndex: _v7
        } = (() => {
          let [_v0, _v1] = (0, _v41.useGetAlbumVideosLazy)(),
            _v2 = (0, _v37.useViewer)(),
            _v3 = (0, _v44.useBaseUrl)(),
            {
              selectedId: _v4
            } = _v52(),
            {
              clips: _v5,
              total: _v6,
              perPage: _v7,
              page: _v8
            } = _v56(),
            {
              sortConfig: _v9,
              hideUpcoming: _v10
            } = (0, _v23.useGetShowcase)(),
            {
              albumId: _v11,
              password: _v12,
              isShowcaseEmbedded: _v13,
              referer: _v14
            } = (0, _v16.useAlbumStore)(_v0 => ({
              albumId: _v0.albumId,
              password: _v0.hashedPass,
              isShowcaseEmbedded: _v0.isShowcaseEmbedded,
              referer: _v0.referrer
            })),
            {
              prev: _v15,
              next: _v16
            } = _v50(_v5 ?? [], _v0 => _v0.clipId === _v4),
            _v17 = _v8 !== (0, _v3.useMemo)(() => Math.ceil((_v6 || 0) / (_v7 || 1)), [_v6, _v7]) && _v4 === _v5?.[_v5.length - 1]?.clipId,
            _v18 = 1 !== _v8 && _v4 === _v5?.[0]?.clipId,
            _v19 = (0, _v3.useCallback)(_v0 => {
              if (!_v2 || !_v8) return;
              let _v1 = "prev" === _v0 ? _v8 - 1 : _v8 + 1;
              _v0({
                where: {
                  albumId: _v11
                },
                select: _v53.SELECT_ALBUM_FIELDS,
                query: {
                  isEmbed: _v13,
                  page: _v1,
                  perPage: _v7,
                  ..._v111,
                  ..._v9,
                  ...(_v12 && {
                    password: _v12
                  }),
                  ...(_v10 && {
                    filter: "playable"
                  }),
                  referrer: _v14
                },
                headers: {
                  Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
                }
              });
            }, [_v11, _v8, _v10, _v13, _v12, _v7, _v9, _v2, _v0]),
            _v20 = (_v0, _v1) => {
              let _v2 = "next" === _v1 ? 0 : _v0.length - 1,
                _v3 = _v0?.[_v2],
                _v4 = (0, _v5.getEventIdFromClip)(_v3);
              return {
                ..._v3,
                ..._v49(_v3?.link, {
                  baseUrl: _v3,
                  eventId: _v4
                }),
                ...(_v4 && {
                  eventId: _v4
                })
              };
            };
          (0, _v3.useEffect)(() => {
            _v17 ? _v19("next") : _v18 && _v19("prev");
          }, [_v19, _v17, _v18]);
          let _v21 = _v1?.data?.data,
            _v22 = _v17 && _v21 && !_v16,
            _v23 = _v18 && _v21 && !_v15;
          return {
            nextClipData: _v22 ? _v20(_v21, "next") : _v16,
            prevClipData: _v23 ? _v20(_v21, "prev") : _v15,
            selectedId: _v4,
            clipIndex: _v5?.findIndex(_v0 => _v0.clipId === _v4)
          };
        })(),
        {
          page: _v8,
          perPage: _v9,
          setPage: _v10
        } = _v56(),
        {
          clips: _v11
        } = _v55(),
        {
          loop: _v12,
          hideNav: _v13
        } = (0, _v23.useGetShowcase)(),
        _v14 = (0, _v16.useAlbumStore)(_v0 => _v0.continuousPlay),
        {
          clip: _v15
        } = _v61(_v6),
        _v16 = _v9 ?? 1,
        _v17 = (_v0, _v1) => {
          "prev" === _v1 && _v8 && 0 === _v7 && _v10(_v8 - 1), "next" === _v1 && _v8 && _v7 === _v16 - 1 && _v10(_v8 + 1), _v2.push(_v0);
        },
        _v18 = _v11?.[0],
        _v19 = _v14 ? _v4 : null;
      _v14 && _v19?.eventId && (_v19 = _v51(_v19.clipId, _v11)), _v12 && _v14 && !_v19 && (_v19 = _v18);
      let _v20 = _v19?.link,
        _v21 = (0, _v3.useCallback)(() => {
          if (_v20) {
            var _v0, _v1;
            let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
            _v8 && _v7 === _v16 - 1 && _v10(_v8 + 1), _v0 = _v6 || "", _v1 = _v4?.privacy?.view || "", _v0 = (0, _v93.buildTeamBpContextFromTeamUser)(_v1?.teamUser), _v1 = _v102(), _v2 = (0, _v97.buildViewBpContext)({
              view_type: "impression",
              feature: null
            }), _v3 = (0, _v95.buildVideoBpContext)({
              video_id: parseFloat(_v0) ?? "",
              video_privacy: _v1
            }), _v4 = (0, _v92.buildProductAnalyticsBpContext)({
              product: "showcase",
              feature: "playlist",
              location: "player",
              device_type: (0, _v89.default)()
            }), _v5 = (0, _v98.buildWebBpContext)({
              page_name: "showcase_recipient",
              path: window.location.pathname,
              target: null,
              target_path: _v20,
              ...(!!document.referrer && {
                referrer: document.referrer
              })
            }), _v6 = {
              ..._v0,
              ..._v1,
              ..._v3,
              ..._v4,
              ..._v5,
              ..._v2
            }, (0, _v99.sendBpEventWithContexts)("vimeo.view_autoplayed_next_video", _v6, 2), _v2.push(`${_v20}&autoplay=1`, _v20);
          }
        }, [_v20, _v2, _v8, _v7, _v10, _v16]);
      return _v6 && _v15 ? (0, _v1.jsxs)(_v109.PlayerWrapper, {
        backgroundColor: "#000",
        "data-autoplay": _v14 ? "1" : "0",
        globalNavigationHidden: _v13,
        outerContainerHeight: _v0,
        children: [(0, _v1.jsx)(_v110.Player, {
          clip: _v15,
          onEnded: _v21
        }), _v3 ? null : (0, _v1.jsx)(_v30.Show, {
          above: "md",
          children: (0, _v1.jsxs)(_v110.PrevNextButtonWrapper, {
            ...(!_v5 && {
              justifyContent: "flex-end"
            }),
            children: [_v5 ? (0, _v1.jsx)(_v110.PreviousClip, {
              dataHref: _v5.link,
              onClick: () => _v17(_v5.link, "prev")
            }) : null, _v4 ? (0, _v1.jsx)(_v110.NextClip, {
              dataHref: _v4.link,
              onClick: () => _v17(_v4.link, "next")
            }) : null]
          })
        })]
      }) : (0, _v1.jsx)(_v110.PlayerLoadingView, {
        bannerHeight: _v0
      });
    };
  var _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0);
  async function _v126(_v0, _v1) {
    let _v2 = await fetch(`//${_v1.apiUrl}/live_chat/${_v0}/status`, {
      headers: {
        Authorization: `jwt ${_v1.jwt}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (_v2.ok) return (0, _v124.camelize)(await _v2.json()).chatEnabled;
    throw Error("Failed to fetch chat status data.");
  }
  let _v127 = () => {
      let {
          selectedId: _v0
        } = _v52(),
        {
          clip: _v1
        } = _v61(_v0),
        _v2 = _v1?.eventId,
        _v3 = _v1?.live?.recurringEvent?.streamPrivacy?.unlistedHash,
        _v4 = _v1?.live?.status,
        _v5 = _v1?.live?.recurringEvent?.chatEnabled,
        _v6 = _v1?.live?.recurringEvent?.hasRegistration;
      return {
        associatedShowcaseId: _v1?.live?.recurringEvent?.album?.id,
        eventId: _v2,
        eventHash: _v3,
        liveStatus: _v4,
        chatEnabled: _v5,
        hasRegistration: _v6
      };
    },
    _v128 = ({
      roomId: _v0,
      isEventLoading: _v1,
      isMobileDrawer: _v2,
      playerContainerRef: _v3,
      setIsInteractionToolsEnabled: _v4
    }) => {
      let {
          associatedShowcaseId: _v5,
          eventId: _v6,
          eventHash: _v7,
          hasRegistration: _v8
        } = _v127(),
        {
          isLiveToolsSideModuleOpen: _v9,
          liveToolsMobileDrawerStyles: _v10,
          roomHashedPassword: _v11
        } = (({
          roomId: _v0,
          associatedShowcaseId: _v1,
          eventId: _v2,
          isEventLoading: _v3,
          playerContainerRef: _v4,
          setIsInteractionToolsEnabled: _v5
        }) => {
          let {
              activeSideModule: _v6,
              activeMobileDrawer: _v7,
              isMobileDrawerOpen: _v8,
              onClose: _v9
            } = (0, _v20.useLayout)(),
            _v10 = (0, _v3.useRef)(_v2),
            _v11 = _v4.current?.getBoundingClientRect()?.bottom || 0,
            _v12 = (0, _v121.useInView)(_v4, {
              margin: `-${_v53.NAV_HEIGHT}px 0px 0px 0px`
            }),
            _v13 = Math.max(_v11, _v53.NAV_HEIGHT),
            _v14 = (0, _v123.useToken)("zindex", "modal"),
            _v15 = (0, _v3.useMemo)(() => ({
              pos: "fixed",
              top: _v12 ? `calc(min(calc(${(0, _v122.rem)(_v13)} + ${(0, _v122.rem)(16)}), calc(100vh - ${(0, _v122.rem)(350)})))` : (0, _v122.rem)(_v13),
              bottom: 0,
              height: "auto",
              zIndex: _v14
            }), [_v13, _v12, _v14]),
            {
              albumId: _v16,
              password: _v17
            } = (0, _v16.useAlbumStore)(_v0 => ({
              albumId: _v0.albumId,
              password: _v0.hashedPass
            })),
            _v18 = !_v2 || _v3,
            _v19 = "LIVE_TOOLS" === _v6 || "LIVE_TOOLS" === _v7;
          (0, _v3.useEffect)(() => {
            (_v18 || _v10.current !== _v2) && (_v9?.(), _v10.current = _v2);
          }, [_v2, _v18, _v9]), (0, _v3.useEffect)(() => {
            _v8 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
          }, [_v8]);
          let _v20 = function (_v0) {
            let _v1 = (0, _v3.useContext)(_v125.ViewerContext),
              [_v2, _v3] = (0, _v3.useState)(!1),
              [_v4, _v5] = (0, _v3.useState)(!1);
            return (0, _v3.useEffect)(function () {
              if (_v0) {
                setTimeout(async () => {
                  try {
                    let _v0 = await _v126(_v0, _v1);
                    _v3(_v0);
                  } catch (_v0) {
                    console.error(_v0);
                  }
                });
                let _v0 = setInterval(async () => {
                  try {
                    _v3(await _v126(_v0, _v1));
                  } catch (_v0) {}
                }, 0);
                return () => clearInterval(_v0);
              }
              _v3(!1);
            }, [_v0, _v1?.jwt]), (0, _v3.useEffect)(function () {
              _v5(!!_v2);
            }, [_v2]), _v4;
          }(_v0);
          return (0, _v3.useEffect)(() => {
            _v19 && !_v20 && _v9?.();
          }, [_v20, _v19, _v9]), (0, _v3.useEffect)(() => {
            _v5(_v20);
          }, [_v20, _v5]), {
            isLiveToolsSideModuleOpen: _v19,
            liveToolsMobileDrawerStyles: _v15,
            roomHashedPassword: _v1 === _v16 ? _v17 : void 0
          };
        })({
          roomId: _v0,
          associatedShowcaseId: _v5,
          eventId: _v6,
          isEventLoading: _v1,
          playerContainerRef: _v3,
          setIsInteractionToolsEnabled: _v4
        });
      return _v6 ? (0, _v1.jsx)(_v119.InteractionToolsStatusObserver, {
        sessionType: _v117.EComposerSessionType.LIVE_EVENT,
        sessionId: _v6,
        isActive: !1,
        isBypass: !0,
        placeholder: _v9 ? (0, _v1.jsx)(_v130, {}) : null,
        children: (0, _v1.jsx)(_v1.Fragment, {
          children: _v9 ? (0, _v1.jsxs)(_v131, {
            "data-test-id": "live-engagement-tool",
            pos: "relative",
            w: "100%",
            h: "100%",
            borderRadius: "drawer",
            overflow: "hidden",
            zIndex: 1,
            ...(_v2 && _v10),
            children: [(0, _v1.jsx)(_v129, {}), (0, _v1.jsx)(_v118.InteractionToolsRegistrantObserver, {
              isActive: _v8,
              sessionId: _v6,
              children: (0, _v1.jsx)(_v120.InteractionToolsEntry, {
                backgroundColor: "surface",
                sessionType: _v117.EComposerSessionType.LIVE_EVENT,
                sessionId: _v6,
                roomHashedPassword: _v11,
                roomUnlistedHash: _v7 || "",
                toolbarAttachPosition: _v116.ESidebarAttach.TOP,
                isManagementDisabled: !0,
                isCustomThemeEnabled: !0,
                toolbarPanelIsFluid: !0,
                isCollapsibleSignIn: !0,
                isStandalone: !0,
                isActiveStatusObservingEnabled: !1,
                isBypassStatusObservingEnabled: !0
              })
            })]
          }) : null
        })
      }) : null;
    },
    _v129 = () => {
      let {
        onClose: _v0
      } = (0, _v20.useLayout)();
      return (0, _v1.jsx)(_v114.Tooltip, {
        label: (0, _v47.translate)({
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
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v113.IconButton, {
          "aria-label": (0, _v47.translate)({
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
          }),
          icon: (0, _v1.jsx)(_v115.CloseX, {}),
          size: "sm",
          variant: "tertiary",
          onClick: _v0,
          pos: "absolute",
          top: "md",
          right: "md",
          zIndex: 101
        })
      });
    },
    _v130 = () => (0, _v1.jsx)(_v28.Center, {
      h: "100%",
      children: (0, _v1.jsx)(_v72.Spinner, {
        color: "text-primary"
      })
    });
  var _v131 = (0, _v64.default)(_v27.Box).withConfig({
      displayName: "LiveEngagementToolModule___StyledBox",
      componentId: "sc-ea266581-0"
    })({
      ".interaction-sidebar-panel": {
        zIndex: 1
      }
    }),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0);
  let _v135 = ({
    isShowcaseEmpty: _v0
  }) => {
    let [, _v1] = (0, _v3.useTransition)(),
      _v2 = (0, _v57.useRouter)(),
      _v3 = window.location.pathname,
      {
        onClose: _v4
      } = (0, _v20.useLayout)(),
      {
        selectedId: _v5
      } = _v52(),
      _v6 = (0, _v133.useToast)(),
      {
        customLogo: _v7,
        allowShare: _v8,
        title: _v9,
        canEditShowcase: _v10,
        hideNav: _v11,
        shareLink: _v12,
        showVideoDetails: _v13,
        showBannerTitle: _v14,
        showSearchBar: _v15
      } = (0, _v23.useGetShowcase)(),
      _v16 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
      {
        trackShowcaseLinkCopied: _v17
      } = (0, _v36.useShowcaseTracking)(),
      [_v18, _v19] = (0, _v3.useState)(""),
      {
        isLoading: _v20,
        results: _v21,
        canLoadMore: _v22,
        error: _v23,
        loadMoreResults: _v24
      } = (_v0 => {
        let _v1 = (0, _v57.useRouter)(),
          _v2 = (0, _v44.useBaseUrl)(),
          _v3 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
          _v4 = (0, _v16.useAlbumStore)(_v0 => _v0.hashedPass),
          _v5 = (0, _v37.useViewer)(),
          _v6 = (0, _v16.useAlbumStore)(_v0 => _v0.isShowcaseEmbedded),
          _v7 = (0, _v16.useAlbumStore)(_v0 => _v0.referrer),
          _v8 = {
            forceCollectionUri: !0,
            sizes: ["640x360", "360x203"],
            perPage: 15
          },
          {
            data: _v9,
            isLoading: _v10,
            error: _v11,
            size: _v12,
            setSize: _v13,
            ..._v14
          } = (0, _v41.useGetAlbumVideosInfinite)(() => _v5 && _v0 ? {
            where: {
              albumId: _v3
            },
            select: ["name", "duration", "uri", "link", "live", "pictures.sizes.link", "pictures.sizes.width", "pictures.uri", "user.link", "user.name", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.uri"],
            query: {
              ..._v8,
              query: _v0,
              sort: "alphabetical",
              direction: "asc",
              ...(_v4 && {
                password: _v4
              }),
              isEmbed: _v6,
              referrer: _v7
            },
            headers: {
              Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
            }
          } : null),
          {
            isLoadingMore: _v15,
            isDone: _v16
          } = (0, _v43.getInfiniteRequestLoadingState)({
            data: _v9,
            size: _v12,
            itemsPerPage: 15
          }),
          _v17 = (0, _v3.useMemo)(() => _v9?.filter(Boolean)?.flatMap(_v0 => _v0.data)?.map(_v0 => {
            let _v1 = (0, _v5.getEventIdFromClip)(_v0),
              {
                link: _v2
              } = _v49(_v0.link, {
                baseUrl: _v2,
                eventId: _v1
              });
            return {
              onClick: () => {
                _v1.push(_v2);
              },
              duration: _v0.duration,
              user: _v0.user,
              name: _v0.name,
              src: _v0.pictures?.sizes?.[0]?.link,
              srcSet: _v0.pictures?.sizes?.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", "),
              alt: `"${_v0.name}" thumbnail`
            };
          }), [_v9, _v2, _v1]);
        return {
          canLoadMore: !_v16 && !_v10,
          isLoading: _v10,
          isLoadingMore: _v15,
          loadMoreResults: (0, _v3.useCallback)(() => {
            _v13(_v12 + 1);
          }, [_v12, _v13]),
          error: _v11,
          results: _v17,
          ..._v14
        };
      })(_v18),
      _v25 = () => _v19(""),
      _v26 = _v78({
        isShowcaseEmpty: _v0,
        showVideoDetails: _v13
      });
    return null === _v26 ? null : (0, _v1.jsx)(_v132.ToastProvider, {
      children: (0, _v1.jsx)(_v27.Box, {
        position: "relative",
        ...(!_v11 ? {
          borderTop: "1px solid",
          borderColor: "stroke"
        } : {}),
        children: (0, _v1.jsx)(_v134.ShowcaseNavigation, {
          allowShare: _v8,
          canLoadMore: _v22,
          customLogo: _v7,
          isSearchVisible: _v15,
          isShowcaseEmpty: _v0,
          resultsPending: _v20,
          resultsList: _v21,
          searchError: _v23,
          searchedTerm: _v18,
          showBackButton: !!_v5,
          showManageButton: _v10,
          textColor: _v26.thumbnailUrl && !_v5 ? "white" : "text-primary",
          topTitle: _v14 ? _v5 ? _v9 : _v26.topTitle : "",
          onBackClick: () => {
            _v1(() => {
              _v2.push(_v3), _v4?.();
            });
          },
          onLoadMoreSearchResults: _v24,
          onManageClick: () => {
            window.location.href = `/manage/showcases/${_v16}`;
          },
          onResetSearch: _v25,
          onResultClick: () => _v25(),
          onSearch: _v0 => {
            _v19(_v0);
          },
          onShareClick: () => {
            (async () => {
              try {
                await navigator.clipboard.writeText(_v12), _v17({
                  showcaseId: _v16.toString()
                }), _v6({
                  title: (0, _v47.translate)({
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
                  })
                });
              } catch (_v0) {
                _v6({
                  title: (0, _v47.translate)({
                    singular: "Oops, something went wrong. Please try again.",
                    dictionary: {
                      es: {
                        singular: "Ups, algo salió mal. Vuelve a intentarlo."
                      },
                      "de-DE": {
                        singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
                      },
                      "fr-FR": {
                        singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
                      },
                      "ja-JP": {
                        singular: "エラーが発生しました。再度お試しください。"
                      },
                      "ko-KR": {
                        singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
                      },
                      "pt-BR": {
                        singular: "Ops, algo deu errado. Por favor, tente novamente."
                      },
                      "zh-CN": {
                        singular: "哎呀，出错了。请重试。"
                      }
                    }
                  })
                });
              }
            })();
          },
          showcaseId: _v16,
          ...(!_v5 && {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 3,
            w: "100%"
          })
        })
      })
    });
  };
  var _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0);
  let _v139 = ({
      clipId: _v0,
      isOpen: _v1,
      onClose: _v2
    }) => (0, _v1.jsx)(_v138.ReportVideoModal, {
      clipId: _v0,
      isOpen: _v1,
      onClose: _v2,
      onSubmitReport: () => {
        console.log("Report submitted");
      }
    }),
    _v140 = (0, _v63.default)(async () => {
      let {
        VideoShareModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v141 = ({
      uri: _v0,
      active: _v1,
      modalState: _v2,
      onClose: _v3,
      onLoginRequired: _v4,
      shared: _v5 = {}
    }) => (0, _v1.jsx)(_v140, {
      uri: _v0,
      page: "Viewer Home",
      entryPoint: null,
      isResourceShareModalOpen: _v1,
      closeResourceShareModal: _v3,
      showPrivacyRedesign: !0,
      onLoginRequired: _v4,
      shared: _v5,
      ...(_v2 && {
        modalState: _v2
      })
    });
  var _v142 = _v0.i(0);
  function _v143() {
    return document.querySelector('meta[name="bp-server-session-id"]')?.getAttribute("content") ?? "";
  }
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0);
  async function _v148({
    baseUrl: _v0,
    where: {
      userId: _v1,
      albumId: _v2,
      videoId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v146.measureLatency)("putUserAlbumVideoLikes", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/albums/${_v2}/videos/${_v3}/likes?${(0, _v147.searchQueryString)(_v4)}`, {
        ..._v5,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v147.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v147.deepCamelCase)(_v1);
    });
  }
  async function _v149({
    baseUrl: _v0,
    where: {
      userId: _v1,
      albumId: _v2,
      videoId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v146.measureLatency)("deleteUserAlbumVideoLikes", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/albums/${_v2}/videos/${_v3}/likes?${(0, _v147.searchQueryString)(_v4)}`, {
        ..._v5,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v147.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v147.deepCamelCase)(_v1);
    });
  }
  var _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  function _v152() {
    let {
        mutate: _v0
      } = (0, _v150.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v151.useGctlConfig)(),
      [_v5, _v6] = (0, _v145.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/likes${(0, _v145.serializeQuery)(_v0)}`, _v148({
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
  function _v153() {
    let {
        mutate: _v0
      } = (0, _v150.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v151.useGctlConfig)(),
      [_v5, _v6] = (0, _v145.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/likes${(0, _v145.serializeQuery)(_v0)}`, _v149({
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
  "true" === _v144.default.env.STORYBOOK && (0, _v145.assignMswData)(_v152, {
    endpoint: "/users/:userId/albums/:albumId/videos/:videoId/likes",
    method: "PUT"
  }), "true" === _v144.default.env.STORYBOOK && (0, _v145.assignMswData)(_v153, {
    endpoint: "/users/:userId/albums/:albumId/videos/:videoId/likes",
    method: "DELETE"
  });
  let _v154 = {
      forceCollectionUri: !0
    },
    _v155 = ["metadata.connections.likes.total", "metadata.interactions.like.added", "metadata.interactions.like.uri"],
    _v156 = (0, _v3.memo)(_v0 => {
      let {
          shareModalActive: _v1,
          setShareModalActive: _v2,
          shareModalState: _v3
        } = (_v0 => {
          let [_v1, _v2] = (0, _v3.useState)(_v0),
            [_v3, _v4] = (0, _v3.useState)();
          return (0, _v3.useEffect)(() => {
            if ("#share" === window.location.hash) {
              _v4("SHARE"), _v2(!0);
              return;
            }
            if ("#embed" === window.location.hash) {
              _v4("EMBED"), _v2(!0);
              return;
            }
          }, []), {
            shareModalState: _v3,
            setShareModalActive: _v2,
            shareModalActive: _v1
          };
        })(!1),
        {
          reportModalOpen: _v4,
          setReportModalOpen: _v5
        } = (() => {
          let [_v0, _v1] = (0, _v3.useState)(!1);
          return {
            reportModalOpen: _v0,
            setReportModalOpen: _v1
          };
        })(),
        _v6 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
        {
          isMobile: _v7
        } = (0, _v137.useDeviceDetection)(),
        {
          actionBarStateConfig: _v8,
          actionBarDisplayConfig: _v9,
          actionBarHandlers: _v10,
          activeDownloadClipId: _v11,
          publicCommentsCount: _v12,
          setActiveDownloadClipId: _v13,
          shouldShowActionBar: _v14,
          onShareClick: _v15,
          onLoginRequiredInShareModal: _v16
        } = (({
          canInteract: _v0,
          clipId: _v1,
          clipRequestId: _v2,
          showComments: _v3,
          showDownload: _v4,
          shareModalActive: _v5,
          showShare: _v6,
          setShareModalActive: _v7,
          showLike: _v8,
          showAskAi: _v9,
          canLike: _v10,
          isVideoProcessing: _v11,
          setReportModalOpen: _v12
        }) => {
          let _v13 = (0, _v37.useViewer)(),
            _v14 = _v143(),
            {
              albumId: _v15,
              isOffsite: _v16,
              isShowcaseEmbedded: _v17,
              showcaseId: _v18,
              albumPrivacy: _v19,
              seoAllowIndexed: _v20,
              noOfVideos: _v21
            } = (0, _v16.useAlbumStore)(_v0 => ({
              albumId: _v0.albumId,
              isOffsite: _v0.isOffsite,
              isShowcaseEmbedded: _v0.isShowcaseEmbedded,
              showcaseId: _v0.albumId,
              seoAllowIndexed: _v0.seoAllowIndexed,
              noOfVideos: _v0.noOfVideos,
              albumPrivacy: _v0.albumPrivacy
            })),
            {
              toggleLoginModal: _v22,
              setRedirectUrl: _v23
            } = _v71(),
            {
              activeMobileDrawer: _v24,
              setActiveMobileDrawer: _v25,
              activeSideModule: _v26,
              onActiveDrawerModuleChange: _v27
            } = (0, _v20.useLayout)(),
            {
              commentsCount: _v28
            } = (0, _v142.useGetCommentsCount)(_v2, !0, void 0, _v18),
            _v29 = (0, _v3.useRef)(!1),
            [_v30, _v31] = (0, _v3.useState)(null),
            {
              added: _v32,
              update: _v33,
              totalLikes: _v34,
              isLikeLoading: _v35
            } = function ({
              clipRequestId: _v0,
              clipId: _v1,
              canLike: _v2
            }) {
              let _v3 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
                _v4 = (0, _v16.useAlbumStore)(_v0 => _v0.hashedPass),
                _v5 = (0, _v16.useAlbumStore)(_v0 => _v0.albumOwnerId),
                {
                  data: _v6,
                  isLoading: _v7,
                  error: _v8,
                  mutate: _v9
                } = (_v0 => {
                  let {
                      albumId: _v1,
                      albumSignature: _v2,
                      password: _v3,
                      isShowcaseEmbedded: _v4,
                      referrer: _v5
                    } = (0, _v16.useAlbumStore)(_v0 => ({
                      albumId: _v0.albumId,
                      albumSignature: _v0.albumSignature,
                      password: _v0.hashedPass,
                      isShowcaseEmbedded: _v0.isShowcaseEmbedded,
                      referrer: _v0.referrer
                    })),
                    _v6 = {
                      isEmbed: _v4,
                      referrer: _v5
                    },
                    {
                      data: _v7,
                      isLoading: _v8,
                      error: _v9,
                      mutate: _v10
                    } = (0, _v58.useGetAlbumVideo)(() => _v1 && _v0 && null !== _v2 ? {
                      where: {
                        albumId: _v1,
                        videoId: Number(_v0)
                      },
                      select: _v155,
                      query: {
                        ..._v154,
                        ..._v6,
                        ...(_v3 && {
                          password: _v3
                        }),
                        ...(_v2 && {
                          albumSignature: _v2,
                          albumUri: `albums/${_v1}`
                        })
                      },
                      headers: {
                        Accept: `application/vnd.vimeo.albumvideo;version=${_v53.VIDEOS_API_VERSION}`
                      }
                    } : null, {
                      revalidateOnFocus: !1
                    });
                  return {
                    data: _v7,
                    isLoading: _v8,
                    error: _v9,
                    mutate: _v10
                  };
                })(_v1),
                _v10 = (_v6 && "clip" in _v6 ? _v6.clip : void 0) ?? _v6,
                _v11 = _v10?.metadata?.interactions?.like?.added,
                _v12 = _v10?.metadata?.connections?.likes?.total ?? 0,
                _v13 = _v10?.metadata?.interactions?.like?.uri,
                _v14 = new URLSearchParams(_v13?.split("?")[1]).get("auth"),
                [_v15, {
                  loading: _v16,
                  error: _v17
                }] = _v152(),
                [_v18, {
                  loading: _v19,
                  error: _v20
                }] = _v153(),
                _v21 = _v11 ? _v20 : _v17,
                _v22 = async () => {
                  let _v0 = !_v5,
                    _v1 = !_v0;
                  if (!_v10 || !_v2 || _v8 || _v7 || _v0 || _v1) return null;
                  await (_v11 ? _v18 : _v15)({
                    where: {
                      userId: _v5,
                      albumId: _v3,
                      videoId: _v0
                    },
                    query: {
                      ...(_v4 && {
                        password: _v4
                      }),
                      ...(_v14 && {
                        auth: _v14
                      })
                    }
                  });
                  let _v2 = {
                    ..._v6,
                    clip: {
                      ..._v10,
                      metadata: {
                        ..._v10.metadata,
                        interactions: {
                          ..._v10.metadata.interactions,
                          like: {
                            added: !_v11,
                            uri: `users/${_v5}/likes/videos/${_v0}`
                          }
                        },
                        connections: {
                          ..._v10.metadata.connections,
                          likes: {
                            total: _v11 ? _v12 - 1 : _v12 + 1,
                            uri: `users/${_v5}/likes/videos`
                          }
                        }
                      }
                    }
                  };
                  _v21 || _v9(_v2);
                };
              return {
                added: _v11,
                update: _v22,
                totalLikes: _v12,
                isLikeLoading: _v7 || (_v11 ? _v19 : _v16)
              };
            }({
              clipId: _v1,
              clipRequestId: _v2,
              canLike: _v10
            }),
            _v36 = !!_v13?.user,
            _v37 = (0, _v3.useMemo)(() => ({
              entity_id: _v15,
              number_of_videos: _v21,
              is_seo_on: _v20,
              collection_privacy: _v19
            }), [_v15, _v21, _v20, _v19]),
            _v38 = (0, _v3.useCallback)(() => _v31(_v1), [_v1, _v31]),
            _v39 = (0, _v3.useCallback)(() => {
              let _v0 = new URL(window.location.href);
              _v0.searchParams.append("open_share", "true"), _v23(_v0.toString()), _v7(!1), _v22(!0);
            }, [_v23, _v7, _v22]),
            _v40 = (0, _v3.useCallback)(() => {
              _v25("COMMENTS" === _v24 ? "" : "COMMENTS"), _v5 && _v7(!1);
            }, [_v24, _v25, _v7, _v5]),
            _v41 = (0, _v3.useCallback)(() => {
              let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
              _v7(_v0 => !_v0), _v5 || (_v0 = _v100(_v13), _v1 = _v103(), _v2 = (0, _v95.buildVideoBpContext)({
                video_id: parseFloat(_v1)
              }), _v3 = (0, _v91.buildCollectionBpContext)({
                entity_id: _v37?.entity_id ?? 0,
                collection_embed_privacy: null,
                number_of_videos: _v37?.number_of_videos ?? null,
                is_seo_on: _v37?.is_seo_on ?? null,
                collection_privacy: _v37?.collection_privacy ?? null
              }), _v4 = (0, _v92.buildProductAnalyticsBpContext)({
                product: "viewer_home",
                feature: "share",
                location: "bottom_panel",
                modal_name: null,
                flow: "share_video_link",
                element: "button",
                copy: "share",
                entity_type: "video",
                device_type: (0, _v89.default)()
              }), _v5 = _v104(_v14), _v6 = {
                ..._v0,
                ..._v2,
                ..._v4,
                ..._v3,
                ..._v1,
                ..._v5
              }, (0, _v99.sendBpEventWithContexts)("vimeo.open_distribution_options", _v6, 18, {
                distribution_type: "share",
                target_quality: null,
                target_resolution: null,
                target_file_details: null,
                number_of_items: null,
                embed_config: null,
                embed_custom_dimensions: null,
                is_internal: !1,
                sharee_id: null,
                sharee_entity_permission: null,
                sharee_team_permission: null,
                is_send_email_notification: null,
                sharee_email: null,
                collection_type: null,
                target_transcript_language: null,
                embed_layout: null,
                embed_playback_toggles_on: null,
                embed_playback_toggles_off: null,
                lms_technical_standard: null,
                lms_scoring_method: null,
                lms_completion_threshold: null,
                distribution_tab: null,
                audio_language_selected_for_download: null,
                is_ai_translated: null,
                is_original_language_downloaded: null
              }));
            }, [_v7, _v5, _v1, _v14, _v37, _v13]),
            _v42 = (0, _v3.useCallback)(async () => {
              let _v0, _v1, _v2, _v3, _v4, _v5;
              if (!_v36) {
                _v23(window.location.pathname + window.location.search), _v22(!0);
                return;
              }
              _v0 = _v100(_v13), _v1 = (0, _v95.buildVideoBpContext)({
                video_id: parseFloat(_v1)
              }), _v2 = (0, _v91.buildCollectionBpContext)({
                entity_id: _v37?.entity_id ?? 0,
                collection_embed_privacy: null,
                number_of_videos: _v37?.number_of_videos ?? null,
                is_seo_on: _v37?.is_seo_on ?? null,
                collection_privacy: _v37?.collection_privacy ?? null
              }), _v3 = (0, _v92.buildProductAnalyticsBpContext)({
                product: "viewer_home",
                feature: "like",
                location: "bottom_panel",
                modal_name: null,
                flow: "showcase",
                element: "button",
                copy: "like",
                entity_type: "video",
                device_type: (0, _v89.default)()
              }), _v4 = _v104(_v14), _v5 = {
                ..._v0,
                ..._v1,
                ..._v3,
                ..._v2,
                ..._v4
              }, (0, _v99.sendBpEventWithContexts)("vimeo.select_like_button", _v5, 4, {
                is_timestamp_enabled: null,
                profile_element_type: null,
                default_transcript_language: null,
                widget_placement: null,
                widget_name: null
              }), await _v33();
            }, [_v36, _v1, _v14, _v37, _v13, _v33, _v23, _v22]),
            _v43 = (0, _v3.useCallback)(() => {
              if (!_v36) {
                _v23(window.location.pathname + window.location.search), _v22(!0);
                return;
              }
              _v12(!0);
            }, [_v36, _v23, _v22, _v12]),
            _v44 = (0, _v3.useCallback)(() => {
              _v27("VIMEO_AI" === _v26 ? "" : "VIMEO_AI");
            }, [_v26, _v27]),
            _v45 = {
              showComments: _v3,
              showDownload: _v4,
              showLike: _v8,
              showShare: _v6,
              showVimeoAI: _v9,
              showWatchlater: !1,
              showReport: !0,
              showAnimatedLike: !0
            },
            _v46 = _v0 && !_v11 && !_v17 && !_v16 && Object.values(_v45).some(_v0 => !!_v0);
          return (0, _v3.useEffect)(() => {
            let _v0 = new URLSearchParams(window.location.search),
              _v1 = _v0.get("open_share");
            _v5 || _v29.current || "true" !== _v1 || (_v29.current = !0, _v41(), _v0.delete("open_share"));
          }, [_v5, _v41]), {
            actionBarStateConfig: {
              likedClip: _v32,
              totalLikes: _v34 ?? 0,
              canLike: !_v36 || _v10,
              isLikeLoading: _v35
            },
            actionBarDisplayConfig: _v45,
            actionBarHandlers: {
              onCommentClick: _v40,
              onDownloadClick: _v38,
              onShareClick: _v41,
              onLikeClick: _v42,
              onAskAIClick: _v44,
              onReportClick: _v43,
              onReportClose: () => {
                _v12(!1);
              }
            },
            activeDownloadClipId: _v30,
            publicCommentsCount: _v28,
            setActiveDownloadClipId: _v31,
            shouldShowActionBar: _v46,
            onShareClick: _v41,
            onLoginRequiredInShareModal: _v39
          };
        })({
          ..._v0,
          shareModalActive: _v1,
          setShareModalActive: _v2,
          setReportModalOpen: _v5
        });
      return _v14 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v136.default, {
          totalComments: _v12,
          disableScroll: !0,
          disableTooltips: _v7,
          ..._v8,
          ..._v10,
          ..._v9
        }), _v9.showShare ? (0, _v1.jsx)(_v141, {
          uri: `video/${_v0.clipRequestId}`,
          active: _v1,
          modalState: _v3,
          onClose: _v15,
          onLoginRequired: _v16,
          shared: {
            hideTimestampCheckbox: !0,
            type: _v53.VIDEO_MODAL_TYPE.ALBUM_VIDEO,
            clipId: _v0.clipId,
            albumId: _v6
          }
        }) : null, (0, _v1.jsx)(_v139, {
          clipId: _v0.clipId,
          isOpen: _v4,
          onClose: _v10.onReportClose
        }), (0, _v1.jsx)(_v88, {
          isDownloadModalOpen: !!_v11,
          onClose: () => _v13(null),
          clipId: _v11
        }), (0, _v1.jsx)(_v70, {})]
      }) : null;
    });
  var _v157 = _v0.i(0),
    _v158 = _v0.i(0);
  let _v159 = ({
    clipId: _v0,
    clipRequestId: _v1
  }) => {
    let {
        onClose: _v2
      } = (0, _v20.useLayout)(),
      {
        toggleLoginModal: _v3,
        setRedirectUrl: _v4
      } = _v71(),
      _v5 = (0, _v3.useCallback)(() => {
        let _v0 = new URL(window.location.href);
        _v0.searchParams.append("open_ai", "true"), _v4(_v0.toString()), _v3(!0);
      }, [_v4, _v3]),
      _v6 = (0, _v3.useCallback)(_v0 => {
        let _v1 = document.querySelector(".viewer-showcase-player iframe");
        if (_v1 && window.Vimeo?.Player) {
          let _v0 = new window.Vimeo.Player(_v1);
          _v0.setCurrentTime(_v0), _v0.play();
        }
      }, []);
    return (0, _v1.jsx)(_v158.Flex, {
      direction: "column",
      w: "100%",
      h: "100%",
      "data-testid": "ai-module",
      children: (0, _v1.jsx)(_v157.ViewerAiModule, {
        pageName: "viewer_home",
        videoId: Number(_v0),
        videoRequestId: _v1,
        onClose: _v2,
        onMomentPlay: _v6,
        onLoginRequired: _v5
      })
    });
  };
  var _v160 = _v0.i(0);
  let _v161 = ({
    playerContainerRef: _v0,
    bannerHeight: _v1
  }) => {
    let _v2 = (0, _v57.useRouter)(),
      {
        selectedId: _v3,
        selectedClipData: _v4
      } = _v52(),
      _v5 = (0, _v37.useViewer)(),
      {
        trackShowcaseVideoClicked: _v6
      } = (0, _v36.useShowcaseTracking)(),
      _v7 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
      _v8 = (0, _v84.useStorageLimitLockedVideoPaywall)(),
      {
        setContinuousPlay: _v9,
        isShowcaseEmbedded: _v10
      } = (0, _v16.useAlbumStore)(_v0 => ({
        isShowcaseEmbedded: _v0.isShowcaseEmbedded,
        setContinuousPlay: _v0.setContinuousPlay
      })),
      [_v11, _v12] = (0, _v3.useState)(null),
      {
        allowContinuousPlay: _v13,
        allowDownloads: _v14,
        gridSize: _v15,
        showGridProfileImage: _v16,
        showGridProfileName: _v17,
        showGridVideoTitle: _v18,
        showGridVideoCard: _v19,
        showVideoCount: _v20,
        user: _v21
      } = (0, _v23.useGetShowcase)(),
      {
        clips: _v22,
        total: _v23,
        isLoading: _v24,
        error: _v25,
        mutate: _v26,
        setPage: _v27,
        perPage: _v28,
        page: _v29
      } = _v56(),
      _v30 = _v0 => {
        _v9(_v0);
      };
    if (_v24 || !_v22) return (0, _v1.jsx)(_v86.ShowcasePlaylistSkeleton, {
      gridSize: _v15,
      total: _v23,
      isAutoplayDefaultChecked: _v13,
      onAutoplayChange: _v30,
      showVideoPlayerCards: _v19
    });
    if (_v25) return (0, _v1.jsx)(_v86.ShowcasePlaylistErrorView, {
      onRetry: () => _v26()
    });
    if (0 === _v22.length) return (0, _v1.jsx)(_v86.ShowcasePlaylistEmptyView, {});
    let _v31 = _v29 && _v28 && _v23 > _v28;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v86.ShowcasePlaylist, {
        showVideoCount: _v20,
        clips: _v22,
        activeClipId: _v3,
        gridSize: _v15,
        total: _v23,
        isAutoplayDefaultChecked: _v13,
        onVideoCardClick: (_v0, _v1, _v2, _v3) => {
          _v106(_v21?.uri || "", _v1, _v2, _v3, _v5);
          let _v4 = _v22 ? _v22.findIndex(_v0 => _v0.clipId === _v1) : -1;
          _v4 >= 0 && _v6({
            showcaseId: _v7.toString(),
            clipId: _v1,
            showcaseVideoPosition: _v4 + 1,
            showcasePageNumber: _v29 ?? 1
          }), _v2.push(_v0), _v0.current && _v10 && _v1 && _v0.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        },
        onAutoplayChange: _v30,
        onAutoplayClick: _v0 => {
          let _v1 = _v0.target.checked;
          _v9(_v1), _v107(_v3 ?? "", _v1, _v5, _v4?.privacy?.view || "");
        },
        onLockedVideoClick: () => _v8({
          location: "showcase_viewer_video_card",
          paywallTrigger: "showcase_viewer_locked_video"
        }),
        allowDownloads: _v14,
        onDownloadClick: _v0 => {
          _v12(_v0);
        },
        showVideoPlayerCards: _v19,
        showProfileImage: _v16,
        showProfileName: _v17,
        showVideoTitle: _v18
      }), _v31 ? (0, _v1.jsx)(_v158.Flex, {
        justifyContent: "center",
        children: (0, _v1.jsx)(_v160.Pagination, {
          count: _v23,
          page: _v29,
          onPageChange: _v0 => _v27(_v0.page),
          pageSize: _v28,
          color: "text-primary"
        })
      }) : null, _v14 ? (0, _v1.jsx)(_v88, {
        isDownloadModalOpen: !!_v11,
        onClose: () => {
          _v12(null);
        },
        clipId: _v11
      }) : null]
    });
  };
  var _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0);
  let _v166 = _v0 => {
    let {
        isSideModuleOpen: _v1,
        onClose: _v2
      } = (0, _v20.useLayout)(),
      {
        layoutToggleTooltipText: _v3,
        layoutIconTransform: _v4,
        onToggleClick: _v5
      } = (({
        clipId: _v0,
        clipOwnerUri: _v1,
        privacyView: _v2
      }) => {
        let {
            isSideBySideActive: _v3,
            toggleSideBySideView: _v4
          } = (0, _v20.useLayout)(),
          {
            noOfVideos: _v5,
            seoAllowIndexed: _v6,
            showcaseId: _v7,
            showcasePrivacy: _v8
          } = (0, _v16.useAlbumStore)(_v0 => ({
            noOfVideos: _v0.noOfVideos,
            seoAllowIndexed: _v0.seoAllowIndexed,
            showcaseId: _v0.albumId,
            showcasePrivacy: _v0.albumPrivacy
          })),
          _v9 = (0, _v37.useViewer)(),
          _v10 = _v143(),
          _v11 = (0, _v3.useMemo)(() => ({
            entity_id: _v7,
            number_of_videos: _v5,
            is_seo_on: _v6,
            collection_privacy: _v8,
            collection_embed_privacy: null
          }), [_v8, _v5, _v6, _v7]),
          _v12 = (0, _v3.useCallback)(() => {
            let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
            _v0 = _v100(_v9), _v1 = (0, _v92.buildProductAnalyticsBpContext)({
              flow: "showcase",
              entity_type: "video",
              element: "icon",
              location: "comments_panel",
              feature: "view",
              device_type: (0, _v89.default)(),
              product: "viewer_home",
              copy: null
            }), _v2 = (0, _v91.buildCollectionBpContext)(_v11), _v3 = _v48(_v1), _v4 = (0, _v95.buildVideoBpContext)({
              video_id: parseFloat(_v0),
              video_owner_id: _v3,
              video_privacy: _v2
            }), _v5 = (0, _v96.buildVideoViewBpContext)({
              viewer_home_session_id: _v10,
              viewer_home_view_mode: _v3 ? "stack_view_mode" : "side_by_side_mode"
            }), _v6 = {
              ..._v0,
              ..._v1,
              ..._v2,
              ..._v4,
              ..._v5
            }, (0, _v99.sendBpEventWithContexts)(_v3 ? "vimeo.select_stack_view_mode" : "vimeo.select_side_by_side_mode", _v6, 4, {
              profile_element_type: null,
              is_timestamp_enabled: null,
              default_transcript_language: null,
              widget_placement: null,
              widget_name: null
            }), _v4();
          }, [_v11, _v0, _v1, _v3, _v2, _v10, _v4, _v9]);
        return {
          layoutToggleTooltipText: _v3 ? (0, _v47.translate)({
            singular: "Stacked view",
            dictionary: {
              es: {
                singular: "Vista apilada"
              },
              "de-DE": {
                singular: "Gestapelte Ansicht"
              },
              "fr-FR": {
                singular: "Vue empilée"
              },
              "ja-JP": {
                singular: "積み重ねて表示"
              },
              "ko-KR": {
                singular: "스택 뷰"
              },
              "pt-BR": {
                singular: "Telas empilhadas"
              },
              "zh-CN": {
                singular: "堆叠视图"
              }
            }
          }) : (0, _v47.translate)({
            singular: "Side by side view",
            dictionary: {
              es: {
                singular: "Vista en paralelo"
              },
              "de-DE": {
                singular: "Nebeneinandergestellte Ansicht"
              },
              "fr-FR": {
                singular: "Vue côte à côte"
              },
              "ja-JP": {
                singular: "並べて表示"
              },
              "ko-KR": {
                singular: "사이드 바이 사이드 뷰"
              },
              "pt-BR": {
                singular: "Telas lado a lado"
              },
              "zh-CN": {
                singular: "并排视图"
              }
            }
          }),
          layoutIconTransform: `rotate(${_v3 ? "0deg" : "90deg"})`,
          onToggleClick: _v12
        };
      })(_v0);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v29.Hide, {
        above: "md",
        children: (0, _v1.jsx)(_v114.Tooltip, {
          label: (0, _v47.translate)({
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
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v113.IconButton, {
            "aria-label": (0, _v47.translate)({
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
            }),
            icon: (0, _v1.jsx)(_v115.CloseX, {}),
            size: "sm",
            variant: "tertiary",
            onClick: _v2
          })
        })
      }), _v1 ? null : (0, _v1.jsx)(_v30.Show, {
        above: "md",
        children: (0, _v1.jsx)(_v165.LayoutToggleIcon, {
          label: _v3,
          onClick: _v5,
          transform: _v4
        })
      })]
    });
  };
  var _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0);
  let _v170 = {
      productContextFields: {
        product: "showcase"
      },
      webContextFields: {
        page_name: "showcase_recipient"
      }
    },
    _v171 = ({
      clipOwnerUri: _v0,
      clipRequestId: _v1,
      clipId: _v2,
      privacyView: _v3,
      ..._v4
    }) => {
      let _v5 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
        {
          onCloseSearch: _v6,
          onSearchClick: _v7,
          searchCommentQuery: _v8,
          searchInputRef: _v9,
          showCommentSearchBar: _v10,
          updateCommentSearchQuery: _v11
        } = (({
          clipRequestId: _v0,
          clipId: _v1,
          privacyView: _v2,
          showComments: _v3
        }) => {
          let _v4 = (0, _v37.useViewer)(),
            {
              setActiveMobileDrawer: _v5
            } = (0, _v20.useLayout)(),
            [_v6, _v7] = (0, _v3.useState)(!1),
            [_v8, _v9] = (0, _v3.useState)(""),
            _v10 = (0, _v3.useRef)(null),
            _v11 = (0, _v3.useCallback)(() => {
              _v9(""), _v7(!1);
            }, [_v9, _v7]),
            _v12 = (0, _v3.useMemo)(() => (0, _v62.default)(_v0 => {
              _v9(_v0);
            }, 500), []),
            _v13 = (0, _v3.useCallback)(_v0 => {
              _v12(_v0.target.value.trim());
            }, [_v12]);
          (0, _v169.default)([_v10], () => {
            _v6 && !_v8 && _v11();
          }, null, [_v8, _v6]);
          let {
            deeplinkNoteId: _v14
          } = (0, _v168.useGetCommentsDeeplink)(_v0, !0);
          return (0, _v3.useEffect)(() => {
            _v3 && _v14 && _v5("COMMENTS");
          }, [_v5, _v3, _v14]), {
            onCloseSearch: _v11,
            onSearchClick: (0, _v3.useCallback)(() => {
              (0, _v167.bpStartSearchComment)({
                isInternal: !1,
                videoId: parseFloat(_v1),
                videoPrivacy: _v2,
                viewer: _v4,
                analyticsProps: _v170
              }), _v7(!0);
            }, [_v1, _v2, _v4]),
            searchCommentQuery: _v8,
            searchInputRef: _v10,
            showCommentSearchBar: _v6,
            updateCommentSearchQuery: _v13
          };
        })({
          clipRequestId: _v1,
          clipId: _v2,
          privacyView: _v3,
          ..._v4
        }),
        {
          commentsCount: _v12
        } = (0, _v142.useGetCommentsCount)(_v1, !0, void 0, _v5);
      return (0, _v1.jsx)(_v132.ToastProvider, {
        children: (0, _v1.jsxs)(_v158.Flex, {
          direction: "column",
          w: "100%",
          h: "100%",
          "data-testid": "comments-module",
          children: [(0, _v1.jsxs)(_v163.ModuleHeader, {
            text: (0, _v47.translate)({
              singular: "Comments",
              dictionary: {
                es: {
                  singular: "Comentarios"
                },
                "de-DE": {
                  singular: "Kommentare"
                },
                "fr-FR": {
                  singular: "Commentaires"
                },
                "ja-JP": {
                  singular: "コメント"
                },
                "ko-KR": {
                  singular: "소감"
                },
                "pt-BR": {
                  singular: "Comentários"
                },
                "zh-CN": {
                  singular: "评论"
                }
              }
            }),
            count: _v12,
            showCommentSearchBar: _v10,
            updateCommentSearchQuery: _v11,
            onCloseSearch: _v6,
            searchInputRef: _v9,
            children: [(0, _v1.jsx)(_v164.SearchIconButton, {
              onClick: _v7
            }), (0, _v1.jsx)(_v166, {
              clipId: _v2,
              clipOwnerUri: _v0,
              privacyView: _v3
            })]
          }), (0, _v1.jsx)(_v162.CommentsContainer, {
            clipRequestId: _v1,
            clipId: _v2,
            isPublic: !0,
            searchQuery: _v8,
            analyticsProps: _v170,
            onMomentPlay: () => void 0,
            showcaseId: _v5
          })]
        })
      });
    };
  var _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v0.i(0);
  let _v180 = ({
      children: _v0,
      enableLike: _v1,
      showDateAdded: _v2,
      showDescription: _v3,
      showProfileImage: _v4,
      showProfileName: _v5,
      showTitle: _v6,
      showViews: _v7
    }) => {
      let {
          selectedId: _v8,
          isLiveEvent: _v9
        } = _v52(),
        {
          clip: _v10,
          isLoading: _v11
        } = _v61(_v8),
        {
          liveStatus: _v12
        } = _v127(),
        {
          colorMode: _v13
        } = (0, _v23.useGetShowcase)(),
        _v14 = function () {
          let _v0 = (0, _v37.useViewer)(),
            {
              selectedId: _v1
            } = _v52(),
            {
              data: _v2
            } = (0, _v178.useGetVideoCredits)(() => _v0 && _v1 ? {
              where: {
                videoId: Number(_v1)
              },
              select: ["name", "role", "uri", "user.pictures", "user.link"],
              query: {
                page: 1,
                perPage: 10
              }
            } : null, {
              revalidateOnFocus: !1,
              shouldRetryOnError: !1
            });
          return _v2?.data.map(_v0 => {
            let [_v1, _v2] = (0, _v179.getAvatarImages)(_v0?.user?.pictures?.sizes);
            return {
              name: _v0.name,
              avaSrc: _v1,
              avaSrcSet: _v2,
              role: _v0.role,
              uri: _v0.uri,
              userLink: _v0.user?.link ?? ""
            };
          });
        }(),
        _v15 = _v10?.privacy,
        _v16 = !!_v15?.view && _v176.PrivacyUtility.isPublicFacingPrivacy(_v15?.view),
        {
          dateAdded: _v17,
          description: _v18,
          like: _v19,
          owner: _v20,
          portrait: _v21,
          views: _v22
        } = _v10?.page || {},
        _v23 = (0, _v5.getVideoDetailsDisplayConfig)({
          showLike: _v19 && _v1,
          showDateAdded: _v17 && _v2,
          showDescription: _v18 && _v3,
          showTitle: _v6,
          showViews: _v22 && _v7
        }),
        _v24 = (0, _v45.getUploaderDetailsDisplayConfig)({
          showByline: (_v16 || _v20) && _v5,
          showProfile: (_v16 || _v21) && _v4
        }),
        {
          onGetTotalVideos: _v25,
          data: _v26,
          error: _v27,
          loading: _v28
        } = (_v0 => {
          let _v1 = (0, _v37.useViewer)(),
            [_v2, _v3] = (0, _v58.useGetAlbumVideoLazy)(),
            {
              albumId: _v4,
              password: _v5,
              isShowcaseEmbedded: _v6,
              referrer: _v7
            } = (0, _v16.useAlbumStore)(_v0 => ({
              albumId: _v0.albumId,
              password: _v0.hashedPass,
              isShowcaseEmbedded: _v0.isShowcaseEmbedded,
              referrer: _v0.referrer
            }));
          return {
            onGetTotalVideos: () => {
              if (!_v1 || !_v0) return null;
              _v2({
                where: {
                  albumId: _v4,
                  videoId: _v0
                },
                select: ["user.metadata.publicVideos.total"],
                query: {
                  fetchUserProfile: "1",
                  isEmbed: _v6,
                  referrer: _v7,
                  ...(_v5 && {
                    password: _v5
                  })
                },
                headers: {
                  Accept: `application/vnd.vimeo.*+json;version=${_v53.VIDEOS_API_VERSION}`
                }
              });
            },
            ..._v3
          };
        })(_v8);
      if (!_v8 || _v11) return (0, _v1.jsx)(_v172.ModuleWrapper, {
        children: (0, _v1.jsx)(_v174.VideoDetailsSkeleton, {})
      });
      if (!_v10) return null;
      let {
          createdTime: _v29,
          language: _v30,
          name: _v31,
          descriptionHtml: _v32,
          user: _v33,
          isRatedMature: _v34,
          is360Video: _v35,
          license: _v36,
          categories: _v37,
          isDolbyVision: _v38,
          isHdr10: _v39,
          isHdr10Plus: _v40,
          aiContent: _v41,
          isAdvert: _v42,
          stats: _v43
        } = _v10,
        _v44 = _v29 ? (0, _v177.timeBetween)(new Date(_v29), new Date()) : "",
        _v45 = (0, _v5.getViewsString)(_v43?.plays),
        _v46 = {
          ..._v33
        },
        _v47 = _v26?.user?.metadata?.publicVideos;
      return _v47 && _v33 && (_v46 = {
        ..._v33,
        metadata: {
          ..._v33?.metadata,
          publicVideos: _v47
        }
      }), (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v172.ModuleWrapper, {
          sx: {
            color: "dark" === _v13 ? "white" : "black"
          },
          children: (0, _v1.jsxs)(_v173.VideoDetailsBase, {
            createdTime: _v29,
            language: _v30,
            title: _v31,
            description: _v32 ?? void 0,
            isRatedMature: _v34,
            is360Video: _v35,
            creativeCommonsDescriptor: _v36,
            credits: _v14,
            categories: _v37,
            isDolbyVision: _v38,
            isHdr10: _v39,
            isHdr10Plus: _v40,
            aiContent: _v41,
            isAdvert: _v42,
            isStreaming: "streaming" === _v12,
            isLiveEvent: _v9,
            timeSinceCreatedString: _v44,
            viewsString: _v45,
            ..._v23,
            children: [_v0, (0, _v1.jsx)(_v175.default, {
              user: _v46,
              videoId: _v8,
              onProfileMouseOver: () => {
                _v26 || _v27 || _v28 || _v25();
              },
              ..._v24
            })]
          })
        })
      });
    },
    _v181 = () => {
      var _v0;
      let _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        {
          isOffsite: _v6,
          isShowcaseEmbedded: _v7,
          albumId: _v8,
          albumOwnerId: _v9,
          albumPrivacy: _v10,
          noOfVideos: _v11
        } = (0, _v16.useAlbumStore)(_v0 => ({
          isOffsite: _v0.isOffsite,
          isShowcaseEmbedded: _v0.isShowcaseEmbedded,
          albumId: _v0.albumId,
          albumOwnerId: _v0.albumOwnerId,
          albumPrivacy: _v0.albumPrivacy,
          noOfVideos: _v0.noOfVideos
        })),
        _v12 = (0, _v16.useAlbumStore)(_v0 => _v0.bannerHeight),
        [_v13] = (0, _v31.useMediaQuery)(`(min-width: ${_v32.bokehTheme.breakpoints.md})`),
        {
          selectedId: _v14,
          isVideoClip: _v15
        } = _v52(),
        _v16 = (0, _v37.useViewer)(),
        {
          playback: {
            enableAskAi: _v17,
            enableComments: _v18,
            enableLike: _v19,
            enableShare: _v20,
            showDateAdded: _v21,
            showDescription: _v22,
            showProfileImage: _v23,
            showProfileName: _v24,
            showTitle: _v25,
            showViews: _v26
          },
          user: _v27,
          albumLayout: _v28,
          hideNav: _v29,
          showVideoDetails: _v30,
          isLoading: _v31
        } = (0, _v23.useGetShowcase)(),
        {
          clips: _v32,
          isShowcaseEmpty: _v33
        } = _v55(),
        _v34 = (0, _v38.useIsClipView)(),
        {
          clip: _v35,
          isLoading: _v36
        } = _v61(_v14),
        _v37 = _v35?.clipId ?? "",
        _v38 = _v35?.clipRequestId ?? "",
        _v39 = _v35?.live?.chat?.roomId ?? 0,
        {
          canInteract: _v40
        } = (_v0 => {
          let {
            user: _v1
          } = (0, _v37.useViewer)() ?? {};
          return {
            canInteract: (0, _v3.useMemo)(() => !_v1 || _v1 && !!_v0, [_v0, _v1])
          };
        })(_v35?.metadata?.interactions?.interact),
        {
          showComments: _v41
        } = (_v0 = _v35?.page?.comments || !1, _v1 = (0, _v37.useViewer)(), _v1?.isSimplifiedSite ? {
          showComments: !1
        } : {
          showComments: !!_v40 && _v0
        }),
        {
          isVideoProcessing: _v42
        } = function ({
          clip: _v0,
          isLoading: _v1 = !1
        }) {
          if (_v1 || !_v0) return {
            videoStatus: _v0?.status,
            isVideoProcessing: null,
            isLoading: _v1
          };
          if ("live" !== _v0.type) return {
            videoStatus: _v0.status,
            isVideoProcessing: "available" !== _v0.status,
            isLoading: _v1
          };
          let {
              status: _v2
            } = _v0.live || {},
            _v3 = null;
          switch (_v2) {
            case "archiving":
            case "archiving_error":
              _v3 = !0;
              break;
            case "unavailable":
            case "pending":
            case "ready":
            case "streaming":
              _v3 = !1;
              break;
            default:
              _v3 = "available" !== _v0.status;
          }
          return {
            videoStatus: _v0.status,
            isVideoProcessing: _v3,
            isLoading: _v1
          };
        }({
          clip: _v35,
          isLoading: _v36
        }),
        _v43 = !!_v35?.page?.share && _v20,
        _v44 = !!_v35?.page?.like && _v19,
        _v45 = !!(_v37 && _v35?.privacy.download && (0, _v5.isArchivedOrNonLive)(_v35)),
        _v46 = !!_v35?.metadata?.interactions?.like,
        _v47 = _v17 && !!_v35?.metadata?.interactions?.askAiViewer && !_v35?.metadata?.interactions?.askAiViewer?.disabled,
        _v48 = _v41 && _v18 && !_v7 && !_v6,
        {
          isSideBySideActive: _v49,
          isSideModuleOpen: _v50,
          activeSideModule: _v51,
          activeMobileDrawer: _v52,
          setActiveMobileDrawer: _v53,
          setActiveSideModule: _v54,
          toggleSideBySideView: _v55
        } = (0, _v20.useLayout)(),
        {
          trackShowcasePageDisplayed: _v56
        } = (0, _v36.useShowcaseTracking)(),
        _v57 = (0, _v3.useRef)(null),
        _v58 = (0, _v3.useRef)(!1);
      (() => {
        let _v0 = (0, _v57.useRouter)(),
          _v1 = (0, _v5.getSearchParams)().get("video"),
          {
            isSideModuleOpen: _v2,
            onClose: _v3
          } = (0, _v20.useLayout)();
        (0, _v3.useEffect)(() => (_v0.beforePopState(() => (_v1 && _v2 && _v3?.(), !0)), () => {
          _v0.beforePopState(() => !0);
        }), [_v0, _v1, _v2, _v3]);
      })(), _v2 = (0, _v16.useAlbumStore)(_v0 => _v0.isShowcaseEmbedded), _v3 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId), _v4 = (0, _v3.useCallback)(() => {
        try {
          let _v0 = window?.document?.referrer ?? "*";
          if (_v0 && window.parent && window.parent !== window) {
            let _v0 = document.documentElement.offsetHeight || document.body.offsetHeight;
            window.parent.postMessage({
              showcaseHeight: _v0,
              showcaseId: _v3
            }, _v0);
          }
        } catch (_v0) {
          console.error("Error posting message:", _v0);
        }
      }, [_v3]), _v5 = (0, _v3.useMemo)(() => (0, _v62.default)(_v4, 500), [_v4]), (0, _v3.useEffect)(() => {
        let _v0;
        if (_v2) {
          _v4();
          try {
            (_v0 = new ResizeObserver(() => _v5())).observe(document.documentElement);
          } catch (_v0) {
            console.error("ResizeObserver not supported, falling back to resize event", _v0), window.addEventListener("resize", _v5);
          }
          return () => {
            _v0 ? _v0.disconnect() : window.removeEventListener("resize", _v5), _v5.cancel();
          };
        }
      }, [_v2, _v5, _v4]);
      let {
        isInteractionToosEnabled: _v59,
        isLiveEvent: _v60,
        setIsInteractionToolsEnabled: _v61
      } = (() => {
        let {
            activeSideModule: _v0,
            activeMobileDrawer: _v1,
            onClose: _v2
          } = (0, _v20.useLayout)(),
          {
            isLiveEvent: _v3
          } = _v52(),
          [_v4, _v5] = (0, _v3.useState)(!1);
        return (0, _v3.useEffect)(() => {
          "LIVE_TOOLS" !== _v0 && "LIVE_TOOLS" !== _v1 || _v3 || _v2?.();
        }, [_v1, _v0, _v3, _v2]), {
          isInteractionToosEnabled: _v4,
          isLiveEvent: _v3,
          setIsInteractionToolsEnabled: _v5
        };
      })();
      return (0, _v3.useEffect)(() => {
        if (!_v58.current) {
          var _v0;
          let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
          _v0 = _v27?.uri || "", _v0 = _v48(_v0).toString(), _v1 = (0, _v97.buildViewBpContext)({
            view_type: "pageview",
            feature: null
          }), _v2 = _v101(), _v3 = (0, _v93.buildTeamBpContextFromTeamUser)(_v16?.teamUser), _v4 = _v105({
            element: "screen"
          }), _v5 = _v103(), _v6 = {
            ..._v1,
            ..._v2,
            ..._v3,
            ..._v4,
            ..._v5
          }, (0, _v99.sendBpEventWithContexts)("vimeo.showcase_gallery_page_load", _v6, 2, {
            showcase_owner_id: _v0
          }), _v58.current = !0;
        }
      }, [_v27, _v16]), (0, _v35.usePicoEffect)(() => {
        if (_v31 || !_v9 || !_v10 || !_v16) return !1;
        _v56({
          showcaseId: _v8.toString(),
          showcaseOwnerId: _v9.toString(),
          showcaseVideoCount: _v11 ?? 0,
          showcasePageLayout: _v28 ?? "grid",
          showcasePagePrivacy: _v10,
          showcasePageViewerAuthStatus: (0, _v34.deriveViewerAuthStatus)(_v16),
          referrerPage: (0, _v34.deriveReferrerPage)()
        });
      }, [_v8, _v9, _v10, _v11, _v28, _v31, _v16], {
        once: !0
      }), (0, _v3.useEffect)(() => {
        _v47 || ("VIMEO_AI" === _v51 && _v54(""), "VIMEO_AI" === _v52 && _v53(""));
      }, [_v47, _v51, _v52, _v54, _v53]), (0, _v3.useEffect)(() => {
        !_v34 && _v49 && _v55();
      }, [_v34, _v49, _v55]), (0, _v3.useEffect)(() => {
        var _v0, _v1, _v2;
        let _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10,
          _v11,
          _v12 = _v32?.find?.(_v0 => _v0.clipId === _v14);
        _v12 && _v14 && (_v0 = _v27?.uri || "", _v1 = _v12?.privacy?.view, _v2 = _v12?.user?.uri, _v3 = _v48(_v0).toString(), _v4 = _v48(_v2), _v5 = _v102(), _v6 = (0, _v95.buildVideoBpContext)({
          video_id: parseFloat(_v14),
          video_owner_id: _v4,
          video_privacy: _v1
        }), _v7 = _v101({
          page_name: "showcase_recipient"
        }), _v8 = (0, _v93.buildTeamBpContextFromTeamUser)(_v16?.teamUser), _v9 = _v105(), _v10 = _v103(), _v11 = {
          ..._v5,
          ..._v6,
          ..._v7,
          ..._v8,
          ..._v9,
          ..._v10
        }, (0, _v99.sendBpEventWithContexts)("vimeo.page_load", _v11, 2, {
          showcase_owner_id: _v3
        }));
      }, [_v32, _v14, _v27?.uri]), (0, _v1.jsxs)(_v69, {
        children: [(0, _v1.jsx)(_v135, {
          isShowcaseEmpty: _v33
        }), (0, _v1.jsxs)(_v33.ClipLayout, {
          canSeePlaylist: !0,
          showcaseConfig: {
            isShowcaseClipView: _v34,
            isShowcaseEmpty: _v33
          },
          isLiveEventView: _v60 && _v50,
          showComments: _v15 && _v48,
          children: [(0, _v1.jsx)(_v33.ClipLayout.Media, {
            ref: _v57,
            children: (0, _v1.jsx)(_v26.AnimatePresence, {
              children: _v34 ? (0, _v1.jsx)(_v112, {
                bannerHeight: _v12
              }) : (0, _v1.jsx)(_v81, {
                bannerHeight: _v12,
                isShowcaseEmpty: _v33,
                showVideoDetails: _v30
              })
            })
          }), _v34 ? (0, _v1.jsx)(_v33.ClipLayout.ContentStack, {
            children: (0, _v1.jsxs)(_v180, {
              enableLike: _v19,
              showDateAdded: _v21,
              showDescription: _v22,
              showProfileImage: _v23,
              showProfileName: _v24,
              showTitle: _v25,
              showViews: _v26,
              children: [_v60 ? (0, _v1.jsx)(_v83, {
                isInteractionToolsEnabled: _v59
              }) : null, _v15 && (0, _v1.jsx)(_v156, {
                clipId: _v37,
                canInteract: _v40,
                clipRequestId: _v38,
                showComments: _v48 && !_v13,
                showShare: _v43,
                showLike: _v44,
                showAskAi: _v47,
                canLike: _v46,
                showDownload: _v45,
                isVideoProcessing: !!_v42
              })]
            })
          }) : null, (0, _v1.jsx)(_v33.ClipLayout.ShowcasePlaylist, {
            children: (0, _v1.jsx)(_v27.Box, {
              position: "relative",
              w: _v39.commonWrapperWidth,
              left: _v39.commonWrapperLeft,
              children: _v34 ? (0, _v1.jsx)(_v161, {
                playerContainerRef: _v57,
                bannerHeight: _v12
              }) : (0, _v1.jsx)(_v108, {
                playerContainerRef: _v57,
                bannerHeight: _v12
              })
            })
          }), (0, _v1.jsxs)(_v30.Show, {
            above: "md",
            children: [_v15 && _v48 ? (0, _v1.jsx)(_v33.ClipLayout.Comments, {
              globalNavigationHidden: _v29,
              children: (0, _v1.jsx)(_v171, {
                clipId: _v37,
                clipOwnerUri: _v35?.user?.uri,
                clipRequestId: _v38,
                privacyView: _v35?.privacy?.view,
                showComments: _v48
              })
            }) : null, _v60 ? (0, _v1.jsx)(_v33.ClipLayout.SideModule, {
              globalNavigationHidden: _v29,
              children: (0, _v1.jsx)(_v128, {
                roomId: _v39,
                isEventLoading: _v36,
                playerContainerRef: _v57,
                setIsInteractionToolsEnabled: _v61
              })
            }) : null, _v50 ? (0, _v1.jsxs)(_v33.ClipLayout.SideModule, {
              globalNavigationHidden: _v29,
              children: ["TRANSCRIPT" === _v51 ? (0, _v1.jsx)(_v28.Center, {
                h: "100%",
                children: "SIDE MODULE"
              }) : null, "CHAPTERS" === _v51 ? (0, _v1.jsx)(_v28.Center, {
                h: "100%",
                children: "SIDE MODULE"
              }) : null, "VIMEO_AI" === _v51 && _v47 ? (0, _v1.jsx)(_v159, {
                clipId: _v37,
                clipRequestId: _v38
              }, _v37) : null]
            }) : null]
          }), (0, _v1.jsx)(_v29.Hide, {
            above: "md",
            children: _v15 ? (0, _v1.jsxs)(_v33.ClipLayout.MobileDrawer, {
              playerContainerRef: _v57,
              children: ["TRANSCRIPT" === _v52 ? (0, _v1.jsx)(_v28.Center, {
                h: "100%",
                children: "SIDE MODULE"
              }) : null, "CHAPTERS" === _v52 ? (0, _v1.jsx)(_v28.Center, {
                h: "100%",
                children: "SIDE MODULE"
              }) : null, "VIMEO_AI" === _v52 && _v47 ? (0, _v1.jsx)(_v159, {
                clipId: _v37,
                clipRequestId: _v38
              }, _v37) : null, "COMMENTS" === _v52 ? (0, _v1.jsx)(_v171, {
                clipId: _v37,
                clipOwnerUri: _v35?.user?.uri,
                clipRequestId: _v38,
                privacyView: _v35?.privacy?.view,
                showComments: _v48
              }) : null]
            }) : (0, _v1.jsx)(_v1.Fragment, {
              children: (0, _v1.jsx)(_v128, {
                isEventLoading: _v36,
                isMobileDrawer: !0,
                playerContainerRef: _v57,
                setIsInteractionToolsEnabled: _v61,
                roomId: _v39
              })
            })
          })]
        })]
      });
    };
  function _v182() {
    let _v0 = (0, _v16.useAlbumStore)(_v0 => _v0.albumId),
      _v1 = (0, _v16.useAlbumStore)(_v0 => _v0.setBannerHeight),
      _v2 = (0, _v5.getSearchParams)().get("height");
    _v2 && _v1(_v2);
    let _v3 = (0, _v6.useShowcaseSSR)(),
      {
        isLoading: _v4,
        hideNav: _v5,
        brandColor: _v6,
        colorMode: _v7,
        thumbnailUrl: _v8
      } = (0, _v23.useGetShowcase)();
    if ((0, _v22.useLeadFormPrefillParentListener)(String(_v0), _v21.ENTITY_TYPE.SHOWCASE), _v4 && !_v3?.albumData) return (0, _v1.jsx)(_v13.LoadingPage, {});
    let _v9 = "dark" === _v7 ? _v18.DarkMode : _v18.LightMode;
    return (0, _v1.jsx)(_v9, {
      children: (0, _v1.jsxs)(_v19.VStack, {
        spacing: 0,
        align: "stretch",
        flex: "1",
        backgroundColor: "background",
        children: [_v5 ? null : (0, _v1.jsx)(_v25.NavigationModule, {}), (0, _v1.jsx)(_v17.AccentThemeProvider, {
          accentColor: _v8 && !_v6 ? _v53.DEFAULT_BRAND_COLOR_DARK_THEME : _v6,
          children: (0, _v1.jsx)(_v9, {
            children: (0, _v1.jsx)(_v20.LayoutProvider, {
              isShowcaseLayout: !0,
              children: (0, _v1.jsx)(_v181, {})
            })
          })
        }), _v5 ? null : (0, _v1.jsx)(_v24.FooterModule, {})]
      })
    });
  }
  _v0.s(["ViewerShowcasesAuthorization", 0, ({
    albumIdOrUrl: _v0,
    isShowcaseEmbedded: _v1 = !1
  }) => {
    let _v2 = (0, _v5.getSearchParams)().get("sh"),
      _v3 = (0, _v6.useShowcaseSSR)(),
      {
        data: _v4,
        error: _v5,
        isLoading: _v6,
        mutate: _v7
      } = (0, _v8.useShowcaseAuth)(_v0, {
        isShowcaseEmbedded: _v1,
        fallbackData: _v3?.authData
      }),
      _v8 = _v5 ?? (!_v4 && _v3?.authError ? _v3.authError : void 0),
      _v9 = _v4?.metadata?.id || _v8?.res?.metadata?.id,
      {
        registrationEnabled: _v10,
        registrationLoading: _v11,
        setLeadUuid: _v12
      } = (0, _v7.useLeadCaptureRegistration)(_v9),
      _v13 = (0, _v9.useSSGShowcaseSignature)(_v9),
      [_v14, _v15] = (0, _v3.useState)(!1),
      _v16 = (0, _v3.useCallback)(() => {
        _v15(!0), _v7();
      }, [_v7]);
    if (_v8?.status === 404) return (0, _v1.jsx)(_v11.ErrorPage, {});
    if (!(_v3?.authData || _v3?.authError || !_v6 && (_v4 || _v8)) || _v11 || !_v9) return (0, _v1.jsx)(_v13.LoadingPage, {});
    let _v17 = window.location.hostname === _v4?.metadata?.domain || window.location.hostname === _v8?.res?.metadata?.domain;
    if (_v8) switch (_v8?.res?.errorCode) {
      case _v8.ShowcaseAuthErrorCode.passwordPrivacy:
        return (0, _v1.jsx)(_v16.AlbumStoreProvider, {
          albumId: _v9,
          isShowcaseEmbedded: _v1,
          children: (0, _v1.jsx)(_v14.PasswordPage, {
            isCookiesDisabled: _v14,
            onSuccess: _v16
          })
        });
      case _v8.ShowcaseAuthErrorCode.teamPrivacy:
        return (0, _v1.jsx)(_v16.AlbumStoreProvider, {
          albumId: _v9,
          isShowcaseEmbedded: _v1,
          isOffsite: _v17,
          children: (0, _v1.jsx)(_v10.BrandedLoginPage, {
            ...(_v8?.res?.metadata ?? {})
          })
        });
      case _v8.ShowcaseAuthErrorCode.teamPrivacyLoggedInUser:
        return (0, _v1.jsx)(_v15.UserNotAllowedPage, {
          ...(_v8?.res?.metadata ?? {})
        });
      case _v8.ShowcaseAuthErrorCode.embedOnly:
      case _v8.ShowcaseAuthErrorCode.unknownReason:
      case _v8.ShowcaseAuthErrorCode.unlisted:
      default:
        return (0, _v1.jsx)(_v11.ErrorPage, {});
    }
    return _v10 ? (0, _v1.jsx)(_v12.LeadCapturePage, {
      albumId: _v9.toString(),
      setLeadUuid: _v12
    }) : (0, _v1.jsxs)(_v16.AlbumStoreProvider, {
      albumId: _v9,
      albumSignature: _v13,
      hashedPass: _v4?.hashedPass || "",
      isShowcaseEmbedded: _v1,
      isOffsite: _v17,
      showcaseHash: _v2 || "",
      children: [_v4?.metadata?.name && (0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: _v4.metadata.name
        })
      }), (0, _v1.jsx)(_v4.UpsellModalProvider, {
        children: (0, _v1.jsx)(_v182, {})
      })]
    });
  }], 0);
}