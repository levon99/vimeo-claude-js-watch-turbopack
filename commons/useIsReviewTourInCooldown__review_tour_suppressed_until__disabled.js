{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useIsReviewTourInCooldown", 0, function ({
    isOwner: _v0
  }) {
    let [_v1, _v2] = (0, _v2.default)("review_tour_suppressed_until", 0);
    return !function ({
      onClose: _v0
    }) {
      let {
        registerOnClose: _v1,
        unregisterOnClose: _v2
      } = (0, _v3.useTourContext)();
      (0, _v1.useEffect)(() => {
        if (_v0) return _v1(_v0), () => _v2(_v0);
      }, [_v0, _v1, _v2]);
    }({
      onClose: (0, _v1.useCallback)((_v0, _v1) => {
        _v0 !== _v4.REVIEW_TOUR_NAME || "disabled" !== _v1 && ("completed" === _v1 ? _v2(Number.MAX_SAFE_INTEGER) : _v2(Date.now() + (_v0 ? 0 : 0)));
      }, [_v0, _v2])
    }), (0, _v1.useMemo)(() => Date.now() < _v1, [_v1]);
  }], 0);
}