{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.DownloadModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v5 = (0, _v3.createContext)({
      setModalContextState: () => console.log("noop")
    });
  _v0.s(["DownloadModalProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v3.useState)({
        isActive: !1,
        state: null
      }),
      {
        isActive: _v3,
        state: _v4
      } = _v1;
    return (0, _v1.jsxs)(_v5.Provider, {
      value: {
        setModalContextState: _v2
      },
      children: [_v0, _v3 && (0, _v1.jsx)(_v4, {
        ..._v4,
        isActive: !0,
        closeModal: () => {
          _v2({
            isActive: !1,
            state: null
          });
        }
      })]
    });
  }, "ModalContextDispatch", 0, _v5]);
}