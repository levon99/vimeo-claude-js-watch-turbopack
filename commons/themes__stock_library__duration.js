{
  "use strict";

  var _v1,
    _v2 = ((_v1 = {}).THEMES = "themes", _v1.STOCK_LIBRARY = "stock_library", _v1.DURATION = "duration", _v1.WATERMARK_TOGGLE = "watermark_toggle", _v1);
  let _v3 = {};
  _v0.s(["SingleImpressionContext", () => _v2, "upsellFlowHookFactory", 0, _v0 => (_v0, _v1) => _v0 => new Promise((_v0, _v1) => {
    if (_v1 && _v1.shouldShowUpsell && !_v1.shouldShowUpsell(_v0)) return void _v0();
    if (_v1 && _v1.singleImpressionContext) {
      if (_v3[_v1.singleImpressionContext]) return void _v0();
      _v3[_v1.singleImpressionContext] = !0;
    }
    if ("function" == typeof _v0) {
      let _v0 = {
          vsid: _v0.vsid
        },
        _v1 = "function" == typeof _v0 ? _v0(_v0) : _v0;
      _v0({
        ..._v0,
        ..._v1
      }).then(() => _v0()).catch(() => _v1());
    } else _v0();
  })], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["default", 0, function () {
    let {
        user: _v0,
        teamUser: _v1
      } = (0, _v4.useContext)(_v6.ConfigContext),
      [_v2, _v3] = (0, _v4.useState)(!1),
      [_v4, {
        data: _v5,
        loading: _v6
      }] = (0, _v5.useLazyQuery)(`/users/${_v1?.ownerId || _v0?.id}?fields=upload_quota`);
    return (0, _v4.useEffect)(() => {
      _v0 && _v4();
    }, [_v4, _v0]), (0, _v4.useEffect)(() => {
      _v5 && !_v6 && _v3(_v5.uploadQuota?.periodic?.max ? !_v5.uploadQuota?.periodic?.free : !_v5.uploadQuota?.lifetime?.free);
    }, [_v6, _v5]), {
      data: _v5,
      isLoading: _v6,
      hasReachedQuotaLimit: _v2
    };
  }], 0);
}