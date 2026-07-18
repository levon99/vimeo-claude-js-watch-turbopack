{
  "use strict";

  let {
      MAX_SAFE_COMPONENT_LENGTH: _v3,
      MAX_SAFE_BUILD_LENGTH: _v4,
      MAX_LENGTH: _v5
    } = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = (_v2 = _v1.exports = {}).re = [],
    _v8 = _v2.safeRe = [],
    _v9 = _v2.src = [],
    _v10 = _v2.safeSrc = [],
    _v11 = _v2.t = {},
    _v12 = 0,
    _v13 = "[a-zA-Z0-9-]",
    _v14 = [["\\s", 1], ["\\d", _v5], [_v13, _v4]],
    _v15 = (_v0, _v1, _v2) => {
      let _v3 = (_v0 => {
          for (let [_v0, _v1] of _v14) _v0 = _v0.split(`${_v0}*`).join(`${_v0}{0,${_v1}}`).split(`${_v0}+`).join(`${_v0}{1,${_v1}}`);
          return _v0;
        })(_v1),
        _v4 = _v12++;
      _v6(_v0, _v4, _v1), _v11[_v0] = _v4, _v9[_v4] = _v1, _v10[_v4] = _v3, _v7[_v4] = new RegExp(_v1, _v2 ? "g" : void 0), _v8[_v4] = new RegExp(_v3, _v2 ? "g" : void 0);
    };
  _v15("NUMERICIDENTIFIER", "0|[1-9]\\d*"), _v15("NUMERICIDENTIFIERLOOSE", "\\d+"), _v15("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${_v13}*`), _v15("MAINVERSION", `(${_v9[_v11.NUMERICIDENTIFIER]})\\.(${_v9[_v11.NUMERICIDENTIFIER]})\\.(${_v9[_v11.NUMERICIDENTIFIER]})`), _v15("MAINVERSIONLOOSE", `(${_v9[_v11.NUMERICIDENTIFIERLOOSE]})\\.(${_v9[_v11.NUMERICIDENTIFIERLOOSE]})\\.(${_v9[_v11.NUMERICIDENTIFIERLOOSE]})`), _v15("PRERELEASEIDENTIFIER", `(?:${_v9[_v11.NONNUMERICIDENTIFIER]}|${_v9[_v11.NUMERICIDENTIFIER]})`), _v15("PRERELEASEIDENTIFIERLOOSE", `(?:${_v9[_v11.NONNUMERICIDENTIFIER]}|${_v9[_v11.NUMERICIDENTIFIERLOOSE]})`), _v15("PRERELEASE", `(?:-(${_v9[_v11.PRERELEASEIDENTIFIER]}(?:\\.${_v9[_v11.PRERELEASEIDENTIFIER]})*))`), _v15("PRERELEASELOOSE", `(?:-?(${_v9[_v11.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${_v9[_v11.PRERELEASEIDENTIFIERLOOSE]})*))`), _v15("BUILDIDENTIFIER", `${_v13}+`), _v15("BUILD", `(?:\\+(${_v9[_v11.BUILDIDENTIFIER]}(?:\\.${_v9[_v11.BUILDIDENTIFIER]})*))`), _v15("FULLPLAIN", `v?${_v9[_v11.MAINVERSION]}${_v9[_v11.PRERELEASE]}?${_v9[_v11.BUILD]}?`), _v15("FULL", `^${_v9[_v11.FULLPLAIN]}$`), _v15("LOOSEPLAIN", `[v=\\s]*${_v9[_v11.MAINVERSIONLOOSE]}${_v9[_v11.PRERELEASELOOSE]}?${_v9[_v11.BUILD]}?`), _v15("LOOSE", `^${_v9[_v11.LOOSEPLAIN]}$`), _v15("GTLT", "((?:<|>)?=?)"), _v15("XRANGEIDENTIFIERLOOSE", `${_v9[_v11.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), _v15("XRANGEIDENTIFIER", `${_v9[_v11.NUMERICIDENTIFIER]}|x|X|\\*`), _v15("XRANGEPLAIN", `[v=\\s]*(${_v9[_v11.XRANGEIDENTIFIER]})(?:\\.(${_v9[_v11.XRANGEIDENTIFIER]})(?:\\.(${_v9[_v11.XRANGEIDENTIFIER]})(?:${_v9[_v11.PRERELEASE]})?${_v9[_v11.BUILD]}?)?)?`), _v15("XRANGEPLAINLOOSE", `[v=\\s]*(${_v9[_v11.XRANGEIDENTIFIERLOOSE]})(?:\\.(${_v9[_v11.XRANGEIDENTIFIERLOOSE]})(?:\\.(${_v9[_v11.XRANGEIDENTIFIERLOOSE]})(?:${_v9[_v11.PRERELEASELOOSE]})?${_v9[_v11.BUILD]}?)?)?`), _v15("XRANGE", `^${_v9[_v11.GTLT]}\\s*${_v9[_v11.XRANGEPLAIN]}$`), _v15("XRANGELOOSE", `^${_v9[_v11.GTLT]}\\s*${_v9[_v11.XRANGEPLAINLOOSE]}$`), _v15("COERCEPLAIN", `(^|[^\\d])(\\d{1,${_v3}})(?:\\.(\\d{1,${_v3}}))?(?:\\.(\\d{1,${_v3}}))?`), _v15("COERCE", `${_v9[_v11.COERCEPLAIN]}(?:$|[^\\d])`), _v15("COERCEFULL", _v9[_v11.COERCEPLAIN] + `(?:${_v9[_v11.PRERELEASE]})?` + `(?:${_v9[_v11.BUILD]})?` + "(?:$|[^\\d])"), _v15("COERCERTL", _v9[_v11.COERCE], !0), _v15("COERCERTLFULL", _v9[_v11.COERCEFULL], !0), _v15("LONETILDE", "(?:~>?)"), _v15("TILDETRIM", `(\\s*)${_v9[_v11.LONETILDE]}\\s+`, !0), _v2.tildeTrimReplace = "$1~", _v15("TILDE", `^${_v9[_v11.LONETILDE]}${_v9[_v11.XRANGEPLAIN]}$`), _v15("TILDELOOSE", `^${_v9[_v11.LONETILDE]}${_v9[_v11.XRANGEPLAINLOOSE]}$`), _v15("LONECARET", "(?:\\^)"), _v15("CARETTRIM", `(\\s*)${_v9[_v11.LONECARET]}\\s+`, !0), _v2.caretTrimReplace = "$1^", _v15("CARET", `^${_v9[_v11.LONECARET]}${_v9[_v11.XRANGEPLAIN]}$`), _v15("CARETLOOSE", `^${_v9[_v11.LONECARET]}${_v9[_v11.XRANGEPLAINLOOSE]}$`), _v15("COMPARATORLOOSE", `^${_v9[_v11.GTLT]}\\s*(${_v9[_v11.LOOSEPLAIN]})$|^$`), _v15("COMPARATOR", `^${_v9[_v11.GTLT]}\\s*(${_v9[_v11.FULLPLAIN]})$|^$`), _v15("COMPARATORTRIM", `(\\s*)${_v9[_v11.GTLT]}\\s*(${_v9[_v11.LOOSEPLAIN]}|${_v9[_v11.XRANGEPLAIN]})`, !0), _v2.comparatorTrimReplace = "$1$2$3", _v15("HYPHENRANGE", `^\\s*(${_v9[_v11.XRANGEPLAIN]})\\s+-\\s+(${_v9[_v11.XRANGEPLAIN]})\\s*$`), _v15("HYPHENRANGELOOSE", `^\\s*(${_v9[_v11.XRANGEPLAINLOOSE]})\\s+-\\s+(${_v9[_v11.XRANGEPLAINLOOSE]})\\s*$`), _v15("STAR", "(<|>)?=?\\s*\\*"), _v15("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), _v15("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
}