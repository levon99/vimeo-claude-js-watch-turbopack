{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "errorBoundary:chunkReloadAttempts";
  class _v4 extends _v2.Component {
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
      }), this.props.onError?.(_v0, _v1), (_v0?.name === "ChunkLoadError" || /Loading( CSS)? chunk [\w-]+ failed|Failed to load chunk/i.test(_v0?.message ?? "")) && (() => {
        let _v0;
        try {
          _v0 = Number(window.sessionStorage.getItem(_v3)) || 0;
        } catch {
          return !1;
        }
        if (!(_v0 >= 2)) {
          try {
            window.sessionStorage.setItem(_v3, String(_v0 + 1));
          } catch {
            return !1;
          }
          return window.location.reload();
        }
      })();
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
  _v0.s(["ErrorBoundary", 0, _v4]);
}