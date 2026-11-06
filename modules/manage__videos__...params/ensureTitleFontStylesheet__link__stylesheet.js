{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["ensureTitleFontStylesheet", 0, function (_v0) {
    if ("u" < typeof document || !_v0) return;
    let _v1 = (0, _v1.titleFontHrefById)(_v0);
    if (!_v1) return;
    let _v2 = `custom-page-font-${_v0}`;
    if (document.getElementById(_v2)) return;
    let _v3 = document.createElement("link");
    _v3.id = _v2, _v3.rel = "stylesheet", _v3.href = _v1, document.head.appendChild(_v3);
  }], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v2.measureLatency)("postUserVideosPageCustomization", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/videos/page_customization?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v3.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  _v0.s(["postUserVideosPageCustomization", 0, _v4], 0);
}