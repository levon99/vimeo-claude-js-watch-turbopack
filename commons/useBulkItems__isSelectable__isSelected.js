{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = {
      ..._v0,
      isSelectable: _v2,
      isSelected: !1
    };
    return {
      canBeSelected: _v3,
      isColdStorage: _v4,
      selected: _v3 ? {
        ..._v0,
        isSelectable: _v2,
        isSelected: !0
      } : _v5,
      unselected: _v5,
      uri: _v1
    };
  };
  _v0.s(["useBulkItems", 0, ({
    canDeleteItem: _v0,
    canMoveItem: _v1,
    canChangeItemPrivacy: _v2,
    canAddToShowcases: _v3,
    hasLegalHold: _v4,
    items: _v5,
    selectedURIs: _v6 = new Set(),
    isReadOnly: _v7 = !1,
    allowColdStorageDeletion: _v8 = !1
  }) => {
    let {
        baseItems: _v9,
        canDeleteURIs: _v10,
        canMoveURIs: _v11,
        canChangePrivacyURIs: _v12,
        canAddToShowcasesURIs: _v13,
        canSelectURIs: _v14
      } = (0, _v1.useMemo)(() => {
        let _v0 = new Set(),
          _v1 = new Set(),
          _v2 = new Set(),
          _v3 = new Set();
        if (!_v5) return {
          baseItems: [],
          canDeleteURIs: _v0,
          canMoveURIs: _v1,
          canChangePrivacyURIs: _v2,
          canAddToShowcasesURIs: _v3,
          canSelectURIs: new Set()
        };
        let _v4 = [];
        _v5.forEach(_v0 => {
          let _v1 = _v0.video?.uri || _v0.liveEvent?.uri || _v0.folder?.uri || _v0.showcase?.uri || _v0.file?.uri;
          if (!_v1) return;
          let _v2 = !!(_v0.video?.uri && _v0.video.isColdStorage);
          if (_v2) {
            let _v0 = _v8 && !_v7 && !!_v0?.(_v0),
              _v1 = _v8 && !_v7 && (!!_v2?.(_v0) || _v0);
            return _v0 || _v1 ? (_v0 && _v0.add(_v1), _v1 && _v2.add(_v1), void _v4.push(_v4(_v0, _v1, !0, !0, _v2))) : void _v4.push(_v4(_v0, _v1, !1, !1, _v2));
          }
          let _v3 = !1;
          _v0?.(_v0) && (_v0.add(_v1), _v3 = !0), _v1?.(_v0) && (_v1.add(_v1), _v3 = !0), _v2?.(_v0) && (_v2.add(_v1), _v3 = !0), _v3?.(_v0) && (_v3.add(_v1), _v3 = !0), _v7 && (_v3 = !1), _v4.push(_v4(_v0, _v1, _v3, !0, _v2));
        });
        let _v5 = (0, _v3.mergeSets)(_v0, _v1, _v2, _v3);
        return {
          baseItems: _v4,
          canDeleteURIs: _v0,
          canMoveURIs: _v1,
          canChangePrivacyURIs: _v2,
          canAddToShowcasesURIs: _v3,
          canSelectURIs: _v5
        };
      }, [_v0, _v1, _v2, _v3, _v5, _v7, _v8]),
      {
        allItems: _v15,
        coldStorageSelectedURIs: _v16,
        itemsHaveLegalHold: _v17,
        selectedItems: _v18
      } = (0, _v1.useMemo)(() => {
        let _v0 = [],
          _v1 = [],
          _v2 = new Set();
        for (let _v0 of _v9) {
          let _v0 = _v0.canBeSelected && _v6.has(_v0.uri),
            _v1 = _v0 ? _v0.selected : _v0.unselected;
          _v0.push(_v1), _v0 && (_v1.push(_v1), _v0.isColdStorage && _v2.add(_v0.uri));
        }
        return {
          allItems: _v0,
          coldStorageSelectedURIs: _v2,
          itemsHaveLegalHold: _v1.some(_v0 => _v4?.(_v0)),
          selectedItems: _v1
        };
      }, [_v9, _v6, _v4]),
      _v19 = (_v16?.size ?? 0) > 0,
      _v20 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v10),
      _v21 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v11),
      _v22 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v12),
      _v23 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v13),
      _v24 = _v6.size > 0 && _v17,
      _v25 = _v21 && _v6.size > _v2.MAX_SELECTION_FOR_BULK_MOVE,
      _v26 = _v22 && _v6.size > _v2.MAX_SELECTION_FOR_NEW_BULK_PRIVACY,
      _v27 = _v22 && _v6.size > _v2.MAX_SELECTION_FOR_BULK_PRIVACY,
      _v28 = _v23 && _v6.size > _v2.MAX_SELECTION_FOR_BULK_ADD_TO_SHOWCASES;
    return {
      allItems: _v15,
      canDeleteSelection: _v20,
      canMoveSelection: _v21,
      canChangePrivacySelection: _v22,
      canAddToShowcasesSelection: _v23,
      hasColdStorageSelection: _v19,
      hasLegalHoldSelection: _v24,
      canSelectURIs: _v14,
      selectedItems: _v18,
      hasReachedMaxSelectionForMove: _v25,
      hasReachedMaxSelectionForPrivacy: _v26,
      hasReachedMaxSelectionForSentimentWidget: _v27,
      hasReachedMaxSelectionForShowcases: _v28,
      maxBulkActionSelection: (0, _v1.useMemo)(() => Math.max(_v2.MAX_SELECTION_FOR_BULK_MOVE, _v2.MAX_SELECTION_FOR_NEW_BULK_PRIVACY, _v2.MAX_SELECTION_FOR_BULK_ADD_TO_SHOWCASES), [])
    };
  }]);
}