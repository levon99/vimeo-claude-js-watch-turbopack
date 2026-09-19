{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["queryInteractionUserSync", 0, function (_v0) {
    let _v1 = _v0.queryDataSync({
      type: _v1.ELiveInteractionQuery.LIVE_INTERACTION_USER
    });
    return _v1?.data;
  }]);
}