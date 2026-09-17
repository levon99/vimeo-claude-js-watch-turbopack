{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useEnterpriseSiteRedirect", 0, _v0 => {
    let _v1 = (0, _v1.useRouter)();
    if (_v0) {
      let _v0 = new URL(_v0).hostname;
      _v0 && window.location.host !== _v0 && window.location.replace(_v0 + _v1.asPath);
    }
  }]);
}