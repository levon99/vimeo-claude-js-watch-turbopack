{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useIsLiveTrialBlocked", 0, function () {
    let {
        settings: _v0
      } = (0, _v3.useOrionSettings)(),
      _v1 = (0, _v2.useViewer)();
    return "blocked" === _v0.block_live_streaming_free_trial && _v1?.user?.isFreeTrial === !0 && _v1?.user?.account === _v1.AccountType.Advanced;
  }]);
}