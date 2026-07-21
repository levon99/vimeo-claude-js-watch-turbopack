{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.i(0);
  var _v9 = _v0.i(0);
  _v0.s(["default", 0, ({
    userId: _v0,
    policyId: _v1,
    wsMode: _v2
  }) => {
    let _v3 = (0, _v2.useMemo)(_v7.default, []),
      {
        data: _v4,
        isLoading: _v5,
        error: _v6
      } = (0, _v5.useGetTeamDataRetentionPolicy)(() => _v0 && _v1 ? {
        select: _v8.POLICY_SELECT_FIELDS,
        where: {
          userId: _v0,
          policyId: _v1
        }
      } : null),
      _v7 = _v4 ? (0, _v8.responseToPolicyData)(_v4) : (0, _v8.getBlankPolicyData)();
    return _v5 ? (0, _v1.jsx)(_v6.LoadSpinner, {}) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v6 ? (0, _v1.jsx)(_v3.Alert, {
        status: "error",
        children: (0, _v1.jsx)(_v4.AlertDescription, {
          marginTop: "50",
          children: _v3.SomethingWentWrong
        })
      }) : (0, _v1.jsx)(_v9.default, {
        userId: _v0,
        inputPolicyData: _v7,
        wsMode: _v2
      })
    });
  }], 0), _v0.s([], 0);
}