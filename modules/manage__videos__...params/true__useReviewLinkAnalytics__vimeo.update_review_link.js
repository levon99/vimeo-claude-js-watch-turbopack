{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ({
    resourceId: _v0,
    resourceType: _v1,
    location: _v2,
    mode: _v3
  }) => {
    let _v4 = (0, _v6.useViewer)(),
      {
        pathname: _v5,
        query: _v6
      } = (0, _v4.useRouter)(),
      _v7 = "true" === _v6.isPrivate,
      _v8 = (0, _v5.useMemo)(() => (0, _v8.computeAnalyticsProps)({
        pathname: _v5,
        resourceId: _v0,
        resourceType: _v1,
        location: _v2,
        isPrivate: _v7,
        mode: _v3
      }), [_v5, _v0, _v1, _v2, _v7, _v3]),
      _v9 = (0, _v5.useCallback)((_v0, _v1) => {
        _v4 && (0, _v7.bpReviewLinkActions)({
          eventName: _v0,
          analyticsProps: _v8,
          reviewLinkConfig: _v1,
          viewer: _v4
        });
      }, [_v8, _v4]);
    return {
      analyticsProps: _v8,
      trackReviewLinkBpEvent: _v9
    };
  };
  _v0.s(["useReviewLinkAnalytics", 0, _v9], 0);
  let _v10 = "vimeo.update_review_link",
    _v11 = "Create_Review_Link",
    _v12 = "edit";
  _v0.s(["useEditReviewLink", 0, (_v0, _v1) => ("clip" === _v1 ? _v0 => {
    let {
        revalidateReviewLinks: _v1
      } = (0, _v3.useGetVideoReviewLinks)(_v0),
      [_v2, {
        error: _v3,
        loading: _v4,
        called: _v5
      }] = (0, _v2.usePatchVideoReviewLink)(),
      {
        trackReviewLinkBpEvent: _v6
      } = _v9({
        resourceId: _v0,
        resourceType: "clip",
        location: _v11,
        mode: _v12
      });
    return {
      editReviewLink: (_v0, _v1, _v2) => {
        _v1 && _v0 && 0 !== Object.keys(_v0).length && _v2({
          where: {
            videoId: _v0,
            reviewLinkId: _v1
          },
          variables: _v0,
          select: ["uri"]
        }).then(() => {
          _v2 && _v6(_v10, _v2), _v1();
        });
      },
      isPatchApiCallInProgress: _v4,
      isPatchApiCalled: _v5,
      isPatchApiError: _v3
    };
  } : _v0 => {
    let {
        revalidateReviewLinks: _v1
      } = (0, _v3.useGetFolderReviewLinks)(_v0),
      [_v2, {
        error: _v3,
        loading: _v4,
        called: _v5
      }] = (0, _v1.usePatchFolderReviewLink)(),
      {
        trackReviewLinkBpEvent: _v6
      } = _v9({
        resourceId: _v0,
        resourceType: "folder",
        location: _v11,
        mode: _v12
      });
    return {
      editReviewLink: (_v0, _v1, _v2) => {
        _v1 && _v0 && 0 !== Object.keys(_v0).length && _v2({
          where: {
            projectId: _v0,
            reviewLinkId: _v1
          },
          variables: _v0,
          select: ["uri"]
        }).then(() => {
          _v2 && _v6(_v10, _v2), _v1();
        });
      },
      isPatchApiCallInProgress: _v4,
      isPatchApiCalled: _v5,
      isPatchApiError: _v3
    };
  })(_v0)], 0);
}