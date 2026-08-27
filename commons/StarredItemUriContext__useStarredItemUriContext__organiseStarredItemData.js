{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v5.createContext)(void 0),
    _v7 = () => {
      let _v0 = (0, _v5.useContext)(_v6);
      return {
        starredItemsUri: _v0?.starredItemsUri,
        mutateStarredItemsUri: _v0?.mutateStarredItemsUri,
        starredItemsUriData: _v0?.starredItemsUriData
      };
    };
  _v0.s(["StarredItemUriContext", 0, _v6, "useStarredItemUriContext", 0, _v7], 0), _v0.s(["organiseStarredItemData", 0, _v0 => {
    let _v1 = {};
    return _v0 && _v0.length > 0 && _v0.forEach(_v0 => {
      var _v1;
      let {
        uri: _v2,
        type: _v3
      } = _v0;
      _v1 = _v0[_v3], _v1[_v3] || (_v1[_v3] = new Map()), _v1[_v3].set(_v1?.uri, _v2);
    }), _v1;
  }, "useStarredItem", 0, function () {
    let _v0 = (0, _v3.useViewer)(),
      [_v1] = (0, _v2.usePostUserMemberListsStarredItems)(),
      [_v2] = (0, _v1.useDeleteUserMemberListItems)(),
      {
        mutateStarredItemsData: _v3,
        starredListResponseData: _v4
      } = (0, _v4.useStarredItemDataContext)(),
      {
        starredItemsUriData: _v5,
        mutateStarredItemsUri: _v6
      } = _v7(),
      _v7 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      _v8 = _v0?.user?.id;
    return {
      markItemAsStarred: async (_v0, _v1, _v2, _v3) => {
        let _v4 = _v5 && _v5.length > 0 && _v5[0].data ? [{
            ..._v5[0],
            data: [..._v5[0].data, {
              [_v1]: {
                uri: _v0
              },
              type: _v1
            }]
          }] : [{
            data: [{
              [_v1]: {
                uri: _v0
              },
              type: _v1
            }]
          }],
          _v5 = _v2 && (_v4 && _v4.length > 0 && _v4[0].data ? [{
            ..._v4[0],
            data: [{
              [_v1]: {
                ..._v2
              },
              type: _v1,
              name: _v2.name,
              status: "active"
            }, ..._v4[0].data]
          }] : [{
            data: [{
              [_v1]: {
                uri: _v0
              },
              type: _v1
            }]
          }]);
        _v6?.(_v4, !1), _v3 && _v2 && _v3?.(_v5, !1), await _v1({
          variables: {
            items: [{
              uri: _v0
            }]
          },
          where: {
            userId: _v7,
            teamMemberId: _v8
          }
        }), _v3?.(), _v6?.();
      },
      removeItemAsStarred: async (_v0, _v1, _v2, _v3) => {
        let _v4,
          _v5,
          _v6 = _v5 && _v5.length > 0 && _v5[0].data ? [{
            ..._v5[0],
            data: _v5[0].data.filter(_v0 => _v0.type !== _v2 || _v0[_v2] && _v0[_v2]?.uri !== _v0)
          }] : _v5,
          _v7 = _v4 && _v4.length > 0 && _v4[0].data ? _v4.map(_v0 => ({
            ..._v0,
            data: _v0.data.filter(_v0 => _v0?.[_v0?.type]?.uri !== _v0)
          })) : _v4;
        _v3 && _v3?.(_v7, !1), _v6?.(_v6, !1), await _v2({
          where: {
            userId: _v7,
            teamMemberId: _v8,
            listUuid: (_v4 = _v1.indexOf("lists/") + 6, _v5 = _v1.indexOf("/items"), _v1.substring(_v4, _v5))
          },
          query: {
            items: `${_v1}`
          }
        }), _v3?.(), _v6?.();
      }
    };
  }], 0);
}