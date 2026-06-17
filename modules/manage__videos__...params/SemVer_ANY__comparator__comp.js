{
  "use strict";

  let _v3 = Symbol("SemVer ANY");
  class _v4 {
    static get ANY() {
      return _v3;
    }
    constructor(_v0, _v1) {
      if (_v1 = _v5(_v1), _v0 instanceof _v4) if (!!_v1.loose === _v0.loose) return _v0;else _v0 = _v0.value;
      _v9("comparator", _v0 = _v0.trim().split(/\s+/).join(" "), _v1), this.options = _v1, this.loose = !!_v1.loose, this.parse(_v0), this.semver === _v3 ? this.value = "" : this.value = this.operator + this.semver.version, _v9("comp", this);
    }
    parse(_v0) {
      let _v1 = this.options.loose ? _v6[_v7.COMPARATORLOOSE] : _v6[_v7.COMPARATOR],
        _v2 = _v0.match(_v1);
      if (!_v2) throw TypeError(`Invalid comparator: ${_v0}`);
      this.operator = void 0 !== _v2[1] ? _v2[1] : "", "=" === this.operator && (this.operator = ""), _v2[2] ? this.semver = new _v10(_v2[2], this.options.loose) : this.semver = _v3;
    }
    toString() {
      return this.value;
    }
    test(_v0) {
      if (_v9("Comparator.test", _v0, this.options.loose), this.semver === _v3 || _v0 === _v3) return !0;
      if ("string" == typeof _v0) try {
        _v0 = new _v10(_v0, this.options);
      } catch (_v0) {
        return !1;
      }
      return _v8(_v0, this.operator, this.semver, this.options);
    }
    intersects(_v0, _v1) {
      if (!(_v0 instanceof _v4)) throw TypeError("a Comparator is required");
      return "" === this.operator ? "" === this.value || new _v11(_v0.value, _v1).test(this.value) : "" === _v0.operator ? "" === _v0.value || new _v11(this.value, _v1).test(_v0.semver) : !((_v1 = _v5(_v1)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === _v0.value) || !_v1.includePrerelease && (this.value.startsWith("<0.0.0") || _v0.value.startsWith("<0.0.0"))) && !!(this.operator.startsWith(">") && _v0.operator.startsWith(">") || this.operator.startsWith("<") && _v0.operator.startsWith("<") || this.semver.version === _v0.semver.version && this.operator.includes("=") && _v0.operator.includes("=") || _v8(this.semver, "<", _v0.semver, _v1) && this.operator.startsWith(">") && _v0.operator.startsWith("<") || _v8(this.semver, ">", _v0.semver, _v1) && this.operator.startsWith("<") && _v0.operator.startsWith(">"));
    }
  }
  _v1.exports = _v4;
  let _v5 = _v0.r(0),
    {
      safeRe: _v6,
      t: _v7
    } = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0);
}