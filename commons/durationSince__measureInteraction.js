{
  "use strict";

  _v0.s(["durationSince", 0, _v0 => Math.round(performance.now() - _v0), "measureInteraction", 0, function () {
    let _v0 = performance.now();
    return {
      end: () => performance.now() - _v0
    };
  }]);
}