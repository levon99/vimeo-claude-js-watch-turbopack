{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.i(0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useMemo)(() => (0, _v3.configureStore)({
      reducer: {
        versions: _v5.versionsSlice.reducer
      }
    }), []);
    return (0, _v1.jsx)(_v4.Provider, {
      store: _v1,
      children: _v0
    });
  };
  _v0.s(["ReviewVersionsProvider", 0, _v6], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = ({
      resourceId: _v0,
      resourceType: _v1,
      reviewId: _v2
    }) => ("folder" === _v1 ? _v14 : _v13)(_v0, _v2),
    _v12 = ["allowComments", "allowDownloads", "allowStatusChange", "createdOn", "expiresOn", "showResolvedComments", "modifiedOn", "name", "showAllVersions", "showMyLogo", "uri", "isDark", "logoUrl"],
    _v13 = (_v0, _v1) => {
      let _v2 = (0, _v9.useViewer)(),
        {
          data: _v3,
          isLoading: _v4,
          mutate: _v5,
          error: _v6
        } = (0, _v8.useGetVideoReviewLink)(() => {
          if (!_v0 || !_v1 || !_v2) return null;
          let _v0 = (0, _v10.getReviewPasswordHashFromCookie)(_v1);
          return {
            where: {
              videoId: _v0,
              reviewLinkId: _v1
            },
            select: _v12,
            query: {
              reviewId: _v1,
              password: _v0
            }
          };
        }, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1,
          revalidateOnReconnect: !1
        });
      return {
        data: _v3,
        isLoading: _v4,
        mutate: _v5,
        error: _v6
      };
    },
    _v14 = (_v0, _v1) => {
      let _v2 = (0, _v9.useViewer)(),
        {
          data: _v3,
          isLoading: _v4,
          mutate: _v5,
          error: _v6
        } = (0, _v7.useGetFolderReviewLink)(() => {
          if (!_v0 || !_v1 || !_v2) return null;
          let _v0 = (0, _v10.getReviewPasswordHashFromCookie)(_v1);
          return {
            where: {
              projectId: _v0,
              reviewLinkId: _v1
            },
            select: _v12,
            query: {
              reviewId: _v1,
              password: _v0
            }
          };
        }, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1,
          revalidateOnReconnect: !1
        });
      return {
        data: _v3,
        isLoading: _v4,
        mutate: _v5,
        error: _v6
      };
    };
  _v0.s(["useGetClipReviewLink", 0, _v13, "useGetProjectReviewLink", 0, _v14, "useGetReviewLink", 0, _v11], 0);
  let _v15 = {
      allowComments: !1,
      allowDownloads: !1,
      allowStatusChange: !1,
      createdOn: "",
      expiresOn: "",
      showResolvedComments: !1,
      modifiedOn: "",
      name: "",
      showAllVersions: !1,
      showMyLogo: !1,
      uri: ""
    },
    _v16 = (0, _v2.createContext)(_v15);
  _v0.s(["ReviewLinkContext", 0, _v16, "ReviewLinkContextProvider", 0, ({
    reviewId: _v0,
    resourceId: _v1,
    resourceType: _v2,
    children: _v3
  }) => {
    let {
        data: _v4
      } = _v11({
        reviewId: _v0,
        resourceId: _v1,
        resourceType: _v2
      }),
      _v5 = {
        ...(_v4 ?? _v15),
        reviewId: _v0
      };
    return (0, _v1.jsx)(_v6, {
      children: (0, _v1.jsx)(_v16.Provider, {
        value: _v5,
        children: _v3
      })
    });
  }], 0);
}