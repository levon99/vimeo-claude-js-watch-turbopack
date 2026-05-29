{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useFetchAppsData", 0, function (_v0 = !0) {
    let [_v1, _v2] = (0, _v1.useState)(null),
      [_v3, _v4] = (0, _v1.useState)(!0),
      [_v5, _v6] = (0, _v1.useState)(),
      _v7 = () => {
        _v4(!0), fetch("/settings/apps?action=fetch_user").then(_v0 => _v0.json()).then(_v0 => {
          _v2(_v0), window.__vimeo_integration_center__ = _v0;
        }).catch(_v0 => {
          console.error("Error fetching data:", _v0), _v6(_v0);
        }).finally(() => _v4(!1));
      };
    return (0, _v1.useEffect)(() => {
      window?.__vimeo_integration_center__ && _v0 ? (_v2(window.__vimeo_integration_center__), _v4(!1)) : _v7();
    }, [_v0]), {
      data: _v1,
      isLoading: _v3,
      fetchData: _v7,
      error: _v5
    };
  }]);
}