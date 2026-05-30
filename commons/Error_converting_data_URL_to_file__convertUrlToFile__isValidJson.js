{
  "use strict";

  let _v1 = async (_v0, _v1) => {
    try {
      let _v0 = await fetch(_v0),
        _v1 = await _v0.blob();
      return new File([_v1], _v1, {
        type: _v1.type
      });
    } catch (_v0) {
      throw console.error("Error converting data URL to file:", _v0), _v0;
    }
  };
  _v0.s(["convertUrlToFile", 0, _v1, "isValidJson", 0, _v0 => {
    try {
      return JSON.parse(_v0), !0;
    } catch (_v0) {
      return !1;
    }
  }]);
}