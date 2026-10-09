{
  "use strict";

  let _v1;
  var _v2 = _v0.i(0);
  let _v3 = Object.values(_v2.Locales);
  function _v4(_v0) {
    if (!_v0) return _v2.Locales.en;
    let _v1 = _v3.find(_v0 => _v0.valueOf() === _v0);
    if (_v1) return _v1;
    let _v2 = _v0.split("-")[0]?.toLowerCase();
    return _v2 ? _v3.find(_v0 => _v0.split("-")[0]?.toLowerCase() === _v2) ?? _v2.Locales.en : _v2.Locales.en;
  }
  _v0.s(["matchLocale", 0, _v4], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (_v1 = () => [(0, _v7.useGlobalStore)(_v0 => _v0.leadCapture.customFields), (0, _v7.useGlobalStore)(_v0 => _v0.leadCapture.htmlLocalizations), (0, _v7.useGlobalStore)(_v0 => _v0.leadCapture.buttonLocalizations)], () => (0, _v6.getTranslatedLocales)(..._v1()));
  _v0.s(["useTranslatedLocales", 0, _v8], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["useFormLocale", 0, () => {
    let {
        currentPageType: _v0
      } = (0, _v9.useCurrentPageContext)(),
      {
        isMiniaturePreview: _v1
      } = (0, _v10.usePreviewContext)(),
      _v2 = (0, _v7.useGlobalStore)(_v0 => _v0.selectedLanguage),
      _v3 = (0, _v7.useGlobalStore)(_v0 => _v0.viewerLanguage),
      _v4 = (0, _v7.useGlobalStore)(_v0 => _v0.leadCapture.defaultLocale),
      _v5 = _v4((0, _v5.useLocale)()),
      _v6 = _v8();
    return _v0 !== _v11.PAGE_TYPES.REGISTRATION || _v1 ? _v2 : (0, _v6.resolveSelectedLocale)(_v3 ?? _v5, _v6, _v4);
  }], 0);
}