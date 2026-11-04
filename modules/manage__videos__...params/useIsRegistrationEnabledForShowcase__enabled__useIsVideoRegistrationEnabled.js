{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useIsRegistrationEnabledForShowcase", 0, _v0 => {
    let _v1,
      _v2 = (_v1 = _v3.ENTITY_TYPE.SHOWCASE, (0, _v2.useGetLeadCaptureResourceIdForm)({
        select: ["enabled"],
        where: {
          resourceId: _v0,
          resourceType: _v3.ENTITY_TO_PATH_MAP[_v1]
        }
      }, {
        revalidateOnMount: !1,
        revalidateOnFocus: !1,
        shouldRetryOnError: !1
      })),
      {
        mutate: _v3,
        data: _v4,
        error: _v5,
        isValidating: _v6,
        isLoading: _v7
      } = _v2;
    return (0, _v1.useEffect)(() => {
      _v4 || _v5 || _v6 || _v7 || !_v0 || _v3();
    }, [_v0]), _v2;
  }, "useIsVideoRegistrationEnabled", 0, _v0 => (0, _v4.useConfigStore)(_v0 => _v0.leadCaptureFormEntityId === _v0 ? _v0.leadCaptureForm.enabled : void 0)]);
}