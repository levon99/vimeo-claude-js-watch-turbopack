{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v6 = (0, _v3.createContext)({
      setModalContextState: () => console.log("noop")
    });
  _v0.s(["ModalContextDispatch", 0, _v6, "UpsellModalProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v3.useContext)(_v4.ViewerContext),
      [_v2, _v3] = (0, _v3.useState)({
        isActive: !1,
        state: null
      }),
      {
        isActive: _v4,
        state: _v5
      } = _v2;
    return (0, _v1.jsxs)(_v6.Provider, {
      value: {
        setModalContextState: _v3
      },
      children: [_v0, _v4 && (0, _v1.jsx)(_v5, {
        apiUrl: _v1?.apiUrl,
        userConfig: {
          jwt: _v1?.jwt,
          userId: _v1?.user?.id
        },
        templateType: "default",
        ..._v5
      })]
    });
  }]);
}