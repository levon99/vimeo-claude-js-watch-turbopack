{
  "use strict";

  let _v1,
    _v2 = () => window.location.host.endsWith(".ci.vimeows.com") || window.location.host.endsWith("vimeo.dev") || window.location.host.endsWith("vimeows.work") ? "//canvaskit.beast.cdn.create.vimeo.com" : "//canvaskit.cdn.create.vimeo.com",
    _v3 = "0423b74",
    _v4 = async () => new Promise(_v0 => {
      let _v1 = `${_v2()}/${_v3}/lottie.js`,
        _v2 = `${_v2()}/${_v3}/canvaskit.js`,
        _v3 = `${_v2()}/${_v3}/canvaskit.wasm`;
      if (_v1) return void _v0(_v1);
      let _v4 = document.createElement("script"),
        _v5 = document.createElement("script");
      _v4.src = _v1, document.body.appendChild(_v4), _v4.onload = () => {
        _v5.src = _v2, document.body.appendChild(_v5), _v5.onload = () => {
          window.CanvasKitInit({
            locateFile: () => _v3
          }).then(_v0 => {
            _v1 = _v0, _v0(_v0);
          });
        };
      };
    });
  _v0.s(["initScripts", 0, _v4]);
}