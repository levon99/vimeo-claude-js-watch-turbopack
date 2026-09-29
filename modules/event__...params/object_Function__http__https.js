{
  "use strict";

  function _v3(_v0) {
    var _v1 = Array.prototype.slice.call(arguments, 1);
    return _v1.forEach(function (_v0) {
      _v0 && Object.keys(_v0).forEach(function (_v0) {
        _v0[_v0] = _v0[_v0];
      });
    }), _v0;
  }
  function _v4(_v0) {
    return Object.prototype.toString.call(_v0);
  }
  function _v5(_v0) {
    return "[object Function]" === _v4(_v0);
  }
  function _v6(_v0) {
    return _v0.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var _v7 = {
      fuzzyLink: !0,
      fuzzyEmail: !0,
      fuzzyIP: !1
    },
    _v8 = {
      "http:": {
        validate: function (_v0, _v1, _v2) {
          var _v3 = _v0.slice(_v1);
          return (_v2.re.http || (_v2.re.http = RegExp("^\\/\\/" + _v2.re.src_auth + _v2.re.src_host_port_strict + _v2.re.src_path, "i")), _v2.re.http.test(_v3)) ? _v3.match(_v2.re.http)[0].length : 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function (_v0, _v1, _v2) {
          var _v3 = _v0.slice(_v1);
          return (_v2.re.no_http || (_v2.re.no_http = RegExp("^" + _v2.re.src_auth + "(?:localhost|(?:(?:" + _v2.re.src_domain + ")\\.)+" + _v2.re.src_domain_root + ")" + _v2.re.src_port + _v2.re.src_host_terminator + _v2.re.src_path, "i")), _v2.re.no_http.test(_v3)) ? _v1 >= 3 && ":" === _v0[_v1 - 3] || _v1 >= 3 && "/" === _v0[_v1 - 3] ? 0 : _v3.match(_v2.re.no_http)[0].length : 0;
        }
      },
      "mailto:": {
        validate: function (_v0, _v1, _v2) {
          var _v3 = _v0.slice(_v1);
          return (_v2.re.mailto || (_v2.re.mailto = RegExp("^" + _v2.re.src_email_name + "@" + _v2.re.src_host_strict, "i")), _v2.re.mailto.test(_v3)) ? _v3.match(_v2.re.mailto)[0].length : 0;
        }
      }
    },
    _v9 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function _v10() {
    return function (_v0, _v1) {
      _v1.normalize(_v0);
    };
  }
  function _v11(_v0) {
    var _v1 = _v0.re = _v0.r(0)(_v0.__opts__),
      _v2 = _v0.__tlds__.slice();
    function _v3(_v0) {
      return _v0.replace("%TLDS%", _v1.src_tlds);
    }
    _v0.onCompile(), _v0.__tlds_replaced__ || _v2.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), _v2.push(_v1.src_xn), _v1.src_tlds = _v2.join("|"), _v1.email_fuzzy = RegExp(_v3(_v1.tpl_email_fuzzy), "i"), _v1.link_fuzzy = RegExp(_v3(_v1.tpl_link_fuzzy), "i"), _v1.link_no_ip_fuzzy = RegExp(_v3(_v1.tpl_link_no_ip_fuzzy), "i"), _v1.host_fuzzy_test = RegExp(_v3(_v1.tpl_host_fuzzy_test), "i");
    var _v4 = [];
    function _v5(_v0, _v1) {
      throw Error('(LinkifyIt) Invalid schema "' + _v0 + '": ' + _v1);
    }
    _v0.__compiled__ = {}, Object.keys(_v0.__schemas__).forEach(function (_v0) {
      var _v1 = _v0.__schemas__[_v0];
      if (null !== _v1) {
        var _v2,
          _v3 = {
            validate: null,
            link: null
          };
        if (_v0.__compiled__[_v0] = _v3, "[object Object]" === _v4(_v1)) {
          "[object RegExp]" === _v4(_v1.validate) ? (_v2 = _v1.validate, _v3.validate = function (_v0, _v1) {
            var _v2 = _v0.slice(_v1);
            return _v2.test(_v2) ? _v2.match(_v2)[0].length : 0;
          }) : _v5(_v1.validate) ? _v3.validate = _v1.validate : _v5(_v0, _v1), _v5(_v1.normalize) ? _v3.normalize = _v1.normalize : _v1.normalize ? _v5(_v0, _v1) : _v3.normalize = _v10();
          return;
        }
        if ("[object String]" === _v4(_v1)) return void _v4.push(_v0);
        _v5(_v0, _v1);
      }
    }), _v4.forEach(function (_v0) {
      _v0.__compiled__[_v0.__schemas__[_v0]] && (_v0.__compiled__[_v0].validate = _v0.__compiled__[_v0.__schemas__[_v0]].validate, _v0.__compiled__[_v0].normalize = _v0.__compiled__[_v0.__schemas__[_v0]].normalize);
    }), _v0.__compiled__[""] = {
      validate: null,
      normalize: _v10()
    };
    var _v6 = Object.keys(_v0.__compiled__).filter(function (_v0) {
      return _v0.length > 0 && _v0.__compiled__[_v0];
    }).map(_v6).join("|");
    _v0.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + _v1.src_ZPCc + "))(" + _v6 + ")", "i"), _v0.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + _v1.src_ZPCc + "))(" + _v6 + ")", "ig"), _v0.re.pretest = RegExp("(" + _v0.re.schema_test.source + ")|(" + _v0.re.host_fuzzy_test.source + ")|@", "i"), _v0.__index__ = -1, _v0.__text_cache__ = "";
  }
  function _v12(_v0, _v1) {
    var _v2 = _v0.__index__,
      _v3 = _v0.__last_index__,
      _v4 = _v0.__text_cache__.slice(_v2, _v3);
    this.schema = _v0.__schema__.toLowerCase(), this.index = _v2 + _v1, this.lastIndex = _v3 + _v1, this.raw = _v4, this.text = _v4, this.url = _v4;
  }
  function _v13(_v0, _v1) {
    var _v2 = new _v12(_v0, _v1);
    return _v0.__compiled__[_v2.schema].normalize(_v2, _v0), _v2;
  }
  function _v14(_v0, _v1) {
    if (!(this instanceof _v14)) return new _v14(_v0, _v1);
    !_v1 && Object.keys(_v0 || {}).reduce(function (_v0, _v1) {
      return _v0 || _v7.hasOwnProperty(_v1);
    }, !1) && (_v1 = _v0, _v0 = {}), this.__opts__ = _v3({}, _v7, _v1), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = _v3({}, _v8, _v0), this.__compiled__ = {}, this.__tlds__ = _v9, this.__tlds_replaced__ = !1, this.re = {}, _v11(this);
  }
  _v14.prototype.add = function (_v0, _v1) {
    return this.__schemas__[_v0] = _v1, _v11(this), this;
  }, _v14.prototype.set = function (_v0) {
    return this.__opts__ = _v3(this.__opts__, _v0), this;
  }, _v14.prototype.test = function (_v0) {
    var _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8;
    if (this.__text_cache__ = _v0, this.__index__ = -1, !_v0.length) return !1;
    if (this.re.schema_test.test(_v0)) {
      for ((_v7 = this.re.schema_search).lastIndex = 0; null !== (_v1 = _v7.exec(_v0));) if (_v4 = this.testSchemaAt(_v0, _v1[2], _v7.lastIndex)) {
        this.__schema__ = _v1[2], this.__index__ = _v1.index + _v1[1].length, this.__last_index__ = _v1.index + _v1[0].length + _v4;
        break;
      }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (_v8 = _v0.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || _v8 < this.__index__) && null !== (_v2 = _v0.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (_v5 = _v2.index + _v2[1].length, (this.__index__ < 0 || _v5 < this.__index__) && (this.__schema__ = "", this.__index__ = _v5, this.__last_index__ = _v2.index + _v2[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && _v0.indexOf("@") >= 0 && null !== (_v3 = _v0.match(this.re.email_fuzzy)) && (_v5 = _v3.index + _v3[1].length, _v6 = _v3.index + _v3[0].length, (this.__index__ < 0 || _v5 < this.__index__ || _v5 === this.__index__ && _v6 > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = _v5, this.__last_index__ = _v6)), this.__index__ >= 0;
  }, _v14.prototype.pretest = function (_v0) {
    return this.re.pretest.test(_v0);
  }, _v14.prototype.testSchemaAt = function (_v0, _v1, _v2) {
    return this.__compiled__[_v1.toLowerCase()] ? this.__compiled__[_v1.toLowerCase()].validate(_v0, _v2, this) : 0;
  }, _v14.prototype.match = function (_v0) {
    var _v1 = 0,
      _v2 = [];
    this.__index__ >= 0 && this.__text_cache__ === _v0 && (_v2.push(_v13(this, _v1)), _v1 = this.__last_index__);
    for (var _v3 = _v1 ? _v0.slice(_v1) : _v0; this.test(_v3);) _v2.push(_v13(this, _v1)), _v3 = _v3.slice(this.__last_index__), _v1 += this.__last_index__;
    return _v2.length ? _v2 : null;
  }, _v14.prototype.tlds = function (_v0, _v1) {
    return (_v0 = Array.isArray(_v0) ? _v0 : [_v0], _v1) ? this.__tlds__ = this.__tlds__.concat(_v0).sort().filter(function (_v0, _v1, _v2) {
      return _v0 !== _v2[_v1 - 1];
    }).reverse() : (this.__tlds__ = _v0.slice(), this.__tlds_replaced__ = !0), _v11(this), this;
  }, _v14.prototype.normalize = function (_v0) {
    _v0.schema || (_v0.url = "http://" + _v0.url), "mailto:" !== _v0.schema || /^mailto:/i.test(_v0.url) || (_v0.url = "mailto:" + _v0.url);
  }, _v14.prototype.onCompile = function () {}, _v1.exports = _v14;
}