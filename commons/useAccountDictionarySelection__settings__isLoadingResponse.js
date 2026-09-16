{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useAccountDictionarySelection", 0, () => {
    let {
        settings: _v0,
        isLoadingResponse: _v1
      } = (0, _v2.useOrionSettings)(),
      [_v2, _v3] = (0, _v1.useState)(!0),
      _v4 = !_v1 && _v0.enable_account_wide_dictionary_management;
    return {
      isAccountDictionaryAvailable: _v4,
      shouldUseAccountDictionary: _v2,
      setShouldUseAccountDictionary: _v3,
      accountDictionaryPreference: _v4 ? _v2 : void 0
    };
  }]);
}