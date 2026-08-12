{
  "use strict";

  _v1.exports = function (_v0) {
    return encodeURIComponent(_v0).replace(/[!'()*]/g, function (_v0) {
      return "%" + _v0.charCodeAt(0).toString(16).toUpperCase();
    });
  };
}