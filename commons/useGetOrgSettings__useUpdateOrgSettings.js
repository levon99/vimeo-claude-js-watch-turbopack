{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useGetOrgSettings", 0, ({
    orgUuid: _v0,
    settings: _v1 = []
  }) => {
    let [_v2, {
      error: _v3,
      data: _v4,
      loading: _v5
    }] = (0, _v2.useGetOrganizationSettingsLazy)();
    return (0, _v1.useEffect)(() => {
      _v0 && _v2 ? _v2({
        select: _v1 || [],
        where: {
          orgUuid: _v0
        }
      }) : Promise.resolve();
    }, [_v0]), {
      teamSettingsResult: _v4,
      teamSettingsLoading: _v5,
      teamSettingsError: _v3
    };
  }], 0), _v0.s(["useUpdateOrgSettings", 0, ({
    orgUuid: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.usePatchOrganizationSettings)(),
      {
        loading: _v3,
        error: _v4
      } = _v2;
    return {
      teamSettingsUpdateError: _v4,
      teamSettingsUpdateLoading: _v3,
      onUpdateSetting: async _v0 => {
        await _v1({
          where: {
            orgUuid: _v0
          },
          variables: _v0
        });
      }
    };
  }], 0);
}