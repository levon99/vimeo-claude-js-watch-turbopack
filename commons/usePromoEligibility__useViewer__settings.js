{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["usePromoEligibility", 0, function () {
    let _v0 = (0, _v2.useViewer)(),
      {
        settings: _v1
      } = (0, _v1.useOrionSettings)(),
      _v2 = (0, _v4.useManagedAccountsSuppression)(),
      _v3 = _v0?.user?.id,
      {
        hasInvited: _v4
      } = (0, _v3.useHasInvitedFlag)(_v3);
    return !_v0?.isSimplifiedSite && _v1.enable_managed_accounts && void 0 !== _v3 && !_v4 && !_v2;
  }]);
}