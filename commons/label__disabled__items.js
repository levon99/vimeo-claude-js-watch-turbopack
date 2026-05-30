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
      }) : _v0[_v3] = _v2;
    },
    _v4 = {
      itemToValue: _v0 => "string" == typeof _v0 ? _v0 : (0, _v1.isObject)(_v0) && (0, _v1.hasProp)(_v0, "value") ? _v0.value : "",
      itemToString: _v0 => "string" == typeof _v0 ? _v0 : (0, _v1.isObject)(_v0) && (0, _v1.hasProp)(_v0, "label") ? _v0.label : _v4.itemToValue(_v0),
      isItemDisabled: _v0 => !!((0, _v1.isObject)(_v0) && (0, _v1.hasProp)(_v0, "disabled")) && !!_v0.disabled
    },
    _v5 = class _v0 {
      constructor(_v0) {
        this.options = _v0, _v3(this, "items"), _v3(this, "copy", _v0 => new _v0({
          ...this.options,
          items: _v0 ?? [...this.items]
        })), _v3(this, "isEqual", _v0 => (0, _v1.isEqual)(this.items, _v0.items)), _v3(this, "setItems", _v0 => this.copy(_v0)), _v3(this, "getValues", (_v0 = this.items) => Array.from(_v0).map(_v0 => this.getItemValue(_v0)).filter(Boolean)), _v3(this, "find", _v0 => {
          if (null == _v0) return null;
          let _v1 = this.indexOf(_v0);
          return null != _v1 ? this.at(_v1) : null;
        }), _v3(this, "findMany", _v0 => Array.from(_v0).map(_v0 => this.find(_v0)).filter(_v0 => null != _v0)), _v3(this, "at", _v0 => {
          if (!this.options.groupBy && !this.options.groupSort) return this.items[_v0] ?? null;
          let _v1 = 0;
          for (let [, _v0] of this.group()) for (let _v0 of _v0) {
            if (_v1 === _v0) return _v0;
            _v1++;
          }
          return null;
        }), _v3(this, "sortFn", (_v0, _v1) => (this.indexOf(_v0) ?? 0) - (this.indexOf(_v1) ?? 0)), _v3(this, "sort", _v0 => [..._v0].sort(this.sortFn.bind(this))), _v3(this, "getItemValue", _v0 => null == _v0 ? null : this.options.itemToValue?.(_v0) ?? _v4.itemToValue(_v0)), _v3(this, "getItemDisabled", _v0 => null != _v0 && (this.options.isItemDisabled?.(_v0) ?? _v4.isItemDisabled(_v0))), _v3(this, "stringifyItem", _v0 => null == _v0 ? null : this.options.itemToString?.(_v0) ?? _v4.itemToString(_v0)), _v3(this, "stringify", _v0 => null == _v0 ? null : this.stringifyItem(this.find(_v0))), _v3(this, "stringifyItems", (_v0, _v1 = ", ") => Array.from(_v0).map(_v0 => this.stringifyItem(_v0)).filter(Boolean).join(_v1)), _v3(this, "stringifyMany", (_v0, _v1) => this.stringifyItems(this.findMany(_v0), _v1)), _v3(this, "has", _v0 => -1 !== this.indexOf(_v0)), _v3(this, "hasItem", _v0 => null != _v0 && this.has(this.getItemValue(_v0))), _v3(this, "group", () => {
          let {
            groupBy: _v0,
            groupSort: _v1
          } = this.options;
          if (!_v0) return [["", [...this.items]]];
          let _v2 = new Map();
          this.items.forEach((_v0, _v1) => {
            let _v2 = _v0(_v0, _v1);
            _v2.has(_v2) || _v2.set(_v2, []), _v2.get(_v2).push(_v0);
          });
          let _v3 = Array.from(_v2.entries());
          return _v1 && _v3.sort(([_v0], [_v1]) => {
            if ("function" == typeof _v1) return _v1(_v0, _v1);
            if (Array.isArray(_v1)) {
              let _v0 = _v1.indexOf(_v0),
                _v1 = _v1.indexOf(_v1);
              return -1 === _v0 ? 1 : -1 === _v1 ? -1 : _v0 - _v1;
            }
            return "asc" === _v1 ? _v0.localeCompare(_v1) : "desc" === _v1 ? _v1.localeCompare(_v0) : 0;
          }), _v3;
        }), _v3(this, "getNextValue", (_v0, _v1 = 1, _v2 = !1) => {
          let _v3 = this.indexOf(_v0);
          if (-1 === _v3) return null;
          for (_v3 = _v2 ? Math.min(_v3 + _v1, this.size - 1) : _v3 + _v1; _v3 <= this.size && this.getItemDisabled(this.at(_v3));) _v3++;
          return this.getItemValue(this.at(_v3));
        }), _v3(this, "getPreviousValue", (_v0, _v1 = 1, _v2 = !1) => {
          let _v3 = this.indexOf(_v0);
          if (-1 === _v3) return null;
          for (_v3 = _v2 ? Math.max(_v3 - _v1, 0) : _v3 - _v1; _v3 >= 0 && this.getItemDisabled(this.at(_v3));) _v3--;
          return this.getItemValue(this.at(_v3));
        }), _v3(this, "indexOf", _v0 => {
          if (null == _v0) return -1;
          if (!this.options.groupBy && !this.options.groupSort) return this.items.findIndex(_v0 => this.getItemValue(_v0) === _v0);
          let _v1 = 0;
          for (let [, _v0] of this.group()) for (let _v0 of _v0) {
            if (this.getItemValue(_v0) === _v0) return _v1;
            _v1++;
          }
          return -1;
        }), _v3(this, "getByText", (_v0, _v1) => {
          let _v2 = null != _v1 ? _v7(this.items, this.indexOf(_v1)) : this.items;
          return 1 === _v0.length && (_v2 = _v2.filter(_v0 => this.getItemValue(_v0) !== _v1)), _v2.find(_v0 => _v6(this.stringifyItem(_v0), _v0));
        }), _v3(this, "search", (_v0, _v1) => {
          let {
              state: _v2,
              currentValue: _v3,
              timeout: _v4 = 350
            } = _v1,
            _v5 = _v2.keysSoFar + _v0,
            _v6 = _v5.length > 1 && Array.from(_v5).every(_v0 => _v0 === _v5[0]) ? _v5[0] : _v5,
            _v7 = this.getByText(_v6, _v3),
            _v8 = this.getItemValue(_v7);
          function _v9() {
            clearTimeout(_v2.timer), _v2.timer = -1;
          }
          return !function _v0(_v1) {
            _v2.keysSoFar = _v1, _v9(), "" !== _v1 && (_v2.timer = +setTimeout(() => {
              _v0(""), _v9();
            }, _v4));
          }(_v5), _v8;
        }), _v3(this, "update", (_v0, _v1) => {
          let _v2 = this.items.findIndex(_v0 => this.getItemValue(_v0) === _v0);
          return -1 === _v2 ? this : this.copy([...this.items.slice(0, _v2), _v1, ...this.items.slice(_v2 + 1)]);
        }), _v3(this, "insert", (_v0, ..._v1) => this.copy(_v8(this.items, _v0, ..._v1))), _v3(this, "insertBefore", (_v0, ..._v1) => {
          let _v2 = this.indexOf(_v0);
          if (-1 === _v2) if (0 !== this.items.length) return this;else _v2 = 0;
          return this.copy(_v8(this.items, _v2, ..._v1));
        }), _v3(this, "insertAfter", (_v0, ..._v1) => {
          let _v2 = this.indexOf(_v0);
          if (-1 === _v2) if (0 !== this.items.length) return this;else _v2 = 0;
          return this.copy(_v8(this.items, _v2 + 1, ..._v1));
        }), _v3(this, "prepend", (..._v0) => this.copy(_v8(this.items, 0, ..._v0))), _v3(this, "append", (..._v0) => this.copy(_v8(this.items, this.items.length, ..._v0))), _v3(this, "filter", _v0 => {
          let _v1 = this.items.filter((_v0, _v1) => _v0(this.stringifyItem(_v0), _v1));
          return this.copy(_v1);
        }), _v3(this, "remove", (..._v0) => {
          let _v1 = _v0.map(_v0 => "string" == typeof _v0 ? _v0 : this.getItemValue(_v0));
          return this.copy(this.items.filter(_v0 => {
            let _v1 = this.getItemValue(_v0);
            return null != _v1 && !_v1.includes(_v1);
          }));
        }), _v3(this, "move", (_v0, _v1) => {
          let _v2 = this.indexOf(_v0);
          return -1 === _v2 ? this : this.copy(_v9(this.items, [_v2], _v1));
        }), _v3(this, "moveBefore", (_v0, ..._v1) => {
          let _v2 = this.items.findIndex(_v0 => this.getItemValue(_v0) === _v0);
          if (-1 === _v2) return this;
          let _v3 = _v1.map(_v0 => this.items.findIndex(_v0 => this.getItemValue(_v0) === _v0)).sort((_v0, _v1) => _v0 - _v1);
          return this.copy(_v9(this.items, _v3, _v2));
        }), _v3(this, "moveAfter", (_v0, ..._v1) => {
          let _v2 = this.items.findIndex(_v0 => this.getItemValue(_v0) === _v0);
          if (-1 === _v2) return this;
          let _v3 = _v1.map(_v0 => this.items.findIndex(_v0 => this.getItemValue(_v0) === _v0)).sort((_v0, _v1) => _v0 - _v1);
          return this.copy(_v9(this.items, _v3, _v2 + 1));
        }), _v3(this, "reorder", (_v0, _v1) => this.copy(_v9(this.items, [_v0], _v1))), _v3(this, "compareValue", (_v0, _v1) => {
          let _v2 = this.indexOf(_v0),
            _v3 = this.indexOf(_v1);
          return _v2 < _v3 ? -1 : +(_v2 > _v3);
        }), _v3(this, "range", (_v0, _v1) => {
          let _v2 = [],
            _v3 = _v0;
          for (; null != _v3;) {
            if (this.find(_v3) && _v2.push(_v3), _v3 === _v1) return _v2;
            _v3 = this.getNextValue(_v3);
          }
          return [];
        }), _v3(this, "getValueRange", (_v0, _v1) => _v0 && _v1 ? 0 >= this.compareValue(_v0, _v1) ? this.range(_v0, _v1) : this.range(_v1, _v0) : []), _v3(this, "toString", () => {
          let _v0 = "";
          for (let _v0 of this.items) _v0 += [this.getItemValue(_v0), this.stringifyItem(_v0), this.getItemDisabled(_v0)].filter(Boolean).join(":") + ",";
          return _v0;
        }), _v3(this, "toJSON", () => ({
          size: this.size,
          first: this.firstValue,
          last: this.lastValue
        })), this.items = [..._v0.items];
      }
      get size() {
        return this.items.length;
      }
      get firstValue() {
        let _v0 = 0;
        for (; this.getItemDisabled(this.at(_v0));) _v0++;
        return this.getItemValue(this.at(_v0));
      }
      get lastValue() {
        let _v0 = this.size - 1;
        for (; this.getItemDisabled(this.at(_v0));) _v0--;
        return this.getItemValue(this.at(_v0));
      }
      *[Symbol.iterator]() {
        yield* this.items;
      }
    },
    _v6 = (_v0, _v1) => !!_v0?.toLowerCase().startsWith(_v1.toLowerCase()),
    _v7 = (_v0, _v1) => _v0.map((_v0, _v1) => _v0[(Math.max(_v1, 0) + _v1) % _v0.length]);
  function _v8(_v0, _v1, ..._v2) {
    return [..._v0.slice(0, _v1), ..._v2, ..._v0.slice(_v1)];
  }
  function _v9(_v0, _v1, _v2) {
    let _v3 = (_v1 = [..._v1].sort((_v0, _v1) => _v0 - _v1)).map(_v0 => _v0[_v0]);
    for (let _v0 = _v1.length - 1; _v0 >= 0; _v0--) _v0 = [..._v0.slice(0, _v1[_v0]), ..._v0.slice(_v1[_v0] + 1)];
    return _v2 = Math.max(0, _v2 - _v1.filter(_v0 => _v0 < _v2).length), [..._v0.slice(0, _v2), ..._v3, ..._v0.slice(_v2)];
  }
  (class _v0 extends Set {
    constructor(_v0 = []) {
      super(_v0), _v3(this, "selectionMode", "single"), _v3(this, "deselectable", !0), _v3(this, "copy", () => {
        let _v0 = new _v0([...this]);
        return this.sync(_v0);
      }), _v3(this, "sync", _v0 => (_v0.selectionMode = this.selectionMode, _v0.deselectable = this.deselectable, _v0)), _v3(this, "isEmpty", () => 0 === this.size), _v3(this, "isSelected", _v0 => "none" !== this.selectionMode && null != _v0 && this.has(_v0)), _v3(this, "canSelect", (_v0, _v1) => "none" !== this.selectionMode || !_v0.getItemDisabled(_v0.find(_v1))), _v3(this, "firstSelectedValue", _v0 => {
        let _v1 = null;
        for (let _v0 of this) (!_v1 || 0 > _v0.compareValue(_v0, _v1)) && (_v1 = _v0);
        return _v1;
      }), _v3(this, "lastSelectedValue", _v0 => {
        let _v1 = null;
        for (let _v0 of this) (!_v1 || _v0.compareValue(_v0, _v1) > 0) && (_v1 = _v0);
        return _v1;
      }), _v3(this, "extendSelection", (_v0, _v1, _v2) => {
        if ("none" === this.selectionMode) return this;
        if ("single" === this.selectionMode) return this.replaceSelection(_v0, _v2);
        let _v3 = this.copy(),
          _v4 = Array.from(this).pop();
        for (let _v0 of _v0.getValueRange(_v1, _v4 ?? _v2)) _v3.delete(_v0);
        for (let _v0 of _v0.getValueRange(_v2, _v1)) this.canSelect(_v0, _v0) && _v3.add(_v0);
        return _v3;
      }), _v3(this, "toggleSelection", (_v0, _v1) => {
        if ("none" === this.selectionMode) return this;
        if ("single" === this.selectionMode && !this.isSelected(_v1)) return this.replaceSelection(_v0, _v1);
        let _v2 = this.copy();
        return _v2.has(_v1) ? _v2.delete(_v1) : _v2.canSelect(_v0, _v1) && _v2.add(_v1), _v2;
      }), _v3(this, "replaceSelection", (_v0, _v1) => {
        if ("none" === this.selectionMode || null == _v1 || !this.canSelect(_v0, _v1)) return this;
        let _v2 = new _v0([_v1]);
        return this.sync(_v2);
      }), _v3(this, "setSelection", _v0 => {
        if ("none" === this.selectionMode) return this;
        let _v1 = new _v0();
        for (let _v0 of _v0) if (null != _v0 && (_v1.add(_v0), "single" === this.selectionMode)) break;
        return this.sync(_v1);
      }), _v3(this, "clearSelection", () => {
        let _v0 = this.copy();
        return _v0.deselectable && _v0.size > 0 && _v0.clear(), _v0;
      }), _v3(this, "select", (_v0, _v1, _v2) => {
        if ("none" === this.selectionMode) return this;
        if ("single" === this.selectionMode) if (this.isSelected(_v1) && this.deselectable) return this.toggleSelection(_v0, _v1);else return this.replaceSelection(_v0, _v1);
        return "multiple" === this.selectionMode || _v2 ? this.toggleSelection(_v0, _v1) : this.replaceSelection(_v0, _v1);
      }), _v3(this, "deselect", _v0 => {
        let _v1 = this.copy();
        return _v1.delete(_v0), _v1;
      }), _v3(this, "isEqual", _v0 => (0, _v1.isEqual)(Array.from(this), Array.from(_v0)));
    }
  }), _v0.s(["ListCollection", 0, _v5]);
}