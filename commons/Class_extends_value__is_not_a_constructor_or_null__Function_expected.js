{
  "use strict";

  var _v1 = function (_v0, _v1) {
    return (_v1 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (_v0, _v1) {
      _v0.__proto__ = _v1;
    } || function (_v0, _v1) {
      for (var _v2 in _v1) Object.prototype.hasOwnProperty.call(_v1, _v2) && (_v0[_v2] = _v1[_v2]);
    })(_v0, _v1);
  };
  function _v2(_v0, _v1) {
    if ("function" != typeof _v1 && null !== _v1) throw TypeError("Class extends value " + String(_v1) + " is not a constructor or null");
    function _v2() {
      this.constructor = _v0;
    }
    _v1(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
  }
  var _v3 = function () {
    return (_v3 = Object.assign || function (_v0) {
      for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
      return _v0;
    }).apply(this, arguments);
  };
  function _v4(_v0, _v1) {
    var _v2 = {};
    for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
    if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) for (var _v4 = 0, _v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
    return _v2;
  }
  function _v5(_v0, _v1, _v2, _v3) {
    var _v4,
      _v5 = arguments.length,
      _v6 = _v5 < 3 ? _v1 : null === _v3 ? _v3 = Object.getOwnPropertyDescriptor(_v1, _v2) : _v3;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) _v6 = Reflect.decorate(_v0, _v1, _v2, _v3);else for (var _v7 = _v0.length - 1; _v7 >= 0; _v7--) (_v4 = _v0[_v7]) && (_v6 = (_v5 < 3 ? _v4(_v6) : _v5 > 3 ? _v4(_v1, _v2, _v6) : _v4(_v1, _v2)) || _v6);
    return _v5 > 3 && _v6 && Object.defineProperty(_v1, _v2, _v6), _v6;
  }
  function _v6(_v0, _v1) {
    return function (_v0, _v1) {
      _v1(_v0, _v1, _v0);
    };
  }
  function _v7(_v0, _v1, _v2, _v3, _v4, _v5) {
    function _v6(_v0) {
      if (void 0 !== _v0 && "function" != typeof _v0) throw TypeError("Function expected");
      return _v0;
    }
    for (var _v7, _v8 = _v3.kind, _v9 = "getter" === _v8 ? "get" : "setter" === _v8 ? "set" : "value", _v10 = !_v1 && _v0 ? _v3.static ? _v0 : _v0.prototype : null, _v11 = _v1 || (_v10 ? Object.getOwnPropertyDescriptor(_v10, _v3.name) : {}), _v12 = !1, _v13 = _v2.length - 1; _v13 >= 0; _v13--) {
      var _v14 = {};
      for (var _v15 in _v3) _v14[_v15] = "access" === _v15 ? {} : _v3[_v15];
      for (var _v15 in _v3.access) _v14.access[_v15] = _v3.access[_v15];
      _v14.addInitializer = function (_v0) {
        if (_v12) throw TypeError("Cannot add initializers after decoration has completed");
        _v5.push(_v6(_v0 || null));
      };
      var _v16 = (0, _v2[_v13])("accessor" === _v8 ? {
        get: _v11.get,
        set: _v11.set
      } : _v11[_v9], _v14);
      if ("accessor" === _v8) {
        if (void 0 === _v16) continue;
        if (null === _v16 || "object" != typeof _v16) throw TypeError("Object expected");
        (_v7 = _v6(_v16.get)) && (_v11.get = _v7), (_v7 = _v6(_v16.set)) && (_v11.set = _v7), (_v7 = _v6(_v16.init)) && _v4.unshift(_v7);
      } else (_v7 = _v6(_v16)) && ("field" === _v8 ? _v4.unshift(_v7) : _v11[_v9] = _v7);
    }
    _v10 && Object.defineProperty(_v10, _v3.name, _v11), _v12 = !0;
  }
  function _v8(_v0, _v1, _v2) {
    for (var _v3 = arguments.length > 2, _v4 = 0; _v4 < _v1.length; _v4++) _v2 = _v3 ? _v1[_v4].call(_v0, _v2) : _v1[_v4].call(_v0);
    return _v3 ? _v2 : void 0;
  }
  function _v9(_v0) {
    return "symbol" == typeof _v0 ? _v0 : "".concat(_v0);
  }
  function _v10(_v0, _v1, _v2) {
    return "symbol" == typeof _v1 && (_v1 = _v1.description ? "[".concat(_v1.description, "]") : ""), Object.defineProperty(_v0, "name", {
      configurable: !0,
      value: _v2 ? "".concat(_v2, " ", _v1) : _v1
    });
  }
  function _v11(_v0, _v1) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(_v0, _v1);
  }
  function _v12(_v0, _v1, _v2, _v3) {
    return new (_v2 || (_v2 = Promise))(function (_v0, _v1) {
      function _v2(_v0) {
        try {
          _v4(_v3.next(_v0));
        } catch (_v0) {
          _v1(_v0);
        }
      }
      function _v3(_v0) {
        try {
          _v4(_v3.throw(_v0));
        } catch (_v0) {
          _v1(_v0);
        }
      }
      function _v4(_v0) {
        var _v1;
        _v0.done ? _v0(_v0.value) : ((_v1 = _v0.value) instanceof _v2 ? _v1 : new _v2(function (_v0) {
          _v0(_v1);
        })).then(_v2, _v3);
      }
      _v4((_v3 = _v3.apply(_v0, _v1 || [])).next());
    });
  }
  function _v13(_v0, _v1) {
    var _v2,
      _v3,
      _v4,
      _v5 = {
        label: 0,
        sent: function () {
          if (1 & _v4[0]) throw _v4[1];
          return _v4[1];
        },
        trys: [],
        ops: []
      },
      _v6 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return _v6.next = _v7(0), _v6.throw = _v7(1), _v6.return = _v7(2), "function" == typeof Symbol && (_v6[Symbol.iterator] = function () {
      return this;
    }), _v6;
    function _v7(_v0) {
      return function (_v0) {
        var _v1 = [_v0, _v0];
        if (_v2) throw TypeError("Generator is already executing.");
        for (; _v6 && (_v6 = 0, _v1[0] && (_v5 = 0)), _v5;) try {
          if (_v2 = 1, _v3 && (_v4 = 2 & _v1[0] ? _v3.return : _v1[0] ? _v3.throw || ((_v4 = _v3.return) && _v4.call(_v3), 0) : _v3.next) && !(_v4 = _v4.call(_v3, _v1[1])).done) return _v4;
          switch (_v3 = 0, _v4 && (_v1 = [2 & _v1[0], _v4.value]), _v1[0]) {
            case 0:
            case 1:
              _v4 = _v1;
              break;
            case 4:
              return _v5.label++, {
                value: _v1[1],
                done: !1
              };
            case 5:
              _v5.label++, _v3 = _v1[1], _v1 = [0];
              continue;
            case 7:
              _v1 = _v5.ops.pop(), _v5.trys.pop();
              continue;
            default:
              if (!(_v4 = (_v4 = _v5.trys).length > 0 && _v4[_v4.length - 1]) && (6 === _v1[0] || 2 === _v1[0])) {
                _v5 = 0;
                continue;
              }
              if (3 === _v1[0] && (!_v4 || _v1[1] > _v4[0] && _v1[1] < _v4[3])) {
                _v5.label = _v1[1];
                break;
              }
              if (6 === _v1[0] && _v5.label < _v4[1]) {
                _v5.label = _v4[1], _v4 = _v1;
                break;
              }
              if (_v4 && _v5.label < _v4[2]) {
                _v5.label = _v4[2], _v5.ops.push(_v1);
                break;
              }
              _v4[2] && _v5.ops.pop(), _v5.trys.pop();
              continue;
          }
          _v1 = _v1.call(_v0, _v5);
        } catch (_v0) {
          _v1 = [6, _v0], _v3 = 0;
        } finally {
          _v2 = _v4 = 0;
        }
        if (5 & _v1[0]) throw _v1[1];
        return {
          value: _v1[0] ? _v1[1] : void 0,
          done: !0
        };
      };
    }
  }
  var _v14 = Object.create ? function (_v0, _v1, _v2, _v3) {
    void 0 === _v3 && (_v3 = _v2);
    var _v4 = Object.getOwnPropertyDescriptor(_v1, _v2);
    (!_v4 || ("get" in _v4 ? !_v1.__esModule : _v4.writable || _v4.configurable)) && (_v4 = {
      enumerable: !0,
      get: function () {
        return _v1[_v2];
      }
    }), Object.defineProperty(_v0, _v3, _v4);
  } : function (_v0, _v1, _v2, _v3) {
    void 0 === _v3 && (_v3 = _v2), _v0[_v3] = _v1[_v2];
  };
  function _v15(_v0, _v1) {
    for (var _v2 in _v0) "default" === _v2 || Object.prototype.hasOwnProperty.call(_v1, _v2) || _v14(_v1, _v0, _v2);
  }
  function _v16(_v0) {
    var _v1 = "function" == typeof Symbol && Symbol.iterator,
      _v2 = _v1 && _v0[_v1],
      _v3 = 0;
    if (_v2) return _v2.call(_v0);
    if (_v0 && "number" == typeof _v0.length) return {
      next: function () {
        return _v0 && _v3 >= _v0.length && (_v0 = void 0), {
          value: _v0 && _v0[_v3++],
          done: !_v0
        };
      }
    };
    throw TypeError(_v1 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function _v17(_v0, _v1) {
    var _v2 = "function" == typeof Symbol && _v0[Symbol.iterator];
    if (!_v2) return _v0;
    var _v3,
      _v4,
      _v5 = _v2.call(_v0),
      _v6 = [];
    try {
      for (; (void 0 === _v1 || _v1-- > 0) && !(_v3 = _v5.next()).done;) _v6.push(_v3.value);
    } catch (_v0) {
      _v4 = {
        error: _v0
      };
    } finally {
      try {
        _v3 && !_v3.done && (_v2 = _v5.return) && _v2.call(_v5);
      } finally {
        if (_v4) throw _v4.error;
      }
    }
    return _v6;
  }
  function _v18() {
    for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0 = _v0.concat(_v17(arguments[_v1]));
    return _v0;
  }
  function _v19() {
    for (var _v0 = 0, _v1 = 0, _v2 = arguments.length; _v1 < _v2; _v1++) _v0 += arguments[_v1].length;
    for (var _v3 = Array(_v0), _v4 = 0, _v1 = 0; _v1 < _v2; _v1++) for (var _v5 = arguments[_v1], _v6 = 0, _v7 = _v5.length; _v6 < _v7; _v6++, _v4++) _v3[_v4] = _v5[_v6];
    return _v3;
  }
  function _v20(_v0, _v1, _v2) {
    if (_v2 || 2 == arguments.length) for (var _v3, _v4 = 0, _v5 = _v1.length; _v4 < _v5; _v4++) !_v3 && _v4 in _v1 || (_v3 || (_v3 = Array.prototype.slice.call(_v1, 0, _v4)), _v3[_v4] = _v1[_v4]);
    return _v0.concat(_v3 || Array.prototype.slice.call(_v1));
  }
  function _v21(_v0) {
    return this instanceof _v21 ? (this.v = _v0, this) : new _v21(_v0);
  }
  function _v22(_v0, _v1, _v2) {
    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
    var _v3,
      _v4 = _v2.apply(_v0, _v1 || []),
      _v5 = [];
    return _v3 = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), _v6("next"), _v6("throw"), _v6("return", function (_v0) {
      return function (_v0) {
        return Promise.resolve(_v0).then(_v0, _v9);
      };
    }), _v3[Symbol.asyncIterator] = function () {
      return this;
    }, _v3;
    function _v6(_v0, _v1) {
      _v4[_v0] && (_v3[_v0] = function (_v0) {
        return new Promise(function (_v0, _v1) {
          _v5.push([_v0, _v0, _v0, _v1]) > 1 || _v7(_v0, _v0);
        });
      }, _v1 && (_v3[_v0] = _v1(_v3[_v0])));
    }
    function _v7(_v0, _v1) {
      try {
        var _v2;
        (_v2 = _v4[_v0](_v1)).value instanceof _v21 ? Promise.resolve(_v2.value.v).then(_v8, _v9) : _v10(_v5[0][2], _v2);
      } catch (_v0) {
        _v10(_v5[0][3], _v0);
      }
    }
    function _v8(_v0) {
      _v7("next", _v0);
    }
    function _v9(_v0) {
      _v7("throw", _v0);
    }
    function _v10(_v0, _v1) {
      _v0(_v1), _v5.shift(), _v5.length && _v7(_v5[0][0], _v5[0][1]);
    }
  }
  function _v23(_v0) {
    var _v1, _v2;
    return _v1 = {}, _v3("next"), _v3("throw", function (_v0) {
      throw _v0;
    }), _v3("return"), _v1[Symbol.iterator] = function () {
      return this;
    }, _v1;
    function _v3(_v0, _v1) {
      _v1[_v0] = _v0[_v0] ? function (_v0) {
        return (_v2 = !_v2) ? {
          value: _v21(_v0[_v0](_v0)),
          done: !1
        } : _v1 ? _v1(_v0) : _v0;
      } : _v1;
    }
  }
  function _v24(_v0) {
    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
    var _v1,
      _v2 = _v0[Symbol.asyncIterator];
    return _v2 ? _v2.call(_v0) : (_v0 = _v16(_v0), _v1 = {}, _v3("next"), _v3("throw"), _v3("return"), _v1[Symbol.asyncIterator] = function () {
      return this;
    }, _v1);
    function _v3(_v0) {
      _v1[_v0] = _v0[_v0] && function (_v0) {
        return new Promise(function (_v0, _v1) {
          var _v2, _v3, _v4;
          _v2 = _v0, _v3 = _v1, _v4 = (_v0 = _v0[_v0](_v0)).done, Promise.resolve(_v0.value).then(function (_v0) {
            _v2({
              value: _v0,
              done: _v4
            });
          }, _v3);
        });
      };
    }
  }
  function _v25(_v0, _v1) {
    return Object.defineProperty ? Object.defineProperty(_v0, "raw", {
      value: _v1
    }) : _v0.raw = _v1, _v0;
  }
  var _v26 = Object.create ? function (_v0, _v1) {
      Object.defineProperty(_v0, "default", {
        enumerable: !0,
        value: _v1
      });
    } : function (_v0, _v1) {
      _v0.default = _v1;
    },
    _v27 = function (_v0) {
      return (_v27 = Object.getOwnPropertyNames || function (_v0) {
        var _v1 = [];
        for (var _v2 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v2) && (_v1[_v1.length] = _v2);
        return _v1;
      })(_v0);
    };
  function _v28(_v0) {
    if (_v0 && _v0.__esModule) return _v0;
    var _v1 = {};
    if (null != _v0) for (var _v2 = _v27(_v0), _v3 = 0; _v3 < _v2.length; _v3++) "default" !== _v2[_v3] && _v14(_v1, _v0, _v2[_v3]);
    return _v26(_v1, _v0), _v1;
  }
  function _v29(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v30(_v0, _v1, _v2, _v3) {
    if ("a" === _v2 && !_v3) throw TypeError("Private accessor was defined without a getter");
    if ("function" == typeof _v1 ? _v0 !== _v1 || !_v3 : !_v1.has(_v0)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === _v2 ? _v3 : "a" === _v2 ? _v3.call(_v0) : _v3 ? _v3.value : _v1.get(_v0);
  }
  function _v31(_v0, _v1, _v2, _v3, _v4) {
    if ("m" === _v3) throw TypeError("Private method is not writable");
    if ("a" === _v3 && !_v4) throw TypeError("Private accessor was defined without a setter");
    if ("function" == typeof _v1 ? _v0 !== _v1 || !_v4 : !_v1.has(_v0)) throw TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === _v3 ? _v4.call(_v0, _v2) : _v4 ? _v4.value = _v2 : _v1.set(_v0, _v2), _v2;
  }
  function _v32(_v0, _v1) {
    if (null === _v1 || "object" != typeof _v1 && "function" != typeof _v1) throw TypeError("Cannot use 'in' operator on non-object");
    return "function" == typeof _v0 ? _v1 === _v0 : _v0.has(_v1);
  }
  function _v33(_v0, _v1, _v2) {
    if (null != _v1) {
      var _v3, _v4;
      if ("object" != typeof _v1 && "function" != typeof _v1) throw TypeError("Object expected.");
      if (_v2) {
        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
        _v3 = _v1[Symbol.asyncDispose];
      }
      if (void 0 === _v3) {
        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
        _v3 = _v1[Symbol.dispose], _v2 && (_v4 = _v3);
      }
      if ("function" != typeof _v3) throw TypeError("Object not disposable.");
      _v4 && (_v3 = function () {
        try {
          _v4.call(this);
        } catch (_v0) {
          return Promise.reject(_v0);
        }
      }), _v0.stack.push({
        value: _v1,
        dispose: _v3,
        async: _v2
      });
    } else _v2 && _v0.stack.push({
      async: !0
    });
    return _v1;
  }
  var _v34 = "function" == typeof SuppressedError ? SuppressedError : function (_v0, _v1, _v2) {
    var _v3 = Error(_v2);
    return _v3.name = "SuppressedError", _v3.error = _v0, _v3.suppressed = _v1, _v3;
  };
  function _v35(_v0) {
    function _v1(_v0) {
      _v0.error = _v0.hasError ? new _v34(_v0, _v0.error, "An error was suppressed during disposal.") : _v0, _v0.hasError = !0;
    }
    var _v2,
      _v3 = 0;
    return function _v0() {
      for (; _v2 = _v0.stack.pop();) try {
        if (!_v2.async && 1 === _v3) return _v3 = 0, _v0.stack.push(_v2), Promise.resolve().then(_v0);
        if (_v2.dispose) {
          var _v1 = _v2.dispose.call(_v2.value);
          if (_v2.async) return _v3 |= 2, Promise.resolve(_v1).then(_v0, function (_v0) {
            return _v1(_v0), _v0();
          });
        } else _v3 |= 1;
      } catch (_v0) {
        _v1(_v0);
      }
      if (1 === _v3) return _v0.hasError ? Promise.reject(_v0.error) : Promise.resolve();
      if (_v0.hasError) throw _v0.error;
    }();
  }
  function _v36(_v0, _v1) {
    return "string" == typeof _v0 && /^\.\.?\//.test(_v0) ? _v0.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (_v0, _v1, _v2, _v3, _v4) {
      return _v1 ? _v1 ? ".jsx" : ".js" : !_v2 || _v3 && _v4 ? _v2 + _v3 + "." + _v4.toLowerCase() + "js" : _v0;
    }) : _v0;
  }
  let _v37 = {
    __extends: _v2,
    __assign: _v3,
    __rest: _v4,
    __decorate: _v5,
    __param: _v6,
    __esDecorate: _v7,
    __runInitializers: _v8,
    __propKey: _v9,
    __setFunctionName: _v10,
    __metadata: _v11,
    __awaiter: _v12,
    __generator: _v13,
    __createBinding: _v14,
    __exportStar: _v15,
    __values: _v16,
    __read: _v17,
    __spread: _v18,
    __spreadArrays: _v19,
    __spreadArray: _v20,
    __await: _v21,
    __asyncGenerator: _v22,
    __asyncDelegator: _v23,
    __asyncValues: _v24,
    __makeTemplateObject: _v25,
    __importStar: _v28,
    __importDefault: _v29,
    __classPrivateFieldGet: _v30,
    __classPrivateFieldSet: _v31,
    __classPrivateFieldIn: _v32,
    __addDisposableResource: _v33,
    __disposeResources: _v35,
    __rewriteRelativeImportExtension: _v36
  };
  _v0.s(["__addDisposableResource", 0, _v33, "__assign", () => _v3, "__asyncDelegator", 0, _v23, "__asyncGenerator", 0, _v22, "__asyncValues", 0, _v24, "__await", 0, _v21, "__awaiter", 0, _v12, "__classPrivateFieldGet", 0, _v30, "__classPrivateFieldIn", 0, _v32, "__classPrivateFieldSet", 0, _v31, "__createBinding", 0, _v14, "__decorate", 0, _v5, "__disposeResources", 0, _v35, "__esDecorate", 0, _v7, "__exportStar", 0, _v15, "__extends", 0, _v2, "__generator", 0, _v13, "__importDefault", 0, _v29, "__importStar", 0, _v28, "__makeTemplateObject", 0, _v25, "__metadata", 0, _v11, "__param", 0, _v6, "__propKey", 0, _v9, "__read", 0, _v17, "__rest", 0, _v4, "__rewriteRelativeImportExtension", 0, _v36, "__runInitializers", 0, _v8, "__setFunctionName", 0, _v10, "__spread", 0, _v18, "__spreadArray", 0, _v20, "__spreadArrays", 0, _v19, "__values", 0, _v16, "default", 0, _v37]);
}