{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v0.r(0), _v0.r(0);
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  window.next = {
    version: _v3.version,
    turbopack: !0,
    get router() {
      return _v3.router;
    },
    emitter: _v3.emitter
  }, self.__next_set_public_path__ = () => {}, self.__webpack_hash__ = "", (0, _v3.initialize)({}).then(() => (self.__turbopack_load_page_chunks__ = (_v0, _v1) => {
    Promise.all(_v1.map(_v0 => _v0.l(_v0))).catch(_v0 => console.error("failed to load chunks for page " + _v0, _v0));
  }, (0, _v3.hydrate)({
    beforeRender: _v4.displayContent
  }))).catch(_v0 => {
    console.error("Error was not caught", _v0);
  }), ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}