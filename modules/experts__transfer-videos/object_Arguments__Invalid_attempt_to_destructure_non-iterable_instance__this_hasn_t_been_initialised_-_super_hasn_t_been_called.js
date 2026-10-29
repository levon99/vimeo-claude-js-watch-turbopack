{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Form = void 0;
  var _v3 = _v9(_v0.r(0)),
    _v4 = _v9(_v0.r(0)),
    _v5 = _v9(_v0.r(0)),
    _v6 = _v9(_v0.r(0)),
    _v7 = _v9(_v0.r(0)),
    _v8 = _v0.r(0);
  function _v9(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v10(_v0) {
    return (_v10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v11(_v0, _v1) {
    return function (_v0) {
      if (Array.isArray(_v0)) return _v0;
    }(_v0) || function (_v0, _v1) {
      if (Symbol.iterator in Object(_v0) || "[object Arguments]" === Object.prototype.toString.call(_v0)) {
        var _v2 = [],
          _v3 = !0,
          _v4 = !1,
          _v5 = void 0;
        try {
          for (var _v6, _v7 = _v0[Symbol.iterator](); !(_v3 = (_v6 = _v7.next()).done) && (_v2.push(_v6.value), !_v1 || _v2.length !== _v1); _v3 = !0);
        } catch (_v0) {
          _v4 = !0, _v5 = _v0;
        } finally {
          try {
            _v3 || null == _v7.return || _v7.return();
          } finally {
            if (_v4) throw _v5;
          }
        }
        return _v2;
      }
    }(_v0, _v1) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }
  function _v12(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v13(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v12(Object(_v2), !0).forEach(function (_v0) {
        _v17(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v12(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v14(_v0) {
    return (_v14 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v15(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v16(_v0, _v1) {
    return (_v16 = Object.setPrototypeOf || function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v17(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  _v2.Form = function (_v0) {
    var _v1;
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    function _v2(_v0) {
      var _v1, _v2;
      if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
      return _v1 = (_v2 = _v14(_v2).call(this, _v0)) && ("object" === _v10(_v2) || "function" == typeof _v2) ? _v2 : _v15(this), _v17(_v15(_v1), "snapshot", void 0), _v17(_v15(_v1), "onChange", function (_v0) {
        return function (_v0) {
          var _v1 = _v0.currentTarget,
            _v2 = _v1.value,
            _v3 = _v1.checked;
          "checkbox" === _v0.target.type ? _v1.onUpdateField(_v0, _v3) : _v1.onUpdateField(_v0, _v2);
        };
      }), _v17(_v15(_v1), "onBlur", function (_v0) {
        return function () {
          _v1.onTouchField(_v0, !0);
        };
      }), _v17(_v15(_v1), "onTouchField", function (_v0, _v1) {
        _v1.setState(function (_v0) {
          return (0, _v5.default)(_v0, {
            touched: _v17({}, _v0, _v1)
          });
        });
      }), _v17(_v15(_v1), "onUpdateField", function (_v0, _v1, _v2) {
        _v1.setState(function (_v0) {
          var _v1 = (0, _v6.default)(_v0, {
            fields: _v17({}, _v0, {
              value: _v1
            }),
            dirty: _v17({}, _v0, !0),
            isDirty: !0
          }, function (_v0, _v1) {
            if (Array.isArray(_v0)) return _v1;
          });
          return "function" == typeof _v1.props.validate && (_v1.errors = _v1.props.validate(Object.keys(_v1.fields).reduce(function (_v0, _v1) {
            return _v13({}, _v0, _v17({}, _v1, _v1.fields[_v1].value));
          }, {})), _v1.isValid = 0 === Object.keys(_v1.errors).length, _v1.metadata[_v0].error = _v1.errors[_v0]), _v1;
        }, function () {
          if (_v2 && _v2(), _v1.props.onChange) {
            var _v0 = Object.keys(_v1.state.fields).map(function (_v0) {
              return [_v0, _v1.state.fields[_v0]];
            }).reduce(function (_v0, _v1) {
              var _v2 = _v11(_v1, 2);
              return _v13({}, _v0, _v17({}, _v2[0], _v2[1].value));
            }, {});
            _v1.props.onChange(_v0);
          }
        });
      }), _v17(_v15(_v1), "onSubmit", function (_v0) {
        var _v1;
        return regeneratorRuntime.async(function (_v0) {
          for (;;) switch (_v0.prev = _v0.next) {
            case 0:
              if (_v0 && "function" == typeof _v0.preventDefault && _v0.preventDefault(), _v1.setState(function (_v0) {
                return (0, _v5.default)(_v0, {
                  isSubmitting: !0
                });
              }), _v0.prev = 2, _v1 = _v1.props.onSubmit(Object.keys(_v1.state.fields).reduce(function (_v0, _v1) {
                return _v13({}, _v0, _v17({}, _v1, _v1.state.fields[_v1].value));
              }, {})), !(0, _v8.isPromise)(_v1)) {
                _v0.next = 7;
                break;
              }
              return _v0.next = 7, regeneratorRuntime.awrap(_v1);
            case 7:
              _v1.setState(function (_v0) {
                return (0, _v5.default)(_v0, {
                  isSubmitting: !1,
                  touched: Object.keys(_v1.props.initialValues).reduce(function (_v0, _v1) {
                    return _v13({}, _v0, _v17({}, _v1, !1));
                  }, {}),
                  dirty: Object.keys(_v1.props.initialValues).reduce(function (_v0, _v1) {
                    return _v13({}, _v0, _v17({}, _v1, !1));
                  }, {}),
                  isDirty: !1
                });
              }, function () {
                return _v1.setSnapshot(_v1.state);
              }), _v0.next = 13;
              break;
            case 10:
              _v0.prev = 10, _v0.t0 = _v0.catch(2), _v1.setState(function (_v0) {
                return (0, _v5.default)(_v0, {
                  isSubmitting: !1
                });
              });
            case 13:
            case "end":
              return _v0.stop();
          }
        }, null, null, [[2, 10]]);
      }), _v17(_v15(_v1), "onReset", function (_v0) {
        _v0.preventDefault(), _v1.setState(function () {
          return (0, _v3.default)(_v1.snapshot);
        }, function () {
          var _v0 = Object.keys(_v1.state.fields).map(function (_v0) {
            return [_v0, _v1.state.fields[_v0]];
          }).reduce(function (_v0, _v1) {
            var _v2 = _v11(_v1, 2);
            return _v13({}, _v0, _v17({}, _v2[0], _v2[1].value));
          }, {});
          _v1.props.onReset && _v1.props.onReset(_v0), _v1.props.onChange && _v1.props.onChange(_v0);
        });
      }), _v17(_v15(_v1), "makeState", function (_v0) {
        var _v1 = Object.keys(_v0.initialValues),
          _v2 = _v0.validate ? _v0.validate(_v0.initialValues) : {},
          _v3 = _v1.reduce(function (_v0, _v1) {
            return _v13({}, _v0, _v17({}, _v1, !1));
          }, {}),
          _v4 = (0, _v3.default)(_v3);
        return {
          dirty: _v3,
          errors: _v2,
          touched: _v4,
          actions: _v1.reduce(function (_v0, _v1) {
            return _v13({}, _v0, _v17({}, _v1, {
              setValue: function (_v0, _v1) {
                return _v1.onUpdateField(_v1, _v0, _v1);
              },
              setTouched: function (_v0) {
                return _v1.onTouchField(_v1, _v0);
              }
            }));
          }, {}),
          isDirty: _v1.some(function (_v0) {
            return !0 === _v3[_v0];
          }),
          fields: _v1.map(function (_v0) {
            return {
              id: _v0,
              onBlur: _v1.onBlur(_v0),
              onChange: _v1.onChange(_v0),
              value: _v0.initialValues[_v0]
            };
          }).reduce(function (_v0, _v1) {
            return _v13({}, _v0, _v17({}, _v1.id, _v1));
          }, {}),
          metadata: _v1.map(function (_v0) {
            return [_v0, {
              error: _v2[_v0],
              isDirty: _v3[_v0],
              isTouched: _v4[_v0],
              isValid: void 0 === _v2[_v0]
            }];
          }).reduce(function (_v0, _v1) {
            var _v2 = _v11(_v1, 2);
            return _v13({}, _v0, _v17({}, _v2[0], _v2[1]));
          }, {}),
          isSubmitting: !1,
          isValid: 0 === Object.keys(_v2).length,
          onUpdateField: _v1.onUpdateField,
          onTouchField: _v1.onTouchField,
          onSubmit: _v1.onSubmit,
          onReset: _v1.onReset
        };
      }), _v17(_v15(_v1), "setSnapshot", function (_v0) {
        _v1.snapshot = (0, _v3.default)(_v0);
      }), _v1.state = _v1.makeState(_v0), _v1.setSnapshot(_v1.state), _v1;
    }
    return _v2.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v2,
        writable: !0,
        configurable: !0
      }
    }), _v0 && _v16(_v2, _v0), _v1 = [{
      key: "componentWillReceiveProps",
      value: function (_v0) {
        var _v1 = this;
        (0, _v4.default)(_v0.initialValues, this.props.initialValues) || this.setState(function () {
          return _v1.makeState(_v0);
        }, function () {
          return _v1.setSnapshot(_v1.state);
        });
      }
    }, {
      key: "render",
      value: function () {
        return this.props.children(this.state);
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v2.prototype, _v1), _v2;
  }(_v7.default.Component);
}