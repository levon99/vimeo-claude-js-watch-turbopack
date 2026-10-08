{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useEntityRegistrationCarriedFromEventToVod", 0, function (_v0) {
    let [_v1] = (0, _v2.usePatchLeadCaptureResourceIdForm)(),
      {
        data: _v2,
        mutate: _v3
      } = (0, _v2.useGetLeadCaptureResourceIdForm)({
        select: ["registrationSettingsCarried"],
        where: {
          resourceType: "live_events",
          resourceId: _v0
        }
      }, {
        revalidateIfStale: !0,
        revalidateOnFocus: !0
      }),
      _v4 = (0, _v1.useCallback)(async _v0 => {
        await _v1({
          select: ["registrationSettingsCarried"],
          where: {
            resourceType: "live_events",
            resourceId: _v0
          },
          variables: {
            registrationSettingsCarried: _v0
          }
        }), _v3();
      }, [_v0, _v1, _v3]);
    return [_v2?.registrationSettingsCarried, _v4];
  }]);
}