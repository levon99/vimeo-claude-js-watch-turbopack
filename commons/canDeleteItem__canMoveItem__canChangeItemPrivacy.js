{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v0 => _v0.video?.uri || _v0.liveEvent?.uri || _v0.folder?.uri || _v0.showcase?.uri;
  var _v8 = _v5;
  let _v9 = ["canDeleteItem", "canMoveItem", "canChangeItemPrivacy", "canAddToShowcases", "hasLegalHold"],
    _v10 = _v0 => ({
      canDeleteItem: _v0.canDeleteItem?.test,
      canMoveItem: _v0.canMoveItem?.test,
      canChangeItemPrivacy: _v0.canChangeItemPrivacy?.test,
      canAddToShowcases: _v0.canAddToShowcases?.test,
      hasLegalHold: _v0.hasLegalHold?.test
    }),
    _v11 = ["type", "video.uri", "video.isColdStorage", "liveEvent.uri"],
    _v12 = ["video.name", "video.duration", "video.allowedPrivacies", "video.embed.sentimentWidgets", "video.isCopyrightRestricted", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.comments", "video.regionalPrivacies", "video.parentProject.uri", "video.parentProject.isPrivateToUser", "liveEvent.title", "liveEvent.eventType"];
  _v0.s(["toPredicateFns", 0, _v10, "useSelectAllItems", 0, ({
    enabled: _v0,
    maxItems: _v1 = _v8.MAX_SELECTION_FOR_NEW_BULK_PRIVACY,
    source: _v2,
    predicates: _v3
  }) => {
    let _v4 = "project" === _v2.kind ? _v2.reviewId : void 0,
      _v5 = (0, _v1.useMemo)(() => Array.from(new Set([..._v11, ..._v12, ..._v9.flatMap(_v0 => [...(_v3[_v0]?.fields ?? [])])])), [_v3]),
      {
        data: _v6
      } = (0, _v4.useGetUserProjectItems)(() => _v0 && "project" === _v2.kind ? {
        where: {
          userId: _v2.userId,
          projectId: _v2.projectId
        },
        select: _v5,
        query: {
          filter: "video",
          perPage: _v1,
          liveEventType: "all",
          noPadding: !0,
          responsive: !0,
          includeColdStorageClips: _v2.includeColdStorageClips,
          reviewId: _v2.reviewId,
          password: _v2.password
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      {
        data: _v7
      } = (0, _v3.useGetUserFoldersRoot)(() => _v0 && "root" === _v2.kind ? {
        where: {
          userId: _v2.userId
        },
        select: _v5,
        query: {
          filter: "video",
          perPage: _v1,
          excludePersonalTeamFolder: _v2.excludePersonalTeamFolder,
          flattenPrivateToMe: _v2.flattenPrivateToMe,
          excludeSharedVideos: _v2.excludeSharedVideos,
          includeColdStorageClips: _v2.includeColdStorageClips
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4"
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v8 = "project" === _v2.kind ? _v6 : _v7,
      _v9 = (0, _v1.useMemo)(() => _v8?.data ?? [], [_v8]),
      {
        isEnabled: _v10
      } = (0, _v2.useEnableFolderBulkPrivacy)(),
      _v11 = _v10 ? _v8.MAX_SELECTION_FOR_NEW_BULK_PRIVACY : _v8.MAX_SELECTION_FOR_BULK_PRIVACY;
    return {
      isLoading: _v0 && !_v8,
      isReady: _v0 && !!_v8,
      ...(0, _v1.useMemo)(() => {
        let _v0 = new Set();
        for (let _v0 of _v9) {
          let _v0 = _v7(_v0);
          _v0 && _v0.add(_v0);
        }
        let _v1 = (({
            items: _v0,
            selectedURIs: _v1,
            canDeleteItem: _v2,
            canMoveItem: _v3,
            canChangeItemPrivacy: _v4,
            canAddToShowcases: _v5,
            hasLegalHold: _v6,
            reviewId: _v7,
            allowColdStorageDeletion: _v8 = !1
          }) => {
            let _v9 = new Set(),
              _v10 = new Set(),
              _v11 = new Set(),
              _v12 = new Set(),
              _v13 = new Set(),
              _v14 = new Set();
            if (!_v0) return {
              canDeleteURIs: _v9,
              canMoveURIs: _v10,
              canChangePrivacyURIs: _v11,
              canAddToShowcasesURIs: _v12,
              coldStorageSelectedURIs: _v13,
              canSelectURIs: _v14
            };
            let _v15 = [],
              _v16 = [];
            return _v0.forEach(_v0 => {
              let _v1 = _v7(_v0);
              if (!_v1) return;
              if (_v0.video?.uri && _v0.video.isColdStorage) {
                let _v0 = _v8 && !_v7 && !!_v2?.(_v0),
                  _v1 = _v8 && !_v7 && (!!_v4?.(_v0) || _v0);
                if (!_v0 && !_v1) return void _v15.push({
                  ..._v0,
                  isSelectable: !1,
                  isSelected: !1
                });
                _v0 && _v9.add(_v1), _v1 && _v11.add(_v1), _v14.add(_v1);
                let _v2 = _v1.has(_v1),
                  _v3 = {
                    ..._v0,
                    isSelectable: !0,
                    isSelected: _v2
                  };
                return _v2 && (_v13.add(_v1), _v16.push(_v3)), void _v15.push(_v3);
              }
              let _v2 = !1;
              _v2?.(_v0) && (_v9.add(_v1), _v2 = !0), _v3?.(_v0) && (_v10.add(_v1), _v2 = !0), _v4?.(_v0) && (_v11.add(_v1), _v2 = !0), _v5?.(_v0) && (_v12.add(_v1), _v2 = !0), _v2 && _v14.add(_v1);
              let _v3 = _v2 && !_v7,
                _v4 = _v1.has(_v1),
                _v5 = {
                  ..._v0,
                  isSelectable: _v3,
                  isSelected: _v4
                };
              _v4 && _v16.push(_v5), _v15.push(_v5);
            }), {
              allItems: _v15,
              canDeleteURIs: _v9,
              canMoveURIs: _v10,
              canChangePrivacyURIs: _v11,
              canAddToShowcasesURIs: _v12,
              coldStorageSelectedURIs: _v13,
              itemsHaveLegalHold: _v16.some(_v0 => _v6?.(_v0)),
              canSelectURIs: _v14,
              selectedItems: _v16
            };
          })({
            ..._v10(_v3),
            items: _v9,
            selectedURIs: _v0,
            reviewId: _v4,
            allowColdStorageDeletion: !0
          }),
          _v2 = _v1.canSelectURIs,
          _v3 = (_v1.selectedItems ?? []).filter(_v0 => _v2.has(_v7(_v0) ?? "")),
          _v4 = (({
            sets: _v0,
            selectedURIs: _v1,
            maxSelectionForPrivacy: _v2
          }) => {
            let _v3 = (_v0.coldStorageSelectedURIs?.size ?? 0) > 0,
              _v4 = _v1.size > 0 && (0, _v6.isSubsetOf)(_v1, _v0.canDeleteURIs),
              _v5 = _v1.size > 0 && (0, _v6.isSubsetOf)(_v1, _v0.canMoveURIs),
              _v6 = _v1.size > 0 && (0, _v6.isSubsetOf)(_v1, _v0.canChangePrivacyURIs),
              _v7 = _v1.size > 0 && (0, _v6.isSubsetOf)(_v1, _v0.canAddToShowcasesURIs),
              _v8 = _v1.size > 0 && !!_v0.itemsHaveLegalHold,
              _v9 = _v5 && _v1.size > _v5.MAX_SELECTION_FOR_BULK_MOVE,
              _v10 = _v6 && _v1.size > _v2,
              _v11 = _v6 && _v1.size > _v5.MAX_SELECTION_FOR_BULK_PRIVACY,
              _v12 = _v7 && _v1.size > _v5.MAX_SELECTION_FOR_BULK_ADD_TO_SHOWCASES;
            return {
              canDeleteSelection: _v4,
              canMoveSelection: _v5,
              canChangePrivacySelection: _v6,
              canAddToShowcasesSelection: _v7,
              hasColdStorageSelection: _v3,
              hasLegalHoldSelection: _v8,
              hasReachedMaxSelectionForMove: _v9,
              hasReachedMaxSelectionForPrivacy: _v10,
              hasReachedMaxSelectionForSentimentWidget: _v11,
              hasReachedMaxSelectionForShowcases: _v12
            };
          })({
            sets: _v1,
            selectedURIs: _v2,
            maxSelectionForPrivacy: _v11
          });
        return {
          selectedItemURIs: _v2,
          selectedItems: _v3,
          ..._v4
        };
      }, [_v9, _v3, _v4, _v11])
    };
  }], 0);
}