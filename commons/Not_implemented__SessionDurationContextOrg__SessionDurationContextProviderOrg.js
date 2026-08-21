{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
      teamSettingsResult: null,
      teamSettingsLoading: !1,
      teamSettingsUpdateError: !1,
      teamSettingsUpdateLoading: !1,
      onUpdateSetting: () => {
        throw Error("Not implemented");
      }
    },
    _v8 = (0, _v2.createContext)(_v7),
    _v9 = (0, _v2.createContext)(_v7);
  _v0.s(["SessionDurationContextOrg", 0, _v9, "SessionDurationContextProviderOrg", 0, ({
    orgUuid: _v0,
    children: _v1
  }) => {
    let {
        teamSettingsResult: _v2,
        teamSettingsLoading: _v3
      } = (0, _v4.useGetOrgSettings)({
        orgUuid: _v0,
        settings: ["sessionDuration", "inactivityDuration"]
      }),
      {
        teamSettingsUpdateError: _v4,
        teamSettingsUpdateLoading: _v5,
        onUpdateSetting: _v6
      } = (0, _v5.useUpdateOrgSettings)({
        orgUuid: _v0
      }),
      _v7 = (0, _v2.useMemo)(() => ({
        teamSettingsResult: _v2,
        teamSettingsLoading: _v3,
        teamSettingsUpdateError: !!_v4,
        teamSettingsUpdateLoading: _v5,
        onUpdateSetting: _v6
      }), [_v6, _v3, _v2, _v4, _v5]);
    return (0, _v1.jsx)(_v9.Provider, {
      value: _v7,
      children: _v1
    });
  }, "SessionDurationContextProviderTeam", 0, ({
    ownerId: _v0,
    children: _v1
  }) => {
    let {
        teamSettingsResult: _v2,
        teamSettingsLoading: _v3
      } = (0, _v6.useGetTeamSettings)({
        userId: _v0,
        settings: ["sessionDuration", "inactivityDuration"]
      }),
      {
        teamSettingsUpdateError: _v4,
        teamSettingsUpdateLoading: _v5,
        onUpdateSetting: _v6
      } = (0, _v3.useUpdateTeamSettings)({
        userId: _v0
      }),
      _v7 = (0, _v2.useMemo)(() => ({
        teamSettingsResult: _v2,
        teamSettingsLoading: _v3,
        teamSettingsUpdateError: !!_v4,
        teamSettingsUpdateLoading: _v5,
        onUpdateSetting: _v6
      }), [_v6, _v3, _v2, _v4, _v5]);
    return (0, _v1.jsx)(_v8.Provider, {
      value: _v7,
      children: _v1
    });
  }, "SessionDurationContextTeam", 0, _v8]);
}