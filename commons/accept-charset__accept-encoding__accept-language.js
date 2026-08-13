{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  function _v7(_v0) {
    if (!(this instanceof _v7)) return new _v7(_v0);
    this.request = _v0;
  }
  _v1.exports = _v7, _v1.exports.Negotiator = _v7, _v7.prototype.charset = function (_v0) {
    var _v1 = this.charsets(_v0);
    return _v1 && _v1[0];
  }, _v7.prototype.charsets = function (_v0) {
    return _v3(this.request.headers["accept-charset"], _v0);
  }, _v7.prototype.encoding = function (_v0, _v1) {
    var _v2 = this.encodings(_v0, _v1);
    return _v2 && _v2[0];
  }, _v7.prototype.encodings = function (_v0, _v1) {
    return _v4(this.request.headers["accept-encoding"], _v0, _v1);
  }, _v7.prototype.language = function (_v0) {
    var _v1 = this.languages(_v0);
    return _v1 && _v1[0];
  }, _v7.prototype.languages = function (_v0) {
    return _v5(this.request.headers["accept-language"], _v0);
  }, _v7.prototype.mediaType = function (_v0) {
    var _v1 = this.mediaTypes(_v0);
    return _v1 && _v1[0];
  }, _v7.prototype.mediaTypes = function (_v0) {
    return _v6(this.request.headers.accept, _v0);
  }, _v7.prototype.preferredCharset = _v7.prototype.charset, _v7.prototype.preferredCharsets = _v7.prototype.charsets, _v7.prototype.preferredEncoding = _v7.prototype.encoding, _v7.prototype.preferredEncodings = _v7.prototype.encodings, _v7.prototype.preferredLanguage = _v7.prototype.language, _v7.prototype.preferredLanguages = _v7.prototype.languages, _v7.prototype.preferredMediaType = _v7.prototype.mediaType, _v7.prototype.preferredMediaTypes = _v7.prototype.mediaTypes;
}