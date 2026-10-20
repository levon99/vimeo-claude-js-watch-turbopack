{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  (0, _v2.withPageSetup)(_v6.fileViewerGetServerSideProps, {
    inlineViewer: "all",
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    file: _v0,
    publicId: _v1,
    requiresPassword: _v2
  }) => _v2 ? (0, _v1.jsx)(_v3.FilePasswordPage, {
    publicId: _v1
  }, _v1) : null === _v0 ? (0, _v1.jsx)(_v4.FileUnavailablePage, {}) : (0, _v1.jsx)(_v5.FileViewerPage, {
    file: _v0
  }, _v1)], 0);
}