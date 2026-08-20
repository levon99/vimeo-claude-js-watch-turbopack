{
  "use strict";

  _v0.s(["metrics", 0, {
    histogram: (_v0, _v1, _v2) => globalThis.__metrics?.histogram(_v0, _v1, _v2),
    counter: (_v0, _v1) => globalThis.__metrics?.counter(_v0, _v1),
    gaugeInc: _v0 => globalThis.__metrics?.gaugeInc(_v0),
    gaugeDec: _v0 => globalThis.__metrics?.gaugeDec(_v0)
  }]);
}