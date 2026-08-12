{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useLayoutPlaceholdersDescriptors", 0, function (_v0) {
    return (0, _v1.useMemo)(() => {
      let _v0 = _v0?.meta?.layoutType,
        _v1 = _v0 ? _v3.layoutsConfig.LAYOUTS[_v0] : null;
      if (!_v0 || !_v1) return [];
      {
        let _v0 = (0, _v4.findIndexPositionedGraphics)(_v0).reduce((_v0, _v1) => (Number.isInteger(_v1.position.index) && (_v0[_v1.position.index] = _v1), _v0), {}),
          _v1 = Object.values(_v1.sources).length,
          _v2 = [];
        for (let _v0 = 0; _v0 < _v1; _v0++) if (!_v0[_v0]) {
          let _v0 = (0, _v2.getLayoutPositionFromDescriptor)(_v1, _v0);
          _v2.push({
            ..._v0,
            index: _v0,
            align: "topLeft"
          });
        }
        return _v2;
      }
    }, [_v0?.meta?.layoutType, _v0?.graphics]);
  }]);
}