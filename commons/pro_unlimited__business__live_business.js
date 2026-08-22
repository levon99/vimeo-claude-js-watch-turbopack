{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => {
    switch (_v0) {
      case "pro":
      case "pro_unlimited":
      case "business":
      case "live_business":
      case "live_premium":
      case "live_pro":
      case "enterprise":
      case "advanced":
      case "standard":
      case "creator":
      case "core":
      case "professional":
      case "studio":
      case "production":
      case "custom":
        return !1;
      default:
        return !0;
    }
  };
  _v0.s(["useShowTeleprompterUpsell", 0, function (_v0 = !1) {
    let {
        user: _v1,
        teamUser: _v2
      } = (0, _v1.useContext)(_v2.ViewerContext) ?? {},
      _v3 = _v1?.account,
      _v4 = _v2?.accountType;
    return !_v0 && (_v4 && _v2?.ownerId !== _v1?.id ? _v3(_v4) : _v3(_v3));
  }]);
}