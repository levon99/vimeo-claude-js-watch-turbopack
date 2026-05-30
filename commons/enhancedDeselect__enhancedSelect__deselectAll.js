{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1) => {
      switch (_v1.type) {
        case "enhancedDeselect":
          return _v5(_v0, _v1.payload.uri, _v1.payload.index, _v1.payload.allItems);
        case "enhancedSelect":
          return _v6(_v0, _v1.payload.uri, _v1.payload.index, _v1.payload.allItems);
        case "deselectAll":
          return {
            selectedItemURIs: new Set(),
            lastSelectedClipIndex: void 0
          };
        case "selectAll":
          return _v8(_v1.payload.selectableItemUris ?? new Set(), _v1.payload.allItems);
        case "shiftKey":
          let _v0 = _v1.payload.isShiftKeyActive ?? !1;
          return {
            ..._v0,
            isShiftKeyActive: _v0
          };
      }
    },
    _v3 = (_v0, _v1) => {
      let _v2 = _v7(_v0);
      _v2 && !_v1.has(_v2) && _v1.add(_v2);
    },
    _v4 = (_v0, _v1) => {
      let _v2 = _v7(_v0);
      _v2 && _v1.has(_v2) && _v1.delete(_v2);
    },
    _v5 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v0.lastSelectedClipIndex,
        _v5 = new Set(_v0.selectedItemURIs),
        _v6 = _v0.isShiftKeyActive ?? !1;
      if (!_v2 || void 0 === _v4) return _v5.delete(_v1), {
        selectedItemURIs: _v5,
        lastSelectedClipIndex: _v2 ?? 0,
        isShiftKeyActive: _v6
      };
      let _v7 = _v4 > _v2,
        _v8 = _v7 ? _v2 : _v4,
        _v9 = _v7 ? _v4 : _v2;
      if (_v6 && _v3) for (let _v0 = _v8; _v0 <= _v9; _v0++) _v4(_v3[_v0], _v5);else _v5.delete(_v1);
      return {
        selectedItemURIs: _v5,
        lastSelectedClipIndex: _v2,
        isShiftKeyActive: _v6
      };
    },
    _v6 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v0.lastSelectedClipIndex,
        _v5 = new Set(_v0.selectedItemURIs),
        _v6 = _v0.isShiftKeyActive ?? !1;
      if (void 0 === _v4) return _v5.add(_v1), {
        selectedItemURIs: _v5,
        lastSelectedClipIndex: _v2,
        isShiftKeyActive: _v6
      };
      let _v7 = _v4 > _v2,
        _v8 = _v7 ? _v2 : _v4,
        _v9 = _v7 ? _v4 : _v2;
      if (_v6 && _v3) for (let _v0 = _v8; _v0 <= _v9; _v0++) _v3(_v3[_v0], _v5);else _v5.add(_v1);
      return {
        selectedItemURIs: _v5,
        lastSelectedClipIndex: _v2,
        isShiftKeyActive: _v6
      };
    },
    _v7 = _v0 => {
      let _v1 = null;
      if ("video" in _v0 || "liveEvent" in _v0) {
        if (_v0.video?.uri && _v0.video.isColdStorage) return null;
        _v1 = _v0.video?.uri || _v0.liveEvent?.uri;
      } else _v1 = _v0.uri;
      return _v1;
    },
    _v8 = (_v0, _v1) => {
      if (!_v1) return {
        selectedItemURIs: new Set(),
        lastSelectedClipIndex: 0
      };
      {
        let _v0 = new Set();
        for (let _v0 = 0; _v0 < _v1.length; _v0++) {
          let _v0 = _v7(_v1[_v0]);
          _v0 && (0 === _v0.size || _v0.has(_v0)) && _v0.add(_v0);
        }
        return {
          selectedItemURIs: _v0,
          lastSelectedClipIndex: 0
        };
      }
    };
  _v0.s(["useSelectedItems", 0, () => {
    let _v0 = {
        selectedItemURIs: new Set(),
        lastSelectedClipIndex: void 0,
        isShiftKeyActive: !1
      },
      [_v1, _v2] = (0, _v1.useReducer)(_v2, _v0),
      _v3 = (0, _v1.useCallback)((_v0, _v1, _v2) => _v2({
        type: "enhancedDeselect",
        payload: {
          uri: _v0,
          index: _v1,
          allItems: _v2
        }
      }), []),
      _v4 = (0, _v1.useCallback)((_v0, _v1, _v2) => _v2({
        type: "enhancedSelect",
        payload: {
          uri: _v0,
          index: _v1,
          allItems: _v2
        }
      }), []),
      _v5 = (0, _v1.useCallback)(() => _v2({
        type: "deselectAll"
      }), []),
      _v6 = (0, _v1.useCallback)((_v0, _v1) => _v2({
        type: "selectAll",
        payload: {
          allItems: _v0,
          selectableItemUris: _v1
        }
      }), []);
    return [_v1, {
      enhancedDeselectItem: _v3,
      deselectAllItems: _v5,
      enhancedSelectItem: _v4,
      selectAllItems: _v6,
      shiftKeyChange: (0, _v1.useCallback)(_v0 => _v2({
        type: "shiftKey",
        payload: {
          isShiftKeyActive: _v0
        }
      }), [])
    }];
  }]);
}