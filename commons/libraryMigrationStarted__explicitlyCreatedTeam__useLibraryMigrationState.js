{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["libraryMigrationStarted", "explicitlyCreatedTeam"];
  _v0.s(["useLibraryMigrationState", 0, function (_v0) {
    let _v1 = null == _v0 ? void 0 : Number(_v0),
      _v2 = null != _v1 && Number.isFinite(_v1) && _v1 > 0 ? _v1 : void 0,
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v1.useGetUserCapabilities)(() => _v2 ? {
        select: _v2,
        where: {
          userId: _v2
        }
      } : null, {
        refreshInterval: _v0 => _v0?.libraryMigrationStarted && !_v0?.explicitlyCreatedTeam ? 0 : 0
      });
    return {
      migrationStarted: !!_v3?.libraryMigrationStarted,
      explicitlyCreatedTeam: !!_v3?.explicitlyCreatedTeam,
      loading: _v4,
      hasData: null != _v3
    };
  }]);
}