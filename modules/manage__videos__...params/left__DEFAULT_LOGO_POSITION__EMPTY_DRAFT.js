{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "left",
    _v3 = {
      ambientBacklight: !1,
      hideVimeoHeader: !1,
      backgroundColor: null,
      titleFontFamily: null,
      titleFontWeight: null,
      logo: {
        enabled: !1,
        customLogoUrl: null,
        position: _v2
      },
      selectedPresetId: null
    };
  _v0.s(["DEFAULT_LOGO_POSITION", 0, _v2, "EMPTY_DRAFT", 0, _v3, "logoPositionToPersist", 0, _v0 => _v0.logo.enabled ? _v0.logo.position : null], 0), _v0.s(["idFromUri", 0, function (_v0) {
    if (!_v0) return null;
    let _v1 = _v0.match(/(\d+)(?:\/)?$/);
    if (!_v1) return null;
    let _v2 = Number(_v1[1]);
    return Number.isFinite(_v2) ? _v2 : null;
  }, "presetToDraft", 0, function (_v0) {
    let _v1 = _v0?.settings?.customization ?? null;
    return _v1 ? {
      ambientBacklight: !!_v1.ambientBacklight,
      hideVimeoHeader: !!_v1.hideVimeoHeader,
      backgroundColor: _v1.backgroundColor ?? null,
      titleFontFamily: (0, _v1.asTitleFontId)(_v1.titleFontFamily),
      titleFontWeight: (0, _v1.asTitleFontWeight)(_v1.titleFontWeight),
      logo: {
        enabled: !!_v1.logo?.enabled,
        customLogoUrl: _v1.logo?.customLogoUrl ?? null,
        position: _v1.logo?.position ?? _v2
      },
      selectedPresetId: null
    } : {
      ..._v3
    };
  }], 0);
}