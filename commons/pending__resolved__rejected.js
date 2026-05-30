{
  "use strict";

  function _v3(_v0) {
    return Array.prototype.slice.apply(_v0);
  }
  var _v4 = "pending",
    _v5 = "resolved",
    _v6 = "rejected";
  function _v7(_v0) {
    this.status = _v4, this._continuations = [], this._parent = null, this._paused = !1, _v0 && _v0.call(this, this._continueWith.bind(this), this._failWith.bind(this));
  }
  function _v8(_v0) {
    return _v0 && "function" == typeof _v0.then;
  }
  function _v9(_v0) {
    return _v0;
  }
  function _v10(_v0) {
    return "u" > typeof window && "AggregateError" in window ? new window.AggregateError(_v0) : {
      errors: _v0
    };
  }
  if (_v7.prototype = {
    then: function (_v0, _v1) {
      var _v2 = _v7.unresolved()._setParent(this);
      if (this._isRejected()) {
        if (this._paused) return this._continuations.push({
          promise: _v2,
          nextFn: _v0,
          catchFn: _v1
        }), _v2;
        if (_v1) try {
          var _v3 = _v1(this._error);
          if (_v8(_v3)) return this._chainPromiseData(_v3, _v2), _v2;
          return _v7.resolve(_v3)._setParent(this);
        } catch (_v0) {
          return _v7.reject(_v0)._setParent(this);
        }
        return _v7.reject(this._error)._setParent(this);
      }
      return this._continuations.push({
        promise: _v2,
        nextFn: _v0,
        catchFn: _v1
      }), this._runResolutions(), _v2;
    },
    catch: function (_v0) {
      if (this._isResolved()) return _v7.resolve(this._data)._setParent(this);
      var _v1 = _v7.unresolved()._setParent(this);
      return this._continuations.push({
        promise: _v1,
        catchFn: _v0
      }), this._runRejections(), _v1;
    },
    finally: function (_v0) {
      var _v1 = !1;
      function _v2(_v0, _v1) {
        if (!_v1) {
          _v1 = !0, _v0 || (_v0 = _v9);
          var _v2 = _v0(_v0);
          return _v8(_v2) ? _v2.then(function () {
            if (_v1) throw _v1;
            return _v0;
          }) : _v0;
        }
      }
      return this.then(function (_v0) {
        return _v2(_v0);
      }).catch(function (_v0) {
        return _v2(null, _v0);
      });
    },
    pause: function () {
      return this._paused = !0, this;
    },
    resume: function () {
      var _v0 = this._findFirstPaused();
      return _v0 && (_v0._paused = !1, _v0._runResolutions(), _v0._runRejections()), this;
    },
    _findAncestry: function () {
      return this._continuations.reduce(function (_v0, _v1) {
        if (_v1.promise) {
          var _v2 = {
            promise: _v1.promise,
            children: _v1.promise._findAncestry()
          };
          _v0.push(_v2);
        }
        return _v0;
      }, []);
    },
    _setParent: function (_v0) {
      if (this._parent) throw Error("parent already set");
      return this._parent = _v0, this;
    },
    _continueWith: function (_v0) {
      var _v1 = this._findFirstPending();
      _v1 && (_v1._data = _v0, _v1._setResolved());
    },
    _findFirstPending: function () {
      return this._findFirstAncestor(function (_v0) {
        return _v0._isPending && _v0._isPending();
      });
    },
    _findFirstPaused: function () {
      return this._findFirstAncestor(function (_v0) {
        return _v0._paused;
      });
    },
    _findFirstAncestor: function (_v0) {
      for (var _v1, _v2 = this; _v2;) _v0(_v2) && (_v1 = _v2), _v2 = _v2._parent;
      return _v1;
    },
    _failWith: function (_v0) {
      var _v1 = this._findFirstPending();
      _v1 && (_v1._error = _v0, _v1._setRejected());
    },
    _takeContinuations: function () {
      return this._continuations.splice(0, this._continuations.length);
    },
    _runRejections: function () {
      if (!this._paused && this._isRejected()) {
        var _v0 = this._error,
          _v1 = this._takeContinuations(),
          _v2 = this;
        _v1.forEach(function (_v0) {
          if (_v0.catchFn) try {
            var _v1 = _v0.catchFn(_v0);
            _v2._handleUserFunctionResult(_v1, _v0.promise);
          } catch (_v0) {
            _v0.promise.reject(_v0);
          } else _v0.promise.reject(_v0);
        });
      }
    },
    _runResolutions: function () {
      if (!(this._paused || !this._isResolved() || this._isPending())) {
        var _v0 = this._takeContinuations(),
          _v1 = this._data,
          _v2 = this;
        if (_v0.forEach(function (_v0) {
          if (_v0.nextFn) try {
            var _v1 = _v0.nextFn(_v1);
            _v2._handleUserFunctionResult(_v1, _v0.promise);
          } catch (_v0) {
            _v2._handleResolutionError(_v0, _v0);
          } else _v0.promise && _v0.promise.resolve(_v1);
        }), _v8(this._data)) return this._handleWhenResolvedDataIsPromise(this._data);
      }
    },
    _handleResolutionError: function (_v0, _v1) {
      if (this._setRejected(), _v1.catchFn) try {
        _v1.catchFn(_v0);
        return;
      } catch (_v0) {
        _v0 = _v0;
      }
      _v1.promise && _v1.promise.reject(_v0);
    },
    _handleWhenResolvedDataIsPromise: function (_v0) {
      var _v1 = this;
      return _v0.then(function (_v0) {
        _v1._data = _v0, _v1._runResolutions();
      }).catch(function (_v0) {
        _v1._error = _v0, _v1._setRejected(), _v1._runRejections();
      });
    },
    _handleUserFunctionResult: function (_v0, _v1) {
      _v8(_v0) ? this._chainPromiseData(_v0, _v1) : _v1.resolve(_v0);
    },
    _chainPromiseData: function (_v0, _v1) {
      _v0.then(function (_v0) {
        _v1.resolve(_v0);
      }).catch(function (_v0) {
        _v1.reject(_v0);
      });
    },
    _setResolved: function () {
      this.status = _v5, this._paused || this._runResolutions();
    },
    _setRejected: function () {
      this.status = _v6, this._paused || this._runRejections();
    },
    _isPending: function () {
      return this.status === _v4;
    },
    _isResolved: function () {
      return this.status === _v5;
    },
    _isRejected: function () {
      return this.status === _v6;
    }
  }, _v7.resolve = function (_v0) {
    return new _v7(function (_v0, _v1) {
      _v8(_v0) ? _v0.then(function (_v0) {
        _v0(_v0);
      }).catch(function (_v0) {
        _v1(_v0);
      }) : _v0(_v0);
    });
  }, _v7.reject = function (_v0) {
    return new _v7(function (_v0, _v1) {
      _v1(_v0);
    });
  }, _v7.unresolved = function () {
    return new _v7(function (_v0, _v1) {
      this.resolve = _v0, this.reject = _v1;
    });
  }, _v7.all = function () {
    var _v0 = _v3(arguments);
    return (Array.isArray(_v0[0]) && (_v0 = _v0[0]), _v0.length) ? new _v7(function (_v0, _v1) {
      var _v2 = [],
        _v3 = 0,
        _v4 = function () {
          _v3 === _v0.length && _v0(_v2);
        },
        _v5 = !1,
        _v6 = function (_v0) {
          _v5 || (_v5 = !0, _v1(_v0));
        };
      _v0.forEach(function (_v0, _v1) {
        _v7.resolve(_v0).then(function (_v0) {
          _v2[_v1] = _v0, _v3 += 1, _v4();
        }).catch(function (_v0) {
          _v6(_v0);
        });
      });
    }) : _v7.resolve([]);
  }, _v7.any = function () {
    var _v0 = _v3(arguments);
    return (Array.isArray(_v0[0]) && (_v0 = _v0[0]), _v0.length) ? new _v7(function (_v0, _v1) {
      var _v2 = [],
        _v3 = 0,
        _v4 = function () {
          _v3 === _v0.length && _v1(_v10(_v2));
        },
        _v5 = !1,
        _v6 = function (_v0) {
          _v5 || (_v5 = !0, _v0(_v0));
        };
      _v0.forEach(function (_v0, _v1) {
        _v7.resolve(_v0).then(function (_v0) {
          _v6(_v0);
        }).catch(function (_v0) {
          _v2[_v1] = _v0, _v3 += 1, _v4();
        });
      });
    }) : _v7.reject(_v10([]));
  }, _v7.allSettled = function () {
    var _v0 = _v3(arguments);
    return (Array.isArray(_v0[0]) && (_v0 = _v0[0]), _v0.length) ? new _v7(function (_v0) {
      var _v1 = [],
        _v2 = 0,
        _v3 = function () {
          (_v2 += 1) === _v0.length && _v0(_v1);
        };
      _v0.forEach(function (_v0, _v1) {
        _v7.resolve(_v0).then(function (_v0) {
          _v1[_v1] = {
            status: "fulfilled",
            value: _v0
          }, _v3();
        }).catch(function (_v0) {
          _v1[_v1] = {
            status: "rejected",
            reason: _v0
          }, _v3();
        });
      });
    }) : _v7.resolve([]);
  }, Promise === _v7) throw Error("Please use SynchronousPromise.installGlobally() to install globally");
  var _v11 = Promise;
  _v7.installGlobally = function (_v0) {
    if (Promise === _v7) return _v0;
    var _v1 = function (_v0) {
      if (void 0 === _v0 || _v0.__patched) return _v0;
      var _v1 = _v0;
      return (_v0 = function () {
        _v1.apply(this, _v3(arguments));
      }).__patched = !0, _v0;
    }(_v0);
    return Promise = _v7, _v1;
  }, _v7.uninstallGlobally = function () {
    Promise === _v7 && (Promise = _v11);
  }, _v1.exports = {
    SynchronousPromise: _v7
  };
}