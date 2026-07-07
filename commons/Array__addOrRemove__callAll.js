{
  "use strict";

  _v0.i(0);
  var _v1,
    _v2 = _v0 => _v0[_v0.length - 1],
    _v3 = (_v0, ..._v1) => _v0.concat(_v1),
    _v4 = (_v0, ..._v1) => _v0.filter(_v0 => !_v1.includes(_v0));
  function _v5(_v0, _v1, _v2 = {}) {
    let {
        step: _v3 = 1,
        loop: _v4 = !0
      } = _v2,
      _v5 = _v1 + _v3,
      _v6 = _v0.length,
      _v7 = _v6 - 1;
    return -1 === _v1 ? _v3 > 0 ? 0 : _v7 : _v5 < 0 ? _v4 ? _v7 : 0 : _v5 >= _v6 ? _v4 ? 0 : _v1 > _v6 ? _v6 : _v1 : _v5;
  }
  function _v6(_v0, _v1, _v2 = {}) {
    let {
      step: _v3 = 1,
      loop: _v4 = !0
    } = _v2;
    return _v5(_v0, _v1, {
      step: -_v3,
      loop: _v4
    });
  }
  var _v7 = _v0 => _v0?.constructor.name === "Array",
    _v8 = (_v0, _v1) => {
      if (Object.is(_v0, _v1)) return !0;
      if (null == _v0 && null != _v1 || null != _v0 && null == _v1) return !1;
      if ("function" == typeof _v0?.isEqual && "function" == typeof _v1?.isEqual) return _v0.isEqual(_v1);
      if ("function" == typeof _v0 && "function" == typeof _v1) return _v0.toString() === _v1.toString();
      if (_v7(_v0) && _v7(_v1)) return ((_v0, _v1) => {
        if (_v0.length !== _v1.length) return !1;
        for (let _v0 = 0; _v0 < _v0.length; _v0++) if (!_v8(_v0[_v0], _v1[_v0])) return !1;
        return !0;
      })(Array.from(_v0), Array.from(_v1));
      if ("object" != typeof _v0 || "object" != typeof _v1) return !1;
      let _v2 = Object.keys(_v1 ?? Object.create(null)),
        _v3 = _v2.length;
      for (let _v0 = 0; _v0 < _v3; _v0++) if (!Reflect.has(_v0, _v2[_v0])) return !1;
      for (let _v0 = 0; _v0 < _v3; _v0++) {
        let _v0 = _v2[_v0];
        if (!_v8(_v0[_v0], _v1[_v0])) return !1;
      }
      return !0;
    },
    _v9 = _v0 => "string" == typeof _v0,
    _v10 = _v0 => "function" == typeof _v0;
  Function.prototype.toString.call(Object);
  var _v11 = (..._v0) => (..._v0) => {
      _v0.forEach(function (_v0) {
        _v0?.(..._v0);
      });
    },
    _v12 = (_v0, _v1) => {
      try {
        return _v0();
      } catch (_v0) {
        return _v0 instanceof Error && Error.captureStackTrace?.(_v0, _v12), _v1?.();
      }
    },
    {
      floor: _v13,
      abs: _v14,
      round: _v15,
      min: _v16,
      max: _v17,
      pow: _v18,
      sign: _v19
    } = Math,
    _v20 = _v0 => Number.isNaN(_v0) ? 0 : _v0,
    _v21 = (_v0, _v1, _v2) => _v16(_v17(_v20(_v0), _v1), _v2),
    _v22 = (_v0, _v1) => {
      let _v2 = _v0,
        _v3 = _v1.toString(),
        _v4 = _v3.indexOf("."),
        _v5 = _v4 >= 0 ? _v3.length - _v4 : 0;
      if (_v5 > 0) {
        let _v0 = _v18(10, _v5);
        _v2 = _v15(_v2 * _v0) / _v0;
      }
      return _v2;
    };
  _v0.s(["add", 0, _v3, "addOrRemove", 0, (_v0, _v1) => -1 !== _v0.indexOf(_v1) ? _v4(_v0, _v1) : _v3(_v0, _v1), "callAll", 0, _v11, "cast", 0, _v0 => _v0, "chunk", 0, (_v0, _v1) => _v0.reduce((_v0, _v1, _v2) => (_v2 % _v1 == 0 ? _v0.push([_v1]) : _v2(_v0)?.push(_v1), _v0), []), "clampValue", 0, _v21, "compact", 0, function _v0(_v1) {
    let _v2;
    if (!((_v2 = _v1) && "object" == typeof _v2 && _v2.constructor === Object) || void 0 === _v1) return _v1;
    let _v3 = Reflect.ownKeys(_v1).filter(_v0 => "string" == typeof _v0),
      _v4 = {};
    for (let _v0 of _v3) {
      let _v0 = _v1[_v0];
      void 0 !== _v0 && (_v4[_v0] = _v0(_v0));
    }
    return _v4;
  }, "createSplitProps", 0, _v0 => function (_v0) {
    let _v1 = {},
      _v2 = {},
      _v3 = new Set(_v0);
    for (let _v0 in _v0) _v3.has(_v0) ? _v2[_v0] = _v0[_v0] : _v1[_v0] = _v0[_v0];
    return [_v2, _v1];
  }, "ensure", 0, function (_v0, _v1) {
    if (null == _v0) throw Error(_v1());
  }, "ensureProps", 0, function (_v0, _v1, _v2) {
    let _v3 = [];
    for (let _v0 of _v1) null == _v0[_v0] && _v3.push(_v0);
    if (_v3.length > 0) throw Error(`[zag-js${_v2 ? ` > ${_v2}` : ""}] missing required props: ${_v3.join(", ")}`);
  }, "first", 0, _v0 => _v0[0], "getPercentValue", 0, (_v0, _v1, _v2, _v3) => {
    let _v4;
    return _v21((_v4 = _v0 * (_v2 - _v1) + _v1, _v15((_v20(_v4) - _v1) / _v3) * _v3 + _v1), _v1, _v2);
  }, "getValuePercent", 0, (_v0, _v1, _v2) => (_v20(_v0) - _v1) / (_v2 - _v1), "hasProp", 0, (_v0, _v1) => Object.prototype.hasOwnProperty.call(_v0, _v1), "identity", 0, _v0 => _v0(), "isBoolean", 0, _v0 => !0 === _v0 || !1 === _v0, "isEqual", 0, _v8, "isFunction", 0, _v10, "isNull", 0, _v0 => null == _v0, "isObject", 0, _v0 => null != _v0 && "object" == typeof _v0 && !Array.isArray(_v0), "isString", 0, _v9, "isValueWithinRange", 0, (_v0, _v1, _v2) => _v20(_v0) >= _v1 && _v20(_v0) <= _v2, "last", 0, _v2, "match", 0, function _v0(_v1, _v2, ..._v3) {
    if (_v1 in _v2) {
      let _v0 = _v2[_v1];
      return _v10(_v0) ? _v0(..._v3) : _v0;
    }
    let _v4 = Error(`No matching key: ${JSON.stringify(_v1)} in ${JSON.stringify(Object.keys(_v2))}`);
    throw Error.captureStackTrace?.(_v4, _v0), _v4;
  }, "mod", 0, (_v0, _v1) => (_v0 % _v1 + _v1) % _v1, "next", 0, function (_v0, _v1, _v2 = {}) {
    return _v0[_v5(_v0, _v1, _v2)];
  }, "nextIndex", 0, _v5, "noop", 0, () => {}, "prev", 0, function (_v0, _v1, _v2 = {}) {
    return _v0[_v6(_v0, _v1, _v2)];
  }, "prevIndex", 0, _v6, "remove", 0, _v4, "removeAt", 0, (_v0, _v1) => _v0.filter((_v0, _v1) => _v1 !== _v1), "runIfFn", 0, (_v0, ..._v1) => ("function" == typeof _v0 ? _v0(..._v1) : _v0) ?? void 0, "snapValueToStep", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = null != _v1 ? Number(_v1) : 0,
      _v5 = Number(_v2),
      _v6 = (_v0 - _v4) % _v3,
      _v7 = 2 * _v14(_v6) >= _v3 ? _v0 + _v19(_v6) * (_v3 - _v14(_v6)) : _v0 - _v6;
    if (_v7 = _v22(_v7, _v3), !Number.isNaN(_v4) && _v7 < _v4) _v7 = _v4;else if (!Number.isNaN(_v5) && _v7 > _v5) {
      let _v0 = _v13((_v5 - _v4) / _v3),
        _v1 = _v4 + _v0 * _v3;
      _v7 = _v0 <= 0 || _v1 < _v4 ? _v5 : _v1;
    }
    return _v22(_v7, _v3);
  }, "throttle", 0, function (_v0, _v1 = 0) {
    let _v2 = 0,
      _v3 = null;
    return (..._v0) => {
      let _v1 = Date.now(),
        _v2 = _v1 - _v2;
      _v2 >= _v1 ? (_v3 && (clearTimeout(_v3), _v3 = null), _v0(..._v0), _v2 = _v1) : _v3 || (_v3 = setTimeout(() => {
        _v0(..._v0), _v2 = Date.now(), _v3 = null;
      }, _v1 - _v2));
    };
  }, "toArray", 0, function (_v0) {
    return null == _v0 ? [] : Array.isArray(_v0) ? _v0 : [_v0];
  }, "toFixedNumber", 0, (_v0, _v1 = 0, _v2 = 10) => {
    let _v3 = Math.pow(_v2, _v1);
    return _v15(_v0 * _v3) / _v3;
  }, "tryCatch", 0, _v12, "uniq", 0, _v0 => Array.from(new Set(_v0)), "warn", 0, function (..._v0) {
    1 === _v0.length ? _v0[0] : _v0[1], 2 !== _v0.length || _v0[0];
  }], 0);
  var _v23 = _v0 => Math.max(0, Math.min(1, _v0)),
    _v24 = () => void 0,
    _v25 = _v0 => "object" == typeof _v0 && null !== _v0,
    _v26 = _v0 => _v25(_v0) && 1 === _v0.nodeType && "string" == typeof _v0.nodeName,
    _v27 = _v0 => _v25(_v0) && 9 === _v0.nodeType,
    _v28 = _v0 => _v26(_v0) ? _v0.localName || "" : "#document",
    _v29 = _v0 => _v25(_v0) && void 0 !== _v0.nodeType && 11 === _v0.nodeType && "host" in _v0,
    _v30 = /(textarea|select)/;
  function _v31(_v0, _v1) {
    if (!_v0 || !_v1 || !_v26(_v0) || !_v26(_v1)) return !1;
    let _v2 = _v1.getRootNode?.();
    if (_v0 === _v1 || _v0.contains(_v1)) return !0;
    if (_v2 && _v29(_v2)) {
      let _v0 = _v1;
      for (; _v0;) {
        if (_v0 === _v0) return !0;
        _v0 = _v0.parentNode || _v0.host;
      }
    }
    return !1;
  }
  function _v32(_v0) {
    return _v27(_v0) ? _v0 : _v25(_v0) && _v0 === _v0.window ? _v0.document : _v0?.ownerDocument ?? document;
  }
  function _v33(_v0) {
    return _v29(_v0) ? _v33(_v0.host) : _v27(_v0) ? _v0.defaultView ?? window : _v26(_v0) ? _v0.ownerDocument?.defaultView ?? window : window;
  }
  function _v34(_v0) {
    let _v1 = _v0.activeElement;
    for (; _v1?.shadowRoot;) {
      let _v0 = _v1.shadowRoot.activeElement;
      if (_v0 === _v1) break;
      _v1 = _v0;
    }
    return _v1;
  }
  var _v35 = new WeakMap(),
    _v36 = _v0 => {
      let _v1;
      return "u" > typeof document && _v0.test((_v1 = navigator.userAgentData, _v1?.platform ?? navigator.platform));
    },
    _v37 = () => _v36(/^iPhone/i) || _v36(/^iPad/i) || _v38() && navigator.maxTouchPoints > 1,
    _v38 = () => _v36(/^Mac/i);
  function _v39(_v0) {
    let _v1 = _v0.composedPath?.() ?? _v0.nativeEvent?.composedPath?.();
    return _v1?.[0] ?? _v0.target;
  }
  var _v40 = {
      Up: "ArrowUp",
      Down: "ArrowDown",
      Esc: "Escape",
      " ": "Space",
      ",": "Comma",
      Left: "ArrowLeft",
      Right: "ArrowRight"
    },
    _v41 = {
      ArrowLeft: "ArrowRight",
      ArrowRight: "ArrowLeft"
    };
  function _v42(_v0) {
    return _v0.nativeEvent ?? _v0;
  }
  var _v43 = new Set(["PageUp", "PageDown"]),
    _v44 = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
  function _v45(_v0, _v1 = "client") {
    let _v2 = "touches" in _v0 && _v0.touches.length > 0 ? _v0.touches[0] || _v0.changedTouches[0] : _v0;
    return {
      x: _v2[`${_v1}X`],
      y: _v2[`${_v1}Y`]
    };
  }
  var _v46 = (_v0, _v1, _v2, _v3) => {
    let _v4 = "function" == typeof _v0 ? _v0() : _v0;
    return _v4?.addEventListener(_v1, _v2, _v3), () => {
      _v4?.removeEventListener(_v1, _v2, _v3);
    };
  };
  function _v47(_v0, _v1, _v2 = "value") {
    if (!_v0) return;
    let _v3 = "input" === _v0.localName ? "HTMLInputElement" : "textarea" === _v0.localName ? "HTMLTextAreaElement" : "select" === _v0.localName ? "HTMLSelectElement" : void 0;
    if (_v3) {
      let _v0 = function (_v0, _v1) {
        let {
          type: _v2 = "HTMLInputElement",
          property: _v3 = "value"
        } = _v1;
        return Object.getOwnPropertyDescriptor(_v33(_v0)[_v2].prototype, _v3) ?? {};
      }(_v0, {
        type: _v3,
        property: _v2
      });
      _v0.set?.call(_v0, _v1);
    }
    _v0.setAttribute(_v2, _v1);
  }
  var _v48 = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
  function _v49(_v0) {
    return !(!_v0 || _v0.closest("[inert]")) && _v0.matches(_v48) && !!_v26(_v0) && (_v0.offsetWidth > 0 || _v0.offsetHeight > 0 || _v0.getClientRects().length > 0);
  }
  function _v50(_v0, _v1) {
    if (!_v0) return [];
    let _v2 = Array.from(_v0.querySelectorAll(_v48)),
      _v3 = _v2.filter(_v51);
    return (_v1 && _v51(_v0) && _v3.unshift(_v0), _v3.forEach((_v0, _v1) => {
      let _v2;
      if (_v26(_v2 = _v0) && "IFRAME" === _v2.tagName && _v0.contentDocument) {
        let _v0 = _v50(_v0.contentDocument.body);
        _v3.splice(_v1, 1, ..._v0);
      }
    }), !_v3.length && _v1) ? _v2 : _v3;
  }
  function _v51(_v0) {
    return null != _v0 && !!(_v0.tabIndex > 0) || _v49(_v0) && !(0 > parseInt(_v0.getAttribute("tabindex") || "0", 10));
  }
  function _v52(_v0) {
    let _v1 = new Set();
    function _v2(_v0) {
      let _v1 = globalThis.requestAnimationFrame(_v0);
      _v1.add(() => globalThis.cancelAnimationFrame(_v1));
    }
    return _v2(() => _v2(_v0)), function () {
      _v1.forEach(_v0 => _v0());
    };
  }
  function _v53(_v0) {
    let _v1,
      _v2 = globalThis.requestAnimationFrame(() => {
        _v1 = _v0();
      });
    return () => {
      globalThis.cancelAnimationFrame(_v2), _v1?.();
    };
  }
  var _v54 = /auto|scroll|overlay|hidden|clip/;
  function _v55(_v0) {
    let {
      overflow: _v1,
      overflowX: _v2,
      overflowY: _v3,
      display: _v4
    } = _v33(_v0).getComputedStyle(_v0);
    return _v54.test(_v1 + _v3 + _v2) && !["inline", "contents"].includes(_v4);
  }
  var _v56 = "default",
    _v57 = "",
    _v58 = new WeakMap();
  function _v59(_v0 = {}) {
    let {
        target: _v1,
        doc: _v2
      } = _v0,
      _v3 = (_v2 ?? document).documentElement;
    if (_v37()) {
      if ("disabled" !== _v56) return;
      _v56 = "restoring", setTimeout(() => {
        _v52(() => {
          "restoring" === _v56 && ("none" === _v3.style.webkitUserSelect && (_v3.style.webkitUserSelect = _v57 || ""), _v57 = "", _v56 = "default");
        });
      }, 300);
    } else if (_v1 && _v58.has(_v1)) {
      let _v0 = _v58.get(_v1);
      "none" === _v1.style.userSelect && (_v1.style.userSelect = _v0 ?? ""), "" === _v1.getAttribute("style") && _v1.removeAttribute("style"), _v58.delete(_v1);
    }
  }
  function _v60(_v0 = {}) {
    let {
        defer: _v1,
        target: _v2,
        ..._v3
      } = _v0,
      _v4 = _v1 ? _v53 : _v0 => _v0(),
      _v5 = [];
    return _v5.push(_v4(() => {
      let _v0 = "function" == typeof _v2 ? _v2() : _v2;
      _v5.push(function (_v0 = {}) {
        let {
            target: _v1,
            doc: _v2
          } = _v0,
          _v3 = _v2 ?? document,
          _v4 = _v3.documentElement;
        return _v37() ? ("default" === _v56 && (_v57 = _v4.style.webkitUserSelect, _v4.style.webkitUserSelect = "none"), _v56 = "disabled") : _v1 && (_v58.set(_v1, _v1.style.userSelect), _v1.style.userSelect = "none"), () => _v59({
          target: _v1,
          doc: _v3
        });
      }({
        ..._v3,
        target: _v0
      }));
    })), () => {
      _v5.forEach(_v0 => _v0?.());
    };
  }
  var _v61 = _v0 => _v0.id;
  function _v62(_v0, _v1, _v2 = _v61) {
    let _v3 = function (_v0, _v1, _v2 = _v61) {
      return _v0.find(_v0 => _v2(_v0) === _v1);
    }(_v0, _v1, _v2);
    return _v3 ? _v0.indexOf(_v3) : -1;
  }
  var _v63 = Object.assign(function (_v0, _v1) {
      let {
          state: _v2,
          activeId: _v3,
          key: _v4,
          timeout: _v5 = 350,
          itemToId: _v6
        } = _v1,
        _v7 = _v2.keysSoFar + _v4,
        _v8 = _v7.length > 1 && Array.from(_v7).every(_v0 => _v0 === _v7[0]) ? _v7[0] : _v7,
        _v9 = function (_v0, _v1, _v2, _v3 = _v61) {
          let _v4 = _v2 ? _v62(_v0, _v2, _v3) : -1,
            _v5 = _v2 ? _v0.map((_v0, _v1) => _v0[(Math.max(_v4, 0) + _v1) % _v0.length]) : _v0;
          return 1 === _v1.length && (_v5 = _v5.filter(_v0 => _v3(_v0) !== _v2)), _v5.find(_v0 => {
            let _v1;
            return _v1 = (_v0.dataset?.valuetext ?? _v0.textContent ?? "").split("").map(_v0 => {
              let _v1 = _v0.charCodeAt(0);
              return _v1 > 0 && _v1 < 128 ? _v0 : _v1 >= 128 && _v1 <= 255 ? `/x${_v1.toString(16)}`.replace("/", "\\") : "";
            }).join("").trim(), _v1.trim().toLowerCase().startsWith(_v1.toLowerCase());
          });
        }(_v0.slice(), _v8, _v3, _v6);
      function _v10() {
        clearTimeout(_v2.timer), _v2.timer = -1;
      }
      return !function _v0(_v1) {
        _v2.keysSoFar = _v1, _v10(), "" !== _v1 && (_v2.timer = +setTimeout(() => {
          _v0(""), _v10();
        }, _v5));
      }(_v7), _v9;
    }, {
      defaultOptions: {
        keysSoFar: "",
        timer: -1
      },
      isValidEvent: function (_v0) {
        return 1 === _v0.key.length && !_v0.ctrlKey && !_v0.metaKey;
      }
    }),
    _v64 = 0 / 60;
  _v0.s(["addDomEvent", 0, _v46, "ariaAttr", 0, _v0 => _v0 ? "true" : void 0, "clickIfLink", 0, function (_v0) {
    var _v1;
    let _v2,
      _v3 = () => _v0.click();
    if (_v1 = /Firefox/i, "u" > typeof document && _v1.test((_v2 = navigator.userAgentData) && Array.isArray(_v2.brands) ? _v2.brands.map(({
      brand: _v0,
      version: _v1
    }) => `${_v0}/${_v1}`).join(" ") : navigator.userAgent)) {
      let _v0, _v1;
      _v0 = _v53(() => {
        _v0.removeEventListener("keyup", _v1, !0), _v3();
      }), _v1 = () => {
        _v0(), _v3();
      }, _v0.addEventListener("keyup", _v1, {
        once: !0,
        capture: !0
      });
    } else queueMicrotask(_v3);
  }, "contains", 0, _v31, "dataAttr", 0, _v0 => _v0 ? "" : void 0, "disableTextSelection", 0, _v60, "dispatchInputValueEvent", 0, function (_v0, _v1) {
    let {
      value: _v2,
      bubbles: _v3 = !0
    } = _v1;
    if (!_v0) return;
    let _v4 = _v33(_v0);
    _v0 instanceof _v4.HTMLInputElement && (_v47(_v0, `${_v2}`), _v0.dispatchEvent(new _v4.Event("input", {
      bubbles: _v3
    })));
  }, "getActiveElement", 0, _v34, "getByTypeahead", 0, _v63, "getComputedStyle", 0, function (_v0) {
    return _v35.has(_v0) || _v35.set(_v0, _v33(_v0).getComputedStyle(_v0)), _v35.get(_v0);
  }, "getDocument", 0, _v32, "getEventKey", 0, function (_v0, _v1 = {}) {
    let {
        dir: _v2 = "ltr",
        orientation: _v3 = "horizontal"
      } = _v1,
      _v4 = _v0.key;
    return _v4 = _v40[_v4] ?? _v4, "rtl" === _v2 && "horizontal" === _v3 && _v4 in _v41 && (_v4 = _v41[_v4]), _v4;
  }, "getEventPoint", 0, _v45, "getEventStep", 0, function (_v0) {
    return _v0.ctrlKey || _v0.metaKey ? .1 : _v43.has(_v0.key) || _v0.shiftKey && _v44.has(_v0.key) ? 10 : 1;
  }, "getEventTarget", 0, _v39, "getInitialFocus", 0, function (_v0) {
    let {
      root: _v1,
      getInitialEl: _v2,
      filter: _v3,
      enabled: _v4 = !0
    } = _v0;
    if (!_v4) return;
    let _v5 = null;
    if ((_v5 = "function" == typeof _v2 ? _v2() : _v2) || (_v5 = _v1?.querySelector("[data-autofocus],[autofocus]")), !_v5) {
      let _v0 = _v50(_v1);
      _v5 = _v3 ? _v0.filter(_v3)[0] : _v0[0];
    }
    return _v5 || _v1 || void 0;
  }, "getNativeEvent", 0, _v42, "getNearestOverflowAncestor", 0, function _v0(_v1) {
    let _v2 = function (_v0) {
      if ("html" === _v28(_v0)) return _v0;
      let _v1 = _v0.assignedSlot || _v0.parentNode || _v29(_v0) && _v0.host || _v32(_v0).documentElement;
      return _v29(_v1) ? _v1.host : _v1;
    }(_v1);
    return ["html", "body", "#document"].includes(_v28(_v2)) ? _v32(_v2).body : _v26(_v2) && _v55(_v2) ? _v2 : _v0(_v2);
  }, "getRelativePoint", 0, function (_v0, _v1) {
    let {
        left: _v2,
        top: _v3,
        width: _v4,
        height: _v5
      } = _v1.getBoundingClientRect(),
      _v6 = {
        x: _v0.x - _v2,
        y: _v0.y - _v3
      },
      _v7 = {
        x: _v23(_v6.x / _v4),
        y: _v23(_v6.y / _v5)
      };
    return {
      offset: _v6,
      percent: _v7,
      getPercentValue: function (_v0 = {}) {
        let {
            dir: _v1 = "ltr",
            orientation: _v2 = "horizontal",
            inverted: _v3
          } = _v0,
          _v4 = "object" == typeof _v3 ? _v3.x : _v3,
          _v5 = "object" == typeof _v3 ? _v3.y : _v3;
        return "horizontal" === _v2 ? "rtl" === _v1 || _v4 ? 1 - _v7.x : _v7.x : _v5 ? 1 - _v7.y : _v7.y;
      }
    };
  }, "getTabbables", 0, _v50, "getWindow", 0, _v33, "indexOfId", 0, _v62, "isAnchorElement", 0, _v0 => !!_v0?.matches("a[href]"), "isCaretAtStart", 0, function (_v0) {
    if (!_v0) return !1;
    try {
      return 0 === _v0.selectionStart && 0 === _v0.selectionEnd;
    } catch {
      return "" === _v0.value;
    }
  }, "isComposingEvent", 0, function (_v0) {
    return _v42(_v0).isComposing || 229 === _v0.keyCode;
  }, "isContextMenuEvent", 0, _v0 => 2 === _v0.button || _v38() && _v0.ctrlKey && 0 === _v0.button, "isDownloadingEvent", 0, function (_v0) {
    let _v1 = _v0.currentTarget;
    if (!_v1) return !1;
    let _v2 = _v1.localName;
    return !!_v0.altKey && ("a" === _v2 || "button" === _v2 && "submit" === _v1.type || "input" === _v2 && "submit" === _v1.type);
  }, "isEditableElement", 0, function (_v0) {
    if (null == _v0 || !_v26(_v0)) return !1;
    try {
      return _v26(_v0) && "input" === _v0.localName && null != _v0.selectionStart || _v30.test(_v0.localName) || _v0.isContentEditable || "true" === _v0.getAttribute("contenteditable") || "" === _v0.getAttribute("contenteditable");
    } catch {
      return !1;
    }
  }, "isFocusable", 0, _v49, "isHTMLElement", 0, _v26, "isLeftClick", 0, _v0 => 0 === _v0.button, "isModifierKey", 0, _v0 => _v0.ctrlKey || _v0.altKey || _v0.metaKey, "isOpeningInNewTab", 0, function (_v0) {
    var _v1;
    let _v2 = _v0.currentTarget;
    if (!_v2 || !_v2.matches("a[href], button[type='submit'], input[type='submit']")) return !1;
    let _v3 = 1 === _v0.button,
      _v4 = (_v1 = _v0, _v38() ? _v1.metaKey : _v1.ctrlKey);
    return _v3 || _v4;
  }, "isPrintableKey", 0, function (_v0) {
    return 1 === _v0.key.length && !_v0.ctrlKey && !_v0.metaKey;
  }, "isSelfTarget", 0, _v0 => _v31(_v0.currentTarget, _v39(_v0)), "isShadowRoot", 0, _v29, "isTouchDevice", 0, () => "u" > typeof document && !!navigator.maxTouchPoints, "isValidTabEvent", 0, function (_v0) {
    let _v1,
      _v2 = _v0.currentTarget;
    if (!_v2) return !1;
    let [_v3, _v4] = [(_v1 = _v50(_v2, void 0))[0] || null, _v1[_v1.length - 1] || null],
      _v5 = _v2.ownerDocument || document;
    return (_v5.activeElement !== _v3 || !_v0.shiftKey) && (_v5.activeElement !== _v4 || !!_v0.shiftKey) && (!!_v3 || !!_v4);
  }, "nextById", 0, function (_v0, _v1, _v2 = !0) {
    let _v3 = _v62(_v0, _v1);
    return _v3 = _v2 ? (_v3 + 1) % _v0.length : Math.min(_v3 + 1, _v0.length - 1), _v0[_v3];
  }, "nextTick", 0, _v52, "observeAttributes", 0, function (_v0, _v1) {
    let {
        defer: _v2
      } = _v1,
      _v3 = _v2 ? _v53 : _v0 => _v0(),
      _v4 = [];
    return _v4.push(_v3(() => {
      let _v0 = "function" == typeof _v0 ? _v0() : _v0;
      _v4.push(function (_v0, _v1) {
        if (!_v0) return;
        let {
            attributes: _v2,
            callback: _v3
          } = _v1,
          _v4 = new (_v0.ownerDocument.defaultView || window).MutationObserver(_v0 => {
            for (let _v0 of _v0) "attributes" === _v0.type && _v0.attributeName && _v2.includes(_v0.attributeName) && _v3(_v0);
          });
        return _v4.observe(_v0, {
          attributes: !0,
          attributeFilter: _v2
        }), () => _v4.disconnect();
      }(_v0, _v1));
    })), () => {
      _v4.forEach(_v0 => _v0?.());
    };
  }, "observeChildren", 0, function (_v0, _v1) {
    let {
        defer: _v2
      } = _v1,
      _v3 = _v2 ? _v53 : _v0 => _v0(),
      _v4 = [];
    return _v4.push(_v3(() => {
      let _v0 = "function" == typeof _v0 ? _v0() : _v0;
      _v4.push(function (_v0, _v1) {
        let {
          callback: _v2
        } = _v1;
        if (!_v0) return;
        let _v3 = new (_v0.ownerDocument.defaultView || window).MutationObserver(_v2);
        return _v3.observe(_v0, {
          childList: !0,
          subtree: !0
        }), () => _v3.disconnect();
      }(_v0, _v1));
    })), () => {
      _v4.forEach(_v0 => _v0?.());
    };
  }, "prevById", 0, function (_v0, _v1, _v2 = !0) {
    let _v3 = _v62(_v0, _v1);
    return -1 === _v3 ? _v2 ? _v0[_v0.length - 1] : null : (_v3 = _v2 ? (_v3 - 1 + _v0.length) % _v0.length : Math.max(0, _v3 - 1), _v0[_v3]);
  }, "query", 0, function (_v0, _v1) {
    return _v0?.querySelector(_v1) ?? null;
  }, "queryAll", 0, function (_v0, _v1) {
    return Array.from(_v0?.querySelectorAll(_v1) ?? []);
  }, "raf", 0, _v53, "restoreTextSelection", 0, _v59, "scrollIntoView", 0, function (_v0, _v1) {
    let {
      rootEl: _v2,
      ..._v3
    } = _v1 || {};
    _v0 && _v2 && _v55(_v2) && (_v2.scrollHeight > _v2.clientHeight || _v2.scrollWidth > _v2.clientWidth) && _v0.scrollIntoView(_v3);
  }, "setCaretToEnd", 0, function (_v0) {
    if (!_v0) return;
    let _v1 = _v0.selectionStart ?? 0;
    0 !== Math.abs((_v0.selectionEnd ?? 0) - _v1) || 0 === _v1 && _v0.setSelectionRange(_v0.value.length, _v0.value.length);
  }, "setElementValue", 0, _v47, "setStyle", 0, function (_v0, _v1) {
    if (!_v0) return _v24;
    let _v2 = Object.keys(_v1).reduce((_v0, _v1) => (_v0[_v1] = _v0.style.getPropertyValue(_v1), _v0), {});
    return Object.assign(_v0.style, _v1), () => {
      Object.assign(_v0.style, _v2), 0 === _v0.style.length && _v0.removeAttribute("style");
    };
  }, "trackFormControl", 0, function (_v0, _v1) {
    if (!_v0) return;
    let {
        onFieldsetDisabledChange: _v2,
        onFormReset: _v3
      } = _v1,
      _v4 = [function (_v0, _v1) {
        if (!_v0) return;
        let _v2 = _v0.matches("textarea, input, select, button") ? _v0.form : _v0.closest("form"),
          _v3 = _v0 => {
            _v0.defaultPrevented || _v1();
          };
        return _v2?.addEventListener("reset", _v3, {
          passive: !0
        }), () => _v2?.removeEventListener("reset", _v3);
      }(_v0, _v3), function (_v0, _v1) {
        let _v2 = _v0?.closest("fieldset");
        if (!_v2) return;
        _v1(_v2.disabled);
        let _v3 = new (_v33(_v2).MutationObserver)(() => _v1(_v2.disabled));
        return _v3.observe(_v2, {
          attributes: !0,
          attributeFilter: ["disabled"]
        }), () => _v3.disconnect();
      }(_v0, _v2)];
    return () => _v4.forEach(_v0 => _v0?.());
  }, "trackPointerMove", 0, function (_v0, _v1) {
    let {
        onPointerMove: _v2,
        onPointerUp: _v3
      } = _v1,
      _v4 = [_v46(_v0, "pointermove", _v0 => {
        let _v1 = _v45(_v0);
        if (!(Math.sqrt(_v1.x ** 2 + _v1.y ** 2) < ("touch" === _v0.pointerType ? 10 : 5))) {
          if ("mouse" === _v0.pointerType && 0 === _v0.button) return void _v3();
          _v2({
            point: _v1,
            event: _v0
          });
        }
      }, !1), _v46(_v0, "pointerup", _v3, !1), _v46(_v0, "pointercancel", _v3, !1), _v46(_v0, "contextmenu", _v3, !1), _v60({
        doc: _v0
      })];
    return () => {
      _v4.forEach(_v0 => _v0());
    };
  }, "visuallyHiddenStyle", 0, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }, "waitForElements", 0, function (_v0, _v1) {
    let _v2 = [];
    return _v0?.forEach(_v0 => {
      let _v1 = function (_v0, _v1) {
        let _v2 = _v0();
        if (_v26(_v2) && _v2.isConnected) return _v1(_v2), () => void 0;
        {
          let _v0 = setInterval(() => {
            let _v0 = _v0();
            _v26(_v0) && _v0.isConnected && (_v1(_v0), clearInterval(_v0));
          }, _v64);
          return () => clearInterval(_v0);
        }
      }(_v0, _v1);
      _v2.push(_v1);
    }), () => {
      _v2.forEach(_v0 => _v0());
    };
  }], 0);
  var _v65 = (..._v0) => _v0.map(_v0 => _v0?.trim?.()).filter(Boolean).join(" "),
    _v66 = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g,
    _v67 = _v0 => {
      let _v1,
        _v2 = {};
      for (; _v1 = _v66.exec(_v0);) _v2[_v1[1]] = _v1[2];
      return _v2;
    },
    _v68 = (_v0, _v1) => {
      if (_v9(_v0)) {
        if (_v9(_v1)) return `${_v0};${_v1}`;
        _v0 = _v67(_v0);
      } else _v9(_v1) && (_v1 = _v67(_v1));
      return Object.assign({}, _v0 ?? {}, _v1 ?? {});
    };
  function _v69() {
    return {
      and: (..._v0) => function (_v0) {
        return _v0.every(_v0 => _v0.guard(_v0));
      },
      or: (..._v0) => function (_v0) {
        return _v0.some(_v0 => _v0.guard(_v0));
      },
      not: _v0 => function (_v0) {
        return !_v0.guard(_v0);
      }
    };
  }
  function _v70(_v0) {
    return _v0;
  }
  var _v71 = ((_v1 = _v71 || {}).NotStarted = "Not Started", _v1.Started = "Started", _v1.Stopped = "Stopped", _v1);
  _v0.s(["INIT_STATE", 0, "__init__", "MachineStatus", 0, _v71, "createGuards", 0, _v69, "createMachine", 0, _v70, "createScope", 0, function (_v0) {
    let _v1 = () => _v0.getRootNode?.() ?? document,
      _v2 = () => _v32(_v1()),
      _v3 = () => _v34(_v1());
    return {
      ..._v0,
      getRootNode: _v1,
      getDoc: _v2,
      getWin: () => _v2().defaultView ?? window,
      getActiveElement: _v3,
      isActiveElement: _v0 => _v0 === _v3(),
      getById: _v0 => _v1().getElementById(_v0)
    };
  }, "mergeProps", 0, function (..._v0) {
    let _v1 = {};
    for (let _v0 of _v0) {
      for (let _v0 in _v1) {
        if (_v0.startsWith("on") && "function" == typeof _v1[_v0] && "function" == typeof _v0[_v0]) {
          _v1[_v0] = _v11(_v0[_v0], _v1[_v0]);
          continue;
        }
        if ("className" === _v0 || "class" === _v0) {
          _v1[_v0] = _v65(_v1[_v0], _v0[_v0]);
          continue;
        }
        if ("style" === _v0) {
          _v1[_v0] = _v68(_v1[_v0], _v0[_v0]);
          continue;
        }
        _v1[_v0] = void 0 !== _v0[_v0] ? _v0[_v0] : _v1[_v0];
      }
      for (let _v0 in _v0) void 0 === _v1[_v0] && (_v1[_v0] = _v0[_v0]);
    }
    return _v1;
  }, "setup", 0, function () {
    return {
      guards: _v69(),
      createMachine: _v0 => _v70(_v0),
      choose: _v0 => function ({
        choose: _v0
      }) {
        return _v0(_v0)?.actions;
      }
    };
  }], 0);
}