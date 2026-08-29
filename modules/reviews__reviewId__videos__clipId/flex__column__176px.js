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
    _v34 = _v0.i(0);
  let _v35 = ({
      isMobile: _v0,
      name: _v1,
      value: _v2
    }) => (0, _v1.jsxs)(_v31.Box, {
      display: "flex",
      gap: "md",
      flexDirection: _v0 ? "column" : "row",
      children: [(0, _v1.jsx)(_v32.Header, {
        minW: "176px",
        size: "sm",
        children: _v1
      }), (0, _v1.jsx)(_v33.Description, {
        description: _v2
      })]
    }),
    _v36 = ({
      title: _v0,
      description: _v1
    }) => {
      let _v2 = (0, _v16.useIsMobile)();
      return (0, _v1.jsxs)(_v31.Box, {
        display: "flex",
        flexDirection: "column",
        flexGrow: _v2 ? 1 : "unset",
        backgroundColor: "fill-surface",
        borderRadius: "md",
        width: "100%",
        paddingX: "lg",
        paddingY: "md",
        gap: "lg",
        wordBreak: "break-word",
        children: [(0, _v1.jsx)(_v35, {
          isMobile: _v2,
          name: (0, _v34.translate)({
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
          }),
          value: _v0
        }), "<br />\n" !== _v1 && (0, _v1.jsx)(_v35, {
          isMobile: _v2,
          name: (0, _v34.translate)({
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
          }),
          value: _v1
        })]
      });
    },
    _v37 = ({
      reviewId: _v0,
      videoId: _v1,
      versionId: _v2,
      videoTitle: _v3,
      embedPlayerConfigUrl: _v4,
      analyticsProps: _v5,
      toggleDrawer: _v6,
      description: _v7,
      isLoading: _v8,
      isCommentsPanelOpen: _v9,
      showResolvedComments: _v10,
      showPasswordPage: _v11,
      isVideoProcessing: _v12,
      clipOwnerId: _v13,
      videoContentAspectRatio: _v14,
      onPlaybackRateChange: _v15
    }) => {
      let _v16 = (0, _v16.useIsMobile)();
      return _v11 ? (0, _v1.jsx)(_v29.PasswordPage, {
        reviewId: _v0
      }) : (0, _v1.jsxs)(_v14.Flex, {
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: _v16 || _v9 ? "100%" : "80%",
        gap: _v16 || !_v9 ? "md" : "0",
        children: [(0, _v1.jsx)(_v28.CommentContextProvider, {
          children: (0, _v1.jsx)(_v30.ReviewPlayerContainer, {
            isLoading: _v8,
            clipId: _v1.toString(),
            closeDrawer: _v6,
            videoVersionUri: _v2 ? (0, _v20.formVersionRedirectUri)(_v2, _v1.toString()) : void 0,
            showComments: _v9,
            videoName: _v3,
            embedPlayerConfigUrl: _v4,
            isDeleted: !1,
            isReplaceOverQuota: !1,
            hasEnterprise: !1,
            isMobile: _v16,
            analyticsProps: _v5,
            showVersionDetails: !1,
            playerContainerProps: {
              paddingX: _v16 ? "0px" : "md",
              paddingBottom: "0px",
              paddingTop: _v16 ? "0px" : "md"
            },
            isPreviousVersion: !1,
            allowTimecodeComments: !0,
            showResolvedComments: _v10,
            hasTitleAndDescription: !_v9,
            isVideoProcessing: _v12,
            isShowAdvancedPlayBar: !0,
            clipOwnerId: _v13,
            videoContentAspectRatio: _v14,
            onPlaybackRateChange: _v15
          })
        }), !_v9 && (0, _v1.jsx)(_v14.Flex, {
          width: "100%",
          justifyContent: "center",
          height: _v16 ? "100%" : "auto",
          paddingX: _v16 ? "0px" : "4",
          children: (0, _v1.jsx)(_v36, {
            title: _v3,
            description: _v7
          })
        })]
      });
    },
    _v38 = ({
      embedPlayerConfigUrl: _v0,
      reviewId: _v1,
      showPasswordPage: _v2,
      videoId: _v3,
      versionId: _v4
    }) => {
      let {
          videoData: _v5,
          videoDataLoading: _v6,
          error: _v7,
          currentVersionId: _v8,
          sequenceNumber: _v9,
          totalVersionsCount: _v10
        } = (0, _v21.useVideoData)(_v3.toString(), _v1),
        {
          allowComments: _v11,
          showAllVersions: _v12,
          allowDownloads: _v13,
          showResolvedComments: _v14,
          allowStatusChange: _v15
        } = (0, _v3.useContext)(_v12.ReviewLinkContext),
        {
          downloadsError: _v16,
          isDownloadsLoading: _v17,
          downloadConfig: _v18
        } = (0, _v24.useReviewLinkVideoDownloads)(_v3, _v1, _v4 ?? _v8, !_v13),
        _v19 = (0, _v13.usePathname)(),
        _v20 = (0, _v27.useViewer)(),
        _v21 = (0, _v16.useIsMobile)(),
        {
          trackReviewPageDisplayed: _v22,
          trackReviewPlaybackSpeedChanged: _v23
        } = (0, _v9.useReviewTracking)(),
        _v24 = (0, _v20.idFromUri)(_v5?.user?.uri)?.toString() ?? null,
        _v25 = _v5?.width != null && _v5.width > 0 && _v5?.height != null && _v5.height > 0 ? _v5.width / _v5.height : void 0;
      (0, _v18.usePicoEffect)(() => {
        if (_v6 || !_v5 || !_v20) return !1;
        let _v0 = (0, _v20.idFromUri)(_v5?.user?.uri);
        _v22({
          reviewId: _v1,
          clipId: _v3.toString(),
          clipOwnerId: _v0 ? _v0.toString() : null,
          reviewPageViewerAuthStatus: (0, _v17.deriveViewerAuthStatus)(_v20)
        });
      }, [_v6, _v5, _v1, _v3, _v20], {
        once: !0
      });
      let [_v26, _v27] = (0, _v3.useState)(!1),
        _v28 = (_v5?.metadata?.connections?.versions?.totalIncludingDeleted ?? 0) <= 1 && _v5?.status !== "available",
        _v29 = _v17 || _v16 || !_v13 || _v28,
        [_v30, _v31] = (0, _v3.useState)(!1),
        _v32 = (0, _v20.getReviewPasswordHashFromCookie)(_v1);
      (0, _v3.useEffect)(() => {
        _v31(!!_v11);
      }, [_v11]), (0, _v25.useReviewBPViewPage)(_v3, "clip", _v32, "vimeo.open_review_page", "review_page");
      let _v33 = (0, _v3.useMemo)(() => ({
          webContextFields: {
            page_name: "review_page",
            path: _v19
          },
          videoContextFields: {
            video_privacy: _v5?.privacy?.view,
            video_owner_id: (0, _v20.idFromUri)(_v5?.user.uri),
            video_id: _v3,
            content_rating: _v5?.contentRating,
            video_version_id: Number(_v4 ?? 0)
          },
          folderContextFields: {
            folder_id: (0, _v20.idFromUri)(_v5?.parentProject?.uri),
            access_permission_to_folder: (0, _v20.getPermissionToFolder)(_v5?.parentProject?.metadata?.interactions)
          }
        }), [_v3, _v19, _v5?.contentRating, _v5?.privacy?.view, _v5?.parentProject?.metadata?.interactions, _v5?.parentProject?.uri, _v5?.user.uri, _v4]),
        _v34 = (0, _v3.useCallback)(_v0 => {
          _v23({
            reviewId: _v1,
            clipId: _v3.toString(),
            clipOwnerId: _v24,
            reviewNewSpeed: `${_v0}x`
          });
        }, [_v1, _v3, _v24, _v23]),
        _v35 = _v0 => {
          _v31(_v0 => !_v0), (0, _v15.sendCommentBPEvent)({
            eventName: _v0 ? "vimeo.close_comment_panel" : "vimeo.open_comments",
            copy: _v0 ? "X" : "Comments",
            settingValue: _v0 ?? !_v30,
            settingOption: null,
            element: "button",
            viewer: _v20 ?? void 0,
            videoId: _v3,
            analyticsProps: _v33
          });
        };
      return _v6 && !_v7 ? (0, _v1.jsx)(_v26.default, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v14.Flex, {
          direction: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v19.ReviewHeader, {
            videoName: _v5?.name ?? "",
            videoId: _v3,
            onDownload: () => {
              _v27(!0);
            },
            isDownloadDisabled: _v29,
            analyticsProps: _v33,
            toggleDrawer: _v35,
            totalVersionsCount: _v10,
            currentVersionSequenceNumber: _v9,
            reviewStatus: _v5?.reviewStatus,
            reviewId: _v1,
            showReviewStatus: _v15,
            showComments: _v11,
            showDownload: _v13,
            showAllVersions: _v12,
            showRestore: !1,
            showDeleteVersion: !1,
            showNewVersion: !1,
            isVideoProcessing: _v28
          }), (0, _v1.jsx)(_v37, {
            reviewId: _v1,
            videoId: _v3,
            videoTitle: _v5?.name ?? "",
            description: _v5?.descriptionHtml ?? "",
            versionId: _v4,
            embedPlayerConfigUrl: _v0,
            analyticsProps: _v33,
            toggleDrawer: _v35,
            isLoading: _v6,
            isCommentsPanelOpen: _v30,
            showResolvedComments: _v14,
            showPasswordPage: _v2,
            isVideoProcessing: _v28,
            clipOwnerId: _v24,
            videoContentAspectRatio: _v25,
            onPlaybackRateChange: _v34
          }), !_v29 && _v4 && (0, _v1.jsx)(_v23.DownloadVersionModal, {
            isOpen: _v26,
            onClose: () => _v27(!1),
            videoId: _v3,
            downloadConfig: _v18,
            versionSequenceNumber: _v9,
            versionUri: (0, _v20.formVersionRedirectUri)(_v4, _v3.toString()),
            pageName: _v33?.webContextFields?.page_name,
            reviewId: _v1
          })]
        }), !_v21 && (0, _v1.jsx)(_v22.ReviewFooter, {})]
      });
    },
    _v39 = ({
      embedPlayerConfigUrl: _v0,
      playerAssetUrls: _v1,
      reviewId: _v2,
      showPasswordPage: _v3,
      versionId: _v4,
      videoId: _v5
    }) => (0, _v1.jsx)(_v12.ReviewLinkContextProvider, {
      resourceId: _v5,
      resourceType: "clip",
      reviewId: _v2,
      children: (0, _v1.jsx)(_v10.PlayerContextProvider, {
        type: _v11.PlayerType.VimeoPlayer,
        assetUrls: _v1,
        children: (0, _v1.jsx)(_v38, {
          embedPlayerConfigUrl: _v0,
          reviewId: _v2,
          showPasswordPage: _v3,
          videoId: _v5,
          versionId: _v4
        })
      })
    });
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
    embedPlayerConfigUrl: _v0,
    playerAssetUrls: _v1,
    reviewId: _v2,
    showPasswordPage: _v3,
    versionId: _v4,
    videoId: _v5,
    ogTitle: _v6,
    ogDescription: _v7,
    ogImage: _v8,
    ogUrl: _v9,
    isDisabledOrExpired: _v10
  }) => {
    let {
        trackReviewPageOpened: _v11
      } = (0, _v9.useReviewTracking)(),
      _v12 = (0, _v3.useRef)(!1);
    return ((0, _v3.useEffect)(() => {
      _v12.current = !1;
    }, [_v5, _v2]), (0, _v3.useEffect)(() => {
      !_v12.current && _v5 && _v2 && (_v12.current = _v11({
        videoId: _v5,
        reviewId: _v2,
        isExpired: !!_v10
      }));
    }, [_v5, _v2, _v10, _v11]), _v10) ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("meta", {
          name: "robots",
          content: "noindex,nofollow"
        })
      }), (0, _v1.jsx)(_v41.default, {}), (0, _v1.jsx)(_v40.DisabledReviewLinkErrorPage, {})]
    }) : _v1 ? _v5 && _v2 || _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("meta", {
          name: "robots",
          content: "noindex,nofollow"
        }), (0, _v1.jsx)("meta", {
          property: "og:title",
          content: _v6
        }, "og:title"), (0, _v1.jsx)("meta", {
          property: "og:description",
          content: _v7
        }, "og:description"), (0, _v1.jsx)("meta", {
          property: "og:type",
          content: "website"
        }, "og:type"), (0, _v1.jsx)("meta", {
          property: "og:url",
          content: _v9
        }, "og:url"), (0, _v1.jsx)("meta", {
          property: "og:site_name",
          content: "Vimeo"
        }, "og:site_name"), _v8 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)("meta", {
            property: "og:image",
            content: _v8
          }, "og:image"), (0, _v1.jsx)("meta", {
            property: "og:image:secure_url",
            content: _v8
          }, "og:image:secure_url"), (0, _v1.jsx)("meta", {
            property: "og:image:type",
            content: "image/jpeg"
          }, "og:image:type"), (0, _v1.jsx)("meta", {
            property: "og:image:width",
            content: "640"
          }, "og:image:width"), (0, _v1.jsx)("meta", {
            property: "og:image:height",
            content: "360"
          }, "og:image:height"), (0, _v1.jsx)("meta", {
            property: "og:image:alt",
            content: _v6
          }, "og:image:alt")]
        })]
      }), (0, _v1.jsx)(_v39, {
        embedPlayerConfigUrl: _v0,
        playerAssetUrls: _v1,
        reviewId: _v2,
        versionId: _v4,
        videoId: _v5,
        showPasswordPage: _v3
      })]
    }) : null : (0, _v1.jsx)(_v26.default, {});
  };
  (0, _v5.withPageSetup)(async _v0 => {
    let _v1;
    if (_v0.res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"), !_v0.query.reviewId || Array.isArray(_v0.query.clipId) || Array.isArray(_v0.query.reviewId)) return {
      notFound: !0
    };
    let _v2 = Number(_v0.query.clipId),
      _v3 = _v0.query.reviewId;
    if (isNaN(_v2)) return {
      notFound: !0
    };
    let _v4 = _v0.req.cookies;
    _v4[`${_v3}_password`] && (_v1 = _v4[`${_v3}_password`]);
    let _v5 = !1,
      _v6 = !1;
    try {
      _v6 = (await (0, _v7.getVideoReviewLink)({
        headers: {
          ..._v0.headers
        },
        baseUrl: _v0.baseUrl,
        where: {
          videoId: _v2,
          reviewLinkId: _v3
        },
        select: ["uri", "isDark", "isEnabled"],
        query: {
          password: _v1
        }
      })).isDark;
    } catch (_v0) {
      if (!_v0?.res || "function" != typeof _v0?.res?.json) return {
        notFound: !0
      };
      let _v1 = await _v0.res.json();
      if (0 === _v1.error_code || 0 === _v1.error_code) _v5 = !0;else if (0 === _v1.error_code) return {
        props: {
          hasThemeSupport: !0,
          bypassAgeVerification: !0,
          embedPlayerConfigUrl: "",
          videoId: _v2,
          reviewId: _v3,
          versionId: 0,
          isDisabledOrExpired: !0
        }
      };else return {
        notFound: !0
      };
    }
    let _v7 = await (0, _v42.getClipSignature)(_v2),
      _v8 = _v5 ? {
        WatchLater: 0,
        Like: 0,
        share: 0,
        embed: 0,
        transparent: 0,
        anonSignature: _v7
      } : {
        reviewId: _v3,
        password: _v1,
        WatchLater: 0,
        Like: 0,
        share: 0,
        embed: 0,
        transparent: 0,
        anonSignature: _v7
      };
    try {
      let _v0,
        _v1,
        _v2 = await (0, _v6.getVideo)({
          headers: {
            ..._v0.headers,
            Accept: "application/vnd.vimeo.*+json;version=3.4.10"
          },
          baseUrl: _v0.baseUrl,
          where: {
            videoId: _v2
          },
          query: _v8,
          select: ["user.uri", "allowMultipleReviewLinks", "embedPlayerConfigUrl", "metadata.connections.versions.currentUri", "metadata.interactions.edit.uri", "name", "description", "pictures"]
        });
      if (!_v2 || !_v2.allowMultipleReviewLinks) return {
        notFound: !0
      };
      let _v3 = _v2.name,
        _v4 = _v2.description || "",
        _v5 = _v2.pictures?.sizes?.find(_v0 => _v0.width >= 640)?.link;
      return {
        props: {
          ...(_v2?.embedPlayerConfigUrl ? {
            embedPlayerConfigUrl: _v2?.embedPlayerConfigUrl
          } : {}),
          hasThemeSupport: !0,
          bypassAgeVerification: !0,
          ...(_v6 ? {
            forceTheme: "dark"
          } : {}),
          reviewId: _v3,
          showPasswordPage: _v5,
          videoId: _v2,
          versionId: (_v0 => {
            if (!_v0) return 0;
            let _v1 = _v0.split("/").pop();
            return isNaN(Number(_v1)) ? 0 : Number(_v1);
          })(_v2?.metadata?.connections?.versions?.currentUri) ?? 0,
          layoutOptions: {
            enableReviewEditAccessBanner: !0
          },
          ogTitle: _v3,
          ogDescription: _v4,
          ogImage: _v5,
          ogUrl: ((_v1 = _v0.req.headers["x-forwarded-proto"]) && (_v0 = Array.isArray(_v1) ? _v1[0] : _v1), `${_v0}://${_v0.vimeoConfig.get("vimeo_url")}${_v0.req.url}`)
        }
      };
    } catch (_v0) {
      if (_v5) return {
        props: {
          hasThemeSupport: !0,
          bypassAgeVerification: !0,
          embedPlayerConfigUrl: "",
          videoId: _v2,
          reviewId: _v3,
          versionId: 0,
          showPasswordPage: _v5,
          layoutOptions: {
            enableReviewEditAccessBanner: !0
          }
        }
      };
      return {
        notFound: !0
      };
    }
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v43.getLayout = _v0 => (0, _v1.jsx)(_v4.ErrorBoundary, {
    errorPage: _v0 => (0, _v1.jsx)(_v8.ErrorPageWithHeader, {
      useBokeh: !0,
      ..._v0
    }),
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v43], 0);
}