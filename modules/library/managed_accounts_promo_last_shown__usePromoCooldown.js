{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "managed_accounts_promo_last_shown";
  _v0.s(["usePromoCooldown", 0, function () {
    let _v0 = (0, _v2.useHasMounted)();
    return {
      canShow: (0, _v1.useCallback)(() => {
        if (!_v0) return !1;
        let _v0 = function () {
          try {
            let _v0 = window.localStorage.getItem(_v3);
            if (!_v0) return null;
            let _v1 = JSON.parse(_v0);
            if ("object" == typeof _v1 && null !== _v1 && "number" == typeof _v1.ts) return _v1.ts;
            return null;
          } catch {
            return null;
          }
        }();
        return null === _v0 || Date.now() - _v0 >= 0;
      }, [_v0]),
      markShown: (0, _v1.useCallback)(() => {
        try {
          let _v0 = {
            ts: Date.now()
          };
          window.localStorage.setItem(_v3, JSON.stringify(_v0));
        } catch {}
      }, [])
    };
  }]);
}