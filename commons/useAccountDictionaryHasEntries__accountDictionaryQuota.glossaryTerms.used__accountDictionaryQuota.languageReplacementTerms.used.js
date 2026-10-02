{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useAccountDictionaryHasEntries", 0, _v0 => {
    let _v1 = null !== _v0 && _v0 > 0 ? _v0 : null,
      {
        data: _v2,
        error: _v3
      } = (0, _v1.useGetUser)(() => null !== _v1 ? {
        select: ["accountDictionaryQuota.glossaryTerms.used", "accountDictionaryQuota.languageReplacementTerms.used", "accountDictionaryQuota.customRulesCharacters.used"],
        where: {
          userId: _v1
        }
      } : null);
    if (void 0 === _v2 && void 0 === _v3) return;
    let _v4 = _v2?.accountDictionaryQuota;
    return (_v4?.glossaryTerms?.used ?? 0) > 0 || (_v4?.languageReplacementTerms?.used ?? 0) > 0 || (_v4?.customRulesCharacters?.used ?? 0) > 0;
  }]);
}