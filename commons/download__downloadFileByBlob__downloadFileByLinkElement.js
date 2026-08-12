{
  "use strict";

  function _v1(_v0) {
    let _v1 = document.createElement("a");
    _v1.href = _v0, _v1.download = "download", window.document.body.appendChild(_v1), _v1.click(), window.document.body.removeChild(_v1);
  }
  _v0.s(["downloadFileByBlob", 0, function (_v0, _v1) {
    let _v2 = document.createElement("a");
    _v2.href = URL.createObjectURL(_v1), _v2.download = _v0, window.document.body.appendChild(_v2), _v2.click(), window.document.body.removeChild(_v2);
  }, "downloadFileByLinkElement", 0, _v1, "downloadFileByPlatform", 0, function (_v0, _v1) {
    let _v2, _v3;
    _v1((_v2 = window.navigator, _v3 = _v2.userAgentData?.platform ?? _v2.platform ?? "", /(Mac|iPhone|iPod|iPad)/i.test(_v3)) ? _v0 : _v1);
  }], 0);
}