{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    [_v1.ENTITY_TYPE.VIDEO]: "video",
    [_v1.ENTITY_TYPE.EVENT]: "event",
    [_v1.ENTITY_TYPE.SHOWCASE]: "album"
  };
  _v0.s(["useRegistrationFormEntity", 0, () => {
    let _v0 = (0, _v2.useGlobalStore)(_v0 => _v0.entityType),
      _v1 = (0, _v2.useGlobalStore)(_v0 => _v0.entityId),
      _v2 = null == _v0 ? void 0 : _v3[_v0];
    return void 0 === _v2 ? null : {
      entityType: _v2,
      entityId: _v1
    };
  }]);
}