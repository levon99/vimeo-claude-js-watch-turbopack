{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useRevalidate", 0, function () {
    let _v0 = (0, _v1.default)();
    return {
      revalidateFolder: _v0 => {
        _v0(`.*${_v0}(?!/)`);
      },
      revalidateFolderItems: _v0 => {
        _v0(`.*${_v0}/items.*`);
      },
      revalidateRootItems: _v0 => {
        _v0 ? _v0(`.*${_v0}/folders/root*`) : _v0(".*/folders/root*");
      },
      revalidateTopLevelFolders: _v0 => {
        _v0 ? _v0(`.*${_v0}/projects.*topLevelOnly=true.*`) : _v0(".*/projects.*topLevelOnly=true.*");
      },
      revalidateSetOfFolderItems: _v0 => {
        for (let _v0 of _v0) _v0(`.*${_v0}/items.*`);
      }
    };
  }]);
}