{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "application/vnd.vimeo.*+json;version=3.4.1",
    _v6 = ["preferences.videos.keepSourceFiles", "preferences.videos.autoGenerateReviewLink"];
  _v0.s(["useUploadDefaultToggles", 0, () => {
    let _v0 = (0, _v4.useViewer)(),
      _v1 = _v0?.team?.ownerId || _v0?.user?.id,
      {
        capabilities: {
          hasMultipleReviewLinks: _v2,
          hasProhibitMultipleReviewLinks: _v3
        },
        ready: _v4
      } = (0, _v2.useCapability)(_v1 ? ["hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks"] : []),
      {
        data: _v5,
        mutate: _v6
      } = (0, _v3.useGetUser)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: _v6,
        headers: {
          Accept: _v5
        }
      } : null),
      _v7 = _v5?.preferences?.videos?.keepSourceFiles,
      _v8 = _v5?.preferences?.videos?.autoGenerateReviewLink,
      [_v9, {
        loading: _v10
      }] = (0, _v3.usePatchUser)();
    return {
      defaults: {
        keepSourceFiles: _v7,
        autoGenerateReviewLink: _v8
      },
      showReviewLinkToggle: _v2 && !_v3 && _v4,
      isLoadingUploadDefaults: _v10,
      update: (0, _v1.useCallback)(async _v0 => {
        _v1 && (await _v9({
          select: _v6,
          variables: _v0,
          headers: {
            Accept: _v5
          },
          where: {
            userId: _v1
          }
        }), _v6());
      }, [_v6, _v9, _v1])
    };
  }]);
}