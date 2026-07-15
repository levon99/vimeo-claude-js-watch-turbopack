{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v2.createContext)({
    onClickRegistration: () => void 0,
    onClickEndEvent: () => void 0,
    onClose: () => void 0
  });
  _v0.s(["CallbackContextProvider", 0, ({
    children: _v0,
    onClickRegistration: _v1,
    onClickEndEvent: _v2,
    onClose: _v3,
    onFormTabSwitched: _v4,
    onFormPresetChanged: _v5,
    onConnectProvidersClicked: _v6,
    onFormPlacementChanged: _v7,
    onFormSettingToggled: _v8,
    onFormSectionSwitched: _v9,
    onFormFieldAdded: _v10,
    onFormHiddenFieldAdded: _v11,
    onPrivacyPolicyChanged: _v12,
    onFormAppearanceChanged: _v13,
    onFormPreviewTypeChanged: _v14,
    onFormPreviewDeviceChanged: _v15,
    onRegistrantsActionClicked: _v16
  }) => {
    let _v17 = (0, _v2.useMemo)(() => ({
      onClickRegistration: _v1,
      onClickEndEvent: _v2,
      onClose: _v3,
      onFormTabSwitched: _v4,
      onFormPresetChanged: _v5,
      onConnectProvidersClicked: _v6,
      onFormPlacementChanged: _v7,
      onFormSettingToggled: _v8,
      onFormSectionSwitched: _v9,
      onFormFieldAdded: _v10,
      onFormHiddenFieldAdded: _v11,
      onPrivacyPolicyChanged: _v12,
      onFormAppearanceChanged: _v13,
      onFormPreviewTypeChanged: _v14,
      onFormPreviewDeviceChanged: _v15,
      onRegistrantsActionClicked: _v16
    }), [_v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16]);
    return (0, _v1.jsx)(_v3.Provider, {
      value: _v17,
      children: _v0
    });
  }, "useCallbackContext", 0, () => {
    let _v0 = (0, _v2.useContext)(_v3);
    return _v0 || console.error("useCallbackContext must be used within a CallbackContextProvider"), _v0;
  }]);
}