{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      overrideBreakpoint: void 0,
      inheritColors: null
    },
    _v4 = (0, _v1.create)()((0, _v2.devtools)(_v0 => ({
      ..._v3,
      initializeUIStore: (_v0, _v1) => {
        _v0(() => ({
          inheritColors: _v0,
          overrideBreakpoint: _v1
        }), void 0, "ui/initializeUIStore");
      },
      setOverrideBreakpoint: _v0 => _v0(() => ({
        overrideBreakpoint: _v0
      }), void 0, "ui/setOverrideBreakpoint"),
      setInheritColors: _v0 => _v0(() => ({
        inheritColors: _v0
      }), void 0, "ui/setInheritColors"),
      reset: () => _v0(() => _v3, void 0, "ui/reset")
    }), {
      name: "UIStore",
      enabled: !1
    }));
  _v0.s(["useUIStore", 0, _v4]);
}