{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "folder-copy-protected-videos-warned",
    _v4 = () => {
      try {
        let _v0 = _v2.safeSessionStorage?.getItem(_v3);
        if (null == _v0 || "" === _v0) return [];
        let _v1 = JSON.parse(_v0);
        if (!Array.isArray(_v1)) return [];
        return _v1.filter(_v0 => "number" == typeof _v0);
      } catch {
        return [];
      }
    },
    _v5 = (0, _v1.create)((_v0, _v1) => ({
      warningFolderId: null,
      requestId: 0,
      protectedVideosByFolder: new Map(),
      startRequest: () => {
        let _v0 = _v1().requestId + 1;
        return _v0({
          requestId: _v0,
          warningFolderId: null
        }), _v0;
      },
      recordCheck: (_v0, _v1) => {
        _v0(_v0 => {
          let _v1 = new Map(_v0.protectedVideosByFolder);
          return _v1.set(_v0, _v1), {
            protectedVideosByFolder: _v1
          };
        });
      },
      showWarning: (_v0, _v1) => {
        _v1 === _v1().requestId && _v0({
          warningFolderId: _v0
        });
      },
      dismissWarning: () => {
        _v0({
          warningFolderId: null
        });
      },
      acknowledgeWarning: () => {
        let {
          warningFolderId: _v0
        } = _v1();
        null !== _v0 && (_v0 => {
          try {
            let _v0 = _v4();
            if (_v0.includes(_v0)) return;
            _v2.safeSessionStorage?.setItem(_v3, JSON.stringify([..._v0, _v0]));
          } catch {}
        })(_v0), _v0({
          warningFolderId: null
        });
      }
    }));
  _v0.s(["readWarnedFolderIds", 0, _v4, "useFolderProtectedVideosWarningStore", 0, _v5]);
}