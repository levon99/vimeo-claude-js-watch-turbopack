{
  "use strict";

  _v0.s(["space", 0, _v0 => {
    if (_v0 % 50 != 0) throw Error("Spacing token must be a multiple of 50");
    return `${.25 * _v0 / 50}rem`;
  }]);
}