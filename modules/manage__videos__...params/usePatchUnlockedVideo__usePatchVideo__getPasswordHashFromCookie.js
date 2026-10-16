{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["usePatchUnlockedVideo", 0, function () {
    let [_v0, _v1] = (0, _v1.usePatchVideo)();
    return [async _v0 => {
      let _v1 = (0, _v2.getPasswordHashFromCookie)(_v0?.where.videoId);
      return _v0({
        ..._v0,
        query: {
          ...(_v1 && {
            password: _v1
          })
        }
      });
    }, _v1];
  }]);
}