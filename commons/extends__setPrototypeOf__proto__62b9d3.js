{
  "use strict";

  var _v3,
    _v4 = _v0.e && _v0.e.__extends || (_v3 = function (_v0, _v1) {
      return (_v3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (_v0, _v1) {
        _v0.__proto__ = _v1;
      } || function (_v0, _v1) {
        for (var _v2 in _v1) _v1.hasOwnProperty(_v2) && (_v0[_v2] = _v1[_v2]);
      })(_v0, _v1);
    }, function (_v0, _v1) {
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
    },
    _v6 = _v0.e && _v0.e.__importStar || function (_v0) {
      if (_v0 && _v0.__esModule) return _v0;
      var _v1 = {};
      if (null != _v0) for (var _v2 in _v0) Object.hasOwnProperty.call(_v0, _v2) && (_v1[_v2] = _v0[_v2]);
      return _v1.default = _v0, _v1;
    },
    _v7 = _v0.e && _v0.e.__importDefault || function (_v0) {
      return _v0 && _v0.__esModule ? _v0 : {
        default: _v0
      };
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v8 = _v6(_v0.r(0)),
    _v9 = _v7(_v0.r(0)),
    _v10 = _v0.r(0);
  _v2.withPlansData = function (_v0, _v1) {
    var _v2 = _v8.Component;
    function _v3() {
      var _v0 = null !== _v2 && _v2.apply(this, arguments) || this;
      return _v0.state = {
        plansData: null,
        isLoading: !0
      }, _v0.handleSetData = function () {
        _v10.getPlansData(_v1).then(function (_v0) {
          _v0 = _v9.default(_v0), _v0.setState({
            plansData: _v0,
            isLoading: !1
          });
        });
      }, _v0;
    }
    return _v4(_v3, _v2), _v3.prototype.componentDidMount = function () {
      this.handleSetData();
    }, _v3.prototype.render = function () {
      return _v8.default.createElement(_v0, _v5({}, this.props, {
        withPlansData_plansData: this.state.plansData,
        withPlansData_isLoading: this.state.isLoading
      }));
    }, _v3;
  };
}