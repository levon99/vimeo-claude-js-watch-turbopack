{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      totalCount: 0,
      selectedItems: new Set(),
      areAllItemsSelected: !1
    },
    _v5 = {
      handleSelect: _v2.default,
      handleSelectAll: _v2.default,
      handleUnselect: _v2.default,
      handleUnselectAll: _v2.default,
      resetSelection: _v2.default
    },
    _v6 = (0, _v3.createContext)({
      ..._v4,
      ..._v5
    }),
    _v7 = (_v0, _v1) => {
      let _v2 = new Set(_v0.selectedItems);
      switch (_v1.type) {
        case "SELECT_ONE":
          _v2.add(_v1.payload);
          let _v0 = _v2.size >= _v0.totalCount;
          return {
            ..._v0,
            selectedItems: _v2,
            areAllItemsSelected: _v0
          };
        case "SELECT_ALL":
          return _v2 = new Set(_v1.payload), {
            ..._v0,
            selectedItems: _v2,
            areAllItemsSelected: !0
          };
        case "UNSELECT_ONE":
          return _v2.delete(_v1.payload), {
            ..._v0,
            selectedItems: _v2,
            areAllItemsSelected: !1
          };
        case "UNSELECT_ALL":
          return _v2.clear(), {
            ..._v0,
            selectedItems: _v2,
            areAllItemsSelected: !1
          };
        case "RESET_TOTAL_COUNT":
          return {
            ..._v0,
            totalCount: _v1.payload
          };
      }
    };
  _v0.s(["SelectionProvider", 0, ({
    children: _v0,
    initTotalCount: _v1
  }) => {
    let [_v2, _v3] = (0, _v3.useReducer)(_v7, {
      ..._v4,
      ..._v5,
      totalCount: _v1
    });
    (0, _v3.useEffect)(() => {
      _v3({
        type: "RESET_TOTAL_COUNT",
        payload: _v1
      });
    }, [_v3, _v1]);
    let _v4 = (0, _v3.useCallback)(_v0 => {
        _v3({
          type: "SELECT_ALL",
          payload: _v0
        });
      }, []),
      _v5 = (0, _v3.useCallback)(() => {
        _v3({
          type: "UNSELECT_ALL"
        });
      }, []),
      _v6 = (0, _v3.useCallback)(_v0 => {
        _v3({
          type: "SELECT_ONE",
          payload: _v0
        });
      }, []),
      _v7 = (0, _v3.useCallback)(_v0 => {
        _v3({
          type: "UNSELECT_ONE",
          payload: _v0
        });
      }, []),
      _v8 = (0, _v3.useCallback)(() => {
        _v2.selectedItems.size > 0 && _v3({
          type: "UNSELECT_ALL"
        });
      }, [_v2.selectedItems.size]);
    return (0, _v1.jsx)(_v6.Provider, {
      value: {
        ..._v2,
        handleSelectAll: _v4,
        handleUnselectAll: _v5,
        handleSelect: _v6,
        handleUnselect: _v7,
        resetSelection: _v8
      },
      children: _v0
    });
  }, "useSelectionContext", 0, () => {
    let _v0 = (0, _v3.useContext)(_v6);
    if (!_v0) throw Error("useSelectionContext must be used within SelectionProvider");
    return _v0;
  }]);
}