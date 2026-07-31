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
    onForcedLeadCaptureFormChange: _v6,
    onConnectProvidersClicked: _v7,
    onFormPlacementChanged: _v8,
    onFormSettingToggled: _v9,
    onFormSectionSwitched: _v10,
    onFormFieldAdded: _v11,
    onFormHiddenFieldAdded: _v12,
    onPrivacyPolicyChanged: _v13,
    onFormAppearanceChanged: _v14,
    onFormPreviewTypeChanged: _v15,
    onFormPreviewDeviceChanged: _v16,
    onRegistrantsActionClicked: _v17
  }) => {
    let _v18 = (0, _v2.useMemo)(() => ({
      onClickRegistration: _v1,
      onClickEndEvent: _v2,
      onClose: _v3,
      onFormTabSwitched: _v4,
      onFormPresetChanged: _v5,
      onForcedLeadCaptureFormChange: _v6,
      onConnectProvidersClicked: _v7,
      onFormPlacementChanged: _v8,
      onFormSettingToggled: _v9,
      onFormSectionSwitched: _v10,
      onFormFieldAdded: _v11,
      onFormHiddenFieldAdded: _v12,
      onPrivacyPolicyChanged: _v13,
      onFormAppearanceChanged: _v14,
      onFormPreviewTypeChanged: _v15,
      onFormPreviewDeviceChanged: _v16,
      onRegistrantsActionClicked: _v17
    }), [_v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17]);
    return (0, _v1.jsx)(_v3.Provider, {
      value: _v18,
      children: _v0
    });
  }, "useCallbackContext", 0, () => {
    let _v0 = (0, _v2.useContext)(_v3);
    return _v0 || console.error("useCallbackContext must be used within a CallbackContextProvider"), _v0;
  }]);
}