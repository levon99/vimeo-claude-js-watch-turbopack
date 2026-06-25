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
    _v17 = _v0.i(0);
  let _v18 = ({
    playerAssetUrls: _v0,
    userId: _v1,
    folderId: _v2,
    folderData: _v3
  }) => {
    let _v4 = (0, _v2.useContext)(_v17.ViewerContext);
    if (!_v4) return null;
    if (!_v3) return _v4?.user ? (0, _v1.jsx)(_v14.ErrorPage, {
      error: new _v4.ResourceNotFoundError()
    }) : (0, _v1.jsx)(_v13.BrandedLogin, {
      metaUrl: `/sso/project/${_v2}/meta`,
      errorConstructor: _v4.UnauthorizedError
    });
    (0, _v8.setCdnUrl)(_v4.viewmasterCdnUrl);
    let _v5 = {
      locale: _v4.locale
    };
    return (0, _v1.jsx)(_v3.SWRConfig, {
      value: {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      },
      children: (0, _v1.jsxs)(_v7.ConfigContext.Provider, {
        value: _v5,
        children: [(0, _v1.jsx)(_v6.App, {
          folderId: _v2,
          folderData: _v3,
          playerAssetUrls: _v0,
          userId: _v1,
          viewer: _v4
        }), (0, _v1.jsx)(_v12.ManagedAccountsPromo, {}), (0, _v1.jsx)(_v16.VimeoReviewUpsellPromo, {})]
      })
    });
  };
  (0, _v5.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.userId,
      _v2 = _v0.params?.folderId;
    if (!_v1 || !_v2) return {
      notFound: !0
    };
    let _v3 = parseInt(_v1, 10),
      _v4 = parseInt(_v2, 10),
      _v5 = {
        userId: _v3,
        folderId: _v4,
        hasThemeSupport: !0,
        hasUploader: !0,
        metadata: {
          className: "FolderReviewMetadata",
          routeRule: "/user/[userId]/folder/[folderId]",
          args: {
            folderId: _v4
          }
        }
      },
      _v6 = (0, _v11.getUserProject)({
        where: {
          userId: _v3,
          projectId: _v4
        },
        select: _v9.DEFAULT_FOLDER_API_FIELDS,
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      }),
      _v7 = (0, _v10.getMePreferences)({
        select: ["toid"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
    try {
      let _v0 = (await _v7).toid;
      _v0 && _v0 !== _v3 && (await (0, _v10.patchMePreferences)({
        variables: {
          teamUri: `/users/${_v3}`
        },
        select: ["toid"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      }));
    } catch (_v0) {
      console.error("Failed to update preferred team owner:", _v0);
    }
    try {
      let _v0 = await _v6,
        _v1 = _v0.isPrivateToUser ? "true" : "false",
        _v2 = _v0.metadata.interactions.reviewRedirectLink;
      if (_v2) return {
        redirect: {
          destination: _v2,
          permanent: !0
        }
      };
      if (_v0.query.isPrivate !== _v1) {
        let _v0 = {
          ..._v0.query
        };
        delete _v0.userId, delete _v0.folderId, _v0.isPrivate = _v1;
        let _v1 = new URLSearchParams(_v0);
        return {
          redirect: {
            destination: `/user/${_v3}/folder/${_v4}?${_v1.toString()}`,
            permanent: !1
          }
        };
      }
      return {
        props: {
          ..._v5,
          folderData: _v0
        }
      };
    } catch (_v0) {
      console.log("Failed to fetch folder data:", _v0);
    }
    return {
      props: _v5
    };
  }), _v18.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v15.VideoLibraryLayout, {
    hasUploader: _v1.hasUploader,
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v18], 0);
}