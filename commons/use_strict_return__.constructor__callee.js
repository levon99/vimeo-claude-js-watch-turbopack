{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0),
    _v18 = Function,
    _v19 = function (_v0) {
      try {
        return _v18('"use strict"; return (' + _v0 + ").constructor;")();
      } catch (_v0) {}
    },
    _v20 = _v0.r(0),
    _v21 = _v0.r(0),
    _v22 = function () {
      throw new _v9();
    },
    _v23 = _v20 ? function () {
      try {
        return arguments.callee, _v22;
      } catch (_v0) {
        try {
          return _v20(arguments, "callee").get;
        } catch (_v0) {
          return _v22;
        }
      }
    }() : _v22,
    _v24 = _v0.r(0)(),
    _v25 = _v0.r(0),
    _v26 = _v0.r(0),
    _v27 = _v0.r(0),
    _v28 = _v0.r(0),
    _v29 = _v0.r(0),
    _v30 = {},
    _v31 = "u" > typeof Uint8Array && _v25 ? _v25(Uint8Array) : void 0,
    _v32 = {
      __proto__: null,
      "%AggregateError%": "u" < typeof AggregateError ? void 0 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": "u" < typeof ArrayBuffer ? void 0 : ArrayBuffer,
      "%ArrayIteratorPrototype%": _v24 && _v25 ? _v25([][Symbol.iterator]()) : void 0,
      "%AsyncFromSyncIteratorPrototype%": void 0,
      "%AsyncFunction%": _v30,
      "%AsyncGenerator%": _v30,
      "%AsyncGeneratorFunction%": _v30,
      "%AsyncIteratorPrototype%": _v30,
      "%Atomics%": "u" < typeof Atomics ? void 0 : Atomics,
      "%BigInt%": "u" < typeof BigInt ? void 0 : BigInt,
      "%BigInt64Array%": "u" < typeof BigInt64Array ? void 0 : BigInt64Array,
      "%BigUint64Array%": "u" < typeof BigUint64Array ? void 0 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": "u" < typeof DataView ? void 0 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": _v4,
      "%eval%": eval,
      "%EvalError%": _v5,
      "%Float16Array%": "u" < typeof Float16Array ? void 0 : Float16Array,
      "%Float32Array%": "u" < typeof Float32Array ? void 0 : Float32Array,
      "%Float64Array%": "u" < typeof Float64Array ? void 0 : Float64Array,
      "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
      "%Function%": _v18,
      "%GeneratorFunction%": _v30,
      "%Int8Array%": "u" < typeof Int8Array ? void 0 : Int8Array,
      "%Int16Array%": "u" < typeof Int16Array ? void 0 : Int16Array,
      "%Int32Array%": "u" < typeof Int32Array ? void 0 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": _v24 && _v25 ? _v25(_v25([][Symbol.iterator]())) : void 0,
      "%JSON%": "object" == typeof JSON ? JSON : void 0,
      "%Map%": "u" < typeof Map ? void 0 : Map,
      "%MapIteratorPrototype%": "u" > typeof Map && _v24 && _v25 ? _v25(new Map()[Symbol.iterator]()) : void 0,
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": _v3,
      "%Object.getOwnPropertyDescriptor%": _v20,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": "u" < typeof Promise ? void 0 : Promise,
      "%Proxy%": "u" < typeof Proxy ? void 0 : Proxy,
      "%RangeError%": _v6,
      "%ReferenceError%": _v7,
      "%Reflect%": "u" < typeof Reflect ? void 0 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": "u" < typeof Set ? void 0 : Set,
      "%SetIteratorPrototype%": "u" > typeof Set && _v24 && _v25 ? _v25(new Set()[Symbol.iterator]()) : void 0,
      "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": _v24 && _v25 ? _v25(""[Symbol.iterator]()) : void 0,
      "%Symbol%": _v24 ? Symbol : void 0,
      "%SyntaxError%": _v8,
      "%ThrowTypeError%": _v23,
      "%TypedArray%": _v31,
      "%TypeError%": _v9,
      "%Uint8Array%": "u" < typeof Uint8Array ? void 0 : Uint8Array,
      "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
      "%Uint16Array%": "u" < typeof Uint16Array ? void 0 : Uint16Array,
      "%Uint32Array%": "u" < typeof Uint32Array ? void 0 : Uint32Array,
      "%URIError%": _v10,
      "%WeakMap%": "u" < typeof WeakMap ? void 0 : WeakMap,
      "%WeakRef%": "u" < typeof WeakRef ? void 0 : WeakRef,
      "%WeakSet%": "u" < typeof WeakSet ? void 0 : WeakSet,
      "%Function.prototype.call%": _v29,
      "%Function.prototype.apply%": _v28,
      "%Object.defineProperty%": _v21,
      "%Object.getPrototypeOf%": _v26,
      "%Math.abs%": _v11,
      "%Math.floor%": _v12,
      "%Math.max%": _v13,
      "%Math.min%": _v14,
      "%Math.pow%": _v15,
      "%Math.round%": _v16,
      "%Math.sign%": _v17,
      "%Reflect.getPrototypeOf%": _v27
    };
  if (_v25) try {
    null.error;
  } catch (_v0) {
    var _v33 = _v25(_v25(_v0));
    _v32["%Error.prototype%"] = _v33;
  }
  var _v34 = function _v0(_v1) {
      var _v2;
      if ("%AsyncFunction%" === _v1) _v2 = _v19("async function () {}");else if ("%GeneratorFunction%" === _v1) _v2 = _v19("function* () {}");else if ("%AsyncGeneratorFunction%" === _v1) _v2 = _v19("async function* () {}");else if ("%AsyncGenerator%" === _v1) {
        var _v3 = _v0("%AsyncGeneratorFunction%");
        _v3 && (_v2 = _v3.prototype);
      } else if ("%AsyncIteratorPrototype%" === _v1) {
        var _v4 = _v0("%AsyncGenerator%");
        _v4 && _v25 && (_v2 = _v25(_v4.prototype));
      }
      return _v32[_v1] = _v2, _v2;
    },
    _v35 = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    _v36 = _v0.r(0),
    _v37 = _v0.r(0),
    _v38 = _v36.call(_v29, Array.prototype.concat),
    _v39 = _v36.call(_v28, Array.prototype.splice),
    _v40 = _v36.call(_v29, String.prototype.replace),
    _v41 = _v36.call(_v29, String.prototype.slice),
    _v42 = _v36.call(_v29, RegExp.prototype.exec),
    _v43 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    _v44 = /\\(\\)?/g,
    _v45 = function (_v0) {
      var _v1 = _v41(_v0, 0, 1),
        _v2 = _v41(_v0, -1);
      if ("%" === _v1 && "%" !== _v2) throw new _v8("invalid intrinsic syntax, expected closing `%`");
      if ("%" === _v2 && "%" !== _v1) throw new _v8("invalid intrinsic syntax, expected opening `%`");
      var _v3 = [];
      return _v40(_v0, _v43, function (_v0, _v1, _v2, _v3) {
        _v3[_v3.length] = _v2 ? _v40(_v3, _v44, "$1") : _v1 || _v0;
      }), _v3;
    },
    _v46 = function (_v0, _v1) {
      var _v2,
        _v3 = _v0;
      if (_v37(_v35, _v3) && (_v3 = "%" + (_v2 = _v35[_v3])[0] + "%"), _v37(_v32, _v3)) {
        var _v4 = _v32[_v3];
        if (_v4 === _v30 && (_v4 = _v34(_v3)), void 0 === _v4 && !_v1) throw new _v9("intrinsic " + _v0 + " exists, but is not available. Please file an issue!");
        return {
          alias: _v2,
          name: _v3,
          value: _v4
        };
      }
      throw new _v8("intrinsic " + _v0 + " does not exist!");
    };
  _v1.exports = function (_v0, _v1) {
    if ("string" != typeof _v0 || 0 === _v0.length) throw new _v9("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof _v1) throw new _v9('"allowMissing" argument must be a boolean');
    if (null === _v42(/^%?[^%]*%?$/, _v0)) throw new _v8("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var _v2 = _v45(_v0),
      _v3 = _v2.length > 0 ? _v2[0] : "",
      _v4 = _v46("%" + _v3 + "%", _v1),
      _v5 = _v4.name,
      _v6 = _v4.value,
      _v7 = !1,
      _v8 = _v4.alias;
    _v8 && (_v3 = _v8[0], _v39(_v2, _v38([0, 1], _v8)));
    for (var _v9 = 1, _v10 = !0; _v9 < _v2.length; _v9 += 1) {
      var _v11 = _v2[_v9],
        _v12 = _v41(_v11, 0, 1),
        _v13 = _v41(_v11, -1);
      if (('"' === _v12 || "'" === _v12 || "`" === _v12 || '"' === _v13 || "'" === _v13 || "`" === _v13) && _v12 !== _v13) throw new _v8("property names with quotes must have matching quotes");
      if ("constructor" !== _v11 && _v10 || (_v7 = !0), _v3 += "." + _v11, _v37(_v32, _v5 = "%" + _v3 + "%")) _v6 = _v32[_v5];else if (null != _v6) {
        if (!(_v11 in _v6)) {
          if (!_v1) throw new _v9("base intrinsic for " + _v0 + " exists, but the property is not available.");
          return;
        }
        if (_v20 && _v9 + 1 >= _v2.length) {
          var _v14 = _v20(_v6, _v11);
          _v6 = (_v10 = !!_v14) && "get" in _v14 && !("originalValue" in _v14.get) ? _v14.get : _v6[_v11];
        } else _v10 = _v37(_v6, _v11), _v6 = _v6[_v11];
        _v10 && !_v7 && (_v32[_v5] = _v6);
      }
    }
    return _v6;
  };
}