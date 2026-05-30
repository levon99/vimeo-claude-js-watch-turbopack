{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useIsStaff", 0, () => {
    let _v0 = (0, _v1.useViewer)();
    return _v0?.user?.badge?.type === "staff";
  }]);
}