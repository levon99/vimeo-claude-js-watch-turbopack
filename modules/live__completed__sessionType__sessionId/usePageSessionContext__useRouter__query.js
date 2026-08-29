{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["usePageSessionContext", 0, function () {
    let _v0 = (0, _v1.useRouter)(),
      _v1 = _v0?.query?.sessionId ?? null,
      _v2 = _v0?.query?.sessionCode ?? null;
    return {
      sessionId: _v1,
      sessionType: (0, _v2.transformUriParamToSessionType)(_v0?.query?.sessionType),
      sessionCode: _v2
    };
  }]);
}