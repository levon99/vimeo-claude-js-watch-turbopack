{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "application/vnd.vimeo.*+json;version=3.4.1",
    _v6 = ["preferences.videos.autoGenerateReviewLink"];
  _v0.s(["useIsFirstReviewLink", 0, () => {
    let _v0 = (0, _v4.useViewer)(),
      _v1 = _v0?.user?.id,
      _v2 = _v0?.team?.ownerId || _v1,
      {
        data: _v3,
        mutate: _v4
      } = (0, _v3.useGetUserPreferences)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: ["frl"]
      } : null),
      _v5 = _v3?.frl,
      {
        data: _v6
      } = (0, _v2.useGetUser)(() => _v2 ? {
        where: {
          userId: _v2
        },
        select: _v6,
        headers: {
          Accept: _v5
        }
      } : null),
      _v7 = _v6?.preferences?.videos?.autoGenerateReviewLink,
      [_v8] = (0, _v3.usePatchUserPreferences)(),
      [_v9, {
        loading: _v10
      }] = (0, _v2.usePatchUser)();
    return {
      isUpdatingDefault: _v10,
      showAutoReviewLinkModal: !_v5 && !_v7,
      handleAutoReviewLinkView: () => {
        _v8({
          where: {
            userId: _v1
          },
          select: ["frl"],
          variables: {
            frl: 1
          }
        });
      },
      enableAutoReviewLink: (0, _v1.useCallback)(async () => {
        _v2 && (await _v9({
          select: _v6,
          variables: {
            videos: {
              autoGenerateReviewLink: !0
            }
          },
          headers: {
            Accept: _v5
          },
          where: {
            userId: _v2
          }
        }), _v4());
      }, [_v4, _v9, _v2])
    };
  }]);
}