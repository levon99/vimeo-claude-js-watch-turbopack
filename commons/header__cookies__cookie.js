{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    compileNonPath: function () {
      return _v12;
    },
    matchHas: function () {
      return _v11;
    },
    parseDestination: function () {
      return _v13;
    },
    prepareDestination: function () {
      return _v14;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0);
  function _v10(_v0) {
    return _v0.replace(/__ESC_COLON_/gi, ":");
  }
  function _v11(_v0, _v1, _v2 = [], _v3 = []) {
    let _v4 = {},
      _v5 = _v0 => {
        let _v1,
          _v2 = _v0.key;
        switch (_v0.type) {
          case "header":
            _v2 = _v2.toLowerCase(), _v1 = _v0.headers[_v2];
            break;
          case "cookie":
            _v1 = "cookies" in _v0 ? _v0.cookies[_v0.key] : (0, _v8.getCookieParser)(_v0.headers)()[_v0.key];
            break;
          case "query":
            _v1 = _v1[_v2];
            break;
          case "host":
            {
              let {
                host: _v0
              } = _v0?.headers || {};
              _v1 = _v0?.split(":", 1)[0].toLowerCase();
            }
        }
        if (!_v0.value && _v1) return _v4[function (_v0) {
          let _v1 = "";
          for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            let _v0 = _v0.charCodeAt(_v0);
            (_v0 > 64 && _v0 < 91 || _v0 > 96 && _v0 < 123) && (_v1 += _v0[_v0]);
          }
          return _v1;
        }(_v2)] = _v1, !0;
        if (_v1) {
          let _v0 = RegExp(`^${_v0.value}$`),
            _v1 = Array.isArray(_v1) ? _v1.slice(-1)[0].match(_v0) : _v1.match(_v0);
          if (_v1) return Array.isArray(_v1) && (_v1.groups ? Object.keys(_v1.groups).forEach(_v0 => {
            _v4[_v0] = _v1.groups[_v0];
          }) : "host" === _v0.type && _v1[0] && (_v4.host = _v1[0])), !0;
        }
        return !1;
      };
    return !(!_v2.every(_v0 => _v5(_v0)) || _v3.some(_v0 => _v5(_v0))) && _v4;
  }
  function _v12(_v0, _v1) {
    if (!_v0.includes(":")) return _v0;
    for (let _v0 of Object.keys(_v1)) _v0.includes(`:${_v0}`) && (_v0 = _v0.replace(RegExp(`:${_v0}\\*`, "g"), `:${_v0}--ESCAPED_PARAM_ASTERISKS`).replace(RegExp(`:${_v0}\\?`, "g"), `:${_v0}--ESCAPED_PARAM_QUESTION`).replace(RegExp(`:${_v0}\\+`, "g"), `:${_v0}--ESCAPED_PARAM_PLUS`).replace(RegExp(`:${_v0}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${_v0}`));
    return _v0 = _v0.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*"), (0, _v9.safeCompile)(`/${_v0}`, {
      validate: !1
    })(_v1).slice(1);
  }
  function _v13(_v0) {
    let _v1 = _v0.destination;
    for (let _v0 of Object.keys({
      ..._v0.params,
      ..._v0.query
    })) _v0 && (_v1 = _v1.replace(RegExp(`:${(0, _v5.escapeStringRegexp)(_v0)}`, "g"), `__ESC_COLON_${_v0}`));
    let _v2 = (0, _v6.parseUrl)(_v1),
      _v3 = _v2.pathname;
    _v3 && (_v3 = _v10(_v3));
    let _v4 = _v2.href;
    _v4 && (_v4 = _v10(_v4));
    let _v5 = _v2.hostname;
    _v5 && (_v5 = _v10(_v5));
    let _v6 = _v2.hash;
    _v6 && (_v6 = _v10(_v6));
    let _v7 = _v2.search;
    _v7 && (_v7 = _v10(_v7));
    let _v8 = _v2.origin;
    return _v8 && (_v8 = _v10(_v8)), {
      ..._v2,
      pathname: _v3,
      hostname: _v5,
      href: _v4,
      hash: _v6,
      search: _v7,
      origin: _v8
    };
  }
  function _v14(_v0) {
    let _v1,
      _v2,
      _v3 = _v13(_v0),
      {
        hostname: _v4,
        query: _v5,
        search: _v6
      } = _v3,
      _v7 = _v3.pathname;
    _v3.hash && (_v7 = `${_v7}${_v3.hash}`);
    let _v8 = [],
      _v9 = [];
    for (let _v0 of ((0, _v9.safePathToRegexp)(_v7, _v9), _v9)) _v8.push(_v0.name);
    if (_v4) {
      let _v0 = [];
      for (let _v0 of ((0, _v9.safePathToRegexp)(_v4, _v0), _v0)) _v8.push(_v0.name);
    }
    let _v10 = (0, _v9.safeCompile)(_v7, {
      validate: !1
    });
    for (let [_v0, _v1] of (_v4 && (_v1 = (0, _v9.safeCompile)(_v4, {
      validate: !1
    })), Object.entries(_v5))) Array.isArray(_v1) ? _v5[_v0] = _v1.map(_v0 => _v12(_v10(_v0), _v0.params)) : "string" == typeof _v1 && (_v5[_v0] = _v12(_v10(_v1), _v0.params));
    let _v11 = Object.keys(_v0.params).filter(_v0 => "nextInternalLocale" !== _v0);
    if (_v0.appendParamsToQuery && !_v11.some(_v0 => _v8.includes(_v0))) for (let _v0 of _v11) _v0 in _v5 || (_v5[_v0] = _v0.params[_v0]);
    if ((0, _v7.isInterceptionRouteAppPath)(_v7)) for (let _v0 of _v7.split("/")) {
      let _v0 = _v7.INTERCEPTION_ROUTE_MARKERS.find(_v0 => _v0.startsWith(_v0));
      if (_v0) {
        "(..)(..)" === _v0 ? (_v0.params["0"] = "(..)", _v0.params["1"] = "(..)") : _v0.params["0"] = _v0;
        break;
      }
    }
    try {
      let [_v0, _v1] = (_v2 = _v10(_v0.params)).split("#", 2);
      _v1 && (_v3.hostname = _v1(_v0.params)), _v3.pathname = _v0, _v3.hash = `${_v1 ? "#" : ""}${_v1 || ""}`, _v3.search = _v6 ? _v12(_v6, _v0.params) : "";
    } catch (_v0) {
      if (_v0.message.match(/Expected .*? to not repeat, but got an array/)) throw Object.defineProperty(Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match"), "__NEXT_ERROR_CODE", {
        value: "E329",
        enumerable: !1,
        configurable: !0
      });
      throw _v0;
    }
    return _v3.query = {
      ..._v0.query,
      ..._v3.query
    }, {
      newUrl: _v2,
      destQuery: _v5,
      parsedDestination: _v3
    };
  }
}