{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v1.measureLatency)("getInternalPageLiveRtcStudio", "GET", async () => {
      let _v0 = await fetch(`${_v0}/internal/page/live/rtc_studio?${(0, _v2.searchQueryString)(_v2)}&fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  _v0.s(["getInternalPageLiveRtcStudio", 0, _v3]);
}