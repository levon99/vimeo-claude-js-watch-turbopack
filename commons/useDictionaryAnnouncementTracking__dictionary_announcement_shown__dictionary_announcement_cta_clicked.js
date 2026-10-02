{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDictionaryAnnouncementTracking", 0, () => {
    let _v0 = (0, _v2.usePico)();
    return {
      trackDictionaryAnnouncementShown: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("dictionary_announcement_shown", {
        dictionary_announcement_id: _v0.dictionaryAnnouncementId,
        dictionary_announcement_surface: _v0.dictionaryAnnouncementSurface
      }), !0), [_v0]),
      trackDictionaryAnnouncementCtaClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("dictionary_announcement_cta_clicked", {
        dictionary_announcement_id: _v0.dictionaryAnnouncementId,
        dictionary_announcement_surface: _v0.dictionaryAnnouncementSurface
      }), !0), [_v0])
    };
  }]);
}