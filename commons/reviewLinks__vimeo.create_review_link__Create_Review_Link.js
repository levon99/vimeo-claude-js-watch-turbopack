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
  function _v9() {
    let {
      cache: _v0,
      mutate: _v1
    } = (0, _v2.useSWRConfig)();
    return (0, _v1.useCallback)(() => {
      for (let _v0 of _v0.keys()) _v0.includes("reviewLinks") && _v1(_v0);
    }, [_v0, _v1]);
  }
  let _v10 = "vimeo.create_review_link",
    _v11 = "Create_Review_Link",
    _v12 = "create";
  _v0.s(["usePostReviewLink", 0, ({
    resourceId: _v0,
    resourceType: _v1
  }) => ("clip" === _v1 ? _v0 => {
    let [_v1, {
        loading: _v2,
        called: _v3,
        data: _v4
      }] = (0, _v4.usePostVideoReviewLinks)(),
      {
        revalidateReviewLinks: _v5,
        isValidating: _v6
      } = (0, _v6.useGetVideoReviewLinks)(_v0),
      _v7 = _v9(),
      _v8 = (0, _v1.useRef)(!1),
      {
        trackReviewLinkBpEvent: _v9
      } = (0, _v7.useReviewLinkAnalytics)({
        resourceId: _v0,
        resourceType: "clip",
        location: _v11,
        mode: _v12
      }),
      {
        trackReviewLinkCreated: _v10
      } = (0, _v5.useReviewTracking)();
    return (0, _v1.useEffect)(() => {
      _v8.current && _v4?.uri && (window.open((0, _v8.getVideoReviewPageUrl)(_v4.uri, _v0), "_blank"), _v8.current = !1);
    }, [_v4?.uri, _v0]), {
      createReviewLink: _v0 => {
        let {
          openOnCreate: _v1,
          expirationPreset: _v2,
          ..._v3
        } = _v0;
        _v8.current = !!_v1, _v1({
          where: {
            videoId: _v0
          },
          select: ["uri"],
          variables: _v3
        }).then(() => {
          _v10({
            clipId: _v0.toString(),
            hasExpiration: !!_v0.expiresOn,
            expirationPreset: _v0.expirationPreset ?? "custom_date",
            hasPassword: !!_v0.password,
            permissionComment: !!_v0.allowComments,
            permissionDownload: !!_v0.allowDownloads,
            permissionChangeStatus: !!_v0.allowStatusChange,
            permissionViewResolvedComments: !!_v0.showResolvedComments,
            permissionViewPreviousVersions: !!_v0.showAllVersions,
            appearanceLogo: !!_v0.showMyLogo,
            appearanceDarkMode: !!_v0.isDark,
            appearanceShowOtherVideos: !_v0.hideEndCards,
            setAsDefault: !!_v0.saveAsDefault
          }), _v9(_v10), _v5(), _v7();
        });
      },
      isLoading: _v2 || _v6,
      isCreateApiCalled: _v3
    };
  } : _v0 => {
    let [_v1, {
        loading: _v2,
        called: _v3
      }] = (0, _v3.usePostFolderReviewLinks)(),
      {
        revalidateReviewLinks: _v4,
        isValidating: _v5
      } = (0, _v6.useGetFolderReviewLinks)(_v0),
      _v6 = _v9(),
      {
        trackReviewLinkBpEvent: _v7
      } = (0, _v7.useReviewLinkAnalytics)({
        resourceId: _v0,
        resourceType: "folder",
        location: _v11,
        mode: _v12
      });
    return {
      createReviewLink: _v0 => {
        let {
          openOnCreate: _v1,
          expirationPreset: _v2,
          ..._v3
        } = _v0;
        _v1({
          where: {
            projectId: _v0
          },
          select: ["uri"],
          variables: _v3
        }).then(() => {
          _v7(_v10), _v4(), _v6();
        });
      },
      isLoading: _v2 || _v5,
      isCreateApiCalled: _v3
    };
  })(_v0)]);
}