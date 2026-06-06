{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useBulkItems", 0, ({
    canDeleteItem: _v0,
    canMoveItem: _v1,
    canChangeItemPrivacy: _v2,
    canAddToShowcases: _v3,
    hasLegalHold: _v4,
    items: _v5,
    selectedURIs: _v6 = new Set(),
    reviewId: _v7
  }) => {
    let {
        allItems: _v8,
        canDeleteURIs: _v9,
        canMoveURIs: _v10,
        canChangePrivacyURIs: _v11,
        canAddToShowcasesURIs: _v12,
        itemsHaveLegalHold: _v13,
        canSelectURIs: _v14,
        selectedItems: _v15
      } = (0, _v1.useMemo)(() => {
        let _v0 = new Set(),
          _v1 = new Set(),
          _v2 = new Set(),
          _v3 = new Set(),
          _v4 = !1;
        if (!_v5) return {
          canDeleteURIs: _v0,
          canMoveURIs: _v1,
          canChangePrivacyURIs: _v2,
          canAddToShowcasesURIs: _v3,
          canSelectURIs: new Set()
        };
        let _v5 = [],
          _v6 = [];
        _v5?.forEach(_v0 => {
          let _v1 = _v0.video?.uri || _v0.liveEvent?.uri || _v0.folder?.uri || _v0.showcase?.uri;
          if (!_v1) return;
          if (_v0.video?.uri && _v0.video.isColdStorage) return void _v5.push({
            ..._v0,
            isSelectable: !1,
            isSelected: !1
          });
          let _v2 = !1,
            _v3 = !1;
          _v0?.(_v0) && (_v0.add(_v1), _v2 = !0), _v1?.(_v0) && (_v1.add(_v1), _v2 = !0), _v2?.(_v0) && (_v2.add(_v1), _v2 = !0), _v3?.(_v0) && (_v3.add(_v1), _v2 = !0), _v7 && (_v2 = !1), _v6.has(_v1) && (_v3 = !0, _v6.push({
            ..._v0,
            isSelectable: _v2,
            isSelected: _v3
          })), _v5.push({
            ..._v0,
            isSelectable: _v2,
            isSelected: _v3
          });
        }), _v4 = _v6.some(_v0 => _v4?.(_v0));
        let _v7 = (0, _v3.mergeSets)(_v0, _v1, _v2, _v3);
        return {
          allItems: _v5,
          canDeleteURIs: _v0,
          canMoveURIs: _v1,
          canChangePrivacyURIs: _v2,
          canAddToShowcasesURIs: _v3,
          itemsHaveLegalHold: _v4,
          canSelectURIs: _v7,
          selectedItems: _v6
        };
      }, [_v0, _v1, _v2, _v3, _v4, _v5, _v6]),
      _v16 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v9),
      _v17 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v10),
      _v18 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v11),
      _v19 = _v6.size > 0 && (0, _v3.isSubsetOf)(_v6, _v12),
      _v20 = _v6.size > 0 && _v13,
      _v21 = _v17 && _v6.size > _v2.MAX_SELECTION_FOR_BULK_MOVE,
      _v22 = _v18 && _v6.size > _v2.MAX_SELECTION_FOR_BULK_PRIVACY,
      _v23 = _v18 && _v6.size > _v2.MAX_SELECTION_FOR_BULK_PRIVACY,
      _v24 = _v19 && _v6.size > _v2.MAX_SELECTION_FOR_BULK_ADD_TO_SHOWCASES;
    return {
      allItems: _v8,
      canDeleteSelection: _v16,
      canMoveSelection: _v17,
      canChangePrivacySelection: _v18,
      canAddToShowcasesSelection: _v19,
      hasLegalHoldSelection: _v20,
      canSelectURIs: _v14,
      selectedItems: _v15,
      hasReachedMaxSelectionForMove: _v21,
      hasReachedMaxSelectionForPrivacy: _v22,
      hasReachedMaxSelectionForSentimentWidget: _v23,
      hasReachedMaxSelectionForShowcases: _v24
    };
  }]);
}