{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useReviewBPViewPage", 0, (_v0, _v1, _v2 = null, _v3, _v4) => {
    let _v5 = (0, _v2.useRef)(!1),
      _v6 = (0, _v3.useViewer)(),
      {
        pathname: _v7
      } = (0, _v1.useRouter)(),
      _v8 = (0, _v2.useContext)(_v4.ReviewLinkContext),
      _v9 = (0, _v2.useCallback)(() => {
        let _v0 = (0, _v6.computeAnalyticsProps)({
          pathname: _v7,
          resourceId: _v0,
          resourceType: _v1,
          location: _v4
        });
        (0, _v5.bpReviewLinkActions)({
          eventName: _v3,
          reviewLinkConfig: {
            ..._v8,
            password: _v2
          },
          analyticsProps: _v0,
          viewer: _v6
        });
      }, [_v7, _v6, _v0, _v1, _v8, _v2, _v3, _v4]);
    (0, _v2.useEffect)(() => {
      _v6 && _v8.uri && !_v5.current && (_v9(), _v5.current = !0);
    }, [_v6, _v8, _v5, _v9]);
  }]);
}