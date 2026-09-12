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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (0, _v7.default)((0, _v8.default)((0, _v6.default)(({
    previewSize: _v0,
    onRegistrationSuccess: _v1,
    setLeadUuid: _v2,
    onMount: _v3,
    onUnmount: _v4
  }) => {
    let _v5 = (0, _v10.useGlobalStore)(_v0 => _v0.entityId),
      _v6 = (0, _v4.getCookie)(_v5),
      _v7 = (0, _v2.useRef)(_v3);
    _v7.current = _v3;
    let _v8 = (0, _v2.useRef)(_v4);
    return _v8.current = _v4, (0, _v2.useEffect)(() => {
      _v6 && _v1?.(_v6);
    }, [_v6, _v1]), (0, _v2.useEffect)(() => (_v7.current?.(), () => {
      _v8.current?.();
    }), []), (0, _v1.jsx)(_v3.Box, {
      height: _v0?.height || "100vh",
      width: _v0?.width || "100%",
      children: (0, _v1.jsx)(_v5.Preview, {
        setLeadUuid: _v2
      })
    });
  }, _v9.PAGE_TYPES.REGISTRATION), _v9.PAGE_TYPES.REGISTRATION), _v9.PAGE_TYPES.REGISTRATION);
  _v0.s(["default", 0, _v11]);
}