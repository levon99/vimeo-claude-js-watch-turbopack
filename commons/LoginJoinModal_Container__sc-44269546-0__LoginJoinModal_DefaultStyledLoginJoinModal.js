{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.i(0);
  let _v6 = (0, _v2.default)(async () => ({
    default: (await _v0.A(0)).default
  }), {
    loadableGenerated: {
      modules: [0]
    }
  });
  function _v7({
    children: _v0,
    onSuccess: _v1,
    type: _v2,
    isShowing: _v3,
    disableDismiss: _v4,
    onDismiss: _v5,
    redirectUrlAfterSocialLogin: _v6,
    showFBCreativeConnectJoinModal: _v7,
    redirectUrl: _v8,
    target: _v9,
    updateInitialType: _v10,
    bpData: _v11
  }) {
    let [_v12, _v13] = (0, _v4.useState)(!!_v3),
      [_v14, _v15] = (0, _v4.useState)(_v2);
    (0, _v4.useEffect)(() => {
      _v15(_v2);
    }, [_v2]), (0, _v4.useEffect)(() => {
      _v13(!!_v3);
    }, [_v3]);
    let _v16 = () => {
      _v13(_v0 => !_v0);
    };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0 ? _v0(_v16) : null, (0, _v1.jsx)(_v6, {
        type: _v14,
        active: _v12,
        disableDismiss: _v4,
        redirectUrlAfterSocialLogin: _v6,
        redirectUrlFbForm: _v8,
        showFBCreativeConnectJoinModal: _v7,
        target: _v9,
        redirectUrl: _v8,
        onDismiss: () => {
          _v16(), _v5 && _v5(), _v15(_v2);
        },
        onSuccess: _v0 => {
          _v16(), _v1 && _v1(_v0);
        },
        updateType: _v0 => {
          _v10 && _v10(_v0), _v15(_v0);
        },
        bpData: _v11
      })]
    });
  }
  _v5.default.div.withConfig({
    displayName: "LoginJoinModal__Container",
    componentId: "sc-44269546-0"
  })`
  display: flex;
  flex-direction: column;
  margin: 0 ${(0, _v3.rem)(32)};

  @media screen and (max-width: ${(0, _v3.rem)(479)}) {
    margin: 0;
  }
`;
  let _v8 = (0, _v5.default)(_v7).withConfig({
    displayName: "LoginJoinModal__DefaultStyledLoginJoinModal",
    componentId: "sc-44269546-1"
  })`
  #joinModal,
  #loginModal {
    span {
      margin-left: 0;
    }
  }
`;
  _v0.s(["DefaultStyledLoginJoinModal", 0, _v8, "LoginJoinModal", 0, _v7]);
}