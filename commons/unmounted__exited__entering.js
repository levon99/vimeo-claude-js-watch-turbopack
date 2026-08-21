{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = "unmounted",
    _v8 = "exited",
    _v9 = "entering",
    _v10 = "entered",
    _v11 = "exiting",
    _v12 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2,
          _v3 = _v0.call(this, _v0, _v1) || this,
          _v4 = _v1 && !_v1.isMounting ? _v0.enter : _v0.appear;
        return _v3.appearStatus = null, _v0.in ? _v4 ? (_v2 = _v8, _v3.appearStatus = _v9) : _v2 = _v10 : _v2 = _v0.unmountOnExit || _v0.mountOnEnter ? _v7 : _v8, _v3.state = {
          status: _v2
        }, _v3.nextCallback = null, _v3;
      }
      (0, _v2.default)(_v1, _v0), _v1.getDerivedStateFromProps = function (_v0, _v1) {
        return _v0.in && _v1.status === _v7 ? {
          status: _v8
        } : null;
      };
      var _v2 = _v1.prototype;
      return _v2.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }, _v2.componentDidUpdate = function (_v0) {
        var _v1 = null;
        if (_v0 !== this.props) {
          var _v2 = this.state.status;
          this.props.in ? _v2 !== _v9 && _v2 !== _v10 && (_v1 = _v9) : (_v2 === _v9 || _v2 === _v10) && (_v1 = _v11);
        }
        this.updateStatus(!1, _v1);
      }, _v2.componentWillUnmount = function () {
        this.cancelNextCallback();
      }, _v2.getTimeouts = function () {
        var _v0,
          _v1,
          _v2,
          _v3 = this.props.timeout;
        return _v0 = _v1 = _v2 = _v3, null != _v3 && "number" != typeof _v3 && (_v0 = _v3.exit, _v1 = _v3.enter, _v2 = void 0 !== _v3.appear ? _v3.appear : _v1), {
          exit: _v0,
          enter: _v1,
          appear: _v2
        };
      }, _v2.updateStatus = function (_v0, _v1) {
        if (void 0 === _v0 && (_v0 = !1), null !== _v1) {
          if (this.cancelNextCallback(), _v1 === _v9) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var _v2 = this.props.nodeRef ? this.props.nodeRef.current : _v4.default.findDOMNode(this);
              _v2 && _v2.scrollTop;
            }
            this.performEnter(_v0);
          } else this.performExit();
        } else this.props.unmountOnExit && this.state.status === _v8 && this.setState({
          status: _v7
        });
      }, _v2.performEnter = function (_v0) {
        var _v1 = this,
          _v2 = this.props.enter,
          _v3 = this.context ? this.context.isMounting : _v0,
          _v4 = this.props.nodeRef ? [_v3] : [_v4.default.findDOMNode(this), _v3],
          _v5 = _v4[0],
          _v6 = _v4[1],
          _v7 = this.getTimeouts(),
          _v8 = _v3 ? _v7.appear : _v7.enter;
        (_v0 || _v2) && !_v5.default.disabled ? (this.props.onEnter(_v5, _v6), this.safeSetState({
          status: _v9
        }, function () {
          _v1.props.onEntering(_v5, _v6), _v1.onTransitionEnd(_v8, function () {
            _v1.safeSetState({
              status: _v10
            }, function () {
              _v1.props.onEntered(_v5, _v6);
            });
          });
        })) : this.safeSetState({
          status: _v10
        }, function () {
          _v1.props.onEntered(_v5);
        });
      }, _v2.performExit = function () {
        var _v0 = this,
          _v1 = this.props.exit,
          _v2 = this.getTimeouts(),
          _v3 = this.props.nodeRef ? void 0 : _v4.default.findDOMNode(this);
        !_v1 || _v5.default.disabled ? this.safeSetState({
          status: _v8
        }, function () {
          _v0.props.onExited(_v3);
        }) : (this.props.onExit(_v3), this.safeSetState({
          status: _v11
        }, function () {
          _v0.props.onExiting(_v3), _v0.onTransitionEnd(_v2.exit, function () {
            _v0.safeSetState({
              status: _v8
            }, function () {
              _v0.props.onExited(_v3);
            });
          });
        }));
      }, _v2.cancelNextCallback = function () {
        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null);
      }, _v2.safeSetState = function (_v0, _v1) {
        _v1 = this.setNextCallback(_v1), this.setState(_v0, _v1);
      }, _v2.setNextCallback = function (_v0) {
        var _v1 = this,
          _v2 = !0;
        return this.nextCallback = function (_v0) {
          _v2 && (_v2 = !1, _v1.nextCallback = null, _v0(_v0));
        }, this.nextCallback.cancel = function () {
          _v2 = !1;
        }, this.nextCallback;
      }, _v2.onTransitionEnd = function (_v0, _v1) {
        this.setNextCallback(_v1);
        var _v2 = this.props.nodeRef ? this.props.nodeRef.current : _v4.default.findDOMNode(this),
          _v3 = null == _v0 && !this.props.addEndListener;
        if (!_v2 || _v3) return void setTimeout(this.nextCallback, 0);
        if (this.props.addEndListener) {
          var _v4 = this.props.nodeRef ? [this.nextCallback] : [_v2, this.nextCallback],
            _v5 = _v4[0],
            _v6 = _v4[1];
          this.props.addEndListener(_v5, _v6);
        }
        null != _v0 && setTimeout(this.nextCallback, _v0);
      }, _v2.render = function () {
        var _v0 = this.state.status;
        if (_v0 === _v7) return null;
        var _v1 = this.props,
          _v2 = _v1.children,
          _v3 = (_v1.in, _v1.mountOnEnter, _v1.unmountOnExit, _v1.appear, _v1.enter, _v1.exit, _v1.timeout, _v1.addEndListener, _v1.onEnter, _v1.onEntering, _v1.onEntered, _v1.onExit, _v1.onExiting, _v1.onExited, _v1.nodeRef, (0, _v1.default)(_v1, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
        return _v3.default.createElement(_v6.default.Provider, {
          value: null
        }, "function" == typeof _v2 ? _v2(_v0, _v3) : _v3.default.cloneElement(_v3.default.Children.only(_v2), _v3));
      }, _v1;
    }(_v3.default.Component);
  function _v13() {}
  _v12.contextType = _v6.default, _v12.propTypes = {}, _v12.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: _v13,
    onEntering: _v13,
    onEntered: _v13,
    onExit: _v13,
    onExiting: _v13,
    onExited: _v13
  }, _v12.UNMOUNTED = _v7, _v12.EXITED = _v8, _v12.ENTERING = _v9, _v12.ENTERED = _v10, _v12.EXITING = _v11, _v0.s(["Transition", 0, _v12], 0);
}