{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["formatAgendaDayLabel", 0, (_v0, _v1) => {
    let _v2 = new Date(_v0).getTime();
    if (Number.isNaN(_v2)) return null;
    let _v3 = new Date(_v2),
      _v4 = (_v0 => {
        let _v1 = (0, _v1.getCurrentLocale)(),
          _v2 = {
            month: "short",
            day: "numeric"
          };
        if (_v0) try {
          return new Intl.DateTimeFormat(_v1, {
            ..._v2,
            timeZone: _v0
          });
        } catch {}
        return new Intl.DateTimeFormat(_v1, _v2);
      })(_v1);
    if (!(0, _v1.getCurrentLocale)().startsWith("en")) return {
      label: _v4.format(_v3),
      ordinal: null
    };
    let _v5 = _v4.formatToParts(_v3),
      _v6 = _v5.find(_v0 => "month" === _v0.type)?.value ?? "",
      _v7 = _v5.find(_v0 => "day" === _v0.type)?.value ?? "",
      _v8 = Number(_v7);
    return {
      label: `${_v6} ${_v7}`,
      ordinal: Number.isNaN(_v8) ? null : (_v0 => {
        let _v1 = _v0 % 100;
        if (_v1 >= 11 && _v1 <= 13) return "th";
        switch (_v0 % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      })(_v8)
    };
  }]);
}