{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.default)(async () => {
      let {
        VideoShareView: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v8 = (0, _v2.default)(async () => {
      let {
        Groups: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v9 = (0, _v2.default)(async () => {
      let {
        Channels: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v10 = (0, _v2.default)(async () => {
      let {
        Portfolios: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["VideoShareViewModule", 0, ({
    clipId: _v0,
    isOpen: _v1,
    defaultPanel: _v2,
    editReviewLinkUri: _v3,
    onClose: _v4,
    onCreateReviewLinkSuccess: _v5,
    onPrivacyChange: _v6,
    onEmbedChange: _v7,
    transferInlineLinkSurface: _v8,
    reviewLinkSurface: _v9
  }) => {
    let _v10 = (0, _v3.useRouter)(),
      {
        openAddToShowcaseModal: _v11,
        closeAddToShowcaseModal: _v12
      } = (0, _v6.useAddToShowcaseModal)(),
      [_v13, _v14] = (0, _v4.useState)(null),
      {
        data: _v15
      } = (0, _v5.useGetVideo)(() => _v0 ? {
        where: {
          videoId: _v0
        },
        select: ["name", "user.uri"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      _v16 = (0, _v4.useMemo)(() => ({
        videoId: Number(_v0),
        ownerId: Number(_v15?.user.uri.split("/").pop()) || 0,
        videoName: _v15?.name || "",
        pageName: "library",
        pageUrl: _v10.pathname,
        onClose: () => _v14(null)
      }), [_v0, _v15, _v10]),
      _v17 = (0, _v4.useCallback)(({
        destination: _v0
      }) => {
        if (("channel" === _v0 || "group" === _v0 || "portfolio" === _v0 || "showcase" === _v0) && _v16.ownerId) {
          if ("showcase" === _v0) return void _v11({
            onClose: _v12,
            showcaseItems: [{
              id: _v16.videoId,
              name: _v16.videoName,
              type: "video"
            }],
            ownerId: _v16.ownerId,
            pageName: _v16.pageName,
            pageUrl: _v16.pageUrl
          });
          _v14(_v0);
        }
      }, [_v11, _v12, _v16]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7, {
        clipId: _v0,
        layoutType: "modal",
        trackingContextConfig: {
          pageName: "video_library",
          location: "modal"
        },
        defaultPanel: _v2,
        editReviewLinkUri: _v3,
        isOpen: _v1,
        onClose: _v4,
        onPublishToClick: _v17,
        onCreateReviewLinkSuccess: _v5,
        onPrivacyChange: _v6,
        onEmbedChange: _v7,
        transferInlineLinkSurface: _v8,
        reviewLinkSurface: _v9,
        expiryPickerEntryPoint: "library"
      }), "channel" === _v13 && (0, _v1.jsx)(_v9, {
        ..._v16
      }), "group" === _v13 && (0, _v1.jsx)(_v8, {
        ..._v16
      }), "portfolio" === _v13 && (0, _v1.jsx)(_v10, {
        ..._v16
      })]
    });
  }]);
}