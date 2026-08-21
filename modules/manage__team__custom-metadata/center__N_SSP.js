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
    _v9 = _v0.i(0);
  let _v10 = () => {
    let {
      teamInfo: {
        teamData: {
          ownerId: _v0
        }
      },
      teamCapabilities: {
        hasEnterprise: _v1,
        loading: _v2
      }
    } = (0, _v2.useContext)(_v8.ManageTeamStateCtx);
    if (_v2) return (0, _v1.jsx)(_v3.Flex, {
      flex: "1",
      align: "center",
      justify: "center",
      py: "xl",
      children: (0, _v1.jsx)(_v4.Spinner, {
        size: "lg"
      })
    });
    if (!_v1) throw new _v5.UnauthorizedError();
    return (0, _v1.jsx)(_v9.CustomMetadataPage, {
      ownerId: _v0
    });
  };
  (0, _v6.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v10.getLayout = _v7.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v10], 0);
}