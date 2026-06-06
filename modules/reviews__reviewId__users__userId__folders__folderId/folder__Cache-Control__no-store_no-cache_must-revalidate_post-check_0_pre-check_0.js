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
    _v14 = _v0.i(0);
  let _v15 = ({
    folderData: _v0,
    folderId: _v1,
    playerAssetUrls: _v2,
    reviewId: _v3,
    userId: _v4,
    showPasswordPage: _v5
  }) => {
    let _v6 = (0, _v14.useViewer)();
    if (!_v6) return null;
    (0, _v7.setCdnUrl)(_v6.viewmasterCdnUrl);
    let _v7 = {
      locale: _v6.locale
    };
    return (0, _v1.jsx)(_v2.SWRConfig, {
      value: {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      },
      children: (0, _v1.jsx)(_v5.ConfigContext.Provider, {
        value: _v7,
        children: (0, _v1.jsx)(_v10.ReviewLinkContextProvider, {
          resourceId: _v1,
          resourceType: "folder",
          reviewId: _v3,
          children: (0, _v1.jsx)(_v4.App, {
            folderId: _v1,
            playerAssetUrls: _v2,
            userId: _v4,
            viewer: _v6,
            reviewId: _v3,
            folderData: _v0,
            showPasswordPage: _v5
          })
        })
      })
    });
  };
  (0, _v3.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = _v0.params?.userId,
      _v3 = _v0.params?.folderId,
      _v4 = _v0.query?.reviewId;
    if (_v0.res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"), !_v2 || !_v3 || !_v4) return {
      notFound: !0
    };
    let _v5 = parseInt(_v2, 10),
      _v6 = parseInt(_v3, 10);
    if (isNaN(_v5) || isNaN(_v6) || !_v4) return {
      notFound: !0
    };
    let _v7 = !1,
      _v8 = !1,
      _v9 = _v0.req.cookies;
    _v9[`${_v4}_password`] && (_v1 = _v9[`${_v4}_password`]);
    try {
      _v7 = (await (0, _v8.getFolderReviewLink)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        where: {
          projectId: _v6,
          reviewLinkId: _v4
        },
        query: {
          password: _v1
        },
        select: ["isDark", "isEnabled"]
      })).isDark;
    } catch (_v0) {
      if (!_v0?.res || "function" != typeof _v0?.res?.json) return {
        notFound: !0
      };
      let _v1 = await _v0.res.json();
      if (0 === _v1.error_code || 0 === _v1.error_code) _v8 = !0;else if (0 === _v1.error_code) return {
        props: {
          folderData: null,
          folderId: _v6,
          playerAssetUrls: "",
          bypassAgeVerification: !0,
          reviewId: _v4,
          userId: _v5,
          showPasswordPage: _v8,
          isDisabledOrExpired: !0
        }
      };else return {
        notFound: !0
      };
    }
    let _v10 = _v8 ? {
        reviewId: _v4
      } : {
        reviewId: _v4,
        password: _v1
      },
      _v11 = null,
      _v12 = {
        folderData: null,
        folderId: _v6,
        hasThemeSupport: !0,
        bypassAgeVerification: !0,
        ...(_v7 ? {
          forceTheme: "dark"
        } : {}),
        isReviewLinkDarkMode: _v7,
        metadata: {
          className: "FolderReviewMetadata",
          routeRule: "reviews/[reviewId]/users/[userId]/folders/[folderId]"
        },
        reviewId: _v4,
        showPasswordPage: _v8,
        userId: _v5
      };
    try {
      if (!(_v11 = await (0, _v9.getUserProject)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        where: {
          userId: _v5,
          projectId: _v6
        },
        query: _v10,
        select: _v6.DEFAULT_FOLDER_API_FIELDS
      })) || !_v11?.metadata?.interactions?.allowMultipleReviewLinks) return {
        notFound: !0
      };
    } catch (_v0) {
      if (_v8) return {
        props: {
          ..._v12,
          layoutOptions: {
            enableReviewEditAccessBanner: !0
          }
        }
      };
      return {
        notFound: !0
      };
    }
    return {
      props: {
        ..._v12,
        folderData: _v11,
        layoutOptions: {
          enableReviewEditAccessBanner: !0
        }
      }
    };
  }), _v15.getLayout = (_v0, _v1) => _v1.isDisabledOrExpired ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v12.default, {}), (0, _v1.jsx)(_v11.DisabledReviewLinkErrorPage, {})]
  }) : (0, _v1.jsx)(_v13.VideoLibraryLayout, {
    isReviewPage: !0,
    hasThemeSupport: !_v1.isReviewLinkDarkMode,
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v15], 0);
}