{
  "use strict";

  function _v1(_v0, _v1) {
    return `dismiss-offer-displayed:${_v1}:${_v0}`;
  }
  function _v2(_v0, _v1) {
    try {
      let _v0 = window.localStorage.getItem(_v1(_v0, _v1));
      if (!_v0) return 0;
      let [_v1, _v2] = _v0.split(":");
      if (Number(_v2) !== Math.floor(Date.now() / 0)) return 0;
      return Number(_v1) || 0;
    } catch {
      return 0;
    }
  }
  _v0.s(["hasDismissOfferBeenDisplayed", 0, function (_v0, _v1, _v2) {
    return _v2(_v0, _v1) >= _v2;
  }, "markDismissOfferDisplayed", 0, function (_v0, _v1) {
    try {
      let _v0 = _v2(_v0, _v1) + 1,
        _v1 = Math.floor(Date.now() / 0);
      window.localStorage.setItem(_v1(_v0, _v1), `${_v0}:${_v1}`);
    } catch {
      return;
    }
  }]);
}