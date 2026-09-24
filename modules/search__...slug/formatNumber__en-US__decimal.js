{
  "use strict";

  _v0.i(0), _v0.i(0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["formatNumber", 0, ({
    value: _v0,
    locale: _v1 = "en-US",
    style: _v2 = "decimal",
    notation: _v3 = "standard",
    signDisplay: _v4 = "auto",
    minimumSignificantDigits: _v5,
    maximumSignificantDigits: _v6,
    minimumFractionDigits: _v7
  }) => new Intl.NumberFormat([_v1, "en"], {
    style: _v2,
    notation: _v3,
    signDisplay: _v4,
    minimumSignificantDigits: _v5,
    maximumSignificantDigits: _v6,
    minimumFractionDigits: _v7
  }).format(_v0), "getZeroFilledGraphData", 0, (_v0, _v1, _v2, _v3, _v4) => {
    var _v5;
    let _v6,
      _v7 = _v4 || (_v5 = _v0, (_v6 = _v1.diff(_v5, "days")).days < 50 ? "day" : _v6.days > 720 ? "year" : _v6.days > 180 ? "month" : "week"),
      _v8 = _v2 ? [..._v2] : [],
      _v9 = _v0.startOf(_v7),
      _v10 = _v1.endOf(_v7),
      _v11 = _v8.some(_v0 => _v1.DateTime.fromISO(_v0?.startDate).setZone("utc").toISODate() === _v9.toISODate()),
      _v12 = _v8.some(_v0 => void 0 !== _v0.endDate && _v1.DateTime.fromISO(_v0.endDate).setZone("utc").toISODate() === _v10.toISODate());
    _v11 || _v8?.unshift({
      ...(_v3 || _v2.ZERO_FILL_ANALYTICS_ITEM),
      startDate: _v0.setZone("utc").toISO(),
      endDate: _v0.endOf(_v7).toISO()
    }), _v12 || _v9.toISODate() === _v10.toISODate() || _v8?.push({
      ...(_v3 || _v2.ZERO_FILL_ANALYTICS_ITEM),
      startDate: _v10.startOf(_v7).toISO(),
      endDate: _v1.toISO()
    });
    let _v13 = [];
    return _v8?.forEach((_v0, _v1) => {
      var _v2, _v3, _v4;
      let _v5,
        _v6,
        _v7 = _v8?.[_v1 - 1]?.endDate,
        _v8 = _v0?.startDate,
        _v9 = _v7 && _v8 ? (_v2 = _v1.DateTime.fromISO(_v7, {
          zone: "utc"
        }), _v3 = _v1.DateTime.fromISO(_v8, {
          zone: "utc"
        }), _v4 = _v7, _v5 = _v2.plus({
          [_v4]: 1
        }).startOf(_v4), _v6 = `${_v4}s`, Array.from({
          length: _v3.diff(_v5, _v6)[_v6]
        }, (_v0, _v1) => _v5.plus({
          [_v4]: _v1
        }))) : [],
        _v10 = _v9.length ? _v9.map(_v0 => ({
          ...(_v3 || _v2.ZERO_FILL_ANALYTICS_ITEM),
          startDate: _v0.toISO(),
          endDate: _v0.endOf(_v7).toISO()
        })) : [];
      _v10?.length && _v13.push(..._v10), _v13.push(_v0);
    }), _v13;
  }, "stringifyNumber", 0, _v0 => _v0.toLocaleString()]);
}