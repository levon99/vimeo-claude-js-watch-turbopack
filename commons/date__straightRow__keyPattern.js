{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = (_v0, _v1) => _v0.push.apply(_v0, _v1),
    _v15 = _v0 => _v0.sort((_v0, _v1) => _v0.i - _v1.i || _v0.j - _v1.j),
    _v16 = _v0 => {
      let _v1 = {},
        _v2 = 1;
      return _v0.forEach(_v0 => {
        _v1[_v0] = _v2, _v2 += 1;
      }), _v1;
    },
    _v17 = {
      4: [[1, 2], [2, 3]],
      5: [[1, 3], [2, 3], [2, 4]],
      6: [[1, 2], [2, 4], [4, 5]],
      7: [[1, 3], [2, 3], [4, 5], [4, 6]],
      8: [[2, 4], [4, 6]]
    },
    _v18 = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,
    _v19 = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,
    _v20 = /^[A-Z\xbf-\xdf]+$/,
    _v21 = /^[^a-z\xdf-\xff]+$/,
    _v22 = /^[a-z\xdf-\xff]+$/,
    _v23 = /^[^A-Z\xbf-\xdf]+$/,
    _v24 = /[a-z\xdf-\xff]/,
    _v25 = /[A-Z\xbf-\xdf]/,
    _v26 = /[^A-Za-z\xbf-\xdf]/gi,
    _v27 = /^\d+$/,
    _v28 = new Date().getFullYear(),
    _v29 = {
      recentYear: /19\d\d|200\d|201\d|202\d/g
    },
    _v30 = [" ", ",", ";", ":", "|", "/", "\\", "_", ".", "-"],
    _v31 = _v30.length;
  class _v32 {
    match({
      password: _v0
    }) {
      let _v1 = [...this.getMatchesWithoutSeparator(_v0), ...this.getMatchesWithSeparator(_v0)];
      return _v15(this.filterNoise(_v1));
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
        _v3 = _v0 => Math.abs(_v0.year - _v28);
      for (let _v0 = 0; _v0 <= Math.abs(_v0.length - 4); _v0 += 1) for (let _v0 = _v0 + 3; _v0 <= _v0 + 7 && !(_v0 >= _v0.length); _v0 += 1) {
        let _v0 = _v0.slice(_v0, +_v0 + 1 || 0);
        if (_v2.exec(_v0)) {
          let _v0 = [];
          if (_v17[_v0.length].forEach(([_v0, _v1]) => {
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
  let _v33 = new Uint32Array(0),
    _v34 = (_v0, _v1, _v2) => {
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
                for (; _v8--;) _v33[_v0.charCodeAt(_v8)] |= 1 << _v8;
                for (_v8 = 0; _v8 < _v3; _v8++) {
                  let _v0 = _v33[_v1.charCodeAt(_v8)],
                    _v1 = _v0 | _v6;
                  _v0 |= (_v0 & _v5) + _v5 ^ _v5, _v6 |= ~(_v0 | _v5), _v5 &= _v0, _v6 & _v4 && _v7++, _v5 & _v4 && _v7--, _v5 = _v5 << 1 | ~(_v1 | (_v6 = _v6 << 1 | 1)), _v6 &= _v1;
                }
                for (_v8 = _v2; _v8--;) _v33[_v0.charCodeAt(_v8)] = 0;
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
                  for (let _v0 = _v2; _v0 < _v3; _v0++) _v33[_v0.charCodeAt(_v0)] |= 1 << _v0;
                  for (let _v0 = 0; _v0 < _v2; _v0++) {
                    let _v0 = _v33[_v1.charCodeAt(_v0)],
                      _v1 = _v5[_v0 / 32 | 0] >>> _v0 & 1,
                      _v2 = _v4[_v0 / 32 | 0] >>> _v0 & 1,
                      _v3 = _v0 | _v0,
                      _v4 = ((_v0 | _v2) & _v1) + _v1 ^ _v1 | _v0 | _v2,
                      _v5 = _v0 | ~(_v4 | _v1),
                      _v6 = _v1 & _v4;
                    _v5 >>> 31 ^ _v1 && (_v5[_v0 / 32 | 0] ^= 1 << _v0), _v6 >>> 31 ^ _v2 && (_v4[_v0 / 32 | 0] ^= 1 << _v0), _v5 = _v5 << 1 | _v1, _v1 = (_v6 = _v6 << 1 | _v2) | ~(_v3 | _v5), _v0 = _v5 & _v3;
                  }
                  for (let _v0 = _v2; _v0 < _v3; _v0++) _v33[_v0.charCodeAt(_v0)] = 0;
                }
                let _v9 = 0,
                  _v10 = -1,
                  _v11 = 32 * _v8,
                  _v12 = Math.min(32, _v3 - _v11) + _v11;
                for (let _v0 = _v11; _v0 < _v12; _v0++) _v33[_v0.charCodeAt(_v0)] |= 1 << _v0;
                let _v13 = _v3;
                for (let _v0 = 0; _v0 < _v2; _v0++) {
                  let _v0 = _v33[_v1.charCodeAt(_v0)],
                    _v1 = _v5[_v0 / 32 | 0] >>> _v0 & 1,
                    _v2 = _v4[_v0 / 32 | 0] >>> _v0 & 1,
                    _v3 = _v0 | _v9,
                    _v4 = ((_v0 | _v2) & _v10) + _v10 ^ _v10 | _v0 | _v2,
                    _v5 = _v9 | ~(_v4 | _v10),
                    _v6 = _v10 & _v4;
                  _v13 += _v5 >>> _v3 - 1 & 1, _v13 -= _v6 >>> _v3 - 1 & 1, _v5 >>> 31 ^ _v1 && (_v5[_v0 / 32 | 0] ^= 1 << _v0), _v6 >>> 31 ^ _v2 && (_v4[_v0 / 32 | 0] ^= 1 << _v0), _v5 = _v5 << 1 | _v1, _v10 = (_v6 = _v6 << 1 | _v2) | ~(_v3 | _v5), _v9 = _v5 & _v3;
                }
                for (let _v0 = _v11; _v0 < _v12; _v0++) _v33[_v0.charCodeAt(_v0)] = 0;
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
  var _v35 = {
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
    _v36 = {
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
  class _v37 {
    constructor(_v0 = []) {
      this.parents = _v0, this.children = new Map();
    }
    addSub(_v0, ..._v1) {
      let _v2 = _v0.charAt(0);
      this.children.has(_v2) || this.children.set(_v2, new _v37([...this.parents, _v2]));
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
      this.hasChild(_v0) || this.children.set(_v0, new _v37([...this.parents, _v0]));
    }
    hasChild(_v0) {
      return this.children.has(_v0);
    }
  }
  var _v38 = (_v0, _v1) => (Object.entries(_v0).forEach(([_v0, _v1]) => {
    _v1.forEach(_v0 => {
      _v1.addSub(_v0, _v0);
    });
  }), _v1);
  let _v39 = new class {
    constructor() {
      this.matchers = {}, this.l33tTable = _v35, this.trieNodeRoot = _v38(_v35, new _v37()), this.dictionary = {
        userInputs: []
      }, this.rankedDictionaries = {}, this.rankedDictionariesMaxWordSize = {}, this.translations = _v36, this.graphs = {}, this.useLevenshteinDistance = !1, this.levenshteinThreshold = 2, this.l33tMaxSubstitutions = 100, this.maxLength = 256, this.setRankedDictionaries();
    }
    setOptions(_v0 = {}) {
      _v0.l33tTable && (this.l33tTable = _v0.l33tTable, this.trieNodeRoot = _v38(_v0.l33tTable, new _v37())), _v0.dictionary && (this.dictionary = _v0.dictionary, this.setRankedDictionaries()), _v0.translations && this.setTranslations(_v0.translations), _v0.graphs && (this.graphs = _v0.graphs), void 0 !== _v0.useLevenshteinDistance && (this.useLevenshteinDistance = _v0.useLevenshteinDistance), void 0 !== _v0.levenshteinThreshold && (this.levenshteinThreshold = _v0.levenshteinThreshold), void 0 !== _v0.l33tMaxSubstitutions && (this.l33tMaxSubstitutions = _v0.l33tMaxSubstitutions), void 0 !== _v0.maxLength && (this.maxLength = _v0.maxLength);
    }
    setTranslations(_v0) {
      if (this.checkCustomTranslations(_v0)) this.translations = _v0;else throw Error("Invalid translations object fallback to keys");
    }
    checkCustomTranslations(_v0) {
      let _v1 = !0;
      return Object.keys(_v36).forEach(_v0 => {
        _v0 in _v0 ? Object.keys(_v36[_v0]).forEach(_v0 => {
          _v0 in _v0[_v0] || (_v1 = !1);
        }) : _v1 = !1;
      }), _v1;
    }
    setRankedDictionaries() {
      let _v0 = {},
        _v1 = {};
      Object.keys(this.dictionary).forEach(_v0 => {
        _v0[_v0] = _v16(this.dictionary[_v0]), _v1[_v0] = this.getRankedDictionariesMaxWordSize(this.dictionary[_v0]);
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
      }), _v16(_v1);
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
  class _v40 {
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
  class _v41 {
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
  class _v42 {
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
        _v2 = new _v41({
          substr: _v0,
          limit: _v39.l33tMaxSubstitutions,
          trieRoot: _v39.trieNodeRoot
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
  class _v43 {
    constructor() {
      this.l33t = new _v42(this.defaultMatch), this.reverse = new _v40(this.defaultMatch);
    }
    match({
      password: _v0
    }) {
      return _v15([...this.defaultMatch({
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
      return Object.keys(_v39.rankedDictionaries).forEach(_v0 => {
        let _v1 = _v39.rankedDictionaries[_v0],
          _v2 = Math.min(_v39.rankedDictionariesMaxWordSize[_v0], _v3);
        for (let _v0 = 0; _v0 < _v3; _v0 += 1) {
          let _v0 = Math.min(_v0 + _v2, _v3);
          for (let _v0 = _v0; _v0 < _v0; _v0 += 1) {
            let _v0 = _v4.slice(_v0, +_v0 + 1 || 0),
              _v1 = (_v0 in _v1),
              _v2 = {},
              _v3 = 0 === _v0 && _v0 === _v3 - 1;
            _v39.useLevenshteinDistance && _v3 && !_v1 && _v1 && (_v2 = _v34(_v0, _v1, _v39.levenshteinThreshold));
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
  class _v44 {
    match({
      password: _v0,
      regexes: _v1 = _v29
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
      }), _v15(_v2);
    }
  }
  var _v45 = {
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
  let _v46 = (_v0, _v1) => {
      let _v2 = 0,
        _v3 = _v0.indexOf(_v1);
      for (; _v3 >= 0;) _v2 += 1, _v3 = _v0.indexOf(_v1, _v3 + _v1.length);
      return _v2;
    },
    _v47 = {
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
        let _v2 = 365 * Math.max(Math.abs(_v0 - _v28), 20);
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
            let _v1 = _v0.replace(_v26, "");
            if (_v1.match(_v23) || _v1.toLowerCase() === _v1) return 1;
            let _v2 = [_v18, _v19, _v21],
              _v3 = _v2.length;
            for (let _v0 = 0; _v0 < _v3; _v0 += 1) {
              let _v0 = _v2[_v0];
              if (_v1.match(_v0)) return 2;
            }
            return (_v0 => {
              let _v1 = _v0.split(""),
                _v2 = _v1.filter(_v0 => _v0.match(_v25)).length,
                _v3 = _v1.filter(_v0 => _v0.match(_v24)).length,
                _v4 = 0,
                _v5 = Math.min(_v2, _v3);
              for (let _v0 = 1; _v0 <= _v5; _v0 += 1) _v4 += _v45.nCk(_v2 + _v3, _v0);
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
                  subbedCount: _v46(_v2, _v0.substitution),
                  unsubbedCount: _v46(_v2, _v0.letter)
                };
              })({
                sub: _v0,
                token: _v2
              });
              if (0 === _v1 || 0 === _v2) _v3 *= 2;else {
                let _v0 = Math.min(_v2, _v1),
                  _v1 = 0;
                for (let _v0 = 1; _v0 <= _v0; _v0 += 1) _v1 += _v45.nCk(_v2 + _v1, _v0);
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
        return _v0 in _v3 ? _v3[_v0] ** _v2.length : "recentYear" === _v0 ? Math.max(Math.abs(parseInt(_v1[0], 10) - _v28), 20) : 0;
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
            _v5 = Object.keys(_v39.graphs[_v1]).length,
            _v6 = (_v3 = _v39.graphs[_v1], _v4 = 0, Object.keys(_v3).forEach(_v0 => {
              let _v1 = _v3[_v0];
              _v4 += _v1.filter(_v0 => !!_v0).length;
            }), _v4 /= Object.entries(_v3).length),
            _v7 = 0,
            _v8 = _v0.length;
          for (let _v0 = 2; _v0 <= _v8; _v0 += 1) {
            let _v0 = Math.min(_v2, _v0 - 1);
            for (let _v0 = 1; _v0 <= _v0; _v0 += 1) _v7 += _v45.nCk(_v0 - 1, _v0 - 1) * _v5 * _v6 ** _v0;
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
            for (let _v0 = 1; _v0 <= Math.min(_v2, _v0); _v0 += 1) _v0 += _v45.nCk(_v2 + _v0, _v0);
            _v4 *= _v0;
          }
        }
        return Math.round(_v4);
      },
      separator: () => _v31
    },
    _v48 = {
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
              _v6 = (_v2 = _v0.pattern, _v47[_v2] ? _v47[_v2](_v0) : _v39.matchers[_v2] && "scoring" in _v39.matchers[_v2] ? _v39.matchers[_v2].scoring(_v0) : 0),
              _v7 = 0;
            "number" == typeof _v6 ? _v7 = _v6 : "dictionary" === _v0.pattern && (_v7 = _v6.calculation, _v4.baseGuesses = _v6.baseGuesses, _v4.uppercaseVariations = _v6.uppercaseVariations, _v4.l33tVariations = _v6.l33tVariations);
            let _v8 = Math.max(_v7, _v5);
            return {
              ..._v0,
              ..._v4,
              guesses: _v8,
              guessesLog10: _v45.log10(_v8)
            };
          })(_v0, this.password),
          _v4 = _v3.guesses;
        _v1 > 1 && (_v4 *= this.optimal.pi[_v3.i - 1][_v1 - 1]);
        let _v5 = _v45.factorial(_v1) * _v4;
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
  var _v49 = {
    mostGuessableMatchSequence(_v0, _v1, _v2 = !1) {
      _v48.password = _v0, _v48.excludeAdditive = _v2;
      let _v3 = _v0.length,
        _v4 = _v48.fillArray(_v3, "array");
      _v1.forEach(_v0 => {
        _v4[_v0.j].push(_v0);
      }), _v4 = _v4.map(_v0 => _v0.sort((_v0, _v1) => _v0.i - _v1.i)), _v48.optimal = {
        m: _v48.fillArray(_v3, "object"),
        pi: _v48.fillArray(_v3, "object"),
        g: _v48.fillArray(_v3, "object")
      };
      for (let _v0 = 0; _v0 < _v3; _v0 += 1) _v4[_v0].forEach(_v0 => {
        _v0.i > 0 ? Object.keys(_v48.optimal.m[_v0.i - 1]).forEach(_v0 => {
          _v48.update(_v0, parseInt(_v0, 10) + 1);
        }) : _v48.update(_v0, 1);
      }), _v48.bruteforceUpdate(_v0);
      let _v5 = _v48.unwind(_v3),
        _v6 = _v5.length,
        _v7 = this.getGuesses(_v0, _v6);
      return {
        password: _v0,
        guesses: _v7,
        guessesLog10: _v45.log10(_v7),
        sequence: _v5
      };
    },
    getGuesses(_v0, _v1) {
      let _v2 = _v0.length;
      return 0 === _v0.length ? 1 : _v48.optimal.g[_v2 - 1][_v1];
    }
  };
  class _v50 {
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
      return _v2 instanceof Promise ? _v2.then(_v0 => _v49.mostGuessableMatchSequence(_v0, _v0).guesses) : _v49.mostGuessableMatchSequence(_v0, _v2).guesses;
    }
  }
  class _v51 {
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
      return _v22.test(_v0) ? (_v1 = "lower", _v2 = 26) : _v20.test(_v0) ? (_v1 = "upper", _v2 = 26) : _v27.test(_v0) && (_v1 = "digits", _v2 = 10), {
        sequenceName: _v1,
        sequenceSpace: _v2
      };
    }
  }
  class _v52 {
    constructor() {
      this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/;
    }
    match({
      password: _v0
    }) {
      let _v1 = [];
      return Object.keys(_v39.graphs).forEach(_v0 => {
        let _v1 = _v39.graphs[_v0];
        _v14(_v1, this.helper(_v0, _v1, _v0));
      }), _v15(_v1);
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
  let _v53 = RegExp(`[${_v30.join("")}]`);
  class _v54 {
    static getMostUsedSeparatorChar(_v0) {
      let _v1 = [..._v0.split("").filter(_v0 => _v53.test(_v0)).reduce((_v0, _v1) => {
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
      let _v2 = _v54.getMostUsedSeparatorChar(_v0);
      if (void 0 === _v2) return _v1;
      let _v3 = _v54.getSeparatorRegex(_v2);
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
  class _v55 {
    constructor() {
      this.matchers = {
        date: _v32,
        dictionary: _v43,
        regex: _v44,
        repeat: _v50,
        sequence: _v51,
        spatial: _v52,
        separator: _v54
      };
    }
    match(_v0) {
      let _v1 = [],
        _v2 = [];
      return ([...Object.keys(this.matchers), ...Object.keys(_v39.matchers)].forEach(_v0 => {
        if (!this.matchers[_v0] && !_v39.matchers[_v0]) return;
        let _v1 = new (this.matchers[_v0] ? this.matchers[_v0] : _v39.matchers[_v0].Matching)().match({
          password: _v0,
          omniMatch: this
        });
        _v1 instanceof Promise ? (_v1.then(_v0 => {
          _v14(_v1, _v0);
        }), _v2.push(_v1)) : _v14(_v1, _v1);
      }), _v2.length > 0) ? new Promise((_v0, _v1) => {
        Promise.all(_v2).then(() => {
          _v0(_v15(_v1));
        }).catch(_v0 => {
          _v1(_v0);
        });
      }) : _v15(_v1);
    }
  }
  let _v56 = {
    second: 1,
    minute: 60,
    hour: 0,
    day: 0,
    month: 0,
    year: 0,
    century: 0
  };
  class _v57 {
    translate(_v0, _v1) {
      let _v2 = _v0;
      void 0 !== _v1 && 1 !== _v1 && (_v2 += "s");
      let {
        timeEstimation: _v3
      } = _v39.translations;
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
        _v3 = Object.keys(_v56),
        _v4 = _v3.findIndex(_v0 => _v0 < _v56[_v0]);
      return _v4 > -1 && (_v2 = _v3[_v4 - 1], 0 !== _v4 ? _v1 = Math.round(_v0 / _v56[_v2]) : _v2 = "ltSecond"), this.translate(_v2, _v1);
    }
  }
  var _v58 = () => null,
    _v59 = () => ({
      warning: _v39.translations.warnings.dates,
      suggestions: [_v39.translations.suggestions.dates]
    }),
    _v60 = (_v0, _v1) => {
      let _v2 = ((_v0, _v1) => {
          let _v2 = null,
            _v3 = _v0.dictionaryName,
            _v4 = "lastnames" === _v3 || _v3.toLowerCase().includes("firstnames");
          if ("passwords" === _v3) {
            let _v0;
            _v0 = null, !_v1 || _v0.l33t || _v0.reversed ? _v0.guessesLog10 <= 4 && (_v0 = _v39.translations.warnings.similarToCommon) : _v0 = _v0.rank <= 10 ? _v39.translations.warnings.topTen : _v0.rank <= 100 ? _v39.translations.warnings.topHundred : _v39.translations.warnings.common, _v2 = _v0;
          } else if (_v3.includes("wikipedia")) {
            let _v0;
            _v0 = null, _v1 && (_v0 = _v39.translations.warnings.wordByItself), _v2 = _v0;
          } else _v4 ? _v2 = _v1 ? _v39.translations.warnings.namesByThemselves : _v39.translations.warnings.commonNames : "userInputs" === _v3 && (_v2 = _v39.translations.warnings.userInputs);
          return _v2;
        })(_v0, _v1),
        _v3 = [],
        _v4 = _v0.token;
      return _v4.match(_v18) ? _v3.push(_v39.translations.suggestions.capitalization) : _v4.match(_v21) && _v4.toLowerCase() !== _v4 && _v3.push(_v39.translations.suggestions.allUppercase), _v0.reversed && _v0.token.length >= 4 && _v3.push(_v39.translations.suggestions.reverseWords), _v0.l33t && _v3.push(_v39.translations.suggestions.l33t), {
        warning: _v2,
        suggestions: _v3
      };
    },
    _v61 = _v0 => "recentYear" === _v0.regexName ? {
      warning: _v39.translations.warnings.recentYears,
      suggestions: [_v39.translations.suggestions.recentYears, _v39.translations.suggestions.associatedYears]
    } : {
      warning: null,
      suggestions: []
    },
    _v62 = _v0 => {
      let _v1 = _v39.translations.warnings.extendedRepeat;
      return 1 === _v0.baseToken.length && (_v1 = _v39.translations.warnings.simpleRepeat), {
        warning: _v1,
        suggestions: [_v39.translations.suggestions.repeated]
      };
    },
    _v63 = () => ({
      warning: _v39.translations.warnings.sequences,
      suggestions: [_v39.translations.suggestions.sequences]
    }),
    _v64 = _v0 => {
      let _v1 = _v39.translations.warnings.keyPattern;
      return 1 === _v0.turns && (_v1 = _v39.translations.warnings.straightRow), {
        warning: _v1,
        suggestions: [_v39.translations.suggestions.longerKeyboardPattern]
      };
    },
    _v65 = () => null;
  let _v66 = {
    warning: null,
    suggestions: []
  };
  class _v67 {
    constructor() {
      this.matchers = {
        bruteforce: _v58,
        date: _v59,
        dictionary: _v60,
        regex: _v61,
        repeat: _v62,
        sequence: _v63,
        spatial: _v64,
        separator: _v65
      }, this.defaultFeedback = {
        warning: null,
        suggestions: []
      }, this.setDefaultSuggestions();
    }
    setDefaultSuggestions() {
      this.defaultFeedback.suggestions.push(_v39.translations.suggestions.useWords, _v39.translations.suggestions.noNeed);
    }
    getFeedback(_v0, _v1) {
      if (0 === _v1.length) return this.defaultFeedback;
      if (_v0 > 2) return _v66;
      let _v2 = _v39.translations.suggestions.anotherWord,
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
      return this.matchers[_v0.pattern] ? this.matchers[_v0.pattern](_v0, _v1) : _v39.matchers[_v0.pattern] && "feedback" in _v39.matchers[_v0.pattern] ? _v39.matchers[_v0.pattern].feedback(_v0, _v1) : _v66;
    }
  }
  let _v68 = () => new Date().getTime();
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  let _v83 = "var(--vimeo-colors-fill-surface)",
    _v84 = (0, _v82.rem)(20),
    _v85 = (0, _v82.rem)(24);
  function _v86({
    children: _v0,
    active: _v1,
    background: _v2 = _v83,
    desktopMarginTop: _v3 = 0,
    terms: _v4
  }) {
    return _v1 ? (0, _v2.jsx)(_v70.Box, {
      marginTop: "auto",
      position: "sticky",
      bottom: 0,
      background: _v2,
      paddingY: _v85,
      borderTopWidth: "1px",
      borderTopColor: "var(--vimeo-colors-stroke)",
      children: null == _v4 ? _v0 : (0, _v2.jsxs)(_v2.Fragment, {
        children: [_v4, (0, _v2.jsx)(_v70.Box, {
          marginTop: _v84,
          children: _v0
        })]
      })
    }) : null == _v4 ? (0, _v2.jsx)(_v70.Box, {
      marginTop: _v3,
      children: _v0
    }) : (0, _v2.jsxs)(_v70.Box, {
      marginTop: _v3,
      children: [_v4, (0, _v2.jsx)(_v70.Box, {
        marginTop: _v84,
        children: _v0
      })]
    });
  }
  _v0.s(["MobileStickyFooter", 0, _v86, "getStickyFooterBackground", 0, function (_v0) {
    return _v0 ? "white" : _v83;
  }], 0);
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = {
      transform: `scale(0.85) translateY(${(0, _v82.rem)(-22)})`,
      color: "text-primary"
    },
    _v92 = _v0 => (0, _v2.jsx)(_v90.Input, {
      placeholder: "",
      _focusVisible: {
        borderColor: "text-primary"
      },
      ..._v0
    }),
    _v93 = _v0 => (0, _v2.jsxs)(_v87.FormControl, {
      position: "relative",
      variant: "floating",
      _focusWithin: {
        label: _v91
      },
      sx: {
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": _v91,
        'input[aria-invalid="true"]:not(:placeholder-shown) + label': {
          color: "status-destructive-primary"
        },
        zIndex: 2
      },
      ..._v0,
      children: [_v0.children, (0, _v2.jsx)(_v89.FormErrorMessage, {
        fontWeight: 350,
        fontSize: "body-sm",
        color: "status-destructive-primary",
        children: _v0?.formFieldErrorMessage
      })]
    }),
    _v94 = _v0 => (0, _v2.jsx)(_v88.FormLabel, {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: "white",
      pointerEvents: "none",
      mx: 3,
      px: 1,
      my: (0, _v82.rem)(10),
      transformOrigin: "left top",
      fontSize: (0, _v82.rem)(14),
      fontWeight: 350,
      color: "text-secondary",
      lineHeight: "140%",
      letterSpacing: "-3%",
      transition: "0.2s ease all",
      ..._v0,
      children: _v0.children
    });
  _v0.s(["InputWrapper", 0, _v93, "Label", 0, _v94, "StyledInput", 0, _v92], 0);
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  let _v97 = ({
    overEighteenCertification: _v0,
    setOverEighteenCertification: _v1,
    setError: _v2,
    isFullScreen: _v3,
    shouldShowAgeCertification: _v4,
    isInvalid: _v5,
    setAgeCertificationInvalid: _v6
  }) => _v4 ? (0, _v2.jsx)(_v95.Checkbox, {
    size: "md",
    isChecked: _v0,
    onChange: _v0 => {
      _v1(_v0.target.checked), _v2(null), _v6(!1);
    },
    id: "self_certification_checkbox",
    style: _v3 ? {} : {
      marginTop: "-25px",
      marginBottom: "10px"
    },
    isInvalid: _v5,
    children: (0, _v2.jsx)(_v96.Tooltip, {
      label: (0, _v7.translate)({
        singular: "You must be 18 or older to sign up or use our services in your area.",
        dictionary: {
          es: {
            singular: "Debe tener 18 años o más para registrarse o utilizar nuestros servicios en su área."
          },
          "de-DE": {
            singular: "Sie müssen mindestens 18 Jahre alt sein, um sich anzumelden oder unsere Dienste in Ihrer Region zu nutzen."
          },
          "fr-FR": {
            singular: "Vous devez avoir 18 ans ou plus pour vous inscrire ou utiliser nos services dans votre région."
          },
          "ja-JP": {
            singular: "お住まいの地域では、当サービスのサインアップや利用には、18歳以上である必要があります。"
          },
          "ko-KR": {
            singular: "해당 지역에서 서비스를 이용하거나 가입하려면 18세 이상이어야 합니다."
          },
          "pt-BR": {
            singular: "Você deve ter 18 anos ou mais para se inscrever ou usar nossos serviços na sua região."
          },
          "zh-CN": {
            singular: "您必须年满 18 岁才能在您所在的地区注册或使用我们的服务。"
          }
        }
      }),
      placement: "top",
      maxWidth: (0, _v82.rem)(265),
      children: (0, _v2.jsx)(_v74.Text, {
        variant: _v3 ? "body-sm" : "body-md",
        display: "inline",
        color: _v3 ? "text-secondary" : "gray.600",
        children: (0, _v7.translate)({
          singular: "By checking this box, I certify that I'm 18 or older.",
          dictionary: {
            es: {
              singular: "Al marcar esta casilla, confirmo que tengo 18 años o más."
            },
            "de-DE": {
              singular: "Mit dem Ankreuzen dieses Kästchen bestätige ich, dass ich 18 Jahre oder älter bin."
            },
            "fr-FR": {
              singular: "En cochant cette case, je certifie avoir 18 ans ou plus."
            },
            "ja-JP": {
              singular: "このボックスにチェックを入れることで、私は18歳以上であることを確認します。"
            },
            "ko-KR": {
              singular: "이 확인란을 선택함으로써 본인이 만 18세 이상임을 확인합니다."
            },
            "pt-BR": {
              singular: "Ao marcar esta caixa, confirmo que tenho 18 anos ou mais."
            },
            "zh-CN": {
              singular: "通过勾选此框，我确认我已年满 18 岁。"
            }
          }
        })
      })
    })
  }) : null;
  var _v98 = _v0.i(0);
  function _v99({
    passwordScore: _v0
  }) {
    return (0, _v4.useMemo)(() => {
      if (void 0 === _v0) return (0, _v2.jsx)(_v2.Fragment, {});
      let _v0 = 25,
        _v1 = "linear-gradient(90deg, #9D2926 0%, #E9394C 61.06%, #E0295B 85.1%, #E4259E 100%)";
      return _v0 >= 4 ? (_v0 = 95, _v1 = "linear-gradient(90deg, #176127 0%, #127A28 22.12%, #28BF47 44.71%, #13F060 97.12%, #00DDDC 100%)") : _v0 >= 2 && (_v0 = 50, _v1 = "linear-gradient(90deg, #B06820 16.35%, #D7970B 34.13%, #FED94C 59.13%, #FFC964 86.06%, #FFFF00 100%)"), (0, _v2.jsx)(_v98.Progress, {
        height: (0, _v82.rem)(4),
        value: _v0,
        sx: {
          div: {
            background: _v1
          }
        }
      });
    }, [_v0]);
  }
  async function _v100(_v0, _v1) {
    try {
      let _v0 = await fetch(_v1, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: _v0
      }).then(_v0 => _v0.json().then(_v0 => ({
        ..._v0,
        status: _v0.status
      })).catch(() => ({
        status: _v0.status
      })));
      if (_v0.logged_in || _v0.force_redirect && _v0.redirect_url) return _v0;
      throw _v0;
    } catch (_v0) {
      if (429 === _v0.status) return _v0;
      throw _v0;
    }
  }
  _v0.s(["Login", 0, _v100], 0);
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = _v5.default.section.withConfig({
      displayName: "Shared__FormSection",
      componentId: "sc-e0fa4153-0"
    })`
  margin-top: ${(0, _v3.rem)(10)};
`,
    _v105 = (0, _v5.default)(_v101.Button).attrs(({
      format: _v0
    }) => ({
      format: _v0 || "primary",
      size: "lg"
    })).withConfig({
      displayName: "Shared__ContinueButton",
      componentId: "sc-e0fa4153-1"
    })`
  width: 100%;
  &.f2pPilotRegLogin {
    background: var(--vimeo-colors-text-primary);
    margin-top: ${(0, _v3.rem)(24)};
    &:hover {
      background: var(--vimeo-colors-text-primary);
    }
  }
  &.styledCta {
    background: #17d5ff;
    color: #11191d;
    &:hover {
      background: #17d5ff;
      color: #11191d;
    }
  }
`,
    _v106 = _v5.default.div.withConfig({
      displayName: "Shared__OrSeparator",
      componentId: "sc-e0fa4153-2"
    })`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--vimeo-colors-text-tertiary);
  padding: ${(0, _v3.rem)(12)} 0;
  font-size: ${(0, _v3.rem)(14)};
  &::before,
  &::after {
    position: relative;
    width: calc(50% - ${(0, _v3.rem)(16)});
    height: ${(0, _v3.rem)(1)};
    content: '\\a0';
    background-color: var(--vimeo-colors-stroke);
  }
`,
    _v107 = (0, _v5.default)(_v103.Notice).withConfig({
      displayName: "Shared__Notice",
      componentId: "sc-e0fa4153-3"
    })`
  padding-right: ${(0, _v3.rem)(30)};
`,
    _v108 = _v5.default.hr.withConfig({
      displayName: "Shared__HR",
      componentId: "sc-e0fa4153-4"
    })`
  border: 1px solid var(--vimeo-colors-stroke);
  width: 100%;
  margin-bottom: ${(0, _v3.rem)(16)};
`,
    _v109 = _v5.default.form.withConfig({
      displayName: "Shared__Form",
      componentId: "sc-e0fa4153-5"
    })`
  display: flex;
  flex-direction: column;
`,
    _v110 = _v5.default.div.withConfig({
      displayName: "Shared__InputWrapper",
      componentId: "sc-e0fa4153-6"
    })`
  ${({
      order: _v0
    }) => _v0 && _v5.css`
      order: ${_v0};
    `}
  margin-bottom: ${(0, _v3.rem)(16)};
  span[role='alert'] {
    color: var(--vimeo-colors-status-destructive-primary);
  }

  input {
    padding: ${(0, _v3.rem)(16)} ${(0, _v3.rem)(8)};
    &::placeholder {
      color: var(--vimeo-colors-text-tertiary);
      opacity: 0.5;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  &.f2pPilotRegLogin {
    input {
      padding: ${(0, _v3.rem)(8)} ${(0, _v3.rem)(12)};
      border-radius: ${(0, _v3.rem)(8)};
      border: ${(0, _v3.rem)(1)} solid var(--vimeo-colors-stroke);
      &::placeholder {
        color: var(--vimeo-colors-text-tertiary);
      }
    }
  }
  ${({
      formType: _v0
    }) => "underline" === _v0 && _v5.css`
      #email_login {
        text-align: center;
      }
      padding: 8px;
      margin-bottom: 0;
      input {
        padding: 15px;
        font-size: 17px;
        &:focus {
          border-bottom: 2px solid rgba(92, 201, 255, 0.9);
          transition: border-bottom 150ms ease;
        }
      }
    `}
`,
    _v111 = _v0 => (0, _v2.jsx)(_v110, {
      formType: _v0.formType,
      order: _v0.order,
      children: (0, _v2.jsx)(_v102.Input, {
        floating: !0,
        ..._v0,
        variant: _v0.inputFieldVariant,
        ref: _v0.emailRef,
        children: _v0.children
      })
    });
  function _v112({
    xsrft: _v0,
    optIn: _v1,
    name: _v2,
    email: _v3,
    redirectUrl: _v4,
    fa: _v5,
    onSuccess: _v6,
    onEmailChange: _v7,
    disableEmail: _v8,
    inputFieldVariant: _v9,
    emailRef: _v10,
    placeholder: _v11,
    formType: _v12 = "minimal",
    submitCtaText: _v13 = (0, _v7.translate)({
      singular: "Join with email",
      dictionary: {
        es: {
          singular: "Únete con el correo electrónico"
        },
        "de-DE": {
          singular: "Mit E-Mail registrieren"
        },
        "fr-FR": {
          singular: "S'inscrire avec e-mail"
        },
        "ja-JP": {
          singular: "Eメールで登録"
        },
        "ko-KR": {
          singular: "이메일로 가입하기"
        },
        "pt-BR": {
          singular: "Cadastrar com e-mail"
        },
        "zh-CN": {
          singular: "使用电子邮件加入"
        }
      }
    }),
    pill: _v14 = !1,
    inputFieldsOrder: _v15,
    source: _v16,
    termsAndConditions: _v17,
    disclaimer: _v18,
    hasF2PVariant: _v19,
    marketingCheckBox: _v20,
    className: _v21,
    hideEmail: _v22 = !1,
    hideName: _v23 = !1,
    isInGIPTest: _v24 = !1,
    turnstileToken: _v25,
    turnstileError: _v26,
    captchaVisible: _v27,
    setIsJoinSecondScreen: _v28,
    setIsCheckEmailVerifyScreen: _v29,
    bpData: _v30,
    isFullScreen: _v31 = !1,
    stickyFooter: _v32,
    header: _v33
  }) {
    let [_v34, _v35] = (0, _v4.useState)(null),
      [_v36, _v37] = (0, _v4.useState)({}),
      [_v38, _v39] = (0, _v4.useState)(!0),
      [_v40, _v41] = (0, _v4.useState)(!1),
      [_v42, _v43] = (0, _v4.useState)(!1),
      [_v44, _v45] = (0, _v4.useState)(!1),
      _v46 = function (_v0) {
        let _v1 = (0, _v4.useContext)(_v12.ViewerContext),
          [_v2, _v3] = (0, _v4.useState)(null);
        return _v0 ? ((0, _v4.useEffect)(() => {
          if (_v1) {
            let _v0 = document.createElement("script");
            _v0.src = `https://www.google.com/recaptcha/enterprise.js?render=${_v1.recaptchaEnterpriseScoreBasedSiteKey}&onload=onloadCallback&render=explicit`, _v0.async = !0, _v0.defer = !0, document.head.appendChild(_v0);
            let _v1 = document.createElement("script");
            _v1.async = !0, _v1.defer = !0, _v1.innerHTML = `function onloadCallback() {
             grecaptcha.enterprise.ready(async () => {
                const recaptcha_token = await grecaptcha.enterprise.execute('${_v1.recaptchaEnterpriseScoreBasedSiteKey}', {action:"join"});
                window.recaptcha_enterprise_token = recaptcha_token;
                var gb = document.getElementsByClassName("grecaptcha-badge")[0];
                gb.style.visibility = "hidden";
                let event = window.document.createEvent('CustomEvent');
                event.initCustomEvent(
                    'recaptcha-token-loaded',
                    true,
                    true,
                );
                document.dispatchEvent(event);
               })
        }`, document.body.appendChild(_v1);
          }
        }, [_v1]), (0, _v4.useEffect)(() => {
          let _v0 = function () {
            _v3(window.recaptcha_enterprise_token);
          };
          return document.addEventListener("recaptcha-token-loaded", _v0), () => {
            document.removeEventListener("recaptcha-token-loaded", _v0);
          };
        }, []), _v2) : "";
      }(!1),
      _v47 = (0, _v81.useViewer)(),
      {
        trackSignupCompleted: _v48
      } = (0, _v80.useSignupTracking)(),
      _v49 = !!_v47?.requiresAgeSelfCertification,
      _v50 = (0, _v76.useIsMobile)();
    (0, _v4.useEffect)(() => {
      _v26 && _v35(_v26);
    }, [_v26]), (0, _v4.useEffect)(() => {
      (0, _v13.trackJoinPageImpressionRegFlow0625)({
        location: "join_page_step_2"
      });
    }, []);
    let _v51 = _v31 ? {
        confirmPassword: ""
      } : {},
      _v52 = _v31 ? {
        confirmPassword: _v69.string().oneOf([_v69.ref("password")], (0, _v7.translate)({
          singular: "Please confirm password",
          dictionary: {
            es: {
              singular: "Por favor, confirme la contraseña"
            },
            "de-DE": {
              singular: "Bitte bestätigen Sie das Passwort"
            },
            "fr-FR": {
              singular: "Veuillez confirmer le mot de passe"
            },
            "ja-JP": {
              singular: "パスワードを確認してください"
            },
            "ko-KR": {
              singular: "비밀번호를 확인해 주세요."
            },
            "pt-BR": {
              singular: "Confirme a senha"
            },
            "zh-CN": {
              singular: "请确认密码"
            }
          }
        })).required((0, _v7.translate)({
          singular: "Please confirm password",
          dictionary: {
            es: {
              singular: "Por favor, confirme la contraseña"
            },
            "de-DE": {
              singular: "Bitte bestätigen Sie das Passwort"
            },
            "fr-FR": {
              singular: "Veuillez confirmer le mot de passe"
            },
            "ja-JP": {
              singular: "パスワードを確認してください"
            },
            "ko-KR": {
              singular: "비밀번호를 확인해 주세요."
            },
            "pt-BR": {
              singular: "Confirme a senha"
            },
            "zh-CN": {
              singular: "请确认密码"
            }
          }
        }))
      } : {},
      _v53 = (0, _v7.translate)({
        singular: "Password must be at least {MIN} characters and contain at least one number and at least one symbol.",
        replacements: {
          MIN: 8
        },
        dictionary: {
          es: {
            singular: "La contraseña debe tener un mínimo de {MIN} caracteres e incluir al menos un número y un símbolo."
          },
          "de-DE": {
            singular: "Das Kennwort muss mindestens {MIN} Stellen haben und mindestens eine Zahl und ein Sonderzeichen enthalten"
          },
          "fr-FR": {
            singular: "Le mot de passe doit être composé d'au moins {MIN} caractères et contenir au moins 1 chiffre et 1 symbole."
          },
          "ja-JP": {
            singular: "パスワードは {MIN}文字以上で、数字と記号がそれぞれ1つ以上含まれている必要があります。"
          },
          "ko-KR": {
            singular: "비밀번호는 최소 {MIN}자 이상이어야 하며 숫자와 기호를 각각 하나 이상 포함해야 합니다."
          },
          "pt-BR": {
            singular: "A senha deve ter pelo menos {MIN} caracteres e conter pelo menos um número e pelo menos um símbolo."
          },
          "zh-CN": {
            singular: "密码长度必须至少为 {MIN} 个字符，且至少包含一个数字和一个符号。"
          }
        }
      }),
      _v54 = _v69.object({
        name: _v69.string().max(32).required((0, _v7.translate)({
          singular: "Please enter your name",
          dictionary: {
            es: {
              singular: "Introduce tu nombre"
            },
            "de-DE": {
              singular: "Bitte gib deinen Namen ein"
            },
            "fr-FR": {
              singular: "Veuillez saisir votre nom"
            },
            "ja-JP": {
              singular: "名前を入力してください"
            },
            "ko-KR": {
              singular: "이름을 입력하세요"
            },
            "pt-BR": {
              singular: "Por favor, digite seu nome"
            },
            "zh-CN": {
              singular: "请输入您的姓名"
            }
          }
        })),
        email: _v69.string().email((0, _v7.translate)({
          singular: "Please enter a valid email address",
          dictionary: {
            es: {
              singular: "Introduce una dirección de correo electrónico válida."
            },
            "de-DE": {
              singular: "Bitte gib eine gültige E-Mail-Adresse an"
            },
            "fr-FR": {
              singular: "Veuillez saisir une adresse e-mail valide"
            },
            "ja-JP": {
              singular: "正しいメールアドレスを入力してください"
            },
            "ko-KR": {
              singular: "올바른 이메일 주소를 입력하세요."
            },
            "pt-BR": {
              singular: "Digite um endereço de e-mail válido"
            },
            "zh-CN": {
              singular: "请输入有效的电子邮件地址"
            }
          }
        })).required((0, _v7.translate)({
          singular: "Please enter a valid email address",
          dictionary: {
            es: {
              singular: "Introduce una dirección de correo electrónico válida."
            },
            "de-DE": {
              singular: "Bitte gib eine gültige E-Mail-Adresse an"
            },
            "fr-FR": {
              singular: "Veuillez saisir une adresse e-mail valide"
            },
            "ja-JP": {
              singular: "正しいメールアドレスを入力してください"
            },
            "ko-KR": {
              singular: "올바른 이메일 주소를 입력하세요."
            },
            "pt-BR": {
              singular: "Digite um endereço de e-mail válido"
            },
            "zh-CN": {
              singular: "请输入有效的电子邮件地址"
            }
          }
        })),
        password: _v69.string().min(8, _v53).matches(/[0-9]/, _v53).matches(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, _v53).max(72, (0, _v7.translate)({
          singular: "Password must be less than {MAX} characters and contain at least one number and at least one symbol.",
          replacements: {
            MAX: 72
          },
          dictionary: {
            es: {
              singular: "La contraseña debe tener menos de {MAX} caracteres e incluir al menos un número y un símbolo."
            },
            "de-DE": {
              singular: "Das Kennwort darf höchstens {MAX} Stellen lang sein und muss mindestens eine Zahl und ein Sonderzeichen enthalten"
            },
            "fr-FR": {
              singular: "Le mot de passe doit être composé de moins de {MAX} caractères et contenir au moins 1 chiffre et 1 symbole."
            },
            "ja-JP": {
              singular: "パスワードは {MAX}文字以内で、数字と記号がそれぞれ1つ以上含まれている必要があります。"
            },
            "ko-KR": {
              singular: "비밀번호는 {MAX}자를 초과할 수 없으며 숫자와 기호를 각각 하나 이상 포함해야 합니다."
            },
            "pt-BR": {
              singular: "A senha deve ter menos de {MAX} caracteres e conter pelo menos um número e pelo menos um símbolo."
            },
            "zh-CN": {
              singular: "密码长度必须少于 {MAX} 个字符，且至少包含一个数字和一个符号。"
            }
          }
        })).required((0, _v7.translate)({
          singular: "Please enter your password",
          dictionary: {
            es: {
              singular: "Introduce tu contraseña."
            },
            "de-DE": {
              singular: "Bitte gib dein Kennwort ein"
            },
            "fr-FR": {
              singular: "Veuillez saisir votre mot de passe"
            },
            "ja-JP": {
              singular: "パスワードを入力してください"
            },
            "ko-KR": {
              singular: "비밀번호를 입력하세요"
            },
            "pt-BR": {
              singular: "Por favor, digite sua senha"
            },
            "zh-CN": {
              singular: "请输入密码"
            }
          }
        })),
        ..._v52
      }),
      _v55 = (0, _v79.useForm)({
        validationSchema: _v54,
        initialValues: {
          email: _v3 || "",
          password: "",
          name: _v2 || "",
          overEighteenCertification: !1,
          ..._v51
        },
        onSubmit: async _v0 => {
          let _v1 = _v55[_v79.CONTROLLER]?.state?.errors;
          for (let {
            field: _v0,
            errorCode: _v1
          } of [{
            field: "email",
            errorCode: {
              has_error_invalid_email: ""
            }
          }, {
            field: "password",
            errorCode: {
              has_error_password_too_simple: ""
            }
          }]) if (_v1?.has(_v0) && Array.isArray(_v1.get(_v0)) && (_v1.get(_v0)?.length ?? 0) > 0) {
            _v35(_v1.get(_v0)?.[0] ?? ""), _v37(_v1);
            return;
          }
          if (_v49 && !_v0.overEighteenCertification) {
            _v35((0, _v7.translate)({
              singular: "Please certify you are over 18 by checking input box",
              dictionary: {
                es: {
                  singular: "Marque la casilla para confirmar que tiene 18 años o más."
                },
                "de-DE": {
                  singular: "Setzen Sie ein Häkchen, um zu bestätigen, dass Sie über 18 Jahre alt sind."
                },
                "fr-FR": {
                  singular: "Veuillez certifier que vous avez plus de 18 ans en cochant la case"
                },
                "ja-JP": {
                  singular: "入力ボックスにチェックを入れて、18歳以上であることを確認してください。"
                },
                "ko-KR": {
                  singular: "확인란에 체크하여 만 18세 이상임을 확인해 주세요."
                },
                "pt-BR": {
                  singular: "Marque a caixa de seleção para confirmar que você tem mais de 18 anos"
                },
                "zh-CN": {
                  singular: "请勾选输入框以确认您已年满 18 岁。"
                }
              }
            })), _v45(!0);
            return;
          }
          if (_v31 && _v0.password !== _v0.confirmPassword) {
            _v35((0, _v7.translate)({
              singular: "Please confirm password",
              dictionary: {
                es: {
                  singular: "Por favor, confirme la contraseña"
                },
                "de-DE": {
                  singular: "Bitte bestätigen Sie das Passwort"
                },
                "fr-FR": {
                  singular: "Veuillez confirmer le mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを確認してください"
                },
                "ko-KR": {
                  singular: "비밀번호를 확인해 주세요."
                },
                "pt-BR": {
                  singular: "Confirme a senha"
                },
                "zh-CN": {
                  singular: "请确认密码"
                }
              }
            })), _v37({
              has_error_password_missmatch: ""
            });
            return;
          }
          _v41(!1);
          let _v2 = `name=${_v0.name}&email=${encodeURIComponent(_v0.email)}&password=${encodeURIComponent(_v0.password)}&token=${_v0}&action=join&service=${_v24 ? "google_identity_platform" : "vimeo"}&marketing_opt_in=${_v1}&recaptcha_enterprise_token=${_v46}&turnstile_token=${_v25}&self_certified_over_eighteen=${_v0.overEighteenCertification}`;
          _v4 && (_v2 += `&redirect=${encodeURIComponent(_v4)}`), _v16 && (_v2 += `&source=${encodeURIComponent(_v16)}`);
          let _v3 = !1;
          if (_v24) {
            let {
                ERROR_CODES_TO_LOG: _v0,
                SIGNUP_ERROR_EMAIL_EXISTS: _v1,
                SIGNUP_ERROR_INVALID_EMAIL: _v2,
                SIGNUP_ERROR_WEAK_PASSWORD: _v3,
                GoogleIdentityPlatform: _v4
              } = await _v0.A(0),
              _v5 = new _v4();
            try {
              if (_v0.email && _v0.password) {
                let _v0 = await _v5.signUpWithEmailAndPassword(_v0.email, _v0.password);
                _v2 += `&gip_id_token=${_v0._tokenResponse.idToken}&gip_uid=${_v0.user.uid}`;
              }
            } catch (_v0) {
              _v3 = !0;
              let _v1 = _v0.code,
                _v2 = (0, _v7.translate)({
                  singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
                  dictionary: {
                    es: {
                      singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
                    },
                    "de-DE": {
                      singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
                    },
                    "fr-FR": {
                      singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
                    },
                    "ko-KR": {
                      singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
                    },
                    "pt-BR": {
                      singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
                    },
                    "zh-CN": {
                      singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
                    }
                  }
                });
              _v1 === _v1 && (_v2 = (0, _v7.translate)({
                singular: "There is already a Vimeo user with this email address.",
                dictionary: {
                  es: {
                    singular: "Ya existe un usuario de Vimeo con esta dirección de correo electrónico."
                  },
                  "de-DE": {
                    singular: "Es gibt bereits einen Vimeo-Benutzer mit dieser E-Mail-Adresse."
                  },
                  "fr-FR": {
                    singular: "Il existe déjà un utilisateur Vimeo avec cette adresse e-mail."
                  },
                  "ja-JP": {
                    singular: "すでにこのメールアドレスをお使いのVimeoユーザーがいます。"
                  },
                  "ko-KR": {
                    singular: "이미 이 이메일 주소를 사용하는 Vimeo 사용자가 있습니다."
                  },
                  "pt-BR": {
                    singular: "Já existe um usuário do Vimeo com este endereço de e-mail."
                  },
                  "zh-CN": {
                    singular: "此电子邮件地址已有一位 Vimeo 用户使用。"
                  }
                }
              })), _v1 === _v3 && (_v2 = (0, _v7.translate)({
                singular: "The password is too weak.",
                dictionary: {
                  es: {
                    singular: "La contraseña es demasiado insegura."
                  },
                  "de-DE": {
                    singular: "Das Passwort ist zu schwach."
                  },
                  "fr-FR": {
                    singular: "Le mot de passe est trop faible."
                  },
                  "ja-JP": {
                    singular: "パスワードが弱すぎます。"
                  },
                  "ko-KR": {
                    singular: "비밀번호가 너무 취약합니다."
                  },
                  "pt-BR": {
                    singular: "A senha é muito fraca."
                  },
                  "zh-CN": {
                    singular: "密码太弱。"
                  }
                }
              })), _v1 == _v2 && (_v2 = (0, _v7.translate)({
                singular: "Please enter a valid email address.",
                dictionary: {
                  es: {
                    singular: "Introduce una dirección de correo electrónico válida."
                  },
                  "de-DE": {
                    singular: "Bitte gib eine gültige E-Mail-Adresse an."
                  },
                  "fr-FR": {
                    singular: "Veuillez saisir une adresse e-mail valide."
                  },
                  "ja-JP": {
                    singular: "有効な E メールアドレスを入力してください。"
                  },
                  "ko-KR": {
                    singular: "올바른 이메일 주소를 입력하세요."
                  },
                  "pt-BR": {
                    singular: "Digite um endereço de e-mail válido."
                  },
                  "zh-CN": {
                    singular: "请输入有效的电子邮件地址。"
                  }
                }
              })), _v35(_v2), _v37(_v1), _v0.includes(_v1);
            }
          }
          if (!_v3) try {
            let _v0 = await _v100(_v2, "/join");
            _v0?.signup && (_v48(_v1, "Email", {
              user_id: _v0.vimeo_cur_user?.id?.toString()
            }), (0, _v78.sendGTMEvent)({
              event: "register",
              "register.ref_page": document.referrer,
              "register.form_page": document.location.href,
              "register.is_mobile_device": _v50,
              "register.vuid": (0, _v77.loadCookie)("vuid") || "",
              "register.country_code": _v47?.location || ""
            })), _v6 && _v6(_v0);
          } catch (_v0) {
            let _v1 = (0, _v7.translate)({
              singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
              dictionary: {
                es: {
                  singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
                },
                "de-DE": {
                  singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
                },
                "fr-FR": {
                  singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
                },
                "ja-JP": {
                  singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
                },
                "ko-KR": {
                  singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
                },
                "zh-CN": {
                  singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
                }
              }
            });
            for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0) && 0 !== _v0.indexOf("has_error_")) {
              _v1 = _v0[_v0];
              break;
            }
            if ((_v19 && !_v0.hasOwnProperty("has_error_invalid_email") && _v0.hasOwnProperty("email") || _v0.hasOwnProperty("new_password") || _v0.hasOwnProperty("display_name")) && (_v1 = (0, _v7.translate)({
              singular: "Please enter your name, email, and password",
              dictionary: {
                es: {
                  singular: "Introduzca su nombre, correo electrónico y contraseña"
                },
                "de-DE": {
                  singular: "Bitte gib deinen Namen, E-Mail und Kennwort ein"
                },
                "fr-FR": {
                  singular: "Veuillez saisir votre nom, e-mail et mot de passe"
                },
                "ja-JP": {
                  singular: "あなたの名前、メールアドレス、およびパスワードを入力してください"
                },
                "ko-KR": {
                  singular: "이름, 이메일, 비밀번호를 입력하세요"
                },
                "pt-BR": {
                  singular: "Por favor, digite seu nome, e-mail e senha"
                },
                "zh-CN": {
                  singular: "请输入您的姓名、电子邮件和密码"
                }
              }
            })), _v0.has_error_user_exists && (_v1 = (0, _v7.translate)({
              singular: "There is already a Vimeo user with this email address.",
              dictionary: {
                es: {
                  singular: "Ya existe un usuario de Vimeo con esta dirección de correo electrónico."
                },
                "de-DE": {
                  singular: "Es gibt bereits einen Vimeo-Benutzer mit dieser E-Mail-Adresse."
                },
                "fr-FR": {
                  singular: "Il existe déjà un utilisateur Vimeo avec cette adresse e-mail."
                },
                "ja-JP": {
                  singular: "すでにこのメールアドレスをお使いのVimeoユーザーがいます。"
                },
                "ko-KR": {
                  singular: "이미 이 이메일 주소를 사용하는 Vimeo 사용자가 있습니다."
                },
                "pt-BR": {
                  singular: "Já existe um usuário do Vimeo com este endereço de e-mail."
                },
                "zh-CN": {
                  singular: "此电子邮件地址已有一位 Vimeo 用户使用。"
                }
              }
            })), _v0.hasOwnProperty("has_captcha_error") && (_v1 = (0, _v7.translate)({
              singular: "Unable to verify CAPTCHA. Please try again or visit the {A}Support Center{/A} for help.",
              replacements: {
                A: _v0 => (0, _v2.jsx)("a", {
                  href: "https://vimeo.com/help/contact",
                  target: "_blank",
                  rel: "noreferrer",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "No se pudo verificar el CAPTCHA. Vuelva a intentarlo o visite el {A}Centro de asistencia{/A} para obtener ayuda."
                },
                "de-DE": {
                  singular: "CAPTCHA kann nicht überprüft werden. Bitte versuchen Sie es erneut oder besuchen Sie das {A}Support Center{/A}, um Hilfe zu erhalten."
                },
                "fr-FR": {
                  singular: "Impossible de vérifier le CAPTCHA. Veuillez réessayer ou accéder au {A}Centre d'assistance{/A} pour obtenir de l'aide."
                },
                "ja-JP": {
                  singular: "CAPTCHAを確認できません。もう一度お試しになるか、 {A}サポートセンター{/A}にアクセスしてください。"
                },
                "ko-KR": {
                  singular: "CAPTCHA를 확인할 수 없습니다. 다시 시도하거나 {A}지원 센터{/A}를 방문하여 도움을 받으세요."
                },
                "pt-BR": {
                  singular: "Não foi possível verificar o CAPTCHA. Tente novamente ou visite o {A}Centro de suporte{/A} para obter ajuda."
                },
                "zh-CN": {
                  singular: "无法验证 CAPTCHA。请重试或访问{A}支持中心{/A}寻求帮助。"
                }
              }
            })), _v35(_v1), _v37(_v0), _v0.hasOwnProperty("email_verification_required")) {
              _v35(null), _v28 && _v29 && (_v28(!1), _v29(!0));
              return;
            }
          }
        }
      }),
      _v56 = (0, _v79.useField)(_v55, "name"),
      _v57 = (0, _v79.useField)(_v55, "email"),
      _v58 = (0, _v79.useField)(_v55, "password"),
      _v59 = (0, _v79.useField)(_v55, "confirmPassword"),
      _v60 = (0, _v79.useField)(_v55, "overEighteenCertification"),
      _v61 = _v0 => {
        _v57.iris.onChange(_v0), _v35(null), _v7 && _v7(_v0.target.value);
      },
      _v62 = _v11 ? {
        placeholder: _v11.name
      } : {
        label: (0, _v7.translate)({
          singular: "Name",
          dictionary: {
            es: {
              singular: "Nombre"
            },
            "fr-FR": {
              singular: "Nom"
            },
            "ja-JP": {
              singular: "名前"
            },
            "ko-KR": {
              singular: "이름"
            },
            "pt-BR": {
              singular: "Nome"
            },
            "zh-CN": {
              singular: "姓名"
            }
          }
        })
      },
      _v63 = _v11 ? {
        placeholder: _v11.email
      } : {
        label: (0, _v7.translate)({
          singular: "Email",
          dictionary: {
            es: {
              singular: "Correo electrónico"
            },
            "de-DE": {
              singular: "E-Mail-Adresse"
            },
            "fr-FR": {
              singular: "E-mail"
            },
            "ja-JP": {
              singular: "E メール"
            },
            "ko-KR": {
              singular: "이메일"
            },
            "pt-BR": {
              singular: "E-mail"
            },
            "zh-CN": {
              singular: "电子邮件"
            }
          }
        })
      },
      _v64 = _v11 ? {
        placeholder: _v11.password
      } : {
        label: (0, _v7.translate)({
          singular: "Password",
          dictionary: {
            es: {
              singular: "Contraseña"
            },
            "de-DE": {
              singular: "Kennwort"
            },
            "fr-FR": {
              singular: "Mot de passe "
            },
            "ja-JP": {
              singular: "パスワード"
            },
            "ko-KR": {
              singular: "비밀번호"
            },
            "pt-BR": {
              singular: "Senha"
            },
            "zh-CN": {
              singular: "密码"
            }
          }
        })
      },
      _v65 = _v31 && (_v36.hasOwnProperty("has_error_password_missmatch") || _v36.hasOwnProperty("has_error_user_exists") || _v36.hasOwnProperty("has_error_invalid_email")),
      _v66 = {
        _hover: {
          cursor: "pointer"
        },
        color: "text-secondary"
      },
      _v67 = _v58.iris.value ? (_v0 => {
        let _v1,
          _v2,
          _v3,
          _v4,
          _v5,
          _v6 = _v68(),
          _v7 = new _v55().match(_v0);
        if (_v7 instanceof Promise) throw Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");
        return _v1 = new _v67(), _v2 = new _v57(), _v3 = _v49.mostGuessableMatchSequence(_v0, _v7), _v4 = _v68() - _v6, _v5 = _v2.estimateAttackTimes(_v3.guesses), {
          calcTime: _v4,
          ..._v3,
          ..._v5,
          feedback: _v1.getFeedback(_v5.score, _v3.sequence)
        };
      })(_v58.iris.value).score : void 0,
      _v68 = _v32?.desktopTermsMarginTop != null ? (0, _v3.rem)(_v32.desktopTermsMarginTop - 12 * !!_v31) : void 0,
      _v69 = (0, _v2.jsx)(_v105, {
        disabled: !_v19 && !_v55.valid,
        loading: _v55.submitting,
        onClick: () => {
          (0, _v13.trackFinishAuthFlow)({
            ..._v30
          }), (0, _v13.trackRegistration)("password", _v5), _v31 ? (0, _v13.trackJoinPageClickRegFlow0625)({
            location: "join_page_step_2",
            event_name: "join_with_email",
            copy: "join_with_email",
            target: "email_auth_join",
            password_strength_score: _v67
          }) : (0, _v13.trackJoinWithEmailClick)(!!_v22, _v4);
        },
        pill: _v14,
        format: _v19 ? "basic" : void 0,
        className: _v21,
        "data-testid": "join-continue-button",
        children: _v13
      });
    return (0, _v2.jsxs)(_v109, {
      onSubmit: _v55.handleSubmit,
      noValidate: !0,
      style: {
        gap: _v31 ? "12px" : "",
        ...(_v32?.active ? {
          flexGrow: 1
        } : {})
      },
      onChange: () => {
        _v31 && (_v37({}), _v35(null));
      },
      children: [_v32?.active && (0, _v2.jsx)(_v70.Box, {
        marginTop: "auto"
      }), _v33, _v31 ? (0, _v2.jsxs)(_v2.Fragment, {
        children: [_v22 ? null : (0, _v2.jsxs)(_v93, {
          formFieldErrorMessage: _v34,
          isInvalid: _v36.hasOwnProperty("has_error_user_exists") || _v36.hasOwnProperty("has_error_invalid_email"),
          children: [(0, _v2.jsx)(_v92, {
            isRequired: !0,
            order: _v15?.email,
            id: "email_login",
            autoComplete: "email",
            ..._v57.iris,
            isDisabled: _v8,
            onChange: _v61
          }), (0, _v2.jsx)(_v94, {
            htmlFor: "email_login",
            children: _v63.placeholder
          })]
        }), _v23 ? null : (0, _v2.jsxs)(_v93, {
          children: [(0, _v2.jsx)(_v92, {
            isRequired: !0,
            order: _v15?.name,
            id: "name",
            type: "text",
            autoComplete: "name",
            ..._v56.iris,
            autoFocus: !0
          }), (0, _v2.jsx)(_v94, {
            htmlFor: "name",
            children: _v62.placeholder
          })]
        }), (0, _v2.jsx)(_v93, {
          formFieldErrorMessage: _v34,
          isInvalid: _v36.hasOwnProperty("has_error_password_missmatch"),
          children: (0, _v2.jsxs)(_v71.InputGroup, {
            children: [(0, _v2.jsx)(_v92, {
              isRequired: !0,
              order: _v15?.password,
              id: "password_login",
              type: _v40 ? "text" : "password",
              autoComplete: "new-password",
              ..._v58.iris,
              onChange: _v0 => {
                _v58.iris.onChange(_v0), _v39(!_v0.target.value);
              }
            }), (0, _v2.jsx)(_v94, {
              htmlFor: "password_login",
              children: _v64.placeholder
            }), (0, _v2.jsx)(_v72.InputRightElement, {
              children: (0, _v2.jsx)(_v75.EyeShut, {
                ..._v66,
                onClick: () => _v41(!_v40)
              })
            })]
          })
        }), (0, _v2.jsxs)(_v73.Collapse, {
          style: {
            overflow: "visible"
          },
          enterDuration: "2xl",
          exitDuration: "2xl",
          in: !_v38 && _v31,
          unmountOnExit: !0,
          children: [(0, _v2.jsx)(_v93, {
            children: (0, _v2.jsxs)(_v71.InputGroup, {
              children: [(0, _v2.jsx)(_v92, {
                isRequired: !0,
                order: _v15?.confirmPassword,
                id: "confirm_password_login",
                type: _v42 ? "text" : "password",
                autoComplete: "new-password",
                ..._v59.iris
              }), (0, _v2.jsx)(_v94, {
                htmlFor: "confirm_password_login",
                children: (0, _v7.translate)({
                  singular: "Confirm password",
                  dictionary: {
                    es: {
                      singular: "Confirmar contraseña"
                    },
                    "de-DE": {
                      singular: "Kennwort bestätigen"
                    },
                    "fr-FR": {
                      singular: "Confirmer le mot de passe"
                    },
                    "ja-JP": {
                      singular: "パスワードを確認"
                    },
                    "ko-KR": {
                      singular: "비밀번호 확인"
                    },
                    "pt-BR": {
                      singular: "Confirmar senha"
                    }
                  }
                })
              }), (0, _v2.jsx)(_v72.InputRightElement, {
                children: (0, _v2.jsx)(_v75.EyeShut, {
                  ..._v66,
                  onClick: () => _v43(!_v42)
                })
              })]
            })
          }), (0, _v2.jsx)(_v70.Box, {
            marginTop: (0, _v3.rem)(12),
            children: (0, _v2.jsx)(_v99, {
              passwordScore: _v67
            })
          }), (0, _v2.jsx)(_v70.Box, {
            marginTop: (0, _v3.rem)(12),
            children: (0, _v2.jsx)(_v74.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v53
            })
          })]
        }), _v34 && !_v65 && (0, _v2.jsx)(_v104, {
          children: (0, _v2.jsx)(_v107, {
            format: "negative",
            children: (0, _v2.jsx)(_v9.Paragraph, {
              size: "3",
              children: _v34
            })
          })
        }), !_v19 && (0, _v2.jsx)(_v70.Box, {
          as: "section",
          mx: "auto",
          my: (0, _v3.rem)(10),
          display: _v27 ? "block" : "none",
          children: (0, _v2.jsx)("div", {
            id: "turnstile-container"
          })
        }), _v19 && (0, _v2.jsxs)(_v2.Fragment, {
          children: [_v20, (0, _v2.jsx)(_v97, {
            overEighteenCertification: _v60.input.value,
            setOverEighteenCertification: _v60.handlers.setValue,
            setError: _v35,
            isFullScreen: _v31,
            shouldShowAgeCertification: _v49,
            isInvalid: _v44,
            setAgeCertificationInvalid: _v45
          }), _v17 && (0, _v2.jsxs)(_v104, {
            className: "termsandconditions",
            children: [(0, _v2.jsx)(_v74.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v17
            }), _v18 && (0, _v2.jsx)(_v74.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v18
            })]
          })]
        })]
      }) : (0, _v2.jsxs)(_v2.Fragment, {
        children: [_v23 ? null : (0, _v2.jsx)(_v111, {
          inputFieldVariant: _v9,
          formType: _v12,
          order: _v15?.name,
          ..._v62,
          "aria-label": (0, _v7.translate)({
            singular: "First and last name",
            dictionary: {
              es: {
                singular: "Nombre y apellido"
              },
              "de-DE": {
                singular: "Vor- und Nachname"
              },
              "fr-FR": {
                singular: "Nom et prénom"
              },
              "ja-JP": {
                singular: "お名前"
              },
              "ko-KR": {
                singular: "성과 이름"
              },
              "pt-BR": {
                singular: "Nome e sobrenome"
              },
              "zh-CN": {
                singular: "名字和姓氏"
              }
            }
          }),
          autoComplete: "name",
          id: "name",
          type: "text",
          ..._v56.iris
        }), _v22 ? null : (0, _v2.jsx)(_v111, {
          inputFieldVariant: _v9,
          emailRef: _v10,
          formType: _v12,
          order: _v15?.email,
          ..._v63,
          "aria-label": (0, _v7.translate)({
            singular: "Email",
            dictionary: {
              es: {
                singular: "Correo electrónico"
              },
              "de-DE": {
                singular: "E-Mail-Adresse"
              },
              "fr-FR": {
                singular: "E-mail"
              },
              "ja-JP": {
                singular: "E メール"
              },
              "ko-KR": {
                singular: "이메일"
              },
              "pt-BR": {
                singular: "E-mail"
              },
              "zh-CN": {
                singular: "电子邮件"
              }
            }
          }),
          autoComplete: "email",
          id: "email_login",
          ..._v57.iris,
          disabled: _v8,
          onChange: _v61
        }), (0, _v2.jsx)(_v111, {
          inputFieldVariant: _v9,
          formType: _v12,
          order: _v15?.password,
          id: "password_login",
          ..._v64,
          "aria-label": (0, _v7.translate)({
            singular: "Password",
            dictionary: {
              es: {
                singular: "Contraseña"
              },
              "de-DE": {
                singular: "Kennwort"
              },
              "fr-FR": {
                singular: "Mot de passe "
              },
              "ja-JP": {
                singular: "パスワード"
              },
              "ko-KR": {
                singular: "비밀번호"
              },
              "pt-BR": {
                singular: "Senha"
              },
              "zh-CN": {
                singular: "密码"
              }
            }
          }),
          autoComplete: "new-password",
          type: "password",
          ..._v58.iris
        }), _v34 && (0, _v2.jsx)(_v104, {
          children: (0, _v2.jsx)(_v107, {
            format: "negative",
            children: (0, _v2.jsx)(_v9.Paragraph, {
              size: "3",
              children: _v34
            })
          })
        }), !_v19 && (0, _v2.jsx)(_v70.Box, {
          as: "section",
          mx: "auto",
          my: (0, _v3.rem)(10),
          display: _v27 ? "block" : "none",
          children: (0, _v2.jsx)("div", {
            id: "turnstile-container"
          })
        }), _v19 && (0, _v2.jsxs)(_v2.Fragment, {
          children: [_v20, (0, _v2.jsx)(_v97, {
            overEighteenCertification: _v60.input.value,
            setOverEighteenCertification: _v60.handlers.setValue,
            setError: _v35,
            isFullScreen: _v31,
            shouldShowAgeCertification: _v49,
            isInvalid: _v44,
            setAgeCertificationInvalid: _v45
          }), _v17 && (0, _v2.jsxs)(_v104, {
            className: "termsandconditions",
            children: [(0, _v2.jsx)(_v9.Paragraph, {
              format: "soft",
              size: "3",
              children: _v17
            }), _v18 && (0, _v2.jsx)(_v9.Paragraph, {
              size: "3",
              children: _v18
            })]
          })]
        })]
      }), _v32 ? (0, _v2.jsx)(_v86, {
        active: _v32.active,
        background: _v32.background,
        terms: _v32.terms,
        desktopMarginTop: _v68,
        children: _v69
      }) : (0, _v2.jsx)("section", {
        children: _v69
      })]
    });
  }
  _v0.s(["ContinueButton", 0, _v105, "Form", 0, _v109, "FormSection", 0, _v104, "HR", 0, _v108, "Input", 0, _v111, "Notice", 0, _v107, "OrSeparator", 0, _v106], 0), _v0.s(["JoinEmailForm", 0, _v112], 0);
  var _v113 = _v0.i(0);
  let _v114 = _v0 => {
    let _v1 = (0, _v113.usePico)();
    return {
      trackTurnstileLoadFailed: (0, _v4.useCallback)(_v0 => {
        _v1.track("turnstile_load_failed", {
          turnstile_load_failed_reason: _v0,
          turnstile_load_failed_surface: _v0
        });
      }, [_v1, _v0])
    };
  };
  _v0.s(["useTurnstileTracking", 0, _v114], 0);
  var _v115 = _v0.i(0);
  let _v116 = _v69.object({
      email: _v69.string().email((0, _v7.translate)({
        singular: "Please enter a valid email address",
        dictionary: {
          es: {
            singular: "Introduce una dirección de correo electrónico válida."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige E-Mail-Adresse an"
          },
          "fr-FR": {
            singular: "Veuillez saisir une adresse e-mail valide"
          },
          "ja-JP": {
            singular: "正しいメールアドレスを入力してください"
          },
          "ko-KR": {
            singular: "올바른 이메일 주소를 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um endereço de e-mail válido"
          },
          "zh-CN": {
            singular: "请输入有效的电子邮件地址"
          }
        }
      })).required((0, _v7.translate)({
        singular: "Please enter a valid email address",
        dictionary: {
          es: {
            singular: "Introduce una dirección de correo electrónico válida."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige E-Mail-Adresse an"
          },
          "fr-FR": {
            singular: "Veuillez saisir une adresse e-mail valide"
          },
          "ja-JP": {
            singular: "正しいメールアドレスを入力してください"
          },
          "ko-KR": {
            singular: "올바른 이메일 주소를 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um endereço de e-mail válido"
          },
          "zh-CN": {
            singular: "请输入有效的电子邮件地址"
          }
        }
      })),
      password: _v69.string().required((0, _v7.translate)({
        singular: "Please enter your password",
        dictionary: {
          es: {
            singular: "Introduce tu contraseña."
          },
          "de-DE": {
            singular: "Bitte gib dein Kennwort ein"
          },
          "fr-FR": {
            singular: "Veuillez saisir votre mot de passe"
          },
          "ja-JP": {
            singular: "パスワードを入力してください"
          },
          "ko-KR": {
            singular: "비밀번호를 입력하세요"
          },
          "pt-BR": {
            singular: "Por favor, digite sua senha"
          },
          "zh-CN": {
            singular: "请输入密码"
          }
        }
      })),
      isOtp: _v69.boolean(),
      otp: _v69.string().when("isOtp", {
        is: _v0 => !0 === _v0,
        then: _v69.string().required((0, _v7.translate)({
          singular: "Invalid code, please try again",
          dictionary: {
            es: {
              singular: "Código no válido. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Ungültiger Code, bitte versuche es erneut."
            },
            "fr-FR": {
              singular: "Code non valide, veuillez réessayer"
            },
            "ja-JP": {
              singular: "無効なコードです、再試行してください"
            },
            "ko-KR": {
              singular: "유효하지 않은 코드, 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Código inválido, por favor, tente novamente"
            },
            "zh-CN": {
              singular: "代码无效，请重试"
            }
          }
        })).matches(/^\d+$/, (0, _v7.translate)({
          singular: "Invalid code, please try again",
          dictionary: {
            es: {
              singular: "Código no válido. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Ungültiger Code, bitte versuche es erneut."
            },
            "fr-FR": {
              singular: "Code non valide, veuillez réessayer"
            },
            "ja-JP": {
              singular: "無効なコードです、再試行してください"
            },
            "ko-KR": {
              singular: "유효하지 않은 코드, 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Código inválido, por favor, tente novamente"
            },
            "zh-CN": {
              singular: "代码无效，请重试"
            }
          }
        })),
        otherwise: _v69.string().nullable(!0)
      })
    }),
    _v117 = _v5.default.div.withConfig({
      displayName: "LoginEmailForm__CheckboxContainer",
      componentId: "sc-2baaa43d-0"
    })`
  margin-top: ${(0, _v3.rem)(8)};
`;
  function _v118({
    xsrft: _v0,
    redirectUrl: _v1,
    email: _v2,
    disableEmail: _v3,
    fa: _v4,
    onSuccess: _v5,
    onEmailChange: _v6,
    target: _v7 = "_self",
    showEnterpriseOptInConsent: _v8,
    placeholder: _v9,
    className: _v10,
    submitCtaText: _v11 = (0, _v7.translate)({
      singular: "Continue",
      dictionary: {
        es: {
          singular: "Continuar"
        },
        "de-DE": {
          singular: "Weiter"
        },
        "fr-FR": {
          singular: "Continuer"
        },
        "ja-JP": {
          singular: "次へ"
        },
        "ko-KR": {
          singular: "계속"
        },
        "pt-BR": {
          singular: "Continuar"
        },
        "zh-CN": {
          singular: "继续"
        }
      }
    }),
    isTwoStep: _v12,
    onTurnstileTokenChange: _v13,
    isFullScreen: _v14
  }) {
    let [_v15, _v16] = (0, _v4.useState)(null),
      [_v17, _v18] = (0, _v4.useState)(!1),
      [_v19, _v20] = (0, _v4.useState)(!1),
      [_v21, _v22] = (0, _v4.useState)(""),
      [_v23, _v24] = (0, _v4.useState)(!1),
      [_v25, _v26] = (0, _v4.useState)(!1),
      [_v27, _v28] = (0, _v4.useState)(!1),
      [_v29, _v30] = (0, _v4.useState)(!1),
      {
        trackTurnstileLoadFailed: _v31
      } = _v114("login"),
      {
        turnstileToken: _v32
      } = (0, _v11.useTurnstile)(!1, "turnstile-container", {
        errorCb: _v0 => {
          "script_load_error" === _v0 || "script_timeout" === _v0 ? (_v30(!0), _v31(_v0), _v16((0, _v7.translate)({
            singular: "We're having trouble verifying your browser. This is usually caused by an ad blocker or privacy extension. Try disabling it and {B}refreshing the page{/B}, or {A}contact support{/A}.",
            replacements: {
              A: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }),
              B: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "#",
                variant: "minimal",
                onClick: _v0 => {
                  _v0.preventDefault(), window.location.reload();
                },
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Tenemos problemas para verificar su navegador. Esto suele ser causado por un bloqueador de anuncios o por una extensión de privacidad. Intente desactivarlo y {B}actualizar la página{/B}, o {A}póngase en contacto con el soporte{/A}."
              },
              "de-DE": {
                singular: "Wir haben Schwierigkeiten, Ihren Browser zu verifizieren. Dies wird normalerweise durch einen Adblocker oder eine Datenschutz-Erweiterung verursacht. Versuchen Sie, den Adblocker bzw. die Datenschutz-Erweiterung zu deaktivieren und {B}die Seite neu zu laden{/B}, oder {A}kontaktieren Sie den Support{/A}."
              },
              "fr-FR": {
                singular: "Nous rencontrons des difficultés pour vérifier votre navigateur. Cela est généralement causé par un bloqueur de publicités ou une extension de confidentialité. Essayez de le désactiver et {B}de rafraîchir la page{/B}, ou {A}contacter le support{/A}."
              },
              "ja-JP": {
                singular: "ブラウザの確認に問題が発生しています。これは通常、広告ブロッカーやプライバシー関連の拡張機能が原因です。それらを無効にして{B}ページを再読み込みする{/B}か、{A}サポートにお問い合わせください{/A}。"
              },
              "ko-KR": {
                singular: "브라우저를 확인하는 데 문제가 발생했습니다. 이는 일반적으로 광고 차단기나 개인정보 보호 확장 프로그램으로 인해 발생합니다. 해당 확장 프로그램을 비활성화한 다음 {B}페이지를 새로 고침{/B}하거나 {A}지원팀에 문의{/A}."
              },
              "pt-BR": {
                singular: "Estamos com dificuldades para verificar seu navegador. Isso geralmente é causado por um bloqueador de anúncios ou por uma extensão de privacidade. Tente desativar o bloqueador ou a extensão e {B}atualizar a página{/B}, ou {A}entre em contato com o suporte{/A}."
              },
              "zh-CN": {
                singular: "我们在验证您的浏览器时遇到问题。这通常是由广告拦截器或隐私扩展引起的。请尝试禁用它并{B}刷新页面{/B}，或 {A}联系支持{/A}。"
              }
            }
          }))) : (_v26(!0), _v16((0, _v7.translate)({
            singular: "Whoops! We are having some technical difficulties. To continue, contact our {A}support team{/A}.",
            replacements: {
              A: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "¡Uy! Estamos teniendo algunas dificultades técnicas. Para continuar, póngase en contacto con nuestro {A}equipo de asistencia{/A}."
              },
              "de-DE": {
                singular: "Hoppla! Wir haben einige technische Schwierigkeiten. Um fortzufahren, kontaktieren Sie unser {A}Support-Team{/A}."
              },
              "fr-FR": {
                singular: "Oups ! Nous rencontrons des difficultés techniques. Pour continuer, contactez notre {A}équipe d'assistance{/A}."
              },
              "ja-JP": {
                singular: "申し訳ありません。現在、技術的な問題が発生しています。続行するには、 {A}サポートチーム{/A}までお問い合わせください。"
              },
              "ko-KR": {
                singular: "이런! 현재 기술적인 문제가 발생했습니다. 계속하려면 {A}지원팀{/A}에 문의하세요."
              },
              "pt-BR": {
                singular: "Opa! Estamos com algumas dificuldades técnicas. Para continuar, entre em contato com nossa {A}equipe de suporte{/A}."
              },
              "zh-CN": {
                singular: "抱歉！我们遇到了一些技术困难。如需继续，请联系我们的{A}支持团队{/A}。"
              }
            }
          })));
        },
        beforeInteractiveCb: () => _v26(!0)
      }),
      _v33 = async (_v0, _v1) => {
        if (_v17 && _v18(!1), _v15 && _v16(""), !_v34.valid && !_v1) return void _v16((0, _v7.translate)({
          singular: "Please enter your email and password",
          dictionary: {
            es: {
              singular: "Introduce tu correo electrónico y contraseña"
            },
            "de-DE": {
              singular: "Bitte gib dein E-Mail und dein Kennwort ein"
            },
            "fr-FR": {
              singular: "Veuillez saisir votre e-mail et mot de passe"
            },
            "ja-JP": {
              singular: "あなたのメールアドレスとパスワードを入力してください。"
            },
            "ko-KR": {
              singular: "이메일과 비밀번호를 입력하세요"
            },
            "pt-BR": {
              singular: "Por favor, digite seu e-mail e senha"
            },
            "zh-CN": {
              singular: "请输入您的电子邮件和密码"
            }
          }
        }));
        let _v2 = `email=${encodeURIComponent(_v0.email)}&password=${encodeURIComponent(_v0.password)}&token=${_v0}&otp=${encodeURIComponent(_v0.otp)}&action=login&service=vimeo&otp_required=${encodeURIComponent(_v21)}&request_new_token=${encodeURIComponent(+!!_v1)}&enterprise_opt_in_consent=${encodeURIComponent(+!!_v23)}&turnstile_token=${_v32 || ""}`;
        _v1 && (_v2 += `&redirect=${encodeURIComponent(_v1)}`);
        try {
          let _v0 = await _v100(_v2, "/log_in");
          if (429 === _v0.status) return void _v16((0, _v7.translate)({
            singular: "Sorry, but you have had too many invalid login attempts. Please wait a few minutes and try again.",
            dictionary: {
              es: {
                singular: "Lo sentimos, has tenido muchos intentos fallidos para iniciar sesión. Espera unos minutos e inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Es tut uns leid, aber du hattest zu viele ungültige Anmeldeversuche. Bitte warte einige Minuten und versuche es erneut."
              },
              "fr-FR": {
                singular: "Désolé, mais vous avez accumulé un trop grand nombre de tentatives de connexion invalides. Veuillez attendre quelques minutes et réessayer."
              },
              "ja-JP": {
                singular: "残念ながら、短時間に大量に無効ログインが試されました。安全性確保のため、しばらくお待ちいただいてから、もう一度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다, 로그인 실패 한도를 초과했습니다. 몇 분 후 다시 시도하세요."
              },
              "pt-BR": {
                singular: "Desculpe, mas já ocorreram muitas tentativas inválidas de conexão. Aguarde alguns minutos e tente de novo."
              },
              "zh-CN": {
                singular: "抱歉，您的无效登录尝试次数过多。请过几分钟后再重试。"
              }
            }
          }));
          _v0.force_redirect && (_v0.redirect_url && (0, _v115.isVimeoRedirectableUrl)(_v0.redirect_url) ? window.location.href = _v0.redirect_url : window.location.href = "/"), _v5 && _v5(_v0);
        } catch (_v0) {
          let _v1 = "Email and password do not match";
          for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0) && 0 !== _v0.indexOf("has_error_")) {
            _v1 = _v0[_v0];
            break;
          }
          if (_v0.hasOwnProperty("email")) return void _v16((0, _v7.translate)({
            singular: "Please enter a valid email address",
            dictionary: {
              es: {
                singular: "Introduce una dirección de correo electrónico válida."
              },
              "de-DE": {
                singular: "Bitte gib eine gültige E-Mail-Adresse an"
              },
              "fr-FR": {
                singular: "Veuillez saisir une adresse e-mail valide"
              },
              "ja-JP": {
                singular: "正しいメールアドレスを入力してください"
              },
              "ko-KR": {
                singular: "올바른 이메일 주소를 입력하세요."
              },
              "pt-BR": {
                singular: "Digite um endereço de e-mail válido"
              },
              "zh-CN": {
                singular: "请输入有效的电子邮件地址"
              }
            }
          }));
          if (_v0.hasOwnProperty("has_error_invalid_credentials")) return void _v16((0, _v7.translate)({
            singular: "Email and password do not match",
            dictionary: {
              es: {
                singular: "El correo electrónico y la contraseña no coinciden."
              },
              "de-DE": {
                singular: "E-Mail und Kennwort stimmen nicht überein"
              },
              "fr-FR": {
                singular: "L'adresse e-mail ne correspond pas au mot de passe que vous avez saisi"
              },
              "ja-JP": {
                singular: "E メールとパスワードが一致しません"
              },
              "ko-KR": {
                singular: "이메일과 비밀번호가 일치하지 않습니다."
              },
              "pt-BR": {
                singular: "O e-mail e a senha não correspondem"
              },
              "zh-CN": {
                singular: "电子邮件和密码不匹配"
              }
            }
          }));
          if (_v0.hasOwnProperty("has_error_resent_otp") && _v1) return void _v16((0, _v7.translate)({
            singular: "Authentication code emailed",
            dictionary: {
              es: {
                singular: "Código de autentificación enviado por correo electrónico"
              },
              "de-DE": {
                singular: "Authentifizierungscode wurde gesendet"
              },
              "fr-FR": {
                singular: "Code d'authentification envoyé"
              },
              "ja-JP": {
                singular: "認証コードがEメールで送信されました"
              },
              "ko-KR": {
                singular: "인증 코드가 이메일로 전송되었습니다."
              },
              "pt-BR": {
                singular: "Código de autenticação enviado por e-mail"
              },
              "zh-CN": {
                singular: "验证码已通过电子邮件发送"
              }
            }
          }));
          if (_v0.hasOwnProperty("has_error_email_verification_required")) {
            _v28(!0), _v16((0, _v7.translate)({
              singular: "To finish signing up, follow the instructions we sent to: {EMAIL}",
              replacements: {
                EMAIL: _v0.email
              },
              dictionary: {
                es: {
                  singular: "Para terminar de registrarse, siga las instrucciones que le enviamos a: {EMAIL}"
                },
                "de-DE": {
                  singular: "Um die Registrierung abzuschließen, folgen Sie den Anweisungen, die wir an {EMAIL}gesendet haben."
                },
                "fr-FR": {
                  singular: "Pour finaliser votre inscription, suivez les instructions que nous vous avons envoyées à : {EMAIL}"
                },
                "ja-JP": {
                  singular: "登録を完了するには、次の宛先に送信された手順に従ってください：{EMAIL}"
                },
                "ko-KR": {
                  singular: "가입을 완료하려면 {EMAIL}(으)로 보내 드린 안내를 따르세요."
                },
                "pt-BR": {
                  singular: "Para finalizar o cadastro, siga as instruções que enviamos para: {EMAIL}"
                },
                "zh-CN": {
                  singular: "要完成注册，请按照我们发送给 {EMAIL} 的说明进行操作"
                }
              }
            }));
            return;
          }
          let _v2 = !1;
          for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0) && 0 === _v0.indexOf("has_error_invalid_otp")) {
            _v2 = !0;
            break;
          }
          _v2 && (_v0.hasOwnProperty("has_error_invalid_otp_email") ? _v22("email") : _v0.hasOwnProperty("has_error_invalid_otp_totp") ? _v22("totp") : _v0.hasOwnProperty("has_error_invalid_otp_risky") && _v22("risky"), _v37?.iris?.value && _v18(!0)), _v0.isOtp = _v2, _v20(_v2), _v0.hasOwnProperty("has_captcha_error") && (_v1 = (0, _v7.translate)({
            singular: "Unable to verify CAPTCHA. Please try again or visit the {A}Support Center{/A} for help.",
            replacements: {
              A: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "No se pudo verificar el CAPTCHA. Vuelva a intentarlo o visite el {A}Centro de asistencia{/A} para obtener ayuda."
              },
              "de-DE": {
                singular: "CAPTCHA kann nicht überprüft werden. Bitte versuchen Sie es erneut oder besuchen Sie das {A}Support Center{/A}, um Hilfe zu erhalten."
              },
              "fr-FR": {
                singular: "Impossible de vérifier le CAPTCHA. Veuillez réessayer ou accéder au {A}Centre d'assistance{/A} pour obtenir de l'aide."
              },
              "ja-JP": {
                singular: "CAPTCHAを確認できません。もう一度お試しになるか、 {A}サポートセンター{/A}にアクセスしてください。"
              },
              "ko-KR": {
                singular: "CAPTCHA를 확인할 수 없습니다. 다시 시도하거나 {A}지원 센터{/A}를 방문하여 도움을 받으세요."
              },
              "pt-BR": {
                singular: "Não foi possível verificar o CAPTCHA. Tente novamente ou visite o {A}Centro de suporte{/A} para obter ajuda."
              },
              "zh-CN": {
                singular: "无法验证 CAPTCHA。请重试或访问{A}支持中心{/A}寻求帮助。"
              }
            }
          }), _v20(!1), _v22(""), _v16(_v1));
        }
      },
      _v34 = (0, _v79.useForm)({
        validationSchema: _v116,
        initialValues: {
          email: _v2 || "",
          password: "",
          otp: "",
          isOtp: !1,
          enterpriseOptInAccepted: !1,
          turnstileToken: ""
        },
        onSubmit: _v0 => _v33(_v0)
      }),
      _v35 = (0, _v79.useField)(_v34, "email"),
      _v36 = (0, _v79.useField)(_v34, "password"),
      _v37 = (0, _v79.useField)(_v34, "otp"),
      _v38 = (0, _v79.useField)(_v34, "turnstileToken"),
      _v39 = (0, _v4.useRef)(null);
    (0, _v4.useEffect)(() => {
      if (_v14) return;
      let _v0 = requestAnimationFrame(() => _v39.current?.focus());
      return () => cancelAnimationFrame(_v0);
    }, [_v14]);
    let _v40 = _v0 => {
        _v35.iris.onChange(_v0), _v6 && _v6(_v0.target.value);
      },
      _v41 = {
        placeholder: _v9 ? _v9.email : (0, _v7.translate)({
          singular: "Email address",
          dictionary: {
            es: {
              singular: "Correo electrónico"
            },
            "de-DE": {
              singular: "E-Mail-Adresse"
            },
            "fr-FR": {
              singular: "Adresse e-mail"
            },
            "ja-JP": {
              singular: "メールアドレス"
            },
            "ko-KR": {
              singular: "이메일 주소"
            },
            "pt-BR": {
              singular: "Endereço de e-mail"
            },
            "zh-CN": {
              singular: "电子邮件地址"
            }
          }
        })
      },
      _v42 = {
        placeholder: _v9 ? _v9.password : (0, _v7.translate)({
          singular: "Password",
          dictionary: {
            es: {
              singular: "Contraseña"
            },
            "de-DE": {
              singular: "Kennwort"
            },
            "fr-FR": {
              singular: "Mot de passe "
            },
            "ja-JP": {
              singular: "パスワード"
            },
            "ko-KR": {
              singular: "비밀번호"
            },
            "pt-BR": {
              singular: "Senha"
            },
            "zh-CN": {
              singular: "密码"
            }
          }
        })
      };
    return (0, _v4.useEffect)(() => {
      _v13 && _v13(_v32), _v38?.handlers?.setValue(_v32), _v32 && "" !== _v32 && _v29 && (_v30(!1), _v16(null));
    }, [_v32, _v38?.handlers, _v13, _v29]), (0, _v2.jsxs)("form", {
      onSubmit: _v34.handleSubmit,
      noValidate: !0,
      children: [_v14 ? (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsxs)(_v93, {
          children: [(0, _v2.jsx)(_v92, {
            "data-testid": "site_login_email_input",
            id: "email_login",
            autoComplete: "email",
            isDisabled: _v3 || !!_v21,
            ..._v35.iris,
            onChange: _v40,
            marginBottom: "200"
          }), (0, _v2.jsx)(_v94, {
            htmlFor: "email_login",
            children: (0, _v7.translate)({
              singular: "Enter email",
              dictionary: {
                es: {
                  singular: "Escribir correo electrónico"
                },
                "de-DE": {
                  singular: "E-Mail-Adresse eingeben"
                },
                "fr-FR": {
                  singular: "Saisir une adresse e-mail"
                },
                "ja-JP": {
                  singular: "Eメールアドレスを入力"
                },
                "ko-KR": {
                  singular: "이메일 입력"
                },
                "pt-BR": {
                  singular: "Inserir e-mail"
                },
                "zh-CN": {
                  singular: "输入电子邮件"
                }
              }
            })
          })]
        }), (0, _v2.jsxs)(_v93, {
          children: [(0, _v2.jsx)(_v92, {
            "data-testid": "site_login_password_input",
            id: "password_login",
            type: "password",
            autoComplete: "current-password",
            isDisabled: !!_v21,
            ..._v36.iris
          }), (0, _v2.jsx)(_v94, {
            htmlFor: "password_login",
            children: (0, _v7.translate)({
              singular: "Enter password",
              dictionary: {
                es: {
                  singular: "Ingresar la contraseña"
                },
                "de-DE": {
                  singular: "Bitte Kennwort eingeben"
                },
                "fr-FR": {
                  singular: "Saisir mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを入力"
                },
                "ko-KR": {
                  singular: "비밀번호 입력"
                },
                "pt-BR": {
                  singular: "Digite a senha"
                },
                "zh-CN": {
                  singular: "输入密码"
                }
              }
            })
          })]
        })]
      }) : (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v111, {
          ..._v41,
          "aria-label": (0, _v7.translate)({
            singular: "Email",
            dictionary: {
              es: {
                singular: "Correo electrónico"
              },
              "de-DE": {
                singular: "E-Mail-Adresse"
              },
              "fr-FR": {
                singular: "E-mail"
              },
              "ja-JP": {
                singular: "E メール"
              },
              "ko-KR": {
                singular: "이메일"
              },
              "pt-BR": {
                singular: "E-mail"
              },
              "zh-CN": {
                singular: "电子邮件"
              }
            }
          }),
          autoComplete: "email",
          emailRef: _v39,
          "data-testid": "site_login_email_input",
          id: "email_login",
          status: _v15 ? "negative" : "neutral",
          disabled: _v3 || !!_v21,
          ..._v35.iris,
          onChange: _v40
        }), (0, _v2.jsx)(_v111, {
          "data-testid": "site_login_password_input",
          id: "password_login",
          ..._v42,
          "aria-label": (0, _v7.translate)({
            singular: "Password",
            dictionary: {
              es: {
                singular: "Contraseña"
              },
              "de-DE": {
                singular: "Kennwort"
              },
              "fr-FR": {
                singular: "Mot de passe "
              },
              "ja-JP": {
                singular: "パスワード"
              },
              "ko-KR": {
                singular: "비밀번호"
              },
              "pt-BR": {
                singular: "Senha"
              },
              "zh-CN": {
                singular: "密码"
              }
            }
          }),
          autoComplete: "current-password",
          type: "password",
          status: _v15 ? "negative" : "neutral",
          disabled: !!_v21,
          ..._v36.iris
        })]
      }), _v14 ? null : (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v10.Link, {
          format: "primary",
          href: "/forgot_password",
          variant: "minimal",
          target: _v7,
          onClick: () => (0, _v13.trackForgotPasswordClick)(_v12, _v1),
          children: (0, _v2.jsx)(_v119, {
            size: "2",
            className: _v10,
            children: (0, _v7.translate)({
              singular: "Forgot your password?",
              dictionary: {
                es: {
                  singular: "¿Olvidó su contraseña?"
                },
                "de-DE": {
                  singular: "Kennwort vergessen?"
                },
                "fr-FR": {
                  singular: "Vous avez oublié votre mot de passe ?"
                },
                "ja-JP": {
                  singular: "パスワードをお忘れですか？"
                },
                "ko-KR": {
                  singular: "비밀번호를 잊으셨나요?"
                },
                "pt-BR": {
                  singular: "Esqueceu sua senha?"
                },
                "zh-CN": {
                  singular: "忘记密码？"
                }
              }
            })
          })
        })
      }), _v8 ? (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v117, {
          children: (0, _v2.jsx)(_v8.Checkbox, {
            checked: _v23,
            onChange: () => {
              _v24(!_v23);
            },
            id: "enterprise-opt-in-consent",
            name: "enterprise-opt-in-consent",
            label: (0, _v2.jsx)(_v9.Paragraph, {
              size: "3",
              children: (0, _v7.translate)({
                singular: "By signing into a Vimeo Enterprise account, I agree and understand that the Vimeo Enterprise account owner will administer my account and have access to my account information, including viewing activity. To withdraw from ongoing disclosures of your viewing activity to the account owner, contact your administrator.",
                dictionary: {
                  es: {
                    singular: "Al iniciar sesión en una cuenta de Vimeo Enterprise, acepto y entiendo que el propietario de la cuenta de Vimeo Enterprise administrará mi cuenta y tendrá acceso a la información de mi cuenta, incluida la actividad de visualización. Para dejar de compartir automáticamente su actividad de visualización con su propietario de la cuenta, contacte a su administrador."
                  },
                  "de-DE": {
                    singular: "Mit der Anmeldung bei einem Vimeo Enterprise-Konto erkläre ich mich damit einverstanden, dass der Inhaber dieses Vimeo Enterprise-Kontos mein Konto verwaltet und Zugang zu meinen Kontoinformationen hat, einschließlich Informationen zu den von mir angesehenen Inhalten. Wenn du nicht möchtest, dass der Kontoinhaber zukünftig Einsicht in die von dir angesehenen Inhalte hat, wende dich bitte an deinen Administrator."
                  },
                  "fr-FR": {
                    singular: "En me connectant à un compte Vimeo Entreprise, je comprends et j'accepte que le propriétaire du compte Vimeo Entreprise gèrera et aura accès aux informations de mon compte, y compris à mon activité de visionnage. Veuillez contacter votre administrateur pour demander à ce que votre activité de visionnage ne soit plus divulguée au propriétaire du compte."
                  },
                  "ja-JP": {
                    singular: "VimeoのEnterpriseアカウントにサインインすることによって、私は、このEnterpriseのアカウント所有者が私のアカウントを管理すること、および閲覧アクティビティを含む私のアカウント情報にアクセスできることを理解し、これらに同意します。アカウント所有者による閲覧アクティビティへのアクセスを停止したい場合は、所属する組織の管理者に連絡してください。"
                  },
                  "ko-KR": {
                    singular: "Vimeo Enterprise 계정에 로그인함으로써 본인은 Vimeo Enterprise 계정 소유자가 내 계정을 관리하고 보기 활동을 포함한 내 계정 정보에 액세스할 수 있음에 동의하고 이를 이해합니다. 더 이상 보기 활동을 계정 소유자에게 공개하고 싶지 않을 경우 관리자에게 문의하세요."
                  },
                  "pt-BR": {
                    singular: "Ao entrar na conta do Vimeo Enterprise, eu concordo e entendo que o proprietário da conta do Vimeo Enterprise administrará minha conta e terá acesso às informações da minha conta, incluindo a atividade de visualização. Para remover as divulgações contínuas da sua atividade de visualização ao proprietário da conta, entre em contato com o administrador."
                  },
                  "zh-CN": {
                    singular: "登录 Vimeo Enterprise 帐户，即表示我同意并理解 Vimeo Enterprise 帐户所有者将管理我的帐户并有权访问我的帐户信息，包括查看活动。如不想再向帐户所有者持续披露您的查看活动，请联系您的管理员。"
                  }
                }
              })
            })
          })
        })
      }) : null, "email" === _v21 && (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v103.Notice, {
          format: "primary",
          children: (0, _v2.jsx)(_v9.Paragraph, {
            size: "3",
            children: (0, _v7.translate)({
              singular: "A security code has been sent to your email address",
              dictionary: {
                es: {
                  singular: "Se envió un código de seguridad a tu dirección de correo electrónico."
                },
                "de-DE": {
                  singular: "Eine E-Mail mit einem Sicherheitscode wurde an deine E-Mail-Adresse gesendet."
                },
                "fr-FR": {
                  singular: "Un code de sécurité vous a été envoyé à votre adresse e-mail"
                },
                "ja-JP": {
                  singular: "メールアドレスにセキュリティコードが送信されました"
                },
                "ko-KR": {
                  singular: "보안 코드가 이메일 주소로 전송되었습니다."
                },
                "pt-BR": {
                  singular: "Um código de segurança foi enviado para o seu endereço de e-mail"
                },
                "zh-CN": {
                  singular: "安全代码已发送至您的电子邮箱"
                }
              }
            })
          })
        })
      }), "totp" === _v21 && (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v103.Notice, {
          format: "primary",
          children: (0, _v2.jsx)(_v9.Paragraph, {
            size: "3",
            children: (0, _v7.translate)({
              singular: "Please enter the code from the authenticator app you configured when setting up Two-Factor authentication (2FA).",
              dictionary: {
                es: {
                  singular: "Ingresa el código de la aplicación de autenticación que configuraste al establecer la autenticación de dos factores (2FA)."
                },
                "de-DE": {
                  singular: "Bitte gib den Code aus der Authenticator-App ein, den du beim Erstellen der Zwei-Faktor-Authentifizierung (2FA) konfiguriert hast."
                },
                "fr-FR": {
                  singular: "Veuillez saisir le code de l'application d'authentification que vous avez configurée lorsque vous avez paramétré l'authentification à deux facteurs (2FA)."
                },
                "ja-JP": {
                  singular: "二段階認証（2FA）を設定する際に構成した、Authenticatorアプリのコードを入力してください。"
                },
                "ko-KR": {
                  singular: "2단계 인증(2FA)을 설정할 때 구성한 인증 앱의 코드를 입력하세요."
                },
                "pt-BR": {
                  singular: "Por favor, insira o código do Aplicativo de Autenticação que você definiu ao configurar a autenticação de dois fatores (2FA)."
                },
                "zh-CN": {
                  singular: "请输入您在设置双因素身份验证 (2FA) 时配置的身份验证器应用程序中的代码。"
                }
              }
            })
          })
        })
      }), "risky_otp" === _v21 && (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v103.Notice, {
          format: "primary",
          children: (0, _v2.jsx)(_v9.Paragraph, {
            size: "3",
            children: (0, _v7.translate)({
              singular: "As an added security measure, we've sent a 6-digit passcode to your email address. Please enter it below. {A}Need help?{/A}",
              replacements: {
                A: _v0 => (0, _v2.jsx)("a", {
                  href: "https://vimeo.com/help/contact?category=cf_account&subcategory=cf_risky_2fa_challenge",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Como una medida de seguridad adicional, hemos enviado un código de acceso de 6 dígitos a tu dirección de correo electrónico. Ingrésalo a continuación. {A}¿Necesitas ayuda?{/A}"
                },
                "de-DE": {
                  singular: "Als zusätzliche Sicherheitsmaßnahme haben wir einen 6-stelligen Passcode an deine E-Mail-Adresse geschickt. Bitte gib ihn unten ein. {A}Brauchst du Hilfe?{/A}"
                },
                "fr-FR": {
                  singular: "Comme mesure de sécurité supplémentaire, nous avons envoyé un code à 6 chiffres à votre adresse e-mail. Veuillez le saisir ci-dessous. {A}Besoin d'aide ?{/A}"
                },
                "ja-JP": {
                  singular: "追加のセキュリティ対策として、6桁のパスコードをお客様のメールアドレスに送信しました。下に入力してください。{A}お困りですか？{/A}"
                },
                "ko-KR": {
                  singular: "추가 보안 조치로 회원님의 이메일 주소로 비밀번호 6자리를 전송했습니다. 비밀번호를 아래에 입력하세요. {A}도움이 필요하신가요?{/A}"
                },
                "pt-BR": {
                  singular: "Como medida de segurança adicional, enviamos uma senha de seis dígitos para seu endereço de e-mail. Insira a senha abaixo. {A}Precisa de ajuda? {/A}"
                },
                "zh-CN": {
                  singular: "我们向您的电子邮件地址发送了一个 6 位数的密码，作为额外的安全措施。请在下面输入该密码。{A}需要帮助吗？{/A}"
                }
              }
            })
          })
        })
      }), _v15 && (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v103.Notice, {
          format: _v27 ? "primary" : "negative",
          children: (0, _v2.jsx)(_v9.Paragraph, {
            size: "3",
            children: (0, _v7.translate)({
              singular: "{ERROR}",
              replacements: {
                ERROR: _v15
              }
            })
          })
        })
      }), (0, _v2.jsx)(_v70.Box, {
        as: "section",
        mx: "auto",
        my: (0, _v3.rem)(10),
        display: _v25 ? "block" : "none",
        children: (0, _v2.jsx)("div", {
          id: "turnstile-container"
        })
      }), _v19 && (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v111, {
          ..._v37.iris,
          id: "otp",
          placeholder: (0, _v7.translate)({
            singular: "Security code",
            dictionary: {
              es: {
                singular: "Código de seguridad"
              },
              "de-DE": {
                singular: "Sicherheitscode"
              },
              "fr-FR": {
                singular: "Code de sécurité"
              },
              "ja-JP": {
                singular: "セキュリティコード"
              },
              "ko-KR": {
                singular: "보안 코드"
              },
              "pt-BR": {
                singular: "Código de segurança"
              },
              "zh-CN": {
                singular: "安全码"
              }
            }
          }),
          type: "text",
          status: _v15 ? "negative" : "neutral",
          onChange: _v0 => {
            _v17 && _v18(!1), _v37.iris.onChange(_v0);
          }
        }), (0, _v2.jsx)(_v104, {
          children: (0, _v2.jsx)(_v120, {
            onClick: () => {
              _v33({
                email: _v35.iris.value,
                password: _v36.iris.value,
                otp: _v37.iris.value,
                isOtp: !0
              }, !0);
            },
            children: (0, _v7.translate)({
              singular: "Email me a new code",
              dictionary: {
                es: {
                  singular: "Recibir un nuevo código por correo electrónico"
                },
                "de-DE": {
                  singular: "Neuen Code per E-Mail senden"
                },
                "fr-FR": {
                  singular: "Envoyez-moi un nouveau code par e-mail"
                },
                "ja-JP": {
                  singular: "新しいコードをEメールする"
                },
                "ko-KR": {
                  singular: "새 코드 전송하기"
                },
                "pt-BR": {
                  singular: "Me envie um email com o novo código"
                },
                "zh-CN": {
                  singular: "通过电子邮件向我发送新代码"
                }
              }
            })
          })
        })]
      }), _v17 && (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v103.Notice, {
          format: "negative",
          children: (0, _v2.jsx)(_v9.Paragraph, {
            size: "3",
            children: (0, _v7.translate)({
              singular: "Security Code entered is incorrect",
              dictionary: {
                es: {
                  singular: "El código de seguridad ingresado es incorrecto."
                },
                "de-DE": {
                  singular: "Der angegebene Geheimcode ist ungültig."
                },
                "fr-FR": {
                  singular: "Le code de sécurité saisi est incorrect"
                },
                "ja-JP": {
                  singular: "入力したセキュリティコードが正しくありません"
                },
                "ko-KR": {
                  singular: "입력한 보안 코드가 올바르지 않습니다."
                },
                "pt-BR": {
                  singular: "O Código de Segurança inserido está incorreto"
                },
                "zh-CN": {
                  singular: "输入的安全码不正确"
                }
              }
            })
          })
        })
      }), (0, _v2.jsx)(_v104, {
        children: (0, _v2.jsx)(_v105, {
          "data-testid": "site_login_submit_button",
          disabled: !_v34.valid || _v8 && !_v23 || _v29,
          loading: _v34.submitting,
          onClick: () => {
            (0, _v13.trackLogin)("password", _v4), (0, _v13.trackLoginWithEmailClick)(_v12, _v1);
          },
          className: _v10,
          children: _v11
        })
      })]
    });
  }
  let _v119 = (0, _v5.default)(_v9.Paragraph).withConfig({
      displayName: "LoginEmailForm__ParagraphLink",
      componentId: "sc-2baaa43d-1"
    })`
  color: var(--vimeo-colors-text-secondary);
  &.f2pPilotRegLogin {
    text-decoration: underline;
    color: var(--vimeo-colors-text-primary);
  }
  &:hover {
    text-decoration: underline;
  }
`,
    _v120 = _v5.default.div.withConfig({
      displayName: "LoginEmailForm__EmailOtp",
      componentId: "sc-2baaa43d-2"
    })`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
  display: block;
  text-decoration: none;
`,
    _v121 = _v5.default.div.withConfig({
      displayName: "MarketingCheckbox__CheckboxContainer",
      componentId: "sc-e13ca9de-0"
    })`
  margin-top: ${(0, _v3.rem)(8)};
`,
    _v122 = _v5.default.section.withConfig({
      displayName: "MarketingCheckbox__FormSection",
      componentId: "sc-e13ca9de-1"
    })`
  margin-top: ${(0, _v3.rem)(10)};
  display: flex;
  flex-direction: column;
`,
    _v123 = ({
      hideHorizontalRule: _v0,
      marketingOptIn: _v1,
      marketingOptInHandler: _v2,
      isSimplifiedSite: _v3,
      isFullScreen: _v4 = !1
    }) => (0, _v2.jsxs)(_v122, {
      children: [_v4 ? (0, _v2.jsx)(_v95.Checkbox, {
        size: "md",
        isChecked: _v1,
        onChange: _v2,
        id: "marketing_opt_in",
        children: (0, _v2.jsx)(_v74.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v3 ? (0, _v7.translate)({
            singular: "I agree to receive newsletters, product updates, and exclusive offers from VideoJi.",
            dictionary: {
              es: {
                singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de VideoJi"
              },
              "de-DE": {
                singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von VideoJi zu erhalten."
              },
              "fr-FR": {
                singular: "J'accepte de recevoir des newsletters, des mises à jour sur les produits et des offres exclusives de la part de VideoJi."
              },
              "ja-JP": {
                singular: "VideoJiからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
              },
              "ko-KR": {
                singular: "VideoJi의 뉴스레터, 제품 업데이트 및 특별 혜택 수신에 동의합니다."
              },
              "pt-BR": {
                singular: "Concordo em receber newsletters, atualizações de produtos e ofertas exclusivas do VideoJi."
              },
              "zh-CN": {
                singular: "我同意接收来自 VideoJi 的时事通讯、产品新资讯和独家优惠。"
              }
            }
          }) : (0, _v7.translate)({
            singular: "I agree to receive newsletters, updates, and offers",
            dictionary: {
              es: {
                singular: "Acepto recibir boletines, actualizaciones y ofertas"
              },
              "de-DE": {
                singular: "Ich bin damit einverstanden, Newsletter, Updates und Angebote zu erhalten"
              },
              "fr-FR": {
                singular: "J'accepte de recevoir des newsletters, des offres et des mises à jour."
              },
              "ja-JP": {
                singular: "ニュースレター、最新情報、オファーを受信することに同意します"
              },
              "ko-KR": {
                singular: "뉴스레터, 업데이트 및 제안을 수신하는 데 동의합니다."
              },
              "pt-BR": {
                singular: "Concordo em receber newsletters, atualizações e ofertas"
              },
              "zh-CN": {
                singular: "我同意接收时事通讯、更新和优惠信息"
              }
            }
          })
        })
      }) : (0, _v2.jsx)(_v121, {
        className: "marketing-opt-in-checkbox",
        children: (0, _v2.jsx)(_v8.Checkbox, {
          checked: _v1,
          onChange: _v2,
          id: "marketing_opt_in",
          label: (0, _v2.jsx)(_v9.Paragraph, {
            size: "3",
            children: _v3 ? (0, _v7.translate)({
              singular: "I agree to receive newsletters, product updates, and exclusive offers from VideoJi.",
              dictionary: {
                es: {
                  singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de VideoJi"
                },
                "de-DE": {
                  singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von VideoJi zu erhalten."
                },
                "fr-FR": {
                  singular: "J'accepte de recevoir des newsletters, des mises à jour sur les produits et des offres exclusives de la part de VideoJi."
                },
                "ja-JP": {
                  singular: "VideoJiからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
                },
                "ko-KR": {
                  singular: "VideoJi의 뉴스레터, 제품 업데이트 및 특별 혜택 수신에 동의합니다."
                },
                "pt-BR": {
                  singular: "Concordo em receber newsletters, atualizações de produtos e ofertas exclusivas do VideoJi."
                },
                "zh-CN": {
                  singular: "我同意接收来自 VideoJi 的时事通讯、产品新资讯和独家优惠。"
                }
              }
            }) : (0, _v7.translate)({
              singular: "I agree to receive newsletters, product updates, and exclusive offers from Vimeo.",
              dictionary: {
                es: {
                  singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de Vimeo."
                },
                "de-DE": {
                  singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von Vimeo zu erhalten."
                },
                "fr-FR": {
                  singular: "J'accepte de recevoir des newsletters, des nouveautés produit et des offres exclusives de Vimeo."
                },
                "ja-JP": {
                  singular: "Vimeoからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
                },
                "ko-KR": {
                  singular: "Vimeo로부터 뉴스레터, 제품 업데이트, 특별 제안을 받는 데 동의합니다."
                },
                "pt-BR": {
                  singular: "Concordo em receber boletins informativos, atualizações de produto e ofertas exclusivas do Vimeo."
                },
                "zh-CN": {
                  singular: "我同意接收来自 Vimeo 的时事通讯、产品新资讯和独家优惠。"
                }
              }
            })
          })
        })
      }), !_v0 && (0, _v2.jsx)(_v108, {})]
    });
  _v0.s(["default", 0, _v123], 0);
  var _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0);
  function _v127({
    xsrft: _v0,
    action: _v1,
    children: _v2,
    optIn: _v3,
    redirectUrl: _v4,
    redirectUrlAfterSocialLogin: _v5,
    redirectUrlAfterSocialJoin: _v6,
    onClick: _v7,
    onSubmit: _v8,
    className: _v9,
    turnstileToken: _v10,
    target: _v11 = "_self"
  }) {
    let _v12 = {
      id: "apple_form",
      method: "POST",
      action: "join" === _v1 ? "/join" : "/log_in",
      noValidate: !0,
      onSubmit: _v8,
      target: _v11
    };
    return "_blank" === _v11 && (_v12.rel = "opener"), (0, _v2.jsxs)("form", {
      ..._v12,
      children: [(0, _v2.jsx)("input", {
        type: "hidden",
        name: "service",
        value: "apple"
      }), (0, _v2.jsx)("input", {
        type: "hidden",
        name: "action",
        value: _v1
      }), (0, _v2.jsx)("input", {
        type: "hidden",
        name: "token",
        value: _v0
      }), null !== _v10 && (0, _v2.jsx)("input", {
        type: "hidden",
        name: "cf-turnstile-response",
        value: `${_v10}`
      }), _v4 && (0, _v2.jsx)("input", {
        type: "hidden",
        name: "redirect",
        value: _v4
      }), _v5 && "undefined" !== _v5 && (0, _v2.jsx)("input", {
        type: "hidden",
        name: "redirect_url_after_social_login",
        value: _v5
      }), _v6 && "undefined" !== _v6 && (0, _v2.jsx)("input", {
        type: "hidden",
        name: "redirect_url_after_social_join",
        value: _v6
      }), null !== _v3 && (0, _v2.jsx)("input", {
        type: "hidden",
        name: "marketing_opt_in",
        value: `${_v3}`
      }), (0, _v2.jsx)(_v126.SocialButton, {
        className: _v9,
        icon: (0, _v2.jsx)(_v126.AppleIcon, {}),
        format: "secondary",
        onClick: () => _v7?.(),
        children: _v2
      })]
    });
  }
  _v0.s(["AppleForm", 0, _v127], 0);
  var _v128 = ((_v1 = _v128 || {}).control = "control", _v1.variant = "variant", _v1);
  let _v129 = _v5.default.section.withConfig({
      displayName: "forms__FormSection",
      componentId: "sc-3c307515-0"
    })`
  margin-top: ${(0, _v3.rem)(12)};
  display: flex;
  flex-direction: column;
`,
    _v130 = (0, _v5.default)(_v9.Paragraph).withConfig({
      displayName: "forms__Paragraph",
      componentId: "sc-3c307515-1"
    })`
  margin-left: 50%; /*for ie11*/
  margin: auto;
  text-align: center;
  ${_v0 => _v0.faded && _v5.css`
      color: var(--vimeo-colors-text-tertiary);
    `}
  ${_v0 => _v0.addBottomMargin && _v5.css`
      margin-bottom: ${(0, _v3.rem)(8)};
    `}
`,
    _v131 = _v5.default.div.withConfig({
      displayName: "forms__CheckboxContainer",
      componentId: "sc-3c307515-2"
    })`
  margin-top: ${(0, _v3.rem)(8)};
`,
    _v132 = (0, _v5.default)(_v129).withConfig({
      displayName: "forms__FacebookConnectFormSection",
      componentId: "sc-3c307515-3"
    })`
  margin: ${(0, _v3.rem)(35)} 0 ${(0, _v3.rem)(41)} 0;
`,
    _v133 = (0, _v5.default)(_v10.Link).withConfig({
      displayName: "forms__TermsLink",
      componentId: "sc-3c307515-4"
    })`
  text-decoration: underline;
`,
    _v134 = _v5.default.button.withConfig({
      displayName: "forms__LinkText",
      componentId: "sc-3c307515-5"
    })`
  color: var(--vimeo-colors-status-info-primary);
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  font-size: ${(0, _v3.rem)(14)};
`;
  _v0.s(["ConnectToFbForm", 0, function ({
    onSuccess: _v0,
    switchType: _v1,
    xsrft: _v2,
    redirectUrl: _v3,
    shouldOptIntoMarketing: _v4 = !1,
    target: _v5
  }) {
    let [_v6, _v7] = (0, _v4.useState)(_v4),
      _v8 = (0, _v4.useContext)(_v12.ViewerContext);
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [_v1 && (0, _v2.jsxs)(_v130, {
        size: "1",
        faded: !0,
        addBottomMargin: !0,
        children: [(0, _v7.translate)({
          singular: "Already have an account?",
          dictionary: {
            es: {
              singular: "¿Ya tiene una cuenta?"
            },
            "de-DE": {
              singular: "Hast du schon ein Konto?"
            },
            "fr-FR": {
              singular: "Vous avez déjà un compte ?"
            },
            "ja-JP": {
              singular: "すでにアカウントをお持ちですか？"
            },
            "ko-KR": {
              singular: "이미 계정이 있나요?"
            },
            "pt-BR": {
              singular: "Já tem uma conta?"
            },
            "zh-CN": {
              singular: "已有帐户？"
            }
          }
        }), " ", (0, _v2.jsx)(_v10.Link, {
          onClick: _v1,
          element: "span",
          variant: "minimal",
          children: (0, _v7.translate)({
            singular: "Log in",
            dictionary: {
              es: {
                singular: "Iniciar sesión"
              },
              "de-DE": {
                singular: "Anmelden"
              },
              "fr-FR": {
                singular: "Se connecter"
              },
              "ja-JP": {
                singular: "ログイン"
              },
              "ko-KR": {
                singular: "로그인"
              },
              "pt-BR": {
                singular: "Entrar"
              },
              "zh-CN": {
                singular: "登录"
              }
            }
          })
        })]
      }), (0, _v2.jsx)(_v132, {
        children: (0, _v2.jsx)(_v124.FacebookForm, {
          xsrft: _v2,
          action: "join",
          optIn: null,
          onClick: () => {
            _v6.BigPictureClient.sendEvent(new _v6.Event("click_to_signup_via_fb", 3, {
              product: "Vimeo Create",
              cta: "continue_with_facebook",
              path: window.location.pathname,
              location: "signup",
              device_id: _v8?.vuid || null,
              lang: _v8?.locale || null,
              platform: window.navigator.platform,
              user_id: _v8?.user?.id.toString() || null,
              session_id: null,
              client_timestamp: null,
              client_ver: null,
              clients_session_start_ts: null,
              debug_mode: null,
              in_background: null,
              is_guest: null,
              flow: null,
              user_package_type: null
            }));
          },
          redirectUrl: _v3,
          target: _v5,
          children: (0, _v7.translate)({
            singular: "Continue with Facebook",
            dictionary: {
              es: {
                singular: "Continuar con Facebook"
              },
              "de-DE": {
                singular: "Weiter mit Facebook"
              },
              "fr-FR": {
                singular: "Continuer avec Facebook"
              },
              "ja-JP": {
                singular: "Facebookで続ける"
              },
              "ko-KR": {
                singular: "Facebook으로 계속하기"
              },
              "pt-BR": {
                singular: "Continuar com o Facebook"
              },
              "zh-CN": {
                singular: "使用 Facebook 继续"
              }
            }
          })
        })
      }), (0, _v2.jsxs)(_v129, {
        children: [(0, _v2.jsx)(_v131, {
          children: (0, _v2.jsx)(_v8.Checkbox, {
            checked: _v6,
            onChange: () => {
              _v7(!_v6);
            },
            id: "marketing_opt_in",
            label: (0, _v2.jsx)(_v130, {
              size: "3",
              children: (0, _v7.translate)({
                singular: "I agree to receive newsletters, product updates, and exclusive offers from Vimeo.",
                dictionary: {
                  es: {
                    singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de Vimeo."
                  },
                  "de-DE": {
                    singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von Vimeo zu erhalten."
                  },
                  "fr-FR": {
                    singular: "J'accepte de recevoir des newsletters, des nouveautés produit et des offres exclusives de Vimeo."
                  },
                  "ja-JP": {
                    singular: "Vimeoからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
                  },
                  "ko-KR": {
                    singular: "Vimeo로부터 뉴스레터, 제품 업데이트, 특별 제안을 받는 데 동의합니다."
                  },
                  "pt-BR": {
                    singular: "Concordo em receber boletins informativos, atualizações de produto e ofertas exclusivas do Vimeo."
                  },
                  "zh-CN": {
                    singular: "我同意接收来自 Vimeo 的时事通讯、产品新资讯和独家优惠。"
                  }
                }
              })
            })
          })
        }), (0, _v2.jsx)(_v108, {})]
      }), (0, _v2.jsx)(_v129, {
        children: (0, _v2.jsx)(_v130, {
          size: "3",
          children: (0, _v7.translate)({
            singular: "By joining Vimeo, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK} and {COOKIE_LINK}Cookie Policy{/COOKIE_LINK}.",
            replacements: {
              TERMS_LINK: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "/terms",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }, "terms"),
              PRIVACY_LINK: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "/privacy",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }, "privacy"),
              COOKIE_LINK: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "/cookie_policy",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }, "cookie")
            },
            dictionary: {
              es: {
                singular: "Al registrarse en Vimeo, acepta nuestros {TERMS_LINK}Términos y condiciones{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK} y nuestra {COOKIE_LINK}Política de cookies{/COOKIE_LINK}."
              },
              "de-DE": {
                singular: "Wenn du dich bei Vimeo registrierst, stimmst du unseren{TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, {PRIVACY_LINK} Datenschutzrichtlinien{/PRIVACY_LINK} und {COOKIE_LINK}Cookie-Richtlinien zu.{/COOKIE_LINK}"
              },
              "fr-FR": {
                singular: "En vous inscrivant sur Vimeo, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} et notre {COOKIE_LINK}politique concernant les cookies{/COOKIE_LINK}."
              },
              "ja-JP": {
                singular: "Vimeoにご登録いただくと、{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、{COOKIE_LINK}Cookieポリシー{/COOKIE_LINK}に同意したものとみなされます。"
              },
              "ko-KR": {
                singular: "Vimeo에 가입함으로써 {TERMS_LINK}서비스 약관{/TERMS_LINK} 및 {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK}, {COOKIE_LINK}쿠키 정책{/COOKIE_LINK}에 동의하게 됩니다."
              },
              "pt-BR": {
                singular: "Ao se cadastrar no Vimeo, você concorda com os {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, com a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e com a {COOKIE_LINK}Política de Cookie do Vimeo.{/COOKIE_LINK}"
              },
              "zh-CN": {
                singular: "加入 Vimeo，即表示您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}、{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}和 {COOKIE_LINK}Cookie 政策{/COOKIE_LINK}。"
              }
            }
          })
        })
      })]
    });
  }, "JoinForm", 0, function ({
    email: _v0,
    fa: _v1,
    name: _v2,
    onSuccess: _v3,
    redirectUrl: _v4,
    shouldOptIntoMarketing: _v5 = !1,
    switchType: _v6,
    xsrft: _v7,
    onEmailChange: _v8,
    redirectUrlAfterSocialLogin: _v9 = "",
    redirectUrlAfterSocialJoin: _v10 = "",
    disableEmail: _v11 = !1,
    socialSubmitBtn: _v12,
    onSocialLoginSubmit: _v13,
    onSocialLoginClick: _v14,
    target: _v15,
    termsAndConditions: _v16,
    disclaimer: _v17,
    onSSOFlowChoice: _v18,
    placeholder: _v19,
    hasF2PVariant: _v20,
    isFullScreen: _v21
  }) {
    let [_v22, _v23] = (0, _v4.useState)(_v5),
      _v24 = () => {
        _v23(!_v22), (0, _v13.trackMarketingTermCheckbox)(!_v22, !1);
      },
      _v25 = _v14 ?? _v13.trackRegistration;
    _v16 = _v16 || (0, _v7.translate)({
      singular: "By joining Vimeo, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK} and {COOKIE_LINK}Cookie Policy{/COOKIE_LINK}.",
      replacements: {
        TERMS_LINK: _v0 => (0, _v2.jsx)(_v133, {
          href: "/terms",
          target: "_blank",
          variant: "minimal",
          format: "soft",
          children: _v0
        }, "terms"),
        PRIVACY_LINK: _v0 => (0, _v2.jsx)(_v133, {
          href: "/privacy",
          target: "_blank",
          variant: "minimal",
          format: "soft",
          children: _v0
        }, "privacy"),
        COOKIE_LINK: _v0 => (0, _v2.jsx)(_v133, {
          href: "/cookie_policy",
          target: "_blank",
          variant: "minimal",
          format: "soft",
          children: _v0
        }, "cookie")
      },
      dictionary: {
        es: {
          singular: "Al registrarse en Vimeo, acepta nuestros {TERMS_LINK}Términos y condiciones{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK} y nuestra {COOKIE_LINK}Política de cookies{/COOKIE_LINK}."
        },
        "de-DE": {
          singular: "Wenn du dich bei Vimeo registrierst, stimmst du unseren{TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, {PRIVACY_LINK} Datenschutzrichtlinien{/PRIVACY_LINK} und {COOKIE_LINK}Cookie-Richtlinien zu.{/COOKIE_LINK}"
        },
        "fr-FR": {
          singular: "En vous inscrivant sur Vimeo, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} et notre {COOKIE_LINK}politique concernant les cookies{/COOKIE_LINK}."
        },
        "ja-JP": {
          singular: "Vimeoにご登録いただくと、{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、{COOKIE_LINK}Cookieポリシー{/COOKIE_LINK}に同意したものとみなされます。"
        },
        "ko-KR": {
          singular: "Vimeo에 가입함으로써 {TERMS_LINK}서비스 약관{/TERMS_LINK} 및 {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK}, {COOKIE_LINK}쿠키 정책{/COOKIE_LINK}에 동의하게 됩니다."
        },
        "pt-BR": {
          singular: "Ao se cadastrar no Vimeo, você concorda com os {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, com a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e com a {COOKIE_LINK}Política de Cookie do Vimeo.{/COOKIE_LINK}"
        },
        "zh-CN": {
          singular: "加入 Vimeo，即表示您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}、{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}和 {COOKIE_LINK}Cookie 政策{/COOKIE_LINK}。"
        }
      }
    });
    let [_v26, _v27] = (0, _v4.useState)(!1),
      [_v28, _v29] = (0, _v4.useState)(void 0),
      {
        turnstileToken: _v30
      } = (0, _v11.useTurnstile)(!1, "turnstile-container", {
        errorCb: _v0 => {
          "script_load_error" === _v0 || "script_timeout" === _v0 ? _v29((0, _v7.translate)({
            singular: "We're having trouble verifying your browser. This is usually caused by an ad blocker or privacy extension. Try disabling it and {B}refreshing the page{/B}, or {A}contact support{/A}.",
            replacements: {
              A: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                variant: "minimal",
                children: _v0
              }),
              B: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "#",
                variant: "minimal",
                onClick: _v0 => {
                  _v0.preventDefault(), window.location.reload();
                },
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Tenemos problemas para verificar su navegador. Esto suele ser causado por un bloqueador de anuncios o por una extensión de privacidad. Intente desactivarlo y {B}actualizar la página{/B}, o {A}póngase en contacto con el soporte{/A}."
              },
              "de-DE": {
                singular: "Wir haben Schwierigkeiten, Ihren Browser zu verifizieren. Dies wird normalerweise durch einen Adblocker oder eine Datenschutz-Erweiterung verursacht. Versuchen Sie, den Adblocker bzw. die Datenschutz-Erweiterung zu deaktivieren und {B}die Seite neu zu laden{/B}, oder {A}kontaktieren Sie den Support{/A}."
              },
              "fr-FR": {
                singular: "Nous rencontrons des difficultés pour vérifier votre navigateur. Cela est généralement causé par un bloqueur de publicités ou une extension de confidentialité. Essayez de le désactiver et {B}de rafraîchir la page{/B}, ou {A}contacter le support{/A}."
              },
              "ja-JP": {
                singular: "ブラウザの確認に問題が発生しています。これは通常、広告ブロッカーやプライバシー関連の拡張機能が原因です。それらを無効にして{B}ページを再読み込みする{/B}か、{A}サポートにお問い合わせください{/A}。"
              },
              "ko-KR": {
                singular: "브라우저를 확인하는 데 문제가 발생했습니다. 이는 일반적으로 광고 차단기나 개인정보 보호 확장 프로그램으로 인해 발생합니다. 해당 확장 프로그램을 비활성화한 다음 {B}페이지를 새로 고침{/B}하거나 {A}지원팀에 문의{/A}."
              },
              "pt-BR": {
                singular: "Estamos com dificuldades para verificar seu navegador. Isso geralmente é causado por um bloqueador de anúncios ou por uma extensão de privacidade. Tente desativar o bloqueador ou a extensão e {B}atualizar a página{/B}, ou {A}entre em contato com o suporte{/A}."
              },
              "zh-CN": {
                singular: "我们在验证您的浏览器时遇到问题。这通常是由广告拦截器或隐私扩展引起的。请尝试禁用它并{B}刷新页面{/B}，或 {A}联系支持{/A}。"
              }
            }
          })) : (_v27(!0), _v29((0, _v7.translate)({
            singular: "Whoops! We are having some technical difficulties. To continue, contact our {A}support team{/A}.",
            replacements: {
              A: _v0 => (0, _v2.jsx)(_v10.Link, {
                href: "https://vimeo.com/help/contact",
                target: "_blank",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "¡Uy! Estamos teniendo algunas dificultades técnicas. Para continuar, póngase en contacto con nuestro {A}equipo de asistencia{/A}."
              },
              "de-DE": {
                singular: "Hoppla! Wir haben einige technische Schwierigkeiten. Um fortzufahren, kontaktieren Sie unser {A}Support-Team{/A}."
              },
              "fr-FR": {
                singular: "Oups ! Nous rencontrons des difficultés techniques. Pour continuer, contactez notre {A}équipe d'assistance{/A}."
              },
              "ja-JP": {
                singular: "申し訳ありません。現在、技術的な問題が発生しています。続行するには、 {A}サポートチーム{/A}までお問い合わせください。"
              },
              "ko-KR": {
                singular: "이런! 현재 기술적인 문제가 발생했습니다. 계속하려면 {A}지원팀{/A}에 문의하세요."
              },
              "pt-BR": {
                singular: "Opa! Estamos com algumas dificuldades técnicas. Para continuar, entre em contato com nossa {A}equipe de suporte{/A}."
              },
              "zh-CN": {
                singular: "抱歉！我们遇到了一些技术困难。如需继续，请联系我们的{A}支持团队{/A}。"
              }
            }
          })));
        },
        beforeInteractiveCb: () => _v27(!0)
      });
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v129, {
        children: (0, _v2.jsx)(_v112, {
          xsrft: _v7,
          redirectUrl: _v4,
          optIn: _v22,
          name: _v2,
          email: _v0,
          disableEmail: _v11,
          onEmailChange: _v8,
          fa: _v1,
          onSuccess: _v3,
          placeholder: _v19,
          termsAndConditions: _v16,
          disclaimer: _v17,
          hasF2PVariant: _v20,
          marketingCheckBox: (0, _v2.jsx)(_v123, {
            hideHorizontalRule: !0,
            marketingOptIn: _v22,
            marketingOptInHandler: _v24
          }),
          turnstileToken: _v30,
          turnstileError: _v28,
          captchaVisible: _v26,
          isFullScreen: _v21
        })
      }), !1, !_v20 && (0, _v2.jsx)(_v129, {
        children: (0, _v2.jsx)(_v106, {
          children: (0, _v7.translate)({
            singular: "or",
            dictionary: {
              es: {
                singular: "o"
              },
              "de-DE": {
                singular: "oder"
              },
              "fr-FR": {
                singular: "ou"
              },
              "ja-JP": {
                singular: "または"
              },
              "ko-KR": {
                singular: "또는"
              },
              "pt-BR": {
                singular: "ou"
              },
              "zh-CN": {
                singular: "或"
              }
            }
          })
        })
      }), (0, _v2.jsx)(_v129, {
        children: (0, _v2.jsx)(_v125.GoogleForm, {
          xsrft: _v7,
          action: "join",
          optIn: _v22,
          redirectUrl: _v4,
          onClick: () => {
            (0, _v13.trackJoinWithGoogleClick)(!1, _v4), _v25("google", _v1);
          },
          redirectUrlAfterSocialLogin: _v9,
          redirectUrlAfterSocialJoin: _v10,
          target: _v15,
          onSubmit: _v13,
          socialSubmitBtn: _v12,
          turnstileToken: _v30,
          children: (0, _v7.translate)({
            singular: "Join with Google",
            dictionary: {
              es: {
                singular: "Regístrate con Google"
              },
              "de-DE": {
                singular: "Registriere dich mit Google"
              },
              "fr-FR": {
                singular: "S'inscrire avec Google"
              },
              "ja-JP": {
                singular: "Googleで登録"
              },
              "ko-KR": {
                singular: "Google로 가입하기"
              },
              "pt-BR": {
                singular: "Cadastrar com o Google"
              },
              "zh-CN": {
                singular: "使用 Google 加入"
              }
            }
          })
        })
      }), !_v20 && (0, _v2.jsx)(_v123, {
        hideHorizontalRule: !1,
        marketingOptIn: _v22,
        marketingOptInHandler: _v24
      }), _v6 && (0, _v2.jsx)(_v129, {
        children: (0, _v2.jsxs)(_v130, {
          size: "2",
          format: "alternative",
          addBottomMargin: !0,
          children: [(0, _v7.translate)({
            singular: "Already have an account?",
            dictionary: {
              es: {
                singular: "¿Ya tiene una cuenta?"
              },
              "de-DE": {
                singular: "Hast du schon ein Konto?"
              },
              "fr-FR": {
                singular: "Vous avez déjà un compte ?"
              },
              "ja-JP": {
                singular: "すでにアカウントをお持ちですか？"
              },
              "ko-KR": {
                singular: "이미 계정이 있나요?"
              },
              "pt-BR": {
                singular: "Já tem uma conta?"
              },
              "zh-CN": {
                singular: "已有帐户？"
              }
            }
          }), " ", (0, _v2.jsx)(_v134, {
            onClick: _v6,
            children: (0, _v7.translate)({
              singular: "Log in",
              dictionary: {
                es: {
                  singular: "Iniciar sesión"
                },
                "de-DE": {
                  singular: "Anmelden"
                },
                "fr-FR": {
                  singular: "Se connecter"
                },
                "ja-JP": {
                  singular: "ログイン"
                },
                "ko-KR": {
                  singular: "로그인"
                },
                "pt-BR": {
                  singular: "Entrar"
                },
                "zh-CN": {
                  singular: "登录"
                }
              }
            })
          })]
        })
      }), !_v20 && (0, _v2.jsxs)(_v129, {
        children: [(0, _v2.jsx)(_v130, {
          format: "soft",
          size: "3",
          className: "termsandconditions",
          children: _v16
        }), _v17 && (0, _v2.jsx)(_v130, {
          size: "3",
          children: _v17
        })]
      })]
    });
  }, "LoginForm", 0, function ({
    isTwoStep: _v0 = !1,
    xsrft: _v1,
    switchType: _v2,
    redirectUrl: _v3,
    email: _v4,
    fa: _v5,
    disableEmail: _v6,
    onSuccess: _v7,
    onEmailChange: _v8,
    redirectUrlAfterSocialLogin: _v9 = "",
    redirectUrlAfterSocialJoin: _v10 = "",
    onSocialLoginSubmit: _v11,
    onSocialLoginClick: _v12,
    target: _v13,
    onSSOFlowChoice: _v14,
    showEnterpriseOptInConsent: _v15,
    className: _v16,
    placeholder: _v17,
    submitCtaText: _v18,
    isF2PVariant: _v19,
    isSimplifiedSite: _v20,
    isFullScreen: _v21
  }) {
    let _v22 = _v12 ?? _v13.trackLogin,
      [_v23, _v24] = (0, _v4.useState)(void 0),
      _v25 = (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v129, {
          children: (0, _v2.jsx)(_v118, {
            xsrft: _v1,
            redirectUrl: _v3,
            email: _v4,
            onEmailChange: _v8,
            disableEmail: _v6,
            fa: _v5,
            onSuccess: _v7,
            target: _v13,
            showEnterpriseOptInConsent: _v15,
            placeholder: _v17,
            submitCtaText: _v18,
            className: _v16,
            isF2PVariant: _v19,
            isTwoStep: _v0,
            onTurnstileTokenChange: _v24,
            isFullScreen: _v21
          })
        }), !1]
      }),
      _v26 = (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v129, {
          children: (0, _v2.jsx)(_v124.FacebookForm, {
            xsrft: _v1,
            action: "login",
            optIn: null,
            redirectUrl: _v3,
            target: _v13,
            onSubmit: _v11,
            onClick: () => {
              _v22("facebook", _v5), (0, _v13.trackLoginWithSocialMediaClick)("facebook", _v0, _v3);
            },
            className: _v16,
            turnstileToken: _v23,
            children: (0, _v7.translate)({
              singular: "Log in with Facebook",
              dictionary: {
                es: {
                  singular: "Iniciar sesión con Facebook"
                },
                "de-DE": {
                  singular: "Über Facebook anmelden"
                },
                "fr-FR": {
                  singular: "Connexion avec Facebook"
                },
                "ja-JP": {
                  singular: "Facebookでログイン"
                },
                "ko-KR": {
                  singular: "Facebook 계정으로 로그인"
                },
                "pt-BR": {
                  singular: "Entrar com Facebook"
                },
                "zh-CN": {
                  singular: "使用 Facebook 登录"
                }
              }
            })
          })
        }), (0, _v2.jsx)(_v129, {
          children: (0, _v2.jsx)(_v125.GoogleForm, {
            xsrft: _v1,
            action: "login",
            optIn: null,
            redirectUrl: _v3,
            onClick: () => {
              _v22("google", _v5), (0, _v13.trackLoginWithSocialMediaClick)("google", _v0, _v3);
            },
            onSubmit: _v11,
            target: _v13,
            redirectUrlAfterSocialLogin: _v9,
            redirectUrlAfterSocialJoin: _v10,
            className: _v16,
            turnstileToken: _v23,
            children: (0, _v7.translate)({
              singular: "Log in with Google",
              dictionary: {
                es: {
                  singular: "Ingresar con Google"
                },
                "de-DE": {
                  singular: "Melde dich mit Google an"
                },
                "fr-FR": {
                  singular: "Connexion avec Google"
                },
                "ja-JP": {
                  singular: "Googleでログイン"
                },
                "ko-KR": {
                  singular: "Google로 로그인"
                },
                "pt-BR": {
                  singular: "Entre com o Google"
                },
                "zh-CN": {
                  singular: "使用 Google 登录"
                }
              }
            })
          })
        }), (0, _v2.jsx)(_v129, {
          children: (0, _v2.jsx)(_v127, {
            xsrft: _v1,
            action: "login",
            optIn: null,
            redirectUrl: _v3,
            target: _v13,
            onSubmit: _v11,
            onClick: () => {
              _v22("apple", _v5), (0, _v13.trackLoginWithSocialMediaClick)("apple", _v0, _v3);
            },
            className: _v16,
            turnstileToken: _v23,
            children: (0, _v7.translate)({
              singular: "Log in with Apple",
              dictionary: {
                es: {
                  singular: "Iniciar sesión con Apple"
                },
                "de-DE": {
                  singular: "Mit Apple einloggen"
                },
                "fr-FR": {
                  singular: "Se connecter avec Apple"
                },
                "ja-JP": {
                  singular: "Appleでログイン"
                },
                "ko-KR": {
                  singular: "Apple로 로그인"
                },
                "pt-BR": {
                  singular: "Entre com seu login da Apple"
                },
                "zh-CN": {
                  singular: "使用 Apple 登录"
                }
              }
            })
          })
        })]
      }),
      _v27 = (0, _v2.jsx)(_v129, {
        children: (0, _v2.jsx)(_v106, {
          children: (0, _v7.translate)({
            singular: "or",
            dictionary: {
              es: {
                singular: "o"
              },
              "de-DE": {
                singular: "oder"
              },
              "fr-FR": {
                singular: "ou"
              },
              "ja-JP": {
                singular: "または"
              },
              "ko-KR": {
                singular: "또는"
              },
              "pt-BR": {
                singular: "ou"
              },
              "zh-CN": {
                singular: "或"
              }
            }
          })
        })
      }),
      _v28 = [_v25, _v27, _v26];
    return _v0 && (_v28 = _v20 ? [_v25] : [_v26, _v27, _v25]), (0, _v2.jsxs)(_v2.Fragment, {
      children: [_v28, _v2 && (0, _v2.jsx)(_v129, {
        children: (0, _v2.jsxs)(_v130, {
          size: "2",
          format: "alternative",
          addBottomMargin: !0,
          children: [(0, _v7.translate)({
            singular: "Don't have an account?",
            dictionary: {
              es: {
                singular: "¿No tienes una cuenta?"
              },
              "de-DE": {
                singular: "Du hast noch kein Konto?"
              },
              "fr-FR": {
                singular: "Vous n'avez pas de compte ?"
              },
              "ja-JP": {
                singular: "新規アカウントを作る"
              },
              "ko-KR": {
                singular: "아직 계정이 없으신가요?"
              },
              "pt-BR": {
                singular: "Você não tem uma conta?"
              },
              "zh-CN": {
                singular: "没有账户？"
              }
            }
          }), " ", (0, _v2.jsx)(_v134, {
            onClick: _v2,
            children: (0, _v7.translate)({
              singular: "Join",
              dictionary: {
                es: {
                  singular: "Unirse"
                },
                "de-DE": {
                  singular: "Registrieren"
                },
                "fr-FR": {
                  singular: "S'inscrire"
                },
                "ja-JP": {
                  singular: "登録"
                },
                "ko-KR": {
                  singular: "가입"
                },
                "pt-BR": {
                  singular: "Inscrever-se"
                },
                "zh-CN": {
                  singular: "加入"
                }
              }
            })
          })]
        })
      })]
    });
  }], 0);
}