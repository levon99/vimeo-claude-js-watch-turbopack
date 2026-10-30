{
  "use strict";

  var _v3 = function () {
    this.head = null, this.tail = null;
  };
  _v3.prototype = {
    add: function (_v0) {
      var _v1 = {
          item: _v0,
          next: null
        },
        _v2 = this.tail;
      _v2 ? _v2.next = _v1 : this.head = _v1, this.tail = _v1;
    },
    get: function () {
      var _v0 = this.head;
      if (_v0) return null === (this.head = _v0.next) && (this.tail = null), _v0.item;
    }
  }, _v1.exports = _v3;
}