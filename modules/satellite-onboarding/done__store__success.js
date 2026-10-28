{
  "use strict";

  let _v1,
    _v2,
    _v3,
    _v4,
    _v5 = (_v0, _v1) => _v1.some(_v0 => _v0 instanceof _v0),
    _v6 = new WeakMap(),
    _v7 = new WeakMap(),
    _v8 = new WeakMap(),
    _v9 = {
      get(_v0, _v1, _v2) {
        if (_v0 instanceof IDBTransaction) {
          if ("done" === _v1) return _v6.get(_v0);
          if ("store" === _v1) return _v2.objectStoreNames[1] ? void 0 : _v2.objectStore(_v2.objectStoreNames[0]);
        }
        return _v10(_v0[_v1]);
      },
      set: (_v0, _v1, _v2) => (_v0[_v1] = _v2, !0),
      has: (_v0, _v1) => _v0 instanceof IDBTransaction && ("done" === _v1 || "store" === _v1) || _v1 in _v0
    };
  function _v10(_v0) {
    if (_v0 instanceof IDBRequest) {
      let _v0;
      return _v0 = new Promise((_v0, _v1) => {
        let _v2 = () => {
            _v0.removeEventListener("success", _v3), _v0.removeEventListener("error", _v4);
          },
          _v3 = () => {
            _v0(_v10(_v0.result)), _v2();
          },
          _v4 = () => {
            _v1(_v0.error), _v2();
          };
        _v0.addEventListener("success", _v3), _v0.addEventListener("error", _v4);
      }), _v8.set(_v0, _v0), _v0;
    }
    if (_v7.has(_v0)) return _v7.get(_v0);
    let _v1 = function (_v0) {
      if ("function" == typeof _v0) return (_v4 || (_v4 = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(_v0) ? function (..._v0) {
        return _v0.apply(_v11(this), _v0), _v10(this.request);
      } : function (..._v0) {
        return _v10(_v0.apply(_v11(this), _v0));
      };
      return (_v0 instanceof IDBTransaction && function (_v0) {
        if (_v6.has(_v0)) return;
        let _v1 = new Promise((_v0, _v1) => {
          let _v2 = () => {
              _v0.removeEventListener("complete", _v3), _v0.removeEventListener("error", _v4), _v0.removeEventListener("abort", _v4);
            },
            _v3 = () => {
              _v0(), _v2();
            },
            _v4 = () => {
              _v1(_v0.error || new DOMException("AbortError", "AbortError")), _v2();
            };
          _v0.addEventListener("complete", _v3), _v0.addEventListener("error", _v4), _v0.addEventListener("abort", _v4);
        });
        _v6.set(_v0, _v1);
      }(_v0), _v5(_v0, _v3 || (_v3 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(_v0, _v9) : _v0;
    }(_v0);
    return _v1 !== _v0 && (_v7.set(_v0, _v1), _v8.set(_v1, _v0)), _v1;
  }
  let _v11 = _v0 => _v8.get(_v0),
    _v12 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    _v13 = ["put", "add", "delete", "clear"],
    _v14 = new Map();
  function _v15(_v0, _v1) {
    if (!(_v0 instanceof IDBDatabase && !(_v1 in _v0) && "string" == typeof _v1)) return;
    if (_v14.get(_v1)) return _v14.get(_v1);
    let _v2 = _v1.replace(/FromIndex$/, ""),
      _v3 = _v1 !== _v2,
      _v4 = _v13.includes(_v2);
    if (!(_v2 in (_v3 ? IDBIndex : IDBObjectStore).prototype) || !(_v4 || _v12.includes(_v2))) return;
    let _v5 = async function (_v0, ..._v1) {
      let _v2 = this.transaction(_v0, _v4 ? "readwrite" : "readonly"),
        _v3 = _v2.store;
      return _v3 && (_v3 = _v3.index(_v1.shift())), (await Promise.all([_v3[_v2](..._v1), _v4 && _v2.done]))[0];
    };
    return _v14.set(_v1, _v5), _v5;
  }
  _v9 = {
    ...(_v1 = _v9),
    get: (_v0, _v1, _v2) => _v15(_v0, _v1) || _v1.get(_v0, _v1, _v2),
    has: (_v0, _v1) => !!_v15(_v0, _v1) || _v1.has(_v0, _v1)
  };
  let _v16 = ["continue", "continuePrimaryKey", "advance"],
    _v17 = {},
    _v18 = new WeakMap(),
    _v19 = new WeakMap(),
    _v20 = {
      get(_v0, _v1) {
        if (!_v16.includes(_v1)) return _v0[_v1];
        let _v2 = _v17[_v1];
        return _v2 || (_v2 = _v17[_v1] = function (..._v0) {
          _v18.set(this, _v19.get(this)[_v1](..._v0));
        }), _v2;
      }
    };
  async function* _v21(..._v0) {
    let _v1 = this;
    if (_v1 instanceof IDBCursor || (_v1 = await _v1.openCursor(..._v0)), !_v1) return;
    let _v2 = new Proxy(_v1, _v20);
    for (_v19.set(_v2, _v1), _v8.set(_v2, _v11(_v1)); _v1;) yield _v2, _v1 = await (_v18.get(_v2) || _v1.continue()), _v18.delete(_v2);
  }
  function _v22(_v0, _v1) {
    return _v1 === Symbol.asyncIterator && _v5(_v0, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === _v1 && _v5(_v0, [IDBIndex, IDBObjectStore]);
  }
  _v9 = {
    ...(_v2 = _v9),
    get: (_v0, _v1, _v2) => _v22(_v0, _v1) ? _v21 : _v2.get(_v0, _v1, _v2),
    has: (_v0, _v1) => _v22(_v0, _v1) || _v2.has(_v0, _v1)
  }, _v0.s(["openDB", 0, function (_v0, _v1, {
    blocked: _v2,
    upgrade: _v3,
    blocking: _v4,
    terminated: _v5
  } = {}) {
    let _v6 = indexedDB.open(_v0, _v1),
      _v7 = _v10(_v6);
    return _v3 && _v6.addEventListener("upgradeneeded", _v0 => {
      _v3(_v10(_v6.result), _v0.oldVersion, _v0.newVersion, _v10(_v6.transaction), _v0);
    }), _v2 && _v6.addEventListener("blocked", _v0 => _v2(_v0.oldVersion, _v0.newVersion, _v0)), _v7.then(_v0 => {
      _v5 && _v0.addEventListener("close", () => _v5()), _v4 && _v0.addEventListener("versionchange", _v0 => _v4(_v0.oldVersion, _v0.newVersion, _v0));
    }).catch(() => {}), _v7;
  }]);
}