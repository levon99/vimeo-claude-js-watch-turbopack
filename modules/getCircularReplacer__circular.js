{
  "use strict";

  _v0.s(["getCircularReplacer", 0, function (_v0 = "~circular~") {
    let _v1 = new WeakSet();
    return (_v0, _v1) => {
      if ("object" == typeof _v1 && null !== _v1) {
        if (_v1.has(_v1)) return _v0;
        _v1.add(_v1);
      }
      return _v1;
    };
  }]);
}