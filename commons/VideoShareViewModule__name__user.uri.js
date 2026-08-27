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
    reviewLinkSurface: _v9,
    privacyChangePageSource: _v10,
    privacyChangeEntryPoint: _v11
  }) => {
    let _v12 = (0, _v3.useRouter)(),
      {
        openAddToShowcaseModal: _v13,
        closeAddToShowcaseModal: _v14
      } = (0, _v6.useAddToShowcaseModal)(),
      [_v15, _v16] = (0, _v4.useState)(null),
      {
        data: _v17
      } = (0, _v5.useGetVideo)(() => _v0 ? {
        where: {
          videoId: _v0
        },
        select: ["name", "user.uri"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      _v18 = (0, _v4.useMemo)(() => ({
        videoId: Number(_v0),
        ownerId: Number(_v17?.user.uri.split("/").pop()) || 0,
        videoName: _v17?.name || "",
        pageName: "library",
        pageUrl: _v12.pathname,
        onClose: () => _v16(null)
      }), [_v0, _v17, _v12]),
      _v19 = (0, _v4.useCallback)(({
        destination: _v0
      }) => {
        if (("channel" === _v0 || "group" === _v0 || "portfolio" === _v0 || "showcase" === _v0) && _v18.ownerId) {
          if ("showcase" === _v0) return void _v13({
            onClose: _v14,
            showcaseItems: [{
              id: _v18.videoId,
              name: _v18.videoName,
              type: "video"
            }],
            ownerId: _v18.ownerId,
            pageName: _v18.pageName,
            pageUrl: _v18.pageUrl
          });
          _v16(_v0);
        }
      }, [_v13, _v14, _v18]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7, {
        clipId: _v0,
        layoutType: "modal",
        trackingContextConfig: {
          pageName: "video_library",
          location: "modal",
          privacyChangePageSource: _v10,
          privacyChangeEntryPoint: _v11
        },
        defaultPanel: _v2,
        editReviewLinkUri: _v3,
        isOpen: _v1,
        onClose: _v4,
        onPublishToClick: _v19,
        onCreateReviewLinkSuccess: _v5,
        onPrivacyChange: _v6,
        onEmbedChange: _v7,
        transferInlineLinkSurface: _v8,
        reviewLinkSurface: _v9,
        expiryPickerEntryPoint: "library"
      }), "channel" === _v15 && (0, _v1.jsx)(_v9, {
        ..._v18
      }), "group" === _v15 && (0, _v1.jsx)(_v8, {
        ..._v18
      }), "portfolio" === _v15 && (0, _v1.jsx)(_v10, {
        ..._v18
      })]
    });
  }]);
}