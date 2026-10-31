{
  "use strict";

  let _v1;
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (_v1 = () => [(0, _v5.useGlobalStore)(_v0 => _v0.leadCapture.customFields), (0, _v5.useGlobalStore)(_v0 => _v0.leadCapture.htmlLocalizations), (0, _v5.useGlobalStore)(_v0 => _v0.leadCapture.buttonLocalizations)], () => (0, _v4.getTranslatedLocales)(..._v1()));
  _v0.s(["useTranslatedLocales", 0, _v6], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useFormLocale", 0, () => {
    let {
        currentPageType: _v0
      } = (0, _v7.useCurrentPageContext)(),
      {
        isMiniaturePreview: _v1
      } = (0, _v8.usePreviewContext)(),
      _v2 = (0, _v5.useGlobalStore)(_v0 => _v0.selectedLanguage),
      _v3 = (0, _v5.useGlobalStore)(_v0 => _v0.viewerLanguage),
      _v4 = (0, _v5.useGlobalStore)(_v0 => _v0.leadCapture.defaultLocale),
      _v5 = (0, _v2.matchLocale)((0, _v3.useLocale)()),
      _v6 = _v6();
    return _v0 !== _v9.PAGE_TYPES.REGISTRATION || _v1 ? _v2 : (0, _v4.resolveSelectedLocale)(_v3 ?? _v5, _v6, _v4);
  }], 0);
}