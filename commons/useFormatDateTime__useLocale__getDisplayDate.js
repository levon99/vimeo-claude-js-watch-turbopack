{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useFormatDateTime", 0, () => {
    let _v0 = (0, _v1.useLocale)();
    return {
      getDisplayDate: _v0 => (0, _v2.getDisplayDate)(_v0, _v0),
      getDisplayDateWithTime: _v0 => (0, _v2.getDisplayDateWithTime)(_v0, _v0),
      getEventStartTime: _v0 => (0, _v2.getEventStartTime)(_v0, _v0)
    };
  }]);
}