{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    login: "/log_in",
    join: "/join"
  };
  _v0.s(["useSatelliteAuthTab", 0, () => {
    let _v0 = (0, _v3.useAuthPageEntry)();
    return (0, _v1.useCallback)((_v0, _v1, _v2) => {
      let _v3 = _v0(_v2, _v1, ((_v0, _v1 = "login") => {
        let _v2 = encodeURIComponent(`/satellite/auth-complete?source=${_v0}`);
        return `${_v4[_v1]}?redirect=${_v2}`;
      })(_v0, _v1));
      _v2.safeWindow?.open(_v3, "_blank");
    }, [_v0]);
  }]);
}