{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7({
    memberId: _v0
  }) {
    let _v1 = (0, _v2.useContext)(_v6.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id;
    return (0, _v1.jsx)(_v5.PermissionsListRoot, {
      teamUserId: _v0,
      ownerId: _v2
    });
  }
  _v7.getLayout = _v4.getSharedContentLayout, (0, _v3.withPageSetup)(({
    params: _v0
  }) => {
    let _v1 = _v0?.member_id;
    return _v1 && "string" == typeof _v1 ? {
      props: {
        memberId: _v1,
        hasThemeSupport: !0
      }
    } : {
      notFound: !0
    };
  }, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}