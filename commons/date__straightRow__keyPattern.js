{
  "use strict";

  let _v1 = (_v0, _v1) => _v0.push.apply(_v0, _v1),
    _v2 = _v0 => _v0.sort((_v0, _v1) => _v0.i - _v1.i || _v0.j - _v1.j),
    _v3 = _v0 => {
      let _v1 = {},
        _v2 = 1;
      return _v0.forEach(_v0 => {
        _v1[_v0] = _v2, _v2 += 1;
      }), _v1;
    },
    _v4 = {
      4: [[1, 2], [2, 3]],
      5: [[1, 3], [2, 3], [2, 4]],
      6: [[1, 2], [2, 4], [4, 5]],
      7: [[1, 3], [2, 3], [4, 5], [4, 6]],
      8: [[2, 4], [4, 6]]
    },
    _v5 = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,
    _v6 = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,
    _v7 = /^[A-Z\xbf-\xdf]+$/,
    _v8 = /^[^a-z\xdf-\xff]+$/,
    _v9 = /^[a-z\xdf-\xff]+$/,
    _v10 = /^[^A-Z\xbf-\xdf]+$/,
    _v11 = /[a-z\xdf-\xff]/,
    _v12 = /[A-Z\xbf-\xdf]/,
    _v13 = /[^A-Za-z\xbf-\xdf]/gi,
    _v14 = /^\d+$/,
    _v15 = new Date().getFullYear(),
    _v16 = {
      recentYear: /19\d\d|200\d|201\d|202\d/g
    },
    _v17 = [" ", ",", ";", ":", "|", "/", "\\", "_", ".", "-"],
    _v18 = _v17.length;
  class _v19 {
    match({
      password: _v0
    }) {
      let _v1 = [...this.getMatchesWithoutSeparator(_v0), ...this.getMatchesWithSeparator(_v0)];
      return _v2(this.filterNoise(_v1));
    }
    getMatchesWithSeparator(_v0) {
      let _v1 = [],
        _v2 = /^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;
      for (let _v0 = 0; _v0 <= Math.abs(_v0.length - 6); _v0 += 1) for (let _v0 = _v0 + 5; _v0 <= _v0 + 9 && !(_v0 >= _v0.length); _v0 += 1) {
        let _v0 = _v0.slice(_v0, +_v0 + 1 || 0),
          _v1 = _v2.exec(_v0);
        if (null != _v1) {
          let _v0 = this.mapIntegersToDayMonthYear([parseInt(_v1[1], 10), parseInt(_v1[3], 10), parseInt(_v1[4], 10)]);
          null != _v0 && _v1.push({
            pattern: "date",
            token: _v0,
            i: _v0,
            j: _v0,
            separator: _v1[2],
            year: _v0.year,
            month: _v0.month,
            day: _v0.day
          });
        }
      }
      return _v1;
    }
    getMatchesWithoutSeparator(_v0) {
      let _v1 = [],
        _v2 = /^\d{4,8}$/,
        _v3 = _v0 => Math.abs(_v0.year - _v15);
      for (let _v0 = 0; _v0 <= Math.abs(_v0.length - 4); _v0 += 1) for (let _v0 = _v0 + 3; _v0 <= _v0 + 7 && !(_v0 >= _v0.length); _v0 += 1) {
        let _v0 = _v0.slice(_v0, +_v0 + 1 || 0);
        if (_v2.exec(_v0)) {
          let _v0 = [];
          if (_v4[_v0.length].forEach(([_v0, _v1]) => {
            let _v2 = this.mapIntegersToDayMonthYear([parseInt(_v0.slice(0, _v0), 10), parseInt(_v0.slice(_v0, _v1), 10), parseInt(_v0.slice(_v1), 10)]);
            null != _v2 && _v0.push(_v2);
          }), _v0.length > 0) {
            let _v0 = _v0[0],
              _v1 = _v3(_v0[0]);
            _v0.slice(1).forEach(_v0 => {
              let _v1 = _v3(_v0);
              _v1 < _v1 && (_v0 = _v0, _v1 = _v1);
            }), _v1.push({
              pattern: "date",
              token: _v0,
              i: _v0,
              j: _v0,
              separator: "",
              year: _v0.year,
              month: _v0.month,
              day: _v0.day
            });
          }
        }
      }
      return _v1;
    }
    filterNoise(_v0) {
      return _v0.filter(_v0 => {
        let _v1 = !1,
          _v2 = _v0.length;
        for (let _v0 = 0; _v0 < _v2; _v0 += 1) {
          let _v0 = _v0[_v0];
          if (_v0 !== _v0 && _v0.i <= _v0.i && _v0.j >= _v0.j) {
            _v1 = !0;
            break;
          }
        }
        return !_v1;
      });
    }
    mapIntegersToDayMonthYear(_v0) {
      if (_v0[1] > 31 || _v0[1] <= 0) return null;
      let _v1 = 0,
        _v2 = 0,
        _v3 = 0;
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0 += 1) {
        let _v0 = _v0[_v0];
        if (_v0 > 99 && _v0 < 0 || _v0 > 0) return null;
        _v0 > 31 && (_v2 += 1), _v0 > 12 && (_v1 += 1), _v0 <= 0 && (_v3 += 1);
      }
      return _v2 >= 2 || 3 === _v1 || _v3 >= 2 ? null : this.getDayMonth(_v0);
    }
    getDayMonth(_v0) {
      let _v1 = [[_v0[2], _v0.slice(0, 2)], [_v0[0], _v0.slice(1, 3)]],
        _v2 = _v1.length;
      for (let _v0 = 0; _v0 < _v2; _v0 += 1) {
        let [_v0, _v1] = _v1[_v0];
        if (0 <= _v0 && _v0 <= 0) {
          let _v0 = this.mapIntegersToDayMonth(_v1);
          if (null != _v0) return {
            year: _v0,
            month: _v0.month,
            day: _v0.day
          };
          return null;
        }
      }
      for (let _v0 = 0; _v0 < _v2; _v0 += 1) {
        let [_v0, _v1] = _v1[_v0],
          _v2 = this.mapIntegersToDayMonth(_v1);
        if (null != _v2) return {
          year: this.twoToFourDigitYear(_v0),
          month: _v2.month,
          day: _v2.day
        };
      }
      return null;
    }
    mapIntegersToDayMonth(_v0) {
      let _v1 = [_v0, _v0.slice().reverse()];
      for (let _v0 = 0; _v0 < _v1.length; _v0 += 1) {
        let _v0 = _v1[_v0],
          _v1 = _v0[0],
          _v2 = _v0[1];
        if (_v1 >= 1 && _v1 <= 31 && _v2 >= 1 && _v2 <= 12) return {
          day: _v1,
          month: _v2
        };
      }
      return null;
    }
    twoToFourDigitYear(_v0) {
      return _v0 > 99 ? _v0 : _v0 > 50 ? _v0 + 0 : _v0 + 0;
    }
  }
  let _v20 = new Uint32Array(0),
    _v21 = (_v0, _v1, _v2) => {
      let _v3 = 0,
        _v4 = Object.keys(_v1).find(_v0 => {
          let _v1,
            _v2,
            _v3 = (_v1 = _v0.length <= _v0.length, _v2 = _v0.length <= _v2, _v1 || _v2 ? Math.ceil(_v0.length / 4) : _v2);
          if (Math.abs(_v0.length - _v0.length) > _v3) return !1;
          let _v4 = ((_v0, _v1) => {
              if (_v0.length < _v1.length) {
                let _v0 = _v1;
                _v1 = _v0, _v0 = _v0;
              }
              return 0 === _v1.length ? _v0.length : _v0.length <= 32 ? ((_v0, _v1) => {
                let _v2 = _v0.length,
                  _v3 = _v1.length,
                  _v4 = 1 << _v2 - 1,
                  _v5 = -1,
                  _v6 = 0,
                  _v7 = _v2,
                  _v8 = _v2;
                for (; _v8--;) _v20[_v0.charCodeAt(_v8)] |= 1 << _v8;
                for (_v8 = 0; _v8 < _v3; _v8++) {
                  let _v0 = _v20[_v1.charCodeAt(_v8)],
                    _v1 = _v0 | _v6;
                  _v0 |= (_v0 & _v5) + _v5 ^ _v5, _v6 |= ~(_v0 | _v5), _v5 &= _v0, _v6 & _v4 && _v7++, _v5 & _v4 && _v7--, _v5 = _v5 << 1 | ~(_v1 | (_v6 = _v6 << 1 | 1)), _v6 &= _v1;
                }
                for (_v8 = _v2; _v8--;) _v20[_v0.charCodeAt(_v8)] = 0;
                return _v7;
              })(_v0, _v1) : ((_v0, _v1) => {
                let _v2 = _v1.length,
                  _v3 = _v0.length,
                  _v4 = [],
                  _v5 = [],
                  _v6 = Math.ceil(_v2 / 32),
                  _v7 = Math.ceil(_v3 / 32);
                for (let _v0 = 0; _v0 < _v6; _v0++) _v5[_v0] = -1, _v4[_v0] = 0;
                let _v8 = 0;
                for (; _v8 < _v7 - 1; _v8++) {
                  let _v0 = 0,
                    _v1 = -1,
                    _v2 = 32 * _v8,
                    _v3 = Math.min(32, _v3) + _v2;
                  for (let _v0 = _v2; _v0 < _v3; _v0++) _v20[_v0.charCodeAt(_v0)] |= 1 << _v0;
                  for (let _v0 = 0; _v0 < _v2; _v0++) {
                    let _v0 = _v20[_v1.charCodeAt(_v0)],
                      _v1 = _v5[_v0 / 32 | 0] >>> _v0 & 1,
                      _v2 = _v4[_v0 / 32 | 0] >>> _v0 & 1,
                      _v3 = _v0 | _v0,
                      _v4 = ((_v0 | _v2) & _v1) + _v1 ^ _v1 | _v0 | _v2,
                      _v5 = _v0 | ~(_v4 | _v1),
                      _v6 = _v1 & _v4;
                    _v5 >>> 31 ^ _v1 && (_v5[_v0 / 32 | 0] ^= 1 << _v0), _v6 >>> 31 ^ _v2 && (_v4[_v0 / 32 | 0] ^= 1 << _v0), _v5 = _v5 << 1 | _v1, _v1 = (_v6 = _v6 << 1 | _v2) | ~(_v3 | _v5), _v0 = _v5 & _v3;
                  }
                  for (let _v0 = _v2; _v0 < _v3; _v0++) _v20[_v0.charCodeAt(_v0)] = 0;
                }
                let _v9 = 0,
                  _v10 = -1,
                  _v11 = 32 * _v8,
                  _v12 = Math.min(32, _v3 - _v11) + _v11;
                for (let _v0 = _v11; _v0 < _v12; _v0++) _v20[_v0.charCodeAt(_v0)] |= 1 << _v0;
                let _v13 = _v3;
                for (let _v0 = 0; _v0 < _v2; _v0++) {
                  let _v0 = _v20[_v1.charCodeAt(_v0)],
                    _v1 = _v5[_v0 / 32 | 0] >>> _v0 & 1,
                    _v2 = _v4[_v0 / 32 | 0] >>> _v0 & 1,
                    _v3 = _v0 | _v9,
                    _v4 = ((_v0 | _v2) & _v10) + _v10 ^ _v10 | _v0 | _v2,
                    _v5 = _v9 | ~(_v4 | _v10),
                    _v6 = _v10 & _v4;
                  _v13 += _v5 >>> _v3 - 1 & 1, _v13 -= _v6 >>> _v3 - 1 & 1, _v5 >>> 31 ^ _v1 && (_v5[_v0 / 32 | 0] ^= 1 << _v0), _v6 >>> 31 ^ _v2 && (_v4[_v0 / 32 | 0] ^= 1 << _v0), _v5 = _v5 << 1 | _v1, _v10 = (_v6 = _v6 << 1 | _v2) | ~(_v3 | _v5), _v9 = _v5 & _v3;
                }
                for (let _v0 = _v11; _v0 < _v12; _v0++) _v20[_v0.charCodeAt(_v0)] = 0;
                return _v13;
              })(_v0, _v1);
            })(_v0, _v0),
            _v5 = _v4 <= _v3;
          return _v5 && (_v3 = _v4), _v5;
        });
      return _v4 ? {
        levenshteinDistance: _v3,
        levenshteinDistanceEntry: _v4
      } : {};
    };
  var _v22 = {
      a: ["4", "@"],
      b: ["8"],
      c: ["(", "{", "[", "<"],
      d: ["6", "|)"],
      e: ["3"],
      f: ["#"],
      g: ["6", "9", "&"],
      h: ["#", "|-|"],
      i: ["1", "!", "|"],
      k: ["<", "|<"],
      l: ["!", "1", "|", "7"],
      m: ["^^", "nn", "2n", "/\\\\/\\\\"],
      n: ["//"],
      o: ["0", "()"],
      q: ["9"],
      u: ["|_|"],
      s: ["$", "5"],
      t: ["+", "7"],
      v: ["<", ">", "/"],
      w: ["^/", "uu", "vv", "2u", "2v", "\\\\/\\\\/"],
      x: ["%", "><"],
      z: ["2"]
    },
    _v23 = {
      warnings: {
        straightRow: "straightRow",
        keyPattern: "keyPattern",
        simpleRepeat: "simpleRepeat",
        extendedRepeat: "extendedRepeat",
        sequences: "sequences",
        recentYears: "recentYears",
        dates: "dates",
        topTen: "topTen",
        topHundred: "topHundred",
        common: "common",
        similarToCommon: "similarToCommon",
        wordByItself: "wordByItself",
        namesByThemselves: "namesByThemselves",
        commonNames: "commonNames",
        userInputs: "userInputs",
        pwned: "pwned"
      },
      suggestions: {
        l33t: "l33t",
        reverseWords: "reverseWords",
        allUppercase: "allUppercase",
        capitalization: "capitalization",
        dates: "dates",
        recentYears: "recentYears",
        associatedYears: "associatedYears",
        sequences: "sequences",
        repeated: "repeated",
        longerKeyboardPattern: "longerKeyboardPattern",
        anotherWord: "anotherWord",
        useWords: "useWords",
        noNeed: "noNeed",
        pwned: "pwned"
      },
      timeEstimation: {
        ltSecond: "ltSecond",
        second: "second",
        seconds: "seconds",
        minute: "minute",
        minutes: "minutes",
        hour: "hour",
        hours: "hours",
        day: "day",
        days: "days",
        month: "month",
        months: "months",
        year: "year",
        years: "years",
        centuries: "centuries"
      }
    };
  class _v24 {
    constructor(_v0 = []) {
      this.parents = _v0, this.children = new Map();
    }
    addSub(_v0, ..._v1) {
      let _v2 = _v0.charAt(0);
      this.children.has(_v2) || this.children.set(_v2, new _v24([...this.parents, _v2]));
      let _v3 = this.children.get(_v2);
      for (let _v0 = 1; _v0 < _v0.length; _v0 += 1) {
        let _v0 = _v0.charAt(_v0);
        _v3.hasChild(_v0) || _v3.addChild(_v0), _v3 = _v3.getChild(_v0);
      }
      return _v3.subs = (_v3.subs || []).concat(_v1), this;
    }
    getChild(_v0) {
      return this.children.get(_v0);
    }
    isTerminal() {
      return !!this.subs;
    }
    addChild(_v0) {
      this.hasChild(_v0) || this.children.set(_v0, new _v24([...this.parents, _v0]));
    }
    hasChild(_v0) {
      return this.children.has(_v0);
    }
  }
  var _v25 = (_v0, _v1) => (Object.entries(_v0).forEach(([_v0, _v1]) => {
    _v1.forEach(_v0 => {
      _v1.addSub(_v0, _v0);
    });
  }), _v1);
  let _v26 = new class {
    constructor() {
      this.matchers = {}, this.l33tTable = _v22, this.trieNodeRoot = _v25(_v22, new _v24()), this.dictionary = {
        userInputs: []
      }, this.rankedDictionaries = {}, this.rankedDictionariesMaxWordSize = {}, this.translations = _v23, this.graphs = {}, this.useLevenshteinDistance = !1, this.levenshteinThreshold = 2, this.l33tMaxSubstitutions = 100, this.maxLength = 256, this.setRankedDictionaries();
    }
    setOptions(_v0 = {}) {
      _v0.l33tTable && (this.l33tTable = _v0.l33tTable, this.trieNodeRoot = _v25(_v0.l33tTable, new _v24())), _v0.dictionary && (this.dictionary = _v0.dictionary, this.setRankedDictionaries()), _v0.translations && this.setTranslations(_v0.translations), _v0.graphs && (this.graphs = _v0.graphs), void 0 !== _v0.useLevenshteinDistance && (this.useLevenshteinDistance = _v0.useLevenshteinDistance), void 0 !== _v0.levenshteinThreshold && (this.levenshteinThreshold = _v0.levenshteinThreshold), void 0 !== _v0.l33tMaxSubstitutions && (this.l33tMaxSubstitutions = _v0.l33tMaxSubstitutions), void 0 !== _v0.maxLength && (this.maxLength = _v0.maxLength);
    }
    setTranslations(_v0) {
      if (this.checkCustomTranslations(_v0)) this.translations = _v0;else throw Error("Invalid translations object fallback to keys");
    }
    checkCustomTranslations(_v0) {
      let _v1 = !0;
      return Object.keys(_v23).forEach(_v0 => {
        _v0 in _v0 ? Object.keys(_v23[_v0]).forEach(_v0 => {
          _v0 in _v0[_v0] || (_v1 = !1);
        }) : _v1 = !1;
      }), _v1;
    }
    setRankedDictionaries() {
      let _v0 = {},
        _v1 = {};
      Object.keys(this.dictionary).forEach(_v0 => {
        _v0[_v0] = _v3(this.dictionary[_v0]), _v1[_v0] = this.getRankedDictionariesMaxWordSize(this.dictionary[_v0]);
      }), this.rankedDictionaries = _v0, this.rankedDictionariesMaxWordSize = _v1;
    }
    getRankedDictionariesMaxWordSize(_v0) {
      let _v1 = _v0.map(_v0 => "string" != typeof _v0 ? _v0.toString().length : _v0.length);
      return 0 === _v1.length ? 0 : _v1.reduce((_v0, _v1) => Math.max(_v0, _v1), -1 / 0);
    }
    buildSanitizedRankedDictionary(_v0) {
      let _v1 = [];
      return _v0.forEach(_v0 => {
        let _v1 = typeof _v0;
        ("string" === _v1 || "number" === _v1 || "boolean" === _v1) && _v1.push(_v0.toString().toLowerCase());
      }), _v3(_v1);
    }
    extendUserInputsDictionary(_v0) {
      this.dictionary.userInputs || (this.dictionary.userInputs = []);
      let _v1 = [...this.dictionary.userInputs, ..._v0];
      this.rankedDictionaries.userInputs = this.buildSanitizedRankedDictionary(_v1), this.rankedDictionariesMaxWordSize.userInputs = this.getRankedDictionariesMaxWordSize(_v1);
    }
    addMatcher(_v0, _v1) {
      this.matchers[_v0] ? console.info(`Matcher ${_v0} already exists`) : this.matchers[_v0] = _v1;
    }
  }();
  class _v27 {
    constructor(_v0) {
      this.defaultMatch = _v0;
    }
    match({
      password: _v0
    }) {
      let _v1 = _v0.split("").reverse().join("");
      return this.defaultMatch({
        password: _v1
      }).map(_v0 => ({
        ..._v0,
        token: _v0.token.split("").reverse().join(""),
        reversed: !0,
        i: _v0.length - 1 - _v0.j,
        j: _v0.length - 1 - _v0.i
      }));
    }
  }
  class _v28 {
    constructor({
      substr: _v0,
      limit: _v1,
      trieRoot: _v2
    }) {
      this.buffer = [], this.finalPasswords = [], this.substr = _v0, this.limit = _v1, this.trieRoot = _v2;
    }
    getAllPossibleSubsAtIndex(_v0) {
      let _v1 = [],
        _v2 = this.trieRoot;
      for (let _v0 = _v0; _v0 < this.substr.length; _v0 += 1) {
        let _v0 = this.substr.charAt(_v0);
        if (!(_v2 = _v2.getChild(_v0))) break;
        _v1.push(_v2);
      }
      return _v1;
    }
    helper({
      onlyFullSub: _v0,
      isFullSub: _v1,
      index: _v2,
      subIndex: _v3,
      changes: _v4,
      lastSubLetter: _v5,
      consecutiveSubCount: _v6
    }) {
      if (this.finalPasswords.length >= this.limit) return;
      if (_v2 === this.substr.length) {
        _v0 === _v1 && this.finalPasswords.push({
          password: this.buffer.join(""),
          changes: _v4
        });
        return;
      }
      let _v7 = [...this.getAllPossibleSubsAtIndex(_v2)],
        _v8 = !1;
      for (let _v0 = _v2 + _v7.length - 1; _v0 >= _v2; _v0 -= 1) {
        let _v0 = _v7[_v0 - _v2];
        if (_v0.isTerminal()) {
          if (_v5 === _v0.parents.join("") && _v6 >= 3) continue;
          for (let _v0 of (_v8 = !0, _v0.subs)) {
            this.buffer.push(_v0);
            let _v0 = _v4.concat({
              i: _v3,
              letter: _v0,
              substitution: _v0.parents.join("")
            });
            if (this.helper({
              onlyFullSub: _v0,
              isFullSub: _v1,
              index: _v0 + 1,
              subIndex: _v3 + _v0.length,
              changes: _v0,
              lastSubLetter: _v0.parents.join(""),
              consecutiveSubCount: _v5 === _v0.parents.join("") ? _v6 + 1 : 1
            }), this.buffer.pop(), this.finalPasswords.length >= this.limit) return;
          }
        }
      }
      if (!_v0 || !_v8) {
        let _v0 = this.substr.charAt(_v2);
        this.buffer.push(_v0), this.helper({
          onlyFullSub: _v0,
          isFullSub: _v1 && !_v8,
          index: _v2 + 1,
          subIndex: _v3 + 1,
          changes: _v4,
          lastSubLetter: _v5,
          consecutiveSubCount: _v6
        }), this.buffer.pop();
      }
    }
    getAll() {
      return this.helper({
        onlyFullSub: !0,
        isFullSub: !0,
        index: 0,
        subIndex: 0,
        changes: [],
        lastSubLetter: void 0,
        consecutiveSubCount: 0
      }), this.helper({
        onlyFullSub: !1,
        isFullSub: !0,
        index: 0,
        subIndex: 0,
        changes: [],
        lastSubLetter: void 0,
        consecutiveSubCount: 0
      }), this.finalPasswords;
    }
  }
  class _v29 {
    constructor(_v0) {
      this.defaultMatch = _v0;
    }
    isAlreadyIncluded(_v0, _v1) {
      return _v0.some(_v0 => Object.entries(_v0).every(([_v0, _v1]) => "subs" === _v0 || _v1 === _v1[_v0]));
    }
    match({
      password: _v0
    }) {
      let _v1 = [],
        _v2 = new _v28({
          substr: _v0,
          limit: _v26.l33tMaxSubstitutions,
          trieRoot: _v26.trieNodeRoot
        }).getAll(),
        _v3 = !1,
        _v4 = !0;
      return _v2.forEach(_v0 => {
        if (_v3) return;
        let _v1 = this.defaultMatch({
          password: _v0.password,
          useLevenshtein: _v4
        });
        _v4 = !1, _v1.forEach(_v0 => {
          var _v1, _v2;
          let _v3, _v4, _v5, _v6, _v7;
          _v3 || (_v3 = 0 === _v0.i && _v0.j === _v0.length - 1);
          let _v8 = (_v1 = _v0.i, _v2 = _v0.j, _v3 = _v0.changes.filter(_v0 => _v0.i < _v1).reduce((_v0, _v1) => _v0 - _v1.letter.length + _v1.substitution.length, _v1), _v5 = (_v4 = _v0.changes.filter(_v0 => _v0.i >= _v1 && _v0.i <= _v2)).reduce((_v0, _v1) => _v0 - _v1.letter.length + _v1.substitution.length, _v2 - _v1 + _v3), _v6 = [], _v7 = [], _v4.forEach(_v0 => {
              0 > _v6.findIndex(_v0 => _v0.letter === _v0.letter && _v0.substitution === _v0.substitution) && (_v6.push({
                letter: _v0.letter,
                substitution: _v0.substitution
              }), _v7.push(`${_v0.substitution} -> ${_v0.letter}`));
            }), {
              i: _v3,
              j: _v5,
              subs: _v6,
              subDisplay: _v7.join(", ")
            }),
            _v9 = _v0.slice(_v8.i, +_v8.j + 1 || 0),
            _v10 = {
              ..._v0,
              l33t: !0,
              token: _v9,
              ..._v8
            },
            _v11 = this.isAlreadyIncluded(_v1, _v10);
          _v9.toLowerCase() === _v0.matchedWord || _v11 || _v1.push(_v10);
        });
      }), _v1.filter(_v0 => _v0.token.length > 1);
    }
  }
  class _v30 {
    constructor() {
      this.l33t = new _v29(this.defaultMatch), this.reverse = new _v27(this.defaultMatch);
    }
    match({
      password: _v0
    }) {
      return _v2([...this.defaultMatch({
        password: _v0
      }), ...this.reverse.match({
        password: _v0
      }), ...this.l33t.match({
        password: _v0
      })]);
    }
    defaultMatch({
      password: _v0,
      useLevenshtein: _v1 = !0
    }) {
      let _v2 = [],
        _v3 = _v0.length,
        _v4 = _v0.toLowerCase();
      return Object.keys(_v26.rankedDictionaries).forEach(_v0 => {
        let _v1 = _v26.rankedDictionaries[_v0],
          _v2 = Math.min(_v26.rankedDictionariesMaxWordSize[_v0], _v3);
        for (let _v0 = 0; _v0 < _v3; _v0 += 1) {
          let _v0 = Math.min(_v0 + _v2, _v3);
          for (let _v0 = _v0; _v0 < _v0; _v0 += 1) {
            let _v0 = _v4.slice(_v0, +_v0 + 1 || 0),
              _v1 = _v0 in _v1,
              _v2 = {},
              _v3 = 0 === _v0 && _v0 === _v3 - 1;
            _v26.useLevenshteinDistance && _v3 && !_v1 && _v1 && (_v2 = _v21(_v0, _v1, _v26.levenshteinThreshold));
            let _v4 = 0 !== Object.keys(_v2).length;
            if (_v1 || _v4) {
              let _v0 = _v1[_v4 ? _v2.levenshteinDistanceEntry : _v0];
              _v2.push({
                pattern: "dictionary",
                i: _v0,
                j: _v0,
                token: _v0.slice(_v0, +_v0 + 1 || 0),
                matchedWord: _v0,
                rank: _v0,
                dictionaryName: _v0,
                reversed: !1,
                l33t: !1,
                ..._v2
              });
            }
          }
        }
      }), _v2;
    }
  }
  class _v31 {
    match({
      password: _v0,
      regexes: _v1 = _v16
    }) {
      let _v2 = [];
      return Object.keys(_v1).forEach(_v0 => {
        let _v1,
          _v2 = _v1[_v0];
        for (_v2.lastIndex = 0; _v1 = _v2.exec(_v0);) if (_v1) {
          let _v0 = _v1[0];
          _v2.push({
            pattern: "regex",
            token: _v0,
            i: _v1.index,
            j: _v1.index + _v1[0].length - 1,
            regexName: _v0,
            regexMatch: _v1
          });
        }
      }), _v2(_v2);
    }
  }
  var _v32 = {
    nCk(_v0, _v1) {
      let _v2 = _v0;
      if (_v1 > _v2) return 0;
      if (0 === _v1) return 1;
      let _v3 = 1;
      for (let _v0 = 1; _v0 <= _v1; _v0 += 1) _v3 *= _v2, _v3 /= _v0, _v2 -= 1;
      return _v3;
    },
    log10: _v0 => 0 === _v0 ? 0 : Math.log(_v0) / Math.log(10),
    log2: _v0 => Math.log(_v0) / Math.log(2),
    factorial(_v0) {
      let _v1 = 1;
      for (let _v0 = 2; _v0 <= _v0; _v0 += 1) _v1 *= _v0;
      return _v1;
    }
  };
  let _v33 = (_v0, _v1) => {
      let _v2 = 0,
        _v3 = _v0.indexOf(_v1);
      for (; _v3 >= 0;) _v2 += 1, _v3 = _v0.indexOf(_v1, _v3 + _v1.length);
      return _v2;
    },
    _v34 = {
      bruteforce: ({
        token: _v0
      }) => {
        let _v1 = 10 ** _v0.length;
        return _v1 === 1 / 0 && (_v1 = Number.MAX_VALUE), Math.max(_v1, 1 === _v0.length ? 11 : 51);
      },
      date: ({
        year: _v0,
        separator: _v1
      }) => {
        let _v2 = 365 * Math.max(Math.abs(_v0 - _v15), 20);
        return _v1 && (_v2 *= 4), _v2;
      },
      dictionary: ({
        rank: _v0,
        reversed: _v1,
        l33t: _v2,
        subs: _v3,
        token: _v4,
        dictionaryName: _v5
      }) => {
        let _v6,
          _v7 = (_v0 => {
            let _v1 = _v0.replace(_v13, "");
            if (_v1.match(_v10) || _v1.toLowerCase() === _v1) return 1;
            let _v2 = [_v5, _v6, _v8],
              _v3 = _v2.length;
            for (let _v0 = 0; _v0 < _v3; _v0 += 1) {
              let _v0 = _v2[_v0];
              if (_v1.match(_v0)) return 2;
            }
            return (_v0 => {
              let _v1 = _v0.split(""),
                _v2 = _v1.filter(_v0 => _v0.match(_v12)).length,
                _v3 = _v1.filter(_v0 => _v0.match(_v11)).length,
                _v4 = 0,
                _v5 = Math.min(_v2, _v3);
              for (let _v0 = 1; _v0 <= _v5; _v0 += 1) _v4 += _v32.nCk(_v2 + _v3, _v0);
              return _v4;
            })(_v1);
          })(_v4),
          _v8 = (({
            l33t: _v0,
            subs: _v1,
            token: _v2
          }) => {
            if (!_v0) return 1;
            let _v3 = 1;
            return _v1.forEach(_v0 => {
              let {
                subbedCount: _v1,
                unsubbedCount: _v2
              } = (({
                sub: _v0,
                token: _v1
              }) => {
                let _v2 = _v1.toLowerCase();
                return {
                  subbedCount: _v33(_v2, _v0.substitution),
                  unsubbedCount: _v33(_v2, _v0.letter)
                };
              })({
                sub: _v0,
                token: _v2
              });
              if (0 === _v1 || 0 === _v2) _v3 *= 2;else {
                let _v0 = Math.min(_v2, _v1),
                  _v1 = 0;
                for (let _v0 = 1; _v0 <= _v0; _v0 += 1) _v1 += _v32.nCk(_v2 + _v1, _v0);
                _v3 *= _v1;
              }
            }), _v3;
          })({
            l33t: _v2,
            subs: _v3,
            token: _v4
          });
        return _v6 = "diceware" === _v5 ? 0 : _v0 * _v7 * _v8 * (_v1 && 2 || 1), {
          baseGuesses: _v0,
          uppercaseVariations: _v7,
          l33tVariations: _v8,
          calculation: _v6
        };
      },
      regex: ({
        regexName: _v0,
        regexMatch: _v1,
        token: _v2
      }) => {
        let _v3 = {
          alphaLower: 26,
          alphaUpper: 26,
          alpha: 52,
          alphanumeric: 62,
          digits: 10,
          symbols: 33
        };
        return _v0 in _v3 ? _v3[_v0] ** _v2.length : "recentYear" === _v0 ? Math.max(Math.abs(parseInt(_v1[0], 10) - _v15), 20) : 0;
      },
      repeat: ({
        baseGuesses: _v0,
        repeatCount: _v1
      }) => _v0 * _v1,
      sequence: ({
        token: _v0,
        ascending: _v1
      }) => {
        let _v2 = _v0.charAt(0),
          _v3 = 0;
        return _v3 = ["a", "A", "z", "Z", "0", "1", "9"].includes(_v2) ? 4 : _v2.match(/\d/) ? 10 : 26, _v1 || (_v3 *= 2), _v3 * _v0.length;
      },
      spatial: ({
        graph: _v0,
        token: _v1,
        shiftedCount: _v2,
        turns: _v3
      }) => {
        let _v4 = (({
          token: _v0,
          graph: _v1,
          turns: _v2
        }) => {
          var _v3;
          let _v4,
            _v5 = Object.keys(_v26.graphs[_v1]).length,
            _v6 = (_v3 = _v26.graphs[_v1], _v4 = 0, Object.keys(_v3).forEach(_v0 => {
              let _v1 = _v3[_v0];
              _v4 += _v1.filter(_v0 => !!_v0).length;
            }), _v4 /= Object.entries(_v3).length),
            _v7 = 0,
            _v8 = _v0.length;
          for (let _v0 = 2; _v0 <= _v8; _v0 += 1) {
            let _v0 = Math.min(_v2, _v0 - 1);
            for (let _v0 = 1; _v0 <= _v0; _v0 += 1) _v7 += _v32.nCk(_v0 - 1, _v0 - 1) * _v5 * _v6 ** _v0;
          }
          return _v7;
        })({
          token: _v1,
          graph: _v0,
          turns: _v3
        });
        if (_v2) {
          let _v0 = _v1.length - _v2;
          if (0 === _v2 || 0 === _v0) _v4 *= 2;else {
            let _v0 = 0;
            for (let _v0 = 1; _v0 <= Math.min(_v2, _v0); _v0 += 1) _v0 += _v32.nCk(_v2 + _v0, _v0);
            _v4 *= _v0;
          }
        }
        return Math.round(_v4);
      },
      separator: () => _v18
    },
    _v35 = {
      password: "",
      optimal: {},
      excludeAdditive: !1,
      separatorRegex: void 0,
      fillArray(_v0, _v1) {
        let _v2 = [];
        for (let _v0 = 0; _v0 < _v0; _v0 += 1) {
          let _v0 = [];
          "object" === _v1 && (_v0 = {}), _v2.push(_v0);
        }
        return _v2;
      },
      makeBruteforceMatch(_v0, _v1) {
        return {
          pattern: "bruteforce",
          token: this.password.slice(_v0, +_v1 + 1 || 0),
          i: _v0,
          j: _v1
        };
      },
      update(_v0, _v1) {
        let _v2 = _v0.j,
          _v3 = ((_v0, _v1) => {
            var _v2;
            let _v3,
              _v4 = {};
            if ("guesses" in _v0 && null != _v0.guesses) return _v0;
            let _v5 = (_v3 = 1, _v0.token.length < _v1.length && (_v3 = 1 === _v0.token.length ? 10 : 50), _v3),
              _v6 = (_v2 = _v0.pattern, _v34[_v2] ? _v34[_v2](_v0) : _v26.matchers[_v2] && "scoring" in _v26.matchers[_v2] ? _v26.matchers[_v2].scoring(_v0) : 0),
              _v7 = 0;
            "number" == typeof _v6 ? _v7 = _v6 : "dictionary" === _v0.pattern && (_v7 = _v6.calculation, _v4.baseGuesses = _v6.baseGuesses, _v4.uppercaseVariations = _v6.uppercaseVariations, _v4.l33tVariations = _v6.l33tVariations);
            let _v8 = Math.max(_v7, _v5);
            return {
              ..._v0,
              ..._v4,
              guesses: _v8,
              guessesLog10: _v32.log10(_v8)
            };
          })(_v0, this.password),
          _v4 = _v3.guesses;
        _v1 > 1 && (_v4 *= this.optimal.pi[_v3.i - 1][_v1 - 1]);
        let _v5 = _v32.factorial(_v1) * _v4;
        this.excludeAdditive || (_v5 += 0 ** (_v1 - 1));
        let _v6 = !1;
        Object.keys(this.optimal.g[_v2]).forEach(_v0 => {
          let _v1 = this.optimal.g[_v2][_v0];
          parseInt(_v0, 10) <= _v1 && _v1 <= _v5 && (_v6 = !0);
        }), _v6 || (this.optimal.g[_v2][_v1] = _v5, this.optimal.m[_v2][_v1] = _v3, this.optimal.pi[_v2][_v1] = _v4);
      },
      bruteforceUpdate(_v0) {
        let _v1 = this.makeBruteforceMatch(0, _v0);
        this.update(_v1, 1);
        for (let _v0 = 1; _v0 <= _v0; _v0 += 1) {
          _v1 = this.makeBruteforceMatch(_v0, _v0);
          let _v0 = this.optimal.m[_v0 - 1];
          Object.keys(_v0).forEach(_v0 => {
            "bruteforce" !== _v0[_v0].pattern && this.update(_v1, parseInt(_v0, 10) + 1);
          });
        }
      },
      unwind(_v0) {
        let _v1 = [],
          _v2 = _v0 - 1,
          _v3 = 0,
          _v4 = 2e308,
          _v5 = this.optimal.g[_v2];
        for (_v5 && Object.keys(_v5).forEach(_v0 => {
          let _v1 = _v5[_v0];
          _v1 < _v4 && (_v3 = parseInt(_v0, 10), _v4 = _v1);
        }); _v2 >= 0;) {
          let _v0 = this.optimal.m[_v2][_v3];
          _v1.unshift(_v0), _v2 = _v0.i - 1, _v3 -= 1;
        }
        return _v1;
      }
    };
  var _v36 = {
    mostGuessableMatchSequence(_v0, _v1, _v2 = !1) {
      _v35.password = _v0, _v35.excludeAdditive = _v2;
      let _v3 = _v0.length,
        _v4 = _v35.fillArray(_v3, "array");
      _v1.forEach(_v0 => {
        _v4[_v0.j].push(_v0);
      }), _v4 = _v4.map(_v0 => _v0.sort((_v0, _v1) => _v0.i - _v1.i)), _v35.optimal = {
        m: _v35.fillArray(_v3, "object"),
        pi: _v35.fillArray(_v3, "object"),
        g: _v35.fillArray(_v3, "object")
      };
      for (let _v0 = 0; _v0 < _v3; _v0 += 1) _v4[_v0].forEach(_v0 => {
        _v0.i > 0 ? Object.keys(_v35.optimal.m[_v0.i - 1]).forEach(_v0 => {
          _v35.update(_v0, parseInt(_v0, 10) + 1);
        }) : _v35.update(_v0, 1);
      }), _v35.bruteforceUpdate(_v0);
      let _v5 = _v35.unwind(_v3),
        _v6 = _v5.length,
        _v7 = this.getGuesses(_v0, _v6);
      return {
        password: _v0,
        guesses: _v7,
        guessesLog10: _v32.log10(_v7),
        sequence: _v5
      };
    },
    getGuesses(_v0, _v1) {
      let _v2 = _v0.length;
      return 0 === _v0.length ? 1 : _v35.optimal.g[_v2 - 1][_v1];
    }
  };
  class _v37 {
    match({
      password: _v0,
      omniMatch: _v1
    }) {
      let _v2 = [],
        _v3 = 0;
      for (; _v3 < _v0.length;) {
        let _v0 = this.getGreedyMatch(_v0, _v3),
          _v1 = this.getLazyMatch(_v0, _v3);
        if (null == _v0) break;
        let {
          match: _v2,
          baseToken: _v3
        } = this.setMatchToken(_v0, _v1);
        if (_v2) {
          let _v0 = _v2.index + _v2[0].length - 1,
            _v1 = this.getBaseGuesses(_v3, _v1);
          _v2.push(this.normalizeMatch(_v3, _v0, _v2, _v1)), _v3 = _v0 + 1;
        }
      }
      return _v2.some(_v0 => _v0 instanceof Promise) ? Promise.all(_v2) : _v2;
    }
    normalizeMatch(_v0, _v1, _v2, _v3) {
      let _v4 = {
        pattern: "repeat",
        i: _v2.index,
        j: _v1,
        token: _v2[0],
        baseToken: _v0,
        baseGuesses: 0,
        repeatCount: _v2[0].length / _v0.length
      };
      return _v3 instanceof Promise ? _v3.then(_v0 => ({
        ..._v4,
        baseGuesses: _v0
      })) : {
        ..._v4,
        baseGuesses: _v3
      };
    }
    getGreedyMatch(_v0, _v1) {
      let _v2 = /(.+)\1+/g;
      return _v2.lastIndex = _v1, _v2.exec(_v0);
    }
    getLazyMatch(_v0, _v1) {
      let _v2 = /(.+?)\1+/g;
      return _v2.lastIndex = _v1, _v2.exec(_v0);
    }
    setMatchToken(_v0, _v1) {
      let _v2,
        _v3 = "";
      if (_v1 && _v0[0].length > _v1[0].length) {
        _v2 = _v0;
        let _v0 = /^(.+?)\1+$/.exec(_v2[0]);
        _v0 && (_v3 = _v0[1]);
      } else (_v2 = _v1) && (_v3 = _v2[1]);
      return {
        match: _v2,
        baseToken: _v3
      };
    }
    getBaseGuesses(_v0, _v1) {
      let _v2 = _v1.match(_v0);
      return _v2 instanceof Promise ? _v2.then(_v0 => _v36.mostGuessableMatchSequence(_v0, _v0).guesses) : _v36.mostGuessableMatchSequence(_v0, _v2).guesses;
    }
  }
  class _v38 {
    constructor() {
      this.MAX_DELTA = 5;
    }
    match({
      password: _v0
    }) {
      let _v1 = [];
      if (1 === _v0.length) return [];
      let _v2 = 0,
        _v3 = null,
        _v4 = _v0.length;
      for (let _v0 = 1; _v0 < _v4; _v0 += 1) {
        let _v0 = _v0.charCodeAt(_v0) - _v0.charCodeAt(_v0 - 1);
        if (null == _v3 && (_v3 = _v0), _v0 !== _v3) {
          let _v0 = _v0 - 1;
          this.update({
            i: _v2,
            j: _v0,
            delta: _v3,
            password: _v0,
            result: _v1
          }), _v2 = _v0, _v3 = _v0;
        }
      }
      return this.update({
        i: _v2,
        j: _v4 - 1,
        delta: _v3,
        password: _v0,
        result: _v1
      }), _v1;
    }
    update({
      i: _v0,
      j: _v1,
      delta: _v2,
      password: _v3,
      result: _v4
    }) {
      if (_v1 - _v0 > 1 || 1 === Math.abs(_v2)) {
        let _v0 = Math.abs(_v2);
        if (_v0 > 0 && _v0 <= this.MAX_DELTA) {
          let _v0 = _v3.slice(_v0, +_v1 + 1 || 0),
            {
              sequenceName: _v1,
              sequenceSpace: _v2
            } = this.getSequence(_v0);
          return _v4.push({
            pattern: "sequence",
            i: _v0,
            j: _v1,
            token: _v3.slice(_v0, +_v1 + 1 || 0),
            sequenceName: _v1,
            sequenceSpace: _v2,
            ascending: _v2 > 0
          });
        }
      }
      return null;
    }
    getSequence(_v0) {
      let _v1 = "unicode",
        _v2 = 26;
      return _v9.test(_v0) ? (_v1 = "lower", _v2 = 26) : _v7.test(_v0) ? (_v1 = "upper", _v2 = 26) : _v14.test(_v0) && (_v1 = "digits", _v2 = 10), {
        sequenceName: _v1,
        sequenceSpace: _v2
      };
    }
  }
  class _v39 {
    constructor() {
      this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/;
    }
    match({
      password: _v0
    }) {
      let _v1 = [];
      return Object.keys(_v26.graphs).forEach(_v0 => {
        let _v1 = _v26.graphs[_v0];
        _v1(_v1, this.helper(_v0, _v1, _v0));
      }), _v2(_v1);
    }
    checkIfShifted(_v0, _v1, _v2) {
      return !_v0.includes("keypad") && this.SHIFTED_RX.test(_v1.charAt(_v2)) ? 1 : 0;
    }
    helper(_v0, _v1, _v2) {
      let _v3,
        _v4 = [],
        _v5 = 0,
        _v6 = _v0.length;
      for (; _v5 < _v6 - 1;) {
        let _v0 = _v5 + 1,
          _v1 = null,
          _v2 = 0;
        for (_v3 = this.checkIfShifted(_v2, _v0, _v5);;) {
          let _v0 = _v1[_v0.charAt(_v0 - 1)] || [],
            _v1 = !1,
            _v2 = -1,
            _v3 = -1;
          if (_v0 < _v6) {
            let _v0 = _v0.charAt(_v0),
              _v1 = _v0.length;
            for (let _v0 = 0; _v0 < _v1; _v0 += 1) {
              let _v0 = _v0[_v0];
              if (_v3 += 1, _v0) {
                let _v0 = _v0.indexOf(_v0);
                if (-1 !== _v0) {
                  _v1 = !0, 1 === _v0 && (_v3 += 1), _v1 !== (_v2 = _v3) && (_v2 += 1, _v1 = _v2);
                  break;
                }
              }
            }
          }
          if (_v1) _v0 += 1;else {
            _v0 - _v5 > 2 && _v4.push({
              pattern: "spatial",
              i: _v5,
              j: _v0 - 1,
              token: _v0.slice(_v5, _v0),
              graph: _v2,
              turns: _v2,
              shiftedCount: _v3
            }), _v5 = _v0;
            break;
          }
        }
      }
      return _v4;
    }
  }
  let _v40 = RegExp(`[${_v17.join("")}]`);
  class _v41 {
    static getMostUsedSeparatorChar(_v0) {
      let _v1 = [..._v0.split("").filter(_v0 => _v40.test(_v0)).reduce((_v0, _v1) => {
        let _v2 = _v0.get(_v1);
        return _v2 ? _v0.set(_v1, _v2 + 1) : _v0.set(_v1, 1), _v0;
      }, new Map()).entries()].sort(([_v0, _v1], [_v2, _v3]) => _v3 - _v1);
      if (!_v1.length) return;
      let _v2 = _v1[0];
      if (!(_v2[1] < 2)) return _v2[0];
    }
    static getSeparatorRegex(_v0) {
      return RegExp(`([^${_v0}
])(${_v0})(?!${_v0})`, "g");
    }
    match({
      password: _v0
    }) {
      let _v1 = [];
      if (0 === _v0.length) return _v1;
      let _v2 = _v41.getMostUsedSeparatorChar(_v0);
      if (void 0 === _v2) return _v1;
      let _v3 = _v41.getSeparatorRegex(_v2);
      for (let _v0 of _v0.matchAll(_v3)) {
        if (void 0 === _v0.index) continue;
        let _v0 = _v0.index + 1;
        _v1.push({
          pattern: "separator",
          token: _v2,
          i: _v0,
          j: _v0
        });
      }
      return _v1;
    }
  }
  class _v42 {
    constructor() {
      this.matchers = {
        date: _v19,
        dictionary: _v30,
        regex: _v31,
        repeat: _v37,
        sequence: _v38,
        spatial: _v39,
        separator: _v41
      };
    }
    match(_v0) {
      let _v1 = [],
        _v2 = [];
      return ([...Object.keys(this.matchers), ...Object.keys(_v26.matchers)].forEach(_v0 => {
        if (!this.matchers[_v0] && !_v26.matchers[_v0]) return;
        let _v1 = new (this.matchers[_v0] ? this.matchers[_v0] : _v26.matchers[_v0].Matching)().match({
          password: _v0,
          omniMatch: this
        });
        _v1 instanceof Promise ? (_v1.then(_v0 => {
          _v1(_v1, _v0);
        }), _v2.push(_v1)) : _v1(_v1, _v1);
      }), _v2.length > 0) ? new Promise((_v0, _v1) => {
        Promise.all(_v2).then(() => {
          _v0(_v2(_v1));
        }).catch(_v0 => {
          _v1(_v0);
        });
      }) : _v2(_v1);
    }
  }
  let _v43 = {
    second: 1,
    minute: 60,
    hour: 0,
    day: 0,
    month: 0,
    year: 0,
    century: 0
  };
  class _v44 {
    translate(_v0, _v1) {
      let _v2 = _v0;
      void 0 !== _v1 && 1 !== _v1 && (_v2 += "s");
      let {
        timeEstimation: _v3
      } = _v26.translations;
      return _v3[_v2].replace("{base}", `${_v1}`);
    }
    estimateAttackTimes(_v0) {
      let _v1 = {
          onlineThrottling100PerHour: _v0 / (100 / 0),
          onlineNoThrottling10PerSecond: _v0 / 10,
          offlineSlowHashing1e4PerSecond: _v0 / 0,
          offlineFastHashing1e10PerSecond: _v0 / 0
        },
        _v2 = {
          onlineThrottling100PerHour: "",
          onlineNoThrottling10PerSecond: "",
          offlineSlowHashing1e4PerSecond: "",
          offlineFastHashing1e10PerSecond: ""
        };
      return Object.keys(_v1).forEach(_v0 => {
        let _v1 = _v1[_v0];
        _v2[_v0] = this.displayTime(_v1);
      }), {
        crackTimesSeconds: _v1,
        crackTimesDisplay: _v2,
        score: this.guessesToScore(_v0)
      };
    }
    guessesToScore(_v0) {
      return _v0 < 0 ? 0 : _v0 < 0 ? 1 : _v0 < 0 ? 2 : _v0 < 0 ? 3 : 4;
    }
    displayTime(_v0) {
      let _v1,
        _v2 = "centuries",
        _v3 = Object.keys(_v43),
        _v4 = _v3.findIndex(_v0 => _v0 < _v43[_v0]);
      return _v4 > -1 && (_v2 = _v3[_v4 - 1], 0 !== _v4 ? _v1 = Math.round(_v0 / _v43[_v2]) : _v2 = "ltSecond"), this.translate(_v2, _v1);
    }
  }
  var _v45 = () => null,
    _v46 = () => ({
      warning: _v26.translations.warnings.dates,
      suggestions: [_v26.translations.suggestions.dates]
    }),
    _v47 = (_v0, _v1) => {
      let _v2 = ((_v0, _v1) => {
          let _v2 = null,
            _v3 = _v0.dictionaryName,
            _v4 = "lastnames" === _v3 || _v3.toLowerCase().includes("firstnames");
          if ("passwords" === _v3) {
            let _v0;
            _v0 = null, !_v1 || _v0.l33t || _v0.reversed ? _v0.guessesLog10 <= 4 && (_v0 = _v26.translations.warnings.similarToCommon) : _v0 = _v0.rank <= 10 ? _v26.translations.warnings.topTen : _v0.rank <= 100 ? _v26.translations.warnings.topHundred : _v26.translations.warnings.common, _v2 = _v0;
          } else if (_v3.includes("wikipedia")) {
            let _v0;
            _v0 = null, _v1 && (_v0 = _v26.translations.warnings.wordByItself), _v2 = _v0;
          } else _v4 ? _v2 = _v1 ? _v26.translations.warnings.namesByThemselves : _v26.translations.warnings.commonNames : "userInputs" === _v3 && (_v2 = _v26.translations.warnings.userInputs);
          return _v2;
        })(_v0, _v1),
        _v3 = [],
        _v4 = _v0.token;
      return _v4.match(_v5) ? _v3.push(_v26.translations.suggestions.capitalization) : _v4.match(_v8) && _v4.toLowerCase() !== _v4 && _v3.push(_v26.translations.suggestions.allUppercase), _v0.reversed && _v0.token.length >= 4 && _v3.push(_v26.translations.suggestions.reverseWords), _v0.l33t && _v3.push(_v26.translations.suggestions.l33t), {
        warning: _v2,
        suggestions: _v3
      };
    },
    _v48 = _v0 => "recentYear" === _v0.regexName ? {
      warning: _v26.translations.warnings.recentYears,
      suggestions: [_v26.translations.suggestions.recentYears, _v26.translations.suggestions.associatedYears]
    } : {
      warning: null,
      suggestions: []
    },
    _v49 = _v0 => {
      let _v1 = _v26.translations.warnings.extendedRepeat;
      return 1 === _v0.baseToken.length && (_v1 = _v26.translations.warnings.simpleRepeat), {
        warning: _v1,
        suggestions: [_v26.translations.suggestions.repeated]
      };
    },
    _v50 = () => ({
      warning: _v26.translations.warnings.sequences,
      suggestions: [_v26.translations.suggestions.sequences]
    }),
    _v51 = _v0 => {
      let _v1 = _v26.translations.warnings.keyPattern;
      return 1 === _v0.turns && (_v1 = _v26.translations.warnings.straightRow), {
        warning: _v1,
        suggestions: [_v26.translations.suggestions.longerKeyboardPattern]
      };
    },
    _v52 = () => null;
  let _v53 = {
    warning: null,
    suggestions: []
  };
  class _v54 {
    constructor() {
      this.matchers = {
        bruteforce: _v45,
        date: _v46,
        dictionary: _v47,
        regex: _v48,
        repeat: _v49,
        sequence: _v50,
        spatial: _v51,
        separator: _v52
      }, this.defaultFeedback = {
        warning: null,
        suggestions: []
      }, this.setDefaultSuggestions();
    }
    setDefaultSuggestions() {
      this.defaultFeedback.suggestions.push(_v26.translations.suggestions.useWords, _v26.translations.suggestions.noNeed);
    }
    getFeedback(_v0, _v1) {
      if (0 === _v1.length) return this.defaultFeedback;
      if (_v0 > 2) return _v53;
      let _v2 = _v26.translations.suggestions.anotherWord,
        _v3 = this.getLongestMatch(_v1),
        _v4 = this.getMatchFeedback(_v3, 1 === _v1.length);
      return null != _v4 ? _v4.suggestions.unshift(_v2) : _v4 = {
        warning: null,
        suggestions: [_v2]
      }, _v4;
    }
    getLongestMatch(_v0) {
      let _v1 = _v0[0];
      return _v0.slice(1).forEach(_v0 => {
        _v0.token.length > _v1.token.length && (_v1 = _v0);
      }), _v1;
    }
    getMatchFeedback(_v0, _v1) {
      return this.matchers[_v0.pattern] ? this.matchers[_v0.pattern](_v0, _v1) : _v26.matchers[_v0.pattern] && "feedback" in _v26.matchers[_v0.pattern] ? _v26.matchers[_v0.pattern].feedback(_v0, _v1) : _v53;
    }
  }
  let _v55 = () => new Date().getTime();
  _v0.s(["zxcvbn", 0, (_v0, _v1) => {
    let _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7 = _v55(),
      _v8 = (_v1 && _v26.extendUserInputsDictionary(_v1), new _v42().match(_v0));
    if (_v8 instanceof Promise) throw Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");
    return _v2 = new _v54(), _v3 = new _v44(), _v4 = _v36.mostGuessableMatchSequence(_v0, _v8), _v5 = _v55() - _v7, _v6 = _v3.estimateAttackTimes(_v4.guesses), {
      calcTime: _v5,
      ..._v4,
      ..._v6,
      feedback: _v2.getFeedback(_v6.score, _v4.sequence)
    };
  }], 0);
}