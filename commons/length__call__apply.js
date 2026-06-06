{
  _v1.exports = function (_v0, _v1, _v2) {
    switch (_v2.length) {
      case 0:
        return _v0.call(_v1);
      case 1:
        return _v0.call(_v1, _v2[0]);
      case 2:
        return _v0.call(_v1, _v2[0], _v2[1]);
      case 3:
        return _v0.call(_v1, _v2[0], _v2[1], _v2[2]);
    }
    return _v0.apply(_v1, _v2);
  };
}