{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    getSortedRouteObjects: function () {
      return _v7;
    },
    getSortedRoutes: function () {
      return _v6;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  class _v5 {
    insert(_v0) {
      this._insert(_v0.split("/").filter(Boolean), [], !1);
    }
    smoosh() {
      return this._smoosh();
    }
    _smoosh(_v0 = "/") {
      let _v1 = [...this.children.keys()].sort();
      null !== this.slugName && _v1.splice(_v1.indexOf("[]"), 1), null !== this.restSlugName && _v1.splice(_v1.indexOf("[...]"), 1), null !== this.optionalRestSlugName && _v1.splice(_v1.indexOf("[[...]]"), 1);
      let _v2 = _v1.map(_v0 => this.children.get(_v0)._smoosh(`${_v0}${_v0}/`)).reduce((_v0, _v1) => [..._v0, ..._v1], []);
      if (null !== this.slugName && _v2.push(...this.children.get("[]")._smoosh(`${_v0}[${this.slugName}]/`)), !this.placeholder) {
        let _v0 = "/" === _v0 ? "/" : _v0.slice(0, -1);
        if (null != this.optionalRestSlugName) throw Object.defineProperty(Error(`You cannot define a route with the same specificity as a optional catch-all route ("${_v0}" and "${_v0}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
          value: "E458",
          enumerable: !1,
          configurable: !0
        });
        _v2.unshift(_v0);
      }
      return null !== this.restSlugName && _v2.push(...this.children.get("[...]")._smoosh(`${_v0}[...${this.restSlugName}]/`)), null !== this.optionalRestSlugName && _v2.push(...this.children.get("[[...]]")._smoosh(`${_v0}[[...${this.optionalRestSlugName}]]/`)), _v2;
    }
    _insert(_v0, _v1, _v2) {
      if (0 === _v0.length) {
        this.placeholder = !1;
        return;
      }
      if (_v2) throw Object.defineProperty(Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
        value: "E392",
        enumerable: !1,
        configurable: !0
      });
      let _v3 = _v0[0];
      if (_v3.startsWith("[") && _v3.endsWith("]")) {
        let _v0 = _v3.slice(1, -1),
          _v1 = !1;
        if (_v0.startsWith("[") && _v0.endsWith("]") && (_v0 = _v0.slice(1, -1), _v1 = !0), _v0.startsWith("…")) throw Object.defineProperty(Error(`Detected a three-dot character ('…') at ('${_v0}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
          value: "E147",
          enumerable: !1,
          configurable: !0
        });
        if (_v0.startsWith("...") && (_v0 = _v0.substring(3), _v2 = !0), _v0.startsWith("[") || _v0.endsWith("]")) throw Object.defineProperty(Error(`Segment names may not start or end with extra brackets ('${_v0}').`), "__NEXT_ERROR_CODE", {
          value: "E421",
          enumerable: !1,
          configurable: !0
        });
        if (_v0.startsWith(".")) throw Object.defineProperty(Error(`Segment names may not start with erroneous periods ('${_v0}').`), "__NEXT_ERROR_CODE", {
          value: "E288",
          enumerable: !1,
          configurable: !0
        });
        function _v2(_v0, _v1) {
          if (null !== _v0 && _v0 !== _v1) throw Object.defineProperty(Error(`You cannot use different slug names for the same dynamic path ('${_v0}' !== '${_v1}').`), "__NEXT_ERROR_CODE", {
            value: "E337",
            enumerable: !1,
            configurable: !0
          });
          _v1.forEach(_v0 => {
            if (_v0 === _v1) throw Object.defineProperty(Error(`You cannot have the same slug name "${_v1}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
              value: "E247",
              enumerable: !1,
              configurable: !0
            });
            if (_v0.replace(/\W/g, "") === _v3.replace(/\W/g, "")) throw Object.defineProperty(Error(`You cannot have the slug names "${_v0}" and "${_v1}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
              value: "E499",
              enumerable: !1,
              configurable: !0
            });
          }), _v1.push(_v1);
        }
        if (_v2) {
          if (_v1) {
            if (null != this.restSlugName) throw Object.defineProperty(Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${_v0[0]}" ).`), "__NEXT_ERROR_CODE", {
              value: "E299",
              enumerable: !1,
              configurable: !0
            });
            _v2(this.optionalRestSlugName, _v0), this.optionalRestSlugName = _v0, _v3 = "[[...]]";
          } else {
            if (null != this.optionalRestSlugName) throw Object.defineProperty(Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${_v0[0]}").`), "__NEXT_ERROR_CODE", {
              value: "E300",
              enumerable: !1,
              configurable: !0
            });
            _v2(this.restSlugName, _v0), this.restSlugName = _v0, _v3 = "[...]";
          }
        } else {
          if (_v1) throw Object.defineProperty(Error(`Optional route parameters are not yet supported ("${_v0[0]}").`), "__NEXT_ERROR_CODE", {
            value: "E435",
            enumerable: !1,
            configurable: !0
          });
          _v2(this.slugName, _v0), this.slugName = _v0, _v3 = "[]";
        }
      }
      this.children.has(_v3) || this.children.set(_v3, new _v5()), this.children.get(_v3)._insert(_v0.slice(1), _v1, _v2);
    }
    constructor() {
      this.placeholder = !0, this.children = new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
    }
  }
  function _v6(_v0) {
    let _v1 = new _v5();
    return _v0.forEach(_v0 => _v1.insert(_v0)), _v1.smoosh();
  }
  function _v7(_v0, _v1) {
    let _v2 = {},
      _v3 = [];
    for (let _v0 = 0; _v0 < _v0.length; _v0++) {
      let _v0 = _v1(_v0[_v0]);
      _v2[_v0] = _v0, _v3[_v0] = _v0;
    }
    return _v6(_v3).map(_v0 => _v0[_v2[_v0]]);
  }
}