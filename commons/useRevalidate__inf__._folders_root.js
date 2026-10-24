{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => {
    Object.assign(_v0, {
      _i: !0
    });
  };
  _v0.s(["useRevalidate", 0, function () {
    let _v0 = (0, _v2.useMatchMutate)(),
      {
        cache: _v1
      } = (0, _v1.useSWRConfig)(),
      _v2 = _v0 => {
        let _v1 = new RegExp(_v0);
        for (let _v0 of _v1.keys()) {
          if (!_v0.startsWith("$inf$") || !_v1.test(_v0)) continue;
          let _v0 = _v1.get(_v0);
          null != _v0 && _v4(_v0);
        }
        return _v0(_v0);
      },
      _v3 = () => {
        for (let _v0 of _v3.FOLDER_ITEM_LIST_CACHE_PATTERNS) _v2(_v0);
      };
    return {
      revalidateFolder: _v0 => {
        _v2(`.*${_v0}(?!/)`);
      },
      revalidateFolderItems: _v0 => {
        _v2(`.*${_v0}/items.*`);
      },
      revalidateRootItems: _v0 => {
        _v0 ? _v2(`.*${_v0}/folders/root*`) : _v2(".*/folders/root*");
      },
      revalidateTopLevelFolders: _v0 => {
        _v0 ? _v2(`.*${_v0}/projects.*topLevelOnly=true.*`) : _v2(".*/projects.*topLevelOnly=true.*");
      },
      revalidateSetOfFolderItems: _v0 => {
        for (let _v0 of _v0) _v2(`.*${_v0}/items.*`);
      },
      revalidateItemLists: _v3,
      revalidateFolderSettingsConsumers: () => {
        _v3(), _v2(".*/projects/\\d+\\?.*");
      }
    };
  }]);
}