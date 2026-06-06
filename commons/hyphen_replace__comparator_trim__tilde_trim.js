{
  "use strict";

  let _v3 = /\s+/g;
  class _v4 {
    constructor(_v0, _v1) {
      if (_v1 = _v6(_v1), _v0 instanceof _v4) if (!!_v1.loose === _v0.loose && !!_v1.includePrerelease === _v0.includePrerelease) return _v0;else return new _v4(_v0.raw, _v1);
      if (_v0 instanceof _v7) return this.raw = _v0.value, this.set = [[_v0]], this.formatted = void 0, this;
      if (this.options = _v1, this.loose = !!_v1.loose, this.includePrerelease = !!_v1.includePrerelease, this.raw = _v0.trim().replace(_v3, " "), this.set = this.raw.split("||").map(_v0 => this.parseRange(_v0.trim())).filter(_v0 => _v0.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const _v0 = this.set[0];
        if (this.set = this.set.filter(_v0 => !_v17(_v0[0])), 0 === this.set.length) this.set = [_v0];else if (this.set.length > 1) {
          for (const _v0 of this.set) if (1 === _v0.length && _v18(_v0[0])) {
            this.set = [_v0];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (void 0 === this.formatted) {
        this.formatted = "";
        for (let _v0 = 0; _v0 < this.set.length; _v0++) {
          _v0 > 0 && (this.formatted += "||");
          let _v0 = this.set[_v0];
          for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0 > 0 && (this.formatted += " "), this.formatted += _v0[_v0].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(_v0) {
      let _v1 = ((this.options.includePrerelease && _v15) | (this.options.loose && _v16)) + ":" + _v0,
        _v2 = _v5.get(_v1);
      if (_v2) return _v2;
      let _v3 = this.options.loose,
        _v4 = _v3 ? _v10[_v11.HYPHENRANGELOOSE] : _v10[_v11.HYPHENRANGE];
      _v8("hyphen replace", _v0 = _v0.replace(_v4, _v30(this.options.includePrerelease))), _v8("comparator trim", _v0 = _v0.replace(_v10[_v11.COMPARATORTRIM], _v12)), _v8("tilde trim", _v0 = _v0.replace(_v10[_v11.TILDETRIM], _v13)), _v8("caret trim", _v0 = _v0.replace(_v10[_v11.CARETTRIM], _v14));
      let _v5 = _v0.split(" ").map(_v0 => _v20(_v0, this.options)).join(" ").split(/\s+/).map(_v0 => _v29(_v0, this.options));
      _v3 && (_v5 = _v5.filter(_v0 => (_v8("loose invalid filter", _v0, this.options), !!_v0.match(_v10[_v11.COMPARATORLOOSE])))), _v8("range list", _v5);
      let _v6 = new Map();
      for (let _v0 of _v5.map(_v0 => new _v7(_v0, this.options))) {
        if (_v17(_v0)) return [_v0];
        _v6.set(_v0.value, _v0);
      }
      _v6.size > 1 && _v6.has("") && _v6.delete("");
      let _v7 = [..._v6.values()];
      return _v5.set(_v1, _v7), _v7;
    }
    intersects(_v0, _v1) {
      if (!(_v0 instanceof _v4)) throw TypeError("a Range is required");
      return this.set.some(_v0 => _v19(_v0, _v1) && _v0.set.some(_v0 => _v19(_v0, _v1) && _v0.every(_v0 => _v0.every(_v0 => _v0.intersects(_v0, _v1)))));
    }
    test(_v0) {
      if (!_v0) return !1;
      if ("string" == typeof _v0) try {
        _v0 = new _v9(_v0, this.options);
      } catch (_v0) {
        return !1;
      }
      for (let _v0 = 0; _v0 < this.set.length; _v0++) if (_v31(this.set[_v0], _v0, this.options)) return !0;
      return !1;
    }
  }
  _v1.exports = _v4;
  let _v5 = new (_v0.r(0))(),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    {
      safeRe: _v10,
      t: _v11,
      comparatorTrimReplace: _v12,
      tildeTrimReplace: _v13,
      caretTrimReplace: _v14
    } = _v0.r(0),
    {
      FLAG_INCLUDE_PRERELEASE: _v15,
      FLAG_LOOSE: _v16
    } = _v0.r(0),
    _v17 = _v0 => "<0.0.0-0" === _v0.value,
    _v18 = _v0 => "" === _v0.value,
    _v19 = (_v0, _v1) => {
      let _v2 = !0,
        _v3 = _v0.slice(),
        _v4 = _v3.pop();
      for (; _v2 && _v3.length;) _v2 = _v3.every(_v0 => _v4.intersects(_v0, _v1)), _v4 = _v3.pop();
      return _v2;
    },
    _v20 = (_v0, _v1) => (_v8("comp", _v0 = _v0.replace(_v10[_v11.BUILD], ""), _v1), _v8("caret", _v0 = _v24(_v0, _v1)), _v8("tildes", _v0 = _v22(_v0, _v1)), _v8("xrange", _v0 = _v26(_v0, _v1)), _v8("stars", _v0 = _v28(_v0, _v1)), _v0),
    _v21 = _v0 => !_v0 || "x" === _v0.toLowerCase() || "*" === _v0,
    _v22 = (_v0, _v1) => _v0.trim().split(/\s+/).map(_v0 => _v23(_v0, _v1)).join(" "),
    _v23 = (_v0, _v1) => {
      let _v2 = _v1.loose ? _v10[_v11.TILDELOOSE] : _v10[_v11.TILDE];
      return _v0.replace(_v2, (_v0, _v1, _v2, _v3, _v4) => {
        let _v5;
        return _v8("tilde", _v0, _v0, _v1, _v2, _v3, _v4), _v21(_v1) ? _v5 = "" : _v21(_v2) ? _v5 = `>=${_v1}.0.0 <${+_v1 + 1}.0.0-0` : _v21(_v3) ? _v5 = `>=${_v1}.${_v2}.0 <${_v1}.${+_v2 + 1}.0-0` : _v4 ? (_v8("replaceTilde pr", _v4), _v5 = `>=${_v1}.${_v2}.${_v3}-${_v4} <${_v1}.${+_v2 + 1}.0-0`) : _v5 = `>=${_v1}.${_v2}.${_v3} <${_v1}.${+_v2 + 1}.0-0`, _v8("tilde return", _v5), _v5;
      });
    },
    _v24 = (_v0, _v1) => _v0.trim().split(/\s+/).map(_v0 => _v25(_v0, _v1)).join(" "),
    _v25 = (_v0, _v1) => {
      _v8("caret", _v0, _v1);
      let _v2 = _v1.loose ? _v10[_v11.CARETLOOSE] : _v10[_v11.CARET],
        _v3 = _v1.includePrerelease ? "-0" : "";
      return _v0.replace(_v2, (_v0, _v1, _v2, _v3, _v4) => {
        let _v5;
        return _v8("caret", _v0, _v0, _v1, _v2, _v3, _v4), _v21(_v1) ? _v5 = "" : _v21(_v2) ? _v5 = `>=${_v1}.0.0${_v3} <${+_v1 + 1}.0.0-0` : _v21(_v3) ? _v5 = "0" === _v1 ? `>=${_v1}.${_v2}.0${_v3} <${_v1}.${+_v2 + 1}.0-0` : `>=${_v1}.${_v2}.0${_v3} <${+_v1 + 1}.0.0-0` : _v4 ? (_v8("replaceCaret pr", _v4), _v5 = "0" === _v1 ? "0" === _v2 ? `>=${_v1}.${_v2}.${_v3}-${_v4} <${_v1}.${_v2}.${+_v3 + 1}-0` : `>=${_v1}.${_v2}.${_v3}-${_v4} <${_v1}.${+_v2 + 1}.0-0` : `>=${_v1}.${_v2}.${_v3}-${_v4} <${+_v1 + 1}.0.0-0`) : (_v8("no pr"), _v5 = "0" === _v1 ? "0" === _v2 ? `>=${_v1}.${_v2}.${_v3}${_v3} <${_v1}.${_v2}.${+_v3 + 1}-0` : `>=${_v1}.${_v2}.${_v3}${_v3} <${_v1}.${+_v2 + 1}.0-0` : `>=${_v1}.${_v2}.${_v3} <${+_v1 + 1}.0.0-0`), _v8("caret return", _v5), _v5;
      });
    },
    _v26 = (_v0, _v1) => (_v8("replaceXRanges", _v0, _v1), _v0.split(/\s+/).map(_v0 => _v27(_v0, _v1)).join(" ")),
    _v27 = (_v0, _v1) => {
      _v0 = _v0.trim();
      let _v2 = _v1.loose ? _v10[_v11.XRANGELOOSE] : _v10[_v11.XRANGE];
      return _v0.replace(_v2, (_v0, _v1, _v2, _v3, _v4, _v5) => {
        _v8("xRange", _v0, _v0, _v1, _v2, _v3, _v4, _v5);
        let _v6 = _v21(_v2),
          _v7 = _v6 || _v21(_v3),
          _v8 = _v7 || _v21(_v4);
        return "=" === _v1 && _v8 && (_v1 = ""), _v5 = _v1.includePrerelease ? "-0" : "", _v6 ? _v0 = ">" === _v1 || "<" === _v1 ? "<0.0.0-0" : "*" : _v1 && _v8 ? (_v7 && (_v3 = 0), _v4 = 0, ">" === _v1 ? (_v1 = ">=", _v7 ? (_v2 = +_v2 + 1, _v3 = 0) : _v3 = +_v3 + 1, _v4 = 0) : "<=" === _v1 && (_v1 = "<", _v7 ? _v2 = +_v2 + 1 : _v3 = +_v3 + 1), "<" === _v1 && (_v5 = "-0"), _v0 = `${_v1 + _v2}.${_v3}.${_v4}${_v5}`) : _v7 ? _v0 = `>=${_v2}.0.0${_v5} <${+_v2 + 1}.0.0-0` : _v8 && (_v0 = `>=${_v2}.${_v3}.0${_v5} <${_v2}.${+_v3 + 1}.0-0`), _v8("xRange return", _v0), _v0;
      });
    },
    _v28 = (_v0, _v1) => (_v8("replaceStars", _v0, _v1), _v0.trim().replace(_v10[_v11.STAR], "")),
    _v29 = (_v0, _v1) => (_v8("replaceGTE0", _v0, _v1), _v0.trim().replace(_v10[_v1.includePrerelease ? _v11.GTE0PRE : _v11.GTE0], "")),
    _v30 = _v0 => (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11) => (_v1 = _v21(_v2) ? "" : _v21(_v3) ? `>=${_v2}.0.0${_v0 ? "-0" : ""}` : _v21(_v4) ? `>=${_v2}.${_v3}.0${_v0 ? "-0" : ""}` : _v5 ? `>=${_v1}` : `>=${_v1}${_v0 ? "-0" : ""}`, _v7 = _v21(_v8) ? "" : _v21(_v9) ? `<${+_v8 + 1}.0.0-0` : _v21(_v10) ? `<${_v8}.${+_v9 + 1}.0-0` : _v11 ? `<=${_v8}.${_v9}.${_v10}-${_v11}` : _v0 ? `<${_v8}.${_v9}.${+_v10 + 1}-0` : `<=${_v7}`, `${_v1} ${_v7}`.trim()),
    _v31 = (_v0, _v1, _v2) => {
      for (let _v0 = 0; _v0 < _v0.length; _v0++) if (!_v0[_v0].test(_v1)) return !1;
      if (_v1.prerelease.length && !_v2.includePrerelease) {
        for (let _v0 = 0; _v0 < _v0.length; _v0++) if (_v8(_v0[_v0].semver), _v0[_v0].semver !== _v7.ANY && _v0[_v0].semver.prerelease.length > 0) {
          let _v0 = _v0[_v0].semver;
          if (_v0.major === _v1.major && _v0.minor === _v1.minor && _v0.patch === _v1.patch) return !0;
        }
        return !1;
      }
      return !0;
    };
}