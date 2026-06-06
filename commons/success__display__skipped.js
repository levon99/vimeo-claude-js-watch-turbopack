{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  class _v4 extends _v2.default.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        hostname: ""
      };
    }
    static onUIUpdate(_v0) {
      let _v1 = _v0.getMomentType(),
        _v2 = "";
      switch (_v1) {
        case "display":
          _v2 = _v0.isNotDisplayed() ? _v0.getNotDisplayedReason() : "success";
          break;
        case "skipped":
          _v2 = _v0.getSkippedReason();
          break;
        case "dismissed":
          _v2 = _v0.getDismissedReason();
      }
      let _v3 = new CustomEvent("got-display", {
        detail: {
          type: _v1,
          subtype: _v2
        }
      });
      document.dispatchEvent(_v3), _v4.logEvent({
        component: _v1,
        keyword: _v2
      });
    }
    static logEvent(_v0) {
      _v3.FatalAttraction.trackEvent({
        container: "google_one_tap",
        ..._v0
      });
    }
    componentDidMount() {
      this.setState({
        hostname: document.location.hostname
      }), this.appendOneTapJS();
    }
    appendOneTapJS() {
      window.onGoogleOneTapUpdate = _v4.onUIUpdate;
      let _v0 = document.createElement("script");
      _v0.src = "https://accounts.google.com/gsi/client", _v0.async = !0, _v0.defer = !0, document.body.appendChild(_v0);
    }
    render() {
      let {
          clientId: _v0,
          style: _v1,
          xsrft: _v2,
          redirectUrl: _v3,
          turnstileToken: _v4
        } = this.props,
        _v5 = this.state.hostname || "",
        _v6 = "";
      return _v0 && _v2 ? (_v3 && (_v6 = `?redirect=${_v3}`), (0, _v1.jsx)("div", {
        id: "g_id_onload",
        style: _v1,
        "data-action": "join",
        "data-cancel_on_tap_outside": "false",
        "data-client_id": _v0,
        "data-login_uri": `https://${_v5}/join${_v6}`,
        "data-one_tap": "1",
        "data-moment_callback": "onGoogleOneTapUpdate",
        "data-prompt_parent_id": "g_id_onload",
        "data-service": "google",
        "data-token": _v2,
        "data-turnstile_token": _v4
      })) : null;
    }
  }
  _v0.s(["default", 0, _v4]);
}