{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v3.default)(() => _v0.A(0).then(_v0 => _v0.AddFolderToShowcase), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v6 = (0, _v4.createContext)({
      setModalContextState: _v2.default
    });
  _v0.s(["AddFolderToShowcaseModalContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v4.useState)({
        isActive: !1,
        state: null
      }),
      {
        isActive: _v3,
        state: _v4
      } = _v1;
    return (0, _v1.jsxs)(_v6.Provider, {
      value: {
        setModalContextState: _v2
      },
      children: [_v0, _v3 && (0, _v1.jsx)(_v5, {
        ..._v4,
        isActive: !0,
        setIsActive: () => _v2({
          isActive: !1,
          state: null
        })
      })]
    });
  }, "ModalContextDispatch", 0, _v6]);
}