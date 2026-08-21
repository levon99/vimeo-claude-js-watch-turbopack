{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useInfo", 0, () => {
    let _v0 = (0, _v2.useStore)(_v0 => _v0.infoStore.name),
      _v1 = (0, _v2.useStore)(_v0 => _v0.infoStore.description),
      _v2 = (0, _v2.useStore)(_v0 => _v0.commonStore.focusType),
      _v3 = (0, _v2.useStore)(_v0 => _v0.infoStore.actions.setName),
      _v4 = (0, _v2.useStore)(_v0 => _v0.infoStore.actions.setDescription),
      _v5 = (0, _v2.useStore)(_v0 => _v0.commonStore.actions.setFocusType),
      _v6 = (0, _v1.useMemo)(() => _v2 === _v3.FocusInputFieldsType.INFO_NAME, [_v2]);
    return {
      showInfoNameCharacterLimit: _v6,
      showInfoDescriptionCharacterLimit: (0, _v1.useMemo)(() => _v2 === _v3.FocusInputFieldsType.INFO_DESCRIPTION, [_v2]),
      name: _v0,
      description: _v1,
      setOnFocusForName: _v0 => {
        _v5(_v0 ? _v3.FocusInputFieldsType.INFO_NAME : null);
      },
      setOnFocusForDescription: _v0 => {
        _v5(_v0 ? _v3.FocusInputFieldsType.INFO_DESCRIPTION : null);
      },
      onChangeTitle: _v0 => {
        _v3(_v0.target.value);
      },
      onChangeDescription: _v0 => {
        _v4(_v0.target.value);
      }
    };
  }]);
}