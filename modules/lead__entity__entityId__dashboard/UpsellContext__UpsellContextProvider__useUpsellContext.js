{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v2.createContext)({
    message: "",
    setMessage: () => void 0
  });
  _v0.s(["UpsellContext", 0, _v3, "UpsellContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)("");
    return (0, _v1.jsx)(_v3.Provider, {
      value: {
        message: _v1,
        setMessage: _v2
      },
      children: _v0
    });
  }, "useUpsellContext", 0, () => (0, _v2.useContext)(_v3)]);
}