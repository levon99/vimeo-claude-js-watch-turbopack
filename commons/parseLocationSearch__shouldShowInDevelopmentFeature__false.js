{
  "use strict";

  let _v1 = _v0 => new URLSearchParams(window.location.search).get(_v0);
  _v0.s(["parseLocationSearch", 0, _v1, "shouldShowInDevelopmentFeature", 0, (_v0, _v1 = !1) => {
    if (_v1) {
      let _v0 = _v1(_v0);
      if (_v0) {
        if ("false" === _v0) {
          try {
            window.localStorage.removeItem(_v0);
          } catch (_v0) {}
          return !1;
        }
        try {
          window.localStorage.setItem(_v0, JSON.stringify(_v0));
        } catch (_v0) {}
        return "true" === _v0;
      }
      try {
        let _v0 = window.localStorage.getItem(_v0);
        return !!_v0 && "true" === JSON.parse(_v0);
      } catch (_v0) {}
      return !1;
    }
    return "true" === _v1(_v0);
  }]);
}