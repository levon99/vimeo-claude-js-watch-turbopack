{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useLibraryMigrationInProgress", 0, function (_v0) {
    let {
      migrationStarted: _v1,
      explicitlyCreatedTeam: _v2,
      loading: _v3
    } = (0, _v1.useLibraryMigrationState)(_v0);
    return {
      inProgress: _v1 && !_v2,
      loading: _v3
    };
  }]);
}