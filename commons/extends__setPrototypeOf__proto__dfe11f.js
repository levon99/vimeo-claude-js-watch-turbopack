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
    _v5 = _v0.e && _v0.e.__importDefault || function (_v0) {
      return _v0 && _v0.__esModule ? _v0 : {
        default: _v0
      };
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v6 = _v0.r(0),
    _v7 = _v5(_v0.r(0)),
    _v8 = _v0.r(0);
  _v2.default = function (_v0) {
    function _v1() {
      var _v0 = null !== _v0 && _v0.apply(this, arguments) || this;
      return _v0.state = {
        plansData: null,
        isLoading: !0
      }, _v0.handleSetData = function () {
        _v0.setState({
          isLoading: !0
        }), _v8.getPlansData(_v0.props.useVimeoGlobal).then(function (_v0) {
          _v0 = _v7.default(_v0), _v0.setState({
            plansData: _v0,
            isLoading: !1
          });
        });
      }, _v0;
    }
    return _v4(_v1, _v0), _v1.prototype.componentDidMount = function () {
      this.handleSetData();
    }, _v1.prototype.render = function () {
      var _v0 = this.state,
        _v1 = _v0.plansData,
        _v2 = _v0.isLoading;
      return this.props.children({
        withPlansData_plansData: _v1,
        withPlansData_isLoading: _v2
      });
    }, _v1;
  }(_v6.Component);
}