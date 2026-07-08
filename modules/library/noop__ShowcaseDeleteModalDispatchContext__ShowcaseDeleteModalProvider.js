{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.default)(async () => {
      let {
        ShowcaseDeleteModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v5 = (0, _v3.createContext)({
      isOpen: !1,
      modalProps: null
    }),
    _v6 = (0, _v3.createContext)(() => {
      console.log("noop");
    });
  _v0.s(["ShowcaseDeleteModalDispatchContext", 0, _v6, "ShowcaseDeleteModalProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v3.useState)({
        isOpen: !1,
        modalProps: null
      }),
      {
        isOpen: _v3,
        modalProps: _v4
      } = _v1;
    return (0, _v1.jsx)(_v5.Provider, {
      value: _v1,
      children: (0, _v1.jsxs)(_v6.Provider, {
        value: _v2,
        children: [_v0, _v3 && (0, _v1.jsx)(_v4, {
          ..._v4
        })]
      })
    });
  }]);
}