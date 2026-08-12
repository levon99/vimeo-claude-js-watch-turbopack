{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = async _v0 => {
    let _v1 = (await _v2.default.getDecrypted("clip.svv.secret")) ?? "",
      _v2 = Date.now() + 0,
      _v3 = _v1.default.createHmac("sha256", _v1);
    return _v3.update(`${_v0}:${_v2}:clip_page`), `${_v3.digest("hex")}_${_v2}`;
  };
  _v0.s(["getClipSignature", 0, _v3]);
}