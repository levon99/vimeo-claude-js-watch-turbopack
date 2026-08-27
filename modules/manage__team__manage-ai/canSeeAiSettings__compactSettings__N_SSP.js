{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => {
    let {
      teamInfo: {
        teamData: {
          ownerId: _v0
        }
      }
    } = (0, _v2.useContext)(_v5.ManageTeamStateCtx);
    return (0, _v1.jsx)(_v6.default, {
      ownerId: _v0
    });
  };
  (0, _v3.withPageSetup)({
    requireLogin: !0,
    capability: "canSeeAiSettings",
    inlineViewer: !0,
    noIndex: !0
  }), _v7.getLayout = _v0 => (0, _v4.getLayout)(_v0, {
    contentColumn: "compactSettings"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}