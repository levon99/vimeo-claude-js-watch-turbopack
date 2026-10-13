{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useAdoptedAuthAttribution", 0, function (_v0, _v1) {
    let _v2 = (0, _v1.useRouter)(),
      [_v3] = (0, _v2.useState)(() => {
        let _v0 = window.location.search;
        return (0, _v3.adoptAuthAttribution)(_v0, _v0, _v1);
      }),
      _v4 = (0, _v2.useEffectEvent)(_v0 => {
        Promise.resolve(_v2.replace(_v0, void 0, {
          shallow: !0
        })).catch(() => void 0);
      });
    return (0, _v2.useEffect)(() => {
      if ("explicit" !== _v3.status && "unknown" !== _v3.status) return;
      let _v0 = `${window.location.pathname}${window.location.search}${window.location.hash}`,
        _v1 = (0, _v3.authAttributionUrl)(_v0, _v3);
      _v1 !== _v0 && _v4(_v1);
    }, [_v3]), _v3;
  }, "useAuthAttributionLifecycle", 0, function ({
    isOpen: _v0,
    supplied: _v1,
    initialIntent: _v2,
    surfaceType: _v3
  }) {
    let [_v4, _v5] = (0, _v2.useState)(() => ({
      held: _v0 ? _v1 ?? (0, _v3.adoptAuthAttribution)("", _v2, _v3) : null,
      retiredFlowId: null
    }));
    if (!_v0) return null !== _v4.held && _v5({
      held: null,
      retiredFlowId: _v4.held.flowId
    }), null;
    if (null === _v4.held) {
      let _v0 = void 0 !== _v1 && _v1.flowId !== _v4.retiredFlowId ? _v1 : (0, _v3.adoptAuthAttribution)("", _v2, _v3);
      return _v5({
        ..._v4,
        held: _v0
      }), _v0;
    }
    return _v4.held;
  }]);
}