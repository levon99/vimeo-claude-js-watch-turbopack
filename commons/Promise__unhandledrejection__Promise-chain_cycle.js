{
  "use strict";

  var _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0),
    _v18 = _v0.r(0),
    _v19 = _v0.r(0),
    _v20 = _v0.r(0),
    _v21 = _v0.r(0),
    _v22 = _v0.r(0).set,
    _v23 = _v0.r(0),
    _v24 = _v0.r(0),
    _v25 = _v0.r(0),
    _v26 = _v0.r(0),
    _v27 = _v0.r(0),
    _v28 = _v0.r(0),
    _v29 = _v0.r(0),
    _v30 = _v0.r(0),
    _v31 = "Promise",
    _v32 = _v29.CONSTRUCTOR,
    _v33 = _v29.REJECTION_EVENT,
    _v34 = _v29.SUBCLASSING,
    _v35 = _v27.getterFor(_v31),
    _v36 = _v27.set,
    _v37 = _v28 && _v28.prototype,
    _v38 = _v28,
    _v39 = _v37,
    _v40 = _v10.TypeError,
    _v41 = _v10.document,
    _v42 = _v10.process,
    _v43 = _v30.f,
    _v44 = _v43,
    _v45 = !!(_v41 && _v41.createEvent && _v10.dispatchEvent),
    _v46 = "unhandledrejection",
    _v47 = function (_v0) {
      var _v1;
      return !!(_v19(_v0) && _v18(_v1 = _v0.then)) && _v1;
    },
    _v48 = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5 = _v1.value,
        _v6 = 1 === _v1.state,
        _v7 = _v6 ? _v0.ok : _v0.fail,
        _v8 = _v0.resolve,
        _v9 = _v0.reject,
        _v10 = _v0.domain;
      try {
        _v7 ? (_v6 || (2 === _v1.rejection && _v53(_v1), _v1.rejection = 1), !0 === _v7 ? _v2 = _v5 : (_v10 && _v10.enter(), _v2 = _v7(_v5), _v10 && (_v10.exit(), _v4 = !0)), _v2 === _v0.promise ? _v9(new _v40("Promise-chain cycle")) : (_v3 = _v47(_v2)) ? _v12(_v3, _v2, _v8, _v9) : _v8(_v2)) : _v9(_v5);
      } catch (_v0) {
        _v10 && !_v4 && _v10.exit(), _v9(_v0);
      }
    },
    _v49 = function (_v0, _v1) {
      _v0.notified || (_v0.notified = !0, _v23(function () {
        for (var _v0, _v1 = _v0.reactions; _v0 = _v1.get();) _v48(_v0, _v0);
        _v0.notified = !1, _v1 && !_v0.rejection && _v51(_v0);
      }));
    },
    _v50 = function (_v0, _v1, _v2) {
      var _v3, _v4;
      _v45 ? ((_v3 = _v41.createEvent("Event")).promise = _v1, _v3.reason = _v2, _v3.initEvent(_v0, !1, !0), _v10.dispatchEvent(_v3)) : _v3 = {
        promise: _v1,
        reason: _v2
      }, !_v33 && (_v4 = _v10["on" + _v0]) ? _v4(_v3) : _v0 === _v46 && _v24("Unhandled promise rejection", _v2);
    },
    _v51 = function (_v0) {
      _v12(_v22, _v10, function () {
        var _v0,
          _v1 = _v0.facade,
          _v2 = _v0.value;
        if (_v52(_v0) && (_v0 = _v25(function () {
          _v9 ? _v42.emit("unhandledRejection", _v2, _v1) : _v50(_v46, _v1, _v2);
        }), _v0.rejection = _v9 || _v52(_v0) ? 2 : 1, _v0.error)) throw _v0.value;
      });
    },
    _v52 = function (_v0) {
      return 1 !== _v0.rejection && !_v0.parent;
    },
    _v53 = function (_v0) {
      _v12(_v22, _v10, function () {
        var _v0 = _v0.facade;
        _v9 ? _v42.emit("rejectionHandled", _v0) : _v50("rejectionhandled", _v0, _v0.value);
      });
    },
    _v54 = function (_v0, _v1, _v2) {
      return function (_v0) {
        _v0(_v1, _v0, _v2);
      };
    },
    _v55 = function (_v0, _v1, _v2) {
      _v0.done || (_v0.done = !0, _v2 && (_v0 = _v2), _v0.value = _v1, _v0.state = 2, _v49(_v0, !0));
    },
    _v56 = function (_v0, _v1, _v2) {
      if (!_v0.done) {
        _v0.done = !0, _v2 && (_v0 = _v2);
        try {
          if (_v0.facade === _v1) throw new _v40("Promise can't be resolved itself");
          var _v3 = _v47(_v1);
          _v3 ? _v23(function () {
            var _v0 = {
              done: !1
            };
            try {
              _v12(_v3, _v1, _v54(_v56, _v0, _v0), _v54(_v55, _v0, _v0));
            } catch (_v0) {
              _v55(_v0, _v0, _v0);
            }
          }) : (_v0.value = _v1, _v0.state = 1, _v49(_v0, !1));
        } catch (_v0) {
          _v55({
            done: !1
          }, _v0, _v0);
        }
      }
    };
  if (_v32 && (_v39 = (_v38 = function (_v0) {
    _v20(this, _v39), _v17(_v0), _v12(_v3, this);
    var _v1 = _v35(this);
    try {
      _v0(_v54(_v56, _v1), _v54(_v55, _v1));
    } catch (_v0) {
      _v55(_v1, _v0);
    }
  }).prototype, (_v3 = function (_v0) {
    _v36(this, {
      type: _v31,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new _v26(),
      rejection: !1,
      state: 0,
      value: null
    });
  }).prototype = _v13(_v39, "then", function (_v0, _v1) {
    var _v2 = _v35(this),
      _v3 = _v43(_v21(this, _v38));
    return _v2.parent = !0, _v3.ok = !_v18(_v0) || _v0, _v3.fail = _v18(_v1) && _v1, _v3.domain = _v9 ? _v42.domain : void 0, 0 === _v2.state ? _v2.reactions.add(_v3) : _v23(function () {
      _v48(_v3, _v2);
    }), _v3.promise;
  }), _v4 = function () {
    var _v0 = new _v3(),
      _v1 = _v35(_v0);
    this.promise = _v0, this.resolve = _v54(_v56, _v1), this.reject = _v54(_v55, _v1);
  }, _v30.f = _v43 = function (_v0) {
    return _v0 === _v38 || _v0 === _v5 ? new _v4(_v0) : _v44(_v0);
  }, !_v8 && _v18(_v28) && _v37 !== Object.prototype)) {
    _v6 = _v37.then, _v34 || _v13(_v37, "then", function (_v0, _v1) {
      var _v2 = this;
      return new _v38(function (_v0, _v1) {
        _v12(_v6, _v2, _v0, _v1);
      }).then(_v0, _v1);
    }, {
      unsafe: !0
    });
    try {
      delete _v37.constructor;
    } catch (_v0) {}
    _v14 && _v14(_v37, _v39);
  }
  _v7({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: _v32
  }, {
    Promise: _v38
  }), _v5 = _v11.Promise, _v15(_v38, _v31, !1, !0), _v16(_v31);
}