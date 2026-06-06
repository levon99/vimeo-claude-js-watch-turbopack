{
  "use strict";

  let _v1 = "vimeo_nextjs_gctl_request_duration_seconds";
  async function _v2(_v0, _v1, _v2) {
    let _v3 = globalThis.__metrics;
    if (!_v3) return _v2();
    let _v4 = performance.now();
    try {
      let _v0 = await _v2();
      return _v3.histogram(_v1, {
        operation: _v0,
        status_code: "2xx"
      }, (performance.now() - _v4) / 0), _v0;
    } catch (_v0) {
      throw _v3.histogram(_v1, {
        operation: _v0,
        status_code: function (_v0) {
          if (_v0 && "object" == typeof _v0 && "status" in _v0) {
            let _v0 = _v0.status;
            if ("number" == typeof _v0) return String(_v0);
          }
          return "error";
        }(_v0)
      }, (performance.now() - _v4) / 0), _v0;
    }
  }
  _v0.s(["measureLatency", 0, _v2]);
}