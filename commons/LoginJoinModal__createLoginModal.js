{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.default)(async () => {
    let {
      LoginJoinModal: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["LoginJoinModal", 0, _v7, "createLoginModal", 0, function () {
    let _v0 = (0, _v3.createContext)({
      modalState: _v6.attributedLoginModalDefaultState,
      toggleLoginModal: () => void 0,
      setRedirectUrl: () => void 0
    });
    return {
      loginJoinModalContext: _v0,
      LoginModalProvider: ({
        children: _v0
      }) => {
        let _v1 = (0, _v6.useLoginModalSession)();
        return (0, _v1.jsx)(_v0.Provider, {
          value: _v1,
          children: _v0
        });
      },
      LoginModal: () => {
        let {
          modalState: _v0
        } = (0, _v3.useContext)(_v0);
        return (0, _v1.jsx)(_v4.ThemeProvider, {
          theme: _v5.themes.light,
          children: (0, _v1.jsx)(_v7, {
            ..._v0
          })
        });
      },
      useLoginModal: () => {
        let {
          toggleLoginModal: _v0,
          setRedirectUrl: _v1
        } = (0, _v3.useContext)(_v0);
        return {
          toggleLoginModal: _v0,
          setRedirectUrl: _v1
        };
      }
    };
  }]);
}