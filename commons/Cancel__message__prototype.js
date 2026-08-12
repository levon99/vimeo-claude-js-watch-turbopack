{
  "use strict";

  function _v3(_v0) {
    this.message = _v0;
  }
  _v3.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, _v3.prototype.__CANCEL__ = !0, _v1.exports = _v3;
}