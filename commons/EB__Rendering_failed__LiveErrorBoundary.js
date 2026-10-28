{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  class _v17 extends _v2.Component {
    static contextType = _v9.ViewerContext;
    state = {
      error: null
    };
    isTracked = !1;
    log = new _v8.Logger("🐈‍⬛EB");
    componentDidCatch(_v0, _v1) {
      this.log.error("Rendering failed:", _v0, _v1, this.props.component), this.setState({
        error: _v0
      }), this.isTracked || (0, _v15.trackLiveError)(_v0, {
        component: this.props.component || "LiveErrorBoundary",
        category: _v14.ELiveErrorCategory.GENERIC,
        data: {
          errorInfo: _v1,
          additionalInfo: this.props.additionalInfo
        }
      });
    }
    onTryResetError = () => {
      this.log.info("Resetting error:", this.state.error), this.setState({
        error: null
      });
    };
    render() {
      let {
          isDetailed: _v0 = !0,
          isResetEnabled: _v1 = !0,
          componentHandler: _v2,
          message: _v3
        } = this.props,
        {
          error: _v4
        } = this.state;
      if (_v4 && _v2) return (0, _v1.jsx)(_v2, {
        error: _v4
      });
      if (_v4) {
        let _v0 = {
            ..._v4,
            message: _v4?.message,
            name: _v4?.name
          },
          _v1 = !!(_v0 && (_v10.environmentConfig.IS_DEV || _v10.environmentConfig.IS_CI || (0, _v13.isStaffUser)(this.context?.user)) && _v4);
        return (0, _v1.jsx)(_v3.Flex, {
          id: (0, _v12.createDomName)("error-boundary"),
          className: (0, _v12.createDomName)("error-boundary"),
          direction: "column",
          grow: 1,
          position: "relative",
          width: "100%",
          height: "100%",
          children: (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            position: "absolute",
            padding: (0, _v5.rem)(20),
            textAlign: "center",
            color: "text-primary",
            width: "100%",
            height: "100%",
            children: [(0, _v1.jsxs)(_v3.Flex, {
              id: (0, _v12.createDomName)("error-boundary-title"),
              className: (0, _v12.createDomName)("error-boundary-title"),
              alignItems: "center",
              justifyContent: "center",
              children: [_v3 ?? _v11.T_ERROR_SOMETHING_UNEXPECTED, "   ", _v1 ? (0, _v1.jsx)(_v6.IconButton, {
                "aria-label": "reset",
                size: "xs",
                icon: (0, _v1.jsx)(_v7.Refresh, {}),
                onClick: this.onTryResetError
              }) : null]
            }), (0, _v1.jsx)("br", {}), _v1 ? (0, _v1.jsx)(_v16.JSONTable, {
              id: (0, _v12.createDomName)("error-boundary-details"),
              className: (0, _v12.createDomName)("error-boundary-details"),
              header: (0, _v1.jsx)(_v4.Header, {
                size: "sm",
                children: " Details (staff only): "
              }),
              data: _v0
            }) : null]
          })
        });
      }
      return this.props.children;
    }
  }
  _v0.s(["LiveErrorBoundary", 0, _v17]);
}