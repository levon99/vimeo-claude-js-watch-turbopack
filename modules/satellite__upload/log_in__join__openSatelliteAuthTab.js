{
  "use strict";

  let _v1 = {
    login: "/log_in",
    join: "/join"
  };
  _v0.s(["openSatelliteAuthTab", 0, (_v0, _v1 = "login") => {
    window.open(((_v0, _v1 = "login") => {
      let _v2 = encodeURIComponent(`/satellite/auth-complete?source=${_v0}`);
      return `${_v1[_v1]}?redirect=${_v2}`;
    })(_v0, _v1), "_blank");
  }]);
}