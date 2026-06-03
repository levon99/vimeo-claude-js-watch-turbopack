{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useControlledAccordion", 0, function (_v0, _v1 = "", _v2) {
    let _v3 = (0, _v1.useScope)(),
      _v4 = (0, _v2.useMemo)(() => "function" == typeof _v0 ? _v0() : _v0, _v2),
      _v5 = (0, _v2.useMemo)(() => _v4.reduce((_v0, _v1, _v2) => (_v0[_v1.id] = _v2, _v0), {}), [_v4]),
      _v6 = (0, _v2.useCallback)(_v0 => _v5[_v0] ?? -1, [_v5]),
      _v7 = (0, _v2.useCallback)(_v0 => _v4[_v0]?.id ?? "", [_v4]),
      _v8 = (0, _v2.useCallback)(_v0 => {
        -1 === _v0 ? _v11("") : _v11(_v7(_v0));
      }, [_v7]),
      _v9 = (0, _v2.useCallback)(_v0 => {
        _v11(_v0);
      }, []),
      [_v10, _v11] = (0, _v2.useState)(_v1);
    return (0, _v2.useEffect)(() => _v3.subscribeToSignals(_v0 => {
      _v0.type === _v3.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST && (_v0.data && _v4.find(_v0 => _v0.id === _v0.data) ? _v11(_v0.data) : _v0.data || _v11(""));
    }), [_v3, _v4]), {
      activeId: _v10,
      activeIndex: _v6(_v10),
      items: _v4,
      map: _v5,
      getIndexById: _v6,
      getIdByIndex: _v7,
      onActiveIndexChange: _v8,
      onActiveIdChange: _v9
    };
  }], 0);
  let _v4 = RegExp(":acc=(\\w+)");
  _v0.s(["getDefaultAccordionId", 0, function (_v0) {
    let _v1;
    return ((_v1 = window.location.hash.match(_v4)) ? _v1[1] : null) || String(_v0);
  }], 0);
}