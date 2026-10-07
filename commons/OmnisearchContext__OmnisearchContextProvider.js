{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v2.createContext)({
    setFolderName: () => {},
    folderName: ""
  });
  _v0.s(["OmnisearchContext", 0, _v3, "OmnisearchContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(""),
      _v3 = (0, _v2.useMemo)(() => ({
        folderName: _v1,
        setFolderName: _v2
      }), [_v1, _v2]);
    return (0, _v1.jsx)(_v3.Provider, {
      value: _v3,
      children: _v0
    });
  }]);
}