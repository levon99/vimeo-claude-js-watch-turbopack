{
  "use strict";

  let _v1 = new Map(),
    _v2 = {
      true: {
        ja: "h11"
      },
      false: {}
    };
  function _v3(_v0, _v1 = {}) {
    if ("boolean" == typeof _v1.hour12 && (null == _v4 && (_v4 = "24" === new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: !1
    }).format(new Date(0, 2, 3, 0))), _v4)) {
      let _v0 = _v2[String((_v1 = {
          ..._v1
        }).hour12)][_v0.split("-")[0]],
        _v1 = _v1.hour12 ? "h12" : "h23";
      _v1.hourCycle = null != _v0 ? _v0 : _v1, delete _v1.hour12;
    }
    let _v2 = _v0 + (_v1 ? Object.entries(_v1).sort((_v0, _v1) => _v0[0] < _v1[0] ? -1 : 1).join() : "");
    if (_v1.has(_v2)) return _v1.get(_v2);
    let _v3 = new Intl.DateTimeFormat(_v0, _v1);
    return _v1.set(_v2, _v3), _v3;
  }
  let _v4 = null,
    _v5 = null;
  _v0.s(["DateFormatter", 0, class {
    format(_v0) {
      return this.formatter.format(_v0);
    }
    formatToParts(_v0) {
      return this.formatter.formatToParts(_v0);
    }
    formatRange(_v0, _v1) {
      if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(_v0, _v1);
      if (_v1 < _v0) throw RangeError("End date must be >= start date");
      return `${this.formatter.format(_v0)} \u{2013} ${this.formatter.format(_v1)}`;
    }
    formatRangeToParts(_v0, _v1) {
      if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(_v0, _v1);
      if (_v1 < _v0) throw RangeError("End date must be >= start date");
      let _v2 = this.formatter.formatToParts(_v0),
        _v3 = this.formatter.formatToParts(_v1);
      return [..._v2.map(_v0 => ({
        ..._v0,
        source: "startRange"
      })), {
        type: "literal",
        value: " – ",
        source: "shared"
      }, ..._v3.map(_v0 => ({
        ..._v0,
        source: "endRange"
      }))];
    }
    resolvedOptions() {
      let _v0 = this.formatter.resolvedOptions();
      return null == _v5 && (_v5 = "h12" === new Intl.DateTimeFormat("fr", {
        hour: "numeric",
        hour12: !1
      }).resolvedOptions().hourCycle), _v5 && (this.resolvedHourCycle || (this.resolvedHourCycle = function (_v0, _v1) {
        if (!_v1.timeStyle && !_v1.hour) return;
        _v0 = _v0.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
        let _v2 = _v3(_v0 += (_v0.includes("-u-") ? "" : "-u") + "-nu-latn", {
            ..._v1,
            timeZone: void 0
          }),
          _v3 = parseInt(_v2.formatToParts(new Date(0, 2, 3, 0)).find(_v0 => "hour" === _v0.type).value, 10),
          _v4 = parseInt(_v2.formatToParts(new Date(0, 2, 3, 23)).find(_v0 => "hour" === _v0.type).value, 10);
        if (0 === _v3 && 23 === _v4) return "h23";
        if (24 === _v3 && 23 === _v4) return "h24";
        if (0 === _v3 && 11 === _v4) return "h11";
        if (12 === _v3 && 11 === _v4) return "h12";
        throw Error("Unexpected hour cycle result");
      }(_v0.locale, this.options)), _v0.hourCycle = this.resolvedHourCycle, _v0.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === _v0.calendar && (_v0.calendar = "ethioaa"), _v0;
    }
    constructor(_v0, _v1 = {}) {
      this.formatter = _v3(_v0, _v1), this.options = _v1;
    }
  }]);
}