{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useLeadCaptureDetails", 0, (_v0, _v1) => {
    let [_v2, {
      data: _v3,
      called: _v4,
      loading: _v5
    }] = (0, _v2.useGetLeadCaptureResourceIdFormLazy)();
    (0, _v1.useEffect)(() => {
      _v0 && _v2({
        where: {
          resourceId: _v1,
          resourceType: _v3.ENTITY_TO_PATH_MAP[_v0]
        },
        select: ["uuid"]
      });
    }, [_v1, _v0]), (0, _v1.useEffect)(() => {
      _v4.useConfigStore.setState({
        entityType: _v0,
        entityId: _v1
      });
    }, [_v1, _v0]), (0, _v1.useEffect)(() => {
      !_v5 && _v4 && _v4.useConfigStore.setState({
        leadCaptureFormUuid: _v3?.uuid ?? null
      });
    }, [_v4, _v3, _v5]);
  }]);
}