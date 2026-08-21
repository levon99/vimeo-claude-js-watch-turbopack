{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useTrackCheckoutFormAction", 0, () => {
    let {
        state: _v0
      } = (0, _v4.useStateContext)(),
      _v1 = (0, _v2.useViewer)(),
      _v2 = (0, _v1.useSearchParams)();
    return [(_v0, _v1, _v2, _v3) => {
      _v1 && (0, _v3.trackCheckoutFormAction)({
        actionType: _v0,
        location: _v1,
        errorId: _v2,
        errorCopy: _v3,
        checkoutState: _v0,
        viewer: _v1,
        searchParams: _v2
      });
    }];
  }]);
}