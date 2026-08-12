{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v8 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["Header", 0, function ({
    clickJoinAnalyticsEvent: _v0,
    globalSearch: _v1 = !0,
    isShowcasesCms: _v2
  }) {
    let _v3 = (0, _v4.useIsBokeh)(),
      _v4 = (0, _v3.useContext)(_v5.ViewerContext);
    return (0, _v1.jsxs)(_v6.Header, {
      isBokeh: _v3,
      locale: _v4?.locale || "en",
      children: [(0, _v1.jsx)(_v6.MobileHeaderContainer, {
        children: (0, _v1.jsx)(_v8, {
          clickJoinAnalyticsEvent: _v0
        })
      }, "mobile-header"), (0, _v1.jsx)(_v6.DesktopHeaderContainer, {
        children: (0, _v1.jsx)(_v7, {
          clickJoinAnalyticsEvent: _v0,
          globalSearch: _v1,
          isShowcasesCms: _v2
        })
      }, "desktop-header")]
    });
  }]);
}