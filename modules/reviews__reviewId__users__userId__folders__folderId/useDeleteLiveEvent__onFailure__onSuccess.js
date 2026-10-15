{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDeleteLiveEvent", 0, ({
    onFailure: _v0,
    onSuccess: _v1
  }) => {
    let [_v2, _v3] = (0, _v1.useState)(null),
      [_v4, {
        called: _v5,
        callCount: _v6,
        data: _v7,
        error: _v8,
        loading: _v9
      }] = (0, _v2.useDeleteUserLiveEvent)(),
      _v10 = (0, _v1.useRef)(0);
    return (0, _v1.useEffect)(() => {
      let _v0, _v1;
      if (!_v2) return;
      let {
          uri: _v2,
          ownerId: _v3
        } = _v2,
        _v4 = ((_v1 = _v2?.match(/live_events\/\d+/g)) && (_v0 = _v1[0].split("/").pop()), _v0);
      _v4 && _v3 && _v4({
        where: {
          userId: _v3,
          liveEventId: parseInt(_v4, 10)
        }
      });
    }, [_v4, _v2]), (0, _v1.useEffect)(() => {
      !_v2 || !_v5 || _v9 || _v10.current !== _v6 && (_v10.current++, _v8 && (_v0(), _v3(null)), _v8 || (_v1(_v2), _v3(null)));
    }, [_v6, _v5, _v7, _v8, _v9, _v0, _v1, _v2]), _v3;
  }]);
}