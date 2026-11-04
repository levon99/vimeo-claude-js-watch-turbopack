{
  "use strict";

  _v0.s(["EmbedPlayerUtility", 0, class {
    static createEmbedUrl(_v0, _v1) {
      if (!_v0) return "";
      if (!_v1) return _v0;
      let _v2 = new URL(_v0);
      return Object.keys(_v1).forEach(_v0 => {
        _v2.searchParams.set(_v0, String(_v1[_v0]));
      }), _v2.href;
    }
  }]);
}