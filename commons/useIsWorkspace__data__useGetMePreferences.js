{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useIsWorkspace", 0, () => {
    let {
      data: _v0
    } = (0, _v1.useGetMePreferences)({
      select: [_v2.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
    }, {
      revalidateOnFocus: !1,
      revalidateIfStale: !1
    });
    return {
      isWorkspace: !!_v0?.[_v2.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
    };
  }]);
}