{
  var _v3 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  _v1.exports = function (_v0) {
    return _v0.match(_v3) || [];
  };
}