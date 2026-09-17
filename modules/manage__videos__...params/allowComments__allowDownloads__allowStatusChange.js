{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ["allowComments", "allowDownloads", "allowStatusChange", "createdOn", "expiresOn", "hideEndCards", "showResolvedComments", "name", "showAllVersions", "showMyLogo", "isDark", "isEnabled", "password", "uri"],
    _v6 = _v0 => {
      let _v1 = (0, _v3.useCanUpSell)(),
        {
          data: _v2,
          isLoading: _v3,
          mutate: _v4,
          isValidating: _v5
        } = (0, _v1.useGetFolderReviewLinks)(() => _v0 ? {
          where: {
            projectId: _v0
          },
          select: _v5,
          query: {
            perPage: 50
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        _v6 = _v2?.data || [],
        _v7 = _v6.length < _v4.MAX_REVIEW_LINKS && (!_v1 || _v1 && 0 === _v6.length);
      return {
        reviewLinks: _v6,
        isLoading: _v3,
        revalidateReviewLinks: _v4,
        hasReviewLinks: _v6.length > 0,
        isValidating: _v5,
        canCreateReviewLinks: _v7
      };
    },
    _v7 = _v0 => {
      let _v1 = (0, _v3.useCanUpSell)(),
        {
          data: _v2,
          isLoading: _v3,
          mutate: _v4,
          isValidating: _v5
        } = (0, _v2.useGetVideoReviewLinks)(() => _v0 ? {
          where: {
            videoId: _v0
          },
          select: _v5,
          query: {
            perPage: 50
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        _v6 = _v2?.data || [],
        _v7 = _v6.length < _v4.MAX_REVIEW_LINKS && (!_v1 || _v1 && 0 === _v6.length);
      return {
        reviewLinks: _v6,
        isLoading: _v3,
        revalidateReviewLinks: _v4,
        hasReviewLinks: _v6.length > 0,
        isValidating: _v5,
        canCreateReviewLinks: _v7
      };
    };
  _v0.s(["useGetFolderReviewLinks", 0, _v6, "useGetReviewLinks", 0, (_v0, _v1) => ("clip" === _v1 ? _v7 : _v6)(_v0), "useGetVideoReviewLinks", 0, _v7]);
}