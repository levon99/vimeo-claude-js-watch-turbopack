{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = "application/vnd.vimeo.*+json;version=3.4.1",
    _v7 = ["preferences.videos.keepSourceFiles", "preferences.videos.autoGenerateReviewLink"];
  _v0.s(["useUploadDefaultToggles", 0, () => {
    let _v0 = (0, _v5.useViewer)(),
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
        select: _v7,
        headers: {
          Accept: _v6
        }
      } : null),
      _v7 = _v5?.preferences?.videos?.keepSourceFiles,
      _v8 = _v5?.preferences?.videos?.autoGenerateReviewLink,
      [_v9, {
        called: _v10,
        error: _v11,
        loading: _v12
      }] = (0, _v3.usePatchUser)(),
      _v13 = (0, _v1.useRef)([]),
      {
        trackOriginalResolutionDefaultToggled: _v14,
        trackReviewLinksDefaultToggled: _v15
      } = (0, _v4.useDefaultsTracking)(),
      _v16 = (0, _v1.useCallback)(async _v0 => {
        if (!_v1) return;
        let _v1 = _v0?.videos,
          _v2 = [];
        _v1?.keepSourceFiles !== void 0 && _v2.push({
          field: "keepSourceFiles",
          enabled: _v1.keepSourceFiles
        }), _v1?.autoGenerateReviewLink !== void 0 && _v2.push({
          field: "autoGenerateReviewLink",
          enabled: _v1.autoGenerateReviewLink
        }), _v13.current = _v2, await _v9({
          select: _v7,
          variables: _v0,
          headers: {
            Accept: _v6
          },
          where: {
            userId: _v1
          }
        }), _v6();
      }, [_v6, _v9, _v1]),
      _v17 = (0, _v1.useEffectEvent)(() => {
        let _v0 = _v13.current;
        if (0 !== _v0.length && (_v13.current = [], !_v11)) for (let _v0 of _v0) "keepSourceFiles" === _v0.field ? _v14({
          enabled: _v0.enabled
        }) : _v15({
          enabled: _v0.enabled
        });
      });
    return (0, _v1.useEffect)(() => {
      _v10 && 0 !== _v13.current.length && !_v12 && _v17();
    }, [_v12, _v10, _v11]), {
      defaults: {
        keepSourceFiles: _v7,
        autoGenerateReviewLink: _v8
      },
      showReviewLinkToggle: _v2 && !_v3 && _v4,
      isLoadingUploadDefaults: _v12,
      update: _v16
    };
  }]);
}