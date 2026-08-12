{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v2.createContext)(null);
  _v0.s(["StagedFilesProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)([]),
      _v3 = (0, _v2.useRef)(0),
      _v4 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = Array.from(_v0);
        if (0 === _v2.length) return;
        let _v3 = _v2.map(_v0 => ({
          id: _v3.current++,
          file: _v0,
          isDropzone: _v1
        }));
        _v2(_v0 => [..._v0, ..._v3]);
      }, []),
      _v5 = (0, _v2.useCallback)(_v0 => {
        _v2(_v0 => _v0.filter(_v0 => _v0.id !== _v0));
      }, []),
      _v6 = (0, _v2.useCallback)(() => {
        _v2([]);
      }, []),
      _v7 = (0, _v2.useMemo)(() => ({
        files: _v1,
        addFiles: _v4,
        removeFile: _v5,
        clear: _v6
      }), [_v1, _v4, _v5, _v6]);
    return (0, _v1.jsx)(_v3.Provider, {
      value: _v7,
      children: _v0
    });
  }, "useStagedFiles", 0, () => {
    let _v0 = (0, _v2.useContext)(_v3);
    if (null === _v0) throw Error("useStagedFiles must be used within a StagedFilesProvider");
    return _v0;
  }]);
}