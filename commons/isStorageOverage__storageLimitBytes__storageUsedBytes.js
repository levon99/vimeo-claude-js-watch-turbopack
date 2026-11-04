{
  "use strict";

  _v0.s(["isStorageOverage", 0, _v0 => {
    let _v1 = _v0?.storageLimitBytes ?? null;
    if (null !== _v1) return (_v0?.storageUsedBytes ?? 0) > _v1;
    let _v2 = Math.max(_v0?.frozenVideosCount ?? 0, _v0?.frozenVideosPreview?.length ?? 0),
      _v3 = Math.max(_v0?.frozenFilesCount ?? 0, _v0?.frozenFilesPreview?.length ?? 0);
    return _v2 > 0 || _v3 > 0;
  }]);
}