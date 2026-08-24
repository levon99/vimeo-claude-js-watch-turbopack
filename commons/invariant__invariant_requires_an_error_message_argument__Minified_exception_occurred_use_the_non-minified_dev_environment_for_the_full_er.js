{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["invariant", 0, function (_v0, _v1, ..._v2) {
    if (void 0 !== _v1.default && void 0 === _v1) throw Error("invariant requires an error message argument");
    if (!_v0) {
      let _v0;
      if (void 0 === _v1) _v0 = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
        let _v0 = 0;
        (_v0 = Error(_v1.replace(/%s/g, function () {
          return _v2[_v0++];
        }))).name = "Invariant Violation";
      }
      throw _v0.framesToPop = 1, _v0;
    }
  }], 0);
  let _v2 = (0, _v0.i(0).createContext)({
    dragDropManager: void 0
  });
  _v0.s(["DndContext", 0, _v2], 0);
}