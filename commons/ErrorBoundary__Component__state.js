{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  class _v3 extends _v2.Component {
    state = {
      error: null
    };
    static getDerivedStateFromError(_v0) {
      return {
        error: _v0
      };
    }
    componentDidCatch(_v0, _v1) {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addError(_v0, {
          ..._v1,
          ...this.props.customAttributes
        });
      }), this.props.onError?.(_v0, _v1);
    }
    render() {
      if (this.state.error && this.props.errorPage) {
        let {
          errorPage: _v0
        } = this.props;
        return (0, _v1.jsx)(_v1.Fragment, {
          children: (0, _v1.jsx)(_v0, {
            error: this.state.error
          })
        });
      }
      return this.props.children;
    }
  }
  _v0.s(["ErrorBoundary", 0, _v3]);
}