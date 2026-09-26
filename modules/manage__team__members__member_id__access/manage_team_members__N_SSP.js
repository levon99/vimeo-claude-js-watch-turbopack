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
    let _v1 = (0, _v2.useRouter)(),
      {
        settings: _v2,
        isLoadingResponse: _v3
      } = (0, _v5.useOrionSettings)(),
      _v4 = _v2.show_granular_permissions;
    return ((0, _v3.useEffect)(() => {
      _v3 || _v4 || _v1.replace("/manage/team/members");
    }, [_v4, _v3, _v1]), _v3 || !_v4) ? null : (0, _v1.jsx)(_v6.MemberAccessTabs, {
      teamUserId: _v0
    });
  }
  _v7.getLayout = _v0.i(0).getMemberAccessLayout, (0, _v4.withPageSetup)(({
    params: _v0
  }) => {
    let _v1 = Number(_v0?.member_id);
    return _v1 ? {
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