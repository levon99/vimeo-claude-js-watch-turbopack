{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5({
    hasReviewLinkCapabilities: _v0,
    hasMultipleReviewLinks: _v1,
    reviewLinks: _v2,
    canUpsell: _v3,
    getReviewPageUrl: _v4
  }) {
    let _v5 = _v2?.length ?? 0,
      _v6 = _v0 && _v5 < _v2.MAX_REVIEW_LINKS && (!_v3 || 0 === _v5),
      _v7 = (0, _v3.selectReviewLinkUriToCopy)(_v2, _v3),
      _v8 = 1 === _v5 && _v7 ? _v4(_v7) : void 0;
    return {
      canCreateReviewLink: _v6,
      canCopyReviewPageLink: _v1 && 1 === _v5 || _v0 && 0 === _v5,
      canManageReviewLinks: _v0 && _v5 > 1,
      reviewPageLink: _v8
    };
  }
  _v0.s(["getReviewLinkMenuState", 0, _v5, "useReviewLinkMenuState", 0, function ({
    hasReviewLinkCapabilities: _v0,
    hasMultipleReviewLinks: _v1,
    reviewLinks: _v2,
    getReviewPageUrl: _v3
  }) {
    let _v4 = (0, _v4.useCanUpSell)();
    return (0, _v1.useMemo)(() => _v5({
      hasReviewLinkCapabilities: _v0,
      hasMultipleReviewLinks: _v1,
      reviewLinks: _v2,
      canUpsell: _v4,
      getReviewPageUrl: _v3
    }), [_v0, _v1, _v2, _v4, _v3]);
  }]);
}