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
  let _v10 = ({
    orgId: _v0
  }) => {
    let {
      capabilities: _v1,
      ready: _v2
    } = (0, _v5.useCapability)(["hasApplyBranding", "hasManageBranding"], _v0);
    if (!_v2) return (0, _v1.jsx)(_v3.BrandkitLoader, {
      type: "page"
    });
    if (!_v1?.hasApplyBranding) throw new _v6.UnauthorizedError();
    return (0, _v1.jsx)(_v2.Box, {
      paddingTop: "lg",
      paddingX: "lg",
      children: (0, _v1.jsx)(_v4.BrandCenter, {
        userId: _v0,
        allowManage: _v1?.hasManageBranding || !1
      })
    });
  };
  (0, _v7.withPageSetup)(async _v0 => {
    let _v1 = await (0, _v9.getOrgAndWspUuidServerSideProps)(_v0);
    return "notFound" in _v1 ? _v1 : {
      props: {
        hasThemeSupport: !0,
        organizationUuid: _v1.props.organizationUuid,
        orgId: _v1.props.organizationInternalId,
        workspaceUuid: _v1.props.workspaceUuid
      }
    };
  }, {
    requireLogin: !0
  }), _v10.getLayout = (_v0, _v1) => (0, _v8.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v10], 0);
}