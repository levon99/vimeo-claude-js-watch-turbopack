{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useDismissCooldown", 0, function ({
    cooldownMs: _v0,
    storageKey: _v1
  }) {
    let [_v2, _v3] = (0, _v1.useState)(() => function (_v0) {
      try {
        let _v0 = window.localStorage.getItem(_v0);
        if (!_v0) return null;
        let _v1 = Number(_v0);
        if (!Number.isFinite(_v1) || _v1 <= Date.now()) return window.localStorage.removeItem(_v0), null;
        return _v1;
      } catch {
        return null;
      }
    }(_v1));
    return (0, _v1.useEffect)(() => {
      if (!_v2) return;
      let _v0 = _v2 - Date.now(),
        _v1 = window.setTimeout(() => {
          try {
            window.localStorage.removeItem(_v1);
          } catch {}
          _v3(null);
        }, Math.max(_v0, 0));
      return () => window.clearTimeout(_v1);
    }, [_v2, _v1]), {
      dismiss: (0, _v1.useCallback)(() => {
        let _v0 = Date.now() + _v0;
        try {
          window.localStorage.setItem(_v1, String(_v0));
        } catch {}
        _v3(_v0);
      }, [_v0, _v1]),
      isDismissed: null !== _v2
    };
  }]);
}