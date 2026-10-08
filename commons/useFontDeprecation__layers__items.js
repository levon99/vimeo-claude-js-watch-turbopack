{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useFontDeprecation", 0, () => {
    let {
        createPartial: _v0
      } = (0, _v3.useTextElement)(),
      _v1 = (0, _v7.useAppSelector)(_v6.fontsSelector),
      {
        notifyHelveticaDeprecation: _v2,
        notifyDeletedFontInUse: _v3
      } = (0, _v2.useNotifications)(),
      _v4 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v5.DEPRECATED_FONTS_MAP[_v0.font];
        return _v1 ? {
          ..._v0,
          ..._v0({
            textElement: _v0,
            font: _v1
          })
        } : _v1 && void 0 === _v1[_v0.font] ? {
          ..._v0,
          ..._v0({
            textElement: _v0,
            font: _v4.DEFAULT_FONT
          })
        } : _v0;
      }, [_v0, _v1]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        let _v1 = !1;
        _v0.forEach(_v0 => {
          _v5.DEPRECATED_FONTS_MAP[_v0] ? _v1 = !0 : _v3(_v0);
        }), _v1 && _v2();
      }, [_v3, _v2]);
    return {
      changeInvalidFonts: (0, _v1.useCallback)((_v0, _v1) => {
        let _v2 = new Set(),
          _v3 = _v0 => _v0.map(_v0 => {
            if (!(0, _v8.isTextElement)(_v0)) return _v0;
            let _v1 = _v4(_v0);
            return _v1 !== _v0 ? (_v2.add(_v0.font), _v1) : _v0;
          }),
          _v4 = _v0;
        return ("layers" in _v0 ? _v4 = {
          ..._v0,
          layers: _v0.layers.map(_v0 => ({
            ..._v0,
            composition: _v3(_v0.composition)
          }))
        } : "items" in _v0 && (_v4 = {
          ..._v0,
          items: _v0.items.map(_v0 => ({
            ..._v0,
            composition: _v3(_v0.composition)
          }))
        }), _v2.size > 0) ? (_v1 && _v5(_v2), _v4) : _v0;
      }, [_v5, _v4])
    };
  }]);
}