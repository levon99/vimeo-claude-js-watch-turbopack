{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  function _v7(_v0) {
    return _v0.call.bind(_v0);
  }
  var _v8 = "u" > typeof BigInt,
    _v9 = "u" > typeof Symbol,
    _v10 = _v7(Object.prototype.toString),
    _v11 = _v7(Number.prototype.valueOf),
    _v12 = _v7(String.prototype.valueOf),
    _v13 = _v7(Boolean.prototype.valueOf);
  if (_v8) var _v14 = _v7(BigInt.prototype.valueOf);
  if (_v9) var _v15 = _v7(Symbol.prototype.valueOf);
  function _v16(_v0, _v1) {
    if ("object" != typeof _v0) return !1;
    try {
      return _v1(_v0), !0;
    } catch (_v0) {
      return !1;
    }
  }
  function _v17(_v0) {
    return "[object Map]" === _v10(_v0);
  }
  function _v18(_v0) {
    return "[object Set]" === _v10(_v0);
  }
  function _v19(_v0) {
    return "[object WeakMap]" === _v10(_v0);
  }
  function _v20(_v0) {
    return "[object WeakSet]" === _v10(_v0);
  }
  function _v21(_v0) {
    return "[object ArrayBuffer]" === _v10(_v0);
  }
  function _v22(_v0) {
    return !("u" < typeof ArrayBuffer) && (_v21.working ? _v21(_v0) : _v0 instanceof ArrayBuffer);
  }
  function _v23(_v0) {
    return "[object DataView]" === _v10(_v0);
  }
  function _v24(_v0) {
    return !("u" < typeof DataView) && (_v23.working ? _v23(_v0) : _v0 instanceof DataView);
  }
  _v2.isArgumentsObject = _v3, _v2.isGeneratorFunction = _v4, _v2.isTypedArray = _v6, _v2.isPromise = function (_v0) {
    return "u" > typeof Promise && _v0 instanceof Promise || null !== _v0 && "object" == typeof _v0 && "function" == typeof _v0.then && "function" == typeof _v0.catch;
  }, _v2.isArrayBufferView = function (_v0) {
    return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(_v0) : _v6(_v0) || _v24(_v0);
  }, _v2.isUint8Array = function (_v0) {
    return "Uint8Array" === _v5(_v0);
  }, _v2.isUint8ClampedArray = function (_v0) {
    return "Uint8ClampedArray" === _v5(_v0);
  }, _v2.isUint16Array = function (_v0) {
    return "Uint16Array" === _v5(_v0);
  }, _v2.isUint32Array = function (_v0) {
    return "Uint32Array" === _v5(_v0);
  }, _v2.isInt8Array = function (_v0) {
    return "Int8Array" === _v5(_v0);
  }, _v2.isInt16Array = function (_v0) {
    return "Int16Array" === _v5(_v0);
  }, _v2.isInt32Array = function (_v0) {
    return "Int32Array" === _v5(_v0);
  }, _v2.isFloat32Array = function (_v0) {
    return "Float32Array" === _v5(_v0);
  }, _v2.isFloat64Array = function (_v0) {
    return "Float64Array" === _v5(_v0);
  }, _v2.isBigInt64Array = function (_v0) {
    return "BigInt64Array" === _v5(_v0);
  }, _v2.isBigUint64Array = function (_v0) {
    return "BigUint64Array" === _v5(_v0);
  }, _v17.working = "u" > typeof Map && _v17(new Map()), _v2.isMap = function (_v0) {
    return !("u" < typeof Map) && (_v17.working ? _v17(_v0) : _v0 instanceof Map);
  }, _v18.working = "u" > typeof Set && _v18(new Set()), _v2.isSet = function (_v0) {
    return !("u" < typeof Set) && (_v18.working ? _v18(_v0) : _v0 instanceof Set);
  }, _v19.working = "u" > typeof WeakMap && _v19(new WeakMap()), _v2.isWeakMap = function (_v0) {
    return !("u" < typeof WeakMap) && (_v19.working ? _v19(_v0) : _v0 instanceof WeakMap);
  }, _v20.working = "u" > typeof WeakSet && _v20(new WeakSet()), _v2.isWeakSet = function (_v0) {
    return _v20(_v0);
  }, _v21.working = "u" > typeof ArrayBuffer && _v21(new ArrayBuffer()), _v2.isArrayBuffer = _v22, _v23.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && _v23(new DataView(new ArrayBuffer(1), 0, 1)), _v2.isDataView = _v24;
  var _v25 = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
  function _v26(_v0) {
    return "[object SharedArrayBuffer]" === _v10(_v0);
  }
  function _v27(_v0) {
    return void 0 !== _v25 && (void 0 === _v26.working && (_v26.working = _v26(new _v25())), _v26.working ? _v26(_v0) : _v0 instanceof _v25);
  }
  function _v28(_v0) {
    return _v16(_v0, _v11);
  }
  function _v29(_v0) {
    return _v16(_v0, _v12);
  }
  function _v30(_v0) {
    return _v16(_v0, _v13);
  }
  function _v31(_v0) {
    return _v8 && _v16(_v0, _v14);
  }
  function _v32(_v0) {
    return _v9 && _v16(_v0, _v15);
  }
  _v2.isSharedArrayBuffer = _v27, _v2.isAsyncFunction = function (_v0) {
    return "[object AsyncFunction]" === _v10(_v0);
  }, _v2.isMapIterator = function (_v0) {
    return "[object Map Iterator]" === _v10(_v0);
  }, _v2.isSetIterator = function (_v0) {
    return "[object Set Iterator]" === _v10(_v0);
  }, _v2.isGeneratorObject = function (_v0) {
    return "[object Generator]" === _v10(_v0);
  }, _v2.isWebAssemblyCompiledModule = function (_v0) {
    return "[object WebAssembly.Module]" === _v10(_v0);
  }, _v2.isNumberObject = _v28, _v2.isStringObject = _v29, _v2.isBooleanObject = _v30, _v2.isBigIntObject = _v31, _v2.isSymbolObject = _v32, _v2.isBoxedPrimitive = function (_v0) {
    return _v28(_v0) || _v29(_v0) || _v30(_v0) || _v31(_v0) || _v32(_v0);
  }, _v2.isAnyArrayBuffer = function (_v0) {
    return "u" > typeof Uint8Array && (_v22(_v0) || _v27(_v0));
  }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (_v0) {
    Object.defineProperty(_v2, _v0, {
      enumerable: !1,
      value: function () {
        throw Error(_v0 + " is not supported in userland");
      }
    });
  });
}