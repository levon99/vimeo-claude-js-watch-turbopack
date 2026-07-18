{
  "use strict";

  let _v3 = _v0.r(0),
    {
      MAX_LENGTH: _v4,
      MAX_SAFE_INTEGER: _v5
    } = _v0.r(0),
    {
      safeRe: _v6,
      t: _v7
    } = _v0.r(0),
    _v8 = _v0.r(0),
    {
      compareIdentifiers: _v9
    } = _v0.r(0);
  class _v10 {
    constructor(_v0, _v1) {
      if (_v1 = _v8(_v1), _v0 instanceof _v10) {
        if (!!_v1.loose === _v0.loose && !!_v1.includePrerelease === _v0.includePrerelease) return _v0;else _v0 = _v0.version;
      } else if ("string" != typeof _v0) throw TypeError(`Invalid version. Must be a string. Got type "${typeof _v0}".`);
      if (_v0.length > _v4) throw TypeError(`version is longer than ${_v4} characters`);
      _v3("SemVer", _v0, _v1), this.options = _v1, this.loose = !!_v1.loose, this.includePrerelease = !!_v1.includePrerelease;
      const _v2 = _v0.trim().match(_v1.loose ? _v6[_v7.LOOSE] : _v6[_v7.FULL]);
      if (!_v2) throw TypeError(`Invalid Version: ${_v0}`);
      if (this.raw = _v0, this.major = +_v2[1], this.minor = +_v2[2], this.patch = +_v2[3], this.major > _v5 || this.major < 0) throw TypeError("Invalid major version");
      if (this.minor > _v5 || this.minor < 0) throw TypeError("Invalid minor version");
      if (this.patch > _v5 || this.patch < 0) throw TypeError("Invalid patch version");
      _v2[4] ? this.prerelease = _v2[4].split(".").map(_v0 => {
        if (/^[0-9]+$/.test(_v0)) {
          let _v0 = +_v0;
          if (_v0 >= 0 && _v0 < _v5) return _v0;
        }
        return _v0;
      }) : this.prerelease = [], this.build = _v2[5] ? _v2[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(_v0) {
      if (_v3("SemVer.compare", this.version, this.options, _v0), !(_v0 instanceof _v10)) {
        if ("string" == typeof _v0 && _v0 === this.version) return 0;
        _v0 = new _v10(_v0, this.options);
      }
      return _v0.version === this.version ? 0 : this.compareMain(_v0) || this.comparePre(_v0);
    }
    compareMain(_v0) {
      return (_v0 instanceof _v10 || (_v0 = new _v10(_v0, this.options)), this.major < _v0.major) ? -1 : this.major > _v0.major ? 1 : this.minor < _v0.minor ? -1 : this.minor > _v0.minor ? 1 : this.patch < _v0.patch ? -1 : +(this.patch > _v0.patch);
    }
    comparePre(_v0) {
      if (_v0 instanceof _v10 || (_v0 = new _v10(_v0, this.options)), this.prerelease.length && !_v0.prerelease.length) return -1;
      if (!this.prerelease.length && _v0.prerelease.length) return 1;
      if (!this.prerelease.length && !_v0.prerelease.length) return 0;
      let _v1 = 0;
      do {
        let _v0 = this.prerelease[_v1],
          _v1 = _v0.prerelease[_v1];
        if (_v3("prerelease compare", _v1, _v0, _v1), void 0 === _v0 && void 0 === _v1) return 0;
        if (void 0 === _v1) return 1;
        if (void 0 === _v0) return -1;else if (_v0 === _v1) continue;else return _v9(_v0, _v1);
      } while (++_v1);
    }
    compareBuild(_v0) {
      _v0 instanceof _v10 || (_v0 = new _v10(_v0, this.options));
      let _v1 = 0;
      do {
        let _v0 = this.build[_v1],
          _v1 = _v0.build[_v1];
        if (_v3("build compare", _v1, _v0, _v1), void 0 === _v0 && void 0 === _v1) return 0;
        if (void 0 === _v1) return 1;
        if (void 0 === _v0) return -1;else if (_v0 === _v1) continue;else return _v9(_v0, _v1);
      } while (++_v1);
    }
    inc(_v0, _v1, _v2) {
      if (_v0.startsWith("pre")) {
        if (!_v1 && !1 === _v2) throw Error("invalid increment argument: identifier is empty");
        if (_v1) {
          let _v0 = `-${_v1}`.match(this.options.loose ? _v6[_v7.PRERELEASELOOSE] : _v6[_v7.PRERELEASE]);
          if (!_v0 || _v0[1] !== _v1) throw Error(`invalid identifier: ${_v1}`);
        }
      }
      switch (_v0) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", _v1, _v2);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", _v1, _v2);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", _v1, _v2), this.inc("pre", _v1, _v2);
          break;
        case "prerelease":
          0 === this.prerelease.length && this.inc("patch", _v1, _v2), this.inc("pre", _v1, _v2);
          break;
        case "release":
          if (0 === this.prerelease.length) throw Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          0 === this.prerelease.length && this.patch++, this.prerelease = [];
          break;
        case "pre":
          {
            let _v0 = +!!Number(_v2);
            if (0 === this.prerelease.length) this.prerelease = [_v0];else {
              let _v0 = this.prerelease.length;
              for (; --_v0 >= 0;) "number" == typeof this.prerelease[_v0] && (this.prerelease[_v0]++, _v0 = -2);
              if (-1 === _v0) {
                if (_v1 === this.prerelease.join(".") && !1 === _v2) throw Error("invalid increment argument: identifier already exists");
                this.prerelease.push(_v0);
              }
            }
            if (_v1) {
              let _v0 = [_v1, _v0];
              !1 === _v2 && (_v0 = [_v1]), 0 === _v9(this.prerelease[0], _v1) ? isNaN(this.prerelease[1]) && (this.prerelease = _v0) : this.prerelease = _v0;
            }
            break;
          }
        default:
          throw Error(`invalid increment argument: ${_v0}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  _v1.exports = _v10;
}