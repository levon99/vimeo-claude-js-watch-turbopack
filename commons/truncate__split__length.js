{
  "use strict";

  _v0.s(["truncate", 0, function (_v0, _v1 = 60) {
    if (!_v0) return;
    let _v2 = _v0.split(" ");
    return _v2.length < _v1 ? _v0 : _v2.slice(0, _v1).join(" ") + "...";
  }]);
}