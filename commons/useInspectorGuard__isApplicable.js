{
  "use strict";

  _v0.s(["useInspectorGuard", () => _v11], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v0 => {
    let _v1 = (0, _v6.useAppSelector)(_v5.selectedElementsTypesSelector),
      _v2 = (0, _v6.useAppSelector)(_v5.selectedTransitionsIdsSelector),
      _v3 = (0, _v3.useRef)({
        selectionType: _v4.CompositionElementCategoryType.EMPTY,
        isMultiSelect: !1
      });
    (0, _v3.useEffect)(() => {
      let _v0 = _v1.map(_v0 => (0, _v7.getCategoryType)(_v0));
      _v2.length > 0 && _v0.push(_v4.CompositionElementCategoryType.TRANSITION);
      let _v1 = _v0.reduce((_v0, _v1) => _v0 === _v4.CompositionElementCategoryType.EMPTY ? _v4.CompositionElementCategoryType[_v1.toUpperCase()] : _v4.CompositionElementCategoryType[_v0.toUpperCase()] === _v1 ? _v0 : _v4.CompositionElementCategoryType.MIXED, _v4.CompositionElementCategoryType.EMPTY),
        _v2 = _v0.length > 1,
        _v3 = _v3.current.selectionType !== _v1,
        _v4 = _v3.current.isMultiSelect !== _v2;
      _v3.current = {
        selectionType: _v1,
        isMultiSelect: _v2
      }, (_v3 || _v4) && _v0 && _v0(_v3.current);
    }, [_v0, _v1, _v2.length]);
  };
  _v0.s(["default", 0, _v8], 0);
  var _v9 = _v0.i(0);
  let _v10 = () => !0,
    _v11 = () => {
      let _v0 = (0, _v6.useAppDispatch)(),
        _v1 = (0, _v6.useAppSelector)(_v9.currentInspectorSelector),
        _v2 = _v1 && _v2.inspectorsMap[_v1],
        _v3 = _v2 && "isApplicable" in _v2 && _v2.isApplicable ? _v2.isApplicable : _v10,
        _v4 = (0, _v6.useAppSelector)(_v3);
      return _v8(() => {
        _v4 || _v0((0, _v1.openLastApplicableInspectorAction)());
      }), _v4;
    };
}