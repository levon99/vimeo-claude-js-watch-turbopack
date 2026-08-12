{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useLayoutPreference", 0, () => {
    let [_v0, _v1] = (0, _v2.default)("vl_lay", "GRID_LAYOUT"),
      [_v2, _v3] = (0, _v1.useState)(_v0);
    return [_v2, (0, _v1.useCallback)(_v0 => {
      _v3(_v0), _v1(_v0);
    }, [_v1])];
  }], 0);
  var _v3 = _v0.i(0);
  let _v4 = ({
    sortType: _v0,
    sortKey: _v1
  }) => {
    switch (_v1) {
      case _v3.VL_SORT_LOCAL_STORAGE_KEY:
        return _v3.VL_SORT_OPTIONS.includes(_v0);
      case _v3.VL_EVENTS_SORT_LOCAL_STORAGE_KEY:
        return _v3.VL_EVENTS_SORT_OPTIONS.includes(_v0);
      case _v3.VL_SHOWCASES_SORT_LOCAL_STORAGE_KEY:
        return _v3.VL_SHOWCASES_SORT_OPTIONS.includes(_v0);
      case _v3.VL_EVENT_SERIES_SORT_LOCAL_STORAGE_KEY:
        return _v3.VL_EVENT_SERIES_SORT_OPTIONS.includes(_v0);
      case _v3.VL_SWM_SORT_LOCAL_STORAGE_KEY:
        return _v3.VL_SWM_SORT_OPTIONS.includes(_v0);
      default:
        return !1;
    }
  };
  _v0.s(["useSortPreference", 0, (_v0, _v1) => {
    let [_v2, _v3] = (0, _v2.default)(_v1, _v0),
      _v4 = _v4({
        sortType: _v2.type,
        sortKey: _v1
      }) ? _v2 : _v0,
      [_v5, _v6] = (0, _v1.useState)(_v4);
    return (0, _v1.useEffect)(() => {
      _v4 === _v0 && _v3(_v0);
    }, [_v0, _v3, _v4]), [_v5, (0, _v1.useCallback)(_v0 => {
      _v4({
        sortType: _v0.type,
        sortKey: _v1
      }) && (_v6(_v0), _v3(_v0));
    }, [_v3, _v1])];
  }], 0);
}