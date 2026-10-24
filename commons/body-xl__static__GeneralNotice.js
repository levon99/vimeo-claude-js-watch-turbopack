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
      children: _v0,
      onClose: _v1,
      status: _v2
    }) => (0, _v1.jsx)(_v3.Alert, {
      onClose: _v1,
      status: _v2,
      children: _v0
    }),
    _v11 = ({
      fontWeight: _v0,
      children: _v1
    }) => (0, _v1.jsx)(_v4.Text, {
      variant: "body-xl",
      position: "static",
      lineHeight: (0, _v5.rem)(20),
      letterSpacing: (0, _v5.rem)(-.2),
      fontSize: (0, _v5.rem)(14),
      fontWeight: _v0,
      children: _v1
    });
  _v0.s(["GeneralNotice", 0, _v10, "SeatLimitNotice", 0, ({
    untranslatedUserRole: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(!1),
      {
        membership: _v3,
        teamInfo: {
          currentTeamSize: _v4,
          teamMembersCount: _v5
        }
      } = (0, _v2.useContext)(_v6.ManageTeamStateCtx);
    (0, _v2.useEffect)(() => {
      _v2(!0);
    }, [_v3]);
    let _v6 = () => {
      _v2(!1);
    };
    if (_v1) {
      if (_v4 + _v7.OWNER >= _v7.MAX_TEAM_SIZE_ALLOWED_PRICING) {
        if (_v0 === _v8.TeamRole.Owner) return (0, _v1.jsx)(_v10, {
          onClose: _v6,
          children: _v9.T.AccountUpgradeMessage(_v7.MAX_TEAM_SIZE_ALLOWED_PRICING)
        });else return (0, _v1.jsx)(_v10, {
          onClose: _v6,
          children: `${_v9.T.AccountUpgradeMessage(_v7.MAX_TEAM_SIZE_ALLOWED_PRICING)} ${_v9.T.ContactMessage}`
        });
      } else if (_v3.isFreeTrial && !_v3.currentUnassignedSeatCount && _v3.seatCount >= _v7.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v4 >= _v5.admin + _v5.contributor + _v3.currentUnassignedSeatCount + _v7.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS) return (0, _v1.jsxs)(_v10, {
        children: [(0, _v1.jsx)(_v11, {
          fontWeight: "700",
          children: _v9.T.FreeTrialTeamLimitReached
        }), (0, _v1.jsx)(_v11, {
          fontWeight: "400",
          children: ` ${_v9.T.AdditionalInvites}`
        })]
      });
    }
    return null;
  }]);
}