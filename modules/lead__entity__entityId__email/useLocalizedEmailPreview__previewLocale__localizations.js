{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useLocalizedEmailPreview", 0, () => {
    let {
        previewLocale: _v0,
        localizations: _v1
      } = (0, _v3.useEmailLocalization)(),
      {
        emailState: _v2,
        activeContentKey: _v3
      } = (0, _v2.useEmailCustomization)(),
      _v4 = null === _v0 ? void 0 : _v1.savedLocales[_v0]?.leaves,
      {
        subject: _v5,
        header: _v6,
        body: _v7,
        buttonInfo: _v8
      } = _v2,
      _v9 = _v5[_v3] ?? "",
      _v10 = _v6[_v3] ?? "",
      _v11 = _v7[_v3] ?? "",
      _v12 = _v8[_v3]?.text ?? "";
    return (0, _v1.useMemo)(() => {
      if (void 0 === _v4) return null;
      let _v0 = (0, _v4.getLocalizationKeyForContentKey)(_v3),
        _v1 = (_v0, _v1) => {
          let _v2 = _v4[(0, _v4.getEmailLocalizationPath)(_v0, _v0)]?.value;
          return void 0 === _v2 || "" === _v2.trim() ? _v1 : _v2;
        };
      return {
        [_v4.EMAIL_LOCALIZATION_FIELD.SUBJECT]: _v1(_v4.EMAIL_LOCALIZATION_FIELD.SUBJECT, _v9),
        [_v4.EMAIL_LOCALIZATION_FIELD.HEADER]: _v1(_v4.EMAIL_LOCALIZATION_FIELD.HEADER, _v10),
        [_v4.EMAIL_LOCALIZATION_FIELD.BODY]: _v1(_v4.EMAIL_LOCALIZATION_FIELD.BODY, _v11),
        [_v4.EMAIL_LOCALIZATION_FIELD.BUTTON_TEXT]: _v1(_v4.EMAIL_LOCALIZATION_FIELD.BUTTON_TEXT, _v12)
      };
    }, [_v4, _v3, _v9, _v10, _v11, _v12]);
  }]);
}