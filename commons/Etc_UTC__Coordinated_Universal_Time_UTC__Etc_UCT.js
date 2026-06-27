{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    let _v1 = Math.abs(_v0),
      [_v2, _v3] = [Math.floor(_v1 / 60), _v1 % 60].map(_v0 => _v0.toString().padStart(2, "0")),
      _v4 = `${_v2}:${_v3}`;
    return `${_v0 >= 0 ? "+" : "-"}${_v4}`;
  }
  let _v3 = /^[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?$/,
    _v4 = {
      year: 0,
      month: 1,
      day: 2,
      hour: 3,
      minute: 4,
      second: 5
    };
  function _v5(_v0, _v1) {
    return "string" == typeof _v0 && "string" == typeof _v1 ? _v0.localeCompare(_v1) : 0;
  }
  let _v6 = {
    name: "Etc/UTC",
    alternativeName: "Coordinated Universal Time (UTC)",
    abbreviation: "UTC",
    group: ["Etc/UTC", "Etc/UCT", "UCT", "UTC", "Universal", "Zulu"],
    countryName: "",
    continentCode: "",
    continentName: "",
    mainCities: [""],
    rawOffsetInMinutes: 0,
    rawFormat: "+00:00 Coordinated Universal Time (UTC)",
    currentTimeOffsetInMinutes: 0,
    currentTimeFormat: "+00:00 Coordinated Universal Time (UTC)"
  };
  _v0.s(["getTimeZones", 0, function (_v0) {
    let _v1 = !!_v0 && _v0.includeUtc;
    return _v1.default.reduce(function (_v0, _v1) {
      let _v2 = function (_v0) {
        var _v1;
        let _v2, _v3;
        if (!(_v0 && _v0.match(_v3))) return !1;
        let _v4 = new Date(Date.now());
        try {
          _v2 = new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            timeZone: _v0,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });
        } catch (_v0) {
          return !1;
        }
        let [_v5, _v6, _v7, _v8, _v9, _v10] = _v2.formatToParts ? function (_v0, _v1) {
            let _v2 = _v0.formatToParts(_v1),
              _v3 = [];
            for (let _v0 = 0; _v0 < _v2.length; _v0++) {
              let {
                  type: _v0,
                  value: _v1
                } = _v2[_v0],
                _v2 = _v4[_v0];
              void 0 !== _v2 && (_v3[_v2] = parseInt(_v1, 10));
            }
            return _v3;
          }(_v2, _v4) : function (_v0, _v1) {
            let _v2 = _v0.format(_v1).replace(/\u200E/g, ""),
              [, _v3, _v4, _v5, _v6, _v7, _v8] = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(_v2);
            return [_v5, _v3, _v4, _v6, _v7, _v8];
          }(_v2, _v4),
          _v11 = (_v3 = Date.UTC((_v1 = {
            year: _v5,
            month: _v6,
            day: _v7,
            hour: _v8,
            minute: _v9,
            second: _v10,
            millisecond: 0
          }).year, _v1.month - 1, _v1.day, _v1.hour, _v1.minute, _v1.second, _v1.millisecond), _v1.year < 100 && _v1.year >= 0 && (_v3 = new Date(_v3)).setUTCFullYear(_v3.getUTCFullYear() - 0), +_v3),
          _v12 = +_v4,
          _v13 = _v12 % 0;
        return (_v11 - (_v12 -= _v13 >= 0 ? _v13 : 0 + _v13)) / 0;
      }(_v1.name);
      if (!1 === _v2) return _v0;
      let _v3 = {
        ..._v1,
        currentTimeOffsetInMinutes: _v2
      };
      return _v0.push({
        ..._v3,
        currentTimeFormat: function ({
          alternativeName: _v0,
          mainCities: _v1,
          rawOffsetInMinutes: _v2,
          currentTimeOffsetInMinutes: _v3
        }, {
          useCurrentOffset: _v4 = !1
        } = {}) {
          let _v5 = _v4 ? _v2(_v3) : _v2(_v2);
          return `${_v5.padStart(6, "+")} ${_v0} - ${_v1.join(", ")}`;
        }(_v3, {
          useCurrentOffset: !0
        })
      }), _v0;
    }, _v1 ? [_v6] : []).sort((_v0, _v1) => {
      var _v2, _v3;
      return _v2 = _v0, _v3 = _v1, _v2.currentTimeOffsetInMinutes - _v3.currentTimeOffsetInMinutes || _v5(_v0.alternativeName, _v1.alternativeName) || _v5(_v0.mainCities[0], _v1.mainCities[0]);
    });
  }], 0);
}