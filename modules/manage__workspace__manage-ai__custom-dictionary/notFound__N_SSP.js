{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
      ownerUserId: _v0
    }) => (0, _v1.jsx)(_v2.Box, {
      paddingTop: "lg",
      children: (0, _v1.jsx)(_v5.AccountDictionaryRoute, {
        ownerUserId: _v0
      })
    }),
    _v9 = async _v0 => {
      let [_v1, _v2] = await Promise.all([(0, _v7.getWspServerSideProps)(_v0), (0, _v6.getOrgAndWspUuidServerSideProps)(_v0)]);
      return "notFound" in _v1 || "notFound" in _v2 || _v1.props.organizationUuid !== _v2.props.organizationUuid || _v1.props.workspaceUuid !== _v2.props.workspaceUuid ? {
        notFound: !0
      } : {
        props: {
          ..._v1.props,
          ownerUserId: _v2.props.organizationInternalId
        }
      };
    };
  (0, _v3.withPageSetup)(_v9, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v8.getLayout = (_v0, _v1) => (0, _v4.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}