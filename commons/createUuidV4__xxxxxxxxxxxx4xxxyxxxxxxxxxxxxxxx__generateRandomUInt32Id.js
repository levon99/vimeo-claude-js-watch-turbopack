{
  "use strict";

  _v0.s(["createUuidV4", 0, () => "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, _v0 => {
    let _v1 = 16 * Math.random() | 0;
    return ("x" === _v0 ? _v1 : 3 & _v1 | 8).toString(16);
  }), "generateRandomUInt32Id", 0, function () {
    return Math.floor(0 * Math.random());
  }]);
}