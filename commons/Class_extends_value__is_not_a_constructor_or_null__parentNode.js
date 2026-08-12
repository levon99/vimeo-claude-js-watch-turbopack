{
  "use strict";

  var _v3,
    _v4 = _v0.e && _v0.e.__extends || (_v3 = function (_v0, _v1) {
      return (_v3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (_v0, _v1) {
        _v0.__proto__ = _v1;
      } || function (_v0, _v1) {
        for (var _v2 in _v1) Object.prototype.hasOwnProperty.call(_v1, _v2) && (_v0[_v2] = _v1[_v2]);
      })(_v0, _v1);
    }, function (_v0, _v1) {
      if ("function" != typeof _v1 && null !== _v1) throw TypeError("Class extends value " + String(_v1) + " is not a constructor or null");
      function _v2() {
        this.constructor = _v0;
      }
      _v3(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
    }),
    _v5 = _v0.e && _v0.e.__assign || function () {
      return (_v5 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.cloneNode = _v2.hasChildren = _v2.isDocument = _v2.isDirective = _v2.isComment = _v2.isText = _v2.isCDATA = _v2.isTag = _v2.Element = _v2.Document = _v2.CDATA = _v2.NodeWithChildren = _v2.ProcessingInstruction = _v2.Comment = _v2.Text = _v2.DataNode = _v2.Node = void 0;
  var _v6 = _v0.r(0),
    _v7 = function () {
      function _v0() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(_v0.prototype, "parentNode", {
        get: function () {
          return this.parent;
        },
        set: function (_v0) {
          this.parent = _v0;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "previousSibling", {
        get: function () {
          return this.prev;
        },
        set: function (_v0) {
          this.prev = _v0;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "nextSibling", {
        get: function () {
          return this.next;
        },
        set: function (_v0) {
          this.next = _v0;
        },
        enumerable: !1,
        configurable: !0
      }), _v0.prototype.cloneNode = function (_v0) {
        return void 0 === _v0 && (_v0 = !1), _v22(this, _v0);
      }, _v0;
    }();
  _v2.Node = _v7;
  var _v8 = function (_v0) {
    function _v1(_v0) {
      var _v1 = _v0.call(this) || this;
      return _v1.data = _v0, _v1;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "nodeValue", {
      get: function () {
        return this.data;
      },
      set: function (_v0) {
        this.data = _v0;
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v7);
  _v2.DataNode = _v8;
  var _v9 = function (_v0) {
    function _v1() {
      var _v0 = null !== _v0 && _v0.apply(this, arguments) || this;
      return _v0.type = _v6.ElementType.Text, _v0;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "nodeType", {
      get: function () {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v8);
  _v2.Text = _v9;
  var _v10 = function (_v0) {
    function _v1() {
      var _v0 = null !== _v0 && _v0.apply(this, arguments) || this;
      return _v0.type = _v6.ElementType.Comment, _v0;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "nodeType", {
      get: function () {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v8);
  _v2.Comment = _v10;
  var _v11 = function (_v0) {
    function _v1(_v0, _v1) {
      var _v2 = _v0.call(this, _v1) || this;
      return _v2.name = _v0, _v2.type = _v6.ElementType.Directive, _v2;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v8);
  _v2.ProcessingInstruction = _v11;
  var _v12 = function (_v0) {
    function _v1(_v0) {
      var _v1 = _v0.call(this) || this;
      return _v1.children = _v0, _v1;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "firstChild", {
      get: function () {
        var _v0;
        return null != (_v0 = this.children[0]) ? _v0 : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(_v1.prototype, "lastChild", {
      get: function () {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(_v1.prototype, "childNodes", {
      get: function () {
        return this.children;
      },
      set: function (_v0) {
        this.children = _v0;
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v7);
  _v2.NodeWithChildren = _v12;
  var _v13 = function (_v0) {
    function _v1() {
      var _v0 = null !== _v0 && _v0.apply(this, arguments) || this;
      return _v0.type = _v6.ElementType.CDATA, _v0;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "nodeType", {
      get: function () {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v12);
  _v2.CDATA = _v13;
  var _v14 = function (_v0) {
    function _v1() {
      var _v0 = null !== _v0 && _v0.apply(this, arguments) || this;
      return _v0.type = _v6.ElementType.Root, _v0;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "nodeType", {
      get: function () {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v12);
  _v2.Document = _v14;
  var _v15 = function (_v0) {
    function _v1(_v0, _v1, _v2, _v3) {
      void 0 === _v2 && (_v2 = []), void 0 === _v3 && (_v3 = "script" === _v0 ? _v6.ElementType.Script : "style" === _v0 ? _v6.ElementType.Style : _v6.ElementType.Tag);
      var _v4 = _v0.call(this, _v2) || this;
      return _v4.name = _v0, _v4.attribs = _v1, _v4.type = _v3, _v4;
    }
    return _v4(_v1, _v0), Object.defineProperty(_v1.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(_v1.prototype, "tagName", {
      get: function () {
        return this.name;
      },
      set: function (_v0) {
        this.name = _v0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(_v1.prototype, "attributes", {
      get: function () {
        var _v0 = this;
        return Object.keys(this.attribs).map(function (_v0) {
          var _v1, _v2;
          return {
            name: _v0,
            value: _v0.attribs[_v0],
            namespace: null == (_v1 = _v0["x-attribsNamespace"]) ? void 0 : _v1[_v0],
            prefix: null == (_v2 = _v0["x-attribsPrefix"]) ? void 0 : _v2[_v0]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), _v1;
  }(_v12);
  function _v16(_v0) {
    return (0, _v6.isTag)(_v0);
  }
  function _v17(_v0) {
    return _v0.type === _v6.ElementType.CDATA;
  }
  function _v18(_v0) {
    return _v0.type === _v6.ElementType.Text;
  }
  function _v19(_v0) {
    return _v0.type === _v6.ElementType.Comment;
  }
  function _v20(_v0) {
    return _v0.type === _v6.ElementType.Directive;
  }
  function _v21(_v0) {
    return _v0.type === _v6.ElementType.Root;
  }
  function _v22(_v0, _v1) {
    if (void 0 === _v1 && (_v1 = !1), _v18(_v0)) _v2 = new _v9(_v0.data);else if (_v19(_v0)) _v2 = new _v10(_v0.data);else if (_v16(_v0)) {
      var _v2,
        _v3 = _v1 ? _v23(_v0.children) : [],
        _v4 = new _v15(_v0.name, _v5({}, _v0.attribs), _v3);
      _v3.forEach(function (_v0) {
        return _v0.parent = _v4;
      }), null != _v0.namespace && (_v4.namespace = _v0.namespace), _v0["x-attribsNamespace"] && (_v4["x-attribsNamespace"] = _v5({}, _v0["x-attribsNamespace"])), _v0["x-attribsPrefix"] && (_v4["x-attribsPrefix"] = _v5({}, _v0["x-attribsPrefix"])), _v2 = _v4;
    } else if (_v17(_v0)) {
      var _v3 = _v1 ? _v23(_v0.children) : [],
        _v5 = new _v13(_v3);
      _v3.forEach(function (_v0) {
        return _v0.parent = _v5;
      }), _v2 = _v5;
    } else if (_v21(_v0)) {
      var _v3 = _v1 ? _v23(_v0.children) : [],
        _v6 = new _v14(_v3);
      _v3.forEach(function (_v0) {
        return _v0.parent = _v6;
      }), _v0["x-mode"] && (_v6["x-mode"] = _v0["x-mode"]), _v2 = _v6;
    } else if (_v20(_v0)) {
      var _v7 = new _v11(_v0.name, _v0.data);
      null != _v0["x-name"] && (_v7["x-name"] = _v0["x-name"], _v7["x-publicId"] = _v0["x-publicId"], _v7["x-systemId"] = _v0["x-systemId"]), _v2 = _v7;
    } else throw Error("Not implemented yet: ".concat(_v0.type));
    return _v2.startIndex = _v0.startIndex, _v2.endIndex = _v0.endIndex, null != _v0.sourceCodeLocation && (_v2.sourceCodeLocation = _v0.sourceCodeLocation), _v2;
  }
  function _v23(_v0) {
    for (var _v1 = _v0.map(function (_v0) {
        return _v22(_v0, !0);
      }), _v2 = 1; _v2 < _v1.length; _v2++) _v1[_v2].prev = _v1[_v2 - 1], _v1[_v2 - 1].next = _v1[_v2];
    return _v1;
  }
  _v2.Element = _v15, _v2.isTag = _v16, _v2.isCDATA = _v17, _v2.isText = _v18, _v2.isComment = _v19, _v2.isDirective = _v20, _v2.isDocument = _v21, _v2.hasChildren = function (_v0) {
    return Object.prototype.hasOwnProperty.call(_v0, "children");
  }, _v2.cloneNode = _v22;
}