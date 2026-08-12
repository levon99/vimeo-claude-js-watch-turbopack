{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v0.i(0).default)(() => _v0.A(0).then(_v0 => _v0.AddToShowcase), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v5 = (0, _v1.createContext)({
      setModalContextState: _v3.default
    });
  _v0.s(["AddToShowcaseModalContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v1.useState)({
        isActive: !1,
        state: null
      }),
      {
        isActive: _v3,
        state: _v4
      } = _v1;
    return (0, _v2.jsxs)(_v5.Provider, {
      value: {
        setModalContextState: _v2
      },
      children: [_v0, _v3 && (0, _v2.jsx)(_v4, {
        ..._v4,
        isActive: !0,
        setIsActive: () => _v2({
          isActive: !1,
          state: null
        })
      })]
    });
  }, "ModalContextDispatch", 0, _v5], 0), _v0.s(["useAddToShowcaseModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v5);
    return {
      openAddToShowcaseModal: _v0 => _v0({
        isActive: !0,
        state: _v0
      }),
      closeAddToShowcaseModal: () => _v0({
        isActive: !1,
        state: null
      })
    };
  }], 0);
}