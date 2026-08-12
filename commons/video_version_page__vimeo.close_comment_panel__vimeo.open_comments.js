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
    _v24 = _v0.i(0);
  function _v25({
    clipId: _v0,
    clipHash: _v1,
    versionId: _v2,
    embedPlayerConfigUrl: _v3,
    isDeleted: _v4
  }) {
    let {
        videoData: _v5,
        videoDataLoading: _v6,
        hasEnterprise: _v7
      } = (0, _v18.useVideoData)((0, _v19.getClipRequestId)(_v0, _v1)),
      {
        data: _v8,
        isLoading: _v9
      } = (0, _v16.useGetVideoVersion)({
        versionId: Number(_v2),
        videoId: Number(_v0)
      }),
      _v10 = (0, _v7.usePathname)(),
      _v11 = (0, _v24.useViewer)(),
      [_v12, _v13] = (0, _v8.useState)(!1),
      _v14 = _v9 || !_v8?.downloadConfig,
      [_v15, _v16] = (0, _v8.useState)(!0),
      [_v17, _v18] = (0, _v8.useState)(!1),
      _v19 = (0, _v12.useIsMobile)(),
      _v20 = (0, _v8.useMemo)(() => ({
        webContextFields: {
          page_name: "video_version_page",
          path: _v10
        },
        videoContextFields: {
          video_privacy: _v5?.privacy?.view,
          video_owner_id: (0, _v20.idFromUri)(_v5?.user.uri),
          video_id: Number(_v0),
          content_rating: _v5?.contentRating,
          video_version_id: Number(_v2)
        },
        folderContextFields: {
          folder_id: (0, _v20.idFromUri)(_v5?.parentProject?.uri),
          access_permission_to_folder: (0, _v20.getPermissionToFolder)(_v5?.parentProject?.metadata?.interactions)
        }
      }), [_v0, _v10, _v5?.contentRating, _v5?.privacy?.view, _v5?.parentProject?.metadata?.interactions, _v5?.parentProject?.uri, _v5?.user.uri, _v2]),
      _v21 = (0, _v20.idFromUri)(_v5?.user.uri)?.toString() ?? null,
      _v22 = _v0 => {
        _v16(_v0 => !_v0), (0, _v11.sendCommentBPEvent)({
          eventName: _v0 ? "vimeo.close_comment_panel" : "vimeo.open_comments",
          copy: _v0 ? "X" : "Comments",
          settingValue: _v0 ?? !_v15,
          settingOption: null,
          element: "button",
          viewer: _v11 ?? void 0,
          videoId: Number(_v0),
          analyticsProps: _v20
        });
      },
      _v23 = _v5?.metadata.interactions.edit;
    return _v6 || _v9 ? (0, _v1.jsx)(_v3.default, {}) : _v5 && _v23 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v9.Flex, {
        direction: "column",
        children: [(0, _v1.jsx)(_v15.ReviewHeader, {
          videoName: _v5?.name ?? "",
          videoId: Number(_v0),
          clipHash: _v1,
          onDownload: () => {
            _v13(!0);
          },
          isDownloadDisabled: _v14,
          analyticsProps: _v20,
          toggleDrawer: _v22,
          currentVersionSequenceNumber: _v8?.sequenceNumber ?? _v17.DEFAULT_VERSION_NUMBER,
          setIsReplaceOverQuota: _v18,
          totalVersionsCount: _v5?.metadata?.connections?.versions?.totalIncludingDeleted ?? 0,
          isDeleted: _v4,
          versionId: (0, _v20.idFromUri)(_v8?.uri),
          redirectUri: (0, _v20.formClipManageUri)(_v0, _v1),
          showComments: !0
        }), (0, _v1.jsx)(_v10.CommentContextProvider, {
          children: (0, _v1.jsx)(_v21.ReviewPlayerContainer, {
            videoVersionWidth: _v8?.width || 0,
            videoVersionHeight: _v8?.height || 0,
            isLoading: _v9,
            clipId: _v0,
            clipHash: _v1,
            closeDrawer: _v22,
            videoVersionUri: (0, _v20.formVersionRedirectUri)(Number(_v2), _v0, _v1),
            showComments: _v15,
            videoName: _v5.name || "",
            createdBy: _v8?.user?.name || "",
            createdAt: _v8?.uploadDate || "",
            versionType: _v8?.versionType || "regular",
            fileName: _v8?.filename || "",
            fileSize: _v8?.filesize || 0,
            embedPlayerConfigUrl: _v3 ?? "",
            isDeleted: _v4 || _v8?.isDeleted,
            isReplaceOverQuota: _v17,
            setIsReplaceOverQuota: _v18,
            hasEnterprise: _v7,
            isMobile: _v19,
            analyticsProps: _v20,
            showVersionDetails: !0,
            allowTimecodeComments: !1,
            isPreviousVersion: !0,
            clipOwnerId: _v21
          })
        }), !_v14 && (0, _v1.jsx)(_v14.DownloadVersionModal, {
          isOpen: _v12,
          onClose: () => _v13(!1),
          videoId: Number(_v0),
          downloadConfig: _v8.downloadConfig,
          versionSequenceNumber: Number(_v8.sequenceNumber),
          versionUri: _v8.uri,
          pageName: _v20?.webContextFields?.page_name
        })]
      }), !_v19 && (0, _v1.jsx)(_v22.ReviewFooter, {})]
    }) : (0, _v1.jsx)(_v23.ErrorPage, {
      error: new _v13.ResourceNotFoundError()
    });
  }
  let _v26 = ({
    clipId: _v0,
    clipHash: _v1,
    versionId: _v2,
    playerAssetUrls: _v3,
    embedPlayerConfigUrl: _v4,
    isDeleted: _v5
  }) => (0, _v1.jsx)(_v6.ReviewVersionsProvider, {
    children: (0, _v1.jsx)(_v4.PlayerContextProvider, {
      type: _v5.PlayerType.VimeoPlayer,
      assetUrls: _v3,
      children: (0, _v1.jsx)(_v25, {
        clipId: _v0,
        clipHash: _v1,
        versionId: _v2,
        embedPlayerConfigUrl: _v4,
        isDeleted: _v5
      })
    })
  });
  _v0.s(["VideoVersionContentPage", 0, ({
    playerAssetUrls: _v0,
    embedPlayerConfigUrl: _v1,
    isDeleted: _v2
  }) => {
    let {
      clipId: _v3,
      clipHash: _v4,
      versionId: _v5
    } = (0, _v2.useRouter)().query;
    if (!_v0) return (0, _v1.jsx)(_v3.default, {});
    if (Array.isArray(_v3) || Array.isArray(_v4) || Array.isArray(_v5)) throw Error("Invalid query params");
    return _v3 && _v5 ? (0, _v1.jsx)(_v26, {
      playerAssetUrls: _v0,
      embedPlayerConfigUrl: _v1,
      clipId: _v3,
      clipHash: _v4,
      versionId: _v5,
      isDeleted: _v2
    }) : null;
  }], 0);
}