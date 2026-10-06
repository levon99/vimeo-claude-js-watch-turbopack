{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = () => {
    let _v0 = (0, _v10.useViewer)(),
      {
        teamInfo: {
          teamData: {
            ownerId: _v1
          }
        },
        isTeamInfoLoading: _v2
      } = (0, _v2.useContext)(_v9.ManageTeamStateCtx),
      {
        capabilities: _v3,
        ready: _v4
      } = (0, _v5.useCapability)(["hasEnterprise"], _v0?.teamUser?.ownerId);
    if (_v2 || !_v4 || !_v1) return (0, _v1.jsx)(_v3.Flex, {
      flex: "1",
      align: "center",
      justify: "center",
      py: "xl",
      children: (0, _v1.jsx)(_v4.Spinner, {
        size: "lg"
      })
    });
    if (_v3?.hasEnterprise === !1) throw new _v6.UnauthorizedError();
    return (0, _v1.jsx)(_v11.CustomMetadataPage, {
      ownerId: _v1
    });
  };
  (0, _v7.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v12.getLayout = _v0 => (0, _v8.getLayout)(_v0, {
    contentColumn: "customMetadata"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}