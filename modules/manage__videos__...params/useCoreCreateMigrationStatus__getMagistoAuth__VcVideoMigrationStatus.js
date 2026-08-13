{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useCoreCreateMigrationStatus", 0, function (_v0) {
    let {
      getMagistoAuth: _v1,
      VcVideoMigrationStatus: _v2
    } = (0, _v1.useContext)(_v2.MagistoSessionContext);
    return (0, _v1.useEffect)(() => {
      _v0 && _v1();
    }, [_v1, _v0]), void 0 !== _v2 ? _v2 !== _v2.VideoMigrationStatus.BEFORE_MIGRATION : void 0;
  }]);
}