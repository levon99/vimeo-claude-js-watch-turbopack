{
  "use strict";

  let _v1 = (0, _v0.i(0).createSlice)({
      name: "drawer",
      initialState: {
        isOttPublishDrawerOpen: !1,
        isShareDrawerOpen: !1,
        defaultSharePanel: "COPY_LINK_PANEL",
        skipDefaultPanelTracking: !1
      },
      reducers: {
        setOttPublishDrawerOpen(_v0, _v1) {
          _v0.isOttPublishDrawerOpen = _v1.payload;
        },
        setShareDrawerOpen(_v0, _v1) {
          _v0.isShareDrawerOpen = _v1.payload;
        },
        setDefaultSharePanel(_v0, _v1) {
          _v0.defaultSharePanel = _v1.payload, _v0.skipDefaultPanelTracking = !1;
        },
        setDefaultSharePanelSilent(_v0, _v1) {
          _v0.defaultSharePanel = _v1.payload, _v0.skipDefaultPanelTracking = !0;
        }
      }
    }),
    {
      setOttPublishDrawerOpen: _v2,
      setShareDrawerOpen: _v3,
      setDefaultSharePanel: _v4,
      setDefaultSharePanelSilent: _v5
    } = _v1.actions,
    _v6 = _v1.reducer;
  _v0.s(["default", 0, _v6, "setDefaultSharePanel", 0, _v4, "setDefaultSharePanelSilent", 0, _v5, "setOttPublishDrawerOpen", 0, _v2, "setShareDrawerOpen", 0, _v3]);
}