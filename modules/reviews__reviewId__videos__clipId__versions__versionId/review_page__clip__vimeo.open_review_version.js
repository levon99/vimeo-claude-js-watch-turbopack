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
    _v29 = _v0.i(0);
  function _v30({
    videoId: _v0,
    reviewId: _v1,
    currentVersionId: _v2,
    embedPlayerConfigUrl: _v3,
    isVersionDeleted: _v4
  }) {
    let {
        videoData: _v5,
        videoDataLoading: _v6,
        hasEnterprise: _v7,
        sequenceNumber: _v8,
        totalVersionsCount: _v9
      } = (0, _v22.useVideoData)(_v0.toString(), _v1),
      {
        data: _v10,
        isLoading: _v11
      } = (0, _v21.useGetVideoVersion)({
        versionId: _v2,
        videoId: _v0,
        reviewId: _v1
      }),
      _v12 = (0, _v13.usePathname)(),
      _v13 = (0, _v29.useViewer)(),
      [_v14, _v15] = (0, _v14.useState)(!1),
      _v16 = _v11 || !_v10?.downloadConfig,
      [_v17, _v18] = (0, _v14.useState)(!0),
      _v19 = (0, _v18.useIsMobile)(),
      {
        allowComments: _v20,
        showAllVersions: _v21,
        allowDownloads: _v22,
        showResolvedComments: _v23,
        allowStatusChange: _v24
      } = (0, _v14.useContext)(_v12.ReviewLinkContext),
      _v25 = (0, _v14.useMemo)(() => ({
        webContextFields: {
          page_name: "review_page",
          path: _v12
        },
        videoContextFields: {
          video_privacy: _v5?.privacy?.view,
          video_owner_id: (0, _v23.idFromUri)(_v5?.user.uri),
          video_id: _v0,
          content_rating: _v5?.contentRating,
          video_version_id: _v2
        },
        folderContextFields: {
          folder_id: (0, _v23.idFromUri)(_v5?.parentProject?.uri),
          access_permission_to_folder: (0, _v23.getPermissionToFolder)(_v5?.parentProject?.metadata?.interactions)
        }
      }), [_v0, _v12, _v5?.contentRating, _v5?.privacy?.view, _v5?.parentProject?.metadata?.interactions, _v5?.parentProject?.uri, _v5?.user.uri, _v2]),
      _v26 = (0, _v23.idFromUri)(_v5?.user.uri)?.toString() ?? null,
      _v27 = (0, _v23.getReviewPasswordHashFromCookie)(_v1);
    (0, _v27.useReviewBPViewPage)(_v0, "clip", _v27, "vimeo.open_review_version", "review_version_page");
    let _v28 = _v0 => {
      _v18(_v0 => !_v0), (0, _v17.sendCommentBPEvent)({
        eventName: _v0 ? "vimeo.close_comment_panel" : "vimeo.open_comments",
        copy: _v0 ? "X" : "Comments",
        settingValue: _v0 ?? !_v17,
        settingOption: null,
        element: "button",
        viewer: _v13,
        videoId: _v0,
        analyticsProps: _v25
      });
    };
    return _v6 || _v11 ? (0, _v1.jsx)(_v28.default, {}) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v15.Flex, {
        direction: "column",
        children: [(0, _v1.jsx)(_v20.ReviewHeader, {
          videoName: _v5?.name ?? "",
          videoId: _v0,
          reviewId: _v1,
          onDownload: () => {
            _v15(!0);
          },
          isDownloadDisabled: _v16,
          analyticsProps: _v25,
          toggleDrawer: _v28,
          currentVersionSequenceNumber: _v10?.sequenceNumber ?? _v26.DEFAULT_VERSION_NUMBER,
          totalVersionsCount: _v9,
          isDeleted: _v4,
          versionId: (0, _v23.idFromUri)(_v10?.uri),
          reviewStatus: _v5?.reviewStatus,
          showReviewStatus: _v24,
          redirectUri: (0, _v23.formVersionRedirectUri)(_v2, _v0.toString(), void 0, _v1, !0),
          showComments: _v20,
          showDownload: _v22,
          showAllVersions: _v21,
          showRestore: !1,
          showDeleteVersion: !1,
          showNewVersion: !1,
          isVideoProcessing: _v5?.status !== "available"
        }), (0, _v1.jsx)(_v16.CommentContextProvider, {
          children: (0, _v1.jsx)(_v24.ReviewPlayerContainer, {
            videoVersionWidth: _v10?.width || 0,
            videoVersionHeight: _v10?.height || 0,
            isLoading: _v11,
            clipId: _v0.toString(),
            closeDrawer: _v28,
            videoVersionUri: (0, _v23.formVersionRedirectUri)(_v2, _v0.toString(), void 0, _v1),
            showComments: _v17 && _v20,
            videoName: _v5?.name || "",
            createdBy: _v10?.user?.name || "",
            createdAt: _v10?.uploadDate || "",
            versionType: _v10?.versionType || "regular",
            fileName: _v10?.filename || "",
            fileSize: _v10?.filesize || 0,
            embedPlayerConfigUrl: _v3 || "",
            isDeleted: _v4 || _v10?.isDeleted,
            isReplaceOverQuota: !1,
            hasEnterprise: _v7,
            isMobile: _v19,
            analyticsProps: _v25,
            showVersionDetails: !0,
            showResolvedComments: _v23,
            isPreviousVersion: !0,
            isShowAdvancedPlayBar: !0,
            clipOwnerId: _v26
          })
        }), !_v16 && (0, _v1.jsx)(_v19.DownloadVersionModal, {
          isOpen: _v14,
          onClose: () => _v15(!1),
          videoId: _v0,
          downloadConfig: _v10.downloadConfig,
          versionSequenceNumber: _v8,
          versionUri: _v10.uri,
          pageName: _v25?.webContextFields?.page_name
        })]
      }), !_v19 && (0, _v1.jsx)(_v25.ReviewFooter, {})]
    });
  }
  function _v31({
    videoId: _v0,
    reviewId: _v1,
    versionId: _v2,
    playerAssetUrls: _v3,
    embedPlayerConfigUrl: _v4,
    isVersionDeleted: _v5
  }) {
    return (0, _v1.jsx)(_v12.ReviewLinkContextProvider, {
      resourceId: _v0,
      resourceType: "clip",
      reviewId: _v1,
      children: (0, _v1.jsx)(_v10.PlayerContextProvider, {
        type: _v11.PlayerType.VimeoPlayer,
        assetUrls: _v3,
        children: (0, _v1.jsx)(_v30, {
          videoId: _v0,
          reviewId: _v1,
          currentVersionId: _v2,
          embedPlayerConfigUrl: _v4,
          isVersionDeleted: _v5
        })
      })
    });
  }
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = ({
    videoId: _v0,
    reviewId: _v1,
    reviewLinkPassword: _v2,
    versionId: _v3,
    playerAssetUrls: _v4,
    embedPlayerConfigUrl: _v5,
    isVersionDeleted: _v6,
    showNotFoundPage: _v7
  }) => _v7 ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v32.default, {}), (0, _v1.jsx)(_v9.ErrorPageWithHeader, {
      error: new _v4.ResourceNotFoundError()
    }), ";"]
  }) : _v4 ? _v0 && _v1 && _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("meta", {
        name: "robots",
        content: "noindex,nofollow"
      })
    }), (0, _v1.jsx)(_v31, {
      videoId: _v0,
      reviewId: _v1,
      reviewLinkPassword: _v2,
      versionId: _v3,
      playerAssetUrls: _v4,
      embedPlayerConfigUrl: _v5,
      isVersionDeleted: _v6
    })]
  }) : null : (0, _v1.jsx)(_v28.default, {});
  (0, _v5.withPageSetup)(async _v0 => {
    let _v1, _v2;
    if (_v0.res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"), !_v0.query.reviewId || Array.isArray(_v0.query.reviewId) || !_v0.query.clipId || Array.isArray(_v0.query.clipId) || !_v0.query.versionId || Array.isArray(_v0.query.versionId)) return {
      notFound: !0
    };
    let _v3 = Number(_v0.query.clipId),
      _v4 = _v0.query.reviewId,
      _v5 = Number(_v0.query.versionId);
    if (isNaN(_v3) || isNaN(_v5)) return {
      notFound: !0
    };
    let _v6 = _v0.req.cookies;
    _v6[`${_v4}_password`] && (_v1 = _v6[`${_v4}_password`]);
    let _v7 = {
        ..._v0.headers,
        Accept: "application/vnd.vimeo.*+json;version=3.4.10"
      },
      _v8 = {
        reviewId: _v4,
        password: _v1,
        anonSignature: await (0, _v33.getClipSignature)(_v3)
      },
      _v9 = !0;
    try {
      _v9 = !!(_v2 = await (0, _v7.getVideoReviewLink)({
        headers: _v7,
        baseUrl: _v0.baseUrl,
        where: {
          videoId: _v3,
          reviewLinkId: _v4
        },
        query: {
          password: _v1
        },
        select: ["uri", "showAllVersions", "isDark", "isEnabled"]
      })).isEnabled;
    } catch (_v0) {
      if (0 !== (await _v0.res.json()).error_code) return {
        notFound: !0
      };
      _v9 = !1;
    }
    if (!_v9) return {
      props: {
        showNotFoundPage: !0
      }
    };
    if (!_v2 || !_v2?.showAllVersions) return {
      notFound: !0
    };
    try {
      let [_v0, _v1] = await Promise.all([(0, _v8.getVideoVersion)({
        headers: _v7,
        baseUrl: _v0.baseUrl,
        where: {
          videoId: _v3,
          versionId: _v5
        },
        query: _v8,
        select: ["uri", "filename", "isPlayable", "isDeleted", "embedPlayerConfigUrl", "active"]
      }), (0, _v6.getVideo)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        where: {
          videoId: _v3
        },
        query: {
          reviewId: _v4,
          password: _v1
        },
        select: ["uri", "allowMultipleReviewLinks"]
      })]);
      if (!_v1 || !_v1.allowMultipleReviewLinks || !_v0?.isDeleted && !_v0?.isPlayable || !_v0?.isDeleted && !_v0?.embedPlayerConfigUrl) return {
        notFound: !0
      };
      if (_v0.active) return {
        redirect: {
          destination: `/reviews/${_v4}/videos/${_v3}`,
          permanent: !1
        }
      };
      let _v2 = {
        hasThemeSupport: !0,
        bypassAgeVerification: !0,
        ...(_v2.isDark ? {
          forceTheme: "dark"
        } : {}),
        videoId: _v3,
        reviewId: _v4,
        versionId: _v5,
        embedPlayerConfigUrl: _v0.embedPlayerConfigUrl || "",
        isVersionDeleted: _v0.isDeleted,
        layoutOptions: {
          enableReviewEditAccessBanner: !0
        }
      };
      return _v1 && (_v2.reviewLinkPassword = _v1), {
        props: _v2
      };
    } catch (_v0) {
      return {
        notFound: !0
      };
    }
  }), _v34.getLayout = _v0 => (0, _v1.jsx)(_v3.ErrorBoundary, {
    errorPage: _v0 => (0, _v1.jsx)(_v9.ErrorPageWithHeader, {
      useBokeh: !0,
      ..._v0
    }),
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v34], 0);
}