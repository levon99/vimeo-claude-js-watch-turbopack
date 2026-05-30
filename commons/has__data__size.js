{
  _v1.exports = function (_v0) {
    var _v1 = this.has(_v0) && delete this.__data__[_v0];
    return this.size -= !!_v1, _v1;
  };
}