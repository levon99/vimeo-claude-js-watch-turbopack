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
    _v10 = _v0.i(0);
  let _v11 = () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = (0, _v8.useViewer)(),
      _v2 = _v1?.teamUser,
      _v3 = _v1?.team,
      _v4 = _v2?.ownerId || _v1?.user?.id || null,
      {
        capabilities: {
          hasContentSpaceEnabled: _v5
        },
        ready: _v6
      } = (0, _v4.useCapability)(["hasContentSpaceEnabled"], _v4),
      _v7 = _v4 && _v6 && _v5 && !!(_v3 || _v2 && _v2.permissionLevel === _v7.TEAM_PERMISSION.ADMIN);
    return ((0, _v3.useEffect)(() => {
      _v6 && !_v7 && _v0.push("/manage/workspace/members");
    }, [_v0, _v7, _v6]), _v7) ? (0, _v1.jsx)(_v6.DeactivatedPtf, {
      ownerUserId: _v4
    }) : null;
  };
  (0, _v5.withPageSetup)(_v10.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v11.getLayout = (_v0, _v1) => (0, _v9.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}