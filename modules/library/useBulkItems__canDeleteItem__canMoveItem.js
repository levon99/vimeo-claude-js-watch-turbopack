{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useBulkItems", 0, ({
    canDeleteItem: _v0,
    canMoveItem: _v1,
    canChangeItemPrivacy: _v2,
    canAddToShowcases: _v3,
    hasLegalHold: _v4,
    items: _v5,
    selectedURIs: _v6 = new Set(),
    reviewId: _v7,
    allowColdStorageDeletion: _v8 = !1
  }) => {
    let {
        allItems: _v9,
        canDeleteURIs: _v10,
        canMoveURIs: _v11,
        canChangePrivacyURIs: _v12,
        canAddToShowcasesURIs: _v13,
        coldStorageSelectedURIs: _v14,
        itemsHaveLegalHold: _v15,
        canSelectURIs: _v16,
        selectedItems: _v17
      } = (0, _v1.useMemo)(() => {
        let _v0 = new Set(),
          _v1 = new Set(),
          _v2 = new Set(),
          _v3 = new Set(),
          _v4 = new Set(),
          _v5 = !1;
        if (!_v5) return {
          canDeleteURIs: _v0,
          canMoveURIs: _v1,
          canChangePrivacyURIs: _v2,
          canAddToShowcasesURIs: _v3,
          coldStorageSelectedURIs: _v4,
          canSelectURIs: new Set()
        };
        let _v6 = [],
          _v7 = [];
        _v5?.forEach(_v0 => {
          let _v1 = _v0.video?.uri || _v0.liveEvent?.uri || _v0.folder?.uri || _v0.showcase?.uri;
          if (!_v1) return;
          if (_v0.video?.uri && _v0.video.isColdStorage) {
            let _v0 = _v8 && !_v7 && !!_v0?.(_v0),
              _v1 = _v8 && !_v7 && (!!_v2?.(_v0) || _v0);
            if (!_v0 && !_v1) return void _v6.push({
              ..._v0,
              isSelectable: !1,
              isSelected: !1
            });
            _v0 && _v0.add(_v1), _v1 && _v2.add(_v1);
            let _v2 = _v6.has(_v1),
              _v3 = {
                ..._v0,
                isSelectable: !0,
                isSelected: _v2
              };
            return _v2 && (_v4.add(_v1), _v7.push(_v3)), void _v6.push(_v3);
          }
          let _v2 = !1,
            _v3 = !1;
          _v0?.(_v0) && (_v0.add(_v1), _v2 = !0), _v1?.(_v0) && (_v1.add(_v1), _v2 = !0), _v2?.(_v0) && (_v2.add(_v1), _v2 = !0), _v3?.(_v0) && (_v3.add(_v1), _v2 = !0), _v7 && (_v2 = !1), _v6.has(_v1) && (_v3 = !0, _v7.push({
            ..._v0,
            isSelectable: _v2,
            isSelected: _v3
          })), _v6.push({
            ..._v0,
            isSelectable: _v2,
            isSelected: _v3
          });
        }), _v5 = _v7.some(_v0 => _v4?.(_v0));
        let _v8 = (0, _v4.mergeSets)(_v0, _v1, _v2, _v3);
        return {
          allItems: _v6,
          canDeleteURIs: _v0,
          canMoveURIs: _v1,
          canChangePrivacyURIs: _v2,
          canAddToShowcasesURIs: _v3,
          coldStorageSelectedURIs: _v4,
          itemsHaveLegalHold: _v5,
          canSelectURIs: _v8,
          selectedItems: _v7
        };
      }, [_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8]),
      _v18 = (_v14?.size ?? 0) > 0,
      _v19 = _v6.size > 0 && (0, _v4.isSubsetOf)(_v6, _v10),
      _v20 = _v6.size > 0 && (0, _v4.isSubsetOf)(_v6, _v11),
      _v21 = _v6.size > 0 && (0, _v4.isSubsetOf)(_v6, _v12),
      _v22 = _v6.size > 0 && (0, _v4.isSubsetOf)(_v6, _v13),
      _v23 = _v6.size > 0 && _v15,
      {
        isEnabled: _v24
      } = (0, _v2.useEnableFolderBulkPrivacy)(),
      _v25 = _v24 ? _v3.MAX_SELECTION_FOR_NEW_BULK_PRIVACY : _v3.MAX_SELECTION_FOR_BULK_PRIVACY,
      _v26 = _v20 && _v6.size > _v3.MAX_SELECTION_FOR_BULK_MOVE,
      _v27 = _v21 && _v6.size > _v25,
      _v28 = _v21 && _v6.size > _v3.MAX_SELECTION_FOR_BULK_PRIVACY,
      _v29 = _v22 && _v6.size > _v3.MAX_SELECTION_FOR_BULK_ADD_TO_SHOWCASES;
    return {
      allItems: _v9,
      canDeleteSelection: _v19,
      canMoveSelection: _v20,
      canChangePrivacySelection: _v21,
      canAddToShowcasesSelection: _v22,
      hasColdStorageSelection: _v18,
      hasLegalHoldSelection: _v23,
      canSelectURIs: _v16,
      selectedItems: _v17,
      hasReachedMaxSelectionForMove: _v26,
      hasReachedMaxSelectionForPrivacy: _v27,
      hasReachedMaxSelectionForSentimentWidget: _v28,
      hasReachedMaxSelectionForShowcases: _v29
    };
  }]);
}