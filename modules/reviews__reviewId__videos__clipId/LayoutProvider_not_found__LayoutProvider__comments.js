{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.createContext)({
    activeMobileDrawer: "",
    activeSideModule: "",
    isMobileDrawerOpen: !1,
    isSideModuleOpen: !1,
    isSideBySideActive: !1,
    toggleSideBySideView: () => console.warn("LayoutProvider not found"),
    setActiveMobileDrawer: () => console.warn("LayoutProvider not found"),
    setActiveSideModule: () => console.warn("LayoutProvider not found"),
    onClose: () => console.warn("LayoutProvider not found"),
    onDeeplinkDrawerModuleChange: () => console.warn("LayoutProvider not found"),
    onActiveDrawerModuleChange: () => console.warn("LayoutProvider not found"),
    isShowcaseLayout: !1
  });
  _v0.s(["LayoutProvider", 0, ({
    children: _v0,
    isShowcaseLayout: _v1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)(""),
      [_v4, _v5] = (0, _v2.useState)(""),
      [_v6, _v7] = (0, _v2.useState)(new URLSearchParams(window.location.hash.substring(1)).has("comments")),
      _v8 = "" !== _v4,
      _v9 = _v6 || _v8,
      _v10 = (0, _v3.useBreakpointValue)({
        base: !0,
        md: !1
      }, {
        fallback: "md"
      }),
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v10 ? _v3(_v0) : "COMMENTS" !== _v0 && "COMMENTS_SVV" !== _v0 && "DOWNLOAD" !== _v0 && "LIKES" !== _v0 && _v5(_v0);
      }, [_v10]),
      _v12 = (0, _v3.useBreakpointValue)({
        base: () => _v3(""),
        md: () => _v5("")
      }),
      _v13 = (0, _v2.useMemo)(() => {
        let _v0 = new URLSearchParams(window.location.hash.substring(1)),
          _v1 = new URLSearchParams(window.location.search),
          _v2 = [];
        return (_v1.has("tq") || "1" === _v1.get("autotranscript")) && _v2.push("TRANSCRIPT"), _v0.has("chapter") && _v2.push("CHAPTERS"), "true" === _v1.get("open_ai") && _v2.push("VIMEO_AI"), _v2;
      }, []),
      _v14 = (0, _v2.useCallback)(_v0 => {
        if (0 !== _v13.length) {
          for (let _v0 of _v13) if (_v0[_v0]) {
            _v11(_v0);
            break;
          }
        }
      }, [_v13, _v11]);
    return (0, _v1.jsx)(_v4.Provider, {
      value: {
        isMobileDrawerOpen: !!_v2,
        isSideModuleOpen: _v8,
        isSideBySideActive: _v9,
        toggleSideBySideView: () => {
          _v7(_v0 => !_v0);
        },
        setActiveMobileDrawer: _v3,
        activeMobileDrawer: _v2,
        setActiveSideModule: _v5,
        activeSideModule: _v4,
        onClose: _v12,
        onDeeplinkDrawerModuleChange: _v14,
        isShowcaseLayout: _v1,
        onActiveDrawerModuleChange: _v11
      },
      children: _v0
    });
  }, "useLayout", 0, () => {
    let _v0 = (0, _v2.useContext)(_v4);
    if (!_v0) throw Error("useLayout must be used within a LayoutProvider");
    return _v0;
  }]);
}