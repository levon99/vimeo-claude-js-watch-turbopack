{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ["liveLocalizationTrialExpiresOn"];
  _v0.s(["useLiveLocalizationTrialExpiry", 0, function () {
    let _v0 = (0, _v2.useSessionOwnerId)(),
      {
        data: _v1
      } = (0, _v1.useGetUser)(() => _v0 ? {
        where: {
          userId: _v0
        },
        select: _v3
      } : null);
    return _v1?.liveLocalizationTrialExpiresOn ?? void 0;
  }]);
}