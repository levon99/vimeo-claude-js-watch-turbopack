{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = _v0 => (0, _v5.isValidDeltaLength)(_v0, _v8.ShowcaseFormMaxCharLength.SEO_TITLE, "seoTitle") && (0, _v5.isDeltaFieldValueEmpty)(_v0, "seoTitle"),
    _v10 = _v0 => (0, _v5.isValidDeltaLength)(_v0, _v8.ShowcaseFormMaxCharLength.SEO_DESCRIPTION, "seoDescription"),
    _v11 = _v0 => (0, _v5.isDeltaFieldValueEmpty)(_v0, "rokuProviderName");
  _v0.s(["useForm", 0, () => {
    let {
        commonStore: _v0
      } = (0, _v2.useStore)(_v0 => _v0),
      {
        actions: {
          resetDeltaValues: _v1,
          getDeltaChanges: _v2,
          resetStoreValues: _v3
        },
        deltaValues: _v4,
        trackNestedKeys: _v5
      } = _v0,
      {
        layout: _v6
      } = (0, _v2.useStore)(_v0 => _v0.appearanceStore),
      _v7 = (0, _v6.getDeltaFieldsForLayout)(_v6),
      _v8 = (0, _v5.createPredicateProcessor)([_v7.isInfoTitleValid, _v7.isInfoDescriptionValid, _v7.isPrivacyValid, _v9, _v10, _v11]),
      {
        getUpgradeControlsEnabled: _v9
      } = (0, _v3.useAppearance)(),
      _v10 = (0, _v1.useCallback)(() => {
        let _v0 = _v7(_v4);
        return (0, _v5.isEmpty)(_v0);
      }, [_v4]),
      _v11 = (0, _v1.useCallback)(() => {
        let _v0 = _v8(_v4),
          _v1 = _v9();
        return (0, _v5.isEmpty)(_v0) || _v1;
      }, [_v4]);
    return {
      isDeltaEmpty: _v10,
      resetDeltaValues: _v1,
      getDeltaKeyValuePairs: (0, _v1.useCallback)(() => {
        let _v0 = new Set([..._v4.albumFields, ..._v4.albumCustomFields]);
        return Object.entries(_v2()).reduce((_v0, [_v1, _v2]) => (_v0.has(_v1) && Array.isArray(_v2) && _v2.length > 1 && (_v0[_v1] = _v2[1]), _v0), {});
      }, [_v2]),
      resetStoreValues: _v3,
      isSaveDisabled: _v11,
      getDeltaKeys: (0, _v1.useCallback)(() => {
        let _v0 = new Set([..._v4.albumFields, ..._v4.albumCustomFields]),
          _v1 = _v2(),
          _v2 = new Set(Object.keys(_v5));
        return Object.entries(_v1).reduce((_v0, [_v1, _v2]) => {
          if (!_v0.has(_v1) || !Array.isArray(_v2) || _v2.length <= 1) return _v0;
          let _v3 = _v2[1];
          return "object" == typeof _v3 && null !== _v3 && !Array.isArray(_v3) && _v2.has(_v1) ? _v0.push(...(0, _v5.getDotKey)({
            [_v1]: _v3
          })) : _v0.push(_v1), _v0;
        }, []);
      }, [_v2, _v5])
    };
  }], 0);
}