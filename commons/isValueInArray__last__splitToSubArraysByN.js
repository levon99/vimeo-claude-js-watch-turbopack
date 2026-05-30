{
  "use strict";

  _v0.s(["isValueInArray", 0, (_v0, _v1) => _v1.includes(_v0), "last", 0, _v0 => _v0[_v0.length - 1], "splitToSubArraysByN", 0, (_v0, _v1) => Array.from({
    length: Math.ceil(_v0.length / _v1)
  }, (_v0, _v1) => _v0.slice(_v1 * _v1, (_v1 + 1) * _v1))]);
}