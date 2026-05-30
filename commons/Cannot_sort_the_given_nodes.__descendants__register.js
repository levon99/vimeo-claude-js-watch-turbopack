{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = Object.defineProperty,
    _v3 = (_v0, _v1, _v2) => {
      let _v3;
      return (_v3 = "symbol" != typeof _v1 ? _v1 + "" : _v1) in _v0 ? _v2(_v0, _v3, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _v2
      }) : _v0[_v3] = _v2, _v2;
    };
  function _v4(_v0) {
    return _v0.sort((_v0, _v1) => {
      let _v2 = _v0.compareDocumentPosition(_v1);
      if (_v2 & Node.DOCUMENT_POSITION_FOLLOWING || _v2 & Node.DOCUMENT_POSITION_CONTAINED_BY) return -1;
      if (_v2 & Node.DOCUMENT_POSITION_PRECEDING || _v2 & Node.DOCUMENT_POSITION_CONTAINS) return 1;
      if (!(_v2 & Node.DOCUMENT_POSITION_DISCONNECTED) && !(_v2 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)) return 0;
      throw Error("Cannot sort the given nodes.");
    });
  }
  function _v5(_v0, _v1, _v2) {
    let _v3 = _v0 + 1;
    return _v2 && _v3 >= _v1 && (_v3 = 0), _v3;
  }
  function _v6(_v0, _v1, _v2) {
    let _v3 = _v0 - 1;
    return _v2 && _v3 < 0 && (_v3 = _v1), _v3;
  }
  var _v7 = "u" > typeof window ? _v1.useLayoutEffect : _v1.useEffect,
    _v8 = class {
      constructor() {
        _v3(this, "descendants", new Map()), _v3(this, "register", _v0 => {
          if (null != _v0) return "object" == typeof _v0 && "nodeType" in _v0 && _v0.nodeType === Node.ELEMENT_NODE ? this.registerNode(_v0) : _v0 => {
            this.registerNode(_v0, _v0);
          };
        }), _v3(this, "unregister", _v0 => {
          this.descendants.delete(_v0);
          let _v1 = _v4(Array.from(this.descendants.keys()));
          this.assignIndex(_v1);
        }), _v3(this, "destroy", () => {
          this.descendants.clear();
        }), _v3(this, "assignIndex", _v0 => {
          this.descendants.forEach(_v0 => {
            let _v1 = _v0.indexOf(_v0.node);
            _v0.index = _v1, _v0.node.dataset.index = _v0.index.toString();
          });
        }), _v3(this, "count", () => this.descendants.size), _v3(this, "enabledCount", () => this.enabledValues().length), _v3(this, "values", () => Array.from(this.descendants.values()).sort((_v0, _v1) => _v0.index - _v1.index)), _v3(this, "enabledValues", () => this.values().filter(_v0 => !_v0.disabled)), _v3(this, "item", _v0 => {
          if (0 !== this.count()) return this.values()[_v0];
        }), _v3(this, "enabledItem", _v0 => {
          if (0 !== this.enabledCount()) return this.enabledValues()[_v0];
        }), _v3(this, "first", () => this.item(0)), _v3(this, "firstEnabled", () => this.enabledItem(0)), _v3(this, "last", () => this.item(this.descendants.size - 1)), _v3(this, "lastEnabled", () => {
          let _v0 = this.enabledValues().length - 1;
          return this.enabledItem(_v0);
        }), _v3(this, "indexOf", _v0 => {
          var _v1, _v2;
          return _v0 && null != (_v2 = null == (_v1 = this.descendants.get(_v0)) ? void 0 : _v1.index) ? _v2 : -1;
        }), _v3(this, "enabledIndexOf", _v0 => null == _v0 ? -1 : this.enabledValues().findIndex(_v0 => _v0.node.isSameNode(_v0))), _v3(this, "next", (_v0, _v1 = !0) => {
          let _v2 = _v5(_v0, this.count(), _v1);
          return this.item(_v2);
        }), _v3(this, "nextEnabled", (_v0, _v1 = !0) => {
          let _v2 = this.item(_v0);
          if (!_v2) return;
          let _v3 = _v5(this.enabledIndexOf(_v2.node), this.enabledCount(), _v1);
          return this.enabledItem(_v3);
        }), _v3(this, "prev", (_v0, _v1 = !0) => {
          let _v2 = _v6(_v0, this.count() - 1, _v1);
          return this.item(_v2);
        }), _v3(this, "prevEnabled", (_v0, _v1 = !0) => {
          let _v2 = this.item(_v0);
          if (!_v2) return;
          let _v3 = _v6(this.enabledIndexOf(_v2.node), this.enabledCount() - 1, _v1);
          return this.enabledItem(_v3);
        }), _v3(this, "registerNode", (_v0, _v1) => {
          if (!_v0 || this.descendants.has(_v0)) return;
          let _v2 = _v4(Array.from(this.descendants.keys()).concat(_v0));
          (null == _v1 ? void 0 : _v1.disabled) && (_v1.disabled = !!_v1.disabled);
          let _v3 = {
            node: _v0,
            index: -1,
            ..._v1
          };
          this.descendants.set(_v0, _v3), this.assignIndex(_v2);
        });
      }
    },
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    [_v11, _v12] = (0, _v9.createContext)({
      name: "DescendantsProvider",
      errorMessage: "useDescendantsContext must be used within DescendantsProvider"
    });
  _v0.s(["createDescendantContext", 0, function () {
    return [_v11, () => _v12(), () => {
      let _v0;
      return _v0 = (0, _v1.useRef)(new _v8()), _v7(() => () => _v0.current.destroy()), _v0.current;
    }, _v0 => function (_v0) {
      let _v1 = _v12(),
        [_v2, _v3] = (0, _v1.useState)(-1),
        _v4 = (0, _v1.useRef)(null);
      _v7(() => () => {
        _v4.current && _v1.unregister(_v4.current);
      }, []), _v7(() => {
        if (!_v4.current) return;
        let _v0 = Number(_v4.current.dataset.index);
        _v2 == _v0 || Number.isNaN(_v0) || _v3(_v0);
      });
      let _v5 = _v0 ? _v1.register(_v0) : _v1.register;
      return {
        descendants: _v1,
        index: _v2,
        enabledIndex: _v1.enabledIndexOf(_v4.current),
        register: (0, _v10.mergeRefs)(_v5, _v4)
      };
    }(_v0)];
  }], 0);
}