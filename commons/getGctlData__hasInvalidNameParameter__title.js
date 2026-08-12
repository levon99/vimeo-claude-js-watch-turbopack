{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getGctlData", 0, () => ({
    baseUrl: _v1.ApiCredentialsStore.getState().baseUrl,
    headers: {
      ..._v1.ApiCredentialsStore.getState().getApiHeaders()
    }
  }), "hasInvalidNameParameter", 0, _v0 => _v0?.invalid_parameters?.some(_v0 => "title" === _v0.field) ?? !1]);
}