{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addError(_v0);
      }), (0, _v2.reportError)(Error(_v0));
    },
    _v4 = () => {
      let _v0,
        _v1 = document.getElementById("viewer-bootstrap");
      if (!_v1) return null;
      try {
        if (_v0 = _v5(JSON.parse(_v1.innerText)), "object" != typeof _v0 || 0 === Object.keys(_v0).length) return _v3("Viewer bootstrap in DOM, but empty"), null;
        return _v0;
      } catch {
        return _v3("Viewer bootstrap failed to parse"), null;
      }
    };
  function _v5(_v0) {
    let {
        playerAssetUrls: _v1,
        ..._v2
      } = _v0,
      _v3 = (0, _v1.camelizeDeep)(_v2);
    return _v1 && (_v3.playerAssetUrls = _v1), _v3;
  }
  _v0.s(["getViewerBootstrap", 0, _v4, "getViewerPromise", 0, () => new Promise(_v0 => {
    let _v1 = _v4();
    if (_v1) _v0(_v1);else {
      let _v0 = () => fetch("/_next/viewer").then(_v0 => {
        if (!_v0.ok) throw Error(`Viewer bootstrap request failed: ${_v0.status}`);
        return _v0.json();
      });
      _v0(_v0().catch(() => (_v3("Viewer bootstrap request failed, retrying once"), _v0())).then(_v5).catch(_v0 => (_v3(`Viewer bootstrap unavailable: ${String(_v0)}`), null)));
    }
  })]);
}